/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { providerAppsDelete } from "../../funcs/providerAppsDelete.js";
import * as operations from "../../models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: operations.DeleteProviderAppRequest$inboundSchema,
};

export const tool$providerAppsDelete: ToolDefinition<typeof args> = {
  name: "provider-apps_delete",
  description: `Delete a provider app`,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await providerAppsDelete(
      client,
      args.request,
      { fetchOptions: { signal: ctx.signal } },
    ).$inspect();

    if (!result.ok) {
      return {
        content: [{ type: "text", text: result.error.message }],
        isError: true,
      };
    }

    const value = result.value;

    return formatResult(value, apiCall);
  },
};
