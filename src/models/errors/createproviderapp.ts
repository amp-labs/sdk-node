/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "./sdkvalidationerror.js";

/**
 * The location of the invalid input
 */
export const CreateProviderAppProviderAppIn = {
  Body: "body",
  Header: "header",
  Path: "path",
  Query: "query",
} as const;
/**
 * The location of the invalid input
 */
export type CreateProviderAppProviderAppIn = ClosedEnum<
  typeof CreateProviderAppProviderAppIn
>;

/**
 * An issue detected during input validation.
 *
 * @remarks
 */
export type CreateProviderAppProviderAppIssues = {
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
  /**
   * The location of the invalid input
   */
  in?: CreateProviderAppProviderAppIn | undefined;
  /**
   * The name of the invalid input
   */
  name?: string | undefined;
  /**
   * The value of the erroneous input
   */
  value?: any | undefined;
};

/**
 * A Problem Details object (RFC 9457).
 *
 * @remarks
 *
 * Additional properties specific to the problem type may be present.
 */
export type CreateProviderAppProviderAppResponseBodyData = {
  /**
   * An absolute URI that identifies the problem type
   */
  type?: string;
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
  issues?: Array<CreateProviderAppProviderAppIssues> | undefined;
};

/**
 * A Problem Details object (RFC 9457).
 *
 * @remarks
 *
 * Additional properties specific to the problem type may be present.
 */
export class CreateProviderAppProviderAppResponseBody extends Error {
  /**
   * An absolute URI that identifies the problem type
   */
  type?: string;
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
  issues?: Array<CreateProviderAppProviderAppIssues> | undefined;

  /** The original data that was passed to this error instance. */
  data$: CreateProviderAppProviderAppResponseBodyData;

  constructor(err: CreateProviderAppProviderAppResponseBodyData) {
    const message = "message" in err && typeof err.message === "string"
      ? err.message
      : `API error occurred: ${JSON.stringify(err)}`;
    super(message);
    this.data$ = err;

    if (err.type != null) this.type = err.type;
    if (err.href != null) this.href = err.href;
    if (err.title != null) this.title = err.title;
    if (err.status != null) this.status = err.status;
    if (err.detail != null) this.detail = err.detail;
    if (err.instance != null) this.instance = err.instance;
    if (err.subsystem != null) this.subsystem = err.subsystem;
    if (err.time != null) this.time = err.time;
    if (err.requestId != null) this.requestId = err.requestId;
    if (err.causes != null) this.causes = err.causes;
    if (err.remedy != null) this.remedy = err.remedy;
    if (err.supportEmail != null) this.supportEmail = err.supportEmail;
    if (err.supportPhone != null) this.supportPhone = err.supportPhone;
    if (err.supportUrl != null) this.supportUrl = err.supportUrl;
    if (err.retryable != null) this.retryable = err.retryable;
    if (err.retryAfter != null) this.retryAfter = err.retryAfter;
    if (err.context != null) this.context = err.context;
    if (err.issues != null) this.issues = err.issues;

    this.name = "CreateProviderAppProviderAppResponseBody";
  }
}

/**
 * The location of the invalid input
 */
export const CreateProviderAppIn = {
  Body: "body",
  Header: "header",
  Path: "path",
  Query: "query",
} as const;
/**
 * The location of the invalid input
 */
export type CreateProviderAppIn = ClosedEnum<typeof CreateProviderAppIn>;

/**
 * An issue detected during input validation.
 *
 * @remarks
 */
export type CreateProviderAppIssues = {
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
  /**
   * The location of the invalid input
   */
  in?: CreateProviderAppIn | undefined;
  /**
   * The name of the invalid input
   */
  name?: string | undefined;
  /**
   * The value of the erroneous input
   */
  value?: any | undefined;
};

/**
 * A Problem Details object (RFC 9457).
 *
 * @remarks
 *
 * Additional properties specific to the problem type may be present.
 */
export type CreateProviderAppResponseBodyData = {
  /**
   * An absolute URI that identifies the problem type
   */
  type?: string;
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
  issues?: Array<CreateProviderAppIssues> | undefined;
};

/**
 * A Problem Details object (RFC 9457).
 *
 * @remarks
 *
 * Additional properties specific to the problem type may be present.
 */
export class CreateProviderAppResponseBody extends Error {
  /**
   * An absolute URI that identifies the problem type
   */
  type?: string;
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
  issues?: Array<CreateProviderAppIssues> | undefined;

  /** The original data that was passed to this error instance. */
  data$: CreateProviderAppResponseBodyData;

