import { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { Header } from '@app/features';

const Home: React.FC = () => {
  const themeContext = useContext(ThemeContext) as any;
  const mode = themeContext.mode;

  return (
    <Header mode={mode} />
  );
};

export default Home;
