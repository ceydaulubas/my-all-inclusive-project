import styled from "styled-components";
import { devices } from "../../assets/statics/devices";

export const HomeContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  & > * {
    width: calc(50% - 10px);
    margin-bottom: 20px;
  }

  @media (${devices.tablet}) {
    .home > * {
      width: 100%;
    }
  }
`;
