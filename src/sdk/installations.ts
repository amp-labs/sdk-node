/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import {
  CreateAcceptEnum,
  installationsCreate,
} from "../funcs/installationsCreate.js";
import { installationsDelete } from "../funcs/installationsDelete.js";
import { GetAcceptEnum, installationsGet } from "../funcs/installationsGet.js";
import {
  installationsList,
  ListAcceptEnum,
} from "../funcs/installationsList.js";
import {
  installationsUpdate,
  UpdateAcceptEnum,
} from "../funcs/installationsUpdate.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";

export { ListAcceptEnum } from "../funcs/installationsList.js";

export { CreateAcceptEnum } from "../funcs/installationsCreate.js";

export { GetAcceptEnum } from "../funcs/installationsGet.js";

export { UpdateAcceptEnum } from "../funcs/installationsUpdate.js";

export class Installations extends ClientSDK {
  /**
   * List installations
   */
  async list(
    request: operations.ListInstallationsRequest,
    options?: RequestOptions & { acceptHeaderOverride?: ListAcceptEnum },
  ): Promise<operations.ListInstallationsResponse> {
    return unwrapAsync(installationsList(
      this,
      request,
      options,
    ));
  }

  /**
   * Create a new installation
   */
  async create(
    request: operations.CreateInstallationRequest,
    options?: RequestOptions & { acceptHeaderOverride?: CreateAcceptEnum },
  ): Promise<operations.CreateInstallationResponse> {
    return unwrapAsync(installationsCreate(
      this,
      request,
      options,
    ));
  }

  /**
   * Get an installation
   */
  async get(
    request: operations.GetInstallationRequest,
    options?: RequestOptions & { acceptHeaderOverride?: GetAcceptEnum },
  ): Promise<operations.GetInstallationResponse> {
    return unwrapAsync(installationsGet(
      this,
      request,
      options,
    ));
  }

  /**
   * Delete an installation
   */
  async delete(
    request: operations.DeleteInstallationRequest,
    options?: RequestOptions,
  ): Promise<operations.DeleteInstallationAPIProblem | undefined> {
    return unwrapAsync(installationsDelete(
      this,
      request,
      options,
    ));
  }

  /**
   * Update an installation
   */
  async update(
    request: operations.UpdateInstallationRequest,
    options?: RequestOptions & { acceptHeaderOverride?: UpdateAcceptEnum },
  ): Promise<operations.UpdateInstallationResponse> {
    return unwrapAsync(installationsUpdate(
      this,
      request,
      options,
    ));
  }
}
