class Form{
    constructor(){
        this.input = createInput("Name");
        this.button = createButton("Submit");
        this.address = createInput("Address");
        this.phone = createInput("Phone Number");
    }

    hide(){
        this.input.hide();
        this.button.hide();
        this.address.hide();
        this.phone.hide();
    }

    display(){
        this.input.position(300, 200);
        this.address.position(300, 250);
        this.phone.position(300, 300);
        this.button.position(350, 350);
        this.button.mousePressed(()=>{
        //    car.display();
        player.name = this.input.value();
        playerCount+=1;
        player.index = playerCount;
        player.update();
        player.updateCount(playerCount);
        // console.log("working");

        });
    }
}