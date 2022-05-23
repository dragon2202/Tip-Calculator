import {FC} from 'react'

import Card from 'antd/lib/card'
import Button from 'antd/lib/button'
import InputNumber from 'antd/lib/input-number'

import UserOutlined from '@ant-design/icons/UserOutlined'

import CustomPercentage from '../components/custom_percentage'

interface InputInterface {
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

const InputCard: FC<InputInterface> = ( props: InputInterface) => {
    const clickedStyles = {//css for active button
        backgroundColor: "hsl(172, 67%, 45%)",
        color: 'black'
    }
    
    function handleClick (customToggle: boolean, inputToggle: number, tip: number) {//handles button color changes on press
        props.setCustomToggle(customToggle); 
        props.setInputToggle(inputToggle); 
        props.setTip(tip);
    }
    return (
        <Card className="input">
            <div className="bill_input">
                <div>Bill</div>
                <InputNumber 
                    prefix="$" 
                    type="text" 
                    placeholder='0' 
                    size={'large'}
                    min={0}
                    precision={2}
                    value={props.total}
                    onChange={props.setTotal}
                />
            </div>

            <div className="select_tip_input">
                <div>Select Tip %</div>
                <Card className='button_grid'>
                    <div className="btn-group">
                        <Button 
                            className="left" 
                            size="large" 
                            style={(props.inputToggle === 1) ? clickedStyles : {}} 
                            onClick={() => { handleClick(false, 1, .05) }
                        }>
                            5%
                        </Button>
                        <Button 
                            className="center" 
                            size="large" 
                            style={(props.inputToggle === 2) ? clickedStyles : {}} 
                            onClick={() => { handleClick(false, 2, .1) }}
                        >
                            10%
                        </Button>
                        <Button 
                            className="right" 
                            size="large" 
                            style={(props.inputToggle === 3) ? clickedStyles : {}} 
                            onClick={() => { handleClick(false, 3, .15) }}
                        >
                            15%
                        </Button>
                    </div>
                    <div className="btn-group_2">
                        <Button 
                            className="left" 
                            size="large" 
                            style={(props.inputToggle === 4) ? clickedStyles : {}} 
                            onClick={() => { handleClick(false, 4, .2) }}
                        >
                            20%
                        </Button>
                        <Button 
                            className="center" 
                            size="large" 
                            style={(props.inputToggle === 5) ? clickedStyles : {}} 
                            onClick={() => { handleClick(false, 5, .25) }}
                        >
                            25%
                        </Button>
                        <CustomPercentage customToggle={props.customToggle} setInputToggle={props.setInputToggle} setCustomToggle={props.setCustomToggle} setTip={props.setTip}/>
                    </div>
                </Card>
            </div>

            <div className="people_input">
                <span className='people_title'>
                    <div className="title">Number of People</div>
                    {(props.numofPeople === 0 || props.numofPeople === null) ? <div className='warning'>Can't be zero/null</div> : null}
                </span>
                <InputNumber 
                    prefix={<UserOutlined/>} 
                    type="text" 
                    status={(props.numofPeople === 0 || props.numofPeople === null) ? 'warning' : ""}
                    size={'large'} 
                    min={0}
                    precision={0}
                    value={props.numofPeople}
                    onChange={props.setNumberofPeople}
                />
            </div>
        </Card>
    )
}

export default InputCard