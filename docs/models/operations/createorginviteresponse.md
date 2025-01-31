# CreateOrgInviteResponse


## Supported Types

### `operations.CreateOrgInviteResponseBody`

```typescript
const value: operations.CreateOrgInviteResponseBody = {
  id: "<id>",
  invitedEmail: "<value>",
  parentType: "org",
  parentId: "<id>",
  status: "pending",
  createTime: new Date("2024-03-15T18:43:47.673Z"),
};
```

### `operations.CreateOrgInviteOrgResponseBody`

```typescript
const value: operations.CreateOrgInviteOrgResponseBody = {
  href:
    "https://www.belgif.be/specification/rest/api-guide/#standardized-problem-types",
  title: "Description of the type of problem that occurred",
  status: 400,
  detail: "Description of specific occurrence of the problem",
  instance: "urn:uuid:123e4567-e89b-12d3-a456-426614174000",
};
```

