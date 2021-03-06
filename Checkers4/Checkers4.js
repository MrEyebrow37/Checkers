const piecables = document.querySelectorAll('.piecable')
const whiteStarting = document.querySelectorAll('.start-white')
const blackStarting = document.querySelectorAll('.start-black')
let color = 'white'
let type
let oppositeColor

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
        element.removeEventListener('click', handleMoveUpRight)
        element.removeEventListener('click', handleMoveUpLeft)
        element.removeEventListener('click', handleMoveDownRight)
        element.removeEventListener('click', handleMoveDownLeft)
        element.removeEventListener('click', handleCaptureUpRight)
        element.removeEventListener('click', handleCaptureUpLeft)
        element.removeEventListener('click', handleCaptureDownRight)
        element.removeEventListener('click', handleCaptureDownLeft)
        element.removeEventListener('click', addPotentialCaptures)
    })
}

function addListenersWhite() {
    const piecesWhite = document.querySelectorAll('.piece-white')
    const kingsWhite = document.querySelectorAll('.king-white')
    piecesWhite.forEach(function(element) {
        element.addEventListener('click', addPotenialMoves)
    })
    kingsWhite.forEach(function(element) {
        element.addEventListener('click', addPotenialMoves)
    })
}
addListenersWhite()

function addListenersBlack() {
    const piecesBlack = document.querySelectorAll('.piece-black')
    const kingsBlack = document.querySelectorAll('.king-black')
    piecesBlack.forEach(function(element) {
        element.addEventListener('click', addPotenialMoves)
    })
    kingsBlack.forEach(function(element) {
        element.addEventListener('click', addPotenialMoves)
    })
}

function removeListenersWhite() {
    piecables.forEach(function(element) {
        element.removeEventListener('click', addPotenialMoves)
    })
}

function removeListenersBlack() {
    piecables.forEach(function(element) {
        element.removeEventListener('click', addPotenialMoves)
    })
}

function removeMoveClasses() {
    piecables.forEach(function(element) {
        element.classList.remove('potential-move-up-right')
        element.classList.remove('potential-move-up-left')
        element.classList.remove('potential-capture-up-right')
        element.classList.remove('potential-capture-up-left')
        element.classList.remove('potential-move-down-right')
        element.classList.remove('potential-move-down-left')
        element.classList.remove('potential-capture-down-right')
        element.classList.remove('potential-capture-down-left')
    })
}

function changeTurn() {
    if(color === 'white') {
        addListenersBlack()
    } else {
        addListenersWhite()
    }
}

////////////////////////////////////////

function addPotenialMoves(e) {
    if (e.currentTarget.classList.contains('piece-white') || e.currentTarget.classList.contains('king-white')) {
        color = 'white'
        oppositeColor = 'black'
    } else {color = 'black'; oppositeColor = 'white'}
    if(e.currentTarget.classList.contains('piece-white') || e.currentTarget.classList.contains('piece-black')) {
        type = 'piece'
    } else {type = 'king'}

    removeMoveListeners()
    removeMoveClasses()
    const movingPiece = e.currentTarget
    const movingPieceRow = parseInt(movingPiece.id.split('-')[1].split('')[0])
    const movingPieceIdNumber = parseInt(movingPiece.id.split('-')[1])
    if (type === 'piece' && color === 'white') {
        addPotentialMoveUpRight(movingPieceIdNumber, movingPiece)
        addPotentialMoveUpLeft(movingPieceIdNumber, movingPiece)
        addPotentialCaptureUpRight(movingPieceIdNumber, movingPiece)
        addPotentialCaptureUpLeft(movingPieceIdNumber, movingPiece)
    }

    if (type === 'piece' && color === 'black') {
        addPotentialMoveDownRight(movingPieceIdNumber, movingPiece)
        addPotentialMoveDownLeft(movingPieceIdNumber, movingPiece)
        addPotentialCaptureDownRight(movingPieceIdNumber, movingPiece)
        addPotentialCaptureDownLeft(movingPieceIdNumber, movingPiece)
    }

    if (type === 'king' && (movingPieceRow === 1 || movingPieceRow === 2 || movingPieceRow === 3 || movingPieceRow === 4 || movingPieceRow === 5 ||  movingPieceRow === 6)) {
        addPotentialCaptureUpRight(movingPieceIdNumber, movingPiece)
        addPotentialCaptureUpLeft(movingPieceIdNumber, movingPiece)
    }

    if (type === 'king' && (movingPieceRow === 3 || movingPieceRow === 4 || movingPieceRow === 5 || movingPieceRow === 6 || movingPieceRow === 7 || movingPieceRow === 8)) {
        addPotentialCaptureDownRight(movingPieceIdNumber, movingPiece)
        addPotentialCaptureDownLeft(movingPieceIdNumber, movingPiece)
    }

    if (type === 'king') {
        addPotentialMoveUpRight(movingPieceIdNumber, movingPiece)
        addPotentialMoveUpLeft(movingPieceIdNumber, movingPiece)
        addPotentialMoveDownRight(movingPieceIdNumber, movingPiece)
        addPotentialMoveDownLeft(movingPieceIdNumber, movingPiece)
    }
}

