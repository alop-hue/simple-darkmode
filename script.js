let darkMode = localStorage.getItem('darkmode');
const themeSwitch = document.getElementById('switch');

const enabledarkmode = () => {
    document.body.classList.add("darkmode");
    localStorage.setItem('darkmode', 'active');
}
const disabledarkmode = () => {
    document.body.classList.remove("darkmode");
    localStorage.setItem('darkmode', null);
}
if (darkMode === "active") enabledarkmode();
themeSwitch.addEventListener('click' , () => {
    darkMode = localStorage.getItem('darkmode')
    darkMode !== "active" ? enabledarkmode() : disabledarkmode()
})
