# CreateBillingAccountSessionRequestBody

## Example Usage

```typescript
import { CreateBillingAccountSessionRequestBody } from "openapi/models/operations";

let value: CreateBillingAccountSessionRequestBody = {
  redirectUrl: "https://dashboard.withampersand.com/the-current-page",
  timeout: 3600,
};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              | Example                                                  |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `redirectUrl`                                            | *string*                                                 | :heavy_check_mark:                                       | The URL to redirect to once a portal session is exited.  | https://dashboard.withampersand.com/the-current-page     |
| `timeout`                                                | *number*                                                 | :heavy_minus_sign:                                       | The number of seconds before the portal session expires. | 3600                                                     |