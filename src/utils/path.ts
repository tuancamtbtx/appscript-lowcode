import * as path from "path";

export default class PathUtils {
  /**
   * Function to get the absolute path of a given relative path.
   * @param relativePath - The relative path to resolve.
   * @returns The absolute path.
   */
  static getAbsolutePath(relativePath: string): string {
    return path.resolve(relativePath);
  }
  /**
   * Function to get the absolute path from the current working directory and a relative path.
   * @param relativePath - The relative path to resolve.
   * @returns The absolute path.
   */
  static getAbsolutePathFromWorkingDir(relativePath: string): string {
    // Get the current working directory
    const currentWorkingDir = process.cwd();

    // Resolve the absolute path
    return path.resolve(currentWorkingDir, relativePath);
  }
}
