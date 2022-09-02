function calculator(){
    var operation = Number(prompt('choose an option \n 1 - Sum (+) \n 2 - Subtraction (-) \n 3 - Multiplication (x) \n 4 - Division (/) \n 5 - Integer Division (%)'));
    console.log(operation)

    let numb1 = Number(prompt('give me a mumber'));
    let numb2 = Number(prompt('give another number'));
    let result= Number();

    function sum(){
        result = numb1+numb2;
        alert(`${numb1} + ${numb2} = ${result}`);
        newOption();
    }

    function Sub(){
        result = numb1-numb2;
        alert(`${numb1} - ${numb2} = ${result}`);
        newOption();
    }

    function multi(){
        result = numb1*numb2;
        alert(`${numb1} * ${numb2} = ${result}`);
        newOption();
    }

    function division(){
        result = numb1/numb2;
        alert(`${numb1} / ${numb2} = ${result}`);
        newOption();
    }

    function integerDivision(){
        result = numb1%numb2;
        alert(`The rest of the division between ${numb1} and ${numb2} is ${result}`);
        newOption();
    }

    function newOption(){
        let option =  prompt('would you like to perform another operation?\n Yes - (1)\n No - (2)');

        if(option == 1){
            return calculator();} 
        else if(option == 2){
          alert('Thank you!! See You Later!');
        } else {
          alert('Choose a valid option.')
          newOption();
           }
        }


    if(operation == 1){
        return sum();}
    else if(operation == 2){
        return Sub();}
    else if(operation == 3){
        return multi()}
    else if(operation == 4){
        return division()}
    else if(operation == 5){
        return integerDivision()
    }    

}

calculator();