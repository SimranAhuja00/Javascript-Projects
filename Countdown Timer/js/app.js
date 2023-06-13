const endDate = "03 August 2023 00:00 AM" //Launch Date

document.getElementById("end-date").innerText = endDate;
const inputs = document.querySelectorAll("input");

function clock(){
    const end = new Date(endDate);
    const now = new Date();
    const diff = (end - now)/ 1000;
    //convert
    inputs[0].value = Math.floor(diff/3600/24); //days
    inputs[1].value = Math.floor((diff/3600)%24); //hours
    inputs[2].value = Math.floor((diff/60)%60); //minutes
    inputs[3].value = Math.floor(diff%60); //seconds
    console.log(day);

}

//initial call
// clock();

setInterval(
    () => {
        clock()
    },
    1000
)
