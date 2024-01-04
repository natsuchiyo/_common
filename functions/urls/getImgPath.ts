import config from "../../../_config/config";

export const getImgFilePath = (ImgFileName: string, ...pageNames: string[]) => {

    ImgFileName = ImgFileName[0] === '/' ? ImgFileName.slice(1) : ImgFileName;

    const subPath = pageNames.length ? `/${pageNames.join('/')}` : '';

    return `${config.basePath}/img${subPath}/${ImgFileName}`;
};
