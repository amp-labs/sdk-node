# BatchUpsertIntegrationsIntegrationSubscribeObject

## Example Usage

```typescript
import { BatchUpsertIntegrationsIntegrationSubscribeObject } from "@amp-labs/sdk-node/models/operations";

let value: BatchUpsertIntegrationsIntegrationSubscribeObject = {
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
};
```

## Fields

| Field                                                                                                                                | Type                                                                                                                                 | Required                                                                                                                             | Description                                                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ |
| `objectName`                                                                                                                         | *string*                                                                                                                             | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  |
| `destination`                                                                                                                        | *string*                                                                                                                             | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  |
| `inheritFields`                                                                                                                      | *boolean*                                                                                                                            | :heavy_minus_sign:                                                                                                                   | If true, the subscribe object will inherit the fields from the read object.                                                          |
| `createEvent`                                                                                                                        | [operations.BatchUpsertIntegrationsCreateEvent](../../models/operations/batchupsertintegrationscreateevent.md)                       | :heavy_minus_sign:                                                                                                                   | N/A                                                                                                                                  |
| `updateEvent`                                                                                                                        | [operations.BatchUpsertIntegrationsUpdateEvent](../../models/operations/batchupsertintegrationsupdateevent.md)                       | :heavy_minus_sign:                                                                                                                   | N/A                                                                                                                                  |
| `deleteEvent`                                                                                                                        | [operations.BatchUpsertIntegrationsDeleteEvent](../../models/operations/batchupsertintegrationsdeleteevent.md)                       | :heavy_minus_sign:                                                                                                                   | N/A                                                                                                                                  |
| `associationChangeEvent`                                                                                                             | [operations.BatchUpsertIntegrationsAssociationChangeEvent](../../models/operations/batchupsertintegrationsassociationchangeevent.md) | :heavy_minus_sign:                                                                                                                   | N/A                                                                                                                                  |
| `otherEvents`                                                                                                                        | *string*[]                                                                                                                           | :heavy_minus_sign:                                                                                                                   | N/A                                                                                                                                  |