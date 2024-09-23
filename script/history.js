class counter{
    static ser = 0;
    static getCounter() {
        return ++this.ser;
    }
}


function dateTime() {
    const now = new Date();
    const dayName = now.toLocaleString('en-GB', { weekday: 'short' });
    const day = now.getDate().toString().padStart(2, '0');
    const monthName = now.toLocaleString('en-GB', { month: 'short' });
    const year = now.getFullYear();
    const time = now.toTimeString();
    return `Date: ${dayName} ${monthName} ${day} ${year} ${time}`;
}



function makeHistory(donation_type, amount) {
    hideShow('no-donations');
    const historyBook = document.getElementById('history-section');
    const newHistory = document.createElement('div');

    const content = `
        <div id="history" class="w-full mx-auto flex justify-between lg:justify-around items-start border-2 border-gray-200 p-5 rounded-lg">
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

    historyBook.appendChild(newHistory);
}















document.getElementById('history-btn').addEventListener('click', function () {
    hideShow('donation-section');
    hideShow('history-section');
    document.getElementById('history-btn').style.backgroundColor = '#B4F461';
    document.getElementById('donation-btn').style.backgroundColor = 'white';

})

document.getElementById('donation-btn').addEventListener('click', function () {
    hideShow('donation-section');
    hideShow('history-section');
    document.getElementById('donation-btn').style.backgroundColor = '#B4F461';
    document.getElementById('history-btn').style.backgroundColor = 'white'
})
