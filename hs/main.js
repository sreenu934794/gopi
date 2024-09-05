let langOption = document.querySelectorAll('select');
let fromText   = document.querySelector('.formText');
let transText  = document.querySelector('.toTranslate');
let fromVoice  = document.querySelector('.from');

langOption.forEach((get, con) =>{
    for(let countryCode in language) {
        let selected;
        if(con == 0 && countryCode == "en-GB"){
           selected = "selected";
        }else if(con == 1 && countryCode == "bn-IN"){
            selected = "selected";
        }
        let option = `<option value="${countryCode}" ${selected}>${language [countryCode]}</option>`;
        
        get.insertAdjacentHTML('beforeend',option);
    }
})



if(fromText){
fromText.addEventListener('input', function() {
        let content = fromText.value;
        fromContent = langOption[0].value;
        transContent= langoption[1].value;
        let transLINK= `https://api.mymemory.translated.net/get?q=${content} !&langpair=${fromContent}|${transContent}`;
       
        fetch(transLINK).then(translate => translate.json()).then(data =>{
           // console.log(data)
            transText.value = data.responseData.translatedText;
        
        })

}) 
}
if(fromText){ 
fromVoice.addEventListener('click', function() {
    console.log('icon clicked')
})
}  
