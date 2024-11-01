import { RecipesFilterContainer } from './RecipesFilter.style';
import { FilterButton, FilterButtonText } from './RecipesFilter.style';

const RecipesFilter = () => {
    const filterOptions = ['All', 'Meat', 'Chicken', 'Fish', 'Salad'];

    const onFilterSearch = (filter: string) => {
        console.log(filter);
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
