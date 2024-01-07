import { Box, Image, VStack } from '@chakra-ui/react'
import React from 'react'
import frame from '../assets/fra.png'

const Frame = () => {
    return (
        <>
            <div>
                <Box pos={'absolute'} bg={'red'} height={'2.1rem'} width={'2.1rem'} top={'793px'} left={'294px'} zIndex={'2'} borderRadius={'50%'}></Box>
                <Box pos={'absolute'} bg={'royalblue'} height={'2.1rem'} width={'2.1rem'} top={'567px'} right={'15rem'} zIndex={'2'} borderRadius={'100%'}></Box>
            </div>
            <VStack mx={'13rem'} my={'5rem'} position={'relative'} zIndex={'1'}>
                <Image src={frame} alt='frame' height={'501px'} width={'739px'} borderRadius={'50px'} />
            </VStack>
        </>
    )
}

export default Frame
