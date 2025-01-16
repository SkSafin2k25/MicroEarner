window.onload = function() {
            if (localStorage.getItem('Savedata')) {
                document.getElementById('short1').style.display = 'none';
                
            } 
            if (localStorage.getItem('Savedata2')) {
                document.getElementById('short2').style.display = 'none';
                
            } 
            
            
            
            if (localStorage.getItem('telegram')) {
                document.getElementById('telegram').style.display = 'none';
                
            }
            if (localStorage.getItem('youtube')) {
                document.getElementById('youtube').style.display = 'none';
                
            }
            if (localStorage.getItem('facebook')) {
                document.getElementById('facebook').style.display = 'none';
                
            }
            
            

            
             
            
        };

        // Function to hide the link and redirect
        function hideLink() {
            // Store the click status in localStorage
            localStorage.setItem('Savedata', 'true');
            
            // Hide the link
            document.getElementById('short1').style.display = 'none';
            
            // Redirect to another page
            window.location.href = ''; // Change to your desired URL
        }
        function hideLink2() {
            // Store the click status in localStorage
            localStorage.setItem('Savedata2', 'true');
            
            // Hide the link
            document.getElementById('short2').style.display = 'none';
            
            // Redirect to another page
            window.location.href = ''; // Change to your desired URL
        }
        
        
        
        
        function telegram () {
            // Store the click status in localStorage
            localStorage.setItem('telegram', 'true');
            
            // Hide the link
            document.getElementById('telegram').style.display = 'none';
            let currentReward = parseFloat(localStorage.getItem("faucetReward")) || 0;
  currentReward += 0.0001; // Increase reward by $0.00005

  // Save the updated reward to localStorage
  localStorage.setItem("faucetReward", currentReward.toFixed(5));
alert(' Please Wait a Movement');
            // Redirect to another page
            window.location.href = 'https://t.me/microearner'; // Change to your desired URL
        }
        
        
        
        
        function youtube() {
            // Store the click status in localStorage
            localStorage.setItem('youtube', 'true');
            
            // Hide the link
            document.getElementById('youtube').style.display = 'none';
            
            //Increase 
            let currentReward = parseFloat(localStorage.getItem("faucetReward")) || 0;
  currentReward += 0.0001; // Increase reward by $0.00005

  // Save the updated reward to localStorage
  localStorage.setItem("faucetReward", currentReward.toFixed(5));
            
            alert(' Please Wait a Movement');
            // Redirect to another page
            window.location.href = ''; // Change to your desired URL
        }
        function facebook() {
            // Store the click status in localStorage
            localStorage.setItem('facebook', 'true');
            
            // Hide the link
            document.getElementById('facebook').style.display = 'none';
            
            //Increase 
            let currentReward = parseFloat(localStorage.getItem("faucetReward")) || 0;
  currentReward += 0.0001; // Increase reward by $0.00005

  // Save the updated reward to localStorage
  localStorage.setItem("faucetReward", currentReward.toFixed(5));
            
            alert(' Please Wait a Movement');
            // Redirect to another page
            window.location.href = ''; // Change to your desired URL
        }