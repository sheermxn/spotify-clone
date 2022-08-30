const [carousel_next, carousel_prev] = [document.querySelector('.carousel-next'), document.querySelector('.carousel-prev')]

var autoScroll = setInterval(next_carousel, 5000)

carousel_next.addEventListener('click', () => next_carousel())
carousel_prev.addEventListener('click', () => prev_carousel())

function next_carousel() {
    var hidden_item = document.querySelector('.carousel-item-unactive')
    var visible_item = document.querySelector('.carousel-item-active')

    if (hidden_item.style.display == 'none') {
        visible_item.className = 'carousel-item-unactive'
        visible_item.style.animation = 'toleft normal 0.5s'
        var waitToHide = setTimeout(() => visible_item.style.display = 'none', 500)

        hidden_item.className = 'carousel-item-active'
        hidden_item.style.animation = 'fromright normal 0.5s'
        var waitToShow = setTimeout(() => hidden_item.style.display = '', 500)
    }
}

function prev_carousel() {
    var hidden_item = document.querySelector('.carousel-item-unactive')
    var visible_item = document.querySelector('.carousel-item-active')

    if (hidden_item.style.display == 'none') {
        visible_item.className = 'carousel-item-unactive'
        visible_item.style.animation = 'toright normal 0.5s'
        var waitToHide = setTimeout(() => visible_item.style.display = 'none', 500)

        hidden_item.className = 'carousel-item-active'
        hidden_item.style.animation = 'fromleft normal 0.5s'
        var waitToShow = setTimeout(() => hidden_item.style.display = '', 500)
    }
}