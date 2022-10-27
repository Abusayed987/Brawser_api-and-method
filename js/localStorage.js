// document.getElementById('btn_add_name').addEventListener('click', function(){
//     const namefield = document.getElementById('name_field');
//     const namefieldValue = namefield.value;

//     localStorage.setItem('Name', namefieldValue)
// })

const setLSvalueByBtnID = (BtnId, fieldId, key) => {
    document.getElementById(BtnId).addEventListener('click', function () {
        const field = document.getElementById(fieldId);
        const FieldValue = field.value;

        localStorage.setItem(key, FieldValue)
    })
};
const removeLSvalueByBtnID = (removeBtnId, key) => {
    document.getElementById(removeBtnId).addEventListener('click', function () {
        localStorage.removeItem(key)
    })
}
const clearLSById = clearBtnId => {
    document.getElementById(clearBtnId).addEventListener('click', function () {
        localStorage.clear();
    })
}


setLSvalueByBtnID('btn_add_name', 'name_field', 'Name');
removeLSvalueByBtnID('btn_remove_name', 'Name')


setLSvalueByBtnID('btn_add_age', 'age_field', 'Age');
removeLSvalueByBtnID('btn_remove_age', 'Age')

clearLSById('btn_clear');
