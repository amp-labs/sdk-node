# AcceptInviteOrgRole

## Example Usage

```typescript
import { AcceptInviteOrgRole } from "openapi/models/operations";

let value: AcceptInviteOrgRole = {
  role: "admin",
  principalType: "team",
  principalId: "builder-id-123",
  org: {
    id: "org-123",
    label: "Acme Inc",
    defaultTeamId: "<id>",
    createTime: new Date("2025-02-13T09:44:27.866Z"),
  },
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          | Example                                                                                              |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `role`                                                                                               | *string*                                                                                             | :heavy_check_mark:                                                                                   | The role of the builder in the org.                                                                  | admin                                                                                                |
| `principalType`                                                                                      | [operations.AcceptInviteUserPrincipalType](../../models/operations/acceptinviteuserprincipaltype.md) | :heavy_check_mark:                                                                                   | The type of the principal.                                                                           |                                                                                                      |
| `principalId`                                                                                        | *string*                                                                                             | :heavy_check_mark:                                                                                   | The ID of the team or builder.                                                                       | builder-id-123                                                                                       |
| `org`                                                                                                | [operations.AcceptInviteOrg](../../models/operations/acceptinviteorg.md)                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |                                                                                                      |