import React, {useState, useCallback} from 'react';
import * as constants from "src/utils/constants";
import {IStateAuth} from "src/reducers/AuthReducer/AuthReducer.types";
import styled from "styled-components";
import {InputText} from "components/shared/forms/inputText";
import {URLs} from "src/utils/constants";
import logoImage from "src/images/logo-grayscale-1.svg";
import {useTypedSelector} from "src/store/configureStore";
import {useDispatch} from "react-redux";
import {WindowsManagerOpen} from "src/actions/WindowsManagerAction/WindowsManagerAction";
import {WINDOW_AUTHORIZATION} from "src/actions/WindowsManagerAction/WindowsManagerAction.types";

const FooterContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 100px 30px 90px 30px; 
  box-view: border-box;
  background: ${({ theme }) => theme.colors.whiteGrayBlue};
  @media (max-width: 600px) {
    padding: 80px 30px 50px 30px; 
  }
  .mobile & {}
`;
const Content = styled.div`
  position: relative;
  display: flex;
  align-items: start;
  justify-content: start;
  flex-wrap: wrap;
  width: 100%;
  max-width: 1410px;
  height: 100%;
  margin: 0 auto;
  @media (max-width: 1460px) {
      gap: 60px;
  }
`;
const ContentColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-contet: start;
  width: 25%;
  min-width: 300px;
  height: 100%;
  text-align: left;
  box-view: border-box;
  @media (max-width: 1460px) {
     padding: 0 10%;
  }
  @media (max-width: 1140px) {
    padding: 0;
  }
  .mobile & {}
`;
const Title = styled.div`
  margin: 0 0 30px 0;
  color: ${({ theme }) => theme.colors.blue};
  font-size: ${({ theme }) => theme.font.size[20]};
  font-weight: ${({ theme }) => theme.font.weight[500]};
  text-transform: uppercase;
`;
const Company = styled(ContentColumn)`
  gap: 10px;
  color: ${({ theme }) => theme.colors.blue};
  font-size: ${({ theme }) => theme.font.size[13]};
  font-weight: ${({ theme }) => theme.font.weight[500]};
  @media (max-width: 1460px) {
    order: 4;
  }
  div {
    width: 100%;
    max-width: 220px;
  }
  .mobile & {}
`;
const Logo = styled.div`
  width: 160px;
  height: 30px;
  margin: 0 0 10px 0;
  cursor: pointer;
  background: url("${logoImage}") no-repeat left;
  background-size: 160px 30px;
  .mobile & {}
`;
const Line = styled.div`
  width: 100%;
  height: 1px;
  background: ${({ theme }) => theme.colors.blue};
  .mobile & {}
`;
const Menu = styled(ContentColumn)`
  .mobile & {}
`;
const TextItem = styled.div`
  margin: 0 0 10px 0;
  color: ${({ theme }) => theme.colors.blackA};
  font-size: ${({ theme }) => theme.font.size[17]};
  font-weight: ${({ theme }) => theme.font.weight[400]};
  text-decoration: none;
   .mobile & {}
`;
const LinkItem = styled.a`
  margin: 0 0 10px 0;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.blackA};
  font-size: ${({ theme }) => theme.font.size[17]};
  font-weight: ${({ theme }) => theme.font.weight[400]};
  text-decoration: none;
   .mobile & {}
`;
const Contacts = styled(ContentColumn)`
  color: ${({ theme }) => theme.colors.blackA};
  font-size: ${({ theme }) => theme.font.size[17]};
  font-weight: ${({ theme }) => theme.font.weight[500]};
  text-decoration: none;
  .mobile & {}
`;
const Search = styled(ContentColumn)`
   order: 3;
  .mobile & {}
`;
const SearchFormWrapper = styled.div`
`;
const SearchForm = () => {
  const [searchInput, setSearchInput] = useState<any>(null);
  const search = (event: any) => {
      event.preventDefault();
      window.open(URLs.SEARCH_WITH_PARAM.replace(':search', searchInput.value), '_self');
  }
  return (
      <SearchFormWrapper>
          <form onSubmit={search} >
              <InputText placeholder='Поиск' setObj={setSearchInput}></InputText>
          </form>
      </SearchFormWrapper>
  )
}
const Footer = () => {
    const Auth = useTypedSelector((store) => store.Auth);
    const {isAuthorized} = Auth as IStateAuth;
    const dispatch = useDispatch();
    const stableDispatch = useCallback(dispatch, []);
    const onClickLinkItem = (url: string) => {
       if (isAuthorized) { window.open(url, '_self'); } 
       else { stableDispatch(WindowsManagerOpen(WINDOW_AUTHORIZATION, url)); }
    }
    return (
            <FooterContainer>
                <Content>
                    <Company>
                        <Logo onClick = {() => window.open(URLs.ROOT, '_self')} />
                        {constants.INFO.TITLE}
                        <Line />
                        Все права защищены  © 2023
                    </Company>
                    <Menu>
                        <Title>Навигация</Title>
                        <LinkItem href={constants.URLs.ROOT}>Главная</LinkItem>
                        <LinkItem href={constants.URLs.CATALOG}>Каталог</LinkItem>
                        <LinkItem href={constants.URLs.PROMOTION}>Акции</LinkItem>
                        {/* <LinkItem href={constants.URLs.PAYMENT}>Доставка и оплата</LinkItem> */}
                        <LinkItem href={constants.URLs.CONTACTS}>Контакты</LinkItem>
                        {/* <LinkItem onClick={() => onClickLinkItem(constants.URLs.LK)}>Личный кабинет</LinkItem> */}
                        {/* <LinkItem onClick={() => onClickLinkItem(constants.URLs.CART)}>Корзина</LinkItem> */}
                        <LinkItem href={constants.URLs.PRIVACY_POLICY}>Политика конфиденциальности</LinkItem>                        
                    </Menu>
                    <Contacts>
                        <Title>Контакты</Title>
                        <TextItem>{constants.INFO.EMAIL}</TextItem>
                        <TextItem>{constants.INFO.PHONE_NUMBER}</TextItem>
                        <TextItem>{constants.INFO.ADDRESS}</TextItem>
                    </Contacts>
                    <Search>
                        <Title>Поиск</Title>
                        <SearchForm />
                    </Search>
                </Content>
            </FooterContainer>
    );
};

export default Footer;