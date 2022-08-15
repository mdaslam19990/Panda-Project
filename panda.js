const h1 = document.getElementsByTagName("h1");
const bags = document.getElementById("bags");
const cards = document.querySelectorAll(".card");
const btns = document.getElementsByClassName("btn");
const inputText = document.getElementById("input-text");
const inputBtn = document.getElementById("input-btn");
const imageChange = document.getElementById("image-change");
const letsSection = document.getElementById("lets-section");

for(const heading of h1){
    heading.style.color = "lightblue";
}

bags.style.backgroundColor = "tomato";
bags.style.borderRadius = "20px";

for(const card  of cards)(
    card.style.borderRadius = "30px"
)

function btnClick(){
    console.log("clicked shoes third button")
}

for(const btn of btns){
    btn.addEventListener("click", function(){
        btn.style.display = "none";
    })
}


inputText.addEventListener("keyup", function(e){
    const text = e.target.value;
    if(text === "email"){
        inputBtn.removeAttribute("disabled");
    }else{
        inputBtn.setAttribute("disabled", true)
    }
})


imageChange.addEventListener("mouseenter", function(){
    console.log(imageChange)
    imageChange.src = "./images/shoes/shoe-3.png"
})
imageChange.addEventListener("mouseout", function(){
    imageChange.src = "./images/shoes/shoe-1.png"
})

letsSection.addEventListener("dblclick", function(){
    letsSection.style.backgroundColor = "tomato";
})
