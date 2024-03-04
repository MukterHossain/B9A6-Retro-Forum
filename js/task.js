const discussLeft = async () =>{
    const res = await fetch('https://openapi.programming-hero.com/api/retro-forum/posts');
    const data = await res.json();
    const dataAll = data.posts;

    console.log(typeof data)
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
        // console.log(item)
        // for(const btn of dataAll){
            
        // }     
})
}