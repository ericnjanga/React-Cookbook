import React, { useContext } from "react";
import { Heading, Box, Card, CardBody, Text, Badge } from "@chakra-ui/react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Link,
} from "@chakra-ui/react";
import { ModalContext } from "../../components/ModalModule";
import { IconBxlJsfiddle, IconChatGPT } from "../../components/Icons/IconReact";
import ContentFetcher from "../../components/ContentFetcher/ContentFetcher";

/**
 * https://github.com/springload/react-accessible-accordion/tree/main?tab=readme-ov-file
 * https://react-accessible-accordion.springload.co.nz/
 */
import {
  Accordion as SpecAccordion,
  AccordionItem as SpecAccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
  AccordionItemState,
} from "react-accessible-accordion";

const PageHTMLCSSCoreConcepts = () => {
  const { openModal } = useContext(ModalContext);

  return (
    <>
      <Box className="row">
        <Heading as="h1">Core Concepts</Heading>
      </Box>

      <Box className="row" marginBottom="10">
        <Card shadow="md" borderWidth="1px" borderColor="gray.300">
          <CardBody>
            <SpecAccordion onChange={() => console.log("Changed")}>
              <SpecAccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>Test 1: Content conditionally rendered</AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <AccordionItemState>
                    {({ expanded }) => (expanded && <ContentFetcher id={4} />)}
                  </AccordionItemState>
                  
                </AccordionItemPanel>
              </SpecAccordionItem>
              <SpecAccordionItem>
                <AccordionItemHeading>
                <AccordionItemButton>Test 2: Content conditionally rendered</AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <AccordionItemState>
                  {({ expanded }) => (expanded && <ContentFetcher id={12} />)}
                  </AccordionItemState>
                </AccordionItemPanel>
              </SpecAccordionItem>
            </SpecAccordion>
          </CardBody>
        </Card>
      </Box>

      <Box className="row" marginBottom="10">
        <Card shadow="md" borderWidth="1px" borderColor="gray.300">
          <CardBody>
            <Accordion defaultIndex={[0]} allowToggle>
              <AccordionItem>
                <h2>
                  <AccordionButton
                    _expanded={{ bg: "blue.200", color: "gray.900" }}
                  >
                    <Box
                      as="span"
                      flex="1"
                      textAlign="left"
                      fontWeight="bold"
                      fontSize="20"
                    >
                      How do you ensure your HTML/CSS is accessible and follows
                      best practices?
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <Text>By writing, using, enabling, and ensuring:</Text>
                  <ul className="list-aligh-left">
                    <li>
                      <button className="btn-link" onClick={() => openModal(7)}>
                        Semantic HTML
                      </button>
                    </li>
                    <li>
                      <button className="btn-link" onClick={() => openModal(8)}>
                        ARIA attributes
                      </button>
                    </li>
                    <li>
                      <button className="btn-link" onClick={() => openModal(9)}>
                        Keyboard Navigation
                      </button>
                    </li>
                    <li>
                      sufficient color contrast ​​betweeen text and background
                    </li>
                    <li>Responsive and flexible layouts</li>
                  </ul>

                  <footer className="accordion-footer">
                    <Link
                      className="btn btn-small btn-secondary btn-icon"
                      href="https://chatgpt.com/share/6718f079-9674-8001-a48b-2f6ced5eb123"
                      isExternal
                    >
                      Accessibility best practices
                      <IconChatGPT width={"1.3rem"} height={"1.3rem"} />
                    </Link>
                    <Link
                      className="btn btn-small btn-secondary btn-icon"
                      href="https://chatgpt.com/share/6718f286-7a24-8001-a9a5-27b418df3bcc"
                      isExternal
                    >
                      Enabling keyboard navigation
                      <IconChatGPT width={"1.3rem"} height={"1.3rem"} />
                    </Link>
                  </footer>
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem>
                <h2>
                  <AccordionButton
                    _expanded={{ bg: "blue.200", color: "gray.900" }}
                  >
                    <Box
                      as="span"
                      flex="1"
                      textAlign="left"
                      fontWeight="bold"
                      fontSize="20"
                    >
                      Common CSS layout techniques
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <ul className="list-align-left">
                    <li>
                      <button className="btn-link" onClick={() => openModal(2)}>
                        Grid layout
                      </button>
                    </li>
                    <li>
                      <button className="btn-link" onClick={() => openModal(3)}>
                        Flexbox layout
                      </button>
                    </li>
                    <li>
                      <button className="btn-link" onClick={() => openModal(4)}>
                        Float layout
                      </button>
                    </li>
                    <li>
                      <button className="btn-link" onClick={() => openModal(5)}>
                        Multi-Column layout
                      </button>
                    </li>
                    <li>
                      <button className="btn-link" onClick={() => openModal(6)}>
                        Positioning layout
                      </button>
                    </li>
                  </ul>
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem>
                <h2>
                  <AccordionButton
                    _expanded={{ bg: "blue.200", color: "gray.900" }}
                  >
                    <Box
                      as="span"
                      flex="1"
                      textAlign="left"
                      fontWeight="bold"
                      fontSize="20"
                    >
                      Explain the CSS box model
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <Text marginBottom="0" fontWeight={"bold"}>
                    The CSS box model:
                  </Text>

                  <ul className="list-align-left">
                    <li>Controls the dimensions of elements</li>
                    <li>Defines the layout</li>
                    <li>Determes how it interacts with neighboring elements</li>
                  </ul>

                  <Text marginBottom="0">
                    It consists in "the content area", which itself is made out
                    of four areas (or layers):
                  </Text>

                  <ul className="list-align-left">
                    <li>
                      <b>Content:</b> text and images
                    </li>
                    <li>
                      <b>Padding:</b> space inside the border
                    </li>
                    <li>
                      <b>Border:</b> surrounds the padding
                    </li>
                    <li>
                      <b>Margin:</b> space outside the border
                    </li>
                  </ul>

                  <Heading as="h4" mb="3">
                    There are two types of CSS box models:
                  </Heading>

                  <ul className="list-align-left">
                    <li>
                      In the <b>Content-box</b> model: The content area is only
                      constructed based on the "width" and "height" properties.
                      Key layer properties like "padding", "margin", and
                      "border" are added on top, which causes{" "}
                      <Badge bgColor="blue.100">
                        the element size to increase
                      </Badge>
                      .
                    </li>
                    <li>
                      In the <b>Border-box</b> model: The content area is
                      constructed with all the key layer properties ("padding",
                      "margin", and "border") in addition to the "width",
                      "height". This causes{" "}
                      <Badge bgColor="blue.100">
                        the element's size to remain the same
                      </Badge>
                      .
                    </li>
                  </ul>

                  <footer className="accordion-footer">
                    <Link
                      className="btn btn-small btn-secondary btn-icon"
                      href="https://jsfiddle.net/enjanga/wqvpbd9k/54/"
                      isExternal
                    >
                      See code examples
                      <IconBxlJsfiddle width={"1.3rem"} height={"1.3rem"} />
                    </Link>
                  </footer>
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem>
                <h2>
                  <AccordionButton
                    _expanded={{ bg: "blue.200", color: "gray.900" }}
                  >
                    <Box
                      as="span"
                      flex="1"
                      textAlign="left"
                      fontWeight="bold"
                      fontSize="20"
                    >
                      Pseudo classes
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <Text marginBottom="0">A CSS pseudo-class:</Text>
                  <ul className="list-align-left">
                    <li>Is a keyword added to selectors</li>
                    <li>
                      It targets elements in a specific <b>state</b> or{" "}
                      <b>position</b>
                    </li>
                    <li>It doesn't modifying the document structure</li>
                    <li>
                      <b>Example:</b> :hover, :focus, or :nth-child()
                    </li>
                  </ul>

                  <Heading as="h4" size="sm" marginBottom="0">
                    Difference between the :hover and :focus pseudo-classes
                  </Heading>
                  <Text marginBottom="1rem">
                    The :hover and :focus pseudo-classes are both used in CSS to
                    style elements based on user interactions, but they trigger{" "}
                    <Link
                      className="btn-link"
                      href="https://chatgpt.com/share/671be018-60d0-8001-aa95-bb1c52844bc8"
                      isExternal
                    >
                      under different conditions ...
                    </Link>
                  </Text>

                  <Heading as="h4" size="sm" marginBottom="0">
                    How does the :nth-child() pseudo-class work?
                  </Heading>
                  <Text marginBottom="1rem">
                    The :nth-child() pseudo-class in CSS is used to select
                    elements based on their position within a parent element.
                    The position is{" "}
                    <Link
                      className="btn-link"
                      href="https://chatgpt.com/share/671be0ea-1460-8001-9abc-872c98fc7337"
                      isExternal
                    >
                      calculated using a formula ...
                    </Link>
                  </Text>
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem>
                <h2>
                  <AccordionButton
                    _expanded={{ bg: "blue.200", color: "gray.900" }}
                  >
                    <Box
                      as="span"
                      flex="1"
                      textAlign="left"
                      fontWeight="bold"
                      fontSize="20"
                    >
                      How do you implement responsive design?
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <Text marginBottom="0">
                    Responsive design is implemented by combining various
                    techniques:
                  </Text>
                  <ol className="list-align-left">
                    <li>Viewport Meta Tag</li>
                    <li>Responsive Frameworks</li>
                    <li>Mobile-First Approach</li>
                    <li>Media Queries</li>
                    <li>Fluid Grid Layouts</li>
                  </ol>

                  <footer className="accordion-footer">
                    <Link
                      className="btn btn-small btn-secondary btn-icon"
                      href="https://chatgpt.com/share/6719010c-b180-8001-bd6b-96374027173a"
                      isExternal
                    >
                      Key aspects of responsive designs
                      <IconChatGPT width={"1.3rem"} height={"1.3rem"} />
                    </Link>
                  </footer>
                </AccordionPanel>
              </AccordionItem>


              <AccordionItem>
                <h2>
                  <AccordionButton
                    _expanded={{ bg: "blue.200", color: "gray.900" }}
                  >
                    <Box
                      as="span"
                      flex="1"
                      textAlign="left"
                      fontWeight="bold"
                      fontSize="20"
                    >
                      *** More concepts
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <ul>
                    <li>
                      1. What is the difference between inline, block, and inline-block display values? --- 
                      Describe how each affects element layout, width/height, and line breaks.
                    </li>
                    <li>
                      2. How does the CSS box model work?
                      Explain the parts of the box model (content, padding, border, and margin) and how they affect an element’s size and positioning.
                    </li>
                    <li>
                      3. What are CSS Flexbox and Grid, and when would you use each?
Describe the main differences and use cases for Flexbox and Grid for building responsive layouts.

                    </li>
                    <li>
                      4. Explain the concept of specificity in CSS and how it affects styles.
                      Discuss how specificity is calculated and how it can impact which styles are applied when multiple rules target the same element.
                    </li>
                    <li>
                    5. What is the position property, and what are the differences between static, relative, absolute, fixed, and sticky positioning?
                    Describe each position type and how it affects element layout in relation to the document or parent elements.
                    </li>
                    
                    <li>
                      6. How does CSS inheritance work, and which properties are inherited by default?
                      Explain how inheritance works in CSS and mention examples of properties that are or aren’t inherited by default.
                    </li>
                    <li>
                      7. What are pseudo-classes and pseudo-elements, and how do they differ?
                      Provide examples, like :hover, :nth-child(), and ::before, and describe the difference in usage between pseudo-classes and pseudo-elements.
                    </li>
                    <li>
                      8. How does CSS specificity hierarchy work, and how can you override styles?
                      Discuss the hierarchy of IDs, classes, and element selectors, and how to use !important or specificity to override styles.
                    </li>
                    <li>
                      9. What are arrow functions, and how do they differ from
                      regular functions? Explain syntax differences, implicit
                      returns, and how arrow functions don’t bind their own
                      this.
                    </li>
                    <li>
                      10. How would you implement a responsive design in CSS?
                      Describe the use of media queries, relative units (like %, vw, vh), and other techniques for creating layouts that adapt to different screen sizes.
                    </li>
                  </ul>
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </CardBody>
        </Card>
      </Box>
    </>
  );
};

export default PageHTMLCSSCoreConcepts;
