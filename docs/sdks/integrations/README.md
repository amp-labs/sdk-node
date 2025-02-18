# Integrations
(*integrations*)

## Overview

### Available Operations

* [list](#list) - List integrations
* [create](#create) - Create a new integration
* [delete](#delete) - Delete an integration
* [batchUpsert](#batchupsert) - Batch upsert a group of integrations

## list

List integrations

### Example Usage

```typescript
import { SDK } from "@amp-labs/sdk-node";

const sdk = new SDK({
  apiKeyHeader: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const result = await sdk.integrations.list({
    projectIdOrName: "<value>",
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
import { integrationsList } from "@amp-labs/sdk-node/funcs/integrationsList.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  apiKeyHeader: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const res = await integrationsList(sdk, {
    projectIdOrName: "<value>",
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
| `request`                                                                                                                                                                      | [operations.ListIntegrationsRequest](../../models/operations/listintegrationsrequest.md)                                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |
| `options.serverURL`                                                                                                                                                            | *string*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | An optional server URL to use.                                                                                                                                                 |

### Response

**Promise\<[operations.ListIntegrationsResponse](../../models/operations/listintegrationsresponse.md)\>**

### Errors

| Error Type                                    | Status Code                                   | Content Type                                  |
| --------------------------------------------- | --------------------------------------------- | --------------------------------------------- |
| errors.ListIntegrationsInputValidationProblem | 422                                           | application/problem+json                      |
| errors.APIError                               | 4XX, 5XX                                      | \*/\*                                         |

## create

Create a new integration

### Example Usage

```typescript
import { SDK } from "@amp-labs/sdk-node";

const sdk = new SDK({
  apiKeyHeader: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const result = await sdk.integrations.create({
    projectIdOrName: "<value>",
    requestBody: {
      name: "<value>",
      provider: "<value>",
      latestRevision: {
        specVersion: "1.0.0",
        content: {
          name: "<value>",
          provider: "<value>",
          read: {
            objects: [
              {
                objectName: "<value>",
                destination: "<value>",
                schedule: "<value>",
                mapToName: "people",
                mapToDisplayName: "People",
                requiredFields: [
                  {
                    mapToName: "<value>",
                  },
                  {
                    mapToName: "<value>",
                  },
                  {
                    fieldName: "<value>",
                    mapToName: "account_id",
                    mapToDisplayName: "Account ID",
                  },
                ],
                optionalFields: [
                  {
                    mapToName: "<value>",
                  },
                ],
                backfill: {
                  defaultPeriod: {
                    days: 30,
                    fullHistory: false,
                  },
                },
              },
              {
                objectName: "<value>",
                destination: "<value>",
                schedule: "<value>",
                mapToName: "people",
                mapToDisplayName: "People",
                requiredFields: [
                  {
                    mapToName: "<value>",
                  },
                ],
                optionalFields: [
                  {
                    mapToName: "<value>",
                  },
                  {
                    fieldName: "<value>",
                    mapToName: "account_id",
                    mapToDisplayName: "Account ID",
                  },
                ],
                backfill: {
                  defaultPeriod: {
                    days: 30,
                    fullHistory: false,
                  },
                },
              },
            ],
          },
          write: {
            objects: [
              {
                objectName: "<value>",
                inheritMapping: true,
                valueDefaults: {
                  allowAnyFields: true,
                },
              },
            ],
          },
        },
      },
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
import { integrationsCreate } from "@amp-labs/sdk-node/funcs/integrationsCreate.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  apiKeyHeader: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const res = await integrationsCreate(sdk, {
    projectIdOrName: "<value>",
    requestBody: {
      name: "<value>",
      provider: "<value>",
      latestRevision: {
        specVersion: "1.0.0",
        content: {
          name: "<value>",
          provider: "<value>",
          read: {
            objects: [
              {
                objectName: "<value>",
                destination: "<value>",
                schedule: "<value>",
                mapToName: "people",
                mapToDisplayName: "People",
                requiredFields: [
                  {
                    mapToName: "<value>",
                  },
                  {
                    mapToName: "<value>",
                  },
                  {
                    fieldName: "<value>",
                    mapToName: "account_id",
                    mapToDisplayName: "Account ID",
                  },
                ],
                optionalFields: [
                  {
                    mapToName: "<value>",
                  },
                ],
                backfill: {
                  defaultPeriod: {
                    days: 30,
                    fullHistory: false,
                  },
                },
              },
              {
                objectName: "<value>",
                destination: "<value>",
                schedule: "<value>",
                mapToName: "people",
                mapToDisplayName: "People",
                requiredFields: [
                  {
                    mapToName: "<value>",
                  },
                ],
                optionalFields: [
                  {
                    mapToName: "<value>",
                  },
                  {
                    fieldName: "<value>",
                    mapToName: "account_id",
                    mapToDisplayName: "Account ID",
                  },
                ],
                backfill: {
                  defaultPeriod: {
                    days: 30,
                    fullHistory: false,
                  },
                },
              },
            ],
          },
          write: {
            objects: [
              {
                objectName: "<value>",
                inheritMapping: true,
                valueDefaults: {
                  allowAnyFields: true,
                },
              },
            ],
          },
        },
      },
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
| `request`                                                                                                                                                                      | [operations.CreateIntegrationRequest](../../models/operations/createintegrationrequest.md)                                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |
| `options.serverURL`                                                                                                                                                            | *string*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | An optional server URL to use.                                                                                                                                                 |

### Response

**Promise\<[operations.CreateIntegrationAPIProblem](../../models/operations/createintegrationapiproblem.md)\>**

### Errors

| Error Type                                                 | Status Code                                                | Content Type                                               |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| errors.CreateIntegrationInputValidationProblem             | 400                                                        | application/problem+json                                   |
| errors.CreateIntegrationIntegrationsInputValidationProblem | 422                                                        | application/problem+json                                   |
| errors.APIError                                            | 4XX, 5XX                                                   | \*/\*                                                      |

## delete

Delete an integration

### Example Usage

```typescript
import { SDK } from "@amp-labs/sdk-node";

const sdk = new SDK({
  apiKeyHeader: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const result = await sdk.integrations.delete({
    projectIdOrName: "<value>",
    integrationId: "<id>",
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
import { integrationsDelete } from "@amp-labs/sdk-node/funcs/integrationsDelete.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  apiKeyHeader: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const res = await integrationsDelete(sdk, {
    projectIdOrName: "<value>",
    integrationId: "<id>",
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
| `request`                                                                                                                                                                      | [operations.DeleteIntegrationRequest](../../models/operations/deleteintegrationrequest.md)                                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |
| `options.serverURL`                                                                                                                                                            | *string*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | An optional server URL to use.                                                                                                                                                 |

### Response

**Promise\<[operations.DeleteIntegrationAPIProblem](../../models/operations/deleteintegrationapiproblem.md)\>**

### Errors

| Error Type                                                 | Status Code                                                | Content Type                                               |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| errors.DeleteIntegrationInputValidationProblem             | 404                                                        | application/problem+json                                   |
| errors.DeleteIntegrationIntegrationsInputValidationProblem | 422                                                        | application/problem+json                                   |
| errors.APIError                                            | 4XX, 5XX                                                   | \*/\*                                                      |

## batchUpsert

Batch upsert a group of integrations

### Example Usage

```typescript
import { SDK } from "@amp-labs/sdk-node";

const sdk = new SDK({
  apiKeyHeader: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const result = await sdk.integrations.batchUpsert({
    projectIdOrName: "<value>",
    requestBody: {},
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
import { integrationsBatchUpsert } from "@amp-labs/sdk-node/funcs/integrationsBatchUpsert.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  apiKeyHeader: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const res = await integrationsBatchUpsert(sdk, {
    projectIdOrName: "<value>",
    requestBody: {},
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
| `request`                                                                                                                                                                      | [operations.BatchUpsertIntegrationsRequest](../../models/operations/batchupsertintegrationsrequest.md)                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |
| `options.serverURL`                                                                                                                                                            | *string*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | An optional server URL to use.                                                                                                                                                 |

### Response

**Promise\<[operations.BatchUpsertIntegrationsResponse](../../models/operations/batchupsertintegrationsresponse.md)\>**

### Errors

| Error Type                                           | Status Code                                          | Content Type                                         |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| errors.BatchUpsertIntegrationsInputValidationProblem | 422                                                  | application/problem+json                             |
| errors.APIError                                      | 4XX, 5XX                                             | \*/\*                                                |