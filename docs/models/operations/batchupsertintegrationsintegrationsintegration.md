# BatchUpsertIntegrationsIntegrationsIntegration

## Example Usage

```typescript
import { BatchUpsertIntegrationsIntegrationsIntegration } from "@amp-labs/sdk-node/models/operations";

let value: BatchUpsertIntegrationsIntegrationsIntegration = {
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

| Field                                                                                                                    | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `name`                                                                                                                   | *string*                                                                                                                 | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |
| `displayName`                                                                                                            | *string*                                                                                                                 | :heavy_minus_sign:                                                                                                       | N/A                                                                                                                      |
| `provider`                                                                                                               | *string*                                                                                                                 | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |
| `read`                                                                                                                   | [operations.BatchUpsertIntegrationsReadIntegration](../../models/operations/batchupsertintegrationsreadintegration.md)   | :heavy_minus_sign:                                                                                                       | N/A                                                                                                                      |
| `write`                                                                                                                  | [operations.BatchUpsertIntegrationsWriteIntegration](../../models/operations/batchupsertintegrationswriteintegration.md) | :heavy_minus_sign:                                                                                                       | N/A                                                                                                                      |
| `proxy`                                                                                                                  | [operations.BatchUpsertIntegrationsProxyIntegration](../../models/operations/batchupsertintegrationsproxyintegration.md) | :heavy_minus_sign:                                                                                                       | N/A                                                                                                                      |