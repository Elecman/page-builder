import {GRADIENT_REGEX, MATCH_COLORS} from './const.ts';

export const isGradient = (value: string) => {
  return GRADIENT_REGEX.test(value);
};

export const isMatchColors = (value: string) => {
  return MATCH_COLORS.test(value);
};
