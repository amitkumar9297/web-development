
import styled from "styled-components";

const RollDice = ({currentDice, roleDice}) => {

  return (
    <DiceContainer>
        <div className="dice" onClick={roleDice}>
            <img src={`images/dice_${currentDice}.png`} alt="dice_1"/>
        </div>
        <p>Click on Dice to Scroll</p>
    </DiceContainer>
  )
}

export default RollDice;

const DiceContainer = styled.div`

    margin-top: 48px;
    display: flex;
    align-items: center;

    flex-direction: column;

    p{
        font-size: 25px;
    }

    .dice{
        cursor: pointer;
    }
`;