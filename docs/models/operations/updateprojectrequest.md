# UpdateProjectRequest

## Example Usage

```typescript
import { UpdateProjectRequest } from "@amp-labs/sdk-node/models/operations";

let value: UpdateProjectRequest = {
  projectIdOrName: "<value>",
  requestBody: {
    updateMask: [
      "appName",
    ],
    project: {
      appName: "MailMonkey",
      name: "mailmonkey-staging",
    },
  },
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `projectIdOrName`                                                                          | *string*                                                                                   | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `requestBody`                                                                              | [operations.UpdateProjectRequestBody](../../models/operations/updateprojectrequestbody.md) | :heavy_check_mark:                                                                         | N/A                                                                                        |