function addPotentialCaptures(e) {
    removeMoveListeners()
    removeMoveClasses()
    const movingPiece = e.currentTarget
    const movingPieceRow = parseInt(movingPiece.id.split('-')[1].split('')[0])
    const movingPieceIdNumber = parseInt(movingPiece.id.split('-')[1])
    if (type === 'piece' && color === 'white') {
        addPotentialCaptureUpRight(movingPieceIdNumber, movingPiece)
        addPotentialCaptureUpLeft(movingPieceIdNumber, movingPiece)
    }

    if (type === 'piece' && color === 'black') {
        addPotentialCaptureDownRight(movingPieceIdNumber, movingPiece)
        addPotentialCaptureDownLeft(movingPieceIdNumber, movingPiece)
    }

    if (type === 'king' && (movingPieceRow === 1 || movingPieceRow === 2 || movingPieceRow === 3 || movingPieceRow === 4 || movingPieceRow === 5 ||  movingPieceRow === 6)) {
        addPotentialCaptureUpRight(movingPieceIdNumber, movingPiece)
        addPotentialCaptureUpLeft(movingPieceIdNumber, movingPiece)
    }

    if (type === 'king' && (movingPieceRow === 3 || movingPieceRow === 4 || movingPieceRow === 5 || movingPieceRow === 6 || movingPieceRow === 7 || movingPieceRow === 8)) {
        addPotentialCaptureDownRight(movingPieceIdNumber, movingPiece)
        addPotentialCaptureDownLeft(movingPieceIdNumber, movingPiece)
    }
}

function addPotentialMoveUpRight(movingPieceIdNumber) {
    piecables.forEach(function(element) {
        element.classList.remove('potential-move-up-right')
    })
    const potentialSquare = document.querySelector(`#p-${movingPieceIdNumber + 11}`)
    if(!potentialSquare) {
        return
    }
    if(!potentialSquare.classList.contains('piece-white') && !potentialSquare.classList.contains('piece-black') && !potentialSquare.classList.contains('king-white') && !potentialSquare.classList.contains('king-black')) {
        potentialSquare.classList.add('potential-move-up-right')
    }
    const potentialCaptureUpRight = document.querySelector('.potential-move-up-right')
    if(potentialCaptureUpRight) {
        potentialCaptureUpRight.addEventListener('click', handleMoveUpRight)
    }
}

function addPotentialMoveUpLeft(movingPieceIdNumber) {
    piecables.forEach(function(element) {
        element.classList.remove('potential-move-up-left')
    })
    const potentialSquare = document.querySelector(`#p-${movingPieceIdNumber + 9}`)
    if(!potentialSquare) {
        return
    }
    if(!potentialSquare.classList.contains('piece-white') && !potentialSquare.classList.contains('piece-black') && !potentialSquare.classList.contains('king-white') && !potentialSquare.classList.contains('king-black')) {
        potentialSquare.classList.add('potential-move-up-left')
    }
    const potentialCaptureUpLeft = document.querySelector('.potential-move-up-left')
    if(potentialCaptureUpLeft) {
        potentialCaptureUpLeft.addEventListener('click', handleMoveUpLeft)
    }
}

function addPotentialCaptureUpRight(movingPieceIdNumber, movingPiece) {
    piecables.forEach(function(element) {
        element.classList.remove('potential-capture-up-right')
    })
    const potentialSquare = document.querySelector(`#p-${movingPieceIdNumber + 22}`)
    const potentialCapture = document.querySelector(`#p-${movingPieceIdNumber + 11}`)
    if(!potentialCapture || !potentialSquare) {
        return
    }
    if((potentialCapture.classList.contains(`piece-${oppositeColor}`) || potentialCapture.classList.contains(`king-${oppositeColor}`)) && !potentialSquare.classList.contains('piece-white') && !potentialSquare.classList.contains('piece-black') && !potentialSquare.classList.contains('king-white') && !potentialSquare.classList.contains('king-black')) {
        potentialSquare.classList.add('potential-capture-up-right')
    }
    const potentialCaptureUpRight = document.querySelector('.potential-capture-up-right')
    if(potentialCaptureUpRight) {
        potentialCaptureUpRight.addEventListener('click', handleCaptureUpRight)
    }
}

