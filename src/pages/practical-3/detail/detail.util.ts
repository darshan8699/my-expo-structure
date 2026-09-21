import type { BoxItem, GridDimensions } from './detail.type';

export const generateBoxes = (count: number): BoxItem[] => {
  const safeCount  = Math.max(1, count);
  const totalBoxes = safeCount * safeCount;
  return Array.from({ length: totalBoxes }, (_, index) => {
    const id     = index + 1;
    const row    = Math.floor(index / safeCount) + 1;
    const col    = (index % safeCount) + 1;
    const cubeVal = id * id * id;
    return { id, row, col, cubeVal, value: id };
  });
};

export const getNextColorState = (currentState = 0): number =>
  (currentState + 1) % 3;

export const calculateGridDimensions = (
  screenWidth: number,
  count: number,
  containerPadding = 32,
  gap = 10,
): GridDimensions => {
  const columns      = Math.min(Math.max(1, count), 4);
  const availableWidth = screenWidth - containerPadding - gap * (columns - 1);
  const boxWidth     = Math.max(availableWidth / columns, 70);
  return { columns, boxWidth };
};
