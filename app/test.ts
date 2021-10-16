const container3 = document.querySelector('.companies-and-its-users');

console.log('Start Index.js');

const urlUsers = "http://localhost:3000/users";
const urlCompanies = "http://localhost:3000/companies";

type UserType = {
    name: string;
    uri: string;
    email: string;
    uris : {
        company: string;
    };
}
type CompanyType = {
    name: string;
    uri: string;
}

async function getData<T>(url: string): Promise<T> {
    let res = await fetch(url);
    return await res.json();
}

const usersData = getData<UserType>(urlUsers);
const companiesData = getData<CompanyType>(urlCompanies);

console.log('userDataX',usersData);
console.log('companiesDataX',companiesData);

// window.addEventListener('DOMContentLoaded', () => renderCompaniesAndItsUsers())