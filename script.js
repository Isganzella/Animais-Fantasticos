function initTabNav(){
    const tabMenu = document.querySelectorAll('.js-tabmenu li');
    const tabContent = document.querySelectorAll('.js-tabcontent section');
    tabContent[0].classList.add('ativo');


    if(tabMenu.length && tabContent.length){

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
    });
    }
}

function initAcordion(){
    function activeAcordion(event){
        this.classList.toggle("ativo");
        this.nextElementSibling.classList.toggle('ativo');
    }
    
    const acordionList = document.querySelectorAll('.js-acordion dt');
    acordionList[0].classList.add("ativo");
    acordionList[0].nextElementSibling.classList.add("ativo");
    
    acordionList.forEach((item) =>{
        item.addEventListener('click', activeAcordion);
    })
    
}

initTabNav();
initAcordion();



