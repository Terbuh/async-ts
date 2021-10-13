import { type } from "os";

const container3 = document.querySelector('.companies-and-its-users');

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

async function getUsers() {
    let url = 'http://localhost:3000/users';
    try {
        let res = await fetch(url);
        return await res.json();
    } catch (error) {
        console.log(error);
    }
}

async function getCompanies() {
    let url = 'http://localhost:3000/companies';
    try {
        let res = await fetch(url);
        return await res.json();
    } catch (error) {
        console.log(error);
    }
}

const renderCompaniesAndItsUsers = async () => {
    let users = await getUsers();
    let companies = await getCompanies();

    let template = '';
    companies.forEach(company => {
        template +=`
                <table class="company">
                <th>Name: ${company.name}</th>
                 </table>`
        
        users.forEach(user =>  {
            if ( company.uri === user.uris.company ) {
                template += `
                  <table class="user">
                  <td>Name: ${user.name},</td>
                  <td>email: ${user.email}</td>
                  </table>`
            }
        })
    })
    container3.innerHTML = template;
}
renderCompaniesAndItsUsers();