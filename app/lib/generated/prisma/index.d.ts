
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
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Resume
 * 
 */
export type Resume = $Result.DefaultSelection<Prisma.$ResumePayload>
/**
 * Model CoverLetter
 * 
 */
export type CoverLetter = $Result.DefaultSelection<Prisma.$CoverLetterPayload>
/**
 * Model MockInterview
 * 
 */
export type MockInterview = $Result.DefaultSelection<Prisma.$MockInterviewPayload>
/**
 * Model SkillGapAnalysis
 * 
 */
export type SkillGapAnalysis = $Result.DefaultSelection<Prisma.$SkillGapAnalysisPayload>
/**
 * Model IndustryInsight
 * 
 */
export type IndustryInsight = $Result.DefaultSelection<Prisma.$IndustryInsightPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
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
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.resume`: Exposes CRUD operations for the **Resume** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Resumes
    * const resumes = await prisma.resume.findMany()
    * ```
    */
  get resume(): Prisma.ResumeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.coverLetter`: Exposes CRUD operations for the **CoverLetter** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CoverLetters
    * const coverLetters = await prisma.coverLetter.findMany()
    * ```
    */
  get coverLetter(): Prisma.CoverLetterDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.mockInterview`: Exposes CRUD operations for the **MockInterview** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MockInterviews
    * const mockInterviews = await prisma.mockInterview.findMany()
    * ```
    */
  get mockInterview(): Prisma.MockInterviewDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.skillGapAnalysis`: Exposes CRUD operations for the **SkillGapAnalysis** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SkillGapAnalyses
    * const skillGapAnalyses = await prisma.skillGapAnalysis.findMany()
    * ```
    */
  get skillGapAnalysis(): Prisma.SkillGapAnalysisDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.industryInsight`: Exposes CRUD operations for the **IndustryInsight** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more IndustryInsights
    * const industryInsights = await prisma.industryInsight.findMany()
    * ```
    */
  get industryInsight(): Prisma.IndustryInsightDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.14.0
   * Query Engine version: 717184b7b35ea05dfa71a3236b7af656013e1e49
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
    User: 'User',
    Resume: 'Resume',
    CoverLetter: 'CoverLetter',
    MockInterview: 'MockInterview',
    SkillGapAnalysis: 'SkillGapAnalysis',
    IndustryInsight: 'IndustryInsight'
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
      modelProps: "user" | "resume" | "coverLetter" | "mockInterview" | "skillGapAnalysis" | "industryInsight"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
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
      Resume: {
        payload: Prisma.$ResumePayload<ExtArgs>
        fields: Prisma.ResumeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ResumeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResumePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ResumeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResumePayload>
          }
          findFirst: {
            args: Prisma.ResumeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResumePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ResumeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResumePayload>
          }
          findMany: {
            args: Prisma.ResumeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResumePayload>[]
          }
          create: {
            args: Prisma.ResumeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResumePayload>
          }
          createMany: {
            args: Prisma.ResumeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ResumeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResumePayload>[]
          }
          delete: {
            args: Prisma.ResumeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResumePayload>
          }
          update: {
            args: Prisma.ResumeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResumePayload>
          }
          deleteMany: {
            args: Prisma.ResumeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ResumeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ResumeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResumePayload>[]
          }
          upsert: {
            args: Prisma.ResumeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResumePayload>
          }
          aggregate: {
            args: Prisma.ResumeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateResume>
          }
          groupBy: {
            args: Prisma.ResumeGroupByArgs<ExtArgs>
            result: $Utils.Optional<ResumeGroupByOutputType>[]
          }
          count: {
            args: Prisma.ResumeCountArgs<ExtArgs>
            result: $Utils.Optional<ResumeCountAggregateOutputType> | number
          }
        }
      }
      CoverLetter: {
        payload: Prisma.$CoverLetterPayload<ExtArgs>
        fields: Prisma.CoverLetterFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CoverLetterFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoverLetterPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CoverLetterFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoverLetterPayload>
          }
          findFirst: {
            args: Prisma.CoverLetterFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoverLetterPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CoverLetterFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoverLetterPayload>
          }
          findMany: {
            args: Prisma.CoverLetterFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoverLetterPayload>[]
          }
          create: {
            args: Prisma.CoverLetterCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoverLetterPayload>
          }
          createMany: {
            args: Prisma.CoverLetterCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CoverLetterCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoverLetterPayload>[]
          }
          delete: {
            args: Prisma.CoverLetterDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoverLetterPayload>
          }
          update: {
            args: Prisma.CoverLetterUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoverLetterPayload>
          }
          deleteMany: {
            args: Prisma.CoverLetterDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CoverLetterUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CoverLetterUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoverLetterPayload>[]
          }
          upsert: {
            args: Prisma.CoverLetterUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoverLetterPayload>
          }
          aggregate: {
            args: Prisma.CoverLetterAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCoverLetter>
          }
          groupBy: {
            args: Prisma.CoverLetterGroupByArgs<ExtArgs>
            result: $Utils.Optional<CoverLetterGroupByOutputType>[]
          }
          count: {
            args: Prisma.CoverLetterCountArgs<ExtArgs>
            result: $Utils.Optional<CoverLetterCountAggregateOutputType> | number
          }
        }
      }
      MockInterview: {
        payload: Prisma.$MockInterviewPayload<ExtArgs>
        fields: Prisma.MockInterviewFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MockInterviewFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MockInterviewPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MockInterviewFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MockInterviewPayload>
          }
          findFirst: {
            args: Prisma.MockInterviewFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MockInterviewPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MockInterviewFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MockInterviewPayload>
          }
          findMany: {
            args: Prisma.MockInterviewFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MockInterviewPayload>[]
          }
          create: {
            args: Prisma.MockInterviewCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MockInterviewPayload>
          }
          createMany: {
            args: Prisma.MockInterviewCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MockInterviewCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MockInterviewPayload>[]
          }
          delete: {
            args: Prisma.MockInterviewDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MockInterviewPayload>
          }
          update: {
            args: Prisma.MockInterviewUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MockInterviewPayload>
          }
          deleteMany: {
            args: Prisma.MockInterviewDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MockInterviewUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MockInterviewUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MockInterviewPayload>[]
          }
          upsert: {
            args: Prisma.MockInterviewUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MockInterviewPayload>
          }
          aggregate: {
            args: Prisma.MockInterviewAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMockInterview>
          }
          groupBy: {
            args: Prisma.MockInterviewGroupByArgs<ExtArgs>
            result: $Utils.Optional<MockInterviewGroupByOutputType>[]
          }
          count: {
            args: Prisma.MockInterviewCountArgs<ExtArgs>
            result: $Utils.Optional<MockInterviewCountAggregateOutputType> | number
          }
        }
      }
      SkillGapAnalysis: {
        payload: Prisma.$SkillGapAnalysisPayload<ExtArgs>
        fields: Prisma.SkillGapAnalysisFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SkillGapAnalysisFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillGapAnalysisPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SkillGapAnalysisFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillGapAnalysisPayload>
          }
          findFirst: {
            args: Prisma.SkillGapAnalysisFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillGapAnalysisPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SkillGapAnalysisFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillGapAnalysisPayload>
          }
          findMany: {
            args: Prisma.SkillGapAnalysisFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillGapAnalysisPayload>[]
          }
          create: {
            args: Prisma.SkillGapAnalysisCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillGapAnalysisPayload>
          }
          createMany: {
            args: Prisma.SkillGapAnalysisCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SkillGapAnalysisCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillGapAnalysisPayload>[]
          }
          delete: {
            args: Prisma.SkillGapAnalysisDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillGapAnalysisPayload>
          }
          update: {
            args: Prisma.SkillGapAnalysisUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillGapAnalysisPayload>
          }
          deleteMany: {
            args: Prisma.SkillGapAnalysisDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SkillGapAnalysisUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SkillGapAnalysisUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillGapAnalysisPayload>[]
          }
          upsert: {
            args: Prisma.SkillGapAnalysisUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillGapAnalysisPayload>
          }
          aggregate: {
            args: Prisma.SkillGapAnalysisAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSkillGapAnalysis>
          }
          groupBy: {
            args: Prisma.SkillGapAnalysisGroupByArgs<ExtArgs>
            result: $Utils.Optional<SkillGapAnalysisGroupByOutputType>[]
          }
          count: {
            args: Prisma.SkillGapAnalysisCountArgs<ExtArgs>
            result: $Utils.Optional<SkillGapAnalysisCountAggregateOutputType> | number
          }
        }
      }
      IndustryInsight: {
        payload: Prisma.$IndustryInsightPayload<ExtArgs>
        fields: Prisma.IndustryInsightFieldRefs
        operations: {
          findUnique: {
            args: Prisma.IndustryInsightFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IndustryInsightPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.IndustryInsightFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IndustryInsightPayload>
          }
          findFirst: {
            args: Prisma.IndustryInsightFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IndustryInsightPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.IndustryInsightFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IndustryInsightPayload>
          }
          findMany: {
            args: Prisma.IndustryInsightFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IndustryInsightPayload>[]
          }
          create: {
            args: Prisma.IndustryInsightCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IndustryInsightPayload>
          }
          createMany: {
            args: Prisma.IndustryInsightCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.IndustryInsightCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IndustryInsightPayload>[]
          }
          delete: {
            args: Prisma.IndustryInsightDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IndustryInsightPayload>
          }
          update: {
            args: Prisma.IndustryInsightUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IndustryInsightPayload>
          }
          deleteMany: {
            args: Prisma.IndustryInsightDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.IndustryInsightUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.IndustryInsightUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IndustryInsightPayload>[]
          }
          upsert: {
            args: Prisma.IndustryInsightUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IndustryInsightPayload>
          }
          aggregate: {
            args: Prisma.IndustryInsightAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateIndustryInsight>
          }
          groupBy: {
            args: Prisma.IndustryInsightGroupByArgs<ExtArgs>
            result: $Utils.Optional<IndustryInsightGroupByOutputType>[]
          }
          count: {
            args: Prisma.IndustryInsightCountArgs<ExtArgs>
            result: $Utils.Optional<IndustryInsightCountAggregateOutputType> | number
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
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
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
    user?: UserOmit
    resume?: ResumeOmit
    coverLetter?: CoverLetterOmit
    mockInterview?: MockInterviewOmit
    skillGapAnalysis?: SkillGapAnalysisOmit
    industryInsight?: IndustryInsightOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    coverLetters: number
    mockInterviews: number
    skillGaps: number
    industryInsights: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    coverLetters?: boolean | UserCountOutputTypeCountCoverLettersArgs
    mockInterviews?: boolean | UserCountOutputTypeCountMockInterviewsArgs
    skillGaps?: boolean | UserCountOutputTypeCountSkillGapsArgs
    industryInsights?: boolean | UserCountOutputTypeCountIndustryInsightsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCoverLettersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CoverLetterWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountMockInterviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MockInterviewWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSkillGapsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SkillGapAnalysisWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountIndustryInsightsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: IndustryInsightWhereInput
  }


  /**
   * Count Type IndustryInsightCountOutputType
   */

  export type IndustryInsightCountOutputType = {
    users: number
  }

  export type IndustryInsightCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | IndustryInsightCountOutputTypeCountUsersArgs
  }

  // Custom InputTypes
  /**
   * IndustryInsightCountOutputType without action
   */
  export type IndustryInsightCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IndustryInsightCountOutputType
     */
    select?: IndustryInsightCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * IndustryInsightCountOutputType without action
   */
  export type IndustryInsightCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }


  /**
   * Models
   */

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
    experience: number | null
  }

  export type UserSumAggregateOutputType = {
    experience: number | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    clerkUserId: string | null
    email: string | null
    name: string | null
    imageUrl: string | null
    bio: string | null
    experience: number | null
    industry: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    clerkUserId: string | null
    email: string | null
    name: string | null
    imageUrl: string | null
    bio: string | null
    experience: number | null
    industry: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    clerkUserId: number
    email: number
    name: number
    imageUrl: number
    bio: number
    experience: number
    industry: number
    createdAt: number
    updatedAt: number
    skills: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    experience?: true
  }

  export type UserSumAggregateInputType = {
    experience?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    clerkUserId?: true
    email?: true
    name?: true
    imageUrl?: true
    bio?: true
    experience?: true
    industry?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    clerkUserId?: true
    email?: true
    name?: true
    imageUrl?: true
    bio?: true
    experience?: true
    industry?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    clerkUserId?: true
    email?: true
    name?: true
    imageUrl?: true
    bio?: true
    experience?: true
    industry?: true
    createdAt?: true
    updatedAt?: true
    skills?: true
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
    id: string
    clerkUserId: string
    email: string
    name: string | null
    imageUrl: string | null
    bio: string | null
    experience: number | null
    industry: string | null
    createdAt: Date
    updatedAt: Date
    skills: string[]
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
    clerkUserId?: boolean
    email?: boolean
    name?: boolean
    imageUrl?: boolean
    bio?: boolean
    experience?: boolean
    industry?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    skills?: boolean
    resume?: boolean | User$resumeArgs<ExtArgs>
    coverLetters?: boolean | User$coverLettersArgs<ExtArgs>
    mockInterviews?: boolean | User$mockInterviewsArgs<ExtArgs>
    skillGaps?: boolean | User$skillGapsArgs<ExtArgs>
    industryInsights?: boolean | User$industryInsightsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clerkUserId?: boolean
    email?: boolean
    name?: boolean
    imageUrl?: boolean
    bio?: boolean
    experience?: boolean
    industry?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    skills?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clerkUserId?: boolean
    email?: boolean
    name?: boolean
    imageUrl?: boolean
    bio?: boolean
    experience?: boolean
    industry?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    skills?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    clerkUserId?: boolean
    email?: boolean
    name?: boolean
    imageUrl?: boolean
    bio?: boolean
    experience?: boolean
    industry?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    skills?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "clerkUserId" | "email" | "name" | "imageUrl" | "bio" | "experience" | "industry" | "createdAt" | "updatedAt" | "skills", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    resume?: boolean | User$resumeArgs<ExtArgs>
    coverLetters?: boolean | User$coverLettersArgs<ExtArgs>
    mockInterviews?: boolean | User$mockInterviewsArgs<ExtArgs>
    skillGaps?: boolean | User$skillGapsArgs<ExtArgs>
    industryInsights?: boolean | User$industryInsightsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      resume: Prisma.$ResumePayload<ExtArgs> | null
      coverLetters: Prisma.$CoverLetterPayload<ExtArgs>[]
      mockInterviews: Prisma.$MockInterviewPayload<ExtArgs>[]
      skillGaps: Prisma.$SkillGapAnalysisPayload<ExtArgs>[]
      industryInsights: Prisma.$IndustryInsightPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      clerkUserId: string
      email: string
      name: string | null
      imageUrl: string | null
      bio: string | null
      experience: number | null
      industry: string | null
      createdAt: Date
      updatedAt: Date
      skills: string[]
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
    resume<T extends User$resumeArgs<ExtArgs> = {}>(args?: Subset<T, User$resumeArgs<ExtArgs>>): Prisma__ResumeClient<$Result.GetResult<Prisma.$ResumePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    coverLetters<T extends User$coverLettersArgs<ExtArgs> = {}>(args?: Subset<T, User$coverLettersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoverLetterPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    mockInterviews<T extends User$mockInterviewsArgs<ExtArgs> = {}>(args?: Subset<T, User$mockInterviewsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MockInterviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    skillGaps<T extends User$skillGapsArgs<ExtArgs> = {}>(args?: Subset<T, User$skillGapsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SkillGapAnalysisPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    industryInsights<T extends User$industryInsightsArgs<ExtArgs> = {}>(args?: Subset<T, User$industryInsightsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IndustryInsightPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly id: FieldRef<"User", 'String'>
    readonly clerkUserId: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly imageUrl: FieldRef<"User", 'String'>
    readonly bio: FieldRef<"User", 'String'>
    readonly experience: FieldRef<"User", 'Int'>
    readonly industry: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
    readonly skills: FieldRef<"User", 'String[]'>
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
   * User.resume
   */
  export type User$resumeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resume
     */
    select?: ResumeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resume
     */
    omit?: ResumeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResumeInclude<ExtArgs> | null
    where?: ResumeWhereInput
  }

  /**
   * User.coverLetters
   */
  export type User$coverLettersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoverLetter
     */
    select?: CoverLetterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CoverLetter
     */
    omit?: CoverLetterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoverLetterInclude<ExtArgs> | null
    where?: CoverLetterWhereInput
    orderBy?: CoverLetterOrderByWithRelationInput | CoverLetterOrderByWithRelationInput[]
    cursor?: CoverLetterWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CoverLetterScalarFieldEnum | CoverLetterScalarFieldEnum[]
  }

  /**
   * User.mockInterviews
   */
  export type User$mockInterviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MockInterview
     */
    select?: MockInterviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MockInterview
     */
    omit?: MockInterviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MockInterviewInclude<ExtArgs> | null
    where?: MockInterviewWhereInput
    orderBy?: MockInterviewOrderByWithRelationInput | MockInterviewOrderByWithRelationInput[]
    cursor?: MockInterviewWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MockInterviewScalarFieldEnum | MockInterviewScalarFieldEnum[]
  }

  /**
   * User.skillGaps
   */
  export type User$skillGapsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SkillGapAnalysis
     */
    select?: SkillGapAnalysisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SkillGapAnalysis
     */
    omit?: SkillGapAnalysisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillGapAnalysisInclude<ExtArgs> | null
    where?: SkillGapAnalysisWhereInput
    orderBy?: SkillGapAnalysisOrderByWithRelationInput | SkillGapAnalysisOrderByWithRelationInput[]
    cursor?: SkillGapAnalysisWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SkillGapAnalysisScalarFieldEnum | SkillGapAnalysisScalarFieldEnum[]
  }

  /**
   * User.industryInsights
   */
  export type User$industryInsightsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IndustryInsight
     */
    select?: IndustryInsightSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IndustryInsight
     */
    omit?: IndustryInsightOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IndustryInsightInclude<ExtArgs> | null
    where?: IndustryInsightWhereInput
    orderBy?: IndustryInsightOrderByWithRelationInput | IndustryInsightOrderByWithRelationInput[]
    cursor?: IndustryInsightWhereUniqueInput
    take?: number
    skip?: number
    distinct?: IndustryInsightScalarFieldEnum | IndustryInsightScalarFieldEnum[]
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
   * Model Resume
   */

  export type AggregateResume = {
    _count: ResumeCountAggregateOutputType | null
    _min: ResumeMinAggregateOutputType | null
    _max: ResumeMaxAggregateOutputType | null
  }

  export type ResumeMinAggregateOutputType = {
    id: string | null
    userId: string | null
    content: string | null
    createdAt: Date | null
  }

  export type ResumeMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    content: string | null
    createdAt: Date | null
  }

  export type ResumeCountAggregateOutputType = {
    id: number
    userId: number
    content: number
    createdAt: number
    _all: number
  }


  export type ResumeMinAggregateInputType = {
    id?: true
    userId?: true
    content?: true
    createdAt?: true
  }

  export type ResumeMaxAggregateInputType = {
    id?: true
    userId?: true
    content?: true
    createdAt?: true
  }

  export type ResumeCountAggregateInputType = {
    id?: true
    userId?: true
    content?: true
    createdAt?: true
    _all?: true
  }

  export type ResumeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Resume to aggregate.
     */
    where?: ResumeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Resumes to fetch.
     */
    orderBy?: ResumeOrderByWithRelationInput | ResumeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ResumeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Resumes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Resumes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Resumes
    **/
    _count?: true | ResumeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ResumeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ResumeMaxAggregateInputType
  }

  export type GetResumeAggregateType<T extends ResumeAggregateArgs> = {
        [P in keyof T & keyof AggregateResume]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateResume[P]>
      : GetScalarType<T[P], AggregateResume[P]>
  }




  export type ResumeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ResumeWhereInput
    orderBy?: ResumeOrderByWithAggregationInput | ResumeOrderByWithAggregationInput[]
    by: ResumeScalarFieldEnum[] | ResumeScalarFieldEnum
    having?: ResumeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ResumeCountAggregateInputType | true
    _min?: ResumeMinAggregateInputType
    _max?: ResumeMaxAggregateInputType
  }

  export type ResumeGroupByOutputType = {
    id: string
    userId: string
    content: string
    createdAt: Date
    _count: ResumeCountAggregateOutputType | null
    _min: ResumeMinAggregateOutputType | null
    _max: ResumeMaxAggregateOutputType | null
  }

  type GetResumeGroupByPayload<T extends ResumeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ResumeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ResumeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ResumeGroupByOutputType[P]>
            : GetScalarType<T[P], ResumeGroupByOutputType[P]>
        }
      >
    >


  export type ResumeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    content?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["resume"]>

  export type ResumeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    content?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["resume"]>

  export type ResumeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    content?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["resume"]>

  export type ResumeSelectScalar = {
    id?: boolean
    userId?: boolean
    content?: boolean
    createdAt?: boolean
  }

  export type ResumeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "content" | "createdAt", ExtArgs["result"]["resume"]>
  export type ResumeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ResumeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ResumeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ResumePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Resume"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      content: string
      createdAt: Date
    }, ExtArgs["result"]["resume"]>
    composites: {}
  }

  type ResumeGetPayload<S extends boolean | null | undefined | ResumeDefaultArgs> = $Result.GetResult<Prisma.$ResumePayload, S>

  type ResumeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ResumeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ResumeCountAggregateInputType | true
    }

  export interface ResumeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Resume'], meta: { name: 'Resume' } }
    /**
     * Find zero or one Resume that matches the filter.
     * @param {ResumeFindUniqueArgs} args - Arguments to find a Resume
     * @example
     * // Get one Resume
     * const resume = await prisma.resume.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ResumeFindUniqueArgs>(args: SelectSubset<T, ResumeFindUniqueArgs<ExtArgs>>): Prisma__ResumeClient<$Result.GetResult<Prisma.$ResumePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Resume that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ResumeFindUniqueOrThrowArgs} args - Arguments to find a Resume
     * @example
     * // Get one Resume
     * const resume = await prisma.resume.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ResumeFindUniqueOrThrowArgs>(args: SelectSubset<T, ResumeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ResumeClient<$Result.GetResult<Prisma.$ResumePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Resume that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResumeFindFirstArgs} args - Arguments to find a Resume
     * @example
     * // Get one Resume
     * const resume = await prisma.resume.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ResumeFindFirstArgs>(args?: SelectSubset<T, ResumeFindFirstArgs<ExtArgs>>): Prisma__ResumeClient<$Result.GetResult<Prisma.$ResumePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Resume that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResumeFindFirstOrThrowArgs} args - Arguments to find a Resume
     * @example
     * // Get one Resume
     * const resume = await prisma.resume.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ResumeFindFirstOrThrowArgs>(args?: SelectSubset<T, ResumeFindFirstOrThrowArgs<ExtArgs>>): Prisma__ResumeClient<$Result.GetResult<Prisma.$ResumePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Resumes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResumeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Resumes
     * const resumes = await prisma.resume.findMany()
     * 
     * // Get first 10 Resumes
     * const resumes = await prisma.resume.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const resumeWithIdOnly = await prisma.resume.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ResumeFindManyArgs>(args?: SelectSubset<T, ResumeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResumePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Resume.
     * @param {ResumeCreateArgs} args - Arguments to create a Resume.
     * @example
     * // Create one Resume
     * const Resume = await prisma.resume.create({
     *   data: {
     *     // ... data to create a Resume
     *   }
     * })
     * 
     */
    create<T extends ResumeCreateArgs>(args: SelectSubset<T, ResumeCreateArgs<ExtArgs>>): Prisma__ResumeClient<$Result.GetResult<Prisma.$ResumePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Resumes.
     * @param {ResumeCreateManyArgs} args - Arguments to create many Resumes.
     * @example
     * // Create many Resumes
     * const resume = await prisma.resume.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ResumeCreateManyArgs>(args?: SelectSubset<T, ResumeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Resumes and returns the data saved in the database.
     * @param {ResumeCreateManyAndReturnArgs} args - Arguments to create many Resumes.
     * @example
     * // Create many Resumes
     * const resume = await prisma.resume.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Resumes and only return the `id`
     * const resumeWithIdOnly = await prisma.resume.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ResumeCreateManyAndReturnArgs>(args?: SelectSubset<T, ResumeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResumePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Resume.
     * @param {ResumeDeleteArgs} args - Arguments to delete one Resume.
     * @example
     * // Delete one Resume
     * const Resume = await prisma.resume.delete({
     *   where: {
     *     // ... filter to delete one Resume
     *   }
     * })
     * 
     */
    delete<T extends ResumeDeleteArgs>(args: SelectSubset<T, ResumeDeleteArgs<ExtArgs>>): Prisma__ResumeClient<$Result.GetResult<Prisma.$ResumePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Resume.
     * @param {ResumeUpdateArgs} args - Arguments to update one Resume.
     * @example
     * // Update one Resume
     * const resume = await prisma.resume.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ResumeUpdateArgs>(args: SelectSubset<T, ResumeUpdateArgs<ExtArgs>>): Prisma__ResumeClient<$Result.GetResult<Prisma.$ResumePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Resumes.
     * @param {ResumeDeleteManyArgs} args - Arguments to filter Resumes to delete.
     * @example
     * // Delete a few Resumes
     * const { count } = await prisma.resume.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ResumeDeleteManyArgs>(args?: SelectSubset<T, ResumeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Resumes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResumeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Resumes
     * const resume = await prisma.resume.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ResumeUpdateManyArgs>(args: SelectSubset<T, ResumeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Resumes and returns the data updated in the database.
     * @param {ResumeUpdateManyAndReturnArgs} args - Arguments to update many Resumes.
     * @example
     * // Update many Resumes
     * const resume = await prisma.resume.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Resumes and only return the `id`
     * const resumeWithIdOnly = await prisma.resume.updateManyAndReturn({
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
    updateManyAndReturn<T extends ResumeUpdateManyAndReturnArgs>(args: SelectSubset<T, ResumeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResumePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Resume.
     * @param {ResumeUpsertArgs} args - Arguments to update or create a Resume.
     * @example
     * // Update or create a Resume
     * const resume = await prisma.resume.upsert({
     *   create: {
     *     // ... data to create a Resume
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Resume we want to update
     *   }
     * })
     */
    upsert<T extends ResumeUpsertArgs>(args: SelectSubset<T, ResumeUpsertArgs<ExtArgs>>): Prisma__ResumeClient<$Result.GetResult<Prisma.$ResumePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Resumes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResumeCountArgs} args - Arguments to filter Resumes to count.
     * @example
     * // Count the number of Resumes
     * const count = await prisma.resume.count({
     *   where: {
     *     // ... the filter for the Resumes we want to count
     *   }
     * })
    **/
    count<T extends ResumeCountArgs>(
      args?: Subset<T, ResumeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ResumeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Resume.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResumeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ResumeAggregateArgs>(args: Subset<T, ResumeAggregateArgs>): Prisma.PrismaPromise<GetResumeAggregateType<T>>

    /**
     * Group by Resume.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResumeGroupByArgs} args - Group by arguments.
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
      T extends ResumeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ResumeGroupByArgs['orderBy'] }
        : { orderBy?: ResumeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ResumeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetResumeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Resume model
   */
  readonly fields: ResumeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Resume.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ResumeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Resume model
   */
  interface ResumeFieldRefs {
    readonly id: FieldRef<"Resume", 'String'>
    readonly userId: FieldRef<"Resume", 'String'>
    readonly content: FieldRef<"Resume", 'String'>
    readonly createdAt: FieldRef<"Resume", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Resume findUnique
   */
  export type ResumeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resume
     */
    select?: ResumeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resume
     */
    omit?: ResumeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResumeInclude<ExtArgs> | null
    /**
     * Filter, which Resume to fetch.
     */
    where: ResumeWhereUniqueInput
  }

  /**
   * Resume findUniqueOrThrow
   */
  export type ResumeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resume
     */
    select?: ResumeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resume
     */
    omit?: ResumeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResumeInclude<ExtArgs> | null
    /**
     * Filter, which Resume to fetch.
     */
    where: ResumeWhereUniqueInput
  }

  /**
   * Resume findFirst
   */
  export type ResumeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resume
     */
    select?: ResumeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resume
     */
    omit?: ResumeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResumeInclude<ExtArgs> | null
    /**
     * Filter, which Resume to fetch.
     */
    where?: ResumeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Resumes to fetch.
     */
    orderBy?: ResumeOrderByWithRelationInput | ResumeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Resumes.
     */
    cursor?: ResumeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Resumes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Resumes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Resumes.
     */
    distinct?: ResumeScalarFieldEnum | ResumeScalarFieldEnum[]
  }

  /**
   * Resume findFirstOrThrow
   */
  export type ResumeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resume
     */
    select?: ResumeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resume
     */
    omit?: ResumeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResumeInclude<ExtArgs> | null
    /**
     * Filter, which Resume to fetch.
     */
    where?: ResumeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Resumes to fetch.
     */
    orderBy?: ResumeOrderByWithRelationInput | ResumeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Resumes.
     */
    cursor?: ResumeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Resumes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Resumes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Resumes.
     */
    distinct?: ResumeScalarFieldEnum | ResumeScalarFieldEnum[]
  }

  /**
   * Resume findMany
   */
  export type ResumeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resume
     */
    select?: ResumeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resume
     */
    omit?: ResumeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResumeInclude<ExtArgs> | null
    /**
     * Filter, which Resumes to fetch.
     */
    where?: ResumeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Resumes to fetch.
     */
    orderBy?: ResumeOrderByWithRelationInput | ResumeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Resumes.
     */
    cursor?: ResumeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Resumes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Resumes.
     */
    skip?: number
    distinct?: ResumeScalarFieldEnum | ResumeScalarFieldEnum[]
  }

  /**
   * Resume create
   */
  export type ResumeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resume
     */
    select?: ResumeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resume
     */
    omit?: ResumeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResumeInclude<ExtArgs> | null
    /**
     * The data needed to create a Resume.
     */
    data: XOR<ResumeCreateInput, ResumeUncheckedCreateInput>
  }

  /**
   * Resume createMany
   */
  export type ResumeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Resumes.
     */
    data: ResumeCreateManyInput | ResumeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Resume createManyAndReturn
   */
  export type ResumeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resume
     */
    select?: ResumeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Resume
     */
    omit?: ResumeOmit<ExtArgs> | null
    /**
     * The data used to create many Resumes.
     */
    data: ResumeCreateManyInput | ResumeCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResumeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Resume update
   */
  export type ResumeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resume
     */
    select?: ResumeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resume
     */
    omit?: ResumeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResumeInclude<ExtArgs> | null
    /**
     * The data needed to update a Resume.
     */
    data: XOR<ResumeUpdateInput, ResumeUncheckedUpdateInput>
    /**
     * Choose, which Resume to update.
     */
    where: ResumeWhereUniqueInput
  }

  /**
   * Resume updateMany
   */
  export type ResumeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Resumes.
     */
    data: XOR<ResumeUpdateManyMutationInput, ResumeUncheckedUpdateManyInput>
    /**
     * Filter which Resumes to update
     */
    where?: ResumeWhereInput
    /**
     * Limit how many Resumes to update.
     */
    limit?: number
  }

  /**
   * Resume updateManyAndReturn
   */
  export type ResumeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resume
     */
    select?: ResumeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Resume
     */
    omit?: ResumeOmit<ExtArgs> | null
    /**
     * The data used to update Resumes.
     */
    data: XOR<ResumeUpdateManyMutationInput, ResumeUncheckedUpdateManyInput>
    /**
     * Filter which Resumes to update
     */
    where?: ResumeWhereInput
    /**
     * Limit how many Resumes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResumeIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Resume upsert
   */
  export type ResumeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resume
     */
    select?: ResumeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resume
     */
    omit?: ResumeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResumeInclude<ExtArgs> | null
    /**
     * The filter to search for the Resume to update in case it exists.
     */
    where: ResumeWhereUniqueInput
    /**
     * In case the Resume found by the `where` argument doesn't exist, create a new Resume with this data.
     */
    create: XOR<ResumeCreateInput, ResumeUncheckedCreateInput>
    /**
     * In case the Resume was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ResumeUpdateInput, ResumeUncheckedUpdateInput>
  }

  /**
   * Resume delete
   */
  export type ResumeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resume
     */
    select?: ResumeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resume
     */
    omit?: ResumeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResumeInclude<ExtArgs> | null
    /**
     * Filter which Resume to delete.
     */
    where: ResumeWhereUniqueInput
  }

  /**
   * Resume deleteMany
   */
  export type ResumeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Resumes to delete
     */
    where?: ResumeWhereInput
    /**
     * Limit how many Resumes to delete.
     */
    limit?: number
  }

  /**
   * Resume without action
   */
  export type ResumeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resume
     */
    select?: ResumeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resume
     */
    omit?: ResumeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResumeInclude<ExtArgs> | null
  }


  /**
   * Model CoverLetter
   */

  export type AggregateCoverLetter = {
    _count: CoverLetterCountAggregateOutputType | null
    _min: CoverLetterMinAggregateOutputType | null
    _max: CoverLetterMaxAggregateOutputType | null
  }

  export type CoverLetterMinAggregateOutputType = {
    id: string | null
    userId: string | null
    content: string | null
    createdAt: Date | null
  }

  export type CoverLetterMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    content: string | null
    createdAt: Date | null
  }

  export type CoverLetterCountAggregateOutputType = {
    id: number
    userId: number
    content: number
    createdAt: number
    _all: number
  }


  export type CoverLetterMinAggregateInputType = {
    id?: true
    userId?: true
    content?: true
    createdAt?: true
  }

  export type CoverLetterMaxAggregateInputType = {
    id?: true
    userId?: true
    content?: true
    createdAt?: true
  }

  export type CoverLetterCountAggregateInputType = {
    id?: true
    userId?: true
    content?: true
    createdAt?: true
    _all?: true
  }

  export type CoverLetterAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CoverLetter to aggregate.
     */
    where?: CoverLetterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CoverLetters to fetch.
     */
    orderBy?: CoverLetterOrderByWithRelationInput | CoverLetterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CoverLetterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CoverLetters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CoverLetters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CoverLetters
    **/
    _count?: true | CoverLetterCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CoverLetterMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CoverLetterMaxAggregateInputType
  }

  export type GetCoverLetterAggregateType<T extends CoverLetterAggregateArgs> = {
        [P in keyof T & keyof AggregateCoverLetter]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCoverLetter[P]>
      : GetScalarType<T[P], AggregateCoverLetter[P]>
  }




  export type CoverLetterGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CoverLetterWhereInput
    orderBy?: CoverLetterOrderByWithAggregationInput | CoverLetterOrderByWithAggregationInput[]
    by: CoverLetterScalarFieldEnum[] | CoverLetterScalarFieldEnum
    having?: CoverLetterScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CoverLetterCountAggregateInputType | true
    _min?: CoverLetterMinAggregateInputType
    _max?: CoverLetterMaxAggregateInputType
  }

  export type CoverLetterGroupByOutputType = {
    id: string
    userId: string
    content: string
    createdAt: Date
    _count: CoverLetterCountAggregateOutputType | null
    _min: CoverLetterMinAggregateOutputType | null
    _max: CoverLetterMaxAggregateOutputType | null
  }

  type GetCoverLetterGroupByPayload<T extends CoverLetterGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CoverLetterGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CoverLetterGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CoverLetterGroupByOutputType[P]>
            : GetScalarType<T[P], CoverLetterGroupByOutputType[P]>
        }
      >
    >


  export type CoverLetterSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    content?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["coverLetter"]>

  export type CoverLetterSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    content?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["coverLetter"]>

  export type CoverLetterSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    content?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["coverLetter"]>

  export type CoverLetterSelectScalar = {
    id?: boolean
    userId?: boolean
    content?: boolean
    createdAt?: boolean
  }

  export type CoverLetterOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "content" | "createdAt", ExtArgs["result"]["coverLetter"]>
  export type CoverLetterInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type CoverLetterIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type CoverLetterIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $CoverLetterPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CoverLetter"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      content: string
      createdAt: Date
    }, ExtArgs["result"]["coverLetter"]>
    composites: {}
  }

  type CoverLetterGetPayload<S extends boolean | null | undefined | CoverLetterDefaultArgs> = $Result.GetResult<Prisma.$CoverLetterPayload, S>

  type CoverLetterCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CoverLetterFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CoverLetterCountAggregateInputType | true
    }

  export interface CoverLetterDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CoverLetter'], meta: { name: 'CoverLetter' } }
    /**
     * Find zero or one CoverLetter that matches the filter.
     * @param {CoverLetterFindUniqueArgs} args - Arguments to find a CoverLetter
     * @example
     * // Get one CoverLetter
     * const coverLetter = await prisma.coverLetter.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CoverLetterFindUniqueArgs>(args: SelectSubset<T, CoverLetterFindUniqueArgs<ExtArgs>>): Prisma__CoverLetterClient<$Result.GetResult<Prisma.$CoverLetterPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CoverLetter that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CoverLetterFindUniqueOrThrowArgs} args - Arguments to find a CoverLetter
     * @example
     * // Get one CoverLetter
     * const coverLetter = await prisma.coverLetter.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CoverLetterFindUniqueOrThrowArgs>(args: SelectSubset<T, CoverLetterFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CoverLetterClient<$Result.GetResult<Prisma.$CoverLetterPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CoverLetter that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoverLetterFindFirstArgs} args - Arguments to find a CoverLetter
     * @example
     * // Get one CoverLetter
     * const coverLetter = await prisma.coverLetter.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CoverLetterFindFirstArgs>(args?: SelectSubset<T, CoverLetterFindFirstArgs<ExtArgs>>): Prisma__CoverLetterClient<$Result.GetResult<Prisma.$CoverLetterPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CoverLetter that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoverLetterFindFirstOrThrowArgs} args - Arguments to find a CoverLetter
     * @example
     * // Get one CoverLetter
     * const coverLetter = await prisma.coverLetter.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CoverLetterFindFirstOrThrowArgs>(args?: SelectSubset<T, CoverLetterFindFirstOrThrowArgs<ExtArgs>>): Prisma__CoverLetterClient<$Result.GetResult<Prisma.$CoverLetterPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CoverLetters that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoverLetterFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CoverLetters
     * const coverLetters = await prisma.coverLetter.findMany()
     * 
     * // Get first 10 CoverLetters
     * const coverLetters = await prisma.coverLetter.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const coverLetterWithIdOnly = await prisma.coverLetter.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CoverLetterFindManyArgs>(args?: SelectSubset<T, CoverLetterFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoverLetterPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CoverLetter.
     * @param {CoverLetterCreateArgs} args - Arguments to create a CoverLetter.
     * @example
     * // Create one CoverLetter
     * const CoverLetter = await prisma.coverLetter.create({
     *   data: {
     *     // ... data to create a CoverLetter
     *   }
     * })
     * 
     */
    create<T extends CoverLetterCreateArgs>(args: SelectSubset<T, CoverLetterCreateArgs<ExtArgs>>): Prisma__CoverLetterClient<$Result.GetResult<Prisma.$CoverLetterPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CoverLetters.
     * @param {CoverLetterCreateManyArgs} args - Arguments to create many CoverLetters.
     * @example
     * // Create many CoverLetters
     * const coverLetter = await prisma.coverLetter.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CoverLetterCreateManyArgs>(args?: SelectSubset<T, CoverLetterCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CoverLetters and returns the data saved in the database.
     * @param {CoverLetterCreateManyAndReturnArgs} args - Arguments to create many CoverLetters.
     * @example
     * // Create many CoverLetters
     * const coverLetter = await prisma.coverLetter.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CoverLetters and only return the `id`
     * const coverLetterWithIdOnly = await prisma.coverLetter.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CoverLetterCreateManyAndReturnArgs>(args?: SelectSubset<T, CoverLetterCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoverLetterPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CoverLetter.
     * @param {CoverLetterDeleteArgs} args - Arguments to delete one CoverLetter.
     * @example
     * // Delete one CoverLetter
     * const CoverLetter = await prisma.coverLetter.delete({
     *   where: {
     *     // ... filter to delete one CoverLetter
     *   }
     * })
     * 
     */
    delete<T extends CoverLetterDeleteArgs>(args: SelectSubset<T, CoverLetterDeleteArgs<ExtArgs>>): Prisma__CoverLetterClient<$Result.GetResult<Prisma.$CoverLetterPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CoverLetter.
     * @param {CoverLetterUpdateArgs} args - Arguments to update one CoverLetter.
     * @example
     * // Update one CoverLetter
     * const coverLetter = await prisma.coverLetter.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CoverLetterUpdateArgs>(args: SelectSubset<T, CoverLetterUpdateArgs<ExtArgs>>): Prisma__CoverLetterClient<$Result.GetResult<Prisma.$CoverLetterPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CoverLetters.
     * @param {CoverLetterDeleteManyArgs} args - Arguments to filter CoverLetters to delete.
     * @example
     * // Delete a few CoverLetters
     * const { count } = await prisma.coverLetter.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CoverLetterDeleteManyArgs>(args?: SelectSubset<T, CoverLetterDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CoverLetters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoverLetterUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CoverLetters
     * const coverLetter = await prisma.coverLetter.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CoverLetterUpdateManyArgs>(args: SelectSubset<T, CoverLetterUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CoverLetters and returns the data updated in the database.
     * @param {CoverLetterUpdateManyAndReturnArgs} args - Arguments to update many CoverLetters.
     * @example
     * // Update many CoverLetters
     * const coverLetter = await prisma.coverLetter.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CoverLetters and only return the `id`
     * const coverLetterWithIdOnly = await prisma.coverLetter.updateManyAndReturn({
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
    updateManyAndReturn<T extends CoverLetterUpdateManyAndReturnArgs>(args: SelectSubset<T, CoverLetterUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoverLetterPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CoverLetter.
     * @param {CoverLetterUpsertArgs} args - Arguments to update or create a CoverLetter.
     * @example
     * // Update or create a CoverLetter
     * const coverLetter = await prisma.coverLetter.upsert({
     *   create: {
     *     // ... data to create a CoverLetter
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CoverLetter we want to update
     *   }
     * })
     */
    upsert<T extends CoverLetterUpsertArgs>(args: SelectSubset<T, CoverLetterUpsertArgs<ExtArgs>>): Prisma__CoverLetterClient<$Result.GetResult<Prisma.$CoverLetterPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CoverLetters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoverLetterCountArgs} args - Arguments to filter CoverLetters to count.
     * @example
     * // Count the number of CoverLetters
     * const count = await prisma.coverLetter.count({
     *   where: {
     *     // ... the filter for the CoverLetters we want to count
     *   }
     * })
    **/
    count<T extends CoverLetterCountArgs>(
      args?: Subset<T, CoverLetterCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CoverLetterCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CoverLetter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoverLetterAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CoverLetterAggregateArgs>(args: Subset<T, CoverLetterAggregateArgs>): Prisma.PrismaPromise<GetCoverLetterAggregateType<T>>

    /**
     * Group by CoverLetter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoverLetterGroupByArgs} args - Group by arguments.
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
      T extends CoverLetterGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CoverLetterGroupByArgs['orderBy'] }
        : { orderBy?: CoverLetterGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CoverLetterGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCoverLetterGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CoverLetter model
   */
  readonly fields: CoverLetterFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CoverLetter.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CoverLetterClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the CoverLetter model
   */
  interface CoverLetterFieldRefs {
    readonly id: FieldRef<"CoverLetter", 'String'>
    readonly userId: FieldRef<"CoverLetter", 'String'>
    readonly content: FieldRef<"CoverLetter", 'String'>
    readonly createdAt: FieldRef<"CoverLetter", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CoverLetter findUnique
   */
  export type CoverLetterFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoverLetter
     */
    select?: CoverLetterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CoverLetter
     */
    omit?: CoverLetterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoverLetterInclude<ExtArgs> | null
    /**
     * Filter, which CoverLetter to fetch.
     */
    where: CoverLetterWhereUniqueInput
  }

  /**
   * CoverLetter findUniqueOrThrow
   */
  export type CoverLetterFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoverLetter
     */
    select?: CoverLetterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CoverLetter
     */
    omit?: CoverLetterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoverLetterInclude<ExtArgs> | null
    /**
     * Filter, which CoverLetter to fetch.
     */
    where: CoverLetterWhereUniqueInput
  }

  /**
   * CoverLetter findFirst
   */
  export type CoverLetterFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoverLetter
     */
    select?: CoverLetterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CoverLetter
     */
    omit?: CoverLetterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoverLetterInclude<ExtArgs> | null
    /**
     * Filter, which CoverLetter to fetch.
     */
    where?: CoverLetterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CoverLetters to fetch.
     */
    orderBy?: CoverLetterOrderByWithRelationInput | CoverLetterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CoverLetters.
     */
    cursor?: CoverLetterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CoverLetters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CoverLetters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CoverLetters.
     */
    distinct?: CoverLetterScalarFieldEnum | CoverLetterScalarFieldEnum[]
  }

  /**
   * CoverLetter findFirstOrThrow
   */
  export type CoverLetterFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoverLetter
     */
    select?: CoverLetterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CoverLetter
     */
    omit?: CoverLetterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoverLetterInclude<ExtArgs> | null
    /**
     * Filter, which CoverLetter to fetch.
     */
    where?: CoverLetterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CoverLetters to fetch.
     */
    orderBy?: CoverLetterOrderByWithRelationInput | CoverLetterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CoverLetters.
     */
    cursor?: CoverLetterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CoverLetters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CoverLetters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CoverLetters.
     */
    distinct?: CoverLetterScalarFieldEnum | CoverLetterScalarFieldEnum[]
  }

  /**
   * CoverLetter findMany
   */
  export type CoverLetterFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoverLetter
     */
    select?: CoverLetterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CoverLetter
     */
    omit?: CoverLetterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoverLetterInclude<ExtArgs> | null
    /**
     * Filter, which CoverLetters to fetch.
     */
    where?: CoverLetterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CoverLetters to fetch.
     */
    orderBy?: CoverLetterOrderByWithRelationInput | CoverLetterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CoverLetters.
     */
    cursor?: CoverLetterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CoverLetters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CoverLetters.
     */
    skip?: number
    distinct?: CoverLetterScalarFieldEnum | CoverLetterScalarFieldEnum[]
  }

  /**
   * CoverLetter create
   */
  export type CoverLetterCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoverLetter
     */
    select?: CoverLetterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CoverLetter
     */
    omit?: CoverLetterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoverLetterInclude<ExtArgs> | null
    /**
     * The data needed to create a CoverLetter.
     */
    data: XOR<CoverLetterCreateInput, CoverLetterUncheckedCreateInput>
  }

  /**
   * CoverLetter createMany
   */
  export type CoverLetterCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CoverLetters.
     */
    data: CoverLetterCreateManyInput | CoverLetterCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CoverLetter createManyAndReturn
   */
  export type CoverLetterCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoverLetter
     */
    select?: CoverLetterSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CoverLetter
     */
    omit?: CoverLetterOmit<ExtArgs> | null
    /**
     * The data used to create many CoverLetters.
     */
    data: CoverLetterCreateManyInput | CoverLetterCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoverLetterIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CoverLetter update
   */
  export type CoverLetterUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoverLetter
     */
    select?: CoverLetterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CoverLetter
     */
    omit?: CoverLetterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoverLetterInclude<ExtArgs> | null
    /**
     * The data needed to update a CoverLetter.
     */
    data: XOR<CoverLetterUpdateInput, CoverLetterUncheckedUpdateInput>
    /**
     * Choose, which CoverLetter to update.
     */
    where: CoverLetterWhereUniqueInput
  }

  /**
   * CoverLetter updateMany
   */
  export type CoverLetterUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CoverLetters.
     */
    data: XOR<CoverLetterUpdateManyMutationInput, CoverLetterUncheckedUpdateManyInput>
    /**
     * Filter which CoverLetters to update
     */
    where?: CoverLetterWhereInput
    /**
     * Limit how many CoverLetters to update.
     */
    limit?: number
  }

  /**
   * CoverLetter updateManyAndReturn
   */
  export type CoverLetterUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoverLetter
     */
    select?: CoverLetterSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CoverLetter
     */
    omit?: CoverLetterOmit<ExtArgs> | null
    /**
     * The data used to update CoverLetters.
     */
    data: XOR<CoverLetterUpdateManyMutationInput, CoverLetterUncheckedUpdateManyInput>
    /**
     * Filter which CoverLetters to update
     */
    where?: CoverLetterWhereInput
    /**
     * Limit how many CoverLetters to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoverLetterIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * CoverLetter upsert
   */
  export type CoverLetterUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoverLetter
     */
    select?: CoverLetterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CoverLetter
     */
    omit?: CoverLetterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoverLetterInclude<ExtArgs> | null
    /**
     * The filter to search for the CoverLetter to update in case it exists.
     */
    where: CoverLetterWhereUniqueInput
    /**
     * In case the CoverLetter found by the `where` argument doesn't exist, create a new CoverLetter with this data.
     */
    create: XOR<CoverLetterCreateInput, CoverLetterUncheckedCreateInput>
    /**
     * In case the CoverLetter was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CoverLetterUpdateInput, CoverLetterUncheckedUpdateInput>
  }

  /**
   * CoverLetter delete
   */
  export type CoverLetterDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoverLetter
     */
    select?: CoverLetterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CoverLetter
     */
    omit?: CoverLetterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoverLetterInclude<ExtArgs> | null
    /**
     * Filter which CoverLetter to delete.
     */
    where: CoverLetterWhereUniqueInput
  }

  /**
   * CoverLetter deleteMany
   */
  export type CoverLetterDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CoverLetters to delete
     */
    where?: CoverLetterWhereInput
    /**
     * Limit how many CoverLetters to delete.
     */
    limit?: number
  }

  /**
   * CoverLetter without action
   */
  export type CoverLetterDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoverLetter
     */
    select?: CoverLetterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CoverLetter
     */
    omit?: CoverLetterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoverLetterInclude<ExtArgs> | null
  }


  /**
   * Model MockInterview
   */

  export type AggregateMockInterview = {
    _count: MockInterviewCountAggregateOutputType | null
    _min: MockInterviewMinAggregateOutputType | null
    _max: MockInterviewMaxAggregateOutputType | null
  }

  export type MockInterviewMinAggregateOutputType = {
    id: string | null
    userId: string | null
    feedback: string | null
    createdAt: Date | null
  }

  export type MockInterviewMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    feedback: string | null
    createdAt: Date | null
  }

  export type MockInterviewCountAggregateOutputType = {
    id: number
    userId: number
    questions: number
    feedback: number
    createdAt: number
    _all: number
  }


  export type MockInterviewMinAggregateInputType = {
    id?: true
    userId?: true
    feedback?: true
    createdAt?: true
  }

  export type MockInterviewMaxAggregateInputType = {
    id?: true
    userId?: true
    feedback?: true
    createdAt?: true
  }

  export type MockInterviewCountAggregateInputType = {
    id?: true
    userId?: true
    questions?: true
    feedback?: true
    createdAt?: true
    _all?: true
  }

  export type MockInterviewAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MockInterview to aggregate.
     */
    where?: MockInterviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MockInterviews to fetch.
     */
    orderBy?: MockInterviewOrderByWithRelationInput | MockInterviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MockInterviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MockInterviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MockInterviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MockInterviews
    **/
    _count?: true | MockInterviewCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MockInterviewMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MockInterviewMaxAggregateInputType
  }

  export type GetMockInterviewAggregateType<T extends MockInterviewAggregateArgs> = {
        [P in keyof T & keyof AggregateMockInterview]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMockInterview[P]>
      : GetScalarType<T[P], AggregateMockInterview[P]>
  }




  export type MockInterviewGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MockInterviewWhereInput
    orderBy?: MockInterviewOrderByWithAggregationInput | MockInterviewOrderByWithAggregationInput[]
    by: MockInterviewScalarFieldEnum[] | MockInterviewScalarFieldEnum
    having?: MockInterviewScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MockInterviewCountAggregateInputType | true
    _min?: MockInterviewMinAggregateInputType
    _max?: MockInterviewMaxAggregateInputType
  }

  export type MockInterviewGroupByOutputType = {
    id: string
    userId: string
    questions: JsonValue
    feedback: string | null
    createdAt: Date
    _count: MockInterviewCountAggregateOutputType | null
    _min: MockInterviewMinAggregateOutputType | null
    _max: MockInterviewMaxAggregateOutputType | null
  }

  type GetMockInterviewGroupByPayload<T extends MockInterviewGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MockInterviewGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MockInterviewGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MockInterviewGroupByOutputType[P]>
            : GetScalarType<T[P], MockInterviewGroupByOutputType[P]>
        }
      >
    >


  export type MockInterviewSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    questions?: boolean
    feedback?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mockInterview"]>

  export type MockInterviewSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    questions?: boolean
    feedback?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mockInterview"]>

  export type MockInterviewSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    questions?: boolean
    feedback?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mockInterview"]>

  export type MockInterviewSelectScalar = {
    id?: boolean
    userId?: boolean
    questions?: boolean
    feedback?: boolean
    createdAt?: boolean
  }

  export type MockInterviewOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "questions" | "feedback" | "createdAt", ExtArgs["result"]["mockInterview"]>
  export type MockInterviewInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type MockInterviewIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type MockInterviewIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $MockInterviewPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MockInterview"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      questions: Prisma.JsonValue
      feedback: string | null
      createdAt: Date
    }, ExtArgs["result"]["mockInterview"]>
    composites: {}
  }

  type MockInterviewGetPayload<S extends boolean | null | undefined | MockInterviewDefaultArgs> = $Result.GetResult<Prisma.$MockInterviewPayload, S>

  type MockInterviewCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MockInterviewFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MockInterviewCountAggregateInputType | true
    }

  export interface MockInterviewDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MockInterview'], meta: { name: 'MockInterview' } }
    /**
     * Find zero or one MockInterview that matches the filter.
     * @param {MockInterviewFindUniqueArgs} args - Arguments to find a MockInterview
     * @example
     * // Get one MockInterview
     * const mockInterview = await prisma.mockInterview.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MockInterviewFindUniqueArgs>(args: SelectSubset<T, MockInterviewFindUniqueArgs<ExtArgs>>): Prisma__MockInterviewClient<$Result.GetResult<Prisma.$MockInterviewPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MockInterview that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MockInterviewFindUniqueOrThrowArgs} args - Arguments to find a MockInterview
     * @example
     * // Get one MockInterview
     * const mockInterview = await prisma.mockInterview.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MockInterviewFindUniqueOrThrowArgs>(args: SelectSubset<T, MockInterviewFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MockInterviewClient<$Result.GetResult<Prisma.$MockInterviewPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MockInterview that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MockInterviewFindFirstArgs} args - Arguments to find a MockInterview
     * @example
     * // Get one MockInterview
     * const mockInterview = await prisma.mockInterview.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MockInterviewFindFirstArgs>(args?: SelectSubset<T, MockInterviewFindFirstArgs<ExtArgs>>): Prisma__MockInterviewClient<$Result.GetResult<Prisma.$MockInterviewPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MockInterview that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MockInterviewFindFirstOrThrowArgs} args - Arguments to find a MockInterview
     * @example
     * // Get one MockInterview
     * const mockInterview = await prisma.mockInterview.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MockInterviewFindFirstOrThrowArgs>(args?: SelectSubset<T, MockInterviewFindFirstOrThrowArgs<ExtArgs>>): Prisma__MockInterviewClient<$Result.GetResult<Prisma.$MockInterviewPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MockInterviews that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MockInterviewFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MockInterviews
     * const mockInterviews = await prisma.mockInterview.findMany()
     * 
     * // Get first 10 MockInterviews
     * const mockInterviews = await prisma.mockInterview.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const mockInterviewWithIdOnly = await prisma.mockInterview.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MockInterviewFindManyArgs>(args?: SelectSubset<T, MockInterviewFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MockInterviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MockInterview.
     * @param {MockInterviewCreateArgs} args - Arguments to create a MockInterview.
     * @example
     * // Create one MockInterview
     * const MockInterview = await prisma.mockInterview.create({
     *   data: {
     *     // ... data to create a MockInterview
     *   }
     * })
     * 
     */
    create<T extends MockInterviewCreateArgs>(args: SelectSubset<T, MockInterviewCreateArgs<ExtArgs>>): Prisma__MockInterviewClient<$Result.GetResult<Prisma.$MockInterviewPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MockInterviews.
     * @param {MockInterviewCreateManyArgs} args - Arguments to create many MockInterviews.
     * @example
     * // Create many MockInterviews
     * const mockInterview = await prisma.mockInterview.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MockInterviewCreateManyArgs>(args?: SelectSubset<T, MockInterviewCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MockInterviews and returns the data saved in the database.
     * @param {MockInterviewCreateManyAndReturnArgs} args - Arguments to create many MockInterviews.
     * @example
     * // Create many MockInterviews
     * const mockInterview = await prisma.mockInterview.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MockInterviews and only return the `id`
     * const mockInterviewWithIdOnly = await prisma.mockInterview.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MockInterviewCreateManyAndReturnArgs>(args?: SelectSubset<T, MockInterviewCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MockInterviewPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MockInterview.
     * @param {MockInterviewDeleteArgs} args - Arguments to delete one MockInterview.
     * @example
     * // Delete one MockInterview
     * const MockInterview = await prisma.mockInterview.delete({
     *   where: {
     *     // ... filter to delete one MockInterview
     *   }
     * })
     * 
     */
    delete<T extends MockInterviewDeleteArgs>(args: SelectSubset<T, MockInterviewDeleteArgs<ExtArgs>>): Prisma__MockInterviewClient<$Result.GetResult<Prisma.$MockInterviewPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MockInterview.
     * @param {MockInterviewUpdateArgs} args - Arguments to update one MockInterview.
     * @example
     * // Update one MockInterview
     * const mockInterview = await prisma.mockInterview.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MockInterviewUpdateArgs>(args: SelectSubset<T, MockInterviewUpdateArgs<ExtArgs>>): Prisma__MockInterviewClient<$Result.GetResult<Prisma.$MockInterviewPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MockInterviews.
     * @param {MockInterviewDeleteManyArgs} args - Arguments to filter MockInterviews to delete.
     * @example
     * // Delete a few MockInterviews
     * const { count } = await prisma.mockInterview.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MockInterviewDeleteManyArgs>(args?: SelectSubset<T, MockInterviewDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MockInterviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MockInterviewUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MockInterviews
     * const mockInterview = await prisma.mockInterview.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MockInterviewUpdateManyArgs>(args: SelectSubset<T, MockInterviewUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MockInterviews and returns the data updated in the database.
     * @param {MockInterviewUpdateManyAndReturnArgs} args - Arguments to update many MockInterviews.
     * @example
     * // Update many MockInterviews
     * const mockInterview = await prisma.mockInterview.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MockInterviews and only return the `id`
     * const mockInterviewWithIdOnly = await prisma.mockInterview.updateManyAndReturn({
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
    updateManyAndReturn<T extends MockInterviewUpdateManyAndReturnArgs>(args: SelectSubset<T, MockInterviewUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MockInterviewPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MockInterview.
     * @param {MockInterviewUpsertArgs} args - Arguments to update or create a MockInterview.
     * @example
     * // Update or create a MockInterview
     * const mockInterview = await prisma.mockInterview.upsert({
     *   create: {
     *     // ... data to create a MockInterview
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MockInterview we want to update
     *   }
     * })
     */
    upsert<T extends MockInterviewUpsertArgs>(args: SelectSubset<T, MockInterviewUpsertArgs<ExtArgs>>): Prisma__MockInterviewClient<$Result.GetResult<Prisma.$MockInterviewPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MockInterviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MockInterviewCountArgs} args - Arguments to filter MockInterviews to count.
     * @example
     * // Count the number of MockInterviews
     * const count = await prisma.mockInterview.count({
     *   where: {
     *     // ... the filter for the MockInterviews we want to count
     *   }
     * })
    **/
    count<T extends MockInterviewCountArgs>(
      args?: Subset<T, MockInterviewCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MockInterviewCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MockInterview.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MockInterviewAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MockInterviewAggregateArgs>(args: Subset<T, MockInterviewAggregateArgs>): Prisma.PrismaPromise<GetMockInterviewAggregateType<T>>

    /**
     * Group by MockInterview.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MockInterviewGroupByArgs} args - Group by arguments.
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
      T extends MockInterviewGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MockInterviewGroupByArgs['orderBy'] }
        : { orderBy?: MockInterviewGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MockInterviewGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMockInterviewGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MockInterview model
   */
  readonly fields: MockInterviewFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MockInterview.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MockInterviewClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the MockInterview model
   */
  interface MockInterviewFieldRefs {
    readonly id: FieldRef<"MockInterview", 'String'>
    readonly userId: FieldRef<"MockInterview", 'String'>
    readonly questions: FieldRef<"MockInterview", 'Json'>
    readonly feedback: FieldRef<"MockInterview", 'String'>
    readonly createdAt: FieldRef<"MockInterview", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * MockInterview findUnique
   */
  export type MockInterviewFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MockInterview
     */
    select?: MockInterviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MockInterview
     */
    omit?: MockInterviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MockInterviewInclude<ExtArgs> | null
    /**
     * Filter, which MockInterview to fetch.
     */
    where: MockInterviewWhereUniqueInput
  }

  /**
   * MockInterview findUniqueOrThrow
   */
  export type MockInterviewFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MockInterview
     */
    select?: MockInterviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MockInterview
     */
    omit?: MockInterviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MockInterviewInclude<ExtArgs> | null
    /**
     * Filter, which MockInterview to fetch.
     */
    where: MockInterviewWhereUniqueInput
  }

  /**
   * MockInterview findFirst
   */
  export type MockInterviewFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MockInterview
     */
    select?: MockInterviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MockInterview
     */
    omit?: MockInterviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MockInterviewInclude<ExtArgs> | null
    /**
     * Filter, which MockInterview to fetch.
     */
    where?: MockInterviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MockInterviews to fetch.
     */
    orderBy?: MockInterviewOrderByWithRelationInput | MockInterviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MockInterviews.
     */
    cursor?: MockInterviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MockInterviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MockInterviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MockInterviews.
     */
    distinct?: MockInterviewScalarFieldEnum | MockInterviewScalarFieldEnum[]
  }

  /**
   * MockInterview findFirstOrThrow
   */
  export type MockInterviewFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MockInterview
     */
    select?: MockInterviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MockInterview
     */
    omit?: MockInterviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MockInterviewInclude<ExtArgs> | null
    /**
     * Filter, which MockInterview to fetch.
     */
    where?: MockInterviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MockInterviews to fetch.
     */
    orderBy?: MockInterviewOrderByWithRelationInput | MockInterviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MockInterviews.
     */
    cursor?: MockInterviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MockInterviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MockInterviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MockInterviews.
     */
    distinct?: MockInterviewScalarFieldEnum | MockInterviewScalarFieldEnum[]
  }

  /**
   * MockInterview findMany
   */
  export type MockInterviewFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MockInterview
     */
    select?: MockInterviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MockInterview
     */
    omit?: MockInterviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MockInterviewInclude<ExtArgs> | null
    /**
     * Filter, which MockInterviews to fetch.
     */
    where?: MockInterviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MockInterviews to fetch.
     */
    orderBy?: MockInterviewOrderByWithRelationInput | MockInterviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MockInterviews.
     */
    cursor?: MockInterviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MockInterviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MockInterviews.
     */
    skip?: number
    distinct?: MockInterviewScalarFieldEnum | MockInterviewScalarFieldEnum[]
  }

  /**
   * MockInterview create
   */
  export type MockInterviewCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MockInterview
     */
    select?: MockInterviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MockInterview
     */
    omit?: MockInterviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MockInterviewInclude<ExtArgs> | null
    /**
     * The data needed to create a MockInterview.
     */
    data: XOR<MockInterviewCreateInput, MockInterviewUncheckedCreateInput>
  }

  /**
   * MockInterview createMany
   */
  export type MockInterviewCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MockInterviews.
     */
    data: MockInterviewCreateManyInput | MockInterviewCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MockInterview createManyAndReturn
   */
  export type MockInterviewCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MockInterview
     */
    select?: MockInterviewSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MockInterview
     */
    omit?: MockInterviewOmit<ExtArgs> | null
    /**
     * The data used to create many MockInterviews.
     */
    data: MockInterviewCreateManyInput | MockInterviewCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MockInterviewIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * MockInterview update
   */
  export type MockInterviewUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MockInterview
     */
    select?: MockInterviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MockInterview
     */
    omit?: MockInterviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MockInterviewInclude<ExtArgs> | null
    /**
     * The data needed to update a MockInterview.
     */
    data: XOR<MockInterviewUpdateInput, MockInterviewUncheckedUpdateInput>
    /**
     * Choose, which MockInterview to update.
     */
    where: MockInterviewWhereUniqueInput
  }

  /**
   * MockInterview updateMany
   */
  export type MockInterviewUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MockInterviews.
     */
    data: XOR<MockInterviewUpdateManyMutationInput, MockInterviewUncheckedUpdateManyInput>
    /**
     * Filter which MockInterviews to update
     */
    where?: MockInterviewWhereInput
    /**
     * Limit how many MockInterviews to update.
     */
    limit?: number
  }

  /**
   * MockInterview updateManyAndReturn
   */
  export type MockInterviewUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MockInterview
     */
    select?: MockInterviewSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MockInterview
     */
    omit?: MockInterviewOmit<ExtArgs> | null
    /**
     * The data used to update MockInterviews.
     */
    data: XOR<MockInterviewUpdateManyMutationInput, MockInterviewUncheckedUpdateManyInput>
    /**
     * Filter which MockInterviews to update
     */
    where?: MockInterviewWhereInput
    /**
     * Limit how many MockInterviews to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MockInterviewIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * MockInterview upsert
   */
  export type MockInterviewUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MockInterview
     */
    select?: MockInterviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MockInterview
     */
    omit?: MockInterviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MockInterviewInclude<ExtArgs> | null
    /**
     * The filter to search for the MockInterview to update in case it exists.
     */
    where: MockInterviewWhereUniqueInput
    /**
     * In case the MockInterview found by the `where` argument doesn't exist, create a new MockInterview with this data.
     */
    create: XOR<MockInterviewCreateInput, MockInterviewUncheckedCreateInput>
    /**
     * In case the MockInterview was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MockInterviewUpdateInput, MockInterviewUncheckedUpdateInput>
  }

  /**
   * MockInterview delete
   */
  export type MockInterviewDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MockInterview
     */
    select?: MockInterviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MockInterview
     */
    omit?: MockInterviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MockInterviewInclude<ExtArgs> | null
    /**
     * Filter which MockInterview to delete.
     */
    where: MockInterviewWhereUniqueInput
  }

  /**
   * MockInterview deleteMany
   */
  export type MockInterviewDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MockInterviews to delete
     */
    where?: MockInterviewWhereInput
    /**
     * Limit how many MockInterviews to delete.
     */
    limit?: number
  }

  /**
   * MockInterview without action
   */
  export type MockInterviewDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MockInterview
     */
    select?: MockInterviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MockInterview
     */
    omit?: MockInterviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MockInterviewInclude<ExtArgs> | null
  }


  /**
   * Model SkillGapAnalysis
   */

  export type AggregateSkillGapAnalysis = {
    _count: SkillGapAnalysisCountAggregateOutputType | null
    _min: SkillGapAnalysisMinAggregateOutputType | null
    _max: SkillGapAnalysisMaxAggregateOutputType | null
  }

  export type SkillGapAnalysisMinAggregateOutputType = {
    id: string | null
    userId: string | null
    createdAt: Date | null
  }

  export type SkillGapAnalysisMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    createdAt: Date | null
  }

  export type SkillGapAnalysisCountAggregateOutputType = {
    id: number
    userId: number
    currentSkills: number
    requiredSkills: number
    gaps: number
    recommendations: number
    createdAt: number
    _all: number
  }


  export type SkillGapAnalysisMinAggregateInputType = {
    id?: true
    userId?: true
    createdAt?: true
  }

  export type SkillGapAnalysisMaxAggregateInputType = {
    id?: true
    userId?: true
    createdAt?: true
  }

  export type SkillGapAnalysisCountAggregateInputType = {
    id?: true
    userId?: true
    currentSkills?: true
    requiredSkills?: true
    gaps?: true
    recommendations?: true
    createdAt?: true
    _all?: true
  }

  export type SkillGapAnalysisAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SkillGapAnalysis to aggregate.
     */
    where?: SkillGapAnalysisWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SkillGapAnalyses to fetch.
     */
    orderBy?: SkillGapAnalysisOrderByWithRelationInput | SkillGapAnalysisOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SkillGapAnalysisWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SkillGapAnalyses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SkillGapAnalyses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SkillGapAnalyses
    **/
    _count?: true | SkillGapAnalysisCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SkillGapAnalysisMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SkillGapAnalysisMaxAggregateInputType
  }

  export type GetSkillGapAnalysisAggregateType<T extends SkillGapAnalysisAggregateArgs> = {
        [P in keyof T & keyof AggregateSkillGapAnalysis]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSkillGapAnalysis[P]>
      : GetScalarType<T[P], AggregateSkillGapAnalysis[P]>
  }




  export type SkillGapAnalysisGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SkillGapAnalysisWhereInput
    orderBy?: SkillGapAnalysisOrderByWithAggregationInput | SkillGapAnalysisOrderByWithAggregationInput[]
    by: SkillGapAnalysisScalarFieldEnum[] | SkillGapAnalysisScalarFieldEnum
    having?: SkillGapAnalysisScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SkillGapAnalysisCountAggregateInputType | true
    _min?: SkillGapAnalysisMinAggregateInputType
    _max?: SkillGapAnalysisMaxAggregateInputType
  }

  export type SkillGapAnalysisGroupByOutputType = {
    id: string
    userId: string
    currentSkills: string[]
    requiredSkills: string[]
    gaps: string[]
    recommendations: string[]
    createdAt: Date
    _count: SkillGapAnalysisCountAggregateOutputType | null
    _min: SkillGapAnalysisMinAggregateOutputType | null
    _max: SkillGapAnalysisMaxAggregateOutputType | null
  }

  type GetSkillGapAnalysisGroupByPayload<T extends SkillGapAnalysisGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SkillGapAnalysisGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SkillGapAnalysisGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SkillGapAnalysisGroupByOutputType[P]>
            : GetScalarType<T[P], SkillGapAnalysisGroupByOutputType[P]>
        }
      >
    >


  export type SkillGapAnalysisSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    currentSkills?: boolean
    requiredSkills?: boolean
    gaps?: boolean
    recommendations?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["skillGapAnalysis"]>

  export type SkillGapAnalysisSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    currentSkills?: boolean
    requiredSkills?: boolean
    gaps?: boolean
    recommendations?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["skillGapAnalysis"]>

  export type SkillGapAnalysisSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    currentSkills?: boolean
    requiredSkills?: boolean
    gaps?: boolean
    recommendations?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["skillGapAnalysis"]>

  export type SkillGapAnalysisSelectScalar = {
    id?: boolean
    userId?: boolean
    currentSkills?: boolean
    requiredSkills?: boolean
    gaps?: boolean
    recommendations?: boolean
    createdAt?: boolean
  }

  export type SkillGapAnalysisOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "currentSkills" | "requiredSkills" | "gaps" | "recommendations" | "createdAt", ExtArgs["result"]["skillGapAnalysis"]>
  export type SkillGapAnalysisInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SkillGapAnalysisIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SkillGapAnalysisIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $SkillGapAnalysisPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SkillGapAnalysis"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      currentSkills: string[]
      requiredSkills: string[]
      gaps: string[]
      recommendations: string[]
      createdAt: Date
    }, ExtArgs["result"]["skillGapAnalysis"]>
    composites: {}
  }

  type SkillGapAnalysisGetPayload<S extends boolean | null | undefined | SkillGapAnalysisDefaultArgs> = $Result.GetResult<Prisma.$SkillGapAnalysisPayload, S>

  type SkillGapAnalysisCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SkillGapAnalysisFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SkillGapAnalysisCountAggregateInputType | true
    }

  export interface SkillGapAnalysisDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SkillGapAnalysis'], meta: { name: 'SkillGapAnalysis' } }
    /**
     * Find zero or one SkillGapAnalysis that matches the filter.
     * @param {SkillGapAnalysisFindUniqueArgs} args - Arguments to find a SkillGapAnalysis
     * @example
     * // Get one SkillGapAnalysis
     * const skillGapAnalysis = await prisma.skillGapAnalysis.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SkillGapAnalysisFindUniqueArgs>(args: SelectSubset<T, SkillGapAnalysisFindUniqueArgs<ExtArgs>>): Prisma__SkillGapAnalysisClient<$Result.GetResult<Prisma.$SkillGapAnalysisPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SkillGapAnalysis that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SkillGapAnalysisFindUniqueOrThrowArgs} args - Arguments to find a SkillGapAnalysis
     * @example
     * // Get one SkillGapAnalysis
     * const skillGapAnalysis = await prisma.skillGapAnalysis.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SkillGapAnalysisFindUniqueOrThrowArgs>(args: SelectSubset<T, SkillGapAnalysisFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SkillGapAnalysisClient<$Result.GetResult<Prisma.$SkillGapAnalysisPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SkillGapAnalysis that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillGapAnalysisFindFirstArgs} args - Arguments to find a SkillGapAnalysis
     * @example
     * // Get one SkillGapAnalysis
     * const skillGapAnalysis = await prisma.skillGapAnalysis.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SkillGapAnalysisFindFirstArgs>(args?: SelectSubset<T, SkillGapAnalysisFindFirstArgs<ExtArgs>>): Prisma__SkillGapAnalysisClient<$Result.GetResult<Prisma.$SkillGapAnalysisPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SkillGapAnalysis that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillGapAnalysisFindFirstOrThrowArgs} args - Arguments to find a SkillGapAnalysis
     * @example
     * // Get one SkillGapAnalysis
     * const skillGapAnalysis = await prisma.skillGapAnalysis.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SkillGapAnalysisFindFirstOrThrowArgs>(args?: SelectSubset<T, SkillGapAnalysisFindFirstOrThrowArgs<ExtArgs>>): Prisma__SkillGapAnalysisClient<$Result.GetResult<Prisma.$SkillGapAnalysisPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SkillGapAnalyses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillGapAnalysisFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SkillGapAnalyses
     * const skillGapAnalyses = await prisma.skillGapAnalysis.findMany()
     * 
     * // Get first 10 SkillGapAnalyses
     * const skillGapAnalyses = await prisma.skillGapAnalysis.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const skillGapAnalysisWithIdOnly = await prisma.skillGapAnalysis.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SkillGapAnalysisFindManyArgs>(args?: SelectSubset<T, SkillGapAnalysisFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SkillGapAnalysisPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SkillGapAnalysis.
     * @param {SkillGapAnalysisCreateArgs} args - Arguments to create a SkillGapAnalysis.
     * @example
     * // Create one SkillGapAnalysis
     * const SkillGapAnalysis = await prisma.skillGapAnalysis.create({
     *   data: {
     *     // ... data to create a SkillGapAnalysis
     *   }
     * })
     * 
     */
    create<T extends SkillGapAnalysisCreateArgs>(args: SelectSubset<T, SkillGapAnalysisCreateArgs<ExtArgs>>): Prisma__SkillGapAnalysisClient<$Result.GetResult<Prisma.$SkillGapAnalysisPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SkillGapAnalyses.
     * @param {SkillGapAnalysisCreateManyArgs} args - Arguments to create many SkillGapAnalyses.
     * @example
     * // Create many SkillGapAnalyses
     * const skillGapAnalysis = await prisma.skillGapAnalysis.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SkillGapAnalysisCreateManyArgs>(args?: SelectSubset<T, SkillGapAnalysisCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SkillGapAnalyses and returns the data saved in the database.
     * @param {SkillGapAnalysisCreateManyAndReturnArgs} args - Arguments to create many SkillGapAnalyses.
     * @example
     * // Create many SkillGapAnalyses
     * const skillGapAnalysis = await prisma.skillGapAnalysis.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SkillGapAnalyses and only return the `id`
     * const skillGapAnalysisWithIdOnly = await prisma.skillGapAnalysis.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SkillGapAnalysisCreateManyAndReturnArgs>(args?: SelectSubset<T, SkillGapAnalysisCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SkillGapAnalysisPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SkillGapAnalysis.
     * @param {SkillGapAnalysisDeleteArgs} args - Arguments to delete one SkillGapAnalysis.
     * @example
     * // Delete one SkillGapAnalysis
     * const SkillGapAnalysis = await prisma.skillGapAnalysis.delete({
     *   where: {
     *     // ... filter to delete one SkillGapAnalysis
     *   }
     * })
     * 
     */
    delete<T extends SkillGapAnalysisDeleteArgs>(args: SelectSubset<T, SkillGapAnalysisDeleteArgs<ExtArgs>>): Prisma__SkillGapAnalysisClient<$Result.GetResult<Prisma.$SkillGapAnalysisPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SkillGapAnalysis.
     * @param {SkillGapAnalysisUpdateArgs} args - Arguments to update one SkillGapAnalysis.
     * @example
     * // Update one SkillGapAnalysis
     * const skillGapAnalysis = await prisma.skillGapAnalysis.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SkillGapAnalysisUpdateArgs>(args: SelectSubset<T, SkillGapAnalysisUpdateArgs<ExtArgs>>): Prisma__SkillGapAnalysisClient<$Result.GetResult<Prisma.$SkillGapAnalysisPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SkillGapAnalyses.
     * @param {SkillGapAnalysisDeleteManyArgs} args - Arguments to filter SkillGapAnalyses to delete.
     * @example
     * // Delete a few SkillGapAnalyses
     * const { count } = await prisma.skillGapAnalysis.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SkillGapAnalysisDeleteManyArgs>(args?: SelectSubset<T, SkillGapAnalysisDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SkillGapAnalyses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillGapAnalysisUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SkillGapAnalyses
     * const skillGapAnalysis = await prisma.skillGapAnalysis.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SkillGapAnalysisUpdateManyArgs>(args: SelectSubset<T, SkillGapAnalysisUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SkillGapAnalyses and returns the data updated in the database.
     * @param {SkillGapAnalysisUpdateManyAndReturnArgs} args - Arguments to update many SkillGapAnalyses.
     * @example
     * // Update many SkillGapAnalyses
     * const skillGapAnalysis = await prisma.skillGapAnalysis.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SkillGapAnalyses and only return the `id`
     * const skillGapAnalysisWithIdOnly = await prisma.skillGapAnalysis.updateManyAndReturn({
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
    updateManyAndReturn<T extends SkillGapAnalysisUpdateManyAndReturnArgs>(args: SelectSubset<T, SkillGapAnalysisUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SkillGapAnalysisPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SkillGapAnalysis.
     * @param {SkillGapAnalysisUpsertArgs} args - Arguments to update or create a SkillGapAnalysis.
     * @example
     * // Update or create a SkillGapAnalysis
     * const skillGapAnalysis = await prisma.skillGapAnalysis.upsert({
     *   create: {
     *     // ... data to create a SkillGapAnalysis
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SkillGapAnalysis we want to update
     *   }
     * })
     */
    upsert<T extends SkillGapAnalysisUpsertArgs>(args: SelectSubset<T, SkillGapAnalysisUpsertArgs<ExtArgs>>): Prisma__SkillGapAnalysisClient<$Result.GetResult<Prisma.$SkillGapAnalysisPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SkillGapAnalyses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillGapAnalysisCountArgs} args - Arguments to filter SkillGapAnalyses to count.
     * @example
     * // Count the number of SkillGapAnalyses
     * const count = await prisma.skillGapAnalysis.count({
     *   where: {
     *     // ... the filter for the SkillGapAnalyses we want to count
     *   }
     * })
    **/
    count<T extends SkillGapAnalysisCountArgs>(
      args?: Subset<T, SkillGapAnalysisCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SkillGapAnalysisCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SkillGapAnalysis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillGapAnalysisAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SkillGapAnalysisAggregateArgs>(args: Subset<T, SkillGapAnalysisAggregateArgs>): Prisma.PrismaPromise<GetSkillGapAnalysisAggregateType<T>>

    /**
     * Group by SkillGapAnalysis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillGapAnalysisGroupByArgs} args - Group by arguments.
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
      T extends SkillGapAnalysisGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SkillGapAnalysisGroupByArgs['orderBy'] }
        : { orderBy?: SkillGapAnalysisGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SkillGapAnalysisGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSkillGapAnalysisGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SkillGapAnalysis model
   */
  readonly fields: SkillGapAnalysisFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SkillGapAnalysis.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SkillGapAnalysisClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the SkillGapAnalysis model
   */
  interface SkillGapAnalysisFieldRefs {
    readonly id: FieldRef<"SkillGapAnalysis", 'String'>
    readonly userId: FieldRef<"SkillGapAnalysis", 'String'>
    readonly currentSkills: FieldRef<"SkillGapAnalysis", 'String[]'>
    readonly requiredSkills: FieldRef<"SkillGapAnalysis", 'String[]'>
    readonly gaps: FieldRef<"SkillGapAnalysis", 'String[]'>
    readonly recommendations: FieldRef<"SkillGapAnalysis", 'String[]'>
    readonly createdAt: FieldRef<"SkillGapAnalysis", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SkillGapAnalysis findUnique
   */
  export type SkillGapAnalysisFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SkillGapAnalysis
     */
    select?: SkillGapAnalysisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SkillGapAnalysis
     */
    omit?: SkillGapAnalysisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillGapAnalysisInclude<ExtArgs> | null
    /**
     * Filter, which SkillGapAnalysis to fetch.
     */
    where: SkillGapAnalysisWhereUniqueInput
  }

  /**
   * SkillGapAnalysis findUniqueOrThrow
   */
  export type SkillGapAnalysisFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SkillGapAnalysis
     */
    select?: SkillGapAnalysisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SkillGapAnalysis
     */
    omit?: SkillGapAnalysisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillGapAnalysisInclude<ExtArgs> | null
    /**
     * Filter, which SkillGapAnalysis to fetch.
     */
    where: SkillGapAnalysisWhereUniqueInput
  }

  /**
   * SkillGapAnalysis findFirst
   */
  export type SkillGapAnalysisFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SkillGapAnalysis
     */
    select?: SkillGapAnalysisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SkillGapAnalysis
     */
    omit?: SkillGapAnalysisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillGapAnalysisInclude<ExtArgs> | null
    /**
     * Filter, which SkillGapAnalysis to fetch.
     */
    where?: SkillGapAnalysisWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SkillGapAnalyses to fetch.
     */
    orderBy?: SkillGapAnalysisOrderByWithRelationInput | SkillGapAnalysisOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SkillGapAnalyses.
     */
    cursor?: SkillGapAnalysisWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SkillGapAnalyses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SkillGapAnalyses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SkillGapAnalyses.
     */
    distinct?: SkillGapAnalysisScalarFieldEnum | SkillGapAnalysisScalarFieldEnum[]
  }

  /**
   * SkillGapAnalysis findFirstOrThrow
   */
  export type SkillGapAnalysisFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SkillGapAnalysis
     */
    select?: SkillGapAnalysisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SkillGapAnalysis
     */
    omit?: SkillGapAnalysisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillGapAnalysisInclude<ExtArgs> | null
    /**
     * Filter, which SkillGapAnalysis to fetch.
     */
    where?: SkillGapAnalysisWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SkillGapAnalyses to fetch.
     */
    orderBy?: SkillGapAnalysisOrderByWithRelationInput | SkillGapAnalysisOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SkillGapAnalyses.
     */
    cursor?: SkillGapAnalysisWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SkillGapAnalyses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SkillGapAnalyses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SkillGapAnalyses.
     */
    distinct?: SkillGapAnalysisScalarFieldEnum | SkillGapAnalysisScalarFieldEnum[]
  }

  /**
   * SkillGapAnalysis findMany
   */
  export type SkillGapAnalysisFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SkillGapAnalysis
     */
    select?: SkillGapAnalysisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SkillGapAnalysis
     */
    omit?: SkillGapAnalysisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillGapAnalysisInclude<ExtArgs> | null
    /**
     * Filter, which SkillGapAnalyses to fetch.
     */
    where?: SkillGapAnalysisWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SkillGapAnalyses to fetch.
     */
    orderBy?: SkillGapAnalysisOrderByWithRelationInput | SkillGapAnalysisOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SkillGapAnalyses.
     */
    cursor?: SkillGapAnalysisWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SkillGapAnalyses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SkillGapAnalyses.
     */
    skip?: number
    distinct?: SkillGapAnalysisScalarFieldEnum | SkillGapAnalysisScalarFieldEnum[]
  }

  /**
   * SkillGapAnalysis create
   */
  export type SkillGapAnalysisCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SkillGapAnalysis
     */
    select?: SkillGapAnalysisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SkillGapAnalysis
     */
    omit?: SkillGapAnalysisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillGapAnalysisInclude<ExtArgs> | null
    /**
     * The data needed to create a SkillGapAnalysis.
     */
    data: XOR<SkillGapAnalysisCreateInput, SkillGapAnalysisUncheckedCreateInput>
  }

  /**
   * SkillGapAnalysis createMany
   */
  export type SkillGapAnalysisCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SkillGapAnalyses.
     */
    data: SkillGapAnalysisCreateManyInput | SkillGapAnalysisCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SkillGapAnalysis createManyAndReturn
   */
  export type SkillGapAnalysisCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SkillGapAnalysis
     */
    select?: SkillGapAnalysisSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SkillGapAnalysis
     */
    omit?: SkillGapAnalysisOmit<ExtArgs> | null
    /**
     * The data used to create many SkillGapAnalyses.
     */
    data: SkillGapAnalysisCreateManyInput | SkillGapAnalysisCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillGapAnalysisIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SkillGapAnalysis update
   */
  export type SkillGapAnalysisUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SkillGapAnalysis
     */
    select?: SkillGapAnalysisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SkillGapAnalysis
     */
    omit?: SkillGapAnalysisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillGapAnalysisInclude<ExtArgs> | null
    /**
     * The data needed to update a SkillGapAnalysis.
     */
    data: XOR<SkillGapAnalysisUpdateInput, SkillGapAnalysisUncheckedUpdateInput>
    /**
     * Choose, which SkillGapAnalysis to update.
     */
    where: SkillGapAnalysisWhereUniqueInput
  }

  /**
   * SkillGapAnalysis updateMany
   */
  export type SkillGapAnalysisUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SkillGapAnalyses.
     */
    data: XOR<SkillGapAnalysisUpdateManyMutationInput, SkillGapAnalysisUncheckedUpdateManyInput>
    /**
     * Filter which SkillGapAnalyses to update
     */
    where?: SkillGapAnalysisWhereInput
    /**
     * Limit how many SkillGapAnalyses to update.
     */
    limit?: number
  }

  /**
   * SkillGapAnalysis updateManyAndReturn
   */
  export type SkillGapAnalysisUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SkillGapAnalysis
     */
    select?: SkillGapAnalysisSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SkillGapAnalysis
     */
    omit?: SkillGapAnalysisOmit<ExtArgs> | null
    /**
     * The data used to update SkillGapAnalyses.
     */
    data: XOR<SkillGapAnalysisUpdateManyMutationInput, SkillGapAnalysisUncheckedUpdateManyInput>
    /**
     * Filter which SkillGapAnalyses to update
     */
    where?: SkillGapAnalysisWhereInput
    /**
     * Limit how many SkillGapAnalyses to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillGapAnalysisIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * SkillGapAnalysis upsert
   */
  export type SkillGapAnalysisUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SkillGapAnalysis
     */
    select?: SkillGapAnalysisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SkillGapAnalysis
     */
    omit?: SkillGapAnalysisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillGapAnalysisInclude<ExtArgs> | null
    /**
     * The filter to search for the SkillGapAnalysis to update in case it exists.
     */
    where: SkillGapAnalysisWhereUniqueInput
    /**
     * In case the SkillGapAnalysis found by the `where` argument doesn't exist, create a new SkillGapAnalysis with this data.
     */
    create: XOR<SkillGapAnalysisCreateInput, SkillGapAnalysisUncheckedCreateInput>
    /**
     * In case the SkillGapAnalysis was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SkillGapAnalysisUpdateInput, SkillGapAnalysisUncheckedUpdateInput>
  }

  /**
   * SkillGapAnalysis delete
   */
  export type SkillGapAnalysisDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SkillGapAnalysis
     */
    select?: SkillGapAnalysisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SkillGapAnalysis
     */
    omit?: SkillGapAnalysisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillGapAnalysisInclude<ExtArgs> | null
    /**
     * Filter which SkillGapAnalysis to delete.
     */
    where: SkillGapAnalysisWhereUniqueInput
  }

  /**
   * SkillGapAnalysis deleteMany
   */
  export type SkillGapAnalysisDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SkillGapAnalyses to delete
     */
    where?: SkillGapAnalysisWhereInput
    /**
     * Limit how many SkillGapAnalyses to delete.
     */
    limit?: number
  }

  /**
   * SkillGapAnalysis without action
   */
  export type SkillGapAnalysisDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SkillGapAnalysis
     */
    select?: SkillGapAnalysisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SkillGapAnalysis
     */
    omit?: SkillGapAnalysisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillGapAnalysisInclude<ExtArgs> | null
  }


  /**
   * Model IndustryInsight
   */

  export type AggregateIndustryInsight = {
    _count: IndustryInsightCountAggregateOutputType | null
    _avg: IndustryInsightAvgAggregateOutputType | null
    _sum: IndustryInsightSumAggregateOutputType | null
    _min: IndustryInsightMinAggregateOutputType | null
    _max: IndustryInsightMaxAggregateOutputType | null
  }

  export type IndustryInsightAvgAggregateOutputType = {
    growthRate: number | null
  }

  export type IndustryInsightSumAggregateOutputType = {
    growthRate: number | null
  }

  export type IndustryInsightMinAggregateOutputType = {
    id: string | null
    industry: string | null
    growthRate: number | null
    demandLevel: string | null
    marketOutlook: string | null
    lastUpdated: Date | null
    nextUpdate: Date | null
  }

  export type IndustryInsightMaxAggregateOutputType = {
    id: string | null
    industry: string | null
    growthRate: number | null
    demandLevel: string | null
    marketOutlook: string | null
    lastUpdated: Date | null
    nextUpdate: Date | null
  }

  export type IndustryInsightCountAggregateOutputType = {
    id: number
    industry: number
    salaryRanges: number
    growthRate: number
    demandLevel: number
    topSkills: number
    marketOutlook: number
    keyTrends: number
    recommendedSkills: number
    lastUpdated: number
    nextUpdate: number
    _all: number
  }


  export type IndustryInsightAvgAggregateInputType = {
    growthRate?: true
  }

  export type IndustryInsightSumAggregateInputType = {
    growthRate?: true
  }

  export type IndustryInsightMinAggregateInputType = {
    id?: true
    industry?: true
    growthRate?: true
    demandLevel?: true
    marketOutlook?: true
    lastUpdated?: true
    nextUpdate?: true
  }

  export type IndustryInsightMaxAggregateInputType = {
    id?: true
    industry?: true
    growthRate?: true
    demandLevel?: true
    marketOutlook?: true
    lastUpdated?: true
    nextUpdate?: true
  }

  export type IndustryInsightCountAggregateInputType = {
    id?: true
    industry?: true
    salaryRanges?: true
    growthRate?: true
    demandLevel?: true
    topSkills?: true
    marketOutlook?: true
    keyTrends?: true
    recommendedSkills?: true
    lastUpdated?: true
    nextUpdate?: true
    _all?: true
  }

  export type IndustryInsightAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which IndustryInsight to aggregate.
     */
    where?: IndustryInsightWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IndustryInsights to fetch.
     */
    orderBy?: IndustryInsightOrderByWithRelationInput | IndustryInsightOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: IndustryInsightWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IndustryInsights from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IndustryInsights.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned IndustryInsights
    **/
    _count?: true | IndustryInsightCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: IndustryInsightAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: IndustryInsightSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: IndustryInsightMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: IndustryInsightMaxAggregateInputType
  }

  export type GetIndustryInsightAggregateType<T extends IndustryInsightAggregateArgs> = {
        [P in keyof T & keyof AggregateIndustryInsight]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateIndustryInsight[P]>
      : GetScalarType<T[P], AggregateIndustryInsight[P]>
  }




  export type IndustryInsightGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: IndustryInsightWhereInput
    orderBy?: IndustryInsightOrderByWithAggregationInput | IndustryInsightOrderByWithAggregationInput[]
    by: IndustryInsightScalarFieldEnum[] | IndustryInsightScalarFieldEnum
    having?: IndustryInsightScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: IndustryInsightCountAggregateInputType | true
    _avg?: IndustryInsightAvgAggregateInputType
    _sum?: IndustryInsightSumAggregateInputType
    _min?: IndustryInsightMinAggregateInputType
    _max?: IndustryInsightMaxAggregateInputType
  }

  export type IndustryInsightGroupByOutputType = {
    id: string
    industry: string
    salaryRanges: JsonValue[]
    growthRate: number
    demandLevel: string
    topSkills: string[]
    marketOutlook: string
    keyTrends: string[]
    recommendedSkills: string[]
    lastUpdated: Date
    nextUpdate: Date
    _count: IndustryInsightCountAggregateOutputType | null
    _avg: IndustryInsightAvgAggregateOutputType | null
    _sum: IndustryInsightSumAggregateOutputType | null
    _min: IndustryInsightMinAggregateOutputType | null
    _max: IndustryInsightMaxAggregateOutputType | null
  }

  type GetIndustryInsightGroupByPayload<T extends IndustryInsightGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<IndustryInsightGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof IndustryInsightGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], IndustryInsightGroupByOutputType[P]>
            : GetScalarType<T[P], IndustryInsightGroupByOutputType[P]>
        }
      >
    >


  export type IndustryInsightSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    industry?: boolean
    salaryRanges?: boolean
    growthRate?: boolean
    demandLevel?: boolean
    topSkills?: boolean
    marketOutlook?: boolean
    keyTrends?: boolean
    recommendedSkills?: boolean
    lastUpdated?: boolean
    nextUpdate?: boolean
    users?: boolean | IndustryInsight$usersArgs<ExtArgs>
    _count?: boolean | IndustryInsightCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["industryInsight"]>

  export type IndustryInsightSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    industry?: boolean
    salaryRanges?: boolean
    growthRate?: boolean
    demandLevel?: boolean
    topSkills?: boolean
    marketOutlook?: boolean
    keyTrends?: boolean
    recommendedSkills?: boolean
    lastUpdated?: boolean
    nextUpdate?: boolean
  }, ExtArgs["result"]["industryInsight"]>

  export type IndustryInsightSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    industry?: boolean
    salaryRanges?: boolean
    growthRate?: boolean
    demandLevel?: boolean
    topSkills?: boolean
    marketOutlook?: boolean
    keyTrends?: boolean
    recommendedSkills?: boolean
    lastUpdated?: boolean
    nextUpdate?: boolean
  }, ExtArgs["result"]["industryInsight"]>

  export type IndustryInsightSelectScalar = {
    id?: boolean
    industry?: boolean
    salaryRanges?: boolean
    growthRate?: boolean
    demandLevel?: boolean
    topSkills?: boolean
    marketOutlook?: boolean
    keyTrends?: boolean
    recommendedSkills?: boolean
    lastUpdated?: boolean
    nextUpdate?: boolean
  }

  export type IndustryInsightOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "industry" | "salaryRanges" | "growthRate" | "demandLevel" | "topSkills" | "marketOutlook" | "keyTrends" | "recommendedSkills" | "lastUpdated" | "nextUpdate", ExtArgs["result"]["industryInsight"]>
  export type IndustryInsightInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | IndustryInsight$usersArgs<ExtArgs>
    _count?: boolean | IndustryInsightCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type IndustryInsightIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type IndustryInsightIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $IndustryInsightPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "IndustryInsight"
    objects: {
      users: Prisma.$UserPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      industry: string
      salaryRanges: Prisma.JsonValue[]
      growthRate: number
      demandLevel: string
      topSkills: string[]
      marketOutlook: string
      keyTrends: string[]
      recommendedSkills: string[]
      lastUpdated: Date
      nextUpdate: Date
    }, ExtArgs["result"]["industryInsight"]>
    composites: {}
  }

  type IndustryInsightGetPayload<S extends boolean | null | undefined | IndustryInsightDefaultArgs> = $Result.GetResult<Prisma.$IndustryInsightPayload, S>

  type IndustryInsightCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<IndustryInsightFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: IndustryInsightCountAggregateInputType | true
    }

  export interface IndustryInsightDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['IndustryInsight'], meta: { name: 'IndustryInsight' } }
    /**
     * Find zero or one IndustryInsight that matches the filter.
     * @param {IndustryInsightFindUniqueArgs} args - Arguments to find a IndustryInsight
     * @example
     * // Get one IndustryInsight
     * const industryInsight = await prisma.industryInsight.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends IndustryInsightFindUniqueArgs>(args: SelectSubset<T, IndustryInsightFindUniqueArgs<ExtArgs>>): Prisma__IndustryInsightClient<$Result.GetResult<Prisma.$IndustryInsightPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one IndustryInsight that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {IndustryInsightFindUniqueOrThrowArgs} args - Arguments to find a IndustryInsight
     * @example
     * // Get one IndustryInsight
     * const industryInsight = await prisma.industryInsight.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends IndustryInsightFindUniqueOrThrowArgs>(args: SelectSubset<T, IndustryInsightFindUniqueOrThrowArgs<ExtArgs>>): Prisma__IndustryInsightClient<$Result.GetResult<Prisma.$IndustryInsightPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first IndustryInsight that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IndustryInsightFindFirstArgs} args - Arguments to find a IndustryInsight
     * @example
     * // Get one IndustryInsight
     * const industryInsight = await prisma.industryInsight.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends IndustryInsightFindFirstArgs>(args?: SelectSubset<T, IndustryInsightFindFirstArgs<ExtArgs>>): Prisma__IndustryInsightClient<$Result.GetResult<Prisma.$IndustryInsightPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first IndustryInsight that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IndustryInsightFindFirstOrThrowArgs} args - Arguments to find a IndustryInsight
     * @example
     * // Get one IndustryInsight
     * const industryInsight = await prisma.industryInsight.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends IndustryInsightFindFirstOrThrowArgs>(args?: SelectSubset<T, IndustryInsightFindFirstOrThrowArgs<ExtArgs>>): Prisma__IndustryInsightClient<$Result.GetResult<Prisma.$IndustryInsightPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more IndustryInsights that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IndustryInsightFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all IndustryInsights
     * const industryInsights = await prisma.industryInsight.findMany()
     * 
     * // Get first 10 IndustryInsights
     * const industryInsights = await prisma.industryInsight.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const industryInsightWithIdOnly = await prisma.industryInsight.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends IndustryInsightFindManyArgs>(args?: SelectSubset<T, IndustryInsightFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IndustryInsightPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a IndustryInsight.
     * @param {IndustryInsightCreateArgs} args - Arguments to create a IndustryInsight.
     * @example
     * // Create one IndustryInsight
     * const IndustryInsight = await prisma.industryInsight.create({
     *   data: {
     *     // ... data to create a IndustryInsight
     *   }
     * })
     * 
     */
    create<T extends IndustryInsightCreateArgs>(args: SelectSubset<T, IndustryInsightCreateArgs<ExtArgs>>): Prisma__IndustryInsightClient<$Result.GetResult<Prisma.$IndustryInsightPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many IndustryInsights.
     * @param {IndustryInsightCreateManyArgs} args - Arguments to create many IndustryInsights.
     * @example
     * // Create many IndustryInsights
     * const industryInsight = await prisma.industryInsight.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends IndustryInsightCreateManyArgs>(args?: SelectSubset<T, IndustryInsightCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many IndustryInsights and returns the data saved in the database.
     * @param {IndustryInsightCreateManyAndReturnArgs} args - Arguments to create many IndustryInsights.
     * @example
     * // Create many IndustryInsights
     * const industryInsight = await prisma.industryInsight.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many IndustryInsights and only return the `id`
     * const industryInsightWithIdOnly = await prisma.industryInsight.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends IndustryInsightCreateManyAndReturnArgs>(args?: SelectSubset<T, IndustryInsightCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IndustryInsightPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a IndustryInsight.
     * @param {IndustryInsightDeleteArgs} args - Arguments to delete one IndustryInsight.
     * @example
     * // Delete one IndustryInsight
     * const IndustryInsight = await prisma.industryInsight.delete({
     *   where: {
     *     // ... filter to delete one IndustryInsight
     *   }
     * })
     * 
     */
    delete<T extends IndustryInsightDeleteArgs>(args: SelectSubset<T, IndustryInsightDeleteArgs<ExtArgs>>): Prisma__IndustryInsightClient<$Result.GetResult<Prisma.$IndustryInsightPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one IndustryInsight.
     * @param {IndustryInsightUpdateArgs} args - Arguments to update one IndustryInsight.
     * @example
     * // Update one IndustryInsight
     * const industryInsight = await prisma.industryInsight.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends IndustryInsightUpdateArgs>(args: SelectSubset<T, IndustryInsightUpdateArgs<ExtArgs>>): Prisma__IndustryInsightClient<$Result.GetResult<Prisma.$IndustryInsightPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more IndustryInsights.
     * @param {IndustryInsightDeleteManyArgs} args - Arguments to filter IndustryInsights to delete.
     * @example
     * // Delete a few IndustryInsights
     * const { count } = await prisma.industryInsight.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends IndustryInsightDeleteManyArgs>(args?: SelectSubset<T, IndustryInsightDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more IndustryInsights.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IndustryInsightUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many IndustryInsights
     * const industryInsight = await prisma.industryInsight.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends IndustryInsightUpdateManyArgs>(args: SelectSubset<T, IndustryInsightUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more IndustryInsights and returns the data updated in the database.
     * @param {IndustryInsightUpdateManyAndReturnArgs} args - Arguments to update many IndustryInsights.
     * @example
     * // Update many IndustryInsights
     * const industryInsight = await prisma.industryInsight.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more IndustryInsights and only return the `id`
     * const industryInsightWithIdOnly = await prisma.industryInsight.updateManyAndReturn({
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
    updateManyAndReturn<T extends IndustryInsightUpdateManyAndReturnArgs>(args: SelectSubset<T, IndustryInsightUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IndustryInsightPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one IndustryInsight.
     * @param {IndustryInsightUpsertArgs} args - Arguments to update or create a IndustryInsight.
     * @example
     * // Update or create a IndustryInsight
     * const industryInsight = await prisma.industryInsight.upsert({
     *   create: {
     *     // ... data to create a IndustryInsight
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the IndustryInsight we want to update
     *   }
     * })
     */
    upsert<T extends IndustryInsightUpsertArgs>(args: SelectSubset<T, IndustryInsightUpsertArgs<ExtArgs>>): Prisma__IndustryInsightClient<$Result.GetResult<Prisma.$IndustryInsightPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of IndustryInsights.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IndustryInsightCountArgs} args - Arguments to filter IndustryInsights to count.
     * @example
     * // Count the number of IndustryInsights
     * const count = await prisma.industryInsight.count({
     *   where: {
     *     // ... the filter for the IndustryInsights we want to count
     *   }
     * })
    **/
    count<T extends IndustryInsightCountArgs>(
      args?: Subset<T, IndustryInsightCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], IndustryInsightCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a IndustryInsight.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IndustryInsightAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends IndustryInsightAggregateArgs>(args: Subset<T, IndustryInsightAggregateArgs>): Prisma.PrismaPromise<GetIndustryInsightAggregateType<T>>

    /**
     * Group by IndustryInsight.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IndustryInsightGroupByArgs} args - Group by arguments.
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
      T extends IndustryInsightGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: IndustryInsightGroupByArgs['orderBy'] }
        : { orderBy?: IndustryInsightGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, IndustryInsightGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetIndustryInsightGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the IndustryInsight model
   */
  readonly fields: IndustryInsightFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for IndustryInsight.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__IndustryInsightClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends IndustryInsight$usersArgs<ExtArgs> = {}>(args?: Subset<T, IndustryInsight$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the IndustryInsight model
   */
  interface IndustryInsightFieldRefs {
    readonly id: FieldRef<"IndustryInsight", 'String'>
    readonly industry: FieldRef<"IndustryInsight", 'String'>
    readonly salaryRanges: FieldRef<"IndustryInsight", 'Json[]'>
    readonly growthRate: FieldRef<"IndustryInsight", 'Float'>
    readonly demandLevel: FieldRef<"IndustryInsight", 'String'>
    readonly topSkills: FieldRef<"IndustryInsight", 'String[]'>
    readonly marketOutlook: FieldRef<"IndustryInsight", 'String'>
    readonly keyTrends: FieldRef<"IndustryInsight", 'String[]'>
    readonly recommendedSkills: FieldRef<"IndustryInsight", 'String[]'>
    readonly lastUpdated: FieldRef<"IndustryInsight", 'DateTime'>
    readonly nextUpdate: FieldRef<"IndustryInsight", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * IndustryInsight findUnique
   */
  export type IndustryInsightFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IndustryInsight
     */
    select?: IndustryInsightSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IndustryInsight
     */
    omit?: IndustryInsightOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IndustryInsightInclude<ExtArgs> | null
    /**
     * Filter, which IndustryInsight to fetch.
     */
    where: IndustryInsightWhereUniqueInput
  }

  /**
   * IndustryInsight findUniqueOrThrow
   */
  export type IndustryInsightFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IndustryInsight
     */
    select?: IndustryInsightSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IndustryInsight
     */
    omit?: IndustryInsightOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IndustryInsightInclude<ExtArgs> | null
    /**
     * Filter, which IndustryInsight to fetch.
     */
    where: IndustryInsightWhereUniqueInput
  }

  /**
   * IndustryInsight findFirst
   */
  export type IndustryInsightFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IndustryInsight
     */
    select?: IndustryInsightSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IndustryInsight
     */
    omit?: IndustryInsightOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IndustryInsightInclude<ExtArgs> | null
    /**
     * Filter, which IndustryInsight to fetch.
     */
    where?: IndustryInsightWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IndustryInsights to fetch.
     */
    orderBy?: IndustryInsightOrderByWithRelationInput | IndustryInsightOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for IndustryInsights.
     */
    cursor?: IndustryInsightWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IndustryInsights from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IndustryInsights.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of IndustryInsights.
     */
    distinct?: IndustryInsightScalarFieldEnum | IndustryInsightScalarFieldEnum[]
  }

  /**
   * IndustryInsight findFirstOrThrow
   */
  export type IndustryInsightFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IndustryInsight
     */
    select?: IndustryInsightSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IndustryInsight
     */
    omit?: IndustryInsightOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IndustryInsightInclude<ExtArgs> | null
    /**
     * Filter, which IndustryInsight to fetch.
     */
    where?: IndustryInsightWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IndustryInsights to fetch.
     */
    orderBy?: IndustryInsightOrderByWithRelationInput | IndustryInsightOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for IndustryInsights.
     */
    cursor?: IndustryInsightWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IndustryInsights from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IndustryInsights.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of IndustryInsights.
     */
    distinct?: IndustryInsightScalarFieldEnum | IndustryInsightScalarFieldEnum[]
  }

  /**
   * IndustryInsight findMany
   */
  export type IndustryInsightFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IndustryInsight
     */
    select?: IndustryInsightSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IndustryInsight
     */
    omit?: IndustryInsightOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IndustryInsightInclude<ExtArgs> | null
    /**
     * Filter, which IndustryInsights to fetch.
     */
    where?: IndustryInsightWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IndustryInsights to fetch.
     */
    orderBy?: IndustryInsightOrderByWithRelationInput | IndustryInsightOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing IndustryInsights.
     */
    cursor?: IndustryInsightWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IndustryInsights from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IndustryInsights.
     */
    skip?: number
    distinct?: IndustryInsightScalarFieldEnum | IndustryInsightScalarFieldEnum[]
  }

  /**
   * IndustryInsight create
   */
  export type IndustryInsightCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IndustryInsight
     */
    select?: IndustryInsightSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IndustryInsight
     */
    omit?: IndustryInsightOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IndustryInsightInclude<ExtArgs> | null
    /**
     * The data needed to create a IndustryInsight.
     */
    data: XOR<IndustryInsightCreateInput, IndustryInsightUncheckedCreateInput>
  }

  /**
   * IndustryInsight createMany
   */
  export type IndustryInsightCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many IndustryInsights.
     */
    data: IndustryInsightCreateManyInput | IndustryInsightCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * IndustryInsight createManyAndReturn
   */
  export type IndustryInsightCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IndustryInsight
     */
    select?: IndustryInsightSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the IndustryInsight
     */
    omit?: IndustryInsightOmit<ExtArgs> | null
    /**
     * The data used to create many IndustryInsights.
     */
    data: IndustryInsightCreateManyInput | IndustryInsightCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * IndustryInsight update
   */
  export type IndustryInsightUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IndustryInsight
     */
    select?: IndustryInsightSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IndustryInsight
     */
    omit?: IndustryInsightOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IndustryInsightInclude<ExtArgs> | null
    /**
     * The data needed to update a IndustryInsight.
     */
    data: XOR<IndustryInsightUpdateInput, IndustryInsightUncheckedUpdateInput>
    /**
     * Choose, which IndustryInsight to update.
     */
    where: IndustryInsightWhereUniqueInput
  }

  /**
   * IndustryInsight updateMany
   */
  export type IndustryInsightUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update IndustryInsights.
     */
    data: XOR<IndustryInsightUpdateManyMutationInput, IndustryInsightUncheckedUpdateManyInput>
    /**
     * Filter which IndustryInsights to update
     */
    where?: IndustryInsightWhereInput
    /**
     * Limit how many IndustryInsights to update.
     */
    limit?: number
  }

  /**
   * IndustryInsight updateManyAndReturn
   */
  export type IndustryInsightUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IndustryInsight
     */
    select?: IndustryInsightSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the IndustryInsight
     */
    omit?: IndustryInsightOmit<ExtArgs> | null
    /**
     * The data used to update IndustryInsights.
     */
    data: XOR<IndustryInsightUpdateManyMutationInput, IndustryInsightUncheckedUpdateManyInput>
    /**
     * Filter which IndustryInsights to update
     */
    where?: IndustryInsightWhereInput
    /**
     * Limit how many IndustryInsights to update.
     */
    limit?: number
  }

  /**
   * IndustryInsight upsert
   */
  export type IndustryInsightUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IndustryInsight
     */
    select?: IndustryInsightSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IndustryInsight
     */
    omit?: IndustryInsightOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IndustryInsightInclude<ExtArgs> | null
    /**
     * The filter to search for the IndustryInsight to update in case it exists.
     */
    where: IndustryInsightWhereUniqueInput
    /**
     * In case the IndustryInsight found by the `where` argument doesn't exist, create a new IndustryInsight with this data.
     */
    create: XOR<IndustryInsightCreateInput, IndustryInsightUncheckedCreateInput>
    /**
     * In case the IndustryInsight was found with the provided `where` argument, update it with this data.
     */
    update: XOR<IndustryInsightUpdateInput, IndustryInsightUncheckedUpdateInput>
  }

  /**
   * IndustryInsight delete
   */
  export type IndustryInsightDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IndustryInsight
     */
    select?: IndustryInsightSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IndustryInsight
     */
    omit?: IndustryInsightOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IndustryInsightInclude<ExtArgs> | null
    /**
     * Filter which IndustryInsight to delete.
     */
    where: IndustryInsightWhereUniqueInput
  }

  /**
   * IndustryInsight deleteMany
   */
  export type IndustryInsightDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which IndustryInsights to delete
     */
    where?: IndustryInsightWhereInput
    /**
     * Limit how many IndustryInsights to delete.
     */
    limit?: number
  }

  /**
   * IndustryInsight.users
   */
  export type IndustryInsight$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * IndustryInsight without action
   */
  export type IndustryInsightDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IndustryInsight
     */
    select?: IndustryInsightSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IndustryInsight
     */
    omit?: IndustryInsightOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IndustryInsightInclude<ExtArgs> | null
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


  export const UserScalarFieldEnum: {
    id: 'id',
    clerkUserId: 'clerkUserId',
    email: 'email',
    name: 'name',
    imageUrl: 'imageUrl',
    bio: 'bio',
    experience: 'experience',
    industry: 'industry',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    skills: 'skills'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const ResumeScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    content: 'content',
    createdAt: 'createdAt'
  };

  export type ResumeScalarFieldEnum = (typeof ResumeScalarFieldEnum)[keyof typeof ResumeScalarFieldEnum]


  export const CoverLetterScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    content: 'content',
    createdAt: 'createdAt'
  };

  export type CoverLetterScalarFieldEnum = (typeof CoverLetterScalarFieldEnum)[keyof typeof CoverLetterScalarFieldEnum]


  export const MockInterviewScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    questions: 'questions',
    feedback: 'feedback',
    createdAt: 'createdAt'
  };

  export type MockInterviewScalarFieldEnum = (typeof MockInterviewScalarFieldEnum)[keyof typeof MockInterviewScalarFieldEnum]


  export const SkillGapAnalysisScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    currentSkills: 'currentSkills',
    requiredSkills: 'requiredSkills',
    gaps: 'gaps',
    recommendations: 'recommendations',
    createdAt: 'createdAt'
  };

  export type SkillGapAnalysisScalarFieldEnum = (typeof SkillGapAnalysisScalarFieldEnum)[keyof typeof SkillGapAnalysisScalarFieldEnum]


  export const IndustryInsightScalarFieldEnum: {
    id: 'id',
    industry: 'industry',
    salaryRanges: 'salaryRanges',
    growthRate: 'growthRate',
    demandLevel: 'demandLevel',
    topSkills: 'topSkills',
    marketOutlook: 'marketOutlook',
    keyTrends: 'keyTrends',
    recommendedSkills: 'recommendedSkills',
    lastUpdated: 'lastUpdated',
    nextUpdate: 'nextUpdate'
  };

  export type IndustryInsightScalarFieldEnum = (typeof IndustryInsightScalarFieldEnum)[keyof typeof IndustryInsightScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


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


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


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
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'Json[]'
   */
  export type ListJsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json[]'>
    


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


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    clerkUserId?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    imageUrl?: StringNullableFilter<"User"> | string | null
    bio?: StringNullableFilter<"User"> | string | null
    experience?: IntNullableFilter<"User"> | number | null
    industry?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    skills?: StringNullableListFilter<"User">
    resume?: XOR<ResumeNullableScalarRelationFilter, ResumeWhereInput> | null
    coverLetters?: CoverLetterListRelationFilter
    mockInterviews?: MockInterviewListRelationFilter
    skillGaps?: SkillGapAnalysisListRelationFilter
    industryInsights?: IndustryInsightListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    clerkUserId?: SortOrder
    email?: SortOrder
    name?: SortOrderInput | SortOrder
    imageUrl?: SortOrderInput | SortOrder
    bio?: SortOrderInput | SortOrder
    experience?: SortOrderInput | SortOrder
    industry?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    skills?: SortOrder
    resume?: ResumeOrderByWithRelationInput
    coverLetters?: CoverLetterOrderByRelationAggregateInput
    mockInterviews?: MockInterviewOrderByRelationAggregateInput
    skillGaps?: SkillGapAnalysisOrderByRelationAggregateInput
    industryInsights?: IndustryInsightOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    clerkUserId?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringNullableFilter<"User"> | string | null
    imageUrl?: StringNullableFilter<"User"> | string | null
    bio?: StringNullableFilter<"User"> | string | null
    experience?: IntNullableFilter<"User"> | number | null
    industry?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    skills?: StringNullableListFilter<"User">
    resume?: XOR<ResumeNullableScalarRelationFilter, ResumeWhereInput> | null
    coverLetters?: CoverLetterListRelationFilter
    mockInterviews?: MockInterviewListRelationFilter
    skillGaps?: SkillGapAnalysisListRelationFilter
    industryInsights?: IndustryInsightListRelationFilter
  }, "id" | "clerkUserId" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    clerkUserId?: SortOrder
    email?: SortOrder
    name?: SortOrderInput | SortOrder
    imageUrl?: SortOrderInput | SortOrder
    bio?: SortOrderInput | SortOrder
    experience?: SortOrderInput | SortOrder
    industry?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    skills?: SortOrder
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
    id?: StringWithAggregatesFilter<"User"> | string
    clerkUserId?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    imageUrl?: StringNullableWithAggregatesFilter<"User"> | string | null
    bio?: StringNullableWithAggregatesFilter<"User"> | string | null
    experience?: IntNullableWithAggregatesFilter<"User"> | number | null
    industry?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    skills?: StringNullableListFilter<"User">
  }

  export type ResumeWhereInput = {
    AND?: ResumeWhereInput | ResumeWhereInput[]
    OR?: ResumeWhereInput[]
    NOT?: ResumeWhereInput | ResumeWhereInput[]
    id?: StringFilter<"Resume"> | string
    userId?: StringFilter<"Resume"> | string
    content?: StringFilter<"Resume"> | string
    createdAt?: DateTimeFilter<"Resume"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type ResumeOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type ResumeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    AND?: ResumeWhereInput | ResumeWhereInput[]
    OR?: ResumeWhereInput[]
    NOT?: ResumeWhereInput | ResumeWhereInput[]
    content?: StringFilter<"Resume"> | string
    createdAt?: DateTimeFilter<"Resume"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "userId">

  export type ResumeOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    _count?: ResumeCountOrderByAggregateInput
    _max?: ResumeMaxOrderByAggregateInput
    _min?: ResumeMinOrderByAggregateInput
  }

  export type ResumeScalarWhereWithAggregatesInput = {
    AND?: ResumeScalarWhereWithAggregatesInput | ResumeScalarWhereWithAggregatesInput[]
    OR?: ResumeScalarWhereWithAggregatesInput[]
    NOT?: ResumeScalarWhereWithAggregatesInput | ResumeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Resume"> | string
    userId?: StringWithAggregatesFilter<"Resume"> | string
    content?: StringWithAggregatesFilter<"Resume"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Resume"> | Date | string
  }

  export type CoverLetterWhereInput = {
    AND?: CoverLetterWhereInput | CoverLetterWhereInput[]
    OR?: CoverLetterWhereInput[]
    NOT?: CoverLetterWhereInput | CoverLetterWhereInput[]
    id?: StringFilter<"CoverLetter"> | string
    userId?: StringFilter<"CoverLetter"> | string
    content?: StringFilter<"CoverLetter"> | string
    createdAt?: DateTimeFilter<"CoverLetter"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type CoverLetterOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type CoverLetterWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CoverLetterWhereInput | CoverLetterWhereInput[]
    OR?: CoverLetterWhereInput[]
    NOT?: CoverLetterWhereInput | CoverLetterWhereInput[]
    userId?: StringFilter<"CoverLetter"> | string
    content?: StringFilter<"CoverLetter"> | string
    createdAt?: DateTimeFilter<"CoverLetter"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type CoverLetterOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    _count?: CoverLetterCountOrderByAggregateInput
    _max?: CoverLetterMaxOrderByAggregateInput
    _min?: CoverLetterMinOrderByAggregateInput
  }

  export type CoverLetterScalarWhereWithAggregatesInput = {
    AND?: CoverLetterScalarWhereWithAggregatesInput | CoverLetterScalarWhereWithAggregatesInput[]
    OR?: CoverLetterScalarWhereWithAggregatesInput[]
    NOT?: CoverLetterScalarWhereWithAggregatesInput | CoverLetterScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"CoverLetter"> | string
    userId?: StringWithAggregatesFilter<"CoverLetter"> | string
    content?: StringWithAggregatesFilter<"CoverLetter"> | string
    createdAt?: DateTimeWithAggregatesFilter<"CoverLetter"> | Date | string
  }

  export type MockInterviewWhereInput = {
    AND?: MockInterviewWhereInput | MockInterviewWhereInput[]
    OR?: MockInterviewWhereInput[]
    NOT?: MockInterviewWhereInput | MockInterviewWhereInput[]
    id?: StringFilter<"MockInterview"> | string
    userId?: StringFilter<"MockInterview"> | string
    questions?: JsonFilter<"MockInterview">
    feedback?: StringNullableFilter<"MockInterview"> | string | null
    createdAt?: DateTimeFilter<"MockInterview"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type MockInterviewOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    questions?: SortOrder
    feedback?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type MockInterviewWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MockInterviewWhereInput | MockInterviewWhereInput[]
    OR?: MockInterviewWhereInput[]
    NOT?: MockInterviewWhereInput | MockInterviewWhereInput[]
    userId?: StringFilter<"MockInterview"> | string
    questions?: JsonFilter<"MockInterview">
    feedback?: StringNullableFilter<"MockInterview"> | string | null
    createdAt?: DateTimeFilter<"MockInterview"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type MockInterviewOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    questions?: SortOrder
    feedback?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: MockInterviewCountOrderByAggregateInput
    _max?: MockInterviewMaxOrderByAggregateInput
    _min?: MockInterviewMinOrderByAggregateInput
  }

  export type MockInterviewScalarWhereWithAggregatesInput = {
    AND?: MockInterviewScalarWhereWithAggregatesInput | MockInterviewScalarWhereWithAggregatesInput[]
    OR?: MockInterviewScalarWhereWithAggregatesInput[]
    NOT?: MockInterviewScalarWhereWithAggregatesInput | MockInterviewScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"MockInterview"> | string
    userId?: StringWithAggregatesFilter<"MockInterview"> | string
    questions?: JsonWithAggregatesFilter<"MockInterview">
    feedback?: StringNullableWithAggregatesFilter<"MockInterview"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"MockInterview"> | Date | string
  }

  export type SkillGapAnalysisWhereInput = {
    AND?: SkillGapAnalysisWhereInput | SkillGapAnalysisWhereInput[]
    OR?: SkillGapAnalysisWhereInput[]
    NOT?: SkillGapAnalysisWhereInput | SkillGapAnalysisWhereInput[]
    id?: StringFilter<"SkillGapAnalysis"> | string
    userId?: StringFilter<"SkillGapAnalysis"> | string
    currentSkills?: StringNullableListFilter<"SkillGapAnalysis">
    requiredSkills?: StringNullableListFilter<"SkillGapAnalysis">
    gaps?: StringNullableListFilter<"SkillGapAnalysis">
    recommendations?: StringNullableListFilter<"SkillGapAnalysis">
    createdAt?: DateTimeFilter<"SkillGapAnalysis"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type SkillGapAnalysisOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    currentSkills?: SortOrder
    requiredSkills?: SortOrder
    gaps?: SortOrder
    recommendations?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type SkillGapAnalysisWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SkillGapAnalysisWhereInput | SkillGapAnalysisWhereInput[]
    OR?: SkillGapAnalysisWhereInput[]
    NOT?: SkillGapAnalysisWhereInput | SkillGapAnalysisWhereInput[]
    userId?: StringFilter<"SkillGapAnalysis"> | string
    currentSkills?: StringNullableListFilter<"SkillGapAnalysis">
    requiredSkills?: StringNullableListFilter<"SkillGapAnalysis">
    gaps?: StringNullableListFilter<"SkillGapAnalysis">
    recommendations?: StringNullableListFilter<"SkillGapAnalysis">
    createdAt?: DateTimeFilter<"SkillGapAnalysis"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type SkillGapAnalysisOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    currentSkills?: SortOrder
    requiredSkills?: SortOrder
    gaps?: SortOrder
    recommendations?: SortOrder
    createdAt?: SortOrder
    _count?: SkillGapAnalysisCountOrderByAggregateInput
    _max?: SkillGapAnalysisMaxOrderByAggregateInput
    _min?: SkillGapAnalysisMinOrderByAggregateInput
  }

  export type SkillGapAnalysisScalarWhereWithAggregatesInput = {
    AND?: SkillGapAnalysisScalarWhereWithAggregatesInput | SkillGapAnalysisScalarWhereWithAggregatesInput[]
    OR?: SkillGapAnalysisScalarWhereWithAggregatesInput[]
    NOT?: SkillGapAnalysisScalarWhereWithAggregatesInput | SkillGapAnalysisScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SkillGapAnalysis"> | string
    userId?: StringWithAggregatesFilter<"SkillGapAnalysis"> | string
    currentSkills?: StringNullableListFilter<"SkillGapAnalysis">
    requiredSkills?: StringNullableListFilter<"SkillGapAnalysis">
    gaps?: StringNullableListFilter<"SkillGapAnalysis">
    recommendations?: StringNullableListFilter<"SkillGapAnalysis">
    createdAt?: DateTimeWithAggregatesFilter<"SkillGapAnalysis"> | Date | string
  }

  export type IndustryInsightWhereInput = {
    AND?: IndustryInsightWhereInput | IndustryInsightWhereInput[]
    OR?: IndustryInsightWhereInput[]
    NOT?: IndustryInsightWhereInput | IndustryInsightWhereInput[]
    id?: StringFilter<"IndustryInsight"> | string
    industry?: StringFilter<"IndustryInsight"> | string
    salaryRanges?: JsonNullableListFilter<"IndustryInsight">
    growthRate?: FloatFilter<"IndustryInsight"> | number
    demandLevel?: StringFilter<"IndustryInsight"> | string
    topSkills?: StringNullableListFilter<"IndustryInsight">
    marketOutlook?: StringFilter<"IndustryInsight"> | string
    keyTrends?: StringNullableListFilter<"IndustryInsight">
    recommendedSkills?: StringNullableListFilter<"IndustryInsight">
    lastUpdated?: DateTimeFilter<"IndustryInsight"> | Date | string
    nextUpdate?: DateTimeFilter<"IndustryInsight"> | Date | string
    users?: UserListRelationFilter
  }

  export type IndustryInsightOrderByWithRelationInput = {
    id?: SortOrder
    industry?: SortOrder
    salaryRanges?: SortOrder
    growthRate?: SortOrder
    demandLevel?: SortOrder
    topSkills?: SortOrder
    marketOutlook?: SortOrder
    keyTrends?: SortOrder
    recommendedSkills?: SortOrder
    lastUpdated?: SortOrder
    nextUpdate?: SortOrder
    users?: UserOrderByRelationAggregateInput
  }

  export type IndustryInsightWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    industry?: string
    AND?: IndustryInsightWhereInput | IndustryInsightWhereInput[]
    OR?: IndustryInsightWhereInput[]
    NOT?: IndustryInsightWhereInput | IndustryInsightWhereInput[]
    salaryRanges?: JsonNullableListFilter<"IndustryInsight">
    growthRate?: FloatFilter<"IndustryInsight"> | number
    demandLevel?: StringFilter<"IndustryInsight"> | string
    topSkills?: StringNullableListFilter<"IndustryInsight">
    marketOutlook?: StringFilter<"IndustryInsight"> | string
    keyTrends?: StringNullableListFilter<"IndustryInsight">
    recommendedSkills?: StringNullableListFilter<"IndustryInsight">
    lastUpdated?: DateTimeFilter<"IndustryInsight"> | Date | string
    nextUpdate?: DateTimeFilter<"IndustryInsight"> | Date | string
    users?: UserListRelationFilter
  }, "id" | "industry">

  export type IndustryInsightOrderByWithAggregationInput = {
    id?: SortOrder
    industry?: SortOrder
    salaryRanges?: SortOrder
    growthRate?: SortOrder
    demandLevel?: SortOrder
    topSkills?: SortOrder
    marketOutlook?: SortOrder
    keyTrends?: SortOrder
    recommendedSkills?: SortOrder
    lastUpdated?: SortOrder
    nextUpdate?: SortOrder
    _count?: IndustryInsightCountOrderByAggregateInput
    _avg?: IndustryInsightAvgOrderByAggregateInput
    _max?: IndustryInsightMaxOrderByAggregateInput
    _min?: IndustryInsightMinOrderByAggregateInput
    _sum?: IndustryInsightSumOrderByAggregateInput
  }

  export type IndustryInsightScalarWhereWithAggregatesInput = {
    AND?: IndustryInsightScalarWhereWithAggregatesInput | IndustryInsightScalarWhereWithAggregatesInput[]
    OR?: IndustryInsightScalarWhereWithAggregatesInput[]
    NOT?: IndustryInsightScalarWhereWithAggregatesInput | IndustryInsightScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"IndustryInsight"> | string
    industry?: StringWithAggregatesFilter<"IndustryInsight"> | string
    salaryRanges?: JsonNullableListFilter<"IndustryInsight">
    growthRate?: FloatWithAggregatesFilter<"IndustryInsight"> | number
    demandLevel?: StringWithAggregatesFilter<"IndustryInsight"> | string
    topSkills?: StringNullableListFilter<"IndustryInsight">
    marketOutlook?: StringWithAggregatesFilter<"IndustryInsight"> | string
    keyTrends?: StringNullableListFilter<"IndustryInsight">
    recommendedSkills?: StringNullableListFilter<"IndustryInsight">
    lastUpdated?: DateTimeWithAggregatesFilter<"IndustryInsight"> | Date | string
    nextUpdate?: DateTimeWithAggregatesFilter<"IndustryInsight"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    clerkUserId: string
    email: string
    name?: string | null
    imageUrl?: string | null
    bio?: string | null
    experience?: number | null
    industry?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    skills?: UserCreateskillsInput | string[]
    resume?: ResumeCreateNestedOneWithoutUserInput
    coverLetters?: CoverLetterCreateNestedManyWithoutUserInput
    mockInterviews?: MockInterviewCreateNestedManyWithoutUserInput
    skillGaps?: SkillGapAnalysisCreateNestedManyWithoutUserInput
    industryInsights?: IndustryInsightCreateNestedManyWithoutUsersInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    clerkUserId: string
    email: string
    name?: string | null
    imageUrl?: string | null
    bio?: string | null
    experience?: number | null
    industry?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    skills?: UserCreateskillsInput | string[]
    resume?: ResumeUncheckedCreateNestedOneWithoutUserInput
    coverLetters?: CoverLetterUncheckedCreateNestedManyWithoutUserInput
    mockInterviews?: MockInterviewUncheckedCreateNestedManyWithoutUserInput
    skillGaps?: SkillGapAnalysisUncheckedCreateNestedManyWithoutUserInput
    industryInsights?: IndustryInsightUncheckedCreateNestedManyWithoutUsersInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkUserId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    experience?: NullableIntFieldUpdateOperationsInput | number | null
    industry?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    skills?: UserUpdateskillsInput | string[]
    resume?: ResumeUpdateOneWithoutUserNestedInput
    coverLetters?: CoverLetterUpdateManyWithoutUserNestedInput
    mockInterviews?: MockInterviewUpdateManyWithoutUserNestedInput
    skillGaps?: SkillGapAnalysisUpdateManyWithoutUserNestedInput
    industryInsights?: IndustryInsightUpdateManyWithoutUsersNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkUserId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    experience?: NullableIntFieldUpdateOperationsInput | number | null
    industry?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    skills?: UserUpdateskillsInput | string[]
    resume?: ResumeUncheckedUpdateOneWithoutUserNestedInput
    coverLetters?: CoverLetterUncheckedUpdateManyWithoutUserNestedInput
    mockInterviews?: MockInterviewUncheckedUpdateManyWithoutUserNestedInput
    skillGaps?: SkillGapAnalysisUncheckedUpdateManyWithoutUserNestedInput
    industryInsights?: IndustryInsightUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    clerkUserId: string
    email: string
    name?: string | null
    imageUrl?: string | null
    bio?: string | null
    experience?: number | null
    industry?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    skills?: UserCreateskillsInput | string[]
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkUserId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    experience?: NullableIntFieldUpdateOperationsInput | number | null
    industry?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    skills?: UserUpdateskillsInput | string[]
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkUserId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    experience?: NullableIntFieldUpdateOperationsInput | number | null
    industry?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    skills?: UserUpdateskillsInput | string[]
  }

  export type ResumeCreateInput = {
    id?: string
    content: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutResumeInput
  }

  export type ResumeUncheckedCreateInput = {
    id?: string
    userId: string
    content: string
    createdAt?: Date | string
  }

  export type ResumeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutResumeNestedInput
  }

  export type ResumeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ResumeCreateManyInput = {
    id?: string
    userId: string
    content: string
    createdAt?: Date | string
  }

  export type ResumeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ResumeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CoverLetterCreateInput = {
    id?: string
    content: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutCoverLettersInput
  }

  export type CoverLetterUncheckedCreateInput = {
    id?: string
    userId: string
    content: string
    createdAt?: Date | string
  }

  export type CoverLetterUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutCoverLettersNestedInput
  }

  export type CoverLetterUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CoverLetterCreateManyInput = {
    id?: string
    userId: string
    content: string
    createdAt?: Date | string
  }

  export type CoverLetterUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CoverLetterUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MockInterviewCreateInput = {
    id?: string
    questions: JsonNullValueInput | InputJsonValue
    feedback?: string | null
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutMockInterviewsInput
  }

  export type MockInterviewUncheckedCreateInput = {
    id?: string
    userId: string
    questions: JsonNullValueInput | InputJsonValue
    feedback?: string | null
    createdAt?: Date | string
  }

  export type MockInterviewUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    questions?: JsonNullValueInput | InputJsonValue
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutMockInterviewsNestedInput
  }

  export type MockInterviewUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    questions?: JsonNullValueInput | InputJsonValue
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MockInterviewCreateManyInput = {
    id?: string
    userId: string
    questions: JsonNullValueInput | InputJsonValue
    feedback?: string | null
    createdAt?: Date | string
  }

  export type MockInterviewUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    questions?: JsonNullValueInput | InputJsonValue
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MockInterviewUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    questions?: JsonNullValueInput | InputJsonValue
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SkillGapAnalysisCreateInput = {
    id?: string
    currentSkills?: SkillGapAnalysisCreatecurrentSkillsInput | string[]
    requiredSkills?: SkillGapAnalysisCreaterequiredSkillsInput | string[]
    gaps?: SkillGapAnalysisCreategapsInput | string[]
    recommendations?: SkillGapAnalysisCreaterecommendationsInput | string[]
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutSkillGapsInput
  }

  export type SkillGapAnalysisUncheckedCreateInput = {
    id?: string
    userId: string
    currentSkills?: SkillGapAnalysisCreatecurrentSkillsInput | string[]
    requiredSkills?: SkillGapAnalysisCreaterequiredSkillsInput | string[]
    gaps?: SkillGapAnalysisCreategapsInput | string[]
    recommendations?: SkillGapAnalysisCreaterecommendationsInput | string[]
    createdAt?: Date | string
  }

  export type SkillGapAnalysisUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    currentSkills?: SkillGapAnalysisUpdatecurrentSkillsInput | string[]
    requiredSkills?: SkillGapAnalysisUpdaterequiredSkillsInput | string[]
    gaps?: SkillGapAnalysisUpdategapsInput | string[]
    recommendations?: SkillGapAnalysisUpdaterecommendationsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSkillGapsNestedInput
  }

  export type SkillGapAnalysisUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    currentSkills?: SkillGapAnalysisUpdatecurrentSkillsInput | string[]
    requiredSkills?: SkillGapAnalysisUpdaterequiredSkillsInput | string[]
    gaps?: SkillGapAnalysisUpdategapsInput | string[]
    recommendations?: SkillGapAnalysisUpdaterecommendationsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SkillGapAnalysisCreateManyInput = {
    id?: string
    userId: string
    currentSkills?: SkillGapAnalysisCreatecurrentSkillsInput | string[]
    requiredSkills?: SkillGapAnalysisCreaterequiredSkillsInput | string[]
    gaps?: SkillGapAnalysisCreategapsInput | string[]
    recommendations?: SkillGapAnalysisCreaterecommendationsInput | string[]
    createdAt?: Date | string
  }

  export type SkillGapAnalysisUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    currentSkills?: SkillGapAnalysisUpdatecurrentSkillsInput | string[]
    requiredSkills?: SkillGapAnalysisUpdaterequiredSkillsInput | string[]
    gaps?: SkillGapAnalysisUpdategapsInput | string[]
    recommendations?: SkillGapAnalysisUpdaterecommendationsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SkillGapAnalysisUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    currentSkills?: SkillGapAnalysisUpdatecurrentSkillsInput | string[]
    requiredSkills?: SkillGapAnalysisUpdaterequiredSkillsInput | string[]
    gaps?: SkillGapAnalysisUpdategapsInput | string[]
    recommendations?: SkillGapAnalysisUpdaterecommendationsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IndustryInsightCreateInput = {
    id?: string
    industry: string
    salaryRanges?: IndustryInsightCreatesalaryRangesInput | InputJsonValue[]
    growthRate: number
    demandLevel: string
    topSkills?: IndustryInsightCreatetopSkillsInput | string[]
    marketOutlook: string
    keyTrends?: IndustryInsightCreatekeyTrendsInput | string[]
    recommendedSkills?: IndustryInsightCreaterecommendedSkillsInput | string[]
    lastUpdated?: Date | string
    nextUpdate: Date | string
    users?: UserCreateNestedManyWithoutIndustryInsightsInput
  }

  export type IndustryInsightUncheckedCreateInput = {
    id?: string
    industry: string
    salaryRanges?: IndustryInsightCreatesalaryRangesInput | InputJsonValue[]
    growthRate: number
    demandLevel: string
    topSkills?: IndustryInsightCreatetopSkillsInput | string[]
    marketOutlook: string
    keyTrends?: IndustryInsightCreatekeyTrendsInput | string[]
    recommendedSkills?: IndustryInsightCreaterecommendedSkillsInput | string[]
    lastUpdated?: Date | string
    nextUpdate: Date | string
    users?: UserUncheckedCreateNestedManyWithoutIndustryInsightsInput
  }

  export type IndustryInsightUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    industry?: StringFieldUpdateOperationsInput | string
    salaryRanges?: IndustryInsightUpdatesalaryRangesInput | InputJsonValue[]
    growthRate?: FloatFieldUpdateOperationsInput | number
    demandLevel?: StringFieldUpdateOperationsInput | string
    topSkills?: IndustryInsightUpdatetopSkillsInput | string[]
    marketOutlook?: StringFieldUpdateOperationsInput | string
    keyTrends?: IndustryInsightUpdatekeyTrendsInput | string[]
    recommendedSkills?: IndustryInsightUpdaterecommendedSkillsInput | string[]
    lastUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
    nextUpdate?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUpdateManyWithoutIndustryInsightsNestedInput
  }

  export type IndustryInsightUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    industry?: StringFieldUpdateOperationsInput | string
    salaryRanges?: IndustryInsightUpdatesalaryRangesInput | InputJsonValue[]
    growthRate?: FloatFieldUpdateOperationsInput | number
    demandLevel?: StringFieldUpdateOperationsInput | string
    topSkills?: IndustryInsightUpdatetopSkillsInput | string[]
    marketOutlook?: StringFieldUpdateOperationsInput | string
    keyTrends?: IndustryInsightUpdatekeyTrendsInput | string[]
    recommendedSkills?: IndustryInsightUpdaterecommendedSkillsInput | string[]
    lastUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
    nextUpdate?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUncheckedUpdateManyWithoutIndustryInsightsNestedInput
  }

  export type IndustryInsightCreateManyInput = {
    id?: string
    industry: string
    salaryRanges?: IndustryInsightCreatesalaryRangesInput | InputJsonValue[]
    growthRate: number
    demandLevel: string
    topSkills?: IndustryInsightCreatetopSkillsInput | string[]
    marketOutlook: string
    keyTrends?: IndustryInsightCreatekeyTrendsInput | string[]
    recommendedSkills?: IndustryInsightCreaterecommendedSkillsInput | string[]
    lastUpdated?: Date | string
    nextUpdate: Date | string
  }

  export type IndustryInsightUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    industry?: StringFieldUpdateOperationsInput | string
    salaryRanges?: IndustryInsightUpdatesalaryRangesInput | InputJsonValue[]
    growthRate?: FloatFieldUpdateOperationsInput | number
    demandLevel?: StringFieldUpdateOperationsInput | string
    topSkills?: IndustryInsightUpdatetopSkillsInput | string[]
    marketOutlook?: StringFieldUpdateOperationsInput | string
    keyTrends?: IndustryInsightUpdatekeyTrendsInput | string[]
    recommendedSkills?: IndustryInsightUpdaterecommendedSkillsInput | string[]
    lastUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
    nextUpdate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IndustryInsightUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    industry?: StringFieldUpdateOperationsInput | string
    salaryRanges?: IndustryInsightUpdatesalaryRangesInput | InputJsonValue[]
    growthRate?: FloatFieldUpdateOperationsInput | number
    demandLevel?: StringFieldUpdateOperationsInput | string
    topSkills?: IndustryInsightUpdatetopSkillsInput | string[]
    marketOutlook?: StringFieldUpdateOperationsInput | string
    keyTrends?: IndustryInsightUpdatekeyTrendsInput | string[]
    recommendedSkills?: IndustryInsightUpdaterecommendedSkillsInput | string[]
    lastUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
    nextUpdate?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
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

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type ResumeNullableScalarRelationFilter = {
    is?: ResumeWhereInput | null
    isNot?: ResumeWhereInput | null
  }

  export type CoverLetterListRelationFilter = {
    every?: CoverLetterWhereInput
    some?: CoverLetterWhereInput
    none?: CoverLetterWhereInput
  }

  export type MockInterviewListRelationFilter = {
    every?: MockInterviewWhereInput
    some?: MockInterviewWhereInput
    none?: MockInterviewWhereInput
  }

  export type SkillGapAnalysisListRelationFilter = {
    every?: SkillGapAnalysisWhereInput
    some?: SkillGapAnalysisWhereInput
    none?: SkillGapAnalysisWhereInput
  }

  export type IndustryInsightListRelationFilter = {
    every?: IndustryInsightWhereInput
    some?: IndustryInsightWhereInput
    none?: IndustryInsightWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type CoverLetterOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MockInterviewOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SkillGapAnalysisOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type IndustryInsightOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    clerkUserId?: SortOrder
    email?: SortOrder
    name?: SortOrder
    imageUrl?: SortOrder
    bio?: SortOrder
    experience?: SortOrder
    industry?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    skills?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    experience?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    clerkUserId?: SortOrder
    email?: SortOrder
    name?: SortOrder
    imageUrl?: SortOrder
    bio?: SortOrder
    experience?: SortOrder
    industry?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    clerkUserId?: SortOrder
    email?: SortOrder
    name?: SortOrder
    imageUrl?: SortOrder
    bio?: SortOrder
    experience?: SortOrder
    industry?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    experience?: SortOrder
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

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
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

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type ResumeCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
  }

  export type ResumeMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
  }

  export type ResumeMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
  }

  export type CoverLetterCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
  }

  export type CoverLetterMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
  }

  export type CoverLetterMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
  }
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type MockInterviewCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    questions?: SortOrder
    feedback?: SortOrder
    createdAt?: SortOrder
  }

  export type MockInterviewMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    feedback?: SortOrder
    createdAt?: SortOrder
  }

  export type MockInterviewMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    feedback?: SortOrder
    createdAt?: SortOrder
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type SkillGapAnalysisCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    currentSkills?: SortOrder
    requiredSkills?: SortOrder
    gaps?: SortOrder
    recommendations?: SortOrder
    createdAt?: SortOrder
  }

  export type SkillGapAnalysisMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
  }

  export type SkillGapAnalysisMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
  }
  export type JsonNullableListFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableListFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableListFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableListFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableListFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableListFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue[] | ListJsonFieldRefInput<$PrismaModel> | null
    has?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    hasEvery?: InputJsonValue[] | ListJsonFieldRefInput<$PrismaModel>
    hasSome?: InputJsonValue[] | ListJsonFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type IndustryInsightCountOrderByAggregateInput = {
    id?: SortOrder
    industry?: SortOrder
    salaryRanges?: SortOrder
    growthRate?: SortOrder
    demandLevel?: SortOrder
    topSkills?: SortOrder
    marketOutlook?: SortOrder
    keyTrends?: SortOrder
    recommendedSkills?: SortOrder
    lastUpdated?: SortOrder
    nextUpdate?: SortOrder
  }

  export type IndustryInsightAvgOrderByAggregateInput = {
    growthRate?: SortOrder
  }

  export type IndustryInsightMaxOrderByAggregateInput = {
    id?: SortOrder
    industry?: SortOrder
    growthRate?: SortOrder
    demandLevel?: SortOrder
    marketOutlook?: SortOrder
    lastUpdated?: SortOrder
    nextUpdate?: SortOrder
  }

  export type IndustryInsightMinOrderByAggregateInput = {
    id?: SortOrder
    industry?: SortOrder
    growthRate?: SortOrder
    demandLevel?: SortOrder
    marketOutlook?: SortOrder
    lastUpdated?: SortOrder
    nextUpdate?: SortOrder
  }

  export type IndustryInsightSumOrderByAggregateInput = {
    growthRate?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type UserCreateskillsInput = {
    set: string[]
  }

  export type ResumeCreateNestedOneWithoutUserInput = {
    create?: XOR<ResumeCreateWithoutUserInput, ResumeUncheckedCreateWithoutUserInput>
    connectOrCreate?: ResumeCreateOrConnectWithoutUserInput
    connect?: ResumeWhereUniqueInput
  }

  export type CoverLetterCreateNestedManyWithoutUserInput = {
    create?: XOR<CoverLetterCreateWithoutUserInput, CoverLetterUncheckedCreateWithoutUserInput> | CoverLetterCreateWithoutUserInput[] | CoverLetterUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CoverLetterCreateOrConnectWithoutUserInput | CoverLetterCreateOrConnectWithoutUserInput[]
    createMany?: CoverLetterCreateManyUserInputEnvelope
    connect?: CoverLetterWhereUniqueInput | CoverLetterWhereUniqueInput[]
  }

  export type MockInterviewCreateNestedManyWithoutUserInput = {
    create?: XOR<MockInterviewCreateWithoutUserInput, MockInterviewUncheckedCreateWithoutUserInput> | MockInterviewCreateWithoutUserInput[] | MockInterviewUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MockInterviewCreateOrConnectWithoutUserInput | MockInterviewCreateOrConnectWithoutUserInput[]
    createMany?: MockInterviewCreateManyUserInputEnvelope
    connect?: MockInterviewWhereUniqueInput | MockInterviewWhereUniqueInput[]
  }

  export type SkillGapAnalysisCreateNestedManyWithoutUserInput = {
    create?: XOR<SkillGapAnalysisCreateWithoutUserInput, SkillGapAnalysisUncheckedCreateWithoutUserInput> | SkillGapAnalysisCreateWithoutUserInput[] | SkillGapAnalysisUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SkillGapAnalysisCreateOrConnectWithoutUserInput | SkillGapAnalysisCreateOrConnectWithoutUserInput[]
    createMany?: SkillGapAnalysisCreateManyUserInputEnvelope
    connect?: SkillGapAnalysisWhereUniqueInput | SkillGapAnalysisWhereUniqueInput[]
  }

  export type IndustryInsightCreateNestedManyWithoutUsersInput = {
    create?: XOR<IndustryInsightCreateWithoutUsersInput, IndustryInsightUncheckedCreateWithoutUsersInput> | IndustryInsightCreateWithoutUsersInput[] | IndustryInsightUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: IndustryInsightCreateOrConnectWithoutUsersInput | IndustryInsightCreateOrConnectWithoutUsersInput[]
    connect?: IndustryInsightWhereUniqueInput | IndustryInsightWhereUniqueInput[]
  }

  export type ResumeUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<ResumeCreateWithoutUserInput, ResumeUncheckedCreateWithoutUserInput>
    connectOrCreate?: ResumeCreateOrConnectWithoutUserInput
    connect?: ResumeWhereUniqueInput
  }

  export type CoverLetterUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<CoverLetterCreateWithoutUserInput, CoverLetterUncheckedCreateWithoutUserInput> | CoverLetterCreateWithoutUserInput[] | CoverLetterUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CoverLetterCreateOrConnectWithoutUserInput | CoverLetterCreateOrConnectWithoutUserInput[]
    createMany?: CoverLetterCreateManyUserInputEnvelope
    connect?: CoverLetterWhereUniqueInput | CoverLetterWhereUniqueInput[]
  }

  export type MockInterviewUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<MockInterviewCreateWithoutUserInput, MockInterviewUncheckedCreateWithoutUserInput> | MockInterviewCreateWithoutUserInput[] | MockInterviewUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MockInterviewCreateOrConnectWithoutUserInput | MockInterviewCreateOrConnectWithoutUserInput[]
    createMany?: MockInterviewCreateManyUserInputEnvelope
    connect?: MockInterviewWhereUniqueInput | MockInterviewWhereUniqueInput[]
  }

  export type SkillGapAnalysisUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SkillGapAnalysisCreateWithoutUserInput, SkillGapAnalysisUncheckedCreateWithoutUserInput> | SkillGapAnalysisCreateWithoutUserInput[] | SkillGapAnalysisUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SkillGapAnalysisCreateOrConnectWithoutUserInput | SkillGapAnalysisCreateOrConnectWithoutUserInput[]
    createMany?: SkillGapAnalysisCreateManyUserInputEnvelope
    connect?: SkillGapAnalysisWhereUniqueInput | SkillGapAnalysisWhereUniqueInput[]
  }

  export type IndustryInsightUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<IndustryInsightCreateWithoutUsersInput, IndustryInsightUncheckedCreateWithoutUsersInput> | IndustryInsightCreateWithoutUsersInput[] | IndustryInsightUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: IndustryInsightCreateOrConnectWithoutUsersInput | IndustryInsightCreateOrConnectWithoutUsersInput[]
    connect?: IndustryInsightWhereUniqueInput | IndustryInsightWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UserUpdateskillsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type ResumeUpdateOneWithoutUserNestedInput = {
    create?: XOR<ResumeCreateWithoutUserInput, ResumeUncheckedCreateWithoutUserInput>
    connectOrCreate?: ResumeCreateOrConnectWithoutUserInput
    upsert?: ResumeUpsertWithoutUserInput
    disconnect?: ResumeWhereInput | boolean
    delete?: ResumeWhereInput | boolean
    connect?: ResumeWhereUniqueInput
    update?: XOR<XOR<ResumeUpdateToOneWithWhereWithoutUserInput, ResumeUpdateWithoutUserInput>, ResumeUncheckedUpdateWithoutUserInput>
  }

  export type CoverLetterUpdateManyWithoutUserNestedInput = {
    create?: XOR<CoverLetterCreateWithoutUserInput, CoverLetterUncheckedCreateWithoutUserInput> | CoverLetterCreateWithoutUserInput[] | CoverLetterUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CoverLetterCreateOrConnectWithoutUserInput | CoverLetterCreateOrConnectWithoutUserInput[]
    upsert?: CoverLetterUpsertWithWhereUniqueWithoutUserInput | CoverLetterUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CoverLetterCreateManyUserInputEnvelope
    set?: CoverLetterWhereUniqueInput | CoverLetterWhereUniqueInput[]
    disconnect?: CoverLetterWhereUniqueInput | CoverLetterWhereUniqueInput[]
    delete?: CoverLetterWhereUniqueInput | CoverLetterWhereUniqueInput[]
    connect?: CoverLetterWhereUniqueInput | CoverLetterWhereUniqueInput[]
    update?: CoverLetterUpdateWithWhereUniqueWithoutUserInput | CoverLetterUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CoverLetterUpdateManyWithWhereWithoutUserInput | CoverLetterUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CoverLetterScalarWhereInput | CoverLetterScalarWhereInput[]
  }

  export type MockInterviewUpdateManyWithoutUserNestedInput = {
    create?: XOR<MockInterviewCreateWithoutUserInput, MockInterviewUncheckedCreateWithoutUserInput> | MockInterviewCreateWithoutUserInput[] | MockInterviewUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MockInterviewCreateOrConnectWithoutUserInput | MockInterviewCreateOrConnectWithoutUserInput[]
    upsert?: MockInterviewUpsertWithWhereUniqueWithoutUserInput | MockInterviewUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: MockInterviewCreateManyUserInputEnvelope
    set?: MockInterviewWhereUniqueInput | MockInterviewWhereUniqueInput[]
    disconnect?: MockInterviewWhereUniqueInput | MockInterviewWhereUniqueInput[]
    delete?: MockInterviewWhereUniqueInput | MockInterviewWhereUniqueInput[]
    connect?: MockInterviewWhereUniqueInput | MockInterviewWhereUniqueInput[]
    update?: MockInterviewUpdateWithWhereUniqueWithoutUserInput | MockInterviewUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: MockInterviewUpdateManyWithWhereWithoutUserInput | MockInterviewUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: MockInterviewScalarWhereInput | MockInterviewScalarWhereInput[]
  }

  export type SkillGapAnalysisUpdateManyWithoutUserNestedInput = {
    create?: XOR<SkillGapAnalysisCreateWithoutUserInput, SkillGapAnalysisUncheckedCreateWithoutUserInput> | SkillGapAnalysisCreateWithoutUserInput[] | SkillGapAnalysisUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SkillGapAnalysisCreateOrConnectWithoutUserInput | SkillGapAnalysisCreateOrConnectWithoutUserInput[]
    upsert?: SkillGapAnalysisUpsertWithWhereUniqueWithoutUserInput | SkillGapAnalysisUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SkillGapAnalysisCreateManyUserInputEnvelope
    set?: SkillGapAnalysisWhereUniqueInput | SkillGapAnalysisWhereUniqueInput[]
    disconnect?: SkillGapAnalysisWhereUniqueInput | SkillGapAnalysisWhereUniqueInput[]
    delete?: SkillGapAnalysisWhereUniqueInput | SkillGapAnalysisWhereUniqueInput[]
    connect?: SkillGapAnalysisWhereUniqueInput | SkillGapAnalysisWhereUniqueInput[]
    update?: SkillGapAnalysisUpdateWithWhereUniqueWithoutUserInput | SkillGapAnalysisUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SkillGapAnalysisUpdateManyWithWhereWithoutUserInput | SkillGapAnalysisUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SkillGapAnalysisScalarWhereInput | SkillGapAnalysisScalarWhereInput[]
  }

  export type IndustryInsightUpdateManyWithoutUsersNestedInput = {
    create?: XOR<IndustryInsightCreateWithoutUsersInput, IndustryInsightUncheckedCreateWithoutUsersInput> | IndustryInsightCreateWithoutUsersInput[] | IndustryInsightUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: IndustryInsightCreateOrConnectWithoutUsersInput | IndustryInsightCreateOrConnectWithoutUsersInput[]
    upsert?: IndustryInsightUpsertWithWhereUniqueWithoutUsersInput | IndustryInsightUpsertWithWhereUniqueWithoutUsersInput[]
    set?: IndustryInsightWhereUniqueInput | IndustryInsightWhereUniqueInput[]
    disconnect?: IndustryInsightWhereUniqueInput | IndustryInsightWhereUniqueInput[]
    delete?: IndustryInsightWhereUniqueInput | IndustryInsightWhereUniqueInput[]
    connect?: IndustryInsightWhereUniqueInput | IndustryInsightWhereUniqueInput[]
    update?: IndustryInsightUpdateWithWhereUniqueWithoutUsersInput | IndustryInsightUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: IndustryInsightUpdateManyWithWhereWithoutUsersInput | IndustryInsightUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: IndustryInsightScalarWhereInput | IndustryInsightScalarWhereInput[]
  }

  export type ResumeUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<ResumeCreateWithoutUserInput, ResumeUncheckedCreateWithoutUserInput>
    connectOrCreate?: ResumeCreateOrConnectWithoutUserInput
    upsert?: ResumeUpsertWithoutUserInput
    disconnect?: ResumeWhereInput | boolean
    delete?: ResumeWhereInput | boolean
    connect?: ResumeWhereUniqueInput
    update?: XOR<XOR<ResumeUpdateToOneWithWhereWithoutUserInput, ResumeUpdateWithoutUserInput>, ResumeUncheckedUpdateWithoutUserInput>
  }

  export type CoverLetterUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<CoverLetterCreateWithoutUserInput, CoverLetterUncheckedCreateWithoutUserInput> | CoverLetterCreateWithoutUserInput[] | CoverLetterUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CoverLetterCreateOrConnectWithoutUserInput | CoverLetterCreateOrConnectWithoutUserInput[]
    upsert?: CoverLetterUpsertWithWhereUniqueWithoutUserInput | CoverLetterUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CoverLetterCreateManyUserInputEnvelope
    set?: CoverLetterWhereUniqueInput | CoverLetterWhereUniqueInput[]
    disconnect?: CoverLetterWhereUniqueInput | CoverLetterWhereUniqueInput[]
    delete?: CoverLetterWhereUniqueInput | CoverLetterWhereUniqueInput[]
    connect?: CoverLetterWhereUniqueInput | CoverLetterWhereUniqueInput[]
    update?: CoverLetterUpdateWithWhereUniqueWithoutUserInput | CoverLetterUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CoverLetterUpdateManyWithWhereWithoutUserInput | CoverLetterUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CoverLetterScalarWhereInput | CoverLetterScalarWhereInput[]
  }

  export type MockInterviewUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<MockInterviewCreateWithoutUserInput, MockInterviewUncheckedCreateWithoutUserInput> | MockInterviewCreateWithoutUserInput[] | MockInterviewUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MockInterviewCreateOrConnectWithoutUserInput | MockInterviewCreateOrConnectWithoutUserInput[]
    upsert?: MockInterviewUpsertWithWhereUniqueWithoutUserInput | MockInterviewUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: MockInterviewCreateManyUserInputEnvelope
    set?: MockInterviewWhereUniqueInput | MockInterviewWhereUniqueInput[]
    disconnect?: MockInterviewWhereUniqueInput | MockInterviewWhereUniqueInput[]
    delete?: MockInterviewWhereUniqueInput | MockInterviewWhereUniqueInput[]
    connect?: MockInterviewWhereUniqueInput | MockInterviewWhereUniqueInput[]
    update?: MockInterviewUpdateWithWhereUniqueWithoutUserInput | MockInterviewUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: MockInterviewUpdateManyWithWhereWithoutUserInput | MockInterviewUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: MockInterviewScalarWhereInput | MockInterviewScalarWhereInput[]
  }

  export type SkillGapAnalysisUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SkillGapAnalysisCreateWithoutUserInput, SkillGapAnalysisUncheckedCreateWithoutUserInput> | SkillGapAnalysisCreateWithoutUserInput[] | SkillGapAnalysisUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SkillGapAnalysisCreateOrConnectWithoutUserInput | SkillGapAnalysisCreateOrConnectWithoutUserInput[]
    upsert?: SkillGapAnalysisUpsertWithWhereUniqueWithoutUserInput | SkillGapAnalysisUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SkillGapAnalysisCreateManyUserInputEnvelope
    set?: SkillGapAnalysisWhereUniqueInput | SkillGapAnalysisWhereUniqueInput[]
    disconnect?: SkillGapAnalysisWhereUniqueInput | SkillGapAnalysisWhereUniqueInput[]
    delete?: SkillGapAnalysisWhereUniqueInput | SkillGapAnalysisWhereUniqueInput[]
    connect?: SkillGapAnalysisWhereUniqueInput | SkillGapAnalysisWhereUniqueInput[]
    update?: SkillGapAnalysisUpdateWithWhereUniqueWithoutUserInput | SkillGapAnalysisUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SkillGapAnalysisUpdateManyWithWhereWithoutUserInput | SkillGapAnalysisUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SkillGapAnalysisScalarWhereInput | SkillGapAnalysisScalarWhereInput[]
  }

  export type IndustryInsightUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<IndustryInsightCreateWithoutUsersInput, IndustryInsightUncheckedCreateWithoutUsersInput> | IndustryInsightCreateWithoutUsersInput[] | IndustryInsightUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: IndustryInsightCreateOrConnectWithoutUsersInput | IndustryInsightCreateOrConnectWithoutUsersInput[]
    upsert?: IndustryInsightUpsertWithWhereUniqueWithoutUsersInput | IndustryInsightUpsertWithWhereUniqueWithoutUsersInput[]
    set?: IndustryInsightWhereUniqueInput | IndustryInsightWhereUniqueInput[]
    disconnect?: IndustryInsightWhereUniqueInput | IndustryInsightWhereUniqueInput[]
    delete?: IndustryInsightWhereUniqueInput | IndustryInsightWhereUniqueInput[]
    connect?: IndustryInsightWhereUniqueInput | IndustryInsightWhereUniqueInput[]
    update?: IndustryInsightUpdateWithWhereUniqueWithoutUsersInput | IndustryInsightUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: IndustryInsightUpdateManyWithWhereWithoutUsersInput | IndustryInsightUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: IndustryInsightScalarWhereInput | IndustryInsightScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutResumeInput = {
    create?: XOR<UserCreateWithoutResumeInput, UserUncheckedCreateWithoutResumeInput>
    connectOrCreate?: UserCreateOrConnectWithoutResumeInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutResumeNestedInput = {
    create?: XOR<UserCreateWithoutResumeInput, UserUncheckedCreateWithoutResumeInput>
    connectOrCreate?: UserCreateOrConnectWithoutResumeInput
    upsert?: UserUpsertWithoutResumeInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutResumeInput, UserUpdateWithoutResumeInput>, UserUncheckedUpdateWithoutResumeInput>
  }

  export type UserCreateNestedOneWithoutCoverLettersInput = {
    create?: XOR<UserCreateWithoutCoverLettersInput, UserUncheckedCreateWithoutCoverLettersInput>
    connectOrCreate?: UserCreateOrConnectWithoutCoverLettersInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutCoverLettersNestedInput = {
    create?: XOR<UserCreateWithoutCoverLettersInput, UserUncheckedCreateWithoutCoverLettersInput>
    connectOrCreate?: UserCreateOrConnectWithoutCoverLettersInput
    upsert?: UserUpsertWithoutCoverLettersInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCoverLettersInput, UserUpdateWithoutCoverLettersInput>, UserUncheckedUpdateWithoutCoverLettersInput>
  }

  export type UserCreateNestedOneWithoutMockInterviewsInput = {
    create?: XOR<UserCreateWithoutMockInterviewsInput, UserUncheckedCreateWithoutMockInterviewsInput>
    connectOrCreate?: UserCreateOrConnectWithoutMockInterviewsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutMockInterviewsNestedInput = {
    create?: XOR<UserCreateWithoutMockInterviewsInput, UserUncheckedCreateWithoutMockInterviewsInput>
    connectOrCreate?: UserCreateOrConnectWithoutMockInterviewsInput
    upsert?: UserUpsertWithoutMockInterviewsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutMockInterviewsInput, UserUpdateWithoutMockInterviewsInput>, UserUncheckedUpdateWithoutMockInterviewsInput>
  }

  export type SkillGapAnalysisCreatecurrentSkillsInput = {
    set: string[]
  }

  export type SkillGapAnalysisCreaterequiredSkillsInput = {
    set: string[]
  }

  export type SkillGapAnalysisCreategapsInput = {
    set: string[]
  }

  export type SkillGapAnalysisCreaterecommendationsInput = {
    set: string[]
  }

  export type UserCreateNestedOneWithoutSkillGapsInput = {
    create?: XOR<UserCreateWithoutSkillGapsInput, UserUncheckedCreateWithoutSkillGapsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSkillGapsInput
    connect?: UserWhereUniqueInput
  }

  export type SkillGapAnalysisUpdatecurrentSkillsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type SkillGapAnalysisUpdaterequiredSkillsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type SkillGapAnalysisUpdategapsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type SkillGapAnalysisUpdaterecommendationsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type UserUpdateOneRequiredWithoutSkillGapsNestedInput = {
    create?: XOR<UserCreateWithoutSkillGapsInput, UserUncheckedCreateWithoutSkillGapsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSkillGapsInput
    upsert?: UserUpsertWithoutSkillGapsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSkillGapsInput, UserUpdateWithoutSkillGapsInput>, UserUncheckedUpdateWithoutSkillGapsInput>
  }

  export type IndustryInsightCreatesalaryRangesInput = {
    set: InputJsonValue[]
  }

  export type IndustryInsightCreatetopSkillsInput = {
    set: string[]
  }

  export type IndustryInsightCreatekeyTrendsInput = {
    set: string[]
  }

  export type IndustryInsightCreaterecommendedSkillsInput = {
    set: string[]
  }

  export type UserCreateNestedManyWithoutIndustryInsightsInput = {
    create?: XOR<UserCreateWithoutIndustryInsightsInput, UserUncheckedCreateWithoutIndustryInsightsInput> | UserCreateWithoutIndustryInsightsInput[] | UserUncheckedCreateWithoutIndustryInsightsInput[]
    connectOrCreate?: UserCreateOrConnectWithoutIndustryInsightsInput | UserCreateOrConnectWithoutIndustryInsightsInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutIndustryInsightsInput = {
    create?: XOR<UserCreateWithoutIndustryInsightsInput, UserUncheckedCreateWithoutIndustryInsightsInput> | UserCreateWithoutIndustryInsightsInput[] | UserUncheckedCreateWithoutIndustryInsightsInput[]
    connectOrCreate?: UserCreateOrConnectWithoutIndustryInsightsInput | UserCreateOrConnectWithoutIndustryInsightsInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type IndustryInsightUpdatesalaryRangesInput = {
    set?: InputJsonValue[]
    push?: InputJsonValue | InputJsonValue[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type IndustryInsightUpdatetopSkillsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type IndustryInsightUpdatekeyTrendsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type IndustryInsightUpdaterecommendedSkillsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type UserUpdateManyWithoutIndustryInsightsNestedInput = {
    create?: XOR<UserCreateWithoutIndustryInsightsInput, UserUncheckedCreateWithoutIndustryInsightsInput> | UserCreateWithoutIndustryInsightsInput[] | UserUncheckedCreateWithoutIndustryInsightsInput[]
    connectOrCreate?: UserCreateOrConnectWithoutIndustryInsightsInput | UserCreateOrConnectWithoutIndustryInsightsInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutIndustryInsightsInput | UserUpsertWithWhereUniqueWithoutIndustryInsightsInput[]
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutIndustryInsightsInput | UserUpdateWithWhereUniqueWithoutIndustryInsightsInput[]
    updateMany?: UserUpdateManyWithWhereWithoutIndustryInsightsInput | UserUpdateManyWithWhereWithoutIndustryInsightsInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutIndustryInsightsNestedInput = {
    create?: XOR<UserCreateWithoutIndustryInsightsInput, UserUncheckedCreateWithoutIndustryInsightsInput> | UserCreateWithoutIndustryInsightsInput[] | UserUncheckedCreateWithoutIndustryInsightsInput[]
    connectOrCreate?: UserCreateOrConnectWithoutIndustryInsightsInput | UserCreateOrConnectWithoutIndustryInsightsInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutIndustryInsightsInput | UserUpsertWithWhereUniqueWithoutIndustryInsightsInput[]
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutIndustryInsightsInput | UserUpdateWithWhereUniqueWithoutIndustryInsightsInput[]
    updateMany?: UserUpdateManyWithWhereWithoutIndustryInsightsInput | UserUpdateManyWithWhereWithoutIndustryInsightsInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
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

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
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
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
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

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type ResumeCreateWithoutUserInput = {
    id?: string
    content: string
    createdAt?: Date | string
  }

  export type ResumeUncheckedCreateWithoutUserInput = {
    id?: string
    content: string
    createdAt?: Date | string
  }

  export type ResumeCreateOrConnectWithoutUserInput = {
    where: ResumeWhereUniqueInput
    create: XOR<ResumeCreateWithoutUserInput, ResumeUncheckedCreateWithoutUserInput>
  }

  export type CoverLetterCreateWithoutUserInput = {
    id?: string
    content: string
    createdAt?: Date | string
  }

  export type CoverLetterUncheckedCreateWithoutUserInput = {
    id?: string
    content: string
    createdAt?: Date | string
  }

  export type CoverLetterCreateOrConnectWithoutUserInput = {
    where: CoverLetterWhereUniqueInput
    create: XOR<CoverLetterCreateWithoutUserInput, CoverLetterUncheckedCreateWithoutUserInput>
  }

  export type CoverLetterCreateManyUserInputEnvelope = {
    data: CoverLetterCreateManyUserInput | CoverLetterCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type MockInterviewCreateWithoutUserInput = {
    id?: string
    questions: JsonNullValueInput | InputJsonValue
    feedback?: string | null
    createdAt?: Date | string
  }

  export type MockInterviewUncheckedCreateWithoutUserInput = {
    id?: string
    questions: JsonNullValueInput | InputJsonValue
    feedback?: string | null
    createdAt?: Date | string
  }

  export type MockInterviewCreateOrConnectWithoutUserInput = {
    where: MockInterviewWhereUniqueInput
    create: XOR<MockInterviewCreateWithoutUserInput, MockInterviewUncheckedCreateWithoutUserInput>
  }

  export type MockInterviewCreateManyUserInputEnvelope = {
    data: MockInterviewCreateManyUserInput | MockInterviewCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type SkillGapAnalysisCreateWithoutUserInput = {
    id?: string
    currentSkills?: SkillGapAnalysisCreatecurrentSkillsInput | string[]
    requiredSkills?: SkillGapAnalysisCreaterequiredSkillsInput | string[]
    gaps?: SkillGapAnalysisCreategapsInput | string[]
    recommendations?: SkillGapAnalysisCreaterecommendationsInput | string[]
    createdAt?: Date | string
  }

  export type SkillGapAnalysisUncheckedCreateWithoutUserInput = {
    id?: string
    currentSkills?: SkillGapAnalysisCreatecurrentSkillsInput | string[]
    requiredSkills?: SkillGapAnalysisCreaterequiredSkillsInput | string[]
    gaps?: SkillGapAnalysisCreategapsInput | string[]
    recommendations?: SkillGapAnalysisCreaterecommendationsInput | string[]
    createdAt?: Date | string
  }

  export type SkillGapAnalysisCreateOrConnectWithoutUserInput = {
    where: SkillGapAnalysisWhereUniqueInput
    create: XOR<SkillGapAnalysisCreateWithoutUserInput, SkillGapAnalysisUncheckedCreateWithoutUserInput>
  }

  export type SkillGapAnalysisCreateManyUserInputEnvelope = {
    data: SkillGapAnalysisCreateManyUserInput | SkillGapAnalysisCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type IndustryInsightCreateWithoutUsersInput = {
    id?: string
    industry: string
    salaryRanges?: IndustryInsightCreatesalaryRangesInput | InputJsonValue[]
    growthRate: number
    demandLevel: string
    topSkills?: IndustryInsightCreatetopSkillsInput | string[]
    marketOutlook: string
    keyTrends?: IndustryInsightCreatekeyTrendsInput | string[]
    recommendedSkills?: IndustryInsightCreaterecommendedSkillsInput | string[]
    lastUpdated?: Date | string
    nextUpdate: Date | string
  }

  export type IndustryInsightUncheckedCreateWithoutUsersInput = {
    id?: string
    industry: string
    salaryRanges?: IndustryInsightCreatesalaryRangesInput | InputJsonValue[]
    growthRate: number
    demandLevel: string
    topSkills?: IndustryInsightCreatetopSkillsInput | string[]
    marketOutlook: string
    keyTrends?: IndustryInsightCreatekeyTrendsInput | string[]
    recommendedSkills?: IndustryInsightCreaterecommendedSkillsInput | string[]
    lastUpdated?: Date | string
    nextUpdate: Date | string
  }

  export type IndustryInsightCreateOrConnectWithoutUsersInput = {
    where: IndustryInsightWhereUniqueInput
    create: XOR<IndustryInsightCreateWithoutUsersInput, IndustryInsightUncheckedCreateWithoutUsersInput>
  }

  export type ResumeUpsertWithoutUserInput = {
    update: XOR<ResumeUpdateWithoutUserInput, ResumeUncheckedUpdateWithoutUserInput>
    create: XOR<ResumeCreateWithoutUserInput, ResumeUncheckedCreateWithoutUserInput>
    where?: ResumeWhereInput
  }

  export type ResumeUpdateToOneWithWhereWithoutUserInput = {
    where?: ResumeWhereInput
    data: XOR<ResumeUpdateWithoutUserInput, ResumeUncheckedUpdateWithoutUserInput>
  }

  export type ResumeUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ResumeUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CoverLetterUpsertWithWhereUniqueWithoutUserInput = {
    where: CoverLetterWhereUniqueInput
    update: XOR<CoverLetterUpdateWithoutUserInput, CoverLetterUncheckedUpdateWithoutUserInput>
    create: XOR<CoverLetterCreateWithoutUserInput, CoverLetterUncheckedCreateWithoutUserInput>
  }

  export type CoverLetterUpdateWithWhereUniqueWithoutUserInput = {
    where: CoverLetterWhereUniqueInput
    data: XOR<CoverLetterUpdateWithoutUserInput, CoverLetterUncheckedUpdateWithoutUserInput>
  }

  export type CoverLetterUpdateManyWithWhereWithoutUserInput = {
    where: CoverLetterScalarWhereInput
    data: XOR<CoverLetterUpdateManyMutationInput, CoverLetterUncheckedUpdateManyWithoutUserInput>
  }

  export type CoverLetterScalarWhereInput = {
    AND?: CoverLetterScalarWhereInput | CoverLetterScalarWhereInput[]
    OR?: CoverLetterScalarWhereInput[]
    NOT?: CoverLetterScalarWhereInput | CoverLetterScalarWhereInput[]
    id?: StringFilter<"CoverLetter"> | string
    userId?: StringFilter<"CoverLetter"> | string
    content?: StringFilter<"CoverLetter"> | string
    createdAt?: DateTimeFilter<"CoverLetter"> | Date | string
  }

  export type MockInterviewUpsertWithWhereUniqueWithoutUserInput = {
    where: MockInterviewWhereUniqueInput
    update: XOR<MockInterviewUpdateWithoutUserInput, MockInterviewUncheckedUpdateWithoutUserInput>
    create: XOR<MockInterviewCreateWithoutUserInput, MockInterviewUncheckedCreateWithoutUserInput>
  }

  export type MockInterviewUpdateWithWhereUniqueWithoutUserInput = {
    where: MockInterviewWhereUniqueInput
    data: XOR<MockInterviewUpdateWithoutUserInput, MockInterviewUncheckedUpdateWithoutUserInput>
  }

  export type MockInterviewUpdateManyWithWhereWithoutUserInput = {
    where: MockInterviewScalarWhereInput
    data: XOR<MockInterviewUpdateManyMutationInput, MockInterviewUncheckedUpdateManyWithoutUserInput>
  }

  export type MockInterviewScalarWhereInput = {
    AND?: MockInterviewScalarWhereInput | MockInterviewScalarWhereInput[]
    OR?: MockInterviewScalarWhereInput[]
    NOT?: MockInterviewScalarWhereInput | MockInterviewScalarWhereInput[]
    id?: StringFilter<"MockInterview"> | string
    userId?: StringFilter<"MockInterview"> | string
    questions?: JsonFilter<"MockInterview">
    feedback?: StringNullableFilter<"MockInterview"> | string | null
    createdAt?: DateTimeFilter<"MockInterview"> | Date | string
  }

  export type SkillGapAnalysisUpsertWithWhereUniqueWithoutUserInput = {
    where: SkillGapAnalysisWhereUniqueInput
    update: XOR<SkillGapAnalysisUpdateWithoutUserInput, SkillGapAnalysisUncheckedUpdateWithoutUserInput>
    create: XOR<SkillGapAnalysisCreateWithoutUserInput, SkillGapAnalysisUncheckedCreateWithoutUserInput>
  }

  export type SkillGapAnalysisUpdateWithWhereUniqueWithoutUserInput = {
    where: SkillGapAnalysisWhereUniqueInput
    data: XOR<SkillGapAnalysisUpdateWithoutUserInput, SkillGapAnalysisUncheckedUpdateWithoutUserInput>
  }

  export type SkillGapAnalysisUpdateManyWithWhereWithoutUserInput = {
    where: SkillGapAnalysisScalarWhereInput
    data: XOR<SkillGapAnalysisUpdateManyMutationInput, SkillGapAnalysisUncheckedUpdateManyWithoutUserInput>
  }

  export type SkillGapAnalysisScalarWhereInput = {
    AND?: SkillGapAnalysisScalarWhereInput | SkillGapAnalysisScalarWhereInput[]
    OR?: SkillGapAnalysisScalarWhereInput[]
    NOT?: SkillGapAnalysisScalarWhereInput | SkillGapAnalysisScalarWhereInput[]
    id?: StringFilter<"SkillGapAnalysis"> | string
    userId?: StringFilter<"SkillGapAnalysis"> | string
    currentSkills?: StringNullableListFilter<"SkillGapAnalysis">
    requiredSkills?: StringNullableListFilter<"SkillGapAnalysis">
    gaps?: StringNullableListFilter<"SkillGapAnalysis">
    recommendations?: StringNullableListFilter<"SkillGapAnalysis">
    createdAt?: DateTimeFilter<"SkillGapAnalysis"> | Date | string
  }

  export type IndustryInsightUpsertWithWhereUniqueWithoutUsersInput = {
    where: IndustryInsightWhereUniqueInput
    update: XOR<IndustryInsightUpdateWithoutUsersInput, IndustryInsightUncheckedUpdateWithoutUsersInput>
    create: XOR<IndustryInsightCreateWithoutUsersInput, IndustryInsightUncheckedCreateWithoutUsersInput>
  }

  export type IndustryInsightUpdateWithWhereUniqueWithoutUsersInput = {
    where: IndustryInsightWhereUniqueInput
    data: XOR<IndustryInsightUpdateWithoutUsersInput, IndustryInsightUncheckedUpdateWithoutUsersInput>
  }

  export type IndustryInsightUpdateManyWithWhereWithoutUsersInput = {
    where: IndustryInsightScalarWhereInput
    data: XOR<IndustryInsightUpdateManyMutationInput, IndustryInsightUncheckedUpdateManyWithoutUsersInput>
  }

  export type IndustryInsightScalarWhereInput = {
    AND?: IndustryInsightScalarWhereInput | IndustryInsightScalarWhereInput[]
    OR?: IndustryInsightScalarWhereInput[]
    NOT?: IndustryInsightScalarWhereInput | IndustryInsightScalarWhereInput[]
    id?: StringFilter<"IndustryInsight"> | string
    industry?: StringFilter<"IndustryInsight"> | string
    salaryRanges?: JsonNullableListFilter<"IndustryInsight">
    growthRate?: FloatFilter<"IndustryInsight"> | number
    demandLevel?: StringFilter<"IndustryInsight"> | string
    topSkills?: StringNullableListFilter<"IndustryInsight">
    marketOutlook?: StringFilter<"IndustryInsight"> | string
    keyTrends?: StringNullableListFilter<"IndustryInsight">
    recommendedSkills?: StringNullableListFilter<"IndustryInsight">
    lastUpdated?: DateTimeFilter<"IndustryInsight"> | Date | string
    nextUpdate?: DateTimeFilter<"IndustryInsight"> | Date | string
  }

  export type UserCreateWithoutResumeInput = {
    id?: string
    clerkUserId: string
    email: string
    name?: string | null
    imageUrl?: string | null
    bio?: string | null
    experience?: number | null
    industry?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    skills?: UserCreateskillsInput | string[]
    coverLetters?: CoverLetterCreateNestedManyWithoutUserInput
    mockInterviews?: MockInterviewCreateNestedManyWithoutUserInput
    skillGaps?: SkillGapAnalysisCreateNestedManyWithoutUserInput
    industryInsights?: IndustryInsightCreateNestedManyWithoutUsersInput
  }

  export type UserUncheckedCreateWithoutResumeInput = {
    id?: string
    clerkUserId: string
    email: string
    name?: string | null
    imageUrl?: string | null
    bio?: string | null
    experience?: number | null
    industry?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    skills?: UserCreateskillsInput | string[]
    coverLetters?: CoverLetterUncheckedCreateNestedManyWithoutUserInput
    mockInterviews?: MockInterviewUncheckedCreateNestedManyWithoutUserInput
    skillGaps?: SkillGapAnalysisUncheckedCreateNestedManyWithoutUserInput
    industryInsights?: IndustryInsightUncheckedCreateNestedManyWithoutUsersInput
  }

  export type UserCreateOrConnectWithoutResumeInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutResumeInput, UserUncheckedCreateWithoutResumeInput>
  }

  export type UserUpsertWithoutResumeInput = {
    update: XOR<UserUpdateWithoutResumeInput, UserUncheckedUpdateWithoutResumeInput>
    create: XOR<UserCreateWithoutResumeInput, UserUncheckedCreateWithoutResumeInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutResumeInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutResumeInput, UserUncheckedUpdateWithoutResumeInput>
  }

  export type UserUpdateWithoutResumeInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkUserId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    experience?: NullableIntFieldUpdateOperationsInput | number | null
    industry?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    skills?: UserUpdateskillsInput | string[]
    coverLetters?: CoverLetterUpdateManyWithoutUserNestedInput
    mockInterviews?: MockInterviewUpdateManyWithoutUserNestedInput
    skillGaps?: SkillGapAnalysisUpdateManyWithoutUserNestedInput
    industryInsights?: IndustryInsightUpdateManyWithoutUsersNestedInput
  }

  export type UserUncheckedUpdateWithoutResumeInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkUserId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    experience?: NullableIntFieldUpdateOperationsInput | number | null
    industry?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    skills?: UserUpdateskillsInput | string[]
    coverLetters?: CoverLetterUncheckedUpdateManyWithoutUserNestedInput
    mockInterviews?: MockInterviewUncheckedUpdateManyWithoutUserNestedInput
    skillGaps?: SkillGapAnalysisUncheckedUpdateManyWithoutUserNestedInput
    industryInsights?: IndustryInsightUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type UserCreateWithoutCoverLettersInput = {
    id?: string
    clerkUserId: string
    email: string
    name?: string | null
    imageUrl?: string | null
    bio?: string | null
    experience?: number | null
    industry?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    skills?: UserCreateskillsInput | string[]
    resume?: ResumeCreateNestedOneWithoutUserInput
    mockInterviews?: MockInterviewCreateNestedManyWithoutUserInput
    skillGaps?: SkillGapAnalysisCreateNestedManyWithoutUserInput
    industryInsights?: IndustryInsightCreateNestedManyWithoutUsersInput
  }

  export type UserUncheckedCreateWithoutCoverLettersInput = {
    id?: string
    clerkUserId: string
    email: string
    name?: string | null
    imageUrl?: string | null
    bio?: string | null
    experience?: number | null
    industry?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    skills?: UserCreateskillsInput | string[]
    resume?: ResumeUncheckedCreateNestedOneWithoutUserInput
    mockInterviews?: MockInterviewUncheckedCreateNestedManyWithoutUserInput
    skillGaps?: SkillGapAnalysisUncheckedCreateNestedManyWithoutUserInput
    industryInsights?: IndustryInsightUncheckedCreateNestedManyWithoutUsersInput
  }

  export type UserCreateOrConnectWithoutCoverLettersInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCoverLettersInput, UserUncheckedCreateWithoutCoverLettersInput>
  }

  export type UserUpsertWithoutCoverLettersInput = {
    update: XOR<UserUpdateWithoutCoverLettersInput, UserUncheckedUpdateWithoutCoverLettersInput>
    create: XOR<UserCreateWithoutCoverLettersInput, UserUncheckedCreateWithoutCoverLettersInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCoverLettersInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCoverLettersInput, UserUncheckedUpdateWithoutCoverLettersInput>
  }

  export type UserUpdateWithoutCoverLettersInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkUserId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    experience?: NullableIntFieldUpdateOperationsInput | number | null
    industry?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    skills?: UserUpdateskillsInput | string[]
    resume?: ResumeUpdateOneWithoutUserNestedInput
    mockInterviews?: MockInterviewUpdateManyWithoutUserNestedInput
    skillGaps?: SkillGapAnalysisUpdateManyWithoutUserNestedInput
    industryInsights?: IndustryInsightUpdateManyWithoutUsersNestedInput
  }

  export type UserUncheckedUpdateWithoutCoverLettersInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkUserId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    experience?: NullableIntFieldUpdateOperationsInput | number | null
    industry?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    skills?: UserUpdateskillsInput | string[]
    resume?: ResumeUncheckedUpdateOneWithoutUserNestedInput
    mockInterviews?: MockInterviewUncheckedUpdateManyWithoutUserNestedInput
    skillGaps?: SkillGapAnalysisUncheckedUpdateManyWithoutUserNestedInput
    industryInsights?: IndustryInsightUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type UserCreateWithoutMockInterviewsInput = {
    id?: string
    clerkUserId: string
    email: string
    name?: string | null
    imageUrl?: string | null
    bio?: string | null
    experience?: number | null
    industry?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    skills?: UserCreateskillsInput | string[]
    resume?: ResumeCreateNestedOneWithoutUserInput
    coverLetters?: CoverLetterCreateNestedManyWithoutUserInput
    skillGaps?: SkillGapAnalysisCreateNestedManyWithoutUserInput
    industryInsights?: IndustryInsightCreateNestedManyWithoutUsersInput
  }

  export type UserUncheckedCreateWithoutMockInterviewsInput = {
    id?: string
    clerkUserId: string
    email: string
    name?: string | null
    imageUrl?: string | null
    bio?: string | null
    experience?: number | null
    industry?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    skills?: UserCreateskillsInput | string[]
    resume?: ResumeUncheckedCreateNestedOneWithoutUserInput
    coverLetters?: CoverLetterUncheckedCreateNestedManyWithoutUserInput
    skillGaps?: SkillGapAnalysisUncheckedCreateNestedManyWithoutUserInput
    industryInsights?: IndustryInsightUncheckedCreateNestedManyWithoutUsersInput
  }

  export type UserCreateOrConnectWithoutMockInterviewsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutMockInterviewsInput, UserUncheckedCreateWithoutMockInterviewsInput>
  }

  export type UserUpsertWithoutMockInterviewsInput = {
    update: XOR<UserUpdateWithoutMockInterviewsInput, UserUncheckedUpdateWithoutMockInterviewsInput>
    create: XOR<UserCreateWithoutMockInterviewsInput, UserUncheckedCreateWithoutMockInterviewsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutMockInterviewsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutMockInterviewsInput, UserUncheckedUpdateWithoutMockInterviewsInput>
  }

  export type UserUpdateWithoutMockInterviewsInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkUserId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    experience?: NullableIntFieldUpdateOperationsInput | number | null
    industry?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    skills?: UserUpdateskillsInput | string[]
    resume?: ResumeUpdateOneWithoutUserNestedInput
    coverLetters?: CoverLetterUpdateManyWithoutUserNestedInput
    skillGaps?: SkillGapAnalysisUpdateManyWithoutUserNestedInput
    industryInsights?: IndustryInsightUpdateManyWithoutUsersNestedInput
  }

  export type UserUncheckedUpdateWithoutMockInterviewsInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkUserId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    experience?: NullableIntFieldUpdateOperationsInput | number | null
    industry?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    skills?: UserUpdateskillsInput | string[]
    resume?: ResumeUncheckedUpdateOneWithoutUserNestedInput
    coverLetters?: CoverLetterUncheckedUpdateManyWithoutUserNestedInput
    skillGaps?: SkillGapAnalysisUncheckedUpdateManyWithoutUserNestedInput
    industryInsights?: IndustryInsightUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type UserCreateWithoutSkillGapsInput = {
    id?: string
    clerkUserId: string
    email: string
    name?: string | null
    imageUrl?: string | null
    bio?: string | null
    experience?: number | null
    industry?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    skills?: UserCreateskillsInput | string[]
    resume?: ResumeCreateNestedOneWithoutUserInput
    coverLetters?: CoverLetterCreateNestedManyWithoutUserInput
    mockInterviews?: MockInterviewCreateNestedManyWithoutUserInput
    industryInsights?: IndustryInsightCreateNestedManyWithoutUsersInput
  }

  export type UserUncheckedCreateWithoutSkillGapsInput = {
    id?: string
    clerkUserId: string
    email: string
    name?: string | null
    imageUrl?: string | null
    bio?: string | null
    experience?: number | null
    industry?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    skills?: UserCreateskillsInput | string[]
    resume?: ResumeUncheckedCreateNestedOneWithoutUserInput
    coverLetters?: CoverLetterUncheckedCreateNestedManyWithoutUserInput
    mockInterviews?: MockInterviewUncheckedCreateNestedManyWithoutUserInput
    industryInsights?: IndustryInsightUncheckedCreateNestedManyWithoutUsersInput
  }

  export type UserCreateOrConnectWithoutSkillGapsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSkillGapsInput, UserUncheckedCreateWithoutSkillGapsInput>
  }

  export type UserUpsertWithoutSkillGapsInput = {
    update: XOR<UserUpdateWithoutSkillGapsInput, UserUncheckedUpdateWithoutSkillGapsInput>
    create: XOR<UserCreateWithoutSkillGapsInput, UserUncheckedCreateWithoutSkillGapsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSkillGapsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSkillGapsInput, UserUncheckedUpdateWithoutSkillGapsInput>
  }

  export type UserUpdateWithoutSkillGapsInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkUserId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    experience?: NullableIntFieldUpdateOperationsInput | number | null
    industry?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    skills?: UserUpdateskillsInput | string[]
    resume?: ResumeUpdateOneWithoutUserNestedInput
    coverLetters?: CoverLetterUpdateManyWithoutUserNestedInput
    mockInterviews?: MockInterviewUpdateManyWithoutUserNestedInput
    industryInsights?: IndustryInsightUpdateManyWithoutUsersNestedInput
  }

  export type UserUncheckedUpdateWithoutSkillGapsInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkUserId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    experience?: NullableIntFieldUpdateOperationsInput | number | null
    industry?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    skills?: UserUpdateskillsInput | string[]
    resume?: ResumeUncheckedUpdateOneWithoutUserNestedInput
    coverLetters?: CoverLetterUncheckedUpdateManyWithoutUserNestedInput
    mockInterviews?: MockInterviewUncheckedUpdateManyWithoutUserNestedInput
    industryInsights?: IndustryInsightUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type UserCreateWithoutIndustryInsightsInput = {
    id?: string
    clerkUserId: string
    email: string
    name?: string | null
    imageUrl?: string | null
    bio?: string | null
    experience?: number | null
    industry?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    skills?: UserCreateskillsInput | string[]
    resume?: ResumeCreateNestedOneWithoutUserInput
    coverLetters?: CoverLetterCreateNestedManyWithoutUserInput
    mockInterviews?: MockInterviewCreateNestedManyWithoutUserInput
    skillGaps?: SkillGapAnalysisCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutIndustryInsightsInput = {
    id?: string
    clerkUserId: string
    email: string
    name?: string | null
    imageUrl?: string | null
    bio?: string | null
    experience?: number | null
    industry?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    skills?: UserCreateskillsInput | string[]
    resume?: ResumeUncheckedCreateNestedOneWithoutUserInput
    coverLetters?: CoverLetterUncheckedCreateNestedManyWithoutUserInput
    mockInterviews?: MockInterviewUncheckedCreateNestedManyWithoutUserInput
    skillGaps?: SkillGapAnalysisUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutIndustryInsightsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutIndustryInsightsInput, UserUncheckedCreateWithoutIndustryInsightsInput>
  }

  export type UserUpsertWithWhereUniqueWithoutIndustryInsightsInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutIndustryInsightsInput, UserUncheckedUpdateWithoutIndustryInsightsInput>
    create: XOR<UserCreateWithoutIndustryInsightsInput, UserUncheckedCreateWithoutIndustryInsightsInput>
  }

  export type UserUpdateWithWhereUniqueWithoutIndustryInsightsInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutIndustryInsightsInput, UserUncheckedUpdateWithoutIndustryInsightsInput>
  }

  export type UserUpdateManyWithWhereWithoutIndustryInsightsInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutIndustryInsightsInput>
  }

  export type UserScalarWhereInput = {
    AND?: UserScalarWhereInput | UserScalarWhereInput[]
    OR?: UserScalarWhereInput[]
    NOT?: UserScalarWhereInput | UserScalarWhereInput[]
    id?: StringFilter<"User"> | string
    clerkUserId?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    imageUrl?: StringNullableFilter<"User"> | string | null
    bio?: StringNullableFilter<"User"> | string | null
    experience?: IntNullableFilter<"User"> | number | null
    industry?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    skills?: StringNullableListFilter<"User">
  }

  export type CoverLetterCreateManyUserInput = {
    id?: string
    content: string
    createdAt?: Date | string
  }

  export type MockInterviewCreateManyUserInput = {
    id?: string
    questions: JsonNullValueInput | InputJsonValue
    feedback?: string | null
    createdAt?: Date | string
  }

  export type SkillGapAnalysisCreateManyUserInput = {
    id?: string
    currentSkills?: SkillGapAnalysisCreatecurrentSkillsInput | string[]
    requiredSkills?: SkillGapAnalysisCreaterequiredSkillsInput | string[]
    gaps?: SkillGapAnalysisCreategapsInput | string[]
    recommendations?: SkillGapAnalysisCreaterecommendationsInput | string[]
    createdAt?: Date | string
  }

  export type CoverLetterUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CoverLetterUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CoverLetterUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MockInterviewUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    questions?: JsonNullValueInput | InputJsonValue
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MockInterviewUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    questions?: JsonNullValueInput | InputJsonValue
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MockInterviewUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    questions?: JsonNullValueInput | InputJsonValue
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SkillGapAnalysisUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    currentSkills?: SkillGapAnalysisUpdatecurrentSkillsInput | string[]
    requiredSkills?: SkillGapAnalysisUpdaterequiredSkillsInput | string[]
    gaps?: SkillGapAnalysisUpdategapsInput | string[]
    recommendations?: SkillGapAnalysisUpdaterecommendationsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SkillGapAnalysisUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    currentSkills?: SkillGapAnalysisUpdatecurrentSkillsInput | string[]
    requiredSkills?: SkillGapAnalysisUpdaterequiredSkillsInput | string[]
    gaps?: SkillGapAnalysisUpdategapsInput | string[]
    recommendations?: SkillGapAnalysisUpdaterecommendationsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SkillGapAnalysisUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    currentSkills?: SkillGapAnalysisUpdatecurrentSkillsInput | string[]
    requiredSkills?: SkillGapAnalysisUpdaterequiredSkillsInput | string[]
    gaps?: SkillGapAnalysisUpdategapsInput | string[]
    recommendations?: SkillGapAnalysisUpdaterecommendationsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IndustryInsightUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    industry?: StringFieldUpdateOperationsInput | string
    salaryRanges?: IndustryInsightUpdatesalaryRangesInput | InputJsonValue[]
    growthRate?: FloatFieldUpdateOperationsInput | number
    demandLevel?: StringFieldUpdateOperationsInput | string
    topSkills?: IndustryInsightUpdatetopSkillsInput | string[]
    marketOutlook?: StringFieldUpdateOperationsInput | string
    keyTrends?: IndustryInsightUpdatekeyTrendsInput | string[]
    recommendedSkills?: IndustryInsightUpdaterecommendedSkillsInput | string[]
    lastUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
    nextUpdate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IndustryInsightUncheckedUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    industry?: StringFieldUpdateOperationsInput | string
    salaryRanges?: IndustryInsightUpdatesalaryRangesInput | InputJsonValue[]
    growthRate?: FloatFieldUpdateOperationsInput | number
    demandLevel?: StringFieldUpdateOperationsInput | string
    topSkills?: IndustryInsightUpdatetopSkillsInput | string[]
    marketOutlook?: StringFieldUpdateOperationsInput | string
    keyTrends?: IndustryInsightUpdatekeyTrendsInput | string[]
    recommendedSkills?: IndustryInsightUpdaterecommendedSkillsInput | string[]
    lastUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
    nextUpdate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IndustryInsightUncheckedUpdateManyWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    industry?: StringFieldUpdateOperationsInput | string
    salaryRanges?: IndustryInsightUpdatesalaryRangesInput | InputJsonValue[]
    growthRate?: FloatFieldUpdateOperationsInput | number
    demandLevel?: StringFieldUpdateOperationsInput | string
    topSkills?: IndustryInsightUpdatetopSkillsInput | string[]
    marketOutlook?: StringFieldUpdateOperationsInput | string
    keyTrends?: IndustryInsightUpdatekeyTrendsInput | string[]
    recommendedSkills?: IndustryInsightUpdaterecommendedSkillsInput | string[]
    lastUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
    nextUpdate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUpdateWithoutIndustryInsightsInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkUserId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    experience?: NullableIntFieldUpdateOperationsInput | number | null
    industry?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    skills?: UserUpdateskillsInput | string[]
    resume?: ResumeUpdateOneWithoutUserNestedInput
    coverLetters?: CoverLetterUpdateManyWithoutUserNestedInput
    mockInterviews?: MockInterviewUpdateManyWithoutUserNestedInput
    skillGaps?: SkillGapAnalysisUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutIndustryInsightsInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkUserId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    experience?: NullableIntFieldUpdateOperationsInput | number | null
    industry?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    skills?: UserUpdateskillsInput | string[]
    resume?: ResumeUncheckedUpdateOneWithoutUserNestedInput
    coverLetters?: CoverLetterUncheckedUpdateManyWithoutUserNestedInput
    mockInterviews?: MockInterviewUncheckedUpdateManyWithoutUserNestedInput
    skillGaps?: SkillGapAnalysisUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateManyWithoutIndustryInsightsInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkUserId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    experience?: NullableIntFieldUpdateOperationsInput | number | null
    industry?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    skills?: UserUpdateskillsInput | string[]
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