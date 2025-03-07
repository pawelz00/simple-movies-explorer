# Movies Explorer

This project is a simple Next.js application used to explore popular movies.

## Getting Started

### Prerequisites

Make sure you have the following installed on your machine:

- Node.js
- npm (Node Package Manager)
- pnpm (optional)

### Installation

1. Install the dependencies:
    ```bash
    npm install
    ```
2. Start the development server:
    ```bash
    npm run dev
    ```

### Environment Variables
This project uses themoviedb API - you need to get an api key from [themoviedb](https://www.themoviedb.org/documentation/api) and add it to your environment variables.

Create a `.env.local` file in the root of your project and add the following environment variables:

```plaintext
API_KEY=[your api key]