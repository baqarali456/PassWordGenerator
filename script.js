const search = document.getElementById('search');
const input = document.getElementById('input')
search.addEventListener('click',()=>{
    let pass = "";
    let length = Math.floor(Math.random() * 30 + 1);
    for(i=0;i<length;i++){
        let chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        let num = "1234567890";
        let specialchar = "!@#$%^&*{(})?|";
        if(length > 10){
            chars += num
            chars += specialchar
        }
        pass += chars[Math.floor(Math.random() * chars.length)]
    }
  input.value = pass.toLocaleLowerCase()
});