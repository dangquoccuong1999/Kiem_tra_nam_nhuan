function kiem_tra_nam() {
    let input = parseInt(document.getElementById('input').value);
    console.log(input)
    if (input % 4 == 0 && input % 100 != 0) {
        alert(input + ' là năm nhuận');
    }
    else {
        alert(input + ' không là năm nhuận');
    }

}