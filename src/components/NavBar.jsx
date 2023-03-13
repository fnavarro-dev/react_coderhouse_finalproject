import React from 'react' //esto se puede borrar, es antiguo
import CartWidget from './CartWidget'
import { Container, Flex, Spacer, Box, Heading } from '@chakra-ui/react'
//ocupamos el snippet rafce que ocupa función flecha

const NavBar = ({  }) => {
    return <>
    <Container bg='blue.600' maxW="" color="#262626">
        <Flex alignContent="center" gap="2">
            <Box p='2' color="white">
                 <Heading size="md">E-Commerce</Heading>
            </Box>
            <Spacer />
            <Box p='2' color="white">
                <CartWidget />  
            </Box>
        </Flex>
    </Container>
    </>
}

export default NavBar