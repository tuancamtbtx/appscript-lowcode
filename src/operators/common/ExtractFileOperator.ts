class ExtractFileOperator {
  NAME = "ExtractFileOperator";
  params: {
    source: string;
    destination: string;
  };
  public constructor(params?: Partial<ExtractFileOperator>) {
    Object.assign(this, params);
  }
  execute() {}
}
