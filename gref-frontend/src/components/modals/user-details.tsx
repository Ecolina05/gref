import { useEffect, useState } from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';

type Props = {
  openModal: boolean;
  user: any;
};

const UserDetails = ({ openModal, user }: Props) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    openModal && handleOpen();
  }, [openModal]);

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
        <img
          className="w-20 h-20 rounded-full object-cover"
          src={user.img}
          alt={`image-${user.id}`}
        />
        <h1 className="text-xl font-bold mt-2">{`${user.firstname} ${user.lastname}`}</h1>

        <div className="flex flex-col">
          <span> Age: {user.age}</span>
        </div>

        <div className="mt-5 text-sm">
          <button
            type="button"
            className="text-sm font-medium text-blue-500 hover:underline"
            onClick={handleClose}
          >
            Close
          </button>
        </div>
      </Box>
    </Modal>
  );
};

export default UserDetails;
