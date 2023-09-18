import { useState } from 'react';
import CountryDetails from '../modals/country-details';

type Props = {
  id: number;
  name: string;
  iso2: string;
};

const CountryCard = ({ id, name, iso2 }: Props) => {
  const [openCountryDetailsModal, setOpenCountryDetailsModal] = useState(false);

  return (
    <>
      <li className="py-3">
        <div className="flex items-center">
          <div className="flex-shrink-0">
            {/* <img
          className="w-8 h-8 rounded-full"
          src="/docs/images/people/profile-picture-1.jpg"
          alt="Neil image"
        /> */}
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
              {name}
            </p>
            <p className="text-sm text-gray-500 truncate dark:text-gray-400">
              {iso2}
            </p>
          </div>

          <div className="inline-flex items-center text-base font-semibold text-white pr-6">
            <button
              type="button"
              className="text-sm font-medium text-blue-500 hover:underline"
              onClick={() => setOpenCountryDetailsModal(true)}
            >
              Details
            </button>
          </div>
        </div>
      </li>

      {openCountryDetailsModal && (
        <CountryDetails
          openModal={openCountryDetailsModal}
          country={{
            id: id,
            name: name,
            iso2: iso2,
          }}
        />
      )}
    </>
  );
};

export default CountryCard;
