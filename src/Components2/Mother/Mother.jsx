import './style.css';
import Child from "../Child/Child"
export default function Mother(){
    const kids= [
        { name: 'Ori', color: 'red' },
        { name: 'Ron', color: 'blue' },
        { name: 'Sigalit', color: 'green' },
        { name: 'Ruti', color: 'yellow' },
        { name: 'Alon', color: 'purple' },
    ];
    
    return(
        
      <div>

           
              <br/><h1>A Table Of Five Balloons </h1>
                <br/>
                    <br/> <br/>
                   <Child children={kids[0]} />
                    <Child children={kids[1]} />
                    <Child children={kids[2]} />
                    <Child children={kids[3]} />
                    <Child children={kids[4]} />
              
          
           
            </div>
    )
}