import {useState} from 'react'

import Card from 'antd/lib/card'

import InputCard from '../components/inputCard'
import DisplayCard from '../components/displayCard'


function Home () {
    const [total, setTotal] = useState<number>(0)
    const [numofPeople, setNumofPeople] = useState<number>(0)
    const [tip, setTip] = useState<number>(0)
    const [inputToggle, setInputToggle] = useState<number>(0)
    const [customToggle, setCustomToggle] = useState<boolean>(false)
    return (
        <main className="home">
            <section className="content">
                <h2 className="header">
                    SPLI
                    <br/>
                    TTER
                </h2>
                <Card className="parent-card">
                    <InputCard 
                        numofPeople={numofPeople} 
                        setNumberofPeople={setNumofPeople} 
                        total={total} 
                        setTotal={setTotal} 
                        tip={tip} 
                        setTip={setTip}
                        inputToggle={inputToggle}
                        setInputToggle={setInputToggle}
                        customToggle={customToggle}
                        setCustomToggle={setCustomToggle}
                    />
                    <DisplayCard
                        numofPeople={numofPeople} 
                        setNumberofPeople={setNumofPeople} 
                        total={total} 
                        setTotal={setTotal} 
                        tip={tip} 
                        setTip={setTip}
                        inputToggle={inputToggle}
                        setInputToggle={setInputToggle}
                        customToggle={customToggle}
                        setCustomToggle={setCustomToggle}
                    />
                </Card>
            </section>
        </main>
    )
}

export default Home;

/*
    https://html-color-codes.info/colors-from-image/
    https://www.w3schools.com/colors/colors_converter.asp

    TODO:
*/