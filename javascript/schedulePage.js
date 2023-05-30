

function getFlightDataList() {
    const searchDetails = JSON.parse(localStorage.getItem('searchDetails'));
    let displayFlightDetails = [];
    console.log('SEARCH : ' + searchDetails);
    if (searchDetails) {
        if (searchDetails.city != '') {
            flightDataList.forEach(flight => {
                if (flight.city.toLowerCase() == searchDetails.city.toLowerCase())
                    displayFlightDetails.push(flight);
            });
        }

        if (searchDetails.destination != '') {
            flightDataList.forEach(flight => {
                if (flight.destination.toLowerCase() == searchDetails.destination.toLowerCase())
                    displayFlightDetails.push(flight);
            });
        }

        if (searchDetails.arrivalTime != '') {
            flightDataList.forEach(flight => {
                if (flight.arrivalTime == searchDetails.arrivalTime)
                    displayFlightDetails.push(flight);
            });
        }

        if (searchDetails.departureTime != '') {
            flightDataList.forEach(flight => {
                if (flight.departureTime == searchDetails.departureTime)
                    displayFlightDetails.push(flight);
            });
        }
        localStorage.setItem('searchDetails', null);
        return displayFlightDetails;
    } else {
        return flightDataList;
    }
}
function getSearchDataList(input) {
    let displayFlightDetails = [];
    let temp = [];
    if (input != '') {
        flightDataList.forEach(flight => {
            if (flight.city.toLowerCase().includes(input))
                displayFlightDetails.push(flight);
        });

        flightDataList.forEach(flight => {
            if (flight.destination.toLowerCase().includes(input))
                displayFlightDetails.push(flight);
        });

        flightDataList.forEach(flight => {
            if (flight.arrivalTime.includes(input))
                displayFlightDetails.push(flight);
        });

        flightDataList.forEach(flight => {
            if (flight.departureTime.includes(input))
                displayFlightDetails.push(flight);
        });
        return displayFlightDetails;
    } else {
        return flightDataList;
    }
}
const onSearhBarType = () => {
    const searchInput = document.getElementById('search-bar').value.trim().toLowerCase();
    console.log('input:' + searchInput);
    $('#table-body').html('');
    paginate(getSearchDataList(searchInput));
}

function flightDataTemplate(allflightData) {
    let html = '';
    for (let currentFlight of allflightData) {
        html += `<tr id=${currentFlight.number.toString()}>
        <td>${currentFlight.number}</td>
        <td>${currentFlight.departureTime}</td>
        <td>${currentFlight.arrivalTime}</td>
        <td>${currentFlight.destination}</td>
        <td>${currentFlight.city}</td>
        <td>${currentFlight.price}</td>
        </tr>`;
    }
    return html;
}

function paginate(dataList) {
    $('#pagination-container').pagination({
        pageSize: 8,
        dataSource: dataList,
        callback: function (allflightData, pagination) {
            var html = flightDataTemplate(allflightData);
            $('#table-body').html(html);
        }
    });
    document.querySelectorAll('tr').forEach(item => {
        item.addEventListener('click', onFlightClickHandler);
    });
}
const onFlightClickHandler = evt => {
    const selectedFlightId = evt.target.parentNode.id;
    console.log('clicked item:' + selectedFlightId);
    for (let flight of flightDataList) {
        if (flight.number == selectedFlightId) {
            localStorage.setItem('selectedItem', JSON.stringify(flight));
            window.location.href = 'booking_screen.html';
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('search-bar').addEventListener('keyup', onSearhBarType);
    paginate(getFlightDataList());
});
