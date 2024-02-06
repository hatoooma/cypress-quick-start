
### Prerequisites

- Node.js (v18 or higher) installed on your system.
- Git installed on your system (optional but recommended).
- VS code installed on your system (optional but recommended).

---

### Installation

To install this project locally, follow these steps:

1. Clone this repository to your local machine.
2. Navigate to the project directory.
3. Install NPM packages using this command:

   ```bash
   npm install
   ```

---

### Running Tests

- To run the Cypress tests '**headed**' using Cypress runner, run this command:

  ```bash
   npx cypress open
  ```

- To run the Cypress tests '**headless**', run this command:
  ```bash
   npx cypress run --spec '{specific feature file path}'
  ```

Here you can find the documentation for the 'cypress run' options : [Link](https://docs.cypress.io/guides/guides/command-line#cypress-run)

---

### Generate HTML report

To generate Allure-HTML report you should run your tests in headless mode only, run this command:

```bash
npx cypress run --spec '{specific feature file path}' --env allure=true
```
then
```bash
allure generate allure-results --clean -o allure-report
```
```bash
node ./node_modules/allure-single-html-file-js/combine.js allure-report
```


---

## Best practices

- Use lint. To run linter in your project, run this command:

  ```bash
  npx eslint ./cypress/e2e
  ```

- Kindly apply the naming convention guidelines provided below to ensure consistency with other projects, for easier maintenance and collaboration.
  | **Folders** | **Files** | **Classes** | **Functions** | **Variables** |
  | ----------------------------------------- | -------------------------------------- | ------------------------------ | ------------------------------- | ----------------------------- |
  | Use lowercase letters | Use lowercase letters | Use PascalCase | Use camelCase | Use camelCase |
  | Separate words with underscores (\_) | Separate words with underscores (\_) | Start with an uppercase letter | Start with a lowercase letter | Start with a lowercase letter |
  | Keep folder names concise and descriptive | Use meaningful and descriptive names | Be specific and descriptive | Describe the function's purpose | Be concise and meaningful |
  | | | | | |
  | Examples : `features` , `step_definitions` | Examples : `test.js` , `login_data.json` | Examples : `LoginPage` | Examples : `enterValidData` | Examples : `loginData` |
