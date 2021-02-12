window.addEventListener("load", () => {
            const high = document.querySelector(".high").innerHTML;
            const speed = document.querySelector(".speed").innerHTML;
            const chill = document.querySelector(".chill");
            if (high <= 50 || speed >= 3) {
                chill.textContent =  Math.round(35.74 + (0.6215 * high) - (35.75 * Math.pow(speed, 0.16)) + (0.4275 * high * Math.pow(speed, 0.16))) + "°F";
            }
            else {
                chill.textContent = "N/A"
            }
            });