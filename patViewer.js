import { patList } from './patAdder.js';
let searchList = []; 
export function searchPatient(){
  searchList = [];
  const searchName = document.getElementById("patSearch").value;
  patList.forEach(function(pat){ //if search term is INCLUDED meaning it isnt too sensitive
    if(pat[0].toLowerCase().includes(searchName.toLowerCase()) || pat[1].toLowerCase().includes(searchName.toLowerCase())){
      searchList.push(pat); //adds patient data to it
    }
  });
  //updates html to default look
  document.getElementById("viewBox").innerHTML = `
  <h3>Results for <strong>"${searchName}"</strong></h3> 
          <table id = "viewBox1" border="1" style="width: 100%; border-collapse: collapse;">
            <thead>
              <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>DOB</th>
                <th>Gender</th>
                <th>Actions</th>
              </tr>
              <tbody id = "patTableBody" style="text-align: center;"></tbody>
            </thead>
          </table>`
      let holdingSpace = `<tr>`;
  for (let i = 0; i<searchList.length; i++) { //adds rows and columns with pat data <tr> is row <td> is column
    holdingSpace += `<td>${searchList[i][0]}</td>`;
    holdingSpace += `<td>${searchList[i][1]}</td>`;
    holdingSpace += `<td>${searchList[i][2]}</td>`;
    holdingSpace += `<td>${searchList[i][3]}</td>`;
    holdingSpace += `
    <td>
    <button id = "pat${i}Delete" class="viewBTN" data-index="${i}">View</button>
    <button id = "pat${i}Edit" class="editBTN" data-index="${i}">Edit</button>
    <button id = "pat${i}Delete" class="delBTN" data-index="${i}">Delete</button>
    </td>`
    holdingSpace += `</tr>`;
  }
  document.getElementById("patTableBody").innerHTML = holdingSpace;
  document.getElementById("viewBox").innerHTML += `<br><button class = "backBTN">Back</button>`; //back button to for returning to home screen of viewpatients
  return 1;    
      
}

export function viewPatients(){
  //resets html to default view
  document.getElementById("viewBox").innerHTML = `
  <input id = "patSearch" type = "text" placeholder = "Enter first or last name"><button class = "searchBTN">Search</button>
    <h3>Patient List</h3>
          <table id = "viewBox1" border="1" style="width: 100%; border-collapse: collapse;">
            <thead>
              <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>DOB</th>
                <th>Gender</th>
                <th>Actions</th>
              </tr>
              <tbody id = "patTableBody" style="text-align: center;"></tbody>
            </thead>
          </table>`
  let holdingSpace = `<tr>`; 
  for (let i = 0; i<patList.length; i++) { //ref searchpatient's loop (copy paste)
    holdingSpace += `<td>${patList[i][0]}</td>`;
    holdingSpace += `<td>${patList[i][1]}</td>`;
    holdingSpace += `<td>${patList[i][2]}</td>`;
    holdingSpace += `<td>${patList[i][3]}</td>`;
    holdingSpace += `
    <td>
    <button id = "pat${i}Delete" class="viewBTN" data-index="${i}">View</button>
    <button id = "pat${i}Edit" class="editBTN" data-index="${i}">Edit</button>
    <button id = "pat${i}Delete" class="delBTN" data-index="${i}">Delete</button>
    </td>`
    holdingSpace += `</tr>`;
  }
  document.getElementById("patTableBody").innerHTML = holdingSpace;
  return 1;
}

export function patientView(x){ //updates html to table displaying specific pat info
  document.getElementById("viewBox").innerHTML = `
  <h3>Patient List</h3>
          <table id = "viewBox1" border="1" style="width: 100%; border-collapse: collapse;">
  <table border="1" style="width: 100%; border-collapse: collapse;">
    <caption>Patient data for ${patList[x][0]} ${patList[x][1]}</caption>
    <tr><td><strong>Name:</strong></td><td>${patList[x][0]} ${patList[x][1]}</td></tr>
    <tr><td><strong>DOB:</strong></td><td>${patList[x][2]}</td></tr>
    <tr><td><strong>Gender:</strong></td><td>${patList[x][3]}</td></tr>
    <tr><td><strong>Email:</strong></td><td>${patList[x][4]}</td></tr>
    <tr><td><strong>Phone number:</strong></td><td>${patList[x][5]}</td></tr>
    <tr><td><strong>Conditions:</strong></td><td>${patList[x][6]}</td></tr>
    <tr><td><strong>Actions</strong></td><td><button class = "backBTN">Back</button></td></tr>
  </table>
  </table>
`;

  return 1;
} 

export function patientEdit(x){ //updates to a form just like addPatient that takes new inputs for updating
  document.getElementById("viewBox").innerHTML = `
  <h3>Patient List</h3>
      <table id = "viewBox1" border="1" style="width: 100%; border-collapse: collapse;">
        <div>
          <input id = "ufn" type = "text" placeholder = "First Name" value = "${patList[x][0]}" required> <br>
          <input id = "uln" type = "text" placeholder = "Last Name" value = "${patList[x][1]}" required> <br>
          Date of Birth: <input id = "udob" type = "date" value = "${patList[x][2]}" required> <br>
          Gender: <select id="ugender" required>
            <option value="">None</option>
            <option value="Male" ${patList[x][3] === 'Male' ? 'selected' : ''}>Male</option>
            <option value="Female" ${patList[x][3] === 'Female' ? 'selected' : ''}>Female</option>
          </select> <br>
          <input id = "uemail" type = "email" placeholder="Email" value = "${patList[x][4]}" required> <br>
          <small>Format:123-456-7890</small><input id = "uphone" type = "tel" value = "${patList[x][5]}" placeholder="Phone number with dashes (optional)" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}">
         <textarea id="uconditions" placeholder="Medical conditions (please list)" required>${patList[x][6]}</textarea>
          <button class="savePat" data-index = "${x}">Update Changes</button> <button class = "backBTN">Back</button>
        </div>
        </table>
        
    `
  return 1;
} 
export function patientDelete(x){ //removes clicked element from patlist then updates screen
  patList.splice(x,1);
  viewPatients();
  return 1;
}
