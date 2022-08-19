// added all utilities
const mainSection = document.getElementById('main-section')
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
        <!--  <button type="button" class="btn btn-primary" data-bs-toggle="modal" onclick='handleBooking()' data-bs-target="#exampleModal">
                see details
          </button>  -->
              </div>
            </div>
          </div>
  </div>
  `;
  
    mainSection.appendChild(div);
}
