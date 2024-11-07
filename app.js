let joueur=0;

let matrice=[[0,2,3],[4,5,6],[7,8,9]];

let wait=()=>{};

function isWin(){
    
    return (matrice[0][0]==matrice[0][1] && matrice[0][1]==matrice[0][2]) 
    ||(matrice[1][0]==matrice[1][1] && matrice[1][1]==matrice[1][2])
    ||(matrice[2][0]==matrice[2][1] && matrice[2][1]==matrice[2][2])
    ||(matrice[0][0]==matrice[1][0] && matrice[1][0]==matrice[2][0])
    ||(matrice[0][1]==matrice[1][1] && matrice[1][1]==matrice[2][1])
    ||(matrice[0][2]==matrice[1][2] && matrice[1][2]==matrice[2][2])
    ||(matrice[0][0]==matrice[1][1] && matrice[1][1]==matrice[2][2])
    ||(matrice[0][2]==matrice[1][1] && matrice[1][1]==matrice[2][0]);
}



let reset=()=>{
    cpt=2;
    for(let i=0;i<3;i++){
        for(let j=0;j<3;j++){
            document.getElementById(`case${i+1}${j+1}`).style.backgroundImage="";
            matrice[i][j]=++cpt;
        }
    }
}

let clickButton=(i,j)=>{
    joueur++;
    if(joueur%2===0){
        document.getElementById(`case${i+1}${j+1}`).style.backgroundImage=`url("./images/circle.jpg")`;
        matrice[i][j]=-1;
        
    }else{
        
        document.getElementById(`case${i+1}${j+1}`).style.backgroundImage=`url("./images/cross.png")`;
        matrice[i][j]=1;
    }
    
    if(isWin()){
        setTimeout(wait, 2000);
        if(joueur%2===0){
            alert("Circle win");
        }else{
            alert("Cross win");
        }
        reset();
    }
    
}
    
for(let i=0;i<3;i++){
    for(let j=0;j<3;j++){
    document.getElementById(`case${i+1}${j+1}`).addEventListener("click",()=>clickButton(i,j));
    }
}

document.getElementById("reset").addEventListener("click",reset);


