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

function removeMoveListeners() {
    piecables.forEach(function (element) {
        element.removeEventListener('click', handleMoveRightWhite)
        element.removeEventListener('click', handleMoveLeftWhite)
        element.removeEventListener('click', handleMoveRightBlack)
        element.removeEventListener('click', handleMoveLeftBlack)
        element.removeEventListener('click', handleCaptureRightWhite)
        element.removeEventListener('click', handleCaptureLeftWhite)
        element.removeEventListener('click', handleCaptureRightBlack)
        element.removeEventListener('click', handleCaptureLeftBlack)
    })
}

function addListenersWhite() {
    const piecesWhite = document.querySelectorAll('.piece-white')
    const kingsWhite = document.querySelectorAll('.king-white')
    piecesWhite.forEach(function(element) {
        element.addEventListener('click', addPotenialMovesWhite)
    })
    kingsWhite.forEach(function(element) {
        element.addEventListener('click', addPotenialMovesWhiteKing)
    })
}
addListenersWhite()

function removeListenersWhite() {
    piecables.forEach(function(element) {
        element.removeEventListener('click', addPotenialMovesWhite)
    })
}

function removeMoveClasses() {
    piecables.forEach(function(element) {
        element.classList.remove('potential-move-right')
        element.classList.remove('potential-move-left')
        element.classList.remove('potential-capture-right')
        element.classList.remove('potential-capture-left')
    })
}

////////////////////////////////////////

function addPotenialMovesWhite(e) {
    removeMoveListeners()
    removeMoveClasses()
    const movingPiece = e.currentTarget
    const movingPieceRow = parseInt(movingPiece.id.split('-')[1].split('')[0])
    const movingPieceIdNumber = movingPiece.id.split('-')[1]
    //add moves for right
    addPotentialMoveRightWhite(movingPieceRow, movingPieceIdNumber)
    //add moves for left
    addPotentialMoveLeftWhite(movingPieceRow, movingPieceIdNumber)

    //add moves for capture right
    addPotentialCaptureRightWhite(movingPieceRow, movingPieceIdNumber, movingPiece)
    //add moves for capture left
    addPotentialCaptureLeftWhite(movingPieceRow, movingPieceIdNumber, movingPiece)
}

function addPotentialMoveRightWhite(movingPieceRow, movingPieceIdNumber) {
    piecables.forEach(function(element) {
        element.classList.remove('potential-move-right')
        const potentialSquare = element
        const potentialSquareIdNumber = potentialSquare.id.split('-')[1]
        if(movingPieceIdNumber - potentialSquareIdNumber === -10 && movingPieceRow % 2 === 1 && !element.classList.contains('piece-white') && !element.classList.contains('piece-black')) {
            potentialSquare.classList.add('potential-move-right')
        }
        if(movingPieceIdNumber - potentialSquareIdNumber === -11 && movingPieceRow % 2 === 0 && !element.classList.contains('piece-white') && !element.classList.contains('piece-black')) {
            potentialSquare.classList.add('potential-move-right')
        }
    })
    const potentialMoveRightWhite = document.querySelectorAll('.potential-move-right')
        potentialMoveRightWhite.forEach(function(element) {
            element.addEventListener('click', handleMoveRightWhite)
        })
}

function addPotentialMoveLeftWhite(movingPieceRow, movingPieceIdNumber) {
    piecables.forEach(function(element) {
        element.classList.remove('potential-move-left')
        const potentialSquare = element
        const potentialSquareIdNumber = potentialSquare.id.split('-')[1]
        if(movingPieceIdNumber - potentialSquareIdNumber === -9 && movingPieceRow % 2 === 1 && !element.classList.contains('piece-white') && !element.classList.contains('piece-black')) {
            potentialSquare.classList.add('potential-move-left')
        }
        if(movingPieceIdNumber - potentialSquareIdNumber === -10 && movingPieceRow % 2 === 0 && !element.classList.contains('piece-white') && !element.classList.contains('piece-black')) {
            potentialSquare.classList.add('potential-move-left')
        }
    })
    const potentialMoveLeftWhite = document.querySelectorAll('.potential-move-left')
        potentialMoveLeftWhite.forEach(function(element) {
            element.addEventListener('click', handleMoveLeftWhite)
        })
}

