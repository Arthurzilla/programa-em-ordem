function sortfunction(a, b){
    return(a-b)
}






function pogger(){
    
    
    var v1 = document.getElementById('v1').value
    var v2 = document.getElementById('v2').value
    var v3 = document.getElementById('v3').value

    if(v1 == "" || v2 == "" || v3 == ""){
        document.getElementById("resultado").textContent = "existe espaços em branco"
    }else{
        nums = [v1, v2, v3]
        document.getElementById("resultado").textContent = nums.sort(sortfunction)
    }

    
}

var button = document.getElementById('button')
button.addEventListener('click', pogger)




