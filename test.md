Sure! Below are the markdown files for each component in the `stages` folder, documenting their usage and functionality.

---

### `/docs/stages/overview.md`

```md
# Stages Overview

The `stages` folder contains all the components responsible for managing the different stages of the shoe repair process. These stages guide the user through the workflow, from uploading shoe fault details to payment completion.

## Stages Components

1. **PromptAndPhotoUploadComponent**: Handles the prompt and photo upload stage.
2. **AnalysisComponent**: Analyzes the uploaded images and returns repair suggestions.
3. **ShoeShowcaseComponent**: Displays the uploaded images and parsed fault details for the user to confirm.
4. **BasketComponent**: Displays available repair services and product suggestions, allowing users to select and review their basket before checkout.
5. **CheckoutComponent**: Handles the payment process via Stripe.
6. **PaymentReviewComponent**: Displays a summary of the payment after a successful transaction.
7. **DetailsComponent**: A currently unused component for collecting user details (e.g., name, email, phone).
```

---

### `/docs/stages/PromptAndPhotoUploadComponent.md`

```md
# PromptAndPhotoUploadComponent

This component handles the first stage of the shoe repair process, where users can upload images of their shoe faults and provide a brief description for each. Users can add up to three repair sections.

## Props

- **prompts**: An array of fault descriptions provided by the user.
- **setPrompts**: A function to update the `prompts` array.
- **files**: An array of uploaded files (images) for each repair.
- **setFiles**: A function to update the `files` array.
- **changePage**: A function to trigger the next stage in the process.

## Example Usage

```jsx
const prompts = ["Sole damage", "Heel issue"];
const files = [null, null];
const setPrompts = (newPrompts) => { ... };
const setFiles = (newFiles) => { ... };
const changePage = () => { ... };

<PromptAndPhotoUploadComponent 
  prompts={prompts}
  setPrompts={setPrompts}
  files={files}
  setFiles={setFiles}
  changePage={changePage}
/>
```

## Key Functions

- **handlePromptChange**: Updates the fault description for each repair section.
- **handleFileInputChange**: Handles file uploads (only accepts PNG or JPEG images).
- **addRepairSection**: Adds another repair section, up to a maximum of 3.
- **removeRepairSection**: Removes a repair section.
```

---

### `/docs/stages/AnalysisComponent.md`

```md
# AnalysisComponent

The `AnalysisComponent` analyzes the uploaded images and fault descriptions and fetches repair services and product suggestions for each fault.

## Props

- **prompts**: Array of fault descriptions provided by the user.
- **files**: Array of uploaded files (images).
- **setFaultInfo**: Function to store the fault analysis results.
- **setRepairServices**: Function to store the suggested repair services.
- **setProductSuggestions**: Function to store suggested products.
- **changePage**: Function to trigger navigation to the next stage.

## Example Usage

```jsx
<AnalysisComponent 
  prompts={prompts}
  files={files}
  setFaultInfo={setFaultInfo}
  setRepairServices={setRepairServices}
  setProductSuggestions={setProductSuggestions}
  changePage={changePage}
/>
```

## Key Functions

- **analyzeFaultsAndFetchServices**: Analyzes the faults and fetches repair services and product suggestions from the backend API.
- **setLoading**: Manages the loading state while the analysis is in progress.
- **setError**: Displays error messages if the analysis fails.
```

---

### `/docs/stages/ShoeShowcaseComponent.md`

```md
# ShoeShowcaseComponent

This component showcases the uploaded shoe images and their corresponding fault information, parsed from the analysis stage. The user can review these details before selecting repairs.

## Props

- **files**: Array of uploaded files (images).
- **faultInfo**: Array of parsed fault information for each repair section.

## Example Usage

```jsx
const files = [file1, file2];
const faultInfo = [fault1, fault2];

<ShoeShowcaseComponent 
  files={files}
  faultInfo={faultInfo}
/>
```

## Key Features

- **Image Display**: Shows the uploaded images for each repair section.
- **Fault Information**: Displays details like the type of shoe, fault descriptions, material, part, severity, etc.
```

---

### `/docs/stages/BasketComponent.md`

