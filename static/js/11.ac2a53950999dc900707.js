webpackJsonp([11],{"002J":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});n("SJI6");var l={watch:{},props:{},components:{},data:function(){return{data:[{label:"一级 1",children:[{label:"二级 1-1",children:[{label:"三级 1-1-1"}]}]},{label:"一级 2",children:[{label:"二级 2-1",children:[{label:"三级 2-1-1"}]},{label:"二级 2-2",children:[{label:"三级 2-2-1"}]}]},{label:"一级 3",children:[{label:"二级 3-1",children:[{label:"三级 3-1-1"}]},{label:"二级 3-2",children:[{label:"三级 3-2-1"}]}]}],defaultProps:{children:"children",label:"label"}}},computed:{},mounted:function(){},beforeCreate:function(){},created:function(){},beforeMount:function(){},beforeUpdate:function(){},updated:function(){},beforeDestroy:function(){},destroyed:function(){},methods:{handleNodeClick:function(e){}}},a={render:function(){var e=this.$createElement;return(this._self._c||e)("el-tree",{staticClass:"v-tree",attrs:{data:this.data,props:this.defaultProps},on:{"node-click":this.handleNodeClick}})},staticRenderFns:[]};var r={metaInfo:{title:"数据资源",htmlAttrs:{lang:"en",amp:!0}},components:{vaside:n("C7Lr")(l,a,!1,function(e){n("yUrw")},null,null).exports},data:function(){return{currentPage4:4,formInline:{user:"",region:""},tableData:[{date:"2016-05-02",name:"王小虎",address:""},{date:"2016-05-04",name:"王小虎",address:""},{date:"2016-05-01",name:"王小虎",address:""},{date:"2016-05-03",name:"王小虎",address:""}]}},computed:{},mounted:function(){},beforeCreate:function(){},created:function(){},beforeMount:function(){},beforeUpdate:function(){},updated:function(){},beforeDestroy:function(){},destroyed:function(){},methods:{onSubmit:function(){},handleSizeChange:function(e){},handleCurrentChange:function(e){},handleClick:function(){this.$router.push({path:"/datamanagment/publish",query:""})}}},o={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"data-resource"},[n("el-container",[n("el-aside",{attrs:{width:"200px"}},[n("h3",[e._v("数据存储目录")]),e._v(" "),n("vaside")],1),e._v(" "),n("el-main",{staticClass:"el-main-res"},[n("el-form",{staticClass:"demo-form-inline",attrs:{inline:!0,model:e.formInline}},[n("el-form-item",{attrs:{label:"共享方式"}},[n("el-input",{attrs:{placeholder:"审批人"},model:{value:e.formInline.user,callback:function(t){e.$set(e.formInline,"user",t)},expression:"formInline.user"}})],1),e._v(" "),n("el-form-item",{attrs:{label:"服务方式"}},[n("el-input",{attrs:{placeholder:"审批人"},model:{value:e.formInline.user,callback:function(t){e.$set(e.formInline,"user",t)},expression:"formInline.user"}})],1),e._v(" "),n("el-form-item",{attrs:{label:"名称"}},[n("el-input",{attrs:{placeholder:"审批人"},model:{value:e.formInline.user,callback:function(t){e.$set(e.formInline,"user",t)},expression:"formInline.user"}})],1),e._v(" "),n("el-form-item",[n("el-button",{attrs:{type:"primary"},on:{click:e.onSubmit}},[e._v("查询")])],1)],1),e._v(" "),n("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableData,stripe:""}},[n("el-table-column",{attrs:{prop:"name",label:"姓名",width:"180"}}),e._v(" "),n("el-table-column",{attrs:{prop:"address",label:"存储方式"}}),e._v(" "),n("el-table-column",{attrs:{prop:"address",label:"共享方式"}}),e._v(" "),n("el-table-column",{attrs:{prop:"address",label:"服务方式"}}),e._v(" "),n("el-table-column",{attrs:{prop:"address",label:"状态"}}),e._v(" "),n("el-table-column",{attrs:{prop:"address",label:"服务期限"}}),e._v(" "),n("el-table-column",{attrs:{fixed:"right",label:"操作",width:"100"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("el-button",{attrs:{type:"text",size:"small"},on:{click:function(n){return e.handleClick(t.row)}}},[e._v("发布")])]}}])})],1),e._v(" "),n("el-pagination",{attrs:{"current-page":e.currentPage4,"page-sizes":[100,200,300,400],"page-size":100,layout:"total, sizes, prev, pager, next, jumper",total:400},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1)],1)],1)},staticRenderFns:[]};var i=n("C7Lr")(r,o,!1,function(e){n("eCXv")},null,null);t.default=i.exports},eCXv:function(e,t){},yUrw:function(e,t){}});
//# sourceMappingURL=11.ac2a53950999dc900707.js.map