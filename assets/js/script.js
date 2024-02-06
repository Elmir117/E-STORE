const productSection = document.getElementsByClassName("row")[0]

window.addEventListener('DOMContentLoaded', getMelumatlariInternetdenGetir)

async function getMelumatlariInternetdenGetir() {
  const unvan = "https://fakestoreapi.com/products"

  try {
    const melumatlar = await fetch(unvan)
    const frontendeGelecekMelumatlar = await melumatlar.json()
    for (let i = 0; i < 20; i++) {
      productSection.innerHTML += `
      <div class="col-12 col-md-6 col-lg-3 mt-5">
      <div class="card mb-5">
      <i class="fa-regular fa-heart" onclick="addFavouriteList(this)"></i>
          <img src="${frontendeGelecekMelumatlar[i].image}" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title text-center text-secondary-emphasis fw-lighter">son 30 günün ən aşağı qiyməti</h5>
            <p class="text-center d-block fw-bold">50 &#8380;</p>
           <span class="badge bg-success">4 Al 3 Ödə</span>
          </div>
        </div>
      </div> 
       `;
    }
  }
  catch (xeta) {
    console.log(`Serverde xeta yarandi ${xeta}`)
  }
}


function addFavouriteList(element) {
element.classList.toggle("fa-regular")
element.classList.toggle("fa-solid")

}