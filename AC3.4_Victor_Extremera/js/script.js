const sumbitButton = document.getElementById('button-submit');

sumbitButton.addEventListener('click', function (event) {

    event.preventDefault(); // evita que el formulari s'envia, si ho fa, donaria error

    if(validarObligatoris()) {
        validarEmail();
    }
});
            
function validarObligatoris() {
    const obligatoris = document.querySelectorAll('.obligatori');
    let isValid = true; // Asumimos que todo es válido
    let primerObligatorio = null;

    for (let input of obligatoris) {
        if (input.value.trim() === '') {
            input.style.borderColor = 'red';
            if(!primerObligatorio) primerObligatorio = input;
            isValid = false; // Si encuentra algún campo vacío, marca el formulario como no válido
        } else {
            input.style.borderColor = '#9f9f9f';
        }
    }

    if(primerObligatorio) primerObligatorio.focus(); // Encuentra el primer campo obligatorio y le pone focus

    return isValid;
}

function validarContrasenya(){
    const contrasenya = document.getElementById('contrasenya');
    const minLenght = 8;

    let errorMessage = document.getElementById('contrasenya-error');

    if (!errorMessage) {
        errorMessage = document.createElement('p');
        errorMessage.id = 'contrasenya-error';
        errorMessage.style.color = 'red';
        errorMessage.style.fontWeight = 'bold';
        errorMessage.style.fontSize = '12px';
        document.getElementById('div-contrasenya').appendChild(errorMessage);
    }

    if (!contrasenya.value) {
        errorMessage.textContent = 'Camp obligatori';
        contrasenya.focus();
    }
    if (contrasenya.value < minLenght) {
        errorMessage.textContent = "La contrasenya ha de contenir mínim 8 caràcters"
        contrasenya.focus();
    }
}

function validarEmail() {
    const email = document.getElementById('email');
    const emailInput = email.value;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(com|es|net|cat)$/;

    // Buscar si ya existe un mensaje de error
    let errorMessage = document.getElementById('email-error');

    // Si no existe, crearlo
    if (!errorMessage) {
        errorMessage = document.createElement('p');
        errorMessage.id = 'email-error';
        errorMessage.style.color = 'red';
        errorMessage.style.fontWeight = 'bold';
        errorMessage.style.fontSize = '12px';
        document.getElementById('div-email').appendChild(errorMessage);
    }

    // Validar el email
    if (emailRegex.test(emailInput)) {
        errorMessage.textContent = '';
        return;
    } else if (!emailInput) {
        errorMessage.textContent = 'Camp obligatori';
        email.focus();
    } else {
        errorMessage.textContent = 'Format d\'email incorrecte. Ex: PerePi@exemple.cat';
        email.focus();
    }
}


function generarOpcions_DIA() {
    const select = document.getElementById('select-dia');
    const dies = 31;
    
    for (let i = 1; i <= dies; i++) {
        let option = document.createElement('option');
        option.value = i;
        option.textContent = i;
        select.appendChild(option);
    }
    
}

function generarOpcions_MES() {
    const select = document.getElementById('select-mes');
    const mesos = 12;
    
    for (let i = 1; i <= mesos; i++) {
        let option = document.createElement('option');
        option.value = i;
        option.textContent = i;
        select.appendChild(option);
    }
    
}

function generarOpcions_ANY() {
    const select = document.getElementById('select-any');
    const startYear = 1960;
    const actualYear = new Date().getFullYear();

    for (let year = startYear -1; year <= actualYear; year++) {

        if (year < startYear) { 
            let option = document.createElement('option');
            option.value = "Abans...";
            option.textContent = "Abans...";
            select.appendChild(option);
        }

        let option = document.createElement('option');
        option.value = year;
        option.textContent = year;
        select.appendChild(option);
    }
}

generarOpcions_DIA();
generarOpcions_MES();
generarOpcions_ANY();