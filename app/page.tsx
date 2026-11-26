import { SITE } from "@app/constants";

const HomePage: React.FC = () => {
  return (
    <main className="flex flex-1 flex-col items-center justify-center gap-2 p-4 text-center">
      <h1 className="font-serif text-5xl font-light">{SITE.name}</h1>
      <p className="text-muted">Site hazırlanıyor.</p>
    </main>
  );
};

export default HomePage;
