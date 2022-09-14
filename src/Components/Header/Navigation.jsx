import React from 'react';
import { Box, Button, Heading, HStack, Image, ListItem, Stack, UnorderedList } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';
import {
    Menu, MenuButton, MenuList, MenuItem, IconButton, MenuItemOption, MenuGroup, MenuOptionGroup, MenuDivider,
} from '@chakra-ui/react'
import HeaderLogo from "../../Components/Images/Header-logo.png"
import TextBG from "../../Components/Images/yellow-background.png"
import { MdDashboard } from 'react-icons/md';



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



export function MobileMenu() {
    return (
        <Box display={{ sm: 'block', md: 'block', lg: 'none' }} w='100%'>
            <HStack w='100%'>
                <Menu>
                    <MenuButton
                        as={IconButton}
                        aria-label='Options'
                        icon={<MdDashboard />}
                        variant='outline'
                    />
                    <MenuList>
                        <MenuItem>
                            <NavLink>
                                Catalogue
                            </NavLink>
                        </MenuItem>
                        <MenuItem>
                            <NavLink>
                                Fashion
                            </NavLink>
                        </MenuItem>
                        <MenuItem>
                            <NavLink>
                                Favorite
                            </NavLink>
                        </MenuItem>
                        <MenuItem>
                            <NavLink>
                                LifeStyle
                            </NavLink>
                        </MenuItem>
                        <MenuItem>
                            <NavLink>
                                <Button bgColor='black' color='white' _hover={{bgColor:'black'}}>Sign Up</Button>
                            </NavLink>
                        </MenuItem>
                    </MenuList>
                </Menu>
                <Stack align='end' justify='center' w='100%' p='.5em'>
                    <NavLink>
                        <Image src={HeaderLogo} alt='header logo' />
                    </NavLink>
                </Stack>
            </HStack>
        </Box>
    )
}