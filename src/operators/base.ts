export default interface BaseOperator {
  validateParams(): boolean;
  execute(): Promise<any>;
}
