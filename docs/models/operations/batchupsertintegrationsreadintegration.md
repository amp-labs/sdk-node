# BatchUpsertIntegrationsReadIntegration

## Example Usage

```typescript
import { BatchUpsertIntegrationsReadIntegration } from "@amp-labs/sdk-node/models/operations";

let value: BatchUpsertIntegrationsReadIntegration = {
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
};
```

## Fields

| Field                                                                                                                        | Type                                                                                                                         | Required                                                                                                                     | Description                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `objects`                                                                                                                    | [operations.BatchUpsertIntegrationsIntegrationObject](../../models/operations/batchupsertintegrationsintegrationobject.md)[] | :heavy_minus_sign:                                                                                                           | N/A                                                                                                                          |