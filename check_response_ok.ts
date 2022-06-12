import { assert } from "https://deno.land/std@0.143.0/testing/asserts.ts";

export function check_response_ok(response: Response) {
    const { status, url } = response;
    assert(response.ok, "response failure:" + JSON.stringify({ status, url }));
}
