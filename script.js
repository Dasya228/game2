const inputs = document.querySelectorAll("input")
const userGame = document.querySelector("#userGame")
const computerGame = document.querySelector("#computerGame")
const gameRes=document.querySelector("#gameRes")
const userImg = document.querySelector("#userImg")
const computerImg=document.querySelector("#computerImg")

const arr = ['Бумага','Ножница','Камень']

inputs.forEach((input)=>{
    input.addEventListener('click',(e)=>{
        const computer = arr[Math.floor(Math.random()*arr.length)]
       const user = e.target.value
        const result = game(user,computer)
        console.log(result);
        userGame.innerHTML=user
        computerGame.innerHTML=computer
        gameRes.innerHTML=result
        if (user==="Ножница"){
            userImg.src='./nojnici.jpg'
        }else if(user==="Бумага"){
            userImg.src='./bymaga.png'
        }
        else if(user==="Камень"){
            userImg.src='./kamen.webp'
        }

        if(computer==="Ножница"){
            computerImg.src='./nojnici.jpg'
        }else if(computer==="Бумага"){
            computerImg.src='./bymaga.png'
        }
        else if(computer==="Камень"){
            computerImg.src='./kamen.webp'
        }
    })

})

function game(user,computer){
    if(user===computer){
        return 'Ничья!'
    }else if((user==='Бумага'&&computer==='Ножница')||(user==='Ножница'&& computer==='Камень')||(user==='Камень'&&computer==='Бумага'))  {
        return 'Вы проиграли! попробуйте еще раз :('
    }else if((user==='Бумага'&&computer==='Камень')||(user==='Камень'&&computer==='Ножница')||(user==='Ножница'&&computer==='Бумага')){
        return 'Ура! Вы победили!'
    }
}

