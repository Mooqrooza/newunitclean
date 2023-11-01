import React from "react";
import {useDispatch} from "react-redux";
import {PatchEmployee} from "src/actions/EmployeeAction/EmployeeAction";
import {icons} from "src/utils/icons";
import {EditRows, EditRow} from "components/shared/info/editRow";
import {EmployeeType} from "src/utils/types";
import styled from "styled-components";

const EmployeeInfoContainer = styled.section`
  .mobile & {}
`;
const EditRowsStyled = styled(EditRows)<{ children: any }>`
  background: url(${icons.userIcon}) no-repeat;
  background-color: ${({theme}) => theme.colors.grayC};
  background-position: 50px center;
  .mobile & {}
`;
export const EmployeeInfo = (props: {employee: EmployeeType}) => {
    const dispatch = useDispatch();
    return (
        <EmployeeInfoContainer>
            {/* <InfoPhotoContainer><InfoPhoto src={props.employee.avatar ? props.employee.avatar : icons.avatar} /></InfoPhotoContainer> */}
            <EditRowsStyled>
                <EditRow title={'ФИО'} save={(val) => PatchEmployee({full_name: val})(dispatch)} value={props.employee.full_name}></EditRow>
                <EditRow title={'E-mail'} value={props.employee.email} nonEditable={true}></EditRow>
                <EditRow save={(val) => PatchEmployee({phone_number: val})(dispatch)} title={'Телефон'} value={props.employee.phone_number}></EditRow>
                <EditRow save={(val) => PatchEmployee({address: val})(dispatch)} title={'Адрес'} value={props.employee.address}></EditRow>
            </EditRowsStyled>
        </EmployeeInfoContainer>
    );
};