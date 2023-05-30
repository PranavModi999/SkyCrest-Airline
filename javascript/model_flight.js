class Flight {
    constructor(number, departureTime, arrivalTime, destination, city, price) {
        this.number = number;
        this.departureTime = departureTime;
        this.arrivalTime = arrivalTime;
        this.destination = destination;
        this.city = city;
        this.price = price;
    }
}

const flightData = [
    {
        "number": "FL001",
        "departureTime": "01-05-2023",
        "arrivalTime": "02-05-2023",
        "destination": "New York",
        "city": "USA",
        "price": 500
    },
    {
        "number": "FL002",
        "departureTime": "02-05-2023",
        "arrivalTime": "03-05-2023",
        "destination": "Los Angeles",
        "city": "USA",
        "price": 550
    },
    {
        "number": "FL101",
        "departureTime": "10-05-2023",
        "arrivalTime": "11-05-2023",
        "destination": "Sydney",
        "city": "Australia",
        "price": 800
    },
    {
        "number": "FL102",
        "departureTime": "11-05-2023",
        "arrivalTime": "12-05-2023",
        "destination": "Auckland",
        "city": "New Zealand",
        "price": 750
    },
    {
        "number": "FL103",
        "departureTime": "12-05-2023",
        "arrivalTime": "13-05-2023",
        "destination": "Bangkok",
        "city": "Thailand",
        "price": 600
    },
    {
        "number": "FL104",
        "departureTime": "13-05-2023",
        "arrivalTime": "14-05-2023",
        "destination": "Singapore",
        "city": "Singapore",
        "price": 700
    },
    {
        "number": "FL105",
        "departureTime": "14-05-2023",
        "arrivalTime": "15-05-2023",
        "destination": "Hong Kong",
        "city": "China",
        "price": 800
    },
    {
        "number": "FL106",
        "departureTime": "15-05-2023",
        "arrivalTime": "16-05-2023",
        "destination": "Mumbai",
        "city": "India",
        "price": 550
    },
    {
        "number": "FL107",
        "departureTime": "16-05-2023",
        "arrivalTime": "17-05-2023",
        "destination": "Cape Town",
        "city": "South Africa",
        "price": 900
    },
    {
        "number": "FL108",
        "departureTime": "17-05-2023",
        "arrivalTime": "18-05-2023",
        "destination": "Rio de Janeiro",
        "city": "Brazil",
        "price": 1000
    },
    {
        "number": "FL109",
        "departureTime": "18-05-2023",
        "arrivalTime": "19-05-2023",
        "destination": "Moscow",
        "city": "Russia",
        "price": 650
    },
    {
        "number": "FL110",
        "departureTime": "19-05-2023",
        "arrivalTime": "20-05-2023",
        "destination": "Dubai",
        "city": "UAE",
        "price": 700
    },
    {
        "number": "FL111",
        "departureTime": "20-05-2023",
        "arrivalTime": "21-05-2023",
        "destination": "Amsterdam",
        "city": "Netherlands",
        "price": 550
    },
    {
        "number": "FL112",
        "departureTime": "21-05-2023",
        "arrivalTime": "22-05-2023",
        "destination": "Barcelona",
        "city": "Spain",
        "price": 600
    },
    {
        "number": "FL201",
        "departureTime": "01-06-2023",
        "arrivalTime": "02-06-2023",
        "destination": "Paris",
        "city": "France",
        "price": 800
    },
    {
        "number": "FL202",
        "departureTime": "02-06-2023",
        "arrivalTime": "03-06-2023",
        "destination": "Rome",
        "city": "Italy",
        "price": 750
    },
    {
        "number": "FL203",
        "departureTime": "03-06-2023",
        "arrivalTime": "04-06-2023",
        "destination": "Berlin",
        "city": "Germany",
        "price": 600
    },
    {
        "number": "FL204",
        "departureTime": "04-06-2023",
        "arrivalTime": "05-06-2023",
        "destination": "Tokyo",
        "city": "Japan",
        "price": 900
    },
    {
        "number": "FL205",
        "departureTime": "05-06-2023",
        "arrivalTime": "06-06-2023",
        "destination": "Seoul",
        "city": "South Korea",
        "price": 800
    },
    {
        "number": "FL206",
        "departureTime": "06-06-2023",
        "arrivalTime": "07-06-2023",
        "destination": "Beijing",
        "city": "China",
        "price": 700
    },
    {
        "number": "FL207",
        "departureTime": "07-06-2023",
        "arrivalTime": "08-06-2023",
        "destination": "Hanoi",
        "city": "Vietnam",
        "price": 550
    },
    {
        "number": "FL208",
        "departureTime": "08-06-2023",
        "arrivalTime": "09-06-2023",
        "destination": "Munich",
        "city": "Germany",
        "price": 650
    },
    {
        "number": "FL209",
        "departureTime": "09-06-2023",
        "arrivalTime": "10-06-2023",
        "destination": "Vienna",
        "city": "Austria",
        "price": 600
    },
    {
        "number": "FL210",
        "departureTime": "10-06-2023",
        "arrivalTime": "11-06-2023",
        "destination": "Brussels",
        "city": "Belgium",
        "price": 700
    },
    {
        "number": "FL211",
        "departureTime": "11-06-2023",
        "arrivalTime": "12-06-2023",
        "destination": "Stockholm",
        "city": "Sweden",
        "price": 750
    },
    {
        "number": "FL212",
        "departureTime": "12-06-2023",
        "arrivalTime": "13-06-2023",
        "destination": "Copenhagen",
        "city": "Denmark",
        "price": 650
    },
    {
        "number": "FL301",
        "departureTime": "01-07-2023",
        "arrivalTime": "02-07-2023",
        "destination": "New York",
        "city": "USA",
        "price": 1200
    },
    {
        "number": "FL302",
        "departureTime": "02-07-2023",
        "arrivalTime": "03-07-2023",
        "destination": "Los Angeles",
        "city": "USA",
        "price": 1000
    },
    {
        "number": "FL303",
        "departureTime": "03-07-2023",
        "arrivalTime": "04-07-2023",
        "destination": "San Francisco",
        "city": "USA",
        "price": 950
    },
    {
        "number": "FL304",
        "departureTime": "04-07-2023",
        "arrivalTime": "05-07-2023",
        "destination": "Toronto",
        "city": "Canada",
        "price": 800
    },
    {
        "number": "FL305",
        "departureTime": "05-07-2023",
        "arrivalTime": "06-07-2023",
        "destination": "Vancouver",
        "city": "Canada",
        "price": 900
    },
    {
        "number": "FL306",
        "departureTime": "06-07-2023",
        "arrivalTime": "07-07-2023",
        "destination": "Mexico City",
        "city": "Mexico",
        "price": 700
    },
    {
        "number": "FL701",
        "departureTime": "01-08-2023",
        "arrivalTime": "02-08-2023",
        "destination": "Paris",
        "city": "France",
        "price": 1500
    },
    {
        "number": "FL702",
        "departureTime": "02-08-2023",
        "arrivalTime": "03-08-2023",
        "destination": "Berlin",
        "city": "Germany",
        "price": 1200
    },
    {
        "number": "FL703",
        "departureTime": "03-08-2023",
        "arrivalTime": "04-08-2023",
        "destination": "Rome",
        "city": "Italy",
        "price": 1400
    },
    {
        "number": "FL704",
        "departureTime": "04-08-2023",
        "arrivalTime": "05-08-2023",
        "destination": "Athens",
        "city": "Greece",
        "price": 1100
    },
    {
        "number": "FL705",
        "departureTime": "05-08-2023",
        "arrivalTime": "06-08-2023",
        "destination": "Madrid",
        "city": "Spain",
        "price": 1300
    },
    {
        "number": "FL706",
        "departureTime": "06-08-2023",
        "arrivalTime": "07-08-2023",
        "destination": "Lisbon",
        "city": "Portugal",
        "price": 1000
    },
    {
        "number": "FL707",
        "departureTime": "07-08-2023",
        "arrivalTime": "08-08-2023",
        "destination": "Amsterdam",
        "city": "Netherlands",
        "price": 1200
    },
    {
        "number": "FL708",
        "departureTime": "08-08-2023",
        "arrivalTime": "09-08-2023",
        "destination": "Brussels",
        "city": "Belgium",
        "price": 1100
    },
    {
        "number": "FL709",
        "departureTime": "09-08-2023",
        "arrivalTime": "10-08-2023",
        "destination": "Vienna",
        "city": "Austria",
        "price": 1300
    },
    {
        "number": "FL710",
        "departureTime": "10-08-2023",
        "arrivalTime": "11-08-2023",
        "destination": "Stockholm",
        "city": "Sweden",
        "price": 1400
    },
    {
        "number": "FL711",
        "departureTime": "11-08-2023",
        "arrivalTime": "12-08-2023",
        "destination": "Oslo",
        "city": "Norway",
        "price": 1200
    },
    {
        "number": "FL712",
        "departureTime": "12-08-2023",
        "arrivalTime": "13-08-2023",
        "destination": "Helsinki",
        "city": "Finland",
        "price": 1300
    }, {
        "number": "FL801",
        "departureTime": "01-05-2024",
        "arrivalTime": "02-05-2024",
        "destination": "Tokyo",
        "city": "Japan",
        "price": 2500
    },
    {
        "number": "FL802",
        "departureTime": "02-05-2024",
        "arrivalTime": "03-05-2024",
        "destination": "Seoul",
        "city": "South Korea",
        "price": 2000
    },
    {
        "number": "FL803",
        "departureTime": "03-05-2024",
        "arrivalTime": "04-05-2024",
        "destination": "Beijing",
        "city": "China",
        "price": 1800
    },
    {
        "number": "FL804",
        "departureTime": "04-05-2024",
        "arrivalTime": "05-05-2024",
        "destination": "Sydney",
        "city": "Australia",
        "price": 2200
    },
    {
        "number": "FL805",
        "departureTime": "05-05-2024",
        "arrivalTime": "06-05-2024",
        "destination": "Auckland",
        "city": "New Zealand",
        "price": 2400
    },
    {
        "number": "FL806",
        "departureTime": "06-05-2024",
        "arrivalTime": "07-05-2024",
        "destination": "Dubai",
        "city": "United Arab Emirates",
        "price": 1800
    },
    {
        "number": "FL807",
        "departureTime": "07-05-2024",
        "arrivalTime": "08-05-2024",
        "destination": "Cairo",
        "city": "Egypt",
        "price": 1500
    },
    {
        "number": "FL808",
        "departureTime": "08-05-2024",
        "arrivalTime": "09-05-2024",
        "destination": "Marrakesh",
        "city": "Morocco",
        "price": 1700
    },
    {
        "number": "FL809",
        "departureTime": "09-05-2024",
        "arrivalTime": "10-05-2024",
        "destination": "Cape Town",
        "city": "South Africa",
        "price": 2200
    },
    {
        "number": "FL810",
        "departureTime": "10-05-2024",
        "arrivalTime": "11-05-2024",
        "destination": "Rio de Janeiro",
        "city": "Brazil",
        "price": 2000
    },
    {
        "number": "FL811",
        "departureTime": "11-05-2024",
        "arrivalTime": "12-05-2024",
        "destination": "Buenos Aires",
        "city": "Argentina",
        "price": 1800
    },
    {
        "number": "FL812",
        "departureTime": "12-05-2024",
        "arrivalTime": "13-05-2024",
        "destination": "Mexico City",
        "city": "Mexico",
        "price": 2100
    },
    {
        "number": "FL901",
        "departureTime": "01-06-2024",
        "arrivalTime": "02-06-2024",
        "destination": "Paris",
        "city": "France",
        "price": 1800
    },
    {
        "number": "FL902",
        "departureTime": "02-06-2024",
        "arrivalTime": "03-06-2024",
        "destination": "Berlin",
        "city": "Germany",
        "price": 1600
    },
    {
        "number": "FL903",
        "departureTime": "03-06-2024",
        "arrivalTime": "04-06-2024",
        "destination": "Rome",
        "city": "Italy",
        "price": 2000
    },
    {
        "number": "FL904",
        "departureTime": "04-06-2024",
        "arrivalTime": "05-06-2024",
        "destination": "Amsterdam",
        "city": "Netherlands",
        "price": 1700
    },
    {
        "number": "FL905",
        "departureTime": "05-06-2024",
        "arrivalTime": "06-06-2024",
        "destination": "Barcelona",
        "city": "Spain",
        "price": 1900
    },
    {
        "number": "FL906",
        "departureTime": "06-06-2024",
        "arrivalTime": "07-06-2024",
        "destination": "Athens",
        "city": "Greece",
        "price": 2200
    },
    {
        "number": "FL907",
        "departureTime": "07-06-2024",
        "arrivalTime": "08-06-2024",
        "destination": "Moscow",
        "city": "Russia",
        "price": 2400
    },
    {
        "number": "FL908",
        "departureTime": "08-06-2024",
        "arrivalTime": "09-06-2024",
        "destination": "Dublin",
        "city": "Ireland",
        "price": 1800
    },
    {
        "number": "FL909",
        "departureTime": "09-06-2024",
        "arrivalTime": "10-06-2024",
        "destination": "Stockholm",
        "city": "Sweden",
        "price": 2000
    },
    {
        "number": "FL910",
        "departureTime": "10-06-2024",
        "arrivalTime": "11-06-2024",
        "destination": "Copenhagen",
        "city": "Denmark",
        "price": 1700
    },
    {
        "number": "FL911",
        "departureTime": "11-06-2024",
        "arrivalTime": "12-06-2024",
        "destination": "Vienna",
        "city": "Austria",
        "price": 1900
    },
    {
        "number": "FL912",
        "departureTime": "12-06-2024",
        "arrivalTime": "13-06-2024",
        "destination": "Zurich",
        "city": "Switzerland",
        "price": 2200
    },
    {
        "number": "FL1001",
        "departureTime": "01-01-2025",
        "arrivalTime": "02-01-2025",
        "destination": "Tokyo",
        "city": "Japan",
        "price": 2500
    },
    {
        "number": "FL1002",
        "departureTime": "02-01-2025",
        "arrivalTime": "03-01-2025",
        "destination": "Beijing",
        "city": "China",
        "price": 1800
    },
    {
        "number": "FL1003",
        "departureTime": "03-01-2025",
        "arrivalTime": "04-01-2025",
        "destination": "Seoul",
        "city": "South Korea",
        "price": 2100
    },
    {
        "number": "FL1004",
        "departureTime": "04-01-2025",
        "arrivalTime": "05-01-2025",
        "destination": "Singapore",
        "city": "Singapore",
        "price": 2300
    },
    {
        "number": "FL1005",
        "departureTime": "05-01-2025",
        "arrivalTime": "06-01-2025",
        "destination": "Sydney",
        "city": "Australia",
        "price": 2800
    },
    {
        "number": "FL1006",
        "departureTime": "06-01-2025",
        "arrivalTime": "07-01-2025",
        "destination": "Auckland",
        "city": "New Zealand",
        "price": 3200
    },
    {
        "number": "FL1007",
        "departureTime": "07-01-2025",
        "arrivalTime": "08-01-2025",
        "destination": "Bangkok",
        "city": "Thailand",
        "price": 2000
    },
    {
        "number": "FL1008",
        "departureTime": "08-01-2025",
        "arrivalTime": "09-01-2025",
        "destination": "Kuala Lumpur",
        "city": "Malaysia",
        "price": 1900
    },
    {
        "number": "FL1009",
        "departureTime": "09-01-2025",
        "arrivalTime": "10-01-2025",
        "destination": "Mumbai",
        "city": "India",
        "price": 1700
    },
    {
        "number": "FL1010",
        "departureTime": "10-01-2025",
        "arrivalTime": "11-01-2025",
        "destination": "Cairo",
        "city": "Egypt",
        "price": 2200
    },
    {
        "number": "FL1011",
        "departureTime": "11-01-2025",
        "arrivalTime": "12-01-2025",
        "destination": "Dubai",
        "city": "United Arab Emirates",
        "price": 2400
    },
    {
        "number": "FL1012",
        "departureTime": "12-01-2025",
        "arrivalTime": "13-01-2025",
        "destination": "Istanbul",
        "city": "Turkey",
        "price": 2000
    },
    {
        "number": "FL1101",
        "departureTime": "01-05-2025",
        "arrivalTime": "02-05-2025",
        "destination": "Paris",
        "city": "France",
        "price": 2800
    },
    {
        "number": "FL1102",
        "departureTime": "02-05-2025",
        "arrivalTime": "03-05-2025",
        "destination": "Madrid",
        "city": "Spain",
        "price": 2200
    },
    {
        "number": "FL1103",
        "departureTime": "03-05-2025",
        "arrivalTime": "04-05-2025",
        "destination": "Rome",
        "city": "Italy",
        "price": 2400
    },
    {
        "number": "FL1104",
        "departureTime": "04-05-2025",
        "arrivalTime": "05-05-2025",
        "destination": "Athens",
        "city": "Greece",
        "price": 2100
    },
    {
        "number": "FL1105",
        "departureTime": "05-05-2025",
        "arrivalTime": "06-05-2025",
        "destination": "Berlin",
        "city": "Germany",
        "price": 2500
    },
    {
        "number": "FL1106",
        "departureTime": "06-05-2025",
        "arrivalTime": "07-05-2025",
        "destination": "Amsterdam",
        "city": "Netherlands",
        "price": 2700
    },
    {
        "number": "FL1107",
        "departureTime": "07-05-2025",
        "arrivalTime": "08-05-2025",
        "destination": "Vienna",
        "city": "Austria",
        "price": 2000
    },
    {
        "number": "FL1108",
        "departureTime": "08-05-2025",
        "arrivalTime": "09-05-2025",
        "destination": "Zurich",
        "city": "Switzerland",
        "price": 2600
    },
    {
        "number": "FL1109",
        "departureTime": "09-05-2025",
        "arrivalTime": "10-05-2025",
        "destination": "Copenhagen",
        "city": "Denmark",
        "price": 2300
    },
    {
        "number": "FL1110",
        "departureTime": "10-05-2025",
        "arrivalTime": "11-05-2025",
        "destination": "Stockholm",
        "city": "Sweden",
        "price": 2500
    },
    {
        "number": "FL1111",
        "departureTime": "11-05-2025",
        "arrivalTime": "12-05-2025",
        "destination": "Oslo",
        "city": "Norway",
        "price": 2800
    },
    {
        "number": "FL1112",
        "departureTime": "12-05-2025",
        "arrivalTime": "13-05-2025",
        "destination": "Helsinki",
        "city": "Finland",
        "price": 2700
    },
];
const flightDataList = flightData.map(flight => new Flight(flight.number, flight.departureTime, flight.arrivalTime, flight.destination, flight.city, flight.price));
