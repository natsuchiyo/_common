'use client';

import { Box } from "@chakra-ui/react";
import { Headline } from "./Headline";
import { Tags } from "./Tags";
import { usePageInfo } from "../../functions/urls/usePageInfo";



export const Title = () => {


    const pageInfo = usePageInfo();


    return (
        <Box marginX={4} >
            <Headline
                as='h1'
                design="colorfulborder"
                display='inline-block'
                textAlign='center'
                size='lg'
                children={pageInfo.titleElm}
            />
            <Tags tags={pageInfo.tags} justifyContent='right' />
        </Box>
    );
};