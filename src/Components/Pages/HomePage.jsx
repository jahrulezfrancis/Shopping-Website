import { Box, Heading } from '@chakra-ui/react'
import React from 'react'
import IntroSection from '../Header/IntroSection'
import Navigation, { MobileMenu } from '../Header/Navigation'


export default function HomePage() {
    return (
        <Box>
           <Navigation />
           <MobileMenu />
           <IntroSection />
        </Box>
    )
}