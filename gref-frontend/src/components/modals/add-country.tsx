import { useEffect, useState } from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Input from '../input/input';
import Button from '../button/button';
import { showToast } from '../../utils/toast';

type Props = {
  openModal: boolean;
};

const AddCountry = ({ openModal }: Props) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    openModal && handleOpen();
  }, [openModal]);

  const addCountry = () => {
    showToast('success', 'Country successfully added');
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
        <h1>Add Country</h1>

        <form
          style={{
            marginTop: '20px',
            display: 'flex',
            flexDirection: 'column',
            gap: '1em',
          }}
        >
          <Input id="id" name="id" type="number" label="ID" htmlFor="id" />
          <Input
            id="name"
            name="name"
            type="text"
            label="Name"
            htmlFor="name"
          />
          <Input
            id="iso2"
            name="iso2"
            type="text"
            label="Iso2"
            htmlFor="iso2"
          />

          <div style={{ marginTop: '15px' }}>
            <Button name="Add" onClick={addCountry} />
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

export default AddCountry;