function addPotentialCaptureUpLeft(movingPieceIdNumber) {
    piecables.forEach(function(element) {
        element.classList.remove('potential-capture-up-left')
    })
    const potentialSquare = document.querySelector(`#p-${movingPieceIdNumber + 18}`)
    const potentialCapture = document.querySelector(`#p-${movingPieceIdNumber + 9}`)
        if(!potentialCapture || !potentialSquare) {
            return
        }
        if((potentialCapture.classList.contains(`piece-${oppositeColor}`) || potentialCapture.classList.contains(`king-${oppositeColor}`)) && !potentialSquare.classList.contains('piece-white') && !potentialSquare.classList.contains('piece-black') && !potentialSquare.classList.contains('king-white') && !potentialSquare.classList.contains('king-black')) {
            potentialSquare.classList.add('potential-capture-up-left')
        }
    const potentialCaptureUpLeft = document.querySelector('.potential-capture-up-left')
    if(potentialCaptureUpLeft) {
        potentialCaptureUpLeft.addEventListener('click', handleCaptureUpLeft)
    }
}

function handleMoveUpRight(e) {
    const movedPiece = e.currentTarget
    const movedPieceRow = parseInt(movedPiece.id.split('-')[1].split('')[0])
    const movedPieceIdNumber = parseInt(movedPiece.id.split('-')[1])
    const pastPiece = document.querySelector(`#p-${movedPieceIdNumber - 11}`)
    movedPiece.classList.add(`${type}-${color}`)
    pastPiece.classList.remove(`${type}-${color}`)
    removeListenersWhite()
    removeListenersBlack()
    removeMoveListeners()
    removeMoveClasses()
    kingMe(movedPieceRow, movedPiece)
    changeTurn()
}

function handleMoveUpLeft(e) {
    const movedPiece = e.currentTarget
    const movedPieceRow = parseInt(movedPiece.id.split('-')[1].split('')[0])
    const movedPieceIdNumber = parseInt(movedPiece.id.split('-')[1])
    const pastPiece = document.querySelector(`#p-${movedPieceIdNumber - 9}`)
    movedPiece.classList.add(`${type}-${color}`)
    pastPiece.classList.remove(`${type}-${color}`)
    removeListenersWhite()
    removeListenersBlack()
    removeMoveListeners()
    removeMoveClasses()
    kingMe(movedPieceRow, movedPiece)
    changeTurn()
}

function handleCaptureUpRight(e) {
    const movedPiece = e.currentTarget
    movedPiece.classList.add(`${type}-${color}`)
    const movedPieceRow = parseInt(movedPiece.id.split('-')[1].split('')[0])
    const movedPieceColumn = parseInt(movedPiece.id.split('-')[1].split('')[1])
    const movedPieceIdNumber = parseInt(movedPiece.id.split('-')[1])
    const pastPiece = document.querySelector(`#p-${movedPieceIdNumber - 22}`)
    const capturedPiece = document.querySelector(`#p-${movedPieceIdNumber - 11}`)
    pastPiece.classList.remove(`${type}-${color}`)
    capturedPiece.classList.remove(`piece-${oppositeColor}`)
    capturedPiece.classList.remove(`king-${oppositeColor}`)
    removeListenersWhite()
    removeListenersBlack()
    removeMoveListeners()
    removeMoveClasses()
    kingMe(movedPieceRow, movedPiece)
    multipleCaptures(movedPiece, movedPieceRow, movedPieceColumn, movedPieceIdNumber)
}

function handleCaptureUpLeft(e) {
    const movedPiece = e.currentTarget
    movedPiece.classList.add(`${type}-${color}`)
    const movedPieceRow = parseInt(movedPiece.id.split('-')[1].split('')[0])
    const movedPieceColumn = parseInt(movedPiece.id.split('-')[1].split('')[1])
    const movedPieceIdNumber = parseInt(movedPiece.id.split('-')[1])
    const pastPiece = document.querySelector(`#p-${movedPieceIdNumber - 18}`)
    const capturedPiece = document.querySelector(`#p-${movedPieceIdNumber - 9}`)
    pastPiece.classList.remove(`${type}-${color}`)
    capturedPiece.classList.remove(`piece-${oppositeColor}`)
    capturedPiece.classList.remove(`king-${oppositeColor}`)
    removeListenersWhite()
    removeListenersBlack()
    removeMoveListeners()
    removeMoveClasses()
    kingMe(movedPieceRow, movedPiece)
    multipleCaptures(movedPiece, movedPieceRow, movedPieceColumn, movedPieceIdNumber)
}

