
import { useState } from 'react';
import { SearchOutlined } from '@ant-design/icons';
import { StyledInput, StyledForm, StyledButton } from './RecipesSearchBar.style';

interface RecipesSearchBarProps {
    setSearchQuery: (query: string) => void;
}

const RecipesSearchBar = ({ setSearchQuery }: RecipesSearchBarProps) => {
    const [query, setQuery] = useState<string>('');

    const handleSearch = () => {
        setSearchQuery(query);
    };

    return (
        <StyledForm>
            <StyledInput
                size="large"
                placeholder="Search for recipes..."
                prefix={<SearchOutlined />}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />
            <StyledButton onClick={handleSearch}>Search</StyledButton>
        </StyledForm>
    );
};

export default RecipesSearchBar;
