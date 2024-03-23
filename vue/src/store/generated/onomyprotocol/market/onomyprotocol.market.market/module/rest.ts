/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export interface denomoneyAsset {
  active?: boolean;
  owner?: string;
  assetType?: string;

  /** @format uint64 */
  uid?: string;
}

export interface denomoneyBurnings {
  denom?: string;
  amount?: string;
}

export interface denomoneyDrop {
  /** @format uint64 */
  uid?: string;
  owner?: string;
  pair?: string;
  drops?: string;
  sum?: string;
  active?: boolean;
  rate1?: string[];

  /** @format uint64 */
  prev1?: string;

  /** @format uint64 */
  next1?: string;
  rate2?: string[];

  /** @format uint64 */
  prev2?: string;

  /** @format uint64 */
  next2?: string;
}

export interface denomoneyMember {
  pair?: string;
  denomA?: string;
  denomB?: string;
  balance?: string;
  previous?: string;

  /** @format uint64 */
  limit?: string;

  /** @format uint64 */
  stop?: string;

  /** @format uint64 */
  protect?: string;
}

export type denomoneyMsgCancelOrderResponse = object;

export type denomoneyMsgCreateDropResponse = object;

export type denomoneyMsgCreateOrderResponse = object;

export type denomoneyMsgCreatePoolResponse = object;

export type denomoneyMsgdenomoneyOrderResponse = object;

export type denomoneyMsgRedeemDropResponse = object;

export interface denomoneyOrder {
  /** @format uint64 */
  uid?: string;
  owner?: string;
  active?: boolean;
  orderType?: string;
  denomAsk?: string;
  denomBid?: string;
  amount?: string;
  rate?: string[];

  /** @format uint64 */
  prev?: string;

  /** @format uint64 */
  next?: string;
}

export interface denomoneyOrderResponse {
  /** @format uint64 */
  uid?: string;
  owner?: string;
  active?: boolean;
  orderType?: string;
  denomAsk?: string;
  denomBid?: string;
  amount?: string;
  rate?: string[];

  /** @format uint64 */
  prev?: string;

  /** @format uint64 */
  next?: string;
}

/**
 * Params defines the parameters for the module.
 */
export interface denomoneyParams {
  earn_rate?: string[];
  burn_rate?: string[];
}

export interface denomoneyPool {
  pair?: string;
  denom1?: string;
  denom2?: string;
  leader?: string;
  drops?: string;
}

export interface denomoneyQueryAllAssetResponse {
  asset?: denomoneyAsset[];

  /**
   * PageResponse is to be embedded in gRPC response messages where the
   * corresponding request message has used PageRequest.
   *
   *  message SomeResponse {
   *          repeated Bar results = 1;
   *          PageResponse page = 2;
   *  }
   */
  pagination?: V1Beta1PageResponse;
}

export interface denomoneyQueryAllBurningsResponse {
  burnings?: denomoneyBurnings[];

  /**
   * PageResponse is to be embedded in gRPC response messages where the
   * corresponding request message has used PageRequest.
   *
   *  message SomeResponse {
   *          repeated Bar results = 1;
   *          PageResponse page = 2;
   *  }
   */
  pagination?: V1Beta1PageResponse;
}

export interface denomoneyQueryDropsResponse {
  drop?: denomoneyDrop[];

  /**
   * PageResponse is to be embedded in gRPC response messages where the
   * corresponding request message has used PageRequest.
   *
   *  message SomeResponse {
   *          repeated Bar results = 1;
   *          PageResponse page = 2;
   *  }
   */
  pagination?: V1Beta1PageResponse;
}

export interface denomoneyQueryAllMemberResponse {
  member?: denomoneyMember[];

  /**
   * PageResponse is to be embedded in gRPC response messages where the
   * corresponding request message has used PageRequest.
   *
   *  message SomeResponse {
   *          repeated Bar results = 1;
   *          PageResponse page = 2;
   *  }
   */
  pagination?: V1Beta1PageResponse;
}

