Feature('addEmployee');

const testData = require('/home/marvin/Documents/My projects/Employee management/employee-management-codeceptjs/testdata.json');

Scenario('Adding employee',  ({ I }) => {

testData.forEach((data, index) => {

I.amOnPage('/')
I.wait(5)
I.see('Employee List', {xpath: '//*[@id="root"]/div/div/main/div/div/h1'})
I.click('#addEmployee')
I.wait(3)
I.fillField('#firstName', data.firstName)
I.fillField('#lastName', data.lastName)
I.fillField('#department', data.department)
I.fillField('#designation', data.designation)
I.click('#submitButton')
I.wait(4)

});


});


// Scenario('Deleting employee', ({I}) => {
//     I.amOnPage('/')
//     I.wait(5)
//     I.see('Employee List', {xpath: '//*[@id="root"]/div/div/main/div/div/h1'})
//     I.click('#deleteEmployee')
// })