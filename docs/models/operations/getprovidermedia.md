# GetProviderMedia

## Example Usage

```typescript
import { GetProviderMedia } from "@amp-labs/sdk-node/models/operations";

let value: GetProviderMedia = {
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

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `regular`                                                                                          | [operations.GetProviderMediaTypeRegular](../../models/operations/getprovidermediatyperegular.md)   | :heavy_minus_sign:                                                                                 | Media for light/regular mode.                                                                      |
| `darkMode`                                                                                         | [operations.GetProviderMediaTypeDarkMode](../../models/operations/getprovidermediatypedarkmode.md) | :heavy_minus_sign:                                                                                 | Media to be used in dark mode.                                                                     |