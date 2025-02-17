# Installation
(*installation*)

## Overview

### Available Operations

* [listInstallations](#listinstallations) - List installations
* [createInstallation](#createinstallation) - Create a new installation
* [getInstallation](#getinstallation) - Get an installation
* [deleteInstallation](#deleteinstallation) - Delete an installation
* [updateInstallation](#updateinstallation) - Update an installation

## listInstallations

List installations

### Example Usage

```typescript
import { SDK } from "openapi";

const sdk = new SDK({
  apiKeyHeader: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const result = await sdk.installation.listInstallations({
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
import { installationListInstallations } from "openapi/funcs/installationListInstallations.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  apiKeyHeader: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const res = await installationListInstallations(sdk, {
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
| `request`                                                                                                                                                                      | [operations.ListInstallationsRequest](../../models/operations/listinstallationsrequest.md)                                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |
| `options.serverURL`                                                                                                                                                            | *string*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | An optional server URL to use.                                                                                                                                                 |

### Response

**Promise\<[operations.ListInstallationsResponse](../../models/operations/listinstallationsresponse.md)\>**

### Errors

| Error Type                           | Status Code                          | Content Type                         |
| ------------------------------------ | ------------------------------------ | ------------------------------------ |
| errors.ListInstallationsResponseBody | 400                                  | application/problem+json             |
| errors.APIError                      | 4XX, 5XX                             | \*/\*                                |

## createInstallation

Create a new installation

### Example Usage

```typescript
import { SDK } from "openapi";

const sdk = new SDK({
  apiKeyHeader: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const result = await sdk.installation.createInstallation({
    projectIdOrName: "<value>",
    integrationId: "<id>",
    requestBody: {
      groupRef: "<value>",
      config: {
        content: {
          provider: "salesforce",
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
import { installationCreateInstallation } from "openapi/funcs/installationCreateInstallation.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  apiKeyHeader: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const res = await installationCreateInstallation(sdk, {
    projectIdOrName: "<value>",
    integrationId: "<id>",
    requestBody: {
      groupRef: "<value>",
      config: {
        content: {
          provider: "salesforce",
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
| `request`                                                                                                                                                                      | [operations.CreateInstallationRequest](../../models/operations/createinstallationrequest.md)                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |
| `options.serverURL`                                                                                                                                                            | *string*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | An optional server URL to use.                                                                                                                                                 |

### Response

**Promise\<[operations.CreateInstallationResponse](../../models/operations/createinstallationresponse.md)\>**

### Errors

| Error Type                                        | Status Code                                       | Content Type                                      |
| ------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------- |
| errors.CreateInstallationResponseBody             | 400                                               | application/problem+json                          |
| errors.CreateInstallationInstallationResponseBody | 422                                               | application/problem+json                          |
| errors.APIError                                   | 4XX, 5XX                                          | \*/\*                                             |

## getInstallation

Get an installation

### Example Usage

```typescript
import { SDK } from "openapi";

const sdk = new SDK({
  apiKeyHeader: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const result = await sdk.installation.getInstallation({
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
import { SDKCore } from "openapi/core.js";
import { installationGetInstallation } from "openapi/funcs/installationGetInstallation.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  apiKeyHeader: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const res = await installationGetInstallation(sdk, {
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
| `request`                                                                                                                                                                      | [operations.GetInstallationRequest](../../models/operations/getinstallationrequest.md)                                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |
| `options.serverURL`                                                                                                                                                            | *string*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | An optional server URL to use.                                                                                                                                                 |

### Response

**Promise\<[operations.GetInstallationResponse](../../models/operations/getinstallationresponse.md)\>**

### Errors

| Error Type                         | Status Code                        | Content Type                       |
| ---------------------------------- | ---------------------------------- | ---------------------------------- |
| errors.GetInstallationResponseBody | 400                                | application/problem+json           |
| errors.APIError                    | 4XX, 5XX                           | \*/\*                              |

## deleteInstallation

Delete an installation

### Example Usage

```typescript
import { SDK } from "openapi";

const sdk = new SDK({
  apiKeyHeader: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const result = await sdk.installation.deleteInstallation({
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
import { SDKCore } from "openapi/core.js";
import { installationDeleteInstallation } from "openapi/funcs/installationDeleteInstallation.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  apiKeyHeader: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const res = await installationDeleteInstallation(sdk, {
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
| `request`                                                                                                                                                                      | [operations.DeleteInstallationRequest](../../models/operations/deleteinstallationrequest.md)                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |
| `options.serverURL`                                                                                                                                                            | *string*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | An optional server URL to use.                                                                                                                                                 |

### Response

**Promise\<[operations.DeleteInstallationResponseBody](../../models/operations/deleteinstallationresponsebody.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## updateInstallation

Update an installation

### Example Usage

```typescript
import { SDK } from "openapi";

const sdk = new SDK({
  apiKeyHeader: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const result = await sdk.installation.updateInstallation({
    projectIdOrName: "<value>",
    integrationId: "<id>",
    installationId: "<id>",
    requestBody: {
      updateMask: [
        "connectionId",
        "config.content.write.objects.account",
      ],
      installation: {
        connectionId: "connection-123",
        config: {
          content: {
            provider: "salesforce",
            read: {
              objects: {
                "key": {
                  objectName: "account",
                  schedule: "*/15 * * * *",
                  destination: "accountWebhook",
                  selectedFields: {
                    "0": true,
                    "1": true,
                    "2": true,
                    "3": true,
                    "4": true,
                    "5": true,
                    "6": true,
                    "7": true,
                    "8": true,
                    "9": true,
                    "10": true,
                    "11": true,
                    "12": true,
                    "13": true,
                    "14": true,
                    "15": true,
                    "16": true,
                    "17": true,
                    "18": true,
                    "19": true,
                    "20": true,
                    "21": true,
                    "22": true,
                    "23": true,
                    "24": true,
                    "25": true,
                  },
                  selectedValueMappings: {
                    "stage": {
                      "open": "scheduled",
                      "closedWon": "won",
                      "closedLost": "lost",
                    },
                  },
                  selectedFieldMappings: {
                    "0": "{",
                    "1": " ",
                    "2": "p",
                    "3": "h",
                    "4": "o",
                    "5": "n",
                    "6": "e",
                    "7": "N",
                    "8": "u",
                    "9": "m",
                    "10": "b",
                    "11": "e",
                    "12": "r",
                    "13": ":",
                    "14": " ",
                    "15": "p",
                    "16": "h",
                    "17": "o",
                    "18": "n",
                    "19": "e",
                    "20": ",",
                    "21": " ",
                    "22": "f",
                    "23": "a",
                    "24": "x",
                    "25": "N",
                    "26": "u",
                    "27": "m",
                    "28": "b",
                    "29": "e",
                    "30": "r",
                    "31": ":",
                    "32": " ",
                    "33": "f",
                    "34": "a",
                    "35": "x",
                    "36": " ",
                    "37": "}",
                  },
                  backfill: {
                    defaultPeriod: {
                      days: 30,
                      fullHistory: false,
                    },
                  },
                },
                "key1": {
                  objectName: "account",
                  schedule: "*/15 * * * *",
                  destination: "accountWebhook",
                  selectedFields: {
                    "0": true,
                    "1": true,
                    "2": true,
                    "3": true,
                    "4": true,
                    "5": true,
                    "6": true,
                    "7": true,
                    "8": true,
                    "9": true,
                    "10": true,
                    "11": true,
                    "12": true,
                    "13": true,
                    "14": true,
                    "15": true,
                    "16": true,
                    "17": true,
                    "18": true,
                    "19": true,
                    "20": true,
                    "21": true,
                    "22": true,
                    "23": true,
                    "24": true,
                    "25": true,
                  },
                  selectedValueMappings: {
                    "stage": {
                      "open": "scheduled",
                      "closedWon": "won",
                      "closedLost": "lost",
                    },
                  },
                  selectedFieldMappings: {
                    "0": "{",
                    "1": " ",
                    "2": "p",
                    "3": "h",
                    "4": "o",
                    "5": "n",
                    "6": "e",
                    "7": "N",
                    "8": "u",
                    "9": "m",
                    "10": "b",
                    "11": "e",
                    "12": "r",
                    "13": ":",
                    "14": " ",
                    "15": "p",
                    "16": "h",
                    "17": "o",
                    "18": "n",
                    "19": "e",
                    "20": ",",
                    "21": " ",
                    "22": "f",
                    "23": "a",
                    "24": "x",
                    "25": "N",
                    "26": "u",
                    "27": "m",
                    "28": "b",
                    "29": "e",
                    "30": "r",
                    "31": ":",
                    "32": " ",
                    "33": "f",
                    "34": "a",
                    "35": "x",
                    "36": " ",
                    "37": "}",
                  },
                  backfill: {
                    defaultPeriod: {
                      days: 30,
                      fullHistory: false,
                    },
                  },
                },
              },
            },
            write: {
              objects: {
                "key": {
                  objectName: "account",
                  selectedValueDefaults: {
                    "0": {
                      value: 951033,
                    },
                    "1": {
                      value: 236485,
                    },
                    "2": {
                      value: 499994,
                    },
                    "3": {
                      value: "<value>",
                    },
                    "4": {
                      value: 72958,
                    },
                    "5": {
                      value: "<value>",
                    },
                    "6": {
                      value: true,
                    },
                    "7": {
                      value: "<value>",
                    },
                    "8": {
                      value: 401374,
                    },
                    "9": {
                      value: "<value>",
                    },
                    "10": {
                      value: 590989,
                    },
                    "11": {
                      value: false,
                    },
                    "12": {
                      value: "<value>",
                    },
                    "13": {
                      value: "<value>",
                    },
                    "14": {
                      value: 103079,
                    },
                    "15": {
                      value: "<value>",
                    },
                    "16": {
                      value: true,
                    },
                    "17": {
                      value: 623607,
                    },
                    "18": {
                      value: true,
                    },
                    "19": {
                      value: 529086,
                    },
                    "20": {
                      value: "<value>",
                    },
                    "21": {
                      value: false,
                    },
                    "22": {
                      value: 964301,
                    },
                    "23": {
                      value: "<value>",
                    },
                    "24": {
                      value: false,
                    },
                    "25": {
                      value: "<value>",
                    },
                  },
                },
                "key1": {
                  objectName: "account",
                  selectedValueDefaults: {
                    "0": {
                      value: 475901,
                    },
                    "1": {
                      value: 988720,
                    },
                    "2": {
                      value: 775023,
                    },
                    "3": {
                      value: "<value>",
                    },
                    "4": {
                      value: false,
                    },
                    "5": {
                      value: "<value>",
                    },
                    "6": {
                      value: "<value>",
                    },
                    "7": {
                      value: "<value>",
                    },
                    "8": {
                      value: false,
                    },
                    "9": {
                      value: false,
                    },
                    "10": {
                      value: 57121,
                    },
                    "11": {
                      value: 749578,
                    },
                    "12": {
                      value: "<value>",
                    },
                    "13": {
                      value: false,
                    },
                    "14": {
                      value: "<value>",
                    },
                    "15": {
                      value: 820859,
                    },
                    "16": {
                      value: 418397,
                    },
                    "17": {
                      value: 517616,
                    },
                    "18": {
                      value: false,
                    },
                    "19": {
                      value: 520764,
                    },
                    "20": {
                      value: true,
                    },
                    "21": {
                      value: true,
                    },
                    "22": {
                      value: false,
                    },
                    "23": {
                      value: 807567,
                    },
                    "24": {
                      value: "<value>",
                    },
                    "25": {
                      value: false,
                    },
                  },
                },
                "key2": {
                  objectName: "account",
                  selectedValueDefaults: {
                    "0": {
                      value: "<value>",
                    },
                    "1": {
                      value: false,
                    },
                    "2": {
                      value: 599327,
                    },
                    "3": {
                      value: 883755,
                    },
                    "4": {
                      value: "<value>",
                    },
                    "5": {
                      value: "<value>",
                    },
                    "6": {
                      value: "<value>",
                    },
                    "7": {
                      value: 289101,
                    },
                    "8": {
                      value: 306051,
                    },
                    "9": {
                      value: 405487,
                    },
                    "10": {
                      value: 297389,
                    },
                    "11": {
                      value: 823408,
                    },
                    "12": {
                      value: true,
                    },
                    "13": {
                      value: 390445,
                    },
                    "14": {
                      value: "<value>",
                    },
                    "15": {
                      value: false,
                    },
                    "16": {
                      value: false,
                    },
                    "17": {
                      value: 430992,
                    },
                    "18": {
                      value: 316506,
                    },
                    "19": {
                      value: "<value>",
                    },
                    "20": {
                      value: 824250,
                    },
                    "21": {
                      value: 303883,
                    },
                    "22": {
                      value: "<value>",
                    },
                    "23": {
                      value: 775896,
                    },
                    "24": {
                      value: "<value>",
                    },
                    "25": {
                      value: 213153,
                    },
                  },
                },
              },
            },
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
import { installationUpdateInstallation } from "openapi/funcs/installationUpdateInstallation.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  apiKeyHeader: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const res = await installationUpdateInstallation(sdk, {
    projectIdOrName: "<value>",
    integrationId: "<id>",
    installationId: "<id>",
    requestBody: {
      updateMask: [
        "connectionId",
        "config.content.write.objects.account",
      ],
      installation: {
        connectionId: "connection-123",
        config: {
          content: {
            provider: "salesforce",
            read: {
              objects: {
                "key": {
                  objectName: "account",
                  schedule: "*/15 * * * *",
                  destination: "accountWebhook",
                  selectedFields: {
                    "0": true,
                    "1": true,
                    "2": true,
                    "3": true,
                    "4": true,
                    "5": true,
                    "6": true,
                    "7": true,
                    "8": true,
                    "9": true,
                    "10": true,
                    "11": true,
                    "12": true,
                    "13": true,
                    "14": true,
                    "15": true,
                    "16": true,
                    "17": true,
                    "18": true,
                    "19": true,
                    "20": true,
                    "21": true,
                    "22": true,
                    "23": true,
                    "24": true,
                    "25": true,
                  },
                  selectedValueMappings: {
                    "stage": {
                      "open": "scheduled",
                      "closedWon": "won",
                      "closedLost": "lost",
                    },
                  },
                  selectedFieldMappings: {
                    "0": "{",
                    "1": " ",
                    "2": "p",
                    "3": "h",
                    "4": "o",
                    "5": "n",
                    "6": "e",
                    "7": "N",
                    "8": "u",
                    "9": "m",
                    "10": "b",
                    "11": "e",
                    "12": "r",
                    "13": ":",
                    "14": " ",
                    "15": "p",
                    "16": "h",
                    "17": "o",
                    "18": "n",
                    "19": "e",
                    "20": ",",
                    "21": " ",
                    "22": "f",
                    "23": "a",
                    "24": "x",
                    "25": "N",
                    "26": "u",
                    "27": "m",
                    "28": "b",
                    "29": "e",
                    "30": "r",
                    "31": ":",
                    "32": " ",
                    "33": "f",
                    "34": "a",
                    "35": "x",
                    "36": " ",
                    "37": "}",
                  },
                  backfill: {
                    defaultPeriod: {
                      days: 30,
                      fullHistory: false,
                    },
                  },
                },
                "key1": {
                  objectName: "account",
                  schedule: "*/15 * * * *",
                  destination: "accountWebhook",
                  selectedFields: {
                    "0": true,
                    "1": true,
                    "2": true,
                    "3": true,
                    "4": true,
                    "5": true,
                    "6": true,
                    "7": true,
                    "8": true,
                    "9": true,
                    "10": true,
                    "11": true,
                    "12": true,
                    "13": true,
                    "14": true,
                    "15": true,
                    "16": true,
                    "17": true,
                    "18": true,
                    "19": true,
                    "20": true,
                    "21": true,
                    "22": true,
                    "23": true,
                    "24": true,
                    "25": true,
                  },
                  selectedValueMappings: {
                    "stage": {
                      "open": "scheduled",
                      "closedWon": "won",
                      "closedLost": "lost",
                    },
                  },
                  selectedFieldMappings: {
                    "0": "{",
                    "1": " ",
                    "2": "p",
                    "3": "h",
                    "4": "o",
                    "5": "n",
                    "6": "e",
                    "7": "N",
                    "8": "u",
                    "9": "m",
                    "10": "b",
                    "11": "e",
                    "12": "r",
                    "13": ":",
                    "14": " ",
                    "15": "p",
                    "16": "h",
                    "17": "o",
                    "18": "n",
                    "19": "e",
                    "20": ",",
                    "21": " ",
                    "22": "f",
                    "23": "a",
                    "24": "x",
                    "25": "N",
                    "26": "u",
                    "27": "m",
                    "28": "b",
                    "29": "e",
                    "30": "r",
                    "31": ":",
                    "32": " ",
                    "33": "f",
                    "34": "a",
                    "35": "x",
                    "36": " ",
                    "37": "}",
                  },
                  backfill: {
                    defaultPeriod: {
                      days: 30,
                      fullHistory: false,
                    },
                  },
                },
              },
            },
            write: {
              objects: {
                "key": {
                  objectName: "account",
                  selectedValueDefaults: {
                    "0": {
                      value: 951033,
                    },
                    "1": {
                      value: 236485,
                    },
                    "2": {
                      value: 499994,
                    },
                    "3": {
                      value: "<value>",
                    },
                    "4": {
                      value: 72958,
                    },
                    "5": {
                      value: "<value>",
                    },
                    "6": {
                      value: true,
                    },
                    "7": {
                      value: "<value>",
                    },
                    "8": {
                      value: 401374,
                    },
                    "9": {
                      value: "<value>",
                    },
                    "10": {
                      value: 590989,
                    },
                    "11": {
                      value: false,
                    },
                    "12": {
                      value: "<value>",
                    },
                    "13": {
                      value: "<value>",
                    },
                    "14": {
                      value: 103079,
                    },
                    "15": {
                      value: "<value>",
                    },
                    "16": {
                      value: true,
                    },
                    "17": {
                      value: 623607,
                    },
                    "18": {
                      value: true,
                    },
                    "19": {
                      value: 529086,
                    },
                    "20": {
                      value: "<value>",
                    },
                    "21": {
                      value: false,
                    },
                    "22": {
                      value: 964301,
                    },
                    "23": {
                      value: "<value>",
                    },
                    "24": {
                      value: false,
                    },
                    "25": {
                      value: "<value>",
                    },
                  },
                },
                "key1": {
                  objectName: "account",
                  selectedValueDefaults: {
                    "0": {
                      value: 475901,
                    },
                    "1": {
                      value: 988720,
                    },
                    "2": {
                      value: 775023,
                    },
                    "3": {
                      value: "<value>",
                    },
                    "4": {
                      value: false,
                    },
                    "5": {
                      value: "<value>",
                    },
                    "6": {
                      value: "<value>",
                    },
                    "7": {
                      value: "<value>",
                    },
                    "8": {
                      value: false,
                    },
                    "9": {
                      value: false,
                    },
                    "10": {
                      value: 57121,
                    },
                    "11": {
                      value: 749578,
                    },
                    "12": {
                      value: "<value>",
                    },
                    "13": {
                      value: false,
                    },
                    "14": {
                      value: "<value>",
                    },
                    "15": {
                      value: 820859,
                    },
                    "16": {
                      value: 418397,
                    },
                    "17": {
                      value: 517616,
                    },
                    "18": {
                      value: false,
                    },
                    "19": {
                      value: 520764,
                    },
                    "20": {
                      value: true,
                    },
                    "21": {
                      value: true,
                    },
                    "22": {
                      value: false,
                    },
                    "23": {
                      value: 807567,
                    },
                    "24": {
                      value: "<value>",
                    },
                    "25": {
                      value: false,
                    },
                  },
                },
                "key2": {
                  objectName: "account",
                  selectedValueDefaults: {
                    "0": {
                      value: "<value>",
                    },
                    "1": {
                      value: false,
                    },
                    "2": {
                      value: 599327,
                    },
                    "3": {
                      value: 883755,
                    },
                    "4": {
                      value: "<value>",
                    },
                    "5": {
                      value: "<value>",
                    },
                    "6": {
                      value: "<value>",
                    },
                    "7": {
                      value: 289101,
                    },
                    "8": {
                      value: 306051,
                    },
                    "9": {
                      value: 405487,
                    },
                    "10": {
                      value: 297389,
                    },
                    "11": {
                      value: 823408,
                    },
                    "12": {
                      value: true,
                    },
                    "13": {
                      value: 390445,
                    },
                    "14": {
                      value: "<value>",
                    },
                    "15": {
                      value: false,
                    },
                    "16": {
                      value: false,
                    },
                    "17": {
                      value: 430992,
                    },
                    "18": {
                      value: 316506,
                    },
                    "19": {
                      value: "<value>",
                    },
                    "20": {
                      value: 824250,
                    },
                    "21": {
                      value: 303883,
                    },
                    "22": {
                      value: "<value>",
                    },
                    "23": {
                      value: 775896,
                    },
                    "24": {
                      value: "<value>",
                    },
                    "25": {
                      value: 213153,
                    },
                  },
                },
              },
            },
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
| `request`                                                                                                                                                                      | [operations.UpdateInstallationRequest](../../models/operations/updateinstallationrequest.md)                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |
| `options.serverURL`                                                                                                                                                            | *string*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | An optional server URL to use.                                                                                                                                                 |

### Response

**Promise\<[operations.UpdateInstallationResponse](../../models/operations/updateinstallationresponse.md)\>**

### Errors

| Error Type                                        | Status Code                                       | Content Type                                      |
| ------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------- |
| errors.UpdateInstallationResponseBody             | 400                                               | application/problem+json                          |
| errors.UpdateInstallationInstallationResponseBody | 422                                               | application/problem+json                          |
| errors.APIError                                   | 4XX, 5XX                                          | \*/\*                                             |