export const initialiseNotifications = () => {
  const notifications = [...document.querySelectorAll('.notification > button.delete')];
  notifications.forEach(button => {
    button.addEventListener('click', () => button.parentElement.remove());
  })
};

export const clearNotifications = () => {
  const notifications = [...document.querySelectorAll('.notification')];
  notifications.forEach(item => item.remove());
};

export const makeNotification = notification => `
    <div class="notification">
      <span>${notification}</span>
    </div>
`;
