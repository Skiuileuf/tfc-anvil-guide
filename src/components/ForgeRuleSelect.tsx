import { Stack } from "@mantine/core";
import ForgeRule from "../ForgeRule";
import getForgeStepImage from "../ForgeStepImage";
import Order from "../Order";
import ForgeStepKeys from "./ForgeStepKeys";
import OrderKeys from "./OrderKeys";

interface ForgeRuleSelectProps {
  index: number;
  setRules: React.Dispatch<React.SetStateAction<ForgeRule[]>>;
  rules: ForgeRule[];
}

export default function ForgeRuleSelect({ index, setRules, rules }: ForgeRuleSelectProps) {

  function handleStepChange(event: React.ChangeEvent<HTMLSelectElement>) {
    const step = parseInt(event.target.value);
    setRules((prevRules) => {
      const updatedRules = [...prevRules];
      updatedRules[index] = { ...updatedRules[index], step };
      return updatedRules;
    });
  }

  function handleOrderChange(event: React.ChangeEvent<HTMLSelectElement>) {
    const order = parseInt(event.target.value);
    setRules((prevRules) => {
      const updatedRules = [...prevRules];
      updatedRules[index] = { ...updatedRules[index], order };
      return updatedRules;
    });
  }

  return (
    <Stack style={{
      width: 'calc((100% - 2rem) / 3)',
      flexDirection: 'column',
    }}>
      <img style={{ backgroundColor: rules[index].step.valueOf() < 0 ? "#890202" : "#337336" }} src={getForgeStepImage(rules[index].step)} alt={rules[index].step.toString()} />
      <select style={{ flex: 1 }} onChange={handleStepChange} value={rules[index].step} disabled={rules[index].order === Order.NONE}>
        <ForgeStepKeys />
      </select>
      <select style={{ flex: 1 }} onChange={handleOrderChange} value={rules[index].order}>
        <OrderKeys />
      </select>
    </Stack>
  )
}