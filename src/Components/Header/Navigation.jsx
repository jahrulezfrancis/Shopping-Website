import React from 'react';
import { Box, Button, HStack, Image, ListItem, UnorderedList } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';
import {
    Menu, MenuButton, MenuList, MenuItem, MenuItemOption, MenuGroup, MenuOptionGroup, MenuDivider,
} from '@chakra-ui/react'
import HeaderLogo from "../../Components/Images/Header-logo.png"
import TextBG from "../../Components/Images/yellow-background.png"

export default function Navigation() {
    return (

        <Box>
            <UnorderedList textTransform='uppercase' listStyleType='none' p='1em'
                display={{ base: 'none', md: 'none', lg: 'block' }}>
                <HStack>
                    <NavLink>
                        <ListItem><Image src={HeaderLogo} alt='' /></ListItem>
                    </NavLink>
                    <HStack align='center' justify='flex-end' w='100%' spacing='2em'>
                        <NavLink>
                            <ListItem>Catalogue</ListItem>
                        </NavLink>
                        <NavLink>
                            <ListItem>Fashion</ListItem>
                        </NavLink>
                        <NavLink>
                            <ListItem>Favorite</ListItem>
                        </NavLink>
                        <NavLink>
                            <ListItem>LifeStyle</ListItem>
                        </NavLink>
                        <NavLink>
                            <ListItem><Button bgColor='black' color='white'>Sign Up</Button></ListItem>
                        </NavLink>
                    </HStack>
                </HStack>
            </UnorderedList>
        </Box>
    )
}