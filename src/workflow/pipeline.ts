import { WorkflowFactory } from "./factory";
import { Task, JsonObject } from "./config";
export class WorkflowPipeline {
  config: JsonObject;
  public constructor(config: JsonObject) {
    this.config = config;
  }
  async executeTask(task: Task, results: Map<string, any>) {
    let result = task.instance.execute();

    results.set(task.tagId, result);
  }
  async runPipeline(): Promise<boolean> {
    let workflowFactory = new WorkflowFactory(this.config);
    let config: Task[] = workflowFactory.build();
    const results = new Map<string, any>();
    for (const task of config) {
      console.log(`Task ${task.tagId} is being executed`);
      //   if (task.dependencies.every((dep) => results.has(dep))) {
      await this.executeTask(task, results);
      //   } else {
      //     console.error(`Task ${task.tagId} cannot be executed due to unmet dependencies.`);
      //     throw new Error(`Task ${task.tagId} cannot be executed due to unmet dependencies.`);
      //   }
    }
    return true;
  }
}
