import Button from 'antd/lib/button'
import InputNumber from 'antd/lib/input-number'

type customType = {
    customToggle: boolean
    setCustomToggle: (val: boolean) => void
    setInputToggle:(val: number) => void
    setTip: (val: number) => void
}

const CustomPercentage = (props: customType) => {
    function convertToFraction (number: number | null) {
        if (number === null) {
            //If input is deleted/missing/null
            props.setTip(0)
        } else if(number % 1 !== 0) {
            //Converts Fraction Input to a decimal with 2 places. ToFixed returns a string so I converted it to a float with ParseFloat
            props.setTip(parseFloat(number.toFixed(2)))
        } else {
            //if input is not null, convert to fraction since the whole number is supposed to be a decimal
            props.setTip(number / 100)
        }
    }
    if (props.customToggle) {//If toggled ON return Input
        return (
            <InputNumber //returns only numbers/decimals
                className='customPercentage_right'
                type="text" 
                size={'large'} 
                min={0}
                onChange={convertToFraction}
            />
        )
    } else {
        return (
            <Button className="right" size="large" onClick={() => { props.setInputToggle(0); props.setCustomToggle(!props.customToggle) }}>Custom</Button>
        )
    }
}

export default CustomPercentage