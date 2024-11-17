export default class SlackSendOperator {
  text: string;
  block: any;
  channel: string;
  token: string;
  NAME = "SlackSendOperator";
  params = ["text", "block", "channel", "token"];
  public constructor(params?: Partial<SlackSendOperator>) {
    Object.assign(this, params);
  }
  execute() {
    console.log("SlackSendOperator");
    const url = "https://slack.com/api/chat.postMessage";
    const data = {
      text: this.text,
      channel: this.channel,
      color: "#3AA3E3",
      blocks: this.block,
    };
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${this.token}`,
    };
    var options = {
      HttpMethod: "post",
      contentType: "application/json",
      payload: JSON.stringify(data),
      headers: headers,
    };
    UrlFetchApp.fetch(url, options);
  }
}
