import React, {useCallback} from 'react';
import {icons} from "src/utils/icons";
import styled from "styled-components";
import {ProductType} from "src/utils/types";
import {BASE_URL, URLs} from "src/utils/constants";
import {ApiMethod} from "src/api/APIMethod";
import {useDispatch, useSelector} from "react-redux";
import {useTypedSelector} from "src/store/configureStore";
import {IStateFavourites} from "src/reducers/FavouritesReducer/FavouritesReducer.types";
import {GetCart} from "src/actions/CartAction/CartAction";
import {GetFavourites} from "src/actions/FavouritesAction/FavouritesAction";
import {showMoneySum} from "src/utils/functions";

const Main = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 10px;
  width: 330px;
  min-height: 280px;
  text-decoration: none;
  text-align: left;
  &:hover {}
  .mobile .show-buttons & {}
`;
const ImageContainer = styled.a`
   display: flex;
   align-items: center;
   justify-content: center;
   width: 100%;
   height: 237px;
   padding: 30px;
   border-radius: 30px;
   box-sizing: border-box;
   transition: box-shadow 0.25s ease-in-out;
   background: ${({ theme }) => theme.colors.grayB};
   &:hover{
     box-shadow: ${({theme}) => theme.shadows.shadowA};
   }
   .mobile {}
`;
const Image = styled.div<{src: string}>`
  width: 100%; 
  height: 100%;
  background-image: url(${props => props.src});
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  .mobile {}
`;
const Tools = styled.div`
   display: flex;
   width: 100%;
   height: 34px;
   gap: 10px;
   border-radius: 17px;
   background: ${({ theme }) => theme.gradients.grayB} ;
`;
const Favourite = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 34px;
  height: 34px;
  border-radius: 17px;
  background: ${({ theme }) => theme.colors.grayB};
  cursor: pointer;
  .mobile & {}
`;
const AddRemoveButtonContainer =  styled.div`
  display: flex;
  flex: 1;
  width: 100%;
  height: 34px;
  border-radius: 17px;
  background: ${({ theme }) => theme.colors.grayB};
  .mobile & {}
`;
const CountText = styled.div`
   display: flex;
   flex: 1;
   justify-content: center;
   align-items: center;
   font-size: ${({ theme }) => theme.font.size[18]};
   font-weight: ${({ theme }) => theme.font.weight[500]};
   color: ${({ theme }) => theme.colors.blue};
   .mobile & {}
`;
const AddRemoveButton = styled.div`
  width: 50px;
  height: 34px; 
  background-color: ${({ theme }) => theme.colors.blue};
  background-position: center;
  background-repeat: no-repeat;
  cursor: pointer;
  .mobile & {}
`;
const AddButton = styled(AddRemoveButton)`
  background-image: url(${icons.plusIco});
  border-radius: 0 17px 17px 0;
`;
const RemoveButton = styled(AddRemoveButton)`
  background-image: url(${icons.closeDeleteIco});
  border-radius: 17px 0 0 17px;
`;
const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  .mobile .show-buttons & {}
`;
const Title = styled.a`
  font-size: ${({ theme }) => theme.font.size[20]};
  font-weight: ${({ theme }) => theme.font.weight[500]};
  color: ${({ theme }) => theme.colors.black};
  text-decoration: none;
  text-align: left;
  overflow: hidden;
  text-overflow: ellipsis;
  .mobile .show-buttons & {}
`;
const Description = styled.div`
  position: relative;
  height: 60px;
  font-size: ${({ theme }) => theme.font.size[14]};
  font-weight: ${({ theme }) => theme.font.weight[500]};
  color: ${({ theme }) => theme.colors.gray};
  text-overflow: ellipsis;
  overflow: hidden;

  ::after {
     content: "";
     position: absolute;
     width: 100%;
     height: 50px;
     left: 0;
     bottom: 0;
     background: ${({ theme }) => theme.gradients.whiteGradient};
  }
  .mobile .show-buttons & {}
`;
const Price = styled.div`
  display: flex;
  align-items: center;
  justify-content: left;
  font-size: ${({ theme }) => theme.font.size[16]};
  font-weight: ${({ theme }) => theme.font.weight[700]};
  color: ${({ theme }) => theme.colors.black};
  
  .mobile .show-buttons & {
    justify-content: start;
  }
`;
const StarImg = styled.div` 
  position: absolute;
  top: 20px;
  left: 20px;
  width: 24px;
  height: 24px;
  background: url(${icons.heartIco2}) center no-repeat;
  z-index: 1;
