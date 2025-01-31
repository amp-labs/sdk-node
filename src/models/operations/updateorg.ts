/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export const UpdateOrgServerList = [
  "https://api.withampersand.com/v1",
] as const;

export type Org = {
  /**
   * The organization label.
   */
  label?: string | undefined;
};

export type UpdateOrgRequestBody = {
  updateMask: Array<string>;
  org: Org;
};

export type UpdateOrgRequest = {
  orgId: string;
  requestBody: UpdateOrgRequestBody;
};

/**
 * A Problem Details object (RFC 9457).
 *
 * @remarks
 *
 * Additional properties specific to the problem type may be present.
 */
export type UpdateOrgOrgResponseBody = {
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

/**
 * Updated org
 */
export type UpdateOrgResponseBody = {
  /**
   * The organization ID.
   */
  id: string;
  /**
   * The organization label.
   */
  label: string;
  /**
   * The ID of the Everyone team for the org.
   */
  defaultTeamId: string;
  /**
   * The time the organization was created.
   */
  createTime: Date;
  /**
   * The time the organization was updated.
   */
  updateTime?: Date | undefined;
};

export type UpdateOrgResponse =
  | UpdateOrgResponseBody
  | UpdateOrgOrgResponseBody;

/** @internal */
export const Org$inboundSchema: z.ZodType<Org, z.ZodTypeDef, unknown> = z
  .object({
    label: z.string().optional(),
  });

/** @internal */
export type Org$Outbound = {
  label?: string | undefined;
};

/** @internal */
export const Org$outboundSchema: z.ZodType<Org$Outbound, z.ZodTypeDef, Org> = z
  .object({
    label: z.string().optional(),
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Org$ {
  /** @deprecated use `Org$inboundSchema` instead. */
  export const inboundSchema = Org$inboundSchema;
  /** @deprecated use `Org$outboundSchema` instead. */
  export const outboundSchema = Org$outboundSchema;
  /** @deprecated use `Org$Outbound` instead. */
  export type Outbound = Org$Outbound;
}

export function orgToJSON(org: Org): string {
  return JSON.stringify(Org$outboundSchema.parse(org));
}

export function orgFromJSON(
  jsonString: string,
): SafeParseResult<Org, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => Org$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'Org' from JSON`,
  );
}

/** @internal */
export const UpdateOrgRequestBody$inboundSchema: z.ZodType<
  UpdateOrgRequestBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  updateMask: z.array(z.string()),
  org: z.lazy(() => Org$inboundSchema),
});

/** @internal */
export type UpdateOrgRequestBody$Outbound = {
  updateMask: Array<string>;
  org: Org$Outbound;
};

/** @internal */
export const UpdateOrgRequestBody$outboundSchema: z.ZodType<
  UpdateOrgRequestBody$Outbound,
  z.ZodTypeDef,
  UpdateOrgRequestBody
> = z.object({
  updateMask: z.array(z.string()),
  org: z.lazy(() => Org$outboundSchema),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UpdateOrgRequestBody$ {
  /** @deprecated use `UpdateOrgRequestBody$inboundSchema` instead. */
  export const inboundSchema = UpdateOrgRequestBody$inboundSchema;
  /** @deprecated use `UpdateOrgRequestBody$outboundSchema` instead. */
  export const outboundSchema = UpdateOrgRequestBody$outboundSchema;
  /** @deprecated use `UpdateOrgRequestBody$Outbound` instead. */
  export type Outbound = UpdateOrgRequestBody$Outbound;
}

export function updateOrgRequestBodyToJSON(
  updateOrgRequestBody: UpdateOrgRequestBody,
): string {
  return JSON.stringify(
    UpdateOrgRequestBody$outboundSchema.parse(updateOrgRequestBody),
  );
}

export function updateOrgRequestBodyFromJSON(
  jsonString: string,
): SafeParseResult<UpdateOrgRequestBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => UpdateOrgRequestBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'UpdateOrgRequestBody' from JSON`,
  );
}

/** @internal */
export const UpdateOrgRequest$inboundSchema: z.ZodType<
  UpdateOrgRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  orgId: z.string(),
  RequestBody: z.lazy(() => UpdateOrgRequestBody$inboundSchema),
}).transform((v) => {
  return remap$(v, {
    "RequestBody": "requestBody",
  });
});

/** @internal */
export type UpdateOrgRequest$Outbound = {
  orgId: string;
  RequestBody: UpdateOrgRequestBody$Outbound;
};

/** @internal */
export const UpdateOrgRequest$outboundSchema: z.ZodType<
  UpdateOrgRequest$Outbound,
  z.ZodTypeDef,
  UpdateOrgRequest
