# ListIntegrationsRead

## Example Usage

```typescript
import { ListIntegrationsRead } from "openapi/models/operations";

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

| Field                                                                                                            | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `objects`                                                                                                        | [operations.ListIntegrationsIntegrationObjects](../../models/operations/listintegrationsintegrationobjects.md)[] | :heavy_minus_sign:                                                                                               | N/A                                                                                                              |