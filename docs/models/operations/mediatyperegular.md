# MediaTypeRegular

Media for light/regular mode.

## Example Usage

```typescript
import { MediaTypeRegular } from "@amp-labs/sdk-node/models/operations";

let value: MediaTypeRegular = {
  iconURL: "https://example.com/icon.png",
  logoURL: "https://example.com/logo.png",
};
```

## Fields

| Field                             | Type                              | Required                          | Description                       | Example                           |
| --------------------------------- | --------------------------------- | --------------------------------- | --------------------------------- | --------------------------------- |
| `iconURL`                         | *string*                          | :heavy_minus_sign:                | URL to the icon for the provider. | https://example.com/icon.png      |
| `logoURL`                         | *string*                          | :heavy_minus_sign:                | URL to the logo for the provider. | https://example.com/logo.png      |