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
export const CreateConsumerIn = {
  Body: "body",
  Header: "header",
  Path: "path",
  Query: "query",
} as const;
/**
 * The location of the invalid input
 */
export type CreateConsumerIn = ClosedEnum<typeof CreateConsumerIn>;

/**
 * An issue detected during input validation.
 *
 * @remarks
 */
export type CreateConsumerInputValidationIssue = {
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
  in?: CreateConsumerIn | undefined;
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
export type CreateConsumerInputValidationProblemData = {
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
  issues?: Array<CreateConsumerInputValidationIssue> | undefined;
};

/**
 * A Problem Details object (RFC 9457).
 *
 * @remarks
 *
 * Additional properties specific to the problem type may be present.
 */
export class CreateConsumerInputValidationProblem extends Error {
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
  issues?: Array<CreateConsumerInputValidationIssue> | undefined;

  /** The original data that was passed to this error instance. */
  data$: CreateConsumerInputValidationProblemData;

  constructor(err: CreateConsumerInputValidationProblemData) {
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

    this.name = "CreateConsumerInputValidationProblem";
  }
}

/** @internal */
export const CreateConsumerIn$inboundSchema: z.ZodNativeEnum<
  typeof CreateConsumerIn
> = z.nativeEnum(CreateConsumerIn);

/** @internal */
export const CreateConsumerIn$outboundSchema: z.ZodNativeEnum<
  typeof CreateConsumerIn
> = CreateConsumerIn$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateConsumerIn$ {
  /** @deprecated use `CreateConsumerIn$inboundSchema` instead. */
  export const inboundSchema = CreateConsumerIn$inboundSchema;
  /** @deprecated use `CreateConsumerIn$outboundSchema` instead. */
  export const outboundSchema = CreateConsumerIn$outboundSchema;
}

/** @internal */
export const CreateConsumerInputValidationIssue$inboundSchema: z.ZodType<
  CreateConsumerInputValidationIssue,
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
  in: CreateConsumerIn$inboundSchema.optional(),
  name: z.string().optional(),
  value: z.any().optional(),
});

/** @internal */
export type CreateConsumerInputValidationIssue$Outbound = {
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
export const CreateConsumerInputValidationIssue$outboundSchema: z.ZodType<
  CreateConsumerInputValidationIssue$Outbound,
  z.ZodTypeDef,
  CreateConsumerInputValidationIssue
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
  in: CreateConsumerIn$outboundSchema.optional(),
  name: z.string().optional(),
  value: z.any().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateConsumerInputValidationIssue$ {
  /** @deprecated use `CreateConsumerInputValidationIssue$inboundSchema` instead. */
  export const inboundSchema = CreateConsumerInputValidationIssue$inboundSchema;
  /** @deprecated use `CreateConsumerInputValidationIssue$outboundSchema` instead. */
  export const outboundSchema =
    CreateConsumerInputValidationIssue$outboundSchema;
  /** @deprecated use `CreateConsumerInputValidationIssue$Outbound` instead. */
  export type Outbound = CreateConsumerInputValidationIssue$Outbound;
}

export function createConsumerInputValidationIssueToJSON(
  createConsumerInputValidationIssue: CreateConsumerInputValidationIssue,
): string {
  return JSON.stringify(
    CreateConsumerInputValidationIssue$outboundSchema.parse(
      createConsumerInputValidationIssue,
    ),
  );
}

export function createConsumerInputValidationIssueFromJSON(
  jsonString: string,
): SafeParseResult<CreateConsumerInputValidationIssue, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      CreateConsumerInputValidationIssue$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CreateConsumerInputValidationIssue' from JSON`,
  );
}

/** @internal */
export const CreateConsumerInputValidationProblem$inboundSchema: z.ZodType<
  CreateConsumerInputValidationProblem,
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
    z.lazy(() => CreateConsumerInputValidationIssue$inboundSchema),
  ).optional(),
})
  .transform((v) => {
    return new CreateConsumerInputValidationProblem(v);
  });

/** @internal */
export type CreateConsumerInputValidationProblem$Outbound = {
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
  issues?: Array<CreateConsumerInputValidationIssue$Outbound> | undefined;
};

/** @internal */
export const CreateConsumerInputValidationProblem$outboundSchema: z.ZodType<
  CreateConsumerInputValidationProblem$Outbound,
  z.ZodTypeDef,
  CreateConsumerInputValidationProblem
> = z.instanceof(CreateConsumerInputValidationProblem)
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
      z.lazy(() => CreateConsumerInputValidationIssue$outboundSchema),
    ).optional(),
  }));

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateConsumerInputValidationProblem$ {
  /** @deprecated use `CreateConsumerInputValidationProblem$inboundSchema` instead. */
  export const inboundSchema =
    CreateConsumerInputValidationProblem$inboundSchema;
  /** @deprecated use `CreateConsumerInputValidationProblem$outboundSchema` instead. */
  export const outboundSchema =
    CreateConsumerInputValidationProblem$outboundSchema;
  /** @deprecated use `CreateConsumerInputValidationProblem$Outbound` instead. */
  export type Outbound = CreateConsumerInputValidationProblem$Outbound;
}
