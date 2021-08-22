const requests = require("./requests")
// @ponicode
describe("requests.getRandomPhoto", () => {
    test("0", () => {
        let callFunction = () => {
            requests.getRandomPhoto()
        }
    
        expect(callFunction).not.toThrow()
    })
})
