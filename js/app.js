

const searchBtn = document.getElementById('search-btn')


  services.map(service=>{


    div(service)
   
   
    searchBtn.addEventListener('click',()=>{
      const searchinputValue = document.getElementById('search-value').value
      if(searchinputValue.toLowerCase()== service.vehicle.toLowerCase()){
        mainSection.innerHTML=""
        div(service)
          return;
  }
      

    })
 
  })


 




