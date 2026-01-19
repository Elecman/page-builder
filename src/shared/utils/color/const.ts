export const LINEAR_GRADIENT = 'linear-gradient';

export const RADIAL_GRADIENT = 'radial-gradient';

export const CONIC_GRADIENT = 'conic-gradient';

export const GRADIENT_REGEX = /^(linear-gradient|radial-gradient|conic-gradient)/;

export const GRADIENT_ANGLE_REGEX = /([+-]?\d*\.?\d+)(deg|grad|rad|turn)/;

export const MATCH_POSITION = /at\s+((\d+)(%)(?:\s+(\d+)(%))?)/;

export const MATCH_COLORS = /(rgb|rgba)\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+(?:\.\d+)?))?\)\s*(\d+)/

export const DEFAULT_GRADIENT_SETTINGS: Record<string, Record<string, string | number>> = {
  [LINEAR_GRADIENT]: {
    angle: 90,
    deg: 'deg'
  },
  [RADIAL_GRADIENT]: {
    deg: 'circle',
    at: 'at',
    x: '50%',
    y: '50%',
  },
  [CONIC_GRADIENT]: {
    from: 'from',
    at: 'at',
    x: '50%',
    y: '50%',
    angle: 90,
    deg: 'deg'
  },
};
