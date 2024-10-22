# Project Title

## Description
This project is designed for comprehensive testing, including end-to-end, API, and AI testing. It utilizes CodeceptJS for test automation and generates reports using Allure.

## Prerequisites
Before you begin, ensure you have met the following requirements:
- [Node.js](https://nodejs.org/) (version 14 or higher)
- [Git](https://git-scm.com/) (version 2.0 or higher)
- Any other dependencies your project may require.

## Installation
To set up the project locally, follow these steps:

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/yourproject.git
   cd yourproject
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up Git hooks**
   - Rename the sample hook files in the `.git/hooks/` directory to enable them. For example:
     ```bash
     mv .git/hooks/pre-commit.sample .git/hooks/pre-commit
     ```

4. **Configure your environment**
   - Create a `.env` file in the root directory and add your environment variables, including `OPENAI_API_KEY` for AI testing.

## Testing
### End-to-End Testing
To run end-to-end tests, use the following command:
    ```bash
        npx codeceptjs run
     ```

     
### AI Testing
To run AI-related tests, use:
    ```bash
        npx codeceptjs run --ai
     ```

     
### Allure Reports
To generate Allure reports after running your tests, follow these steps:

1. **Run your tests with Allure enabled**:
   ```bash
   npx codeceptjs run
   ```

2. **Generate the Allure report**:
   ```bash
   allure generate --clean
   ```

3. **Open the Allure report**:
   ```bash
   allure serve allure-results
   ```