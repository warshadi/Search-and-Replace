/*
    Search and Replace
*/

function myReplace(str, before, after) {
    let new_str = str.split(" ");
    let result = [];
    for (let i = 0; i < new_str.length; i++) {
        if (new_str[i] === before) {
            result.push(after);
        } else {
            result.push(new_str[i]);
        }
    }
    console.log(result.join(" "))
}

let x = "A quick brown fox jumped over the lazy dog";

myReplace(x, "jumped", "leaped");