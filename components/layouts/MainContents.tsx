import { FlexProps } from '@chakra-ui/react';
import { Paper } from '../parts/Paper';
import { RecoilRootClient } from '../metas/RecoilRootClient';



export const MainContents = (props: FlexProps) => {

    return (
        <Paper
            paddingX={{ base: 2, sm: 6 }}
            display='flex'
            flexDirection='column'
            alignItems='center'
            gap={{ base: 8, lg: 12 }}
            paddingTop='12'
            // padding='12'
            width='full'
            bgColor='article-bg'
            {...props}
        />
    );
};




export const RecoilMainContents = (props: FlexProps) => {

    return (
        <RecoilRootClient>
            <MainContents
                {...props}
            />
        </RecoilRootClient>
    );
};