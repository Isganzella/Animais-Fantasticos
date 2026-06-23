const tabMenu = document.querySelectorAll('.js-tabmenu li');
const tabContent = document.querySelectorAll('.js-tabcontent section');



function activeTab(index){
    tabContent.forEach((item)=>{
        item.classList.remove('ativo');
    })
    tabContent[index].classList.add('ativo');
}

tabMenu.forEach((item, index)=>{
    item.addEventListener('click', () => {
        activeTab(index);
    });
});''