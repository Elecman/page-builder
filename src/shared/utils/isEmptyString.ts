export const isEmptyString = <T extends string>(value: T) => {
  return value.valueOf().length;
};
