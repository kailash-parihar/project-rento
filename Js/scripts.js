/**
 * Fetch header.html and insert its content into #header div
 */
fetch("../components/header.html")
    .then((response) => response.text())
    .then((data) => {
        document.getElementById("header").innerHTML = data;
    })
    .catch((error) => console.error("Error loading header:", error));

/**
* Fetch footer.html and insert its content into #footer div
*/
fetch("../components/footer.html")
    .then((response) => response.text())
    .then((data) => {
        document.getElementById("footer").innerHTML = data;
    })
    .catch((error) => console.error("Error loading footer:", error));

/**
 * Show Toggle Menu Button on small screens
 */
function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('show');
}

