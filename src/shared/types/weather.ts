export type weatherItemType = {
  id?: string;
  time: number;
  main: string;
  icon: string;
  sunrise?: number;
  sunset?: number;
};

export type weatherListType = Array<weatherItemType>;
