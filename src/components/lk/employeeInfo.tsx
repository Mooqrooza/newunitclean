import React from "react";
import {useDispatch} from "react-redux";
import {PatchEmployee} from "src/actions/EmployeeAction/EmployeeAction";
import {LogoutUser} from "src/actions/AuthAction/AuthAction";
import {EditRows, EditRow} from "components/shared/info/editRow";
import {EmployeeType} from "src/utils/types";
import styled from "styled-components";
import {DIV_BUTTON_BLUE_STYLE, DIV_BUTTON_SOFT_BLUE_STYLE} from "components/shared/forms/primitives/DIV_BUTTON";
import {icons} from "src/utils/icons";
import {GetTable, Table} from "components/excel/table";
import {useTypedSelector} from "src/store/configureStore";
import {IStateEmployee} from "src/reducers/EmployeeReducer/EmployeeReducer.types";
import {IStateCompany} from "src/reducers/CompanyReducer/CompanyReducer.types";
import {URLs} from "src/utils/constants";

const EmployeeInfoContainer = styled.section`
  .mobile & {}
`;
const EditRowsStyled = styled(EditRows)<{ children: any }>`
  background: url(${icons.userIcon}) no-repeat;
  background-color: ${({theme}) => theme.colors.grayC};
  background-position: 50px center;
  .mobile & {}
`;
const ButtonLogOut = styled(DIV_BUTTON_SOFT_BLUE_STYLE)`
  margin: 20px 0 0 0;
  min-width: 220px;
`;
const EditRowsWrapper = styled.div<{ children: any }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justyfy-content: center;
  flex-wrap: wrap;
  gap: 20px;
`;
const ButtonContainer = styled.div`
   display: flex;
   gap: 20px;
   margin: 40px 0 0 0;
  .mobile & {}
`;
const Button = styled(DIV_BUTTON_BLUE_STYLE)<{ children?: any }>`
   min-width: 220px;
  .mobile & {}
`;
export const EmployeeInfo = (props: {employee: EmployeeType}) => {
    const dispatch = useDispatch();
    const Employee = useTypedSelector((store) => store.Employee);
    const {employee} = Employee as IStateEmployee;
    const Company = useTypedSelector((store) => store.Company);
    const {error} = Company as IStateCompany;
    const logout = () => { LogoutUser(dispatch); }
    const toCompany = () => { window.open(URLs.COMPANY_LK, '_self'); }
    const downloadPriceList = () => { GetTable(); }
    return (
        <EmployeeInfoContainer>
            <EditRowsStyled>    
                <EditRowsWrapper>
                    <EditRow title={'ФИО'} save={(val) => PatchEmployee({full_name: val})(dispatch)} value={props.employee.full_name}></EditRow>
                    <EditRow title={'E-mail'} value={props.employee.email} nonEditable={true}></EditRow>
                    <EditRow save={(val) => PatchEmployee({phone_number: val})(dispatch)} title={'Телефон'} value={props.employee.phone_number}></EditRow>
                    <EditRow save={(val) => PatchEmployee({address: val})(dispatch)} title={'Адрес'} value={props.employee.address}></EditRow>
                    {/* !props.employee.verified ? <LabelInfo text={'Ваши данные еще не верефицированы'} type={'redAlert'} css={'width: 100%;'}/> : null */}
                </EditRowsWrapper>
                <ButtonLogOut icon={icons.logoutIcon} onClick={logout}>Выход</ButtonLogOut>
            </EditRowsStyled>
            { (!employee.is_staff && error) ? null :
                <ButtonContainer>
                    { employee.is_staff ? <Button onClick={downloadPriceList}>Скачать прайс-лист</Button> : null }
                    { !error ? <Button onClick={toCompany}>Личный кабинет компании</Button> : null }
                </ButtonContainer>
            }
        </EmployeeInfoContainer>
    );
};