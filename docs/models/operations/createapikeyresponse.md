# CreateApiKeyResponse


## Supported Types

### `operations.CreateApiKeyResponseBody`

```typescript
const value: operations.CreateApiKeyResponseBody = {
  key: "api-key-123",
  label: "MailMonkey API Key",
  scopes: [
    "[\"full\",\"frontend\"]",
  ],
  projectId: "project-id-123",
  active: true,
};
```

### `operations.CreateAPIKeyAPIKeyResponseBody`

```typescript
const value: operations.CreateAPIKeyAPIKeyResponseBody = {
  href:
    "https://www.belgif.be/specification/rest/api-guide/#standardized-problem-types",
  title: "Description of the type of problem that occurred",
  status: 400,
  detail: "Description of specific occurrence of the problem",
  instance: "urn:uuid:123e4567-e89b-12d3-a456-426614174000",
};
```

