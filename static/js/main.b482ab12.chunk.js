(this.webpackJsonpminesweeper=this.webpackJsonpminesweeper||[]).push([[0],{12:function(e,t,n){},13:function(e,t,n){},15:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var r=n(3),i=n.n(r),a=n(7),c=n.n(a),o=(n(12),n(4)),s=n(2),l=n(5);n(13);var u=n(1),d=n.p+"static/media/red-flag.083d31fd.svg",b=n(0),f={root:{backgroundColor:"#12161F",padding:2,borderRadius:4},flagIcon:{backgroundColor:"#12161F"},content:{height:40,width:40,borderRadius:4,backgroundColor:"#4b505b",margin:1,alignItems:"center",justifyContent:"center",flex:1,alignSelf:"stretch",color:"white"}},v=function(e){var t=e.count,n=e.style;return Object(b.jsxs)("div",{className:Object(u.a)(f.root),style:n,children:[Object(b.jsx)("div",{className:Object(u.a)(f.content),children:t}),Object(b.jsx)("div",{className:Object(u.a)(f.content,f.flagIcon),children:Object(b.jsx)("img",{src:d,width:24,height:24})})]})},g=n.p+"static/media/restart.b8c48c21.svg",j=(n(15),{root:{backgroundColor:"#12161F",padding:2,paddingLeft:3,borderRadius:4,alignItems:"center",justifyContent:"center"},restartButton:{height:40,width:40,borderRadius:4,margin:1,flex:1,alignItems:"center",justifyContent:"center",color:"white",backgroundColor:"#3D7CEB",cursor:"pointer",marginLeft:2}});var m,h=function(e){var t,n=e.currentLevel,r=e.levels,i=e.style,a=e.onRestartClick,c=e.onLevelChange,o=(t=r,Object.keys(t));return Object(b.jsxs)("div",{className:Object(u.a)(j.root),style:i,children:[Object(b.jsx)("div",{className:"level-select",children:Object(b.jsx)("select",{value:n,onChange:function(e){return c(e.target.value)},children:o.map((function(e){return Object(b.jsx)("option",{children:e},e)}))})}),Object(b.jsx)("div",{className:Object(u.a)(j.restartButton),onClick:a,children:Object(b.jsx)("img",{src:g,width:24,height:24})})]})},O=n.p+"static/media/timer_black_24dp.280c283b.svg",y={root:{backgroundColor:"#12161F",padding:2,borderRadius:4},timer:{backgroundColor:"#12161F"},content:{height:40,width:40,borderRadius:4,backgroundColor:"#4b505b",margin:1,alignItems:"center",justifyContent:"center",flex:1,alignSelf:"stretch",color:"white"}},p=function(e){var t=e.status,n=e.style,i=Object(r.useState)(0),a=Object(o.a)(i,2),c=a[0],s=a[1];Object(r.useEffect)((function(){return"running"===t&&(m=setInterval((function(){s((function(e){return e+1}))}),1e3)),"stopped"===t&&clearInterval(m),"reset"===t&&(clearInterval(m),s(0)),function(){return clearInterval(m)}}),[t]);var l="".concat(c%60).padStart(2,"0"),d="".concat(Math.floor(c/60)).padStart(2,"0");return Object(b.jsxs)("div",{className:Object(u.a)(y.root),style:n,children:[Object(b.jsx)("div",{className:Object(u.a)(y.content,y.timer),children:Object(b.jsx)("img",{src:O})}),Object(b.jsx)("div",{className:Object(u.a)(y.content),children:d}),Object(b.jsx)("div",{className:Object(u.a)(y.content),children:l})]})},A={root:{height:40,width:40},content:{backgroundColor:"#3D7CEB",borderRadius:4,margin:1,alignItems:"center",justifyContent:"center",flex:1,alignSelf:"stretch"},clickable:{cursor:"pointer"},unveiled:{backgroundColor:"#4b505b"},flagged:{backgroundColor:"#edc9af"},mine:{backgroundColor:"#CD5F66"},flag:{width:24,height:24},nearbyMines:{fontWeight:"bolder",fontSize:16}},C=function(e){switch(e){case 1:return"#77dd77";case 2:return"#e3fd96";case 3:return"#fdfd96";default:return"#fd9696"}},x=function(e){var t=e.isMine,n=e.visibility,r=e.nearbyMines,i=e.gameOver,a=e.gameWon,c=e.style,o=e.onClick,s=e.onRightClick,l="unveiled"===n,f="flagged"===n,v=function(e){return function(t){t.preventDefault(),e()}},g=!(i||a)&&!l&&!f,j=v(g?o:function(){}),m=v(i||a||l?function(){}:s);return Object(b.jsx)("div",{className:Object(u.a)(A.root),style:c,children:Object(b.jsxs)("div",{className:Object(u.a)([A.content,l&&A.unveiled,f&&A.flagged,g&&A.clickable]),onClick:j,onContextMenu:m,children:[f&&Object(b.jsx)("img",{src:d,className:Object(u.a)(A.flag),alt:"Flagged"}),i&&"flagged"!==n&&t&&Object(b.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAAEUklEQVRIie2TXUxbZRjH/+ezPafn9Ou0pUBbKGtpWR3lY3NjYwMlLG7R6BKJ8SvxY1nMYoxRr4hX3pgtMV4YNTPTEC9GMhJuZlyciolzEtwMHYMNSgdjfG2lVCg9Pf06rRdkDTKXoMmu9Ll9////73mf932A/1B1Uc3exvf/qYvcqtDlGq+iSOL4QwNYtEzwkKXMUFvbGHwoADvDtr5c4eT9nPbovwLs9TcfrKz0Sw8SGhjWaWFZVLJc01aCW3y7nnA4gpUlAENSvlabdbhz+6Ndf2fQs7QFAB4R9R6n01fxoGC/P1h7JNh6jqXxhVYrx0qA2bT6dYNeX3izuubU0/V7e8vK6nV/AVC0FQAOSlabX298fXOwNRAQnm1o/fQ1m+un7hrvYR1Ffx6JRDIlwNTU76thWQ63mSymj/07nnvGJV3a79u5DwA8Ho/ertGYAMDKauDguAMbsskng3veeUksHzpZGzh+zFlV8dX8zOiMmvgIAOiNXdxW0j8sZtKd5RotcaI2EOyPLpzlGabvlqL0+XnRck/n5niPz+cTy0mhw8kJ3W9VuYNeXmABYDIl528qqZ6xsbEsAFAbAZTBGjbQ9PNNeoMeAOp0othsMDaH1lY6XqhwWCmGBA0CEsPqQ6vJp96u9r76hrPaLTFsKefkdCR0dth+FLhevO8Gkcjw0g2jIQLAkSRVMEUSNRzPnKlvrgGAITYBKc/Cy+vI3vqdOwBgQqMgpapozAu4nkxkJ5W108CAWprf5sdayGQuLmUzyBPAOfMypjTp0pnWpEHSVAQA3KWyuOJQoNmlg6/IAQC+XLg9MjB6+dTGvPsAY3LiwoVYNGZUKdSa9TB3mPCbJCOLAkiBBKwULksy0K5D2+MOmKMEeJXC1bUVZTqhfAagsDGPBrqoJt9Em0MrvOjQaAM79UZPp2STAEC9m0dlC4+Kw04MDt+FTmRQ5zaBpdf7mo+mwE2vT+P03OzowMRQz+aG6Za6mx+2GGzHumt8BpogAAAqAdwR8qBFEsl0DoKWwd4me8l0Mapgv41DIizDmFuHtZnNbsvuzuHlXHbmTjY9NpOS+ydclhA1F1v8XiOaxkeTa4EG0WCTuQIRDhTg22eF22sAS69/kG+mVqChKSxrtUhrGdgKKkKTcfxRzCNfLGAPb+LbzRb7IWuZr1Oy7Q8rchcXT3IUANyKLY4vkvaeq0rURmXhCOYEYVxOwl7Og6ZIFItFzGaL0NdVwlZjxXI0idSqjN0BCa7tBuQcNHpn5+BXOUzJSv7E9MS1W6n0K79OXOkhNs9sj7d5t1cUPnnXva0pYScoS4OIa0oejY/VwbPNWtLNL6zg0vkRHCjjERpcQt0dBmfm5id/Xon1fnfN9QHQpwKbFg0A5uKL80yFpWcoGhfbaZORjRbyGgEsrWSIaCJD2CQd4rE1TP8SKTrSai4+uBqvijFL742P/di/MnskdGPk23tL9n9tqf4Eyd6AmHytescAAAAASUVORK5CYII=",alt:"Mine exploded"}),l&&!t&&0!==r&&Object(b.jsx)("span",{className:Object(u.a)([A.nearbyMines],{color:C(r)}),children:r})]})})},k=function(e){return e.size};function S(e,t){if(!function(e){return Array.isArray(e)}(e))return S(k(e),t);var n=e,r=Math.floor(t/n[1]),i=t%n[1];return[[r-1,i-1],[r,i-1],[r+1,i-1],[r-1,i],[r+1,i],[r-1,i+1],[r,i+1],[r+1,i+1]].reduce((function(e,t){var r=Object(o.a)(t,2),i=r[0],a=r[1];if(i<0||a<0||i>=n[0]||a>=n[1])return e;var c=i*n[1]+a;return e.some((function(e){return e===c}))?e:e.concat(c)}),[])}var w,M,R=function(e,t){return S(e,t).reduce((function(t,n){return t+(e.tiles[n].isMine?1:0)}),0)},N={root:{backgroundColor:"#12161F",borderRadius:4,padding:2,flexWrap:"wrap"}},L=function(e){var t=e.board,n=e.state,r=e.gameWon,i=e.onClick,a=e.onRightClick,c=n.visibilityState,o=k(t),l="1 0 ".concat(100/o[1],"%");return Object(b.jsx)("div",{style:Object(s.a)(Object(s.a)({},N.root),{},{width:40*o[1]+1*(o[1]+1)}),children:t.tiles.map((function(e,o){var s=e.isMine,u=c[o];return Object(b.jsx)(x,{isMine:s,visibility:u,nearbyMines:R(t,o),gameWon:r,gameOver:n.gameOver,style:{flex:l},onClick:function(){i(o)},onRightClick:function(){return a(o)}},o)}))})},z=function(e){return e[(t=e.length,Math.floor(Math.random()*t))];var t},B=function(e,t){return e.filter((function(e){return!t.some((function(t){return e===t}))}))},I=function e(t,n){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[n],i=S(t,n),a=i.filter((function(e){return!t.tiles[e].isMine})),c=B(a,r),o=r.concat(c);return c.reduce((function(n,r){if(0!==R(t,r))return n;var i=e(t,r,o);return o=o.concat(i),n.concat(i)}),c)};!function(e){e.Easy="Easy",e.Hard="Hard"}(w||(w={}));var E=(M={},Object(l.a)(M,w.Easy,{size:[11,11],mines:10}),Object(l.a)(M,w.Hard,{size:[20,25],mines:80}),M),G=function(e,t){switch(t.type){case"changeLevel":return F(t.payload.level);case"primaryClick":var n=e.boardState,r=e.level,i=t.payload.index,a=n.visibilityState.some((function(e){return"unveiled"===e}))?e.board:function(e,t){var n=e.size,r=e.mines;if(r>n[0]*n[1]-9)throw new Error("Board cannot be full of mines");for(var i=[t].concat(S(n,t)),a=new Array(n[0]*n[1]).fill(0).map((function(e,t){return t})).filter((function(e,t){return!i.some((function(e){return e===t}))})),c=[],o=function(e){var t=z(a);c.push(t),a=a.filter((function(e){return e!==t}))},s=0;s<r;++s)o();return{tiles:new Array(n[0]*n[1]).fill(0).map((function(e,t){return t})).map((function(e){return{isMine:c.includes(e)}})),size:n}}(E[r],i),c=a.tiles[i].isMine,o=c?[i]:[i].concat(I(a,i));return Object(s.a)(Object(s.a)({},e),{},{board:a,boardState:{gameOver:c,visibilityState:n.visibilityState.map((function(e,t){return o.some((function(e){return e===t}))&&"flagged"!==e?"unveiled":e}))}});case"secondaryClick":var l=e.board,u=e.boardState,d=t.payload.index,b=l.tiles.every((function(e,t){return!!e.isMine||"unveiled"===u.visibilityState[t]}));return!u.visibilityState.some((function(e){return"unveiled"===e}))||b||u.gameOver?e:Object(s.a)(Object(s.a)({},e),{},{boardState:Object(s.a)(Object(s.a)({},u),{},{visibilityState:u.visibilityState.map((function(e,t){return t!==d?e:"flagged"===e?"hidden":"flagged"}))})})}},F=function(e){var t,n=E[e].size,r=(t=n,{tiles:new Array(t[0]*t[1]).fill(0).map((function(){return{isMine:!!Math.round(Math.random())}})),size:t}),i=function(e){return{gameOver:!1,visibilityState:e.tiles.map((function(){return"hidden"}))}}(r);return{level:e,board:r,boardState:i}};var T=function(){var e=Object(r.useReducer)(G,F(w.Easy)),t=Object(o.a)(e,2),n=t[0],i=t[1],a=n.board,c=n.boardState,s=n.level,l=E[s].mines,u=a.tiles.every((function(e,t){return!!e.isMine||"unveiled"===c.visibilityState[t]})),d=c.visibilityState.some((function(e){return"unveiled"===e})),f=l-c.visibilityState.reduce((function(e,t){return"flagged"===t?e+1:e}),0);return Object(b.jsx)("div",{className:"App",children:Object(b.jsx)("div",{style:{alignItems:"center",justifyContent:"center",flex:1},children:Object(b.jsxs)("div",{style:{flexDirection:"column"},children:[Object(b.jsxs)("div",{style:{marginBottom:8,justifyContent:"space-between"},children:[Object(b.jsx)(p,{status:d?c.gameOver||u?"stopped":"running":"reset"}),Object(b.jsx)(h,{currentLevel:s,levels:E,onRestartClick:function(){i({type:"changeLevel",payload:{level:s}})},onLevelChange:function(e){i({type:"changeLevel",payload:{level:e}})}}),Object(b.jsx)(v,{count:f})]}),Object(b.jsx)(L,{board:a,state:c,gameWon:u,onClick:function(e){i({type:"primaryClick",payload:{index:e}})},onRightClick:function(e){i({type:"secondaryClick",payload:{index:e}})}})]})})})},K=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(t){var n=t.getCLS,r=t.getFID,i=t.getFCP,a=t.getLCP,c=t.getTTFB;n(e),r(e),i(e),a(e),c(e)}))};c.a.render(Object(b.jsx)(i.a.StrictMode,{children:Object(b.jsx)(T,{})}),document.getElementById("root")),K()}},[[16,1,2]]]);
//# sourceMappingURL=main.b482ab12.chunk.js.map