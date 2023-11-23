import React, {useCallback, useEffect} from 'react';
import ProductsList from "components/shared/productsList";
import ButtonBlue from "components/shared/forms/buttonBlue";
import TabContent from "components/shared/tabsMenu/tabContent";
import {useTypedSelector} from "src/store/configureStore";
import {useDispatch} from "react-redux";
import {IStateFavourites} from "src/reducers/FavouritesReducer/FavouritesReducer.types";
import {URLs} from "src/utils/constants";
import {GetFavourites} from "src/actions/FavouritesAction/FavouritesAction";
import styled from "styled-components";
import EmptyCard from 'src/components/shared/other/emptyCard';

const ButtonContainer = styled.div`
  display: flex;
  margin: 40px 0 0 0;
  & .mobile{}
`;
const ButtonShowProducts = styled(ButtonBlue)`
  width: 260px;
  & .mobile{}
`;
const Favourites = () => {
    const Favourites = useTypedSelector((store) => store.Favourites);
    const {products, isFetching, error} = Favourites as IStateFavourites;
    const dispatch = useDispatch();
    const stableDispatch = useCallback(dispatch, []);
    useEffect(() => {
        stableDispatch(GetFavourites());
    }, []);
    return (
        products.length ?
            <TabContent><ProductsList products={products} buttons={true}></ProductsList></TabContent>
            :
            <TabContent>
                <EmptyCard />
                <ButtonContainer>
                    <ButtonShowProducts  func={() => window.open(URLs.CATALOG, '_self')}>Посмотреть товары</ButtonShowProducts>
                </ButtonContainer>
            </TabContent>
    );
};

export default Favourites;