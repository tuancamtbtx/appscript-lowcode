// stringUtils.ts

export default class StringUtils {
  /**
   * Capitalizes the first letter of a string.
   * @param str - The input string.
   * @returns The capitalized string.
   */
  static capitalize(str: string): string {
    if (!str) return "";
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  /**
   * Converts a string to camelCase.
   * @param str - The input string.
   * @returns The camelCase string.
   */
  static toCamelCase(str: string): string {
    return str.replace(/([-_][a-z])/gi, (match) => {
      return match.toUpperCase().replace("-", "").replace("_", "");
    });
  }

  /**
   * Checks if a string is a palindrome.
   * @param str - The input string.
   * @returns True if the string is a palindrome, false otherwise.
   */
  static isPalindrome(str: string): boolean {
    const cleanedStr = str.replace(/[^A-Za-z0-9]/g, "").toLowerCase();
    const reversedStr = cleanedStr.split("").reverse().join("");
    return cleanedStr === reversedStr;
  }

  // Add more utility functions as needed...
}
