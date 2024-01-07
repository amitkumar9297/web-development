import React from 'react'
import logo from '../assets/logo.png'
import { Button, HStack, Image, Text } from '@chakra-ui/react'

const Header = () => {
    return (
        <>
            <HStack my={'3rem'} mx={'6rem'} alignItems={'center'} h={'5rem'} justifyContent={'space-between'}>
                <HStack alignItems={'center'}>
                    <Image src={logo} alt='logo' width={'50px'} height={'52px'} backgroundPosition={'center'} />
                    <h1>appinventive</h1>
                </HStack>
                <HStack color={'gray'} fontWeight={'400'}>
                    <Text fontSize={'1.3rem'} ml={'2.5rem'} cursor={'pointer'}>Home</Text>
                    <Text fontSize={'1.3rem'} ml={'2.5rem'} cursor={'pointer'}>Our Services</Text>
                    <Text fontSize={'1.3rem'} ml={'2.5rem'} cursor={'pointer'}>Awards</Text>
                    <Text fontSize={'1.3rem'} ml={'2.5rem'} mr={'2.5rem'} cursor={'pointer'}>Portfolio</Text>
                </HStack>
                <Button ml={'8rem'} border={'1px solid white'} borderRadius={'25px'} h={'3rem'} py={'0.5rem'} px={'2.8rem'} bg={'transparent'} cursor={'pointer'}>
                    <Text fontSize={'1.2rem'} >
                        Contact Us
                    </Text>
                </Button>
            </HStack>
        </>
    )
}

export default Header
