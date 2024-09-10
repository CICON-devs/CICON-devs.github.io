---
sidebar_position: 2
---
# Database Structure

The **CICON AI Shoe Repair App** uses **PostgreSQL** as its primary database. The database schema includes tables for managing users, orders, cobbler pricing, and more.

## Main Tables

### Users

| Column       | Type         | Description                         |
|--------------|--------------|-------------------------------------|
| id           | UUID         | Unique identifier for each user     |
| full_name    | VARCHAR      | The full name of the user           |
| email        | VARCHAR      | User email address                  |
| phone        | VARCHAR      | User phone number                   |
| created_at   | TIMESTAMP    | Timestamp for user creation         |

### Orders

| Column       | Type         | Description                             |
|--------------|--------------|-----------------------------------------|
| id           | UUID         | Unique identifier for each order        |
| user_id      | UUID         | Foreign key linking to `users`          |
| status       | ENUM         | Order status (pending, confirmed, etc.) |
| amount       | DECIMAL      | Total amount for the order              |
| created_at   | TIMESTAMP    | Timestamp for order creation            |

### Cobbler Pricing

| Column       | Type         | Description                              |
|--------------|--------------|------------------------------------------|
| id           | UUID         | Unique identifier for each pricing entry |
| cobbler_id   | UUID         | Foreign key linking to `cobblers`        |
| shoe_type    | VARCHAR      | The type of shoe being repaired          |
| material     | VARCHAR      | Material type                            |
| part_of_item | VARCHAR      | Part of the shoe being repaired          |
| fault        | VARCHAR      | Description of the fault                 |
| fix          | VARCHAR      | Description of the fix                   |
| price        | DECIMAL      | Price for the repair                     |

For a full schema dump, check the `/db/cicondb.sql` file.