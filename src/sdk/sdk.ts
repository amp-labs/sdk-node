/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { ClientSDK } from "../lib/sdks.js";
import { Connections } from "./connections.js";
import { Consumers } from "./consumers.js";
import { Destinations } from "./destinations.js";
import { Groups } from "./groups.js";
import { Installations } from "./installations.js";
import { Integrations } from "./integrations.js";
import { Oauth } from "./oauth.js";
import { ObjectsAndFields } from "./objectsandfields.js";
import { Operations } from "./operations.js";
import { Projects } from "./projects.js";
import { ProviderApps } from "./providerapps.js";
import { Providers } from "./providers.js";
import { Read } from "./read.js";
import { Revisions } from "./revisions.js";
import { UploadUrls } from "./uploadurls.js";

export class SDK extends ClientSDK {
  private _read?: Read;
  get read(): Read {
    return (this._read ??= new Read(this._options));
  }

  private _oauth?: Oauth;
  get oauth(): Oauth {
    return (this._oauth ??= new Oauth(this._options));
  }

  private _projects?: Projects;
  get projects(): Projects {
    return (this._projects ??= new Projects(this._options));
  }

  private _providerApps?: ProviderApps;
  get providerApps(): ProviderApps {
    return (this._providerApps ??= new ProviderApps(this._options));
  }

  private _integrations?: Integrations;
  get integrations(): Integrations {
    return (this._integrations ??= new Integrations(this._options));
  }

  private _revisions?: Revisions;
  get revisions(): Revisions {
    return (this._revisions ??= new Revisions(this._options));
  }

  private _installations?: Installations;
  get installations(): Installations {
    return (this._installations ??= new Installations(this._options));
  }

  private _objectsAndFields?: ObjectsAndFields;
  get objectsAndFields(): ObjectsAndFields {
    return (this._objectsAndFields ??= new ObjectsAndFields(this._options));
  }

  private _operations?: Operations;
  get operations(): Operations {
    return (this._operations ??= new Operations(this._options));
  }

  private _providers?: Providers;
  get providers(): Providers {
    return (this._providers ??= new Providers(this._options));
  }

  private _connections?: Connections;
  get connections(): Connections {
    return (this._connections ??= new Connections(this._options));
  }

  private _groups?: Groups;
  get groups(): Groups {
    return (this._groups ??= new Groups(this._options));
  }

  private _consumers?: Consumers;
  get consumers(): Consumers {
    return (this._consumers ??= new Consumers(this._options));
  }

  private _destinations?: Destinations;
  get destinations(): Destinations {
    return (this._destinations ??= new Destinations(this._options));
  }

  private _uploadUrls?: UploadUrls;
  get uploadUrls(): UploadUrls {
    return (this._uploadUrls ??= new UploadUrls(this._options));
  }
}
