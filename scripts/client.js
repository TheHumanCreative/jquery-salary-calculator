console.log('client.js is running..');
// tested and logged to show the file is linked to the index.html
$(document).ready(readyNow);

function newEmployee(){
    console.log('adding a newEmployee');
    let firstname = $('#firstName').val();
    let lastname = $('#lastName').val();
    let iD = $('#iD').val();
    let title = $('#title').val();
    let monthly = ($('#annualSalary').val() / 12); // does the math for the annual value / 12 = monthly value
    let annualsalary = $('#annualSalary').val();

    console.log(firstname);
    console.log(lastname);
    console.log(iD);
    console.log(title);
    console.log(monthly);
    console.log(annualsalary);

    $('#employeeData').append(
        `<tr>
            <td>${firstname}</td>
            <td>${lastname}</td>
            <td>${iD}</td>
            <td>${title}</td>
            <td>${monthly}</td>
            <td>${annualsalary}</td>
            <td><th><button class="delete">Delete</button></th></td>
        </tr>`
    );

//logged out the info input and gathered from the submit button which shows the employees data in the console. 
    
}// end newEmployee function.


// created readyNow to be the first function ran upon the page load. 
function readyNow() {
    console.log('DOM is Ready!');
    //logging the function works.
    $('#infoGrabber').on('click', newEmployee );
    $('#employeeData').on('click', '.delete', deleteEmployee );
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
    console.log('in monthlyTotal');
    //logging the function works.
    // take all input employee monthly totals from the salaries and add them together
    // return a value that is appended to the DOM in the "Total Monthly" h4 tags
}// end 

function deleteEmployee(){
    console.log('deleted emplopyee from DOM');
    //logging the function works.
    $(this).parent().parent().remove();
}// end 

