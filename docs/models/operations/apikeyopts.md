# ApiKeyOpts

Configuration for API key. Must be provided if authType is apiKey.

## Example Usage

```typescript
import { ApiKeyOpts } from "openapi/models/operations";

let value: ApiKeyOpts = {
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
| `query`                                                                             | [operations.Query](../../models/operations/query.md)                                | :heavy_minus_sign:                                                                  | Configuration for API key in query parameter. Must be provided if type is in-query. |                                                                                     |
| `header`                                                                            | [operations.Header](../../models/operations/header.md)                              | :heavy_minus_sign:                                                                  | Configuration for API key in header. Must be provided if type is in-header.         |                                                                                     |
| `docsURL`                                                                           | *string*                                                                            | :heavy_minus_sign:                                                                  | URL with more information about how to get or use an API key.                       | https://docs.example.com/api-key                                                    |