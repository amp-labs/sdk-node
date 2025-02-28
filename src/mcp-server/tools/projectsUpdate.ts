/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { projectsUpdate } from "../../funcs/projectsUpdate.js";
import * as operations from "../../models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: operations.UpdateProjectRequest$inboundSchema,
};

export const tool$projectsUpdate: ToolDefinition<typeof args> = {
  name: "projects_update",
  description: `Update a project`,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await projectsUpdate(
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
