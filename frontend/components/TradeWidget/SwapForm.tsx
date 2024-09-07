import { Avatar, Input, Select, Selection, SelectItem, InputProps, Button } from "@nextui-org/react";
import clsx from "clsx";
import React from "react";

const tokens: Token[] = [
    { name: "Bitcoin", symbol: "BTC", amount: 0.1, icon: "https://cryptologos.cc/logos/bitcoin-btc-logo.png", key: "BTC" },
    { name: "Ethereum", symbol: "ETH", amount: 0.5, icon: "https://cryptologos.cc/logos/ethereum-eth-logo.png", key: "ETH" },
    { name: "Aptos", symbol: "APTOS", amount: 1000, icon: "https://cryptologos.cc/logos/aptos-apt-logo.png?v=033", key: "APTOS" },
];

type Token = {
    name: string;
    symbol: string;
    key: string;
    amount: number;
    icon?: string;
}

interface SwapInputProps extends InputProps {
    label: string;
    token: Token;
    onTokenSelect: (token: Token) => void;
    amount: number;
    onAmountChange: (amount: number) => void;
}

function TokenSelect({ token, onTokenSelect }: { token: Token, onTokenSelect: (token: Token) => void }) {
    const [values, setValues] = React.useState<Selection>(new Set([]));

    const handleSelectionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setValues(new Set(e.target.value.split(",")));
    };
    return (
        <Select
            value={token.name}
            label={"Token"}
            selectionMode="single"
            selectedKeys={values}
            defaultSelectedKeys={["BTC"]}
            radius="lg"
            onChange={handleSelectionChange}
            items={tokens}
            title="Select a token"
            listboxProps={{
                itemClasses: {
                    base: [
                        "rounded-md",
                        "text-default-500",
                        "transition-opacity",
                        "data-[hover=true]:text-foreground",
                        "data-[hover=true]:bg-default-100",
                        "dark:data-[hover=true]:bg-default-50",
                        "data-[selectable=true]:focus:bg-default-50",
                        "data-[pressed=true]:opacity-70",
                        "data-[focus-visible=true]:ring-default-500",
                    ],
                },
            }}
            className="min-w-16"
            classNames={{
                label: "group-data-[filled=true]:hidden h-fit",
                trigger: "h-fit p-2 bg-forground-200 shadow-none",
                listboxWrapper: "max-h-[400px]",
                mainWrapper: "rounded-[16px] bg-foreground-200",
                innerWrapper: "group-data-[has-label=true]:pt-0"
            }}
            renderValue={(tokens) => {
                return tokens.map((token) => (
                    <div key={token.key} className="flex flex-row items-center gap-2 w-fit">
                        <Avatar src={token.data?.icon} className="h-8 w-8 rounded-full" />
                        <p className="text-foreground-900 text-base font-semibold w-fit">{token.data?.name}</p>
                    </div>
                ));
            }}
        >
            {(token: Token) => (
                <SelectItem
                    key={token.key}
                    value={token.name}
                    classNames={{
                        base: "rounded-[16px]",
                        selectedIcon: "hidden",
                        wrapper: "w-full",
                    }}
                >
                    <div key={token.key} className="flex flex-row items-center gap-2 w-fit">
                        <Avatar src={token.icon} className="h-8 w-8 rounded-full" />
                        <p className="text-foreground-900 text-base font-normal w-fit">{token.name}</p>
                    </div>
                </SelectItem>
            )}
        </Select>
    );
}
const SwapInput = React.forwardRef<HTMLInputElement, SwapInputProps>((props, ref) => {
    const { label, token, onTokenSelect, amount, onAmountChange, ...rest } = props;

    return (
        <div className="w-full flex flex-row items-center gap-4 px-4 py-6 bg-foreground-100 rounded-[32px]">
            <TokenSelect token={token} onTokenSelect={onTokenSelect} />
            <Input
                ref={ref}
                type="number"
                onChange={(e) => onAmountChange(parseFloat(e.target.value))}
                className={clsx(
                    "bg-transparent active:bg-transparent text-4xl font-semibold text-primary w-fit border-none",
                )}
                classNames={{
                    input: "text-4xl font-semibold !text-primary w-full border-none",
                }}
                {...rest} />
        </div>
    );
});
const SwapDetail = ({ label, value }: { label: string, value: string }) => (
    <div className="flex flex-row justify-between items-center">
        <p className="text-foreground-500 text-sm">{label}</p>
        <p className="text-foreground-900 text-base font-semibold">{value}</p>
    </div>
);
export default function SwapForm() {
    const [fromToken, setFromToken] = React.useState<Token>(tokens[0]);
    const [toToken, setToToken] = React.useState<Token>(tokens[1]);
    const [fromAmount, setFromAmount] = React.useState<number>(0);
    const [toAmount, setToAmount] = React.useState<number>(0);
    const [minimumReceived, setMinimumReceived] = React.useState<number>(0);
    const [priceImpact, setPriceImpact] = React.useState<number>(0);

    const handleFromAmountChange = (amount: number) => {
        setFromAmount(amount);
        // Logic to calculate toAmount, minimumReceived, and priceImpact based on fromAmount
        // For example:
        const calculatedToAmount = amount * 0.95; // Example conversion rate
        setToAmount(calculatedToAmount);
        setMinimumReceived(calculatedToAmount * 0.98); // Example minimum received calculation
        setPriceImpact(2); // Example price impact
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-8"
        >
            <SwapInput
                label="From"
                token={fromToken}
                onTokenSelect={setFromToken}
                amount={fromAmount}
                onAmountChange={handleFromAmountChange}
            />
            <SwapInput
                label="To"
                token={toToken}
                onTokenSelect={setToToken}
                amount={toAmount}
                onAmountChange={setToAmount}
            />
            <div className="w-full flex flex-col gap-4">
                <SwapDetail label="Minimum Received" value={`${minimumReceived} ${toToken.symbol}`} />
                <SwapDetail label="Price Impact" value={`${priceImpact}%`} />
            </div>
            <Button
                fullWidth
                color="primary"
                radius="lg"
                type="submit"
            >
                Confirm
            </Button>
        </form>
    );
}