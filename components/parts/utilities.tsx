import { Box, BoxProps, chakra } from "@chakra-ui/react";



export function InlineBlock(props: BoxProps) {
    return <Box display='inline-block' {...props} />;
};


export function Nowrap(props: BoxProps) {
    return <Box whiteSpace='nowrap' {...props} />;
};

