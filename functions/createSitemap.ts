import { MetadataRoute } from 'next';
import fs from "fs";
import config from '../../_config/config';
import { getBlogFileNameList } from './fileHanders';
import { blogPostDir } from '../values/constants';


const appDirName = 'app';

const pageFileName = 'page.tsx';



export default function createSitemap(): MetadataRoute.Sitemap {

    return [
        ...createUrlObjList(appDirName, []),

        ...createBlogUrlObhList(),
    ];
}




const createUrlObjList = (pathName: string, list: any[]) => {

    const dirents = fs.readdirSync(pathName, { withFileTypes: true });

    for (const dirent of dirents) {

        if (dirent.name.startsWith('[') || dirent.name.startsWith('_')) continue;

        const currentPath = `${pathName}/${dirent.name}`;

        if (dirent.isDirectory()) {
            createUrlObjList(currentPath, list);

        } else if (dirent.name === pageFileName) {
            list.push(createUrlObj(currentPath));
        }
    }

    return list;
};



const createUrlObj = (path: string) => {

    const urlPath = path
        .replace(new RegExp(`${appDirName}|/${pageFileName}`, 'g'), '')
        .replace(/\/\(.+\)/, '');

    return {
        url: config.baseUrl + urlPath,
        lastModified: fs.statSync(path).mtime,
    };
};



function createBlogUrlObhList() {

    const blogFiles = getBlogFileNameList();

    return blogFiles.map(fileName => {
        return {
            url: `${config.baseUrl}/blog/${fileName.replace(/\.mdx$/, '')}`,
            lastModified: fs.statSync(`${blogPostDir}/${fileName}`).mtime,
        };
    });
};