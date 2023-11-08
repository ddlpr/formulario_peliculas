const form = document.querySelector('#formulario');
const inputTitle = document.querySelector("#titulo");
const inputYear = document.querySelector("#anio");
const inputDuration = document.querySelector("#duracion");
const inputGenre = document.querySelector("#genero");
const inputDirector = document.querySelector("#director");
const textAreaSynopsis = document.querySelector("#sinopsis");
const table = document.querySelector('.table');

let editingRow = null;

form.addEventListener('submit', (e) => {
  e.preventDefault();

  let formData = getFormData();

  if (!editingRow) {
    insertRecord(formData);
  } else {
    updateRecord(formData)
  }
  e.target.reset();
  editingRow = null;
});

function getFormData() {
  return {
    titulo: inputTitle.value,
    anio: inputYear.value,
    duracion: inputDuration.value,
    genero: inputGenre.value,
    director: inputDirector.value,
    sinopsis: textAreaSynopsis.value,
  };
}

function insertRecord(formData) {
  let row = table.insertRow();
  for (const key in formData) {
    let cell = row.insertCell();
    cell.textContent = formData[key];
  }
  let cell = row.insertCell();
  cell.innerHTML = `<button type="button" class="btn btn-success" onclick="fillEditForm(${row.rowIndex})"><i class="bi bi-pencil-fill"></i></button>`;

  cell = row.insertCell();
  cell.innerHTML = `<button type="button" class="btn btn-danger"><i class="bi bi-trash3-fill"></i></button>`;
}

function fillEditForm(rowIndex) {
  editingRow = table.rows[rowIndex];
  inputTitle.value = editingRow.children[0].textContent;
  inputYear.value = editingRow.children[1].textContent;
  inputDuration.value = editingRow.children[2].textContent;
  inputGenre.value = editingRow.children[3].textContent;
  inputDirector.value = editingRow.children[4].textContent;
  textAreaSynopsis.value = editingRow.children[5].textContent;
}

function updateRecord(formData) {
  editingRow.children[0].textContent = formData.titulo;
  editingRow.children[1].textContent = formData.anio;
  editingRow.children[2].textContent = formData.duracion;
  editingRow.children[3].textContent = formData.genero;
  editingRow.children[4].textContent = formData.director;
  editingRow.children[5].textContent = formData.sinopsis;
}
