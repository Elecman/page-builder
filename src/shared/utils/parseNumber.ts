const NUMBER_FLOAT_REGEX = /^\d+.\d+/;
const isFloat = <T extends string | number>(x: T) => {
  if (typeof x === 'number') {
    return !!(x % 1);
  }
  const match = x.match(NUMBER_FLOAT_REGEX);
  if (!match) return false;
  return typeof Number(match[0]) === 'number' ? !!(Number(match[0]) % 1) : false;
};

export const parseNumber = <T extends string | number>(value?: T | null) => {
  if (!value) return undefined;
  if (isFloat(value)) {
    return Number(parseFloat(value.toString()).toFixed(2));
  }
  return parseInt(value.toString()) | 0;
};
