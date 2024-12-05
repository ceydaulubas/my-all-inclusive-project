import styled from 'styled-components';


export const RecipesDisplayContainer = styled.div`
    background-color: rgb(248, 243, 243);


    h5 {
        margin-left: 20px;
        margin-bottom: 5vh;
    }
    
`;


export const RecipeImage = styled.img`
    object-fit: cover;
    object-position: center;
    width: 100%;
    height: auto;
    max-height: 300px;
    margin-bottom: 10px; 
    cursor: pointer;
    border-radius: 10px;
    transition: transform 0.3s;
    &:hover {
        transform: scale(1.05);
    }
         
`;

export const RecipeTitle = styled.p`
    text-align: center;
    font-size: 16px;
    font-weight: bold;
    color: #333;
`;
