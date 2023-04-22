
function mostrarPaginaMenu() {
    document.body.style.background='#F6F6F9';
    document.getElementById('seccion-menu').style.display='block';
    document.getElementById('seccion-inicio').style.display='none';
    document.getElementById('seccion-inscripccionEmpresas').style.display='none';
    document.getElementById('seccion-inscripccionProductos').style.display='none';
    document.getElementById('seccion-motoristas').style.display='none';
    document.getElementById('seccion-ordenes').style.display='none';
}

function mostrarInscripccionEmpresas() {
    document.body.style.background='#0C79FA';
    document.getElementById('seccion-inscripccionEmpresas').style.display='block';
    document.getElementById('seccion-menu').style.display='none';
    document.getElementById('seccion-inicio').style.display='none';

}

function mostrarInscripccionProductos() {
    document.body.style.background='#0C79FA';
    document.getElementById('seccion-inscripccionProductos').style.display='block';
    document.getElementById('seccion-inscripccionEmpresas').style.display='none';
    document.getElementById('seccion-menu').style.display='none';
    document.getElementById('seccion-inicio').style.display='none';

}


function mostrarPaginaMotoristas() {
    document.body.style.background='#F6F6F9';
    document.getElementById('seccion-motoristas').style.display='block';
    document.getElementById('seccion-inscripccionProductos').style.display='none';
    document.getElementById('seccion-inscripccionEmpresas').style.display='none';
    document.getElementById('seccion-menu').style.display='none';
    document.getElementById('seccion-inicio').style.display='none';

}

function mostrarPaginaOrdenes() {
    document.body.style.background='#F6F6F9';
    document.getElementById('seccion-ordenes').style.display='block';
    document.getElementById('seccion-motoristas').style.display='none';
    document.getElementById('seccion-inscripccionProductos').style.display='none';
    document.getElementById('seccion-inscripccionEmpresas').style.display='none';
    document.getElementById('seccion-menu').style.display='none';
    document.getElementById('seccion-inicio').style.display='none';

}