import{r as s,c as i,h as t}from"./p-c38a2331.js";import{S as e}from"./p-09c2288f.js";class o{constructor(t){s(this,t),this.visible=!1,this.type="success",this.approveLabel="OK",this.confirmed=i(this,"confirmed",7)}handleConfirm(){this.confirmed.emit(),this.visible=!1}getIcon(){return this.svgIcon?this.svgIcon:e[this.type]}render(){return t("og-dialog",{class:"og-dialog--"+this.type,name:this.name,"svg-icon":this.getIcon(),visible:this.visible},t("slot",null),t("div",{slot:"footer"},t("og-button",{label:this.approveLabel,onClicked:()=>this.handleConfirm()})))}static get style(){return""}}export{o as og_message_dialog};