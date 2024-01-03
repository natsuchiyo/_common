import { Box, BoxProps } from "@chakra-ui/react";
import katex from "katex";
import 'katex/dist/katex.min.css';


export const Expression = ({ children, inline, ...props }: BoxProps & {
    children: string;
    inline?: boolean;
}) => {

    const katexHtml = katex.renderToString(children, {
        displayMode: !inline,
        strict: false,
        throwOnError: false
    });

    return (
        <Box
            data-testid='expression'
            width='full'
            overflowX='auto'
            overflowY='hidden'
            fontSize='lg'
            display={inline ? 'inline' : 'block'}
            dangerouslySetInnerHTML={{ __html: katexHtml }}
            {...props}
        />
    );
};

