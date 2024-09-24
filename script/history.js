// to track the number of history records as well as id of each record by serial number
class counter{
    static ser = 0;
    static getCounter() {
        return ++this.ser;
    }
}

// to get current date and time
function dateTime() {
    const now = new Date();
    const dayName = now.toLocaleString('en-GB', { weekday: 'short' });
    const day = now.getDate().toString().padStart(2, '0');
    const monthName = now.toLocaleString('en-GB', { month: 'short' });
    const year = now.getFullYear();
    const time = now.toTimeString();
    return `Date: ${dayName} ${monthName} ${day} ${year} ${time}`;
}


// to create a new history record
function makeHistory(donation_type, amount) {
    document.getElementById('no-donations').style.display = 'none';
    const historyBook = document.getElementById('history-section');
    const newHistory = document.createElement('div');

    const content = `
        <div id="history" class="w-full mx-auto flex justify-between p-5 mb-3 lg:px-10 xl:px-14 2xl:px-16 items-start border-2 border-gray-200 rounded-lg">
            <div id="donation-info" class="flex flex-col gap-2">
                <p id="donation-type" class="font-bold text-lg"></p>
                <p id="donation-time"></p>
            </div>
            <h2 id="donation-amount" class="font-bold text-xl tracking-wider">
            </h2>
        </div>
    `

    newHistory.innerHTML = content;
    
    const serial = counter.getCounter();

    historyMakeHelper(newHistory, 'history', serial, '');
    historyMakeHelper(newHistory, 'donation-info', serial, '');
    historyMakeHelper(newHistory, 'donation-time', serial, dateTime());
    historyMakeHelper(newHistory, 'donation-type', serial, donation_type);
    historyMakeHelper(newHistory, 'donation-amount', serial, `+${amount}`);
    newHistory.querySelector(`#donation-amount-${serial}`).classList.add('text-green-500');

    historyBook.prepend(newHistory);
}

// to show the history section
document.getElementById('history-btn').addEventListener('click', function () {
    const historySection = document.getElementById('history-section'); 
    if(historySection.classList.contains('hidden')) {
        hideShow('history-section');
        hideShow('donation-section');
    }
    document.getElementById('history-btn').style.backgroundColor = '#B4F461';
    document.getElementById('donation-btn').style.backgroundColor = 'white';
})

// to show the donation section
document.getElementById('donation-btn').addEventListener('click', function () {
    const donationSection = document.getElementById('donation-section');
    if(donationSection.classList.contains('hidden')) {
        hideShow('donation-section');
        hideShow('history-section');
    }
    document.getElementById('donation-btn').style.backgroundColor = '#B4F461';
    document.getElementById('history-btn').style.backgroundColor = 'white'
})
