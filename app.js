let joueur=0;

let matrice=[[0,2,3],[4,5,6],[7,8,9]];

let isWin=(i,j)=>{
    
}


let clickButton=(i,j)=>{
    if(joueur%2===0){
        matrice[i][j]=-1;
        document.getElementById(`case${i+1}${j+1}`).style.backgroundImage=`url("./images/circle.jpg")`;
        console.log(matrice);
        
    }else{
        matrice[i][j]=1;
        document.getElementById(`case${i+1}${j+1}`).style.backgroundImage=`url("./images/cross.png")`;
        console.log(matrice);
    }
    joueur++;
    
}
    
for(let i=0;i<3;i++){
    for(let j=0;j<3;j++){
    document.getElementById(`case${i+1}${j+1}`).addEventListener("click",()=>clickButton(i,j));
    }
}



