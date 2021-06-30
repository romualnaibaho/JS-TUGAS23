function checkAge(age) {
    return age >= 15;
}

function urutkan(){

    var array = [32, 33, 16, 40, 9, 7, 11, 2, 44, 1, 66];

    var filtered_array = array.filter(checkAge);

    console.log(filtered_array);
}

urutkan();