```md
# BasketComponent

The `BasketComponent` allows users to select the repair services and products they want for their shoes. The component calculates the total price and triggers a page change to the checkout stage.

## Props

- **repairServices**: Array of available repair services.
- **productSuggestions**: Array of product suggestions (optional).
- **changePage**: Function to trigger the page change to the checkout stage.

## Example Usage

```jsx
const repairServices = [
  { name: 'Sole Replacement', price: 50 },
  { name: 'Heel Repair', price: 20 }
];
const productSuggestions = [
  { name: 'Shoe Polish', price: 5 }
];

<BasketComponent
  repairServices={repairServices}
  productSuggestions={productSuggestions}
  changePage={(totalAmount, selectedServices, selectedProducts) => { ... }}
/>
```

## Key Functions

- **handleSelectService**: Toggles the selection of a repair service.
- **handleSelectProduct**: Toggles the selection of a product.
- **handleCheckout**: Calculates the total price and triggers the page change.
```

---

### `/docs/stages/CheckoutComponent.md`

```md
# CheckoutComponent

The `CheckoutComponent` handles the payment process using Stripe. Users can review their selected services and products and proceed to complete the payment.

## Props

- **totalAmount**: The total amount to be paid.
- **services**: Array of selected services.
- **products**: Array of selected products.
- **changePage**: Function to trigger the page change after successful payment.

## Example Usage

```jsx
<CheckoutComponent
  totalAmount={totalAmount}
  services={selectedServices}
  products={selectedProducts}
  changePage={handlePaymentSuccess}
/>
```

## Key Functions

- **handlePayment**: Triggers the payment process using the Stripe API.
- **generateOrderId**: Generates a random order ID for the transaction.
```

---

### `/docs/stages/PaymentReviewComponent.md`

```md
# PaymentReviewComponent

The `PaymentReviewComponent` displays a summary of the payment after a successful transaction. It shows the services and products the user paid for and provides a message about the payment being on hold.

## Props

- **services**: Array of selected services.
- **products**: Array of selected products.
- **totalAmount**: Total amount paid by the user.

## Example Usage

```jsx
<PaymentReviewComponent
  services={services}
  products={products}
  totalAmount={totalAmount}
/>
```

## Key Features

- **Order Review**: Displays the services and products selected by the user.
- **Payment Summary**: Shows the total amount paid and confirms the payment status.
```

---

### `/docs/stages/DetailsComponent.md`

```md
# DetailsComponent (Unused)

This component is currently unused. It was designed to collect user details such as name, email, and phone number. It may be incorporated into the checkout flow or onboarding in the future.

## Props

- **userDetails**: Object containing the user's details (full name, email, phone).
- **setUserDetails**: Function to update the user's details.
- **changePage**: Function to trigger the page change after the user submits their details.
```

---

This structure ensures all components in the `stages` folder are documented with their respective functionalities, props, and examples. Let me know if you'd like to add or refine any sections!


----


# Folder Structure

The **CICON AI Shoe Repair App** is structured to separate the concerns of API routes, components, and context for better maintainability and scalability. Here’s an overview of the folder structure:

```bash
app/
├── api
│   ├── cobbler/              # API routes for cobbler-related operations
│   ├── stripe/               # API routes for Stripe integration
│   └── twilio/               # API route for Twilio SMS integration
├── cobbler/
│   ├── onboarding/           # Pages and components related to the cobbler onboarding process
│   ├── price-confirmation/   # Pages for price confirmation during repair flow
│   └── prices/               # Cobbler price setup components
├── context/
│   └── StageContext.tsx      # React context to manage multi-stage process states
├── components/               # Reusable components used across different pages
├── stages/                   # Pages and components for each stage in the shoe repair process
│   ├── AnalysisComponent.tsx # AI analysis component for uploaded photos
│   ├── BasketComponent.tsx   # Basket and price calculation component
│   ├── CheckoutComponent.tsx # Payment integration with Stripe
│   ├── ShoeShowcaseComponent.tsx  # Displays uploaded shoes and fault details
├── split-payment-test/        # Test components for split payments in Stripe
├── styles/                   # Global and component-level styles (including DaisyUI)
└── public/                   # Static assets, such as images
```

The main directories in the app include:
- **api**: For all server-side API routes.
- **cobbler**: For cobbler-specific components and flows.
- **context**: React context for shared state across multiple components.
- **components**: Common UI components used throughout the application.
- **stages**: Components related to the shoe repair process.

For details on each section, refer to the relevant part of the documentation.

