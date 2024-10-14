import { useState } from 'react';
import { Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { StyledInput } from './RecipesSearchBar.style';

interface RecipesSearchBar {}

const ComponentName = (props: RecipesSearchBar) => {
    const [state, setstate] = useState();

    return (
        <StyledInput size="large" placeholder="Search the recipes..." prefix={<SearchOutlined />} />
    );
};

export default ComponentName;
