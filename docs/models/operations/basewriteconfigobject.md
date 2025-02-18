# BaseWriteConfigObject

## Example Usage

```typescript
import { BaseWriteConfigObject } from "@amp-labs/sdk-node/models/operations";

let value: BaseWriteConfigObject = {
  objectName: "account",
};
```

## Fields

| Field                                                                                                 | Type                                                                                                  | Required                                                                                              | Description                                                                                           | Example                                                                                               |
| ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| `objectName`                                                                                          | *string*                                                                                              | :heavy_minus_sign:                                                                                    | The name of the object to write to.                                                                   | account                                                                                               |
| `selectedValueDefaults`                                                                               | Record<string, *operations.ValueDefault*>                                                             | :heavy_minus_sign:                                                                                    | This is a map of field names to default values. These values will be used when writing to the object. |                                                                                                       |