# CreateOrgResponseBody

The newly created org

## Example Usage

```typescript
import { CreateOrgResponseBody } from "openapi/models/operations";

let value: CreateOrgResponseBody = {
  id: "org-123",
  label: "Acme Inc",
  defaultTeamId: "<id>",
  createTime: new Date("2024-11-20T06:32:40.348Z"),
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | The organization ID.                                                                          | org-123                                                                                       |
| `label`                                                                                       | *string*                                                                                      | :heavy_check_mark:                                                                            | The organization label.                                                                       | Acme Inc                                                                                      |
| `defaultTeamId`                                                                               | *string*                                                                                      | :heavy_check_mark:                                                                            | The ID of the Everyone team for the org.                                                      |                                                                                               |
| `createTime`                                                                                  | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | The time the organization was created.                                                        |                                                                                               |
| `updateTime`                                                                                  | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | The time the organization was updated.                                                        |                                                                                               |