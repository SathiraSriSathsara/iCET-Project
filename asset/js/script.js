const customer = require('./getCustomersData');

function createTableRow(id, name, email, address) {
    const row = document.createElement("tr");
    row.innerHTML = `
        <td>${id}</td>
        <td>${name}</td>
        <td>${email}</td>
        <td>${address}</td>
    `;
    return row;
}

function displayCustomers(customers, tableId) {
    const tableBody = document.getElementById(tableId);
    for (const customerId in customers) {
        if (customers.hasOwnProperty(customerId)) {
            const customerInfo = customers[customerId];
            const tableRow = createTableRow(customerId, customerInfo.Name, customerInfo['Phone number'], customerInfo.Address);
            tableBody.appendChild(tableRow);
        }
    }
}

// Assuming customers is the dictionary of customer details from the external file
const customersData = getCustomersData(); // You should have a function like this in customers.js

// Assuming 'customersTable' is the correct ID for the customers table
displayCustomers(customersData, 'customersTable');