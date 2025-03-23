window.onload = function(){
    let nt=document.getElementById('nt')
    let at=document.getElementById('at')
    let list=document.getElementById('list')

    at.onclick = function(){
        let item=document.createElement('li')

        //x btn
        let xb=document.createElement('button')
        xb.innerText='x'
        xb.onclick = function(event){
            event.target.parentElement.remove()
        }

        let ub=document.createElement('button')
        ub.innerText='^'
        ub.onclick= function(event){
            //event.target=the up button
            //event.target.parentElement=the<li> item</li>
            //event.target.parentElement.parentElement is the todo list
            event.target.parentElement.parentElement.insertBefore(
                event.target.parentElement, //insert this element
                event.target.parentElement.previousElementSibling //before it's previous elemnt
            )

        }

        let db=document.createElement('button')
        db.innerText='v'
        db.onclick= function(event){
            event.target.parentElement.parentElement.insertBefore(
                //no insertAfter
                event.target.parentElement.nextElementSibling,
                event.target.parentElement
            )

        }

        //add task
        let ts=document.createElement('span')
        ts.innerText=nt.value
        
        item.appendChild(xb)
        item.appendChild(ub)
        item.appendChild(db)
        item.appendChild(ts)
        list.appendChild(item)
    }

    // at.onclick = function(){
    //     let item=document.createElement('li')
    //     item.innerText=nt.value
    //     let xb=document.createElement('button')
    //     xb.innerText='x'
    //     xb.onclick = function(event){
    //         event.target.parentElement.remove()
    //     }
    //     item.appendChild(xb)
    //     list.appendChild(item)
    // }
}
