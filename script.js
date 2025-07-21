'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".btn--close-modal");
const btnsOpenModal = document.querySelectorAll(".btn--show-modal");

//open modal
const openModal = () => {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}

//close modal
const closeModal = () => {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}

//add click event for all show modal btns
btnsOpenModal.forEach(btn => {
    btn.addEventListener('click', openModal);
})

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener('keydown', e => {
    if(e.key === 'Escape' && !modal.classList.contains('hidden')){
        closeModal();
    }
});




















