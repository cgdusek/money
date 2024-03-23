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

export interface DenomoneyLeader {
  address?: string;
  drops?: string;
}

export type DenomoneyMsgCancelOrderResponse = object;

export type DenomoneyMsgCreateDropResponse = object;

export interface DenomoneyMsgCreateOrderResponse {
  /** @format uint64 */
  uid?: string;
}

export type DenomoneyMsgCreatePoolResponse = object;

export type DenomoneyMsgRedeemDropResponse = object;

export interface DenomoneyMsgdenomoneyOrderResponse {
  amountBid?: string;
  amountAsk?: string;
  slippage?: string;
}

export interface DenomoneyOrderResponse {
  /** @format uint64 */
  uid?: string;
  owner?: string;
  status?: string;
  orderType?: string;
  denomAsk?: string;
  denomBid?: string;
  amount?: string;
  rate?: string[];

  /** @format uint64 */
  prev?: string;

  /** @format uint64 */
  next?: string;

  /** @format int64 */
  beg_time?: string;

  /** @format int64 */
  upd_time?: string;
}

export interface DenomoneyOrders {
  uids?: string[];
}

export interface DenomoneyQueryAllBurningsResponse {
  burnings?: DenomoneydenomoneyBurnings[];

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

export interface DenomoneyQueryAllMemberResponse {
  member?: DenomoneydenomoneyMember[];

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

export interface DenomoneyQueryAllPoolResponse {
  pool?: DenomoneydenomoneyPool[];

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

export interface DenomoneyQueryAllVolumeResponse {
  volumes?: DenomoneydenomoneyVolume[];

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

export interface DenomoneyQueryBookResponse {
  book?: DenomoneyOrderResponse[];

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

export interface DenomoneyQueryBookendsResponse {
  coinA?: string;
  coinB?: string;
  orderType?: string;
  rate?: string[];

  /** @format uint64 */
  prev?: string;

  /** @format uint64 */
  next?: string;
}

export interface DenomoneyQueryBurnedResponse {
  denom?: string;
  amount?: string;
}

export interface DenomoneyQueryDropAmountsResponse {
  denom1?: string;
  denom2?: string;
  amount1?: string;
  amount2?: string;
}

export interface DenomoneyQueryDropCoinResponse {
  drops?: string;
  amountB?: string;
}

export interface DenomoneyQueryDropPairsResponse {
  pairs?: string[];
}

export interface DenomoneyQueryDropResponse {
  drop?: DenomoneydenomoneyDrop;
}

export interface DenomoneyQueryDropsResponse {
  drops?: DenomoneydenomoneyDrop[];

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

export interface DenomoneyQueryGetBurningsResponse {
  burnings?: DenomoneydenomoneyBurnings;
}

export interface DenomoneyQueryGetMemberResponse {
  member?: DenomoneydenomoneyMember;
}

export interface DenomoneyQueryGetPoolResponse {
  pool?: DenomoneydenomoneyPool;
}

export interface DenomoneyQueryHistoryResponse {
  history?: DenomoneyOrderResponse[];

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

export interface DenomoneyQueryOrderOwnerUidsResponse {
  orders?: DenomoneyOrders;

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

export interface DenomoneyQueryOrderResponse {
  order?: DenomoneydenomoneyOrder;
}

export interface DenomoneyQueryOrdersResponse {
  orders?: DenomoneydenomoneyOrder[];

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

/**
 * QueryParamsResponse is response type for the Query/Params RPC method.
 */
export interface DenomoneyQueryParamsResponse {
  /** params holds all the parameters of this module. */
  params?: DenomoneydenomoneyParams;
}

export interface DenomoneyQueryQuoteResponse {
  denom?: string;
  amount?: string;
}

export interface DenomoneyQueryVolumeResponse {
  amount?: string;
}

export interface DenomoneydenomoneyBurnings {
  denom?: string;
  amount?: string;
}

export interface DenomoneydenomoneyDrop {
  /** @format uint64 */
  uid?: string;
  owner?: string;
  pair?: string;
  drops?: string;
  product?: string;
  active?: boolean;
}

export interface DenomoneydenomoneyMember {
  pair?: string;
  denomA?: string;
  denomB?: string;
  balance?: string;
  previous?: string;

  /** @format uint64 */
  limit?: string;

  /** @format uint64 */
  stop?: string;
}

export interface DenomoneydenomoneyOrder {
  /** @format uint64 */
  uid?: string;
  owner?: string;
  status?: string;
  orderType?: string;
  denomAsk?: string;
  denomBid?: string;
  amount?: string;
  rate?: string[];

  /** @format uint64 */
  prev?: string;

