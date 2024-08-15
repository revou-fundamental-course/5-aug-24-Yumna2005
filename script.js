

console.log('linked success');

function formValidate() {
    let inputWeight = document.getElementById('input-weight').value;
    let inputHeight = document.getElementById('input-height').value;
    let reset_input = 
    console.log('isi inputan berat badan: ${inputWeight}');
    console.log('isi inputan berat badan: ${inputHeight}');
    if (inputWeight == '') {
        alert('Inputan Berat Badan Kosong!');
    } else {
    console.log(inputHeight * inputWeight);
    }
    console.log('form submitted');

var bmi = inputWeight / (inputHeight / 100) ** 2;

var kategori;
  if (bmi < 18.5) {
    kategori = "Kekurangan berat badan";
    keterangan = "Anda berada dalam kategori underweight atau berat badan kurang. Cara terbaik untuk meningkatkan berat badan adalah dengan mengonsumsi kalor makanan yang lebih banyak dan berolahraga. Jika BMI Anda berada dalam kategori ini maka Anda dianjurkan untuk meningkatkan berat badan hingga batas normal.";
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    kategori = "Normal (Ideal)";
    keterangan = "Selamat! Anda memiliki berat badan yang ideal. Pastikan Anda untuk tetap menjaga pola makan dan olahraga yang seimbang untuk mempertahankan berat badan yang sehat.";
  } else if (bmi >= 25.0 && bmi <= 29.9) {
    kategori = "Kelebihan berat badan";
    keterangan = "Anda berada dalam kategori overweight atau berat badan berlebih. Cara terbaik untuk menurunkan berat badan adalah dengan mengatur kalor makanan yang dikonsumsi dan berolahraga. Jika BMI Anda berada dalam kategori ini maka Anda dianjurkan untuk menurunkan berat badan hingga batas normal.";
  } else {
    kategori = "Kegemukan (Obesitas)";
    keterangan = "Anda berada dalam kategori obesitas atau kegemukan. Cara terbaik untuk menurunkan berat badan adalah dengan mengatur kalor makanan yang dikonsumsi dan berolahraga secara teratur. Jika BMI Anda berada dalam kategori ini maka Anda dianjurkan untuk menurunkan berat badan hingga batas normal.";
  }

 // Tampilkan hasil
 document.getElementById("hasil-title").innerHTML = "BMI Anda: <br> " + bmi.toFixed(2) + " (" + kategori + ")<br>" + keterangan + ket;
}