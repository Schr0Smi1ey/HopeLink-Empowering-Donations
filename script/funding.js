function addDonation(input_field_id, donation_id, donation_type) {
    let have_balance = getTextFieldValueByID('total-balance');
    let donation_balance = getTextFieldValueByID(donation_id);

    const inputAmount = getInputFieldValueByID(input_field_id);

    if (inputAmount === 0) {
        alert('Please enter an amount!');
        return;
    }

    if (isNaN(inputAmount) || inputAmount < 0) {
        alert('Please enter a valid amount!')
        return;
    }


    if (inputAmount > have_balance) {
        alert(`You don't have sufficient balance!`)
        return;
    }

    setTextFieldValueByID('total-balance', have_balance - inputAmount);
    setTextFieldValueByID(donation_id, donation_balance + inputAmount);
    successfulDonation();
    makeHistory(donation_type, inputAmount);
}