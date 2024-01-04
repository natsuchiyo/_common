import { Input, InputGroup, InputLeftAddon, InputProps, InputRightAddon } from "@chakra-ui/react";
import { FormInputProps, FormInput } from "./Input";
import { ChangeEvent } from "react";



export function LabelInput({ label = '', unit = '', height = '2em', size, onChange, onChangeValue, ...props }: InputProps & {
    label?: string;
    unit?: string;
    height?: number | string;
    size?: string;
    onChangeValue?: (value: string) => void;
}) {


    if (onChangeValue) {
        onChange = (e: ChangeEvent<HTMLInputElement>) => {
            onChangeValue(e.target.value);
        };
    }


    return (
        <InputGroup display='inline-flex' size={size}>
            <InputLeftAddon children={label} height={height} padding={2} />
            <Input
                height={height}
                borderRadius={0}
                onChange={onChange}
                {...props as any}
            />
            <InputRightAddon children={unit} height={height} padding={2} />
        </InputGroup>
    );
};



export function FormLabelInput({ label = '', unit = '', height = '2em', size, ...props }: FormInputProps & {
    label?: string;
    unit?: string;
    height?: number | string;
    size?: string;
}) {


    return (
        <InputGroup display='inline-flex' size={size}>
            <InputLeftAddon children={label} height={height} padding={2} />
            <FormInput
                height={height}
                borderRadius={0}
                {...props as any}
            />
            <InputRightAddon children={unit} height={height} padding={2} />
        </InputGroup>
    );
};