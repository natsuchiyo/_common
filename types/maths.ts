

export type XYType = { x: number; y: number; };


export type XYDataType = XYType[];


export type DataRangeType = { min: number; max: number; };


export type DistScaleType = { x: DataRangeType; y: DataRangeType; };



export type DistributionType<Params extends any = { [key: string]: number; }> = {
    label: string;
    isDiscrete?: boolean;
    defaultScale: DistScaleType;
    defaultParams: Params;
    minX?: number | ((params: Params) => number);
    maxX?: number | ((params: Params) => number);
    inputPropsList: { label: string; name: keyof Params; step: number; min: number; max: number; }[];
    // createChartData(params: Params, scale: DistScaleType): XYDataType;
    calcCommonValue?(params: Params): number;
    calcStatData(params: Params): number[];
    calcDist: (x: number, params: Params, commonValue: number) => number;
};