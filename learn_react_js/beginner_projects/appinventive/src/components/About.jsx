import { Box, VStack } from '@chakra-ui/react'
import React from 'react'
import AboutCard from './AboutCard'

const About = () => {
    return (
        <VStack>
            <VStack bg={'#202020'} height={'485px'} width={'88%'} justifyContent={'center'}>
                <Box minH={'70'} w={'79.5%'} pos={'absolute'} bg={'#202020'} borderRadius={'100%'} mb={'17.5rem'}></Box>
                <Box
                    className='scroll'
                    bg={'black'}
                    height={'277px'}
                    width={'90%'}
                    display={'flex'}
                    flexDir={'row'}
                    overflow={'scroll'}
                    overflowY={'hidden'}
                >
                    <AboutCard />
                    <AboutCard />
                    <AboutCard />
                    <AboutCard />

                </Box>
                <Box minH={'70'} w={'79.5%'} pos={'absolute'} bg={'#202020'} borderRadius={'100%'} mt={'17.5rem'}></Box>
            </VStack>
        </VStack>
    )
}

export default About
