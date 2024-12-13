
function batclick() {
    let Cchoice;
    console.log('You Have Choosen Bat');
    let randumno = Math.random() * 3;
    if (randumno > 0 && randumno <= 1) {
        Cchoice = 'Bat';
        console.log('Result Is', Cchoice);
    } else if (randumno > 0 && randumno <= 2) {
        Cchoice = 'Ball';
        console.log('Result Is', Cchoice);

    } else if (randumno > 0 && randumno <= 3) {
        Cchoice = 'Stump';
        console.log('Result Is', Cchoice);

    }

    if (Cchoice === 'Bat') {
        document.querySelector('#result').textContent = 'Match Is Tie';
        console.log('Tie');
    } else if (Cchoice === 'Ball') {
        document.querySelector('#result').textContent = 'User Own';
        console.log('User Own');
    } else {
        document.querySelector('#result').textContent = 'Computer Own';
        console.log('Computer Own');
    }
}

function ballclick() {
    let Cchoice2;
    console.log('You Have Choosen Ball');
    let randumno = Math.random() * 3;
    if (randumno > 0 && randumno <= 1) {
        Cchoice2 = 'Bat';
        console.log('Result Is', Cchoice2);
    } else if (randumno > 0 && randumno <= 2) {
        Cchoice2 = 'Ball';
        console.log('Result Is', Cchoice2);

    } else if (randumno > 0 && randumno <= 3) {
        Cchoice2 = 'Stump';
        console.log('Result Is', Cchoice2);

    }

    if (Cchoice2 === 'Bat') {
        document.querySelector('#result').textContent = 'Computer Is Own';
        console.log('Computer Is Own');
    } else if (Cchoice2 === 'Ball') {
        document.querySelector('#result').textContent = 'Match Is Tie';
        console.log('Match Is Tie');
    } else {
        document.querySelector('#result').textContent = 'You Own';
        console.log('You Own');
    }
}

function stump() {
    document.querySelector('#result').textContent = 'Select The Correct One';
}