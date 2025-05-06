import {patList} from './patAdder.js';
let visitList = [];
let holdingStation = [];
let holdingString = ``;



export function addVisit(){
  holdingStation = []; //same as addpat    
  holdingStation.push(document.getElementById("patSelect").value);
  holdingStation.push(document.getElementById("reasonSelect").value);
  holdingStation.push(document.getElementById("visitDate").value);
  holdingStation.push(document.getElementById("symptoms").value);
  holdingStation.push(document.getElementById("diagnosis").value);
  holdingStation.push(document.getElementById("medPerscribed").value);
  holdingStation.push(document.getElementById("notes").value);
  if (holdingStation.some(item => !item)) { //checks for unfilled forms
    alert("Please fill all fields before adding a visit.");
    return;
  }
  visitList.push(holdingStation);
  const container = document.getElementById("visitAdder")
  const inputs = container.querySelectorAll('input, select, textarea');
    inputs.forEach(x => {
        if (x.type === 'checkbox' || x.type === 'radio') { //resets boxes
          x.checked = false;
        } else {
          x.value = '';
       }
    });
  alert(`Visit added for patient: ${document.getElementById("patSelect").value}`)
  return 1;
}

export function viewHistory(){
  document.getElementById("visitAdder").style.display = "none"; //hiding the addvisit form and showing the viewhistory div
  document.getElementById("viewHistory1").style.display = "none";
  document.getElementById("backVisit1").style.display = "block";
  document.getElementById("viewHistoryBox").style.display = "block";
  holdingString = ``;
  //resets html 
  document.getElementById("viewHistoryBox").innerHTML = ` 
    <h3>Visit History</h3> 
          <table border="1" style="width: 100%; border-collapse: collapse;">
            <thead>
              <tr>
                <th>Patient Name</th>
                <th>Date of Visit</th>
                <th>Reason for Visit</th>
                <th>Summary of Visit</th>
              </tr>
              <tbody id = "visitTableBody" style="text-align: center;"></tbody>
            </thead>
         </table>`;
  visitList.forEach(function(visit){ //ref searchpat
    holdingString += `<tr>`;
    holdingString += `<td>${visit[0]}</td>`
    holdingString += `<td>${visit[2]}</td>`
    holdingString += `<td>${visit[1]}</td>`
    holdingString += `
    <td><small>
      <strong>Symptom(s):</strong> ${visit[3]}
      <br>
      <strong>Diagnosis:</strong> ${visit[4]}
      <br>
      <strong>Perscribed Medicine:</strong> ${visit[5]}
      <br>
      <strong>Additional notes:</strong> ${visit[6]}
    </small></td>`
    holdingString += `</tr>`
  });
  document.getElementById("visitTableBody").innerHTML = holdingString;
}

export function visitHome(){ //returns to addvisit homescreen
  updateList();
  document.getElementById("visitAdder").style.display = "block";
  document.getElementById("viewHistory1").style.display = "block";
  document.getElementById("backVisit1").style.display = "none";
  document.getElementById("viewHistoryBox").style.display = "none";
}

export function updateList(){ // resets patSelect dropdown options
  let x = document.getElementById("patSelect");
  while (x.options.length > 0) {
    x.remove(0);
  }
  let option = document.createElement("option");
  option.textContent = "None";
  option.value = "";
  x.appendChild(option);
  
  patList.forEach(function(pat){ //adds dropdown option for each patient name
    option = document.createElement("option"); 
    option.textContent = pat[0] + " " + pat[1]; 
    x.appendChild(option);
  });
  
  return 1;
}
