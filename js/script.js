window.addEventListener('DOMContentLoaded', () => {
    // LOADER
    const loader = document.querySelector('.loader');
    setTimeout(function () {
        loader.style.opacity = "0";
        setTimeout(function() {
            loader.style.display = "none";
        },1500);
    },2000);

    // tABS

    // TABS
  const tabs = document.querySelectorAll('.tabheader__item'),
     tabContent = document.querySelectorAll('.tabcontent'),
     headerParents = document.querySelector('.tabheader__items');

     function hideTabcontent(){
         tabContent.forEach((item) => {
             item.style.display = "none";
         });
         tabs.forEach((item) => {
             item.classList.remove("tabheader__item_active");
         });
     }

     function showTabContent(i = 0){
         tabContent[i].style.display = "block";
         tabs[i].classList.add("tabheader__item_active");
     }
     hideTabcontent();
     showTabContent();
     
     headerParents.addEventListener('click', (event) => {
         if(event.target && event.target.classList.contains('tabheader__item')) {
             tabs.forEach((item,i) => {
                 if(event.target == item){
                    hideTabcontent();
                    showTabContent(i); 
                 }
             });
         }
    })

  

});
