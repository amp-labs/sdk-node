# GenerateConnectionRequest

## Example Usage

```typescript
import { GenerateConnectionRequest } from "@amp-labs/sdk-node/models/operations";

let value: GenerateConnectionRequest = {
  projectIdOrName: "<value>",
  requestBody: {
    groupRef: "<value>",
    consumerRef: "<value>",
    provider: "<value>",
  },
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `projectIdOrName`                                                                                    | *string*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `requestBody`                                                                                        | [operations.GenerateConnectionRequestBody](../../models/operations/generateconnectionrequestbody.md) | :heavy_check_mark:                                                                                   | N/A                                                                                                  |