  constructor(err: CreateProviderAppResponseBodyData) {
    const message = "message" in err && typeof err.message === "string"
      ? err.message
      : `API error occurred: ${JSON.stringify(err)}`;
    super(message);
    this.data$ = err;

    if (err.type != null) this.type = err.type;
    if (err.href != null) this.href = err.href;
    if (err.title != null) this.title = err.title;
    if (err.status != null) this.status = err.status;
    if (err.detail != null) this.detail = err.detail;
    if (err.instance != null) this.instance = err.instance;
    if (err.subsystem != null) this.subsystem = err.subsystem;
    if (err.time != null) this.time = err.time;
    if (err.requestId != null) this.requestId = err.requestId;
    if (err.causes != null) this.causes = err.causes;
    if (err.remedy != null) this.remedy = err.remedy;
    if (err.supportEmail != null) this.supportEmail = err.supportEmail;
    if (err.supportPhone != null) this.supportPhone = err.supportPhone;
    if (err.supportUrl != null) this.supportUrl = err.supportUrl;
    if (err.retryable != null) this.retryable = err.retryable;
    if (err.retryAfter != null) this.retryAfter = err.retryAfter;
    if (err.context != null) this.context = err.context;
    if (err.issues != null) this.issues = err.issues;

    this.name = "CreateProviderAppResponseBody";
  }
}

/** @internal */
export const CreateProviderAppProviderAppIn$inboundSchema: z.ZodNativeEnum<
  typeof CreateProviderAppProviderAppIn
> = z.nativeEnum(CreateProviderAppProviderAppIn);

/** @internal */
export const CreateProviderAppProviderAppIn$outboundSchema: z.ZodNativeEnum<
  typeof CreateProviderAppProviderAppIn
> = CreateProviderAppProviderAppIn$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateProviderAppProviderAppIn$ {
  /** @deprecated use `CreateProviderAppProviderAppIn$inboundSchema` instead. */
  export const inboundSchema = CreateProviderAppProviderAppIn$inboundSchema;
  /** @deprecated use `CreateProviderAppProviderAppIn$outboundSchema` instead. */
  export const outboundSchema = CreateProviderAppProviderAppIn$outboundSchema;
}

/** @internal */
export const CreateProviderAppProviderAppIssues$inboundSchema: z.ZodType<
  CreateProviderAppProviderAppIssues,
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
  in: CreateProviderAppProviderAppIn$inboundSchema.optional(),
  name: z.string().optional(),
  value: z.any().optional(),
});

/** @internal */
export type CreateProviderAppProviderAppIssues$Outbound = {
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
  in?: string | undefined;
  name?: string | undefined;
  value?: any | undefined;
};

/** @internal */
export const CreateProviderAppProviderAppIssues$outboundSchema: z.ZodType<
  CreateProviderAppProviderAppIssues$Outbound,
  z.ZodTypeDef,
  CreateProviderAppProviderAppIssues
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
  in: CreateProviderAppProviderAppIn$outboundSchema.optional(),
  name: z.string().optional(),
  value: z.any().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateProviderAppProviderAppIssues$ {
  /** @deprecated use `CreateProviderAppProviderAppIssues$inboundSchema` instead. */
  export const inboundSchema = CreateProviderAppProviderAppIssues$inboundSchema;
  /** @deprecated use `CreateProviderAppProviderAppIssues$outboundSchema` instead. */
  export const outboundSchema =
    CreateProviderAppProviderAppIssues$outboundSchema;
  /** @deprecated use `CreateProviderAppProviderAppIssues$Outbound` instead. */
  export type Outbound = CreateProviderAppProviderAppIssues$Outbound;
}

export function createProviderAppProviderAppIssuesToJSON(
  createProviderAppProviderAppIssues: CreateProviderAppProviderAppIssues,
): string {
  return JSON.stringify(
    CreateProviderAppProviderAppIssues$outboundSchema.parse(
      createProviderAppProviderAppIssues,
    ),
  );
}

export function createProviderAppProviderAppIssuesFromJSON(
  jsonString: string,
): SafeParseResult<CreateProviderAppProviderAppIssues, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      CreateProviderAppProviderAppIssues$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CreateProviderAppProviderAppIssues' from JSON`,
  );
}

/** @internal */
export const CreateProviderAppProviderAppResponseBody$inboundSchema: z.ZodType<
  CreateProviderAppProviderAppResponseBody,
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
  issues: z.array(
    z.lazy(() => CreateProviderAppProviderAppIssues$inboundSchema),
  ).optional(),
})
  .transform((v) => {
    return new CreateProviderAppProviderAppResponseBody(v);
  });

/** @internal */
export type CreateProviderAppProviderAppResponseBody$Outbound = {
  type?: string;
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
  issues?: Array<CreateProviderAppProviderAppIssues$Outbound> | undefined;
};

/** @internal */
export const CreateProviderAppProviderAppResponseBody$outboundSchema: z.ZodType<
  CreateProviderAppProviderAppResponseBody$Outbound,
  z.ZodTypeDef,
  CreateProviderAppProviderAppResponseBody
