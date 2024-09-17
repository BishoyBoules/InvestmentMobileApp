# Portfolio Investment App

This is a React Native app built using Expo and TypeScript. The app allows users to set investment goals, explore investment portfolios, and track their progress. Additionally, the app integrates with Segment for app analytics.

## Features

- Explore investment portfolios
- Set an investment goal with a time horizon
- Track user interactions and events using Segment analytics
- Navigate between screens for investment details and other user actions

## Screens

- `PortfolioDetailsScreen`: Displays portfolio details, risk level, expected returns, and provides an option to invest.
- `FirstQuestionScreen`: Allows users to specify their investment horizon.
- `LongerInvestmentsScreen`: Recommends long-term savings based on the selected horizon.
- Other screens: `Explore`, `Academy`, `Savings`, `Services`, and `Settings`.

## Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v14.x or later)
- [Expo CLI](https://docs.expo.dev/get-started/installation/) (for running the app in development)
- [Yarn](https://yarnpkg.com/) (or npm, but Yarn is recommended)
- [CocoaPods](https://cocoapods.org/) (for iOS dependencies, run `sudo gem install cocoapods` if it's not installed)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/portfolio-investment-app.git
   cd portfolio-investment-app


# Install dependencies

- for Yarn: yarn install
- for Npm: npm install
- npx pod-install to install dependencies for ios
- last, 'npx expo start' to start the app