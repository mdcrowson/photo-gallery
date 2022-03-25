// let str = "";

// for (let i = 0; i < str.length; i++) {
//     str = document.getElementById('search').value
//     console.log(str);
//   }


// let userInput = document.getElementById('search').value;

// window.addEventListener("keydown", event => {
//     if (event.key == "v") {
//       document.body.style.background = "violet";
//     }
//   });
//   window.addEventListener("keyup", event => {
//     if (event.key == "v") {
//       document.body.style.background = "";
//     }
//   });

// function searchFilter() {
//     let userInput = document.getElementById('search').value;
//     console.log(userInput);
//     const regex1 = new RegExp (/(?:^|\s)hay/i|(?:^|\s)bales/i);
//     if (regex1.test(userInput)) {
//         return document.getElementById('photo1').style.display = "initial";
//     } else return document.getElementById('photo1').style.display = "none";
// }

// function searchFilter() {
//     let userInput = document.getElementById('search').value.toUpperCase();
//     console.log(userInput);
//     const regex1 = new RegExp ('\\b' + userInput, 'i');
//     if (regex1.test("I love hay bales Took this snap on a drive through the countryside past some straw fields ")) {
//         return document.getElementById('photo1').style.display = "initial";
//     } else return document.getElementById('photo1').style.display = "none";
// }

// let caption1 = document.getElementById('photo1');   
// console.log(caption1);

// function searchFilter() {
//     let userInput = document.getElementById('search').value.toUpperCase();
//     console.log(userInput);
//     const regex1 = new RegExp ('\\b' + userInput, 'i');
    
//     if (regex1.test("I love hay bales Took this snap on a drive through the countryside past some straw fields ")) {
//         document.getElementById('photo1').style.display = "initial";
//     } else document.getElementById('photo1').style.display = "none";
    
//     if (regex1.test("The lake was so calm today We had a great view of the snow on the mountains from here ")) {
//         document.getElementById('photo2').style.display = "initial";
//     } else document.getElementById('photo2').style.display = "none";
// }

// function searchFilter() {
//     let userInput = document.getElementById('search').value.toUpperCase();
//     console.log(userInput);
//     let userSubstrings = userInput.split(' ');
//     // const regex1 = new RegExp ('\\b' + userSubstrings, 'i');
//     const regex1 = new RegExp ('\\b' + userSubstrings, 'i');
    
//     if (regex1.test("I love hay bales. Took this snap on a drive through the countryside past some straw fields.")) {
//         document.getElementById('photo1').style.display = "initial";
//     } else document.getElementById('photo1').style.display = "none";

// }

// function searchFilter() {
//     let userInput = document.getElementById('search').value;
//     // console.log(userInput);
//     let splitInput = userInput.split(' ');
//     // console.log(userSubstrings);
    
//     // userSubstrings.forEach(element => {
//     //     let userRegex = userSubstrings.map(element => '\\b' + element);
//     //     console.log(userRegex);
//     // }
//     // );
   

//     // let userRegex = userSubstrings.map(element => '\\b' + element);
//     // console.log(userRegex);
    
//     let comboRegex = splitInput.join('|');
//     console.log(comboRegex);

// }

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


// if (regex.test(document.getElementById('photo1').getAttribute('data-caption'))) {
//     document.getElementById('photo1').style.display = "initial";
// } else document.getElementById('photo1').style.display = "none";