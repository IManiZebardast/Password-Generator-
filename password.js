

document.addEventListener("DOMContentLoaded",()=>{
    const passwordChars = [0,1,2,3,4,5,6,7,8,9,"a", "b", "c", "d","e", "f", "g", "h", "i", "j", "k", "l","m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
    document.querySelector('#passwordButton').onclick = () => {
        let password = '';
        for (let i = 0; i < 10; i++) {
            const randomIndex = Math.floor(Math.random() * passwordChars.length);
            password += passwordChars[randomIndex];
        }
        document.querySelector('#h1Password').innerHTML = password;
    
    }
})