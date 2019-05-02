# Creating Google Apps Script Projects from VS Code

## Setup

1. Clone the Apps Script Starter repository `https://github.com/labnol/apps-script-starter.git`.
2. Remove `git` and the `src` folder.
3. Run `$ yarn` in the project folder.
4. Login to `clasp` using `$ npx clasp login`.
5. Create a Google Apps Script project using the following command:
   `npx clasp create --type sheets --title "MailMan" --rootDir ./dist`
6. Make sure that in `webpack.config.js` the `mode` is set to `none`.
7. In the Apps Script manifest, `appscript.json`, remove unnecessary libraries and API scopes and add what you need for the project.
8. Create an `index.js` file in the `src` folder. This file will contain the actual script.
9. Run `$ yarn build && npx clasp push`. This will minify all files and upload them to the Apps Script project.