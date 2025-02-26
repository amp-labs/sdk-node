# IntegrationSubscribeObject

## Example Usage

```typescript
import { IntegrationSubscribeObject } from "@amp-labs/sdk-node/models/operations";

let value: IntegrationSubscribeObject = {
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

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `objectName`                                                                           | *string*                                                                               | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `destination`                                                                          | *string*                                                                               | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `inheritFields`                                                                        | *boolean*                                                                              | :heavy_minus_sign:                                                                     | If true, the subscribe object will inherit the fields from the read object.            |
| `createEvent`                                                                          | [operations.CreateEvent](../../models/operations/createevent.md)                       | :heavy_minus_sign:                                                                     | N/A                                                                                    |
| `updateEvent`                                                                          | [operations.UpdateEvent](../../models/operations/updateevent.md)                       | :heavy_minus_sign:                                                                     | N/A                                                                                    |
| `deleteEvent`                                                                          | [operations.DeleteEvent](../../models/operations/deleteevent.md)                       | :heavy_minus_sign:                                                                     | N/A                                                                                    |
| `associationChangeEvent`                                                               | [operations.AssociationChangeEvent](../../models/operations/associationchangeevent.md) | :heavy_minus_sign:                                                                     | N/A                                                                                    |
| `otherEvents`                                                                          | *string*[]                                                                             | :heavy_minus_sign:                                                                     | N/A                                                                                    |