# UpdateInstallationRequestBody

## Example Usage

```typescript
import { UpdateInstallationRequestBody } from "sdk-node/models/operations";

let value: UpdateInstallationRequestBody = {
  updateMask: [
    "connectionId",
    "config.content.write.objects.account",
  ],
  installation: {
    connectionId: "connection-123",
    config: {
      content: {
        provider: "salesforce",
        read: {
          objects: {
            "key": {
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
            },
          },
        },
        write: {
          objects: {
            "key": {
              objectName: "account",
            },
          },
        },
      },
    },
  },
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        | Example                                                                            |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `updateMask`                                                                       | *string*[]                                                                         | :heavy_check_mark:                                                                 | N/A                                                                                | [<br/>"connectionId",<br/>"config.content.write.objects.account"<br/>]             |
| `installation`                                                                     | [operations.Installation](../../models/operations/installation.md)                 | :heavy_check_mark:                                                                 | The installation fields to update. (Only include the fields you'd like to update.) |                                                                                    |