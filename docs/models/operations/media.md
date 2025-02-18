# Media

## Example Usage

```typescript
import { Media } from "@amp-labs/sdk-node/models/operations";

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

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `regular`                                                                    | [operations.MediaTypeRegular](../../models/operations/mediatyperegular.md)   | :heavy_minus_sign:                                                           | Media for light/regular mode.                                                |
| `darkMode`                                                                   | [operations.MediaTypeDarkMode](../../models/operations/mediatypedarkmode.md) | :heavy_minus_sign:                                                           | Media to be used in dark mode.                                               |