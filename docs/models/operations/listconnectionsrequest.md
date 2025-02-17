# ListConnectionsRequest

## Example Usage

```typescript
import { ListConnectionsRequest } from "@amp-labs/sdk-node/models/operations";

let value: ListConnectionsRequest = {
  projectIdOrName: "<value>",
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `projectIdOrName`                                              | *string*                                                       | :heavy_check_mark:                                             | N/A                                                            |
| `provider`                                                     | *string*                                                       | :heavy_minus_sign:                                             | The provider name (e.g. "salesforce", "hubspot")               |
| `groupRef`                                                     | *string*                                                       | :heavy_minus_sign:                                             | The ID of the user group that has access to this installation. |
| `consumerRef`                                                  | *string*                                                       | :heavy_minus_sign:                                             | The consumer reference.                                        |