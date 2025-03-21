// t_-U-wsqR0caPztK-JDigDM-fRJhwlIvQLNk5iojNqM

// new link : 9yJ41sDO2vTDM43zRmOvWyOPvBYcXRLTsNyG8_debYQ
const accessKey = 'n5O6ysmkAA2uR4bVTuLPPZObD3LVG8byjXUHVyiU5Ys';
const formEl = document.querySelector("form");
const inputEl = document.querySelector("#search-input");
const searchResults = document.querySelector("#search-results");
const showMoreBtn = document.querySelector("#show-more-btn");

let inputData = "";
let pageNo = 1;

// function to fetch image using unplash api
const fetchImages = async (query, page)=>{
  
  if(page===1) {
    searchResults.innerHTML ="";
  }

  const url = `https://api.unsplash.com/search/photos?query=${query}&per_page=28&page=${page}&client_id=${accessKey}`;
 
  try {
    const response = await fetch(url);
    if(!response.ok){
      throw new Error(`error message : ${response.status}`)
    }
    const data = await response.json()
  
    data.results.forEach((photo) => {
      const imgElement = document.createElement("div");
  
      imgElement.innerHTML = `
      <img class="w-[300px] h-[280px] rounded-lg object-cover hover:opacity-60 transition duration-300" src="${photo.urls.regular}" alt="${photo.alt_description}
      ">
      `
      
    searchResults.appendChild(imgElement) 

    });

    if(data.total_pages === page) {
      showMoreBtn.style.display = "none"
    } else {
      showMoreBtn.style.display = "block"
    }
    //data.results.urls.regular
} catch (error) {
  console.log("error status is :", error);
}
 


}


// adding listener to search form
formEl.addEventListener("submit", (event)=>{
  event.preventDefault();
  inputData = inputEl.value.trim();
  
  if(inputData !== "") {
    
    fetchImages(inputData, pageNo);
  } else {
    searchResults.innerHTML = `<h2>Please input a search query</h2>`
  }



})


showMoreBtn.addEventListener("click",()=>{
  fetchImages(inputData, ++pageNo)
})





















// async function searchImage(query) {
  
//   const url = ` https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${accessKey}
//   `;

//   try{
//     const response = await fetch(url);
     
//     if(!response.ok) {
//       throw new Error(`Error Message : ${response.status}`)
//     } 

//     const data = await response.json();
//     console.log(data);

//   } catch(error) {
//     console.log(("error fetching data : error.message"));
//   }



//     // const response = await fetch(url);
//     // const data = await response.json();
//     // console.log(data);
//     // const results = data.results;
//     // console.log(results);
 
// }

// formEl.addEventListener("submit", (event) => {
//   event.preventDefault();
//   inputData = inputEl.value;
//   searchImage(inputData);
// });