function addPotentialCaptureRightWhite(movingPieceRow, movingPieceIdNumber, movingPiece) {
    piecables.forEach(function(element) {
        element.classList.remove('potential-capture-right')
        const potentialSquare = element
        const potentialSquareIdNumber = potentialSquare.id.split('-')[1]
        const potentialCapture = movingPiece.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.firstElementChild
        let potentialCaptureIdNumber
        if(potentialCapture) {
            potentialCaptureIdNumber = potentialCapture.id.split('-')[1]
        } else {
            return
        }
        if(movingPieceRow % 2 === 0 && potentialCapture.classList.contains('piece-black') && potentialCaptureIdNumber - movingPieceIdNumber === 11 && movingPieceIdNumber - potentialSquareIdNumber === -21 && !potentialSquare.classList.contains('piece-white') && !potentialSquare.classList.contains('piece-black')) {
            potentialSquare.classList.add('potential-capture-right')
        }
        if(movingPieceRow % 2 === 1 && potentialCapture.classList.contains('piece-black') && potentialCaptureIdNumber - movingPieceIdNumber === 10 && movingPieceIdNumber - potentialSquareIdNumber === -21 && !potentialSquare.classList.contains('piece-white') && !potentialSquare.classList.contains('piece-black')) {
            potentialSquare.classList.add('potential-capture-right')
        }
    })
    const potentialMoveRightWhite = document.querySelectorAll('.potential-capture-right')
        potentialMoveRightWhite.forEach(function(element) {
            element.addEventListener('click', handleCaptureRightWhite)
        })
}

function addPotentialCaptureLeftWhite(movingPieceRow, movingPieceIdNumber, movingPiece) {
    piecables.forEach(function(element) {
        element.classList.remove('potential-capture-left')
        const potentialSquare = element
        const potentialSquareIdNumber = potentialSquare.id.split('-')[1]
        const potentialCapture = movingPiece.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.firstElementChild
        let potentialCaptureIdNumber
        if(potentialCapture) {
            potentialCaptureIdNumber = potentialCapture.id.split('-')[1]
        } else {
            return
        }
        if(movingPieceRow % 2 === 0 && potentialCapture.classList.contains('piece-black') && potentialCaptureIdNumber - movingPieceIdNumber === 10 && movingPieceIdNumber - potentialSquareIdNumber === -19 && !potentialSquare.classList.contains('piece-white') && !potentialSquare.classList.contains('piece-black')) {
            potentialSquare.classList.add('potential-capture-left')
        }
        if(movingPieceRow % 2 === 1  && potentialCapture.classList.contains('piece-black') && potentialCaptureIdNumber - movingPieceIdNumber === 9 && movingPieceIdNumber - potentialSquareIdNumber === -19 && !potentialSquare.classList.contains('piece-white') && !potentialSquare.classList.contains('piece-black')) {
            potentialSquare.classList.add('potential-capture-left')
        }
    })
    const potentialMoveLeftWhite = document.querySelectorAll('.potential-capture-left')
        potentialMoveLeftWhite.forEach(function(element) {
            element.addEventListener('click', handleCaptureLeftWhite)
        })
}

function handleMoveRightWhite(e) {
    removeListenersWhite()
    removeListenersBlack()
    removeMoveListeners()
    removeMoveClasses()
    const movedPiece = e.currentTarget
    movedPiece.classList.add('piece-white')
    const movedPieceRow = parseInt(movedPiece.id.split('-')[1].split('')[0])

    piecables.forEach(function(element) {
        const movedPieceIdNumber = movedPiece.id.split('-')[1]
        const pastPiece = element
        const pastPieceIdNumber = pastPiece.id.split('-')[1]
        if(movedPieceIdNumber - pastPieceIdNumber === 11 && movedPieceRow % 2 === 1) {
            pastPiece.classList.remove('piece-white')
        }
        if(movedPieceIdNumber - pastPieceIdNumber === 10 && movedPieceRow % 2 === 0) {
            pastPiece.classList.remove('piece-white')
        }
    })
    kingMeWhite(movedPieceRow, movedPiece)
    addListenersWhite()
    addListenersBlack()
}

