import {isGradient} from './validGradient.ts';
import {GRADIENT_ANGLE_REGEX, MATCH_POSITION} from './const.ts';

export const replaceGradientAngle = (value: string, angle: number | string) => {
  if (isGradient(value)) {
    const match = value.match(GRADIENT_ANGLE_REGEX);
    if (match) {
      return value.replace(GRADIENT_ANGLE_REGEX, `${angle}${match[2]}`);
    }
  }
  return value;
};

export const replaceGradientPosition = (gradient: string, value: number, position: string) => {
  if (isGradient(gradient)) {
    const match = gradient.match(MATCH_POSITION);
    if (match) {
      if (position === 'x') {
        match[2] = value.toString();
      } else if (position === 'y') {
        match[4] = value.toString();
      }
      return gradient.replace(MATCH_POSITION, `at ${match[2]}${match[3]} ${match[4]}${match[5]}`);
    }
  }
  return gradient;
};
