# GetObjectMetadataResponse


## Supported Types

### `operations.GetObjectMetadataResponseBody`

```typescript
const value: operations.GetObjectMetadataResponseBody = {
  name: "contact",
  displayName: "Contact",
  mappedObjectName: "people",
  fields: {
    "key": {
      fieldName: "Account ID",
      displayName: "Account ID",
      providerType: "timestamp",
      readOnly: false,
      values: [
        {
          value: "outbound",
          displayValue: "Outbound Campaign",
        },
      ],
    },
  },
};
```

### `operations.GetObjectMetadataObjectsAndFieldsResponseBody`

```typescript
const value: operations.GetObjectMetadataObjectsAndFieldsResponseBody = {
  href:
    "https://www.belgif.be/specification/rest/api-guide/#standardized-problem-types",
  title: "Description of the type of problem that occurred",
  status: 400,
  detail: "Description of specific occurrence of the problem",
  instance: "urn:uuid:123e4567-e89b-12d3-a456-426614174000",
};
```

