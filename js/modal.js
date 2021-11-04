(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
    formmodal: document.querySelector('[data-form-modal]')
   
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);
 

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
    refs.formmodal.classList.toggle('is-hidden');
  }
})();
