/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export const GetOrgInviteServerList = [
  "https://api.withampersand.com/v1",
] as const;

export type GetOrgInviteRequest = {
  orgId: string;
  inviteId: string;
};

/**
 * A Problem Details object (RFC 9457).
 *
 * @remarks
 *
 * Additional properties specific to the problem type may be present.
 */
export type GetOrgInviteOrgResponseBody = {
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
 * The type of entity that the person is invited to.
 */
export const GetOrgInviteParentType = {
  Org: "org",
} as const;
/**
 * The type of entity that the person is invited to.
 */
export type GetOrgInviteParentType = ClosedEnum<typeof GetOrgInviteParentType>;

/**
 * The status of the invite.
 */
export const GetOrgInviteStatus = {
  Pending: "pending",
  Accepted: "accepted",
  Revoked: "revoked",
  Expired: "expired",
} as const;
/**
 * The status of the invite.
 */
export type GetOrgInviteStatus = ClosedEnum<typeof GetOrgInviteStatus>;

/**
 * Invite
 */
export type GetOrgInviteResponseBody = {
  /**
   * The invite ID.
   */
  id: string;
  /**
   * The email address of the person invited.
   */
  invitedEmail: string;
  /**
   * The type of entity that the person is invited to.
   */
  parentType: GetOrgInviteParentType;
  /**
   * The ID of the parent (e.g. org ID).
   */
  parentId: string;
  /**
   * The status of the invite.
   */
  status: GetOrgInviteStatus;
  /**
   * The time the invite was created.
   */
  createTime: Date;
  /**
   * The time the invite was updated.
   */
  updateTime?: Date | undefined;
};

export type GetOrgInviteResponse =
  | GetOrgInviteResponseBody
  | GetOrgInviteOrgResponseBody;

/** @internal */
export const GetOrgInviteRequest$inboundSchema: z.ZodType<
  GetOrgInviteRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  orgId: z.string(),
  inviteId: z.string(),
});

/** @internal */
export type GetOrgInviteRequest$Outbound = {
  orgId: string;
  inviteId: string;
};

/** @internal */
export const GetOrgInviteRequest$outboundSchema: z.ZodType<
  GetOrgInviteRequest$Outbound,
  z.ZodTypeDef,
  GetOrgInviteRequest
> = z.object({
  orgId: z.string(),
  inviteId: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetOrgInviteRequest$ {
  /** @deprecated use `GetOrgInviteRequest$inboundSchema` instead. */
  export const inboundSchema = GetOrgInviteRequest$inboundSchema;
  /** @deprecated use `GetOrgInviteRequest$outboundSchema` instead. */
  export const outboundSchema = GetOrgInviteRequest$outboundSchema;
  /** @deprecated use `GetOrgInviteRequest$Outbound` instead. */
  export type Outbound = GetOrgInviteRequest$Outbound;
}

export function getOrgInviteRequestToJSON(
  getOrgInviteRequest: GetOrgInviteRequest,
): string {
  return JSON.stringify(
    GetOrgInviteRequest$outboundSchema.parse(getOrgInviteRequest),
  );
}

export function getOrgInviteRequestFromJSON(
  jsonString: string,
): SafeParseResult<GetOrgInviteRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetOrgInviteRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetOrgInviteRequest' from JSON`,
  );
}

/** @internal */
export const GetOrgInviteOrgResponseBody$inboundSchema: z.ZodType<
  GetOrgInviteOrgResponseBody,
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
export type GetOrgInviteOrgResponseBody$Outbound = {
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
export const GetOrgInviteOrgResponseBody$outboundSchema: z.ZodType<
  GetOrgInviteOrgResponseBody$Outbound,
  z.ZodTypeDef,
  GetOrgInviteOrgResponseBody
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
export namespace GetOrgInviteOrgResponseBody$ {
  /** @deprecated use `GetOrgInviteOrgResponseBody$inboundSchema` instead. */
  export const inboundSchema = GetOrgInviteOrgResponseBody$inboundSchema;
  /** @deprecated use `GetOrgInviteOrgResponseBody$outboundSchema` instead. */
  export const outboundSchema = GetOrgInviteOrgResponseBody$outboundSchema;
  /** @deprecated use `GetOrgInviteOrgResponseBody$Outbound` instead. */
  export type Outbound = GetOrgInviteOrgResponseBody$Outbound;
}

export function getOrgInviteOrgResponseBodyToJSON(
  getOrgInviteOrgResponseBody: GetOrgInviteOrgResponseBody,
): string {
  return JSON.stringify(
    GetOrgInviteOrgResponseBody$outboundSchema.parse(
      getOrgInviteOrgResponseBody,
    ),
  );
}

export function getOrgInviteOrgResponseBodyFromJSON(
  jsonString: string,
): SafeParseResult<GetOrgInviteOrgResponseBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetOrgInviteOrgResponseBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetOrgInviteOrgResponseBody' from JSON`,
  );
}

/** @internal */
export const GetOrgInviteParentType$inboundSchema: z.ZodNativeEnum<
  typeof GetOrgInviteParentType
> = z.nativeEnum(GetOrgInviteParentType);

/** @internal */
export const GetOrgInviteParentType$outboundSchema: z.ZodNativeEnum<
  typeof GetOrgInviteParentType
