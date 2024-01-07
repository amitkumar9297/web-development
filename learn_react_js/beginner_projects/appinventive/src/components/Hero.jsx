import { Box, Button, Text, VStack } from '@chakra-ui/react'
import React from 'react'

const Hero = () => {
    return (
        <>
            <div>
                <Box pos={'absolute'} bg={'royalblue'} height={'2.1rem'} width={'2.1rem'} top={'393px'} left={'94px'} zIndex={'2'} borderRadius={'50%'}></Box>
                <Box pos={'absolute'} bg={'red'} height={'2.1rem'} width={'1.05rem'} top={'247px'} right={'0rem'} zIndex={'2'} borderLeftRadius={'50px'}></Box>
            </div>
            <VStack
                // height={'15rem'}
                spacing={4}
                pos={'relative'}
                zIndex={'1'}
            >
                <Text
                    margin={0}
                    fontFamily={'Nunito'}
                    color={'#E2E2E2'}
                    fontSize={'64px'}
                    lineHeight={'85px'}
                    letterSpacing={'1%'}
                    fontWeight={'800'}
                >
                    Meet the Digital
                </Text>
                <Text
                    margin={0}
                    fontFamily={'Nunito'}
                    color={'#E2E2E2'}
                    fontSize={'64px'}
                    lineHeight={'85px'}
                    letterSpacing={'1%'}
                    fontWeight={'800'}
                >
                    Drivers of Global Disruptors
                </Text>
                <VStack my={'1.2rem'}>
                    <Text
                        margin={0}
                        fontFamily={'Nunito'}
                        color={'#E2E2E2'}
                        fontSize={'20px'}
                        lineHeight={'30px'}
                        letterSpacing={'1%'}
                        fontWeight={'400'}
                    >
                        We catalyse business growth by reimagining digital experiences that
                    </Text>
                    <Text
                        fontFamily={'Nunito'}
                        margin={0}
                        color={'#E2E2E2'}
                        fontSize={'20px'}
                        lineHeight={'30px'}
                        letterSpacing={'1%'}
                        fontWeight={'400'}
                    >
                        conquer complex challenges through innovation and agility.
                    </Text>
                </VStack>
                <Button
                    bg={'#E2E2E2'}
                    h={'3rem'}
                    w={'256px'}
                    style={{ boxShadow: '0px,4px,8px,#377DFF' }}
                    borderRadius={'25px'}
                    border={'none'}
                    py={'.5rem'}
                    px={'2.8rem'}
                    my={'.5rem'}
                    cursor={'pointer'}
                >
                    <Text color={'black'} fontWeight={'600'} fontSize={'1.2rem'}>Consult Our Experts</Text>
                </Button>
            </VStack>
        </>
    )
}

export default Hero
