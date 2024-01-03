import { Box } from "@chakra-ui/react";
import katex from "katex";
import 'katex/dist/katex.min.css';




export const Katex = ({ f }: { f: string; }) => {

    const katexHtml = katex.renderToString(String.raw({ raw: f }), {
        displayMode: true,
        strict: false,
        throwOnError: false
    });

    return (
        <Box
            data-testid='expression'
            width='full'
            overflowX='auto'
            overflowY='hidden'
            fontSize={{ base: 'md', md: 'lg' }}
            dangerouslySetInnerHTML={{ __html: katexHtml }}
        />
    );
};



export const Ktx = ({ f }: { f: string; }) => {

    const katexHtml = katex.renderToString(String.raw({ raw: f }), {
        displayMode: false,
        strict: false,
        throwOnError: false
    });

    return (
        <Box
            data-testid='expression'
            overflowX='auto'
            overflowY='hidden'
            fontSize='md'
            display='inline'
            dangerouslySetInnerHTML={{ __html: katexHtml }}
        />
    );
};