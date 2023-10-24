'use client';

import { Slider, SliderTrack, SliderFilledTrack, SliderThumb, SliderProps } from "@chakra-ui/react";
import { useContext } from "react";
import { Controller } from "react-hook-form";
import { FormContext } from "../Form";
import { brandColor } from "../../../../_config/themeColors";
import { getBrandColor } from "../../../functions/theme";



export const SliderInput = (props: SliderProps) => {

    return (
        <Slider size='lg' marginX='2' {...props as any}>
            <SliderTrack>
                <SliderFilledTrack bg={getBrandColor(500)} />
            </SliderTrack>
            <SliderThumb bg={getBrandColor(500)} />
        </Slider>
    );
};




export const FormSliderInput = ({ name, ...props }: SliderProps & {
    name: string;
}) => {


    const { control } = useContext(FormContext);


    return (
        <Controller
            control={control}
            name={name}
            render={({ field }) => (
                <SliderInput  {...props} {...field} />
            )}
        />
    );
};