`;
const FavouriteButton = (props: {onClick?: any, imageUrl?: string}) => {
   return <Favourite onClick={props.onClick}><img src={props.imageUrl || ''} /></Favourite>;
} 
const Star = (props: {children: string}) => { 
    return <StarImg>{props.children}</StarImg> 
}
export const ProductTools = (props: {data: ProductType; onlyFavourite?: boolean, current_size?: boolean}) => {
    const Favourites = useTypedSelector((store) => store.Favourites);
    const {products} = Favourites as IStateFavourites;
    const dispatch = useDispatch();
    const DeleteFromCart = () => {
        ApiMethod({
            func: 'patch',
            data: {
                product_id: props.data.id,
                product_size: props.data.product_order_size_id,
                decrease_amount: true
            },
            url: '/product/api/v2/order/add_product/',
            auth: true
        }).then(success => { GetCart()(dispatch); });
    }
    const AddToCart = () => {
        ApiMethod({
            func: 'patch',
            data: {
                product_id: props.data.id,
                product_size: props.data.product_order_size_id
            },
            url: '/product/api/v2/order/add_product/',
            auth: true
        }).then(success => { GetCart()(dispatch); });
    }
    const IsFavourite = () => {
        return !!products.find(product => product.id == props.data.id);
    }
    const MarkAsFavourite = () => {
        if (IsFavourite()) {
            ApiMethod({
                func: 'delete',
                url: '/product/api/v2/favorite_products/' + props.data.id + '/',
                data: {product_id: props.data.id},
                auth: true
            }).then(success => GetFavourites()(dispatch))
        }
        else {
            ApiMethod({
                func: 'post',
                url: '/product/api/v2/favorite_products/' + props.data.id + '/',
                auth: true
            }).then(success => GetFavourites()(dispatch))
        }
    }
    const size = props.data.product_order_size;
    const count = props.data.amount_of_product;
    const countAndSizeInfo = size ? (count ? (size+' x '+count) : size) : count ? (count+' шт.') : '';
    const imagePath = IsFavourite() ? icons.heartIco2 : icons.heartIco1;
    return (props.data.product_order_size ?  
        <Tools>
            <FavouriteButton onClick={MarkAsFavourite} imageUrl={imagePath} />
            <AddRemoveButtonContainer>
                <CountText>{countAndSizeInfo}</CountText>
                <RemoveButton onClick={DeleteFromCart}></RemoveButton>
                <AddButton onClick={AddToCart}></AddButton>
            </AddRemoveButtonContainer>
        </Tools> : null
    );
}
const ProductContent = (props: {data: ProductType; noStar?: boolean, onlyFavourite?: boolean, current_size?: boolean, tools: boolean}) => {
  const hidePrice: boolean = useSelector((store: any) => store.Settings.hidePrice);
  const productPath = URLs.PRODUCT.replace(':id', '' + props.data.id);
  const imagePath = props.data.image && props.data.image.length ? (BASE_URL + props.data.image[0]) : '';
  return (
      <Main >
          { (props.data.discount && !props.noStar) ? <Star>{props.data.discount}</Star> : null }
          <ImageContainer href={productPath} ><Image src={imagePath} /></ImageContainer>
          { props.tools ? <ProductTools data={props.data} onlyFavourite={props.onlyFavourite} current_size={props.current_size} /> : null }
          <Info>
              <Title href={productPath}>{props.data.title}</Title>
              <Description>{props.data.description}</Description>
              {hidePrice ? null : (props.data.order_size_price && props.current_size) ?
                  <Price>{showMoneySum(props.data.order_size_price *(props.data.amount_of_product ? props.data.amount_of_product : 1))} ₽</Price>
                  : props.data.price ?
                  <Price>от {showMoneySum(props.data.price * (props.data.amount_of_product ? props.data.amount_of_product : 1))} ₽</Price> : null
              }
          </Info>
      </Main>
  );
}
export const ProductWithButtons = (props: {data: ProductType; onlyFavourite?: boolean, current_size?: boolean}) => {
    return <ProductContent data={props.data} onlyFavourite={props.onlyFavourite} current_size={props.current_size || false} tools={true} />
}
export const Product = (props: {data: ProductType; noStar?: boolean, current_size?: boolean, tools?: any}) => {
  return <ProductContent data={props.data} current_size={props.current_size || false} tools={false} />
}