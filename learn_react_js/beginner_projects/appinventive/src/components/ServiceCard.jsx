import { Box, Text, VStack } from '@chakra-ui/react'
import React from 'react'

const ServiceCard = ({ serviceOffer, bgc }) => {
    return (
        <VStack h={'262px'} w={'269px'} bg={'transparent'} borderRadius={'30px'} border={'1px solid gray'}>
            <Box h={'100px'} w={'100px'} bg={bgc} borderRadius={'50%'} m={'2rem'}></Box>
            <Text
                color={'#E2E2E2'}
                fontWeight={'700'}
                fontSize={'22px'}
                lineHeight={'34px'}
                textAlign={'center'}
                w={'70%'}
                m={0}
            >
                {serviceOffer}
            </Text>
        </VStack>
    )
}

export default ServiceCard
