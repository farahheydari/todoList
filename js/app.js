    
    
    
    let inp=document.querySelector('#Inp')
    let btn = document.querySelector('#btnAdd')
    let list =document.querySelector('.list')
    let update = document.getElementById('btnUpdate')
    let data = []

    /////for localStorage

        // let x = JSON.parse(localStorage.getItem('todoNAmes'))

        // if(x!=null){
        //     data=x
        //     for(let i = 0 ; i<data.length ; i++){
        //     let li = document.createElement('li')
        //         li.innerHTML = `
        //             <span class=line></span>
        //             <span><input type="checkbox"></span>
        //             <p>${data[i]}</p>
        //             <button id=edit>edit</button>
        //             <button id="del">delete</button>
        //         `  
        //     list.appendChild(li) 

        //     }
        // }



        btn.addEventListener('click' , (e)=>{
            let temp = inp.value
            if(temp === ''){
                alert('Erorr')
            }else{
                myAdd(temp)
            
            }

            function myAdd(temp){
                let li = document.createElement('li')
                li.innerHTML = `
                    <span class=line></span>
                    <span><input type="checkbox"></span>
                    <p>${temp}</p>
                    <button id=edit>edit</button>
                    <button id="del">delete</button>
                `     
                let chekbox=li.querySelector('input[type="checkbox"]')
                let Del = li.querySelector('#del')
                let Edit= li.querySelector('#edit')
                let pEdit = li.querySelector('p')
                let isDone = document.getElementById('isDone')

                chekbox.addEventListener('change' ,function (){
                    if(this.checked){
                        this.parentElement.previousElementSibling.style.width='300px'
                    }else{
                        this.parentElement.previousElementSibling.style.width='0'

                    }
                    isDone.style.display='block'
                    let li=document.createElement('li')
                    li.innerHTML=`
                    <p>${temp}</p>
                    <span>✅</span>
                    `
                    isDone.appendChild(li)

                    chekbox.setAttribute('disabled' , 'disabled')
                })




                Del.addEventListener('click' , function(){
                    if(confirm('sure?'))
                        setTimeout(()=>{
                             Del.parentElement.remove()
                        }, 500)
                   
                })

                Edit.addEventListener('click' , function(){
                   inp.value= pEdit.textContent 
                    update.style.display='block'
                    li.setAttribute('editItem', 'true'); 

                })

                update.addEventListener('click' , ()=>{
                let editLi = list.querySelector('li[editItem="true"]');

                if (editLi) {
                let pElementToUpdate = editLi.querySelector('p');
                pElementToUpdate.textContent = inp.value;
                editLi.setAttribute('editItem', 'false'); 
                update.style.display = 'none'; 
                inp.value = ''; 
                }
                                    
                })


                list.appendChild(li) 
                inp.value=null     
                inp.focus()  
                
                // data.push(temp)
                // localStorage.setItem('todoNAmes', JSON.stringify(data))
            }

          


       
        })
            