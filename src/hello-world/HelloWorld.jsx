import './HelloWorld.css'

export default function HelloWorld(){
    const props = {
        text: "Hello World from Spread Syntax"
    }
    return (
        <>
            <HeaderHelloWorld {...props}/>
            <ParagraphHelloWorld/>
        </>
    )
}

function HeaderHelloWorld({text = "ups, lupa ngasih teks"}){ //destructuring props
    return (
        <h1 className="title">{text.toUpperCase()}</h1>
    )
}

function ParagraphHelloWorld(){
    const text = "Selamat belajar reactjs"
    return (
        <p className="content">{text.toLowerCase()}</p>
    )
}