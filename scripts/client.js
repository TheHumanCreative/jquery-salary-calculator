console.log('client.js is running..');
// tested and logged to show the file is linked to the index.html
$(document).ready(readyNow);

function newEmployee(){
    console.log('adding a newEmployee');
    let firstname = $('#firstName').val();
    let lastname = $('#lastName').val();
    let iD = $('#iD').val();
    let title = $('#title').val();
    let monthlysalary = ($('#annualSalary').val() / 12); // does the math for the annual / 12 = monthly
    let annualsalary = $('#annualSalary').val();

    console.log(firstname);
    console.log(lastname);
    console.log(iD);
    console.log(title);
    console.log(monthlysalary);
    console.log(annualsalary);

//logged out the info input and gathered from the submit button which shows the employees data in the console. 
    
}// end newEmployee function.


// created readyNow to be the first function ran upon the page load. 
function readyNow() {
    console.log('DOM is Ready!');
    //logging the function works.
    $('#infoGrabber').on('click', newEmployee );
}// end readyNow


// created a function to gather the values inputed by the user.
function monthlyCost(){
    console.log('in monthlyCost');
    //logging the function works.
    return annualsalary / 12;
    console.log(annualsalary / 12);
}// end 

// created a function to calculate the annual to monthly conversion of the salary.

function monthlyTotal(){
    console.log('');
    //logging the function works.

    //

}// end 

function addEmployee(){
    console.log('');
    //logging the function works.
    

}// end 

