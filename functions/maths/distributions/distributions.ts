import { DistributionType } from "../../../types/maths";
import { beta } from "./beta";
import { bino } from "./bino";
import { chi2 } from "./chi2";
import { expo } from "./expo";
import { fdis } from "./fdis";
import { geom } from "./geom";
import { logn } from "./logn";
import { norm } from "./norm";
import { pois } from "./pois";
import { tdis } from "./tdis";
import { unic } from "./unic";
import { unid } from "./unid";


export const distributions = {
    bino,
    pois,
    geom,
    unid,
    norm,
    logn,
    expo,
    chi2,
    tdis,
    fdis,
    beta,
    unic,
};


export type DistributionNameType = keyof typeof distributions;

export type DistributionsType = { [key in DistributionNameType]: DistributionType };
// export type DistributionsType = typeof distributions;