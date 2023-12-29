const getRandomInt = ((min, max) => 
{
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
})

let messages = ["Initialising Hacking", "Reading your Files", "Password Files Detected", "Sending all the passwords and personal files to the server", "Cleaning up"]
let li = document.getElementsByTagName("li")
let dot = "<span>.</span>"

async function display() {
    for (let i = 0; i < messages.length; i++) {
        let time = getRandomInt(1, 7)
        await new Promise(resolve => {
            setTimeout(() => {
                li[i].innerHTML = messages[i] + dot + dot + dot
                resolve()
            }, time*1000);
        })
    }
}

display()
var groups = document.querySelectorAll("li")
groups.forEach(function(group, i)  {
   var dots = group.getElementsByTagName("span")
   var current = 0
   setInterval(() => {
       dots[current].style.visibility = 'hidden'
       current = (current + 1)%(dots.length)
       dots[current].style.visibility = 'visible'
   }, 200);
});
