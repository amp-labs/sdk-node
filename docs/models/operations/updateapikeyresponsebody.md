# UpdateApiKeyResponseBody

API key updated

## Example Usage

```typescript
import { UpdateApiKeyResponseBody } from "openapi/models/operations";

let value: UpdateApiKeyResponseBody = {
  key: "api-key-123",
  label: "MailMonkey API Key",
  scopes: [
    "[\"full\",\"frontend\"]",
  ],
  projectId: "project-id-123",
  active: true,
};
```

## Fields

| Field                          | Type                           | Required                       | Description                    | Example                        |
| ------------------------------ | ------------------------------ | ------------------------------ | ------------------------------ | ------------------------------ |
| `key`                          | *string*                       | :heavy_check_mark:             | The API key.                   | api-key-123                    |
| `label`                        | *string*                       | :heavy_check_mark:             | A short name for the API key.  | MailMonkey API Key             |
| `scopes`                       | *string*[]                     | :heavy_check_mark:             | The scopes for the API key.    |                                |
| `projectId`                    | *string*                       | :heavy_check_mark:             | The project ID.                | project-id-123                 |
| `active`                       | *boolean*                      | :heavy_minus_sign:             | Whether the API key is active. | true                           |