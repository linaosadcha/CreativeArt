const OpenPopUp = document.getElementById('open_pop_up');
const ClosePopUp = document.getElementById('pop_up_close');
const popUp =  document.getElementById('pop_up');

OpenPopUp.addEventListener('click',function(e){
    e.preventDefault();
    popUp.classList.add('active');
})
ClosePopUp.addEventListener('click', ()=>{
popUp.classList.remove('active');
})