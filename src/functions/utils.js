export function capitalize(string) {
    if (!string) return
    const [firstWord, ...otherWords] = string.split(' ')
    const [firstLetter, ...otherLetters] = firstWord.split('')
    const capWord = [firstLetter.toUpperCase(), ...otherLetters].join('')

    return [capWord, ...otherWords].join(' ')
}

export function capitalizeAll(string) {
    if (!string) return
    const wordArr = string.split(' ')

    return wordArr.map(word => capitalize(word)).join(' ')
}