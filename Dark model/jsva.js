
const bt = document.getElementById("btn")
const themeSystem = localStorage.getItem("themeSystem") || "light"
bt.addEventListener("click", () =>{
    let oldTheme = localStorage.getItem("themeSystem") || "light";
    let newTheme = oldTheme == "light" ? "dark" : "light" 

    localStorage.setItem("themeSystem", newTheme)
    defineCurrentTheme(newTheme)
})

function defineCurrentTheme(theme){
    document.documentElement.setAttribute("data-theme", theme)
}



defineCurrentTheme(themeSystem)