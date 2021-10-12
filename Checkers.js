const piecables = document.querySelectorAll('.piecable')
const whiteStarting = document.querySelectorAll('.start-white')
const blackStarting = document.querySelectorAll('.start-black')
const p11 = document.querySelector('#p-11')
const p12 = document.querySelector('#p-12')
const p13 = document.querySelector('#p-13')
const p14 = document.querySelector('#p-14')
const p21 = document.querySelector('#p-21')
const p22 = document.querySelector('#p-22')
const p23 = document.querySelector('#p-23')
const p24 = document.querySelector('#p-24')
const p31 = document.querySelector('#p-31')
const p32 = document.querySelector('#p-32')
const p33 = document.querySelector('#p-33')
const p34 = document.querySelector('#p-34')
const p41 = document.querySelector('#p-41')
const p42 = document.querySelector('#p-42')
const p43 = document.querySelector('#p-43')
const p44 = document.querySelector('#p-44')
const p51 = document.querySelector('#p-51')
const p52 = document.querySelector('#p-52')
const p53 = document.querySelector('#p-53')
const p54 = document.querySelector('#p-54')
const p61 = document.querySelector('#p-61')
const p62 = document.querySelector('#p-62')
const p63 = document.querySelector('#p-63')
const p64 = document.querySelector('#p-64')
const p71 = document.querySelector('#p-71')
const p72 = document.querySelector('#p-72')
const p73 = document.querySelector('#p-73')
const p74 = document.querySelector('#p-74')
const p81 = document.querySelector('#p-81')
const p82 = document.querySelector('#p-82')
const p83 = document.querySelector('#p-83')
const p84 = document.querySelector('#p-84')

piecables.forEach(function(element) {
    if(element.classList.contains("start-black")) {
        element.classList.add("piece-black")
    }
    if(element.classList.contains("start-white")) {
        element.classList.add("piece-white")
    }
})

function handleWhiteMove(e, movingElement) {
    console.log('handleWhiteMove')
    movingElement.classList.remove('piece-white')
    piecables.forEach(function(element) {
        element.classList.remove('potential-move')
        })
    e.currentTarget.classList.add('piece-white')
        addListenersForWhite()

}

function handleBlackMove(e, movingElement) {
    console.log('handleBlackMove')
    movingElement.classList.remove('piece-black')
    piecables.forEach(function(element) {
        element.classList.remove('potential-move')
        e.currentTarget.classList.add('piece-black')
        addListenersForBlack()
    })
}

function handleWhiteSetup(e) {
    console.log('handleWhiteSetup')
    piecables.forEach(function(element) {
        element.classList.remove('potential-move')
    })

    const movingElement = e.currentTarget

    piecables.forEach(function(element) {
        const movingId    = parseInt(element.id.split('-')[1])
        const potentialId = parseInt(e.currentTarget.id.split('-')[1])
        const row = parseInt(e.currentTarget.id.split('-')[1].split(''))
        
        if((potentialId - movingId === -10 || potentialId - movingId === -9) && !element.classList.contains('piece-black') && !element.classList.contains('piece-white') && (row === 1 || row === 3 || row === 5 || row === 7)) {
            element.classList.add('potential-move')
        }
        if((potentialId - movingId === -10 || potentialId - movingId === -11) && !element.classList.contains('piece-black') && !element.classList.contains('piece-white') && (row === 2 || row === 4 || row === 6 || row === 8)) {
            element.classList.add('potential-move')
        }
    })
    const potentialMoves = document.querySelectorAll('.potential-move')
        potentialMoves.forEach(function(element) {
            element.addEventListener('click', function(e) {
                handleWhiteMove(e, movingElement)
            })
        })
}

function handleBlackSetup(e) {
    console.log('handleBlackSetup')
    piecables.forEach(function(element) {
        element.classList.remove('potential-move')
    })

    const movingElement = e.currentTarget

    piecables.forEach(function(element) {
        const movingId    = parseInt(element.id.split('-')[1])
        const potentialId = parseInt(e.currentTarget.id.split('-')[1])
        const row = parseInt(e.currentTarget.id.split('-')[1].split(''))
        console.log(row)
        console.log(movingId)

        console.log(potentialId)


        
        if((potentialId - movingId === 10 || potentialId - movingId === 11) && !element.classList.contains('piece-black') && !element.classList.contains('piece-white') && (row === 1 || row === 3 || row === 5 || row === 7)) {
            element.classList.add('potential-move')
        }
        if((potentialId - movingId === 10 || potentialId - movingId === 9) && !element.classList.contains('piece-black') && !element.classList.contains('piece-white') && (row === 2 || row === 4 || row === 6 || row === 8)) {
            element.classList.add('potential-move')
        }

        const potentialMoves = document.querySelectorAll('.potential-move')
        potentialMoves.forEach(function(element) {
            element.addEventListener('click', function(e) {
                handleBlackMove(e, movingElement)
            })
        })
    })
}










function addListenersForWhite() {
    console.log('addListenersForWhite')
    let whitePieces = document.querySelectorAll('.piece-white')
    whitePieces.forEach(function (element) {
    element.removeEventListener('click', handleWhiteSetup)
    })
    whitePieces = document.querySelectorAll('.piece-white')
    whitePieces.forEach(function(el) {
        el.addEventListener('click', handleWhiteSetup)
    }, {once: true})
}

addListenersForWhite()

function addListenersForBlack() {
    console.log('addListenersForBlack')
    let blackPieces = document.querySelectorAll('.piece-black')
    blackPieces.forEach(function (element) {
    element.removeEventListener('click', handleBlackSetup)
    })
    
    blackPieces.forEach(function(el) {
        el.addEventListener('click', handleBlackSetup)
    })
}

addListenersForBlack()