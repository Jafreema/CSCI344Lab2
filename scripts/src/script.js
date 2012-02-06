/**
 * This is the entry point for our JavaScript program
 */
function main() {
    //your code goes here
  
   // alert("hello world!");


    //your tasks

    //1. Create a spotter and get it to insert tweets into the DOM
    var count = 0;
    
    var color = 'red';
    
     var s = new Spotter("twitter.search",
     	     {q:"football", period:120},
     	     {buffer:true, bufferTimeout:750});
     
     s.register(function(tweet) {
     	//2. Add profile images (tweet.profile_image_url)
     	 	
     	
     	
     	var profile_image = "<img src='"+tweet.profile_image_url+"'/>"
     	
     	var object = $("<p  class="+ color + ">" + profile_image + tweet.text + "</p>");
     	
     	count ++;
     	
     	if(count %2 === 0){
     	  color = 'red';
     	}
     	  else{
     	    color = 'blue';
     	  }
     	
    object.hide();
    $("#tweets").prepend(object);
    object.slideDown();
 
     });
     
     s.start();
    
       
    //3. Make the tweets occur so the most recent are at the top
    
 
    
    //4. Make the tweets slide down
    //5. Alternate the colors or the background of the tweets
    //6. Show a maximum of 10 tweets at a time (remove old tweets from the dom)


}

main();