function handleMoveLeftWhite(e) {
    removeListenersWhite()
    removeListenersBlack()
    removeMoveListeners()
    removeMoveClasses()
    const movedPiece = e.currentTarget
    movedPiece.classList.add('piece-white')
    const movedPieceRow = parseInt(movedPiece.id.split('-')[1].split('')[0])
    piecables.forEach(function(element) {
        const movedPieceIdNumber = movedPiece.id.split('-')[1]
        const pastPiece = element
        const pastPieceIdNumber = pastPiece.id.split('-')[1]
        if(movedPieceIdNumber - pastPieceIdNumber === 10 && movedPieceRow % 2 === 1) {
            pastPiece.classList.remove('piece-white')
        }
        if(movedPieceIdNumber - pastPieceIdNumber === 9 && movedPieceRow % 2 === 0) {
            pastPiece.classList.remove('piece-white')
        }
    })
    kingMeWhite(movedPieceRow, movedPiece)
    addListenersWhite()
    addListenersBlack()
}

function handleCaptureRightWhite(e) {
    removeListenersWhite()
    removeListenersBlack()
    removeMoveListeners()
    removeMoveClasses()
    const movedPiece = e.currentTarget
    movedPiece.classList.add('piece-white')
    const movedPieceRow = parseInt(movedPiece.id.split('-')[1].split('')[0])
    piecables.forEach(function(element) {
        const movedPieceIdNumber = movedPiece.id.split('-')[1]
        const pastPiece = element
        const pastPieceIdNumber = pastPiece.id.split('-')[1]
        const capturedPiece = movedPiece.parentElement.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.firstElementChild
        const capturedPieceIdNumber = capturedPiece.id.split('-')[1]
        if(capturedPieceIdNumber - pastPieceIdNumber === 10 && movedPieceIdNumber - pastPieceIdNumber === 21 && movedPieceRow % 2 === 1) {
            pastPiece.classList.remove('piece-white')
            capturedPiece.classList.remove('piece-black')
        }
        if(capturedPieceIdNumber - pastPieceIdNumber === 11 && movedPieceIdNumber - pastPieceIdNumber === 21 && movedPieceRow % 2 === 0) {
            pastPiece.classList.remove('piece-white')
            capturedPiece.classList.remove('piece-black')
        }
    })
    kingMeWhite(movedPieceRow, movedPiece)
    addListenersWhite()
    addListenersBlack()
}

function handleCaptureLeftWhite(e) {
    removeListenersWhite()
    removeListenersBlack()
    removeMoveListeners()
    removeMoveClasses()
    const movedPiece = e.currentTarget
    movedPiece.classList.add('piece-white')
    const movedPieceRow = parseInt(movedPiece.id.split('-')[1].split('')[0])
    piecables.forEach(function(element) {
        const movedPieceIdNumber = movedPiece.id.split('-')[1]
        const pastPiece = element
        const pastPieceIdNumber = pastPiece.id.split('-')[1]
        const capturedPiece = movedPiece.parentElement.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.firstElementChild
        const capturedPieceIdNumber = capturedPiece.id.split('-')[1]
        if(capturedPieceIdNumber - pastPieceIdNumber === 9 && movedPieceIdNumber - pastPieceIdNumber === 19 && movedPieceRow % 2 === 1) {
            pastPiece.classList.remove('piece-white')
            capturedPiece.classList.remove('piece-black')
        }
        if(capturedPieceIdNumber - pastPieceIdNumber === 10 && movedPieceIdNumber - pastPieceIdNumber === 19 && movedPieceRow % 2 === 0) {
            pastPiece.classList.remove('piece-white')
            capturedPiece.classList.remove('piece-black')
        }
    })
    kingMeWhite(movedPieceRow, movedPiece)
    addListenersWhite()
    addListenersBlack()
}

function kingMeWhite(movedPieceRow, movedPiece) {
    if(movedPieceRow === 8) {
        movedPiece.classList.add('king-white')
        movedPiece.classList.remove('piece-white')
    }
}

/////////////////////////////////////////////////////////////



function addListenersBlack() {
    const piecesBlack = document.querySelectorAll('.piece-black')
    const kingsBlack = document.querySelectorAll('.king-black')
    piecesBlack.forEach(function(element) {
        element.addEventListener('click', addPotenialMovesBlack)
    })
    kingsBlack.forEach(function(element) {
        element.addEventListener('click', addPotenialMovesBlackKing)
    })
}
addListenersBlack()

function removeListenersBlack() {
    piecables.forEach(function(element) {
        element.removeEventListener('click', addPotenialMovesBlack)
    })
}

