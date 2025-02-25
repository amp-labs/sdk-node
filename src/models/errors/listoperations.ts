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
export const ListOperationsOperationsIn = {
  Body: "body",
  Header: "header",
  Path: "path",
  Query: "query",
} as const;
/**
 * The location of the invalid input
 */
export type ListOperationsOperationsIn = ClosedEnum<
  typeof ListOperationsOperationsIn
>;

/**
 * An issue detected during input validation.
 *
 * @remarks
 */
export type ListOperationsOperationsInputValidationIssue = {
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
  in?: ListOperationsOperationsIn | undefined;
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
export type ListOperationsOperationsInputValidationProblemData = {
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
  issues?: Array<ListOperationsOperationsInputValidationIssue> | undefined;
};

/**
 * A Problem Details object (RFC 9457).
 *
 * @remarks
 *
 * Additional properties specific to the problem type may be present.
 */
export class ListOperationsOperationsInputValidationProblem extends Error {
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
  issues?: Array<ListOperationsOperationsInputValidationIssue> | undefined;

  /** The original data that was passed to this error instance. */
  data$: ListOperationsOperationsInputValidationProblemData;

  constructor(err: ListOperationsOperationsInputValidationProblemData) {
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

    this.name = "ListOperationsOperationsInputValidationProblem";
  }
}

/**
 * The location of the invalid input
 */
export const ListOperationsIn = {
  Body: "body",
  Header: "header",
  Path: "path",
  Query: "query",
} as const;
/**
 * The location of the invalid input
 */
export type ListOperationsIn = ClosedEnum<typeof ListOperationsIn>;

/**
 * An issue detected during input validation.
 *
 * @remarks
 */
export type ListOperationsInputValidationIssue = {
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
  in?: ListOperationsIn | undefined;
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
export type ListOperationsInputValidationProblemData = {
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
  issues?: Array<ListOperationsInputValidationIssue> | undefined;
};

/**
 * A Problem Details object (RFC 9457).
 *
 * @remarks
 *
 * Additional properties specific to the problem type may be present.
 */
export class ListOperationsInputValidationProblem extends Error {
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
  issues?: Array<ListOperationsInputValidationIssue> | undefined;

  /** The original data that was passed to this error instance. */
  data$: ListOperationsInputValidationProblemData;

  constructor(err: ListOperationsInputValidationProblemData) {
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

    this.name = "ListOperationsInputValidationProblem";
  }
}

/** @internal */
export const ListOperationsOperationsIn$inboundSchema: z.ZodNativeEnum<
  typeof ListOperationsOperationsIn
> = z.nativeEnum(ListOperationsOperationsIn);

/** @internal */
export const ListOperationsOperationsIn$outboundSchema: z.ZodNativeEnum<
  typeof ListOperationsOperationsIn
> = ListOperationsOperationsIn$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListOperationsOperationsIn$ {
  /** @deprecated use `ListOperationsOperationsIn$inboundSchema` instead. */
  export const inboundSchema = ListOperationsOperationsIn$inboundSchema;
  /** @deprecated use `ListOperationsOperationsIn$outboundSchema` instead. */
  export const outboundSchema = ListOperationsOperationsIn$outboundSchema;
}

/** @internal */
export const ListOperationsOperationsInputValidationIssue$inboundSchema:
  z.ZodType<
    ListOperationsOperationsInputValidationIssue,
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
    retryAfter: z.string().datetime({ offset: true }).transform(v =>
      new Date(v)
    ).optional(),
    context: z.record(z.any()).optional(),
    in: ListOperationsOperationsIn$inboundSchema.optional(),
    name: z.string().optional(),
    value: z.any().optional(),
  });

