# Theming with DaisyUI

The **CICON AI Shoe Repair App** uses **DaisyUI** as its main UI component library. DaisyUI is built on top of Tailwind CSS and provides a set of customizable components with predefined themes.

## Key Features

- **Predefined Themes**: The app uses the "lemonade" theme from DaisyUI.
- **Responsive Components**: DaisyUI components are fully responsive and mobile-friendly.
- **Customizable**: You can easily change the theme by updating the `data-theme` attribute in the HTML body tag.

## Theme Setup

In the **RootLayout.tsx** file, the theme is applied using the `data-theme` attribute on the `body` element:

```tsx
<body data-theme="lemonade" className="min-h-screen flex items-center justify-center">
```

You can switch to other DaisyUI themes by changing the value of `data-theme`.

## Resources

- [DaisyUI Documentation](https://daisyui.com/)
- [Tailwind CSS Documentation](https://tailwindcss.com/)
