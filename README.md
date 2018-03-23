# THERMO

In this assignments you have the task to create climate measurement device which has an interface similar to the following tool:

<p align="center">
  <img src="https://raw.githubusercontent.com/seriousManual/thermo/master/thermo.jpg" width="350" />
</p>

In the sample code you find the class `Sensor` which is a EventEmitter that emits `temperature` and `humidity` events. 
The following criteria should be met when working on the assignments.

Below you find a list of assignments. Each Assignment consists of a small step toward the complete solution. The assignments are structured so that with every assignment certain aspects of the work with the Redux state managment paradigm and its interaction with React.  
After completion of each assingment consult your supervisor for a review of your results.

## Installation

1. Fork the repo
2. Clone it to your local machine
3. `npm install` the dependencies
4. `npm start` to start the application stub
5. `npm test` to run the tests

## Acceptance Criteria

1. Render the current temperature, rounded to one decimal 
    1. Render the lowest temperature ever encountered
    2. Render the highest temperature ever envountered
    3. Add a reset button that resets the highest and lowest temperature
2. Render the current humidity, rounded whole numbers
    1. Render the lowest humidity ever encountered
    2. Render the highest humidity ever encountered
    3. Add a reset button that resets the highest and lowest humidity
3. Render a global reset button which resets all max and all min values
4. Render a Button that toggles the current temperature schema (Celsius <-> Fahrenheit)
5. **Bonus Assignment**    
Show a climate indicator which identifies the quality of the current climate, it consists of a smiley face (sad, happy) and a label
    * humidity
        * humidity < 40%: sad, "dry"
        * 40% < humidity < 60%: happy
        * humidity <= 60%: sad, "moist"
    * temperature
        * temperature < 17°C: sad, "cold"
        * 17°C < temperature <= 25°C: happy
        * 25°C < teperature: sad, "hot"

## Assignments

### 1. Application State
Create the application state that will be used to render the frontend.

### 2. Actions
Design Actions and Action Creators that are suitable to fulfill the Acceptance Criteria

### 3. Reducer
Design a Reducer that uses the actions from assignment #2 and the global application state from assignment #1.

### 4. Unit Tests
Write Tests that verifiy that the combination of reducer and actions result in a correct new state.  
Pay special attention to the immutibility of your application state!
In the folder `__tests__` you find some simple tests that correspond with the code stubs already existing.

### 5. Frontend
Design a component tree that shows the information.
Do not use the data from the application state, instead use dummy data for the sample frontend.

### 6. Unit Tests / Snapshot tests of components
Create unit tests that test the behaviour of your components.
In the folder `__tests__` you find a simple component test that checks for certain features in the rendered output.

In the sample test of App.jsx you also find that a snapshot test is added there, too. The snapshot test compares the output of a rendered component with the output of a previous test run and tells you if something has changed in the generated markup.
If the snapshot test fails, it is you task to inspect the error(s) and to regenerate the snapshots using the command `npm test -- -u` if the output correctly corresponds to your changes.

### 6. State Connection
Connect the application via the react-redux bindings to the global application state.