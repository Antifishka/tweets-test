import { Box } from "components/Box/Box";
import { } from "./Footer.styled";

export const Footer = () => {
return (
    <Box as="footer">
        <Box display="flex"
            justifyContent="center"
            gridGap="8px"
            as="ul">
                <Box display="flex"  gridGap="8px" as="li">
                    <span class="footer__text footer__text--indent">&#169; 2023 </span>
                    <p class="footer__text footer__text--indent" data-key="rights">
                    |  All Rights Reserved  |
                    </p>
                </Box>
                <Box display="flex" as="li">
                    <p class="footer__text" data-key="developed">Developed with</p>
                    <svg class="footer__icon" width="14" height="13">
                        <use href="images/symbol-defs.svg#heart-icon"></use>
                    </svg>
                    <p>by Antifishka 😉</p>
                </Box>
        </Box>
    </Box>
    );
};