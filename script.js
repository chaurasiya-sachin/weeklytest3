function ageCalulator(){
    // user input
    let userInput = document.querySelector("#user-birth").value;
    let result = document.querySelector("#result-value");
    let dob = new Date(userInput);

    // checking validation
    if(userInput==null || userInput==""){        
        result.style.color = "red"
        result.innerHTML="Please Enter the valid date !!";
        return 
    }
   
    // calculating month diffrence from current date in time
    let month_diff = Date.now()-dob.getTime();

    // converting the diffrence into date format
    let age_dt = new Date(month_diff)

    // extract year from date
    let year = age_dt.getUTCFullYear();

    // now calculate the age of the user 
    let age = Math.abs(year-1970);

    // display on the result section
    result.style.color = "black"
    return document.querySelector("#result-value").innerHTML="Your age is "+age + " Years."


}