> = GetOrgInviteParentType$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetOrgInviteParentType$ {
  /** @deprecated use `GetOrgInviteParentType$inboundSchema` instead. */
  export const inboundSchema = GetOrgInviteParentType$inboundSchema;
  /** @deprecated use `GetOrgInviteParentType$outboundSchema` instead. */
  export const outboundSchema = GetOrgInviteParentType$outboundSchema;
}

/** @internal */
export const GetOrgInviteStatus$inboundSchema: z.ZodNativeEnum<
  typeof GetOrgInviteStatus
> = z.nativeEnum(GetOrgInviteStatus);

/** @internal */
export const GetOrgInviteStatus$outboundSchema: z.ZodNativeEnum<
  typeof GetOrgInviteStatus
> = GetOrgInviteStatus$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetOrgInviteStatus$ {
  /** @deprecated use `GetOrgInviteStatus$inboundSchema` instead. */
  export const inboundSchema = GetOrgInviteStatus$inboundSchema;
  /** @deprecated use `GetOrgInviteStatus$outboundSchema` instead. */
  export const outboundSchema = GetOrgInviteStatus$outboundSchema;
}

/** @internal */
export const GetOrgInviteResponseBody$inboundSchema: z.ZodType<
  GetOrgInviteResponseBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string(),
  invitedEmail: z.string(),
  parentType: GetOrgInviteParentType$inboundSchema,
  parentId: z.string(),
  status: GetOrgInviteStatus$inboundSchema,
  createTime: z.string().datetime({ offset: true }).transform(v => new Date(v)),
  updateTime: z.string().datetime({ offset: true }).transform(v => new Date(v))
    .optional(),
});

/** @internal */
export type GetOrgInviteResponseBody$Outbound = {
  id: string;
  invitedEmail: string;
  parentType: string;
  parentId: string;
  status: string;
  createTime: string;
  updateTime?: string | undefined;
};

/** @internal */
export const GetOrgInviteResponseBody$outboundSchema: z.ZodType<
  GetOrgInviteResponseBody$Outbound,
  z.ZodTypeDef,
  GetOrgInviteResponseBody
> = z.object({
  id: z.string(),
  invitedEmail: z.string(),
  parentType: GetOrgInviteParentType$outboundSchema,
  parentId: z.string(),
  status: GetOrgInviteStatus$outboundSchema,
  createTime: z.date().transform(v => v.toISOString()),
  updateTime: z.date().transform(v => v.toISOString()).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetOrgInviteResponseBody$ {
  /** @deprecated use `GetOrgInviteResponseBody$inboundSchema` instead. */
  export const inboundSchema = GetOrgInviteResponseBody$inboundSchema;
  /** @deprecated use `GetOrgInviteResponseBody$outboundSchema` instead. */
  export const outboundSchema = GetOrgInviteResponseBody$outboundSchema;
  /** @deprecated use `GetOrgInviteResponseBody$Outbound` instead. */
  export type Outbound = GetOrgInviteResponseBody$Outbound;
}

export function getOrgInviteResponseBodyToJSON(
  getOrgInviteResponseBody: GetOrgInviteResponseBody,
): string {
  return JSON.stringify(
    GetOrgInviteResponseBody$outboundSchema.parse(getOrgInviteResponseBody),
  );
}

export function getOrgInviteResponseBodyFromJSON(
  jsonString: string,
): SafeParseResult<GetOrgInviteResponseBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetOrgInviteResponseBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetOrgInviteResponseBody' from JSON`,
  );
}

/** @internal */
export const GetOrgInviteResponse$inboundSchema: z.ZodType<
  GetOrgInviteResponse,
  z.ZodTypeDef,
  unknown
> = z.union([
  z.lazy(() => GetOrgInviteResponseBody$inboundSchema),
  z.lazy(() => GetOrgInviteOrgResponseBody$inboundSchema),
]);

/** @internal */
export type GetOrgInviteResponse$Outbound =
  | GetOrgInviteResponseBody$Outbound
  | GetOrgInviteOrgResponseBody$Outbound;

/** @internal */
export const GetOrgInviteResponse$outboundSchema: z.ZodType<
  GetOrgInviteResponse$Outbound,
  z.ZodTypeDef,
  GetOrgInviteResponse
> = z.union([
  z.lazy(() => GetOrgInviteResponseBody$outboundSchema),
  z.lazy(() => GetOrgInviteOrgResponseBody$outboundSchema),
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetOrgInviteResponse$ {
  /** @deprecated use `GetOrgInviteResponse$inboundSchema` instead. */
  export const inboundSchema = GetOrgInviteResponse$inboundSchema;
  /** @deprecated use `GetOrgInviteResponse$outboundSchema` instead. */
  export const outboundSchema = GetOrgInviteResponse$outboundSchema;
  /** @deprecated use `GetOrgInviteResponse$Outbound` instead. */
  export type Outbound = GetOrgInviteResponse$Outbound;
}

export function getOrgInviteResponseToJSON(
  getOrgInviteResponse: GetOrgInviteResponse,
): string {
  return JSON.stringify(
    GetOrgInviteResponse$outboundSchema.parse(getOrgInviteResponse),
  );
}

export function getOrgInviteResponseFromJSON(
  jsonString: string,
): SafeParseResult<GetOrgInviteResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetOrgInviteResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetOrgInviteResponse' from JSON`,
  );
}
