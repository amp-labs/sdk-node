# WriteRecordsResponse


## Supported Types

### `operations.WriteRecordsResponseBody`

```typescript
const value: operations.WriteRecordsResponseBody = {
  result: {
    success: true,
    data: {},
    recordId: "003Dp0X#@RG7IAP",
  },
};
```

### `operations.WriteRecordsWriteResponseBody`

```typescript
const value: operations.WriteRecordsWriteResponseBody = {
  type: "urn:problem-type:exampleOrganization:exampleProblem",
  href:
    "https://www.belgif.be/specification/rest/api-guide/#standardized-problem-types",
  title: "Description of the type of problem that occurred",
  status: 400,
  detail: "Description of specific occurrence of the problem",
  instance: "urn:uuid:123e4567-e89b-12d3-a456-426614174000",
};
```

