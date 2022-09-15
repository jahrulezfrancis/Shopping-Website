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
import YellowBackGirl from "../../Components/Images/yellow-background-girl.svg"
import WhiteBG from "../../Components/Images/whitebg.png"
import YoungFav1 from "../../Components/Images/Youngfav1.png"
import YoungFav2 from "../../Components/Images/Youngfav2.png"
import Playstore from "../../Components/Images/playstore.png"
import Applestore from "../../Components/Images/app-store.png"
import MobileMockup from "../../Components/Images/Mobile-app.png"



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
                    <Stack>
                        <MdArrowForward width='10em' />
                    </Stack>
                </HStack>
            </VStack>
        </HStack>
    )
}

const ShoppingBTN = () => {
    return (
        <Button color='white' w='8em' bgColor='black' _hover={{ bgColor: '#EBD96B' }}>Shop Now</Button>
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
                    <ShoppingBTN />
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
            <Stack m='5em 8em'>
                <HStack spacing='5em' width='100%' h='25em' justify='center' bgGradient='linear(1.32deg, #E0C340 0.13%, #DFC23E 3.97%, #E1C441 7.2%, 
                #E3C743 10.13%, #E4C542 12.98%, #E6C744 15.99%, #E7C845 19.52%, #E5C643 23.96%, 
                #E6C945 30.43%, #E3C743 36.49%, #E9CA48 42.49%, #EDCE49 49.35%, #F0D44C 55.42%, #F4D84F 61.43%,
                #F6DA52 65.74%, #F7DB53 72.23%, #F9DD55 77.43%, #F9DF56 83.84%, #FAE157 91.52%, #F9DF56 97.87%)'>
                    <Stack w='50%'>
                        <Image src={YellowBackGirl} alt='girl on yellow background' h='25em' />
                    </Stack>
                    <VStack justify='start' align='start' w='50%' spacing='.3em'>
                        <Box bgImage={WhiteBG} bgRepeat='no-repeat' h='3em' textAlign='center' ml='-.7em'
                            fontSize='1.4em' fontWeight='extrabold' fontFamily='Poppins' color='black'
                        >
                            <Heading p='.4em' extAlign='center'
                                fontSize='2em' fontWeight='extrabold' fontFamily='Poppins' color='black'>
                                PAYDAY
                            </Heading>
                        </Box>
                        <Heading textAlign='center' mb='3em' p='0em'
                            fontSize='2em' fontWeight='extrabold' fontFamily='Poppins' color='black'>
                            SALE NOW
                        </Heading>
                        <Stack pt='2em' spacing='1em'>
                            <Text>Spend minimal $100 get 30% off <br />
                                voucher code for your next purchase
                            </Text>
                            <Text>1 June - 10 June 2021</Text>
                            <Text>*Terms and conditons apply</Text>
                            <ShoppingBTN />
                        </Stack>
                    </VStack>
                </HStack>
            </Stack>
        </Box>
    )
}


export function BottomSection() {
    return (
        <Box>
            <Stack m='5em 10em'>
                <VStack justify='center' align='start'>
                    <Stack mb='2em'>
                        <Heading fontSize='3em' lineHeight='2.5em' fontWeight='extrabold' fontFamily='Poppins' color='black'>
                            Young's Favorite
                        </Heading>
                    </Stack>
                    <HStack mt='2em' spacing='2em'>
                        <Explore image={YoungFav1} />
                        <Explore image={YoungFav2} />
                    </HStack>
                </VStack>
            </Stack>
            <Stack mt='5em' h='40em' w='100%' align='center'>
                <HStack spacing='10em'>
                    <VStack spacing='2em' justify='start' align='start'>
                        <Heading letterSpacing='2px' fontFamily='Poppins' fontWeight='1000' lineHeight='1.3em'>
                            DOWNLOAD APP & <br />
                            GET THE VOUCHER!
                        </Heading>
                        <Text>
                            Get 30% off for first transaction using <br />
                            Rondovision mobile app for now.
                        </Text>
                        <HStack>
                            <Image src={Playstore} alt='' />
                            <Image src={Applestore} alt='' />
                        </HStack>
                    </VStack>
                    <Stack>
                        <Image src={MobileMockup} alt='mobile mockup' />
                    </Stack>
                </HStack>
            </Stack>
        </Box>
    )
}
