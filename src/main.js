// Navigation scroll style
window.addEventListener('scroll', event => {
    let nav = document.querySelector('.top-nav');
    (window.scrollY >= 44) ? nav.classList.add('scroll') : nav.classList.remove('scroll');
})


// develop nanti
// window.addEventListener('scroll', event => {
//     let navlinks = document.querySelectorAll('nav ul li a');
//     let top = window.scrollY;

//     navlinks.forEach(link => {
//         let sect = document.querySelector(link.hash);

//         if (
//             sect.offsetTop <= top && sect.offsetTop + sect.offsetHeight > top
//         ) {
//             link.classList.add('active');
//         } else {
//             link.classList.remove('active');
//         }
//     })
// })

// develop nanti
// message
// let sendbttn = document.getElementById('btn');
// let overlay = document.getElementById('overlay');
// sendbttn.addEventListener('click', () => {
//     overlay.style.display = 'grid';
//     overlay.classList.add('animation-overlay');
//     console.log("hai");
// })