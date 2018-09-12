// A countdown function to my birthday October 30th

$(function () {

    // Set the date we're counting down to
    var countDownDate = new Date("Oct 30, 2018 00:00:01").getTime();
    
    // Update the count down every 1 second
    var x = setInterval(function() {
    
      // Get todays date and time
      var now = new Date().getTime();
    
      // Find the distance between now and the count down date
      var distance = countDownDate - now;
    
      // Time calculations for days, hours, minutes and seconds
      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
      // Display the result in the element with id="countdown"
      
      var countdown = days + " days " + hours + " hour(s) " + minutes + " minute(s) " + seconds + " second(s) ";
      $('#countdown').text(countdown);

      // If the count down is finished, write some text 
      if (distance < 0) {
        clearInterval(x);
        countdown = 'Website Ready !';
        $('#countdown').text(countdown);
      }
    }, 1000);
  


});