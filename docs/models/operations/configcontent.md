# ConfigContent

## Example Usage

```typescript
import { ConfigContent } from "@amp-labs/sdk-node/models/operations";

let value: ConfigContent = {
  provider: "salesforce",
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              | Example                                                                  |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `provider`                                                               | *string*                                                                 | :heavy_check_mark:                                                       | The SaaS API that we are integrating with.                               | salesforce                                                               |
| `read`                                                                   | *any*                                                                    | :heavy_minus_sign:                                                       | N/A                                                                      |                                                                          |
| `write`                                                                  | *any*                                                                    | :heavy_minus_sign:                                                       | N/A                                                                      |                                                                          |
| `proxy`                                                                  | [operations.BaseProxyConfig](../../models/operations/baseproxyconfig.md) | :heavy_minus_sign:                                                       | N/A                                                                      |                                                                          |