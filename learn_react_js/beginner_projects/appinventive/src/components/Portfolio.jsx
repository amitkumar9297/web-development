import { Box, Button, Image, Text, VStack } from '@chakra-ui/react';
import React from 'react'
import Slider from "react-slick";

import portfolio from '../assets/images.png'

const Portfolio = () => {
    var settings = {
        // dots: true,
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 3,
        touchMove: true,
        speed: 800,
        useTransform: true,

        initialSlide: 0,
        slidesToScroll: 1,

    };
    return (
        <>
            <VStack>
                <Text
                    fontWeight={'600'}
                    lineHeight={'24px'}
                    fontSize={'24px'}
                    color={'#E2E2E2'}
                    mt={'5rem'}
                    mb={'2rem'}
                >
                    Our Portfolio
                </Text>
                <Text
                    fontStyle={'nunito'}
                    fontWeight={'700'}
                    lineHeight={'55px'}
                    fontSize={'75px'}
                    color={'#E2E2E2'}
                    m={0}
                    mb={'2.5rem'}
                >
                    What do we do
                </Text>
                <Text
                    fontWeight={'400'}
                    lineHeight={'34px'}
                    fontSize={'20px'}
                    color={'#E2E2E2'}
                    m={0}
                >
                    all projects that we have already done , proven can help to use more
                </Text>
                <Text
                    fontWeight={'400'}
                    lineHeight={'34px'}
                    fontSize={'20px'}
                    color={'#E2E2E2'}
                    m={0}
                    mb={'2rem'}
                >
                    comfortable, then can used by client from our business
                </Text>

                <Box width={'85%'}>
                    <Slider {...settings}>
                        <div>
                            <Box bgImg={portfolio} h={'300px'} w={'300px'} borderRadius={'30px'} bgSize={'cover'} bgPos={'center'} m={'1rem'}>
                            </Box>
                        </div>
                        <div>
                            <Box bgImg={portfolio} h={'300px'} w={'300px'} borderRadius={'30px'} bgSize={'cover'} bgPos={'center'} m={'1rem'}>
                            </Box>
                        </div>
                        <div>
                            <Box bgImg={portfolio} h={'300px'} w={'300px'} borderRadius={'30px'} bgSize={'cover'} bgPos={'center'} m={'1rem'}>
                            </Box>
                        </div>
                        <div>
                            <Box bgImg={portfolio} h={'300px'} w={'300px'} borderRadius={'30px'} bgSize={'cover'} bgPos={'center'} m={'1rem'}>
                            </Box>
                        </div>
                        <div>
                            <Box bgImg={portfolio} h={'300px'} w={'300px'} borderRadius={'30px'} bgSize={'cover'} bgPos={'center'} m={'1rem'}>
                            </Box>
                        </div>
                        <div>
                            <Box bgImg={portfolio} h={'300px'} w={'300px'} borderRadius={'30px'} bgSize={'cover'} bgPos={'center'} m={'1rem'}>
                            </Box>
                        </div>
                    </Slider>
                </Box>

                <Button
                    border={'1px solid white'}
                    borderRadius={'25px'}
                    h={'3rem'}
                    py={'0.5rem'}
                    px={'2.8rem'}
                    bg={'transparent'}
                    cursor={'pointer'}
                    mt={'1rem'}
                    mb={'8rem'}
                >
                    <Text fontSize={'16px'} lineHeight={'24px'} fontWeight={'700'}>
                        See All Portfolio
                    </Text>
                </Button>
            </VStack>
        </>
    )
}

export default Portfolio
