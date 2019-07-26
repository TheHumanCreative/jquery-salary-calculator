console.log('client.js is running..');
// tested and logged to show the file is linked to the index.html
$(document).ready(readyNow);

function newEmployee(){
    console.log('in newEmployee');
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
function infoGath(){
    console.log('in infoGath');
    //logging the function works.
    
    
}// end infoGath

// created a function to calculate the annual to monthly conversion of the salary.

function annualCalc(){
    console.log('in annualCalc');
    //logging the function works.

    //

}// end annualCalc

function monthlyCalc(){
    console.log('in monthlyCalc');
    //logging the function works.


}// end monthlyCalc

