(()=>{var Au=0,Rh=1,Ru=2;var ds=1,Cu=2,Qs=3,tn=0,Ke=1,Ae=2,en=0,Wn=1,nn=2,Ch=3,Ph=4,Pu=5;var us=100,Iu=101,Lu=102,Du=103,Fu=104,Nu=200,Uu=201,ku=202,Ou=203,Ih=204,Lh=205,Bu=206,Hu=207,zu=208,Gu=209,Vu=210,Wu=211,$u=212,qu=213,Xu=214,Eo=0,To=1,Ao=2,zs=3,Ro=4,Co=5,Po=6,Io=7,ul=0,Yu=1,Ku=2,zi=0,Dh=1,Fh=2,Nh=3,ha=4,Uh=5,kh=6,Oh=7;var Bh=300,$n=301,fs=302,fl=303,pl=304,da=306,Gs=1e3,Yi=1001,Lo=1002,ti=1003,Zu=1004;var ua=1005;var Ve=1006,ml=1007;var sn=1008;var xi=1009,Hh=1010,zh=1011,tr=1012,gl=1013,Gi=1014,Ii=1015,bi=1016,yl=1017,vl=1018,er=1020,Gh=35902,Vh=35899,Wh=1021,$h=1022,Li=1023,Ki=1026,qn=1027,xl=1028,bl=1029,Xn=1030,_l=1031;var Ml=1033,fa=33776,pa=33777,ma=33778,ga=33779,Sl=35840,wl=35841,El=35842,Tl=35843,Al=36196,Rl=37492,Cl=37496,Pl=37488,Il=37489,ya=37490,Ll=37491,Dl=37808,Fl=37809,Nl=37810,Ul=37811,kl=37812,Ol=37813,Bl=37814,Hl=37815,zl=37816,Gl=37817,Vl=37818,Wl=37819,$l=37820,ql=37821,Xl=36492,Yl=36494,Kl=36495,Zl=36283,Jl=36284,va=36285,jl=36286;var kr=2300,Do=2301,So=2302,vh=2303,xh=2400,bh=2401,_h=2402;var Ju=3200;var xa=0,ju=1,xn="",ai="srgb",Or="srgb-linear",Br="linear",me="srgb";var wo=7680;var Qu=519,tf=512,ef=513,nf=514,Ql=515,sf=516,rf=517,tc=518,af=519,of=35044,rn=35048;var qh="300 es",Oi=2e3,Vs=2001;function jp(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function Qp(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function Hr(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function lf(){let s=Hr("canvas");return s.style.display="block",s}var Kd={},Ws=null;function Xh(...s){let t="THREE."+s.shift();Ws?Ws("log",t,...s):console.log(t,...s)}function cf(s){let t=s[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=s[1];e&&e.isStackTrace?s[0]+=" "+e.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function zt(...s){s=cf(s);let t="THREE."+s.shift();if(Ws)Ws("warn",t,...s);else{let e=s[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...s)}}function Vt(...s){s=cf(s);let t="THREE."+s.shift();if(Ws)Ws("error",t,...s);else{let e=s[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...s)}}function os(...s){let t=s.join(" ");t in Kd||(Kd[t]=!0,zt(...s))}function hf(s,t,e){return new Promise(function(i,n){function r(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:n();break;case s.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}var df={[Eo]:To,[Ao]:Po,[Ro]:Io,[zs]:Co,[To]:Eo,[Po]:Ao,[Io]:Ro,[Co]:zs},Zi=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){let i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){let i=this._listeners;if(i===void 0)return;let n=i[t];if(n!==void 0){let r=n.indexOf(e);r!==-1&&n.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let i=e[t.type];if(i!==void 0){t.target=this;let n=i.slice(0);for(let r=0,a=n.length;r<a;r++)n[r].call(this,t);t.target=null}}},li=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var $c=Math.PI/180,zr=180/Math.PI;function ba(){let s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(li[s&255]+li[s>>8&255]+li[s>>16&255]+li[s>>24&255]+"-"+li[t&255]+li[t>>8&255]+"-"+li[t>>16&15|64]+li[t>>24&255]+"-"+li[e&63|128]+li[e>>8&255]+"-"+li[e>>16&255]+li[e>>24&255]+li[i&255]+li[i>>8&255]+li[i>>16&255]+li[i>>24&255]).toLowerCase()}function se(s,t,e){return Math.max(t,Math.min(e,s))}function tm(s,t){return(s%t+t)%t}function qc(s,t,e){return(1-e)*s+e*t}function Ar(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:case Uint8ClampedArray:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function vi(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var Qh=class Qh{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,i=this.y,n=t.elements;return this.x=n[0]*e+n[3]*i+n[6],this.y=n[1]*e+n[4]*i+n[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=se(this.x,t.x,e.x),this.y=se(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=se(this.x,t,e),this.y=se(this.y,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(se(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(se(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let i=Math.cos(e),n=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*i-a*n+t.x,this.y=r*n+a*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Qh.prototype.isVector2=!0;var wt=Qh,Xe=class{constructor(t=0,e=0,i=0,n=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=n}static slerpFlat(t,e,i,n,r,a,o){let l=i[n+0],c=i[n+1],h=i[n+2],u=i[n+3],d=r[a+0],f=r[a+1],g=r[a+2],y=r[a+3];if(u!==y||l!==d||c!==f||h!==g){let m=l*d+c*f+h*g+u*y;m<0&&(d=-d,f=-f,g=-g,y=-y,m=-m);let p=1-o;if(m<.9995){let v=Math.acos(m),_=Math.sin(v);p=Math.sin(p*v)/_,o=Math.sin(o*v)/_,l=l*p+d*o,c=c*p+f*o,h=h*p+g*o,u=u*p+y*o}else{l=l*p+d*o,c=c*p+f*o,h=h*p+g*o,u=u*p+y*o;let v=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=v,c*=v,h*=v,u*=v}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,i,n,r,a){let o=i[n],l=i[n+1],c=i[n+2],h=i[n+3],u=r[a],d=r[a+1],f=r[a+2],g=r[a+3];return t[e]=o*g+h*u+l*f-c*d,t[e+1]=l*g+h*d+c*u-o*f,t[e+2]=c*g+h*f+o*d-l*u,t[e+3]=h*g-o*u-l*d-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,n){return this._x=t,this._y=e,this._z=i,this._w=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let i=t._x,n=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(i/2),h=o(n/2),u=o(r/2),d=l(i/2),f=l(n/2),g=l(r/2);switch(a){case"XYZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"YZX":this._x=d*h*u+c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u-d*f*g;break;case"XZY":this._x=d*h*u-c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u+d*f*g;break;default:zt("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let i=e/2,n=Math.sin(i);return this._x=t.x*n,this._y=t.y*n,this._z=t.z*n,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,i=e[0],n=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],u=e[10],d=i+o+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(a-n)*f}else if(i>o&&i>u){let f=2*Math.sqrt(1+i-o-u);this._w=(h-l)/f,this._x=.25*f,this._y=(n+a)/f,this._z=(r+c)/f}else if(o>u){let f=2*Math.sqrt(1+o-i-u);this._w=(r-c)/f,this._x=(n+a)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+u-i-o);this._w=(a-n)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(se(this.dot(t),-1,1)))}rotateTowards(t,e){let i=this.angleTo(t);if(i===0)return this;let n=Math.min(1,e/i);return this.slerp(t,n),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let i=t._x,n=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=i*h+a*o+n*c-r*l,this._y=n*h+a*l+r*o-i*c,this._z=r*h+a*c+i*l-n*o,this._w=a*h-i*o-n*l-r*c,this._onChangeCallback(),this}slerp(t,e){let i=t._x,n=t._y,r=t._z,a=t._w,o=this.dot(t);o<0&&(i=-i,n=-n,r=-r,a=-a,o=-o);let l=1-e;if(o<.9995){let c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+i*e,this._y=this._y*l+n*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this._onChangeCallback()}else this._x=this._x*l+i*e,this._y=this._y*l+n*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this.normalize();return this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),n=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(n*Math.sin(t),n*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},td=class td{constructor(t=0,e=0,i=0){this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Zd.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Zd.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,i=this.y,n=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*n,this.y=r[1]*e+r[4]*i+r[7]*n,this.z=r[2]*e+r[5]*i+r[8]*n,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,i=this.y,n=this.z,r=t.elements,a=1/(r[3]*e+r[7]*i+r[11]*n+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*n+r[12])*a,this.y=(r[1]*e+r[5]*i+r[9]*n+r[13])*a,this.z=(r[2]*e+r[6]*i+r[10]*n+r[14])*a,this}applyQuaternion(t){let e=this.x,i=this.y,n=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*n-o*i),h=2*(o*e-r*n),u=2*(r*i-a*e);return this.x=e+l*c+a*u-o*h,this.y=i+l*h+o*c-r*u,this.z=n+l*u+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,i=this.y,n=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*n,this.y=r[1]*e+r[5]*i+r[9]*n,this.z=r[2]*e+r[6]*i+r[10]*n,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=se(this.x,t.x,e.x),this.y=se(this.y,t.y,e.y),this.z=se(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=se(this.x,t,e),this.y=se(this.y,t,e),this.z=se(this.z,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(se(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let i=t.x,n=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=n*l-r*o,this.y=r*a-i*l,this.z=i*o-n*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Xc.copy(this).projectOnVector(t),this.sub(Xc)}reflect(t){return this.sub(Xc.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(se(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y,n=this.z-t.z;return e*e+i*i+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){let n=Math.sin(e)*t;return this.x=n*Math.sin(i),this.y=Math.cos(e)*t,this.z=n*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),n=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=n,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};td.prototype.isVector3=!0;var k=td,Xc=new k,Zd=new Xe,ed=class ed{constructor(t,e,i,n,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,n,r,a,o,l,c)}set(t,e,i,n,r,a,o,l,c){let h=this.elements;return h[0]=t,h[1]=n,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=i,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,n=e.elements,r=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],h=i[4],u=i[7],d=i[2],f=i[5],g=i[8],y=n[0],m=n[3],p=n[6],v=n[1],_=n[4],M=n[7],S=n[2],b=n[5],T=n[8];return r[0]=a*y+o*v+l*S,r[3]=a*m+o*_+l*b,r[6]=a*p+o*M+l*T,r[1]=c*y+h*v+u*S,r[4]=c*m+h*_+u*b,r[7]=c*p+h*M+u*T,r[2]=d*y+f*v+g*S,r[5]=d*m+f*_+g*b,r[8]=d*p+f*M+g*T,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[1],n=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-i*r*h+i*o*l+n*r*c-n*a*l}invert(){let t=this.elements,e=t[0],i=t[1],n=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=h*a-o*c,d=o*l-h*r,f=c*r-a*l,g=e*u+i*d+n*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/g;return t[0]=u*y,t[1]=(n*c-h*i)*y,t[2]=(o*i-n*a)*y,t[3]=d*y,t[4]=(h*e-n*l)*y,t[5]=(n*r-o*e)*y,t[6]=f*y,t[7]=(i*l-c*e)*y,t[8]=(a*e-i*r)*y,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,n,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*a+c*o)+a+t,-n*c,n*l,-n*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return os("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Yc.makeScale(t,e)),this}rotate(t){return os("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Yc.makeRotation(-t)),this}translate(t,e){return os("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Yc.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,i=t.elements;for(let n=0;n<9;n++)if(e[n]!==i[n])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}};ed.prototype.isMatrix3=!0;var Yt=ed,Yc=new Yt,Jd=new Yt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),jd=new Yt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function em(){let s={enabled:!0,workingColorSpace:Or,spaces:{},convert:function(n,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===me&&(n.r=gn(n.r),n.g=gn(n.g),n.b=gn(n.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(n.applyMatrix3(this.spaces[r].toXYZ),n.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===me&&(n.r=Hs(n.r),n.g=Hs(n.g),n.b=Hs(n.b))),n},workingToColorSpace:function(n,r){return this.convert(n,this.workingColorSpace,r)},colorSpaceToWorking:function(n,r){return this.convert(n,r,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===xn?Br:this.spaces[n].transfer},getToneMappingMode:function(n){return this.spaces[n].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(n,r=this.workingColorSpace){return n.fromArray(this.spaces[r].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,r,a){return n.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(n,r){return os("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(n,r)},toWorkingColorSpace:function(n,r){return os("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(n,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],i=[.3127,.329];return s.define({[Or]:{primaries:t,whitePoint:i,transfer:Br,toXYZ:Jd,fromXYZ:jd,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:ai},outputColorSpaceConfig:{drawingBufferColorSpace:ai}},[ai]:{primaries:t,whitePoint:i,transfer:me,toXYZ:Jd,fromXYZ:jd,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:ai}}}),s}var ae=em();function gn(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Hs(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}var Ts,Fo=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{Ts===void 0&&(Ts=Hr("canvas")),Ts.width=t.width,Ts.height=t.height;let n=Ts.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),i=Ts}return i.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Hr("canvas");e.width=t.width,e.height=t.height;let i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let n=i.getImageData(0,0,t.width,t.height),r=n.data;for(let a=0;a<r.length;a++)r[a]=gn(r[a]/255)*255;return i.putImageData(n,0,0),e}else if(t.data){let e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(gn(e[i]/255)*255):e[i]=gn(e[i]);return{data:e,width:t.width,height:t.height}}else return zt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},im=0,$s=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:im++}),this.uuid=ba(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},n=this.data;if(n!==null){let r;if(Array.isArray(n)){r=[];for(let a=0,o=n.length;a<o;a++)n[a].isDataTexture?r.push(Kc(n[a].image)):r.push(Kc(n[a]))}else r=Kc(n);i.url=r}return e||(t.images[this.uuid]=i),i}};function Kc(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Fo.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(zt("Texture: Unable to serialize Texture."),{})}var nm=0,Zc=new k,ui=class s extends Zi{constructor(t=s.DEFAULT_IMAGE,e=s.DEFAULT_MAPPING,i=Yi,n=Yi,r=Ve,a=sn,o=Li,l=xi,c=s.DEFAULT_ANISOTROPY,h=xn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:nm++}),this.uuid=ba(),this.name="",this.source=new $s(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=n,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new wt(0,0),this.repeat=new wt(1,1),this.center=new wt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Yt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Zc).x}get height(){return this.source.getSize(Zc).y}get depth(){return this.source.getSize(Zc).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let i=t[e];if(i===void 0){zt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let n=this[e];if(n===void 0){zt(`Texture.setValues(): property '${e}' does not exist.`);continue}n&&i&&n.isVector2&&i.isVector2||n&&i&&n.isVector3&&i.isVector3||n&&i&&n.isMatrix3&&i.isMatrix3?n.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Bh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Gs:t.x=t.x-Math.floor(t.x);break;case Yi:t.x=t.x<0?0:1;break;case Lo:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Gs:t.y=t.y-Math.floor(t.y);break;case Yi:t.y=t.y<0?0:1;break;case Lo:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};ui.DEFAULT_IMAGE=null;ui.DEFAULT_MAPPING=Bh;ui.DEFAULT_ANISOTROPY=1;var id=class id{constructor(t=0,e=0,i=0,n=1){this.x=t,this.y=e,this.z=i,this.w=n}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,n){return this.x=t,this.y=e,this.z=i,this.w=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,i=this.y,n=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*i+a[8]*n+a[12]*r,this.y=a[1]*e+a[5]*i+a[9]*n+a[13]*r,this.z=a[2]*e+a[6]*i+a[10]*n+a[14]*r,this.w=a[3]*e+a[7]*i+a[11]*n+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,n,r,l=t.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],g=l[9],y=l[2],m=l[6],p=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-y)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+y)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let _=(c+1)/2,M=(f+1)/2,S=(p+1)/2,b=(h+d)/4,T=(u+y)/4,x=(g+m)/4;return _>M&&_>S?_<.01?(i=0,n=.707106781,r=.707106781):(i=Math.sqrt(_),n=b/i,r=T/i):M>S?M<.01?(i=.707106781,n=0,r=.707106781):(n=Math.sqrt(M),i=b/n,r=x/n):S<.01?(i=.707106781,n=.707106781,r=0):(r=Math.sqrt(S),i=T/r,n=x/r),this.set(i,n,r,e),this}let v=Math.sqrt((m-g)*(m-g)+(u-y)*(u-y)+(d-h)*(d-h));return Math.abs(v)<.001&&(v=1),this.x=(m-g)/v,this.y=(u-y)/v,this.z=(d-h)/v,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=se(this.x,t.x,e.x),this.y=se(this.y,t.y,e.y),this.z=se(this.z,t.z,e.z),this.w=se(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=se(this.x,t,e),this.y=se(this.y,t,e),this.z=se(this.z,t,e),this.w=se(this.w,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(se(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};id.prototype.isVector4=!0;var Re=id,No=class extends Zi{constructor(t=1,e=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ve,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=i.depth,this.scissor=new Re(0,0,t,e),this.scissorTest=!1,this.viewport=new Re(0,0,t,e),this.textures=[];let n={width:t,height:e,depth:i.depth},r=new ui(n),a=i.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:Ve,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let n=0,r=this.textures.length;n<r;n++)this.textures[n].image.width=t,this.textures[n].image.height=e,this.textures[n].image.depth=i,this.textures[n].isData3DTexture!==!0&&(this.textures[n].isArrayTexture=this.textures[n].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,i=t.textures.length;e<i;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let n=Object.assign({},t.textures[e].image);this.textures[e].source=new $s(n)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},ei=class extends No{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}},Gr=class extends ui{constructor(t=null,e=1,i=1,n=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:n},this.magFilter=ti,this.minFilter=ti,this.wrapR=Yi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Uo=class extends ui{constructor(t=null,e=1,i=1,n=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:n},this.magFilter=ti,this.minFilter=ti,this.wrapR=Yi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var dl=class dl{constructor(t,e,i,n,r,a,o,l,c,h,u,d,f,g,y,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,n,r,a,o,l,c,h,u,d,f,g,y,m)}set(t,e,i,n,r,a,o,l,c,h,u,d,f,g,y,m){let p=this.elements;return p[0]=t,p[4]=e,p[8]=i,p[12]=n,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=g,p[11]=y,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new dl().fromArray(this.elements)}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){let e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),i.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,i=t.elements,n=1/As.setFromMatrixColumn(t,0).length(),r=1/As.setFromMatrixColumn(t,1).length(),a=1/As.setFromMatrixColumn(t,2).length();return e[0]=i[0]*n,e[1]=i[1]*n,e[2]=i[2]*n,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*a,e[9]=i[9]*a,e[10]=i[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,i=t.x,n=t.y,r=t.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(n),c=Math.sin(n),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let d=a*h,f=a*u,g=o*h,y=o*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=f+g*c,e[5]=d-y*c,e[9]=-o*l,e[2]=y-d*c,e[6]=g+f*c,e[10]=a*l}else if(t.order==="YXZ"){let d=l*h,f=l*u,g=c*h,y=c*u;e[0]=d+y*o,e[4]=g*o-f,e[8]=a*c,e[1]=a*u,e[5]=a*h,e[9]=-o,e[2]=f*o-g,e[6]=y+d*o,e[10]=a*l}else if(t.order==="ZXY"){let d=l*h,f=l*u,g=c*h,y=c*u;e[0]=d-y*o,e[4]=-a*u,e[8]=g+f*o,e[1]=f+g*o,e[5]=a*h,e[9]=y-d*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){let d=a*h,f=a*u,g=o*h,y=o*u;e[0]=l*h,e[4]=g*c-f,e[8]=d*c+y,e[1]=l*u,e[5]=y*c+d,e[9]=f*c-g,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){let d=a*l,f=a*c,g=o*l,y=o*c;e[0]=l*h,e[4]=y-d*u,e[8]=g*u+f,e[1]=u,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=f*u+g,e[10]=d-y*u}else if(t.order==="XZY"){let d=a*l,f=a*c,g=o*l,y=o*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=d*u+y,e[5]=a*h,e[9]=f*u-g,e[2]=g*u-f,e[6]=o*h,e[10]=y*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(sm,t,rm)}lookAt(t,e,i){let n=this.elements;return wi.subVectors(t,e),wi.lengthSq()===0&&(wi.z=1),wi.normalize(),In.crossVectors(i,wi),In.lengthSq()===0&&(Math.abs(i.z)===1?wi.x+=1e-4:wi.z+=1e-4,wi.normalize(),In.crossVectors(i,wi)),In.normalize(),ja.crossVectors(wi,In),n[0]=In.x,n[4]=ja.x,n[8]=wi.x,n[1]=In.y,n[5]=ja.y,n[9]=wi.y,n[2]=In.z,n[6]=ja.z,n[10]=wi.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,n=e.elements,r=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],h=i[1],u=i[5],d=i[9],f=i[13],g=i[2],y=i[6],m=i[10],p=i[14],v=i[3],_=i[7],M=i[11],S=i[15],b=n[0],T=n[4],x=n[8],w=n[12],C=n[1],D=n[5],I=n[9],L=n[13],A=n[2],P=n[6],O=n[10],B=n[14],W=n[3],F=n[7],H=n[11],G=n[15];return r[0]=a*b+o*C+l*A+c*W,r[4]=a*T+o*D+l*P+c*F,r[8]=a*x+o*I+l*O+c*H,r[12]=a*w+o*L+l*B+c*G,r[1]=h*b+u*C+d*A+f*W,r[5]=h*T+u*D+d*P+f*F,r[9]=h*x+u*I+d*O+f*H,r[13]=h*w+u*L+d*B+f*G,r[2]=g*b+y*C+m*A+p*W,r[6]=g*T+y*D+m*P+p*F,r[10]=g*x+y*I+m*O+p*H,r[14]=g*w+y*L+m*B+p*G,r[3]=v*b+_*C+M*A+S*W,r[7]=v*T+_*D+M*P+S*F,r[11]=v*x+_*I+M*O+S*H,r[15]=v*w+_*L+M*B+S*G,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[4],n=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],u=t[6],d=t[10],f=t[14],g=t[3],y=t[7],m=t[11],p=t[15],v=l*f-c*d,_=o*f-c*u,M=o*d-l*u,S=a*f-c*h,b=a*d-l*h,T=a*u-o*h;return e*(y*v-m*_+p*M)-i*(g*v-m*S+p*b)+n*(g*_-y*S+p*T)-r*(g*M-y*b+m*T)}determinantAffine(){let t=this.elements,e=t[0],i=t[4],n=t[8],r=t[1],a=t[5],o=t[9],l=t[2],c=t[6],h=t[10];return e*(a*h-o*c)-i*(r*h-o*l)+n*(r*c-a*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){let n=this.elements;return t.isVector3?(n[12]=t.x,n[13]=t.y,n[14]=t.z):(n[12]=t,n[13]=e,n[14]=i),this}invert(){let t=this.elements,e=t[0],i=t[1],n=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=t[9],d=t[10],f=t[11],g=t[12],y=t[13],m=t[14],p=t[15],v=e*o-i*a,_=e*l-n*a,M=e*c-r*a,S=i*l-n*o,b=i*c-r*o,T=n*c-r*l,x=h*y-u*g,w=h*m-d*g,C=h*p-f*g,D=u*m-d*y,I=u*p-f*y,L=d*p-f*m,A=v*L-_*I+M*D+S*C-b*w+T*x;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let P=1/A;return t[0]=(o*L-l*I+c*D)*P,t[1]=(n*I-i*L-r*D)*P,t[2]=(y*T-m*b+p*S)*P,t[3]=(d*b-u*T-f*S)*P,t[4]=(l*C-a*L-c*w)*P,t[5]=(e*L-n*C+r*w)*P,t[6]=(m*M-g*T-p*_)*P,t[7]=(h*T-d*M+f*_)*P,t[8]=(a*I-o*C+c*x)*P,t[9]=(i*C-e*I-r*x)*P,t[10]=(g*b-y*M+p*v)*P,t[11]=(u*M-h*b-f*v)*P,t[12]=(o*w-a*D-l*x)*P,t[13]=(e*D-i*w+n*x)*P,t[14]=(y*_-g*S-m*v)*P,t[15]=(h*S-u*_+d*v)*P,this}scale(t){let e=this.elements,i=t.x,n=t.y,r=t.z;return e[0]*=i,e[4]*=n,e[8]*=r,e[1]*=i,e[5]*=n,e[9]*=r,e[2]*=i,e[6]*=n,e[10]*=r,e[3]*=i,e[7]*=n,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],n=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,n))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let i=Math.cos(e),n=Math.sin(e),r=1-i,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+i,c*o-n*l,c*l+n*o,0,c*o+n*l,h*o+i,h*l-n*a,0,c*l-n*o,h*l+n*a,r*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,n,r,a){return this.set(1,i,r,0,t,1,a,0,e,n,1,0,0,0,0,1),this}compose(t,e,i){let n=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,h=a+a,u=o+o,d=r*c,f=r*h,g=r*u,y=a*h,m=a*u,p=o*u,v=l*c,_=l*h,M=l*u,S=i.x,b=i.y,T=i.z;return n[0]=(1-(y+p))*S,n[1]=(f+M)*S,n[2]=(g-_)*S,n[3]=0,n[4]=(f-M)*b,n[5]=(1-(d+p))*b,n[6]=(m+v)*b,n[7]=0,n[8]=(g+_)*T,n[9]=(m-v)*T,n[10]=(1-(d+y))*T,n[11]=0,n[12]=t.x,n[13]=t.y,n[14]=t.z,n[15]=1,this}decompose(t,e,i){let n=this.elements;t.x=n[12],t.y=n[13],t.z=n[14];let r=this.determinantAffine();if(r===0)return i.set(1,1,1),e.identity(),this;let a=As.set(n[0],n[1],n[2]).length(),o=As.set(n[4],n[5],n[6]).length(),l=As.set(n[8],n[9],n[10]).length();r<0&&(a=-a),Fi.copy(this);let c=1/a,h=1/o,u=1/l;return Fi.elements[0]*=c,Fi.elements[1]*=c,Fi.elements[2]*=c,Fi.elements[4]*=h,Fi.elements[5]*=h,Fi.elements[6]*=h,Fi.elements[8]*=u,Fi.elements[9]*=u,Fi.elements[10]*=u,e.setFromRotationMatrix(Fi),i.x=a,i.y=o,i.z=l,this}makePerspective(t,e,i,n,r,a,o=Oi,l=!1){let c=this.elements,h=2*r/(e-t),u=2*r/(i-n),d=(e+t)/(e-t),f=(i+n)/(i-n),g,y;if(l)g=r/(a-r),y=a*r/(a-r);else if(o===Oi)g=-(a+r)/(a-r),y=-2*a*r/(a-r);else if(o===Vs)g=-a/(a-r),y=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=y,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,i,n,r,a,o=Oi,l=!1){let c=this.elements,h=2/(e-t),u=2/(i-n),d=-(e+t)/(e-t),f=-(i+n)/(i-n),g,y;if(l)g=1/(a-r),y=a/(a-r);else if(o===Oi)g=-2/(a-r),y=-(a+r)/(a-r);else if(o===Vs)g=-1/(a-r),y=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=g,c[14]=y,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,i=t.elements;for(let n=0;n<16;n++)if(e[n]!==i[n])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}};dl.prototype.isMatrix4=!0;var ee=dl,As=new k,Fi=new ee,sm=new k(0,0,0),rm=new k(1,1,1),In=new k,ja=new k,wi=new k,Qd=new ee,tu=new Xe,Ci=class s{constructor(t=0,e=0,i=0,n=s.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=n}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,n=this._order){return this._x=t,this._y=e,this._z=i,this._order=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){let n=t.elements,r=n[0],a=n[4],o=n[8],l=n[1],c=n[5],h=n[9],u=n[2],d=n[6],f=n[10];switch(e){case"XYZ":this._y=Math.asin(se(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-se(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(se(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-se(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(se(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-se(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:zt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return Qd.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Qd,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return tu.setFromEuler(this),this.setFromQuaternion(tu,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Ci.DEFAULT_ORDER="XYZ";var Vr=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},am=0,eu=new k,Rs=new Xe,dn=new ee,Qa=new k,Rr=new k,om=new k,lm=new Xe,iu=new k(1,0,0),nu=new k(0,1,0),su=new k(0,0,1),ru={type:"added"},cm={type:"removed"},Cs={type:"childadded",child:null},Jc={type:"childremoved",child:null},Ne=class s extends Zi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:am++}),this.uuid=ba(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let t=new k,e=new Ci,i=new Xe,n=new k(1,1,1);function r(){i.setFromEuler(e,!1)}function a(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:n},modelViewMatrix:{value:new ee},normalMatrix:{value:new Yt}}),this.matrix=new ee,this.matrixWorld=new ee,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Vr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Rs.setFromAxisAngle(t,e),this.quaternion.multiply(Rs),this}rotateOnWorldAxis(t,e){return Rs.setFromAxisAngle(t,e),this.quaternion.premultiply(Rs),this}rotateX(t){return this.rotateOnAxis(iu,t)}rotateY(t){return this.rotateOnAxis(nu,t)}rotateZ(t){return this.rotateOnAxis(su,t)}translateOnAxis(t,e){return eu.copy(t).applyQuaternion(this.quaternion),this.position.add(eu.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(iu,t)}translateY(t){return this.translateOnAxis(nu,t)}translateZ(t){return this.translateOnAxis(su,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(dn.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?Qa.copy(t):Qa.set(t,e,i);let n=this.parent;this.updateWorldMatrix(!0,!1),Rr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?dn.lookAt(Rr,Qa,this.up):dn.lookAt(Qa,Rr,this.up),this.quaternion.setFromRotationMatrix(dn),n&&(dn.extractRotation(n.matrixWorld),Rs.setFromRotationMatrix(dn),this.quaternion.premultiply(Rs.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Vt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(ru),Cs.child=t,this.dispatchEvent(Cs),Cs.child=null):Vt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(cm),Jc.child=t,this.dispatchEvent(Jc),Jc.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),dn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),dn.multiply(t.parent.matrixWorld)),t.applyMatrix4(dn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(ru),Cs.child=t,this.dispatchEvent(Cs),Cs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,n=this.children.length;i<n;i++){let a=this.children[i].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);let n=this.children;for(let r=0,a=n.length;r<a;r++)n[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Rr,t,om),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Rr,lm,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,i=t.y,n=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*i-r[8]*n,r[13]+=i-r[1]*e-r[5]*i-r[9]*n,r[14]+=n-r[2]*e-r[6]*i-r[10]*n}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e,i=!1){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),e===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,i)}}toJSON(t){let e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let n={};n.uuid=this.uuid,n.type=this.type,n.name=this.name,n.castShadow=this.castShadow,n.receiveShadow=this.receiveShadow,n.visible=this.visible,n.frustumCulled=this.frustumCulled,n.renderOrder=this.renderOrder,n.static=this.static,n.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(n.userData=this.userData),n.layers=this.layers.mask,n.matrix=this.matrix.toArray(),n.up=this.up.toArray(),this.pivot!==null&&(n.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(n.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(n.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(n.type="InstancedMesh",n.count=this.count,n.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(n.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(n.type="BatchedMesh",n.perObjectFrustumCulled=this.perObjectFrustumCulled,n.sortObjects=this.sortObjects,n.drawRanges=this._drawRanges,n.reservedRanges=this._reservedRanges,n.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),n.instanceInfo=this._instanceInfo.map(o=>({...o})),n.availableInstanceIds=this._availableInstanceIds.slice(),n.availableGeometryIds=this._availableGeometryIds.slice(),n.nextIndexStart=this._nextIndexStart,n.nextVertexStart=this._nextVertexStart,n.geometryCount=this._geometryCount,n.maxInstanceCount=this._maxInstanceCount,n.maxVertexCount=this._maxVertexCount,n.maxIndexCount=this._maxIndexCount,n.geometryInitialized=this._geometryInitialized,n.matricesTexture=this._matricesTexture.toJSON(t),n.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(n.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(n.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(n.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?n.background=this.background.toJSON():this.background.isTexture&&(n.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(n.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){n.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(n.bindMode=this.bindMode,n.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),n.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));n.material=o}else n.material=r(t.materials,this.material);if(this.children.length>0){n.children=[];for(let o=0;o<this.children.length;o++)n.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){n.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];n.animations.push(r(t.animations,l))}}if(e){let o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),u=a(t.shapes),d=a(t.skeletons),f=a(t.animations),g=a(t.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),d.length>0&&(i.skeletons=d),f.length>0&&(i.animations=f),g.length>0&&(i.nodes=g)}return i.object=n,i;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){let n=t.children[i];this.add(n.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Ne.DEFAULT_UP=new k(0,1,0);Ne.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ne.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Fe=class extends Ne{constructor(){super(),this.isGroup=!0,this.type="Group"}},hm={type:"move"},qs=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Fe,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Fe,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new k,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new k),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Fe,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new k,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new k,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let n=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(let y of t.hand.values()){let m=e.getJointPose(y,i),p=this._getHandJoint(c,y);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;c.inputState.pinching&&d>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(n=e.getPose(t.targetRaySpace,i),n===null&&r!==null&&(n=r),n!==null&&(o.matrix.fromArray(n.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,n.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(n.linearVelocity)):o.hasLinearVelocity=!1,n.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(n.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(hm)))}return o!==null&&(o.visible=n!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let i=new Fe;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}},uf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ln={h:0,s:0,l:0},to={h:0,s:0,l:0};function jc(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}var rt=class{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){let n=t;n&&n.isColor?this.copy(n):typeof n=="number"?this.setHex(n):typeof n=="string"&&this.setStyle(n)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=ai){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ae.colorSpaceToWorking(this,e),this}setRGB(t,e,i,n=ae.workingColorSpace){return this.r=t,this.g=e,this.b=i,ae.colorSpaceToWorking(this,n),this}setHSL(t,e,i,n=ae.workingColorSpace){if(t=tm(t,1),e=se(e,0,1),i=se(i,0,1),e===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+e):i+e-i*e,a=2*i-r;this.r=jc(a,r,t+1/3),this.g=jc(a,r,t),this.b=jc(a,r,t-1/3)}return ae.colorSpaceToWorking(this,n),this}setStyle(t,e=ai){function i(r){r!==void 0&&parseFloat(r)<1&&zt("Color: Alpha component of "+t+" will be ignored.")}let n;if(n=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=n[1],o=n[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:zt("Color: Unknown color model "+t)}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=n[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);zt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=ai){let i=uf[t.toLowerCase()];return i!==void 0?this.setHex(i,e):zt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=gn(t.r),this.g=gn(t.g),this.b=gn(t.b),this}copyLinearToSRGB(t){return this.r=Hs(t.r),this.g=Hs(t.g),this.b=Hs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ai){return ae.workingToColorSpace(ci.copy(this),t),Math.round(se(ci.r*255,0,255))*65536+Math.round(se(ci.g*255,0,255))*256+Math.round(se(ci.b*255,0,255))}getHexString(t=ai){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ae.workingColorSpace){ae.workingToColorSpace(ci.copy(this),e);let i=ci.r,n=ci.g,r=ci.b,a=Math.max(i,n,r),o=Math.min(i,n,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case i:l=(n-r)/u+(n<r?6:0);break;case n:l=(r-i)/u+2;break;case r:l=(i-n)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=ae.workingColorSpace){return ae.workingToColorSpace(ci.copy(this),e),t.r=ci.r,t.g=ci.g,t.b=ci.b,t}getStyle(t=ai){ae.workingToColorSpace(ci.copy(this),t);let e=ci.r,i=ci.g,n=ci.b;return t!==ai?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${n.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(n*255)})`}offsetHSL(t,e,i){return this.getHSL(Ln),this.setHSL(Ln.h+t,Ln.s+e,Ln.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(Ln),t.getHSL(to);let i=qc(Ln.h,to.h,e),n=qc(Ln.s,to.s,e),r=qc(Ln.l,to.l,e);return this.setHSL(i,n,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,i=this.g,n=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*n,this.g=r[1]*e+r[4]*i+r[7]*n,this.b=r[2]*e+r[5]*i+r[8]*n,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},ci=new rt;rt.NAMES=uf;var Wr=class s{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new rt(t),this.density=e}clone(){return new s(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}},$r=class s{constructor(t,e=1,i=1e3){this.isFog=!0,this.name="",this.color=new rt(t),this.near=e,this.far=i}clone(){return new s(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Bi=class extends Ne{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ci,this.environmentIntensity=1,this.environmentRotation=new Ci,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},Ni=new k,un=new k,Qc=new k,fn=new k,Ps=new k,Is=new k,au=new k,th=new k,eh=new k,ih=new k,nh=new Re,sh=new Re,rh=new Re,Un=class s{constructor(t=new k,e=new k,i=new k){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,n){n.subVectors(i,e),Ni.subVectors(t,e),n.cross(Ni);let r=n.lengthSq();return r>0?n.multiplyScalar(1/Math.sqrt(r)):n.set(0,0,0)}static getBarycoord(t,e,i,n,r){Ni.subVectors(n,e),un.subVectors(i,e),Qc.subVectors(t,e);let a=Ni.dot(Ni),o=Ni.dot(un),l=Ni.dot(Qc),c=un.dot(un),h=un.dot(Qc),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;let d=1/u,f=(c*l-o*h)*d,g=(a*h-o*l)*d;return r.set(1-f-g,g,f)}static containsPoint(t,e,i,n){return this.getBarycoord(t,e,i,n,fn)===null?!1:fn.x>=0&&fn.y>=0&&fn.x+fn.y<=1}static getInterpolation(t,e,i,n,r,a,o,l){return this.getBarycoord(t,e,i,n,fn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,fn.x),l.addScaledVector(a,fn.y),l.addScaledVector(o,fn.z),l)}static getInterpolatedAttribute(t,e,i,n,r,a){return nh.setScalar(0),sh.setScalar(0),rh.setScalar(0),nh.fromBufferAttribute(t,e),sh.fromBufferAttribute(t,i),rh.fromBufferAttribute(t,n),a.setScalar(0),a.addScaledVector(nh,r.x),a.addScaledVector(sh,r.y),a.addScaledVector(rh,r.z),a}static isFrontFacing(t,e,i,n){return Ni.subVectors(i,e),un.subVectors(t,e),Ni.cross(un).dot(n)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,n){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[n]),this}setFromAttributeAndIndices(t,e,i,n){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,n),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ni.subVectors(this.c,this.b),un.subVectors(this.a,this.b),Ni.cross(un).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return s.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return s.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,n,r){return s.getInterpolation(t,this.a,this.b,this.c,e,i,n,r)}containsPoint(t){return s.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return s.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let i=this.a,n=this.b,r=this.c,a,o;Ps.subVectors(n,i),Is.subVectors(r,i),th.subVectors(t,i);let l=Ps.dot(th),c=Is.dot(th);if(l<=0&&c<=0)return e.copy(i);eh.subVectors(t,n);let h=Ps.dot(eh),u=Is.dot(eh);if(h>=0&&u<=h)return e.copy(n);let d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(i).addScaledVector(Ps,a);ih.subVectors(t,r);let f=Ps.dot(ih),g=Is.dot(ih);if(g>=0&&f<=g)return e.copy(r);let y=f*c-l*g;if(y<=0&&c>=0&&g<=0)return o=c/(c-g),e.copy(i).addScaledVector(Is,o);let m=h*g-f*u;if(m<=0&&u-h>=0&&f-g>=0)return au.subVectors(r,n),o=(u-h)/(u-h+(f-g)),e.copy(n).addScaledVector(au,o);let p=1/(m+y+d);return a=y*p,o=d*p,e.copy(i).addScaledVector(Ps,a).addScaledVector(Is,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Ji=class{constructor(t=new k(1/0,1/0,1/0),e=new k(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(Ui.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(Ui.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let i=Ui.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Ui):Ui.fromBufferAttribute(r,a),Ui.applyMatrix4(t.matrixWorld),this.expandByPoint(Ui);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),eo.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),eo.copy(i.boundingBox)),eo.applyMatrix4(t.matrixWorld),this.union(eo)}let n=t.children;for(let r=0,a=n.length;r<a;r++)this.expandByObject(n[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Ui),Ui.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Cr),io.subVectors(this.max,Cr),Ls.subVectors(t.a,Cr),Ds.subVectors(t.b,Cr),Fs.subVectors(t.c,Cr),Dn.subVectors(Ds,Ls),Fn.subVectors(Fs,Ds),ns.subVectors(Ls,Fs);let e=[0,-Dn.z,Dn.y,0,-Fn.z,Fn.y,0,-ns.z,ns.y,Dn.z,0,-Dn.x,Fn.z,0,-Fn.x,ns.z,0,-ns.x,-Dn.y,Dn.x,0,-Fn.y,Fn.x,0,-ns.y,ns.x,0];return!ah(e,Ls,Ds,Fs,io)||(e=[1,0,0,0,1,0,0,0,1],!ah(e,Ls,Ds,Fs,io))?!1:(no.crossVectors(Dn,Fn),e=[no.x,no.y,no.z],ah(e,Ls,Ds,Fs,io))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ui).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ui).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(pn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),pn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),pn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),pn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),pn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),pn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),pn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),pn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(pn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},pn=[new k,new k,new k,new k,new k,new k,new k,new k],Ui=new k,eo=new Ji,Ls=new k,Ds=new k,Fs=new k,Dn=new k,Fn=new k,ns=new k,Cr=new k,io=new k,no=new k,ss=new k;function ah(s,t,e,i,n){for(let r=0,a=s.length-3;r<=a;r+=3){ss.fromArray(s,r);let o=n.x*Math.abs(ss.x)+n.y*Math.abs(ss.y)+n.z*Math.abs(ss.z),l=t.dot(ss),c=e.dot(ss),h=i.dot(ss);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var Ge=new k,so=new wt,dm=0,qt=class extends Zi{constructor(t,e,i=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:dm++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=of,this.updateRanges=[],this.gpuType=Ii,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let n=0,r=this.itemSize;n<r;n++)this.array[t+n]=e.array[i+n];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)so.fromBufferAttribute(this,e),so.applyMatrix3(t),this.setXY(e,so.x,so.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)Ge.fromBufferAttribute(this,e),Ge.applyMatrix3(t),this.setXYZ(e,Ge.x,Ge.y,Ge.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)Ge.fromBufferAttribute(this,e),Ge.applyMatrix4(t),this.setXYZ(e,Ge.x,Ge.y,Ge.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Ge.fromBufferAttribute(this,e),Ge.applyNormalMatrix(t),this.setXYZ(e,Ge.x,Ge.y,Ge.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Ge.fromBufferAttribute(this,e),Ge.transformDirection(t),this.setXYZ(e,Ge.x,Ge.y,Ge.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=Ar(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=vi(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Ar(e,this.array)),e}setX(t,e){return this.normalized&&(e=vi(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Ar(e,this.array)),e}setY(t,e){return this.normalized&&(e=vi(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Ar(e,this.array)),e}setZ(t,e){return this.normalized&&(e=vi(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Ar(e,this.array)),e}setW(t,e){return this.normalized&&(e=vi(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=vi(e,this.array),i=vi(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,n){return t*=this.itemSize,this.normalized&&(e=vi(e,this.array),i=vi(i,this.array),n=vi(n,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=n,this}setXYZW(t,e,i,n,r){return t*=this.itemSize,this.normalized&&(e=vi(e,this.array),i=vi(i,this.array),n=vi(n,this.array),r=vi(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=n,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}};var qr=class extends qt{constructor(t,e,i){super(new Uint16Array(t),e,i)}};var Xr=class extends qt{constructor(t,e,i){super(new Uint32Array(t),e,i)}};var Zt=class extends qt{constructor(t,e,i){super(new Float32Array(t),e,i)}},um=new Ji,Pr=new k,oh=new k,ji=class{constructor(t=new k,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let i=this.center;e!==void 0?i.copy(e):um.setFromPoints(t).getCenter(i);let n=0;for(let r=0,a=t.length;r<a;r++)n=Math.max(n,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(n),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Pr.subVectors(t,this.center);let e=Pr.lengthSq();if(e>this.radius*this.radius){let i=Math.sqrt(e),n=(i-this.radius)*.5;this.center.addScaledVector(Pr,n/i),this.radius+=n}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(oh.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Pr.copy(t.center).add(oh)),this.expandByPoint(Pr.copy(t.center).sub(oh))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},fm=0,Ri=new ee,lh=new Ne,Ns=new k,Ei=new Ji,Ir=new Ji,Qe=new k,ie=class s extends Zi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:fm++}),this.uuid=ba(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(jp(t)?Xr:qr)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new Yt().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}let n=this.attributes.tangent;return n!==void 0&&(n.transformDirection(t),n.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Ri.makeRotationFromQuaternion(t),this.applyMatrix4(Ri),this}rotateX(t){return Ri.makeRotationX(t),this.applyMatrix4(Ri),this}rotateY(t){return Ri.makeRotationY(t),this.applyMatrix4(Ri),this}rotateZ(t){return Ri.makeRotationZ(t),this.applyMatrix4(Ri),this}translate(t,e,i){return Ri.makeTranslation(t,e,i),this.applyMatrix4(Ri),this}scale(t,e,i){return Ri.makeScale(t,e,i),this.applyMatrix4(Ri),this}lookAt(t){return lh.lookAt(t),lh.updateMatrix(),this.applyMatrix4(lh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ns).negate(),this.translate(Ns.x,Ns.y,Ns.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let i=[];for(let n=0,r=t.length;n<r;n++){let a=t[n];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Zt(i,3))}else{let i=Math.min(t.length,e.count);for(let n=0;n<i;n++){let r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&zt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ji);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Vt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new k(-1/0,-1/0,-1/0),new k(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,n=e.length;i<n;i++){let r=e[i];Ei.setFromBufferAttribute(r),this.morphTargetsRelative?(Qe.addVectors(this.boundingBox.min,Ei.min),this.boundingBox.expandByPoint(Qe),Qe.addVectors(this.boundingBox.max,Ei.max),this.boundingBox.expandByPoint(Qe)):(this.boundingBox.expandByPoint(Ei.min),this.boundingBox.expandByPoint(Ei.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Vt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ji);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Vt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new k,1/0);return}if(t){let i=this.boundingSphere.center;if(Ei.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];Ir.setFromBufferAttribute(o),this.morphTargetsRelative?(Qe.addVectors(Ei.min,Ir.min),Ei.expandByPoint(Qe),Qe.addVectors(Ei.max,Ir.max),Ei.expandByPoint(Qe)):(Ei.expandByPoint(Ir.min),Ei.expandByPoint(Ir.max))}Ei.getCenter(i);let n=0;for(let r=0,a=t.count;r<a;r++)Qe.fromBufferAttribute(t,r),n=Math.max(n,i.distanceToSquared(Qe));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Qe.fromBufferAttribute(o,c),l&&(Ns.fromBufferAttribute(t,c),Qe.add(Ns)),n=Math.max(n,i.distanceToSquared(Qe))}this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&Vt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Vt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=e.position,n=e.normal,r=e.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==i.count)&&(a=new qt(new Float32Array(4*i.count),4),this.setAttribute("tangent",a));let o=[],l=[];for(let x=0;x<i.count;x++)o[x]=new k,l[x]=new k;let c=new k,h=new k,u=new k,d=new wt,f=new wt,g=new wt,y=new k,m=new k;function p(x,w,C){c.fromBufferAttribute(i,x),h.fromBufferAttribute(i,w),u.fromBufferAttribute(i,C),d.fromBufferAttribute(r,x),f.fromBufferAttribute(r,w),g.fromBufferAttribute(r,C),h.sub(c),u.sub(c),f.sub(d),g.sub(d);let D=1/(f.x*g.y-g.x*f.y);isFinite(D)&&(y.copy(h).multiplyScalar(g.y).addScaledVector(u,-f.y).multiplyScalar(D),m.copy(u).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(D),o[x].add(y),o[w].add(y),o[C].add(y),l[x].add(m),l[w].add(m),l[C].add(m))}let v=this.groups;v.length===0&&(v=[{start:0,count:t.count}]);for(let x=0,w=v.length;x<w;++x){let C=v[x],D=C.start,I=C.count;for(let L=D,A=D+I;L<A;L+=3)p(t.getX(L+0),t.getX(L+1),t.getX(L+2))}let _=new k,M=new k,S=new k,b=new k;function T(x){S.fromBufferAttribute(n,x),b.copy(S);let w=o[x];_.copy(w),_.sub(S.multiplyScalar(S.dot(w))).normalize(),M.crossVectors(b,w);let D=M.dot(l[x])<0?-1:1;a.setXYZW(x,_.x,_.y,_.z,D)}for(let x=0,w=v.length;x<w;++x){let C=v[x],D=C.start,I=C.count;for(let L=D,A=D+I;L<A;L+=3)T(t.getX(L+0)),T(t.getX(L+1)),T(t.getX(L+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==e.count)i=new qt(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let d=0,f=i.count;d<f;d++)i.setXYZ(d,0,0,0);let n=new k,r=new k,a=new k,o=new k,l=new k,c=new k,h=new k,u=new k;if(t)for(let d=0,f=t.count;d<f;d+=3){let g=t.getX(d+0),y=t.getX(d+1),m=t.getX(d+2);n.fromBufferAttribute(e,g),r.fromBufferAttribute(e,y),a.fromBufferAttribute(e,m),h.subVectors(a,r),u.subVectors(n,r),h.cross(u),o.fromBufferAttribute(i,g),l.fromBufferAttribute(i,y),c.fromBufferAttribute(i,m),o.add(h),l.add(h),c.add(h),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(y,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,f=e.count;d<f;d+=3)n.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),a.fromBufferAttribute(e,d+2),h.subVectors(a,r),u.subVectors(n,r),h.cross(u),i.setXYZ(d+0,h.x,h.y,h.z),i.setXYZ(d+1,h.x,h.y,h.z),i.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)Qe.fromBufferAttribute(t,e),Qe.normalize(),t.setXYZ(e,Qe.x,Qe.y,Qe.z)}toNonIndexed(){function t(o,l){let c=o.array,h=o.itemSize,u=o.normalized,d=new c.constructor(l.length*h),f=0,g=0;for(let y=0,m=l.length;y<m;y++){o.isInterleavedBufferAttribute?f=l[y]*o.data.stride+o.offset:f=l[y]*h;for(let p=0;p<h;p++)d[g++]=c[f++]}return new qt(d,h,u)}if(this.index===null)return zt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new s,i=this.index.array,n=this.attributes;for(let o in n){let l=n[o],c=t(l,i);e.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){let d=c[h],f=t(d,i);l.push(f)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let i=this.attributes;for(let l in i){let c=i[l];t.data.attributes[l]=c.toJSON(t.data)}let n={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){let f=c[u];h.push(f.toJSON(t.data))}h.length>0&&(n[l]=h,r=!0)}r&&(t.data.morphAttributes=n,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone());let n=t.attributes;for(let c in n){let h=n[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],u=r[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let c=0,h=a.length;c<h;c++){let u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var ch=new k,pm=new k,mm=new Yt,ki=class{constructor(t=new k(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,n){return this.normal.set(t,e,i),this.constant=n,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){let n=ch.subVectors(i,e).cross(pm.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(n,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,i=!0){let n=t.delta(ch),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let a=-(t.start.dot(this.normal)+this.constant)/r;return i===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(n,a)}intersectsLine(t){let e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let i=e||mm.getNormalMatrix(t),n=this.coplanarPoint(ch).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-n.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},gm=0,Hi=class extends Zi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:gm++}),this.uuid=ba(),this.name="",this.type="Material",this.blending=Wn,this.side=tn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ih,this.blendDst=Lh,this.blendEquation=us,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new rt(0,0,0),this.blendAlpha=0,this.depthFunc=zs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Qu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=wo,this.stencilZFail=wo,this.stencilZPass=wo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let i=t[e];if(i===void 0){zt(`Material: parameter '${e}' has value of undefined.`);continue}let n=this[e];if(n===void 0){zt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}n&&n.isColor?n.set(i):n&&n.isVector2&&i&&i.isVector2||n&&n.isEuler&&i&&i.isEuler||n&&n.isVector3&&i&&i.isVector3?n.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function n(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(e){let r=n(t.textures),a=n(t.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new rt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(i=>new ki().fromJSON(i))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let i=t.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new wt().fromArray(i)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new wt().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,i=null;if(e!==null){let n=e.length;i=new Array(n);for(let r=0;r!==n;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var mn=new k,hh=new k,ro=new k,ao=new k,Xs=class{constructor(t=new k,e=new k(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,mn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=mn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(mn.copy(this.origin).addScaledVector(this.direction,e),mn.distanceToSquared(t))}distanceSqToSegment(t,e,i,n){hh.copy(t).add(e).multiplyScalar(.5),ro.copy(e).sub(t).normalize(),ao.copy(this.origin).sub(hh);let r=t.distanceTo(e)*.5,a=-this.direction.dot(ro),o=ao.dot(this.direction),l=-ao.dot(ro),c=ao.lengthSq(),h=Math.abs(1-a*a),u,d,f,g;if(h>0)if(u=a*l-o,d=a*o-l,g=r*h,u>=0)if(d>=-g)if(d<=g){let y=1/h;u*=y,d*=y,f=u*(u+a*d+2*o)+d*(a*u+d+2*l)+c}else d=r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-a*r+o)),d=u>0?-r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(u=Math.max(0,-(a*r+o)),d=u>0?r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c);else d=a>0?-r:r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,u),n&&n.copy(hh).addScaledVector(ro,d),f}intersectSphere(t,e){if(t.radius<0)return null;mn.subVectors(t.center,this.origin);let i=mn.dot(this.direction),n=mn.dot(mn)-i*i,r=t.radius*t.radius;if(n>r)return null;let a=Math.sqrt(r-n),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){let i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,n,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(i=(t.min.x-d.x)*c,n=(t.max.x-d.x)*c):(i=(t.max.x-d.x)*c,n=(t.min.x-d.x)*c),h>=0?(r=(t.min.y-d.y)*h,a=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,a=(t.min.y-d.y)*h),i>a||r>n||((r>i||isNaN(i))&&(i=r),(a<n||isNaN(n))&&(n=a),u>=0?(o=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(o=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),i>l||o>n)||((o>i||i!==i)&&(i=o),(l<n||n!==n)&&(n=l),n<0)?null:this.at(i>=0?i:n,e)}intersectsBox(t){return this.intersectBox(t,mn)!==null}intersectTriangle(t,e,i,n,r){let a=this.origin,o=this.direction,l=o.x,c=o.y,h=o.z,u=t.x-a.x,d=t.y-a.y,f=t.z-a.z,g=e.x-a.x,y=e.y-a.y,m=e.z-a.z,p=i.x-a.x,v=i.y-a.y,_=i.z-a.z,M=Math.abs(l),S=Math.abs(c),b=Math.abs(h),T,x,w,C,D,I,L,A,P,O,B,W;if(M>=S&&M>=b?(w=l,I=u,P=g,W=p,l>=0?(T=c,x=h,C=d,D=f,L=y,A=m,O=v,B=_):(T=h,x=c,C=f,D=d,L=m,A=y,O=_,B=v)):S>=b?(w=c,I=d,P=y,W=v,c>=0?(T=h,x=l,C=f,D=u,L=m,A=g,O=_,B=p):(T=l,x=h,C=u,D=f,L=g,A=m,O=p,B=_)):(w=h,I=f,P=m,W=_,h>=0?(T=l,x=c,C=u,D=d,L=g,A=y,O=p,B=v):(T=c,x=l,C=d,D=u,L=y,A=g,O=v,B=p)),w===0)return null;let F=T/w,H=x/w,G=1/w,nt=C-F*I,at=D-H*I,Mt=L-F*P,gt=A-H*P,Nt=O-F*W,q=B-H*W,j=Nt*gt-q*Mt,ct=nt*q-at*Nt,Et=Mt*at-gt*nt;if(n){if(j<0||ct<0||Et<0)return null}else if((j<0||ct<0||Et<0)&&(j>0||ct>0||Et>0))return null;let dt=j+ct+Et;if(dt===0)return null;let Rt=G*(j*I+ct*P+Et*W);return(dt>0?Rt<0:Rt>0)?null:this.at(Rt/dt,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},oe=class extends Hi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new rt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ci,this.combine=ul,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},ou=new ee,rs=new Xs,oo=new ji,lu=new k,lo=new k,co=new k,ho=new k,dh=new k,uo=new k,cu=new k,fo=new k,ft=class extends Ne{constructor(t=new ie,e=new oe){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let n=e[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=n.length;r<a;r++){let o=n[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let i=this.geometry,n=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;e.fromBufferAttribute(n,t);let o=this.morphTargetInfluences;if(r&&o){uo.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],u=r[l];h!==0&&(dh.fromBufferAttribute(u,t),a?uo.addScaledVector(dh,h):uo.addScaledVector(dh.sub(e),h))}e.add(uo)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let i=this.geometry,n=this.material,r=this.matrixWorld;n!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),oo.copy(i.boundingSphere),oo.applyMatrix4(r),rs.copy(t.ray).recast(t.near),!(oo.containsPoint(rs.origin)===!1&&(rs.intersectSphere(oo,lu)===null||rs.origin.distanceToSquared(lu)>(t.far-t.near)**2))&&(ou.copy(r).invert(),rs.copy(t.ray).applyMatrix4(ou),!(i.boundingBox!==null&&rs.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,rs)))}_computeIntersections(t,e,i){let n,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,y=d.length;g<y;g++){let m=d[g],p=a[m.materialIndex],v=Math.max(m.start,f.start),_=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let M=v,S=_;M<S;M+=3){let b=o.getX(M),T=o.getX(M+1),x=o.getX(M+2);n=po(this,p,t,i,c,h,u,b,T,x),n&&(n.faceIndex=Math.floor(M/3),n.face.materialIndex=m.materialIndex,e.push(n))}}else{let g=Math.max(0,f.start),y=Math.min(o.count,f.start+f.count);for(let m=g,p=y;m<p;m+=3){let v=o.getX(m),_=o.getX(m+1),M=o.getX(m+2);n=po(this,a,t,i,c,h,u,v,_,M),n&&(n.faceIndex=Math.floor(m/3),e.push(n))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,y=d.length;g<y;g++){let m=d[g],p=a[m.materialIndex],v=Math.max(m.start,f.start),_=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let M=v,S=_;M<S;M+=3){let b=M,T=M+1,x=M+2;n=po(this,p,t,i,c,h,u,b,T,x),n&&(n.faceIndex=Math.floor(M/3),n.face.materialIndex=m.materialIndex,e.push(n))}}else{let g=Math.max(0,f.start),y=Math.min(l.count,f.start+f.count);for(let m=g,p=y;m<p;m+=3){let v=m,_=m+1,M=m+2;n=po(this,a,t,i,c,h,u,v,_,M),n&&(n.faceIndex=Math.floor(m/3),e.push(n))}}}};function ym(s,t,e,i,n,r,a,o){let l;if(t.side===Ke?l=i.intersectTriangle(a,r,n,!0,o):l=i.intersectTriangle(n,r,a,t.side===tn,o),l===null)return null;fo.copy(o),fo.applyMatrix4(s.matrixWorld);let c=e.ray.origin.distanceTo(fo);return c<e.near||c>e.far?null:{distance:c,point:fo.clone(),object:s}}function po(s,t,e,i,n,r,a,o,l,c){s.getVertexPosition(o,lo),s.getVertexPosition(l,co),s.getVertexPosition(c,ho);let h=ym(s,t,e,i,lo,co,ho,cu);if(h){let u=new k;Un.getBarycoord(cu,lo,co,ho,u),n&&(h.uv=Un.getInterpolatedAttribute(n,o,l,c,u,new wt)),r&&(h.uv1=Un.getInterpolatedAttribute(r,o,l,c,u,new wt)),a&&(h.normal=Un.getInterpolatedAttribute(a,o,l,c,u,new k),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let d={a:o,b:l,c,normal:new k,materialIndex:0};Un.getNormal(lo,co,ho,d.normal),h.face=d,h.barycoord=u}return h}var Yr=class extends ui{constructor(t=null,e=1,i=1,n,r,a,o,l,c=ti,h=ti,u,d){super(null,a,o,l,c,h,n,r,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Ys=class extends qt{constructor(t,e,i,n=1){super(t,e,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=n}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},Us=new ee,hu=new ee,mo=[],du=new Ji,vm=new ee,Lr=new ft,Dr=new ji,ii=class extends ft{constructor(t,e,i){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Ys(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let n=0;n<i;n++)this.setMatrixAt(n,vm)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Ji),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,Us),du.copy(t.boundingBox).applyMatrix4(Us),this.boundingBox.union(du)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new ji),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,Us),Dr.copy(t.boundingSphere).applyMatrix4(Us),this.boundingSphere.union(Dr)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let i=e.morphTargetInfluences,n=this.morphTexture.source.data.data,r=i.length+1,a=t*r+1;for(let o=0;o<i.length;o++)i[o]=n[a+o]}raycast(t,e){let i=this.matrixWorld,n=this.count;if(Lr.geometry=this.geometry,Lr.material=this.material,Lr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Dr.copy(this.boundingSphere),Dr.applyMatrix4(i),t.ray.intersectsSphere(Dr)!==!1))for(let r=0;r<n;r++){this.getMatrixAt(r,Us),hu.multiplyMatrices(i,Us),Lr.matrixWorld=hu,Lr.raycast(t,mo);for(let a=0,o=mo.length;a<o;a++){let l=mo[a];l.instanceId=r,l.object=this,e.push(l)}mo.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new Ys(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let i=e.morphTargetInfluences,n=i.length+1;this.morphTexture===null&&(this.morphTexture=new Yr(new Float32Array(n*this.count),n,this.count,xl,Ii));let r=this.morphTexture.source.data.data,a=0;for(let c=0;c<i.length;c++)a+=i[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=n*t;return r[l]=o,r.set(i,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},as=new ji,xm=new wt(.5,.5),go=new k,Ks=class{constructor(t=new ki,e=new ki,i=new ki,n=new ki,r=new ki,a=new ki){this.planes=[t,e,i,n,r,a]}set(t,e,i,n,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(i),o[3].copy(n),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=Oi,i=!1){let n=this.planes,r=t.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],u=r[5],d=r[6],f=r[7],g=r[8],y=r[9],m=r[10],p=r[11],v=r[12],_=r[13],M=r[14],S=r[15];if(n[0].setComponents(c-a,f-h,p-g,S-v).normalize(),n[1].setComponents(c+a,f+h,p+g,S+v).normalize(),n[2].setComponents(c+o,f+u,p+y,S+_).normalize(),n[3].setComponents(c-o,f-u,p-y,S-_).normalize(),i)n[4].setComponents(l,d,m,M).normalize(),n[5].setComponents(c-l,f-d,p-m,S-M).normalize();else if(n[4].setComponents(c-l,f-d,p-m,S-M).normalize(),e===Oi)n[5].setComponents(c+l,f+d,p+m,S+M).normalize();else if(e===Vs)n[5].setComponents(l,d,m,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),as.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),as.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(as)}intersectsSprite(t){as.center.set(0,0,0);let e=xm.distanceTo(t.center);return as.radius=.7071067811865476+e,as.applyMatrix4(t.matrixWorld),this.intersectsSphere(as)}intersectsSphere(t){let e=this.planes,i=t.center,n=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<n)return!1;return!0}intersectsBox(t){let e=this.planes;for(let i=0;i<6;i++){let n=e[i];if(go.x=n.normal.x>0?t.max.x:t.min.x,go.y=n.normal.y>0?t.max.y:t.min.y,go.z=n.normal.z>0?t.max.z:t.min.z,n.distanceToPoint(go)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var ko=class extends Hi{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new rt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},Oo=new k,Bo=new k,uu=new ee,Fr=new Xs,yo=new ji,uh=new k,fu=new k,Ho=class extends Ne{constructor(t=new ie,e=new ko){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,i=[0];for(let n=1,r=e.count;n<r;n++)Oo.fromBufferAttribute(e,n-1),Bo.fromBufferAttribute(e,n),i[n]=i[n-1],i[n]+=Oo.distanceTo(Bo);t.setAttribute("lineDistance",new Zt(i,1))}else zt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let i=this.geometry,n=this.matrixWorld,r=t.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),yo.copy(i.boundingSphere),yo.applyMatrix4(n),yo.radius+=r,t.ray.intersectsSphere(yo)===!1)return;uu.copy(n).invert(),Fr.copy(t.ray).applyMatrix4(uu);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=i.index,d=i.attributes.position;if(h!==null){let f=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let y=f,m=g-1;y<m;y+=c){let p=h.getX(y),v=h.getX(y+1),_=vo(this,t,Fr,l,p,v,y);_&&e.push(_)}if(this.isLineLoop){let y=h.getX(g-1),m=h.getX(f),p=vo(this,t,Fr,l,y,m,g-1);p&&e.push(p)}}else{let f=Math.max(0,a.start),g=Math.min(d.count,a.start+a.count);for(let y=f,m=g-1;y<m;y+=c){let p=vo(this,t,Fr,l,y,y+1,y);p&&e.push(p)}if(this.isLineLoop){let y=vo(this,t,Fr,l,g-1,f,g-1);y&&e.push(y)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let n=e[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=n.length;r<a;r++){let o=n[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function vo(s,t,e,i,n,r,a){let o=s.geometry.attributes.position;if(Oo.fromBufferAttribute(o,n),Bo.fromBufferAttribute(o,r),e.distanceSqToSegment(Oo,Bo,uh,fu)>i)return;uh.applyMatrix4(s.matrixWorld);let c=t.ray.origin.distanceTo(uh);if(!(c<t.near||c>t.far))return{distance:c,point:fu.clone().applyMatrix4(s.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:s}}var pu=new k,mu=new k,Kr=class extends Ho{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,i=[];for(let n=0,r=e.count;n<r;n+=2)pu.fromBufferAttribute(e,n),mu.fromBufferAttribute(e,n+1),i[n]=n===0?0:i[n-1],i[n+1]=i[n]+pu.distanceTo(mu);t.setAttribute("lineDistance",new Zt(i,1))}else zt("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var Zs=class extends Hi{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new rt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},gu=new ee,Mh=new Xs,xo=new ji,bo=new k,ls=class extends Ne{constructor(t=new ie,e=new Zs){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let i=this.geometry,n=this.matrixWorld,r=t.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),xo.copy(i.boundingSphere),xo.applyMatrix4(n),xo.radius+=r,t.ray.intersectsSphere(xo)===!1)return;gu.copy(n).invert(),Mh.copy(t.ray).applyMatrix4(gu);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,u=i.attributes.position;if(c!==null){let d=Math.max(0,a.start),f=Math.min(c.count,a.start+a.count);for(let g=d,y=f;g<y;g++){let m=c.getX(g);bo.fromBufferAttribute(u,m),yu(bo,m,l,n,t,e,this)}}else{let d=Math.max(0,a.start),f=Math.min(u.count,a.start+a.count);for(let g=d,y=f;g<y;g++)bo.fromBufferAttribute(u,g),yu(bo,g,l,n,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let n=e[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=n.length;r<a;r++){let o=n[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function yu(s,t,e,i,n,r,a){let o=Mh.distanceSqToPoint(s);if(o<e){let l=new k;Mh.closestPointToPoint(s,l),l.applyMatrix4(i);let c=n.ray.origin.distanceTo(l);if(c<n.near||c>n.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}var Zr=class extends ui{constructor(t=[],e=$n,i,n,r,a,o,l,c,h){super(t,e,i,n,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},yn=class extends ui{constructor(t,e,i,n,r,a,o,l,c){super(t,e,i,n,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var kn=class extends ui{constructor(t,e,i=Gi,n,r,a,o=ti,l=ti,c,h=Ki,u=1){if(h!==Ki&&h!==qn)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:t,height:e,depth:u};super(d,n,r,a,o,l,h,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new $s(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},zo=class extends kn{constructor(t,e=Gi,i=$n,n,r,a=ti,o=ti,l,c=Ki){let h={width:t,height:t,depth:1},u=[h,h,h,h,h,h];super(t,t,e,i,n,r,a,o,l,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},Jr=class extends ui{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},Me=class s extends ie{constructor(t=1,e=1,i=1,n=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:n,heightSegments:r,depthSegments:a};let o=this;n=Math.floor(n),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],u=[],d=0,f=0;g("z","y","x",-1,-1,i,e,t,a,r,0),g("z","y","x",1,-1,i,e,-t,a,r,1),g("x","z","y",1,1,t,i,e,n,a,2),g("x","z","y",1,-1,t,i,-e,n,a,3),g("x","y","z",1,-1,t,e,i,n,r,4),g("x","y","z",-1,-1,t,e,-i,n,r,5),this.setIndex(l),this.setAttribute("position",new Zt(c,3)),this.setAttribute("normal",new Zt(h,3)),this.setAttribute("uv",new Zt(u,2));function g(y,m,p,v,_,M,S,b,T,x,w){let C=M/T,D=S/x,I=M/2,L=S/2,A=b/2,P=T+1,O=x+1,B=0,W=0,F=new k;for(let H=0;H<O;H++){let G=H*D-L;for(let nt=0;nt<P;nt++){let at=nt*C-I;F[y]=at*v,F[m]=G*_,F[p]=A,c.push(F.x,F.y,F.z),F[y]=0,F[m]=0,F[p]=b>0?1:-1,h.push(F.x,F.y,F.z),u.push(nt/T),u.push(1-H/x),B+=1}}for(let H=0;H<x;H++)for(let G=0;G<T;G++){let nt=d+G+P*H,at=d+G+P*(H+1),Mt=d+(G+1)+P*(H+1),gt=d+(G+1)+P*H;l.push(nt,at,gt),l.push(at,Mt,gt),W+=6}o.addGroup(f,W,w),f+=W,d+=B}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},jr=class s extends ie{constructor(t=1,e=1,i=4,n=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:t,height:e,capSegments:i,radialSegments:n,heightSegments:r},e=Math.max(0,e),i=Math.max(1,Math.floor(i)),n=Math.max(3,Math.floor(n)),r=Math.max(1,Math.floor(r));let a=[],o=[],l=[],c=[],h=e/2,u=Math.PI/2*t,d=e,f=2*u+d,g=i*2+r,y=n+1,m=new k,p=new k;for(let v=0;v<=g;v++){let _=0,M=0,S=0,b=0;if(v<=i){let w=v/i,C=w*Math.PI/2;M=-h-t*Math.cos(C),S=t*Math.sin(C),b=-t*Math.cos(C),_=w*u}else if(v<=i+r){let w=(v-i)/r;M=-h+w*e,S=t,b=0,_=u+w*d}else{let w=(v-i-r)/i,C=w*Math.PI/2;M=h+t*Math.sin(C),S=t*Math.cos(C),b=t*Math.sin(C),_=u+d+w*u}let T=Math.max(0,Math.min(1,_/f)),x=0;v===0?x=.5/n:v===g&&(x=-.5/n);for(let w=0;w<=n;w++){let C=w/n,D=C*Math.PI*2,I=Math.sin(D),L=Math.cos(D);p.x=-S*L,p.y=M,p.z=S*I,o.push(p.x,p.y,p.z),m.set(-S*L,b,S*I),m.normalize(),l.push(m.x,m.y,m.z),c.push(C+x,T)}if(v>0){let w=(v-1)*y;for(let C=0;C<n;C++){let D=w+C,I=w+C+1,L=v*y+C,A=v*y+C+1;a.push(D,I,L),a.push(I,A,L)}}}this.setIndex(a),this.setAttribute("position",new Zt(o,3)),this.setAttribute("normal",new Zt(l,3)),this.setAttribute("uv",new Zt(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.height,t.capSegments,t.radialSegments,t.heightSegments)}},vn=class s extends ie{constructor(t=1,e=32,i=0,n=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:i,thetaLength:n},e=Math.max(3,e);let r=[],a=[],o=[],l=[],c=new k,h=new wt;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=e;u++,d+=3){let f=i+u/e*n;c.x=t*Math.cos(f),c.y=t*Math.sin(f),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[d]/t+1)/2,h.y=(a[d+1]/t+1)/2,l.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new Zt(a,3)),this.setAttribute("normal",new Zt(o,3)),this.setAttribute("uv",new Zt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.segments,t.thetaStart,t.thetaLength)}},Ye=class s extends ie{constructor(t=1,e=1,i=1,n=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:n,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;n=Math.floor(n),r=Math.floor(r);let h=[],u=[],d=[],f=[],g=0,y=[],m=i/2,p=0;v(),a===!1&&(t>0&&_(!0),e>0&&_(!1)),this.setIndex(h),this.setAttribute("position",new Zt(u,3)),this.setAttribute("normal",new Zt(d,3)),this.setAttribute("uv",new Zt(f,2));function v(){let M=new k,S=new k,b=0,T=(e-t)/i;for(let x=0;x<=r;x++){let w=[],C=x/r,D=C*(e-t)+t;for(let I=0;I<=n;I++){let L=I/n,A=L*l+o,P=Math.sin(A),O=Math.cos(A);S.x=D*P,S.y=-C*i+m,S.z=D*O,u.push(S.x,S.y,S.z),M.set(P,T,O).normalize(),d.push(M.x,M.y,M.z),f.push(L,1-C),w.push(g++)}y.push(w)}for(let x=0;x<n;x++)for(let w=0;w<r;w++){let C=y[w][x],D=y[w+1][x],I=y[w+1][x+1],L=y[w][x+1];(t>0||w!==0)&&(h.push(C,D,L),b+=3),(e>0||w!==r-1)&&(h.push(D,I,L),b+=3)}c.addGroup(p,b,0),p+=b}function _(M){let S=g,b=new wt,T=new k,x=0,w=M===!0?t:e,C=M===!0?1:-1;for(let I=1;I<=n;I++)u.push(0,m*C,0),d.push(0,C,0),f.push(.5,.5),g++;let D=g;for(let I=0;I<=n;I++){let A=I/n*l+o,P=Math.cos(A),O=Math.sin(A);T.x=w*O,T.y=m*C,T.z=w*P,u.push(T.x,T.y,T.z),d.push(0,C,0),b.x=P*.5+.5,b.y=O*.5*C+.5,f.push(b.x,b.y),g++}for(let I=0;I<n;I++){let L=S+I,A=D+I;M===!0?h.push(A,A+1,L):h.push(A+1,A,L),x+=3}c.addGroup(p,x,M===!0?1:2),p+=x}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Qr=class s extends Ye{constructor(t=1,e=1,i=32,n=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,i,n,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:i,heightSegments:n,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new s(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Go=class s extends ie{constructor(t=[],e=[],i=1,n=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:i,detail:n};let r=[],a=[];o(n),c(i),h(),this.setAttribute("position",new Zt(r,3)),this.setAttribute("normal",new Zt(r.slice(),3)),this.setAttribute("uv",new Zt(a,2)),n===0?this.computeVertexNormals():this.normalizeNormals();function o(v){let _=new k,M=new k,S=new k;for(let b=0;b<e.length;b+=3)f(e[b+0],_),f(e[b+1],M),f(e[b+2],S),l(_,M,S,v)}function l(v,_,M,S){let b=S+1,T=[];for(let x=0;x<=b;x++){T[x]=[];let w=v.clone().lerp(M,x/b),C=_.clone().lerp(M,x/b),D=b-x;for(let I=0;I<=D;I++)I===0&&x===b?T[x][I]=w:T[x][I]=w.clone().lerp(C,I/D)}for(let x=0;x<b;x++)for(let w=0;w<2*(b-x)-1;w++){let C=Math.floor(w/2);w%2===0?(d(T[x][C+1]),d(T[x+1][C]),d(T[x][C])):(d(T[x][C+1]),d(T[x+1][C+1]),d(T[x+1][C]))}}function c(v){let _=new k;for(let M=0;M<r.length;M+=3)_.x=r[M+0],_.y=r[M+1],_.z=r[M+2],_.normalize().multiplyScalar(v),r[M+0]=_.x,r[M+1]=_.y,r[M+2]=_.z}function h(){let v=new k;for(let _=0;_<r.length;_+=3){v.x=r[_+0],v.y=r[_+1],v.z=r[_+2];let M=m(v)/2/Math.PI+.5,S=p(v)/Math.PI+.5;a.push(M,1-S)}g(),u()}function u(){for(let v=0;v<a.length;v+=6){let _=a[v+0],M=a[v+2],S=a[v+4],b=Math.max(_,M,S),T=Math.min(_,M,S);b>.9&&T<.1&&(_<.2&&(a[v+0]+=1),M<.2&&(a[v+2]+=1),S<.2&&(a[v+4]+=1))}}function d(v){r.push(v.x,v.y,v.z)}function f(v,_){let M=v*3;_.x=t[M+0],_.y=t[M+1],_.z=t[M+2]}function g(){let v=new k,_=new k,M=new k,S=new k,b=new wt,T=new wt,x=new wt;for(let w=0,C=0;w<r.length;w+=9,C+=6){v.set(r[w+0],r[w+1],r[w+2]),_.set(r[w+3],r[w+4],r[w+5]),M.set(r[w+6],r[w+7],r[w+8]),b.set(a[C+0],a[C+1]),T.set(a[C+2],a[C+3]),x.set(a[C+4],a[C+5]),S.copy(v).add(_).add(M).divideScalar(3);let D=m(S);y(b,C+0,v,D),y(T,C+2,_,D),y(x,C+4,M,D)}}function y(v,_,M,S){S<0&&v.x===1&&(a[_]=v.x-1),M.x===0&&M.z===0&&(a[_]=S/2/Math.PI+.5)}function m(v){return Math.atan2(v.z,-v.x)}function p(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.vertices,t.indices,t.radius,t.detail)}};var Pi=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){zt("Curve: .getPoint() not implemented.")}getPointAt(t,e){let i=this.getUtoTmapping(t);return this.getPoint(i,e)}getPoints(t=5){let e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return e}getSpacedPoints(t=5){let e=[];for(let i=0;i<=t;i++)e.push(this.getPointAt(i/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],i,n=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)i=this.getPoint(a/t),r+=i.distanceTo(n),e.push(r),n=i;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let i=this.getLengths(),n=0,r=i.length,a;e?a=e:a=t*i[r-1];let o=0,l=r-1,c;for(;o<=l;)if(n=Math.floor(o+(l-o)/2),c=i[n]-a,c<0)o=n+1;else if(c>0)l=n-1;else{l=n;break}if(n=l,i[n]===a)return n/(r-1);let h=i[n],d=i[n+1]-h,f=(a-h)/d;return(n+f)/(r-1)}getTangent(t,e){let n=t-1e-4,r=t+1e-4;n<0&&(n=0),r>1&&(r=1);let a=this.getPoint(n),o=this.getPoint(r),l=e||(a.isVector2?new wt:new k);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){let i=this.getUtoTmapping(t);return this.getTangent(i,e)}computeFrenetFrames(t,e=!1){let i=new k,n=[],r=[],a=[],o=new k,l=new ee;for(let f=0;f<=t;f++){let g=f/t;n[f]=this.getTangentAt(g,new k)}r[0]=new k,a[0]=new k;let c=Number.MAX_VALUE,h=Math.abs(n[0].x),u=Math.abs(n[0].y),d=Math.abs(n[0].z);h<=c&&(c=h,i.set(1,0,0)),u<=c&&(c=u,i.set(0,1,0)),d<=c&&i.set(0,0,1),o.crossVectors(n[0],i).normalize(),r[0].crossVectors(n[0],o),a[0].crossVectors(n[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(n[f-1],n[f]),o.length()>Number.EPSILON){o.normalize();let g=Math.acos(se(n[f-1].dot(n[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(o,g))}a[f].crossVectors(n[f],r[f])}if(e===!0){let f=Math.acos(se(r[0].dot(r[t]),-1,1));f/=t,n[0].dot(o.crossVectors(r[0],r[t]))>0&&(f=-f);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(n[g],f*g)),a[g].crossVectors(n[g],r[g])}return{tangents:n,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},ta=class extends Pi{constructor(t=0,e=0,i=1,n=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=i,this.yRadius=n,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e=new wt){let i=e,n=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=n;for(;r>n;)r-=n;r<Number.EPSILON&&(a?r=0:r=n),this.aClockwise===!0&&!a&&(r===n?r=-n:r=r-n);let o=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*h-f*u+this.aX,c=d*u+f*h+this.aY}return i.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},Vo=class extends ta{constructor(t,e,i,n,r,a){super(t,e,i,i,n,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function Yh(){let s=0,t=0,e=0,i=0;function n(r,a,o,l){s=r,t=o,e=-3*r+3*a-2*o-l,i=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){n(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,u){let d=(a-r)/c-(o-r)/(c+h)+(o-a)/h,f=(o-a)/h-(l-a)/(h+u)+(l-o)/u;d*=h,f*=h,n(a,o,d,f)},calc:function(r){let a=r*r,o=a*r;return s+t*r+e*a+i*o}}}var vu=new k,xu=new k,fh=new Yh,ph=new Yh,mh=new Yh,Js=class extends Pi{constructor(t=[],e=!1,i="centripetal",n=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=i,this.tension=n}getPoint(t,e=new k){let i=e,n=this.points,r=n.length,a=(r-(this.closed?0:1))*t,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=n[(o-1)%r]:(xu.subVectors(n[0],n[1]).add(n[0]),c=xu);let u=n[o%r],d=n[(o+1)%r];if(this.closed||o+2<r?h=n[(o+2)%r]:(vu.subVectors(n[r-1],n[r-2]).add(n[r-1]),h=vu),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(u),f),y=Math.pow(u.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(h),f);y<1e-4&&(y=1),g<1e-4&&(g=y),m<1e-4&&(m=y),fh.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,g,y,m),ph.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,g,y,m),mh.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,g,y,m)}else this.curveType==="catmullrom"&&(fh.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),ph.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),mh.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return i.set(fh.calc(l),ph.calc(l),mh.calc(l)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let n=t.points[e];this.points.push(n.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){let n=this.points[e];t.points.push(n.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let n=t.points[e];this.points.push(new k().fromArray(n))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function bu(s,t,e,i,n){let r=(i-t)*.5,a=(n-e)*.5,o=s*s,l=s*o;return(2*e-2*i+r+a)*l+(-3*e+3*i-2*r-a)*o+r*s+e}function bm(s,t){let e=1-s;return e*e*t}function _m(s,t){return 2*(1-s)*s*t}function Mm(s,t){return s*s*t}function Nr(s,t,e,i){return bm(s,t)+_m(s,e)+Mm(s,i)}function Sm(s,t){let e=1-s;return e*e*e*t}function wm(s,t){let e=1-s;return 3*e*e*s*t}function Em(s,t){return 3*(1-s)*s*s*t}function Tm(s,t){return s*s*s*t}function Ur(s,t,e,i,n){return Sm(s,t)+wm(s,e)+Em(s,i)+Tm(s,n)}var Wo=class extends Pi{constructor(t=new wt,e=new wt,i=new wt,n=new wt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=i,this.v3=n}getPoint(t,e=new wt){let i=e,n=this.v0,r=this.v1,a=this.v2,o=this.v3;return i.set(Ur(t,n.x,r.x,a.x,o.x),Ur(t,n.y,r.y,a.y,o.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},$o=class extends Pi{constructor(t=new k,e=new k,i=new k,n=new k){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=i,this.v3=n}getPoint(t,e=new k){let i=e,n=this.v0,r=this.v1,a=this.v2,o=this.v3;return i.set(Ur(t,n.x,r.x,a.x,o.x),Ur(t,n.y,r.y,a.y,o.y),Ur(t,n.z,r.z,a.z,o.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},qo=class extends Pi{constructor(t=new wt,e=new wt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new wt){let i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new wt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Xo=class extends Pi{constructor(t=new k,e=new k){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new k){let i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new k){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Yo=class extends Pi{constructor(t=new wt,e=new wt,i=new wt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new wt){let i=e,n=this.v0,r=this.v1,a=this.v2;return i.set(Nr(t,n.x,r.x,a.x),Nr(t,n.y,r.y,a.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},ea=class extends Pi{constructor(t=new k,e=new k,i=new k){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new k){let i=e,n=this.v0,r=this.v1,a=this.v2;return i.set(Nr(t,n.x,r.x,a.x),Nr(t,n.y,r.y,a.y),Nr(t,n.z,r.z,a.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Ko=class extends Pi{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new wt){let i=e,n=this.points,r=(n.length-1)*t,a=Math.floor(r),o=r-a,l=n[a===0?a:a-1],c=n[a],h=n[a>n.length-2?n.length-1:a+1],u=n[a>n.length-3?n.length-1:a+2];return i.set(bu(o,l.x,c.x,h.x,u.x),bu(o,l.y,c.y,h.y,u.y)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let n=t.points[e];this.points.push(n.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){let n=this.points[e];t.points.push(n.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let n=t.points[e];this.points.push(new wt().fromArray(n))}return this}},Am=Object.freeze({__proto__:null,ArcCurve:Vo,CatmullRomCurve3:Js,CubicBezierCurve:Wo,CubicBezierCurve3:$o,EllipseCurve:ta,LineCurve:qo,LineCurve3:Xo,QuadraticBezierCurve:Yo,QuadraticBezierCurve3:ea,SplineCurve:Ko});var ia=class s extends Go{constructor(t=1,e=0){let i=(1+Math.sqrt(5))/2,n=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(n,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new s(t.radius,t.detail)}};var we=class s extends ie{constructor(t=1,e=1,i=1,n=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:n};let r=t/2,a=e/2,o=Math.floor(i),l=Math.floor(n),c=o+1,h=l+1,u=t/o,d=e/l,f=[],g=[],y=[],m=[];for(let p=0;p<h;p++){let v=p*d-a;for(let _=0;_<c;_++){let M=_*u-r;g.push(M,-v,0),y.push(0,0,1),m.push(_/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let v=0;v<o;v++){let _=v+c*p,M=v+c*(p+1),S=v+1+c*(p+1),b=v+1+c*p;f.push(_,M,b),f.push(M,S,b)}this.setIndex(f),this.setAttribute("position",new Zt(g,3)),this.setAttribute("normal",new Zt(y,3)),this.setAttribute("uv",new Zt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.widthSegments,t.heightSegments)}},On=class s extends ie{constructor(t=.5,e=1,i=32,n=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:i,phiSegments:n,thetaStart:r,thetaLength:a},i=Math.max(3,i),n=Math.max(1,n);let o=[],l=[],c=[],h=[],u=t,d=(e-t)/n,f=new k,g=new wt;for(let y=0;y<=n;y++){for(let m=0;m<=i;m++){let p=r+m/i*a;f.x=u*Math.cos(p),f.y=u*Math.sin(p),l.push(f.x,f.y,f.z),c.push(0,0,1),g.x=(f.x/e+1)/2,g.y=(f.y/e+1)/2,h.push(g.x,g.y)}u+=d}for(let y=0;y<n;y++){let m=y*(i+1);for(let p=0;p<i;p++){let v=p+m,_=v,M=v+i+1,S=v+i+2,b=v+1;o.push(_,M,b),o.push(M,S,b)}}this.setIndex(o),this.setAttribute("position",new Zt(l,3)),this.setAttribute("normal",new Zt(c,3)),this.setAttribute("uv",new Zt(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}};var Qi=class s extends ie{constructor(t=1,e=32,i=16,n=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:n,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));let l=Math.min(a+o,Math.PI),c=0,h=[],u=new k,d=new k,f=[],g=[],y=[],m=[];for(let p=0;p<=i;p++){let v=[],_=p/i,M=a+_*o,S=t*Math.cos(M),b=Math.sqrt(t*t-S*S),T=0;p===0&&a===0?T=.5/e:p===i&&l===Math.PI&&(T=-.5/e);for(let x=0;x<=e;x++){let w=x/e,C=n+w*r;u.x=-b*Math.cos(C),u.y=S,u.z=b*Math.sin(C),g.push(u.x,u.y,u.z),d.copy(u).normalize(),y.push(d.x,d.y,d.z),m.push(w+T,1-_),v.push(c++)}h.push(v)}for(let p=0;p<i;p++)for(let v=0;v<e;v++){let _=h[p][v+1],M=h[p][v],S=h[p+1][v],b=h[p+1][v+1];(p!==0||a>0)&&f.push(_,M,b),(p!==i-1||l<Math.PI)&&f.push(M,S,b)}this.setIndex(f),this.setAttribute("position",new Zt(g,3)),this.setAttribute("normal",new Zt(y,3)),this.setAttribute("uv",new Zt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var na=class s extends ie{constructor(t=new ea(new k(-1,-1,0),new k(-1,1,0),new k(1,1,0)),e=64,i=1,n=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:i,radialSegments:n,closed:r};let a=t.computeFrenetFrames(e,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new k,l=new k,c=new wt,h=new k,u=[],d=[],f=[],g=[];y(),this.setIndex(g),this.setAttribute("position",new Zt(u,3)),this.setAttribute("normal",new Zt(d,3)),this.setAttribute("uv",new Zt(f,2));function y(){for(let _=0;_<e;_++)m(_);m(r===!1?e:0),v(),p()}function m(_){h=t.getPointAt(_/e,h);let M=a.normals[_],S=a.binormals[_];for(let b=0;b<=n;b++){let T=b/n*Math.PI*2,x=Math.sin(T),w=-Math.cos(T);l.x=w*M.x+x*S.x,l.y=w*M.y+x*S.y,l.z=w*M.z+x*S.z,l.normalize(),d.push(l.x,l.y,l.z),o.x=h.x+i*l.x,o.y=h.y+i*l.y,o.z=h.z+i*l.z,u.push(o.x,o.y,o.z)}}function p(){for(let _=1;_<=e;_++)for(let M=1;M<=n;M++){let S=(n+1)*(_-1)+(M-1),b=(n+1)*_+(M-1),T=(n+1)*_+M,x=(n+1)*(_-1)+M;g.push(S,b,x),g.push(b,T,x)}}function v(){for(let _=0;_<=e;_++)for(let M=0;M<=n;M++)c.x=_/e,c.y=M/n,f.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new s(new Am[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}};function ps(s){let t={};for(let e in s){t[e]={};for(let i in s[e]){let n=s[e][i];if(_u(n))n.isRenderTargetTexture?(zt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=n.clone();else if(Array.isArray(n))if(_u(n[0])){let r=[];for(let a=0,o=n.length;a<o;a++)r[a]=n[a].clone();t[e][i]=r}else t[e][i]=n.slice();else t[e][i]=n}}return t}function hi(s){let t={};for(let e=0;e<s.length;e++){let i=ps(s[e]);for(let n in i)t[n]=i[n]}return t}function _u(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}function Rm(s){let t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function Kh(s){let t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ae.workingColorSpace}var ff={clone:ps,merge:hi},Cm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Pm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Ce=class extends Hi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Cm,this.fragmentShader=Pm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ps(t.uniforms),this.uniformsGroups=Rm(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let n in this.uniforms){let a=this.uniforms[n].value;a&&a.isTexture?e.uniforms[n]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[n]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[n]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[n]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[n]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[n]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[n]={type:"m4",value:a.toArray()}:e.uniforms[n]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let i={};for(let n in this.extensions)this.extensions[n]===!0&&(i[n]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let i in t.uniforms){let n=t.uniforms[i];switch(this.uniforms[i]={},n.type){case"t":this.uniforms[i].value=e[n.value]||null;break;case"c":this.uniforms[i].value=new rt().setHex(n.value);break;case"v2":this.uniforms[i].value=new wt().fromArray(n.value);break;case"v3":this.uniforms[i].value=new k().fromArray(n.value);break;case"v4":this.uniforms[i].value=new Re().fromArray(n.value);break;case"m3":this.uniforms[i].value=new Yt().fromArray(n.value);break;case"m4":this.uniforms[i].value=new ee().fromArray(n.value);break;default:this.uniforms[i].value=n.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let i in t.extensions)this.extensions[i]=t.extensions[i];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},Zo=class extends Ce{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Ht=class extends Hi{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new rt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new rt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=xa,this.normalScale=new wt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ci,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},sa=class extends Ht{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new wt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return se(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new rt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new rt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new rt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(t){this._retroreflectivity>0!=t>0&&this.version++,this._retroreflectivity=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.retroreflectivity=t.retroreflectivity,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}};var ra=class extends Hi{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new rt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new rt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=xa,this.normalScale=new wt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ci,this.combine=ul,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},Jo=class extends Hi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ju,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},jo=class extends Hi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function ks(s,t){return!s||s.constructor===t?s:typeof t.BYTES_PER_ELEMENT=="number"?new t(s):Array.prototype.slice.call(s)}function gh(s){return s!==void 0&&s.inTangents!==void 0&&s.outTangents!==void 0}var Bn=class{constructor(t,e,i,n){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=n!==void 0?n:new e.constructor(i),this.sampleValues=e,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,i=this._cachedIndex,n=e[i],r=e[i-1];i:{t:{let a;e:{n:if(!(t<n)){for(let o=i+2;;){if(n===void 0){if(t<r)break n;return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(r=n,n=e[++i],t<n)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(i=2,r=o);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(n=r,r=e[--i-1],t>=r)break t}a=i,i=0;break e}break i}for(;i<a;){let o=i+a>>>1;t<e[o]?a=o:i=o+1}if(n=e[i],r=e[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===void 0)return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,n)}return this.interpolate_(i,r,t,n)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,i=this.sampleValues,n=this.valueSize,r=t*n;for(let a=0;a!==n;++a)e[a]=i[r+a];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Qo=class extends Bn{constructor(t,e,i,n){super(t,e,i,n),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:xh,endingEnd:xh}}intervalChanged_(t,e,i){let n=this.parameterPositions,r=t-2,a=t+1,o=n[r],l=n[a];if(o===void 0)switch(this.getSettings_().endingStart){case bh:r=t,o=2*e-i;break;case _h:r=n.length-2,o=e+n[r]-n[r+1];break;default:r=t,o=i}if(l===void 0)switch(this.getSettings_().endingEnd){case bh:a=t,l=2*i-e;break;case _h:a=1,l=i+n[1]-n[0];break;default:a=t-1,l=e}let c=(i-e)*.5,h=this.valueSize;this._weightPrev=c/(e-o),this._weightNext=c/(l-i),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(t,e,i,n){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(i-e)/(n-e),y=g*g,m=y*g,p=-d*m+2*d*y-d*g,v=(1+d)*m+(-1.5-2*d)*y+(-.5+d)*g+1,_=(-1-f)*m+(1.5+f)*y+.5*g,M=f*m-f*y;for(let S=0;S!==o;++S)r[S]=p*a[h+S]+v*a[c+S]+_*a[l+S]+M*a[u+S];return r}},tl=class extends Bn{constructor(t,e,i,n){super(t,e,i,n)}interpolate_(t,e,i,n){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=(i-e)/(n-e),u=1-h;for(let d=0;d!==o;++d)r[d]=a[c+d]*u+a[l+d]*h;return r}},el=class extends Bn{constructor(t,e,i,n){super(t,e,i,n)}interpolate_(t){return this.copySampleValue_(t-1)}},il=class extends Bn{interpolate_(t,e,i,n){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this.inTangents,u=this.outTangents;if(!h||!u){let g=(i-e)/(n-e),y=1-g;for(let m=0;m!==o;++m)r[m]=a[c+m]*y+a[l+m]*g;return r}let d=o*2,f=t-1;for(let g=0;g!==o;++g){let y=a[c+g],m=a[l+g],p=f*d+g*2,v=u[p],_=u[p+1],M=t*d+g*2,S=h[M],b=h[M+1],T=Lm(i,e,v,S,n);r[g]=pf(T,y,_,b,m)}return r}};function pf(s,t,e,i,n){let r=1-s;return r*r*r*t+3*r*r*s*e+3*r*s*s*i+s*s*s*n}function Im(s,t,e,i,n){let r=1-s;return 3*r*r*(e-t)+6*r*s*(i-e)+3*s*s*(n-i)}function Lm(s,t,e,i,n){let r=(s-t)/(n-t);for(let a=0;a<8;a++){let o=pf(r,t,e,i,n)-s;if(Math.abs(o)<1e-10)break;let l=Im(r,t,e,i,n);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-o/l))}return r}var Ti=class{constructor(t,e,i,n){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=ks(e,this.TimeBufferType),this.values=ks(i,this.ValueBufferType),this.setInterpolation(n||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,i;if(e.toJSON!==this.toJSON)i=e.toJSON(t);else{i={name:t.name,times:ks(t.times,Array),values:ks(t.values,Array)};let n=t.getInterpolation();n!==t.DefaultInterpolation&&(i.interpolation=n),gh(t.settings)&&(i.settings={inTangents:ks(t.settings.inTangents,Array),outTangents:ks(t.settings.outTangents,Array)})}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new el(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new tl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Qo(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new il(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case kr:e=this.InterpolantFactoryMethodDiscrete;break;case Do:e=this.InterpolantFactoryMethodLinear;break;case So:e=this.InterpolantFactoryMethodSmooth;break;case vh:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return zt("KeyframeTrack:",i),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return kr;case this.InterpolantFactoryMethodLinear:return Do;case this.InterpolantFactoryMethodSmooth:return So;case this.InterpolantFactoryMethodBezier:return vh}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let i=0,n=e.length;i!==n;++i)e[i]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let i=0,n=e.length;i!==n;++i)e[i]*=t;gh(this.settings)&&(Mu(this.settings.inTangents,t),Mu(this.settings.outTangents,t))}return this}trim(t,e){let i=this.times,n=i.length,r=0,a=n-1;for(;r!==n&&i[r]<t;)++r;for(;a!==-1&&i[a]>e;)--a;if(++a,r!==0||a!==n){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=i.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(Vt("KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,n=this.values,r=i.length;r===0&&(Vt("KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let l=i[o];if(typeof l=="number"&&isNaN(l)){Vt("KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(a!==null&&a>l){Vt("KeyframeTrack: Out of order keys.",this,o,l,a),t=!1;break}a=l}if(n!==void 0&&Qp(n))for(let o=0,l=n.length;o!==l;++o){let c=n[o];if(isNaN(c)){Vt("KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),i=this.getValueSize(),n=this.getInterpolation()===So,r=t.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=t[o],h=t[o+1];if(c!==h&&(o!==1||c!==t[0]))if(n)l=!0;else{let u=o*i,d=u-i,f=u+i;for(let g=0;g!==i;++g){let y=e[u+g];if(y!==e[d+g]||y!==e[f+g]){l=!0;break}}}if(l){if(o!==a){t[a]=t[o];let u=o*i,d=a*i;for(let f=0;f!==i;++f)e[d+f]=e[u+f]}++a}}if(r>0){t[a]=t[r];for(let o=r*i,l=a*i,c=0;c!==i;++c)e[l+c]=e[o+c];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*i)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),i=this.constructor,n=new i(this.name,t,e);return n.createInterpolant=this.createInterpolant,gh(this.settings)&&(n.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),n}};function Mu(s,t){for(let e=0,i=s.length;e!==i;e+=2)s[e]*=t}Ti.prototype.ValueTypeName="";Ti.prototype.TimeBufferType=Float32Array;Ti.prototype.ValueBufferType=Float32Array;Ti.prototype.DefaultInterpolation=Do;var Hn=class extends Ti{constructor(t,e,i){super(t,e,i)}};Hn.prototype.ValueTypeName="bool";Hn.prototype.ValueBufferType=Array;Hn.prototype.DefaultInterpolation=kr;Hn.prototype.InterpolantFactoryMethodLinear=void 0;Hn.prototype.InterpolantFactoryMethodSmooth=void 0;var nl=class extends Ti{constructor(t,e,i,n){super(t,e,i,n)}};nl.prototype.ValueTypeName="color";var sl=class extends Ti{constructor(t,e,i,n){super(t,e,i,n)}};sl.prototype.ValueTypeName="number";var rl=class extends Bn{constructor(t,e,i,n){super(t,e,i,n)}interpolate_(t,e,i,n){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(i-e)/(n-e),c=t*o;for(let h=c+o;c!==h;c+=4)Xe.slerpFlat(r,0,a,c-o,a,c,l);return r}},aa=class extends Ti{constructor(t,e,i,n){super(t,e,i,n)}InterpolantFactoryMethodLinear(t){return new rl(this.times,this.values,this.getValueSize(),t)}};aa.prototype.ValueTypeName="quaternion";aa.prototype.InterpolantFactoryMethodSmooth=void 0;var zn=class extends Ti{constructor(t,e,i){super(t,e,i)}};zn.prototype.ValueTypeName="string";zn.prototype.ValueBufferType=Array;zn.prototype.DefaultInterpolation=kr;zn.prototype.InterpolantFactoryMethodLinear=void 0;zn.prototype.InterpolantFactoryMethodSmooth=void 0;var al=class extends Ti{constructor(t,e,i,n){super(t,e,i,n)}};al.prototype.ValueTypeName="vector";var ol=class{constructor(t,e,i){let n=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this._abortController=null,this.itemStart=function(h){o++,r===!1&&n.onStart!==void 0&&n.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,n.onProgress!==void 0&&n.onProgress(h,a,o),a===o&&(r=!1,n.onLoad!==void 0&&n.onLoad())},this.itemError=function(h){n.onError!==void 0&&n.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){let f=c[u],g=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},mf=new ol,ll=class{constructor(t){this.manager=t!==void 0?t:mf,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let i=this;return new Promise(function(n,r){i.load(t,n,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};ll.DEFAULT_MATERIAL_NAME="__DEFAULT";var cs=class extends Ne{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new rt(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},hs=class extends cs{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ne.DEFAULT_UP),this.updateMatrix(),this.groundColor=new rt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},yh=new ee,Su=new k,wu=new k,js=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new wt(512,512),this.mapType=xi,this.map=null,this.mapPass=null,this.matrix=new ee,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ks,this._frameExtents=new wt(1,1),this._viewportCount=1,this._viewports=[new Re(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;Su.setFromMatrixPosition(t.matrixWorld),e.position.copy(Su),wu.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(wu),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,i,n){yh.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),i.setFromProjectionMatrix(yh,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,a=n?n.z/r.x:1,o=n?n.w/r.y:1,l=n?n.x/r.x:0,c=n?n.y/r.y:0;t.coordinateSystem===Vs||t.reversedDepth?e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),e.multiply(yh)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},_o=new k,Mo=new Xe,Xi=new k,oa=class extends Ne{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ee,this.projectionMatrix=new ee,this.projectionMatrixInverse=new ee,this.coordinateSystem=Oi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(_o,Mo,Xi),Xi.x===1&&Xi.y===1&&Xi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(_o,Mo,Xi.set(1,1,1)).invert()}updateWorldMatrix(t,e,i=!1){super.updateWorldMatrix(t,e,i),this.matrixWorld.decompose(_o,Mo,Xi),Xi.x===1&&Xi.y===1&&Xi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(_o,Mo,Xi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Nn=new k,Eu=new wt,Tu=new wt,qe=class extends oa{constructor(t=50,e=1,i=.1,n=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=n,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=zr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan($c*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return zr*2*Math.atan(Math.tan($c*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){Nn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Nn.x,Nn.y).multiplyScalar(-t/Nn.z),Nn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Nn.x,Nn.y).multiplyScalar(-t/Nn.z)}getViewSize(t,e){return this.getViewBounds(t,Eu,Tu),e.subVectors(Tu,Eu)}setViewOffset(t,e,i,n,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=n,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan($c*.5*this.fov)/this.zoom,i=2*e,n=this.aspect*i,r=-.5*n,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*n/l,e-=a.offsetY*i/c,n*=a.width/l,i*=a.height/c}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+n,e,e-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},Sh=class extends js{constructor(){super(new qe(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(t){let e=this.camera,i=zr*2*t.angle*this.focus,n=this.mapSize.width/this.mapSize.height*this.aspect,r=t.distance||e.far;(i!==e.fov||n!==e.aspect||r!==e.far)&&(e.fov=i,e.aspect=n,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this.aspect=t.aspect,this}toJSON(){let t=super.toJSON();return t.focus=this.focus,t.aspect=this.aspect,t}},Gn=class extends cs{constructor(t,e,i=0,n=Math.PI/3,r=0,a=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Ne.DEFAULT_UP),this.updateMatrix(),this.target=new Ne,this.distance=i,this.angle=n,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new Sh}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.map=t.map,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.angle=this.angle,e.object.decay=this.decay,e.object.penumbra=this.penumbra,e.object.target=this.target.uuid,this.map&&this.map.isTexture&&(e.object.map=this.map.toJSON(t).uuid),e.object.shadow=this.shadow.toJSON(),e}},wh=class extends js{constructor(){super(new qe(90,1,.5,500)),this.isPointLightShadow=!0}},la=class extends cs{constructor(t,e,i=0,n=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=n,this.shadow=new wh}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}},Vn=class extends oa{constructor(t=-1,e=1,i=1,n=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=n,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,n,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=n,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,n=(this.top+this.bottom)/2,r=i-t,a=i+t,o=n+e,l=n-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Eh=class extends js{constructor(){super(new Vn(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},ca=class extends cs{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ne.DEFAULT_UP),this.updateMatrix(),this.target=new Ne,this.shadow=new Eh}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var Os=-90,Bs=1,cl=class extends Ne{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let n=new qe(Os,Bs,t,e);n.layers=this.layers,this.add(n);let r=new qe(Os,Bs,t,e);r.layers=this.layers,this.add(r);let a=new qe(Os,Bs,t,e);a.layers=this.layers,this.add(a);let o=new qe(Os,Bs,t,e);o.layers=this.layers,this.add(o);let l=new qe(Os,Bs,t,e);l.layers=this.layers,this.add(l);let c=new qe(Os,Bs,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[i,n,r,a,o,l]=e;for(let c of e)this.remove(c);if(t===Oi)i.up.set(0,1,0),i.lookAt(1,0,0),n.up.set(0,1,0),n.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Vs)i.up.set(0,-1,0),i.lookAt(-1,0,0),n.up.set(0,-1,0),n.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:n}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let y=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let m=!1;t.isWebGLRenderer===!0?m=t.state.buffers.depth.getReversed():m=t.reversedDepthBuffer,t.setRenderTarget(i,0,n),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(i,1,n),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(i,2,n),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(i,3,n),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(i,4,n),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),i.texture.generateMipmaps=y,t.setRenderTarget(i,5,n),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(u,d,f),t.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},hl=class extends qe{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var Zh="\\[\\]\\.:\\/",Dm=new RegExp("["+Zh+"]","g"),Jh="[^"+Zh+"]",Fm="[^"+Zh.replace("\\.","")+"]",Nm=/((?:WC+[\/:])*)/.source.replace("WC",Jh),Um=/(WCOD+)?/.source.replace("WCOD",Fm),km=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Jh),Om=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Jh),Bm=new RegExp("^"+Nm+Um+km+Om+"$"),Hm=["material","materials","bones","map"],Th=class{constructor(t,e,i){let n=i||Te.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,n)}getValue(t,e){this.bind();let i=this._targetGroup.nCachedObjects_,n=this._bindings[i];n!==void 0&&n.getValue(t,e)}setValue(t,e){let i=this._bindings;for(let n=this._targetGroup.nCachedObjects_,r=i.length;n!==r;++n)i[n].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].unbind()}},Te=class s{constructor(t,e,i){this.path=e,this.parsedPath=i||s.parseTrackName(e),this.node=s.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,i){return t&&t.isAnimationObjectGroup?new s.Composite(t,e,i):new s(t,e,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Dm,"")}static parseTrackName(t){let e=Bm.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},n=i.nodeName&&i.nodeName.lastIndexOf(".");if(n!==void 0&&n!==-1){let r=i.nodeName.substring(n+1);Hm.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,n),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(e);if(i!==void 0)return i}if(t.children){let i=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let l=i(o.children);if(l)return l}return null},n=i(t.children);if(n)return n}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let i=this.resolvedProperty;for(let n=0,r=i.length;n!==r;++n)t[e++]=i[n]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let i=this.resolvedProperty;for(let n=0,r=i.length;n!==r;++n)i[n]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let i=this.resolvedProperty;for(let n=0,r=i.length;n!==r;++n)i[n]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let i=this.resolvedProperty;for(let n=0,r=i.length;n!==r;++n)i[n]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,i=e.objectName,n=e.propertyName,r=e.propertyIndex;if(t||(t=s.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){zt("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=e.objectIndex;switch(i){case"materials":if(!t.material){Vt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Vt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Vt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Vt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Vt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){Vt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(c!==void 0){if(t[c]===void 0){Vt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let a=t[n];if(a===void 0){let c=e.nodeName;Vt("PropertyBinding: Trying to update property for track: "+c+"."+n+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(n==="morphTargetInfluences"){if(!t.geometry){Vt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Vt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=n;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Te.Composite=Th;Te.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Te.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Te.prototype.GetterByBindingType=[Te.prototype._getValue_direct,Te.prototype._getValue_array,Te.prototype._getValue_arrayElement,Te.prototype._getValue_toArray];Te.prototype.SetterByBindingTypeAndVersioning=[[Te.prototype._setValue_direct,Te.prototype._setValue_direct_setNeedsUpdate,Te.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Te.prototype._setValue_array,Te.prototype._setValue_array_setNeedsUpdate,Te.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Te.prototype._setValue_arrayElement,Te.prototype._setValue_arrayElement_setNeedsUpdate,Te.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Te.prototype._setValue_fromArray,Te.prototype._setValue_fromArray_setNeedsUpdate,Te.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var n_=new Float32Array(1);var nd=class nd{constructor(t,e,i,n){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,i,n)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let i=0;i<4;i++)this.elements[i]=t[i+e];return this}set(t,e,i,n){let r=this.elements;return r[0]=t,r[2]=e,r[1]=i,r[3]=n,this}};nd.prototype.isMatrix2=!0;var Ah=nd;function jh(s,t,e,i){let n=zm(i);switch(e){case Wh:return s*t;case xl:return s*t/n.components*n.byteLength;case bl:return s*t/n.components*n.byteLength;case Xn:return s*t*2/n.components*n.byteLength;case _l:return s*t*2/n.components*n.byteLength;case $h:return s*t*3/n.components*n.byteLength;case Li:return s*t*4/n.components*n.byteLength;case Ml:return s*t*4/n.components*n.byteLength;case fa:case pa:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case ma:case ga:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case wl:case Tl:return Math.max(s,16)*Math.max(t,8)/4;case Sl:case El:return Math.max(s,8)*Math.max(t,8)/2;case Al:case Rl:case Pl:case Il:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Cl:case ya:case Ll:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Dl:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Fl:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case Nl:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case Ul:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case kl:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case Ol:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case Bl:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case Hl:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case zl:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case Gl:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case Vl:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case Wl:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case $l:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case ql:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case Xl:case Yl:case Kl:return Math.ceil(s/4)*Math.ceil(t/4)*16;case Zl:case Jl:return Math.ceil(s/4)*Math.ceil(t/4)*8;case va:case jl:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function zm(s){switch(s){case xi:case Hh:return{byteLength:1,components:1};case tr:case zh:case bi:return{byteLength:2,components:1};case yl:case vl:return{byteLength:2,components:4};case Gi:case gl:case Ii:return{byteLength:4,components:1};case Gh:case Vh:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?zt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function kf(){let s=null,t=!1,e=null,i=null;function n(r,a){i=s.requestAnimationFrame(n),e(r,a)}return{start:function(){t!==!0&&e!==null&&s!==null&&(i=s.requestAnimationFrame(n),t=!0)},stop:function(){s!==null&&s.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function Ym(s){let t=new WeakMap;function e(o,l){let c=o.array,h=o.usage,u=c.byteLength,d=s.createBuffer();s.bindBuffer(l,d),s.bufferData(l,c,h),o.onUploadCallback();let f;if(c instanceof Float32Array)f=s.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=s.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=s.HALF_FLOAT:f=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=s.SHORT;else if(c instanceof Uint32Array)f=s.UNSIGNED_INT;else if(c instanceof Int32Array)f=s.INT;else if(c instanceof Int8Array)f=s.BYTE;else if(c instanceof Uint8Array)f=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function i(o,l,c){let h=l.array,u=l.updateRanges;if(s.bindBuffer(c,o),u.length===0)s.bufferSubData(c,0,h);else{u.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<u.length;f++){let g=u[d],y=u[f];y.start<=g.start+g.count+1?g.count=Math.max(g.count,y.start+y.count-g.start):(++d,u[d]=y)}u.length=d+1;for(let f=0,g=u.length;f<g;f++){let y=u[f];s.bufferSubData(c,y.start*h.BYTES_PER_ELEMENT,h,y.start,y.count)}l.clearUpdateRanges()}l.onUploadCallback()}function n(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(s.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:n,remove:r,update:a}}var Km=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Zm=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Jm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,jm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Qm=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,t0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,e0=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,i0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,n0=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,s0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,r0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,a0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,o0=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,l0=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,c0=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,h0=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,d0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,u0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,f0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,p0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,m0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,g0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,y0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,v0=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,x0=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,b0=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,_0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,M0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,S0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,w0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,E0="gl_FragColor = linearToOutputTexel( gl_FragColor );",T0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,A0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,R0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,C0=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,P0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,I0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,L0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,D0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,F0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,N0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,U0=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,k0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,O0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,B0=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,H0=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,z0=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,G0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,V0=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,W0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,$0=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,q0=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,X0=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Y0=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,K0=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Z0=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,J0=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,j0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Q0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,tg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,eg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,ig=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ng=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,sg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,rg=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ag=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,og=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,lg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,cg=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,hg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,dg=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,ug=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,fg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,pg=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,mg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,gg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,yg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,vg=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,xg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,bg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,_g=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Mg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Sg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,wg=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,Eg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Tg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Ag=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Rg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Cg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Pg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Ig=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Lg=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Dg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Fg=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Ng=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Ug=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,kg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Og=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Bg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Hg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,zg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Gg=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Vg=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Wg=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,$g=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,qg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Xg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Yg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Kg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Zg=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Jg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,jg=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Qg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ty=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ey=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,iy=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,ny=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,sy=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,ry=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ay=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,oy=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,ly=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,cy=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,hy=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,dy=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,uy=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,fy=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,py=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,my=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,gy=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,yy=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,vy=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,xy=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,by=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_y=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,My=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Sy=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,wy=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Ey=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ty=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Ay=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Ry=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Qt={alphahash_fragment:Km,alphahash_pars_fragment:Zm,alphamap_fragment:Jm,alphamap_pars_fragment:jm,alphatest_fragment:Qm,alphatest_pars_fragment:t0,aomap_fragment:e0,aomap_pars_fragment:i0,batching_pars_vertex:n0,batching_vertex:s0,begin_vertex:r0,beginnormal_vertex:a0,bsdfs:o0,iridescence_fragment:l0,bumpmap_pars_fragment:c0,clipping_planes_fragment:h0,clipping_planes_pars_fragment:d0,clipping_planes_pars_vertex:u0,clipping_planes_vertex:f0,color_fragment:p0,color_pars_fragment:m0,color_pars_vertex:g0,color_vertex:y0,common:v0,cube_uv_reflection_fragment:x0,defaultnormal_vertex:b0,displacementmap_pars_vertex:_0,displacementmap_vertex:M0,emissivemap_fragment:S0,emissivemap_pars_fragment:w0,colorspace_fragment:E0,colorspace_pars_fragment:T0,envmap_fragment:A0,envmap_common_pars_fragment:R0,envmap_pars_fragment:C0,envmap_pars_vertex:P0,envmap_physical_pars_fragment:z0,envmap_vertex:I0,fog_vertex:L0,fog_pars_vertex:D0,fog_fragment:F0,fog_pars_fragment:N0,gradientmap_pars_fragment:U0,lightmap_pars_fragment:k0,lights_lambert_fragment:O0,lights_lambert_pars_fragment:B0,lights_pars_begin:H0,lights_toon_fragment:G0,lights_toon_pars_fragment:V0,lights_phong_fragment:W0,lights_phong_pars_fragment:$0,lights_physical_fragment:q0,lights_physical_pars_fragment:X0,lights_fragment_begin:Y0,lights_fragment_maps:K0,lights_fragment_end:Z0,lightprobes_pars_fragment:J0,logdepthbuf_fragment:j0,logdepthbuf_pars_fragment:Q0,logdepthbuf_pars_vertex:tg,logdepthbuf_vertex:eg,map_fragment:ig,map_pars_fragment:ng,map_particle_fragment:sg,map_particle_pars_fragment:rg,metalnessmap_fragment:ag,metalnessmap_pars_fragment:og,morphinstance_vertex:lg,morphcolor_vertex:cg,morphnormal_vertex:hg,morphtarget_pars_vertex:dg,morphtarget_vertex:ug,normal_fragment_begin:fg,normal_fragment_maps:pg,normal_pars_fragment:mg,normal_pars_vertex:gg,normal_vertex:yg,normalmap_pars_fragment:vg,clearcoat_normal_fragment_begin:xg,clearcoat_normal_fragment_maps:bg,clearcoat_pars_fragment:_g,iridescence_pars_fragment:Mg,opaque_fragment:Sg,packing:wg,premultiplied_alpha_fragment:Eg,project_vertex:Tg,dithering_fragment:Ag,dithering_pars_fragment:Rg,roughnessmap_fragment:Cg,roughnessmap_pars_fragment:Pg,shadowmap_pars_fragment:Ig,shadowmap_pars_vertex:Lg,shadowmap_vertex:Dg,shadowmask_pars_fragment:Fg,skinbase_vertex:Ng,skinning_pars_vertex:Ug,skinning_vertex:kg,skinnormal_vertex:Og,specularmap_fragment:Bg,specularmap_pars_fragment:Hg,tonemapping_fragment:zg,tonemapping_pars_fragment:Gg,transmission_fragment:Vg,transmission_pars_fragment:Wg,uv_pars_fragment:$g,uv_pars_vertex:qg,uv_vertex:Xg,worldpos_vertex:Yg,background_vert:Kg,background_frag:Zg,backgroundCube_vert:Jg,backgroundCube_frag:jg,cube_vert:Qg,cube_frag:ty,depth_vert:ey,depth_frag:iy,distance_vert:ny,distance_frag:sy,equirect_vert:ry,equirect_frag:ay,linedashed_vert:oy,linedashed_frag:ly,meshbasic_vert:cy,meshbasic_frag:hy,meshlambert_vert:dy,meshlambert_frag:uy,meshmatcap_vert:fy,meshmatcap_frag:py,meshnormal_vert:my,meshnormal_frag:gy,meshphong_vert:yy,meshphong_frag:vy,meshphysical_vert:xy,meshphysical_frag:by,meshtoon_vert:_y,meshtoon_frag:My,points_vert:Sy,points_frag:wy,shadow_vert:Ey,shadow_frag:Ty,sprite_vert:Ay,sprite_frag:Ry},_t={common:{diffuse:{value:new rt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Yt},alphaMap:{value:null},alphaMapTransform:{value:new Yt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Yt}},envmap:{envMap:{value:null},envMapRotation:{value:new Yt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Yt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Yt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Yt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Yt},normalScale:{value:new wt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Yt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Yt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Yt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Yt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new rt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new k},probesMax:{value:new k},probesResolution:{value:new k}},points:{diffuse:{value:new rt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Yt},alphaTest:{value:0},uvTransform:{value:new Yt}},sprite:{diffuse:{value:new rt(16777215)},opacity:{value:1},center:{value:new wt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Yt},alphaMap:{value:null},alphaMapTransform:{value:new Yt},alphaTest:{value:0}}},on={basic:{uniforms:hi([_t.common,_t.specularmap,_t.envmap,_t.aomap,_t.lightmap,_t.fog]),vertexShader:Qt.meshbasic_vert,fragmentShader:Qt.meshbasic_frag},lambert:{uniforms:hi([_t.common,_t.specularmap,_t.envmap,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.fog,_t.lights,{emissive:{value:new rt(0)},envMapIntensity:{value:1}}]),vertexShader:Qt.meshlambert_vert,fragmentShader:Qt.meshlambert_frag},phong:{uniforms:hi([_t.common,_t.specularmap,_t.envmap,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.fog,_t.lights,{emissive:{value:new rt(0)},specular:{value:new rt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Qt.meshphong_vert,fragmentShader:Qt.meshphong_frag},standard:{uniforms:hi([_t.common,_t.envmap,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.roughnessmap,_t.metalnessmap,_t.fog,_t.lights,{emissive:{value:new rt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Qt.meshphysical_vert,fragmentShader:Qt.meshphysical_frag},toon:{uniforms:hi([_t.common,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.gradientmap,_t.fog,_t.lights,{emissive:{value:new rt(0)}}]),vertexShader:Qt.meshtoon_vert,fragmentShader:Qt.meshtoon_frag},matcap:{uniforms:hi([_t.common,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.fog,{matcap:{value:null}}]),vertexShader:Qt.meshmatcap_vert,fragmentShader:Qt.meshmatcap_frag},points:{uniforms:hi([_t.points,_t.fog]),vertexShader:Qt.points_vert,fragmentShader:Qt.points_frag},dashed:{uniforms:hi([_t.common,_t.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Qt.linedashed_vert,fragmentShader:Qt.linedashed_frag},depth:{uniforms:hi([_t.common,_t.displacementmap]),vertexShader:Qt.depth_vert,fragmentShader:Qt.depth_frag},normal:{uniforms:hi([_t.common,_t.bumpmap,_t.normalmap,_t.displacementmap,{opacity:{value:1}}]),vertexShader:Qt.meshnormal_vert,fragmentShader:Qt.meshnormal_frag},sprite:{uniforms:hi([_t.sprite,_t.fog]),vertexShader:Qt.sprite_vert,fragmentShader:Qt.sprite_frag},background:{uniforms:{uvTransform:{value:new Yt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Qt.background_vert,fragmentShader:Qt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Yt}},vertexShader:Qt.backgroundCube_vert,fragmentShader:Qt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Qt.cube_vert,fragmentShader:Qt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Qt.equirect_vert,fragmentShader:Qt.equirect_frag},distance:{uniforms:hi([_t.common,_t.displacementmap,{referencePosition:{value:new k},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Qt.distance_vert,fragmentShader:Qt.distance_frag},shadow:{uniforms:hi([_t.lights,_t.fog,{color:{value:new rt(0)},opacity:{value:1}}]),vertexShader:Qt.shadow_vert,fragmentShader:Qt.shadow_frag}};on.physical={uniforms:hi([on.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Yt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Yt},clearcoatNormalScale:{value:new wt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Yt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Yt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Yt},sheen:{value:0},sheenColor:{value:new rt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Yt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Yt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Yt},transmissionSamplerSize:{value:new wt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Yt},attenuationDistance:{value:0},attenuationColor:{value:new rt(0)},specularColor:{value:new rt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Yt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Yt},anisotropyVector:{value:new wt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Yt}}]),vertexShader:Qt.meshphysical_vert,fragmentShader:Qt.meshphysical_frag};var ec={r:0,b:0,g:0},Cy=new ee,Of=new Yt;Of.set(-1,0,0,0,1,0,0,0,1);function Py(s,t,e,i,n,r){let a=new rt(0),o=n===!0?0:1,l,c,h=null,u=0,d=null;function f(v){let _=v.isScene===!0?v.background:null;if(_&&_.isTexture){let M=v.backgroundBlurriness>0;_=t.get(_,M)}return _}function g(v){let _=!1,M=f(v);M===null?m(a,o):M&&M.isColor&&(m(M,1),_=!0);let S=s.xr.getEnvironmentBlendMode();S==="additive"?e.buffers.color.setClear(0,0,0,1,r):S==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(s.autoClear||_)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function y(v,_){let M=f(_);M&&(M.isCubeTexture||M.mapping===da)?(c===void 0&&(c=new ft(new Me(1,1,1),new Ce({name:"BackgroundCubeMaterial",uniforms:ps(on.backgroundCube.uniforms),vertexShader:on.backgroundCube.vertexShader,fragmentShader:on.backgroundCube.fragmentShader,side:Ke,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(S,b,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=M,c.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Cy.makeRotationFromEuler(_.backgroundRotation)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Of),c.material.toneMapped=ae.getTransfer(M.colorSpace)!==me,(h!==M||u!==M.version||d!==s.toneMapping)&&(c.material.needsUpdate=!0,h=M,u=M.version,d=s.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null)):M&&M.isTexture&&(l===void 0&&(l=new ft(new we(2,2),new Ce({name:"BackgroundMaterial",uniforms:ps(on.background.uniforms),vertexShader:on.background.vertexShader,fragmentShader:on.background.fragmentShader,side:tn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=M,l.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,l.material.toneMapped=ae.getTransfer(M.colorSpace)!==me,M.matrixAutoUpdate===!0&&M.updateMatrix(),l.material.uniforms.uvTransform.value.copy(M.matrix),(h!==M||u!==M.version||d!==s.toneMapping)&&(l.material.needsUpdate=!0,h=M,u=M.version,d=s.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null))}function m(v,_){v.getRGB(ec,Kh(s)),e.buffers.color.setClear(ec.r,ec.g,ec.b,_,r)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(v,_=1){a.set(v),o=_,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(v){o=v,m(a,o)},render:g,addToRenderList:y,dispose:p}}function Iy(s,t){let e=s.getParameter(s.MAX_VERTEX_ATTRIBS),i={},n=d(null),r=n,a=!1;function o(D,I,L,A,P){let O=!1,B=u(D,A,L,I);r!==B&&(r=B,c(r.object)),O=f(D,A,L,P),O&&g(D,A,L,P),P!==null&&t.update(P,s.ELEMENT_ARRAY_BUFFER),(O||a)&&(a=!1,M(D,I,L,A),P!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(P).buffer))}function l(){return s.createVertexArray()}function c(D){return s.bindVertexArray(D)}function h(D){return s.deleteVertexArray(D)}function u(D,I,L,A){let P=A.wireframe===!0,O=i[I.id];O===void 0&&(O={},i[I.id]=O);let B=D.isInstancedMesh===!0?D.id:0,W=O[B];W===void 0&&(W={},O[B]=W);let F=W[L.id];F===void 0&&(F={},W[L.id]=F);let H=F[P];return H===void 0&&(H=d(l()),F[P]=H),H}function d(D){let I=[],L=[],A=[];for(let P=0;P<e;P++)I[P]=0,L[P]=0,A[P]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:L,attributeDivisors:A,object:D,attributes:{},index:null}}function f(D,I,L,A){let P=r.attributes,O=I.attributes,B=0,W=L.getAttributes();for(let F in W)if(W[F].location>=0){let G=P[F],nt=O[F];if(nt===void 0&&(F==="instanceMatrix"&&D.instanceMatrix&&(nt=D.instanceMatrix),F==="instanceColor"&&D.instanceColor&&(nt=D.instanceColor)),G===void 0||G.attribute!==nt||nt&&G.data!==nt.data)return!0;B++}return r.attributesNum!==B||r.index!==A}function g(D,I,L,A){let P={},O=I.attributes,B=0,W=L.getAttributes();for(let F in W)if(W[F].location>=0){let G=O[F];G===void 0&&(F==="instanceMatrix"&&D.instanceMatrix&&(G=D.instanceMatrix),F==="instanceColor"&&D.instanceColor&&(G=D.instanceColor));let nt={};nt.attribute=G,G&&G.data&&(nt.data=G.data),P[F]=nt,B++}r.attributes=P,r.attributesNum=B,r.index=A}function y(){let D=r.newAttributes;for(let I=0,L=D.length;I<L;I++)D[I]=0}function m(D){p(D,0)}function p(D,I){let L=r.newAttributes,A=r.enabledAttributes,P=r.attributeDivisors;L[D]=1,A[D]===0&&(s.enableVertexAttribArray(D),A[D]=1),P[D]!==I&&(s.vertexAttribDivisor(D,I),P[D]=I)}function v(){let D=r.newAttributes,I=r.enabledAttributes;for(let L=0,A=I.length;L<A;L++)I[L]!==D[L]&&(s.disableVertexAttribArray(L),I[L]=0)}function _(D,I,L,A,P,O,B){B===!0?s.vertexAttribIPointer(D,I,L,P,O):s.vertexAttribPointer(D,I,L,A,P,O)}function M(D,I,L,A){y();let P=A.attributes,O=L.getAttributes(),B=I.defaultAttributeValues;for(let W in O){let F=O[W];if(F.location>=0){let H=P[W];if(H===void 0&&(W==="instanceMatrix"&&D.instanceMatrix&&(H=D.instanceMatrix),W==="instanceColor"&&D.instanceColor&&(H=D.instanceColor)),H!==void 0){let G=H.normalized,nt=H.itemSize,at=t.get(H);if(at===void 0)continue;let Mt=at.buffer,gt=at.type,Nt=at.bytesPerElement,q=gt===s.INT||gt===s.UNSIGNED_INT||H.gpuType===gl;if(H.isInterleavedBufferAttribute){let j=H.data,ct=j.stride,Et=H.offset;if(j.isInstancedInterleavedBuffer){for(let dt=0;dt<F.locationSize;dt++)p(F.location+dt,j.meshPerAttribute);D.isInstancedMesh!==!0&&A._maxInstanceCount===void 0&&(A._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let dt=0;dt<F.locationSize;dt++)m(F.location+dt);s.bindBuffer(s.ARRAY_BUFFER,Mt);for(let dt=0;dt<F.locationSize;dt++)_(F.location+dt,nt/F.locationSize,gt,G,ct*Nt,(Et+nt/F.locationSize*dt)*Nt,q)}else{if(H.isInstancedBufferAttribute){for(let j=0;j<F.locationSize;j++)p(F.location+j,H.meshPerAttribute);D.isInstancedMesh!==!0&&A._maxInstanceCount===void 0&&(A._maxInstanceCount=H.meshPerAttribute*H.count)}else for(let j=0;j<F.locationSize;j++)m(F.location+j);s.bindBuffer(s.ARRAY_BUFFER,Mt);for(let j=0;j<F.locationSize;j++)_(F.location+j,nt/F.locationSize,gt,G,nt*Nt,nt/F.locationSize*j*Nt,q)}}else if(B!==void 0){let G=B[W];if(G!==void 0)switch(G.length){case 2:s.vertexAttrib2fv(F.location,G);break;case 3:s.vertexAttrib3fv(F.location,G);break;case 4:s.vertexAttrib4fv(F.location,G);break;default:s.vertexAttrib1fv(F.location,G)}}}}v()}function S(){w();for(let D in i){let I=i[D];for(let L in I){let A=I[L];for(let P in A){let O=A[P];for(let B in O)h(O[B].object),delete O[B];delete A[P]}}delete i[D]}}function b(D){if(i[D.id]===void 0)return;let I=i[D.id];for(let L in I){let A=I[L];for(let P in A){let O=A[P];for(let B in O)h(O[B].object),delete O[B];delete A[P]}}delete i[D.id]}function T(D){for(let I in i){let L=i[I];for(let A in L){let P=L[A];if(P[D.id]===void 0)continue;let O=P[D.id];for(let B in O)h(O[B].object),delete O[B];delete P[D.id]}}}function x(D){for(let I in i){let L=i[I],A=D.isInstancedMesh===!0?D.id:0,P=L[A];if(P!==void 0){for(let O in P){let B=P[O];for(let W in B)h(B[W].object),delete B[W];delete P[O]}delete L[A],Object.keys(L).length===0&&delete i[I]}}}function w(){C(),a=!0,r!==n&&(r=n,c(r.object))}function C(){n.geometry=null,n.program=null,n.wireframe=!1}return{setup:o,reset:w,resetDefaultState:C,dispose:S,releaseStatesOfGeometry:b,releaseStatesOfObject:x,releaseStatesOfProgram:T,initAttributes:y,enableAttribute:m,disableUnusedAttributes:v}}function Ly(s,t,e){let i;function n(l){i=l}function r(l,c){s.drawArrays(i,l,c),e.update(c,i,1)}function a(l,c,h){h!==0&&(s.drawArraysInstanced(i,l,c,h),e.update(c,i,h))}function o(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,h);let d=0;for(let f=0;f<h;f++)d+=c[f];e.update(d,i,1)}this.setMode=n,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function Dy(s,t,e,i){let n;function r(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){let T=t.get("EXT_texture_filter_anisotropic");n=s.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function a(T){return!(T!==Li&&i.convert(T)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(T){let x=T===bi&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(T!==xi&&T!==Ii&&!x&&i.convert(T)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE))}function l(T){if(T==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(zt("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=e.logarithmicDepthBuffer===!0,d=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&d===!1&&zt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let f=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),p=s.getParameter(s.MAX_VERTEX_ATTRIBS),v=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),_=s.getParameter(s.MAX_VARYING_VECTORS),M=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),S=s.getParameter(s.MAX_SAMPLES),b=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:y,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:v,maxVaryings:_,maxFragmentUniforms:M,maxSamples:S,samples:b}}function Fy(s){let t=this,e=null,i=0,n=!1,r=!1,a=new ki,o=new Yt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||i!==0||n;return n=d,i=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,f){let g=u.clippingPlanes,y=u.clipIntersection,m=u.clipShadows,p=s.get(u);if(!n||g===null||g.length===0||r&&!m)r?h(null):c();else{let v=r?0:i,_=v*4,M=p.clippingState||null;l.value=M,M=h(g,d,_,f);for(let S=0;S!==_;++S)M[S]=e[S];p.clippingState=M,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(u,d,f,g){let y=u!==null?u.length:0,m=null;if(y!==0){if(m=l.value,g!==!0||m===null){let p=f+y*4,v=d.matrixWorldInverse;o.getNormalMatrix(v),(m===null||m.length<p)&&(m=new Float32Array(p));for(let _=0,M=f;_!==y;++_,M+=4)a.copy(u[_]).applyMatrix4(v,o),a.normal.toArray(m,M),m[M+3]=a.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=y,t.numIntersection=0,m}}var nr=4,Ny=6,Uy=20,ky=256,_a=new Vn,gf=new rt,sd=null,rd=0,ad=0,od=!1,Oy=new k,ms=new k,gs=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,i=.1,n=100,r={}){let{size:a=256,position:o=Oy}=r;sd=this._renderer.getRenderTarget(),rd=this._renderer.getActiveCubeFace(),ad=this._renderer.getActiveMipmapLevel(),od=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,i,n,l,o),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=xf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=vf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(sd,rd,ad),this._renderer.xr.enabled=od,t.scissorTest=!1,ir(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===$n||t.mapping===fs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),sd=this._renderer.getRenderTarget(),rd=this._renderer.getActiveCubeFace(),ad=this._renderer.getActiveMipmapLevel(),od=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:Ve,minFilter:Ve,generateMipmaps:!1,type:bi,format:Li,colorSpace:Or,depthBuffer:!1},n=yf(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=yf(t,e,i);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=By(r)),this._blurMaterial=zy(r,t,e),this._ggxMaterial=Hy(r,t,e)}return n}_compileMaterial(t){let e=new ft(new ie,t);this._renderer.compile(e,_a)}_sceneToCubeUV(t,e,i,n,r){let l=new qe(90,1,e,i),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor(gf),u.toneMapping=zi,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(n),u.clearDepth(),u.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new ft(new Me,new oe({name:"PMREM.Background",side:Ke,depthWrite:!1,depthTest:!1})));let y=this._backgroundBox,m=y.material,p=!1,v=t.background;v?v.isColor&&(m.color.copy(v),t.background=null,p=!0):(m.color.copy(gf),p=!0);for(let _=0;_<6;_++){let M=_%3;M===0?(l.up.set(0,c[_],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[_],r.y,r.z)):M===1?(l.up.set(0,0,c[_]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[_],r.z)):(l.up.set(0,c[_],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[_]));let S=this._cubeSize;ir(n,M*S,_>2?S:0,S,S),u.setRenderTarget(n),p&&u.render(y,l),u.render(t,l)}u.toneMapping=f,u.autoClear=d,t.background=v}_textureToCubeUV(t,e){let i=this._renderer,n=t.mapping===$n||t.mapping===fs;n?(this._cubemapMaterial===null&&(this._cubemapMaterial=xf()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=vf());let r=n?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;let o=r.uniforms;o.envMap.value=t;let l=this._cubeSize;ir(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(a,_a)}_applyPMREM(t){let e=this._renderer,i=e.autoClear;e.autoClear=!1;let n=this._lodMeshes.length;for(let r=1;r<n;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=i}_applyGGXFilter(t,e,i){let n=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[i];o.material=a;let l=a.uniforms,c=i/(this._lodMeshes.length-1),h=e/(this._lodMeshes.length-1),u=Math.sqrt(c*c-h*h),d=c*1.25,f=u*d,{_lodMax:g}=this,y=this._sizeLods[i],m=3*y*(i>g-nr?i-g+nr:0),p=4*(this._cubeSize-y);l.envMap.value=t.texture,l.roughness.value=f,l.mipInt.value=g-e,ir(r,m,p,3*y,2*y),n.setRenderTarget(r),n.render(o,_a),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=g-i,ir(t,m,p,3*y,2*y),n.setRenderTarget(t),n.render(o,_a)}_blur(t,e,i,n){let r=this._pingPongRenderTarget,a=Math.min(n,Math.PI)/Math.SQRT2;this._blurPass(t,r,e,i,a),this._blurPass(r,t,i,i,a)}_blurPass(t,e,i,n,r){let a=this._renderer,o=this._blurMaterial,l=this._lodMeshes[n];l.material=o;let c=o.uniforms;c.envMap.value=t.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-i;let h=this._sizeLods[n],u=3*h*(n>this._lodMax-nr?n-this._lodMax+nr:0),d=4*(this._cubeSize-h);ir(e,u,d,3*h,2*h),a.setRenderTarget(e),a.render(l,_a)}};function By(s){let t=[],e=[],i=s,n=s-nr+1+Ny;for(let r=0;r<n;r++){let a=Math.pow(2,i);t.push(a);let o=1/(a-2),l=-o,c=1+o,h=[l,l,c,l,c,c,l,l,c,c,l,c],u=6,d=6,f=3,g=new Float32Array(f*d*u),y=new Float32Array(f*d*u);for(let p=0;p<u;p++){let v=p%3*2/3-1,_=p>2?0:-1,M=[v,_,0,v+2/3,_,0,v+2/3,_+1,0,v,_,0,v+2/3,_+1,0,v,_+1,0];g.set(M,f*d*p);for(let S=0;S<d;S++){let b=h[S*2]*2-1,T=h[S*2+1]*2-1;p===0?ms.set(1,T,b):p===1?ms.set(-b,1,-T):p===2?ms.set(-b,T,1):p===3?ms.set(-1,T,-b):p===4?ms.set(-b,-1,T):ms.set(b,T,-1),ms.toArray(y,(p*d+S)*f)}}let m=new ie;m.setAttribute("position",new qt(g,f)),m.setAttribute("outputDirection",new qt(y,f)),e.push(new ft(m,null)),i>nr&&i--}return{lodMeshes:e,sizeLods:t}}function yf(s,t,e){let i=new ei(s,t,e);return i.texture.mapping=da,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ir(s,t,e,i,n){s.viewport.set(t,e,i,n),s.scissor.set(t,e,i,n)}function Hy(s,t,e){return new Ce({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:ky,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:rc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:en,depthTest:!1,depthWrite:!1})}function zy(s,t,e){return new Ce({name:"SphericalGaussianBlur",defines:{SAMPLES:Uy,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:rc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:en,depthTest:!1,depthWrite:!1})}function vf(){return new Ce({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:rc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:en,depthTest:!1,depthWrite:!1})}function xf(){return new Ce({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:rc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:en,depthTest:!1,depthWrite:!1})}function rc(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var nc=class extends ei{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},n=[i,i,i,i,i,i];this.texture=new Zr(n),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},n=new Me(5,5,5),r=new Ce({name:"CubemapFromEquirect",uniforms:ps(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Ke,blending:en});r.uniforms.tEquirect.value=e;let a=new ft(n,r),o=e.minFilter;return e.minFilter===sn&&(e.minFilter=Ve),new cl(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,i=!0,n=!0){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,i,n);t.setRenderTarget(r)}};function Gy(s){let t=new WeakMap,e=new WeakMap,i=null;function n(d,f=!1){return d==null?null:f?a(d):r(d)}function r(d){if(d&&d.isTexture){let f=d.mapping;if(f===fl||f===pl)if(t.has(d)){let g=t.get(d).texture;return o(g,d.mapping)}else{let g=d.image;if(g&&g.height>0){let y=new nc(g.height);return y.fromEquirectangularTexture(s,d),t.set(d,y),d.addEventListener("dispose",c),o(y.texture,d.mapping)}else return null}}return d}function a(d){if(d&&d.isTexture){let f=d.mapping,g=f===fl||f===pl,y=f===$n||f===fs;if(g||y){let m=e.get(d),p=m!==void 0?m.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==p)return i===null&&(i=new gs(s)),m=g?i.fromEquirectangular(d,m):i.fromCubemap(d,m),m.texture.pmremVersion=d.pmremVersion,e.set(d,m),m.texture;if(m!==void 0)return m.texture;{let v=d.image;return g&&v&&v.height>0||y&&v&&l(v)?(i===null&&(i=new gs(s)),m=g?i.fromEquirectangular(d):i.fromCubemap(d),m.texture.pmremVersion=d.pmremVersion,e.set(d,m),d.addEventListener("dispose",h),m.texture):null}}}return d}function o(d,f){return f===fl?d.mapping=$n:f===pl&&(d.mapping=fs),d}function l(d){let f=0,g=6;for(let y=0;y<g;y++)d[y]!==void 0&&f++;return f===g}function c(d){let f=d.target;f.removeEventListener("dispose",c);let g=t.get(f);g!==void 0&&(t.delete(f),g.dispose())}function h(d){let f=d.target;f.removeEventListener("dispose",h);let g=e.get(f);g!==void 0&&(e.delete(f),g.dispose())}function u(){t=new WeakMap,e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:n,dispose:u}}function Vy(s){let t={};function e(i){if(t[i]!==void 0)return t[i];let n=s.getExtension(i);return t[i]=n,n}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){let n=e(i);return n===null&&os("WebGLRenderer: "+i+" extension not supported."),n}}}function Wy(s,t,e,i){let n={},r=new WeakMap;function a(u){let d=u.target;d.index!==null&&t.remove(d.index);for(let g in d.attributes)t.remove(d.attributes[g]);d.removeEventListener("dispose",a),delete n[d.id];let f=r.get(d);f&&(t.remove(f),r.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function o(u,d){return n[d.id]===!0||(d.addEventListener("dispose",a),n[d.id]=!0,e.memory.geometries++),d}function l(u){let d=u.attributes;for(let f in d)t.update(d[f],s.ARRAY_BUFFER)}function c(u){let d=[],f=u.index,g=u.attributes.position,y=0;if(g===void 0)return;if(f!==null){let v=f.array;y=f.version;for(let _=0,M=v.length;_<M;_+=3){let S=v[_+0],b=v[_+1],T=v[_+2];d.push(S,b,b,T,T,S)}}else{let v=g.array;y=g.version;for(let _=0,M=v.length/3-1;_<M;_+=3){let S=_+0,b=_+1,T=_+2;d.push(S,b,b,T,T,S)}}let m=new(g.count>=65535?Xr:qr)(d,1);m.version=y;let p=r.get(u);p&&t.remove(p),r.set(u,m)}function h(u){let d=r.get(u);if(d){let f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return r.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function $y(s,t,e){let i;function n(u){i=u}let r,a;function o(u){r=u.type,a=u.bytesPerElement}function l(u,d){s.drawElements(i,d,r,u*a),e.update(d,i,1)}function c(u,d,f){f!==0&&(s.drawElementsInstanced(i,d,r,u*a,f),e.update(d,i,f))}function h(u,d,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,r,u,0,f);let y=0;for(let m=0;m<f;m++)y+=d[m];e.update(y,i,1)}this.setMode=n,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function qy(s){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(e.calls++,a){case s.TRIANGLES:e.triangles+=o*(r/3);break;case s.LINES:e.lines+=o*(r/2);break;case s.LINE_STRIP:e.lines+=o*(r-1);break;case s.LINE_LOOP:e.lines+=o*r;break;case s.POINTS:e.points+=o*r;break;default:Vt("WebGLInfo: Unknown draw mode:",a);break}}function n(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:n,update:i}}function Xy(s,t,e){let i=new WeakMap,n=new Re;function r(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0,d=i.get(o);if(d===void 0||d.count!==u){let w=function(){T.dispose(),i.delete(o),o.removeEventListener("dispose",w)};d!==void 0&&d.texture.dispose();let f=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,y=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],v=o.morphAttributes.color||[],_=0;f===!0&&(_=1),g===!0&&(_=2),y===!0&&(_=3);let M=o.attributes.position.count*_,S=1;M>t.maxTextureSize&&(S=Math.ceil(M/t.maxTextureSize),M=t.maxTextureSize);let b=new Float32Array(M*S*4*u),T=new Gr(b,M,S,u);T.type=Ii,T.needsUpdate=!0;let x=_*4;for(let C=0;C<u;C++){let D=m[C],I=p[C],L=v[C],A=M*S*4*C;for(let P=0;P<D.count;P++){let O=P*x;f===!0&&(n.fromBufferAttribute(D,P),b[A+O+0]=n.x,b[A+O+1]=n.y,b[A+O+2]=n.z,b[A+O+3]=0),g===!0&&(n.fromBufferAttribute(I,P),b[A+O+4]=n.x,b[A+O+5]=n.y,b[A+O+6]=n.z,b[A+O+7]=0),y===!0&&(n.fromBufferAttribute(L,P),b[A+O+8]=n.x,b[A+O+9]=n.y,b[A+O+10]=n.z,b[A+O+11]=L.itemSize===4?n.w:1)}}d={count:u,texture:T,size:new wt(M,S)},i.set(o,d),o.addEventListener("dispose",w)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",a.morphTexture,e);else{let f=0;for(let y=0;y<c.length;y++)f+=c[y];let g=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(s,"morphTargetBaseInfluence",g),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(s,"morphTargetsTextureSize",d.size)}return{update:r}}function Yy(s,t,e,i,n){let r=new WeakMap;function a(c){let h=n.render.frame,u=c.geometry,d=t.get(c,u);if(r.get(d)!==h&&(t.update(d),r.set(d,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(e.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,s.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let f=c.skeleton;r.get(f)!==h&&(f.update(),r.set(f,h))}return d}function o(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),i.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:a,dispose:o}}var Ky={[Dh]:"LINEAR_TONE_MAPPING",[Fh]:"REINHARD_TONE_MAPPING",[Nh]:"CINEON_TONE_MAPPING",[ha]:"ACES_FILMIC_TONE_MAPPING",[kh]:"AGX_TONE_MAPPING",[Oh]:"NEUTRAL_TONE_MAPPING",[Uh]:"CUSTOM_TONE_MAPPING"};function Zy(s,t,e,i,n,r){let a=new ei(t,e,{type:s,depthBuffer:n,stencilBuffer:r,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=new ie;c.setAttribute("position",new Zt([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new Zt([0,2,0,0,2,0],2));let h=new Zo({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),u=new ft(c,h),d=new Vn(-1,1,1,-1,0,1),f=null,g=null,y=!1,m,p=null,v=[],_=!1;this.setSize=function(M,S){a.setSize(M,S),o!==null&&o.setSize(M,S),l!==null&&l.setSize(M,S);for(let b=0;b<v.length;b++){let T=v[b];T.setSize&&T.setSize(M,S)}},this.setEffects=function(M){v=M,_=v.length>0&&v[0].isRenderPass===!0;let S=a.width,b=a.height;v.length>0&&o===null&&(o=new ei(S,b,{type:bi,depthBuffer:!1,stencilBuffer:!1}),l=new ei(S,b,{type:bi,depthBuffer:!1,stencilBuffer:!1}));for(let T=0;T<v.length;T++){let x=v[T];x.setSize&&x.setSize(S,b)}},this.begin=function(M,S){if(y||M.toneMapping===zi&&v.length===0)return!1;if(p=S,S!==null){let b=S.width,T=S.height;(a.width!==b||a.height!==T)&&this.setSize(b,T)}return _===!1&&M.setRenderTarget(a),m=M.toneMapping,M.toneMapping=zi,!0},this.hasRenderPass=function(){return _},this.end=function(M,S){M.toneMapping=m,y=!0;let b=a,T=o;for(let x=0;x<v.length;x++){let w=v[x];w.enabled!==!1&&(w.render(M,T,b,S),w.needsSwap!==!1&&(b=T,T=T===o?l:o))}if(f!==M.outputColorSpace||g!==M.toneMapping){f=M.outputColorSpace,g=M.toneMapping,h.defines={},ae.getTransfer(f)===me&&(h.defines.SRGB_TRANSFER="");let x=Ky[g];x&&(h.defines[x]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=b.texture,M.setRenderTarget(p),M.render(u,d),p=null,y=!1},this.isCompositing=function(){return y},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),c.dispose(),h.dispose()}}var Bf=new ui,hd=new kn(1,1),Hf=new Gr,zf=new Uo,Gf=new Zr,bf=[],_f=[],Mf=new Float32Array(16),Sf=new Float32Array(9),wf=new Float32Array(4);function rr(s,t,e){let i=s[0];if(i<=0||i>0)return s;let n=t*e,r=bf[n];if(r===void 0&&(r=new Float32Array(n),bf[n]=r),t!==0){i.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,s[a].toArray(r,o)}return r}function Ze(s,t){if(s.length!==t.length)return!1;for(let e=0,i=s.length;e<i;e++)if(s[e]!==t[e])return!1;return!0}function Je(s,t){for(let e=0,i=t.length;e<i;e++)s[e]=t[e]}function ac(s,t){let e=_f[t];e===void 0&&(e=new Int32Array(t),_f[t]=e);for(let i=0;i!==t;++i)e[i]=s.allocateTextureUnit();return e}function Jy(s,t){let e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function jy(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ze(e,t))return;s.uniform2fv(this.addr,t),Je(e,t)}}function Qy(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ze(e,t))return;s.uniform3fv(this.addr,t),Je(e,t)}}function tv(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ze(e,t))return;s.uniform4fv(this.addr,t),Je(e,t)}}function ev(s,t){let e=this.cache,i=t.elements;if(i===void 0){if(Ze(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),Je(e,t)}else{if(Ze(e,i))return;wf.set(i),s.uniformMatrix2fv(this.addr,!1,wf),Je(e,i)}}function iv(s,t){let e=this.cache,i=t.elements;if(i===void 0){if(Ze(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),Je(e,t)}else{if(Ze(e,i))return;Sf.set(i),s.uniformMatrix3fv(this.addr,!1,Sf),Je(e,i)}}function nv(s,t){let e=this.cache,i=t.elements;if(i===void 0){if(Ze(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),Je(e,t)}else{if(Ze(e,i))return;Mf.set(i),s.uniformMatrix4fv(this.addr,!1,Mf),Je(e,i)}}function sv(s,t){let e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function rv(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ze(e,t))return;s.uniform2iv(this.addr,t),Je(e,t)}}function av(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ze(e,t))return;s.uniform3iv(this.addr,t),Je(e,t)}}function ov(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ze(e,t))return;s.uniform4iv(this.addr,t),Je(e,t)}}function lv(s,t){let e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function cv(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ze(e,t))return;s.uniform2uiv(this.addr,t),Je(e,t)}}function hv(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ze(e,t))return;s.uniform3uiv(this.addr,t),Je(e,t)}}function dv(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ze(e,t))return;s.uniform4uiv(this.addr,t),Je(e,t)}}function uv(s,t,e){let i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n);let r;this.type===s.SAMPLER_2D_SHADOW?(hd.compareFunction=e.isReversedDepthBuffer()?tc:Ql,r=hd):r=Bf,e.setTexture2D(t||r,n)}function fv(s,t,e){let i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n),e.setTexture3D(t||zf,n)}function pv(s,t,e){let i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n),e.setTextureCube(t||Gf,n)}function mv(s,t,e){let i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n),e.setTexture2DArray(t||Hf,n)}function gv(s){switch(s){case 5126:return Jy;case 35664:return jy;case 35665:return Qy;case 35666:return tv;case 35674:return ev;case 35675:return iv;case 35676:return nv;case 5124:case 35670:return sv;case 35667:case 35671:return rv;case 35668:case 35672:return av;case 35669:case 35673:return ov;case 5125:return lv;case 36294:return cv;case 36295:return hv;case 36296:return dv;case 35678:case 36198:case 36298:case 36306:case 35682:return uv;case 35679:case 36299:case 36307:return fv;case 35680:case 36300:case 36308:case 36293:return pv;case 36289:case 36303:case 36311:case 36292:return mv}}function yv(s,t){s.uniform1fv(this.addr,t)}function vv(s,t){let e=rr(t,this.size,2);s.uniform2fv(this.addr,e)}function xv(s,t){let e=rr(t,this.size,3);s.uniform3fv(this.addr,e)}function bv(s,t){let e=rr(t,this.size,4);s.uniform4fv(this.addr,e)}function _v(s,t){let e=rr(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function Mv(s,t){let e=rr(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function Sv(s,t){let e=rr(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function wv(s,t){s.uniform1iv(this.addr,t)}function Ev(s,t){s.uniform2iv(this.addr,t)}function Tv(s,t){s.uniform3iv(this.addr,t)}function Av(s,t){s.uniform4iv(this.addr,t)}function Rv(s,t){s.uniform1uiv(this.addr,t)}function Cv(s,t){s.uniform2uiv(this.addr,t)}function Pv(s,t){s.uniform3uiv(this.addr,t)}function Iv(s,t){s.uniform4uiv(this.addr,t)}function Lv(s,t,e){let i=this.cache,n=t.length,r=ac(e,n);Ze(i,r)||(s.uniform1iv(this.addr,r),Je(i,r));let a;this.type===s.SAMPLER_2D_SHADOW?a=hd:a=Bf;for(let o=0;o!==n;++o)e.setTexture2D(t[o]||a,r[o])}function Dv(s,t,e){let i=this.cache,n=t.length,r=ac(e,n);Ze(i,r)||(s.uniform1iv(this.addr,r),Je(i,r));for(let a=0;a!==n;++a)e.setTexture3D(t[a]||zf,r[a])}function Fv(s,t,e){let i=this.cache,n=t.length,r=ac(e,n);Ze(i,r)||(s.uniform1iv(this.addr,r),Je(i,r));for(let a=0;a!==n;++a)e.setTextureCube(t[a]||Gf,r[a])}function Nv(s,t,e){let i=this.cache,n=t.length,r=ac(e,n);Ze(i,r)||(s.uniform1iv(this.addr,r),Je(i,r));for(let a=0;a!==n;++a)e.setTexture2DArray(t[a]||Hf,r[a])}function Uv(s){switch(s){case 5126:return yv;case 35664:return vv;case 35665:return xv;case 35666:return bv;case 35674:return _v;case 35675:return Mv;case 35676:return Sv;case 5124:case 35670:return wv;case 35667:case 35671:return Ev;case 35668:case 35672:return Tv;case 35669:case 35673:return Av;case 5125:return Rv;case 36294:return Cv;case 36295:return Pv;case 36296:return Iv;case 35678:case 36198:case 36298:case 36306:case 35682:return Lv;case 35679:case 36299:case 36307:return Dv;case 35680:case 36300:case 36308:case 36293:return Fv;case 36289:case 36303:case 36311:case 36292:return Nv}}var dd=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=gv(e.type)}},ud=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Uv(e.type)}},fd=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){let n=this.seq;for(let r=0,a=n.length;r!==a;++r){let o=n[r];o.setValue(t,e[o.id],i)}}},ld=/(\w+)(\])?(\[|\.)?/g;function Ef(s,t){s.seq.push(t),s.map[t.id]=t}function kv(s,t,e){let i=s.name,n=i.length;for(ld.lastIndex=0;;){let r=ld.exec(i),a=ld.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===n){Ef(e,c===void 0?new dd(o,s,t):new ud(o,s,t));break}else{let u=e.map[o];u===void 0&&(u=new fd(o),Ef(e,u)),e=u}}}var sr=class{constructor(t,e){this.seq=[],this.map={};let i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){let o=t.getActiveUniform(e,a),l=t.getUniformLocation(e,o.name);kv(o,l,this)}let n=[],r=[];for(let a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?n.push(a):r.push(a);n.length>0&&(this.seq=n.concat(r))}setValue(t,e,i,n){let r=this.map[e];r!==void 0&&r.setValue(t,i,n)}setOptional(t,e,i){let n=e[i];n!==void 0&&this.setValue(t,i,n)}static upload(t,e,i,n){for(let r=0,a=e.length;r!==a;++r){let o=e[r],l=i[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,n)}}static seqWithValue(t,e){let i=[];for(let n=0,r=t.length;n!==r;++n){let a=t[n];a.id in e&&i.push(a)}return i}};function Tf(s,t,e){let i=s.createShader(t);return s.shaderSource(i,e),s.compileShader(i),i}var Ov=37297,Bv=0;function Hv(s,t){let e=s.split(`
`),i=[],n=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=n;a<r;a++){let o=a+1;i.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return i.join(`
`)}var Af=new Yt;function zv(s){ae._getMatrix(Af,ae.workingColorSpace,s);let t=`mat3( ${Af.elements.map(e=>e.toFixed(4))} )`;switch(ae.getTransfer(s)){case Br:return[t,"LinearTransferOETF"];case me:return[t,"sRGBTransferOETF"];default:return zt("WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function Rf(s,t,e){let i=s.getShaderParameter(t,s.COMPILE_STATUS),r=(s.getShaderInfoLog(t)||"").trim();if(i&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+Hv(s.getShaderSource(t),o)}else return r}function Gv(s,t){let e=zv(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var Vv={[Dh]:"Linear",[Fh]:"Reinhard",[Nh]:"Cineon",[ha]:"ACESFilmic",[kh]:"AgX",[Oh]:"Neutral",[Uh]:"Custom"};function Wv(s,t){let e=Vv[t];return e===void 0?(zt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var ic=new k;function $v(){ae.getLuminanceCoefficients(ic);let s=ic.x.toFixed(4),t=ic.y.toFixed(4),e=ic.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function qv(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Sa).join(`
`)}function Xv(s){let t=[];for(let e in s){let i=s[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function Yv(s,t){let e={},i=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let n=0;n<i;n++){let r=s.getActiveAttrib(t,n),a=r.name,o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:s.getAttribLocation(t,a),locationSize:o}}return e}function Sa(s){return s!==""}function Cf(s,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Pf(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Kv=/^[ \t]*#include +<([\w\d./]+)>/gm;function pd(s){return s.replace(Kv,Jv)}var Zv=new Map;function Jv(s,t){let e=Qt[t];if(e===void 0){let i=Zv.get(t);if(i!==void 0)e=Qt[i],zt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return pd(e)}var jv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function If(s){return s.replace(jv,Qv)}function Qv(s,t,e,i){let n="";for(let r=parseInt(t);r<parseInt(e);r++)n+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return n}function Lf(s){let t=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}var tx={[ds]:"SHADOWMAP_TYPE_PCF",[Qs]:"SHADOWMAP_TYPE_VSM"};function ex(s){return tx[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var ix={[$n]:"ENVMAP_TYPE_CUBE",[fs]:"ENVMAP_TYPE_CUBE",[da]:"ENVMAP_TYPE_CUBE_UV"};function nx(s){return s.envMap===!1?"ENVMAP_TYPE_CUBE":ix[s.envMapMode]||"ENVMAP_TYPE_CUBE"}var sx={[fs]:"ENVMAP_MODE_REFRACTION"};function rx(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":sx[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}var ax={[ul]:"ENVMAP_BLENDING_MULTIPLY",[Yu]:"ENVMAP_BLENDING_MIX",[Ku]:"ENVMAP_BLENDING_ADD"};function ox(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":ax[s.combine]||"ENVMAP_BLENDING_NONE"}function lx(s){let t=s.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:i,maxMip:e}}function cx(s,t,e,i){let n=s.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,l=ex(e),c=nx(e),h=rx(e),u=ox(e),d=lx(e),f=qv(e),g=Xv(r),y=n.createProgram(),m,p,v=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Sa).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Sa).join(`
`),p.length>0&&(p+=`
`)):(m=[Lf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Sa).join(`
`),p=[Lf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==zi?"#define TONE_MAPPING":"",e.toneMapping!==zi?Qt.tonemapping_pars_fragment:"",e.toneMapping!==zi?Wv("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Qt.colorspace_pars_fragment,Gv("linearToOutputTexel",e.outputColorSpace),$v(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Sa).join(`
`)),a=pd(a),a=Cf(a,e),a=Pf(a,e),o=pd(o),o=Cf(o,e),o=Pf(o,e),a=If(a),o=If(o),e.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===qh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===qh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let _=v+m+a,M=v+p+o,S=Tf(n,n.VERTEX_SHADER,_),b=Tf(n,n.FRAGMENT_SHADER,M);n.attachShader(y,S),n.attachShader(y,b),e.index0AttributeName!==void 0?n.bindAttribLocation(y,0,e.index0AttributeName):e.hasPositionAttribute===!0&&n.bindAttribLocation(y,0,"position"),n.linkProgram(y);function T(D){if(s.debug.checkShaderErrors){let I=n.getProgramInfoLog(y)||"",L=n.getShaderInfoLog(S)||"",A=n.getShaderInfoLog(b)||"",P=I.trim(),O=L.trim(),B=A.trim(),W=!0,F=!0;if(n.getProgramParameter(y,n.LINK_STATUS)===!1)if(W=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(n,y,S,b);else{let H=Rf(n,S,"vertex"),G=Rf(n,b,"fragment");Vt("WebGLProgram: Shader Error "+n.getError()+" - VALIDATE_STATUS "+n.getProgramParameter(y,n.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+P+`
`+H+`
`+G)}else P!==""?zt("WebGLProgram: Program Info Log:",P):(O===""||B==="")&&(F=!1);F&&(D.diagnostics={runnable:W,programLog:P,vertexShader:{log:O,prefix:m},fragmentShader:{log:B,prefix:p}})}n.deleteShader(S),n.deleteShader(b),x=new sr(n,y),w=Yv(n,y)}let x;this.getUniforms=function(){return x===void 0&&T(this),x};let w;this.getAttributes=function(){return w===void 0&&T(this),w};let C=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=n.getProgramParameter(y,Ov)),C},this.destroy=function(){i.releaseStatesOfProgram(this),n.deleteProgram(y),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Bv++,this.cacheKey=t,this.usedTimes=1,this.program=y,this.vertexShader=S,this.fragmentShader=b,this}var hx=0,md=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,i){let n=this._getShaderCacheForMaterial(t);return n.has(e)===!1&&(n.add(e),e.usedTimes++),n.has(i)===!1&&(n.add(i),i.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){let e=this.shaderCache,i=e.get(t);return i===void 0&&(i=new gd(t),e.set(t,i)),i}},gd=class{constructor(t){this.id=hx++,this.code=t,this.usedTimes=0}};function dx(s){return s===Xn||s===ya||s===va}function ux(s,t,e,i,n,r){let a=new Vr,o=new md,l=new Set,c=[],h=new Map,u=i.logarithmicDepthBuffer,d=i.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(x){return l.add(x),x===0?"uv":`uv${x}`}function y(x,w,C,D,I,L){let A=D.fog,P=I.geometry,O=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?D.environment:null,B=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,W=t.get(x.envMap||O,B),F=W&&W.mapping===da?W.image.height:null,H=f[x.type];x.precision!==null&&(d=i.getMaxPrecision(x.precision),d!==x.precision&&zt("WebGLProgram.getParameters:",x.precision,"not supported, using",d,"instead."));let G=P.morphAttributes.position||P.morphAttributes.normal||P.morphAttributes.color,nt=G!==void 0?G.length:0,at=0;P.morphAttributes.position!==void 0&&(at=1),P.morphAttributes.normal!==void 0&&(at=2),P.morphAttributes.color!==void 0&&(at=3);let Mt,gt,Nt,q;if(H){let ye=on[H];Mt=ye.vertexShader,gt=ye.fragmentShader}else{Mt=x.vertexShader,gt=x.fragmentShader;let ye=o.getVertexShaderStage(x),de=o.getFragmentShaderStage(x);o.update(x,ye,de),Nt=ye.id,q=de.id}let j=s.getRenderTarget(),ct=s.state.buffers.depth.getReversed(),Et=I.isInstancedMesh===!0,dt=I.isBatchedMesh===!0,Rt=!!x.map,Ct=!!x.matcap,Pt=!!W,Wt=!!x.aoMap,ne=!!x.lightMap,jt=!!x.bumpMap&&x.wireframe===!1,he=!!x.normalMap,Le=!!x.displacementMap,je=!!x.emissiveMap,Ee=!!x.metalnessMap,De=!!x.roughnessMap,V=x.anisotropy>0,_e=x.clearcoat>0,le=x.dispersion>0,U=x.retroreflectivity>0,E=x.iridescence>0,$=x.sheen>0,K=x.transmission>0,tt=V&&!!x.anisotropyMap,ht=_e&&!!x.clearcoatMap,yt=_e&&!!x.clearcoatNormalMap,et=_e&&!!x.clearcoatRoughnessMap,it=E&&!!x.iridescenceMap,pt=E&&!!x.iridescenceThicknessMap,Ut=$&&!!x.sheenColorMap,xt=$&&!!x.sheenRoughnessMap,vt=!!x.specularMap,Ot=!!x.specularColorMap,Bt=!!x.specularIntensityMap,Xt=K&&!!x.transmissionMap,N=K&&!!x.thicknessMap,lt=!!x.gradientMap,Q=!!x.alphaMap,ot=x.alphaTest>0,ut=!!x.alphaHash,st=!!x.extensions,Dt=zi;x.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(Dt=s.toneMapping);let Lt={shaderID:H,shaderType:x.type,shaderName:x.name,vertexShader:Mt,fragmentShader:gt,defines:x.defines,customVertexShaderID:Nt,customFragmentShaderID:q,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:d,batching:dt,batchingColor:dt&&I._colorsTexture!==null,instancing:Et,instancingColor:Et&&I.instanceColor!==null,instancingMorph:Et&&I.morphTexture!==null,outputColorSpace:j===null?s.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:ae.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:Rt,matcap:Ct,envMap:Pt,envMapMode:Pt&&W.mapping,envMapCubeUVHeight:F,aoMap:Wt,lightMap:ne,bumpMap:jt,normalMap:he,displacementMap:Le,emissiveMap:je,normalMapObjectSpace:he&&x.normalMapType===ju,normalMapTangentSpace:he&&x.normalMapType===xa,packedNormalMap:he&&x.normalMapType===xa&&dx(x.normalMap.format),metalnessMap:Ee,roughnessMap:De,anisotropy:V,anisotropyMap:tt,clearcoat:_e,clearcoatMap:ht,clearcoatNormalMap:yt,clearcoatRoughnessMap:et,dispersion:le,retroreflection:U,iridescence:E,iridescenceMap:it,iridescenceThicknessMap:pt,sheen:$,sheenColorMap:Ut,sheenRoughnessMap:xt,specularMap:vt,specularColorMap:Ot,specularIntensityMap:Bt,transmission:K,transmissionMap:Xt,thicknessMap:N,gradientMap:lt,opaque:x.transparent===!1&&x.blending===Wn&&x.alphaToCoverage===!1,alphaMap:Q,alphaTest:ot,alphaHash:ut,combine:x.combine,mapUv:Rt&&g(x.map.channel),aoMapUv:Wt&&g(x.aoMap.channel),lightMapUv:ne&&g(x.lightMap.channel),bumpMapUv:jt&&g(x.bumpMap.channel),normalMapUv:he&&g(x.normalMap.channel),displacementMapUv:Le&&g(x.displacementMap.channel),emissiveMapUv:je&&g(x.emissiveMap.channel),metalnessMapUv:Ee&&g(x.metalnessMap.channel),roughnessMapUv:De&&g(x.roughnessMap.channel),anisotropyMapUv:tt&&g(x.anisotropyMap.channel),clearcoatMapUv:ht&&g(x.clearcoatMap.channel),clearcoatNormalMapUv:yt&&g(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:et&&g(x.clearcoatRoughnessMap.channel),iridescenceMapUv:it&&g(x.iridescenceMap.channel),iridescenceThicknessMapUv:pt&&g(x.iridescenceThicknessMap.channel),sheenColorMapUv:Ut&&g(x.sheenColorMap.channel),sheenRoughnessMapUv:xt&&g(x.sheenRoughnessMap.channel),specularMapUv:vt&&g(x.specularMap.channel),specularColorMapUv:Ot&&g(x.specularColorMap.channel),specularIntensityMapUv:Bt&&g(x.specularIntensityMap.channel),transmissionMapUv:Xt&&g(x.transmissionMap.channel),thicknessMapUv:N&&g(x.thicknessMap.channel),alphaMapUv:Q&&g(x.alphaMap.channel),vertexTangents:!!P.attributes.tangent&&(he||V),vertexNormals:!!P.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!P.attributes.color&&P.attributes.color.itemSize===4,pointsUvs:I.isPoints===!0&&!!P.attributes.uv&&(Rt||Q),fog:!!A,useFog:x.fog===!0,fogExp2:!!A&&A.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||P.attributes.normal===void 0&&he===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:ct,skinning:I.isSkinnedMesh===!0,hasPositionAttribute:P.attributes.position!==void 0,morphTargets:P.morphAttributes.position!==void 0,morphNormals:P.morphAttributes.normal!==void 0,morphColors:P.morphAttributes.color!==void 0,morphTargetsCount:nt,morphTextureStride:at,numSunLights:w.sun.length,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numSunLightShadows:w.sunShadowMap.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numLightProbeGrids:L.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:s.shadowMap.enabled&&C.length>0,shadowMapType:s.shadowMap.type,toneMapping:Dt,decodeVideoTexture:Rt&&x.map.isVideoTexture===!0&&ae.getTransfer(x.map.colorSpace)===me,decodeVideoTextureEmissive:je&&x.emissiveMap.isVideoTexture===!0&&ae.getTransfer(x.emissiveMap.colorSpace)===me,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Ae,flipSided:x.side===Ke,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:st&&x.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(st&&x.extensions.multiDraw===!0||dt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return Lt.vertexUv1s=l.has(1),Lt.vertexUv2s=l.has(2),Lt.vertexUv3s=l.has(3),l.clear(),Lt}function m(x){let w=[];if(x.shaderID?w.push(x.shaderID):(w.push(x.customVertexShaderID),w.push(x.customFragmentShaderID)),x.defines!==void 0)for(let C in x.defines)w.push(C),w.push(x.defines[C]);return x.isRawShaderMaterial===!1&&(p(w,x),v(w,x),w.push(s.outputColorSpace)),w.push(x.customProgramCacheKey),w.join()}function p(x,w){x.push(w.precision),x.push(w.outputColorSpace),x.push(w.envMapMode),x.push(w.envMapCubeUVHeight),x.push(w.mapUv),x.push(w.alphaMapUv),x.push(w.lightMapUv),x.push(w.aoMapUv),x.push(w.bumpMapUv),x.push(w.normalMapUv),x.push(w.displacementMapUv),x.push(w.emissiveMapUv),x.push(w.metalnessMapUv),x.push(w.roughnessMapUv),x.push(w.anisotropyMapUv),x.push(w.clearcoatMapUv),x.push(w.clearcoatNormalMapUv),x.push(w.clearcoatRoughnessMapUv),x.push(w.iridescenceMapUv),x.push(w.iridescenceThicknessMapUv),x.push(w.sheenColorMapUv),x.push(w.sheenRoughnessMapUv),x.push(w.specularMapUv),x.push(w.specularColorMapUv),x.push(w.specularIntensityMapUv),x.push(w.transmissionMapUv),x.push(w.thicknessMapUv),x.push(w.combine),x.push(w.fogExp2),x.push(w.sizeAttenuation),x.push(w.morphTargetsCount),x.push(w.morphAttributeCount),x.push(w.numSunLights),x.push(w.numDirLights),x.push(w.numPointLights),x.push(w.numSpotLights),x.push(w.numSpotLightMaps),x.push(w.numHemiLights),x.push(w.numRectAreaLights),x.push(w.numSunLightShadows),x.push(w.numDirLightShadows),x.push(w.numPointLightShadows),x.push(w.numSpotLightShadows),x.push(w.numSpotLightShadowsWithMaps),x.push(w.numLightProbes),x.push(w.shadowMapType),x.push(w.toneMapping),x.push(w.numClippingPlanes),x.push(w.numClipIntersection),x.push(w.depthPacking)}function v(x,w){a.disableAll(),w.instancing&&a.enable(0),w.instancingColor&&a.enable(1),w.instancingMorph&&a.enable(2),w.matcap&&a.enable(3),w.envMap&&a.enable(4),w.normalMapObjectSpace&&a.enable(5),w.normalMapTangentSpace&&a.enable(6),w.clearcoat&&a.enable(7),w.iridescence&&a.enable(8),w.alphaTest&&a.enable(9),w.vertexColors&&a.enable(10),w.vertexAlphas&&a.enable(11),w.vertexUv1s&&a.enable(12),w.vertexUv2s&&a.enable(13),w.vertexUv3s&&a.enable(14),w.vertexTangents&&a.enable(15),w.anisotropy&&a.enable(16),w.alphaHash&&a.enable(17),w.batching&&a.enable(18),w.dispersion&&a.enable(19),w.retroreflection&&a.enable(24),w.batchingColor&&a.enable(20),w.gradientMap&&a.enable(21),w.packedNormalMap&&a.enable(22),w.vertexNormals&&a.enable(23),x.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.reversedDepthBuffer&&a.enable(4),w.skinning&&a.enable(5),w.morphTargets&&a.enable(6),w.morphNormals&&a.enable(7),w.morphColors&&a.enable(8),w.premultipliedAlpha&&a.enable(9),w.shadowMapEnabled&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.transmission&&a.enable(15),w.sheen&&a.enable(16),w.opaque&&a.enable(17),w.pointsUvs&&a.enable(18),w.decodeVideoTexture&&a.enable(19),w.decodeVideoTextureEmissive&&a.enable(20),w.alphaToCoverage&&a.enable(21),w.numLightProbeGrids>0&&a.enable(22),w.hasPositionAttribute&&a.enable(23),x.push(a.mask)}function _(x){let w=f[x.type],C;if(w){let D=on[w];C=ff.clone(D.uniforms)}else C=x.uniforms;return C}function M(x,w){let C=h.get(w);return C!==void 0?++C.usedTimes:(C=new cx(s,w,x,n),c.push(C),h.set(w,C)),C}function S(x){if(--x.usedTimes===0){let w=c.indexOf(x);c[w]=c[c.length-1],c.pop(),h.delete(x.cacheKey),x.destroy()}}function b(x){o.remove(x)}function T(){o.dispose()}return{getParameters:y,getProgramCacheKey:m,getUniforms:_,acquireProgram:M,releaseProgram:S,releaseShaderCache:b,programs:c,dispose:T}}function fx(){let s=new WeakMap;function t(a){return s.has(a)}function e(a){let o=s.get(a);return o===void 0&&(o={},s.set(a,o)),o}function i(a){s.delete(a)}function n(a,o,l){s.get(a)[o]=l}function r(){s=new WeakMap}return{has:t,get:e,remove:i,update:n,dispose:r}}function px(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.materialVariant!==t.materialVariant?s.materialVariant-t.materialVariant:s.z!==t.z?s.z-t.z:s.id-t.id}function Df(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function Ff(){let s=[],t=0,e=[],i=[],n=[];function r(){t=0,e.length=0,i.length=0,n.length=0}function a(d){let f=0;return d.isInstancedMesh&&(f+=2),d.isSkinnedMesh&&(f+=1),f}function o(d,f,g,y,m,p){let v=s[t];return v===void 0?(v={id:d.id,object:d,geometry:f,material:g,materialVariant:a(d),groupOrder:y,renderOrder:d.renderOrder,z:m,group:p},s[t]=v):(v.id=d.id,v.object=d,v.geometry=f,v.material=g,v.materialVariant=a(d),v.groupOrder=y,v.renderOrder=d.renderOrder,v.z=m,v.group=p),t++,v}function l(d,f,g,y,m,p,v){v.reversedDepth===!0&&(m=-m);let _=o(d,f,g,y,m,p);g.transmission>0?i.push(_):g.transparent===!0?n.push(_):e.push(_)}function c(d,f,g,y,m,p){let v=o(d,f,g,y,m,p);g.transmission>0?i.unshift(v):g.transparent===!0?n.unshift(v):e.unshift(v)}function h(d,f){e.length>1&&e.sort(d||px),i.length>1&&i.sort(f||Df),n.length>1&&n.sort(f||Df)}function u(){for(let d=t,f=s.length;d<f;d++){let g=s[d];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:e,transmissive:i,transparent:n,init:r,push:l,unshift:c,finish:u,sort:h}}function mx(){let s=new WeakMap;function t(i,n){let r=s.get(i),a;return r===void 0?(a=new Ff,s.set(i,[a])):n>=r.length?(a=new Ff,r.push(a)):a=r[n],a}function e(){s=new WeakMap}return{get:t,dispose:e}}function gx(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new k,color:new rt};break;case"SpotLight":e={position:new k,direction:new k,color:new rt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new k,color:new rt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new k,skyColor:new rt,groundColor:new rt};break;case"RectAreaLight":e={color:new rt,position:new k,halfWidth:new k,halfHeight:new k};break}return s[t.id]=e,e}}}function yx(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new wt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new wt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new wt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}var vx=0;function xx(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function bx(s){let t=new gx,e=yx(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new k);let n=new k,r=new ee,a=new ee;function o(c){let h=0,u=0,d=0;for(let I=0;I<9;I++)i.probe[I].set(0,0,0);let f=0,g=0,y=0,m=0,p=0,v=0,_=0,M=0,S=0,b=0,T=0,x=0,w=0,C=0;c.sort(xx);for(let I=0,L=c.length;I<L;I++){let A=c[I],P=A.color,O=A.intensity,B=A.distance,W=null;if(A.shadow&&A.shadow.map&&(A.shadow.map.texture.format===Xn?W=A.shadow.map.texture:W=A.shadow.map.depthTexture||A.shadow.map.texture),A.isAmbientLight)h+=P.r*O,u+=P.g*O,d+=P.b*O;else if(A.isLightProbe){for(let F=0;F<9;F++)i.probe[F].addScaledVector(A.sh.coefficients[F],O);C++}else if(A.isSunLight){let F=t.get(A);if(F.color.copy(A.color).multiplyScalar(A.intensity),A.castShadow){let H=A.shadow,G=e.get(A);G.shadowIntensity=H.intensity,G.shadowBias=H.bias,G.shadowNormalBias=H.normalBias,G.shadowRadius=H.radius,G.shadowMapSize.copy(H.mapSize).multiply(H.getFrameExtents()),i.sunShadow[g]=G,i.sunShadowMap[g]=W;let nt=H.getViewportCount();for(let at=0;at<nt;at++)i.sunShadowMatrix[y+at]=H.getMatrix(at),i.sunShadowCascade[y+at]=H._cascadeData[at];y+=nt,g++}i.sun[f]=F,f++}else if(A.isDirectionalLight){let F=t.get(A);if(F.color.copy(A.color).multiplyScalar(A.intensity),A.castShadow){let H=A.shadow,G=e.get(A);G.shadowIntensity=H.intensity,G.shadowBias=H.bias,G.shadowNormalBias=H.normalBias,G.shadowRadius=H.radius,G.shadowMapSize=H.mapSize,i.directionalShadow[m]=G,i.directionalShadowMap[m]=W,i.directionalShadowMatrix[m]=A.shadow.matrix,S++}i.directional[m]=F,m++}else if(A.isSpotLight){let F=t.get(A);F.position.setFromMatrixPosition(A.matrixWorld),F.color.copy(P).multiplyScalar(O),F.distance=B,F.coneCos=Math.cos(A.angle),F.penumbraCos=Math.cos(A.angle*(1-A.penumbra)),F.decay=A.decay,i.spot[v]=F;let H=A.shadow;if(A.map&&(i.spotLightMap[x]=A.map,x++,H.updateMatrices(A),A.castShadow&&w++),i.spotLightMatrix[v]=H.matrix,A.castShadow){let G=e.get(A);G.shadowIntensity=H.intensity,G.shadowBias=H.bias,G.shadowNormalBias=H.normalBias,G.shadowRadius=H.radius,G.shadowMapSize=H.mapSize,i.spotShadow[v]=G,i.spotShadowMap[v]=W,T++}v++}else if(A.isRectAreaLight){let F=t.get(A);F.color.copy(P).multiplyScalar(O),F.halfWidth.set(A.width*.5,0,0),F.halfHeight.set(0,A.height*.5,0),i.rectArea[_]=F,_++}else if(A.isPointLight){let F=t.get(A);if(F.color.copy(A.color).multiplyScalar(A.intensity),F.distance=A.distance,F.decay=A.decay,A.castShadow){let H=A.shadow,G=e.get(A);G.shadowIntensity=H.intensity,G.shadowBias=H.bias,G.shadowNormalBias=H.normalBias,G.shadowRadius=H.radius,G.shadowMapSize=H.mapSize,G.shadowCameraNear=H.camera.near,G.shadowCameraFar=H.camera.far,i.pointShadow[p]=G,i.pointShadowMap[p]=W,i.pointShadowMatrix[p]=A.shadow.matrix,b++}i.point[p]=F,p++}else if(A.isHemisphereLight){let F=t.get(A);F.skyColor.copy(A.color).multiplyScalar(O),F.groundColor.copy(A.groundColor).multiplyScalar(O),i.hemi[M]=F,M++}}_>0&&(s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=_t.LTC_FLOAT_1,i.rectAreaLTC2=_t.LTC_FLOAT_2):(i.rectAreaLTC1=_t.LTC_HALF_1,i.rectAreaLTC2=_t.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=u,i.ambient[2]=d;let D=i.hash;(D.sunLength!==f||D.directionalLength!==m||D.pointLength!==p||D.spotLength!==v||D.rectAreaLength!==_||D.hemiLength!==M||D.numSunShadows!==g||D.numDirectionalShadows!==S||D.numPointShadows!==b||D.numSpotShadows!==T||D.numSpotMaps!==x||D.numLightProbes!==C)&&(i.sun.length=f,i.directional.length=m,i.spot.length=v,i.rectArea.length=_,i.point.length=p,i.hemi.length=M,i.sunShadow.length=g,i.sunShadowMap.length=g,i.sunShadowMatrix.length=y,i.sunShadowCascade.length=y,i.directionalShadow.length=S,i.directionalShadowMap.length=S,i.directionalShadowMatrix.length=S,i.pointShadow.length=b,i.pointShadowMap.length=b,i.pointShadowMatrix.length=b,i.spotShadow.length=T,i.spotShadowMap.length=T,i.spotLightMatrix.length=T+x-w,i.spotLightMap.length=x,i.numSpotLightShadowsWithMaps=w,i.numLightProbes=C,D.sunLength=f,D.directionalLength=m,D.pointLength=p,D.spotLength=v,D.rectAreaLength=_,D.hemiLength=M,D.numSunShadows=g,D.numDirectionalShadows=S,D.numPointShadows=b,D.numSpotShadows=T,D.numSpotMaps=x,D.numLightProbes=C,i.version=vx++)}function l(c,h){let u=0,d=0,f=0,g=0,y=0,m=0,p=h.matrixWorldInverse;for(let v=0,_=c.length;v<_;v++){let M=c[v];if(M.isSunLight){let S=i.sun[u];S.direction.setFromMatrixPosition(M.matrixWorld),S.direction.transformDirection(p),u++}else if(M.isDirectionalLight){let S=i.directional[d];S.direction.setFromMatrixPosition(M.matrixWorld),n.setFromMatrixPosition(M.target.matrixWorld),S.direction.sub(n),S.direction.transformDirection(p),d++}else if(M.isSpotLight){let S=i.spot[g];S.position.setFromMatrixPosition(M.matrixWorld),S.position.applyMatrix4(p),S.direction.setFromMatrixPosition(M.matrixWorld),n.setFromMatrixPosition(M.target.matrixWorld),S.direction.sub(n),S.direction.transformDirection(p),g++}else if(M.isRectAreaLight){let S=i.rectArea[y];S.position.setFromMatrixPosition(M.matrixWorld),S.position.applyMatrix4(p),a.identity(),r.copy(M.matrixWorld),r.premultiply(p),a.extractRotation(r),S.halfWidth.set(M.width*.5,0,0),S.halfHeight.set(0,M.height*.5,0),S.halfWidth.applyMatrix4(a),S.halfHeight.applyMatrix4(a),y++}else if(M.isPointLight){let S=i.point[f];S.position.setFromMatrixPosition(M.matrixWorld),S.position.applyMatrix4(p),f++}else if(M.isHemisphereLight){let S=i.hemi[m];S.direction.setFromMatrixPosition(M.matrixWorld),S.direction.transformDirection(p),m++}}}return{setup:o,setupView:l,state:i}}function Nf(s){let t=new bx(s),e=[],i=[],n=[];function r(d){u.camera=d,e.length=0,i.length=0,n.length=0}function a(d){e.push(d)}function o(d){i.push(d)}function l(d){n.push(d)}function c(){t.setup(e)}function h(d){t.setupView(e,d)}let u={lightsArray:e,shadowsArray:i,lightProbeGridArray:n,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:u,setupLights:c,setupLightsView:h,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function _x(s){let t=new WeakMap;function e(n,r=0){let a=t.get(n),o;return a===void 0?(o=new Nf(s),t.set(n,[o])):r>=a.length?(o=new Nf(s),a.push(o)):o=a[r],o}function i(){t=new WeakMap}return{get:e,dispose:i}}var Mx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Sx=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,wx=[new k(1,0,0),new k(-1,0,0),new k(0,1,0),new k(0,-1,0),new k(0,0,1),new k(0,0,-1)],Ex=[new k(0,-1,0),new k(0,-1,0),new k(0,0,1),new k(0,0,-1),new k(0,-1,0),new k(0,-1,0)],Uf=new ee,Ma=new k,cd=new k;function Tx(s,t,e){let i=new Ks,n=new wt,r=new wt,a=new Re,o=new Jo,l=new jo,c={},h=e.maxTextureSize,u={[tn]:Ke,[Ke]:tn,[Ae]:Ae},d=new Ce({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new wt},radius:{value:4}},vertexShader:Mx,fragmentShader:Sx}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let g=new ie;g.setAttribute("position",new qt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new ft(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ds;let p=this.type;this.render=function(b,T,x){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||b.length===0)return;this.type===Cu&&(zt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=ds);let w=s.getRenderTarget(),C=s.getActiveCubeFace(),D=s.getActiveMipmapLevel(),I=s.state;I.setBlending(en),I.buffers.depth.getReversed()===!0?I.buffers.color.setClear(0,0,0,0):I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);let L=p!==this.type;L&&T.traverse(function(A){A.material&&(Array.isArray(A.material)?A.material.forEach(P=>P.needsUpdate=!0):A.material.needsUpdate=!0)});for(let A=0,P=b.length;A<P;A++){let O=b[A],B=O.shadow;if(B===void 0){zt("WebGLShadowMap:",O,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;n.copy(B.mapSize);let W=B.getFrameExtents();n.multiply(W),r.copy(B.mapSize),(n.x>h||n.y>h)&&(n.x>h&&(r.x=Math.floor(h/W.x),n.x=r.x*W.x,B.mapSize.x=r.x),n.y>h&&(r.y=Math.floor(h/W.y),n.y=r.y*W.y,B.mapSize.y=r.y));let F=s.state.buffers.depth.getReversed();if(B.camera._reversedDepth=F,B.map===null||L===!0){if(B.map!==null&&(B.map.depthTexture!==null&&(B.map.depthTexture.dispose(),B.map.depthTexture=null),B.map.dispose()),this.type===Qs){if(O.isPointLight){zt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}B.map=new ei(n.x,n.y,{format:Xn,type:bi,minFilter:Ve,magFilter:Ve,generateMipmaps:!1}),B.map.texture.name=O.name+".shadowMap",B.map.depthTexture=new kn(n.x,n.y,Ii),B.map.depthTexture.name=O.name+".shadowMapDepth",B.map.depthTexture.format=Ki,B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=ti,B.map.depthTexture.magFilter=ti}else O.isPointLight?(B.map=new nc(n.x),B.map.depthTexture=new zo(n.x,Gi)):(B.map=new ei(n.x,n.y),B.map.depthTexture=new kn(n.x,n.y,Gi)),B.map.depthTexture.name=O.name+".shadowMap",B.map.depthTexture.format=Ki,this.type===ds?(B.map.depthTexture.compareFunction=F?tc:Ql,B.map.depthTexture.minFilter=Ve,B.map.depthTexture.magFilter=Ve):(B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=ti,B.map.depthTexture.magFilter=ti);B.camera.updateProjectionMatrix()}B.map.isWebGLCubeRenderTarget!==!0&&(B.map.width!==n.x||B.map.height!==n.y)&&B.map.setSize(n.x,n.y);let H=B.map.isWebGLCubeRenderTarget?6:B.getViewportCount();O.isPointLight!==!0&&B.updateMatrices(O,x);for(let G=0;G<H;G++){let nt=B.getCamera(G);if(O.isPointLight){let at=B.camera,Mt=B.matrix,gt=O.distance||at.far;gt!==at.far&&(at.far=gt,at.updateProjectionMatrix()),Ma.setFromMatrixPosition(O.matrixWorld),at.position.copy(Ma),cd.copy(at.position),cd.add(wx[G]),at.up.copy(Ex[G]),at.lookAt(cd),at.updateMatrixWorld(),Mt.makeTranslation(-Ma.x,-Ma.y,-Ma.z),Uf.multiplyMatrices(at.projectionMatrix,at.matrixWorldInverse),B._frustum.setFromProjectionMatrix(Uf,at.coordinateSystem,at.reversedDepth)}if(B.map.isWebGLCubeRenderTarget)s.setRenderTarget(B.map,G),s.clear();else{G===0&&(s.setRenderTarget(B.map),s.clear());let at=B.getViewport(G);a.set(r.x*at.x,r.y*at.y,r.x*at.z,r.y*at.w),I.viewport(a)}i=B.getFrustum(G),M(T,x,nt,O,this.type)}B.isPointLightShadow!==!0&&this.type===Qs&&v(B,x),B.needsUpdate=!1}p=this.type,m.needsUpdate=!1,s.setRenderTarget(w,C,D)};function v(b,T){let x=t.update(y);d.defines.VSM_SAMPLES!==b.blurSamples&&(d.defines.VSM_SAMPLES=b.blurSamples,f.defines.VSM_SAMPLES=b.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),b.mapPass===null?b.mapPass=new ei(n.x,n.y,{format:Xn,type:bi}):(b.mapPass.width!==b.map.width||b.mapPass.height!==b.map.height)&&b.mapPass.setSize(b.map.width,b.map.height),d.uniforms.shadow_pass.value=b.map.depthTexture,d.uniforms.resolution.value.set(b.map.width,b.map.height),d.uniforms.radius.value=b.radius,s.setRenderTarget(b.mapPass),s.clear(),s.renderBufferDirect(T,null,x,d,y,null),f.uniforms.shadow_pass.value=b.mapPass.texture,f.uniforms.resolution.value.set(b.map.width,b.map.height),f.uniforms.radius.value=b.radius,s.setRenderTarget(b.map),s.clear(),s.renderBufferDirect(T,null,x,f,y,null)}function _(b,T,x,w){let C=null,D=x.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(D!==void 0)C=D;else if(C=x.isPointLight===!0?l:o,s.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0||T.alphaToCoverage===!0){let I=C.uuid,L=T.uuid,A=c[I];A===void 0&&(A={},c[I]=A);let P=A[L];P===void 0&&(P=C.clone(),A[L]=P,T.addEventListener("dispose",S)),C=P}if(C.visible=T.visible,C.wireframe=T.wireframe,w===Qs?C.side=T.shadowSide!==null?T.shadowSide:T.side:C.side=T.shadowSide!==null?T.shadowSide:u[T.side],C.alphaMap=T.alphaMap,C.alphaTest=T.alphaToCoverage===!0?.5:T.alphaTest,C.map=T.map,C.clipShadows=T.clipShadows,C.clippingPlanes=T.clippingPlanes,C.clipIntersection=T.clipIntersection,C.displacementMap=T.displacementMap,C.displacementScale=T.displacementScale,C.displacementBias=T.displacementBias,C.wireframeLinewidth=T.wireframeLinewidth,C.linewidth=T.linewidth,x.isPointLight===!0&&C.isMeshDistanceMaterial===!0){let I=s.properties.get(C);I.light=x}return C}function M(b,T,x,w,C){if(b.visible===!1)return;if(b.layers.test(T.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&C===Qs)&&(!b.frustumCulled||b.intersectsFrustum(i))){b.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,b.matrixWorld);let L=t.update(b),A=b.material;if(Array.isArray(A)){let P=L.groups;for(let O=0,B=P.length;O<B;O++){let W=P[O],F=A[W.materialIndex];if(F&&F.visible){let H=_(b,F,w,C);b.onBeforeShadow(s,b,T,x,L,H,W),s.renderBufferDirect(x,null,L,H,b,W),b.onAfterShadow(s,b,T,x,L,H,W)}}}else if(A.visible){let P=_(b,A,w,C);b.onBeforeShadow(s,b,T,x,L,P,null),s.renderBufferDirect(x,null,L,P,b,null),b.onAfterShadow(s,b,T,x,L,P,null)}}let I=b.children;for(let L=0,A=I.length;L<A;L++)M(I[L],T,x,w,C)}function S(b){b.target.removeEventListener("dispose",S);for(let x in c){let w=c[x],C=b.target.uuid;C in w&&(w[C].dispose(),delete w[C])}}}function Ax(s,t){function e(){let N=!1,lt=new Re,Q=null,ot=new Re(0,0,0,0);return{setMask:function(ut){Q!==ut&&!N&&(s.colorMask(ut,ut,ut,ut),Q=ut)},setLocked:function(ut){N=ut},setClear:function(ut,st,Dt,Lt,ye){ye===!0&&(ut*=Lt,st*=Lt,Dt*=Lt),lt.set(ut,st,Dt,Lt),ot.equals(lt)===!1&&(s.clearColor(ut,st,Dt,Lt),ot.copy(lt))},reset:function(){N=!1,Q=null,ot.set(-1,0,0,0)}}}function i(){let N=!1,lt=!1,Q=null,ot=null,ut=null;return{setReversed:function(st){if(lt!==st){let Dt=t.get("EXT_clip_control");st?Dt.clipControlEXT(Dt.LOWER_LEFT_EXT,Dt.ZERO_TO_ONE_EXT):Dt.clipControlEXT(Dt.LOWER_LEFT_EXT,Dt.NEGATIVE_ONE_TO_ONE_EXT),lt=st;let Lt=ut;ut=null,this.setClear(Lt)}},getReversed:function(){return lt},setTest:function(st){st?j(s.DEPTH_TEST):ct(s.DEPTH_TEST)},setMask:function(st){Q!==st&&!N&&(s.depthMask(st),Q=st)},setFunc:function(st){if(lt&&(st=df[st]),ot!==st){switch(st){case Eo:s.depthFunc(s.NEVER);break;case To:s.depthFunc(s.ALWAYS);break;case Ao:s.depthFunc(s.LESS);break;case zs:s.depthFunc(s.LEQUAL);break;case Ro:s.depthFunc(s.EQUAL);break;case Co:s.depthFunc(s.GEQUAL);break;case Po:s.depthFunc(s.GREATER);break;case Io:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}ot=st}},setLocked:function(st){N=st},setClear:function(st){ut!==st&&(ut=st,lt&&(st=1-st),s.clearDepth(st))},reset:function(){N=!1,Q=null,ot=null,ut=null,lt=!1}}}function n(){let N=!1,lt=null,Q=null,ot=null,ut=null,st=null,Dt=null,Lt=null,ye=null;return{setTest:function(de){N||(de?j(s.STENCIL_TEST):ct(s.STENCIL_TEST))},setMask:function(de){lt!==de&&!N&&(s.stencilMask(de),lt=de)},setFunc:function(de,ke,Si){(Q!==de||ot!==ke||ut!==Si)&&(s.stencilFunc(de,ke,Si),Q=de,ot=ke,ut=Si)},setOp:function(de,ke,Si){(st!==de||Dt!==ke||Lt!==Si)&&(s.stencilOp(de,ke,Si),st=de,Dt=ke,Lt=Si)},setLocked:function(de){N=de},setClear:function(de){ye!==de&&(s.clearStencil(de),ye=de)},reset:function(){N=!1,lt=null,Q=null,ot=null,ut=null,st=null,Dt=null,Lt=null,ye=null}}}let r=new e,a=new i,o=new n,l=new WeakMap,c=new WeakMap,h={},u={},d={},f=new WeakMap,g=[],y=null,m=!1,p=null,v=null,_=null,M=null,S=null,b=null,T=null,x=new rt(0,0,0),w=0,C=!1,D=null,I=null,L=null,A=null,P=null,O=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS),B=!1,W=0,F=s.getParameter(s.VERSION);F.indexOf("WebGL")!==-1?(W=parseFloat(/^WebGL (\d)/.exec(F)[1]),B=W>=1):F.indexOf("OpenGL ES")!==-1&&(W=parseFloat(/^OpenGL ES (\d)/.exec(F)[1]),B=W>=2);let H=null,G={},nt=s.getParameter(s.SCISSOR_BOX),at=s.getParameter(s.VIEWPORT),Mt=new Re().fromArray(nt),gt=new Re().fromArray(at);function Nt(N,lt,Q,ot){let ut=new Uint8Array(4),st=s.createTexture();s.bindTexture(N,st),s.texParameteri(N,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(N,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Dt=0;Dt<Q;Dt++)N===s.TEXTURE_3D||N===s.TEXTURE_2D_ARRAY?s.texImage3D(lt,0,s.RGBA,1,1,ot,0,s.RGBA,s.UNSIGNED_BYTE,ut):s.texImage2D(lt+Dt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,ut);return st}let q={};q[s.TEXTURE_2D]=Nt(s.TEXTURE_2D,s.TEXTURE_2D,1),q[s.TEXTURE_CUBE_MAP]=Nt(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),q[s.TEXTURE_2D_ARRAY]=Nt(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),q[s.TEXTURE_3D]=Nt(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),j(s.DEPTH_TEST),a.setFunc(zs),jt(!1),he(Rh),j(s.CULL_FACE),Wt(en);function j(N){h[N]!==!0&&(s.enable(N),h[N]=!0)}function ct(N){h[N]!==!1&&(s.disable(N),h[N]=!1)}function Et(N,lt){return d[N]!==lt?(s.bindFramebuffer(N,lt),d[N]=lt,N===s.DRAW_FRAMEBUFFER&&(d[s.FRAMEBUFFER]=lt),N===s.FRAMEBUFFER&&(d[s.DRAW_FRAMEBUFFER]=lt),!0):!1}function dt(N,lt){let Q=g,ot=!1;if(N){Q=f.get(lt),Q===void 0&&(Q=[],f.set(lt,Q));let ut=N.textures;if(Q.length!==ut.length||Q[0]!==s.COLOR_ATTACHMENT0){for(let st=0,Dt=ut.length;st<Dt;st++)Q[st]=s.COLOR_ATTACHMENT0+st;Q.length=ut.length,ot=!0}}else Q[0]!==s.BACK&&(Q[0]=s.BACK,ot=!0);ot&&s.drawBuffers(Q)}function Rt(N){return y!==N?(s.useProgram(N),y=N,!0):!1}let Ct={[us]:s.FUNC_ADD,[Iu]:s.FUNC_SUBTRACT,[Lu]:s.FUNC_REVERSE_SUBTRACT};Ct[Du]=s.MIN,Ct[Fu]=s.MAX;let Pt={[Nu]:s.ZERO,[Uu]:s.ONE,[ku]:s.SRC_COLOR,[Ih]:s.SRC_ALPHA,[Vu]:s.SRC_ALPHA_SATURATE,[zu]:s.DST_COLOR,[Bu]:s.DST_ALPHA,[Ou]:s.ONE_MINUS_SRC_COLOR,[Lh]:s.ONE_MINUS_SRC_ALPHA,[Gu]:s.ONE_MINUS_DST_COLOR,[Hu]:s.ONE_MINUS_DST_ALPHA,[Wu]:s.CONSTANT_COLOR,[$u]:s.ONE_MINUS_CONSTANT_COLOR,[qu]:s.CONSTANT_ALPHA,[Xu]:s.ONE_MINUS_CONSTANT_ALPHA};function Wt(N,lt,Q,ot,ut,st,Dt,Lt,ye,de){if(N===en){m===!0&&(ct(s.BLEND),m=!1);return}if(m===!1&&(j(s.BLEND),m=!0),N!==Pu){if(N!==p||de!==C){if((v!==us||S!==us)&&(s.blendEquation(s.FUNC_ADD),v=us,S=us),de)switch(N){case Wn:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case nn:s.blendFunc(s.ONE,s.ONE);break;case Ch:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Ph:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:Vt("WebGLState: Invalid blending: ",N);break}else switch(N){case Wn:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case nn:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case Ch:Vt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Ph:Vt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Vt("WebGLState: Invalid blending: ",N);break}_=null,M=null,b=null,T=null,x.set(0,0,0),w=0,p=N,C=de}return}ut=ut||lt,st=st||Q,Dt=Dt||ot,(lt!==v||ut!==S)&&(s.blendEquationSeparate(Ct[lt],Ct[ut]),v=lt,S=ut),(Q!==_||ot!==M||st!==b||Dt!==T)&&(s.blendFuncSeparate(Pt[Q],Pt[ot],Pt[st],Pt[Dt]),_=Q,M=ot,b=st,T=Dt),(Lt.equals(x)===!1||ye!==w)&&(s.blendColor(Lt.r,Lt.g,Lt.b,ye),x.copy(Lt),w=ye),p=N,C=!1}function ne(N,lt){N.side===Ae?ct(s.CULL_FACE):j(s.CULL_FACE);let Q=N.side===Ke;lt&&(Q=!Q),jt(Q),N.blending===Wn&&N.transparent===!1?Wt(en):Wt(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),a.setFunc(N.depthFunc),a.setTest(N.depthTest),a.setMask(N.depthWrite),r.setMask(N.colorWrite);let ot=N.stencilWrite;o.setTest(ot),ot&&(o.setMask(N.stencilWriteMask),o.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),o.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),je(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?j(s.SAMPLE_ALPHA_TO_COVERAGE):ct(s.SAMPLE_ALPHA_TO_COVERAGE)}function jt(N){D!==N&&(N?s.frontFace(s.CW):s.frontFace(s.CCW),D=N)}function he(N){N!==Au?(j(s.CULL_FACE),N!==I&&(N===Rh?s.cullFace(s.BACK):N===Ru?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):ct(s.CULL_FACE),I=N}function Le(N){N!==L&&(B&&s.lineWidth(N),L=N)}function je(N,lt,Q){N?(j(s.POLYGON_OFFSET_FILL),(A!==lt||P!==Q)&&(A=lt,P=Q,a.getReversed()&&(lt=-lt),s.polygonOffset(lt,Q))):ct(s.POLYGON_OFFSET_FILL)}function Ee(N){N?j(s.SCISSOR_TEST):ct(s.SCISSOR_TEST)}function De(N){N===void 0&&(N=s.TEXTURE0+O-1),H!==N&&(s.activeTexture(N),H=N)}function V(N,lt,Q){Q===void 0&&(H===null?Q=s.TEXTURE0+O-1:Q=H);let ot=G[Q];ot===void 0&&(ot={type:void 0,texture:void 0},G[Q]=ot),(ot.type!==N||ot.texture!==lt)&&(H!==Q&&(s.activeTexture(Q),H=Q),s.bindTexture(N,lt||q[N]),ot.type=N,ot.texture=lt)}function _e(){let N=G[H];N!==void 0&&N.type!==void 0&&(s.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function le(){try{s.compressedTexImage2D(...arguments)}catch(N){Vt("WebGLState:",N)}}function U(){try{s.compressedTexImage3D(...arguments)}catch(N){Vt("WebGLState:",N)}}function E(){try{s.texSubImage2D(...arguments)}catch(N){Vt("WebGLState:",N)}}function $(){try{s.texSubImage3D(...arguments)}catch(N){Vt("WebGLState:",N)}}function K(){try{s.compressedTexSubImage2D(...arguments)}catch(N){Vt("WebGLState:",N)}}function tt(){try{s.compressedTexSubImage3D(...arguments)}catch(N){Vt("WebGLState:",N)}}function ht(){try{s.texStorage2D(...arguments)}catch(N){Vt("WebGLState:",N)}}function yt(){try{s.texStorage3D(...arguments)}catch(N){Vt("WebGLState:",N)}}function et(){try{s.texImage2D(...arguments)}catch(N){Vt("WebGLState:",N)}}function it(){try{s.texImage3D(...arguments)}catch(N){Vt("WebGLState:",N)}}function pt(N){return u[N]!==void 0?u[N]:s.getParameter(N)}function Ut(N,lt){u[N]!==lt&&(s.pixelStorei(N,lt),u[N]=lt)}function xt(N){Mt.equals(N)===!1&&(s.scissor(N.x,N.y,N.z,N.w),Mt.copy(N))}function vt(N){gt.equals(N)===!1&&(s.viewport(N.x,N.y,N.z,N.w),gt.copy(N))}function Ot(N,lt){let Q=c.get(lt);Q===void 0&&(Q=new WeakMap,c.set(lt,Q));let ot=Q.get(N);ot===void 0&&(ot=s.getUniformBlockIndex(lt,N.name),Q.set(N,ot))}function Bt(N,lt){let ot=c.get(lt).get(N);l.get(lt)!==ot&&(s.uniformBlockBinding(lt,ot,N.__bindingPointIndex),l.set(lt,ot))}function Xt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),a.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),h={},u={},H=null,G={},d={},f=new WeakMap,g=[],y=null,m=!1,p=null,v=null,_=null,M=null,S=null,b=null,T=null,x=new rt(0,0,0),w=0,C=!1,D=null,I=null,L=null,A=null,P=null,Mt.set(0,0,s.canvas.width,s.canvas.height),gt.set(0,0,s.canvas.width,s.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:j,disable:ct,bindFramebuffer:Et,drawBuffers:dt,useProgram:Rt,setBlending:Wt,setMaterial:ne,setFlipSided:jt,setCullFace:he,setLineWidth:Le,setPolygonOffset:je,setScissorTest:Ee,activeTexture:De,bindTexture:V,unbindTexture:_e,compressedTexImage2D:le,compressedTexImage3D:U,texImage2D:et,texImage3D:it,pixelStorei:Ut,getParameter:pt,updateUBOMapping:Ot,uniformBlockBinding:Bt,texStorage2D:ht,texStorage3D:yt,texSubImage2D:E,texSubImage3D:$,compressedTexSubImage2D:K,compressedTexSubImage3D:tt,scissor:xt,viewport:vt,reset:Xt}}function Rx(s,t,e,i,n,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new wt,h=new WeakMap,u=new Set,d,f=new WeakMap,g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(U,E){return g?new OffscreenCanvas(U,E):Hr("canvas")}function m(U,E,$){let K=1,tt=le(U);if((tt.width>$||tt.height>$)&&(K=$/Math.max(tt.width,tt.height)),K<1)if(typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&U instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&U instanceof ImageBitmap||typeof VideoFrame<"u"&&U instanceof VideoFrame){let ht=Math.floor(K*tt.width),yt=Math.floor(K*tt.height);d===void 0&&(d=y(ht,yt));let et=E?y(ht,yt):d;return et.width=ht,et.height=yt,et.getContext("2d").drawImage(U,0,0,ht,yt),zt("WebGLRenderer: Texture has been resized from ("+tt.width+"x"+tt.height+") to ("+ht+"x"+yt+")."),et}else return"data"in U&&zt("WebGLRenderer: Image in DataTexture is too big ("+tt.width+"x"+tt.height+")."),U;return U}function p(U){return U.generateMipmaps}function v(U){s.generateMipmap(U)}function _(U){return U.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:U.isWebGL3DRenderTarget?s.TEXTURE_3D:U.isWebGLArrayRenderTarget||U.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function M(U,E,$,K,tt,ht=!1){if(U!==null){if(s[U]!==void 0)return s[U];zt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+U+"'")}let yt;K&&(yt=t.get("EXT_texture_norm16"),yt||zt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let et=E;if(E===s.RED&&($===s.FLOAT&&(et=s.R32F),$===s.HALF_FLOAT&&(et=s.R16F),$===s.UNSIGNED_BYTE&&(et=s.R8),$===s.UNSIGNED_SHORT&&yt&&(et=yt.R16_EXT),$===s.SHORT&&yt&&(et=yt.R16_SNORM_EXT)),E===s.RED_INTEGER&&($===s.UNSIGNED_BYTE&&(et=s.R8UI),$===s.UNSIGNED_SHORT&&(et=s.R16UI),$===s.UNSIGNED_INT&&(et=s.R32UI),$===s.BYTE&&(et=s.R8I),$===s.SHORT&&(et=s.R16I),$===s.INT&&(et=s.R32I)),E===s.RG&&($===s.FLOAT&&(et=s.RG32F),$===s.HALF_FLOAT&&(et=s.RG16F),$===s.UNSIGNED_BYTE&&(et=s.RG8),$===s.UNSIGNED_SHORT&&yt&&(et=yt.RG16_EXT),$===s.SHORT&&yt&&(et=yt.RG16_SNORM_EXT)),E===s.RG_INTEGER&&($===s.UNSIGNED_BYTE&&(et=s.RG8UI),$===s.UNSIGNED_SHORT&&(et=s.RG16UI),$===s.UNSIGNED_INT&&(et=s.RG32UI),$===s.BYTE&&(et=s.RG8I),$===s.SHORT&&(et=s.RG16I),$===s.INT&&(et=s.RG32I)),E===s.RGB_INTEGER&&($===s.UNSIGNED_BYTE&&(et=s.RGB8UI),$===s.UNSIGNED_SHORT&&(et=s.RGB16UI),$===s.UNSIGNED_INT&&(et=s.RGB32UI),$===s.BYTE&&(et=s.RGB8I),$===s.SHORT&&(et=s.RGB16I),$===s.INT&&(et=s.RGB32I)),E===s.RGBA_INTEGER&&($===s.UNSIGNED_BYTE&&(et=s.RGBA8UI),$===s.UNSIGNED_SHORT&&(et=s.RGBA16UI),$===s.UNSIGNED_INT&&(et=s.RGBA32UI),$===s.BYTE&&(et=s.RGBA8I),$===s.SHORT&&(et=s.RGBA16I),$===s.INT&&(et=s.RGBA32I)),E===s.RGB&&($===s.UNSIGNED_SHORT&&yt&&(et=yt.RGB16_EXT),$===s.SHORT&&yt&&(et=yt.RGB16_SNORM_EXT),$===s.UNSIGNED_INT_5_9_9_9_REV&&(et=s.RGB9_E5),$===s.UNSIGNED_INT_10F_11F_11F_REV&&(et=s.R11F_G11F_B10F)),E===s.RGBA){let it=ht?Br:ae.getTransfer(tt);$===s.FLOAT&&(et=s.RGBA32F),$===s.HALF_FLOAT&&(et=s.RGBA16F),$===s.UNSIGNED_BYTE&&(et=it===me?s.SRGB8_ALPHA8:s.RGBA8),$===s.UNSIGNED_SHORT&&yt&&(et=yt.RGBA16_EXT),$===s.SHORT&&yt&&(et=yt.RGBA16_SNORM_EXT),$===s.UNSIGNED_SHORT_4_4_4_4&&(et=s.RGBA4),$===s.UNSIGNED_SHORT_5_5_5_1&&(et=s.RGB5_A1)}return(et===s.R16F||et===s.R32F||et===s.RG16F||et===s.RG32F||et===s.RGBA16F||et===s.RGBA32F)&&t.get("EXT_color_buffer_float"),et}function S(U,E){let $;return U?E===null||E===Gi||E===er?$=s.DEPTH24_STENCIL8:E===Ii?$=s.DEPTH32F_STENCIL8:E===tr&&($=s.DEPTH24_STENCIL8,zt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Gi||E===er?$=s.DEPTH_COMPONENT24:E===Ii?$=s.DEPTH_COMPONENT32F:E===tr&&($=s.DEPTH_COMPONENT16),$}function b(U,E){return p(U)===!0||U.isFramebufferTexture&&U.minFilter!==ti&&U.minFilter!==Ve?Math.log2(Math.max(E.width,E.height))+1:U.mipmaps!==void 0&&U.mipmaps.length>0?U.mipmaps.length:U.isCompressedTexture&&Array.isArray(U.image)?E.mipmaps.length:1}function T(U){let E=U.target;E.removeEventListener("dispose",T),w(E),E.isVideoTexture&&h.delete(E),E.isHTMLTexture&&u.delete(E)}function x(U){let E=U.target;E.removeEventListener("dispose",x),D(E)}function w(U){let E=i.get(U);if(E.__webglInit===void 0)return;let $=U.source,K=f.get($);if(K){let tt=K[E.__cacheKey];tt.usedTimes--,tt.usedTimes===0&&C(U),Object.keys(K).length===0&&f.delete($)}i.remove(U)}function C(U){let E=i.get(U);s.deleteTexture(E.__webglTexture);let $=U.source,K=f.get($);delete K[E.__cacheKey],a.memory.textures--}function D(U){let E=i.get(U);if(U.depthTexture&&(U.depthTexture.dispose(),i.remove(U.depthTexture)),U.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(E.__webglFramebuffer[K]))for(let tt=0;tt<E.__webglFramebuffer[K].length;tt++)s.deleteFramebuffer(E.__webglFramebuffer[K][tt]);else s.deleteFramebuffer(E.__webglFramebuffer[K]);E.__webglDepthbuffer&&s.deleteRenderbuffer(E.__webglDepthbuffer[K])}else{if(Array.isArray(E.__webglFramebuffer))for(let K=0;K<E.__webglFramebuffer.length;K++)s.deleteFramebuffer(E.__webglFramebuffer[K]);else s.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&s.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&s.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let K=0;K<E.__webglColorRenderbuffer.length;K++)E.__webglColorRenderbuffer[K]&&s.deleteRenderbuffer(E.__webglColorRenderbuffer[K]);E.__webglDepthRenderbuffer&&s.deleteRenderbuffer(E.__webglDepthRenderbuffer)}let $=U.textures;for(let K=0,tt=$.length;K<tt;K++){let ht=i.get($[K]);ht.__webglTexture&&(s.deleteTexture(ht.__webglTexture),a.memory.textures--),i.remove($[K])}i.remove(U)}let I=0;function L(){I=0}function A(){return I}function P(U){I=U}function O(){let U=I;return U>=n.maxTextures&&zt("WebGLTextures: Trying to use "+(U+1)+" texture units while this GPU supports only "+n.maxTextures),I+=1,U}function B(U){let E=[];return E.push(U.wrapS),E.push(U.wrapT),E.push(U.wrapR||0),E.push(U.magFilter),E.push(U.minFilter),E.push(U.anisotropy),E.push(U.internalFormat),E.push(U.format),E.push(U.type),E.push(U.generateMipmaps),E.push(U.premultiplyAlpha),E.push(U.flipY),E.push(U.unpackAlignment),E.push(U.colorSpace),E.join()}function W(U,E){let $=i.get(U);if(U.isVideoTexture&&V(U),U.isRenderTargetTexture===!1&&U.isExternalTexture!==!0&&U.version>0&&$.__version!==U.version){let K=U.image;if(K===null)zt("WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)zt("WebGLRenderer: Texture marked for update but image is incomplete");else{ct($,U,E);return}}else U.isExternalTexture&&($.__webglTexture=U.sourceTexture?U.sourceTexture:null);e.bindTexture(s.TEXTURE_2D,$.__webglTexture,s.TEXTURE0+E)}function F(U,E){let $=i.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&$.__version!==U.version){ct($,U,E);return}else U.isExternalTexture&&($.__webglTexture=U.sourceTexture?U.sourceTexture:null);e.bindTexture(s.TEXTURE_2D_ARRAY,$.__webglTexture,s.TEXTURE0+E)}function H(U,E){let $=i.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&$.__version!==U.version){ct($,U,E);return}e.bindTexture(s.TEXTURE_3D,$.__webglTexture,s.TEXTURE0+E)}function G(U,E){let $=i.get(U);if(U.isCubeDepthTexture!==!0&&U.version>0&&$.__version!==U.version){Et($,U,E);return}e.bindTexture(s.TEXTURE_CUBE_MAP,$.__webglTexture,s.TEXTURE0+E)}let nt={[Gs]:s.REPEAT,[Yi]:s.CLAMP_TO_EDGE,[Lo]:s.MIRRORED_REPEAT},at={[ti]:s.NEAREST,[Zu]:s.NEAREST_MIPMAP_NEAREST,[ua]:s.NEAREST_MIPMAP_LINEAR,[Ve]:s.LINEAR,[ml]:s.LINEAR_MIPMAP_NEAREST,[sn]:s.LINEAR_MIPMAP_LINEAR},Mt={[tf]:s.NEVER,[af]:s.ALWAYS,[ef]:s.LESS,[Ql]:s.LEQUAL,[nf]:s.EQUAL,[tc]:s.GEQUAL,[sf]:s.GREATER,[rf]:s.NOTEQUAL};function gt(U,E){if(E.type===Ii&&t.has("OES_texture_float_linear")===!1&&(E.magFilter===Ve||E.magFilter===ml||E.magFilter===ua||E.magFilter===sn||E.minFilter===Ve||E.minFilter===ml||E.minFilter===ua||E.minFilter===sn)&&zt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(U,s.TEXTURE_WRAP_S,nt[E.wrapS]),s.texParameteri(U,s.TEXTURE_WRAP_T,nt[E.wrapT]),(U===s.TEXTURE_3D||U===s.TEXTURE_2D_ARRAY)&&s.texParameteri(U,s.TEXTURE_WRAP_R,nt[E.wrapR]),s.texParameteri(U,s.TEXTURE_MAG_FILTER,at[E.magFilter]),s.texParameteri(U,s.TEXTURE_MIN_FILTER,at[E.minFilter]),E.compareFunction&&(s.texParameteri(U,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(U,s.TEXTURE_COMPARE_FUNC,Mt[E.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===ti||E.minFilter!==ua&&E.minFilter!==sn||E.type===Ii&&t.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||i.get(E).__currentAnisotropy){let $=t.get("EXT_texture_filter_anisotropic");s.texParameterf(U,$.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,n.getMaxAnisotropy())),i.get(E).__currentAnisotropy=E.anisotropy}}}function Nt(U,E){let $=!1;U.__webglInit===void 0&&(U.__webglInit=!0,E.addEventListener("dispose",T));let K=E.source,tt=f.get(K);tt===void 0&&(tt={},f.set(K,tt));let ht=B(E);if(ht!==U.__cacheKey){tt[ht]===void 0&&(tt[ht]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,$=!0),tt[ht].usedTimes++;let yt=tt[U.__cacheKey];yt!==void 0&&(tt[U.__cacheKey].usedTimes--,yt.usedTimes===0&&C(E)),U.__cacheKey=ht,U.__webglTexture=tt[ht].texture}return $}function q(U,E,$){return Math.floor(Math.floor(U/$)/E)}function j(U,E,$,K){let ht=U.updateRanges;if(ht.length===0)e.texSubImage2D(s.TEXTURE_2D,0,0,0,E.width,E.height,$,K,E.data);else{ht.sort((Ut,xt)=>Ut.start-xt.start);let yt=0;for(let Ut=1;Ut<ht.length;Ut++){let xt=ht[yt],vt=ht[Ut],Ot=xt.start+xt.count,Bt=q(vt.start,E.width,4),Xt=q(xt.start,E.width,4);vt.start<=Ot+1&&Bt===Xt&&q(vt.start+vt.count-1,E.width,4)===Bt?xt.count=Math.max(xt.count,vt.start+vt.count-xt.start):(++yt,ht[yt]=vt)}ht.length=yt+1;let et=e.getParameter(s.UNPACK_ROW_LENGTH),it=e.getParameter(s.UNPACK_SKIP_PIXELS),pt=e.getParameter(s.UNPACK_SKIP_ROWS);e.pixelStorei(s.UNPACK_ROW_LENGTH,E.width);for(let Ut=0,xt=ht.length;Ut<xt;Ut++){let vt=ht[Ut],Ot=Math.floor(vt.start/4),Bt=Math.ceil(vt.count/4),Xt=Ot%E.width,N=Math.floor(Ot/E.width),lt=Bt,Q=1;e.pixelStorei(s.UNPACK_SKIP_PIXELS,Xt),e.pixelStorei(s.UNPACK_SKIP_ROWS,N),e.texSubImage2D(s.TEXTURE_2D,0,Xt,N,lt,Q,$,K,E.data)}U.clearUpdateRanges(),e.pixelStorei(s.UNPACK_ROW_LENGTH,et),e.pixelStorei(s.UNPACK_SKIP_PIXELS,it),e.pixelStorei(s.UNPACK_SKIP_ROWS,pt)}}function ct(U,E,$){let K=s.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(K=s.TEXTURE_2D_ARRAY),E.isData3DTexture&&(K=s.TEXTURE_3D);let tt=Nt(U,E),ht=E.source;e.bindTexture(K,U.__webglTexture,s.TEXTURE0+$);let yt=i.get(ht);if(ht.version!==yt.__version||tt===!0){if(e.activeTexture(s.TEXTURE0+$),(typeof ImageBitmap<"u"&&E.image instanceof ImageBitmap)===!1){let Q=ae.getPrimaries(ae.workingColorSpace),ot=E.colorSpace===xn?null:ae.getPrimaries(E.colorSpace),ut=E.colorSpace===xn||Q===ot?s.NONE:s.BROWSER_DEFAULT_WEBGL;e.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,E.flipY),e.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),e.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ut)}e.pixelStorei(s.UNPACK_ALIGNMENT,E.unpackAlignment);let it=m(E.image,!1,n.maxTextureSize);it=_e(E,it);let pt=r.convert(E.format,E.colorSpace),Ut=r.convert(E.type),xt=M(E.internalFormat,pt,Ut,E.normalized,E.colorSpace,E.isVideoTexture);gt(K,E);let vt,Ot=E.mipmaps,Bt=E.isVideoTexture!==!0,Xt=yt.__version===void 0||tt===!0,N=ht.dataReady,lt=b(E,it);if(E.isDepthTexture)xt=S(E.format===qn,E.type),Xt&&(Bt?e.texStorage2D(s.TEXTURE_2D,1,xt,it.width,it.height):e.texImage2D(s.TEXTURE_2D,0,xt,it.width,it.height,0,pt,Ut,null));else if(E.isDataTexture)if(Ot.length>0){Bt&&Xt&&e.texStorage2D(s.TEXTURE_2D,lt,xt,Ot[0].width,Ot[0].height);for(let Q=0,ot=Ot.length;Q<ot;Q++)vt=Ot[Q],Bt?N&&e.texSubImage2D(s.TEXTURE_2D,Q,0,0,vt.width,vt.height,pt,Ut,vt.data):e.texImage2D(s.TEXTURE_2D,Q,xt,vt.width,vt.height,0,pt,Ut,vt.data);E.generateMipmaps=!1}else Bt?(Xt&&e.texStorage2D(s.TEXTURE_2D,lt,xt,it.width,it.height),N&&j(E,it,pt,Ut)):e.texImage2D(s.TEXTURE_2D,0,xt,it.width,it.height,0,pt,Ut,it.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){Bt&&Xt&&e.texStorage3D(s.TEXTURE_2D_ARRAY,lt,xt,Ot[0].width,Ot[0].height,it.depth);for(let Q=0,ot=Ot.length;Q<ot;Q++)if(vt=Ot[Q],E.format!==Li)if(pt!==null)if(Bt){if(N)if(E.layerUpdates.size>0){let ut=jh(vt.width,vt.height,E.format,E.type);for(let st of E.layerUpdates){let Dt=vt.data.subarray(st*ut/vt.data.BYTES_PER_ELEMENT,(st+1)*ut/vt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Q,0,0,st,vt.width,vt.height,1,pt,Dt)}}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Q,0,0,0,vt.width,vt.height,it.depth,pt,vt.data)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,Q,xt,vt.width,vt.height,it.depth,0,vt.data,0,0);else zt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Bt?N&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,Q,0,0,0,vt.width,vt.height,it.depth,pt,Ut,vt.data):e.texImage3D(s.TEXTURE_2D_ARRAY,Q,xt,vt.width,vt.height,it.depth,0,pt,Ut,vt.data);E.layerUpdates.size>0&&E.clearLayerUpdates()}else{Bt&&Xt&&e.texStorage2D(s.TEXTURE_2D,lt,xt,Ot[0].width,Ot[0].height);for(let Q=0,ot=Ot.length;Q<ot;Q++)vt=Ot[Q],E.format!==Li?pt!==null?Bt?N&&e.compressedTexSubImage2D(s.TEXTURE_2D,Q,0,0,vt.width,vt.height,pt,vt.data):e.compressedTexImage2D(s.TEXTURE_2D,Q,xt,vt.width,vt.height,0,vt.data):zt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Bt?N&&e.texSubImage2D(s.TEXTURE_2D,Q,0,0,vt.width,vt.height,pt,Ut,vt.data):e.texImage2D(s.TEXTURE_2D,Q,xt,vt.width,vt.height,0,pt,Ut,vt.data)}else if(E.isDataArrayTexture)if(Bt){if(Xt&&e.texStorage3D(s.TEXTURE_2D_ARRAY,lt,xt,it.width,it.height,it.depth),N)if(E.layerUpdates.size>0){let Q=jh(it.width,it.height,E.format,E.type);for(let ot of E.layerUpdates){let ut=it.data.subarray(ot*Q/it.data.BYTES_PER_ELEMENT,(ot+1)*Q/it.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,ot,it.width,it.height,1,pt,Ut,ut)}E.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,it.width,it.height,it.depth,pt,Ut,it.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,xt,it.width,it.height,it.depth,0,pt,Ut,it.data);else if(E.isData3DTexture)Bt?(Xt&&e.texStorage3D(s.TEXTURE_3D,lt,xt,it.width,it.height,it.depth),N&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,it.width,it.height,it.depth,pt,Ut,it.data)):e.texImage3D(s.TEXTURE_3D,0,xt,it.width,it.height,it.depth,0,pt,Ut,it.data);else if(E.isFramebufferTexture){if(Xt)if(Bt)e.texStorage2D(s.TEXTURE_2D,lt,xt,it.width,it.height);else{let Q=it.width,ot=it.height;for(let ut=0;ut<lt;ut++)e.texImage2D(s.TEXTURE_2D,ut,xt,Q,ot,0,pt,Ut,null),Q>>=1,ot>>=1}}else if(E.isHTMLTexture){if("texElementImage2D"in s){let Q=s.canvas;if(Q.hasAttribute("layoutsubtree")||Q.setAttribute("layoutsubtree","true"),it.parentNode!==Q){Q.appendChild(it),u.add(E),Q.onpaint=ot=>{let ut=ot.changedElements;for(let st of u)ut.includes(st.image)&&(st.needsUpdate=!0)},Q.requestPaint();return}if(s.texElementImage2D.length===3)s.texElementImage2D(s.TEXTURE_2D,s.RGBA8,it);else{let ut=s.RGBA,st=s.RGBA,Dt=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,0,ut,st,Dt,it)}s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if(Ot.length>0){if(Bt&&Xt){let Q=le(Ot[0]);e.texStorage2D(s.TEXTURE_2D,lt,xt,Q.width,Q.height)}for(let Q=0,ot=Ot.length;Q<ot;Q++)vt=Ot[Q],Bt?N&&e.texSubImage2D(s.TEXTURE_2D,Q,0,0,pt,Ut,vt):e.texImage2D(s.TEXTURE_2D,Q,xt,pt,Ut,vt);E.generateMipmaps=!1}else if(Bt){if(Xt){let Q=le(it);e.texStorage2D(s.TEXTURE_2D,lt,xt,Q.width,Q.height)}N&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,pt,Ut,it)}else e.texImage2D(s.TEXTURE_2D,0,xt,pt,Ut,it);p(E)&&v(K),yt.__version=ht.version,E.onUpdate&&E.onUpdate(E)}U.__version=E.version}function Et(U,E,$){if(E.image.length!==6)return;let K=Nt(U,E),tt=E.source;e.bindTexture(s.TEXTURE_CUBE_MAP,U.__webglTexture,s.TEXTURE0+$);let ht=i.get(tt);if(tt.version!==ht.__version||K===!0){e.activeTexture(s.TEXTURE0+$);let yt=ae.getPrimaries(ae.workingColorSpace),et=E.colorSpace===xn?null:ae.getPrimaries(E.colorSpace),it=E.colorSpace===xn||yt===et?s.NONE:s.BROWSER_DEFAULT_WEBGL;e.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,E.flipY),e.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),e.pixelStorei(s.UNPACK_ALIGNMENT,E.unpackAlignment),e.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,it);let pt=E.isCompressedTexture||E.image[0].isCompressedTexture,Ut=E.image[0]&&E.image[0].isDataTexture,xt=[];for(let st=0;st<6;st++)!pt&&!Ut?xt[st]=m(E.image[st],!0,n.maxCubemapSize):xt[st]=Ut?E.image[st].image:E.image[st],xt[st]=_e(E,xt[st]);let vt=xt[0],Ot=r.convert(E.format,E.colorSpace),Bt=r.convert(E.type),Xt=M(E.internalFormat,Ot,Bt,E.normalized,E.colorSpace),N=E.isVideoTexture!==!0,lt=ht.__version===void 0||K===!0,Q=tt.dataReady,ot=b(E,vt);gt(s.TEXTURE_CUBE_MAP,E);let ut;if(pt){N&&lt&&e.texStorage2D(s.TEXTURE_CUBE_MAP,ot,Xt,vt.width,vt.height);for(let st=0;st<6;st++){ut=xt[st].mipmaps;for(let Dt=0;Dt<ut.length;Dt++){let Lt=ut[Dt];E.format!==Li?Ot!==null?N?Q&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+st,Dt,0,0,Lt.width,Lt.height,Ot,Lt.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+st,Dt,Xt,Lt.width,Lt.height,0,Lt.data):zt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):N?Q&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+st,Dt,0,0,Lt.width,Lt.height,Ot,Bt,Lt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+st,Dt,Xt,Lt.width,Lt.height,0,Ot,Bt,Lt.data)}}}else{if(ut=E.mipmaps,N&&lt){ut.length>0&&ot++;let st=le(xt[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,ot,Xt,st.width,st.height)}for(let st=0;st<6;st++)if(Ut){N?Q&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,0,0,xt[st].width,xt[st].height,Ot,Bt,xt[st].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,Xt,xt[st].width,xt[st].height,0,Ot,Bt,xt[st].data);for(let Dt=0;Dt<ut.length;Dt++){let ye=ut[Dt].image[st].image;N?Q&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+st,Dt+1,0,0,ye.width,ye.height,Ot,Bt,ye.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+st,Dt+1,Xt,ye.width,ye.height,0,Ot,Bt,ye.data)}}else{N?Q&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,0,0,Ot,Bt,xt[st]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,Xt,Ot,Bt,xt[st]);for(let Dt=0;Dt<ut.length;Dt++){let Lt=ut[Dt];N?Q&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+st,Dt+1,0,0,Ot,Bt,Lt.image[st]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+st,Dt+1,Xt,Ot,Bt,Lt.image[st])}}}p(E)&&v(s.TEXTURE_CUBE_MAP),ht.__version=tt.version,E.onUpdate&&E.onUpdate(E)}U.__version=E.version}function dt(U,E,$,K,tt,ht){let yt=r.convert($.format,$.colorSpace),et=r.convert($.type),it=M($.internalFormat,yt,et,$.normalized,$.colorSpace),pt=i.get(E),Ut=i.get($);if(Ut.__renderTarget=E,!pt.__hasExternalTextures){let xt=Math.max(1,E.width>>ht),vt=Math.max(1,E.height>>ht);tt===s.TEXTURE_3D||tt===s.TEXTURE_2D_ARRAY?e.texImage3D(tt,ht,it,xt,vt,E.depth,0,yt,et,null):e.texImage2D(tt,ht,it,xt,vt,0,yt,et,null)}e.bindFramebuffer(s.FRAMEBUFFER,U),De(E)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,K,tt,Ut.__webglTexture,0,Ee(E)):(tt===s.TEXTURE_2D||tt>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&tt<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,K,tt,Ut.__webglTexture,ht),e.bindFramebuffer(s.FRAMEBUFFER,null)}function Rt(U,E,$){if(s.bindRenderbuffer(s.RENDERBUFFER,U),E.depthBuffer){let K=E.depthTexture,tt=K&&K.isDepthTexture?K.type:null,ht=S(E.stencilBuffer,tt),yt=E.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;De(E)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Ee(E),ht,E.width,E.height):$?s.renderbufferStorageMultisample(s.RENDERBUFFER,Ee(E),ht,E.width,E.height):s.renderbufferStorage(s.RENDERBUFFER,ht,E.width,E.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,yt,s.RENDERBUFFER,U)}else{let K=E.textures;for(let tt=0;tt<K.length;tt++){let ht=K[tt],yt=r.convert(ht.format,ht.colorSpace),et=r.convert(ht.type),it=M(ht.internalFormat,yt,et,ht.normalized,ht.colorSpace);De(E)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Ee(E),it,E.width,E.height):$?s.renderbufferStorageMultisample(s.RENDERBUFFER,Ee(E),it,E.width,E.height):s.renderbufferStorage(s.RENDERBUFFER,it,E.width,E.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Ct(U,E,$){let K=E.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(s.FRAMEBUFFER,U),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let tt=i.get(E.depthTexture);if(tt.__renderTarget=E,(!tt.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),K){if(tt.__webglInit===void 0&&(tt.__webglInit=!0,E.depthTexture.addEventListener("dispose",T)),tt.__webglTexture===void 0){tt.__webglTexture=s.createTexture(),e.bindTexture(s.TEXTURE_CUBE_MAP,tt.__webglTexture),gt(s.TEXTURE_CUBE_MAP,E.depthTexture);let pt=r.convert(E.depthTexture.format),Ut=r.convert(E.depthTexture.type),xt;E.depthTexture.format===Ki?xt=s.DEPTH_COMPONENT24:E.depthTexture.format===qn&&(xt=s.DEPTH24_STENCIL8);for(let vt=0;vt<6;vt++)s.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,xt,E.width,E.height,0,pt,Ut,null)}}else W(E.depthTexture,0);let ht=tt.__webglTexture,yt=Ee(E),et=K?s.TEXTURE_CUBE_MAP_POSITIVE_X+$:s.TEXTURE_2D,it=E.depthTexture.format===qn?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(E.depthTexture.format===Ki)De(E)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,it,et,ht,0,yt):s.framebufferTexture2D(s.FRAMEBUFFER,it,et,ht,0);else if(E.depthTexture.format===qn)De(E)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,it,et,ht,0,yt):s.framebufferTexture2D(s.FRAMEBUFFER,it,et,ht,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Pt(U){let E=i.get(U),$=U.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==U.depthTexture){let K=U.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),K){let tt=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,K.removeEventListener("dispose",tt)};K.addEventListener("dispose",tt),E.__depthDisposeCallback=tt}E.__boundDepthTexture=K}if(U.depthTexture&&!E.__autoAllocateDepthBuffer)if($)for(let K=0;K<6;K++)Ct(E.__webglFramebuffer[K],U,K);else{let K=U.texture.mipmaps;K&&K.length>0?Ct(E.__webglFramebuffer[0],U,0):Ct(E.__webglFramebuffer,U,0)}else if($){E.__webglDepthbuffer=[];for(let K=0;K<6;K++)if(e.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer[K]),E.__webglDepthbuffer[K]===void 0)E.__webglDepthbuffer[K]=s.createRenderbuffer(),Rt(E.__webglDepthbuffer[K],U,!1);else{let tt=U.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ht=E.__webglDepthbuffer[K];s.bindRenderbuffer(s.RENDERBUFFER,ht),s.framebufferRenderbuffer(s.FRAMEBUFFER,tt,s.RENDERBUFFER,ht)}}else{let K=U.texture.mipmaps;if(K&&K.length>0?e.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer[0]):e.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=s.createRenderbuffer(),Rt(E.__webglDepthbuffer,U,!1);else{let tt=U.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ht=E.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,ht),s.framebufferRenderbuffer(s.FRAMEBUFFER,tt,s.RENDERBUFFER,ht)}}e.bindFramebuffer(s.FRAMEBUFFER,null)}function Wt(U,E,$){let K=i.get(U);E!==void 0&&dt(K.__webglFramebuffer,U,U.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),$!==void 0&&Pt(U)}function ne(U){let E=U.texture,$=i.get(U),K=i.get(E);U.addEventListener("dispose",x);let tt=U.textures,ht=U.isWebGLCubeRenderTarget===!0,yt=tt.length>1;if(yt||(K.__webglTexture===void 0&&(K.__webglTexture=s.createTexture()),K.__version=E.version,a.memory.textures++),ht){$.__webglFramebuffer=[];for(let et=0;et<6;et++)if(E.mipmaps&&E.mipmaps.length>0){$.__webglFramebuffer[et]=[];for(let it=0;it<E.mipmaps.length;it++)$.__webglFramebuffer[et][it]=s.createFramebuffer()}else $.__webglFramebuffer[et]=s.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){$.__webglFramebuffer=[];for(let et=0;et<E.mipmaps.length;et++)$.__webglFramebuffer[et]=s.createFramebuffer()}else $.__webglFramebuffer=s.createFramebuffer();if(yt)for(let et=0,it=tt.length;et<it;et++){let pt=i.get(tt[et]);pt.__webglTexture===void 0&&(pt.__webglTexture=s.createTexture(),a.memory.textures++)}if(U.samples>0&&De(U)===!1){$.__webglMultisampledFramebuffer=s.createFramebuffer(),$.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,$.__webglMultisampledFramebuffer);for(let et=0;et<tt.length;et++){let it=tt[et];$.__webglColorRenderbuffer[et]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,$.__webglColorRenderbuffer[et]);let pt=r.convert(it.format,it.colorSpace),Ut=r.convert(it.type),xt=M(it.internalFormat,pt,Ut,it.normalized,it.colorSpace,U.isXRRenderTarget===!0),vt=Ee(U);s.renderbufferStorageMultisample(s.RENDERBUFFER,vt,xt,U.width,U.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+et,s.RENDERBUFFER,$.__webglColorRenderbuffer[et])}s.bindRenderbuffer(s.RENDERBUFFER,null),U.depthBuffer&&($.__webglDepthRenderbuffer=s.createRenderbuffer(),Rt($.__webglDepthRenderbuffer,U,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(ht){e.bindTexture(s.TEXTURE_CUBE_MAP,K.__webglTexture),gt(s.TEXTURE_CUBE_MAP,E);for(let et=0;et<6;et++)if(E.mipmaps&&E.mipmaps.length>0)for(let it=0;it<E.mipmaps.length;it++)dt($.__webglFramebuffer[et][it],U,E,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+et,it);else dt($.__webglFramebuffer[et],U,E,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+et,0);p(E)&&v(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(yt){for(let et=0,it=tt.length;et<it;et++){let pt=tt[et],Ut=i.get(pt),xt=s.TEXTURE_2D;(U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(xt=U.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(xt,Ut.__webglTexture),gt(xt,pt),dt($.__webglFramebuffer,U,pt,s.COLOR_ATTACHMENT0+et,xt,0),p(pt)&&v(xt)}e.unbindTexture()}else{let et=s.TEXTURE_2D;if((U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(et=U.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(et,K.__webglTexture),gt(et,E),E.mipmaps&&E.mipmaps.length>0)for(let it=0;it<E.mipmaps.length;it++)dt($.__webglFramebuffer[it],U,E,s.COLOR_ATTACHMENT0,et,it);else dt($.__webglFramebuffer,U,E,s.COLOR_ATTACHMENT0,et,0);p(E)&&v(et),e.unbindTexture()}U.depthBuffer&&Pt(U)}function jt(U){let E=U.textures;for(let $=0,K=E.length;$<K;$++){let tt=E[$];if(p(tt)){let ht=_(U),yt=i.get(tt).__webglTexture;e.bindTexture(ht,yt),v(ht),e.unbindTexture()}}}let he=[],Le=[];function je(U){if(U.samples>0){if(De(U)===!1){let E=U.textures,$=U.width,K=U.height,tt=s.COLOR_BUFFER_BIT,ht=U.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,yt=i.get(U),et=E.length>1;if(et)for(let pt=0;pt<E.length;pt++)e.bindFramebuffer(s.FRAMEBUFFER,yt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+pt,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,yt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+pt,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,yt.__webglMultisampledFramebuffer);let it=U.texture.mipmaps;it&&it.length>0?e.bindFramebuffer(s.DRAW_FRAMEBUFFER,yt.__webglFramebuffer[0]):e.bindFramebuffer(s.DRAW_FRAMEBUFFER,yt.__webglFramebuffer);for(let pt=0;pt<E.length;pt++){if(U.resolveDepthBuffer&&(U.depthBuffer&&(tt|=s.DEPTH_BUFFER_BIT),U.stencilBuffer&&U.resolveStencilBuffer&&(tt|=s.STENCIL_BUFFER_BIT)),et){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,yt.__webglColorRenderbuffer[pt]);let Ut=i.get(E[pt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Ut,0)}s.blitFramebuffer(0,0,$,K,0,0,$,K,tt,s.NEAREST),l===!0&&(he.length=0,Le.length=0,he.push(s.COLOR_ATTACHMENT0+pt),U.depthBuffer&&U.storeMultisampledDepthBuffer===!1&&(he.push(ht),Le.push(ht),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,Le)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,he))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),et)for(let pt=0;pt<E.length;pt++){e.bindFramebuffer(s.FRAMEBUFFER,yt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+pt,s.RENDERBUFFER,yt.__webglColorRenderbuffer[pt]);let Ut=i.get(E[pt]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,yt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+pt,s.TEXTURE_2D,Ut,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,yt.__webglMultisampledFramebuffer)}else if(U.depthBuffer&&U.storeMultisampledDepthBuffer===!1&&l){let E=U.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[E])}}}function Ee(U){return Math.min(n.maxSamples,U.samples)}function De(U){let E=i.get(U);return U.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function V(U){let E=a.render.frame;h.get(U)!==E&&(h.set(U,E),U.update())}function _e(U,E){let $=U.colorSpace,K=U.format,tt=U.type;return U.isCompressedTexture===!0||U.isVideoTexture===!0||$!==Or&&$!==xn&&(ae.getTransfer($)===me?(K!==Li||tt!==xi)&&zt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Vt("WebGLTextures: Unsupported texture color space:",$)),E}function le(U){return typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement?(c.width=U.naturalWidth||U.width,c.height=U.naturalHeight||U.height):typeof VideoFrame<"u"&&U instanceof VideoFrame?(c.width=U.displayWidth,c.height=U.displayHeight):(c.width=U.width,c.height=U.height),c}this.allocateTextureUnit=O,this.resetTextureUnits=L,this.getTextureUnits=A,this.setTextureUnits=P,this.setTexture2D=W,this.setTexture2DArray=F,this.setTexture3D=H,this.setTextureCube=G,this.rebindTextures=Wt,this.setupRenderTarget=ne,this.updateRenderTargetMipmap=jt,this.updateMultisampleRenderTarget=je,this.setupDepthRenderbuffer=Pt,this.setupFrameBufferTexture=dt,this.useMultisampledRTT=De,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function Cx(s,t){function e(i,n=xn){let r,a=ae.getTransfer(n);if(i===xi)return s.UNSIGNED_BYTE;if(i===yl)return s.UNSIGNED_SHORT_4_4_4_4;if(i===vl)return s.UNSIGNED_SHORT_5_5_5_1;if(i===Gh)return s.UNSIGNED_INT_5_9_9_9_REV;if(i===Vh)return s.UNSIGNED_INT_10F_11F_11F_REV;if(i===Hh)return s.BYTE;if(i===zh)return s.SHORT;if(i===tr)return s.UNSIGNED_SHORT;if(i===gl)return s.INT;if(i===Gi)return s.UNSIGNED_INT;if(i===Ii)return s.FLOAT;if(i===bi)return s.HALF_FLOAT;if(i===Wh)return s.ALPHA;if(i===$h)return s.RGB;if(i===Li)return s.RGBA;if(i===Ki)return s.DEPTH_COMPONENT;if(i===qn)return s.DEPTH_STENCIL;if(i===xl)return s.RED;if(i===bl)return s.RED_INTEGER;if(i===Xn)return s.RG;if(i===_l)return s.RG_INTEGER;if(i===Ml)return s.RGBA_INTEGER;if(i===fa||i===pa||i===ma||i===ga)if(a===me)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===fa)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===pa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===ma)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===ga)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===fa)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===pa)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===ma)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===ga)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Sl||i===wl||i===El||i===Tl)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Sl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===wl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===El)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Tl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Al||i===Rl||i===Cl||i===Pl||i===Il||i===ya||i===Ll)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Al||i===Rl)return a===me?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Cl)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===Pl)return r.COMPRESSED_R11_EAC;if(i===Il)return r.COMPRESSED_SIGNED_R11_EAC;if(i===ya)return r.COMPRESSED_RG11_EAC;if(i===Ll)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Dl||i===Fl||i===Nl||i===Ul||i===kl||i===Ol||i===Bl||i===Hl||i===zl||i===Gl||i===Vl||i===Wl||i===$l||i===ql)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Dl)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Fl)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Nl)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Ul)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===kl)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Ol)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Bl)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Hl)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===zl)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Gl)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Vl)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Wl)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===$l)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===ql)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Xl||i===Yl||i===Kl)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===Xl)return a===me?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Yl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Kl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Zl||i===Jl||i===va||i===jl)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===Zl)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Jl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===va)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===jl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===er?s.UNSIGNED_INT_24_8:s[i]!==void 0?s[i]:null}return{convert:e}}var Px=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Ix=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,yd=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let i=new Jr(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,i=new Ce({vertexShader:Px,fragmentShader:Ix,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new ft(new we(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},vd=class extends Zi{constructor(t,e){super();let i=this,n=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,g=null,y=typeof XRWebGLBinding<"u",m=new yd,p={},v=e.getContextAttributes(),_=null,M=null,S=[],b=[],T=new wt,x=null,w=null,C=new qe;C.viewport=new Re;let D=new qe;D.viewport=new Re;let I=[C,D],L=new hl,A=null,P=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let j=S[q];return j===void 0&&(j=new qs,S[q]=j),j.getTargetRaySpace()},this.getControllerGrip=function(q){let j=S[q];return j===void 0&&(j=new qs,S[q]=j),j.getGripSpace()},this.getHand=function(q){let j=S[q];return j===void 0&&(j=new qs,S[q]=j),j.getHandSpace()};function O(q){let j=b.indexOf(q.inputSource);if(j===-1)return;let ct=S[j];ct!==void 0&&(ct.update(q.inputSource,q.frame,c||a),ct.dispatchEvent({type:q.type,data:q.inputSource}))}function B(){n.removeEventListener("select",O),n.removeEventListener("selectstart",O),n.removeEventListener("selectend",O),n.removeEventListener("squeeze",O),n.removeEventListener("squeezestart",O),n.removeEventListener("squeezeend",O),n.removeEventListener("end",B),n.removeEventListener("inputsourceschange",W);for(let q=0;q<S.length;q++){let j=b[q];j!==null&&(b[q]=null,S[q].disconnect(j))}A=null,P=null,m.reset();for(let q in p)delete p[q];if(t.setRenderTarget(_),f=null,d=null,u=null,n=null,M=null,Nt.stop(),i.isPresenting=!1,t.setPixelRatio(x),t.setSize(T.width,T.height,!1),w!==null){let q=w.camera;q.fov=w.fov,q.zoom=w.zoom,q.updateProjectionMatrix(),w=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){r=q,i.isPresenting===!0&&zt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){o=q,i.isPresenting===!0&&zt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(q){c=q},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u===null&&y&&(u=new XRWebGLBinding(n,e)),u},this.getFrame=function(){return g},this.getSession=function(){return n},this.setSession=async function(q){if(n=q,n!==null){if(_=t.getRenderTarget(),n.addEventListener("select",O),n.addEventListener("selectstart",O),n.addEventListener("selectend",O),n.addEventListener("squeeze",O),n.addEventListener("squeezestart",O),n.addEventListener("squeezeend",O),n.addEventListener("end",B),n.addEventListener("inputsourceschange",W),v.xrCompatible!==!0&&await e.makeXRCompatible(),x=t.getPixelRatio(),t.getSize(T),y&&"createProjectionLayer"in XRWebGLBinding.prototype){let ct=null,Et=null,dt=null;v.depth&&(dt=v.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,ct=v.stencil?qn:Ki,Et=v.stencil?er:Gi);let Rt={colorFormat:e.RGBA8,depthFormat:dt,scaleFactor:r};u=this.getBinding(),d=u.createProjectionLayer(Rt),n.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),M=new ei(d.textureWidth,d.textureHeight,{format:Li,type:xi,depthTexture:new kn(d.textureWidth,d.textureHeight,Et,void 0,void 0,void 0,void 0,void 0,void 0,ct),stencilBuffer:v.stencil,colorSpace:t.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let ct={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(n,e,ct),n.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),M=new ei(f.framebufferWidth,f.framebufferHeight,{format:Li,type:xi,colorSpace:t.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await n.requestReferenceSpace(o),Nt.setContext(n),Nt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(n!==null)return n.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function W(q){for(let j=0;j<q.removed.length;j++){let ct=q.removed[j],Et=b.indexOf(ct);Et>=0&&(b[Et]=null,S[Et].disconnect(ct))}for(let j=0;j<q.added.length;j++){let ct=q.added[j],Et=b.indexOf(ct);if(Et===-1){for(let Rt=0;Rt<S.length;Rt++)if(Rt>=b.length){b.push(ct),Et=Rt;break}else if(b[Rt]===null){b[Rt]=ct,Et=Rt;break}if(Et===-1)break}let dt=S[Et];dt&&dt.connect(ct)}}let F=new k,H=new k;function G(q,j,ct){F.setFromMatrixPosition(j.matrixWorld),H.setFromMatrixPosition(ct.matrixWorld);let Et=F.distanceTo(H),dt=j.projectionMatrix.elements,Rt=ct.projectionMatrix.elements,Ct=dt[14]/(dt[10]-1),Pt=dt[14]/(dt[10]+1),Wt=(dt[9]+1)/dt[5],ne=(dt[9]-1)/dt[5],jt=(dt[8]-1)/dt[0],he=(Rt[8]+1)/Rt[0],Le=Ct*jt,je=Ct*he,Ee=Et/(-jt+he),De=Ee*-jt;if(j.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(De),q.translateZ(Ee),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),dt[10]===-1)q.projectionMatrix.copy(j.projectionMatrix),q.projectionMatrixInverse.copy(j.projectionMatrixInverse);else{let V=Ct+Ee,_e=Pt+Ee,le=Le-De,U=je+(Et-De),E=Wt*Pt/_e*V,$=ne*Pt/_e*V;q.projectionMatrix.makePerspective(le,U,E,$,V,_e),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function nt(q,j){j===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(j.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(n===null)return;let j=q.near,ct=q.far;m.texture!==null&&(m.depthNear>0&&(j=m.depthNear),m.depthFar>0&&(ct=m.depthFar)),L.near=D.near=C.near=j,L.far=D.far=C.far=ct,(A!==L.near||P!==L.far)&&(n.updateRenderState({depthNear:L.near,depthFar:L.far}),A=L.near,P=L.far),L.layers.mask=q.layers.mask|6,C.layers.mask=L.layers.mask&-5,D.layers.mask=L.layers.mask&-3;let Et=q.parent,dt=L.cameras;nt(L,Et);for(let Rt=0;Rt<dt.length;Rt++)nt(dt[Rt],Et);dt.length===2?G(L,C,D):L.projectionMatrix.copy(C.projectionMatrix),w===null&&q.isPerspectiveCamera&&(w={camera:q,fov:q.fov,zoom:q.zoom}),at(q,L,Et)};function at(q,j,ct){ct===null?q.matrix.copy(j.matrixWorld):(q.matrix.copy(ct.matrixWorld),q.matrix.invert(),q.matrix.multiply(j.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(j.projectionMatrix),q.projectionMatrixInverse.copy(j.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=zr*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return L},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(q){l=q,d!==null&&(d.fixedFoveation=q),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=q)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(L)},this.getCameraTexture=function(q){return p[q]};let Mt=null;function gt(q,j){if(h=j.getViewerPose(c||a),g=j,h!==null){let ct=h.views;f!==null&&(t.setRenderTargetFramebuffer(M,f.framebuffer),t.setRenderTarget(M));let Et=!1;ct.length!==L.cameras.length&&(L.cameras.length=0,Et=!0);for(let Pt=0;Pt<ct.length;Pt++){let Wt=ct[Pt],ne=null;if(f!==null)ne=f.getViewport(Wt);else{let he=u.getViewSubImage(d,Wt);ne=he.viewport,Pt===0&&(t.setRenderTargetTextures(M,he.colorTexture,he.depthStencilTexture),t.setRenderTarget(M))}let jt=I[Pt];jt===void 0&&(jt=new qe,jt.layers.enable(Pt),jt.viewport=new Re,I[Pt]=jt),jt.matrix.fromArray(Wt.transform.matrix),jt.matrix.decompose(jt.position,jt.quaternion,jt.scale),jt.projectionMatrix.fromArray(Wt.projectionMatrix),jt.projectionMatrixInverse.copy(jt.projectionMatrix).invert(),jt.viewport.set(ne.x,ne.y,ne.width,ne.height),Pt===0&&(L.matrix.copy(jt.matrix),L.matrix.decompose(L.position,L.quaternion,L.scale)),Et===!0&&L.cameras.push(jt)}let dt=n.enabledFeatures;if(dt&&dt.includes("depth-sensing")&&n.depthUsage=="gpu-optimized"&&y){u=i.getBinding();let Pt=u.getDepthInformation(ct[0]);Pt&&Pt.isValid&&Pt.texture&&m.init(Pt,n.renderState)}if(dt&&dt.includes("camera-access")&&y){t.state.unbindTexture(),u=i.getBinding();for(let Pt=0;Pt<ct.length;Pt++){let Wt=ct[Pt].camera;if(Wt){let ne=p[Wt];ne||(ne=new Jr,p[Wt]=ne);let jt=u.getCameraImage(Wt);ne.sourceTexture=jt}}}}for(let ct=0;ct<S.length;ct++){let Et=b[ct],dt=S[ct];Et!==null&&dt!==void 0&&dt.update(Et,j,c||a)}Mt&&Mt(q,j),j.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:j}),g=null}let Nt=new kf;Nt.setAnimationLoop(gt),this.setAnimationLoop=function(q){Mt=q},this.dispose=function(){}}},Lx=new ee,Vf=new Yt;Vf.set(-1,0,0,0,1,0,0,0,1);function Dx(s,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,Kh(s)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function n(m,p,v,_,M){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(m,p):p.isMeshLambertMaterial?(r(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,M)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),y(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,v,_):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Ke&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Ke&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let v=t.get(p),_=v.envMap,M=v.envMapRotation;_&&(m.envMap.value=_,m.envMapRotation.value.setFromMatrix4(Lx.makeRotationFromEuler(M)).transpose(),_.isCubeTexture&&_.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(Vf),m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,v,_){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*v,m.scale.value=_*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,v){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Ke&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.retroreflectivity>0&&(m.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function y(m,p){let v=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:n}}function Fx(s,t,e,i){let n={},r={},a=[],o=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(M,S){let b=S.program;i.uniformBlockBinding(M,b)}function c(M,S){let b=n[M.id];b===void 0&&(m(M),b=h(M),n[M.id]=b,M.addEventListener("dispose",v));let T=S.program;i.updateUBOMapping(M,T);let x=t.render.frame;r[M.id]!==x&&(d(M),r[M.id]=x)}function h(M){let S=u();M.__bindingPointIndex=S;let b=s.createBuffer(),T=M.__size,x=M.usage;return s.bindBuffer(s.UNIFORM_BUFFER,b),s.bufferData(s.UNIFORM_BUFFER,T,x),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,S,b),b}function u(){for(let M=0;M<o;M++)if(a.indexOf(M)===-1)return a.push(M),M;return Vt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(M){let S=n[M.id],b=M.uniforms,T=M.__cache;s.bindBuffer(s.UNIFORM_BUFFER,S);for(let x=0,w=b.length;x<w;x++){let C=b[x];if(Array.isArray(C))for(let D=0,I=C.length;D<I;D++)f(C[D],x,D,T);else f(C,x,0,T)}s.bindBuffer(s.UNIFORM_BUFFER,null)}function f(M,S,b,T){if(y(M,S,b,T)===!0){let x=M.__offset,w=M.value;if(Array.isArray(w)){let C=0;for(let D=0;D<w.length;D++){let I=w[D],L=p(I);g(I,M.__data,C),typeof I!="number"&&typeof I!="boolean"&&!I.isMatrix3&&!ArrayBuffer.isView(I)&&(C+=L.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(w,M.__data,0);s.bufferSubData(s.UNIFORM_BUFFER,x,M.__data)}}function g(M,S,b){typeof M=="number"||typeof M=="boolean"?S[0]=M:M.isMatrix3?(S[0]=M.elements[0],S[1]=M.elements[1],S[2]=M.elements[2],S[3]=0,S[4]=M.elements[3],S[5]=M.elements[4],S[6]=M.elements[5],S[7]=0,S[8]=M.elements[6],S[9]=M.elements[7],S[10]=M.elements[8],S[11]=0):ArrayBuffer.isView(M)?S.set(new M.constructor(M.buffer,M.byteOffset,S.length)):M.toArray(S,b)}function y(M,S,b,T){let x=M.value,w=S+"_"+b;if(T[w]===void 0)return typeof x=="number"||typeof x=="boolean"?T[w]=x:ArrayBuffer.isView(x)?T[w]=x.slice():T[w]=x.clone(),!0;{let C=T[w];if(typeof x=="number"||typeof x=="boolean"){if(C!==x)return T[w]=x,!0}else{if(ArrayBuffer.isView(x))return!0;if(C.equals(x)===!1)return C.copy(x),!0}}return!1}function m(M){let S=M.uniforms,b=0,T=16;for(let w=0,C=S.length;w<C;w++){let D=Array.isArray(S[w])?S[w]:[S[w]];for(let I=0,L=D.length;I<L;I++){let A=D[I],P=Array.isArray(A.value)?A.value:[A.value];for(let O=0,B=P.length;O<B;O++){let W=P[O],F=p(W),H=b%T,G=H%F.boundary,nt=H+G;b+=G,nt!==0&&T-nt<F.storage&&(b+=T-nt),A.__data=new Float32Array(F.storage/Float32Array.BYTES_PER_ELEMENT),A.__offset=b,b+=F.storage}}}let x=b%T;return x>0&&(b+=T-x),M.__size=b,M.__cache={},this}function p(M){let S={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(S.boundary=4,S.storage=4):M.isVector2?(S.boundary=8,S.storage=8):M.isVector3||M.isColor?(S.boundary=16,S.storage=12):M.isVector4?(S.boundary=16,S.storage=16):M.isMatrix3?(S.boundary=48,S.storage=48):M.isMatrix4?(S.boundary=64,S.storage=64):M.isTexture?zt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(M)?(S.boundary=16,S.storage=M.byteLength):zt("WebGLRenderer: Unsupported uniform value type.",M),S}function v(M){let S=M.target;S.removeEventListener("dispose",v);let b=a.indexOf(S.__bindingPointIndex);a.splice(b,1),s.deleteBuffer(n[S.id]),delete n[S.id],delete r[S.id]}function _(){for(let M in n)s.deleteBuffer(n[M]);a=[],n={},r={}}return{bind:l,update:c,dispose:_}}var Nx=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),an=null;function Ux(){return an===null&&(an=new Yr(Nx,16,16,Xn,bi),an.name="DFG_LUT",an.minFilter=Ve,an.magFilter=Ve,an.wrapS=Yi,an.wrapT=Yi,an.generateMipmaps=!1,an.needsUpdate=!0),an}var sc=class{constructor(t={}){let{canvas:e=lf(),context:i=null,depth:n=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:f=xi}=t;this.isWebGLRenderer=!0;let g;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=i.getContextAttributes().alpha}else g=a;let y=f,m=new Set([Ml,_l,bl]),p=new Set([xi,Gi,tr,er,yl,vl]),v=new Uint32Array(4),_=new Int32Array(4),M=new k,S=null,b=null,T=[],x=[],w=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=zi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let C=this,D=!1,I=null,L=null,A=null,P=null;this._outputColorSpace=ai;let O=0,B=0,W=null,F=-1,H=null,G=new Re,nt=new Re,at=null,Mt=new rt(0),gt=0,Nt=e.width,q=e.height,j=1,ct=null,Et=null,dt=new Re(0,0,Nt,q),Rt=new Re(0,0,Nt,q),Ct=!1,Pt=new Ks,Wt=!1,ne=!1,jt=new ee,he=new k,Le=new Re,je={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Ee=!1;function De(){return W===null?j:1}let V=i;function _e(R,z){return e.getContext(R,z)}let le,U,E,$,K,tt,ht,yt,et,it,pt,Ut,xt,vt,Ot,Bt,Xt,N,lt,Q,ot,ut,st;try{let R={alpha:!0,depth:n,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"186"}`),e.addEventListener("webglcontextlost",ye,!1),e.addEventListener("webglcontextrestored",de,!1),e.addEventListener("webglcontextcreationerror",ke,!1),V===null){let z="webgl2";if(V=_e(z,R),V===null)throw _e(z)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Dt()}catch(R){throw e.removeEventListener("webglcontextlost",ye,!1),e.removeEventListener("webglcontextrestored",de,!1),e.removeEventListener("webglcontextcreationerror",ke,!1),Vt("WebGLRenderer: "+R.message),R}function Dt(){le=new Vy(V),le.init(),ot=new Cx(V,le),U=new Dy(V,le,t,ot),E=new Ax(V,le),U.reversedDepthBuffer&&d&&E.buffers.depth.setReversed(!0),L=V.createFramebuffer(),A=V.createFramebuffer(),P=V.createFramebuffer(),$=new qy(V),K=new fx,tt=new Rx(V,le,E,K,U,ot,$),ht=new Gy(C),yt=new Ym(V),ut=new Iy(V,yt),et=new Wy(V,yt,$,ut),it=new Yy(V,et,yt,ut,$),N=new Xy(V,U,tt),Ot=new Fy(K),pt=new ux(C,ht,le,U,ut,Ot),Ut=new Dx(C,K),xt=new mx,vt=new _x(le),Xt=new Py(C,ht,E,it,g,l),Bt=new Tx(C,it,U),st=new Fx(V,$,U,E),lt=new Ly(V,le,$),Q=new $y(V,le,$),$.programs=pt.programs,C.capabilities=U,C.extensions=le,C.properties=K,C.renderLists=xt,C.shadowMap=Bt,C.state=E,C.info=$}y!==xi&&(w=new Zy(y,e.width,e.height,o,n,r));let Lt=new vd(C,V);this.xr=Lt,this.getContext=function(){return V},this.getContextAttributes=function(){return V.getContextAttributes()},this.forceContextLoss=function(){let R=le.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){let R=le.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return j},this.setPixelRatio=function(R){R!==void 0&&(j=R,this.setSize(Nt,q,!1))},this.getSize=function(R){return R.set(Nt,q)},this.setSize=function(R,z,J=!0){if(Lt.isPresenting){zt("WebGLRenderer: Can't change size while VR device is presenting.");return}Nt=R,q=z,e.width=Math.floor(R*j),e.height=Math.floor(z*j),J===!0&&(e.style.width=R+"px",e.style.height=z+"px"),w!==null&&w.setSize(e.width,e.height),this.setViewport(0,0,R,z)},this.getDrawingBufferSize=function(R){return R.set(Nt*j,q*j).floor()},this.setDrawingBufferSize=function(R,z,J){Nt=R,q=z,j=J,e.width=Math.floor(R*J),e.height=Math.floor(z*J),this.setViewport(0,0,R,z)},this.setEffects=function(R){if(y===xi){Vt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(R){for(let z=0;z<R.length;z++)if(R[z].isOutputPass===!0){zt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}w.setEffects(R||[])},this.getCurrentViewport=function(R){return R.copy(G)},this.getViewport=function(R){return R.copy(dt)},this.setViewport=function(R,z,J,X){R.isVector4?dt.set(R.x,R.y,R.z,R.w):dt.set(R,z,J,X),E.viewport(G.copy(dt).multiplyScalar(j).round())},this.getScissor=function(R){return R.copy(Rt)},this.setScissor=function(R,z,J,X){R.isVector4?Rt.set(R.x,R.y,R.z,R.w):Rt.set(R,z,J,X),E.scissor(nt.copy(Rt).multiplyScalar(j).round())},this.getScissorTest=function(){return Ct},this.setScissorTest=function(R){E.setScissorTest(Ct=R)},this.setOpaqueSort=function(R){ct=R},this.setTransparentSort=function(R){Et=R},this.getClearColor=function(R){return R.copy(Xt.getClearColor())},this.setClearColor=function(){Xt.setClearColor(...arguments)},this.getClearAlpha=function(){return Xt.getClearAlpha()},this.setClearAlpha=function(){Xt.setClearAlpha(...arguments)},this.clear=function(R=!0,z=!0,J=!0){let X=0;if(R){let Y=!1;if(W!==null){let mt=W.texture.format;Y=m.has(mt)}if(Y){let mt=W.texture.type,St=p.has(mt),bt=Xt.getClearColor(),It=Xt.getClearAlpha(),Ft=bt.r,Jt=bt.g,te=bt.b;St?(v[0]=Ft,v[1]=Jt,v[2]=te,v[3]=It,V.clearBufferuiv(V.COLOR,0,v)):(_[0]=Ft,_[1]=Jt,_[2]=te,_[3]=It,V.clearBufferiv(V.COLOR,0,_))}else X|=V.COLOR_BUFFER_BIT}z&&(X|=V.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),J&&(X|=V.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),X!==0&&V.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(R){R.setRenderer(this),I=R},this.dispose=function(){e.removeEventListener("webglcontextlost",ye,!1),e.removeEventListener("webglcontextrestored",de,!1),e.removeEventListener("webglcontextcreationerror",ke,!1),Xt.dispose(),xt.dispose(),vt.dispose(),K.dispose(),ht.dispose(),it.dispose(),ut.dispose(),st.dispose(),pt.dispose(),Lt.dispose(),Lt.removeEventListener("sessionstart",yi),Lt.removeEventListener("sessionend",Tn),hn.stop()};function ye(R){R.preventDefault(),Xh("WebGLRenderer: Context Lost."),D=!0}function de(){Xh("WebGLRenderer: Context Restored."),D=!1;let R=$.autoReset,z=Bt.enabled,J=Bt.autoUpdate,X=Bt.needsUpdate,Y=Bt.type;Dt(),$.autoReset=R,Bt.enabled=z,Bt.autoUpdate=J,Bt.needsUpdate=X,Bt.type=Y}function ke(R){Vt("WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function Si(R){let z=R.target;z.removeEventListener("dispose",Si),cn(z)}function cn(R){Ya(R),K.remove(R)}function Ya(R){let z=K.get(R).programs;z!==void 0&&(z.forEach(function(J){pt.releaseProgram(J)}),R.isShaderMaterial&&pt.releaseShaderCache(R))}this.renderBufferDirect=function(R,z,J,X,Y,mt){z===null&&(z=je);let St=Y.isMesh&&Y.matrixWorld.determinantAffine()<0,bt=Ja(R,z,J,X,Y);E.setMaterial(X,St);let It=J.index,Ft=1;if(X.wireframe===!0){if(It=et.getWireframeAttribute(J),It===void 0)return;Ft=2}let Jt=J.drawRange,te=J.attributes.position,At=Jt.start*Ft,pe=(Jt.start+Jt.count)*Ft;mt!==null&&(At=Math.max(At,mt.start*Ft),pe=Math.min(pe,(mt.start+mt.count)*Ft)),It!==null?(At=Math.max(At,0),pe=Math.min(pe,It.count)):te!=null&&(At=Math.max(At,0),pe=Math.min(pe,te.count));let Pe=pe-At;if(Pe<0||Pe===1/0)return;ut.setup(Y,X,bt,J,It);let ve,ue=lt;if(It!==null&&(ve=yt.get(It),ue=Q,ue.setIndex(ve)),Y.isMesh)X.wireframe===!0?(E.setLineWidth(X.wireframeLinewidth*De()),ue.setMode(V.LINES)):ue.setMode(V.TRIANGLES);else if(Y.isLine){let oi=X.linewidth;oi===void 0&&(oi=1),E.setLineWidth(oi*De()),Y.isLineSegments?ue.setMode(V.LINES):Y.isLineLoop?ue.setMode(V.LINE_LOOP):ue.setMode(V.LINE_STRIP)}else Y.isPoints?ue.setMode(V.POINTS):Y.isSprite&&ue.setMode(V.TRIANGLES);if(Y.isBatchedMesh)if(le.get("WEBGL_multi_draw"))ue.renderMultiDraw(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount);else{let oi=Y._multiDrawStarts,Tt=Y._multiDrawCounts,di=Y._multiDrawCount,fe=It?yt.get(It).bytesPerElement:1,Ai=K.get(X).currentProgram.getUniforms();for(let qi=0;qi<di;qi++)Ai.setValue(V,"_gl_DrawID",qi),ue.render(oi[qi]/fe,Tt[qi])}else if(Y.isInstancedMesh)ue.renderInstances(At,Pe,Y.count);else if(J.isInstancedBufferGeometry){let oi=J._maxInstanceCount!==void 0?J._maxInstanceCount:1/0,Tt=Math.min(J.instanceCount,oi);ue.renderInstances(At,Pe,Tt)}else ue.render(At,Pe)};function Mr(R,z,J,X){I!==null&&R.isNodeMaterial&&I.setObject(X,R),Wt===!0&&Ot.setState(R,J,!1),R.transparent===!0&&R.side===Ae&&R.forceSinglePass===!1?(R.side=Ke,R.needsUpdate=!0,$i(R,z,X),R.side=tn,R.needsUpdate=!0,$i(R,z,X),R.side=Ae):$i(R,z,X)}this.compile=function(R,z,J=null){J===null&&(J=R),I!==null&&I.renderStart(R,z,J),b=vt.get(J),b.init(z),x.push(b),J.traverseVisible(function(Y){Y.isLight&&Y.layers.test(z.layers)&&(b.pushLight(Y),Y.castShadow&&b.pushShadow(Y))}),R!==J&&R.traverseVisible(function(Y){Y.isLight&&Y.layers.test(z.layers)&&(b.pushLight(Y),Y.castShadow&&b.pushShadow(Y))}),b.setupLights(),I!==null&&I.updateLights(b.state.lightsArray),ne=this.localClippingEnabled,Wt=Ot.init(this.clippingPlanes,ne),Wt===!0&&Ot.setGlobalState(this.clippingPlanes,z),I!==null&&Bt.render(b.state.shadowsArray,J,z);let X=new Set;return R.traverse(function(Y){if(!(Y.isMesh||Y.isPoints||Y.isLine||Y.isSprite))return;let mt=Y.material;if(mt)if(Array.isArray(mt))for(let St=0;St<mt.length;St++){let bt=mt[St];Mr(bt,J,z,Y),X.add(bt)}else Mr(mt,J,z,Y),X.add(mt)}),b=x.pop(),I!==null&&I.renderEnd(),X},this.compileAsync=function(R,z,J=null){let X=this.compile(R,z,J);return new Promise(Y=>{function mt(){if(X.forEach(function(St){let It=K.get(St).currentProgram;(It===void 0||It.isReady())&&X.delete(St)}),X.size===0){Y(R);return}setTimeout(mt,10)}le.get("KHR_parallel_shader_compile")!==null?mt():setTimeout(mt,10)})};let Wi=null;function Wc(R){Wi&&Wi(R)}function yi(){hn.stop()}function Tn(){hn.start()}let hn=new kf;hn.setAnimationLoop(Wc),typeof self<"u"&&hn.setContext(self),this.setAnimationLoop=function(R){Wi=R,Lt.setAnimationLoop(R),R===null?hn.stop():hn.start()},Lt.addEventListener("sessionstart",yi),Lt.addEventListener("sessionend",Tn),this.render=function(R,z){if(z!==void 0&&z.isCamera!==!0){Vt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;I!==null&&I.renderStart(R,z);let J=Lt.enabled===!0&&Lt.isPresenting===!0,X=w!==null&&(W===null||J)&&w.begin(C,W);if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),Lt.enabled===!0&&Lt.isPresenting===!0&&(w===null||w.isCompositing()===!1)&&(Lt.cameraAutoUpdate===!0&&Lt.updateCamera(z),z=Lt.getCamera()),R.isScene===!0&&R.onBeforeRender(C,R,z,W),b=vt.get(R,x.length),b.init(z),b.state.textureUnits=tt.getTextureUnits(),x.push(b),jt.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),Pt.setFromProjectionMatrix(jt,Oi,z.reversedDepth),ne=this.localClippingEnabled,Wt=Ot.init(this.clippingPlanes,ne),S=xt.get(R,T.length),S.init(),T.push(S),Lt.enabled===!0&&Lt.isPresenting===!0){let St=C.xr.getDepthSensingMesh();St!==null&&Sr(St,z,-1/0,C.sortObjects)}Sr(R,z,0,C.sortObjects),S.finish(),I!==null&&I.updateLights(b.state.lightsArray),C.sortObjects===!0&&S.sort(ct,Et),Ee=Lt.enabled===!1||Lt.isPresenting===!1||Lt.hasDepthSensing()===!1,Ee&&Xt.addToRenderList(S,R),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Wt===!0&&Ot.beginShadows();let Y=b.state.shadowsArray;if(Bt.render(Y,R,z),Wt===!0&&Ot.endShadows(),(X&&w.hasRenderPass())===!1){let St=S.opaque,bt=S.transmissive;if(b.setupLights(),z.isArrayCamera){let It=z.cameras;if(bt.length>0)for(let Ft=0,Jt=It.length;Ft<Jt;Ft++){let te=It[Ft];Ka(St,bt,R,te)}Ee&&Xt.render(R);for(let Ft=0,Jt=It.length;Ft<Jt;Ft++){let te=It[Ft];Ms(S,R,te,te.viewport)}}else bt.length>0&&Ka(St,bt,R,z),Ee&&Xt.render(R),Ms(S,R,z)}W!==null&&B===0&&(tt.updateMultisampleRenderTarget(W),tt.updateRenderTargetMipmap(W)),X&&w.end(C),R.isScene===!0&&R.onAfterRender(C,R,z),ut.resetDefaultState(),F=-1,H=null,x.pop(),x.length>0?(b=x[x.length-1],tt.setTextureUnits(b.state.textureUnits),Wt===!0&&Ot.setGlobalState(C.clippingPlanes,b.state.camera)):b=null,T.pop(),T.length>0?S=T[T.length-1]:S=null,I!==null&&I.renderEnd()};function Sr(R,z,J,X){if(R.visible===!1)return;if(R.layers.test(z.layers)){if(R.isGroup)J=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(z);else if(R.isLightProbeGrid)b.pushLightProbeGrid(R);else if(R.isLight)b.pushLight(R),R.castShadow&&b.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||R.intersectsFrustum(Pt)){X&&Le.setFromMatrixPosition(R.matrixWorld).applyMatrix4(jt);let St=it.update(R),bt=R.material;bt.visible&&S.push(R,St,bt,J,Le.z,null,z)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||R.intersectsFrustum(Pt))){let St=it.update(R),bt=R.material;if(X&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),Le.copy(R.boundingSphere.center)):(St.boundingSphere===null&&St.computeBoundingSphere(),Le.copy(St.boundingSphere.center)),Le.applyMatrix4(R.matrixWorld).applyMatrix4(jt)),Array.isArray(bt)){let It=St.groups;for(let Ft=0,Jt=It.length;Ft<Jt;Ft++){let te=It[Ft],At=bt[te.materialIndex];At&&At.visible&&S.push(R,St,At,J,Le.z,te,z)}}else bt.visible&&S.push(R,St,bt,J,Le.z,null,z)}}let mt=R.children;for(let St=0,bt=mt.length;St<bt;St++)Sr(mt[St],z,J,X)}function Ms(R,z,J,X){let{opaque:Y,transmissive:mt,transparent:St}=R;b.setupLightsView(J),Wt===!0&&Ot.setGlobalState(C.clippingPlanes,J),X&&E.viewport(G.copy(X)),Y.length>0&&es(Y,z,J),mt.length>0&&es(mt,z,J),St.length>0&&es(St,z,J),E.buffers.depth.setTest(!0),E.buffers.depth.setMask(!0),E.buffers.color.setMask(!0),E.setPolygonOffset(!1)}function Ka(R,z,J,X){if((J.isScene===!0?J.overrideMaterial:null)!==null)return;if(b.state.transmissionRenderTarget[X.id]===void 0){let At=le.has("EXT_color_buffer_half_float")||le.has("EXT_color_buffer_float");b.state.transmissionRenderTarget[X.id]=new ei(1,1,{generateMipmaps:!0,type:At?bi:xi,minFilter:sn,samples:Math.max(4,U.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:ae.workingColorSpace})}let mt=b.state.transmissionRenderTarget[X.id],St=X.viewport||G;mt.setSize(St.z*C.transmissionResolutionScale,St.w*C.transmissionResolutionScale);let bt=C.getRenderTarget(),It=C.getActiveCubeFace(),Ft=C.getActiveMipmapLevel();C.setRenderTarget(mt),C.getClearColor(Mt),gt=C.getClearAlpha(),gt<1&&C.setClearColor(16777215,.5),C.clear(),Ee&&Xt.render(J);let Jt=C.toneMapping;C.toneMapping=zi;let te=X.viewport;if(X.viewport!==void 0&&(X.viewport=void 0),b.setupLightsView(X),Wt===!0&&Ot.setGlobalState(C.clippingPlanes,X),es(R,J,X),tt.updateMultisampleRenderTarget(mt),tt.updateRenderTargetMipmap(mt),le.has("WEBGL_multisampled_render_to_texture")===!1){let At=!1;for(let pe=0,Pe=z.length;pe<Pe;pe++){let ve=z[pe],{object:ue,geometry:oi,material:Tt,group:di}=ve;if(Tt.side===Ae&&ue.layers.test(X.layers)){let fe=Tt.side;Tt.side=Ke,Tt.needsUpdate=!0,Za(ue,J,X,oi,Tt,di),Tt.side=fe,Tt.needsUpdate=!0,At=!0}}At===!0&&(tt.updateMultisampleRenderTarget(mt),tt.updateRenderTargetMipmap(mt))}C.setRenderTarget(bt,It,Ft),C.setClearColor(Mt,gt),te!==void 0&&(X.viewport=te),C.toneMapping=Jt}function es(R,z,J){let X=z.isScene===!0?z.overrideMaterial:null;for(let Y=0,mt=R.length;Y<mt;Y++){let St=R[Y],{object:bt,geometry:It,group:Ft}=St,Jt=St.material;Jt.allowOverride===!0&&X!==null&&(Jt=X),bt.layers.test(J.layers)&&Za(bt,z,J,It,Jt,Ft)}}function Za(R,z,J,X,Y,mt){I!==null&&Y.isNodeMaterial&&I.setObject(R,Y),R.onBeforeRender(C,z,J,X,Y,mt),R.modelViewMatrix.multiplyMatrices(J.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),Y.onBeforeRender(C,z,J,X,R,mt),Y.transparent===!0&&Y.side===Ae&&Y.forceSinglePass===!1?(Y.side=Ke,Y.needsUpdate=!0,C.renderBufferDirect(J,z,X,Y,R,mt),Y.side=tn,Y.needsUpdate=!0,C.renderBufferDirect(J,z,X,Y,R,mt),Y.side=Ae):C.renderBufferDirect(J,z,X,Y,R,mt),R.onAfterRender(C,z,J,X,Y,mt)}function $i(R,z,J){z.isScene!==!0&&(z=je);let X=K.get(R),Y=b.state.lights,mt=b.state.shadowsArray,St=Y.state.version,bt=pt.getParameters(R,Y.state,mt,z,J,b.state.lightProbeGridArray),It=pt.getProgramCacheKey(bt),Ft=X.programs;X.environment=R.isMeshStandardMaterial||R.isMeshLambertMaterial||R.isMeshPhongMaterial?z.environment:null,X.fog=z.fog;let Jt=R.isMeshStandardMaterial||R.isMeshLambertMaterial&&!R.envMap||R.isMeshPhongMaterial&&!R.envMap;X.envMap=ht.get(R.envMap||X.environment,Jt),X.envMapRotation=X.environment!==null&&R.envMap===null?z.environmentRotation:R.envMapRotation,Ft===void 0&&(R.addEventListener("dispose",Si),Ft=new Map,X.programs=Ft);let te=Ft.get(It);if(te!==void 0){if(X.currentProgram===te&&X.lightsStateVersion===St)return Er(R,bt),te}else bt.uniforms=pt.getUniforms(R),I!==null&&R.isNodeMaterial&&I.build(R,J,bt),R.onBeforeCompile(bt,C),te=pt.acquireProgram(bt,It),Ft.set(It,te),X.uniforms=bt.uniforms;let At=X.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(At.clippingPlanes=Ot.uniform),Er(R,bt),X.needsLights=An(R),X.lightsStateVersion=St,X.needsLights&&(At.ambientLightColor.value=Y.state.ambient,At.lightProbe.value=Y.state.probe,At.sunLights.value=Y.state.sun,At.sunLightShadows.value=Y.state.sunShadow,At.directionalLights.value=Y.state.directional,At.directionalLightShadows.value=Y.state.directionalShadow,At.spotLights.value=Y.state.spot,At.spotLightShadows.value=Y.state.spotShadow,At.rectAreaLights.value=Y.state.rectArea,At.ltc_1.value=Y.state.rectAreaLTC1,At.ltc_2.value=Y.state.rectAreaLTC2,At.pointLights.value=Y.state.point,At.pointLightShadows.value=Y.state.pointShadow,At.hemisphereLights.value=Y.state.hemi,At.sunShadowMatrix.value=Y.state.sunShadowMatrix,At.sunShadowCascade.value=Y.state.sunShadowCascade,At.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,At.spotLightMatrix.value=Y.state.spotLightMatrix,At.spotLightMap.value=Y.state.spotLightMap,At.pointShadowMatrix.value=Y.state.pointShadowMatrix),X.lightProbeGrid=b.state.lightProbeGridArray.length>0,X.currentProgram=te,X.uniformsList=null,te}function wr(R){if(R.uniformsList===null){let z=R.currentProgram.getUniforms();R.uniformsList=sr.seqWithValue(z.seq,R.uniforms)}return R.uniformsList}function Er(R,z){let J=K.get(R);J.outputColorSpace=z.outputColorSpace,J.batching=z.batching,J.batchingColor=z.batchingColor,J.instancing=z.instancing,J.instancingColor=z.instancingColor,J.instancingMorph=z.instancingMorph,J.skinning=z.skinning,J.morphTargets=z.morphTargets,J.morphNormals=z.morphNormals,J.morphColors=z.morphColors,J.morphTargetsCount=z.morphTargetsCount,J.numClippingPlanes=z.numClippingPlanes,J.numIntersection=z.numClipIntersection,J.vertexAlphas=z.vertexAlphas,J.vertexTangents=z.vertexTangents,J.toneMapping=z.toneMapping}function Ss(R,z){if(R.length===0)return null;if(R.length===1)return R[0].texture!==null?R[0]:null;M.setFromMatrixPosition(z.matrixWorld);for(let J=0,X=R.length;J<X;J++){let Y=R[J];if(Y.texture!==null&&Y.boundingBox.containsPoint(M))return Y}return null}function Ja(R,z,J,X,Y){z.isScene!==!0&&(z=je),tt.resetTextureUnits();let mt=z.fog,St=X.isMeshStandardMaterial||X.isMeshLambertMaterial||X.isMeshPhongMaterial?z.environment:null,bt=W===null?C.outputColorSpace:W.isXRRenderTarget===!0?W.texture.colorSpace:ae.workingColorSpace,It=X.isMeshStandardMaterial||X.isMeshLambertMaterial&&!X.envMap||X.isMeshPhongMaterial&&!X.envMap,Ft=ht.get(X.envMap||St,It),Jt=X.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,te=!!J.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),At=!!J.morphAttributes.position,pe=!!J.morphAttributes.normal,Pe=!!J.morphAttributes.color,ve=zi;X.toneMapped&&(W===null||W.isXRRenderTarget===!0)&&(ve=C.toneMapping);let ue=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,oi=ue!==void 0?ue.length:0,Tt=K.get(X),di=b.state.lights;if(Wt===!0&&(ne===!0||R!==H)){let Se=R===H&&X.id===F;Ot.setState(X,R,Se)}let fe=!1;X.version===Tt.__version?(Tt.needsLights&&Tt.lightsStateVersion!==di.state.version||Tt.outputColorSpace!==bt||Y.isBatchedMesh&&Tt.batching===!1||!Y.isBatchedMesh&&Tt.batching===!0||Y.isBatchedMesh&&Tt.batchingColor===!0&&Y._colorsTexture===null||Y.isBatchedMesh&&Tt.batchingColor===!1&&Y._colorsTexture!==null||Y.isInstancedMesh&&Tt.instancing===!1||!Y.isInstancedMesh&&Tt.instancing===!0||Y.isSkinnedMesh&&Tt.skinning===!1||!Y.isSkinnedMesh&&Tt.skinning===!0||Y.isInstancedMesh&&Tt.instancingColor===!0&&Y.instanceColor===null||Y.isInstancedMesh&&Tt.instancingColor===!1&&Y.instanceColor!==null||Y.isInstancedMesh&&Tt.instancingMorph===!0&&Y.morphTexture===null||Y.isInstancedMesh&&Tt.instancingMorph===!1&&Y.morphTexture!==null||Tt.envMap!==Ft||X.fog===!0&&Tt.fog!==mt||Tt.numClippingPlanes!==void 0&&(Tt.numClippingPlanes!==Ot.numPlanes||Tt.numIntersection!==Ot.numIntersection)||Tt.vertexAlphas!==Jt||Tt.vertexTangents!==te||Tt.morphTargets!==At||Tt.morphNormals!==pe||Tt.morphColors!==Pe||Tt.toneMapping!==ve||Tt.morphTargetsCount!==oi||!!Tt.lightProbeGrid!=b.state.lightProbeGridArray.length>0)&&(fe=!0):(fe=!0,Tt.__version=X.version);let Ai=Tt.currentProgram;fe===!0&&(Ai=$i(X,z,Y),I&&X.isNodeMaterial&&I.onUpdateProgram(X,Ai,Tt));let qi=!1,Rn=!1,ws=!1,xe=Ai.getUniforms(),Oe=Tt.uniforms;if(E.useProgram(Ai.program)&&(qi=!0,Rn=!0,ws=!0),X.id!==F&&(F=X.id,Rn=!0),Tt.needsLights){let Se=Ss(b.state.lightProbeGridArray,Y);Tt.lightProbeGrid!==Se&&(Tt.lightProbeGrid=Se,Rn=!0)}if(qi||H!==R){E.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),xe.setValue(V,"projectionMatrix",R.projectionMatrix),xe.setValue(V,"viewMatrix",R.matrixWorldInverse);let Pn=xe.map.cameraPosition;Pn!==void 0&&Pn.setValue(V,he.setFromMatrixPosition(R.matrixWorld)),U.logarithmicDepthBuffer&&xe.setValue(V,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&xe.setValue(V,"isOrthographic",R.isOrthographicCamera===!0),H!==R&&(H=R,Rn=!0,ws=!0)}if(Tt.needsLights&&(di.state.sunShadowMap.length>0&&xe.setValue(V,"sunShadowMap",di.state.sunShadowMap,tt),di.state.directionalShadowMap.length>0&&xe.setValue(V,"directionalShadowMap",di.state.directionalShadowMap,tt),di.state.spotShadowMap.length>0&&xe.setValue(V,"spotShadowMap",di.state.spotShadowMap,tt),di.state.pointShadowMap.length>0&&xe.setValue(V,"pointShadowMap",di.state.pointShadowMap,tt)),Y.isSkinnedMesh){xe.setOptional(V,Y,"bindMatrix"),xe.setOptional(V,Y,"bindMatrixInverse");let Se=Y.skeleton;Se&&(Se.boneTexture===null&&Se.computeBoneTexture(),xe.setValue(V,"boneTexture",Se.boneTexture,tt))}Y.isBatchedMesh&&(xe.setOptional(V,Y,"batchingTexture"),xe.setValue(V,"batchingTexture",Y._matricesTexture,tt),xe.setOptional(V,Y,"batchingIdTexture"),xe.setValue(V,"batchingIdTexture",Y._indirectTexture,tt),xe.setOptional(V,Y,"batchingColorTexture"),Y._colorsTexture!==null&&xe.setValue(V,"batchingColorTexture",Y._colorsTexture,tt));let Cn=J.morphAttributes;if((Cn.position!==void 0||Cn.normal!==void 0||Cn.color!==void 0)&&N.update(Y,J,Ai),(Rn||Tt.receiveShadow!==Y.receiveShadow)&&(Tt.receiveShadow=Y.receiveShadow,xe.setValue(V,"receiveShadow",Y.receiveShadow)),(X.isMeshStandardMaterial||X.isMeshLambertMaterial||X.isMeshPhongMaterial)&&X.envMap===null&&z.environment!==null&&(Oe.envMapIntensity.value=z.environmentIntensity),Oe.dfgLUT!==void 0&&(Oe.dfgLUT.value=Ux()),Rn){if(xe.setValue(V,"toneMappingExposure",C.toneMappingExposure),Tt.needsLights&&Tr(Oe,ws),mt&&X.fog===!0&&Ut.refreshFogUniforms(Oe,mt),Ut.refreshMaterialUniforms(Oe,X,j,q,b.state.transmissionRenderTarget[R.id]),Tt.needsLights&&Tt.lightProbeGrid){let Se=Tt.lightProbeGrid;Oe.probesSH.value=Se.texture,Oe.probesMin.value.copy(Se.boundingBox.min),Oe.probesMax.value.copy(Se.boundingBox.max),Oe.probesResolution.value.copy(Se.resolution)}sr.upload(V,wr(Tt),Oe,tt)}if(X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(sr.upload(V,wr(Tt),Oe,tt),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&xe.setValue(V,"center",Y.center),xe.setValue(V,"modelViewMatrix",Y.modelViewMatrix),xe.setValue(V,"normalMatrix",Y.normalMatrix),xe.setValue(V,"modelMatrix",Y.matrixWorld),X.uniformsGroups!==void 0){let Se=X.uniformsGroups;for(let Pn=0,Es=Se.length;Pn<Es;Pn++){let Yd=Se[Pn];st.update(Yd,Ai),st.bind(Yd,Ai)}}return Ai}function Tr(R,z){R.ambientLightColor.needsUpdate=z,R.lightProbe.needsUpdate=z,R.sunLights.needsUpdate=z,R.sunLightShadows.needsUpdate=z,R.directionalLights.needsUpdate=z,R.directionalLightShadows.needsUpdate=z,R.pointLights.needsUpdate=z,R.pointLightShadows.needsUpdate=z,R.spotLights.needsUpdate=z,R.spotLightShadows.needsUpdate=z,R.rectAreaLights.needsUpdate=z,R.hemisphereLights.needsUpdate=z}function An(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return O},this.getActiveMipmapLevel=function(){return B},this.getRenderTarget=function(){return W},this.setRenderTargetTextures=function(R,z,J){let X=K.get(R);X.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,X.__autoAllocateDepthBuffer===!1&&(X.__useRenderToTexture=!1),K.get(R.texture).__webglTexture=z,K.get(R.depthTexture).__webglTexture=X.__autoAllocateDepthBuffer?void 0:J,X.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,z){let J=K.get(R);J.__webglFramebuffer=z,J.__useDefaultFramebuffer=z===void 0},this.setRenderTarget=function(R,z=0,J=0){W=R,O=z,B=J;let X=null,Y=!1,mt=!1;if(R){let bt=K.get(R);if(bt.__useDefaultFramebuffer!==void 0){E.bindFramebuffer(V.FRAMEBUFFER,bt.__webglFramebuffer),G.copy(R.viewport),nt.copy(R.scissor),at=R.scissorTest,E.viewport(G),E.scissor(nt),E.setScissorTest(at),F=-1;return}else if(bt.__webglFramebuffer===void 0)tt.setupRenderTarget(R);else if(bt.__hasExternalTextures)tt.rebindTextures(R,K.get(R.texture).__webglTexture,K.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){let Jt=R.depthTexture;if(bt.__boundDepthTexture!==Jt){if(Jt!==null&&K.has(Jt)&&(R.width!==Jt.image.width||R.height!==Jt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");tt.setupDepthRenderbuffer(R)}}let It=R.texture;(It.isData3DTexture||It.isDataArrayTexture||It.isCompressedArrayTexture)&&(mt=!0);let Ft=K.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(Ft[z])?X=Ft[z][J]:X=Ft[z],Y=!0):R.samples>0&&tt.useMultisampledRTT(R)===!1?X=K.get(R).__webglMultisampledFramebuffer:Array.isArray(Ft)?X=Ft[J]:X=Ft,G.copy(R.viewport),nt.copy(R.scissor),at=R.scissorTest}else G.copy(dt).multiplyScalar(j).floor(),nt.copy(Rt).multiplyScalar(j).floor(),at=Ct;if(J!==0&&(X=L),E.bindFramebuffer(V.FRAMEBUFFER,X)&&E.drawBuffers(R,X),E.viewport(G),E.scissor(nt),E.setScissorTest(at),Y){let bt=K.get(R.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_CUBE_MAP_POSITIVE_X+z,bt.__webglTexture,J)}else if(mt){let bt=z;for(let It=0;It<R.textures.length;It++){let Ft=K.get(R.textures[It]);V.framebufferTextureLayer(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0+It,Ft.__webglTexture,J,bt)}}else if(R!==null&&J!==0){let bt=K.get(R.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,bt.__webglTexture,J)}F=-1};function is(R){let z=K.get(R);return(z.__readFormat!==R.format||z.__readType!==R.type)&&(z.__readFormat=R.format,z.__readType=R.type,z.__formatReadable=U.textureFormatReadable(R.format),z.__typeReadable=U.textureTypeReadable(R.type)),z}this.readRenderTargetPixels=function(R,z,J,X,Y,mt,St,bt=0){if(!(R&&R.isWebGLRenderTarget)){Vt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let It=K.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&St!==void 0&&(It=It[St]),It){E.bindFramebuffer(V.FRAMEBUFFER,It);try{let Ft=R.textures[bt],Jt=Ft.format,te=Ft.type;R.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+bt);let At=is(Ft);if(At.__formatReadable===!1){Vt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(At.__typeReadable===!1){Vt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=R.width-X&&J>=0&&J<=R.height-Y&&V.readPixels(z,J,X,Y,ot.convert(Jt),ot.convert(te),mt)}finally{let Ft=W!==null?K.get(W).__webglFramebuffer:null;E.bindFramebuffer(V.FRAMEBUFFER,Ft)}}},this.readRenderTargetPixelsAsync=async function(R,z,J,X,Y,mt,St,bt=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let It=K.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&St!==void 0&&(It=It[St]),It)if(z>=0&&z<=R.width-X&&J>=0&&J<=R.height-Y){E.bindFramebuffer(V.FRAMEBUFFER,It);let Ft=R.textures[bt],Jt=Ft.format,te=Ft.type;R.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+bt);let At=is(Ft);if(At.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(At.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let pe=V.createBuffer();V.bindBuffer(V.PIXEL_PACK_BUFFER,pe),V.bufferData(V.PIXEL_PACK_BUFFER,mt.byteLength,V.STREAM_READ),V.readPixels(z,J,X,Y,ot.convert(Jt),ot.convert(te),0),V.bindBuffer(V.PIXEL_PACK_BUFFER,null);let Pe=W!==null?K.get(W).__webglFramebuffer:null;E.bindFramebuffer(V.FRAMEBUFFER,Pe);let ve=V.fenceSync(V.SYNC_GPU_COMMANDS_COMPLETE,0);return V.flush(),await hf(V,ve,4),V.bindBuffer(V.PIXEL_PACK_BUFFER,pe),V.getBufferSubData(V.PIXEL_PACK_BUFFER,0,mt),V.bindBuffer(V.PIXEL_PACK_BUFFER,null),V.deleteBuffer(pe),V.deleteSync(ve),mt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,z=null,J=0){let X=Math.pow(2,-J),Y=Math.floor(R.image.width*X),mt=Math.floor(R.image.height*X),St=z!==null?z.x:0,bt=z!==null?z.y:0;tt.setTexture2D(R,0),V.copyTexSubImage2D(V.TEXTURE_2D,J,0,0,St,bt,Y,mt),E.unbindTexture()},this.copyTextureToTexture=function(R,z,J=null,X=null,Y=0,mt=0){let St,bt,It,Ft,Jt,te,At,pe,Pe,ve=R.isCompressedTexture?R.mipmaps[mt]:R.image;if(J!==null)St=J.max.x-J.min.x,bt=J.max.y-J.min.y,It=J.isBox3?J.max.z-J.min.z:1,Ft=J.min.x,Jt=J.min.y,te=J.isBox3?J.min.z:0;else{let Oe=Math.pow(2,-Y);St=Math.floor(ve.width*Oe),bt=Math.floor(ve.height*Oe),R.isDataArrayTexture?It=ve.depth:R.isData3DTexture?It=Math.floor(ve.depth*Oe):It=1,Ft=0,Jt=0,te=0}X!==null?(At=X.x,pe=X.y,Pe=X.z):(At=0,pe=0,Pe=0);let ue=ot.convert(z.format),oi=ot.convert(z.type),Tt;z.isData3DTexture?(tt.setTexture3D(z,0),Tt=V.TEXTURE_3D):z.isDataArrayTexture||z.isCompressedArrayTexture?(tt.setTexture2DArray(z,0),Tt=V.TEXTURE_2D_ARRAY):(tt.setTexture2D(z,0),Tt=V.TEXTURE_2D),E.activeTexture(V.TEXTURE0),E.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,z.flipY),E.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),E.pixelStorei(V.UNPACK_ALIGNMENT,z.unpackAlignment);let di=E.getParameter(V.UNPACK_ROW_LENGTH),fe=E.getParameter(V.UNPACK_IMAGE_HEIGHT),Ai=E.getParameter(V.UNPACK_SKIP_PIXELS),qi=E.getParameter(V.UNPACK_SKIP_ROWS),Rn=E.getParameter(V.UNPACK_SKIP_IMAGES);E.pixelStorei(V.UNPACK_ROW_LENGTH,ve.width),E.pixelStorei(V.UNPACK_IMAGE_HEIGHT,ve.height),E.pixelStorei(V.UNPACK_SKIP_PIXELS,Ft),E.pixelStorei(V.UNPACK_SKIP_ROWS,Jt),E.pixelStorei(V.UNPACK_SKIP_IMAGES,te);let ws=R.isDataArrayTexture||R.isData3DTexture,xe=z.isDataArrayTexture||z.isData3DTexture;if(R.isDepthTexture){let Oe=K.get(R),Cn=K.get(z),Se=K.get(Oe.__renderTarget),Pn=K.get(Cn.__renderTarget);E.bindFramebuffer(V.READ_FRAMEBUFFER,Se.__webglFramebuffer),E.bindFramebuffer(V.DRAW_FRAMEBUFFER,Pn.__webglFramebuffer);for(let Es=0;Es<It;Es++)ws&&(V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,K.get(R).__webglTexture,Y,te+Es),V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,K.get(z).__webglTexture,mt,Pe+Es)),V.blitFramebuffer(Ft,Jt,St,bt,At,pe,St,bt,V.DEPTH_BUFFER_BIT,V.NEAREST);E.bindFramebuffer(V.READ_FRAMEBUFFER,null),E.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else if(Y!==0||R.isRenderTargetTexture||K.has(R)){let Oe=K.get(R),Cn=K.get(z);E.bindFramebuffer(V.READ_FRAMEBUFFER,A),E.bindFramebuffer(V.DRAW_FRAMEBUFFER,P);for(let Se=0;Se<It;Se++)ws?V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,Oe.__webglTexture,Y,te+Se):V.framebufferTexture2D(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,Oe.__webglTexture,Y),xe?V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,Cn.__webglTexture,mt,Pe+Se):V.framebufferTexture2D(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,Cn.__webglTexture,mt),Y!==0?V.blitFramebuffer(Ft,Jt,St,bt,At,pe,St,bt,V.COLOR_BUFFER_BIT,V.NEAREST):xe?V.copyTexSubImage3D(Tt,mt,At,pe,Pe+Se,Ft,Jt,St,bt):V.copyTexSubImage2D(Tt,mt,At,pe,Ft,Jt,St,bt);E.bindFramebuffer(V.READ_FRAMEBUFFER,null),E.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else xe?R.isDataTexture||R.isData3DTexture?V.texSubImage3D(Tt,mt,At,pe,Pe,St,bt,It,ue,oi,ve.data):z.isCompressedArrayTexture?V.compressedTexSubImage3D(Tt,mt,At,pe,Pe,St,bt,It,ue,ve.data):V.texSubImage3D(Tt,mt,At,pe,Pe,St,bt,It,ue,oi,ve):R.isDataTexture?V.texSubImage2D(V.TEXTURE_2D,mt,At,pe,St,bt,ue,oi,ve.data):R.isCompressedTexture?V.compressedTexSubImage2D(V.TEXTURE_2D,mt,At,pe,ve.width,ve.height,ue,ve.data):V.texSubImage2D(V.TEXTURE_2D,mt,At,pe,St,bt,ue,oi,ve);E.pixelStorei(V.UNPACK_ROW_LENGTH,di),E.pixelStorei(V.UNPACK_IMAGE_HEIGHT,fe),E.pixelStorei(V.UNPACK_SKIP_PIXELS,Ai),E.pixelStorei(V.UNPACK_SKIP_ROWS,qi),E.pixelStorei(V.UNPACK_SKIP_IMAGES,Rn),mt===0&&z.generateMipmaps&&V.generateMipmap(Tt),E.unbindTexture()},this.initRenderTarget=function(R){K.get(R).__webglFramebuffer===void 0&&tt.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?tt.setTextureCube(R,0):R.isData3DTexture?tt.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?tt.setTexture2DArray(R,0):tt.setTexture2D(R,0),E.unbindTexture()},this.resetState=function(){O=0,B=0,W=null,E.reset(),ut.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Oi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=ae._getDrawingBufferColorSpace(t),e.unpackColorSpace=ae._getUnpackColorSpace()}};var oc=class extends Bi{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;let t=new Me;t.deleteAttribute("uv");let e=new Ht({side:Ke}),i=new Ht,n=new la(16777215,900,28,2);n.position.set(.418,16.199,.3),this.add(n);let r=new ft(t,e);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);let a=new ii(t,i,6),o=new Ne;o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),o.updateMatrix(),a.setMatrixAt(0,o.matrix),o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),o.updateMatrix(),a.setMatrixAt(1,o.matrix),o.position.set(6.167,.857,7.803),o.rotation.set(0,.561,0),o.scale.set(3.927,6.285,3.687),o.updateMatrix(),a.setMatrixAt(2,o.matrix),o.position.set(-2.017,.018,6.124),o.rotation.set(0,.333,0),o.scale.set(2.002,4.566,2.064),o.updateMatrix(),a.setMatrixAt(3,o.matrix),o.position.set(2.291,-.756,-2.621),o.rotation.set(0,-.286,0),o.scale.set(1.546,1.552,1.496),o.updateMatrix(),a.setMatrixAt(4,o.matrix),o.position.set(-2.193,-.369,-5.547),o.rotation.set(0,.516,0),o.scale.set(3.875,3.487,2.986),o.updateMatrix(),a.setMatrixAt(5,o.matrix),this.add(a);let l=new ft(t,ar(50));l.position.set(-16.116,14.37,8.208),l.scale.set(.1,2.428,2.739),this.add(l);let c=new ft(t,ar(50));c.position.set(-16.109,18.021,-8.207),c.scale.set(.1,2.425,2.751),this.add(c);let h=new ft(t,ar(17));h.position.set(14.904,12.198,-1.832),h.scale.set(.15,4.265,6.331),this.add(h);let u=new ft(t,ar(43));u.position.set(-.462,8.89,14.52),u.scale.set(4.38,5.441,.088),this.add(u);let d=new ft(t,ar(20));d.position.set(3.235,11.486,-12.541),d.scale.set(2.5,2,.1),this.add(d);let f=new ft(t,ar(100));f.position.set(0,20,0),f.scale.set(1,.1,1),this.add(f)}dispose(){let t=new Set;this.traverse(e=>{e.isMesh&&(t.add(e.geometry),t.add(e.material))});for(let e of t)e.dispose()}};function ar(s){return new ra({color:0,emissive:16777215,emissiveIntensity:s})}var or=Math.PI*2,Yn=9.81,Z=(s,t,e)=>s<t?t:s>e?e:s,Kt=(s,t,e)=>s+(t-s)*e;var ge=(s,t,e)=>{let i=Z((e-s)/(t-s),0,1);return i*i*(3-2*i)};function bn(s){return s%=or,s>Math.PI?s-=or:s<-Math.PI&&(s+=or),s}function Be(s,t,e){let i=(s-t)%e;return i>e/2?i-=e:i<=-e/2&&(i+=e),i}function re(s,t){return(s%t+t)%t}function We(s){let t=s>>>0,e=()=>{t=t+1831565813>>>0;let i=t;return i=Math.imul(i^i>>>15,i|1),i^=i+Math.imul(i^i>>>7,i|61),((i^i>>>14)>>>0)/4294967296};return e.range=(i,n)=>i+(n-i)*e(),e.gauss=()=>{let i=0;for(let n=0;n<6;n++)i+=e();return(i-3)/Math.sqrt(.5)},e}function Wf(s,t){if(t<=s[0][0])return s[0][1];for(let e=1;e<s.length;e++)if(t<=s[e][0]){let[i,n]=s[e-1],[r,a]=s[e];return n+(a-n)*(t-i)/(r-i)}return s[s.length-1][1]}function be(s,t=3){if(s==null||!isFinite(s))return"--:--.---";let e=s<0?"-":"";s=Math.abs(s);let i=Math.floor(s/60),n=s-i*60;return`${e}${i}:${n.toFixed(t).padStart(t+3,"0")}`}var Gt={ASPHALT:0,KERB:1,GRASS:2,GRAVEL:3,RUNOFF:4,PIT:5,WALL:6},wa=12,$f=4.5;function kx(s){let t=s.segments.map(y=>{let m=typeof y[y.length-1]=="object"?y[y.length-1]:{};return y[0]==="S"?{t:"S",len:y[1],free:!!m.free,fixed:!!m.fixed,name:m.n}:{t:"A",dir:y[0]==="L"?1:-1,r:y[1],ang:y[2]*Math.PI/180,free:!!m.free,name:m.n}}),e=t.filter(y=>y.t==="S"&&y.free),i=e.length>=2?e:t.filter(y=>y.t==="S"&&!y.fixed),n=t.find(y=>y.t==="A"&&y.free);if(i.length<2||!n)throw new Error(`${s.id}: need >=2 adjustable straights and 1 free arc`);let r=0;for(let y of t)y.t==="A"&&!y.free&&(r+=y.dir*y.ang);let a=s.turns*or-r;if(n.ang=Math.abs(a),n.dir=Math.sign(a),n.ang<.05)throw new Error(`${s.id}: free arc angle degenerate`);let o=s.smooth??14,l=()=>{let y=0;for(let m of t)m.length=m.t==="S"?m.len:m.r*m.ang,m.start=y,y+=m.length;return y},c=l(),h=2*Math.round(c/2),u=()=>{c=l();let y=c/h,m=new Float64Array(h);for(let w of t){if(w.t!=="A")continue;let C=w.dir/w.r,D=w.start,I=w.start+w.length;for(let L=Math.max(0,Math.floor(D/y));L<h&&L*y<I;L++){let A=Math.min(I,(L+1)*y)-Math.max(D,L*y);A>0&&(m[L]+=C*A/y)}}let p=Math.max(.01,o/y),v=Math.ceil(p*3),_=[],M=0;for(let w=-v;w<=v;w++){let C=Math.exp(-(w*w)/(2*p*p));_.push(C),M+=C}let S=new Float64Array(h);for(let w=0;w<h;w++){let C=0;for(let D=-v;D<=v;D++)C+=m[(w+D+h*4)%h]*_[D+v];S[w]=C/M}let b=new Float64Array(h+1),T=new Float64Array(h+1),x=new Float64Array(h+1);for(let w=0;w<h;w++){let C=x[w]+S[w]*y/2;b[w+1]=b[w]+Math.cos(C)*y,T[w+1]=T[w]+Math.sin(C)*y,x[w+1]=x[w]+S[w]*y}return{x:b,y:T,th:x,kappa:S,step:y}},d,f=new Set(i);for(let y=0;y<60;y++){d=u();let m=d.x[h],p=d.y[h];if(Math.hypot(m,p)<1e-4)break;let v=[...f],_=0,M=0,S=0,b=v.map(C=>{let D=Math.min(h,Math.max(0,Math.round((C.start+C.length/2)/d.step))),I=d.th[D],L=C.len*C.len,A=Math.cos(I),P=Math.sin(I);return _+=A*A*L,M+=A*P*L,S+=P*P*L,[A,P,L]}),T=_*S-M*M;if(Math.abs(T)<1e-9)throw new Error(`${s.id}: straights are all parallel; cannot close the loop`);let x=(-m*S+p*M)/T,w=(m*M-p*_)/T;if(v.forEach((C,D)=>{let[I,L,A]=b[D],P=C.len+A*(I*x+L*w)*.8;P<25?(C.len=25,f.delete(C)):C.len=P}),f.size<2)throw new Error(`${s.id}: not enough room to close the loop; reshape the corners`)}d=u();let g=Math.hypot(d.x[h],d.y[h]);if(g>.05)throw new Error(`${s.id}: loop did not close (${g.toFixed(3)} m)`);return{...d,N:h,total:c,segs:t}}function Ox(s){let t=s.scale??1,e=s.points.map(I=>({x:I[0]*t,y:I[1]*t,r:I[2]??80,o:I[3]||{}})),i=e.length,n=e.map((I,L)=>{let A=e[(L+i-1)%i],P=e[(L+1)%i],O=A.x-I.x,B=A.y-I.y,W=P.x-I.x,F=P.y-I.y,H=Math.hypot(O,B),G=Math.hypot(W,F);O/=H,B/=H,W/=G,F/=G;let nt=Math.acos(Z(O*W+B*F,-1,1)),at=Math.PI-nt,Mt=I.r*Math.tan(at/2),gt=-O*F+B*W>0,Nt=O+W,q=B+F,j=Math.hypot(Nt,q)||1,ct=I.r/Math.sin(nt/2),Et=I.x+Nt/j*ct,dt=I.y+q/j*ct;return{T:Mt,theta:at,left:gt,cx:Et,cy:dt,r:I.r,sx:I.x+O*Mt,sy:I.y+B*Mt,ex:I.x+W*Mt,ey:I.y+F*Mt,name:I.o.n}});for(let I=0;I<i;I++){let L=(I+1)%i,A=Math.hypot(e[L].x-e[I].x,e[L].y-e[I].y);if(n[I].T+n[L].T>A-1)throw new Error(`${s.id}: corners ${I} and ${L} overlap (need ${(n[I].T+n[L].T).toFixed(0)} m, edge is ${A.toFixed(0)} m)`)}let r=[[n[0].ex,n[0].ey]],a=[],o=0,l=(I,L)=>{let A=r[r.length-1];o+=Math.hypot(I-A[0],L-A[1]),r.push([I,L])};for(let I=1;I<=i;I++){let L=I%i;a[I-1]=o,l(n[L].sx,n[L].sy);let A=n[L],P=Math.atan2(A.sy-A.cy,A.sx-A.cx),O=Math.max(2,Math.ceil(A.theta/Math.min(.06,.7/A.r)));for(let B=1;B<=O;B++){let W=P+(A.left?1:-1)*(A.theta*B)/O;l(A.cx+Math.cos(W)*A.r,A.cy+Math.sin(W)*A.r)}}let c=o,h=(I,L)=>{let A=[0];for(let W=1;W<I.length;W++)A.push(A[W-1]+Math.hypot(I[W][0]-I[W-1][0],I[W][1]-I[W-1][1]));let P=A[A.length-1],O=[],B=1;for(let W=0;W<L;W++){let F=W/L*P;for(;B<A.length-1&&A[B]<F;)B++;let H=(F-A[B-1])/(A[B]-A[B-1]||1);O.push([Kt(I[B-1][0],I[B][0],H),Kt(I[B-1][1],I[B][1],H)])}return O.push([O[0][0],O[0][1]]),{pts:O,total:P}},u=2*Math.round(c/2),d=h(r,u),f=d.total/u,g=Math.max(.01,(s.smooth??8)/f),y=Math.ceil(g*3),m=[],p=0;for(let I=-y;I<=y;I++){let L=Math.exp(-(I*I)/(2*g*g));m.push(L),p+=L}let v=new Float64Array(u),_=new Float64Array(u);for(let I=0;I<u;I++){let L=0,A=0;for(let P=-y;P<=y;P++){let O=d.pts[(I+P+u*8)%u];L+=O[0]*m[P+y],A+=O[1]*m[P+y]}v[I]=L/p,_[I]=A/p}let M=Array.from({length:u+1},(I,L)=>[v[L%u],_[L%u]]),S=h(M,u),b=new Float64Array(u+1),T=new Float64Array(u+1);S.pts.forEach((I,L)=>{b[L]=I[0],T[L]=I[1]});let[x,w]=s.start||[0,0],C=(a[x]+w)/c*S.total,D=n.map((I,L)=>({t:"A",name:I.name,length:I.theta*I.r,start:0,dir:I.left?1:-1,r:I.r,ang:I.theta}));return{x:b,y:T,N:u,total:S.total,step:S.total/u,segs:D,startAt:C,edgeStart:a}}function Bx(s,t,e,i){let n=i.length,r=new Float64Array(n),a=new Float64Array(n),o=new Float64Array(n);for(let h=0;h<n;h++){if(h>=2&&(o[h]=e[h-2]/r[h-2]),h>=1){let d=t[h-1];h>=2&&(d-=o[h]*r[h-2]*a[h-1]),a[h]=d/r[h-1]}let u=s[h];h>=1&&(u-=a[h]*a[h]*r[h-1]),h>=2&&(u-=o[h]*o[h]*r[h-2]),r[h]=u}let l=new Float64Array(n);for(let h=0;h<n;h++){let u=i[h];h>=1&&(u-=a[h]*l[h-1]),h>=2&&(u-=o[h]*l[h-2]),l[h]=u}let c=new Float64Array(n);for(let h=n-1;h>=0;h--){let u=l[h]/r[h];h+1<n&&(u-=a[h+1]*c[h+1]),h+2<n&&(u-=o[h+2]*c[h+2]),c[h]=u}return c}function Hx(s,t=1.1,e=.001,i=10){let n=s.N,r=n*3,a=new Float64Array(r),o=new Float64Array(r),l=new Float64Array(r),c=new Float64Array(r),h=new Float64Array(r),u=new Float64Array(r);for(let x=0;x<r;x++){let w=x%n;a[x]=s.x[w],o[x]=s.y[w],l[x]=s.nx[w],c[x]=s.ny[w],h[x]=-(s.wr[w]-t),u[x]=s.wl[w]-t}let d=new Float64Array(r),f=new Float64Array(r);for(let x=1;x<r-1;x++)d[x]=a[x-1]-2*a[x]+a[x+1],f[x]=o[x-1]-2*o[x]+o[x+1];let g=new Float64Array(r),y=new Float64Array(r);for(let x=0;x<r-1;x++)g[x]=a[x+1]-a[x],y[x]=o[x+1]-o[x];let m=(x,w)=>l[x]*l[w]+c[x]*c[w],p=new Float64Array(r),v=new Float64Array(r),_=new Float64Array(r),M=new Float64Array(r);for(let x=1;x<r-1;x++){let w=[x-1,x,x+1],C=[1,-2,1];for(let D=0;D<3;D++){let I=w[D];M[I]-=C[D]*(l[I]*d[x]+c[I]*f[x]);for(let L=D;L<3;L++){let A=w[L],P=C[D]*C[L]*m(I,A);A===I?p[I]+=P:A-I===1?v[I]+=P:A-I===2&&(_[I]+=P)}}}for(let x=0;x<r-1;x++){let w=[x,x+1],C=[-1,1];for(let D=0;D<2;D++){let I=w[D];M[I]-=e*C[D]*(l[I]*g[x]+c[I]*y[x]);for(let L=D;L<2;L++){let A=w[L],P=e*C[D]*C[L]*m(I,A);A===I?p[I]+=P:A-I===1&&(v[I]+=P)}}}for(let x=0;x<r;x++)p[x]+=1e-5;let S=new Float64Array(r),b=new Int8Array(r);for(let x=0;x<60;x++){let w=Float64Array.from(p),C=Float64Array.from(v),D=Float64Array.from(_),I=Float64Array.from(M);for(let P=0;P<r;P++){if(!b[P])continue;let O=b[P]<0?h[P]:u[P];for(let B=Math.max(0,P-2);B<=Math.min(r-1,P+2);B++){if(B===P||b[B])continue;let W=Math.min(P,B),H=Math.abs(P-B)===1?v[W]:_[W];I[B]-=H*O}}for(let P=0;P<r;P++)b[P]&&(w[P]=1,I[P]=b[P]<0?h[P]:u[P],P+1<r&&(C[P]=0),P+2<r&&(D[P]=0),P>=1&&(C[P-1]=0),P>=2&&(D[P-2]=0));let L=Bx(w,C,D,I),A=0;for(let P=0;P<r;P++)S[P]=L[P],b[P]||(L[P]<h[P]?(b[P]=-1,A++):L[P]>u[P]&&(b[P]=1,A++));for(let P=0;P<r;P++){if(!b[P])continue;let O=p[P]*S[P]-M[P];P>=1&&(O+=v[P-1]*S[P-1]),P>=2&&(O+=_[P-2]*S[P-2]),P+1<r&&(O+=v[P]*S[P+1]),P+2<r&&(O+=_[P]*S[P+2]),(b[P]>0&&O>0||b[P]<0&&O<0)&&(b[P]=0,A++)}if(!A)break}let T=new Float64Array(n);for(let x=0;x<n;x++)T[x]=Z(S[n+x],h[n+x],u[n+x]);return zx(T,s.ds,i)}function zx(s,t,e){if(!(e>0))return s;let i=s.length,n=e/t,r=Math.ceil(n*3),a=[],o=0;for(let c=-r;c<=r;c++){let h=Math.exp(-(c*c)/(2*n*n));a.push(h),o+=h}let l=new Float64Array(i);for(let c=0;c<i;c++){let h=0;for(let u=-r;u<=r;u++)h+=a[u+r]*s[(c+u+i*4)%i];l[c]=h/o}return l}var lc=class{constructor(t){this.def=t,this.id=t.id,this.name=t.name,this.theme=t.theme||{};let e=t.points?Ox(t):kx(t),i=e.startAt??t.startAt,n=e.N;if(!Number.isFinite(i))throw new Error(`track '${t.id}' has no usable start position`);let r=re(Math.round(i/e.step),e.N);r-=r%2;let a=n/2;this.N=a,this.length=e.total,this.ds=e.total/a,this.x=new Float64Array(a),this.y=new Float64Array(a),this.z=new Float64Array(a);for(let h=0;h<a;h++){let u=(r+h*2)%n;this.x[h]=e.x[u],this.y[h]=e.y[u]}let o=0,l=0;for(let h=0;h<a;h++)o+=this.x[h],l+=this.y[h];o/=a,l/=a;for(let h=0;h<a;h++)this.x[h]-=o,this.y[h]-=l;this.hdg=new Float64Array(a),this.curv=new Float64Array(a),this.nx=new Float64Array(a),this.ny=new Float64Array(a);for(let h=0;h<a;h++){let u=(h+a-1)%a,d=(h+1)%a;this.hdg[h]=Math.atan2(this.y[d]-this.y[u],this.x[d]-this.x[u])}for(let h=0;h<a;h++){let u=(h+a-2)%a,d=(h+2)%a;this.curv[h]=bn(this.hdg[d]-this.hdg[u])/(4*this.ds),this.nx[h]=-Math.sin(this.hdg[h]),this.ny[h]=Math.cos(this.hdg[h])}let c=this.length;for(let h=0;h<a;h++){let u=0;for(let[d,f,g]of t.elevation||[])u+=f*Math.sin(or*d*h*this.ds/c+g);this.z[h]=u}this.slope=new Float64Array(a);for(let h=0;h<a;h++)this.slope[h]=(this.z[(h+1)%a]-this.z[(h+a-1)%a])/(2*this.ds);this.segInfo=e.segs.map(h=>({type:h.t,name:h.name,length:h.length,s:re(h.start-i,this.length),dir:h.dir,r:h.r,angle:h.ang})),this._buildCorners(),this._buildEdges(),this._buildPit(),this._buildMarkers(),this.lineD=Hx(this,t.lineMargin??1.1),this._finishLine()}wrapS(t){return re(t,this.length)}pointAt(t,e,i={}){let n=re(t,this.length)/this.ds,r=Math.floor(n)%this.N,a=(r+1)%this.N,o=n-Math.floor(n),l=Kt(this.x[r],this.x[a],o),c=Kt(this.y[r],this.y[a],o),h=Kt(this.nx[r],this.nx[a],o),u=Kt(this.ny[r],this.ny[a],o),d=Math.hypot(h,u);return i.x=l+h/d*e,i.y=c+u/d*e,i.cx=l,i.cy=c,i.h=Kt(this.z[r],this.z[a],o),i.heading=this.hdgAt(t),i}hdgAt(t){let e=re(t,this.length)/this.ds,i=Math.floor(e)%this.N,n=(i+1)%this.N,r=e-Math.floor(e);return this.hdg[i]+bn(this.hdg[n]-this.hdg[i])*r}at(t,e){let i=re(e,this.length)/this.ds,n=Math.floor(i)%this.N,r=i-Math.floor(i);return Kt(t[n],t[(n+1)%this.N],r)}idx(t){return Math.floor(re(t,this.length)/this.ds)%this.N}project(t,e,i,n){let r=this.N,a=this.x,o=this.y,l=-1,c=1/0,h=0,u=_=>{let M=_+1===r?0:_+1,S=a[M]-a[_],b=o[M]-o[_],T=((t-a[_])*S+(e-o[_])*b)/(S*S+b*b);T=T<0?0:T>1?1:T;let x=a[_]+S*T-t,w=o[_]+b*T-e,C=x*x+w*w;C<c&&(c=C,l=_,h=T)};if(i>=0)for(let _=-12;_<=12;_++)u((i+_+r)%r);if(l<0||c>900){let _=0,M=1/0;for(let S=0;S<r;S+=6){let b=a[S]-t,T=o[S]-e,x=b*b+T*T;x<M&&(M=x,_=S)}c=1/0;for(let S=-9;S<=9;S++)u((_+S+r)%r)}let d=(l+1)%r,f=a[d]-a[l],g=o[d]-o[l],y=a[l]+f*h,m=o[l]+g*h,p=f*(e-m)-g*(t-y),v=Math.sqrt(c);return n.i=l,n.t=h,n.s=(l+h)*this.ds,n.d=p>=0?v:-v,n.dist=v,n}_buildCorners(){let t=this.N,e=this.ds,i=1/380,n=this.curv,r=[],a=0;for(;Math.abs(n[a])>i&&a<t;)a++;let o=null;for(let l=0;l<t;l++){let c=(a+l)%t,h=Math.abs(n[c])>i;if(h&&(!o||Math.sign(n[c])!==o.sign)){o&&r.push(o),o={sign:Math.sign(n[c]),start:c,end:c,maxK:Math.abs(n[c]),apex:c,len:1};continue}if(h&&o)o.end=c,o.len++,Math.abs(n[c])>o.maxK&&(o.maxK=Math.abs(n[c]),o.apex=c);else if(!h&&o){let u=0;for(;u<8&&Math.abs(n[(c+u)%t])<=i;)u++;u>=8||Math.sign(n[(c+u)%t])!==o.sign?(r.push(o),o=null):o.len++}}o&&r.push(o),this.corners=r.filter(l=>l.len*e>25).map((l,c)=>({...l,id:c+1,sApex:l.apex*e,sStart:l.start*e,sEnd:l.end*e,radius:1/l.maxK}))}_buildEdges(){let t=this.N,e=this.def,i=e.width??14;this.wl=new Float64Array(t).fill(i/2),this.wr=new Float64Array(t).fill(i/2);for(let d=0;d<t;d++){let f=d*this.ds,g=Math.min(f,this.length-f),y=i/2*(1+.08*(1-ge(0,500,g)));this.wl[d]=y,this.wr[d]=y}this.kl=new Float64Array(t),this.kr=new Float64Array(t),this.r1l=new Float64Array(t),this.r1r=new Float64Array(t),this.t1l=new Uint8Array(t),this.t1r=new Uint8Array(t),this.r2l=new Float64Array(t),this.r2r=new Float64Array(t);let n=e.runoff||{mode:"modern"},r=e.kerbWidth??1.5,a=n.mode==="street",o=(d,f,g)=>{let y=(f%t+t)%t;for(let m=(d%t+t)%t,p=0;p<t&&(g(m),m!==y);p++,m=(m+1)%t);},l=(d,f)=>(d.start+Math.round((d.end-d.start+t)%t*f))%t;if(!a||n.kerbs)for(let d of this.corners){if(d.maxK<1/230)continue;let f=d.sign>0,g=f?this.kl:this.kr,y=f?this.kr:this.kl;o(l(d,.12),l(d,.9),m=>g[m]=r),d.maxK>1/120&&o(l(d,.6),(l(d,1)+10)%t,m=>y[m]=r)}let c=n.base1??0,h=n.grass??16,u=n.cornerRoom??12;for(let d=0;d<t;d++)this.r1l[d]=this.r1r[d]=c,this.r2l[d]=this.r2r[d]=a?n.gap??1.2:h,this.t1l[d]=this.t1r[d]=Gt.GRASS;if(!a){for(let f of this.corners){if(f.maxK<1/450)continue;let g=f.sign<0,y=g?this.r1l:this.r1r,m=g?this.t1l:this.t1r,p=g?this.r2l:this.r2r,v=Math.round(30/this.ds),_=Math.round(60/this.ds),M=(f.start-v+t)%t,S=(f.end+_)%t,b=f.maxK<1/140,T=u*(b?1.5:1);o(M,S,x=>{y[x]=T,m[x]=n.mode==="classic"?Gt.GRAVEL:b||n.mode==="modern"?Gt.RUNOFF:Gt.GRAVEL,n.mode==="mixed"&&(m[x]=b?Gt.GRAVEL:Gt.RUNOFF),p[x]=Math.max(6,h-4)})}let d=f=>{let g=Float64Array.from(f),y=10;for(let m=0;m<t;m++){let p=0;for(let v=-y;v<=y;v++)p+=g[(m+v+t)%t];f[m]=p/(2*y+1)}};d(this.r1l),d(this.r1r)}}wallDist(t,e){if(e>0)return this.wl[t]+this.kl[t]+this.r1l[t]+this.r2l[t];let i=this.wr[t]+this.kr[t]+this.r1r[t]+this.r2r[t];if(this.pit){let n=t*this.ds,r=this._pitBlend(n);this.pitWallRange(n)?i=r*this.pit.offset+wa/2+.7:r>.01&&(i=Math.max(i,r*this.pit.offset+wa/2+3))}return i}_buildPit(){let t=this.def.pit;if(!t){this.pit=null;return}let e=this.length,i=this.idx(0),n=this.wr[i]+this.kr[i]+$f+wa/2+1,r=Math.sqrt(6*n*22.2*22.2/7.4),a=Math.max(t.rampIn??90,r),o=Math.max(t.rampOut??90,r*.95),l=t.boxStart??60,c=t.boxSpacing??15;this.pit={start:re(t.in,e),len:Math.max(re(t.out-t.in,e),a+l+9*c+30+o),rampIn:a,rampOut:o,offset:n,width:wa,island:$f,limit:22.2,boxStart:l,boxSpacing:c,boxCount:10},this.pit.limitStart=re(this.pit.start+this.pit.rampIn*.35,e),this.pit.limitLen=this.pit.len-this.pit.rampIn*.35-this.pit.rampOut*.5}_pitBlend(t){let e=this.pit;if(!e)return 0;let i=re(t-e.start,this.length);if(i>e.len)return 0;let n=ge(0,e.rampIn,i),r=1-ge(e.len-e.rampOut,e.len,i);return Math.min(n,r)}pitCentre(t){return-this._pitBlend(t)*this.pit.offset}pitWallRange(t){let e=this.pit;if(!e)return!1;let i=re(t-e.start,this.length);return i>=e.rampIn&&i<=e.len-e.rampOut}pitWallLat(t){return this.pitCentre(t)+this.pit.width/2+.35}inPitRange(t){return!!this.pit&&re(t-this.pit.start,this.length)<=this.pit.len}inPitLimiter(t){return!!this.pit&&re(t-this.pit.limitStart,this.length)<=this.pit.limitLen}pitBox(t){let e=this.pit,i=re(e.start+e.rampIn+e.boxStart+t*e.boxSpacing,this.length);return{s:i,d:this.pitCentre(i)-2.2}}surface(t,e){let i=e<0?-e:e;if(this.pit){let r=this._pitBlend(t*this.ds);if(r>.01&&Math.abs(e+r*this.pit.offset)<wa/2)return Gt.PIT}if(e>=0){let r=this.wl[t];return i<=r?Gt.ASPHALT:(r+=this.kl[t],i<=r?Gt.KERB:(r+=this.r1l[t],i<=r?this.t1l[t]:(r+=this.r2l[t],i<=r?Gt.GRASS:Gt.WALL)))}let n=this.wr[t];return i<=n?Gt.ASPHALT:(n+=this.kr[t],i<=n?Gt.KERB:(n+=this.r1r[t],i<=n?this.t1r[t]:(n+=this.r2r[t],i<=n||i<=this.wallDist(t,-1)?Gt.GRASS:Gt.WALL)))}_buildMarkers(){let t=this.length;this.drs=this.autoDrsZones();let e=t/3;this.sectors=this.def.sectors||[e,2*e],this.cpSpacing=t/Math.round(t/100),this.cpCount=Math.round(t/this.cpSpacing)}autoDrsZones(){let t=this.N,e=this.ds,i=this.length,n=l=>Math.abs(this.curv[l%t])<1/1200,r=[],a=-1;for(let l=0;l<t;l++)if(!n(l)){a=l;break}if(a<0)return r;let o=0;for(;o<t;){let l=(a+o)%t;if(!n(l)){o++;continue}let c=0;for(;o+c<t&&n(a+o+c);)c++;let h=c*e;if(h>480){let u=(a+o)%t*e,d=re(u+25,i),f=re(u+h-160,i);r.push({detect:re(d-140,i),start:d,end:f})}o+=c}return r}inDrsZone(t){for(let e=0;e<this.drs.length;e++){let i=this.drs[e];if(re(t-i.start,this.length)<=re(i.end-i.start,this.length))return e}return-1}_finishLine(){this.gridSlot=t=>({s:re(-9-8*t,this.length),d:t%2===0?3.3:-3.3})}lineAt(t){return this.at(this.lineD,t)}};var cc=1.2,ni={soft:{id:"soft",name:"Soft",letter:"S",color:"#ee3340",mu:1,wearLaps:14,tOpt:100,tRange:24},medium:{id:"medium",name:"Medium",letter:"M",color:"#f6d13a",mu:.965,wearLaps:24,tOpt:98,tRange:28},hard:{id:"hard",name:"Hard",letter:"H",color:"#f2f2f2",mu:.93,wearLaps:38,tOpt:96,tRange:32},wet:{id:"wet",name:"Wet",letter:"W",color:"#3a8bff",mu:.88,wearLaps:22,tOpt:80,tRange:50,wetTyre:!0}},Ta=["soft","medium","hard","wet"],hc=["soft","medium","hard"];function Aa(s,t){let e=ge(.08,.7,t);return s.wetTyre?1-.1*(1-e)-.08*e:1-.3*e}var _n=[];_n[Gt.ASPHALT]={grip:1,rr:.012};_n[Gt.KERB]={grip:.94,rr:.02};_n[Gt.GRASS]={grip:.52,rr:.1};_n[Gt.GRAVEL]={grip:.48,rr:.38};_n[Gt.RUNOFF]={grip:.92,rr:.016};_n[Gt.PIT]={grip:1,rr:.012};_n[Gt.WALL]={grip:.4,rr:.4};var Gx=[[3e3,250],[4500,330],[6e3,400],[8e3,470],[1e4,520],[11500,530],[13e3,490],[14e3,455],[15e3,420],[15600,0]],xd=s=>Wf(Gx,s),Vx=[21,32,43,54,65,76,88,101];function qf(s={}){let t=Z(s.frontWing??5,0,10),e=Z(s.rearWing??5,0,10),i=s.performance??1,n=.35,r={dryMass:770,wheelbase:3.6,weightFront:.455,trackF:1.6,trackR:1.55,hCg:.28,izDry:1050,wheelR:n,length:5.5,width:2,clAf:1.6+.16*t+.32,clAr:2.2+.18*e+.48,cdA:.35+.25+.012*t+.35+.035*e,cdSide:2.8,drsDragCut:.2,drsLiftCut:.45,mu0:2,loadSens:11e-5,fz0:2e3,kappaPeak:.11,alphaPeak:.09,pacejkaB:2.06,pacejkaC:1.4,relaxLength:.35,rollFrontShare:.55,frontGrip:s.frontGrip??1,rearGrip:s.rearGrip??1.15,iFront:1.5,iRear:1.8,idleRpm:4200,maxRpm:15e3,shiftUpRpm:13600,shiftDownRpm:8300,driveEff:.93,powerScale:i,ersPower:12e4,ersCapacity:4e6,brakeTorque:19e3,brakeBias:s.brakeBias??.58,maxSteer:.36,compound:ni[s.compound||"medium"],pressure:Z(Math.round(s.pressure??0),-3,3),fuelKg:s.fuel??40};return r.gearRatios=Vx.map(a=>14600*2*Math.PI/60*n/a),r.aeroBalanceFront=(r.clAf+.4*0)/(r.clAf+r.clAr),r}function Ea(s,t){return Math.max(.7,s.mu0-s.loadSens*(t-s.fz0))*s.compound.mu}function Xf(s,t){let e=cc,i=s.clAf+s.clAr,n=f=>.5*e*i*f*f,r=f=>.5*e*s.cdA*f*f,a=f=>(t*Yn+n(f))/4,o=t*s.hCg/(s.trackF+s.trackR),l=new Float64Array(161);for(let f=0;f<l.length;f++){let g=a(f),y=4*Ea(s,g)*g/t;for(let m=0;m<6;m++){let p=o*y,v=g+p,_=Math.max(g-p,50);y=2*(Ea(s,v)*v+Ea(s,_)*_)/t}l[f]=y}let c=(f,g=1)=>{let y=Math.min(Math.max(f,0),l.length-1.001),m=Math.floor(y);return(l[m]+(l[m+1]-l[m])*(y-m))*g},h=(f,g=1)=>{let y=a(f);return(4*Ea(s,y)*y*g+r(f))/t},u=f=>{let g=0;for(let y=0;y<s.gearRatios.length;y++){let m=f/s.wheelR*s.gearRatios[y]*60/(2*Math.PI);if(m>s.maxRpm||m<6e3)continue;let p=m*2*Math.PI/60;g=Math.max(g,xd(m)*p*s.driveEff*s.powerScale)}return g+s.ersPower*.5*s.powerScale};return{down:n,drag:r,latAccel:c,brakeDecel:h,accel:(f,g=1)=>{let y=(t*Yn*(1-s.weightFront)+n(f)*(1-s.aeroBalanceFront))/2,m=2*Ea(s,y+250)*(y+250)*g,p=u(Math.max(f,8))/Math.max(f,8),v=.014*(t*Yn+n(f));return(Math.min(m,p)-r(f)-v)/t},enginePower:u}}var Yf=["LINE","FOLLOW","DRAFT","ATTACK","COVER","BLOCK","YIELD"],Kf=["close","edge","brake","corner","straight","room","drs","threat","lapped","risk"],Wx={LINE:{bias:.45,close:-.7,threat:-.5},FOLLOW:{bias:.05,close:.9,edge:-.35,risk:.15},DRAFT:{bias:-.3,close:.55,edge:.45,straight:1.9,drs:-.9,brake:-1.5,corner:-.6},ATTACK:{bias:-.55,close:1,edge:.9,brake:.9,corner:1,straight:-.6,room:.8,drs:.9,threat:-.2,risk:-1.1},COVER:{bias:-.35,threat:1.2,straight:.6,brake:-.5},BLOCK:{bias:-.55,threat:1.1,brake:.9,corner:.5},YIELD:{bias:-2,lapped:3.2,threat:.4}},$x={ATTACK:"aggr",COVER:"defend",BLOCK:"defend"},Zf=2.6,Jf=3,qx=.25,dc=class{constructor(t){this.drv=t;let e=t.dp.aggression,i=t.rng(),n=t.rng(),r=t.rng();this.traits={aggr:Z(e+(i-.5)*.3,.05,1),defend:Z(1.3*(e-.3)+(n-.5)*.2,0,1),riskTol:Z(.4+.5*e+(r-.5)*.3,.05,1)},this.action="LINE",this.side=0,this.since=0,this.nextThink=0,this.noAttackUntil=0,this.closeRate=0,this.lastAhead=null,this.f=Object.fromEntries(Kf.map(a=>[a,0])),this.scores=Object.fromEntries(Yf.map(a=>[a,-1/0])),this.intent={action:"LINE",side:0,target:null,brakeLate:1,push:1,ers:1,fuel:1,yieldLift:1,rival:null},this.fuelPerLap=0,this._fuel0=null,this._dist0=0,this.powerT=0}think(t){let{now:e}=t;if(e<this.nextThink)return this.intent;this.nextThink=e+.1;let i=this.drv,n=i.car,r=this.intent;if(t.race.sc&&t.race.sc.state!=="none"||i.pitState!=="none")return this.action="LINE",this.side=0,this.fill(r,t,null,null,"LINE");let a=this.sense(t),o=this.f,l={LINE:!0,FOLLOW:!!a.ahead,DRAFT:!!a.ahead&&t.straight&&a.ahead.gap>14&&this.closeRate<24&&a.ahead.v>30,ATTACK:!!a.ahead&&e>=this.noAttackUntil&&a.atkSide!==0&&a.ahead.gap<40&&!a.alongsideAttackerSide,COVER:this.traits.defend>.25&&!!a.behind&&t.straight&&!a.aside,BLOCK:this.traits.defend>.25&&!!a.behind&&t.dCorner>55&&t.dCorner<330&&!!t.inside&&!a.aside,YIELD:!!a.lapper},c="LINE",h=-1/0;for(let u of Yf){if(!l[u]){this.scores[u]=-1/0;continue}let d=Wx[u],f=d.bias||0;for(let y of Kf)d[y]&&(f+=d[y]*o[y]);let g=$x[u];g&&(f=(d.bias||0)+(f-(d.bias||0))*(.55+.9*this.traits[g])),u==="ATTACK"&&(f+=.5*(this.traits.riskTol-.5)),u===this.action&&(f+=qx),this.scores[u]=f,f>h&&(h=f,c=u)}return c!==this.action&&(this.since=e),this.action=c,c==="ATTACK"&&a.atkInside&&t.dCorner<52&&a.ahead.ds>3.2&&!a.alongsideAny&&(this.action="FOLLOW",this.noAttackUntil=e+3.5,this.since=e,c="FOLLOW"),c==="ATTACK"&&a.ahead&&e-this.since>.6&&a.ahead.ds<13&&Math.abs(a.ahead.dd)<1.7&&n.speed>a.ahead.v+3&&(this.action="FOLLOW",this.noAttackUntil=e+1.5,this.since=e,c="FOLLOW"),this.side=c==="ATTACK"?a.atkSide:c==="COVER"?a.coverSide:c==="BLOCK"?t.inside:c==="YIELD"?a.yieldSide:0,this.fill(r,t,a,l,c)}sense(t){let{list:e,V:i,base:n,wl:r,wr:a,dCorner:o,inside:l,straight:c}=t,h=this.drv,u=h.car,d=this.f,f={ahead:null,behind:null,aside:null,lapper:null,atkSide:0,atkInside:!1,coverSide:0,yieldSide:0,alongsideAny:!1,alongsideAttackerSide:!1},g=v=>Math.abs(v.dd);f.free=v=>!e.some(_=>!_.pace&&_.ds>-9&&_.ds<9&&Math.abs(u.d+_.dd-v)<2.8);for(let v of e){let _=v.c;v.pace||!_.rs||_.rs.inPitLane&&!(u.rs&&u.rs.inPitLane)||(v.ds>0&&v.ds<90&&g(v)<4.4&&(!f.ahead||v.ds<f.ahead.ds)&&(f.ahead=v),v.ds<-3&&v.ds>-70&&g(v)<5&&(!f.behind||v.ds>f.behind.ds)&&(f.behind=v),v.ds>-8&&v.ds<7&&g(v)<3.8&&(f.aside=f.aside||v,f.alongsideAny=!0),v.ds<0&&v.ds>-140&&_.rs.laps>u.rs.laps&&g(v)<8&&(!f.lapper||v.ds>f.lapper.ds)&&(f.lapper=v))}if(f.ahead){f.ahead.gap=f.ahead.ds-5.5,f.ahead.gapT=Math.max(0,f.ahead.gap)/Math.max(i,15);let v=i-f.ahead.v;this.closeRate=this.lastAhead===f.ahead.c?this.closeRate+(v-this.closeRate)*.15:v,this.lastAhead=f.ahead.c}else this.lastAhead=null,this.closeRate*=.9;if(f.behind&&(f.behind.gapT=-f.behind.ds/Math.max(i,15),f.behind.closing=f.behind.v-i),f.ahead){let v=f.ahead.c,_=C=>!e.some(D=>D!==f.ahead&&!D.pace&&D.ds>-9&&D.ds<f.ahead.ds+8&&Math.abs(u.d+D.dd-C)<2.3),M=v.info&&v.info.isPlayer?Jf:Zf,S=C=>{let D=v.d+C*M;return C>0?D<=r&&_(D):D>=-a&&_(D)},b=l&&o<340&&S(l),T=l?S(-l):!1,x=S(1),w=S(-1);b?(f.atkSide=l,f.atkInside=!0):l&&o<340&&T&&o>150?f.atkSide=-l:(!l||o>=340)&&(f.atkSide=x&&w?Math.abs(v.d+M-u.d)<Math.abs(v.d-M-u.d)?1:-1:x?1:w?-1:0),f.alongsideAttackerSide=!!e.some(C=>!C.pace&&C!==f.ahead&&C.ds>-7&&C.ds<6&&Math.abs(C.dd)<3.4&&Math.sign(C.dd)===f.atkSide),d.room=f.atkSide!==0?1:0}else d.room=0;if(f.behind){let v=f.behind;f.coverSide=v.dd>.8?1:v.dd<-.8?-1:l||1}f.lapper&&(f.yieldSide=f.lapper.dd>.5?-1:f.lapper.dd<-.5?1:l?-l:u.d>0?1:-1);let y=u.wetness||0,m=((u.damageFront||0)+(u.damageRear||0)+(u.damageFloor||0))/3+.5*((u.damageSideL||0)+(u.damageSideR||0))/2,p=u.rs&&u.rs.penalty>0?.3:0;return d.close=f.ahead?Z(1-(f.ahead.gapT-.15)/1.1,0,1):0,d.edge=f.ahead?Z(.45+this.closeRate/9+(u.drsAllowed?.2:0),0,1):0,d.corner=Z(1-(o-50)/350,0,1),d.brake=o>38&&o<210?1:0,d.straight=c&&o>170?1:0,d.drs=u.drsAllowed?1:0,d.threat=f.behind?Z(1-(f.behind.gapT-.1)/.9,0,1)*(f.behind.closing>-4?1:.5):0,d.lapped=f.lapper&&-f.lapper.ds/Math.max(i,15)<5?1:0,d.risk=Z(y*.55+m*.9+p,0,1),f}fill(t,e,i,n,r){let{base:a,wl:o,wr:l,now:c,V:h,race:u}=e,d=this.drv,f=d.car;t.action=r,t.side=this.side,t.target=null,t.brakeLate=1,t.push=1,t.yieldLift=1,t.rival=i&&i.ahead?i.ahead.c:null;let g=this.traits.aggr;if(i){let y=i.ahead,m=i.behind;if(r==="ATTACK"&&y){let p=y.c;t.target=Z(p.d+this.side*(p.info&&p.info.isPlayer?Jf:Zf),-l,o);let v=e.dCorner<200&&i.atkInside;t.brakeLate=v?1+Z(.035+.09*g*(1-this.f.risk),0,.11)*ge(0,.4,c-this.since+.2):1,t.push=1+.012*g}else if(r==="DRAFT"&&y)t.target=Z(y.c.d,-l,o);else if(r==="FOLLOW"&&y)e.inside&&e.dCorner<420&&(t.target=Z(y.c.d+e.inside*1.6,-l,o)),t.push=1+.004*g;else if(r==="COVER"){let p=Z(f.d+this.side*3.5,-l,o);i.free(p)&&(t.target=p),t.push=1+.008*g}else if(r==="BLOCK"){let p=this.side>0?o:l,v=Z(this.side*Math.max(.5,p-1.4),f.d-4.5,f.d+4.5);e.dCorner>38&&i.free(Z(v,-l,o))&&(t.target=Z(v,-l,o)),t.push=1+.008*g}else if(r==="YIELD"&&i.lapper){t.target=Z(this.side*3.4,-l,o);let p=-i.lapper.ds;t.yieldLift=p<40?.93:1}}return this.plan(e,t,i,r),t}plan(t,e,i,n){let{now:r,race:a}=t,o=this.drv,l=o.car;if(r<this.powerT)return;this.powerT=r+.5;let c=Math.max(0,a.lapsLeft(l)),h=n==="ATTACK"||n==="COVER"||n==="BLOCK",u=l.soc,d=1;h&&u>.18||c<=1.4&&u>.08?d=2:n==="FOLLOW"||n==="DRAFT"?d=u>.75?1:0:u<.3?d=0:u>.85&&(d=2),e.ers=d;let f=o.track,g=(l.rs?l.rs.maxDist:0)||0;if(this._fuel0==null)this._fuel0=l.fuel,this._dist0=g;else if(g-this._dist0>600){let p=(this._fuel0-l.fuel)/(g-this._dist0)*f.length/[.85,1,1.2][l.fuelMode];this.fuelPerLap=this.fuelPerLap?this.fuelPerLap*.6+p*.4:p,this._fuel0=l.fuel,this._dist0=g}let y=1;if(this.fuelPerLap>0){let p=(l.fuel-(c+.3)*this.fuelPerLap*1.03)/Math.max(this.fuelPerLap,.1);p<.2?y=0:h&&p>.8?y=2:n==="LINE"&&p<1&&p>.2&&c>3&&(y=1)}e.fuel=y}explain(){return{action:this.action,side:this.side,features:{...this.f},scores:{...this.scores},traits:{...this.traits},closeRate:this.closeRate}}};var bd=5.5,Xx=.02,Ra=22.2;function Yx(s){let t=Z(s,0,1.3),e=Math.min(1,t);return{pace:.8+.2*Math.pow(t,.8),mistakesPerLap:1.4*(1-e)**2+.03*(1-.6*Math.max(0,t-1)/.3),reaction:Math.max(.1,.55-.38*t),aggression:Math.min(1,.2+.7*t),lineScale:.55+.45*Math.min(1,t*1.4),brakeBias:.85+.13*e}}var Mn=class{constructor({car:t,track:e,profile:i,skill:n=1,level:r=.5,seed:a=1,teamIdx:o=0,boxS:l=null,boxD:c=null}){this.car=t,this.track=e,this.profile=i,this.skill=n,this.rng=We(a*7919+13),this.teamIdx=o,this.box={s:l,d:c},this.inp={throttle:0,brake:0,steer:0,drs:!1,boost:!1,gearUp:!1,gearDown:!1,pitLimit:0},this.setLevel(r),this.offset=0,this.offTarget=0,this.rcMode="free",this.neigh=[],this.neighTimer=0,this.paceAdapt=1,this.t=0,this.goTime=null,this.mistake=null,this.lastMistakeLap=-1,this.mistakeRoll=0,this.stuckT=0,this.lastMistakeCorner="",this.wantsPit=!1,this.pitState="none",this.pitDone=0,this.autopilotPit=!1,this.gripAdapt=1,this.lastLap=0,this.speedUp=1,this.prevD=new Map,this.brain=new dc(this),this.intent=this.brain.intent,this.managePower=!1}setLevel(t){this.level=t,this.raceK=1,this.dp=Yx(t),this.dp.pace*=this.track.def?.aiPace??1,this.react=this.dp.reaction*(.7+.6*this.rng())}basePath(t){return this.track.lineAt(t)*this.dp.lineScale}pathD(t,e=!0){let i=this.track,n=this.basePath(t)+(e?this.offset:0);if(this.pitState==="in"||this.pitState==="stopped"||this.pitState==="out"){let r=i._pitBlend(t);if(r>.001){let a=i.pitCentre(t)+1.4*r;if(this.box.s!=null){let o=Be(t,this.box.s,i.length),l=ge(-70,-18,o)*(1-ge(10,55,o));a=Kt(a,this.box.d,l)}n=Kt(n,a,ge(0,.45,r))}}return n}update(t,e){let i=this.car,n=this.track,r=this.inp,a=this.profile,o=i.speed;if(this.t+=t,this.raceK=e.opt&&e.opt.mode==="race"?1-Xx*ge(.75,1,this.level):1,e.phase==="grid"||e.phase==="countdown")return r.throttle=0,r.brake=1,r.steer=0,r.drs=!1,r.boost=!1,r.pitLimit=0,r;this.goTime===null&&(this.goTime=e.time+this.react+(this.releaseDelay||0));let l=i.s,c=this.pitState!=="none";if(this.neighTimer-=t,this.neighTimer<=0&&(this.neighTimer=1/30,this.scanTraffic(e)),this.gripT=(this.gripT||0)-t,this.gripT<=0){this.gripT=.5;let H=i.compound,G=0;for(let Mt=0;Mt<4;Mt++){let gt=Z(1-.2*((i.temp[Mt]-H.tOpt)/H.tRange)**2,.7,1.02),Nt=i.wear[Mt],q=1-.06*Nt-.2*ge(.62,1,Nt);G+=gt*q}G/=4;let nt=Math.max(i.puncture[0],i.puncture[1],i.puncture[2],i.puncture[3]);G*=Aa(H,i.wetness||0),G*=1-Z(.4*(i.damageFront||0)+.15*(i.damageRear||0)+.2*(i.damageFloor||0)+.12*((i.damageSideL||0)+(i.damageSideR||0))+.35*nt,0,.6);let at=Math.sqrt(Z(G/.96,.35,1));this.gripAdapt+=(Math.min(1,at)-this.gripAdapt)*.5}this.updateMistakes(e),this.updatePit(e),this.offset+=Z(this.offTarget-this.offset,-t*3.2,t*3.2);let h=l+Z(o*.09,1,9),u=this.pathD(l),d=this.pathD(h),f=(this.pathD(l+4)-2*this.pathD(l)+this.pathD(l-4))/16,g=n.at(n.curv,h),y=g/Math.max(.3,1-g*d)+f,m=(this.pathD(l+2)-this.pathD(l-2))/4,p=n.hdgAt(l)+Math.atan(m),v=Math.atan2(i.v,Math.max(i.u,2)),_=bn(i.theta+v-p),M=i.d-u,S=i.spec.wheelbase,b=Math.atan(S*y);b+=.0016*o*o*y,b-=1.15*_+Math.atan(1.9*M/(o+3));let T=i.spec.maxSteer/(1+(o/46)**2);r.steer=Z(b/T,-1,1);let x=Z(o*.09,2,14),w=n.idx(l+x),C=1-.06*(i.dirtyAir||0),D=this.intent,I=this.dp.pace*this.skill*this.raceK*this.paceAdapt*this.gripAdapt*C*D.push*D.yieldLift,L=a.v[w]*I*(this.mistake&&this.mistake.active?this.mistake.factor:1);this.managePower&&this.pitState==="none"&&Math.abs(g)<.0025&&Math.abs(y)<.003&&(L*=1+(r.drs?.05:0)+(r.boost?.02:0));let A=this.pitState!=="none"&&n._pitBlend(l)>.01;if((i.onGrass||!A&&(i.d>n.wl[i.i]+1.5||-i.d>n.wr[i.i]+1.5))&&(L=Math.min(L,28)),L=Math.min(L,this.trafficCap(L,e)),e.sc&&e.sc.state!=="none"&&(this.pitState==="none"||!n.inPitRange(i.s))){let H=i.ahead,G=H?Math.max(0,Be(H.s,i.s,n.length)):0,nt=Math.max(0,Be(e.sc.s,i.s,n.length));L=Math.min(L,40+.07*Math.min(H?G:nt,320))}if(r.pitLimit=0,this.pitState!=="none"){let H=n.pit.limitStart,G=re(H-l,n.length);if(this.pitState==="in"&&G<500&&!n.inPitLimiter(l)){let nt=re(n.pit.start-l,n.length),at=nt<n.length-80?Math.max(0,nt-6):0;L=Math.min(L,Math.sqrt(Ra*Ra*.94+18*at))}if((n.inPitLimiter(l)||this.pitState==="stopped")&&(L=Math.min(L,Ra*.97),r.pitLimit=Ra),this.pitState==="in"&&this.box.s!=null&&n.inPitLimiter(l)){let nt=Be(this.box.s,l,n.length);nt>-3&&nt<200&&(L=Math.min(L,Math.sqrt(2*6.5*Math.max(0,nt-.1))+.25))}this.pitState==="stopped"&&(L=0)}let P=0,O=0;{let H=i.brakeTemp,G=H?(.86+.14*ge(120,420,(H[0]+H[1]+H[2]+H[3])/4))*(1-.3*ge(880,1150,Math.max(H[0],H[1],H[2],H[3]))):1,nt=Math.max(12,a.env.brakeDecel(Math.max(o,5),.92)*this.gripAdapt*this.gripAdapt*G),at=o*o/(2*.4*nt)+40,Mt=0,gt=Math.max(1,Math.round(6/a.ds)),Nt=n.idx(l);for(let Ct=1,Pt=0;Pt<at;Ct+=gt){Pt=Ct*a.ds;let Wt=a.v[(Nt+Ct)%n.N]*I;if(o>Wt){let ne=(o*o-Wt*Wt)/(2*Math.max(Pt-2,1));ne>Mt&&(Mt=ne)}}if(this.pitState==="in")if(n.inPitLimiter(l)){if(this.box.s!=null){let Ct=Be(this.box.s,l,n.length);Ct>-2&&Ct<220&&o>2&&(Mt=Math.max(Mt,o*o/(2*Math.max(Ct-.3,.6))))}}else{let Ct=re(n.pit.start-l,n.length),Pt=re(n.pit.limitStart-l,n.length),Wt=Ra*.97,ne=Ct<n.length-80?Ct*.8:Pt;Pt<500&&o>Wt&&(Mt=Math.max(Mt,(o*o-Wt*Wt)/(2*Math.max(ne-3,1))))}let q=(i.aeroDrag+.014*i.mass*9.81)/i.mass,j=L-o,ct=j<-1.5?(-j-1.5)*2.2:0,Et=(.78-.14*(i.wetness||0))*this.dp.brakeBias*this.intent.brakeLate*(nt+q*.9),dt=0;for(let Ct of this.neigh){let Pt=o-Ct.v;if(Ct.ds<=0||Ct.ds>40+2.4*Math.max(0,Pt)||Pt<=0)continue;let Wt=Z(Math.max(Ct.ds-bd,1)/Pt,0,2.5),jt=(!!(Ct.c.rs&&Ct.c.rs.inPitLane)||Ct.c.driver&&Ct.c.driver.pitState==="out")&&!this.car.rs.inPitLane?9:2.6+Z(.07*Pt-.5,0,3);if(Math.min(Math.abs(Ct.dd),Math.abs(Ct.dd+(Ct.ddot||0)*Wt))>jt)continue;let he=Math.max(Ct.ds-bd-4,.8),Le=Math.max(0,-(Ct.c.axF||0))*.7;dt=Math.max(dt,Le+Pt*Pt/(2*he))}let Rt=Math.max(Mt>Et?Mt-q*.9:0,dt>.5*Et?dt-q*.5:0,ct);if(Rt>1.2)O=Z(Rt/nt,0,1);else{let Ct=Math.max(6,a.env.accel(Math.max(o,5),1)),Pt=1.8*j+0;P=Z(.16+(Pt+q)/(Ct+q),0,1),j>3&&(P=1);let Wt=Math.min(1,Math.abs(i.ayF)/Math.max(10,a.env.latAccel(Math.max(o,10),.97)*this.gripAdapt*this.gripAdapt));P=Math.min(P,.15+1.1*Math.sqrt(Math.max(0,1-Wt*Wt)));let ne=Math.max(Math.abs(i.alpha[2]),Math.abs(i.alpha[3]));ne>.06&&(P*=Z(1-(ne-.06)*18,.1,1))}(this.pitState==="stopped"||L<.3&&o<1)&&(P=0,O=1)}e.time<this.goTime?(P=0,O=1):o<15&&e.time-this.goTime<4&&this.pitState==="none"&&!this.neigh.some(H=>H.ds>0&&H.ds<12&&Math.abs(H.dd)<2.6&&H.v<o+3)&&(P=Math.max(P,1),O=0),r.throttle=P,r.brake=O;let B=Math.abs(g)<.0025&&Math.abs(y)<.003;r.drs=!!i.drsAllowed&&P>.95&&O<.05&&B;let W=e.sc&&e.sc.state!=="none",F=i.gapAhead??99;return r.boost=!W&&P>.95&&B&&i.soc>.12&&(F<1.8||i.soc>.55||e.lapsLeft(i)<=1||this.intent.ers===2&&i.soc>.1),this.managePower&&!W&&(i.ersMode=this.intent.ers,i.fuelMode=this.intent.fuel),o<1.2&&e.phase==="racing"&&e.time>this.goTime+6&&this.pitState!=="stopped"&&!(i.rs&&i.rs.service)&&!(this.pitState!=="none"&&this.neigh.some(H=>H.ds>0&&H.ds<14&&Math.abs(H.dd)<3.2))?this.stuckT+=t:this.stuckT=0,r}scanTraffic(t){let e=this.car,i=this.track,n=this.neigh;if(n.length=0,this.ignoreTraffic)return;let r=i.length;for(let _ of t.cars){if(_===e||_.retired||_.inGarage)continue;let M=Be(_.s,e.s,r);if(M<-60||M>190)continue;let S=this.prevD.get(_);if(!S)this.prevD.set(_,S={d:_.d,cd:e.d,t:t.time,ddot:0});else if(t.time-S.t>=.1){let T=t.time-S.t;S.ddot=Z((_.d-S.d)/T,-6,6)-Z((e.d-S.cd)/T,-6,6),S.d=_.d,S.cd=e.d,S.t=t.time}let b=S.ddot;n.push({c:_,ds:M,dd:_.d-e.d,v:_.speed,ddot:b})}let a=t.sc;if(a&&a.state!=="none"){let _=Be(a.s,e.s,r);_>0&&_<90&&n.push({c:a.pseudo,ds:_,dd:0,v:a.v,pace:!0})}let o=Math.max(e.speed,5),l=this.basePath(e.s),c=i.wl[e.i]-1.2,h=i.wr[e.i]-1.2,u=_=>i.at(i.curv,e.s+_),d=1/0,f=0;for(let _=30;_<=450;_+=15){let M=u(_);if(Math.abs(M)>.0035){d=_,f=Math.sign(M);break}}let g=Math.abs(u(0))<.0012&&Math.abs(u(35))<.0018,y=t.time,m=0,p=this.brain.think({list:n,V:o,base:l,wl:c,wr:h,dCorner:d,inside:f,straight:g,now:y,race:t});this.intent=p,this.blocker=p.rival&&n.find(_=>_.c===p.rival)||null;let v=p.action;this.rcMode=v==="ATTACK"?"attack":v==="DRAFT"?"draft":v==="COVER"||v==="BLOCK"?"defend":v==="YIELD"?"yield":"free",p.target!=null&&(m=Z(p.target-l,-12,12)),n.some(_=>_.ds>-8&&_.ds<7&&Math.abs(_.dd)<3.8)&&(m=this.offset);for(let _ of n)if(_.ds>-7&&_.ds<6&&Math.abs(_.dd)<3){let M=_.dd>0?-1:1,S=3-Math.abs(_.dd),b=_.ds>1.5?1.15:_.ds<-2?.55:.9;m+=M*S*b,this.rcMode=this.rcMode==="free"?"side":this.rcMode}a&&a.state!=="none"&&(this.rcMode="free",m=0),this.offTarget=Z(m,-h-l,c-l)}trafficCap(t,e){let i=this.car,n=1/0;for(let r of this.neigh){if(r.ds<=0||r.ds>40)continue;let a=Math.abs(r.dd);if(a>3)continue;let o=Z((3-a)/.9,0,1),l=r.ds-bd,c=(e.sc&&e.sc.state!=="none"?14:7.5)+6*(i.wetness||0),h=r.v+(l-c)*.9;n=Math.min(n,Kt(t,Math.max(h,2),o))}return n}updateMistakes(t){let e=this.car,i=this.track,n=this.mistake;if(n&&n.active){(Be(e.s,n.to,i.length)>0||Be(e.s,n.from,i.length)<-40)&&(n.active=!1);return}for(let r of i.corners){let a=Be(r.sApex,e.s,i.length);if(a>60&&a<140&&this.lastMistakeCorner!==r.id+":"+(e.rs?e.rs.laps:0)){this.lastMistakeCorner=r.id+":"+(e.rs?e.rs.laps:0);let o=this.dp.mistakesPerLap/Math.max(6,i.corners.length)*(1.5-this.skill+.5);this.rng()<o&&(this.mistake={active:!0,from:e.s,to:r.sApex+30,factor:1.06+.1*this.rng()+.05*(1-this.level)});break}}}updatePit(t){let e=this.car,i=this.track;if(!i.pit)return;let n=e.s,r=this.pitState;if(r==="none"){let a=re(i.pit.start-n,i.length);this.wantsPit&&this.box.s!=null&&a<340&&a>30&&t.phase==="racing"&&(this.pitState="in")}else if(r==="in"){if(!i.inPitRange(n)&&re(i.pit.start-n,i.length)>380){this.pitState="none";return}if(this.box.s!=null){let a=Be(this.box.s,n,i.length);if(a<-4&&i.inPitLimiter(n)&&e.speed>3){this.pitState="out";return}Math.abs(a)<1.4&&e.speed<1&&i.inPitLimiter(n)&&(this.pitState="stopped",e.pitStopped=!0)}}else r==="stopped"?e.pitStopped||(this.pitState="out",this.wantsPit=!1,this.pitDone++):r==="out"&&(i.inPitRange(n)||(this.pitState="none"))}};var Ie=[{id:"vettore",aiPace:.9523,setup:{front:1,rear:0},name:"Autodromo del Vettore",country:"Italy",blurb:"Temple of speed. Huge straights, heavy braking, chicanes. Run low downforce.",turns:-1,width:15,startAt:296,smooth:12,elevation:[[2,2.2,.6],[5,.9,2.1]],runoff:{mode:"modern",cornerRoom:14,grass:18},segments:[["S",1100,{free:!0}],["R",62,48,{n:"Prima Variante"}],["S",22],["L",52,50],["S",340],["R",340,52,{n:"Curva Grande"}],["S",520,{free:!0}],["L",85,36,{n:"Della Roggia"}],["S",22],["R",85,38],["S",140],["R",105,66,{n:"Lesmo 1"}],["S",190],["R",145,80,{n:"Lesmo 2"}],["S",610],["L",95,42,{n:"Ascari"}],["S",30],["R",72,82],["S",28],["L",95,44],["S",1e3],["R",210,150,{n:"Parabolica",free:!0}],["S",260]],pit:{in:-170,out:240,rampIn:60,rampOut:70,boxStart:12,boxSpacing:14},drs:[{detect:-420,start:60,end:1e3},{detect:3400,start:3560,end:4400}],theme:{sky:{top:"#2f6fc4",horizon:"#cfe3f3",sun:[.55,.62,-.3],sunColor:"#fff2d8"},fog:"#bcd3e6",fogFar:2600,grass:["#4d7a35","#5b8a3d"],trees:{density:.55,kind:"broadleaf"},stands:10,hills:.4}},{id:"rade",aiPace:.863,setup:{front:9,rear:9},name:"Circuit de la Rade",country:"Monaco-style harbour",blurb:"Tight street circuit between the barriers. No room for error. Run maximum downforce.",width:11,smooth:6,scale:1.15,elevation:[[1,6,1.2],[3,1.8,.4]],runoff:{mode:"street",gap:1.4,kerbs:!0},kerbWidth:1.1,lineMargin:.95,points:[[880,0,28],[180,0,26],[150,200,60],[260,330,36],[180,470,30],[360,560,24],[620,600,120],[780,520,60],[900,560,24],[1010,470,30],[960,380,28],[1010,290,30],[1e3,220,40],[940,100,80]],start:[0,330],pit:{in:-170,out:240,rampIn:60,rampOut:70,boxStart:12,boxSpacing:14},drs:[{detect:-120,start:20,end:380}],theme:{sky:{top:"#3b82d4",horizon:"#f4e6cf",sun:[.4,.55,.6],sunColor:"#ffe9c4"},fog:"#d6dde4",fogFar:1600,grass:["#6d8a4f","#74925a"],trees:{density:.05,kind:"palm"},buildings:!0,water:!0,stands:4,hills:.15}},{id:"northfield",aiPace:.868,setup:{front:5,rear:5},name:"Northfield Grand Prix Circuit",country:"England",blurb:"Flowing, fast and brutal on the tyres. Every corner leads into the next.",width:14.5,smooth:10,scale:.72,elevation:[[1,1.8,2.4],[3,.8,1]],runoff:{mode:"mixed",cornerRoom:13,grass:16},points:[[1e3,0,260],[1500,-150,100],[1850,-400,70],[1900,-640,60],[1700,-900,45],[1450,-800,60],[900,-1e3,90],[650,-1250,70],[300,-1300,100],[80,-1500,90],[-200,-1500,100],[-1100,-1560,100],[-1200,-900,150],[-1050,-400,90],[-800,-100,60],[-600,0,120]],start:[15,700],pit:{in:-170,out:240,rampIn:60,rampOut:70,boxStart:12,boxSpacing:14},drs:[{detect:-260,start:20,end:600},{detect:2900,start:3e3,end:3900}],theme:{sky:{top:"#5b86b8",horizon:"#dfe4e6",sun:[.35,.4,.8],sunColor:"#f4efe4"},fog:"#c9d2d6",fogFar:2400,grass:["#4a7d2f","#62923a"],trees:{density:.35,kind:"broadleaf"},stands:12,hills:.2}},{id:"ardennes",aiPace:.8937,setup:{front:6,rear:5},name:"Circuit des Hautes-Fagnes",country:"Belgian forest",blurb:"Huge elevation changes through the pines. Courage rewarded, mistakes punished.",width:14,smooth:10,scale:.85,elevation:[[1,14,.4],[2,7,2.6],[3,2.5,1.1]],runoff:{mode:"classic",cornerRoom:12,grass:14},points:[[0,220,22],[160,-120,150],[230,-520,100],[130,-800,90],[330,-1100,70],[300,-2e3,200],[150,-2350,90],[-100,-2500,60],[-350,-2300,40],[-420,-1800,70],[-300,-1200,200],[-250,-760,120],[-200,-520,60],[0,-470,40]],start:[13,150],pit:{in:-110,out:190,rampIn:45,rampOut:55,boxStart:6,boxSpacing:12},drs:[{detect:-150,start:20,end:250},{detect:1800,start:1900,end:2500}],theme:{sky:{top:"#4a6a8a",horizon:"#c5cdd2",sun:[.2,.35,.9],sunColor:"#e8e2d2"},fog:"#a8b6b8",fogFar:1800,grass:["#3d6a2c","#4c7a34"],trees:{density:1,kind:"pine"},stands:5,hills:1}},{id:"costa",aiPace:.8918,setup:{front:6,rear:6},name:"Aut\xF3dromo Costa Azul",country:"Portuguese coast",blurb:"Rollercoaster by the Atlantic: blind crests, a plunging hairpin and a long run to the line.",width:14,smooth:9,scale:.8,elevation:[[1,9,1.1],[2,4.5,3],[4,1.2,.5]],runoff:{mode:"modern",cornerRoom:13,grass:15},points:[[0,0,70],[1500,0,55],[1700,300,45],[1450,520,40],[1650,800,35],[1300,1e3,80],[800,900,90],[400,1100,50],[-200,1e3,60],[-350,600,90],[-100,350,45],[-400,150,60]],start:[0,650],pit:{in:-170,out:240,rampIn:60,rampOut:70,boxStart:12,boxSpacing:14},theme:{sky:{top:"#2a74c9",horizon:"#e8f0f2",sun:[.5,.5,.7],sunColor:"#fff0d2"},fog:"#cfe0ea",fogFar:2500,grass:["#6b8a3c","#7d9a47"],trees:{density:.18,kind:"pine"},water:!0,stands:8,hills:.6}},{id:"aurora",aiPace:.9022,setup:{front:4,rear:4},name:"Monte Aurora Ring",country:"Alpine valley",blurb:"Short, fast and wide open under the peaks. Big braking, bigger kerbs, no place to hide.",width:15,smooth:10,scale:.85,elevation:[[1,6,.3],[3,2.4,2]],runoff:{mode:"modern",cornerRoom:15,grass:20},points:[[0,0,110],[1e3,0,90],[1250,260,50],[1e3,430,38],[1200,660,48],[1e3,960,110],[500,1100,60],[330,800,34],[620,610,45],[150,520,60],[-150,300,80]],start:[0,420],pit:{in:-170,out:240,rampIn:60,rampOut:70,boxStart:12,boxSpacing:14},theme:{sky:{top:"#3c6fb0",horizon:"#dbe6ee",sun:[.3,.45,.85],sunColor:"#fff6e0"},fog:"#c3d3e0",fogFar:2700,grass:["#4f7f3a","#5f9246"],trees:{density:.6,kind:"pine"},stands:6,hills:1.2}},{id:"mirage",aiPace:.8982,setup:{front:2,rear:2},name:"Mirage International Circuit",country:"Desert",blurb:"Two enormous straights joined by hairpins in the sand. Power, brakes and traction decide it.",width:16,smooth:11,scale:.8,elevation:[[2,1.4,1]],runoff:{mode:"modern",cornerRoom:18,grass:12},points:[[0,0,80],[2e3,0,40],[2150,250,35],[1900,420,40],[1950,700,50],[1200,900,90],[600,700,40],[300,950,45],[-300,900,70],[-450,300,100]],start:[0,800],pit:{in:-170,out:240,rampIn:60,rampOut:70,boxStart:12,boxSpacing:14},theme:{sky:{top:"#3d86d6",horizon:"#f4e2c2",sun:[.6,.6,.2],sunColor:"#fff1cf"},fog:"#ead7b5",fogFar:2900,grass:["#c8a867","#d6b877"],trees:{density:.02,kind:"palm"},stands:8,hills:.15}},{id:"lumiere",aiPace:.8856,setup:{front:8,rear:8},name:"Parc Lumi\xE8re",country:"City park",blurb:"Tight, twisty ribbon through a city park lined with barriers. Rhythm over raw speed.",width:12,smooth:7,scale:1,elevation:[[1,3.5,.8],[3,1.2,2.2]],runoff:{mode:"street",gap:1.5,kerbs:!0},kerbWidth:1.1,lineMargin:1,points:[[0,0,40],[700,0,30],[800,200,35],[500,300,30],[600,550,40],[250,650,30],[300,900,45],[-200,950,35],[-350,600,40],[-100,420,30],[-300,200,35]],start:[0,330],pit:{in:-170,out:240,rampIn:60,rampOut:70,boxStart:12,boxSpacing:14},theme:{sky:{top:"#4a78b8",horizon:"#eadfce",sun:[.35,.5,.6],sunColor:"#ffe6bf"},fog:"#d0d6dc",fogFar:1700,grass:["#5d8a45","#6a9a50"],trees:{density:.35,kind:"broadleaf"},buildings:!0,stands:4,hills:.1}},{id:"porto",aiPace:.8708,setup:{front:6,rear:6},name:"Porto Vecchio Harbour Circuit",country:"Harbour town",blurb:"A long waterfront blast, then slow docks and warehouses. Heavy braking, tight exits, walls everywhere.",width:12.5,smooth:8,scale:.78,elevation:[[3,2.2,1.2],[8,2.6,1.6]],runoff:{mode:"street",gap:1.8,kerbs:!0},kerbWidth:1.1,lineMargin:1,points:[[0,0,60],[1400,0,50],[1700,120,35],[1750,450,30],[1500,600,40],[1550,850,35],[1100,950,50],[900,700,30],[600,800,30],[300,1e3,40],[-200,950,50],[-350,500,45],[-150,250,35]],start:[0,500],pit:{in:-170,out:240,rampIn:60,rampOut:70,boxStart:12,boxSpacing:14},theme:{sky:{top:"#3f8fd0",horizon:"#e6eef2",sun:[.4,.55,.5],sunColor:"#fff0d4"},fog:"#cfdde6",fogFar:2100,grass:["#6b8f4d","#789c58"],trees:{density:.12,kind:"palm"},buildings:!0,stands:5,hills:.2}},{id:"sakura",aiPace:.8723,setup:{front:5,rear:5},name:"Sakura Ridge Circuit",country:"Highlands",blurb:"Flowing esses over a wooded ridge: commit through the fast sweepers, brake for the hairpin, repeat.",width:14,smooth:9,scale:.86,elevation:[[2,7,1.2],[5,-6,1.4],[9,8,1.6]],runoff:{mode:"modern",cornerRoom:14,grass:10},points:[[0,0,90],[800,0,70],[1250,-200,45],[1650,-150,40],[1900,150,35],[1700,450,40],[1250,400,30],[1e3,650,35],[1300,950,45],[900,1200,50],[300,1050,40],[100,700,30],[-300,550,45],[-450,200,50]],start:[0,300],pit:{in:-170,out:240,rampIn:60,rampOut:70,boxStart:12,boxSpacing:14},theme:{sky:{top:"#5a8fcf",horizon:"#f2e3e6",sun:[.5,.45,.4],sunColor:"#ffe9d6"},fog:"#dcd6dd",fogFar:2300,grass:["#4f7f3d","#5c8c47"],trees:{density:.75,kind:"pine"},stands:5,hills:1}},{id:"bastide",aiPace:.8926,setup:{front:7,rear:7},name:"Circuit de la Bastide",country:"Riviera",blurb:"Walls everywhere on a medieval harbour town: short, tight and unforgiving. High downforce, no room for error.",width:11.5,smooth:7,scale:.6,elevation:[[2,3,1],[6,3.4,1.4]],runoff:{mode:"street",gap:1.6,kerbs:!0},kerbWidth:1,lineMargin:.9,points:[[0,0,55],[1500,0,45],[1800,250,30],[1600,600,30],[1900,900,35],[1450,1200,40],[1e3,1e3,28],[750,1300,30],[250,1150,38],[150,700,35],[-250,450,40]],start:[0,520],pit:{in:-170,out:240,rampIn:60,rampOut:70,boxStart:12,boxSpacing:14},theme:{sky:{top:"#4a8fd8",horizon:"#f0e6d8",sun:[.45,.5,.45],sunColor:"#fff0d0"},fog:"#d8d4cc",fogFar:1900,grass:["#738f55","#80995f"],trees:{density:.1,kind:"palm"},buildings:!0,stands:4,hills:.3}},{id:"caldera",aiPace:.8824,setup:{front:3,rear:2},name:"Caldera Speedway",country:"Volcanic Isles",blurb:"A fast, open bowl around a dormant volcano: long sweepers, big elevation and a flat-out final corner.",width:15,smooth:11,scale:.8,elevation:[[1,6,1.4],[4,-5,1.2],[7,7,1.6]],runoff:{mode:"modern",cornerRoom:16,grass:14},points:[[0,0,120],[1100,0,90],[1900,250,70],[2100,900,80],[1700,1500,90],[900,1650,70],[300,1250,60],[-200,800,70],[-400,300,80]],start:[0,400],pit:{in:-170,out:240,rampIn:60,rampOut:70,boxStart:12,boxSpacing:14},theme:{sky:{top:"#3d78c4",horizon:"#e9dcc8",sun:[.35,.6,.45],sunColor:"#fff2d8"},fog:"#d9d0c4",fogFar:2600,grass:["#5d7a3a","#6a8845"],trees:{density:.3,kind:"palm"},stands:6,hills:1.2}}],yS=Object.fromEntries(Ie.map(s=>[s.id,s]));var _d=0,Md=1,lr=2,cr=3,jf=30,Kx=720,Zx=[.97,1,1.025],Jx=[.85,1,1.2],jx=[.1,.3,.6],Qx=[1.6,1,.7],tb=3500,Sd={heat:.1,coolBase:.0011,coolSpeed:7e-5},eb=4e5,Qf={i:0,t:0,s:0,d:0,dist:0},uc=class s{constructor(t,e){this.rand=We(24301+7919*(s.count=(s.count||0)+1)),this.spec=t,this.track=e,this.assist={abs:!0,tc:2,steer:1,autoGear:!0,stability:1},this.wheelPos=[[0,0],[0,0],[0,0],[0,0]];let i=t.wheelbase;this.a=i*(1-t.weightFront),this.b=i*t.weightFront,this.wheelPos[_d]=[this.a,t.trackF/2],this.wheelPos[Md]=[this.a,-t.trackF/2],this.wheelPos[lr]=[-this.b,t.trackR/2],this.wheelPos[cr]=[-this.b,-t.trackR/2],this.omega=new Float64Array(4),this.alphaLag=new Float64Array(4),this.temp=new Float64Array(4).fill(85),this.brakeTemp=new Float64Array(4).fill(260),this.wear=new Float64Array(4),this.fz=new Float64Array(4),this.kappa=new Float64Array(4),this.alpha=new Float64Array(4),this.slipVis=new Float64Array(4),this.absF=new Float64Array(4).fill(1),this.surf=new Uint8Array(4),this.puncture=new Float64Array(4),this.boostOn=!1,this.flat=new Float64Array(4),this.wheelFx=new Float64Array(4),this.wheelFy=new Float64Array(4),this.fuel=t.fuelKg,this.soc=.6,this.harvesting=!1,this.ersMode=1,this.fuelMode=1,this.wetness=0,this.compound=t.compound,this.reset(0,0,0)}reset(t,e,i,n=0){this.x=t,this.y=e,this.theta=i,this.px=t,this.py=e,this.ptheta=i,this.u=n,this.v=0,this.r=0,this.kappa&&this.kappa.fill(0),this.slipVis&&this.slipVis.fill(0),this.alpha&&this.alpha.fill(0),this.harvesting=!1,this.steer=0,this.gear=1,this.rpm=this.spec.idleRpm,this.shiftTimer=0,this.sinceShift=1,this.throttle=0,this.brake=0,this.drsPos=0,this.axF=0,this.ayF=0,this.axBody=0,this.ayBody=0,this.stopTimer=0,this.revHold=0,this.kerbPhase=0,this.kerbShake=0,this.onGrass=!1,this.lastHint=-1,this.omega.fill(n/this.spec.wheelR),this.alphaLag.fill(0),this.absF.fill(1),this.pitch=0,this.roll=0,this.bottoming=0,this.locate()}get speed(){return Math.hypot(this.u,this.v)}get mass(){return this.spec.dryMass+this.fuel}get inertia(){return this.spec.izDry+this.fuel*.45}locate(){let t=this.track.project(this.x,this.y,this.lastHint,Qf);this.lastHint=t.i,this.i=t.i,this.s=t.s,this.d=t.d,this.trackH=this.track.at(this.track.z,t.s),this.trackSlope=this.track.slope[t.i],this.trackHeading=this.track.hdgAt(t.s)}_aero(t,e){let i=this.spec,n=.5*cc*t*t,r=1-.55*(this.damageFront||0),a=1-.55*(this.damageRear||0),o=((this.damageSideL||0)+(this.damageSideR||0))/2,l=1-.3*(this.damageFloor||0)-.2*o,c=this.drsPos,h=this.dirtyAir||0,u=1-.45*ge(.05,.4,Math.abs(e)),d=i.clAf*r*(1-.32*h)*l*u,f=i.clAr*a*(1-.14*h)*(1-i.drsLiftCut*c)*l*u,g=this.slipstream||0,y=i.cdA*(1-i.drsDragCut*c)*(1-.28*g)*(1+.12*(this.damageFront||0)+.1*(this.damageRear||0)+.08*o);return{q:n,downF:n*d,downR:n*f,drag:n*y}}step(t,e){let i=this.spec,n=this.mass,r=this.inertia,a=i.wheelbase,o=this.a,l=this.b;this.px=this.x,this.py=this.y,this.ptheta=this.theta;let c=this.u,h=this.v,u=this.r,d=Math.hypot(c,h),f=Math.atan2(h,Math.max(Math.abs(c),3))*(c<0?-1:1),g=Z(e.throttle,0,1),y=Z(e.brake,0,1),m=d;if(this.gear>=1?e.allowReverse&&m<1.5&&y>.4&&g<.05?(this.revHold+=t,this.revHold>.45&&(this.gear=-1,this.revHold=0)):this.revHold=0:this.gear<0&&(c>-1.5&&g>.4&&y<.05?(this.revHold+=t,this.revHold>.2&&(this.gear=1,this.revHold=0)):this.revHold=0),this.gear<0){let N=g;g=y,y=N}this.throttle+=Z(g-this.throttle,-t*14,t*9),this.brake+=Z(y-this.brake,-t*16,t*10);let p=this.throttle,v=this.brake;if(e.pitLimit>0){let N=m-e.pitLimit;p*=Z(1-N*.7,0,1)}this.drsPos+=Z((e.drs?1:0)-this.drsPos,-t*5,t*5);let _=this._aero(d,f),M=n,S=Yn,b=M*S*i.weightFront+_.downF,T=M*S*(1-i.weightFront)+_.downR,x=M*this.axF*i.hCg/a;b-=x,T+=x;let w=M*this.ayF*i.hCg*i.rollFrontShare/i.trackF,C=M*this.ayF*i.hCg*(1-i.rollFrontShare)/i.trackR,D=this.fz,I=(N,lt,Q)=>{let ot=N/2-lt,ut=N/2+lt;ot<60?(ot=60,ut=Math.max(60,N-60)):ut<60&&(ut=60,ot=Math.max(60,N-60)),D[Q]=ot,D[Q+1]=ut};I(Math.max(b,200),w,0),I(Math.max(T,200),C,2);let L=i.maxSteer/(1+d/46*(d/46)),A=L;if(this.assist.steer&&!e.aiDriven){let N=0;for(let ot=0;ot<4;ot++)N+=(i.mu0-i.loadSens*(D[ot]-i.fz0))*D[ot];let lt=0;for(let ot=0;ot<4;ot++){let ut=i.compound,st=Z(1-.2*((this.temp[ot]-ut.tOpt)/ut.tRange)**2,.7,1.02);lt+=st*(1-.06*this.wear[ot]-.2*ge(.62,1,this.wear[ot]))/4}N=N*i.compound.mu*.97*(.5+.5*lt*Aa(i.compound,this.wetness||0))/M;let Q=a*N/Math.max(d*d,1)+i.alphaPeak*.95;A=Math.min(L,Q)}let P=Z(e.steer,-1,1)*A;if(this.assist.stability&&d>6&&c>0){let N=[0,.7,1.1,1.5][this.assist.stability]??.7;P+=Z(f,-.4,.4)*N*ge(8,22,d)}P=Z(P,-i.maxSteer,i.maxSteer),this.steer+=Z(P-this.steer,-t*2.4,t*2.4);let O=this.steer,B=Math.tan(O),W=Math.atan2(a*B,a-i.trackF/2*B),F=Math.atan2(a*B,a+i.trackF/2*B),H=(this.omega[lr]+this.omega[cr])/2,G=0;this.gear>0?G=i.gearRatios[this.gear-1]:this.gear<0&&(G=-8.5);let nt=Math.abs(H)*Math.abs(G)*(30/Math.PI),at=nt;if(this.gear===1&&m<14&&(at=Math.max(at,i.idleRpm+(8200-i.idleRpm)*Math.max(p,.2))),at=Math.max(at,i.idleRpm),this.rpm=Kt(this.rpm,at,1-Math.exp(-t*40)),this.sinceShift+=t,this.shiftTimer>0&&(this.shiftTimer-=t),this.gear>=1){let N=!!e.gearUp,lt=!!e.gearDown;if(this.assist.autoGear){N=nt>i.shiftUpRpm&&this.gear<8;let Q=nt*(i.gearRatios[Math.min(this.gear,7)]/G);lt=this.gear>1&&nt<i.shiftDownRpm&&(this.gear===1||nt*(i.gearRatios[this.gear-2]/G)<i.maxRpm*.9),p>.92&&this.gear>1&&nt<9800&&this.sinceShift>.6&&(lt=nt*(i.gearRatios[this.gear-2]/G)<13800),N&&Q<8500&&(N=!1)}this.sinceShift>.22&&(N&&this.gear<8?(this.gear++,this.shiftTimer=.045,this.sinceShift=0):lt&&this.gear>1&&(this.gear--,this.shiftTimer=.03,this.sinceShift=0))}let gt=[9,.13,.09,.06][this.assist.tc]??9;if(this.assist.tc>0&&p>.02){let N=Math.max(this.kappa[lr],this.kappa[cr]);N>gt&&(p*=Z(1-(N-gt)*14,.1,1))}let Nt=0,q=this.soc>.01,j=!!e.boost&&q,ct=0;if(q&&p>.5&&this.gear>0&&!e.hold&&(ct=(j?1:jx[this.ersMode])*i.ersPower),this.boostOn=j&&ct>0,Math.abs(G)>0){let N=xd(this.rpm)*i.powerScale*p*Zx[this.fuelMode],lt=ct*i.powerScale*p/Math.max(this.rpm*Math.PI/30,300),Q=(30+.0075*this.rpm)*(1-p);Nt=N+lt-Q,this.fuel<=0&&(Nt=Math.min(Nt,0))}let Et=Nt*G*i.driveEff;e.hold&&(Et=0),this.shiftTimer>0&&(Et*=.05);let dt=this.omega[lr]-this.omega[cr],Rt=.5*Math.abs(Et)*.5+120,Ct=Z(dt*55,-Rt,Rt),Pt=Et/2-Ct,Wt=Et/2+Ct,ne=Math.cos(this.theta),jt=Math.sin(this.theta),he=i.wheelR,Le=i.mu0,je=i.pressure||0,Ee=1-.0045*(je+2*(this.wetness||0))**2,De=1+.06*je,V=1-.05*je,_e=i.compound,le=0,U=0,E=0,$=0,K=0,tt=this.tyreScale||1;for(let N=0;N<4;N++){let lt=N<2,Q=this.wheelPos[N][0],ot=this.wheelPos[N][1],ut=N===_d?W:N===Md?F:0,st=Math.cos(ut),Dt=Math.sin(ut),Lt=this.x+Q*ne-ot*jt,ye=this.y+Q*jt+ot*ne,de=this.track.project(Lt,ye,this.i,Qf),ke=this.track.surface(de.i,de.d);this.surf[N]=ke;let Si=_n[ke];ke===Gt.KERB?$++:(ke===Gt.GRASS||ke===Gt.GRAVEL)&&K++;let cn=D[N];ke===Gt.KERB&&(cn*=1+.22*Math.sin(this.kerbPhase*1+N*1.7)*Math.min(1,d/25));let Ya=c-u*ot,Mr=h+u*Q,Wi=Ya*st+Mr*Dt,Wc=-Ya*Dt+Mr*st,yi=Math.abs(Wi),Tn=(this.omega[N]*he-Wi)/Math.max(yi,2.2),hn=Math.atan2(Wc,Math.max(yi,1.2)),Sr=1-Math.exp(-Math.max(yi,1.2)*t/i.relaxLength);this.alphaLag[N]+=(hn-this.alphaLag[N])*Sr;let Ms=this.alphaLag[N],Ka=Z(1-.2*((this.temp[N]-_e.tOpt)/_e.tRange)**2,.7,1.02),es=this.wear[N],Za=1-.06*es-.2*ge(.62,1,es),$i=Math.max(.7,Le-i.loadSens*(cn-i.fz0))*_e.mu*Ka*Za*Si.grip*(lt?i.frontGrip:i.rearGrip);!lt&&i.launchGrip&&($i*=1+i.launchGrip*(1-ge(12,48,yi))),this.puncture[N]>0&&($i*=1-.55*this.puncture[N]),$i*=Ee*(1-.16*this.flat[N])*Aa(_e,this.wetness)*(ke===Gt.KERB?1-.14*this.wetness:1);let wr=Tn/i.kappaPeak,Er=Math.tan(Ms)/Math.tan(i.alphaPeak),Ss=Math.hypot(wr,Er)+1e-9,Ja=$i*cn*Math.sin(i.pacejkaC*Math.atan(i.pacejkaB*Ss)),Tr=Ja*wr/Ss,An=Tr,is=-Ja*Er/Ss;An-=Math.tanh(Wi*1.5)*Si.rr*cn,(ke===Gt.GRAVEL||ke===Gt.GRASS)&&(An-=Math.tanh(Wi*.6)*.05*cn*Math.min(1,yi/20));let R=lt?i.iFront:i.iRear+.012*G*G*.5,z=N===lr?Pt:N===cr?Wt:0,J=this.omega[N]*he-Wi,X=$i*cn*i.pacejkaC*i.pacejkaB/(i.kappaPeak*Math.max(yi,2.2)),Y=Math.abs(J)>1e-4?Math.min(X,Math.abs(Tr/J)):X,mt=this.omega[N]+t*(z-Tr*he)/(R+t*Y*he*he),St=lt?v*i.brakeTorque*i.brakeBias*.5:v*i.brakeTorque*(1-i.brakeBias)*.5;{let ue=this.brakeTemp[N];St*=(.86+.14*ge(120,420,ue))*(1-.3*ge(880,1150,ue))}if(v>.02&&this.assist.abs?(yi>4&&Math.abs(Tn)>i.kappaPeak*1.1&&Tn<0?this.absF[N]=Math.max(.1,this.absF[N]-14*t):this.absF[N]=Math.min(1,this.absF[N]+9*t),St*=this.absF[N]):this.absF[N]=1,this.brakeTemp[N]+=(St*Math.abs(mt)/Kx-(this.brakeTemp[N]-jf)*(.011+8e-4*d))*t,St>0){let ue=St/R*t;Math.abs(mt)<=ue?mt=0:mt-=Math.sign(mt)*ue}this.omega[N]=mt,this.kappa[N]=Tn,this.alpha[N]=Ms,this.wheelFx[N]=An,this.wheelFy[N]=is;let bt=Math.max(0,Ss-1);this.slipVis[N]=d>4?Z(bt*.8,0,1.5)*Z(yi/15,.3,1):0;let It=mt*he-Wi,Ft=Math.max(yi,2)*Math.tan(Math.abs(Ms)),Jt=Math.abs(An*It)+Math.abs(is)*Ft,te=.02*cn*yi;this.temp[N]+=(Sd.heat*(_e.wetTyre?.55:1)*De*(Jt+te)/tb-(this.temp[N]-jf)*(Sd.coolBase+Sd.coolSpeed*d)*(1+.6*this.wetness))*t;let At=yi>6&&Tn<-.6;At&&(this.temp[N]+=55*t*Z(1-(this.temp[N]-_e.tOpt)/75,0,1),this.flat[N]=Math.min(1,this.flat[N]+t*.5));let pe=Math.max(0,this.temp[N]-_e.tOpt-_e.tRange*.9)/30;this.wear[N]=Math.min(1.2,this.wear[N]+Jt*t/(_e.wearLaps*eb)*(this.wearMult??1)*V*(1+3*pe+(At?5:0)+(_e.wetTyre?2.5*(1-ge(.05,.4,this.wetness)):0))*tt);let Pe=An*st-is*Dt,ve=An*Dt+is*st;le+=Pe,U+=ve,E+=Q*ve-ot*Pe}let ht=Math.max(d,.001),yt=_.drag/ht;le-=yt*c,U-=.5*cc*i.cdSide*d*h;let et=this.trackSlope*Math.cos(bn(this.theta-this.trackHeading));le-=M*S*et*.8,this.kerbPhase+=t*(40+d*.9),this.kerbShake=$?Math.min(1,d/40):0,K&&(E-=u*400*K);let it=le/M,pt=U/M;this.axBody=it,this.ayBody=pt;let Ut=1-Math.exp(-t/.05);if(this.axF+=(it-this.axF)*Ut,this.ayF+=(pt-this.ayF)*Ut,this.u+=(it+h*u)*t,this.v+=(pt-c*u)*t,this.r+=E/r*t,Math.abs(this.u)<.35&&Math.abs(this.v)<.35&&p<.05&&(v>.05||Math.abs(this.r)<.05)){if(this.stopTimer+=t,this.stopTimer>.1){this.u*=.9,this.v*=.9,this.r*=.85,Math.abs(this.u)<.04&&(this.u=0),Math.abs(this.v)<.04&&(this.v=0),Math.abs(this.r)<.01&&(this.r=0);for(let N=0;N<4;N++)v>.05&&(this.omega[N]*=.8)}}else this.stopTimer=0;let xt=Math.cos(this.theta),vt=Math.sin(this.theta);this.x+=(this.u*xt-this.v*vt)*t,this.y+=(this.u*vt+this.v*xt)*t,this.theta+=this.r*t,this.theta>Math.PI?this.theta-=2*Math.PI:this.theta<-Math.PI&&(this.theta+=2*Math.PI);let Ot=(.0015+2e-4*Math.abs(this.u)*(.5+.75*p))*(this.fuelRate??1)*Jx[this.fuelMode];this.fuel=Math.max(0,this.fuel-Ot*t);let Bt=0,Xt=Qx[this.ersMode];v>.05&&this.gear>0?Bt=i.ersPower*Math.min(1,v*1.2)*Xt*Z(m/20,0,1):p<.05&&m>10&&(Bt=i.ersPower*.25*Xt),this.soc=Z(this.soc+(Bt-ct)*t/i.ersCapacity,0,1),this.harvesting=Bt>.2*i.ersPower&&this.soc<.999,this.locate(),this.pitch=Kt(this.pitch,Z(-this.axF*6e-4,-.025,.025),1-Math.exp(-t*5)),this.roll=Kt(this.roll,Z(-this.ayF*5e-4,-.025,.025),1-Math.exp(-t*5)),this.onGrass=K>=3,this.aeroDown=_.downF+_.downR,this.aeroDrag=_.drag,this.latG=this.ayF/Yn,this.longG=this.axF/Yn}tyreSummary(){let t=0,e=0;for(let i=0;i<4;i++)t+=this.wear[i]/4,e=Math.max(e,this.temp[i]);return{wear:t,temp:e}}fitTyres(t){this.compound=t,this.spec={...this.spec,compound:t},this.wear.fill(0),this.temp.fill(72),this.puncture.fill(0),this.flat.fill(0)}applyDamage(t,e,i){let n=t/55e3;if(e>1.5?this.damageFront=Math.min(1,(this.damageFront||0)+n*(.8+Math.abs(i)*.2)):e<-1.2?this.damageRear=Math.min(1,(this.damageRear||0)+n):Math.abs(i)>.55?(i>0?this.damageSideL=Math.min(1,(this.damageSideL||0)+n*.9):this.damageSideR=Math.min(1,(this.damageSideR||0)+n*.9),this.damageFloor=Math.min(1,(this.damageFloor||0)+n*.25)):this.damageFloor=Math.min(1,(this.damageFloor||0)+n*.5),n>.5){let r=e>0?i>0?_d:Md:i>0?lr:cr;this.rand()<Math.min(.5,n*.4)&&(this.puncture[r]=1)}}damageSummary(){let t=this.spec,e=this.damageFront||0,i=this.damageRear||0,n=this.damageFloor||0,r=this.damageSideL||0,a=this.damageSideR||0,o=(r+a)/2,l=1-.3*n-.2*o,c=t.clAf+t.clAr,h=t.clAf*(1-.55*e)*l+t.clAr*(1-.55*i)*l,u=Math.max(e,i,n,r,a);return{fw:e,rw:i,floor:n,sideL:r,sideR:a,aeroLoss:1-h/c,worst:u,severity:Math.max(e*.9,r*.7,a*.7,i*.6,n*.7)}}repair(){this.damageFront=this.damageRear=this.damageFloor=this.damageSideL=this.damageSideR=0}};function wd(s){let t=s.N,e=s.ds,i=new Float64Array(t),n=new Float64Array(t);for(let l=0;l<t;l++)i[l]=s.x[l]+s.nx[l]*s.lineD[l],n[l]=s.y[l]+s.ny[l]*s.lineD[l];let r=new Float64Array(t),a=2;for(let l=0;l<t;l++){let c=(l-a+t)%t,h=(l+a)%t,u=i[l]-i[c],d=n[l]-n[c],f=i[h]-i[l],g=n[h]-n[l],y=u*g-d*f,m=Math.hypot(u,d),p=Math.hypot(f,g),v=Math.hypot(i[h]-i[c],n[h]-n[c]);r[l]=2*y/(m*p*v+1e-9)}let o=new Float64Array(t);for(let l=0;l<t;l++)o[l]=(r[(l-1+t)%t]+2*r[l]+r[(l+1)%t])/4;return{px:i,py:n,kappa:o,ds:e}}function tp(s,t,e={}){let i=e.latUse??.9,n=e.brakeUse??.95,r=e.accelUse??1,a=t.dryMass+(e.fuel??30),o=Xf(t,a),{kappa:l,ds:c}=e.geometry||wd(s),h=s.N,u=110,d=e.highSpeedDerate??.2,f=_=>o.latAccel(_,i*(1-d*Math.min(1,Math.max(0,(_-60)/40)))),g=new Float64Array(h);for(let _=0;_<h;_++){let M=Math.abs(l[_]);if(M<1e-5){g[_]=u;continue}let S=4,b=u;for(let T=0;T<28;T++){let x=(S+b)/2;x*x*M>f(x)?b=x:S=x}g[_]=S}let y=(_,M)=>{let S=_*_*Math.abs(M),b=f(_),T=Math.min(1,S/b);return Math.sqrt(Math.max(.02,1-T*T))},m=Float64Array.from(g);for(let _=2*h;_>0;_--){let M=_%h,S=(_-1+h)%h,b=o.brakeDecel(m[M],n)*y(m[M],l[M]),T=Math.sqrt(m[M]*m[M]+2*b*c);T<m[S]&&(m[S]=T)}let p=Float64Array.from(g),v=2*h;for(let _=0;_<v;_++){let M=_%h,S=(_+1)%h,b=o.accel(p[M],r)*y(p[M],l[M]),T=Math.sqrt(Math.max(0,p[M]*p[M]+2*Math.max(b,0)*c));T<p[S]&&(p[S]=T)}for(let _=v;_>0;_--){let M=_%h,S=(_-1+h)%h,b=o.brakeDecel(p[M],n)*y(p[M],l[M]),T=Math.sqrt(p[M]*p[M]+2*b*c);T<p[S]&&(p[S]=T)}return{v:p,vBrake:m,kappa:l,ds:c,env:o,mass:a}}var vs={front:3,rear:-2.45,half:.98},Ca=vs.half,ip=Object.freeze({energy:0,speed:0,la:null,lb:null,lx:0,ly:0,wx:0,wy:0}),ib=[[vs.front,Ca],[vs.front,-Ca],[vs.rear,-Ca],[vs.rear,Ca]];function Ed(s,t){let e=Math.cos(s.theta),i=Math.sin(s.theta);for(let n=0;n<4;n++){let[r,a]=ib[n];t[n*2]=s.x+r*e-a*i,t[n*2+1]=s.y+r*i+a*e}}var Di=new Float64Array(8),ys=new Float64Array(8);function hr(s,t,e,i,n){let r=s.mass,a=s.inertia,o=Math.cos(s.theta),l=Math.sin(s.theta),c=s.u*o-s.v*l+t/r,h=s.u*l+s.v*o+e/r;s.u=c*o+h*l,s.v=-c*l+h*o,s.r+=(i*e-n*t)/a}function ep(s,t,e){let i=Math.cos(s.theta),n=Math.sin(s.theta);return[t*i+e*n,-t*n+e*i]}function dr(s,t,e){let i=Math.cos(s.theta),n=Math.sin(s.theta),r=s.u*i-s.v*n,a=s.u*n+s.v*i;return[r-s.r*e,a+s.r*t]}function np(s,t,e=.12){let i=t.x-s.x,n=t.y-s.y;if(i*i+n*n>49)return 0;Ed(s,Di),Ed(t,ys);let r=[[Math.cos(s.theta),Math.sin(s.theta)],[-Math.sin(s.theta),Math.cos(s.theta)],[Math.cos(t.theta),Math.sin(t.theta)],[-Math.sin(t.theta),Math.cos(t.theta)]],a=1/0,o=0,l=0;for(let[gt,Nt]of r){let q=1/0,j=-1/0,ct=1/0,Et=-1/0;for(let Rt=0;Rt<4;Rt++){let Ct=Di[Rt*2]*gt+Di[Rt*2+1]*Nt,Pt=ys[Rt*2]*gt+ys[Rt*2+1]*Nt;Ct<q&&(q=Ct),Ct>j&&(j=Ct),Pt<ct&&(ct=Pt),Pt>Et&&(Et=Pt)}let dt=Math.min(j,Et)-Math.max(q,ct);if(dt<=0)return 0;if(dt<a){a=dt;let Rt=(ct+Et)/2>(q+j)/2?1:-1;o=gt*Rt,l=Nt*Rt}}let c=0,h=0,u=0,d=(gt,Nt,q)=>{let j=Math.cos(q.theta),ct=Math.sin(q.theta),Et=gt-q.x,dt=Nt-q.y,Rt=Et*j+dt*ct,Ct=-Et*ct+dt*j;return Rt>vs.rear&&Rt<vs.front&&Math.abs(Ct)<Ca};for(let gt=0;gt<4;gt++)d(Di[gt*2],Di[gt*2+1],t)&&(c+=Di[gt*2],h+=Di[gt*2+1],u++),d(ys[gt*2],ys[gt*2+1],s)&&(c+=ys[gt*2],h+=ys[gt*2+1],u++);u?(c/=u,h/=u):(c=(s.x+t.x)/2,h=(s.y+t.y)/2);let f=s.mass,g=t.mass,y=c-s.x,m=h-s.y,p=c-t.x,v=h-t.y,_=ep(s,y,m),M=ep(t,p,v),S=a+.01;s.x-=o*S*(g/(f+g)),s.y-=l*S*(g/(f+g)),t.x+=o*S*(f/(f+g)),t.y+=l*S*(f/(f+g));let b=dr(s,y,m),T=dr(t,p,v),x=(T[0]-b[0])*o+(T[1]-b[1])*l;if(x>=0)return ip;let w=s.inertia,C=t.inertia,D=y*l-m*o,I=p*l-v*o,L=1/f+1/g+D*D/w+I*I/C,A=-(1+e)*x/L;hr(s,-A*o,-A*l,y,m),hr(t,A*o,A*l,p,v);let P=-l,O=o,B=dr(s,y,m),W=dr(t,p,v),F=(W[0]-B[0])*P+(W[1]-B[1])*O,H=y*O-m*P,G=p*O-v*P,nt=1/f+1/g+H*H/w+G*G/C,at=Z(-F/nt,-.25*A,.25*A);return hr(s,-at*P,-at*O,y,m),hr(t,at*P,at*O,p,v),{energy:.5*(1/(1/f+1/g))*x*x,la:_,lb:M,speed:-x}}var nb={i:0,t:0,s:0,d:0,dist:0};function sp(s,t,e=.2,i=.35){Ed(s,Di);let n=null,r=Math.cos(s.theta),a=Math.sin(s.theta),o=!1,l=(u,d,f,g,y)=>{let m=g-s.x,p=y-s.y,v=d*(u+.01),_=f*(u+.01);s.x+=v,s.y+=_;for(let W=0;W<4;W++)Di[W*2]+=v,Di[W*2+1]+=_;o=!0;let M=dr(s,m,p),S=M[0]*d+M[1]*f;if(S>=0)return;let b=s.mass,T=s.inertia,x=m*f-p*d,w=1/b+x*x/T,C=-(1+e)*S/w;hr(s,C*d,C*f,m,p);let D=-f,I=d,L=dr(s,m,p),A=L[0]*D+L[1]*I,P=m*I-p*D,O=Z(-A/(1/b+P*P/T),-i*C,i*C);hr(s,O*D,O*I,m,p);let B=.5*b*S*S;if(!n||B>n.energy){let W=m*r+p*a,F=-m*a+p*r;n={energy:B,lx:W,ly:F,speed:-S,wx:g,wy:y}}},c=0,h=0;t.pit&&t.pitWallRange(s.s)&&(h=t.pitWallLat(s.s),c=s.d>h?1:-1);for(let u=0;u<4;u++){let d=Di[u*2],f=Di[u*2+1],g=t.project(d,f,s.i,nb),y=g.d>=0?1:-1,m=t.wallDist(g.i,y),p=Math.abs(g.d)-m;if(p>0&&l(p,-y*t.nx[g.i],-y*t.ny[g.i],d,f),c&&t.pitWallRange(g.s)){let v=t.pitWallLat(g.s),_=c>0?v+.2-g.d:g.d-(v-.2);_>0&&l(_,c*t.nx[g.i],c*t.ny[g.i],d,f)}}return n||(o?ip:null)}var ce=[{id:"valdori",name:"Scuderia Valdori",short:"Valdori",color:"#d8102b",accent:"#ffffff",livery:"stripe",rating:.92},{id:"aurelian",name:"Aurelian Silver Arrows",short:"Aurelian",color:"#b8c2cc",accent:"#00c7b0",livery:"split",rating:1},{id:"northstar",name:"Northstar Motorsport",short:"Northstar",color:"#18286b",accent:"#e6232f",livery:"chevron",rating:.97},{id:"helix",name:"Helix Dynamics",short:"Helix",color:"#ff7a14",accent:"#101820",livery:"stripe",rating:.84},{id:"kestrel",name:"Kestrel GP",short:"Kestrel",color:"#0b6e4f",accent:"#d6f23c",livery:"chevron",rating:.7},{id:"vortex",name:"Vortex Sport",short:"Vortex",color:"#6a2fb5",accent:"#ff4fd8",livery:"split",rating:.62},{id:"ironside",name:"Ironside Racing",short:"Ironside",color:"#23272e",accent:"#f2b705",livery:"stripe",rating:.5},{id:"solace",name:"Solace Racing",short:"Solace",color:"#f6f6f2",accent:"#ff5c8a",livery:"chevron",rating:.4},{id:"marlin",name:"Marlin Performance",short:"Marlin",color:"#12a3c4",accent:"#0a2540",livery:"split",rating:.3},{id:"tempest",name:"Tempest Auto",short:"Tempest",color:"#f2d400",accent:"#111111",livery:"stripe",rating:.15}],rp=[["Luca Ferraro","FER",16,.95],["Matteo Bellini","BEL",55,.5],["Oliver Hartwell","HAR",44,1],["Jonas Eklund","EKL",63,.75],["Callum Reid","REI",1,.98],["Sven Aaltonen","AAL",11,.7],["Diego Marquez","MAR",14,.85],["Kenji Arakawa","ARA",22,.8],["Tom\xE1s Vidal","VID",23,.6],["\xC9tienne Lacroix","LAC",10,.65],["Anders Nyberg","NYB",27,.55],["Rafael Duarte","DUA",77,.7],["Idris Okafor","OKA",3,.5],["Hana Weiss","WEI",18,.45],["Pavel Novak","NOV",31,.55],["Mateo Rossi","ROS",9,.4],["Yuto Mori","MOR",24,.5],["Ben Carroway","CAR",81,.35],["Santiago Ibarra","IBA",6,.35],["Finn Lindqvist","LIN",99,.3]].map(([s,t,e,i])=>({name:s,code:t,number:e,talent:i}));var Td=["power","aero","grip"],Sn=6,ur={power:{name:"Power unit",blurb:"+1.2 % engine output per level",per:.012},aero:{name:"Aerodynamics",blurb:"+1.4 % downforce per level",per:.014},grip:{name:"Chassis & tyres",blurb:"+0.6 % mechanical grip per level",per:.006}},Pa=[{id:"sprint",name:"Sprint",km:14},{id:"standard",name:"Standard",km:28},{id:"grandprix",name:"Grand Prix",km:50}];function ap(s=4){let t=Ie.map(i=>i.id),e=Math.max(1,Math.min(Fa,Math.round(Number.isFinite(+s)?+s:4)));return Array.from({length:e},(i,n)=>t[n%t.length])}var Fa=24,sb={laps:0,fieldSize:20,playerGrid:12,weather:"forecast",tyreWear:3,damage:!0,collisions:!0,mandatoryStop:!1,adaptive:!1,pitCalls:"radio",prize:1,creep:!0},rb=["forecast","dry","light","heavy","changing"];function Kn(s){let t=s&&typeof s=="object"&&!Array.isArray(s)?s:{},e=sb,i=(o,l,c,h)=>(typeof o=="number"||typeof o=="string"&&o.trim()!=="")&&Number.isFinite(+o)?Math.max(l,Math.min(c,Math.round(+o))):h,n=(o,l)=>typeof o=="boolean"?o:l,r=i(t.fieldSize,2,20,e.fieldSize),a=[.5,1,2,5];return{laps:i(t.laps,0,30,e.laps),fieldSize:r,playerGrid:i(t.playerGrid,1,r,Math.min(e.playerGrid,r)),weather:rb.includes(t.weather)?t.weather:e.weather,tyreWear:[0,1.5,3,6].includes(+t.tyreWear)&&t.tyreWear!==null&&t.tyreWear!==""?+t.tyreWear:e.tyreWear,damage:n(t.damage,e.damage),collisions:n(t.collisions,e.collisions),mandatoryStop:n(t.mandatoryStop,e.mandatoryStop),adaptive:n(t.adaptive,e.adaptive),pitCalls:["off","radio","auto"].includes(t.pitCalls)?t.pitCalls:e.pitCalls,prize:a.includes(+t.prize)?+t.prize:e.prize,creep:n(t.creep,e.creep)}}function fc(s,t){let e=s.rules&&s.rules.laps;return e>0?e:ab(t,s.distance)}var pc=ap(4);function ab(s,t="standard"){let e=Pa.find(i=>i.id===t)||Pa[1];return Math.max(2,Math.min(30,Math.round(e.km*1e3/s)))}var mc=["dry","light","heavy","changing"],op={dry:"Dry",light:"Light rain",heavy:"Heavy rain",changing:"Showers possible"};function lp(s,t=Math.random){let e=["dry","dry","dry","dry","dry","changing","changing","light","heavy"];return Array.from({length:s},(i,n)=>n===0?"dry":e[Math.floor(t()*e.length)])}function fr(s=4){let t=ap(s);return{calendar:t,round:0,points:{},teamPoints:{},teamOf:{},results:[],weather:lp(t.length)}}var Na=(s,t=s.round)=>s.weather&&mc.includes(s.weather[t])?s.weather[t]:"dry",gc=s=>s.round>=s.calendar.length;function Ad(s,t){let e={round:s.round,trackId:s.calendar[s.round],order:[]};for(let i of t){let n=i.info.name,r=i.info.team.short;s.points[n]=(s.points[n]||0)+i.points,s.teamPoints[r]=(s.teamPoints[r]||0)+i.points,s.teamOf[n]=r,e.order.push({name:n,team:r,pos:i.pos,pts:i.points,grid:i.gridPos})}return s.results.push(e),s.round++,e}function xs(s){return[...new Set([...Object.keys(s.points),...Object.keys(s.teamOf)])].map(e=>({name:e,team:s.teamOf[e]||"",pts:s.points[e]||0})).sort((e,i)=>i.pts-e.pts||(e.name==="You"?-1:0)-(i.name==="You"?-1:0))}function bs(s){return Object.entries(s.teamPoints).map(([t,e])=>({team:t,pts:e})).sort((t,e)=>e.pts-t.pts)}var Ia=s=>[...ce].sort((t,e)=>e.rating-t.rating).findIndex(t=>t===ce[s]);function Ua(s){let t=Ia(s);return{finish:Math.min(16,t===0?2:2*t+2),constructor:Math.min(10,t+1)}}function ob(s,t,e=!1){return([20,15,12,10,8,7,6,5,4,3][s-1]??2)+(t?8:0)+(e?3:0)}var Rd=s=>12+10*s;function cp(s={}){let t=e=>Math.max(0,Math.min(Sn,Math.round(s[e]||0)));return{power:1+ur.power.per*t("power"),aero:1+ur.aero.per*t("aero"),grip:1+ur.grip.per*t("grip")}}function hp({team:s=6,level:t=.55,rounds:e=4,distance:i="standard",rules:n={}}={}){return{v:1,team:Math.max(0,Math.min(ce.length-1,Math.round(s))),level:t,rounds:Math.max(1,Math.min(Fa,Math.round(Number.isFinite(+e)?+e:4))),distance:i,rules:Kn(n),seasonNo:1,budget:20,upgrades:{power:0,aero:0,grip:0},season:fr(e),history:[],seasonRecap:null}}function dp(s,t){if(!Td.includes(t))return{ok:!1,reason:"unknown"};let e=s.upgrades[t]||0;if(e>=Sn)return{ok:!1,reason:"maxed"};let i=Rd(e);return s.budget<i?{ok:!1,reason:"budget",cost:i}:(s.budget-=i,s.upgrades[t]=e+1,{ok:!0,cost:i})}function up(s,t,e){let i=t.order.find(l=>l.name==="You"),n=Ua(s.team),r=!!i&&i.pos<=n.finish,a=e.find(l=>l.info.isPlayer&&Number.isFinite(l.best)&&l.best===Math.min(...e.map(c=>c.best))),o=Math.round(ob(i?i.pos:20,r,!!a)*(s.rules&&s.rules.prize||1));return s.budget+=o,{pos:i?i.pos:null,met:r,prize:o,objective:n.finish,fastest:!!a}}function Cd(s){let t=s.season,e=xs(t),i=bs(t),n=e.findIndex(h=>h.name==="You")+1,r=i.findIndex(h=>h.team===ce[s.team].short)+1,a=Ua(s.team),o={seasonNo:s.seasonNo,team:s.team,driverPos:n,teamPos:r,points:t.points.You||0,champion:n===1,constructorObjective:a.constructor,metConstructor:r>0&&r<=a.constructor,wins:t.results.filter(h=>h.order.some(u=>u.name==="You"&&u.pos===1)).length,podiums:t.results.filter(h=>h.order.some(u=>u.name==="You"&&u.pos<=3)).length,offers:[]},l=Ia(s.team),c=ce.map((h,u)=>({i:u,r:Ia(u)})).sort((h,u)=>h.r-u.r);for(let{i:h,r:u}of c)h!==s.team&&u<l&&n<=2*u+3&&o.offers.push(h);return o.offers=o.offers.slice(0,3),s.history.push({...o,offers:void 0}),s.seasonRecap=o,lb(s,o),o}function lb(s,t){s.budget+=Math.round(((t.champion?40:t.driverPos<=3?20:8)+(t.metConstructor?15:0))*(s.rules&&s.rules.prize||1))}function fp(s,t=s.team){return t!==s.team&&(s.team=t,s.upgrades={power:0,aero:0,grip:0}),s.seasonNo++,(!s.rules||s.rules.creep!==!1)&&(s.level=Math.min(Math.max(1,s.level),s.level+.04)),s.season=fr(s.rounds),s.seasonRecap=null,s}var _i=(s,t=0,e=9999)=>Math.max(t,Math.min(e,Math.round(Number.isFinite(+s)?+s:0))),La=(s,t=40)=>String(s??"").replace(/[<>&"'`]/g,"").slice(0,t);function Da(s){let t={};if(s&&typeof s=="object"&&!Array.isArray(s))for(let[e,i]of Object.entries(s).slice(0,80))Number.isFinite(+i)&&(t[La(e,40)]=_i(i,0,9999));return t}function Pd(s){let t={};if(s&&typeof s=="object"&&!Array.isArray(s))for(let[e,i]of Object.entries(s).slice(0,80))t[La(e,40)]=La(i,40);return t}function Id(s){if(!Array.isArray(s))return[];let t=Ie.map(e=>e.id);return s.slice(0,40).filter(e=>e&&typeof e=="object").map(e=>({round:_i(e.round,0,99),trackId:t.includes(e.trackId)?e.trackId:t[0],order:(Array.isArray(e.order)?e.order:[]).slice(0,24).filter(i=>i&&typeof i=="object").map(i=>({name:La(i.name,28),team:La(i.team,12),pos:_i(i.pos,1,99),pts:_i(i.pts,0,99),grid:_i(i.grid,0,99)}))}))}function pp(s){return!s||typeof s!="object"?null:{seasonNo:_i(s.seasonNo,1,99),team:_i(s.team,0,ce.length-1),driverPos:_i(s.driverPos,0,99),teamPos:_i(s.teamPos,0,99),points:_i(s.points,0,9999),champion:!!s.champion,constructorObjective:_i(s.constructorObjective,0,99),metConstructor:!!s.metConstructor,wins:_i(s.wins,0,99),podiums:_i(s.podiums,0,99)}}function cb(s){let t=pp(s);return t?{...t,offers:(Array.isArray(s.offers)?s.offers:[]).map(e=>_i(e,0,ce.length-1)).slice(0,3)}:null}function mp(s){try{if(!s||typeof s!="object"||s.v!==1)return null;let t=(a,o,l,c)=>Number.isFinite(+a)?Math.max(o,Math.min(l,+a)):c,e=!s.rules&&s.rounds>=8?Ie.length:Math.round(t(s.rounds,1,Fa,4)),i=s.season&&Array.isArray(s.season.calendar)?s.season:fr(e),n=Ie.map(a=>a.id);if(i.calendar=i.calendar.filter(a=>n.includes(a)),!i.calendar.length)return null;i.round=Math.round(t(i.round,0,i.calendar.length,0)),i.points=Da(i.points),i.teamPoints=Da(i.teamPoints),i.teamOf=Pd(i.teamOf),i.results=Id(i.results),(!Array.isArray(i.weather)||i.weather.length<i.calendar.length)&&(i.weather=lp(i.calendar.length)),i.weather=i.weather.map(a=>mc.includes(a)?a:"dry");let r=s.upgrades||{};return{v:1,team:Math.round(t(s.team,0,ce.length-1,6)),level:t(s.level,0,1.3,.55),rounds:e,rules:Kn(s.rules),distance:Pa.some(a=>a.id===s.distance)?s.distance:"standard",seasonNo:Math.round(t(s.seasonNo,1,99,1)),budget:Math.round(t(s.budget,0,9999,0)),upgrades:{power:Math.round(t(r.power,0,Sn,0)),aero:Math.round(t(r.aero,0,Sn,0)),grip:Math.round(t(r.grip,0,Sn,0))},season:i,history:(Array.isArray(s.history)?s.history.slice(-40):[]).map(pp).filter(Boolean),seasonRecap:cb(s.seasonRecap)}}catch{return null}}var wn={start:.15,spacing:.5,win:.45,sweet:.72,perfect:.07,good:.17,base:2.5,goodCost:.12,missCost:.9};function gp(){return{w:[0,1,2,3].map(()=>({res:null,p:-1})),done:!1,dur:1/0,perfects:0,goods:0,misses:0}}var db=s=>s.w.findIndex(t=>!t.res);function yp(s,t,e){let i=[];if(s.done)return i;for(let n=0;n<4;n++)s.w[n].res||(s.w[n].p=(t-(wn.start+n*wn.spacing))/wn.win);if(e){let n=db(s);if(n>=0){let r=s.w[n];if(r.p>-.25){let a=Math.abs(Math.max(0,r.p)-wn.sweet);r.res=r.p<0?"miss":a<=wn.perfect?"perfect":a<=wn.good?"good":"miss",r.res==="perfect"?s.perfects++:r.res==="good"?s.goods++:s.misses++,i.push({k:n,res:r.res})}}}for(let n=0;n<4;n++){let r=s.w[n];!r.res&&r.p>=1&&(r.res="miss",s.misses++,i.push({k:n,res:"miss"}))}return s.w.every(n=>n.res)&&(s.done=!0,s.dur=Math.max(wn.base+s.goods*wn.goodCost+s.misses*wn.missCost,t+.2)),i}var fi=1/240,vp={standard:{name:"Standard",power:1,aero:1,grip:1,launch:0},quick:{name:"Quick",power:1.08,aero:1.03,grip:1.03,launch:.12},rocket:{name:"Rocket",power:1.3,aero:1.08,grip:1.07,launch:.35}},pr={power:1,aero:1,grip:1,launch:0},vc=[{id:"rookie",name:"Rookie",level:.08,blurb:"Relaxed pace, frequent mistakes"},{id:"amateur",name:"Amateur",level:.3,blurb:"Learn the circuit without pressure"},{id:"pro",name:"Pro",level:.55,blurb:"Fair fight, occasional errors"},{id:"elite",name:"Elite",level:.8,blurb:"Fast, aggressive, rarely wrong"},{id:"legend",name:"Legend",level:1,blurb:"Every car at the limit"},{id:"f1",name:"F1",level:1.15,blurb:"Professional race drivers: flawless, relentless, and they race you"}],Ld={mode:"race",qualiTime:180,weather:"dry",safetyCar:!0,equalCars:!0,upgrades:null,qualiTimes:null,laps:5,level:.55,adaptive:!1,fieldSize:20,playerTeam:1,playerGrid:12,collisions:!0,damage:!0,tyreWear:3,mandatoryStop:!1,pitCalls:"radio",compound:"medium",setup:{frontWing:null,rearWing:null,brakeBias:.58,pressure:0},assists:{abs:!0,tc:2,steer:1,stability:1,autoGear:!0,pitAuto:!0,pitGame:!0},seed:1},ub=.2;function fb(s){return We(s*104729+7)}var yc=class{constructor(t,e={}){this.track=t,this.opt={...Ld,...e,assists:{...Ld.assists,...e.assists||{}},setup:{...Ld.setup,...e.setup||{}}};let i=this.opt;this.rng=fb(i.seed),this.time=0,this.t0=null,this.phase="grid",this.lights=0,this.lightsOutAt=null,this.isQuali=i.mode==="qualifying",this.isQuali&&(i.collisions=!1),this.totalLaps=i.mode==="timetrial"?9999:this.isQuali?999:i.laps,this.events=[],this.cars=[],this.sorted=[],this.chequered=!1,this.chequeredAt=null,this.stepCount=0,this.ghostStart=0,this.profileCache=new Map,this.pairContact=new Map,this.fastest={time:1/0,car:null,lap:0},this.bestSectors=[1/0,1/0,1/0],this.ghostRec=[],this.ghostBest=null,this.sc={state:"none",s:0,v:0,t:0,clearT:0,count:0,pseudo:{s:0,d:0,speed:0,axF:0,info:{},rs:{}},ahead:null},this.yellow=!1,this.rain=0,this.wet=0,this.setupWeather(),this.setupField()}get playerCar(){return this.player}teamSetup(t){return t.setup||{front:5,rear:5}}getProfile(t,e){let i=this.profileCache.get(e);return i||(i=tp(this.track,t,{fuel:25,geometry:this.geometry||(this.geometry=wd(this.track))}),this.profileCache.set(e,i)),i}makeCarSpec(t,e,i){let n=this.opt,r=this.track.def.setup||{front:5,rear:5},a=this.isQuali?14:this.opt.mode==="timetrial"?18:Z(Math.min(this.totalLaps,60)*(this.track.length/1e3)*ub*1.1+2,6,105),o=n.equalCars?1:t.rating,l=.985+.015*o,c=i?{frontWing:n.setup.frontWing??r.front,rearWing:n.setup.rearWing??r.rear,brakeBias:n.setup.brakeBias,pressure:n.setup.pressure}:{frontWing:r.front,rearWing:r.rear},h=qf({...c,compound:e,performance:.972+.028*o,fuel:a});if(h.frontGrip*=l*pr.grip,h.rearGrip*=l*pr.grip,h.powerScale*=pr.power,h.clAf*=pr.aero,h.clAr*=pr.aero,h.launchGrip=pr.launch,i&&!n.upgrades){let u=vp[n.carPower]||vp.standard;h.powerScale*=u.power,h.clAf*=u.aero,h.clAr*=u.aero,h.frontGrip*=u.grip,h.rearGrip*=u.grip,h.launchGrip+=u.launch||0}if(i&&n.upgrades){let u=cp(n.upgrades);h.powerScale*=u.power,h.clAf*=u.aero,h.clAr*=u.aero,h.frontGrip*=u.grip,h.rearGrip*=u.grip}return h}setupField(){let t=this.opt,e=this.track,i=this.rng,n=t.mode==="timetrial",r=[];ce.forEach((y,m)=>{for(let p=0;p<2;p++)r.push({team:y,ti:m,driver:rp[m*2+p],seat:m*2+p})});let a=Z(t.playerTeam,0,ce.length-1),o=r.findIndex(y=>y.ti===a),l=r.findIndex((y,m)=>y.ti===a&&m!==o),c=r.filter((y,m)=>m!==o);if(n)c=[];else{let y=Z(t.fieldSize,2,20)-1;for(;c.length>y;){let m=Math.floor(i()*c.length);r[l]!==c[m]&&c.splice(m,1)}}c.forEach(y=>y.q=y.team.rating*.55+y.driver.talent*.45+(i()-.5)*.16),c.sort((y,m)=>m.q-y.q);let h=c.map(y=>({seat:y,player:!1})),u=Z(Math.round(t.playerGrid)-1,0,h.length);if(h.splice(n?0:u,0,{seat:r[o],player:!0}),t.qualiTimes&&!this.isQuali&&!n){let y=t.qualiTimes,m=p=>y[p.player?"YOU":p.seat.driver.code]??1/0;h=h.map((p,v)=>({g:p,i:v})).sort((p,v)=>m(p.g)-m(v.g)||p.i-v.i).map(p=>p.g)}let d=["soft","medium","hard"],f=t.driver&&t.driver.code||"YOU",g=t.driver&&t.driver.number||7;h.forEach((y,m)=>{let{seat:p,player:v}=y,_=p.team,M=Math.max(1.5,this.totalLaps*.5)*1.15,S=d.filter(I=>this.tyreLife(I)>=M),b=i(),T=v?t.compound:S.length?S[b<.5?0:b<.85?Math.min(1,S.length-1):S.length-1]:"hard";!v&&this.wet>.4&&(T="wet");let x=this.makeCarSpec(_,T,v),w=new uc(x,e);n&&(w.fuelRate=0),w.wearMult=t.tyreWear;let C=e.gridSlot(m),D=e.pointAt(C.s,C.d);if(w.reset(D.x,D.y,D.heading,0),w.info={name:v?"You":p.driver.name,code:v?f:p.driver.code,number:v?g:p.driver.number===g?7:p.driver.number,team:_,teamIdx:p.ti,isPlayer:v,gridPos:m+1,talent:p.driver.talent},w.assist=v?{abs:t.assists.abs,tc:t.assists.tc,steer:t.assists.steer?1:0,stability:t.assists.stability,autoGear:t.assists.autoGear}:{abs:!0,tc:2,steer:0,autoGear:!0,stability:1},w.rs=this.makeRaceState(w,C),w.rs.compounds=[T],w.drsAllowed=!1,w.gapAhead=99,!v&&!n){let I=this.getProfile(x,`${_.id}:${T}`),L=new Mn({car:w,track:e,profile:I,level:t.level,seed:t.seed*31+m,teamIdx:p.ti,skill:.982+.018*p.driver.talent,boxS:e.pit?e.pitBox(p.ti).s:null,boxD:e.pit?e.pitBox(p.ti).d:null});w.driver=L,L.managePower=!this.isQuali&&!n,this.isQuali&&(L.releaseDelay=m*2.4,L.ignoreTraffic=!0);let A=Math.round(this.totalLaps*(.35+.35*i()));w.rs.plannedStop=!this.isQuali&&this.totalLaps>=4&&(t.mandatoryStop||t.tyreWear>=2.5||i()<.3)?Math.max(1,A):null}v&&(this.player=w,w.rs.pilot=null),this.cars.push(w)});for(let y of this.cars)y.wetness=this.wet;this.sorted=[...this.cars],this.updateRank()}makeRaceState(t,e){let i=this.track.length,n=-re(this.track.length-e.s,i),r=this.track.cpCount;return{lastS:t.s,dist:n,maxDist:n,laps:0,lapStart:0,lapTimes:[],tele:[],stopLaps:[],last:null,best:1/0,sectorIdx:2,sectorStart:0,sectors:[null,null,null],bestSectors:[1/0,1/0,1/0],cpTimes:new Float64Array(Math.min(this.totalLaps+3,400)*r+16).fill(NaN),cpIdx:Math.floor(n/this.track.cpSpacing),finished:!1,finishTime:null,dnf:!1,penalty:0,penaltyLog:[],warnings:0,limitTimer:0,offTimer:0,stops:0,service:null,pitRequested:!1,nextCompound:null,drsEligible:[],drsLatch:!1,inPitLane:!1,pitSpeedT:0,pitPenalised:!1,resets:0,falseStart:!1,moved:!1,pos:0,mistakeFlash:0,lastImpact:-9,stopped:0,cpGap:0}}start(){if(this.phase!=="grid")return;this.phase="countdown",this.cdStart=this.time;let t=this.opt.mode==="timetrial"||this.isQuali;this.lightsSeq=t?[.6,1.2,1.8]:[1.2,2.2,3.2,4.2,5.2],this.holdTime=t?.5:.7+this.rng()*2.2,this.lightsOutAt=this.cdStart+this.lightsSeq[this.lightsSeq.length-1]+this.holdTime}lapsLeft(t){return this.totalLaps-t.rs.laps}pushEvent(t){t.t=this.time,this.events.push(t),this.events.length>400&&this.events.splice(0,100)}step(t,e){if(this.time+=t,this.stepCount++,this.phase==="countdown"){let n=this.time-this.cdStart,r=this.lightsSeq.filter(a=>n>=a).length;if(r!==this.lights&&(this.lights=r,this.pushEvent({type:"light",n:r})),this.time>=this.lightsOutAt){this.phase="racing",this.t0=this.time,this.lights=0,this.pushEvent({type:"lightsOut"});for(let a of this.cars)a.rs.lapStart=this.t0,a.rs.sectorStart=this.t0}}this.isQuali&&this.phase==="racing"&&!this.chequered&&this.time-this.t0>=this.opt.qualiTime&&(this.chequered=!0,this.chequeredAt=this.time,this.pushEvent({type:"chequered",car:null}));let i=this.phase==="racing"||this.phase==="finished";for(let n of this.cars){let r=this.inputFor(n,t,e);n.step(t,r)}if(i||this.phase==="countdown"){this.opt.collisions&&this.cars.length>1&&this.collisions();for(let n of this.cars){let r=sp(n,this.track);r&&r.speed>.8?(n.locate(),this.opt.damage&&n.applyDamage(r.energy*.8,r.lx,r.ly),r.speed>3&&this.pushEvent({type:"impact",car:n,energy:r.energy,speed:r.speed,wall:!0,x:r.wx,y:r.wy}),n.rs.lastImpact=this.time):r&&n.locate()}}for(let n of this.cars)this.updateTiming(n,t);if(this.stepCount%4===0){this.updateRank(),this.updateAeroInteractions();for(let n of this.cars)this.updateDrs(n),this.updatePit(n,t*4),this.updateRules(n,t*4);this.updateWeather(t*4),this.updateSafetyCar(t*4),this.updateFinish(),this.adaptPace(),this.recoverStuck(t*4)}this.opt.mode==="timetrial"&&this.recordGhost()}inputFor(t,e,i){let n=t.rs,r=this.phase==="racing"||this.phase==="finished",a;if(t===this.player){a=this._pin||(this._pin={throttle:0,brake:0,steer:0,drs:!1,boost:!1,gearUp:!1,gearDown:!1,pitLimit:0,allowReverse:!0});let l=i||{};if(a.throttle=l.throttle||0,a.brake=l.brake||0,a.steer=l.steer||0,a.boost=!!l.boost,a.gearUp=!!l.gearUp,a.gearDown=!!l.gearDown,a.pitLimit=0,l.drsPress&&n.service&&n.service.pg&&(n.pitAct=!0),a.aiDriven=!!l.aiDriven,a.allowReverse=this.phase==="racing"&&!this.opt.noReverse,n.pilot&&n.pilot.pitState!=="none"){let c=n.pilot.update(e,this);a.throttle=c.throttle,a.brake=c.brake,a.steer=c.steer,a.pitLimit=c.pitLimit,a.boost=!1,a.aiDriven=!0}if(a.hold=!r,a.hold&&(a.brake=1),n.service&&(a.throttle=0,a.brake=1),(n.service||n.pilot&&n.pilot.pitState!=="none")&&(a.allowReverse=!1),l.drsPress&&t.drsAllowed&&(n.drsLatch=!0),(!t.drsAllowed||a.brake>.1)&&(n.drsLatch=!1),a.drs=n.drsLatch,n.inPitLane&&this.track.inPitLimiter(t.s)&&(a.pitLimit=this.track.pit.limit),this.track.pit&&l.pitToggle&&(n.pitRequested=!n.pitRequested,this.pushEvent({type:"pitRequest",car:t,on:n.pitRequested})),l.ersCycle&&this.phase==="racing"&&(t.ersMode=(t.ersMode+1)%3,this.pushEvent({type:"mode",car:t,what:"ers",value:t.ersMode})),l.fuelCycle&&this.phase==="racing"&&(t.fuelMode=(t.fuelMode+1)%3,this.pushEvent({type:"mode",car:t,what:"fuel",value:t.fuelMode})),l.bbDelta&&(t.spec.brakeBias=Z(t.spec.brakeBias+l.bbDelta*.01,.5,.7),this.pushEvent({type:"mode",car:t,what:"bias",value:t.spec.brakeBias})),l.tyreCycle){let c=Ta,h=n.nextCompound||t.compound.id;n.nextCompound=c[(c.indexOf(h)+1)%c.length]}return this.opt.mode==="timetrial"&&this.phase!=="racing"&&(a.brake=1,a.steer=0),a}let o=t.driver;return o?(a=o.update(e,this),n.service&&(a.throttle=0,a.brake=1),a.drs=a.drs&&t.drsAllowed&&a.brake<.1,n.finished&&this.chequered&&(o.paceAdapt=.5),a):this._idle||(this._idle={throttle:0,brake:1,steer:0,drs:!1,boost:!1})}onPitSurface(t){let e=0;for(let i=0;i<4;i++)t.surf[i]===Gt.PIT&&e++;return e>=2}collisions(){let t=this.cars;for(let e=0;e<t.length;e++)for(let i=e+1;i<t.length;i++){let n=t[e],r=t[i];if(n.rs.service||r.rs.service)continue;let a=np(n,r);if(a){if(n.locate(),r.locate(),!a.energy)continue;let o=e*32+i,l=this.pairContact.get(o)??-9;if(this.pairContact.set(o,this.time),this.time-l<.25)continue;this.opt.damage&&(n.applyDamage(a.energy,a.la[0],a.la[1]),r.applyDamage(a.energy,a.lb[0],a.lb[1])),a.speed>1.2&&this.pushEvent({type:"impact",car:n,other:r,energy:a.energy,speed:a.speed,x:(n.x+r.x)/2,y:(n.y+r.y)/2}),this.judgeCollision(n,r,a.la,a.speed),this.judgeCollision(r,n,a.lb,a.speed),n.rs.lastImpact=r.rs.lastImpact=this.time}}}judgeCollision(t,e,i,n){if(this.opt.mode!=="race"||this.phase!=="racing"||this.time-this.t0<8||n<3.5||this.sc.state!=="none"||!(Be(e.s,t.s,this.track.length)>1.5&&i[0]>1.2&&Math.abs(i[1])<1.1&&t.speed>e.speed+2))return;let a=t.rs;if(this.time-(a.lastFault||-99)<8)return;a.lastFault=this.time,a.faults=(a.faults||0)+1;let o=t.info.isPlayer?a.faults===1?5:a.faults===2?10:20:5;this.addPenalty(t,o,a.faults>=3&&t.info.isPlayer?"Repeated collisions":"Causing a collision")}updateTiming(t,e){let i=t.rs,n=this.track,r=n.length,a=Be(t.s,i.lastS,r);if(i.lastS=t.s,this.phase==="grid"||this.phase==="countdown"){i.dist+=a;return}i.dist+=a,t.speed>(i.lapTop||0)&&(i.lapTop=t.speed);let o=i.maxDist;if(i.dist>i.maxDist&&(i.maxDist=i.dist),i.finished&&!t.driver&&!t.info.isPlayer)return;let l=Math.floor(i.maxDist/n.cpSpacing);for(;i.cpIdx<l;){i.cpIdx++;let h=(i.cpIdx*n.cpSpacing-o)/Math.max(1e-6,i.maxDist-o),u=i.cpIdx+8;u>=0&&u<i.cpTimes.length&&(i.cpTimes[u]=this.time-e*(1-Z(h,0,1)));let d=(i.cpIdx%n.cpCount+n.cpCount)%n.cpCount;i.lapCpBest&&d>0&&i.laps>=1&&(i.delta=i.cpTimes[u]-i.lapStart-i.lapCpBest[d])}if(i.laps>=0){let h=t.s<n.sectors[0]?0:t.s<n.sectors[1]?1:2;if(h!==i.sectorIdx&&!(h===0&&i.sectorIdx===2&&o>=i.laps*r+r-1)&&(i.sectorIdx===0&&h===1||i.sectorIdx===1&&h===2)){let u=this.time;i.laps>=0&&this.finishSector(t,i.sectorIdx,u-i.sectorStart),i.sectorStart=u,i.sectorIdx=h}}let c=Math.max(0,Math.floor(i.maxDist/r));if(c>i.laps){let h=(c*r-o)/Math.max(1e-6,i.maxDist-o),u=this.time-e*(1-Z(h,0,1));i.laps=c,this.crossLine(t,u)}}finishSector(t,e,i){let n=t.rs;n.laps<1&&e!==0&&e!==1||(n.sectors[e]=i,n.sectorPurple=n.sectorPurple||[],i<n.bestSectors[e]&&(n.bestSectors[e]=i),i<this.bestSectors[e]?(this.bestSectors[e]=i,n.sectorFlag={idx:e,kind:"purple",t:i}):i<=n.bestSectors[e]+1e-9?n.sectorFlag={idx:e,kind:"green",t:i}:n.sectorFlag={idx:e,kind:"none",t:i},t.info.isPlayer&&this.pushEvent({type:"sector",car:t,idx:e,t:i,kind:n.sectorFlag.kind}))}crossLine(t,e){let i=t.rs,n=e-i.lapStart,r=e-i.sectorStart;if(i.laps>=2&&this.finishSector(t,2,r),i.sectorStart=e,i.sectorIdx=0,i.laps>=1){i.last=n,i.lapTimes.push(n);let a=t.tyreSummary();i.tele.push({lap:i.laps,time:n,fuel:t.fuel,wear:a.wear,temp:a.temp,compound:t.compound.letter,topSpeed:i.lapTop||0,wet:this.wet}),i.lapTop=0;let o=i.laps>=2||this.totalLaps===1,l=!i.invalidLap&&o;if(l&&n<i.best&&(i.best=n,t.info.isPlayer)){let c=(i.laps-1)*this.track.cpCount+8,h=i.cpTimes[c],u=new Float64Array(this.track.cpCount),d=!Number.isNaN(h);for(let f=0;f<u.length&&d;f++)u[f]=i.cpTimes[c+f]-h,Number.isNaN(u[f])&&(d=!1);d&&(i.lapCpBest=u),this.opt.mode==="timetrial"&&this.commitGhost(n)}l&&n<this.fastest.time&&(this.fastest={time:n,car:t,lap:i.laps},this.pushEvent({type:"fastest",car:t,time:n})),this.pushEvent({type:"lap",car:t,time:n,lap:i.laps,best:l&&n<=i.best,valid:l}),i.invalidLap=!1}i.lapStart=e,this.opt.mode==="timetrial"&&(this.ghostRec=[],this.ghostStart=this.stepCount),!i.finished&&(i.laps>=this.totalLaps||this.chequered)&&(i.finished=!0,i.finishTime=e-this.t0,this.chequered||(this.chequered=!0,this.chequeredAt=this.time,this.pushEvent({type:"chequered",car:t})),this.pushEvent({type:"finish",car:t,time:i.finishTime}))}updateRank(){let t=this.sorted;if(this.isQuali){t.sort((r,a)=>r.rs.best-a.rs.best||a.rs.maxDist-r.rs.maxDist),t.forEach((r,a)=>{r.rs.pos=a+1;let o=a>0?t[a-1]:null;r.ahead=o,r.behind=a<t.length-1?t[a+1]:null,r.gapAhead=o&&Number.isFinite(r.rs.best)&&Number.isFinite(o.rs.best)?r.rs.best-o.rs.best:null,r.rs.lapsDown=0});return}let e=this.track.length;t.sort((r,a)=>{let o=r.rs,l=a.rs,c=o.finished?o.laps:o.maxDist/e,h=l.finished?l.laps:l.maxDist/e;return Math.abs(c-h)>1e-6?h-c:o.finished&&l.finished?o.finishTime-l.finishTime:o.finished!==l.finished?o.finished?-1:1:l.maxDist-o.maxDist});let i=this.track;t.forEach((r,a)=>{let o=r.rs;if(this.phase==="racing"&&this.time-this.t0>6&&o.pos>a+1&&!o.inPitLane&&!o.service&&this.sc.state==="none"){let c=o.lastRank!=null?o.lastRank:o.pos;if(c>a+1){let h=0;for(let u=1;u<=c-(a+1);u++){let d=t[a+u];d&&!d.rs.inPitLane&&!d.rs.service&&!d.rs.finished&&d.speed>8&&h++}o.passes=(o.passes||0)+h}}o.lastRank=a+1,r.rs.pos=a+1;let l=a>0?t[a-1]:null;if(r.ahead=l,r.behind=a<t.length-1?t[a+1]:null,!l){r.gapAhead=null,r.rs.gapLeader=0;return}r.gapAhead=this.timeGap(r,l),r.rs.gapLeader=(l.rs.gapLeader??0)+(r.gapAhead??0),l.rs.finished&&r.rs.finished&&(r.gapAhead=r.rs.finishTime-l.rs.finishTime)});let n=t[0];for(let r of t)r.rs.lapsDown=Math.max(0,Math.floor((n.rs.maxDist-r.rs.maxDist)/i.length+1e-4))}timeGap(t,e){let i=t.rs,n=e.rs,r=i.cpIdx+8,a=n.cpTimes[r],o=i.cpTimes[r];if(r>=0&&r<i.cpTimes.length&&!Number.isNaN(a)&&!Number.isNaN(o)&&n.cpIdx>=i.cpIdx)return Math.max(0,o-a);let l=n.maxDist-i.maxDist;return Math.max(0,l/Math.max(20,t.speed))}updateAeroInteractions(){let t=this.track.length;for(let e of this.cars){let i=0;for(let n of this.cars){if(n===e)continue;let r=Be(n.s,e.s,t);if(r<4||r>42)continue;let a=Math.abs(n.d-e.d);if(a>3.2)continue;let o=r-5.5,l=Z(1-o/34,0,1)*Z(1-Math.max(0,a-.6)/2.6,0,1);l>i&&(i=l)}e.slipstream=i,e.dirtyAir=i*(this.phase==="racing"?1:0)}}updateDrs(t){let e=this.track,i=t.rs;if(!e.drs.length)return;let n=this.phase==="racing"&&(this.opt.mode==="timetrial"||this.isQuali||i.laps>=1),r=e.inDrsZone(t.s);for(let a=0;a<e.drs.length;a++){let o=e.drs[a],l=Be(t.s,o.detect,e.length);l>=0&&l<Math.max(8,t.speed*.06)&&(i.drsEligible[a]=this.opt.mode==="timetrial"||this.isQuali||t.gapAhead!=null&&t.gapAhead<1,(i.drsGap||(i.drsGap=[]))[a]=t.gapAhead),r!==a&&i.drsEligible[a]&&Be(t.s,o.end,e.length)>10&&Be(t.s,o.end,e.length)<200&&(i.drsEligible[a]=!1)}t.drsAllowed=n&&this.sc.state==="none"&&r>=0&&!!i.drsEligible[r]&&!i.inPitLane&&!i.service&&Math.abs(t.latG)<1.4,t.drsZone=r,t.drsEligible=i.drsEligible.some(Boolean)}updatePit(t,e){let i=this.track,n=t.rs;if(!i.pit)return;let r=i.inPitRange(t.s)&&this.onPitSurface(t)&&t.d<-(i.wr[t.i]+i.kr[t.i]+.8);r!==n.inPitLane&&(n.inPitLane=r,this.pushEvent({type:r?"pitEntry":"pitExit",car:t}),r||(n.pitPenalised=!1)),n.inPitLane&&i.inPitLimiter(t.s)?(n.pitZoneT=(n.pitZoneT||0)+e,n.pitZoneT>1.6&&t.speed>i.pit.limit+2.5&&!t.driver?(n.pitSpeedT+=e,n.pitSpeedT>.35&&!n.pitPenalised&&(n.pitPenalised=!0,this.addPenalty(t,5,"Speeding in the pit lane"))):n.pitSpeedT=0):n.pitZoneT=0;let a=t.driver;if(a){let o=t.tyreSummary(),l=n.stops>=1,c=this.totalLaps-n.laps;if(!a.wantsPit&&a.pitState==="none"&&c>1){if(n.plannedStop!=null&&!l&&n.laps>=n.plannedStop&&(a.wantsPit=!0),n.adviceT=(n.adviceT||0)+e,n.adviceT>1){n.adviceT=0;let h=this.strategyAdvice(t);h&&h.thisLap&&h.reason!=="rules"&&(a.wantsPit=!0,n.nextCompound||(n.nextCompound=h.compound))}o.wear>.8&&(a.wantsPit=!0),t.damageSummary().severity>.4&&c>2&&(a.wantsPit=!0),this.track.pit&&c>1&&((this.wet>.4||this.rain>.25&&this.wet>.12+.1*(t.info.number%3))&&!t.compound.wetTyre?(a.wantsPit=!0,n.nextCompound="wet"):this.wet<.14&&this.rain<.05&&t.compound.wetTyre&&(a.wantsPit=!0,n.nextCompound=hc[1])),this.sc.state==="deployed"&&o.wear>.4&&n.stops===0&&c>3&&n.plannedStop!=null&&(a.wantsPit=!0)}}if(t===this.player&&this.opt.mode==="race"&&i.pit&&this.phase==="racing"){let o=t.damageSummary().severity;if(o>.5&&!n.damageBoxed&&!n.pitRequested&&this.totalLaps-n.laps>1&&(n.damageBoxed=!0,n.pitRequested=!0,this.pushEvent({type:"damageBox",car:t})),o<.1&&(n.damageBoxed=!1),this.opt.pitCalls!=="off"&&!n.pitRequested&&!n.service&&!n.damageBoxed&&(n.adviceT=(n.adviceT||0)+e,n.adviceT>1)){n.adviceT=0;let l=this.strategyAdvice(t);n.advice=l,l&&l.thisLap&&n.calledLap!==l.lap&&t.s/i.length>.12&&t.s/i.length<.9&&(n.calledLap=l.lap,this.pushEvent({type:"pitCall",car:t,advice:l,auto:this.opt.pitCalls==="auto"}),this.opt.pitCalls==="auto"&&(n.pitRequested=!0,n.nextCompound||(n.nextCompound=l.compound)))}}if(n.boxLatch&&t.speed>3&&(n.boxLatch=!1),t===this.player&&!n.service&&!n.boxLatch&&n.inPitLane&&t.speed<.7){let o=i.pitBox(t.info.teamIdx);Math.abs(Be(t.s,o.s,i.length))<3.2&&Math.abs(t.d-o.d)<2.8&&(t.pitStopped=!0)}if(t.pitStopped&&!n.service){let o=2.3+this.rng()*(1.1+(1-this.opt.level)*1.2),l=t.damageSummary(),c=4*l.fw+2.5*(l.sideL+l.sideR)+2*l.rw+1.5*l.floor;o+=c,n.service={t:0,dur:o,repair:c},t===this.player&&this.opt.assists.pitGame&&this.opt.mode==="race"&&(n.service.pg=gp(),n.service.dur=1/0,n.pitAct=!1,o=2.5),this.pushEvent({type:"pitStopStart",car:t,dur:o,game:!!n.service.pg})}if(n.service){n.service.t+=e;let o=n.service.pg;if(o){let l=n.pitAct;n.pitAct=!1;for(let c of yp(o,n.service.t,l))this.pushEvent({type:"pitWheel",car:t,k:c.k,res:c.res});o.done&&n.service.dur===1/0&&(n.service.dur=o.dur+(n.service.repair||0),o.perfects===4&&(n.perfectStops=(n.perfectStops||0)+1),this.pushEvent({type:"pitGameDone",car:t,dur:o.dur,repair:n.service.repair||0,perfects:o.perfects,misses:o.misses}))}if(n.service.t>=n.service.dur){let l=n.nextCompound;if(!l){let c=t.compound.id,h=(this.wet>.3?["wet"]:hc).filter(u=>u!==c);h.length||h.push(c),l=h[Math.floor(this.rng()*h.length)]}if(t.fitTyres(ni[l]),t.repair(),n.nextCompound=null,n.compounds.push(l),n.stops++,n.stopLaps.push(n.laps),n.service=null,n.pitRequested=!1,n.boxLatch=!0,t.pitStopped=!1,a){let c=t.info.team;a.profile=this.getProfile(t.spec,`${c.id}:${l}`)}this.pushEvent({type:"pitStopEnd",car:t,compound:l})}}if(t===this.player&&this.opt.assists.pitAuto&&!n.service){if(!n.pilot){let o=i.pitBox(t.info.teamIdx);n.pilot=new Mn({car:t,track:i,profile:this.getProfile(t.spec,"pilot:"+t.compound.id),level:1,seed:99,boxS:o.s,boxD:o.d}),n.pilot.dp.pace=.9,n.pilot.goTime=0}if(n.pilot.profile=this.getProfile(t.spec,"pilot:"+t.compound.id),n.pilot.wantsPit=n.pitRequested,n.pilot.pitState==="none"){let o=re(i.pit.start-t.s,i.length);n.pitRequested&&o<140&&o>10&&this.phase==="racing"&&(n.pilot.pitState="in")}n.pilot.pitState==="stopped"&&!t.pitStopped&&(n.pilot.pitState="out")}}addPenalty(t,e,i){let n=t.rs;n.penalty+=e,n.penaltyLog.push({secs:e,reason:i,t:this.time}),this.pushEvent({type:"penalty",car:t,secs:e,reason:i})}tyreLife(t){return ni[t].wearLaps/Math.max(.3,this.opt.tyreWear||1)*.45}strategyAdvice(t){let e=t.rs;if(!this.track.pit||this.opt.mode!=="race"||this.phase!=="racing"||e.finished)return null;let n=this.totalLaps,r=e.stopLaps.length?e.stopLaps[e.stopLaps.length-1]:0,a=n-e.laps;if(a<2)return null;let o=t.tyreSummary().wear,l=e.tele.filter(v=>v.lap>r),c=0;l.length>=2?c=Math.max(0,l[l.length-1].wear-l[l.length-2].wear):l.length===1&&(c=l[0].wear*.8);let h=this.wet,u="wear",d=!1,f=null;h>.35&&!t.compound.wetTyre?(d=!0,u="wet",f="wet"):h<.14&&this.rain<.05&&t.compound.wetTyre&&(d=!0,u="dry",f=hc[1]);let g=1/0;c>.004&&!t.compound.wetTyre&&(g=Math.max(0,Math.floor((.7-o)/c-.15)));let y=o+c*a,m=this.opt.mandatoryStop&&e.stops===0&&!t.compound.wetTyre;if(m)g=Math.min(g,Math.max(0,a-3)),u=g===Math.max(0,a-3)&&y<.85?"rules":u;else if((y<.88||a<3)&&!d)return null;if(!d&&g===1/0||!d&&g>0&&g>a-2)return null;if(!f){let v=Math.max(1,a-g),_=b=>this.tyreLife(b),M=["soft","medium","hard"],S=m?M.filter(b=>b!==t.compound.id):M;f=S.find(b=>_(b)>=v)||S[S.length-1]}let p=d||g===0;return{lap:e.laps+1+(p?0:g),thisLap:p,nextLap:!p&&g===1,compound:f,reason:u}}setupWeather(){let t=this.opt.weather;if(this.wx=[],this.isQuali||this.opt.mode==="timetrial"){t==="light"?this.wet=.5:t==="heavy"&&(this.wet=.9),(t==="light"||t==="heavy")&&this.wx.push({t0:-1,t1:1e9,level:t==="heavy"?1:.45}),this.rain=this.wx.length?this.wx[0].level:0;return}let i=this.track.length/52*Math.min(this.opt.laps,40),n=this.rng;if(t==="light")this.wet=.5,this.wx.push({t0:-1,t1:1e9,level:.45});else if(t==="heavy")this.wet=.92,this.wx.push({t0:-1,t1:1e9,level:1});else if(t==="changing"){let r=i>500&&n()<.5?2:1,a=i*(.15+.25*n());for(let o=0;o<r;o++){let l=Math.max(90,i*(.15+.2*n()));this.wx.push({t0:a,t1:a+l,level:.5+.5*n()}),a+=l+i*(.15+.1*n())}}this.rain=this.wx.length&&this.wx[0].t0<0?this.wx[0].level:0}forecast(){let t=this.t0==null?0:this.time-this.t0;for(let e of this.wx)if(e.t0>t)return{rainIn:e.t0-t,level:e.level};return null}updateWeather(t){if(this.phase!=="racing"&&this.phase!=="countdown"&&this.phase!=="grid")return;let e=this.t0==null?0:this.time-this.t0,i=0;for(let r of this.wx)e>=r.t0&&e<r.t1&&(i=Math.max(i,r.level));this.rain+=Z(i-this.rain,-t*.02,t*.015),this.rain>.04?this.wet=Math.min(1,this.wet+this.rain*.012*t):this.wet=Math.max(0,this.wet-.0045*t),this.rain>.04&&this.wet>this.rain*1.05+.1&&(this.wet-=.004*t),this.maxWet=Math.max(this.maxWet||0,this.wet);for(let r of this.cars)r.wetness=this.wet;let n=this.player;n&&(n.rs.maxDamage=Math.max(n.rs.maxDamage||0,n.damageSummary().worst))}disabledCars(){let t=this.track,e=[];for(let i of this.cars){if(!i.driver||i.rs.finished||i.rs.inPitLane||i.rs.service||i.inGarage)continue;let n=i.d>t.wl[i.i]+1.5||-i.d>t.wr[i.i]+1.5;i.speed<3.5&&(i.driver.stuckT>1.2||n&&i.speed<1.5)&&e.push(i)}return e}updateSafetyCar(t){let e=this.sc,i=this.track;if(!this.opt.safetyCar||this.isQuali||this.opt.mode==="timetrial"||this.phase!=="racing")return;let a=this.time-this.t0>20?this.disabledCars():[],o=a.length>0&&e.state==="none";if(o!==this.yellow&&(this.yellow=o,this.pushEvent({type:o?"yellow":"yellowClear"})),e.state==="none"){e.count=a.length;let d=this.sorted[0]?this.totalLaps-this.sorted[0].rs.laps:9;a.length>=3&&d>1&&!this.chequered&&this.deploySafetyCar();return}e.t+=t;let l=this.sorted.find(d=>!d.rs.finished&&!d.rs.dnf)||null,c=e.state==="ending"?60:38,h=e.v<c?4:-4;if(e.v+=Z(c-e.v,-Math.abs(h)*t,Math.abs(h)*t),e.state==="deployed"&&l){let d=Be(e.s,l.s,i.length);d>120?e.v=Math.min(e.v,Math.max(20,l.speed*.9)):d<25&&(e.v=Math.max(e.v,l.speed+2))}e.s=re(e.s+e.v*t,i.length);let u=e.pseudo;if(u.s=e.s,u.speed=e.v,u.d=0,e.state==="deployed")e.clearT=a.length?0:e.clearT+t,e.clearT>8&&e.t>28&&(e.state="ending",this.pushEvent({type:"scEnding"}));else if(e.state==="ending"&&i.pit){let d=re(i.pit.start-e.s,i.length);(d>i.length-40||d<3)&&(e.state="none",this.yellow=!1,this.pushEvent({type:"scEnd"}))}else e.state==="ending"&&!i.pit&&e.t>60&&(e.state="none",this.pushEvent({type:"scEnd"}));this.policeSafetyCar()}deploySafetyCar(){let t=this.sc,e=this.sorted.find(i=>!i.rs.finished&&!i.rs.dnf);if(e){t.state="deployed",t.t=0,t.clearT=0,t.s=re(e.s+60,this.track.length),t.v=Math.max(38,e.speed*.9),t.pseudo.s=t.s,t.pseudo.speed=t.v,t.ahead=this.player?this.player.ahead:null,this.yellow=!1;for(let i of this.cars)i.drsAllowed=!1,i.rs.drsEligible=[];this.pushEvent({type:"scDeploy"})}}policeSafetyCar(){let t=this.player,e=this.sc;if(!t||t.rs.finished||t.rs.inPitLane||this.opt.mode!=="race"||e.state!=="deployed")return;let i=e.ahead,n=t.ahead;i&&i!==n&&t.behind===i&&i.speed>8&&!i.rs.inPitLane&&this.time-(e.lastPen||-99)>15&&(e.lastPen=this.time,this.addPenalty(t,5,"Overtaking under the safety car")),e.ahead=n}updateRules(t,e){let i=t.rs;if(this.phase!=="racing"||!t.info.isPlayer)return;let n=0;for(let r=0;r<4;r++){let a=t.surf[r];(a===Gt.GRASS||a===Gt.GRAVEL||a===Gt.RUNOFF)&&n++}n===4?(i.offTimer+=e,i.offTimer>.15&&i.limitTimer<=0&&(i.limitTimer=2.5,i.invalidLap=!0,i.warnings++,this.opt.mode==="race"?i.warnings%3===0?this.addPenalty(t,5,"Track limits (3 warnings)"):this.pushEvent({type:"warning",car:t,n:i.warnings%3}):this.pushEvent({type:"lapInvalid",car:t}))):i.offTimer=0,i.limitTimer>0&&(i.limitTimer-=e)}updateFinish(){if(this.phase==="racing"&&this.chequered){let t=this.cars.filter(r=>!r.rs.finished&&!r.rs.dnf),e=this.player&&this.player.rs.finished,i=this.time-this.chequeredAt,n=this.player&&!e&&this.player.speed<3;(!t.length||i>240&&(e||n)||i>420)&&this.endRace()}}endRace(){if(this.phase="finished",this.sc.state="none",this.yellow=!1,this.opt.mandatoryStop&&this.player&&this.opt.mode==="race"&&this.track.pit){let t=this.player.rs;(t.stops<1||new Set(t.compounds).size<2)&&this.addPenalty(this.player,15,"Mandatory stop / two compounds not completed")}this.pushEvent({type:"raceEnd"})}qualifying(){let t=this.cars.map(i=>({car:i,info:i.info,best:i.rs.best,laps:i.rs.laps,dist:i.rs.maxDist}));t.sort((i,n)=>i.best-n.best||n.dist-i.dist),t.forEach((i,n)=>i.pos=n+1);let e={};for(let i of t)Number.isFinite(i.best)&&(e[i.info.isPlayer?"YOU":i.info.code]=i.best);return{list:t,times:e}}qualiLeft(){return!this.isQuali||this.t0==null?this.opt.qualiTime:Math.max(0,this.opt.qualiTime-(this.time-this.t0))}classification(){let t=this.cars.map(i=>({car:i,info:i.info,laps:Math.min(i.rs.laps,this.totalLaps),time:i.rs.finished?i.rs.finishTime+i.rs.penalty:null,raw:i.rs.finishTime,penalty:i.rs.penalty,best:i.rs.best,stops:i.rs.stops,dist:i.rs.maxDist,gridPos:i.info.gridPos}));t.sort((i,n)=>i.time!=null!=(n.time!=null)?i.time!=null?-1:1:i.time!=null&&n.time!=null?i.laps===n.laps?i.time-n.time:n.laps-i.laps:n.dist-i.dist),t.forEach((i,n)=>i.pos=n+1);let e=[25,18,15,12,10,8,6,4,2,1];return t.forEach(i=>i.points=(e[i.pos-1]||0)+(this.fastest.car===i.car&&i.pos<=10?1:0)),t}adaptPace(){if(!this.opt.adaptive||!this.player||this.stepCount%240!==0)return;let t=this.player;for(let e of this.cars){if(!e.driver||e.rs.finished)continue;let i=(e.rs.maxDist-t.rs.maxDist)/60,n=1;i>6?n=1-Z((i-6)*.004,0,.05):i<-6&&(n=1+Z((-i-6)*.004,0,.03)),e.driver.paceAdapt=n}}recoverStuck(t){for(let e of this.cars){let i=e.driver;i&&i.stuckT>5&&(i.stuckT=0,this.resetToTrack(e))}}resetToTrack(t,e=0){if(t.rs.service)return;let i=this.track,n=i.pointAt(t.s,Z(i.lineAt(t.s)*.5,-i.wr[t.i]+3,i.wl[t.i]-3));t.reset(n.x,n.y,n.heading,6),t.rs.resets++,t.rs.lastS=t.s,t.dirtyAir=0,t.driver&&(t.driver.offset=0,t.driver.offTarget=0,t.driver.mistake=null),t.rs.drsLatch=!1,e&&this.addPenalty(t,e,"Car recovered"),this.pushEvent({type:"recover",car:t})}recordGhost(){if(this.phase!=="racing"||!this.player||(this.stepCount-this.ghostStart)%12!==0)return;let t=this.player;this.ghostRec.push(t.x,t.y,t.theta,t.steer)}commitGhost(t){this.ghostBest={time:t,frames:Float32Array.from(this.ghostRec),track:this.track.id},this.pushEvent({type:"ghost",time:t})}ghostPose(t){let e=this.ghostBest;if(!e)return null;let i=t/(12*fi),n=Math.floor(i),r=e.frames.length/4;if(n<0||n>=r-1)return null;let a=i-n,o=n*4,l=o+4,c=e.frames[l+2]-e.frames[o+2];return c>Math.PI&&(c-=2*Math.PI),c<-Math.PI&&(c+=2*Math.PI),{x:e.frames[o]+(e.frames[l]-e.frames[o])*a,y:e.frames[o+1]+(e.frames[l+1]-e.frames[o+1])*a,theta:e.frames[o+2]+c*a,steer:e.frames[o+3]}}};function He(s,t=!1){let e=s[0].index!==null,i=new Set(Object.keys(s[0].attributes)),n=new Set(Object.keys(s[0].morphAttributes)),r={},a={},o=s[0].morphTargetsRelative,l=new ie,c=0;for(let h=0;h<s.length;++h){let u=s[h],d=0;if(e!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let f in u.attributes){if(!i.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(u.attributes[f]),d++}if(d!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let f in u.morphAttributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;a[f]===void 0&&(a[f]=[]),a[f].push(u.morphAttributes[f])}if(t){let f;if(e)f=u.index.count;else if(u.attributes.position!==void 0)f=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,f,h),c+=f}}if(e){let h=0,u=[];for(let d=0;d<s.length;++d){let f=s[d].index;for(let g=0;g<f.count;++g)u.push(f.getX(g)+h);h+=s[d].attributes.position.count}l.setIndex(u)}for(let h in r){let u=xp(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,u)}for(let h in a){let u=a[h][0].length;if(u!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let d=0;d<u;++d){let f=[];for(let y=0;y<a[h].length;++y)f.push(a[h][y][d]);let g=xp(f);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(g)}}}return l}function xp(s){let t,e,i,n=-1,r=0;for(let c=0;c<s.length;++c){let h=s[c];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=h.normalized),i!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(n===-1&&(n=h.gpuType),n!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}let a=new t(r),o=new qt(a,e,i),l=0;for(let c=0;c<s.length;++c){let h=s[c];if(h.isInterleavedBufferAttribute){let u=l/e;for(let d=0,f=h.count;d<f;d++)for(let g=0;g<e;g++){let y=h.getComponent(d,g);o.setComponent(d+u,g,y)}}else a.set(h.array,l);l+=h.count*e}return n!==void 0&&(o.gpuType=n),o}var xc=["VELOCE","PETRONOVA","QUANTUM","AXIOM","NOVATEL","STRATOS","HYPERION","ORBITAL","ZENITH","TORQUE+","APEXFUEL","MERIDIAN","KINETIC","SOLARIS"],bc=[["#ffffff","#d8102b"],["#0b1f4d","#ffffff"],["#ffd400","#111111"],["#111111","#ff7a14"],["#ffffff","#0a7d4f"],["#e8e8e8","#6a2fb5"]];function pi(s,t){let e=document.createElement("canvas");return e.width=s,e.height=t,[e,e.getContext("2d")]}function mi(s,{repeat:t=!0,srgb:e=!0,aniso:i=8}={}){let n=new yn(s);return t&&(n.wrapS=n.wrapT=Gs),e&&(n.colorSpace=ai),n.anisotropy=i,n.generateMipmaps=!0,n.minFilter=sn,n}function Zn(s,t,e,i,n,r,a,o,l=1){for(let c=0;c<i;c++){s.globalAlpha=l*(.3+.7*n()),s.fillStyle=r[Math.floor(n()*r.length)];let h=a+(o-a)*n(),u=n()*t,d=n()*e;s.beginPath(),s.arc(u,d,h,0,6.283),s.fill(),u<h&&(s.beginPath(),s.arc(u+t,d,h,0,6.283),s.fill()),d<h&&(s.beginPath(),s.arc(u,d+e,h,0,6.283),s.fill()),u>t-h&&(s.beginPath(),s.arc(u-t,d,h,0,6.283),s.fill()),d>e-h&&(s.beginPath(),s.arc(u,d-e,h,0,6.283),s.fill())}s.globalAlpha=1}function bp(){let[s,t]=pi(512,512),e=We(11);t.fillStyle="#3b3c40",t.fillRect(0,0,512,512),Zn(t,512,512,60,e,["#35363a","#444549","#3f4044"],30,90,.35),Zn(t,512,512,5200,e,["#2b2c2f","#505156","#5b5c61","#222326"],.5,1.6,.55),t.strokeStyle="rgba(15,15,18,0.4)",t.lineWidth=1;for(let i=0;i<9;i++){t.beginPath();let n=e()*512,r=e()*512;t.moveTo(n,r);for(let a=0;a<8;a++)n+=(e()-.5)*60,r+=(e()-.5)*60,t.lineTo(n,r);t.stroke()}return mi(s)}function _p(){let[s,t]=pi(256,256),e=We(21);return t.fillStyle="#5b5f66",t.fillRect(0,0,256,256),Zn(t,256,256,1800,e,["#4d5157","#6b7078","#41454b"],.5,1.5,.6),mi(s)}function Dd(s="#4a7d2f",t="#5e9238",e=!1){let[i,n]=pi(512,512),r=We(31);n.fillStyle=s,n.fillRect(0,0,512,512),Zn(n,512,512,70,r,[t,s,"#3c6a27"],20,70,.28),n.lineWidth=1;for(let a=0;a<7e3;a++){n.strokeStyle=r()<.5?t:"#2f5a1e",n.globalAlpha=.35;let o=r()*512,l=r()*512;n.beginPath(),n.moveTo(o,l),n.lineTo(o+(r()-.5)*3,l-2-r()*4),n.stroke()}return n.globalAlpha=1,e&&(n.fillStyle="rgba(255,255,200,0.075)",n.fillRect(0,0,512,256),n.fillStyle="rgba(0,25,0,0.075)",n.fillRect(0,256,512,256)),mi(i)}function Mp(){let[s,t]=pi(256,256),e=We(41);return t.fillStyle="#b9a98a",t.fillRect(0,0,256,256),Zn(t,256,256,3500,e,["#a69677","#cbbb9c","#8f8062","#d8cdb4"],.6,1.8,.8),mi(s)}function Sp(){let[s,t]=pi(64,128);t.fillStyle="#e53935",t.fillRect(0,0,64,128),t.fillStyle="#f5f5f5",t.fillRect(0,64,64,64);let e=We(51);return Zn(t,64,128,300,e,["#00000022","#ffffff22"],.5,1.2,.5),mi(s)}function wp(){let[s,t]=pi(64,64);t.fillStyle="#f2f2f2",t.fillRect(0,0,64,64),t.fillStyle="#151515";for(let e=0;e<4;e++)for(let i=0;i<4;i++)(i+e)%2===0&&t.fillRect(i*16,e*16,16,16);return mi(s)}function Ep(s=5){let[t,e]=pi(1024,128),i=We(s);e.fillStyle="#e9e9e6",e.fillRect(0,0,1024,128),Zn(e,1024,128,120,i,["#d4d4d0","#f4f4f2","#c9c9c4"],8,40,.25);let n=0;for(;n<1024;){let r=170+i()*130,[a,o]=bc[Math.floor(i()*bc.length)];e.fillStyle=a,e.fillRect(n+6,14,r-12,100),e.fillStyle=o,e.font='900 64px "Arial Black", Impact, sans-serif',e.textAlign="center",e.textBaseline="middle",e.fillText(xc[Math.floor(i()*xc.length)],n+r/2,66,r-28),n+=r}return e.fillStyle="#c9201f",e.fillRect(0,118,1024,10),mi(t)}function Tp(){let[s,t]=pi(512,128),e=We(61);t.fillStyle="#16171a",t.fillRect(0,0,512,128);for(let i=0;i<3;i++)for(let n=0;n<8;n++){let r=n*64+i%2*32,a=i*42;t.fillStyle="#26282c",t.beginPath(),t.ellipse(r+32,a+21,30,19,0,0,6.283),t.fill(),t.fillStyle="#0c0d0f",t.beginPath(),t.ellipse(r+32,a+21,14,8,0,0,6.283),t.fill(),e()<.3&&(t.fillStyle=e()<.5?"#f2f2f2":"#2a6cd6",t.fillRect(r+8,a+6,48,6))}return mi(s)}function Ap(){let[s,t]=pi(256,128),e=We(71);t.fillStyle="#2b2b30",t.fillRect(0,0,256,128);let i=["#d33","#eee","#36c","#fc3","#3a6","#c6c","#f80","#ddd","#222","#59f"];for(let n=0;n<2600;n++)t.fillStyle=i[Math.floor(e()*i.length)],t.fillRect(Math.floor(e()*128)*2,Math.floor(e()*64)*2,2,2);t.globalAlpha=.25,t.fillStyle="#000";for(let n=0;n<128;n+=8)t.fillRect(0,n+6,256,2);return mi(s)}function Rp(s=3,t="#e8dcc6"){let[e,i]=pi(256,512),n=We(s);i.fillStyle=t,i.fillRect(0,0,256,512),Zn(i,256,512,200,n,["#00000010","#ffffff18"],6,30,.5);for(let r=14;r<500;r+=46)for(let a=16;a<240;a+=48){let o=n()<.18;i.fillStyle=o?"#ffe9a8":"#3d5266",i.fillRect(a,r,26,32),i.fillStyle="rgba(255,255,255,0.18)",i.fillRect(a,r,26,8),i.fillStyle="#00000033",i.fillRect(a-3,r+33,32,3)}return mi(e)}function Fd(s=0){let[t,e]=pi(512,128),[i,n]=bc[s%bc.length];return e.fillStyle=i,e.fillRect(0,0,512,128),e.fillStyle=n,e.fillRect(0,108,512,20),e.font='900 78px "Arial Black", Impact, sans-serif',e.textAlign="center",e.textBaseline="middle",e.fillText(xc[s%xc.length],256,56,480),mi(t,{repeat:!1})}function Cp(){let[s,t]=pi(128,128);t.fillStyle="#2a2d33",t.fillRect(0,0,128,128),t.fillStyle="#1b1d22";for(let e=10;e<118;e+=12)t.fillRect(8,e,112,6);return t.fillStyle="rgba(255,255,255,0.12)",t.fillRect(0,0,128,6),mi(s,{repeat:!1})}function ka(){let[s,t]=pi(64,64),e=t.createRadialGradient(32,32,0,32,32,32);return e.addColorStop(0,"rgba(255,255,255,1)"),e.addColorStop(.35,"rgba(255,255,255,0.55)"),e.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=e,t.fillRect(0,0,64,64),mi(s,{repeat:!1,srgb:!1})}function Pp(s,t="#ffffff",e=null){let[i,n]=pi(128,128);return e&&(n.fillStyle=e,n.fillRect(0,0,128,128)),n.fillStyle=t,n.font='900 100px "Arial Black", Impact, sans-serif',n.textAlign="center",n.textBaseline="middle",n.fillText(String(s),64,68),mi(i,{repeat:!1})}function Nd(s,t="#fff",e="#111",i=256,n=64){let[r,a]=pi(i,n);return a.fillStyle=e,a.fillRect(0,0,i,n),a.fillStyle=t,a.font=`900 ${Math.floor(n*.62)}px "Arial Black", Impact, sans-serif`,a.textAlign="center",a.textBaseline="middle",a.fillText(s,i/2,n/2+2,i-10),mi(r,{repeat:!1})}function _c(s,t){let e=s*374761393+t*668265263|0;return e=(e^e>>>13)*1274126177,((e^e>>>16)>>>0)/4294967296}function pb(s,t){let e=Math.floor(s),i=Math.floor(t),n=s-e,r=t-i,a=n*n*(3-2*n),o=r*r*(3-2*r),l=_c(e,i),c=_c(e+1,i),h=_c(e,i+1),u=_c(e+1,i+1);return l+(c-l)*a+(h-l)*o+(l-c-h+u)*a*o}function Oa(s,t,e=4){let i=.5,n=1,r=0;for(let a=0;a<e;a++)r+=i*pb(s*n,t*n),i*=.5,n*=2.03;return r}var mb=`
varying vec3 vDir;
void main() {
  vDir = normalize(position);
  vec4 p = modelViewMatrix * vec4(position, 1.0);
  gl_Position = projectionMatrix * p;
  gl_Position.z = gl_Position.w; // always at the far plane
}`,gb=`
varying vec3 vDir;
uniform vec3 top; uniform vec3 horizon; uniform vec3 ground; uniform vec3 sunDir; uniform vec3 sunColor; uniform float time; uniform float cloud; uniform float night;
float hash(vec2 p){ return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
float noise(vec2 p){ vec2 i = floor(p), f = fract(p); f = f*f*(3.0-2.0*f);
  return mix(mix(hash(i), hash(i+vec2(1,0)), f.x), mix(hash(i+vec2(0,1)), hash(i+vec2(1,1)), f.x), f.y); }
float fbm(vec2 p){ float a = 0.5, s = 0.0; for (int i = 0; i < 5; i++) { s += a * noise(p); p *= 2.07; a *= 0.5; } return s; }
void main() {
  vec3 d = normalize(vDir);
  float h = clamp(d.y, -1.0, 1.0);
  vec3 col = mix(horizon, top, pow(clamp(h, 0.0, 1.0), 0.55));
  col = mix(col, ground, smoothstep(0.0, -0.25, h));
  if (night > 0.02 && h > 0.0) {
    vec3 sp = floor(d * 260.0);
    float st = step(0.9975, fract(sin(dot(sp, vec3(12.9898, 78.233, 37.719))) * 43758.5453));
    col += vec3(0.85, 0.9, 1.0) * st * smoothstep(0.02, 0.35, h) * night * (0.5 + 0.5 * hash(sp.xy + sp.z));
  }
  float sd = max(dot(d, normalize(sunDir)), 0.0);
  col += sunColor * (pow(sd, 6000.0) * 3.0 + pow(sd, 22.0) * 0.22 + pow(sd, 4.0) * 0.07);
  if (h > 0.0) {
    vec2 uv = d.xz / (h + 0.18) * 1.6 + vec2(time * 0.004, 0.0);
    float c = fbm(uv * 1.4);
    float m = smoothstep(0.52 - cloud * 0.2, 0.9, c) * smoothstep(0.0, 0.2, h);
    vec3 cc = mix(vec3(0.82), vec3(1.0), c) * mix(vec3(0.75, 0.8, 0.9), vec3(1.0), sd * 0.6 + 0.4);
    col = mix(col, cc, m * 0.85 * cloud);
  }
  gl_FragColor = vec4(col, 1.0);
}`;function yb(s){let t=s.sky,e=new Ce({vertexShader:mb,fragmentShader:gb,side:Ke,depthWrite:!1,uniforms:{top:{value:new rt(t.top)},horizon:{value:new rt(t.horizon)},ground:{value:new rt(s.fog).multiplyScalar(.75)},sunDir:{value:new k(...t.sun).normalize()},sunColor:{value:new rt(t.sunColor)},time:{value:0},cloud:{value:s.cloud??.8},night:{value:0}}}),i=new ft(new Qi(6e3,32,16),e);return i.frustumCulled=!1,i.renderOrder=-10,i}function Mc(s,t=.68){return s.customProgramCacheKey=()=>"plainBack"+t,s.onBeforeCompile=e=>{let i=`
  if (!gl_FrontFacing) diffuseColor.rgb = vec3(${t.toFixed(2)}, ${(t+.01).toFixed(2)}, ${(t+.03).toFixed(2)});`;e.fragmentShader.includes("#include <map_fragment>")?e.fragmentShader=e.fragmentShader.replace("#include <map_fragment>","#include <map_fragment>"+i):e.fragmentShader=e.fragmentShader.replace("#include <color_fragment>","#include <color_fragment>"+i)},s.needsUpdate=!0,s}function vb(s){return s.userData.nightU={value:0},s.onBeforeCompile=t=>{t.uniforms.uNight=s.userData.nightU,t.fragmentShader=t.fragmentShader.replace("#include <common>",`#include <common>
uniform float uNight;`).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
        {
          vec3 c = diffuseColor.rgb;
          float lit = step(0.3, c.r - c.b) * step(0.88, c.r);
          vec2 cell = floor(vec2(vMapUv.x * 5.33, vMapUv.y * 11.1));
          float h = fract(sin(dot(cell, vec2(12.9898, 78.233))) * 43758.5453);
          float dark = step(c.b, c.r + 0.1) * 0.0 + step(0.2, c.b - c.r) * step(c.b, 0.45);
          float on = max(lit, dark * step(h, 0.38));
          totalEmissiveRadiance += vec3(1.0, 0.82, 0.5) * on * uNight * 2.9;
        }`)},s}function Sc(s,t){let e=[],i=-1,n=(()=>{for(let r=0;r<s;r++)if(!t(r))return r;return-1})();if(n<0)return[[0,s-1,!0]];for(let r=1;r<=s;r++){let a=(n+r)%s,o=t(a);o&&i<0&&(i=a),!o&&i>=0&&(e.push([i,(a-1+s)%s]),i=-1)}return e}function Ud(s){for(let t of s)t.deleteAttribute("uv");return He(s)}var wc=class{constructor(t,e={}){this.track=t,this.quality=e.quality||"high",this.theme=t.theme,this.group=new Fe,this.dynamic=[],this.tex={};let i=this.theme;this.rnd=We(1234),this.waterLevel=null,this.sky=yb(i),this.group.add(this.sky),this.buildLights(),this.buildTextures(),this.buildTerrain(),this.buildRoad(),this.buildBarriers(),this.buildPit(),this.buildStartLine(),this.buildScenery(),e.profile&&this.buildBrakeBoards(e.profile),this.buildDrsMarkers(),this.buildFloodlights(),this.buildMountains()}buildLights(){let t=this.theme,e=new k(...t.sky.sun).normalize();this.sunDir=e,this.hemi=new hs(new rt(t.sky.top).lerp(new rt("#ffffff"),.4),new rt(t.grass[0]).multiplyScalar(.7),.85),this.group.add(this.hemi),this.sun=new ca(new rt(t.sky.sunColor),2.6),this.sun.castShadow=this.quality!=="low";let i=this.sun.shadow.camera;i.left=-70,i.right=70,i.top=70,i.bottom=-70,i.near=10,i.far=500,this.sun.shadow.mapSize.set(this.quality==="high"?4096:2048,this.quality==="high"?4096:2048),this.sun.shadow.bias=-4e-4,this.sun.shadow.normalBias=.05,this.group.add(this.sun,this.sun.target)}setAtmosphere({dusk:t=0,wet:e=0,rain:i=0,night:n=0}={}){let r=`${Math.round(t*60)}/${Math.round(e*40)}/${Math.round(i*40)}/${Math.round(n*40)}`;if(r===this._atmoKey)return this.atmo;this._atmoKey=r;let a=this.theme;this._base||(this._base={top:new rt(a.sky.top),horizon:new rt(a.sky.horizon),sunColor:new rt(a.sky.sunColor),sunDir:new k(...a.sky.sun).normalize(),fog:new rt(a.fog),hemiInt:this.hemi.intensity,sunInt:this.sun.intensity,ground:new rt(a.fog).multiplyScalar(.75),cloud:a.cloud??.8},this._tmpA=new rt,this.atmo={fog:new rt(a.fog),fogMul:1,envMul:1,exposure:1});let o=this._base,l=this.sky.material.uniforms,c=(x,w)=>x.lerp(this._tmpA.setRGB(w*.92,w*.95,w),Z(i*.85,0,1)),h=this._tmpB||(this._tmpB=new rt("#27386f")),u=this._tmpC||(this._tmpC=new rt("#f39a55")),d=this._tmpD||(this._tmpD=new rt("#ff8532")),f=this._tmpE||(this._tmpE=new rt("#c98d73"));l.top.value.copy(o.top).lerp(h,t),l.horizon.value.copy(o.horizon).lerp(u,t),l.sunColor.value.copy(o.sunColor).lerp(d,t),l.ground.value.copy(o.ground).multiplyScalar(1-.5*t),c(l.top.value,.42*(1-.5*t)),c(l.horizon.value,.62*(1-.55*t));let g=Kt(o.sunDir.y,.1,t),y=o.sunDir.x,m=o.sunDir.z,p=Math.hypot(y,m)||1,v=Math.sqrt(Math.max(1e-4,1-g*g))/p;this.sunDir.set(y*v,g,m*v).normalize(),l.sunDir.value.copy(this.sunDir),l.cloud.value=Z(o.cloud+.25*i,0,1.2);let _=this._tmpF||(this._tmpF=new rt("#050a1e")),M=this._tmpG||(this._tmpG=new rt("#1b2a4e")),S=this._tmpH||(this._tmpH=new rt("#9db8ff"));if(l.top.value.lerp(_,n),l.horizon.value.lerp(M,n),l.sunColor.value.lerp(S,n),l.ground.value.multiplyScalar(1-.7*n),l.night.value=n,this.sun.color.copy(l.sunColor.value),this.sun.intensity=o.sunInt*(1-.72*t)*(1-.78*i)*(1-.88*n),this.hemi.intensity=o.hemiInt*(1-.5*t)*(1-.25*i)*(1-.52*n),this.hemi.color.copy(this._hemiSky||(this._hemiSky=this.hemi.color.clone())).lerp(M,n*.8),this.nightMats){this.nightMats.glow.opacity=Z(n*1.15,0,1),this.nightMats.pool.opacity=Z(n*.3,0,.3);for(let x of this.facadeMats||[])x.userData.nightU.value=n;for(let x of this.nightMats.visible)x.visible=n>.04}let b=this.atmo.fog.copy(o.fog).lerp(f,t*.75);c(b,.6*(1-.5*t)),b.lerp(M.clone().multiplyScalar(.7),n*.85),this.atmo.fogMul=(1-.5*i)*(1-.25*n),this.atmo.envMul=(1-.55*t)*(1-.4*i)*(1-.75*n),this.atmo.exposure=1+.18*t+.3*n;let T=Z(e,0,1);for(let x of[this.roadMat,this.kerbMat,...this.pitMats||[]])x&&(x.color.setRGB(1-.42*T,1-.4*T,1-.34*T),x.roughness=(x===this.kerbMat?.7:.92)-.62*T);return this.atmo}focusShadow(t){let e=this.sunDir,i=140/this.sun.shadow.mapSize.x,n=Math.round(t.x/i)*i,r=Math.round(t.z/i)*i;this.sun.position.set(n+e.x*220,t.y+e.y*220,r+e.z*220),this.sun.target.position.set(n,t.y,r),this.sun.target.updateMatrixWorld()}buildTextures(){let t=this.theme,e=this.tex;e.asphalt=bp(),e.runoff=_p(),e.grass=Dd(t.grass[0],t.grass[1]),e.grassMow=Dd(t.grass[0],t.grass[1],!0),e.gravel=Mp(),e.kerb=Sp(),e.barrier=Ep(),e.tyres=Tp(),e.crowd=Ap(),e.start=wp()}buildTerrain(){let t=this.track,e=this.theme,i=1/0,n=-1/0,r=1/0,a=-1/0;for(let L=0;L<t.N;L+=3)i=Math.min(i,t.x[L]),n=Math.max(n,t.x[L]),r=Math.min(r,t.y[L]),a=Math.max(a,t.y[L]);let o=900;i-=o,n+=o,r-=o,a+=o;let l=30,c=Math.ceil((n-i)/l),h=Math.ceil((a-r)/l),u=new Float32Array((c+1)*(h+1)*3),d=new Float32Array((c+1)*(h+1)*3),f=new Float32Array((c+1)*(h+1)*2),g={i:0,t:0,s:0,d:0,dist:0},y=new rt(e.grass[0]),m=new rt(e.grass[1]),p=new rt("#6d6a5f"),v=new rt,_=180*(e.hills??.3),M=!!e.water,S=1/0;for(let L=0;L<t.N;L++)S=Math.min(S,t.z[L]);this.waterLevel=M?S-3.2:null;let b=0;for(let L=0;L<=h;L++)for(let A=0;A<=c;A++,b++){let P=i+A*l,O=r+L*l;t.project(P,O,-1,g);let B=t.at(t.z,g.s),W=g.d>=0?1:-1,H=t.wallDist(g.i,W)+6,G=ge(H,H+(M?220:180),g.dist),nt=Oa(P*.0011,O*.0011,5),at=(Oa(P*.02,O*.02,3)-.5)*2.2,Mt;M?Mt=this.waterLevel-2.5+(nt-.5)*4:Mt=B+_*(nt*1.5-.55)+at;let gt=B-.12+at*ge(H,H+40,g.dist)*.4,Nt=Kt(gt,Mt,G),q=Math.min(P-i,n-P,O-r,a-O);Nt=Kt(-9,Nt,ge(0,500,q)),u[b*3]=P,u[b*3+1]=Nt,u[b*3+2]=-O,f[b*2]=P/40,f[b*2+1]=-O/40;let j=Oa(P*.006,O*.006,3);v.copy(y).lerp(m,j).multiplyScalar(.8+.4*Oa(P*.05,O*.05,2));let ct=Z((Nt-B-25)/90,0,.7)*G;v.lerp(p,ct),d[b*3]=v.r,d[b*3+1]=v.g,d[b*3+2]=v.b}let T=new Uint32Array(c*h*6),x=0;for(let L=0;L<h;L++)for(let A=0;A<c;A++){let P=L*(c+1)+A,O=P+1,B=P+c+1,W=B+1;T[x++]=P,T[x++]=O,T[x++]=B,T[x++]=O,T[x++]=W,T[x++]=B}let w=new ie;if(w.setAttribute("position",new qt(u,3)),w.setAttribute("color",new qt(d,3)),w.setAttribute("uv",new qt(f,2)),w.setIndex(new qt(T,1)),w.computeVertexNormals(),w.attributes.normal.getY(Math.floor(u.length/6))<0){for(let L=0;L<T.length;L+=3){let A=T[L+1];T[L+1]=T[L+2],T[L+2]=A}w.setIndex(new qt(T,1)),w.computeVertexNormals()}this.tex.grass.repeat.set(1,1);let D=new Ht({map:this.tex.grass,vertexColors:!0,roughness:1,metalness:0}),I=new ft(w,D);if(I.receiveShadow=!0,this.group.add(I),this.terrain=I,this.bounds={minX:i,maxX:n,minY:r,maxY:a},M){let L=new we(n-i+4e3,a-r+4e3);L.rotateX(-Math.PI/2);let A=new Ht({color:"#1d6a8f",roughness:.12,metalness:.25,transparent:!0,opacity:.92}),P=new ft(L,A);P.position.set((i+n)/2,this.waterLevel,-(r+a)/2),this.group.add(P),this.water=P}}ribbonGeometry(t,e,i,n,{yOff:r=0,vLen:a=10,uRepeat:o=1,vertical:l=null}={}){let c=this.track,h=c.N,u=(e-t+h)%h+1,d=new Float32Array(u*2*3),f=new Float32Array(u*2*2),g=[],y=0;for(let p=0;p<u;p++){let v=(t+p)%h,_=typeof i=="function"?i(v):i[v],M=typeof n=="function"?n(v):n[v],S=c.z[v]+r,b=c.nx[v],T=c.ny[v];d.set([c.x[v]+b*_,S,-(c.y[v]+T*_)],p*6),d.set([c.x[v]+b*M,S,-(c.y[v]+T*M)],p*6+3),p>0&&(y+=c.ds);let x=y/a;if(f.set([0,x,o,x],p*4),p<u-1){let w=p*2;g.push(w,w+2,w+1,w+1,w+2,w+3)}}let m=new ie;return m.setAttribute("position",new qt(d,3)),m.setAttribute("uv",new qt(f,2)),m.setIndex(g),m.computeVertexNormals(),m}addRibbons(t,e,{receive:i=!0,order:n=0,polygon:r=0}={}){if(!t.length)return;let a=t.length===1?t[0]:He(t),o=new ft(a,e);return o.receiveShadow=i,o.renderOrder=n,this.group.add(o),o}buildRoad(){let t=this.track,e=t.N,i=this.tex,n=new Ht({map:i.asphalt,roughness:.92,metalness:0,color:16777215});this.roadMat=n;let r=Sc(e,()=>!0),a=t.wl,o=t.wr;i.asphalt.repeat.set(1,1);let l=a[0]+o[0],c=this.ribbonGeometry(0,e-1,D=>-o[D],D=>a[D],{vLen:7.5,uRepeat:(a[0]+o[0])/7.5}),h=this.ribbonGeometry(e-1,0,D=>-o[D],D=>a[D],{vLen:7.5,uRepeat:l/7.5});this.road=this.addRibbons([c,h],n,{order:0}),this.road.material.polygonOffset=!0,this.road.material.polygonOffsetFactor=1,this.road.material.polygonOffsetUnits=1;let u=new oe({color:0,transparent:!0,opacity:.2,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1}),d=t.lineD,f=this.ribbonGeometry(0,e-1,D=>d[D]-1.1,D=>d[D]+1.1,{yOff:.006}),g=this.ribbonGeometry(e-1,0,D=>d[D]-1.1,D=>d[D]+1.1,{yOff:.006}),y=this.addRibbons([f,g],u,{receive:!1,order:1}),m=new oe({color:16053488,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}),p=[];for(let[D,I]of[[0,e-1],[e-1,0]])p.push(this.ribbonGeometry(D,I,L=>a[L]-.38,L=>a[L]-.15,{yOff:.01})),p.push(this.ribbonGeometry(D,I,L=>-o[L]+.15,L=>-o[L]+.38,{yOff:.01}));this.addRibbons(p,m,{receive:!1,order:2});let v=new Ht({map:i.kerb,roughness:.7,polygonOffset:!0,polygonOffsetFactor:-3,polygonOffsetUnits:-3});this.kerbMat=v;let _=[];for(let[D,I]of Sc(e,L=>t.kl[L]>.1))_.push(this.ribbonGeometry(D,I,L=>a[L],L=>a[L]+t.kl[L],{yOff:.025,vLen:2,uRepeat:1}));for(let[D,I]of Sc(e,L=>t.kr[L]>.1))_.push(this.ribbonGeometry(D,I,L=>-o[L]-t.kr[L],L=>-o[L],{yOff:.025,vLen:2,uRepeat:1}));i.kerb.rotation=0,i.kerb.repeat.set(1,1),this.addRibbons(_,v,{order:2});let M=new Ht({map:i.gravel,roughness:1}),S=new Ht({map:i.runoff,roughness:.95}),b=new Ht({map:i.grassMow,roughness:1}),T=[],x=[],w=[],C=D=>{let I=D>0?t.kl:t.kr,L=D>0?a:o,A=D>0?t.r1l:t.r1r,P=D>0?t.r2l:t.r2r,O=D>0?t.t1l:t.t1r,B=(G,nt)=>D*(L[G]+I[G]+nt),W=(G,nt,at)=>{at(G,nt)};for(let G of[Gt.GRAVEL,Gt.RUNOFF,Gt.GRASS])for(let[nt,at]of Sc(e,Mt=>A[Mt]>.5&&O[Mt]===G)){let Mt=q=>D>0?B(q,0):B(q,A[q]),gt=q=>D>0?B(q,A[q]):B(q,0),Nt=this.ribbonGeometry(nt,at,Mt,gt,{yOff:-.005,vLen:G===Gt.RUNOFF?8:6,uRepeat:2});(G===Gt.GRAVEL?T:G===Gt.RUNOFF?x:w).push(Nt)}let F=G=>D>0?B(G,A[G]):B(G,A[G]+P[G]),H=G=>D>0?B(G,A[G]+P[G]):B(G,A[G]);w.push(this.ribbonGeometry(0,e-1,F,H,{yOff:-.01,vLen:8,uRepeat:2})),w.push(this.ribbonGeometry(e-1,0,F,H,{yOff:-.01,vLen:8,uRepeat:2}))};C(1),C(-1),this.addRibbons(T,M),this.addRibbons(x,S),this.addRibbons(w,b)}buildBarriers(){let t=this.track,e=t.N,i=this.tex,n=Mc(new Ht({map:i.barrier,roughness:.85,side:Ae})),r=new Ht({map:i.tyres,roughness:.95,side:Ae}),a=[],o=[],l=(u,d,f,g,y,m,p)=>{let v=(d-u+e)%e+1,_=new Float32Array(v*2*3),M=new Float32Array(v*4),S=[],b=0;for(let x=0;x<v;x++){let w=(u+x)%e,C=f*(t.wallDist(w,f)+g),D=t.z[w],I=t.x[w]+t.nx[w]*C,L=t.y[w]+t.ny[w]*C;_.set([I,D-.1,-L,I,D+y,-L],x*6),x>0&&(b+=t.ds);let A=(f<0?-b:b)/m;if(M.set([A,0,A,1],x*4),x<v-1){let P=x*2;f>0?S.push(P,P+2,P+1,P+1,P+2,P+3):S.push(P,P+1,P+2,P+1,P+3,P+2)}}let T=new ie;T.setAttribute("position",new qt(_,3)),T.setAttribute("uv",new qt(M,2)),T.setIndex(S),T.computeVertexNormals(),p.push(T)},c=this.track.def.runoff?.mode==="street";for(let u of[1,-1]){if(u<0&&t.pit){let d=t.pit,f=t.idx(d.start+d.len-d.rampOut),g=t.idx(d.start+d.rampIn);l(f,g,u,.12,c?1.5:1.25,8,a)}else l(0,e-1,u,.12,c?1.5:1.25,8,a),l(e-1,0,u,.12,c?1.5:1.25,8,a);for(let d of t.corners){if(d.maxK<1/420||c||(d.sign>0?-1:1)!==u)continue;let g=(d.start-12+e)%e,y=(d.end+25)%e;l(g,y,u,-.9,1.15,4,o)}}let h=new ft(He(a),n);if(h.receiveShadow=!0,h.castShadow=!1,this.group.add(h),o.length){let u=new ft(He(o),r);this.group.add(u)}c||this.buildFences()}buildFences(){let t=this.track,e=t.N,i=[],n=[];for(let c of t.corners){if(c.maxK<1/300)continue;let h=c.sign>0?-1:1,u=(c.start-10+e)%e,f=((c.end+20)%e-u+e)%e+1,g=[],y=[];for(let p=0;p<f;p++){let v=(u+p)%e,_=h*(t.wallDist(v,h)+.2),M=t.x[v]+t.nx[v]*_,S=t.y[v]+t.ny[v]*_,b=t.z[v];g.push(M,b+1.2,-S,M,b+5,-S),p%6===0&&i.push([M,b,-S]),p<f-1&&y.push(p*2,p*2+1,p*2+2,p*2+1,p*2+3,p*2+2)}let m=new ie;m.setAttribute("position",new Zt(g,3)),m.setIndex(y),n.push(m)}if(!n.length)return;let r=new ft(He(n),new oe({color:10134701,transparent:!0,opacity:.22,side:Ae,depthWrite:!1,wireframe:!1}));this.group.add(r);let a=new Ye(.07,.07,5,5),o=new ii(a,new Ht({color:7173243,roughness:.6,metalness:.5}),i.length),l=new ee;i.forEach((c,h)=>{l.makeTranslation(c[0],c[1]+2.5,c[2]),o.setMatrixAt(h,l)}),this.group.add(o)}buildPit(){let t=this.track;if(!t.pit)return;let e=t.pit,i=t.idx(e.start),n=t.idx(e.start+e.len),r=F=>t.pitCentre(F*t.ds),a=new Ht({map:this.tex.asphalt,roughness:.9,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1});(this.pitMats||(this.pitMats=[])).push(a);let o=new ft(this.ribbonGeometry(i,n,F=>r(F)-e.width/2,F=>r(F)+e.width/2,{yOff:.012,vLen:7.5,uRepeat:e.width/7.5}),a);o.receiveShadow=!0,o.renderOrder=1,this.group.add(o);let l=new oe({color:16765952,polygonOffset:!0,polygonOffsetFactor:-3,polygonOffsetUnits:-3});this.group.add(new ft(this.ribbonGeometry(i,n,F=>r(F)+.05,F=>r(F)+.3,{yOff:.02}),l));let c=new oe({color:16777215,polygonOffset:!0,polygonOffsetFactor:-3,polygonOffsetUnits:-3});this.group.add(new ft(He([this.ribbonGeometry(i,n,F=>r(F)+e.width/2-.3,F=>r(F)+e.width/2-.12,{yOff:.02}),this.ribbonGeometry(i,n,F=>r(F)-e.width/2+.12,F=>r(F)-e.width/2+.3,{yOff:.02})]),c));let h=e.start+e.rampIn,u=e.start+e.len-e.rampOut,d={},f=new ee,g=new Xe,y=new k,m=new k,p=new k(0,1,0),v=Math.floor((u-h)/6),_=new ii(new Me(1,1,1),new Ht({color:13619926,roughness:.8}),v);for(let F=0;F<v;F++){let H=h+F*6+3;t.pointAt(H,t.pitCentre(H)+e.width/2+.35,d),m.set(d.x,d.h+.55,-d.y),g.setFromAxisAngle(p,d.heading),y.set(6.05,1.1,.4),f.compose(m,g,y),_.setMatrixAt(F,f)}_.castShadow=!0,_.receiveShadow=!0,this.group.add(_);let M=14,S=7,b=Math.floor((u-h)/6),T=new ii(new Me(1,1,1),new Ht({color:15132908,roughness:.7}),b);for(let F=0;F<b;F++){let H=h+F*6+3;t.pointAt(H,t.pitCentre(H)-e.width/2-.8-M/2,d),m.set(d.x,d.h+S/2,-d.y),g.setFromAxisAngle(p,d.heading),y.set(6.02,S,M),f.compose(m,g,y),T.setMatrixAt(F,f)}T.castShadow=!0,T.receiveShadow=!0,this.group.add(T);let x=new ii(new Me(1,1,1),new Ht({color:2895926,roughness:.6}),b);for(let F=0;F<b;F++){let H=h+F*6+3;t.pointAt(H,t.pitCentre(H)-e.width/2+1.2,d),m.set(d.x,d.h+4.6,-d.y),g.setFromAxisAngle(p,d.heading),y.set(6.02,.25,4.4),f.compose(m,g,y),x.setMatrixAt(F,f)}x.castShadow=!0,this.group.add(x);let w=(F,H,G,nt,at,Mt=0)=>(Mt&&F.rotateX(Mt),F.rotateY(at),F.translate(H,G,nt),F),C=[],D=[],I=[],L=[],A=document.createElement("canvas");A.width=512,A.height=96*ce.length;let P=A.getContext("2d");P.textAlign="center",P.textBaseline="middle",P.font='900 64px "Arial Black", Impact, sans-serif';let O=(F,H,G=1)=>{let nt=new rt(H),at=F.attributes.position.count,Mt=new Float32Array(at*4);for(let gt=0;gt<at;gt++)Mt.set([nt.r,nt.g,nt.b,G],gt*4);return F.setAttribute("color",new qt(Mt,4)),F};ce.forEach((F,H)=>{let G=t.pitBox(H);t.pointAt(G.s,t.pitCentre(G.s)-e.width/2-.78,d);let nt=d.heading+Math.PI;C.push(w(new we(4.8,3.4),d.x,d.h+1.7,-d.y,nt)),D.push(O(w(new we(4.8,1),d.x,d.h+4.05,-d.y,nt),F.color)),P.fillStyle=F.id==="solace"||F.id==="tempest"||F.id==="aurelian"?"#111":"#fff",P.fillText(F.short.toUpperCase(),256,H*96+50,480);let at=new we(4.4,.8),Mt=at.attributes.uv;for(let gt=0;gt<Mt.count;gt++)Mt.setY(gt,1-(H+1-Mt.getY(gt))/ce.length);I.push(w(at,d.x,d.h+4.05,-d.y,nt).translate(Math.sin(nt)*.03,0,Math.cos(nt)*.03)),t.pointAt(G.s,G.d,d),L.push(O(w(new we(6.4,3.4),d.x,d.h+.03,-d.y,d.heading,-Math.PI/2),F.color,.55))});let B=new yn(A);B.colorSpace=ai,this.group.add(new ft(He(C),new Ht({map:Cp(),roughness:.6}))),this.group.add(new ft(Ud(D),new oe({vertexColors:!0}))),this.group.add(new ft(He(I),new oe({map:B,transparent:!0})));let W=new ft(Ud(L),new oe({vertexColors:!0,transparent:!0,polygonOffset:!0,polygonOffsetFactor:-4,polygonOffsetUnits:-4,depthWrite:!1}));this.group.add(W),this.pitInfo={sA:h,sB:u}}buildStartLine(){let t=this.track,e=t.N,i=0,n=new oe({map:this.tex.start,polygonOffset:!0,polygonOffsetFactor:-4,polygonOffsetUnits:-4}),r=this.ribbonGeometry(e-1,1,v=>-t.wr[v],v=>t.wl[v],{yOff:.018,vLen:2.4,uRepeat:(t.wl[0]+t.wr[0])/2.4}),a=new ft(r,n);this.group.add(a);let o=[],l={},c=new oe({color:15921906,polygonOffset:!0,polygonOffsetFactor:-3,polygonOffsetUnits:-3}),h=[];for(let v=0;v<20;v++){let _=t.gridSlot(v);for(let[S,b,T,x]of[[0,0,3,.14],[-1.5,2.2,.14,4.4]]){t.pointAt(_.s-b+0,_.d+S,l);let w=new we(x>=T?x:T,x>=T?T:x);w.rotateX(-Math.PI/2),w.rotateY(l.heading),w.translate(l.x,l.h+.02,-l.y),h.push(w)}t.pointAt(_.s+.3,_.d,l);let M=new we(.14,3);M.rotateX(-Math.PI/2),M.rotateY(l.heading),M.translate(l.x,l.h+.02,-l.y),h.push(M)}this.group.add(new ft(He(h),c));let u=t.pointAt(0,0),d=t.wl[0]+t.wr[0]+5,f=new Fe,g=new Ht({color:3159098,roughness:.5,metalness:.6}),y=new ft(new Me(1,1,d+2),g);y.position.set(0,7,0),f.add(y);for(let v of[-1,1]){let _=new ft(new Me(1.2,7.5,1.2),g);_.position.set(0,3.75,v*(d+1)/2),f.add(_)}let m=new ft(new Me(.6,1.1,8.6),new Ht({color:657932,roughness:.4}));m.position.set(-.7,6.2,0),f.add(m),this.startLights=[];for(let v=0;v<5;v++){let _=new ft(new Qi(.42,16,12),new oe({color:3343621}));_.position.set(-1.05,6.2,(v-2)*1.6),_.scale.x=.5,f.add(_),this.startLights.push(_)}let p=new ft(new we(d*.7,1.4),new oe({map:Fd(2)}));p.position.set(-.56,7,0),p.rotation.y=-Math.PI/2,f.add(p),f.position.set(u.x,u.h,-u.y),f.rotation.y=u.heading,f.traverse(v=>v.castShadow=!0),this.group.add(f),this.gantry=f}setStartLights(t,e=!1){this.startLights.forEach((i,n)=>{let r=n<t;i.material.color.set(r?16718362:e?657932:3343621)})}buildScenery(){let t=this.track,e=this.theme,i=t.N;this.buildTrees(),this.buildStands(),this.buildBillboards(),e.buildings&&this.buildBuildings()}outsidePoint(t,e,i,n={}){let r=this.track,a=r.idx(t),o=e*(r.wallDist(a,e)+i);return r.pointAt(t,o,n),n}clearOfTrack(t,e,i){let n=this.track,r=n.project(t,e,-1,this._pr||(this._pr={i:0,t:0,s:0,d:0,dist:0})),a=r.d>=0?1:-1;return r.dist>n.wallDist(r.i,a)+i}groundHeight(t,e){let i=this.bounds,n=30,r=Math.ceil((i.maxX-i.minX)/n),a=(t-i.minX)/n,o=(e-i.minY)/n,l=Z(Math.floor(a),0,r-1),c=Math.floor(o),h=this.terrain.geometry.attributes.position,u=(y,m)=>h.getY(m*(r+1)+y),d=a-l,f=o-c,g=Z(c,0,Math.ceil((i.maxY-i.minY)/n)-1);return Kt(Kt(u(l,g),u(l+1,g),d),Kt(u(l,g+1),u(l+1,g+1),d),f)}buildTrees(){let t=this.theme,e=this.track,i=t.trees?.kind||"broadleaf",n=(t.trees?.density??.4)*(this.quality==="low"?.4:this.quality==="medium"?.7:1);if(n<=.01)return;let r=this.rnd,a,o,l=new rt("#4a3524"),c=(b,T)=>{let x=b.attributes.position.count,w=new Float32Array(x*3);for(let C=0;C<x;C++)w.set([T.r,T.g,T.b],C*3);return b.setAttribute("color",new qt(w,3)),b};if(i==="pine"){a=c(new Ye(.25,.4,5,6).translate(0,2.5,0),l);let b=[];for(let T=0;T<5;T++){let x=3.4-T*.55;b.push(c(new Qr(x,3.4,8).translate(0,4.2+T*2.1,0),new rt().setHSL(.36,.45,.17+T*.012)))}o=He(b),this.treeScale=[1.1,1.9]}else if(i==="palm"){a=c(new Ye(.2,.32,9,6).translate(0,4.5,0),new rt("#8a6c4a"));let b=[];for(let T=0;T<8;T++){let x=new we(1.1,5,1,3);x.rotateX(-Math.PI/2+.5),x.translate(0,0,2.4),x.rotateY(T/8*Math.PI*2),x.translate(0,9,0),b.push(c(x,new rt("#2f7a3a")))}o=He(b),this.treeScale=[.9,1.3]}else{a=c(new Ye(.3,.5,4.2,6).translate(0,2.1,0),l);let b=[],T=[[0,6.2,0,3.4],[1.9,5.2,.6,2.5],[-1.7,5.4,-.9,2.6],[.4,7.6,.4,2.4]];for(let[x,w,C,D]of T)b.push(c(new ia(D,1).translate(x,w,C),new rt().setHSL(.27+r()*.04,.45,.24+r()*.05)));o=He(b),this.treeScale=[.8,1.5]}let h=Math.floor(2200*n*(e.length/5e3)),u={trunk:new Ht({vertexColors:!0,roughness:1}),leaf:new Ht({vertexColors:!0,roughness:.9,flatShading:i!=="palm",side:i==="palm"?Ae:tn})},d=new ii(a,u.trunk,h),f=new ii(o,u.leaf,h),g=new ee,y=new Xe,m=new k,p=new k,v=new rt,_=0,M={},S=0;for(;_<h&&S<h*12;){S++;let b=r()*e.length,T=r()<.5?1:-1,w=r()<.7?6+r()*45:20+Math.pow(r(),1.5)*260;if(this.outsidePoint(b,T,w,M),!this.clearOfTrack(M.x,M.y,7))continue;let C=this.groundHeight(M.x,M.y);if(this.waterLevel!=null&&C<this.waterLevel+.6)continue;m.set(M.x,C-.1,-M.y),y.setFromAxisAngle(new k(0,1,0),r()*6.28);let D=this.treeScale[0]+r()*(this.treeScale[1]-this.treeScale[0]);p.set(D*(.85+r()*.3),D*(.85+r()*.4),D*(.85+r()*.3)),g.compose(m,y,p),d.setMatrixAt(_,g),f.setMatrixAt(_,g),v.setHSL(0,0,.8+r()*.4),f.setColorAt(_,v),_++}d.count=f.count=_,d.castShadow=!1,f.castShadow=!1,this.group.add(d,f)}buildStands(){let t=this.track,i=this.theme.stands??6;if(!i)return;let n=this.tex.crowd.clone();n.needsUpdate=!0;let r=new Me(1,1,1),a=r.attributes.uv;for(let v=0;v<a.count;v++)a.setXY(v,a.getX(v)*4,a.getY(v));let o={},l=[{s:t.length-70,side:1,len:240},{s:200,side:1,len:160}],c=[...t.corners].sort((v,_)=>_.maxK-v.maxK);for(let v of c){if(l.length>=i)break;l.push({s:v.sApex,side:v.sign>0?1:-1,len:90+this.rnd()*60})}for(;l.length<i;)l.push({s:this.rnd()*t.length,side:this.rnd()<.5?1:-1,len:100});let h=[],u=[],d=[],f=.9,g=1.1,y=7,m=4;for(let v of l){let _=Math.floor(v.len/m);for(let M=0;M<_;M++){let S=v.s-v.len/2+M*m+m/2;if(this.outsidePoint(S,v.side,8+y*g*.5,o),!this.clearOfTrack(o.x,o.y,4))continue;let b=Math.max(this.groundHeight(o.x,o.y),t.at(t.z,S)-.1);for(let T=0;T<y;T++)this.outsidePoint(S,v.side,8+(T+.5)*g,o),h.push([o.x,b+T*f+f/2,-o.y,o.heading,m,f,g]);this.outsidePoint(S,v.side,8+y*g/2,o),u.push([o.x,b+.3,-o.y,o.heading,m,.6,g*y]),M%2===0&&d.push([o.x,b+y*f+3.4,-o.y,o.heading,m*2,.25,g*(y+2)])}}let p=(v,_,M)=>{if(!v.length)return;let S=new ii(_,M,v.length),b=new ee,T=new Xe,x=new k,w=new k;v.forEach((C,D)=>{x.set(C[0],C[1],C[2]),T.setFromAxisAngle(new k(0,1,0),C[3]),w.set(C[4],C[5],C[6]),b.compose(x,T,w),S.setMatrixAt(D,b)}),S.castShadow=!1,S.receiveShadow=!0,this.group.add(S)};p(h,r,new Ht({map:n,roughness:.95})),p(u,new Me(1,1,1),new Ht({color:10132899,roughness:.9})),p(d,new Me(1,1,1),new Ht({color:15264494,roughness:.6,metalness:.2}))}buildBillboards(){let t=this.track,e=Math.floor(t.length/450),i={},n=new Map,r=[];for(let l=0;l<e;l++){let c=(l+.5)*(t.length/e)+this.rnd()*60,h=this.rnd()<.5?1:-1;if(this.outsidePoint(c,h,4.5,i),!this.clearOfTrack(i.x,i.y,3))continue;let u=Math.max(this.groundHeight(i.x,i.y),t.at(t.z,c)),d=i.heading+(h>0?0:Math.PI),f=l%6,g=new we(14,3.5);g.translate(0,4.6,0),g.rotateY(d),g.translate(i.x,u,-i.y),n.has(f)||n.set(f,[]),n.get(f).push(g);for(let y of[-5.5,5.5])r.push([i.x+Math.cos(d)*y,u+2.5,-i.y-Math.sin(d)*y])}this.billTex||(this.billTex=[0,1,2,3,4,5].map(l=>Fd(l)));for(let[l,c]of n)this.group.add(new ft(He(c),Mc(new oe({map:this.billTex[l],side:Ae}),.8)));let a=new ii(new Ye(.12,.12,5,6),new Ht({color:5593696,roughness:.6,metalness:.5}),r.length),o=new ee;r.forEach((l,c)=>{o.makeTranslation(l[0],l[1],l[2]),a.setMatrixAt(c,o)}),this.group.add(a)}buildBuildings(){let t=this.track,e={},i=[3,5,8,12,15].map((u,d)=>vb(new Ht({map:Rp(u,["#e8dcc6","#d9c7a7","#f1ece0","#c9b8a0","#e3d0cf"][d]),roughness:.85})));this.facadeMats=i;let n=i.map(()=>[]),r=[],a=new ee,o=new Xe,l=new k,c=new k,h=0;for(;h<t.length;){for(let u of[1,-1]){if(this.rnd()<.2)continue;let d=4+this.rnd()*18;if(this.outsidePoint(h,u,d+3,e),!this.clearOfTrack(e.x,e.y,d))continue;let f=18+this.rnd()*22,g=16+this.rnd()*14,y=14+this.rnd()*38;this.outsidePoint(h,u,d+3+g/2,e);let m=Math.max(this.groundHeight(e.x,e.y),t.at(t.z,h)-.2),p=new Me(f,y,g),v=p.attributes.uv,_=Math.max(1,Math.round(f/16)),M=Math.max(1,Math.round(y/20));for(let b=0;b<v.count;b++)v.setXY(b,v.getX(b)*_,v.getY(b)*M);o.setFromAxisAngle(new k(0,1,0),e.heading),a.compose(l.set(e.x,m+y/2-.3,-e.y),o,c.set(1,1,1)),p.applyMatrix4(a),n[Math.floor(this.rnd()*i.length)].push(p);let S=new Me(f+1,1.2,g+1);a.compose(l.set(e.x,m+y+.3,-e.y),o,c.set(1,1,1)),S.applyMatrix4(a),r.push(S)}h+=22+this.rnd()*30}n.forEach((u,d)=>{u.length&&this.group.add(new ft(He(u),i[d]))}),r.length&&this.group.add(new ft(He(r),new Ht({color:9390645,roughness:.9})))}buildBrakeBoards(t){let e=this.track,i=e.N,n=t.v,r={},a=0,o=[];for(;a<i;){let u=a;for(;u+1<a+i&&n[(u+1)%i]<n[u%i]-.02;)u++;if(u-a>8){let d=n[a%i],f=n[u%i];d-f>14&&o.push({start:a%i,end:u%i,drop:d-f})}a=u+1}let l=[200,150,100,50],c=l.map(()=>[]),h=[];for(let u of o){let d=u.end*e.ds;for(let f=0;f<4;f++){let g=d-l[f],y=e.idx(g),m=-Math.min(e.wr[y]+e.kr[y]+1.6,e.wallDist(y,-1)-.5);e.pointAt(g,m,r);let p=new we(.9,.9);p.translate(0,1.15,0),p.rotateY(r.heading-Math.PI/2),p.translate(r.x,r.h,-r.y),c[f].push(p),h.push([r.x,r.h+.55,-r.y])}}if(c.forEach((u,d)=>{if(!u.length)return;let f=Nd(String(l[d]),"#111","#f4f4f0",128,128);this.group.add(new ft(He(u),Mc(new oe({map:f,side:Ae}),.8)))}),h.length){let u=new ii(new Ye(.03,.03,1.1,5),new Ht({color:7829367}),h.length),d=new ee;h.forEach((f,g)=>{d.makeTranslation(f[0],f[1],f[2]),u.setMatrixAt(g,d)}),this.group.add(u)}this.brakeZones=o}buildFloodlights(){let t=this.track,e=t.def.runoff&&t.def.runoff.mode==="street"?55:80,i=Math.floor(t.length/e),n={},r={},a=[],o=[],l=[];for(let m=0;m<i;m++){let p=(m+.5)*t.length/i,v=m%2?1:-1;if(this.outsidePoint(p,v,3.4,n),!this.clearOfTrack(n.x,n.y,1.5))continue;let _=Math.max(this.groundHeight(n.x,n.y),t.at(t.z,p));a.push([n.x,_+6,-n.y]),o.push(n.x,_+12.3,-n.y),t.pointAt(p,v*-1.5,r),l.push([r.x,r.h+.05,-r.y])}if(!a.length)return;let c=new ii(new Ye(.1,.16,12,6),new Ht({color:4869974,roughness:.6,metalness:.5}),a.length),h=new ee;a.forEach((m,p)=>{h.makeTranslation(m[0],m[1],m[2]),c.setMatrixAt(p,h)});let u=new Zs({size:7,sizeAttenuation:!0,map:ka(),color:new rt(16773327).multiplyScalar(3.5),transparent:!0,opacity:0,blending:nn,depthWrite:!1}),d=new ls(new ie().setAttribute("position",new Zt(o,3)),u);d.frustumCulled=!1;let f=new oe({map:ka(),color:16773334,transparent:!0,opacity:0,blending:nn,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-3,polygonOffsetUnits:-3}),g=new we(e*1.1,e*1.1);g.rotateX(-Math.PI/2);let y=new ii(g,f,l.length);l.forEach((m,p)=>{h.makeTranslation(m[0],m[1],m[2]),y.setMatrixAt(p,h)}),y.frustumCulled=!1,c.visible=d.visible=y.visible=!1,this.group.add(c,d,y),this.nightMats={glow:u,pool:f,visible:[c,d,y]}}buildDrsMarkers(){let t=this.track;if(!t.drs||!t.drs.length)return;let e={},i={detect:[],start:[]},n={detect:[],start:[],end:[]},r=[];for(let o of t.drs)for(let[l,c]of[["detect",o.detect],["start",o.start],["end",o.end]]){let h=re(c,t.length),u=t.idx(h);if(l!=="end"){t.pointAt(h,(t.wl[u]-t.wr[u])/2,e);let g=new we(1.1,t.wl[u]+t.wr[u]);g.rotateX(-Math.PI/2),g.rotateY(e.heading),g.translate(e.x,e.h+.035,-e.y),i[l].push(g)}let d=Math.min(t.wl[u]+t.kl[u]+1.8,t.wallDist(u,1)-.6);t.pointAt(h,d,e);let f=new we(l==="detect"?2.6:1.7,.75);f.translate(0,1.55,0),f.rotateY(e.heading-Math.PI/2),f.translate(e.x,e.h,-e.y),n[l].push(f),r.push([e.x,e.h+.78,-e.y])}for(let o of["detect","start"]){if(!i[o].length)continue;let l=new oe({color:o==="detect"?10148095:3661962,transparent:!0,opacity:.85,polygonOffset:!0,polygonOffsetFactor:-4,polygonOffsetUnits:-4,depthWrite:!1});this.group.add(new ft(Ud(i[o]),l))}let a={detect:["DRS DETECTION","#0b1b2a","#9ad8ff"],start:["DRS","#04210f","#37e08a"],end:["DRS END","#2a0a0a","#ff6a5c"]};for(let o of["detect","start","end"]){if(!n[o].length)continue;let[l,c,h]=a[o],u=Nd(l,c,h,256,96);this.group.add(new ft(He(n[o]),Mc(new oe({map:u,side:Ae}),.7)))}if(r.length){let o=new ii(new Ye(.035,.035,1.6,5),new Ht({color:7829367}),r.length),l=new ee;r.forEach((c,h)=>{l.makeTranslation(c[0],c[1],c[2]),o.setMatrixAt(h,l)}),this.group.add(o)}}buildMountains(){let t=this.theme,e=this.bounds,i=(e.minX+e.maxX)/2,n=(e.minY+e.maxY)/2,r=(e.maxX-e.minX)/2,a=(e.maxY-e.minY)/2,o=220,l=[],c=[],h=[],u=new rt(t.fog),d=new rt(t.grass[0]).multiplyScalar(.55),f=new rt("#8e939a"),g=160+520*(t.hills??.3),y=[0,700,2200];for(let v=0;v<3;v++)for(let _=0;_<=o;_++){let M=_/o*Math.PI*2,S=Math.cos(M),b=Math.sin(M),x=Math.min(r/Math.max(Math.abs(S),1e-6),a/Math.max(Math.abs(b),1e-6))+y[v]-40,w=Oa(S*2.2+5,b*2.2+5,5),C=v===0?-9:v===1?g*(.12+w*.8):g*(.25+w*1.5);l.push(i+S*x,C,-(n+b*x));let D=Z(C/g,0,1),I=new rt().copy(d).lerp(f,D*.9).lerp(u,.25+.2*v);c.push(I.r,I.g,I.b)}for(let v=0;v<2;v++)for(let _=0;_<o;_++){let M=v*(o+1)+_,S=M+1,b=M+o+1,T=b+1;h.push(M,b,S,S,b,T)}let m=new ie;m.setAttribute("position",new Zt(l,3)),m.setAttribute("color",new Zt(c,3)),m.setIndex(h),m.computeVertexNormals();let p=new ft(m,new Ht({vertexColors:!0,roughness:1,side:Ae,flatShading:!0}));this.group.add(p)}update(t,e){this.sky.material.uniforms.time.value=e,this.water&&(this.water.position.y=this.waterLevel+Math.sin(e*.5)*.05)}};var mr=.36;function xb(s,t){let e=Math.cos(s),i=Math.sin(s);return[Math.sign(e)*Math.pow(Math.abs(e),2/t),Math.sign(i)*Math.pow(Math.abs(i),2/t)]}function Ec(s,t=18,e=3.4){let i=[],n=[],r=s.length;for(let g of s){let y=(g.yt-g.yb)/2,m=(g.yt+g.yb)/2,p=g.cz||0;for(let v=0;v<t;v++){let[_,M]=xb(v/t*Math.PI*2,g.n||e);i.push(g.x,m+M*y,p+_*g.w)}}for(let g=0;g<r-1;g++)for(let y=0;y<t;y++){let m=g*t+y,p=g*t+(y+1)%t,v=(g+1)*t+y,_=(g+1)*t+(y+1)%t;n.push(m,v,p,p,v,_)}let a=new ie;a.setAttribute("position",new Zt(i,3)),a.setIndex(n),wb(a);let o=Array.from(a.index.array),l=new k((s[0].x+s[r-1].x)/2,0,0),c=new k,h=new k,u=new k,d=new k;for(let g of[0,r-1]){let y=s[g],m=i.length/3;i.push(y.x,(y.yb+y.yt)/2,y.cz||0),u.set(y.x,(y.yb+y.yt)/2,y.cz||0);for(let p=0;p<t;p++){let v=g*t+p,_=g*t+(p+1)%t;c.set(i[v*3],i[v*3+1],i[v*3+2]),h.set(i[_*3],i[_*3+1],i[_*3+2]),d.subVectors(c,u).cross(h.sub(u)),d.x*(y.x-l.x)>=0?o.push(m,v,_):o.push(m,_,v)}}let f=new ie;return f.setAttribute("position",new Zt(i,3)),f.setIndex(o),f.computeVertexNormals(),f}var bb=new k(2.55,.15,-.1),_b=new k(2.55,.15,.1),Mb=new k(-2.4,.8,0),Sb=new k;function kd(s,t,e,i,n){s.rotation.set(e,0,i),s.position.copy(t).sub(Sb.copy(t).applyEuler(s.rotation)),s.position.y+=n}function wb(s){s.computeBoundingBox();let t=new k;s.boundingBox.getCenter(t);let e=s.attributes.position,i=s.index,n=new k,r=new k,a=new k,o=new k,l=new k,c=0;for(let h=0;h<i.count;h+=3)n.fromBufferAttribute(e,i.getX(h)),r.fromBufferAttribute(e,i.getX(h+1)),a.fromBufferAttribute(e,i.getX(h+2)),o.subVectors(r,n).cross(l.subVectors(a,n)),l.copy(n).add(r).add(a).multiplyScalar(1/3).sub(t),c+=Math.sign(o.dot(l));if(c<0){let h=i.array;for(let u=0;u<h.length;u+=3){let d=h[u+1];h[u+1]=h[u+2],h[u+2]=d}s.computeVertexNormals()}return s}function Jn(s){for(let t of s)t.deleteAttribute("uv");return He(s)}function si(s,t,e,i,n,r){let a=new Me(t-s,i-e,r-n);return a.translate((s+t)/2,(e+i)/2,(n+r)/2),a}function gr(s,t,e,i,n,r){let a=new Me(e,n,i*2);return a.rotateZ(r),a.translate(s,t,0),a}function jn(s,t){let e=s.attributes.position,i=new Float32Array(e.count*3),n=new rt;for(let r=0;r<e.count;r++)t(n,e.getX(r),e.getY(r),e.getZ(r)),i[r*3]=n.r,i[r*3+1]=n.g,i[r*3+2]=n.b;return s.setAttribute("color",new qt(i,3)),s}var Lp=s=>t=>t.set(s);function Tc(s,t){let e=new rt(s.color),i=new rt(s.accent),n=new rt("#14161a");return(r,a,o,l)=>{r.copy(e);let c=Math.abs(l);switch(s.livery){case"stripe":c<.075&&o>.3&&r.copy(i);break;case"split":t==="side"&&o<.3&&r.copy(i),t==="nose"&&a>2.35&&r.copy(i),t==="cover"&&c<.05&&r.copy(i);break;case"chevron":{let h=a*1.7+c*2.4,u=h-Math.floor(h);(t==="side"||t==="mono")&&u>.88&&r.copy(i),t==="nose"&&a>2.75&&r.copy(i);break}}t==="nose"&&a>2.88&&r.copy(n)}}function Eb(s){let t=new rt(s);return t.r*.299+t.g*.587+t.b*.114>.6?"#111":"#fff"}var $e={};function Tb(){if($e.blob)return $e.blob;let s=document.createElement("canvas");s.width=128,s.height=64;let t=s.getContext("2d");t.scale(1,.5);let e=t.createRadialGradient(64,64,4,64,64,62);e.addColorStop(0,"rgba(0,0,0,0.78)"),e.addColorStop(.55,"rgba(0,0,0,0.42)"),e.addColorStop(1,"rgba(0,0,0,0)"),t.fillStyle=e,t.fillRect(0,0,128,128);let i=new yn(s);return $e.blob=new oe({map:i,transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}),$e.blob.userData.shared=!0,$e.blob}function Ab(){if($e.ready)return $e;$e.carbon=new Ht({color:1382171,roughness:.42,metalness:.45}),$e.tyre=new Ht({color:1381653,roughness:.92,metalness:0}),$e.rim=new Ht({color:2829876,roughness:.35,metalness:.85}),$e.metal=new Ht({color:5593698,roughness:.4,metalness:.8}),$e.helmetVisor=new Ht({color:723728,roughness:.1,metalness:.6});for(let s of[$e.carbon,$e.tyre,$e.rim,$e.metal,$e.helmetVisor])s.userData.shared=!0;return $e.tyreGeoF=null,$e.ready=!0,$e}var Od={calm:!1},_s=class{constructor(t,e,i={}){let n=Ab();this.team=t,this.info=e,this.group=new Fe,this.model=new Fe,this.group.add(this.model),this.ghost=!!i.ghost;let r=i.detail!=="low";this.lodFar=!1;let a=[],o=[],l=[],c=Ec([{x:3,w:.03,yb:.16,yt:.2},{x:2.9,w:.09,yb:.15,yt:.25},{x:2.3,w:.13,yb:.14,yt:.33},{x:1.7,w:.2,yb:.13,yt:.43},{x:1.25,w:.27,yb:.12,yt:.52}],16);a.push(jn(c,Tc(t,"nose")));let h=Ec([{x:1.25,w:.27,yb:.12,yt:.52},{x:.7,w:.33,yb:.1,yt:.58},{x:.15,w:.35,yb:.09,yt:.62},{x:-.35,w:.33,yb:.09,yt:.6}],18);a.push(jn(h,Tc(t,"mono")));let u=Ec([{x:-.3,w:.28,yb:.2,yt:.78},{x:-.7,w:.26,yb:.2,yt:.95},{x:-1.2,w:.2,yb:.2,yt:.78},{x:-1.8,w:.12,yb:.2,yt:.52},{x:-2.25,w:.07,yb:.2,yt:.4}],16);a.push(jn(u,Tc(t,"cover")));for(let F of[-1,1]){let H=Ec([{x:.95,w:.2,yb:.12,yt:.46,cz:F*.5},{x:.5,w:.27,yb:.1,yt:.52,cz:F*.52},{x:-.3,w:.26,yb:.1,yt:.5,cz:F*.5},{x:-1,w:.18,yb:.1,yt:.4,cz:F*.4},{x:-1.75,w:.08,yb:.12,yt:.3,cz:F*.26}],14);l.push({geo:jn(H,Tc(t,"side")),side:F}),o.push(si(.9,1,.2,.42,F*.5-.17,F*.5+.17))}o.push(si(-.32,-.2,.7,.9,-.1,.1));let d=new Me(1.3,.34,.03);d.translate(-1.5,.62,0),a.push(jn(d,Lp(t.color))),o.push(si(-1.95,1.7,.05,.1,-.8,.8)),o.push(si(-2.35,-1.8,.1,.26,-.5,.5));let f=si(1.6,2.1,.06,.1,-.7,.7);o.push(f),o.push(si(-.05,.55,.6,.66,-.26,.26)),a.push(jn(si(-.55,-.25,.6,.78,-.24,.24),Lp("#1d1f24")));let g=[],y=(F,H=.025)=>new na(new Js(F.map(G=>new k(...G))),12,H,6,!1);g.push(y([[.7,.58,0],[.55,.75,0],[.3,.9,0]],.03)),g.push(y([[.3,.9,0],[.05,.9,.18],[-.3,.74,.3]],.026)),g.push(y([[.3,.9,0],[.05,.9,-.18],[-.3,.74,-.3]],.026)),o.push(...g);for(let F of[-1,1])o.push(si(.75,.9,.62,.72,F*.58,F*.76)),o.push(si(.78,.8,.55,.62,F*.4,F*.42));let m=new Ht({vertexColors:!0,roughness:.4,metalness:.4}),p=new rt(t.accent),v=new rt("#15171b"),_=(F,H)=>jn(F,G=>G.copy(H)),M=F=>{let H=[gr(2.92,.095,.42,.97,.025,.04),gr(2.72,.14,.3,.92,.02,.12),gr(2.55,.19,.24,.84,.02,.2)].map(G=>(G.scale(1,1,.5),G.translate(0,0,F*.47*.97),_(G,v)));return H.push(_(si(2.52,3.1,.07,.3,F*.96,F*1),p)),new ft(Jn(H),m)};this.frontWing=new Fe,this.frontWingL=M(-1),this.frontWingR=M(1),this.frontWing.add(this.frontWingL,this.frontWingR),o.push(si(2.35,2.55,.13,.22,-.05,.05),si(2.55,2.7,.1,.2,-.18,-.12),si(2.55,2.7,.1,.2,.12,.18)),this.rearWing=new Fe;let S=[_(gr(-2.3,.78,.4,.53,.025,-.12),v),_(gr(-2.38,.5,.3,.5,.02,.08),v)];for(let F of[-1,1])S.push(_(si(-2.58,-2,.42,.98,F*.53,F*.56),p));this.rearWing.add(new ft(Jn(S),m)),this.drsPivot=new Fe,this.drsPivot.position.set(-2.48,.9,0),this.drsPivot.add(new ft(_(gr(.22,0,.34,.51,.022,-.08),v),m)),this.rearWing.add(this.drsPivot),o.push(si(-2.2,-2.1,.5,.82,-.05,.05),si(-2.45,-2.38,.46,.5,-.4,.4));let b=1.962,T=-1.638;for(let[F,H,G]of[[b,1,.8],[b,-1,.8],[T,1,.775],[T,-1,.775]])o.push(si(F+.12,F+.22,.24,.27,Math.min(H*.25,H*G),Math.max(H*.25,H*G))),o.push(si(F-.22,F-.12,.2,.23,Math.min(H*.25,H*G),Math.max(H*.25,H*G)));let x=new sa({vertexColors:!0,roughness:.28,metalness:.35,clearcoat:1,clearcoatRoughness:.08});this.bodyMat=x,this.model.add(new ft(Jn(a),x),new ft(Jn(o),n.carbon),this.frontWing,this.rearWing),this.pods=l.map(({geo:F,side:H})=>{let G=Jn([F]),nt=new ft(G,x);return nt.userData={base:G.attributes.position.array.slice(),side:H,d:0},this.model.add(nt),nt});let w=new rt().setHSL(e.number*53%360/360,.8,.5),C=new Qi(.15,12,9);C.scale(1.15,1,.95),C.translate(.18,.66,0),this.helmet=new ft(jn(C,F=>F.copy(w)),new Ht({vertexColors:!0,roughness:.25,metalness:.2})),this.model.add(this.helmet);let D=Pp(e.number,Eb(t.color)),I=new oe({map:D,transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2}),L=[];for(let F of[-1,1]){let H=new we(.26,.26);F<0&&H.rotateY(Math.PI),H.translate(-.6,.62,F*.285),L.push(H)}let A=new we(.3,.3);A.rotateX(-Math.PI/2),A.rotateY(-Math.PI/2),A.translate(1.7,.455,0),L.push(A),this.decals=new ft(He(L),I),this.model.add(this.decals),this.brakeLight=new ft(new Me(.06,.18,.1),new oe({color:4194304})),this.brakeLight.position.set(-2.4,.33,0),this.model.add(this.brakeLight),this.wheels=[];let P=new oe({color:ni.medium.color});this.compoundMat=P;let O=r?28:14,B=new Ht({vertexColors:!0,roughness:.75,metalness:.25}),W=(F,H)=>{let G=F?.34:.44,nt=[],at=new Ye(mr,mr,G,O,1);at.rotateX(Math.PI/2),nt.push(_(at,new rt("#141414")));let Mt=new Ye(.235,.235,G*.92,14);Mt.rotateX(Math.PI/2),nt.push(_(Mt,new rt("#3a3e46")));let gt=[];for(let Rt of[-1,1]){let Ct=new On(.295,.335,O),Pt=new vn(.2,12);Rt<0&&(Ct.rotateY(Math.PI),Pt.rotateY(Math.PI)),Ct.translate(0,0,Rt*(G/2+.002)),Pt.translate(0,0,Rt*(G/2+.004)),gt.push(Ct),nt.push(_(Pt,new rt("#1a1c21")))}let Nt=new oe({color:16734736,transparent:!0,opacity:0,depthWrite:!1,blending:nn,side:Ae}),q=[];for(let Rt of[-1,1]){let Ct=new On(.07,.2,18);Rt<0&&Ct.rotateY(Math.PI),Ct.translate(0,0,Rt*(G/2+.008)),q.push(Ct)}let j=new Fe,ct=new Fe;ct.add(new ft(Jn(nt),B));let Et=new ft(Jn(q),Nt);Et.visible=!1,ct.add(Et);let dt=Jn(gt);return ct.add(new ft(dt,P)),j.add(ct),this.model.add(j),{assembly:j,spin:ct,front:F,left:H,glow:Et,glowMat:Nt}};this.wheelDefs=[W(!0,!0),W(!0,!1),W(!1,!0),W(!1,!1)],this.wheelFront=[this.wheelDefs[0],this.wheelDefs[1]],this.spinAngle=[0,0,0,0],this.detailMeshes=[this.helmet,this.decals,this.brakeLight],this.group.traverse(F=>{F.isMesh&&(F.castShadow=!this.ghost,F.receiveShadow=!1)});for(let F of this.wheelDefs)F.glow.castShadow=!1,F.glow.userData.noShadow=!0;if(!this.ghost){let F=new ft(new we(6.4,3),Tb());F.rotation.x=-Math.PI/2,F.position.set(.1,.035,0),F.renderOrder=2,F.castShadow=F.receiveShadow=!1,F.userData.noShadow=!0,this.group.add(F)}this.ghost&&this.makeGhost(),this.layoutWheels(1.962,1.638,1.6,1.55,3.6,0),this.pitchSmooth=0,this.rollSmooth=0}makeGhost(){this.group.traverse(t=>{t.isMesh&&(t.material=t.material.clone(),t.material.userData={},t.material.transparent=!0,t.material.opacity=.35,t.material.depthWrite=!1)})}setCompound(t){this.compoundMat.color.set(t.color)}update(t,e,i,n){let r=t.spec,a=Kt(t.px,t.x,e),o=Kt(t.py,t.y,e),l=t.theta-t.ptheta;l>Math.PI&&(l-=2*Math.PI),l<-Math.PI&&(l+=2*Math.PI);let c=t.ptheta+l*e,h=Math.atan(t.trackSlope*Math.cos(t.theta-t.trackHeading));this.group.position.set(a,t.trackH,-o),this.group.rotation.set(0,c,0),this.pitchSmooth=Kt(this.pitchSmooth,-t.pitch+h,Z(i*6,0,1)),this.rollSmooth=Kt(this.rollSmooth,-t.roll,Z(i*6,0,1)),this.model.rotation.order="YZX",this.model.rotation.set(this.rollSmooth,0,this.pitchSmooth),this.layoutWheels(t.a,t.b,r.trackF,r.trackR,r.wheelbase,t.steer);for(let m=0;m<4;m++){this.spinAngle[m]-=t.omega[m]*i%(Math.PI*2),this.wheelDefs[m].spin.rotation.z=this.spinAngle[m];let p=this.wheelDefs[m],v=t.brakeTemp?t.brakeTemp[m]:0,_=Z((v-450)/550,0,1);p.glow.visible!==_>.02&&(p.glow.visible=_>.02),_>.02&&(p.glowMat.opacity=Math.min(1,_*1.25),p.glowMat.color.setRGB(3.2,(.32+.5*_)*3.2,(.06+.55*_*_)*3.2))}this.drsPivot.rotation.z=t.drsPos*.55;let u=t.brake>.08;this.harvT=(this.harvT||0)+i;let d=t.harvesting&&!u&&!Od.calm?Math.floor(this.harvT*9)%2?16752656:16719888:null;this.brakeLight.material.color.setHex(d??(u?16715792:t.harvesting?16738832:4194304));let f=t.damageFront||0,g=t.damageRear||0;this.frontWingR.visible=f<.85,this.frontWingL.visible=f<.97,f!==this._df&&(this._df=f,kd(this.frontWingL,bb,f*.2,-f*.25,-f*.04),kd(this.frontWingR,_b,-f*.3,-f*.12,-f*.06)),this.rearWing.visible=g<.92,g!==this._dr&&(this._dr=g,kd(this.rearWing,Mb,g*.12,g*.12,0));let y=[t.damageSideL||0,t.damageSideR||0];for(let m=0;m<2;m++){let p=this.pods[m];p&&Math.abs(y[m]-p.userData.d)>.03&&this.crumple(p,y[m])}}crumple(t,e){let{base:i,side:n}=t.userData,r=t.geometry.attributes.position,a=r.array,o=(l,c)=>{let h=Math.sin(l*127.1+c*311.7+n*17.3)*43758.5453;return h-Math.floor(h)};for(let l=0;l<a.length;l+=3){let c=i[l],h=i[l+1],u=i[l+2],d=Z((u*n-.18)/.2,0,1),f=.4+.6*o(Math.round(c*4),Math.round(h*8)),g=e*d*f*.17;a[l]=c+(o(h*9,c*3)-.5)*e*.05*d,a[l+1]=h-e*.05*d*f,a[l+2]=u-n*g}r.needsUpdate=!0,t.geometry.computeVertexNormals(),t.userData.d=e}setShadow(t){this.shadowOn!==t&&(this.shadowOn=t,this.group.traverse(e=>{e.isMesh&&!e.userData.noShadow&&(e.castShadow=t)}))}setLod(t){if(t!==this.lodFar){this.lodFar=t;for(let e of this.detailMeshes)e.visible=!t}}layoutWheels(t,e,i,n,r,a){let o=this.wheelDefs,l=[[t,mr,-i/2],[t,mr,i/2],[-e,mr,-n/2],[-e,mr,n/2]],c=Math.tan(a),h=Math.atan2(r*c,r-i/2*c),u=Math.atan2(r*c,r+i/2*c);for(let d=0;d<4;d++)o[d].assembly.position.set(l[d][0],l[d][1],l[d][2]),o[d].assembly.rotation.y=d===0?h:d===1?u:0}setPose(t,e,i,n,r=0,a=0){this.group.position.set(t,n,-e),this.group.rotation.set(0,i,0),this.layoutWheels(1.962,1.638,1.6,1.55,3.6,r);for(let o=0;o<4;o++)this.wheelDefs[o].spin.rotation.z=a}dispose(){let t=new Set;this.group.traverse(e=>{if(e.isMesh){e.geometry.dispose();for(let i of Array.isArray(e.material)?e.material:[e.material])if(!(!i||t.has(i))){t.add(i);for(let n of["map","emissiveMap","alphaMap"])i[n]&&i[n].dispose&&i[n].dispose();i.userData&&i.userData.shared||i.dispose()}}})}};var Ac=class{constructor(t){this.group=new Fe;let e=new Ht({color:t.color,roughness:.8}),i=new Ht({color:t.accent,roughness:.8}),n=new Ht({color:15921906,roughness:.4}),r=new jr(.2,.9,3,8),a=new Qi(.16,10,8),o=new Ye(.05,.05,.5,6);o.rotateZ(Math.PI/2),this.people=[];let l=(u,d,f,g)=>{let y=new Fe,m=new ft(r,g==="wheel"?e:i);m.position.y=.75;let p=new ft(a,n);if(p.position.y=1.5,y.add(m,p),g==="wheel"){let _=new ft(o,new Ht({color:3356736,metalness:.7,roughness:.4}));_.position.set(.3,.8,0),y.add(_)}y.position.set(u,0,d),y.rotation.y=f,this.group.add(y);let v={g:y,b:m,h:p,role:g,x:u,z:d,face:f,phase:Math.random()*6};return this.people.push(v),v};for(let[u,d]of[[1.96,-1.55],[1.96,1.55],[-1.64,-1.55],[-1.64,1.55]])l(u,d,d<0?-Math.PI/2:Math.PI/2,"wheel");l(3.5,0,Math.PI,"jack"),l(-3,0,0,"jack");let c=new Fe,h=new ft(new Ye(.02,.02,1.8,5),new Ht({color:7829367}));h.position.y=.9,this.disc=new ft(new vn(.28,20),new oe({color:16719904,side:Ae})),this.disc.position.y=1.9,c.add(h,this.disc),c.position.set(4.6,0,-.9),this.group.add(c),this.lollipop=c}dispose(){this.group.traverse(t=>{t.geometry&&t.geometry.dispose(),t.material&&(Array.isArray(t.material)?t.material:[t.material]).forEach(e=>e.dispose())})}update(t,e){for(let i of this.people){let n=e<.82,r=Math.sin(t*12+i.phase)*.03;i.role==="wheel"?(i.b.position.y=n?.55+r:.75,i.b.rotation.z=0,i.h.position.y=n?1.25+r:1.5,i.g.position.x=i.x+(n?0:.05)):(i.b.position.y=.75+(n?Math.sin(t*6+i.phase)*.05:0),i.h.position.y=1.5)}this.disc.material.color.set(e>.85?2284885:16719904),this.lollipop.position.y=(e>.85,0)}};var En=150,Dp=.85,Rb=1.5,Cb=55,yr=10;function Pb(s){if(s<.35)return[.15,.95,.3];if(s<.65){let t=(s-.35)/.3;return[.15+.85*t,.95-.1*t,.3-.2*t]}return s<.95?[1,.85-.72*((s-.65)/.3),.1]:[1,.13,.1]}function Ib(s){if(s<.35)return[.1,.5,1];if(s<.65){let t=(s-.35)/.3;return[.1+.9*t,.5+.4*t,1-.9*t]}if(s<.95){let t=(s-.65)/.3;return[1,.9-.8*t,.1+.8*t]}return[1,.1,.9]}var Rc=class{constructor(t,e){this.track=t,this.profile=e;let i=En;this.pos=new Float32Array(i*2*3),this.col=new Float32Array(i*2*4);let n=[];for(let l=0;l<i-1;l++)n.push(l*2,l*2+2,l*2+1,l*2+1,l*2+2,l*2+3);let r=new ie;this.attrPos=new qt(this.pos,3).setUsage(rn),this.attrCol=new qt(this.col,4).setUsage(rn),r.setAttribute("position",this.attrPos),r.setAttribute("color",this.attrCol),r.setIndex(n),this.mesh=new ft(r,new oe({vertexColors:!0,transparent:!0,depthWrite:!1,side:Ae,polygonOffset:!0,polygonOffsetFactor:-5,polygonOffsetUnits:-5})),this.mesh.frustumCulled=!1,this.mesh.renderOrder=4,this.mpos=new Float32Array(yr*4*3),this.mcol=new Float32Array(yr*4*4);let a=[];for(let l=0;l<yr;l++)a.push(l*4,l*4+2,l*4+1,l*4+1,l*4+2,l*4+3);let o=new ie;this.mAttrPos=new qt(this.mpos,3).setUsage(rn),this.mAttrCol=new qt(this.mcol,4).setUsage(rn),o.setAttribute("position",this.mAttrPos),o.setAttribute("color",this.mAttrCol),o.setIndex(a),this.marks=new ft(o,this.mesh.material.clone()),this.marks.frustumCulled=!1,this.marks.renderOrder=5,this.mesh.add(this.marks),this.smooth=new Float32Array(i),this.margin=.96,this.cbSafe=!1}setVisible(t){this.mesh.visible=t}update(t){if(!this.mesh.visible)return;let e=this.track,i=e.N,n=e.ds,r=Math.max(t.speed,3),a=this.profile.vBrake,o=this.profile.env,l=Math.max(15,o.brakeDecel(r,.9)),c=t.s,h=Math.floor(c/n)+1,u=h*n-c,d=this.smooth;for(let m=0;m<En;m++){let p=(h+m)%i,v=Math.max(u+m*n,1),_=a[p]*this.margin;d[m]=r>_?(r*r-_*_)/(2*Math.max(v-3,1))/l:0}let f=this.pos,g=this.col,y=Z(t.d,-e.wr[t.i],e.wl[t.i]);for(let m=0;m<En;m++){let p=(h+m)%i,v=Z((u+m*n)/Cb,0,1),_=y+(e.lineD[p]-y)*(v*v*(3-2*v)),M=Dp+(Rb-Dp)*(m/En),S=e.z[p]+.05;f[m*6]=e.x[p]+e.nx[p]*(_-M),f[m*6+1]=S,f[m*6+2]=-(e.y[p]+e.ny[p]*(_-M)),f[m*6+3]=e.x[p]+e.nx[p]*(_+M),f[m*6+4]=S,f[m*6+5]=-(e.y[p]+e.ny[p]*(_+M));let b=(d[m]*2+d[Math.max(0,m-1)]+d[Math.min(En-1,m+1)])/4,[T,x,w]=this.cbSafe?Ib(b):Pb(b),C=Z(1-m/En,0,1),D=.92*Math.min(1,C*1.7)*(m<3?m/3:1);for(let I=0;I<2;I++)g[m*8+I*4]=T,g[m*8+I*4+1]=x,g[m*8+I*4+2]=w,g[m*8+I*4+3]=D}this.attrPos.needsUpdate=!0,this.attrCol.needsUpdate=!0,this.updateMarks(t,h,u,d)}updateMarks(t,e,i,n){let r=this.track,a=r.N,o=r.ds,l=this.profile.vBrake,c=this.mpos,h=this.mcol,u=0,d=(g,y,m,p,v,_,M,S)=>{if(u>=yr)return;let b=r.x[g]+r.nx[g]*y,T=r.y[g]+r.ny[g]*y,x=r.z[g]+.07,w=-r.ny[g],C=r.nx[g],D=u*12,I=[[-m,-p],[m,-p],[-m,p],[m,p]];for(let L=0;L<4;L++){let[A,P]=I[L];c[D+L*3]=b+r.nx[g]*A+w*P,c[D+L*3+1]=x,c[D+L*3+2]=-(T+r.ny[g]*A+C*P),h[u*16+L*4]=v,h[u*16+L*4+1]=_,h[u*16+L*4+2]=M,h[u*16+L*4+3]=S}u++},f=n[0]>=.95;for(let g=1;g<En-2&&u<yr;g++){let y=(e+g)%a,m=n[g]>=.95;if(m&&!f&&g>2){let _=Z(1-g/En,0,1)*.95;d(y,r.lineD[y],2.4,.45,1,1,1,_)}f=m;let p=(e+g-1)%a,v=(e+g+1)%a;if(l[y]<l[p]&&l[y]<=l[v]&&l[y]<70){let _=Z(1-g/En,0,1)*.9;d(y,r.lineD[y],.45,.45,.3,.85,1,_)}}for(let g=u;g<yr;g++){let y=g*12;for(let m=0;m<12;m++)c[y+m]=0;for(let m=0;m<4;m++)h[g*16+m*4+3]=0}this.mAttrPos.needsUpdate=!0,this.mAttrCol.needsUpdate=!0}};var vr=[{id:"launch",title:"Launch & top speed",track:"aurora",mode:"timetrial",blurb:"Hold the throttle, let the gearbox work, and learn what 300 km/h feels like.",goals:[{id:"a",text:"Reach 200 km/h",test:s=>s.maxKmh>=200},{id:"b",text:"Reach 280 km/h",test:s=>s.maxKmh>=280}],tip:"Hold W. Stay on the road: the grass costs you speed."},{id:"brake",title:"Braking in a straight line",track:"mirage",mode:"timetrial",blurb:"Brake hard and straight without locking a wheel. The brake bite is the first skill in racing.",goals:[{id:"a",text:"Three clean stops from 200+ km/h (no lock-ups)",test:s=>s.cleanStops>=3,progress:s=>`${Math.min(3,s.cleanStops)}/3`}],tip:"Reach 200 km/h on a straight, then press S firmly and hold it until you stop. Ease off the pedal if the tyres smoke."},{id:"line",title:"Clean laps",track:"rade",mode:"timetrial",blurb:"Follow the colours: green keep going, yellow ease off, red brake. Keep it tidy between the walls.",goals:[{id:"a",text:"Two valid laps (no track limits)",test:s=>s.validLaps>=2,progress:s=>`${Math.min(2,s.validLaps)}/2`},{id:"b",text:"A valid lap under 1:20",test:s=>s.bestValid<=80}],tip:"The racing line guide (L) is on. Smooth steering is quicker than late steering."},{id:"drs",title:"DRS",track:"northfield",mode:"timetrial",blurb:"The rear wing flap opens in marked zones for extra top speed. In a race you need to be within a second of the car ahead; here it is always available.",goals:[{id:"a",text:"Open the DRS twice (Space on a straight, in a zone)",test:s=>s.drsOpens>=2,progress:s=>`${Math.min(2,s.drsOpens)}/2`}],tip:"Watch for the DRS signs and the green markers at the side of the track. Press Space on the straight; braking closes the flap."},{id:"slip",title:"Slipstream and overtaking",track:"northfield",mode:"race",level:.25,fieldSize:2,laps:5,blurb:"A slow car ahead is a free lesson: tuck in behind it, use the tow down the straight and pull out to pass.",goals:[{id:"a",text:"Close to within 1 second of the car ahead",test:s=>s.minGap<=1},{id:"b",text:"Make an overtake",test:s=>s.passes>=1}],tip:"Stay in its slipstream to gain speed, then pull out early so you are alongside before the braking zone."},{id:"pit",title:"Pit stop",track:"rade",mode:"race",level:.25,fieldSize:2,laps:6,tyreWear:6,blurb:"Press B to call the stop, take the pit lane at the limiter and nail the wheel nuts.",goals:[{id:"a",text:"Complete a pit stop",test:s=>s.stops>=1},{id:"b",text:"Hit at least three wheel nuts perfectly",test:s=>s.bestPerfects>=3}],tip:"B to call the stop. Press Space as each marker enters the green band."},{id:"ers",title:"Hybrid power",track:"aurora",mode:"timetrial",blurb:"The battery is free speed: hold the boost button on the straights and let the car harvest it back under braking.",goals:[{id:"a",text:"Hold ERS boost for 8 seconds in total",test:s=>s.boostSec>=8,progress:s=>`${Math.min(8,s.boostSec).toFixed(0)}/8 s`},{id:"b",text:"A valid lap using the boost",test:s=>s.validLaps>=1&&s.boostSec>=8}],tip:"Hold Shift with the throttle down. The ERS bar on the dash drains while you boost and recharges when you brake and lift."},{id:"smooth",title:"Smooth and clean",track:"rade",mode:"timetrial",blurb:"Fast drivers do not lock wheels. Brake hard, but release as the speed drops, and keep the tyres out of the smoke.",goals:[{id:"a",text:"Two valid laps without a flat-spotted tyre",test:s=>s.smoothLaps>=2,progress:s=>`${Math.min(2,s.smoothLaps)}/2`}],tip:"Tyre smoke on the brakes means a lock-up: ease the pedal. ABS in the setup menu helps if you want it."},{id:"wet",title:"Wet-weather driving",track:"aurora",mode:"timetrial",weather:"heavy",compound:"wet",blurb:"Rain halves your margin for error. Brake earlier, turn in gently and be smooth with the throttle.",goals:[{id:"a",text:"Two valid laps in the rain",test:s=>s.validLaps>=2,progress:s=>`${Math.min(2,s.validLaps)}/2`}],tip:"You are on wet tyres. Everything takes longer: brake earlier and lift through the corners."}],Pc=s=>vr.find(t=>t.id===s)||null,Cc=class{constructor(t){this.lesson=t,this.ctx={maxKmh:0,cleanStops:0,validLaps:0,bestValid:1/0,drsOpens:0,minGap:1/0,passes:0,stops:0,bestPerfects:0,boostSec:0,smoothLaps:0},this.done=Object.fromEntries(t.goals.map(e=>[e.id,!1])),this.complete=!1,this._stop=null,this._armed=!1,this._drsOpen=!1,this._flatLap=0}update(t,e,i){let n=this.ctx,r=e.speed*3.6;n.maxKmh=Math.max(n.maxKmh,r),e.boostOn&&(n.boostSec+=t);let a=e.drsPos>.5;a&&!this._drsOpen&&n.drsOpens++,this._drsOpen=a,i.opt.mode==="race"&&e.gapAhead!=null&&Number.isFinite(e.gapAhead)&&e.ahead&&(n.minGap=Math.min(n.minGap,e.gapAhead)),n.passes=e.rs.passes||0,n.stops=e.rs.stops||0;let o=Math.max(e.flat[0],e.flat[1],e.flat[2],e.flat[3]);return r>200?(this._armed=!0,!this._stop&&e.brake>.5?this._stop={flat0:o}:this._stop||(this._flatRef=o)):this._armed&&!this._stop&&e.brake>.5&&(this._stop={flat0:this._flatRef??o}),this._stop&&e.brake<.1&&r>30&&(this._stop=null,this._armed=!1,this._flatRef=void 0),this._stop&&r<25&&(o-this._stop.flat0<.12&&n.cleanStops++,this._stop=null,this._armed=!1,this._flatRef=void 0),this.check()}onEvent(t,e){if(t.car!==e)return!1;let i=this.ctx;if(t.type==="lap"){let n=Math.max(e.flat[0],e.flat[1],e.flat[2],e.flat[3]);t.valid&&n-this._flatLap<.02&&i.smoothLaps++,this._flatLap=n}return t.type==="lap"&&t.valid&&(i.validLaps++,i.bestValid=Math.min(i.bestValid,t.time)),t.type==="pitGameDone"&&(i.bestPerfects=Math.max(i.bestPerfects,t.perfects||0)),this.check()}check(){let t=!0;for(let e of this.lesson.goals)!this.done[e.id]&&e.test(this.ctx)&&(this.done[e.id]=!0),this.done[e.id]||(t=!1);return t&&!this.complete?(this.complete=!0,!0):!1}};function Fp(s){let t={};if(s&&typeof s=="object"&&!Array.isArray(s))for(let e of vr)s[e.id]===!0&&(t[e.id]=!0);return t}var Bd="varying vec2 vUv; void main(){ vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }",Ic=class{constructor(t){this.renderer=t,this.enabled=!0,this.rt=null,this.strength=0,this.bloomOn=!0,this.bloom=0,this.gradeOn=!0,this.rtA=null,this.rtB=null,this.scene=new Bi,this.cam=new Vn(-1,1,1,-1,0,1),this.mat=new Ce({uniforms:{tDiffuse:{value:null},tBloom:{value:null},bloom:{value:0},strength:{value:0},aspect:{value:1},center:{value:new wt(.5,.46)},grade:{value:1}},vertexShader:Bd,fragmentShader:`
        uniform sampler2D tDiffuse; uniform sampler2D tBloom; uniform float bloom; uniform float strength; uniform float aspect; uniform vec2 center; uniform float grade;
        varying vec2 vUv;
        void main() {
          vec2 d = vUv - center;
          float r = length(d * vec2(aspect, 1.0));
          float m = smoothstep(0.16, 0.8, r) * strength;
          vec4 col = vec4(0.0);
          if (strength > 0.001) {
            const int N = 12;
            for (int i = 0; i < N; i++) {
              float t = float(i) / float(N - 1);
              col += texture2D(tDiffuse, center + d * (1.0 - m * 0.16 * t));
            }
            col /= float(N);
          } else col = texture2D(tDiffuse, vUv); // no blur: one sample (the grade pass alone must stay cheap)
          vec3 rgb = col.rgb + texture2D(tBloom, vUv).rgb * bloom;
          gl_FragColor = vec4(rgb, 1.0);
          #include <tonemapping_fragment>
          #include <colorspace_fragment>
          // grade (display space): a touch more contrast and colour, cool shadows, and a soft vignette that settles the eye on the road
          vec3 c = gl_FragColor.rgb;
          float lum = dot(c, vec3(0.2126, 0.7152, 0.0722));
          c = mix(vec3(lum), c, 1.0 + 0.12 * grade);
          c = (c - 0.5) * (1.0 + 0.07 * grade) + 0.5;
          c += vec3(-0.004, 0.0, 0.012) * (1.0 - lum) * grade;
          float v = smoothstep(0.42, 1.08, length(d * vec2(aspect, 1.0) * 1.15));
          c *= 1.0 - 0.34 * v * v * grade;
          gl_FragColor.rgb = clamp(c, 0.0, 1.0);
        }`,depthTest:!1,depthWrite:!1}),this.brightMat=new Ce({uniforms:{tDiffuse:{value:null},texel:{value:new wt(1,1)}},vertexShader:Bd,fragmentShader:`
        uniform sampler2D tDiffuse; uniform vec2 texel; varying vec2 vUv;
        vec3 bright(vec3 c) { float l = max(c.r, max(c.g, c.b)); float k = smoothstep(2.0, 3.6, l); return c * k; }
        void main() {
          vec3 c = bright(texture2D(tDiffuse, vUv + texel * vec2(-1.0, -1.0)).rgb) + bright(texture2D(tDiffuse, vUv + texel * vec2(1.0, -1.0)).rgb)
                 + bright(texture2D(tDiffuse, vUv + texel * vec2(-1.0, 1.0)).rgb) + bright(texture2D(tDiffuse, vUv + texel * vec2(1.0, 1.0)).rgb);
          gl_FragColor = vec4(min(c * 0.25, vec3(8.0)), 1.0);
        }`,depthTest:!1,depthWrite:!1}),this.blurMat=new Ce({uniforms:{tDiffuse:{value:null},dir:{value:new wt(1,0)}},vertexShader:Bd,fragmentShader:`
        uniform sampler2D tDiffuse; uniform vec2 dir; varying vec2 vUv;
        void main() {
          vec3 c = texture2D(tDiffuse, vUv).rgb * 0.2270270270;
          c += (texture2D(tDiffuse, vUv + dir * 1.3846153846).rgb + texture2D(tDiffuse, vUv - dir * 1.3846153846).rgb) * 0.3162162162;
          c += (texture2D(tDiffuse, vUv + dir * 3.2307692308).rgb + texture2D(tDiffuse, vUv - dir * 3.2307692308).rgb) * 0.0702702703;
          gl_FragColor = vec4(c, 1.0);
        }`,depthTest:!1,depthWrite:!1}),this.quad=new ft(new we(2,2),this.mat),this.quad.frustumCulled=!1,this.scene.add(this.quad)}ensureTarget(){let t=this.renderer.getDrawingBufferSize(new wt);if(this.rt&&this.rt.width===t.x&&this.rt.height===t.y)return;this.rt&&this.rt.dispose(),this.rt=new ei(t.x,t.y,{type:bi,samples:4,depthBuffer:!0}),this.mat.uniforms.aspect.value=t.x/t.y,this.rtA&&(this.rtA.dispose(),this.rtB.dispose());let e=Math.max(2,Math.round(t.x/4)),i=Math.max(2,Math.round(t.y/4)),n={type:bi,depthBuffer:!1,minFilter:Ve,magFilter:Ve};this.rtA=new ei(e,i,n),this.rtB=new ei(e,i,n)}pass(t,e){this.quad.material=t,this.renderer.setRenderTarget(e),this.renderer.render(this.scene,this.cam),this.quad.material=this.mat}render(t,e,i,n=0){let r=this.renderer;this.strength+=(i-this.strength)*.25,this.bloom+=((this.bloomOn?n:0)-this.bloom)*.1;let a=this.enabled&&this.strength>=.03,o=this.enabled&&this.bloom>=.02,l=this.enabled&&this.gradeOn;if(!a&&!o&&!l){r.render(t,e);return}if(this.ensureTarget(),r.setRenderTarget(this.rt),r.render(t,e),o){let c=this.rtA.width,h=this.rtA.height;this.brightMat.uniforms.tDiffuse.value=this.rt.texture,this.brightMat.uniforms.texel.value.set(1/this.rt.width,1/this.rt.height),this.pass(this.brightMat,this.rtA),this.blurMat.uniforms.tDiffuse.value=this.rtA.texture,this.blurMat.uniforms.dir.value.set(1/c,0),this.pass(this.blurMat,this.rtB),this.blurMat.uniforms.tDiffuse.value=this.rtB.texture,this.blurMat.uniforms.dir.value.set(0,1/h),this.pass(this.blurMat,this.rtA),this.blurMat.uniforms.tDiffuse.value=this.rtA.texture,this.blurMat.uniforms.dir.value.set(2/c,0),this.pass(this.blurMat,this.rtB),this.blurMat.uniforms.tDiffuse.value=this.rtB.texture,this.blurMat.uniforms.dir.value.set(0,2/h),this.pass(this.blurMat,this.rtA),this.mat.uniforms.tBloom.value=this.rtA.texture}r.setRenderTarget(null),this.mat.uniforms.tDiffuse.value=this.rt.texture,this.mat.uniforms.strength.value=a?this.strength:0,this.mat.uniforms.bloom.value=o?this.bloom:0,this.mat.uniforms.grade.value=l?1:0,o||(this.mat.uniforms.tBloom.value=this.rt.texture),r.render(this.scene,this.cam)}dispose(){this.rt&&this.rt.dispose(),this.rtA&&(this.rtA.dispose(),this.rtB.dispose()),this.brightMat.dispose(),this.blurMat.dispose(),this.mat.dispose(),this.quad.geometry.dispose()}};var Lc=class{constructor(t=4200){let e=new Float32Array(t*2*3),i=new Float32Array(t*2),n=new Float32Array(t*2),r=12345,a=()=>(r=r*1664525+1013904223>>>0)/4294967296;for(let l=0;l<t;l++){let c=a()*80,h=a()*32,u=a()*80,d=a();for(let f=0;f<2;f++){let g=(l*2+f)*3;e[g]=c,e[g+1]=h,e[g+2]=u,i[l*2+f]=d,n[l*2+f]=f}}let o=new ie;o.setAttribute("position",new qt(e,3)),o.setAttribute("aSeed",new qt(i,1)),o.setAttribute("aEnd",new qt(n,1)),this.mat=new Ce({transparent:!0,depthWrite:!1,uniforms:{time:{value:0},cam:{value:new k},intensity:{value:0},wind:{value:new wt(.18,.05)},tint:{value:new rt(.78,.84,.92)}},vertexShader:`
        attribute float aSeed; attribute float aEnd;
        uniform float time; uniform vec3 cam; uniform float intensity; uniform vec2 wind;
        varying float vA;
        void main() {
          float speed = 24.0 + aSeed * 14.0;
          vec3 p = position;
          float y = mod(p.y - time * speed, 32.0);
          vec3 w = vec3(mod(p.x - cam.x + 40.0, 80.0) - 40.0, y - 6.0, mod(p.z - cam.z + 40.0, 80.0) - 40.0);
          w.xz += wind * y * 0.6;
          vec3 world = vec3(cam.x + w.x, cam.y + w.y, cam.z + w.z);
          vec3 dir = normalize(vec3(wind.x * 0.6, -1.0, wind.y * 0.6));
          world -= dir * aEnd * (0.5 + aSeed * 0.5);
          vA = (1.0 - aEnd * 0.8) * step(aSeed, intensity) * smoothstep(0.0, 4.0, 32.0 - y) * 0.5;
          gl_Position = projectionMatrix * viewMatrix * vec4(world, 1.0);
        }`,fragmentShader:"uniform vec3 tint; varying float vA; void main(){ if (vA < 0.01) discard; gl_FragColor = vec4(tint, vA); }"}),this.mesh=new Kr(o,this.mat),this.mesh.frustumCulled=!1,this.mesh.renderOrder=8,this.mesh.visible=!1}update(t,e,i){this.mesh.visible=i>.03,this.mesh.visible&&(this.mat.uniforms.time.value+=t,this.mat.uniforms.cam.value.copy(e),this.mat.uniforms.intensity.value=i)}dispose(){this.mesh.geometry.dispose(),this.mat.dispose()}};var Dc=17,Fc=class{constructor(t,e=30,i=30){this.n=t,this.hz=i,this.frames=Math.round(e*i),this.data=new Float32Array(this.frames*t*Dc),this.sc=new Float32Array(this.frames*3),this.times=new Float32Array(this.frames),this.head=0,this.count=0,this.acc=0}tick(t,e,i,n){this.acc+=t;let r=1/this.hz;this.acc<r||(this.acc=Math.min(this.acc-r,r),this.record(e,i,n))}record(t,e,i){let n=this.head;for(let a=0;a<this.n;a++){let o=t[a],l=(n*this.n+a)*Dc,c=this.data;c[l]=o.x,c[l+1]=o.y,c[l+2]=o.theta,c[l+3]=o.trackH,c[l+4]=o.pitch,c[l+5]=o.roll,c[l+6]=o.steer,c[l+7]=o.omega[0],c[l+8]=o.omega[1],c[l+9]=o.omega[2],c[l+10]=o.omega[3],c[l+11]=o.drsPos,c[l+12]=o.brake,c[l+13]=o.harvesting?1:0,c[l+14]=Math.atan(o.trackSlope*Math.cos(o.theta-o.trackHeading)),c[l+15]=o.speed}let r=e.sc;if(r&&r.state!=="none"){let a=i.pointAt(r.s,0);this.sc[n*3]=a.x,this.sc[n*3+1]=a.y,this.sc[n*3+2]=a.heading}else this.sc[n*3]=NaN;this.times[n]=e.time,this.head=(n+1)%this.frames,this.count=Math.min(this.frames,this.count+1)}get duration(){return Math.max(0,(this.count-1)/this.hz)}idx(t){return(this.head-this.count+t+this.frames*2)%this.frames}sample(t,e){let i=Math.min(Math.max(t*this.hz,0),this.count-1),n=Math.floor(i),r=Math.min(this.count-1,n+1),a=i-n,o=this.idx(n),l=this.idx(r);for(let d=0;d<this.n;d++){let f=(o*this.n+d)*Dc,g=(l*this.n+d)*Dc,y=this.data,m=e[d];m.x=m.px=Kt(y[f],y[g],a),m.y=m.py=Kt(y[f+1],y[g+1],a);let p=y[g+2]-y[f+2];p>Math.PI&&(p-=2*Math.PI),p<-Math.PI&&(p+=2*Math.PI),m.theta=m.ptheta=y[f+2]+p*a,m.trackH=Kt(y[f+3],y[g+3],a),m.pitch=Kt(y[f+4],y[g+4],a),m.roll=Kt(y[f+5],y[g+5],a),m.steer=Kt(y[f+6],y[g+6],a);for(let _=0;_<4;_++)m.omega[_]=Kt(y[f+7+_],y[g+7+_],a);m.drsPos=Kt(y[f+11],y[g+11],a),m.brake=y[f+12],m.harvesting=y[f+13]>.5,m.trackSlope=Math.tan(Kt(y[f+14],y[g+14],a)),m.trackHeading=m.theta,m.speed=Kt(y[f+15],y[g+15],a),m.u=m.speed,m.v=0;let v=m.live;m.damageFront=v.damageFront||0,m.damageRear=v.damageRear||0,m.damageFloor=v.damageFloor||0,m.damageSideL=v.damageSideL||0,m.damageSideR=v.damageSideR||0}let c=o*3,h=l*3,u=this.sc;this.scPose=Number.isNaN(u[c])?null:{x:Kt(u[c],u[h],a),y:Kt(u[c+1],u[h+1],a),theta:u[c+2]}}};function Np(s){return s.map(t=>({spec:t.spec,a:t.a,b:t.b,x:0,y:0,px:0,py:0,theta:0,ptheta:0,trackH:0,pitch:0,roll:0,steer:0,omega:new Float64Array(4),drsPos:0,brake:0,harvesting:!1,trackSlope:0,trackHeading:0,speed:0,u:0,v:0,kerbShake:0,rpm:9e3,damageFront:0,damageRear:0,damageFloor:0,damageSideL:0,damageSideR:0,live:t,info:t.info}))}var Lb=`
attribute float size; attribute float alpha; attribute vec3 tint;
varying float vA; varying vec3 vTint;
uniform float scale;
void main() {
  vA = alpha; vTint = tint;
  vec4 mv = modelViewMatrix * vec4(position, 1.0);
  gl_PointSize = size * scale / max(0.1, -mv.z);
  gl_Position = projectionMatrix * mv;
}`,Db=`
uniform sampler2D map; uniform float light; varying float vA; varying vec3 vTint;
void main() {
  vec4 t = texture2D(map, gl_PointCoord);
  gl_FragColor = vec4(vTint * light, t.a * vA);
  if (gl_FragColor.a < 0.01) discard;
}`,xr=class{constructor(t,{additive:e=!1,gravity:i=0,drag:n=.5,bounce:r=0}={}){this.max=t,this.bounce=r,this.floor=new Float32Array(t),this.alive=!1,this.pos=new Float32Array(t*3),this.vel=new Float32Array(t*3),this.size=new Float32Array(t),this.alpha=new Float32Array(t),this.tint=new Float32Array(t*3),this.life=new Float32Array(t),this.maxLife=new Float32Array(t).fill(1),this.grow=new Float32Array(t),this.a0=new Float32Array(t),this.head=0,this.gravity=i,this.drag=n;let a=new ie;this.attrPos=new qt(this.pos,3),this.attrSize=new qt(this.size,1),this.attrAlpha=new qt(this.alpha,1),this.attrTint=new qt(this.tint,3);for(let l of[this.attrPos,this.attrSize,this.attrAlpha,this.attrTint])l.setUsage(rn);a.setAttribute("position",this.attrPos),a.setAttribute("size",this.attrSize),a.setAttribute("alpha",this.attrAlpha),a.setAttribute("tint",this.attrTint);let o=new Ce({vertexShader:Lb,fragmentShader:Db,transparent:!0,depthWrite:!1,blending:e?nn:Wn,uniforms:{map:{value:ka()},scale:{value:600},light:{value:1}}});this.points=new ls(a,o),this.points.frustumCulled=!1,this.points.renderOrder=5,this.alpha.fill(0)}emit(t,e,i,n,r,a,o,l,c,h,u,d,f){let g=this.head;this.life[g]>0||(this.head=(this.head+1)%this.max,this.alive=!0,this.floor[g]=e-.04,this.pos[g*3]=t,this.pos[g*3+1]=e,this.pos[g*3+2]=i,this.vel[g*3]=n,this.vel[g*3+1]=r,this.vel[g*3+2]=a,this.size[g]=o,this.grow[g]=l,this.a0[g]=c,this.alpha[g]=c,this.life[g]=h,this.maxLife[g]=h,this.tint[g*3]=u,this.tint[g*3+1]=d,this.tint[g*3+2]=f)}update(t,e){if(this.points.material.uniforms.scale.value=e,!this.alive)return;let i=Math.exp(-this.drag*t),n=!1;for(let r=0;r<this.max;r++){if(this.life[r]<=0){this.alpha[r]=0;continue}this.life[r]-=t,this.life[r]>0&&(n=!0);let a=this.life[r]/this.maxLife[r];this.vel[r*3]*=i,this.vel[r*3+1]=this.vel[r*3+1]*i+this.gravity*t,this.vel[r*3+2]*=i,this.pos[r*3]+=this.vel[r*3]*t,this.pos[r*3+1]+=this.vel[r*3+1]*t,this.pos[r*3+2]+=this.vel[r*3+2]*t,this.bounce&&this.pos[r*3+1]<this.floor[r]&&(this.pos[r*3+1]=this.floor[r],this.vel[r*3+1]=Math.abs(this.vel[r*3+1])*this.bounce),this.size[r]+=this.grow[r]*t,this.alpha[r]=this.a0[r]*Math.max(0,a)*Math.min(1,(1-a)*8)}this.alive=n,this.attrPos.needsUpdate=!0,this.attrSize.needsUpdate=!0,this.attrAlpha.needsUpdate=!0,this.attrTint.needsUpdate=!0}},Hd=class{constructor(t=36e3){this.max=t,this.pos=new Float32Array(t*4*3),this.col=new Float32Array(t*4);let e=new Uint32Array(t*6);for(let r=0;r<t;r++)e.set([r*4,r*4+1,r*4+2,r*4+1,r*4+3,r*4+2],r*6);let i=new ie;this.attrPos=new qt(this.pos,3).setUsage(rn),this.attrCol=new qt(this.col,1).setUsage(rn),i.setAttribute("position",this.attrPos),i.setAttribute("a",this.attrCol),i.setIndex(new qt(e,1));let n=new Ce({transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-6,polygonOffsetUnits:-6,vertexShader:"attribute float a; varying float vA; void main(){ vA = a; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }",fragmentShader:"varying float vA; void main(){ gl_FragColor = vec4(0.02,0.02,0.025, vA); }"});this.mesh=new ft(i,n),this.mesh.frustumCulled=!1,this.mesh.renderOrder=3,this.head=0,this.dirtyFrom=-1,this.dirtyCount=0,this.dirtyAll=!1}add(t,e,i,n,r,a,o,l){if(l<=0){t.on=!1;return}if(t.on){let c=e-t.x,h=n-t.z,u=c*c+h*h;if(u<.04)return;if(u<25){let d=this.head;this.head=(this.head+1)%this.max;let f=this.pos,g=d*12,y=o/2;f[g]=t.x+t.nx*y,f[g+1]=t.y+.02,f[g+2]=t.z+t.nz*y,f[g+3]=t.x-t.nx*y,f[g+4]=t.y+.02,f[g+5]=t.z-t.nz*y,f[g+6]=e+r*y,f[g+7]=i+.02,f[g+8]=n+a*y,f[g+9]=e-r*y,f[g+10]=i+.02,f[g+11]=n-a*y,this.col.fill(l,d*4,d*4+4),this.dirtyCount===0?this.dirtyFrom=d:d<this.dirtyFrom&&(this.dirtyAll=!0),this.dirtyCount++}}t.x=e,t.y=i,t.z=n,t.nx=r,t.nz=a,t.on=!0}flush(){this.dirtyCount&&(!this.dirtyAll&&this.dirtyCount<=this.max-this.dirtyFrom?(this.attrPos.clearUpdateRanges(),this.attrCol.clearUpdateRanges(),this.attrPos.addUpdateRange(this.dirtyFrom*12,this.dirtyCount*12),this.attrCol.addUpdateRange(this.dirtyFrom*4,this.dirtyCount*4)):(this.attrPos.clearUpdateRanges(),this.attrCol.clearUpdateRanges()),this.attrPos.needsUpdate=!0,this.attrCol.needsUpdate=!0,this.dirtyCount=0,this.dirtyAll=!1)}},Fb=[.78,.7,.55],Nb=[.38,.5,.25],Nc=()=>({x:0,y:0,z:0,nx:0,nz:0,on:!1}),Uc=class{constructor(t){this.smoke=new xr(900,{drag:.9,gravity:.6}),this.dust=new xr(500,{drag:.8,gravity:-3}),this.sparks=new xr(500,{additive:!0,gravity:-14,drag:.4,bounce:.3}),this.spray=new xr(1600,{drag:1.5,gravity:-1.2}),this.skid=new Hd,this.wet=0,t.add(this.smoke.points,this.dust.points,this.sparks.points,this.spray.points,this.skid.mesh),this.rnd=We(99),this.state=new WeakMap}setLight(t){for(let e of[this.smoke,this.dust,this.spray])e.points.material.uniforms.light.value=t}car(t,e){let i=this.rnd,n=Math.cos(t.theta),r=Math.sin(t.theta),a=this.state.get(t);a||this.state.set(t,a={skid:[Nc(),Nc(),Nc(),Nc()],spray:[0,0,0,0],smoke:[0,0,0,0],dust:[0,0,0,0],spark:0});for(let o=0;o<4;o++){let l=t.wheelPos[o],c=t.x+l[0]*n-l[1]*r,u=-(t.y+l[0]*r+l[1]*n),d=t.trackH,f=t.surf[o],g=t.slipVis[o],y=f===Gt.ASPHALT||f===Gt.PIT||f===Gt.KERB||f===Gt.RUNOFF,m=t.brake>.8&&t.speed>22&&t.kappa[o]<-.1&&o<2;if(y&&(g>.35||m)?this.skid.add(a.skid[o],c,d,u,-r,-n,.32,Z((.22+Math.max(g,m?.45:0)*.45)*(1-.65*this.wet),0,.8)):a.skid[o].on=!1,this.wet>.12&&y&&t.speed>16){let p=a.spray[o]+e*(14+t.speed*.5)*this.wet*(o>=2?1:.55),v=Math.floor(p);for(a.spray[o]=p-v;v-- >0;){let _=.8+i()*.2;this.spray.emit(c+(i()-.5)*.4,d+.12,u+(i()-.5)*.4,-t.u*n*.12+(i()-.5)*2,.9+i()*1.8,t.u*r*.12+(i()-.5)*2,.5+i()*.5,1.6+t.speed*.012,(.11+.07*this.wet)*Math.min(1,t.speed/45),.55+i()*.55,_*.92,_*.96,_)}}if(y&&g>.18&&t.speed>5){let p=a.smoke[o]+e*(30+g*70),v=Math.floor(p);for(a.smoke[o]=p-v;v-- >0;){let _=.82+i()*.12;this.smoke.emit(c+(i()-.5)*.3,d+.12,u+(i()-.5)*.3,(i()-.5)*1.2,.8+i()*1.2,(i()-.5)*1.2,1.1+i()*.8,3.4,.35*Math.min(1,g),.9+i()*.8,_,_,_)}}if((f===Gt.GRASS||f===Gt.GRAVEL)&&t.speed>8){let p=a.dust[o]+e*(12+t.speed*.8),v=Math.floor(p);a.dust[o]=p-v;let _=f===Gt.GRAVEL?Fb:Nb;for(;v-- >0;)this.dust.emit(c,d+.15,u,-t.u*n*.2+(i()-.5)*3,1.5+i()*3.5,t.u*r*.2+(i()-.5)*3,.7+i()*.8,2.2,.55,.7+i()*.7,_[0],_[1],_[2])}}if(t.kerbShake>.5&&t.speed>55){a.spark+=e*30;let o=Math.floor(a.spark);for(a.spark-=o;o-- >0;)this.spark(t.x,t.trackH+.08,-t.y,3,6,t)}else a.spark=0}spark(t,e,i,n,r,a){let o=this.rnd,l=a?Math.cos(a.theta):1,c=a?Math.sin(a.theta):0;for(let h=0;h<4;h++){let u=n+o()*(r-n),d=(o()-.5)*1.6;this.sparks.emit(t-l*1.4,e,i+c*1.4,-l*(u+10)*.6+Math.cos(d)*u*.3,1+o()*3,c*(u+10)*.6+Math.sin(d)*u,.28+o()*.2,-.4,1,.25+o()*.45,1,.75+o()*.2,.35)}}burst(t,e,i,n=40,r=12){let a=this.rnd;for(let o=0;o<n;o++){let l=a()*6.28,c=1+a()*r*.5,h=a()*r;this.sparks.emit(t,e+.3,i,Math.cos(l)*h,c,Math.sin(l)*h,.3+a()*.25,-.3,1,.3+a()*.7,1,.6+a()*.3,.2)}for(let o=0;o<10;o++)this.smoke.emit(t,e+.4,i,(a()-.5)*4,1+a()*2,(a()-.5)*4,1.5,4,.4,1.5,.6,.6,.6)}update(t,e){this.smoke.update(t,e),this.dust.update(t,e),this.sparks.update(t,e),this.spray.update(t,e),this.skid.flush()}};var zd=["chase","close","cockpit","tcam","heli","tv"],Qn={finish:"Finish orbit",chase:"Chase",close:"Low chase",cockpit:"Cockpit",tcam:"T-cam",heli:"Helicopter",tv:"TV broadcast"},kp=new k(0,1,0),kc=new Xe,Ub=new Xe().setFromAxisAngle(kp,-Math.PI/2),kb=new k,Ba=new k,Oc=new k,Ob=new Xe().setFromAxisAngle(kp,Math.PI),Bb=Math.exp(3)-1,Up=s=>(Math.exp(3*s)-1)/Bb,Ha=class{constructor(t){this.camera=t,this.mode="chase",this.yaw=0,this.pos=new k,this.look=new k,this.shake=0,this.lookBack=!1,this.tvIndex=-1,this.tvPoints=null,this.fov=62,this.time=0,this.init=!1,this.impact=0,this.shakePhase=0,this._view=null}next(){return this.setMode(zd[(zd.indexOf(this.mode)+1)%zd.length]),this.mode}setMode(t){this.mode=t,this.init=!1,this.tvIndex=-1}buildTv(t){let e=[],i=Math.max(6,Math.round(t.length/320)),n={};for(let r=0;r<i;r++){let a=r/i*t.length,o=r%2?1:-1;t.pit&&t.inPitRange(a)&&o<0&&(o=1);let l=t.idx(a),c=t.def.runoff&&t.def.runoff.mode==="street";t.pointAt(a,o*(t.wallDist(l,o)+(c?2.2:5+r%3*3)),n),e.push(new k(n.x,n.h+(c?6+r%3*1.5:4.5+r%3*2),-n.y))}this.tvPoints=e}update(t,e,i,n){this.time+=t;let r=this.camera,a=e.group,o=i.speed,l=a.rotation.y,c=kb.set(Math.cos(l),0,-Math.sin(l)),h=a.position,u=Z(Math.atan2(i.v,Math.max(Math.abs(i.u),8)),-.5,.5),d=62+Z(o*.1,0,14);if(this._view!==e&&(this._view&&(this._view.helmet.visible=!0),this._view=e,this.tvIndex=-1),e.helmet.visible=this.mode!=="cockpit"&&this.mode!=="tcam",this.mode==="finish"&&!this.init&&(this.fT=0),this.mode==="chase"||this.mode==="close"||this.mode==="heli"){let p=l-u*.35+(this.lookBack?Math.PI:0);this.init||(this.yaw=p),this.yaw+=bn(p-this.yaw)*(1-Math.exp(-t*(this.mode==="heli"?3:7)));let v=this.mode==="close"?5.2+o*.012:this.mode==="heli"?18:7.4+o*.022,_=this.mode==="close"?1.35:this.mode==="heli"?42:2.1+o*.004,M=Ba.set(Math.cos(this.yaw),0,-Math.sin(this.yaw)),S=Oc.copy(h).addScaledVector(M,-v).setY(h.y+_);this.init||this.pos.copy(S);let b=1-Math.exp(-t*(this.mode==="heli"?4:14));this.pos.lerp(S,b),r.position.copy(this.pos);let T=Oc.copy(h).addScaledVector(M,this.mode==="heli"?4:5).setY(h.y+(this.mode==="close"?.9:1.1));r.lookAt(T),this.mode==="heli"&&(d=52)}else if(this.mode==="cockpit"||this.mode==="tcam"){let p=this.mode==="cockpit"?Ba.set(.12,1,0):Ba.set(-.25,1.38,0);e.model.updateWorldMatrix(!0,!1),e.model.localToWorld(p),r.position.copy(p),e.model.getWorldQuaternion(kc),kc.multiply(Ub),this.lookBack&&kc.multiply(Ob),r.quaternion.copy(kc),d=this.mode==="cockpit"?76+Z(o*.05,0,8):74}else if(this.mode==="finish"){this.fT=(this.fT||0)+t;let p=this.fT,v=-l+Math.PI*.8+p*.32,_=Kt(12,6.5,Z(p/12,0,1)),M=1.5+.9*Math.sin(p*.45)+Z(p/20,0,1)*.6,S=Oc.set(h.x+Math.cos(v)*_,h.y+M,h.z+Math.sin(v)*_),b=this._pr||(this._pr={i:0,t:0,s:0,d:0,dist:0});n.project(S.x,-S.z,this._hint??-1,b),this._hint=b.i;let T=Math.max(.5,n.wallDist(b.i,1)-1.4),x=Math.max(.5,n.wallDist(b.i,-1)-1.4);if(b.d>T||b.d<-x){let w=Math.min(T,Math.max(-x,b.d))-b.d;S.x+=n.nx[b.i]*w,S.z-=n.ny[b.i]*w}this.init||this.pos.copy(S),this.pos.lerp(S,1-Math.exp(-t*6)),r.position.copy(this.pos),r.lookAt(h.x,h.y+.7,h.z),d=38}else if(this.mode==="tv"){this.tvPoints||this.buildTv(n);let p=this.tvIndex,v=1/0;if(p>=0){let S=this.tvPoints[p].distanceTo(h),b=Ba.copy(this.tvPoints[p]).sub(h).dot(c);(S>280||b<-25&&S>40)&&(p=-1)}if(p<0){for(let S=0;S<this.tvPoints.length;S++){let b=this.tvPoints[S],T=b.distanceTo(h);Ba.copy(b).sub(h).dot(c)>15&&T<v&&T>30&&(v=T,p=S)}p<0&&(p=0)}this.tvIndex=p,r.position.copy(this.tvPoints[p]);let _=Oc.copy(h).addScaledVector(c,o*.05).setY(h.y+.8);r.lookAt(_);let M=this.tvPoints[p].distanceTo(h);d=Z(2*Math.atan(10/Math.max(M,15))*(180/Math.PI),8,55)}this.init=!0;let f=Z(o/95,0,1),g=Z((i.rpm-5e3)/9500,0,1),y=this.shakeOn===!1?0:(Up(f)*.65+Up(g)*.35)*(this.mode==="cockpit"?.016:this.mode==="tcam"?.011:this.mode==="close"?.0045:.0022),m=(this.shakeOn===!1?0:i.kerbShake*.03)+y+this.impact*.25;if(this.impact*=Math.exp(-t*6),m>4e-4&&this.mode!=="tv"){this.shakePhase+=t*(53+g*40);let p=this.shakePhase;r.position.x+=Math.sin(p*1.3)*m,r.position.y+=Math.sin(p*1.9+1)*m,r.position.z+=Math.cos(p*1.1)*m}this.fov=Kt(this.fov,d,1-Math.exp(-t*4)),Math.abs(r.fov-this.fov)>.01&&(r.fov=this.fov,r.updateProjectionMatrix())}};var za={throttle:["KeyW","ArrowUp"],brake:["KeyS","ArrowDown"],left:["KeyA","ArrowLeft"],right:["KeyD","ArrowRight"],drs:["Space"],boost:["ShiftLeft","ShiftRight"],gearUp:["KeyE"],gearDown:["KeyQ"],pit:["KeyB"],tyre:["KeyT"],camera:["KeyC"],lookBack:["KeyV"],reset:["KeyR"],pause:["Escape","KeyP"],map:["KeyM"],mute:["KeyN"],auto:["KeyG"],line:["KeyL"],tele:["KeyY"],ersMode:["KeyX"],fuelMode:["KeyZ"],bbUp:["BracketRight","Equal"],bbDown:["BracketLeft","Minus"],confirm:["Enter","Space"]},Vd=[["throttle","Throttle"],["brake","Brake / reverse"],["left","Steer left"],["right","Steer right"],["drs","DRS / wheel nut"],["boost","ERS boost (hold)"],["gearUp","Gear up (manual)"],["gearDown","Gear down (manual)"],["pit","Pit request"],["tyre","Change pit tyre"],["camera","Camera"],["lookBack","Look back"],["reset","Reset to track"],["pause","Pause"],["line","Racing line guide"],["tele","Live telemetry"],["map","Minimap size"],["mute","Mute"],["auto","Autopilot toggle"],["ersMode","ERS mode"],["fuelMode","Fuel mix"],["bbUp","Brake bias forward"],["bbDown","Brake bias rearward"]],Op=/^[A-Za-z][A-Za-z0-9]{1,23}$/,Bp=new Set(["Escape","Enter","Tab","F5","F11","F12"]);function br(s){return/^Key[A-Z]$/.test(s)?s.slice(3):/^Digit\d$/.test(s)?s.slice(5):{ArrowUp:"\u2191",ArrowDown:"\u2193",ArrowLeft:"\u2190",ArrowRight:"\u2192",Space:"Space",ShiftLeft:"Shift",ShiftRight:"R-Shift",ControlLeft:"Ctrl",ControlRight:"R-Ctrl",AltLeft:"Alt",AltRight:"R-Alt",BracketLeft:"[",BracketRight:"]",Equal:"=",Minus:"-",Comma:",",Period:".",Slash:"/",Semicolon:";",Quote:"'",Backquote:"`",Backslash:"\\",Backspace:"Backspace",Escape:"Esc"}[s]||s.replace(/^Numpad/,"Num ")}function Hc(s){let t={};if(!s||typeof s!="object"||Array.isArray(s))return t;for(let e of[...Vd.map(i=>i[0]),"confirm"]){let i=s[e];if(!Array.isArray(i))continue;let n=i.filter(r=>typeof r=="string"&&Op.test(r)&&!Bp.has(r)).slice(0,3);(n.length||i.length===0)&&(t[e]=[...new Set(n)])}return t}function Ga(s){let t={};for(let i of Object.keys(za))t[i]=za[i].slice();let e=Hc(s);for(let i of Object.keys(e))t[i]=e[i];return t.pause.includes("Escape")||t.pause.push("Escape"),t}function Hp(s,t,e){let i=Hc(s);if(Bp.has(e)||!Op.test(e))return i;let n=Ga(i);for(let r of Object.keys(n))r!==t&&n[r].includes(e)&&(i[r]=n[r].filter(a=>a!==e));return i[t]=[e],i}var Hb=(s,t)=>(t=Z(t,0,.9),Math.abs(s)<t?0:(s-Math.sign(s)*t)/(1-t)),zb=/^(INPUT|TEXTAREA|SELECT)$/,Gb=3e3,Gd=class extends Map{add(t){return this.set(t,performance.now())}has(t){let e=super.get(t);return e!==void 0&&performance.now()-e<Gb}},Bc=class{constructor(){this.down=new Set,this.pressed=new Gd,this.padLast=-1e9,this.capture=()=>!0,this.throttle=0,this.brake=0,this.steer=0,this.keys=za,this.touch={left:!1,right:!1,throttle:!1,brake:!1},this.touchMode=!1,this.padActive=!1,this.padPrev=[],this.opts={steerSpeed:1,padDead:.07,rumble:!0},this.rumbleT=0,window.addEventListener("keydown",t=>{if(t.repeat||t.ctrlKey||t.metaKey)return;let e=t.target&&zb.test(t.target.tagName||"");!e&&this.capture()&&["Space","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(t.code)&&t.preventDefault(),!e&&(this.down.add(t.code),this.pressed.set(t.code,performance.now()))}),window.addEventListener("keyup",t=>{this.down.delete(t.code),(t.code==="MetaLeft"||t.code==="MetaRight")&&this.down.clear()}),document.addEventListener("visibilitychange",()=>{document.hidden&&this.down.clear()}),window.addEventListener("blur",()=>this.down.clear())}isDown(t){return this.keys[t].some(e=>this.down.has(e))}wasPressed(t){return this.keys[t].some(e=>this.pressed.has(e))}pad(){let t=navigator.getGamepads?navigator.getGamepads():[],e=null;for(let i of t)if(!(!i||!i.connected||i.axes.length<2)){if(i.mapping==="standard")return i;e=e||i}return e}rumble(t,e,i){let n=this.pad();if(!n||!this.opts.rumble||!this.padActive)return;let r=n.vibrationActuator;if(!r||!r.playEffect||(this.rumbleT-=i,this.rumbleT>0))return;this.rumbleT=.1;let a=0;for(let c=0;c<4;c++)a=Math.max(a,t.slipVis[c]);let o=Z(a*.5+e*1.2,0,1),l=Z(t.kerbShake*.9+(t.onGrass?.3:0),0,1);if(!(o<.03&&l<.03))try{Promise.resolve(r.playEffect("dual-rumble",{duration:120,strongMagnitude:o,weakMagnitude:l})).catch(()=>{})}catch{}}poll(t,e,i=!1){let n={throttle:0,brake:0,steer:0,boost:!1,gearUp:!1,gearDown:!1,drsPress:!1,pitToggle:!1,tyreCycle:!1,camera:!1,reset:!1,pause:!1,lookBack:!1,map:!1,mute:!1,autoToggle:!1,line:!1,tele:!1,confirm:!1,ersCycle:!1,fuelCycle:!1,bbDelta:0};i&&(this.throttle=this.brake=this.steer=0);let r=this.isDown("throttle")||this.touch.throttle,a=this.isDown("brake")||this.touch.brake,o=this.isDown("left")||this.touch.left,l=this.isDown("right")||this.touch.right;if(!i){this.throttle+=Z((r?1:0)-this.throttle,-t*12,t*5.5),this.brake+=Z((a?1:0)-this.brake,-t*14,t*5),a&&this.brake<.28&&(this.brake=.28);let h=(o?1:0)-(l?1:0),u=Z(e/85,0,1),d=(4.6-2.6*u)*this.opts.steerSpeed,f=(7.5-2*u)*this.opts.steerSpeed,g=h!==0&&Math.sign(h)===Math.sign(this.steer||h)?d:f;this.steer+=Z(h-this.steer,-t*g,t*g)}n.throttle=this.throttle,n.brake=this.brake,n.steer=this.steer,n.boost=this.isDown("boost"),n.lookBack=this.isDown("lookBack"),n.gearUp=this.wasPressed("gearUp"),n.gearDown=this.wasPressed("gearDown"),n.drsPress=this.wasPressed("drs"),n.pitToggle=this.wasPressed("pit"),n.tyreCycle=this.wasPressed("tyre"),n.camera=this.wasPressed("camera"),n.reset=this.wasPressed("reset"),n.pause=this.wasPressed("pause"),n.map=this.wasPressed("map"),n.mute=this.wasPressed("mute"),n.autoToggle=this.wasPressed("auto"),n.line=this.wasPressed("line"),n.tele=this.wasPressed("tele"),n.confirm=this.wasPressed("confirm"),n.ersCycle=this.wasPressed("ersMode"),n.fuelCycle=this.wasPressed("fuelMode"),n.bbDelta=(this.wasPressed("bbUp")?1:0)-(this.wasPressed("bbDown")?1:0);let c=this.pad();if(c){let h=Hb(c.axes[0]||0,this.opts.padDead),u=c.buttons[7]?c.buttons[7].value:0,d=c.buttons[6]?c.buttons[6].value:0,f=v=>!!(c.buttons[v]&&c.buttons[v].pressed),g=v=>f(v)&&!this.padPrev[v],y=Math.abs(h)>.05||u>.05||d>.05||c.buttons.some(v=>v.pressed),m=performance.now();y&&(this.padLast=m),(r||a||o||l)&&(this.padLast=-1e9),this.padActive=m-this.padLast<2500,this.padActive&&(n.steer=-Math.sign(h)*Math.pow(Math.abs(h),1.35),n.throttle=u,n.brake=d,n.gearUp=n.gearUp||g(5),n.gearDown=n.gearDown||g(4),n.drsPress=n.drsPress||g(0),n.pitToggle=n.pitToggle||g(1),n.camera=n.camera||g(3),n.tyreCycle=n.tyreCycle||g(15),n.fuelCycle=n.fuelCycle||g(12),n.ersCycle=n.ersCycle||g(13),n.reset=n.reset||g(8),n.pause=n.pause||g(9),n.lookBack=n.lookBack||f(10),n.boost=n.boost||f(2)),this.padPrev=c.buttons.map(v=>v.pressed)}return this.pressed.clear(),n}};var zc=class{constructor(){this.ctx=null,this.enabled=!0,this.volume=.55,this.voices=[],this.started=!1,this.lastGear=1,this.prevThr=0,this.weather={rain:0,wet:0}}start(){if(!(this.started||this.failed))try{this._build()}catch(t){console.warn("audio unavailable",t),this.failed=!0,this.started=!1,this.master=null;try{this.ctx&&this.ctx.close()}catch{}this.ctx=null}}_build(){let t=window.AudioContext||window.webkitAudioContext;if(!t)return;this.ctx=new t;let e=this.ctx;this.master=e.createGain(),this.master.gain.value=this.enabled?this.volume:0;let i=e.createDynamicsCompressor();i.threshold.value=-14,i.ratio.value=6,this.master.connect(i),i.connect(e.destination);let n=e.sampleRate*2,r=e.createBuffer(1,n,e.sampleRate),a=r.getChannelData(0),o=0,l=0,c=0;for(let A=0;A<n;A++){let P=Math.random()*2-1;o=.99765*o+P*.099046,l=.963*l+P*.2965164,c=.57*c+P*1.0526913,a[A]=(o+l+c+P*.1848)*.2}this.noiseBuf=r;let h=(A=!0)=>{let P=e.createBufferSource();return P.buffer=r,P.loop=A,P};this.makeNoise=h;let u=e.createGain();u.gain.value=0;let d=e.createWaveShaper(),f=new Float32Array(1024);for(let A=0;A<1024;A++){let P=A/512-1;f[A]=Math.tanh(P*1.3)*.9}d.curve=f,this.engFilter=e.createBiquadFilter(),this.engFilter.type="lowpass",this.engFilter.Q.value=.6;let g=e.createBiquadFilter();g.type="peaking",g.frequency.value=700,g.gain.value=3,this.oscs=[{o:e.createOscillator(),g:e.createGain(),mult:1.5,w:"triangle",a:.5},{o:e.createOscillator(),g:e.createGain(),mult:3,w:"sawtooth",a:.2},{o:e.createOscillator(),g:e.createGain(),mult:6,w:"triangle",a:.08}];for(let A of this.oscs)A.o.type=A.w,A.g.gain.value=A.a,A.o.connect(A.g),A.g.connect(d),A.o.start();d.connect(this.engFilter),this.engFilter.connect(g),g.connect(u);let y=h(),m=e.createBiquadFilter();m.type="bandpass",m.frequency.value=1200,m.Q.value=.5,this.nzGain=e.createGain(),this.nzGain.gain.value=0,y.connect(m),m.connect(this.nzGain),this.nzGain.connect(u),y.start(),this.nzf=m,u.connect(this.master),this.eng=u;let p=h(),v=e.createBiquadFilter();v.type="lowpass",v.frequency.value=900,this.windGain=e.createGain(),this.windGain.gain.value=0,p.connect(v),v.connect(this.windGain),this.windGain.connect(this.master),p.start(),this.windFilter=v;let _=h(),M=e.createBiquadFilter();M.type="bandpass",M.frequency.value=1e3,M.Q.value=2.5,this.tyreGain=e.createGain(),this.tyreGain.gain.value=0,_.connect(M),M.connect(this.tyreGain),this.tyreGain.connect(this.master),_.start(),this.tyreFilter=M;let S=h(),b=e.createBiquadFilter();b.type="lowpass",b.frequency.value=180,this.rumbleGain=e.createGain(),this.rumbleGain.gain.value=0,S.connect(b),b.connect(this.rumbleGain),this.rumbleGain.connect(this.master),S.start(),this.rumbleFilter=b;let T=h(),x=e.createBiquadFilter();x.type="highpass",x.frequency.value=2200,this.rainGain=e.createGain(),this.rainGain.gain.value=0,T.connect(x),x.connect(this.rainGain),this.rainGain.connect(this.master),T.start();let w=h(),C=e.createBiquadFilter();C.type="bandpass",C.frequency.value=1700,C.Q.value=.7,this.sprayGain=e.createGain(),this.sprayGain.gain.value=0,w.connect(C),C.connect(this.sprayGain),this.sprayGain.connect(this.master),w.start(),this.sprayFilter=C;let D=h(),I=e.createBiquadFilter();I.type="bandpass",I.frequency.value=700,I.Q.value=.4;let L=e.createGain();L.gain.value=.05,D.connect(I),I.connect(L),L.connect(this.master),D.start(),this.voices=[];for(let A=0;A<6;A++){let P=e.createOscillator(),O=e.createOscillator();P.type="triangle",O.type="triangle";let B=e.createGain();B.gain.value=0;let W=e.createBiquadFilter();W.type="lowpass",W.frequency.value=600;let F=e.createStereoPanner?e.createStereoPanner():Object.assign(e.createGain(),{pan:{setTargetAtTime(){}}});P.connect(W),O.connect(W),W.connect(B),B.connect(F),F.connect(this.master),P.start(),O.start(),this.voices.push({o1:P,o2:O,g:B,f:W,pan:F,car:null,d2:0})}this.started=!0}resume(){this.ctx&&this.ctx.state==="suspended"&&this.ctx.resume()}setEnabled(t){this.enabled=t,this.master&&this.master.gain.setTargetAtTime(t?this.volume:0,this.ctx.currentTime,.05)}setVolume(t){this.volume=t,this.master&&this.enabled&&this.master.gain.setTargetAtTime(t,this.ctx.currentTime,.05)}update(t,e,i,n,r){if(!this.started)return;let a=this.ctx.currentTime,o=(S,b,T=.03)=>{Number.isFinite(b)&&S.setTargetAtTime(b,a,T)};if(r){o(this.eng.gain,0,.1),o(this.windGain.gain,0,.1),o(this.tyreGain.gain,0,.1),o(this.rumbleGain.gain,0,.1),o(this.rainGain.gain,0,.1),o(this.sprayGain.gain,0,.1);for(let S of this.voices)o(S.g.gain,0,.1),S.car=null;this.lastGear=t.gear,this.prevThr=t.throttle;return}let l=t.rpm,c=l/60,h=t.throttle,u=.25+.75*h;for(let S of this.oscs)o(S.o.frequency,c*S.mult,.02);o(this.engFilter.frequency,240+l*.13+h*320,.08),o(this.eng.gain,(.12+.2*u)*(.65+l/4e4),.08),o(this.nzGain.gain,.015+h*.03*(l/15e3),.08),o(this.nzf.frequency,900+l*.08,.1);let d=t.speed;o(this.windGain.gain,Z((d/95)**2*.22,0,.25),.15),o(this.windFilter.frequency,250+d*5,.15);let f=0;for(let S=0;S<4;S++)f=Math.max(f,t.slipVis[S]);o(this.tyreGain.gain,Z(f*.16,0,.14),.08),o(this.tyreFilter.frequency,800+300*Z(d/60,0,1)+f*200,.1);let g=t.kerbShake*.22+(t.onGrass?Z(d/60,0,1)*.2:0);o(this.rumbleGain.gain,g,.04),o(this.rumbleFilter.frequency,90+d*2.5,.1),o(this.rainGain.gain,this.weather.rain*.05,.4),o(this.sprayGain.gain,Z(this.weather.wet*(d/80)*.11,0,.12),.2),o(this.sprayFilter.frequency,1200+d*12,.2),this.prevThr>.6&&h<.1&&l>8500&&d>25?this.pops(3+Math.floor(Math.random()*5),Z((l-7e3)/8e3,.2,1)):h<.05&&l>9500&&d>40&&Math.random()<n*3.2&&this.pops(1+Math.floor(Math.random()*2),Z((l-8e3)/7e3,.15,.8)),this.prevThr=h,t.gear!==this.lastGear&&(t.gear<this.lastGear&&h<.3&&l>8e3&&this.pops(2,.7),this.lastGear=t.gear,this.blip(110,.08,.035,"sine"));let m=i.pos,p=i.right,v=i.vel,_=this.voices.length,M=this._sel||(this._sel=[]);M.length=0;for(let S of e){let b=S.wx-m.x,T=S.wz-m.z;if(S.d2=b*b+T*T,!(S.d2>62500))if(M.length<_)M.push(S);else{let x=0;for(let w=1;w<_;w++)M[w].d2>M[x].d2&&(x=w);S.d2<M[x].d2&&(M[x]=S)}}for(let S of this.voices)S.car&&!M.some(b=>b.car===S.car)&&(S.car=null,o(S.g.gain,0,.1));for(let S of M){if(this.voices.some(T=>T.car===S.car))continue;let b=this.voices.find(T=>!T.car);b&&(b.car=S.car)}for(let S of this.voices){let b=S.car?M.find(B=>B.car===S.car):null;if(!b){S.car=null,o(S.g.gain,0,.1);continue}let T=b.car,x=b.wx-m.x,w=b.wz-m.z,C=Math.sqrt(b.d2)+1,D=b.vx-v.x,I=b.vz-v.z,L=(D*x+I*w)/C,A=1/(1+Z(L,-90,90)/340),P=T.rpm/60*3*A;o(S.o1.frequency,P,.04),o(S.o2.frequency,P*.5,.04),o(S.f.frequency,220+T.rpm*.09,.1);let O=1/(1+(C/18)**1.6);o(S.g.gain,.07*O*(.4+.6*T.throttle),.08),o(S.pan.pan,Z((x*p.x+w*p.z)/C,-1,1),.05)}}pops(t,e=.6){if(!this.started||!this.enabled)return;let i=this.ctx,n=0;for(let r=0;r<t;r++){n+=.03+Math.random()*.09;let a=i.currentTime+n,o=this.makeNoise(!1),l=i.createBiquadFilter();l.type="bandpass",l.frequency.value=500+Math.random()*1400,l.Q.value=.9;let c=i.createGain(),h=(.1+.16*e)*(.5+Math.random()*.6);c.gain.setValueAtTime(1e-4,a),c.gain.linearRampToValueAtTime(h,a+.004),c.gain.exponentialRampToValueAtTime(5e-4,a+.05+Math.random()*.05),o.connect(l),l.connect(c),c.connect(this.master),o.start(a,Math.random()),o.stop(a+.14);let u=i.createOscillator(),d=i.createGain();u.type="sine",u.frequency.setValueAtTime(140,a),u.frequency.exponentialRampToValueAtTime(55,a+.06),d.gain.setValueAtTime(1e-4,a),d.gain.linearRampToValueAtTime(h*.8,a+.004),d.gain.exponentialRampToValueAtTime(5e-4,a+.08),u.connect(d),d.connect(this.master),u.start(a),u.stop(a+.1)}}blip(t,e=.1,i=.1,n="sine",r=0,a=0){if(!this.started)return;let o=this.ctx,l=o.currentTime+a,c=o.createOscillator(),h=o.createGain();c.type=n,c.frequency.setValueAtTime(t,l),r&&c.frequency.exponentialRampToValueAtTime(Math.max(20,t+r),l+e),h.gain.setValueAtTime(i,l),h.gain.exponentialRampToValueAtTime(8e-4,l+e),c.connect(h),h.connect(this.master),c.start(l),c.stop(l+e+.02)}thud(t=1){if(!this.started)return;let e=this.ctx,i=e.currentTime,n=this.makeNoise(!1),r=e.createBiquadFilter();r.type="lowpass",r.frequency.value=500+900*t;let a=e.createGain();a.gain.setValueAtTime(Z(.35+t*.5,0,1),i),a.gain.exponentialRampToValueAtTime(.001,i+.35+.3*t),n.connect(r),r.connect(a),a.connect(this.master),n.start(i,Math.random()),n.stop(i+.8),this.blip(90,.25,.3*t,"sine",-50)}light(t){this.blip(t>=5?880:660,.18,.12,"sine")}cheer(t=1){if(!this.started)return;let e=this.ctx,i=e.currentTime,n=this.makeNoise(!0),r=e.createBiquadFilter();r.type="bandpass",r.frequency.setValueAtTime(700,i),r.frequency.linearRampToValueAtTime(1500,i+1.2),r.Q.value=.5;let a=e.createGain();a.gain.setValueAtTime(1e-4,i),a.gain.linearRampToValueAtTime(.35*t,i+.9),a.gain.exponentialRampToValueAtTime(8e-4,i+4.5),n.connect(r),r.connect(a),a.connect(this.master),n.start(i,Math.random()),n.stop(i+4.6)}fanfare(){[[523.25,0],[659.25,.16],[783.99,.32],[1046.5,.5]].forEach(([t,e])=>this.blip(t,.45,.08,"triangle",0,e))}go(){this.blip(1320,.45,.14,"sine")}radioClick(){if(!this.started)return;let t=this.ctx,e=t.currentTime,i=this.makeNoise(!1),n=t.createBiquadFilter();n.type="bandpass",n.frequency.value=1900,n.Q.value=1.4;let r=t.createGain();r.gain.setValueAtTime(1e-4,e),r.gain.exponentialRampToValueAtTime(.09,e+.01),r.gain.exponentialRampToValueAtTime(8e-4,e+.16),i.connect(n),n.connect(r),r.connect(this.master),i.start(e),i.stop(e+.2),this.blip(1500,.05,.035,"square",0,.17),this.blip(1180,.05,.03,"square",0,.235)}ui(t="click"){t==="click"?this.blip(720,.05,.05,"triangle"):t==="good"?(this.blip(660,.1,.07,"triangle"),this.blip(990,.14,.07,"triangle",0,.09)):t==="bad"?this.blip(180,.25,.1,"sawtooth",-60):t==="radio"&&this.radioClick()}};var Wd=s=>String(s??"").replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t]),$t=(s,t=document)=>t.querySelector(s),$d=15,ri=(s,t)=>{t=String(t),s._t!==t&&(s._t=t,s.textContent=t)},Va=(s,t)=>{s._c!==t&&(s._c=t,s.className=t)},_r=(s,t,e)=>{let i="_s"+t;s[i]!==e&&(s[i]=e,s.style[t]=e)},zp=s=>(s=Math.max(0,Math.ceil(s)),Math.floor(s/60)+":"+String(s%60).padStart(2,"0")),Gc=class{constructor(t){this.root=t,this.units="kmh",this.msgs=[],this.lastTower=0,this.lastMini=0,this.teleOn=!1,this.keyNames={pit:"B",tyre:"T"},this.teleBuf={t:new Float32Array(240),b:new Float32Array(240),s:new Float32Array(240),v:new Float32Array(240),n:0,last:0,draw:0},t.innerHTML=`
      <div id="tower" class="hud-box"><div class="hd"><span>Race</span><span id="tw-lap"></span></div><div id="tw-rows"></div></div>
      <div id="topbar" class="hud-box"><div class="lap" id="tb-lap"></div><div class="clock" id="tb-clock"></div><div class="wx" id="tb-wx"></div></div>
      <div id="timing" class="hud-box">
        <div><span class="cur" id="t-cur">0:00.000</span><span class="delta" id="t-delta"></span></div>
        <div class="lines"><span>Last</span><span id="t-last">--:--.---</span><span>Best</span><span id="t-best">--:--.---</span><span>Fastest</span><span id="t-fast">--:--.---</span></div>
        <div class="sectors" id="t-sec"><i></i><i></i><i></i></div>
      </div>
      <div id="minimap" class="hud-box"><canvas width="380" height="260"></canvas></div>
      <div id="lights" class="hud-box hidden"><i></i><i></i><i></i><i></i><i></i></div>
      <div id="pitgame" class="hud-box hidden"><div class="pgt">Pit stop \xB7 press <kbd id="pg-key">Space</kbd> with the marker in the green</div><div class="pgw">${["FL","FR","RL","RR"].map(e=>`<div class="nut"><div class="trk"><i class="gd"></i><i class="pf"></i><b></b></div><span>${e}</span></div>`).join("")}</div><div class="pgr"></div></div>
      <div id="msgs"></div>
      <canvas id="livetele" class="hud-box hidden" width="440" height="150"></canvas>
      <div id="brain" class="hud-box hidden"></div>
      <div id="lesson" class="hud-box hidden"></div>
      <div id="radio" class="hud-box hidden"><b>Radio</b><span id="radio-t"></span></div>
      <div id="pit" class="hud-box hidden"></div>
      <div id="dash" class="hud-box">
        <div class="revs" id="revs">${"<i></i>".repeat($d)}</div>
        <div class="side">
          <div><div class="lbl"><span>ERS</span><span id="d-soc">0%</span></div><div class="bar-h" style="--c:#ffb400"><i id="d-socb"></i></div></div>
          <div class="stack"><span class="pill" id="d-drs">DRS</span><span class="pill boost" id="d-boost">BOOST</span></div>
          <div class="hint" id="d-gap"></div>
        </div>
        <div class="mid"><div class="gear" id="d-gear">N</div><div class="spd"><span id="d-spd">0</span><small id="d-unit">KM/H</small></div></div>
        <div class="side r">
          <div class="pedals"><div class="pedal" style="--c:#31d17a"><i id="p-thr"></i></div><div class="pedal" style="--c:#ff3b3b"><i id="p-brk"></i></div></div>
          <div class="hint" id="d-rpm"></div>
        </div>
      </div>
      <div id="tyres" class="hud-box">
        <div class="grid"><div class="tyre"><i></i></div><div class="tyre"><i></i></div><div class="tyre"><i></i></div><div class="tyre"><i></i></div></div>
        <div class="info"><div><span class="badge" id="ty-b">M</span><b id="ty-n">Medium</b></div><div id="ty-w">Wear 0%</div><div id="ty-t"></div><div id="ty-f">Fuel</div><div id="ty-d" class="dmg"></div></div>
      </div>
      <div id="gmeter" class="hud-box"><canvas width="200" height="200"></canvas></div>
      <div id="flag"></div>
      <div id="keyhint" class="hud-box"></div>
      <canvas id="confetti"></canvas>
      <div id="finish" class="hidden"></div>
      <div class="touch" id="touch"><button class="l" data-k="left">\u25C0</button><button class="r" data-k="right">\u25B6</button><button class="b" data-k="brake">BRK</button><button class="g" data-k="throttle">GAS</button><button class="sm s1" data-a="pause">II</button><button class="sm s2" data-a="camera">CAM</button><button class="sm s3" data-a="line">LINE</button><button class="sm s4" data-a="drs">DRS</button><button class="sm s5" data-a="boost" data-hold="1">ERS</button><button class="sm s6" data-a="pit">PIT</button></div>
    `,this.el={twRows:$t("#tw-rows"),twLap:$t("#tw-lap"),tbLap:$t("#tb-lap"),tbClock:$t("#tb-clock"),tbWx:$t("#tb-wx"),pitgame:$t("#pitgame"),cur:$t("#t-cur"),delta:$t("#t-delta"),last:$t("#t-last"),best:$t("#t-best"),fast:$t("#t-fast"),sec:$t("#t-sec"),mini:$t("#minimap canvas"),lights:$t("#lights"),msgs:$t("#msgs"),radio:$t("#radio"),lesson:$t("#lesson"),tele:$t("#livetele"),brain:$t("#brain"),radioT:$t("#radio-t"),pit:$t("#pit"),revs:$t("#revs"),soc:$t("#d-soc"),socb:$t("#d-socb"),drs:$t("#d-drs"),boost:$t("#d-boost"),gap:$t("#d-gap"),gear:$t("#d-gear"),spd:$t("#d-spd"),unit:$t("#d-unit"),thr:$t("#p-thr"),brk:$t("#p-brk"),rpm:$t("#d-rpm"),tyreBoxes:[...t.querySelectorAll("#tyres .tyre")],tyB:$t("#ty-b"),tyN:$t("#ty-n"),tyW:$t("#ty-w"),tyT:$t("#ty-t"),tyF:$t("#ty-f"),tyD:$t("#ty-d"),g:$t("#gmeter canvas"),flag:$t("#flag"),keyhint:$t("#keyhint"),finish:$t("#finish"),confetti:$t("#confetti"),tower:$t("#tower"),minimap:$t("#minimap"),touch:$t("#touch")},this.rev=[...this.el.revs.children],this.rev.forEach((e,i)=>e.classList.add(i<5?"g":i<10?"r":"b")),this.rows=[];for(let e=0;e<13;e++){let i=document.createElement("div");i.className="r",i.innerHTML='<span class="p"></span><span class="c"></span><span class="n"></span><span class="nm"></span><span class="g"></span>',this.el.twRows.appendChild(i),this.rows.push(i)}this.lightEls=[...this.el.lights.children],this.mapBase=null}setUnits(t){this.units=t,this.el.unit.textContent=t==="mph"?"MPH":"KM/H"}setTrack(t){this.track=t;let e=document.createElement("canvas");e.width=380,e.height=260;let i=e.getContext("2d"),n=1/0,r=-1/0,a=1/0,o=-1/0;for(let p=0;p<t.N;p++)n=Math.min(n,t.x[p]),r=Math.max(r,t.x[p]),a=Math.min(a,t.y[p]),o=Math.max(o,t.y[p]);let l=22,c=Math.min((e.width-2*l)/(r-n),(e.height-2*l)/(o-a)),h=(e.width-(r-n)*c)/2,u=(e.height-(o-a)*c)/2;this.map={sc:c,ox:h,oy:u,minX:n,minY:a,h:e.height};let d=p=>h+(p-n)*c,f=p=>e.height-(u+(p-a)*c);i.lineJoin="round",i.lineCap="round";let g=()=>{i.beginPath();for(let p=0;p<=t.N;p+=2){let v=p%t.N;p===0?i.moveTo(d(t.x[v]),f(t.y[v])):i.lineTo(d(t.x[v]),f(t.y[v]))}i.closePath()};i.strokeStyle="rgba(0,0,0,0.8)",i.lineWidth=9,g(),i.stroke(),i.strokeStyle="#8c95a3",i.lineWidth=5,g(),i.stroke();let y=d(t.x[0]),m=f(t.y[0]);i.fillStyle="#fff",i.fillRect(y-5,m-2,10,4),i.strokeStyle="#31d17a",i.lineWidth=3;for(let p of t.drs){i.beginPath();let v=!0,_=Math.floor(p.start/t.ds),M=Math.floor((p.end-p.start+t.length)%t.length/t.ds);for(let S=0;S<=M;S+=2){let b=(_+S)%t.N;v?i.moveTo(d(t.x[b]),f(t.y[b])):i.lineTo(d(t.x[b]),f(t.y[b])),v=!1}i.stroke()}this.mapBase=e,this.mapPx=d,this.mapPy=f}showFinish(t){let e=o=>o+["th","st","nd","rd"][o%100>10&&o%100<14?0:o%10<4?o%10:0],i=t.pos,[n,r]=i===1?["Victory","gold"]:i<=3?["Podium","podium"]:i<=10?["Points finish","points"]:["Chequered flag","plain"],a=i===1?"Winner":t.gap!=null?`+${t.gap.toFixed(3)} s to the winner`:"";this.el.finish.className="tone-"+r,this.el.finish.style.setProperty("--c",String(t.team.color).replace(/[^#0-9a-zA-Z(),. %]/g,"")),this.el.finish.innerHTML=`
      <div class="eyebrow">${Wd(t.name)} \xB7 ${Wd(t.team.name)}</div>
      <div class="big"><span class="pos">${i}</span><span class="ord">${e(i).replace(/^\d+/,"")}</span></div>
      <div class="title">${n}</div>
      <div class="facts"><div><span>Race time</span><b>${be(t.time)}</b></div><div><span>Gap</span><b>${a}</b></div><div><span>Best lap</span><b>${t.best<1/0?be(t.best):"\u2014"}</b></div></div>
      ${t.penalty?`<div class="hint">Includes pending time penalties (+${t.penalty}s) when classified</div>`:""}
      <div class="cont" id="fin-cont">Press <kbd>Enter</kbd> or click for the results</div>`,this.el.finish.classList.remove("hidden"),document.getElementById("hud").classList.add("cine"),clearTimeout(this._finT),this.stopConfetti(),i<=3&&this.startConfetti(i===1?260:150),this._finT=setTimeout(()=>{let o=document.getElementById("fin-cont");o&&o.classList.add("show")},3e3)}hideFinish(){this.el.finish.classList.add("hidden"),document.getElementById("hud").classList.remove("cine"),clearTimeout(this._finT),this.stopConfetti()}startConfetti(t){let e=this.el.confetti,i=Math.min(window.devicePixelRatio||1,2);e.width=window.innerWidth*i,e.height=window.innerHeight*i,e.style.display="block";let n=e.getContext("2d"),r=["#ff2a2a","#ffb400","#f4f4f4","#31d17a","#3b9bff","#b36bff"],a=Array.from({length:t},()=>({x:Math.random()*e.width,y:-Math.random()*e.height*.6,vx:(Math.random()-.5)*160*i,vy:(120+Math.random()*220)*i,w:(6+Math.random()*8)*i,h:(4+Math.random()*6)*i,r:Math.random()*6.28,vr:(Math.random()-.5)*10,col:r[Math.floor(Math.random()*r.length)],ph:Math.random()*6})),o=performance.now(),l=o,c=this._confettiRun={},h=u=>{if(this._confettiRun!==c)return;let d=Math.min(.05,(u-o)/1e3);o=u,n.clearRect(0,0,e.width,e.height);let f=(u-l)/1e3;for(let g of a)g.x+=(g.vx+Math.sin(f*2+g.ph)*40*i)*d,g.y+=g.vy*d,g.r+=g.vr*d,g.y>e.height+20&&f<7&&(g.y=-20,g.x=Math.random()*e.width),n.save(),n.translate(g.x,g.y),n.rotate(g.r),n.fillStyle=g.col,n.globalAlpha=f>8?Math.max(0,1-(f-8)/2):1,n.fillRect(-g.w/2,-g.h/2,g.w,g.h*Math.abs(Math.cos(g.r*2))),n.restore();f<10?requestAnimationFrame(h):this.stopConfetti()};requestAnimationFrame(h)}stopConfetti(){this._confettiRun=null;let t=this.el.confetti;t.style.display="none",t.getContext("2d").clearRect(0,0,t.width,t.height)}showKeyHint(t=9e3,e=null){let i=r=>(e&&e[r]||za[r]||[]).filter(a=>a!=="Escape"||r==="pause").slice(0,1).map(a=>`<kbd>${br(a)}</kbd>`).join(""),n=(r,a)=>i(r)+i(a);this.el.keyhint.innerHTML=`<div><b>${n("throttle","brake")}</b> throttle / brake &nbsp; <b>${n("left","right")}</b> steer &nbsp; <b>${i("drs")}</b> DRS &nbsp; <b>${i("boost")}</b> ERS boost &nbsp; <b>${i("pit")}</b> pit &nbsp; <b>${i("camera")}</b> camera &nbsp; <b>${i("reset")}</b> reset &nbsp; <b>${i("pause")}</b> pause</div><div class="hint">Press ${i("drs")} to start the lights \xB7 hold ${i("throttle")} to build revs; the car is held until the lights go out \xB7 brake at a standstill to reverse \xB7 ${i("auto")} hands the car to the autopilot</div>`,this.el.keyhint.classList.remove("hidden"),this.el.keyhint.style.opacity=1,clearTimeout(this._khT),clearTimeout(this._khT2),this._khT=setTimeout(()=>{this.el.keyhint.style.opacity=0,this._khT2=setTimeout(()=>this.el.keyhint.classList.add("hidden"),600)},t)}show(t){this.root.classList.toggle("hidden",!t),t&&(this.hideFinish(),this.setLights(0),this.el.msgs.innerHTML="",this.el.radio.classList.add("hidden"),this.el.lesson.classList.add("hidden"),this._lessonHtml="",this.teleBuf.n=0,this.teleBuf.last=0)}message(t,e="",i="",n=3.2){let r=document.createElement("div");for(r.className="msg "+e,r.innerHTML=t+(i?`<small>${i}</small>`:""),this.el.msgs.prepend(r);this.el.msgs.children.length>4;)this.el.msgs.lastChild.remove();setTimeout(()=>r.remove(),n*1e3)}setLesson(t,e,i,n){let r=this.el.lesson;if(!t)return r.classList.add("hidden");r.classList.remove("hidden");let a=`<b>${t.title}</b>`+t.goals.map(o=>`<div class="goal ${e[o.id]?"ok":""}">${e[o.id]?"\u2713":"\u25CB"} ${o.text}${!e[o.id]&&o.progress?` <i>${o.progress(i)}</i>`:""}</div>`).join("")+(n?'<div class="goal ok">Lesson complete: keep driving or press Esc</div>':"");a!==this._lessonHtml&&(this._lessonHtml=a,r.innerHTML=a)}radio(t,e=5){this.onRadio&&this.el.radioT.textContent!==t&&this.onRadio(),this.el.radio.classList.remove("hidden"),this.el.radioT.textContent=t,clearTimeout(this._radioT),this._radioT=setTimeout(()=>this.el.radio.classList.add("hidden"),e*1e3)}flag(t,e,i=2,n=""){let r=this.el.flag;r.textContent=t,r.style.color=e,r.className="show "+n,clearTimeout(this._flagT),this._flagT=setTimeout(()=>r.className="",i*1e3)}setLights(t,e=!1){this.el.lights.classList.toggle("hidden",t===0&&!e),this.lightEls.forEach((i,n)=>i.classList.toggle("on",n<t)),clearTimeout(this._lightT),e&&(this._lightT=setTimeout(()=>this.el.lights.classList.add("hidden"),700))}toggleTele(){return this.teleOn=!this.teleOn,this.el.tele.classList.toggle("hidden",!this.teleOn),this.el.brain.classList.toggle("hidden",!this.teleOn),this.teleOn}brainPanel(t,e,i){if(!this.teleOn||i-(this._brainT||0)<250)return;this._brainT=i;let n=[];for(let[a,o]of[["ahead",-1],["behind",1]]){let l=t.cars.find(f=>f.rs.pos===e.rs.pos+o),c=l&&l.driver&&l.driver.brain;if(!c)continue;let h=c.explain(),u=Object.entries(h.scores).filter(([,f])=>Number.isFinite(f)).sort((f,g)=>g[1]-f[1]).slice(0,3),d=Math.max(1,...u.map(f=>f[1]));n.push(`<div class="bh"><b>${Wd(l.info.code)}</b> ${a} \xB7 <em>${h.action}${h.side?h.side>0?" \u25C0":" \u25B6":""}</em></div>`+u.map(([f,g])=>`<div class="br ${f===h.action?"on":""}"><span>${f}</span><i style="width:${Math.round(Math.max(0,g)/d*100)}%"></i><u>${g.toFixed(1)}</u></div>`).join(""))}let r=n.length?'<div class="bt">Rival decision matrix</div>'+n.join(""):"";r!==this._brainHtml&&(this._brainHtml=r,this.el.brain.innerHTML=r)}tele(t,e){let i=this.teleBuf;if(e-i.last>=50){i.last=e;let u=i.n%240;i.t[u]=t.throttle,i.b[u]=t.brake,i.s[u]=t.steer,i.v[u]=t.speed,i.n++}if(!this.teleOn||e-i.draw<100)return;i.draw=e;let n=this.el.tele,r=n.getContext("2d"),a=n.width,o=n.height;r.clearRect(0,0,a,o),r.fillStyle="rgba(8,10,16,0.62)",r.fillRect(0,0,a,o);let l=Math.min(i.n,240),c=i.n-l,h=(u,d,f,g,y,m,p)=>{r.beginPath();for(let v=0;v<l;v++){let _=(u[(c+v)%240]-y)/(m-y),M=(240-l+v)/239*a,S=d+f-Z(_,0,1)*f;v?r.lineTo(M,S):r.moveTo(M,S)}r.strokeStyle=g,r.lineWidth=2,r.stroke(),p&&(r.lineTo(a,d+f),r.lineTo((240-l)/239*a,d+f),r.fillStyle=p,r.fill())};h(i.v,8,62,"#e8ecf4",0,100),h(i.t,78,28,"#3ddc84",0,1,"rgba(61,220,132,0.16)"),h(i.b,78,28,"#ff4b4b",0,1,"rgba(255,75,75,0.16)"),r.strokeStyle="rgba(255,255,255,0.18)",r.lineWidth=1,r.beginPath(),r.moveTo(0,128),r.lineTo(a,128),r.stroke(),h(i.s,112,32,"#58a6ff",-1,1),r.fillStyle="rgba(255,255,255,0.6)",r.font="11px sans-serif",r.fillText("SPEED",6,18),r.fillText("THROTTLE / BRAKE",6,92),r.fillText("STEER",6,124)}update(t,e,i,n){let r=this.el;this.tele(e,n),this.brainPanel(t,e,n);let a=e.rs,o=this.units==="mph",l=e.speed*(o?2.23694:3.6);ri(r.spd,Math.round(l));let c=e.gear<0?"R":e.speed<.5&&e.throttle<.05&&e.gear===1?"N":e.gear;ri(r.gear,c);let h=9500,d=Z((e.rpm-h)/(14400-h),0,1),f=Math.round(d*$d),g=e.rpm>14700;if(Va(r.revs,"revs"+(g&&Math.floor(n/70)%2===0?" flash":"")),this._lit!==f){this._lit=f;for(let F=0;F<$d;F++)this.rev[F].classList.toggle("on",F<f)}if(ri(r.soc,Math.round(e.soc*100)+"%"),_r(r.socb,"width",Math.round(e.soc*100)+"%"),_r(r.thr,"height",Math.round(e.throttle*100)+"%"),_r(r.brk,"height",Math.round(e.brake*100)+"%"),ri(r.rpm,Math.round(e.rpm/100)*100+" rpm"),Va(r.drs,"pill"+(e.drsPos>.5?" on":e.drsAllowed?" avail":"")),Va(r.boost,"pill boost"+(i.boost&&e.soc>.01?" on":"")),t.phase==="racing"||t.phase==="finished"){let F=Math.max(0,t.time-a.lapStart);ri(r.cur,a.finished?be(a.last):be(F))}else ri(r.cur,"0:00.000");ri(r.last,be(a.last)),ri(r.best,be(a.best)),ri(r.fast,t.fastest.car?`${t.fastest.car.info.code} ${be(t.fastest.time)}`:"--:--.---"),a.delta!=null&&a.lapCpBest?(ri(r.delta,(a.delta>=0?"+":"-")+Math.abs(a.delta).toFixed(2)),Va(r.delta,"delta "+(a.delta<0?"neg":"pos"))):ri(r.delta,"");let y=r.sec.children;for(let F=0;F<3;F++){let H=a.sectorFlag&&a.sectorFlag.idx===F?a.sectorFlag.kind:"",G="";a.sectors[F]!=null&&(G=a.sectors[F]<=t.bestSectors[F]+1e-6?"purple":a.sectors[F]<=a.bestSectors[F]+1e-6?"green":"yellow"),Va(y[F],(F<a.sectorIdx||a.sectorIdx===0&&F===2&&a.sectors[2]!=null&&a.laps>0?G:"")+(F===a.sectorIdx?" cur":""))}let m=t.totalLaps,p=Math.min(m,Math.max(1,a.laps+1)),v=t.isQuali?`<small>${t.chequered?"Final lap":"Time left"}</small>${t.chequered?"":zp(t.qualiLeft())}`:t.opt.mode==="timetrial"?`<small>Lap</small>${Math.max(1,a.laps+1)}`:`<small>Lap</small>${a.finished?m:p}/${m}`;this._lapHtml!==v&&(this._lapHtml=v,r.tbLap.innerHTML=v);let _=t.t0!=null?t.time-t.t0:0,M=t.phase==="grid"||t.phase==="countdown"?t.opt.mode==="timetrial"?"Time trial":"Formation":be(Math.max(0,_),1);t.sc&&t.sc.state!=="none"?M=t.sc.state==="ending"?"SC in this lap":"SAFETY CAR":t.isQuali?M=a.laps<1?"Out lap":a.finished?"Session over":a.laps<2?"Push lap":"Flying lap":t.opt.mode==="timetrial"&&(M=a.laps<2?a.laps===0?"Out lap":"Push lap":"Flying lap"),ri(r.tbClock,M);let S="";if(t.wet>.12||t.rain>.05)S=t.rain>.05?`Rain ${Math.round(t.rain*100)}% \xB7 track ${t.wet>.6?"soaked":t.wet>.3?"wet":"damp"}`:`Track ${t.wet>.6?"soaked":t.wet>.3?"wet":"damp"} \xB7 drying`;else{let F=t.forecast&&t.forecast();F&&F.rainIn<150&&(S=`Rain in ${zp(F.rainIn)}`)}this._wx!==S&&(this._wx=S,r.tbWx.textContent=S,r.tbWx.style.display=S?"":"none");let b=e.ahead,T=e.behind,x=t.opt.mode==="timetrial"?"":t.isQuali?`P${a.pos} of ${t.cars.length}${b&&Number.isFinite(a.best)?`<br>\u25B2 ${b.info.code} <b>${(e.gapAhead??0).toFixed(3)}</b>`:""}`:`${b?`\u25B2 ${b.info.code} <b>+${(e.gapAhead??0).toFixed(1)}</b>`:"Leading"}<br>${T?`\u25BC ${T.info.code} <b>-${(T.gapAhead??0).toFixed(1)}</b>`:""}`;this._gapHtml!==x&&(this._gapHtml=x,r.gap.innerHTML=x);let w=e.tyreSummary(),C=e.compound;ri(r.tyB,C.letter),_r(r.tyB,"background",C.color),ri(r.tyN,C.name);let D=e.rs.advice;ri(r.tyW,`Wear ${Math.round(w.wear*100)}%`+(D&&!e.rs.pitRequested?` \xB7 box ${D.thisLap?"now":"lap "+D.lap} (${ni[D.compound].letter})`:""));let I=Math.max(e.brakeTemp[0],e.brakeTemp[1],e.brakeTemp[2],e.brakeTemp[3]);ri(r.tyT,`Temp ${Math.round(w.temp)}\xB0C \xB7 Brakes ${Math.round(I/10)*10}\xB0${I>1e3?" FADE":""}`),ri(r.tyF,`Fuel ${e.fuel.toFixed(1)} kg \xB7 ${["LEAN","STD","RICH"][e.fuelMode]} \xB7 ERS ${["HARV","BAL","ATK"][e.ersMode]} \xB7 BB ${Math.round(e.spec.brakeBias*100)}`);let L=e.damageSummary(),A=L.worst,P=Math.max(e.flat[0],e.flat[1],e.flat[2],e.flat[3]);ri(r.tyD,A>.05?`FW ${Math.round(L.fw*100)}% \xB7 SP ${Math.round(Math.max(L.sideL,L.sideR)*100)}% \xB7 RW ${Math.round(L.rw*100)}% \xB7 downforce \u2212${Math.round(L.aeroLoss*100)}%`:P>.2?"Flat spots":"");for(let F=0;F<4;F++){let H=r.tyreBoxes[F],G=e.temp[F],nt=C.tOpt,at=G-nt;_r(H,"background",`hsl(${at<-C.tRange*.5?205:at>C.tRange*.5?2:128}, 70%, 42%)`),_r(H.firstElementChild,"height",Math.round(Z(e.wear[F],0,1)*1e3)/10+"%")}let O=r.pitgame,B=a.service&&a.service.pg;if(B){O.classList.remove("hidden");let F=O.querySelectorAll(".nut");B.w.forEach((G,nt)=>{let at=F[nt],Mt=at.querySelector("b");Mt.style.left=Z(G.p,0,1)*100+"%";let gt=G.res?"r-"+G.res:G.p>=0?"live":"";at._c!==gt&&(at._c=gt,at.className="nut "+gt)});let H=B.done?B.misses?`${B.misses} cross-threaded: ${B.dur.toFixed(1)} s`:B.goods?`Clean stop: ${B.dur.toFixed(1)} s`:`Perfect stop: ${B.dur.toFixed(1)} s`:"";O._m!==H&&(O._m=H,O.querySelector(".pgr").textContent=H)}else O.classList.contains("hidden")||O.classList.add("hidden");let W=r.pit;if(a.service){W.classList.remove("hidden"),W.classList.add("service");let F=`<div class="big">${Number.isFinite(a.service.dur)?Math.max(0,a.service.dur-a.service.t).toFixed(1):"\u2026"}</div>Pit stop in progress`;W._h!==F&&(W._h=F,W.innerHTML=F)}else if(a.pitRequested&&t.track.pit){W.classList.remove("hidden","service");let H=`<div class="big">Box, box</div>Entering pits this lap \xB7 next tyre <b>${(a.nextCompound||"(auto)").toUpperCase()}</b> <span class="hint">[${this.keyNames.tyre}] to change \xB7 [${this.keyNames.pit}] cancel</span>`;W._h!==H&&(W._h=H,W.innerHTML=H)}else W.classList.add("hidden");n-this.lastTower>120&&(this.lastTower=n,this.updateTower(t,e),this.drawG(e)),n-this.lastMini>50&&(this.lastMini=n,this.drawMap(t,e))}updateTower(t,e){let i=t.sorted;if(t.opt.mode==="timetrial"){this.el.tower.classList.add("hidden");return}this.el.tower.classList.remove("hidden");let n=i.length,r=e.rs.pos-1,a=[];if(n<=13)a=i.map((o,l)=>l);else{let o=new Set([0,1,2,3,4]);for(let l=r-3;l<=r+3;l++)l>=0&&l<n&&o.add(l);a=[...o].sort((l,c)=>l-c).slice(0,13)}this.el.twLap.textContent=t.isQuali?"Qualifying":`${n} cars`,this.rows.forEach((o,l)=>{if(l>=a.length){o.style.display="none";return}o.style.display="";let c=i[a[l]],h=c.rs;o.classList.toggle("me",c===e),o.style.setProperty("--c",c.info.team.color),o.children[0].textContent=a[l]+1,o.children[2].textContent=c.info.code;let u="";t.isQuali?u=Number.isFinite(h.best)?a[l]===0?be(h.best):`+${(h.best-i[0].rs.best).toFixed(3)}`:"--":a[l]===0?u=h.finished?"FIN":t.phase==="racing"?`L${Math.min(t.totalLaps,h.laps+1)}`:"":t.phase!=="racing"&&t.phase!=="finished"?u="":h.lapsDown>0?u=`+${h.lapsDown}L`:u=`+${(c.gapAhead??0).toFixed(1)}`,(h.inPitLane||h.service)&&(u='<span class="pit">PIT</span>');let d=`${u}<span class="t" style="background:${c.compound.color}">${c.compound.letter}</span>`;o._h!==d&&(o._h=d,o.children[4].innerHTML=d)})}drawG(t){let e=this.el.g.getContext("2d"),i=200;e.clearRect(0,0,i,i),e.fillStyle="rgba(13,16,21,0.8)",e.beginPath(),e.arc(100,100,98,0,6.283),e.fill(),e.strokeStyle="rgba(255,255,255,0.18)",e.lineWidth=2;for(let a of[32,65,96])e.beginPath(),e.arc(100,100,a,0,6.283),e.stroke();e.beginPath(),e.moveTo(100,6),e.lineTo(100,194),e.moveTo(6,100),e.lineTo(194,100),e.stroke();let n=Z(t.latG/5,-1,1)*96,r=Z(t.longG/5,-1,1)*96;e.fillStyle="#ff2a2a",e.beginPath(),e.arc(100+n,100+r,9,0,6.283),e.fill(),e.fillStyle="#fff",e.font="700 22px sans-serif",e.textAlign="center",e.fillText(Math.hypot(t.latG,t.longG).toFixed(1)+"g",100,190)}drawMap(t,e){if(!this.mapBase)return;let i=this.el.mini,n=i.getContext("2d");n.clearRect(0,0,i.width,i.height),n.drawImage(this.mapBase,0,0);let r=this.mapPx,a=this.mapPy;for(let o of t.cars)o!==e&&(n.fillStyle=o.info.team.color,n.beginPath(),n.arc(r(o.x),a(o.y),4.2,0,6.283),n.fill(),n.strokeStyle="#000",n.lineWidth=1,n.stroke());t.ghostPos&&(n.fillStyle="rgba(255,255,255,0.5)",n.beginPath(),n.arc(r(t.ghostPos.x),a(t.ghostPos.y),4.5,0,6.283),n.fill()),n.fillStyle="#fff",n.strokeStyle="#ff2a2a",n.lineWidth=3,n.beginPath(),n.arc(r(e.x),a(e.y),6.5,0,6.283),n.fill(),n.stroke()}};function Wa(s,t,e={}){let i=Math.min(2,window.devicePixelRatio||1),n=s.clientWidth||420,r=s.clientHeight||200;s.width=Math.round(n*i),s.height=Math.round(r*i);let a=s.getContext("2d");a.setTransform(i,0,0,i,0,0),a.clearRect(0,0,n,r);let o=t.flatMap(b=>b.pts).filter(b=>Number.isFinite(b.y)),l=50,c=12,h=26,u=24;if(a.font="600 11px system-ui, sans-serif",a.fillStyle="rgba(255,255,255,0.75)",a.textBaseline="alphabetic",e.title&&(a.font="700 12px system-ui, sans-serif",a.fillText(e.title,l,15)),a.font="600 11px system-ui, sans-serif",!o.length){a.fillStyle="rgba(255,255,255,0.45)",a.fillText("No data",l+10,r/2);return}let d=Math.min(...o.map(b=>b.x)),f=Math.max(...o.map(b=>b.x)),g=e.yMin??Math.min(...o.map(b=>b.y)),y=e.yMax??Math.max(...o.map(b=>b.y));if(f===d&&(f=d+1),y===g&&(y=g+1),e.minSpan&&y-g<e.minSpan){let b=(g+y)/2;e.yMin==null&&(g=b-e.minSpan/2),e.yMax==null&&(y=b+e.minSpan/2)}let m=(y-g)*.08;e.yMin==null&&(g-=m),e.yMax==null&&(y+=m);let p=b=>l+(b-d)/(f-d)*(n-l-c),v=b=>r-u-(b-g)/(y-g)*(r-h-u),_=e.fmtY||(b=>b.toFixed(0));a.strokeStyle="rgba(255,255,255,0.1)",a.lineWidth=1,a.fillStyle="rgba(255,255,255,0.55)",a.textAlign="right";for(let b=0;b<=4;b++){let T=g+(y-g)*b/4,x=Math.round(v(T))+.5;a.beginPath(),a.moveTo(l,x),a.lineTo(n-c,x),a.stroke(),a.fillText(_(T,y-g),l-6,x+4)}a.textAlign="center";let M=e.xTicks||[d,f];for(let b of M)a.fillText(String(b),p(b),r-8);for(let b of e.markers||[])b.x<d||b.x>f||(a.strokeStyle=b.color||"rgba(255,200,0,0.7)",a.setLineDash([3,3]),a.beginPath(),a.moveTo(p(b.x),h),a.lineTo(p(b.x),r-u),a.stroke(),a.setLineDash([]),a.fillStyle=b.color||"rgba(255,200,0,0.9)",a.fillText(b.label||"",p(b.x),h-4));for(let b of t){let T=b.pts.filter(x=>Number.isFinite(x.y));if(T.length){a.strokeStyle=b.color,a.fillStyle=b.color,a.lineWidth=b.width||2,a.setLineDash(b.dash?[5,4]:[]),a.beginPath(),T.forEach((x,w)=>w?a.lineTo(p(x.x),v(Math.min(y,Math.max(g,x.y)))):a.moveTo(p(x.x),v(Math.min(y,Math.max(g,x.y))))),a.stroke(),a.setLineDash([]);for(let x of T)a.beginPath(),a.arc(p(x.x),v(Math.min(y,Math.max(g,x.y))),2.6,0,6.283),a.fill()}}a.textAlign="left";let S=n-c;for(let b of[...t].reverse()){let T=a.measureText(b.name).width;S-=T+18,a.fillStyle=b.color,a.fillRect(S,7,10,3),a.fillStyle="rgba(255,255,255,0.75)",a.fillText(b.name,S+14,12),S-=6}}var $a={races:0,wins:0,podiums:0,poles:0,fastestLaps:0,finished:0,km:0,passes:0,pitStops:0,perfectStops:0,rainRaces:0,nightRaces:0,careerTitles:0,championships:0,cleanRaces:0,dnf:0},ts=[{id:"first",name:"Lights out",desc:"Finish your first race.",test:s=>s.finished>=1},{id:"podium",name:"On the podium",desc:"Finish in the top three.",test:s=>s.podiums>=1},{id:"win",name:"Winner",desc:"Win a race.",test:s=>s.wins>=1},{id:"win5",name:"Serial winner",desc:"Win five races.",test:s=>s.wins>=5},{id:"pole",name:"Pole position",desc:"Set the fastest lap in qualifying.",test:s=>s.poles>=1},{id:"fl",name:"Purple sectors",desc:"Set the fastest lap of a race.",test:s=>s.fastestLaps>=1},{id:"lastfirst",name:"From the back",desc:"Win a race from the last three places on the grid.",test:(s,t)=>!!t&&t.finishedRace&&t.pos===1&&t.grid>=t.cars-2&&t.cars>=8},{id:"tenpass",name:"Overtaker",desc:"Make 10 passes in a single race.",test:(s,t)=>!!t&&t.passes>=10},{id:"clean",name:"Clean sweep",desc:"Finish a 3+ lap race on the podium with no penalties and no damage.",test:(s,t)=>!!t&&t.finishedRace&&t.laps>=3&&t.pos<=3&&t.penalty===0&&!t.damaged},{id:"perfectstop",name:"Pit crew pride",desc:"Nail all four wheel nuts for a 2.5 second stop.",test:s=>s.perfectStops>=1},{id:"rain",name:"Rain master",desc:"Win a race in the rain.",test:(s,t)=>!!t&&t.finishedRace&&t.pos===1&&t.wet},{id:"night",name:"Night owl",desc:"Win a night race.",test:(s,t)=>!!t&&t.finishedRace&&t.pos===1&&t.night},{id:"legend",name:"Against the best",desc:"Win a race against Legend-level opposition.",test:(s,t)=>!!t&&t.finishedRace&&t.pos===1&&t.level>=.95&&t.cars>=10},{id:"grid20",name:"Full house",desc:"Finish a race with all 20 cars on the grid.",test:(s,t)=>!!t&&t.cars>=20&&t.finishedRace},{id:"km500",name:"Mileage",desc:"Drive 500 km in total.",test:s=>s.km>=500},{id:"champ",name:"Champion",desc:"Win a championship.",test:s=>s.championships>=1},{id:"career",name:"Career champion",desc:"Win a drivers' title in career mode.",test:s=>s.careerTitles>=1},{id:"underdog",name:"Underdog",desc:"Finish on the podium in career mode with one of the bottom three teams.",test:(s,t)=>!!t&&t.finishedRace&&t.career&&t.teamRank>=7&&t.pos<=3},{id:"veteran",name:"Veteran",desc:"Complete 25 races.",test:s=>s.finished>=25},{id:"cleanx5",name:"Gentleman driver",desc:"Finish five races without penalties or damage.",test:s=>s.cleanRaces>=5}];function Gp(s,t){let e=s.stats={...$a,...s.stats||{}},i=s.achievements=s.achievements||{};t.kind==="race"?(e.races++,t.finishedRace?e.finished++:e.dnf++,t.pos===1&&t.finishedRace&&e.wins++,t.pos<=3&&t.finishedRace&&e.podiums++,t.fastest&&e.fastestLaps++,e.km+=t.km||0,e.passes+=t.passes||0,e.pitStops+=t.stops||0,e.perfectStops+=t.perfectStops||0,t.wet&&e.rainRaces++,t.night&&e.nightRaces++,t.finishedRace&&t.penalty===0&&!t.damaged&&e.cleanRaces++):t.kind==="quali"?(t.pos===1&&e.poles++,e.km+=t.km||0):t.kind==="championship"?t.pos===1&&e.championships++:t.kind==="career"&&t.pos===1&&e.careerTitles++;let n=[];for(let r of ts){if(i[r.id])continue;let a=!1;try{a=!!r.test(e,t.kind==="race"?t:null)}catch{a=!1}a&&(i[r.id]=Date.now(),n.push(r.id))}return n}var qp="apex-grand-prix.v1",Vb={quality:"high",volume:.55,units:"kmh",line:!0,minimap:!0,shake:!0,camera:"chase",tower:!0,blur:!0,steerSpeed:1,padDead:.07,rumble:!0,autoQuality:!0,cbSafe:!1,calm:!1,bigHud:!1,bloom:!0,keys:{},driverCode:"YOU",driverNumber:7},Wb={mode:"race",trackId:"northfield",laps:5,level:.55,fieldSize:20,playerGrid:12,team:1,compound:"medium",tyreWear:3,damage:!0,collisions:!0,mandatoryStop:!1,pitCalls:"radio",adaptive:!1,qualify:!1,equalCars:!0,carPower:"standard",weather:"dry",timeOfDay:"progress",frontWing:null,rearWing:null,brakeBias:.58,pressure:0,assists:{abs:!0,tc:2,steer:!0,stability:1,autoGear:!0,pitAuto:!0,pitGame:!0}},Vp={Beginner:{abs:!0,tc:3,steer:!0,stability:3,autoGear:!0,pitAuto:!0,pitGame:!1},Intermediate:{abs:!0,tc:2,steer:!0,stability:1,autoGear:!0,pitAuto:!0,pitGame:!0},Pro:{abs:!0,tc:1,steer:!1,stability:0,autoGear:!0,pitAuto:!0,pitGame:!0},Simulator:{abs:!1,tc:0,steer:!1,stability:0,autoGear:!1,pitAuto:!1,pitGame:!0}},Wp=["Off","Low","Medium","High"],Mi=s=>s&&typeof s=="object"&&!Array.isArray(s),gi=(s,t,e,i)=>(typeof s=="number"||typeof s=="string"&&s.trim()!=="")&&Number.isFinite(+s)?Math.min(e,Math.max(t,+s)):i,Vi=(s,t,e)=>t.includes(s)?s:e,Ue=(s,t)=>typeof s=="boolean"?s:t,Xp=(s,t)=>{let e=typeof s=="string"?s.toUpperCase().replace(/[^A-Z0-9]/g,"").slice(0,3):"";return e.length>=2?e:t};function qd(s){let t=Mi(s)?s:{},e=Wb,i=Mi(t.assists)?t.assists:{},n=Math.round(gi(t.fieldSize,2,20,e.fieldSize)),r=a=>a==null?null:Number.isFinite(+a)?Math.round(gi(a,0,10,5)):null;return{mode:Vi(t.mode,["race","timetrial","qualifying"],e.mode),trackId:Vi(t.trackId,Ie.map(a=>a.id),e.trackId),laps:Math.round(gi(t.laps,1,30,e.laps)),level:gi(t.level,0,1.3,e.level),fieldSize:n,playerGrid:Math.round(gi(t.playerGrid,1,n,Math.min(e.playerGrid,n))),team:Math.round(gi(t.team,0,ce.length-1,e.team)),compound:Vi(t.compound,Ta,e.compound),tyreWear:Vi(+t.tyreWear,[0,1.5,3,6],e.tyreWear),damage:Ue(t.damage,e.damage),collisions:Ue(t.collisions,e.collisions),mandatoryStop:Ue(t.mandatoryStop,e.mandatoryStop),pitCalls:["off","radio","auto"].includes(t.pitCalls)?t.pitCalls:e.pitCalls,adaptive:Ue(t.adaptive,e.adaptive),qualify:Ue(t.qualify,e.qualify),equalCars:Ue(t.equalCars,e.equalCars),carPower:Vi(t.carPower,["standard","quick","rocket"],e.carPower),weather:Vi(t.weather,["dry","light","heavy","changing"],e.weather),timeOfDay:Vi(t.timeOfDay,["progress","day","night"],e.timeOfDay),frontWing:r(t.frontWing),rearWing:r(t.rearWing),brakeBias:gi(t.brakeBias,.5,.7,e.brakeBias),pressure:Math.round(gi(t.pressure,-3,3,e.pressure)),assists:{abs:Ue(i.abs,e.assists.abs),tc:Math.round(gi(i.tc,0,3,e.assists.tc)),steer:Ue(i.steer,e.assists.steer),stability:Math.round(gi(i.stability,0,3,e.assists.stability)),autoGear:Ue(i.autoGear,e.assists.autoGear),pitAuto:Ue(i.pitAuto,e.assists.pitAuto),pitGame:Ue(i.pitGame,e.assists.pitGame)}}}function $b(s){let t=Mi(s)?s:{},e=Vb;return{quality:Vi(t.quality,["low","medium","high"],e.quality),volume:gi(t.volume,0,1,e.volume),units:Vi(t.units,["kmh","mph"],e.units),line:Ue(t.line,e.line),minimap:Ue(t.minimap,e.minimap),shake:Ue(t.shake,e.shake),camera:Vi(t.camera,["chase","close","cockpit","tcam","heli","tv"],e.camera),tower:Ue(t.tower,e.tower),blur:Ue(t.blur,e.blur),steerSpeed:Vi(+t.steerSpeed,[.7,1,1.4],e.steerSpeed),padDead:gi(t.padDead,0,.3,e.padDead),rumble:Ue(t.rumble,e.rumble),autoQuality:Ue(t.autoQuality,e.autoQuality),cbSafe:Ue(t.cbSafe,e.cbSafe),keys:Hc(t.keys),bloom:Ue(t.bloom,e.bloom),calm:Ue(t.calm,e.calm),bigHud:Ue(t.bigHud,e.bigHud),driverCode:Xp(t.driverCode,e.driverCode),driverNumber:Math.round(gi(t.driverNumber,1,99,e.driverNumber))}}function qa(s){return vc.reduce((t,e)=>Math.abs(e.level-s)<Math.abs(t.level-s)?e:t)}function qb(s){let t={};if(!Mi(s))return t;for(let e of Ie){let i=s[e.id];Mi(i)&&Number.isFinite(i.best)&&i.best>5&&i.best<1e3&&(t[e.id]={best:+i.best})}return t}function Xb(s){if(!Mi(s))return null;let t=Ie.map(n=>n.id),e=Array.isArray(s.calendar)?s.calendar.filter(n=>t.includes(n)):pc.slice();if(!e.length)return null;let i=Math.round(gi(s.round,0,e.length,0));return{calendar:e,round:i,points:Da(s.points),teamPoints:Da(s.teamPoints),teamOf:Pd(s.teamOf),results:Id(s.results),weather:Array.isArray(s.weather)&&s.weather.length>=e.length?s.weather.slice(0,e.length).map(n=>mc.includes(n)?n:"dry"):void 0}}function Yb(s){let t={...$a};if(Mi(s))for(let e of Object.keys($a))Number.isFinite(+s[e])&&(t[e]=Math.max(0,+s[e]));return t}function Yp(s){Mi(s)||(s={});let t={};if(Mi(s.ghosts))for(let e of Ie){let i=s.ghosts[e.id];Mi(i)&&Number.isFinite(+i.time)&&+i.time>5&&+i.time<1e3&&typeof i.data=="string"&&i.data.length<6e5&&/^[A-Za-z0-9+/=]*$/.test(i.data)&&(t[e.id]={time:+i.time,data:i.data})}return{settings:$b(s.settings),config:qd(s.config),records:qb(s.records),ghosts:t,season:Xb(s.season),career:mp(s.career),honours:Array.isArray(s.honours)?s.honours.filter(e=>Mi(e)).slice(-30).map(e=>({pos:Math.max(0,Math.min(99,Math.round(+e.pos)||0)),team:String(e.team??"").replace(/[<>&"'`]/g,"").slice(0,24),points:Math.max(0,Math.min(9999,Math.round(+e.points)||0))})):[],stats:Yb(s.stats),school:Fp(s.school),achievements:Mi(s.achievements)?Object.fromEntries(Object.entries(s.achievements).filter(([e,i])=>ts.some(n=>n.id===e)&&Number.isFinite(+i)&&+i>0)):{}}}function Kp(){let s={};try{s=JSON.parse(localStorage.getItem(qp)||"{}")}catch{s={}}return Yp(s)}var Zp="AGP-GHOST";function Kb(s,t){return t?`${Zp}|${s}|${(+t.time).toFixed(3)}|${t.data}`:""}function Zb(s){if(typeof s!="string"||s.length>7e5)return null;let[t,e,i,n,...r]=s.trim().split("|");if(t!==Zp||r.length||!Ie.some(d=>d.id===e))return null;let a=+i;if(!(a>5&&a<1e3)||typeof n!="string"||!/^[A-Za-z0-9+/]+={0,2}$/.test(n)||n.length>6e5)return null;let o;try{o=atob(n)}catch{return null}let l=o.length/4;if(!Number.isInteger(l)||l<12||l%4!==0)return null;let c=l/4;if(Math.abs(c-a*20)>a*20*.15+4)return null;let h=new Uint8Array(o.length);for(let d=0;d<o.length;d++)h[d]=o.charCodeAt(d);let u=new Float32Array(h.buffer);for(let d=0;d<u.length;d++)if(!Number.isFinite(u[d])||Math.abs(u[d])>2e4)return null;return{trackId:e,ghost:{time:a,data:n}}}function Jb(s){return JSON.stringify({app:"apex-grand-prix",v:1,save:s})}function jb(s){try{let t=JSON.parse(String(s).trim());if(!Mi(t))return null;let e=Mi(t.save)?t.save:t,n=["settings","config","records","ghosts","career","stats","achievements","season","school","honours"].filter(a=>a in e);if(!n.length)return null;let r=Yp(e);return Object.defineProperty(r,"present",{value:n,enumerable:!1}),r}catch{return null}}function ze(s){try{localStorage.setItem(qp,JSON.stringify(s))}catch{}}var kt=s=>String(s).replace(/[&<>"]/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[t]);function $p(s){let t=1/0,e=-1/0,i=1/0,n=-1/0;for(let d=0;d<s.N;d++)t=Math.min(t,s.x[d]),e=Math.max(e,s.x[d]),i=Math.min(i,s.y[d]),n=Math.max(n,s.y[d]);let r=e-t,a=n-i,o=.06*Math.max(r,a),l=[];for(let d=0;d<s.N;d+=6)l.push(`${(s.x[d]-t+o).toFixed(0)},${(n-s.y[d]+o).toFixed(0)}`);let c=s.x[0]-t+o,h=n-s.y[0]+o,u=Math.max(r,a)*.028;return`<svg viewBox="0 0 ${(r+2*o).toFixed(0)} ${(a+2*o).toFixed(0)}" preserveAspectRatio="xMidYMid meet"><polygon points="${l.join(" ")}" fill="none" stroke="#000" stroke-opacity=".6" stroke-width="${u*1.7}" stroke-linejoin="round"/><polygon points="${l.join(" ")}" fill="none" stroke="#c9d1db" stroke-width="${u}" stroke-linejoin="round"/><circle cx="${c}" cy="${h}" r="${u*1.4}" fill="#ff2a2a"/></svg>`}var Vc=class{constructor(t,e,i){this.root=t,this.save=e,this.hooks=i,this.current=null,this.tab="circuit",this.config={...e.config,assists:{...e.config.assists}},t.addEventListener("click",n=>this.onClick(n)),t.addEventListener("input",n=>this.onInput(n))}persist(){this.save.config=this.config,ze(this.save)}clear(){this.root.innerHTML="",this.current=null}show(t,e){this._wipeAt=0,t!=="controls"&&(this.rebinding=null),this.current=t,this.lastData=e;let i=this["screen_"+t];if(!i)return this.show("main");let n;try{n=i.call(this,e)}catch(r){if(console.error("menu screen failed:",t,r),t==="main")n='<section class="screen dim"><div class="menu-col"><div class="logo">Apex<br><span>Grand Prix</span></div><button class="btn primary" data-act="quick">Quick race</button></div></section>';else return this.show("main")}this.root.innerHTML=n,this.afterRender(t)}drawTelemetry(){let t=this.lastData;if(!t||!t.race||!t.player)return;let{race:e,player:i,cls:n}=t,r=i.rs,a=n?n[0]&&n[0].car!==i?n[0].car:n[1]?n[1].car:null:null,o=e.fastest&&e.fastest.car&&e.fastest.car!==i&&e.fastest.car!==a?e.fastest.car:null,l=[{car:i,name:"You",color:"#ff4d4d",width:3}];a&&l.push({car:a,name:a.info.code+(n[0].car===a?" (winner)":" (P2)"),color:"#31d17a",dash:!0}),o&&l.push({car:o,name:o.info.code+" (fastest lap)",color:"#4aa3ff",dash:!0});let c=Math.max(1,r.tele.length),h=Array.from({length:Math.min(c,10)},(y,m)=>Math.round(1+m*(c-1)/Math.max(1,Math.min(c,10)-1))),u=r.stopLaps.map(y=>({x:y,label:"PIT"})),d=y=>this.root.querySelector(`canvas[data-chart="${y}"]`),f=Math.min(...r.tele.map(y=>y.time).filter(Number.isFinite),1/0),g=y=>l.map(m=>({name:m.name,color:m.color,dash:m.dash,width:m.width,pts:m.car.rs.tele.map(p=>({x:p.lap,y:y(p)}))}));d("laps")&&Wa(d("laps"),g(y=>y.time),{title:"Lap time",fmtY:y=>be(y,1),xTicks:h,markers:u,yMin:Number.isFinite(f)?f*.985:void 0,yMax:Number.isFinite(f)?f*1.3:void 0}),d("fuel")&&Wa(d("fuel"),g(y=>y.fuel),{title:"Fuel load (kg)",fmtY:(y,m)=>y.toFixed(m<8?1:0),minSpan:3,xTicks:h,markers:u}),d("wear")&&Wa(d("wear"),g(y=>Math.min(100,y.wear*100)),{title:"Tyre wear (%)",fmtY:y=>y.toFixed(0),xTicks:h,markers:u,yMin:0}),d("top")&&Wa(d("top"),g(y=>y.topSpeed*3.6),{title:"Top speed (km/h)",fmtY:y=>y.toFixed(0),minSpan:40,xTicks:h,markers:u})}afterRender(t){t==="results"&&requestAnimationFrame(()=>this.drawTelemetry()),t==="setup"&&this.hooks.previewTeam&&(this._lastShown!=="setup"||this._previewTeam!==this.config.team)&&(this._previewTeam=this.config.team,this.hooks.previewTeam(this.config.team)),this._lastShown=t;let e=this.root.querySelector(".btn.primary, .btn");e&&t==="main"&&e.focus({preventScroll:!0})}screen_loading(t="Building circuit"){return`<section class="screen loading"><div class="logo">Apex <span>GP</span></div><div class="bar"><i></i></div><div class="hint">${kt(t)}\u2026</div></section>`}screen_main(){let t=this.save.season;return`<section class="screen dim">
      <div class="menu-col">
        <div class="logo">Apex<br><span>Grand Prix</span></div>
        <div class="tagline">20-CAR GRID \xB7 REAL TYRE, AERO &amp; HYBRID POWERTRAIN PHYSICS \xB7 ADJUSTABLE AI</div>
        <button class="btn primary" data-act="quick">Quick race<small>Jump straight in with your last settings</small></button>
        <button class="btn" data-act="setup" data-mode="race" data-qualify="0">Custom race<small>Circuit, laps, difficulty, team, setup, assists</small></button>
        <button class="btn" data-act="setup" data-mode="race" data-qualify="1">Qualify &amp; race<small>3-minute qualifying with all 20 cars sets your grid slot</small></button>
        <button class="btn" data-act="setup" data-mode="timetrial">Time trial<small>Chase your ghost, alone on the circuit</small></button>
        <button class="btn" data-act="career">Career<small>${this.save.career?`Season ${this.save.career.seasonNo} \xB7 ${ce[this.save.career.team].short} \xB7 round ${Math.min(this.save.career.season.round+1,this.save.career.season.calendar.length)} of ${this.save.career.season.calendar.length}`:"Pick a team, develop the car, climb the grid across seasons"}</small></button>
        <button class="btn" data-act="season">Championship<small>${t?`Round ${Math.min(t.round+1,t.calendar.length)} of ${t.calendar.length} in progress`:"4 rounds, points, a title to win"}</small></button>
        <div class="row"><button class="btn sm grow" data-act="controls">Controls</button><button class="btn sm grow" data-act="school">School</button><button class="btn sm grow" data-act="profile">Profile</button><button class="btn sm grow" data-act="settings">Settings</button></div>
      </div>
      <div class="version">v1.1 \xB7 WASD / arrows to drive \xB7 works with gamepads</div>
    </section>`}chips(t,e,i,n=""){return`<div class="chips">${e.map(r=>`<button class="chip ${r.dot?"dot":""} ${String(r.value)===String(i)?"on":""}" ${r.dot?`style="--c:${r.dot}"`:""} data-chip="${t}" data-value="${kt(r.value)}" ${n}>${kt(r.label)}</button>`).join("")}</div>`}toggle(t,e,i,n){return`<div class="toggle" data-toggle="${t}"><div>${kt(e)}${i?`<div class="hint">${kt(i)}</div>`:""}</div><div class="switch ${n?"on":""}"></div></div>`}slider(t,e,i,n,r,a,o){return`<div class="field"><label>${kt(e)}<b>${o}</b></label><input type="range" data-slider="${t}" min="${n}" max="${r}" step="${a}" value="${i}"></div>`}screen_setup(t={}){let i=this.config.mode,n=i==="timetrial"?"Time <span>trial</span>":t.season?"Champion<span>ship</span>":"Race <span>setup</span>",r=[["circuit","Circuit"],["race","Session"],["car","Team & car"],["assists","Assists"]],a=this["tab_"+this.tab](t);return`<section class="screen panel-screen full">
      <div class="row"><h2>${n}</h2><div class="grow"></div></div>
      <div class="tabs">${r.map(([o,l])=>`<button class="tab ${this.tab===o?"active":""}" data-tab="${o}">${l}</button>`).join("")}</div>
      <div>${a}</div>
      <div class="footer"><button class="btn sm" data-act="main">\u25C0 Back</button><div class="hint">${this.summary()}</div><button class="btn primary" data-act="go">${t.season?"Start round":i==="timetrial"?"Start session":"Go racing"}</button></div>
    </section>`}summary(){let t=this.config,e=Ie.find(r=>r.id===t.trackId),i=ce[t.team],n=qa(t.level);return t.mode==="timetrial"?`${kt(e.name)} \xB7 ${kt(i.short)}`:`${kt(e.name)} \xB7 ${t.laps} laps \xB7 ${kt(n.name)} \xB7 ${kt(i.short)}`}tab_circuit(t){let e=this.config,i=t&&t.season;return`<div class="tracks">${Ie.map(n=>{let r=this.hooks.tracks[n.id],a=this.save.records[n.id];return`<button class="tcard ${e.trackId===n.id?"on":""}" data-track="${n.id}" ${i?"disabled":""}>${r?$p(r):""}<h4>${kt(n.name)}</h4><div class="meta"><span>${kt(n.country)}</span><span>${r?(r.length/1e3).toFixed(2)+" km":""} \xB7 ${r?r.corners.length:""} turns</span></div><p>${kt(n.blurb)}</p><div class="meta"><span>Best lap</span><b>${a?be(a.best):"\u2014"}</b></div></button>`}).join("")}</div>`}ghostPanel(){let t=this.config.trackId,e=this.save.ghosts[t],i=(Ie.find(n=>n.id===t)||{}).name||t;return`<div class="panel"><h3>Ghost \xB7 ${kt(i)}</h3>
      <div class="hint">${e?`Your ghost on this circuit: <b>${be(e.time)}</b>. Copy it to send a rival your lap, or paste one they sent you (it replaces yours, so keep a copy if you want it).`:"Set a lap to record a ghost, or paste one a friend sent you."}</div>
      <textarea id="ghost-io" class="saveio" rows="2" spellcheck="false" placeholder="Paste a ghost here and press Use pasted ghost"></textarea>
      <div class="row" style="margin-top:.5rem"><button class="btn sm" data-act="ghostcopy" ${e?"":"disabled"}>Copy my ghost</button><button class="btn sm" data-act="ghostuse">Use pasted ghost</button></div></div>`}tab_race(){let t=this.config,e=this.hooks.tracks[t.trackId],i=e?Math.round(t.laps*e.length/1e3*.5):0,n=qa(t.level),r=t.mode==="timetrial";return`<div class="grid2">
      ${r?this.ghostPanel():`<div class="panel"><h3>Race</h3>
        ${this.slider("laps","Laps",t.laps,1,30,1,`${t.laps} \xB7 about ${Math.max(1,i)} min`)}
        <div class="field"><label>AI difficulty<b>${Math.round(t.level*100)}%</b></label>${this.chips("diff",vc.map(a=>({value:a.level,label:a.name})),n.level)}
        <input type="range" data-slider="level" min="0" max="100" step="1" value="${Math.round(t.level*100)}"><div class="hint" id="diff-blurb">${kt(n.blurb)} \u2014 drag for any value in between. Rookie leaves you room to learn; Legend runs every car at the physical limit.</div></div>
        ${this.slider("fieldSize","Cars on the grid",t.fieldSize,2,20,1,t.fieldSize)}
        ${this.slider("playerGrid","Your starting position",Math.min(t.playerGrid,t.fieldSize),1,t.fieldSize,1,"P"+Math.min(t.playerGrid,t.fieldSize))}
      </div>`}
      <div class="panel"><h3>Tyres &amp; rules</h3>
        <div class="field"><label>Weather</label>${this.chips("weather",[{value:"dry",label:"Dry"},{value:"light",label:"Light rain"},{value:"heavy",label:"Heavy rain"},{value:"changing",label:"Changeable"}],t.weather)}<div class="hint">Rain cuts slick-tyre grip by about 30 %: fit Wet tyres in the pits (T cycles the next set). Changeable: dry start, a shower somewhere in the race.</div></div>
        <div class="field"><label>Lighting</label>${this.chips("timeOfDay",[{value:"progress",label:"Midday to dusk"},{value:"day",label:"Always midday"},{value:"night",label:"Night race"}],t.timeOfDay)}</div>
        <div class="field"><label>Starting compound</label>${this.chips("compound",Ta.map(a=>({value:a,label:ni[a].name,dot:ni[a].color})),t.compound)}</div>
        <div class="field"><label>Tyre wear</label>${this.chips("tyreWear",[{value:0,label:"Off"},{value:1.5,label:"Low"},{value:3,label:"Normal"},{value:6,label:"High"}],t.tyreWear)}<div class="hint">Normal makes the Soft last about 5 laps and the Hard about 12. High forces a stop in a short race.</div></div>
        ${this.toggle("damage","Damage","Wings, floor and tyre punctures from contact",t.damage)}
        ${r?"":this.toggle("collisions","Car-to-car collisions","Off lets cars pass through each other",t.collisions)}
        ${r?"":this.toggle("equalCars","Identical cars","Every team has exactly your car; only the drivers differ (off: stronger teams have faster cars)",t.equalCars)}
        ${r?"":this.toggle("qualify","Qualifying session first","3 minutes, all 20 cars: your best lap sets your grid slot (overrides the start position)",t.qualify)}
        ${r?"":this.toggle("mandatoryStop","Mandatory pit stop","Use two compounds or take +15 s",t.mandatoryStop)}
        ${r?"":`<div class="field"><label>Pit wall</label>${this.chips("pitCalls",[{value:"off",label:"Silent"},{value:"radio",label:"Radio advice"},{value:"auto",label:"Calls you in"}],t.pitCalls)}<div class="hint">Advice reads your real tyre wear and tells you when to box and what to fit; Calls you in presses the pit button for you (B cancels).</div></div>`}
        ${r?"":this.toggle("adaptive","Adaptive AI pace","Cars far ahead ease off, cars far behind push (\xB13-5%)",t.adaptive)}
      </div></div>`}tab_car(){let t=this.config,e=Ie.find(a=>a.id===t.trackId),i=e.setup||{front:5,rear:5},n=t.frontWing??i.front,r=t.rearWing??i.rear;return`<div class="panel"><h3>Team</h3><div class="teams">${ce.map((a,o)=>`<button class="team ${t.team===o?"on":""}" data-team="${o}" style="--c:${a.color};--c2:${a.accent}"><i></i><div><b>${kt(a.name)}</b><div class="hint">Car performance</div><div class="bar"><span style="width:${Math.round(55+a.rating*45)}%"></span></div></div></button>`).join("")}</div></div>
    <div class="grid2" style="margin-top:1rem">
      <div class="panel"><h3>Aero setup \u2014 ${kt(e.name)}</h3>
        ${this.slider("frontWing","Front wing",n,0,10,1,`${n}  (recommended ${i.front})`)}
        ${this.slider("rearWing","Rear wing",r,0,10,1,`${r}  (recommended ${i.rear})`)}
        <div class="hint">More wing = more downforce and cornering grip, but more drag and a lower top speed. Low wing suits long straights; high wing suits tight, twisty circuits. Setups affect handling balance: more rear wing for stability, more front wing for turn-in.</div>
        <button class="btn sm" data-act="resetsetup" style="margin-top:.6rem">Use recommended</button></div>
      <div class="panel"><h3>Engine &amp; grip</h3>
        ${this.chips("carPower",[{value:"standard",label:"Standard"},{value:"quick",label:"Quick"},{value:"rocket",label:"Rocket"}],t.carPower)}
        <div class="hint">Your car only. Standard is the same car as every rival (0-100 km/h in about 2.6 s). Quick: +8 % power, a little more grip and a firmer launch. Rocket: +30 % power and a violent launch, for catching the field from the back of the grid. Not used in Career, which has its own upgrades.</div></div>
      <div class="panel"><h3>Brakes</h3>
        ${this.slider("brakeBias","Brake bias (front)",Math.round(t.brakeBias*100),50,68,1,Math.round(t.brakeBias*100)+"%")}
        <div class="hint">Higher front bias is stable but can lock the front tyres; lower bias turns in better and risks locking the rears. ABS covers most of it if enabled.</div></div>
      <div class="panel"><h3>Tyre pressure</h3>
        ${this.slider("pressure","Pressure offset",t.pressure,-3,3,1,t.pressure===0?"Standard":(t.pressure>0?"+":"")+t.pressure)}
        <div class="hint">Higher pressure heats the tyres faster and wears them more slowly but costs grip once it is too high; lower pressure grips better in the wet and gives more feel at the price of faster wear. Standard is the dry-weather sweet spot.</div></div></div>`}tab_assists(){let t=this.config.assists;return`<div class="grid2"><div class="panel"><h3>Driver aids</h3>
      <div class="field"><label>Presets</label><div class="chips">${Object.keys(Vp).map(e=>`<button class="chip" data-preset="${e}">${e}</button>`).join("")}</div></div>
      ${this.toggle("a.abs","ABS","Prevents brake lock-ups",t.abs)}
      ${this.toggle("a.steer","Steering assist","Limits steering lock so the front tyres don't scrub away",t.steer)}
      ${this.toggle("a.autoGear","Automatic gearbox","Manual: Q / E or paddles",t.autoGear)}
      ${this.toggle("a.pitAuto","Pit lane autopilot","The car drives itself through the pits once you commit",t.pitAuto)}
      ${this.toggle("a.pitGame","Interactive pit stops","Time your button press (Space) on each wheel nut: a clean stop takes 2.5 s, a cross-threaded nut costs 0.9 s",t.pitGame)}
    </div><div class="panel"><h3>Stability</h3>
      <div class="field"><label>Traction control</label>${this.chips("tc",Wp.map((e,i)=>({value:i,label:e})),t.tc)}</div>
      <div class="field"><label>Stability control (counter-steer help)</label>${this.chips("stability",Wp.map((e,i)=>({value:i,label:e})),t.stability)}</div>
      <div class="hint">Keyboard drivers should keep stability and traction on while learning. Gamepad and wheel users can turn them off for a more raw car.</div>
    </div></div>`}screen_controls(){let t=Ga(this.save.settings.keys),e=Vd.map(([n,r])=>{let a=this.rebinding===n;return`<div class="key"><span>${kt(r)}</span><button class="keybtn ${a?"wait":""}" data-rebind="${n}">${a?"Press a key\u2026":t[n].filter(o=>o!=="Escape"||n==="pause").map(o=>`<kbd>${kt(br(o))}</kbd>`).join("")||"<kbd>\u2014</kbd>"}</button></div>`}),i=[["Steer","Left stick"],["Throttle / brake","RT / LT"],["DRS","A"],["Boost","X"],["Pit request","B"],["Camera","Y"],["Gears","LB / RB"],["Look back","L3"],["Pause","Start"],["Reset","Back"],["Fuel mix / ERS mode","D-pad up / down"],["Next pit tyre","D-pad right"]];return`<section class="screen panel-screen full"><h2>Con<span>trols</span></h2>
      <div class="grid2"><div class="panel"><h3>Keyboard <small class="hint">\xB7 click a key to rebind it</small></h3><div class="keys">${e.join("")}</div><button class="btn sm" data-act="resetkeys" style="margin-top:.6rem">Reset keys to default</button><div class="hint" style="margin-top:.4rem">Esc always pauses. Enter confirms in menus. In a pit stop, the DRS key hits the wheel nut.</div></div>
      <div class="panel"><h3>Gamepad</h3><div class="keys">${i.map(([n,r])=>`<div class="key"><span>${n}</span><span><kbd>${r}</kbd></span></div>`).join("")}</div>
      <h3 style="margin-top:1.2rem">Racecraft</h3><div class="hint">\u2022 Brake in a straight line, then trail off the pedal as you turn in.<br>\u2022 Hit the apex kerb, then use all the track on exit \u2014 but not past the white line, or you get a track-limits warning.<br>\u2022 DRS opens the rear wing for ~10-15 km/h when you are within one second of the car ahead at the detection line.<br>\u2022 ERS boost spends the battery: harvest it by braking hard and lifting.<br>\u2022 Follow closely and you lose front downforce (dirty air) but gain a slipstream on the straights.<br>\u2022 Tyres have a temperature window: scrubbing them sliding overheats them, and worn tyres lose grip fast.<br>\u2022 Press <kbd>B</kbd> to call a pit stop \u2014 new tyres, repairs, and a limiter in the lane.</div></div></div>
      <div class="footer"><button class="btn sm" data-act="back">\u25C0 Back</button></div></section>`}qualiGrid(t,e){let i=t.list.find(a=>a.car===e),n={...t.times};if(i&&Number.isFinite(i.best))return{grid:i.pos,times:n};let r=t.list.filter(a=>Number.isFinite(a.best));return n.YOU=(r.length?Math.max(...r.map(a=>a.best)):100)+.001,{grid:r.length+1,times:n}}screen_school(){let t=this.save.school||{},e=vr.filter(n=>t[n.id]).length,i=vr.map((n,r)=>{let a=Ie.find(o=>o.id===n.track);return`<div class="lesson ${t[n.id]?"done":""}"><div class="lno">${t[n.id]?"\u2713":r+1}</div><div class="grow"><b>${kt(n.title)}</b><div class="hint">${kt(n.blurb)}</div>
        <div class="hint">${kt(a?a.name:n.track)} \xB7 ${n.mode==="race"?"vs a slow car":"alone on the circuit"}${n.weather?" \xB7 rain":""}</div>
        <ul class="goals">${n.goals.map(o=>`<li>${kt(o.text)}</li>`).join("")}</ul></div>
        <button class="btn sm ${t[n.id]?"":"primary"}" data-act="lesson" data-lesson="${n.id}">${t[n.id]?"Again":"Start"}</button></div>`}).join("");return`<section class="screen panel-screen full"><h2>Driving <span>school</span></h2>
      <div class="hint" style="margin-bottom:.8rem">${e} of ${vr.length} lessons passed. Each lesson is a short session with a checklist on screen; finish the goals and carry on driving for as long as you like.</div>
      <div class="lessons">${i}</div>
      <div class="footer"><button class="btn sm" data-act="main">\u25C0 Back</button></div></section>`}screen_profile(){let t={...$a,...this.save.stats||{}},e=this.save.achievements||{},i=ts.filter(o=>e[o.id]).length,n=(o,l)=>`<div class="stat"><small>${o}</small><b>${l}</b></div>`,r=Ie.map(o=>({d:o,r:this.save.records[o.id]})).filter(o=>o.r),a=(this.save.honours||[]).slice(-6).reverse();return`<section class="screen panel-screen full"><h2>Driver <span>profile</span></h2>
      <div class="panel"><div class="stats">${n("Races",t.races)}${n("Wins",t.wins)}${n("Podiums",t.podiums)}${n("Poles",t.poles)}${n("Fastest laps",t.fastestLaps)}${n("Passes",t.passes)}${n("Distance",Math.round(t.km)+" km")}${n("Pit stops",t.pitStops+(t.perfectStops?` (${t.perfectStops} perfect)`:""))}${n("Clean races",t.cleanRaces)}${n("Titles",t.championships+t.careerTitles)}</div></div>
      <div class="grid2" style="margin-top:1rem"><div class="panel"><h3>Achievements \xB7 ${i} / ${ts.length}</h3><div class="achs">${ts.map(o=>`<div class="ach ${e[o.id]?"got":""}"><b>${kt(o.name)}</b><span>${kt(o.desc)}</span></div>`).join("")}</div></div>
      <div class="panel"><h3>Lap records</h3>${r.length?`<table class="results">${r.map(o=>`<tr><td>${kt(o.d.name)}</td><td><b>${be(o.r.best)}</b></td></tr>`).join("")}</table>`:'<div class="hint">Set a time trial lap to record it here.</div>'}
        <h3 style="margin-top:1rem">Season history</h3>${a.length?`<div class="hint">${a.map(o=>`P${o.pos} \xB7 ${kt(o.team)} \xB7 ${o.points} pts`).join("<br>")}</div>`:'<div class="hint">Finish a championship to see it here.</div>'}</div></div>
      <div class="footer"><button class="btn sm" data-act="back">\u25C0 Back</button></div></section>`}screen_settings(t={}){let e=this.save.settings;return`<section class="screen panel-screen full"><h2>Set<span>tings</span></h2>
      <div class="grid2"><div class="panel"><h3>Graphics</h3>
        <div class="field"><label>Quality</label>${this.chips("quality",[{value:"low",label:"Low"},{value:"medium",label:"Medium"},{value:"high",label:"High"}],e.quality)}<div class="hint">Low: no shadows, fewer trees, lower resolution. Changes apply to the next session.</div></div>
        ${this.toggle("s.autoQuality","Automatic quality","Lowers the resolution (then shadows and blur) if the frame rate stays under 40 fps",e.autoQuality!==!1)}
        ${this.toggle("s.line","Racing line guide","Green: keep going. Yellow: ease off. Red: brake now (key L)",e.line!==!1)}
        ${this.toggle("s.shake","Camera shake","Kerbs, speed, engine rumble and impacts",e.shake)}
        ${this.toggle("s.blur","Motion blur","Radial speed blur that builds up fast at high speed (not on Low quality)",e.blur!==!1)}
        ${this.toggle("s.bloom","Bloom","Lights, windows and hot brake discs glow at dusk and at night (High and Medium quality)",e.bloom!==!1)}
        ${this.toggle("s.cbSafe","Colour-blind-safe guide","Racing line in blue / yellow / magenta instead of green / yellow / red",e.cbSafe)}
        ${this.toggle("s.calm","Reduce motion","No motion blur, camera shake or flashing lights",e.calm)}
        ${this.toggle("s.bigHud","Larger HUD","Scales the race HUD up by a fifth",e.bigHud)}
        ${this.toggle("s.minimap","Show minimap","",e.minimap)}
        ${this.toggle("s.tower","Show timing tower","",e.tower)}
      </div><div class="panel"><h3>Audio &amp; units</h3>
        ${this.slider("s.volume","Master volume",Math.round(e.volume*100),0,100,1,Math.round(e.volume*100)+"%")}
        <div class="field"><label>Speed units</label>${this.chips("units",[{value:"kmh",label:"km/h"},{value:"mph",label:"mph"}],e.units)}</div>
        <div class="field"><label>Default camera</label>${this.chips("camera",[["chase","Chase"],["close","Low chase"],["cockpit","Cockpit"],["tcam","T-cam"],["heli","Helicopter"],["tv","TV"]].map(([i,n])=>({value:i,label:n})),e.camera)}</div>
        <div class="field"><label>Keyboard steering speed</label>${this.chips("steerSpeed",[{value:.7,label:"Gentle"},{value:1,label:"Normal"},{value:1.4,label:"Quick"}],e.steerSpeed)}<div class="hint">How fast A / D turn the wheel. Gamepads and wheels are not affected.</div></div>
        ${this.slider("s.padDead","Gamepad stick deadzone",Math.round(e.padDead*100),0,30,1,Math.round(e.padDead*100)+"%")}
        ${this.toggle("s.rumble","Gamepad vibration","Kerbs, grass, tyre slip and impacts",e.rumble!==!1)}
        <div class="row"><button class="btn sm" data-act="fullscreen">Toggle full screen</button><button class="btn sm" data-act="wipe">Clear saved records</button></div>
      </div></div>
      <div class="panel" style="margin-top:1rem"><h3>Your driver</h3>
        <div class="row"><div class="field grow"><label>Timing-tower code</label><input type="text" class="txt" data-field="driverCode" maxlength="3" value="${kt(e.driverCode)}" autocomplete="off" spellcheck="false"></div>
        <div class="field grow"><label>Car number</label><input type="number" class="txt" data-field="driverNumber" min="1" max="99" step="1" value="${e.driverNumber}"></div></div>
        <div class="hint">Shown on your car, the timing tower, radio calls and results. Applies to the next session. A rival who already wears your number takes the standard 7 instead.</div></div>
      <div class="panel" style="margin-top:1rem"><h3>Backup</h3>
        <div class="hint">Your progress lives in this browser. Copy it as text to keep it safe or move it to another device, and paste it back here to restore it.</div>
        <textarea id="save-io" class="saveio" rows="3" spellcheck="false" placeholder="Paste a backup here and press Restore"></textarea>
        <div class="row" style="margin-top:.5rem"><button class="btn sm" data-act="savecopy">Copy my save</button><button class="btn sm" data-act="saverestore">Restore from the box</button></div>
      </div>
      <div class="footer"><button class="btn sm" data-act="${t.from==="pause"?"pause":"back"}">\u25C0 Back</button></div></section>`}screen_pause(){return`<section class="screen full" style="align-items:center;justify-content:center">
      <div class="menu-col" style="align-items:stretch"><div class="logo" style="font-size:2.6rem">Paused</div>
        <button class="btn primary" data-act="resume">Resume</button>
        <button class="btn" data-act="replay">Instant replay<small>The last 30 seconds from trackside cameras</small></button>
        <button class="btn" data-act="photo">Photo mode<small>Fly a free camera and save a screenshot</small></button>
        <button class="btn" data-act="restart">Restart session</button>
        <button class="btn" data-act="pausecam">Camera: <span id="camname"></span></button>
        <button class="btn" data-act="pausesettings">Settings</button>
        <button class="btn" data-act="quit">Quit to menu</button>
        <div class="hint" style="margin-top:.8rem">Racing line guide: <kbd>L</kbd> \xB7 Camera: <kbd>C</kbd> \xB7 Reset to track: <kbd>R</kbd> \xB7 Autopilot: <kbd>G</kbd></div></div></section>`}screen_results(t){let{cls:e,player:i,race:n,season:r,trackName:a,careerRes:o}=t,l=e.slice(0,3),c=[l[1],l[0],l[2]].filter(Boolean),h=m=>m.time!=null?be(m.time):"DNF",u=Math.min(...e.map(m=>m.best)),d=e.find(m=>m.car===i),f=e.map((m,p)=>{let v=e[0],_="";m.time!=null&&p>0&&(_=m.laps<v.laps?`+${v.laps-m.laps} lap${v.laps-m.laps>1?"s":""}`:"+"+(m.time-v.time).toFixed(3));let M=m.gridPos-m.pos;return`<tr class="${m.car===i?"me":""}"><td class="pos">${m.pos}</td><td><span class="tc" style="--c:${m.info.team.color}"></span>${kt(m.info.name)}</td><td>${kt(m.info.team.short)}</td><td>${h(m)}</td><td>${_}</td><td>${m.penalty?"+"+m.penalty+"s":""}</td><td>${m.best<1/0?be(m.best):""}${m.best===u&&u<1/0?" \u25C6":""}</td><td>${m.stops}</td><td>${M>0?"\u25B2"+M:M<0?"\u25BC"+-M:"\u2013"}</td><td><b>${m.points}</b></td></tr>`}).join(""),g="";if(r){let m=xs(r).slice(0,10),p=bs(r).slice(0,6);g=`<div class="panel"><h3>Drivers' standings \xB7 after round ${r.round} of ${r.calendar.length}</h3><table class="results"><tr><th>Pos</th><th>Driver</th><th>Pts</th></tr>${m.map((v,_)=>`<tr class="${v.name==="You"?"me":""}"><td class="pos">${_+1}</td><td>${kt(v.name)}</td><td><b>${v.pts}</b></td></tr>`).join("")}</table>
        <h3 style="margin-top:1rem">Constructors</h3><table class="results">${p.map((v,_)=>`<tr><td class="pos">${_+1}</td><td>${kt(v.team)}</td><td><b>${v.pts}</b></td></tr>`).join("")}</table></div>`}let y=r&&r.round>=r.calendar.length;return`<section class="screen panel-screen full">
      <h2>${kt(a)} <span>results</span></h2>
      <div class="podium">${c.map(m=>`<div class="pod p${m.pos}" style="--c:${m.info.team.color}"><div class="hint">P${m.pos}</div><b>${kt(m.info.code)}</b><div>${kt(m.info.team.short)}</div><div class="hint">${h(m)}</div></div>`).join("")}</div>
      ${d?`<div class="hint" style="text-align:center">You finished <b>P${d.pos}</b>${d.penalty?` (includes ${d.penalty}s of penalties)`:""} \xB7 best lap ${d.best<1/0?be(d.best):"\u2014"}</div>`:""}
      ${o?`<div class="panel"><h3>Career</h3><div class="hint">Finished <b style="color:#fff">P${o.pos}</b> \xB7 objective P${o.objective} ${o.met?'<b style="color:#31d17a">achieved</b>':'<b style="color:#ff6b6b">missed</b>'} \xB7 prize money <b style="color:#ffd24a">+${o.prize}</b>${o.fastest?" (fastest lap bonus)":""} \xB7 budget now <b style="color:#ffd24a">${o.budget}</b></div></div>`:""}
      <div class="grid2" style="grid-template-columns:${r?"2fr 1fr":"1fr"}"><div class="panel" style="overflow:auto"><table class="results"><tr><th>Pos</th><th>Driver</th><th>Team</th><th>Time</th><th>Gap</th><th>Pen</th><th>Best lap</th><th>Stops</th><th>Grid</th><th>Pts</th></tr>${f}</table></div>${g}</div>
      <div class="panel telemetry"><h3>Race telemetry</h3><div class="charts"><canvas data-chart="laps"></canvas><canvas data-chart="fuel"></canvas><canvas data-chart="wear"></canvas><canvas data-chart="top"></canvas></div></div>
      <div class="footer"><button class="btn sm" data-act="quit">Main menu</button><div class="row">
        <button class="btn" data-act="replay">Watch replay</button>
        ${o?'<button class="btn primary" data-act="careercontinue">Continue career \u25B6</button>':`<button class="btn ${r&&!y?"":"primary"}" data-act="restart">Race again</button>`}
        ${r&&!y?'<button class="btn primary" data-act="nextround">Next round \u25B6</button>':""}
        ${y?'<button class="btn primary" data-act="endseason">Finish season</button>':""}</div></div></section>`}screen_career_new(){let t=this.cnew||(this.cnew={team:6,level:.55,rounds:4,distance:"standard"}),e=qa(t.level);return`<section class="screen panel-screen full">
      <div class="row"><h2>New <span>career</span></h2><div class="grow"></div></div>
      <div class="panel"><h3>Choose your team</h3><div class="teams">${ce.map((i,n)=>{let r=Ua(n);return`<button class="team ${t.team===n?"on":""}" data-cteam="${n}" style="--c:${i.color};--c2:${i.accent}"><i></i><div><b>${kt(i.name)}</b><div class="hint">Car ${Math.round(55+i.rating*45)}% \xB7 target P${r.finish}</div><div class="bar"><span style="width:${Math.round(55+i.rating*45)}%"></span></div></div></button>`}).join("")}</div>
      <div class="hint" style="margin-top:.5rem">A weaker car is a tougher start: prize money buys upgrades, and strong seasons earn offers from better teams.</div></div>
      ${this.careerRulesPanels(t,!0)}
      <div class="footer"><button class="btn sm" data-act="main">\u25C0 Back</button><div class="hint">${kt(ce[t.team].name)} \xB7 ${t.rounds} rounds \xB7 ${t.rules.laps?t.rules.laps+(t.rules.laps===1?" lap":" laps")+" a race":"races by distance"} \xB7 ${kt(e.name)}</div><button class="btn primary" data-act="careerstart">Start career</button></div></section>`}careerRulesPanels(t,e){let i=t.rules||(t.rules=Kn({})),n=qa(t.level),r=i.laps?`${i.laps} ${i.laps===1?"lap":"laps"}`:"By distance",a=o=>({value:o.value,label:o.label});return`<div class="grid2" style="margin-top:1rem">
      <div class="panel"><h3>Race rules</h3>
        ${this.slider("cr.laps","Laps per race",i.laps,0,30,1,r)}
        <div class="hint" style="margin:-.2rem 0 .6rem">Slide to 0 to use the race distance below. 1 lap makes every round a quick sprint.</div>
        ${this.slider("cr.field","Cars on the grid",i.fieldSize,2,20,1,i.fieldSize)}
        ${this.slider("cr.grid","Your start without qualifying",Math.min(i.playerGrid,i.fieldSize),1,i.fieldSize,1,"P"+Math.min(i.playerGrid,i.fieldSize))}
        <div class="field"><label>Weather</label>${this.chips("cr.weather",[{value:"forecast",label:"Forecast"},{value:"dry",label:"Always dry"},{value:"light",label:"Light rain"},{value:"heavy",label:"Heavy rain"},{value:"changing",label:"Changeable"}].map(a),i.weather)}</div>
        <div class="field"><label>Tyre wear</label>${this.chips("cr.tyreWear",[{value:0,label:"Off"},{value:1.5,label:"Low"},{value:3,label:"Normal"},{value:6,label:"High"}],i.tyreWear)}</div>
        <div class="field"><label>Pit wall</label>${this.chips("cr.pitCalls",[{value:"off",label:"Silent"},{value:"radio",label:"Radio advice"},{value:"auto",label:"Calls you in"}],i.pitCalls)}</div>
        ${this.toggle("cr.damage","Damage","Wings, floor and sidepods can be broken",i.damage)}
        ${this.toggle("cr.collisions","Car-to-car collisions","Off: cars pass through each other",i.collisions)}
        ${this.toggle("cr.mandatoryStop","Mandatory pit stop","Everyone must stop once (a penalty if not)",i.mandatoryStop)}
        ${this.toggle("cr.adaptive","Adaptive AI pace","Cars far ahead ease off, cars far behind push",i.adaptive)}
      </div>
      <div class="panel"><h3>Season rules</h3>
        ${this.slider("cr.rounds",e?"Rounds per season":"Rounds per season (from next season)",t.rounds,1,Fa,1,`${t.rounds} ${t.rounds===1?"round":"rounds"}`)}
        <div class="field"><label>Race distance</label>${this.chips("cn.distance",Pa.map(o=>({value:o.id,label:`${o.name} \xB7 ${o.km} km`})),t.distance)}<div class="hint">Used when laps per race is set to 0.</div></div>
        <div class="field"><label>AI difficulty</label>${this.chips("cn.level",vc.map(o=>({value:o.level,label:o.name})),n.level)}<div class="hint">${kt(n.blurb)}.</div></div>
        ${this.toggle("cr.creep","Rivals improve every season","The AI gets a little faster each year (off: the difficulty stays where you set it)",i.creep)}
        <div class="field"><label>Prize money</label>${this.chips("cr.prize",[{value:.5,label:"\xD70.5"},{value:1,label:"\xD71"},{value:2,label:"\xD72"},{value:5,label:"\xD75"}],i.prize)}<div class="hint">Multiplies race prizes and the end-of-season bonus: more money, faster car development.</div></div>
      </div></div>`}screen_career_rules(){let t=this.save.career;return`<section class="screen panel-screen full">
      <div class="row"><h2>Career <span>rules</span></h2><div class="grow"></div><div class="hint">Changes apply from your next race (the number of rounds from next season).</div></div>
      ${this.careerRulesPanels(t,!1)}
      <div class="footer"><button class="btn primary" data-act="careerhub">\u25C0 Back to career</button></div></section>`}screen_career_hub(){let t=this.save.career,e=t.season,i=e.calendar[e.round],n=Ie.find(d=>d.id===i),r=this.hooks.tracks[i],a=r?fc(t,r.length):5,o=Ua(t.team),l=ce[t.team],c=xs(e).slice(0,8),h=bs(e).slice(0,6),u=Td.map(d=>{let f=t.upgrades[d]||0,g=Rd(f),y=Array.from({length:Sn},(m,p)=>`<i class="${p<f?"on":""}"></i>`).join("");return`<div class="upg"><div><b>${kt(ur[d].name)}</b><div class="hint">${kt(ur[d].blurb)}</div><div class="pips">${y}</div></div>
        <button class="btn sm" data-buy="${d}" ${f>=Sn||t.budget<g?"disabled":""}>${f>=Sn?"Max":`Upgrade \xB7 ${g}`}</button></div>`}).join("");return`<section class="screen panel-screen full">
      <div class="row"><h2>Career <span>season ${t.seasonNo}</span></h2><div class="grow"></div><div class="hint"><b style="color:#fff">${kt(l.name)}</b> \xB7 budget <b style="color:#ffd24a;font-size:1.3rem">${t.budget}</b></div></div>
      <div class="grid2" style="grid-template-columns:1.1fr 1fr">
        <div class="panel"><h3>Round ${e.round+1} of ${e.calendar.length}</h3>
          <div class="hubtrack">${r?$p(r):""}<div><b style="font-size:1.3rem">${kt(n.name)}</b><div class="hint">${kt(n.country)} \xB7 ${r?(r.length/1e3).toFixed(2)+" km":""} \xB7 ${a} ${a===1?"lap":"laps"}</div>
          <div class="hint" style="margin-top:.5rem">Forecast: <b style="color:#fff">${kt(op[Na(e)])}</b>${Na(e)!=="dry"?" \u2014 be ready to change tyres":""}</div>
          <div class="hint" style="margin-top:.3rem">Objective: finish <b style="color:#fff">P${o.finish}</b> or better (+8 prize). Constructors target: P${o.constructor}.</div></div></div>
          <div class="row" style="margin-top:.8rem"><button class="btn primary grow" data-act="careerrace" data-q="1">Qualify &amp; race</button><button class="btn grow" data-act="careerrace" data-q="0">Race now</button></div>
        </div>
        <div class="panel"><h3>Car development</h3>${u}</div>
      </div>
      <div class="grid2" style="margin-top:1rem">
        <div class="panel"><h3>Drivers' championship</h3><table class="results">${c.length?c.map((d,f)=>`<tr class="${d.name==="You"?"me":""}"><td class="pos">${f+1}</td><td>${kt(d.name)}</td><td>${kt(d.team)}</td><td><b>${d.pts}</b></td></tr>`).join(""):'<tr><td class="hint">No races yet</td></tr>'}</table></div>
        <div class="panel"><h3>Constructors</h3><table class="results">${h.length?h.map((d,f)=>`<tr class="${d.team===l.short?"me":""}"><td class="pos">${f+1}</td><td>${kt(d.team)}</td><td><b>${d.pts}</b></td></tr>`).join(""):'<tr><td class="hint">No races yet</td></tr>'}</table></div>
      </div>
      <div class="footer"><button class="btn sm" data-act="main">Main menu</button><div class="hint">${t.history.length?`Previous seasons: ${t.history.map(d=>`S${d.seasonNo} P${d.driverPos}`).join(" \xB7 ")}`:""}</div><div class="row"><button class="btn sm" data-act="careerrules">Career rules</button><button class="btn sm" data-act="careerwipe" data-confirm="0">Abandon career</button></div></div></section>`}screen_career_end(){let t=this.save.career,e=t.seasonRecap,i=ce[t.team],n=(e.offers||[]).map(r=>`<button class="team" data-coffer="${r}" style="--c:${ce[r].color};--c2:${ce[r].accent}"><i></i><div><b>${kt(ce[r].name)}</b><div class="hint">Offer: join for season ${t.seasonNo+1} \xB7 car ${Math.round(55+ce[r].rating*45)}%</div><div class="bar"><span style="width:${Math.round(55+ce[r].rating*45)}%"></span></div></div></button>`).join("");return`<section class="screen panel-screen full">
      <div class="row"><h2>Season ${e.seasonNo} <span>${e.champion?"champion!":"complete"}</span></h2></div>
      <div class="grid2"><div class="panel"><h3>Your season</h3>
        <div class="bigstats"><div><small>Drivers'</small><b>P${e.driverPos}</b></div><div><small>${kt(i.short)}</small><b>P${e.teamPos}</b></div><div><small>Points</small><b>${e.points}</b></div><div><small>Wins</small><b>${e.wins}</b></div><div><small>Podiums</small><b>${e.podiums}</b></div></div>
        <div class="hint" style="margin-top:.6rem">Constructors objective (P${e.constructorObjective}): <b style="color:${e.metConstructor?"#31d17a":"#ff6b6b"}">${e.metConstructor?"achieved":"missed"}</b>. Season bonus added to your budget: now <b style="color:#ffd24a">${t.budget}</b>.</div></div>
        <div class="panel"><h3>Contracts for next season</h3><div class="teams">${n||'<div class="hint">No offers this year. Finish higher in the standings to attract bigger teams.</div>'}
          <button class="team on" data-coffer="${t.team}" style="--c:${i.color};--c2:${i.accent}"><i></i><div><b>Stay with ${kt(i.short)}</b><div class="hint">Keep your car development</div></div></button></div></div></div>
      <div class="footer"><button class="btn sm" data-act="main">Main menu</button><div class="hint">Moving teams starts car development again.</div></div></section>`}screen_season_end(t){let e=t.season,i=xs(e),n=bs(e),r=i.findIndex(o=>o.name==="You")+1,a=(this.save.honours||[]).slice(-5).reverse();return`<section class="screen panel-screen full">
      <div class="row"><h2>${r===1?"World <span>champion!</span>":"Season <span>complete</span>"}</h2></div>
      <div class="grid2"><div class="panel"><h3>Drivers' championship</h3><table class="results">${i.slice(0,12).map((o,l)=>`<tr class="${o.name==="You"?"me":""}"><td class="pos">${l+1}</td><td>${kt(o.name)}</td><td>${kt(o.team)}</td><td><b>${o.pts}</b></td></tr>`).join("")}</table></div>
        <div class="panel"><h3>Constructors</h3><table class="results">${n.map((o,l)=>`<tr><td class="pos">${l+1}</td><td>${kt(o.team)}</td><td><b>${o.pts}</b></td></tr>`).join("")}</table>
        ${a.length?`<h3 style="margin-top:1rem">Your recent seasons</h3><div class="hint">${a.map(o=>`P${o.pos} with ${kt(o.team)} (${o.points} pts)`).join(" \xB7 ")}</div>`:""}</div></div>
      <div class="footer"><button class="btn sm" data-act="main">Main menu</button><div class="hint">You finished P${r} with ${e.points.You||0} points.</div><button class="btn primary" data-act="endseason">Close the season</button></div></section>`}screen_quali(t){let{q:e,player:i,trackName:n}=t,r=e.list[0]&&Number.isFinite(e.list[0].best)?e.list[0].best:null,a=e.list.map(l=>{let c=l.car===i,h=Number.isFinite(l.best)&&r!=null&&l.pos>1?"+"+(l.best-r).toFixed(3):"";return`<tr class="${c?"me":""}"><td class="pos">${l.pos}</td><td><span class="tc" style="--c:${l.info.team.color}"></span>${kt(l.info.name)}</td><td>${kt(l.info.team.short)}</td><td>${Number.isFinite(l.best)?be(l.best):"no time"}</td><td>${h}</td><td>${l.laps}</td></tr>`}).join(""),o=e.list.find(l=>l.car===i);return`<section class="screen panel-screen full">
      <div class="row"><h2>Qualifying <span>${kt(n)}</span></h2><div class="grow"></div><div class="hint">You start from <b style="color:#fff;font-size:1.4rem">P${this.qualiGrid(e,i).grid}</b></div></div>
      <div class="panel" style="overflow:auto"><table class="results"><tr><th>Pos</th><th>Driver</th><th>Team</th><th>Best lap</th><th>Gap</th><th>Laps</th></tr>${a}</table></div>
      <div class="footer"><button class="btn sm" data-act="quit">Main menu</button><button class="btn" data-act="restart">Qualify again</button><button class="btn primary" data-act="qualirace">Start race from P${this.qualiGrid(t.q,t.player).grid}</button></div></section>`}screen_timetrial(t){let{player:e,race:i,trackName:n,best:r,newBest:a}=t,o=e.rs.lapTimes.slice(2);return`<section class="screen panel-screen full"><h2>${kt(n)} <span>time trial</span></h2>
      <div class="panel"><h3>Session</h3><div class="hint">Best lap <b style="color:#fff;font-size:1.6rem">${r<1/0?be(r):"\u2014"}</b> ${a?'\xB7 <b style="color:#31d17a">New record!</b>':""}</div>
      <div class="hint" style="margin-top:.6rem">Laps: ${e.rs.lapTimes.map((l,c)=>`<span style="margin-right:1rem">L${c+1} ${be(l)}${c===0?" (out)":""}</span>`).join("")}</div></div>
      <div class="footer"><button class="btn sm" data-act="quit">Main menu</button><button class="btn primary" data-act="restart">Run again</button></div></section>`}onClick(t){let e=t.target.closest("[data-act],[data-tab],[data-track],[data-team],[data-chip],[data-toggle],[data-preset],[data-rebind],button");if(!e)return;let i=this.hooks;if(i.sfx&&i.sfx("click"),e.dataset.tab)return this.tab=e.dataset.tab,this.rerender();if(e.dataset.track)return this.config.trackId=e.dataset.track,this.config.frontWing=this.config.rearWing=null,this.persist(),this.rerender();if(e.dataset.team!=null&&e.dataset.team!=="")return this.config.team=+e.dataset.team,this.persist(),this.rerender();if(e.dataset.rebind)return this.rebinding=this.rebinding===e.dataset.rebind?null:e.dataset.rebind,this.rerender();if(e.dataset.chip){let a=e.dataset.chip,o=e.dataset.value,l=this.config;if(a.startsWith("cn.")||a.startsWith("cr.")){let c=this.careerTarget(),h=a.slice(3);return a.startsWith("cr.")?c.rules[h]=h==="weather"||h==="pitCalls"?o:+o:c[h]=h==="distance"?o:+o,this.cnewIsTarget(c)||this.persist(),this.rerender()}return a==="diff"?l.level=+o:a==="compound"?l.compound=o:a==="carPower"?l.carPower=["standard","quick","rocket"].includes(o)?o:"standard":a==="weather"?(l.weather=o,(o==="light"||o==="heavy")&&!ni[l.compound].wetTyre?(this.dryCompound=l.compound,l.compound="wet"):(o==="dry"||o==="changing")&&ni[l.compound].wetTyre&&(l.compound=this.dryCompound&&!ni[this.dryCompound].wetTyre?this.dryCompound:"medium")):a==="timeOfDay"?l.timeOfDay=o:a==="pitCalls"?l.pitCalls=["off","radio","auto"].includes(o)?o:"radio":a==="tyreWear"?l.tyreWear=+o:a==="tc"?l.assists.tc=+o:a==="stability"?l.assists.stability=+o:a==="quality"?this.save.settings.quality=o:a==="units"?this.save.settings.units=o:a==="camera"?this.save.settings.camera=o:a==="steerSpeed"&&(this.save.settings.steerSpeed=+o),this.persist(),i.applySettings&&i.applySettings(),this.rerender()}if(e.dataset.toggle){let a=e.dataset.toggle;if(a.startsWith("cr.")){let o=this.careerTarget();return o.rules[a.slice(3)]=!o.rules[a.slice(3)],this.cnewIsTarget(o)||this.persist(),this.rerender()}return a.startsWith("a.")?this.config.assists[a.slice(2)]=!this.config.assists[a.slice(2)]:a==="s.line"?this.save.settings.line=this.save.settings.line===!1:a.startsWith("s.")?this.save.settings[a.slice(2)]=!this.save.settings[a.slice(2)]:this.config[a]=!this.config[a],this.persist(),i.applySettings&&i.applySettings(),this.rerender()}if(e.dataset.cteam!=null&&e.dataset.cteam!=="")return(this.cnew||(this.cnew={team:6,level:.55,rounds:4,distance:"standard"})).team=+e.dataset.cteam,this.rerender();if(e.dataset.coffer!=null)return i.careerNext(+e.dataset.coffer);if(e.dataset.buy)return i.careerBuy(e.dataset.buy);if(e.dataset.preset)return this.config.assists={...Vp[e.dataset.preset]},this.persist(),this.rerender();let n=e.dataset.act;if(!n)return;let r=this.config;switch(n){case"quick":return r.mode="race",this.persist(),i.startRace({...r,qualify:!1,__season:!1});case"setup":return r.mode=e.dataset.mode,e.dataset.qualify!=null&&(r.qualify=e.dataset.qualify==="1"),this.tab="circuit",this.persist(),this.show("setup");case"season":return i.openSeason();case"career":return i.openCareer();case"careerstart":return i.careerStart({...this.cnew});case"careerrace":return i.careerRace(e.dataset.q==="1");case"careercontinue":return i.openCareer();case"careerrules":return this.show("career_rules");case"careerhub":return this.show("career_hub");case"careerwipe":if(e.dataset.confirm!=="1"){e.dataset.confirm="1",e.textContent="Click again to delete career";return}return i.careerAbandon();case"go":{this.persist();let a=!!(this.lastData&&this.lastData.season);return r.mode==="race"&&r.qualify?i.startRace({...r,mode:"qualifying",qualiTimes:null,seed:void 0,__season:a}):i.startRace({...r,__season:a})}case"qualirace":{let a=this.lastData;if(a&&a.q){let o=this.qualiGrid(a.q,a.player);return i.raceFromQuali({cfg:a.cfg,times:o.times,grid:o.grid})}return}case"main":return i.toMain();case"profile":return this.prev=this.current,this.show("profile");case"school":return this.show("school");case"lesson":return i.startLesson(e.dataset.lesson);case"controls":return this.prev=this.current,this.show("controls");case"settings":return this.prev=this.current,this.show("settings");case"back":return i.toMain();case"resetkeys":return this.save.settings.keys={},this.rebinding=null,i.applySettings(),this.rerender();case"resetsetup":return r.frontWing=r.rearWing=null,r.brakeBias=.58,r.pressure=0,this.persist(),this.rerender();case"fullscreen":{try{document.fullscreenElement?document.exitFullscreen():(document.documentElement.requestFullscreen||document.documentElement.webkitRequestFullscreen).call(document.documentElement)}catch{i.toast&&i.toast("Full screen is not available here")}return}case"savecopy":{let a=this.root.querySelector("#save-io"),o=Jb(this.save);a&&(a.value=o,a.focus(),a.select());try{navigator.clipboard.writeText(o).then(()=>i.toast&&i.toast("Save copied"),()=>i.toast&&i.toast("Copy it from the box (Ctrl+C)"))}catch{i.toast&&i.toast("Copy it from the box (Ctrl+C)")}return}case"ghostcopy":{let a=this.save.ghosts[r.trackId];if(!a)return;let o=this.root.querySelector("#ghost-io"),l=Kb(r.trackId,a);o&&(o.value=l,o.focus(),o.select());try{navigator.clipboard.writeText(l).then(()=>i.toast&&i.toast("Ghost copied"),()=>i.toast&&i.toast("Copy it from the box (Ctrl+C)"))}catch{i.toast&&i.toast("Copy it from the box (Ctrl+C)")}return}case"ghostuse":{let a=this.root.querySelector("#ghost-io"),o=Zb(a?a.value:"");if(!o){i.toast&&i.toast("That is not a valid ghost");return}return this.save.ghosts[o.trackId]=o.ghost,r.trackId=o.trackId,this.persist(),i.toast&&i.toast(`Ghost loaded: ${be(o.ghost.time)}`),this.rerender()}case"saverestore":{let a=this.root.querySelector("#save-io"),o=jb(a?a.value:"");if(!o){i.toast&&i.toast("That is not a valid backup");return}for(let l of o.present)this.save[l]=o[l];return this.config={...this.save.config,assists:{...this.save.config.assists}},this.save.config=this.config,this.cnew=null,this.dryCompound=null,i.applySettings(),i.toast&&i.toast(`Restored: ${o.present.join(", ")}`),this.rerender()}case"wipe":{let a=Date.now();if(!this._wipeAt||a-this._wipeAt>5e3){this._wipeAt=a;let o=this.root.querySelector("[data-act=wipe]");o&&(o.textContent="Click again to confirm"),i.toast&&i.toast("This clears lap records, ghosts and the current championship. Click again to confirm.");return}return this._wipeAt=0,this.save.records={},this.save.ghosts={},this.save.season=null,ze(this.save),i.toast&&i.toast("Saved records cleared"),this.rerender()}case"resume":return i.resume();case"photo":return i.photo();case"replay":return i.replay(this.current==="pause"?"pause":"results");case"restart":return i.restart();case"quit":return i.toMain(!0);case"pausecam":return i.cycleCamera&&i.cycleCamera();case"pausesettings":return this.show("settings",{from:"pause"});case"pause":return this.show("pause");case"nextround":return i.nextRound();case"endseason":return i.endSeason()}}onInput(t){let e=t.target,i=e.dataset&&e.dataset.field;if(i){let l=this.save.settings;i==="driverCode"?l.driverCode=Xp(e.value,l.driverCode):i==="driverNumber"&&(l.driverNumber=Math.round(gi(e.value,1,99,l.driverNumber))),i==="driverCode"&&(e.onchange=()=>{e.value=l.driverCode}),clearTimeout(this._persistT),this._persistT=setTimeout(()=>this.persist(),300);return}let n=e.dataset&&e.dataset.slider;if(!n)return;let r=+e.value,a=this.config;if(n.startsWith("cr."))return this.onCareerSlider(n,r,e);if(n==="laps")a.laps=r;else if(n==="level")a.level=r/100;else if(n==="fieldSize"){a.fieldSize=r,a.playerGrid=Math.min(a.playerGrid,r);let l=this.root.querySelector("[data-slider=playerGrid]");if(l){l.max=r,l.value=a.playerGrid;let c=l.closest(".field").querySelector("label b");c&&(c.textContent="P"+a.playerGrid)}}else n==="playerGrid"?a.playerGrid=Math.min(r,a.fieldSize):n==="frontWing"?a.frontWing=r:n==="rearWing"?a.rearWing=r:n==="brakeBias"?a.brakeBias=r/100:n==="pressure"?a.pressure=r:n==="s.padDead"?(this.save.settings.padDead=r/100,this.hooks.applySettings&&this.hooks.applySettings()):n==="s.volume"&&(this.save.settings.volume=r/100,this.hooks.applySettings&&this.hooks.applySettings());clearTimeout(this._persistT),this._persistT=setTimeout(()=>this.persist(),300);let o=e.closest(".field").querySelector("label b");if(o)if(n==="laps")o.textContent=`${r} \xB7 about ${Math.max(1,Math.round(r*(this.hooks.tracks[a.trackId]?.length||5e3)/1e3*.5))} min`;else if(n==="level")o.textContent=r+"%";else if(n==="playerGrid")o.textContent="P"+r;else if(n==="brakeBias")o.textContent=r+"%";else if(n==="frontWing"||n==="rearWing"){let l=(Ie.find(c=>c.id===a.trackId)||{}).setup||{front:5,rear:5};o.textContent=`${r}  (recommended ${n==="frontWing"?l.front:l.rear})`}else n==="pressure"?o.textContent=r===0?"Standard":(r>0?"+":"")+r:n==="s.volume"||n==="s.padDead"?o.textContent=r+"%":o.textContent=r;if(n==="level"){let l=qa(a.level);e.closest(".field").querySelectorAll(".chip").forEach(h=>h.classList.toggle("on",+h.dataset.value===l.level));let c=this.root.querySelector("#diff-blurb");c&&(c.textContent=l.blurb+" \u2014 drag for any value in between. Rookie leaves you room to learn; Legend runs every car at the physical limit.")}}careerTarget(){if(this.current==="career_new"||!this.save.career){let e=this.cnew||(this.cnew={team:6,level:.55,rounds:4,distance:"standard"});return e.rules||(e.rules=Kn({})),e}let t=this.save.career;return t.rules||(t.rules=Kn({})),t}cnewIsTarget(t){return t===this.cnew}onCareerSlider(t,e,i){let n=this.careerTarget(),r=n.rules;if(t==="cr.laps")r.laps=e;else if(t==="cr.field"){r.fieldSize=e,r.playerGrid=Math.min(r.playerGrid,e);let o=this.root.querySelector('[data-slider="cr.grid"]');if(o){o.max=e,o.value=r.playerGrid;let l=o.closest(".field").querySelector("label b");l&&(l.textContent="P"+r.playerGrid)}}else t==="cr.grid"?r.playerGrid=Math.min(e,r.fieldSize):t==="cr.rounds"&&(n.rounds=e);this.cnewIsTarget(n)||(clearTimeout(this._persistT),this._persistT=setTimeout(()=>this.persist(),300));let a=i.closest(".field").querySelector("label b");a&&(a.textContent=t==="cr.laps"?e?`${e} ${e===1?"lap":"laps"}`:"By distance":t==="cr.grid"?"P"+r.playerGrid:t==="cr.rounds"?`${e} ${e===1?"round":"rounds"}`:e)}rerender(){let t=this.root.querySelector(".panel-screen"),e=t?t.scrollTop:0;this.show(this.current,this.lastData);let i=this.root.querySelector(".panel-screen");i&&(i.scrollTop=e)}};function Qb(s){let t=new Set,e=["map","normalMap","roughnessMap","metalnessMap","aoMap","emissiveMap","alphaMap","bumpMap","envMap","lightMap"];s.traverse(i=>{i.isLight&&i.shadow&&i.shadow.dispose(),i.geometry&&i.geometry.dispose(),i.isInstancedMesh&&i.dispose();let n=i.material?Array.isArray(i.material)?i.material:[i.material]:[];for(let r of n)if(!(t.has(r)||r.userData&&r.userData.shared)){t.add(r);for(let a of e)r[a]&&r[a].dispose&&r[a].dispose();if(r.uniforms)for(let a of Object.values(r.uniforms))a.value&&a.value.isTexture&&a.value.dispose();r.dispose()}}),s.environment&&s.environment.dispose&&s.environment.dispose()}var Jp=s=>String(s??"").replace(/[&<>]/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;"})[t]),t_=s=>(s=Math.min(1,Math.max(0,s)),s*s*(3-2*s)),Xa=()=>new Promise(s=>requestAnimationFrame(()=>setTimeout(s,0)));function e_(s){let t=new Uint8Array(s.buffer,s.byteOffset,s.byteLength),e="";for(let i=0;i<t.length;i+=32768)e+=String.fromCharCode.apply(null,t.subarray(i,i+32768));return btoa(e)}function i_(s){let t=atob(s),e=new Uint8Array(t.length);for(let i=0;i<t.length;i++)e[i]=t.charCodeAt(i);return new Float32Array(e.buffer)}var Xd=class{constructor(){this.canvas=document.getElementById("gl"),this.save=Kp(),this.state="boot",this.tracks={},this.input=new Bc,this.input.capture=()=>this.state==="race"||this.state==="replay"||this.state==="photo"||this.state==="paused"&&!this.menu.current,this.audio=new zc,this.lastT=performance.now();try{this.initRenderer()}catch(e){throw document.getElementById("screens").innerHTML='<section class="screen loading"><div class="logo">Apex <span>GP</span></div><div class="hint" style="max-width:34rem;text-align:center;line-height:1.5">This game needs WebGL, and your browser could not start it. Try a current Chrome, Edge, Firefox or Safari with hardware acceleration enabled.</div></section>',e}this.canvas.addEventListener("webglcontextlost",e=>{e.preventDefault(),this.toast("Graphics context lost: reloading\u2026"),setTimeout(()=>location.reload(),1200)}),this.hud=new Gc(document.getElementById("hud")),this.screens=document.getElementById("screens"),this.menu=new Vc(this.screens,this.save,this.hooks()),this.session=null,this.showroom=null,window.addEventListener("resize",()=>this.resize()),window.addEventListener("keydown",e=>{if(this.audio.start(),this.audio.resume(),this.menu.rebinding){e.preventDefault();let i=this.menu.rebinding;this.menu.rebinding=null,e.code!=="Escape"&&(this.save.settings.keys=Hp(this.save.settings.keys,i,e.code),ze(this.save),this.applySettings()),this.input.pressed.clear(),this.input.down.clear(),this.menu.rerender();return}if(this.state==="replay"){let i=this.session&&this.session.replay;e.code==="Space"?(e.preventDefault(),this.replayAction("play")):e.code==="KeyN"?this.replayAction("car"):e.code==="KeyS"?this.replayAction("slow"):e.code==="KeyF"?this.replayAction("normal"):e.code==="ArrowLeft"&&i?i.t=Math.max(0,i.t-2):e.code==="ArrowRight"&&i&&(i.t=Math.min(this.session.rec.duration,i.t+2));return}if(this.state==="paused"&&e.code==="Escape"&&this.menu.current==="settings"){this.input.pressed.delete("Escape"),this.menu.show("pause");let i=document.getElementById("camname");i&&this.session&&(i.textContent=Qn[this.session.camRig.mode]);return}if(this.state==="menu"&&e.code==="Escape"&&this.menu.current&&this.menu.current!=="main"&&(this.menu.current==="settings"&&this.session?this.menu.show("pause"):this.toMain()),(this.state==="menu"||this.state==="results")&&e.code==="Enter"){let i=this.screens.querySelector(".btn.primary");i&&document.activeElement===document.body&&i.click()}}),window.addEventListener("pointerdown",()=>{this.audio.start(),this.audio.resume()}),document.addEventListener("visibilitychange",()=>{document.hidden&&this.state==="race"&&this.pause()});let t=e=>{let i=performance.now();i-(this._errT||-1e9)<6e3||(this._errT=i,console.error(e),this.toast("Something went wrong, but the game is still running (details in the console)"))};window.addEventListener("error",e=>t(e.message)),window.addEventListener("unhandledrejection",e=>t(String(e.reason))),this.setupTouch(),this.hud.onRadio=()=>this.audio.ui("radio"),document.getElementById("hud").addEventListener("click",e=>{e.target.closest("#finish")&&this.session&&this.session.fin&&(this.session.finConfirm=!0)}),this.boot()}hooks(){return{tracks:this.tracks,sfx:t=>this.audio.ui(t),startRace:t=>this.startRace(t),startLesson:t=>this.startLesson(t),raceFromQuali:t=>this.startRace({...t.cfg,mode:"race",qualiTimes:t.times,playerGrid:t.grid}),toMain:t=>this.toMain(t),resume:()=>this.resume(),restart:()=>this.restart(),applySettings:()=>this.applySettings(),previewTeam:t=>this.previewTeam(t),openSeason:()=>this.openSeason(),replay:t=>this.startReplay(t),photo:()=>this.startPhoto(),openCareer:()=>this.openCareer(),careerStart:t=>this.careerStart(t),careerRace:t=>this.careerRace(t),careerBuy:t=>this.careerBuy(t),careerNext:t=>this.careerNext(t),careerAbandon:()=>this.careerAbandon(),nextRound:()=>this.nextRound(),endSeason:()=>this.endSeason(),cycleCamera:()=>this.cycleCamera(),toast:t=>this.toast(t)}}initRenderer(){let t=this.save.settings.quality,e=new sc({canvas:this.canvas,antialias:t!=="low",powerPreference:"high-performance"});this.renderer=e,e.toneMapping=ha,e.toneMappingExposure=1,e.shadowMap.enabled=t!=="low",e.shadowMap.type=ds,this.camera=new qe(62,1,.25,9e3),this.post=new Ic(e),this.resize()}resize(){let t=this.save.settings.quality,e=t==="high"?2:t==="medium"?1.5:1,i=Math.min(window.devicePixelRatio||1,e)*(this.resScale||1);this.renderer.setPixelRatio(i),this.renderer.setSize(window.innerWidth,window.innerHeight,!1),this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.updateProjectionMatrix(),this.pointScale=window.innerHeight*i/(2*Math.tan(this.camera.fov*Math.PI/360))}kn(t){let e=(this.input.keys[t]||[])[0];return e?br(e):"(unbound)"}applySettings(){clearTimeout(this._saveT),this._saveT=setTimeout(()=>ze(this.save),250),this.audio.setVolume(this.save.settings.volume),Object.assign(this.input.opts,{steerSpeed:this.save.settings.steerSpeed,padDead:this.save.settings.padDead,rumble:this.save.settings.rumble!==!1}),this.input.keys=Ga(this.save.settings.keys);let t=this.hud.el.pitgame&&this.hud.el.pitgame.querySelector(".pgt kbd");t&&(t.textContent=this.kn("drs")),this.hud.keyNames={pit:this.kn("pit"),tyre:this.kn("tyre")},this.hud.setUnits(this.save.settings.units),this.hud.el.minimap.classList.toggle("hidden",!this.save.settings.minimap),this.session&&this.session.guide&&this.session.guide.setVisible(this.save.settings.line!==!1),this.hud.el.tower.classList.toggle("force-hide",!this.save.settings.tower);let e=this.hud.el.tower;e.style.visibility=this.save.settings.tower?"":"hidden";let i=`${this.save.settings.quality}|${this.resScale||1}|${window.innerWidth}x${window.innerHeight}`;i!==this._resizeKey&&(this._resizeKey=i,this.resize()),this.session&&this.session.camRig&&(this.session.camRig.shakeOn=this.save.settings.shake&&!this.save.settings.calm),this.session&&this.session.guide&&(this.session.guide.cbSafe=!!this.save.settings.cbSafe),Od.calm=!!this.save.settings.calm,this.post.gradeOn=this.save.settings.quality!=="low"&&!this.perfNoFx,document.body.classList.toggle("calm",!!this.save.settings.calm),document.body.classList.toggle("bighud",!!this.save.settings.bigHud)}async boot(){this.screens.innerHTML=this.menu.screen_loading("Warming up the garage"),await Xa();try{for(let t of Ie)this.tracks[t.id]=new lc(t),await Xa();this.buildShowroom(),this.applySettings(),this.toMain(),this.renderer.setAnimationLoop(()=>this.safeFrame())}catch(t){console.error(t),this.screens.innerHTML=`<section class="screen loading"><div class="logo">Error</div><div class="hint" style="max-width:40rem;white-space:pre-wrap">${Jp(t.stack||t)}</div></section>`}}toast(t){let e=document.getElementById("toast");document.body.classList.toggle("in-menu",this.screens.childElementCount>0),e.textContent=t,e.classList.add("show"),clearTimeout(this._toastT),this._toastT=setTimeout(()=>e.classList.remove("show"),2200)}buildShowroom(){let t=new Bi;t.background=new rt("#07090c"),t.fog=new $r("#07090c",18,60);let e=new gs(this.renderer);t.environment=e.fromScene(new oc,.04).texture,t.environmentIntensity=.9;let i=new ft(new vn(40,64),new Ht({color:1316895,roughness:.38,metalness:.55}));i.rotation.x=-Math.PI/2,t.add(i);let n=new ft(new On(3.6,3.75,96),new oe({color:16722474}));n.rotation.x=-Math.PI/2,n.position.y=.01,t.add(n);let r=new Gn(16777215,520,60,.7,1,1.4);r.position.set(-9,12,8),r.target.position.set(0,.5,0),r.castShadow=!0,r.shadow.mapSize.set(1024,1024);let a=new Gn(16730682,260,70,.8,1,1.4);a.position.set(10,6,-9);let o=new Gn(4882687,220,70,.8,1,1.4);t.add(new hs(9412800,1053466,.55)),o.position.set(-10,5,-8),t.add(r,r.target,a,o),this.showroom={scene:t,view:null,angle:0,cam:new qe(36,1,.1,200)},this.previewTeam(this.save.config.team)}previewTeam(t){if(!this.showroom)return;let e=this.showroom;e.view&&(e.scene.remove(e.view.group),e.view.dispose()),e.view=new _s(ce[t],{number:this.save.settings.driverNumber||7,isPlayer:!0,code:this.save.settings.driverCode||"YOU"},{detail:"high"}),e.view.setPose(0,0,0,0),e.view.group.traverse(i=>{i.isMesh&&(i.castShadow=!0)}),e.scene.add(e.view.group),e.view.setCompound(ni[this.save.config.compound||"medium"])}toMain(t=!1){this.session&&this.endSession(),this.state="menu",this.hud.show(!1),document.getElementById("vignette").style.display="",this.menu.config={...this.save.config,assists:{...this.save.config.assists}},this.menu.show("main"),this.previewTeam(this.save.config.team)}openSeason(){let t=this.save.season,e=this.menu.config;if(t?t.calendar||Object.assign(t,{...fr(4),...t,calendar:pc.slice(),teamPoints:t.teamPoints||{},teamOf:t.teamOf||{},results:t.results||[]}):(t=fr(4),this.save.season=t),gc(t))return this.seasonFinale();e.mode="race",e.trackId=t.calendar[Math.min(t.round,t.calendar.length-1)],e.frontWing=e.rearWing=null,this.menu.tab="race",this.menu.show("setup",{season:!0})}openCareer(){let t=this.save.career;if(this.session&&this.endSession(),this.state="menu",this.hud.show(!1),!t)return this.menu.show("career_new");if(gc(t.season))return t.seasonRecap||Cd(t),ze(this.save),this.menu.show("career_end");this.menu.show("career_hub")}careerStart(t){this.save.career=hp(t),this.menu.config.team=this.save.career.team,ze(this.save),this.openCareer()}careerBuy(t){let e=this.save.career;if(!e)return;let i=dp(e,t);i.ok?(this.audio.ui("good"),ze(this.save)):this.toast(i.reason==="budget"?"Not enough budget":"Already at maximum"),this.menu.show("career_hub")}careerNext(t){let e=this.save.career;if(!e)return this.toMain();fp(e,t),ze(this.save),this.openCareer()}careerAbandon(){this.save.career=null,ze(this.save),this.toMain()}careerRace(t){let e=this.save.career;if(!e)return;let i=e.season,n=i.calendar[i.round],r=this.tracks[n],a=this.menu.config,o=Kn(e.rules),l=o.weather==="forecast"?Na(i):o.weather,c={...a,mode:t?"qualifying":"race",trackId:n,laps:fc(e,r.length),level:e.level,fieldSize:o.fieldSize,playerGrid:Math.min(o.playerGrid,o.fieldSize),team:e.team,frontWing:null,rearWing:null,mandatoryStop:o.mandatoryStop,adaptive:o.adaptive,tyreWear:o.tyreWear,damage:o.damage,collisions:o.collisions,pitCalls:o.pitCalls,weather:l,compound:l==="light"||l==="heavy"?"wet":"medium",qualiTimes:null,seed:void 0,upgrades:{...e.upgrades},career:!0};this.startRace(c)}nextRound(){if(!this.save.season)return this.toMain();ze(this.save),this.openSeason()}seasonFinale(){let t=this.save.season;this.state="menu",this.hud.show(!1),this.menu.show("season_end",{season:t})}endSeason(){let t=this.save.season;if(t){let i=xs(t).findIndex(a=>a.name==="You")+1,n=bs(t),r=ce[this.save.config.team].short;(this.save.honours||(this.save.honours=[])).push({pos:i,points:t.points.You||0,team:r,constructorPos:n.findIndex(a=>a.team===r)+1,rounds:t.calendar.length,at:Date.now()}),this.save.honours=this.save.honours.slice(-30),this.recordStats({kind:"championship",pos:i}),this.toast(i===1?"Champion! Season complete.":`Season complete: P${i} in the championship`)}this.save.season=null,ze(this.save),this.toMain()}cycleCamera(){if(!this.session)return;let t=this.session.camRig.next();this.save.settings.camera=t,ze(this.save);let e=document.getElementById("camname");e&&(e.textContent=Qn[t]),this.toast("Camera: "+Qn[t])}startLesson(t){let e=Pc(t);if(!e)return;let i=this.menu.config,n=this.tracks[e.track],r=e.weather==="heavy"||e.weather==="light";this.startRace({...i,mode:e.mode,trackId:e.track,laps:e.laps||30,level:e.level??.3,fieldSize:e.mode==="race"&&e.fieldSize||2,playerGrid:2,tyreWear:e.tyreWear??3,compound:r?"wet":e.compound||"medium",weather:e.weather||"dry",timeOfDay:"day",mandatoryStop:!1,qualify:!1,qualiTimes:null,damage:!1,collisions:!0,lesson:e.id,assists:{...i.assists,abs:!0,stability:Math.max(1,i.assists.stability),pitAuto:!0,pitGame:!0}})}async startRace(t){this.audio.start(),this.audio.resume(),t={...t,...qd(t)},this.lastConfig=t,this.session&&this.endSession(),this.state="loading",this.screens.innerHTML=this.menu.screen_loading("Building "+Ie.find(e=>e.id===t.trackId).name),this.hud.show(!1),await Xa();try{await this.buildSession(t)}catch(e){console.error(e),this.screens.innerHTML=`<section class="screen loading"><div class="logo">Error</div><div class="hint" style="max-width:44rem;white-space:pre-wrap">${Jp(e.stack||e)}</div><button class="btn" data-act="quit">Back</button></section>`}}async buildSession(t){let e=this.tracks[t.trackId],i=new yc(e,{mode:t.mode,laps:t.laps,level:t.level,adaptive:t.adaptive,fieldSize:t.fieldSize,playerTeam:t.team,driver:{code:this.save.settings.driverCode,number:this.save.settings.driverNumber},playerGrid:Math.min(t.playerGrid,t.fieldSize),collisions:t.collisions,damage:t.damage,tyreWear:t.tyreWear,mandatoryStop:t.mandatoryStop,pitCalls:t.pitCalls,compound:t.compound,setup:{frontWing:t.frontWing,rearWing:t.rearWing,brakeBias:t.brakeBias,pressure:t.pressure},assists:{...t.assists,stability:t.assists.stability,tc:t.assists.tc,steer:t.assists.steer},seed:t.seed??Math.random()*1e6|0,qualiTimes:t.mode==="race"&&t.qualiTimes||null,upgrades:t.upgrades||null,weather:t.weather||"dry",equalCars:t.career?!1:t.equalCars!==!1,carPower:t.carPower});await Xa();let n=this.save.settings.quality,r=i.getProfile(i.player.spec,`${i.player.info.team.id}:${t.compound}`),a=new wc(e,{quality:n,profile:r});this.renderer.shadowMap.enabled=n!=="low"&&!this.perfNoFx,await Xa();let o=new Bi;o.add(a.group);let l=e.theme;o.fog=new Wr(new rt(l.fog),1.1/l.fogFar),o.background=new rt(l.fog);let c=new gs(this.renderer),h=new Bi,u=a.sky.clone();h.add(u),o.environment=c.fromScene(h,.02).texture,o.environmentIntensity=.75,c.dispose();let d=new Map,f=n==="low"?"low":"high";for(let S of i.cars){let b=new _s(S.info.team,S.info,{detail:f});b.setCompound(S.compound),o.add(b.group),d.set(S,b)}let g=[];if(t.timeOfDay!=="day"){let S=d.get(i.player);for(let b of[-.32,.32]){let T=new Gn(16773328,0,110,.34,.65,1.4);T.position.set(2.6,.3,b),T.target.position.set(40,-.5,b*1.6),S.model.add(T,T.target),g.push(T)}}let y=new Uc(o),m=new Lc;o.add(m.mesh);let p=new Rc(e,r);o.add(p.mesh),p.setVisible(this.save.settings.line!==!1);let v=this.camera,_=new Ha(v);_.setMode(this.save.settings.camera||"chase"),_.shakeOn=this.save.settings.shake&&!this.save.settings.calm,p.cbSafe=!!this.save.settings.cbSafe;let M=null;if(t.mode==="timetrial"){let S=this.save.ghosts[e.id];if(S)try{let b=i_(S.data);if(!(b.length>=12)||!Number.isFinite(S.time))throw new Error("bad ghost");i.ghostBest={time:S.time,frames:b,track:e.id}}catch{delete this.save.ghosts[e.id],ze(this.save)}M=new _s(ce[t.team],{number:0,isPlayer:!1,code:"GST"},{ghost:!0,detail:"low"}),M.group.visible=!1,o.add(M.group)}this.perf=null,this.session={cfg:{...t,seed:i.opt.seed},track:e,race:i,world:a,scene:o,views:d,effects:y,rain:m,headlights:g,camRig:_,ghostView:M,guide:p,acc:0,alpha:0,intro:4.2,introT:0,paused:!1,finishedShown:!1,radioT:0,fast:!1,player:i.player,pin:null,sunDir:a.sunDir,stopTimer:0,lastEventCar:null,seasonRound:this.save.season?this.save.season.round:null,useSeason:t.__season,prevBest:this.save.records[e.id]?this.save.records[e.id].best:1/0,rec:new Fc(i.cars.length,30,30),replayCars:Np(i.cars),school:t.lesson&&Pc(t.lesson)?new Cc(Pc(t.lesson)):null},this.hud.setTrack(e),this.session.school||this.hud.setLesson(null),this.hud.setUnits(this.save.settings.units),this.hud.show(!0),this.applySettings(),this.screens.innerHTML="",this.state="race",this.input.pressed.clear(),document.getElementById("touch")&&this.updateTouchVisibility(),this.hud.message(t.mode==="qualifying"?"Qualifying":t.mode==="timetrial"?"Time trial":`${e.name}`,"",t.mode==="qualifying"?"3 minutes \xB7 best lap sets your grid slot \xB7 all 20 cars on track":t.mode==="timetrial"?"Set your best lap \u2014 your ghost follows":`${t.laps} laps \xB7 P${i.player.info.gridPos} on the grid${t.qualiTimes?" (qualified)":""}`,4),this.hud.showKeyHint(1e4,this.input.keys),t.mode==="race"&&this.hud.radio("Welcome to "+e.name+". Lights out when you are ready \u2014 good luck.",6)}endSession(){let t=this.session;t&&(Qb(t.scene),t.rain&&t.rain.dispose(),t.rec&&(t.rec.data=null),this._replayUI&&this._replayUI.classList.add("hidden"),this._photoUI&&this._photoUI.classList.add("hidden"),this.renderer.renderLists.dispose(),this.session=null,this.audio.update({rpm:0,throttle:0,speed:0,slipVis:[0,0,0,0],kerbShake:0,gear:1},[],{pos:new k,right:new k(1,0,0),vel:new k},.016,!0))}toggleAutopilot(){let t=this.session;if(t){if(!t.pilot){let e=t.race.getProfile(t.player.spec,"pilot");t.pilot=new Mn({car:t.player,track:t.track,profile:e,level:Math.max(.6,t.cfg.level),seed:4242}),t.pilot.goTime=0}t.auto=!t.auto,t.pilot.offset=0,this.toast(t.auto?"Autopilot on (G to take over)":"You have control")}}debugUntil(t,e=300){let i=this.session;if(!i)return!1;i.pilot||this.toggleAutopilot(),i.auto=!0;let{race:n}=i,r={throttle:0,brake:0,steer:0,boost:!1,aiDriven:!0};n.phase==="grid"&&n.start();for(let a=0;a<e/fi;a++){if(n.phase==="racing"){let o=i.pilot.update(fi,n);r.throttle=o.throttle,r.brake=o.brake,r.steer=o.steer,r.boost=o.boost,r.drsPress=o.drs&&!i.player.rs.drsLatch}else r.throttle=0,r.brake=1,r.steer=0,r.drsPress=!1;if(n.step(fi,r),t())break}return i.introT=99,t()}debugSkip(t){let e=this.session;if(!e)return;e.pilot||this.toggleAutopilot(),e.auto=!0;let{race:i}=e,n={throttle:0,brake:0,steer:0,boost:!1,aiDriven:!0};i.phase==="grid"&&i.start();let r=Math.round(t/fi);for(let a=0;a<r;a++){if(i.phase==="racing"){let o=e.pilot.update(fi,i);n.throttle=o.throttle,n.brake=o.brake,n.steer=o.steer,n.boost=o.boost,n.drsPress=o.drs&&!e.player.rs.drsLatch}else n.throttle=0,n.brake=1,n.steer=0,n.drsPress=!1;i.step(fi,n)}i.events.length=0,e.introT=99}pause(){let t=this.session;if(!t||this.state!=="race")return;this.state="paused",t.paused=!0,this.menu.show("pause");let e=document.getElementById("camname");e&&(e.textContent=Qn[t.camRig.mode])}resume(){this.session&&(this.screens.innerHTML="",this.hud.show(!0),this.state="race",this.input.pressed.clear(),this.session.paused=!1,this.lastT=performance.now())}restart(){this.lastConfig&&this.startRace(this.lastConfig)}setupTouch(){let t=document.getElementById("touch");if(!t)return;let e=(r,a)=>this.input.touch[r]=a,i=this.input,n=(r,a)=>{let o=i.keys[r]&&i.keys[r][0];o&&(i.pressed.add(o),a&&i.down.add(o))};t.querySelectorAll("button").forEach(r=>{let a=r.dataset.k,o=r.dataset.a;if(o){r.addEventListener("pointerdown",h=>{h.preventDefault(),i.touchMode=!0,n(o,!!r.dataset.hold)});let c=()=>{if(r.dataset.hold){let h=i.keys[o]&&i.keys[o][0];h&&i.down.delete(h)}};r.addEventListener("pointerup",c),r.addEventListener("pointercancel",c),r.addEventListener("pointerleave",c);return}r.addEventListener("pointerdown",c=>{c.preventDefault(),i.touchMode=!0,e(a,!0);let h=this.session&&this.session.race;h&&h.phase==="grid"&&a==="throttle"&&n("drs")});let l=()=>e(a,!1);r.addEventListener("pointerup",l),r.addEventListener("pointercancel",l),r.addEventListener("pointerleave",l)}),window.addEventListener("touchstart",()=>{this.input.touchMode=!0,this.updateTouchVisibility()},{passive:!0,once:!0})}updateTouchVisibility(){let t=document.getElementById("touch");t&&t.classList.toggle("show",this.input.touchMode&&this.state==="race")}watchPerf(t){if(this.save.settings.autoQuality===!1||t>.5)return;let e=this.perf||(this.perf={acc:0,n:0,steps:this.perfSteps||0,cool:this.perfSteps?0:1});if(e.acc+=t,e.n++,e.acc<4)return;let i=e.n/e.acc;if(e.acc=0,e.n=0,e.cool>0){e.cool--;return}i>=40||e.steps>=4||(e.steps++,this.perfSteps=e.steps,e.cool=1,e.steps<=3?this.resScale=[1,.85,.7,.55][e.steps]:(this.session&&this.session.world&&(this.session.world.sun.castShadow=!1),this.renderer.shadowMap.enabled=!1,this.perfNoFx=!0,this.post.gradeOn=!1),this.resize(),this.toast(e.steps<=3?`Frame rate was ${i.toFixed(0)} fps: lowered the render resolution (Settings > Automatic quality)`:"Frame rate is still low: shadows and motion blur turned off"))}safeFrame(){try{this.frame(),this.frameErrors=0}catch(t){this.frameErrors=(this.frameErrors||0)+1,console.error(t),this.frameErrors===5&&this.fatal(t)}}fatal(t){this.state="menu",this.hud.show(!1),this.screens.innerHTML=`<section class="screen loading"><div class="logo">Apex <span>GP</span></div><div class="hint" style="max-width:40rem;text-align:center;line-height:1.5">Something went wrong in the game loop and the session was stopped. Your settings and records are safe.<br><small style="opacity:.6">${String(t&&t.message||t).replace(/[<>&]/g,"")}</small></div><button class="btn primary" data-act="quit">Back to menu</button></section>`}frame(){let t=this.input.touchMode&&this.state==="race";if(t!==this._touchShown){this._touchShown=t;let a=document.getElementById("touch");a&&a.classList.toggle("show",t)}let e=performance.now(),i=Math.min(.05,(e-this.lastT)/1e3);this.state==="race"&&!(this.session&&this.session.skipToResults)&&this.watchPerf((e-this.lastT)/1e3),this.lastT=e;let n=this.renderer;if(this.state==="menu"||this.state==="loading"||this.state==="paused"&&!this.session){this.renderShowroom(i);return}let r=this.session;if(r){if(this.state==="paused"){if(this.input.poll(i,0,!0).pause)return this.resume();this.audio.update(r.player,[],this.listener(),i,!0),this.post.render(r.scene,this.camera,0,this.bloomFor(r));return}if(this.state==="replay"){this.runReplay(r,i);return}if(this.state==="photo"){this.runPhoto(r,i);return}this.state==="race"?this.runSession(r,i):this.state==="results"&&this.audio.update(r.player,[],this.listener(),i,!0),this.post.render(r.scene,this.camera,this.speedBlur(r),this.bloomFor(r))}}bloomFor(t){let e=this.save.settings;return e.bloom===!1||this.perfNoFx||e.quality==="low"?0:Z(.04+.8*(t.nightK||0)+.2*(t.duskK||0),0,.9)}speedBlur(t){let e=this.save.settings;if(!e.blur||this.perfNoFx||e.calm||e.quality==="low"||t.camRig.mode==="tv"||t.paused)return 0;let i=t.player,n=Z((i.speed*3.6-140)/200,0,1),r=(Math.exp(3*n)-1)/(Math.exp(3)-1);return i.drsPos>.5&&(r+=.1),i.boosting&&(r+=.08),Z(r,0,1)*(t.camRig.mode==="cockpit"?1.15:1)}renderShowroom(t){let e=this.showroom;if(!e)return;this.renderer.toneMappingExposure=1,e.angle+=t*.28;let i=e.cam;i.aspect=window.innerWidth/window.innerHeight;let n=i.aspect>1.2;i.setViewOffset&&n?i.setViewOffset(window.innerWidth,window.innerHeight,-window.innerWidth*.17,0,window.innerWidth,window.innerHeight):i.clearViewOffset(),i.updateProjectionMatrix();let r=11.5;i.position.set(Math.cos(e.angle)*r,2.6+Math.sin(e.angle*.7)*.6,Math.sin(e.angle)*r),i.lookAt(0,.55,0),this.renderer.render(e.scene,i)}listener(){let t=this.camera,e=this._listener||(this._listener={pos:t.position,right:new k,vel:new k});return e.pos=t.position,e.right.set(1,0,0).applyQuaternion(t.quaternion),e}runSession(t,e){let{race:i,player:n,views:r,camRig:a,effects:o,world:l}=t,c=this.input,h=c.poll(e,n.speed);if(h.pause)return this.pause();h.camera&&!t.fin&&(this.cycleCamera(),t.introCancelled=!0,a.init=!1),h.mute&&(this.audio.setEnabled(!this.audio.enabled),this.toast(this.audio.enabled?"Sound on":"Sound off")),h.map&&this.hud.el.minimap.classList.toggle("hidden"),h.tele&&this.toast("Live telemetry "+(this.hud.toggleTele()?"on":"off")),h.line&&(this.save.settings.line=this.save.settings.line===!1,t.guide.setVisible(this.save.settings.line),ze(this.save),this.toast("Racing line guide "+(this.save.settings.line?"on":"off"))),a.lookBack=h.lookBack,this.input.rumble(n,a.impact,e),t.fin&&(t.fin.t+=e,((h.confirm||t.finConfirm)&&t.fin.t>1.5||t.fin.t>40)&&(t.skipToResults||(t.skipToResults=!0,this.hud.hideFinish(),this.hud.message("Finishing the classification\u2026","","Waiting for the rest of the field",3)))),h.autoToggle&&this.toggleAutopilot();let u=()=>t.auto&&(i.phase==="racing"||t.fin&&i.phase==="finished");u()&&(h.aiDriven=!0),i.phase==="grid"&&(t.introT+=e,(t.introT>t.intro||h.drsPress||c.isDown("pit"))&&(i.start(),a.init=!1)),h.reset&&(i.phase==="racing"||i.phase==="countdown")&&(i.resetToTrack(n),i.phase==="racing"&&this.hud.message("Car recovered","","Back on the racing line",2));let d=!!t.skipToResults&&i.phase!=="finished",f=0;t.acc+=d?fi*300:e;let g={gearUp:h.gearUp,gearDown:h.gearDown,drsPress:h.drsPress,pitToggle:h.pitToggle,tyreCycle:h.tyreCycle,ersCycle:h.ersCycle,fuelCycle:h.fuelCycle,bbDelta:h.bbDelta},y={throttle:h.throttle,brake:h.brake,steer:h.steer,boost:h.boost,aiDriven:!!h.aiDriven,...g},m=d?300:14;for(;t.acc>=fi&&f<m;){if(u()){let A=t.pilot.update(fi,i);y.throttle=A.throttle,y.brake=A.brake,y.steer=A.steer,y.boost=A.boost,y.aiDriven=!0,A.drs&&!n.rs.drsLatch&&(y.drsPress=!0),n.rs.pilot&&n.rs.pilot.pitState!=="none"&&(t.pilot.pitState="none"),t.pilot.wantsPit=n.rs.pitRequested}i.step(fi,y),y.gearUp=y.gearDown=y.drsPress=y.pitToggle=y.tyreCycle=y.ersCycle=y.fuelCycle=!1,y.bbDelta=0,t.acc-=fi,f++}t.acc>fi*14&&(t.acc=0),t.alpha=t.acc/fi,d&&i.phase!=="finished"&&(t.acc=0),this.processEvents(t),!d&&i.phase!=="grid"&&i.phase!=="countdown"&&t.rec.tick(e,i.cars,i,t.track),this.updateSafetyCarView(t,e);let p=this.camera.position,v=null;for(let A of i.cars){let P=r.get(A);P.update(A,t.alpha,e);let O=A.x-p.x,B=-A.y-p.z,W=O*O+B*B<25600;P.group.visible=W||A===n||O*O+B*B<1200*1200,P.setLod(!W&&A!==n),P.setShadow(W&&this.save.settings.quality!=="low"),A!==n&&W&&o.car(A,e)}o.car(n,e),t.crews=t.crews||new Map;for(let A of i.cars){let P=A.rs.service,O=t.crews.get(A);if(P&&!O?(O=new Ac(A.info.team),t.scene.add(O.group),t.crews.set(A,O)):!P&&O&&(t.scene.remove(O.group),O.dispose(),t.crews.delete(A),O=null),O){let B=r.get(A).group;O.group.position.copy(B.position),O.group.rotation.y=B.rotation.y,O.update(performance.now()/1e3,P.t/P.dur)}}if(o.update(e,this.pointScale),t.guide.setVisible(this.save.settings.line!==!1&&i.phase!=="grid"&&!n.rs.inPitLane&&!t.fin),t.guide.update(n),t.ghostView){let A=i.phase==="racing"?i.ghostPose(i.time-n.rs.lapStart):null;if(A&&n.rs.laps>=1){t.ghostView.group.visible=!0,t.ghostView.setPose(A.x,A.y,A.theta,0,A.steer);let P=t.track.project(A.x,A.y,-1,this._ghostProj||(this._ghostProj={}));t.ghostView.group.position.y=t.track.at(t.track.z,P.s),i.ghostPos=A}else t.ghostView.group.visible=!1,i.ghostPos=null}if(i.phase==="grid"&&t.introT<t.intro&&a.mode==="chase"&&!t.introCancelled){let A=-.9+t.introT*.5,P=r.get(n).group.position;this.camera.position.set(P.x+Math.cos(A)*9+0,P.y+2.4,P.z+Math.sin(A)*9),this.camera.lookAt(P.x,P.y+.6,P.z),this.camera.fov=48,this.camera.updateProjectionMatrix()}else a.update(e,r.get(n),n,t.track),a.shakeOn||(a.impact=0);let M=i.totalLaps*t.track.length,S=i.opt.mode==="race"&&t.cfg.timeOfDay!=="day"?Z((i.sorted[0]?i.sorted[0].rs.maxDist:0)/M,0,1):0,b=t.cfg.timeOfDay==="night",T=b?.9:.88*Math.pow(S,1.1),x=b?1:.55*t_((S-.72)/.28);t.nightK=x,t.duskK=T;let w=l.setAtmosphere({dusk:T,wet:i.wet,rain:i.rain,night:x});t.scene.fog.color.copy(w.fog),t.scene.fog.density=1.1/(t.track.theme.fogFar*w.fogMul),t.scene.background.copy(w.fog),t.scene.environmentIntensity=.75*w.envMul,this.renderer.toneMappingExposure=w.exposure;for(let A of t.headlights)A.intensity=x*120;o.wet=i.wet,o.setLight(Z(1-.5*T-.4*x-.18*i.rain,.3,1)),t.rain.update(e,this.camera.position,i.rain),l.focusShadow(r.get(n).group.position),l.update(e,performance.now()/1e3),l.setStartLights(i.phase==="countdown"?i.lights:0,i.phase==="racing"&&i.time-i.t0<1.5),this.hud.update(i,n,h,performance.now()),this.radioTick(t,e),this.schoolTick(t,e);let C=t._others||(t._others=[]),D=0;for(let A of i.cars){if(A===n)continue;let P=r.get(A).group.position,O=C[D]||(C[D]={car:null,wx:0,wz:0,vx:0,vz:0});O.car=A,O.wx=P.x,O.wz=P.z,O.vx=A.u*Math.cos(A.theta),O.vz=-A.u*Math.sin(A.theta),D++}C.length=D;let I=this.listener(),L=r.get(n).group.position;I.vel.set(n.u*Math.cos(n.theta),0,-n.u*Math.sin(n.theta)),this.audio.weather.rain=i.rain,this.audio.weather.wet=i.wet,this.audio.update(n,C,I,e,!1),i.phase==="finished"&&!t.finishedShown&&(!t.fin||t.skipToResults)&&(t.finishedShown=!0,setTimeout(()=>{this.session===t&&this.showResults()},i.opt.mode==="timetrial"?0:600))}processEvents(t){let{race:e,player:i,effects:n,camRig:r}=t,a=this.hud;for(let o of e.events)switch(t.school&&t.school.onEvent(o,i)&&this.lessonPassed(t),o.type){case"light":a.setLights(o.n),this.audio.light(o.n);break;case"lightsOut":a.setLights(0,!0),this.audio.go(),e.opt.mode==="race"&&a.message("Go go go!","good","",1.6);break;case"lap":if(o.car===i){let l=e.fastest.car===i&&e.fastest.time===o.time,c=i.rs.best===o.time&&o.valid;e.opt.mode==="timetrial"||o.lap>=2||e.totalLaps===1?a.message(`Lap ${o.lap} \xB7 ${be(o.time)}`,l?"purple":c?"good":o.valid?"":"bad",o.valid?l?"Fastest lap of the race":c?"Personal best":"":"Lap invalidated (track limits)",3.5):a.message(`Lap ${o.lap} \xB7 ${be(o.time)}`,"","Standing-start lap, not counted for records",3)}break;case"fastest":o.car!==i&&e.opt.mode==="race"&&a.message(`Fastest lap \xB7 ${o.car.info.code}`,"purple",be(o.time),2.5);break;case"penalty":o.car===i&&(a.message(`+${o.secs}s penalty`,"bad",o.reason,4),this.audio.ui("bad"),a.radio(`Penalty: ${o.reason}. ${o.secs} seconds added to your race time.`,6));break;case"pitStopStart":o.car===i&&o.game&&!t._pgTip?(t._pgTip=!0,a.radio(`Pit stop: press ${this.kn("drs")} as each marker enters the green. Perfect timing on all four wheels is a 2.5 second stop.`,7)):o.car===i&&a.radio("Box, box \u2014 hold position, tyres going on.",3);break;case"pitCall":if(o.car===i){let l=ni[o.advice.compound].name.toUpperCase(),c={wet:"The track is wet",dry:"The track is dry",rules:"We need the mandatory stop",wear:"The tyres are going"}[o.advice.reason]||"Strategy";a.radio(o.auto?`${c}. Box, box: ${l} tyres. (${this.kn("pit")} cancels)`:`${c}. Box this lap for ${l}: press ${this.kn("pit")} (${this.kn("tyre")} changes the tyre).`,7),this.audio.ui("good")}break;case"mode":if(o.car===i){let l=o.what==="ers"?`ERS mode: ${["Harvest (recharge)","Balanced","Attack (deploy more)"][o.value]}`:o.what==="fuel"?`Fuel mix: ${["Lean (save fuel)","Standard","Rich (more power)"][o.value]}`:`Brake bias: ${Math.round(o.value*100)}% front`;a.message(l,"",o.what==="bias"?"Higher is more stable, lower turns in better":"",1.6),this.audio.ui("click")}break;case"damageBox":o.car===i&&(a.message("Box for repairs","bad",`Heavy damage: pit request set (${this.kn("pit")} to cancel)`,4),a.radio("Box, box. You have heavy damage: we need to repair the car. Pit this lap.",6),this.audio.ui("bad"));break;case"pitWheel":o.car===i&&this.audio.ui(o.res==="perfect"?"good":o.res==="good"?"click":"bad");break;case"pitGameDone":o.car===i&&a.message(o.misses?"Cross-threaded wheel nut":o.perfects===4?"Perfect pit stop":"Clean pit stop",o.misses?"bad":"",`${o.dur.toFixed(1)} seconds`+(o.repair>.05?` + ${o.repair.toFixed(1)} s repairs`:""),3);break;case"scDeploy":a.flag("SAFETY CAR","#ffc400",6,"sc"),a.radio("Safety car, safety car. Stay in position behind the pace car. No overtaking.",7),this.audio.ui("bad"),this.ensureSafetyCar(t);break;case"scEnding":a.radio("Safety car in this lap. Get ready to go green.",5),a.flag("SC IN THIS LAP","#ffc400",4,"sc");break;case"scEnd":a.flag("GREEN FLAG","#31d17a",4,"green"),a.radio("Green, green, green. We are racing again.",4);break;case"yellow":(!t._yellowT||performance.now()-t._yellowT>12e3)&&(t._yellowT=performance.now(),a.flag("YELLOW FLAG","#ffd400",3.5,"yellow"));break;case"warning":o.car===i&&(a.message(`Track limits \xB7 warning ${o.n}/3`,"bad","All four wheels beyond the white line",3),this.audio.ui("bad"));break;case"lapInvalid":o.car===i&&a.message("Lap invalidated","bad","Track limits",2.5);break;case"sector":o.kind==="purple"&&a.message("Purple sector","purple","",1.4);break;case"pitRequest":o.car===i&&a.message(o.on?"Box this lap":"Pit request cancelled",o.on?"":"bad",o.on?`Press ${this.kn("tyre")} to pick the next compound`:"",2.5);break;case"pitEntry":o.car===i&&a.message("Pit lane","",this.save.settings.units==="mph"?"50 mph limit":"80 km/h limit",2.5);break;case"pitStopEnd":o.car===i&&(a.message("Pit stop complete","good",`Fitted ${ni[o.compound].name} tyres`,3),this.audio.ui("good"));break;case"impact":{let l=this.camera.position,c=Math.hypot(o.x-l.x,-o.y-l.z);c<200&&(n.burst(o.x,.5,-o.y,Math.min(60,10+o.speed*3),Math.min(18,4+o.speed)),c<90&&this.audio.thud(Z(o.speed/20,.15,1)*(1-c/100))),(o.car===i||o.other===i)&&(r.impact=Math.max(r.impact,Z(o.speed/25,.1,1)),e.opt.damage&&o.speed>6&&a.message("Contact","bad",o.wall?"Barrier impact":"Collision with "+(o.car===i?o.other:o.car).info.code,2));break}case"chequered":a.flag("Chequered flag","#fff",4,"chequered");break;case"finish":o.car===i&&e.opt.mode==="race"?this.startFinishScene(t,o):o.car===i&&e.isQuali&&this.startQualiEnd(t);break;case"ghost":this.saveGhost(t);break;case"recover":o.car===i&&(this.input.throttle=0);break}e.events.length=0}startFinishScene(t,e){let{race:i,player:n,camRig:r}=t;if(t.fin)return;t.fin={t:0};let a=n.rs,o=i.cars.find(c=>c.rs.finished&&c!==n&&c.rs.pos===1)||null,l=o&&a.pos>1?a.finishTime-o.rs.finishTime:null;if(!t.pilot){let c=i.getProfile(n.spec,"pilot");t.pilot=new Mn({car:n,track:t.track,profile:c,level:.6,seed:4242}),t.pilot.goTime=0}t.pilot.paceAdapt=.32,t.pilot.offset=0,t.auto=!0,r.setMode("finish"),this.hud.showFinish({pos:a.pos,total:i.cars.length,team:n.info.team,name:n.info.name,time:e.time,gap:l,best:a.best,penalty:a.penalty}),this.audio.cheer(a.pos<=3?1:.5),a.pos<=3?this.audio.fanfare():this.audio.ui("good")}startPhoto(){let t=this.session;if(!t)return;this.state="photo",this.screens.innerHTML="",this.hud.show(!1);let e=this.camera,i=new Ci().setFromQuaternion(e.quaternion,"YXZ");if(t.photo={yaw:i.y,pitch:i.x,pos:e.position.clone(),speed:6,fov:e.fov,shot:!1,flash:0},t.guide.setVisible(!1),this.photoUI().classList.remove("hidden"),!this._photoBound){this._photoBound=!0;let r=!1;this.canvas.addEventListener("pointerdown",a=>{this.state==="photo"&&(r=!0,this.canvas.setPointerCapture(a.pointerId))}),this.canvas.addEventListener("pointerup",()=>r=!1),this.canvas.addEventListener("pointermove",a=>{let o=this.session&&this.session.photo;!r||!o||this.state!=="photo"||(o.yaw-=a.movementX*.004,o.pitch=Math.max(-1.5,Math.min(1.5,o.pitch-a.movementY*.004)))}),this.canvas.addEventListener("wheel",a=>{let o=this.session&&this.session.photo;!o||this.state!=="photo"||(o.fov=Math.max(12,Math.min(95,o.fov+a.deltaY*.03)),a.preventDefault())},{passive:!1})}}photoUI(){if(this._photoUI)return this._photoUI;let t=document.createElement("div");return t.id="photo",t.className="hidden",t.innerHTML='<div class="pbar"><b>PHOTO MODE</b><span>WASD move \xB7 Q / E down / up \xB7 drag to look \xB7 wheel zoom \xB7 Shift fast</span><button data-p="shot">Capture (Space)</button><button data-p="exit" class="exit">Done (Esc)</button></div><div class="pflash"></div>',document.body.appendChild(t),t.addEventListener("click",e=>{let i=e.target.closest("[data-p]");i&&(i.dataset.p==="shot"?this.session.photo.shot=!0:this.endPhoto())}),this._photoUI=t,t}endPhoto(){let t=this.session;if(this._photoUI&&this._photoUI.classList.add("hidden"),!t)return;t.photo=null,t.guide.setVisible(this.save.settings.line!==!1),this.camera.fov=t.camRig.fov,this.camera.updateProjectionMatrix(),this.state="paused",this.menu.show("pause");let e=document.getElementById("camname");e&&(e.textContent=Qn[t.camRig.mode])}runPhoto(t,e){let i=t.photo;if(!i)return;let n=this.input,r=n.down.has("ShiftLeft")||n.down.has("ShiftRight"),a=i.speed*(r?4:1)*e,o=new k(-Math.sin(i.yaw)*Math.cos(i.pitch),Math.sin(i.pitch),-Math.cos(i.yaw)*Math.cos(i.pitch)),l=new k(Math.cos(i.yaw),0,-Math.sin(i.yaw)),c=d=>n.down.has(d)?1:0;if(i.pos.addScaledVector(o,(c("KeyW")-c("KeyS"))*a).addScaledVector(l,(c("KeyD")-c("KeyA"))*a),i.pos.y+=(c("KeyE")-c("KeyQ"))*a,n.pressed.has("Escape")||n.pressed.has("KeyP"))return n.pressed.clear(),this.endPhoto();n.pressed.has("Space")&&(i.shot=!0),n.pressed.clear();let h=this.camera;h.position.copy(i.pos),h.rotation.set(i.pitch,i.yaw,0,"YXZ"),Math.abs(h.fov-i.fov)>.01&&(h.fov=i.fov,h.updateProjectionMatrix()),t.world.focusShadow(t.views.get(t.player).group.position),t.world.update(e,performance.now()/1e3),this.audio.update(t.player,[],this.listener(),e,!0),this.post.render(t.scene,h,0,this.bloomFor(t));let u=this._photoUI.querySelector(".pflash");i.shot&&(i.shot=!1,this.canvas.toBlob(d=>{if(!d)return;let f=document.createElement("a");f.href=URL.createObjectURL(d),f.download=`apex-grand-prix-${t.track.id}-${Date.now()}.png`,document.body.appendChild(f),f.click(),setTimeout(()=>{URL.revokeObjectURL(f.href),f.remove()},1e3)},"image/png"),u.style.opacity="0.85",this.audio.ui("click"),i.flash=.25),i.flash>0&&(i.flash-=e,i.flash<=0&&(u.style.opacity="0"))}startReplay(t){let e=this.session;if(!e||!e.rec||e.rec.count<20)return this.toast("Nothing to replay yet");this.replayFrom=t,this.state="replay",this.screens.innerHTML="",this.hud.show(!1);let i=new Ha(this.camera);i.shakeOn=!1,i.setMode("tv"),e.replay={t:0,playing:!0,speed:1,rig:i,modeIdx:0,follow:e.race.cars.indexOf(e.player),endHold:0},e.guide.setVisible(!1),this.replayUI().classList.remove("hidden"),this.updateReplayUI()}replayUI(){if(this._replayUI)return this._replayUI;let t=document.createElement("div");return t.id="replay",t.className="hidden",t.innerHTML=`<div class="rbar"><b>REPLAY</b><span id="r-time">0:00</span>
      <input id="r-scrub" type="range" min="0" max="1000" value="0">
      <button data-r="play" title="Play / pause (Space)">\u23EF</button>
      <button data-r="slow" title="Slow motion (S)">\xBC\xD7</button><button data-r="normal" title="Normal speed (F)">1\xD7</button>
      <button data-r="cam" title="Camera (C)">Camera: <span id="r-cam"></span></button>
      <button data-r="car" title="Follow another car (N)">Car: <span id="r-car"></span></button>
      <button data-r="exit" class="exit" title="Back (Esc)">Done</button></div>`,document.body.appendChild(t),t.addEventListener("click",e=>{let i=e.target.closest("[data-r]");i&&this.replayAction(i.dataset.r)}),t.querySelector("#r-scrub").addEventListener("input",e=>{let i=this.session;!i||!i.replay||(i.replay.t=+e.target.value/1e3*i.rec.duration,i.replay.playing=!1)}),this._replayUI=t,t}replayAction(t){let e=this.session;if(!e||!e.replay)return;let i=e.replay;if(t==="play")i.t>=e.rec.duration-.05?(i.t=0,i.playing=!0):i.playing=!i.playing;else if(t==="slow")i.speed=.25;else if(t==="normal")i.speed=1;else if(t==="cam"){let n=["tv","chase","close","heli","cockpit","tcam"];i.modeIdx=(i.modeIdx+1)%n.length,i.rig.setMode(n[i.modeIdx])}else if(t==="car"){let n=[...e.race.sorted],r=n.indexOf(e.race.cars[i.follow]);i.follow=e.race.cars.indexOf(n[(r+1)%n.length]),i.rig.init=!1}else if(t==="exit")return this.endReplay();this.updateReplayUI()}updateReplayUI(){let t=this.session,e=this._replayUI;if(!t||!t.replay||!e)return;let i=t.replay;e.querySelector("#r-cam").textContent=Qn[i.rig.mode],e.querySelector("#r-car").textContent=t.race.cars[i.follow].info.code,e.querySelector("#r-time").textContent=`-${Math.max(0,t.rec.duration-i.t).toFixed(1)} s`;let n=e.querySelector("#r-scrub");document.activeElement!==n&&(n.value=Math.round(i.t/Math.max(.01,t.rec.duration)*1e3))}endReplay(){let t=this.session;if(this._replayUI&&this._replayUI.classList.add("hidden"),!!t){t.replay=null,t.guide.setVisible(this.save.settings.line!==!1),t.camRig.init=!1;for(let e of t.views.values())e.group.visible=!0;if(t.scView&&(t.scView.group.visible=t.race.sc.state!=="none"),this.replayFrom==="results")this.state="results",this.menu.show("results",this.menu.lastData);else{this.state="paused",this.menu.show("pause");let e=document.getElementById("camname");e&&(e.textContent=Qn[t.camRig.mode])}}}runReplay(t,e){let i=t.replay;if(!i)return;let n=t.rec,r=this.input.pressed.has("Enter"),a=this.input.poll(e,0,!0);if(a.pause||r)return this.endReplay();a.camera&&this.replayAction("cam"),i.playing&&(i.t+=e*i.speed,i.t>=n.duration&&(i.t=n.duration,i.endHold+=e,i.endHold>1.5&&(i.playing=!1,i.endHold=0))),n.sample(i.t,t.replayCars);let o=t.race.cars;for(let c=0;c<o.length;c++){let h=t.views.get(o[c]);h.group.visible=!0,h.update(t.replayCars[c],1,e)}if(t.scView){let c=n.scPose;if(t.scView.group.visible=!!c,c){let h=t._scPr||(t._scPr={i:0,t:0,s:0,d:0,dist:0});t.track.project(c.x,c.y,t._scHint??-1,h),t._scHint=h.i,t.scView.setPose(c.x,c.y,c.theta,t.track.z[h.i])}}let l=t.replayCars[i.follow];i.rig.update(e,t.views.get(o[i.follow]),l,t.track),t.world.focusShadow(t.views.get(o[i.follow]).group.position),t.world.update(e,performance.now()/1e3),t.effects.update(e,this.pointScale),t.rain.update(e,this.camera.position,t.race.rain),this.audio.update(t.player,[],this.listener(),e,!0),this.updateReplayUI(),this.post.render(t.scene,this.camera,0,this.bloomFor(t))}ensureSafetyCar(t){if(t.scView)return;let e={id:"pace",name:"Safety car",short:"SC",color:"#f2c400",accent:"#111111",livery:"stripe",rating:.5},i=new _s(e,{number:0,isPlayer:!1,code:"SC"},{detail:"low"}),n=new ft(new Me(.3,.12,.9),new oe({color:16747008}));n.position.set(-.3,1.15,0),i.model.add(n),i.bar=n,i.group.visible=!1,t.scene.add(i.group),t.scView=i}updateSafetyCarView(t,e){let i=t.race.sc,n=t.scView;if(!n)return;let r=i.state!=="none";if(n.group.visible=r,!r)return;let o=t.track.pointAt(i.s,0);n.setPose(o.x,o.y,o.heading,o.h),t.scT=(t.scT||0)+e,n.bar.material.color.setHex(Math.floor(t.scT*5)%2?16747008:4465152)}startQualiEnd(t){let{race:e,player:i,camRig:n}=t;if(t.fin)return;if(t.fin={t:0},!t.pilot){let a=e.getProfile(i.spec,"pilot");t.pilot=new Mn({car:i,track:t.track,profile:a,level:.6,seed:4242}),t.pilot.goTime=0}t.pilot.paceAdapt=.32,t.pilot.offset=0,t.auto=!0,n.setMode("finish");let r=i.rs.best;this.hud.message("Qualifying complete","",Number.isFinite(r)?`Best lap ${be(r)} \xB7 P${i.rs.pos}`:"No timed lap set",6),this.audio.ui("good")}saveGhost(t){let e=t.race.ghostBest;if(!e||t.cfg.lesson)return;this.save.ghosts[t.track.id]={time:e.time,data:e_(e.frames)};let i=this.save.records[t.track.id];(!i||e.time<i.best)&&(this.save.records[t.track.id]={best:e.time},this.toast("New track record: "+be(e.time))),ze(this.save)}schoolTick(t,e){if(!t.school)return;let i=t.school,n=i.update(e,t.player,t.race),r=n||i.complete;return this.hud.setLesson(i.lesson,i.done,i.ctx,i.complete),!t._schoolTip&&t.race.phase==="racing"&&(t._schoolTip=!0,this.hud.radio(i.lesson.tip,9)),n&&this.lessonPassed(t),r}lessonPassed(t){let e=t.school.lesson.id,i=!this.save.school[e];this.save.school[e]=!0,ze(this.save),this.hud.message("Lesson complete","good",t.school.lesson.title+(i?"":" (again)"),4),this.audio.ui("good")}radioTick(t,e){if(t.radioT+=e,t.radioT<8||t.race.phase!=="racing"||t.race.opt.mode!=="race")return;let i=t.player,n=i.rs;t.radioT=0;let r=i.tyreSummary(),a=t.race.totalLaps-n.laps,o=t.race,l=o.forecast();l&&l.rainIn<70&&!t._rainWarn?(t._rainWarn=!0,this.hud.radio(`Rain is coming, about ${Math.round(l.rainIn/10)*10} seconds away. Think about wet tyres (${this.kn("pit")} to box, ${this.kn("tyre")} to choose Wet).`,7)):o.wet>.35&&!i.compound.wetTyre&&t.track.pit&&!t._wetCalled?(t._wetCalled=!0,this.hud.radio(`The track is wet. Box for wet tyres: press ${this.kn("pit")}, then ${this.kn("tyre")} to pick Wet.`,7)):o.wet<.14&&o.rain<.05&&i.compound.wetTyre&&!t._dryCalled&&n.laps>1?(t._dryCalled=!0,this.hud.radio("The track is drying. Box for slicks when you are ready.",6)):o.wet>.35&&(t._dryCalled=!1);let c=!1;r.wear>.7&&!n.pitRequested&&n.stops===0&&a>1&&t.track.pit&&!t._wearCalled&&(t._wearCalled=!0,c=!0,this.hud.radio(`Tyres are going off. Press ${this.kn("pit")} when you want to box.`,6)),i.drsAllowed&&!t._drsCalled&&!c?(t._drsCalled=!0,c=!0,this.hud.radio(`DRS enabled. Press ${this.kn("drs")} on the straight.`,4)):i.drsAllowed||(t._drsCalled=!1),i.behind&&(i.behind.gapAhead??9)<.8&&!t._behindCalled&&!c?(t._behindCalled=!0,c=!0,this.hud.radio(`${i.behind.info.code} is right behind, ${i.behind.gapAhead.toFixed(1)} seconds. Defend.`,4)):(!i.behind||(i.behind.gapAhead??9)>2)&&(t._behindCalled=!1);let h=Math.max(i.brakeTemp[0],i.brakeTemp[1],i.brakeTemp[2],i.brakeTemp[3]);h>1020&&!t._brakeCalled?(t._brakeCalled=!0,this.hud.radio("Brake temperatures are very high and the pedal will fade. Lift and coast earlier to let them cool.",6)):h<800&&(t._brakeCalled=!1),(i.damageFront||0)>.3&&!t._dmgCalled&&t.track.pit&&(t._dmgCalled=!0,this.hud.radio("You have front wing damage. Consider boxing for a new nose.",5))}recordStats(t){let e=Gp(this.save,t);ze(this.save),e.forEach((i,n)=>{let r=ts.find(a=>a.id===i);r&&setTimeout(()=>this.toast(`Achievement unlocked: ${r.name}`),700+n*2200)}),e.length&&this.audio.fanfare()}showResults(){let t=this.session;if(!t||this.state==="menu")return;let{race:e,player:i,track:n}=t;this.state="results",this.hud.show(!1),document.getElementById("touch")&&this.updateTouchVisibility();let r=n.name;if(e.opt.mode==="timetrial"){let d=this.save.records[n.id],f=i.rs.best,g=!1;!t.cfg.lesson&&f<1/0&&f<t.prevBest&&(g=!0),!t.cfg.lesson&&f<1/0&&(!d||f<d.best)&&(this.save.records[n.id]={best:f}),ze(this.save),this.menu.show("timetrial",{player:i,race:e,trackName:r,best:f,newBest:g});return}if(e.isQuali){let d=e.qualifying(),f=d.list.find(g=>g.car===i);if(f&&Number.isFinite(f.best)){let g=this.save.records[n.id];(!g||f.best<g.best)&&(this.save.records[n.id]={best:f.best}),ze(this.save)}t.qualiRecorded||(t.qualiRecorded=!0,this.recordStats({kind:"quali",pos:f?f.pos:99,km:Math.max(0,i.rs.maxDist)/1e3})),this.menu.show("quali",{q:d,player:i,trackName:r,cfg:t.cfg});return}let a=e.classification(),o=t.cfg,l=a.find(d=>d.car===i);if(l&&l.best<1/0&&!o.lesson){let d=this.save.records[n.id];(!d||l.best<d.best)&&(this.save.records[n.id]={best:l.best})}let c=null,h=t.cfg;this.save.season&&this.save.season.calendar&&!h.career&&!h.lesson&&(t.seasonRecorded||t.useSeason&&this.save.season.calendar[this.save.season.round]===n.id)&&(c=this.save.season,t.seasonRecorded||(t.seasonRecorded=!0,Ad(c,a)));let u=null;if(h.career&&this.save.career&&!t.careerRecorded){t.careerRecorded=!0;let d=this.save.career,f=Ad(d.season,a);if(u=up(d,f,a),u.budget=d.budget,gc(d.season)){let g=Cd(d);this.recordStats({kind:"career",pos:g.driverPos})}}if(!t.statsRecorded&&!h.lesson){t.statsRecorded=!0;let d=i.rs;this.recordStats({kind:"race",pos:l?l.pos:99,grid:d.gridPos||i.info.gridPos,cars:a.length,laps:e.totalLaps,finishedRace:!!(l&&l.time!=null),penalty:d.penalty,damaged:(d.maxDamage||0)>.15,passes:d.passes||0,level:h.level,wet:(e.maxWet||0)>.3,night:h.timeOfDay==="night",km:Math.max(0,d.maxDist)/1e3,stops:d.stops,perfectStops:d.perfectStops||0,fastest:e.fastest.car===i,career:!!h.career,teamRank:Ia(h.team)})}ze(this.save),this.menu.show("results",{cls:a,player:i,race:e,season:c,trackName:r,careerRes:u})}};window.apex=new Xd;})();
