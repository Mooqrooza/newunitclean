import React, {useCallback, useEffect} from 'react';

import {H1} from "components/shared/fonts/specialFonts";
import Content from "components/template/content";
import Registration from "components/lk/registration";
import BuyHistory from "components/lk/buyHistory";
import {LogoutUser} from "src/actions/AuthAction/AuthAction";
import {useDispatch} from "react-redux";
import styled from "styled-components";
import {icons} from "src/utils/icons";
import {EmployeeInfo} from "components/lk/employeeInfo";
import {URLs} from "src/utils/constants";
import ButtonBlue from "components/shared/forms/buttonBlue";
import {DIV_BUTTON_SOFT_BLUE_STYLE} from "components/shared/forms/primitives/DIV_BUTTON";
import {GetCompany} from "src/actions/CompanyAction/CompanyAction";
import {useTypedSelector} from "src/store/configureStore";
import {IStateCompany} from "src/reducers/CompanyReducer/CompanyReducer.types";
import {GetTable, Table} from "components/excel/table";
import {IStateEmployee} from "src/reducers/EmployeeReducer/EmployeeReducer.types";
import {GetEmployee} from "src/actions/EmployeeAction/EmployeeAction";
import {SectionLabel} from 'components/shared/fonts/specialFonts';

const EmployeeAndCompanyContainer = styled.section`
`;
const EmployeeTitleContainer = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`;
const ButtonLogout = styled.img`
  width: 30px;
  filter: drop-shadow(0px 4px 4px rgba(0,0,0,0.25));
  cursor: pointer;
  
  &:hover {
    filter: drop-shadow(0px 4px 4px rgba(0,0,0,0.4));
  }
`;
const EmployeeButtonsContainer = styled.div`
  padding: 58px 0 0 0;
  display: grid;
  justify-content: right;
  grid-auto-flow: column;
  grid-gap: 20px; gap: 20px;
  
  .mobile & {
    justify-content: stretch;
    padding: 0;
    grid-auto-flow: row;
  }
`;
const ButtonCompany = styled(DIV_BUTTON_SOFT_BLUE_STYLE)`
  width: min-content;
  
  .mobile & {
    width: 100%;
  }
`;
const Lk = () => {
    const Employee = useTypedSelector((store) => store.Employee);
    const {employee} = Employee as IStateEmployee;
    const Company = useTypedSelector((store) => store.Company);
    const {error} = Company as IStateCompany;
    const dispatch = useDispatch();
    useEffect(() => {
        GetEmployee()(dispatch);
        GetCompany()(dispatch);
    }, []);
    const logout = () => {
        LogoutUser(dispatch);
    }
    const toCompany = () => {
        window.open(URLs.COMPANY_LK, '_self');
    }
    const downloadPriceList = () => {
        GetTable();
    }
    return (
        <Content>
            <EmployeeAndCompanyContainer>
                <EmployeeTitleContainer>
                    <SectionLabel>Личный кабинет</SectionLabel>
                    <ButtonLogout src={icons.exit} onClick={logout} />
                </EmployeeTitleContainer>
                <EmployeeInfo employee={employee}></EmployeeInfo>
                { (!employee.is_staff && error) ? null :
                    <EmployeeButtonsContainer>
                        { employee.is_staff ? <ButtonBlue styled={ButtonCompany} func={downloadPriceList}>Скачать прайс-лист</ButtonBlue> : null }
                        { !error ? <ButtonBlue styled={ButtonCompany} func={toCompany}>Личный кабинет компании</ButtonBlue> : null }
                    </EmployeeButtonsContainer>
                }
                { error ? <Registration /> : null }
            </EmployeeAndCompanyContainer>
            <BuyHistory></BuyHistory>
        </Content>
    );
};

export default Lk;