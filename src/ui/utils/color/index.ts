import {generateColor} from 'antd/es/color-picker/util';
import {ColorGenInput, type ColorValueType, type SingleValueType} from 'antd/es/color-picker/interface';
import {DEFAULT_GRADIENT_SETTINGS, LINEAR_GRADIENT, RADIAL_GRADIENT} from './const.ts';
import {isGradient, isMatchColors} from './validGradient.ts';

export const resetGradientType = (value: Exclude<ColorValueType, null | SingleValueType>, replacer: string): string | undefined => {
  const colors = value.reduce((acc, value) => {
    acc.push(`${value.color} ${value.percent}%`);
    return acc;
  }, [] as string[]);
  const options = DEFAULT_GRADIENT_SETTINGS[replacer];
  if (replacer === LINEAR_GRADIENT) {
    return `${replacer}(${options.angle}${options.deg}, ${colors.join(', ')})`;
  } else if (replacer === RADIAL_GRADIENT) {
    return `${replacer}(${options.deg} ${options.at} ${options.x} ${options.y}, ${colors.join(', ')})`;
  }
  return `${replacer}(${options.from} ${options.angle}${options.deg} ${options.at} ${options.x} ${options.y}, ${colors.join(', ')})`;
};

export const getGradientColors = (value: string):
  Exclude<ColorValueType, null | SingleValueType>[number] | undefined => {
  const isColor = value.match(/(rgb|rgba)\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+(?:\.\d+)?))?\)\s*(\d+)/);
  if (isColor) {
    if (isColor[1] === 'rgba') {
      return {
        color: `${isColor[1]}(${isColor[2]},${isColor[3]},${isColor[4]},${isColor[5]})`,
        percent: Number(isColor[6] ?? 100)
      };
    }
    return {
      color: `${isColor[1]}(${isColor[2]},${isColor[3]},${isColor[4]})`,
      percent: Number(isColor[6] ?? 100)
    };
  }
  return undefined;
};



export const getColor = (value: string | ColorGenInput) => {
  if (typeof value === 'string' && isGradient(value)) {
    const arr = value.split(', ');
    const gradientColors: Exclude<ColorValueType, null> = [];
    for (const color of arr) {
      if (isMatchColors(color)) {
        const colorObj = getGradientColors(color);
        if (colorObj) {
          gradientColors.push(colorObj);
        }
      }
    }
    return gradientColors;
  }
  return generateColor(value);
};
