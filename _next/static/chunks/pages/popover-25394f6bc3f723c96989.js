_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[49],{NPmY:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return b}));var o=n("97Jx"),r=n.n(o),a=n("m3Bd"),i=n.n(a),l=(n("ERkP"),n("ZVZ0")),p=(n("l1C2"),{});function b(e){var t=e.components,n=i()(e,["components"]);return Object(l.b)("wrapper",r()({},p,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h1",null,"Popover"),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"Popover")," is a non-modal dialog that floats around a trigger. ",Object(l.b)("inlineCode",{parentName:"p"},"Popover")," is used to display contextual information to users, and should be paired with a clickable trigger element."),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"Popover")," is built on top of the ",Object(l.b)("a",{parentName:"p",href:"https://popper.js.org/"},"Popper.js")," library, and is composed of the ",Object(l.b)("inlineCode",{parentName:"p"},"Popper")," component."),Object(l.b)("p",null,Object(l.b)("carbon-ad",null)),Object(l.b)("h2",null,"Import"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"Popover"),": The wrapper that provides props, state, and context to its children"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"PopoverTrigger"),": Used to wrap the reference (or trigger) element"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"PopoverContent"),": The popover itself"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"PopoverHeader"),": The header of the popover"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"PopoverBody"),": The body of the popover"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"PopoverFooter"),": The footer of the popover")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-js"},"import { Popover, PopoverTrigger, PopoverContent, PopoverHeader, PopoverBody, PopoverFooter } from '@trendmicro/react-styled-ui';\n// or\nimport Popover from '@trendmicro/react-styled-ui/Popover';\n")),Object(l.b)("h2",null,"Basic Usage"),Object(l.b)("p",null,"When using this component, ensure the children passed to ",Object(l.b)("inlineCode",{parentName:"p"},"PopoverTrigger")," is focusable. ",Object(l.b)("inlineCode",{parentName:"p"},"Popover")," should be accessible and should allow users to access it using the tab key on a keyboard."),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"A11y:")," When ",Object(l.b)("inlineCode",{parentName:"p"},"Popover")," opens, the focus status is sent to  ",Object(l.b)("inlineCode",{parentName:"p"},"PopoverContent"),". When ",Object(l.b)("inlineCode",{parentName:"p"},"Popover")," is closed, the focus status is returned to the trigger."),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-jsx"},"<Popover>\n  <PopoverTrigger>\n    <Button>Trigger</Button>\n  </PopoverTrigger>\n  <PopoverContent>\n    <PopoverHeader>Confirmation!</PopoverHeader>\n    <PopoverBody>Lorem ipsum dolor sit amet, consectetur adicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</PopoverBody>\n  </PopoverContent>\n</Popover>\n")),Object(l.b)("h2",null,"Focus an element when ",Object(l.b)("inlineCode",{parentName:"h2"},"Popover")," opens"),Object(l.b)("p",null,"By default, the focus status is to sent to ",Object(l.b)("inlineCode",{parentName:"p"},"PopoverContent")," when ",Object(l.b)("inlineCode",{parentName:"p"},"Popover")," opens. You can send the focus status to a specific element when it opens by passing the ",Object(l.b)("inlineCode",{parentName:"p"},"initialFocusRef")," prop."),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-jsx"},'function WalkthroughPopover() {\n  const initialFocusRef = React.useRef();\n  return (\n    <Popover\n      initialFocusRef={initialFocusRef}\n      placement="bottom"\n    >\n      <PopoverTrigger>\n        <Link>Trigger</Link>\n      </PopoverTrigger>\n      <PopoverContent>\n        <PopoverHeader>\n          Manage Your Channels\n        </PopoverHeader>\n        <PopoverBody>\n          Lorem ipsum dolor sit amet, consectetur adicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n          <Input mt="3x" ref={initialFocusRef} placeholder="Placeholder text" />\n        </PopoverBody>\n        <PopoverFooter\n          border="0"\n          display="flex"\n          alignItems="center"\n          justifyContent="space-between"\n        >\n          <Link fontSize="sm">Learn more</Link>\n          <Stack direction="row" spacing="2x">\n            <Button variant="primary">Setup Email</Button>\n            <Button variant="default">\n              Next\n            </Button>\n          </Stack>\n        </PopoverFooter>\n      </PopoverContent>\n    </Popover>\n  );\n}\n')),Object(l.b)("h2",null,"Accessing Internal state"),Object(l.b)("p",null,"Tonic Styled UI provides access to two internal states:  ",Object(l.b)("inlineCode",{parentName:"p"},"isOpen")," and ",Object(l.b)("inlineCode",{parentName:"p"},"onClose"),". Use the render prop pattern to access the internal states."),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-jsx"},'function InternalStateEx() {\n  const initRef = React.useRef();\n  return (\n    <Popover\n      initialFocusRef={initRef}\n      placement="right"\n    >\n    {({ isOpen, onClose }) => (\n      <>\n        <PopoverTrigger>\n          <Button>Click to {isOpen ? "close" : "open"}</Button>\n        </PopoverTrigger>\n        <PopoverContent>\n          <PopoverHeader>\n            Manage Your Channels\n          </PopoverHeader>\n          <PopoverBody>\n            Lorem ipsum dolor sit amet, consectetur adicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n            <Input mt="3x" placeholder="Placeholder text" />\n          </PopoverBody>\n          <PopoverFooter\n            border="0"\n            display="flex"\n            alignItems="center"\n            justifyContent="space-between"\n          >\n            <Link fontSize="sm">Learn more</Link>\n            <Stack direction="row" spacing="2x">\n              <Button variant="primary">Submit</Button>\n              <Button variant="default" onClick={onClose} ref={initRef}>\n                Cancel\n              </Button>\n            </Stack>\n          </PopoverFooter>\n        </PopoverContent>\n      </>\n    )}\n    </Popover>\n  );\n}\n')),Object(l.b)("h2",null,"Controlled Usage"),Object(l.b)("p",null,"You can control the opening and closing of ",Object(l.b)("inlineCode",{parentName:"p"},"Popover")," by passing the ",Object(l.b)("inlineCode",{parentName:"p"},"isOpen")," or ",Object(l.b)("inlineCode",{parentName:"p"},"onClose")," state."),Object(l.b)("p",null,"If required, you can set ",Object(l.b)("inlineCode",{parentName:"p"},"returnFocusOnClose")," to ",Object(l.b)("inlineCode",{parentName:"p"},"false")," to prevent Popver from returning the focus status to the children of ",Object(l.b)("inlineCode",{parentName:"p"},"PopoverTrigger"),"."),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-jsx"},'function ControlledUsage() {\n  const [isOpen, setIsOpen] = React.useState(false);\n  const open = () => setIsOpen(!isOpen);\n  const close = () => setIsOpen(false);\n  return (\n    <>\n      <Button mr={5} onClick={open}>\n        Trigger\n      </Button>\n      <Popover\n        returnFocusOnClose={false}\n        isOpen={isOpen}\n        onClose={close}\n        placement="right"\n        closeOnBlur={false}\n      >\n        <PopoverTrigger>\n          <Button variant="primary">Popover Target</Button>\n        </PopoverTrigger>\n        <PopoverContent>\n          <PopoverHeader>\n            At least 8 characters consisting of:\n          </PopoverHeader>\n          <PopoverBody>\n            <ul>\n              <li>Alphanumeric characters (A-Z, a-z, 0-9) with both upper and lower case letters and number characters.</li>\n              <li>At least one special character</li>\n            </ul>\n          </PopoverBody>\n        </PopoverContent>\n      </Popover>\n    </>\n  );\n}\n')),Object(l.b)("h2",null,"Customizing Popover"),Object(l.b)("h3",null,"Hide arrow"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-jsx"},"<Popover hideArrow>\n  <PopoverTrigger>\n    <Button>Trigger</Button>\n  </PopoverTrigger>\n  <PopoverContent>\n    <PopoverHeader>Confirmation!</PopoverHeader>\n    <PopoverBody>Lorem ipsum dolor sit amet, consectetur adicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</PopoverBody>\n  </PopoverContent>\n</Popover>\n")),Object(l.b)("h3",null,"Offset position"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-jsx"},"<Popover skidding={50} distance={0}>\n  <PopoverTrigger>\n    <Button>Trigger</Button>\n  </PopoverTrigger>\n  <PopoverContent>\n    <PopoverHeader>Confirmation!</PopoverHeader>\n    <PopoverBody>Lorem ipsum dolor sit amet, consectetur adicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</PopoverBody>\n  </PopoverContent>\n</Popover>\n")),Object(l.b)("h2",null,"Hover Trigger"),Object(l.b)("p",null,"To show ",Object(l.b)("inlineCode",{parentName:"p"},"Popover")," when you mouse over or focus on the trigger, pass the prop ",Object(l.b)("inlineCode",{parentName:"p"},"trigger")," and set it to ",Object(l.b)("inlineCode",{parentName:"p"},"hover"),". When you focus on or mouse over the popover trigger, ",Object(l.b)("inlineCode",{parentName:"p"},"Popover")," will open."),Object(l.b)("p",null,"If you quickly move your cursor to the popover content when it is open, ",Object(l.b)("inlineCode",{parentName:"p"},"Popover")," will remain open until you move away the cursor."),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-jsx"},'<Popover hideArrow trigger="hover">\n  <PopoverTrigger>\n    <Icon icon="info" color="white:secondary" _hover={{ color: \'white:emphasis\' }}/>\n  </PopoverTrigger>\n  <PopoverContent>\n    <PopoverHeader>Confirmation!</PopoverHeader>\n    <PopoverBody>Lorem ipsum dolor sit amet, consectetur adicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</PopoverBody>\n  </PopoverContent>\n</Popover>\n')),Object(l.b)("h3",null,"Mouse tracking"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-jsx"},'<Stack shouldWrapChildren direction="row" spacing="2x">\n  <Popover trigger="hover" nextToCursor>\n    <PopoverTrigger>\n      <Button>Next to cursor</Button>\n    </PopoverTrigger>\n    <PopoverContent>\n      <PopoverBody>Lorem ipsum dolor sit amet</PopoverBody>\n    </PopoverContent>\n  </Popover>\n  <Popover trigger="hover" followCursor>\n    <PopoverTrigger>\n      <Button>Follow cursor</Button>\n    </PopoverTrigger>\n    <PopoverContent>\n      <PopoverBody>Lorem ipsum dolor sit amet</PopoverBody>\n    </PopoverContent>\n  </Popover>\n</Stack>\n')),Object(l.b)("h2",null,"Popover Placement"),Object(l.b)("p",null,"Since ",Object(l.b)("inlineCode",{parentName:"p"},"Popover")," is controlled by PopperJS, you can change the placement of ",Object(l.b)("inlineCode",{parentName:"p"},"Popover")," by passing the ",Object(l.b)("inlineCode",{parentName:"p"},"placement")," prop."),Object(l.b)("p",null,"Although you may have specified the placement, ",Object(l.b)("inlineCode",{parentName:"p"},"Popover")," will try to reposition itself if there is not enough available space at the specified placement."),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-jsx"},'<Stack direction="column" spacing="2rem">\n  <Stack shouldWrapChildren direction="row" spacing="2rem">\n    <Popover placement="top">\n      <PopoverTrigger>\n        <Button minWidth="32x">Top</Button>\n      </PopoverTrigger>\n      <PopoverContent>\n        <PopoverHeader>Confirmation!</PopoverHeader>\n        <PopoverBody>Lorem ipsum dolor sit amet, consectetur adicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</PopoverBody>\n      </PopoverContent>\n    </Popover>\n    <Popover placement="top-start">\n      <PopoverTrigger>\n        <Button minWidth="32x">Top-Start</Button>\n      </PopoverTrigger>\n      <PopoverContent>\n        <PopoverHeader>Confirmation!</PopoverHeader>\n        <PopoverBody>Lorem ipsum dolor sit amet, consectetur adicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</PopoverBody>\n      </PopoverContent>\n    </Popover>\n    <Popover placement="top-end">\n      <PopoverTrigger>\n        <Button minWidth="32x">Top-End</Button>\n      </PopoverTrigger>\n      <PopoverContent>\n        <PopoverHeader>Confirmation!</PopoverHeader>\n        <PopoverBody>Lorem ipsum dolor sit amet, consectetur adicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</PopoverBody>\n      </PopoverContent>\n    </Popover>\n  </Stack>\n  <Stack shouldWrapChildren direction="row" spacing="2rem">\n    <Popover placement="right">\n      <PopoverTrigger>\n        <Button minWidth="32x">Right</Button>\n      </PopoverTrigger>\n      <PopoverContent>\n        <PopoverHeader>Confirmation!</PopoverHeader>\n        <PopoverBody>Lorem ipsum dolor sit amet, consectetur adicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</PopoverBody>\n      </PopoverContent>\n    </Popover>\n    <Popover placement="right-start">\n      <PopoverTrigger>\n        <Button minWidth="32x">Right-Start</Button>\n      </PopoverTrigger>\n      <PopoverContent>\n        <PopoverHeader>Confirmation!</PopoverHeader>\n        <PopoverBody>Lorem ipsum dolor sit amet, consectetur adicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</PopoverBody>\n      </PopoverContent>\n    </Popover>\n    <Popover placement="right-end">\n      <PopoverTrigger>\n        <Button minWidth="32x">Right-End</Button>\n      </PopoverTrigger>\n      <PopoverContent>\n        <PopoverHeader>Confirmation!</PopoverHeader>\n        <PopoverBody>Lorem ipsum dolor sit amet, consectetur adicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</PopoverBody>\n      </PopoverContent>\n    </Popover>\n  </Stack>\n  <Stack shouldWrapChildren direction="row" spacing="2rem">\n    <Popover placement="bottom">\n      <PopoverTrigger>\n        <Button minWidth="32x">Bottom</Button>\n      </PopoverTrigger>\n      <PopoverContent>\n        <PopoverHeader>Confirmation!</PopoverHeader>\n        <PopoverBody>Lorem ipsum dolor sit amet, consectetur adicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</PopoverBody>\n      </PopoverContent>\n    </Popover>\n    <Popover placement="bottom-start">\n      <PopoverTrigger>\n        <Button minWidth="32x">Bottom-Start</Button>\n      </PopoverTrigger>\n      <PopoverContent>\n        <PopoverHeader>Confirmation!</PopoverHeader>\n        <PopoverBody>Lorem ipsum dolor sit amet, consectetur adicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</PopoverBody>\n      </PopoverContent>\n    </Popover>\n    <Popover placement="bottom-end">\n      <PopoverTrigger>\n        <Button minWidth="32x">Bottom-End</Button>\n      </PopoverTrigger>\n      <PopoverContent>\n        <PopoverHeader>Confirmation!</PopoverHeader>\n        <PopoverBody>Lorem ipsum dolor sit amet, consectetur adicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</PopoverBody>\n      </PopoverContent>\n    </Popover>\n  </Stack>\n  <Stack shouldWrapChildren direction="row" spacing="2rem">\n    <Popover placement="left">\n      <PopoverTrigger>\n        <Button minWidth="32x">Left</Button>\n      </PopoverTrigger>\n      <PopoverContent>\n        <PopoverHeader>Confirmation!</PopoverHeader>\n        <PopoverBody>Lorem ipsum dolor sit amet, consectetur adicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</PopoverBody>\n      </PopoverContent>\n    </Popover>\n    <Popover placement="left-start">\n      <PopoverTrigger>\n        <Button minWidth="32x">Left-Start</Button>\n      </PopoverTrigger>\n      <PopoverContent>\n        <PopoverHeader>Confirmation!</PopoverHeader>\n        <PopoverBody>Lorem ipsum dolor sit amet, consectetur adicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</PopoverBody>\n      </PopoverContent>\n    </Popover>\n    <Popover placement="left-end">\n      <PopoverTrigger>\n        <Button minWidth="32x">Left-End</Button>\n      </PopoverTrigger>\n      <PopoverContent>\n        <PopoverHeader>Confirmation!</PopoverHeader>\n        <PopoverBody>Lorem ipsum dolor sit amet, consectetur adicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</PopoverBody>\n      </PopoverContent>\n    </Popover>\n  </Stack>\n</Stack>\n')),Object(l.b)("h2",null,"Accessibility"),Object(l.b)("p",null,"The word ",Object(l.b)("em",{parentName:"p"},'"trigger"')," refers to the children of PopoverTrigger."),Object(l.b)("h3",null,"Keyboard and focus"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"When ",Object(l.b)("inlineCode",{parentName:"li"},"Popover")," is opened, the focus status is moved to ",Object(l.b)("inlineCode",{parentName:"li"},"PopoverContent"),". If ",Object(l.b)("inlineCode",{parentName:"li"},"initialFocusRef")," is set, then the focus status is moved to the element with the related reference (",Object(l.b)("inlineCode",{parentName:"li"},"ref"),")."),Object(l.b)("li",{parentName:"ul"},"When ",Object(l.b)("inlineCode",{parentName:"li"},"Popover")," is closed, the focus status returns to the trigger. If you set ",Object(l.b)("inlineCode",{parentName:"li"},"returnFocusOnClose")," to ",Object(l.b)("inlineCode",{parentName:"li"},"false"),", the focus status will not return."),Object(l.b)("li",{parentName:"ul"},"If trigger is set to ",Object(l.b)("inlineCode",{parentName:"li"},"hover"),":",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"Focusing on or mousing over the trigger will open ",Object(l.b)("inlineCode",{parentName:"li"},"Popover"),"."),Object(l.b)("li",{parentName:"ul"},"Blurring or mousing out of the trigger will close ",Object(l.b)("inlineCode",{parentName:"li"},"Popover"),". If you move your mouse into ",Object(l.b)("inlineCode",{parentName:"li"},"PopoverContent"),", ",Object(l.b)("inlineCode",{parentName:"li"},"Popover")," remains visible."))),Object(l.b)("li",{parentName:"ul"},"If trigger is set to ",Object(l.b)("inlineCode",{parentName:"li"},"click"),":",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"Clicking the trigger or using the ",Object(l.b)("inlineCode",{parentName:"li"},"Space")," or ",Object(l.b)("inlineCode",{parentName:"li"},"Enter")," key when the focus status is on the trigger will open ",Object(l.b)("inlineCode",{parentName:"li"},"Popover"),"."),Object(l.b)("li",{parentName:"ul"},"Clicking the trigger again will close ",Object(l.b)("inlineCode",{parentName:"li"},"Popover"),"."))),Object(l.b)("li",{parentName:"ul"},"Hitting the ",Object(l.b)("inlineCode",{parentName:"li"},"Esc")," key while ",Object(l.b)("inlineCode",{parentName:"li"},"Popover")," is open and the focus status is within ",Object(l.b)("inlineCode",{parentName:"li"},"PopoverContent")," will close ",Object(l.b)("inlineCode",{parentName:"li"},"Popover"),". If you set ",Object(l.b)("inlineCode",{parentName:"li"},"closeOnEsc")," to ",Object(l.b)("inlineCode",{parentName:"li"},"false"),", ",Object(l.b)("inlineCode",{parentName:"li"},"Popover")," will not close."),Object(l.b)("li",{parentName:"ul"},"Clicking outside or blurring out of ",Object(l.b)("inlineCode",{parentName:"li"},"PopoverContent")," closes ",Object(l.b)("inlineCode",{parentName:"li"},"Popover"),". If you set ",Object(l.b)("inlineCode",{parentName:"li"},"closeOnBlur")," to ",Object(l.b)("inlineCode",{parentName:"li"},"false"),", ",Object(l.b)("inlineCode",{parentName:"li"},"Popover")," will not close.")),Object(l.b)("h3",null,"ARIA attributes"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"If the trigger is set to ",Object(l.b)("inlineCode",{parentName:"li"},"click"),", the role of the ",Object(l.b)("inlineCode",{parentName:"li"},"PopoverContent")," element is set to ",Object(l.b)("inlineCode",{parentName:"li"},"dialog"),". If the trigger is set to ",Object(l.b)("inlineCode",{parentName:"li"},"hover"),", the ",Object(l.b)("inlineCode",{parentName:"li"},"PopoverContent")," role is set to ",Object(l.b)("inlineCode",{parentName:"li"},"tooltip"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"PopoverContent")," has ",Object(l.b)("inlineCode",{parentName:"li"},"aria-labelledby")," set to the ",Object(l.b)("inlineCode",{parentName:"li"},"id")," attribute of ",Object(l.b)("inlineCode",{parentName:"li"},"PopoverHeader"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"PopoverContent")," has ",Object(l.b)("inlineCode",{parentName:"li"},"aria-describedby")," set to the ",Object(l.b)("inlineCode",{parentName:"li"},"id")," attribute of ",Object(l.b)("inlineCode",{parentName:"li"},"PopoverBody"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"PopoverContent")," has ",Object(l.b)("inlineCode",{parentName:"li"},"aria-hidden")," set to ",Object(l.b)("inlineCode",{parentName:"li"},"true")," or ",Object(l.b)("inlineCode",{parentName:"li"},"false")," depending on the open/closed state of ",Object(l.b)("inlineCode",{parentName:"li"},"Popover"),"."),Object(l.b)("li",{parentName:"ul"},"The trigger has",Object(l.b)("inlineCode",{parentName:"li"}," aria-haspopup")," set to ",Object(l.b)("inlineCode",{parentName:"li"},"true")," to denote that it triggers a popover."),Object(l.b)("li",{parentName:"ul"},"The trigger has ",Object(l.b)("inlineCode",{parentName:"li"},"aria-controls")," set to the 'id' attribute of ",Object(l.b)("inlineCode",{parentName:"li"},"PopoverContent")," to associate the popover with the trigger."),Object(l.b)("li",{parentName:"ul"},"The trigger has ",Object(l.b)("inlineCode",{parentName:"li"},"aria-expanded")," set to ",Object(l.b)("inlineCode",{parentName:"li"},"true")," or ",Object(l.b)("inlineCode",{parentName:"li"},"false")," depending on the open/closed state of the popover.")),Object(l.b)("h2",null,"Props"),Object(l.b)("h3",null,"Popover"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:"left"},"Name"),Object(l.b)("th",{parentName:"tr",align:"left"},"Type"),Object(l.b)("th",{parentName:"tr",align:"left"},"Default"),Object(l.b)("th",{parentName:"tr",align:"left"},"Description"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:"left"},"isOpen"),Object(l.b)("td",{parentName:"tr",align:"left"},"boolean"),Object(l.b)("td",{parentName:"tr",align:"left"}),Object(l.b)("td",{parentName:"tr",align:"left"},"If ",Object(l.b)("inlineCode",{parentName:"td"},"true"),", the popover is shown.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:"left"},"defaultIsOpen"),Object(l.b)("td",{parentName:"tr",align:"left"},"boolean"),Object(l.b)("td",{parentName:"tr",align:"left"}),Object(l.b)("td",{parentName:"tr",align:"left"},"If ",Object(l.b)("inlineCode",{parentName:"td"},"true"),", the popover is shown initially.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:"left"},"initialFocusRef"),Object(l.b)("td",{parentName:"tr",align:"left"},"React.Ref"),Object(l.b)("td",{parentName:"tr",align:"left"}),Object(l.b)("td",{parentName:"tr",align:"left"},"The ",Object(l.b)("inlineCode",{parentName:"td"},"ref")," of the element that should receive the focus status when the popover opens.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:"left"},"trigger"),Object(l.b)("td",{parentName:"tr",align:"left"},"string"),Object(l.b)("td",{parentName:"tr",align:"left"},"'click'"),Object(l.b)("td",{parentName:"tr",align:"left"},"The interaction that triggers the popover. One of: ",Object(l.b)("inlineCode",{parentName:"td"},"'click'"),", ",Object(l.b)("inlineCode",{parentName:"td"},"'hover'"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:"left"},"placement"),Object(l.b)("td",{parentName:"tr",align:"left"},"PopperJS.placement"),Object(l.b)("td",{parentName:"tr",align:"left"},"'bottom'"),Object(l.b)("td",{parentName:"tr",align:"left"},"Position the popover relative to the trigger element as well as surrounding elements. Possible values: ",Object(l.b)("inlineCode",{parentName:"td"},"'top'"),", ",Object(l.b)("inlineCode",{parentName:"td"},"'bottom'"),", ",Object(l.b)("inlineCode",{parentName:"td"},"'right'"),", ",Object(l.b)("inlineCode",{parentName:"td"},"'left'"),", ",Object(l.b)("inlineCode",{parentName:"td"},"'top-start'"),", ",Object(l.b)("inlineCode",{parentName:"td"},"'top-end'"),", ",Object(l.b)("inlineCode",{parentName:"td"},"'bottom-start'"),", ",Object(l.b)("inlineCode",{parentName:"td"},"'bottom-end'"),", ",Object(l.b)("inlineCode",{parentName:"td"},"'right-start'"),", ",Object(l.b)("inlineCode",{parentName:"td"},"'right-end'"),", ",Object(l.b)("inlineCode",{parentName:"td"},"'left-start'"),", ",Object(l.b)("inlineCode",{parentName:"td"},"'left-end'"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:"left"},"returnFocusOnClose"),Object(l.b)("td",{parentName:"tr",align:"left"},"boolean"),Object(l.b)("td",{parentName:"tr",align:"left"},"true"),Object(l.b)("td",{parentName:"tr",align:"left"},"If ",Object(l.b)("inlineCode",{parentName:"td"},"true"),", the popover will return the focus status to the trigger when closing.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:"left"},"closeOnBlur"),Object(l.b)("td",{parentName:"tr",align:"left"},"boolean"),Object(l.b)("td",{parentName:"tr",align:"left"},"true"),Object(l.b)("td",{parentName:"tr",align:"left"},"If ",Object(l.b)("inlineCode",{parentName:"td"},"true"),", the popover will close when you use the tab key or click outside the popover dialog.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:"left"},"closeOnEsc"),Object(l.b)("td",{parentName:"tr",align:"left"},"boolean"),Object(l.b)("td",{parentName:"tr",align:"left"},"true"),Object(l.b)("td",{parentName:"tr",align:"left"},"If ",Object(l.b)("inlineCode",{parentName:"td"},"true"),", the popover will close when you press the ",Object(l.b)("inlineCode",{parentName:"td"},"esc")," key.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:"left"},"children"),Object(l.b)("td",{parentName:"tr",align:"left"},"React.ReactNode, (props: InternalState) => React.ReactNode"),Object(l.b)("td",{parentName:"tr",align:"left"}),Object(l.b)("td",{parentName:"tr",align:"left"},"The children of the popover.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:"left"},"hideArrow"),Object(l.b)("td",{parentName:"tr",align:"left"},"boolean"),Object(l.b)("td",{parentName:"tr",align:"left"}),Object(l.b)("td",{parentName:"tr",align:"left"},"If ",Object(l.b)("inlineCode",{parentName:"td"},"true"),", hide the arrow tip on the popover.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:"left"},"skidding"),Object(l.b)("td",{parentName:"tr",align:"left"},"number"),Object(l.b)("td",{parentName:"tr",align:"left"},"0"),Object(l.b)("td",{parentName:"tr",align:"left"},"Displaces the popover (in pixels) along the reference element. Used by ",Object(l.b)("a",{parentName:"td",href:"https://popper.js.org/docs/v2/modifiers/offset/#skidding-1"},Object(l.b)("inlineCode",{parentName:"a"},"popper.js")))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:"left"},"distance"),Object(l.b)("td",{parentName:"tr",align:"left"},"number"),Object(l.b)("td",{parentName:"tr",align:"left"},"4"),Object(l.b)("td",{parentName:"tr",align:"left"},"Displaces the popover (in pixels) away from, or toward, the reference. Used by ",Object(l.b)("a",{parentName:"td",href:"https://popper.js.org/docs/v2/modifiers/offset/#distance-1"},Object(l.b)("inlineCode",{parentName:"a"},"popper.js")))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:"left"},"delay"),Object(l.b)("td",{parentName:"tr",align:"left"},"number or object"),Object(l.b)("td",{parentName:"tr",align:"left"},"{ show: 0, hide: 100 }"),Object(l.b)("td",{parentName:"tr",align:"left"},"If ",Object(l.b)("inlineCode",{parentName:"td"},"trigger")," is hover, delay showing and hiding the popover (ms). Object structure is: ",Object(l.b)("inlineCode",{parentName:"td"},"delay={{ show: 500, hide: 100 }}"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:"left"},"usePortal"),Object(l.b)("td",{parentName:"tr",align:"left"},"boolean"),Object(l.b)("td",{parentName:"tr",align:"left"},"true"),Object(l.b)("td",{parentName:"tr",align:"left"},"If ",Object(l.b)("inlineCode",{parentName:"td"},"true"),", the popover is displayed with a ",Object(l.b)("inlineCode",{parentName:"td"},"Portal"),". Rendering content inside a Portal allows the popover content to escape the physical bounds of its parent while still being positioned correctly relative to its target.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:"left"},"onOpen"),Object(l.b)("td",{parentName:"tr",align:"left"},"() => void"),Object(l.b)("td",{parentName:"tr",align:"left"}),Object(l.b)("td",{parentName:"tr",align:"left"},"A callback called when the popover opens.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:"left"},"onClose"),Object(l.b)("td",{parentName:"tr",align:"left"},"() => void"),Object(l.b)("td",{parentName:"tr",align:"left"}),Object(l.b)("td",{parentName:"tr",align:"left"},"A callback called when the popover closes.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:"left"},"nextToCursor"),Object(l.b)("td",{parentName:"tr",align:"left"},"boolean"),Object(l.b)("td",{parentName:"tr",align:"left"}),Object(l.b)("td",{parentName:"tr",align:"left"},"Popover will next to mouse cursor when mouse enter the reference.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:"left"},"followCursor"),Object(l.b)("td",{parentName:"tr",align:"left"},"boolean"),Object(l.b)("td",{parentName:"tr",align:"left"}),Object(l.b)("td",{parentName:"tr",align:"left"},"Popover will follow mouse cursor when mouse move on the reference.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:"left"},"arrowAt"),Object(l.b)("td",{parentName:"tr",align:"left"},"string"),Object(l.b)("td",{parentName:"tr",align:"left"}),Object(l.b)("td",{parentName:"tr",align:"left"},"The arrow is at the position of the popover. Possible values: ",Object(l.b)("inlineCode",{parentName:"td"},"'left'"),", ",Object(l.b)("inlineCode",{parentName:"td"},"'right'"),", ",Object(l.b)("inlineCode",{parentName:"td"},"'top'"),", ",Object(l.b)("inlineCode",{parentName:"td"},"'bottom'"))))),Object(l.b)("h3",null,"PopoverTrigger"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:"left"},"Name"),Object(l.b)("th",{parentName:"tr",align:"left"},"Type"),Object(l.b)("th",{parentName:"tr",align:"left"},"Default"),Object(l.b)("th",{parentName:"tr",align:"left"},"Description"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:"left"},"shouldWrapChildren"),Object(l.b)("td",{parentName:"tr",align:"left"},"boolean"),Object(l.b)("td",{parentName:"tr",align:"left"}),Object(l.b)("td",{parentName:"tr",align:"left"},"If ",Object(l.b)("inlineCode",{parentName:"td"},"true"),", the popover trigger will wrap its children with a ",Object(l.b)("inlineCode",{parentName:"td"},"Box"),".")))),Object(l.b)("h3",null,"Other props"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"PopoverContent")," is composed of ",Object(l.b)("a",{parentName:"li",href:"./pseudobox"},Object(l.b)("inlineCode",{parentName:"a"},"PseudoBox")),". You can override the default styles with style props."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"PopoverHeader"),", ",Object(l.b)("inlineCode",{parentName:"li"},"PopoverFooter"),",and ",Object(l.b)("inlineCode",{parentName:"li"},"PopoverBody")," are composed of ",Object(l.b)("a",{parentName:"li",href:"./box"},Object(l.b)("inlineCode",{parentName:"a"},"Box")),".")))}b.isMDXComponent=!0},ZVZ0:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return u}));var o=n("ERkP"),r=n.n(o);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var b=r.a.createContext({}),c=function(e){var t=r.a.useContext(b),n=t;return e&&(n="function"===typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=c(e.components);return r.a.createElement(b.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,b=p(e,["components","mdxType","originalType","parentName"]),d=c(n),m=o,u=d["".concat(i,".").concat(m)]||d[m]||s[m]||a;return n?r.a.createElement(u,l(l({ref:t},b),{},{components:n})):r.a.createElement(u,l({ref:t},b))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"===typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"===typeof e?e:o,i[1]=l;for(var b=2;b<a;b++)i[b]=n[b];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},jve2:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/popover",function(){return n("NPmY")}])}},[["jve2",0,2,1]]]);