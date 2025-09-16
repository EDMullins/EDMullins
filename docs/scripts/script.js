document.addEventListener("DOMContentLoaded", () => {
    console.log("document succesfully loaded");
    // Apply saved theme
    applySavedTheme();
    document.getElementById('darkModeToggle').addEventListener('click', toggleMode);
});

// Toggle between light and dark mode/ only called after applySavedTheme()
function toggleMode() {
    console.log('in toggleMode()')
    const theme = localStorage.getItem('theme');

    // if theme is light, switch to dark, and vice versa
    if (theme === 'light') {
        setDarkTheme();
        // uses local storage or cookies to remember theme preference
        localStorage.setItem('theme', 'dark');
    } 
    else {
        setLightTheme();
        localStorage.setItem('theme', 'light');
    }
    console.log('Theme set to: ' + localStorage.getItem('theme'));
    return;
}

//Allows theme to persist across pages
function applySavedTheme() {
    const theme = localStorage.getItem('theme');
    console.log('Theme from local storage: ' + theme);

    if (theme === 'dark') {
        setDarkTheme();
    }
    //if theme is null or light, set to light
    else {
        setLightTheme();
    }
    return;
}

function setDarkTheme() {
    //icon
    document.getElementById('darkModeToggle').classList.replace('bi-moon-fill', 'bi-sun-fill');
    //colors
    document.documentElement.style.setProperty('--primary-color', '#bb86fc');
    document.documentElement.style.setProperty('--secondary-color', '#121212');
    document.documentElement.style.setProperty('--primary-color-hover', '#3700b3');
    document.documentElement.style.setProperty('--background-color', '#2e2e2eff');
    document.documentElement.style.setProperty('--text-color', '#ffffff');
    document.documentElement.style.setProperty('--card-bg', '#222222');
    document.documentElement.style.setProperty('--list-bg', '#222222');
    document.documentElement.style.setProperty('--opacity-bg', 'rgba(60, 60, 60, 0.75)');
    //imgs
    document.documentElement.style.setProperty('--bg-img', "url('../imgs/landscape4.jpg')");
    const img1 = document.getElementById('img1');
    const img2 = document.getElementById('img2');
    const img3 = document.getElementById('img3');
    // Get the current URL
    let url = window.location.href;

    // Get only the file name from the URL
    url = url.substring(url.lastIndexOf('/') + 1);
    console.log(url);

    //sometimes the url is just blank instead of index.html
    if (url === "index.html" || url === "") {
        if (img1) {
            img1.src = "imgs/landscape4.jpg";
        }
        if (img2) {
            img2.src = "imgs/landscape5.jpg";
        }
        if (img3) {
            img3.src = "imgs/landscape6.jpg";
        }
    }
    else {
        if (img1) {
            img1.src = "../imgs/landscape4.jpg";
        }
        if (img2) {
            img2.src = "../imgs/landscape5.jpg";
        }
        if (img3) {
            img3.src = "../imgs/landscape6.jpg";
        }
    }
    console.log('in setDarkTheme()');
    return;
}

function setLightTheme() {
    //icon
    document.getElementById('darkModeToggle').classList.replace('bi-sun-fill', 'bi-moon-fill');
    //changes colors
    document.documentElement.style.setProperty('--primary-color', '#0B6E4F');
    document.documentElement.style.setProperty('--secondary-color', '#393939');
    document.documentElement.style.setProperty('--primary-color-hover', '#094d36');
    document.documentElement.style.setProperty('--background-color', '#fffbf4');
    document.documentElement.style.setProperty('--text-color', '#222222');
    document.documentElement.style.setProperty('--card-bg', '#ffffff');
    document.documentElement.style.setProperty('--list-bg', '#ffffff');
    document.documentElement.style.setProperty('--opacity-bg', 'rgba(255, 255, 255, 0.75)');
    //changes imgs
    document.documentElement.style.setProperty('--bg-img', "url('../imgs/landscape3.jpg')");
    //have to change each img individually if they exist on the page
    const img1 = document.getElementById('img1');
    const img2 = document.getElementById('img2');
    const img3 = document.getElementById('img3');
    // Get the current URL
    let url = window.location.href;
    
    // Get only the file name from the URL
    url = url.substring(url.lastIndexOf('/') + 1);
    console.log(url);

    if (url === "index.html" || url === "#" || url === "") {
        if (img1) {
            img1.src = "imgs/landscape1.jpg";
        }
        if (img2) {
            img2.src = "imgs/landscape2.jpg";
        }
        if (img3) {
            img3.src = "imgs/landscape3.jpg";
        }
    }
    else {
        if (img1) {
            img1.src = "../imgs/landscape1.jpg";
        }
        if (img2) {
            img2.src = "../imgs/landscape2.jpg";
        }
        if (img3) {
            img3.src = "../imgs/landscape3.jpg";
        }
    }
    console.log('in setLightTheme()');
    return;
}