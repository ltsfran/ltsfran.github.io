import { Styled } from './styled';

interface Props {
  mode?: 'light' | 'dark';
}

export const Header: React.FC<Props> = ({ mode }) => {
  return (
    <Styled>Header</Styled>
  );
};

Header.displayName = 'Header';
