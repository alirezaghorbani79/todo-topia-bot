# Todo Topia bot script

This is a bot script for the Todo Topia Mini App. The source code for the Todo Topia Mini App is available in the [Todo Topia repository](https://github.com/ArianHamdi/todo-topia).

## Prerequisites

- Node.js
- NPM

## Setup

1.  **Clone the Repository**

    ```bash
    git clone https://github.com/alirezaghorbani79/todo-topia-bot
    cd todo-topia-bot
    ```

2.  **Install Dependency**

    ```bash
    npm install
    ```

3.  **Setting up Environment Variables**
    Create a .env file based on the provided .env.example template.

        ```bash
        BOT_API_TOKEN=YOUR_TELEGRAM_BOT_API_TOKEN
        WEB_APP_URL=YOUR_WEB_APP_URL
        ```

    Replace YOUR_TELEGRAM_BOT_API_TOKEN with your Telegram bot's API token and YOUR_WEB_APP_URL with the link to your task management web app.

4.  **Run the Bot**
    ```bash
    npm run start
    ```
