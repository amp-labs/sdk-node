# ListIntegrationsReadIntegration

## Example Usage

```typescript
import { ListIntegrationsReadIntegration } from "@amp-labs/sdk-node/models/operations";

let value: ListIntegrationsReadIntegration = {
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

| Field                                                                                                          | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `objects`                                                                                                      | [operations.ListIntegrationsIntegrationObject](../../models/operations/listintegrationsintegrationobject.md)[] | :heavy_minus_sign:                                                                                             | N/A                                                                                                            |