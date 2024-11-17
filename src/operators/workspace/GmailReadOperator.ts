export default class GmailReadOperator {
  query: string;
  after: any
  NAME = "GmailReadOperator";
  params = ["query", "after"];
  public constructor(params?: Partial<GmailReadOperator>) {
    Object.assign(this, params);
  }
  getAttachments = (
    message: GoogleAppsScript.Gmail.GmailMessage,
  ): GoogleAppsScript.Gmail.GmailAttachment[] => {
    return message.getAttachments();
  };
  getListMail = (query: string): GoogleAppsScript.Gmail.GmailThread[] => {
    return GmailApp.search(query);
  };
  execute() {
    try {
      console.log("GmailReadOperator");
      let threads = this.getListMail(this.query);
      let results = threads.flatMap((t) => 
        t.getMessages()
          .filter((msg) => msg.getDate().getTime() > this.after.getTime()))
          .sort((a:any, b:any) => a.getDate() - b.getDate()); 
      console.log(results);
      return results;
    } catch (error) {
      console.error(error);
      throw new Error("GmailReadOperator error");
    }
  }
}
