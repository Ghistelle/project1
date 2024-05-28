

const removeSplashAnimation = () => {
    const splash = document.querySelector(".splash");
    setTimeout(() => {
      
      splash.classList.add("display-none");
    }, 2000);
  };
  
  document.addEventListener("DOMContentLoaded", removeSplashAnimation);