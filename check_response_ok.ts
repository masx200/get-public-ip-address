export async function check_response_ok(response: Response) {
    const { status, url } = response;
    if (!response.ok) {
        const body = await response.text();
        throw Error(
            "response failure ok:" +
                JSON.stringify({ status, url }) +
                "\n" +
                body,
        );
    }
}
