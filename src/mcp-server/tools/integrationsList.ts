/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { integrationsList } from "../../funcs/integrationsList.js";
import * as operations from "../../models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: operations.ListIntegrationsRequest$inboundSchema,
};

export const tool$integrationsList: ToolDefinition<typeof args> = {
  name: "integrations_list",
  description: `List integrations`,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await integrationsList(
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
