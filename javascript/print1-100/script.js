window.onload = function(){
    let n=document.getElementById('n')
    let p=document.getElementById('p')
    let list=document.getElementById('list')

    // p.onclick = function(){
    //     let s=new Date().getTime()
    //     let N=parseInt(n.value)
    //     for(let i=1;i<=N;i++){
    //         //list.innerHTML+='<li>'+ i +'</li>'
    //         //-----thi is same as-----
    //         // let st=list.innerHTML + '<li>'+ i +'</li>'
    //         // list.innerHTML=null
    //         // list.innerHTML=st
    
            
    //     }
    //     console.log(new Date().getTime()-s)
    // }

    // p.onclick = function(){
    //     let s=new Date().getTime()
    //     let N=parseInt(n.value)
    //     let listHTML=''
    //     for(let i=1;i<=N;i++){
    //         listHTML+='<li>'+ i +'</li>'
    //     }
    //     list.innerHTML=listHTML
    //     console.log(new Date().getTime()-s)
    // }

    p.onclick = function(){
        let s=new Date().getTime()
        let N=parseInt(n.value)
        for(let i=1;i<=N;i++){
            let item=document.createElement('li')
            item.innerText=i
            list.appendChild(item)
        } 
        console.log(new Date().getTime()-s)
    }
}

