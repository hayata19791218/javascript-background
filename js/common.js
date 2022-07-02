const wrap = document.querySelectorAll('.wrap');
const wrapText = document.querySelectorAll('.wrap-text');

for(let i = 0;i < wrap.length;i++){

    wrap[i].addEventListener('mouseover', function() {
        wrapText[i].classList.add('background');
    });
    
    wrap[i].addEventListener('mouseleave', function() {
        wrapText[i].classList.remove('background');
    });
}