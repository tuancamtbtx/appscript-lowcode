import Workflow from "./workflow";
const fs = require("fs");

const index: any = {};
index.WorkflowPipeline = Workflow.WorkflowPipeline;

Object.assign(globalThis, index);

export default index;
