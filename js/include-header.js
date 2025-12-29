document.addEventListener("DOMContentLoaded", function () {
    const headerHTML = `
<header>
    <div class="header-content">
        <a href="index.html" class="logo-link" style="text-decoration: none;">
            <img src="img/slyfoxlogo.png" alt="Sly Fox Games" height="40" style="display: block;">
        </a>
        <a href="index.html" class="logo-link" style="text-decoration: none;">
            <h3>Sly Fox Games</h3>
        </a>
    </div>
</header>
`;
    document.getElementById('header-placeholder').innerHTML = headerHTML;
});
