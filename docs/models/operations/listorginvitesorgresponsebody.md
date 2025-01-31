# ListOrgInvitesOrgResponseBody

## Example Usage

```typescript
import { ListOrgInvitesOrgResponseBody } from "openapi/models/operations";

let value: ListOrgInvitesOrgResponseBody = {
  id: "<id>",
  invitedEmail: "<value>",
  parentType: "org",
  parentId: "<id>",
  status: "pending",
  createTime: new Date("2025-11-02T01:12:41.532Z"),
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | The invite ID.                                                                                |
| `invitedEmail`                                                                                | *string*                                                                                      | :heavy_check_mark:                                                                            | The email address of the person invited.                                                      |
| `parentType`                                                                                  | [operations.ListOrgInvitesParentType](../../models/operations/listorginvitesparenttype.md)    | :heavy_check_mark:                                                                            | The type of entity that the person is invited to.                                             |
| `parentId`                                                                                    | *string*                                                                                      | :heavy_check_mark:                                                                            | The ID of the parent (e.g. org ID).                                                           |
| `status`                                                                                      | [operations.ListOrgInvitesStatus](../../models/operations/listorginvitesstatus.md)            | :heavy_check_mark:                                                                            | The status of the invite.                                                                     |
| `createTime`                                                                                  | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | The time the invite was created.                                                              |
| `updateTime`                                                                                  | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | The time the invite was updated.                                                              |