webpackJsonp([4],{Mdq0:function(e,t){},NkJt:function(e,t,a){a("Mdq0");var r=a("VU/8")(a("mrqz"),a("YXtx"),"data-v-263db4e0",null);e.exports=r.exports},YXtx:function(e,t){e.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",[a("el-row",{staticClass:"btnClass"},[a("div",{staticClass:"btn-left"},[a("el-input",{staticClass:"input-with-search",attrs:{placeholder:"请输入执行任务名称"},nativeOn:{keyup:function(e){return"button"in e||!t._k(e.keyCode,"enter",13,e.key,"Enter")?t.searchKeyup(e):null}},model:{value:t.searchInput,callback:function(e){t.searchInput=e},expression:"searchInput"}},[a("el-button",{attrs:{slot:"append",icon:"icon iconfont icon-ir-search"},on:{click:t.searchTable},slot:"append"})],1),t._v(" "),a("el-date-picker",{attrs:{type:"daterange","value-format":"timestamp","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期"},on:{change:t.handledateValue},model:{value:t.dateValue,callback:function(e){t.dateValue=e},expression:"dateValue"}})],1)]),t._v(" "),a("el-row",{staticClass:"rf-swap"},[a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticStyle:{width:"100%"},attrs:{data:t.table.content,id:"bm-com-global-search-table-table","tooltip-effect":"dark",height:"calc(100vh - 200px)"},on:{"sort-change":t.getOrder,"selection-change":t.handleSelectionChange}},[t.show?a("el-table-column",{attrs:{prop:"id",label:"ID",width:"50"}}):t._e(),t._v(" "),a("el-table-column",{attrs:{prop:"modelName",label:"模板",sortable:"custom"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",{staticClass:"seeName"},[t._v(t._s(e.row.modelName))])]}}])}),t._v(" "),a("el-table-column",{attrs:{prop:"name",label:"执行任务名",sortable:"custom"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",{staticClass:"seeName"},[t._v(t._s(e.row.name))])]}}])}),t._v(" "),a("el-table-column",{attrs:{prop:"flowStatus",label:"任务状态",sortable:"custom",width:"100"}}),t._v(" "),a("el-table-column",{attrs:{label:"执行结果",width:"100",formatter:t.resultFormatter}}),t._v(" "),a("el-table-column",{attrs:{prop:"processDataId",label:"输入数据",sortable:"custom"}}),t._v(" "),a("el-table-column",{attrs:{prop:"sliceTime",label:"数据时间片",sortable:"custom"}}),t._v(" "),a("el-table-column",{attrs:{prop:"executionId",label:"执行任务ID",sortable:"custom"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",{staticClass:"seeName"},[t._v(t._s(e.row.executionId))])]}}])}),t._v(" "),a("el-table-column",{attrs:{prop:"qualityRank",label:"数据质量等级",sortable:"custom",width:"150"}}),t._v(" "),a("el-table-column",{attrs:{prop:"badRatio",label:"坏数据占比",sortable:"custom",width:"120"}}),t._v(" "),a("el-table-column",{attrs:{prop:"lastModifiedTime",label:"修改时间",sortable:"custom",width:"180",formatter:t.dateFormat}})],1),t._v(" "),a("el-pagination",{attrs:{"current-page":t.currentPage,"page-sizes":[8,16,50,100],"page-size":t.pagesize,layout:"total, sizes, prev, pager, next, jumper",total:t.table.totalElements},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}})],1),t._v(" "),a("router-view")],1)},staticRenderFns:[]}},mrqz:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=a("P9l9"),s=n(a("PJh5")),i=(n(a("EMXe")),a("Wyan")),l=n(a("DoGJ"));function n(e){return e&&e.__esModule?e:{default:e}}var o={fieldList:[],sortObject:{field:"lastModifiedTime",orderDirection:"DESC"},offset:0,limit:8};t.default={components:{ElRow:l.default},data:function(){return{table:[],multipleSelection:[],dateValue:"",startTime:!1,endTime:!1,searchInput:"",show:!1,currentPage:1,pagesize:8,parameter:"",orderDirection:"DESC",prop:"lastModifiedTime",loading:!0}},methods:{handleSizeChange:function(e){this.pagesize=e;var t=0<this.searchInput.length?"%"+this.searchInput+"%":"%";this.parameter=(0,i.createParameter)("name",t,"LIKE").Offset(0).Limit(this.pagesize).Build(),this.parameter.sortObject.field=this.prop,this.parameter.sortObject.orderDirection=this.orderDirection,this.listTable(this.parameter)},handleCurrentChange:function(e){this.currentPage=e,this.parameter=this.buildParameters(this.pagesize,this.currentPage,this.startTime,this.endTime,this.searchInput),this.parameter.sortObject.field=this.prop,this.parameter.sortObject.orderDirection=this.orderDirection,this.listTable(this.parameter)},handleSelectionChange:function(e){this.multipleSelection=e},buildParameters:function(){var e=this.pagesize,t=(this.currentPage-1)*this.pagesize,a=0<this.searchInput.length?"%"+this.searchInput+"%":"%",r=(0,i.createParameter)().Limit(e).Offset(t).Build();return"%"!=a&&(r=(0,i.createParameter)("name",a,"LIKE").Build(r)),this.dateValue&&""!=this.dateValue&&0!=this.dateValue.length&&(r=(0,i.createParameter)("lastModifiedTime",Number(this.dateValue[0]),"GREATER_THAN").And("lastModifiedTime",Number(this.dateValue[1]),"LESS_THAN").Build(r)),r.sortObject.field=this.prop,r.sortObject.orderDirection=this.orderDirection,r},handledateValue:function(e){this.dateValue=null==e?[]:[e[0],e[1]+86399e3],this.currentPage=1;var t=this.buildParameters();this.listTable(t)},dateFormat:function(e,t){var a=e[t.property];return null==a?"":(0,s.default)(a).format("YYYY-MM-DD HH:mm:ss")},resultFormatter:function(e,t){switch(e.flowStatus){case"FAILED":return"";case"SUCCEEDED":return"结果"}},listTable:function(e){var t=this;(0,r.zdafgetDate)(e).then(function(e){t.loading=!1,t.table=e},function(e){t.$message({message:e.response.message,type:"error",duration:1500})})},searchTable:function(){this.currentPage=1;var e=this.buildParameters();this.listTable(e)},searchKeyup:function(){this.currentPage=1;var e=this.buildParameters();this.listTable(e)},getOrder:function(e){if("ascending"===e.order?this.orderDirection="ASC":this.orderDirection="DESC",this.prop=e.prop,null===e.prop)return!(this.prop="lastModifiedTime");this.currentPage=1;var t=this.buildParameters();this.listTable(t)}},mounted:function(){this.listTable(o)}}}});