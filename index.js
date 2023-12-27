const data = [
    {
        "Sl": 1,
        "First": "Johnnmmmm",
        "Last": "Doe",
        "City": "New York",
        "Email": "john@example.com",
        "Mobile": "1234567890",
        "DOB": "1990-05-15"
    },
    {
        "Sl": 2,
        "First": "Alice",
        "Last": "Smith",
        "City": "Los Angeles",
        "Email": "alice@example.com",
        "Mobile": "9876543210",
        "DOB": "1985-08-25"
    },
    {
        "Sl": 3,
        "First": "Michael",
        "Last": "Johnson",
        "City": "Chicago",
        "Email": "michael@example.com",
        "Mobile": "5555555555",
        "DOB": "1992-03-10"
    },
    {
        "Sl": 4,
        "First": "Sarah",
        "Last": "Williams",
        "City": "Houston",
        "Email": "sarah@example.com",
        "Mobile": "3333333333",
        "DOB": "1988-11-30"
    },
    {
        "Sl": 5,
        "First": "Robert",
        "Last": "Brown",
        "City": "San Francisco",
        "Email": "robert@example.com",
        "Mobile": "7777777777",
        "DOB": "1975-09-12"
    },
    {
        "Sl": 6,
        "First": "Emily",
        "Last": "Taylor",
        "City": "Seattle",
        "Email": "emily@example.com",
        "Mobile": "8888888888",
        "DOB": "1995-07-20"
    },
    {
        "Sl": 7,
        "First": "David",
        "Last": "Anderson",
        "City": "Miami",
        "Email": "david@example.com",
        "Mobile": "2222222222",
        "DOB": "1980-04-05"
    }
];

function populateTable(data) {
    const tableBody = document.getElementById('tableBody');

    tableBody.innerHTML = '';

    data.forEach(item => {
        const row = document.createElement('tr');
        row.innerHTML = `
        <td>${item.Sl}</td>
        <td>${item.First}</td>
        <td>${item.Last}</td>
        <td>${item.City}</td>
        <td>${item.Email}</td>
        <td>${item.Mobile}</td>
        <td>${item.DOB}</td>  `;
        tableBody.appendChild(row);
    });
}
populateTable(data);

const searchInput = document.getElementById('searchInput');
searchInput.addEventListener('input', filterTable);

function filterTable() {
    const searchTerm = searchInput.value.toLowerCase().trim();
    console.log("search term", searchTerm)

    const filteredData = data.filter(item => {
        return Object.values(item).some(value =>
            value.toString().toLowerCase().includes(searchTerm)
        );
    });

    console.log(filteredData)
    populateTable(filteredData);
}
