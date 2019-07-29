//console.log('client.js is running..');
// tested and logged to show the file is linked to the index.html
$(document).ready(readyNow);

let totalMonthly = 0;
// defined a global variable to hold the value of the input from the annual / 12.

function newEmployee(){
    console.log('adding a newEmployee');
    //logging the function works.
    let firstname = $('#firstName').val();
    let lastname = $('#lastName').val();
    let iD = $('#iD').val();
    let title = $('#title').val();
    let monthly = ($('#annualSalary').val() / 12); // does the math for the annual value / 12 = monthly value
    let annualsalary = $('#annualSalary').val();

    //showing in the console what the employee gathered input is as it ties to the variable name. 
    console.log(firstname);
    console.log(lastname);
    console.log(iD);
    console.log(title);
    console.log(monthly);
    console.log(annualsalary);

    //adding the content / table item / to the DOM at the point specified on the index.html file
    $('#employeeData').append(
        `<tr>
            <td>${firstname}</td>
            <td>${lastname}</td>
            <td>${iD}</td>
            <td>${title}</td>
            <td class="monthlySalary">${monthly}</td>
            <td>${annualsalary}</td>
            <td><th><button class="delete">Delete</button></th></td>
        </tr>`
    );
    
}// end newEmployee function.


// created readyNow to be the first function ran upon the page load. 
function readyNow() {
    //console.log('DOM is Ready!');
    //logging the function works.
    $('#infoGrabber').on('click', newEmployee );
    $('#infoGrabber').on('click', monthlyTotal);
    $('#infoGrabber').on('click', removeInput);
    $('#employeeData').on('click', '.delete', deleteEmployee);
    $('#employeeData').on('click', '.delete', overTwenty);
    $('#infoGrabber').on('click', overTwenty );
}// end readyNow

// created a function to calculate the annual to monthly conversion of the salary.
function monthlyTotal(){
    //console.log('in monthlyTotal');
    //logging the function works.
    totalMonthly = totalMonthly + ($('#annualSalary').val() / 12); 
    $('#monthlyTotal').text(totalMonthly);
    console.log('Total Monthly:', totalMonthly);
    // take all input employee monthly totals from the salaries and add them together
    // return a value that is appended to the DOM in the "Total Monthly" h4 tags
}// end monthlyTotal


//created a function to empty the totalMonthly variable value to the previous value seen. 
function overTwenty(){
    //console.log('in overTwenty');
    //loggin the function works.
    if (totalMonthly >= 20000){ 
        $('#monthlyTotal').addClass('funTotal')
    } else {
        $('#monthlyTotal').removeClass('funTotal')
    }
}// end overTwenty

// created a function to remove an employee from the table and the DOM via the click of the 'delete' button. 
function deleteEmployee(){
    console.log('deleted emplopyee from DOM');
    //logging the function works.
    let monthlySalary = $(this).parent().siblings('.monthlySalary').text();
    console.log(monthlySalary);
    totalMonthly -= monthlySalary;
    console.log(totalMonthly);
    $('#monthlyTotal').text(totalMonthly);
    $(this).parent().parent().remove();
}// end deleteEmployee

// created a function to remove the input values from the placeholders referenced in the index.html file.
function removeInput(){
    console.log('Data fields wiped. Ready for new input.');
    //logging the function works.
    $('#firstName').val('');
    $('#lastName').val('');
    $('#iD').val('');
    $('#title').val('');
    $('#annualSalary').val('');
    //sets the values of all input fields back to 0 / no value. 
}// end removeInput
