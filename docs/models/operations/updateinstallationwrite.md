# UpdateInstallationWrite

## Example Usage

```typescript
import { UpdateInstallationWrite } from "openapi/models/operations";

let value: UpdateInstallationWrite = {
  objects: {
    "key": {
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
    },
  },
};
```

## Fields

| Field                                                                                                                                | Type                                                                                                                                 | Required                                                                                                                             | Description                                                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ |
| `objects`                                                                                                                            | Record<string, [operations.UpdateInstallationInstallationObjects](../../models/operations/updateinstallationinstallationobjects.md)> | :heavy_minus_sign:                                                                                                                   | This is a map of object names to their configuration.                                                                                |