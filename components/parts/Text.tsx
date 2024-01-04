import { Text, TextProps, theme } from "@chakra-ui/react";
import { transparentize } from "color2k";
import { customTheme } from "../../theme/theme";


export const Small = (props: TextProps) => {
    return <Text as='span' fontSize='sm' {...props as any} />;
};


export const XSmall = (props: TextProps) => {
    return <Text as='span' fontSize='xs' {...props as any} />;
};


export const Large = (props: TextProps) => {
    return <Text as='span' fontSize='lg'  {...props as any} />;
};


export const Bold = (props: TextProps) => {
    return <Text as='span' fontWeight='bold'  {...props as any} />;
};


export const Paragraph = (props: TextProps) => {
    return <Text marginY='8'  {...props as any} />;
};


/**
 * @param color 初期値は水色
 */
export const TextHighlight = ({ color = transparentize(customTheme.colors.accent, 0.7), ...props }: TextProps) => {
    // 最初の%が大きいほど太くなり、最後の%が大きいほど色が薄くなる
    return <Text as='span' background={`linear-gradient(transparent 50%,${color || theme.colors.orange[200]} 95%)`} {...props as any} />;
};