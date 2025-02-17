# GetHydratedRevisionValueDefaults

Configuration to set default write values for object fields.

## Example Usage

```typescript
import { GetHydratedRevisionValueDefaults } from "@amp-labs/sdk-node/models/operations";

let value: GetHydratedRevisionValueDefaults = {
  allowAnyFields: true,
};
```

## Fields

| Field                                                | Type                                                 | Required                                             | Description                                          | Example                                              |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| `allowAnyFields`                                     | *boolean*                                            | :heavy_minus_sign:                                   | If true, users can set default values for any field. | true                                                 |