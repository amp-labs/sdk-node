# GetInstallationConsumer

## Example Usage

```typescript
import { GetInstallationConsumer } from "sdk-node/models/operations";

let value: GetInstallationConsumer = {
  consumerRef: "consumer-123",
  consumerName: "Super Customer",
  projectId: "project-456",
  createTime: new Date("2023-07-13T21:34:44.816Z"),
  updateTime: new Date("2023-07-13T21:34:44.816Z"),
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `consumerRef`                                                                                 | *string*                                                                                      | :heavy_check_mark:                                                                            | The consumer reference.                                                                       | consumer-123                                                                                  |
| `consumerName`                                                                                | *string*                                                                                      | :heavy_check_mark:                                                                            | The name of the consumer.                                                                     | Super Customer                                                                                |
| `projectId`                                                                                   | *string*                                                                                      | :heavy_check_mark:                                                                            | The Ampersand project ID.                                                                     | project-456                                                                                   |
| `createTime`                                                                                  | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | The time the consumer was created.                                                            | 2023-07-13T21:34:44.816Z                                                                      |
| `updateTime`                                                                                  | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | The time the consumer was last updated.                                                       | 2023-07-13T21:34:44.816Z                                                                      |