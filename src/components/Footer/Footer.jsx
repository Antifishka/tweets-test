import { Box } from "components/Box/Box";
import { Text } from "./Footer.styled";
import { theme } from 'globalStyles/theme';

export const Footer = () => {
return (
    <Box position="absolute"
        bottom="0"
        left="0"
        right="0"
        p="0 32px"
        as="footer">
        <Box display="flex"
            justifyContent="center"
            gridGap="8px"
            p="16px 0"
            borderTop={theme.borders.normal}
            as="ul">
            <li><Text>&#169; 2023 </Text></li>
            <li><Text>|  All Rights Reserved  |</Text></li>
            <li><Text> Developed by Antifishka 😉</Text></li>
        </Box>
    </Box>
    );
};