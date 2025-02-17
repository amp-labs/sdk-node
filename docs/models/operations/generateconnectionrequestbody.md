# GenerateConnectionRequestBody

## Example Usage

```typescript
import { GenerateConnectionRequestBody } from "@amp-labs/sdk-node/models/operations";

let value: GenerateConnectionRequestBody = {
  groupRef: "<value>",
  consumerRef: "<value>",
  provider: "<value>",
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `providerWorkspaceRef`                                                                   | *string*                                                                                 | :heavy_minus_sign:                                                                       | The ID of the provider workspace that this connection belongs to.                        |
| `groupName`                                                                              | *string*                                                                                 | :heavy_minus_sign:                                                                       | The name of the user group that has access to this installation.                         |
| `groupRef`                                                                               | *string*                                                                                 | :heavy_check_mark:                                                                       | The ID of the user group that has access to this installation.                           |
| `consumerName`                                                                           | *string*                                                                                 | :heavy_minus_sign:                                                                       | The name of the consumer that has access to this installation.                           |
| `consumerRef`                                                                            | *string*                                                                                 | :heavy_check_mark:                                                                       | The consumer reference.                                                                  |
| `provider`                                                                               | *string*                                                                                 | :heavy_check_mark:                                                                       | The provider name (e.g. "salesforce", "hubspot")                                         |
| `apiKey`                                                                                 | *string*                                                                                 | :heavy_minus_sign:                                                                       | The API key to use for the connection.                                                   |
| `basicAuth`                                                                              | [operations.BasicAuth](../../models/operations/basicauth.md)                             | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `oauth2ClientCredentials`                                                                | [operations.Oauth2ClientCredentials](../../models/operations/oauth2clientcredentials.md) | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `oauth2Password`                                                                         | [operations.Oauth2Password](../../models/operations/oauth2password.md)                   | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `oauth2AuthorizationCode`                                                                | [operations.Oauth2AuthorizationCode](../../models/operations/oauth2authorizationcode.md) | :heavy_minus_sign:                                                                       | N/A                                                                                      |