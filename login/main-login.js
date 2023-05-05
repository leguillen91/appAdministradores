
const validarAdmin = () => {

    fetch('http://localhost:8888/admin', {
      method: 'GET',
      headers: {
        "Content-Type": "application/json", //MIME Type
      }
    })
    .then((respuesta) => respuesta.json())
    .then((respuestaAdmin) => {
      console.log(respuestaAdmin);
      admin = respuestaAdmin;


    let email   =document.getElementById('correo').value;
    let contraseña =document.getElementById('contraseña').value;

    let expPassword= /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,15}/;
    let expemail =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;



    
    if (email==null || email.length==0 || expemail.test(email.value)) {
        //  alert('email invalido');
        document.getElementById('correo').style.boxShadow='0 0 5px red';
            console.log('error');
             // acceso= false;

        } else if (contraseña==null  || expPassword.test(contraseña.value)) {
            //  alert('Contraseña invalida');
            document.getElementById('contraseña').style.boxShadow='0 0 5px red';
                console.log('error');
                 // acceso= false;
              
      
        } else if((email == admin[0].correo|| email == admin[1].correo) && (contraseña == admin[0].password|| contraseña == admin[1].password)){
            alert('Usuario Correcto');
              //console.log('Usuario Correcto');
            window.location.href = "http://127.0.0.1:5502/menu/menu.html";
      
      
        } else{
      
                console.log('Usuario o contraseña incorrecto');
            }

 
    }); 
  }




/*

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

*/