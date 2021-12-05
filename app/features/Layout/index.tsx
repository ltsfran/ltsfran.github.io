import { useContext, useEffect } from 'react';
import { ThemeContext } from 'styled-components';
import { Header } from '@app/features';
import { Wrapper, Main } from './styled';

export const Layout: React.FC= ({ children }) => {
  const themeContext = useContext(ThemeContext) as any;
  const mode = themeContext.mode;

  useEffect(() => {
    const handleResize = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  });

  return (
    <Wrapper>
      <Header mode={mode} />
      <Main>{children}</Main>
      <footer>Footer</footer>
    </Wrapper>
  );
};

Layout.displayName = 'Layout';
