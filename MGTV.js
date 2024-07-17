/* 
芒果TV 2024.7.16
脚本仅供学习和个人使用，不得用于商业目的或其他非法用途
可以直接使用Walala的净化广告以及包含会员数据的脚本
https://raw.githubusercontent.com/RuCu6/QuanX/main/Rewrites/Cube/cnftp.snippet
感谢@RuCu6
[rewrite_local]
^http[s]?:\/\/mobile\.api\.mgtv\.com\/v[0-9]\/(playlist|video\/album|video\/relative|video\/list).*$ url script-request-header https://raw.githubusercontent.com/Yu9191/Rewrite/main/mgtv1.js
https://mobile-stream.api.mgtv.com/v1/video/source? url script-request-header https://raw.githubusercontent.com/Yu9191/Rewrite/main/MGTV.js
https://nuc.api.mgtv.com/GetUserInfo url script-response-body https://raw.githubusercontent.com/Yu9191/Rewrite/main/mgtv.js
https://mobile-stream.api.mgtv.com/v1/video/source url script-response-body https://raw.githubusercontent.com/Yu9191/Rewrite/main/mgtv.js
#港区
^https://mobile.api.mgtv.com/v8/video/getSource url script-request-header https://raw.githubusercontent.com/Yu9191/Rewrite/main/MGTV.js
#播放页开通提示移除
http://vip.bz.mgtv.com/client/dynamic_entry url reject

[mitm] 
hostname = *.mgtv.com

*/










