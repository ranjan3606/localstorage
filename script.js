let arr = []
document.getElementById('btn').onclick = ()=> {
   let textInput = document.getElementById("itext" ).value;
   arr.push(textInput)
    localStorage.setItem("programming",JSON.stringify(arr))
    
    const dataStore =JSON.parse(localStorage.getItem("programming"));
    dataStore.forEach(datas => {
        document.getElementById('getData').innerHTML = "<p>"+ datas+"</p>"
    })
    console.log(dataStore)
}

document.getElementById('btn1').onclick = () => {
    localStorage.clear()
}