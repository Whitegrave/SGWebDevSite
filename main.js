function ValidateValues() {
    //  Retrieve values from required forms
    let userName = document.getElementById("user_name").value;
    let userEmail = document.getElementById("user_email").value;
    let userVisited = document.getElementsByName("HasVisited");
    let userVisitedFlag = false;
    let userDayM = document.getElementById("contact_M").checked;
    let userDayT = document.getElementById("contact_T").checked;
    let userDayW = document.getElementById("contact_W").checked;
    let userDayTh = document.getElementById("contact_Th").checked;
    let userDayF = document.getElementById("contact_F").checked;

    // Iterate through radio buttons in group name HasVisited to verify if any are selected
    for (var i = 0; i < userVisited.length; i++) {
        if (userVisited[i].checked) {
            console.log("Found value");
            userVisitedFlag = userVisited[i].value;
        }
    }

    // Validate for any empty values
    if (userName === "" || 
    userEmail === "" || 
    (userVisitedFlag === false) ||
    (userDayM === false && userDayT === false && userDayW === false && userDayTh === false && userDayF === false)) {
        alert("Some required information was not provided. Required fields are shown in bold.");
        return false;         
    }

    // Return true if successful
    alert("Your request has been submitted to our Zombie Customer Support team!")
    return true;
}