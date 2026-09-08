import {test, expect} from "@playwright/test"

test("posty API - dummyjson.com", async ({request}) => {
    const response = await request.post("https://dummyjson.com/test")
    expect(response.status()).toBe(200);
    console.log("This is the response");
    console.log(response);
    console.log("This is json response");
    console.log(await response.json())
})