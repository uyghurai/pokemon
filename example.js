fetch('example.json')
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        displayCars(data.cars);
    });

function displayCars(cars) {
    for (let i = 0; i < cars.length; i++) {
        document.getElementById("carsDiv").innerHTML += cars[i].brand + "<br>" +
            cars[i].year + "<br>" +
            cars[i].model + "<br>" +
            cars[i].mileage + "<br>" +
            cars[i].carType + "<br> ------------------------------------------- <br>";
    }
}