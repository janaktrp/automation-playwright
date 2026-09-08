import {test, expect} from "@playwright/test"

test("get API - jsonplaceholder", async ({request}) => {
    // demo api page -- https://jsonplaceholder.typicode.com/
    const response = await request.get("https://jsonplaceholder.typicode.com/posts/1");
    expect(response.status()).toBe(200);
    console.log("This is the response");
    console.log(response);
})


test("get API - datausa", async ({request}) => {
    // demo api page -- https://datausa.io/about/api/
    const response = await request.get("https://api.datausa.io/tesseract/cubes")
    expect(response.status()).toBe(200);
    // or use this
    // expect(response.ok()).toBeTruthy(); 
    console.log("This is the response");
    console.log(response);

    const text = await response.text();
    expect(text).toContain('Integrated Postsecondary Education Data System')

    console.log(await response.json())
})

test("get API - dummyjson.com", async ({request}) => {
    const response = await request.get("https://dummyjson.com/test")
    expect(response.status()).toBe(200);
    console.log("This is the response");
    console.log(response);
    console.log("This is json response");
    console.log(await response.json())

})