import { Center } from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Linking } from '../../parts/Linking';
import { headerHeight } from '../_constants';
import config from '../../../../_config/config';



export function Header() {

    return (
        <Center
            as='header'
            bg='mainLight'
            fontSize='xl'
            fontWeight='bold'
            width='full'
            height={headerHeight}
            position='fixed'
            zIndex='layout'
        >
            <Linking href='/' textDecoration='none !important' color='white'>
                {config.headerIcon && <FontAwesomeIcon icon={config.headerIcon} style={{ marginRight: '4px' }} />}
                {config.websiteName}
            </Linking>
        </Center>
    );
};