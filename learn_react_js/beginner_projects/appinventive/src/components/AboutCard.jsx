import { Box, Text, VStack } from '@chakra-ui/react'
import React from 'react'

const AboutCard = () => {
    return (
        <Box h={'100%'} minW={'380px'} bg={'red'} mx={'.5rem'}>
            <VStack justifyContent={'center'} height={'100%'}>
                <Text>App Development Company Of the Year</Text>
                <Text>Tech Company Of The Year</Text>
            </VStack>
        </Box>
    )
}

export default AboutCard
