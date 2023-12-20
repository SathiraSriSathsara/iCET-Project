const customers = {
    "CUST001": {
        "Name": "John Smith",
        "Phonenumber": 123456789,
        "Email ID": "john.smith@example.com",
        "Address": "123 Main St, Cityville, CA, USA"
    },
    "CUST002": {
        "Name": "Alice Johnson",
        "Phonenumber": 987654321,
        "Email ID": "alice.johnson@example.com",
        "Address": "456 Oak St, Townsville, NY, USA"
    },
    "CUST003": {
        "Name": "Robert Davis",
        "Phonenumber": 5551212,
        "Email ID": "robert.davis@example.com",
        "Address": "789 Elm St, Villagetown, TX, USA"
    },
    "CUST004": {
        "Name": "Emily White",
        "Phonenumber": 876543210,
        "Email ID": "emily.white@example.com",
        "Address": "101 Pine St, Hamletville, FL, USA"
    },
    "CUST005": {
        "Name": "Daniel Brown",
        "Phonenumber": 111223344,
        "Email ID": "daniel.brown@example.com",
        "Address": "202 Maple St, Countryside, IL, USA"
    },
    "CUST006": {
        "Name": "Sophia Miller",
        "Phonenumber": 444556677,
        "Email ID": "sophia.miller@example.com",
        "Address": "303 Birch St, Riverside, CA, USA"
    },
    "CUST007": {
        "Name": "Matthew Wilson",
        "Phonenumber": 999888777,
        "Email ID": "matthew.wilson@example.com",
        "Address": "404 Cedar St, Lakeside, MI, USA"
    },
    "CUST008": {
        "Name": "Olivia Anderson",
        "Phonenumber": 333444555,
        "Email ID": "olivia.anderson@example.com",
        "Address": "505 Oak St, Mountainside, CO, USA"
    },
    "CUST009": {
        "Name": "James Lee",
        "Phonenumber": 666777888,
        "Email ID": "james.lee@example.com",
        "Address": "606 Pine St, Valleytown, AZ, USA"
    },
    "CUST010": {
        "Name": "Emma Martinez",
        "Phonenumber": 222111000,
        "Email ID": "emma.martinez@example.com",
        "Address": "707 Maple St, Hillside, NJ, USA"
    },
    "CUST011": {
        "Name": "William Taylor",
        "Phonenumber": 777999111,
        "Email ID": "william.taylor@example.com",
        "Address": "808 Birch St, Seaside, WA, USA"
    },
    "CUST012": {
        "Name": "Ava Garcia",
        "Phonenumber": 444333222,
        "Email ID": "ava.garcia@example.com",
        "Address": "909 Cedar St, Beachville, FL, USA"
    },
    "CUST013": {
        "Name": "Michael Hernandez",
        "Phonenumber": 888777666,
        "Email ID": "michael.hernandez@example.com",
        "Address": "1010 Oak St, Sunnyside, CA, USA"
    },
    "CUST014": {
        "Name": "Isabella Smith",
        "Phonenumber": 555666777,
        "Email ID": "isabella.smith@example.com",
        "Address": "1111 Pine St, Greenvale, TX, USA"
    },
    "CUST015": {
        "Name": "Alexander Davis",
        "Phonenumber": 222333444,
        "Email ID": "alexander.davis@example.com",
        "Address": "1212 Maple St, Hilltown, PA, USA"
    },
    "CUST016": {
        "Name": "Abigail Wilson",
        "Phonenumber": 999000111,
        "Email ID": "abigail.wilson@example.com",
        "Address": "1313 Birch St, Valleydale, OH, USA"
    },
    "CUST017": {
        "Name": "Ethan Brown",
        "Phonenumber": 444000888,
        "Email ID": "ethan.brown@example.com",
        "Address": "1414 Cedar St, Hillcrest, IL, USA"
    },
    "CUST018": {
        "Name": "Mia Miller",
        "Phonenumber": 777666555,
        "Email ID": "mia.miller@example.com",
        "Address": "1515 Oak St, Lakeshore, MI, USA"
    },
    "CUST019": {
        "Name": "Benjamin Wilson",
        "Phonenumber": 111888444,
        "Email ID": "benjamin.wilson@example.com",
        "Address": "1616 Pine St, Mountainview, CA, USA"
    },
    "CUST020": {
        "Name": "Charlotte Anderson",
        "Phonenumber": 666222888,
        "Email ID": "charlotte.anderson@example.com",
        "Address": "1717 Maple St, Seaville, NJ, USA"
    },
    "CUST021": {
        "Name": "Daniel Lee",
        "Phonenumber": 333555777,
        "Email ID": "daniel.lee@example.com",
        "Address": "1818 Birch St, Hilltop, CO, USA"
    },
    "CUST022": {
        "Name": "Scarlett Taylor",
        "Phonenumber": 888111444,
        "Email ID": "scarlett.taylor@example.com",
        "Address": "1919 Cedar St, Rivertown, WA, USA"
    },
    "CUST023": {
        "Name": "Henry Garcia",
        "Phonenumber": 555222999,
        "Email ID": "henry.garcia@example.com",
        "Address": "2020 Oak St, Valleyville, FL, USA"
    },
    "CUST024": {
        "Name": "Amelia Hernandez",
        "Phonenumber": 222444666,
        "Email ID": "amelia.hernandez@example.com",
        "Address": "2121 Pine St, Hillside, CA, USA"
    },
    "CUST025": {
        "Name": "Logan Smith",
        "Phonenumber": 999666333,
        "Email ID": "logan.smith@example.com",
        "Address": "2222 Maple St, Shoreville, TX, USA"
    },
    "CUST026": {
        "Name": "Avery Davis",
        "Phonenumber": 444999111,
        "Email ID": "avery.davis@example.com",
        "Address": "2323 Birch St, Valleytown, AZ, USA"
    },
    "CUST027": {
        "Name": "Sophia Martinez",
        "Phonenumber": 111333555,
        "Email ID": "sophia.martinez@example.com",
        "Address": "2424 Cedar St, Hilltop, NJ, USA"
    },
    "CUST028": {
        "Name": "Jackson Taylor",
        "Phonenumber": 666111444,
        "Email ID": "jackson.taylor@example.com",
        "Address": "2525 Oak St, Seaside, WA, USA"
    },
    "CUST029": {
        "Name": "Lily Garcia",
        "Phonenumber": 333888555,
        "Email ID": "lily.garcia@example.com",
        "Address": "2626 Pine St, Beachville, FL, USA"
    },
    "CUST030": {
        "Name": "Lucas Hernandez",
        "Phonenumber": 888333555,
        "Email ID": "lucas.hernandez@example.com",
        "Address": "2727 Maple St, Sunnyside, CA, USA"
    },
    "CUST031": {
        "Name": "Ella Smith",
        "Phonenumber": 555333777,
        "Email ID": "ella.smith@example.com",
        "Address": "2828 Birch St, Greenvale, TX, USA"
    },
    "CUST032": {
        "Name": "Cooper Davis",
        "Phonenumber": 777444888,
        "Email ID": "cooper.davis@example.com",
        "Address": "2929 Cedar St, Hilltown, PA, USA"
    },
    "CUST033": {
        "Name": "Hazel Wilson",
        "Phonenumber": 444777222,
        "Email ID": "hazel.wilson@example.com",
        "Address": "3030 Oak St, Valleydale, OH, USA"
    },
    "CUST034": {
        "Name": "Carter Brown",
        "Phonenumber": 777222444,
        "Email ID": "carter.brown@example.com",
        "Address": "3131 Pine St, Hillcrest, IL, USA"
    },
    "CUST035": {
        "Name": "Scarlett Miller",
        "Phonenumber": 222777999,
        "Email ID": "scarlett.miller@example.com",
        "Address": "3232 Maple St, Lakeshore, MI, USA"
    },
    "CUST036": {
        "Name": "Leo Anderson",
        "Phonenumber": 999444666,
        "Email ID": "leo.anderson@example.com",
        "Address": "3333 Birch St, Mountainview, CA, USA"
    },
    "CUST037": {
        "Name": "Grace Wilson",
        "Phonenumber": 666333999,
        "Email ID": "grace.wilson@example.com",
        "Address": "3434 Cedar St, Seaville, NJ, USA"
    },
    "CUST038": {
        "Name": "Nolan Lee",
        "Phonenumber": 333555777,
        "Email ID": "nolan.lee@example.com",
        "Address": "3535 Oak St, Hilltop, CO, USA"
    },
    "CUST039": {
        "Name": "Zoe Taylor",
        "Phonenumber": 888111444,
        "Email ID": "zoe.taylor@example.com",
        "Address": "3636 Pine St, Rivertown, WA, USA"
    },
    "CUST040": {
        "Name": "Liam Garcia",
        "Phonenumber": 555222999,
        "Email ID": "liam.garcia@example.com",
        "Address": "3737 Maple St, Valleyville, FL, USA"
    },
    "CUST041": {
        "Name": "Aria Hernandez",
        "Phonenumber": 222444666,
        "Email ID": "aria.hernandez@example.com",
        "Address": "3838 Oak St, Hillside, CA, USA"
    },
    "CUST042": {
        "Name": "Elijah Smith",
        "Phonenumber": 999666333,
        "Email ID": "elijah.smith@example.com",
        "Address": "3939 Birch St, Shoreville, TX, USA"
    },
    "CUST043": {
        "Name": "Mila Davis",
        "Phonenumber": 444999111,
        "Email ID": "mila.davis@example.com",
        "Address": "4040 Cedar St, Valleytown, AZ, USA"
    },
    "CUST044": {
        "Name": "Jackson Martinez",
        "Phonenumber": 111333555,
        "Email ID": "jackson.martinez@example.com",
        "Address": "4141 Pine St, Hilltop, NJ, USA"
    },
    "CUST045": {
        "Name": "Penelope Taylor",
        "Phonenumber": 666111444,
        "Email ID": "penelope.taylor@example.com",
        "Address": "4242 Oak St, Seaside, WA, USA"
    },
    "CUST046": {
        "Name": "Grayson Garcia",
        "Phonenumber": 333888555,
        "Email ID": "grayson.garcia@example.com",
        "Address": "4343 Maple St, Beachville, FL, USA"
    },
    "CUST047": {
        "Name": "Aurora Hernandez",
        "Phonenumber": 888333555,
        "Email ID": "aurora.hernandez@example.com",
        "Address": "4444 Oak St, Sunnyside, CA, USA"
    },
    "CUST048": {
        "Name": "Caleb Smith",
        "Phonenumber": 555333777,
        "Email ID": "caleb.smith@example.com",
        "Address": "4545 Birch St, Greenvale, TX, USA"
    },
    "CUST049": {
        "Name": "Nova Davis",
        "Phonenumber": 777444888,
        "Email ID": "nova.davis@example.com",
        "Address": "4646 Cedar St, Hilltown, PA, USA"
    },
    "CUST050": {
        "Name": "Ezra Wilson",
        "Phonenumber": 444777222,
        "Email ID": "ezra.wilson@example.com",
        "Address": "4747 Oak St, Valleydale, OH, USA"
    }
}

function getCustomersData() {
    return customers;
}

module.exports = getCustomersData;