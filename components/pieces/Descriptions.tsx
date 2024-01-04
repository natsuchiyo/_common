import { ReactNode } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons';
import { Headline } from '../parts/Headline';
import { Box, BoxProps, Container, ContainerProps } from '@chakra-ui/react';





export const DescripArea = (props: ContainerProps) => {

    return (
        <Container
            maxWidth='750px'
            padding={0}
            {...props as any}
            sx={{
                'br + .katex': {
                    display: 'block',
                    textAlign: 'center',
                    overflowX: 'auto',
                    overflowY: 'hidden',
                    paddingY: 1,
                    fontSize: { base: undefined, md: '1.35em' },
                    whiteSpace: 'nowrap'
                }
            }}
        />
    );
};



export const DescripSection = (props: {
    title: string;
    children: ReactNode;
}) => {

    return (
        <Box as='section' maxWidth='full' marginY='6' >
            <Headline as='h2' design='sideborder' children={props.title} />
            {props.children}
        </Box>
    );
};




export const DescripSubSection = ({ title, children, ...props }: BoxProps & {
    title: string;
}) => {

    return (
        <Box as='section' marginY='16' {...props}>
            <Headline as='h3' size='md' design='leftborder' children={title} marginBottom={4} />
            {children}
        </Box>
    );
};




export const ExampleText = () => {
    return <div style={{ fontSize: '85%', margin: '20px 0 5px' }}>
        ---------
        {<FontAwesomeIcon icon={faPencilAlt} style={{ fontSize: '85%' }} />}
        例---------
    </div>;
};


