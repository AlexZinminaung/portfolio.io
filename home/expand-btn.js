
let btnLearn = document.getElementById("learn-more-btn");
let section = document.getElementById("expand-div");
let sectionStyle = window.getComputedStyle(section);

const openSection = () => {
    if (sectionStyle.height === '0px'){
        section.style.height = '200px'
    }

    else {
        section.style.height = '0px';
    }
}


btnLearn.addEventListener('click', openSection);