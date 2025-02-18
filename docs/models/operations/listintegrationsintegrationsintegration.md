# ListIntegrationsIntegrationsIntegration

## Example Usage

```typescript
import { ListIntegrationsIntegrationsIntegration } from "@amp-labs/sdk-node/models/operations";

let value: ListIntegrationsIntegrationsIntegration = {
  name: "<value>",
  provider: "<value>",
  read: {
    objects: [
      {
        objectName: "<value>",
        destination: "<value>",
        schedule: "<value>",
        mapToName: "people",
        mapToDisplayName: "People",
        requiredFields: [
          {
            mapToName: "<value>",
          },
        ],
        optionalFields: [
          {
            fieldName: "<value>",
            mapToName: "account_id",
            mapToDisplayName: "Account ID",
          },
        ],
        backfill: {
          defaultPeriod: {
            days: 30,
            fullHistory: false,
          },
        },
      },
    ],
  },
  write: {
    objects: [
      {
        objectName: "<value>",
        inheritMapping: true,
        valueDefaults: {
          allowAnyFields: true,
        },
      },
    ],
  },
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `name`                                                                                                     | *string*                                                                                                   | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `displayName`                                                                                              | *string*                                                                                                   | :heavy_minus_sign:                                                                                         | N/A                                                                                                        |
| `provider`                                                                                                 | *string*                                                                                                   | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `read`                                                                                                     | [operations.ListIntegrationsReadIntegration](../../models/operations/listintegrationsreadintegration.md)   | :heavy_minus_sign:                                                                                         | N/A                                                                                                        |
| `write`                                                                                                    | [operations.ListIntegrationsWriteIntegration](../../models/operations/listintegrationswriteintegration.md) | :heavy_minus_sign:                                                                                         | N/A                                                                                                        |
| `proxy`                                                                                                    | [operations.ListIntegrationsProxyIntegration](../../models/operations/listintegrationsproxyintegration.md) | :heavy_minus_sign:                                                                                         | N/A                                                                                                        |