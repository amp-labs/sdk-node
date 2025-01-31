# ApiKey

## Example Usage

```typescript
import { ApiKey } from "openapi/models/operations";

let value: ApiKey = {
  label: "MailMonkey API Key",
  active: true,
  scopes: [
    "[\"full\",\"frontend\"]",
  ],
};
```

## Fields

| Field                          | Type                           | Required                       | Description                    | Example                        |
| ------------------------------ | ------------------------------ | ------------------------------ | ------------------------------ | ------------------------------ |
| `label`                        | *string*                       | :heavy_minus_sign:             | A short name for the API key.  | MailMonkey API Key             |
| `active`                       | *boolean*                      | :heavy_minus_sign:             | Whether the API key is active. | true                           |
| `scopes`                       | *string*[]                     | :heavy_minus_sign:             | The scopes for the API key.    |                                |