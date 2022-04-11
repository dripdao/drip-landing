import { ChainId, Token, WETH, Fetcher, Route } from "@uniswap/sdk";

export default function usePrices(){
    async function getRenBtcEthPair(){
        const DAI = new Token(
            ChainId.MAINNET,
            "0xeb4c2781e4eba804ce9a9803c67d0893436bb27d", // renBTC Address
            18
        );

        const pair = await Fetcher.fetchPairData(DAI, WETH[DAI.chainId]);
        const route = new Route([pair], WETH[DAI.chainId]);
        const price = (route.midPrice.toSignificant(6) * Math.pow(10, 10)).toFixed(4);
        return price;
    }

    return {
        getRenBtcEthPair
    }
}