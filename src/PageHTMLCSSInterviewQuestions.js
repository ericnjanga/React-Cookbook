import React from "react";
import { Heading, Box, Card, CardBody, Text, Badge } from "@chakra-ui/react";
import { List, ListItem, OrderedList, UnorderedList } from "@chakra-ui/react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";

const PageHTMLCSSInterviewQuestions = () => {
  return (
    <>
      <Box className="row">
        <Heading as="h1">HTML/CSS Interview Questions</Heading>
      </Box>

      <Box className="row" marginBottom="10">
        <Card shadow='md' borderWidth='1px' borderColor='gray.300'>
          <CardBody>
            <Accordion defaultIndex={[0]} allowToggle>
              <AccordionItem>
                <h2>
                  <AccordionButton _expanded={{ bg: 'blue.200', color: 'gray.900' }}>
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
                  <OrderedList marginLeft="0" paddingLeft="1.3rem">
                    <ListItem>
                      By writing{" "}
                      <Badge colorScheme="purple">semantic HTML</Badge> (
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
                      By using{" "}
                      <Badge colorScheme="purple">ARIA attributes</Badge>{" "}
                      (Accessible Rich Internet Applications)
                      <Badge bgColor="blue.100">
                        (e.g., aria-label, aria-hidden, role)
                      </Badge>
                      ,{" "}
                    </ListItem>
                    <ListItem>
                      By enabling{" "}
                      <Badge colorScheme="purple">Keyboard Navigation</Badge>,{" "}
                    </ListItem>
                    <ListItem>
                      By ensuring
                      <Badge colorScheme="purple">
                        sufficient color contrast
                      </Badge>{" "}
                      ​​betweeen text and background
                    </ListItem>
                    <ListItem>
                      By ensuring{" "}
                      <Badge colorScheme="purple">
                        layouts are responsive and flexible
                      </Badge>
                    </ListItem>
                    <ListItem>and much more …</ListItem>
                  </OrderedList>
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem>
                <h2>
                  <AccordionButton _expanded={{ bg: 'blue.200', color: 'gray.900' }}>
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
                  <AccordionButton _expanded={{ bg: 'blue.200', color: 'gray.900' }}>
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
                  <Text marginBottom="1rem">
                    The CSS box model controls how element dimensions are
                    calculated and defines the layout of elements on a webpage.
                    It consists of four areas: content (text/images), padding
                    (space inside the border), border (surrounds the padding),
                    and margin (space outside the border). Each layer affects
                    the element's total width and height, determining how it
                    interacts with neighboring elements.
                  </Text>
                  <Text marginBottom="0">
                    There are two types of CSS box models:
                  </Text>
                  <OrderedList marginLeft="0" paddingLeft="1.3rem">
                    <ListItem>
                      <b>Content-box (default):</b> Width and height apply only
                      to the content area. Padding, border, and margin are added
                      outside the content size.
                    </ListItem>
                    <ListItem>
                      <b>Border-box:</b> Width and height include the content,
                      padding, and border. Margin is added outside this total
                      size.
                    </ListItem>
                  </OrderedList>
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem>
                <h2>
                  <AccordionButton _expanded={{ bg: 'blue.200', color: 'gray.900' }}>
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
                  <Heading as="h4" size="sm" marginBottom="0">
                    Introduction
                  </Heading>
                  <Text marginBottom="1rem">
                    A CSS pseudo-class is a keyword added to selectors that
                    targets elements in a specific state, such as :hover,
                    :focus, or :nth-child(), without modifying the document
                    structure.
                  </Text>

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
                  <AccordionButton _expanded={{ bg: 'blue.200', color: 'gray.900' }}>
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
                  <Text marginBottom="1rem">
                    Responsive design is implemented by combining various
                    techniques:
                  </Text>
                  <UnorderedList marginLeft="0" paddingLeft="1.3rem">
                    <ListItem>
                      <Badge colorScheme="purple">Fluid Grid Layouts</Badge>:
                      Using percentage-based widths make elements scale relative
                      to the screen size.
                    </ListItem>
                    <ListItem>
                      <Badge colorScheme="purple">
                        Flexible Images and Media
                      </Badge>
                      : To ensure images resize within their containers.
                    </ListItem>
                    <ListItem>
                      <Badge colorScheme="purple">Media Queries</Badge>: To
                      allow different CSS rules to be applied based on the
                      device’s screen size (or other features like orientation
                      or resolution).
                    </ListItem>
                    <ListItem>
                      <Badge colorScheme="purple">Viewport Meta Tag</Badge>: To
                      ensure proper scaling on mobile devices by including the
                      viewport meta tag in the HTML.
                    </ListItem>
                    <ListItem>
                      <Badge colorScheme="purple">Responsive Typography</Badge>:
                      To adjust font sizes and line heights using relative units
                      like em, rem, or percentages rather than fixed pixels.
                    </ListItem>
                    <ListItem>
                      <Badge colorScheme="purple">CSS Flexbox or Grid</Badge>:
                      To ensure more control over responsive design by allowing
                      flexible, adaptive layouts. (The <b>Flexbox</b> is a one-dimensional
                      layout system for aligning items in rows or columns, while
                      the <b>Grid</b> is a two-dimensional system for creating complex
                      layouts with both rows and columns.)
                    </ListItem>
                    <ListItem>
                      <Badge colorScheme="purple">Mobile-First Approach</Badge>:
                      To ensure the best performance and usability on mobile
                      devices by design for mobile screens first, then use media
                      queries to enhance for larger devices.
                    </ListItem>
                    <ListItem>
                      <Badge colorScheme="purple">Responsive Frameworks</Badge>:
                      Frameworks like Chakra UI, Bootstrap, and Tailwind CSS
                      provide built-in grid systems, components, and utilities
                      to quickly build responsive layouts.
                    </ListItem>
                  </UnorderedList>
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
