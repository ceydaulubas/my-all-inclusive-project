import styled from "styled-components";
import { LoadingOutlined } from "@ant-design/icons";

export const QuoteDisplayContainer = styled.div<{ backgroundImage: string }>`
  background-image: url(${(props) => props.backgroundImage});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`;

export const QuoteHeader = styled.h5`
  margin-left: 20px;
  color: white
`;

export const QuoteText = styled.div`
  text-align: center;
  margin: 120px 50px;

  @media (max-width: 768px) {
    margin: 60px 25px;
  }
`;

export const QuoteContent = styled.p`
  color: rgb(68, 16, 43);
  font-size: 1.2rem;
  font-weight: 500;
  font-family: "Bradley Hand", cursive;
`;

export const QuoteAuthor = styled.p`
  color: rgba(68, 16, 43, 0.676);
  font-size: 1rem;
  font-weight: 400;
  font-family: serif;
`;

export const StyledLoadingOutlined = styled(LoadingOutlined)`
  font-size: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 60%;
  margin: auto;
  color: "darkblue";
`;
