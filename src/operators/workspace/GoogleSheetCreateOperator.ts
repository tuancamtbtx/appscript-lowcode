export function createSheet(name: string) {
  const spreadsheet = SpreadsheetApp.create(name);
  return spreadsheet;
}
export function addHeaders(sheet: GoogleAppsScript.Spreadsheet.Sheet, headers: string[]) {
  sheet.appendRow(headers);
}

export function appendRows(sheet: GoogleAppsScript.Spreadsheet.Sheet, rows: any[][]) {
  sheet.getRange(sheet.getLastRow() + 1, 1, rows.length, rows[0].length).setValues(rows);
}
export function getSheetByName(name: string) {
  return SpreadsheetApp.getActiveSpreadsheet().getSheetByName(name);
}
export function getSheetById(id: string) {
  return SpreadsheetApp.openById(id);
}
export function getSheetByURL(url: string) {
  return SpreadsheetApp.openByUrl(url);
}
export function getSheetByFile(file: GoogleAppsScript.Drive.File) {
  return SpreadsheetApp.open(file);
}

export default class GoogleSheetCreateOperator {
  name: string;
  headers: string[];
  rows: any[][];
  public constructor(params?: Partial<GoogleSheetCreateOperator>) {
    Object.assign(this, params);
  }
  validateParams(): boolean {
    return true;
  }
  async execute(): Promise<boolean> {
    try {
      const spreadsheet = createSheet(this.name);
      const sheet = spreadsheet.getActiveSheet();
      addHeaders(sheet, this.headers);
      appendRows(sheet, this.rows);
      return true;
    } catch (error) {
      console.error(error);
      return false;
    }
  }
}