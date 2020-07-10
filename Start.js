class Start{
    constructor(){
        this.button1 = createButton("Volunteer For Food");        
        this.button2 = createButton("NGO");
        this.button3 = createButton("Volunteer For Delivery");

    }

    hide(){
        this.button1.hide();
        this.button2.hide();
        this.button3.hide();

    }

    display(){
        this.button1.position(250, 350);
        this.button2.position(500, 550);
        this.button3.position(650, 350);
        this.button2.mousePressed(()=>{
            form1 = new Form();
        });
        this.button3.mousePressed(()=>{
            form2 = new Form();
        });
    }
}