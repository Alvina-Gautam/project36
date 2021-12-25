class Question {

  constructor() {
    this.title = createElement('h1')
    this.input1 = createInput("Your Name");  
    this.input2 = createInput("Correct Option");
    this.button = createButton('Submit');
    this.question = createElement('h3');
    this.option1 = createElement('h4');
    this.option2 = createElement('h4');
    this.option3 = createElement('h4');
    this.option4 = createElement('h4');
    this.message = createElement("h2")
  }

  hide(){
    this.title.hide();
    this.input1.hide();
    this.button.hide();
    this.input2.hide();
    this.message.hide();
  }

  display(){
    this.title.html("𝑅𝒾𝒹𝒹𝓁𝑒 𝐹𝑜𝓇 𝒴𝑜𝓊");
    this.title.position(280, 0);
    
    this.question.html("What starts with P and ends with E and have millions of letter in it");
    this.question.position(150, 80);
    this.option1.html("1: Police");
    this.option1.position(150, 100);

    this.option2.html("2: Post Office");
    this.option2.position(150, 120);

    this.option3.html("3: People");
    this.option3.position(150, 140);

    this.option4.html("4: Purse");
    this.option4.position(150, 160);

    this.input1.position(150, 230);
    this.input2.position(350, 230);
    this.button.position(290, 300);

    this.button.mousePressed(()=>{
       this.message.html("Thank You, we have taken your responce");
       this.message.position(350, 350);
    });
  }
}