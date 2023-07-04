const expect = require('chai').expect;

const {createRocket, loadAstronauts, lightThisCandle, fillFuelTanks} = require('../rocket.js');

// describe('Initial setup of rocket', function() {
//   it('Does not have a name', function() {
//     let rocket = createRocket();

//     expect(rocket.name).to.equal('');
//   });

//   it('Has fuel tanks that are empty', function() {
//     let rocket = createRocket();

//     expect(rocket.fuel).to.equal('empty');
//   });

//   it('There are no astronauts initially', function() {
//     let rocket = createRocket();

//     expect(rocket.astronauts).to.deep.equal([]);
//   });

//   it('The engines are not ignited', function() {
//     let rocket = createRocket();

//     expect(rocket.enginesIgnited).to.equal(false);
//   });

//   it('The cargo doors are closed and there is no cargo', function() {
//     let rocket = createRocket();

//     expect(rocket.cargoDoors).to.equal('closed');
//     expect(rocket.cargo).to.deep.equal([]);
//   });  
// });


// describe('Functionality of rocket', function() {
//   it('Should be able to load astronauts', function() {
//     let rocket = createRocket();

//     rocket = loadAstronaut(rocket, 'Alan Shepard');

//     expect(rocket.astronauts).to.deep.equal(['Alan Shepard']);
//   });

//   it('Should be able to ignite the engines', function() {
//     let rocket = createRocket();

//     rocket = lightThisCandle();

//     expect(rocket.enginesIgnited).to.equal(true);
//   });

//   it('Should be able to fill the fuel tanks', function() {
    //Finish this test, then write implementation code to pass all tests.  
    //Then implement beforeEach hook to DRY up test file
//   });

// });

// describe('Functionality of rocket', function() {
//   beforeEach(function() {
//     this.rocket = createRocket();
//   });

  describe('Functionality of rocket', function() {
    beforeEach(function() {
      this.rocket = createRocket(); // Using createRocket without a name
    });

    it('Can be given a name when the rocket is created', function() {
      let rocket = createRocket('Mercury-Redstone 3');
  
      expect(rocket.name).to.equal('Mercury-Redstone 3');
    });
    
  it('Should be able to load astronauts', function() {
    this.rocket = loadAstronauts(this.rocket, 'Alan Shepard');

    expect(this.rocket.astronauts).to.deep.equal(['Alan Shepard']);
  });

  it('Should be able to ignite the engines', function() {
    this.rocket = lightThisCandle(this.rocket);

    expect(this.rocket.enginesIgnited).to.equal(true);
  });

  it('Should be able to fill the fuel tanks', function() {
    this.rocket = fillFuelTanks(this.rocket);

    expect(this.rocket.fuel).to.equal('full');
  });
});

//In JavaScript, the this keyword refers to the current object that is being accessed or operated on. It is a way to refer to the context in which a function is invoked.

// In the given code, this is used in the beforeEach and test cases within the describe block. Here's a simplified explanation:

//beforeEach: This is a hook provided by the testing framework (such as Mocha) that runs before each test case. Inside the beforeEach function, this refers to the current context, which is the context of the current test case being executed. It allows you to set up any initial state or variables that you want to use in the test cases. In this case, this.rocket is used to store the rocket object that is created before each test case.

// Test Cases: Inside each test case, this again refers to the current context, which is the context of the current test case being executed. It allows you to access and modify the variables or properties defined in the beforeEach hook. In this case, this.rocket is used to access and modify the rocket object created in the beforeEach hook.

// By using this.rocket in the test cases, it ensures that each test case operates on the same rocket object, providing a clean and consistent state for each test.

// In summary, this in the given code refers to the current context, allowing you to access and modify the rocket object within the beforeEach hook and test cases. It ensures that the tests are performed on the same rocket object, providing a predictable and controlled environment for each test.