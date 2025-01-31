# GetOrgInviteResponseBody

Invite

## Example Usage

```typescript
import { GetOrgInviteResponseBody } from "openapi/models/operations";

let value: GetOrgInviteResponseBody = {
  id: "<id>",
  invitedEmail: "<value>",
  parentType: "org",
  parentId: "<id>",
  status: "pending",
  createTime: new Date("2024-11-04T10:52:46.701Z"),
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | The invite ID.                                                                                |
| `invitedEmail`                                                                                | *string*                                                                                      | :heavy_check_mark:                                                                            | The email address of the person invited.                                                      |
| `parentType`                                                                                  | [operations.GetOrgInviteParentType](../../models/operations/getorginviteparenttype.md)        | :heavy_check_mark:                                                                            | The type of entity that the person is invited to.                                             |
| `parentId`                                                                                    | *string*                                                                                      | :heavy_check_mark:                                                                            | The ID of the parent (e.g. org ID).                                                           |
| `status`                                                                                      | [operations.GetOrgInviteStatus](../../models/operations/getorginvitestatus.md)                | :heavy_check_mark:                                                                            | The status of the invite.                                                                     |
| `createTime`                                                                                  | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | The time the invite was created.                                                              |
| `updateTime`                                                                                  | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | The time the invite was updated.                                                              |