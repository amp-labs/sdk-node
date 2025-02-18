# TriggerReadRequest

## Example Usage

```typescript
import { TriggerReadRequest } from "@amp-labs/sdk-node/models/operations";

let value: TriggerReadRequest = {
  projectIdOrName: "<value>",
  integrationId: "<id>",
  objectName: "<value>",
  requestBody: {
    groupRef: "<value>",
    mode: "async",
    sinceTimestamp: "2024-07-01T18:22:30.323771761Z",
  },
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `projectIdOrName`                                                                      | *string*                                                                               | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `integrationId`                                                                        | *string*                                                                               | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `objectName`                                                                           | *string*                                                                               | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `requestBody`                                                                          | [operations.TriggerReadReadRequest](../../models/operations/triggerreadreadrequest.md) | :heavy_check_mark:                                                                     | Read Request                                                                           |