  /** @format uint64 */
  next?: string;

  /** @format int64 */
  beg_time?: string;

  /** @format int64 */
  upd_time?: string;
}

/**
 * Params defines the parameters for the module.
 */
export interface DenomoneydenomoneyParams {
  earn_rates?: string;
  burn_rate?: string;
  burn_coin?: string;
  denomoney_fee?: string;
}

export interface DenomoneydenomoneyPool {
  pair?: string;
  denom1?: string;
  denom2?: string;
  volume1?: DenomoneydenomoneyVolume;
  volume2?: DenomoneydenomoneyVolume;
  leaders?: DenomoneyLeader[];
  drops?: string;

  /** @format uint64 */
  history?: string;
}

export interface DenomoneydenomoneyVolume {
  denom?: string;
  amount?: string;
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
 * @title denomoney/burnings.proto
 * @version version not set
 */
export class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
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
    this.request<DenomoneyQueryBookResponse, RpcStatus>({
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
   * @name QueryBookends
   * @summary Queries a list of Bookends items.
   * @request GET:/pendulum-labs/denomoney/denomoney/bookends/{coinA}/{coinB}/{orderType}/{rate}
   */
  queryBookends = (coinA: string, coinB: string, orderType: string, rate: string[], params: RequestParams = {}) =>
    this.request<DenomoneyQueryBookendsResponse, RpcStatus>({
      path: `/pendulum-labs/denomoney/denomoney/bookends/${coinA}/${coinB}/${orderType}/${rate}`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryBurned
   * @summary Queries total burned.
   * @request GET:/pendulum-labs/denomoney/denomoney/burned
   */
  queryBurned = (params: RequestParams = {}) =>
    this.request<DenomoneyQueryBurnedResponse, RpcStatus>({
      path: `/pendulum-labs/denomoney/denomoney/burned`,
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
    this.request<DenomoneyQueryAllBurningsResponse, RpcStatus>({
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
    this.request<DenomoneyQueryGetBurningsResponse, RpcStatus>({
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
    this.request<DenomoneyQueryDropsResponse, RpcStatus>({
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
   * @name QueryDropAmounts
   * @summary Queries a Drop by index.
   * @request GET:/pendulum-labs/denomoney/denomoney/drop/amounts/{uid}
   */
  queryDropAmounts = (uid: string, params: RequestParams = {}) =>
    this.request<DenomoneyQueryDropAmountsResponse, RpcStatus>({
      path: `/pendulum-labs/denomoney/denomoney/drop/amounts/${uid}`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryDropCoin
   * @summary Queries a Drop by index.
   * @request GET:/pendulum-labs/denomoney/denomoney/drop/coin/{denomA}/{denomB}/{amountA}
   */
  queryDropCoin = (denomA: string, denomB: string, amountA: string, params: RequestParams = {}) =>
    this.request<DenomoneyQueryDropCoinResponse, RpcStatus>({
      path: `/pendulum-labs/denomoney/denomoney/drop/coin/${denomA}/${denomB}/${amountA}`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryDropsToCoins
   * @summary Converts drops to coin amounts
   * @request GET:/pendulum-labs/denomoney/denomoney/drop/coins/{pair}/{drops}
   */
  queryDropsToCoins = (pair: string, drops: string, params: RequestParams = {}) =>
    this.request<DenomoneyQueryDropAmountsResponse, RpcStatus>({
      path: `/pendulum-labs/denomoney/denomoney/drop/coins/${pair}/${drops}`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryDropPairs
   * @summary Queries a Drop by index.
   * @request GET:/pendulum-labs/denomoney/denomoney/drop/pairs/{address}
   */
  queryDropPairs = (address: string, params: RequestParams = {}) =>
    this.request<DenomoneyQueryDropPairsResponse, RpcStatus>({
      path: `/pendulum-labs/denomoney/denomoney/drop/pairs/${address}`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryDropOwnerPair
   * @summary Queries a Drop by index.
   * @request GET:/pendulum-labs/denomoney/denomoney/drop/{address}/{pair}
   */
  queryDropOwnerPair = (
    address: string,
    pair: string,
    query?: {
      "pagination.key"?: string;
      "pagination.offset"?: string;
      "pagination.limit"?: string;
      "pagination.count_total"?: boolean;
      "pagination.reverse"?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<DenomoneyQueryDropsResponse, RpcStatus>({
      path: `/pendulum-labs/denomoney/denomoney/drop/${address}/${pair}`,
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
   * @request GET:/pendulum-labs/denomoney/denomoney/drop/{uid}
   */
  queryDrop = (uid: string, params: RequestParams = {}) =>
    this.request<DenomoneyQueryDropResponse, RpcStatus>({
      path: `/pendulum-labs/denomoney/denomoney/drop/${uid}`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryHistory
   * @summary Queries pool trade history.
   * @request GET:/pendulum-labs/denomoney/denomoney/history/{pair}
   */
  queryHistory = (
    pair: string,
    query?: {
      length?: string;
      "pagination.key"?: string;
      "pagination.offset"?: string;
      "pagination.limit"?: string;
      "pagination.count_total"?: boolean;
      "pagination.reverse"?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<DenomoneyQueryHistoryResponse, RpcStatus>({
      path: `/pendulum-labs/denomoney/denomoney/history/${pair}`,
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
    this.request<DenomoneyQueryAllMemberResponse, RpcStatus>({
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
   * @request GET:/pendulum-labs/denomoney/denomoney/member/{denomA}/{denomB}
   */
  queryMember = (denomA: string, denomB: string, params: RequestParams = {}) =>
    this.request<DenomoneyQueryGetMemberResponse, RpcStatus>({
      path: `/pendulum-labs/denomoney/denomoney/member/${denomA}/${denomB}`,
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
    this.request<DenomoneyQueryOrdersResponse, RpcStatus>({
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
   * @name QueryOrderOwnerUids
   * @summary Queries a list of Order items.
   * @request GET:/pendulum-labs/denomoney/denomoney/order/uids/{address}
   */
  queryOrderOwnerUids = (
    address: string,
    query?: {
      "pagination.key"?: string;
      "pagination.offset"?: string;
      "pagination.limit"?: string;
      "pagination.count_total"?: boolean;
      "pagination.reverse"?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<DenomoneyQueryOrderOwnerUidsResponse, RpcStatus>({
      path: `/pendulum-labs/denomoney/denomoney/order/uids/${address}`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryOrderOwner
   * @summary Queries a list of Order items.
   * @request GET:/pendulum-labs/denomoney/denomoney/order/{address}
   */
  queryOrderOwner = (
    address: string,
    query?: {
      "pagination.key"?: string;
      "pagination.offset"?: string;
      "pagination.limit"?: string;
      "pagination.count_total"?: boolean;
      "pagination.reverse"?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<DenomoneyQueryOrdersResponse, RpcStatus>({
      path: `/pendulum-labs/denomoney/denomoney/order/${address}`,
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
  queryOrder = (uid: string, params: RequestParams = {}) =>
    this.request<DenomoneyQueryOrderResponse, RpcStatus>({
      path: `/pendulum-labs/denomoney/denomoney/order/${uid}`,
      method: "GET",
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
    this.request<DenomoneyQueryParamsResponse, RpcStatus>({
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
    this.request<DenomoneyQueryAllPoolResponse, RpcStatus>({
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
   * @request GET:/pendulum-labs/denomoney/denomoney/pool/{pair}
   */
  queryPool = (pair: string, params: RequestParams = {}) =>
    this.request<DenomoneyQueryGetPoolResponse, RpcStatus>({
      path: `/pendulum-labs/denomoney/denomoney/pool/${pair}`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryQuote
   * @summary Queries pool trade history.
   * @request GET:/pendulum-labs/denomoney/denomoney/quote/{denomBid}/{denomAsk}/{denomAmount}/{amount}
   */
  queryQuote = (denomBid: string, denomAsk: string, denomAmount: string, amount: string, params: RequestParams = {}) =>
    this.request<DenomoneyQueryQuoteResponse, RpcStatus>({
      path: `/pendulum-labs/denomoney/denomoney/quote/${denomBid}/${denomAsk}/${denomAmount}/${amount}`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryVolumeAll
   * @summary Queries all Volumes.
   * @request GET:/pendulum-labs/denomoney/denomoney/volume
   */
  queryVolumeAll = (
    query?: {
      "pagination.key"?: string;
      "pagination.offset"?: string;
      "pagination.limit"?: string;
      "pagination.count_total"?: boolean;
      "pagination.reverse"?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<DenomoneyQueryAllVolumeResponse, RpcStatus>({
      path: `/pendulum-labs/denomoney/denomoney/volume`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryVolume
   * @summary Queries a Volume by index.
   * @request GET:/pendulum-labs/denomoney/denomoney/volume/{denom}
   */
  queryVolume = (denom: string, params: RequestParams = {}) =>
    this.request<DenomoneyQueryVolumeResponse, RpcStatus>({
      path: `/pendulum-labs/denomoney/denomoney/volume/${denom}`,
      method: "GET",
      format: "json",
      ...params,
    });
}
