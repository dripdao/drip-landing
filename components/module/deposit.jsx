import { useState } from "react";
// Layout and Typography
import { MarginTop } from "../../styles/layout.styled";
import { HalfTopPaddingText } from "../../styles/typography.styled";
// Store
import { useAccountContext } from "../../store/account";
// Subcomponents
import Card from "../subcomponents/card";
import Table from "../subcomponents/table";
import NumberInput from "../subcomponents/inputs/number";
import CtaButton from "../subcomponents/buttons/cta";

function DepositView() {
    const { web3Provider } = useAccountContext();
    const [inputVal, setInputVal] = useState("");

    const handleSubmit = () => {
        console.log("Submit");
    }

    const shouldDisable = () => {
        if(!inputVal || inputVal <= 0){
            return true;
        } else {
            return false
        }
    }

    const mock = [
        {
            name: "Bond #1",
            maturity: "POSTDRIP"
        },
        {
            name: "Bond #2",
            maturity: "08-21-22"
        },
        {
            name: "Bond #3",
            maturity: "09-03-23"
        },
        {
            name: "Bond #4",
            maturity: "05-14-24"
        },
        {
            name: "Bond #5",
            maturity: "12-30-23"
        }
    ];

    return (
        <>
            <MarginTop>
                <HalfTopPaddingText>Deposit BTC</HalfTopPaddingText>
                <NumberInput 
                    value={inputVal}
                    onChange={setInputVal}
                    disabled={!web3Provider}
                />
                <CtaButton 
                    text="Enter DRIP" 
                    onClick={handleSubmit} 
                    disabled={shouldDisable() || !web3Provider}
                />
            </MarginTop>

            {mock.length > 0 && web3Provider && (
                <div>
                    <HalfTopPaddingText>Active DRIPBONDs</HalfTopPaddingText>
                    <Card 
                        inset 
                        style={{
                            maxHeight: "200px", 
                            overflowY: "scroll"
                        }}
                    >
                        <Table data={mock} />
                    </Card>
                </div>
            )}
        </>
    )
}

export default DepositView;