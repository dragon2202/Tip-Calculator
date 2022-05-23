import { FC } from 'react'

import Card from 'antd/lib/card'
import Button from 'antd/lib/button'

interface DisplayInterface {
    numofPeople: number;
    setNumberofPeople: (val: number) => void;
    total: number;
    setTotal: (val: number) => void;
    tip: number;
    setTip: (val: number) => void;
    inputToggle: number;
    setInputToggle: (val: number) => void;
    customToggle: boolean;
    setCustomToggle: (val: boolean) => void;
}

const DisplayCard: FC<DisplayInterface> = ( props: DisplayInterface) => {
    function handleReset() { //Handles reset button click
        props.setNumberofPeople(0);
        props.setTotal(0);
        props.setTip(0);
        props.setInputToggle(0);
        props.setCustomToggle(false);
    }
    //(142.55 / 5) + ((142.55 / 5)  * .15)
    //(total / numofPeople) + ((total /numofPeople) * tip)
    function calculateTipAndTotal(total: number, numofPeople: number, tip: number) {
        let tipPerPerson = 0
        let totalPerPerson = 0
        if ((total === 0 || numofPeople === 0 || tip === 0) || (total === null || numofPeople === null || tip === null)) {//base case
            return {tipPerPerson, totalPerPerson}
        } else {
            // Since the number in the design doc is 4.27. I assume that it's NOT supposed to be rounded.
            // ((142.55/5) * .15) = 4.2765 => 4.27 instead of 4.28
            tipPerPerson = Math.trunc(((total/numofPeople) * tip) * 100) / 100
            //I decided to round the total amount paid because adding the bill paid per person plus the non rounded tip might be a decimal as well.
            //It wouldn't make sense to round down as the resulting total per person might cause an error in the math
            //I do know that (142.55/5) + 4.2765 rounded up will be 32.79. My current math makes it 32.78 based of the non rounded tip
            totalPerPerson = Math.round(((total/numofPeople) + tipPerPerson) * 100) / 100
            return {tipPerPerson, totalPerPerson}
        }
    }
    return (
        <Card className="display">
            <Card className="tip_amount_display">
                <Card type="inner" className="tip">
                    <div>
                        <div>Tip Amount</div>
                        <div className="person">/ person</div>
                    </div>
                </Card>
                <Card type="inner" className="display">
                    {"$" + calculateTipAndTotal(props.total, props.numofPeople, props.tip).tipPerPerson}
                </Card>
            </Card>
            <Card className="total_display">
                <Card type="inner" className="total">
                    <div>
                        <div>Total</div>
                        <div className="person">/ person</div>
                    </div>
                </Card>
                <Card type="inner" className="display">
                    {"$" + calculateTipAndTotal(props.total, props.numofPeople, props.tip).totalPerPerson}
                </Card>
            </Card>
            <Button className='reset_button' type="primary" size={'large'} onClick={() => handleReset()}>Reset</Button>
        </Card>
    )
}

export default DisplayCard