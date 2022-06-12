import { assert } from "https://deno.land/std@0.143.0/testing/asserts.ts";
import { isIPv4 } from "https://deno.land/std@0.143.0/node/internal/net.ts";
import { check_response_ok } from "./check_response_ok.ts";

export async function getPublicIpv4() {
    const response = await fetch("https://api4.ipify.org/");
    check_response_ok(response);
    const text = await response.text();
    assert(isIPv4(text), "isIPv4");
    return text;
}
