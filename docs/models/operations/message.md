# Message

The log message object.

## Example Usage

```typescript
import { Message } from "openapi/models/operations";

let value: Message = {
  msg: "This is a log message",
};
```

## Fields

| Field                                          | Type                                           | Required                                       | Description                                    | Example                                        |
| ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- |
| `msg`                                          | *string*                                       | :heavy_check_mark:                             | The use-readable message.                      | This is a log message                          |
| `error`                                        | *string*                                       | :heavy_minus_sign:                             | The error message, if there has been an error. |                                                |
| `operationId`                                  | *string*                                       | :heavy_minus_sign:                             | The operation ID.                              |                                                |