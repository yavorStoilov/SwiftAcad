var allEmails = ["johndoe@hotmail.com", "johndoe@abv.bg", "johndoe@gmail.com", "johndoe@mail.bg"];

function onlyComMails(allEmails){
    var comEmails = [];
    content = ".com"
    var a = 0;
    for(var i = 0; i < allEmails.length; i++){
        if(allEmails[i].includes(content)){
            comEmails[a++] = allEmails[i];
        }
    }
    return comEmails.join(", ");
}