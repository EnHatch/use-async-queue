!function(n,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e(require("react")):"function"==typeof define&&define.amd?define(["react"],e):n.useAsyncQueue=e(n.react)}(this,function(n){return function(e){var t=e.concurrency;void 0===t&&(t=8);var u=e.done,r=e.drain,i=e.inflight;t<1&&(t=Infinity);var c=n.useState({numPending:0,numInFlight:0,numDone:0}),s=c[0],o=c[1],f=n.useRef([]),a=n.useRef([]);return n.useEffect(function(){if(s.numDone>0&&r&&0===f.current.length&&0===a.current.length)return r();for(var n=function(){var n=a.current.shift();f.current.push(n),o(function(n){return Object.assign({},n,{numPending:n.numPending-1,numInFlight:n.numInFlight+1})}),i&&i(Object.assign({},n,{stats:s}));var e=n.task();e.then(function(){f.current.pop(n),o(function(n){return Object.assign({},n,{numInFlight:n.numInFlight-1,numDone:n.numDone+1})}),u&&u(Object.assign({},n,{result:e,stats:s}))}).catch(function(){f.current.pop(n),o(function(n){return Object.assign({},n,{numInFlight:n.numInFlight-1,numDone:n.numDone+1})}),u&&u(Object.assign({},n,{result:e,stats:s}))})};f.current.length<t&&a.current.length>0;)n()},[t,u,r,i,s]),{add:n.useCallback(function(n){a.current.push(n),o(function(n){return Object.assign({},n,{numPending:n.numPending+1})})},[]),stats:s}}});
//# sourceMappingURL=use-async-queue.umd.js.map
