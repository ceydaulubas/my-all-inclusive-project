import { RecipesFilterContainer } from './RecipesFilter.style';
import { FilterButton, FilterButtonText } from './RecipesFilter.style';

const RecipesFilter = ({ setFilter }: { setFilter: (filter: string) => void }) => {
    const filterOptions = ['All', 'Red Meat', 'Chicken', 'Fish', 'Salad'];

    const onFilterSearch = (filter: string) => {
        setFilter(filter); 
    };

    return (
        <RecipesFilterContainer>
            <div>
                {filterOptions.map((filter) => (
                    <FilterButton key={filter} onClick={() => onFilterSearch(filter)}>
                        <FilterButtonText> {filter}</FilterButtonText>
                    </FilterButton>
                ))}
            </div>
        </RecipesFilterContainer>
    );
};

export default RecipesFilter;
