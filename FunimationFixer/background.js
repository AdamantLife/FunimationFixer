import {fixMA} from "./filterFix.js";

chrome.runtime.onInstalled.addListener(
    ()=>{
        chrome.webRequest.onBeforeRequest.addListener(...fixMA);
    }
)