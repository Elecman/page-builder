import {isGradient} from './validGradient.ts';
import {GRADIENT_ANGLE_REGEX, GRADIENT_REGEX, LINEAR_GRADIENT, MATCH_POSITION} from './const.ts';

export const getGradientInfo = (value: string) => {
  if (isGradient(value)) {
    const typeMatch = value.match(GRADIENT_REGEX);
    const angleMatch = value.match(GRADIENT_ANGLE_REGEX);
    const positionMatch = value.match(MATCH_POSITION);

    return {
      type: typeMatch?.[1] ?? LINEAR_GRADIENT,
      angle: parseInt(angleMatch?.[1] ?? '0'),
      x: parseInt(positionMatch?.[2] ?? '0'),
      y: parseInt(positionMatch?.[4] ?? '0'),
    };
  }
  return undefined;
};
