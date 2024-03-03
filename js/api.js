
const loadCategory = async () =>{
    document.getElementById('loading-spiner').style.display = 'block';
    const res = await fetch('https://openapi.programming-hero.com/api/retro-forum/posts');
    const data = await res.json();


    const discussContainer = document.getElementById('discuss-container');
    // discussContainer.innerHTML = '';
    data.posts.forEach((item)=>{
        document.getElementById('loading-spiner').style.display = 'none';
        const div = document.createElement('div');
        div.classList.add('discussCard')
        div.innerHTML = `
        
                       <div class="w-24 h-24 bg-white rounded-xl p-3">
                            <img src="${item.image}" alt="">
                        </div>
                        <div>
                            <div class="flex gap-8">
                                <p class="text-[14px] text-[#12132d]"># ${item.category}</p>
                                <p class="text-[14px] text-[#12132d]">Author: ${item.author.name} </p>
                            </div>
                            <div>
                                <h3 class="text-xl text-[#12132d] py-2 font-bold">${item.title}</h3>
                                <p class="text-[14px] text-[#12132d] pb-4 opacity-60" >${item.description}</p>
                            </div>

                            <hr class="border-dashed border-2 border-gray-300">

                            <div class="flex justify-between items-center pt-4">
                                <div class="discuss-count flex justify-between items-center gap-4">
                                    <i class="fa-regular fa-message"></i>
                                    <span>${item.comment_count}</span>

                                    <i class="fa-regular fa-eye pl-4"></i>
                                    <span>${item.view_count}</span>
                                    <i class="fa-regular fa-clock pl-4"></i>
                                    <span class="">${item.posted_time} min</span>
                                </div>
                                <div>
                                    <i onclick="discussLeft('${item}')" class="fa-regular fa-envelope-open bg-[#10b981] p-2 rounded-full text-white text-xl"></i> 
                                </div>
                            </div>
                        </div>
        `;
        discussContainer.appendChild(div);
    })

    
}


const discussLeft = async () =>{
    const res = await fetch('https://openapi.programming-hero.com/api/retro-forum/posts');
    const data = await res.json();
    const dataAll = data.posts;
    // console.log(dataAll)

    const discussLeftID = document.getElementById('discussLeftId');
    // discussLeftID.innerHTML = '';
    data.posts.forEach((item)=>{
  
        const div = document.createElement('div');
        div.classList.add('discuss-left')
        div.innerHTML = `<div>
                <h3 class="text-[16px] text-[#12132d] py-2 font-bold gap-4">${item.title}</h3>
                </div>
                <div class="flex justify-between items-center gap-4">
                    <i class="fa-regular fa-eye pl-4"></i>
                    <span>${item.view_count}</span>
                </div>
        `;





        discussLeftID.appendChild(div)
})
}



const loadAllPost= async () =>{
    const res = await fetch('https://openapi.programming-hero.com/api/retro-forum/latest-posts');
    const data = await res.json();
    // console.log(data[1].author.name)


    const postContainer = document.getElementById('post-container');
    // discussContainer.innerHTML = '';
    data.forEach((item)=>{
        // console.log(item.cover_image)
        const div = document.createElement('div');
        div.classList.add('post-card')
        div.innerHTML = `
        <div class="shadow-xl p-5 border-2 border-gray-400 rounded-xl">
            <div class=" ">
                <img class="w-full h-auto rounded-2xl p-2" src="${item.cover_image}" alt="photo">
            </div>
            <div class="flex gap-4 mt-3 text-xl text-center text-[#12132d] opacity-70">
                <i class="fa-regular fa-calendar-minus"></i>
                <span class="">${item.author.posted_date?item.author.posted_date:"No publish date"}</span> 
            </div>
            <div class="">
              <h2 class="text-[#12132d] text-[18px]  font-bold py-3">${item.title}</h2>
              <p class=" text-[16px]  text-[#12132d] opacity-70 pb-2">${item.description}</p>
              <div class="flex gap-3 items-center">
                <div>
                    <img class="w-12 h-12 rounded-full" src="${item.profile_image}" alt="profile">
                </div>
                <div>
                    <h3 class="text-[#12132d] text-[16px]  font-bold">${item.author.name}</h3>
                    <p class=" text-sm text-[#12132d] opacity-70">${item.author.designation?item.author.designation:"Unknown"}</p>
                </div>
              </div>
            </div>
          </div> 

        `;

        postContainer.appendChild(div);
    })
}

loadAllPost()





discussLeft()

loadCategory();