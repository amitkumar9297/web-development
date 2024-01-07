import { useRef, useEffect } from 'react';
import { useScroll } from "framer-motion";

import "./CardSection.css"
import CardStack from "./card/Card"

const CardSection = () => {
    const scrollRef = useRef(null)
    const { scrollYProgress } = useScroll({
        container: scrollRef,
        // target: ref,
        offset: ["end end", "start start"]
    });

    useEffect(() => {

        console.log(scrollYProgress)
    }, [scrollYProgress])

    return (
        <section className="section">
            <div className="award">Awards</div>
            {/* <div id='append' className="imgView">
                <img
                    className="img"
                    src='/monkey.jpg' />
                <img
                    className="img"
                    src='/monkey.jpg' />
                <img
                    className="img"
                    src='/monkey.jpg' />
                <img
                    className="img"
                    src='/monkey.jpg' />
            </div> */}
            {/* <div className='CardView' ref={scrollRef}> */}
            {/* <Card sref={scrollRef} />
                <Card sref={scrollRef} />
                <Card sref={scrollRef} />
                <Card sref={scrollRef} /> */}
            <CardStack >

            </CardStack>

            {/* </div> */}

        </section >
    );
}

export default CardSection;
