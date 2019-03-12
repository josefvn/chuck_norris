export const initializeNotifications = () => {
  const notifications = [...document.querySelectorAll('.notification > button.delete')];
  notifications.forEach(button => {
    button.addEventListener('click', () => button.parentElement.remove());
  })
};

export const clearNotifications = () => {
  const notifications = [...document.querySelectorAll('.notification')];
  notifications.forEach(item => item.remove());
};
