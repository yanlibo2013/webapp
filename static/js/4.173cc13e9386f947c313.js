webpackJsonp([4],{"1oa8":function(t,e){},SAkw:function(t,e){},UtkU:function(t,e){},aSRY:function(t,e){},md3T:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("vLgD"),r={watch:{data:function(t){this.dialogFormVisible=t.dialogFormVisible,this.formType=t.formType,this.form=t.formData}},props:{data:{type:Object,default:!1}},components:{},data:function(){return{dialogFormVisible:!1,formType:"add",form:{name:"",address:"",date:""},formLabelWidth:"120px"}},computed:{},mounted:function(){},beforeCreate:function(){},created:function(){},beforeMount:function(){},beforeUpdate:function(){},updated:function(){},beforeDestroy:function(){},destroyed:function(){},methods:{closedDialog:function(){},reset:function(){this.$emit("reset","add")},submit:function(){var t,e=this;"add"==this.formType?(t=this.form,Object(n.a)({url:"/add/user",method:"post",data:t})).then(function(t){e.$emit("initData",e.data.pagination),e.$emit("getTotal")}):function(t){return Object(n.a)({url:"/modify/user/"+t.id,method:"PUT",data:t})}(this.form).then(function(t){e.$emit("initData",e.data.pagination),e.$emit("getTotal")}),this.reset()}}},i={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"add-from"},[a("el-dialog",{directives:[{name:"dialog-drag",rawName:"v-dialog-drag"}],attrs:{title:"add"==t.formType?"添加用户":"编辑用户",visible:t.dialogFormVisible},on:{"update:visible":function(e){t.dialogFormVisible=e},closed:t.closedDialog}},[a("el-form",{attrs:{model:t.form}},[a("el-form-item",{attrs:{label:"name","label-width":t.formLabelWidth}},[a("el-input",{attrs:{autocomplete:"off"},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"address","label-width":t.formLabelWidth}},[a("el-input",{attrs:{autocomplete:"off"},model:{value:t.form.address,callback:function(e){t.$set(t.form,"address",e)},expression:"form.address"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"date","label-width":t.formLabelWidth}},[a("el-input",{attrs:{autocomplete:"off"},model:{value:t.form.date,callback:function(e){t.$set(t.form,"date",e)},expression:"form.date"}})],1)],1),t._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:t.reset}},[t._v("取 消")]),t._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:t.submit}},[t._v("确 定")])],1)],1)],1)},staticRenderFns:[]};var o=a("C7Lr")(r,i,!1,function(t){a("SAkw")},null,null).exports,l=(a("SJI6"),{watch:{data:function(t){}},props:{},components:{addForm:o},data:function(){return{addDialogFormVisible:!1,formType:"add",formData:{},formInline:{user:"",region:""},tableData:[],currentPage1:5,currentPage2:5,currentPage3:5,currentPage4:4,currentPage:1,pageSize:5,total:0}},computed:{},mounted:function(){this.initData({pageSize:this.pageSize,currentPage:this.currentPage}),this.getTotal()},beforeCreate:function(){},created:function(){},beforeMount:function(){},beforeUpdate:function(){},updated:function(){},beforeDestroy:function(){},destroyed:function(){},methods:{onSubmit:function(){},resetForm:function(t){},handleSizeChange:function(t){this.pageSize=t,this.initData({pageSize:this.pageSize,currentPage:this.currentPage})},handleCurrentChange:function(t){this.currentPage=t,this.initData({pageSize:this.pageSize,currentPage:this.currentPage})},handleCreate:function(t){this.addDialogFormVisible=!0,this.formType=t,this.formData={name:"",address:"",date:""}},cancel:function(t){this.addDialogFormVisible=!1,this.formType=t},initData:function(t){var e=this;(function(t){return Object(n.a)({url:"/userlist?_page="+t.currentPage+"&_limit="+t.pageSize,method:"get"})})(t).then(function(t){e.tableData=t.data})},delItem:function(t){var e,a=this;(e=t,Object(n.a)({url:"/del/user/"+e,method:"DELETE"})).then(function(t){a.initData({pageSize:a.pageSize,currentPage:a.currentPage}),a.getTotal()})},modifyUser:function(t){this.addDialogFormVisible=!0,this.formType="edit",this.formData=_.cloneDeep(t)},getTotal:function(){var t=this;Object(n.a)({url:"/userlist",method:"get"}).then(function(e){t.total=e.data.length})}}}),s={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"tab-page"},[a("el-row",[a("el-col",{attrs:{span:24}},[a("div",{staticClass:"grid-content"},[a("span",[t._v("用户筛选")]),t._v(" "),a("el-button",{attrs:{type:"primary",icon:"el-icon-edit"},on:{click:function(e){return t.handleCreate("add")}}},[t._v("添加")])],1)])],1),t._v(" "),a("el-divider",{staticClass:"divider"}),t._v(" "),a("el-form",{staticClass:"form-inline",attrs:{inline:!0,model:t.formInline}},[a("el-form-item",{attrs:{label:"用户"}},[a("el-input",{attrs:{placeholder:"用户"},model:{value:t.formInline.user,callback:function(e){t.$set(t.formInline,"user",e)},expression:"formInline.user"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"手机号"}},[a("el-input",{attrs:{placeholder:"手机号"},model:{value:t.formInline.region,callback:function(e){t.$set(t.formInline,"region",e)},expression:"formInline.region"}})],1),t._v(" "),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:t.onSubmit}},[t._v("查询")]),t._v(" "),a("el-button",{on:{click:function(e){return t.resetForm("ruleForm")}}},[t._v("重置")])],1)],1),t._v(" "),a("el-row",[a("el-col",{attrs:{span:24}},[a("div",{staticClass:"grid-content"},[a("span",[t._v("用户列表")]),t._v(" "),a("el-button",{attrs:{type:"primary",icon:"el-icon-download"}},[t._v("导出")])],1)])],1),t._v(" "),a("el-divider"),t._v(" "),a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableData}},[a("el-table-column",{attrs:{label:"提交时间",width:"180"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("i",{staticClass:"el-icon-time"}),t._v(" "),a("span",{staticStyle:{"margin-left":"10px"}},[t._v(t._s(e.row.date))])]}}])}),t._v(" "),a("el-table-column",{attrs:{prop:"name",label:"项目名称",width:"180"}}),t._v(" "),a("el-table-column",{attrs:{prop:"address",label:"属性"}}),t._v(" "),a("el-table-column",{attrs:{fixed:"right",label:"操作",width:"100"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){return t.modifyUser(e.row)}}},[t._v("编辑")]),t._v(" "),a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){return t.delItem(e.row.id)}}},[t._v("删除")])]}}])})],1),t._v(" "),a("el-pagination",{staticStyle:{"text-align":"right"},attrs:{"current-page":t.currentPage,"page-sizes":[5,8,10,15],"page-size":t.pageSize,layout:"total, sizes, prev, pager, next, jumper",total:t.total},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}}),t._v(" "),a("addForm",{attrs:{data:{dialogFormVisible:t.addDialogFormVisible,formType:t.formType,formData:t.formData,pagination:{pageSize:this.pageSize,currentPage:this.currentPage}}},on:{reset:t.cancel,initData:t.initData,getTotal:t.getTotal}})],1)},staticRenderFns:[]};var c=a("C7Lr")(l,s,!1,function(t){a("1oa8")},null,null).exports,u={watch:{},props:{},components:{},data:function(){return{tableData:[{date:"2016-05-02",name:"王小虎",address:"上海市普陀区金沙江路 1518 弄"},{date:"2016-05-04",name:"王小虎",address:"上海市普陀区金沙江路 1517 弄"},{date:"2016-05-01",name:"王小虎",address:"上海市普陀区金沙江路 1519 弄"},{date:"2016-05-03",name:"王小虎",address:"上海市普陀区金沙江路 1516 弄"}],currentPage1:5,currentPage2:5,currentPage3:5,currentPage4:4}},computed:{},mounted:function(){},beforeCreate:function(){},created:function(){},beforeMount:function(){},beforeUpdate:function(){},updated:function(){},beforeDestroy:function(){},destroyed:function(){},methods:{handleSizeChange:function(t){},handleCurrentChange:function(t){}}},d={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"tab-page2"},[a("el-row",[a("el-col",{attrs:{span:24}},[a("div",{staticClass:"grid-content"},[a("span",[t._v("待审批列表")]),t._v(" "),a("el-button",{attrs:{type:"primary",icon:"el-icon-download"}},[t._v("导出")])],1)])],1),t._v(" "),a("el-divider"),t._v(" "),a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableData}},[a("el-table-column",{attrs:{label:"提交时间",width:"180"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("i",{staticClass:"el-icon-time"}),t._v(" "),a("span",{staticStyle:{"margin-left":"10px"}},[t._v(t._s(e.row.date))])]}}])}),t._v(" "),a("el-table-column",{attrs:{prop:"name",label:"项目名称",width:"180"}}),t._v(" "),a("el-table-column",{attrs:{prop:"address",label:"属性"}}),t._v(" "),a("el-table-column",{attrs:{fixed:"right",label:"操作",width:"100"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{type:"text",size:"small"}},[t._v("通过")]),t._v(" "),a("el-button",{attrs:{type:"text",size:"small"}},[t._v("拒绝")])]}}])})],1),t._v(" "),a("el-pagination",{staticStyle:{"text-align":"right"},attrs:{"current-page":t.currentPage4,"page-sizes":[100,200,300,400],"page-size":100,layout:"total, sizes, prev, pager, next, jumper",total:400},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}})],1)},staticRenderFns:[]};var m=a("C7Lr")(u,d,!1,function(t){a("aSRY")},null,null).exports,f={metaInfo:{title:"user",titleTemplate:"%s - Yay!",htmlAttrs:{lang:"en",amp:!0}},components:{tab:c,tab2:m},data:function(){return{tabMapOptions:[{label:"用户",key:"tab"},{label:"待审批",key:"tab2"}],activeName:"tab",createdTimes:0}},methods:{showCreatedTimes:function(t){},setTabTemplate:function(t){switch(t){case"tab":return c;case"tab2":return m}}}},p={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"user common-page-bg"},[a("el-tabs",{staticStyle:{"margin-top":"15px"},attrs:{type:"border-card"},on:{"tab-click":function(e){return t.showCreatedTimes(t.activeName)}},model:{value:t.activeName,callback:function(e){t.activeName=e},expression:"activeName"}},t._l(t.tabMapOptions,function(e){return a("el-tab-pane",{key:e.key,attrs:{label:e.label,name:e.key}},[a("keep-alive",[a(t.setTabTemplate(t.activeName),{tag:"component"})],1)],1)}),1)],1)},staticRenderFns:[]};var g=a("C7Lr")(f,p,!1,function(t){a("UtkU")},null,null);e.default=g.exports}});
//# sourceMappingURL=4.173cc13e9386f947c313.js.map