import Content from '@app/components/Content';
import Profile from '@app/components/Profile';
import Description from '@app/components/Description';

const Home: React.FC = () => (
  <Content title="Homepage">
    <Profile />
    <Description />
  </Content>
);

export default Home;
