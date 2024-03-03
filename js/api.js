
const loadCategory = async () =>{
    const res = await fetch('https://openapi.programming-hero.com/api/retro-forum/posts');
    const data = await res.json();


    const discussContainer = document.getElementById('discuss-container');
    data.posts.forEach((item)=>{
        
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
                                    <span class="">${item.posted_time}</span>
                                </div>
                                <div>
                                    <i class="fa-regular fa-envelope-open bg-[#10b981] p-2 rounded-full text-white text-xl"></i> 
                                </div>
                            </div>
                        </div>
        `;
        discussContainer.appendChild(div);
    })

    
}


loadCategory();