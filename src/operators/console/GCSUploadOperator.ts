export default class GCSUploadOperator {
  bucket: string;
  prefix: string;
  blob: any;
  NAME = "GCSUploadOperator";
  params = ["bucket", "prefix", "blob"];
  public constructor(params?: Partial<GCSUploadOperator>) {
    Object.assign(this, params);
  }
  execute() {
    const API = `https://www.googleapis.com/upload/storage/v1/b`;
    const location = encodeURIComponent(`${this.prefix}/${this.blob.getName()}`);
    const url = `${API}/${this.bucket}/o?uploadType=media&name=${location}`;
    const bytes = this.blob.getBytes();
    var options = {
      HttpMethod: "post",
      contentType: this.blob.getContentType(),
      contentLength: bytes.length,
      payload: bytes,
      headers: {
        Authorization: `Bearer ${ScriptApp.getOAuthToken()}`,
      },
    };
    const response = UrlFetchApp.fetch(url, options);
    const result = JSON.parse(response.getContentText());
    return `gs://${result.bucket}/${result.name}`;
  }
}
