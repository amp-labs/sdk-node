# GetOrgInviteResponse


## Supported Types

### `operations.GetOrgInviteResponseBody`

```typescript
const value: operations.GetOrgInviteResponseBody = {
  id: "<id>",
  invitedEmail: "<value>",
  parentType: "org",
  parentId: "<id>",
  status: "pending",
  createTime: new Date("2023-01-18T02:30:06.909Z"),
};
```

### `operations.GetOrgInviteOrgResponseBody`

```typescript
const value: operations.GetOrgInviteOrgResponseBody = {
  href:
    "https://www.belgif.be/specification/rest/api-guide/#standardized-problem-types",
  title: "Description of the type of problem that occurred",
  status: 400,
  detail: "Description of specific occurrence of the problem",
  instance: "urn:uuid:123e4567-e89b-12d3-a456-426614174000",
};
```

