import { Box, Heading, HStack, VStack, Text, Button, Image } from '@chakra-ui/react';
import React from 'react';
import HappyGirl from "../../Components/Images/happy-girl.png"
import YellowBackground from "../../Components/Images/yellow-background.png"
import HM from "../../Components/Images/h&m.png"
import OBEY from "../../Components/Images/obey.png"
import Shopify from "../../Components/Images/shopify.png"
import Lacoste from "../../Components/Images/lacoste.png"
import Levis from "../../Components/Images/levis.png"
import Amazon from "../../Components/Images/amazon.png"


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
                    <Button color='white' bgColor='black' _hover={{ bgColor: 'green.500' }}>Shop Now</Button>
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
        </Box>
    )
}