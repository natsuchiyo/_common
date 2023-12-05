import { Box, Divider, Flex, Heading, LinkBox } from "@chakra-ui/react";
import ExportedImage from "next-image-export-optimizer";
import { LinkingOverlay } from "../parts/Linking";
import { Tags } from "../parts/Tags";
import { Small } from "../parts/Text";
import { baseUrl } from "../../../_config/constants";
import { getPageInfo } from "../../functions/urls/usePageInfo";
import { BlogDateTimes } from "./BlogDateTime";
import { BlogMetaType } from "../../types";



export const BlogCard = (props: BlogMetaType) => {


    return (
        <LinkBox
            // display='inline-block'
            width='full'
            height='full'
            borderRadius='md'
            overflow='hidden'
            bg='article'
            maxWidth='380px'
            borderWidth='1px'
            borderColor='paper'
            padding={4}
            boxShadow='md'
            display='flex'
            flexDirection='column'
            _hover={{
                transform: 'translateY(-3px)',
                boxShadow: 'md'
            }}
        >
            <Flex flexGrow={1} flexDirection='column' alignItems='stretch'>
                <Heading as='h4' size='sm' flexGrow={1}>
                    <LinkingOverlay href={`/blog/${props.slug}`}>{props.title}</LinkingOverlay>
                </Heading>

                <BlogDateTimes
                    datemodified={props.datemodified}
                    datepublished={props.datepublished}
                    marginTop={4}
                />
            </Flex>

            <Divider borderColor='mainLight' borderBottomWidth={2} marginX='auto' marginY={4} />

            <Tags tagNames={props.tagNames} />

        </LinkBox>
    );
};