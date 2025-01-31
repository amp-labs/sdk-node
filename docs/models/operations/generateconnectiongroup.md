# GenerateConnectionGroup

## Example Usage

```typescript
import { GenerateConnectionGroup } from "openapi/models/operations";

let value: GenerateConnectionGroup = {
  groupRef: "group-123",
  groupName: "Super Customer",
  projectId: "project-456",
  createTime: new Date("2023-07-13T21:34:44.816Z"),
  updateTime: new Date("2023-07-13T21:34:44.816Z"),
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `groupRef`                                                                                    | *string*                                                                                      | :heavy_check_mark:                                                                            | The ID of the user group that has access to this installation.                                | group-123                                                                                     |
| `groupName`                                                                                   | *string*                                                                                      | :heavy_check_mark:                                                                            | The name of the user group that has access to this installation.                              | Super Customer                                                                                |
| `projectId`                                                                                   | *string*                                                                                      | :heavy_check_mark:                                                                            | The Ampersand project ID.                                                                     | project-456                                                                                   |
| `createTime`                                                                                  | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | The time the group was created.                                                               | 2023-07-13T21:34:44.816Z                                                                      |
| `updateTime`                                                                                  | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | The time the group was last updated.                                                          | 2023-07-13T21:34:44.816Z                                                                      |