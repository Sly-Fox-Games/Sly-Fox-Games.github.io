document.addEventListener("DOMContentLoaded", function () {
    const headerHTML = `
<header>
    <a href="index.html" class="logo-link" style="text-decoration: none;">
        <img src="img/slyfoxlogo.png" alt="Sly Fox Games" height="40" style="display: block;">
    </a>
    <nav>
        <a href="index.html">Home</a>
        <a href="impressum.html">Impressum</a>
        <a href="privacy-policy.html">Privacy Policy</a>
    </nav>
</header>
`;
    document.getElementById('header-placeholder').innerHTML = headerHTML;
});
