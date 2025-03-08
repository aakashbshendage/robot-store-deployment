# RoboShop - Three-Tier Robot Store

A modern e-commerce application for selling robots, built with React, TypeScript, and Tailwind CSS.

## Features

- Product listing with filtering and search
- Detailed product pages
- Shopping cart functionality
- Responsive design for all devices

## Tech Stack

- **Frontend**: React, TypeScript, Tailwind CSS
- **Routing**: React Router
- **State Management**: React Context API
- **Icons**: Lucide React

## Getting Started

1. Clone the repository
2. Install dependencies: `npm install`
3. Start the development server: `npm run dev`

## Deployment

This application is designed to be deployed to AWS. The frontend can be deployed to:

- AWS S3 + CloudFront
- AWS Amplify

## Project Structure

- `/src/components` - Reusable UI components
- `/src/context` - React Context for state management
- `/src/data` - Mock data for the application
- `/src/pages` - Page components
- `/src/types` - TypeScript type definitions

## Future Enhancements

- Backend integration with AWS Lambda and DynamoDB
- User authentication with Amazon Cognito
- Payment processing with Stripe
- Order history and tracking
- Admin dashboard for inventory management