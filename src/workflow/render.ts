import * as ejs from "ejs";

export class TemplateRender {
  // Render JavaScript code using EJS with environment variables
  renderJSCode(config: any) {
    if (!config) {
      throw new Error("Configuration has not been loaded. Call loadConfig() first.");
    }
    try {
      const renderedCode = ejs.render(config);
      return renderedCode;
    } catch (error) {
      console.error("Failed to render JavaScript code:", error);
      throw error;
    }
  }
}
