import React, {useCallback, useEffect} from 'react';
import TabContent from "components/shared/tabsMenu/tabContent";
import PromotionsList from "components/promotions/shared/promotionsList";
import Banner from "components/shared/duplicateComponents/banner";
import styled from "styled-components";
import {useTypedSelector} from "src/store/configureStore";
import {useDispatch} from "react-redux";
import {IStatePromotions} from "src/reducers/PromotionsReducer/PromotionsReducer.types";
import {GetPromotions} from "src/actions/PromotionsAction/PromotionsAction";

const Main = styled.section`
  .mobile & {}
`;
const MonthTrendContainer = styled.div`
  .mobile & {}
`;
const Shares = () => {
    const Promotions = useTypedSelector((store) => store.Promotions);
    const {promotions, isFetching, error} = Promotions as IStatePromotions;
    const dispatch = useDispatch();
    const stableDispatch = useCallback(dispatch, []);
    useEffect(() => {
        stableDispatch(GetPromotions());
    }, []);
    return (
        <Main>
            <TabContent>
                { promotions.length > 0 ? <PromotionsList promotions={promotions} /> : null }
                <MonthTrendContainer>
                    <Banner header={'Тренд месяца'} text={'В честь начала летнего сезона скидки на товары месяца 15%. Успей заказать и в поход!'}></Banner>
                </MonthTrendContainer>
            </TabContent>
        </Main>
    );
};

export default Shares;