//calc abilitys
    //accept user input
    //take in input perform appropriate actions
    //store the inputs to perform action
    //display the inputs and return the value

//event listener add
const keys = document.querySelector('.calculator-buttons');
    keys.addEventListener('click', event => {
        const {target} = event;
        const {value} = target;
        if(!target.matches('button')) {
            return;
        } else {
            // console.log(value)
            //pass value to parse method
            calculator.parseInput(value)
        }
    })

    const calculator ={
        displayText :'0',
        prevTotal : null,
        
        parseInput(value) {
            //have any special buttons been clicked
            switch(value) {
                case '=' :
                    //calc answer
                    break;
                case 'AC' :
                    displayText = '0'
                    prevTotal = null
                    break;
                case '.' :
                    if(this.displayText == 0) {
                        this.addText('0.')
                    } else {
                        this.addText(value)
                    }
                    break;
                default:
                    this.addText(value)
                    break;
            }
        },
        addText(value) {
            if(this.displayText == 0) {
                this.displayText = ''
            }else if(this.prevTotal !== null) {
                this.displayText = this.prevTotal
                this.prevTotal = null
            }
            if(isNaN(+(value)) && isNaN(+(this.displayText))) {
                if(isNan(this.displayText.splice(-1))) {
               return;
                }
            }
            this.displayText += value
            this.outputText(this.displayText)
        },

        outputText(text) {
            document.querySelector('.calculator-screen').value = text
        }

    }