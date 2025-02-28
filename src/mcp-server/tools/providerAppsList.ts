/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { providerAppsList } from "../../funcs/providerAppsList.js";
import * as operations from "../../models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: operations.ListProviderAppsRequest$inboundSchema,
};

export const tool$providerAppsList: ToolDefinition<typeof args> = {
  name: "provider-apps_list",
  description: `List provider apps`,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await providerAppsList(
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
