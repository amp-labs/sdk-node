# GetOperationResponseBody

Operation

## Example Usage

```typescript
import { GetOperationResponseBody } from "@amp-labs/sdk-node/models/operations";

let value: GetOperationResponseBody = {
  projectId: "project-456",
  integrationId: "integration-123",
  configId: "config-123",
  actionType: "read",
  id: "operation-123",
  installationId: "installation-123",
  status: "success",
  result: "[object] No changes",
  metadata: {},
  createTime: new Date("2023-07-13T21:34:44.816Z"),
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `projectId`                                                                                   | *string*                                                                                      | :heavy_check_mark:                                                                            | The Ampersand project ID.                                                                     | project-456                                                                                   |
| `integrationId`                                                                               | *string*                                                                                      | :heavy_check_mark:                                                                            | The integration ID.                                                                           | integration-123                                                                               |
| `configId`                                                                                    | *string*                                                                                      | :heavy_check_mark:                                                                            | The config ID.                                                                                | config-123                                                                                    |
| `actionType`                                                                                  | *string*                                                                                      | :heavy_check_mark:                                                                            | The action type to perform for the given object.                                              | read                                                                                          |
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | The operation ID.                                                                             | operation-123                                                                                 |
| `installationId`                                                                              | *string*                                                                                      | :heavy_check_mark:                                                                            | The Ampersand installation ID.                                                                | installation-123                                                                              |
| `status`                                                                                      | *string*                                                                                      | :heavy_check_mark:                                                                            | The status of the operation.                                                                  | success                                                                                       |
| `result`                                                                                      | *string*                                                                                      | :heavy_minus_sign:                                                                            | The result of the operation.                                                                  | [object] No changes                                                                           |
| `metadata`                                                                                    | [operations.GetOperationMetadata](../../models/operations/getoperationmetadata.md)            | :heavy_minus_sign:                                                                            | Metadata associated with the operation.                                                       | {}                                                                                            |
| `createTime`                                                                                  | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | The time the operation was created.                                                           | 2023-07-13T21:34:44.816Z                                                                      |