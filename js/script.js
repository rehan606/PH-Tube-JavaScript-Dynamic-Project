
// Load categories using API Fetch 

const loadCategories = () => {
    fetch('https://openapi.programming-hero.com/api/phero-tube/categories')
    .then((response) => response.json())
    .then((data) =>  displayCategories(data.categories))
    .catch((error) => console.log(error))
}


// Display Category 
const displayCategories = (categories) => {
    const categoryContainer = document.getElementById('categories')
    categories.forEach((item) => {
        // create button 
        const button = document.createElement('button')
        button.classList = "btn btn-primary mr-4"
        button.innerText = item.category;

        // Add Button to Category Container 
        categoryContainer.appendChild(button)
    });
}


// Load videos 
const loadVideos = () => {
    fetch('https://openapi.programming-hero.com/api/phero-tube/videos')
    .then((response) => response.json())
    .then((data) => displayVideos(data.videos))
    .catch((error) => console.log(error))
}

// const cardDemo = {
//     "category_id": "1001",
//     "video_id": "aaaa",
//     "thumbnail": "https://i.ibb.co/L1b6xSq/shape.jpg",
//     "title": "Shape of You",
//     "authors": [
    //     {
    //     "profile_picture": "https://i.ibb.co/D9wWRM6/olivia.jpg",
    //     "profile_name": "Olivia Mitchell",
    //     "verified": ""
    //     }
//     ],


//     "others": {
    //     "views": "100K",
    //     "posted_date": "16278"
//     },
//     "description": "Dive into the rhythm of 'Shape of You,' a captivating track that blends pop sensibilities with vibrant beats. Created by Olivia Mitchell, this song has already gained 100K views since its release. With its infectious melody and heartfelt lyrics, 'Shape of You' is perfect for fans looking for an uplifting musical experience. Let the music take over as Olivia's vocal prowess and unique style create a memorable listening journey."
// },

// Display Videos 
const displayVideos = (videos) => {
    const videosConteiner =document.getElementById('vides')
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
                        <p> ${video.authors[0].profile_name} ${video.authors[0].verified} </p>
                        <img class="w-5 h-5 ml-2" src="https://img.icons8.com/?size=48&id=98A4yZTt9abw&format=png" alt="">
                    </div>

                    <p> ${video.others.views} ${video.others.posted_date} </p>
                </div>
            </div>
        
        `

        videosConteiner.appendChild(card)
    })
}









loadCategories()
loadVideos()