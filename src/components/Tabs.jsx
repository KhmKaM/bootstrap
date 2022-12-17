import React, {useState} from "react";
import {} from "react-bootstrap-icons";
import { Container} from "react-bootstrap";
const data = [<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus magnam ipsam blanditiis id, consequuntur qui exercitationem eligendi facilis non ipsum.</p>,
<p>Suscipit perferendis distinctio modi reiciendis dolorem, ipsam, quo minus est iusto a possimus magnam ut beatae itaque rem tempora nihil.</p>,
<p>Inventore assumenda dolores dolorum ipsam est, consequatur placeat quisquam odio voluptatem voluptate optio, autem expedita doloremque quos, sunt repellendus quod!</p>,
<p>Aut accusamus est sint, praesentium nulla voluptatem error molestias eum. Molestias, in ipsa beatae libero quia adipisci minus hic ratione?</p>,
<p>Architecto, minus ullam. Sunt atque nemo, expedita doloremque laboriosam, harum laborum ad soluta aut optio, magnam quos ipsa minima! Quo.</p>]

export default () => {
    const names = data.map((el, i) => `Tab ${i + 1}`);
    // const [active, setActive] = useState(0);
    const [active, setActive] = useState(names[0]);
    const handler = (e) => {
        setActive(e.target.textContent);
    }
    // return <>
    //     <h3>Вкладочки</h3>
    //     <div className="tabs-container">
    //        <div className="tabs-nav">
    //             {names.map((el, i) => <button 
    //                 key={i} 
    //                 onClick={e => setActive(i)}
    //                 className={active === i ? "active" : ""}>{el}</button>)}
    //        </div>
    //        {data.map((el, i) => <div className="tabs-data" 
    //             style={{display: active === i ? "block" : "none"}}
    //         >
    //             <h3>{names[i]}</h3>
    //             {el}
    //        </div>)}
    //     </div>
    // </>
 return <Container>
    <h3>Вкладочки</h3>
    <div className="tabs-container">
       <div className="tabs-nav">
            {names.map((el, i) => <button 
                    key={i} 
                    onClick={handler}
                className={active === el ? "active" : ""}>{el}</button>)}
           </div>
           {data.map((el, i) => <div 
                className="tabs-data" 
                style={{display: active === names[i] ? "block" : "none"}}
            >
                <h3>{names[i]}</h3>
                {el}
            </div>)}
     </div>
</Container>
}