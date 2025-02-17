# GetObjectMetadataForInstallationRequest

## Example Usage

```typescript
import { GetObjectMetadataForInstallationRequest } from "sdk-node/models/operations";

let value: GetObjectMetadataForInstallationRequest = {
  projectIdOrName: "<value>",
  integrationId: "<id>",
  objectName: "<value>",
};
```

## Fields

| Field                             | Type                              | Required                          | Description                       |
| --------------------------------- | --------------------------------- | --------------------------------- | --------------------------------- |
| `projectIdOrName`                 | *string*                          | :heavy_check_mark:                | Project ID or name                |
| `integrationId`                   | *string*                          | :heavy_check_mark:                | Integration ID                    |
| `objectName`                      | *string*                          | :heavy_check_mark:                | Object name (mapped or unmapped)  |
| `groupRef`                        | *string*                          | :heavy_minus_sign:                | The groupRef for the installation |