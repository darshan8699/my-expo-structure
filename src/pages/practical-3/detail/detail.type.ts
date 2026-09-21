export interface BoxItem {
  id: number;
  row: number;
  col: number;
  cubeVal: number;
  value: number;
}

export interface GridDimensions {
  columns: number;
  boxWidth: number;
}
