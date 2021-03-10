_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[36],{"A/57":function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return c}));var a=n("97Jx"),r=n.n(a),l=n("m3Bd"),o=n.n(l),i=(n("ERkP"),n("ZVZ0")),p=(n("l1C2"),{});function c(e){var t=e.components,n=o()(e,["components"]);return Object(i.b)("wrapper",r()({},p,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h1",null,"Flex"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"Flex")," is a ",Object(i.b)("a",{parentName:"p",href:"./box"},Object(i.b)("inlineCode",{parentName:"a"},"Box"))," with ",Object(i.b)("inlineCode",{parentName:"p"},"display: flex")," and comes with helpful style shorthand props."),Object(i.b)("h2",null,"Import"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js"},"import Flex from '@trendmicro/react-styled-ui/Flex';\n// or\nimport { Flex } from '@trendmicro/react-styled-ui';\n")),Object(i.b)("h2",null,"Usage"),Object(i.b)("p",null,"Flex provides the following style shorthand props:"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:"left"},"Shorthand Prop"),Object(i.b)("th",{parentName:"tr",align:"left"},"Style Prop"),Object(i.b)("th",{parentName:"tr",align:"left"},"CSS Property"),Object(i.b)("th",{parentName:"tr",align:"left"},"Description"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},"direction"),Object(i.b)("td",{parentName:"tr",align:"left"},"flexDirection"),Object(i.b)("td",{parentName:"tr",align:"left"},Object(i.b)("a",{parentName:"td",href:"https://developer.mozilla.org/en-US/docs/Web/CSS/flex-direction"},"flex-direction")),Object(i.b)("td",{parentName:"tr",align:"left"},"Sets how flex items are placed in the flex container.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},"wrap"),Object(i.b)("td",{parentName:"tr",align:"left"},"flexWrap"),Object(i.b)("td",{parentName:"tr",align:"left"},Object(i.b)("a",{parentName:"td",href:"https://developer.mozilla.org/en-US/docs/Web/CSS/flex-wrap"},"flex-wrap")),Object(i.b)("td",{parentName:"tr",align:"left"},"Sets whether flex items are forced onto one line or can wrap onto multiple lines.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},"align"),Object(i.b)("td",{parentName:"tr",align:"left"},"alignItems"),Object(i.b)("td",{parentName:"tr",align:"left"},Object(i.b)("a",{parentName:"td",href:"https://developer.mozilla.org/en-US/docs/Web/CSS/align-items"},"align-items")),Object(i.b)("td",{parentName:"tr",align:"left"},"Sets the ",Object(i.b)("inlineCode",{parentName:"td"},"align-self")," value on all direct children as a group.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},"justify"),Object(i.b)("td",{parentName:"tr",align:"left"},"justifyContent"),Object(i.b)("td",{parentName:"tr",align:"left"},Object(i.b)("a",{parentName:"td",href:"https://developer.mozilla.org/en-US/docs/Web/CSS/justify-content"},"justify-content")),Object(i.b)("td",{parentName:"tr",align:"left"},"Defines how the browser distributes space between and around content items along the main axis of a flex container.")))),Object(i.b)("h3",null,"Flex items"),Object(i.b)("p",null,"You can use the ",Object(i.b)("inlineCode",{parentName:"p"},"flex")," property to set how a flex item will grow or shrink to fit the available space in its flex container. It is a shorthand for ",Object(i.b)("inlineCode",{parentName:"p"},"flex-grow"),", ",Object(i.b)("inlineCode",{parentName:"p"},"flex-shrink"),", and ",Object(i.b)("inlineCode",{parentName:"p"},"flex-basis"),". For most purposes, you should set ",Object(i.b)("inlineCode",{parentName:"p"},"flex")," to one of the following values: ",Object(i.b)("inlineCode",{parentName:"p"},"auto"),", ",Object(i.b)("inlineCode",{parentName:"p"},"initial"),", ",Object(i.b)("inlineCode",{parentName:"p"},"none"),", or a positive unitless number."),Object(i.b)("h4",null,"Values"),Object(i.b)("h5",null,Object(i.b)("inlineCode",{parentName:"h5"},"initial")),Object(i.b)("p",null,"The item is sized according to its ",Object(i.b)("inlineCode",{parentName:"p"},"width")," and ",Object(i.b)("inlineCode",{parentName:"p"},"height")," properties. It shrinks to its minimum size to fit the container, but does not grow to absorb any extra free space in the flex container. This is equivalent to setting ",Object(i.b)("inlineCode",{parentName:"p"},"flex: 0 1 auto"),"."),Object(i.b)("h5",null,Object(i.b)("inlineCode",{parentName:"h5"},"auto")),Object(i.b)("p",null,"The item is sized according to its ",Object(i.b)("inlineCode",{parentName:"p"},"width")," and ",Object(i.b)("inlineCode",{parentName:"p"},"height")," properties, but grows to absorb any extra free space in the flex container, and shrinks to its minimum size to fit the container. This is equivalent to setting ",Object(i.b)("inlineCode",{parentName:"p"},"flex: 1 1 auto"),"."),Object(i.b)("h5",null,Object(i.b)("inlineCode",{parentName:"h5"},"none")),Object(i.b)("p",null,"The item is sized according to its ",Object(i.b)("inlineCode",{parentName:"p"},"width")," and ",Object(i.b)("inlineCode",{parentName:"p"},"height")," properties. It is fully inflexible: it neither shrinks nor grows in relation to the flex container. This is equivalent to setting ",Object(i.b)("inlineCode",{parentName:"p"},"flex: 0 0 auto"),"."),Object(i.b)("p",null,"To see the effect of these values, try resizing the flex containers below:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-jsx",metastring:"noInline",noInline:!0},'const FlexItem = (props) => (\n  <Box bg="teal:50" border={1} borderColor="teal:60" p="3x" mr="4x" mb="4x" {...props} />\n);\n\nfunction Example() {\n  return (\n    <>\n      <Flex bg="gray:10" p="4x" pb={0} pr={0} mb="4x">\n        <FlexItem flex="auto">auto</FlexItem>\n        <FlexItem flex="auto">auto</FlexItem>\n        <FlexItem flex="auto">auto</FlexItem>\n      </Flex>\n      <Flex bg="gray:10" p="4x" pb={0} pr={0} mb="4x">\n        <FlexItem flex="auto">auto</FlexItem>\n        <FlexItem flex="initial">initial</FlexItem>\n        <FlexItem flex="initial">initial</FlexItem>\n      </Flex>\n      <Flex bg="gray:10" p="4x" pb={0} pr={0} mb="4x">\n        <FlexItem flex="auto">auto</FlexItem>\n        <FlexItem flex="auto">auto</FlexItem>\n        <FlexItem flex="none">none</FlexItem>\n      </Flex>\n      <Flex bg="gray:10" p="4x" pb={0} pr={0} mb="4x">\n        <FlexItem flex="initial">initial</FlexItem>\n        <FlexItem flex="none">none</FlexItem>\n        <FlexItem flex="none">none</FlexItem>\n      </Flex>\n      <Flex bg="gray:10" p="4x" pb={0} pr={0}>\n        <FlexItem flex={4}>4</FlexItem>\n        <FlexItem flex={2}>2</FlexItem>\n        <FlexItem flex={1}>1</FlexItem>\n      </Flex>\n    </>\n  );\n}\n\nrender(<Example />);\n')),Object(i.b)("h3",null,"The ",Object(i.b)("inlineCode",{parentName:"h3"},"direction")," (",Object(i.b)("inlineCode",{parentName:"h3"},"flexDirection"),") property"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-jsx",metastring:"noInline",noInline:!0},'const FlexItem = (props) => (\n  <Box bg="teal:50" border={1} borderColor="teal:60" p="3x" mr="4x" mb="4x" {...props} />\n);\n\nfunction Example() {\n  const [value, setValue] = React.useState(\'row\');\n\n  return (\n    <>\n      <Stack direction="row" spacing=".5rem" mb="4x">\n        <Button variant="outline" onClick={() => setValue(\'row\')}>row</Button>\n        <Button variant="outline" onClick={() => setValue(\'row-reverse\')}>row-reverse</Button>\n        <Button variant="outline" onClick={() => setValue(\'column\')}>column</Button>\n        <Button variant="outline" onClick={() => setValue(\'column-reverse\')}>column-reverse</Button>\n      </Stack>\n      <pre>\n        {`<Flex direction="${value}">`}\n      </pre>\n      <Flex direction={value} bg="gray:10" p="4x" pb={0} pr={0}>\n        <FlexItem flex="auto">One</FlexItem>\n        <FlexItem flex="auto">Two</FlexItem>\n        <FlexItem flex="auto">Three</FlexItem>\n      </Flex>\n    </>\n  );\n}\n\nrender(<Example />);\n')),Object(i.b)("h3",null,"The ",Object(i.b)("inlineCode",{parentName:"h3"},"wrap")," (",Object(i.b)("inlineCode",{parentName:"h3"},"flexWrap"),") property"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-jsx",metastring:"noInline",noInline:!0},'const FlexItem = (props) => (\n  <Box bg="teal:50" border={1} borderColor="teal:60" p="3x" mr="4x" mb="4x" {...props} />\n);\n\nfunction Example() {\n  const [value, setValue] = React.useState(\'nowrap\');\n\n  return (\n    <>\n      <Stack direction="row" spacing=".5rem" mb="4x">\n        <Button variant="outline" onClick={() => setValue(\'nowrap\')}>nowrap</Button>\n        <Button variant="outline" onClick={() => setValue(\'wrap\')}>wrap</Button>\n        <Button variant="outline" onClick={() => setValue(\'wrap-reverse\')}>wrap-reverse</Button>\n      </Stack>\n      <pre>\n        {`<Flex wrap="${value}">`}\n      </pre>\n      <Flex wrap={value} width={480} bg="gray:10" p="4x" pb={0} pr={0}>\n        <FlexItem flex="auto" minWidth={120}>One</FlexItem>\n        <FlexItem flex="auto" minWidth={120}>Two</FlexItem>\n        <FlexItem flex="auto" minWidth={120}>Three</FlexItem>\n        <FlexItem flex="auto" minWidth={120}>Four</FlexItem>\n        <FlexItem flex="auto" minWidth={120}>Five</FlexItem>\n        <FlexItem flex="auto" minWidth={120}>Six</FlexItem>\n      </Flex>\n    </>\n  );\n}\n\nrender(<Example />);\n')),Object(i.b)("h3",null,"The ",Object(i.b)("inlineCode",{parentName:"h3"},"align")," (",Object(i.b)("inlineCode",{parentName:"h3"},"alignItems"),") property"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-jsx",metastring:"noInline",noInline:!0},'const FlexItem = (props) => (\n  <Box bg="teal:50" border={1} borderColor="teal:60" p="3x" mr="4x" mb="4x" {...props} />\n);\n\nfunction Example() {\n  const [value, setValue] = React.useState(\'stretch\');\n\n  return (\n    <>\n      <Stack direction="row" spacing=".5rem" mb="4x">\n        <Button variant="outline" onClick={() => setValue(\'stretch\')}>stretch</Button>\n        <Button variant="outline" onClick={() => setValue(\'flex-start\')}>flex-start</Button>\n        <Button variant="outline" onClick={() => setValue(\'center\')}>center</Button>\n        <Button variant="outline" onClick={() => setValue(\'flex-end\')}>flex-end</Button>\n      </Stack>\n      <pre>\n        {`<Flex align="${value}">`}\n      </pre>\n      <Flex align={value} height={240} bg="gray:10" p="4x" pb={0} pr={0}>\n        <FlexItem flex="auto">One</FlexItem>\n        <FlexItem flex="auto">Two</FlexItem>\n        <FlexItem flex="auto">Three</FlexItem>\n      </Flex>\n    </>\n  );\n}\n\nrender(<Example />);\n')),Object(i.b)("h3",null,"The ",Object(i.b)("inlineCode",{parentName:"h3"},"justify")," (",Object(i.b)("inlineCode",{parentName:"h3"},"justifyContent"),") property"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-jsx",metastring:"noInline",noInline:!0},'const FlexItem = (props) => (\n  <Box bg="teal:50" border={1} borderColor="teal:60" p="3x" mr="4x" mb="4x" {...props} />\n);\n\nfunction Example() {\n  const [value, setValue] = React.useState(\'start\');\n\n  return (\n    <>\n      <Stack direction="row" spacing=".5rem" mb="4x">\n        <Button variant="outline" onClick={() => setValue(\'flex-start\')}>flex-start</Button>\n        <Button variant="outline" onClick={() => setValue(\'center\')}>center</Button>\n        <Button variant="outline" onClick={() => setValue(\'flex-end\')}>flex-end</Button>\n        <Button variant="outline" onClick={() => setValue(\'space-between\')}>space-between</Button>\n        <Button variant="outline" onClick={() => setValue(\'space-around\')}>space-around</Button>\n        <Button variant="outline" onClick={() => setValue(\'space-evenly\')}>space-evenly</Button>\n      </Stack>\n      <pre>\n        {`<Flex justify="${value}">`}\n      </pre>\n      <Flex justify={value} bg="gray:10" p="4x" pb={0} pr={0}>\n        <FlexItem>One</FlexItem>\n        <FlexItem>Two</FlexItem>\n        <FlexItem>Three</FlexItem>\n      </Flex>\n    </>\n  );\n}\n\nrender(<Example />);\n')))}c.isMDXComponent=!0},ZVZ0:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return x}));var a=n("ERkP"),r=n.n(a);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=r.a.createContext({}),b=function(e){var t=r.a.useContext(c),n=t;return e&&(n="function"===typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=b(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},s=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=b(n),s=a,x=u["".concat(o,".").concat(s)]||u[s]||m[s]||l;return n?r.a.createElement(x,i(i({ref:t},c),{},{components:n})):r.a.createElement(x,i({ref:t},c))}));function x(e,t){var n=arguments,a=t&&t.mdxType;if("string"===typeof e||a){var l=n.length,o=new Array(l);o[0]=s;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"===typeof e?e:a,o[1]=i;for(var c=2;c<l;c++)o[c]=n[c];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},tVgc:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/flex",function(){return n("A/57")}])}},[["tVgc",0,2,1]]]);