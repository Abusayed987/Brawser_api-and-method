const getInputValuebyId = inputId => {
    const inputField = document.getElementById(inputId);
    const productValue = inputField.value;
    inputField.value = '';
    return productValue;

}

const addProduct = () => {
    const productName = getInputValuebyId('product_field');
    const productQuantity = getInputValuebyId('product_quantity')
    console.log(productName, productQuantity );

    const productContainer = document.getElementById('product_container');
    const li = document.createElement('li');
    li.innerText = `${productName} : ${productQuantity}`;
    productContainer.appendChild(li)


    //set local Storage 
    localStorage.setItem(productName, productQuantity);



}