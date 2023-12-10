
import { HStack, StackProps, Text, TextProps } from "@chakra-ui/react";
import { TimeIcon } from "../../../_components/chakra";




export function BlogDateTimes({ datemodified, datepublished, ...props }: StackProps & {
    datemodified: string;
    datepublished: string;
}) {

    return (
        <HStack
            spacing={2}
            justifyContent='flex-end'
            flexWrap="wrap"
            {...props as any}
        >
            {datemodified !== datepublished && <BlogDateTime date={datemodified} type="modified" />}
            <BlogDateTime date={datepublished} type="published" />
        </HStack>
    );
};



function BlogDateTime({ type, date, ...props }: TextProps & {
    date: string;
    type: 'published' | 'modified';
}) {


    const values = type === 'published' ? {
        label: '公開',
        icon: TimeIcon,
        itemProp: 'datepublished'
    } : {
        label: '更新',
        icon: TimeIcon,
        itemProp: 'datemodified'
    };

    return (
        <Text
            as={HStack}
            variant="body2"
            color="text-secondary"
            spacing={1}
            fontSize='sm'
            {...props as any}
        >
            <span>{values.label}</span>
            <values.icon fontSize="small" />
            <time dateTime={date} itemProp={values.itemProp} >{date}</time>
        </Text>
    );
};