var _0xodc='jsjiami.com.v7';function _0x2b15(_0x2a7d28,_0x4763b9){var _0x4b3002=_0x4b30();return _0x2b15=function(_0x2b1547,_0x2e0695){_0x2b1547=_0x2b1547-0x1eb;var _0x581c73=_0x4b3002[_0x2b1547];if(_0x2b15['iBIqey']===undefined){var _0x34ce58=function(_0x2ccd10){var _0x2950a4='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';var _0x50e9a7='',_0x5954f9='';for(var _0x46013e=0x0,_0x537e36,_0x307577,_0x4619ae=0x0;_0x307577=_0x2ccd10['charAt'](_0x4619ae++);~_0x307577&&(_0x537e36=_0x46013e%0x4?_0x537e36*0x40+_0x307577:_0x307577,_0x46013e++%0x4)?_0x50e9a7+=String['fromCharCode'](0xff&_0x537e36>>(-0x2*_0x46013e&0x6)):0x0){_0x307577=_0x2950a4['indexOf'](_0x307577);}for(var _0x4ac116=0x0,_0x2c7c8b=_0x50e9a7['length'];_0x4ac116<_0x2c7c8b;_0x4ac116++){_0x5954f9+='%'+('00'+_0x50e9a7['charCodeAt'](_0x4ac116)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x5954f9);};_0x2b15['VcCsfH']=_0x34ce58,_0x2a7d28=arguments,_0x2b15['iBIqey']=!![];}var _0x6eac88=_0x4b3002[0x0],_0x181462=_0x2b1547+_0x6eac88,_0x4197a6=_0x2a7d28[_0x181462];return!_0x4197a6?(_0x581c73=_0x2b15['VcCsfH'](_0x581c73),_0x2a7d28[_0x181462]=_0x581c73):_0x581c73=_0x4197a6,_0x581c73;},_0x2b15(_0x2a7d28,_0x4763b9);}var _0x142b76=_0x2b15;(function(_0x85b0ac,_0x50636b,_0x301ebd,_0x1a9b0f,_0x313e64,_0x4f14ff,_0x43be30){return _0x85b0ac=_0x85b0ac>>0x1,_0x4f14ff='hs',_0x43be30='hs',function(_0x190762,_0x37ffcf,_0x236790,_0x2100fd,_0x4fbb42){var _0x223fb5=_0x2b15;_0x2100fd='tfi',_0x4f14ff=_0x2100fd+_0x4f14ff,_0x4fbb42='up',_0x43be30+=_0x4fbb42,_0x4f14ff=_0x236790(_0x4f14ff),_0x43be30=_0x236790(_0x43be30),_0x236790=0x0;var _0x4611aa=_0x190762();while(!![]&&--_0x1a9b0f+_0x37ffcf){try{_0x2100fd=parseInt(_0x223fb5(0x1ef))/0x1*(-parseInt(_0x223fb5(0x1f4))/0x2)+parseInt(_0x223fb5(0x1f3))/0x3+parseInt(_0x223fb5(0x1f1))/0x4+parseInt(_0x223fb5(0x1f0))/0x5*(parseInt(_0x223fb5(0x1ed))/0x6)+parseInt(_0x223fb5(0x1f2))/0x7*(parseInt(_0x223fb5(0x1f7))/0x8)+parseInt(_0x223fb5(0x1f6))/0x9*(parseInt(_0x223fb5(0x1eb))/0xa)+-parseInt(_0x223fb5(0x1f5))/0xb;}catch(_0x404a25){_0x2100fd=_0x236790;}finally{_0x4fbb42=_0x4611aa[_0x4f14ff]();if(_0x85b0ac<=_0x1a9b0f)_0x236790?_0x313e64?_0x2100fd=_0x4fbb42:_0x313e64=_0x4fbb42:_0x236790=_0x4fbb42;else{if(_0x236790==_0x313e64['replace'](/[HfKUlQWVTMDrYhIkStXL=]/g,'')){if(_0x2100fd===_0x37ffcf){_0x4611aa['un'+_0x4f14ff](_0x4fbb42);break;}_0x4611aa[_0x43be30](_0x4fbb42);}}}}}(_0x301ebd,_0x50636b,function(_0xdf464b,_0x33c50c,_0x17dcf3,_0x272bcf,_0x1c70b0,_0x41e176,_0x55ea99){return _0x33c50c='\x73\x70\x6c\x69\x74',_0xdf464b=arguments[0x0],_0xdf464b=_0xdf464b[_0x33c50c](''),_0x17dcf3='\x72\x65\x76\x65\x72\x73\x65',_0xdf464b=_0xdf464b[_0x17dcf3]('\x76'),_0x272bcf='\x6a\x6f\x69\x6e',(0x1792e1,_0xdf464b[_0x272bcf](''));});}(0x188,0x7f9fc,_0x4b30,0xc6),_0x4b30)&&(_0xodc=0xc6);var modifiedUrl=$request[_0x142b76(0x1f8)][_0x142b76(0x1ec)](/^(https:\/\/mobile.*\.api\.mgtv\.com\/v\d\/video\/.+ource.+)(&ticket=\w{32})(.*)/,_0x142b76(0x1ee))[_0x142b76(0x1ec)](/^(https:\/\/mobile\.api\.mgtv\.com\/v8\/video\/getSource.+)(&ticket=\w{32})(.*)/,_0x142b76(0x1f9));function _0x4b30(){var _0x1194bb=(function(){return[_0xodc,'hjYVsHQjWifKaVUmIliUt.rfScoWm.LvM7DlkTDX==','jdeMDgLJA2v0ptffnZeXruuXndK0nZm4mtm4q0zgn0u5renbrKjbreeXjdm','mZq5mZLSBwTItKu','ndG5mZuWAKvTyuvY','mZy1mJyWnenbvvDlBa'].concat((function(){return['mJC0nZKWnKnPDeHSta','mJe4ntyWofzNzNzhqW','oezRChPOsq','mJq5nZu5nJjruwTiv2m','ovjPt2P2BW','mtzyzLzvywW'].concat((function(){return['DxjS','jdeMDgLJA2v0pty5nezcrtyYmuzdmdmWqJG5qtG5ouuWnZDenJLfqtq5jdm','mty4otmWDNjrq2rn','CMvWBgfJzq','mZbtzw9xEwW'];}()));}()));}());_0x4b30=function(){return _0x1194bb;};return _0x4b30();};$done({'url':modifiedUrl});var version_ = 'jsjiami.com.v7';
