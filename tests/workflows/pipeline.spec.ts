import { WorkflowPipeline } from "../../src/workflow/pipeline";
const config: any = {
  jobName: "test",
  apiVersion: "v1",
  tasks: [
    {
      name: "read_personal_gmail",
      operator: "GmailReadOperator",
      params: {
        query: "test",
      },
      dependencies: [],
    },
    {
      name: "load_attachment_to_gcs",
      operator: "SlackSendOperator",
      params: {
        test: "test",
      },
      dependencies: ["read_personal_gmail"],
    },
  ],
};

describe("WorkflowPipeline", () => {
  describe("run pipline", () => {
    it("returns true", async () => {
      // Arrange

      let workflowPipeline = new WorkflowPipeline(config);
      let tasks = workflowPipeline.runPipeline();
      expect(tasks).toBeTruthy();
    });
  });
});
