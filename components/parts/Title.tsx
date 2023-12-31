'use client';

import { Box, BoxProps, HeadingProps } from "@chakra-ui/react";
import { Headline } from "./Headline";
import { Tags } from "./Tags";
import { getPageInfo, usePageInfo } from "../../functions/urls/usePageInfo";
import { MdxMetaType } from "../../types/types";
import { BlogDateTimes } from "../pieces/BlogDateTime";



export const Title = (props: BoxProps) => {


    const pageInfo = usePageInfo();


    return (
        <Box marginX={4} marginBottom={8} {...props}>
            <Headline
                as='h1'
                design="colorfulborder"
                display='inline-block'
                textAlign='center'
                size='lg'
                children={pageInfo.titleElm}
                // これがないと下線の色がわずかにずれる
                lineHeight='1.33 !important'
            />
            <Tags tagNames={pageInfo.tags} justifyContent='right' marginY='2' />
        </Box>
    );
};



export const PageTitle = ({ path, ...props }: HeadingProps & { path: string; }) => {


    const pageInfo = getPageInfo(path);


    return (
        <Headline
            as='h1'
            design="colorfulborder"
            size='lg'
            marginX={4}
            marginBottom={12}
            children={pageInfo.titleElm}
            {...props}
        />
    );
};



export function BlogTitle({ mdxMeta }: { mdxMeta: MdxMetaType; }) {


    return (
        <Box marginBottom={16} >
            <Headline
                as='h1'
                design="colorfulborder"
                size='lg'
                children={mdxMeta.title}
            />
            <Tags tagNames={mdxMeta.tagNames} marginY={2} />
            <BlogDateTimes datemodified={mdxMeta.datemodified} datepublished={mdxMeta.datepublished} />
        </Box>
    );
};