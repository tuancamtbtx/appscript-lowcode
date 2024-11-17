/**
 * @fileoverview This is an example of how to use the WorkflowPipeline class.
 * The WorkflowPipeline class is used to run a series of workflows in a sequence.
 * The workflows are defined in a configuration file.
 * The configuration file is a JSON file that contains an array of workflow objects.
 */

const jsonString = HtmlService.createHtmlOutputFromFile("config.html").getContent();
const config = JSON.parse(jsonString);

const pipeline = new MyLibs.WorkflowPipeline(config);
function main() {
    pipeline
    .runPipeline()
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      console.error(error);
    });
}
