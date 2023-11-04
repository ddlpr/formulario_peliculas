const form = document.querySelector('#formulario');
const inputFirstName = document.querySelector('#nombre');
const inputLastName = document.querySelector('#apellido');
const inputEmail = document.querySelector('#correo');
const inputAge = document.querySelector('#edad');
const inputHobbies = document.querySelector('#hobbies');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  let student = {
    name: inputFirstName.value,
    lastname: inputLastName.value,
    email: inputEmail.value,
    age: inputAge.value,
    hobbies: inputHobbies.value,
  };

  addTable(student);
  e.target.reset();
});

function addTable(student) {
  let tbody = document.querySelector('#tableBody')
  let row = document.createElement('tr');

  for (let key in student) {
    let cell = document.createElement('td');
    cell.textContent = student[key];
    row.append(cell);
  }

  let td = document.createElement('td');
  let button = document.createElement ('button');
  button.textContent = "Eliminar";
  button.onclick = function() {
    tbody.remove(row);
  }
  td.append(button);
  row.append(td)
  tbody.append(row);
}
