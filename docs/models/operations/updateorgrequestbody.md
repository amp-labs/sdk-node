# UpdateOrgRequestBody

## Example Usage

```typescript
import { UpdateOrgRequestBody } from "openapi/models/operations";

let value: UpdateOrgRequestBody = {
  updateMask: [
    "label",
  ],
  org: {
    label: "org-123",
  },
};
```

## Fields

| Field                                            | Type                                             | Required                                         | Description                                      | Example                                          |
| ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ |
| `updateMask`                                     | *string*[]                                       | :heavy_check_mark:                               | N/A                                              | [<br/>"label"<br/>]                              |
| `org`                                            | [operations.Org](../../models/operations/org.md) | :heavy_check_mark:                               | N/A                                              |                                                  |