'use client';

import { SmallCloseIcon, HamburgerIcon } from '@chakra-ui/icons';
import { IconButton, Drawer, DrawerOverlay, DrawerContent, useDisclosure } from '@chakra-ui/react';
import { PropsWithChildren } from 'react';
import { headerHeight, leftNavWidth } from '../_constants';



export function NavDrawer(props: PropsWithChildren) {

    const { isOpen, onClose, onToggle } = useDisclosure();

    const NavIcon = isOpen ? SmallCloseIcon : HamburgerIcon;

    return (
        <>
            <IconButton
                zIndex='layout'
                position='fixed'
                top={0}
                width={headerHeight}
                height={headerHeight}
                aria-label='nav button'
                bg='transparent !important'
                color='white'
                icon={<NavIcon boxSize='8' />}
                onClick={onToggle}
            />
            <Drawer placement='left' onClose={onClose} isOpen={isOpen}>

                <DrawerOverlay
                    top={headerHeight + '!important'}
                    bg='blackAlpha.400' backdropFilter='blur(2px)'
                />

                <DrawerContent
                    top={headerHeight + '!important'}
                    width={leftNavWidth + '!important'}
                    onClick={onClose}
                    children={props.children}
                />
            </Drawer>
        </>
    );
};