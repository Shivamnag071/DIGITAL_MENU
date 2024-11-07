import { Box, Flex, Stack, Text, Link, IconButton, Input, Button, VStack } from '@chakra-ui/react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
  return (
    <Box as="footer" bg="#CBD5E0" mb ="00px" color="white" py={6} mt="auto" textAlign="center">
      
      {/* Footer Flex Container */}
      <Flex
        direction={{ base: 'column', md: 'row' }}
        justify="space-between"
        align="center"
        maxW="1200px"
        mx="auto"
        px={4}
        w="100%"
      >
        {/* Quick Links (Left-aligned) */}
        <Stack
          direction={{ base: 'column', md: 'row' }}
          spacing={8}
          align={{ base: 'center', md: 'flex-start' }}
          textAlign={{ base: 'center', md: 'left' }}
          w={{ base: '100%', md: 'auto' }}
        >
          <VStack align="flex-start">
            <Link href="/about-us" _hover={{ textDecoration: 'underline' }}>About Us</Link>
            <Link href="/careers" _hover={{ textDecoration: 'underline' }}>Careers</Link>
            <Link href="/faq" _hover={{ textDecoration: 'underline' }}>FAQ</Link>
          </VStack>
          <VStack align="flex-start">
            <Link href="/privacy-policy" _hover={{ textDecoration: 'underline' }}>Privacy Policy</Link>
            <Link href="/terms-of-service" _hover={{ textDecoration: 'underline' }}>Terms of Service</Link>
            <Link href="/contact" _hover={{ textDecoration: 'underline' }}>Contact Us</Link>
          </VStack>
        </Stack>

        {/* Social Media Icons (Centered between Links and Newsletter) */}
        <Stack direction="row" spacing={4} justify="center" mx={8}>
          <IconButton
            as="a"
            href="https://facebook.com"
            aria-label="Facebook"
            icon={<FaFacebook />}
            colorScheme="facebook"
            variant="ghost"
          />
          <IconButton
            as="a"
            href="https://twitter.com"
            aria-label="Twitter"
            icon={<FaTwitter />}
            colorScheme="twitter"
            variant="ghost"
          />
          <IconButton
            as="a"
            href="https://instagram.com"
            aria-label="Instagram"
            icon={<FaInstagram />}
            colorScheme="pink"
            variant="ghost"
          />
          <IconButton
            as="a"
            href="https://linkedin.com"
            aria-label="LinkedIn"
            icon={<FaLinkedin />}
            colorScheme="linkedin"
            variant="ghost"
          />
        </Stack>

        {/* Newsletter Signup (Right-aligned) */}
        <Stack
          direction={{ base: 'column', md: 'row' }}
          spacing={3}
          align="center"
          mt={{ base: 6, md: 0 }}
          textAlign="right"
        >
          <Input
            placeholder="Enter your email"
            maxW="300px"
            bg="white"
            color="black"
          />
          <Button colorScheme="teal">Subscribe</Button>
        </Stack>
      </Flex>

      {/* Contact Information */}
      <Box mt={4}>
        <Text fontSize="sm">Contact Us:</Text>
        <Text fontSize="sm">Email: info@yourcompany.com | Phone: +123 456 7890</Text>
      </Box>

      {/* Copyright */}
      <Text mt={2} fontSize="sm">
        &copy; {new Date().getFullYear()} Your Company Name. All rights reserved.
      </Text>
    </Box>
  );
}
