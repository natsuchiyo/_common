import { DistributionType } from "../../../types/maths";

type UnicParamsType = { top: number; bottom: number; };



export const unic: DistributionType<UnicParamsType> = {

    label: '連続一様分布',

    minX: ({ bottom }) => bottom,

    maxX: ({ top }) => top,

    defaultParams: { top: 3, bottom: -3 },

    defaultScale: {
        x: { min: -6, max: 6 },
        y: { min: 0, max: 1 }
    },

    inputPropsList: [
        { label: 'a:上限', name: 'top', step: 1, min: -20, max: 20 },
        { label: 'b:下限', name: 'bottom', step: 1, min: -20, max: 20 },
    ],

    calcDist: (x, { top, bottom }) => 1 / (top - bottom),

    // createChartData({ top, bottom }: UnicParamsType) {
    //     const y = 1 / (bottom - top);
    //     const datasets = [{ x: -6, y: 0 }, { x: top, y: 0 }, { x: top, y }, { x: bottom, y }, { x: bottom, y: 0 }, { x: 6, y: 0 }];

    //     return datasets;
    // },

    calcStatData({ top, bottom }) {
        return [
            (top + bottom) / 2,
            Math.pow(bottom - top, 2) / 12
        ];
    }
};