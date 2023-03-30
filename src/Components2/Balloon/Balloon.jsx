import './style.css'
export default function Balloon({colour}){
    return (
        <div className="dot" style={{backgroundColor:colour}}></div>
    )
}