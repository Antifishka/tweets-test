import { Helmet } from 'react-helmet';
import { Box } from "components/Box/Box";
import { theme } from 'globalStyles/theme';
import img from 'assets/images/twitter.png'

export default function Home() {
    return (
        <Box minHeight= 'calc(100vh - 50px)'
            display='flex'
            flexDirection='column'
            alignItems= 'center'
            justifyContent='center'
            as="main">
            <Helmet>
                <title>Home</title>
            </Helmet>

            <Box fontWeight= '700'
                fontSize={theme.fontSizes.xl}
                textAlign='center'
                color={theme.colors.mainText}
                as="h1">
                Wellcome to Tweetsbook{' '}
            </Box>
            <img src={img}
                alt="tweetsbook"
                width="120px" />
        </Box>
    );
}