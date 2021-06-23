const characterrange = document.getElementById("characterAmountRange")
const characternumber = document.getElementById("characterAmountNumber")
const form = document.getElementById("passwordgen")
const includeUppercaseElement=document.getElementById("includeUppercase")
const symbols = document.getElementById("includeSymbols")
const number=document.getElementById("includeNumbers")
const passdisplay = document.getElementById("password-display")

const UPPERCASE_CHAR_CODES=arrayfromhightolow(65,90)
const LOWERCASE_CHAR_CODES=arrayfromhightolow(97,122)
const NUMBER_CHAR_CODES=arrayfromhightolow(48,57)
const SYMBOL_CHAR_CODES=arrayfromhightolow(33,47).concat(
    arrayfromhightolow(58,64)
    ).concat(
        arrayfromhightolow(91,96))
        .concat(
            arrayfromhightolow(123,126)
        )
        

characternumber.addEventListener("input",synchCharacterAmount,)
characterrange.addEventListener("input",synchCharacterAmount)

function synchCharacterAmount(e) {
    
    const value = e.target.value
    characternumber.value=value
    characterrange.value=value
}

form.addEventListener("submit",e =>{
const characterAmount=characternumber.value
const includeUppercase=includeUppercaseElement.checked
const includeNumbers=number.checked
const includeSymbols=symbols.checked
    e.preventDefault()
    const password = generatePassword(characterAmount,includeUppercase,includeNumbers,includeSymbols)
passdisplay.innerText=password


})

function generatePassword(characterAmount,includeUppercase,includeSymbols,includeNumbers) {
   let charCodes = LOWERCASE_CHAR_CODES
   if (includeUppercase) {charCodes= charCodes.concat(UPPERCASE_CHAR_CODES)}
   if (includeNumbers) charCodes= charCodes.concat(SYMBOL_CHAR_CODES)
   if (includeSymbols) charCodes= charCodes.concat(NUMBER_CHAR_CODES)
    const passwordCharacters=[]
   for(let i = 0; i<characterAmount; i++) {
       let characterCode= charCodes[Math.floor(Math.random()* charCodes.length)]
    passwordCharacters.push(String.fromCharCode(characterCode))
   }
   return passwordCharacters.join("")

   
    
    
}
function arrayfromhightolow(lowvalue,highvalue) {
    const array=[]
    for(let i=lowvalue; i<=highvalue;i++) {
        array.push(i)
    }
    return array
}