// let animateText = document.querySelector('#animate-text')
// let isAnimating = false
// let lastScrollPosition = 0

// const animateScroll = ()=>{
//     const topBox = animateText.getBoundingClientRect().top
//     const triggerAt = window.innerHeight / 2

//     if(!isAnimating){
//         if(topBox < triggerAt && window.scrollY > lastScrollPosition){
//             isAnimating = true
//             animateText.classList.add('animate')
//         } else if(topBox > triggerAt && window.scrollY < lastScrollPosition){
//             isAnimating = false
//             animateText.classList.remove('animate')
//         }
//     }

//     lastScrollPosition = window.scrollY
// }

// window.addEventListener('scroll', animateScroll)

// let animateText = document.querySelector('#animate-text')

// const options = {
//     root: null,
//     rootMargin: '0px',
//     threshold: 1
// }

// const observer = new IntersectionObserver(function(entries, observer){
//     entries.forEach(entry =>{
//         if(entry.isIntersecting){
//             animateText.classList.add('animate')
//         } else{
//             animateText.classList.remove('animate')
//         }
//     })
// }, options)

// observer.observe(animateText)