import React from 'react';
// import './App.css';
import ForgeStep from './ForgeStep';
import Order from './Order';
import ForgeRuleSelect from './components/ForgeRuleSelect';
import ForgeRule from './ForgeRule';
import ForgeRuleRow from './components/ForgeRuleRow';
import ForgeStepRow from './components/ForgeStepRow';
import { Container, Group, Table } from '@mantine/core';
import { useHotkeys } from '@mantine/hooks';


function App() {
	const [devMode, setDevMode] = React.useState(false);
	useHotkeys([
		['ctrl+K', () => setDevMode(!devMode)]
	  ]);
	const [target, setTarget] = React.useState(75);
	const [currentPosition, setCurrentPosition] = React.useState(75);
	const [rules, setRules] = React.useState<ForgeRule[]>([
		{ step: ForgeStep.HIT_LIGHT, order: Order.ANY },
		{ step: ForgeStep.HIT_LIGHT, order: Order.ANY },
		{ step: ForgeStep.HIT_LIGHT, order: Order.ANY },
	]);

	const offset = rules.reduce<number>((accumulator, rule: ForgeRule) => {
		return accumulator + ((rule.order === Order.NONE) ? 0 : rule.step);
	}, 0)

	function compareForgeRules(a: ForgeRule, b: ForgeRule): number {
		// if (a.order === b.order) {
		// 	return a.step - b.step;
		// }

		return a.order - b.order;
	}

	function generateSteps(currentPosition: number, target: number): ForgeStep[] {
		const steps: ForgeStep[] = [];

		function findClosestForgeStep(value: number): ForgeStep {
			let closestStep: ForgeStep = ForgeStep.HIT_LIGHT;
			let minDifference = Math.abs(value - ForgeStep.HIT_LIGHT);

			for (const stepValue of Object.values(ForgeStep)) {
				const difference = Math.abs(value - Number(stepValue));

				if (difference < minDifference) {
					minDifference = difference;
					closestStep = stepValue as ForgeStep;
				}
			}

			return closestStep;
		}

		while (currentPosition !== target) {
			if (currentPosition < 0 || currentPosition > 150) {
				break;
			}

			const diff = target - currentPosition;
			const closestForgeStep = findClosestForgeStep(diff);
			steps.push(closestForgeStep);
			currentPosition += closestForgeStep;
		}


		return steps;
	}

	return (
		<Container>
			<header>
				<p>TerraFirmaCraft 1.18 Anvil Solver</p>
			</header>
			<main>
				<p>Forge Rules</p>
				{/* <div style={{ display: 'flex' }}> */}
				<Group position="center" spacing="xs">
					<ForgeRuleSelect index={0} setRules={setRules} rules={rules} />
					<ForgeRuleSelect index={1} setRules={setRules} rules={rules} />
					<ForgeRuleSelect index={2} setRules={setRules} rules={rules} />
				</Group>
				{/* </div> */}

				{devMode && <><p>Forge rules object: {JSON.stringify(rules.sort(compareForgeRules), null, 2)}</p>
				<p>Forge rules offset: {offset}</p></>}

				<p>Guide: Align the two cursors, input the forging rules above and you'll see the required steps in order to finish forging. Work In Progress, may fail for some recipes.</p>

				{/* public static final int LIMIT = 150; */}

				<Table highlightOnHover withBorder withColumnBorders>
					<thead>
						<tr>
							<th style={{width: 47}}></th>
							<th>Name</th>
							<th>Value</th>
							<th>Order</th>
						</tr>
					</thead>
					<tbody>
						{
							generateSteps(currentPosition, target - offset).map((step, index) => {
								return <ForgeStepRow key={index} step={step} />
							})
						}
						<tr>
							<td colSpan={4}>Follow the forging steps above, then the ones denoted by the anvil rules.</td>
						</tr>
						{
							[...rules].sort(compareForgeRules).reverse().map((rule, index) => {
								return <ForgeRuleRow key={index} rule={rule} />
							})
						}
					</tbody>
				</Table>
			</main>
		</Container>
	);
}

export default App;
