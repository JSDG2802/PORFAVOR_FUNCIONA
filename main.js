function startClassfication()
{
  navigator.mediaDevices.getUserMedia({audio: true});
  classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/Y1oBZYkat/model.json', modelReady);
}

function modelReady()
{
    classifier.classify( gotResults);
}

function gotResults(error, results)
{
 if (error)
 {
    console.error(error);
 }

 else
 {
    console.log(results);
    random_number_r = Math.floor(Math.random() * 255) + 1;
    random_number_g = Math.floor(Math.random() * 255) + 1;
    random_number_b = Math.floor(Math.random() * 255) + 1;

    document.getElementById("result_label").innerHTML = 'ESCUCHO: '+ results[0].label;
    document.getElementById("result_confidence").innerHTML = 'PRECISION: '+ (results[0].confidence*100).toFixed(2)+" %";
    document.getElementById("result_label").style.color = "rgb("+random_number_r+", "+random_number_g+", "+random_number_r+")";
    document.getElementById("result_confidence").style.color = "rgb("+random_number_r+", "+random_number_g+", "+random_number_r+")";

    img = documnet.getElementById('alien1')
    img1 = documnet.getElementById('alien2')
    img2 = documnet.getElementById('alien3')
    img3 = documnet.getElementById('alien4')

    if (results[0].label=="sal")
    {
       img.src = 'aliens-01.gif'
       img1.src = 'aliens-02.png'
       img2.src = 'aliens-03.png'
       img3.src = 'aliens-04.png'
    } else if (results[0].label=="tenedores")
    {
        img.src = 'aliens-02.gif'
        img1.src = 'aliens-01.png'
        img2.src = 'aliens-03.png'
        img3.src = 'aliens-04.png'  
    } else if (results[0].label=="vasos")
    {
    img.src = 'aliens-03.gif'
    img1.src = 'aliens-01.png'
    img2.src = 'aliens-02.png'
    img3.src = 'aliens-04.png'  
    }
   }
  }
