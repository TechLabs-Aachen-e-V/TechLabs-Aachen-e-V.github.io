(window.webpackJsonp=window.webpackJsonp||[]).push([[13,12,14],{454:function(t,e,n){"use strict";n.r(e);var o=n(11),r=Object(o.b)({props:{resource:{type:Object,required:!0},onPink:{type:Boolean}},setup:function(){return{icons:{meeting:"video",form:"comment-dots",slides:"images",video:"youtube",link:"link",tool:"tools",game:"dice",nothing:"thumbs-up"}}}}),l=n(16),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("a",{staticClass:"flex items-start w-full h-full px-4 py-3 text-left transition-all duration-100 ease-in-out border-2 rounded-lg hover:shadow-lg",class:t.onPink?"border-pink-900 hover:border-pink-600 hover:text-pink-600":"hover:border-blue-600 hover:text-blue-600",attrs:{href:t.resource.url,target:"_blank"}},[n("div",{staticClass:"flex space-x-4"},[n("p",{staticClass:"flex-none text-xl"},[n("TIcon",{staticClass:"inline-block",attrs:{icon:t.icons[t.resource.type]}})],1),t._v(" "),n("div",[n("p",{staticClass:"font-bold"},[t._v(t._s(t.resource.title))]),t._v(" "),n("p",{staticClass:"text-sm"},[t._v(t._s(t.resource.description))])])])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{TIcon:n(158).default})},460:function(t,e,n){"use strict";n.d(e,"a",(function(){return l}));var o=n(448),r=n(447);function l(t){return Object(r.a)(1,arguments),Object(o.a)(t).getTime()>Date.now()}},461:function(t,e,n){var content=n(472);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(58).default)("52760e26",content,!0,{sourceMap:!1})},467:function(t,e,n){"use strict";n.d(e,"a",(function(){return l}));var o=n(448),r=n(447);function l(t){return Object(r.a)(1,arguments),Object(o.a)(t).getTime()<Date.now()}},471:function(t,e,n){"use strict";n(461)},472:function(t,e,n){var o=n(57)(!1);o.push([t.i,".milestone-grid[data-v-29793383]{display:grid;grid-gap:1rem;grid-template-columns:auto 1fr}.shadow-inner-pink[data-v-29793383]{--tw-shadow:inset 0 4px 8px 0 rgba(250,30,90,0.15);box-shadow:0 0 #fa1e5a,0 0 #fa1e5a,var(--tw-shadow);box-shadow:var(--tw-ring-offset-shadow,0 0 #fa1e5a),var(--tw-ring-shadow,0 0 #fa1e5a),var(--tw-shadow)}.title-link:hover .icon[data-v-29793383]{display:inline-block}",""]),t.exports=o},476:function(t,e,n){"use strict";n.r(e);var o=n(11),r=n(532),l=Object(o.b)({props:{milestone:{type:Object,required:!0},alwaysShowTasks:{type:Boolean}},setup:function(){var t=Object(o.e)(!1);return{showTasks:t,toggleTasks:function(){return t.value=!t.value},format:r.a}}}),c=(n(471),n(16)),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"p-4 bg-pink-100 border shadow-inner-pink lg:p-6 rounded-xl"},[n("article",{staticClass:"relative pt-8 lg:pt-0 milestone-grid"},[n("div",{staticClass:"-mt-1 text-4xl font-bold text-center text-pink-600"},[n("TIcon",{staticClass:"inline-block",attrs:{icon:"cutoff"===t.milestone.type?"exclamation-circle":"check-square"}})],1),t._v(" "),n("header",{staticClass:"flex items-center space-x-4"},[n("div",[n("NuxtLink",{staticClass:"title-link",attrs:{to:"/milestone/"+t.milestone.slug}},[n("h2",{staticClass:"relative inline-block mb-1 text-2xl font-bold text-pink-900 hover:underline"},[t._v("\n            "+t._s(t.milestone.title)+"\n            "),n("div",{staticClass:"absolute top-0 right-0 hidden pl-2 text-base text-pink-600 transform translate-x-full translate-y-1 icon"},[n("TIcon",{staticClass:"inline-block",attrs:{icon:"link"}})],1)])]),t._v(" "),n("ClientOnly",[n("p",{staticClass:"text-lg"},[t._v("\n            Due\n            "+t._s(t.format(new Date(t.milestone.deadline),"MMMM do, 'at' h:mm aaaa"))+"\n          ")])])],1)]),t._v(" "),n("div"),t._v(" "),n("main",{staticClass:"space-y-8"},[n("div",{staticClass:"prose",domProps:{innerHTML:t._s(t.$md.render(t.milestone.description))}}),t._v(" "),t.milestone.todos.length?[t.alwaysShowTasks?t._e():n("p",[t.showTasks?n("button",{staticClass:"px-2 py-1 text-sm font-semibold tracking-wide text-pink-900 uppercase border-2 border-pink-900 rounded-lg focus:outline-none active:outline-none",on:{click:t.toggleTasks}},[n("TIcon",{staticClass:"inline-block",attrs:{icon:"eye-slash"}}),t._v(" Hide tasks\n          ")],1):n("button",{staticClass:"px-2 py-1 text-sm font-semibold tracking-wide text-pink-900 uppercase border-2 border-pink-900 rounded-lg focus:outline-none active:outline-none",on:{click:t.toggleTasks}},[n("TIcon",{staticClass:"inline-block",attrs:{icon:"chevron-down"}}),t._v(" Show tasks\n          ")],1)]),t._v(" "),t.showTasks||t.alwaysShowTasks?n("ul",{staticClass:"space-y-8 text-lg"},t._l(t.milestone.todos,(function(e){return n("li",{key:e.name,staticClass:"flex space-x-4"},[n("div",[n("TIcon",{staticClass:"text-2xl text-pink-600",attrs:{icon:"check-square"}})],1),t._v(" "),n("div",[n("p",[t._v(t._s(e.name))]),t._v(" "),e.resources?n("ul",{staticClass:"mt-4 link-grid"},t._l(e.resources,(function(t){return n("li",{key:t.title},[n("ResourceListItem",{attrs:{resource:t,"on-pink":""}})],1)})),0):t._e()])])})),0):t._e()]:t._e()],2)])])}),[],!1,null,"29793383",null);e.default=component.exports;installComponents(component,{TIcon:n(158).default,ResourceListItem:n(454).default})},486:function(t,e,n){var content=n(492);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(58).default)("7cd9aaea",content,!0,{sourceMap:!1})},491:function(t,e,n){"use strict";n(486)},492:function(t,e,n){var o=n(57)(!1);o.push([t.i,".link-grid[data-v-0e5491d9]{display:grid;grid-gap:1rem;grid-template-columns:1fr 1fr;grid-auto-rows:-webkit-max-content;grid-auto-rows:max-content}",""]),t.exports=o},501:function(t,e,n){"use strict";n.r(e);n(30),n(21),n(32),n(19),n(35);var o=n(10),r=(n(33),n(22),n(11)),l=n(467),c=n(460);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function f(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var v=Object(r.b)({props:{milestones:{type:Array,default:function(){return[]}}},setup:function(t){var e=t.milestones.map((function(t){return f(f({},t),{},{deadline:new Date(t.deadline)})})),n=Object(r.a)((function(){return e.filter((function(t){var e=t.deadline;return Object(l.a)(e)}))})),o=Object(r.a)((function(){return e.filter((function(t){var e=t.deadline;return Object(c.a)(e)}))})),d=Object(r.a)((function(){return o.value&&o.value.length?o.value[0]:null}));return{pastMilestones:n,futureMilestones:o,currentMilestone:d}}}),m=(n(491),n(16)),component=Object(m.a)(v,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.currentMilestone?n("MilestoneListItem",{attrs:{milestone:t.currentMilestone}}):t._e()],1)}),[],!1,null,"0e5491d9",null);e.default=component.exports;installComponents(component,{MilestoneListItem:n(476).default})}}]);