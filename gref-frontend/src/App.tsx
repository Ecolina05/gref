import { OPTIONS_MENU } from './types';
import Button from './components/button/button';
import './styles/globals.scss';

const App = () => {
  const OPTIONS: OPTIONS_MENU[] = [
    {
      name: 'Countries',
      href: '',
    },
    {
      name: 'Users',
      href: '',
    },
  ];

  return (
    <main>
      <header className='flex-center flex-col'>
        <h1 className='text-4xl'>Gref</h1>
        <h2 className='text-lg'>System Admin</h2>
      </header>

      <section className='flex-center flex-col'>
        <img
          src='/select.svg'
          alt='select-img'
          width={300}
          className='mt-10'
        />

        <h3 className='text-lg mt-40'>Select an option.</h3>
        <div className='flex gap-10 mt-5'>
          {OPTIONS.map((option: OPTIONS_MENU, index: number) => (
            <Button
              key={`button-menu-${index}`}
              name={option.name}
              href=''
            />
          ))}
        </div>
      </section>
    </main>
  );
};

export default App;
