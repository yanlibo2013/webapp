webpackJsonp([7],{"+oD+":function(t,e){},E7wo:function(t,e){},u13G:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a={watch:{data:function(t){this.dialogFormVisible=t.dialogFormVisible}},props:{data:{type:Object,default:!1}},components:{},data:function(){return{dialogFormVisible:!1,form:{name:"",region:"",date1:"",date2:"",delivery:!1,type:[],resource:"",desc:""},formLabelWidth:"120px"}},computed:{},mounted:function(){},beforeCreate:function(){},created:function(){},beforeMount:function(){},beforeUpdate:function(){},updated:function(){},beforeDestroy:function(){},destroyed:function(){},methods:{cancel:function(){this.$emit("showDialog",!1)},confirm:function(){this.$emit("showDialog",!1)},closeDialog:function(){this.$emit("showDialog",!1)}}},l={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"data-pub-dialog"},[o("el-dialog",{directives:[{name:"dialog-drag",rawName:"v-dialog-drag"}],attrs:{title:"字段映射",visible:t.dialogFormVisible,width:"70%"},on:{"update:visible":function(e){t.dialogFormVisible=e},closed:t.closeDialog}},[o("el-form",{attrs:{model:t.form}},[o("el-row",[o("el-col",{attrs:{span:12}},[o("el-row",{staticClass:"el-row-pub"},[o("el-col",{attrs:{span:8}},[o("div",{staticClass:"grid-content "},[t._v("字段")])]),t._v(" "),o("el-col",{attrs:{span:8}},[o("div",{staticClass:"grid-content "},[t._v("映射字段")])]),t._v(" "),o("el-col",{attrs:{span:8}},[o("div",{staticClass:"grid-content el-row-pub"},[o("el-input",{staticStyle:{"margin-right":"10px"},attrs:{autocomplete:"off"},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}})],1)])],1)],1),t._v(" "),o("el-col",{staticClass:"el-col-pub",attrs:{span:12}},[o("el-row",[o("el-col",{attrs:{span:8}},[o("div",{staticClass:"grid-content el-row-pub"},[t._v("字段")])]),t._v(" "),o("el-col",{attrs:{span:8}},[o("div",{staticClass:"grid-content "},[t._v("映射字段")])]),t._v(" "),o("el-col",{attrs:{span:8}},[o("div",{staticClass:"grid-content "},[o("el-input",{attrs:{autocomplete:"off"},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}})],1)])],1)],1)],1)],1),t._v(" "),o("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[o("el-button",{on:{click:function(e){t.dialogFormVisible=!1}}},[t._v("取 消")]),t._v(" "),o("el-button",{attrs:{type:"primary"},on:{click:function(e){t.dialogFormVisible=!1}}},[t._v("确 定")])],1)],1)],1)},staticRenderFns:[]};var i={metaInfo:{title:"数据发布",htmlAttrs:{lang:"en",amp:!0}},components:{publishDialog:o("C7Lr")(a,l,!1,function(t){o("E7wo")},null,null).exports},data:function(){return{form:{name:"",region:"",date1:"",date2:"",delivery:!1,type:[],resource:"",desc:""},dialogFormVisible:!1}},computed:{},mounted:function(){},beforeCreate:function(){},created:function(){},beforeMount:function(){},beforeUpdate:function(){},updated:function(){},beforeDestroy:function(){},destroyed:function(){},methods:{onSubmit:function(){},showDialog:function(t){this.dialogFormVisible=t}}},n={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"data-pub"},[o("el-divider",{attrs:{"content-position":"left"}},[t._v("数据发布")]),t._v(" "),o("el-form",{ref:"form",staticClass:"el-form-pub",attrs:{model:t.form,"label-width":"80px"}},[o("el-form-item",{staticClass:"el-form-item",attrs:{label:"数据集"}},[o("el-input",{model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}})],1),t._v(" "),o("el-form-item",{attrs:{label:"服务类型"}},[o("el-select",{attrs:{placeholder:"请选择活动区域"},model:{value:t.form.region,callback:function(e){t.$set(t.form,"region",e)},expression:"form.region"}},[o("el-option",{attrs:{label:"区域一",value:"shanghai"}}),t._v(" "),o("el-option",{attrs:{label:"区域二",value:"beijing"}})],1)],1),t._v(" "),o("el-form-item",{attrs:{label:"服务方式"}},[o("el-checkbox-group",{model:{value:t.form.type,callback:function(e){t.$set(t.form,"type",e)},expression:"form.type"}},[o("el-checkbox",{attrs:{label:"美食/餐厅线上活动",name:"type"}}),t._v(" "),o("el-checkbox",{attrs:{label:"地推活动",name:"type"}}),t._v(" "),o("el-checkbox",{attrs:{label:"线下主题活动",name:"type"}}),t._v(" "),o("el-checkbox",{attrs:{label:"单纯品牌曝光",name:"type"}})],1)],1),t._v(" "),o("el-form-item",{attrs:{label:"字段映射"}},[o("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(e){return t.showDialog(!0)}}},[t._v("编辑")])],1),t._v(" "),o("el-form-item",{attrs:{label:"有效期"}},[o("el-col",{attrs:{span:11}},[o("el-date-picker",{staticStyle:{width:"100%"},attrs:{type:"date",placeholder:"选择日期"},model:{value:t.form.date1,callback:function(e){t.$set(t.form,"date1",e)},expression:"form.date1"}})],1),t._v(" "),o("el-col",{staticClass:"line",attrs:{span:2}},[t._v("-")]),t._v(" "),o("el-col",{attrs:{span:11}},[o("el-time-picker",{staticStyle:{width:"100%"},attrs:{placeholder:"选择时间"},model:{value:t.form.date2,callback:function(e){t.$set(t.form,"date2",e)},expression:"form.date2"}})],1)],1),t._v(" "),o("el-form-item",{staticClass:"el-form-item-last"},[o("el-button",{attrs:{type:"primary"},on:{click:t.onSubmit}},[t._v("确定")]),t._v(" "),o("el-button",[t._v("取消")])],1)],1),t._v(" "),o("publishDialog",{attrs:{data:{dialogFormVisible:t.dialogFormVisible}},on:{showDialog:t.showDialog}})],1)},staticRenderFns:[]};var r=o("C7Lr")(i,n,!1,function(t){o("+oD+")},null,null);e.default=r.exports}});
//# sourceMappingURL=7.a39d16029ac062f7a6d2.js.map