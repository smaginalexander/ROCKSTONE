// 1. Сверстать страницу с боковым меню.
const burger = document.querySelector('.header__burger')
const munu = document.querySelector('.menu')

const handleToggleBurger = () => {
    burger.classList.toggle('header__burger_disable');
    munu.classList.toggle('menu_disable')
}

burger.addEventListener('click', handleToggleBurger)


// 2. Сделать функцию сдвига элементов массива вправо на N шагов
let a = [1, 2, 3, 4, 5]
console.log('входные данные', a);
let k = 3;

for (i = 0; i < k; i++) a.unshift(a.pop());
console.log('выход данных', a);

//3. Найти самую длинную общую последовательность 2х строк.
const firstString = 'aababba';
const secondString = 'abbaabcd';
console.log(`${firstString} сравним с ${secondString}`);

const comparator = (line1, line2) => {
    arr = [];
    line1.split('').reduce((last, item) => {
        if (line2.indexOf(`${last}${item}`) !== -1) {
            arr.push(`${last}${item}`);
            return `${last}${item}`;
        }
        else return item;
    }, '');
    return arr.sort((a, b) => b.length - a.length)[0]
}
console.log('самая длинная общая последовательность =', comparator(firstString, secondString));

//4. Реализовать отображение/скрытие элементов при переключении чек-боксов
const headerCheckbox = document.getElementById('1')
const menuCheckbox = document.getElementById('2')
const LinksCheckbox = document.getElementById('3')
const AllCheckbox = document.getElementById('4')

const header = document.querySelector('.header');
const menu = document.querySelector('.menu');
const links = document.querySelector('.menu__list');

const changeElementViasability = (checkbox, element) => {
    if (checkbox.checked) {
        element.classList.add('hidden')
    } else {
        element.classList.remove('hidden')
    }
}

const changeAll = () => {
    if (AllCheckbox.checked) {
        headerCheckbox.checked = true
        headerCheckbox.disabled = true
        menuCheckbox.checked = true
        menuCheckbox.disabled = true
        LinksCheckbox.checked = true
        LinksCheckbox.disabled = true
    } else {
        headerCheckbox.checked = false
        headerCheckbox.disabled = false
        menuCheckbox.checked = false
        menuCheckbox.disabled = false
        LinksCheckbox.checked = false
        LinksCheckbox.disabled = false
    }
}

headerCheckbox.addEventListener('click', () => {
    changeElementViasability(headerCheckbox, header)
})
menuCheckbox.addEventListener('click', () => {
    changeElementViasability(menuCheckbox, menu)
})
LinksCheckbox.addEventListener('click', () => {
    changeElementViasability(LinksCheckbox, links)
})

AllCheckbox.addEventListener('click', () => {
    AllCheckbox.toggleAttribute('checked')
    changeAll()
    changeElementViasability(headerCheckbox, header)
    changeElementViasability(menuCheckbox, menu)
    changeElementViasability(LinksCheckbox, links)
})
