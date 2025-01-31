# UpdateApiKeyRequestBody

## Example Usage

```typescript
import { UpdateApiKeyRequestBody } from "openapi/models/operations";

let value: UpdateApiKeyRequestBody = {
  updateMask: [
    "label",
    "active",
    "scopes",
  ],
  apiKey: {
    label: "MailMonkey API Key",
    active: true,
    scopes: [
      "[\"full\",\"frontend\"]",
    ],
  },
};
```

## Fields

| Field                                                  | Type                                                   | Required                                               | Description                                            | Example                                                |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| `updateMask`                                           | *string*[]                                             | :heavy_check_mark:                                     | N/A                                                    | [<br/>"label",<br/>"active",<br/>"scopes"<br/>]        |
| `apiKey`                                               | [operations.ApiKey](../../models/operations/apikey.md) | :heavy_check_mark:                                     | N/A                                                    |                                                        |