function addPotenialMovesBlack(e) {
    removeMoveListeners()
    removeMoveClasses()
    const movingPiece = e.currentTarget
    const movingPieceRow = parseInt(movingPiece.id.split('-')[1].split('')[0])
    const movingPieceIdNumber = movingPiece.id.split('-')[1]
    //add moves for right
    addPotentialMoveRightBlack(movingPieceRow, movingPieceIdNumber)
    //add moves for left
    addPotentialMoveLeftBlack(movingPieceRow, movingPieceIdNumber)
    //add moves for capture right
    addPotentialCaptureRightBlack(movingPieceRow, movingPieceIdNumber, movingPiece)
    //add moves for capture left
    addPotentialCaptureLeftBlack(movingPieceRow, movingPieceIdNumber, movingPiece)
}

function addPotentialMoveRightBlack(movingPieceRow, movingPieceIdNumber) {
    piecables.forEach(function(element) {
        element.classList.remove('potential-move-right')
        const potentialSquare = element
        const potentialSquareIdNumber = potentialSquare.id.split('-')[1]
        if(movingPieceIdNumber - potentialSquareIdNumber === 10 && movingPieceRow % 2 === 1 && !element.classList.contains('piece-white') && !element.classList.contains('piece-black')) {
            potentialSquare.classList.add('potential-move-right')
        }
        if(movingPieceIdNumber - potentialSquareIdNumber === 9 && movingPieceRow % 2 === 0 && !element.classList.contains('piece-white') && !element.classList.contains('piece-black')) {
            potentialSquare.classList.add('potential-move-right')
        }
    })
    const potentialMoveRightBlack = document.querySelectorAll('.potential-move-right')
        potentialMoveRightBlack.forEach(function(element) {
            element.addEventListener('click', handleMoveRightBlack)
        })
}

function addPotentialMoveLeftBlack(movingPieceRow, movingPieceIdNumber) {
    piecables.forEach(function(element) {
        element.classList.remove('potential-move-left')
        const potentialSquare = element
        const potentialSquareIdNumber = potentialSquare.id.split('-')[1]
        if(movingPieceIdNumber - potentialSquareIdNumber === 11 && movingPieceRow % 2 === 1 && !element.classList.contains('piece-white') && !element.classList.contains('piece-black')) {
            potentialSquare.classList.add('potential-move-left')
        }
        if(movingPieceIdNumber - potentialSquareIdNumber === 10 && movingPieceRow % 2 === 0 && !element.classList.contains('piece-white') && !element.classList.contains('piece-black')) {
            potentialSquare.classList.add('potential-move-left')
        }
    })
    const potentialMoveLeftBlack = document.querySelectorAll('.potential-move-left')
        potentialMoveLeftBlack.forEach(function(element) {
            element.addEventListener('click', handleMoveLeftBlack)
        })
}

function addPotentialCaptureRightBlack(movingPieceRow, movingPieceIdNumber, movingPiece) {
    piecables.forEach(function(element) {
        element.classList.remove('potential-capture-right')
        const potentialSquare = element
        const potentialSquareIdNumber = potentialSquare.id.split('-')[1]
        const potentialCapture = movingPiece.parentElement.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.firstElementChild
        let potentialCaptureIdNumber
        if(potentialCapture) {
            potentialCaptureIdNumber = potentialCapture.id.split('-')[1]
        } else {
            return
        }
        if(movingPieceRow % 2 === 0 && potentialCapture.classList.contains('piece-white') && potentialCaptureIdNumber - movingPieceIdNumber === -9 && movingPieceIdNumber - potentialSquareIdNumber === 19 && !potentialSquare.classList.contains('piece-white') && !potentialSquare.classList.contains('piece-black')) {
            potentialSquare.classList.add('potential-capture-right')
        }
        if(movingPieceRow % 2 === 1 && potentialCapture.classList.contains('piece-white') && potentialCaptureIdNumber - movingPieceIdNumber === -10 && movingPieceIdNumber - potentialSquareIdNumber === 19 && !potentialSquare.classList.contains('piece-white') && !potentialSquare.classList.contains('piece-black')) {
            potentialSquare.classList.add('potential-capture-right')
        }
    })
    const potentialMoveRightWhite = document.querySelectorAll('.potential-capture-right')
        potentialMoveRightWhite.forEach(function(element) {
            element.addEventListener('click', handleCaptureRightBlack)
        })
}

