    // ---------------------------Variables----------------------------->

let input = document.querySelector("input");
let btn = document.querySelector("#btn");
let list = document.querySelector(".do-list-text");
 
    // ---------------------------Event----------------------------->
btn.addEventListener("click" ,function(){

    // ---------------------------Conditions----------------------------->

    if( input.value == "" ){
        alert("Please Enter Task!");
    }
else{


    let inputResult = document.createElement("ol"); /*inserting ordered list element*/ 
    inputResult.innerHTML = `<span>${input.value} </span> </i><i id="del" class="fa-solid fa-trash"></i>`;
    list.appendChild(inputResult);

    input.value = "";

    // ---------------------------Delete function----------------------------->

    let trash = inputResult.querySelector(".fa-trash");

    trash.addEventListener("click",function(){
        inputResult.remove();




        
    });


}
});




    









