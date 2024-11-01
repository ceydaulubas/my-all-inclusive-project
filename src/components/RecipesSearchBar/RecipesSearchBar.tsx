import { useState } from 'react';
import { SearchOutlined } from '@ant-design/icons';
import { StyledInput, StyledForm, StyledButton } from './RecipesSearchBar.style';

interface RecipesSearchBar {}

const RecipesSearchBar = (props: RecipesSearchBar) => {
    return (
        <>
            <StyledForm>
                <StyledInput
                    size="large"
                    placeholder="Search the recipes..."
                    prefix={<SearchOutlined />}
                />
                <StyledButton>Search</StyledButton>
            </StyledForm>
        </>
    );
};

export default RecipesSearchBar;
