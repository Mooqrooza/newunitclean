import React from 'react';
import styled from "styled-components";

const InfoRowContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  gap: 10px;
  margin: 0 0 10px 0;
`;
const Title = styled.div`
  text-align: left;
  font-size: ${({ theme }) => theme.font.size[20]};
  font-weight: ${({ theme }) => theme.font.weight[600]};
  color: ${({ theme }) => theme.colors.black};
  .mobile & {}
`;
const Info = styled.div`
  text-align: left;
  font-size: ${({ theme }) => theme.font.size[16]};
  font-weight: ${({ theme }) => theme.font.weight[400]};
  color: ${({ theme }) => theme.colors.black};
  .mobile & {}
`;
const InfoRow = (props: {children: any; title?: string}) => {
    return (
        <InfoRowContainer>
            {props.title ? <Title>{props.title}:</Title> : null}
            <Info>{props.children}</Info>
        </InfoRowContainer>
    );
};

export default InfoRow;