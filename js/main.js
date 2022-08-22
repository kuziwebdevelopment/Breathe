const search = document.querySelector(`.search`);
const google = document.querySelector(`.google`);
google.onclick = () => window.open(`https://www.google.com/search?q=` + search.value);
const search_bar = document.querySelector(`.search-bar`);
search_bar.onclick = () => search.focus();
document.addEventListener(`keypress`, (event) => {
if (event.key == `Enter`) {
event.preventDefault();
if (search.value) {
window.open(`https://www.google.com/search?q=` + search.value);
}
}
});