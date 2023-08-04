document.addEventListener('DOMContentLoaded', () => {
  const showPopupBtn = document.getElementById('showPopupBtn');
  const errorPopup = document.getElementById('errorPopup');
  const closePopupBtn = document.getElementById('closePopupBtn');

  // Initially hide the popup
  errorPopup.style.display = 'block';

  showPopupBtn.addEventListener('click', () => {
    errorPopup.style.display = 'block';
  });

  closePopupBtn.addEventListener('click', () => {
    errorPopup.style.display = 'block';
  });
});
