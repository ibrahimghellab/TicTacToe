let matrice=[0,0,0,0,0,0,0,0,0];

let joueur=0;




let clickButton=(indice)=>{
    if(joueur%2===0){
        matrice[indice]=-1;
        document.getElementById(`case${indice+1}`).style.backgroundImage=`url("./images/circle.jpg")`;
        console.log(matrice);
        
    }else{
        matrice[indice]=1;
        document.getElementById(`case${indice+1}`).style.backgroundImage=`url("./images/cross.png")`;
        console.log(matrice);
    }
    joueur++;
    if(isWin){
        alert("Win");
    }
}
    
for(let i=1;i<10;i++){
    document.getElementById(`case${i}`).addEventListener("click",()=>clickButton(i-1));
}



