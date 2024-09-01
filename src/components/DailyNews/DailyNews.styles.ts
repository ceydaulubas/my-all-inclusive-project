import styled from "styled-components";
import { LoadingOutlined } from "@ant-design/icons";

export const DailyNewsContainer = styled.div`
  background-color: rgba(245, 216, 235, 0.244);
`;

export const DailyNewsHeader = styled.h5`
    margin-left: 20px;
`;

export const DailyNewsList = styled.li`
   color: black;
    margin: 20px;

     &:hover {
      color: #00008B;
      font-weight: 500;
      cursor: grab;
    }
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