/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { consumerCreateConsumer } from "../funcs/consumerCreateConsumer.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";

export class Consumer extends ClientSDK {
  /**
   * Create a new consumer
   */
  async createConsumer(
    request: operations.CreateConsumerRequest,
    options?: RequestOptions,
  ): Promise<operations.CreateConsumerResponseBody | undefined> {
    return unwrapAsync(consumerCreateConsumer(
      this,
      request,
      options,
    ));
  }
}
