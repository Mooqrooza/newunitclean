import styled, {css} from "styled-components";

export const DefaultHStyle = css`
  padding: 22px;
  min-height: 34px;
  margin: 0;
  color: ${({ theme }) => theme.colors.blue};
  font-size: ${({ theme }) => theme.font.size[32]};
  font-weight: ${({ theme }) => theme.font.weight[500]};
  .mobile & {}
`;
export const H1 = styled.h1`
  margin: 0;
  line-height: 1em;
  text-align: left;
  color: ${({ theme }) => theme.colors.black};
  font-size: ${({ theme }) => theme.font.size[80]};
  .mobile & {}
`;

export const H2 = styled.h2`
  padding: 50px 0;
  margin: 0;
  color: ${({ theme }) => theme.font.color.black};
  font-size: ${({ theme }) => theme.font.size[28]};
  font-weight: ${({ theme }) => theme.font.weight[900]};
  .mobile & {}
`;
export const H3 = styled.h2`
  padding: 0;
  margin: 0;
  color: ${({ theme }) => theme.colors.blue};
  font-size: ${({ theme }) => theme.font.size[32]};
  font-weight: ${({ theme }) => theme.font.weight[500]};
  .mobile & {}
`;


export const H1Main = styled.h1`
  margin: 0;
  line-height: 1em;
  text-align: left;
  color: ${({ theme }) => theme.colors.black};
  font-size: ${({ theme }) => theme.font.size[80]};
  .mobile & {}
`;
export const FormHeader = styled.div`${DefaultHStyle};`;
export const FormText = styled.div`
  font-size: ${({ theme }) => theme.font.size[28]};
  font-weight: ${({ theme }) => theme.font.weight[400]};
  color: ${({ theme }) => theme.font.color.black};
  .mobile & {}
`;