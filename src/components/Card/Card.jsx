import { CardWrapper, TopBox, Thumb, MediumBox } from "./Card.styled";
import { ReactComponent as Logo } from "assets/icons/logo.svg";

export const Card = () => {

    return (
        <CardWrapper>
            <TopBox>
                <Logo />
                <Thumb />
            </TopBox>
            
            
            <MediumBox></MediumBox>
                
      
        </CardWrapper>
    );
};