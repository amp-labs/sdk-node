# CreateIntegrationRequest

## Example Usage

```typescript
import { CreateIntegrationRequest } from "@amp-labs/sdk-node/models/operations";

let value: CreateIntegrationRequest = {
  projectIdOrName: "<value>",
  requestBody: {
    name: "<value>",
    provider: "<value>",
    latestRevision: {
      specVersion: "1.0.0",
      content: {
        name: "<value>",
        provider: "<value>",
        read: {
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
                  fieldName: "<value>",
                  mapToName: "account_id",
                  mapToDisplayName: "Account ID",
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
        },
        write: {
          objects: [
            {
              objectName: "<value>",
              inheritMapping: true,
              valueDefaults: {
                allowAnyFields: true,
              },
            },
          ],
        },
      },
    },
  },
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `projectIdOrName`                                                                                  | *string*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `requestBody`                                                                                      | [operations.CreateIntegrationRequestBody](../../models/operations/createintegrationrequestbody.md) | :heavy_check_mark:                                                                                 | N/A                                                                                                |