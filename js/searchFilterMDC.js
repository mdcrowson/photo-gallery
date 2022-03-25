function searchFilter() {
    let userInput = document.getElementById('search').value;

    // dynamic regex idea from Tomas Langkaas at https://stackoverflow.com/a/41869757
    let regex = new RegExp("(?=.*?\\b" + 
        userInput
            .split(" ")
            .join(")(?=.*?\\b") +                     
        ").*", 
        "i"
        );
    
    for (let i=1; i<=12; i++) {
        if (regex.test(document.getElementById(`photo${i}`).getAttribute('data-caption'))) {
                document.getElementById(`photo${i}`).style.display = "initial";
            } else document.getElementById(`photo${i}`).style.display = "none";
    }      
    
}