---
sidebar_position: 2
---

# PromptAndPhotoUploadComponent

The `PromptAndPhotoUploadComponent` handles the first stage of the shoe repair process, where users can upload images of their shoe faults and provide a brief description for each. Users can add up to three repair sections.

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