> = z.instanceof(CreateProviderAppProviderAppResponseBody)
  .transform(v => v.data$)
  .pipe(z.object({
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
    issues: z.array(
      z.lazy(() => CreateProviderAppProviderAppIssues$outboundSchema),
    ).optional(),
  }));

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateProviderAppProviderAppResponseBody$ {
  /** @deprecated use `CreateProviderAppProviderAppResponseBody$inboundSchema` instead. */
  export const inboundSchema =
    CreateProviderAppProviderAppResponseBody$inboundSchema;
  /** @deprecated use `CreateProviderAppProviderAppResponseBody$outboundSchema` instead. */
  export const outboundSchema =
    CreateProviderAppProviderAppResponseBody$outboundSchema;
  /** @deprecated use `CreateProviderAppProviderAppResponseBody$Outbound` instead. */
  export type Outbound = CreateProviderAppProviderAppResponseBody$Outbound;
}

/** @internal */
export const CreateProviderAppIn$inboundSchema: z.ZodNativeEnum<
  typeof CreateProviderAppIn
> = z.nativeEnum(CreateProviderAppIn);

/** @internal */
export const CreateProviderAppIn$outboundSchema: z.ZodNativeEnum<
  typeof CreateProviderAppIn
> = CreateProviderAppIn$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateProviderAppIn$ {
  /** @deprecated use `CreateProviderAppIn$inboundSchema` instead. */
  export const inboundSchema = CreateProviderAppIn$inboundSchema;
  /** @deprecated use `CreateProviderAppIn$outboundSchema` instead. */
  export const outboundSchema = CreateProviderAppIn$outboundSchema;
}

/** @internal */
export const CreateProviderAppIssues$inboundSchema: z.ZodType<
  CreateProviderAppIssues,
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
  in: CreateProviderAppIn$inboundSchema.optional(),
  name: z.string().optional(),
  value: z.any().optional(),
});

/** @internal */
export type CreateProviderAppIssues$Outbound = {
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
  in?: string | undefined;
  name?: string | undefined;
  value?: any | undefined;
};

/** @internal */
export const CreateProviderAppIssues$outboundSchema: z.ZodType<
  CreateProviderAppIssues$Outbound,
  z.ZodTypeDef,
  CreateProviderAppIssues
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
  in: CreateProviderAppIn$outboundSchema.optional(),
  name: z.string().optional(),
  value: z.any().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateProviderAppIssues$ {
  /** @deprecated use `CreateProviderAppIssues$inboundSchema` instead. */
  export const inboundSchema = CreateProviderAppIssues$inboundSchema;
  /** @deprecated use `CreateProviderAppIssues$outboundSchema` instead. */
  export const outboundSchema = CreateProviderAppIssues$outboundSchema;
  /** @deprecated use `CreateProviderAppIssues$Outbound` instead. */
  export type Outbound = CreateProviderAppIssues$Outbound;
}

export function createProviderAppIssuesToJSON(
  createProviderAppIssues: CreateProviderAppIssues,
): string {
  return JSON.stringify(
    CreateProviderAppIssues$outboundSchema.parse(createProviderAppIssues),
  );
}

export function createProviderAppIssuesFromJSON(
  jsonString: string,
): SafeParseResult<CreateProviderAppIssues, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CreateProviderAppIssues$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CreateProviderAppIssues' from JSON`,
  );
}

/** @internal */
export const CreateProviderAppResponseBody$inboundSchema: z.ZodType<
  CreateProviderAppResponseBody,
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
  issues: z.array(z.lazy(() => CreateProviderAppIssues$inboundSchema))
    .optional(),
})
  .transform((v) => {
    return new CreateProviderAppResponseBody(v);
  });

/** @internal */
export type CreateProviderAppResponseBody$Outbound = {
  type?: string;
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
  issues?: Array<CreateProviderAppIssues$Outbound> | undefined;
};

/** @internal */
export const CreateProviderAppResponseBody$outboundSchema: z.ZodType<
  CreateProviderAppResponseBody$Outbound,
  z.ZodTypeDef,
  CreateProviderAppResponseBody
> = z.instanceof(CreateProviderAppResponseBody)
  .transform(v => v.data$)
  .pipe(z.object({
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
    issues: z.array(z.lazy(() => CreateProviderAppIssues$outboundSchema))
      .optional(),
  }));

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateProviderAppResponseBody$ {
  /** @deprecated use `CreateProviderAppResponseBody$inboundSchema` instead. */
  export const inboundSchema = CreateProviderAppResponseBody$inboundSchema;
  /** @deprecated use `CreateProviderAppResponseBody$outboundSchema` instead. */
  export const outboundSchema = CreateProviderAppResponseBody$outboundSchema;
  /** @deprecated use `CreateProviderAppResponseBody$Outbound` instead. */
  export type Outbound = CreateProviderAppResponseBody$Outbound;
}
