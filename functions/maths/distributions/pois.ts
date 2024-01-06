import { factorial } from "simple-statistics";
import { DistributionType } from "../../../types/maths";


type PoisParamsType = { lamda: number; };



export const pois: DistributionType<PoisParamsType> = {

    label: 'ポアソン分布',

    isDiscrete: true,

    minX: 0,

    // maxX: ({ lamda }) => lamda + 50,

    defaultParams: { lamda: 5 },

    defaultScale: {
        x: { min: 0, max: 20 },
        y: { min: 0, max: 0.2 }
    },

    inputPropsList: [
        { label: 'λ:平均', name: 'lamda', step: 1, min: 0, max: 100 },
    ],

    calcDist: (x: number, { lamda }: PoisParamsType) => {
        return lamda ** x / factorial(x) * Math.exp(-lamda);
    },

    calcStatData({ lamda }) {
        return [lamda, lamda];
    }
};