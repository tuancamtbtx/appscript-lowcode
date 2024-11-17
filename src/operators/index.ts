import CommonOperator from "./common";
import ConsoleOperator from "./console";
import WorkspaceOperator from "./workspace";

export default {
  SlackSendOperator: CommonOperator.SlackSendOperator,

  BigqueryOperator: ConsoleOperator.BigqueryOperator,
  GCSOperator: ConsoleOperator.GCSOperator,

  GmailReadOperator: WorkspaceOperator.GmailReadOperator,
  GmailSendOperator: WorkspaceOperator.GmailSendOperator,
  DriveUploadOperator: WorkspaceOperator.DriveUploadOperator,
};
