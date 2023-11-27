import React, {useCallback, useEffect, useState} from 'react';
import styled from "styled-components";
import {SectionLabel} from "components/shared/fonts/specialFonts";
import Product from "components/main/products/product";
import {useTypedSelector} from "src/store/configureStore";
import {IStateProductList} from "src/reducers/ProductListReducer/ProductListReducer.types";
import {IStateCategories} from "src/reducers/CategoriesReducer/CategoriesReducer.types";
import {useDispatch} from "react-redux";
import {GetProductList} from "src/actions/ProductListAction/ProductListAction";
import {GetCategories} from "src/actions/CategoriesAction/CategoriesAction";
import {DIV_BUTTON_SELECT_STYLE} from "components/shared/forms/primitives/DIV_BUTTON";
import ButtonBlue from "components/shared/forms/buttonBlue";
import {icons} from "src/utils/icons";

const ProductsContainer = styled.section`
  .mobile & {}
`;
const Content = styled.div`
  display: flex;
  gap: 30px 30px;
  flex-direction: row;
  @media (max-width: 690px) {
    flex-direction: column;
  }
  .mobile & {}
`;
const ProductsList = styled.div`
  display: flex;
  gap: 30px 30px;
  flex-wrap: wrap;
  @media (max-width: 690px) {}
  .mobile & {}
`;
const Categories = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 320px;
  align-items: center;
  min-width: 320px;
  border-radius: 40px;
  height: 100%;
  padding: 20px;
  box-sizing: border-box;
  background: ${({ theme }) => theme.colors.grayC};
  gap: 10px 10px;

  @media (max-width: 690px) {
    width: 100%;
  }
  .mobile & {}
`;
const CategoryStyle = styled(DIV_BUTTON_SELECT_STYLE)`
  padding: 15px 30px;
  @media (max-width: 690px) {
    width: 80%;
  }
  @media (max-width: 500px) {
    width: 100%;
  }
  .mobile & {}
`;
const Category = (props: {children: any; selected: number; self: number; func: (i: number) => void}) => {
    function click() { props.func(props.self); }
    return (
        <ButtonBlue 
            icon={icons.rightIco1}
            func={click} 
            className={props.selected == props.self ? 'selected' : 'unselected'} 
            styled={CategoryStyle}
        >
            {props.children}
        </ButtonBlue>);
}
const Products = () => { 
    const state = useTypedSelector((store) => store);
    const productListState = state.ProductList as IStateProductList;
    const categoriesState = state.Categories as IStateCategories;
    const dispatch = useDispatch();
    const stableDispatch = useCallback(dispatch, []);
    useEffect(() => {
        stableDispatch(GetProductList());
        stableDispatch(GetCategories());
    }, []);
    const [selected, setSelected] = useState(-1);
    if (categoriesState.categories.length && selected === -1) {
        setSelected(categoriesState.categories[0].id);
    }
    function select(i: number) { setSelected(i);}
    return (
        <ProductsContainer>
            <SectionLabel>Товары</SectionLabel>
            <Content>
                <Categories>
                    {categoriesState.categories.map((category) =>
                        <Category key={category.id} selected={selected} self={category.id} func={select}>{category.title}</Category>)}
                </Categories>
                <ProductsList>
                    { productListState.products
                      .filter(product => product.group == selected)
                      .map((product) => <Product key={product.id} data={product}></Product>)}
                </ProductsList>
            </Content>
        </ProductsContainer>
    );
};

export default Products;