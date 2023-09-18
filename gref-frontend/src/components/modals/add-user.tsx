import { useEffect, useState } from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Input from '../input/input';
import Button from '../button/button';
import { showToast } from '../../utils/toast';

type Props = {
  openModal: boolean;
};

const AddUser = ({ openModal }: Props) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    openModal && handleOpen();
  }, [openModal]);

  const addUser = () => {
    showToast('success', 'User successfully added');
    handleClose();
  };

  const style = {
    bgcolor: '#1F2937',
    border: '2px solid #374151',
    borderRadius: '10px',
    left: '50%',
    p: 4,
    position: 'absolute' as 'absolute',
    top: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <h1>Add User</h1>

        <form
          style={{
            marginTop: '20px',
            display: 'flex',
            flexDirection: 'column',
            gap: '1em',
          }}
        >
          <Input
            id="firstname"
            name="firstname"
            type="text"
            label="Firstname"
            htmlFor="firstname"
          />
          <Input
            id="lastname"
            name="lastname"
            type="text"
            label="Lastname"
            htmlFor="lastname"
          />
          <Input id="age" name="age" type="text" label="Age" htmlFor="age" />
          <Input
            id="img"
            name="img"
            type="text"
            label="Img url"
            htmlFor="img"
          />
          <div>
            <label
              htmlFor="countries"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              User type
            </label>
            <select
              id="countries"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option value="1">Administrador</option>
              <option value="2">Capitalista</option>
              <option value="3">Asociado interno</option>
              <option value="4">Asociado externo</option>
            </select>
          </div>

          <div style={{ marginTop: '15px' }}>
            <Button name="Add" onClick={addUser} />
            <button
              style={{ all: 'unset', cursor: 'pointer' }}
              onClick={handleClose}
            >
              Cancel
            </button>
          </div>
        </form>
      </Box>
    </Modal>
  );
};

export default AddUser;
