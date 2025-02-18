# APIKeyOptions

Configuration for API key. Must be provided if authType is apiKey.

## Example Usage

```typescript
import { APIKeyOptions } from "@amp-labs/sdk-node/models/operations";

let value: APIKeyOptions = {
  attachmentType: "header",
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

| Field                                                                               | Type                                                                                | Required                                                                            | Description                                                                         | Example                                                                             |
| ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| `attachmentType`                                                                    | [operations.AttachmentType](../../models/operations/attachmenttype.md)              | :heavy_check_mark:                                                                  | How the API key should be attached to requests.                                     |                                                                                     |
| `query`                                                                             | [operations.APIKeyQueryOptions](../../models/operations/apikeyqueryoptions.md)      | :heavy_minus_sign:                                                                  | Configuration for API key in query parameter. Must be provided if type is in-query. |                                                                                     |
| `header`                                                                            | [operations.APIKeyHeaderOptions](../../models/operations/apikeyheaderoptions.md)    | :heavy_minus_sign:                                                                  | Configuration for API key in header. Must be provided if type is in-header.         |                                                                                     |
| `docsURL`                                                                           | *string*                                                                            | :heavy_minus_sign:                                                                  | URL with more information about how to get or use an API key.                       | https://docs.example.com/api-key                                                    |