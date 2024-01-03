import { InputGroup, InputLeftAddon, InputRightAddon } from "@chakra-ui/react";
import { SelectInputProps, SelectInput } from "./Select";



export function LabelSelect({ label, unit, height, size, ...props }: SelectInputProps & {
    label?: string;
    unit?: string;
    height?: number | string;
    size?: string;
}) {


    return (
        <InputGroup display='inline-flex' size={size}>
            {label && <InputLeftAddon children={label} height={height} padding={2} />}
            <SelectInput
                height={height}
                borderRadius={0}
                {...props as any}
            />
            {unit && <InputRightAddon children={unit} height={height} padding={2} />}
        </InputGroup>
    );
};