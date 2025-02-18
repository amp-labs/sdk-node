# Operations
(*operations*)

## Overview

### Available Operations

* [list](#list) - List operations
* [get](#get) - Get an operation
* [listLogs](#listlogs) - List logs for an operation

## list

List operations

### Example Usage

```typescript
import { SDK } from "@amp-labs/sdk-node";

const sdk = new SDK({
  apiKeyHeader: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const result = await sdk.operations.list({
    projectIdOrName: "<value>",
    integrationId: "<id>",
    installationId: "<id>",
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
import { operationsList } from "@amp-labs/sdk-node/funcs/operationsList.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  apiKeyHeader: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const res = await operationsList(sdk, {
    projectIdOrName: "<value>",
    integrationId: "<id>",
    installationId: "<id>",
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
| `request`                                                                                                                                                                      | [operations.ListOperationsRequest](../../models/operations/listoperationsrequest.md)                                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |
| `options.serverURL`                                                                                                                                                            | *string*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | An optional server URL to use.                                                                                                                                                 |

### Response

**Promise\<[operations.ListOperationsResponse](../../models/operations/listoperationsresponse.md)\>**

### Errors

| Error Type                                            | Status Code                                           | Content Type                                          |
| ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- |
| errors.ListOperationsInputValidationProblem           | 400                                                   | application/problem+json                              |
| errors.ListOperationsOperationsInputValidationProblem | 422                                                   | application/problem+json                              |
| errors.APIError                                       | 4XX, 5XX                                              | \*/\*                                                 |

## get

Get an operation

### Example Usage

```typescript
import { SDK } from "@amp-labs/sdk-node";

const sdk = new SDK({
  apiKeyHeader: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const result = await sdk.operations.get({
    projectIdOrName: "<value>",
    operationId: "<id>",
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
import { operationsGet } from "@amp-labs/sdk-node/funcs/operationsGet.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  apiKeyHeader: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const res = await operationsGet(sdk, {
    projectIdOrName: "<value>",
    operationId: "<id>",
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
| `request`                                                                                                                                                                      | [operations.GetOperationRequest](../../models/operations/getoperationrequest.md)                                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |
| `options.serverURL`                                                                                                                                                            | *string*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | An optional server URL to use.                                                                                                                                                 |

### Response

**Promise\<[operations.GetOperationResponse](../../models/operations/getoperationresponse.md)\>**

### Errors

| Error Type                                          | Status Code                                         | Content Type                                        |
| --------------------------------------------------- | --------------------------------------------------- | --------------------------------------------------- |
| errors.GetOperationInputValidationProblem           | 400                                                 | application/problem+json                            |
| errors.GetOperationOperationsInputValidationProblem | 422                                                 | application/problem+json                            |
| errors.APIError                                     | 4XX, 5XX                                            | \*/\*                                               |

## listLogs

List logs for an operation

### Example Usage

```typescript
import { SDK } from "@amp-labs/sdk-node";

const sdk = new SDK({
  apiKeyHeader: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const result = await sdk.operations.listLogs({
    projectIdOrName: "<value>",
    operationId: "<id>",
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
import { operationsListLogs } from "@amp-labs/sdk-node/funcs/operationsListLogs.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  apiKeyHeader: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const res = await operationsListLogs(sdk, {
    projectIdOrName: "<value>",
    operationId: "<id>",
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
| `request`                                                                                                                                                                      | [operations.ListOperationLogsRequest](../../models/operations/listoperationlogsrequest.md)                                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |
| `options.serverURL`                                                                                                                                                            | *string*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | An optional server URL to use.                                                                                                                                                 |

### Response

**Promise\<[operations.ListOperationLogsResponse](../../models/operations/listoperationlogsresponse.md)\>**

### Errors

| Error Type                                               | Status Code                                              | Content Type                                             |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| errors.ListOperationLogsInputValidationProblem           | 400                                                      | application/problem+json                                 |
| errors.ListOperationLogsOperationsInputValidationProblem | 422                                                      | application/problem+json                                 |
| errors.APIError                                          | 4XX, 5XX                                                 | \*/\*                                                    |