const arrayEmails = []

function richiestaEmail(){
    const listEmail = document.getElementById("mails");
    listEmail.innerHTML= '';
    for(let i = 0; i<10; i++){
        axios.get("https://flynn.boolean.careers/exercises/api/random/mail").then(response =>{  
                const email= response.data.response;


                const listItem = document.createElement('li')

                listItem.textContent = email;
                listEmail.appendChild(listItem)
                console.log(email)
        })
    }
}

document.getElementById('load-mails').addEventListener('click', richiestaEmail);