import ForgeStep from "../ForgeStep";
import getForgeStepImage from "../ForgeStepImage";

interface ForgeStepRowProps {
    step : ForgeStep;
}

export default function ForgeStepRow( {step} : ForgeStepRowProps) {
    return (
    <tr>
        <td style={{backgroundColor: step < 0 ? "#890202" : "#337336"}}><img src={getForgeStepImage(step)} alt={step.toString()} /></td>
        <td>{ForgeStep[step]}</td>
        <td style={{textAlign: "right"}}>{step}</td>
        <td> </td>
    </tr>);
}