function makeRed() {
    document.body.style.backgroundColor = 'red';
}
// handle blue button set 
  const blueButton = document.getElementById('make-blue-button');
        // just set the name of the function
        blueButton.onclick = makeBlue;


        function makeBlue(){
            document.body.style.backgroundColor = 'blue';
        }

        // Handle event using green function

         const greenButton = document.getElementById('make-green-button');
    //   Anonymous Function
      greenButton.onclick = function (){
          document.body.style.backgroundColor = 'Green'
}
    //   Handle Add event lisernter
      const goldenButton = document.getElementById('make-goldenrod');
      goldenButton.addEventListener('click', makegoldenrod);

      function makegoldenrod(){
          document.body.style.backgroundColor = 'goldenrod';
}

// addEventListener
 const hotPinkButton = document.getElementById('make-hotpink');
     hotPinkButton.addEventListener('click',function (){
         document.body.style.backgroundColor ='hotpink';
     })
     
    //  direct action
    document.getElementById('light-blue').addEventListener('click',function(){
        document.body.style.backgroundColor = 'LightBlue'
    })
      