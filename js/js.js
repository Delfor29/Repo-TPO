let cad = `
<nav>
    <input type="checkbox" id="show-menu">
    <label for="show-menu" class="menu-icon"><i class="fas fa-bars"></i></label>
    <div class="content">
        <div class="logo"><a href="index.html"><img src="img/Healthy-logo.png" alt="Centro de diagnostico Healthy"></a></div>
        <ul class="links">
            <li><a href="index.html">Inicio</a></li>
            <li><a href="Somos.html">Quienes somos</a></li>
            <li><a href="#">Servicios</a></li>
            <li><a href="#">Sedes</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="Contacto.html">Contacto</a></li>
        </ul>
    </div>
</nav>
`
document.getElementById("wrapper").innerHTML = cad;

cad = `
<div class="copyright">
Copyright - 2022 | Todos los derechos reservados
</div>
<div class="redsocial">
<ul class="social">
    <li class="socialmedia"><a href="https://www.linkedin.com/company/healthy-centro-m%C3%A9dico-y-diagn%C3%B3stico/" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-linkedin"></i></a></li>
    <li class="socialmedia"><a href="https://www.instagram.com/healthy.centromedico/" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-instagram"></i></a></li>
    <li class="socialmedia"><a href="https://www.facebook.com/Centro-M%C3%A9dico-Healthy-100974779170341" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-facebook"></i></a></li>
</ul>
</div>
`
document.getElementById("final").innerHTML = cad;

cad = `
<meta charset="UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Healthy S.A.</title>
<script src="https://kit.fontawesome.com/5896e44278.js" crossorigin="anonymous"></script>
<link rel="stylesheet" href="css/style.css">
<script src="https://kit.fontawesome.com/5896e44278.js" crossorigin="anonymous"></script>
<link rel="shortcut icon" href="img/favicon-02-65x65.png" type="image/x-icon">
`
document.getElementById("ppal").innerHTML = cad;