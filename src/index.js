import buildWebsite from "./website";

document.addEventListener('DOMContentLoaded', function() {
    const body = document.querySelector('body')
    body.appendChild(buildWebsite())
})