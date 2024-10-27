// Write a travel booking system that allows a user to select a mode of transport (Flight, Train, Bus) and then choose a class or category:

// Flight: Economy, Business

// Train: Sleeper, AC Class

// Bus: Standard, Luxury

const Transport=prompt("Choose Transport(flight/train/bus):  ").toLowerCase()
let Category

switch (Transport){
    case "flight":
         Category=prompt("Choose Category(economy/business):  ").toLowerCase()

        switch (Category){
            case "economy":
                console.log("Seats are Available in Economy Class");
                break;
            case "business":
                console.log("Seats are Available in Business Class");
                break;
            default :
            console.log("Seats are Not Avilable")
        }break;
            
    case "train":
         Category=prompt("Choose Category(sleeper/ac class):  ").toLowerCase()

        switch (Category){
            case "sleeper":
                console.log("Seats are Available in Sleeper Class");
                break;
            case "ac class":
                console.log("Seats are Available in AC Class");
                break;
            default :
                console.log("Seats are Not Avilable ")
            
            }break;
         
    case "bus":
         Category=prompt("Choose Category (standard/luxury):  ").toLowerCase()

        switch (Category){
            case "standard":
                console.log("Seats are Available in Standard Class");
                break;
            case "luxury":
                console.log("Seats are Available in Luxury Class");
                break;
            default :
               console.log("Seats are Not Avilable")
               
            }break;
         
    default:
        console.log("Invalid Transport Selection")
       
    }


