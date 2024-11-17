# Google Apps & TypeScript Project Template

This template provides a structured foundation for creating Google Apps Script projects using TypeScript.
Leveraging the power of TypeScript, this template streamlines the development of robust, type-safe
applications for Google Workspace, enabling efficient integration with Google Sheets, Docs, Forms, and other
Google services. With TypeScript's static type checking and modern JavaScript features, this template empowers
developers to build scalable, maintainable, and reliable Apps Script projects, enhancing productivity and code
quality within the Google Workspace ecosystem

## Deploy Your Library

1. Clone this Library

2. Ensure Node.js is installed on your system, then install all of the dependencies by running npm install.
   Alternatively, start a Codespace in your new repository and dependencies will be installed automatically.

3. Start a new Google Apps Script project by going to https://script.google.com/home and clicking New project.
   You can also start a project tied directly to a specific Google Apps file by opening the file and clicking
   Tools -> Script Editor.
4. Click the gear icon in the Google Apps Script editor sidebar. Copy the Script ID.

5. Replace **SCRIPT_ID** in .clasp.json with your project's ID. This ID is not a secret - you can safely
   commit it to your repository.

6. Write your TypeScript code in the src folder. Note that index.ts is the entrypoint for your project. Only
   what is imported into the index.ts file will be compiled into the script.

## Deploy

To deploy a Google Apps Script project using clasp, you can use the following steps:

1. First, ensure that you have Node.js installed on your machine.

2. Install clasp globally by running the following command in your terminal or command prompt:

   ```
   npm install -g @google/clasp
   ```

3. Next, navigate to the directory where your Apps Script project is stored using the terminal.

4. Log in to your Google account using clasp by running:

   ```
   clasp login
   ```

   Follow the instructions to complete the login process.

5. Once logged in, push your local Apps Script project to Google Drive using:

   ```
   make push
   ```

   This command will upload your local project to your Google Drive.

6. To deploy the Apps Script project, use the following command:

   ```
   make deploy
   ```

   Follow the prompts to select the version and description for the deployment.

7. After the deployment is successful, you can view and manage the deployed version from the Apps Script
   dashboard in your Google Drive.

## Use Your Library