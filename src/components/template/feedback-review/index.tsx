import React from 'react';
import Reviews from "../review/reviews";
import styled from "styled-components";
import OrderCall from "components/template/feedback-review/orderCall";
import {isMobile} from "src/utils/isMobile";

const Main = styled.div`
  .mobile & {}
`;

const FeedbackStyle = styled.div`
  height: 712px;
  display: grid;
  grid-template-columns: 50% 50%;
  justify-items: center;
`;

const ReviewsContainer = styled.div`
  display: grid;
  margin: 140px 0;
`;

const ReviewsHeader = styled.div`
  font-size: ${({ theme }) => theme.font.size[20]};
  font-weight: ${({ theme }) => theme.font.weight[800]};
  color: ${({ theme }) => theme.colors.black};
  margin-bottom: 60px;
`;

const Feedback = () => {
    return (
        <Main id={"feedback"}>
          <OrderCall></OrderCall>
        </Main>
    );
};

export default Feedback;