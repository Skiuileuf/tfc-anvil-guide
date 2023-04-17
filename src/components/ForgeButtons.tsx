import ForgeStep from "../ForgeStep";

interface ForgeButtonsProps {
    setStep: React.Dispatch<React.SetStateAction<number>>;
    step: number;
};

export default function ForgeButtons( { setStep, step }: ForgeButtonsProps) {
    return (
        <>
            <p>Forge Steps</p>

            <div style={{ display: 'flex' }}>
                <button style={{ flex: 1 }} onClick={() => setStep(step + ForgeStep.HIT_LIGHT)}>
                    HIT_LIGHT
                </button>
                <button style={{ flex: 1 }} onClick={() => setStep(step + ForgeStep.HIT_MEDIUM)}>
                    HIT_MEDIUM
                </button>
                <button style={{ flex: 1 }} onClick={() => setStep(step + ForgeStep.PUNCH)}>
                    PUNCH
                </button>
                <button style={{ flex: 1 }} onClick={() => setStep(step + ForgeStep.BEND)}>
                    BEND
                </button>
            </div>
            <div style={{ display: 'flex' }}>
                <button style={{ flex: 1 }} onClick={() => setStep(step + ForgeStep.HIT_HARD)}>
                    HIT_HARD
                </button>
                <button style={{ flex: 1 }} onClick={() => setStep(step + ForgeStep.DRAW)}>
                    DRAW
                </button>
                <button style={{ flex: 1 }} onClick={() => setStep(step + ForgeStep.UPSET)}>
                    UPSET
                </button>
                <button style={{ flex: 1 }} onClick={() => setStep(step + ForgeStep.SHRINK)}>
                    SHRINK
                </button>
            </div>
        </>
    );
}