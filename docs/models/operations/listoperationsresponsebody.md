# ListOperationsResponseBody

List of operations

## Example Usage

```typescript
import { ListOperationsResponseBody } from "sdk-node/models/operations";

let value: ListOperationsResponseBody = {
  results: [
    {
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
    },
  ],
  pagination: {
    done: false,
    nextPageToken: "Q9JT+2qfys28V4ODN+UayA==",
  },
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `results`                                                      | [operations.Results](../../models/operations/results.md)[]     | :heavy_check_mark:                                             | N/A                                                            |
| `pagination`                                                   | [operations.Pagination](../../models/operations/pagination.md) | :heavy_check_mark:                                             | N/A                                                            |