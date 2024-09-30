const trafficLights = [
  { id: 'light1', timers: { green: 5000, yellow: 2000, red: 1000 } },
  { id: 'light2', timers: { green: 5000, yellow: 2000, red: 1000 } },
  { id: 'light3', timers: { green: 5000, yellow: 2000, red: 1000 } },
  { id: 'light4', timers: { green: 5000, yellow: 2000, red: 1000 } }
];

let currentLight = 0;


function changeLight(lightElement, state) {
  const red = lightElement.querySelector('.red');
  const yellow = lightElement.querySelector('.yellow');
  const green = lightElement.querySelector('.green');
  
  // Reset all lights to off
  red.classList.remove('active');
  yellow.classList.remove('active');
  green.classList.remove('active');

  
  if (state === 'red') red.classList.add('active');
  if (state === 'yellow') yellow.classList.add('active');
  if (state === 'green') green.classList.add('active');
}


function handleTrafficLight(lightIndex) {
  const light = trafficLights[lightIndex];
  const lightElement = document.getElementById(light.id);
  
  
  changeLight(lightElement, 'yellow');

  
  setTimeout(() => {
    changeLight(lightElement, 'green');

    
    setTimeout(() => {
      changeLight(lightElement, 'red');

      // logic to change lights
      const nextLight = (lightIndex + 1) % trafficLights.length;
      
      handleTrafficLight(nextLight);
    }, light.timers.yellow);
    
  }, light.timers.green);
}

// Initialize all lights to red
function initializeLights() {
  trafficLights.forEach((light) => {
    const lightElement = document.getElementById(light.id);
    changeLight(lightElement, 'red');
  });
}

// Start the traffic light sequence with the first light
initializeLights();
setTimeout(() => handleTrafficLight(0), 1000); // Start after a 1-second delay
