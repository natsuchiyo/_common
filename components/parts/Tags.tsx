'use client';

import { HStack, Badge, StackProps } from "@chakra-ui/react";
import { TagType, TagsType } from "../../types";
import { TagNameType, tagsMap } from "../../../_config/tags";



export const Tags = ({ tagNames, ...props }: StackProps & { tagNames?: TagNameType[]; }) => {

    if (!tagNames) return null;

    return (
        <HStack spacing='2'
            // marginY='2' 
            {...props as any}>
            {tagNames.map(tagName => (
                <Badge
                    key={tagName}
                    variant='solid'
                    fontSize='sm'
                    fontWeight='normal'
                    colorScheme={tagsMap[tagName].color}
                    children={tagsMap[tagName].label}
                />
            ))}
        </HStack>
    );
};
