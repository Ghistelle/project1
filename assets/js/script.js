
const getHomePagePosts = async () => {
  try {
    
    let response = await fetch("https://fakestoreapi.com/products?limit=3");

    
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    let cleanResponseProjects = await response.json();

   
    let projectContainer = document.querySelector(".Projects");
    // lets a for of loop to keep things simple!
    for (const project of cleanResponseProjects) {
      console.log(projectContainer);
      let projectInfo = `
        <div class="R-projects">
            <img src="${project-img1}" alt="" />
            <h3>${p-title}</h3>
            <p>${learn}</p>
            <a href="#">Learn More</a>
        </div>
        `;
      projectContainer.innerHTML += projectInfo;
    }

    
  } catch (errorFromCatchBlock) {
    console.error(errorFromCatchBlock);
  }
};

// Calling the function like this is ok!
//getHomePagePosts();


window.addEventListener("load", getHomePagePosts);
  
  