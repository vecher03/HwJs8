


let name1 = prompt('Имя');
let birth = +prompt('Год рождения');
let year = +prompt('Нынешний год');

function string(one, two, three) {
    let res = (one + ', Ваш возраст: ' + (two - three));
    return res;
}

alert(string(name1, year, birth));




