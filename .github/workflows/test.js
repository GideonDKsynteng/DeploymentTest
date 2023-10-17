// @ts-ignore
const core = require("@actions/core");

const obj = ["hello", "this is", "an array"];
core.setOutput("outputs", JSON.stringify(obj));
