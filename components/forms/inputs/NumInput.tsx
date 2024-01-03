'use client';

import { Input, InputProps } from "@chakra-ui/react";
import { ChangeEvent, useContext } from "react";
import { Controller, get, RegisterOptions, useFormState } from "react-hook-form";
import { FormContext } from "../Form";
import { FormErrorTooltip } from "../parts/FormErrorTooltip";
import { round } from "../../../functions/maths/math";


export type NumInputValueType = number | '';


export type NumInputProps = InputProps & {
    value: NumInputValueType;
    onChangeValue: (value: NumInputValueType) => void;
    percentage?: boolean;
    decimalLength?: number;
    min?: number;
    max?: number;
};

export type FormNumInputProps = Omit<NumInputProps, 'value' | 'onChangeValue'> & {
    name: string;
};


export const NumInput = ({ onChangeValue, percentage, decimalLength, ...props }: NumInputProps) => {


    let value = props.value as any;


    // 空文字などの場合、props.valueがNaNになる加工はしない
    if (Number.isFinite(value)) {

        if (percentage) value *= 100;

        // toFixedで丸めると入力しずらくなる
        if (decimalLength !== undefined) {
            value = round(value, decimalLength);
        }
    }


    const onChange = (e: ChangeEvent<HTMLInputElement>) => {

        let value: NumInputValueType = parseFloat(e.target.value);

        if (Number.isFinite(value)) {

            if (props.min !== undefined && value < props.min) value = props.min;
            else if (props.max !== undefined && value > props.max) value = props.max;
            if (percentage) value /= 100;

        } else {
            value = '';
        }

        onChangeValue(value);
    };


    return (
        <Input
            type="number"
            display='inline-block'
            width='24'
            onChange={onChange}
            {...props as any}
            value={value}
        />
    );
};


export const FormNumInput = ({ name, ...props }: FormNumInputProps & {
    name: string;
}) => {


    const { control } = useContext(FormContext);

    return (
        <Controller
            control={control}
            name={name}
            render={({ field: { onChange, ...field }, fieldState, formState }) => {
                console.log('↓-----------------------------field, fieldState,formState--------------------------------------------');
                console.log(field, fieldState, formState);

                return (
                    <NumInput  {...props} {...field} onChangeValue={onChange} />
                );
            }
            }
        />
    );
};