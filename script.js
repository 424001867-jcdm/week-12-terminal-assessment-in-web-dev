document.addEventListener('DOMContentLoaded', function () {
    const submissionForm = document.getElementById('submissionForm');
    const clientName = document.getElementById('clientName');
    const clientEmail = document.getElementById('clientEmail');
    const clientMessage = document.getElementById('clientMessage');
    const formSuccessAlert = document.getElementById('formSuccessAlert');

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    submissionForm.addEventListener('submit', function (event) {
        event.preventDefault();

        let isFormValid = true;

        if (clientName.value.trim() === '') {
            clientName.classList.add('is-invalid');
            clientName.classList.remove('is-valid');
            isFormValid = false;
        } else {
            clientName.classList.add('is-valid');
            clientName.classList.remove('is-invalid');
        }

        if (!emailRegex.test(clientEmail.value.trim())) {
            clientEmail.classList.add('is-invalid');
            clientEmail.classList.remove('is-valid');
            isFormValid = false;
        } else {
            clientEmail.classList.add('is-valid');
            clientEmail.classList.remove('is-invalid');
        }

        if (clientMessage.value.trim() === '') {
            clientMessage.classList.add('is-invalid');
            clientMessage.classList.remove('is-valid');
            isFormValid = false;
        } else {
            clientMessage.classList.add('is-valid');
            clientMessage.classList.remove('is-invalid');
        }

        if (isFormValid) {
            formSuccessAlert.classList.remove('d-none');
            
            submissionForm.reset();
            clientName.classList.remove('is-valid');
            clientEmail.classList.remove('is-valid');
            clientMessage.classList.remove('is-valid');

            setTimeout(function() {
                formSuccessAlert.classList.add('d-none');
            }, 5000);
        } else {
            formSuccessAlert.classList.add('d-none');
        }
    });
});