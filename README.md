# Project Title

## Description

This project is designed for comprehensive testing, including end-to-end, API, and AI testing. It utilizes CodeceptJS for test automation and generates reports using Allure.

## Prerequisites

Before you begin, ensure you have met the following requirements:

-   [Node.js](https://nodejs.org/) (version 18 or higher)
-   [Git](https://git-scm.com/) (version 2.0 or higher)
-   Any other dependencies your project may require.

## Installation

To set up the project locally, follow these steps:

1. **Clone the repository**

    ```bash
    git clone https://github.com/zus-pop/codeceptjs-test.git
    cd codeceptjs-test
    ```

2. **Install dependencies**

    ```bash
    npm install
    ```

3. **Configure your environment**
    - Create a `.env` file in the root directory and add your environment variables, including `OPENAI_API_KEY` for AI testing.

## Testing

### Run Testing

To run end-to-end tests, use the following command:

```bash
   npx codeceptjs run
```

### Run Testing With AI

To run AI-related tests (OPENAI_API_KEY is required), use:

```bash
npx codeceptjs run --ai
```

### Allure Reports

To generate Allure reports after running your tests, follow these steps:

0. **Install allure global**:

    ```bash
    npm i -g allure-commandline
    ```

1. **Run your tests with Allure enabled**:

    ```bash
    npx codeceptjs run --plugins allure
    ```

2. **Generate the Allure report**:

    ```bash
    allure generate output -o allure-report
    ```

3. **Open the Allure report**:
    ```bash
    allure open allure-report
    ```
