"use strict";(self["webpackChunkweweb_front"]=self["webpackChunkweweb_front"]||[]).push([[737],{1803:(t,e,n)=>{n.d(e,{A:()=>l});var a=n(641),o=n(33);function i(t,e,n,i,s,c){const u=(0,a.g2)("wwElement",!0),d=(0,a.g2)("wwText");return(0,a.uX)(),(0,a.Wv)((0,a.$y)(c.tag),(0,a.v6)({class:["ww-button",{button:c.tag,"-link":i.hasLink&&!c.isEditing}],type:c.buttonType,style:c.buttonStyle,"data-ww-flag":"btn-"+n.content.buttonType,disabled:n.content.disabled},i.properties,{onFocus:e[0]||(e[0]=t=>s.isReallyFocused=!0),onBlur:e[1]||(e[1]=t=>c.onBlur(t))}),{default:(0,a.k6)((()=>[n.content.hasLeftIcon&&n.content.leftIcon?((0,a.uX)(),(0,a.Wv)(u,(0,o._B)((0,a.v6)({key:0},n.content.leftIcon)),null,16)):(0,a.Q3)("",!0),(0,a.bF)(d,{tag:"span",text:c.text},null,8,["text"]),n.content.hasRightIcon&&n.content.rightIcon?((0,a.uX)(),(0,a.Wv)(u,(0,o._B)((0,a.v6)({key:1},n.content.rightIcon)),null,16)):(0,a.Q3)("",!0)])),_:1},16,["class","type","style","data-ww-flag","disabled"])}const s={center:"center",right:"flex-end",left:"flex-start",justify:"center"},c={props:{content:{type:Object,required:!0},wwFrontState:{type:Object,required:!0},wwElementState:{type:Object,required:!0}},emits:["update:content","update:content:effect","change-menu-visibility","change-borders-style","add-state","remove-state","trigger-event"],setup(t){const{hasLink:e,tag:n,properties:o}=wwLib.wwElement.useLink({isDisabled:(0,a.EW)((()=>t.content.disabled))});return{hasLink:e,linkTag:n,properties:o}},data(){return{isReallyFocused:!1}},computed:{buttonStyle(){return{justifyContent:s[this.content["_ww-text_textAlign"]]||"center"}},isEditing(){return!1},tag(){return this.isEditing?"div":this.hasLink?this.linkTag:"submit"===this.content.buttonType||"reset"===this.content.buttonType||"button"===this.content.buttonType?"button":"div"},buttonType(){return this.isEditing||this.hasLink?"":"submit"===this.content.buttonType||"reset"===this.content.buttonType||"button"===this.content.buttonType?this.content.buttonType:""},text(){return this.wwElementState.props.text},isFocused(){return this.isReallyFocused}},watch:{"content.disabled":{immediate:!0,handler(t){t?this.$emit("add-state","disabled"):this.$emit("remove-state","disabled")}},isReallyFocused(t,e){t&&!e?this.$emit("trigger-event",{name:"focus"}):!t&&e&&this.$emit("trigger-event",{name:"blur"})},isFocused:{immediate:!0,handler(t){t?this.$emit("add-state","focus"):this.$emit("remove-state","focus")}}},methods:{onBlur(){this.isReallyFocused=!1}}};var u=n(6262);const d=(0,u.A)(c,[["render",i],["__scopeId","data-v-1cc6eeab"]]),l=d},3100:(t,e,n)=>{n.d(e,{A:()=>r});var a=n(641),o=n(33),i=n(3751);const s=["name","autocomplete"];function c(t,e,n,c,u,d){const l=(0,a.g2)("wwLayout");return(0,a.uX)(),(0,a.CE)("form",{name:d.formName,autocomplete:n.content.autocomplete,class:(0,o.C4)(["ww-form-container",{editing:d.isEditing,selected:d.isSelected}]),"data-ww-flag":"form-container",onSubmit:e[0]||(e[0]=(0,i.D$)(((...t)=>d.onSubmit&&d.onSubmit(...t)),["prevent"]))},[(0,a.bF)(l,{class:"ww-form-container__content",path:"formContent","ww-responsive":"wwLayout"})],42,s)}const u={props:{content:{type:Object,required:!0},wwElementState:{type:Object,required:!0}},emits:["trigger-event"],computed:{formName(){return this.wwElementState.name},isEditing(){return!1},isSelected(){return!1}},methods:{async onSubmit(){this.$emit("trigger-event",{name:"submit"})}}};var d=n(6262);const l=(0,d.A)(u,[["render",c],["__scopeId","data-v-99bfa12c"]]),r=l},4901:(t,e,n)=>{n.r(e);var a=n(7881),o=n(7613),i=n(8990),s=n(3100),c=n(1803),u=n(2256),d=n(3611),l=n(325),r=n(7330),b=n(1236),m=n(4913);a.A.component("wwobject-3a7d6379-12d3-4387-98ff-b332bb492a63",o.A),a.A.component("wwobject-53401515-b694-4c79-a88d-abeecb1de562",i.A),a.A.component("wwobject-69d0b3ef-b265-494c-8cd1-874da4aa1834",s.A),a.A.component("wwobject-6f8796b1-8273-498d-95fc-7013b7c63214",c.A),a.A.component("wwobject-83d890fb-84f9-4386-b459-fb4be89a8e15",u.A),a.A.component("wwobject-aeb78b9a-6fb6-4c49-931d-faedcfad67ba",d.A),a.A.component("wwobject-b783dc65-d528-4f74-8c14-e27c934c39b1",l.A),a.A.component("wwobject-d7904e9d-fc9a-4d80-9e32-728e097879ad",r.A),a.A.component("section-99586bd3-2b15-4d6b-a025-6a50d07ca845",b.A),a.A.component("section-ef0ecc71-9a59-4eab-94b0-b36d66d3d61d",m.A)},8990:(t,e,n)=>{n.d(e,{A:()=>g});var a=n(641),o=n(3751);const i={class:"ww-expand"},s={key:0,class:"unactive-toggle"},c={key:0,class:"label unactive label-xs normal"},u={key:1,class:"active-toggle"},d={key:0,class:"label active label-xs normal"},l={class:"content"},r={key:0,class:"label content label-xs normal"};function b(t,e,n,b,m,p){const w=(0,a.g2)("wwLayout"),g=(0,a.g2)("wwExpandTransition");return(0,a.uX)(),(0,a.CE)("div",i,[(0,a.Lk)("div",{class:"toggle-container",onClick:e[0]||(e[0]=t=>p.handleManualInput(t))},[!p.value||m.editLayout?((0,a.uX)(),(0,a.CE)("div",s,[m.editLayout?((0,a.uX)(),(0,a.CE)("div",c,"closed")):(0,a.Q3)("",!0),(0,a.bF)(w,{class:"layout toggle-layout",path:"activeToggleLayout"})])):(0,a.Q3)("",!0),p.value||m.editLayout?((0,a.uX)(),(0,a.CE)("div",u,[m.editLayout?((0,a.uX)(),(0,a.CE)("div",d,"opened")):(0,a.Q3)("",!0),(0,a.bF)(w,{class:"layout toggle-layout",path:"toggleLayout"})])):(0,a.Q3)("",!0)]),(0,a.bF)(g,null,{default:(0,a.k6)((()=>[(0,a.bo)((0,a.Lk)("div",l,[m.editLayout?((0,a.uX)(),(0,a.CE)("div",r,"content")):(0,a.Q3)("",!0),(0,a.bF)(w,{class:"layout content-layout",path:"contentLayout"})],512),[[o.aG,p.value||p.isEditing]])])),_:1})])}const m={props:{content:{type:Object,required:!0},uid:{type:String,required:!0},wwElementState:{type:Object,required:!0}},data(){return{editLayout:!1}},emits:["update:content:effect","trigger-event","add-state","remove-state"],setup(t){const{value:e,setValue:n}=wwLib.wwVariable.useComponentVariable({uid:t.uid,name:"value",type:"boolean",defaultValue:(0,a.EW)((()=>void 0!==t.content.value&&t.content.value))});return{variableValue:e,setValue:n}},computed:{isEditing(){return!1},value(){return!!this.variableValue}},watch:{"content.value"(t){t=!!t,t!==this.value&&(this.setValue(t),this.$emit("trigger-event",{name:"initValueChange",event:{value:t}}))},isEditing(){this.editLayout=!1}},mounted(){this.editLayout=!1},beforeUnmount(){this.editLayout=!1},methods:{handleManualInput(t){if(this.isEditing)return;const e=!this.value;this.setValue(e),this.$emit("trigger-event",{name:"change",event:{domEvent:t,value:e}})},toggleEdit(){this.editLayout=!this.editLayout}}};var p=n(6262);const w=(0,p.A)(m,[["render",b],["__scopeId","data-v-e11e76fe"]]),g=w}}]);