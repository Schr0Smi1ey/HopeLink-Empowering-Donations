// to get input field value in number format
function getInputFieldValueByID(id) {
    const element = document.getElementById(id);
    const balance = parseFloat(element.value);
    element.value = '';
    return balance;
}

// to get text field value in number format
function getTextFieldValueByID(id) {
    const element = document.getElementById(id).innerText;
    const balance = parseFloat(element);
    console.log(balance);
    return balance;
}

// to set text field value
function setTextFieldValueByID(id, amount) {
    const element = document.getElementById(id);
    element.innerText = amount;
}

// to show to successful donation modal
function successfulDonation() {
    document.getElementById('successful-donation').showModal();
}

// to toggle a element visibility
function hideShow(id) {
    const element = document.getElementById(id);
    if (element.classList.contains('hidden')) {
        element.classList.remove('hidden');
    }
    else {
        element.classList.add('hidden');
    }
}

// Function to set attributes and inner content of newly donation records
function historyMakeHelper(newHistory, idName, serial, content) {
    const element = newHistory.querySelector(`#${idName}`);
    element.setAttribute('id', `${idName}-${serial}`);
    if(content !== '')
        newHistory.querySelector(`#${idName}-${serial}`).innerText = content;
}