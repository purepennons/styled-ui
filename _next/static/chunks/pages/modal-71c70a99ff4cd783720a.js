_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[47],{"6T9U":function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/modal",function(){return t("NDMp")}])},NDMp:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return s}));var o=t("97Jx"),l=t.n(o),a=t("m3Bd"),r=t.n(a),i=(t("ERkP"),t("ZVZ0")),c=(t("l1C2"),{});function s(e){var n=e.components,t=r()(e,["components"]);return Object(i.b)("wrapper",l()({},c,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("h1",null,"Modal"),Object(i.b)("p",null,"Modal dialogs are used to inform users about a task and can contain critical information, require decisions, or involve multiple tasks. Modal dialogs disable app functionality when they appear, and remain on screen until confirmed, dismissed, or a required action has been taken."),Object(i.b)("h2",null,"Import"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"Modal"),": A ",Object(i.b)("inlineCode",{parentName:"li"},"Provider")," component that provides the context to the components it wraps."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"ModalOverlay"),": The overlay of the modal."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"ModalContent"),": The content of the modal."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"ModalHeader"),": The header of the modal."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"ModalBody"),": The body of the modal."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"ModalFooter"),": The footer of the modal.")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js"},"import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalFooter } from '@trendmicro/react-styled-ui';\n// or\nimport Modal from '@trendmicro/react-styled-ui/Modal';\n")),Object(i.b)("h2",null,"Modal components"),Object(i.b)("p",null,"Below is a static modal example, including modal header (optional), modal body (required when padding is necessary), and modal footer (optional)."),Object(i.b)("p",null,"You can also compose your modal components when customization is needed."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-jsx",metastring:"noInline",noInline:!0},'const SkeletonContent = (props) => (\n  <Flex {...props}>\n    <Flex flex="none" mr="4x" align="center">\n      <Skeleton variant="circle" width="10x" height="10x" />\n    </Flex>\n    <Box flex="auto">\n      <Skeleton />\n      <Skeleton />\n      <Skeleton />\n    </Box>\n  </Flex>\n);\n\nfunction Example() {\n  return (\n    <Stack direction="column" spacing="4x">\n      <ModalContent ml={0} width={480}>\n        <ModalHeader>\n          Modal Title\n        </ModalHeader>\n        <ModalBody>\n          <Text mb="4x">\n            Modal body text goes here.\n          </Text>\n          <SkeletonContent />\n        </ModalBody>\n        <ModalFooter>\n          <Button variant="primary" minWidth="20x">Save Changes</Button>\n          <Space width="2x" />\n          <Button minWidth="20x">Cancel</Button>\n        </ModalFooter>\n      </ModalContent>\n      <ModalContent ml={0} width={480}>\n        <ModalBody>\n          <Text mb="4x">\n            Modal body text goes here.\n          </Text>\n          <SkeletonContent />\n        </ModalBody>\n        <ModalFooter>\n          <Button variant="primary" minWidth="20x">Save Changes</Button>\n          <Space width="2x" />\n          <Button minWidth="20x">Cancel</Button>\n        </ModalFooter>\n      </ModalContent>\n      <ModalContent ml={0} width={480}>\n        <ModalBody>\n          <Text mb="4x">\n            Modal body text goes here.\n          </Text>\n          <SkeletonContent />\n        </ModalBody>\n      </ModalContent>\n      <ModalContent ml={0} width={480}>\n        <Box px="4x" py="4x">\n          You can create a custom modal with any sort of content.\n        </Box>\n      </ModalContent>\n    </Stack>\n  );\n}\n\nrender(<Example />);\n')),Object(i.b)("h2",null,"Usage"),Object(i.b)("p",null,"Click the button below to toggle a modal. The modal will show up in the center of the screen."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-jsx",metastring:"noInline",noInline:!0},'const SelectableButton = ({ selected, ...props }) => {\n  const { colorMode } = useColorMode();\n  const { colors } = useTheme();\n  const focusColor = colors[\'blue:60\'];\n  let _selectedColor = {\n    dark: \'blue:60\',\n    light: \'blue:60\',\n  }[colorMode];\n  _selectedColor = colors[_selectedColor];\n  const getSelectedProps = {\n    bg: _selectedColor,\n    borderColor: _selectedColor,\n    color: \'white:emphasis\',\n    cursor: \'default\',\n    pointerEvents: \'none\',\n    zIndex: 1,\n    css: {\n      \'&::before\': {\n        backgroundColor: _selectedColor,\n      },\n      \'&:focus\': {\n        \':not(:active)\': {\n          borderColor: focusColor,\n          boxShadow: `inset 0 0 0 1px ${focusColor}`,\n        },\n        \'&::before\': {\n          backgroundColor: focusColor,\n        },\n      }\n    },\n    _hover: {\n      bg: _selectedColor,\n    },\n    _active: {\n      bg: _selectedColor,\n    },\n  };\n  return (\n    <Button\n      {...(selected && getSelectedProps)}\n      {...props}\n    />\n  );\n};\n\nconst useSelection = (defaultValue) => {\n  const [value, setValue] = React.useState(defaultValue);\n  const changeBy = (value) => () => setValue(value);\n  return [value, changeBy];\n};\n\nconst useToggle = (defaultValue) => {\n  const [value, setValue] = React.useState(defaultValue);\n  const toggle = () => setValue(value => !value);\n  return [value, toggle];\n};\n\nconst Divider = (props) => {\n  const { colorMode } = useColorMode();\n  const dividerColor = {\n    dark: \'white:secondary\',\n    light: \'black:secondary\',\n  }[colorMode];\n  return (\n    <Box mb="4x" pb="4x" borderBottom={1} borderBottomColor={dividerColor} {...props} />\n  );\n};\n\nconst FormGroup = (props) => (\n  <Box mb="4x">\n    <Flex display="inline-flex" {...props} />\n  </Box>\n);\n\nfunction Example() {\n  const { colorMode } = useColorMode();\n  const iconColor = {\n    dark: \'white:tertiary\',\n    light: \'black:tertiary\',\n  }[colorMode];\n  const { isOpen, onOpen, onClose } = useDisclosure();\n  const [ensureFocus, toggleEnsureFocus] = useToggle(true);\n  const [autoFocus, toggleAutoFocus] = useToggle(true);\n  const [closeOnEsc, toggleCloseOnEsc] = useToggle(true);\n  const [closeOnOutsideClick, toggleCloseOnOutsideClick] = useToggle(true);\n  const [isCloseButtonVisible, toggleIsCloseButtonVisible] = useToggle(true);\n  const [isOverlayVisible, toggleIsOverlayVisible] = useToggle(true);\n  const [isHeaderVisible, toggleIsHeaderVisible] = useToggle(true);\n  const [isBodyVisible, toggleIsBodyVisible] = useToggle(true);\n  const [isFooterVisible, toggleIsFooterVisible] = useToggle(true);\n  const [size, changeSizeBy] = useSelection(\'sm\');\n\n  return (\n    <>\n      <Box>\n        <Button onClick={onOpen}>\n          Launch modal\n        </Button>\n      </Box>\n      <Divider />\n      <FormGroup>\n        <ButtonGroup\n          variant="secondary"\n          css={{\n            \'> *:not(:first-of-type)\': {\n              marginLeft: -1\n            }\n          }}\n        >\n          {[\'auto\', \'xs\', \'sm\', \'md\', \'lg\', \'xl\', \'full\'].map(value => (\n            <SelectableButton\n              key={value}\n              selected={value === size}\n              onClick={changeSizeBy(value)}\n              minWidth="15x"\n            >\n              {value}\n            </SelectableButton>\n          ))}\n        </ButtonGroup>\n      </FormGroup>\n      <FormGroup>\n        <TextLabel display="flex" alignItems="center">\n          <Checkbox\n            checked={ensureFocus}\n            onChange={toggleEnsureFocus}\n          />\n          <Space width="2x" />\n          <Text fontFamily="mono" whiteSpace="nowrap">ensureFocus</Text>\n        </TextLabel>\n      </FormGroup>\n      <FormGroup>\n        <TextLabel display="flex" alignItems="center">\n          <Checkbox\n            checked={autoFocus}\n            disabled={!ensureFocus}\n            onChange={toggleAutoFocus}\n          />\n          <Space width="2x" />\n          <Text fontFamily="mono" whiteSpace="nowrap">autoFocus</Text>\n        </TextLabel>\n      </FormGroup>\n      <FormGroup>\n        <TextLabel display="flex" alignItems="center">\n          <Checkbox\n            checked={closeOnEsc}\n            disabled={!isCloseButtonVisible && !closeOnOutsideClick}\n            onChange={toggleCloseOnEsc}\n          />\n          <Space width="2x" />\n          <Text fontFamily="mono" whiteSpace="nowrap">closeOnEsc</Text>\n        </TextLabel>\n      </FormGroup>\n      <FormGroup>\n        <TextLabel display="flex" alignItems="center">\n          <Checkbox\n            checked={closeOnOutsideClick}\n            disabled={!isCloseButtonVisible && !closeOnEsc}\n            onChange={toggleCloseOnOutsideClick}\n          />\n          <Space width="2x" />\n          <Text fontFamily="mono" whiteSpace="nowrap">closeOnOutsideClick</Text>\n        </TextLabel>\n      </FormGroup>\n      <FormGroup>\n        <TextLabel display="flex" alignItems="center">\n          <Checkbox\n            checked={isCloseButtonVisible}\n            disabled={!closeOnEsc && !closeOnOutsideClick}\n            onChange={toggleIsCloseButtonVisible}\n          />\n          <Space width="2x" />\n          <Text fontFamily="mono" whiteSpace="nowrap">isCloseButtonVisible</Text>\n        </TextLabel>\n      </FormGroup>\n      <FormGroup>\n        <TextLabel display="flex" alignItems="center">\n          <Checkbox checked={isOverlayVisible} onChange={toggleIsOverlayVisible} />\n          <Space width="2x" />\n          <Text fontFamily="mono" whiteSpace="nowrap">ModalOverlay</Text>\n        </TextLabel>\n      </FormGroup>\n      <FormGroup>\n        <TextLabel display="flex" alignItems="center">\n          <Checkbox checked={isHeaderVisible} onChange={toggleIsHeaderVisible} />\n          <Space width="2x" />\n          <Text fontFamily="mono" whiteSpace="nowrap">ModalHeader</Text>\n        </TextLabel>\n      </FormGroup>\n      <FormGroup>\n        <TextLabel display="flex" alignItems="center">\n          <Checkbox checked={isBodyVisible} onChange={toggleIsBodyVisible} />\n          <Space width="2x" />\n          <Text fontFamily="mono" whiteSpace="nowrap">ModalBody</Text>\n        </TextLabel>\n      </FormGroup>\n      <FormGroup>\n        <TextLabel display="flex" alignItems="center">\n          <Checkbox checked={isFooterVisible} onChange={toggleIsFooterVisible} />\n          <Space width="2x" />\n          <Text fontFamily="mono" whiteSpace="nowrap">ModalFooter</Text>\n        </TextLabel>\n      </FormGroup>\n      <Scale\n        in={isOpen}\n        duration={150}\n      >\n        {styles => (\n          <Modal\n            ensureFocus={ensureFocus}\n            autoFocus={autoFocus}\n            closeOnEsc={closeOnEsc}\n            closeOnOutsideClick={closeOnOutsideClick}\n            isCloseButtonVisible={isCloseButtonVisible}\n            isOpen={true} // Set to `true` if a transition is active\n            onClose={onClose}\n            size={size}\n          >\n            {isOverlayVisible && (\n              <ModalOverlay opacity={styles.opacity} />\n            )}\n            <ModalContent {...styles}>\n              {isHeaderVisible && (\n                <ModalHeader>\n                  Create an Account\n                </ModalHeader>\n              )}\n              {isBodyVisible && (\n                <ModalBody>\n                  <Grid\n                    templateColumns="auto 1fr"\n                    rowGap="2x"\n                    columnGap="3x"\n                    alignItems="center"\n                  >\n                    <Icon icon="user" color={iconColor} />\n                    <Input placeholder="User name" />\n                    <Icon icon="lock" color={iconColor} />\n                    <Input type="password" placeholder="Password" />\n                    <Box />\n                    <Input type="password" placeholder="Confirm password" />\n                    <Icon icon="email" color={iconColor} />\n                    <Input placeholder="Email address" />\n                  </Grid>\n                </ModalBody>\n              )}\n              {isFooterVisible && (\n                <ModalFooter>\n                  <Button variant="primary">\n                    Confirm\n                  </Button>\n                  <Space width="2x" />\n                  <Button onClick={onClose}>\n                    Cancel\n                  </Button>\n                </ModalFooter>\n              )}\n            </ModalContent>\n          </Modal>\n        )}\n      </Scale>\n    </>\n  );\n}\n\nrender(<Example />);\n')),Object(i.b)("h3",null,"Sizes"),Object(i.b)("p",null,"Use the ",Object(i.b)("inlineCode",{parentName:"p"},"size")," prop to change the size of the ",Object(i.b)("inlineCode",{parentName:"p"},"Modal"),". You can set the value to ",Object(i.b)("inlineCode",{parentName:"p"},"auto"),", ",Object(i.b)("inlineCode",{parentName:"p"},"xs"),", ",Object(i.b)("inlineCode",{parentName:"p"},"sm"),", ",Object(i.b)("inlineCode",{parentName:"p"},"md"),", ",Object(i.b)("inlineCode",{parentName:"p"},"lg"),", ",Object(i.b)("inlineCode",{parentName:"p"},"xl"),", or ",Object(i.b)("inlineCode",{parentName:"p"},"full"),"."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-jsx"},'function Example() {\n  const { isOpen, onOpen, onClose } = useDisclosure();\n  const [size, setSize] = React.useState(\'auto\');\n  const handleClickBy = nextSize => (e) => {\n    setSize(nextSize);\n    onOpen();\n  };\n\n  return (\n    <>\n      <Stack direction="row" spacing="3x" flexWrap="wrap" mt={-12}>\n        <Button onClick={handleClickBy(\'auto\')} mt="3x">Auto width</Button>\n        <Button onClick={handleClickBy(\'xs\')} mt="3x">Extra small width</Button>\n        <Button onClick={handleClickBy(\'sm\')} mt="3x">Small width</Button>\n        <Button onClick={handleClickBy(\'md\')} mt="3x">Medium width</Button>\n        <Button onClick={handleClickBy(\'lg\')} mt="3x">Large width</Button>\n        <Button onClick={handleClickBy(\'xl\')} mt="3x">Extra large width</Button>\n        <Button onClick={handleClickBy(\'full\')} mt="3x">Full width</Button>\n      </Stack>\n      <Modal\n        ensureFocus\n        autoFocus\n        closeOnEsc\n        closeOnOutsideClick\n        isCloseButtonVisible\n        isOpen={isOpen}\n        onClose={onClose}\n        size={size}\n      >\n        <ModalOverlay />\n        <ModalContent>\n          <ModalHeader>\n            Modal Title\n          </ModalHeader>\n          <ModalBody>\n            <Lorem count={2} />\n          </ModalBody>\n          <ModalFooter>\n            <Button onClick={onClose}>\n              Close\n            </Button>\n          </ModalFooter>\n        </ModalContent>\n      </Modal>\n    </>\n  );\n}\n')),Object(i.b)("h3",null,"Nested modals"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-jsx"},'function Example() {\n  const { isOpen, onOpen, onClose } = useDisclosure();\n  const { isOpen: isNestedOpen, onOpen: onNestedOpen, onClose: onNestedClose } = useDisclosure();\n\n  return (\n    <>\n      <Button onClick={onOpen}>Launch modal</Button>\n      <Modal\n        closeOnEsc\n        closeOnOutsideClick\n        isCloseButtonVisible\n        isOpen={isOpen}\n        onClose={onClose}\n        size="auto"\n      >\n        <ModalOverlay />\n        <ModalContent>\n          <ModalHeader>\n            Modal Title\n          </ModalHeader>\n          <ModalBody>\n            <Lorem count={2} />\n          </ModalBody>\n          <ModalFooter justifyContent="space-between">\n            <Button\n              disabled={isNestedOpen}\n              variant="primary"\n              onClick={onNestedOpen}\n            >\n              Launch nested modal\n            </Button>\n            <Box>\n              <Button minWidth="20x" onClick={onClose}>\n                Close\n              </Button>\n            </Box>\n          </ModalFooter>\n        </ModalContent>\n      </Modal>\n      <Modal\n        closeOnEsc\n        closeOnOutsideClick\n        isCloseButtonVisible\n        isOpen={isNestedOpen}\n        onClose={onNestedClose}\n      >\n        <ModalOverlay />\n        <ModalContent>\n          <ModalHeader>\n            Nested modal title\n          </ModalHeader>\n          <ModalBody>\n            <Lorem count={1} />\n          </ModalBody>\n          <ModalFooter>\n            <Button variant="primary" onClick={onNestedClose} minWidth="20x">\n              Yes\n            </Button>\n            <Space width="2x" />\n            <Button onClick={onNestedClose} minWidth="20x">\n              No\n            </Button>\n          </ModalFooter>\n        </ModalContent>\n      </Modal>\n    </>\n  );\n}\n')),Object(i.b)("h3",null,"Transitions"),Object(i.b)("p",null,"The modal doesn't come with transitions by default. You can use the ",Object(i.b)("a",{parentName:"p",href:"./transition"},Object(i.b)("inlineCode",{parentName:"a"},"Transition"))," components to provide simple transitions."),Object(i.b)("p",null,"When using transitions, you have to set ",Object(i.b)("inlineCode",{parentName:"p"},"isOpen")," to ",Object(i.b)("inlineCode",{parentName:"p"},"true"),", or the transition will not take effect when closing the modal."),Object(i.b)("h4",null,"Adding scale transition"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"import { Scale } from '@trendmicro/react-styled-ui';\n")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-jsx"},"function Example() {\n  const { isOpen, onOpen, onClose } = useDisclosure();\n\n  return (\n    <>\n      <Button onClick={onOpen}>\n        Launch modal\n      </Button>\n      <Scale in={isOpen}>\n        {styles => (\n          <Modal\n            ensureFocus\n            autoFocus\n            closeOnEsc\n            closeOnOutsideClick\n            isCloseButtonVisible\n            isOpen={true} // Set to `true` if a transition is active\n            onClose={onClose}\n          >\n            <ModalOverlay opacity={styles.opacity} />\n            <ModalContent {...styles}>\n              <ModalHeader>\n                Modal Title\n              </ModalHeader>\n              <ModalBody>\n                <Lorem count={2} />\n              </ModalBody>\n              <ModalFooter>\n                <Button onClick={onClose}>\n                  Close\n                </Button>\n              </ModalFooter>\n            </ModalContent>\n          </Modal>\n        )}\n      </Scale>\n    </>\n  );\n}\n")),Object(i.b)("h4",null,"Adding slide-in transition"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"import { SlideIn } from '@trendmicro/react-styled-ui';\n")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-jsx"},"function Example() {\n  const { isOpen, onOpen, onClose } = useDisclosure();\n\n  return (\n    <>\n      <Button onClick={onOpen}>\n        Launch modal\n      </Button>\n      <SlideIn in={isOpen}>\n        {styles => (\n          <Modal\n            ensureFocus\n            autoFocus\n            closeOnEsc\n            closeOnOutsideClick\n            isCloseButtonVisible\n            isOpen={true} // Set to `true` if a transition is active\n            onClose={onClose}\n          >\n            <ModalOverlay opacity={styles.opacity} />\n            <ModalContent {...styles}>\n              <ModalHeader>\n                Modal Title\n              </ModalHeader>\n              <ModalBody>\n                <Lorem count={2} />\n              </ModalBody>\n              <ModalFooter>\n                <Button onClick={onClose}>\n                  Close\n                </Button>\n              </ModalFooter>\n            </ModalContent>\n          </Modal>\n        )}\n      </SlideIn>\n    </>\n  );\n}\n")),Object(i.b)("h2",null,"Props"),Object(i.b)("h3",null,"Modal"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"Modal")," composes the ",Object(i.b)("a",{parentName:"p",href:"./box"},Object(i.b)("inlineCode",{parentName:"a"},"Box"))," component."),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:"left"},"Name"),Object(i.b)("th",{parentName:"tr",align:"left"},"Type"),Object(i.b)("th",{parentName:"tr",align:"left"},"Default"),Object(i.b)("th",{parentName:"tr",align:"left"},"Description"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},"ensureFocus"),Object(i.b)("td",{parentName:"tr",align:"left"},"boolean"),Object(i.b)("td",{parentName:"tr",align:"left"},"false"),Object(i.b)("td",{parentName:"tr",align:"left"},"If ",Object(i.b)("inlineCode",{parentName:"td"},"true"),", it will always bring the focus back to the ",Object(i.b)("inlineCode",{parentName:"td"},"Modal")," descendants, which does not allow the focus to escape while open.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},"autoFocus"),Object(i.b)("td",{parentName:"tr",align:"left"},"boolean"),Object(i.b)("td",{parentName:"tr",align:"left"},"false"),Object(i.b)("td",{parentName:"tr",align:"left"},"If ",Object(i.b)("inlineCode",{parentName:"td"},"true")," and ",Object(i.b)("inlineCode",{parentName:"td"},"ensureFocus")," is ",Object(i.b)("inlineCode",{parentName:"td"},"true")," and ",Object(i.b)("inlineCode",{parentName:"td"},"initialFocusRef")," is not set, it will automatically set focus on the first focusable element.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},"finalFocusRef"),Object(i.b)("td",{parentName:"tr",align:"left"},"React.ref"),Object(i.b)("td",{parentName:"tr",align:"left"}),Object(i.b)("td",{parentName:"tr",align:"left"},"The ",Object(i.b)("inlineCode",{parentName:"td"},"ref")," of element to receive focus when the modal closes.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},"initialFocusRef"),Object(i.b)("td",{parentName:"tr",align:"left"},"React.ref"),Object(i.b)("td",{parentName:"tr",align:"left"}),Object(i.b)("td",{parentName:"tr",align:"left"},"The ",Object(i.b)("inlineCode",{parentName:"td"},"ref")," of the element to receive focus when the modal opens.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},"isCloseButtonVisible"),Object(i.b)("td",{parentName:"tr",align:"left"},"boolean"),Object(i.b)("td",{parentName:"tr",align:"left"},"false"),Object(i.b)("td",{parentName:"tr",align:"left"},"If ",Object(i.b)("inlineCode",{parentName:"td"},"true"),", a close button will appear on the right side.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},"isOpen"),Object(i.b)("td",{parentName:"tr",align:"left"},"boolean"),Object(i.b)("td",{parentName:"tr",align:"left"},"false"),Object(i.b)("td",{parentName:"tr",align:"left"},"If ",Object(i.b)("inlineCode",{parentName:"td"},"true"),", the modal is shown.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},"closeOnEsc"),Object(i.b)("td",{parentName:"tr",align:"left"},"boolean"),Object(i.b)("td",{parentName:"tr",align:"left"},"false"),Object(i.b)("td",{parentName:"tr",align:"left"},"If ",Object(i.b)("inlineCode",{parentName:"td"},"true"),", close the modal when the ",Object(i.b)("inlineCode",{parentName:"td"},"esc")," key is pressed.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},"closeOnOutsideClick"),Object(i.b)("td",{parentName:"tr",align:"left"},"boolean"),Object(i.b)("td",{parentName:"tr",align:"left"},"false"),Object(i.b)("td",{parentName:"tr",align:"left"},"If ",Object(i.b)("inlineCode",{parentName:"td"},"true"),", close the modal when click outside of the modal.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},"onClose"),Object(i.b)("td",{parentName:"tr",align:"left"},"function"),Object(i.b)("td",{parentName:"tr",align:"left"}),Object(i.b)("td",{parentName:"tr",align:"left"},"Callback fired when the modal closes.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},"size"),Object(i.b)("td",{parentName:"tr",align:"left"},"string"),Object(i.b)("td",{parentName:"tr",align:"left"},"'auto'"),Object(i.b)("td",{parentName:"tr",align:"left"},"The size of the modal. One of: ",Object(i.b)("inlineCode",{parentName:"td"},"'auto'"),", ",Object(i.b)("inlineCode",{parentName:"td"},"'xs'"),", ",Object(i.b)("inlineCode",{parentName:"td"},"'sm'"),", ",Object(i.b)("inlineCode",{parentName:"td"},"'md'"),", ",Object(i.b)("inlineCode",{parentName:"td"},"'lg'"),", ",Object(i.b)("inlineCode",{parentName:"td"},"'xl'"),", ",Object(i.b)("inlineCode",{parentName:"td"},"'full'"))))),Object(i.b)("h3",null,"ModalOverlay"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"ModalOverlay")," composes the ",Object(i.b)("a",{parentName:"p",href:"./box"},Object(i.b)("inlineCode",{parentName:"a"},"Box"))," component."),Object(i.b)("h3",null,"ModalContent"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"ModalContent")," composes the ",Object(i.b)("a",{parentName:"p",href:"./box"},Object(i.b)("inlineCode",{parentName:"a"},"Box"))," component."),Object(i.b)("h3",null,"ModalHeader"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"ModalHeader")," composes the ",Object(i.b)("a",{parentName:"p",href:"./pseudobox"},Object(i.b)("inlineCode",{parentName:"a"},"PseudoBox"))," component."),Object(i.b)("h3",null,"ModalBody"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"ModalBody")," composes the ",Object(i.b)("a",{parentName:"p",href:"./pseudobox"},Object(i.b)("inlineCode",{parentName:"a"},"PseudoBox"))," component."),Object(i.b)("h3",null,"ModalFooter"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"ModalFooter")," composes the ",Object(i.b)("a",{parentName:"p",href:"./pseudobox"},Object(i.b)("inlineCode",{parentName:"a"},"PseudoBox"))," component."))}s.isMDXComponent=!0},ZVZ0:function(e,n,t){"use strict";t.d(n,"a",(function(){return b})),t.d(n,"b",(function(){return m}));var o=t("ERkP"),l=t.n(o);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,o,l=function(e,n){if(null==e)return{};var t,o,l={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var s=l.a.createContext({}),d=function(e){var n=l.a.useContext(s),t=n;return e&&(t="function"===typeof e?e(n):i(i({},n),e)),t},b=function(e){var n=d(e.components);return l.a.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return l.a.createElement(l.a.Fragment,{},n)}},u=l.a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,r=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),b=d(t),u=o,m=b["".concat(r,".").concat(u)]||b[u]||p[u]||a;return t?l.a.createElement(m,i(i({ref:n},s),{},{components:t})):l.a.createElement(m,i({ref:n},s))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"===typeof e||o){var a=t.length,r=new Array(a);r[0]=u;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i.mdxType="string"===typeof e?e:o,r[1]=i;for(var s=2;s<a;s++)r[s]=t[s];return l.a.createElement.apply(null,r)}return l.a.createElement.apply(null,t)}u.displayName="MDXCreateElement"}},[["6T9U",0,2,1]]]);