/** @internal */
export type ListOperationsOperationsInputValidationIssue$Outbound = {
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
export const ListOperationsOperationsInputValidationIssue$outboundSchema:
  z.ZodType<
    ListOperationsOperationsInputValidationIssue$Outbound,
    z.ZodTypeDef,
    ListOperationsOperationsInputValidationIssue
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
    in: ListOperationsOperationsIn$outboundSchema.optional(),
    name: z.string().optional(),
    value: z.any().optional(),
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListOperationsOperationsInputValidationIssue$ {
  /** @deprecated use `ListOperationsOperationsInputValidationIssue$inboundSchema` instead. */
  export const inboundSchema =
    ListOperationsOperationsInputValidationIssue$inboundSchema;
  /** @deprecated use `ListOperationsOperationsInputValidationIssue$outboundSchema` instead. */
  export const outboundSchema =
    ListOperationsOperationsInputValidationIssue$outboundSchema;
  /** @deprecated use `ListOperationsOperationsInputValidationIssue$Outbound` instead. */
  export type Outbound = ListOperationsOperationsInputValidationIssue$Outbound;
}

export function listOperationsOperationsInputValidationIssueToJSON(
  listOperationsOperationsInputValidationIssue:
    ListOperationsOperationsInputValidationIssue,
): string {
  return JSON.stringify(
    ListOperationsOperationsInputValidationIssue$outboundSchema.parse(
      listOperationsOperationsInputValidationIssue,
    ),
  );
}

export function listOperationsOperationsInputValidationIssueFromJSON(
  jsonString: string,
): SafeParseResult<
  ListOperationsOperationsInputValidationIssue,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      ListOperationsOperationsInputValidationIssue$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'ListOperationsOperationsInputValidationIssue' from JSON`,
  );
}

/** @internal */
export const ListOperationsOperationsInputValidationProblem$inboundSchema:
  z.ZodType<
    ListOperationsOperationsInputValidationProblem,
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
    retryAfter: z.string().datetime({ offset: true }).transform(v =>
      new Date(v)
    ).optional(),
    context: z.record(z.any()).optional(),
    issues: z.array(
      z.lazy(() => ListOperationsOperationsInputValidationIssue$inboundSchema),
    ).optional(),
  })
    .transform((v) => {
      return new ListOperationsOperationsInputValidationProblem(v);
    });

/** @internal */
export type ListOperationsOperationsInputValidationProblem$Outbound = {
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
  issues?:
    | Array<ListOperationsOperationsInputValidationIssue$Outbound>
    | undefined;
};

/** @internal */
export const ListOperationsOperationsInputValidationProblem$outboundSchema:
  z.ZodType<
    ListOperationsOperationsInputValidationProblem$Outbound,
    z.ZodTypeDef,
    ListOperationsOperationsInputValidationProblem
  > = z.instanceof(ListOperationsOperationsInputValidationProblem)
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
        z.lazy(() =>
          ListOperationsOperationsInputValidationIssue$outboundSchema
        ),
      ).optional(),
    }));

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListOperationsOperationsInputValidationProblem$ {
  /** @deprecated use `ListOperationsOperationsInputValidationProblem$inboundSchema` instead. */
  export const inboundSchema =
    ListOperationsOperationsInputValidationProblem$inboundSchema;
  /** @deprecated use `ListOperationsOperationsInputValidationProblem$outboundSchema` instead. */
  export const outboundSchema =
    ListOperationsOperationsInputValidationProblem$outboundSchema;
  /** @deprecated use `ListOperationsOperationsInputValidationProblem$Outbound` instead. */
  export type Outbound =
    ListOperationsOperationsInputValidationProblem$Outbound;
}

/** @internal */
export const ListOperationsIn$inboundSchema: z.ZodNativeEnum<
  typeof ListOperationsIn
> = z.nativeEnum(ListOperationsIn);

/** @internal */
export const ListOperationsIn$outboundSchema: z.ZodNativeEnum<
  typeof ListOperationsIn
> = ListOperationsIn$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListOperationsIn$ {
  /** @deprecated use `ListOperationsIn$inboundSchema` instead. */
  export const inboundSchema = ListOperationsIn$inboundSchema;
  /** @deprecated use `ListOperationsIn$outboundSchema` instead. */
  export const outboundSchema = ListOperationsIn$outboundSchema;
}

/** @internal */
export const ListOperationsInputValidationIssue$inboundSchema: z.ZodType<
  ListOperationsInputValidationIssue,
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
  in: ListOperationsIn$inboundSchema.optional(),
  name: z.string().optional(),
  value: z.any().optional(),
});

/** @internal */
export type ListOperationsInputValidationIssue$Outbound = {
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
export const ListOperationsInputValidationIssue$outboundSchema: z.ZodType<
  ListOperationsInputValidationIssue$Outbound,
  z.ZodTypeDef,
  ListOperationsInputValidationIssue
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
  in: ListOperationsIn$outboundSchema.optional(),
  name: z.string().optional(),
  value: z.any().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListOperationsInputValidationIssue$ {
  /** @deprecated use `ListOperationsInputValidationIssue$inboundSchema` instead. */
  export const inboundSchema = ListOperationsInputValidationIssue$inboundSchema;
  /** @deprecated use `ListOperationsInputValidationIssue$outboundSchema` instead. */
  export const outboundSchema =
    ListOperationsInputValidationIssue$outboundSchema;
  /** @deprecated use `ListOperationsInputValidationIssue$Outbound` instead. */
  export type Outbound = ListOperationsInputValidationIssue$Outbound;
}

export function listOperationsInputValidationIssueToJSON(
  listOperationsInputValidationIssue: ListOperationsInputValidationIssue,
): string {
  return JSON.stringify(
    ListOperationsInputValidationIssue$outboundSchema.parse(
      listOperationsInputValidationIssue,
    ),
  );
}

export function listOperationsInputValidationIssueFromJSON(
  jsonString: string,
): SafeParseResult<ListOperationsInputValidationIssue, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      ListOperationsInputValidationIssue$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ListOperationsInputValidationIssue' from JSON`,
  );
}

/** @internal */
export const ListOperationsInputValidationProblem$inboundSchema: z.ZodType<
  ListOperationsInputValidationProblem,
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
    z.lazy(() => ListOperationsInputValidationIssue$inboundSchema),
  ).optional(),
})
  .transform((v) => {
    return new ListOperationsInputValidationProblem(v);
  });

/** @internal */
export type ListOperationsInputValidationProblem$Outbound = {
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
  issues?: Array<ListOperationsInputValidationIssue$Outbound> | undefined;
};

/** @internal */
export const ListOperationsInputValidationProblem$outboundSchema: z.ZodType<
  ListOperationsInputValidationProblem$Outbound,
  z.ZodTypeDef,
  ListOperationsInputValidationProblem
> = z.instanceof(ListOperationsInputValidationProblem)
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
      z.lazy(() => ListOperationsInputValidationIssue$outboundSchema),
    ).optional(),
  }));

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListOperationsInputValidationProblem$ {
  /** @deprecated use `ListOperationsInputValidationProblem$inboundSchema` instead. */
  export const inboundSchema =
    ListOperationsInputValidationProblem$inboundSchema;
  /** @deprecated use `ListOperationsInputValidationProblem$outboundSchema` instead. */
  export const outboundSchema =
    ListOperationsInputValidationProblem$outboundSchema;
  /** @deprecated use `ListOperationsInputValidationProblem$Outbound` instead. */
  export type Outbound = ListOperationsInputValidationProblem$Outbound;
}
