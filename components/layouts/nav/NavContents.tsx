import { List, LinkBox, ListItem, Box } from '@chakra-ui/react';
import { simulationUrlList } from '../../../../_config/urls';
import { LinkingOverlay } from '../../parts/Linking';
import { headerHeight, leftNavWidth } from '../_values';
import { getPageInfo } from '../../../functions/urls/usePageInfo';
import { IconText } from '../../parts/IconText';
import { DragHandleIcon } from '../../chakraIcons';



export function NavContents() {

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
                {simulationUrlList.map(url => (
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

