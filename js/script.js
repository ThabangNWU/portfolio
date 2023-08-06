// function myFunction() {
//     let navbar = document.getElementById("myTopNav");
//     if(navbar.className === "navbar"){
//         navbar.className += "responsive";
//     }
//     else {
//         navbar.className = "navbar";
//     }
// }

// const navigationLinks = document.querySelectorAll('[data-nav-link]');
// const pages = document.querySelectorAll('[data-page]');
// // pages.forEach(e =>console.log(e.dataset) )
// // navigationLinks.forEach(e =>console.log(e.dataset) )

// for(let i = 0 ; i < navigationLinks.length; i++)
// {
//     navigationLinks[i].addEventListener("click", function(){
//     {
//         for(let i = 0; i < pages.length; i++)
//         {
//             if(this.innerHTML.toLowerCase() === pages[i].dataset.page)
//             {   
//                 pages[i].classList.add('active');
//                 navigationLinks[i].classList.add('active');
//                 window.scrollTo(0,0);
//             }
//             else
//             {
//                 pages.classList.remove('active');
//                 navigationLinks.classList.remove('active');
//                 navigationLinks.classList.remove('active');
//             }
//         }
//     }});
    
// }

const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarList = document.getElementsByClassName('navbar__list')[0]
const navbarItemAbout = document.getElementsByClassName('navbar__link')[0]
const about = document.getElementsByClassName('about')[0]
const doing = document.getElementsByClassName('doing__article')[0]

navbarItemAbout.addEventListener('click', () => {
    navbarItemAbout.classList.add('active')  
    about.classList.add('active')
     about.style.display = 'block';
     doing.style.display = 'block'
})
about.addEventListener('click', () => {
   
})


// console.log(navbarItemAbout);


const maincontent = document.getElementsByClassName('main__content')[0]
toggleButton.addEventListener('click', () => {
    navbarList.classList.toggle('active')})

const chevron_down = document.getElementsByClassName('gg-chevron-down')[0]
const divider = document.getElementsByClassName('divider')[0]
const contactList = document.getElementsByClassName('contact-list').length;
const arr = [];
 for (let i = 0 ;i < contactList ;i++)
 {
    arr[i] = document.getElementsByClassName('contact-list')[i]
    console.log(arr[i])
    chevron_down.addEventListener('click', () => {
        arr[i].classList.toggle('active')
    })
    
    
 }

chevron_down.addEventListener('click', () => {
    divider.classList.toggle('active')
    maincontent.classList.toggle('active')
  
})
/***************************************************************************************************************************************
 * ********************************practices*******************************************************************************************
*/
const arra = [1,6,3,2,4];
const output = arra.map((x) => x * arra.length ).filter((x) => x < 20);
const output1 = arra.reduce((x) => x == x)
console.log(output1);

const users =[{firstName : "Thabang", lastName :"Lebele", age : 28},
                {firstName : "Lerato", lastName :"Lebele", age : 221},
                {firstName : "Jabulile", lastName :"Buthelezi", age : 20}];

            // let result = users.map((x) => x.firstName +" " + x.lastName)
            // console.log(result);
            // let output3 = users.filter((x) => x.age < 30).map( (x) => x.firstName);
            // console.log(output3)


/***************************************************************************************************************************/
// let projectItem = document.querySelectorAll('.project__item');
// let filterIitem = document.querySelectorAll('.filter-item');
// let filterData = document.querySelector('[data-filter]');
// let temp = "";

// // console.log(filterIitem);

// for(let i = 0; i < filterIitem.length ; i++){
//     filterIitem[i].addEventListener('click',() => {
//         temp = filterIitem[i].dataset;        
//             for (let j = 0; j < filterIitem.length; j++) {
//                 filterIitem[j].classList.remove('active');
//             }
//             console.log(temp);
//             filterIitem[i].classList.add('active');       
//             for(let k = 0; k < projectItem.length; k++ )
//             {                    
//                 console.log(projectItem[k].getAttribute('data-project'))
//                 if(projectItem[k].getAttribute('data-project') === temp || temp === "all") 
//                 {                    
//                     projectItem[k].classList.add('active');
//                     projectItem[k].classList.remove('hide');                    
//                 }  
                           
//             }
//         })
// }
let filterItem = document.querySelectorAll('.filter-item');
let projectItem = document.querySelectorAll('.project__item');
for(let i = 0 ; i < filterItem.length; i++ )
{
    filterItem[i].addEventListener('click',function(){
        for(let j = 0 ; j < filterItem.length; j++){
            filterItem[j].classList.remove('active');
        }
        this.classList.add('active');

        let targetData = this.getAttribute('data-filter');
        
        for(let k = 0; k < projectItem.length ; k++)
        {
            projectItem[k].classList.remove('active');
            projectItem[k].classList.add('hide');
            console.log(projectItem[k].getAttribute('data-project'))
            if(projectItem[k].getAttribute('data-project') == targetData || targetData == 'all'){
                projectItem[k].classList.remove('hide');
                projectItem[k].classList.add('active');
            }
        }
    })
}

// preview section
let projectPreview = document.querySelectorAll('.project__item__preview');
for(let i = 0; i < projectItem.length; i++)
{
    projectItem[i].addEventListener('click',function(){
        let name = projectItem[i].getAttribute('data-name-target');
        console.log(name);                     
        for(let j = 0; j < projectPreview.length; j++)
        {
            let target = projectPreview[j].getAttribute('data-preview-target');  
            console.log(target);                  
            if(name == target)
            {
                projectPreview[j].classList.add('active'); 
            }
        }       
    })
}

 

