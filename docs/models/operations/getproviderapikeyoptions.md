# GetProviderAPIKeyOptions

Configuration for API key. Must be provided if authType is apiKey.

## Example Usage

```typescript
import { GetProviderAPIKeyOptions } from "@amp-labs/sdk-node/models/operations";

let value: GetProviderAPIKeyOptions = {
  attachmentType: "query",
  query: {
    name: "api_key",
  },
  header: {
    name: "X-Api-Key",
    valuePrefix: "Bearer ",
  },
  docsURL: "https://docs.example.com/api-key",
};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            | Example                                                                                                |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `attachmentType`                                                                                       | [operations.GetProviderAttachmentType](../../models/operations/getproviderattachmenttype.md)           | :heavy_check_mark:                                                                                     | How the API key should be attached to requests.                                                        |                                                                                                        |
| `query`                                                                                                | [operations.GetProviderAPIKeyQueryOptions](../../models/operations/getproviderapikeyqueryoptions.md)   | :heavy_minus_sign:                                                                                     | Configuration for API key in query parameter. Must be provided if type is in-query.                    |                                                                                                        |
| `header`                                                                                               | [operations.GetProviderAPIKeyHeaderOptions](../../models/operations/getproviderapikeyheaderoptions.md) | :heavy_minus_sign:                                                                                     | Configuration for API key in header. Must be provided if type is in-header.                            |                                                                                                        |
| `docsURL`                                                                                              | *string*                                                                                               | :heavy_minus_sign:                                                                                     | URL with more information about how to get or use an API key.                                          | https://docs.example.com/api-key                                                                       |