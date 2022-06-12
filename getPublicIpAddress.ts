import { assert } from "https://deno.land/std@0.143.0/testing/asserts.ts";
import { isIP } from "https://deno.land/std@0.143.0/node/internal/net.ts";
import { check_response_ok } from "./check_response_ok.ts";

export async function getPublicIpAddress() {
    const response = await fetch("https://api64.ipify.org/");
    await check_response_ok(response);
    const text = await response.text();
    assert(isIP(text), "isIP");
    return text;
}
