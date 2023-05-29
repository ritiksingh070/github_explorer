const API="https://api.github.com/users/";

// console.log(API)
const ritik=document.getElementById("content");
const getUser=async(username)=>{
    const response=await fetch(API+username);
    const data= await response.json();
    console.log(data);

    const d=`<div class="pic">
    <img src="${data.avatar_url}" alt="">
</div>
<div class="details">
    <h2>${data.name}</h2>
    <p>Bio: ${data.bio}</p>
    <ul>
        <li>${data.followers} Followers</li>
        <li>${data.following} Followings</li>
        <li>${data.public_repos} Repos</li>
    </ul>
    
    <p>Repository</p>
    <div id="repos"></div>
</div>`
ritik.innerHTML=d;
getRepos(username);
}

const getRepos =async(username)=>{
    const repos=document.getElementById("repos");
    const response= await fetch(API+username+"/repos")
    const data= await response.json();
    console.log(data);
    data.forEach((item)=>{
        const elem=document.createElement("a");
        elem.classList.add("repo");
        elem.href=item.html_url;
        elem.innerText=item.name
        elem.target="_blank"
        repos.appendChild(elem);
        // console.log(repos.innerHTML)
    })
        
}

const onSubmit=()=>{
    const inputData=document.getElementById("inputData");
    if(inputData!=""){
        getUser(inputData.value);
    }
    return false;
}
// getUser("nikku9678");