function addPotentialCaptureLeftBlack(movingPieceRow, movingPieceIdNumber, movingPiece) {
    piecables.forEach(function(element) {
        element.classList.remove('potential-capture-left')
        const potentialSquare = element
        const potentialSquareIdNumber = potentialSquare.id.split('-')[1]
        const potentialCapture = movingPiece.parentElement.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.firstElementChild
        let potentialCaptureIdNumber
        if(potentialCapture) {
            potentialCaptureIdNumber = potentialCapture.id.split('-')[1]
        } else {
            return
        }
        if(movingPieceRow % 2 === 0 && potentialCapture.classList.contains('piece-white') && potentialCaptureIdNumber - movingPieceIdNumber === -10 && movingPieceIdNumber - potentialSquareIdNumber === 21 && !potentialSquare.classList.contains('piece-white') && !potentialSquare.classList.contains('piece-black')) {
            potentialSquare.classList.add('potential-capture-left')
        }
        if(movingPieceRow % 2 === 1  && potentialCapture.classList.contains('piece-white') && potentialCaptureIdNumber - movingPieceIdNumber === -11 && movingPieceIdNumber - potentialSquareIdNumber === 21 && !potentialSquare.classList.contains('piece-white') && !potentialSquare.classList.contains('piece-black')) {
            potentialSquare.classList.add('potential-capture-left')
        }
    })
    const potentialMoveLeftWhite = document.querySelectorAll('.potential-capture-left')
        potentialMoveLeftWhite.forEach(function(element) {
            element.addEventListener('click', handleCaptureLeftBlack)
        })
}

function handleMoveRightBlack(e) {
    removeListenersWhite()
    removeListenersBlack()
    removeMoveListeners()
    removeMoveClasses()
    const movedPiece = e.currentTarget
    movedPiece.classList.add('piece-black')
    const movedPieceRow = parseInt(movedPiece.id.split('-')[1].split('')[0])
    piecables.forEach(function(element) {
        const movedPieceIdNumber = movedPiece.id.split('-')[1]
        const pastPiece = element
        const pastPieceIdNumber = pastPiece.id.split('-')[1]
        if(movedPieceIdNumber - pastPieceIdNumber === -9 && movedPieceRow % 2 === 1) {
            pastPiece.classList.remove('piece-black')
        }
        if(movedPieceIdNumber - pastPieceIdNumber === -10 && movedPieceRow % 2 === 0) {
            pastPiece.classList.remove('piece-black')
        }
    })
    kingMeBlack(movedPieceRow, movedPiece)
    addListenersBlack()
    addListenersWhite()
}

function handleMoveLeftBlack(e) {
    removeListenersWhite()
    removeListenersBlack()
    removeMoveListeners()
    removeMoveClasses()
    const movedPiece = e.currentTarget
    movedPiece.classList.add('piece-black')
    const movedPieceRow = parseInt(movedPiece.id.split('-')[1].split('')[0])
    piecables.forEach(function(element) {
        const movedPieceIdNumber = movedPiece.id.split('-')[1]
        const pastPiece = element
        const pastPieceIdNumber = pastPiece.id.split('-')[1]
        if(movedPieceIdNumber - pastPieceIdNumber === -10 && movedPieceRow % 2 === 1) {
            pastPiece.classList.remove('piece-black')
        }
        if(movedPieceIdNumber - pastPieceIdNumber === -11 && movedPieceRow % 2 === 0) {
            pastPiece.classList.remove('piece-black')
        }
    })
    kingMeBlack(movedPieceRow, movedPiece)
    addListenersBlack()
    addListenersWhite()
}


