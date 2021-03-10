_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[14],{L9Ey:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/accordion",function(){return t("oj12")}])},ZVZ0:function(e,n,t){"use strict";t.d(n,"a",(function(){return s})),t.d(n,"b",(function(){return u}));var a=t("ERkP"),i=t.n(a);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var p=i.a.createContext({}),d=function(e){var n=i.a.useContext(p),t=n;return e&&(t="function"===typeof e?e(n):c(c({},n),e)),t},s=function(e){var n=d(e.components);return i.a.createElement(p.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},m=i.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=d(t),m=a,u=s["".concat(o,".").concat(m)]||s[m]||b[m]||r;return t?i.a.createElement(u,c(c({ref:n},p),{},{components:t})):i.a.createElement(u,c({ref:n},p))}));function u(e,n){var t=arguments,a=n&&n.mdxType;if("string"===typeof e||a){var r=t.length,o=new Array(r);o[0]=m;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"===typeof e?e:a,o[1]=c;for(var p=2;p<r;p++)o[p]=t[p];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},oj12:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return p}));var a=t("97Jx"),i=t.n(a),r=t("m3Bd"),o=t.n(r),c=(t("ERkP"),t("ZVZ0")),l=(t("l1C2"),{});function p(e){var n=e.components,t=o()(e,["components"]);return Object(c.b)("wrapper",i()({},l,t,{components:n,mdxType:"MDXLayout"}),Object(c.b)("h1",null,"Accordion"),Object(c.b)("p",null,Object(c.b)("inlineCode",{parentName:"p"},"Accordion")," is used to display a list of high-level options that can expand/collapse to reveal more information."),Object(c.b)("h3",null,"Accordion components"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("inlineCode",{parentName:"li"},"Accordion"),": The wrapper that uses cloneElement to pass its prop to ",Object(c.b)("inlineCode",{parentName:"li"},"AccordionItem"),"."),Object(c.b)("li",{parentName:"ul"},Object(c.b)("inlineCode",{parentName:"li"},"AccordionItem"),": A single accordion item."),Object(c.b)("li",{parentName:"ul"},Object(c.b)("inlineCode",{parentName:"li"},"AccordionHeader"),": It is used to toggle the expand/collapse state of the accordion item."),Object(c.b)("li",{parentName:"ul"},Object(c.b)("inlineCode",{parentName:"li"},"AccordionPanel"),": The container for the details to be revealed."),Object(c.b)("li",{parentName:"ul"},Object(c.b)("inlineCode",{parentName:"li"},"AccordionIcon"),": A ",Object(c.b)("inlineCode",{parentName:"li"},"chevron-down")," icon that rotates based on the expand/collapse state.")),Object(c.b)("h2",null,"Import"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-js"},"import {\n  Accordion,\n  AccordionItem,\n  AccordionHeader,\n  AccordionPanel,\n  AccordionIcon,\n} from '@trendmicro/react-styled-ui/Accordion';\n")),Object(c.b)("h2",null,"Usage"),Object(c.b)("p",null,"By default, only one item may be expanded and it can only be collapsed again by\nexpanding another."),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-jsx"},'<Accordion>\n  <AccordionItem>\n    <AccordionHeader>\n      <Flex justify="space-between">\n        Section 1\n        <AccordionIcon />\n      </Flex>\n    </AccordionHeader>\n    <AccordionPanel>\n      <Text whiteSpace="pre-wrap" p="3x">\n        Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups. Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups. Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.\n      </Text>\n    </AccordionPanel>\n  </AccordionItem>\n  <AccordionItem>\n    <AccordionHeader>\n      <Flex justify="space-between">\n        Section 2\n        <AccordionIcon />\n      </Flex>\n    </AccordionHeader>\n    <AccordionPanel>\n      <Text whiteSpace="pre-wrap" p="3x">\n        Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups. Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups. Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.\n      </Text>\n    </AccordionPanel>\n  </AccordionItem>\n</Accordion>\n')),Object(c.b)("h3",null,"Expand multiple items at once"),Object(c.b)("p",null,"If you set ",Object(c.b)("inlineCode",{parentName:"p"},"allowMultiple")," to true, then the accordion will permit multiple items to be expanded at once."),Object(c.b)("p",null,"If you pass this prop, ensure that the ",Object(c.b)("inlineCode",{parentName:"p"},"index")," or ",Object(c.b)("inlineCode",{parentName:"p"},"defaultIndex")," prop is an array."),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-jsx"},'<Accordion\n  defaultIndex={[0]}\n  allowMultiple\n>\n  <AccordionItem>\n    <AccordionHeader>\n      <Flex justify="space-between">\n        Section 1\n        <AccordionIcon />\n      </Flex>\n    </AccordionHeader>\n    <AccordionPanel>\n      <Text whiteSpace="pre-wrap" p="3x">\n        Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups. Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups. Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.\n      </Text>\n    </AccordionPanel>\n  </AccordionItem>\n  <AccordionItem>\n    <AccordionHeader>\n      <Flex justify="space-between">\n        Section 2\n        <AccordionIcon />\n      </Flex>\n    </AccordionHeader>\n    <AccordionPanel>\n      <Text whiteSpace="pre-wrap" p="3x">\n        Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups. Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups. Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.\n      </Text>\n    </AccordionPanel>\n  </AccordionItem>\n</Accordion>\n')),Object(c.b)("h3",null,"Toggle each accordion item"),Object(c.b)("p",null,"If you set ",Object(c.b)("inlineCode",{parentName:"p"},"allowToggle")," to true, any expanded item may be collapsed again."),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-jsx"},'<Accordion allowToggle>\n  <AccordionItem>\n    <AccordionHeader>\n      <Flex justify="space-between">\n        Section 1\n        <AccordionIcon />\n      </Flex>\n    </AccordionHeader>\n    <AccordionPanel>\n      <Text whiteSpace="pre-wrap" p="3x">\n        Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups. Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups. Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.\n      </Text>\n    </AccordionPanel>\n  </AccordionItem>\n  <AccordionItem>\n    <AccordionHeader>\n      <Flex justify="space-between">\n        Section 2\n        <AccordionIcon />\n      </Flex>\n    </AccordionHeader>\n    <AccordionPanel>\n      <Text whiteSpace="pre-wrap" p="3x">\n        Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups. Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups. Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.\n      </Text>\n    </AccordionPanel>\n  </AccordionItem>\n</Accordion>\n')),Object(c.b)("h3",null,"Styling the expanded state"),Object(c.b)("p",null,"The ",Object(c.b)("inlineCode",{parentName:"p"},"AccordionItem")," component has the render prop ",Object(c.b)("inlineCode",{parentName:"p"},"isExpanded")," set to ",Object(c.b)("inlineCode",{parentName:"p"},"true")," or ",Object(c.b)("inlineCode",{parentName:"p"},"false"),"."),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-jsx"},"<AccordionItem>\n  {({ isExpanded }) => (\n    <>\n      <AccordionHeader\n        bg={isExpanded ? 'blue:80': 'blue:60'}\n        _hover={{ bg: 'blue:70' }}\n        _active={{ bg: 'blue:80' }}\n        p=\"3x\"\n      >\n        <Flex justify=\"space-between\">\n          Click Me\n          <AccordionIcon />\n        </Flex>\n      </AccordionHeader>\n      <AccordionPanel>\n        <Text whiteSpace=\"pre-wrap\" p=\"3x\">\n          Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups. Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups. Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.\n        </Text>\n      </AccordionPanel>\n    </>\n  )}\n</AccordionItem>\n")),Object(c.b)("h3",null,"Accessing the internal state"),Object(c.b)("p",null,"If you need access to the internal state of each accordion item, you can use a\nrender prop. It provides 2 internal state: ",Object(c.b)("inlineCode",{parentName:"p"},"isDisabled and "),"isExpanded`."),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-jsx"},'<Accordion allowMultiple>\n  <AccordionItem>\n    <AccordionHeader>\n      <Flex justify="space-between">\n        Section 1\n        <AccordionIcon />\n      </Flex>\n    </AccordionHeader>\n    <AccordionPanel>\n      <Text whiteSpace="pre-wrap" p="3x">\n        Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups. Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups. Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.\n      </Text>\n    </AccordionPanel>\n  </AccordionItem>\n  <AccordionItem>\n    {({ isDisabled, isExpanded }) => (\n      <>\n        <AccordionHeader>\n          <Flex justify="space-between">\n            Section 2\n            <Icon\n              icon={isExpanded ? \'minus\' : \'add\'}\n              style={{\n                opacity: isDisabled ? .4 : 1,\n                transform: isExpanded ? null : \'rotate(-90deg)\',\n                transition: \'transform 0.2s\',\n                transformOrigin: \'center\',\n              }}\n            />\n          </Flex>\n        </AccordionHeader>\n        <AccordionPanel>\n          <Text whiteSpace="pre-wrap" p="3x">\n            Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups. Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups. Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.\n          </Text>\n        </AccordionPanel>\n      </>\n    )}\n  </AccordionItem>\n</Accordion>\n')),Object(c.b)("h2",null,"Accessibility"),Object(c.b)("p",null,"Pressing ",Object(c.b)("inlineCode",{parentName:"p"},"space")," or ",Object(c.b)("inlineCode",{parentName:"p"},"enter")," when focus is on the accordion panel header will\ntoggle (expand or collapse) the accordion."),Object(c.b)("h2",null,"Props"),Object(c.b)("h3",null,"Accordion Props"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",{parentName:"tr",align:"left"},"Name"),Object(c.b)("th",{parentName:"tr",align:"left"},"Type"),Object(c.b)("th",{parentName:"tr",align:"left"},"Default"),Object(c.b)("th",{parentName:"tr",align:"left"},"Description"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:"left"},"allowMultiple"),Object(c.b)("td",{parentName:"tr",align:"left"},"boolean"),Object(c.b)("td",{parentName:"tr",align:"left"},"false"),Object(c.b)("td",{parentName:"tr",align:"left"},"If ",Object(c.b)("inlineCode",{parentName:"td"},"true"),", multiple accordion items can be expanded at once.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:"left"},"allowToggle"),Object(c.b)("td",{parentName:"tr",align:"left"},"boolean"),Object(c.b)("td",{parentName:"tr",align:"left"},"false"),Object(c.b)("td",{parentName:"tr",align:"left"},"If ",Object(c.b)("inlineCode",{parentName:"td"},"true"),", any expanded accordion item can be collapsed again.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:"left"},"index"),Object(c.b)("td",{parentName:"tr",align:"left"},"number ","|"," array"),Object(c.b)("td",{parentName:"tr",align:"left"}),Object(c.b)("td",{parentName:"tr",align:"left"},"The index(es) of the expanded accordion item.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:"left"},"defaultIndex"),Object(c.b)("td",{parentName:"tr",align:"left"},"number ","|"," array"),Object(c.b)("td",{parentName:"tr",align:"left"}),Object(c.b)("td",{parentName:"tr",align:"left"},"The initial index(es) of the expanded accordion item.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:"left"},"onChange"),Object(c.b)("td",{parentName:"tr",align:"left"},"function"),Object(c.b)("td",{parentName:"tr",align:"left"}),Object(c.b)("td",{parentName:"tr",align:"left"},"A callback invoked when accordion items are expanded or collapsed.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:"left"},"children"),Object(c.b)("td",{parentName:"tr",align:"left"},"ReactNode"),Object(c.b)("td",{parentName:"tr",align:"left"}),Object(c.b)("td",{parentName:"tr",align:"left"},"The content of the accordion. The children must be one of the ",Object(c.b)("inlineCode",{parentName:"td"},"AccordionHeader")," and ",Object(c.b)("inlineCode",{parentName:"td"},"AccordionPanel")," components.")))),Object(c.b)("h3",null,"AccordionItem Props"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",{parentName:"tr",align:"left"},"Name"),Object(c.b)("th",{parentName:"tr",align:"left"},"Type"),Object(c.b)("th",{parentName:"tr",align:"left"},"Default"),Object(c.b)("th",{parentName:"tr",align:"left"},"Description"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:"left"},"id"),Object(c.b)("td",{parentName:"tr",align:"left"},"string"),Object(c.b)("td",{parentName:"tr",align:"left"}),Object(c.b)("td",{parentName:"tr",align:"left"},"A unique id for the accordion item.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:"left"},"isOpen"),Object(c.b)("td",{parentName:"tr",align:"left"},"boolean"),Object(c.b)("td",{parentName:"tr",align:"left"},"false"),Object(c.b)("td",{parentName:"tr",align:"left"},"If ",Object(c.b)("inlineCode",{parentName:"td"},"true"),", expands the accordion in the controlled mode.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:"left"},"defaultIsOpen"),Object(c.b)("td",{parentName:"tr",align:"left"},"boolean"),Object(c.b)("td",{parentName:"tr",align:"left"},"false"),Object(c.b)("td",{parentName:"tr",align:"left"},"If ",Object(c.b)("inlineCode",{parentName:"td"},"true"),", expands the accordion by on initial mount.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:"left"},"isDisabled"),Object(c.b)("td",{parentName:"tr",align:"left"},"boolean"),Object(c.b)("td",{parentName:"tr",align:"left"},"false"),Object(c.b)("td",{parentName:"tr",align:"left"},"If ",Object(c.b)("inlineCode",{parentName:"td"},"true"),", the accordion header will be disabled.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:"left"},"onChange"),Object(c.b)("td",{parentName:"tr",align:"left"},"function"),Object(c.b)("td",{parentName:"tr",align:"left"}),Object(c.b)("td",{parentName:"tr",align:"left"},"A callback fired when the accordion is expanded/collapsed.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:"left"},"children"),Object(c.b)("td",{parentName:"tr",align:"left"},"ReactNode ","|"," (RenderProps) => ReactNode"),Object(c.b)("td",{parentName:"tr",align:"left"}),Object(c.b)("td",{parentName:"tr",align:"left"},"The content of the accordion. The children must be one of the ",Object(c.b)("inlineCode",{parentName:"td"},"AccordionHeader")," and ",Object(c.b)("inlineCode",{parentName:"td"},"AccordionPanel")," components.")))),Object(c.b)("h3",null,"AccordionHeader Props"),Object(c.b)("p",null,Object(c.b)("inlineCode",{parentName:"p"},"AccordionHeader")," renders a ",Object(c.b)("inlineCode",{parentName:"p"},"button")," and composes the ",Object(c.b)("a",{parentName:"p",href:"./pseudobox"},Object(c.b)("inlineCode",{parentName:"a"},"PseudoBox"))," component, this means you can style it by passing the pseudo style props ",Object(c.b)("inlineCode",{parentName:"p"},"_disabled"),", ",Object(c.b)("inlineCode",{parentName:"p"},"_hover"),", etc."),Object(c.b)("h3",null,"AccordionPanel Props"),Object(c.b)("p",null,Object(c.b)("inlineCode",{parentName:"p"},"AccordionPanel")," renders a ",Object(c.b)("inlineCode",{parentName:"p"},"div")," and composes the ",Object(c.b)("a",{parentName:"p",href:"./collapse"},Object(c.b)("inlineCode",{parentName:"a"},"Collapse"))," component to provide the height animation."))}p.isMDXComponent=!0}},[["L9Ey",0,2,1]]]);