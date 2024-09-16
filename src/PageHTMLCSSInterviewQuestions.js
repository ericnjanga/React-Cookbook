import React from "react";
import {
  Heading,
  Box,
  Card,
  CardBody,
  Text, Badge
} from "@chakra-ui/react";

const PageHTMLCSSInterviewQuestions = () => {
  return (
    <>
      <Box className="row">
        <Heading as="h1">HTML/CSS Interview Questions</Heading>
      </Box>

      <Box className="row" marginBottom="10">
        <Card shadow="md">
          <CardBody>
            <Heading size="md">How do you ensure your HTML/CSS is accessible and follows best practices?</Heading>
            <Text>
            By writing <Badge colorScheme='purple'>semantic HTML</Badge> (<Badge bgColor="blue.100">Avoid using &lt;div&gt;</Badge> or 
              <Badge bgColor="blue.100">&lt;span&gt;</Badge> elements for important content, as these are non-semantic and don’t 
              convey meaning to assistive technologies. <Badge bgColor="blue.100">Instead, use &lt;header&gt;</Badge>, 
              <Badge bgColor="blue.100">&lt;nav&gt;</Badge>, <Badge bgColor="blue.100">&lt;label&gt;</Badge>, 
              <Badge bgColor="blue.100">&lt;textarea&gt;</Badge>, etc… to give structure and meaning to the content), 
              <Badge colorScheme='purple'>by using ARIA attributes</Badge> (Accessible Rich Internet Applications) 
              <Badge bgColor="blue.100">(e.g., aria-label, aria-hidden, role)</Badge>, 
              <Badge colorScheme='purple'>by enabling Keyboard Navigation</Badge>, by ensuring 
              <Badge colorScheme='purple'>sufficient color contrast</Badge> ​​(betweeen text and background), 
              by ensuring <Badge colorScheme='purple'>layouts are responsive and flexible</Badge>, and much more …
            </Text>
          </CardBody>
        </Card>
      </Box>
 
 
    </>
  );
};

export default PageHTMLCSSInterviewQuestions;
