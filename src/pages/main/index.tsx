import React, {useCallback, useEffect} from 'react';
import WhyWe from "components/main/whywe/whywe";
import Content from "components/template/content";
import Greeting from "src/components/main/greeting";
import About from "components/main/about";
import Products from "components/main/products";
import Reviews from "components/main/reviews";
import {useTypedSelector} from "src/store/configureStore";
import {useDispatch} from "react-redux";
import {IStateMainPage} from "src/reducers/MainPageReducer/MainPageReducer.types";
import {GetMainPage} from "src/actions/MainPageAction/MainPageAction";
import Feedback from "components/main/feedback";

const Main = () => {
    const MainPage = useTypedSelector((store) => store.MainPage);
    const {products, isFetching, error} = MainPage as IStateMainPage;
    const dispatch = useDispatch();
    const stableDispatch = useCallback(dispatch, []);
    useEffect(() => { stableDispatch(GetMainPage()); }, []);
    return (
        <Content>
            {/* products[0] ? <Suggestion title='Успей купить!' product={products[0]} background={'#AB2B324D'}></Suggestion> : null */}
            <Greeting />
            <WhyWe />
            <About />
            <Products />
            <Reviews/>
            <Feedback />
        </Content>
    );
};

export default Main;