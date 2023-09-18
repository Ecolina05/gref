import { useEffect, useState } from 'react';
import { getCountries } from '../../services/countries.service';

import CountryCard from '../../components/country-card/country-card';
import AddCountry from '../../components/modals/add-country';

const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [openAddCountryModal, setOpenAddCountryModal] = useState(false);

  useEffect(() => {
    getCountries().then((response) => {
      setCountries(response);
    });
  }, []);

  return (
    <section className="flex-center flex-col">
      <header className="flex-center flex-col">
        <h1 className="text-2xl font-bold">Gref</h1>
        <h2 className="text-lg">Countries</h2>
      </header>

      <div className="w-1/3 bg-gray-800 border border-gray-700 rounded-lg p-8 m-auto mt-10">
        <div className="flex items-center justify-start mb-4">
          <button
            type="button"
            className="text-sm font-medium text-blue-500 hover:underline"
            onClick={() => setOpenAddCountryModal(true)}
          >
            Add
          </button>
        </div>
        <div className="overflow-y-scroll" style={{ height: '500px' }}>
          <ul role="list" className="divide-y divide-gray-700">
            {countries.length === 0 && <p>Loading countries...</p>}
            {countries.map(({ id, name, iso2 }) => (
              <CountryCard
                key={`country-${id}`}
                id={id}
                name={name}
                iso2={iso2}
              />
            ))}
          </ul>
        </div>
      </div>

      {openAddCountryModal && <AddCountry openModal={openAddCountryModal} />}
    </section>
  );
};

export default Countries;
