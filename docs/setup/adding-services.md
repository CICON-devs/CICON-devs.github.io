# Adding New Services for Cobblers

Cobblers in the **CICON AI Shoe Repair App** can add new services and set their prices during the onboarding process. This guide walks through how cobblers can configure their services.

## Key Components

- **PricesPage.tsx**: Allows cobblers to set their service prices.
- **get-prices.ts**: Fetches the available services and prices from an Excel sheet.
- **save-prices.ts**: Saves the cobbler's configured prices to the database.

## Steps to Add a New Service

1. **Fetch Available Services**: The app loads the list of available services using the `get-prices.ts` route. The data is fetched from an Excel file with columns for shoe type, material, fault, fix, size, price, and price per pair.

2. **Cobblers Set Prices**: Cobblers can set their prices for each service by interacting with the frontend in the **PricesPage.tsx**. Each service includes:
   - Shoe Type
   - Material
   - Fault Type
   - Fix Type
   - Size
   - Price for Single Item
   - Price for Pair

3. **Save Prices**: Once the cobbler is satisfied with their prices, they submit the form. The prices are saved via the `/api/cobbler/save-prices` endpoint, which stores the data in the PostgreSQL database.

### Example Pricing Table (Excel)

| Shoe Type | Material | Part of Item | Fault | Fix          | Size  | Price | Price Pair |
|-----------|----------|--------------|-------|--------------|-------|-------|------------|
| Boots     | Leather  | Heel         | Worn  | Replace Heel | Large | 50    | 90         |

This allows cobblers to easily manage and update their pricing model through the UI.
