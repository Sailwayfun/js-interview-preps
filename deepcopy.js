const person = {
    name: "John Doe",
    address: {
        street: "123 Maple Street",
        city: "Springfield",
        state: "IL",
        postalCode: "62704"
    },
    contact: {
        email: "johndoe@example.com",
        phone: "555-1234"
    }
};

////object spread operator 是淺拷貝，nested object若有改變，原本的object也會被改變

// const spreadPerson = { ...person };
// console.log(spreadPerson === person); // false
// spreadPerson.address.street = "456 Oak Street";
// console.log(person.address.street);//456 Oak Street
//因為spreadPerson是淺拷貝，所以nested prop person.address.street也會被改變

////JSON