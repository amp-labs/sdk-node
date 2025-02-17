# CreateInstallationRequest

## Example Usage

```typescript
import { CreateInstallationRequest } from "@amp-labs/sdk-node/models/operations";

let value: CreateInstallationRequest = {
  projectIdOrName: "<value>",
  integrationId: "<id>",
  requestBody: {
    groupRef: "<value>",
    config: {
      content: {
        provider: "salesforce",
      },
    },
  },
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `projectIdOrName`                                                                                    | *string*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `integrationId`                                                                                      | *string*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `requestBody`                                                                                        | [operations.CreateInstallationRequestBody](../../models/operations/createinstallationrequestbody.md) | :heavy_check_mark:                                                                                   | N/A                                                                                                  |