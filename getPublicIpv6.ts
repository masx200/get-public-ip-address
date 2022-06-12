import { assert } from "https://deno.land/std@0.143.0/testing/asserts.ts";
import { isIPv6 } from "https://deno.land/std@0.143.0/node/internal/net.ts";
import { check_response_ok } from "./check_response_ok.ts";

export async function getPublicIpv6() {
    const response = await fetch("https://api6.ipify.org/");
    await check_response_ok(response);
    const text = await response.text();
    assert(isIPv6(text), "isIPv6");
    return text;
}
