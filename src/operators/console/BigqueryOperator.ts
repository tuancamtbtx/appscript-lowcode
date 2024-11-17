import BaseOperator from "../base";

export default class BigqueryOperator implements BaseOperator {
  query: string;
  NAME: string = "BigqueryOperator";
  params: any = ["query"];
  public constructor(params?: Partial<BigqueryOperator>) {
    Object.assign(this, params);
  }
  runQuery(projectId: string, query: string) {
    const request: any = {
      query: query,
      useLegacySql: false,
    };
    let queryResults = BigQuery.Jobs.query(request, projectId);
    return queryResults;
  }
  getRows(projectId: string, queryResults: any) {
    // Get all the rows of results.
    const jobId = queryResults.jobReference.jobId;

    // Check on status of the Query Job.
    let rows = queryResults.rows;
    while (queryResults.pageToken) {
      queryResults = BigQuery.Jobs.getQueryResults(projectId, jobId, {
        pageToken: queryResults.pageToken,
      });
      rows = rows.concat(queryResults.rows);
    }
    return rows;
  }
  validateParams(): boolean {
    return true;
  }
  async execute(): Promise<any> {}
}
