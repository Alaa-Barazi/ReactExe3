import Balloon from "../Balloon/Balloon";

export default function Child({children}){
    const {name,color}=children;
    return (
        <div>
            <h3>{name}</h3>
            <Balloon colour={color}/>
        </div>
    )
}