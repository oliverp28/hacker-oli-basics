    // variables to store the countdown element and the start and stop buttons
    var count = 0;
    var countdownEl = document.getElementById('countdown');
    var startButton = document.getElementById('startButton');
    var stopButton = document.getElementById('stopButton');
    var counter;
    
    // start the countdown
    function startCountdown() {
        counter = setInterval(countdown, 1000);
        startButton.disabled = true;
        stopButton.disabled = false;
      }
      
    // stop the countdown
    function stopCountdown() {
        clearInterval(counter);
        countdownEl.innerHTML = '';
        count = 0;
        startButton.disabled = false;
        stopButton.disabled = true;
        // delete the progress bar
        progressBar = document.getElementById('progressBarDiv');
        progressBar.innerHTML = '';
      }
    
    // countdown function
    function countdown() {
        countdownEl.innerHTML = count;
        count++;
        progressBarCountdown(count);
        if (count > 45) {
            clearInterval(counter);
            countdownEl.style.color = 'green';
            countdownEl.innerHTML = 'Der Computer ist jetzt einsatzbereit!';
            stopButton.disabled = true;
            startButton.disabled = false;
            // delete the progress bar after 2 seconds
            progressBarCountdown(45);
            count = 0;
            progressBar = document.getElementById('progressBarDiv');
            setTimeout(function() {
                progressBar.innerHTML = '';
            }, 2000);
        }
    }

    function progressBarCountdown(count) {
        var progressBar = document.getElementById('progressBarDiv');
        var width = (count / 45) * 100; // calculate the width based on count
        progressBar.innerHTML = `
            <div class="progress" id="progressBarDiv" role="progressbar" aria-label="Animated striped example" aria-valuenow="${count}" aria-valuemin="0" aria-valuemax="45">
                <div class="progress-bar progress-bar-striped progress-bar-animated" style="width: ${width}%"></div>
            </div>
        `;
    }

    function ping() {
        var resultElement = document.getElementById("pingResult");
        resultElement.innerHTML = "Ping wird ausgeführt...";

        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function() {
            if (this.readyState === 4) {
                if (this.status === 0) {
                    resultElement.innerHTML = "Fehler: Die Verbindung wurde abgelehnt.";
                } else if (this.status === 200) {
                    resultElement.innerHTML = this.responseText;
                } else {
                    resultElement.innerHTML = "Fehler: " + this.statusText;
                }
            }
        };
        xhr.open("GET", "ping.php?host=192.168.0.95", true);
        xhr.send();
    }


