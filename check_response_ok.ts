export async function check_response_ok(response: Response) {
    const { status, url ,headers} = response;
    if (!response.ok) {
        const body = await response.text();
        throw Error(
            "response failure ok:" +
                JSON.stringify({ status, url,headers:Object.fromEntries(headers) }) +
                "\n" +
                body,
        );
    }
}
