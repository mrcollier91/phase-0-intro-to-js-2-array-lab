let cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(name) {
    cats.push(name)
}

function destructivelyPrependCat(name) {
    cats.unshift(name)
}

function destructivelyRemoveLastCat(name) {
    cats.pop()
}

function destructivelyRemoveFirstCat(name) {
    cats.shift()
}

function appendCat(name) {
    let newCats = cats.slice(name)
    newCats.push(name)
    return newCats
}

function prependCat(name) {
    let newCats = cats.slice(name)
    newCats.unshift(name)
    return newCats
}

function removeLastCat(name) {
    let newCats = cats.slice(name)
    newCats.pop()
    return newCats
}

function removeFirstCat(name) {
    let newCats = cats.slice(name)
    newCats.shift()
    return newCats
}