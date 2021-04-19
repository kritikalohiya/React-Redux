import React from 'react';
import './10March.css'
// const fruits =(props)=>{
//     return(
//         <div>
//         <table className="tablee">
//             <tbody>
//                 <tr key={props.id}>
//                     <td>{props.name}</td>
//                     <td>{props.qty}</td>
//                 </tr>
//             </tbody>
//         </table>
//         </div>
//     );
// };
// export default fruits;

const Fruits = (props) => {
    console.log(props);

    return (
        <div>
            {/* <table className="table"> */}
                <tr className="row">
                    <td className="name" >{props.name}</td>
                    <td>{props.quantity}</td>
                    <td className="deleteButton" onClick={props.click}>delete</td>
                </tr>
            {/* </table> */}
        </div>
    )
};

export default Fruits;