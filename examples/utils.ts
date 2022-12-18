type DeepPartialArray<T> = Array<DeepPartial<T>>;
type DeepPartialObject<T> = {
  [Key in keyof T]?: DeepPartial<T[Key]>;
};
export type DeepPartial<T> = T extends (
  ...args: any[]
) => any
  ? T
  : T extends Array<infer InferredArrayMember>
  ? DeepPartialArray<InferredArrayMember>
  : T extends object
  ? DeepPartialObject<T>
  : T | undefined;
