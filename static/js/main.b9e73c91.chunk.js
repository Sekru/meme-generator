(this["webpackJsonpmeme-generator"]=this["webpackJsonpmeme-generator"]||[]).push([[0],[,,,,,,,,function(e,t,o){e.exports=o(19)},,,,,function(e,t,o){},function(e,t,o){},function(e,t,o){},function(e,t,o){},function(e,t,o){},function(e,t,o){},function(e,t,o){"use strict";o.r(t);var a=o(0),n=o.n(a),l=o(7),i=o.n(l),r=(o(13),o(14),o(2)),s=o(3),c=o(1),p=o(5),m=o(4),h=(o(15),o(16),function(e){Object(p.a)(o,e);var t=Object(m.a)(o);function o(){return Object(r.a)(this,o),t.apply(this,arguments)}return Object(s.a)(o,[{key:"render",value:function(){return n.a.createElement("div",{className:"fields"},n.a.createElement("input",{onChange:this.props.handleTopText,id:"top-text",placeholder:"Wpisz g\xf3rny tekst..."}),n.a.createElement("input",{onChange:this.props.handleBottomText,id:"bottom-text",placeholder:"Wpisz dolny tekst..."}))}}]),o}(n.a.Component)),d=(o(17),function(e){Object(p.a)(o,e);var t=Object(m.a)(o);function o(){return Object(r.a)(this,o),t.apply(this,arguments)}return Object(s.a)(o,[{key:"render",value:function(){return n.a.createElement("div",{className:"field"},n.a.createElement("input",{type:"number",onChange:this.props.handleSizeTop,value:this.props.sizeTop,id:"size-top",placeholder:"25px",min:"0"}),n.a.createElement("input",{type:"number",onChange:this.props.handleSizeBottom,value:this.props.sizeBottom,id:"size-bottom",placeholder:"25px",min:"0"}))}}]),o}(n.a.Component)),u=(o(18),function(e){Object(p.a)(o,e);var t=Object(m.a)(o);function o(){return Object(r.a)(this,o),t.apply(this,arguments)}return Object(s.a)(o,[{key:"render",value:function(){return n.a.createElement("div",{className:"field"},n.a.createElement("input",{type:"color",onChange:this.props.handleColorTop,value:this.props.colorTop,id:"color-top"}),n.a.createElement("input",{type:"color",onChange:this.props.handleColorBottom,value:this.props.colorBottom,id:"color-bottom"}))}}]),o}(n.a.Component)),T=function(e){Object(p.a)(o,e);var t=Object(m.a)(o);function o(e){var a;return Object(r.a)(this,o),(a=t.call(this,e)).state={altText:!0,file:null,sizeTop:25,sizeBottom:25,colorTop:"rgb(0, 0, 0)",colorBottom:"rgb(0, 0, 0)"},a.showImage=function(e){a.setState({altText:!1,file:URL.createObjectURL(e.target.files[0])})},a.handleTopText=function(e){a.setState({topText:e.target.value})},a.handleColorTop=function(e){a.setState({colorTop:e.target.value})},a.handleColorBottom=function(e){a.setState({colorBottom:e.target.value})},a.handleBottomText=function(e){a.setState({bottomText:e.target.value})},a.handleSizeTop=function(e){a.setState({sizeTop:e.target.value})},a.handleSizeBottom=function(e){a.setState({sizeBottom:e.target.value})},a.handleTopText=a.handleTopText.bind(Object(c.a)(a)),a.handleBottomText=a.handleBottomText.bind(Object(c.a)(a)),a.handleSizeTop=a.handleSizeTop.bind(Object(c.a)(a)),a.handleSizeBottom=a.handleSizeBottom.bind(Object(c.a)(a)),a.handleColorTop=a.handleColorTop.bind(Object(c.a)(a)),a.handleColorBottom=a.handleColorBottom.bind(Object(c.a)(a)),a}return Object(s.a)(o,[{key:"render",value:function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"border"},this.state.file?n.a.createElement("div",{className:"meme-container"},n.a.createElement("span",{style:{fontSize:this.state.sizeTop+"px",color:this.state.colorTop},id:"top-meme-text"},this.state.topText),n.a.createElement("img",{alt:"Mem",src:this.state.file}),n.a.createElement("span",{style:{fontSize:this.state.sizeBottom+"px",color:this.state.colorBottom},id:"bottom-meme-text"},this.state.bottomText)):n.a.createElement("div",{className:"image-container"},n.a.createElement("p",null,"Dodaj Obrazek"),n.a.createElement("input",{type:"file",id:"memUpload",onChange:this.showImage})),n.a.createElement(h,{handleTopText:this.handleTopText,handleBottomText:this.handleBottomText}),n.a.createElement(d,{handleSizeTop:this.handleSizeTop,handleSizeBottom:this.handleSizeBottom,sizeTop:this.state.sizeTop,sizeBottom:this.state.sizeBottom}),n.a.createElement(u,{handleColorTop:this.handleColorTop,handleColorBottom:this.handleColorBottom,colorTop:this.state.colorTop,colorBottom:this.state.colorBottom})))}}]),o}(n.a.Component),b=function(){return n.a.createElement("div",{className:"app"},n.a.createElement(T,null))};i.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(b,null)),document.getElementById("root"))}],[[8,1,2]]]);
//# sourceMappingURL=main.b9e73c91.chunk.js.map