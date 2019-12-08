document.addEventListener('DOMContentLoaded', function(){
  console.log('Dom is loaded')
  selectElements()
})

function selectElements() {
  const addButton = document.querySelector(".add")
  addButton.addEventListener("click", addMember)
  const submitButton = document.querySelector("button[type=submit]")
  submitButton.addEventListener("click", submitForm)
}

function ageValue(){
  const ageForm = document.querySelector("input[name=age]")
  const age = ageForm.value
  const ageNumber = Number(age)
  return ageNumber
}

function relationshipValue(){
  const relationshipMenu = document.querySelector("select[name=rel]")
  const relationship = relationshipMenu.value
  console.log(relationship)
  return relationship
}

function addMember(event) {
  event.preventDefault()
  if (ageValue() === Number || ageValue() > 0)
    (console.log("member added"))
  else alert("Please verify that the age is a number greater than 0")
}

function submitForm(event) {
  event.preventDefault()
  console.log("submitting")
}
