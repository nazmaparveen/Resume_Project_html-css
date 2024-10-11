// Simple functionality to toggle active link in the navigation
document.querySelectorAll('#header nav ul li a').forEach(link => {
    link.addEventListener('click', function() {
        document.querySelectorAll('#header nav ul li a').forEach(el => el.classList.remove('active'));
        this.classList.add('active');
    });
});
