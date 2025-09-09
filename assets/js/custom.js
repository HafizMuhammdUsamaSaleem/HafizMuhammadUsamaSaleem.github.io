document.addEventListener("DOMContentLoaded", function () {
    const viewMoreBtn = document.getElementById("view-more-btn");
    const moreProjects = document.getElementById("more-projects");

    if (viewMoreBtn && moreProjects) {
        viewMoreBtn.addEventListener("click", function () {
            moreProjects.style.display = "flex"; // Or "block" if preferred
            this.style.display = "none";
        });
    }
});
