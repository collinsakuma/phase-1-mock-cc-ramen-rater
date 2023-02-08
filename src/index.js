// write your code here
fetch("http://localhost:3000/ramens")
    .then(res => res.json())
    .then((ramenData) => ramenData.forEach((ramen) => displayImage(ramen)))


function displayImage(ramen) {
    const img = document.createElement('img')
    img.src = ramen.image

    img.addEventListener('click', () => {
        document.querySelector('#ramenBanner').src = ramen.image
        document.querySelector('#ramenName').textContent = ramen.name
        document.querySelector('#restaurantName').textContent = ramen.restaurant
        document.querySelector('#comment-display').textContent = ramen.comment
        document.querySelector('#rating-display').textContent = ramen.rating
    })
    
    document.querySelector('#ramen-menu').appendChild(img)
}

document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault()
    formatRamen = {
        name: e.target['new-name'].value,
        restaurant: e.target['new-restaurant'].value,
        image: e.target['new-image'].value,
        rating: e.target['new-rating'].value,
        comment: e.target['new-comment'].value
      }
    displayImage(formatRamen)
})