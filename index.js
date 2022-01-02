let grid_btn = document.querySelector('.folder-btn')
let list_btn = document.querySelector('.list-btn')
grid_btn.addEventListener('click', function() {
    let grid = document.querySelector('.folder')
    let list = document.querySelector('.list')
    grid.style.display = "flex"
    list.style.display = 'none'
})
list_btn.addEventListener('click', function() {
    let list = document.querySelector('.list')
    let grid = document.querySelector('.folder')
    grid.style.display = "none"
    list.style.display = 'block'
})