export interface denomoneyQueryOrdersResponse {
  order?: denomoneyOrder[];

  /**
   * PageResponse is to be embedded in gRPC response messages where the
   * corresponding request message has used PageRequest.
   *
   *  message SomeResponse {
   *          repeated Bar results = 1;
   *          PageResponse page = 2;
   *  }
   */
  pagination?: V1Beta1PageResponse;
}

export interface denomoneyQueryAllPoolResponse {
  pool?: denomoneyPool[];

  /**
   * PageResponse is to be embedded in gRPC response messages where the
   * corresponding request message has used PageRequest.
   *
   *  message SomeResponse {
   *          repeated Bar results = 1;
   *          PageResponse page = 2;
   *  }
   */
  pagination?: V1Beta1PageResponse;
}

export interface denomoneyQueryGetAssetResponse {
  asset?: denomoneyAsset;
}

export interface denomoneyQueryBookResponse {
  book?: denomoneyOrderResponse[];
}

export interface denomoneyQueryGetBurningsResponse {
  burnings?: denomoneyBurnings;
}

export interface denomoneyQueryDropResponse {
  drop?: denomoneyDrop;
}

export interface denomoneyQueryGetMemberResponse {
  member?: denomoneyMember;
}

export interface denomoneyQueryOrderResponse {
  order?: denomoneyOrder;
}

export interface denomoneyQueryGetPoolResponse {
  pool?: denomoneyPool;
}

/**
 * QueryParamsResponse is response type for the Query/Params RPC method.
 */
export interface denomoneyQueryParamsResponse {
  /** params holds all the parameters of this module. */
  params?: denomoneyParams;
}

export interface ProtobufAny {
  "@type"?: string;
}

export interface RpcStatus {
  /** @format int32 */
  code?: number;
  message?: string;
  details?: ProtobufAny[];
}

/**
* message SomeRequest {
         Foo some_parameter = 1;
         PageRequest pagination = 2;
 }
*/
export interface V1Beta1PageRequest {
  /**
   * key is a value returned in PageResponse.next_key to begin
   * querying the next page most efficiently. Only one of offset or key
   * should be set.
   * @format byte
   */
  key?: string;

  /**
   * offset is a numeric offset that can be used when key is unavailable.
   * It is less efficient than using key. Only one of offset or key should
   * be set.
   * @format uint64
   */
  offset?: string;

  /**
   * limit is the total number of results to be returned in the result page.
   * If left empty it will default to a value to be set by each app.
   * @format uint64
   */
  limit?: string;

  /**
   * count_total is set to true  to indicate that the result set should include
   * a count of the total number of items available for pagination in UIs.
   * count_total is only respected when offset is used. It is ignored when key
   * is set.
   */
  count_total?: boolean;

  /**
   * reverse is set to true if results are to be returned in the descending order.
   *
   * Since: cosmos-sdk 0.43
   */
  reverse?: boolean;
}

/**
* PageResponse is to be embedded in gRPC response messages where the
corresponding request message has used PageRequest.

 message SomeResponse {
         repeated Bar results = 1;
         PageResponse page = 2;
 }
*/
export interface V1Beta1PageResponse {
  /** @format byte */
  next_key?: string;

  /** @format uint64 */
  total?: string;
}

export type QueryParamsType = Record<string | number, any>;
export type ResponseFormat = keyof Omit<Body, "body" | "bodyUsed">;

export interface FullRequestParams extends Omit<RequestInit, "body"> {
  /** set parameter to `true` for call `securityWorker` for this request */
  secure?: boolean;
  /** request path */
  path: string;
  /** content type of request body */
  type?: ContentType;
  /** query params */
  query?: QueryParamsType;
  /** format of response (i.e. response.json() -> format: "json") */
  format?: keyof Omit<Body, "body" | "bodyUsed">;
  /** request body */
  body?: unknown;
  /** base url */
  baseUrl?: string;
  /** request cancellation token */
  cancelToken?: CancelToken;
}

