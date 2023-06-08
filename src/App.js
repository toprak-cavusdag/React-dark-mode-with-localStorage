import { useEffect, useState } from 'react';
import List from './components/list/List.jsx';

function App() {
  const [theme, setTheme] = useState('system');
  const element = document.documentElement;
  console.log(element);
  const options = [
    {
      icon: 'sunny',
      text: 'light',
    },

    {
      icon: 'moon',
      text: 'dark',
    },

    {
      icon: 'desktop',
      text: 'system',
    },
  ];

  useEffect(() => {
    switch (theme) {
      case 'dark':
        element.classList.add('dark');
        break;
      case 'light':
        element.classList.remove('dark');
        break;
    }
  }, [theme]);

  return (
    <section className='min-h-screen pt-8 dark:text-gray-100 dark:bg-slate-900 duration-300 flex justify-center items-center'>
      <div className='fixed top-5 flex justify-center items-center right-10 gap-2 duration-150 dark:bg-slate-800 bg bg-gray-100 rounded '>
        {options?.map((opt) => {
          return (
            <button
              className={`w-8 h-8 leading-9 text-2xl rounded-full m-1 ${
                theme === opt.text && 'text-sky-600'
              }`}
              onClick={() => setTheme(opt.text)}
              key={opt.text}
            >
              <ion-icon name={opt.icon}></ion-icon>
            </button>
          );
        })}
      </div>
      <div className='max-w-3xl mx-auto px-5'>
        <div className='text-center'>
          <h2 className='text-4xl font-bold my-2'>Code A Program</h2>
          <h5 className='text-2xl font-bold my-2'>Share And Subscribe</h5>
        </div>
        <p className='leading-8 tracking-wide'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
          pariatur reiciendis dolore. Veritatis ipsum voluptatum sit quod
          quisquam, laboriosam quae, natus error doloribus, excepturi quos?
          Deserunt fuga voluptatum ad omnis ex voluptates quis ullam, quasi
          reprehenderit dolorum error suscipit nihil temporibus laboriosam in
          praesentium doloribus labore molestias eligendi quisquam provident
          repellendus eaque culpa atque. At, aliquid! Doloribus dolore hic est
          ipsum eius nostrum natus ea sit eos ducimus odit, in aspernatur rem
          rerum magnam vero harum id aliquid vel? Mollitia beatae vel
          perspiciatis adipisci ratione veniam quibusdam earum illum quidem
          optio delectus aliquam laboriosam ducimus, expedita deleniti
          doloremque dolores omnis. Lorem ipsum, dolor sit amet consectetur
          adipisicing elit. Quod amet dicta nam quam iusto ad dignissimos
          officia quo aliquid, architecto exercitationem, molestias ducimus?
          Saepe at, qui illum ipsam voluptatem enim ex! Magnam incidunt odio sit
          obcaecati nesciunt modi voluptate architecto deleniti quae laborum,
          aut eligendi. Dolores cum voluptatibus voluptatum eum architecto
          dolorem corporis consequatur quos quo nam rerum tenetur odit,
          necessitatibus sequi dolor nobis cupiditate minus saepe sunt? Quo iste
          quos minima voluptate illo officia aperiam! Iste, assumenda omnis
          voluptatum obcaecati quis facere quo vel maiores et a praesentium
          dolorum nisi possimus enim ab natus. Quae mollitia quos recusandae
          assumenda? Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Corporis recusandae exercitationem voluptatibus minus quia fugiat
          quibusdam quos, ipsa reiciendis ullam nisi dicta eaque dolorem eos!
          Excepturi minima repellendus saepe laboriosam!
        </p>
      </div>
      <List />
    </section>
  );
}

export default App;
