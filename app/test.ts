const container3 = document.querySelector('.companies-and-its-users');

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


async function getDataUser<UserType>(url: string): Promise<UserType> {
    let res = await fetch(url);
    return await res.json();
}
async function getDataCompanies<CompanyType>(url: string): Promise<CompanyType> {
    let res = await fetch(url);
    return await res.json();
}

const usersDataX = getDataUser<UserType[]>(urlUsers);
const companiesDataX = getDataCompanies<CompanyType[]>(urlCompanies);

// async function getData<T>(url: string): Promise<T> {
//     let res = await fetch(url);
//     return await res.json();
// }
//
// const usersData = getData<UserType>(urlUsers);
// const companiesData = getData<CompanyType>(urlCompanies);
//
// console.log('userDataX',usersData);
// console.log('companiesDataX',companiesData);


const renderCompaniesAndItsUsers = async () => {
    let users = await usersData;
    let companies = await companiesData();


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

const renderCompaniesAndItsUsers = async () => {
    let users = await usersData;
    let companies = await companiesData;

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

// window.addEventListener('DOMContentLoaded', () => renderCompaniesAndItsUsers())