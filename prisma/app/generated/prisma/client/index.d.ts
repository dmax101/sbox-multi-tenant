
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Tenant
 * 
 */
export type Tenant = $Result.DefaultSelection<Prisma.$TenantPayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Profile
 * 
 */
export type Profile = $Result.DefaultSelection<Prisma.$ProfilePayload>
/**
 * Model Client
 * 
 */
export type Client = $Result.DefaultSelection<Prisma.$ClientPayload>
/**
 * Model RawMaterial
 * 
 */
export type RawMaterial = $Result.DefaultSelection<Prisma.$RawMaterialPayload>
/**
 * Model RawMaterialType
 * 
 */
export type RawMaterialType = $Result.DefaultSelection<Prisma.$RawMaterialTypePayload>
/**
 * Model Package
 * 
 */
export type Package = $Result.DefaultSelection<Prisma.$PackagePayload>
/**
 * Model Equipment
 * 
 */
export type Equipment = $Result.DefaultSelection<Prisma.$EquipmentPayload>
/**
 * Model ProductionOrder
 * 
 */
export type ProductionOrder = $Result.DefaultSelection<Prisma.$ProductionOrderPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const ProfileType: {
  ADMIN: 'ADMIN',
  OPERATOR: 'OPERATOR',
  MANAGER: 'MANAGER',
  SUPERVISOR: 'SUPERVISOR',
  CLIENT: 'CLIENT'
};

export type ProfileType = (typeof ProfileType)[keyof typeof ProfileType]


export const ClientType: {
  INDIVIDUAL: 'INDIVIDUAL',
  COMPANY: 'COMPANY',
  GOVERNMENT: 'GOVERNMENT',
  NON_PROFIT: 'NON_PROFIT'
};

export type ClientType = (typeof ClientType)[keyof typeof ClientType]


export const Status: {
  PENDING: 'PENDING',
  IN_PROGRESS: 'IN_PROGRESS',
  COMPLETED: 'COMPLETED',
  CANCELLED: 'CANCELLED'
};

export type Status = (typeof Status)[keyof typeof Status]

}

export type ProfileType = $Enums.ProfileType

export const ProfileType: typeof $Enums.ProfileType

export type ClientType = $Enums.ClientType

export const ClientType: typeof $Enums.ClientType

export type Status = $Enums.Status

