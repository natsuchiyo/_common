import fs from 'fs';
import { MdxMetaType, BlogMetaType } from '../types/types';
import { blogPostDir } from '../values/constants';



export const getBlogFileNameList = () => {

    try {
        return fs.readdirSync(blogPostDir, { withFileTypes: true })
            .filter(dirent => dirent.isFile())
            .map(dirent => dirent.name);

    } catch (error) {
        return [];
    }

};



export const getBlogMdxFile = (fileName: string) => {

    fileName = fileName + (fileName.endsWith(".mdx") ? '' : '.mdx');


    // TODO 
    try {
        // `../../${blogPostDir}/${fileName}`ではエラーとなる
        const { default: MDXContent, meta }: { default: any; meta: MdxMetaType; }
            = require(`./../../_blogPosts/${fileName}`);

        return { MDXContent, meta };

    } catch (error) {
        return { MDXContent: {}, meta: {} as MdxMetaType };
    }
};




export const getBlogMeta = (mdxFileName: string) => {

    const { meta } = getBlogMdxFile(mdxFileName);

    const blogMeta: BlogMetaType = {
        ...meta,
        slug: mdxFileName.replace(/\.mdx$/, ''),
    };

    return blogMeta;
};



export const getBlogMetaList = () => {

    const mdxFileNameList = getBlogFileNameList();

    const blogMetaList = mdxFileNameList
        .map(getBlogMeta)
        .filter(meta => !meta.private)
        .sort((blogMeta1, blogMeta2) => blogMeta1.datemodified > blogMeta2.datemodified ? -1 : 1);

    return blogMetaList;
};