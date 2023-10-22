import { List, LinkBox, ListItem, Box } from '@chakra-ui/react';
import { simulationUrlList } from '../../../../_config/urls';
import { LinkingOverlay } from '../../parts/Linking';
import { leftNavWidth } from '../_values';
import { getPageInfo } from '../../../functions/urls/usePageInfo';
import { IconText } from '../../parts/IconText';
import { DragHandleIcon } from '../../chakraIcons';



export function NavContents() {

    return (
        <Box bg='white' height='full' boxShadow='xs' width={leftNavWidth} >

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
                        key={url}
                        _hover={{ backgroundColor: 'mainLight', color: 'white' }}
                        padding={4}
                        marginX={2}
                        borderBottomWidth='1px'
                        borderColor='gray.100'
                        borderRadius={4}
                    >
                        <ListItem >
                            <LinkingOverlay href={url}>
                                {getPageInfo(url).titleElm}
                            </LinkingOverlay>
                        </ListItem>
                    </LinkBox>
                ))}
            </List>
        </Box >
    );
}

