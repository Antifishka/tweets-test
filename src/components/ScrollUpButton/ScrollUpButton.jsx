import React, { useState } from 'react';
import { RxDoubleArrowUp } from "react-icons/rx";
import { scrollUp } from "helpers/scrollUp";
import { ScrollButton } from "./ScrollUpButton.styled";

export const ScrollUpButton = () => {
    const [isVisible, setIsVisible] = useState(false);

     const handleScroll = () => {
        const currentScrollY = window.scrollY;
        if (currentScrollY > 100) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        };
     };
    
    window.addEventListener('scroll', handleScroll);

    return (
        <>
            { isVisible &&
                <ScrollButton
                    onClick={scrollUp}
                    aria-label="scroll-up">
                    <RxDoubleArrowUp size={18}/>
                </ScrollButton>}
        </>    
    );
};