let grade = function(currentMarks, totalMarks){
    let obtainMarks = (currentMarks/totalMarks)*100

    if (obtainMarks >= 90){
        console.log('You Score: ' + obtainMarks + '%');
        console.log('Your grade A');
    }
    else if (obtainMarks >= 80 && obtainMarks < 90){
        console.log('You Score: ' + obtainMarks + '%');
        console.log('You grade B');
    }
    else if (obtainMarks >= 70 && obtainMarks < 80){
        console.log('You Score: ' + obtainMarks + '%');
        console.log('You grade C');
    }
    else if(obtainMarks >= 60 && obtainMarks < 70){
        console.log('You Score: ' + obtainMarks + '%');
        console.log('You grade D');
    }
    else if(obtainMarks >= 50 && obtainMarks < 60){
        console.log('You Score: ' + obtainMarks + '%');
        console.log('You grade E');
    }
    else if(obtainMarks < 50){
        console.log('You Score: ' + obtainMarks + '%');
        console.log('You grade F');
    }
    else{
        console.log('Out of Range');
    }

}

grade(92, 150)