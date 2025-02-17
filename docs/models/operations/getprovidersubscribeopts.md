# GetProviderSubscribeOpts

## Example Usage

```typescript
import { GetProviderSubscribeOpts } from "@amp-labs/sdk-node/models/operations";

let value: GetProviderSubscribeOpts = {
  subscriptionScope: "integration",
  targetURLScope: "installation",
  registrationTiming: "installation",
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `subscriptionScope`                                                                                  | [operations.GetProviderSubscriptionScope](../../models/operations/getprovidersubscriptionscope.md)   | :heavy_check_mark:                                                                                   | The scope of the subscription.                                                                       |
| `targetURLScope`                                                                                     | [operations.GetProviderTargetURLScope](../../models/operations/getprovidertargeturlscope.md)         | :heavy_check_mark:                                                                                   | The scope of the target URL.                                                                         |
| `registrationTiming`                                                                                 | [operations.GetProviderRegistrationTiming](../../models/operations/getproviderregistrationtiming.md) | :heavy_check_mark:                                                                                   | The timing of the registration.                                                                      |