
const accordion = document.getElementsByClassName('accordion');

for (i = 0; i < accordion.length; i++) {
    accordion[i].addEventListener('click', function() {
        this.classList.toggle('active');
        let panel = this.nextElementSibling;
        if (panel.style.display === 'block') {
            panel.style.display = 'none';
        } else {
            panel.style.display = 'block';
        }
    });
}


// for (i = 0; i < accordion.length; i++) {
//     accordion[i].addEventListener('click', function() {
//         this.classList.toggle('active');
//         let panel = this.nextElementSibling;
//         if (panel.style.display === 'block') {
//             panel.style.display = 'none';
//         } else if (panel.style.display === 'none') {
//             let active = document.querySelectorAll('.accordion.active');
//             console.log(active);
//             for (let j = 0; j < active.length; j++) {
//                 active[j].classList.remove("active");
//                 active[j].panel.style.display = 'none';
//             }
//             panel.style.display = 'block';
//         }
//     });
// }
