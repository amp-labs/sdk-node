# ListIntegrationsSubscribeIntegration

## Example Usage

```typescript
import { ListIntegrationsSubscribeIntegration } from "@amp-labs/sdk-node/models/operations";

let value: ListIntegrationsSubscribeIntegration = {
  objects: [
    {
      objectName: "<value>",
      destination: "<value>",
      updateEvent: {
        requiredWatchFields: [
          "[\"name\",\"domain\"]",
        ],
      },
      otherEvents: [
        "[\"object.merged\",\"object.restored\"]",
      ],
    },
  ],
};
```

## Fields

| Field                                                                                                                            | Type                                                                                                                             | Required                                                                                                                         | Description                                                                                                                      |
| -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| `objects`                                                                                                                        | [operations.ListIntegrationsIntegrationSubscribeObject](../../models/operations/listintegrationsintegrationsubscribeobject.md)[] | :heavy_minus_sign:                                                                                                               | N/A                                                                                                                              |