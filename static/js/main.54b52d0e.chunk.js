(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{102:function(e,t,s){},104:function(e,t,s){},110:function(e,t,s){},132:function(e){e.exports=JSON.parse('[{"songNum":83377,"title":"\ub9cc\uc57d\uc5d0 (\ub4dc\ub77c\ub9c8\\"\ucf8c\ub3c4 \ud64d\uae38\ub3d9\\")","artist":"\ud0dc\uc5f0(\uc18c\ub140\uc2dc\ub300)","year":2008,"genre":"Ballad","id":"1BHLy0efFQ8FFxyxgJtTMf"},{"songNum":21022,"title":"\ud754\ub4e4\ub9ac\ub294 \uaf43\ub4e4 \uc18d\uc5d0\uc11c \ub124 \uc0f4\ud478 \ud5a5\uc774 \ub290\uaef4\uc9c4 \uac70\uc57c","artist":"\uc7a5\ubc94\uc900","year":2019,"genre":"Ballad","id":"2skS61BQztE5bUpqJnBJAx"},{"songNum":4772,"title":"\ucde8\uc911\uc9c4\ub2f4","artist":"\uc804\ub78c\ud68c","year":1996,"genre":"Ballad","id":"39FFkPyRLQtYBJkgV6ETAw"},{"songNum":90515,"title":"\uc2dc\ucc28(We Are)(Feat. \ub85c\uaf2c,\uadf8\ub808\uc774(GRAY))","artist":"\uc6b0\uc6d0\uc7ac","year":2017,"genre":"Hiphop","id":"2SMq0lOqCTHayWa9juoI0d"},{"songNum":91954,"title":"IndiGO","artist":"Justhis,Kid Milli,NO:EL(\uc7a5\uc6a9\uc900),Young B","year":2018,"genre":"Hiphop","id":"5oxmx6B0kWTuCKgBzv8NpH"},{"songNum":47889,"title":"\ubcf4\uc5ec \uc904\uac8c","artist":"\uc5d0\uc77c\ub9ac","year":2012,"genre":"Dance","id":"2MYfUH4Zo7gphaxmMVDrie"},{"songNum":47459,"title":"Ugly","artist":"2NE1(\ud22c\uc560\ub2c8\uc6d0)","year":2011,"genre":"Dance","id":"5FahFQNnmxqiWzJbDNmeIY"},{"songNum":21998,"title":"\ub2e4\uc2dc \uc5ec\uae30 \ubc14\ub2f7\uac00","artist":"\uc2f9\uc4f0\ub9ac","year":2020,"genre":"Dance","id":"4L1MHK27ifT30Ndicpr7js"},{"songNum":48246,"title":"\uc2a4\ubb3c\ub2e4\uc12f, \uc2a4\ubb3c\ud558\ub098","artist":"\uc790\uc6b0\ub9bc","year":2013,"genre":"Rock","id":"3mQwOUjViw1cpwUYugndPV"},{"songNum":45877,"title":"\ube44\ubc00\ubc88\ud638486","artist":"\uc724\ud558","year":2007,"genre":"Rock","id":"4UJFboVdkS4JvnCG5CjipR"}]')},182:function(e,t,s){},184:function(e,t,s){},185:function(e,t,s){},186:function(e,t,s){},190:function(e,t,s){"use strict";s.r(t);var a=s(0),i=s.n(a),n=s(21),c=s.n(n),o=s(134),r=s.n(o),l=s(42),h=s(24),d=s(33),j=s(34),u=s(36),b=s(35),p=s(195),g=s(57),m=(s(102),s(109)),x=s.p+"static/media/vocali_logo2.dce5e0c5.svg",O=(s(110),s(3)),f=Object(h.withRouter)((function(e){var t=e.history,s=e.back;return"none"===s?Object(O.jsx)("div",{className:"navbar",children:Object(O.jsx)("div",{onClick:function(){return t.push("/")},children:Object(O.jsx)("img",{className:"logo",src:x,alt:"Vocali Logo"})})}):Object(O.jsxs)("div",{className:"navbar",children:[Object(O.jsx)("div",{onClick:function(){return t.push(s)},children:Object(O.jsx)(m.a,{className:"return-button"})}),Object(O.jsx)("div",{onClick:function(){return t.push("/")},children:Object(O.jsx)("img",{className:"logo",src:x,alt:"Vocali Logo"})})]})})),v=s(124),y=s.n(v).a.create({baseURL:"https://lit-eyrie-97447.herokuapp.com",headers:{"Content-type":"application/json"}}),N=function(e){return y.get("/users/".concat(e))},k=function(e,t){return y.post("/users",{name:e,age:1*t})},C=function(e,t){return y.put("/users/".concat(e),t)},S=function(e,t,s){var a=[];t.map((function(e){return a.push({id:e.id,category:s})}));var i=JSON.stringify(a);return console.log(i),y.post("/users/".concat(e,"/songs/select"),i,{headers:{"Content-Type":"application/json"}})},w=p.a.Paragraph,M=function(e){Object(u.a)(s,e);var t=Object(b.a)(s);function s(){return Object(d.a)(this,s),t.apply(this,arguments)}return Object(j.a)(s,[{key:"nextPath",value:function(e){this.props.history.push(e)}},{key:"render",value:function(){var e=this;return N(1),Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(f,{history:this.props.history,back:"none"}),Object(O.jsxs)("div",{className:"row-flex-container",children:[Object(O.jsx)(w,{children:Object(O.jsxs)("div",{className:"slogan",children:["Vocali will find you a"," ",Object(O.jsx)("span",{className:"highlight",children:"perfect song to sing at Noraebang"})]})}),Object(O.jsx)(g.a,{className:"start-button circle",onClick:function(){return e.nextPath("/info")},type:"primary",children:"START"}),Object(O.jsxs)("div",{className:"recommendation-slogan",children:["This site is optimized for mobile environments. ",Object(O.jsx)("br",{}),"We recommend using the Chrome browser."]})]})]})}}]),s}(i.a.Component),P=Object(h.withRouter)(M),F=s(196),A=s(192),W=s(198),R=s(203),B=s(28),I=p.a.Paragraph,E=function(e){Object(u.a)(s,e);var t=Object(b.a)(s);function s(){var e;Object(d.a)(this,s);for(var a=arguments.length,i=new Array(a),n=0;n<a;n++)i[n]=arguments[n];return(e=t.call.apply(t,[this].concat(i))).state={name:"",age:"",modal:!1,loading:!1},e.handleNameChange=function(t){e.setState({name:t.target.value})},e.handleAgeChange=function(t){e.setState({age:t.target.value})},e.handleModalChange=function(){e.setState({modal:!e.state.modal})},e.setInfo=function(){var t=e.state.name,s=e.state.age;""===t||""===s||isNaN(s)?e.handleModalChange():(e.setState({loading:!0}),k(t,s).then((function(t){var s=t.data.id,a=new B.a;a.set("id",s,{path:"/"}),a.remove("mood",{path:"/"}),a.remove("people",{path:"/"}),e.setState({loading:!1}),e.props.history.push("/pitch")})))},e}return Object(j.a)(s,[{key:"render",value:function(){return Object(O.jsxs)("div",{className:"custom-container",children:[Object(O.jsx)(f,{history:this.props.history,back:"none"}),Object(O.jsxs)("div",{className:"flex-row-container",children:[Object(O.jsxs)(I,{className:"description",children:["First,",Object(O.jsx)("br",{})," Put in your information"]}),Object(O.jsxs)("div",{className:"inputs",children:[Object(O.jsxs)("div",{className:"input-div",children:[Object(O.jsx)("div",{className:"subtitle",children:"Name"}),Object(O.jsx)(F.a,{className:"name-input",size:"large",placeholder:"ex. Gildong",prefix:Object(O.jsx)(R.a,{}),onChange:this.handleNameChange})]}),Object(O.jsxs)("div",{className:"input-div",children:[Object(O.jsx)("div",{className:"subtitle",children:"Age"}),Object(O.jsx)(F.a,{className:"age-input",size:"large",placeholder:"ex. 27",onChange:this.handleAgeChange})]})]}),Object(O.jsxs)("div",{style:{width:"100%",alignItems:"center",textAlign:"center"},children:[Object(O.jsx)(A.a,{className:"loading-next",spinning:this.state.loading,delay:500}),Object(O.jsx)(g.a,{className:"next-button",onClick:this.setInfo,type:"primary",children:"NEXT"})]})]}),Object(O.jsx)(W.a,{title:"Warning",visible:this.state.modal,onOk:this.handleModalChange,footer:[Object(O.jsx)(g.a,{type:"primary",onClick:this.handleModalChange,children:"OK"},"ok")],children:Object(O.jsx)("p",{children:"You should fill out your name and age. Also your age should be valid number :)"})})]})}}]),s}(i.a.Component),L=Object(h.withRouter)(E),T=s(136),H=s(202),D=s(194),J=s(204),V=s(132),Y=p.a.Paragraph,q=H.a.CheckableTag,G=function(e){Object(u.a)(s,e);var t=Object(b.a)(s);function s(){var e;Object(d.a)(this,s);for(var a=arguments.length,i=new Array(a),n=0;n<a;n++)i[n]=arguments[n];return(e=t.call.apply(t,[this].concat(i))).state={selectedSongs:[]},e}return Object(j.a)(s,[{key:"handleSongPref",value:function(e,t){var s=this.state.selectedSongs,a=t?[].concat(Object(T.a)(s),[e]):s.filter((function(t){return t!==e}));console.log("You are interested in: ",a),this.setState({selectedSongs:a})}},{key:"onNextClick",value:function(e){console.log(e);var t=(new B.a).get("id",{path:"/"});S(t,e,"like"),this.props.history.push("/home")}},{key:"render",value:function(){var e=this,t=this.state.selectedSongs;return Object(O.jsxs)("div",{className:"custom-container",children:[Object(O.jsx)(f,{history:this.props.history,back:"/pitch"}),Object(O.jsxs)("div",{className:"flex-row-container",children:[Object(O.jsxs)(Y,{className:"description",children:["Next,",Object(O.jsx)("br",{}),"Check all the songs you would sing at Noraebang!"]}),Object(O.jsx)("div",{className:"song-pref-div",children:V.map((function(s){return Object(O.jsx)(D.a,{size:"small",className:"song-pref-card",title:s.title,extra:Object(O.jsx)(q,{checked:t.indexOf(s)>-1,onChange:function(t){return e.handleSongPref(s,t)},children:Object(O.jsx)(J.a,{})},s.songNum),children:Object(O.jsx)("p",{children:s.artist})})}))}),Object(O.jsx)(g.a,{className:"next-button",onClick:function(){return e.onNextClick(e.state.selectedSongs)},type:"primary",children:"NEXT"})]})]})}}]),s}(i.a.Component),K=Object(h.withRouter)(G),z=s(43),U=s(107),Q=s.n(U),X=s(193),Z=(s(182),p.a.Paragraph),_=function(e){Object(u.a)(s,e);var t=Object(b.a)(s);function s(e){var a;return Object(d.a)(this,s),(a=t.call(this,e)).state={record:!1,disabled:!0,currentPitch:"None",minPitch:[1e4,"None"],maxPitch:[0,"None"]},a.handleRecordChange=function(){a.setState({record:!a.state.record}),a.state.record?a.stopPitch():a.getPitch()},a.bool2str=function(e){return e?"Stop":"Record"},a.getPitch=a.getPitch.bind(Object(z.a)(a)),a.logPitch=a.logPitch.bind(Object(z.a)(a)),a.stopPitch=a.stopPitch.bind(Object(z.a)(a)),a.handleRecordChange=a.handleRecordChange.bind(Object(z.a)(a)),a.onNextClick=a.onNextClick.bind(Object(z.a)(a)),a}return Object(j.a)(s,[{key:"componentDidMount",value:function(){this.voice=new Q.a({source:"mic"}),this.tuner=new Q.a.Poly}},{key:"nextPath",value:function(e){this.props.history.push(e)}},{key:"getPitch",value:function(){this.tuner.setVolume(0),this.tuner.add(this.voice),this.voice.play(),this.tuner.updatePitch(),this.logPitch()}},{key:"logPitch",value:function(){console.log(this.tuner.pitch,this.tuner.noteName),this.tuner.noteName&&(console.log(this.state.minPitch[0]),this.state.disabled&&this.setState({disabled:!1}),this.tuner.pitch>this.state.maxPitch[0]&&(this.maxPitch=this.tuner.pitch,this.setState({maxPitch:[this.tuner.pitch,this.tuner.noteName]})),this.tuner.pitch<this.state.minPitch[0]&&(this.minPitch=this.tuner.pitch,this.setState({minPitch:[this.tuner.pitch,this.tuner.noteName]})),this.setState({currentPitch:this.tuner.noteName})),this.animation=requestAnimationFrame(this.logPitch)}},{key:"stopPitch",value:function(){this.tuner.stopUpdatingPitch(),cancelAnimationFrame(this.animation),this.voice.stop(),this.tuner.stop()}},{key:"onNextClick",value:function(){var e=this,t=(new B.a).get("id",{path:"/"}),s={minPitch:this.state.minPitch[1],maxPitch:this.state.maxPitch[1]};C(t,s).then((function(t){e.nextPath("/songpref")}))}},{key:"render",value:function(){return Object(O.jsxs)("div",{className:"custom-container",children:[Object(O.jsx)(f,{history:this.props.history,back:"/info"}),Object(O.jsxs)("div",{className:"flex-row-container",children:[Object(O.jsx)(Z,{className:"description",children:"Sing from your lowest possible note to your highest possible note"}),Object(O.jsxs)("div",{className:"pitches",children:[Object(O.jsxs)("div",{className:"currentpitches",children:["Current Pitch",Object(O.jsx)("div",{className:"pitchDisplay",children:this.state.currentPitch})]}),Object(O.jsx)(X.a,{}),Object(O.jsxs)("div",{className:"maxminpitches",children:[Object(O.jsxs)("div",{children:["Min Pitch",Object(O.jsx)("div",{className:"pitchDisplay",children:this.state.minPitch[1]})]}),Object(O.jsxs)("div",{children:["Max Pitch",Object(O.jsx)("div",{className:"pitchDisplay",children:this.state.maxPitch[1]})]})]})]}),Object(O.jsxs)("div",{className:"pitch-buttons",children:[Object(O.jsx)(g.a,{className:"record-button",type:"primary",onClick:this.handleRecordChange,children:this.bool2str(this.state.record)}),Object(O.jsx)(g.a,{className:"stop-button",type:"primary",disabled:this.state.disabled||this.state.record,onClick:this.onNextClick,children:"NEXT"})]})]})]})}}]),s}(i.a.Component),$=Object(h.withRouter)(_),ee=s(199),te=(s(104),s(52)),se=s(200),ae=ee.a.Header,ie=Object(h.withRouter)((function(e){var t=e.history,s=e.people,i=e.mood,n=Object(a.useState)(s),c=Object(te.a)(n,2),o=c[0],r=c[1],l=Object(a.useState)(i),h=Object(te.a)(l,2),d=h[0],j=h[1],u=Object(a.useState)("-"),b=Object(te.a)(u,2),p=b[0],g=b[1],m=Object(a.useState)("-"),f=Object(te.a)(m,2),v=f[0],y=f[1],k=Object(a.useState)("-"),C=Object(te.a)(k,2),S=C[0],w=C[1],M=new B.a;return Object(a.useEffect)((function(){var e=M.get("id",{path:"/"});N(e).then((function(e){y(e.data.age),g(e.data.name),w(e.data.minPitch+" - "+e.data.maxPitch)}))}),[]),Object(a.useEffect)((function(){s&&i?(r(s),j(i)):(j(M.get("mood",{path:"/"})),r(M.get("people",{path:"/"})))}),[M,i,s]),Object(O.jsxs)(ae,{className:"header",children:[Object(O.jsxs)("div",{className:"row",children:[Object(O.jsx)("div",{onClick:function(){return t.push("/home")},style:{lineHeight:0},children:Object(O.jsx)("img",{className:"logo-left",src:x,alt:"Vocali Logo"})}),Object(O.jsxs)("div",{className:"user-info",children:[Object(O.jsx)(se.a,{className:"avatar",style:{backgroundColor:"#D9D9D9"},children:p.slice(0,1)}),Object(O.jsx)(H.a,{className:"age-info",children:v}),Object(O.jsx)(H.a,{className:"pitch-info",children:S})]})]}),Object(O.jsxs)("div",{className:"mood-dashboard",children:[Object(O.jsx)("p",{className:"mood-title",children:"Today's Mood"}),Object(O.jsxs)("div",{className:"mood-info-div",children:[Object(O.jsx)(H.a,{className:"whom-info",children:o}),Object(O.jsx)(H.a,{className:"mood-info",children:d})]})]})]})})),ne=(ee.a.Content,H.a.CheckableTag),ce=["Alone","Together"],oe=["Happy","Energetic","Depression","Calm"],re=function(e){Object(u.a)(s,e);var t=Object(b.a)(s);function s(e){var a;return Object(d.a)(this,s),(a=t.call(this,e)).handleModalChange=function(){a.setState({showModal:!a.state.showModal})},a.handleFindButtonClick=function(){var e=a.state.selectedMood,t=a.state.selectedPeople;""!==e&&""!==t?a.props.history.push("/result?people="+t+"&mood="+e):a.handleModalChange()},a.cookies=new B.a,a.state={selectedPeople:"",selectedMood:"",showModal:!1},a.nextPath=a.nextPath.bind(Object(z.a)(a)),a}return Object(j.a)(s,[{key:"componentDidMount",value:function(){var e=this.cookies.get("people",{path:"/"});e&&this.setState({selectedPeople:e});var t=this.cookies.get("mood",{path:"/"});t&&this.setState({selectedMood:t})}},{key:"nextPath",value:function(e){this.props.history.push(e)}},{key:"handlePeopleChange",value:function(e,t){var s=t?e:"";this.setState({selectedPeople:s}),this.cookies.set("people",s,{path:"/"})}},{key:"handleMoodChange",value:function(e,t){var s=t?e:"";this.setState({selectedMood:s}),this.cookies.set("mood",s,{path:"/"})}},{key:"render",value:function(){var e=this;return Object(O.jsxs)("div",{className:"custom-container",children:[Object(O.jsx)(ie,{history:this.props.history,people:this.state.selectedPeople,mood:this.state.selectedMood}),Object(O.jsxs)("div",{className:"flex-row-container",children:[Object(O.jsxs)("div",{className:"selection-board",children:[Object(O.jsx)("div",{className:"mood-selection",children:Object(O.jsxs)("p",{className:"select-title",children:["Select",Object(O.jsx)("br",{}),"Today's Mood"]})}),Object(O.jsx)("hr",{}),Object(O.jsx)("div",{className:"question",children:"With Whom?"}),Object(O.jsx)("div",{className:"checkable-tag-div",children:ce.map((function(t){return Object(O.jsx)(ne,{className:"checkable-tags",checked:e.state.selectedPeople===t,onChange:function(s){return e.handlePeopleChange(t,s)},children:t},t)}))}),Object(O.jsx)(X.a,{}),Object(O.jsx)("div",{className:"question",children:"What type of mood are you feeling today?"}),Object(O.jsx)("div",{className:"checkable-tag-div",children:oe.map((function(t){return Object(O.jsx)(ne,{className:"checkable-tags",checked:e.state.selectedMood===t,onChange:function(s){return e.handleMoodChange(t,s)},children:t},t)}))})]}),Object(O.jsx)(g.a,{className:"next-button standard",onClick:this.handleFindButtonClick,type:"primary",children:"FIND SONG"})]}),Object(O.jsx)(W.a,{title:"Warning",visible:this.state.showModal,onOk:this.handleModalChange,footer:[Object(O.jsx)(g.a,{type:"primary",onClick:this.handleModalChange,children:"OK"},"ok")],children:Object(O.jsx)("p",{children:"You should select one tag from each category :)"})})]})}}]),s}(i.a.Component),le=Object(h.withRouter)(re),he=s(133),de=s.n(he),je=s(197),ue=s(201),be=s(207),pe=s(208),ge=s(209),me=(s(184),s(205)),xe=s(206),Oe=(s(185),ee.a.Footer),fe=Object(h.withRouter)((function(e){var t=e.history,s=Object(a.useState)(""),i=Object(te.a)(s,2),n=i[0],c=i[1],o=Object(a.useState)(""),r=Object(te.a)(o,2),l=r[0],h=r[1];return Object(a.useEffect)((function(){var e=new B.a;h(e.get("mood",{path:"/"})),c(e.get("people",{path:"/"}))}),[]),Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("div",{style:{height:"100px",backgroundColor:"#f6f0fe"}}),Object(O.jsx)(Oe,{className:"vocali-footer",children:Object(O.jsxs)("div",{className:"buttons",children:[Object(O.jsxs)("div",{onClick:function(){return t.push("/home")},className:"footer-button",children:[Object(O.jsx)(me.a,{className:"footer-button-icon"}),Object(O.jsx)("span",{children:"Mood"})]}),Object(O.jsx)(X.a,{type:"vertical"}),Object(O.jsxs)("div",{onClick:function(){return t.push("/result?people="+n+"&mood="+l)},className:"footer-button",children:[Object(O.jsx)(xe.a,{className:"footer-button-icon"}),Object(O.jsx)("span",{children:"Result"})]}),Object(O.jsx)(X.a,{type:"vertical"}),Object(O.jsxs)("div",{onClick:function(){return t.push("/likelist")},className:"footer-button",children:[Object(O.jsx)(J.a,{className:"footer-button-icon"}),Object(O.jsx)("span",{children:"Like List"})]})]})})]})})),ve=ee.a.Content,ye=D.a.Meta,Ne=H.a.CheckableTag,ke=function(e){Object(u.a)(s,e);var t=Object(b.a)(s);function s(e){var a;return Object(d.a)(this,s),(a=t.call(this,e)).userActions=[{name:"dislike",displayName:Object(O.jsxs)("p",{className:"feedback-tag-description",children:["I don't ",Object(O.jsx)("br",{}),"like it"]}),icon:Object(O.jsx)(be.a,{className:"feedback-tag-icon"})},{name:"noclue",displayName:Object(O.jsxs)("p",{className:"feedback-tag-description",children:["I have ",Object(O.jsx)("br",{}),"no clue"]}),icon:Object(O.jsx)(pe.a,{className:"feedback-tag-icon"})},{name:"like",displayName:Object(O.jsxs)("p",{className:"feedback-tag-description",children:["Show more ",Object(O.jsx)("br",{}),"like this!"]}),icon:Object(O.jsx)(J.a,{className:"feedback-tag-icon"})}],a.handleExplainModalChange=function(){a.setState({explainModal:!a.state.explainModal})},a.handleAdjustModalChange=function(){if(a.state.adjustModal){var e=(new B.a).get("id",{path:"/"}),t={moodWeight:parseFloat(a.state.moodWeight),prefWeight:parseFloat(a.state.prefWeight),pitchWeight:parseFloat(a.state.pitchWeight)};C(e,t).then((function(){return a.props.history.push("/result?people="+a.state.selectedPeople+"&mood="+a.state.selectedMood)}))}a.setState({adjustModal:!a.state.adjustModal})},a.onChangeMood=function(e){a.setState({moodWeight:e.target.value},(function(){return a.checkAdjustAvailability()}))},a.onChangePitch=function(e){a.setState({pitchWeight:e.target.value},(function(){return a.checkAdjustAvailability()}))},a.onChangeSongPref=function(e){a.setState({prefWeight:e.target.value},(function(){return a.checkAdjustAvailability()}))},a.state={songList:[{songNum:83377,title:'\ub9cc\uc57d\uc5d0 (\ub4dc\ub77c\ub9c8"\ucf8c\ub3c4 \ud64d\uae38\ub3d9")',artist:"\ud0dc\uc5f0(\uc18c\ub140\uc2dc\ub300)",year:2008,genre:"Ballad",id:"1BHLy0efFQ8FFxyxgJtTMf"},{songNum:21022,title:"\ud754\ub4e4\ub9ac\ub294 \uaf43\ub4e4 \uc18d\uc5d0\uc11c \ub124 \uc0f4\ud478 \ud5a5\uc774 \ub290\uaef4\uc9c4 \uac70\uc57c",artist:"\uc7a5\ubc94\uc900",year:2019,genre:"Ballad",id:"2skS61BQztE5bUpqJnBJAx"},{songNum:4772,title:"\ucde8\uc911\uc9c4\ub2f4",artist:"\uc804\ub78c\ud68c",year:1996,genre:"Ballad",id:"39FFkPyRLQtYBJkgV6ETAw"},{songNum:90515,title:"\uc2dc\ucc28(We Are)(Feat. \ub85c\uaf2c,\uadf8\ub808\uc774(GRAY))",artist:"\uc6b0\uc6d0\uc7ac",year:2017,genre:"Hiphop",id:"2SMq0lOqCTHayWa9juoI0d"},{songNum:91954,title:"IndiGO",artist:"Justhis,Kid Milli,NO:EL(\uc7a5\uc6a9\uc900),Young B",year:2018,genre:"Hiphop",id:"5oxmx6B0kWTuCKgBzv8NpH"}],currSongIndex:0,feedbacks:new Map,loading:!0,adjustModal:!1,explainModal:!1,selectedFeedback:"",moodWeight:"0.5",pitchWeight:"0.5",prefWeight:"0.5",selectedMood:"",selectedPeople:"",adjustAvailable:!0,userId:""},a.checkAdjustAvailability=a.checkAdjustAvailability.bind(Object(z.a)(a)),a}return Object(j.a)(s,[{key:"loadSongFromModel",value:function(){var e,t,s,a=this;console.log(this.state.userId),(e=this.state.userId,t=this.state.selectedMood.toLowerCase()+","+this.state.selectedPeople.toLowerCase(),s=5,y.get("/users/".concat(e,"/recommendations?moods=").concat(t,"&per=").concat(s))).then((function(e){console.log(e.data),a.setState({songList:e.data,currSongIndex:0})})).then((function(){a.setState({loading:!1})}))}},{key:"handleSelectedFeedback",value:function(e,t,s){t&&this.setState({feedbacks:this.state.feedbacks.set(s.id,e)}),S(this.state.userId,[s],e),console.log(this.state.feedbacks),this.state.currSongIndex<4?this.setState({currSongIndex:this.state.currSongIndex+1}):(console.log("end!"),this.setState({loading:!0}),this.loadSongFromModel())}},{key:"checkAdjustAvailability",value:function(){console.log(this.state.adjustAvailable),console.log(this.state.moodWeight),console.log(this.state.pitchWeight),console.log(this.state.prefWeight),this.state.adjustAvailable&&"0"===this.state.moodWeight&&"0"===this.state.pitchWeight&&"0"===this.state.prefWeight?this.setState({adjustAvailable:!1}):this.state.adjustAvailable||"0"===this.state.moodWeight&&"0"===this.state.pitchWeight&&"0"===this.state.prefWeight||this.setState({adjustAvailable:!0})}},{key:"componentDidMount",value:function(){var e=this,t=de.a.parse(this.props.location.search),s=(new B.a).get("id",{path:"/"});this.setState({userId:s,selectedMood:t.mood,selectedPeople:t.people},(function(){return e.loadSongFromModel()})),N(s).then((function(t){e.setState({moodWeight:t.data.moodWeight.toString()}),e.setState({pitchWeight:t.data.pitchWeight.toString()}),e.setState({prefWeight:t.data.prefWeight.toString()})}))}},{key:"pitchTags",value:function(e){return e>.4?Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(H.a,{color:"#6200ee",children:"Easy"})," ",Object(O.jsx)(H.a,{children:"Normal"})," ",Object(O.jsx)(H.a,{children:"Hard"})]}):e>.2?Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(H.a,{children:"Easy"})," ",Object(O.jsx)(H.a,{color:"#6200ee",children:"Normal"})," ",Object(O.jsx)(H.a,{children:"Hard"})]}):Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(H.a,{children:"Easy"})," ",Object(O.jsx)(H.a,{children:"Normal"})," ",Object(O.jsx)(H.a,{color:"#6200ee",children:"Hard"})]})}},{key:"adjustModalFooter",value:function(e){return e?[Object(O.jsx)(g.a,{type:"primary",onClick:this.handleAdjustModalChange,children:"CONFIRM"},"weight-control-confirm")]:[Object(O.jsx)(ge.a,{className:"warning-icon"}),Object(O.jsxs)("div",{className:"warning",children:["Make sure you select at least",Object(O.jsx)("br",{}),"one factor to affect the result"]}),Object(O.jsx)(g.a,{type:"primary",onClick:this.handleAdjustModalChange,disabled:!0,children:"CONFIRM"},"weight-control-confirm")]}},{key:"render",value:function(){var e=this,t=this.state.songList[this.state.currSongIndex];return Object(O.jsxs)("div",{style:{backgroundColor:"#F6F0FE"},children:[Object(O.jsx)(ie,{history:this.props.history}),Object(O.jsxs)(ve,{className:"result-contents",children:[Object(O.jsx)("p",{className:"result-description",children:"Vocali found the best song for you!"}),Object(O.jsxs)("p",{className:"result-description-small",children:["If you leave feedback on the recommended song, ",Object(O.jsx)("br",{}),"we will recommend a new song."]}),Object(O.jsx)(D.a,{className:"song-info",title:"Song No. ".concat(t.songNum),extra:Object(O.jsx)(g.a,{type:"link",onClick:this.handleExplainModalChange,style:{padding:"0"},children:"Why this song?"}),actions:this.userActions.map((function(s){return Object(O.jsxs)(Ne,{checked:e.state.feedbacks.get(t.id)===s.name,onChange:function(a){return e.handleSelectedFeedback(s.name,a,t)},style:{width:"80%",padding:"5px",margin:"0"},children:[s.icon,s.displayName]},s.name)})),children:Object(O.jsx)(je.a,{loading:this.state.loading,active:!0,children:Object(O.jsx)(ye,{className:"card-skeleton",title:t.title,description:t.artist})})}),Object(O.jsx)("p",{className:"result-description-small",children:"Keep getting unsatisfactory results?"}),Object(O.jsx)(g.a,{className:"adjust-button",type:"primary",onClick:this.handleAdjustModalChange,children:"Adjust factor importance"}),Object(O.jsxs)(W.a,{title:"Adjust factor importance",visible:this.state.adjustModal,onCancel:this.handleAdjustModalChange,footer:this.adjustModalFooter(this.state.adjustAvailable),children:[Object(O.jsx)("p",{children:"You can change how much each factor influences the recommendation"}),Object(O.jsxs)("div",{className:"weight-control-slider",children:[Object(O.jsx)("p",{className:"weight-slider-title",children:"Mood"}),Object(O.jsx)("p",{className:"weight-slider-description",children:"How much your mood factors into recommendations"}),Object(O.jsxs)(ue.a.Group,{className:"weight-options",defaultValue:this.state.moodWeight,onChange:this.onChangeMood,buttonStyle:"solid",children:[Object(O.jsx)(ue.a.Button,{value:"0",children:"None"}),Object(O.jsx)(ue.a.Button,{value:"0.5",children:"Moderate"}),Object(O.jsx)(ue.a.Button,{value:"1",children:"Strong"})]})]}),Object(O.jsxs)("div",{className:"weight-control-slider",children:[Object(O.jsx)("p",{className:"weight-slider-title",children:"Pitch"}),Object(O.jsx)("p",{className:"weight-slider-description",children:"How much your pitch factors into recommendations"}),Object(O.jsxs)(ue.a.Group,{className:"weight-options",defaultValue:this.state.pitchWeight,onChange:this.onChangePitch,buttonStyle:"solid",children:[Object(O.jsx)(ue.a.Button,{value:"0",children:"None"}),Object(O.jsx)(ue.a.Button,{value:"0.5",children:"Moderate"}),Object(O.jsx)(ue.a.Button,{value:"1",children:"Strong"})]})]}),Object(O.jsxs)("div",{className:"weight-control-slider",children:[Object(O.jsx)("p",{className:"weight-slider-title",children:"Song Preference"}),Object(O.jsx)("p",{className:"weight-slider-description",children:"How much your rating history factors into recommendations"}),Object(O.jsxs)(ue.a.Group,{className:"weight-options",defaultValue:this.state.prefWeight,onChange:this.onChangeSongPref,buttonStyle:"solid",children:[Object(O.jsx)(ue.a.Button,{value:"0",children:"None"}),Object(O.jsx)(ue.a.Button,{value:"0.5",children:"Moderate"}),Object(O.jsx)(ue.a.Button,{value:"1",children:"Strong"})]})]})]}),Object(O.jsx)(W.a,{title:"Score of this song",visible:this.state.explainModal,onCancel:this.handleExplainModalChange,footer:[Object(O.jsx)(g.a,{type:"primary",onClick:this.handleExplainModalChange,children:"OK"},"weight-control-confirm")],children:Object(O.jsxs)("div",{className:"song-score-info",children:[Object(O.jsxs)("div",{className:"pitch-score-div",children:[Object(O.jsx)("p",{className:"score-title",children:"Pitch"}),Object(O.jsx)("div",{children:this.pitchTags(t.pitchScore)})]}),Object(O.jsxs)("div",{className:"mood-score-div",children:[Object(O.jsx)("p",{className:"score-title",children:"Mood"}),Object(O.jsxs)("div",{children:["This song is ",Object(O.jsxs)("strong",{children:[(100*t.moodScore).toFixed(1),"%"]})," ",this.state.selectedMood]})]}),Object(O.jsxs)("div",{className:"song-score-div",children:[Object(O.jsx)("p",{className:"score-title",children:"Preference"}),Object(O.jsx)("div",{className:"pref-score",children:Object(O.jsxs)("p",{children:[Object(O.jsxs)("strong",{children:[(100*t.prefScore).toFixed(1),"%"]})," match based on ",Object(O.jsx)("br",{}),"users with similar",Object(O.jsx)("br",{}),"music taste as you"]})})]})]})})]}),Object(O.jsx)(fe,{history:this.props.history})]})}}]),s}(i.a.Component),Ce=Object(h.withRouter)(ke),Se=(s(186),D.a.Meta),we=function(e){Object(u.a)(s,e);var t=Object(b.a)(s);function s(){var e;Object(d.a)(this,s);for(var a=arguments.length,i=new Array(a),n=0;n<a;n++)i[n]=arguments[n];return(e=t.call.apply(t,[this].concat(i))).state={songList:[],feedbacks:new Map,loading:!1,modal:!1,drawer:!1,selectedFeedback:""},e}return Object(j.a)(s,[{key:"nextPath",value:function(e){this.props.history.push(e)}},{key:"handleSelectedFeedback",value:function(e,t,s){t&&this.setState({feedbacks:this.state.feedbacks.set(s,e)}),console.log(this.state.feedbacks)}},{key:"handleDelete",value:function(e){this.setState({songList:this.state.songList.filter((function(t){return t.id!==e}))})}},{key:"componentDidMount",value:function(){var e,t=this,s=(new B.a).get("id",{path:"/"}),a=[];(e=s,y.get("/users/".concat(e,"/songs/select"))).then((function(e){e.data.forEach((function(e){"LIKE"===e.category&&e.song&&a.push(e.song)}))})).then((function(){return t.setState({songList:a})}))}},{key:"render",value:function(){var e=this,t=this.state.loading;return console.log(this.state.songList),Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(ie,{history:this.props.history}),Object(O.jsxs)("div",{className:"like-list-div",children:[this.state.songList.map((function(s){return Object(O.jsx)(D.a,{className:"like-list",title:"Song No. ".concat(s.songNum),extra:Object(O.jsx)(g.a,{type:"link",onClick:function(){return e.handleDelete(s.id)},children:"Delete"}),children:Object(O.jsx)(je.a,{loading:t,avatar:!0,active:!0,children:Object(O.jsx)(Se,{title:s.title,description:s.artist})})})})),Object(O.jsx)("div",{style:{height:"20px"}})]}),Object(O.jsx)(fe,{history:this.props.history})]})}}]),s}(i.a.Component),Me=Object(h.withRouter)(we);var Pe=function(){return Object(O.jsx)(O.Fragment,{children:Object(O.jsx)(l.a,{basename:"/vocali-web",children:Object(O.jsxs)(h.Switch,{children:[Object(O.jsx)(h.Route,{exact:!0,path:"/",component:P}),Object(O.jsx)(h.Route,{exact:!0,path:"/home",component:le}),Object(O.jsx)(h.Route,{exact:!0,path:"/info",component:L}),Object(O.jsx)(h.Route,{exact:!0,path:"/songpref",component:K}),Object(O.jsx)(h.Route,{exact:!0,path:"/pitch",component:$}),Object(O.jsx)(h.Route,{exact:!0,path:"/result",component:Ce}),Object(O.jsx)(h.Route,{exact:!0,path:"/likelist",component:Me})]})})})};c.a.render(Object(O.jsx)(r.a,{basename:"/vocali-web",children:Object(O.jsx)(Pe,{})}),document.getElementById("root"))}},[[190,1,2]]]);
//# sourceMappingURL=main.54b52d0e.chunk.js.map