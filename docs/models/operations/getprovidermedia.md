# GetProviderMedia

## Example Usage

```typescript
import { GetProviderMedia } from "sdk-node/models/operations";

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

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `regular`                                                                        | [operations.GetProviderRegular](../../models/operations/getproviderregular.md)   | :heavy_minus_sign:                                                               | Media for light/regular mode.                                                    |
| `darkMode`                                                                       | [operations.GetProviderDarkMode](../../models/operations/getproviderdarkmode.md) | :heavy_minus_sign:                                                               | Media to be used in dark mode.                                                   |