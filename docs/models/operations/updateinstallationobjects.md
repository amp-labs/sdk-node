# UpdateInstallationObjects

## Example Usage

```typescript
import { UpdateInstallationObjects } from "sdk-node/models/operations";

let value: UpdateInstallationObjects = {
  objectName: "account",
  schedule: "*/15 * * * *",
  destination: "accountWebhook",
  selectedFields: {
    "0": true,
    "1": true,
    "2": true,
    "3": true,
    "4": true,
    "5": true,
    "6": true,
    "7": true,
    "8": true,
    "9": true,
    "10": true,
    "11": true,
    "12": true,
    "13": true,
    "14": true,
    "15": true,
    "16": true,
    "17": true,
    "18": true,
    "19": true,
    "20": true,
    "21": true,
    "22": true,
    "23": true,
    "24": true,
    "25": true,
  },
  selectedValueMappings: {
    "stage": {
      "open": "scheduled",
      "closedWon": "won",
      "closedLost": "lost",
    },
  },
  selectedFieldMappings: {
    "0": "{",
    "1": " ",
    "2": "p",
    "3": "h",
    "4": "o",
    "5": "n",
    "6": "e",
    "7": "N",
    "8": "u",
    "9": "m",
    "10": "b",
    "11": "e",
    "12": "r",
    "13": ":",
    "14": " ",
    "15": "p",
    "16": "h",
    "17": "o",
    "18": "n",
    "19": "e",
    "20": ",",
    "21": " ",
    "22": "f",
    "23": "a",
    "24": "x",
    "25": "N",
    "26": "u",
    "27": "m",
    "28": "b",
    "29": "e",
    "30": "r",
    "31": ":",
    "32": " ",
    "33": "f",
    "34": "a",
    "35": "x",
    "36": " ",
    "37": "}",
  },
  backfill: {
    defaultPeriod: {
      days: 30,
      fullHistory: false,
    },
  },
};
```

## Fields

| Field                                                                                                                                                                             | Type                                                                                                                                                                              | Required                                                                                                                                                                          | Description                                                                                                                                                                       | Example                                                                                                                                                                           |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `objectName`                                                                                                                                                                      | *string*                                                                                                                                                                          | :heavy_minus_sign:                                                                                                                                                                | The name of the object to read from.                                                                                                                                              | account                                                                                                                                                                           |
| `schedule`                                                                                                                                                                        | *string*                                                                                                                                                                          | :heavy_minus_sign:                                                                                                                                                                | The schedule for reading the object, in cron syntax.                                                                                                                              | */15 * * * *                                                                                                                                                                      |
| `destination`                                                                                                                                                                     | *string*                                                                                                                                                                          | :heavy_minus_sign:                                                                                                                                                                | The name of the destination that the result should be sent to.                                                                                                                    | accountWebhook                                                                                                                                                                    |
| `selectedFields`                                                                                                                                                                  | Record<string, *boolean*>                                                                                                                                                         | :heavy_minus_sign:                                                                                                                                                                | This is a map of field names to booleans indicating whether they should be read. If a field is already included in `selectedFieldMappings`, it does not need to be included here. | { phone: true, fax: true }                                                                                                                                                        |
| `selectedValueMappings`                                                                                                                                                           | Record<string, Record<string, *string*>>                                                                                                                                          | :heavy_minus_sign:                                                                                                                                                                | This is a map of field names to their value mappings.                                                                                                                             | {<br/>"stage": {<br/>"open": "scheduled",<br/>"closedWon": "won",<br/>"closedLost": "lost"<br/>}<br/>}                                                                            |
| `selectedFieldMappings`                                                                                                                                                           | Record<string, *string*>                                                                                                                                                          | :heavy_minus_sign:                                                                                                                                                                | This is a map of mapToNames to field names. (A mapTo name is the name the builder wants to map a field to when it lands in their destination.)                                    | { phoneNumber: phone, faxNumber: fax }                                                                                                                                            |
| `selectedFieldsAuto`                                                                                                                                                              | [operations.SelectedFieldsAuto](../../models/operations/selectedfieldsauto.md)                                                                                                    | :heavy_minus_sign:                                                                                                                                                                | If selectedFieldsAuto is set to all, all fields will be read.                                                                                                                     |                                                                                                                                                                                   |
| `backfill`                                                                                                                                                                        | [operations.UpdateInstallationBackfill](../../models/operations/updateinstallationbackfill.md)                                                                                    | :heavy_minus_sign:                                                                                                                                                                | N/A                                                                                                                                                                               |                                                                                                                                                                                   |