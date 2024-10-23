import React from "react";
import { Heading, Box, Card, CardBody, Text, Badge } from "@chakra-ui/react";
import { ListItem, OrderedList, UnorderedList } from "@chakra-ui/react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Link,
} from "@chakra-ui/react";

const PageHTMLCSSInterviewQuestions = () => {
  return (
    <>
      <Box className="row">
        <Heading as="h1">Core Concepts</Heading>
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
                  <OrderedList marginLeft="0" paddingLeft="1.3rem">
                    <ListItem>
                      <Badge colorScheme="purple">semantic HTML</Badge> ... (
                      <Badge bgColor="blue.100">Avoid using &lt;div&gt;</Badge>{" "}
                      or
                      <Badge bgColor="blue.100">&lt;span&gt;</Badge> elements
                      for important content, as these are non-semantic and don’t
                      convey meaning to assistive technologies.{" "}
                      <Badge bgColor="blue.100">
                        Instead, use &lt;header&gt;
                      </Badge>
                      ,<Badge bgColor="blue.100">&lt;nav&gt;</Badge>,{" "}
                      <Badge bgColor="blue.100">&lt;label&gt;</Badge>,
                      <Badge bgColor="blue.100">&lt;textarea&gt;</Badge>, etc…
                      to give structure and meaning to the content)
                    </ListItem>
                    <ListItem>
                      <Badge colorScheme="purple">ARIA attributes</Badge> ...{" "}
                      (Accessible Rich Internet Applications)
                      <Badge bgColor="blue.100">
                        (e.g., aria-label, aria-hidden, role)
                      </Badge>
                    </ListItem>
                    <ListItem>
                      <Badge colorScheme="purple">Keyboard Navigation</Badge>
                    </ListItem>
                    <ListItem>
                      <Badge colorScheme="purple">
                        sufficient color contrast
                      </Badge>{" "}
                      ​​betweeen text and background
                    </ListItem>
                    <ListItem>
                      <Badge colorScheme="purple">
                        Responsive and flexible layouts
                      </Badge>
                    </ListItem>
                  </OrderedList>

                  <footer>
                    <Link
                      href="https://chatgpt.com/share/6718f079-9674-8001-a48b-2f6ced5eb123"
                      isExternal
                    >
                      Accessibility best practices
                    </Link>
                    &nbsp; | &nbsp;
                    <Link
                      href="https://chatgpt.com/share/6718f286-7a24-8001-a9a5-27b418df3bcc"
                      isExternal
                    >
                      Enabling keyboard navigation
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
                      What are some common CSS layout techniques, and when would
                      you use each?
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <OrderedList marginLeft="0" paddingLeft="1.3rem">
                    <ListItem>
                      <b>Grid layouts:</b> A two-dimensional layout system that
                      allows you to create complex, grid-based designs. It’s
                      used when both rows and columns need to be defined (e.g.,
                      dashboards, galleries, complex page)
                    </ListItem>
                    <ListItem>
                      <b>Flexbox layouts:</b> A one-dimensional layout model
                      that allows you to align and distribute space between
                      items in a container, either in a row or column. Used for
                      one-dimensional layouts, either in a row or a column
                      (e.g., navigation bars, content sections, or forms), to
                      align items vertically or horizontally, distribute space
                      evenly, or for simple responsive layoutslayouts), or
                      easily center or align items within grid cells.
                    </ListItem>
                    <ListItem>
                      <b>Float layouts:</b> An older method of creating layouts
                      by floating elements left or right within a container,
                      causing content to wrap around them. Historically used for
                      creating multi-column layouts, but largely replaced by
                      Flexbox and Grid.
                    </ListItem>
                    <ListItem>
                      <b>Multi-Column Layout:</b> The columns property allows
                      content to be divided into multiple columns, similar to
                      how text flows in a newspaper. Used for text-heavy content
                      that needs to be presented in a columnar format (e.g.,
                      articles, news content).
                    </ListItem>
                    <ListItem>
                      <b>Positioning:</b> Absolute, Relative, Fixed, Sticky
                    </ListItem>
                  </OrderedList>
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

                  <footer>
                    <Link
                      href="https://jsfiddle.net/enjanga/wqvpbd9k/54/"
                      isExternal
                    >
                      See code examples
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
                    explain the difference between the :hover and :focus
                    pseudo-classes, and give an example of when each might be
                    used
                  </Heading>
                  <Text marginBottom="1rem">...</Text>

                  <Heading as="h4" size="sm" marginBottom="0">
                    How does the :nth-child() pseudo-class work, and how would
                    you use it to style every 3rd element in a list?
                  </Heading>
                  <Text marginBottom="1rem">...</Text>
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
                  <UnorderedList marginLeft="0" paddingLeft="1.3rem">
                    <ListItem>Mobile-First Approach</ListItem>
                    <ListItem>Responsive Frameworks</ListItem>
                    <ListItem>Media Queries</ListItem>
                    <ListItem>Viewport Meta Tag</ListItem>
                    <ListItem>Fluid Grid Layouts</ListItem>
                  </UnorderedList>

                  <footer>
                    <Link
                      href="https://chatgpt.com/share/6719010c-b180-8001-bd6b-96374027173a"
                      isExternal
                    >
                      Key aspects of responsive designs
                    </Link>
                  </footer>
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </CardBody>
        </Card>
      </Box>
    </>
  );
};

export default PageHTMLCSSInterviewQuestions;
