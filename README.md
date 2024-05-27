# Reborn App Frontend

![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![NextUI](https://img.shields.io/badge/NextUI-EB5424?style=for-the-badge&logo=nextui&logoColor=white)

## Overview

Reborn App Frontend is the client-side application for a marketplace that gives motorist gear like jackets, helmets, and gloves a second chance. This platform allows users to buy, sell, and exchange motorist equipment, promoting sustainability and safety.

## Technologies Used

- **Next.js 13**: A powerful React framework for building fast and user-friendly web applications.
- **Tailwind CSS**: A utility-first CSS framework for rapid UI development.
- **NextUI**: A React UI library for creating beautiful and modern user interfaces.

## Features

- User Authentication and Authorization
  - Integrated with Auth0 for secure login
- Product Listings
- Product searches by name and/or filters
- Image Upload and Management
- View seller contact data

## Requirements

- Node.js 18+
- npm or yarn
- Auth0 Account

## Installation

### Clone the Repository

```bash
git clone https://github.com/moramaan/reborn-app-frontend.git
cd reborn-app-frontend
```

### Install Dependencies

```bash
npm install
```

### Environment Setup

Copy the `.env.example` to `.env.local` and configure your environment variables:

```bash
cp .env.example .env.local
```

Set your Auth0 and other necessary configurations in the `.env.local` file.

### Auth0 Setup

Sign up on [Auth0](https://auth0.com) and follow their web tutorials to set up your own secrets. Ensure you have configured the necessary Auth0 settings in your `.env.local` file.

### Run the Application

```bash
npm run dev
```

The frontend should now be running on `http://localhost:3000`.

## Contributing

Feel free to submit issues or pull requests. For major changes, please open an issue first to discuss what you would like to change.

## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).