import { DistributionType } from "../../../types/maths";


type UnidParamsType = { top: number; bottom: number; };



export const unid: DistributionType<UnidParamsType> = {

    label: '離散一様分布',

    isDiscrete: true,

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

    calcDist: (x: number, { top, bottom }: UnidParamsType) => {
        return 1 / (top - bottom + 1);
    },

    calcStatData({ top, bottom }) {
        return [
            (top + bottom) / 2,
            ((bottom - top + 1) ** 2 - 1) / 12
        ];
    }
};