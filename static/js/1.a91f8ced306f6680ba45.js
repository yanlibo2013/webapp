webpackJsonp([1],{"G+XF":function(e,t){},jedD:function(e,t){},md3T:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});a("NYxO");var n={watch:{data:function(e){this.dialogFormVisible=e.dialogFormVisible,this.formType=e.formType}},props:{data:{type:Object,default:!1}},components:{},data:function(){return{dialogFormVisible:!1,formType:"add",form:{name:"",company:"",phone:"",password:""},formLabelWidth:"120px"}},computed:{},mounted:function(){},beforeCreate:function(){},created:function(){},beforeMount:function(){},beforeUpdate:function(){},updated:function(){},beforeDestroy:function(){},destroyed:function(){},methods:{reset:function(){this.$emit("reset","add")}}},o={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"add-from"},[a("el-dialog",{attrs:{title:"add"==e.formType?"添加用户":"编辑用户",visible:e.dialogFormVisible},on:{"update:visible":function(t){e.dialogFormVisible=t}}},[a("el-form",{attrs:{model:e.form}},[a("el-form-item",{attrs:{label:"用户","label-width":e.formLabelWidth}},[a("el-input",{attrs:{autocomplete:"off"},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"公司","label-width":e.formLabelWidth}},[a("el-input",{attrs:{autocomplete:"off"},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"手机号","label-width":e.formLabelWidth}},[a("el-input",{attrs:{autocomplete:"off"},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"密码","label-width":e.formLabelWidth}},[a("el-input",{attrs:{autocomplete:"off"},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1)],1),e._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:e.reset}},[e._v("取 消")]),e._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:e.reset}},[e._v("确 定")])],1)],1)],1)},staticRenderFns:[]};var r={watch:{},props:{},components:{addForm:a("VU/8")(n,o,!1,function(e){a("jedD")},null,null).exports},data:function(){return{addDialogFormVisible:!1,formType:"add",formInline:{user:"",region:""},tableData:[{date:"2016-05-02",name:"王小虎",address:"上海市普陀区金沙江路 1518 弄"},{date:"2016-05-04",name:"王小虎",address:"上海市普陀区金沙江路 1517 弄"},{date:"2016-05-01",name:"王小虎",address:"上海市普陀区金沙江路 1519 弄"},{date:"2016-05-03",name:"王小虎",address:"上海市普陀区金沙江路 1516 弄"}],currentPage1:5,currentPage2:5,currentPage3:5,currentPage4:4}},computed:{},mounted:function(){},beforeCreate:function(){},created:function(){},beforeMount:function(){},beforeUpdate:function(){},updated:function(){},beforeDestroy:function(){},destroyed:function(){},methods:{onSubmit:function(){console.log("submit!")},resetForm:function(e){},handleSizeChange:function(e){console.log("每页 "+e+" 条")},handleCurrentChange:function(e){console.log("当前页: "+e)},handleCreate:function(e){this.addDialogFormVisible=!0,this.formType=e},cancel:function(e){this.addDialogFormVisible=!1,this.formType=e}}},l={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"tab-page"},[a("el-row",[a("el-col",{attrs:{span:24}},[a("div",{staticClass:"grid-content"},[a("span",[e._v("用户筛选")]),e._v(" "),a("el-button",{attrs:{type:"primary",icon:"el-icon-edit"},on:{click:function(t){return e.handleCreate("add")}}},[e._v("添加")])],1)])],1),e._v(" "),a("el-divider",{staticClass:"divider"}),e._v(" "),a("el-form",{staticClass:"form-inline",attrs:{inline:!0,model:e.formInline}},[a("el-form-item",{attrs:{label:"用户"}},[a("el-input",{attrs:{placeholder:"用户"},model:{value:e.formInline.user,callback:function(t){e.$set(e.formInline,"user",t)},expression:"formInline.user"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"手机号"}},[a("el-input",{attrs:{placeholder:"手机号"},model:{value:e.formInline.region,callback:function(t){e.$set(e.formInline,"region",t)},expression:"formInline.region"}})],1),e._v(" "),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:e.onSubmit}},[e._v("查询")]),e._v(" "),a("el-button",{on:{click:function(t){return e.resetForm("ruleForm")}}},[e._v("重置")])],1)],1),e._v(" "),a("el-row",[a("el-col",{attrs:{span:24}},[a("div",{staticClass:"grid-content"},[a("span",[e._v("用户列表")]),e._v(" "),a("el-button",{attrs:{type:"primary",icon:"el-icon-download"}},[e._v("导出")])],1)])],1),e._v(" "),a("el-divider"),e._v(" "),a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableData}},[a("el-table-column",{attrs:{label:"提交时间",width:"180"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("i",{staticClass:"el-icon-time"}),e._v(" "),a("span",{staticStyle:{"margin-left":"10px"}},[e._v(e._s(t.row.date))])]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"name",label:"项目名称",width:"180"}}),e._v(" "),a("el-table-column",{attrs:{prop:"address",label:"属性"}}),e._v(" "),a("el-table-column",{attrs:{fixed:"right",label:"操作",width:"100"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(t){return e.handleCreate("edit")}}},[e._v("编辑")]),e._v(" "),a("el-button",{attrs:{type:"text",size:"small"}},[e._v("删除")])]}}])})],1),e._v(" "),a("el-pagination",{staticStyle:{"text-align":"right"},attrs:{"current-page":e.currentPage4,"page-sizes":[100,200,300,400],"page-size":100,layout:"total, sizes, prev, pager, next, jumper",total:400},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}}),e._v(" "),a("addForm",{attrs:{data:{dialogFormVisible:e.addDialogFormVisible,formType:e.formType}},on:{reset:e.cancel}})],1)},staticRenderFns:[]};var i=a("VU/8")(r,l,!1,function(e){a("qgji")},null,null).exports,s={watch:{},props:{},components:{},data:function(){return{tableData:[{date:"2016-05-02",name:"王小虎",address:"上海市普陀区金沙江路 1518 弄"},{date:"2016-05-04",name:"王小虎",address:"上海市普陀区金沙江路 1517 弄"},{date:"2016-05-01",name:"王小虎",address:"上海市普陀区金沙江路 1519 弄"},{date:"2016-05-03",name:"王小虎",address:"上海市普陀区金沙江路 1516 弄"}],currentPage1:5,currentPage2:5,currentPage3:5,currentPage4:4}},computed:{},mounted:function(){},beforeCreate:function(){},created:function(){},beforeMount:function(){},beforeUpdate:function(){},updated:function(){},beforeDestroy:function(){},destroyed:function(){},methods:{handleSizeChange:function(e){console.log("每页 "+e+" 条")},handleCurrentChange:function(e){console.log("当前页: "+e)}}},c={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"tab-page2"},[a("el-row",[a("el-col",{attrs:{span:24}},[a("div",{staticClass:"grid-content"},[a("span",[e._v("待审批列表")]),e._v(" "),a("el-button",{attrs:{type:"primary",icon:"el-icon-download"}},[e._v("导出")])],1)])],1),e._v(" "),a("el-divider"),e._v(" "),a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableData}},[a("el-table-column",{attrs:{label:"提交时间",width:"180"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("i",{staticClass:"el-icon-time"}),e._v(" "),a("span",{staticStyle:{"margin-left":"10px"}},[e._v(e._s(t.row.date))])]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"name",label:"项目名称",width:"180"}}),e._v(" "),a("el-table-column",{attrs:{prop:"address",label:"属性"}}),e._v(" "),a("el-table-column",{attrs:{fixed:"right",label:"操作",width:"100"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{type:"text",size:"small"}},[e._v("通过")]),e._v(" "),a("el-button",{attrs:{type:"text",size:"small"}},[e._v("拒绝")])]}}])})],1),e._v(" "),a("el-pagination",{staticStyle:{"text-align":"right"},attrs:{"current-page":e.currentPage4,"page-sizes":[100,200,300,400],"page-size":100,layout:"total, sizes, prev, pager, next, jumper",total:400},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1)},staticRenderFns:[]};var d=a("VU/8")(s,c,!1,function(e){a("G+XF")},null,null).exports,u={name:"Tab",components:{tab:i,tab2:d},data:function(){return{tabMapOptions:[{label:"用户",key:"tab"},{label:"待审批",key:"tab2"}],activeName:"tab",createdTimes:0}},methods:{showCreatedTimes:function(e){},setTabTemplate:function(e){switch(e){case"tab":return i;case"tab2":return d}}}},m={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"user"},[a("el-tabs",{staticStyle:{"margin-top":"15px"},attrs:{type:"border-card"},on:{"tab-click":function(t){return e.showCreatedTimes(e.activeName)}},model:{value:e.activeName,callback:function(t){e.activeName=t},expression:"activeName"}},e._l(e.tabMapOptions,function(t){return a("el-tab-pane",{key:t.key,attrs:{label:t.label,name:t.key}},[a("keep-alive",[a(e.setTabTemplate(e.activeName),{tag:"component"})],1)],1)}),1)],1)},staticRenderFns:[]};var f=a("VU/8")(u,m,!1,function(e){a("poG/")},"data-v-5def9a94",null);t.default=f.exports},"poG/":function(e,t){},qgji:function(e,t){}});
//# sourceMappingURL=1.a91f8ced306f6680ba45.js.map