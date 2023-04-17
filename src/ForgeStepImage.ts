import ForgeStep from "./ForgeStep";

import BEND from "./assets/ForgeSteps/BEND.png";
import DRAW from "./assets/ForgeSteps/DRAW.png";
import HIT_HARD from "./assets/ForgeSteps/HIT_HARD.png";
import HIT_LIGHT from "./assets/ForgeSteps/HIT_LIGHT.png";
import HIT_MEDIUM from "./assets/ForgeSteps/HIT_MEDIUM.png";
import PUNCH from "./assets/ForgeSteps/PUNCH.png";
import SHRINK from "./assets/ForgeSteps/SHRINK.png";
import UPSET from "./assets/ForgeSteps/UPSET.png";


function getForgeStepImage(step: ForgeStep) {
    switch (step) {
        case ForgeStep.HIT_LIGHT:
            return HIT_LIGHT;
        case ForgeStep.HIT_MEDIUM:
            return HIT_MEDIUM;
        case ForgeStep.HIT_HARD:
            return HIT_HARD;
        case ForgeStep.DRAW:
            return DRAW;
        case ForgeStep.PUNCH:
            return PUNCH;
        case ForgeStep.BEND:
            return BEND;
        case ForgeStep.UPSET:
            return UPSET;
        case ForgeStep.SHRINK:
            return SHRINK;
    }
}


export default getForgeStepImage;