import ForgeRule from "../ForgeRule";
import ForgeStep from "../ForgeStep";
import getForgeStepImage from "../ForgeStepImage";
import Order from "../Order";

interface ForgeRuleRowProps {
    rule : ForgeRule;
}

export default function ForgeRuleRow( {rule} : ForgeRuleRowProps) {
    return (
    <tr>
        <td><img src={getForgeStepImage(rule.step)} alt={rule.step.toString()} /></td>
        <td>{ForgeStep[rule.step]}</td>
        <td style={{textAlign: "right"}} >{rule.step}</td>
        <td>{Order[rule.order]}</td>
    </tr>);
}