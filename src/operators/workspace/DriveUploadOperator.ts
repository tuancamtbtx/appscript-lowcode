import BaseOperator from "../base";
class DriveUploadOperator implements BaseOperator {
  file: any;
  folderId: string;
  public constructor(params?: Partial<DriveUploadOperator>) {
    Object.assign(this, params);
  }
  validateParams(): boolean {
    return true;
  }
  async execute(): Promise<boolean> {
    try {
      const folder = DriveApp.getFolderById(this.folderId);
      const blob = this.file.getBlob();
      folder.createFile(blob);
      return true;
    } catch (error) {
      console.error(error);
      return false;
    }
  }
}
export default DriveUploadOperator;
