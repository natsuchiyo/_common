'use client';

import { SelectProps, Select, chakra } from "@chakra-ui/react";
import { ChangeEventHandler, useContext } from "react";
import { get, RegisterOptions, useFormState } from "react-hook-form";
import { FormContext } from "../Form";



type optionType<T extends any = any> = { value: T; label: string | number; };
export type GroupOptionList = { label: string, optionList: optionType<string>[]; }[];

type SelectInputPropsBase<T extends any = any> = SelectProps & {
    optionList: optionType<T>[];
    // groupOptionList?: { label: string, optionList: optionType<T>[]; };
};

type SelectGroupInputProps = SelectProps & {
    groupOptionList: GroupOptionList;
    onChangeValue: (value: string) => void;
};


export type SelectInputProps<T extends any = any> = SelectInputPropsBase<T> & {
    onChangeValue: (value: T) => void;
};


export const SelectInput = <T extends any = any>({ optionList, onChangeValue, ...props }: SelectInputProps<T>) => {

    const onChange: ChangeEventHandler<HTMLSelectElement> = (event) => {

        onChangeValue(optionList[event.target.selectedIndex].value);
    };

    return (
        <Select onChange={onChange} display='inline-block' width='24'{...props as any} >
            {optionList.map((option, i) => (
                <option key={i} value={option.value + ''}>{option.label}</option>
            ))}
        </Select>
    );
};

export const SelectGroupInput = ({ groupOptionList, onChangeValue, ...props }: SelectGroupInputProps) => {

    const onChange: ChangeEventHandler<HTMLSelectElement> = (event) => {

        onChangeValue(event.target.value);
    };

    return (
        <Select onChange={onChange} display='inline-block' width='24'{...props as any} >
            {groupOptionList.map(({ label, optionList }, i) => (
                <chakra.optgroup key={i} label={label} color='text-secondary'>
                    {optionList.map((option, j) => (
                        <chakra.option
                            key={j}
                            value={option.value}
                            color='chakra-body-text'
                            children={option.label}
                        />
                    ))}
                </chakra.optgroup>
            ))}
        </Select>
    );
};




export const FormSelect = <T extends any = any>({ name, options, optionList, ...props }: SelectProps & {
    name: string;
    optionList: { value: T; label: string | number; }[];
    options?: RegisterOptions;
}) => {

    const { register, control } = useContext(FormContext);
    const { errors } = useFormState({ name, control });
    const error = get(errors, name);


    return (
        <Select {...props as any} isInvalid={error} {...register(name, options)}>
            {optionList.map((option, i) => (
                <option key={i} value={option.value + ''}>{option.label}</option>
            ))}
        </Select>
    );
};


