import React from 'react';
import {Product, ProductWithButtons} from "./product";
import styled from "styled-components";
import {ProductType} from "src/utils/types";


const Main = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: start;
  gap: 30px;
  .mobile & {}
`;
const ProductsList = (props: {products: ProductType[], buttons?: boolean, current_size?: boolean}) => {
    return ( !props.buttons ?
        <Main className={'show-buttons'}>
            { props.products.map((product, i) => <ProductWithButtons key={i} data={product} current_size={props.current_size}></ProductWithButtons>) }
        </Main>
        :
        <Main>
            { props.products.map((product, i) => <Product key={i} data={product} current_size={props.current_size}></Product>) }
        </Main>
    );
};

export default ProductsList;