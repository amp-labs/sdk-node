# ListOperationLogsOperationResponseBody

## Example Usage

```typescript
import { ListOperationLogsOperationResponseBody } from "openapi/models/operations";

let value: ListOperationLogsOperationResponseBody = {
  timestamp: "2023-07-13T21:34:44.816Z",
  message: {
    msg: "This is a log message",
  },
  severity: "DEBUG",
};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              | Example                                                  |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `timestamp`                                              | *string*                                                 | :heavy_check_mark:                                       | The time the log was created.                            | 2023-07-13T21:34:44.816Z                                 |
| `message`                                                | [operations.Message](../../models/operations/message.md) | :heavy_check_mark:                                       | The log message object.                                  |                                                          |
| `severity`                                               | *string*                                                 | :heavy_check_mark:                                       | The severity of the log.                                 | DEBUG                                                    |