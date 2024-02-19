# Unit and Automated Testing | JEST Library 🃏
## What are Unit Testing/Automated Testing?
Unit tests are procedures used in software engineering to validate the smallest testable part of an application, such as functions or methods. The goal is to ensure that each unit performs as expected. Automated tests are those performed by a machine, validating if different parts of the software are working correctly without manual intervention.

## When to Use Unit Tests
Unit tests are essential:
- **During Development:** To ensure new functionalities do not break existing features.
- **Before Refactoring:** To ensure changes in code do not alter the expected behavior.
- **For Documentation:** They serve as examples of how to use the tested units.

## Quick Guide on How to Perform Unit Testing Using JEST and JavaScript
#### 1. Environment Setup
Install JEST as a development dependency:
```bash
npm install --save-dev jest
```

In your `package.json`, add or modify the test script to use Jest:
```json
"scripts": {
  "test": "jest --coverage"
}
```

#### 2. Running the Tests
Execute the following command in the terminal:
```bash
npm test
```

Jest will automatically find test files and execute them. If everything is correct, you will see an output indicating that the test passed.

*(README criado com ajuda de IA)*
