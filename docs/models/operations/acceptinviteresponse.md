# AcceptInviteResponse


## Supported Types

### `operations.AcceptInviteResponseBody`

```typescript
const value: operations.AcceptInviteResponseBody = {
  builder: {
    id: "builder-id-123",
    idpProvider: "clerk",
    idpRef: "<value>",
    createTime: new Date("2023-09-12T23:01:13.510Z"),
  },
  projectRoles: {
    "key": {
      role: "admin",
      principalType: "team",
      principalId: "builder-id-123",
      project: {
        id: "project-id-123",
        name: "mailmonkey-staging",
        appName: "MailMonkey",
        createTime: new Date("2025-06-12T04:52:41.784Z"),
      },
    },
  },
  orgRole: {
    role: "admin",
    principalType: "builder",
    principalId: "builder-id-123",
    org: {
      id: "org-123",
      label: "Acme Inc",
      defaultTeamId: "<id>",
      createTime: new Date("2025-11-27T23:49:54.191Z"),
    },
  },
};
```

### `operations.AcceptInviteUserResponseBody`

```typescript
const value: operations.AcceptInviteUserResponseBody = {
  href:
    "https://www.belgif.be/specification/rest/api-guide/#standardized-problem-types",
  title: "Description of the type of problem that occurred",
  status: 400,
  detail: "Description of specific occurrence of the problem",
  instance: "urn:uuid:123e4567-e89b-12d3-a456-426614174000",
};
```

