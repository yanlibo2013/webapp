webpackJsonp([3],{"194A":function(e,t){},"3W8Q":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});a("NYxO");var n={watch:{data:function(e){this.dialogFormVisible=e.dialogFormVisible,this.formType=e.formType}},props:{data:{type:Object,default:!1}},components:{},data:function(){return{dialogFormVisible:!1,formType:"add",form:{name:"",company:"",phone:"",password:""},formLabelWidth:"120px"}},computed:{},mounted:function(){},beforeCreate:function(){},created:function(){},beforeMount:function(){},beforeUpdate:function(){},updated:function(){},beforeDestroy:function(){},destroyed:function(){},methods:{reset:function(){this.$emit("reset","add")}}},o={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"add-from"},[a("el-dialog",{attrs:{title:"add"==e.formType?"添加属性":"编辑属性",visible:e.dialogFormVisible},on:{"update:visible":function(t){e.dialogFormVisible=t}}},[a("el-form",{attrs:{model:e.form}},[a("el-form-item",{attrs:{label:"用户","label-width":e.formLabelWidth}},[a("el-input",{attrs:{autocomplete:"off"},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"公司","label-width":e.formLabelWidth}},[a("el-input",{attrs:{autocomplete:"off"},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"手机号","label-width":e.formLabelWidth}},[a("el-input",{attrs:{autocomplete:"off"},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"密码","label-width":e.formLabelWidth}},[a("el-input",{attrs:{autocomplete:"off"},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1)],1),e._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:e.reset}},[e._v("取 消")]),e._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:e.reset}},[e._v("确 定")])],1)],1)],1)},staticRenderFns:[]};var l={watch:{},props:{},components:{addForm:a("VU/8")(n,o,!1,function(e){a("sHQp")},null,null).exports},data:function(){return{addDialogFormVisible:!1,formType:"add",tableData:[{date:"2016-05-02",name:"王小虎",address:"上海市普陀区金沙江路 1518 弄"},{date:"2016-05-04",name:"王小虎",address:"上海市普陀区金沙江路 1517 弄"},{date:"2016-05-01",name:"王小虎",address:"上海市普陀区金沙江路 1519 弄"},{date:"2016-05-03",name:"王小虎",address:"上海市普陀区金沙江路 1516 弄"}],currentPage1:5,currentPage2:5,currentPage3:5,currentPage4:4,fileList:[{name:"food.jpeg",url:"https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100"},{name:"food2.jpeg",url:"https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100"}]}},computed:{},mounted:function(){},beforeCreate:function(){},created:function(){},beforeMount:function(){},beforeUpdate:function(){},updated:function(){},beforeDestroy:function(){},destroyed:function(){},methods:{handleSizeChange:function(e){console.log("每页 "+e+" 条")},handleCurrentChange:function(e){console.log("当前页: "+e)},handleChange:function(e,t){this.fileList=t.slice(-3)},handleCreate:function(e){this.addDialogFormVisible=!0,this.formType=e},cancel:function(e){this.addDialogFormVisible=!1,this.formType=e}}},i={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"tab-page2"},[a("el-row",[a("el-col",{attrs:{span:24}},[a("div",{staticClass:"grid-content"},[a("span",[e._v("向导文件配置")])])])],1),e._v(" "),a("el-divider",{staticClass:"divider"}),e._v(" "),a("el-row",[a("el-col",{staticStyle:{"padding-right":"10px"},attrs:{span:12}},[a("el-upload",{staticClass:"upload-demo",attrs:{action:"https://jsonplaceholder.typicode.com/posts/","on-change":e.handleChange,"file-list":e.fileList}},[a("el-button",{attrs:{size:"small",type:"primary",icon:"el-icon-upload"}},[e._v("语料上传")]),e._v(" "),a("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[e._v("文件不超过500kb")])],1)],1),e._v(" "),a("el-col",{staticStyle:{"padding-left":"10px"},attrs:{span:12}},[a("el-upload",{staticClass:"upload-demo",attrs:{action:"https://jsonplaceholder.typicode.com/posts/","on-change":e.handleChange,"file-list":e.fileList}},[a("el-button",{attrs:{size:"small",type:"primary",icon:"el-icon-upload"}},[e._v("人工修正上传")]),e._v(" "),a("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[e._v("文件不超过500kb")])],1)],1)],1),e._v(" "),a("el-row",{staticStyle:{"margin-top":"40px"}},[a("el-col",{attrs:{span:24}},[a("div",{staticClass:"grid-content"},[a("span",[e._v("项目属性列表")]),e._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.handleCreate("add")}}},[e._v("添加属性")])],1)])],1),e._v(" "),a("el-divider"),e._v(" "),a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableData}},[a("el-table-column",{attrs:{label:"提交时间",width:"180"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("i",{staticClass:"el-icon-time"}),e._v(" "),a("span",{staticStyle:{"margin-left":"10px"}},[e._v(e._s(t.row.date))])]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"name",label:"项目名称",width:"180"}}),e._v(" "),a("el-table-column",{attrs:{prop:"address",label:"属性"}}),e._v(" "),a("el-table-column",{attrs:{fixed:"right",label:"操作",width:"100"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(t){return e.handleCreate("edit")}}},[e._v("编辑")]),e._v(" "),a("el-button",{attrs:{type:"text",size:"small"}},[e._v("删除")])]}}])})],1),e._v(" "),a("el-pagination",{staticStyle:{"text-align":"right"},attrs:{"current-page":e.currentPage4,"page-sizes":[100,200,300,400],"page-size":100,layout:"total, sizes, prev, pager, next, jumper",total:400},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}}),e._v(" "),a("addForm",{attrs:{data:{dialogFormVisible:e.addDialogFormVisible,formType:e.formType}},on:{reset:e.cancel}})],1)},staticRenderFns:[]};var r=a("VU/8")(l,i,!1,function(e){a("9cKB")},null,null).exports,s=(a("M4fF"),{render:function(){var e=this.$createElement;return(this._self._c||e)("h1",[this._v("向导文件")])},staticRenderFns:[]});var c=a("VU/8")({watch:{},props:{},components:{},data:function(){return{}},computed:{},mounted:function(){},beforeCreate:function(){},created:function(){},beforeMount:function(){},beforeUpdate:function(){},updated:function(){},beforeDestroy:function(){},destroyed:function(){},methods:{}},s,!1,function(e){a("CV9a")},null,null).exports,d={name:"Tab",components:{tab:r,tab2:c},data:function(){return{tabMapOptions:[{label:"项目属性",key:"tab"},{label:"向导文件",key:"tab2"}],activeName:"tab",createdTimes:0}},methods:{showCreatedTimes:function(e){},setTabTemplate:function(e){switch(e){case"tab":return r;case"tab2":return c}}}},u={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"config"},[a("el-tabs",{staticStyle:{"margin-top":"15px"},attrs:{type:"border-card"},on:{"tab-click":function(t){return e.showCreatedTimes(e.activeName)}},model:{value:e.activeName,callback:function(t){e.activeName=t},expression:"activeName"}},e._l(e.tabMapOptions,function(t){return a("el-tab-pane",{key:t.key,attrs:{label:t.label,name:t.key}},[a("keep-alive",[a(e.setTabTemplate(e.activeName),{tag:"component"})],1)],1)}),1)],1)},staticRenderFns:[]};var f=a("VU/8")(d,u,!1,function(e){a("194A")},"data-v-7d102094",null);t.default=f.exports},"9cKB":function(e,t){},CV9a:function(e,t){},sHQp:function(e,t){}});
//# sourceMappingURL=3.d8c63c43e7279f574040.js.map