const container3 = document.querySelector('.companiesanditsusers');

console.log('Start Index.js');

const urlUsers = "http://localhost:3000/users";
const urlCompanies = "http://localhost:3000/companies";

type UserCompany = {
    company: string;
}
type User = {
    name: string;
    uri: string;
    email: string;
    uris : UserCompany;
}
type Company = {
    name: string;
    uri: string;
}
let dataUsers: User = {
    name: "User 0",
    uri: "/users/0",
    email: "przemasw@ergo.com",
    uris: {
        company: "/companies/343"
    }
}
console.log(dataUsers);

let dataCompanies: Company = {
    name: "Company 0",
    uri: "/companies/0"
}

console.log(dataCompanies);
// window.addEventListener('DOMContentLoaded', () => renderCompaniesAndItsUsers());

