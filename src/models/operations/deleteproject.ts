/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export const DeleteProjectServerList = [
  "https://api.withampersand.com/v1",
] as const;

export type DeleteProjectRequest = {
  projectIdOrName: string;
};

/**
 * A Problem Details object (RFC 9457).
 *
 * @remarks
 *
 * Additional properties specific to the problem type may be present.
 */
export type DeleteProjectResponseBody = {
  /**
   * An absolute URI that identifies the problem type
   */
  type?: string | undefined;
  /**
   * An absolute URI that, when dereferenced, provides human-readable documentation for the problem type (e.g. using HTML).
   */
  href?: string | undefined;
  /**
   * A short summary of the problem type. Written in English and readable for engineers (usually not suited for non technical stakeholders and not localized).
   */
  title?: string | undefined;
  /**
   * The HTTP status code generated by the origin server for this occurrence of the problem.
   */
  status?: number | undefined;
  /**
   * A human-readable explanation specific to this occurrence of the problem
   */
  detail?: string | undefined;
  /**
   * An absolute URI that identifies the specific occurrence of the problem. It may or may not yield further information if dereferenced.
   */
  instance?: string | undefined;
  /**
   * The subsystem that generated the problem
   */
  subsystem?: string | undefined;
  /**
   * The time the problem occurred, formatted as RFC-3339
   */
  time?: Date | undefined;
  /**
   * A unique identifier for the request, useful for debugging
   */
  requestId?: string | undefined;
  /**
   * A list of problems that caused this problem. This can be used to represent multiple
   *
   * @remarks
   * root causes. There is no guaranteed ordering of the causes.
   */
  causes?: Array<string> | undefined;
  /**
   * A brief description of how to resolve the problem
   */
  remedy?: string | undefined;
  /**
   * An email address to contact for support
   */
  supportEmail?: string | undefined;
  /**
   * A phone number to contact for support
   */
  supportPhone?: string | undefined;
  /**
   * A URL to contact for support
   */
  supportUrl?: string | undefined;
  /**
   * Whether the request can be retried
   */
  retryable?: boolean | undefined;
  /**
   * A timestamp after which the request can be retried, formatted as RFC-3339
   */
  retryAfter?: Date | undefined;
  /**
   * Additional context for the problem
   */
  context?: { [k: string]: any } | undefined;
};

/** @internal */
export const DeleteProjectRequest$inboundSchema: z.ZodType<
  DeleteProjectRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  projectIdOrName: z.string(),
});

/** @internal */
export type DeleteProjectRequest$Outbound = {
  projectIdOrName: string;
};

/** @internal */
export const DeleteProjectRequest$outboundSchema: z.ZodType<
  DeleteProjectRequest$Outbound,
  z.ZodTypeDef,
  DeleteProjectRequest
> = z.object({
  projectIdOrName: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DeleteProjectRequest$ {
  /** @deprecated use `DeleteProjectRequest$inboundSchema` instead. */
  export const inboundSchema = DeleteProjectRequest$inboundSchema;
  /** @deprecated use `DeleteProjectRequest$outboundSchema` instead. */
  export const outboundSchema = DeleteProjectRequest$outboundSchema;
  /** @deprecated use `DeleteProjectRequest$Outbound` instead. */
  export type Outbound = DeleteProjectRequest$Outbound;
}

export function deleteProjectRequestToJSON(
  deleteProjectRequest: DeleteProjectRequest,
): string {
  return JSON.stringify(
    DeleteProjectRequest$outboundSchema.parse(deleteProjectRequest),
  );
}

export function deleteProjectRequestFromJSON(
  jsonString: string,
): SafeParseResult<DeleteProjectRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => DeleteProjectRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'DeleteProjectRequest' from JSON`,
  );
}

/** @internal */
export const DeleteProjectResponseBody$inboundSchema: z.ZodType<
  DeleteProjectResponseBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  type: z.string().default("about:blank"),
  href: z.string().optional(),
  title: z.string().optional(),
  status: z.number().int().optional(),
  detail: z.string().optional(),
  instance: z.string().optional(),
  subsystem: z.string().optional(),
  time: z.string().datetime({ offset: true }).transform(v => new Date(v))
    .optional(),
  requestId: z.string().optional(),
  causes: z.array(z.string()).optional(),
  remedy: z.string().optional(),
  supportEmail: z.string().optional(),
  supportPhone: z.string().optional(),
  supportUrl: z.string().optional(),
  retryable: z.boolean().optional(),
  retryAfter: z.string().datetime({ offset: true }).transform(v => new Date(v))
    .optional(),
  context: z.record(z.any()).optional(),
});

/** @internal */
export type DeleteProjectResponseBody$Outbound = {
  type: string;
  href?: string | undefined;
  title?: string | undefined;
  status?: number | undefined;
  detail?: string | undefined;
  instance?: string | undefined;
  subsystem?: string | undefined;
  time?: string | undefined;
  requestId?: string | undefined;
  causes?: Array<string> | undefined;
  remedy?: string | undefined;
  supportEmail?: string | undefined;
  supportPhone?: string | undefined;
  supportUrl?: string | undefined;
  retryable?: boolean | undefined;
  retryAfter?: string | undefined;
  context?: { [k: string]: any } | undefined;
};

/** @internal */
export const DeleteProjectResponseBody$outboundSchema: z.ZodType<
  DeleteProjectResponseBody$Outbound,
  z.ZodTypeDef,
  DeleteProjectResponseBody
> = z.object({
  type: z.string().default("about:blank"),
  href: z.string().optional(),
  title: z.string().optional(),
  status: z.number().int().optional(),
  detail: z.string().optional(),
  instance: z.string().optional(),
  subsystem: z.string().optional(),
  time: z.date().transform(v => v.toISOString()).optional(),
  requestId: z.string().optional(),
  causes: z.array(z.string()).optional(),
  remedy: z.string().optional(),
  supportEmail: z.string().optional(),
  supportPhone: z.string().optional(),
  supportUrl: z.string().optional(),
  retryable: z.boolean().optional(),
  retryAfter: z.date().transform(v => v.toISOString()).optional(),
  context: z.record(z.any()).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DeleteProjectResponseBody$ {
  /** @deprecated use `DeleteProjectResponseBody$inboundSchema` instead. */
  export const inboundSchema = DeleteProjectResponseBody$inboundSchema;
  /** @deprecated use `DeleteProjectResponseBody$outboundSchema` instead. */
  export const outboundSchema = DeleteProjectResponseBody$outboundSchema;
  /** @deprecated use `DeleteProjectResponseBody$Outbound` instead. */
  export type Outbound = DeleteProjectResponseBody$Outbound;
}

export function deleteProjectResponseBodyToJSON(
  deleteProjectResponseBody: DeleteProjectResponseBody,
): string {
  return JSON.stringify(
    DeleteProjectResponseBody$outboundSchema.parse(deleteProjectResponseBody),
  );
}

export function deleteProjectResponseBodyFromJSON(
  jsonString: string,
): SafeParseResult<DeleteProjectResponseBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => DeleteProjectResponseBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'DeleteProjectResponseBody' from JSON`,
  );
}
