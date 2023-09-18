import { useState } from 'react';
import UserDetails from '../modals/user-details';

type Props = {
  id: number;
  firstname: string;
  lastname: string;
  age: number;
  img: string;
};

const UserCard = ({ id, firstname, lastname, age, img }: Props) => {
  const [openUserDetailsModal, setOpenUserDetailsModal] = useState(false);

  return (
    <>
      <li className="py-3">
        <div className="flex items-center">
          <div className="flex-shrink-0 pr-3">
            <img
              className="w-10 h-10 rounded-full object-cover"
              src={img}
              alt={`image-${id}`}
            />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
              {`${firstname} ${lastname}`}
            </p>
            <p className="text-sm text-gray-500 truncate dark:text-gray-400">
              {age}
            </p>
          </div>

          <div className="inline-flex items-center text-base font-semibold text-white pr-6">
            <button
              type="button"
              className="text-sm font-medium text-blue-500 hover:underline"
              onClick={() => setOpenUserDetailsModal(true)}
            >
              Details
            </button>
          </div>
        </div>
      </li>

      {openUserDetailsModal && (
        <UserDetails
          openModal={openUserDetailsModal}
          user={{
            id: id,
            firstname: firstname,
            lastname: lastname,
            age: age,
            img: img,
          }}
        />
      )}
    </>
  );
};

export default UserCard;
