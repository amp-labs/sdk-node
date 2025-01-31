# Media

## Example Usage

```typescript
import { Media } from "openapi/models/operations";

let value: Media = {
  regular: {
    iconURL: "https://example.com/icon.png",
    logoURL: "https://example.com/logo.png",
  },
  darkMode: {
    iconURL: "https://example.com/icon.png",
    logoURL: "https://example.com/logo.png",
  },
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `regular`                                                  | [operations.Regular](../../models/operations/regular.md)   | :heavy_minus_sign:                                         | Media for light/regular mode.                              |
| `darkMode`                                                 | [operations.DarkMode](../../models/operations/darkmode.md) | :heavy_minus_sign:                                         | Media to be used in dark mode.                             |