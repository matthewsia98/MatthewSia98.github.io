function InstructionStep(props) {
    function toggleInstruction(event) {
        const clicked_instruction = event.target.parentNode.lastChild;
        console.log(event.target);
        if (clicked_instruction.style.display === "block") {
            clicked_instruction.style.display = "none";
        } else {
            const instructions = document.querySelectorAll(".instruction");
            instructions.forEach((instruction) => {
                instruction.style.display = "none";
            })
            
            clicked_instruction.style.display = "block";
            
        }
    }

    return (
        <div className="instruction-step">
            <div className="instruction-collapsible" onClick={toggleInstruction}>
                <p>{props.name}</p>
                <img className="course-down-arrow" src={require("./icons/down-arrow.png")} />
            </div>
            <div className="instruction">
                <p>{props.instruction}</p>
            </div>
        </div>
    );
}

export default InstructionStep;