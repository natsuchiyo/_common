import { Center } from '@chakra-ui/react';
import { faLaptopCode } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Linking } from '../../parts/Linking';
import { headerHeight } from '../_values';
import { headerIcon, websiteName } from '../../../../_config/constants';



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
                <FontAwesomeIcon icon={headerIcon} style={{ marginRight: '4px' }} />{websiteName}
            </Linking>
        </Center>
    );
};