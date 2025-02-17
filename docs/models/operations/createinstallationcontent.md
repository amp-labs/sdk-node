# CreateInstallationContent

## Example Usage

```typescript
import { CreateInstallationContent } from "@amp-labs/sdk-node/models/operations";

let value: CreateInstallationContent = {
  provider: "salesforce",
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              | Example                                                                                  |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `provider`                                                                               | *string*                                                                                 | :heavy_check_mark:                                                                       | The SaaS API that we are integrating with.                                               | salesforce                                                                               |
| `read`                                                                                   | *any*                                                                                    | :heavy_minus_sign:                                                                       | N/A                                                                                      |                                                                                          |
| `write`                                                                                  | *any*                                                                                    | :heavy_minus_sign:                                                                       | N/A                                                                                      |                                                                                          |
| `proxy`                                                                                  | [operations.CreateInstallationProxy](../../models/operations/createinstallationproxy.md) | :heavy_minus_sign:                                                                       | N/A                                                                                      |                                                                                          |