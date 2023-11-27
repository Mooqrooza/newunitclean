import React, {useEffect, useState, useRef} from 'react';
import Review from './review';
import {icons} from 'src/utils/icons';
import styled from 'styled-components';
import {SectionLabel} from 'components/shared/fonts/specialFonts';
import {getReviews} from 'api/getReviews';
import {RefDivComponent} from 'components/shared/refcomponent';

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
  position: relative;
  width: 100%;
`;
const ReviewsWrapper= styled(RefDivComponent)`
  display: flex;
  grid-auto-columns: 30%;
  gap: 0 30px;
  min-width: 220px;
  padding: 0 30% 0 0;
  overflow: hidden;
`;
const GradientOverflowRight = styled.div`
  position: absolute;
  width: 30px;
  height: 100%;
  left: 0;
  top: 0;
  background: linear-gradient(90deg, rgba(255, 255, 255, 0.5) 0%, rgba(255, 255, 255, 0.00) 100%);
`;
const GradientOverflowLeft = styled.div`
  position: absolute;
  width: 100px;
  height: 100%;
  right: 0;
  top: 0;
  background: linear-gradient(270deg, rgba(255, 255, 255, 0.92) 0%, rgba(255, 255, 255, 0.00) 100%);
`;
const Tools = styled.div`
  display: flex;
  width: 100%;
`;
const CounterPoints = styled(RefDivComponent)`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0 15px;
  flex: 1;

  .counter-point {
    position: relative;
    width: 30px;
    height: 30px;
    cursor: pointer;
    &::after {
      content: "";
      display: block;
      position: absolute;
      margin 10px 0 0 10px;
      width: 10px;
      height: 10px;
      background: ${({ theme }) => theme.colors.whiteOrange};
      border-radius: 5px;
      transition: background-color 0.3s;
    }
    &.active {
      &::after {
        background: ${({ theme }) => theme.colors.orange};
      }
    }
  }
`;
const Arrow = styled.div`
  height: 30px
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
const ArrowLeft = styled(Arrow)`
  left: -100px;
  .mobile & {
    left: 0px;
  }
`;
const ArrowRight = styled(Arrow)`
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
    const [change, setChange] = useState(false);
    const [pos, setPos] = useState(0);
    const [reviewsList, setReviews] = useState<Review[]>([]);
    const ReviewsWrapperRef = useRef<HTMLDivElement>(null);
    const counterPointsRef = useRef<HTMLDivElement>(null);
    function leftArrow() { setPos((pos - 1 + reviewsList.length) % reviewsList.length); }
    function rightArrow() { setPos((pos + 1) % reviewsList.length); }
    let processReviewsScrollControllTmr:any = null;
    let oldWinSize = 0;
    function processReviewsScrollControll () {
        clearTimeout(processReviewsScrollControllTmr);
        processReviewsScrollControllTmr = setTimeout(() => {
            const newWinSize =  window.innerWidth;
            const winWidthChanged = oldWinSize !== newWinSize;
            const reviewsWrapperEl = ReviewsWrapperRef.current;
            const counterPointsContainerEl = counterPointsRef.current;
            if (winWidthChanged && reviewsWrapperEl) {
                oldWinSize = newWinSize;
                const reviews = getReviews();
                const reviewsWrapperElWidth = reviewsWrapperEl.clientWidth;
                const firstChildEl = reviewsWrapperEl.firstElementChild;
                const childElWidth = firstChildEl?.clientWidth || 1;
                const childEls = Array.from(reviewsWrapperEl.children);
                const childCount = reviews.length;
                const fitElCount = Math.floor(reviewsWrapperElWidth / (childElWidth || 1))  || 1;
                const stepCounts = Math.ceil(childCount / (fitElCount || 1));
                const pointEls: Array<HTMLElement> = [];
                const appendChildElsTo = (parentEl:HTMLElement, childEls:Array<HTMLElement> = []) => {
                    parentEl.innerHTML = "";
                    if (parentEl) { 
                        childEls.forEach((el:HTMLElement) => { parentEl.appendChild(el); }); 
                    } 
                };
                const onClickPointEl = (e:any) => {
                    const pointEl = e.target;
                    if (pointEl.classList.contains('active')) return;
                    const pointsContainerEl = pointEl.parentElement;
                    const allPointEls: Array<HTMLElement> = Array.from(pointsContainerEl.children);
                    const idx = +pointEl.getAttribute('data-index');
                    const scrollToElInx = idx ? (idx * fitElCount) : 0;
                    const scrollToEl = childEls[scrollToElInx];
                    
                    allPointEls.forEach((el:any) => { el.classList.remove('active'); });
                    pointEl.classList.add('active')
                    if (scrollToEl instanceof HTMLElement) {
                      reviewsWrapperEl.scroll({ top: 0, left: scrollToEl.offsetLeft, behavior: 'smooth'});

                    }
                };
                const getPointEl = (idx:number) => {
                    const el = document.createElement('div');
                    el.classList.add('counter-point');
                    el.setAttribute('data-index', (''+idx));
                    el.addEventListener('click', onClickPointEl);
                    if (idx === 0) { el.classList.add('active') }
                    return el;
                };
                
                reviewsWrapperEl.scroll(0, 0);
                for (let i=0; i < stepCounts; i++) { 
                    pointEls.push( getPointEl(i) );
                }
                if (counterPointsContainerEl instanceof HTMLElement) { 
                    appendChildElsTo(counterPointsContainerEl, pointEls);
                } 
            }
        }, 500);
    }
    useEffect(() => { 
       setReviews(getReviews()); 
       processReviewsScrollControll(); 
       window.addEventListener('resize', () => { processReviewsScrollControll(); });
    }, []);
    return (
        <Main>
            <SectionLabel>Отзывы</SectionLabel> 
            <Content>
                <ReviewsContainer>
                    <GradientOverflowRight />
                    <GradientOverflowLeft />
                    <ReviewsWrapper ref={ReviewsWrapperRef}>
                        { reviewsList.map((review) => <Review pos={pos} key={review.id} name={review.name} photo={review.photo} role={review.role} text={review.text} />) }
                    </ReviewsWrapper>
                </ReviewsContainer>
                { <Tools>
                    <ArrowLeft onClick={leftArrow}>
                        <img src={icons.larrow} />
                    </ArrowLeft>
                    <CounterPoints className={'counter-points'} ref={counterPointsRef} />
                    <ArrowRight onClick={rightArrow}>
                        <img src={icons.rarrow} />
                    </ArrowRight>
                </Tools> }
            </Content>
        </Main>
    );
};

export default Reviews;