import { Box, HStack, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import ServiceCard from './ServiceCard'

const Services = () => {
    return (
        <>
            <VStack height={'440px'} justifyContent={'space-between'} pt={'6rem'}>
                <Text
                    fontWeight={'600'}
                    fontSize={'24px'}
                    lineHeight={'24px'}
                    color={'#E2E2E2'}
                    m={0}
                >
                    Our Services
                </Text>
                <Box h={'284px'} w={'85%'}>
                    <Text
                        fontWeight={'700'}
                        fontSize={'55px'}
                        lineHeight={'71px'}
                        color={'#E2E2E2'}
                        textAlign={'center'}
                        fontStyle={'nunito'}
                        m={0}
                    >
                        We Create New Solutions and TransformExisting Ones with a Development Process ThatBeats Industry-Best Timelines Movement
                    </Text>
                </Box>
                <Box h={'64px'} w={'85%'}>
                    <Text
                        fontWeight={'400'}
                        fontSize={'20px'}
                        lineHeight={'32px'}
                        color={'#E2E2E2'}
                        textAlign={'center'}
                        m={0}
                    >
                        We move with make a Creative Strategy for help your business goal, we help to improve your income by a services we have. make your content look interesting and make people look for your business
                    </Text>
                </Box>
            </VStack>
            <VStack my={'2.1rem'} gap={'2.2rem'}>
                <HStack gap={'3rem'}>

                    <ServiceCard serviceOffer={'AI-ML'} bgc={'#E2E2E2'} />
                    <ServiceCard serviceOffer={'Mobile App Development'} bgc={'#FF4646'} />
                    <ServiceCard serviceOffer={'Software Development'} bgc={'#8EEA77'} />
                    <ServiceCard serviceOffer={'Digital Transformation'} bgc={'#FFB21A'} />
                </HStack>
                <HStack gap={'3rem'}>

                    <ServiceCard serviceOffer={'Data Science & Analytics'} bgc={'#E2E2E2'} />
                    <ServiceCard serviceOffer={'Cloud Services'} bgc={'#FF4646'} />
                    <ServiceCard serviceOffer={'BlockChain Services'} bgc={'#8EEA77'} />
                    <ServiceCard serviceOffer={'Ideation and Design Strategies'} bgc={'#FFB21A'} />
                </HStack>

            </VStack>
        </>
    )
}

export default Services
