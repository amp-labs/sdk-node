# GetProviderBasicOpts

Configuration for Basic Auth. Optional.

## Example Usage

```typescript
import { GetProviderBasicOpts } from "@amp-labs/sdk-node/models/operations";

let value: GetProviderBasicOpts = {
  apiKeyAsBasic: true,
  apiKeyAsBasicOpts: {
    fieldUsed: "username",
    keyFormat: "api:%s",
  },
  docsURL: "https://docs.example.com/api-key",
};
```

## Fields

| Field                                                                                                   | Type                                                                                                    | Required                                                                                                | Description                                                                                             | Example                                                                                                 |
| ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| `apiKeyAsBasic`                                                                                         | *boolean*                                                                                               | :heavy_minus_sign:                                                                                      | If true, the provider uses an API key which then gets encoded as a basic auth user:pass string.         | true                                                                                                    |
| `apiKeyAsBasicOpts`                                                                                     | [operations.GetProviderApiKeyAsBasicOpts](../../models/operations/getproviderapikeyasbasicopts.md)      | :heavy_minus_sign:                                                                                      | when this object is present, it means that this provider uses Basic Auth to actually collect an API key |                                                                                                         |
| `docsURL`                                                                                               | *string*                                                                                                | :heavy_minus_sign:                                                                                      | URL with more information about how to get or use an API key.                                           | https://docs.example.com/api-key                                                                        |