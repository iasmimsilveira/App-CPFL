import styled from 'styled-components/native';

export const ButtonDefault = styled.TouchableHighlight`
  width: ${({ width }) => width || 'auto'};
  background-color: ${({ bgcolor }) => bgcolor || '#43B3DD'};
  padding: 10px 20px;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
`;
