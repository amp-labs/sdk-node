# BatchUpsertIntegrationsRequestBody

The source of the integrations to upsert. One of sourceZipUrl or sourceYaml is required.

## Example Usage

```typescript
import { BatchUpsertIntegrationsRequestBody } from "sdk-node/models/operations";

let value: BatchUpsertIntegrationsRequestBody = {};
```

## Fields

| Field                                                                                     | Type                                                                                      | Required                                                                                  | Description                                                                               |
| ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| `sourceZipUrl`                                                                            | *string*                                                                                  | :heavy_minus_sign:                                                                        | URL of where a zip of the source files can be downloaded (e.g. Google Cloud Storage URL). |
| `sourceYaml`                                                                              | *string*                                                                                  | :heavy_minus_sign:                                                                        | A YAML string that defines the integrations.                                              |