# CreateDestinationResponse


## Supported Types

### `operations.CreateDestinationDestination`

```typescript
const value: operations.CreateDestinationDestination = {
  id: "<id>",
  name: "leadConvertedWebhook",
  type: "webhook",
  metadata: {
    url: "https://webhooks.mailmonkey.com/salesforce-lead-converted",
    headers: {
      "Authorization": "Bearer 1234",
    },
  },
  createTime: new Date("2025-05-22T20:16:52.845Z"),
};
```

### `operations.CreateDestinationAPIProblem`

```typescript
const value: operations.CreateDestinationAPIProblem = {
  href:
    "https://www.belgif.be/specification/rest/api-guide/#standardized-problem-types",
  title: "Description of the type of problem that occurred",
  status: 400,
  detail: "Description of specific occurrence of the problem",
  instance: "urn:uuid:123e4567-e89b-12d3-a456-426614174000",
};
```

