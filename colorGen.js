const charList = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F']
const generateBtn = document.querySelector('#gene')
const searchBar = document.querySelector('#hex-search')

const generate = () => {
    let colorGenerated = ''
    for (let x = 0; x < 6; x++) {
        colorGenerated += charList[Math.floor(Math.random() * (charList.length - 1))]
    }
    document.getElementById('output').innerHTML = `Background Color: #${colorGenerated}`
    document.body.style.backgroundColor = `#${colorGenerated}`
}

generateBtn.addEventListener('click', () => {
    generate()
})
