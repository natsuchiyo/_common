import { List, LinkBox, ListItem, Box } from '@chakra-ui/react';
import pageInfos from '../../../../_config/pageInfos';
import { LinkingOverlay } from '../../parts/Linking';
import { headerHeight, leftNavWidth } from '../_constants';
import { getPageInfo } from '../../../functions/urls/usePageInfo';
import { IconText } from '../../parts/IconText';
import { DragHandleIcon } from '../../chakraIcons';



export function NavContents() {

    const navUrlList = [] as string[];

    pageInfos.forEach((pageInfo, pageName) => {
        pageInfo.showNav && navUrlList.push(pageName);
    });

    if (!navUrlList.length) return null;


    return (
        <Box
            bg='white'
            height={`calc(100% - ${headerHeight})`}
            boxShadow='xs'
            overflowY='auto'
            width={leftNavWidth}
        >

            <IconText
                icon={DragHandleIcon}
                fontWeight='bold'
                fontSize='sm'
                color='subtext'
                borderBottomWidth='1px'
                borderColor='gray.100'
                padding={2}
                marginBottom='4'
                children='シミュレーション一覧'
            />

            <List>
                {navUrlList.map(url => (
                    <LinkBox
                        as={ListItem}
                        key={url}
                        paddingX={2}
                        paddingY={4}
                        marginX={2}
                        borderBottomWidth='1px'
                        borderColor='gray.200'
                        borderRadius={4}
                        fontSize='sm'
                        fontWeight='bold'
                        _hover={{ backgroundColor: 'mainLight', color: 'white' }}
                    >
                        <LinkingOverlay href={url}>
                            {getPageInfo(url).titleElm}
                        </LinkingOverlay>
                    </LinkBox>
                ))}
            </List>
        </Box >
    );
}