export type RequestParams = Omit<FullRequestParams, "body" | "method" | "query" | "path">;

export interface ApiConfig<SecurityDataType = unknown> {
  baseUrl?: string;
  baseApiParams?: Omit<RequestParams, "baseUrl" | "cancelToken" | "signal">;
  securityWorker?: (securityData: SecurityDataType) => RequestParams | void;
}

export interface HttpResponse<D extends unknown, E extends unknown = unknown> extends Response {
  data: D;
  error: E;
}

type CancelToken = Symbol | string | number;

export enum ContentType {
  Json = "application/json",
  FormData = "multipart/form-data",
  UrlEncoded = "application/x-www-form-urlencoded",
}

export class HttpClient<SecurityDataType = unknown> {
  public baseUrl: string = "";
  private securityData: SecurityDataType = null as any;
  private securityWorker: null | ApiConfig<SecurityDataType>["securityWorker"] = null;
  private abortControllers = new Map<CancelToken, AbortController>();

  private baseApiParams: RequestParams = {
    credentials: "same-origin",
    headers: {},
    redirect: "follow",
    referrerPolicy: "no-referrer",
  };

  constructor(apiConfig: ApiConfig<SecurityDataType> = {}) {
    Object.assign(this, apiConfig);
  }

  public setSecurityData = (data: SecurityDataType) => {
    this.securityData = data;
  };

  private addQueryParam(query: QueryParamsType, key: string) {
    const value = query[key];

    return (
      encodeURIComponent(key) +
      "=" +
      encodeURIComponent(Array.isArray(value) ? value.join(",") : typeof value === "number" ? value : `${value}`)
    );
  }

  protected toQueryString(rawQuery?: QueryParamsType): string {
    const query = rawQuery || {};
    const keys = Object.keys(query).filter((key) => "undefined" !== typeof query[key]);
    return keys
      .map((key) =>
        typeof query[key] === "object" && !Array.isArray(query[key])
          ? this.toQueryString(query[key] as QueryParamsType)
          : this.addQueryParam(query, key),
      )
      .join("&");
  }

  protected addQueryParams(rawQuery?: QueryParamsType): string {
    const queryString = this.toQueryString(rawQuery);
    return queryString ? `?${queryString}` : "";
  }

  private contentFormatters: Record<ContentType, (input: any) => any> = {
    [ContentType.Json]: (input: any) =>
      input !== null && (typeof input === "object" || typeof input === "string") ? JSON.stringify(input) : input,
    [ContentType.FormData]: (input: any) =>
      Object.keys(input || {}).reduce((data, key) => {
        data.append(key, input[key]);
        return data;
      }, new FormData()),
    [ContentType.UrlEncoded]: (input: any) => this.toQueryString(input),
  };

  private mergeRequestParams(params1: RequestParams, params2?: RequestParams): RequestParams {
    return {
      ...this.baseApiParams,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...(this.baseApiParams.headers || {}),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {}),
      },
    };
  }

  private createAbortSignal = (cancelToken: CancelToken): AbortSignal | undefined => {
    if (this.abortControllers.has(cancelToken)) {
      const abortController = this.abortControllers.get(cancelToken);
      if (abortController) {
        return abortController.signal;
      }
      return void 0;
    }

    const abortController = new AbortController();
    this.abortControllers.set(cancelToken, abortController);
    return abortController.signal;
  };

  public abortRequest = (cancelToken: CancelToken) => {
    const abortController = this.abortControllers.get(cancelToken);

    if (abortController) {
      abortController.abort();
      this.abortControllers.delete(cancelToken);
    }
  };

  public request = <T = any, E = any>({
    body,
    secure,
    path,
    type,
    query,
    format = "json",
    baseUrl,
    cancelToken,
    ...params
  }: FullRequestParams): Promise<HttpResponse<T, E>> => {
    const secureParams = (secure && this.securityWorker && this.securityWorker(this.securityData)) || {};
    const requestParams = this.mergeRequestParams(params, secureParams);
    const queryString = query && this.toQueryString(query);
    const payloadFormatter = this.contentFormatters[type || ContentType.Json];

    return fetch(`${baseUrl || this.baseUrl || ""}${path}${queryString ? `?${queryString}` : ""}`, {
      ...requestParams,
      headers: {
        ...(type && type !== ContentType.FormData ? { "Content-Type": type } : {}),
        ...(requestParams.headers || {}),
      },
      signal: cancelToken ? this.createAbortSignal(cancelToken) : void 0,
      body: typeof body === "undefined" || body === null ? null : payloadFormatter(body),
    }).then(async (response) => {
      const r = response as HttpResponse<T, E>;
      r.data = (null as unknown) as T;
      r.error = (null as unknown) as E;

      const data = await response[format]()
        .then((data) => {
          if (r.ok) {
            r.data = data;
          } else {
            r.error = data;
          }
          return r;
        })
        .catch((e) => {
          r.error = e;
          return r;
        });

      if (cancelToken) {
        this.abortControllers.delete(cancelToken);
      }

      if (!response.ok) throw data;
      return data;
    });
  };
}

