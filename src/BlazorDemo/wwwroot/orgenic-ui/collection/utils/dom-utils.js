export { getElement };
async function getElement(element, selector, timeout) {
    const timeoutFn = ms => new Promise(resolve => setTimeout(resolve, ms));
    let time = 0;
    let result = element.querySelector(selector);
    while (!result && time < timeout) {
        time += 25;
        await timeoutFn(25);
        result = element.querySelector(selector);
    }
    return result;
}
