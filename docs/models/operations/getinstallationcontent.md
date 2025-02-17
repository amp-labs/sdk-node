# GetInstallationContent

## Example Usage

```typescript
import { GetInstallationContent } from "sdk-node/models/operations";

let value: GetInstallationContent = {
  provider: "salesforce",
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        | Example                                                                            |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `provider`                                                                         | *string*                                                                           | :heavy_check_mark:                                                                 | The SaaS API that we are integrating with.                                         | salesforce                                                                         |
| `read`                                                                             | *any*                                                                              | :heavy_minus_sign:                                                                 | N/A                                                                                |                                                                                    |
| `write`                                                                            | *any*                                                                              | :heavy_minus_sign:                                                                 | N/A                                                                                |                                                                                    |
| `proxy`                                                                            | [operations.GetInstallationProxy](../../models/operations/getinstallationproxy.md) | :heavy_minus_sign:                                                                 | N/A                                                                                |                                                                                    |