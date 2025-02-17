# GetObjectMetadataForConnectionRequest

## Example Usage

```typescript
import { GetObjectMetadataForConnectionRequest } from "sdk-node/models/operations";

let value: GetObjectMetadataForConnectionRequest = {
  projectIdOrName: "<value>",
  provider: "<value>",
  objectName: "<value>",
};
```

## Fields

| Field                            | Type                             | Required                         | Description                      |
| -------------------------------- | -------------------------------- | -------------------------------- | -------------------------------- |
| `projectIdOrName`                | *string*                         | :heavy_check_mark:               | Project ID or name               |
| `provider`                       | *string*                         | :heavy_check_mark:               | The API Provider                 |
| `objectName`                     | *string*                         | :heavy_check_mark:               | Object name (mapped or unmapped) |
| `groupRef`                       | *string*                         | :heavy_minus_sign:               | The groupRef for the connection  |