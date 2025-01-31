# UpdateOrgRequest

## Example Usage

```typescript
import { UpdateOrgRequest } from "openapi/models/operations";

let value: UpdateOrgRequest = {
  orgId: "<id>",
  requestBody: {
    updateMask: [
      "label",
    ],
    org: {
      label: "org-123",
    },
  },
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `orgId`                                                                            | *string*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                |
| `requestBody`                                                                      | [operations.UpdateOrgRequestBody](../../models/operations/updateorgrequestbody.md) | :heavy_check_mark:                                                                 | N/A                                                                                |