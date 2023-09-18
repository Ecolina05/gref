import { useEffect, useState } from 'react';
import { allUsers } from '../../services/user.data';

import UserCard from '../../components/user-card/user-card';
import AddUser from '../../components/modals/add-user';

const Users = () => {
  const [users, setUsers] = useState([]);
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    setUsers(allUsers as any);
  }, []);

  return (
    <section className="flex-center flex-col">
      <header className="flex-center flex-col">
        <h1 className="text-2xl font-bold">Gref</h1>
        <h2 className="text-lg">Users</h2>
      </header>

      <div className="w-1/3 bg-gray-800 border border-gray-700 rounded-lg p-8 m-auto mt-10">
        <div className="flex items-center justify-start mb-4">
          <button
            type="button"
            className="text-sm font-medium text-blue-500 hover:underline"
            onClick={() => setOpenModal(true)}
          >
            Add
          </button>
        </div>
        <div className="overflow-y-scroll" style={{ height: '500px' }}>
          <ul role="list" className="divide-y divide-gray-700">
            {users.length === 0 && <p>Loading users...</p>}
            {users.map(({ id, firstname, lastname, age, img }) => (
              <UserCard
                key={`user-${id}`}
                id={id}
                firstname={firstname}
                lastname={lastname}
                age={age}
                img={img}
              />
            ))}
          </ul>
        </div>
      </div>

      <AddUser openModal={openModal} />
    </section>
  );
};

export default Users;
