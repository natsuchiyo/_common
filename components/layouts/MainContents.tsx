import { FlexProps } from '@chakra-ui/react';
import { Paper } from '../parts/Paper';



export const MainContents = (props: FlexProps) => {

    return (
        <Paper
            padding={1}
            display='flex'
            flexDirection='column'
            alignItems='center'
            gap='12'
            paddingY='12'
            width='full'
            // maxWidth='3xl'
            {...props}
        />
    );
};