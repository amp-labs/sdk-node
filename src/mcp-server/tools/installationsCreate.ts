/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { installationsCreate } from "../../funcs/installationsCreate.js";
import * as operations from "../../models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: operations.CreateInstallationRequest$inboundSchema,
};

export const tool$installationsCreate: ToolDefinition<typeof args> = {
  name: "installations_create",
  description: `Create a new installation`,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await installationsCreate(
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
