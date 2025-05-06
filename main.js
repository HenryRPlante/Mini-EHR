import { addPatient, updatePatient } from './patAdder.js';
import { viewPatients, patientView, patientEdit, patientDelete, searchPatient } from './patViewer.js';
import { addVisit,updateList,viewHistory,visitHome } from './addVisit.js';

//adds patient then updates dropdown list (in addvisit)
document.getElementById("addPat").addEventListener("click",function(){
  addPatient();
  updateList();
});
//updates visit list
document.getElementById("addVisitButton").addEventListener("click",function(){
  addVisit();
});
//views visit history
document.getElementById("viewHistory1").addEventListener("click",function(){
  viewHistory();
});
//opens view panel for patients
document.getElementById("viewButton").addEventListener("click",function(){
  viewPatients();
});
//returns to addvisit home screen
document.getElementById("backVisit1").addEventListener("click",function(){
  visitHome();
});

//each of which searchs for buttons of specific classes
document.addEventListener("DOMContentLoaded", () => {
  document.body.addEventListener("click", event => {
    if (event.target.classList.contains("searchBTN")) {
      searchPatient();
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
  document.body.addEventListener("click", event => {
    if (event.target.classList.contains("backBTN")) {
      viewPatients();
    }
  });
});
document.addEventListener("DOMContentLoaded", () => {
  document.body.addEventListener("click", event => {
    if (event.target.classList.contains("savePat")) {
      updatePatient(event.target.dataset.index); 
      updateList();
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
  document.body.addEventListener("click", event => {
    if (event.target.classList.contains("viewBTN")) {
      const index = event.target.dataset.index;
      patientView(index);
    }
  });
});
document.addEventListener("DOMContentLoaded", () => {
  document.body.addEventListener("click", event => {
    if (event.target.classList.contains("editBTN")) {
      const index = event.target.dataset.index;
      patientEdit(index);
    }
  });
});
document.addEventListener("DOMContentLoaded", () => {
  document.body.addEventListener("click", event => {
    if (event.target.classList.contains("delBTN")) {
      const index = event.target.dataset.index;
      patientDelete(index);
      updateList();
    }
  });
});
