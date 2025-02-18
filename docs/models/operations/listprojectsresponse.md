# ListProjectsResponse


## Supported Types

### `operations.ResponseBody[]`

```typescript
const value: operations.ResponseBody[] = [
  {
    id: "project-id-123",
    name: "mailmonkey-staging",
    appName: "MailMonkey",
    createTime: new Date("2024-08-20T04:36:26.084Z"),
  },
];
```

### `operations.ListProjectsResponseBody`

```typescript
const value: operations.ListProjectsResponseBody = {
  href:
    "https://www.belgif.be/specification/rest/api-guide/#standardized-problem-types",
  title: "Description of the type of problem that occurred",
  status: 400,
  detail: "Description of specific occurrence of the problem",
  instance: "urn:uuid:123e4567-e89b-12d3-a456-426614174000",
};
```

