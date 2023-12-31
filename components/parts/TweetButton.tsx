'use client';

import { Box, BoxProps } from '@chakra-ui/react';
import { memo } from 'react';
import { Share } from 'react-twitter-widgets';


/**
 * @param text ツイートするテキスト
 * @param hashtags ハッシュタグ。'FX,株'のようなカンマ区切りの文字列
 */
export const TweetButton = memo(function TweetButton({ text, hashtags, url, ...props }: BoxProps & {
    text: string;
    hashtags?: string;
    url?: string;
}) {


    url = url || typeof window === 'undefined' ? '' : window.location.href;


    return (
        // styledでlineHeightを設定すると反映されない（iflameのせい？）
        // 更新すると一瞬消えて高さがずれるためminHeightを設定する
        <Box minHeight='30px' {...props}>
            <Share
                url={url}
                options={{
                    text: text,
                    hashtags: hashtags,
                    size: "large",
                    lang: "ja"
                }}
            />
        </Box>
    );
});

