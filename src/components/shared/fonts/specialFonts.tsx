import styled, {css} from "styled-components";

export const DefaultHStyle = css`
  padding: 0;
  margin: 0;
  line-height: 1em;
  text-align: left;
  color: ${({ theme }) => theme.colors.black};
  font-weight: ${({ theme }) => theme.font.weight[500]};
  font-size: ${({ theme }) => theme.font.size[80]};
  .mobile & {}
`;
export const H1 = styled.h1`
  ${DefaultHStyle}
`;
export const H2 = styled.h2`
  ${DefaultHStyle}
  font-size: ${({ theme }) => theme.font.size[28]};
  font-weight: ${({ theme }) => theme.font.weight[900]};
  .mobile & {}
`;
export const H3 = styled.h3`
  ${DefaultHStyle}
  font-size: ${({ theme }) => theme.font.size[32]};
  .mobile & {}
`;
export const H1Main = styled.h1`
  ${DefaultHStyle}
  min-height: 34px;
  font-size: ${({ theme }) => theme.font.size[80]};
  .mobile & {}
`; 
export const SectionLabel = styled.div`
  ${DefaultHStyle}
  margin: 0 0 60px 0;
  font-size: ${({ theme }) => theme.font.size[32]};
  text-transform: uppercase;
`;
export const FormHeader = styled.div`
  ${DefaultHStyle};
  text-align: center;
  font-size: ${({ theme }) => theme.font.size[32]};
  color: ${({ theme }) => theme.colors.blue};
  padding: 20px 0;
  box-sizing: border-box;
  max-width: 100%;
  @media (max-width: 380px) {
    
  }
`;
export const FormText = styled.div`
  ${DefaultHStyle}
  font-size: ${({ theme }) => theme.font.size[28]};
  font-weight: ${({ theme }) => theme.font.weight[400]};
  .mobile & {}
`;