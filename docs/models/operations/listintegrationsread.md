# ListIntegrationsRead

## Example Usage

```typescript
import { ListIntegrationsRead } from "sdk-node/models/operations";

let value: ListIntegrationsRead = {
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
          mapToName: "<value>",
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

| Field                                                                                                              | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `objects`                                                                                                          | [operations.ListIntegrationsIntegrationsObjects](../../models/operations/listintegrationsintegrationsobjects.md)[] | :heavy_minus_sign:                                                                                                 | N/A                                                                                                                |