# Groups
(*groups*)

## Overview

### Available Operations

* [create](#create) - Create a new group

## create

Create a new group

### Example Usage

```typescript
import { SDK } from "@amp-labs/sdk-node";

const sdk = new SDK({
  apiKeyHeader: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const result = await sdk.groups.create({
    projectIdOrName: "<value>",
    requestBody: {
      groupRef: "group-123",
      groupName: "Super Customers",
    },
  });

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SDKCore } from "@amp-labs/sdk-node/core.js";
import { groupsCreate } from "@amp-labs/sdk-node/funcs/groupsCreate.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  apiKeyHeader: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const res = await groupsCreate(sdk, {
    projectIdOrName: "<value>",
    requestBody: {
      groupRef: "group-123",
      groupName: "Super Customers",
    },
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
| `request`                                                                                                                                                                      | [operations.CreateGroupRequest](../../models/operations/creategrouprequest.md)                                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |
| `options.serverURL`                                                                                                                                                            | *string*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | An optional server URL to use.                                                                                                                                                 |

### Response

**Promise\<[operations.CreateGroupAPIProblem](../../models/operations/creategroupapiproblem.md)\>**

### Errors

| Error Type                               | Status Code                              | Content Type                             |
| ---------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| errors.CreateGroupInputValidationProblem | 422                                      | application/problem+json                 |
| errors.APIError                          | 4XX, 5XX                                 | \*/\*                                    |