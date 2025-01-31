# CreateApiKeyRequestBody

## Example Usage

```typescript
import { CreateApiKeyRequestBody } from "openapi/models/operations";

let value: CreateApiKeyRequestBody = {
  label: "MailMonkey API Key",
  scopes: [
    "[\"full\",\"frontend\"]",
  ],
};
```

## Fields

| Field                         | Type                          | Required                      | Description                   | Example                       |
| ----------------------------- | ----------------------------- | ----------------------------- | ----------------------------- | ----------------------------- |
| `label`                       | *string*                      | :heavy_check_mark:            | A short name for the API key. | MailMonkey API Key            |
| `scopes`                      | *string*[]                    | :heavy_minus_sign:            | The scopes for the API key.   |                               |