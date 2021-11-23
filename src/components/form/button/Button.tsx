import React from 'react'

interface Props {
    text: string    
    type?: "submit" | "button" | "reset"
}

const Btn: React.FC<Props & React.HTMLProps<HTMLButtonElement>> = ({...Props}) => {
    return (
        <button {...Props} type={Props.type ? Props.type : "submit"}>            
            <span>{Props.text}</span>
        </button>
    )
}

export default Btn