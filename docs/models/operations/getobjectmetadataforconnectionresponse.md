# GetObjectMetadataForConnectionResponse


## Supported Types

### `operations.GetObjectMetadataForConnectionObjectMetadata`

```typescript
const value: operations.GetObjectMetadataForConnectionObjectMetadata = {
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

### `operations.GetObjectMetadataForConnectionAPIProblem`

```typescript
const value: operations.GetObjectMetadataForConnectionAPIProblem = {
  href:
    "https://www.belgif.be/specification/rest/api-guide/#standardized-problem-types",
  title: "Description of the type of problem that occurred",
  status: 400,
  detail: "Description of specific occurrence of the problem",
  instance: "urn:uuid:123e4567-e89b-12d3-a456-426614174000",
};
```

