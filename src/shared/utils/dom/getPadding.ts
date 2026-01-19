export const getPadding = (element?: HTMLElement | null) => {
  const paddings = {
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  };

  if (!element) return paddings;

  const {style} = element;
  const {paddingLeft, paddingRight, paddingTop, paddingBottom} = style;

  paddings.left = parseInt(paddingLeft) | 0;
  paddings.right = parseInt(paddingRight) | 0;
  paddings.top = parseInt(paddingTop) | 0;
  paddings.bottom = parseInt(paddingBottom) | 0;

  return paddings;
};
