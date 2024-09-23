function getInputFieldValueByID(id) {
    const element = document.getElementById(id);
    const balance = parseFloat(element.value);
    element.value = '';
    return balance;
}

function getTextFieldValueByID(id) {
    const element = document.getElementById(id).innerText;
    const balance = parseFloat(element);
    console.log(balance);
    return balance;
}

function setTextFieldValueByID(id, amount) {
    const element = document.getElementById(id);
    element.innerText = amount;
}

function successfulDonation() {
    document.getElementById('successful-donation').showModal();
}


function hideShow(id) {
    const element = document.getElementById(id);
    if (element.classList.contains('hidden'))
        element.classList.remove('hidden');
    else
        element.classList.add('hidden');
}

// Function to set attributes and inner content of history

function historyMakeHelper(newHistory, idName, serial, content) {
    const element = newHistory.querySelector(`#${idName}`);
    element.setAttribute('id', `${idName}-${serial}`);
    if(content !== '')
        newHistory.querySelector(`#${idName}-${serial}`).innerText = content;
}