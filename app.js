const logo = document.querySelectorAll("#logo path");

      for (let i = 0; i < logo.length; i++) {
        console.log(`Letter ${i} is ${logo[i].getTotalLength()}`); //To calculate tatal lenght of letter
      }


      const frameChanger = document.querySelector('.swiper');
      const woodenBtn = document.getElementById('woodenBtn')
      const designerBtn = document.getElementById('designerBtn')
      const blackBtn = document.getElementById('blackBtn')
      const whiteBtn = document.getElementById('whiteBtn')



      woodenBtn.addEventListener('click', ()=>{
        frameChanger.classList.add("wooden-frame")
        frameChanger.classList.remove("designer-frame")
        frameChanger.classList.remove("white-frame")
      })
      
      designerBtn.addEventListener('click',()=>{
        frameChanger.classList.add("designer-frame")
        frameChanger.classList.remove("wooden-frame")
        frameChanger.classList.remove("white-frame")
      })
      
      blackBtn.addEventListener('click',()=>{
       frameChanger.classList.remove("wooden-frame")
       frameChanger.classList.remove("designer-frame")
       frameChanger.classList.remove("white-frame")
     }) 

     whiteBtn.addEventListener('click', ()=>{
      frameChanger.classList.add("white-frame")
      frameChanger.classList.remove("wooden-frame")
      frameChanger.classList.remove("designer-frame")
     })


    //  const viewProductsBtn = document.querySelector(".view-pro");
    //  const productDetailsPage = document.querySelector(".product-details")
    //  const productsPage = document.querySelector(".products")
    //  const productBtn = document.querySelector(".main-page-btn")
    //  const mainPage = document.querySelector('.main-page')

    //  viewProductsBtn.addEventListener('click',()=>{
    //     productDetailsPage.classList.remove("hidden","open");
        
    //     productsPage.classList.add('hidden')
    //  })

    //  productBtn.addEventListener("click",()=>{
    //    productsPage.classList.remove('hidden')
    //    mainPage.classList.add('hidden')
    //  })


