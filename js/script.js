// function myFunction() {
//     let navbar = document.getElementById("myTopNav");
//     if(navbar.className === "navbar"){
//         navbar.className += "responsive";
//     }
//     else {
//         navbar.className = "navbar";
//     }
// }

const navigationLinks = document.querySelectorAll('[data-nav-link]');
const pages = document.querySelectorAll('[data-page]');
// pages.forEach(e =>console.log(e.dataset) )
// navigationLinks.forEach(e =>console.log(e.dataset) )

for(let i = 0 ; i < navigationLinks.length; i++)
{
    navigationLinks[i].addEventListener("click", function(){
    {
        for(let i = 0; i < pages.length; i++)
        {
            if(this.innerHTML.toLowerCase() === pages[i].dataset.page)
            {   
                pages[i].classList.add('active');
                navigationLinks[i].classList.add('active');
                window.scrollTo(0,0);
            }
            else
            {
                pages.classList.remove('active');
                navigationLinks.classList.remove('active');
                navigationLinks.classList.remove('active');
            }
        }
    }});
    
}