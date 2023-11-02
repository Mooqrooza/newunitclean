import React, {useCallback, useEffect} from 'react';
import Content from "components/template/content";
import Registration from "components/lk/registration";
import BuyHistory from "components/lk/buyHistory";
import {useDispatch} from "react-redux";
import styled from "styled-components";
import {EmployeeInfo} from "components/lk/employeeInfo";
import {URLs} from "src/utils/constants";
import {GetCompany} from "src/actions/CompanyAction/CompanyAction";
import {useTypedSelector} from "src/store/configureStore";
import {IStateCompany} from "src/reducers/CompanyReducer/CompanyReducer.types";
import {GetTable} from "components/excel/table";
import {IStateEmployee} from "src/reducers/EmployeeReducer/EmployeeReducer.types";
import {GetEmployee} from "src/actions/EmployeeAction/EmployeeAction";
import {SectionLabel} from 'components/shared/fonts/specialFonts';
import Feedback from "components/main/feedback";


const EmployeeAndCompanyContainer = styled.section`
`;
const EmployeeTitleContainer = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`;
const RegistrationContainer = styled.section`
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
    const toCompany = () => { window.open(URLs.COMPANY_LK, '_self'); }
    const downloadPriceList = () => { GetTable(); }
    return (
        <Content>
            <EmployeeAndCompanyContainer>
                <EmployeeTitleContainer>
                    <SectionLabel>Личный кабинет</SectionLabel>
                </EmployeeTitleContainer>
                <EmployeeInfo employee={employee}></EmployeeInfo>
                { error ? 
                    <RegistrationContainer>
                        <SectionLabel>Регистрация компании</SectionLabel>
                        <Registration /> 
                    </RegistrationContainer>
                    : null 
                }
            </EmployeeAndCompanyContainer>
            <BuyHistory></BuyHistory>
            <Feedback />
        </Content>
    );
};

export default Lk;