function addPotentialMoveDownRight(movingPieceIdNumber) {
    piecables.forEach(function(element) {
        element.classList.remove('potential-move-down-right')
    })
    const potentialSquare = document.querySelector(`#p-${movingPieceIdNumber -9}`)
    if(!potentialSquare) {
        return
    }
    if(!potentialSquare.classList.contains('piece-white') && !potentialSquare.classList.contains('piece-black') && !potentialSquare.classList.contains('king-white') && !potentialSquare.classList.contains('king-black')) {
        potentialSquare.classList.add('potential-move-down-right')
    }
    const potentialCaptureDownRight = document.querySelector('.potential-move-down-right')
    if(potentialCaptureDownRight) {
        potentialCaptureDownRight.addEventListener('click', handleMoveDownRight)
    }
}

function addPotentialMoveDownLeft(movingPieceIdNumber) {
    piecables.forEach(function(element) {
        element.classList.remove('potential-move-down-left')
    })
    const potentialSquare = document.querySelector(`#p-${movingPieceIdNumber - 11}`)
    if(!potentialSquare) {
        return
    }
    if(!potentialSquare.classList.contains('piece-white') && !potentialSquare.classList.contains('piece-black') && !potentialSquare.classList.contains('king-white') && !potentialSquare.classList.contains('king-black')) {
        potentialSquare.classList.add('potential-move-down-left')
    }
    const potentialCaptureDownLeft = document.querySelector('.potential-move-down-left')
    if(potentialCaptureDownLeft) {
        potentialCaptureDownLeft.addEventListener('click', handleMoveDownLeft)
    }
}

function addPotentialCaptureDownRight(movingPieceIdNumber) {
    piecables.forEach(function(element) {
        element.classList.remove('potential-capture-down-right')
    })
    const potentialSquare = document.querySelector(`#p-${movingPieceIdNumber - 18}`)
    const potentialCapture = document.querySelector(`#p-${movingPieceIdNumber - 9}`)
    if(!potentialCapture || !potentialSquare) {
        return
    }
    if((potentialCapture.classList.contains(`piece-${oppositeColor}`) || potentialCapture.classList.contains(`king-${oppositeColor}`)) && !potentialSquare.classList.contains('piece-white') && !potentialSquare.classList.contains('piece-black') && !potentialSquare.classList.contains('king-white') && !potentialSquare.classList.contains('king-black')) {
        potentialSquare.classList.add('potential-capture-down-right')
    }
    const potentialCaptureDownRight = document.querySelector('.potential-capture-down-right')
    if(potentialCaptureDownRight) {
        potentialCaptureDownRight.addEventListener('click', handleCaptureDownRight)
    }   
}

function addPotentialCaptureDownLeft(movingPieceIdNumber) {
    piecables.forEach(function(element) {
        element.classList.remove('potential-capture-down-left')
    })
    const potentialSquare = document.querySelector(`#p-${movingPieceIdNumber - 22}`)
    const potentialCapture = document.querySelector(`#p-${movingPieceIdNumber - 11}`)
    if(!potentialCapture || !potentialSquare) {
        return
    }
    if((potentialCapture.classList.contains(`piece-${oppositeColor}`) || potentialCapture.classList.contains(`king-${oppositeColor}`)) && !potentialSquare.classList.contains('piece-white') && !potentialSquare.classList.contains('piece-black') && !potentialSquare.classList.contains('king-white') && !potentialSquare.classList.contains('king-black')) {
        potentialSquare.classList.add('potential-capture-down-left')
    }
    const potentialCaptureDownLeft = document.querySelector('.potential-capture-down-left')
    if(potentialCaptureDownLeft) {
        potentialCaptureDownLeft.addEventListener('click', handleCaptureDownLeft)
    }
}

