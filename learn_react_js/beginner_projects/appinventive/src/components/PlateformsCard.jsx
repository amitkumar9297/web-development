import { Box, Image, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import platform1 from '../assets/plateform1.png'

const PlateformsCard = ({ detail }) => {
    return (
        <>
            <VStack
                justifyContent={'center'}
                height={'150px'}
                width={'220px'}
                borderRadius={'10px'}
                border={'1px solid #4B4B4B'}

            >
                <Image src={platform1} alt='plateform' height={'20px'} width={'102px'} />
                <Box width={'177px'} height={'44px'}>
                    <Text
                        fontWeight={'300'}
                        fontSize={'15px'}
                        textAlign={'center'}
                    >
                        {detail}
                    </Text>
                </Box>
            </VStack>
        </>
    )
}

export default PlateformsCard
