# CreateRevisionRequestBody

The source of the revision to create. One of sourceZipUrl or sourceYaml is required.

## Example Usage

```typescript
import { CreateRevisionRequestBody } from "@amp-labs/sdk-node/models/operations";

let value: CreateRevisionRequestBody = {};
```

## Fields

| Field                                                                                     | Type                                                                                      | Required                                                                                  | Description                                                                               |
| ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| `sourceZipUrl`                                                                            | *string*                                                                                  | :heavy_minus_sign:                                                                        | URL of where a zip of the source files can be downloaded (e.g. Google Cloud Storage URL). |
| `sourceYaml`                                                                              | *string*                                                                                  | :heavy_minus_sign:                                                                        | The source YAML file that defines the revision.                                           |