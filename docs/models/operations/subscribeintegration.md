# SubscribeIntegration

## Example Usage

```typescript
import { SubscribeIntegration } from "@amp-labs/sdk-node/models/operations";

let value: SubscribeIntegration = {
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

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `objects`                                                                                        | [operations.IntegrationSubscribeObject](../../models/operations/integrationsubscribeobject.md)[] | :heavy_minus_sign:                                                                               | N/A                                                                                              |