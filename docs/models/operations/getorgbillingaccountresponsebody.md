# GetOrgBillingAccountResponseBody

Billing account

## Example Usage

```typescript
import { GetOrgBillingAccountResponseBody } from "openapi/models/operations";

let value: GetOrgBillingAccountResponseBody = {
  id: "billing-account-123",
  displayName: "Acme Inc",
  billingProvider: "stripe",
  billingProviderRef: "acct_1J2k3l4m5n6o7p8q9r0s",
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | The billing account ID.                                                                       | billing-account-123                                                                           |
| `displayName`                                                                                 | *string*                                                                                      | :heavy_check_mark:                                                                            | The display name of the billing account.                                                      | Acme Inc                                                                                      |
| `billingProvider`                                                                             | *string*                                                                                      | :heavy_check_mark:                                                                            | The billing provider that this account is associated with.                                    | stripe                                                                                        |
| `billingProviderRef`                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | The ID used by the billing provider to identify the account.                                  | acct_1J2k3l4m5n6o7p8q9r0s                                                                     |
| `createTime`                                                                                  | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | The time the billing account was created.                                                     |                                                                                               |
| `updateTime`                                                                                  | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | The time the billing account was last updated.                                                |                                                                                               |