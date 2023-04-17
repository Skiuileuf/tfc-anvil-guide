import ForgeStep from "../ForgeStep";

export default function ForgeStepKeys() {
    return(
        <>
        {Object.keys(ForgeStep).filter((key) => !isNaN(Number(key))).map((option, index) => (
              <option key={index} value={option} style={{color: "white", backgroundColor: Number(option) < 0 ? "#890202" : "#337336"}}>
                {ForgeStep[Number(option)]}
              </option>
            ))}
        </>
    )
}