const text = "zin min aung, website developer.";
let index = 0;
let isDeleting = false;

function typeWriterloop() {
    const typewriterElement = document.getElementById("typewriter-loop");

    if (!isDeleting) {
        typewriterElement.textContent = text.substring(0, index);
        index++;
        if (index > text.length) {
            isDeleting = true;
            setTimeout(typeWriterloop, 1000); // Pause before deleting
            return;
        }
    } else {
        typewriterElement.textContent = text.substring(0, index);
        index--;
        if (index === 0) {
            isDeleting = false;
        }
    }

    setTimeout(typeWriterloop, isDeleting ? 50 : 100);
}

typeWriterloop();



