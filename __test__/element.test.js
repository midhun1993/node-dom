const _tmpl = `
<html>
    <style>h1 { height: 10px;}</style>
    <body>
        <h1 style="height:20px" class="heading-1 hello">Hello, world!</h1>
        <h2 style="height:20px" class="heading-2 hello">Hello, world!</h2>
    </body>
</html>
`;
const { parse } = require('../dist');

describe("Element Class", () => {
    const document = parse(_tmpl);

    test("querySelector: valid class selector", () => {
        expect(document.querySelector(".heading-1").innerHTML).toBe("Hello, world!");
    })

    test("querySelector: not valid class selector", () => {
        expect(document.querySelector(".headingz")).toBe(null);
    })

    test("querySelectorAll: valid class", () => {
        expect(document.querySelectorAll(".hello").length).toBe(2);
    })

    test("querySelectorAll: not a valid class", () => {
        expect(document.querySelectorAll(".hellox")).toBe([]);
    })
})