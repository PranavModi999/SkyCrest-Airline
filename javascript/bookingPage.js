const $ = selector => document.querySelector(selector);

function updateBookingData(flight, user) {
    $('#name').value = `${user.firstName} ${user.lastName}`;
    $('#email').value = user.email.toString();
    $('#departure-date').value = new Date(flight.departureTime).toISOString().slice(0, 10);
    $('#arrival-date').value = new Date(flight.arrivalTime).toISOString().slice(0, 10);
    $('#origin').value = flight.city.toString();
    $('#destination').value = flight.destination.toString();
}
const onSubmitClick = (evt) => {
    evt.preventDefault();
    SnackBar({
        message: 'Flight booked Successfully!',
        status: 'green',
    });
    SnackBar({
        message: 'Flight ticket details would be sent in mail shortly!',
        status: 'blue',
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const selectedFlight = JSON.parse(localStorage.getItem('selectedItem'));
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    updateBookingData(selectedFlight, currentUser);
    $('.submit-button').addEventListener('click', onSubmitClick);
});