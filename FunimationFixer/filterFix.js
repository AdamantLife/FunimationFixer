
const fixMARE = /(=|%7C)(14|G|PG|MA)(%7C|&|$)/i;

function fixMAcallback(details){
    console.log("here");
    console.log(details);
    let match = fixMARE.exec(details.url);
    // Not sure if it's necessary to return an object
    if(!match) return {};
    console.log("Redirecting:", details.url.replace(fixMARE, "$1TV-$2$3"));
    return {redirectUrl: details.url.replace(fixMARE, "$1TV-$2$3")};
}

const fixMAFilter = {
    types: ["xmlhttprequest"],
    urls: ["*://*.funimationsvc.com/*/search*"]
}

const fixMAopt_extraInfoSpec = ["blocking"];

const fixMA = [
    fixMAcallback,          // callback:
    fixMAFilter,            //filter:
    fixMAopt_extraInfoSpec  // opt_extraInfoSpec:
];

export {fixMA};