# CreateOrgInviteResponseBody

The newly created invite

## Example Usage

```typescript
import { CreateOrgInviteResponseBody } from "openapi/models/operations";

let value: CreateOrgInviteResponseBody = {
  id: "<id>",
  invitedEmail: "<value>",
  parentType: "org",
  parentId: "<id>",
  status: "accepted",
  createTime: new Date("2023-01-18T21:30:17.764Z"),
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | The invite ID.                                                                                |
| `invitedEmail`                                                                                | *string*                                                                                      | :heavy_check_mark:                                                                            | The email address of the person invited.                                                      |
| `parentType`                                                                                  | [operations.ParentType](../../models/operations/parenttype.md)                                | :heavy_check_mark:                                                                            | The type of entity that the person is invited to.                                             |
| `parentId`                                                                                    | *string*                                                                                      | :heavy_check_mark:                                                                            | The ID of the parent (e.g. org ID).                                                           |
| `status`                                                                                      | [operations.CreateOrgInviteStatus](../../models/operations/createorginvitestatus.md)          | :heavy_check_mark:                                                                            | The status of the invite.                                                                     |
| `createTime`                                                                                  | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | The time the invite was created.                                                              |
| `updateTime`                                                                                  | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | The time the invite was updated.                                                              |