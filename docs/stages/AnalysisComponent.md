---
sidebar_position: 3
---

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
