# CreateGroupRequest

## Example Usage

```typescript
import { CreateGroupRequest } from "openapi/models/operations";

let value: CreateGroupRequest = {
  projectIdOrName: "<value>",
  requestBody: {
    groupRef: "group-123",
    groupName: "Super Customers",
  },
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `projectIdOrName`                                                                      | *string*                                                                               | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `requestBody`                                                                          | [operations.CreateGroupRequestBody](../../models/operations/creategrouprequestbody.md) | :heavy_check_mark:                                                                     | N/A                                                                                    |