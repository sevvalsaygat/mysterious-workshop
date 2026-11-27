import { Home } from "@app/containers";

const HomePage: React.FC = () => {
  return (
    <>
      <Home.Hero />
      <Home.Intro />
      <Home.Workshops />
      <Home.Collection />
      <Home.Studio />
      <Home.Closing />
    </>
  );
};

export default HomePage;
