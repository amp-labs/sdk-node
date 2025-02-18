# ListInstallationsConfigContent

## Example Usage

```typescript
import { ListInstallationsConfigContent } from "@amp-labs/sdk-node/models/operations";

let value: ListInstallationsConfigContent = {
  provider: "salesforce",
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                | Example                                                                                                    |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `provider`                                                                                                 | *string*                                                                                                   | :heavy_check_mark:                                                                                         | The SaaS API that we are integrating with.                                                                 | salesforce                                                                                                 |
| `read`                                                                                                     | *any*                                                                                                      | :heavy_minus_sign:                                                                                         | N/A                                                                                                        |                                                                                                            |
| `write`                                                                                                    | *any*                                                                                                      | :heavy_minus_sign:                                                                                         | N/A                                                                                                        |                                                                                                            |
| `proxy`                                                                                                    | [operations.ListInstallationsBaseProxyConfig](../../models/operations/listinstallationsbaseproxyconfig.md) | :heavy_minus_sign:                                                                                         | N/A                                                                                                        |                                                                                                            |