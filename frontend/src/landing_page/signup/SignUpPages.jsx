import AccTypes from "./AccTypes";
import Inverst from "./Inverst";
import OpenDematAcc from "./OpenDematAcc";
import SignBenefits from "./SignBenefits";
import Signup from "./Signup";
import OpenAccount from "../OpenAccount";

export default function SignUpPages() {
    return(
        <><Signup/>
        <Inverst/>
        <OpenDematAcc/>
        <SignBenefits/>
        <AccTypes/>
        <OpenAccount/>
        </>
    )
}