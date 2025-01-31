# Integration
(*integration*)

## Overview

### Available Operations

* [listIntegrations](#listintegrations) - List integrations
* [createIntegration](#createintegration) - Create a new integration
* [deleteIntegration](#deleteintegration) - Delete an integration
* [batchUpsertIntegrations](#batchupsertintegrations) - Batch upsert a group of integrations

## listIntegrations

List integrations

### Example Usage

```typescript
import { SDK } from "openapi";

const sdk = new SDK({
  apiKeyHeader: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const result = await sdk.integration.listIntegrations({
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
import { SDKCore } from "openapi/core.js";
import { integrationListIntegrations } from "openapi/funcs/integrationListIntegrations.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  apiKeyHeader: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const res = await integrationListIntegrations(sdk, {
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

| Error Type                          | Status Code                         | Content Type                        |
| ----------------------------------- | ----------------------------------- | ----------------------------------- |
| errors.ListIntegrationsResponseBody | 422                                 | application/problem+json            |
| errors.APIError                     | 4XX, 5XX                            | \*/\*                               |

## createIntegration

Create a new integration

### Example Usage

```typescript
import { SDK } from "openapi";

const sdk = new SDK({
  apiKeyHeader: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const result = await sdk.integration.createIntegration({
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
import { SDKCore } from "openapi/core.js";
import { integrationCreateIntegration } from "openapi/funcs/integrationCreateIntegration.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  apiKeyHeader: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const res = await integrationCreateIntegration(sdk, {
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

**Promise\<[operations.CreateIntegrationResponseBody](../../models/operations/createintegrationresponsebody.md)\>**

### Errors

| Error Type                                      | Status Code                                     | Content Type                                    |
| ----------------------------------------------- | ----------------------------------------------- | ----------------------------------------------- |
| errors.CreateIntegrationResponseBody            | 400                                             | application/problem+json                        |
| errors.CreateIntegrationIntegrationResponseBody | 422                                             | application/problem+json                        |
| errors.APIError                                 | 4XX, 5XX                                        | \*/\*                                           |

## deleteIntegration

Delete an integration

### Example Usage

```typescript
import { SDK } from "openapi";

const sdk = new SDK({
  apiKeyHeader: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const result = await sdk.integration.deleteIntegration({
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
import { SDKCore } from "openapi/core.js";
import { integrationDeleteIntegration } from "openapi/funcs/integrationDeleteIntegration.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  apiKeyHeader: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const res = await integrationDeleteIntegration(sdk, {
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

**Promise\<[operations.DeleteIntegrationResponseBody](../../models/operations/deleteintegrationresponsebody.md)\>**

### Errors

| Error Type                                      | Status Code                                     | Content Type                                    |
| ----------------------------------------------- | ----------------------------------------------- | ----------------------------------------------- |
| errors.DeleteIntegrationResponseBody            | 404                                             | application/problem+json                        |
| errors.DeleteIntegrationIntegrationResponseBody | 422                                             | application/problem+json                        |
| errors.APIError                                 | 4XX, 5XX                                        | \*/\*                                           |

## batchUpsertIntegrations

Batch upsert a group of integrations

### Example Usage

```typescript
import { SDK } from "openapi";

const sdk = new SDK({
  apiKeyHeader: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const result = await sdk.integration.batchUpsertIntegrations({
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
import { SDKCore } from "openapi/core.js";
import { integrationBatchUpsertIntegrations } from "openapi/funcs/integrationBatchUpsertIntegrations.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  apiKeyHeader: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const res = await integrationBatchUpsertIntegrations(sdk, {
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
| `request`                                                                                                                                                                      | [operations.BatchUpsertIntegrationsRequest](../../models/operations/batchupsertintegrationsrequest.md)                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |
| `options.serverURL`                                                                                                                                                            | *string*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | An optional server URL to use.                                                                                                                                                 |

### Response

**Promise\<[operations.BatchUpsertIntegrationsResponse](../../models/operations/batchupsertintegrationsresponse.md)\>**

### Errors

| Error Type                                 | Status Code                                | Content Type                               |
| ------------------------------------------ | ------------------------------------------ | ------------------------------------------ |
| errors.BatchUpsertIntegrationsResponseBody | 422                                        | application/problem+json                   |
| errors.APIError                            | 4XX, 5XX                                   | \*/\*                                      |