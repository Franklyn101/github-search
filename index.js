let form = document.getElementById("myForm")


form.addEventListener('submit', function(e) {
    e.preventDefault()

    let search = document.getElementById("search").value

    let originalName = search.split(' ').join('')

    document.getElementById("result").innerHTML = ""

    fetch("https://api.github.com/users/" + originalName)
    .then((result) => result.json())
    .then((data) => {
        console.log(data)

        document.getElementById("result").innerHTML = `
        <a target="blank" href="https://www.github.com/${originalName}"> <img src="${data.avatar_url}" width="100%" height="100%"/></a>  
        `
    })
})