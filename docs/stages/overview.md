---
sidebar_position: 1
---

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
