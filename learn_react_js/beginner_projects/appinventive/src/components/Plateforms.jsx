import React from 'react'
import PlateformsCard from './PlateformsCard'
import { Box, Button, HStack, Text } from '@chakra-ui/react';

const Plateforms = () => {
    return (
        <>
            <HStack className='scroll'
                gap={'7rem'}
                ml={'13rem'}
                mr={'1rem'}
            // css={{
            //     overflowX: 'scroll',
            //     scrollbarWidth: 'none'
            // }}
            >
                <PlateformsCard detail={'App development company of the year'} />
                <PlateformsCard detail={'Most promising mobileapp solution provider'} />
                <PlateformsCard detail={'India’s Growth Champions in IT'} />
                <PlateformsCard detail={'Tech Company Of The Year'} />

            </HStack>
            <HStack ml={'7rem'} mt={'1.5rem'}>
                <Button border={'2px solid gray'} h={'34px'} w={'34px'} borderRadius={'50%'} bg={'transparent'}>
                    <h2>{'<'}</h2>
                </Button>
                <Button border={'2px solid white'} h={'34px'} w={'34px'} borderRadius={'50%'} bg={'transparent'}>
                    <h2>{'>'}</h2>
                </Button>

            </HStack>

            <HStack h={'350px'} alignItems={'center'} ml={'5rem'} mb={'6rem'}>
                <Box h={'350px'} w={'684px'}>
                    <Text
                        color={'#E2E2E2'}
                        fontWeight={'700'}
                        fontSize={'55px'}
                        fontFamily={'nunito'}
                        lineHeight={'72px'}
                    >
                        Transforming Businesses with Technology That Transcends Geographies and Platforms
                    </Text>
                </Box>
                <Box h={'256px'} w={'549px'}>
                    <Text
                        color={'#E2E2E2'}
                        fontWeight={'400'}
                        fontSize={'20px'}
                        lineHeight={'32px'}
                        verticalAlign={'middle'}
                        letterSpacing={'2%'}
                    >
                        Appinventiv is one of the world’s largest IT services provider helping companies redefine their digital possibilities for nearly a decade now. With our team of 1500+ tech evangelists, we are building the digital infrastructure of our clients positioning them to be the market leaders of their respective industries.
                    </Text>
                </Box>
            </HStack >
        </>
    )
}

export default Plateforms
