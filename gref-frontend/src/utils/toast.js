import toast from 'react-hot-toast'

const darkModeStyle = {
  borderRadius: '10px',
  background: '#333',
  color: '#fff',
}

/**
 *
 * @param {*} type 'success' | 'error' | 'withEmoji'
 * @param {*} message
 * @param {*} emoji
 * @returns
 */
const showToast = (type, message, emoji = null) => {
  if (type === 'withEmoji') {
    return toast(message, {
      style: darkModeStyle,
      icon: emoji,
    })
  }

  toast[type](message, {
    style: darkModeStyle,
  })
}

export { showToast }
