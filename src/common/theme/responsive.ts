import { Dimensions, PixelRatio } from 'react-native';

const { width: WINDOW_WIDTH, height: WINDOW_HEIGHT } = Dimensions.get('window');

// Standard mobile baseline guideline dimensions (iPhone X/11/12/13/14 mini/standard width & height)
const GUIDELINE_BASE_WIDTH = 375;
const GUIDELINE_BASE_HEIGHT = 812;

export const SCREEN_WIDTH = WINDOW_WIDTH;
export const SCREEN_HEIGHT = WINDOW_HEIGHT;

/**
 * Scales a size based on guideline screen width.
 */
export const scale = (size: number): number => {
  return Math.round((WINDOW_WIDTH / GUIDELINE_BASE_WIDTH) * size);
};

/**
 * Scales a size based on guideline screen height.
 */
export const verticalScale = (size: number): number => {
  return Math.round((WINDOW_HEIGHT / GUIDELINE_BASE_HEIGHT) * size);
};

/**
 * Moderate scaling with resize factor (default: 0.5).
 */
export const moderateScale = (size: number, factor: number = 0.5): number => {
  return Math.round(size + (scale(size) - size) * factor);
};

/**
 * Width percentage of screen.
 */
export const wp = (percentage: number): number => {
  return Math.round((percentage * WINDOW_WIDTH) / 100);
};

/**
 * Height percentage of screen.
 */
export const hp = (percentage: number): number => {
  return Math.round((percentage * WINDOW_HEIGHT) / 100);
};

/**
 * Responsive font scaling that balances readability across phones and tablets.
 */
export const rf = (
  fontSize: number,
  standardScreenHeight: number = GUIDELINE_BASE_HEIGHT,
): number => {
  const heightPercent = (fontSize * WINDOW_HEIGHT) / standardScreenHeight;
  return Math.round(PixelRatio.roundToNearestPixel(heightPercent));
};
