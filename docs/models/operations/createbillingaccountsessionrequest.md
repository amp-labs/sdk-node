# CreateBillingAccountSessionRequest

## Example Usage

```typescript
import { CreateBillingAccountSessionRequest } from "openapi/models/operations";

let value: CreateBillingAccountSessionRequest = {
  billingAccountId: "<id>",
  requestBody: {
    redirectUrl: "https://dashboard.withampersand.com/the-current-page",
    timeout: 3600,
  },
};
```

## Fields

| Field                                                                                                                  | Type                                                                                                                   | Required                                                                                                               | Description                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `billingAccountId`                                                                                                     | *string*                                                                                                               | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `requestBody`                                                                                                          | [operations.CreateBillingAccountSessionRequestBody](../../models/operations/createbillingaccountsessionrequestbody.md) | :heavy_minus_sign:                                                                                                     | N/A                                                                                                                    |