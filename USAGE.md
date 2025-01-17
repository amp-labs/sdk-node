<!-- Start SDK Example Usage [usage] -->
```typescript
import { SDK } from "openapi";

const sdk = new SDK({
  apiKeyHeader: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const result = await sdk.write.records({
    projectIdOrName: "<value>",
    integrationId: "<id>",
    objectName: "<value>",
    requestBody: {
      groupRef: "<value>",
      type: "create",
      mode: "synchronous",
    },
  });

  // Handle the result
  console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->