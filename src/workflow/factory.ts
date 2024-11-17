import { TaskConfig, WorkFlowConfig, Task, JsonObject } from "./config";

import Operators from "../operators";

export class WorkflowFactory {
  config: JsonObject;

  constructor(config: JsonObject) {
    this.config = config;
  }
  loadConfig() {
    try {
      let config = new WorkFlowConfig(this.config);
      return config;
    } catch (error) {
      console.error(error);
    }
  }
  build(): Task[] {
    try {
      console.log("build tasks");
      let config = this.loadConfig();
      let apiVersion = config.apiVersion;
      let workflowBuilder = WorkflowBuilderAdapter.adapters[apiVersion].createInstance();
      let tasks = workflowBuilder.makeTasks(config);
      return tasks;
    } catch (error) {
      throw new Error("Cannot build tasks");
    }
  }
}
class WorkflowBuilderAdapter {
  static adapters: Record<string, any> = {
    v1: {
      createInstance: () => new WorkflowBuilder(),
    },
  };
}
class WorkflowBuilder {
  constructor() {}
  makeTask(taskConfig: TaskConfig) {
    console.log(`make task - Name: ${taskConfig.name}`);
    console.log(`make task - Operator: ${taskConfig.operator}`);
    console.log(`make task - Params: ${JSON.stringify(taskConfig.params)}`);
    console.log(`make task - Dependencies: ${JSON.stringify(taskConfig.dependencies)}`);
    let task = new Task({
      tagId: taskConfig.name,
      instance: new Operators[taskConfig.operator](taskConfig.params),
    });
    return task;
  }
  makeTasks(workflowConfig: WorkFlowConfig) {
    let tasks = [];
    workflowConfig.tasks.forEach((conf) => {
      let isValidate = this.validateTask(conf);
      if (!isValidate) {
        throw new Error("Task is invalid");
      }
      let task = this.makeTask(conf);
      tasks.push(task);
    });
    return tasks;
  }

  validateTask(taskConfig: TaskConfig): boolean {
    if (!taskConfig.name || !taskConfig.operator || !taskConfig.params) {
      return false;
    }
    return true;
  }
}
