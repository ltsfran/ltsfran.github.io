import styled from '@emotion/styled';

interface Props {
  margin?: string;
}

const Paragraph = styled.p<Props>`
  text-align: justify;
  text-indent: 1em;
  margin: ${({ margin }) => margin && margin};
`;

export default Paragraph;
