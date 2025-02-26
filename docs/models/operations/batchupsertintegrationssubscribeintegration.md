# BatchUpsertIntegrationsSubscribeIntegration

## Example Usage

```typescript
import { BatchUpsertIntegrationsSubscribeIntegration } from "@amp-labs/sdk-node/models/operations";

let value: BatchUpsertIntegrationsSubscribeIntegration = {
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

| Field                                                                                                                                          | Type                                                                                                                                           | Required                                                                                                                                       | Description                                                                                                                                    |
| ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| `objects`                                                                                                                                      | [operations.BatchUpsertIntegrationsIntegrationSubscribeObject](../../models/operations/batchupsertintegrationsintegrationsubscribeobject.md)[] | :heavy_minus_sign:                                                                                                                             | N/A                                                                                                                                            |