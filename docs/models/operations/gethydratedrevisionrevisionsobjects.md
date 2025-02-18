# GetHydratedRevisionRevisionsObjects

## Example Usage

```typescript
import { GetHydratedRevisionRevisionsObjects } from "@amp-labs/sdk-node/models/operations";

let value: GetHydratedRevisionRevisionsObjects = {
  objectName: "<value>",
  displayName: "Holden89",
  valueDefaults: {
    allowAnyFields: true,
  },
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `objectName`                                                                                               | *string*                                                                                                   | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `displayName`                                                                                              | *string*                                                                                                   | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `valueDefaults`                                                                                            | [operations.GetHydratedRevisionValueDefaults](../../models/operations/gethydratedrevisionvaluedefaults.md) | :heavy_minus_sign:                                                                                         | Configuration to set default write values for object fields.                                               |