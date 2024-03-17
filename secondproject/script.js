const form = document.querySelector('form')
//the above line is to select the form and also have stored in the value

form.addEventListener('submit', function(e){
    //form get submitted in the server so we have to stop the submittion first
    e.preventDefault();
    
    //the below lines are written inorder to select the height and weight and also to take the value  from the input, we will get the value in string so we have  used paresInt inorder to convert the string to int.

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const result = document.querySelector('#result');

    //we are writing the weight and height inside the function is because that our usecase is to submit the value right before the calculation


    if (height === '' || height < 0 || isNaN(height)){
        result.innerHTML = `Please Enter the correct height ${height}`;
    } else if(weight === '' || weight < 0 || isNaN(weight)) {
        result.innerHTML = `Please Enter the correct weight ${weight}`;
    } else {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        result.innerHTML = `<span>${bmi}</span>`;
    }

    if(result < 18.6 ){
        
    }
});