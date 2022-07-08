import React from 'react';
import s from "./EventInfo.module.css"
import {Container} from "react-bootstrap";

const EventInfo = () => {
    return (
        <div>
           <Container fluid={"auto"}>
               <section className={s.wrapper}>
                   <h2>
                       <strong> Upcoming Event </strong>
                       Information
                   </h2>
                   <p>Every mountain top is within reach if you just keep climbing. Phasellus dapibus, ligula et aliquet ultricies.
                       Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                       Maecenas fermentum tristique dolor sed congue!
                   </p>
                   <p>
                       <a href='#' target="_blank">
                           <span>Get Information</span>
                       </a>
                   </p>
               </section>
           </Container>

        </div>
    );
};

export default EventInfo;