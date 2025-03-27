document.addEventListener("DOMContentLoaded", function () {
    // Smooth scrolling
    const links = document.querySelectorAll("nav ul li a");
    links.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);
            window.scrollTo({
                top: targetElement.offsetTop - 150,
                behavior: "smooth"
            });
        });
    });

    // Fade-in effect saat scroll
    const sections = document.querySelectorAll("section");
    function fadeInOnScroll() {
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            if (sectionTop < windowHeight - 300) {
                section.classList.add("visible");
            }
        });
    }
    window.addEventListener("scroll", fadeInOnScroll);
    fadeInOnScroll(); // Jalankan saat halaman dimuat

    // Toggle menu untuk mobile (opsional)
    const nav = document.querySelector("nav ul");
    const menuButton = document.createElement("button");
    menuButton.innerText = "☰";
    menuButton.classList.add("menu-button");
    document.querySelector("nav").prepend(menuButton);

    menuButton.addEventListener("click", function () {
        nav.classList.toggle("show");
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const commentForm = document.getElementById("commentForm");
    const commentInput = document.getElementById("commentInput");
    const commentList = document.getElementById("commentList");
    let comments = [];

    commentForm.addEventListener("submit", function (e) {
        e.preventDefault();
        const newComment = commentInput.value.trim();
        if (newComment !== "") {
            comments.push(newComment);
            commentInput.value = "";
            displayComments();
        }
    });

    function displayComments() {
        commentList.innerHTML = "";
        comments.forEach(comment => {
            const commentElement = document.createElement("p");
            commentElement.textContent = comment;
            commentList.appendChild(commentElement);
        });
    }
});

