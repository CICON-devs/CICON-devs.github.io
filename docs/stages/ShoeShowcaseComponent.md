---
sidebar_position: 4
---

# ShoeShowcaseComponent

The `ShoeShowcaseComponent` showcases the uploaded shoe images and their corresponding fault information, parsed from the analysis stage. The user can review these details before selecting repairs.

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
