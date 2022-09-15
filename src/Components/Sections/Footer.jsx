import { Box, Heading, HStack, ListItem, UnorderedList, VStack, Text, Stack } from '@chakra-ui/react'
import React from 'react'
import { MdFacebook } from 'react-icons/md'
import { AiFillInstagram, AiFillTwitterCircle, AiFillLinkedin } from 'react-icons/ai'
import { Link } from 'react-router-dom'



const ListTemp = (props) => {
    return (
        <Stack>
            <UnorderedList listStyleType='none'>
                <VStack justify='start' align='start'>
                    <ListItem>
                        <Heading color='white'>{props.heading}</Heading>
                    </ListItem>
                    <ListItem color='#7A7A7A'>
                        <Link>
                            {props.item1}
                        </Link>
                    </ListItem>
                    <ListItem color='#7A7A7A'>
                        <Link>
                            {props.item2}
                        </Link>
                    </ListItem>
                    <ListItem color='#7A7A7A'>
                        <Link>
                            {props.item3}
                        </Link>
                    </ListItem>
                    <ListItem color='#7A7A7A'>
                        <Link>
                            {props.item4}
                        </Link>
                    </ListItem>
                    <ListItem color='#7A7A7A'>
                        <Link>
                            {props.item5}
                        </Link>
                    </ListItem>
                </VStack>
            </UnorderedList>
        </Stack>
    )
}

export default function PageFooter() {
    return (
        <Box bgColor='black'>
            <Stack p='3em'>
                <HStack align='start' justify='space-around' spacing='2em'>
                    <UnorderedList listStyleType='none'>
                        <VStack justify='start' align='start'>
                            <ListItem>
                                <Heading color='white'>FASHION</Heading>
                            </ListItem>
                            <ListItem>
                                <Text color='white'>Complete your style with awesome <br />
                                    clothes from us.
                                </Text>
                            </ListItem>
                            <HStack>
                                <ListItem><MdFacebook size='2em' color='#E5C643' /></ListItem>
                                <ListItem><AiFillInstagram size='2em' color='#E5C643' /></ListItem>
                                <ListItem><AiFillTwitterCircle size='2em' color='#E5C643' /></ListItem>
                                <ListItem><AiFillLinkedin size='2em' color='#E5C643' /></ListItem>
                            </HStack>
                        </VStack>
                    </UnorderedList>
                    <ListTemp heading='Company' item1='About' item2='Contact us' item3='Support' item5='Careers' />
                    <ListTemp heading='Quick Links' item1='Share Location' item2='Orders Tracking' item3='Size Guard' item5='FAQs' />
                    <ListTemp heading='Legal' item1='Terms & conditions' item2='Privacy Policy' />
                </HStack>
                <Text p='-5em' textAlign='center' color='white'>Designed by 7thWeb</Text>
            </Stack>
        </Box>
    )
}