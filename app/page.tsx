import { Home } from "@app/containers";

const HomePage: React.FC = () => {
  return (
    <>
      <Home.Hero />
      <Home.Intro />
      <Home.Workshops />
    </>
  );
};

export default HomePage;
