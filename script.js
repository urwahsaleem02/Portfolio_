$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["Developer", "Designer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["Developer", "Designer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });
});

// cv download work

function downloadCV() {
    var link = document.createElement('a');
    link.setAttribute('href', 'urwah_resume.pdf');
    link.setAttribute('download', 'urwahsaleem.pdf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

//Sweet Alert
  var myForm = document.getElementById('myForm');
  var myButton = document.getElementById('myButton');

  // Add event listener to the button
  myButton.addEventListener('click', () => {
    // Check if any field is empty
    var field1Value = document.getElementById('field1').value;
    var field2Value = document.getElementById('field2').value;
    var field3Value = document.getElementById('field3').value;
    var field4Value = document.getElementById('field4').value;

    if (field1Value === '' || field2Value === '' || field3Value === '' || field4Value === '') {
      // If any field is empty, show an error alert
      Swal.fire({
        title: 'Error!',
        text: 'Please fill all fields.',
        icon: 'error',
        confirmButtonText: 'Ok'
      });
    } else {
      // If all fields are filled, show success alert
      Swal.fire({
        title: 'Success!',
        text: 'Your Message has been Sent',
        icon: 'success',
        confirmButtonText: 'Ok'
      });
    }
  });

  // Read More Button Js

  const initialContent = document.getElementById('initialContent');
  const additionalContent = document.getElementById('additionalContent');
  const readMoreButton = document.getElementById('readMoreButton');

  readMoreButton.addEventListener('click', function() {
      if (additionalContent.style.display === 'none') {
          additionalContent.style.display = 'block';
          readMoreButton.textContent = 'Read Less'; 
      } else {
          additionalContent.style.display = 'none';
          readMoreButton.textContent = 'Read More'; 
      }
  });
