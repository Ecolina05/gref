import { useEffect, useState } from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import { getCountryDetails } from '../../services/countries.service';

type Props = {
  openModal: boolean;
  country: any;
};

const CountryDetails = ({ openModal, country }: Props) => {
  const [open, setOpen] = useState(false);
  const [countryDetails, setCountryDetails] = useState({} as any);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    openModal && handleOpen();
    getCountryDetails(country.id).then((response) => {
      setCountryDetails(response);
      console.log(response);
    });
  }, [openModal, country]);

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
        <h1 className="text-xl font-bold">{country.name}</h1>

        <div className="flex flex-col mt-10">
          <span> Región: {countryDetails?.region}</span>
          <span>Subregión: {countryDetails?.subregion}</span>
          <span> Phone code: +{countryDetails?.phonecode}</span>
          <span> Iso2: {countryDetails?.iso2}</span>
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

export default CountryDetails;