function handleCaptureRightBlack(e) {
    removeListenersWhite()
    removeListenersBlack()
    removeMoveListeners()
    removeMoveClasses()
    const movedPiece = e.currentTarget
    movedPiece.classList.add('piece-black')
    const movedPieceRow = parseInt(movedPiece.id.split('-')[1].split('')[0])
    piecables.forEach(function(element) {
        const movedPieceIdNumber = movedPiece.id.split('-')[1]
        const pastPiece = element
        const pastPieceIdNumber = pastPiece.id.split('-')[1]
        const capturedPiece = movedPiece.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.firstElementChild
        const capturedPieceIdNumber = capturedPiece.id.split('-')[1]
        if(capturedPieceIdNumber - pastPieceIdNumber === -10 && movedPieceIdNumber - pastPieceIdNumber === -19 && movedPieceRow % 2 === 1) {
            pastPiece.classList.remove('piece-black')
            capturedPiece.classList.remove('piece-white')
        }
        if(capturedPieceIdNumber - pastPieceIdNumber === -9 && movedPieceIdNumber - pastPieceIdNumber === -19 && movedPieceRow % 2 === 0) {
            pastPiece.classList.remove('piece-black')
            capturedPiece.classList.remove('piece-white')
        }
    })
    kingMeBlack(movedPieceRow, movedPiece)
    addListenersWhite()
    addListenersBlack()
}
function handleCaptureLeftBlack(e) {
    removeListenersWhite()
    removeListenersBlack()
    removeMoveListeners()
    removeMoveClasses()
    const movedPiece = e.currentTarget
    movedPiece.classList.add('piece-black')
    const movedPieceRow = parseInt(movedPiece.id.split('-')[1].split('')[0])
    const movedPieceIdNumber = movedPiece.id.split('-')[1]
    piecables.forEach(function(element) {
        const pastPiece = element
        const pastPieceIdNumber = pastPiece.id.split('-')[1]
        const capturedPiece = movedPiece.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.firstElementChild
        const capturedPieceIdNumber = capturedPiece.id.split('-')[1]
        if(capturedPieceIdNumber - pastPieceIdNumber === -11 && movedPieceIdNumber - pastPieceIdNumber === -21 && movedPieceRow % 2 === 1) {
            pastPiece.classList.remove('piece-black')
            capturedPiece.classList.remove('piece-white')
        }
        if(capturedPieceIdNumber - pastPieceIdNumber === -10 && movedPieceIdNumber - pastPieceIdNumber === -21 && movedPieceRow % 2 === 0) {
            pastPiece.classList.remove('piece-black')
            capturedPiece.classList.remove('piece-white')
        }
    })
    kingMeBlack(movedPieceRow, movedPiece)
    addListenersWhite()
    addListenersBlack()
}

function kingMeBlack(movedPieceRow, movedPiece) {
    if(movedPieceRow === 1) {
        movedPiece.classList.add('king-black')
        movedPiece.classList.remove('piece-black')
    }
}

////////////////////////////////////////

 function addPotenialMovesWhiteKing() {
    removeMoveListeners()
    removeMoveClasses()
    const movingPiece = e.currentTarget
    const movingPieceRow = parseInt(movingPiece.id.split('-')[1].split('')[0])
    const movingPieceIdNumber = movingPiece.id.split('-')[1]
    //add moves for right
    addPotentialMoveRightWhiteKing(movingPieceRow, movingPieceIdNumber)
    //add moves for left
    addPotentialMoveLeftWhiteKing(movingPieceRow, movingPieceIdNumber)
    //add moves for capture right
    addPotentialCaptureRightWhiteKing(movingPieceRow, movingPieceIdNumber, movingPiece)
    //add moves for capture left
    addPotentialCaptureLeftWhiteKing(movingPieceRow, movingPieceIdNumber, movingPiece)
 }

function addPotentialMoveUpRightWhiteKing(movingPieceRow, movingPieceIdNumber) {
    console.log('hey')
}

function addPotentialMoveUpLeftWhiteKing(movingPieceRow, movingPieceIdNumber) {
    console.log('hey')
}

function addPotentialMoveDownRightWhiteKing(movingPieceRow, movingPieceIdNumber) {
    console.log('hey')
}

function addPotentialMoveDownLeftWhiteKing(movingPieceRow, movingPieceIdNumber) {
    console.log('hey')
}

function addPotentialCaptureUpRightWhiteKing(movingPieceRow, movingPieceIdNumber, movingPiece) {
    console.log('hey')
}

function addPotentialCaptureUpLeftWhiteKing(movingPieceRow, movingPieceIdNumber, movingPiece) {
    console.log('hey')
}

function addPotentialCaptureDownRightWhiteKing(movingPieceRow, movingPieceIdNumber, movingPiece) {
    console.log('hey')
}

function addPotentialCaptureDownLeftWhiteKing(movingPieceRow, movingPieceIdNumber, movingPiece) {
    console.log('hey')
}


 ////////////////////////////

 function addPotenialMovesBlackKing() {
     console.log('hey')
 }