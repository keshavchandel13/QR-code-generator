
const btn=document.getElementById("btn");


btn.addEventListener('click',()=>{
    const text=document.getElementById("input-area").value;
    console.log(text);
    if(text==null){
        window.alert("Enter valid text");
    }
    else{
    document.getElementById("img").src=`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${text}`
   }
});