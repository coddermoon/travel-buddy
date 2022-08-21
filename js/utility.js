// added all utilities
const mainSection = document.getElementById('main-section')
const modalBody = document.getElementById('modal-body')
// create A div
const div = (service)=>{
    const div = document.createElement("div");

    div.innerHTML = `
     <div class="card mt-3  mx-auto" style="max-width: 800px;">
          <div class="row g-0">
            <div class="col-md-4">
              <img src=${service.imageUrl} class="img-fluid rounded-start h-100" alt="...">
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">Transport Mood ${service.vehicle}</h5>
                <p class="card-text">${service.description}</p>
                <p class="card-text"><small class="text-muted">Fare per kilo ${service.farePerKilo}</small> <small class="text-muted">Capacity ${service.capacity}</small></p>
                <!-- Button trigger modal -->
        <button type="button" class="btn btn-primary" data-bs-toggle="modal" onclick='handleBooking(${JSON.stringify(service)})' data-bs-target="#exampleModal">
                Book Now
          </button> 
              </div>
            </div>
          </div>
  </div>
  `;
  
    mainSection.appendChild(div);
}



const card = (obj)=>{

  modalBody.innerHTML = ''

  const modalDiv = document.createElement("div");
  modalDiv.classList.add('m-auto')
  modalDiv.innerHTML = `
  
  <div class="card mx-auto">
  <img src="${obj.imageUrl}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${obj.vehicle}</h5>
<p class="card-text"><small class="text-muted m-2">Fare per kilo :  ${
 obj.farePerKilo
}</small><small class="text-muted m-2">Capacity :  ${obj.capacity}</small></p>

    <p>Fare  : <span class="card-text" id=${
      obj.vehicle + "-fare"
    }> </span></p>
    <p>Tax  : <span class="card-text" id=${obj.vehicle + "-tax"}></span></p>

     <p>Total-cost  :  <span class="card-text" id=${
       "total-" + obj.vehicle + "-cost"
     }></span></p>
  </div>

   <div class="d-flex flex-column flex-md-row mb-5 p-1">
      <input class="form-control me-2" type="number" id="${
        obj.vehicle + "-distance-input"
      }" placeholder="Distance to travel" aria-label="Search">
      <input class="form-control me-2" type="number" id="${
        obj.vehicle + "-quantity-input"
      }" placeholder="How many vehicle do you need" aria-label="Search">
      <button onclick='calculateCost()' class="btn btn-outline-success" type="submit">Submit</button>
   </div>
</div>
  `
  modalBody.appendChild(modalDiv)
}



const handleBooking =(obj)=>{
  card(obj)
}