export const Status: typeof $Enums.Status

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Tenants
 * const tenants = await prisma.tenant.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Tenants
   * const tenants = await prisma.tenant.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.tenant`: Exposes CRUD operations for the **Tenant** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tenants
    * const tenants = await prisma.tenant.findMany()
    * ```
    */
  get tenant(): Prisma.TenantDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.profile`: Exposes CRUD operations for the **Profile** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Profiles
    * const profiles = await prisma.profile.findMany()
    * ```
    */
  get profile(): Prisma.ProfileDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.client`: Exposes CRUD operations for the **Client** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Clients
    * const clients = await prisma.client.findMany()
    * ```
    */
  get client(): Prisma.ClientDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.rawMaterial`: Exposes CRUD operations for the **RawMaterial** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RawMaterials
    * const rawMaterials = await prisma.rawMaterial.findMany()
    * ```
    */
  get rawMaterial(): Prisma.RawMaterialDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.rawMaterialType`: Exposes CRUD operations for the **RawMaterialType** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RawMaterialTypes
    * const rawMaterialTypes = await prisma.rawMaterialType.findMany()
    * ```
    */
  get rawMaterialType(): Prisma.RawMaterialTypeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.package`: Exposes CRUD operations for the **Package** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Packages
    * const packages = await prisma.package.findMany()
    * ```
    */
  get package(): Prisma.PackageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.equipment`: Exposes CRUD operations for the **Equipment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Equipment
    * const equipment = await prisma.equipment.findMany()
    * ```
    */
  get equipment(): Prisma.EquipmentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.productionOrder`: Exposes CRUD operations for the **ProductionOrder** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProductionOrders
    * const productionOrders = await prisma.productionOrder.findMany()
    * ```
    */
  get productionOrder(): Prisma.ProductionOrderDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Tenant: 'Tenant',
    User: 'User',
    Profile: 'Profile',
    Client: 'Client',
    RawMaterial: 'RawMaterial',
    RawMaterialType: 'RawMaterialType',
    Package: 'Package',
    Equipment: 'Equipment',
    ProductionOrder: 'ProductionOrder'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "tenant" | "user" | "profile" | "client" | "rawMaterial" | "rawMaterialType" | "package" | "equipment" | "productionOrder"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Tenant: {
        payload: Prisma.$TenantPayload<ExtArgs>
        fields: Prisma.TenantFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TenantFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TenantFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantPayload>
          }
          findFirst: {
            args: Prisma.TenantFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TenantFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantPayload>
          }
          findMany: {
            args: Prisma.TenantFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantPayload>[]
          }
          create: {
            args: Prisma.TenantCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantPayload>
          }
          createMany: {
            args: Prisma.TenantCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TenantCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantPayload>[]
          }
          delete: {
            args: Prisma.TenantDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantPayload>
          }
          update: {
            args: Prisma.TenantUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantPayload>
          }
          deleteMany: {
            args: Prisma.TenantDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TenantUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TenantUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantPayload>[]
          }
          upsert: {
            args: Prisma.TenantUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantPayload>
          }
          aggregate: {
            args: Prisma.TenantAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTenant>
          }
          groupBy: {
            args: Prisma.TenantGroupByArgs<ExtArgs>
            result: $Utils.Optional<TenantGroupByOutputType>[]
          }
          count: {
            args: Prisma.TenantCountArgs<ExtArgs>
            result: $Utils.Optional<TenantCountAggregateOutputType> | number
          }
        }
      }
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Profile: {
        payload: Prisma.$ProfilePayload<ExtArgs>
        fields: Prisma.ProfileFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProfileFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProfileFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          findFirst: {
            args: Prisma.ProfileFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProfileFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          findMany: {
            args: Prisma.ProfileFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>[]
          }
          create: {
            args: Prisma.ProfileCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          createMany: {
            args: Prisma.ProfileCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProfileCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>[]
          }
          delete: {
            args: Prisma.ProfileDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          update: {
            args: Prisma.ProfileUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          deleteMany: {
            args: Prisma.ProfileDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProfileUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProfileUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>[]
          }
          upsert: {
            args: Prisma.ProfileUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          aggregate: {
            args: Prisma.ProfileAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProfile>
          }
          groupBy: {
            args: Prisma.ProfileGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProfileGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProfileCountArgs<ExtArgs>
            result: $Utils.Optional<ProfileCountAggregateOutputType> | number
          }
        }
      }
      Client: {
        payload: Prisma.$ClientPayload<ExtArgs>
        fields: Prisma.ClientFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ClientFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ClientFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          findFirst: {
            args: Prisma.ClientFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ClientFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          findMany: {
            args: Prisma.ClientFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>[]
          }
          create: {
            args: Prisma.ClientCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          createMany: {
            args: Prisma.ClientCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ClientCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>[]
          }
          delete: {
            args: Prisma.ClientDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          update: {
            args: Prisma.ClientUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          deleteMany: {
            args: Prisma.ClientDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ClientUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ClientUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>[]
          }
          upsert: {
            args: Prisma.ClientUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          aggregate: {
            args: Prisma.ClientAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateClient>
          }
          groupBy: {
            args: Prisma.ClientGroupByArgs<ExtArgs>
            result: $Utils.Optional<ClientGroupByOutputType>[]
          }
          count: {
            args: Prisma.ClientCountArgs<ExtArgs>
            result: $Utils.Optional<ClientCountAggregateOutputType> | number
          }
        }
      }
      RawMaterial: {
        payload: Prisma.$RawMaterialPayload<ExtArgs>
        fields: Prisma.RawMaterialFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RawMaterialFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RawMaterialPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RawMaterialFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RawMaterialPayload>
          }
          findFirst: {
            args: Prisma.RawMaterialFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RawMaterialPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RawMaterialFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RawMaterialPayload>
          }
          findMany: {
            args: Prisma.RawMaterialFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RawMaterialPayload>[]
          }
          create: {
            args: Prisma.RawMaterialCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RawMaterialPayload>
          }
          createMany: {
            args: Prisma.RawMaterialCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RawMaterialCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RawMaterialPayload>[]
          }
          delete: {
            args: Prisma.RawMaterialDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RawMaterialPayload>
          }
          update: {
            args: Prisma.RawMaterialUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RawMaterialPayload>
          }
          deleteMany: {
            args: Prisma.RawMaterialDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RawMaterialUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RawMaterialUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RawMaterialPayload>[]
          }
          upsert: {
            args: Prisma.RawMaterialUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RawMaterialPayload>
          }
          aggregate: {
            args: Prisma.RawMaterialAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRawMaterial>
          }
          groupBy: {
            args: Prisma.RawMaterialGroupByArgs<ExtArgs>
            result: $Utils.Optional<RawMaterialGroupByOutputType>[]
          }
          count: {
            args: Prisma.RawMaterialCountArgs<ExtArgs>
            result: $Utils.Optional<RawMaterialCountAggregateOutputType> | number
          }
        }
      }
      RawMaterialType: {
        payload: Prisma.$RawMaterialTypePayload<ExtArgs>
        fields: Prisma.RawMaterialTypeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RawMaterialTypeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RawMaterialTypePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RawMaterialTypeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RawMaterialTypePayload>
          }
          findFirst: {
            args: Prisma.RawMaterialTypeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RawMaterialTypePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RawMaterialTypeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RawMaterialTypePayload>
          }
          findMany: {
            args: Prisma.RawMaterialTypeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RawMaterialTypePayload>[]
          }
          create: {
            args: Prisma.RawMaterialTypeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RawMaterialTypePayload>
          }
          createMany: {
            args: Prisma.RawMaterialTypeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RawMaterialTypeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RawMaterialTypePayload>[]
          }
          delete: {
            args: Prisma.RawMaterialTypeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RawMaterialTypePayload>
          }
          update: {
            args: Prisma.RawMaterialTypeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RawMaterialTypePayload>
          }
          deleteMany: {
            args: Prisma.RawMaterialTypeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RawMaterialTypeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RawMaterialTypeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RawMaterialTypePayload>[]
          }
          upsert: {
            args: Prisma.RawMaterialTypeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RawMaterialTypePayload>
          }
          aggregate: {
            args: Prisma.RawMaterialTypeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRawMaterialType>
          }
          groupBy: {
            args: Prisma.RawMaterialTypeGroupByArgs<ExtArgs>
            result: $Utils.Optional<RawMaterialTypeGroupByOutputType>[]
          }
          count: {
            args: Prisma.RawMaterialTypeCountArgs<ExtArgs>
            result: $Utils.Optional<RawMaterialTypeCountAggregateOutputType> | number
          }
        }
      }
      Package: {
        payload: Prisma.$PackagePayload<ExtArgs>
        fields: Prisma.PackageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PackageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PackagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PackageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PackagePayload>
          }
          findFirst: {
            args: Prisma.PackageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PackagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PackageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PackagePayload>
          }
          findMany: {
            args: Prisma.PackageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PackagePayload>[]
          }
          create: {
            args: Prisma.PackageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PackagePayload>
          }
          createMany: {
            args: Prisma.PackageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PackageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PackagePayload>[]
          }
          delete: {
            args: Prisma.PackageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PackagePayload>
          }
          update: {
            args: Prisma.PackageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PackagePayload>
          }
          deleteMany: {
            args: Prisma.PackageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PackageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PackageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PackagePayload>[]
          }
          upsert: {
            args: Prisma.PackageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PackagePayload>
          }
          aggregate: {
            args: Prisma.PackageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePackage>
          }
          groupBy: {
            args: Prisma.PackageGroupByArgs<ExtArgs>
            result: $Utils.Optional<PackageGroupByOutputType>[]
          }
          count: {
            args: Prisma.PackageCountArgs<ExtArgs>
            result: $Utils.Optional<PackageCountAggregateOutputType> | number
          }
        }
      }
      Equipment: {
        payload: Prisma.$EquipmentPayload<ExtArgs>
        fields: Prisma.EquipmentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EquipmentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipmentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EquipmentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipmentPayload>
          }
          findFirst: {
            args: Prisma.EquipmentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipmentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EquipmentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipmentPayload>
          }
          findMany: {
            args: Prisma.EquipmentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipmentPayload>[]
          }
          create: {
            args: Prisma.EquipmentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipmentPayload>
          }
          createMany: {
            args: Prisma.EquipmentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EquipmentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipmentPayload>[]
          }
          delete: {
            args: Prisma.EquipmentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipmentPayload>
          }
          update: {
            args: Prisma.EquipmentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipmentPayload>
          }
          deleteMany: {
            args: Prisma.EquipmentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EquipmentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EquipmentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipmentPayload>[]
          }
          upsert: {
            args: Prisma.EquipmentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipmentPayload>
          }
          aggregate: {
            args: Prisma.EquipmentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEquipment>
          }
          groupBy: {
            args: Prisma.EquipmentGroupByArgs<ExtArgs>
            result: $Utils.Optional<EquipmentGroupByOutputType>[]
          }
          count: {
            args: Prisma.EquipmentCountArgs<ExtArgs>
            result: $Utils.Optional<EquipmentCountAggregateOutputType> | number
          }
        }
      }
      ProductionOrder: {
        payload: Prisma.$ProductionOrderPayload<ExtArgs>
        fields: Prisma.ProductionOrderFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductionOrderFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductionOrderPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductionOrderFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductionOrderPayload>
          }
          findFirst: {
            args: Prisma.ProductionOrderFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductionOrderPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductionOrderFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductionOrderPayload>
          }
          findMany: {
            args: Prisma.ProductionOrderFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductionOrderPayload>[]
          }
          create: {
            args: Prisma.ProductionOrderCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductionOrderPayload>
          }
          createMany: {
            args: Prisma.ProductionOrderCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProductionOrderCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductionOrderPayload>[]
          }
          delete: {
            args: Prisma.ProductionOrderDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductionOrderPayload>
          }
          update: {
            args: Prisma.ProductionOrderUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductionOrderPayload>
          }
          deleteMany: {
            args: Prisma.ProductionOrderDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProductionOrderUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProductionOrderUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductionOrderPayload>[]
          }
          upsert: {
            args: Prisma.ProductionOrderUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductionOrderPayload>
          }
          aggregate: {
            args: Prisma.ProductionOrderAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProductionOrder>
          }
          groupBy: {
            args: Prisma.ProductionOrderGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductionOrderGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductionOrderCountArgs<ExtArgs>
            result: $Utils.Optional<ProductionOrderCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    tenant?: TenantOmit
    user?: UserOmit
    profile?: ProfileOmit
    client?: ClientOmit
    rawMaterial?: RawMaterialOmit
    rawMaterialType?: RawMaterialTypeOmit
    package?: PackageOmit
    equipment?: EquipmentOmit
    productionOrder?: ProductionOrderOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type TenantCountOutputType
   */

  export type TenantCountOutputType = {
    clients: number
    productionOrders: number
    User: number
  }

  export type TenantCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    clients?: boolean | TenantCountOutputTypeCountClientsArgs
    productionOrders?: boolean | TenantCountOutputTypeCountProductionOrdersArgs
    User?: boolean | TenantCountOutputTypeCountUserArgs
  }

  // Custom InputTypes
  /**
   * TenantCountOutputType without action
   */
  export type TenantCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TenantCountOutputType
     */
    select?: TenantCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TenantCountOutputType without action
   */
  export type TenantCountOutputTypeCountClientsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClientWhereInput
  }

  /**
   * TenantCountOutputType without action
   */
  export type TenantCountOutputTypeCountProductionOrdersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductionOrderWhereInput
  }

  /**
   * TenantCountOutputType without action
   */
  export type TenantCountOutputTypeCountUserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }


  /**
   * Count Type ClientCountOutputType
   */

  export type ClientCountOutputType = {
    productionOrders: number
  }

  export type ClientCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    productionOrders?: boolean | ClientCountOutputTypeCountProductionOrdersArgs
  }

  // Custom InputTypes
  /**
   * ClientCountOutputType without action
   */
  export type ClientCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientCountOutputType
     */
    select?: ClientCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ClientCountOutputType without action
   */
  export type ClientCountOutputTypeCountProductionOrdersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductionOrderWhereInput
  }


  /**
   * Count Type RawMaterialCountOutputType
   */

  export type RawMaterialCountOutputType = {
    productionOrders: number
  }

  export type RawMaterialCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    productionOrders?: boolean | RawMaterialCountOutputTypeCountProductionOrdersArgs
  }

  // Custom InputTypes
  /**
   * RawMaterialCountOutputType without action
   */
  export type RawMaterialCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RawMaterialCountOutputType
     */
    select?: RawMaterialCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RawMaterialCountOutputType without action
   */
  export type RawMaterialCountOutputTypeCountProductionOrdersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductionOrderWhereInput
  }


  /**
   * Count Type RawMaterialTypeCountOutputType
   */

  export type RawMaterialTypeCountOutputType = {
    RawMaterial: number
  }

  export type RawMaterialTypeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    RawMaterial?: boolean | RawMaterialTypeCountOutputTypeCountRawMaterialArgs
  }

  // Custom InputTypes
  /**
   * RawMaterialTypeCountOutputType without action
   */
  export type RawMaterialTypeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RawMaterialTypeCountOutputType
     */
    select?: RawMaterialTypeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RawMaterialTypeCountOutputType without action
   */
  export type RawMaterialTypeCountOutputTypeCountRawMaterialArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RawMaterialWhereInput
  }


  /**
   * Count Type PackageCountOutputType
   */

  export type PackageCountOutputType = {
    productionOrders: number
  }

  export type PackageCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    productionOrders?: boolean | PackageCountOutputTypeCountProductionOrdersArgs
  }

  // Custom InputTypes
  /**
   * PackageCountOutputType without action
   */
  export type PackageCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PackageCountOutputType
     */
    select?: PackageCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PackageCountOutputType without action
   */
  export type PackageCountOutputTypeCountProductionOrdersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductionOrderWhereInput
  }


  /**
   * Count Type EquipmentCountOutputType
   */

  export type EquipmentCountOutputType = {
    productionOrders: number
  }

  export type EquipmentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    productionOrders?: boolean | EquipmentCountOutputTypeCountProductionOrdersArgs
  }

  // Custom InputTypes
  /**
   * EquipmentCountOutputType without action
   */
  export type EquipmentCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EquipmentCountOutputType
     */
    select?: EquipmentCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EquipmentCountOutputType without action
   */
  export type EquipmentCountOutputTypeCountProductionOrdersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductionOrderWhereInput
  }


  /**
   * Count Type ProductionOrderCountOutputType
   */

  export type ProductionOrderCountOutputType = {
    rawMaterial: number
    package: number
    equipment: number
  }

  export type ProductionOrderCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rawMaterial?: boolean | ProductionOrderCountOutputTypeCountRawMaterialArgs
    package?: boolean | ProductionOrderCountOutputTypeCountPackageArgs
    equipment?: boolean | ProductionOrderCountOutputTypeCountEquipmentArgs
  }

  // Custom InputTypes
  /**
   * ProductionOrderCountOutputType without action
   */
  export type ProductionOrderCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductionOrderCountOutputType
     */
    select?: ProductionOrderCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProductionOrderCountOutputType without action
   */
  export type ProductionOrderCountOutputTypeCountRawMaterialArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RawMaterialWhereInput
  }

  /**
   * ProductionOrderCountOutputType without action
   */
  export type ProductionOrderCountOutputTypeCountPackageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PackageWhereInput
  }

  /**
   * ProductionOrderCountOutputType without action
   */
  export type ProductionOrderCountOutputTypeCountEquipmentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EquipmentWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Tenant
   */

  export type AggregateTenant = {
    _count: TenantCountAggregateOutputType | null
    _min: TenantMinAggregateOutputType | null
    _max: TenantMaxAggregateOutputType | null
  }

  export type TenantMinAggregateOutputType = {
    id: string | null
    name: string | null
    domain: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TenantMaxAggregateOutputType = {
    id: string | null
    name: string | null
    domain: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TenantCountAggregateOutputType = {
    id: number
    name: number
    domain: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TenantMinAggregateInputType = {
    id?: true
    name?: true
    domain?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TenantMaxAggregateInputType = {
    id?: true
    name?: true
    domain?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TenantCountAggregateInputType = {
    id?: true
    name?: true
    domain?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TenantAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tenant to aggregate.
     */
    where?: TenantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tenants to fetch.
     */
    orderBy?: TenantOrderByWithRelationInput | TenantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TenantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tenants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tenants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tenants
    **/
    _count?: true | TenantCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TenantMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TenantMaxAggregateInputType
  }

  export type GetTenantAggregateType<T extends TenantAggregateArgs> = {
        [P in keyof T & keyof AggregateTenant]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTenant[P]>
      : GetScalarType<T[P], AggregateTenant[P]>
  }




  export type TenantGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TenantWhereInput
    orderBy?: TenantOrderByWithAggregationInput | TenantOrderByWithAggregationInput[]
    by: TenantScalarFieldEnum[] | TenantScalarFieldEnum
    having?: TenantScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TenantCountAggregateInputType | true
    _min?: TenantMinAggregateInputType
    _max?: TenantMaxAggregateInputType
  }

  export type TenantGroupByOutputType = {
    id: string
    name: string
    domain: string | null
    createdAt: Date
    updatedAt: Date
    _count: TenantCountAggregateOutputType | null
    _min: TenantMinAggregateOutputType | null
    _max: TenantMaxAggregateOutputType | null
  }

  type GetTenantGroupByPayload<T extends TenantGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TenantGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TenantGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TenantGroupByOutputType[P]>
            : GetScalarType<T[P], TenantGroupByOutputType[P]>
        }
      >
    >


  export type TenantSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    domain?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    clients?: boolean | Tenant$clientsArgs<ExtArgs>
    productionOrders?: boolean | Tenant$productionOrdersArgs<ExtArgs>
    User?: boolean | Tenant$UserArgs<ExtArgs>
    _count?: boolean | TenantCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tenant"]>

  export type TenantSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    domain?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["tenant"]>

  export type TenantSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    domain?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["tenant"]>

  export type TenantSelectScalar = {
    id?: boolean
    name?: boolean
    domain?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TenantOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "domain" | "createdAt" | "updatedAt", ExtArgs["result"]["tenant"]>
  export type TenantInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    clients?: boolean | Tenant$clientsArgs<ExtArgs>
    productionOrders?: boolean | Tenant$productionOrdersArgs<ExtArgs>
    User?: boolean | Tenant$UserArgs<ExtArgs>
    _count?: boolean | TenantCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TenantIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type TenantIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $TenantPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Tenant"
    objects: {
      clients: Prisma.$ClientPayload<ExtArgs>[]
      productionOrders: Prisma.$ProductionOrderPayload<ExtArgs>[]
      User: Prisma.$UserPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      domain: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["tenant"]>
    composites: {}
  }

  type TenantGetPayload<S extends boolean | null | undefined | TenantDefaultArgs> = $Result.GetResult<Prisma.$TenantPayload, S>

  type TenantCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TenantFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TenantCountAggregateInputType | true
    }

  export interface TenantDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Tenant'], meta: { name: 'Tenant' } }
    /**
     * Find zero or one Tenant that matches the filter.
     * @param {TenantFindUniqueArgs} args - Arguments to find a Tenant
     * @example
     * // Get one Tenant
     * const tenant = await prisma.tenant.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TenantFindUniqueArgs>(args: SelectSubset<T, TenantFindUniqueArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tenant that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TenantFindUniqueOrThrowArgs} args - Arguments to find a Tenant
     * @example
     * // Get one Tenant
     * const tenant = await prisma.tenant.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TenantFindUniqueOrThrowArgs>(args: SelectSubset<T, TenantFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tenant that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TenantFindFirstArgs} args - Arguments to find a Tenant
     * @example
     * // Get one Tenant
     * const tenant = await prisma.tenant.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TenantFindFirstArgs>(args?: SelectSubset<T, TenantFindFirstArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tenant that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TenantFindFirstOrThrowArgs} args - Arguments to find a Tenant
     * @example
     * // Get one Tenant
     * const tenant = await prisma.tenant.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TenantFindFirstOrThrowArgs>(args?: SelectSubset<T, TenantFindFirstOrThrowArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tenants that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TenantFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tenants
     * const tenants = await prisma.tenant.findMany()
     * 
     * // Get first 10 Tenants
     * const tenants = await prisma.tenant.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tenantWithIdOnly = await prisma.tenant.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TenantFindManyArgs>(args?: SelectSubset<T, TenantFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tenant.
     * @param {TenantCreateArgs} args - Arguments to create a Tenant.
     * @example
     * // Create one Tenant
     * const Tenant = await prisma.tenant.create({
     *   data: {
     *     // ... data to create a Tenant
     *   }
     * })
     * 
     */
    create<T extends TenantCreateArgs>(args: SelectSubset<T, TenantCreateArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tenants.
     * @param {TenantCreateManyArgs} args - Arguments to create many Tenants.
     * @example
     * // Create many Tenants
     * const tenant = await prisma.tenant.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TenantCreateManyArgs>(args?: SelectSubset<T, TenantCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tenants and returns the data saved in the database.
     * @param {TenantCreateManyAndReturnArgs} args - Arguments to create many Tenants.
     * @example
     * // Create many Tenants
     * const tenant = await prisma.tenant.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tenants and only return the `id`
     * const tenantWithIdOnly = await prisma.tenant.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TenantCreateManyAndReturnArgs>(args?: SelectSubset<T, TenantCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Tenant.
     * @param {TenantDeleteArgs} args - Arguments to delete one Tenant.
     * @example
     * // Delete one Tenant
     * const Tenant = await prisma.tenant.delete({
     *   where: {
     *     // ... filter to delete one Tenant
     *   }
     * })
     * 
     */
    delete<T extends TenantDeleteArgs>(args: SelectSubset<T, TenantDeleteArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tenant.
     * @param {TenantUpdateArgs} args - Arguments to update one Tenant.
     * @example
     * // Update one Tenant
     * const tenant = await prisma.tenant.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TenantUpdateArgs>(args: SelectSubset<T, TenantUpdateArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tenants.
     * @param {TenantDeleteManyArgs} args - Arguments to filter Tenants to delete.
     * @example
     * // Delete a few Tenants
     * const { count } = await prisma.tenant.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TenantDeleteManyArgs>(args?: SelectSubset<T, TenantDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tenants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TenantUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tenants
     * const tenant = await prisma.tenant.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TenantUpdateManyArgs>(args: SelectSubset<T, TenantUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tenants and returns the data updated in the database.
     * @param {TenantUpdateManyAndReturnArgs} args - Arguments to update many Tenants.
     * @example
     * // Update many Tenants
     * const tenant = await prisma.tenant.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tenants and only return the `id`
     * const tenantWithIdOnly = await prisma.tenant.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TenantUpdateManyAndReturnArgs>(args: SelectSubset<T, TenantUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Tenant.
     * @param {TenantUpsertArgs} args - Arguments to update or create a Tenant.
     * @example
     * // Update or create a Tenant
     * const tenant = await prisma.tenant.upsert({
     *   create: {
     *     // ... data to create a Tenant
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tenant we want to update
     *   }
     * })
     */
    upsert<T extends TenantUpsertArgs>(args: SelectSubset<T, TenantUpsertArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tenants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TenantCountArgs} args - Arguments to filter Tenants to count.
     * @example
     * // Count the number of Tenants
     * const count = await prisma.tenant.count({
     *   where: {
     *     // ... the filter for the Tenants we want to count
     *   }
     * })
    **/
    count<T extends TenantCountArgs>(
      args?: Subset<T, TenantCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TenantCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tenant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TenantAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TenantAggregateArgs>(args: Subset<T, TenantAggregateArgs>): Prisma.PrismaPromise<GetTenantAggregateType<T>>

    /**
     * Group by Tenant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TenantGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TenantGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TenantGroupByArgs['orderBy'] }
        : { orderBy?: TenantGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TenantGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTenantGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Tenant model
   */
  readonly fields: TenantFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Tenant.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TenantClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    clients<T extends Tenant$clientsArgs<ExtArgs> = {}>(args?: Subset<T, Tenant$clientsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    productionOrders<T extends Tenant$productionOrdersArgs<ExtArgs> = {}>(args?: Subset<T, Tenant$productionOrdersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductionOrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    User<T extends Tenant$UserArgs<ExtArgs> = {}>(args?: Subset<T, Tenant$UserArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Tenant model
   */
  interface TenantFieldRefs {
    readonly id: FieldRef<"Tenant", 'String'>
    readonly name: FieldRef<"Tenant", 'String'>
    readonly domain: FieldRef<"Tenant", 'String'>
    readonly createdAt: FieldRef<"Tenant", 'DateTime'>
    readonly updatedAt: FieldRef<"Tenant", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Tenant findUnique
   */
  export type TenantFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tenant
     */
    omit?: TenantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantInclude<ExtArgs> | null
    /**
     * Filter, which Tenant to fetch.
     */
    where: TenantWhereUniqueInput
  }

  /**
   * Tenant findUniqueOrThrow
   */
  export type TenantFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tenant
     */
    omit?: TenantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantInclude<ExtArgs> | null
    /**
     * Filter, which Tenant to fetch.
     */
    where: TenantWhereUniqueInput
  }

  /**
   * Tenant findFirst
   */
  export type TenantFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tenant
     */
    omit?: TenantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantInclude<ExtArgs> | null
    /**
     * Filter, which Tenant to fetch.
     */
    where?: TenantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tenants to fetch.
     */
    orderBy?: TenantOrderByWithRelationInput | TenantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tenants.
     */
    cursor?: TenantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tenants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tenants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tenants.
     */
    distinct?: TenantScalarFieldEnum | TenantScalarFieldEnum[]
  }

  /**
   * Tenant findFirstOrThrow
   */
  export type TenantFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tenant
     */
    omit?: TenantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantInclude<ExtArgs> | null
    /**
     * Filter, which Tenant to fetch.
     */
    where?: TenantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tenants to fetch.
     */
    orderBy?: TenantOrderByWithRelationInput | TenantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tenants.
     */
    cursor?: TenantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tenants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tenants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tenants.
     */
    distinct?: TenantScalarFieldEnum | TenantScalarFieldEnum[]
  }

  /**
   * Tenant findMany
   */
  export type TenantFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tenant
     */
    omit?: TenantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantInclude<ExtArgs> | null
    /**
     * Filter, which Tenants to fetch.
     */
    where?: TenantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tenants to fetch.
     */
    orderBy?: TenantOrderByWithRelationInput | TenantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tenants.
     */
    cursor?: TenantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tenants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tenants.
     */
    skip?: number
    distinct?: TenantScalarFieldEnum | TenantScalarFieldEnum[]
  }

  /**
   * Tenant create
   */
  export type TenantCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tenant
     */
    omit?: TenantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantInclude<ExtArgs> | null
    /**
     * The data needed to create a Tenant.
     */
    data: XOR<TenantCreateInput, TenantUncheckedCreateInput>
  }

  /**
   * Tenant createMany
   */
  export type TenantCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tenants.
     */
    data: TenantCreateManyInput | TenantCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Tenant createManyAndReturn
   */
  export type TenantCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Tenant
     */
    omit?: TenantOmit<ExtArgs> | null
    /**
     * The data used to create many Tenants.
     */
    data: TenantCreateManyInput | TenantCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Tenant update
   */
  export type TenantUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tenant
     */
    omit?: TenantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantInclude<ExtArgs> | null
    /**
     * The data needed to update a Tenant.
     */
    data: XOR<TenantUpdateInput, TenantUncheckedUpdateInput>
    /**
     * Choose, which Tenant to update.
     */
    where: TenantWhereUniqueInput
  }

  /**
   * Tenant updateMany
   */
  export type TenantUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tenants.
     */
    data: XOR<TenantUpdateManyMutationInput, TenantUncheckedUpdateManyInput>
    /**
     * Filter which Tenants to update
     */
    where?: TenantWhereInput
    /**
     * Limit how many Tenants to update.
     */
    limit?: number
  }

  /**
   * Tenant updateManyAndReturn
   */
  export type TenantUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Tenant
     */
    omit?: TenantOmit<ExtArgs> | null
    /**
     * The data used to update Tenants.
     */
    data: XOR<TenantUpdateManyMutationInput, TenantUncheckedUpdateManyInput>
    /**
     * Filter which Tenants to update
     */
    where?: TenantWhereInput
    /**
     * Limit how many Tenants to update.
     */
    limit?: number
  }

  /**
   * Tenant upsert
   */
  export type TenantUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tenant
     */
    omit?: TenantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantInclude<ExtArgs> | null
    /**
     * The filter to search for the Tenant to update in case it exists.
     */
    where: TenantWhereUniqueInput
    /**
     * In case the Tenant found by the `where` argument doesn't exist, create a new Tenant with this data.
     */
    create: XOR<TenantCreateInput, TenantUncheckedCreateInput>
    /**
     * In case the Tenant was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TenantUpdateInput, TenantUncheckedUpdateInput>
  }

  /**
   * Tenant delete
   */
  export type TenantDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tenant
     */
    omit?: TenantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantInclude<ExtArgs> | null
    /**
     * Filter which Tenant to delete.
     */
    where: TenantWhereUniqueInput
  }

  /**
   * Tenant deleteMany
   */
  export type TenantDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tenants to delete
     */
    where?: TenantWhereInput
    /**
     * Limit how many Tenants to delete.
     */
    limit?: number
  }

  /**
   * Tenant.clients
   */
  export type Tenant$clientsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    where?: ClientWhereInput
    orderBy?: ClientOrderByWithRelationInput | ClientOrderByWithRelationInput[]
    cursor?: ClientWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ClientScalarFieldEnum | ClientScalarFieldEnum[]
  }

  /**
   * Tenant.productionOrders
   */
  export type Tenant$productionOrdersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductionOrder
     */
    select?: ProductionOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductionOrder
     */
    omit?: ProductionOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductionOrderInclude<ExtArgs> | null
    where?: ProductionOrderWhereInput
    orderBy?: ProductionOrderOrderByWithRelationInput | ProductionOrderOrderByWithRelationInput[]
    cursor?: ProductionOrderWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductionOrderScalarFieldEnum | ProductionOrderScalarFieldEnum[]
  }

  /**
   * Tenant.User
   */
  export type Tenant$UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * Tenant without action
   */
  export type TenantDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tenant
     */
    omit?: TenantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantInclude<ExtArgs> | null
  }


  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    tenantId: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    tenantId: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    tenantId: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    tenantId?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    tenantId?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    tenantId?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    name: string | null
    email: string
    tenantId: string
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    tenantId?: boolean
    profile?: boolean | User$profileArgs<ExtArgs>
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    tenantId?: boolean
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    tenantId?: boolean
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    tenantId?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "tenantId", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    profile?: boolean | User$profileArgs<ExtArgs>
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
  }
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      profile: Prisma.$ProfilePayload<ExtArgs> | null
      tenant: Prisma.$TenantPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string | null
      email: string
      tenantId: string
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    profile<T extends User$profileArgs<ExtArgs> = {}>(args?: Subset<T, User$profileArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    tenant<T extends TenantDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TenantDefaultArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly tenantId: FieldRef<"User", 'String'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.profile
   */
  export type User$profileArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    where?: ProfileWhereInput
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Profile
   */

  export type AggregateProfile = {
    _count: ProfileCountAggregateOutputType | null
    _avg: ProfileAvgAggregateOutputType | null
    _sum: ProfileSumAggregateOutputType | null
    _min: ProfileMinAggregateOutputType | null
    _max: ProfileMaxAggregateOutputType | null
  }

  export type ProfileAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type ProfileSumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type ProfileMinAggregateOutputType = {
    id: number | null
    userId: number | null
    role: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProfileMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    role: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProfileCountAggregateOutputType = {
    id: number
    userId: number
    role: number
    type: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ProfileAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type ProfileSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type ProfileMinAggregateInputType = {
    id?: true
    userId?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProfileMaxAggregateInputType = {
    id?: true
    userId?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProfileCountAggregateInputType = {
    id?: true
    userId?: true
    role?: true
    type?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ProfileAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Profile to aggregate.
     */
    where?: ProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profiles to fetch.
     */
    orderBy?: ProfileOrderByWithRelationInput | ProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Profiles
    **/
    _count?: true | ProfileCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProfileAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProfileSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProfileMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProfileMaxAggregateInputType
  }

  export type GetProfileAggregateType<T extends ProfileAggregateArgs> = {
        [P in keyof T & keyof AggregateProfile]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProfile[P]>
      : GetScalarType<T[P], AggregateProfile[P]>
  }




  export type ProfileGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProfileWhereInput
    orderBy?: ProfileOrderByWithAggregationInput | ProfileOrderByWithAggregationInput[]
    by: ProfileScalarFieldEnum[] | ProfileScalarFieldEnum
    having?: ProfileScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProfileCountAggregateInputType | true
    _avg?: ProfileAvgAggregateInputType
    _sum?: ProfileSumAggregateInputType
    _min?: ProfileMinAggregateInputType
    _max?: ProfileMaxAggregateInputType
  }

  export type ProfileGroupByOutputType = {
    id: number
    userId: number
    role: string
    type: $Enums.ProfileType[]
    createdAt: Date
    updatedAt: Date
    _count: ProfileCountAggregateOutputType | null
    _avg: ProfileAvgAggregateOutputType | null
    _sum: ProfileSumAggregateOutputType | null
    _min: ProfileMinAggregateOutputType | null
    _max: ProfileMaxAggregateOutputType | null
  }

  type GetProfileGroupByPayload<T extends ProfileGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProfileGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProfileGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProfileGroupByOutputType[P]>
            : GetScalarType<T[P], ProfileGroupByOutputType[P]>
        }
      >
    >


  export type ProfileSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    role?: boolean
    type?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["profile"]>

  export type ProfileSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    role?: boolean
    type?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["profile"]>

  export type ProfileSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    role?: boolean
    type?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["profile"]>

  export type ProfileSelectScalar = {
    id?: boolean
    userId?: boolean
    role?: boolean
    type?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ProfileOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "role" | "type" | "createdAt" | "updatedAt", ExtArgs["result"]["profile"]>
  export type ProfileInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ProfileIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ProfileIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ProfilePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Profile"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      role: string
      type: $Enums.ProfileType[]
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["profile"]>
    composites: {}
  }

  type ProfileGetPayload<S extends boolean | null | undefined | ProfileDefaultArgs> = $Result.GetResult<Prisma.$ProfilePayload, S>

  type ProfileCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProfileFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProfileCountAggregateInputType | true
    }

  export interface ProfileDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Profile'], meta: { name: 'Profile' } }
    /**
     * Find zero or one Profile that matches the filter.
     * @param {ProfileFindUniqueArgs} args - Arguments to find a Profile
     * @example
     * // Get one Profile
     * const profile = await prisma.profile.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProfileFindUniqueArgs>(args: SelectSubset<T, ProfileFindUniqueArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Profile that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProfileFindUniqueOrThrowArgs} args - Arguments to find a Profile
     * @example
     * // Get one Profile
     * const profile = await prisma.profile.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProfileFindUniqueOrThrowArgs>(args: SelectSubset<T, ProfileFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Profile that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileFindFirstArgs} args - Arguments to find a Profile
     * @example
     * // Get one Profile
     * const profile = await prisma.profile.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProfileFindFirstArgs>(args?: SelectSubset<T, ProfileFindFirstArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Profile that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileFindFirstOrThrowArgs} args - Arguments to find a Profile
     * @example
     * // Get one Profile
     * const profile = await prisma.profile.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProfileFindFirstOrThrowArgs>(args?: SelectSubset<T, ProfileFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Profiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Profiles
     * const profiles = await prisma.profile.findMany()
     * 
     * // Get first 10 Profiles
     * const profiles = await prisma.profile.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const profileWithIdOnly = await prisma.profile.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProfileFindManyArgs>(args?: SelectSubset<T, ProfileFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Profile.
     * @param {ProfileCreateArgs} args - Arguments to create a Profile.
     * @example
     * // Create one Profile
     * const Profile = await prisma.profile.create({
     *   data: {
     *     // ... data to create a Profile
     *   }
     * })
     * 
     */
    create<T extends ProfileCreateArgs>(args: SelectSubset<T, ProfileCreateArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Profiles.
     * @param {ProfileCreateManyArgs} args - Arguments to create many Profiles.
     * @example
     * // Create many Profiles
     * const profile = await prisma.profile.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProfileCreateManyArgs>(args?: SelectSubset<T, ProfileCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Profiles and returns the data saved in the database.
     * @param {ProfileCreateManyAndReturnArgs} args - Arguments to create many Profiles.
     * @example
     * // Create many Profiles
     * const profile = await prisma.profile.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Profiles and only return the `id`
     * const profileWithIdOnly = await prisma.profile.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProfileCreateManyAndReturnArgs>(args?: SelectSubset<T, ProfileCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Profile.
     * @param {ProfileDeleteArgs} args - Arguments to delete one Profile.
     * @example
     * // Delete one Profile
     * const Profile = await prisma.profile.delete({
     *   where: {
     *     // ... filter to delete one Profile
     *   }
     * })
     * 
     */
    delete<T extends ProfileDeleteArgs>(args: SelectSubset<T, ProfileDeleteArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Profile.
     * @param {ProfileUpdateArgs} args - Arguments to update one Profile.
     * @example
     * // Update one Profile
     * const profile = await prisma.profile.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProfileUpdateArgs>(args: SelectSubset<T, ProfileUpdateArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Profiles.
     * @param {ProfileDeleteManyArgs} args - Arguments to filter Profiles to delete.
     * @example
     * // Delete a few Profiles
     * const { count } = await prisma.profile.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProfileDeleteManyArgs>(args?: SelectSubset<T, ProfileDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Profiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Profiles
     * const profile = await prisma.profile.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProfileUpdateManyArgs>(args: SelectSubset<T, ProfileUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Profiles and returns the data updated in the database.
     * @param {ProfileUpdateManyAndReturnArgs} args - Arguments to update many Profiles.
     * @example
     * // Update many Profiles
     * const profile = await prisma.profile.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Profiles and only return the `id`
     * const profileWithIdOnly = await prisma.profile.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProfileUpdateManyAndReturnArgs>(args: SelectSubset<T, ProfileUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Profile.
     * @param {ProfileUpsertArgs} args - Arguments to update or create a Profile.
     * @example
     * // Update or create a Profile
     * const profile = await prisma.profile.upsert({
     *   create: {
     *     // ... data to create a Profile
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Profile we want to update
     *   }
     * })
     */
    upsert<T extends ProfileUpsertArgs>(args: SelectSubset<T, ProfileUpsertArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Profiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileCountArgs} args - Arguments to filter Profiles to count.
     * @example
     * // Count the number of Profiles
     * const count = await prisma.profile.count({
     *   where: {
     *     // ... the filter for the Profiles we want to count
     *   }
     * })
    **/
    count<T extends ProfileCountArgs>(
      args?: Subset<T, ProfileCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProfileCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Profile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProfileAggregateArgs>(args: Subset<T, ProfileAggregateArgs>): Prisma.PrismaPromise<GetProfileAggregateType<T>>

    /**
     * Group by Profile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProfileGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProfileGroupByArgs['orderBy'] }
        : { orderBy?: ProfileGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProfileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProfileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Profile model
   */
  readonly fields: ProfileFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Profile.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProfileClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Profile model
   */
  interface ProfileFieldRefs {
    readonly id: FieldRef<"Profile", 'Int'>
    readonly userId: FieldRef<"Profile", 'Int'>
    readonly role: FieldRef<"Profile", 'String'>
    readonly type: FieldRef<"Profile", 'ProfileType[]'>
    readonly createdAt: FieldRef<"Profile", 'DateTime'>
    readonly updatedAt: FieldRef<"Profile", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Profile findUnique
   */
  export type ProfileFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter, which Profile to fetch.
     */
    where: ProfileWhereUniqueInput
  }

  /**
   * Profile findUniqueOrThrow
   */
  export type ProfileFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter, which Profile to fetch.
     */
    where: ProfileWhereUniqueInput
  }

  /**
   * Profile findFirst
   */
  export type ProfileFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter, which Profile to fetch.
     */
    where?: ProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profiles to fetch.
     */
    orderBy?: ProfileOrderByWithRelationInput | ProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Profiles.
     */
    cursor?: ProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Profiles.
     */
    distinct?: ProfileScalarFieldEnum | ProfileScalarFieldEnum[]
  }

  /**
   * Profile findFirstOrThrow
   */
  export type ProfileFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter, which Profile to fetch.
     */
    where?: ProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profiles to fetch.
     */
    orderBy?: ProfileOrderByWithRelationInput | ProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Profiles.
     */
    cursor?: ProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Profiles.
     */
    distinct?: ProfileScalarFieldEnum | ProfileScalarFieldEnum[]
  }

  /**
   * Profile findMany
   */
  export type ProfileFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter, which Profiles to fetch.
     */
    where?: ProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profiles to fetch.
     */
    orderBy?: ProfileOrderByWithRelationInput | ProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Profiles.
     */
    cursor?: ProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profiles.
     */
    skip?: number
    distinct?: ProfileScalarFieldEnum | ProfileScalarFieldEnum[]
  }

  /**
   * Profile create
   */
  export type ProfileCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * The data needed to create a Profile.
     */
    data: XOR<ProfileCreateInput, ProfileUncheckedCreateInput>
  }

  /**
   * Profile createMany
   */
  export type ProfileCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Profiles.
     */
    data: ProfileCreateManyInput | ProfileCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Profile createManyAndReturn
   */
  export type ProfileCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * The data used to create many Profiles.
     */
    data: ProfileCreateManyInput | ProfileCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Profile update
   */
  export type ProfileUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * The data needed to update a Profile.
     */
    data: XOR<ProfileUpdateInput, ProfileUncheckedUpdateInput>
    /**
     * Choose, which Profile to update.
     */
    where: ProfileWhereUniqueInput
  }

  /**
   * Profile updateMany
   */
  export type ProfileUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Profiles.
     */
    data: XOR<ProfileUpdateManyMutationInput, ProfileUncheckedUpdateManyInput>
    /**
     * Filter which Profiles to update
     */
    where?: ProfileWhereInput
    /**
     * Limit how many Profiles to update.
     */
    limit?: number
  }

  /**
   * Profile updateManyAndReturn
   */
  export type ProfileUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * The data used to update Profiles.
     */
    data: XOR<ProfileUpdateManyMutationInput, ProfileUncheckedUpdateManyInput>
    /**
     * Filter which Profiles to update
     */
    where?: ProfileWhereInput
    /**
     * Limit how many Profiles to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Profile upsert
   */
  export type ProfileUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * The filter to search for the Profile to update in case it exists.
     */
    where: ProfileWhereUniqueInput
    /**
     * In case the Profile found by the `where` argument doesn't exist, create a new Profile with this data.
     */
    create: XOR<ProfileCreateInput, ProfileUncheckedCreateInput>
    /**
     * In case the Profile was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProfileUpdateInput, ProfileUncheckedUpdateInput>
  }

  /**
   * Profile delete
   */
  export type ProfileDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter which Profile to delete.
     */
    where: ProfileWhereUniqueInput
  }

  /**
   * Profile deleteMany
   */
  export type ProfileDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Profiles to delete
     */
    where?: ProfileWhereInput
    /**
     * Limit how many Profiles to delete.
     */
    limit?: number
  }

  /**
   * Profile without action
   */
  export type ProfileDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
  }


  /**
   * Model Client
   */

  export type AggregateClient = {
    _count: ClientCountAggregateOutputType | null
    _min: ClientMinAggregateOutputType | null
    _max: ClientMaxAggregateOutputType | null
  }

  export type ClientMinAggregateOutputType = {
    id: string | null
    name: string | null
    identification: string | null
    type: $Enums.ClientType | null
    createdAt: Date | null
    updatedAt: Date | null
    tenantId: string | null
  }

  export type ClientMaxAggregateOutputType = {
    id: string | null
    name: string | null
    identification: string | null
    type: $Enums.ClientType | null
    createdAt: Date | null
    updatedAt: Date | null
    tenantId: string | null
  }

  export type ClientCountAggregateOutputType = {
    id: number
    name: number
    identification: number
    type: number
    createdAt: number
    updatedAt: number
    tenantId: number
    _all: number
  }


  export type ClientMinAggregateInputType = {
    id?: true
    name?: true
    identification?: true
    type?: true
    createdAt?: true
    updatedAt?: true
    tenantId?: true
  }

  export type ClientMaxAggregateInputType = {
    id?: true
    name?: true
    identification?: true
    type?: true
    createdAt?: true
    updatedAt?: true
    tenantId?: true
  }

  export type ClientCountAggregateInputType = {
    id?: true
    name?: true
    identification?: true
    type?: true
    createdAt?: true
    updatedAt?: true
    tenantId?: true
    _all?: true
  }

  export type ClientAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Client to aggregate.
     */
    where?: ClientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clients to fetch.
     */
    orderBy?: ClientOrderByWithRelationInput | ClientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ClientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Clients
    **/
    _count?: true | ClientCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ClientMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ClientMaxAggregateInputType
  }

  export type GetClientAggregateType<T extends ClientAggregateArgs> = {
        [P in keyof T & keyof AggregateClient]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateClient[P]>
      : GetScalarType<T[P], AggregateClient[P]>
  }




  export type ClientGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClientWhereInput
    orderBy?: ClientOrderByWithAggregationInput | ClientOrderByWithAggregationInput[]
    by: ClientScalarFieldEnum[] | ClientScalarFieldEnum
    having?: ClientScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ClientCountAggregateInputType | true
    _min?: ClientMinAggregateInputType
    _max?: ClientMaxAggregateInputType
  }

  export type ClientGroupByOutputType = {
    id: string
    name: string
    identification: string
    type: $Enums.ClientType
    createdAt: Date
    updatedAt: Date
    tenantId: string
    _count: ClientCountAggregateOutputType | null
    _min: ClientMinAggregateOutputType | null
    _max: ClientMaxAggregateOutputType | null
  }

  type GetClientGroupByPayload<T extends ClientGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ClientGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ClientGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ClientGroupByOutputType[P]>
            : GetScalarType<T[P], ClientGroupByOutputType[P]>
        }
      >
    >


  export type ClientSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    identification?: boolean
    type?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tenantId?: boolean
    productionOrders?: boolean | Client$productionOrdersArgs<ExtArgs>
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
    _count?: boolean | ClientCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["client"]>

  export type ClientSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    identification?: boolean
    type?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tenantId?: boolean
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["client"]>

  export type ClientSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    identification?: boolean
    type?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tenantId?: boolean
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["client"]>

  export type ClientSelectScalar = {
    id?: boolean
    name?: boolean
    identification?: boolean
    type?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tenantId?: boolean
  }

  export type ClientOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "identification" | "type" | "createdAt" | "updatedAt" | "tenantId", ExtArgs["result"]["client"]>
  export type ClientInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    productionOrders?: boolean | Client$productionOrdersArgs<ExtArgs>
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
    _count?: boolean | ClientCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ClientIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
  }
  export type ClientIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
  }

  export type $ClientPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Client"
    objects: {
      productionOrders: Prisma.$ProductionOrderPayload<ExtArgs>[]
      tenant: Prisma.$TenantPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      identification: string
      type: $Enums.ClientType
      createdAt: Date
      updatedAt: Date
      tenantId: string
    }, ExtArgs["result"]["client"]>
    composites: {}
  }

  type ClientGetPayload<S extends boolean | null | undefined | ClientDefaultArgs> = $Result.GetResult<Prisma.$ClientPayload, S>

  type ClientCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ClientFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ClientCountAggregateInputType | true
    }

  export interface ClientDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Client'], meta: { name: 'Client' } }
    /**
     * Find zero or one Client that matches the filter.
     * @param {ClientFindUniqueArgs} args - Arguments to find a Client
     * @example
     * // Get one Client
     * const client = await prisma.client.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ClientFindUniqueArgs>(args: SelectSubset<T, ClientFindUniqueArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Client that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ClientFindUniqueOrThrowArgs} args - Arguments to find a Client
     * @example
     * // Get one Client
     * const client = await prisma.client.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ClientFindUniqueOrThrowArgs>(args: SelectSubset<T, ClientFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Client that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientFindFirstArgs} args - Arguments to find a Client
     * @example
     * // Get one Client
     * const client = await prisma.client.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ClientFindFirstArgs>(args?: SelectSubset<T, ClientFindFirstArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Client that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientFindFirstOrThrowArgs} args - Arguments to find a Client
     * @example
     * // Get one Client
     * const client = await prisma.client.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ClientFindFirstOrThrowArgs>(args?: SelectSubset<T, ClientFindFirstOrThrowArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Clients that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Clients
     * const clients = await prisma.client.findMany()
     * 
     * // Get first 10 Clients
     * const clients = await prisma.client.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const clientWithIdOnly = await prisma.client.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ClientFindManyArgs>(args?: SelectSubset<T, ClientFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Client.
     * @param {ClientCreateArgs} args - Arguments to create a Client.
     * @example
     * // Create one Client
     * const Client = await prisma.client.create({
     *   data: {
     *     // ... data to create a Client
     *   }
     * })
     * 
     */
    create<T extends ClientCreateArgs>(args: SelectSubset<T, ClientCreateArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Clients.
     * @param {ClientCreateManyArgs} args - Arguments to create many Clients.
     * @example
     * // Create many Clients
     * const client = await prisma.client.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ClientCreateManyArgs>(args?: SelectSubset<T, ClientCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Clients and returns the data saved in the database.
     * @param {ClientCreateManyAndReturnArgs} args - Arguments to create many Clients.
     * @example
     * // Create many Clients
     * const client = await prisma.client.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Clients and only return the `id`
     * const clientWithIdOnly = await prisma.client.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ClientCreateManyAndReturnArgs>(args?: SelectSubset<T, ClientCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Client.
     * @param {ClientDeleteArgs} args - Arguments to delete one Client.
     * @example
     * // Delete one Client
     * const Client = await prisma.client.delete({
     *   where: {
     *     // ... filter to delete one Client
     *   }
     * })
     * 
     */
    delete<T extends ClientDeleteArgs>(args: SelectSubset<T, ClientDeleteArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Client.
     * @param {ClientUpdateArgs} args - Arguments to update one Client.
     * @example
     * // Update one Client
     * const client = await prisma.client.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ClientUpdateArgs>(args: SelectSubset<T, ClientUpdateArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Clients.
     * @param {ClientDeleteManyArgs} args - Arguments to filter Clients to delete.
     * @example
     * // Delete a few Clients
     * const { count } = await prisma.client.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ClientDeleteManyArgs>(args?: SelectSubset<T, ClientDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Clients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Clients
     * const client = await prisma.client.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ClientUpdateManyArgs>(args: SelectSubset<T, ClientUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Clients and returns the data updated in the database.
     * @param {ClientUpdateManyAndReturnArgs} args - Arguments to update many Clients.
     * @example
     * // Update many Clients
     * const client = await prisma.client.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Clients and only return the `id`
     * const clientWithIdOnly = await prisma.client.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ClientUpdateManyAndReturnArgs>(args: SelectSubset<T, ClientUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Client.
     * @param {ClientUpsertArgs} args - Arguments to update or create a Client.
     * @example
     * // Update or create a Client
     * const client = await prisma.client.upsert({
     *   create: {
     *     // ... data to create a Client
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Client we want to update
     *   }
     * })
     */
    upsert<T extends ClientUpsertArgs>(args: SelectSubset<T, ClientUpsertArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Clients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientCountArgs} args - Arguments to filter Clients to count.
     * @example
     * // Count the number of Clients
     * const count = await prisma.client.count({
     *   where: {
     *     // ... the filter for the Clients we want to count
     *   }
     * })
    **/
    count<T extends ClientCountArgs>(
      args?: Subset<T, ClientCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClientCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Client.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ClientAggregateArgs>(args: Subset<T, ClientAggregateArgs>): Prisma.PrismaPromise<GetClientAggregateType<T>>

    /**
     * Group by Client.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ClientGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ClientGroupByArgs['orderBy'] }
        : { orderBy?: ClientGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ClientGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClientGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Client model
   */
  readonly fields: ClientFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Client.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ClientClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    productionOrders<T extends Client$productionOrdersArgs<ExtArgs> = {}>(args?: Subset<T, Client$productionOrdersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductionOrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    tenant<T extends TenantDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TenantDefaultArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Client model
   */
  interface ClientFieldRefs {
    readonly id: FieldRef<"Client", 'String'>
    readonly name: FieldRef<"Client", 'String'>
    readonly identification: FieldRef<"Client", 'String'>
    readonly type: FieldRef<"Client", 'ClientType'>
    readonly createdAt: FieldRef<"Client", 'DateTime'>
    readonly updatedAt: FieldRef<"Client", 'DateTime'>
    readonly tenantId: FieldRef<"Client", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Client findUnique
   */
  export type ClientFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * Filter, which Client to fetch.
     */
    where: ClientWhereUniqueInput
  }

  /**
   * Client findUniqueOrThrow
   */
  export type ClientFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * Filter, which Client to fetch.
     */
    where: ClientWhereUniqueInput
  }

  /**
   * Client findFirst
   */
  export type ClientFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * Filter, which Client to fetch.
     */
    where?: ClientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clients to fetch.
     */
    orderBy?: ClientOrderByWithRelationInput | ClientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Clients.
     */
    cursor?: ClientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Clients.
     */
    distinct?: ClientScalarFieldEnum | ClientScalarFieldEnum[]
  }

  /**
   * Client findFirstOrThrow
   */
  export type ClientFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * Filter, which Client to fetch.
     */
    where?: ClientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clients to fetch.
     */
    orderBy?: ClientOrderByWithRelationInput | ClientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Clients.
     */
    cursor?: ClientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Clients.
     */
    distinct?: ClientScalarFieldEnum | ClientScalarFieldEnum[]
  }

  /**
   * Client findMany
   */
  export type ClientFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * Filter, which Clients to fetch.
     */
    where?: ClientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clients to fetch.
     */
    orderBy?: ClientOrderByWithRelationInput | ClientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Clients.
     */
    cursor?: ClientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clients.
     */
    skip?: number
    distinct?: ClientScalarFieldEnum | ClientScalarFieldEnum[]
  }

  /**
   * Client create
   */
  export type ClientCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * The data needed to create a Client.
     */
    data: XOR<ClientCreateInput, ClientUncheckedCreateInput>
  }

  /**
   * Client createMany
   */
  export type ClientCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Clients.
     */
    data: ClientCreateManyInput | ClientCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Client createManyAndReturn
   */
  export type ClientCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * The data used to create many Clients.
     */
    data: ClientCreateManyInput | ClientCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Client update
   */
  export type ClientUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * The data needed to update a Client.
     */
    data: XOR<ClientUpdateInput, ClientUncheckedUpdateInput>
    /**
     * Choose, which Client to update.
     */
    where: ClientWhereUniqueInput
  }

  /**
   * Client updateMany
   */
  export type ClientUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Clients.
     */
    data: XOR<ClientUpdateManyMutationInput, ClientUncheckedUpdateManyInput>
    /**
     * Filter which Clients to update
     */
    where?: ClientWhereInput
    /**
     * Limit how many Clients to update.
     */
    limit?: number
  }

  /**
   * Client updateManyAndReturn
   */
  export type ClientUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * The data used to update Clients.
     */
    data: XOR<ClientUpdateManyMutationInput, ClientUncheckedUpdateManyInput>
    /**
     * Filter which Clients to update
     */
    where?: ClientWhereInput
    /**
     * Limit how many Clients to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Client upsert
   */
  export type ClientUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * The filter to search for the Client to update in case it exists.
     */
    where: ClientWhereUniqueInput
    /**
     * In case the Client found by the `where` argument doesn't exist, create a new Client with this data.
     */
    create: XOR<ClientCreateInput, ClientUncheckedCreateInput>
    /**
     * In case the Client was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ClientUpdateInput, ClientUncheckedUpdateInput>
  }

  /**
   * Client delete
   */
  export type ClientDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * Filter which Client to delete.
     */
    where: ClientWhereUniqueInput
  }

  /**
   * Client deleteMany
   */
  export type ClientDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Clients to delete
     */
    where?: ClientWhereInput
    /**
     * Limit how many Clients to delete.
     */
    limit?: number
  }

  /**
   * Client.productionOrders
   */
  export type Client$productionOrdersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductionOrder
     */
    select?: ProductionOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductionOrder
     */
    omit?: ProductionOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductionOrderInclude<ExtArgs> | null
    where?: ProductionOrderWhereInput
    orderBy?: ProductionOrderOrderByWithRelationInput | ProductionOrderOrderByWithRelationInput[]
    cursor?: ProductionOrderWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductionOrderScalarFieldEnum | ProductionOrderScalarFieldEnum[]
  }

  /**
   * Client without action
   */
  export type ClientDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
  }


  /**
   * Model RawMaterial
   */

  export type AggregateRawMaterial = {
    _count: RawMaterialCountAggregateOutputType | null
    _avg: RawMaterialAvgAggregateOutputType | null
    _sum: RawMaterialSumAggregateOutputType | null
    _min: RawMaterialMinAggregateOutputType | null
    _max: RawMaterialMaxAggregateOutputType | null
  }

  export type RawMaterialAvgAggregateOutputType = {
    id: number | null
    quantity: number | null
    rawMaterialTypeId: number | null
  }

  export type RawMaterialSumAggregateOutputType = {
    id: number | null
    quantity: number | null
    rawMaterialTypeId: number | null
  }

  export type RawMaterialMinAggregateOutputType = {
    id: number | null
    name: string | null
    lot: string | null
    unit: string | null
    quantity: number | null
    rawMaterialTypeId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RawMaterialMaxAggregateOutputType = {
    id: number | null
    name: string | null
    lot: string | null
    unit: string | null
    quantity: number | null
    rawMaterialTypeId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RawMaterialCountAggregateOutputType = {
    id: number
    name: number
    lot: number
    unit: number
    quantity: number
    rawMaterialTypeId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type RawMaterialAvgAggregateInputType = {
    id?: true
    quantity?: true
    rawMaterialTypeId?: true
  }

  export type RawMaterialSumAggregateInputType = {
    id?: true
    quantity?: true
    rawMaterialTypeId?: true
  }

  export type RawMaterialMinAggregateInputType = {
    id?: true
    name?: true
    lot?: true
    unit?: true
    quantity?: true
    rawMaterialTypeId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RawMaterialMaxAggregateInputType = {
    id?: true
    name?: true
    lot?: true
    unit?: true
    quantity?: true
    rawMaterialTypeId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RawMaterialCountAggregateInputType = {
    id?: true
    name?: true
    lot?: true
    unit?: true
    quantity?: true
    rawMaterialTypeId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type RawMaterialAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RawMaterial to aggregate.
     */
    where?: RawMaterialWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RawMaterials to fetch.
     */
    orderBy?: RawMaterialOrderByWithRelationInput | RawMaterialOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RawMaterialWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RawMaterials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RawMaterials.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RawMaterials
    **/
    _count?: true | RawMaterialCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RawMaterialAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RawMaterialSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RawMaterialMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RawMaterialMaxAggregateInputType
  }

  export type GetRawMaterialAggregateType<T extends RawMaterialAggregateArgs> = {
        [P in keyof T & keyof AggregateRawMaterial]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRawMaterial[P]>
      : GetScalarType<T[P], AggregateRawMaterial[P]>
  }




  export type RawMaterialGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RawMaterialWhereInput
    orderBy?: RawMaterialOrderByWithAggregationInput | RawMaterialOrderByWithAggregationInput[]
    by: RawMaterialScalarFieldEnum[] | RawMaterialScalarFieldEnum
    having?: RawMaterialScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RawMaterialCountAggregateInputType | true
    _avg?: RawMaterialAvgAggregateInputType
    _sum?: RawMaterialSumAggregateInputType
    _min?: RawMaterialMinAggregateInputType
    _max?: RawMaterialMaxAggregateInputType
  }

  export type RawMaterialGroupByOutputType = {
    id: number
    name: string
    lot: string
    unit: string
    quantity: number
    rawMaterialTypeId: number
    createdAt: Date
    updatedAt: Date
    _count: RawMaterialCountAggregateOutputType | null
    _avg: RawMaterialAvgAggregateOutputType | null
    _sum: RawMaterialSumAggregateOutputType | null
    _min: RawMaterialMinAggregateOutputType | null
    _max: RawMaterialMaxAggregateOutputType | null
  }

  type GetRawMaterialGroupByPayload<T extends RawMaterialGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RawMaterialGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RawMaterialGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RawMaterialGroupByOutputType[P]>
            : GetScalarType<T[P], RawMaterialGroupByOutputType[P]>
        }
      >
    >


  export type RawMaterialSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    lot?: boolean
    unit?: boolean
    quantity?: boolean
    rawMaterialTypeId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    materialType?: boolean | RawMaterialTypeDefaultArgs<ExtArgs>
    productionOrders?: boolean | RawMaterial$productionOrdersArgs<ExtArgs>
    _count?: boolean | RawMaterialCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rawMaterial"]>

  export type RawMaterialSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    lot?: boolean
    unit?: boolean
    quantity?: boolean
    rawMaterialTypeId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    materialType?: boolean | RawMaterialTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rawMaterial"]>

  export type RawMaterialSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    lot?: boolean
    unit?: boolean
    quantity?: boolean
    rawMaterialTypeId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    materialType?: boolean | RawMaterialTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rawMaterial"]>

  export type RawMaterialSelectScalar = {
    id?: boolean
    name?: boolean
    lot?: boolean
    unit?: boolean
    quantity?: boolean
    rawMaterialTypeId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type RawMaterialOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "lot" | "unit" | "quantity" | "rawMaterialTypeId" | "createdAt" | "updatedAt", ExtArgs["result"]["rawMaterial"]>
  export type RawMaterialInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    materialType?: boolean | RawMaterialTypeDefaultArgs<ExtArgs>
    productionOrders?: boolean | RawMaterial$productionOrdersArgs<ExtArgs>
    _count?: boolean | RawMaterialCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type RawMaterialIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    materialType?: boolean | RawMaterialTypeDefaultArgs<ExtArgs>
  }
  export type RawMaterialIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    materialType?: boolean | RawMaterialTypeDefaultArgs<ExtArgs>
  }

  export type $RawMaterialPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RawMaterial"
    objects: {
      materialType: Prisma.$RawMaterialTypePayload<ExtArgs>
      productionOrders: Prisma.$ProductionOrderPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      lot: string
      unit: string
      quantity: number
      rawMaterialTypeId: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["rawMaterial"]>
    composites: {}
  }

  type RawMaterialGetPayload<S extends boolean | null | undefined | RawMaterialDefaultArgs> = $Result.GetResult<Prisma.$RawMaterialPayload, S>

  type RawMaterialCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RawMaterialFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RawMaterialCountAggregateInputType | true
    }

  export interface RawMaterialDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RawMaterial'], meta: { name: 'RawMaterial' } }
    /**
     * Find zero or one RawMaterial that matches the filter.
     * @param {RawMaterialFindUniqueArgs} args - Arguments to find a RawMaterial
     * @example
     * // Get one RawMaterial
     * const rawMaterial = await prisma.rawMaterial.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RawMaterialFindUniqueArgs>(args: SelectSubset<T, RawMaterialFindUniqueArgs<ExtArgs>>): Prisma__RawMaterialClient<$Result.GetResult<Prisma.$RawMaterialPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RawMaterial that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RawMaterialFindUniqueOrThrowArgs} args - Arguments to find a RawMaterial
     * @example
     * // Get one RawMaterial
     * const rawMaterial = await prisma.rawMaterial.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RawMaterialFindUniqueOrThrowArgs>(args: SelectSubset<T, RawMaterialFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RawMaterialClient<$Result.GetResult<Prisma.$RawMaterialPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RawMaterial that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RawMaterialFindFirstArgs} args - Arguments to find a RawMaterial
     * @example
     * // Get one RawMaterial
     * const rawMaterial = await prisma.rawMaterial.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RawMaterialFindFirstArgs>(args?: SelectSubset<T, RawMaterialFindFirstArgs<ExtArgs>>): Prisma__RawMaterialClient<$Result.GetResult<Prisma.$RawMaterialPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RawMaterial that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RawMaterialFindFirstOrThrowArgs} args - Arguments to find a RawMaterial
     * @example
     * // Get one RawMaterial
     * const rawMaterial = await prisma.rawMaterial.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RawMaterialFindFirstOrThrowArgs>(args?: SelectSubset<T, RawMaterialFindFirstOrThrowArgs<ExtArgs>>): Prisma__RawMaterialClient<$Result.GetResult<Prisma.$RawMaterialPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RawMaterials that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RawMaterialFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RawMaterials
     * const rawMaterials = await prisma.rawMaterial.findMany()
     * 
     * // Get first 10 RawMaterials
     * const rawMaterials = await prisma.rawMaterial.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const rawMaterialWithIdOnly = await prisma.rawMaterial.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RawMaterialFindManyArgs>(args?: SelectSubset<T, RawMaterialFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RawMaterialPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RawMaterial.
     * @param {RawMaterialCreateArgs} args - Arguments to create a RawMaterial.
     * @example
     * // Create one RawMaterial
     * const RawMaterial = await prisma.rawMaterial.create({
     *   data: {
     *     // ... data to create a RawMaterial
     *   }
     * })
     * 
     */
    create<T extends RawMaterialCreateArgs>(args: SelectSubset<T, RawMaterialCreateArgs<ExtArgs>>): Prisma__RawMaterialClient<$Result.GetResult<Prisma.$RawMaterialPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RawMaterials.
     * @param {RawMaterialCreateManyArgs} args - Arguments to create many RawMaterials.
     * @example
     * // Create many RawMaterials
     * const rawMaterial = await prisma.rawMaterial.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RawMaterialCreateManyArgs>(args?: SelectSubset<T, RawMaterialCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RawMaterials and returns the data saved in the database.
     * @param {RawMaterialCreateManyAndReturnArgs} args - Arguments to create many RawMaterials.
     * @example
     * // Create many RawMaterials
     * const rawMaterial = await prisma.rawMaterial.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RawMaterials and only return the `id`
     * const rawMaterialWithIdOnly = await prisma.rawMaterial.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RawMaterialCreateManyAndReturnArgs>(args?: SelectSubset<T, RawMaterialCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RawMaterialPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a RawMaterial.
     * @param {RawMaterialDeleteArgs} args - Arguments to delete one RawMaterial.
     * @example
     * // Delete one RawMaterial
     * const RawMaterial = await prisma.rawMaterial.delete({
     *   where: {
     *     // ... filter to delete one RawMaterial
     *   }
     * })
     * 
     */
    delete<T extends RawMaterialDeleteArgs>(args: SelectSubset<T, RawMaterialDeleteArgs<ExtArgs>>): Prisma__RawMaterialClient<$Result.GetResult<Prisma.$RawMaterialPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RawMaterial.
     * @param {RawMaterialUpdateArgs} args - Arguments to update one RawMaterial.
     * @example
     * // Update one RawMaterial
     * const rawMaterial = await prisma.rawMaterial.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RawMaterialUpdateArgs>(args: SelectSubset<T, RawMaterialUpdateArgs<ExtArgs>>): Prisma__RawMaterialClient<$Result.GetResult<Prisma.$RawMaterialPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RawMaterials.
     * @param {RawMaterialDeleteManyArgs} args - Arguments to filter RawMaterials to delete.
     * @example
     * // Delete a few RawMaterials
     * const { count } = await prisma.rawMaterial.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RawMaterialDeleteManyArgs>(args?: SelectSubset<T, RawMaterialDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RawMaterials.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RawMaterialUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RawMaterials
     * const rawMaterial = await prisma.rawMaterial.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RawMaterialUpdateManyArgs>(args: SelectSubset<T, RawMaterialUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RawMaterials and returns the data updated in the database.
     * @param {RawMaterialUpdateManyAndReturnArgs} args - Arguments to update many RawMaterials.
     * @example
     * // Update many RawMaterials
     * const rawMaterial = await prisma.rawMaterial.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more RawMaterials and only return the `id`
     * const rawMaterialWithIdOnly = await prisma.rawMaterial.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RawMaterialUpdateManyAndReturnArgs>(args: SelectSubset<T, RawMaterialUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RawMaterialPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one RawMaterial.
     * @param {RawMaterialUpsertArgs} args - Arguments to update or create a RawMaterial.
     * @example
     * // Update or create a RawMaterial
     * const rawMaterial = await prisma.rawMaterial.upsert({
     *   create: {
     *     // ... data to create a RawMaterial
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RawMaterial we want to update
     *   }
     * })
     */
    upsert<T extends RawMaterialUpsertArgs>(args: SelectSubset<T, RawMaterialUpsertArgs<ExtArgs>>): Prisma__RawMaterialClient<$Result.GetResult<Prisma.$RawMaterialPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RawMaterials.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RawMaterialCountArgs} args - Arguments to filter RawMaterials to count.
     * @example
     * // Count the number of RawMaterials
     * const count = await prisma.rawMaterial.count({
     *   where: {
     *     // ... the filter for the RawMaterials we want to count
     *   }
     * })
    **/
    count<T extends RawMaterialCountArgs>(
      args?: Subset<T, RawMaterialCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RawMaterialCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RawMaterial.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RawMaterialAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RawMaterialAggregateArgs>(args: Subset<T, RawMaterialAggregateArgs>): Prisma.PrismaPromise<GetRawMaterialAggregateType<T>>

    /**
     * Group by RawMaterial.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RawMaterialGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RawMaterialGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RawMaterialGroupByArgs['orderBy'] }
        : { orderBy?: RawMaterialGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RawMaterialGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRawMaterialGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RawMaterial model
   */
  readonly fields: RawMaterialFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RawMaterial.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RawMaterialClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    materialType<T extends RawMaterialTypeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RawMaterialTypeDefaultArgs<ExtArgs>>): Prisma__RawMaterialTypeClient<$Result.GetResult<Prisma.$RawMaterialTypePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    productionOrders<T extends RawMaterial$productionOrdersArgs<ExtArgs> = {}>(args?: Subset<T, RawMaterial$productionOrdersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductionOrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the RawMaterial model
   */
  interface RawMaterialFieldRefs {
    readonly id: FieldRef<"RawMaterial", 'Int'>
    readonly name: FieldRef<"RawMaterial", 'String'>
    readonly lot: FieldRef<"RawMaterial", 'String'>
    readonly unit: FieldRef<"RawMaterial", 'String'>
    readonly quantity: FieldRef<"RawMaterial", 'Int'>
    readonly rawMaterialTypeId: FieldRef<"RawMaterial", 'Int'>
    readonly createdAt: FieldRef<"RawMaterial", 'DateTime'>
    readonly updatedAt: FieldRef<"RawMaterial", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * RawMaterial findUnique
   */
  export type RawMaterialFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RawMaterial
     */
    select?: RawMaterialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RawMaterial
     */
    omit?: RawMaterialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RawMaterialInclude<ExtArgs> | null
    /**
     * Filter, which RawMaterial to fetch.
     */
    where: RawMaterialWhereUniqueInput
  }

  /**
   * RawMaterial findUniqueOrThrow
   */
  export type RawMaterialFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RawMaterial
     */
    select?: RawMaterialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RawMaterial
     */
    omit?: RawMaterialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RawMaterialInclude<ExtArgs> | null
    /**
     * Filter, which RawMaterial to fetch.
     */
    where: RawMaterialWhereUniqueInput
  }

  /**
   * RawMaterial findFirst
   */
  export type RawMaterialFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RawMaterial
     */
    select?: RawMaterialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RawMaterial
     */
    omit?: RawMaterialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RawMaterialInclude<ExtArgs> | null
    /**
     * Filter, which RawMaterial to fetch.
     */
    where?: RawMaterialWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RawMaterials to fetch.
     */
    orderBy?: RawMaterialOrderByWithRelationInput | RawMaterialOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RawMaterials.
     */
    cursor?: RawMaterialWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RawMaterials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RawMaterials.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RawMaterials.
     */
    distinct?: RawMaterialScalarFieldEnum | RawMaterialScalarFieldEnum[]
  }

  /**
   * RawMaterial findFirstOrThrow
   */
  export type RawMaterialFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RawMaterial
     */
    select?: RawMaterialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RawMaterial
     */
    omit?: RawMaterialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RawMaterialInclude<ExtArgs> | null
    /**
     * Filter, which RawMaterial to fetch.
     */
    where?: RawMaterialWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RawMaterials to fetch.
     */
    orderBy?: RawMaterialOrderByWithRelationInput | RawMaterialOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RawMaterials.
     */
    cursor?: RawMaterialWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RawMaterials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RawMaterials.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RawMaterials.
     */
    distinct?: RawMaterialScalarFieldEnum | RawMaterialScalarFieldEnum[]
  }

  /**
   * RawMaterial findMany
   */
  export type RawMaterialFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RawMaterial
     */
    select?: RawMaterialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RawMaterial
     */
    omit?: RawMaterialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RawMaterialInclude<ExtArgs> | null
    /**
     * Filter, which RawMaterials to fetch.
     */
    where?: RawMaterialWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RawMaterials to fetch.
     */
    orderBy?: RawMaterialOrderByWithRelationInput | RawMaterialOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RawMaterials.
     */
    cursor?: RawMaterialWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RawMaterials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RawMaterials.
     */
    skip?: number
    distinct?: RawMaterialScalarFieldEnum | RawMaterialScalarFieldEnum[]
  }

  /**
   * RawMaterial create
   */
  export type RawMaterialCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RawMaterial
     */
    select?: RawMaterialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RawMaterial
     */
    omit?: RawMaterialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RawMaterialInclude<ExtArgs> | null
    /**
     * The data needed to create a RawMaterial.
     */
    data: XOR<RawMaterialCreateInput, RawMaterialUncheckedCreateInput>
  }

  /**
   * RawMaterial createMany
   */
  export type RawMaterialCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RawMaterials.
     */
    data: RawMaterialCreateManyInput | RawMaterialCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RawMaterial createManyAndReturn
   */
  export type RawMaterialCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RawMaterial
     */
    select?: RawMaterialSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RawMaterial
     */
    omit?: RawMaterialOmit<ExtArgs> | null
    /**
     * The data used to create many RawMaterials.
     */
    data: RawMaterialCreateManyInput | RawMaterialCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RawMaterialIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * RawMaterial update
   */
  export type RawMaterialUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RawMaterial
     */
    select?: RawMaterialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RawMaterial
     */
    omit?: RawMaterialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RawMaterialInclude<ExtArgs> | null
    /**
     * The data needed to update a RawMaterial.
     */
    data: XOR<RawMaterialUpdateInput, RawMaterialUncheckedUpdateInput>
    /**
     * Choose, which RawMaterial to update.
     */
    where: RawMaterialWhereUniqueInput
  }

  /**
   * RawMaterial updateMany
   */
  export type RawMaterialUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RawMaterials.
     */
    data: XOR<RawMaterialUpdateManyMutationInput, RawMaterialUncheckedUpdateManyInput>
    /**
     * Filter which RawMaterials to update
     */
    where?: RawMaterialWhereInput
    /**
     * Limit how many RawMaterials to update.
     */
    limit?: number
  }

  /**
   * RawMaterial updateManyAndReturn
   */
  export type RawMaterialUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RawMaterial
     */
    select?: RawMaterialSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RawMaterial
     */
    omit?: RawMaterialOmit<ExtArgs> | null
    /**
     * The data used to update RawMaterials.
     */
    data: XOR<RawMaterialUpdateManyMutationInput, RawMaterialUncheckedUpdateManyInput>
    /**
     * Filter which RawMaterials to update
     */
    where?: RawMaterialWhereInput
    /**
     * Limit how many RawMaterials to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RawMaterialIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * RawMaterial upsert
   */
  export type RawMaterialUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RawMaterial
     */
    select?: RawMaterialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RawMaterial
     */
    omit?: RawMaterialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RawMaterialInclude<ExtArgs> | null
    /**
     * The filter to search for the RawMaterial to update in case it exists.
     */
    where: RawMaterialWhereUniqueInput
    /**
     * In case the RawMaterial found by the `where` argument doesn't exist, create a new RawMaterial with this data.
     */
    create: XOR<RawMaterialCreateInput, RawMaterialUncheckedCreateInput>
    /**
     * In case the RawMaterial was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RawMaterialUpdateInput, RawMaterialUncheckedUpdateInput>
  }

  /**
   * RawMaterial delete
   */
  export type RawMaterialDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RawMaterial
     */
    select?: RawMaterialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RawMaterial
     */
    omit?: RawMaterialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RawMaterialInclude<ExtArgs> | null
    /**
     * Filter which RawMaterial to delete.
     */
    where: RawMaterialWhereUniqueInput
  }

  /**
   * RawMaterial deleteMany
   */
  export type RawMaterialDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RawMaterials to delete
     */
    where?: RawMaterialWhereInput
    /**
     * Limit how many RawMaterials to delete.
     */
    limit?: number
  }

  /**
   * RawMaterial.productionOrders
   */
  export type RawMaterial$productionOrdersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductionOrder
     */
    select?: ProductionOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductionOrder
     */
    omit?: ProductionOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductionOrderInclude<ExtArgs> | null
    where?: ProductionOrderWhereInput
    orderBy?: ProductionOrderOrderByWithRelationInput | ProductionOrderOrderByWithRelationInput[]
    cursor?: ProductionOrderWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductionOrderScalarFieldEnum | ProductionOrderScalarFieldEnum[]
  }

  /**
   * RawMaterial without action
   */
  export type RawMaterialDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RawMaterial
     */
    select?: RawMaterialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RawMaterial
     */
    omit?: RawMaterialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RawMaterialInclude<ExtArgs> | null
  }


  /**
   * Model RawMaterialType
   */

  export type AggregateRawMaterialType = {
    _count: RawMaterialTypeCountAggregateOutputType | null
    _avg: RawMaterialTypeAvgAggregateOutputType | null
    _sum: RawMaterialTypeSumAggregateOutputType | null
    _min: RawMaterialTypeMinAggregateOutputType | null
    _max: RawMaterialTypeMaxAggregateOutputType | null
  }

  export type RawMaterialTypeAvgAggregateOutputType = {
    id: number | null
  }

  export type RawMaterialTypeSumAggregateOutputType = {
    id: number | null
  }

  export type RawMaterialTypeMinAggregateOutputType = {
    id: number | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RawMaterialTypeMaxAggregateOutputType = {
    id: number | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RawMaterialTypeCountAggregateOutputType = {
    id: number
    name: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type RawMaterialTypeAvgAggregateInputType = {
    id?: true
  }

  export type RawMaterialTypeSumAggregateInputType = {
    id?: true
  }

  export type RawMaterialTypeMinAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RawMaterialTypeMaxAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RawMaterialTypeCountAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type RawMaterialTypeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RawMaterialType to aggregate.
     */
    where?: RawMaterialTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RawMaterialTypes to fetch.
     */
    orderBy?: RawMaterialTypeOrderByWithRelationInput | RawMaterialTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RawMaterialTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RawMaterialTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RawMaterialTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RawMaterialTypes
    **/
    _count?: true | RawMaterialTypeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RawMaterialTypeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RawMaterialTypeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RawMaterialTypeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RawMaterialTypeMaxAggregateInputType
  }

  export type GetRawMaterialTypeAggregateType<T extends RawMaterialTypeAggregateArgs> = {
        [P in keyof T & keyof AggregateRawMaterialType]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRawMaterialType[P]>
      : GetScalarType<T[P], AggregateRawMaterialType[P]>
  }




  export type RawMaterialTypeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RawMaterialTypeWhereInput
    orderBy?: RawMaterialTypeOrderByWithAggregationInput | RawMaterialTypeOrderByWithAggregationInput[]
    by: RawMaterialTypeScalarFieldEnum[] | RawMaterialTypeScalarFieldEnum
    having?: RawMaterialTypeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RawMaterialTypeCountAggregateInputType | true
    _avg?: RawMaterialTypeAvgAggregateInputType
    _sum?: RawMaterialTypeSumAggregateInputType
    _min?: RawMaterialTypeMinAggregateInputType
    _max?: RawMaterialTypeMaxAggregateInputType
  }

  export type RawMaterialTypeGroupByOutputType = {
    id: number
    name: string
    createdAt: Date
    updatedAt: Date
    _count: RawMaterialTypeCountAggregateOutputType | null
    _avg: RawMaterialTypeAvgAggregateOutputType | null
    _sum: RawMaterialTypeSumAggregateOutputType | null
    _min: RawMaterialTypeMinAggregateOutputType | null
    _max: RawMaterialTypeMaxAggregateOutputType | null
  }

  type GetRawMaterialTypeGroupByPayload<T extends RawMaterialTypeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RawMaterialTypeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RawMaterialTypeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RawMaterialTypeGroupByOutputType[P]>
            : GetScalarType<T[P], RawMaterialTypeGroupByOutputType[P]>
        }
      >
    >


  export type RawMaterialTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    RawMaterial?: boolean | RawMaterialType$RawMaterialArgs<ExtArgs>
    _count?: boolean | RawMaterialTypeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rawMaterialType"]>

  export type RawMaterialTypeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["rawMaterialType"]>

  export type RawMaterialTypeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["rawMaterialType"]>

  export type RawMaterialTypeSelectScalar = {
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type RawMaterialTypeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "createdAt" | "updatedAt", ExtArgs["result"]["rawMaterialType"]>
  export type RawMaterialTypeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    RawMaterial?: boolean | RawMaterialType$RawMaterialArgs<ExtArgs>
    _count?: boolean | RawMaterialTypeCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type RawMaterialTypeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type RawMaterialTypeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $RawMaterialTypePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RawMaterialType"
    objects: {
      RawMaterial: Prisma.$RawMaterialPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["rawMaterialType"]>
    composites: {}
  }

  type RawMaterialTypeGetPayload<S extends boolean | null | undefined | RawMaterialTypeDefaultArgs> = $Result.GetResult<Prisma.$RawMaterialTypePayload, S>

  type RawMaterialTypeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RawMaterialTypeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RawMaterialTypeCountAggregateInputType | true
    }

  export interface RawMaterialTypeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RawMaterialType'], meta: { name: 'RawMaterialType' } }
    /**
     * Find zero or one RawMaterialType that matches the filter.
     * @param {RawMaterialTypeFindUniqueArgs} args - Arguments to find a RawMaterialType
     * @example
     * // Get one RawMaterialType
     * const rawMaterialType = await prisma.rawMaterialType.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RawMaterialTypeFindUniqueArgs>(args: SelectSubset<T, RawMaterialTypeFindUniqueArgs<ExtArgs>>): Prisma__RawMaterialTypeClient<$Result.GetResult<Prisma.$RawMaterialTypePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RawMaterialType that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RawMaterialTypeFindUniqueOrThrowArgs} args - Arguments to find a RawMaterialType
     * @example
     * // Get one RawMaterialType
     * const rawMaterialType = await prisma.rawMaterialType.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RawMaterialTypeFindUniqueOrThrowArgs>(args: SelectSubset<T, RawMaterialTypeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RawMaterialTypeClient<$Result.GetResult<Prisma.$RawMaterialTypePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RawMaterialType that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RawMaterialTypeFindFirstArgs} args - Arguments to find a RawMaterialType
     * @example
     * // Get one RawMaterialType
     * const rawMaterialType = await prisma.rawMaterialType.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RawMaterialTypeFindFirstArgs>(args?: SelectSubset<T, RawMaterialTypeFindFirstArgs<ExtArgs>>): Prisma__RawMaterialTypeClient<$Result.GetResult<Prisma.$RawMaterialTypePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RawMaterialType that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RawMaterialTypeFindFirstOrThrowArgs} args - Arguments to find a RawMaterialType
     * @example
     * // Get one RawMaterialType
     * const rawMaterialType = await prisma.rawMaterialType.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RawMaterialTypeFindFirstOrThrowArgs>(args?: SelectSubset<T, RawMaterialTypeFindFirstOrThrowArgs<ExtArgs>>): Prisma__RawMaterialTypeClient<$Result.GetResult<Prisma.$RawMaterialTypePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RawMaterialTypes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RawMaterialTypeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RawMaterialTypes
     * const rawMaterialTypes = await prisma.rawMaterialType.findMany()
     * 
     * // Get first 10 RawMaterialTypes
     * const rawMaterialTypes = await prisma.rawMaterialType.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const rawMaterialTypeWithIdOnly = await prisma.rawMaterialType.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RawMaterialTypeFindManyArgs>(args?: SelectSubset<T, RawMaterialTypeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RawMaterialTypePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RawMaterialType.
     * @param {RawMaterialTypeCreateArgs} args - Arguments to create a RawMaterialType.
     * @example
     * // Create one RawMaterialType
     * const RawMaterialType = await prisma.rawMaterialType.create({
     *   data: {
     *     // ... data to create a RawMaterialType
     *   }
     * })
     * 
     */
    create<T extends RawMaterialTypeCreateArgs>(args: SelectSubset<T, RawMaterialTypeCreateArgs<ExtArgs>>): Prisma__RawMaterialTypeClient<$Result.GetResult<Prisma.$RawMaterialTypePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RawMaterialTypes.
     * @param {RawMaterialTypeCreateManyArgs} args - Arguments to create many RawMaterialTypes.
     * @example
     * // Create many RawMaterialTypes
     * const rawMaterialType = await prisma.rawMaterialType.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RawMaterialTypeCreateManyArgs>(args?: SelectSubset<T, RawMaterialTypeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RawMaterialTypes and returns the data saved in the database.
     * @param {RawMaterialTypeCreateManyAndReturnArgs} args - Arguments to create many RawMaterialTypes.
     * @example
     * // Create many RawMaterialTypes
     * const rawMaterialType = await prisma.rawMaterialType.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RawMaterialTypes and only return the `id`
     * const rawMaterialTypeWithIdOnly = await prisma.rawMaterialType.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RawMaterialTypeCreateManyAndReturnArgs>(args?: SelectSubset<T, RawMaterialTypeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RawMaterialTypePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a RawMaterialType.
     * @param {RawMaterialTypeDeleteArgs} args - Arguments to delete one RawMaterialType.
     * @example
     * // Delete one RawMaterialType
     * const RawMaterialType = await prisma.rawMaterialType.delete({
     *   where: {
     *     // ... filter to delete one RawMaterialType
     *   }
     * })
     * 
     */
    delete<T extends RawMaterialTypeDeleteArgs>(args: SelectSubset<T, RawMaterialTypeDeleteArgs<ExtArgs>>): Prisma__RawMaterialTypeClient<$Result.GetResult<Prisma.$RawMaterialTypePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RawMaterialType.
     * @param {RawMaterialTypeUpdateArgs} args - Arguments to update one RawMaterialType.
     * @example
     * // Update one RawMaterialType
     * const rawMaterialType = await prisma.rawMaterialType.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RawMaterialTypeUpdateArgs>(args: SelectSubset<T, RawMaterialTypeUpdateArgs<ExtArgs>>): Prisma__RawMaterialTypeClient<$Result.GetResult<Prisma.$RawMaterialTypePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RawMaterialTypes.
     * @param {RawMaterialTypeDeleteManyArgs} args - Arguments to filter RawMaterialTypes to delete.
     * @example
     * // Delete a few RawMaterialTypes
     * const { count } = await prisma.rawMaterialType.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RawMaterialTypeDeleteManyArgs>(args?: SelectSubset<T, RawMaterialTypeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RawMaterialTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RawMaterialTypeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RawMaterialTypes
     * const rawMaterialType = await prisma.rawMaterialType.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RawMaterialTypeUpdateManyArgs>(args: SelectSubset<T, RawMaterialTypeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RawMaterialTypes and returns the data updated in the database.
     * @param {RawMaterialTypeUpdateManyAndReturnArgs} args - Arguments to update many RawMaterialTypes.
     * @example
     * // Update many RawMaterialTypes
     * const rawMaterialType = await prisma.rawMaterialType.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more RawMaterialTypes and only return the `id`
     * const rawMaterialTypeWithIdOnly = await prisma.rawMaterialType.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RawMaterialTypeUpdateManyAndReturnArgs>(args: SelectSubset<T, RawMaterialTypeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RawMaterialTypePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one RawMaterialType.
     * @param {RawMaterialTypeUpsertArgs} args - Arguments to update or create a RawMaterialType.
     * @example
     * // Update or create a RawMaterialType
     * const rawMaterialType = await prisma.rawMaterialType.upsert({
     *   create: {
     *     // ... data to create a RawMaterialType
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RawMaterialType we want to update
     *   }
     * })
     */
    upsert<T extends RawMaterialTypeUpsertArgs>(args: SelectSubset<T, RawMaterialTypeUpsertArgs<ExtArgs>>): Prisma__RawMaterialTypeClient<$Result.GetResult<Prisma.$RawMaterialTypePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RawMaterialTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RawMaterialTypeCountArgs} args - Arguments to filter RawMaterialTypes to count.
     * @example
     * // Count the number of RawMaterialTypes
     * const count = await prisma.rawMaterialType.count({
     *   where: {
     *     // ... the filter for the RawMaterialTypes we want to count
     *   }
     * })
    **/
    count<T extends RawMaterialTypeCountArgs>(
      args?: Subset<T, RawMaterialTypeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RawMaterialTypeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RawMaterialType.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RawMaterialTypeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RawMaterialTypeAggregateArgs>(args: Subset<T, RawMaterialTypeAggregateArgs>): Prisma.PrismaPromise<GetRawMaterialTypeAggregateType<T>>

    /**
     * Group by RawMaterialType.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RawMaterialTypeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RawMaterialTypeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RawMaterialTypeGroupByArgs['orderBy'] }
        : { orderBy?: RawMaterialTypeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RawMaterialTypeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRawMaterialTypeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RawMaterialType model
   */
  readonly fields: RawMaterialTypeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RawMaterialType.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RawMaterialTypeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    RawMaterial<T extends RawMaterialType$RawMaterialArgs<ExtArgs> = {}>(args?: Subset<T, RawMaterialType$RawMaterialArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RawMaterialPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the RawMaterialType model
   */
  interface RawMaterialTypeFieldRefs {
    readonly id: FieldRef<"RawMaterialType", 'Int'>
    readonly name: FieldRef<"RawMaterialType", 'String'>
    readonly createdAt: FieldRef<"RawMaterialType", 'DateTime'>
    readonly updatedAt: FieldRef<"RawMaterialType", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * RawMaterialType findUnique
   */
  export type RawMaterialTypeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RawMaterialType
     */
    select?: RawMaterialTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RawMaterialType
     */
    omit?: RawMaterialTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RawMaterialTypeInclude<ExtArgs> | null
    /**
     * Filter, which RawMaterialType to fetch.
     */
    where: RawMaterialTypeWhereUniqueInput
  }

  /**
   * RawMaterialType findUniqueOrThrow
   */
  export type RawMaterialTypeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RawMaterialType
     */
    select?: RawMaterialTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RawMaterialType
     */
    omit?: RawMaterialTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RawMaterialTypeInclude<ExtArgs> | null
    /**
     * Filter, which RawMaterialType to fetch.
     */
    where: RawMaterialTypeWhereUniqueInput
  }

  /**
   * RawMaterialType findFirst
   */
  export type RawMaterialTypeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RawMaterialType
     */
    select?: RawMaterialTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RawMaterialType
     */
    omit?: RawMaterialTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RawMaterialTypeInclude<ExtArgs> | null
    /**
     * Filter, which RawMaterialType to fetch.
     */
    where?: RawMaterialTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RawMaterialTypes to fetch.
     */
    orderBy?: RawMaterialTypeOrderByWithRelationInput | RawMaterialTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RawMaterialTypes.
     */
    cursor?: RawMaterialTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RawMaterialTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RawMaterialTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RawMaterialTypes.
     */
    distinct?: RawMaterialTypeScalarFieldEnum | RawMaterialTypeScalarFieldEnum[]
  }

  /**
   * RawMaterialType findFirstOrThrow
   */
  export type RawMaterialTypeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RawMaterialType
     */
    select?: RawMaterialTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RawMaterialType
     */
    omit?: RawMaterialTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RawMaterialTypeInclude<ExtArgs> | null
    /**
     * Filter, which RawMaterialType to fetch.
     */
    where?: RawMaterialTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RawMaterialTypes to fetch.
     */
    orderBy?: RawMaterialTypeOrderByWithRelationInput | RawMaterialTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RawMaterialTypes.
     */
    cursor?: RawMaterialTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RawMaterialTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RawMaterialTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RawMaterialTypes.
     */
    distinct?: RawMaterialTypeScalarFieldEnum | RawMaterialTypeScalarFieldEnum[]
  }

  /**
   * RawMaterialType findMany
   */
  export type RawMaterialTypeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RawMaterialType
     */
    select?: RawMaterialTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RawMaterialType
     */
    omit?: RawMaterialTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RawMaterialTypeInclude<ExtArgs> | null
    /**
     * Filter, which RawMaterialTypes to fetch.
     */
    where?: RawMaterialTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RawMaterialTypes to fetch.
     */
    orderBy?: RawMaterialTypeOrderByWithRelationInput | RawMaterialTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RawMaterialTypes.
     */
    cursor?: RawMaterialTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RawMaterialTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RawMaterialTypes.
     */
    skip?: number
    distinct?: RawMaterialTypeScalarFieldEnum | RawMaterialTypeScalarFieldEnum[]
  }

  /**
   * RawMaterialType create
   */
  export type RawMaterialTypeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RawMaterialType
     */
    select?: RawMaterialTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RawMaterialType
     */
    omit?: RawMaterialTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RawMaterialTypeInclude<ExtArgs> | null
    /**
     * The data needed to create a RawMaterialType.
     */
    data: XOR<RawMaterialTypeCreateInput, RawMaterialTypeUncheckedCreateInput>
  }

  /**
   * RawMaterialType createMany
   */
  export type RawMaterialTypeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RawMaterialTypes.
     */
    data: RawMaterialTypeCreateManyInput | RawMaterialTypeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RawMaterialType createManyAndReturn
   */
  export type RawMaterialTypeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RawMaterialType
     */
    select?: RawMaterialTypeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RawMaterialType
     */
    omit?: RawMaterialTypeOmit<ExtArgs> | null
    /**
     * The data used to create many RawMaterialTypes.
     */
    data: RawMaterialTypeCreateManyInput | RawMaterialTypeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RawMaterialType update
   */
  export type RawMaterialTypeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RawMaterialType
     */
    select?: RawMaterialTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RawMaterialType
     */
    omit?: RawMaterialTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RawMaterialTypeInclude<ExtArgs> | null
    /**
     * The data needed to update a RawMaterialType.
     */
    data: XOR<RawMaterialTypeUpdateInput, RawMaterialTypeUncheckedUpdateInput>
    /**
     * Choose, which RawMaterialType to update.
     */
    where: RawMaterialTypeWhereUniqueInput
  }

  /**
   * RawMaterialType updateMany
   */
  export type RawMaterialTypeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RawMaterialTypes.
     */
    data: XOR<RawMaterialTypeUpdateManyMutationInput, RawMaterialTypeUncheckedUpdateManyInput>
    /**
     * Filter which RawMaterialTypes to update
     */
    where?: RawMaterialTypeWhereInput
    /**
     * Limit how many RawMaterialTypes to update.
     */
    limit?: number
  }

  /**
   * RawMaterialType updateManyAndReturn
   */
  export type RawMaterialTypeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RawMaterialType
     */
    select?: RawMaterialTypeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RawMaterialType
     */
    omit?: RawMaterialTypeOmit<ExtArgs> | null
    /**
     * The data used to update RawMaterialTypes.
     */
    data: XOR<RawMaterialTypeUpdateManyMutationInput, RawMaterialTypeUncheckedUpdateManyInput>
    /**
     * Filter which RawMaterialTypes to update
     */
    where?: RawMaterialTypeWhereInput
    /**
     * Limit how many RawMaterialTypes to update.
     */
    limit?: number
  }

  /**
   * RawMaterialType upsert
   */
  export type RawMaterialTypeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RawMaterialType
     */
    select?: RawMaterialTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RawMaterialType
     */
    omit?: RawMaterialTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RawMaterialTypeInclude<ExtArgs> | null
    /**
     * The filter to search for the RawMaterialType to update in case it exists.
     */
    where: RawMaterialTypeWhereUniqueInput
    /**
     * In case the RawMaterialType found by the `where` argument doesn't exist, create a new RawMaterialType with this data.
     */
    create: XOR<RawMaterialTypeCreateInput, RawMaterialTypeUncheckedCreateInput>
    /**
     * In case the RawMaterialType was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RawMaterialTypeUpdateInput, RawMaterialTypeUncheckedUpdateInput>
  }

  /**
   * RawMaterialType delete
   */
  export type RawMaterialTypeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RawMaterialType
     */
    select?: RawMaterialTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RawMaterialType
     */
    omit?: RawMaterialTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RawMaterialTypeInclude<ExtArgs> | null
    /**
     * Filter which RawMaterialType to delete.
     */
    where: RawMaterialTypeWhereUniqueInput
  }

  /**
   * RawMaterialType deleteMany
   */
  export type RawMaterialTypeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RawMaterialTypes to delete
     */
    where?: RawMaterialTypeWhereInput
    /**
     * Limit how many RawMaterialTypes to delete.
     */
    limit?: number
  }

  /**
   * RawMaterialType.RawMaterial
   */
  export type RawMaterialType$RawMaterialArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RawMaterial
     */
    select?: RawMaterialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RawMaterial
     */
    omit?: RawMaterialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RawMaterialInclude<ExtArgs> | null
    where?: RawMaterialWhereInput
    orderBy?: RawMaterialOrderByWithRelationInput | RawMaterialOrderByWithRelationInput[]
    cursor?: RawMaterialWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RawMaterialScalarFieldEnum | RawMaterialScalarFieldEnum[]
  }

  /**
   * RawMaterialType without action
   */
  export type RawMaterialTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RawMaterialType
     */
    select?: RawMaterialTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RawMaterialType
     */
    omit?: RawMaterialTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RawMaterialTypeInclude<ExtArgs> | null
  }


  /**
   * Model Package
   */

  export type AggregatePackage = {
    _count: PackageCountAggregateOutputType | null
    _avg: PackageAvgAggregateOutputType | null
    _sum: PackageSumAggregateOutputType | null
    _min: PackageMinAggregateOutputType | null
    _max: PackageMaxAggregateOutputType | null
  }

  export type PackageAvgAggregateOutputType = {
    id: number | null
    quantity: number | null
  }

  export type PackageSumAggregateOutputType = {
    id: number | null
    quantity: number | null
  }

  export type PackageMinAggregateOutputType = {
    id: number | null
    name: string | null
    lot: string | null
    unit: string | null
    quantity: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PackageMaxAggregateOutputType = {
    id: number | null
    name: string | null
    lot: string | null
    unit: string | null
    quantity: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PackageCountAggregateOutputType = {
    id: number
    name: number
    lot: number
    unit: number
    quantity: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PackageAvgAggregateInputType = {
    id?: true
    quantity?: true
  }

  export type PackageSumAggregateInputType = {
    id?: true
    quantity?: true
  }

  export type PackageMinAggregateInputType = {
    id?: true
    name?: true
    lot?: true
    unit?: true
    quantity?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PackageMaxAggregateInputType = {
    id?: true
    name?: true
    lot?: true
    unit?: true
    quantity?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PackageCountAggregateInputType = {
    id?: true
    name?: true
    lot?: true
    unit?: true
    quantity?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PackageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Package to aggregate.
     */
    where?: PackageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Packages to fetch.
     */
    orderBy?: PackageOrderByWithRelationInput | PackageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PackageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Packages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Packages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Packages
    **/
    _count?: true | PackageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PackageAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PackageSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PackageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PackageMaxAggregateInputType
  }

  export type GetPackageAggregateType<T extends PackageAggregateArgs> = {
        [P in keyof T & keyof AggregatePackage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePackage[P]>
      : GetScalarType<T[P], AggregatePackage[P]>
  }




  export type PackageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PackageWhereInput
    orderBy?: PackageOrderByWithAggregationInput | PackageOrderByWithAggregationInput[]
    by: PackageScalarFieldEnum[] | PackageScalarFieldEnum
    having?: PackageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PackageCountAggregateInputType | true
    _avg?: PackageAvgAggregateInputType
    _sum?: PackageSumAggregateInputType
    _min?: PackageMinAggregateInputType
    _max?: PackageMaxAggregateInputType
  }

  export type PackageGroupByOutputType = {
    id: number
    name: string
    lot: string
    unit: string
    quantity: number
    createdAt: Date
    updatedAt: Date
    _count: PackageCountAggregateOutputType | null
    _avg: PackageAvgAggregateOutputType | null
    _sum: PackageSumAggregateOutputType | null
    _min: PackageMinAggregateOutputType | null
    _max: PackageMaxAggregateOutputType | null
  }

  type GetPackageGroupByPayload<T extends PackageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PackageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PackageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PackageGroupByOutputType[P]>
            : GetScalarType<T[P], PackageGroupByOutputType[P]>
        }
      >
    >


  export type PackageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    lot?: boolean
    unit?: boolean
    quantity?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    productionOrders?: boolean | Package$productionOrdersArgs<ExtArgs>
    _count?: boolean | PackageCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["package"]>

  export type PackageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    lot?: boolean
    unit?: boolean
    quantity?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["package"]>

  export type PackageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    lot?: boolean
    unit?: boolean
    quantity?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["package"]>

  export type PackageSelectScalar = {
    id?: boolean
    name?: boolean
    lot?: boolean
    unit?: boolean
    quantity?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PackageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "lot" | "unit" | "quantity" | "createdAt" | "updatedAt", ExtArgs["result"]["package"]>
  export type PackageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    productionOrders?: boolean | Package$productionOrdersArgs<ExtArgs>
    _count?: boolean | PackageCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PackageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type PackageIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $PackagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Package"
    objects: {
      productionOrders: Prisma.$ProductionOrderPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      lot: string
      unit: string
      quantity: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["package"]>
    composites: {}
  }

  type PackageGetPayload<S extends boolean | null | undefined | PackageDefaultArgs> = $Result.GetResult<Prisma.$PackagePayload, S>

  type PackageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PackageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PackageCountAggregateInputType | true
    }

  export interface PackageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Package'], meta: { name: 'Package' } }
    /**
     * Find zero or one Package that matches the filter.
     * @param {PackageFindUniqueArgs} args - Arguments to find a Package
     * @example
     * // Get one Package
     * const package = await prisma.package.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PackageFindUniqueArgs>(args: SelectSubset<T, PackageFindUniqueArgs<ExtArgs>>): Prisma__PackageClient<$Result.GetResult<Prisma.$PackagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Package that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PackageFindUniqueOrThrowArgs} args - Arguments to find a Package
     * @example
     * // Get one Package
     * const package = await prisma.package.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PackageFindUniqueOrThrowArgs>(args: SelectSubset<T, PackageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PackageClient<$Result.GetResult<Prisma.$PackagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Package that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PackageFindFirstArgs} args - Arguments to find a Package
     * @example
     * // Get one Package
     * const package = await prisma.package.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PackageFindFirstArgs>(args?: SelectSubset<T, PackageFindFirstArgs<ExtArgs>>): Prisma__PackageClient<$Result.GetResult<Prisma.$PackagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Package that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PackageFindFirstOrThrowArgs} args - Arguments to find a Package
     * @example
     * // Get one Package
     * const package = await prisma.package.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PackageFindFirstOrThrowArgs>(args?: SelectSubset<T, PackageFindFirstOrThrowArgs<ExtArgs>>): Prisma__PackageClient<$Result.GetResult<Prisma.$PackagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Packages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PackageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Packages
     * const packages = await prisma.package.findMany()
     * 
     * // Get first 10 Packages
     * const packages = await prisma.package.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const packageWithIdOnly = await prisma.package.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PackageFindManyArgs>(args?: SelectSubset<T, PackageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PackagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Package.
     * @param {PackageCreateArgs} args - Arguments to create a Package.
     * @example
     * // Create one Package
     * const Package = await prisma.package.create({
     *   data: {
     *     // ... data to create a Package
     *   }
     * })
     * 
     */
    create<T extends PackageCreateArgs>(args: SelectSubset<T, PackageCreateArgs<ExtArgs>>): Prisma__PackageClient<$Result.GetResult<Prisma.$PackagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Packages.
     * @param {PackageCreateManyArgs} args - Arguments to create many Packages.
     * @example
     * // Create many Packages
     * const package = await prisma.package.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PackageCreateManyArgs>(args?: SelectSubset<T, PackageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Packages and returns the data saved in the database.
     * @param {PackageCreateManyAndReturnArgs} args - Arguments to create many Packages.
     * @example
     * // Create many Packages
     * const package = await prisma.package.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Packages and only return the `id`
     * const packageWithIdOnly = await prisma.package.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PackageCreateManyAndReturnArgs>(args?: SelectSubset<T, PackageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PackagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Package.
     * @param {PackageDeleteArgs} args - Arguments to delete one Package.
     * @example
     * // Delete one Package
     * const Package = await prisma.package.delete({
     *   where: {
     *     // ... filter to delete one Package
     *   }
     * })
     * 
     */
    delete<T extends PackageDeleteArgs>(args: SelectSubset<T, PackageDeleteArgs<ExtArgs>>): Prisma__PackageClient<$Result.GetResult<Prisma.$PackagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Package.
     * @param {PackageUpdateArgs} args - Arguments to update one Package.
     * @example
     * // Update one Package
     * const package = await prisma.package.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PackageUpdateArgs>(args: SelectSubset<T, PackageUpdateArgs<ExtArgs>>): Prisma__PackageClient<$Result.GetResult<Prisma.$PackagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Packages.
     * @param {PackageDeleteManyArgs} args - Arguments to filter Packages to delete.
     * @example
     * // Delete a few Packages
     * const { count } = await prisma.package.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PackageDeleteManyArgs>(args?: SelectSubset<T, PackageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Packages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PackageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Packages
     * const package = await prisma.package.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PackageUpdateManyArgs>(args: SelectSubset<T, PackageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Packages and returns the data updated in the database.
     * @param {PackageUpdateManyAndReturnArgs} args - Arguments to update many Packages.
     * @example
     * // Update many Packages
     * const package = await prisma.package.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Packages and only return the `id`
     * const packageWithIdOnly = await prisma.package.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PackageUpdateManyAndReturnArgs>(args: SelectSubset<T, PackageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PackagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Package.
     * @param {PackageUpsertArgs} args - Arguments to update or create a Package.
     * @example
     * // Update or create a Package
     * const package = await prisma.package.upsert({
     *   create: {
     *     // ... data to create a Package
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Package we want to update
     *   }
     * })
     */
    upsert<T extends PackageUpsertArgs>(args: SelectSubset<T, PackageUpsertArgs<ExtArgs>>): Prisma__PackageClient<$Result.GetResult<Prisma.$PackagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Packages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PackageCountArgs} args - Arguments to filter Packages to count.
     * @example
     * // Count the number of Packages
     * const count = await prisma.package.count({
     *   where: {
     *     // ... the filter for the Packages we want to count
     *   }
     * })
    **/
    count<T extends PackageCountArgs>(
      args?: Subset<T, PackageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PackageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Package.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PackageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PackageAggregateArgs>(args: Subset<T, PackageAggregateArgs>): Prisma.PrismaPromise<GetPackageAggregateType<T>>

    /**
     * Group by Package.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PackageGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PackageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PackageGroupByArgs['orderBy'] }
        : { orderBy?: PackageGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PackageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPackageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Package model
   */
  readonly fields: PackageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Package.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PackageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    productionOrders<T extends Package$productionOrdersArgs<ExtArgs> = {}>(args?: Subset<T, Package$productionOrdersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductionOrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Package model
   */
  interface PackageFieldRefs {
    readonly id: FieldRef<"Package", 'Int'>
    readonly name: FieldRef<"Package", 'String'>
    readonly lot: FieldRef<"Package", 'String'>
    readonly unit: FieldRef<"Package", 'String'>
    readonly quantity: FieldRef<"Package", 'Int'>
    readonly createdAt: FieldRef<"Package", 'DateTime'>
    readonly updatedAt: FieldRef<"Package", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Package findUnique
   */
  export type PackageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Package
     */
    select?: PackageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Package
     */
    omit?: PackageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PackageInclude<ExtArgs> | null
    /**
     * Filter, which Package to fetch.
     */
    where: PackageWhereUniqueInput
  }

  /**
   * Package findUniqueOrThrow
   */
  export type PackageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Package
     */
    select?: PackageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Package
     */
    omit?: PackageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PackageInclude<ExtArgs> | null
    /**
     * Filter, which Package to fetch.
     */
    where: PackageWhereUniqueInput
  }

  /**
   * Package findFirst
   */
  export type PackageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Package
     */
    select?: PackageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Package
     */
    omit?: PackageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PackageInclude<ExtArgs> | null
    /**
     * Filter, which Package to fetch.
     */
    where?: PackageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Packages to fetch.
     */
    orderBy?: PackageOrderByWithRelationInput | PackageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Packages.
     */
    cursor?: PackageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Packages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Packages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Packages.
     */
    distinct?: PackageScalarFieldEnum | PackageScalarFieldEnum[]
  }

  /**
   * Package findFirstOrThrow
   */
  export type PackageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Package
     */
    select?: PackageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Package
     */
    omit?: PackageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PackageInclude<ExtArgs> | null
    /**
     * Filter, which Package to fetch.
     */
    where?: PackageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Packages to fetch.
     */
    orderBy?: PackageOrderByWithRelationInput | PackageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Packages.
     */
    cursor?: PackageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Packages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Packages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Packages.
     */
    distinct?: PackageScalarFieldEnum | PackageScalarFieldEnum[]
  }

  /**
   * Package findMany
   */
  export type PackageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Package
     */
    select?: PackageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Package
     */
    omit?: PackageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PackageInclude<ExtArgs> | null
    /**
     * Filter, which Packages to fetch.
     */
    where?: PackageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Packages to fetch.
     */
    orderBy?: PackageOrderByWithRelationInput | PackageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Packages.
     */
    cursor?: PackageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Packages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Packages.
     */
    skip?: number
    distinct?: PackageScalarFieldEnum | PackageScalarFieldEnum[]
  }

  /**
   * Package create
   */
  export type PackageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Package
     */
    select?: PackageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Package
     */
    omit?: PackageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PackageInclude<ExtArgs> | null
    /**
     * The data needed to create a Package.
     */
    data: XOR<PackageCreateInput, PackageUncheckedCreateInput>
  }

  /**
   * Package createMany
   */
  export type PackageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Packages.
     */
    data: PackageCreateManyInput | PackageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Package createManyAndReturn
   */
  export type PackageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Package
     */
    select?: PackageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Package
     */
    omit?: PackageOmit<ExtArgs> | null
    /**
     * The data used to create many Packages.
     */
    data: PackageCreateManyInput | PackageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Package update
   */
  export type PackageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Package
     */
    select?: PackageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Package
     */
    omit?: PackageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PackageInclude<ExtArgs> | null
    /**
     * The data needed to update a Package.
     */
    data: XOR<PackageUpdateInput, PackageUncheckedUpdateInput>
    /**
     * Choose, which Package to update.
     */
    where: PackageWhereUniqueInput
  }

  /**
   * Package updateMany
   */
  export type PackageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Packages.
     */
    data: XOR<PackageUpdateManyMutationInput, PackageUncheckedUpdateManyInput>
    /**
     * Filter which Packages to update
     */
    where?: PackageWhereInput
    /**
     * Limit how many Packages to update.
     */
    limit?: number
  }

  /**
   * Package updateManyAndReturn
   */
  export type PackageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Package
     */
    select?: PackageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Package
     */
    omit?: PackageOmit<ExtArgs> | null
    /**
     * The data used to update Packages.
     */
    data: XOR<PackageUpdateManyMutationInput, PackageUncheckedUpdateManyInput>
    /**
     * Filter which Packages to update
     */
    where?: PackageWhereInput
    /**
     * Limit how many Packages to update.
     */
    limit?: number
  }

  /**
   * Package upsert
   */
  export type PackageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Package
     */
    select?: PackageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Package
     */
    omit?: PackageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PackageInclude<ExtArgs> | null
    /**
     * The filter to search for the Package to update in case it exists.
     */
    where: PackageWhereUniqueInput
    /**
     * In case the Package found by the `where` argument doesn't exist, create a new Package with this data.
     */
    create: XOR<PackageCreateInput, PackageUncheckedCreateInput>
    /**
     * In case the Package was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PackageUpdateInput, PackageUncheckedUpdateInput>
  }

  /**
   * Package delete
   */
  export type PackageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Package
     */
    select?: PackageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Package
     */
    omit?: PackageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PackageInclude<ExtArgs> | null
    /**
     * Filter which Package to delete.
     */
    where: PackageWhereUniqueInput
  }

  /**
   * Package deleteMany
   */
  export type PackageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Packages to delete
     */
    where?: PackageWhereInput
    /**
     * Limit how many Packages to delete.
     */
    limit?: number
  }

  /**
   * Package.productionOrders
   */
  export type Package$productionOrdersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductionOrder
     */
    select?: ProductionOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductionOrder
     */
    omit?: ProductionOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductionOrderInclude<ExtArgs> | null
    where?: ProductionOrderWhereInput
    orderBy?: ProductionOrderOrderByWithRelationInput | ProductionOrderOrderByWithRelationInput[]
    cursor?: ProductionOrderWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductionOrderScalarFieldEnum | ProductionOrderScalarFieldEnum[]
  }

  /**
   * Package without action
   */
  export type PackageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Package
     */
    select?: PackageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Package
     */
    omit?: PackageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PackageInclude<ExtArgs> | null
  }


  /**
   * Model Equipment
   */

  export type AggregateEquipment = {
    _count: EquipmentCountAggregateOutputType | null
    _avg: EquipmentAvgAggregateOutputType | null
    _sum: EquipmentSumAggregateOutputType | null
    _min: EquipmentMinAggregateOutputType | null
    _max: EquipmentMaxAggregateOutputType | null
  }

  export type EquipmentAvgAggregateOutputType = {
    id: number | null
  }

  export type EquipmentSumAggregateOutputType = {
    id: number | null
  }

  export type EquipmentMinAggregateOutputType = {
    id: number | null
    name: string | null
    brand: string | null
    model: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EquipmentMaxAggregateOutputType = {
    id: number | null
    name: string | null
    brand: string | null
    model: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EquipmentCountAggregateOutputType = {
    id: number
    name: number
    brand: number
    model: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type EquipmentAvgAggregateInputType = {
    id?: true
  }

  export type EquipmentSumAggregateInputType = {
    id?: true
  }

  export type EquipmentMinAggregateInputType = {
    id?: true
    name?: true
    brand?: true
    model?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EquipmentMaxAggregateInputType = {
    id?: true
    name?: true
    brand?: true
    model?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EquipmentCountAggregateInputType = {
    id?: true
    name?: true
    brand?: true
    model?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type EquipmentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Equipment to aggregate.
     */
    where?: EquipmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Equipment to fetch.
     */
    orderBy?: EquipmentOrderByWithRelationInput | EquipmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EquipmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Equipment from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Equipment.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Equipment
    **/
    _count?: true | EquipmentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EquipmentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EquipmentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EquipmentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EquipmentMaxAggregateInputType
  }

  export type GetEquipmentAggregateType<T extends EquipmentAggregateArgs> = {
        [P in keyof T & keyof AggregateEquipment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEquipment[P]>
      : GetScalarType<T[P], AggregateEquipment[P]>
  }




  export type EquipmentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EquipmentWhereInput
    orderBy?: EquipmentOrderByWithAggregationInput | EquipmentOrderByWithAggregationInput[]
    by: EquipmentScalarFieldEnum[] | EquipmentScalarFieldEnum
    having?: EquipmentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EquipmentCountAggregateInputType | true
    _avg?: EquipmentAvgAggregateInputType
    _sum?: EquipmentSumAggregateInputType
    _min?: EquipmentMinAggregateInputType
    _max?: EquipmentMaxAggregateInputType
  }

  export type EquipmentGroupByOutputType = {
    id: number
    name: string
    brand: string
    model: string
    createdAt: Date
    updatedAt: Date
    _count: EquipmentCountAggregateOutputType | null
    _avg: EquipmentAvgAggregateOutputType | null
    _sum: EquipmentSumAggregateOutputType | null
    _min: EquipmentMinAggregateOutputType | null
    _max: EquipmentMaxAggregateOutputType | null
  }

  type GetEquipmentGroupByPayload<T extends EquipmentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EquipmentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EquipmentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EquipmentGroupByOutputType[P]>
            : GetScalarType<T[P], EquipmentGroupByOutputType[P]>
        }
      >
    >


  export type EquipmentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    brand?: boolean
    model?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    productionOrders?: boolean | Equipment$productionOrdersArgs<ExtArgs>
    _count?: boolean | EquipmentCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["equipment"]>

  export type EquipmentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    brand?: boolean
    model?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["equipment"]>

  export type EquipmentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    brand?: boolean
    model?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["equipment"]>

  export type EquipmentSelectScalar = {
    id?: boolean
    name?: boolean
    brand?: boolean
    model?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type EquipmentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "brand" | "model" | "createdAt" | "updatedAt", ExtArgs["result"]["equipment"]>
  export type EquipmentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    productionOrders?: boolean | Equipment$productionOrdersArgs<ExtArgs>
    _count?: boolean | EquipmentCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type EquipmentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type EquipmentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $EquipmentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Equipment"
    objects: {
      productionOrders: Prisma.$ProductionOrderPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      brand: string
      model: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["equipment"]>
    composites: {}
  }

  type EquipmentGetPayload<S extends boolean | null | undefined | EquipmentDefaultArgs> = $Result.GetResult<Prisma.$EquipmentPayload, S>

  type EquipmentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EquipmentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EquipmentCountAggregateInputType | true
    }

  export interface EquipmentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Equipment'], meta: { name: 'Equipment' } }
    /**
     * Find zero or one Equipment that matches the filter.
     * @param {EquipmentFindUniqueArgs} args - Arguments to find a Equipment
     * @example
     * // Get one Equipment
     * const equipment = await prisma.equipment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EquipmentFindUniqueArgs>(args: SelectSubset<T, EquipmentFindUniqueArgs<ExtArgs>>): Prisma__EquipmentClient<$Result.GetResult<Prisma.$EquipmentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Equipment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EquipmentFindUniqueOrThrowArgs} args - Arguments to find a Equipment
     * @example
     * // Get one Equipment
     * const equipment = await prisma.equipment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EquipmentFindUniqueOrThrowArgs>(args: SelectSubset<T, EquipmentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EquipmentClient<$Result.GetResult<Prisma.$EquipmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Equipment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EquipmentFindFirstArgs} args - Arguments to find a Equipment
     * @example
     * // Get one Equipment
     * const equipment = await prisma.equipment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EquipmentFindFirstArgs>(args?: SelectSubset<T, EquipmentFindFirstArgs<ExtArgs>>): Prisma__EquipmentClient<$Result.GetResult<Prisma.$EquipmentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Equipment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EquipmentFindFirstOrThrowArgs} args - Arguments to find a Equipment
     * @example
     * // Get one Equipment
     * const equipment = await prisma.equipment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EquipmentFindFirstOrThrowArgs>(args?: SelectSubset<T, EquipmentFindFirstOrThrowArgs<ExtArgs>>): Prisma__EquipmentClient<$Result.GetResult<Prisma.$EquipmentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Equipment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EquipmentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Equipment
     * const equipment = await prisma.equipment.findMany()
     * 
     * // Get first 10 Equipment
     * const equipment = await prisma.equipment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const equipmentWithIdOnly = await prisma.equipment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EquipmentFindManyArgs>(args?: SelectSubset<T, EquipmentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EquipmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Equipment.
     * @param {EquipmentCreateArgs} args - Arguments to create a Equipment.
     * @example
     * // Create one Equipment
     * const Equipment = await prisma.equipment.create({
     *   data: {
     *     // ... data to create a Equipment
     *   }
     * })
     * 
     */
    create<T extends EquipmentCreateArgs>(args: SelectSubset<T, EquipmentCreateArgs<ExtArgs>>): Prisma__EquipmentClient<$Result.GetResult<Prisma.$EquipmentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Equipment.
     * @param {EquipmentCreateManyArgs} args - Arguments to create many Equipment.
     * @example
     * // Create many Equipment
     * const equipment = await prisma.equipment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EquipmentCreateManyArgs>(args?: SelectSubset<T, EquipmentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Equipment and returns the data saved in the database.
     * @param {EquipmentCreateManyAndReturnArgs} args - Arguments to create many Equipment.
     * @example
     * // Create many Equipment
     * const equipment = await prisma.equipment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Equipment and only return the `id`
     * const equipmentWithIdOnly = await prisma.equipment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EquipmentCreateManyAndReturnArgs>(args?: SelectSubset<T, EquipmentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EquipmentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Equipment.
     * @param {EquipmentDeleteArgs} args - Arguments to delete one Equipment.
     * @example
     * // Delete one Equipment
     * const Equipment = await prisma.equipment.delete({
     *   where: {
     *     // ... filter to delete one Equipment
     *   }
     * })
     * 
     */
    delete<T extends EquipmentDeleteArgs>(args: SelectSubset<T, EquipmentDeleteArgs<ExtArgs>>): Prisma__EquipmentClient<$Result.GetResult<Prisma.$EquipmentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Equipment.
     * @param {EquipmentUpdateArgs} args - Arguments to update one Equipment.
     * @example
     * // Update one Equipment
     * const equipment = await prisma.equipment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EquipmentUpdateArgs>(args: SelectSubset<T, EquipmentUpdateArgs<ExtArgs>>): Prisma__EquipmentClient<$Result.GetResult<Prisma.$EquipmentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Equipment.
     * @param {EquipmentDeleteManyArgs} args - Arguments to filter Equipment to delete.
     * @example
     * // Delete a few Equipment
     * const { count } = await prisma.equipment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EquipmentDeleteManyArgs>(args?: SelectSubset<T, EquipmentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Equipment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EquipmentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Equipment
     * const equipment = await prisma.equipment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EquipmentUpdateManyArgs>(args: SelectSubset<T, EquipmentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Equipment and returns the data updated in the database.
     * @param {EquipmentUpdateManyAndReturnArgs} args - Arguments to update many Equipment.
     * @example
     * // Update many Equipment
     * const equipment = await prisma.equipment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Equipment and only return the `id`
     * const equipmentWithIdOnly = await prisma.equipment.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends EquipmentUpdateManyAndReturnArgs>(args: SelectSubset<T, EquipmentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EquipmentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Equipment.
     * @param {EquipmentUpsertArgs} args - Arguments to update or create a Equipment.
     * @example
     * // Update or create a Equipment
     * const equipment = await prisma.equipment.upsert({
     *   create: {
     *     // ... data to create a Equipment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Equipment we want to update
     *   }
     * })
     */
    upsert<T extends EquipmentUpsertArgs>(args: SelectSubset<T, EquipmentUpsertArgs<ExtArgs>>): Prisma__EquipmentClient<$Result.GetResult<Prisma.$EquipmentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Equipment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EquipmentCountArgs} args - Arguments to filter Equipment to count.
     * @example
     * // Count the number of Equipment
     * const count = await prisma.equipment.count({
     *   where: {
     *     // ... the filter for the Equipment we want to count
     *   }
     * })
    **/
    count<T extends EquipmentCountArgs>(
      args?: Subset<T, EquipmentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EquipmentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Equipment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EquipmentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EquipmentAggregateArgs>(args: Subset<T, EquipmentAggregateArgs>): Prisma.PrismaPromise<GetEquipmentAggregateType<T>>

    /**
     * Group by Equipment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EquipmentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EquipmentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EquipmentGroupByArgs['orderBy'] }
        : { orderBy?: EquipmentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EquipmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEquipmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Equipment model
   */
  readonly fields: EquipmentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Equipment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EquipmentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    productionOrders<T extends Equipment$productionOrdersArgs<ExtArgs> = {}>(args?: Subset<T, Equipment$productionOrdersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductionOrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Equipment model
   */
  interface EquipmentFieldRefs {
    readonly id: FieldRef<"Equipment", 'Int'>
    readonly name: FieldRef<"Equipment", 'String'>
    readonly brand: FieldRef<"Equipment", 'String'>
    readonly model: FieldRef<"Equipment", 'String'>
    readonly createdAt: FieldRef<"Equipment", 'DateTime'>
    readonly updatedAt: FieldRef<"Equipment", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Equipment findUnique
   */
  export type EquipmentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipment
     */
    select?: EquipmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Equipment
     */
    omit?: EquipmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipmentInclude<ExtArgs> | null
    /**
     * Filter, which Equipment to fetch.
     */
    where: EquipmentWhereUniqueInput
  }

  /**
   * Equipment findUniqueOrThrow
   */
  export type EquipmentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipment
     */
    select?: EquipmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Equipment
     */
    omit?: EquipmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipmentInclude<ExtArgs> | null
    /**
     * Filter, which Equipment to fetch.
     */
    where: EquipmentWhereUniqueInput
  }

  /**
   * Equipment findFirst
   */
  export type EquipmentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipment
     */
    select?: EquipmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Equipment
     */
    omit?: EquipmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipmentInclude<ExtArgs> | null
    /**
     * Filter, which Equipment to fetch.
     */
    where?: EquipmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Equipment to fetch.
     */
    orderBy?: EquipmentOrderByWithRelationInput | EquipmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Equipment.
     */
    cursor?: EquipmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Equipment from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Equipment.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Equipment.
     */
    distinct?: EquipmentScalarFieldEnum | EquipmentScalarFieldEnum[]
  }

  /**
   * Equipment findFirstOrThrow
   */
  export type EquipmentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipment
     */
    select?: EquipmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Equipment
     */
    omit?: EquipmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipmentInclude<ExtArgs> | null
    /**
     * Filter, which Equipment to fetch.
     */
    where?: EquipmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Equipment to fetch.
     */
    orderBy?: EquipmentOrderByWithRelationInput | EquipmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Equipment.
     */
    cursor?: EquipmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Equipment from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Equipment.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Equipment.
     */
    distinct?: EquipmentScalarFieldEnum | EquipmentScalarFieldEnum[]
  }

  /**
   * Equipment findMany
   */
  export type EquipmentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipment
     */
    select?: EquipmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Equipment
     */
    omit?: EquipmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipmentInclude<ExtArgs> | null
    /**
     * Filter, which Equipment to fetch.
     */
    where?: EquipmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Equipment to fetch.
     */
    orderBy?: EquipmentOrderByWithRelationInput | EquipmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Equipment.
     */
    cursor?: EquipmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Equipment from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Equipment.
     */
    skip?: number
    distinct?: EquipmentScalarFieldEnum | EquipmentScalarFieldEnum[]
  }

  /**
   * Equipment create
   */
  export type EquipmentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipment
     */
    select?: EquipmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Equipment
     */
    omit?: EquipmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipmentInclude<ExtArgs> | null
    /**
     * The data needed to create a Equipment.
     */
    data: XOR<EquipmentCreateInput, EquipmentUncheckedCreateInput>
  }

  /**
   * Equipment createMany
   */
  export type EquipmentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Equipment.
     */
    data: EquipmentCreateManyInput | EquipmentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Equipment createManyAndReturn
   */
  export type EquipmentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipment
     */
    select?: EquipmentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Equipment
     */
    omit?: EquipmentOmit<ExtArgs> | null
    /**
     * The data used to create many Equipment.
     */
    data: EquipmentCreateManyInput | EquipmentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Equipment update
   */
  export type EquipmentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipment
     */
    select?: EquipmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Equipment
     */
    omit?: EquipmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipmentInclude<ExtArgs> | null
    /**
     * The data needed to update a Equipment.
     */
    data: XOR<EquipmentUpdateInput, EquipmentUncheckedUpdateInput>
    /**
     * Choose, which Equipment to update.
     */
    where: EquipmentWhereUniqueInput
  }

  /**
   * Equipment updateMany
   */
  export type EquipmentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Equipment.
     */
    data: XOR<EquipmentUpdateManyMutationInput, EquipmentUncheckedUpdateManyInput>
    /**
     * Filter which Equipment to update
     */
    where?: EquipmentWhereInput
    /**
     * Limit how many Equipment to update.
     */
    limit?: number
  }

  /**
   * Equipment updateManyAndReturn
   */
  export type EquipmentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipment
     */
    select?: EquipmentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Equipment
     */
    omit?: EquipmentOmit<ExtArgs> | null
    /**
     * The data used to update Equipment.
     */
    data: XOR<EquipmentUpdateManyMutationInput, EquipmentUncheckedUpdateManyInput>
    /**
     * Filter which Equipment to update
     */
    where?: EquipmentWhereInput
    /**
     * Limit how many Equipment to update.
     */
    limit?: number
  }

  /**
   * Equipment upsert
   */
  export type EquipmentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipment
     */
    select?: EquipmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Equipment
     */
    omit?: EquipmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipmentInclude<ExtArgs> | null
    /**
     * The filter to search for the Equipment to update in case it exists.
     */
    where: EquipmentWhereUniqueInput
    /**
     * In case the Equipment found by the `where` argument doesn't exist, create a new Equipment with this data.
     */
    create: XOR<EquipmentCreateInput, EquipmentUncheckedCreateInput>
    /**
     * In case the Equipment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EquipmentUpdateInput, EquipmentUncheckedUpdateInput>
  }

  /**
   * Equipment delete
   */
  export type EquipmentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipment
     */
    select?: EquipmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Equipment
     */
    omit?: EquipmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipmentInclude<ExtArgs> | null
    /**
     * Filter which Equipment to delete.
     */
    where: EquipmentWhereUniqueInput
  }

  /**
   * Equipment deleteMany
   */
  export type EquipmentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Equipment to delete
     */
    where?: EquipmentWhereInput
    /**
     * Limit how many Equipment to delete.
     */
    limit?: number
  }

  /**
   * Equipment.productionOrders
   */
  export type Equipment$productionOrdersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductionOrder
     */
    select?: ProductionOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductionOrder
     */
    omit?: ProductionOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductionOrderInclude<ExtArgs> | null
    where?: ProductionOrderWhereInput
    orderBy?: ProductionOrderOrderByWithRelationInput | ProductionOrderOrderByWithRelationInput[]
    cursor?: ProductionOrderWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductionOrderScalarFieldEnum | ProductionOrderScalarFieldEnum[]
  }

  /**
   * Equipment without action
   */
  export type EquipmentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipment
     */
    select?: EquipmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Equipment
     */
    omit?: EquipmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipmentInclude<ExtArgs> | null
  }


  /**
   * Model ProductionOrder
   */

  export type AggregateProductionOrder = {
    _count: ProductionOrderCountAggregateOutputType | null
    _avg: ProductionOrderAvgAggregateOutputType | null
    _sum: ProductionOrderSumAggregateOutputType | null
    _min: ProductionOrderMinAggregateOutputType | null
    _max: ProductionOrderMaxAggregateOutputType | null
  }

  export type ProductionOrderAvgAggregateOutputType = {
    id: number | null
    width: Decimal | null
    height: Decimal | null
    quantityPerRoll: number | null
    diameterCore: Decimal | null
    rollSize: Decimal | null
    requesterId: number | null
    productionResponsibleId: number | null
    employeeId: number | null
  }

  export type ProductionOrderSumAggregateOutputType = {
    id: number | null
    width: Decimal | null
    height: Decimal | null
    quantityPerRoll: number | null
    diameterCore: Decimal | null
    rollSize: Decimal | null
    requesterId: number | null
    productionResponsibleId: number | null
    employeeId: number | null
  }

  export type ProductionOrderMinAggregateOutputType = {
    id: number | null
    description: string | null
    width: Decimal | null
    height: Decimal | null
    lot: string | null
    quantityPerRoll: number | null
    diameterCore: Decimal | null
    rollSize: Decimal | null
    observation: string | null
    requesterId: number | null
    clientId: string | null
    productionResponsibleId: number | null
    status: $Enums.Status | null
    employeeId: number | null
    createdAt: Date | null
    updatedAt: Date | null
    tenantId: string | null
  }

  export type ProductionOrderMaxAggregateOutputType = {
    id: number | null
    description: string | null
    width: Decimal | null
    height: Decimal | null
    lot: string | null
    quantityPerRoll: number | null
    diameterCore: Decimal | null
    rollSize: Decimal | null
    observation: string | null
    requesterId: number | null
    clientId: string | null
    productionResponsibleId: number | null
    status: $Enums.Status | null
    employeeId: number | null
    createdAt: Date | null
    updatedAt: Date | null
    tenantId: string | null
  }

  export type ProductionOrderCountAggregateOutputType = {
    id: number
    description: number
    width: number
    height: number
    lot: number
    quantityPerRoll: number
    diameterCore: number
    rollSize: number
    observation: number
    requesterId: number
    clientId: number
    productionResponsibleId: number
    status: number
    employeeId: number
    createdAt: number
    updatedAt: number
    tenantId: number
    _all: number
  }


  export type ProductionOrderAvgAggregateInputType = {
    id?: true
    width?: true
    height?: true
    quantityPerRoll?: true
    diameterCore?: true
    rollSize?: true
    requesterId?: true
    productionResponsibleId?: true
    employeeId?: true
  }

  export type ProductionOrderSumAggregateInputType = {
    id?: true
    width?: true
    height?: true
    quantityPerRoll?: true
    diameterCore?: true
    rollSize?: true
    requesterId?: true
    productionResponsibleId?: true
    employeeId?: true
  }

  export type ProductionOrderMinAggregateInputType = {
    id?: true
    description?: true
    width?: true
    height?: true
    lot?: true
    quantityPerRoll?: true
    diameterCore?: true
    rollSize?: true
    observation?: true
    requesterId?: true
    clientId?: true
    productionResponsibleId?: true
    status?: true
    employeeId?: true
    createdAt?: true
    updatedAt?: true
    tenantId?: true
  }

  export type ProductionOrderMaxAggregateInputType = {
    id?: true
    description?: true
    width?: true
    height?: true
    lot?: true
    quantityPerRoll?: true
    diameterCore?: true
    rollSize?: true
    observation?: true
    requesterId?: true
    clientId?: true
    productionResponsibleId?: true
    status?: true
    employeeId?: true
    createdAt?: true
    updatedAt?: true
    tenantId?: true
  }

  export type ProductionOrderCountAggregateInputType = {
    id?: true
    description?: true
    width?: true
    height?: true
    lot?: true
    quantityPerRoll?: true
    diameterCore?: true
    rollSize?: true
    observation?: true
    requesterId?: true
    clientId?: true
    productionResponsibleId?: true
    status?: true
    employeeId?: true
    createdAt?: true
    updatedAt?: true
    tenantId?: true
    _all?: true
  }

  export type ProductionOrderAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProductionOrder to aggregate.
     */
    where?: ProductionOrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductionOrders to fetch.
     */
    orderBy?: ProductionOrderOrderByWithRelationInput | ProductionOrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductionOrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductionOrders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductionOrders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProductionOrders
    **/
    _count?: true | ProductionOrderCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductionOrderAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductionOrderSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductionOrderMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductionOrderMaxAggregateInputType
  }

  export type GetProductionOrderAggregateType<T extends ProductionOrderAggregateArgs> = {
        [P in keyof T & keyof AggregateProductionOrder]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProductionOrder[P]>
      : GetScalarType<T[P], AggregateProductionOrder[P]>
  }




  export type ProductionOrderGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductionOrderWhereInput
    orderBy?: ProductionOrderOrderByWithAggregationInput | ProductionOrderOrderByWithAggregationInput[]
    by: ProductionOrderScalarFieldEnum[] | ProductionOrderScalarFieldEnum
    having?: ProductionOrderScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductionOrderCountAggregateInputType | true
    _avg?: ProductionOrderAvgAggregateInputType
    _sum?: ProductionOrderSumAggregateInputType
    _min?: ProductionOrderMinAggregateInputType
    _max?: ProductionOrderMaxAggregateInputType
  }

  export type ProductionOrderGroupByOutputType = {
    id: number
    description: string
    width: Decimal
    height: Decimal
    lot: string
    quantityPerRoll: number
    diameterCore: Decimal
    rollSize: Decimal
    observation: string
    requesterId: number
    clientId: string
    productionResponsibleId: number
    status: $Enums.Status
    employeeId: number
    createdAt: Date
    updatedAt: Date
    tenantId: string
    _count: ProductionOrderCountAggregateOutputType | null
    _avg: ProductionOrderAvgAggregateOutputType | null
    _sum: ProductionOrderSumAggregateOutputType | null
    _min: ProductionOrderMinAggregateOutputType | null
    _max: ProductionOrderMaxAggregateOutputType | null
  }

  type GetProductionOrderGroupByPayload<T extends ProductionOrderGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductionOrderGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductionOrderGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductionOrderGroupByOutputType[P]>
            : GetScalarType<T[P], ProductionOrderGroupByOutputType[P]>
        }
      >
    >


  export type ProductionOrderSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    description?: boolean
    width?: boolean
    height?: boolean
    lot?: boolean
    quantityPerRoll?: boolean
    diameterCore?: boolean
    rollSize?: boolean
    observation?: boolean
    requesterId?: boolean
    clientId?: boolean
    productionResponsibleId?: boolean
    status?: boolean
    employeeId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tenantId?: boolean
    client?: boolean | ClientDefaultArgs<ExtArgs>
    rawMaterial?: boolean | ProductionOrder$rawMaterialArgs<ExtArgs>
    package?: boolean | ProductionOrder$packageArgs<ExtArgs>
    equipment?: boolean | ProductionOrder$equipmentArgs<ExtArgs>
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
    _count?: boolean | ProductionOrderCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["productionOrder"]>

  export type ProductionOrderSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    description?: boolean
    width?: boolean
    height?: boolean
    lot?: boolean
    quantityPerRoll?: boolean
    diameterCore?: boolean
    rollSize?: boolean
    observation?: boolean
    requesterId?: boolean
    clientId?: boolean
    productionResponsibleId?: boolean
    status?: boolean
    employeeId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tenantId?: boolean
    client?: boolean | ClientDefaultArgs<ExtArgs>
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["productionOrder"]>

  export type ProductionOrderSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    description?: boolean
    width?: boolean
    height?: boolean
    lot?: boolean
    quantityPerRoll?: boolean
    diameterCore?: boolean
    rollSize?: boolean
    observation?: boolean
    requesterId?: boolean
    clientId?: boolean
    productionResponsibleId?: boolean
    status?: boolean
    employeeId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tenantId?: boolean
    client?: boolean | ClientDefaultArgs<ExtArgs>
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["productionOrder"]>

  export type ProductionOrderSelectScalar = {
    id?: boolean
    description?: boolean
    width?: boolean
    height?: boolean
    lot?: boolean
    quantityPerRoll?: boolean
    diameterCore?: boolean
    rollSize?: boolean
    observation?: boolean
    requesterId?: boolean
    clientId?: boolean
    productionResponsibleId?: boolean
    status?: boolean
    employeeId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tenantId?: boolean
  }

  export type ProductionOrderOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "description" | "width" | "height" | "lot" | "quantityPerRoll" | "diameterCore" | "rollSize" | "observation" | "requesterId" | "clientId" | "productionResponsibleId" | "status" | "employeeId" | "createdAt" | "updatedAt" | "tenantId", ExtArgs["result"]["productionOrder"]>
  export type ProductionOrderInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | ClientDefaultArgs<ExtArgs>
    rawMaterial?: boolean | ProductionOrder$rawMaterialArgs<ExtArgs>
    package?: boolean | ProductionOrder$packageArgs<ExtArgs>
    equipment?: boolean | ProductionOrder$equipmentArgs<ExtArgs>
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
    _count?: boolean | ProductionOrderCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProductionOrderIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | ClientDefaultArgs<ExtArgs>
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
  }
  export type ProductionOrderIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | ClientDefaultArgs<ExtArgs>
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
  }

  export type $ProductionOrderPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProductionOrder"
    objects: {
      client: Prisma.$ClientPayload<ExtArgs>
      rawMaterial: Prisma.$RawMaterialPayload<ExtArgs>[]
      package: Prisma.$PackagePayload<ExtArgs>[]
      equipment: Prisma.$EquipmentPayload<ExtArgs>[]
      tenant: Prisma.$TenantPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      description: string
      width: Prisma.Decimal
      height: Prisma.Decimal
      lot: string
      quantityPerRoll: number
      diameterCore: Prisma.Decimal
      rollSize: Prisma.Decimal
      observation: string
      requesterId: number
      clientId: string
      productionResponsibleId: number
      status: $Enums.Status
      employeeId: number
      createdAt: Date
      updatedAt: Date
      tenantId: string
    }, ExtArgs["result"]["productionOrder"]>
    composites: {}
  }

  type ProductionOrderGetPayload<S extends boolean | null | undefined | ProductionOrderDefaultArgs> = $Result.GetResult<Prisma.$ProductionOrderPayload, S>

  type ProductionOrderCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProductionOrderFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProductionOrderCountAggregateInputType | true
    }

  export interface ProductionOrderDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProductionOrder'], meta: { name: 'ProductionOrder' } }
    /**
     * Find zero or one ProductionOrder that matches the filter.
     * @param {ProductionOrderFindUniqueArgs} args - Arguments to find a ProductionOrder
     * @example
     * // Get one ProductionOrder
     * const productionOrder = await prisma.productionOrder.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProductionOrderFindUniqueArgs>(args: SelectSubset<T, ProductionOrderFindUniqueArgs<ExtArgs>>): Prisma__ProductionOrderClient<$Result.GetResult<Prisma.$ProductionOrderPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ProductionOrder that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProductionOrderFindUniqueOrThrowArgs} args - Arguments to find a ProductionOrder
     * @example
     * // Get one ProductionOrder
     * const productionOrder = await prisma.productionOrder.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProductionOrderFindUniqueOrThrowArgs>(args: SelectSubset<T, ProductionOrderFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProductionOrderClient<$Result.GetResult<Prisma.$ProductionOrderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProductionOrder that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductionOrderFindFirstArgs} args - Arguments to find a ProductionOrder
     * @example
     * // Get one ProductionOrder
     * const productionOrder = await prisma.productionOrder.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProductionOrderFindFirstArgs>(args?: SelectSubset<T, ProductionOrderFindFirstArgs<ExtArgs>>): Prisma__ProductionOrderClient<$Result.GetResult<Prisma.$ProductionOrderPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProductionOrder that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductionOrderFindFirstOrThrowArgs} args - Arguments to find a ProductionOrder
     * @example
     * // Get one ProductionOrder
     * const productionOrder = await prisma.productionOrder.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProductionOrderFindFirstOrThrowArgs>(args?: SelectSubset<T, ProductionOrderFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProductionOrderClient<$Result.GetResult<Prisma.$ProductionOrderPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ProductionOrders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductionOrderFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProductionOrders
     * const productionOrders = await prisma.productionOrder.findMany()
     * 
     * // Get first 10 ProductionOrders
     * const productionOrders = await prisma.productionOrder.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productionOrderWithIdOnly = await prisma.productionOrder.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProductionOrderFindManyArgs>(args?: SelectSubset<T, ProductionOrderFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductionOrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ProductionOrder.
     * @param {ProductionOrderCreateArgs} args - Arguments to create a ProductionOrder.
     * @example
     * // Create one ProductionOrder
     * const ProductionOrder = await prisma.productionOrder.create({
     *   data: {
     *     // ... data to create a ProductionOrder
     *   }
     * })
     * 
     */
    create<T extends ProductionOrderCreateArgs>(args: SelectSubset<T, ProductionOrderCreateArgs<ExtArgs>>): Prisma__ProductionOrderClient<$Result.GetResult<Prisma.$ProductionOrderPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ProductionOrders.
     * @param {ProductionOrderCreateManyArgs} args - Arguments to create many ProductionOrders.
     * @example
     * // Create many ProductionOrders
     * const productionOrder = await prisma.productionOrder.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProductionOrderCreateManyArgs>(args?: SelectSubset<T, ProductionOrderCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ProductionOrders and returns the data saved in the database.
     * @param {ProductionOrderCreateManyAndReturnArgs} args - Arguments to create many ProductionOrders.
     * @example
     * // Create many ProductionOrders
     * const productionOrder = await prisma.productionOrder.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ProductionOrders and only return the `id`
     * const productionOrderWithIdOnly = await prisma.productionOrder.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProductionOrderCreateManyAndReturnArgs>(args?: SelectSubset<T, ProductionOrderCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductionOrderPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ProductionOrder.
     * @param {ProductionOrderDeleteArgs} args - Arguments to delete one ProductionOrder.
     * @example
     * // Delete one ProductionOrder
     * const ProductionOrder = await prisma.productionOrder.delete({
     *   where: {
     *     // ... filter to delete one ProductionOrder
     *   }
     * })
     * 
     */
    delete<T extends ProductionOrderDeleteArgs>(args: SelectSubset<T, ProductionOrderDeleteArgs<ExtArgs>>): Prisma__ProductionOrderClient<$Result.GetResult<Prisma.$ProductionOrderPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ProductionOrder.
     * @param {ProductionOrderUpdateArgs} args - Arguments to update one ProductionOrder.
     * @example
     * // Update one ProductionOrder
     * const productionOrder = await prisma.productionOrder.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProductionOrderUpdateArgs>(args: SelectSubset<T, ProductionOrderUpdateArgs<ExtArgs>>): Prisma__ProductionOrderClient<$Result.GetResult<Prisma.$ProductionOrderPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ProductionOrders.
     * @param {ProductionOrderDeleteManyArgs} args - Arguments to filter ProductionOrders to delete.
     * @example
     * // Delete a few ProductionOrders
     * const { count } = await prisma.productionOrder.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProductionOrderDeleteManyArgs>(args?: SelectSubset<T, ProductionOrderDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProductionOrders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductionOrderUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProductionOrders
     * const productionOrder = await prisma.productionOrder.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProductionOrderUpdateManyArgs>(args: SelectSubset<T, ProductionOrderUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProductionOrders and returns the data updated in the database.
     * @param {ProductionOrderUpdateManyAndReturnArgs} args - Arguments to update many ProductionOrders.
     * @example
     * // Update many ProductionOrders
     * const productionOrder = await prisma.productionOrder.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ProductionOrders and only return the `id`
     * const productionOrderWithIdOnly = await prisma.productionOrder.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProductionOrderUpdateManyAndReturnArgs>(args: SelectSubset<T, ProductionOrderUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductionOrderPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ProductionOrder.
     * @param {ProductionOrderUpsertArgs} args - Arguments to update or create a ProductionOrder.
     * @example
     * // Update or create a ProductionOrder
     * const productionOrder = await prisma.productionOrder.upsert({
     *   create: {
     *     // ... data to create a ProductionOrder
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProductionOrder we want to update
     *   }
     * })
     */
    upsert<T extends ProductionOrderUpsertArgs>(args: SelectSubset<T, ProductionOrderUpsertArgs<ExtArgs>>): Prisma__ProductionOrderClient<$Result.GetResult<Prisma.$ProductionOrderPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ProductionOrders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductionOrderCountArgs} args - Arguments to filter ProductionOrders to count.
     * @example
     * // Count the number of ProductionOrders
     * const count = await prisma.productionOrder.count({
     *   where: {
     *     // ... the filter for the ProductionOrders we want to count
     *   }
     * })
    **/
    count<T extends ProductionOrderCountArgs>(
      args?: Subset<T, ProductionOrderCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductionOrderCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProductionOrder.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductionOrderAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProductionOrderAggregateArgs>(args: Subset<T, ProductionOrderAggregateArgs>): Prisma.PrismaPromise<GetProductionOrderAggregateType<T>>

    /**
     * Group by ProductionOrder.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductionOrderGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProductionOrderGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductionOrderGroupByArgs['orderBy'] }
        : { orderBy?: ProductionOrderGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProductionOrderGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductionOrderGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProductionOrder model
   */
  readonly fields: ProductionOrderFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProductionOrder.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductionOrderClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    client<T extends ClientDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ClientDefaultArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    rawMaterial<T extends ProductionOrder$rawMaterialArgs<ExtArgs> = {}>(args?: Subset<T, ProductionOrder$rawMaterialArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RawMaterialPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    package<T extends ProductionOrder$packageArgs<ExtArgs> = {}>(args?: Subset<T, ProductionOrder$packageArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PackagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    equipment<T extends ProductionOrder$equipmentArgs<ExtArgs> = {}>(args?: Subset<T, ProductionOrder$equipmentArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EquipmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    tenant<T extends TenantDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TenantDefaultArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ProductionOrder model
   */
  interface ProductionOrderFieldRefs {
    readonly id: FieldRef<"ProductionOrder", 'Int'>
    readonly description: FieldRef<"ProductionOrder", 'String'>
    readonly width: FieldRef<"ProductionOrder", 'Decimal'>
    readonly height: FieldRef<"ProductionOrder", 'Decimal'>
    readonly lot: FieldRef<"ProductionOrder", 'String'>
    readonly quantityPerRoll: FieldRef<"ProductionOrder", 'Int'>
    readonly diameterCore: FieldRef<"ProductionOrder", 'Decimal'>
    readonly rollSize: FieldRef<"ProductionOrder", 'Decimal'>
    readonly observation: FieldRef<"ProductionOrder", 'String'>
    readonly requesterId: FieldRef<"ProductionOrder", 'Int'>
    readonly clientId: FieldRef<"ProductionOrder", 'String'>
    readonly productionResponsibleId: FieldRef<"ProductionOrder", 'Int'>
    readonly status: FieldRef<"ProductionOrder", 'Status'>
    readonly employeeId: FieldRef<"ProductionOrder", 'Int'>
    readonly createdAt: FieldRef<"ProductionOrder", 'DateTime'>
    readonly updatedAt: FieldRef<"ProductionOrder", 'DateTime'>
    readonly tenantId: FieldRef<"ProductionOrder", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ProductionOrder findUnique
   */
  export type ProductionOrderFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductionOrder
     */
    select?: ProductionOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductionOrder
     */
    omit?: ProductionOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductionOrderInclude<ExtArgs> | null
    /**
     * Filter, which ProductionOrder to fetch.
     */
    where: ProductionOrderWhereUniqueInput
  }

  /**
   * ProductionOrder findUniqueOrThrow
   */
  export type ProductionOrderFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductionOrder
     */
    select?: ProductionOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductionOrder
     */
    omit?: ProductionOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductionOrderInclude<ExtArgs> | null
    /**
     * Filter, which ProductionOrder to fetch.
     */
    where: ProductionOrderWhereUniqueInput
  }

  /**
   * ProductionOrder findFirst
   */
  export type ProductionOrderFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductionOrder
     */
    select?: ProductionOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductionOrder
     */
    omit?: ProductionOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductionOrderInclude<ExtArgs> | null
    /**
     * Filter, which ProductionOrder to fetch.
     */
    where?: ProductionOrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductionOrders to fetch.
     */
    orderBy?: ProductionOrderOrderByWithRelationInput | ProductionOrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductionOrders.
     */
    cursor?: ProductionOrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductionOrders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductionOrders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductionOrders.
     */
    distinct?: ProductionOrderScalarFieldEnum | ProductionOrderScalarFieldEnum[]
  }

  /**
   * ProductionOrder findFirstOrThrow
   */
  export type ProductionOrderFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductionOrder
     */
    select?: ProductionOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductionOrder
     */
    omit?: ProductionOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductionOrderInclude<ExtArgs> | null
    /**
     * Filter, which ProductionOrder to fetch.
     */
    where?: ProductionOrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductionOrders to fetch.
     */
    orderBy?: ProductionOrderOrderByWithRelationInput | ProductionOrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductionOrders.
     */
    cursor?: ProductionOrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductionOrders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductionOrders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductionOrders.
     */
    distinct?: ProductionOrderScalarFieldEnum | ProductionOrderScalarFieldEnum[]
  }

  /**
   * ProductionOrder findMany
   */
  export type ProductionOrderFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductionOrder
     */
    select?: ProductionOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductionOrder
     */
    omit?: ProductionOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductionOrderInclude<ExtArgs> | null
    /**
     * Filter, which ProductionOrders to fetch.
     */
    where?: ProductionOrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductionOrders to fetch.
     */
    orderBy?: ProductionOrderOrderByWithRelationInput | ProductionOrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProductionOrders.
     */
    cursor?: ProductionOrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductionOrders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductionOrders.
     */
    skip?: number
    distinct?: ProductionOrderScalarFieldEnum | ProductionOrderScalarFieldEnum[]
  }

  /**
   * ProductionOrder create
   */
  export type ProductionOrderCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductionOrder
     */
    select?: ProductionOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductionOrder
     */
    omit?: ProductionOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductionOrderInclude<ExtArgs> | null
    /**
     * The data needed to create a ProductionOrder.
     */
    data: XOR<ProductionOrderCreateInput, ProductionOrderUncheckedCreateInput>
  }

  /**
   * ProductionOrder createMany
   */
  export type ProductionOrderCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProductionOrders.
     */
    data: ProductionOrderCreateManyInput | ProductionOrderCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ProductionOrder createManyAndReturn
   */
  export type ProductionOrderCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductionOrder
     */
    select?: ProductionOrderSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProductionOrder
     */
    omit?: ProductionOrderOmit<ExtArgs> | null
    /**
     * The data used to create many ProductionOrders.
     */
    data: ProductionOrderCreateManyInput | ProductionOrderCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductionOrderIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProductionOrder update
   */
  export type ProductionOrderUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductionOrder
     */
    select?: ProductionOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductionOrder
     */
    omit?: ProductionOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductionOrderInclude<ExtArgs> | null
    /**
     * The data needed to update a ProductionOrder.
     */
    data: XOR<ProductionOrderUpdateInput, ProductionOrderUncheckedUpdateInput>
    /**
     * Choose, which ProductionOrder to update.
     */
    where: ProductionOrderWhereUniqueInput
  }

  /**
   * ProductionOrder updateMany
   */
  export type ProductionOrderUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProductionOrders.
     */
    data: XOR<ProductionOrderUpdateManyMutationInput, ProductionOrderUncheckedUpdateManyInput>
    /**
     * Filter which ProductionOrders to update
     */
    where?: ProductionOrderWhereInput
    /**
     * Limit how many ProductionOrders to update.
     */
    limit?: number
  }

  /**
   * ProductionOrder updateManyAndReturn
   */
  export type ProductionOrderUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductionOrder
     */
    select?: ProductionOrderSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProductionOrder
     */
    omit?: ProductionOrderOmit<ExtArgs> | null
    /**
     * The data used to update ProductionOrders.
     */
    data: XOR<ProductionOrderUpdateManyMutationInput, ProductionOrderUncheckedUpdateManyInput>
    /**
     * Filter which ProductionOrders to update
     */
    where?: ProductionOrderWhereInput
    /**
     * Limit how many ProductionOrders to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductionOrderIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProductionOrder upsert
   */
  export type ProductionOrderUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductionOrder
     */
    select?: ProductionOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductionOrder
     */
    omit?: ProductionOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductionOrderInclude<ExtArgs> | null
    /**
     * The filter to search for the ProductionOrder to update in case it exists.
     */
    where: ProductionOrderWhereUniqueInput
    /**
     * In case the ProductionOrder found by the `where` argument doesn't exist, create a new ProductionOrder with this data.
     */
    create: XOR<ProductionOrderCreateInput, ProductionOrderUncheckedCreateInput>
    /**
     * In case the ProductionOrder was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductionOrderUpdateInput, ProductionOrderUncheckedUpdateInput>
  }

  /**
   * ProductionOrder delete
   */
  export type ProductionOrderDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductionOrder
     */
    select?: ProductionOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductionOrder
     */
    omit?: ProductionOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductionOrderInclude<ExtArgs> | null
    /**
     * Filter which ProductionOrder to delete.
     */
    where: ProductionOrderWhereUniqueInput
  }

  /**
   * ProductionOrder deleteMany
   */
  export type ProductionOrderDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProductionOrders to delete
     */
    where?: ProductionOrderWhereInput
    /**
     * Limit how many ProductionOrders to delete.
     */
    limit?: number
  }

  /**
   * ProductionOrder.rawMaterial
   */
  export type ProductionOrder$rawMaterialArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RawMaterial
     */
    select?: RawMaterialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RawMaterial
     */
    omit?: RawMaterialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RawMaterialInclude<ExtArgs> | null
    where?: RawMaterialWhereInput
    orderBy?: RawMaterialOrderByWithRelationInput | RawMaterialOrderByWithRelationInput[]
    cursor?: RawMaterialWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RawMaterialScalarFieldEnum | RawMaterialScalarFieldEnum[]
  }

  /**
   * ProductionOrder.package
   */
  export type ProductionOrder$packageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Package
     */
    select?: PackageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Package
     */
    omit?: PackageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PackageInclude<ExtArgs> | null
    where?: PackageWhereInput
    orderBy?: PackageOrderByWithRelationInput | PackageOrderByWithRelationInput[]
    cursor?: PackageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PackageScalarFieldEnum | PackageScalarFieldEnum[]
  }

  /**
   * ProductionOrder.equipment
   */
  export type ProductionOrder$equipmentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipment
     */
    select?: EquipmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Equipment
     */
    omit?: EquipmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipmentInclude<ExtArgs> | null
    where?: EquipmentWhereInput
    orderBy?: EquipmentOrderByWithRelationInput | EquipmentOrderByWithRelationInput[]
    cursor?: EquipmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EquipmentScalarFieldEnum | EquipmentScalarFieldEnum[]
  }

  /**
   * ProductionOrder without action
   */
  export type ProductionOrderDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductionOrder
     */
    select?: ProductionOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductionOrder
     */
    omit?: ProductionOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductionOrderInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const TenantScalarFieldEnum: {
    id: 'id',
    name: 'name',
    domain: 'domain',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TenantScalarFieldEnum = (typeof TenantScalarFieldEnum)[keyof typeof TenantScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    tenantId: 'tenantId'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const ProfileScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    role: 'role',
    type: 'type',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ProfileScalarFieldEnum = (typeof ProfileScalarFieldEnum)[keyof typeof ProfileScalarFieldEnum]


  export const ClientScalarFieldEnum: {
    id: 'id',
    name: 'name',
    identification: 'identification',
    type: 'type',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    tenantId: 'tenantId'
  };

  export type ClientScalarFieldEnum = (typeof ClientScalarFieldEnum)[keyof typeof ClientScalarFieldEnum]


  export const RawMaterialScalarFieldEnum: {
    id: 'id',
    name: 'name',
    lot: 'lot',
    unit: 'unit',
    quantity: 'quantity',
    rawMaterialTypeId: 'rawMaterialTypeId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type RawMaterialScalarFieldEnum = (typeof RawMaterialScalarFieldEnum)[keyof typeof RawMaterialScalarFieldEnum]


  export const RawMaterialTypeScalarFieldEnum: {
    id: 'id',
    name: 'name',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type RawMaterialTypeScalarFieldEnum = (typeof RawMaterialTypeScalarFieldEnum)[keyof typeof RawMaterialTypeScalarFieldEnum]


  export const PackageScalarFieldEnum: {
    id: 'id',
    name: 'name',
    lot: 'lot',
    unit: 'unit',
    quantity: 'quantity',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PackageScalarFieldEnum = (typeof PackageScalarFieldEnum)[keyof typeof PackageScalarFieldEnum]


  export const EquipmentScalarFieldEnum: {
    id: 'id',
    name: 'name',
    brand: 'brand',
    model: 'model',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type EquipmentScalarFieldEnum = (typeof EquipmentScalarFieldEnum)[keyof typeof EquipmentScalarFieldEnum]


  export const ProductionOrderScalarFieldEnum: {
    id: 'id',
    description: 'description',
    width: 'width',
    height: 'height',
    lot: 'lot',
    quantityPerRoll: 'quantityPerRoll',
    diameterCore: 'diameterCore',
    rollSize: 'rollSize',
    observation: 'observation',
    requesterId: 'requesterId',
    clientId: 'clientId',
    productionResponsibleId: 'productionResponsibleId',
    status: 'status',
    employeeId: 'employeeId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    tenantId: 'tenantId'
  };

  export type ProductionOrderScalarFieldEnum = (typeof ProductionOrderScalarFieldEnum)[keyof typeof ProductionOrderScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'ProfileType[]'
   */
  export type ListEnumProfileTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ProfileType[]'>
    


  /**
   * Reference to a field of type 'ProfileType'
   */
  export type EnumProfileTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ProfileType'>
    


  /**
   * Reference to a field of type 'ClientType'
   */
  export type EnumClientTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ClientType'>
    


  /**
   * Reference to a field of type 'ClientType[]'
   */
  export type ListEnumClientTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ClientType[]'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'Status'
   */
  export type EnumStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Status'>
    


  /**
   * Reference to a field of type 'Status[]'
   */
  export type ListEnumStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Status[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type TenantWhereInput = {
    AND?: TenantWhereInput | TenantWhereInput[]
    OR?: TenantWhereInput[]
    NOT?: TenantWhereInput | TenantWhereInput[]
    id?: StringFilter<"Tenant"> | string
    name?: StringFilter<"Tenant"> | string
    domain?: StringNullableFilter<"Tenant"> | string | null
    createdAt?: DateTimeFilter<"Tenant"> | Date | string
    updatedAt?: DateTimeFilter<"Tenant"> | Date | string
    clients?: ClientListRelationFilter
    productionOrders?: ProductionOrderListRelationFilter
    User?: UserListRelationFilter
  }

  export type TenantOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    domain?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    clients?: ClientOrderByRelationAggregateInput
    productionOrders?: ProductionOrderOrderByRelationAggregateInput
    User?: UserOrderByRelationAggregateInput
  }

  export type TenantWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    domain?: string
    AND?: TenantWhereInput | TenantWhereInput[]
    OR?: TenantWhereInput[]
    NOT?: TenantWhereInput | TenantWhereInput[]
    createdAt?: DateTimeFilter<"Tenant"> | Date | string
    updatedAt?: DateTimeFilter<"Tenant"> | Date | string
    clients?: ClientListRelationFilter
    productionOrders?: ProductionOrderListRelationFilter
    User?: UserListRelationFilter
  }, "id" | "name" | "domain">

  export type TenantOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    domain?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TenantCountOrderByAggregateInput
    _max?: TenantMaxOrderByAggregateInput
    _min?: TenantMinOrderByAggregateInput
  }

  export type TenantScalarWhereWithAggregatesInput = {
    AND?: TenantScalarWhereWithAggregatesInput | TenantScalarWhereWithAggregatesInput[]
    OR?: TenantScalarWhereWithAggregatesInput[]
    NOT?: TenantScalarWhereWithAggregatesInput | TenantScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Tenant"> | string
    name?: StringWithAggregatesFilter<"Tenant"> | string
    domain?: StringNullableWithAggregatesFilter<"Tenant"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Tenant"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Tenant"> | Date | string
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    name?: StringNullableFilter<"User"> | string | null
    email?: StringFilter<"User"> | string
    tenantId?: StringFilter<"User"> | string
    profile?: XOR<ProfileNullableScalarRelationFilter, ProfileWhereInput> | null
    tenant?: XOR<TenantScalarRelationFilter, TenantWhereInput>
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrder
    tenantId?: SortOrder
    profile?: ProfileOrderByWithRelationInput
    tenant?: TenantOrderByWithRelationInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringNullableFilter<"User"> | string | null
    tenantId?: StringFilter<"User"> | string
    profile?: XOR<ProfileNullableScalarRelationFilter, ProfileWhereInput> | null
    tenant?: XOR<TenantScalarRelationFilter, TenantWhereInput>
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrder
    tenantId?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    email?: StringWithAggregatesFilter<"User"> | string
    tenantId?: StringWithAggregatesFilter<"User"> | string
  }

  export type ProfileWhereInput = {
    AND?: ProfileWhereInput | ProfileWhereInput[]
    OR?: ProfileWhereInput[]
    NOT?: ProfileWhereInput | ProfileWhereInput[]
    id?: IntFilter<"Profile"> | number
    userId?: IntFilter<"Profile"> | number
    role?: StringFilter<"Profile"> | string
    type?: EnumProfileTypeNullableListFilter<"Profile">
    createdAt?: DateTimeFilter<"Profile"> | Date | string
    updatedAt?: DateTimeFilter<"Profile"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type ProfileOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    role?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type ProfileWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    userId?: number
    AND?: ProfileWhereInput | ProfileWhereInput[]
    OR?: ProfileWhereInput[]
    NOT?: ProfileWhereInput | ProfileWhereInput[]
    role?: StringFilter<"Profile"> | string
    type?: EnumProfileTypeNullableListFilter<"Profile">
    createdAt?: DateTimeFilter<"Profile"> | Date | string
    updatedAt?: DateTimeFilter<"Profile"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "userId">

  export type ProfileOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    role?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ProfileCountOrderByAggregateInput
    _avg?: ProfileAvgOrderByAggregateInput
    _max?: ProfileMaxOrderByAggregateInput
    _min?: ProfileMinOrderByAggregateInput
    _sum?: ProfileSumOrderByAggregateInput
  }

  export type ProfileScalarWhereWithAggregatesInput = {
    AND?: ProfileScalarWhereWithAggregatesInput | ProfileScalarWhereWithAggregatesInput[]
    OR?: ProfileScalarWhereWithAggregatesInput[]
    NOT?: ProfileScalarWhereWithAggregatesInput | ProfileScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Profile"> | number
    userId?: IntWithAggregatesFilter<"Profile"> | number
    role?: StringWithAggregatesFilter<"Profile"> | string
    type?: EnumProfileTypeNullableListFilter<"Profile">
    createdAt?: DateTimeWithAggregatesFilter<"Profile"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Profile"> | Date | string
  }

  export type ClientWhereInput = {
    AND?: ClientWhereInput | ClientWhereInput[]
    OR?: ClientWhereInput[]
    NOT?: ClientWhereInput | ClientWhereInput[]
    id?: StringFilter<"Client"> | string
    name?: StringFilter<"Client"> | string
    identification?: StringFilter<"Client"> | string
    type?: EnumClientTypeFilter<"Client"> | $Enums.ClientType
    createdAt?: DateTimeFilter<"Client"> | Date | string
    updatedAt?: DateTimeFilter<"Client"> | Date | string
    tenantId?: StringFilter<"Client"> | string
    productionOrders?: ProductionOrderListRelationFilter
    tenant?: XOR<TenantScalarRelationFilter, TenantWhereInput>
  }

  export type ClientOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    identification?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    tenantId?: SortOrder
    productionOrders?: ProductionOrderOrderByRelationAggregateInput
    tenant?: TenantOrderByWithRelationInput
  }

  export type ClientWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    identification?: string
    AND?: ClientWhereInput | ClientWhereInput[]
    OR?: ClientWhereInput[]
    NOT?: ClientWhereInput | ClientWhereInput[]
    name?: StringFilter<"Client"> | string
    type?: EnumClientTypeFilter<"Client"> | $Enums.ClientType
    createdAt?: DateTimeFilter<"Client"> | Date | string
    updatedAt?: DateTimeFilter<"Client"> | Date | string
    tenantId?: StringFilter<"Client"> | string
    productionOrders?: ProductionOrderListRelationFilter
    tenant?: XOR<TenantScalarRelationFilter, TenantWhereInput>
  }, "id" | "identification">

  export type ClientOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    identification?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    tenantId?: SortOrder
    _count?: ClientCountOrderByAggregateInput
    _max?: ClientMaxOrderByAggregateInput
    _min?: ClientMinOrderByAggregateInput
  }

  export type ClientScalarWhereWithAggregatesInput = {
    AND?: ClientScalarWhereWithAggregatesInput | ClientScalarWhereWithAggregatesInput[]
    OR?: ClientScalarWhereWithAggregatesInput[]
    NOT?: ClientScalarWhereWithAggregatesInput | ClientScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Client"> | string
    name?: StringWithAggregatesFilter<"Client"> | string
    identification?: StringWithAggregatesFilter<"Client"> | string
    type?: EnumClientTypeWithAggregatesFilter<"Client"> | $Enums.ClientType
    createdAt?: DateTimeWithAggregatesFilter<"Client"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Client"> | Date | string
    tenantId?: StringWithAggregatesFilter<"Client"> | string
  }

  export type RawMaterialWhereInput = {
    AND?: RawMaterialWhereInput | RawMaterialWhereInput[]
    OR?: RawMaterialWhereInput[]
    NOT?: RawMaterialWhereInput | RawMaterialWhereInput[]
    id?: IntFilter<"RawMaterial"> | number
    name?: StringFilter<"RawMaterial"> | string
    lot?: StringFilter<"RawMaterial"> | string
    unit?: StringFilter<"RawMaterial"> | string
    quantity?: IntFilter<"RawMaterial"> | number
    rawMaterialTypeId?: IntFilter<"RawMaterial"> | number
    createdAt?: DateTimeFilter<"RawMaterial"> | Date | string
    updatedAt?: DateTimeFilter<"RawMaterial"> | Date | string
    materialType?: XOR<RawMaterialTypeScalarRelationFilter, RawMaterialTypeWhereInput>
    productionOrders?: ProductionOrderListRelationFilter
  }

  export type RawMaterialOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    lot?: SortOrder
    unit?: SortOrder
    quantity?: SortOrder
    rawMaterialTypeId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    materialType?: RawMaterialTypeOrderByWithRelationInput
    productionOrders?: ProductionOrderOrderByRelationAggregateInput
  }

  export type RawMaterialWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: RawMaterialWhereInput | RawMaterialWhereInput[]
    OR?: RawMaterialWhereInput[]
    NOT?: RawMaterialWhereInput | RawMaterialWhereInput[]
    name?: StringFilter<"RawMaterial"> | string
    lot?: StringFilter<"RawMaterial"> | string
    unit?: StringFilter<"RawMaterial"> | string
    quantity?: IntFilter<"RawMaterial"> | number
    rawMaterialTypeId?: IntFilter<"RawMaterial"> | number
    createdAt?: DateTimeFilter<"RawMaterial"> | Date | string
    updatedAt?: DateTimeFilter<"RawMaterial"> | Date | string
    materialType?: XOR<RawMaterialTypeScalarRelationFilter, RawMaterialTypeWhereInput>
    productionOrders?: ProductionOrderListRelationFilter
  }, "id">

  export type RawMaterialOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    lot?: SortOrder
    unit?: SortOrder
    quantity?: SortOrder
    rawMaterialTypeId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: RawMaterialCountOrderByAggregateInput
    _avg?: RawMaterialAvgOrderByAggregateInput
    _max?: RawMaterialMaxOrderByAggregateInput
    _min?: RawMaterialMinOrderByAggregateInput
    _sum?: RawMaterialSumOrderByAggregateInput
  }

  export type RawMaterialScalarWhereWithAggregatesInput = {
    AND?: RawMaterialScalarWhereWithAggregatesInput | RawMaterialScalarWhereWithAggregatesInput[]
    OR?: RawMaterialScalarWhereWithAggregatesInput[]
    NOT?: RawMaterialScalarWhereWithAggregatesInput | RawMaterialScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"RawMaterial"> | number
    name?: StringWithAggregatesFilter<"RawMaterial"> | string
    lot?: StringWithAggregatesFilter<"RawMaterial"> | string
    unit?: StringWithAggregatesFilter<"RawMaterial"> | string
    quantity?: IntWithAggregatesFilter<"RawMaterial"> | number
    rawMaterialTypeId?: IntWithAggregatesFilter<"RawMaterial"> | number
    createdAt?: DateTimeWithAggregatesFilter<"RawMaterial"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"RawMaterial"> | Date | string
  }

  export type RawMaterialTypeWhereInput = {
    AND?: RawMaterialTypeWhereInput | RawMaterialTypeWhereInput[]
    OR?: RawMaterialTypeWhereInput[]
    NOT?: RawMaterialTypeWhereInput | RawMaterialTypeWhereInput[]
    id?: IntFilter<"RawMaterialType"> | number
    name?: StringFilter<"RawMaterialType"> | string
    createdAt?: DateTimeFilter<"RawMaterialType"> | Date | string
    updatedAt?: DateTimeFilter<"RawMaterialType"> | Date | string
    RawMaterial?: RawMaterialListRelationFilter
  }

  export type RawMaterialTypeOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    RawMaterial?: RawMaterialOrderByRelationAggregateInput
  }

  export type RawMaterialTypeWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: RawMaterialTypeWhereInput | RawMaterialTypeWhereInput[]
    OR?: RawMaterialTypeWhereInput[]
    NOT?: RawMaterialTypeWhereInput | RawMaterialTypeWhereInput[]
    name?: StringFilter<"RawMaterialType"> | string
    createdAt?: DateTimeFilter<"RawMaterialType"> | Date | string
    updatedAt?: DateTimeFilter<"RawMaterialType"> | Date | string
    RawMaterial?: RawMaterialListRelationFilter
  }, "id">

  export type RawMaterialTypeOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: RawMaterialTypeCountOrderByAggregateInput
    _avg?: RawMaterialTypeAvgOrderByAggregateInput
    _max?: RawMaterialTypeMaxOrderByAggregateInput
    _min?: RawMaterialTypeMinOrderByAggregateInput
    _sum?: RawMaterialTypeSumOrderByAggregateInput
  }

  export type RawMaterialTypeScalarWhereWithAggregatesInput = {
    AND?: RawMaterialTypeScalarWhereWithAggregatesInput | RawMaterialTypeScalarWhereWithAggregatesInput[]
    OR?: RawMaterialTypeScalarWhereWithAggregatesInput[]
    NOT?: RawMaterialTypeScalarWhereWithAggregatesInput | RawMaterialTypeScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"RawMaterialType"> | number
    name?: StringWithAggregatesFilter<"RawMaterialType"> | string
    createdAt?: DateTimeWithAggregatesFilter<"RawMaterialType"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"RawMaterialType"> | Date | string
  }

  export type PackageWhereInput = {
    AND?: PackageWhereInput | PackageWhereInput[]
    OR?: PackageWhereInput[]
    NOT?: PackageWhereInput | PackageWhereInput[]
    id?: IntFilter<"Package"> | number
    name?: StringFilter<"Package"> | string
    lot?: StringFilter<"Package"> | string
    unit?: StringFilter<"Package"> | string
    quantity?: IntFilter<"Package"> | number
    createdAt?: DateTimeFilter<"Package"> | Date | string
    updatedAt?: DateTimeFilter<"Package"> | Date | string
    productionOrders?: ProductionOrderListRelationFilter
  }

  export type PackageOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    lot?: SortOrder
    unit?: SortOrder
    quantity?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    productionOrders?: ProductionOrderOrderByRelationAggregateInput
  }

  export type PackageWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PackageWhereInput | PackageWhereInput[]
    OR?: PackageWhereInput[]
    NOT?: PackageWhereInput | PackageWhereInput[]
    name?: StringFilter<"Package"> | string
    lot?: StringFilter<"Package"> | string
    unit?: StringFilter<"Package"> | string
    quantity?: IntFilter<"Package"> | number
    createdAt?: DateTimeFilter<"Package"> | Date | string
    updatedAt?: DateTimeFilter<"Package"> | Date | string
    productionOrders?: ProductionOrderListRelationFilter
  }, "id">

  export type PackageOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    lot?: SortOrder
    unit?: SortOrder
    quantity?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PackageCountOrderByAggregateInput
    _avg?: PackageAvgOrderByAggregateInput
    _max?: PackageMaxOrderByAggregateInput
    _min?: PackageMinOrderByAggregateInput
    _sum?: PackageSumOrderByAggregateInput
  }

  export type PackageScalarWhereWithAggregatesInput = {
    AND?: PackageScalarWhereWithAggregatesInput | PackageScalarWhereWithAggregatesInput[]
    OR?: PackageScalarWhereWithAggregatesInput[]
    NOT?: PackageScalarWhereWithAggregatesInput | PackageScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Package"> | number
    name?: StringWithAggregatesFilter<"Package"> | string
    lot?: StringWithAggregatesFilter<"Package"> | string
    unit?: StringWithAggregatesFilter<"Package"> | string
    quantity?: IntWithAggregatesFilter<"Package"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Package"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Package"> | Date | string
  }

  export type EquipmentWhereInput = {
    AND?: EquipmentWhereInput | EquipmentWhereInput[]
    OR?: EquipmentWhereInput[]
    NOT?: EquipmentWhereInput | EquipmentWhereInput[]
    id?: IntFilter<"Equipment"> | number
    name?: StringFilter<"Equipment"> | string
    brand?: StringFilter<"Equipment"> | string
    model?: StringFilter<"Equipment"> | string
    createdAt?: DateTimeFilter<"Equipment"> | Date | string
    updatedAt?: DateTimeFilter<"Equipment"> | Date | string
    productionOrders?: ProductionOrderListRelationFilter
  }

  export type EquipmentOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    brand?: SortOrder
    model?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    productionOrders?: ProductionOrderOrderByRelationAggregateInput
  }

  export type EquipmentWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: EquipmentWhereInput | EquipmentWhereInput[]
    OR?: EquipmentWhereInput[]
    NOT?: EquipmentWhereInput | EquipmentWhereInput[]
    name?: StringFilter<"Equipment"> | string
    brand?: StringFilter<"Equipment"> | string
    model?: StringFilter<"Equipment"> | string
    createdAt?: DateTimeFilter<"Equipment"> | Date | string
    updatedAt?: DateTimeFilter<"Equipment"> | Date | string
    productionOrders?: ProductionOrderListRelationFilter
  }, "id">

  export type EquipmentOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    brand?: SortOrder
    model?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: EquipmentCountOrderByAggregateInput
    _avg?: EquipmentAvgOrderByAggregateInput
    _max?: EquipmentMaxOrderByAggregateInput
    _min?: EquipmentMinOrderByAggregateInput
    _sum?: EquipmentSumOrderByAggregateInput
  }

  export type EquipmentScalarWhereWithAggregatesInput = {
    AND?: EquipmentScalarWhereWithAggregatesInput | EquipmentScalarWhereWithAggregatesInput[]
    OR?: EquipmentScalarWhereWithAggregatesInput[]
    NOT?: EquipmentScalarWhereWithAggregatesInput | EquipmentScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Equipment"> | number
    name?: StringWithAggregatesFilter<"Equipment"> | string
    brand?: StringWithAggregatesFilter<"Equipment"> | string
    model?: StringWithAggregatesFilter<"Equipment"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Equipment"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Equipment"> | Date | string
  }

  export type ProductionOrderWhereInput = {
    AND?: ProductionOrderWhereInput | ProductionOrderWhereInput[]
    OR?: ProductionOrderWhereInput[]
    NOT?: ProductionOrderWhereInput | ProductionOrderWhereInput[]
    id?: IntFilter<"ProductionOrder"> | number
    description?: StringFilter<"ProductionOrder"> | string
    width?: DecimalFilter<"ProductionOrder"> | Decimal | DecimalJsLike | number | string
    height?: DecimalFilter<"ProductionOrder"> | Decimal | DecimalJsLike | number | string
    lot?: StringFilter<"ProductionOrder"> | string
    quantityPerRoll?: IntFilter<"ProductionOrder"> | number
    diameterCore?: DecimalFilter<"ProductionOrder"> | Decimal | DecimalJsLike | number | string
    rollSize?: DecimalFilter<"ProductionOrder"> | Decimal | DecimalJsLike | number | string
    observation?: StringFilter<"ProductionOrder"> | string
    requesterId?: IntFilter<"ProductionOrder"> | number
    clientId?: StringFilter<"ProductionOrder"> | string
    productionResponsibleId?: IntFilter<"ProductionOrder"> | number
    status?: EnumStatusFilter<"ProductionOrder"> | $Enums.Status
    employeeId?: IntFilter<"ProductionOrder"> | number
    createdAt?: DateTimeFilter<"ProductionOrder"> | Date | string
    updatedAt?: DateTimeFilter<"ProductionOrder"> | Date | string
    tenantId?: StringFilter<"ProductionOrder"> | string
    client?: XOR<ClientScalarRelationFilter, ClientWhereInput>
    rawMaterial?: RawMaterialListRelationFilter
    package?: PackageListRelationFilter
    equipment?: EquipmentListRelationFilter
    tenant?: XOR<TenantScalarRelationFilter, TenantWhereInput>
  }

  export type ProductionOrderOrderByWithRelationInput = {
    id?: SortOrder
    description?: SortOrder
    width?: SortOrder
    height?: SortOrder
    lot?: SortOrder
    quantityPerRoll?: SortOrder
    diameterCore?: SortOrder
    rollSize?: SortOrder
    observation?: SortOrder
    requesterId?: SortOrder
    clientId?: SortOrder
    productionResponsibleId?: SortOrder
    status?: SortOrder
    employeeId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    tenantId?: SortOrder
    client?: ClientOrderByWithRelationInput
    rawMaterial?: RawMaterialOrderByRelationAggregateInput
    package?: PackageOrderByRelationAggregateInput
    equipment?: EquipmentOrderByRelationAggregateInput
    tenant?: TenantOrderByWithRelationInput
  }

  export type ProductionOrderWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ProductionOrderWhereInput | ProductionOrderWhereInput[]
    OR?: ProductionOrderWhereInput[]
    NOT?: ProductionOrderWhereInput | ProductionOrderWhereInput[]
    description?: StringFilter<"ProductionOrder"> | string
    width?: DecimalFilter<"ProductionOrder"> | Decimal | DecimalJsLike | number | string
    height?: DecimalFilter<"ProductionOrder"> | Decimal | DecimalJsLike | number | string
    lot?: StringFilter<"ProductionOrder"> | string
    quantityPerRoll?: IntFilter<"ProductionOrder"> | number
    diameterCore?: DecimalFilter<"ProductionOrder"> | Decimal | DecimalJsLike | number | string
    rollSize?: DecimalFilter<"ProductionOrder"> | Decimal | DecimalJsLike | number | string
    observation?: StringFilter<"ProductionOrder"> | string
    requesterId?: IntFilter<"ProductionOrder"> | number
    clientId?: StringFilter<"ProductionOrder"> | string
    productionResponsibleId?: IntFilter<"ProductionOrder"> | number
    status?: EnumStatusFilter<"ProductionOrder"> | $Enums.Status
    employeeId?: IntFilter<"ProductionOrder"> | number
    createdAt?: DateTimeFilter<"ProductionOrder"> | Date | string
    updatedAt?: DateTimeFilter<"ProductionOrder"> | Date | string
    tenantId?: StringFilter<"ProductionOrder"> | string
    client?: XOR<ClientScalarRelationFilter, ClientWhereInput>
    rawMaterial?: RawMaterialListRelationFilter
    package?: PackageListRelationFilter
    equipment?: EquipmentListRelationFilter
    tenant?: XOR<TenantScalarRelationFilter, TenantWhereInput>
  }, "id">

  export type ProductionOrderOrderByWithAggregationInput = {
    id?: SortOrder
    description?: SortOrder
    width?: SortOrder
    height?: SortOrder
    lot?: SortOrder
    quantityPerRoll?: SortOrder
    diameterCore?: SortOrder
    rollSize?: SortOrder
    observation?: SortOrder
    requesterId?: SortOrder
    clientId?: SortOrder
    productionResponsibleId?: SortOrder
    status?: SortOrder
    employeeId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    tenantId?: SortOrder
    _count?: ProductionOrderCountOrderByAggregateInput
    _avg?: ProductionOrderAvgOrderByAggregateInput
    _max?: ProductionOrderMaxOrderByAggregateInput
    _min?: ProductionOrderMinOrderByAggregateInput
    _sum?: ProductionOrderSumOrderByAggregateInput
  }

  export type ProductionOrderScalarWhereWithAggregatesInput = {
    AND?: ProductionOrderScalarWhereWithAggregatesInput | ProductionOrderScalarWhereWithAggregatesInput[]
    OR?: ProductionOrderScalarWhereWithAggregatesInput[]
    NOT?: ProductionOrderScalarWhereWithAggregatesInput | ProductionOrderScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ProductionOrder"> | number
    description?: StringWithAggregatesFilter<"ProductionOrder"> | string
    width?: DecimalWithAggregatesFilter<"ProductionOrder"> | Decimal | DecimalJsLike | number | string
    height?: DecimalWithAggregatesFilter<"ProductionOrder"> | Decimal | DecimalJsLike | number | string
    lot?: StringWithAggregatesFilter<"ProductionOrder"> | string
    quantityPerRoll?: IntWithAggregatesFilter<"ProductionOrder"> | number
    diameterCore?: DecimalWithAggregatesFilter<"ProductionOrder"> | Decimal | DecimalJsLike | number | string
    rollSize?: DecimalWithAggregatesFilter<"ProductionOrder"> | Decimal | DecimalJsLike | number | string
    observation?: StringWithAggregatesFilter<"ProductionOrder"> | string
    requesterId?: IntWithAggregatesFilter<"ProductionOrder"> | number
    clientId?: StringWithAggregatesFilter<"ProductionOrder"> | string
    productionResponsibleId?: IntWithAggregatesFilter<"ProductionOrder"> | number
    status?: EnumStatusWithAggregatesFilter<"ProductionOrder"> | $Enums.Status
    employeeId?: IntWithAggregatesFilter<"ProductionOrder"> | number
    createdAt?: DateTimeWithAggregatesFilter<"ProductionOrder"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ProductionOrder"> | Date | string
    tenantId?: StringWithAggregatesFilter<"ProductionOrder"> | string
  }

  export type TenantCreateInput = {
    id?: string
    name: string
    domain?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    clients?: ClientCreateNestedManyWithoutTenantInput
    productionOrders?: ProductionOrderCreateNestedManyWithoutTenantInput
    User?: UserCreateNestedManyWithoutTenantInput
  }

  export type TenantUncheckedCreateInput = {
    id?: string
    name: string
    domain?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    clients?: ClientUncheckedCreateNestedManyWithoutTenantInput
    productionOrders?: ProductionOrderUncheckedCreateNestedManyWithoutTenantInput
    User?: UserUncheckedCreateNestedManyWithoutTenantInput
  }

  export type TenantUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    domain?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    clients?: ClientUpdateManyWithoutTenantNestedInput
    productionOrders?: ProductionOrderUpdateManyWithoutTenantNestedInput
    User?: UserUpdateManyWithoutTenantNestedInput
  }

  export type TenantUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    domain?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    clients?: ClientUncheckedUpdateManyWithoutTenantNestedInput
    productionOrders?: ProductionOrderUncheckedUpdateManyWithoutTenantNestedInput
    User?: UserUncheckedUpdateManyWithoutTenantNestedInput
  }

  export type TenantCreateManyInput = {
    id?: string
    name: string
    domain?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TenantUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    domain?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TenantUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    domain?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateInput = {
    name?: string | null
    email: string
    profile?: ProfileCreateNestedOneWithoutUserInput
    tenant?: TenantCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    name?: string | null
    email: string
    tenantId?: string
    profile?: ProfileUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserUpdateInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    profile?: ProfileUpdateOneWithoutUserNestedInput
    tenant?: TenantUpdateOneRequiredWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    profile?: ProfileUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    name?: string | null
    email: string
    tenantId?: string
  }

  export type UserUpdateManyMutationInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
  }

  export type ProfileCreateInput = {
    role: string
    type?: ProfileCreatetypeInput | $Enums.ProfileType[]
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutProfileInput
  }

  export type ProfileUncheckedCreateInput = {
    id?: number
    userId: number
    role: string
    type?: ProfileCreatetypeInput | $Enums.ProfileType[]
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProfileUpdateInput = {
    role?: StringFieldUpdateOperationsInput | string
    type?: ProfileUpdatetypeInput | $Enums.ProfileType[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutProfileNestedInput
  }

  export type ProfileUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    role?: StringFieldUpdateOperationsInput | string
    type?: ProfileUpdatetypeInput | $Enums.ProfileType[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProfileCreateManyInput = {
    id?: number
    userId: number
    role: string
    type?: ProfileCreatetypeInput | $Enums.ProfileType[]
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProfileUpdateManyMutationInput = {
    role?: StringFieldUpdateOperationsInput | string
    type?: ProfileUpdatetypeInput | $Enums.ProfileType[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProfileUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    role?: StringFieldUpdateOperationsInput | string
    type?: ProfileUpdatetypeInput | $Enums.ProfileType[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClientCreateInput = {
    id?: string
    name: string
    identification: string
    type: $Enums.ClientType
    createdAt?: Date | string
    updatedAt?: Date | string
    productionOrders?: ProductionOrderCreateNestedManyWithoutClientInput
    tenant?: TenantCreateNestedOneWithoutClientsInput
  }

  export type ClientUncheckedCreateInput = {
    id?: string
    name: string
    identification: string
    type: $Enums.ClientType
    createdAt?: Date | string
    updatedAt?: Date | string
    tenantId?: string
    productionOrders?: ProductionOrderUncheckedCreateNestedManyWithoutClientInput
  }

  export type ClientUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    identification?: StringFieldUpdateOperationsInput | string
    type?: EnumClientTypeFieldUpdateOperationsInput | $Enums.ClientType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    productionOrders?: ProductionOrderUpdateManyWithoutClientNestedInput
    tenant?: TenantUpdateOneRequiredWithoutClientsNestedInput
  }

  export type ClientUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    identification?: StringFieldUpdateOperationsInput | string
    type?: EnumClientTypeFieldUpdateOperationsInput | $Enums.ClientType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tenantId?: StringFieldUpdateOperationsInput | string
    productionOrders?: ProductionOrderUncheckedUpdateManyWithoutClientNestedInput
  }

  export type ClientCreateManyInput = {
    id?: string
    name: string
    identification: string
    type: $Enums.ClientType
    createdAt?: Date | string
    updatedAt?: Date | string
    tenantId?: string
  }

  export type ClientUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    identification?: StringFieldUpdateOperationsInput | string
    type?: EnumClientTypeFieldUpdateOperationsInput | $Enums.ClientType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClientUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    identification?: StringFieldUpdateOperationsInput | string
    type?: EnumClientTypeFieldUpdateOperationsInput | $Enums.ClientType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tenantId?: StringFieldUpdateOperationsInput | string
  }

  export type RawMaterialCreateInput = {
    name: string
    lot: string
    unit: string
    quantity?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    materialType: RawMaterialTypeCreateNestedOneWithoutRawMaterialInput
    productionOrders?: ProductionOrderCreateNestedManyWithoutRawMaterialInput
  }

  export type RawMaterialUncheckedCreateInput = {
    id?: number
    name: string
    lot: string
    unit: string
    quantity?: number
    rawMaterialTypeId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    productionOrders?: ProductionOrderUncheckedCreateNestedManyWithoutRawMaterialInput
  }

  export type RawMaterialUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    lot?: StringFieldUpdateOperationsInput | string
    unit?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    materialType?: RawMaterialTypeUpdateOneRequiredWithoutRawMaterialNestedInput
    productionOrders?: ProductionOrderUpdateManyWithoutRawMaterialNestedInput
  }

  export type RawMaterialUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    lot?: StringFieldUpdateOperationsInput | string
    unit?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    rawMaterialTypeId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    productionOrders?: ProductionOrderUncheckedUpdateManyWithoutRawMaterialNestedInput
  }

  export type RawMaterialCreateManyInput = {
    id?: number
    name: string
    lot: string
    unit: string
    quantity?: number
    rawMaterialTypeId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RawMaterialUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    lot?: StringFieldUpdateOperationsInput | string
    unit?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RawMaterialUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    lot?: StringFieldUpdateOperationsInput | string
    unit?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    rawMaterialTypeId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RawMaterialTypeCreateInput = {
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    RawMaterial?: RawMaterialCreateNestedManyWithoutMaterialTypeInput
  }

  export type RawMaterialTypeUncheckedCreateInput = {
    id?: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    RawMaterial?: RawMaterialUncheckedCreateNestedManyWithoutMaterialTypeInput
  }

  export type RawMaterialTypeUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    RawMaterial?: RawMaterialUpdateManyWithoutMaterialTypeNestedInput
  }

  export type RawMaterialTypeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    RawMaterial?: RawMaterialUncheckedUpdateManyWithoutMaterialTypeNestedInput
  }

  export type RawMaterialTypeCreateManyInput = {
    id?: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RawMaterialTypeUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RawMaterialTypeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PackageCreateInput = {
    name: string
    lot: string
    unit: string
    quantity?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    productionOrders?: ProductionOrderCreateNestedManyWithoutPackageInput
  }

  export type PackageUncheckedCreateInput = {
    id?: number
    name: string
    lot: string
    unit: string
    quantity?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    productionOrders?: ProductionOrderUncheckedCreateNestedManyWithoutPackageInput
  }

  export type PackageUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    lot?: StringFieldUpdateOperationsInput | string
    unit?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    productionOrders?: ProductionOrderUpdateManyWithoutPackageNestedInput
  }

  export type PackageUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    lot?: StringFieldUpdateOperationsInput | string
    unit?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    productionOrders?: ProductionOrderUncheckedUpdateManyWithoutPackageNestedInput
  }

  export type PackageCreateManyInput = {
    id?: number
    name: string
    lot: string
    unit: string
    quantity?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PackageUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    lot?: StringFieldUpdateOperationsInput | string
    unit?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PackageUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    lot?: StringFieldUpdateOperationsInput | string
    unit?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EquipmentCreateInput = {
    name: string
    brand: string
    model: string
    createdAt?: Date | string
    updatedAt?: Date | string
    productionOrders?: ProductionOrderCreateNestedManyWithoutEquipmentInput
  }

  export type EquipmentUncheckedCreateInput = {
    id?: number
    name: string
    brand: string
    model: string
    createdAt?: Date | string
    updatedAt?: Date | string
    productionOrders?: ProductionOrderUncheckedCreateNestedManyWithoutEquipmentInput
  }

  export type EquipmentUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    productionOrders?: ProductionOrderUpdateManyWithoutEquipmentNestedInput
  }

  export type EquipmentUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    productionOrders?: ProductionOrderUncheckedUpdateManyWithoutEquipmentNestedInput
  }

  export type EquipmentCreateManyInput = {
    id?: number
    name: string
    brand: string
    model: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EquipmentUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EquipmentUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductionOrderCreateInput = {
    description: string
    width?: Decimal | DecimalJsLike | number | string
    height?: Decimal | DecimalJsLike | number | string
    lot: string
    quantityPerRoll?: number
    diameterCore?: Decimal | DecimalJsLike | number | string
    rollSize?: Decimal | DecimalJsLike | number | string
    observation: string
    requesterId: number
    productionResponsibleId: number
    status: $Enums.Status
    employeeId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    client: ClientCreateNestedOneWithoutProductionOrdersInput
    rawMaterial?: RawMaterialCreateNestedManyWithoutProductionOrdersInput
    package?: PackageCreateNestedManyWithoutProductionOrdersInput
    equipment?: EquipmentCreateNestedManyWithoutProductionOrdersInput
    tenant?: TenantCreateNestedOneWithoutProductionOrdersInput
  }

  export type ProductionOrderUncheckedCreateInput = {
    id?: number
    description: string
    width?: Decimal | DecimalJsLike | number | string
    height?: Decimal | DecimalJsLike | number | string
    lot: string
    quantityPerRoll?: number
    diameterCore?: Decimal | DecimalJsLike | number | string
    rollSize?: Decimal | DecimalJsLike | number | string
    observation: string
    requesterId: number
    clientId: string
    productionResponsibleId: number
    status: $Enums.Status
    employeeId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    tenantId?: string
    rawMaterial?: RawMaterialUncheckedCreateNestedManyWithoutProductionOrdersInput
    package?: PackageUncheckedCreateNestedManyWithoutProductionOrdersInput
    equipment?: EquipmentUncheckedCreateNestedManyWithoutProductionOrdersInput
  }

  export type ProductionOrderUpdateInput = {
    description?: StringFieldUpdateOperationsInput | string
    width?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    height?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    lot?: StringFieldUpdateOperationsInput | string
    quantityPerRoll?: IntFieldUpdateOperationsInput | number
    diameterCore?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    rollSize?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    observation?: StringFieldUpdateOperationsInput | string
    requesterId?: IntFieldUpdateOperationsInput | number
    productionResponsibleId?: IntFieldUpdateOperationsInput | number
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    employeeId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    client?: ClientUpdateOneRequiredWithoutProductionOrdersNestedInput
    rawMaterial?: RawMaterialUpdateManyWithoutProductionOrdersNestedInput
    package?: PackageUpdateManyWithoutProductionOrdersNestedInput
    equipment?: EquipmentUpdateManyWithoutProductionOrdersNestedInput
    tenant?: TenantUpdateOneRequiredWithoutProductionOrdersNestedInput
  }

  export type ProductionOrderUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    width?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    height?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    lot?: StringFieldUpdateOperationsInput | string
    quantityPerRoll?: IntFieldUpdateOperationsInput | number
    diameterCore?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    rollSize?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    observation?: StringFieldUpdateOperationsInput | string
    requesterId?: IntFieldUpdateOperationsInput | number
    clientId?: StringFieldUpdateOperationsInput | string
    productionResponsibleId?: IntFieldUpdateOperationsInput | number
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    employeeId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tenantId?: StringFieldUpdateOperationsInput | string
    rawMaterial?: RawMaterialUncheckedUpdateManyWithoutProductionOrdersNestedInput
    package?: PackageUncheckedUpdateManyWithoutProductionOrdersNestedInput
    equipment?: EquipmentUncheckedUpdateManyWithoutProductionOrdersNestedInput
  }

  export type ProductionOrderCreateManyInput = {
    id?: number
    description: string
    width?: Decimal | DecimalJsLike | number | string
    height?: Decimal | DecimalJsLike | number | string
    lot: string
    quantityPerRoll?: number
    diameterCore?: Decimal | DecimalJsLike | number | string
    rollSize?: Decimal | DecimalJsLike | number | string
    observation: string
    requesterId: number
    clientId: string
    productionResponsibleId: number
    status: $Enums.Status
    employeeId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    tenantId?: string
  }

  export type ProductionOrderUpdateManyMutationInput = {
    description?: StringFieldUpdateOperationsInput | string
    width?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    height?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    lot?: StringFieldUpdateOperationsInput | string
    quantityPerRoll?: IntFieldUpdateOperationsInput | number
    diameterCore?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    rollSize?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    observation?: StringFieldUpdateOperationsInput | string
    requesterId?: IntFieldUpdateOperationsInput | number
    productionResponsibleId?: IntFieldUpdateOperationsInput | number
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    employeeId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductionOrderUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    width?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    height?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    lot?: StringFieldUpdateOperationsInput | string
    quantityPerRoll?: IntFieldUpdateOperationsInput | number
    diameterCore?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    rollSize?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    observation?: StringFieldUpdateOperationsInput | string
    requesterId?: IntFieldUpdateOperationsInput | number
    clientId?: StringFieldUpdateOperationsInput | string
    productionResponsibleId?: IntFieldUpdateOperationsInput | number
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    employeeId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tenantId?: StringFieldUpdateOperationsInput | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type ClientListRelationFilter = {
    every?: ClientWhereInput
    some?: ClientWhereInput
    none?: ClientWhereInput
  }

  export type ProductionOrderListRelationFilter = {
    every?: ProductionOrderWhereInput
    some?: ProductionOrderWhereInput
    none?: ProductionOrderWhereInput
  }

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ClientOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProductionOrderOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TenantCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    domain?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TenantMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    domain?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TenantMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    domain?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type ProfileNullableScalarRelationFilter = {
    is?: ProfileWhereInput | null
    isNot?: ProfileWhereInput | null
  }

  export type TenantScalarRelationFilter = {
    is?: TenantWhereInput
    isNot?: TenantWhereInput
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    tenantId?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    tenantId?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    tenantId?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type EnumProfileTypeNullableListFilter<$PrismaModel = never> = {
    equals?: $Enums.ProfileType[] | ListEnumProfileTypeFieldRefInput<$PrismaModel> | null
    has?: $Enums.ProfileType | EnumProfileTypeFieldRefInput<$PrismaModel> | null
    hasEvery?: $Enums.ProfileType[] | ListEnumProfileTypeFieldRefInput<$PrismaModel>
    hasSome?: $Enums.ProfileType[] | ListEnumProfileTypeFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type ProfileCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    role?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProfileAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type ProfileMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProfileMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProfileSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type EnumClientTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ClientType | EnumClientTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ClientType[] | ListEnumClientTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ClientType[] | ListEnumClientTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumClientTypeFilter<$PrismaModel> | $Enums.ClientType
  }

  export type ClientCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    identification?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    tenantId?: SortOrder
  }

  export type ClientMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    identification?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    tenantId?: SortOrder
  }

  export type ClientMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    identification?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    tenantId?: SortOrder
  }

  export type EnumClientTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ClientType | EnumClientTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ClientType[] | ListEnumClientTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ClientType[] | ListEnumClientTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumClientTypeWithAggregatesFilter<$PrismaModel> | $Enums.ClientType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumClientTypeFilter<$PrismaModel>
    _max?: NestedEnumClientTypeFilter<$PrismaModel>
  }

  export type RawMaterialTypeScalarRelationFilter = {
    is?: RawMaterialTypeWhereInput
    isNot?: RawMaterialTypeWhereInput
  }

  export type RawMaterialCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    lot?: SortOrder
    unit?: SortOrder
    quantity?: SortOrder
    rawMaterialTypeId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RawMaterialAvgOrderByAggregateInput = {
    id?: SortOrder
    quantity?: SortOrder
    rawMaterialTypeId?: SortOrder
  }

  export type RawMaterialMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    lot?: SortOrder
    unit?: SortOrder
    quantity?: SortOrder
    rawMaterialTypeId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RawMaterialMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    lot?: SortOrder
    unit?: SortOrder
    quantity?: SortOrder
    rawMaterialTypeId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RawMaterialSumOrderByAggregateInput = {
    id?: SortOrder
    quantity?: SortOrder
    rawMaterialTypeId?: SortOrder
  }

  export type RawMaterialListRelationFilter = {
    every?: RawMaterialWhereInput
    some?: RawMaterialWhereInput
    none?: RawMaterialWhereInput
  }

  export type RawMaterialOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RawMaterialTypeCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RawMaterialTypeAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type RawMaterialTypeMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RawMaterialTypeMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RawMaterialTypeSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type PackageCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    lot?: SortOrder
    unit?: SortOrder
    quantity?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PackageAvgOrderByAggregateInput = {
    id?: SortOrder
    quantity?: SortOrder
  }

  export type PackageMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    lot?: SortOrder
    unit?: SortOrder
    quantity?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PackageMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    lot?: SortOrder
    unit?: SortOrder
    quantity?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PackageSumOrderByAggregateInput = {
    id?: SortOrder
    quantity?: SortOrder
  }

  export type EquipmentCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    brand?: SortOrder
    model?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EquipmentAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EquipmentMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    brand?: SortOrder
    model?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EquipmentMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    brand?: SortOrder
    model?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EquipmentSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type EnumStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusFilter<$PrismaModel> | $Enums.Status
  }

  export type ClientScalarRelationFilter = {
    is?: ClientWhereInput
    isNot?: ClientWhereInput
  }

  export type PackageListRelationFilter = {
    every?: PackageWhereInput
    some?: PackageWhereInput
    none?: PackageWhereInput
  }

  export type EquipmentListRelationFilter = {
    every?: EquipmentWhereInput
    some?: EquipmentWhereInput
    none?: EquipmentWhereInput
  }

  export type PackageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EquipmentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProductionOrderCountOrderByAggregateInput = {
    id?: SortOrder
    description?: SortOrder
    width?: SortOrder
    height?: SortOrder
    lot?: SortOrder
    quantityPerRoll?: SortOrder
    diameterCore?: SortOrder
    rollSize?: SortOrder
    observation?: SortOrder
    requesterId?: SortOrder
    clientId?: SortOrder
    productionResponsibleId?: SortOrder
    status?: SortOrder
    employeeId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    tenantId?: SortOrder
  }

  export type ProductionOrderAvgOrderByAggregateInput = {
    id?: SortOrder
    width?: SortOrder
    height?: SortOrder
    quantityPerRoll?: SortOrder
    diameterCore?: SortOrder
    rollSize?: SortOrder
    requesterId?: SortOrder
    productionResponsibleId?: SortOrder
    employeeId?: SortOrder
  }

  export type ProductionOrderMaxOrderByAggregateInput = {
    id?: SortOrder
    description?: SortOrder
    width?: SortOrder
    height?: SortOrder
    lot?: SortOrder
    quantityPerRoll?: SortOrder
    diameterCore?: SortOrder
    rollSize?: SortOrder
    observation?: SortOrder
    requesterId?: SortOrder
    clientId?: SortOrder
    productionResponsibleId?: SortOrder
    status?: SortOrder
    employeeId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    tenantId?: SortOrder
  }

  export type ProductionOrderMinOrderByAggregateInput = {
    id?: SortOrder
    description?: SortOrder
    width?: SortOrder
    height?: SortOrder
    lot?: SortOrder
    quantityPerRoll?: SortOrder
    diameterCore?: SortOrder
    rollSize?: SortOrder
    observation?: SortOrder
    requesterId?: SortOrder
    clientId?: SortOrder
    productionResponsibleId?: SortOrder
    status?: SortOrder
    employeeId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    tenantId?: SortOrder
  }

  export type ProductionOrderSumOrderByAggregateInput = {
    id?: SortOrder
    width?: SortOrder
    height?: SortOrder
    quantityPerRoll?: SortOrder
    diameterCore?: SortOrder
    rollSize?: SortOrder
    requesterId?: SortOrder
    productionResponsibleId?: SortOrder
    employeeId?: SortOrder
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type EnumStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusWithAggregatesFilter<$PrismaModel> | $Enums.Status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusFilter<$PrismaModel>
    _max?: NestedEnumStatusFilter<$PrismaModel>
  }

  export type ClientCreateNestedManyWithoutTenantInput = {
    create?: XOR<ClientCreateWithoutTenantInput, ClientUncheckedCreateWithoutTenantInput> | ClientCreateWithoutTenantInput[] | ClientUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: ClientCreateOrConnectWithoutTenantInput | ClientCreateOrConnectWithoutTenantInput[]
    createMany?: ClientCreateManyTenantInputEnvelope
    connect?: ClientWhereUniqueInput | ClientWhereUniqueInput[]
  }

  export type ProductionOrderCreateNestedManyWithoutTenantInput = {
    create?: XOR<ProductionOrderCreateWithoutTenantInput, ProductionOrderUncheckedCreateWithoutTenantInput> | ProductionOrderCreateWithoutTenantInput[] | ProductionOrderUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: ProductionOrderCreateOrConnectWithoutTenantInput | ProductionOrderCreateOrConnectWithoutTenantInput[]
    createMany?: ProductionOrderCreateManyTenantInputEnvelope
    connect?: ProductionOrderWhereUniqueInput | ProductionOrderWhereUniqueInput[]
  }

  export type UserCreateNestedManyWithoutTenantInput = {
    create?: XOR<UserCreateWithoutTenantInput, UserUncheckedCreateWithoutTenantInput> | UserCreateWithoutTenantInput[] | UserUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: UserCreateOrConnectWithoutTenantInput | UserCreateOrConnectWithoutTenantInput[]
    createMany?: UserCreateManyTenantInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type ClientUncheckedCreateNestedManyWithoutTenantInput = {
    create?: XOR<ClientCreateWithoutTenantInput, ClientUncheckedCreateWithoutTenantInput> | ClientCreateWithoutTenantInput[] | ClientUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: ClientCreateOrConnectWithoutTenantInput | ClientCreateOrConnectWithoutTenantInput[]
    createMany?: ClientCreateManyTenantInputEnvelope
    connect?: ClientWhereUniqueInput | ClientWhereUniqueInput[]
  }

  export type ProductionOrderUncheckedCreateNestedManyWithoutTenantInput = {
    create?: XOR<ProductionOrderCreateWithoutTenantInput, ProductionOrderUncheckedCreateWithoutTenantInput> | ProductionOrderCreateWithoutTenantInput[] | ProductionOrderUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: ProductionOrderCreateOrConnectWithoutTenantInput | ProductionOrderCreateOrConnectWithoutTenantInput[]
    createMany?: ProductionOrderCreateManyTenantInputEnvelope
    connect?: ProductionOrderWhereUniqueInput | ProductionOrderWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutTenantInput = {
    create?: XOR<UserCreateWithoutTenantInput, UserUncheckedCreateWithoutTenantInput> | UserCreateWithoutTenantInput[] | UserUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: UserCreateOrConnectWithoutTenantInput | UserCreateOrConnectWithoutTenantInput[]
    createMany?: UserCreateManyTenantInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ClientUpdateManyWithoutTenantNestedInput = {
    create?: XOR<ClientCreateWithoutTenantInput, ClientUncheckedCreateWithoutTenantInput> | ClientCreateWithoutTenantInput[] | ClientUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: ClientCreateOrConnectWithoutTenantInput | ClientCreateOrConnectWithoutTenantInput[]
    upsert?: ClientUpsertWithWhereUniqueWithoutTenantInput | ClientUpsertWithWhereUniqueWithoutTenantInput[]
    createMany?: ClientCreateManyTenantInputEnvelope
    set?: ClientWhereUniqueInput | ClientWhereUniqueInput[]
    disconnect?: ClientWhereUniqueInput | ClientWhereUniqueInput[]
    delete?: ClientWhereUniqueInput | ClientWhereUniqueInput[]
    connect?: ClientWhereUniqueInput | ClientWhereUniqueInput[]
    update?: ClientUpdateWithWhereUniqueWithoutTenantInput | ClientUpdateWithWhereUniqueWithoutTenantInput[]
    updateMany?: ClientUpdateManyWithWhereWithoutTenantInput | ClientUpdateManyWithWhereWithoutTenantInput[]
    deleteMany?: ClientScalarWhereInput | ClientScalarWhereInput[]
  }

  export type ProductionOrderUpdateManyWithoutTenantNestedInput = {
    create?: XOR<ProductionOrderCreateWithoutTenantInput, ProductionOrderUncheckedCreateWithoutTenantInput> | ProductionOrderCreateWithoutTenantInput[] | ProductionOrderUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: ProductionOrderCreateOrConnectWithoutTenantInput | ProductionOrderCreateOrConnectWithoutTenantInput[]
    upsert?: ProductionOrderUpsertWithWhereUniqueWithoutTenantInput | ProductionOrderUpsertWithWhereUniqueWithoutTenantInput[]
    createMany?: ProductionOrderCreateManyTenantInputEnvelope
    set?: ProductionOrderWhereUniqueInput | ProductionOrderWhereUniqueInput[]
    disconnect?: ProductionOrderWhereUniqueInput | ProductionOrderWhereUniqueInput[]
    delete?: ProductionOrderWhereUniqueInput | ProductionOrderWhereUniqueInput[]
    connect?: ProductionOrderWhereUniqueInput | ProductionOrderWhereUniqueInput[]
    update?: ProductionOrderUpdateWithWhereUniqueWithoutTenantInput | ProductionOrderUpdateWithWhereUniqueWithoutTenantInput[]
    updateMany?: ProductionOrderUpdateManyWithWhereWithoutTenantInput | ProductionOrderUpdateManyWithWhereWithoutTenantInput[]
    deleteMany?: ProductionOrderScalarWhereInput | ProductionOrderScalarWhereInput[]
  }

  export type UserUpdateManyWithoutTenantNestedInput = {
    create?: XOR<UserCreateWithoutTenantInput, UserUncheckedCreateWithoutTenantInput> | UserCreateWithoutTenantInput[] | UserUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: UserCreateOrConnectWithoutTenantInput | UserCreateOrConnectWithoutTenantInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutTenantInput | UserUpsertWithWhereUniqueWithoutTenantInput[]
    createMany?: UserCreateManyTenantInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutTenantInput | UserUpdateWithWhereUniqueWithoutTenantInput[]
    updateMany?: UserUpdateManyWithWhereWithoutTenantInput | UserUpdateManyWithWhereWithoutTenantInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type ClientUncheckedUpdateManyWithoutTenantNestedInput = {
    create?: XOR<ClientCreateWithoutTenantInput, ClientUncheckedCreateWithoutTenantInput> | ClientCreateWithoutTenantInput[] | ClientUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: ClientCreateOrConnectWithoutTenantInput | ClientCreateOrConnectWithoutTenantInput[]
    upsert?: ClientUpsertWithWhereUniqueWithoutTenantInput | ClientUpsertWithWhereUniqueWithoutTenantInput[]
    createMany?: ClientCreateManyTenantInputEnvelope
    set?: ClientWhereUniqueInput | ClientWhereUniqueInput[]
    disconnect?: ClientWhereUniqueInput | ClientWhereUniqueInput[]
    delete?: ClientWhereUniqueInput | ClientWhereUniqueInput[]
    connect?: ClientWhereUniqueInput | ClientWhereUniqueInput[]
    update?: ClientUpdateWithWhereUniqueWithoutTenantInput | ClientUpdateWithWhereUniqueWithoutTenantInput[]
    updateMany?: ClientUpdateManyWithWhereWithoutTenantInput | ClientUpdateManyWithWhereWithoutTenantInput[]
    deleteMany?: ClientScalarWhereInput | ClientScalarWhereInput[]
  }

  export type ProductionOrderUncheckedUpdateManyWithoutTenantNestedInput = {
    create?: XOR<ProductionOrderCreateWithoutTenantInput, ProductionOrderUncheckedCreateWithoutTenantInput> | ProductionOrderCreateWithoutTenantInput[] | ProductionOrderUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: ProductionOrderCreateOrConnectWithoutTenantInput | ProductionOrderCreateOrConnectWithoutTenantInput[]
    upsert?: ProductionOrderUpsertWithWhereUniqueWithoutTenantInput | ProductionOrderUpsertWithWhereUniqueWithoutTenantInput[]
    createMany?: ProductionOrderCreateManyTenantInputEnvelope
    set?: ProductionOrderWhereUniqueInput | ProductionOrderWhereUniqueInput[]
    disconnect?: ProductionOrderWhereUniqueInput | ProductionOrderWhereUniqueInput[]
    delete?: ProductionOrderWhereUniqueInput | ProductionOrderWhereUniqueInput[]
    connect?: ProductionOrderWhereUniqueInput | ProductionOrderWhereUniqueInput[]
    update?: ProductionOrderUpdateWithWhereUniqueWithoutTenantInput | ProductionOrderUpdateWithWhereUniqueWithoutTenantInput[]
    updateMany?: ProductionOrderUpdateManyWithWhereWithoutTenantInput | ProductionOrderUpdateManyWithWhereWithoutTenantInput[]
    deleteMany?: ProductionOrderScalarWhereInput | ProductionOrderScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutTenantNestedInput = {
    create?: XOR<UserCreateWithoutTenantInput, UserUncheckedCreateWithoutTenantInput> | UserCreateWithoutTenantInput[] | UserUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: UserCreateOrConnectWithoutTenantInput | UserCreateOrConnectWithoutTenantInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutTenantInput | UserUpsertWithWhereUniqueWithoutTenantInput[]
    createMany?: UserCreateManyTenantInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutTenantInput | UserUpdateWithWhereUniqueWithoutTenantInput[]
    updateMany?: UserUpdateManyWithWhereWithoutTenantInput | UserUpdateManyWithWhereWithoutTenantInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type ProfileCreateNestedOneWithoutUserInput = {
    create?: XOR<ProfileCreateWithoutUserInput, ProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutUserInput
    connect?: ProfileWhereUniqueInput
  }

  export type TenantCreateNestedOneWithoutUserInput = {
    create?: XOR<TenantCreateWithoutUserInput, TenantUncheckedCreateWithoutUserInput>
    connectOrCreate?: TenantCreateOrConnectWithoutUserInput
    connect?: TenantWhereUniqueInput
  }

  export type ProfileUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<ProfileCreateWithoutUserInput, ProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutUserInput
    connect?: ProfileWhereUniqueInput
  }

  export type ProfileUpdateOneWithoutUserNestedInput = {
    create?: XOR<ProfileCreateWithoutUserInput, ProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutUserInput
    upsert?: ProfileUpsertWithoutUserInput
    disconnect?: ProfileWhereInput | boolean
    delete?: ProfileWhereInput | boolean
    connect?: ProfileWhereUniqueInput
    update?: XOR<XOR<ProfileUpdateToOneWithWhereWithoutUserInput, ProfileUpdateWithoutUserInput>, ProfileUncheckedUpdateWithoutUserInput>
  }

  export type TenantUpdateOneRequiredWithoutUserNestedInput = {
    create?: XOR<TenantCreateWithoutUserInput, TenantUncheckedCreateWithoutUserInput>
    connectOrCreate?: TenantCreateOrConnectWithoutUserInput
    upsert?: TenantUpsertWithoutUserInput
    connect?: TenantWhereUniqueInput
    update?: XOR<XOR<TenantUpdateToOneWithWhereWithoutUserInput, TenantUpdateWithoutUserInput>, TenantUncheckedUpdateWithoutUserInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ProfileUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<ProfileCreateWithoutUserInput, ProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutUserInput
    upsert?: ProfileUpsertWithoutUserInput
    disconnect?: ProfileWhereInput | boolean
    delete?: ProfileWhereInput | boolean
    connect?: ProfileWhereUniqueInput
    update?: XOR<XOR<ProfileUpdateToOneWithWhereWithoutUserInput, ProfileUpdateWithoutUserInput>, ProfileUncheckedUpdateWithoutUserInput>
  }

  export type ProfileCreatetypeInput = {
    set: $Enums.ProfileType[]
  }

  export type UserCreateNestedOneWithoutProfileInput = {
    create?: XOR<UserCreateWithoutProfileInput, UserUncheckedCreateWithoutProfileInput>
    connectOrCreate?: UserCreateOrConnectWithoutProfileInput
    connect?: UserWhereUniqueInput
  }

  export type ProfileUpdatetypeInput = {
    set?: $Enums.ProfileType[]
    push?: $Enums.ProfileType | $Enums.ProfileType[]
  }

  export type UserUpdateOneRequiredWithoutProfileNestedInput = {
    create?: XOR<UserCreateWithoutProfileInput, UserUncheckedCreateWithoutProfileInput>
    connectOrCreate?: UserCreateOrConnectWithoutProfileInput
    upsert?: UserUpsertWithoutProfileInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutProfileInput, UserUpdateWithoutProfileInput>, UserUncheckedUpdateWithoutProfileInput>
  }

  export type ProductionOrderCreateNestedManyWithoutClientInput = {
    create?: XOR<ProductionOrderCreateWithoutClientInput, ProductionOrderUncheckedCreateWithoutClientInput> | ProductionOrderCreateWithoutClientInput[] | ProductionOrderUncheckedCreateWithoutClientInput[]
    connectOrCreate?: ProductionOrderCreateOrConnectWithoutClientInput | ProductionOrderCreateOrConnectWithoutClientInput[]
    createMany?: ProductionOrderCreateManyClientInputEnvelope
    connect?: ProductionOrderWhereUniqueInput | ProductionOrderWhereUniqueInput[]
  }

  export type TenantCreateNestedOneWithoutClientsInput = {
    create?: XOR<TenantCreateWithoutClientsInput, TenantUncheckedCreateWithoutClientsInput>
    connectOrCreate?: TenantCreateOrConnectWithoutClientsInput
    connect?: TenantWhereUniqueInput
  }

  export type ProductionOrderUncheckedCreateNestedManyWithoutClientInput = {
    create?: XOR<ProductionOrderCreateWithoutClientInput, ProductionOrderUncheckedCreateWithoutClientInput> | ProductionOrderCreateWithoutClientInput[] | ProductionOrderUncheckedCreateWithoutClientInput[]
    connectOrCreate?: ProductionOrderCreateOrConnectWithoutClientInput | ProductionOrderCreateOrConnectWithoutClientInput[]
    createMany?: ProductionOrderCreateManyClientInputEnvelope
    connect?: ProductionOrderWhereUniqueInput | ProductionOrderWhereUniqueInput[]
  }

  export type EnumClientTypeFieldUpdateOperationsInput = {
    set?: $Enums.ClientType
  }

  export type ProductionOrderUpdateManyWithoutClientNestedInput = {
    create?: XOR<ProductionOrderCreateWithoutClientInput, ProductionOrderUncheckedCreateWithoutClientInput> | ProductionOrderCreateWithoutClientInput[] | ProductionOrderUncheckedCreateWithoutClientInput[]
    connectOrCreate?: ProductionOrderCreateOrConnectWithoutClientInput | ProductionOrderCreateOrConnectWithoutClientInput[]
    upsert?: ProductionOrderUpsertWithWhereUniqueWithoutClientInput | ProductionOrderUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: ProductionOrderCreateManyClientInputEnvelope
    set?: ProductionOrderWhereUniqueInput | ProductionOrderWhereUniqueInput[]
    disconnect?: ProductionOrderWhereUniqueInput | ProductionOrderWhereUniqueInput[]
    delete?: ProductionOrderWhereUniqueInput | ProductionOrderWhereUniqueInput[]
    connect?: ProductionOrderWhereUniqueInput | ProductionOrderWhereUniqueInput[]
    update?: ProductionOrderUpdateWithWhereUniqueWithoutClientInput | ProductionOrderUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: ProductionOrderUpdateManyWithWhereWithoutClientInput | ProductionOrderUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: ProductionOrderScalarWhereInput | ProductionOrderScalarWhereInput[]
  }

  export type TenantUpdateOneRequiredWithoutClientsNestedInput = {
    create?: XOR<TenantCreateWithoutClientsInput, TenantUncheckedCreateWithoutClientsInput>
    connectOrCreate?: TenantCreateOrConnectWithoutClientsInput
    upsert?: TenantUpsertWithoutClientsInput
    connect?: TenantWhereUniqueInput
    update?: XOR<XOR<TenantUpdateToOneWithWhereWithoutClientsInput, TenantUpdateWithoutClientsInput>, TenantUncheckedUpdateWithoutClientsInput>
  }

  export type ProductionOrderUncheckedUpdateManyWithoutClientNestedInput = {
    create?: XOR<ProductionOrderCreateWithoutClientInput, ProductionOrderUncheckedCreateWithoutClientInput> | ProductionOrderCreateWithoutClientInput[] | ProductionOrderUncheckedCreateWithoutClientInput[]
    connectOrCreate?: ProductionOrderCreateOrConnectWithoutClientInput | ProductionOrderCreateOrConnectWithoutClientInput[]
    upsert?: ProductionOrderUpsertWithWhereUniqueWithoutClientInput | ProductionOrderUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: ProductionOrderCreateManyClientInputEnvelope
    set?: ProductionOrderWhereUniqueInput | ProductionOrderWhereUniqueInput[]
    disconnect?: ProductionOrderWhereUniqueInput | ProductionOrderWhereUniqueInput[]
    delete?: ProductionOrderWhereUniqueInput | ProductionOrderWhereUniqueInput[]
    connect?: ProductionOrderWhereUniqueInput | ProductionOrderWhereUniqueInput[]
    update?: ProductionOrderUpdateWithWhereUniqueWithoutClientInput | ProductionOrderUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: ProductionOrderUpdateManyWithWhereWithoutClientInput | ProductionOrderUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: ProductionOrderScalarWhereInput | ProductionOrderScalarWhereInput[]
  }

  export type RawMaterialTypeCreateNestedOneWithoutRawMaterialInput = {
    create?: XOR<RawMaterialTypeCreateWithoutRawMaterialInput, RawMaterialTypeUncheckedCreateWithoutRawMaterialInput>
    connectOrCreate?: RawMaterialTypeCreateOrConnectWithoutRawMaterialInput
    connect?: RawMaterialTypeWhereUniqueInput
  }

  export type ProductionOrderCreateNestedManyWithoutRawMaterialInput = {
    create?: XOR<ProductionOrderCreateWithoutRawMaterialInput, ProductionOrderUncheckedCreateWithoutRawMaterialInput> | ProductionOrderCreateWithoutRawMaterialInput[] | ProductionOrderUncheckedCreateWithoutRawMaterialInput[]
    connectOrCreate?: ProductionOrderCreateOrConnectWithoutRawMaterialInput | ProductionOrderCreateOrConnectWithoutRawMaterialInput[]
    connect?: ProductionOrderWhereUniqueInput | ProductionOrderWhereUniqueInput[]
  }

  export type ProductionOrderUncheckedCreateNestedManyWithoutRawMaterialInput = {
    create?: XOR<ProductionOrderCreateWithoutRawMaterialInput, ProductionOrderUncheckedCreateWithoutRawMaterialInput> | ProductionOrderCreateWithoutRawMaterialInput[] | ProductionOrderUncheckedCreateWithoutRawMaterialInput[]
    connectOrCreate?: ProductionOrderCreateOrConnectWithoutRawMaterialInput | ProductionOrderCreateOrConnectWithoutRawMaterialInput[]
    connect?: ProductionOrderWhereUniqueInput | ProductionOrderWhereUniqueInput[]
  }

  export type RawMaterialTypeUpdateOneRequiredWithoutRawMaterialNestedInput = {
    create?: XOR<RawMaterialTypeCreateWithoutRawMaterialInput, RawMaterialTypeUncheckedCreateWithoutRawMaterialInput>
    connectOrCreate?: RawMaterialTypeCreateOrConnectWithoutRawMaterialInput
    upsert?: RawMaterialTypeUpsertWithoutRawMaterialInput
    connect?: RawMaterialTypeWhereUniqueInput
    update?: XOR<XOR<RawMaterialTypeUpdateToOneWithWhereWithoutRawMaterialInput, RawMaterialTypeUpdateWithoutRawMaterialInput>, RawMaterialTypeUncheckedUpdateWithoutRawMaterialInput>
  }

  export type ProductionOrderUpdateManyWithoutRawMaterialNestedInput = {
    create?: XOR<ProductionOrderCreateWithoutRawMaterialInput, ProductionOrderUncheckedCreateWithoutRawMaterialInput> | ProductionOrderCreateWithoutRawMaterialInput[] | ProductionOrderUncheckedCreateWithoutRawMaterialInput[]
    connectOrCreate?: ProductionOrderCreateOrConnectWithoutRawMaterialInput | ProductionOrderCreateOrConnectWithoutRawMaterialInput[]
    upsert?: ProductionOrderUpsertWithWhereUniqueWithoutRawMaterialInput | ProductionOrderUpsertWithWhereUniqueWithoutRawMaterialInput[]
    set?: ProductionOrderWhereUniqueInput | ProductionOrderWhereUniqueInput[]
    disconnect?: ProductionOrderWhereUniqueInput | ProductionOrderWhereUniqueInput[]
    delete?: ProductionOrderWhereUniqueInput | ProductionOrderWhereUniqueInput[]
    connect?: ProductionOrderWhereUniqueInput | ProductionOrderWhereUniqueInput[]
    update?: ProductionOrderUpdateWithWhereUniqueWithoutRawMaterialInput | ProductionOrderUpdateWithWhereUniqueWithoutRawMaterialInput[]
    updateMany?: ProductionOrderUpdateManyWithWhereWithoutRawMaterialInput | ProductionOrderUpdateManyWithWhereWithoutRawMaterialInput[]
    deleteMany?: ProductionOrderScalarWhereInput | ProductionOrderScalarWhereInput[]
  }

  export type ProductionOrderUncheckedUpdateManyWithoutRawMaterialNestedInput = {
    create?: XOR<ProductionOrderCreateWithoutRawMaterialInput, ProductionOrderUncheckedCreateWithoutRawMaterialInput> | ProductionOrderCreateWithoutRawMaterialInput[] | ProductionOrderUncheckedCreateWithoutRawMaterialInput[]
    connectOrCreate?: ProductionOrderCreateOrConnectWithoutRawMaterialInput | ProductionOrderCreateOrConnectWithoutRawMaterialInput[]
    upsert?: ProductionOrderUpsertWithWhereUniqueWithoutRawMaterialInput | ProductionOrderUpsertWithWhereUniqueWithoutRawMaterialInput[]
    set?: ProductionOrderWhereUniqueInput | ProductionOrderWhereUniqueInput[]
    disconnect?: ProductionOrderWhereUniqueInput | ProductionOrderWhereUniqueInput[]
    delete?: ProductionOrderWhereUniqueInput | ProductionOrderWhereUniqueInput[]
    connect?: ProductionOrderWhereUniqueInput | ProductionOrderWhereUniqueInput[]
    update?: ProductionOrderUpdateWithWhereUniqueWithoutRawMaterialInput | ProductionOrderUpdateWithWhereUniqueWithoutRawMaterialInput[]
    updateMany?: ProductionOrderUpdateManyWithWhereWithoutRawMaterialInput | ProductionOrderUpdateManyWithWhereWithoutRawMaterialInput[]
    deleteMany?: ProductionOrderScalarWhereInput | ProductionOrderScalarWhereInput[]
  }

  export type RawMaterialCreateNestedManyWithoutMaterialTypeInput = {
    create?: XOR<RawMaterialCreateWithoutMaterialTypeInput, RawMaterialUncheckedCreateWithoutMaterialTypeInput> | RawMaterialCreateWithoutMaterialTypeInput[] | RawMaterialUncheckedCreateWithoutMaterialTypeInput[]
    connectOrCreate?: RawMaterialCreateOrConnectWithoutMaterialTypeInput | RawMaterialCreateOrConnectWithoutMaterialTypeInput[]
    createMany?: RawMaterialCreateManyMaterialTypeInputEnvelope
    connect?: RawMaterialWhereUniqueInput | RawMaterialWhereUniqueInput[]
  }

  export type RawMaterialUncheckedCreateNestedManyWithoutMaterialTypeInput = {
    create?: XOR<RawMaterialCreateWithoutMaterialTypeInput, RawMaterialUncheckedCreateWithoutMaterialTypeInput> | RawMaterialCreateWithoutMaterialTypeInput[] | RawMaterialUncheckedCreateWithoutMaterialTypeInput[]
    connectOrCreate?: RawMaterialCreateOrConnectWithoutMaterialTypeInput | RawMaterialCreateOrConnectWithoutMaterialTypeInput[]
    createMany?: RawMaterialCreateManyMaterialTypeInputEnvelope
    connect?: RawMaterialWhereUniqueInput | RawMaterialWhereUniqueInput[]
  }

  export type RawMaterialUpdateManyWithoutMaterialTypeNestedInput = {
    create?: XOR<RawMaterialCreateWithoutMaterialTypeInput, RawMaterialUncheckedCreateWithoutMaterialTypeInput> | RawMaterialCreateWithoutMaterialTypeInput[] | RawMaterialUncheckedCreateWithoutMaterialTypeInput[]
    connectOrCreate?: RawMaterialCreateOrConnectWithoutMaterialTypeInput | RawMaterialCreateOrConnectWithoutMaterialTypeInput[]
    upsert?: RawMaterialUpsertWithWhereUniqueWithoutMaterialTypeInput | RawMaterialUpsertWithWhereUniqueWithoutMaterialTypeInput[]
    createMany?: RawMaterialCreateManyMaterialTypeInputEnvelope
    set?: RawMaterialWhereUniqueInput | RawMaterialWhereUniqueInput[]
    disconnect?: RawMaterialWhereUniqueInput | RawMaterialWhereUniqueInput[]
    delete?: RawMaterialWhereUniqueInput | RawMaterialWhereUniqueInput[]
    connect?: RawMaterialWhereUniqueInput | RawMaterialWhereUniqueInput[]
    update?: RawMaterialUpdateWithWhereUniqueWithoutMaterialTypeInput | RawMaterialUpdateWithWhereUniqueWithoutMaterialTypeInput[]
    updateMany?: RawMaterialUpdateManyWithWhereWithoutMaterialTypeInput | RawMaterialUpdateManyWithWhereWithoutMaterialTypeInput[]
    deleteMany?: RawMaterialScalarWhereInput | RawMaterialScalarWhereInput[]
  }

  export type RawMaterialUncheckedUpdateManyWithoutMaterialTypeNestedInput = {
    create?: XOR<RawMaterialCreateWithoutMaterialTypeInput, RawMaterialUncheckedCreateWithoutMaterialTypeInput> | RawMaterialCreateWithoutMaterialTypeInput[] | RawMaterialUncheckedCreateWithoutMaterialTypeInput[]
    connectOrCreate?: RawMaterialCreateOrConnectWithoutMaterialTypeInput | RawMaterialCreateOrConnectWithoutMaterialTypeInput[]
    upsert?: RawMaterialUpsertWithWhereUniqueWithoutMaterialTypeInput | RawMaterialUpsertWithWhereUniqueWithoutMaterialTypeInput[]
    createMany?: RawMaterialCreateManyMaterialTypeInputEnvelope
    set?: RawMaterialWhereUniqueInput | RawMaterialWhereUniqueInput[]
    disconnect?: RawMaterialWhereUniqueInput | RawMaterialWhereUniqueInput[]
    delete?: RawMaterialWhereUniqueInput | RawMaterialWhereUniqueInput[]
    connect?: RawMaterialWhereUniqueInput | RawMaterialWhereUniqueInput[]
    update?: RawMaterialUpdateWithWhereUniqueWithoutMaterialTypeInput | RawMaterialUpdateWithWhereUniqueWithoutMaterialTypeInput[]
    updateMany?: RawMaterialUpdateManyWithWhereWithoutMaterialTypeInput | RawMaterialUpdateManyWithWhereWithoutMaterialTypeInput[]
    deleteMany?: RawMaterialScalarWhereInput | RawMaterialScalarWhereInput[]
  }

  export type ProductionOrderCreateNestedManyWithoutPackageInput = {
    create?: XOR<ProductionOrderCreateWithoutPackageInput, ProductionOrderUncheckedCreateWithoutPackageInput> | ProductionOrderCreateWithoutPackageInput[] | ProductionOrderUncheckedCreateWithoutPackageInput[]
    connectOrCreate?: ProductionOrderCreateOrConnectWithoutPackageInput | ProductionOrderCreateOrConnectWithoutPackageInput[]
    connect?: ProductionOrderWhereUniqueInput | ProductionOrderWhereUniqueInput[]
  }

  export type ProductionOrderUncheckedCreateNestedManyWithoutPackageInput = {
    create?: XOR<ProductionOrderCreateWithoutPackageInput, ProductionOrderUncheckedCreateWithoutPackageInput> | ProductionOrderCreateWithoutPackageInput[] | ProductionOrderUncheckedCreateWithoutPackageInput[]
    connectOrCreate?: ProductionOrderCreateOrConnectWithoutPackageInput | ProductionOrderCreateOrConnectWithoutPackageInput[]
    connect?: ProductionOrderWhereUniqueInput | ProductionOrderWhereUniqueInput[]
  }

  export type ProductionOrderUpdateManyWithoutPackageNestedInput = {
    create?: XOR<ProductionOrderCreateWithoutPackageInput, ProductionOrderUncheckedCreateWithoutPackageInput> | ProductionOrderCreateWithoutPackageInput[] | ProductionOrderUncheckedCreateWithoutPackageInput[]
    connectOrCreate?: ProductionOrderCreateOrConnectWithoutPackageInput | ProductionOrderCreateOrConnectWithoutPackageInput[]
    upsert?: ProductionOrderUpsertWithWhereUniqueWithoutPackageInput | ProductionOrderUpsertWithWhereUniqueWithoutPackageInput[]
    set?: ProductionOrderWhereUniqueInput | ProductionOrderWhereUniqueInput[]
    disconnect?: ProductionOrderWhereUniqueInput | ProductionOrderWhereUniqueInput[]
    delete?: ProductionOrderWhereUniqueInput | ProductionOrderWhereUniqueInput[]
    connect?: ProductionOrderWhereUniqueInput | ProductionOrderWhereUniqueInput[]
    update?: ProductionOrderUpdateWithWhereUniqueWithoutPackageInput | ProductionOrderUpdateWithWhereUniqueWithoutPackageInput[]
    updateMany?: ProductionOrderUpdateManyWithWhereWithoutPackageInput | ProductionOrderUpdateManyWithWhereWithoutPackageInput[]
    deleteMany?: ProductionOrderScalarWhereInput | ProductionOrderScalarWhereInput[]
  }

  export type ProductionOrderUncheckedUpdateManyWithoutPackageNestedInput = {
    create?: XOR<ProductionOrderCreateWithoutPackageInput, ProductionOrderUncheckedCreateWithoutPackageInput> | ProductionOrderCreateWithoutPackageInput[] | ProductionOrderUncheckedCreateWithoutPackageInput[]
    connectOrCreate?: ProductionOrderCreateOrConnectWithoutPackageInput | ProductionOrderCreateOrConnectWithoutPackageInput[]
    upsert?: ProductionOrderUpsertWithWhereUniqueWithoutPackageInput | ProductionOrderUpsertWithWhereUniqueWithoutPackageInput[]
    set?: ProductionOrderWhereUniqueInput | ProductionOrderWhereUniqueInput[]
    disconnect?: ProductionOrderWhereUniqueInput | ProductionOrderWhereUniqueInput[]
    delete?: ProductionOrderWhereUniqueInput | ProductionOrderWhereUniqueInput[]
    connect?: ProductionOrderWhereUniqueInput | ProductionOrderWhereUniqueInput[]
    update?: ProductionOrderUpdateWithWhereUniqueWithoutPackageInput | ProductionOrderUpdateWithWhereUniqueWithoutPackageInput[]
    updateMany?: ProductionOrderUpdateManyWithWhereWithoutPackageInput | ProductionOrderUpdateManyWithWhereWithoutPackageInput[]
    deleteMany?: ProductionOrderScalarWhereInput | ProductionOrderScalarWhereInput[]
  }

  export type ProductionOrderCreateNestedManyWithoutEquipmentInput = {
    create?: XOR<ProductionOrderCreateWithoutEquipmentInput, ProductionOrderUncheckedCreateWithoutEquipmentInput> | ProductionOrderCreateWithoutEquipmentInput[] | ProductionOrderUncheckedCreateWithoutEquipmentInput[]
    connectOrCreate?: ProductionOrderCreateOrConnectWithoutEquipmentInput | ProductionOrderCreateOrConnectWithoutEquipmentInput[]
    connect?: ProductionOrderWhereUniqueInput | ProductionOrderWhereUniqueInput[]
  }

  export type ProductionOrderUncheckedCreateNestedManyWithoutEquipmentInput = {
    create?: XOR<ProductionOrderCreateWithoutEquipmentInput, ProductionOrderUncheckedCreateWithoutEquipmentInput> | ProductionOrderCreateWithoutEquipmentInput[] | ProductionOrderUncheckedCreateWithoutEquipmentInput[]
    connectOrCreate?: ProductionOrderCreateOrConnectWithoutEquipmentInput | ProductionOrderCreateOrConnectWithoutEquipmentInput[]
    connect?: ProductionOrderWhereUniqueInput | ProductionOrderWhereUniqueInput[]
  }

  export type ProductionOrderUpdateManyWithoutEquipmentNestedInput = {
    create?: XOR<ProductionOrderCreateWithoutEquipmentInput, ProductionOrderUncheckedCreateWithoutEquipmentInput> | ProductionOrderCreateWithoutEquipmentInput[] | ProductionOrderUncheckedCreateWithoutEquipmentInput[]
    connectOrCreate?: ProductionOrderCreateOrConnectWithoutEquipmentInput | ProductionOrderCreateOrConnectWithoutEquipmentInput[]
    upsert?: ProductionOrderUpsertWithWhereUniqueWithoutEquipmentInput | ProductionOrderUpsertWithWhereUniqueWithoutEquipmentInput[]
    set?: ProductionOrderWhereUniqueInput | ProductionOrderWhereUniqueInput[]
    disconnect?: ProductionOrderWhereUniqueInput | ProductionOrderWhereUniqueInput[]
    delete?: ProductionOrderWhereUniqueInput | ProductionOrderWhereUniqueInput[]
    connect?: ProductionOrderWhereUniqueInput | ProductionOrderWhereUniqueInput[]
    update?: ProductionOrderUpdateWithWhereUniqueWithoutEquipmentInput | ProductionOrderUpdateWithWhereUniqueWithoutEquipmentInput[]
    updateMany?: ProductionOrderUpdateManyWithWhereWithoutEquipmentInput | ProductionOrderUpdateManyWithWhereWithoutEquipmentInput[]
    deleteMany?: ProductionOrderScalarWhereInput | ProductionOrderScalarWhereInput[]
  }

  export type ProductionOrderUncheckedUpdateManyWithoutEquipmentNestedInput = {
    create?: XOR<ProductionOrderCreateWithoutEquipmentInput, ProductionOrderUncheckedCreateWithoutEquipmentInput> | ProductionOrderCreateWithoutEquipmentInput[] | ProductionOrderUncheckedCreateWithoutEquipmentInput[]
    connectOrCreate?: ProductionOrderCreateOrConnectWithoutEquipmentInput | ProductionOrderCreateOrConnectWithoutEquipmentInput[]
    upsert?: ProductionOrderUpsertWithWhereUniqueWithoutEquipmentInput | ProductionOrderUpsertWithWhereUniqueWithoutEquipmentInput[]
    set?: ProductionOrderWhereUniqueInput | ProductionOrderWhereUniqueInput[]
    disconnect?: ProductionOrderWhereUniqueInput | ProductionOrderWhereUniqueInput[]
    delete?: ProductionOrderWhereUniqueInput | ProductionOrderWhereUniqueInput[]
    connect?: ProductionOrderWhereUniqueInput | ProductionOrderWhereUniqueInput[]
    update?: ProductionOrderUpdateWithWhereUniqueWithoutEquipmentInput | ProductionOrderUpdateWithWhereUniqueWithoutEquipmentInput[]
    updateMany?: ProductionOrderUpdateManyWithWhereWithoutEquipmentInput | ProductionOrderUpdateManyWithWhereWithoutEquipmentInput[]
    deleteMany?: ProductionOrderScalarWhereInput | ProductionOrderScalarWhereInput[]
  }

  export type ClientCreateNestedOneWithoutProductionOrdersInput = {
    create?: XOR<ClientCreateWithoutProductionOrdersInput, ClientUncheckedCreateWithoutProductionOrdersInput>
    connectOrCreate?: ClientCreateOrConnectWithoutProductionOrdersInput
    connect?: ClientWhereUniqueInput
  }

  export type RawMaterialCreateNestedManyWithoutProductionOrdersInput = {
    create?: XOR<RawMaterialCreateWithoutProductionOrdersInput, RawMaterialUncheckedCreateWithoutProductionOrdersInput> | RawMaterialCreateWithoutProductionOrdersInput[] | RawMaterialUncheckedCreateWithoutProductionOrdersInput[]
    connectOrCreate?: RawMaterialCreateOrConnectWithoutProductionOrdersInput | RawMaterialCreateOrConnectWithoutProductionOrdersInput[]
    connect?: RawMaterialWhereUniqueInput | RawMaterialWhereUniqueInput[]
  }

  export type PackageCreateNestedManyWithoutProductionOrdersInput = {
    create?: XOR<PackageCreateWithoutProductionOrdersInput, PackageUncheckedCreateWithoutProductionOrdersInput> | PackageCreateWithoutProductionOrdersInput[] | PackageUncheckedCreateWithoutProductionOrdersInput[]
    connectOrCreate?: PackageCreateOrConnectWithoutProductionOrdersInput | PackageCreateOrConnectWithoutProductionOrdersInput[]
    connect?: PackageWhereUniqueInput | PackageWhereUniqueInput[]
  }

  export type EquipmentCreateNestedManyWithoutProductionOrdersInput = {
    create?: XOR<EquipmentCreateWithoutProductionOrdersInput, EquipmentUncheckedCreateWithoutProductionOrdersInput> | EquipmentCreateWithoutProductionOrdersInput[] | EquipmentUncheckedCreateWithoutProductionOrdersInput[]
    connectOrCreate?: EquipmentCreateOrConnectWithoutProductionOrdersInput | EquipmentCreateOrConnectWithoutProductionOrdersInput[]
    connect?: EquipmentWhereUniqueInput | EquipmentWhereUniqueInput[]
  }

  export type TenantCreateNestedOneWithoutProductionOrdersInput = {
    create?: XOR<TenantCreateWithoutProductionOrdersInput, TenantUncheckedCreateWithoutProductionOrdersInput>
    connectOrCreate?: TenantCreateOrConnectWithoutProductionOrdersInput
    connect?: TenantWhereUniqueInput
  }

  export type RawMaterialUncheckedCreateNestedManyWithoutProductionOrdersInput = {
    create?: XOR<RawMaterialCreateWithoutProductionOrdersInput, RawMaterialUncheckedCreateWithoutProductionOrdersInput> | RawMaterialCreateWithoutProductionOrdersInput[] | RawMaterialUncheckedCreateWithoutProductionOrdersInput[]
    connectOrCreate?: RawMaterialCreateOrConnectWithoutProductionOrdersInput | RawMaterialCreateOrConnectWithoutProductionOrdersInput[]
    connect?: RawMaterialWhereUniqueInput | RawMaterialWhereUniqueInput[]
  }

  export type PackageUncheckedCreateNestedManyWithoutProductionOrdersInput = {
    create?: XOR<PackageCreateWithoutProductionOrdersInput, PackageUncheckedCreateWithoutProductionOrdersInput> | PackageCreateWithoutProductionOrdersInput[] | PackageUncheckedCreateWithoutProductionOrdersInput[]
    connectOrCreate?: PackageCreateOrConnectWithoutProductionOrdersInput | PackageCreateOrConnectWithoutProductionOrdersInput[]
    connect?: PackageWhereUniqueInput | PackageWhereUniqueInput[]
  }

  export type EquipmentUncheckedCreateNestedManyWithoutProductionOrdersInput = {
    create?: XOR<EquipmentCreateWithoutProductionOrdersInput, EquipmentUncheckedCreateWithoutProductionOrdersInput> | EquipmentCreateWithoutProductionOrdersInput[] | EquipmentUncheckedCreateWithoutProductionOrdersInput[]
    connectOrCreate?: EquipmentCreateOrConnectWithoutProductionOrdersInput | EquipmentCreateOrConnectWithoutProductionOrdersInput[]
    connect?: EquipmentWhereUniqueInput | EquipmentWhereUniqueInput[]
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type EnumStatusFieldUpdateOperationsInput = {
    set?: $Enums.Status
  }

  export type ClientUpdateOneRequiredWithoutProductionOrdersNestedInput = {
    create?: XOR<ClientCreateWithoutProductionOrdersInput, ClientUncheckedCreateWithoutProductionOrdersInput>
    connectOrCreate?: ClientCreateOrConnectWithoutProductionOrdersInput
    upsert?: ClientUpsertWithoutProductionOrdersInput
    connect?: ClientWhereUniqueInput
    update?: XOR<XOR<ClientUpdateToOneWithWhereWithoutProductionOrdersInput, ClientUpdateWithoutProductionOrdersInput>, ClientUncheckedUpdateWithoutProductionOrdersInput>
  }

  export type RawMaterialUpdateManyWithoutProductionOrdersNestedInput = {
    create?: XOR<RawMaterialCreateWithoutProductionOrdersInput, RawMaterialUncheckedCreateWithoutProductionOrdersInput> | RawMaterialCreateWithoutProductionOrdersInput[] | RawMaterialUncheckedCreateWithoutProductionOrdersInput[]
    connectOrCreate?: RawMaterialCreateOrConnectWithoutProductionOrdersInput | RawMaterialCreateOrConnectWithoutProductionOrdersInput[]
    upsert?: RawMaterialUpsertWithWhereUniqueWithoutProductionOrdersInput | RawMaterialUpsertWithWhereUniqueWithoutProductionOrdersInput[]
    set?: RawMaterialWhereUniqueInput | RawMaterialWhereUniqueInput[]
    disconnect?: RawMaterialWhereUniqueInput | RawMaterialWhereUniqueInput[]
    delete?: RawMaterialWhereUniqueInput | RawMaterialWhereUniqueInput[]
    connect?: RawMaterialWhereUniqueInput | RawMaterialWhereUniqueInput[]
    update?: RawMaterialUpdateWithWhereUniqueWithoutProductionOrdersInput | RawMaterialUpdateWithWhereUniqueWithoutProductionOrdersInput[]
    updateMany?: RawMaterialUpdateManyWithWhereWithoutProductionOrdersInput | RawMaterialUpdateManyWithWhereWithoutProductionOrdersInput[]
    deleteMany?: RawMaterialScalarWhereInput | RawMaterialScalarWhereInput[]
  }

  export type PackageUpdateManyWithoutProductionOrdersNestedInput = {
    create?: XOR<PackageCreateWithoutProductionOrdersInput, PackageUncheckedCreateWithoutProductionOrdersInput> | PackageCreateWithoutProductionOrdersInput[] | PackageUncheckedCreateWithoutProductionOrdersInput[]
    connectOrCreate?: PackageCreateOrConnectWithoutProductionOrdersInput | PackageCreateOrConnectWithoutProductionOrdersInput[]
    upsert?: PackageUpsertWithWhereUniqueWithoutProductionOrdersInput | PackageUpsertWithWhereUniqueWithoutProductionOrdersInput[]
    set?: PackageWhereUniqueInput | PackageWhereUniqueInput[]
    disconnect?: PackageWhereUniqueInput | PackageWhereUniqueInput[]
    delete?: PackageWhereUniqueInput | PackageWhereUniqueInput[]
    connect?: PackageWhereUniqueInput | PackageWhereUniqueInput[]
    update?: PackageUpdateWithWhereUniqueWithoutProductionOrdersInput | PackageUpdateWithWhereUniqueWithoutProductionOrdersInput[]
    updateMany?: PackageUpdateManyWithWhereWithoutProductionOrdersInput | PackageUpdateManyWithWhereWithoutProductionOrdersInput[]
    deleteMany?: PackageScalarWhereInput | PackageScalarWhereInput[]
  }

  export type EquipmentUpdateManyWithoutProductionOrdersNestedInput = {
    create?: XOR<EquipmentCreateWithoutProductionOrdersInput, EquipmentUncheckedCreateWithoutProductionOrdersInput> | EquipmentCreateWithoutProductionOrdersInput[] | EquipmentUncheckedCreateWithoutProductionOrdersInput[]
    connectOrCreate?: EquipmentCreateOrConnectWithoutProductionOrdersInput | EquipmentCreateOrConnectWithoutProductionOrdersInput[]
    upsert?: EquipmentUpsertWithWhereUniqueWithoutProductionOrdersInput | EquipmentUpsertWithWhereUniqueWithoutProductionOrdersInput[]
    set?: EquipmentWhereUniqueInput | EquipmentWhereUniqueInput[]
    disconnect?: EquipmentWhereUniqueInput | EquipmentWhereUniqueInput[]
    delete?: EquipmentWhereUniqueInput | EquipmentWhereUniqueInput[]
    connect?: EquipmentWhereUniqueInput | EquipmentWhereUniqueInput[]
    update?: EquipmentUpdateWithWhereUniqueWithoutProductionOrdersInput | EquipmentUpdateWithWhereUniqueWithoutProductionOrdersInput[]
    updateMany?: EquipmentUpdateManyWithWhereWithoutProductionOrdersInput | EquipmentUpdateManyWithWhereWithoutProductionOrdersInput[]
    deleteMany?: EquipmentScalarWhereInput | EquipmentScalarWhereInput[]
  }

  export type TenantUpdateOneRequiredWithoutProductionOrdersNestedInput = {
    create?: XOR<TenantCreateWithoutProductionOrdersInput, TenantUncheckedCreateWithoutProductionOrdersInput>
    connectOrCreate?: TenantCreateOrConnectWithoutProductionOrdersInput
    upsert?: TenantUpsertWithoutProductionOrdersInput
    connect?: TenantWhereUniqueInput
    update?: XOR<XOR<TenantUpdateToOneWithWhereWithoutProductionOrdersInput, TenantUpdateWithoutProductionOrdersInput>, TenantUncheckedUpdateWithoutProductionOrdersInput>
  }

  export type RawMaterialUncheckedUpdateManyWithoutProductionOrdersNestedInput = {
    create?: XOR<RawMaterialCreateWithoutProductionOrdersInput, RawMaterialUncheckedCreateWithoutProductionOrdersInput> | RawMaterialCreateWithoutProductionOrdersInput[] | RawMaterialUncheckedCreateWithoutProductionOrdersInput[]
    connectOrCreate?: RawMaterialCreateOrConnectWithoutProductionOrdersInput | RawMaterialCreateOrConnectWithoutProductionOrdersInput[]
    upsert?: RawMaterialUpsertWithWhereUniqueWithoutProductionOrdersInput | RawMaterialUpsertWithWhereUniqueWithoutProductionOrdersInput[]
    set?: RawMaterialWhereUniqueInput | RawMaterialWhereUniqueInput[]
    disconnect?: RawMaterialWhereUniqueInput | RawMaterialWhereUniqueInput[]
    delete?: RawMaterialWhereUniqueInput | RawMaterialWhereUniqueInput[]
    connect?: RawMaterialWhereUniqueInput | RawMaterialWhereUniqueInput[]
    update?: RawMaterialUpdateWithWhereUniqueWithoutProductionOrdersInput | RawMaterialUpdateWithWhereUniqueWithoutProductionOrdersInput[]
    updateMany?: RawMaterialUpdateManyWithWhereWithoutProductionOrdersInput | RawMaterialUpdateManyWithWhereWithoutProductionOrdersInput[]
    deleteMany?: RawMaterialScalarWhereInput | RawMaterialScalarWhereInput[]
  }

  export type PackageUncheckedUpdateManyWithoutProductionOrdersNestedInput = {
    create?: XOR<PackageCreateWithoutProductionOrdersInput, PackageUncheckedCreateWithoutProductionOrdersInput> | PackageCreateWithoutProductionOrdersInput[] | PackageUncheckedCreateWithoutProductionOrdersInput[]
    connectOrCreate?: PackageCreateOrConnectWithoutProductionOrdersInput | PackageCreateOrConnectWithoutProductionOrdersInput[]
    upsert?: PackageUpsertWithWhereUniqueWithoutProductionOrdersInput | PackageUpsertWithWhereUniqueWithoutProductionOrdersInput[]
    set?: PackageWhereUniqueInput | PackageWhereUniqueInput[]
    disconnect?: PackageWhereUniqueInput | PackageWhereUniqueInput[]
    delete?: PackageWhereUniqueInput | PackageWhereUniqueInput[]
    connect?: PackageWhereUniqueInput | PackageWhereUniqueInput[]
    update?: PackageUpdateWithWhereUniqueWithoutProductionOrdersInput | PackageUpdateWithWhereUniqueWithoutProductionOrdersInput[]
    updateMany?: PackageUpdateManyWithWhereWithoutProductionOrdersInput | PackageUpdateManyWithWhereWithoutProductionOrdersInput[]
    deleteMany?: PackageScalarWhereInput | PackageScalarWhereInput[]
  }

  export type EquipmentUncheckedUpdateManyWithoutProductionOrdersNestedInput = {
    create?: XOR<EquipmentCreateWithoutProductionOrdersInput, EquipmentUncheckedCreateWithoutProductionOrdersInput> | EquipmentCreateWithoutProductionOrdersInput[] | EquipmentUncheckedCreateWithoutProductionOrdersInput[]
    connectOrCreate?: EquipmentCreateOrConnectWithoutProductionOrdersInput | EquipmentCreateOrConnectWithoutProductionOrdersInput[]
    upsert?: EquipmentUpsertWithWhereUniqueWithoutProductionOrdersInput | EquipmentUpsertWithWhereUniqueWithoutProductionOrdersInput[]
    set?: EquipmentWhereUniqueInput | EquipmentWhereUniqueInput[]
    disconnect?: EquipmentWhereUniqueInput | EquipmentWhereUniqueInput[]
    delete?: EquipmentWhereUniqueInput | EquipmentWhereUniqueInput[]
    connect?: EquipmentWhereUniqueInput | EquipmentWhereUniqueInput[]
    update?: EquipmentUpdateWithWhereUniqueWithoutProductionOrdersInput | EquipmentUpdateWithWhereUniqueWithoutProductionOrdersInput[]
    updateMany?: EquipmentUpdateManyWithWhereWithoutProductionOrdersInput | EquipmentUpdateManyWithWhereWithoutProductionOrdersInput[]
    deleteMany?: EquipmentScalarWhereInput | EquipmentScalarWhereInput[]
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedEnumClientTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ClientType | EnumClientTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ClientType[] | ListEnumClientTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ClientType[] | ListEnumClientTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumClientTypeFilter<$PrismaModel> | $Enums.ClientType
  }

  export type NestedEnumClientTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ClientType | EnumClientTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ClientType[] | ListEnumClientTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ClientType[] | ListEnumClientTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumClientTypeWithAggregatesFilter<$PrismaModel> | $Enums.ClientType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumClientTypeFilter<$PrismaModel>
    _max?: NestedEnumClientTypeFilter<$PrismaModel>
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedEnumStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusFilter<$PrismaModel> | $Enums.Status
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type NestedEnumStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusWithAggregatesFilter<$PrismaModel> | $Enums.Status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusFilter<$PrismaModel>
    _max?: NestedEnumStatusFilter<$PrismaModel>
  }

  export type ClientCreateWithoutTenantInput = {
    id?: string
    name: string
    identification: string
    type: $Enums.ClientType
    createdAt?: Date | string
    updatedAt?: Date | string
    productionOrders?: ProductionOrderCreateNestedManyWithoutClientInput
  }

  export type ClientUncheckedCreateWithoutTenantInput = {
    id?: string
    name: string
    identification: string
    type: $Enums.ClientType
    createdAt?: Date | string
    updatedAt?: Date | string
    productionOrders?: ProductionOrderUncheckedCreateNestedManyWithoutClientInput
  }

  export type ClientCreateOrConnectWithoutTenantInput = {
    where: ClientWhereUniqueInput
    create: XOR<ClientCreateWithoutTenantInput, ClientUncheckedCreateWithoutTenantInput>
  }

  export type ClientCreateManyTenantInputEnvelope = {
    data: ClientCreateManyTenantInput | ClientCreateManyTenantInput[]
    skipDuplicates?: boolean
  }

  export type ProductionOrderCreateWithoutTenantInput = {
    description: string
    width?: Decimal | DecimalJsLike | number | string
    height?: Decimal | DecimalJsLike | number | string
    lot: string
    quantityPerRoll?: number
    diameterCore?: Decimal | DecimalJsLike | number | string
    rollSize?: Decimal | DecimalJsLike | number | string
    observation: string
    requesterId: number
    productionResponsibleId: number
    status: $Enums.Status
    employeeId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    client: ClientCreateNestedOneWithoutProductionOrdersInput
    rawMaterial?: RawMaterialCreateNestedManyWithoutProductionOrdersInput
    package?: PackageCreateNestedManyWithoutProductionOrdersInput
    equipment?: EquipmentCreateNestedManyWithoutProductionOrdersInput
  }

  export type ProductionOrderUncheckedCreateWithoutTenantInput = {
    id?: number
    description: string
    width?: Decimal | DecimalJsLike | number | string
    height?: Decimal | DecimalJsLike | number | string
    lot: string
    quantityPerRoll?: number
    diameterCore?: Decimal | DecimalJsLike | number | string
    rollSize?: Decimal | DecimalJsLike | number | string
    observation: string
    requesterId: number
    clientId: string
    productionResponsibleId: number
    status: $Enums.Status
    employeeId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    rawMaterial?: RawMaterialUncheckedCreateNestedManyWithoutProductionOrdersInput
    package?: PackageUncheckedCreateNestedManyWithoutProductionOrdersInput
    equipment?: EquipmentUncheckedCreateNestedManyWithoutProductionOrdersInput
  }

  export type ProductionOrderCreateOrConnectWithoutTenantInput = {
    where: ProductionOrderWhereUniqueInput
    create: XOR<ProductionOrderCreateWithoutTenantInput, ProductionOrderUncheckedCreateWithoutTenantInput>
  }

  export type ProductionOrderCreateManyTenantInputEnvelope = {
    data: ProductionOrderCreateManyTenantInput | ProductionOrderCreateManyTenantInput[]
    skipDuplicates?: boolean
  }

  export type UserCreateWithoutTenantInput = {
    name?: string | null
    email: string
    profile?: ProfileCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutTenantInput = {
    id?: number
    name?: string | null
    email: string
    profile?: ProfileUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutTenantInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTenantInput, UserUncheckedCreateWithoutTenantInput>
  }

  export type UserCreateManyTenantInputEnvelope = {
    data: UserCreateManyTenantInput | UserCreateManyTenantInput[]
    skipDuplicates?: boolean
  }

  export type ClientUpsertWithWhereUniqueWithoutTenantInput = {
    where: ClientWhereUniqueInput
    update: XOR<ClientUpdateWithoutTenantInput, ClientUncheckedUpdateWithoutTenantInput>
    create: XOR<ClientCreateWithoutTenantInput, ClientUncheckedCreateWithoutTenantInput>
  }

  export type ClientUpdateWithWhereUniqueWithoutTenantInput = {
    where: ClientWhereUniqueInput
    data: XOR<ClientUpdateWithoutTenantInput, ClientUncheckedUpdateWithoutTenantInput>
  }

  export type ClientUpdateManyWithWhereWithoutTenantInput = {
    where: ClientScalarWhereInput
    data: XOR<ClientUpdateManyMutationInput, ClientUncheckedUpdateManyWithoutTenantInput>
  }

  export type ClientScalarWhereInput = {
    AND?: ClientScalarWhereInput | ClientScalarWhereInput[]
    OR?: ClientScalarWhereInput[]
    NOT?: ClientScalarWhereInput | ClientScalarWhereInput[]
    id?: StringFilter<"Client"> | string
    name?: StringFilter<"Client"> | string
    identification?: StringFilter<"Client"> | string
    type?: EnumClientTypeFilter<"Client"> | $Enums.ClientType
    createdAt?: DateTimeFilter<"Client"> | Date | string
    updatedAt?: DateTimeFilter<"Client"> | Date | string
    tenantId?: StringFilter<"Client"> | string
  }

  export type ProductionOrderUpsertWithWhereUniqueWithoutTenantInput = {
    where: ProductionOrderWhereUniqueInput
    update: XOR<ProductionOrderUpdateWithoutTenantInput, ProductionOrderUncheckedUpdateWithoutTenantInput>
    create: XOR<ProductionOrderCreateWithoutTenantInput, ProductionOrderUncheckedCreateWithoutTenantInput>
  }

  export type ProductionOrderUpdateWithWhereUniqueWithoutTenantInput = {
    where: ProductionOrderWhereUniqueInput
    data: XOR<ProductionOrderUpdateWithoutTenantInput, ProductionOrderUncheckedUpdateWithoutTenantInput>
  }

  export type ProductionOrderUpdateManyWithWhereWithoutTenantInput = {
    where: ProductionOrderScalarWhereInput
    data: XOR<ProductionOrderUpdateManyMutationInput, ProductionOrderUncheckedUpdateManyWithoutTenantInput>
  }

  export type ProductionOrderScalarWhereInput = {
    AND?: ProductionOrderScalarWhereInput | ProductionOrderScalarWhereInput[]
    OR?: ProductionOrderScalarWhereInput[]
    NOT?: ProductionOrderScalarWhereInput | ProductionOrderScalarWhereInput[]
    id?: IntFilter<"ProductionOrder"> | number
    description?: StringFilter<"ProductionOrder"> | string
    width?: DecimalFilter<"ProductionOrder"> | Decimal | DecimalJsLike | number | string
    height?: DecimalFilter<"ProductionOrder"> | Decimal | DecimalJsLike | number | string
    lot?: StringFilter<"ProductionOrder"> | string
    quantityPerRoll?: IntFilter<"ProductionOrder"> | number
    diameterCore?: DecimalFilter<"ProductionOrder"> | Decimal | DecimalJsLike | number | string
    rollSize?: DecimalFilter<"ProductionOrder"> | Decimal | DecimalJsLike | number | string
    observation?: StringFilter<"ProductionOrder"> | string
    requesterId?: IntFilter<"ProductionOrder"> | number
    clientId?: StringFilter<"ProductionOrder"> | string
    productionResponsibleId?: IntFilter<"ProductionOrder"> | number
    status?: EnumStatusFilter<"ProductionOrder"> | $Enums.Status
    employeeId?: IntFilter<"ProductionOrder"> | number
    createdAt?: DateTimeFilter<"ProductionOrder"> | Date | string
    updatedAt?: DateTimeFilter<"ProductionOrder"> | Date | string
    tenantId?: StringFilter<"ProductionOrder"> | string
  }

  export type UserUpsertWithWhereUniqueWithoutTenantInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutTenantInput, UserUncheckedUpdateWithoutTenantInput>
    create: XOR<UserCreateWithoutTenantInput, UserUncheckedCreateWithoutTenantInput>
  }

  export type UserUpdateWithWhereUniqueWithoutTenantInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutTenantInput, UserUncheckedUpdateWithoutTenantInput>
  }

  export type UserUpdateManyWithWhereWithoutTenantInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutTenantInput>
  }

  export type UserScalarWhereInput = {
    AND?: UserScalarWhereInput | UserScalarWhereInput[]
    OR?: UserScalarWhereInput[]
    NOT?: UserScalarWhereInput | UserScalarWhereInput[]
    id?: IntFilter<"User"> | number
    name?: StringNullableFilter<"User"> | string | null
    email?: StringFilter<"User"> | string
    tenantId?: StringFilter<"User"> | string
  }

  export type ProfileCreateWithoutUserInput = {
    role: string
    type?: ProfileCreatetypeInput | $Enums.ProfileType[]
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProfileUncheckedCreateWithoutUserInput = {
    id?: number
    role: string
    type?: ProfileCreatetypeInput | $Enums.ProfileType[]
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProfileCreateOrConnectWithoutUserInput = {
    where: ProfileWhereUniqueInput
    create: XOR<ProfileCreateWithoutUserInput, ProfileUncheckedCreateWithoutUserInput>
  }

  export type TenantCreateWithoutUserInput = {
    id?: string
    name: string
    domain?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    clients?: ClientCreateNestedManyWithoutTenantInput
    productionOrders?: ProductionOrderCreateNestedManyWithoutTenantInput
  }

  export type TenantUncheckedCreateWithoutUserInput = {
    id?: string
    name: string
    domain?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    clients?: ClientUncheckedCreateNestedManyWithoutTenantInput
    productionOrders?: ProductionOrderUncheckedCreateNestedManyWithoutTenantInput
  }

  export type TenantCreateOrConnectWithoutUserInput = {
    where: TenantWhereUniqueInput
    create: XOR<TenantCreateWithoutUserInput, TenantUncheckedCreateWithoutUserInput>
  }

  export type ProfileUpsertWithoutUserInput = {
    update: XOR<ProfileUpdateWithoutUserInput, ProfileUncheckedUpdateWithoutUserInput>
    create: XOR<ProfileCreateWithoutUserInput, ProfileUncheckedCreateWithoutUserInput>
    where?: ProfileWhereInput
  }

  export type ProfileUpdateToOneWithWhereWithoutUserInput = {
    where?: ProfileWhereInput
    data: XOR<ProfileUpdateWithoutUserInput, ProfileUncheckedUpdateWithoutUserInput>
  }

  export type ProfileUpdateWithoutUserInput = {
    role?: StringFieldUpdateOperationsInput | string
    type?: ProfileUpdatetypeInput | $Enums.ProfileType[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProfileUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    role?: StringFieldUpdateOperationsInput | string
    type?: ProfileUpdatetypeInput | $Enums.ProfileType[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TenantUpsertWithoutUserInput = {
    update: XOR<TenantUpdateWithoutUserInput, TenantUncheckedUpdateWithoutUserInput>
    create: XOR<TenantCreateWithoutUserInput, TenantUncheckedCreateWithoutUserInput>
    where?: TenantWhereInput
  }

  export type TenantUpdateToOneWithWhereWithoutUserInput = {
    where?: TenantWhereInput
    data: XOR<TenantUpdateWithoutUserInput, TenantUncheckedUpdateWithoutUserInput>
  }

  export type TenantUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    domain?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    clients?: ClientUpdateManyWithoutTenantNestedInput
    productionOrders?: ProductionOrderUpdateManyWithoutTenantNestedInput
  }

  export type TenantUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    domain?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    clients?: ClientUncheckedUpdateManyWithoutTenantNestedInput
    productionOrders?: ProductionOrderUncheckedUpdateManyWithoutTenantNestedInput
  }

  export type UserCreateWithoutProfileInput = {
    name?: string | null
    email: string
    tenant?: TenantCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutProfileInput = {
    id?: number
    name?: string | null
    email: string
    tenantId?: string
  }

  export type UserCreateOrConnectWithoutProfileInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutProfileInput, UserUncheckedCreateWithoutProfileInput>
  }

  export type UserUpsertWithoutProfileInput = {
    update: XOR<UserUpdateWithoutProfileInput, UserUncheckedUpdateWithoutProfileInput>
    create: XOR<UserCreateWithoutProfileInput, UserUncheckedCreateWithoutProfileInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutProfileInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutProfileInput, UserUncheckedUpdateWithoutProfileInput>
  }

  export type UserUpdateWithoutProfileInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    tenant?: TenantUpdateOneRequiredWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutProfileInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
  }

  export type ProductionOrderCreateWithoutClientInput = {
    description: string
    width?: Decimal | DecimalJsLike | number | string
    height?: Decimal | DecimalJsLike | number | string
    lot: string
    quantityPerRoll?: number
    diameterCore?: Decimal | DecimalJsLike | number | string
    rollSize?: Decimal | DecimalJsLike | number | string
    observation: string
    requesterId: number
    productionResponsibleId: number
    status: $Enums.Status
    employeeId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    rawMaterial?: RawMaterialCreateNestedManyWithoutProductionOrdersInput
    package?: PackageCreateNestedManyWithoutProductionOrdersInput
    equipment?: EquipmentCreateNestedManyWithoutProductionOrdersInput
    tenant?: TenantCreateNestedOneWithoutProductionOrdersInput
  }

  export type ProductionOrderUncheckedCreateWithoutClientInput = {
    id?: number
    description: string
    width?: Decimal | DecimalJsLike | number | string
    height?: Decimal | DecimalJsLike | number | string
    lot: string
    quantityPerRoll?: number
    diameterCore?: Decimal | DecimalJsLike | number | string
    rollSize?: Decimal | DecimalJsLike | number | string
    observation: string
    requesterId: number
    productionResponsibleId: number
    status: $Enums.Status
    employeeId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    tenantId?: string
    rawMaterial?: RawMaterialUncheckedCreateNestedManyWithoutProductionOrdersInput
    package?: PackageUncheckedCreateNestedManyWithoutProductionOrdersInput
    equipment?: EquipmentUncheckedCreateNestedManyWithoutProductionOrdersInput
  }

  export type ProductionOrderCreateOrConnectWithoutClientInput = {
    where: ProductionOrderWhereUniqueInput
    create: XOR<ProductionOrderCreateWithoutClientInput, ProductionOrderUncheckedCreateWithoutClientInput>
  }

  export type ProductionOrderCreateManyClientInputEnvelope = {
    data: ProductionOrderCreateManyClientInput | ProductionOrderCreateManyClientInput[]
    skipDuplicates?: boolean
  }

  export type TenantCreateWithoutClientsInput = {
    id?: string
    name: string
    domain?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    productionOrders?: ProductionOrderCreateNestedManyWithoutTenantInput
    User?: UserCreateNestedManyWithoutTenantInput
  }

  export type TenantUncheckedCreateWithoutClientsInput = {
    id?: string
    name: string
    domain?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    productionOrders?: ProductionOrderUncheckedCreateNestedManyWithoutTenantInput
    User?: UserUncheckedCreateNestedManyWithoutTenantInput
  }

  export type TenantCreateOrConnectWithoutClientsInput = {
    where: TenantWhereUniqueInput
    create: XOR<TenantCreateWithoutClientsInput, TenantUncheckedCreateWithoutClientsInput>
  }

  export type ProductionOrderUpsertWithWhereUniqueWithoutClientInput = {
    where: ProductionOrderWhereUniqueInput
    update: XOR<ProductionOrderUpdateWithoutClientInput, ProductionOrderUncheckedUpdateWithoutClientInput>
    create: XOR<ProductionOrderCreateWithoutClientInput, ProductionOrderUncheckedCreateWithoutClientInput>
  }

  export type ProductionOrderUpdateWithWhereUniqueWithoutClientInput = {
    where: ProductionOrderWhereUniqueInput
    data: XOR<ProductionOrderUpdateWithoutClientInput, ProductionOrderUncheckedUpdateWithoutClientInput>
  }

  export type ProductionOrderUpdateManyWithWhereWithoutClientInput = {
    where: ProductionOrderScalarWhereInput
    data: XOR<ProductionOrderUpdateManyMutationInput, ProductionOrderUncheckedUpdateManyWithoutClientInput>
  }

  export type TenantUpsertWithoutClientsInput = {
    update: XOR<TenantUpdateWithoutClientsInput, TenantUncheckedUpdateWithoutClientsInput>
    create: XOR<TenantCreateWithoutClientsInput, TenantUncheckedCreateWithoutClientsInput>
    where?: TenantWhereInput
  }

  export type TenantUpdateToOneWithWhereWithoutClientsInput = {
    where?: TenantWhereInput
    data: XOR<TenantUpdateWithoutClientsInput, TenantUncheckedUpdateWithoutClientsInput>
  }

  export type TenantUpdateWithoutClientsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    domain?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    productionOrders?: ProductionOrderUpdateManyWithoutTenantNestedInput
    User?: UserUpdateManyWithoutTenantNestedInput
  }

  export type TenantUncheckedUpdateWithoutClientsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    domain?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    productionOrders?: ProductionOrderUncheckedUpdateManyWithoutTenantNestedInput
    User?: UserUncheckedUpdateManyWithoutTenantNestedInput
  }

  export type RawMaterialTypeCreateWithoutRawMaterialInput = {
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RawMaterialTypeUncheckedCreateWithoutRawMaterialInput = {
    id?: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RawMaterialTypeCreateOrConnectWithoutRawMaterialInput = {
    where: RawMaterialTypeWhereUniqueInput
    create: XOR<RawMaterialTypeCreateWithoutRawMaterialInput, RawMaterialTypeUncheckedCreateWithoutRawMaterialInput>
  }

  export type ProductionOrderCreateWithoutRawMaterialInput = {
    description: string
    width?: Decimal | DecimalJsLike | number | string
    height?: Decimal | DecimalJsLike | number | string
    lot: string
    quantityPerRoll?: number
    diameterCore?: Decimal | DecimalJsLike | number | string
    rollSize?: Decimal | DecimalJsLike | number | string
    observation: string
    requesterId: number
    productionResponsibleId: number
    status: $Enums.Status
    employeeId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    client: ClientCreateNestedOneWithoutProductionOrdersInput
    package?: PackageCreateNestedManyWithoutProductionOrdersInput
    equipment?: EquipmentCreateNestedManyWithoutProductionOrdersInput
    tenant?: TenantCreateNestedOneWithoutProductionOrdersInput
  }

  export type ProductionOrderUncheckedCreateWithoutRawMaterialInput = {
    id?: number
    description: string
    width?: Decimal | DecimalJsLike | number | string
    height?: Decimal | DecimalJsLike | number | string
    lot: string
    quantityPerRoll?: number
    diameterCore?: Decimal | DecimalJsLike | number | string
    rollSize?: Decimal | DecimalJsLike | number | string
    observation: string
    requesterId: number
    clientId: string
    productionResponsibleId: number
    status: $Enums.Status
    employeeId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    tenantId?: string
    package?: PackageUncheckedCreateNestedManyWithoutProductionOrdersInput
    equipment?: EquipmentUncheckedCreateNestedManyWithoutProductionOrdersInput
  }

  export type ProductionOrderCreateOrConnectWithoutRawMaterialInput = {
    where: ProductionOrderWhereUniqueInput
    create: XOR<ProductionOrderCreateWithoutRawMaterialInput, ProductionOrderUncheckedCreateWithoutRawMaterialInput>
  }

  export type RawMaterialTypeUpsertWithoutRawMaterialInput = {
    update: XOR<RawMaterialTypeUpdateWithoutRawMaterialInput, RawMaterialTypeUncheckedUpdateWithoutRawMaterialInput>
    create: XOR<RawMaterialTypeCreateWithoutRawMaterialInput, RawMaterialTypeUncheckedCreateWithoutRawMaterialInput>
    where?: RawMaterialTypeWhereInput
  }

  export type RawMaterialTypeUpdateToOneWithWhereWithoutRawMaterialInput = {
    where?: RawMaterialTypeWhereInput
    data: XOR<RawMaterialTypeUpdateWithoutRawMaterialInput, RawMaterialTypeUncheckedUpdateWithoutRawMaterialInput>
  }

  export type RawMaterialTypeUpdateWithoutRawMaterialInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RawMaterialTypeUncheckedUpdateWithoutRawMaterialInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductionOrderUpsertWithWhereUniqueWithoutRawMaterialInput = {
    where: ProductionOrderWhereUniqueInput
    update: XOR<ProductionOrderUpdateWithoutRawMaterialInput, ProductionOrderUncheckedUpdateWithoutRawMaterialInput>
    create: XOR<ProductionOrderCreateWithoutRawMaterialInput, ProductionOrderUncheckedCreateWithoutRawMaterialInput>
  }

  export type ProductionOrderUpdateWithWhereUniqueWithoutRawMaterialInput = {
    where: ProductionOrderWhereUniqueInput
    data: XOR<ProductionOrderUpdateWithoutRawMaterialInput, ProductionOrderUncheckedUpdateWithoutRawMaterialInput>
  }

  export type ProductionOrderUpdateManyWithWhereWithoutRawMaterialInput = {
    where: ProductionOrderScalarWhereInput
    data: XOR<ProductionOrderUpdateManyMutationInput, ProductionOrderUncheckedUpdateManyWithoutRawMaterialInput>
  }

  export type RawMaterialCreateWithoutMaterialTypeInput = {
    name: string
    lot: string
    unit: string
    quantity?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    productionOrders?: ProductionOrderCreateNestedManyWithoutRawMaterialInput
  }

  export type RawMaterialUncheckedCreateWithoutMaterialTypeInput = {
    id?: number
    name: string
    lot: string
    unit: string
    quantity?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    productionOrders?: ProductionOrderUncheckedCreateNestedManyWithoutRawMaterialInput
  }

  export type RawMaterialCreateOrConnectWithoutMaterialTypeInput = {
    where: RawMaterialWhereUniqueInput
    create: XOR<RawMaterialCreateWithoutMaterialTypeInput, RawMaterialUncheckedCreateWithoutMaterialTypeInput>
  }

  export type RawMaterialCreateManyMaterialTypeInputEnvelope = {
    data: RawMaterialCreateManyMaterialTypeInput | RawMaterialCreateManyMaterialTypeInput[]
    skipDuplicates?: boolean
  }

  export type RawMaterialUpsertWithWhereUniqueWithoutMaterialTypeInput = {
    where: RawMaterialWhereUniqueInput
    update: XOR<RawMaterialUpdateWithoutMaterialTypeInput, RawMaterialUncheckedUpdateWithoutMaterialTypeInput>
    create: XOR<RawMaterialCreateWithoutMaterialTypeInput, RawMaterialUncheckedCreateWithoutMaterialTypeInput>
  }

  export type RawMaterialUpdateWithWhereUniqueWithoutMaterialTypeInput = {
    where: RawMaterialWhereUniqueInput
    data: XOR<RawMaterialUpdateWithoutMaterialTypeInput, RawMaterialUncheckedUpdateWithoutMaterialTypeInput>
  }

  export type RawMaterialUpdateManyWithWhereWithoutMaterialTypeInput = {
    where: RawMaterialScalarWhereInput
    data: XOR<RawMaterialUpdateManyMutationInput, RawMaterialUncheckedUpdateManyWithoutMaterialTypeInput>
  }

  export type RawMaterialScalarWhereInput = {
    AND?: RawMaterialScalarWhereInput | RawMaterialScalarWhereInput[]
    OR?: RawMaterialScalarWhereInput[]
    NOT?: RawMaterialScalarWhereInput | RawMaterialScalarWhereInput[]
    id?: IntFilter<"RawMaterial"> | number
    name?: StringFilter<"RawMaterial"> | string
    lot?: StringFilter<"RawMaterial"> | string
    unit?: StringFilter<"RawMaterial"> | string
    quantity?: IntFilter<"RawMaterial"> | number
    rawMaterialTypeId?: IntFilter<"RawMaterial"> | number
    createdAt?: DateTimeFilter<"RawMaterial"> | Date | string
    updatedAt?: DateTimeFilter<"RawMaterial"> | Date | string
  }

  export type ProductionOrderCreateWithoutPackageInput = {
    description: string
    width?: Decimal | DecimalJsLike | number | string
    height?: Decimal | DecimalJsLike | number | string
    lot: string
    quantityPerRoll?: number
    diameterCore?: Decimal | DecimalJsLike | number | string
    rollSize?: Decimal | DecimalJsLike | number | string
    observation: string
    requesterId: number
    productionResponsibleId: number
    status: $Enums.Status
    employeeId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    client: ClientCreateNestedOneWithoutProductionOrdersInput
    rawMaterial?: RawMaterialCreateNestedManyWithoutProductionOrdersInput
    equipment?: EquipmentCreateNestedManyWithoutProductionOrdersInput
    tenant?: TenantCreateNestedOneWithoutProductionOrdersInput
  }

  export type ProductionOrderUncheckedCreateWithoutPackageInput = {
    id?: number
    description: string
    width?: Decimal | DecimalJsLike | number | string
    height?: Decimal | DecimalJsLike | number | string
    lot: string
    quantityPerRoll?: number
    diameterCore?: Decimal | DecimalJsLike | number | string
    rollSize?: Decimal | DecimalJsLike | number | string
    observation: string
    requesterId: number
    clientId: string
    productionResponsibleId: number
    status: $Enums.Status
    employeeId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    tenantId?: string
    rawMaterial?: RawMaterialUncheckedCreateNestedManyWithoutProductionOrdersInput
    equipment?: EquipmentUncheckedCreateNestedManyWithoutProductionOrdersInput
  }

  export type ProductionOrderCreateOrConnectWithoutPackageInput = {
    where: ProductionOrderWhereUniqueInput
    create: XOR<ProductionOrderCreateWithoutPackageInput, ProductionOrderUncheckedCreateWithoutPackageInput>
  }

  export type ProductionOrderUpsertWithWhereUniqueWithoutPackageInput = {
    where: ProductionOrderWhereUniqueInput
    update: XOR<ProductionOrderUpdateWithoutPackageInput, ProductionOrderUncheckedUpdateWithoutPackageInput>
    create: XOR<ProductionOrderCreateWithoutPackageInput, ProductionOrderUncheckedCreateWithoutPackageInput>
  }

  export type ProductionOrderUpdateWithWhereUniqueWithoutPackageInput = {
    where: ProductionOrderWhereUniqueInput
    data: XOR<ProductionOrderUpdateWithoutPackageInput, ProductionOrderUncheckedUpdateWithoutPackageInput>
  }

  export type ProductionOrderUpdateManyWithWhereWithoutPackageInput = {
    where: ProductionOrderScalarWhereInput
    data: XOR<ProductionOrderUpdateManyMutationInput, ProductionOrderUncheckedUpdateManyWithoutPackageInput>
  }

  export type ProductionOrderCreateWithoutEquipmentInput = {
    description: string
    width?: Decimal | DecimalJsLike | number | string
    height?: Decimal | DecimalJsLike | number | string
    lot: string
    quantityPerRoll?: number
    diameterCore?: Decimal | DecimalJsLike | number | string
    rollSize?: Decimal | DecimalJsLike | number | string
    observation: string
    requesterId: number
    productionResponsibleId: number
    status: $Enums.Status
    employeeId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    client: ClientCreateNestedOneWithoutProductionOrdersInput
    rawMaterial?: RawMaterialCreateNestedManyWithoutProductionOrdersInput
    package?: PackageCreateNestedManyWithoutProductionOrdersInput
    tenant?: TenantCreateNestedOneWithoutProductionOrdersInput
  }

  export type ProductionOrderUncheckedCreateWithoutEquipmentInput = {
    id?: number
    description: string
    width?: Decimal | DecimalJsLike | number | string
    height?: Decimal | DecimalJsLike | number | string
    lot: string
    quantityPerRoll?: number
    diameterCore?: Decimal | DecimalJsLike | number | string
    rollSize?: Decimal | DecimalJsLike | number | string
    observation: string
    requesterId: number
    clientId: string
    productionResponsibleId: number
    status: $Enums.Status
    employeeId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    tenantId?: string
    rawMaterial?: RawMaterialUncheckedCreateNestedManyWithoutProductionOrdersInput
    package?: PackageUncheckedCreateNestedManyWithoutProductionOrdersInput
  }

  export type ProductionOrderCreateOrConnectWithoutEquipmentInput = {
    where: ProductionOrderWhereUniqueInput
    create: XOR<ProductionOrderCreateWithoutEquipmentInput, ProductionOrderUncheckedCreateWithoutEquipmentInput>
  }

  export type ProductionOrderUpsertWithWhereUniqueWithoutEquipmentInput = {
    where: ProductionOrderWhereUniqueInput
    update: XOR<ProductionOrderUpdateWithoutEquipmentInput, ProductionOrderUncheckedUpdateWithoutEquipmentInput>
    create: XOR<ProductionOrderCreateWithoutEquipmentInput, ProductionOrderUncheckedCreateWithoutEquipmentInput>
  }

  export type ProductionOrderUpdateWithWhereUniqueWithoutEquipmentInput = {
    where: ProductionOrderWhereUniqueInput
    data: XOR<ProductionOrderUpdateWithoutEquipmentInput, ProductionOrderUncheckedUpdateWithoutEquipmentInput>
  }

  export type ProductionOrderUpdateManyWithWhereWithoutEquipmentInput = {
    where: ProductionOrderScalarWhereInput
    data: XOR<ProductionOrderUpdateManyMutationInput, ProductionOrderUncheckedUpdateManyWithoutEquipmentInput>
  }

  export type ClientCreateWithoutProductionOrdersInput = {
    id?: string
    name: string
    identification: string
    type: $Enums.ClientType
    createdAt?: Date | string
    updatedAt?: Date | string
    tenant?: TenantCreateNestedOneWithoutClientsInput
  }

  export type ClientUncheckedCreateWithoutProductionOrdersInput = {
    id?: string
    name: string
    identification: string
    type: $Enums.ClientType
    createdAt?: Date | string
    updatedAt?: Date | string
    tenantId?: string
  }

  export type ClientCreateOrConnectWithoutProductionOrdersInput = {
    where: ClientWhereUniqueInput
    create: XOR<ClientCreateWithoutProductionOrdersInput, ClientUncheckedCreateWithoutProductionOrdersInput>
  }

  export type RawMaterialCreateWithoutProductionOrdersInput = {
    name: string
    lot: string
    unit: string
    quantity?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    materialType: RawMaterialTypeCreateNestedOneWithoutRawMaterialInput
  }

  export type RawMaterialUncheckedCreateWithoutProductionOrdersInput = {
    id?: number
    name: string
    lot: string
    unit: string
    quantity?: number
    rawMaterialTypeId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RawMaterialCreateOrConnectWithoutProductionOrdersInput = {
    where: RawMaterialWhereUniqueInput
    create: XOR<RawMaterialCreateWithoutProductionOrdersInput, RawMaterialUncheckedCreateWithoutProductionOrdersInput>
  }

  export type PackageCreateWithoutProductionOrdersInput = {
    name: string
    lot: string
    unit: string
    quantity?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PackageUncheckedCreateWithoutProductionOrdersInput = {
    id?: number
    name: string
    lot: string
    unit: string
    quantity?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PackageCreateOrConnectWithoutProductionOrdersInput = {
    where: PackageWhereUniqueInput
    create: XOR<PackageCreateWithoutProductionOrdersInput, PackageUncheckedCreateWithoutProductionOrdersInput>
  }

  export type EquipmentCreateWithoutProductionOrdersInput = {
    name: string
    brand: string
    model: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EquipmentUncheckedCreateWithoutProductionOrdersInput = {
    id?: number
    name: string
    brand: string
    model: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EquipmentCreateOrConnectWithoutProductionOrdersInput = {
    where: EquipmentWhereUniqueInput
    create: XOR<EquipmentCreateWithoutProductionOrdersInput, EquipmentUncheckedCreateWithoutProductionOrdersInput>
  }

  export type TenantCreateWithoutProductionOrdersInput = {
    id?: string
    name: string
    domain?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    clients?: ClientCreateNestedManyWithoutTenantInput
    User?: UserCreateNestedManyWithoutTenantInput
  }

  export type TenantUncheckedCreateWithoutProductionOrdersInput = {
    id?: string
    name: string
    domain?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    clients?: ClientUncheckedCreateNestedManyWithoutTenantInput
    User?: UserUncheckedCreateNestedManyWithoutTenantInput
  }

  export type TenantCreateOrConnectWithoutProductionOrdersInput = {
    where: TenantWhereUniqueInput
    create: XOR<TenantCreateWithoutProductionOrdersInput, TenantUncheckedCreateWithoutProductionOrdersInput>
  }

  export type ClientUpsertWithoutProductionOrdersInput = {
    update: XOR<ClientUpdateWithoutProductionOrdersInput, ClientUncheckedUpdateWithoutProductionOrdersInput>
    create: XOR<ClientCreateWithoutProductionOrdersInput, ClientUncheckedCreateWithoutProductionOrdersInput>
    where?: ClientWhereInput
  }

  export type ClientUpdateToOneWithWhereWithoutProductionOrdersInput = {
    where?: ClientWhereInput
    data: XOR<ClientUpdateWithoutProductionOrdersInput, ClientUncheckedUpdateWithoutProductionOrdersInput>
  }

  export type ClientUpdateWithoutProductionOrdersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    identification?: StringFieldUpdateOperationsInput | string
    type?: EnumClientTypeFieldUpdateOperationsInput | $Enums.ClientType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tenant?: TenantUpdateOneRequiredWithoutClientsNestedInput
  }

  export type ClientUncheckedUpdateWithoutProductionOrdersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    identification?: StringFieldUpdateOperationsInput | string
    type?: EnumClientTypeFieldUpdateOperationsInput | $Enums.ClientType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tenantId?: StringFieldUpdateOperationsInput | string
  }

  export type RawMaterialUpsertWithWhereUniqueWithoutProductionOrdersInput = {
    where: RawMaterialWhereUniqueInput
    update: XOR<RawMaterialUpdateWithoutProductionOrdersInput, RawMaterialUncheckedUpdateWithoutProductionOrdersInput>
    create: XOR<RawMaterialCreateWithoutProductionOrdersInput, RawMaterialUncheckedCreateWithoutProductionOrdersInput>
  }

  export type RawMaterialUpdateWithWhereUniqueWithoutProductionOrdersInput = {
    where: RawMaterialWhereUniqueInput
    data: XOR<RawMaterialUpdateWithoutProductionOrdersInput, RawMaterialUncheckedUpdateWithoutProductionOrdersInput>
  }

  export type RawMaterialUpdateManyWithWhereWithoutProductionOrdersInput = {
    where: RawMaterialScalarWhereInput
    data: XOR<RawMaterialUpdateManyMutationInput, RawMaterialUncheckedUpdateManyWithoutProductionOrdersInput>
  }

  export type PackageUpsertWithWhereUniqueWithoutProductionOrdersInput = {
    where: PackageWhereUniqueInput
    update: XOR<PackageUpdateWithoutProductionOrdersInput, PackageUncheckedUpdateWithoutProductionOrdersInput>
    create: XOR<PackageCreateWithoutProductionOrdersInput, PackageUncheckedCreateWithoutProductionOrdersInput>
  }

  export type PackageUpdateWithWhereUniqueWithoutProductionOrdersInput = {
    where: PackageWhereUniqueInput
    data: XOR<PackageUpdateWithoutProductionOrdersInput, PackageUncheckedUpdateWithoutProductionOrdersInput>
  }

  export type PackageUpdateManyWithWhereWithoutProductionOrdersInput = {
    where: PackageScalarWhereInput
    data: XOR<PackageUpdateManyMutationInput, PackageUncheckedUpdateManyWithoutProductionOrdersInput>
  }

  export type PackageScalarWhereInput = {
    AND?: PackageScalarWhereInput | PackageScalarWhereInput[]
    OR?: PackageScalarWhereInput[]
    NOT?: PackageScalarWhereInput | PackageScalarWhereInput[]
    id?: IntFilter<"Package"> | number
    name?: StringFilter<"Package"> | string
    lot?: StringFilter<"Package"> | string
    unit?: StringFilter<"Package"> | string
    quantity?: IntFilter<"Package"> | number
    createdAt?: DateTimeFilter<"Package"> | Date | string
    updatedAt?: DateTimeFilter<"Package"> | Date | string
  }

  export type EquipmentUpsertWithWhereUniqueWithoutProductionOrdersInput = {
    where: EquipmentWhereUniqueInput
    update: XOR<EquipmentUpdateWithoutProductionOrdersInput, EquipmentUncheckedUpdateWithoutProductionOrdersInput>
    create: XOR<EquipmentCreateWithoutProductionOrdersInput, EquipmentUncheckedCreateWithoutProductionOrdersInput>
  }

  export type EquipmentUpdateWithWhereUniqueWithoutProductionOrdersInput = {
    where: EquipmentWhereUniqueInput
    data: XOR<EquipmentUpdateWithoutProductionOrdersInput, EquipmentUncheckedUpdateWithoutProductionOrdersInput>
  }

  export type EquipmentUpdateManyWithWhereWithoutProductionOrdersInput = {
    where: EquipmentScalarWhereInput
    data: XOR<EquipmentUpdateManyMutationInput, EquipmentUncheckedUpdateManyWithoutProductionOrdersInput>
  }

  export type EquipmentScalarWhereInput = {
    AND?: EquipmentScalarWhereInput | EquipmentScalarWhereInput[]
    OR?: EquipmentScalarWhereInput[]
    NOT?: EquipmentScalarWhereInput | EquipmentScalarWhereInput[]
    id?: IntFilter<"Equipment"> | number
    name?: StringFilter<"Equipment"> | string
    brand?: StringFilter<"Equipment"> | string
    model?: StringFilter<"Equipment"> | string
    createdAt?: DateTimeFilter<"Equipment"> | Date | string
    updatedAt?: DateTimeFilter<"Equipment"> | Date | string
  }

  export type TenantUpsertWithoutProductionOrdersInput = {
    update: XOR<TenantUpdateWithoutProductionOrdersInput, TenantUncheckedUpdateWithoutProductionOrdersInput>
    create: XOR<TenantCreateWithoutProductionOrdersInput, TenantUncheckedCreateWithoutProductionOrdersInput>
    where?: TenantWhereInput
  }

  export type TenantUpdateToOneWithWhereWithoutProductionOrdersInput = {
    where?: TenantWhereInput
    data: XOR<TenantUpdateWithoutProductionOrdersInput, TenantUncheckedUpdateWithoutProductionOrdersInput>
  }

  export type TenantUpdateWithoutProductionOrdersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    domain?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    clients?: ClientUpdateManyWithoutTenantNestedInput
    User?: UserUpdateManyWithoutTenantNestedInput
  }

  export type TenantUncheckedUpdateWithoutProductionOrdersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    domain?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    clients?: ClientUncheckedUpdateManyWithoutTenantNestedInput
    User?: UserUncheckedUpdateManyWithoutTenantNestedInput
  }

  export type ClientCreateManyTenantInput = {
    id?: string
    name: string
    identification: string
    type: $Enums.ClientType
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProductionOrderCreateManyTenantInput = {
    id?: number
    description: string
    width?: Decimal | DecimalJsLike | number | string
    height?: Decimal | DecimalJsLike | number | string
    lot: string
    quantityPerRoll?: number
    diameterCore?: Decimal | DecimalJsLike | number | string
    rollSize?: Decimal | DecimalJsLike | number | string
    observation: string
    requesterId: number
    clientId: string
    productionResponsibleId: number
    status: $Enums.Status
    employeeId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserCreateManyTenantInput = {
    id?: number
    name?: string | null
    email: string
  }

  export type ClientUpdateWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    identification?: StringFieldUpdateOperationsInput | string
    type?: EnumClientTypeFieldUpdateOperationsInput | $Enums.ClientType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    productionOrders?: ProductionOrderUpdateManyWithoutClientNestedInput
  }

  export type ClientUncheckedUpdateWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    identification?: StringFieldUpdateOperationsInput | string
    type?: EnumClientTypeFieldUpdateOperationsInput | $Enums.ClientType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    productionOrders?: ProductionOrderUncheckedUpdateManyWithoutClientNestedInput
  }

  export type ClientUncheckedUpdateManyWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    identification?: StringFieldUpdateOperationsInput | string
    type?: EnumClientTypeFieldUpdateOperationsInput | $Enums.ClientType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductionOrderUpdateWithoutTenantInput = {
    description?: StringFieldUpdateOperationsInput | string
    width?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    height?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    lot?: StringFieldUpdateOperationsInput | string
    quantityPerRoll?: IntFieldUpdateOperationsInput | number
    diameterCore?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    rollSize?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    observation?: StringFieldUpdateOperationsInput | string
    requesterId?: IntFieldUpdateOperationsInput | number
    productionResponsibleId?: IntFieldUpdateOperationsInput | number
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    employeeId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    client?: ClientUpdateOneRequiredWithoutProductionOrdersNestedInput
    rawMaterial?: RawMaterialUpdateManyWithoutProductionOrdersNestedInput
    package?: PackageUpdateManyWithoutProductionOrdersNestedInput
    equipment?: EquipmentUpdateManyWithoutProductionOrdersNestedInput
  }

  export type ProductionOrderUncheckedUpdateWithoutTenantInput = {
    id?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    width?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    height?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    lot?: StringFieldUpdateOperationsInput | string
    quantityPerRoll?: IntFieldUpdateOperationsInput | number
    diameterCore?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    rollSize?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    observation?: StringFieldUpdateOperationsInput | string
    requesterId?: IntFieldUpdateOperationsInput | number
    clientId?: StringFieldUpdateOperationsInput | string
    productionResponsibleId?: IntFieldUpdateOperationsInput | number
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    employeeId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rawMaterial?: RawMaterialUncheckedUpdateManyWithoutProductionOrdersNestedInput
    package?: PackageUncheckedUpdateManyWithoutProductionOrdersNestedInput
    equipment?: EquipmentUncheckedUpdateManyWithoutProductionOrdersNestedInput
  }

  export type ProductionOrderUncheckedUpdateManyWithoutTenantInput = {
    id?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    width?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    height?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    lot?: StringFieldUpdateOperationsInput | string
    quantityPerRoll?: IntFieldUpdateOperationsInput | number
    diameterCore?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    rollSize?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    observation?: StringFieldUpdateOperationsInput | string
    requesterId?: IntFieldUpdateOperationsInput | number
    clientId?: StringFieldUpdateOperationsInput | string
    productionResponsibleId?: IntFieldUpdateOperationsInput | number
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    employeeId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUpdateWithoutTenantInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    profile?: ProfileUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutTenantInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    profile?: ProfileUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateManyWithoutTenantInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
  }

  export type ProductionOrderCreateManyClientInput = {
    id?: number
    description: string
    width?: Decimal | DecimalJsLike | number | string
    height?: Decimal | DecimalJsLike | number | string
    lot: string
    quantityPerRoll?: number
    diameterCore?: Decimal | DecimalJsLike | number | string
    rollSize?: Decimal | DecimalJsLike | number | string
    observation: string
    requesterId: number
    productionResponsibleId: number
    status: $Enums.Status
    employeeId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    tenantId?: string
  }

  export type ProductionOrderUpdateWithoutClientInput = {
    description?: StringFieldUpdateOperationsInput | string
    width?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    height?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    lot?: StringFieldUpdateOperationsInput | string
    quantityPerRoll?: IntFieldUpdateOperationsInput | number
    diameterCore?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    rollSize?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    observation?: StringFieldUpdateOperationsInput | string
    requesterId?: IntFieldUpdateOperationsInput | number
    productionResponsibleId?: IntFieldUpdateOperationsInput | number
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    employeeId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rawMaterial?: RawMaterialUpdateManyWithoutProductionOrdersNestedInput
    package?: PackageUpdateManyWithoutProductionOrdersNestedInput
    equipment?: EquipmentUpdateManyWithoutProductionOrdersNestedInput
    tenant?: TenantUpdateOneRequiredWithoutProductionOrdersNestedInput
  }

  export type ProductionOrderUncheckedUpdateWithoutClientInput = {
    id?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    width?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    height?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    lot?: StringFieldUpdateOperationsInput | string
    quantityPerRoll?: IntFieldUpdateOperationsInput | number
    diameterCore?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    rollSize?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    observation?: StringFieldUpdateOperationsInput | string
    requesterId?: IntFieldUpdateOperationsInput | number
    productionResponsibleId?: IntFieldUpdateOperationsInput | number
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    employeeId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tenantId?: StringFieldUpdateOperationsInput | string
    rawMaterial?: RawMaterialUncheckedUpdateManyWithoutProductionOrdersNestedInput
    package?: PackageUncheckedUpdateManyWithoutProductionOrdersNestedInput
    equipment?: EquipmentUncheckedUpdateManyWithoutProductionOrdersNestedInput
  }

  export type ProductionOrderUncheckedUpdateManyWithoutClientInput = {
    id?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    width?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    height?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    lot?: StringFieldUpdateOperationsInput | string
    quantityPerRoll?: IntFieldUpdateOperationsInput | number
    diameterCore?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    rollSize?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    observation?: StringFieldUpdateOperationsInput | string
    requesterId?: IntFieldUpdateOperationsInput | number
    productionResponsibleId?: IntFieldUpdateOperationsInput | number
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    employeeId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tenantId?: StringFieldUpdateOperationsInput | string
  }

  export type ProductionOrderUpdateWithoutRawMaterialInput = {
    description?: StringFieldUpdateOperationsInput | string
    width?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    height?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    lot?: StringFieldUpdateOperationsInput | string
    quantityPerRoll?: IntFieldUpdateOperationsInput | number
    diameterCore?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    rollSize?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    observation?: StringFieldUpdateOperationsInput | string
    requesterId?: IntFieldUpdateOperationsInput | number
    productionResponsibleId?: IntFieldUpdateOperationsInput | number
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    employeeId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    client?: ClientUpdateOneRequiredWithoutProductionOrdersNestedInput
    package?: PackageUpdateManyWithoutProductionOrdersNestedInput
    equipment?: EquipmentUpdateManyWithoutProductionOrdersNestedInput
    tenant?: TenantUpdateOneRequiredWithoutProductionOrdersNestedInput
  }

  export type ProductionOrderUncheckedUpdateWithoutRawMaterialInput = {
    id?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    width?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    height?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    lot?: StringFieldUpdateOperationsInput | string
    quantityPerRoll?: IntFieldUpdateOperationsInput | number
    diameterCore?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    rollSize?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    observation?: StringFieldUpdateOperationsInput | string
    requesterId?: IntFieldUpdateOperationsInput | number
    clientId?: StringFieldUpdateOperationsInput | string
    productionResponsibleId?: IntFieldUpdateOperationsInput | number
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    employeeId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tenantId?: StringFieldUpdateOperationsInput | string
    package?: PackageUncheckedUpdateManyWithoutProductionOrdersNestedInput
    equipment?: EquipmentUncheckedUpdateManyWithoutProductionOrdersNestedInput
  }

  export type ProductionOrderUncheckedUpdateManyWithoutRawMaterialInput = {
    id?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    width?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    height?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    lot?: StringFieldUpdateOperationsInput | string
    quantityPerRoll?: IntFieldUpdateOperationsInput | number
    diameterCore?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    rollSize?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    observation?: StringFieldUpdateOperationsInput | string
    requesterId?: IntFieldUpdateOperationsInput | number
    clientId?: StringFieldUpdateOperationsInput | string
    productionResponsibleId?: IntFieldUpdateOperationsInput | number
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    employeeId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tenantId?: StringFieldUpdateOperationsInput | string
  }

  export type RawMaterialCreateManyMaterialTypeInput = {
    id?: number
    name: string
    lot: string
    unit: string
    quantity?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RawMaterialUpdateWithoutMaterialTypeInput = {
    name?: StringFieldUpdateOperationsInput | string
    lot?: StringFieldUpdateOperationsInput | string
    unit?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    productionOrders?: ProductionOrderUpdateManyWithoutRawMaterialNestedInput
  }

  export type RawMaterialUncheckedUpdateWithoutMaterialTypeInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    lot?: StringFieldUpdateOperationsInput | string
    unit?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    productionOrders?: ProductionOrderUncheckedUpdateManyWithoutRawMaterialNestedInput
  }

  export type RawMaterialUncheckedUpdateManyWithoutMaterialTypeInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    lot?: StringFieldUpdateOperationsInput | string
    unit?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductionOrderUpdateWithoutPackageInput = {
    description?: StringFieldUpdateOperationsInput | string
    width?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    height?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    lot?: StringFieldUpdateOperationsInput | string
    quantityPerRoll?: IntFieldUpdateOperationsInput | number
    diameterCore?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    rollSize?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    observation?: StringFieldUpdateOperationsInput | string
    requesterId?: IntFieldUpdateOperationsInput | number
    productionResponsibleId?: IntFieldUpdateOperationsInput | number
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    employeeId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    client?: ClientUpdateOneRequiredWithoutProductionOrdersNestedInput
    rawMaterial?: RawMaterialUpdateManyWithoutProductionOrdersNestedInput
    equipment?: EquipmentUpdateManyWithoutProductionOrdersNestedInput
    tenant?: TenantUpdateOneRequiredWithoutProductionOrdersNestedInput
  }

  export type ProductionOrderUncheckedUpdateWithoutPackageInput = {
    id?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    width?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    height?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    lot?: StringFieldUpdateOperationsInput | string
    quantityPerRoll?: IntFieldUpdateOperationsInput | number
    diameterCore?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    rollSize?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    observation?: StringFieldUpdateOperationsInput | string
    requesterId?: IntFieldUpdateOperationsInput | number
    clientId?: StringFieldUpdateOperationsInput | string
    productionResponsibleId?: IntFieldUpdateOperationsInput | number
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    employeeId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tenantId?: StringFieldUpdateOperationsInput | string
    rawMaterial?: RawMaterialUncheckedUpdateManyWithoutProductionOrdersNestedInput
    equipment?: EquipmentUncheckedUpdateManyWithoutProductionOrdersNestedInput
  }

  export type ProductionOrderUncheckedUpdateManyWithoutPackageInput = {
    id?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    width?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    height?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    lot?: StringFieldUpdateOperationsInput | string
    quantityPerRoll?: IntFieldUpdateOperationsInput | number
    diameterCore?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    rollSize?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    observation?: StringFieldUpdateOperationsInput | string
    requesterId?: IntFieldUpdateOperationsInput | number
    clientId?: StringFieldUpdateOperationsInput | string
    productionResponsibleId?: IntFieldUpdateOperationsInput | number
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    employeeId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tenantId?: StringFieldUpdateOperationsInput | string
  }

  export type ProductionOrderUpdateWithoutEquipmentInput = {
    description?: StringFieldUpdateOperationsInput | string
    width?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    height?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    lot?: StringFieldUpdateOperationsInput | string
    quantityPerRoll?: IntFieldUpdateOperationsInput | number
    diameterCore?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    rollSize?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    observation?: StringFieldUpdateOperationsInput | string
    requesterId?: IntFieldUpdateOperationsInput | number
    productionResponsibleId?: IntFieldUpdateOperationsInput | number
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    employeeId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    client?: ClientUpdateOneRequiredWithoutProductionOrdersNestedInput
    rawMaterial?: RawMaterialUpdateManyWithoutProductionOrdersNestedInput
    package?: PackageUpdateManyWithoutProductionOrdersNestedInput
    tenant?: TenantUpdateOneRequiredWithoutProductionOrdersNestedInput
  }

  export type ProductionOrderUncheckedUpdateWithoutEquipmentInput = {
    id?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    width?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    height?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    lot?: StringFieldUpdateOperationsInput | string
    quantityPerRoll?: IntFieldUpdateOperationsInput | number
    diameterCore?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    rollSize?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    observation?: StringFieldUpdateOperationsInput | string
    requesterId?: IntFieldUpdateOperationsInput | number
    clientId?: StringFieldUpdateOperationsInput | string
    productionResponsibleId?: IntFieldUpdateOperationsInput | number
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    employeeId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tenantId?: StringFieldUpdateOperationsInput | string
    rawMaterial?: RawMaterialUncheckedUpdateManyWithoutProductionOrdersNestedInput
    package?: PackageUncheckedUpdateManyWithoutProductionOrdersNestedInput
  }

  export type ProductionOrderUncheckedUpdateManyWithoutEquipmentInput = {
    id?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    width?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    height?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    lot?: StringFieldUpdateOperationsInput | string
    quantityPerRoll?: IntFieldUpdateOperationsInput | number
    diameterCore?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    rollSize?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    observation?: StringFieldUpdateOperationsInput | string
    requesterId?: IntFieldUpdateOperationsInput | number
    clientId?: StringFieldUpdateOperationsInput | string
    productionResponsibleId?: IntFieldUpdateOperationsInput | number
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    employeeId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tenantId?: StringFieldUpdateOperationsInput | string
  }

  export type RawMaterialUpdateWithoutProductionOrdersInput = {
    name?: StringFieldUpdateOperationsInput | string
    lot?: StringFieldUpdateOperationsInput | string
    unit?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    materialType?: RawMaterialTypeUpdateOneRequiredWithoutRawMaterialNestedInput
  }

  export type RawMaterialUncheckedUpdateWithoutProductionOrdersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    lot?: StringFieldUpdateOperationsInput | string
    unit?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    rawMaterialTypeId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RawMaterialUncheckedUpdateManyWithoutProductionOrdersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    lot?: StringFieldUpdateOperationsInput | string
    unit?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    rawMaterialTypeId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PackageUpdateWithoutProductionOrdersInput = {
    name?: StringFieldUpdateOperationsInput | string
    lot?: StringFieldUpdateOperationsInput | string
    unit?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PackageUncheckedUpdateWithoutProductionOrdersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    lot?: StringFieldUpdateOperationsInput | string
    unit?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PackageUncheckedUpdateManyWithoutProductionOrdersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    lot?: StringFieldUpdateOperationsInput | string
    unit?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EquipmentUpdateWithoutProductionOrdersInput = {
    name?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EquipmentUncheckedUpdateWithoutProductionOrdersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EquipmentUncheckedUpdateManyWithoutProductionOrdersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}