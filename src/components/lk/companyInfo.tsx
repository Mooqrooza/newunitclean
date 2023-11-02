import React, {useCallback, useEffect} from "react";
import {useTypedSelector} from "src/store/configureStore";
import {useDispatch} from "react-redux";
import {EditRow, EditRows} from "components/shared/info/editRow";
import {IStateCompany} from "src/reducers/CompanyReducer/CompanyReducer.types";
import styled from "styled-components";
import {GetCompany, PatchCompany} from "src/actions/CompanyAction/CompanyAction";
import {icons} from "src/utils/icons";
import {DIV_BUTTON_BLUE_STYLE} from "components/shared/forms/primitives/DIV_BUTTON";
import {URLs} from "src/utils/constants";

const CompanyInfoContainer = styled.section`
  .mobile & {}
`;
const EditRowsStyled = styled(EditRows)<{ children: any }>`
  background: url(${icons.companyIcon}) no-repeat;
  background-color: ${({theme}) => theme.colors.grayC};
  background-position: 50px center;
  .mobile & {}
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
   margin: 40px 0 0 0;
  .mobile & {}
`;
const Button = styled(DIV_BUTTON_BLUE_STYLE)<{ children?: any }>`
   min-width: 220px;
  .mobile & {}
`;
export const CompanyInfo = () => {
    const Company = useTypedSelector((store) => store.Company);
    const {company} = Company as IStateCompany;
    const dispatch = useDispatch();
    const stableDispatch = useCallback(dispatch, []);
    const toLk = () => { window.open(URLs.LK, '_self');}
    useEffect(() => {
        stableDispatch(GetCompany());
    }, []);
    return (
        <CompanyInfoContainer>
            <EditRowsStyled>
                <EditRowsWrapper>
                    <EditRow save={(val) => stableDispatch(PatchCompany({title: val}))} title={'Название'} value={company.title}></EditRow>
                    <EditRow save={(val) => stableDispatch(PatchCompany({phone_number: val}))} title={'Телефон'} value={company.phone_number}></EditRow>
                    <EditRow save={(val) => stableDispatch(PatchCompany({official_address: val}))} title={'Юр. адрес'} value={company.official_address}></EditRow>
                    <EditRow save={(val) => stableDispatch(PatchCompany({inn: val}))} title={'ИНН'} value={company.inn}></EditRow>
                    <EditRow save={(val) => stableDispatch(PatchCompany({kpp: val}))} title={'КПП'} value={company.kpp}></EditRow>
                </EditRowsWrapper>
            </EditRowsStyled>
            <ButtonContainer>
                <Button onClick={toLk}>Личный кабинет</Button>
            </ButtonContainer>
        </CompanyInfoContainer>
    );
};