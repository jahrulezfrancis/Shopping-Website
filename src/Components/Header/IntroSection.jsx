import { Box, Heading, HStack, VStack, Text, Button, Image, Stack } from '@chakra-ui/react';
import React from 'react';
import HappyGirl from "../../Components/Images/happy-girl.png"
import YellowBackground from "../../Components/Images/yellow-background.png"
import HM from "../../Components/Images/hm.png"
import OBEY from "../../Components/Images/obey.png"
import Shopify from "../../Components/Images/shopify.png"
import Lacoste from "../../Components/Images/lacoste.png"
import Levis from "../../Components/Images/levis.png"
import Amazon from "../../Components/Images/amazon.png"
import HoodieGyal from "../../Components/Images/girl-with-orange-hoodie.png"
import PhoneGirl from "../../Components/Images/girl-holding-phone.png"
import GirlStyle from "../../Components/Images/girl-with-hand-on-neck.png"
import { MdArrowForward } from 'react-icons/md';


const Explore = (props) => {
    return (
        <HStack>
            <VStack>
                <Image src={props.image} />
                <HStack spacing='4em'>
                    <VStack spacing='-.2em' textAlign='start' width='auto' align='start' justify='start'>
                        <Text>Hoodies & Sweatshirt</Text>
                        <Text>Explore now</Text>
                    </VStack>
                    <MdArrowForward />
                </HStack>
            </VStack>
        </HStack>
    )
}

export default function IntroSection() {
    return (
        <Box>
            <HStack width='100%' justify='center' spacing='8em' mt='5em'>
                <VStack textAlign='start' align='start'>
                    <Heading fontSize='2.813em' fontWeight='extrabold' fontFamily='Poppins' color='black'>
                        LET’S <br />
                        EXPLORE <br />
                        <Box bgImage={YellowBackground} bgRepeat='no-repeat' ml='-.3em' p='.2em' mb='-1em'>UNIQUE</Box>  <br />
                        CLOTHES.
                    </Heading>
                    <Text>Live for Influential and Innovative fashion!</Text>
                    <Button color='white' bgColor='black' _hover={{ bgColor: '#EBD96B' }}>Shop Now</Button>
                </VStack>
                <Image src={HappyGirl} alt='' />
            </HStack>
            <HStack w='100%' justify='center' spacing='5em' align='center' m="4em 0em" bgColor='#EBD96B' p='2em'>
                <Image src={HM} alt='' background='transparent' />
                <Image src={OBEY} alt='' />
                <Image src={Shopify} alt='' />
                <Image src={Lacoste} alt='' />
                <Image src={Levis} alt='' />
                <Image src={Amazon} alt='' />
            </HStack>
            <Stack w='100%' align={{ sm: 'center', md: 'center', lg: 'flex-start' }} flexWrap='wrap'
                display={{ sm: 'flex', md: 'none', lg: 'block' }} flexDirection={{ sm: "column", md: 'row', lg: 'row' }} textAlign='center' justify='center'>
                <Text ml={{ sm: '1em', md: '3em', lg: '5em' }} textAlign='center' fontSize='1.4em' fontWeight='extrabold' fontFamily='Poppins' color='black'>NEW ARRIVALS</Text>
                <HStack justify='center' w='100%' spacing='5em'>
                    <Explore image={HoodieGyal} />
                    <Explore image={PhoneGirl} />
                    <Explore image={GirlStyle} />
                </HStack>
            </Stack>
        </Box>
    )
}