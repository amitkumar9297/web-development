import { Box, HStack, Image, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import logo from '../assets/logo.png'

const Footer = () => {
    return (
        <VStack bg={'#383638'} h={'550px'} mt={'9.8rem'}>
            <HStack w={'88%'} justifyContent={'space-between'} pt={'8rem'} alignItems={'flex-start'}>
                <Box h={'88px'} w={'278px'} border={'1px solid white'} borderRadius={'20px'}>
                    <HStack alignItems={'center'}>
                        <Image src={logo} alt='logo' width={'50px'} height={'52px'} backgroundPosition={'center'} />
                        <h1>appinventive</h1>
                    </HStack>
                </Box>
                <VStack color={'#E2E2E2'} alignItems={'flex-start'}>
                    <Text fontWeight={'700'} fontSize={'22px'} lineHeight={'28px'} m={0}> Term & Policies</Text>
                    <Text fontWeight={'400'} fontSize={'18px'} lineHeight={'23px'} m={0}> Term & Term of Services</Text>
                    <Text fontWeight={'400'} fontSize={'18px'} lineHeight={'23px'} m={0}> Term & Privacy Policy</Text>
                </VStack>
                <VStack color={'#E2E2E2'} alignItems={'flex-start'}>
                    <Text fontWeight={'700'} fontSize={'22px'} lineHeight={'28px'} m={0}> Company</Text>
                    <Text fontWeight={'400'} fontSize={'18px'} lineHeight={'23px'} m={0}>Home</Text>
                    <Text fontWeight={'400'} fontSize={'18px'} lineHeight={'23px'} m={0}> About Us</Text>
                    <Text fontWeight={'400'} fontSize={'18px'} lineHeight={'23px'} m={0}> Contact Us</Text>

                </VStack>
                <VStack color={'#E2E2E2'} alignItems={'flex-start'}>
                    <Text fontWeight={'700'} fontSize={'22px'} lineHeight={'28px'} m={0}> Contact</Text>
                    <Text fontWeight={'400'} fontSize={'18px'} lineHeight={'23px'} m={0}>(+62) 893912392190</Text>
                    <Text fontWeight={'400'} fontSize={'18px'} lineHeight={'23px'} m={0}> appinventiv@gmail.com</Text>
                </VStack>
                <VStack color={'#E2E2E2'} alignItems={'flex-start'}>
                    <Text fontWeight={'700'} fontSize={'22px'} lineHeight={'28px'} m={0}> Location</Text>
                    <Text fontWeight={'400'} fontSize={'18px'} lineHeight={'23px'} m={0}>PT Osiris Real Estate Internasional</Text>
                    <Text fontWeight={'400'} fontSize={'18px'} lineHeight={'23px'} m={0}>Jl. KH. Wahid Hasyim Kel No.10D</Text>
                    <Text fontWeight={'400'} fontSize={'18px'} lineHeight={'23px'} m={0}> Jakarta, Indonesia</Text>
                    <Text fontWeight={'400'} fontSize={'18px'} lineHeight={'23px'} m={0}> team@Appinventiv.com</Text>

                </VStack>

            </HStack>
            <HStack w={'35%'} bg={'red'} h={'50px'} justifyContent={'space-evenly'}>
                <Box h={'40px'} w={'40px'} borderRadius={'50%'} bg={'white'}></Box>
                <Box h={'40px'} w={'40px'} borderRadius={'50%'} bg={'white'}></Box>
                <Box h={'40px'} w={'40px'} borderRadius={'50%'} bg={'white'}></Box>
                <Box h={'40px'} w={'40px'} borderRadius={'50%'} bg={'white'}></Box>
                <Box h={'40px'} w={'40px'} borderRadius={'50%'} bg={'white'}></Box>

            </HStack>
        </VStack>
    )
}

export default Footer
