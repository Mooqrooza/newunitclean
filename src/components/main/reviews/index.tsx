import React, {useEffect, useState} from 'react';
import Review from "./review";
import {icons} from "src/utils/icons";
import styled from "styled-components";
import {isMobile} from "src/utils/isMobile";
import ButtonBlue from "components/shared/forms/buttonBlue";
import {DIV_BUTTON_SOFT_BLUE_STYLE} from "components/shared/forms/primitives/DIV_BUTTON";
import {SectionLabel} from "components/shared/fonts/specialFonts";
import {getReviews} from "api/getReviews";

const Main = styled.section`
  .mobile & {}
`;
const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 30px;
  width: 100%;
  min-height: 200px;
  .mobile & {}
`;
const ReviewsContainer = styled.div`
  display: flex;
  grid-auto-columns: 30%;
  gap: 0 30px;
  overflow: hidden;
`;
const ReviewsCounter = styled.div`
  display: grid;
  justify-content: center;
  grid-auto-flow: column;
  grid-gap: 20px; gap: 20px;
  align-items: center;
`;
const ReviewPoint = styled.div`
  width: 10px;
  height: 10px;
  background: ${({ theme }) => theme.colors.whiteOrange};
  border-radius: 5px;
  transition: background-color 0.3s;
`;
const ReviewPointSelected = styled(ReviewPoint)`
  background: ${({ theme }) => theme.colors.orange};
`;
const ReviewsMoreButton = styled(DIV_BUTTON_SOFT_BLUE_STYLE)`
  font-size: ${({ theme }) => theme.font.size[16]};
  font-weight: ${({ theme }) => theme.font.weight[700]};
  height: 35px;
  width: 50%;
  justify-self: center;
  color: ${({ theme }) => theme.colors.blue};
  
  .mobile & {
    align-self: center;
    width: auto;
  }
`;
const ReviewsArrow = styled.div`
  position: absolute;
  height: 100%;
  top: 0px;
  width: 100px;
  display: grid;
  align-items: center;
  justify-items: center;
  opacity: 0.7;
  cursor: pointer;
  user-select: none;
  &:hover {
    opacity: 1;
  }
  .mobile & {
    position: relative;
  }
`;
const ReviewsArrowLeft = styled(ReviewsArrow)`
  left: -100px;
  .mobile & {
    left: 0px;
  }
`;
const ReviewsArrowRight = styled(ReviewsArrow)`
  left: 100%;
  .mobile & {
    left: 0px;
  }
`;
interface Review {
    id: number,
    photo: string;
    text: string;
    name: string;
    role: string
}
const Reviews: React.FC = () => {
    const [pos, setPos] = useState(0);
    const [reviewsList, setReviews] = useState<Review[]>([]);
    function leftArrow() { setPos((pos - 1 + reviewsList.length) % reviewsList.length); }
    function rightArrow() { setPos((pos + 1) % reviewsList.length); }
    reviewsList.push(reviewsList[0]);
    reviewsList.push(reviewsList[1]);
    useEffect(() => { setReviews(getReviews()); }, []);
    return (
        <Main>
            <SectionLabel>Отзывы</SectionLabel>
            <Content>
                <ReviewsContainer>
                    { reviewsList.map((review) => <Review pos={pos} key={review.id} name={review.name} photo={review.photo} role={review.role} text={review.text} />) }
                </ReviewsContainer>
                <ReviewsCounter>
                    { reviewsList.map((review, i) => pos == i ? <ReviewPointSelected key={review.id}></ReviewPointSelected> : <ReviewPoint key={review.id}></ReviewPoint>)}
                </ReviewsCounter>
            </Content>

            {/*<ReviewsCounter>
                { reviewsList.map((review, i) => pos == i ? <ReviewPointSelected key={review.id}></ReviewPointSelected> : <ReviewPoint key={review.id}></ReviewPoint>)}
            </ReviewsCounter>
            <ReviewsArrowLeft onClick={leftArrow}>
                <img src={icons.larrow} />
            </ReviewsArrowLeft>
            <ReviewsArrowRight onClick={rightArrow}>
                <img src={icons.rarrow} />
            </ReviewsArrowRight> */}
        </Main>
    );
};

export default Reviews;