import React from 'react';
import styled from "styled-components";
import {SectionLabel} from "components/shared/fonts/specialFonts";
import aboutImage from "src/images/about-image-1.jpg";

const Main = styled.section`
   .mobile & {}
`;
const Content = styled.section`
   display: flex;
   gap: 60px;
   .mobile & {}
`;
const TextContainer = styled.div`
  flex: 1;
  text-align: left;
  font-size: ${({ theme }) => theme.font.size[18]};
  font-weight: ${({ theme }) => theme.font.weight[400]};
  color: ${({ theme }) => theme.colors.black};
`;
const Text = styled.p`
  text-indent: 1em;
`
const Point = styled.p`
  text-indent: 1em;
  margin: 0;
`;
const Image = styled.div`
  width: 40%;
  border-radius: 50px;
  background: center no-repeat url("${aboutImage}");
  background-size: cover;
`;
const About = () => {

    return (     
        <Main>
            <SectionLabel>О нас</SectionLabel>
            <Content>
              <TextContainer>
                  <Text>Компания "Инвест" – производитель автохимии, автокосметики и средств для клининга. Представлена на российском рынке более пяти лет. Производит продукцию как под собственным брендом UNIT CLEAN, так и под другими торговыми марками по заказу клиентов. Поставляет продукцию в разные регионы России, а также в некоторые страны СНГ.</Text>
                  <Text>В линейке продуктов присутствуют автошампуни для бесконтактной и ручной мойки, сопутствующие средства по уходу за автомобилем и средства для клининга, как для бытового, так и для промышленного использования. В основе рецептур представлены компоненты как мировых лидеров в области химии, так и российских производителей.</Text>
                  <Text>Комплексный подход в решении задач клиента – наш главный приоритет в работе над качеством продукциии расширением ассортимента.</Text>
                  <Text>Наличие собственного производства и базы для тестирования продукции в разных регионах, многолетние устойчивые связи с производителями и поставщиками сырья, сотрудничество с высокопрофессиональными опытными технологами, позволяют:</Text>
                  <Point>- в короткие сроки реализовывать собственные инновационные решения в разработке и производстве автохимии, автокосметики и средств для клининга;</Point>
                  <Point>- оперативно решать задачи клиентов и предоставлять максимально выгодные условия;</Point>
                  <Point>- поддерживать неизменно высокое качество продукции.</Point>
              </TextContainer>
              <Image />
            </Content>
        </Main>
    );
};

export default About;