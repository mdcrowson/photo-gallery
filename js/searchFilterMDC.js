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

function searchFilter() {
    let userInput = document.getElementById('search').value.toUpperCase();
    console.log(userInput);
    const regex1 = new RegExp (('HAY'));
    if (regex1.test(userInput)) {
        return document.getElementById('photo1').style.display = "initial";
    } else return document.getElementById('photo1').style.display = "none";
}

// let caption1 = document.getElementById('photo1');   
// console.log(caption1);




