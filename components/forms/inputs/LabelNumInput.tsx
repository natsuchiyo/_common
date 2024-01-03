import { InputGroup, InputLeftAddon, InputRightAddon } from "@chakra-ui/react";
import { NumInputProps, NumInput } from "./Input";



export function LabelNumInput({ label, unit, height, size, ...props }: NumInputProps & {
    label?: string;
    unit?: string;
    height?: number | string;
    size?: string;
}) {


    return (
        <InputGroup display='inline-flex' size={size}>
            {label && <InputLeftAddon children={label} height={height} padding={2} />}
            <NumInput
                height={height}
                borderRadius={0}
                {...props as any}
            />
            {unit && <InputRightAddon children={unit} height={height} padding={2} />}
        </InputGroup>
    );
};
