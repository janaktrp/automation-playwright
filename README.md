
# Playwright + TypeScript automation framework for UI and API testing on Windows.

# 1 Prerequisites
Install the following software before setting up the framework:

* Node.js
* npm
* Git
* Visual Studio Code
* Playwright VS Code Extension

# 2 Install Node.js

Download and install the LTS version of Node.js for Windows.
After installation, open a new PowerShell or bash and verify:

node --version
npm --version

Node.js includes npm, which is required to install Playwright and other project dependencies.

# 3 Install Git

Install Git for Windows.

Verify the installation:
git --version

Git is used for source control and integrating the framework with repositories such as GitHub, GitLab

# 4 Install Visual Studio Code

Install Visual Studio Code.

Install  Playwright Test for VS Code

The Playwright VS Code extension provides test discovery, execution, debugging, trace viewing, and other Playwright-specific features.

# 5 Create the Project Directory

Create a folder for the automation framework.

Example:
mkdir PlaywrightAutomation
cd PlaywrightAutomation

Alternatively, create the folder manually and open it in VS Code.

# 6 Initialize the Playwright Project

From the project root directory:
npm init playwright@latest

When prompted:
Do you want to use TypeScript or JavaScript?
> TypeScript

Where to put your end-to-end tests?
> tests

Add a GitHub Actions workflow?
> No

Install Playwright browsers?
> Yes
Playwright creates the initial project structure, including:

playwright.config.ts
package.json
package-lock.json
tests/

# 7 Verify Playwright Installation

Check the installed Playwright version:
npx playwright --version

# 8 Install Playwright Browsers

If browsers were not installed during project initialization, run:

npx playwright install
This installs the Playwright-managed browser binaries.

To install only Chromium
npx playwright install chromium

To install all supported browsers:
npx playwright install chromium firefox webkit


Playwright requires browser binaries compatible with the installed Playwright version.
For this framework, Chromium is used as the primary browser during development.


# 9 Verify the Example Test

Run all configured tests:

npx playwright test
headed mode
npx playwright test --headed

# 10 Run Only Chromium

npx playwright test --project=chromium

# 11 Install API and Test Data Dependencies

Playwright already provides API testing through its `request` fixture, so a separate API automation framework is not required.

Additional packages can be installed based on framework requirements.

For CSV handling:
npm install csv-parse csv-stringify


# 12. Create the Framework Folder Structure 
- Pages
- UI test folder
- API test folder
- Data
- Fixtures
- Utils 

Reccommended utils 
- date
- string
- json
- csv
- random
- file

Avoid putting Playwright page interactions into generic utilities.



# 13. Create Environment Configuration

For environment-specific configuration, create:

config/

Example:
dev.config.ts
qa.config.ts
staging.config.ts

Environment variables can also be used for values such as:

BASE_URL
API_BASE_URL
USERNAME
PASSWORD

Do not commit passwords, API keys, tokens, or other secrets to Git.

# 14. Add Environment Variables

For local development, environment variables can be configured using a `.env` file if the framework uses `dotenv`.

Install:
npm install dotenv
BASE_URL=https://example.com
API_BASE_URL=https://api.example.com


# 15 Run a Specific Test

Run a specific test file:
npx playwright test tests/ui/login.spec.ts

Run a specific test by name:
npx playwright test -g "login page"

Run a specific test with Chromium:
npx playwright test -g "login page" --project=chromium

Run a test by line number:
npx playwright test tests/ui/login.spec.ts:10


# 16 Debug a Test
Run:

npx playwright test --debug

Or debug a specific test:
npx playwright test tests/ui/login.spec.ts --debug

# 17 Generate a Test with Codegen

Playwright provides Codegen for recording browser interactions.

Run:
npx playwright codegen https://example.com

This opens a browser and generates Playwright code based on interactions.

# 18 Git Initialization

Initialize Git:
git init

Add files:
git add .

Create the first commit:
git commit -m "Initial Playwright automation framework"

# 19 Create .gitignore
Create:
.gitignore

Recommended entries:
node_modules/
test-results/
playwright-report/
blob-report/
.env
*.log
Do not commit:

* `node_modules`
* Playwright reports
* Test execution artifacts
* `.env` files
* Credentials
* API tokens
* Passwords


# 20 Verify the Complete Installation

Run the following commands:

node --version
npm --version
git --version
npx playwright --version

Then run:
npx playwright test

Run Chromium:
npx playwright test --project=chromium

Run UI mode:
npx playwright test --ui

Generate the report:
npx playwright show-report

# 21 Adding Playwright MCP (Model Context Protocol) server + Copilot
</> Bash
npm install -D @playwright/mcp
Verify:
npx @playwright/mcp --help

Install GitHub
On extension sidebar icon, search for 'Github copilot' amd install

1. Open your VS Code project in the terminal.
2. Create the `.vscode` folder
3. Create the MCP configuration file: `.vscode/mcp.json`
4. Add the MCP server configuration:

{
  "servers": {
    "playwright": {
      "command": "npx",
      "args": [
        "@playwright/mcp@latest"
      ]
    }
  }
}

5. Save the `mcp.json` file.
6. Reload or restart VS Code. (Developer: Reload Window)
7. Open GitHub Copilot Chat.
8. Check that the Playwright MCP server and its tools are available.
9. If the server does not start, make sure Node.js and `npx` are installed by running: `node --version` and `npx --version`.





## Useful Commands

Purpose — Command
Install project — `npm init playwright@latest`
Install browsers — `npx playwright install`
Install Chromium — `npx playwright install chromium`
Check Playwright version — `npx playwright --version`
Run all tests — `npx playwright test`
Run Chromium — `npx playwright test --project=chromium`
Run headed — `npx playwright test --headed`
Run UI Mode — `npx playwright test --ui`
Debug — `npx playwright test --debug`
Run specific file — `npx playwright test tests/ui/login.spec.ts`
Run specific test — `npx playwright test -g "test name"`
Codegen — `npx playwright codegen <url>`
View report — `npx playwright show-report`
Check Git — `git status`
Install dependencies — `npm install`


## Notes
* Use TypeScript for the automation framework
* Use Playwright Test for both UI and API automation
* Keep page-specific functionality in Page Objects
* Keep reusable framework functionality in `utils`
* Keep API-specific functionality in `api`
* Keep test data separate from test implementation
* Keep environment-specific configuration separate
* Never commit credentials or secrets
* Use Chromium during normal development if cross-browser testing is not required
* Add Firefox and WebKit projects when cross-browser testing becomes necessary
* Run `npm install` after cloning the repository
* Run `npx playwright install` when browser binaries need to be installed or updated

## Official Documentation

Playwright installation and setup documentation:
https://playwright.dev/docs/intro
Playwright browser installation documentation:
https://playwright.dev/docs/browsers
