export const pxToPercent = (value: number, comparativeValue: number) => {
  const val = (Math.abs(value) / comparativeValue) * 100;
  if (value < 0) {
    return -1 * val;
  } else {
    return Math.round(val);
  }
};
