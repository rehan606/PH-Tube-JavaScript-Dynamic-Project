// Time Function
function getTimeString(time){
    const hour = parseInt(time / 3600);
    let secondRemaining = time % 3600;
    const minute = parseInt(secondRemaining / 60);
    secondRemaining = secondRemaining % 60;
    return `- ${hour} Hour ${minute} Min ago `
}

// Load categories using API Fetch 

const loadCategories = () => {
    fetch('https://openapi.programming-hero.com/api/phero-tube/categories')
    .then((response) => response.json())
    .then((data) =>  displayCategories(data.categories))
    .catch((error) => console.log(error))
}


// Display Category 

// const displayCategories = (categories) => {
//     const categoryContainer = document.getElementById('categories')
//     categories.forEach((item) => {
//         // create button 
//         const button = document.createElement('button')
//         button.classList = "btn btn-primary mr-4"
//         button.innerText = item.category;

//         // Add Button to Category Container 
//         categoryContainer.appendChild(button)
//     });
// }

// Display Category  Method 2
const displayCategories = (categories) => {
    const categoryContainer = document.getElementById('categories')
    categories.forEach((item) => {
        // create button 
        const buttonContainer = document.createElement('div')
        buttonContainer.innerHTML = `
            <button onclick="loadCategoriesVideos( ${item.category_id} )" class="btn bg-red-500 mr-4"> ${ item.category} </button>
        `
        

        // Add Button to Category Container 
        categoryContainer.appendChild(buttonContainer)
    });
}

// Load Category Videos
function loadCategoriesVideos (id){
    fetch(`https://openapi.programming-hero.com/api/phero-tube/category/${id}`)
    .then((response) => response.json())
    .then((data) => displayVideos(data.category))
    .catch((error) => console.log(error))
}

// Load videos 
const loadVideos = () => {
    fetch('https://openapi.programming-hero.com/api/phero-tube/videos')
    .then((response) => response.json())
    .then((data) => displayVideos(data.videos))
    .catch((error) => console.log(error))
}



// Display Videos 
const displayVideos = (videos) => {
    const videosConteiner =document.getElementById('vides')
    // when category will be filter then only see category videos
    videosConteiner.innerHTML= " "

    // Video Not found
    if(videos.length == 0){
        videosConteiner.classList.remove('grid')
        videosConteiner.innerHTML= `
            <div class=" flex flex-col justify-center items-center gap-7 text-center">
                <img class="w-48 h-48 mt-20"  src="images/Icon.png" alt="">
                <p class="text-2xl font-bold"> Opss! Sorry, </br> There is no content Here. </p>
            </div>
        `;
        return;
    } else {
        videosConteiner.classList.add('grid')
    }

    videos.forEach((video) => {
        const card = document.createElement('div')
        card.classList = "card card-compact bg-base-100  shadow-xl mt-6"
        card.innerHTML =`
            <figure class="h-[200px]">
                <img class="w-full h-full" src=" ${video.thumbnail} "
                    alt="Shoes" />
            </figure>
            <div class="px-0 py-4 flex gap-1">
                <div class="w-2/12 rounded-full"> 
                    <img class=" w-10 h-10 rounded-full" src=" ${video.authors[0].profile_picture} " alt="">
                </div>
                <div class="w-8/12">
                    <h3 class="card-title">${video.title}!</h3>

                    <div class="flex items-center">
                        <p> ${video.authors[0].profile_name} </p>

                        ${video.authors[0].verified == true ? `<img class="w-5 h-5 ml-2" src="https://img.icons8.com/?size=48&id=98A4yZTt9abw&format=png" alt=""></img>` : " " }
                        
                        
                    </div>

                    <div class="flex items-center gap-2">
                        <p> ${video.others.views} views</p> 
                        <p class="text-sm"> ${video.others.posted_date?.length == 0 ? " " : `${ getTimeString(video.others.posted_date) }`}</p> 
                        
                    </div>

                </div>
            </div>
        
        `

        videosConteiner.appendChild(card)
    })
}










// Call Functions 
loadCategories()
loadVideos()