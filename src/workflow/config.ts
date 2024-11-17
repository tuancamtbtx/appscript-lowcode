import BaseOperator from "../operators/base";

export interface JsonObject {
  [key: string]: string | number | boolean | JsonObject | JsonObject[];
}
export class TaskConfig {
  operator: string;
  name: string;
  params: JsonObject;
  dependencies: string[];
  public constructor(init?: Partial<TaskConfig>) {
    Object.assign(this, init);
  }
}
export class Task {
  tagId: string;
  instance: BaseOperator;
  dependencies: string[];
  public constructor(init?: Partial<Task>) {
    Object.assign(this, init);
  }
}
export class WorkFlowConfig {
  public static readonly NAME = "workflow";
  public static readonly VERSION = "1.0.0";
  public static readonly DESCRIPTION = "Workflow library for AppScript";
  public static readonly AUTHOR = "tuan.nguyen3";

  public jobName: string;
  public description: string;
  public apiVersion: string;
  public tasks: TaskConfig[];
  public constructor(init?: Partial<WorkFlowConfig>) {
    Object.assign(this, init);
  }
}
export enum WorkFlowFields {
  JOB_NAME = "jobName",
  DESCRIPTION = "description",
  API_VERSION = "apiVersion",
  TASKS = "tasks",
}
export enum TaskFields {
  OPERATOR = "operator",
  NAME = "name",
  PARAMS = "params",
  DEPENDENCIES = "dependencies",
}
