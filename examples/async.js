function addLinkScript(src) {
    return new Promise(function (resolve, reject) {
        let script = document.createElement("script");
        script.src = src;
        script.onload = function () {
            resolve(script);
        };
        script.onerror = function () {
            resolve("cút");
        };
        document.head.append(script);
    });

}
const myPromise = addLinkScript("https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.11/lodash.js")