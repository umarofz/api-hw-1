let elBtn = document.querySelector(".btn")
let wrapper = document.querySelector(".wrapper")
let blockquote = document.querySelector(".text")

function renderImg(data1, wrapper1, blockquote1) {
    // wrapper1.src = data1
    // blockquote1.textContent = data1

    for (const item of data1) {
        wrapper1.src = item.image
        blockquote1.textContent = item.quote
    }
}

elBtn.addEventListener("click", function(evt) {
    fetch("https://simpsons-quotes-api.herokuapp.com/quotes")
    .then(res => res.json())
    .then(data => renderImg(data, wrapper, blockquote))
    
})