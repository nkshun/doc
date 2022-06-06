// 指定したキーを必須に
export type SpecifiedRequire<T, K extends keyof T = keyof T> = Required<Pick<T, K>> & Pick<T, Exclude<keyof T, K>>;

// 指定したキーを任意に
export type SpecifiedPartial<T, K extends keyof T = keyof T> = Omit<T, K> & Partial<Pick<T, K>>;

// いずれかひとつのプロパティを必須に
export type AtLeastOneRequire<T> = Spread<T, keyof T>;
type Spread<T, K extends keyof T> = K extends keyof T ? SpecifiedRequire<T, Exclude<keyof T, K>> : never;

// 再起的にPartial型にする（全てのキーを任意にする）
export type RecursivePartial<T> = {
    // 「?」にて一層目のキーをoptinalにする
    // 各キーに置いて、下記判定を行う
    [P in keyof T]?: T[P] extends Array<infer U> //一層目のバリューが配列か？（Array<Array<string>>なら「U」にはArray<string>が設定される）
        ? Array<RecursivePartial<U>> // Uの配列を返却 (Uを再度RecursivePartialに渡す)
        : T[P] extends ReadonlyArray<infer UU> // 一層目のバリューが配列ではなく、読み取り専用の配列型か？
        ? ReadonlyArray<RecursivePartial<UU>> // UUの読み取り専用の配列型を返却 (UUを再度RecursivePartialに渡す)
        : RecursivePartial<T[P]>; // 一層目のバリューが配列でも読み取り専用配列でもない場合、再度RecursivePartialに渡したものを返却
};

// 再起的にRequired型にする（全てのキーを必須にする）
export type RecursiveRequired<T> = {
    [P in keyof T]-?: RecursiveRequired<T[P]>;
};

// 特定のプロパティを上書きする型関数
 export type Overwrite<T, U extends { [Key in keyof T]?: unknown }> = Omit<
 T,
 keyof U
> & U;

// いずれかひとつが必須
export type RequireOne<T, K extends keyof T = keyof T> =
  K extends keyof T ? PartialRequire<T, K> : never;
type PartialRequire<O, K extends keyof O> = {
    [P in K]-?: O[P]
} & O;

// Json型（標準で提供してない）
type Json = Primitive | JsonObject | JsonArray;
export type Primitive = boolean | number | string | null;
export type JsonArray = Array<JsonObject | Primitive | JsonArray>;
export interface JsonObject {
    [property: string]: Json;
} //NODE: interfaceで記載することで循環参照できる https://tech.dely.jp/entry/ten_trivia_of_typescript_#%E3%82%A8%E3%83%A9%E3%83%BC%E3%82%92%E5%9B%9E%E9%81%BF%E3%81%99%E3%82%8B%E6%96%B9%E6%B3%95

export type Extension = 'aiml' | 'json' | 'json5';
