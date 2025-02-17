# Oauth
(*oauth*)

## Overview

### Available Operations

* [connect](#connect) - Get URL for OAuth flow

## connect

Generate a URL for the browser to render to kick off OAuth flow.

### Example Usage

```typescript
import { SDK } from "sdk-node";

const sdk = new SDK();

async function run() {
  const result = await sdk.oauth.connect({
    providerWorkspaceRef: "salesforce-instance-domain",
    projectId: "<id>",
    groupRef: "<value>",
    consumerRef: "<value>",
    provider: "salesforce",
  });

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SDKCore } from "sdk-node/core.js";
import { oauthConnect } from "sdk-node/funcs/oauthConnect.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore();

async function run() {
  const res = await oauthConnect(sdk, {
    providerWorkspaceRef: "salesforce-instance-domain",
    projectId: "<id>",
    groupRef: "<value>",
    consumerRef: "<value>",
    provider: "salesforce",
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.OauthConnectRequestBody](../../models/operations/oauthconnectrequestbody.md)                                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |
| `options.serverURL`                                                                                                                                                            | *string*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | An optional server URL to use.                                                                                                                                                 |

### Response

**Promise\<[operations.OauthConnectResponse](../../models/operations/oauthconnectresponse.md)\>**

### Errors

| Error Type                      | Status Code                     | Content Type                    |
| ------------------------------- | ------------------------------- | ------------------------------- |
| errors.OauthConnectResponseBody | 400                             | application/problem+json        |
| errors.APIError                 | 4XX, 5XX                        | \*/\*                           |