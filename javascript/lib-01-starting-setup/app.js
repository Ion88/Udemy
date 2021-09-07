const customers = ["Ion", "Petya", "Pak"];

const activeCustomers = ["Ion", "Petya"];

const inactiveCustomers = _.difference(customers, activeCustomers);

console.log(inactiveCustomers);
