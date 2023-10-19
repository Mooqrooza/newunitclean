import React from 'react';
import {H1Main} from "components/shared/fonts/specialFonts";
import { LabelInfoGroup } from "components/shared/forms/labelInfo";
import {DIV_BUTTON_BLUE_STYLE} from "components/shared/forms/primitives/DIV_BUTTON";
import styled from "styled-components";
import mainImage from "src/images/car-illustration-1.png";

const Text = styled.div`
  font-size: ${({ theme }) => theme.font.size[13]};
  font-weight: ${({ theme }) => theme.font.weight[400]};
  color: ${({ theme }) => theme.font.color.black};
  text-align: left;
  user-select: text;
`;
const Point = styled.p`
  text-indent: 4em;
  margin: 4px 0;
`;
const Main = styled.div`
   position: relative;
   width: 100%;
   height: 600px;
   border-radius: 80px;
   background: ${({ theme }) => theme.gradients.softBlueGradient};
  
   .mobile & {

   }
`;
const TextContainer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  width: 50%;
  height: 100%;
  padding: 0 0 0 5%;
`;
const Maintext = styled(H1Main)`
  margin: 0 0 20px 0;
`;
const Button = styled(DIV_BUTTON_BLUE_STYLE)` margin: 40px 0 0 0; min-width: 220px;`;
const ImageContainer = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 80px;
  overflow: hidden;
`;
const Image = styled.img`
  position: absolute;
  top: 0;
  margin: -10% 0 0 0;
  right: -10%;
  width: 70%;

  .mobile & {
    width: 100%;
    margin: 0 0 30px 0;
    float: none;
  }
`;
const labelInfo = [
  {text: 'Автошампуни'},
  {text: 'Очистители'},
  {text: 'Полироли'}
]
const About = () => {

    return (     
        <div>
            <Text>
                <p>
                    Компания "Инвест" – производитель автохимии, автокосметики и средств для клининга. Представлена на российском рынке более пяти лет. Производит продукцию как под собственным брендом UNIT CLEAN, так и под другими торговыми марками по заказу клиентов. Поставляет продукцию в разные регионы России, а также в некоторые страны СНГ.
                </p>
                <p>
                    В линейке продуктов присутствуют автошампуни для бесконтактной и ручной мойки, сопутствующие средства по уходу за автомобилем и средства для клининга, как для бытового, так и для промышленного использования. В основе рецептур представлены компоненты как мировых лидеров в области химии, так и российских производителей.
                </p>
                <p>
                    Комплексный подход в решении задач клиента – наш главный приоритет в работе над качеством продукциии расширением ассортимента.
                </p>
                <p>
                    Наличие собственного производства и базы для тестирования продукции в разных регионах, многолетние устойчивые связи с производителями и поставщиками сырья, сотрудничество с высокопрофессиональными опытными технологами, позволяют:
                </p>
                <Point>
                    - в короткие сроки реализовывать собственные инновационные решения в разработке и производстве автохимии, автокосметики и средств для клининга;
                </Point>
                <Point>
                    - оперативно решать задачи клиентов и предоставлять максимально выгодные условия;
                </Point>
                <Point>
                    - поддерживать неизменно высокое качество продукции.
                </Point>
            </Text>
        </div>
    );
};

export default About;