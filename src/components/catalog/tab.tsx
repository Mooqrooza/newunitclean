import React from 'react';
import TabContent from "components/shared/tabsMenu/tabContent";
import ProductsList from "components/shared/productsList";
import {ProductType} from "src/utils/types";
import styled from "styled-components";
import EmptyCard from 'src/components/shared/other/emptyCard';

const Title = styled.h2`
  padding: 0;
  margin: 0;
  line-height: 1em;
  text-align: left;
  color: ${({ theme }) => theme.colors.black};
  font-weight: ${({ theme }) => theme.font.weight[500]};
  font-size: ${({ theme }) => theme.font.size[32]}; 
  .mobile & {}
`;
const TabContentContainer = styled.h2`
  margin: 0 0 60px 0;
`;
const Empty = styled(EmptyCard)`
  align-self: start;
  min-width: 300px;
`;
const Tab = (props: {title: string; products: ProductType[]}) => {
    return (
        props.products.length ?
            <TabContentContainer>
                <TabContent>
                    <Title>{props.title}</Title>
                    <ProductsList products={props.products}></ProductsList>
                </TabContent>
            </TabContentContainer>
            :
            <TabContentContainer>
                <TabContent>
                    <Title>{props.title}</Title>
                    <Empty />
                </TabContent>
            </TabContentContainer>
    );
};

export default Tab;