import { Box } from "components/Box/Box";
import { Text, SocialItem, SocialLink } from "./Footer.styled";
import { FaGithub, FaLinkedin, FaFacebook} from "react-icons/fa";
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
            alignItems="center"
            gridGap="8px"
            pt="16px"
            mb="16px"
            borderTop={theme.borders.normal}>
            <Text>&#169; 2023 </Text>

            <span>| </span>
                
            <Box display="flex" justifyContent="center" alignItems="end" gridGap="8px" as="ul">
                <SocialItem>
                    <SocialLink href="https://github.com/Antifishka?tab=repositories"
                        target="_blank"
                        rel="noopener noreferre"
                        aria-label="Github profile">
                        <FaGithub size={30}/>
                    </SocialLink>
                </SocialItem>
                <SocialItem>
                    <SocialLink href="https://www.linkedin.com/in/%D0%B0ntifishka/"
                        target="_blank"
                        rel="noopener noreferre"
                        aria-label="LinkedIn profile">
                        <FaLinkedin size={30}/>
                    </SocialLink>
                </SocialItem>
                <SocialItem>
                    <SocialLink href="https://www.facebook.com/anifeshka.zp"
                        target="_blank"
                        rel="noopener noreferre"
                        aria-label="Facebook profile">
                        <FaFacebook size={30}/>
                    </SocialLink>  
                </SocialItem>
            </Box>
            <span> |</span>
            
            <Text> Developed by Antifishka 😉</Text>
        </Box>
    </Box>
    );
};