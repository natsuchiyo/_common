import { DistributionType } from "../../../types/maths";


type GeomParamsType = { p: number; };



export const geom: DistributionType<GeomParamsType> = {

    label: '幾何分布',

    isDiscrete: true,

    minX: 0,

    // maxX: 100,

    defaultParams: { p: 0.15 },

    defaultScale: {
        x: { min: 0, max: 20 },
        y: { min: 0, max: 0.2 }
    },

    inputPropsList: [
        { label: 'p:成功確率', name: 'p', step: 0.05, min: 0.05, max: 1 },
    ],

    calcDist: (x: number, { p }: GeomParamsType) => {
        return (1 - p) ** (x - 1) * p;
    },

    calcStatData({ p }) {
        return [
            1 / p,
            (1 - p) / p ** 2
        ];
    }
};