function handleMoveDownRight(e) {
    const movedPiece = e.currentTarget
    const movedPieceRow = parseInt(movedPiece.id.split('-')[1].split('')[0])
    const movedPieceIdNumber = parseInt(movedPiece.id.split('-')[1])
    const pastPiece = document.querySelector(`#p-${movedPieceIdNumber + 9}`)
    movedPiece.classList.add(`${type}-${color}`)
    pastPiece.classList.remove(`${type}-${color}`)
    removeListenersWhite()
    removeListenersBlack()
    removeMoveListeners()
    removeMoveClasses()
    kingMe(movedPieceRow, movedPiece)
    changeTurn()
}

function handleMoveDownLeft(e) {
    const movedPiece = e.currentTarget
    const movedPieceRow = parseInt(movedPiece.id.split('-')[1].split('')[0])
    const movedPieceIdNumber = parseInt(movedPiece.id.split('-')[1])
    const pastPiece = document.querySelector(`#p-${movedPieceIdNumber + 11}`)
    movedPiece.classList.add(`${type}-${color}`)
    pastPiece.classList.remove(`${type}-${color}`)
    removeListenersWhite()
    removeListenersBlack()
    removeMoveListeners()
    removeMoveClasses()
    kingMe(movedPieceRow, movedPiece)
    changeTurn()
}

function handleCaptureDownRight(e) {
    const movedPiece = e.currentTarget
    movedPiece.classList.add(`${type}-${color}`)
    const movedPieceRow = parseInt(movedPiece.id.split('-')[1].split('')[0])
    const movedPieceColumn = parseInt(movedPiece.id.split('-')[1].split('')[1])
    const movedPieceIdNumber = parseInt(movedPiece.id.split('-')[1])
    const pastPiece = document.querySelector(`#p-${movedPieceIdNumber + 18}`)
    const capturedPiece = document.querySelector(`#p-${movedPieceIdNumber + 9}`)
    pastPiece.classList.remove(`${type}-${color}`)
    capturedPiece.classList.remove(`piece-${oppositeColor}`)
    capturedPiece.classList.remove(`king-${oppositeColor}`)
    removeListenersWhite()
    removeListenersBlack()
    removeMoveListeners()
    removeMoveClasses()
    kingMe(movedPieceRow, movedPiece)
    multipleCaptures(movedPiece, movedPieceRow, movedPieceColumn, movedPieceIdNumber)
}

function handleCaptureDownLeft(e) {
    const movedPiece = e.currentTarget
    movedPiece.classList.add(`${type}-${color}`)
    const movedPieceRow = parseInt(movedPiece.id.split('-')[1].split('')[0])
    const movedPieceColumn = parseInt(movedPiece.id.split('-')[1].split('')[1])
    const movedPieceIdNumber = parseInt(movedPiece.id.split('-')[1])
    const pastPiece = document.querySelector(`#p-${movedPieceIdNumber + 22}`)
    const capturedPiece = document.querySelector(`#p-${movedPieceIdNumber + 11}`)
    pastPiece.classList.remove(`${type}-${color}`)
    capturedPiece.classList.remove(`piece-${oppositeColor}`)
    capturedPiece.classList.remove(`king-${oppositeColor}`)
    removeListenersWhite()
    removeListenersBlack()
    removeMoveListeners()
    removeMoveClasses()
    kingMe(movedPieceRow, movedPiece)
    multipleCaptures(movedPiece, movedPieceRow, movedPieceColumn, movedPieceIdNumber)
}

function kingMe(movedPieceRow, movedPiece) {
    if(movedPieceRow === 8 && color === 'white' && type === 'piece') {
        movedPiece.classList.add('king-white')
        movedPiece.classList.remove('piece-white')
        type = 'king'
    }
    if (movedPieceRow === 1 && color === 'black' && type === 'piece') {
        movedPiece.classList.add('king-black')
        movedPiece.classList.remove('piece-black')
        type = 'king'
    }
    
}

