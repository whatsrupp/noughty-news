function clickButton(id){
  var button = document.getElementById(id);
  if (button.tagName != 'BUTTON'){
    throw new Error('Eff Off, element found is not a button');
  }else{
    button.click();
  }
}
function clickSubmit(id){
  var formButton = document.getElementById(id);
  if(formButton.tagName != 'INPUT' || formButton.type !='submit'){
    throw new Error('Stuff yourself, this is not a form button');
  }else{
    formButton.click();
  }
}
function fillInTextBox(id, text){
  var textBox = document.getElementById(id);
  if((textBox.tagName == 'INPUT' && textBox.type == 'text')|| textBox.tagName == 'TEXTAREA'){
    textBox.value = text;
  }else{
    throw new Error("Nearly there! But unfortunately this isn't a text field :(");
  }
}
function clickListItem(id) {
  link = document.getElementById(id);
  if (link.tagName != 'li') {
    throw new Error("Id is not for an element in the list")
  } else {
    link.click();
  }
}
