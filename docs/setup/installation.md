---
sidebar_position: 1
---

# Installation Guide

## Prerequisites

- **Node.js** (v14 or higher)
- **PostgreSQL** (v13 or higher)
- **Stripe** and **Twilio** API credentials

## Installation Steps

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd cicon-ai-shoe-repair-app
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up your environment variables by creating an `.env.local` file and adding your credentials (see [environment setup](environment-setup.md)).

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Set up the PostgreSQL database:
   - Load the provided schema into your PostgreSQL instance. The schema file is located in `/db/cicondb.sql` and includes table structures, enumerated types, and other relevant data.
   ```bash
   psql -U youruser -d yourdb -f path/to/cicondb.sql
   ```

Once the app is up and running, navigate to `http://localhost:3000` in your browser.