> = z.object({
  orgId: z.string(),
  requestBody: z.lazy(() => UpdateOrgRequestBody$outboundSchema),
}).transform((v) => {
  return remap$(v, {
    requestBody: "RequestBody",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UpdateOrgRequest$ {
  /** @deprecated use `UpdateOrgRequest$inboundSchema` instead. */
  export const inboundSchema = UpdateOrgRequest$inboundSchema;
  /** @deprecated use `UpdateOrgRequest$outboundSchema` instead. */
  export const outboundSchema = UpdateOrgRequest$outboundSchema;
  /** @deprecated use `UpdateOrgRequest$Outbound` instead. */
  export type Outbound = UpdateOrgRequest$Outbound;
}

export function updateOrgRequestToJSON(
  updateOrgRequest: UpdateOrgRequest,
): string {
  return JSON.stringify(
    UpdateOrgRequest$outboundSchema.parse(updateOrgRequest),
  );
}

export function updateOrgRequestFromJSON(
  jsonString: string,
): SafeParseResult<UpdateOrgRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => UpdateOrgRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'UpdateOrgRequest' from JSON`,
  );
}

/** @internal */
export const UpdateOrgOrgResponseBody$inboundSchema: z.ZodType<
  UpdateOrgOrgResponseBody,
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
export type UpdateOrgOrgResponseBody$Outbound = {
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
export const UpdateOrgOrgResponseBody$outboundSchema: z.ZodType<
  UpdateOrgOrgResponseBody$Outbound,
  z.ZodTypeDef,
  UpdateOrgOrgResponseBody
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
export namespace UpdateOrgOrgResponseBody$ {
  /** @deprecated use `UpdateOrgOrgResponseBody$inboundSchema` instead. */
  export const inboundSchema = UpdateOrgOrgResponseBody$inboundSchema;
  /** @deprecated use `UpdateOrgOrgResponseBody$outboundSchema` instead. */
  export const outboundSchema = UpdateOrgOrgResponseBody$outboundSchema;
  /** @deprecated use `UpdateOrgOrgResponseBody$Outbound` instead. */
  export type Outbound = UpdateOrgOrgResponseBody$Outbound;
}

export function updateOrgOrgResponseBodyToJSON(
  updateOrgOrgResponseBody: UpdateOrgOrgResponseBody,
): string {
  return JSON.stringify(
    UpdateOrgOrgResponseBody$outboundSchema.parse(updateOrgOrgResponseBody),
  );
}

export function updateOrgOrgResponseBodyFromJSON(
  jsonString: string,
): SafeParseResult<UpdateOrgOrgResponseBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => UpdateOrgOrgResponseBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'UpdateOrgOrgResponseBody' from JSON`,
  );
}

/** @internal */
export const UpdateOrgResponseBody$inboundSchema: z.ZodType<
  UpdateOrgResponseBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string(),
  label: z.string(),
  defaultTeamId: z.string(),
  createTime: z.string().datetime({ offset: true }).transform(v => new Date(v)),
  updateTime: z.string().datetime({ offset: true }).transform(v => new Date(v))
    .optional(),
});

/** @internal */
export type UpdateOrgResponseBody$Outbound = {
  id: string;
  label: string;
  defaultTeamId: string;
  createTime: string;
  updateTime?: string | undefined;
};

/** @internal */
export const UpdateOrgResponseBody$outboundSchema: z.ZodType<
  UpdateOrgResponseBody$Outbound,
  z.ZodTypeDef,
  UpdateOrgResponseBody
> = z.object({
  id: z.string(),
  label: z.string(),
  defaultTeamId: z.string(),
  createTime: z.date().transform(v => v.toISOString()),
  updateTime: z.date().transform(v => v.toISOString()).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UpdateOrgResponseBody$ {
  /** @deprecated use `UpdateOrgResponseBody$inboundSchema` instead. */
  export const inboundSchema = UpdateOrgResponseBody$inboundSchema;
  /** @deprecated use `UpdateOrgResponseBody$outboundSchema` instead. */
  export const outboundSchema = UpdateOrgResponseBody$outboundSchema;
  /** @deprecated use `UpdateOrgResponseBody$Outbound` instead. */
  export type Outbound = UpdateOrgResponseBody$Outbound;
}

export function updateOrgResponseBodyToJSON(
  updateOrgResponseBody: UpdateOrgResponseBody,
): string {
  return JSON.stringify(
    UpdateOrgResponseBody$outboundSchema.parse(updateOrgResponseBody),
  );
}

export function updateOrgResponseBodyFromJSON(
  jsonString: string,
): SafeParseResult<UpdateOrgResponseBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => UpdateOrgResponseBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'UpdateOrgResponseBody' from JSON`,
  );
}

/** @internal */
export const UpdateOrgResponse$inboundSchema: z.ZodType<
  UpdateOrgResponse,
  z.ZodTypeDef,
  unknown
> = z.union([
  z.lazy(() => UpdateOrgResponseBody$inboundSchema),
  z.lazy(() => UpdateOrgOrgResponseBody$inboundSchema),
]);

/** @internal */
export type UpdateOrgResponse$Outbound =
  | UpdateOrgResponseBody$Outbound
  | UpdateOrgOrgResponseBody$Outbound;

/** @internal */
export const UpdateOrgResponse$outboundSchema: z.ZodType<
  UpdateOrgResponse$Outbound,
  z.ZodTypeDef,
  UpdateOrgResponse
> = z.union([
  z.lazy(() => UpdateOrgResponseBody$outboundSchema),
  z.lazy(() => UpdateOrgOrgResponseBody$outboundSchema),
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UpdateOrgResponse$ {
  /** @deprecated use `UpdateOrgResponse$inboundSchema` instead. */
  export const inboundSchema = UpdateOrgResponse$inboundSchema;
  /** @deprecated use `UpdateOrgResponse$outboundSchema` instead. */
  export const outboundSchema = UpdateOrgResponse$outboundSchema;
  /** @deprecated use `UpdateOrgResponse$Outbound` instead. */
  export type Outbound = UpdateOrgResponse$Outbound;
}

export function updateOrgResponseToJSON(
  updateOrgResponse: UpdateOrgResponse,
): string {
  return JSON.stringify(
    UpdateOrgResponse$outboundSchema.parse(updateOrgResponse),
  );
}

export function updateOrgResponseFromJSON(
  jsonString: string,
): SafeParseResult<UpdateOrgResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => UpdateOrgResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'UpdateOrgResponse' from JSON`,
  );
}
