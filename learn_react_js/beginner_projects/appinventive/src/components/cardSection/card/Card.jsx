import React from "react";
import { motion } from "framer-motion";
import move from "lodash-move";
import "./card.css"

const CARDS = [
    {
        key: "tt",
        imgLink: '/monkey.jpg',
        heading: "We've Got Monkey Award",
        paragraph: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque exercitationem necessitatibus laborum accusantium. Beatae, aut ipsam. Assumenda, porro laboriosam quos nam quae, eius ex, fuga error modi eos labore aliquid.",
        readMoreLink: ""
    },
    {
        key: "tt2",
        imgLink: '/monkey.jpg',
        heading: "We've Got Monkey Award",
        paragraph: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque exercitationem necessitatibus laborum accusantium. Beatae, aut ipsam. Assumenda, porro laboriosam quos nam quae, eius ex, fuga error modi eos labore aliquid.",
        readMoreLink: ""
    },
    {
        key: "tt3",
        imgLink: '/monkey.jpg',
        heading: "We've Got Monkey Award",
        paragraph: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque exercitationem necessitatibus laborum accusantium. Beatae, aut ipsam. Assumenda, porro laboriosam quos nam quae, eius ex, fuga error modi eos labore aliquid.",
        readMoreLink: ""
    },
]
const CARD_OFFSET = 15;

export default function CardStack() {
    const [cards, setCards] = React.useState(CARDS);
    const moveToEnd = from => {
        setCards(move(cards, from, cards.length - 1));
    };

    return (
        <div className="wrapperStyle">
            <ul className="cardWrapStyle">
                {cards.map((detail, index) => {
                    const canDrag = index === 0;
                    // console.log(detail)
                    return (
                        <motion.li
                            key={detail.key}
                            className="cardStyle"
                            style={{
                                cursor: canDrag ? "grab" : "auto"
                            }}
                            animate={{
                                top: 0,
                                left: "" + (index * CARD_OFFSET) + "em",
                                zIndex: CARDS.length - index
                            }}
                            drag={canDrag ? "x" : false}
                            dragConstraints={{
                                left: 0,
                                right: 0
                            }}
                            onDragEnd={() => moveToEnd(index)}
                        >
                            <div className="card">
                                <motion.div className="details"
                                >
                                    <h3>{detail.heading}</h3>
                                    <p>{detail.paragraph}</p>
                                    <a href={detail.readMoreLink}>Read More <span>→</span></a>
                                </motion.div>
                                <motion.img
                                    className="img"
                                    src={detail.imgLink} />
                            </div >
                        </motion.li>
                    );
                })}
            </ul>
        </div>
    );
};

