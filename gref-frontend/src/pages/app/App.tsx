import { useNavigate } from 'react-router-dom';
import type { OptionMenu } from '../../types';

import Button from '../../components/button/button';

const App = () => {
  const OPTIONS: OptionMenu[] = [
    {
      name: 'Countries',
      href: '/countries',
    },
    {
      name: 'Users',
      href: '/users',
    },
  ];
  const navigate = useNavigate();

  return (
    <main>
      <header className="flex-center flex-col">
        <h1 className="text-4xl">Gref</h1>
        <h2 className="text-lg">User Admin</h2>
      </header>

      <section className="flex-center flex-col">
        <img src="/select.svg" alt="select-img" width={200} className="mt-10" />

        <h3 className="text-lg mt-20">Select an option:</h3>
        <div className="flex gap-10 mt-5">
          {OPTIONS.map((option: OptionMenu, index: number) => (
            <Button
              key={`button-menu-${index}`}
              name={option.name}
              onClick={() => navigate(option.href)}
            />
          ))}
        </div>
      </section>
    </main>
  );
};

export default App;
