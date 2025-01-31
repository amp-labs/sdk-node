# UpdateInstallationInstallationObjects

## Example Usage

```typescript
import { UpdateInstallationInstallationObjects } from "openapi/models/operations";

let value: UpdateInstallationInstallationObjects = {
  objectName: "account",
  selectedValueDefaults: {
    "0": "{",
    "1": " ",
    "2": "p",
    "3": "h",
    "4": "o",
    "5": "n",
    "6": "e",
    "7": ":",
    "8": " ",
    "9": "\"",
    "10": "5",
    "11": "5",
    "12": "5",
    "13": "-",
    "14": "5",
    "15": "5",
    "16": "5",
    "17": "-",
    "18": "5",
    "19": "5",
    "20": "5",
    "21": "5",
    "22": "\"",
    "23": " ",
    "24": " ",
    "25": "}",
  },
};
```

## Fields

| Field                                                                                                 | Type                                                                                                  | Required                                                                                              | Description                                                                                           | Example                                                                                               |
| ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| `objectName`                                                                                          | *string*                                                                                              | :heavy_minus_sign:                                                                                    | The name of the object to write to.                                                                   | account                                                                                               |
| `selectedValueDefaults`                                                                               | Record<string, *string*>                                                                              | :heavy_minus_sign:                                                                                    | This is a map of field names to default values. These values will be used when writing to the object. | { phone: "555-555-5555"  }                                                                            |