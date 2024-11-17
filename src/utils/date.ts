// dateUtils.ts
import * as moment from "moment";

export default class DateUtils {
  /**
   * Formats a date into a specified format.
   * @param date - The date to format.
   * @param format - The format string.
   * @returns The formatted date string.
   */
  static formatDate(date: Date | string, format: string): string {
    return moment(date).format(format);
  }

  /**
   * Calculates the difference between two dates in days.
   * @param date1 - The first date.
   * @param date2 - The second date.
   * @returns The difference in days.
   */
  static differenceInDays(date1: Date | string, date2: Date | string): number {
    const moment1 = moment(date1);
    const moment2 = moment(date2);
    return moment2.diff(moment1, "days");
  }

  /**
   * Adds a specified number of days to a date.
   * @param date - The original date.
   * @param days - The number of days to add.
   * @returns The new date.
   */
  static addDays(date: Date | string, days: number): Date {
    return moment(date).add(days, "days").toDate();
  }

  /**
   * Checks if a date is valid.
   * @param date - The date to check.
   * @returns True if the date is valid, false otherwise.
   */
  static isValidDate(date: Date | string): boolean {
    return moment(date).isValid();
  }

  // Add more utility functions as needed...
}
