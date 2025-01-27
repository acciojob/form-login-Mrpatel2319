function getFormvalue(event) {
    event.preventDefault(); // Prevent the form from submitting

    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;

    alert(`${firstName} ${lastName}`);
}

document.getElementById('nameForm').addEventListener('submit', getFormvalue);