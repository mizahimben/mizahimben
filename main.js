function errorBox(bilgi,hata){
let hata_mesajı = document.getElementById("bekleyen-hata-mesajı")
let hata_mesajı_head = document.getElementById("bekleyen-hata-mesaji-head")
let bekleyen_hata_mesaji_error = document.getElementById("bekleyen_hata_mesaji_error")
let hata_mesajı_kapat = document.getElementById("hata-mesaji-kapat")
hata_mesajı_head.textContent = bilgi + " Geri bildirim için elaumutdeniz@gmail.com posta adresine çekinmeden hatayı bize gönderebilirsiniz."
bekleyen_hata_mesaji_error.textContent = hata
hata_mesajı.style.display = "flex"
hata_mesajı.style.animation = "pop 0.6s forwards"; // Enable animation
hata_mesajı_kapat.onclick = ()=> {hata_mesajı.style.display = "none"; hata_mesajı.style.animation = "" }
}

// Select theme buttons
let dark_Ay = document.getElementById("ay_dark");
let gunes_light = document.getElementById("güneş_light");

// Function to apply theme
function applyTheme(theme) {
try{
        document.documentElement.setAttribute("data-theme", theme); // Set attribute for CSS
        localStorage.setItem("theme", theme); // Save theme in localStorage

        if (theme === "dark") {
            dark_Ay.src = "simgeler/moon-icon.svg"; // Dark mode icon
            gunes_light.src = "simgeler/sun-icon.svg";
        } else {
            dark_Ay.src = "simgeler/moon-line-icon.svg"; // Light mode icon
            gunes_light.src = "simgeler/sun-warm-icon.svg";
            
        } 
    } 
    catch(error){errorBox("Sanır")}
}
// On page load, apply the stored theme or system preference
document.addEventListener("DOMContentLoaded", () => {
    try { // Add try catch here to handle localStorage errors.
        let savedTheme = localStorage.getItem("theme");
        if (savedTheme) { //Check if savedTheme exists FIRST.
                applyTheme(savedTheme);
        } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) { //Then check for system preference.
                applyTheme("dark");
        } else {  //Default to light if no saved theme AND no dark preference
                applyTheme("light");
        }
    } catch (error) {
        errorBox("Sanırım temayı uygularken bir hata oldu.", error)
        applyTheme("light"); // Fallback in case of localStorage error.
    }

    // Dark mode button event
    dark_Ay.addEventListener("click", () => {
        applyTheme("dark");
    });

    // Light mode button event
    gunes_light.addEventListener("click", () => {
        applyTheme("light");
    });
});