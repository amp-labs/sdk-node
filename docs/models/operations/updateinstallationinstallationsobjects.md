# UpdateInstallationInstallationsObjects

## Example Usage

```typescript
import { UpdateInstallationInstallationsObjects } from "sdk-node/models/operations";

let value: UpdateInstallationInstallationsObjects = {
  objectName: "account",
};
```

## Fields

| Field                                                                                                 | Type                                                                                                  | Required                                                                                              | Description                                                                                           | Example                                                                                               |
| ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| `objectName`                                                                                          | *string*                                                                                              | :heavy_minus_sign:                                                                                    | The name of the object to write to.                                                                   | account                                                                                               |
| `selectedValueDefaults`                                                                               | Record<string, *operations.SelectedValueDefaults*>                                                    | :heavy_minus_sign:                                                                                    | This is a map of field names to default values. These values will be used when writing to the object. |                                                                                                       |