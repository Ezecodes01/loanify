import React from 'react'

const button_style = {
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    color: 'white',
    padding: '0.75rem 1.5rem',
    borderRadius: '50px',
    textdecoration: 'none',
    fontweight: '600',
    transition: 'transform 0.3s ease, boxshadow 0.3s ease',
    cursor: 'pointer',
    border: 'none'
}

export default function Button(props) {
    function ClickButton(event){
        alert(props.text +" Button clicked ")
    }
  return (
    <button style={button_style} onClick={ClickButton}> {props.text} </button>
  )
}


export function Button2({text,classNameProps, onclickHandler}) {
   
  return (
    <button className={classNameProps}onClick={onclickHandler}>{text}</button>
    
  )
}  

export function Button3({text}) {
  return (
    <Button2 text={text} classNameProps={'btn-secondary'} />
  )
}


