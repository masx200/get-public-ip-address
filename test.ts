import { getPublicIpAddress } from "./getPublicIpAddress.ts";
import { getPublicIpv4 } from "./getPublicIpv4.ts";
import { getPublicIpv6 } from "./getPublicIpv6.ts";

Deno.test("getPublicIpv6", async () => {
    try {
        console.log(await getPublicIpv6());
    } catch (error) {
        console.warn("error", error);
        console.warn("message", String(error));
    }
});
Deno.test("getPublicIpv4", async () => {
    console.log(await getPublicIpv4());
});
Deno.test("getPublicIpAddress", async () => {
    console.log(await getPublicIpAddress());
});
