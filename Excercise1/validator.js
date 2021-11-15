function validate() {
    if (document.getElementById("text1").value.length < 8) {
        alert("The length of the password must be at least 8.");
    }
    else if (document.getElementById("text1").value !== document.getElementById("text2").value) {
        alert("The passwords do not match!");
    }

    else if (document.getElementById("text1").value == document.getElementById("text2").value) {
        alert("The passwords valid!");
    }
}