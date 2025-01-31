# GetMyInfoResponse


## Supported Types

### `operations.GetMyInfoResponseBody`

```typescript
const value: operations.GetMyInfoResponseBody = {
  builder: {
    id: "builder-id-123",
    idpProvider: "clerk",
    idpRef: "<value>",
    createTime: new Date("2024-06-21T08:59:30.608Z"),
  },
  projectRoles: {
    "key": {
      role: "admin",
      principalType: "builder",
      principalId: "builder-id-123",
      project: {
        id: "project-id-123",
        name: "mailmonkey-staging",
        appName: "MailMonkey",
        createTime: new Date("2023-03-13T13:45:42.713Z"),
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
      createTime: new Date("2023-11-13T02:02:02.665Z"),
    },
  },
};
```

### `operations.GetMyInfoUserResponseBody`

```typescript
const value: operations.GetMyInfoUserResponseBody = {
  href:
    "https://www.belgif.be/specification/rest/api-guide/#standardized-problem-types",
  title: "Description of the type of problem that occurred",
  status: 400,
  detail: "Description of specific occurrence of the problem",
  instance: "urn:uuid:123e4567-e89b-12d3-a456-426614174000",
};
```

