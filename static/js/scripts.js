// Sidebar Toggle Logic
document.getElementById("menu-toggle").addEventListener("click", function () {
    const wrapper = document.getElementById("wrapper");
    wrapper.classList.toggle("toggled");
});

// Add hover effects and highlight the active state on menu items
document.querySelectorAll('.list-group-item').forEach(item => {
    item.addEventListener('mouseover', function () {
        this.style.backgroundColor = "#00509e";
    });
    item.addEventListener('mouseout', function () {
        if (!this.classList.contains('active')) {
            this.style.backgroundColor = "#002f6c";
        }
    });

    item.addEventListener('click', function () {
        document.querySelectorAll('.list-group-item').forEach(i => {
            i.classList.remove('active');
            i.style.backgroundColor = "#002f6c";
        });
        this.classList.add('active');
        this.style.backgroundColor = "#ffcc00";
    });
});

// Close the sidebar by default on page load
window.onload = function () {
    document.getElementById("wrapper").classList.add("toggled");
};

// Project explore button logic (safe)
const projectExploreBtn = document.getElementById('project-explore-btn');
if (projectExploreBtn) {
    projectExploreBtn.addEventListener('click', function () {
        const selectedOption = document.querySelector('select').selectedOptions[0];
        const url = selectedOption.getAttribute('data-url');

        if (url) {
            window.open(url, '_blank');
        }
    });
}