/**
 * @title denomoney/asset.proto
 * @version version not set
 */
export class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags Query
   * @name QueryAssetAll
   * @summary Queries a list of Asset items.
   * @request GET:/pendulum-labs/denomoney/denomoney/asset
   */
  queryAssetAll = (
    query?: {
      "pagination.key"?: string;
      "pagination.offset"?: string;
      "pagination.limit"?: string;
      "pagination.count_total"?: boolean;
      "pagination.reverse"?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<denomoneyQueryAllAssetResponse, RpcStatus>({
      path: `/pendulum-labs/denomoney/denomoney/asset`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryAsset
   * @summary Queries a Asset by index.
   * @request GET:/pendulum-labs/denomoney/denomoney/asset/{active}/{owner}/{assetType}
   */
  queryAsset = (active: boolean, owner: string, assetType: string, params: RequestParams = {}) =>
    this.request<denomoneyQueryGetAssetResponse, RpcStatus>({
      path: `/pendulum-labs/denomoney/denomoney/asset/${active}/${owner}/${assetType}`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryBurningsAll
   * @summary Queries a list of Burnings items.
   * @request GET:/pendulum-labs/denomoney/denomoney/burnings
   */
  queryBurningsAll = (
    query?: {
      "pagination.key"?: string;
      "pagination.offset"?: string;
      "pagination.limit"?: string;
      "pagination.count_total"?: boolean;
      "pagination.reverse"?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<denomoneyQueryAllBurningsResponse, RpcStatus>({
      path: `/pendulum-labs/denomoney/denomoney/burnings`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryBurnings
   * @summary Queries a Burnings by index.
   * @request GET:/pendulum-labs/denomoney/denomoney/burnings/{denom}
   */
  queryBurnings = (denom: string, params: RequestParams = {}) =>
    this.request<denomoneyQueryGetBurningsResponse, RpcStatus>({
      path: `/pendulum-labs/denomoney/denomoney/burnings/${denom}`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryDropAll
   * @summary Queries a list of Drop items.
   * @request GET:/pendulum-labs/denomoney/denomoney/drop
   */
  queryDropAll = (
    query?: {
      "pagination.key"?: string;
      "pagination.offset"?: string;
      "pagination.limit"?: string;
      "pagination.count_total"?: boolean;
      "pagination.reverse"?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<denomoneyQueryDropsResponse, RpcStatus>({
      path: `/pendulum-labs/denomoney/denomoney/drop`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryDrop
   * @summary Queries a Drop by index.
   * @request GET:/pendulum-labs/denomoney/denomoney/drop/{uid}/{owner}/{pair}
   */
  queryDrop = (uid: string, owner: string, pair: string, params: RequestParams = {}) =>
    this.request<denomoneyQueryDropResponse, RpcStatus>({
      path: `/pendulum-labs/denomoney/denomoney/drop/${uid}/${owner}/${pair}`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryBook
   * @summary Queries a list of Book items.
   * @request GET:/pendulum-labs/denomoney/denomoney/book/{denomA}/{denomB}/{orderType}
   */
  queryBook = (
    denomA: string,
    denomB: string,
    orderType: string,
    query?: {
      "pagination.key"?: string;
      "pagination.offset"?: string;
      "pagination.limit"?: string;
      "pagination.count_total"?: boolean;
      "pagination.reverse"?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<denomoneyQueryBookResponse, RpcStatus>({
      path: `/pendulum-labs/denomoney/denomoney/book/${denomA}/${denomB}/${orderType}`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryMemberAll
   * @summary Queries a list of Member items.
   * @request GET:/pendulum-labs/denomoney/denomoney/member
   */
  queryMemberAll = (
    query?: {
      "pagination.key"?: string;
      "pagination.offset"?: string;
      "pagination.limit"?: string;
      "pagination.count_total"?: boolean;
      "pagination.reverse"?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<denomoneyQueryAllMemberResponse, RpcStatus>({
      path: `/pendulum-labs/denomoney/denomoney/member`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryMember
   * @summary Queries a Member by index.
   * @request GET:/pendulum-labs/denomoney/denomoney/member/{pair}/{denomA}/{denomB}
   */
  queryMember = (pair: string, denomA: string, denomB: string, params: RequestParams = {}) =>
    this.request<denomoneyQueryGetMemberResponse, RpcStatus>({
      path: `/pendulum-labs/denomoney/denomoney/member/${pair}/${denomA}/${denomB}`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryOrderAll
   * @summary Queries a list of Order items.
   * @request GET:/pendulum-labs/denomoney/denomoney/order
   */
  queryOrderAll = (
    query?: {
      "pagination.key"?: string;
      "pagination.offset"?: string;
      "pagination.limit"?: string;
      "pagination.count_total"?: boolean;
      "pagination.reverse"?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<denomoneyQueryOrdersResponse, RpcStatus>({
      path: `/pendulum-labs/denomoney/denomoney/order`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryOrder
   * @summary Queries a Order by index.
   * @request GET:/pendulum-labs/denomoney/denomoney/order/{uid}
   */
  queryOrder = (
    uid: string,
    query?: { owner?: string; active?: boolean; orderType?: string; denomAsk?: string; denomBid?: string },
    params: RequestParams = {},
  ) =>
    this.request<denomoneyQueryOrderResponse, RpcStatus>({
      path: `/pendulum-labs/denomoney/denomoney/order/${uid}`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryParams
   * @summary Parameters queries the parameters of the module.
   * @request GET:/pendulum-labs/denomoney/denomoney/params
   */
  queryParams = (params: RequestParams = {}) =>
    this.request<denomoneyQueryParamsResponse, RpcStatus>({
      path: `/pendulum-labs/denomoney/denomoney/params`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryPoolAll
   * @summary Queries a list of Pool items.
   * @request GET:/pendulum-labs/denomoney/denomoney/pool
   */
  queryPoolAll = (
    query?: {
      "pagination.key"?: string;
      "pagination.offset"?: string;
      "pagination.limit"?: string;
      "pagination.count_total"?: boolean;
      "pagination.reverse"?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<denomoneyQueryAllPoolResponse, RpcStatus>({
      path: `/pendulum-labs/denomoney/denomoney/pool`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryPool
   * @summary Queries a Pool by index.
   * @request GET:/pendulum-labs/denomoney/denomoney/pool/{pair}/{denom1}/{denom2}/{leader}
   */
  queryPool = (pair: string, denom1: string, denom2: string, leader: string, params: RequestParams = {}) =>
    this.request<denomoneyQueryGetPoolResponse, RpcStatus>({
      path: `/pendulum-labs/denomoney/denomoney/pool/${pair}/${denom1}/${denom2}/${leader}`,
      method: "GET",
      format: "json",
      ...params,
    });
}
