import toast from 'react-hot-toast';

const darkModeStyle = {
  borderRadius: '10px',
  background: '#333',
  color: '#fff',
};

const showToast = (type: 'success' | 'error', message: string) => {
  toast[type](message, {
    style: darkModeStyle,
  });
};

export { showToast };
