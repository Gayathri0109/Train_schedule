class TrainSchedule {
    constructor() {
        this.trains = [];
        this.tableBody = document.getElementById('train-schedule-tbody');
    }

    addTrain(name, arrivalTime, departureTime) {
        const train = {
            name,
            arrivalTime,
            departureTime
        };
        this.trains.push(train);
        this.updateTable();
    }

    updateTable() {
        this.tableBody.innerHTML = '';
        this.trains.forEach((train, index) => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${train.name}</td>
                <td>${train.arrivalTime}</td>
                <td>${train.departureTime}</td>
            `;
            this.tableBody.appendChild(row);
        });
    }
}

const schedule = new TrainSchedule();

document.getElementById('add-train-btn').addEventListener('click', (e) => {
    e.preventDefault();
    const trainName = document.getElementById('train-name').value;
    const arrivalTime = document.getElementById('arrival-time').value;
    const departureTime = document.getElementById('departure-time').value;
    schedule.addTrain(trainName, arrivalTime, departureTime);
    document.getElementById('add-train-form').reset();
});
