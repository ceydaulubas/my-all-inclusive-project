import { useState } from 'react';
import {CookBookContainer} from   "./Cookbook.style"
import {QuoteDisplay} from "../../components/index"


interface CookbookProps {
    
}

const Cookbook = (props: CookbookProps) => {
    const [state, setstate] = useState("");
    
    return (
        <CookBookContainer>
            Cookbook

        </CookBookContainer>
    );
};

export default Cookbook;

