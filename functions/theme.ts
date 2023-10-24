import { brandColor } from "../../_config/themeColors";

export const getBrandColor = (brightness: number) => {
    return `${brandColor}.${brightness}`;
};
