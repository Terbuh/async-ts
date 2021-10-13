var container3 = document.querySelector('.companiesanditsusers');
console.log('Start Index.js');
var urlUsers = "http://localhost:3000/users";
var urlCompanies = "http://localhost:3000/companies";
var dataUsers = {
    name: "User 0",
    uri: "/users/0",
    email: "przemasw@ergo.com",
    uris: {
        company: "/companies/343"
    }
};
console.log(dataUsers);
var dataCompanies = {
    name: "Company 0",
    uri: "/companies/0"
};
console.log(dataCompanies);
// window.addEventListener('DOMContentLoaded', () => renderCompaniesAndItsUsers());
