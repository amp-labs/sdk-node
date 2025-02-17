# UpdateInstallationInstallationObjects

## Example Usage

```typescript
import { UpdateInstallationInstallationObjects } from "openapi/models/operations";

let value: UpdateInstallationInstallationObjects = {
  objectName: "account",
};
```

## Fields

| Field                                                                                                 | Type                                                                                                  | Required                                                                                              | Description                                                                                           | Example                                                                                               |
| ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| `objectName`                                                                                          | *string*                                                                                              | :heavy_minus_sign:                                                                                    | The name of the object to write to.                                                                   | account                                                                                               |
| `selectedValueDefaults`                                                                               | Record<string, *operations.SelectedValueDefaults*>                                                    | :heavy_minus_sign:                                                                                    | This is a map of field names to default values. These values will be used when writing to the object. |                                                                                                       |