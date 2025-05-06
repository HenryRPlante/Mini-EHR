export let patList = []; //list of patient data
let holdingStation = []; //holding area used to update patList as a 2d array
let able = true; //true if able to add patient (checks for empty fields)
export function addPatient(){
  const container = document.getElementById('patAdder');
  const requiredElements = container.querySelectorAll('[required]'); //all req elements in the form
  able = true;
  requiredElements.forEach(x => { //if any req element is empty: cannot add pat
    const value = (x.type === 'checkbox' || x.type === 'radio')
    ? x.checked 
    : x.value?.trim();

    if (!value) {
      able = false;
    }
  });


  if(able){
    holdingStation = []; //adds each element one by one to holdingStation which gets pushed to patList
    holdingStation.push(document.getElementById("fn").value);
    holdingStation.push(document.getElementById("ln").value);
    holdingStation.push(document.getElementById("dob").value);
    holdingStation.push(document.getElementById("gender").value);
    holdingStation.push(document.getElementById("email").value);
    if(document.getElementById("phone").value != ""){ //since phone num is optional, if listed it works if not "no phone number listed"
      holdingStation.push(document.getElementById("phone").value);
    }else{
      holdingStation.push("No phone number listed");
    }
    holdingStation.push(document.getElementById("conditions").value);
    patList.push(holdingStation);
    
    const inputs = container.querySelectorAll('input, select, textarea'); //clears form
    inputs.forEach(x => {
        if (x.type === 'checkbox' || x.type === 'radio') {
          x.checked = false;
        } else {
          x.value = '';
       }
    });
    alert("Patient added")
    return 1;
  }else{
    alert("One or more fields is empty");
    return 1;
  }
  
}

export function updatePatient(x){
  holdingStation = []; //copy paste from before but using different html components as it is in the view patients div
    holdingStation.push(document.getElementById("ufn").value);
    holdingStation.push(document.getElementById("uln").value);
    holdingStation.push(document.getElementById("udob").value);
    holdingStation.push(document.getElementById("ugender").value);
    holdingStation.push(document.getElementById("uemail").value);
    if(document.getElementById("uphone").value != ""){
      holdingStation.push(document.getElementById("uphone").value);
    }else{
      holdingStation.push("No phone number listed");
    }
    holdingStation.push(document.getElementById("uconditions").value);
    patList[x] = holdingStation;
    alert("patient data updated")
    return 1;
}