function multipleCaptures(movedPiece, movedPieceRow, movedPieceColumn, movedPieceIdNumber) {
        let potentialSquareUpRight
        let potentialSquareUpLeft
        let potentialSquareDownRight
        let potentialSquareDownLeft
        let potentialCaptureUpRight
        let potentialCaptureUpLeft
        let potentialCaptureDownRight
        let potentialCaptureDownLeft

    if((movedPieceRow !== 1 && movedPieceRow !== 2 && movedPieceColumn !== 7 && movedPieceColumn !== 8) || ((movedPieceRow >= 3 && movedPieceRow <= 6) && (movedPieceColumn >= 3 && movedPieceColumn <= 6))) {
         potentialSquareDownRight = movedPiece.parentElement.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.firstElementChild
         potentialCaptureDownRight = potentialSquareDownRight.parentElement.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.firstElementChild
    }

    if((movedPieceRow !== 7 && movedPieceRow !== 8 && movedPieceColumn !== 7 && movedPieceColumn !== 8) || ((movedPieceRow >= 3 && movedPieceRow <= 6) && (movedPieceColumn >= 3 && movedPieceColumn <= 6))) {
        potentialSquareUpRight = movedPiece.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.firstElementChild
         potentialCaptureUpRight = potentialSquareUpRight.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.firstElementChild
    }

    if((movedPieceRow !== 1 && movedPieceRow !== 2 && movedPieceColumn !== 1 && movedPieceColumn !== 2) || ((movedPieceRow >= 3 && movedPieceRow <= 6) && (movedPieceColumn >= 3 && movedPieceColumn <= 6))) {
        potentialSquareDownLeft = movedPiece.parentElement.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.firstElementChild
        potentialCaptureDownLeft = potentialSquareDownLeft.parentElement.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.firstElementChild
    }

    if((movedPieceRow !== 7 && movedPieceRow !== 8 && movedPieceColumn !== 1 && movedPieceColumn !== 2) || ((movedPieceRow >= 3 && movedPieceRow <= 6) && (movedPieceColumn >= 3 && movedPieceColumn <= 6))) {
        potentialSquareUpLeft = movedPiece.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.firstElementChild
        potentialCaptureUpLeft = potentialSquareUpLeft.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.firstElementChild
   }

    checkForMultipleCaptures(movedPiece, movedPieceIdNumber, potentialSquareUpRight, potentialSquareUpLeft, potentialSquareDownRight, potentialSquareDownLeft, potentialCaptureUpRight, potentialCaptureUpLeft, potentialCaptureDownRight, potentialCaptureDownLeft)
}

function checkForMultipleCaptures(movedPiece, movedPieceIdNumber, a, b, c, d, a1, b1, c1, d1) {
    let canTakeMove = false
    
        if (a && a1) {
            if ((movedPiece.classList.contains('piece-white') || movedPiece.classList.contains('king-white') || movedPiece.classList.contains('king-black')) && (!a1.classList.contains(`piece-${color}`) && !a1.classList.contains(`king-${color}`) && !a1.classList.contains(`piece-${oppositeColor}`) && !a1.classList.contains(`king-${oppositeColor}`)) && (a.classList.contains(`piece-${oppositeColor}`) || a.classList.contains(`king-${oppositeColor}`))) {
                addPotentialCaptureUpRight(movedPieceIdNumber)
                canTakeMove = true
            }
        } 
        if (b && b1) {
            if ((movedPiece.classList.contains('piece-white') || movedPiece.classList.contains('king-white') || movedPiece.classList.contains('king-black')) && (!b1.classList.contains(`piece-${color}`) && !b1.classList.contains(`king-${color}`) && !b1.classList.contains(`piece-${oppositeColor}`) && !b1.classList.contains(`king-${oppositeColor}`)) && (b.classList.contains(`piece-${oppositeColor}`) || b.classList.contains(`king-${oppositeColor}`))) {
                addPotentialCaptureUpLeft(movedPieceIdNumber)
                canTakeMove = true
            }
        } 
        if (c && c1) {
            if ((movedPiece.classList.contains('piece-black') || movedPiece.classList.contains('king-white') || movedPiece.classList.contains('king-black')) && (!c1.classList.contains(`piece-${color}`) && !c1.classList.contains(`king-${color}`) && !c1.classList.contains(`piece-${oppositeColor}`) && !c1.classList.contains(`king-${oppositeColor}`)) && (c.classList.contains(`piece-${oppositeColor}`) || c.classList.contains(`king-${oppositeColor}`))) {
                addPotentialCaptureDownRight(movedPieceIdNumber)
                canTakeMove = true
            }
        }
        if (d && d1) {
            if ((movedPiece.classList.contains('piece-black') || movedPiece.classList.contains('king-white') || movedPiece.classList.contains('king-black')) && (!d1.classList.contains(`piece-${color}`) && !d1.classList.contains(`king-${color}`) && !d1.classList.contains(`piece-${oppositeColor}`) && !d1.classList.contains(`king-${oppositeColor}`)) && (d.classList.contains(`piece-${oppositeColor}`) || d.classList.contains(`king-${oppositeColor}`))) {
                addPotentialCaptureDownLeft(movedPieceIdNumber)
                canTakeMove = true
            }
    }

    if (!canTakeMove) {
        changeTurn()
    }
}