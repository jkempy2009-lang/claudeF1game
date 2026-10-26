(()=>{var vu=0,Mh=1,_u=2;var hs=1,bu=2,js=3,ji=0,Xe=1,Ae=2,Qi=0,Gn=1,tn=2,Sh=3,wh=4,Mu=5;var ds=100,Su=101,wu=102,Eu=103,Tu=104,Au=200,Ru=201,Cu=202,Pu=203,Eh=204,Th=205,Iu=206,Lu=207,Du=208,Fu=209,Nu=210,Uu=211,ku=212,Bu=213,Ou=214,xo=0,vo=1,_o=2,Hs=3,bo=4,Mo=5,So=6,wo=7,rl=0,Hu=1,zu=2,Hi=0,Ah=1,Rh=2,Ch=3,ra=4,Ph=5,Ih=6,Lh=7;var Dh=300,Vn=301,us=302,al=303,ol=304,aa=306,zs=1e3,qi=1001,Eo=1002,je=1003,Gu=1004;var oa=1005;var Ve=1006,ll=1007;var en=1008;var gi=1009,Fh=1010,Nh=1011,Qs=1012,cl=1013,zi=1014,Pi=1015,yi=1016,hl=1017,dl=1018,tr=1020,Uh=35902,kh=35899,Bh=1021,Oh=1022,Ii=1023,Xi=1026,Wn=1027,ul=1028,fl=1029,$n=1030,pl=1031;var ml=1033,la=33776,ca=33777,ha=33778,da=33779,gl=35840,yl=35841,xl=35842,vl=35843,_l=36196,bl=37492,Ml=37496,Sl=37488,wl=37489,ua=37490,El=37491,Tl=37808,Al=37809,Rl=37810,Cl=37811,Pl=37812,Il=37813,Ll=37814,Dl=37815,Fl=37816,Nl=37817,Ul=37818,kl=37819,Bl=37820,Ol=37821,Hl=36492,zl=36494,Gl=36495,Vl=36283,Wl=36284,fa=36285,$l=36286;var Lr=2300,To=2301,go=2302,uh=2303,fh=2400,ph=2401,mh=2402;var Vu=3200;var pa=0,Wu=1,xn="",si="srgb",Dr="srgb-linear",Fr="linear",pe="srgb";var yo=7680;var $u=519,qu=512,Xu=513,Yu=514,ql=515,Zu=516,Ku=517,Xl=518,Ju=519,ju=35044,qn=35048;var Hh="300 es",ki=2e3,Gs=2001;function Np(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function Up(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function Nr(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Qu(){let s=Nr("canvas");return s.style.display="block",s}var zd={},Vs=null;function zh(...s){let t="THREE."+s.shift();Vs?Vs("log",t,...s):console.log(t,...s)}function tf(s){let t=s[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=s[1];e&&e.isStackTrace?s[0]+=" "+e.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function Ht(...s){s=tf(s);let t="THREE."+s.shift();if(Vs)Vs("warn",t,...s);else{let e=s[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...s)}}function Gt(...s){s=tf(s);let t="THREE."+s.shift();if(Vs)Vs("error",t,...s);else{let e=s[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...s)}}function rs(...s){let t=s.join(" ");t in zd||(zd[t]=!0,Ht(...s))}function ef(s,t,e){return new Promise(function(i,n){function r(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:n();break;case s.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}var nf={[xo]:vo,[_o]:So,[bo]:wo,[Hs]:Mo,[vo]:xo,[So]:_o,[wo]:bo,[Mo]:Hs},Yi=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){let i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){let i=this._listeners;if(i===void 0)return;let n=i[t];if(n!==void 0){let r=n.indexOf(e);r!==-1&&n.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let i=e[t.type];if(i!==void 0){t.target=this;let n=i.slice(0);for(let r=0,a=n.length;r<a;r++)n[r].call(this,t);t.target=null}}},ai=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Oc=Math.PI/180,Ur=180/Math.PI;function ma(){let s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(ai[s&255]+ai[s>>8&255]+ai[s>>16&255]+ai[s>>24&255]+"-"+ai[t&255]+ai[t>>8&255]+"-"+ai[t>>16&15|64]+ai[t>>24&255]+"-"+ai[e&63|128]+ai[e>>8&255]+"-"+ai[e>>16&255]+ai[e>>24&255]+ai[i&255]+ai[i>>8&255]+ai[i>>16&255]+ai[i>>24&255]).toLowerCase()}function ie(s,t,e){return Math.max(t,Math.min(e,s))}function kp(s,t){return(s%t+t)%t}function Hc(s,t,e){return(1-e)*s+e*t}function Mr(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:case Uint8ClampedArray:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function mi(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var Xh=class Xh{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,i=this.y,n=t.elements;return this.x=n[0]*e+n[3]*i+n[6],this.y=n[1]*e+n[4]*i+n[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=ie(this.x,t.x,e.x),this.y=ie(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=ie(this.x,t,e),this.y=ie(this.y,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(ie(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(ie(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let i=Math.cos(e),n=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*i-a*n+t.x,this.y=r*n+a*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Xh.prototype.isVector2=!0;var At=Xh,$e=class{constructor(t=0,e=0,i=0,n=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=n}static slerpFlat(t,e,i,n,r,a,o){let l=i[n+0],c=i[n+1],h=i[n+2],f=i[n+3],d=r[a+0],u=r[a+1],g=r[a+2],y=r[a+3];if(f!==y||l!==d||c!==u||h!==g){let m=l*d+c*u+h*g+f*y;m<0&&(d=-d,u=-u,g=-g,y=-y,m=-m);let p=1-o;if(m<.9995){let v=Math.acos(m),M=Math.sin(v);p=Math.sin(p*v)/M,o=Math.sin(o*v)/M,l=l*p+d*o,c=c*p+u*o,h=h*p+g*o,f=f*p+y*o}else{l=l*p+d*o,c=c*p+u*o,h=h*p+g*o,f=f*p+y*o;let v=1/Math.sqrt(l*l+c*c+h*h+f*f);l*=v,c*=v,h*=v,f*=v}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=f}static multiplyQuaternionsFlat(t,e,i,n,r,a){let o=i[n],l=i[n+1],c=i[n+2],h=i[n+3],f=r[a],d=r[a+1],u=r[a+2],g=r[a+3];return t[e]=o*g+h*f+l*u-c*d,t[e+1]=l*g+h*d+c*f-o*u,t[e+2]=c*g+h*u+o*d-l*f,t[e+3]=h*g-o*f-l*d-c*u,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,n){return this._x=t,this._y=e,this._z=i,this._w=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let i=t._x,n=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(i/2),h=o(n/2),f=o(r/2),d=l(i/2),u=l(n/2),g=l(r/2);switch(a){case"XYZ":this._x=d*h*f+c*u*g,this._y=c*u*f-d*h*g,this._z=c*h*g+d*u*f,this._w=c*h*f-d*u*g;break;case"YXZ":this._x=d*h*f+c*u*g,this._y=c*u*f-d*h*g,this._z=c*h*g-d*u*f,this._w=c*h*f+d*u*g;break;case"ZXY":this._x=d*h*f-c*u*g,this._y=c*u*f+d*h*g,this._z=c*h*g+d*u*f,this._w=c*h*f-d*u*g;break;case"ZYX":this._x=d*h*f-c*u*g,this._y=c*u*f+d*h*g,this._z=c*h*g-d*u*f,this._w=c*h*f+d*u*g;break;case"YZX":this._x=d*h*f+c*u*g,this._y=c*u*f+d*h*g,this._z=c*h*g-d*u*f,this._w=c*h*f-d*u*g;break;case"XZY":this._x=d*h*f-c*u*g,this._y=c*u*f-d*h*g,this._z=c*h*g+d*u*f,this._w=c*h*f+d*u*g;break;default:Ht("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let i=e/2,n=Math.sin(i);return this._x=t.x*n,this._y=t.y*n,this._z=t.z*n,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,i=e[0],n=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],f=e[10],d=i+o+f;if(d>0){let u=.5/Math.sqrt(d+1);this._w=.25/u,this._x=(h-l)*u,this._y=(r-c)*u,this._z=(a-n)*u}else if(i>o&&i>f){let u=2*Math.sqrt(1+i-o-f);this._w=(h-l)/u,this._x=.25*u,this._y=(n+a)/u,this._z=(r+c)/u}else if(o>f){let u=2*Math.sqrt(1+o-i-f);this._w=(r-c)/u,this._x=(n+a)/u,this._y=.25*u,this._z=(l+h)/u}else{let u=2*Math.sqrt(1+f-i-o);this._w=(a-n)/u,this._x=(r+c)/u,this._y=(l+h)/u,this._z=.25*u}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ie(this.dot(t),-1,1)))}rotateTowards(t,e){let i=this.angleTo(t);if(i===0)return this;let n=Math.min(1,e/i);return this.slerp(t,n),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let i=t._x,n=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=i*h+a*o+n*c-r*l,this._y=n*h+a*l+r*o-i*c,this._z=r*h+a*c+i*l-n*o,this._w=a*h-i*o-n*l-r*c,this._onChangeCallback(),this}slerp(t,e){let i=t._x,n=t._y,r=t._z,a=t._w,o=this.dot(t);o<0&&(i=-i,n=-n,r=-r,a=-a,o=-o);let l=1-e;if(o<.9995){let c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+i*e,this._y=this._y*l+n*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this._onChangeCallback()}else this._x=this._x*l+i*e,this._y=this._y*l+n*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this.normalize();return this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),n=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(n*Math.sin(t),n*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Yh=class Yh{constructor(t=0,e=0,i=0){this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Gd.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Gd.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,i=this.y,n=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*n,this.y=r[1]*e+r[4]*i+r[7]*n,this.z=r[2]*e+r[5]*i+r[8]*n,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,i=this.y,n=this.z,r=t.elements,a=1/(r[3]*e+r[7]*i+r[11]*n+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*n+r[12])*a,this.y=(r[1]*e+r[5]*i+r[9]*n+r[13])*a,this.z=(r[2]*e+r[6]*i+r[10]*n+r[14])*a,this}applyQuaternion(t){let e=this.x,i=this.y,n=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*n-o*i),h=2*(o*e-r*n),f=2*(r*i-a*e);return this.x=e+l*c+a*f-o*h,this.y=i+l*h+o*c-r*f,this.z=n+l*f+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,i=this.y,n=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*n,this.y=r[1]*e+r[5]*i+r[9]*n,this.z=r[2]*e+r[6]*i+r[10]*n,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=ie(this.x,t.x,e.x),this.y=ie(this.y,t.y,e.y),this.z=ie(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=ie(this.x,t,e),this.y=ie(this.y,t,e),this.z=ie(this.z,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(ie(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let i=t.x,n=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=n*l-r*o,this.y=r*a-i*l,this.z=i*o-n*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return zc.copy(this).projectOnVector(t),this.sub(zc)}reflect(t){return this.sub(zc.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(ie(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y,n=this.z-t.z;return e*e+i*i+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){let n=Math.sin(e)*t;return this.x=n*Math.sin(i),this.y=Math.cos(e)*t,this.z=n*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),n=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=n,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Yh.prototype.isVector3=!0;var k=Yh,zc=new k,Gd=new $e,Zh=class Zh{constructor(t,e,i,n,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,n,r,a,o,l,c)}set(t,e,i,n,r,a,o,l,c){let h=this.elements;return h[0]=t,h[1]=n,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=i,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,n=e.elements,r=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],h=i[4],f=i[7],d=i[2],u=i[5],g=i[8],y=n[0],m=n[3],p=n[6],v=n[1],M=n[4],b=n[7],S=n[2],_=n[5],T=n[8];return r[0]=a*y+o*v+l*S,r[3]=a*m+o*M+l*_,r[6]=a*p+o*b+l*T,r[1]=c*y+h*v+f*S,r[4]=c*m+h*M+f*_,r[7]=c*p+h*b+f*T,r[2]=d*y+u*v+g*S,r[5]=d*m+u*M+g*_,r[8]=d*p+u*b+g*T,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[1],n=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-i*r*h+i*o*l+n*r*c-n*a*l}invert(){let t=this.elements,e=t[0],i=t[1],n=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],f=h*a-o*c,d=o*l-h*r,u=c*r-a*l,g=e*f+i*d+n*u;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/g;return t[0]=f*y,t[1]=(n*c-h*i)*y,t[2]=(o*i-n*a)*y,t[3]=d*y,t[4]=(h*e-n*l)*y,t[5]=(n*r-o*e)*y,t[6]=u*y,t[7]=(i*l-c*e)*y,t[8]=(a*e-i*r)*y,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,n,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*a+c*o)+a+t,-n*c,n*l,-n*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return rs("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Gc.makeScale(t,e)),this}rotate(t){return rs("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Gc.makeRotation(-t)),this}translate(t,e){return rs("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Gc.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,i=t.elements;for(let n=0;n<9;n++)if(e[n]!==i[n])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}};Zh.prototype.isMatrix3=!0;var $t=Zh,Gc=new $t,Vd=new $t().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Wd=new $t().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Bp(){let s={enabled:!0,workingColorSpace:Dr,spaces:{},convert:function(n,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===pe&&(n.r=gn(n.r),n.g=gn(n.g),n.b=gn(n.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(n.applyMatrix3(this.spaces[r].toXYZ),n.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===pe&&(n.r=Os(n.r),n.g=Os(n.g),n.b=Os(n.b))),n},workingToColorSpace:function(n,r){return this.convert(n,this.workingColorSpace,r)},colorSpaceToWorking:function(n,r){return this.convert(n,r,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===xn?Fr:this.spaces[n].transfer},getToneMappingMode:function(n){return this.spaces[n].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(n,r=this.workingColorSpace){return n.fromArray(this.spaces[r].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,r,a){return n.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(n,r){return rs("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(n,r)},toWorkingColorSpace:function(n,r){return rs("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(n,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],i=[.3127,.329];return s.define({[Dr]:{primaries:t,whitePoint:i,transfer:Fr,toXYZ:Vd,fromXYZ:Wd,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:si},outputColorSpaceConfig:{drawingBufferColorSpace:si}},[si]:{primaries:t,whitePoint:i,transfer:pe,toXYZ:Vd,fromXYZ:Wd,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:si}}}),s}var se=Bp();function gn(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Os(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}var Es,Ao=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{Es===void 0&&(Es=Nr("canvas")),Es.width=t.width,Es.height=t.height;let n=Es.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),i=Es}return i.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Nr("canvas");e.width=t.width,e.height=t.height;let i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let n=i.getImageData(0,0,t.width,t.height),r=n.data;for(let a=0;a<r.length;a++)r[a]=gn(r[a]/255)*255;return i.putImageData(n,0,0),e}else if(t.data){let e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(gn(e[i]/255)*255):e[i]=gn(e[i]);return{data:e,width:t.width,height:t.height}}else return Ht("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Op=0,Ws=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Op++}),this.uuid=ma(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},n=this.data;if(n!==null){let r;if(Array.isArray(n)){r=[];for(let a=0,o=n.length;a<o;a++)n[a].isDataTexture?r.push(Vc(n[a].image)):r.push(Vc(n[a]))}else r=Vc(n);i.url=r}return e||(t.images[this.uuid]=i),i}};function Vc(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Ao.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(Ht("Texture: Unable to serialize Texture."),{})}var Hp=0,Wc=new k,hi=class s extends Yi{constructor(t=s.DEFAULT_IMAGE,e=s.DEFAULT_MAPPING,i=qi,n=qi,r=Ve,a=en,o=Ii,l=gi,c=s.DEFAULT_ANISOTROPY,h=xn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Hp++}),this.uuid=ma(),this.name="",this.source=new Ws(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=n,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new At(0,0),this.repeat=new At(1,1),this.center=new At(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new $t,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Wc).x}get height(){return this.source.getSize(Wc).y}get depth(){return this.source.getSize(Wc).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let i=t[e];if(i===void 0){Ht(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let n=this[e];if(n===void 0){Ht(`Texture.setValues(): property '${e}' does not exist.`);continue}n&&i&&n.isVector2&&i.isVector2||n&&i&&n.isVector3&&i.isVector3||n&&i&&n.isMatrix3&&i.isMatrix3?n.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Dh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case zs:t.x=t.x-Math.floor(t.x);break;case qi:t.x=t.x<0?0:1;break;case Eo:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case zs:t.y=t.y-Math.floor(t.y);break;case qi:t.y=t.y<0?0:1;break;case Eo:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};hi.DEFAULT_IMAGE=null;hi.DEFAULT_MAPPING=Dh;hi.DEFAULT_ANISOTROPY=1;var Kh=class Kh{constructor(t=0,e=0,i=0,n=1){this.x=t,this.y=e,this.z=i,this.w=n}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,n){return this.x=t,this.y=e,this.z=i,this.w=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,i=this.y,n=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*i+a[8]*n+a[12]*r,this.y=a[1]*e+a[5]*i+a[9]*n+a[13]*r,this.z=a[2]*e+a[6]*i+a[10]*n+a[14]*r,this.w=a[3]*e+a[7]*i+a[11]*n+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,n,r,l=t.elements,c=l[0],h=l[4],f=l[8],d=l[1],u=l[5],g=l[9],y=l[2],m=l[6],p=l[10];if(Math.abs(h-d)<.01&&Math.abs(f-y)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(f+y)<.1&&Math.abs(g+m)<.1&&Math.abs(c+u+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let M=(c+1)/2,b=(u+1)/2,S=(p+1)/2,_=(h+d)/4,T=(f+y)/4,x=(g+m)/4;return M>b&&M>S?M<.01?(i=0,n=.707106781,r=.707106781):(i=Math.sqrt(M),n=_/i,r=T/i):b>S?b<.01?(i=.707106781,n=0,r=.707106781):(n=Math.sqrt(b),i=_/n,r=x/n):S<.01?(i=.707106781,n=.707106781,r=0):(r=Math.sqrt(S),i=T/r,n=x/r),this.set(i,n,r,e),this}let v=Math.sqrt((m-g)*(m-g)+(f-y)*(f-y)+(d-h)*(d-h));return Math.abs(v)<.001&&(v=1),this.x=(m-g)/v,this.y=(f-y)/v,this.z=(d-h)/v,this.w=Math.acos((c+u+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=ie(this.x,t.x,e.x),this.y=ie(this.y,t.y,e.y),this.z=ie(this.z,t.z,e.z),this.w=ie(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=ie(this.x,t,e),this.y=ie(this.y,t,e),this.z=ie(this.z,t,e),this.w=ie(this.w,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(ie(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Kh.prototype.isVector4=!0;var Re=Kh,Ro=class extends Yi{constructor(t=1,e=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ve,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=i.depth,this.scissor=new Re(0,0,t,e),this.scissorTest=!1,this.viewport=new Re(0,0,t,e),this.textures=[];let n={width:t,height:e,depth:i.depth},r=new hi(n),a=i.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:Ve,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let n=0,r=this.textures.length;n<r;n++)this.textures[n].image.width=t,this.textures[n].image.height=e,this.textures[n].image.depth=i,this.textures[n].isData3DTexture!==!0&&(this.textures[n].isArrayTexture=this.textures[n].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,i=t.textures.length;e<i;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let n=Object.assign({},t.textures[e].image);this.textures[e].source=new Ws(n)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Qe=class extends Ro{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}},kr=class extends hi{constructor(t=null,e=1,i=1,n=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:n},this.magFilter=je,this.minFilter=je,this.wrapR=qi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Co=class extends hi{constructor(t=null,e=1,i=1,n=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:n},this.magFilter=je,this.minFilter=je,this.wrapR=qi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var sl=class sl{constructor(t,e,i,n,r,a,o,l,c,h,f,d,u,g,y,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,n,r,a,o,l,c,h,f,d,u,g,y,m)}set(t,e,i,n,r,a,o,l,c,h,f,d,u,g,y,m){let p=this.elements;return p[0]=t,p[4]=e,p[8]=i,p[12]=n,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=h,p[10]=f,p[14]=d,p[3]=u,p[7]=g,p[11]=y,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new sl().fromArray(this.elements)}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){let e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),i.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,i=t.elements,n=1/Ts.setFromMatrixColumn(t,0).length(),r=1/Ts.setFromMatrixColumn(t,1).length(),a=1/Ts.setFromMatrixColumn(t,2).length();return e[0]=i[0]*n,e[1]=i[1]*n,e[2]=i[2]*n,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*a,e[9]=i[9]*a,e[10]=i[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,i=t.x,n=t.y,r=t.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(n),c=Math.sin(n),h=Math.cos(r),f=Math.sin(r);if(t.order==="XYZ"){let d=a*h,u=a*f,g=o*h,y=o*f;e[0]=l*h,e[4]=-l*f,e[8]=c,e[1]=u+g*c,e[5]=d-y*c,e[9]=-o*l,e[2]=y-d*c,e[6]=g+u*c,e[10]=a*l}else if(t.order==="YXZ"){let d=l*h,u=l*f,g=c*h,y=c*f;e[0]=d+y*o,e[4]=g*o-u,e[8]=a*c,e[1]=a*f,e[5]=a*h,e[9]=-o,e[2]=u*o-g,e[6]=y+d*o,e[10]=a*l}else if(t.order==="ZXY"){let d=l*h,u=l*f,g=c*h,y=c*f;e[0]=d-y*o,e[4]=-a*f,e[8]=g+u*o,e[1]=u+g*o,e[5]=a*h,e[9]=y-d*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){let d=a*h,u=a*f,g=o*h,y=o*f;e[0]=l*h,e[4]=g*c-u,e[8]=d*c+y,e[1]=l*f,e[5]=y*c+d,e[9]=u*c-g,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){let d=a*l,u=a*c,g=o*l,y=o*c;e[0]=l*h,e[4]=y-d*f,e[8]=g*f+u,e[1]=f,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=u*f+g,e[10]=d-y*f}else if(t.order==="XZY"){let d=a*l,u=a*c,g=o*l,y=o*c;e[0]=l*h,e[4]=-f,e[8]=c*h,e[1]=d*f+y,e[5]=a*h,e[9]=u*f-g,e[2]=g*f-u,e[6]=o*h,e[10]=y*f+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(zp,t,Gp)}lookAt(t,e,i){let n=this.elements;return Mi.subVectors(t,e),Mi.lengthSq()===0&&(Mi.z=1),Mi.normalize(),Cn.crossVectors(i,Mi),Cn.lengthSq()===0&&(Math.abs(i.z)===1?Mi.x+=1e-4:Mi.z+=1e-4,Mi.normalize(),Cn.crossVectors(i,Mi)),Cn.normalize(),$a.crossVectors(Mi,Cn),n[0]=Cn.x,n[4]=$a.x,n[8]=Mi.x,n[1]=Cn.y,n[5]=$a.y,n[9]=Mi.y,n[2]=Cn.z,n[6]=$a.z,n[10]=Mi.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,n=e.elements,r=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],h=i[1],f=i[5],d=i[9],u=i[13],g=i[2],y=i[6],m=i[10],p=i[14],v=i[3],M=i[7],b=i[11],S=i[15],_=n[0],T=n[4],x=n[8],w=n[12],P=n[1],D=n[5],C=n[9],F=n[13],A=n[2],I=n[6],B=n[10],O=n[14],$=n[3],L=n[7],z=n[11],G=n[15];return r[0]=a*_+o*P+l*A+c*$,r[4]=a*T+o*D+l*I+c*L,r[8]=a*x+o*C+l*B+c*z,r[12]=a*w+o*F+l*O+c*G,r[1]=h*_+f*P+d*A+u*$,r[5]=h*T+f*D+d*I+u*L,r[9]=h*x+f*C+d*B+u*z,r[13]=h*w+f*F+d*O+u*G,r[2]=g*_+y*P+m*A+p*$,r[6]=g*T+y*D+m*I+p*L,r[10]=g*x+y*C+m*B+p*z,r[14]=g*w+y*F+m*O+p*G,r[3]=v*_+M*P+b*A+S*$,r[7]=v*T+M*D+b*I+S*L,r[11]=v*x+M*C+b*B+S*z,r[15]=v*w+M*F+b*O+S*G,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[4],n=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],f=t[6],d=t[10],u=t[14],g=t[3],y=t[7],m=t[11],p=t[15],v=l*u-c*d,M=o*u-c*f,b=o*d-l*f,S=a*u-c*h,_=a*d-l*h,T=a*f-o*h;return e*(y*v-m*M+p*b)-i*(g*v-m*S+p*_)+n*(g*M-y*S+p*T)-r*(g*b-y*_+m*T)}determinantAffine(){let t=this.elements,e=t[0],i=t[4],n=t[8],r=t[1],a=t[5],o=t[9],l=t[2],c=t[6],h=t[10];return e*(a*h-o*c)-i*(r*h-o*l)+n*(r*c-a*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){let n=this.elements;return t.isVector3?(n[12]=t.x,n[13]=t.y,n[14]=t.z):(n[12]=t,n[13]=e,n[14]=i),this}invert(){let t=this.elements,e=t[0],i=t[1],n=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],f=t[9],d=t[10],u=t[11],g=t[12],y=t[13],m=t[14],p=t[15],v=e*o-i*a,M=e*l-n*a,b=e*c-r*a,S=i*l-n*o,_=i*c-r*o,T=n*c-r*l,x=h*y-f*g,w=h*m-d*g,P=h*p-u*g,D=f*m-d*y,C=f*p-u*y,F=d*p-u*m,A=v*F-M*C+b*D+S*P-_*w+T*x;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let I=1/A;return t[0]=(o*F-l*C+c*D)*I,t[1]=(n*C-i*F-r*D)*I,t[2]=(y*T-m*_+p*S)*I,t[3]=(d*_-f*T-u*S)*I,t[4]=(l*P-a*F-c*w)*I,t[5]=(e*F-n*P+r*w)*I,t[6]=(m*b-g*T-p*M)*I,t[7]=(h*T-d*b+u*M)*I,t[8]=(a*C-o*P+c*x)*I,t[9]=(i*P-e*C-r*x)*I,t[10]=(g*_-y*b+p*v)*I,t[11]=(f*b-h*_-u*v)*I,t[12]=(o*w-a*D-l*x)*I,t[13]=(e*D-i*w+n*x)*I,t[14]=(y*M-g*S-m*v)*I,t[15]=(h*S-f*M+d*v)*I,this}scale(t){let e=this.elements,i=t.x,n=t.y,r=t.z;return e[0]*=i,e[4]*=n,e[8]*=r,e[1]*=i,e[5]*=n,e[9]*=r,e[2]*=i,e[6]*=n,e[10]*=r,e[3]*=i,e[7]*=n,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],n=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,n))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let i=Math.cos(e),n=Math.sin(e),r=1-i,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+i,c*o-n*l,c*l+n*o,0,c*o+n*l,h*o+i,h*l-n*a,0,c*l-n*o,h*l+n*a,r*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,n,r,a){return this.set(1,i,r,0,t,1,a,0,e,n,1,0,0,0,0,1),this}compose(t,e,i){let n=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,h=a+a,f=o+o,d=r*c,u=r*h,g=r*f,y=a*h,m=a*f,p=o*f,v=l*c,M=l*h,b=l*f,S=i.x,_=i.y,T=i.z;return n[0]=(1-(y+p))*S,n[1]=(u+b)*S,n[2]=(g-M)*S,n[3]=0,n[4]=(u-b)*_,n[5]=(1-(d+p))*_,n[6]=(m+v)*_,n[7]=0,n[8]=(g+M)*T,n[9]=(m-v)*T,n[10]=(1-(d+y))*T,n[11]=0,n[12]=t.x,n[13]=t.y,n[14]=t.z,n[15]=1,this}decompose(t,e,i){let n=this.elements;t.x=n[12],t.y=n[13],t.z=n[14];let r=this.determinantAffine();if(r===0)return i.set(1,1,1),e.identity(),this;let a=Ts.set(n[0],n[1],n[2]).length(),o=Ts.set(n[4],n[5],n[6]).length(),l=Ts.set(n[8],n[9],n[10]).length();r<0&&(a=-a),Di.copy(this);let c=1/a,h=1/o,f=1/l;return Di.elements[0]*=c,Di.elements[1]*=c,Di.elements[2]*=c,Di.elements[4]*=h,Di.elements[5]*=h,Di.elements[6]*=h,Di.elements[8]*=f,Di.elements[9]*=f,Di.elements[10]*=f,e.setFromRotationMatrix(Di),i.x=a,i.y=o,i.z=l,this}makePerspective(t,e,i,n,r,a,o=ki,l=!1){let c=this.elements,h=2*r/(e-t),f=2*r/(i-n),d=(e+t)/(e-t),u=(i+n)/(i-n),g,y;if(l)g=r/(a-r),y=a*r/(a-r);else if(o===ki)g=-(a+r)/(a-r),y=-2*a*r/(a-r);else if(o===Gs)g=-a/(a-r),y=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=f,c[9]=u,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=y,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,i,n,r,a,o=ki,l=!1){let c=this.elements,h=2/(e-t),f=2/(i-n),d=-(e+t)/(e-t),u=-(i+n)/(i-n),g,y;if(l)g=1/(a-r),y=a/(a-r);else if(o===ki)g=-2/(a-r),y=-(a+r)/(a-r);else if(o===Gs)g=-1/(a-r),y=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=f,c[9]=0,c[13]=u,c[2]=0,c[6]=0,c[10]=g,c[14]=y,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,i=t.elements;for(let n=0;n<16;n++)if(e[n]!==i[n])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}};sl.prototype.isMatrix4=!0;var ee=sl,Ts=new k,Di=new ee,zp=new k(0,0,0),Gp=new k(1,1,1),Cn=new k,$a=new k,Mi=new k,$d=new ee,qd=new $e,Ri=class s{constructor(t=0,e=0,i=0,n=s.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=n}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,n=this._order){return this._x=t,this._y=e,this._z=i,this._order=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){let n=t.elements,r=n[0],a=n[4],o=n[8],l=n[1],c=n[5],h=n[9],f=n[2],d=n[6],u=n[10];switch(e){case"XYZ":this._y=Math.asin(ie(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,u),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ie(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,u),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(ie(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,u),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-ie(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,u),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(ie(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(o,u));break;case"XZY":this._z=Math.asin(-ie(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,u),this._y=0);break;default:Ht("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return $d.makeRotationFromQuaternion(t),this.setFromRotationMatrix($d,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return qd.setFromEuler(this),this.setFromQuaternion(qd,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Ri.DEFAULT_ORDER="XYZ";var Br=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Vp=0,Xd=new k,As=new $e,dn=new ee,qa=new k,Sr=new k,Wp=new k,$p=new $e,Yd=new k(1,0,0),Zd=new k(0,1,0),Kd=new k(0,0,1),Jd={type:"added"},qp={type:"removed"},Rs={type:"childadded",child:null},$c={type:"childremoved",child:null},De=class s extends Yi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Vp++}),this.uuid=ma(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let t=new k,e=new Ri,i=new $e,n=new k(1,1,1);function r(){i.setFromEuler(e,!1)}function a(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:n},modelViewMatrix:{value:new ee},normalMatrix:{value:new $t}}),this.matrix=new ee,this.matrixWorld=new ee,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Br,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return As.setFromAxisAngle(t,e),this.quaternion.multiply(As),this}rotateOnWorldAxis(t,e){return As.setFromAxisAngle(t,e),this.quaternion.premultiply(As),this}rotateX(t){return this.rotateOnAxis(Yd,t)}rotateY(t){return this.rotateOnAxis(Zd,t)}rotateZ(t){return this.rotateOnAxis(Kd,t)}translateOnAxis(t,e){return Xd.copy(t).applyQuaternion(this.quaternion),this.position.add(Xd.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Yd,t)}translateY(t){return this.translateOnAxis(Zd,t)}translateZ(t){return this.translateOnAxis(Kd,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(dn.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?qa.copy(t):qa.set(t,e,i);let n=this.parent;this.updateWorldMatrix(!0,!1),Sr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?dn.lookAt(Sr,qa,this.up):dn.lookAt(qa,Sr,this.up),this.quaternion.setFromRotationMatrix(dn),n&&(dn.extractRotation(n.matrixWorld),As.setFromRotationMatrix(dn),this.quaternion.premultiply(As.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Gt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Jd),Rs.child=t,this.dispatchEvent(Rs),Rs.child=null):Gt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(qp),$c.child=t,this.dispatchEvent($c),$c.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),dn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),dn.multiply(t.parent.matrixWorld)),t.applyMatrix4(dn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Jd),Rs.child=t,this.dispatchEvent(Rs),Rs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,n=this.children.length;i<n;i++){let a=this.children[i].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);let n=this.children;for(let r=0,a=n.length;r<a;r++)n[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Sr,t,Wp),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Sr,$p,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,i=t.y,n=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*i-r[8]*n,r[13]+=i-r[1]*e-r[5]*i-r[9]*n,r[14]+=n-r[2]*e-r[6]*i-r[10]*n}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e,i=!1){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),e===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,i)}}toJSON(t){let e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let n={};n.uuid=this.uuid,n.type=this.type,n.name=this.name,n.castShadow=this.castShadow,n.receiveShadow=this.receiveShadow,n.visible=this.visible,n.frustumCulled=this.frustumCulled,n.renderOrder=this.renderOrder,n.static=this.static,n.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(n.userData=this.userData),n.layers=this.layers.mask,n.matrix=this.matrix.toArray(),n.up=this.up.toArray(),this.pivot!==null&&(n.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(n.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(n.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(n.type="InstancedMesh",n.count=this.count,n.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(n.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(n.type="BatchedMesh",n.perObjectFrustumCulled=this.perObjectFrustumCulled,n.sortObjects=this.sortObjects,n.drawRanges=this._drawRanges,n.reservedRanges=this._reservedRanges,n.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),n.instanceInfo=this._instanceInfo.map(o=>({...o})),n.availableInstanceIds=this._availableInstanceIds.slice(),n.availableGeometryIds=this._availableGeometryIds.slice(),n.nextIndexStart=this._nextIndexStart,n.nextVertexStart=this._nextVertexStart,n.geometryCount=this._geometryCount,n.maxInstanceCount=this._maxInstanceCount,n.maxVertexCount=this._maxVertexCount,n.maxIndexCount=this._maxIndexCount,n.geometryInitialized=this._geometryInitialized,n.matricesTexture=this._matricesTexture.toJSON(t),n.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(n.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(n.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(n.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?n.background=this.background.toJSON():this.background.isTexture&&(n.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(n.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){n.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let f=l[c];r(t.shapes,f)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(n.bindMode=this.bindMode,n.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),n.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));n.material=o}else n.material=r(t.materials,this.material);if(this.children.length>0){n.children=[];for(let o=0;o<this.children.length;o++)n.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){n.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];n.animations.push(r(t.animations,l))}}if(e){let o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),f=a(t.shapes),d=a(t.skeletons),u=a(t.animations),g=a(t.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),f.length>0&&(i.shapes=f),d.length>0&&(i.skeletons=d),u.length>0&&(i.animations=u),g.length>0&&(i.nodes=g)}return i.object=n,i;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){let n=t.children[i];this.add(n.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};De.DEFAULT_UP=new k(0,1,0);De.DEFAULT_MATRIX_AUTO_UPDATE=!0;De.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Le=class extends De{constructor(){super(),this.isGroup=!0,this.type="Group"}},Xp={type:"move"},$s=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Le,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Le,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new k,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new k),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Le,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new k,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new k,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let n=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(let y of t.hand.values()){let m=e.getJointPose(y,i),p=this._getHandJoint(c,y);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],d=h.position.distanceTo(f.position),u=.02,g=.005;c.inputState.pinching&&d>u+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=u-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(n=e.getPose(t.targetRaySpace,i),n===null&&r!==null&&(n=r),n!==null&&(o.matrix.fromArray(n.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,n.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(n.linearVelocity)):o.hasLinearVelocity=!1,n.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(n.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Xp)))}return o!==null&&(o.visible=n!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let i=new Le;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}},sf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Pn={h:0,s:0,l:0},Xa={h:0,s:0,l:0};function qc(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}var at=class{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){let n=t;n&&n.isColor?this.copy(n):typeof n=="number"?this.setHex(n):typeof n=="string"&&this.setStyle(n)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=si){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,se.colorSpaceToWorking(this,e),this}setRGB(t,e,i,n=se.workingColorSpace){return this.r=t,this.g=e,this.b=i,se.colorSpaceToWorking(this,n),this}setHSL(t,e,i,n=se.workingColorSpace){if(t=kp(t,1),e=ie(e,0,1),i=ie(i,0,1),e===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+e):i+e-i*e,a=2*i-r;this.r=qc(a,r,t+1/3),this.g=qc(a,r,t),this.b=qc(a,r,t-1/3)}return se.colorSpaceToWorking(this,n),this}setStyle(t,e=si){function i(r){r!==void 0&&parseFloat(r)<1&&Ht("Color: Alpha component of "+t+" will be ignored.")}let n;if(n=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=n[1],o=n[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Ht("Color: Unknown color model "+t)}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=n[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);Ht("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=si){let i=sf[t.toLowerCase()];return i!==void 0?this.setHex(i,e):Ht("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=gn(t.r),this.g=gn(t.g),this.b=gn(t.b),this}copyLinearToSRGB(t){return this.r=Os(t.r),this.g=Os(t.g),this.b=Os(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=si){return se.workingToColorSpace(oi.copy(this),t),Math.round(ie(oi.r*255,0,255))*65536+Math.round(ie(oi.g*255,0,255))*256+Math.round(ie(oi.b*255,0,255))}getHexString(t=si){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=se.workingColorSpace){se.workingToColorSpace(oi.copy(this),e);let i=oi.r,n=oi.g,r=oi.b,a=Math.max(i,n,r),o=Math.min(i,n,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let f=a-o;switch(c=h<=.5?f/(a+o):f/(2-a-o),a){case i:l=(n-r)/f+(n<r?6:0);break;case n:l=(r-i)/f+2;break;case r:l=(i-n)/f+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=se.workingColorSpace){return se.workingToColorSpace(oi.copy(this),e),t.r=oi.r,t.g=oi.g,t.b=oi.b,t}getStyle(t=si){se.workingToColorSpace(oi.copy(this),t);let e=oi.r,i=oi.g,n=oi.b;return t!==si?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${n.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(n*255)})`}offsetHSL(t,e,i){return this.getHSL(Pn),this.setHSL(Pn.h+t,Pn.s+e,Pn.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(Pn),t.getHSL(Xa);let i=Hc(Pn.h,Xa.h,e),n=Hc(Pn.s,Xa.s,e),r=Hc(Pn.l,Xa.l,e);return this.setHSL(i,n,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,i=this.g,n=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*n,this.g=r[1]*e+r[4]*i+r[7]*n,this.b=r[2]*e+r[5]*i+r[8]*n,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},oi=new at;at.NAMES=sf;var Or=class s{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new at(t),this.density=e}clone(){return new s(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}},Hr=class s{constructor(t,e=1,i=1e3){this.isFog=!0,this.name="",this.color=new at(t),this.near=e,this.far=i}clone(){return new s(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Bi=class extends De{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ri,this.environmentIntensity=1,this.environmentRotation=new Ri,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},Fi=new k,un=new k,Xc=new k,fn=new k,Cs=new k,Ps=new k,jd=new k,Yc=new k,Zc=new k,Kc=new k,Jc=new Re,jc=new Re,Qc=new Re,Fn=class s{constructor(t=new k,e=new k,i=new k){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,n){n.subVectors(i,e),Fi.subVectors(t,e),n.cross(Fi);let r=n.lengthSq();return r>0?n.multiplyScalar(1/Math.sqrt(r)):n.set(0,0,0)}static getBarycoord(t,e,i,n,r){Fi.subVectors(n,e),un.subVectors(i,e),Xc.subVectors(t,e);let a=Fi.dot(Fi),o=Fi.dot(un),l=Fi.dot(Xc),c=un.dot(un),h=un.dot(Xc),f=a*c-o*o;if(f===0)return r.set(0,0,0),null;let d=1/f,u=(c*l-o*h)*d,g=(a*h-o*l)*d;return r.set(1-u-g,g,u)}static containsPoint(t,e,i,n){return this.getBarycoord(t,e,i,n,fn)===null?!1:fn.x>=0&&fn.y>=0&&fn.x+fn.y<=1}static getInterpolation(t,e,i,n,r,a,o,l){return this.getBarycoord(t,e,i,n,fn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,fn.x),l.addScaledVector(a,fn.y),l.addScaledVector(o,fn.z),l)}static getInterpolatedAttribute(t,e,i,n,r,a){return Jc.setScalar(0),jc.setScalar(0),Qc.setScalar(0),Jc.fromBufferAttribute(t,e),jc.fromBufferAttribute(t,i),Qc.fromBufferAttribute(t,n),a.setScalar(0),a.addScaledVector(Jc,r.x),a.addScaledVector(jc,r.y),a.addScaledVector(Qc,r.z),a}static isFrontFacing(t,e,i,n){return Fi.subVectors(i,e),un.subVectors(t,e),Fi.cross(un).dot(n)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,n){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[n]),this}setFromAttributeAndIndices(t,e,i,n){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,n),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Fi.subVectors(this.c,this.b),un.subVectors(this.a,this.b),Fi.cross(un).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return s.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return s.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,n,r){return s.getInterpolation(t,this.a,this.b,this.c,e,i,n,r)}containsPoint(t){return s.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return s.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let i=this.a,n=this.b,r=this.c,a,o;Cs.subVectors(n,i),Ps.subVectors(r,i),Yc.subVectors(t,i);let l=Cs.dot(Yc),c=Ps.dot(Yc);if(l<=0&&c<=0)return e.copy(i);Zc.subVectors(t,n);let h=Cs.dot(Zc),f=Ps.dot(Zc);if(h>=0&&f<=h)return e.copy(n);let d=l*f-h*c;if(d<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(i).addScaledVector(Cs,a);Kc.subVectors(t,r);let u=Cs.dot(Kc),g=Ps.dot(Kc);if(g>=0&&u<=g)return e.copy(r);let y=u*c-l*g;if(y<=0&&c>=0&&g<=0)return o=c/(c-g),e.copy(i).addScaledVector(Ps,o);let m=h*g-u*f;if(m<=0&&f-h>=0&&u-g>=0)return jd.subVectors(r,n),o=(f-h)/(f-h+(u-g)),e.copy(n).addScaledVector(jd,o);let p=1/(m+y+d);return a=y*p,o=d*p,e.copy(i).addScaledVector(Cs,a).addScaledVector(Ps,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Zi=class{constructor(t=new k(1/0,1/0,1/0),e=new k(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(Ni.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(Ni.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let i=Ni.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Ni):Ni.fromBufferAttribute(r,a),Ni.applyMatrix4(t.matrixWorld),this.expandByPoint(Ni);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Ya.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Ya.copy(i.boundingBox)),Ya.applyMatrix4(t.matrixWorld),this.union(Ya)}let n=t.children;for(let r=0,a=n.length;r<a;r++)this.expandByObject(n[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Ni),Ni.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(wr),Za.subVectors(this.max,wr),Is.subVectors(t.a,wr),Ls.subVectors(t.b,wr),Ds.subVectors(t.c,wr),In.subVectors(Ls,Is),Ln.subVectors(Ds,Ls),es.subVectors(Is,Ds);let e=[0,-In.z,In.y,0,-Ln.z,Ln.y,0,-es.z,es.y,In.z,0,-In.x,Ln.z,0,-Ln.x,es.z,0,-es.x,-In.y,In.x,0,-Ln.y,Ln.x,0,-es.y,es.x,0];return!th(e,Is,Ls,Ds,Za)||(e=[1,0,0,0,1,0,0,0,1],!th(e,Is,Ls,Ds,Za))?!1:(Ka.crossVectors(In,Ln),e=[Ka.x,Ka.y,Ka.z],th(e,Is,Ls,Ds,Za))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ni).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ni).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(pn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),pn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),pn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),pn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),pn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),pn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),pn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),pn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(pn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},pn=[new k,new k,new k,new k,new k,new k,new k,new k],Ni=new k,Ya=new Zi,Is=new k,Ls=new k,Ds=new k,In=new k,Ln=new k,es=new k,wr=new k,Za=new k,Ka=new k,is=new k;function th(s,t,e,i,n){for(let r=0,a=s.length-3;r<=a;r+=3){is.fromArray(s,r);let o=n.x*Math.abs(is.x)+n.y*Math.abs(is.y)+n.z*Math.abs(is.z),l=t.dot(is),c=e.dot(is),h=i.dot(is);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var Ge=new k,Ja=new At,Yp=0,Yt=class extends Yi{constructor(t,e,i=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Yp++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=ju,this.updateRanges=[],this.gpuType=Pi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let n=0,r=this.itemSize;n<r;n++)this.array[t+n]=e.array[i+n];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)Ja.fromBufferAttribute(this,e),Ja.applyMatrix3(t),this.setXY(e,Ja.x,Ja.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)Ge.fromBufferAttribute(this,e),Ge.applyMatrix3(t),this.setXYZ(e,Ge.x,Ge.y,Ge.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)Ge.fromBufferAttribute(this,e),Ge.applyMatrix4(t),this.setXYZ(e,Ge.x,Ge.y,Ge.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Ge.fromBufferAttribute(this,e),Ge.applyNormalMatrix(t),this.setXYZ(e,Ge.x,Ge.y,Ge.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Ge.fromBufferAttribute(this,e),Ge.transformDirection(t),this.setXYZ(e,Ge.x,Ge.y,Ge.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=Mr(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=mi(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Mr(e,this.array)),e}setX(t,e){return this.normalized&&(e=mi(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Mr(e,this.array)),e}setY(t,e){return this.normalized&&(e=mi(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Mr(e,this.array)),e}setZ(t,e){return this.normalized&&(e=mi(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Mr(e,this.array)),e}setW(t,e){return this.normalized&&(e=mi(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=mi(e,this.array),i=mi(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,n){return t*=this.itemSize,this.normalized&&(e=mi(e,this.array),i=mi(i,this.array),n=mi(n,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=n,this}setXYZW(t,e,i,n,r){return t*=this.itemSize,this.normalized&&(e=mi(e,this.array),i=mi(i,this.array),n=mi(n,this.array),r=mi(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=n,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}};var zr=class extends Yt{constructor(t,e,i){super(new Uint16Array(t),e,i)}};var Gr=class extends Yt{constructor(t,e,i){super(new Uint32Array(t),e,i)}};var Jt=class extends Yt{constructor(t,e,i){super(new Float32Array(t),e,i)}},Zp=new Zi,Er=new k,eh=new k,Ki=class{constructor(t=new k,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let i=this.center;e!==void 0?i.copy(e):Zp.setFromPoints(t).getCenter(i);let n=0;for(let r=0,a=t.length;r<a;r++)n=Math.max(n,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(n),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Er.subVectors(t,this.center);let e=Er.lengthSq();if(e>this.radius*this.radius){let i=Math.sqrt(e),n=(i-this.radius)*.5;this.center.addScaledVector(Er,n/i),this.radius+=n}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(eh.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Er.copy(t.center).add(eh)),this.expandByPoint(Er.copy(t.center).sub(eh))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},Kp=0,Ai=new ee,ih=new De,Fs=new k,Si=new Zi,Tr=new Zi,Je=new k,ne=class s extends Yi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Kp++}),this.uuid=ma(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Np(t)?Gr:zr)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new $t().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}let n=this.attributes.tangent;return n!==void 0&&(n.transformDirection(t),n.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Ai.makeRotationFromQuaternion(t),this.applyMatrix4(Ai),this}rotateX(t){return Ai.makeRotationX(t),this.applyMatrix4(Ai),this}rotateY(t){return Ai.makeRotationY(t),this.applyMatrix4(Ai),this}rotateZ(t){return Ai.makeRotationZ(t),this.applyMatrix4(Ai),this}translate(t,e,i){return Ai.makeTranslation(t,e,i),this.applyMatrix4(Ai),this}scale(t,e,i){return Ai.makeScale(t,e,i),this.applyMatrix4(Ai),this}lookAt(t){return ih.lookAt(t),ih.updateMatrix(),this.applyMatrix4(ih.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Fs).negate(),this.translate(Fs.x,Fs.y,Fs.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let i=[];for(let n=0,r=t.length;n<r;n++){let a=t[n];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Jt(i,3))}else{let i=Math.min(t.length,e.count);for(let n=0;n<i;n++){let r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&Ht("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Zi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Gt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new k(-1/0,-1/0,-1/0),new k(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,n=e.length;i<n;i++){let r=e[i];Si.setFromBufferAttribute(r),this.morphTargetsRelative?(Je.addVectors(this.boundingBox.min,Si.min),this.boundingBox.expandByPoint(Je),Je.addVectors(this.boundingBox.max,Si.max),this.boundingBox.expandByPoint(Je)):(this.boundingBox.expandByPoint(Si.min),this.boundingBox.expandByPoint(Si.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Gt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ki);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Gt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new k,1/0);return}if(t){let i=this.boundingSphere.center;if(Si.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];Tr.setFromBufferAttribute(o),this.morphTargetsRelative?(Je.addVectors(Si.min,Tr.min),Si.expandByPoint(Je),Je.addVectors(Si.max,Tr.max),Si.expandByPoint(Je)):(Si.expandByPoint(Tr.min),Si.expandByPoint(Tr.max))}Si.getCenter(i);let n=0;for(let r=0,a=t.count;r<a;r++)Je.fromBufferAttribute(t,r),n=Math.max(n,i.distanceToSquared(Je));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Je.fromBufferAttribute(o,c),l&&(Fs.fromBufferAttribute(t,c),Je.add(Fs)),n=Math.max(n,i.distanceToSquared(Je))}this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&Gt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Gt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=e.position,n=e.normal,r=e.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==i.count)&&(a=new Yt(new Float32Array(4*i.count),4),this.setAttribute("tangent",a));let o=[],l=[];for(let x=0;x<i.count;x++)o[x]=new k,l[x]=new k;let c=new k,h=new k,f=new k,d=new At,u=new At,g=new At,y=new k,m=new k;function p(x,w,P){c.fromBufferAttribute(i,x),h.fromBufferAttribute(i,w),f.fromBufferAttribute(i,P),d.fromBufferAttribute(r,x),u.fromBufferAttribute(r,w),g.fromBufferAttribute(r,P),h.sub(c),f.sub(c),u.sub(d),g.sub(d);let D=1/(u.x*g.y-g.x*u.y);isFinite(D)&&(y.copy(h).multiplyScalar(g.y).addScaledVector(f,-u.y).multiplyScalar(D),m.copy(f).multiplyScalar(u.x).addScaledVector(h,-g.x).multiplyScalar(D),o[x].add(y),o[w].add(y),o[P].add(y),l[x].add(m),l[w].add(m),l[P].add(m))}let v=this.groups;v.length===0&&(v=[{start:0,count:t.count}]);for(let x=0,w=v.length;x<w;++x){let P=v[x],D=P.start,C=P.count;for(let F=D,A=D+C;F<A;F+=3)p(t.getX(F+0),t.getX(F+1),t.getX(F+2))}let M=new k,b=new k,S=new k,_=new k;function T(x){S.fromBufferAttribute(n,x),_.copy(S);let w=o[x];M.copy(w),M.sub(S.multiplyScalar(S.dot(w))).normalize(),b.crossVectors(_,w);let D=b.dot(l[x])<0?-1:1;a.setXYZW(x,M.x,M.y,M.z,D)}for(let x=0,w=v.length;x<w;++x){let P=v[x],D=P.start,C=P.count;for(let F=D,A=D+C;F<A;F+=3)T(t.getX(F+0)),T(t.getX(F+1)),T(t.getX(F+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==e.count)i=new Yt(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let d=0,u=i.count;d<u;d++)i.setXYZ(d,0,0,0);let n=new k,r=new k,a=new k,o=new k,l=new k,c=new k,h=new k,f=new k;if(t)for(let d=0,u=t.count;d<u;d+=3){let g=t.getX(d+0),y=t.getX(d+1),m=t.getX(d+2);n.fromBufferAttribute(e,g),r.fromBufferAttribute(e,y),a.fromBufferAttribute(e,m),h.subVectors(a,r),f.subVectors(n,r),h.cross(f),o.fromBufferAttribute(i,g),l.fromBufferAttribute(i,y),c.fromBufferAttribute(i,m),o.add(h),l.add(h),c.add(h),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(y,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,u=e.count;d<u;d+=3)n.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),a.fromBufferAttribute(e,d+2),h.subVectors(a,r),f.subVectors(n,r),h.cross(f),i.setXYZ(d+0,h.x,h.y,h.z),i.setXYZ(d+1,h.x,h.y,h.z),i.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)Je.fromBufferAttribute(t,e),Je.normalize(),t.setXYZ(e,Je.x,Je.y,Je.z)}toNonIndexed(){function t(o,l){let c=o.array,h=o.itemSize,f=o.normalized,d=new c.constructor(l.length*h),u=0,g=0;for(let y=0,m=l.length;y<m;y++){o.isInterleavedBufferAttribute?u=l[y]*o.data.stride+o.offset:u=l[y]*h;for(let p=0;p<h;p++)d[g++]=c[u++]}return new Yt(d,h,f)}if(this.index===null)return Ht("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new s,i=this.index.array,n=this.attributes;for(let o in n){let l=n[o],c=t(l,i);e.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,f=c.length;h<f;h++){let d=c[h],u=t(d,i);l.push(u)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let i=this.attributes;for(let l in i){let c=i[l];t.data.attributes[l]=c.toJSON(t.data)}let n={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let f=0,d=c.length;f<d;f++){let u=c[f];h.push(u.toJSON(t.data))}h.length>0&&(n[l]=h,r=!0)}r&&(t.data.morphAttributes=n,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone());let n=t.attributes;for(let c in n){let h=n[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],f=r[c];for(let d=0,u=f.length;d<u;d++)h.push(f[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let c=0,h=a.length;c<h;c++){let f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var nh=new k,Jp=new k,jp=new $t,Ui=class{constructor(t=new k(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,n){return this.normal.set(t,e,i),this.constant=n,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){let n=nh.subVectors(i,e).cross(Jp.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(n,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,i=!0){let n=t.delta(nh),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let a=-(t.start.dot(this.normal)+this.constant)/r;return i===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(n,a)}intersectsLine(t){let e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let i=e||jp.getNormalMatrix(t),n=this.coplanarPoint(nh).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-n.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},Qp=0,Oi=class extends Yi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Qp++}),this.uuid=ma(),this.name="",this.type="Material",this.blending=Gn,this.side=ji,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Eh,this.blendDst=Th,this.blendEquation=ds,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new at(0,0,0),this.blendAlpha=0,this.depthFunc=Hs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=$u,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=yo,this.stencilZFail=yo,this.stencilZPass=yo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let i=t[e];if(i===void 0){Ht(`Material: parameter '${e}' has value of undefined.`);continue}let n=this[e];if(n===void 0){Ht(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}n&&n.isColor?n.set(i):n&&n.isVector2&&i&&i.isVector2||n&&n.isEuler&&i&&i.isEuler||n&&n.isVector3&&i&&i.isVector3?n.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function n(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(e){let r=n(t.textures),a=n(t.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new at().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(i=>new Ui().fromJSON(i))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let i=t.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new At().fromArray(i)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new At().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,i=null;if(e!==null){let n=e.length;i=new Array(n);for(let r=0;r!==n;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var mn=new k,sh=new k,ja=new k,Qa=new k,qs=class{constructor(t=new k,e=new k(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,mn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=mn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(mn.copy(this.origin).addScaledVector(this.direction,e),mn.distanceToSquared(t))}distanceSqToSegment(t,e,i,n){sh.copy(t).add(e).multiplyScalar(.5),ja.copy(e).sub(t).normalize(),Qa.copy(this.origin).sub(sh);let r=t.distanceTo(e)*.5,a=-this.direction.dot(ja),o=Qa.dot(this.direction),l=-Qa.dot(ja),c=Qa.lengthSq(),h=Math.abs(1-a*a),f,d,u,g;if(h>0)if(f=a*l-o,d=a*o-l,g=r*h,f>=0)if(d>=-g)if(d<=g){let y=1/h;f*=y,d*=y,u=f*(f+a*d+2*o)+d*(a*f+d+2*l)+c}else d=r,f=Math.max(0,-(a*d+o)),u=-f*f+d*(d+2*l)+c;else d=-r,f=Math.max(0,-(a*d+o)),u=-f*f+d*(d+2*l)+c;else d<=-g?(f=Math.max(0,-(-a*r+o)),d=f>0?-r:Math.min(Math.max(-r,-l),r),u=-f*f+d*(d+2*l)+c):d<=g?(f=0,d=Math.min(Math.max(-r,-l),r),u=d*(d+2*l)+c):(f=Math.max(0,-(a*r+o)),d=f>0?r:Math.min(Math.max(-r,-l),r),u=-f*f+d*(d+2*l)+c);else d=a>0?-r:r,f=Math.max(0,-(a*d+o)),u=-f*f+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),n&&n.copy(sh).addScaledVector(ja,d),u}intersectSphere(t,e){if(t.radius<0)return null;mn.subVectors(t.center,this.origin);let i=mn.dot(this.direction),n=mn.dot(mn)-i*i,r=t.radius*t.radius;if(n>r)return null;let a=Math.sqrt(r-n),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){let i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,n,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,d=this.origin;return c>=0?(i=(t.min.x-d.x)*c,n=(t.max.x-d.x)*c):(i=(t.max.x-d.x)*c,n=(t.min.x-d.x)*c),h>=0?(r=(t.min.y-d.y)*h,a=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,a=(t.min.y-d.y)*h),i>a||r>n||((r>i||isNaN(i))&&(i=r),(a<n||isNaN(n))&&(n=a),f>=0?(o=(t.min.z-d.z)*f,l=(t.max.z-d.z)*f):(o=(t.max.z-d.z)*f,l=(t.min.z-d.z)*f),i>l||o>n)||((o>i||i!==i)&&(i=o),(l<n||n!==n)&&(n=l),n<0)?null:this.at(i>=0?i:n,e)}intersectsBox(t){return this.intersectBox(t,mn)!==null}intersectTriangle(t,e,i,n,r){let a=this.origin,o=this.direction,l=o.x,c=o.y,h=o.z,f=t.x-a.x,d=t.y-a.y,u=t.z-a.z,g=e.x-a.x,y=e.y-a.y,m=e.z-a.z,p=i.x-a.x,v=i.y-a.y,M=i.z-a.z,b=Math.abs(l),S=Math.abs(c),_=Math.abs(h),T,x,w,P,D,C,F,A,I,B,O,$;if(b>=S&&b>=_?(w=l,C=f,I=g,$=p,l>=0?(T=c,x=h,P=d,D=u,F=y,A=m,B=v,O=M):(T=h,x=c,P=u,D=d,F=m,A=y,B=M,O=v)):S>=_?(w=c,C=d,I=y,$=v,c>=0?(T=h,x=l,P=u,D=f,F=m,A=g,B=M,O=p):(T=l,x=h,P=f,D=u,F=g,A=m,B=p,O=M)):(w=h,C=u,I=m,$=M,h>=0?(T=l,x=c,P=f,D=d,F=g,A=y,B=p,O=v):(T=c,x=l,P=d,D=f,F=y,A=g,B=v,O=p)),w===0)return null;let L=T/w,z=x/w,G=1/w,rt=P-L*C,et=D-z*C,Et=F-L*I,vt=A-z*I,Tt=B-L*$,X=O-z*$,j=Tt*vt-X*Et,ct=rt*X-et*Tt,Mt=Et*et-vt*rt;if(n){if(j<0||ct<0||Mt<0)return null}else if((j<0||ct<0||Mt<0)&&(j>0||ct>0||Mt>0))return null;let dt=j+ct+Mt;if(dt===0)return null;let St=G*(j*C+ct*I+Mt*$);return(dt>0?St<0:St>0)?null:this.at(St/dt,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},re=class extends Oi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new at(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ri,this.combine=rl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},Qd=new ee,ns=new qs,to=new Ki,tu=new k,eo=new k,io=new k,no=new k,rh=new k,so=new k,eu=new k,ro=new k,yt=class extends De{constructor(t=new ne,e=new re){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let n=e[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=n.length;r<a;r++){let o=n[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let i=this.geometry,n=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;e.fromBufferAttribute(n,t);let o=this.morphTargetInfluences;if(r&&o){so.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],f=r[l];h!==0&&(rh.fromBufferAttribute(f,t),a?so.addScaledVector(rh,h):so.addScaledVector(rh.sub(e),h))}e.add(so)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let i=this.geometry,n=this.material,r=this.matrixWorld;n!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),to.copy(i.boundingSphere),to.applyMatrix4(r),ns.copy(t.ray).recast(t.near),!(to.containsPoint(ns.origin)===!1&&(ns.intersectSphere(to,tu)===null||ns.origin.distanceToSquared(tu)>(t.far-t.near)**2))&&(Qd.copy(r).invert(),ns.copy(t.ray).applyMatrix4(Qd),!(i.boundingBox!==null&&ns.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,ns)))}_computeIntersections(t,e,i){let n,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,f=r.attributes.normal,d=r.groups,u=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,y=d.length;g<y;g++){let m=d[g],p=a[m.materialIndex],v=Math.max(m.start,u.start),M=Math.min(o.count,Math.min(m.start+m.count,u.start+u.count));for(let b=v,S=M;b<S;b+=3){let _=o.getX(b),T=o.getX(b+1),x=o.getX(b+2);n=ao(this,p,t,i,c,h,f,_,T,x),n&&(n.faceIndex=Math.floor(b/3),n.face.materialIndex=m.materialIndex,e.push(n))}}else{let g=Math.max(0,u.start),y=Math.min(o.count,u.start+u.count);for(let m=g,p=y;m<p;m+=3){let v=o.getX(m),M=o.getX(m+1),b=o.getX(m+2);n=ao(this,a,t,i,c,h,f,v,M,b),n&&(n.faceIndex=Math.floor(m/3),e.push(n))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,y=d.length;g<y;g++){let m=d[g],p=a[m.materialIndex],v=Math.max(m.start,u.start),M=Math.min(l.count,Math.min(m.start+m.count,u.start+u.count));for(let b=v,S=M;b<S;b+=3){let _=b,T=b+1,x=b+2;n=ao(this,p,t,i,c,h,f,_,T,x),n&&(n.faceIndex=Math.floor(b/3),n.face.materialIndex=m.materialIndex,e.push(n))}}else{let g=Math.max(0,u.start),y=Math.min(l.count,u.start+u.count);for(let m=g,p=y;m<p;m+=3){let v=m,M=m+1,b=m+2;n=ao(this,a,t,i,c,h,f,v,M,b),n&&(n.faceIndex=Math.floor(m/3),e.push(n))}}}};function tm(s,t,e,i,n,r,a,o){let l;if(t.side===Xe?l=i.intersectTriangle(a,r,n,!0,o):l=i.intersectTriangle(n,r,a,t.side===ji,o),l===null)return null;ro.copy(o),ro.applyMatrix4(s.matrixWorld);let c=e.ray.origin.distanceTo(ro);return c<e.near||c>e.far?null:{distance:c,point:ro.clone(),object:s}}function ao(s,t,e,i,n,r,a,o,l,c){s.getVertexPosition(o,eo),s.getVertexPosition(l,io),s.getVertexPosition(c,no);let h=tm(s,t,e,i,eo,io,no,eu);if(h){let f=new k;Fn.getBarycoord(eu,eo,io,no,f),n&&(h.uv=Fn.getInterpolatedAttribute(n,o,l,c,f,new At)),r&&(h.uv1=Fn.getInterpolatedAttribute(r,o,l,c,f,new At)),a&&(h.normal=Fn.getInterpolatedAttribute(a,o,l,c,f,new k),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let d={a:o,b:l,c,normal:new k,materialIndex:0};Fn.getNormal(eo,io,no,d.normal),h.face=d,h.barycoord=f}return h}var Vr=class extends hi{constructor(t=null,e=1,i=1,n,r,a,o,l,c=je,h=je,f,d){super(null,a,o,l,c,h,n,r,f,d),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Xs=class extends Yt{constructor(t,e,i,n=1){super(t,e,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=n}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},Ns=new ee,iu=new ee,oo=[],nu=new Zi,em=new ee,Ar=new yt,Rr=new Ki,ti=class extends yt{constructor(t,e,i){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Xs(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let n=0;n<i;n++)this.setMatrixAt(n,em)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Zi),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,Ns),nu.copy(t.boundingBox).applyMatrix4(Ns),this.boundingBox.union(nu)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ki),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,Ns),Rr.copy(t.boundingSphere).applyMatrix4(Ns),this.boundingSphere.union(Rr)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let i=e.morphTargetInfluences,n=this.morphTexture.source.data.data,r=i.length+1,a=t*r+1;for(let o=0;o<i.length;o++)i[o]=n[a+o]}raycast(t,e){let i=this.matrixWorld,n=this.count;if(Ar.geometry=this.geometry,Ar.material=this.material,Ar.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Rr.copy(this.boundingSphere),Rr.applyMatrix4(i),t.ray.intersectsSphere(Rr)!==!1))for(let r=0;r<n;r++){this.getMatrixAt(r,Ns),iu.multiplyMatrices(i,Ns),Ar.matrixWorld=iu,Ar.raycast(t,oo);for(let a=0,o=oo.length;a<o;a++){let l=oo[a];l.instanceId=r,l.object=this,e.push(l)}oo.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new Xs(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let i=e.morphTargetInfluences,n=i.length+1;this.morphTexture===null&&(this.morphTexture=new Vr(new Float32Array(n*this.count),n,this.count,ul,Pi));let r=this.morphTexture.source.data.data,a=0;for(let c=0;c<i.length;c++)a+=i[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=n*t;return r[l]=o,r.set(i,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},ss=new Ki,im=new At(.5,.5),lo=new k,Ys=class{constructor(t=new Ui,e=new Ui,i=new Ui,n=new Ui,r=new Ui,a=new Ui){this.planes=[t,e,i,n,r,a]}set(t,e,i,n,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(i),o[3].copy(n),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=ki,i=!1){let n=this.planes,r=t.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],f=r[5],d=r[6],u=r[7],g=r[8],y=r[9],m=r[10],p=r[11],v=r[12],M=r[13],b=r[14],S=r[15];if(n[0].setComponents(c-a,u-h,p-g,S-v).normalize(),n[1].setComponents(c+a,u+h,p+g,S+v).normalize(),n[2].setComponents(c+o,u+f,p+y,S+M).normalize(),n[3].setComponents(c-o,u-f,p-y,S-M).normalize(),i)n[4].setComponents(l,d,m,b).normalize(),n[5].setComponents(c-l,u-d,p-m,S-b).normalize();else if(n[4].setComponents(c-l,u-d,p-m,S-b).normalize(),e===ki)n[5].setComponents(c+l,u+d,p+m,S+b).normalize();else if(e===Gs)n[5].setComponents(l,d,m,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ss.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ss.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ss)}intersectsSprite(t){ss.center.set(0,0,0);let e=im.distanceTo(t.center);return ss.radius=.7071067811865476+e,ss.applyMatrix4(t.matrixWorld),this.intersectsSphere(ss)}intersectsSphere(t){let e=this.planes,i=t.center,n=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<n)return!1;return!0}intersectsBox(t){let e=this.planes;for(let i=0;i<6;i++){let n=e[i];if(lo.x=n.normal.x>0?t.max.x:t.min.x,lo.y=n.normal.y>0?t.max.y:t.min.y,lo.z=n.normal.z>0?t.max.z:t.min.z,n.distanceToPoint(lo)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Po=class extends Oi{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new at(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},Io=new k,Lo=new k,su=new ee,Cr=new qs,co=new Ki,ah=new k,ru=new k,Do=class extends De{constructor(t=new ne,e=new Po){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,i=[0];for(let n=1,r=e.count;n<r;n++)Io.fromBufferAttribute(e,n-1),Lo.fromBufferAttribute(e,n),i[n]=i[n-1],i[n]+=Io.distanceTo(Lo);t.setAttribute("lineDistance",new Jt(i,1))}else Ht("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let i=this.geometry,n=this.matrixWorld,r=t.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),co.copy(i.boundingSphere),co.applyMatrix4(n),co.radius+=r,t.ray.intersectsSphere(co)===!1)return;su.copy(n).invert(),Cr.copy(t.ray).applyMatrix4(su);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=i.index,d=i.attributes.position;if(h!==null){let u=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let y=u,m=g-1;y<m;y+=c){let p=h.getX(y),v=h.getX(y+1),M=ho(this,t,Cr,l,p,v,y);M&&e.push(M)}if(this.isLineLoop){let y=h.getX(g-1),m=h.getX(u),p=ho(this,t,Cr,l,y,m,g-1);p&&e.push(p)}}else{let u=Math.max(0,a.start),g=Math.min(d.count,a.start+a.count);for(let y=u,m=g-1;y<m;y+=c){let p=ho(this,t,Cr,l,y,y+1,y);p&&e.push(p)}if(this.isLineLoop){let y=ho(this,t,Cr,l,g-1,u,g-1);y&&e.push(y)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let n=e[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=n.length;r<a;r++){let o=n[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function ho(s,t,e,i,n,r,a){let o=s.geometry.attributes.position;if(Io.fromBufferAttribute(o,n),Lo.fromBufferAttribute(o,r),e.distanceSqToSegment(Io,Lo,ah,ru)>i)return;ah.applyMatrix4(s.matrixWorld);let c=t.ray.origin.distanceTo(ah);if(!(c<t.near||c>t.far))return{distance:c,point:ru.clone().applyMatrix4(s.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:s}}var au=new k,ou=new k,Wr=class extends Do{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,i=[];for(let n=0,r=e.count;n<r;n+=2)au.fromBufferAttribute(e,n),ou.fromBufferAttribute(e,n+1),i[n]=n===0?0:i[n-1],i[n+1]=i[n]+au.distanceTo(ou);t.setAttribute("lineDistance",new Jt(i,1))}else Ht("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var Zs=class extends Oi{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new at(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},lu=new ee,gh=new qs,uo=new Ki,fo=new k,as=class extends De{constructor(t=new ne,e=new Zs){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let i=this.geometry,n=this.matrixWorld,r=t.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),uo.copy(i.boundingSphere),uo.applyMatrix4(n),uo.radius+=r,t.ray.intersectsSphere(uo)===!1)return;lu.copy(n).invert(),gh.copy(t.ray).applyMatrix4(lu);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,f=i.attributes.position;if(c!==null){let d=Math.max(0,a.start),u=Math.min(c.count,a.start+a.count);for(let g=d,y=u;g<y;g++){let m=c.getX(g);fo.fromBufferAttribute(f,m),cu(fo,m,l,n,t,e,this)}}else{let d=Math.max(0,a.start),u=Math.min(f.count,a.start+a.count);for(let g=d,y=u;g<y;g++)fo.fromBufferAttribute(f,g),cu(fo,g,l,n,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let n=e[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=n.length;r<a;r++){let o=n[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function cu(s,t,e,i,n,r,a){let o=gh.distanceSqToPoint(s);if(o<e){let l=new k;gh.closestPointToPoint(s,l),l.applyMatrix4(i);let c=n.ray.origin.distanceTo(l);if(c<n.near||c>n.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}var $r=class extends hi{constructor(t=[],e=Vn,i,n,r,a,o,l,c,h){super(t,e,i,n,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},os=class extends hi{constructor(t,e,i,n,r,a,o,l,c){super(t,e,i,n,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Nn=class extends hi{constructor(t,e,i=zi,n,r,a,o=je,l=je,c,h=Xi,f=1){if(h!==Xi&&h!==Wn)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:t,height:e,depth:f};super(d,n,r,a,o,l,h,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Ws(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},Fo=class extends Nn{constructor(t,e=zi,i=Vn,n,r,a=je,o=je,l,c=Xi){let h={width:t,height:t,depth:1},f=[h,h,h,h,h,h];super(t,t,e,i,n,r,a,o,l,c),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},qr=class extends hi{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},_e=class s extends ne{constructor(t=1,e=1,i=1,n=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:n,heightSegments:r,depthSegments:a};let o=this;n=Math.floor(n),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],f=[],d=0,u=0;g("z","y","x",-1,-1,i,e,t,a,r,0),g("z","y","x",1,-1,i,e,-t,a,r,1),g("x","z","y",1,1,t,i,e,n,a,2),g("x","z","y",1,-1,t,i,-e,n,a,3),g("x","y","z",1,-1,t,e,i,n,r,4),g("x","y","z",-1,-1,t,e,-i,n,r,5),this.setIndex(l),this.setAttribute("position",new Jt(c,3)),this.setAttribute("normal",new Jt(h,3)),this.setAttribute("uv",new Jt(f,2));function g(y,m,p,v,M,b,S,_,T,x,w){let P=b/T,D=S/x,C=b/2,F=S/2,A=_/2,I=T+1,B=x+1,O=0,$=0,L=new k;for(let z=0;z<B;z++){let G=z*D-F;for(let rt=0;rt<I;rt++){let et=rt*P-C;L[y]=et*v,L[m]=G*M,L[p]=A,c.push(L.x,L.y,L.z),L[y]=0,L[m]=0,L[p]=_>0?1:-1,h.push(L.x,L.y,L.z),f.push(rt/T),f.push(1-z/x),O+=1}}for(let z=0;z<x;z++)for(let G=0;G<T;G++){let rt=d+G+I*z,et=d+G+I*(z+1),Et=d+(G+1)+I*(z+1),vt=d+(G+1)+I*z;l.push(rt,et,vt),l.push(et,Et,vt),$+=6}o.addGroup(u,$,w),u+=$,d+=O}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},Xr=class s extends ne{constructor(t=1,e=1,i=4,n=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:t,height:e,capSegments:i,radialSegments:n,heightSegments:r},e=Math.max(0,e),i=Math.max(1,Math.floor(i)),n=Math.max(3,Math.floor(n)),r=Math.max(1,Math.floor(r));let a=[],o=[],l=[],c=[],h=e/2,f=Math.PI/2*t,d=e,u=2*f+d,g=i*2+r,y=n+1,m=new k,p=new k;for(let v=0;v<=g;v++){let M=0,b=0,S=0,_=0;if(v<=i){let w=v/i,P=w*Math.PI/2;b=-h-t*Math.cos(P),S=t*Math.sin(P),_=-t*Math.cos(P),M=w*f}else if(v<=i+r){let w=(v-i)/r;b=-h+w*e,S=t,_=0,M=f+w*d}else{let w=(v-i-r)/i,P=w*Math.PI/2;b=h+t*Math.sin(P),S=t*Math.cos(P),_=t*Math.sin(P),M=f+d+w*f}let T=Math.max(0,Math.min(1,M/u)),x=0;v===0?x=.5/n:v===g&&(x=-.5/n);for(let w=0;w<=n;w++){let P=w/n,D=P*Math.PI*2,C=Math.sin(D),F=Math.cos(D);p.x=-S*F,p.y=b,p.z=S*C,o.push(p.x,p.y,p.z),m.set(-S*F,_,S*C),m.normalize(),l.push(m.x,m.y,m.z),c.push(P+x,T)}if(v>0){let w=(v-1)*y;for(let P=0;P<n;P++){let D=w+P,C=w+P+1,F=v*y+P,A=v*y+P+1;a.push(D,C,F),a.push(C,A,F)}}}this.setIndex(a),this.setAttribute("position",new Jt(o,3)),this.setAttribute("normal",new Jt(l,3)),this.setAttribute("uv",new Jt(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.height,t.capSegments,t.radialSegments,t.heightSegments)}},yn=class s extends ne{constructor(t=1,e=32,i=0,n=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:i,thetaLength:n},e=Math.max(3,e);let r=[],a=[],o=[],l=[],c=new k,h=new At;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let f=0,d=3;f<=e;f++,d+=3){let u=i+f/e*n;c.x=t*Math.cos(u),c.y=t*Math.sin(u),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[d]/t+1)/2,h.y=(a[d+1]/t+1)/2,l.push(h.x,h.y)}for(let f=1;f<=e;f++)r.push(f,f+1,0);this.setIndex(r),this.setAttribute("position",new Jt(a,3)),this.setAttribute("normal",new Jt(o,3)),this.setAttribute("uv",new Jt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.segments,t.thetaStart,t.thetaLength)}},qe=class s extends ne{constructor(t=1,e=1,i=1,n=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:n,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;n=Math.floor(n),r=Math.floor(r);let h=[],f=[],d=[],u=[],g=0,y=[],m=i/2,p=0;v(),a===!1&&(t>0&&M(!0),e>0&&M(!1)),this.setIndex(h),this.setAttribute("position",new Jt(f,3)),this.setAttribute("normal",new Jt(d,3)),this.setAttribute("uv",new Jt(u,2));function v(){let b=new k,S=new k,_=0,T=(e-t)/i;for(let x=0;x<=r;x++){let w=[],P=x/r,D=P*(e-t)+t;for(let C=0;C<=n;C++){let F=C/n,A=F*l+o,I=Math.sin(A),B=Math.cos(A);S.x=D*I,S.y=-P*i+m,S.z=D*B,f.push(S.x,S.y,S.z),b.set(I,T,B).normalize(),d.push(b.x,b.y,b.z),u.push(F,1-P),w.push(g++)}y.push(w)}for(let x=0;x<n;x++)for(let w=0;w<r;w++){let P=y[w][x],D=y[w+1][x],C=y[w+1][x+1],F=y[w][x+1];(t>0||w!==0)&&(h.push(P,D,F),_+=3),(e>0||w!==r-1)&&(h.push(D,C,F),_+=3)}c.addGroup(p,_,0),p+=_}function M(b){let S=g,_=new At,T=new k,x=0,w=b===!0?t:e,P=b===!0?1:-1;for(let C=1;C<=n;C++)f.push(0,m*P,0),d.push(0,P,0),u.push(.5,.5),g++;let D=g;for(let C=0;C<=n;C++){let A=C/n*l+o,I=Math.cos(A),B=Math.sin(A);T.x=w*B,T.y=m*P,T.z=w*I,f.push(T.x,T.y,T.z),d.push(0,P,0),_.x=I*.5+.5,_.y=B*.5*P+.5,u.push(_.x,_.y),g++}for(let C=0;C<n;C++){let F=S+C,A=D+C;b===!0?h.push(A,A+1,F):h.push(A+1,A,F),x+=3}c.addGroup(p,x,b===!0?1:2),p+=x}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Yr=class s extends qe{constructor(t=1,e=1,i=32,n=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,i,n,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:i,heightSegments:n,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new s(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},No=class s extends ne{constructor(t=[],e=[],i=1,n=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:i,detail:n};let r=[],a=[];o(n),c(i),h(),this.setAttribute("position",new Jt(r,3)),this.setAttribute("normal",new Jt(r.slice(),3)),this.setAttribute("uv",new Jt(a,2)),n===0?this.computeVertexNormals():this.normalizeNormals();function o(v){let M=new k,b=new k,S=new k;for(let _=0;_<e.length;_+=3)u(e[_+0],M),u(e[_+1],b),u(e[_+2],S),l(M,b,S,v)}function l(v,M,b,S){let _=S+1,T=[];for(let x=0;x<=_;x++){T[x]=[];let w=v.clone().lerp(b,x/_),P=M.clone().lerp(b,x/_),D=_-x;for(let C=0;C<=D;C++)C===0&&x===_?T[x][C]=w:T[x][C]=w.clone().lerp(P,C/D)}for(let x=0;x<_;x++)for(let w=0;w<2*(_-x)-1;w++){let P=Math.floor(w/2);w%2===0?(d(T[x][P+1]),d(T[x+1][P]),d(T[x][P])):(d(T[x][P+1]),d(T[x+1][P+1]),d(T[x+1][P]))}}function c(v){let M=new k;for(let b=0;b<r.length;b+=3)M.x=r[b+0],M.y=r[b+1],M.z=r[b+2],M.normalize().multiplyScalar(v),r[b+0]=M.x,r[b+1]=M.y,r[b+2]=M.z}function h(){let v=new k;for(let M=0;M<r.length;M+=3){v.x=r[M+0],v.y=r[M+1],v.z=r[M+2];let b=m(v)/2/Math.PI+.5,S=p(v)/Math.PI+.5;a.push(b,1-S)}g(),f()}function f(){for(let v=0;v<a.length;v+=6){let M=a[v+0],b=a[v+2],S=a[v+4],_=Math.max(M,b,S),T=Math.min(M,b,S);_>.9&&T<.1&&(M<.2&&(a[v+0]+=1),b<.2&&(a[v+2]+=1),S<.2&&(a[v+4]+=1))}}function d(v){r.push(v.x,v.y,v.z)}function u(v,M){let b=v*3;M.x=t[b+0],M.y=t[b+1],M.z=t[b+2]}function g(){let v=new k,M=new k,b=new k,S=new k,_=new At,T=new At,x=new At;for(let w=0,P=0;w<r.length;w+=9,P+=6){v.set(r[w+0],r[w+1],r[w+2]),M.set(r[w+3],r[w+4],r[w+5]),b.set(r[w+6],r[w+7],r[w+8]),_.set(a[P+0],a[P+1]),T.set(a[P+2],a[P+3]),x.set(a[P+4],a[P+5]),S.copy(v).add(M).add(b).divideScalar(3);let D=m(S);y(_,P+0,v,D),y(T,P+2,M,D),y(x,P+4,b,D)}}function y(v,M,b,S){S<0&&v.x===1&&(a[M]=v.x-1),b.x===0&&b.z===0&&(a[M]=S/2/Math.PI+.5)}function m(v){return Math.atan2(v.z,-v.x)}function p(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.vertices,t.indices,t.radius,t.detail)}};var Ci=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Ht("Curve: .getPoint() not implemented.")}getPointAt(t,e){let i=this.getUtoTmapping(t);return this.getPoint(i,e)}getPoints(t=5){let e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return e}getSpacedPoints(t=5){let e=[];for(let i=0;i<=t;i++)e.push(this.getPointAt(i/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],i,n=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)i=this.getPoint(a/t),r+=i.distanceTo(n),e.push(r),n=i;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let i=this.getLengths(),n=0,r=i.length,a;e?a=e:a=t*i[r-1];let o=0,l=r-1,c;for(;o<=l;)if(n=Math.floor(o+(l-o)/2),c=i[n]-a,c<0)o=n+1;else if(c>0)l=n-1;else{l=n;break}if(n=l,i[n]===a)return n/(r-1);let h=i[n],d=i[n+1]-h,u=(a-h)/d;return(n+u)/(r-1)}getTangent(t,e){let n=t-1e-4,r=t+1e-4;n<0&&(n=0),r>1&&(r=1);let a=this.getPoint(n),o=this.getPoint(r),l=e||(a.isVector2?new At:new k);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){let i=this.getUtoTmapping(t);return this.getTangent(i,e)}computeFrenetFrames(t,e=!1){let i=new k,n=[],r=[],a=[],o=new k,l=new ee;for(let u=0;u<=t;u++){let g=u/t;n[u]=this.getTangentAt(g,new k)}r[0]=new k,a[0]=new k;let c=Number.MAX_VALUE,h=Math.abs(n[0].x),f=Math.abs(n[0].y),d=Math.abs(n[0].z);h<=c&&(c=h,i.set(1,0,0)),f<=c&&(c=f,i.set(0,1,0)),d<=c&&i.set(0,0,1),o.crossVectors(n[0],i).normalize(),r[0].crossVectors(n[0],o),a[0].crossVectors(n[0],r[0]);for(let u=1;u<=t;u++){if(r[u]=r[u-1].clone(),a[u]=a[u-1].clone(),o.crossVectors(n[u-1],n[u]),o.length()>Number.EPSILON){o.normalize();let g=Math.acos(ie(n[u-1].dot(n[u]),-1,1));r[u].applyMatrix4(l.makeRotationAxis(o,g))}a[u].crossVectors(n[u],r[u])}if(e===!0){let u=Math.acos(ie(r[0].dot(r[t]),-1,1));u/=t,n[0].dot(o.crossVectors(r[0],r[t]))>0&&(u=-u);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(n[g],u*g)),a[g].crossVectors(n[g],r[g])}return{tangents:n,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},Zr=class extends Ci{constructor(t=0,e=0,i=1,n=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=i,this.yRadius=n,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e=new At){let i=e,n=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=n;for(;r>n;)r-=n;r<Number.EPSILON&&(a?r=0:r=n),this.aClockwise===!0&&!a&&(r===n?r=-n:r=r-n);let o=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),f=Math.sin(this.aRotation),d=l-this.aX,u=c-this.aY;l=d*h-u*f+this.aX,c=d*f+u*h+this.aY}return i.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},Uo=class extends Zr{constructor(t,e,i,n,r,a){super(t,e,i,i,n,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function Gh(){let s=0,t=0,e=0,i=0;function n(r,a,o,l){s=r,t=o,e=-3*r+3*a-2*o-l,i=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){n(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,f){let d=(a-r)/c-(o-r)/(c+h)+(o-a)/h,u=(o-a)/h-(l-a)/(h+f)+(l-o)/f;d*=h,u*=h,n(a,o,d,u)},calc:function(r){let a=r*r,o=a*r;return s+t*r+e*a+i*o}}}var hu=new k,du=new k,oh=new Gh,lh=new Gh,ch=new Gh,Ks=class extends Ci{constructor(t=[],e=!1,i="centripetal",n=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=i,this.tension=n}getPoint(t,e=new k){let i=e,n=this.points,r=n.length,a=(r-(this.closed?0:1))*t,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=n[(o-1)%r]:(du.subVectors(n[0],n[1]).add(n[0]),c=du);let f=n[o%r],d=n[(o+1)%r];if(this.closed||o+2<r?h=n[(o+2)%r]:(hu.subVectors(n[r-1],n[r-2]).add(n[r-1]),h=hu),this.curveType==="centripetal"||this.curveType==="chordal"){let u=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(f),u),y=Math.pow(f.distanceToSquared(d),u),m=Math.pow(d.distanceToSquared(h),u);y<1e-4&&(y=1),g<1e-4&&(g=y),m<1e-4&&(m=y),oh.initNonuniformCatmullRom(c.x,f.x,d.x,h.x,g,y,m),lh.initNonuniformCatmullRom(c.y,f.y,d.y,h.y,g,y,m),ch.initNonuniformCatmullRom(c.z,f.z,d.z,h.z,g,y,m)}else this.curveType==="catmullrom"&&(oh.initCatmullRom(c.x,f.x,d.x,h.x,this.tension),lh.initCatmullRom(c.y,f.y,d.y,h.y,this.tension),ch.initCatmullRom(c.z,f.z,d.z,h.z,this.tension));return i.set(oh.calc(l),lh.calc(l),ch.calc(l)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let n=t.points[e];this.points.push(n.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){let n=this.points[e];t.points.push(n.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let n=t.points[e];this.points.push(new k().fromArray(n))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function uu(s,t,e,i,n){let r=(i-t)*.5,a=(n-e)*.5,o=s*s,l=s*o;return(2*e-2*i+r+a)*l+(-3*e+3*i-2*r-a)*o+r*s+e}function nm(s,t){let e=1-s;return e*e*t}function sm(s,t){return 2*(1-s)*s*t}function rm(s,t){return s*s*t}function Pr(s,t,e,i){return nm(s,t)+sm(s,e)+rm(s,i)}function am(s,t){let e=1-s;return e*e*e*t}function om(s,t){let e=1-s;return 3*e*e*s*t}function lm(s,t){return 3*(1-s)*s*s*t}function cm(s,t){return s*s*s*t}function Ir(s,t,e,i,n){return am(s,t)+om(s,e)+lm(s,i)+cm(s,n)}var ko=class extends Ci{constructor(t=new At,e=new At,i=new At,n=new At){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=i,this.v3=n}getPoint(t,e=new At){let i=e,n=this.v0,r=this.v1,a=this.v2,o=this.v3;return i.set(Ir(t,n.x,r.x,a.x,o.x),Ir(t,n.y,r.y,a.y,o.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Bo=class extends Ci{constructor(t=new k,e=new k,i=new k,n=new k){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=i,this.v3=n}getPoint(t,e=new k){let i=e,n=this.v0,r=this.v1,a=this.v2,o=this.v3;return i.set(Ir(t,n.x,r.x,a.x,o.x),Ir(t,n.y,r.y,a.y,o.y),Ir(t,n.z,r.z,a.z,o.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Oo=class extends Ci{constructor(t=new At,e=new At){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new At){let i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new At){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Ho=class extends Ci{constructor(t=new k,e=new k){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new k){let i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new k){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},zo=class extends Ci{constructor(t=new At,e=new At,i=new At){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new At){let i=e,n=this.v0,r=this.v1,a=this.v2;return i.set(Pr(t,n.x,r.x,a.x),Pr(t,n.y,r.y,a.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Kr=class extends Ci{constructor(t=new k,e=new k,i=new k){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new k){let i=e,n=this.v0,r=this.v1,a=this.v2;return i.set(Pr(t,n.x,r.x,a.x),Pr(t,n.y,r.y,a.y),Pr(t,n.z,r.z,a.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Go=class extends Ci{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new At){let i=e,n=this.points,r=(n.length-1)*t,a=Math.floor(r),o=r-a,l=n[a===0?a:a-1],c=n[a],h=n[a>n.length-2?n.length-1:a+1],f=n[a>n.length-3?n.length-1:a+2];return i.set(uu(o,l.x,c.x,h.x,f.x),uu(o,l.y,c.y,h.y,f.y)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let n=t.points[e];this.points.push(n.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){let n=this.points[e];t.points.push(n.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let n=t.points[e];this.points.push(new At().fromArray(n))}return this}},hm=Object.freeze({__proto__:null,ArcCurve:Uo,CatmullRomCurve3:Ks,CubicBezierCurve:ko,CubicBezierCurve3:Bo,EllipseCurve:Zr,LineCurve:Oo,LineCurve3:Ho,QuadraticBezierCurve:zo,QuadraticBezierCurve3:Kr,SplineCurve:Go});var Jr=class s extends No{constructor(t=1,e=0){let i=(1+Math.sqrt(5))/2,n=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(n,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new s(t.radius,t.detail)}};var Te=class s extends ne{constructor(t=1,e=1,i=1,n=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:n};let r=t/2,a=e/2,o=Math.floor(i),l=Math.floor(n),c=o+1,h=l+1,f=t/o,d=e/l,u=[],g=[],y=[],m=[];for(let p=0;p<h;p++){let v=p*d-a;for(let M=0;M<c;M++){let b=M*f-r;g.push(b,-v,0),y.push(0,0,1),m.push(M/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let v=0;v<o;v++){let M=v+c*p,b=v+c*(p+1),S=v+1+c*(p+1),_=v+1+c*p;u.push(M,b,_),u.push(b,S,_)}this.setIndex(u),this.setAttribute("position",new Jt(g,3)),this.setAttribute("normal",new Jt(y,3)),this.setAttribute("uv",new Jt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.widthSegments,t.heightSegments)}},Un=class s extends ne{constructor(t=.5,e=1,i=32,n=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:i,phiSegments:n,thetaStart:r,thetaLength:a},i=Math.max(3,i),n=Math.max(1,n);let o=[],l=[],c=[],h=[],f=t,d=(e-t)/n,u=new k,g=new At;for(let y=0;y<=n;y++){for(let m=0;m<=i;m++){let p=r+m/i*a;u.x=f*Math.cos(p),u.y=f*Math.sin(p),l.push(u.x,u.y,u.z),c.push(0,0,1),g.x=(u.x/e+1)/2,g.y=(u.y/e+1)/2,h.push(g.x,g.y)}f+=d}for(let y=0;y<n;y++){let m=y*(i+1);for(let p=0;p<i;p++){let v=p+m,M=v,b=v+i+1,S=v+i+2,_=v+1;o.push(M,b,_),o.push(b,S,_)}}this.setIndex(o),this.setAttribute("position",new Jt(l,3)),this.setAttribute("normal",new Jt(c,3)),this.setAttribute("uv",new Jt(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}};var Ji=class s extends ne{constructor(t=1,e=32,i=16,n=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:n,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));let l=Math.min(a+o,Math.PI),c=0,h=[],f=new k,d=new k,u=[],g=[],y=[],m=[];for(let p=0;p<=i;p++){let v=[],M=p/i,b=a+M*o,S=t*Math.cos(b),_=Math.sqrt(t*t-S*S),T=0;p===0&&a===0?T=.5/e:p===i&&l===Math.PI&&(T=-.5/e);for(let x=0;x<=e;x++){let w=x/e,P=n+w*r;f.x=-_*Math.cos(P),f.y=S,f.z=_*Math.sin(P),g.push(f.x,f.y,f.z),d.copy(f).normalize(),y.push(d.x,d.y,d.z),m.push(w+T,1-M),v.push(c++)}h.push(v)}for(let p=0;p<i;p++)for(let v=0;v<e;v++){let M=h[p][v+1],b=h[p][v],S=h[p+1][v],_=h[p+1][v+1];(p!==0||a>0)&&u.push(M,b,_),(p!==i-1||l<Math.PI)&&u.push(b,S,_)}this.setIndex(u),this.setAttribute("position",new Jt(g,3)),this.setAttribute("normal",new Jt(y,3)),this.setAttribute("uv",new Jt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var jr=class s extends ne{constructor(t=new Kr(new k(-1,-1,0),new k(-1,1,0),new k(1,1,0)),e=64,i=1,n=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:i,radialSegments:n,closed:r};let a=t.computeFrenetFrames(e,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new k,l=new k,c=new At,h=new k,f=[],d=[],u=[],g=[];y(),this.setIndex(g),this.setAttribute("position",new Jt(f,3)),this.setAttribute("normal",new Jt(d,3)),this.setAttribute("uv",new Jt(u,2));function y(){for(let M=0;M<e;M++)m(M);m(r===!1?e:0),v(),p()}function m(M){h=t.getPointAt(M/e,h);let b=a.normals[M],S=a.binormals[M];for(let _=0;_<=n;_++){let T=_/n*Math.PI*2,x=Math.sin(T),w=-Math.cos(T);l.x=w*b.x+x*S.x,l.y=w*b.y+x*S.y,l.z=w*b.z+x*S.z,l.normalize(),d.push(l.x,l.y,l.z),o.x=h.x+i*l.x,o.y=h.y+i*l.y,o.z=h.z+i*l.z,f.push(o.x,o.y,o.z)}}function p(){for(let M=1;M<=e;M++)for(let b=1;b<=n;b++){let S=(n+1)*(M-1)+(b-1),_=(n+1)*M+(b-1),T=(n+1)*M+b,x=(n+1)*(M-1)+b;g.push(S,_,x),g.push(_,T,x)}}function v(){for(let M=0;M<=e;M++)for(let b=0;b<=n;b++)c.x=M/e,c.y=b/n,u.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new s(new hm[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}};function fs(s){let t={};for(let e in s){t[e]={};for(let i in s[e]){let n=s[e][i];if(fu(n))n.isRenderTargetTexture?(Ht("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=n.clone();else if(Array.isArray(n))if(fu(n[0])){let r=[];for(let a=0,o=n.length;a<o;a++)r[a]=n[a].clone();t[e][i]=r}else t[e][i]=n.slice();else t[e][i]=n}}return t}function li(s){let t={};for(let e=0;e<s.length;e++){let i=fs(s[e]);for(let n in i)t[n]=i[n]}return t}function fu(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}function dm(s){let t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function Vh(s){let t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:se.workingColorSpace}var rf={clone:fs,merge:li},um=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,fm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Ce=class extends Oi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=um,this.fragmentShader=fm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=fs(t.uniforms),this.uniformsGroups=dm(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let n in this.uniforms){let a=this.uniforms[n].value;a&&a.isTexture?e.uniforms[n]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[n]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[n]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[n]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[n]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[n]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[n]={type:"m4",value:a.toArray()}:e.uniforms[n]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let i={};for(let n in this.extensions)this.extensions[n]===!0&&(i[n]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let i in t.uniforms){let n=t.uniforms[i];switch(this.uniforms[i]={},n.type){case"t":this.uniforms[i].value=e[n.value]||null;break;case"c":this.uniforms[i].value=new at().setHex(n.value);break;case"v2":this.uniforms[i].value=new At().fromArray(n.value);break;case"v3":this.uniforms[i].value=new k().fromArray(n.value);break;case"v4":this.uniforms[i].value=new Re().fromArray(n.value);break;case"m3":this.uniforms[i].value=new $t().fromArray(n.value);break;case"m4":this.uniforms[i].value=new ee().fromArray(n.value);break;default:this.uniforms[i].value=n.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let i in t.extensions)this.extensions[i]=t.extensions[i];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},Vo=class extends Ce{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Ot=class extends Oi{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new at(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new at(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=pa,this.normalScale=new At(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ri,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},Qr=class extends Ot{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new At(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return ie(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new at(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new at(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new at(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(t){this._retroreflectivity>0!=t>0&&this.version++,this._retroreflectivity=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.retroreflectivity=t.retroreflectivity,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}};var ta=class extends Oi{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new at(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new at(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=pa,this.normalScale=new At(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ri,this.combine=rl,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},Wo=class extends Oi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Vu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},$o=class extends Oi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function Us(s,t){return!s||s.constructor===t?s:typeof t.BYTES_PER_ELEMENT=="number"?new t(s):Array.prototype.slice.call(s)}function hh(s){return s!==void 0&&s.inTangents!==void 0&&s.outTangents!==void 0}var kn=class{constructor(t,e,i,n){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=n!==void 0?n:new e.constructor(i),this.sampleValues=e,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,i=this._cachedIndex,n=e[i],r=e[i-1];i:{t:{let a;e:{n:if(!(t<n)){for(let o=i+2;;){if(n===void 0){if(t<r)break n;return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(r=n,n=e[++i],t<n)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(i=2,r=o);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(n=r,r=e[--i-1],t>=r)break t}a=i,i=0;break e}break i}for(;i<a;){let o=i+a>>>1;t<e[o]?a=o:i=o+1}if(n=e[i],r=e[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===void 0)return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,n)}return this.interpolate_(i,r,t,n)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,i=this.sampleValues,n=this.valueSize,r=t*n;for(let a=0;a!==n;++a)e[a]=i[r+a];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},qo=class extends kn{constructor(t,e,i,n){super(t,e,i,n),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:fh,endingEnd:fh}}intervalChanged_(t,e,i){let n=this.parameterPositions,r=t-2,a=t+1,o=n[r],l=n[a];if(o===void 0)switch(this.getSettings_().endingStart){case ph:r=t,o=2*e-i;break;case mh:r=n.length-2,o=e+n[r]-n[r+1];break;default:r=t,o=i}if(l===void 0)switch(this.getSettings_().endingEnd){case ph:a=t,l=2*i-e;break;case mh:a=1,l=i+n[1]-n[0];break;default:a=t-1,l=e}let c=(i-e)*.5,h=this.valueSize;this._weightPrev=c/(e-o),this._weightNext=c/(l-i),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(t,e,i,n){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this._offsetPrev,f=this._offsetNext,d=this._weightPrev,u=this._weightNext,g=(i-e)/(n-e),y=g*g,m=y*g,p=-d*m+2*d*y-d*g,v=(1+d)*m+(-1.5-2*d)*y+(-.5+d)*g+1,M=(-1-u)*m+(1.5+u)*y+.5*g,b=u*m-u*y;for(let S=0;S!==o;++S)r[S]=p*a[h+S]+v*a[c+S]+M*a[l+S]+b*a[f+S];return r}},Xo=class extends kn{constructor(t,e,i,n){super(t,e,i,n)}interpolate_(t,e,i,n){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=(i-e)/(n-e),f=1-h;for(let d=0;d!==o;++d)r[d]=a[c+d]*f+a[l+d]*h;return r}},Yo=class extends kn{constructor(t,e,i,n){super(t,e,i,n)}interpolate_(t){return this.copySampleValue_(t-1)}},Zo=class extends kn{interpolate_(t,e,i,n){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this.inTangents,f=this.outTangents;if(!h||!f){let g=(i-e)/(n-e),y=1-g;for(let m=0;m!==o;++m)r[m]=a[c+m]*y+a[l+m]*g;return r}let d=o*2,u=t-1;for(let g=0;g!==o;++g){let y=a[c+g],m=a[l+g],p=u*d+g*2,v=f[p],M=f[p+1],b=t*d+g*2,S=h[b],_=h[b+1],T=mm(i,e,v,S,n);r[g]=af(T,y,M,_,m)}return r}};function af(s,t,e,i,n){let r=1-s;return r*r*r*t+3*r*r*s*e+3*r*s*s*i+s*s*s*n}function pm(s,t,e,i,n){let r=1-s;return 3*r*r*(e-t)+6*r*s*(i-e)+3*s*s*(n-i)}function mm(s,t,e,i,n){let r=(s-t)/(n-t);for(let a=0;a<8;a++){let o=af(r,t,e,i,n)-s;if(Math.abs(o)<1e-10)break;let l=pm(r,t,e,i,n);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-o/l))}return r}var wi=class{constructor(t,e,i,n){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Us(e,this.TimeBufferType),this.values=Us(i,this.ValueBufferType),this.setInterpolation(n||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,i;if(e.toJSON!==this.toJSON)i=e.toJSON(t);else{i={name:t.name,times:Us(t.times,Array),values:Us(t.values,Array)};let n=t.getInterpolation();n!==t.DefaultInterpolation&&(i.interpolation=n),hh(t.settings)&&(i.settings={inTangents:Us(t.settings.inTangents,Array),outTangents:Us(t.settings.outTangents,Array)})}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new Yo(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Xo(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new qo(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new Zo(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case Lr:e=this.InterpolantFactoryMethodDiscrete;break;case To:e=this.InterpolantFactoryMethodLinear;break;case go:e=this.InterpolantFactoryMethodSmooth;break;case uh:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return Ht("KeyframeTrack:",i),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Lr;case this.InterpolantFactoryMethodLinear:return To;case this.InterpolantFactoryMethodSmooth:return go;case this.InterpolantFactoryMethodBezier:return uh}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let i=0,n=e.length;i!==n;++i)e[i]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let i=0,n=e.length;i!==n;++i)e[i]*=t;hh(this.settings)&&(pu(this.settings.inTangents,t),pu(this.settings.outTangents,t))}return this}trim(t,e){let i=this.times,n=i.length,r=0,a=n-1;for(;r!==n&&i[r]<t;)++r;for(;a!==-1&&i[a]>e;)--a;if(++a,r!==0||a!==n){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=i.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(Gt("KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,n=this.values,r=i.length;r===0&&(Gt("KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let l=i[o];if(typeof l=="number"&&isNaN(l)){Gt("KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(a!==null&&a>l){Gt("KeyframeTrack: Out of order keys.",this,o,l,a),t=!1;break}a=l}if(n!==void 0&&Up(n))for(let o=0,l=n.length;o!==l;++o){let c=n[o];if(isNaN(c)){Gt("KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),i=this.getValueSize(),n=this.getInterpolation()===go,r=t.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=t[o],h=t[o+1];if(c!==h&&(o!==1||c!==t[0]))if(n)l=!0;else{let f=o*i,d=f-i,u=f+i;for(let g=0;g!==i;++g){let y=e[f+g];if(y!==e[d+g]||y!==e[u+g]){l=!0;break}}}if(l){if(o!==a){t[a]=t[o];let f=o*i,d=a*i;for(let u=0;u!==i;++u)e[d+u]=e[f+u]}++a}}if(r>0){t[a]=t[r];for(let o=r*i,l=a*i,c=0;c!==i;++c)e[l+c]=e[o+c];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*i)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),i=this.constructor,n=new i(this.name,t,e);return n.createInterpolant=this.createInterpolant,hh(this.settings)&&(n.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),n}};function pu(s,t){for(let e=0,i=s.length;e!==i;e+=2)s[e]*=t}wi.prototype.ValueTypeName="";wi.prototype.TimeBufferType=Float32Array;wi.prototype.ValueBufferType=Float32Array;wi.prototype.DefaultInterpolation=To;var Bn=class extends wi{constructor(t,e,i){super(t,e,i)}};Bn.prototype.ValueTypeName="bool";Bn.prototype.ValueBufferType=Array;Bn.prototype.DefaultInterpolation=Lr;Bn.prototype.InterpolantFactoryMethodLinear=void 0;Bn.prototype.InterpolantFactoryMethodSmooth=void 0;var Ko=class extends wi{constructor(t,e,i,n){super(t,e,i,n)}};Ko.prototype.ValueTypeName="color";var Jo=class extends wi{constructor(t,e,i,n){super(t,e,i,n)}};Jo.prototype.ValueTypeName="number";var jo=class extends kn{constructor(t,e,i,n){super(t,e,i,n)}interpolate_(t,e,i,n){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(i-e)/(n-e),c=t*o;for(let h=c+o;c!==h;c+=4)$e.slerpFlat(r,0,a,c-o,a,c,l);return r}},ea=class extends wi{constructor(t,e,i,n){super(t,e,i,n)}InterpolantFactoryMethodLinear(t){return new jo(this.times,this.values,this.getValueSize(),t)}};ea.prototype.ValueTypeName="quaternion";ea.prototype.InterpolantFactoryMethodSmooth=void 0;var On=class extends wi{constructor(t,e,i){super(t,e,i)}};On.prototype.ValueTypeName="string";On.prototype.ValueBufferType=Array;On.prototype.DefaultInterpolation=Lr;On.prototype.InterpolantFactoryMethodLinear=void 0;On.prototype.InterpolantFactoryMethodSmooth=void 0;var Qo=class extends wi{constructor(t,e,i,n){super(t,e,i,n)}};Qo.prototype.ValueTypeName="vector";var tl=class{constructor(t,e,i){let n=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this._abortController=null,this.itemStart=function(h){o++,r===!1&&n.onStart!==void 0&&n.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,n.onProgress!==void 0&&n.onProgress(h,a,o),a===o&&(r=!1,n.onLoad!==void 0&&n.onLoad())},this.itemError=function(h){n.onError!==void 0&&n.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,f){return c.push(h,f),this},this.removeHandler=function(h){let f=c.indexOf(h);return f!==-1&&c.splice(f,2),this},this.getHandler=function(h){for(let f=0,d=c.length;f<d;f+=2){let u=c[f],g=c[f+1];if(u.global&&(u.lastIndex=0),u.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},of=new tl,el=class{constructor(t){this.manager=t!==void 0?t:of,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let i=this;return new Promise(function(n,r){i.load(t,n,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};el.DEFAULT_MATERIAL_NAME="__DEFAULT";var ls=class extends De{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new at(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},cs=class extends ls{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(De.DEFAULT_UP),this.updateMatrix(),this.groundColor=new at(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},dh=new ee,mu=new k,gu=new k,Js=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new At(512,512),this.mapType=gi,this.map=null,this.mapPass=null,this.matrix=new ee,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ys,this._frameExtents=new At(1,1),this._viewportCount=1,this._viewports=[new Re(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;mu.setFromMatrixPosition(t.matrixWorld),e.position.copy(mu),gu.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(gu),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,i,n){dh.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),i.setFromProjectionMatrix(dh,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,a=n?n.z/r.x:1,o=n?n.w/r.y:1,l=n?n.x/r.x:0,c=n?n.y/r.y:0;t.coordinateSystem===Gs||t.reversedDepth?e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),e.multiply(dh)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},po=new k,mo=new $e,$i=new k,ia=class extends De{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ee,this.projectionMatrix=new ee,this.projectionMatrixInverse=new ee,this.coordinateSystem=ki,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(po,mo,$i),$i.x===1&&$i.y===1&&$i.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(po,mo,$i.set(1,1,1)).invert()}updateWorldMatrix(t,e,i=!1){super.updateWorldMatrix(t,e,i),this.matrixWorld.decompose(po,mo,$i),$i.x===1&&$i.y===1&&$i.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(po,mo,$i.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Dn=new k,yu=new At,xu=new At,We=class extends ia{constructor(t=50,e=1,i=.1,n=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=n,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Ur*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Oc*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ur*2*Math.atan(Math.tan(Oc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){Dn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Dn.x,Dn.y).multiplyScalar(-t/Dn.z),Dn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Dn.x,Dn.y).multiplyScalar(-t/Dn.z)}getViewSize(t,e){return this.getViewBounds(t,yu,xu),e.subVectors(xu,yu)}setViewOffset(t,e,i,n,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=n,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Oc*.5*this.fov)/this.zoom,i=2*e,n=this.aspect*i,r=-.5*n,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*n/l,e-=a.offsetY*i/c,n*=a.width/l,i*=a.height/c}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+n,e,e-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},yh=class extends Js{constructor(){super(new We(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(t){let e=this.camera,i=Ur*2*t.angle*this.focus,n=this.mapSize.width/this.mapSize.height*this.aspect,r=t.distance||e.far;(i!==e.fov||n!==e.aspect||r!==e.far)&&(e.fov=i,e.aspect=n,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this.aspect=t.aspect,this}toJSON(){let t=super.toJSON();return t.focus=this.focus,t.aspect=this.aspect,t}},Hn=class extends ls{constructor(t,e,i=0,n=Math.PI/3,r=0,a=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(De.DEFAULT_UP),this.updateMatrix(),this.target=new De,this.distance=i,this.angle=n,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new yh}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.map=t.map,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.angle=this.angle,e.object.decay=this.decay,e.object.penumbra=this.penumbra,e.object.target=this.target.uuid,this.map&&this.map.isTexture&&(e.object.map=this.map.toJSON(t).uuid),e.object.shadow=this.shadow.toJSON(),e}},xh=class extends Js{constructor(){super(new We(90,1,.5,500)),this.isPointLightShadow=!0}},na=class extends ls{constructor(t,e,i=0,n=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=n,this.shadow=new xh}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}},zn=class extends ia{constructor(t=-1,e=1,i=1,n=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=n,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,n,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=n,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,n=(this.top+this.bottom)/2,r=i-t,a=i+t,o=n+e,l=n-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},vh=class extends Js{constructor(){super(new zn(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},sa=class extends ls{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(De.DEFAULT_UP),this.updateMatrix(),this.target=new De,this.shadow=new vh}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var ks=-90,Bs=1,il=class extends De{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let n=new We(ks,Bs,t,e);n.layers=this.layers,this.add(n);let r=new We(ks,Bs,t,e);r.layers=this.layers,this.add(r);let a=new We(ks,Bs,t,e);a.layers=this.layers,this.add(a);let o=new We(ks,Bs,t,e);o.layers=this.layers,this.add(o);let l=new We(ks,Bs,t,e);l.layers=this.layers,this.add(l);let c=new We(ks,Bs,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[i,n,r,a,o,l]=e;for(let c of e)this.remove(c);if(t===ki)i.up.set(0,1,0),i.lookAt(1,0,0),n.up.set(0,1,0),n.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Gs)i.up.set(0,-1,0),i.lookAt(-1,0,0),n.up.set(0,-1,0),n.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:n}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,f=t.getRenderTarget(),d=t.getActiveCubeFace(),u=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let y=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let m=!1;t.isWebGLRenderer===!0?m=t.state.buffers.depth.getReversed():m=t.reversedDepthBuffer,t.setRenderTarget(i,0,n),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(i,1,n),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(i,2,n),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(i,3,n),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(i,4,n),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),i.texture.generateMipmaps=y,t.setRenderTarget(i,5,n),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(f,d,u),t.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},nl=class extends We{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var Wh="\\[\\]\\.:\\/",gm=new RegExp("["+Wh+"]","g"),$h="[^"+Wh+"]",ym="[^"+Wh.replace("\\.","")+"]",xm=/((?:WC+[\/:])*)/.source.replace("WC",$h),vm=/(WCOD+)?/.source.replace("WCOD",ym),_m=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",$h),bm=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",$h),Mm=new RegExp("^"+xm+vm+_m+bm+"$"),Sm=["material","materials","bones","map"],_h=class{constructor(t,e,i){let n=i||Ee.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,n)}getValue(t,e){this.bind();let i=this._targetGroup.nCachedObjects_,n=this._bindings[i];n!==void 0&&n.getValue(t,e)}setValue(t,e){let i=this._bindings;for(let n=this._targetGroup.nCachedObjects_,r=i.length;n!==r;++n)i[n].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].unbind()}},Ee=class s{constructor(t,e,i){this.path=e,this.parsedPath=i||s.parseTrackName(e),this.node=s.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,i){return t&&t.isAnimationObjectGroup?new s.Composite(t,e,i):new s(t,e,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(gm,"")}static parseTrackName(t){let e=Mm.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},n=i.nodeName&&i.nodeName.lastIndexOf(".");if(n!==void 0&&n!==-1){let r=i.nodeName.substring(n+1);Sm.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,n),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(e);if(i!==void 0)return i}if(t.children){let i=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let l=i(o.children);if(l)return l}return null},n=i(t.children);if(n)return n}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let i=this.resolvedProperty;for(let n=0,r=i.length;n!==r;++n)t[e++]=i[n]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let i=this.resolvedProperty;for(let n=0,r=i.length;n!==r;++n)i[n]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let i=this.resolvedProperty;for(let n=0,r=i.length;n!==r;++n)i[n]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let i=this.resolvedProperty;for(let n=0,r=i.length;n!==r;++n)i[n]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,i=e.objectName,n=e.propertyName,r=e.propertyIndex;if(t||(t=s.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Ht("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=e.objectIndex;switch(i){case"materials":if(!t.material){Gt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Gt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Gt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Gt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Gt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){Gt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(c!==void 0){if(t[c]===void 0){Gt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let a=t[n];if(a===void 0){let c=e.nodeName;Gt("PropertyBinding: Trying to update property for track: "+c+"."+n+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(n==="morphTargetInfluences"){if(!t.geometry){Gt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Gt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=n;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ee.Composite=_h;Ee.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ee.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ee.prototype.GetterByBindingType=[Ee.prototype._getValue_direct,Ee.prototype._getValue_array,Ee.prototype._getValue_arrayElement,Ee.prototype._getValue_toArray];Ee.prototype.SetterByBindingTypeAndVersioning=[[Ee.prototype._setValue_direct,Ee.prototype._setValue_direct_setNeedsUpdate,Ee.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ee.prototype._setValue_array,Ee.prototype._setValue_array_setNeedsUpdate,Ee.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ee.prototype._setValue_arrayElement,Ee.prototype._setValue_arrayElement_setNeedsUpdate,Ee.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ee.prototype._setValue_fromArray,Ee.prototype._setValue_fromArray_setNeedsUpdate,Ee.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var S_=new Float32Array(1);var Jh=class Jh{constructor(t,e,i,n){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,i,n)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let i=0;i<4;i++)this.elements[i]=t[i+e];return this}set(t,e,i,n){let r=this.elements;return r[0]=t,r[2]=e,r[1]=i,r[3]=n,this}};Jh.prototype.isMatrix2=!0;var bh=Jh;function qh(s,t,e,i){let n=wm(i);switch(e){case Bh:return s*t;case ul:return s*t/n.components*n.byteLength;case fl:return s*t/n.components*n.byteLength;case $n:return s*t*2/n.components*n.byteLength;case pl:return s*t*2/n.components*n.byteLength;case Oh:return s*t*3/n.components*n.byteLength;case Ii:return s*t*4/n.components*n.byteLength;case ml:return s*t*4/n.components*n.byteLength;case la:case ca:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case ha:case da:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case yl:case vl:return Math.max(s,16)*Math.max(t,8)/4;case gl:case xl:return Math.max(s,8)*Math.max(t,8)/2;case _l:case bl:case Sl:case wl:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Ml:case ua:case El:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Tl:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Al:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case Rl:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case Cl:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case Pl:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case Il:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case Ll:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case Dl:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case Fl:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case Nl:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case Ul:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case kl:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case Bl:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case Ol:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case Hl:case zl:case Gl:return Math.ceil(s/4)*Math.ceil(t/4)*16;case Vl:case Wl:return Math.ceil(s/4)*Math.ceil(t/4)*8;case fa:case $l:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function wm(s){switch(s){case gi:case Fh:return{byteLength:1,components:1};case Qs:case Nh:case yi:return{byteLength:2,components:1};case hl:case dl:return{byteLength:2,components:4};case zi:case cl:case Pi:return{byteLength:4,components:1};case Uh:case kh:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?Ht("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function Cf(){let s=null,t=!1,e=null,i=null;function n(r,a){i=s.requestAnimationFrame(n),e(r,a)}return{start:function(){t!==!0&&e!==null&&s!==null&&(i=s.requestAnimationFrame(n),t=!0)},stop:function(){s!==null&&s.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function Im(s){let t=new WeakMap;function e(o,l){let c=o.array,h=o.usage,f=c.byteLength,d=s.createBuffer();s.bindBuffer(l,d),s.bufferData(l,c,h),o.onUploadCallback();let u;if(c instanceof Float32Array)u=s.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)u=s.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?u=s.HALF_FLOAT:u=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)u=s.SHORT;else if(c instanceof Uint32Array)u=s.UNSIGNED_INT;else if(c instanceof Int32Array)u=s.INT;else if(c instanceof Int8Array)u=s.BYTE;else if(c instanceof Uint8Array)u=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)u=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:u,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:f}}function i(o,l,c){let h=l.array,f=l.updateRanges;if(s.bindBuffer(c,o),f.length===0)s.bufferSubData(c,0,h);else{f.sort((u,g)=>u.start-g.start);let d=0;for(let u=1;u<f.length;u++){let g=f[d],y=f[u];y.start<=g.start+g.count+1?g.count=Math.max(g.count,y.start+y.count-g.start):(++d,f[d]=y)}f.length=d+1;for(let u=0,g=f.length;u<g;u++){let y=f[u];s.bufferSubData(c,y.start*h.BYTES_PER_ELEMENT,h,y.start,y.count)}l.clearUpdateRanges()}l.onUploadCallback()}function n(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(s.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:n,remove:r,update:a}}var Lm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Dm=`#ifdef USE_ALPHAHASH
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
#endif`,Fm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Nm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Um=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,km=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Bm=`#ifdef USE_AOMAP
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
#endif`,Om=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Hm=`#ifdef USE_BATCHING
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
#endif`,zm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Gm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Vm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Wm=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,$m=`#ifdef USE_IRIDESCENCE
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
#endif`,qm=`#ifdef USE_BUMPMAP
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
#endif`,Xm=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Ym=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Zm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Km=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Jm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,jm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Qm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,t0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,e0=`#define PI 3.141592653589793
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
} // validated`,i0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,n0=`vec3 transformedNormal = objectNormal;
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
#endif`,s0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,r0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,a0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,o0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,l0="gl_FragColor = linearToOutputTexel( gl_FragColor );",c0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,h0=`#ifdef USE_ENVMAP
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
#endif`,d0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,u0=`#ifdef USE_ENVMAP
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
#endif`,f0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,p0=`#ifdef USE_ENVMAP
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
#endif`,m0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,g0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,y0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,x0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,v0=`#ifdef USE_GRADIENTMAP
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
}`,_0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,b0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,M0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,S0=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,w0=`#ifdef USE_ENVMAP
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
#endif`,E0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,T0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,A0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,R0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,C0=`PhysicalMaterial material;
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
#endif`,P0=`uniform sampler2D dfgLUT;
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
}`,I0=`
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
#endif`,L0=`#if defined( RE_IndirectDiffuse )
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
#endif`,D0=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,F0=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,N0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,U0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,k0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,B0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,O0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,H0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,z0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,G0=`#if defined( USE_POINTS_UV )
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
#endif`,V0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,W0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,$0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,q0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,X0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Y0=`#ifdef USE_MORPHTARGETS
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
#endif`,Z0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,K0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,J0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,j0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Q0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,tg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,eg=`#ifdef USE_NORMALMAP
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
#endif`,ig=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,ng=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,sg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,rg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ag=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,og=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,lg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,cg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,hg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,ug=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,fg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,pg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,mg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,gg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,yg=`float getShadowMask() {
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
}`,xg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,vg=`#ifdef USE_SKINNING
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
#endif`,_g=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,bg=`#ifdef USE_SKINNING
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
#endif`,Mg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Sg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,wg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Eg=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Tg=`#ifdef USE_TRANSMISSION
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
#endif`,Ag=`#ifdef USE_TRANSMISSION
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
#endif`,Rg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Cg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Pg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ig=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Lg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Dg=`uniform sampler2D t2D;
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
}`,Fg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ng=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Ug=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,kg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Bg=`#include <common>
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
}`,Og=`#if DEPTH_PACKING == 3200
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
}`,Hg=`#define DISTANCE
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
}`,zg=`#define DISTANCE
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
}`,Gg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Vg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Wg=`uniform float scale;
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
}`,$g=`uniform vec3 diffuse;
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
}`,qg=`#include <common>
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
}`,Xg=`uniform vec3 diffuse;
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
}`,Yg=`#define LAMBERT
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
}`,Zg=`#define LAMBERT
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
}`,Kg=`#define MATCAP
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
}`,Jg=`#define MATCAP
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
}`,jg=`#define NORMAL
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
}`,Qg=`#define NORMAL
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
}`,ty=`#define PHONG
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
}`,ey=`#define PHONG
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
}`,iy=`#define STANDARD
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
}`,ny=`#define STANDARD
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
}`,sy=`#define TOON
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
}`,ry=`#define TOON
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
}`,ay=`uniform float size;
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
}`,oy=`uniform vec3 diffuse;
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
}`,ly=`#include <common>
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
}`,cy=`uniform vec3 color;
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
}`,hy=`uniform float rotation;
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
}`,dy=`uniform vec3 diffuse;
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
}`,jt={alphahash_fragment:Lm,alphahash_pars_fragment:Dm,alphamap_fragment:Fm,alphamap_pars_fragment:Nm,alphatest_fragment:Um,alphatest_pars_fragment:km,aomap_fragment:Bm,aomap_pars_fragment:Om,batching_pars_vertex:Hm,batching_vertex:zm,begin_vertex:Gm,beginnormal_vertex:Vm,bsdfs:Wm,iridescence_fragment:$m,bumpmap_pars_fragment:qm,clipping_planes_fragment:Xm,clipping_planes_pars_fragment:Ym,clipping_planes_pars_vertex:Zm,clipping_planes_vertex:Km,color_fragment:Jm,color_pars_fragment:jm,color_pars_vertex:Qm,color_vertex:t0,common:e0,cube_uv_reflection_fragment:i0,defaultnormal_vertex:n0,displacementmap_pars_vertex:s0,displacementmap_vertex:r0,emissivemap_fragment:a0,emissivemap_pars_fragment:o0,colorspace_fragment:l0,colorspace_pars_fragment:c0,envmap_fragment:h0,envmap_common_pars_fragment:d0,envmap_pars_fragment:u0,envmap_pars_vertex:f0,envmap_physical_pars_fragment:w0,envmap_vertex:p0,fog_vertex:m0,fog_pars_vertex:g0,fog_fragment:y0,fog_pars_fragment:x0,gradientmap_pars_fragment:v0,lightmap_pars_fragment:_0,lights_lambert_fragment:b0,lights_lambert_pars_fragment:M0,lights_pars_begin:S0,lights_toon_fragment:E0,lights_toon_pars_fragment:T0,lights_phong_fragment:A0,lights_phong_pars_fragment:R0,lights_physical_fragment:C0,lights_physical_pars_fragment:P0,lights_fragment_begin:I0,lights_fragment_maps:L0,lights_fragment_end:D0,lightprobes_pars_fragment:F0,logdepthbuf_fragment:N0,logdepthbuf_pars_fragment:U0,logdepthbuf_pars_vertex:k0,logdepthbuf_vertex:B0,map_fragment:O0,map_pars_fragment:H0,map_particle_fragment:z0,map_particle_pars_fragment:G0,metalnessmap_fragment:V0,metalnessmap_pars_fragment:W0,morphinstance_vertex:$0,morphcolor_vertex:q0,morphnormal_vertex:X0,morphtarget_pars_vertex:Y0,morphtarget_vertex:Z0,normal_fragment_begin:K0,normal_fragment_maps:J0,normal_pars_fragment:j0,normal_pars_vertex:Q0,normal_vertex:tg,normalmap_pars_fragment:eg,clearcoat_normal_fragment_begin:ig,clearcoat_normal_fragment_maps:ng,clearcoat_pars_fragment:sg,iridescence_pars_fragment:rg,opaque_fragment:ag,packing:og,premultiplied_alpha_fragment:lg,project_vertex:cg,dithering_fragment:hg,dithering_pars_fragment:dg,roughnessmap_fragment:ug,roughnessmap_pars_fragment:fg,shadowmap_pars_fragment:pg,shadowmap_pars_vertex:mg,shadowmap_vertex:gg,shadowmask_pars_fragment:yg,skinbase_vertex:xg,skinning_pars_vertex:vg,skinning_vertex:_g,skinnormal_vertex:bg,specularmap_fragment:Mg,specularmap_pars_fragment:Sg,tonemapping_fragment:wg,tonemapping_pars_fragment:Eg,transmission_fragment:Tg,transmission_pars_fragment:Ag,uv_pars_fragment:Rg,uv_pars_vertex:Cg,uv_vertex:Pg,worldpos_vertex:Ig,background_vert:Lg,background_frag:Dg,backgroundCube_vert:Fg,backgroundCube_frag:Ng,cube_vert:Ug,cube_frag:kg,depth_vert:Bg,depth_frag:Og,distance_vert:Hg,distance_frag:zg,equirect_vert:Gg,equirect_frag:Vg,linedashed_vert:Wg,linedashed_frag:$g,meshbasic_vert:qg,meshbasic_frag:Xg,meshlambert_vert:Yg,meshlambert_frag:Zg,meshmatcap_vert:Kg,meshmatcap_frag:Jg,meshnormal_vert:jg,meshnormal_frag:Qg,meshphong_vert:ty,meshphong_frag:ey,meshphysical_vert:iy,meshphysical_frag:ny,meshtoon_vert:sy,meshtoon_frag:ry,points_vert:ay,points_frag:oy,shadow_vert:ly,shadow_frag:cy,sprite_vert:hy,sprite_frag:dy},bt={common:{diffuse:{value:new at(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new $t},alphaMap:{value:null},alphaMapTransform:{value:new $t},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new $t}},envmap:{envMap:{value:null},envMapRotation:{value:new $t},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new $t}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new $t}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new $t},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new $t},normalScale:{value:new At(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new $t},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new $t}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new $t}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new $t}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new at(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new k},probesMax:{value:new k},probesResolution:{value:new k}},points:{diffuse:{value:new at(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new $t},alphaTest:{value:0},uvTransform:{value:new $t}},sprite:{diffuse:{value:new at(16777215)},opacity:{value:1},center:{value:new At(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new $t},alphaMap:{value:null},alphaMapTransform:{value:new $t},alphaTest:{value:0}}},sn={basic:{uniforms:li([bt.common,bt.specularmap,bt.envmap,bt.aomap,bt.lightmap,bt.fog]),vertexShader:jt.meshbasic_vert,fragmentShader:jt.meshbasic_frag},lambert:{uniforms:li([bt.common,bt.specularmap,bt.envmap,bt.aomap,bt.lightmap,bt.emissivemap,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.fog,bt.lights,{emissive:{value:new at(0)},envMapIntensity:{value:1}}]),vertexShader:jt.meshlambert_vert,fragmentShader:jt.meshlambert_frag},phong:{uniforms:li([bt.common,bt.specularmap,bt.envmap,bt.aomap,bt.lightmap,bt.emissivemap,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.fog,bt.lights,{emissive:{value:new at(0)},specular:{value:new at(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:jt.meshphong_vert,fragmentShader:jt.meshphong_frag},standard:{uniforms:li([bt.common,bt.envmap,bt.aomap,bt.lightmap,bt.emissivemap,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.roughnessmap,bt.metalnessmap,bt.fog,bt.lights,{emissive:{value:new at(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:jt.meshphysical_vert,fragmentShader:jt.meshphysical_frag},toon:{uniforms:li([bt.common,bt.aomap,bt.lightmap,bt.emissivemap,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.gradientmap,bt.fog,bt.lights,{emissive:{value:new at(0)}}]),vertexShader:jt.meshtoon_vert,fragmentShader:jt.meshtoon_frag},matcap:{uniforms:li([bt.common,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.fog,{matcap:{value:null}}]),vertexShader:jt.meshmatcap_vert,fragmentShader:jt.meshmatcap_frag},points:{uniforms:li([bt.points,bt.fog]),vertexShader:jt.points_vert,fragmentShader:jt.points_frag},dashed:{uniforms:li([bt.common,bt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:jt.linedashed_vert,fragmentShader:jt.linedashed_frag},depth:{uniforms:li([bt.common,bt.displacementmap]),vertexShader:jt.depth_vert,fragmentShader:jt.depth_frag},normal:{uniforms:li([bt.common,bt.bumpmap,bt.normalmap,bt.displacementmap,{opacity:{value:1}}]),vertexShader:jt.meshnormal_vert,fragmentShader:jt.meshnormal_frag},sprite:{uniforms:li([bt.sprite,bt.fog]),vertexShader:jt.sprite_vert,fragmentShader:jt.sprite_frag},background:{uniforms:{uvTransform:{value:new $t},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:jt.background_vert,fragmentShader:jt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new $t}},vertexShader:jt.backgroundCube_vert,fragmentShader:jt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:jt.cube_vert,fragmentShader:jt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:jt.equirect_vert,fragmentShader:jt.equirect_frag},distance:{uniforms:li([bt.common,bt.displacementmap,{referencePosition:{value:new k},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:jt.distance_vert,fragmentShader:jt.distance_frag},shadow:{uniforms:li([bt.lights,bt.fog,{color:{value:new at(0)},opacity:{value:1}}]),vertexShader:jt.shadow_vert,fragmentShader:jt.shadow_frag}};sn.physical={uniforms:li([sn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new $t},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new $t},clearcoatNormalScale:{value:new At(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new $t},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new $t},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new $t},sheen:{value:0},sheenColor:{value:new at(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new $t},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new $t},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new $t},transmissionSamplerSize:{value:new At},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new $t},attenuationDistance:{value:0},attenuationColor:{value:new at(0)},specularColor:{value:new at(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new $t},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new $t},anisotropyVector:{value:new At},anisotropyMap:{value:null},anisotropyMapTransform:{value:new $t}}]),vertexShader:jt.meshphysical_vert,fragmentShader:jt.meshphysical_frag};var Yl={r:0,b:0,g:0},uy=new ee,Pf=new $t;Pf.set(-1,0,0,0,1,0,0,0,1);function fy(s,t,e,i,n,r){let a=new at(0),o=n===!0?0:1,l,c,h=null,f=0,d=null;function u(v){let M=v.isScene===!0?v.background:null;if(M&&M.isTexture){let b=v.backgroundBlurriness>0;M=t.get(M,b)}return M}function g(v){let M=!1,b=u(v);b===null?m(a,o):b&&b.isColor&&(m(b,1),M=!0);let S=s.xr.getEnvironmentBlendMode();S==="additive"?e.buffers.color.setClear(0,0,0,1,r):S==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(s.autoClear||M)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function y(v,M){let b=u(M);b&&(b.isCubeTexture||b.mapping===aa)?(c===void 0&&(c=new yt(new _e(1,1,1),new Ce({name:"BackgroundCubeMaterial",uniforms:fs(sn.backgroundCube.uniforms),vertexShader:sn.backgroundCube.vertexShader,fragmentShader:sn.backgroundCube.fragmentShader,side:Xe,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(S,_,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=b,c.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(uy.makeRotationFromEuler(M.backgroundRotation)).transpose(),b.isCubeTexture&&b.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Pf),c.material.toneMapped=se.getTransfer(b.colorSpace)!==pe,(h!==b||f!==b.version||d!==s.toneMapping)&&(c.material.needsUpdate=!0,h=b,f=b.version,d=s.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null)):b&&b.isTexture&&(l===void 0&&(l=new yt(new Te(2,2),new Ce({name:"BackgroundMaterial",uniforms:fs(sn.background.uniforms),vertexShader:sn.background.vertexShader,fragmentShader:sn.background.fragmentShader,side:ji,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=b,l.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,l.material.toneMapped=se.getTransfer(b.colorSpace)!==pe,b.matrixAutoUpdate===!0&&b.updateMatrix(),l.material.uniforms.uvTransform.value.copy(b.matrix),(h!==b||f!==b.version||d!==s.toneMapping)&&(l.material.needsUpdate=!0,h=b,f=b.version,d=s.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null))}function m(v,M){v.getRGB(Yl,Vh(s)),e.buffers.color.setClear(Yl.r,Yl.g,Yl.b,M,r)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(v,M=1){a.set(v),o=M,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(v){o=v,m(a,o)},render:g,addToRenderList:y,dispose:p}}function py(s,t){let e=s.getParameter(s.MAX_VERTEX_ATTRIBS),i={},n=d(null),r=n,a=!1;function o(D,C,F,A,I){let B=!1,O=f(D,A,F,C);r!==O&&(r=O,c(r.object)),B=u(D,A,F,I),B&&g(D,A,F,I),I!==null&&t.update(I,s.ELEMENT_ARRAY_BUFFER),(B||a)&&(a=!1,b(D,C,F,A),I!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(I).buffer))}function l(){return s.createVertexArray()}function c(D){return s.bindVertexArray(D)}function h(D){return s.deleteVertexArray(D)}function f(D,C,F,A){let I=A.wireframe===!0,B=i[C.id];B===void 0&&(B={},i[C.id]=B);let O=D.isInstancedMesh===!0?D.id:0,$=B[O];$===void 0&&($={},B[O]=$);let L=$[F.id];L===void 0&&(L={},$[F.id]=L);let z=L[I];return z===void 0&&(z=d(l()),L[I]=z),z}function d(D){let C=[],F=[],A=[];for(let I=0;I<e;I++)C[I]=0,F[I]=0,A[I]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:F,attributeDivisors:A,object:D,attributes:{},index:null}}function u(D,C,F,A){let I=r.attributes,B=C.attributes,O=0,$=F.getAttributes();for(let L in $)if($[L].location>=0){let G=I[L],rt=B[L];if(rt===void 0&&(L==="instanceMatrix"&&D.instanceMatrix&&(rt=D.instanceMatrix),L==="instanceColor"&&D.instanceColor&&(rt=D.instanceColor)),G===void 0||G.attribute!==rt||rt&&G.data!==rt.data)return!0;O++}return r.attributesNum!==O||r.index!==A}function g(D,C,F,A){let I={},B=C.attributes,O=0,$=F.getAttributes();for(let L in $)if($[L].location>=0){let G=B[L];G===void 0&&(L==="instanceMatrix"&&D.instanceMatrix&&(G=D.instanceMatrix),L==="instanceColor"&&D.instanceColor&&(G=D.instanceColor));let rt={};rt.attribute=G,G&&G.data&&(rt.data=G.data),I[L]=rt,O++}r.attributes=I,r.attributesNum=O,r.index=A}function y(){let D=r.newAttributes;for(let C=0,F=D.length;C<F;C++)D[C]=0}function m(D){p(D,0)}function p(D,C){let F=r.newAttributes,A=r.enabledAttributes,I=r.attributeDivisors;F[D]=1,A[D]===0&&(s.enableVertexAttribArray(D),A[D]=1),I[D]!==C&&(s.vertexAttribDivisor(D,C),I[D]=C)}function v(){let D=r.newAttributes,C=r.enabledAttributes;for(let F=0,A=C.length;F<A;F++)C[F]!==D[F]&&(s.disableVertexAttribArray(F),C[F]=0)}function M(D,C,F,A,I,B,O){O===!0?s.vertexAttribIPointer(D,C,F,I,B):s.vertexAttribPointer(D,C,F,A,I,B)}function b(D,C,F,A){y();let I=A.attributes,B=F.getAttributes(),O=C.defaultAttributeValues;for(let $ in B){let L=B[$];if(L.location>=0){let z=I[$];if(z===void 0&&($==="instanceMatrix"&&D.instanceMatrix&&(z=D.instanceMatrix),$==="instanceColor"&&D.instanceColor&&(z=D.instanceColor)),z!==void 0){let G=z.normalized,rt=z.itemSize,et=t.get(z);if(et===void 0)continue;let Et=et.buffer,vt=et.type,Tt=et.bytesPerElement,X=vt===s.INT||vt===s.UNSIGNED_INT||z.gpuType===cl;if(z.isInterleavedBufferAttribute){let j=z.data,ct=j.stride,Mt=z.offset;if(j.isInstancedInterleavedBuffer){for(let dt=0;dt<L.locationSize;dt++)p(L.location+dt,j.meshPerAttribute);D.isInstancedMesh!==!0&&A._maxInstanceCount===void 0&&(A._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let dt=0;dt<L.locationSize;dt++)m(L.location+dt);s.bindBuffer(s.ARRAY_BUFFER,Et);for(let dt=0;dt<L.locationSize;dt++)M(L.location+dt,rt/L.locationSize,vt,G,ct*Tt,(Mt+rt/L.locationSize*dt)*Tt,X)}else{if(z.isInstancedBufferAttribute){for(let j=0;j<L.locationSize;j++)p(L.location+j,z.meshPerAttribute);D.isInstancedMesh!==!0&&A._maxInstanceCount===void 0&&(A._maxInstanceCount=z.meshPerAttribute*z.count)}else for(let j=0;j<L.locationSize;j++)m(L.location+j);s.bindBuffer(s.ARRAY_BUFFER,Et);for(let j=0;j<L.locationSize;j++)M(L.location+j,rt/L.locationSize,vt,G,rt*Tt,rt/L.locationSize*j*Tt,X)}}else if(O!==void 0){let G=O[$];if(G!==void 0)switch(G.length){case 2:s.vertexAttrib2fv(L.location,G);break;case 3:s.vertexAttrib3fv(L.location,G);break;case 4:s.vertexAttrib4fv(L.location,G);break;default:s.vertexAttrib1fv(L.location,G)}}}}v()}function S(){w();for(let D in i){let C=i[D];for(let F in C){let A=C[F];for(let I in A){let B=A[I];for(let O in B)h(B[O].object),delete B[O];delete A[I]}}delete i[D]}}function _(D){if(i[D.id]===void 0)return;let C=i[D.id];for(let F in C){let A=C[F];for(let I in A){let B=A[I];for(let O in B)h(B[O].object),delete B[O];delete A[I]}}delete i[D.id]}function T(D){for(let C in i){let F=i[C];for(let A in F){let I=F[A];if(I[D.id]===void 0)continue;let B=I[D.id];for(let O in B)h(B[O].object),delete B[O];delete I[D.id]}}}function x(D){for(let C in i){let F=i[C],A=D.isInstancedMesh===!0?D.id:0,I=F[A];if(I!==void 0){for(let B in I){let O=I[B];for(let $ in O)h(O[$].object),delete O[$];delete I[B]}delete F[A],Object.keys(F).length===0&&delete i[C]}}}function w(){P(),a=!0,r!==n&&(r=n,c(r.object))}function P(){n.geometry=null,n.program=null,n.wireframe=!1}return{setup:o,reset:w,resetDefaultState:P,dispose:S,releaseStatesOfGeometry:_,releaseStatesOfObject:x,releaseStatesOfProgram:T,initAttributes:y,enableAttribute:m,disableUnusedAttributes:v}}function my(s,t,e){let i;function n(l){i=l}function r(l,c){s.drawArrays(i,l,c),e.update(c,i,1)}function a(l,c,h){h!==0&&(s.drawArraysInstanced(i,l,c,h),e.update(c,i,h))}function o(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,h);let d=0;for(let u=0;u<h;u++)d+=c[u];e.update(d,i,1)}this.setMode=n,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function gy(s,t,e,i){let n;function r(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){let T=t.get("EXT_texture_filter_anisotropic");n=s.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function a(T){return!(T!==Ii&&i.convert(T)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(T){let x=T===yi&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(T!==gi&&T!==Pi&&!x&&i.convert(T)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE))}function l(T){if(T==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(Ht("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let f=e.logarithmicDepthBuffer===!0,d=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&d===!1&&Ht("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let u=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),p=s.getParameter(s.MAX_VERTEX_ATTRIBS),v=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),M=s.getParameter(s.MAX_VARYING_VECTORS),b=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),S=s.getParameter(s.MAX_SAMPLES),_=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:d,maxTextures:u,maxVertexTextures:g,maxTextureSize:y,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:v,maxVaryings:M,maxFragmentUniforms:b,maxSamples:S,samples:_}}function yy(s){let t=this,e=null,i=0,n=!1,r=!1,a=new Ui,o=new $t,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){let u=f.length!==0||d||i!==0||n;return n=d,i=f.length,u},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,d){e=h(f,d,0)},this.setState=function(f,d,u){let g=f.clippingPlanes,y=f.clipIntersection,m=f.clipShadows,p=s.get(f);if(!n||g===null||g.length===0||r&&!m)r?h(null):c();else{let v=r?0:i,M=v*4,b=p.clippingState||null;l.value=b,b=h(g,d,M,u);for(let S=0;S!==M;++S)b[S]=e[S];p.clippingState=b,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(f,d,u,g){let y=f!==null?f.length:0,m=null;if(y!==0){if(m=l.value,g!==!0||m===null){let p=u+y*4,v=d.matrixWorldInverse;o.getNormalMatrix(v),(m===null||m.length<p)&&(m=new Float32Array(p));for(let M=0,b=u;M!==y;++M,b+=4)a.copy(f[M]).applyMatrix4(v,o),a.normal.toArray(m,b),m[b+3]=a.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=y,t.numIntersection=0,m}}var ir=4,xy=6,vy=20,_y=256,ga=new zn,lf=new at,jh=null,Qh=0,td=0,ed=!1,by=new k,ps=new k,ms=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,i=.1,n=100,r={}){let{size:a=256,position:o=by}=r;jh=this._renderer.getRenderTarget(),Qh=this._renderer.getActiveCubeFace(),td=this._renderer.getActiveMipmapLevel(),ed=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,i,n,l,o),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=df(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=hf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(jh,Qh,td),this._renderer.xr.enabled=ed,t.scissorTest=!1,er(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Vn||t.mapping===us?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),jh=this._renderer.getRenderTarget(),Qh=this._renderer.getActiveCubeFace(),td=this._renderer.getActiveMipmapLevel(),ed=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:Ve,minFilter:Ve,generateMipmaps:!1,type:yi,format:Ii,colorSpace:Dr,depthBuffer:!1},n=cf(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=cf(t,e,i);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=My(r)),this._blurMaterial=wy(r,t,e),this._ggxMaterial=Sy(r,t,e)}return n}_compileMaterial(t){let e=new yt(new ne,t);this._renderer.compile(e,ga)}_sceneToCubeUV(t,e,i,n,r){let l=new We(90,1,e,i),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],f=this._renderer,d=f.autoClear,u=f.toneMapping;f.getClearColor(lf),f.toneMapping=Hi,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(n),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new yt(new _e,new re({name:"PMREM.Background",side:Xe,depthWrite:!1,depthTest:!1})));let y=this._backgroundBox,m=y.material,p=!1,v=t.background;v?v.isColor&&(m.color.copy(v),t.background=null,p=!0):(m.color.copy(lf),p=!0);for(let M=0;M<6;M++){let b=M%3;b===0?(l.up.set(0,c[M],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[M],r.y,r.z)):b===1?(l.up.set(0,0,c[M]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[M],r.z)):(l.up.set(0,c[M],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[M]));let S=this._cubeSize;er(n,b*S,M>2?S:0,S,S),f.setRenderTarget(n),p&&f.render(y,l),f.render(t,l)}f.toneMapping=u,f.autoClear=d,t.background=v}_textureToCubeUV(t,e){let i=this._renderer,n=t.mapping===Vn||t.mapping===us;n?(this._cubemapMaterial===null&&(this._cubemapMaterial=df()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=hf());let r=n?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;let o=r.uniforms;o.envMap.value=t;let l=this._cubeSize;er(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(a,ga)}_applyPMREM(t){let e=this._renderer,i=e.autoClear;e.autoClear=!1;let n=this._lodMeshes.length;for(let r=1;r<n;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=i}_applyGGXFilter(t,e,i){let n=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[i];o.material=a;let l=a.uniforms,c=i/(this._lodMeshes.length-1),h=e/(this._lodMeshes.length-1),f=Math.sqrt(c*c-h*h),d=c*1.25,u=f*d,{_lodMax:g}=this,y=this._sizeLods[i],m=3*y*(i>g-ir?i-g+ir:0),p=4*(this._cubeSize-y);l.envMap.value=t.texture,l.roughness.value=u,l.mipInt.value=g-e,er(r,m,p,3*y,2*y),n.setRenderTarget(r),n.render(o,ga),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=g-i,er(t,m,p,3*y,2*y),n.setRenderTarget(t),n.render(o,ga)}_blur(t,e,i,n){let r=this._pingPongRenderTarget,a=Math.min(n,Math.PI)/Math.SQRT2;this._blurPass(t,r,e,i,a),this._blurPass(r,t,i,i,a)}_blurPass(t,e,i,n,r){let a=this._renderer,o=this._blurMaterial,l=this._lodMeshes[n];l.material=o;let c=o.uniforms;c.envMap.value=t.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-i;let h=this._sizeLods[n],f=3*h*(n>this._lodMax-ir?n-this._lodMax+ir:0),d=4*(this._cubeSize-h);er(e,f,d,3*h,2*h),a.setRenderTarget(e),a.render(l,ga)}};function My(s){let t=[],e=[],i=s,n=s-ir+1+xy;for(let r=0;r<n;r++){let a=Math.pow(2,i);t.push(a);let o=1/(a-2),l=-o,c=1+o,h=[l,l,c,l,c,c,l,l,c,c,l,c],f=6,d=6,u=3,g=new Float32Array(u*d*f),y=new Float32Array(u*d*f);for(let p=0;p<f;p++){let v=p%3*2/3-1,M=p>2?0:-1,b=[v,M,0,v+2/3,M,0,v+2/3,M+1,0,v,M,0,v+2/3,M+1,0,v,M+1,0];g.set(b,u*d*p);for(let S=0;S<d;S++){let _=h[S*2]*2-1,T=h[S*2+1]*2-1;p===0?ps.set(1,T,_):p===1?ps.set(-_,1,-T):p===2?ps.set(-_,T,1):p===3?ps.set(-1,T,-_):p===4?ps.set(-_,-1,T):ps.set(_,T,-1),ps.toArray(y,(p*d+S)*u)}}let m=new ne;m.setAttribute("position",new Yt(g,u)),m.setAttribute("outputDirection",new Yt(y,u)),e.push(new yt(m,null)),i>ir&&i--}return{lodMeshes:e,sizeLods:t}}function cf(s,t,e){let i=new Qe(s,t,e);return i.texture.mapping=aa,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function er(s,t,e,i,n){s.viewport.set(t,e,i,n),s.scissor.set(t,e,i,n)}function Sy(s,t,e){return new Ce({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:_y,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:jl(),fragmentShader:`

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
		`,blending:Qi,depthTest:!1,depthWrite:!1})}function wy(s,t,e){return new Ce({name:"SphericalGaussianBlur",defines:{SAMPLES:vy,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:jl(),fragmentShader:`

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
		`,blending:Qi,depthTest:!1,depthWrite:!1})}function hf(){return new Ce({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:jl(),fragmentShader:`

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
		`,blending:Qi,depthTest:!1,depthWrite:!1})}function df(){return new Ce({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:jl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Qi,depthTest:!1,depthWrite:!1})}function jl(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var Kl=class extends Qe{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},n=[i,i,i,i,i,i];this.texture=new $r(n),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},n=new _e(5,5,5),r=new Ce({name:"CubemapFromEquirect",uniforms:fs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Xe,blending:Qi});r.uniforms.tEquirect.value=e;let a=new yt(n,r),o=e.minFilter;return e.minFilter===en&&(e.minFilter=Ve),new il(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,i=!0,n=!0){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,i,n);t.setRenderTarget(r)}};function Ey(s){let t=new WeakMap,e=new WeakMap,i=null;function n(d,u=!1){return d==null?null:u?a(d):r(d)}function r(d){if(d&&d.isTexture){let u=d.mapping;if(u===al||u===ol)if(t.has(d)){let g=t.get(d).texture;return o(g,d.mapping)}else{let g=d.image;if(g&&g.height>0){let y=new Kl(g.height);return y.fromEquirectangularTexture(s,d),t.set(d,y),d.addEventListener("dispose",c),o(y.texture,d.mapping)}else return null}}return d}function a(d){if(d&&d.isTexture){let u=d.mapping,g=u===al||u===ol,y=u===Vn||u===us;if(g||y){let m=e.get(d),p=m!==void 0?m.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==p)return i===null&&(i=new ms(s)),m=g?i.fromEquirectangular(d,m):i.fromCubemap(d,m),m.texture.pmremVersion=d.pmremVersion,e.set(d,m),m.texture;if(m!==void 0)return m.texture;{let v=d.image;return g&&v&&v.height>0||y&&v&&l(v)?(i===null&&(i=new ms(s)),m=g?i.fromEquirectangular(d):i.fromCubemap(d),m.texture.pmremVersion=d.pmremVersion,e.set(d,m),d.addEventListener("dispose",h),m.texture):null}}}return d}function o(d,u){return u===al?d.mapping=Vn:u===ol&&(d.mapping=us),d}function l(d){let u=0,g=6;for(let y=0;y<g;y++)d[y]!==void 0&&u++;return u===g}function c(d){let u=d.target;u.removeEventListener("dispose",c);let g=t.get(u);g!==void 0&&(t.delete(u),g.dispose())}function h(d){let u=d.target;u.removeEventListener("dispose",h);let g=e.get(u);g!==void 0&&(e.delete(u),g.dispose())}function f(){t=new WeakMap,e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:n,dispose:f}}function Ty(s){let t={};function e(i){if(t[i]!==void 0)return t[i];let n=s.getExtension(i);return t[i]=n,n}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){let n=e(i);return n===null&&rs("WebGLRenderer: "+i+" extension not supported."),n}}}function Ay(s,t,e,i){let n={},r=new WeakMap;function a(f){let d=f.target;d.index!==null&&t.remove(d.index);for(let g in d.attributes)t.remove(d.attributes[g]);d.removeEventListener("dispose",a),delete n[d.id];let u=r.get(d);u&&(t.remove(u),r.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function o(f,d){return n[d.id]===!0||(d.addEventListener("dispose",a),n[d.id]=!0,e.memory.geometries++),d}function l(f){let d=f.attributes;for(let u in d)t.update(d[u],s.ARRAY_BUFFER)}function c(f){let d=[],u=f.index,g=f.attributes.position,y=0;if(g===void 0)return;if(u!==null){let v=u.array;y=u.version;for(let M=0,b=v.length;M<b;M+=3){let S=v[M+0],_=v[M+1],T=v[M+2];d.push(S,_,_,T,T,S)}}else{let v=g.array;y=g.version;for(let M=0,b=v.length/3-1;M<b;M+=3){let S=M+0,_=M+1,T=M+2;d.push(S,_,_,T,T,S)}}let m=new(g.count>=65535?Gr:zr)(d,1);m.version=y;let p=r.get(f);p&&t.remove(p),r.set(f,m)}function h(f){let d=r.get(f);if(d){let u=f.index;u!==null&&d.version<u.version&&c(f)}else c(f);return r.get(f)}return{get:o,update:l,getWireframeAttribute:h}}function Ry(s,t,e){let i;function n(f){i=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function l(f,d){s.drawElements(i,d,r,f*a),e.update(d,i,1)}function c(f,d,u){u!==0&&(s.drawElementsInstanced(i,d,r,f*a,u),e.update(d,i,u))}function h(f,d,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,r,f,0,u);let y=0;for(let m=0;m<u;m++)y+=d[m];e.update(y,i,1)}this.setMode=n,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function Cy(s){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(e.calls++,a){case s.TRIANGLES:e.triangles+=o*(r/3);break;case s.LINES:e.lines+=o*(r/2);break;case s.LINE_STRIP:e.lines+=o*(r-1);break;case s.LINE_LOOP:e.lines+=o*r;break;case s.POINTS:e.points+=o*r;break;default:Gt("WebGLInfo: Unknown draw mode:",a);break}}function n(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:n,update:i}}function Py(s,t,e){let i=new WeakMap,n=new Re;function r(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=h!==void 0?h.length:0,d=i.get(o);if(d===void 0||d.count!==f){let w=function(){T.dispose(),i.delete(o),o.removeEventListener("dispose",w)};d!==void 0&&d.texture.dispose();let u=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,y=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],v=o.morphAttributes.color||[],M=0;u===!0&&(M=1),g===!0&&(M=2),y===!0&&(M=3);let b=o.attributes.position.count*M,S=1;b>t.maxTextureSize&&(S=Math.ceil(b/t.maxTextureSize),b=t.maxTextureSize);let _=new Float32Array(b*S*4*f),T=new kr(_,b,S,f);T.type=Pi,T.needsUpdate=!0;let x=M*4;for(let P=0;P<f;P++){let D=m[P],C=p[P],F=v[P],A=b*S*4*P;for(let I=0;I<D.count;I++){let B=I*x;u===!0&&(n.fromBufferAttribute(D,I),_[A+B+0]=n.x,_[A+B+1]=n.y,_[A+B+2]=n.z,_[A+B+3]=0),g===!0&&(n.fromBufferAttribute(C,I),_[A+B+4]=n.x,_[A+B+5]=n.y,_[A+B+6]=n.z,_[A+B+7]=0),y===!0&&(n.fromBufferAttribute(F,I),_[A+B+8]=n.x,_[A+B+9]=n.y,_[A+B+10]=n.z,_[A+B+11]=F.itemSize===4?n.w:1)}}d={count:f,texture:T,size:new At(b,S)},i.set(o,d),o.addEventListener("dispose",w)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",a.morphTexture,e);else{let u=0;for(let y=0;y<c.length;y++)u+=c[y];let g=o.morphTargetsRelative?1:1-u;l.getUniforms().setValue(s,"morphTargetBaseInfluence",g),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(s,"morphTargetsTextureSize",d.size)}return{update:r}}function Iy(s,t,e,i,n){let r=new WeakMap;function a(c){let h=n.render.frame,f=c.geometry,d=t.get(c,f);if(r.get(d)!==h&&(t.update(d),r.set(d,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(e.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,s.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let u=c.skeleton;r.get(u)!==h&&(u.update(),r.set(u,h))}return d}function o(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),i.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:a,dispose:o}}var Ly={[Ah]:"LINEAR_TONE_MAPPING",[Rh]:"REINHARD_TONE_MAPPING",[Ch]:"CINEON_TONE_MAPPING",[ra]:"ACES_FILMIC_TONE_MAPPING",[Ih]:"AGX_TONE_MAPPING",[Lh]:"NEUTRAL_TONE_MAPPING",[Ph]:"CUSTOM_TONE_MAPPING"};function Dy(s,t,e,i,n,r){let a=new Qe(t,e,{type:s,depthBuffer:n,stencilBuffer:r,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=new ne;c.setAttribute("position",new Jt([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new Jt([0,2,0,0,2,0],2));let h=new Vo({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),f=new yt(c,h),d=new zn(-1,1,1,-1,0,1),u=null,g=null,y=!1,m,p=null,v=[],M=!1;this.setSize=function(b,S){a.setSize(b,S),o!==null&&o.setSize(b,S),l!==null&&l.setSize(b,S);for(let _=0;_<v.length;_++){let T=v[_];T.setSize&&T.setSize(b,S)}},this.setEffects=function(b){v=b,M=v.length>0&&v[0].isRenderPass===!0;let S=a.width,_=a.height;v.length>0&&o===null&&(o=new Qe(S,_,{type:yi,depthBuffer:!1,stencilBuffer:!1}),l=new Qe(S,_,{type:yi,depthBuffer:!1,stencilBuffer:!1}));for(let T=0;T<v.length;T++){let x=v[T];x.setSize&&x.setSize(S,_)}},this.begin=function(b,S){if(y||b.toneMapping===Hi&&v.length===0)return!1;if(p=S,S!==null){let _=S.width,T=S.height;(a.width!==_||a.height!==T)&&this.setSize(_,T)}return M===!1&&b.setRenderTarget(a),m=b.toneMapping,b.toneMapping=Hi,!0},this.hasRenderPass=function(){return M},this.end=function(b,S){b.toneMapping=m,y=!0;let _=a,T=o;for(let x=0;x<v.length;x++){let w=v[x];w.enabled!==!1&&(w.render(b,T,_,S),w.needsSwap!==!1&&(_=T,T=T===o?l:o))}if(u!==b.outputColorSpace||g!==b.toneMapping){u=b.outputColorSpace,g=b.toneMapping,h.defines={},se.getTransfer(u)===pe&&(h.defines.SRGB_TRANSFER="");let x=Ly[g];x&&(h.defines[x]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=_.texture,b.setRenderTarget(p),b.render(f,d),p=null,y=!1},this.isCompositing=function(){return y},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),c.dispose(),h.dispose()}}var If=new hi,sd=new Nn(1,1),Lf=new kr,Df=new Co,Ff=new $r,uf=[],ff=[],pf=new Float32Array(16),mf=new Float32Array(9),gf=new Float32Array(4);function sr(s,t,e){let i=s[0];if(i<=0||i>0)return s;let n=t*e,r=uf[n];if(r===void 0&&(r=new Float32Array(n),uf[n]=r),t!==0){i.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,s[a].toArray(r,o)}return r}function Ye(s,t){if(s.length!==t.length)return!1;for(let e=0,i=s.length;e<i;e++)if(s[e]!==t[e])return!1;return!0}function Ze(s,t){for(let e=0,i=t.length;e<i;e++)s[e]=t[e]}function Ql(s,t){let e=ff[t];e===void 0&&(e=new Int32Array(t),ff[t]=e);for(let i=0;i!==t;++i)e[i]=s.allocateTextureUnit();return e}function Fy(s,t){let e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function Ny(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ye(e,t))return;s.uniform2fv(this.addr,t),Ze(e,t)}}function Uy(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ye(e,t))return;s.uniform3fv(this.addr,t),Ze(e,t)}}function ky(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ye(e,t))return;s.uniform4fv(this.addr,t),Ze(e,t)}}function By(s,t){let e=this.cache,i=t.elements;if(i===void 0){if(Ye(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),Ze(e,t)}else{if(Ye(e,i))return;gf.set(i),s.uniformMatrix2fv(this.addr,!1,gf),Ze(e,i)}}function Oy(s,t){let e=this.cache,i=t.elements;if(i===void 0){if(Ye(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),Ze(e,t)}else{if(Ye(e,i))return;mf.set(i),s.uniformMatrix3fv(this.addr,!1,mf),Ze(e,i)}}function Hy(s,t){let e=this.cache,i=t.elements;if(i===void 0){if(Ye(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),Ze(e,t)}else{if(Ye(e,i))return;pf.set(i),s.uniformMatrix4fv(this.addr,!1,pf),Ze(e,i)}}function zy(s,t){let e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function Gy(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ye(e,t))return;s.uniform2iv(this.addr,t),Ze(e,t)}}function Vy(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ye(e,t))return;s.uniform3iv(this.addr,t),Ze(e,t)}}function Wy(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ye(e,t))return;s.uniform4iv(this.addr,t),Ze(e,t)}}function $y(s,t){let e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function qy(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ye(e,t))return;s.uniform2uiv(this.addr,t),Ze(e,t)}}function Xy(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ye(e,t))return;s.uniform3uiv(this.addr,t),Ze(e,t)}}function Yy(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ye(e,t))return;s.uniform4uiv(this.addr,t),Ze(e,t)}}function Zy(s,t,e){let i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n);let r;this.type===s.SAMPLER_2D_SHADOW?(sd.compareFunction=e.isReversedDepthBuffer()?Xl:ql,r=sd):r=If,e.setTexture2D(t||r,n)}function Ky(s,t,e){let i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n),e.setTexture3D(t||Df,n)}function Jy(s,t,e){let i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n),e.setTextureCube(t||Ff,n)}function jy(s,t,e){let i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n),e.setTexture2DArray(t||Lf,n)}function Qy(s){switch(s){case 5126:return Fy;case 35664:return Ny;case 35665:return Uy;case 35666:return ky;case 35674:return By;case 35675:return Oy;case 35676:return Hy;case 5124:case 35670:return zy;case 35667:case 35671:return Gy;case 35668:case 35672:return Vy;case 35669:case 35673:return Wy;case 5125:return $y;case 36294:return qy;case 36295:return Xy;case 36296:return Yy;case 35678:case 36198:case 36298:case 36306:case 35682:return Zy;case 35679:case 36299:case 36307:return Ky;case 35680:case 36300:case 36308:case 36293:return Jy;case 36289:case 36303:case 36311:case 36292:return jy}}function tx(s,t){s.uniform1fv(this.addr,t)}function ex(s,t){let e=sr(t,this.size,2);s.uniform2fv(this.addr,e)}function ix(s,t){let e=sr(t,this.size,3);s.uniform3fv(this.addr,e)}function nx(s,t){let e=sr(t,this.size,4);s.uniform4fv(this.addr,e)}function sx(s,t){let e=sr(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function rx(s,t){let e=sr(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function ax(s,t){let e=sr(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function ox(s,t){s.uniform1iv(this.addr,t)}function lx(s,t){s.uniform2iv(this.addr,t)}function cx(s,t){s.uniform3iv(this.addr,t)}function hx(s,t){s.uniform4iv(this.addr,t)}function dx(s,t){s.uniform1uiv(this.addr,t)}function ux(s,t){s.uniform2uiv(this.addr,t)}function fx(s,t){s.uniform3uiv(this.addr,t)}function px(s,t){s.uniform4uiv(this.addr,t)}function mx(s,t,e){let i=this.cache,n=t.length,r=Ql(e,n);Ye(i,r)||(s.uniform1iv(this.addr,r),Ze(i,r));let a;this.type===s.SAMPLER_2D_SHADOW?a=sd:a=If;for(let o=0;o!==n;++o)e.setTexture2D(t[o]||a,r[o])}function gx(s,t,e){let i=this.cache,n=t.length,r=Ql(e,n);Ye(i,r)||(s.uniform1iv(this.addr,r),Ze(i,r));for(let a=0;a!==n;++a)e.setTexture3D(t[a]||Df,r[a])}function yx(s,t,e){let i=this.cache,n=t.length,r=Ql(e,n);Ye(i,r)||(s.uniform1iv(this.addr,r),Ze(i,r));for(let a=0;a!==n;++a)e.setTextureCube(t[a]||Ff,r[a])}function xx(s,t,e){let i=this.cache,n=t.length,r=Ql(e,n);Ye(i,r)||(s.uniform1iv(this.addr,r),Ze(i,r));for(let a=0;a!==n;++a)e.setTexture2DArray(t[a]||Lf,r[a])}function vx(s){switch(s){case 5126:return tx;case 35664:return ex;case 35665:return ix;case 35666:return nx;case 35674:return sx;case 35675:return rx;case 35676:return ax;case 5124:case 35670:return ox;case 35667:case 35671:return lx;case 35668:case 35672:return cx;case 35669:case 35673:return hx;case 5125:return dx;case 36294:return ux;case 36295:return fx;case 36296:return px;case 35678:case 36198:case 36298:case 36306:case 35682:return mx;case 35679:case 36299:case 36307:return gx;case 35680:case 36300:case 36308:case 36293:return yx;case 36289:case 36303:case 36311:case 36292:return xx}}var rd=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=Qy(e.type)}},ad=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=vx(e.type)}},od=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){let n=this.seq;for(let r=0,a=n.length;r!==a;++r){let o=n[r];o.setValue(t,e[o.id],i)}}},id=/(\w+)(\])?(\[|\.)?/g;function yf(s,t){s.seq.push(t),s.map[t.id]=t}function _x(s,t,e){let i=s.name,n=i.length;for(id.lastIndex=0;;){let r=id.exec(i),a=id.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===n){yf(e,c===void 0?new rd(o,s,t):new ad(o,s,t));break}else{let f=e.map[o];f===void 0&&(f=new od(o),yf(e,f)),e=f}}}var nr=class{constructor(t,e){this.seq=[],this.map={};let i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){let o=t.getActiveUniform(e,a),l=t.getUniformLocation(e,o.name);_x(o,l,this)}let n=[],r=[];for(let a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?n.push(a):r.push(a);n.length>0&&(this.seq=n.concat(r))}setValue(t,e,i,n){let r=this.map[e];r!==void 0&&r.setValue(t,i,n)}setOptional(t,e,i){let n=e[i];n!==void 0&&this.setValue(t,i,n)}static upload(t,e,i,n){for(let r=0,a=e.length;r!==a;++r){let o=e[r],l=i[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,n)}}static seqWithValue(t,e){let i=[];for(let n=0,r=t.length;n!==r;++n){let a=t[n];a.id in e&&i.push(a)}return i}};function xf(s,t,e){let i=s.createShader(t);return s.shaderSource(i,e),s.compileShader(i),i}var bx=37297,Mx=0;function Sx(s,t){let e=s.split(`
`),i=[],n=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=n;a<r;a++){let o=a+1;i.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return i.join(`
`)}var vf=new $t;function wx(s){se._getMatrix(vf,se.workingColorSpace,s);let t=`mat3( ${vf.elements.map(e=>e.toFixed(4))} )`;switch(se.getTransfer(s)){case Fr:return[t,"LinearTransferOETF"];case pe:return[t,"sRGBTransferOETF"];default:return Ht("WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function _f(s,t,e){let i=s.getShaderParameter(t,s.COMPILE_STATUS),r=(s.getShaderInfoLog(t)||"").trim();if(i&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+Sx(s.getShaderSource(t),o)}else return r}function Ex(s,t){let e=wx(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var Tx={[Ah]:"Linear",[Rh]:"Reinhard",[Ch]:"Cineon",[ra]:"ACESFilmic",[Ih]:"AgX",[Lh]:"Neutral",[Ph]:"Custom"};function Ax(s,t){let e=Tx[t];return e===void 0?(Ht("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Zl=new k;function Rx(){se.getLuminanceCoefficients(Zl);let s=Zl.x.toFixed(4),t=Zl.y.toFixed(4),e=Zl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Cx(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(xa).join(`
`)}function Px(s){let t=[];for(let e in s){let i=s[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function Ix(s,t){let e={},i=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let n=0;n<i;n++){let r=s.getActiveAttrib(t,n),a=r.name,o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:s.getAttribLocation(t,a),locationSize:o}}return e}function xa(s){return s!==""}function bf(s,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Mf(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Lx=/^[ \t]*#include +<([\w\d./]+)>/gm;function ld(s){return s.replace(Lx,Fx)}var Dx=new Map;function Fx(s,t){let e=jt[t];if(e===void 0){let i=Dx.get(t);if(i!==void 0)e=jt[i],Ht('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return ld(e)}var Nx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Sf(s){return s.replace(Nx,Ux)}function Ux(s,t,e,i){let n="";for(let r=parseInt(t);r<parseInt(e);r++)n+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return n}function wf(s){let t=`precision ${s.precision} float;
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
#define LOW_PRECISION`),t}var kx={[hs]:"SHADOWMAP_TYPE_PCF",[js]:"SHADOWMAP_TYPE_VSM"};function Bx(s){return kx[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Ox={[Vn]:"ENVMAP_TYPE_CUBE",[us]:"ENVMAP_TYPE_CUBE",[aa]:"ENVMAP_TYPE_CUBE_UV"};function Hx(s){return s.envMap===!1?"ENVMAP_TYPE_CUBE":Ox[s.envMapMode]||"ENVMAP_TYPE_CUBE"}var zx={[us]:"ENVMAP_MODE_REFRACTION"};function Gx(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":zx[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Vx={[rl]:"ENVMAP_BLENDING_MULTIPLY",[Hu]:"ENVMAP_BLENDING_MIX",[zu]:"ENVMAP_BLENDING_ADD"};function Wx(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":Vx[s.combine]||"ENVMAP_BLENDING_NONE"}function $x(s){let t=s.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:i,maxMip:e}}function qx(s,t,e,i){let n=s.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,l=Bx(e),c=Hx(e),h=Gx(e),f=Wx(e),d=$x(e),u=Cx(e),g=Px(r),y=n.createProgram(),m,p,v=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(xa).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(xa).join(`
`),p.length>0&&(p+=`
`)):(m=[wf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(xa).join(`
`),p=[wf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Hi?"#define TONE_MAPPING":"",e.toneMapping!==Hi?jt.tonemapping_pars_fragment:"",e.toneMapping!==Hi?Ax("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",jt.colorspace_pars_fragment,Ex("linearToOutputTexel",e.outputColorSpace),Rx(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(xa).join(`
`)),a=ld(a),a=bf(a,e),a=Mf(a,e),o=ld(o),o=bf(o,e),o=Mf(o,e),a=Sf(a),o=Sf(o),e.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=[u,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===Hh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Hh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let M=v+m+a,b=v+p+o,S=xf(n,n.VERTEX_SHADER,M),_=xf(n,n.FRAGMENT_SHADER,b);n.attachShader(y,S),n.attachShader(y,_),e.index0AttributeName!==void 0?n.bindAttribLocation(y,0,e.index0AttributeName):e.hasPositionAttribute===!0&&n.bindAttribLocation(y,0,"position"),n.linkProgram(y);function T(D){if(s.debug.checkShaderErrors){let C=n.getProgramInfoLog(y)||"",F=n.getShaderInfoLog(S)||"",A=n.getShaderInfoLog(_)||"",I=C.trim(),B=F.trim(),O=A.trim(),$=!0,L=!0;if(n.getProgramParameter(y,n.LINK_STATUS)===!1)if($=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(n,y,S,_);else{let z=_f(n,S,"vertex"),G=_f(n,_,"fragment");Gt("WebGLProgram: Shader Error "+n.getError()+" - VALIDATE_STATUS "+n.getProgramParameter(y,n.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+I+`
`+z+`
`+G)}else I!==""?Ht("WebGLProgram: Program Info Log:",I):(B===""||O==="")&&(L=!1);L&&(D.diagnostics={runnable:$,programLog:I,vertexShader:{log:B,prefix:m},fragmentShader:{log:O,prefix:p}})}n.deleteShader(S),n.deleteShader(_),x=new nr(n,y),w=Ix(n,y)}let x;this.getUniforms=function(){return x===void 0&&T(this),x};let w;this.getAttributes=function(){return w===void 0&&T(this),w};let P=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return P===!1&&(P=n.getProgramParameter(y,bx)),P},this.destroy=function(){i.releaseStatesOfProgram(this),n.deleteProgram(y),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Mx++,this.cacheKey=t,this.usedTimes=1,this.program=y,this.vertexShader=S,this.fragmentShader=_,this}var Xx=0,cd=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,i){let n=this._getShaderCacheForMaterial(t);return n.has(e)===!1&&(n.add(e),e.usedTimes++),n.has(i)===!1&&(n.add(i),i.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){let e=this.shaderCache,i=e.get(t);return i===void 0&&(i=new hd(t),e.set(t,i)),i}},hd=class{constructor(t){this.id=Xx++,this.code=t,this.usedTimes=0}};function Yx(s){return s===$n||s===ua||s===fa}function Zx(s,t,e,i,n,r){let a=new Br,o=new cd,l=new Set,c=[],h=new Map,f=i.logarithmicDepthBuffer,d=i.precision,u={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(x){return l.add(x),x===0?"uv":`uv${x}`}function y(x,w,P,D,C,F){let A=D.fog,I=C.geometry,B=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?D.environment:null,O=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,$=t.get(x.envMap||B,O),L=$&&$.mapping===aa?$.image.height:null,z=u[x.type];x.precision!==null&&(d=i.getMaxPrecision(x.precision),d!==x.precision&&Ht("WebGLProgram.getParameters:",x.precision,"not supported, using",d,"instead."));let G=I.morphAttributes.position||I.morphAttributes.normal||I.morphAttributes.color,rt=G!==void 0?G.length:0,et=0;I.morphAttributes.position!==void 0&&(et=1),I.morphAttributes.normal!==void 0&&(et=2),I.morphAttributes.color!==void 0&&(et=3);let Et,vt,Tt,X;if(z){let ge=sn[z];Et=ge.vertexShader,vt=ge.fragmentShader}else{Et=x.vertexShader,vt=x.fragmentShader;let ge=o.getVertexShaderStage(x),ce=o.getFragmentShaderStage(x);o.update(x,ge,ce),Tt=ge.id,X=ce.id}let j=s.getRenderTarget(),ct=s.state.buffers.depth.getReversed(),Mt=C.isInstancedMesh===!0,dt=C.isBatchedMesh===!0,St=!!x.map,Zt=!!x.matcap,kt=!!$,Xt=!!x.aoMap,me=!!x.lightMap,Qt=!!x.bumpMap&&x.wireframe===!1,fe=!!x.normalMap,ze=!!x.displacementMap,Ke=!!x.emissiveMap,we=!!x.metalnessMap,Ie=!!x.roughnessMap,V=x.anisotropy>0,ve=x.clearcoat>0,oe=x.dispersion>0,U=x.retroreflectivity>0,E=x.iridescence>0,W=x.sheen>0,Z=x.transmission>0,Q=V&&!!x.anisotropyMap,ht=ve&&!!x.clearcoatMap,mt=ve&&!!x.clearcoatNormalMap,tt=ve&&!!x.clearcoatRoughnessMap,nt=E&&!!x.iridescenceMap,ft=E&&!!x.iridescenceThicknessMap,Ft=W&&!!x.sheenColorMap,xt=W&&!!x.sheenRoughnessMap,gt=!!x.specularMap,Nt=!!x.specularColorMap,Bt=!!x.specularIntensityMap,Wt=Z&&!!x.transmissionMap,N=Z&&!!x.thicknessMap,lt=!!x.gradientMap,J=!!x.alphaMap,ot=x.alphaTest>0,ut=!!x.alphaHash,st=!!x.extensions,Lt=Hi;x.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(Lt=s.toneMapping);let It={shaderID:z,shaderType:x.type,shaderName:x.name,vertexShader:Et,fragmentShader:vt,defines:x.defines,customVertexShaderID:Tt,customFragmentShaderID:X,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:d,batching:dt,batchingColor:dt&&C._colorsTexture!==null,instancing:Mt,instancingColor:Mt&&C.instanceColor!==null,instancingMorph:Mt&&C.morphTexture!==null,outputColorSpace:j===null?s.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:se.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:St,matcap:Zt,envMap:kt,envMapMode:kt&&$.mapping,envMapCubeUVHeight:L,aoMap:Xt,lightMap:me,bumpMap:Qt,normalMap:fe,displacementMap:ze,emissiveMap:Ke,normalMapObjectSpace:fe&&x.normalMapType===Wu,normalMapTangentSpace:fe&&x.normalMapType===pa,packedNormalMap:fe&&x.normalMapType===pa&&Yx(x.normalMap.format),metalnessMap:we,roughnessMap:Ie,anisotropy:V,anisotropyMap:Q,clearcoat:ve,clearcoatMap:ht,clearcoatNormalMap:mt,clearcoatRoughnessMap:tt,dispersion:oe,retroreflection:U,iridescence:E,iridescenceMap:nt,iridescenceThicknessMap:ft,sheen:W,sheenColorMap:Ft,sheenRoughnessMap:xt,specularMap:gt,specularColorMap:Nt,specularIntensityMap:Bt,transmission:Z,transmissionMap:Wt,thicknessMap:N,gradientMap:lt,opaque:x.transparent===!1&&x.blending===Gn&&x.alphaToCoverage===!1,alphaMap:J,alphaTest:ot,alphaHash:ut,combine:x.combine,mapUv:St&&g(x.map.channel),aoMapUv:Xt&&g(x.aoMap.channel),lightMapUv:me&&g(x.lightMap.channel),bumpMapUv:Qt&&g(x.bumpMap.channel),normalMapUv:fe&&g(x.normalMap.channel),displacementMapUv:ze&&g(x.displacementMap.channel),emissiveMapUv:Ke&&g(x.emissiveMap.channel),metalnessMapUv:we&&g(x.metalnessMap.channel),roughnessMapUv:Ie&&g(x.roughnessMap.channel),anisotropyMapUv:Q&&g(x.anisotropyMap.channel),clearcoatMapUv:ht&&g(x.clearcoatMap.channel),clearcoatNormalMapUv:mt&&g(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:tt&&g(x.clearcoatRoughnessMap.channel),iridescenceMapUv:nt&&g(x.iridescenceMap.channel),iridescenceThicknessMapUv:ft&&g(x.iridescenceThicknessMap.channel),sheenColorMapUv:Ft&&g(x.sheenColorMap.channel),sheenRoughnessMapUv:xt&&g(x.sheenRoughnessMap.channel),specularMapUv:gt&&g(x.specularMap.channel),specularColorMapUv:Nt&&g(x.specularColorMap.channel),specularIntensityMapUv:Bt&&g(x.specularIntensityMap.channel),transmissionMapUv:Wt&&g(x.transmissionMap.channel),thicknessMapUv:N&&g(x.thicknessMap.channel),alphaMapUv:J&&g(x.alphaMap.channel),vertexTangents:!!I.attributes.tangent&&(fe||V),vertexNormals:!!I.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!I.attributes.color&&I.attributes.color.itemSize===4,pointsUvs:C.isPoints===!0&&!!I.attributes.uv&&(St||J),fog:!!A,useFog:x.fog===!0,fogExp2:!!A&&A.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||I.attributes.normal===void 0&&fe===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:ct,skinning:C.isSkinnedMesh===!0,hasPositionAttribute:I.attributes.position!==void 0,morphTargets:I.morphAttributes.position!==void 0,morphNormals:I.morphAttributes.normal!==void 0,morphColors:I.morphAttributes.color!==void 0,morphTargetsCount:rt,morphTextureStride:et,numSunLights:w.sun.length,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numSunLightShadows:w.sunShadowMap.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numLightProbeGrids:F.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:s.shadowMap.enabled&&P.length>0,shadowMapType:s.shadowMap.type,toneMapping:Lt,decodeVideoTexture:St&&x.map.isVideoTexture===!0&&se.getTransfer(x.map.colorSpace)===pe,decodeVideoTextureEmissive:Ke&&x.emissiveMap.isVideoTexture===!0&&se.getTransfer(x.emissiveMap.colorSpace)===pe,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Ae,flipSided:x.side===Xe,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:st&&x.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(st&&x.extensions.multiDraw===!0||dt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return It.vertexUv1s=l.has(1),It.vertexUv2s=l.has(2),It.vertexUv3s=l.has(3),l.clear(),It}function m(x){let w=[];if(x.shaderID?w.push(x.shaderID):(w.push(x.customVertexShaderID),w.push(x.customFragmentShaderID)),x.defines!==void 0)for(let P in x.defines)w.push(P),w.push(x.defines[P]);return x.isRawShaderMaterial===!1&&(p(w,x),v(w,x),w.push(s.outputColorSpace)),w.push(x.customProgramCacheKey),w.join()}function p(x,w){x.push(w.precision),x.push(w.outputColorSpace),x.push(w.envMapMode),x.push(w.envMapCubeUVHeight),x.push(w.mapUv),x.push(w.alphaMapUv),x.push(w.lightMapUv),x.push(w.aoMapUv),x.push(w.bumpMapUv),x.push(w.normalMapUv),x.push(w.displacementMapUv),x.push(w.emissiveMapUv),x.push(w.metalnessMapUv),x.push(w.roughnessMapUv),x.push(w.anisotropyMapUv),x.push(w.clearcoatMapUv),x.push(w.clearcoatNormalMapUv),x.push(w.clearcoatRoughnessMapUv),x.push(w.iridescenceMapUv),x.push(w.iridescenceThicknessMapUv),x.push(w.sheenColorMapUv),x.push(w.sheenRoughnessMapUv),x.push(w.specularMapUv),x.push(w.specularColorMapUv),x.push(w.specularIntensityMapUv),x.push(w.transmissionMapUv),x.push(w.thicknessMapUv),x.push(w.combine),x.push(w.fogExp2),x.push(w.sizeAttenuation),x.push(w.morphTargetsCount),x.push(w.morphAttributeCount),x.push(w.numSunLights),x.push(w.numDirLights),x.push(w.numPointLights),x.push(w.numSpotLights),x.push(w.numSpotLightMaps),x.push(w.numHemiLights),x.push(w.numRectAreaLights),x.push(w.numSunLightShadows),x.push(w.numDirLightShadows),x.push(w.numPointLightShadows),x.push(w.numSpotLightShadows),x.push(w.numSpotLightShadowsWithMaps),x.push(w.numLightProbes),x.push(w.shadowMapType),x.push(w.toneMapping),x.push(w.numClippingPlanes),x.push(w.numClipIntersection),x.push(w.depthPacking)}function v(x,w){a.disableAll(),w.instancing&&a.enable(0),w.instancingColor&&a.enable(1),w.instancingMorph&&a.enable(2),w.matcap&&a.enable(3),w.envMap&&a.enable(4),w.normalMapObjectSpace&&a.enable(5),w.normalMapTangentSpace&&a.enable(6),w.clearcoat&&a.enable(7),w.iridescence&&a.enable(8),w.alphaTest&&a.enable(9),w.vertexColors&&a.enable(10),w.vertexAlphas&&a.enable(11),w.vertexUv1s&&a.enable(12),w.vertexUv2s&&a.enable(13),w.vertexUv3s&&a.enable(14),w.vertexTangents&&a.enable(15),w.anisotropy&&a.enable(16),w.alphaHash&&a.enable(17),w.batching&&a.enable(18),w.dispersion&&a.enable(19),w.retroreflection&&a.enable(24),w.batchingColor&&a.enable(20),w.gradientMap&&a.enable(21),w.packedNormalMap&&a.enable(22),w.vertexNormals&&a.enable(23),x.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.reversedDepthBuffer&&a.enable(4),w.skinning&&a.enable(5),w.morphTargets&&a.enable(6),w.morphNormals&&a.enable(7),w.morphColors&&a.enable(8),w.premultipliedAlpha&&a.enable(9),w.shadowMapEnabled&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.transmission&&a.enable(15),w.sheen&&a.enable(16),w.opaque&&a.enable(17),w.pointsUvs&&a.enable(18),w.decodeVideoTexture&&a.enable(19),w.decodeVideoTextureEmissive&&a.enable(20),w.alphaToCoverage&&a.enable(21),w.numLightProbeGrids>0&&a.enable(22),w.hasPositionAttribute&&a.enable(23),x.push(a.mask)}function M(x){let w=u[x.type],P;if(w){let D=sn[w];P=rf.clone(D.uniforms)}else P=x.uniforms;return P}function b(x,w){let P=h.get(w);return P!==void 0?++P.usedTimes:(P=new qx(s,w,x,n),c.push(P),h.set(w,P)),P}function S(x){if(--x.usedTimes===0){let w=c.indexOf(x);c[w]=c[c.length-1],c.pop(),h.delete(x.cacheKey),x.destroy()}}function _(x){o.remove(x)}function T(){o.dispose()}return{getParameters:y,getProgramCacheKey:m,getUniforms:M,acquireProgram:b,releaseProgram:S,releaseShaderCache:_,programs:c,dispose:T}}function Kx(){let s=new WeakMap;function t(a){return s.has(a)}function e(a){let o=s.get(a);return o===void 0&&(o={},s.set(a,o)),o}function i(a){s.delete(a)}function n(a,o,l){s.get(a)[o]=l}function r(){s=new WeakMap}return{has:t,get:e,remove:i,update:n,dispose:r}}function Jx(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.materialVariant!==t.materialVariant?s.materialVariant-t.materialVariant:s.z!==t.z?s.z-t.z:s.id-t.id}function Ef(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function Tf(){let s=[],t=0,e=[],i=[],n=[];function r(){t=0,e.length=0,i.length=0,n.length=0}function a(d){let u=0;return d.isInstancedMesh&&(u+=2),d.isSkinnedMesh&&(u+=1),u}function o(d,u,g,y,m,p){let v=s[t];return v===void 0?(v={id:d.id,object:d,geometry:u,material:g,materialVariant:a(d),groupOrder:y,renderOrder:d.renderOrder,z:m,group:p},s[t]=v):(v.id=d.id,v.object=d,v.geometry=u,v.material=g,v.materialVariant=a(d),v.groupOrder=y,v.renderOrder=d.renderOrder,v.z=m,v.group=p),t++,v}function l(d,u,g,y,m,p,v){v.reversedDepth===!0&&(m=-m);let M=o(d,u,g,y,m,p);g.transmission>0?i.push(M):g.transparent===!0?n.push(M):e.push(M)}function c(d,u,g,y,m,p){let v=o(d,u,g,y,m,p);g.transmission>0?i.unshift(v):g.transparent===!0?n.unshift(v):e.unshift(v)}function h(d,u){e.length>1&&e.sort(d||Jx),i.length>1&&i.sort(u||Ef),n.length>1&&n.sort(u||Ef)}function f(){for(let d=t,u=s.length;d<u;d++){let g=s[d];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:e,transmissive:i,transparent:n,init:r,push:l,unshift:c,finish:f,sort:h}}function jx(){let s=new WeakMap;function t(i,n){let r=s.get(i),a;return r===void 0?(a=new Tf,s.set(i,[a])):n>=r.length?(a=new Tf,r.push(a)):a=r[n],a}function e(){s=new WeakMap}return{get:t,dispose:e}}function Qx(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new k,color:new at};break;case"SpotLight":e={position:new k,direction:new k,color:new at,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new k,color:new at,distance:0,decay:0};break;case"HemisphereLight":e={direction:new k,skyColor:new at,groundColor:new at};break;case"RectAreaLight":e={color:new at,position:new k,halfWidth:new k,halfHeight:new k};break}return s[t.id]=e,e}}}function tv(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new At};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new At};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new At,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}var ev=0;function iv(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function nv(s){let t=new Qx,e=tv(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new k);let n=new k,r=new ee,a=new ee;function o(c){let h=0,f=0,d=0;for(let C=0;C<9;C++)i.probe[C].set(0,0,0);let u=0,g=0,y=0,m=0,p=0,v=0,M=0,b=0,S=0,_=0,T=0,x=0,w=0,P=0;c.sort(iv);for(let C=0,F=c.length;C<F;C++){let A=c[C],I=A.color,B=A.intensity,O=A.distance,$=null;if(A.shadow&&A.shadow.map&&(A.shadow.map.texture.format===$n?$=A.shadow.map.texture:$=A.shadow.map.depthTexture||A.shadow.map.texture),A.isAmbientLight)h+=I.r*B,f+=I.g*B,d+=I.b*B;else if(A.isLightProbe){for(let L=0;L<9;L++)i.probe[L].addScaledVector(A.sh.coefficients[L],B);P++}else if(A.isSunLight){let L=t.get(A);if(L.color.copy(A.color).multiplyScalar(A.intensity),A.castShadow){let z=A.shadow,G=e.get(A);G.shadowIntensity=z.intensity,G.shadowBias=z.bias,G.shadowNormalBias=z.normalBias,G.shadowRadius=z.radius,G.shadowMapSize.copy(z.mapSize).multiply(z.getFrameExtents()),i.sunShadow[g]=G,i.sunShadowMap[g]=$;let rt=z.getViewportCount();for(let et=0;et<rt;et++)i.sunShadowMatrix[y+et]=z.getMatrix(et),i.sunShadowCascade[y+et]=z._cascadeData[et];y+=rt,g++}i.sun[u]=L,u++}else if(A.isDirectionalLight){let L=t.get(A);if(L.color.copy(A.color).multiplyScalar(A.intensity),A.castShadow){let z=A.shadow,G=e.get(A);G.shadowIntensity=z.intensity,G.shadowBias=z.bias,G.shadowNormalBias=z.normalBias,G.shadowRadius=z.radius,G.shadowMapSize=z.mapSize,i.directionalShadow[m]=G,i.directionalShadowMap[m]=$,i.directionalShadowMatrix[m]=A.shadow.matrix,S++}i.directional[m]=L,m++}else if(A.isSpotLight){let L=t.get(A);L.position.setFromMatrixPosition(A.matrixWorld),L.color.copy(I).multiplyScalar(B),L.distance=O,L.coneCos=Math.cos(A.angle),L.penumbraCos=Math.cos(A.angle*(1-A.penumbra)),L.decay=A.decay,i.spot[v]=L;let z=A.shadow;if(A.map&&(i.spotLightMap[x]=A.map,x++,z.updateMatrices(A),A.castShadow&&w++),i.spotLightMatrix[v]=z.matrix,A.castShadow){let G=e.get(A);G.shadowIntensity=z.intensity,G.shadowBias=z.bias,G.shadowNormalBias=z.normalBias,G.shadowRadius=z.radius,G.shadowMapSize=z.mapSize,i.spotShadow[v]=G,i.spotShadowMap[v]=$,T++}v++}else if(A.isRectAreaLight){let L=t.get(A);L.color.copy(I).multiplyScalar(B),L.halfWidth.set(A.width*.5,0,0),L.halfHeight.set(0,A.height*.5,0),i.rectArea[M]=L,M++}else if(A.isPointLight){let L=t.get(A);if(L.color.copy(A.color).multiplyScalar(A.intensity),L.distance=A.distance,L.decay=A.decay,A.castShadow){let z=A.shadow,G=e.get(A);G.shadowIntensity=z.intensity,G.shadowBias=z.bias,G.shadowNormalBias=z.normalBias,G.shadowRadius=z.radius,G.shadowMapSize=z.mapSize,G.shadowCameraNear=z.camera.near,G.shadowCameraFar=z.camera.far,i.pointShadow[p]=G,i.pointShadowMap[p]=$,i.pointShadowMatrix[p]=A.shadow.matrix,_++}i.point[p]=L,p++}else if(A.isHemisphereLight){let L=t.get(A);L.skyColor.copy(A.color).multiplyScalar(B),L.groundColor.copy(A.groundColor).multiplyScalar(B),i.hemi[b]=L,b++}}M>0&&(s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=bt.LTC_FLOAT_1,i.rectAreaLTC2=bt.LTC_FLOAT_2):(i.rectAreaLTC1=bt.LTC_HALF_1,i.rectAreaLTC2=bt.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=f,i.ambient[2]=d;let D=i.hash;(D.sunLength!==u||D.directionalLength!==m||D.pointLength!==p||D.spotLength!==v||D.rectAreaLength!==M||D.hemiLength!==b||D.numSunShadows!==g||D.numDirectionalShadows!==S||D.numPointShadows!==_||D.numSpotShadows!==T||D.numSpotMaps!==x||D.numLightProbes!==P)&&(i.sun.length=u,i.directional.length=m,i.spot.length=v,i.rectArea.length=M,i.point.length=p,i.hemi.length=b,i.sunShadow.length=g,i.sunShadowMap.length=g,i.sunShadowMatrix.length=y,i.sunShadowCascade.length=y,i.directionalShadow.length=S,i.directionalShadowMap.length=S,i.directionalShadowMatrix.length=S,i.pointShadow.length=_,i.pointShadowMap.length=_,i.pointShadowMatrix.length=_,i.spotShadow.length=T,i.spotShadowMap.length=T,i.spotLightMatrix.length=T+x-w,i.spotLightMap.length=x,i.numSpotLightShadowsWithMaps=w,i.numLightProbes=P,D.sunLength=u,D.directionalLength=m,D.pointLength=p,D.spotLength=v,D.rectAreaLength=M,D.hemiLength=b,D.numSunShadows=g,D.numDirectionalShadows=S,D.numPointShadows=_,D.numSpotShadows=T,D.numSpotMaps=x,D.numLightProbes=P,i.version=ev++)}function l(c,h){let f=0,d=0,u=0,g=0,y=0,m=0,p=h.matrixWorldInverse;for(let v=0,M=c.length;v<M;v++){let b=c[v];if(b.isSunLight){let S=i.sun[f];S.direction.setFromMatrixPosition(b.matrixWorld),S.direction.transformDirection(p),f++}else if(b.isDirectionalLight){let S=i.directional[d];S.direction.setFromMatrixPosition(b.matrixWorld),n.setFromMatrixPosition(b.target.matrixWorld),S.direction.sub(n),S.direction.transformDirection(p),d++}else if(b.isSpotLight){let S=i.spot[g];S.position.setFromMatrixPosition(b.matrixWorld),S.position.applyMatrix4(p),S.direction.setFromMatrixPosition(b.matrixWorld),n.setFromMatrixPosition(b.target.matrixWorld),S.direction.sub(n),S.direction.transformDirection(p),g++}else if(b.isRectAreaLight){let S=i.rectArea[y];S.position.setFromMatrixPosition(b.matrixWorld),S.position.applyMatrix4(p),a.identity(),r.copy(b.matrixWorld),r.premultiply(p),a.extractRotation(r),S.halfWidth.set(b.width*.5,0,0),S.halfHeight.set(0,b.height*.5,0),S.halfWidth.applyMatrix4(a),S.halfHeight.applyMatrix4(a),y++}else if(b.isPointLight){let S=i.point[u];S.position.setFromMatrixPosition(b.matrixWorld),S.position.applyMatrix4(p),u++}else if(b.isHemisphereLight){let S=i.hemi[m];S.direction.setFromMatrixPosition(b.matrixWorld),S.direction.transformDirection(p),m++}}}return{setup:o,setupView:l,state:i}}function Af(s){let t=new nv(s),e=[],i=[],n=[];function r(d){f.camera=d,e.length=0,i.length=0,n.length=0}function a(d){e.push(d)}function o(d){i.push(d)}function l(d){n.push(d)}function c(){t.setup(e)}function h(d){t.setupView(e,d)}let f={lightsArray:e,shadowsArray:i,lightProbeGridArray:n,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:f,setupLights:c,setupLightsView:h,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function sv(s){let t=new WeakMap;function e(n,r=0){let a=t.get(n),o;return a===void 0?(o=new Af(s),t.set(n,[o])):r>=a.length?(o=new Af(s),a.push(o)):o=a[r],o}function i(){t=new WeakMap}return{get:e,dispose:i}}var rv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,av=`uniform sampler2D shadow_pass;
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
}`,ov=[new k(1,0,0),new k(-1,0,0),new k(0,1,0),new k(0,-1,0),new k(0,0,1),new k(0,0,-1)],lv=[new k(0,-1,0),new k(0,-1,0),new k(0,0,1),new k(0,0,-1),new k(0,-1,0),new k(0,-1,0)],Rf=new ee,ya=new k,nd=new k;function cv(s,t,e){let i=new Ys,n=new At,r=new At,a=new Re,o=new Wo,l=new $o,c={},h=e.maxTextureSize,f={[ji]:Xe,[Xe]:ji,[Ae]:Ae},d=new Ce({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new At},radius:{value:4}},vertexShader:rv,fragmentShader:av}),u=d.clone();u.defines.HORIZONTAL_PASS=1;let g=new ne;g.setAttribute("position",new Yt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new yt(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=hs;let p=this.type;this.render=function(_,T,x){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||_.length===0)return;this.type===bu&&(Ht("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=hs);let w=s.getRenderTarget(),P=s.getActiveCubeFace(),D=s.getActiveMipmapLevel(),C=s.state;C.setBlending(Qi),C.buffers.depth.getReversed()===!0?C.buffers.color.setClear(0,0,0,0):C.buffers.color.setClear(1,1,1,1),C.buffers.depth.setTest(!0),C.setScissorTest(!1);let F=p!==this.type;F&&T.traverse(function(A){A.material&&(Array.isArray(A.material)?A.material.forEach(I=>I.needsUpdate=!0):A.material.needsUpdate=!0)});for(let A=0,I=_.length;A<I;A++){let B=_[A],O=B.shadow;if(O===void 0){Ht("WebGLShadowMap:",B,"has no shadow.");continue}if(O.autoUpdate===!1&&O.needsUpdate===!1)continue;n.copy(O.mapSize);let $=O.getFrameExtents();n.multiply($),r.copy(O.mapSize),(n.x>h||n.y>h)&&(n.x>h&&(r.x=Math.floor(h/$.x),n.x=r.x*$.x,O.mapSize.x=r.x),n.y>h&&(r.y=Math.floor(h/$.y),n.y=r.y*$.y,O.mapSize.y=r.y));let L=s.state.buffers.depth.getReversed();if(O.camera._reversedDepth=L,O.map===null||F===!0){if(O.map!==null&&(O.map.depthTexture!==null&&(O.map.depthTexture.dispose(),O.map.depthTexture=null),O.map.dispose()),this.type===js){if(B.isPointLight){Ht("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}O.map=new Qe(n.x,n.y,{format:$n,type:yi,minFilter:Ve,magFilter:Ve,generateMipmaps:!1}),O.map.texture.name=B.name+".shadowMap",O.map.depthTexture=new Nn(n.x,n.y,Pi),O.map.depthTexture.name=B.name+".shadowMapDepth",O.map.depthTexture.format=Xi,O.map.depthTexture.compareFunction=null,O.map.depthTexture.minFilter=je,O.map.depthTexture.magFilter=je}else B.isPointLight?(O.map=new Kl(n.x),O.map.depthTexture=new Fo(n.x,zi)):(O.map=new Qe(n.x,n.y),O.map.depthTexture=new Nn(n.x,n.y,zi)),O.map.depthTexture.name=B.name+".shadowMap",O.map.depthTexture.format=Xi,this.type===hs?(O.map.depthTexture.compareFunction=L?Xl:ql,O.map.depthTexture.minFilter=Ve,O.map.depthTexture.magFilter=Ve):(O.map.depthTexture.compareFunction=null,O.map.depthTexture.minFilter=je,O.map.depthTexture.magFilter=je);O.camera.updateProjectionMatrix()}O.map.isWebGLCubeRenderTarget!==!0&&(O.map.width!==n.x||O.map.height!==n.y)&&O.map.setSize(n.x,n.y);let z=O.map.isWebGLCubeRenderTarget?6:O.getViewportCount();B.isPointLight!==!0&&O.updateMatrices(B,x);for(let G=0;G<z;G++){let rt=O.getCamera(G);if(B.isPointLight){let et=O.camera,Et=O.matrix,vt=B.distance||et.far;vt!==et.far&&(et.far=vt,et.updateProjectionMatrix()),ya.setFromMatrixPosition(B.matrixWorld),et.position.copy(ya),nd.copy(et.position),nd.add(ov[G]),et.up.copy(lv[G]),et.lookAt(nd),et.updateMatrixWorld(),Et.makeTranslation(-ya.x,-ya.y,-ya.z),Rf.multiplyMatrices(et.projectionMatrix,et.matrixWorldInverse),O._frustum.setFromProjectionMatrix(Rf,et.coordinateSystem,et.reversedDepth)}if(O.map.isWebGLCubeRenderTarget)s.setRenderTarget(O.map,G),s.clear();else{G===0&&(s.setRenderTarget(O.map),s.clear());let et=O.getViewport(G);a.set(r.x*et.x,r.y*et.y,r.x*et.z,r.y*et.w),C.viewport(a)}i=O.getFrustum(G),b(T,x,rt,B,this.type)}O.isPointLightShadow!==!0&&this.type===js&&v(O,x),O.needsUpdate=!1}p=this.type,m.needsUpdate=!1,s.setRenderTarget(w,P,D)};function v(_,T){let x=t.update(y);d.defines.VSM_SAMPLES!==_.blurSamples&&(d.defines.VSM_SAMPLES=_.blurSamples,u.defines.VSM_SAMPLES=_.blurSamples,d.needsUpdate=!0,u.needsUpdate=!0),_.mapPass===null?_.mapPass=new Qe(n.x,n.y,{format:$n,type:yi}):(_.mapPass.width!==_.map.width||_.mapPass.height!==_.map.height)&&_.mapPass.setSize(_.map.width,_.map.height),d.uniforms.shadow_pass.value=_.map.depthTexture,d.uniforms.resolution.value.set(_.map.width,_.map.height),d.uniforms.radius.value=_.radius,s.setRenderTarget(_.mapPass),s.clear(),s.renderBufferDirect(T,null,x,d,y,null),u.uniforms.shadow_pass.value=_.mapPass.texture,u.uniforms.resolution.value.set(_.map.width,_.map.height),u.uniforms.radius.value=_.radius,s.setRenderTarget(_.map),s.clear(),s.renderBufferDirect(T,null,x,u,y,null)}function M(_,T,x,w){let P=null,D=x.isPointLight===!0?_.customDistanceMaterial:_.customDepthMaterial;if(D!==void 0)P=D;else if(P=x.isPointLight===!0?l:o,s.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0||T.alphaToCoverage===!0){let C=P.uuid,F=T.uuid,A=c[C];A===void 0&&(A={},c[C]=A);let I=A[F];I===void 0&&(I=P.clone(),A[F]=I,T.addEventListener("dispose",S)),P=I}if(P.visible=T.visible,P.wireframe=T.wireframe,w===js?P.side=T.shadowSide!==null?T.shadowSide:T.side:P.side=T.shadowSide!==null?T.shadowSide:f[T.side],P.alphaMap=T.alphaMap,P.alphaTest=T.alphaToCoverage===!0?.5:T.alphaTest,P.map=T.map,P.clipShadows=T.clipShadows,P.clippingPlanes=T.clippingPlanes,P.clipIntersection=T.clipIntersection,P.displacementMap=T.displacementMap,P.displacementScale=T.displacementScale,P.displacementBias=T.displacementBias,P.wireframeLinewidth=T.wireframeLinewidth,P.linewidth=T.linewidth,x.isPointLight===!0&&P.isMeshDistanceMaterial===!0){let C=s.properties.get(P);C.light=x}return P}function b(_,T,x,w,P){if(_.visible===!1)return;if(_.layers.test(T.layers)&&(_.isMesh||_.isLine||_.isPoints)&&(_.castShadow||_.receiveShadow&&P===js)&&(!_.frustumCulled||_.intersectsFrustum(i))){_.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,_.matrixWorld);let F=t.update(_),A=_.material;if(Array.isArray(A)){let I=F.groups;for(let B=0,O=I.length;B<O;B++){let $=I[B],L=A[$.materialIndex];if(L&&L.visible){let z=M(_,L,w,P);_.onBeforeShadow(s,_,T,x,F,z,$),s.renderBufferDirect(x,null,F,z,_,$),_.onAfterShadow(s,_,T,x,F,z,$)}}}else if(A.visible){let I=M(_,A,w,P);_.onBeforeShadow(s,_,T,x,F,I,null),s.renderBufferDirect(x,null,F,I,_,null),_.onAfterShadow(s,_,T,x,F,I,null)}}let C=_.children;for(let F=0,A=C.length;F<A;F++)b(C[F],T,x,w,P)}function S(_){_.target.removeEventListener("dispose",S);for(let x in c){let w=c[x],P=_.target.uuid;P in w&&(w[P].dispose(),delete w[P])}}}function hv(s,t){function e(){let N=!1,lt=new Re,J=null,ot=new Re(0,0,0,0);return{setMask:function(ut){J!==ut&&!N&&(s.colorMask(ut,ut,ut,ut),J=ut)},setLocked:function(ut){N=ut},setClear:function(ut,st,Lt,It,ge){ge===!0&&(ut*=It,st*=It,Lt*=It),lt.set(ut,st,Lt,It),ot.equals(lt)===!1&&(s.clearColor(ut,st,Lt,It),ot.copy(lt))},reset:function(){N=!1,J=null,ot.set(-1,0,0,0)}}}function i(){let N=!1,lt=!1,J=null,ot=null,ut=null;return{setReversed:function(st){if(lt!==st){let Lt=t.get("EXT_clip_control");st?Lt.clipControlEXT(Lt.LOWER_LEFT_EXT,Lt.ZERO_TO_ONE_EXT):Lt.clipControlEXT(Lt.LOWER_LEFT_EXT,Lt.NEGATIVE_ONE_TO_ONE_EXT),lt=st;let It=ut;ut=null,this.setClear(It)}},getReversed:function(){return lt},setTest:function(st){st?j(s.DEPTH_TEST):ct(s.DEPTH_TEST)},setMask:function(st){J!==st&&!N&&(s.depthMask(st),J=st)},setFunc:function(st){if(lt&&(st=nf[st]),ot!==st){switch(st){case xo:s.depthFunc(s.NEVER);break;case vo:s.depthFunc(s.ALWAYS);break;case _o:s.depthFunc(s.LESS);break;case Hs:s.depthFunc(s.LEQUAL);break;case bo:s.depthFunc(s.EQUAL);break;case Mo:s.depthFunc(s.GEQUAL);break;case So:s.depthFunc(s.GREATER);break;case wo:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}ot=st}},setLocked:function(st){N=st},setClear:function(st){ut!==st&&(ut=st,lt&&(st=1-st),s.clearDepth(st))},reset:function(){N=!1,J=null,ot=null,ut=null,lt=!1}}}function n(){let N=!1,lt=null,J=null,ot=null,ut=null,st=null,Lt=null,It=null,ge=null;return{setTest:function(ce){N||(ce?j(s.STENCIL_TEST):ct(s.STENCIL_TEST))},setMask:function(ce){lt!==ce&&!N&&(s.stencilMask(ce),lt=ce)},setFunc:function(ce,Ne,_i){(J!==ce||ot!==Ne||ut!==_i)&&(s.stencilFunc(ce,Ne,_i),J=ce,ot=Ne,ut=_i)},setOp:function(ce,Ne,_i){(st!==ce||Lt!==Ne||It!==_i)&&(s.stencilOp(ce,Ne,_i),st=ce,Lt=Ne,It=_i)},setLocked:function(ce){N=ce},setClear:function(ce){ge!==ce&&(s.clearStencil(ce),ge=ce)},reset:function(){N=!1,lt=null,J=null,ot=null,ut=null,st=null,Lt=null,It=null,ge=null}}}let r=new e,a=new i,o=new n,l=new WeakMap,c=new WeakMap,h={},f={},d={},u=new WeakMap,g=[],y=null,m=!1,p=null,v=null,M=null,b=null,S=null,_=null,T=null,x=new at(0,0,0),w=0,P=!1,D=null,C=null,F=null,A=null,I=null,B=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS),O=!1,$=0,L=s.getParameter(s.VERSION);L.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(L)[1]),O=$>=1):L.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(L)[1]),O=$>=2);let z=null,G={},rt=s.getParameter(s.SCISSOR_BOX),et=s.getParameter(s.VIEWPORT),Et=new Re().fromArray(rt),vt=new Re().fromArray(et);function Tt(N,lt,J,ot){let ut=new Uint8Array(4),st=s.createTexture();s.bindTexture(N,st),s.texParameteri(N,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(N,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Lt=0;Lt<J;Lt++)N===s.TEXTURE_3D||N===s.TEXTURE_2D_ARRAY?s.texImage3D(lt,0,s.RGBA,1,1,ot,0,s.RGBA,s.UNSIGNED_BYTE,ut):s.texImage2D(lt+Lt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,ut);return st}let X={};X[s.TEXTURE_2D]=Tt(s.TEXTURE_2D,s.TEXTURE_2D,1),X[s.TEXTURE_CUBE_MAP]=Tt(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),X[s.TEXTURE_2D_ARRAY]=Tt(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),X[s.TEXTURE_3D]=Tt(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),j(s.DEPTH_TEST),a.setFunc(Hs),Qt(!1),fe(Mh),j(s.CULL_FACE),Xt(Qi);function j(N){h[N]!==!0&&(s.enable(N),h[N]=!0)}function ct(N){h[N]!==!1&&(s.disable(N),h[N]=!1)}function Mt(N,lt){return d[N]!==lt?(s.bindFramebuffer(N,lt),d[N]=lt,N===s.DRAW_FRAMEBUFFER&&(d[s.FRAMEBUFFER]=lt),N===s.FRAMEBUFFER&&(d[s.DRAW_FRAMEBUFFER]=lt),!0):!1}function dt(N,lt){let J=g,ot=!1;if(N){J=u.get(lt),J===void 0&&(J=[],u.set(lt,J));let ut=N.textures;if(J.length!==ut.length||J[0]!==s.COLOR_ATTACHMENT0){for(let st=0,Lt=ut.length;st<Lt;st++)J[st]=s.COLOR_ATTACHMENT0+st;J.length=ut.length,ot=!0}}else J[0]!==s.BACK&&(J[0]=s.BACK,ot=!0);ot&&s.drawBuffers(J)}function St(N){return y!==N?(s.useProgram(N),y=N,!0):!1}let Zt={[ds]:s.FUNC_ADD,[Su]:s.FUNC_SUBTRACT,[wu]:s.FUNC_REVERSE_SUBTRACT};Zt[Eu]=s.MIN,Zt[Tu]=s.MAX;let kt={[Au]:s.ZERO,[Ru]:s.ONE,[Cu]:s.SRC_COLOR,[Eh]:s.SRC_ALPHA,[Nu]:s.SRC_ALPHA_SATURATE,[Du]:s.DST_COLOR,[Iu]:s.DST_ALPHA,[Pu]:s.ONE_MINUS_SRC_COLOR,[Th]:s.ONE_MINUS_SRC_ALPHA,[Fu]:s.ONE_MINUS_DST_COLOR,[Lu]:s.ONE_MINUS_DST_ALPHA,[Uu]:s.CONSTANT_COLOR,[ku]:s.ONE_MINUS_CONSTANT_COLOR,[Bu]:s.CONSTANT_ALPHA,[Ou]:s.ONE_MINUS_CONSTANT_ALPHA};function Xt(N,lt,J,ot,ut,st,Lt,It,ge,ce){if(N===Qi){m===!0&&(ct(s.BLEND),m=!1);return}if(m===!1&&(j(s.BLEND),m=!0),N!==Mu){if(N!==p||ce!==P){if((v!==ds||S!==ds)&&(s.blendEquation(s.FUNC_ADD),v=ds,S=ds),ce)switch(N){case Gn:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case tn:s.blendFunc(s.ONE,s.ONE);break;case Sh:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case wh:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:Gt("WebGLState: Invalid blending: ",N);break}else switch(N){case Gn:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case tn:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case Sh:Gt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case wh:Gt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Gt("WebGLState: Invalid blending: ",N);break}M=null,b=null,_=null,T=null,x.set(0,0,0),w=0,p=N,P=ce}return}ut=ut||lt,st=st||J,Lt=Lt||ot,(lt!==v||ut!==S)&&(s.blendEquationSeparate(Zt[lt],Zt[ut]),v=lt,S=ut),(J!==M||ot!==b||st!==_||Lt!==T)&&(s.blendFuncSeparate(kt[J],kt[ot],kt[st],kt[Lt]),M=J,b=ot,_=st,T=Lt),(It.equals(x)===!1||ge!==w)&&(s.blendColor(It.r,It.g,It.b,ge),x.copy(It),w=ge),p=N,P=!1}function me(N,lt){N.side===Ae?ct(s.CULL_FACE):j(s.CULL_FACE);let J=N.side===Xe;lt&&(J=!J),Qt(J),N.blending===Gn&&N.transparent===!1?Xt(Qi):Xt(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),a.setFunc(N.depthFunc),a.setTest(N.depthTest),a.setMask(N.depthWrite),r.setMask(N.colorWrite);let ot=N.stencilWrite;o.setTest(ot),ot&&(o.setMask(N.stencilWriteMask),o.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),o.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),Ke(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?j(s.SAMPLE_ALPHA_TO_COVERAGE):ct(s.SAMPLE_ALPHA_TO_COVERAGE)}function Qt(N){D!==N&&(N?s.frontFace(s.CW):s.frontFace(s.CCW),D=N)}function fe(N){N!==vu?(j(s.CULL_FACE),N!==C&&(N===Mh?s.cullFace(s.BACK):N===_u?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):ct(s.CULL_FACE),C=N}function ze(N){N!==F&&(O&&s.lineWidth(N),F=N)}function Ke(N,lt,J){N?(j(s.POLYGON_OFFSET_FILL),(A!==lt||I!==J)&&(A=lt,I=J,a.getReversed()&&(lt=-lt),s.polygonOffset(lt,J))):ct(s.POLYGON_OFFSET_FILL)}function we(N){N?j(s.SCISSOR_TEST):ct(s.SCISSOR_TEST)}function Ie(N){N===void 0&&(N=s.TEXTURE0+B-1),z!==N&&(s.activeTexture(N),z=N)}function V(N,lt,J){J===void 0&&(z===null?J=s.TEXTURE0+B-1:J=z);let ot=G[J];ot===void 0&&(ot={type:void 0,texture:void 0},G[J]=ot),(ot.type!==N||ot.texture!==lt)&&(z!==J&&(s.activeTexture(J),z=J),s.bindTexture(N,lt||X[N]),ot.type=N,ot.texture=lt)}function ve(){let N=G[z];N!==void 0&&N.type!==void 0&&(s.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function oe(){try{s.compressedTexImage2D(...arguments)}catch(N){Gt("WebGLState:",N)}}function U(){try{s.compressedTexImage3D(...arguments)}catch(N){Gt("WebGLState:",N)}}function E(){try{s.texSubImage2D(...arguments)}catch(N){Gt("WebGLState:",N)}}function W(){try{s.texSubImage3D(...arguments)}catch(N){Gt("WebGLState:",N)}}function Z(){try{s.compressedTexSubImage2D(...arguments)}catch(N){Gt("WebGLState:",N)}}function Q(){try{s.compressedTexSubImage3D(...arguments)}catch(N){Gt("WebGLState:",N)}}function ht(){try{s.texStorage2D(...arguments)}catch(N){Gt("WebGLState:",N)}}function mt(){try{s.texStorage3D(...arguments)}catch(N){Gt("WebGLState:",N)}}function tt(){try{s.texImage2D(...arguments)}catch(N){Gt("WebGLState:",N)}}function nt(){try{s.texImage3D(...arguments)}catch(N){Gt("WebGLState:",N)}}function ft(N){return f[N]!==void 0?f[N]:s.getParameter(N)}function Ft(N,lt){f[N]!==lt&&(s.pixelStorei(N,lt),f[N]=lt)}function xt(N){Et.equals(N)===!1&&(s.scissor(N.x,N.y,N.z,N.w),Et.copy(N))}function gt(N){vt.equals(N)===!1&&(s.viewport(N.x,N.y,N.z,N.w),vt.copy(N))}function Nt(N,lt){let J=c.get(lt);J===void 0&&(J=new WeakMap,c.set(lt,J));let ot=J.get(N);ot===void 0&&(ot=s.getUniformBlockIndex(lt,N.name),J.set(N,ot))}function Bt(N,lt){let ot=c.get(lt).get(N);l.get(lt)!==ot&&(s.uniformBlockBinding(lt,ot,N.__bindingPointIndex),l.set(lt,ot))}function Wt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),a.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),h={},f={},z=null,G={},d={},u=new WeakMap,g=[],y=null,m=!1,p=null,v=null,M=null,b=null,S=null,_=null,T=null,x=new at(0,0,0),w=0,P=!1,D=null,C=null,F=null,A=null,I=null,Et.set(0,0,s.canvas.width,s.canvas.height),vt.set(0,0,s.canvas.width,s.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:j,disable:ct,bindFramebuffer:Mt,drawBuffers:dt,useProgram:St,setBlending:Xt,setMaterial:me,setFlipSided:Qt,setCullFace:fe,setLineWidth:ze,setPolygonOffset:Ke,setScissorTest:we,activeTexture:Ie,bindTexture:V,unbindTexture:ve,compressedTexImage2D:oe,compressedTexImage3D:U,texImage2D:tt,texImage3D:nt,pixelStorei:Ft,getParameter:ft,updateUBOMapping:Nt,uniformBlockBinding:Bt,texStorage2D:ht,texStorage3D:mt,texSubImage2D:E,texSubImage3D:W,compressedTexSubImage2D:Z,compressedTexSubImage3D:Q,scissor:xt,viewport:gt,reset:Wt}}function dv(s,t,e,i,n,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new At,h=new WeakMap,f=new Set,d,u=new WeakMap,g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(U,E){return g?new OffscreenCanvas(U,E):Nr("canvas")}function m(U,E,W){let Z=1,Q=oe(U);if((Q.width>W||Q.height>W)&&(Z=W/Math.max(Q.width,Q.height)),Z<1)if(typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&U instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&U instanceof ImageBitmap||typeof VideoFrame<"u"&&U instanceof VideoFrame){let ht=Math.floor(Z*Q.width),mt=Math.floor(Z*Q.height);d===void 0&&(d=y(ht,mt));let tt=E?y(ht,mt):d;return tt.width=ht,tt.height=mt,tt.getContext("2d").drawImage(U,0,0,ht,mt),Ht("WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+ht+"x"+mt+")."),tt}else return"data"in U&&Ht("WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),U;return U}function p(U){return U.generateMipmaps}function v(U){s.generateMipmap(U)}function M(U){return U.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:U.isWebGL3DRenderTarget?s.TEXTURE_3D:U.isWebGLArrayRenderTarget||U.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function b(U,E,W,Z,Q,ht=!1){if(U!==null){if(s[U]!==void 0)return s[U];Ht("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+U+"'")}let mt;Z&&(mt=t.get("EXT_texture_norm16"),mt||Ht("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let tt=E;if(E===s.RED&&(W===s.FLOAT&&(tt=s.R32F),W===s.HALF_FLOAT&&(tt=s.R16F),W===s.UNSIGNED_BYTE&&(tt=s.R8),W===s.UNSIGNED_SHORT&&mt&&(tt=mt.R16_EXT),W===s.SHORT&&mt&&(tt=mt.R16_SNORM_EXT)),E===s.RED_INTEGER&&(W===s.UNSIGNED_BYTE&&(tt=s.R8UI),W===s.UNSIGNED_SHORT&&(tt=s.R16UI),W===s.UNSIGNED_INT&&(tt=s.R32UI),W===s.BYTE&&(tt=s.R8I),W===s.SHORT&&(tt=s.R16I),W===s.INT&&(tt=s.R32I)),E===s.RG&&(W===s.FLOAT&&(tt=s.RG32F),W===s.HALF_FLOAT&&(tt=s.RG16F),W===s.UNSIGNED_BYTE&&(tt=s.RG8),W===s.UNSIGNED_SHORT&&mt&&(tt=mt.RG16_EXT),W===s.SHORT&&mt&&(tt=mt.RG16_SNORM_EXT)),E===s.RG_INTEGER&&(W===s.UNSIGNED_BYTE&&(tt=s.RG8UI),W===s.UNSIGNED_SHORT&&(tt=s.RG16UI),W===s.UNSIGNED_INT&&(tt=s.RG32UI),W===s.BYTE&&(tt=s.RG8I),W===s.SHORT&&(tt=s.RG16I),W===s.INT&&(tt=s.RG32I)),E===s.RGB_INTEGER&&(W===s.UNSIGNED_BYTE&&(tt=s.RGB8UI),W===s.UNSIGNED_SHORT&&(tt=s.RGB16UI),W===s.UNSIGNED_INT&&(tt=s.RGB32UI),W===s.BYTE&&(tt=s.RGB8I),W===s.SHORT&&(tt=s.RGB16I),W===s.INT&&(tt=s.RGB32I)),E===s.RGBA_INTEGER&&(W===s.UNSIGNED_BYTE&&(tt=s.RGBA8UI),W===s.UNSIGNED_SHORT&&(tt=s.RGBA16UI),W===s.UNSIGNED_INT&&(tt=s.RGBA32UI),W===s.BYTE&&(tt=s.RGBA8I),W===s.SHORT&&(tt=s.RGBA16I),W===s.INT&&(tt=s.RGBA32I)),E===s.RGB&&(W===s.UNSIGNED_SHORT&&mt&&(tt=mt.RGB16_EXT),W===s.SHORT&&mt&&(tt=mt.RGB16_SNORM_EXT),W===s.UNSIGNED_INT_5_9_9_9_REV&&(tt=s.RGB9_E5),W===s.UNSIGNED_INT_10F_11F_11F_REV&&(tt=s.R11F_G11F_B10F)),E===s.RGBA){let nt=ht?Fr:se.getTransfer(Q);W===s.FLOAT&&(tt=s.RGBA32F),W===s.HALF_FLOAT&&(tt=s.RGBA16F),W===s.UNSIGNED_BYTE&&(tt=nt===pe?s.SRGB8_ALPHA8:s.RGBA8),W===s.UNSIGNED_SHORT&&mt&&(tt=mt.RGBA16_EXT),W===s.SHORT&&mt&&(tt=mt.RGBA16_SNORM_EXT),W===s.UNSIGNED_SHORT_4_4_4_4&&(tt=s.RGBA4),W===s.UNSIGNED_SHORT_5_5_5_1&&(tt=s.RGB5_A1)}return(tt===s.R16F||tt===s.R32F||tt===s.RG16F||tt===s.RG32F||tt===s.RGBA16F||tt===s.RGBA32F)&&t.get("EXT_color_buffer_float"),tt}function S(U,E){let W;return U?E===null||E===zi||E===tr?W=s.DEPTH24_STENCIL8:E===Pi?W=s.DEPTH32F_STENCIL8:E===Qs&&(W=s.DEPTH24_STENCIL8,Ht("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===zi||E===tr?W=s.DEPTH_COMPONENT24:E===Pi?W=s.DEPTH_COMPONENT32F:E===Qs&&(W=s.DEPTH_COMPONENT16),W}function _(U,E){return p(U)===!0||U.isFramebufferTexture&&U.minFilter!==je&&U.minFilter!==Ve?Math.log2(Math.max(E.width,E.height))+1:U.mipmaps!==void 0&&U.mipmaps.length>0?U.mipmaps.length:U.isCompressedTexture&&Array.isArray(U.image)?E.mipmaps.length:1}function T(U){let E=U.target;E.removeEventListener("dispose",T),w(E),E.isVideoTexture&&h.delete(E),E.isHTMLTexture&&f.delete(E)}function x(U){let E=U.target;E.removeEventListener("dispose",x),D(E)}function w(U){let E=i.get(U);if(E.__webglInit===void 0)return;let W=U.source,Z=u.get(W);if(Z){let Q=Z[E.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&P(U),Object.keys(Z).length===0&&u.delete(W)}i.remove(U)}function P(U){let E=i.get(U);s.deleteTexture(E.__webglTexture);let W=U.source,Z=u.get(W);delete Z[E.__cacheKey],a.memory.textures--}function D(U){let E=i.get(U);if(U.depthTexture&&(U.depthTexture.dispose(),i.remove(U.depthTexture)),U.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(E.__webglFramebuffer[Z]))for(let Q=0;Q<E.__webglFramebuffer[Z].length;Q++)s.deleteFramebuffer(E.__webglFramebuffer[Z][Q]);else s.deleteFramebuffer(E.__webglFramebuffer[Z]);E.__webglDepthbuffer&&s.deleteRenderbuffer(E.__webglDepthbuffer[Z])}else{if(Array.isArray(E.__webglFramebuffer))for(let Z=0;Z<E.__webglFramebuffer.length;Z++)s.deleteFramebuffer(E.__webglFramebuffer[Z]);else s.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&s.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&s.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let Z=0;Z<E.__webglColorRenderbuffer.length;Z++)E.__webglColorRenderbuffer[Z]&&s.deleteRenderbuffer(E.__webglColorRenderbuffer[Z]);E.__webglDepthRenderbuffer&&s.deleteRenderbuffer(E.__webglDepthRenderbuffer)}let W=U.textures;for(let Z=0,Q=W.length;Z<Q;Z++){let ht=i.get(W[Z]);ht.__webglTexture&&(s.deleteTexture(ht.__webglTexture),a.memory.textures--),i.remove(W[Z])}i.remove(U)}let C=0;function F(){C=0}function A(){return C}function I(U){C=U}function B(){let U=C;return U>=n.maxTextures&&Ht("WebGLTextures: Trying to use "+(U+1)+" texture units while this GPU supports only "+n.maxTextures),C+=1,U}function O(U){let E=[];return E.push(U.wrapS),E.push(U.wrapT),E.push(U.wrapR||0),E.push(U.magFilter),E.push(U.minFilter),E.push(U.anisotropy),E.push(U.internalFormat),E.push(U.format),E.push(U.type),E.push(U.generateMipmaps),E.push(U.premultiplyAlpha),E.push(U.flipY),E.push(U.unpackAlignment),E.push(U.colorSpace),E.join()}function $(U,E){let W=i.get(U);if(U.isVideoTexture&&V(U),U.isRenderTargetTexture===!1&&U.isExternalTexture!==!0&&U.version>0&&W.__version!==U.version){let Z=U.image;if(Z===null)Ht("WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)Ht("WebGLRenderer: Texture marked for update but image is incomplete");else{ct(W,U,E);return}}else U.isExternalTexture&&(W.__webglTexture=U.sourceTexture?U.sourceTexture:null);e.bindTexture(s.TEXTURE_2D,W.__webglTexture,s.TEXTURE0+E)}function L(U,E){let W=i.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&W.__version!==U.version){ct(W,U,E);return}else U.isExternalTexture&&(W.__webglTexture=U.sourceTexture?U.sourceTexture:null);e.bindTexture(s.TEXTURE_2D_ARRAY,W.__webglTexture,s.TEXTURE0+E)}function z(U,E){let W=i.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&W.__version!==U.version){ct(W,U,E);return}e.bindTexture(s.TEXTURE_3D,W.__webglTexture,s.TEXTURE0+E)}function G(U,E){let W=i.get(U);if(U.isCubeDepthTexture!==!0&&U.version>0&&W.__version!==U.version){Mt(W,U,E);return}e.bindTexture(s.TEXTURE_CUBE_MAP,W.__webglTexture,s.TEXTURE0+E)}let rt={[zs]:s.REPEAT,[qi]:s.CLAMP_TO_EDGE,[Eo]:s.MIRRORED_REPEAT},et={[je]:s.NEAREST,[Gu]:s.NEAREST_MIPMAP_NEAREST,[oa]:s.NEAREST_MIPMAP_LINEAR,[Ve]:s.LINEAR,[ll]:s.LINEAR_MIPMAP_NEAREST,[en]:s.LINEAR_MIPMAP_LINEAR},Et={[qu]:s.NEVER,[Ju]:s.ALWAYS,[Xu]:s.LESS,[ql]:s.LEQUAL,[Yu]:s.EQUAL,[Xl]:s.GEQUAL,[Zu]:s.GREATER,[Ku]:s.NOTEQUAL};function vt(U,E){if(E.type===Pi&&t.has("OES_texture_float_linear")===!1&&(E.magFilter===Ve||E.magFilter===ll||E.magFilter===oa||E.magFilter===en||E.minFilter===Ve||E.minFilter===ll||E.minFilter===oa||E.minFilter===en)&&Ht("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(U,s.TEXTURE_WRAP_S,rt[E.wrapS]),s.texParameteri(U,s.TEXTURE_WRAP_T,rt[E.wrapT]),(U===s.TEXTURE_3D||U===s.TEXTURE_2D_ARRAY)&&s.texParameteri(U,s.TEXTURE_WRAP_R,rt[E.wrapR]),s.texParameteri(U,s.TEXTURE_MAG_FILTER,et[E.magFilter]),s.texParameteri(U,s.TEXTURE_MIN_FILTER,et[E.minFilter]),E.compareFunction&&(s.texParameteri(U,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(U,s.TEXTURE_COMPARE_FUNC,Et[E.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===je||E.minFilter!==oa&&E.minFilter!==en||E.type===Pi&&t.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||i.get(E).__currentAnisotropy){let W=t.get("EXT_texture_filter_anisotropic");s.texParameterf(U,W.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,n.getMaxAnisotropy())),i.get(E).__currentAnisotropy=E.anisotropy}}}function Tt(U,E){let W=!1;U.__webglInit===void 0&&(U.__webglInit=!0,E.addEventListener("dispose",T));let Z=E.source,Q=u.get(Z);Q===void 0&&(Q={},u.set(Z,Q));let ht=O(E);if(ht!==U.__cacheKey){Q[ht]===void 0&&(Q[ht]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,W=!0),Q[ht].usedTimes++;let mt=Q[U.__cacheKey];mt!==void 0&&(Q[U.__cacheKey].usedTimes--,mt.usedTimes===0&&P(E)),U.__cacheKey=ht,U.__webglTexture=Q[ht].texture}return W}function X(U,E,W){return Math.floor(Math.floor(U/W)/E)}function j(U,E,W,Z){let ht=U.updateRanges;if(ht.length===0)e.texSubImage2D(s.TEXTURE_2D,0,0,0,E.width,E.height,W,Z,E.data);else{ht.sort((Ft,xt)=>Ft.start-xt.start);let mt=0;for(let Ft=1;Ft<ht.length;Ft++){let xt=ht[mt],gt=ht[Ft],Nt=xt.start+xt.count,Bt=X(gt.start,E.width,4),Wt=X(xt.start,E.width,4);gt.start<=Nt+1&&Bt===Wt&&X(gt.start+gt.count-1,E.width,4)===Bt?xt.count=Math.max(xt.count,gt.start+gt.count-xt.start):(++mt,ht[mt]=gt)}ht.length=mt+1;let tt=e.getParameter(s.UNPACK_ROW_LENGTH),nt=e.getParameter(s.UNPACK_SKIP_PIXELS),ft=e.getParameter(s.UNPACK_SKIP_ROWS);e.pixelStorei(s.UNPACK_ROW_LENGTH,E.width);for(let Ft=0,xt=ht.length;Ft<xt;Ft++){let gt=ht[Ft],Nt=Math.floor(gt.start/4),Bt=Math.ceil(gt.count/4),Wt=Nt%E.width,N=Math.floor(Nt/E.width),lt=Bt,J=1;e.pixelStorei(s.UNPACK_SKIP_PIXELS,Wt),e.pixelStorei(s.UNPACK_SKIP_ROWS,N),e.texSubImage2D(s.TEXTURE_2D,0,Wt,N,lt,J,W,Z,E.data)}U.clearUpdateRanges(),e.pixelStorei(s.UNPACK_ROW_LENGTH,tt),e.pixelStorei(s.UNPACK_SKIP_PIXELS,nt),e.pixelStorei(s.UNPACK_SKIP_ROWS,ft)}}function ct(U,E,W){let Z=s.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(Z=s.TEXTURE_2D_ARRAY),E.isData3DTexture&&(Z=s.TEXTURE_3D);let Q=Tt(U,E),ht=E.source;e.bindTexture(Z,U.__webglTexture,s.TEXTURE0+W);let mt=i.get(ht);if(ht.version!==mt.__version||Q===!0){if(e.activeTexture(s.TEXTURE0+W),(typeof ImageBitmap<"u"&&E.image instanceof ImageBitmap)===!1){let J=se.getPrimaries(se.workingColorSpace),ot=E.colorSpace===xn?null:se.getPrimaries(E.colorSpace),ut=E.colorSpace===xn||J===ot?s.NONE:s.BROWSER_DEFAULT_WEBGL;e.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,E.flipY),e.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),e.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ut)}e.pixelStorei(s.UNPACK_ALIGNMENT,E.unpackAlignment);let nt=m(E.image,!1,n.maxTextureSize);nt=ve(E,nt);let ft=r.convert(E.format,E.colorSpace),Ft=r.convert(E.type),xt=b(E.internalFormat,ft,Ft,E.normalized,E.colorSpace,E.isVideoTexture);vt(Z,E);let gt,Nt=E.mipmaps,Bt=E.isVideoTexture!==!0,Wt=mt.__version===void 0||Q===!0,N=ht.dataReady,lt=_(E,nt);if(E.isDepthTexture)xt=S(E.format===Wn,E.type),Wt&&(Bt?e.texStorage2D(s.TEXTURE_2D,1,xt,nt.width,nt.height):e.texImage2D(s.TEXTURE_2D,0,xt,nt.width,nt.height,0,ft,Ft,null));else if(E.isDataTexture)if(Nt.length>0){Bt&&Wt&&e.texStorage2D(s.TEXTURE_2D,lt,xt,Nt[0].width,Nt[0].height);for(let J=0,ot=Nt.length;J<ot;J++)gt=Nt[J],Bt?N&&e.texSubImage2D(s.TEXTURE_2D,J,0,0,gt.width,gt.height,ft,Ft,gt.data):e.texImage2D(s.TEXTURE_2D,J,xt,gt.width,gt.height,0,ft,Ft,gt.data);E.generateMipmaps=!1}else Bt?(Wt&&e.texStorage2D(s.TEXTURE_2D,lt,xt,nt.width,nt.height),N&&j(E,nt,ft,Ft)):e.texImage2D(s.TEXTURE_2D,0,xt,nt.width,nt.height,0,ft,Ft,nt.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){Bt&&Wt&&e.texStorage3D(s.TEXTURE_2D_ARRAY,lt,xt,Nt[0].width,Nt[0].height,nt.depth);for(let J=0,ot=Nt.length;J<ot;J++)if(gt=Nt[J],E.format!==Ii)if(ft!==null)if(Bt){if(N)if(E.layerUpdates.size>0){let ut=qh(gt.width,gt.height,E.format,E.type);for(let st of E.layerUpdates){let Lt=gt.data.subarray(st*ut/gt.data.BYTES_PER_ELEMENT,(st+1)*ut/gt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,J,0,0,st,gt.width,gt.height,1,ft,Lt)}}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,J,0,0,0,gt.width,gt.height,nt.depth,ft,gt.data)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,J,xt,gt.width,gt.height,nt.depth,0,gt.data,0,0);else Ht("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Bt?N&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,J,0,0,0,gt.width,gt.height,nt.depth,ft,Ft,gt.data):e.texImage3D(s.TEXTURE_2D_ARRAY,J,xt,gt.width,gt.height,nt.depth,0,ft,Ft,gt.data);E.layerUpdates.size>0&&E.clearLayerUpdates()}else{Bt&&Wt&&e.texStorage2D(s.TEXTURE_2D,lt,xt,Nt[0].width,Nt[0].height);for(let J=0,ot=Nt.length;J<ot;J++)gt=Nt[J],E.format!==Ii?ft!==null?Bt?N&&e.compressedTexSubImage2D(s.TEXTURE_2D,J,0,0,gt.width,gt.height,ft,gt.data):e.compressedTexImage2D(s.TEXTURE_2D,J,xt,gt.width,gt.height,0,gt.data):Ht("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Bt?N&&e.texSubImage2D(s.TEXTURE_2D,J,0,0,gt.width,gt.height,ft,Ft,gt.data):e.texImage2D(s.TEXTURE_2D,J,xt,gt.width,gt.height,0,ft,Ft,gt.data)}else if(E.isDataArrayTexture)if(Bt){if(Wt&&e.texStorage3D(s.TEXTURE_2D_ARRAY,lt,xt,nt.width,nt.height,nt.depth),N)if(E.layerUpdates.size>0){let J=qh(nt.width,nt.height,E.format,E.type);for(let ot of E.layerUpdates){let ut=nt.data.subarray(ot*J/nt.data.BYTES_PER_ELEMENT,(ot+1)*J/nt.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,ot,nt.width,nt.height,1,ft,Ft,ut)}E.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,nt.width,nt.height,nt.depth,ft,Ft,nt.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,xt,nt.width,nt.height,nt.depth,0,ft,Ft,nt.data);else if(E.isData3DTexture)Bt?(Wt&&e.texStorage3D(s.TEXTURE_3D,lt,xt,nt.width,nt.height,nt.depth),N&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,nt.width,nt.height,nt.depth,ft,Ft,nt.data)):e.texImage3D(s.TEXTURE_3D,0,xt,nt.width,nt.height,nt.depth,0,ft,Ft,nt.data);else if(E.isFramebufferTexture){if(Wt)if(Bt)e.texStorage2D(s.TEXTURE_2D,lt,xt,nt.width,nt.height);else{let J=nt.width,ot=nt.height;for(let ut=0;ut<lt;ut++)e.texImage2D(s.TEXTURE_2D,ut,xt,J,ot,0,ft,Ft,null),J>>=1,ot>>=1}}else if(E.isHTMLTexture){if("texElementImage2D"in s){let J=s.canvas;if(J.hasAttribute("layoutsubtree")||J.setAttribute("layoutsubtree","true"),nt.parentNode!==J){J.appendChild(nt),f.add(E),J.onpaint=ot=>{let ut=ot.changedElements;for(let st of f)ut.includes(st.image)&&(st.needsUpdate=!0)},J.requestPaint();return}if(s.texElementImage2D.length===3)s.texElementImage2D(s.TEXTURE_2D,s.RGBA8,nt);else{let ut=s.RGBA,st=s.RGBA,Lt=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,0,ut,st,Lt,nt)}s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if(Nt.length>0){if(Bt&&Wt){let J=oe(Nt[0]);e.texStorage2D(s.TEXTURE_2D,lt,xt,J.width,J.height)}for(let J=0,ot=Nt.length;J<ot;J++)gt=Nt[J],Bt?N&&e.texSubImage2D(s.TEXTURE_2D,J,0,0,ft,Ft,gt):e.texImage2D(s.TEXTURE_2D,J,xt,ft,Ft,gt);E.generateMipmaps=!1}else if(Bt){if(Wt){let J=oe(nt);e.texStorage2D(s.TEXTURE_2D,lt,xt,J.width,J.height)}N&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,ft,Ft,nt)}else e.texImage2D(s.TEXTURE_2D,0,xt,ft,Ft,nt);p(E)&&v(Z),mt.__version=ht.version,E.onUpdate&&E.onUpdate(E)}U.__version=E.version}function Mt(U,E,W){if(E.image.length!==6)return;let Z=Tt(U,E),Q=E.source;e.bindTexture(s.TEXTURE_CUBE_MAP,U.__webglTexture,s.TEXTURE0+W);let ht=i.get(Q);if(Q.version!==ht.__version||Z===!0){e.activeTexture(s.TEXTURE0+W);let mt=se.getPrimaries(se.workingColorSpace),tt=E.colorSpace===xn?null:se.getPrimaries(E.colorSpace),nt=E.colorSpace===xn||mt===tt?s.NONE:s.BROWSER_DEFAULT_WEBGL;e.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,E.flipY),e.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),e.pixelStorei(s.UNPACK_ALIGNMENT,E.unpackAlignment),e.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,nt);let ft=E.isCompressedTexture||E.image[0].isCompressedTexture,Ft=E.image[0]&&E.image[0].isDataTexture,xt=[];for(let st=0;st<6;st++)!ft&&!Ft?xt[st]=m(E.image[st],!0,n.maxCubemapSize):xt[st]=Ft?E.image[st].image:E.image[st],xt[st]=ve(E,xt[st]);let gt=xt[0],Nt=r.convert(E.format,E.colorSpace),Bt=r.convert(E.type),Wt=b(E.internalFormat,Nt,Bt,E.normalized,E.colorSpace),N=E.isVideoTexture!==!0,lt=ht.__version===void 0||Z===!0,J=Q.dataReady,ot=_(E,gt);vt(s.TEXTURE_CUBE_MAP,E);let ut;if(ft){N&&lt&&e.texStorage2D(s.TEXTURE_CUBE_MAP,ot,Wt,gt.width,gt.height);for(let st=0;st<6;st++){ut=xt[st].mipmaps;for(let Lt=0;Lt<ut.length;Lt++){let It=ut[Lt];E.format!==Ii?Nt!==null?N?J&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+st,Lt,0,0,It.width,It.height,Nt,It.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+st,Lt,Wt,It.width,It.height,0,It.data):Ht("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):N?J&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+st,Lt,0,0,It.width,It.height,Nt,Bt,It.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+st,Lt,Wt,It.width,It.height,0,Nt,Bt,It.data)}}}else{if(ut=E.mipmaps,N&&lt){ut.length>0&&ot++;let st=oe(xt[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,ot,Wt,st.width,st.height)}for(let st=0;st<6;st++)if(Ft){N?J&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,0,0,xt[st].width,xt[st].height,Nt,Bt,xt[st].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,Wt,xt[st].width,xt[st].height,0,Nt,Bt,xt[st].data);for(let Lt=0;Lt<ut.length;Lt++){let ge=ut[Lt].image[st].image;N?J&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+st,Lt+1,0,0,ge.width,ge.height,Nt,Bt,ge.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+st,Lt+1,Wt,ge.width,ge.height,0,Nt,Bt,ge.data)}}else{N?J&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,0,0,Nt,Bt,xt[st]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,Wt,Nt,Bt,xt[st]);for(let Lt=0;Lt<ut.length;Lt++){let It=ut[Lt];N?J&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+st,Lt+1,0,0,Nt,Bt,It.image[st]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+st,Lt+1,Wt,Nt,Bt,It.image[st])}}}p(E)&&v(s.TEXTURE_CUBE_MAP),ht.__version=Q.version,E.onUpdate&&E.onUpdate(E)}U.__version=E.version}function dt(U,E,W,Z,Q,ht){let mt=r.convert(W.format,W.colorSpace),tt=r.convert(W.type),nt=b(W.internalFormat,mt,tt,W.normalized,W.colorSpace),ft=i.get(E),Ft=i.get(W);if(Ft.__renderTarget=E,!ft.__hasExternalTextures){let xt=Math.max(1,E.width>>ht),gt=Math.max(1,E.height>>ht);Q===s.TEXTURE_3D||Q===s.TEXTURE_2D_ARRAY?e.texImage3D(Q,ht,nt,xt,gt,E.depth,0,mt,tt,null):e.texImage2D(Q,ht,nt,xt,gt,0,mt,tt,null)}e.bindFramebuffer(s.FRAMEBUFFER,U),Ie(E)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Z,Q,Ft.__webglTexture,0,we(E)):(Q===s.TEXTURE_2D||Q>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,Z,Q,Ft.__webglTexture,ht),e.bindFramebuffer(s.FRAMEBUFFER,null)}function St(U,E,W){if(s.bindRenderbuffer(s.RENDERBUFFER,U),E.depthBuffer){let Z=E.depthTexture,Q=Z&&Z.isDepthTexture?Z.type:null,ht=S(E.stencilBuffer,Q),mt=E.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;Ie(E)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,we(E),ht,E.width,E.height):W?s.renderbufferStorageMultisample(s.RENDERBUFFER,we(E),ht,E.width,E.height):s.renderbufferStorage(s.RENDERBUFFER,ht,E.width,E.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,mt,s.RENDERBUFFER,U)}else{let Z=E.textures;for(let Q=0;Q<Z.length;Q++){let ht=Z[Q],mt=r.convert(ht.format,ht.colorSpace),tt=r.convert(ht.type),nt=b(ht.internalFormat,mt,tt,ht.normalized,ht.colorSpace);Ie(E)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,we(E),nt,E.width,E.height):W?s.renderbufferStorageMultisample(s.RENDERBUFFER,we(E),nt,E.width,E.height):s.renderbufferStorage(s.RENDERBUFFER,nt,E.width,E.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Zt(U,E,W){let Z=E.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(s.FRAMEBUFFER,U),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let Q=i.get(E.depthTexture);if(Q.__renderTarget=E,(!Q.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),Z){if(Q.__webglInit===void 0&&(Q.__webglInit=!0,E.depthTexture.addEventListener("dispose",T)),Q.__webglTexture===void 0){Q.__webglTexture=s.createTexture(),e.bindTexture(s.TEXTURE_CUBE_MAP,Q.__webglTexture),vt(s.TEXTURE_CUBE_MAP,E.depthTexture);let ft=r.convert(E.depthTexture.format),Ft=r.convert(E.depthTexture.type),xt;E.depthTexture.format===Xi?xt=s.DEPTH_COMPONENT24:E.depthTexture.format===Wn&&(xt=s.DEPTH24_STENCIL8);for(let gt=0;gt<6;gt++)s.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,xt,E.width,E.height,0,ft,Ft,null)}}else $(E.depthTexture,0);let ht=Q.__webglTexture,mt=we(E),tt=Z?s.TEXTURE_CUBE_MAP_POSITIVE_X+W:s.TEXTURE_2D,nt=E.depthTexture.format===Wn?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(E.depthTexture.format===Xi)Ie(E)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,nt,tt,ht,0,mt):s.framebufferTexture2D(s.FRAMEBUFFER,nt,tt,ht,0);else if(E.depthTexture.format===Wn)Ie(E)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,nt,tt,ht,0,mt):s.framebufferTexture2D(s.FRAMEBUFFER,nt,tt,ht,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function kt(U){let E=i.get(U),W=U.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==U.depthTexture){let Z=U.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),Z){let Q=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,Z.removeEventListener("dispose",Q)};Z.addEventListener("dispose",Q),E.__depthDisposeCallback=Q}E.__boundDepthTexture=Z}if(U.depthTexture&&!E.__autoAllocateDepthBuffer)if(W)for(let Z=0;Z<6;Z++)Zt(E.__webglFramebuffer[Z],U,Z);else{let Z=U.texture.mipmaps;Z&&Z.length>0?Zt(E.__webglFramebuffer[0],U,0):Zt(E.__webglFramebuffer,U,0)}else if(W){E.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(e.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer[Z]),E.__webglDepthbuffer[Z]===void 0)E.__webglDepthbuffer[Z]=s.createRenderbuffer(),St(E.__webglDepthbuffer[Z],U,!1);else{let Q=U.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ht=E.__webglDepthbuffer[Z];s.bindRenderbuffer(s.RENDERBUFFER,ht),s.framebufferRenderbuffer(s.FRAMEBUFFER,Q,s.RENDERBUFFER,ht)}}else{let Z=U.texture.mipmaps;if(Z&&Z.length>0?e.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer[0]):e.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=s.createRenderbuffer(),St(E.__webglDepthbuffer,U,!1);else{let Q=U.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ht=E.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,ht),s.framebufferRenderbuffer(s.FRAMEBUFFER,Q,s.RENDERBUFFER,ht)}}e.bindFramebuffer(s.FRAMEBUFFER,null)}function Xt(U,E,W){let Z=i.get(U);E!==void 0&&dt(Z.__webglFramebuffer,U,U.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),W!==void 0&&kt(U)}function me(U){let E=U.texture,W=i.get(U),Z=i.get(E);U.addEventListener("dispose",x);let Q=U.textures,ht=U.isWebGLCubeRenderTarget===!0,mt=Q.length>1;if(mt||(Z.__webglTexture===void 0&&(Z.__webglTexture=s.createTexture()),Z.__version=E.version,a.memory.textures++),ht){W.__webglFramebuffer=[];for(let tt=0;tt<6;tt++)if(E.mipmaps&&E.mipmaps.length>0){W.__webglFramebuffer[tt]=[];for(let nt=0;nt<E.mipmaps.length;nt++)W.__webglFramebuffer[tt][nt]=s.createFramebuffer()}else W.__webglFramebuffer[tt]=s.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){W.__webglFramebuffer=[];for(let tt=0;tt<E.mipmaps.length;tt++)W.__webglFramebuffer[tt]=s.createFramebuffer()}else W.__webglFramebuffer=s.createFramebuffer();if(mt)for(let tt=0,nt=Q.length;tt<nt;tt++){let ft=i.get(Q[tt]);ft.__webglTexture===void 0&&(ft.__webglTexture=s.createTexture(),a.memory.textures++)}if(U.samples>0&&Ie(U)===!1){W.__webglMultisampledFramebuffer=s.createFramebuffer(),W.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,W.__webglMultisampledFramebuffer);for(let tt=0;tt<Q.length;tt++){let nt=Q[tt];W.__webglColorRenderbuffer[tt]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,W.__webglColorRenderbuffer[tt]);let ft=r.convert(nt.format,nt.colorSpace),Ft=r.convert(nt.type),xt=b(nt.internalFormat,ft,Ft,nt.normalized,nt.colorSpace,U.isXRRenderTarget===!0),gt=we(U);s.renderbufferStorageMultisample(s.RENDERBUFFER,gt,xt,U.width,U.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+tt,s.RENDERBUFFER,W.__webglColorRenderbuffer[tt])}s.bindRenderbuffer(s.RENDERBUFFER,null),U.depthBuffer&&(W.__webglDepthRenderbuffer=s.createRenderbuffer(),St(W.__webglDepthRenderbuffer,U,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(ht){e.bindTexture(s.TEXTURE_CUBE_MAP,Z.__webglTexture),vt(s.TEXTURE_CUBE_MAP,E);for(let tt=0;tt<6;tt++)if(E.mipmaps&&E.mipmaps.length>0)for(let nt=0;nt<E.mipmaps.length;nt++)dt(W.__webglFramebuffer[tt][nt],U,E,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+tt,nt);else dt(W.__webglFramebuffer[tt],U,E,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0);p(E)&&v(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(mt){for(let tt=0,nt=Q.length;tt<nt;tt++){let ft=Q[tt],Ft=i.get(ft),xt=s.TEXTURE_2D;(U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(xt=U.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(xt,Ft.__webglTexture),vt(xt,ft),dt(W.__webglFramebuffer,U,ft,s.COLOR_ATTACHMENT0+tt,xt,0),p(ft)&&v(xt)}e.unbindTexture()}else{let tt=s.TEXTURE_2D;if((U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(tt=U.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(tt,Z.__webglTexture),vt(tt,E),E.mipmaps&&E.mipmaps.length>0)for(let nt=0;nt<E.mipmaps.length;nt++)dt(W.__webglFramebuffer[nt],U,E,s.COLOR_ATTACHMENT0,tt,nt);else dt(W.__webglFramebuffer,U,E,s.COLOR_ATTACHMENT0,tt,0);p(E)&&v(tt),e.unbindTexture()}U.depthBuffer&&kt(U)}function Qt(U){let E=U.textures;for(let W=0,Z=E.length;W<Z;W++){let Q=E[W];if(p(Q)){let ht=M(U),mt=i.get(Q).__webglTexture;e.bindTexture(ht,mt),v(ht),e.unbindTexture()}}}let fe=[],ze=[];function Ke(U){if(U.samples>0){if(Ie(U)===!1){let E=U.textures,W=U.width,Z=U.height,Q=s.COLOR_BUFFER_BIT,ht=U.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,mt=i.get(U),tt=E.length>1;if(tt)for(let ft=0;ft<E.length;ft++)e.bindFramebuffer(s.FRAMEBUFFER,mt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ft,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,mt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ft,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,mt.__webglMultisampledFramebuffer);let nt=U.texture.mipmaps;nt&&nt.length>0?e.bindFramebuffer(s.DRAW_FRAMEBUFFER,mt.__webglFramebuffer[0]):e.bindFramebuffer(s.DRAW_FRAMEBUFFER,mt.__webglFramebuffer);for(let ft=0;ft<E.length;ft++){if(U.resolveDepthBuffer&&(U.depthBuffer&&(Q|=s.DEPTH_BUFFER_BIT),U.stencilBuffer&&U.resolveStencilBuffer&&(Q|=s.STENCIL_BUFFER_BIT)),tt){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,mt.__webglColorRenderbuffer[ft]);let Ft=i.get(E[ft]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Ft,0)}s.blitFramebuffer(0,0,W,Z,0,0,W,Z,Q,s.NEAREST),l===!0&&(fe.length=0,ze.length=0,fe.push(s.COLOR_ATTACHMENT0+ft),U.depthBuffer&&U.storeMultisampledDepthBuffer===!1&&(fe.push(ht),ze.push(ht),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,ze)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,fe))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),tt)for(let ft=0;ft<E.length;ft++){e.bindFramebuffer(s.FRAMEBUFFER,mt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ft,s.RENDERBUFFER,mt.__webglColorRenderbuffer[ft]);let Ft=i.get(E[ft]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,mt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ft,s.TEXTURE_2D,Ft,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,mt.__webglMultisampledFramebuffer)}else if(U.depthBuffer&&U.storeMultisampledDepthBuffer===!1&&l){let E=U.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[E])}}}function we(U){return Math.min(n.maxSamples,U.samples)}function Ie(U){let E=i.get(U);return U.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function V(U){let E=a.render.frame;h.get(U)!==E&&(h.set(U,E),U.update())}function ve(U,E){let W=U.colorSpace,Z=U.format,Q=U.type;return U.isCompressedTexture===!0||U.isVideoTexture===!0||W!==Dr&&W!==xn&&(se.getTransfer(W)===pe?(Z!==Ii||Q!==gi)&&Ht("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Gt("WebGLTextures: Unsupported texture color space:",W)),E}function oe(U){return typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement?(c.width=U.naturalWidth||U.width,c.height=U.naturalHeight||U.height):typeof VideoFrame<"u"&&U instanceof VideoFrame?(c.width=U.displayWidth,c.height=U.displayHeight):(c.width=U.width,c.height=U.height),c}this.allocateTextureUnit=B,this.resetTextureUnits=F,this.getTextureUnits=A,this.setTextureUnits=I,this.setTexture2D=$,this.setTexture2DArray=L,this.setTexture3D=z,this.setTextureCube=G,this.rebindTextures=Xt,this.setupRenderTarget=me,this.updateRenderTargetMipmap=Qt,this.updateMultisampleRenderTarget=Ke,this.setupDepthRenderbuffer=kt,this.setupFrameBufferTexture=dt,this.useMultisampledRTT=Ie,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function uv(s,t){function e(i,n=xn){let r,a=se.getTransfer(n);if(i===gi)return s.UNSIGNED_BYTE;if(i===hl)return s.UNSIGNED_SHORT_4_4_4_4;if(i===dl)return s.UNSIGNED_SHORT_5_5_5_1;if(i===Uh)return s.UNSIGNED_INT_5_9_9_9_REV;if(i===kh)return s.UNSIGNED_INT_10F_11F_11F_REV;if(i===Fh)return s.BYTE;if(i===Nh)return s.SHORT;if(i===Qs)return s.UNSIGNED_SHORT;if(i===cl)return s.INT;if(i===zi)return s.UNSIGNED_INT;if(i===Pi)return s.FLOAT;if(i===yi)return s.HALF_FLOAT;if(i===Bh)return s.ALPHA;if(i===Oh)return s.RGB;if(i===Ii)return s.RGBA;if(i===Xi)return s.DEPTH_COMPONENT;if(i===Wn)return s.DEPTH_STENCIL;if(i===ul)return s.RED;if(i===fl)return s.RED_INTEGER;if(i===$n)return s.RG;if(i===pl)return s.RG_INTEGER;if(i===ml)return s.RGBA_INTEGER;if(i===la||i===ca||i===ha||i===da)if(a===pe)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===la)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===ca)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===ha)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===da)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===la)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===ca)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===ha)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===da)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===gl||i===yl||i===xl||i===vl)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===gl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===yl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===xl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===vl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===_l||i===bl||i===Ml||i===Sl||i===wl||i===ua||i===El)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===_l||i===bl)return a===pe?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Ml)return a===pe?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===Sl)return r.COMPRESSED_R11_EAC;if(i===wl)return r.COMPRESSED_SIGNED_R11_EAC;if(i===ua)return r.COMPRESSED_RG11_EAC;if(i===El)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Tl||i===Al||i===Rl||i===Cl||i===Pl||i===Il||i===Ll||i===Dl||i===Fl||i===Nl||i===Ul||i===kl||i===Bl||i===Ol)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Tl)return a===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Al)return a===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Rl)return a===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Cl)return a===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Pl)return a===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Il)return a===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Ll)return a===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Dl)return a===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Fl)return a===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Nl)return a===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Ul)return a===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===kl)return a===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Bl)return a===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Ol)return a===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Hl||i===zl||i===Gl)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===Hl)return a===pe?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===zl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Gl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Vl||i===Wl||i===fa||i===$l)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===Vl)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Wl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===fa)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===$l)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===tr?s.UNSIGNED_INT_24_8:s[i]!==void 0?s[i]:null}return{convert:e}}var fv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,pv=`
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

}`,dd=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let i=new qr(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,i=new Ce({vertexShader:fv,fragmentShader:pv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new yt(new Te(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},ud=class extends Yi{constructor(t,e){super();let i=this,n=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,f=null,d=null,u=null,g=null,y=typeof XRWebGLBinding<"u",m=new dd,p={},v=e.getContextAttributes(),M=null,b=null,S=[],_=[],T=new At,x=null,w=null,P=new We;P.viewport=new Re;let D=new We;D.viewport=new Re;let C=[P,D],F=new nl,A=null,I=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let j=S[X];return j===void 0&&(j=new $s,S[X]=j),j.getTargetRaySpace()},this.getControllerGrip=function(X){let j=S[X];return j===void 0&&(j=new $s,S[X]=j),j.getGripSpace()},this.getHand=function(X){let j=S[X];return j===void 0&&(j=new $s,S[X]=j),j.getHandSpace()};function B(X){let j=_.indexOf(X.inputSource);if(j===-1)return;let ct=S[j];ct!==void 0&&(ct.update(X.inputSource,X.frame,c||a),ct.dispatchEvent({type:X.type,data:X.inputSource}))}function O(){n.removeEventListener("select",B),n.removeEventListener("selectstart",B),n.removeEventListener("selectend",B),n.removeEventListener("squeeze",B),n.removeEventListener("squeezestart",B),n.removeEventListener("squeezeend",B),n.removeEventListener("end",O),n.removeEventListener("inputsourceschange",$);for(let X=0;X<S.length;X++){let j=_[X];j!==null&&(_[X]=null,S[X].disconnect(j))}A=null,I=null,m.reset();for(let X in p)delete p[X];if(t.setRenderTarget(M),u=null,d=null,f=null,n=null,b=null,Tt.stop(),i.isPresenting=!1,t.setPixelRatio(x),t.setSize(T.width,T.height,!1),w!==null){let X=w.camera;X.fov=w.fov,X.zoom=w.zoom,X.updateProjectionMatrix(),w=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){r=X,i.isPresenting===!0&&Ht("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){o=X,i.isPresenting===!0&&Ht("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(X){c=X},this.getBaseLayer=function(){return d!==null?d:u},this.getBinding=function(){return f===null&&y&&(f=new XRWebGLBinding(n,e)),f},this.getFrame=function(){return g},this.getSession=function(){return n},this.setSession=async function(X){if(n=X,n!==null){if(M=t.getRenderTarget(),n.addEventListener("select",B),n.addEventListener("selectstart",B),n.addEventListener("selectend",B),n.addEventListener("squeeze",B),n.addEventListener("squeezestart",B),n.addEventListener("squeezeend",B),n.addEventListener("end",O),n.addEventListener("inputsourceschange",$),v.xrCompatible!==!0&&await e.makeXRCompatible(),x=t.getPixelRatio(),t.getSize(T),y&&"createProjectionLayer"in XRWebGLBinding.prototype){let ct=null,Mt=null,dt=null;v.depth&&(dt=v.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,ct=v.stencil?Wn:Xi,Mt=v.stencil?tr:zi);let St={colorFormat:e.RGBA8,depthFormat:dt,scaleFactor:r};f=this.getBinding(),d=f.createProjectionLayer(St),n.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),b=new Qe(d.textureWidth,d.textureHeight,{format:Ii,type:gi,depthTexture:new Nn(d.textureWidth,d.textureHeight,Mt,void 0,void 0,void 0,void 0,void 0,void 0,ct),stencilBuffer:v.stencil,colorSpace:t.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let ct={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:r};u=new XRWebGLLayer(n,e,ct),n.updateRenderState({baseLayer:u}),t.setPixelRatio(1),t.setSize(u.framebufferWidth,u.framebufferHeight,!1),b=new Qe(u.framebufferWidth,u.framebufferHeight,{format:Ii,type:gi,colorSpace:t.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await n.requestReferenceSpace(o),Tt.setContext(n),Tt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(n!==null)return n.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function $(X){for(let j=0;j<X.removed.length;j++){let ct=X.removed[j],Mt=_.indexOf(ct);Mt>=0&&(_[Mt]=null,S[Mt].disconnect(ct))}for(let j=0;j<X.added.length;j++){let ct=X.added[j],Mt=_.indexOf(ct);if(Mt===-1){for(let St=0;St<S.length;St++)if(St>=_.length){_.push(ct),Mt=St;break}else if(_[St]===null){_[St]=ct,Mt=St;break}if(Mt===-1)break}let dt=S[Mt];dt&&dt.connect(ct)}}let L=new k,z=new k;function G(X,j,ct){L.setFromMatrixPosition(j.matrixWorld),z.setFromMatrixPosition(ct.matrixWorld);let Mt=L.distanceTo(z),dt=j.projectionMatrix.elements,St=ct.projectionMatrix.elements,Zt=dt[14]/(dt[10]-1),kt=dt[14]/(dt[10]+1),Xt=(dt[9]+1)/dt[5],me=(dt[9]-1)/dt[5],Qt=(dt[8]-1)/dt[0],fe=(St[8]+1)/St[0],ze=Zt*Qt,Ke=Zt*fe,we=Mt/(-Qt+fe),Ie=we*-Qt;if(j.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(Ie),X.translateZ(we),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert(),dt[10]===-1)X.projectionMatrix.copy(j.projectionMatrix),X.projectionMatrixInverse.copy(j.projectionMatrixInverse);else{let V=Zt+we,ve=kt+we,oe=ze-Ie,U=Ke+(Mt-Ie),E=Xt*kt/ve*V,W=me*kt/ve*V;X.projectionMatrix.makePerspective(oe,U,E,W,V,ve),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}}function rt(X,j){j===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(j.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(n===null)return;let j=X.near,ct=X.far;m.texture!==null&&(m.depthNear>0&&(j=m.depthNear),m.depthFar>0&&(ct=m.depthFar)),F.near=D.near=P.near=j,F.far=D.far=P.far=ct,(A!==F.near||I!==F.far)&&(n.updateRenderState({depthNear:F.near,depthFar:F.far}),A=F.near,I=F.far),F.layers.mask=X.layers.mask|6,P.layers.mask=F.layers.mask&-5,D.layers.mask=F.layers.mask&-3;let Mt=X.parent,dt=F.cameras;rt(F,Mt);for(let St=0;St<dt.length;St++)rt(dt[St],Mt);dt.length===2?G(F,P,D):F.projectionMatrix.copy(P.projectionMatrix),w===null&&X.isPerspectiveCamera&&(w={camera:X,fov:X.fov,zoom:X.zoom}),et(X,F,Mt)};function et(X,j,ct){ct===null?X.matrix.copy(j.matrixWorld):(X.matrix.copy(ct.matrixWorld),X.matrix.invert(),X.matrix.multiply(j.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(j.projectionMatrix),X.projectionMatrixInverse.copy(j.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=Ur*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return F},this.getFoveation=function(){if(!(d===null&&u===null))return l},this.setFoveation=function(X){l=X,d!==null&&(d.fixedFoveation=X),u!==null&&u.fixedFoveation!==void 0&&(u.fixedFoveation=X)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(F)},this.getCameraTexture=function(X){return p[X]};let Et=null;function vt(X,j){if(h=j.getViewerPose(c||a),g=j,h!==null){let ct=h.views;u!==null&&(t.setRenderTargetFramebuffer(b,u.framebuffer),t.setRenderTarget(b));let Mt=!1;ct.length!==F.cameras.length&&(F.cameras.length=0,Mt=!0);for(let kt=0;kt<ct.length;kt++){let Xt=ct[kt],me=null;if(u!==null)me=u.getViewport(Xt);else{let fe=f.getViewSubImage(d,Xt);me=fe.viewport,kt===0&&(t.setRenderTargetTextures(b,fe.colorTexture,fe.depthStencilTexture),t.setRenderTarget(b))}let Qt=C[kt];Qt===void 0&&(Qt=new We,Qt.layers.enable(kt),Qt.viewport=new Re,C[kt]=Qt),Qt.matrix.fromArray(Xt.transform.matrix),Qt.matrix.decompose(Qt.position,Qt.quaternion,Qt.scale),Qt.projectionMatrix.fromArray(Xt.projectionMatrix),Qt.projectionMatrixInverse.copy(Qt.projectionMatrix).invert(),Qt.viewport.set(me.x,me.y,me.width,me.height),kt===0&&(F.matrix.copy(Qt.matrix),F.matrix.decompose(F.position,F.quaternion,F.scale)),Mt===!0&&F.cameras.push(Qt)}let dt=n.enabledFeatures;if(dt&&dt.includes("depth-sensing")&&n.depthUsage=="gpu-optimized"&&y){f=i.getBinding();let kt=f.getDepthInformation(ct[0]);kt&&kt.isValid&&kt.texture&&m.init(kt,n.renderState)}if(dt&&dt.includes("camera-access")&&y){t.state.unbindTexture(),f=i.getBinding();for(let kt=0;kt<ct.length;kt++){let Xt=ct[kt].camera;if(Xt){let me=p[Xt];me||(me=new qr,p[Xt]=me);let Qt=f.getCameraImage(Xt);me.sourceTexture=Qt}}}}for(let ct=0;ct<S.length;ct++){let Mt=_[ct],dt=S[ct];Mt!==null&&dt!==void 0&&dt.update(Mt,j,c||a)}Et&&Et(X,j),j.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:j}),g=null}let Tt=new Cf;Tt.setAnimationLoop(vt),this.setAnimationLoop=function(X){Et=X},this.dispose=function(){}}},mv=new ee,Nf=new $t;Nf.set(-1,0,0,0,1,0,0,0,1);function gv(s,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,Vh(s)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function n(m,p,v,M,b){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(m,p):p.isMeshLambertMaterial?(r(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(m,p),f(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&u(m,p,b)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),y(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,v,M):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Xe&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Xe&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let v=t.get(p),M=v.envMap,b=v.envMapRotation;M&&(m.envMap.value=M,m.envMapRotation.value.setFromMatrix4(mv.makeRotationFromEuler(b)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(Nf),m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,v,M){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*v,m.scale.value=M*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function f(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function u(m,p,v){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Xe&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.retroreflectivity>0&&(m.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function y(m,p){let v=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:n}}function yv(s,t,e,i){let n={},r={},a=[],o=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(b,S){let _=S.program;i.uniformBlockBinding(b,_)}function c(b,S){let _=n[b.id];_===void 0&&(m(b),_=h(b),n[b.id]=_,b.addEventListener("dispose",v));let T=S.program;i.updateUBOMapping(b,T);let x=t.render.frame;r[b.id]!==x&&(d(b),r[b.id]=x)}function h(b){let S=f();b.__bindingPointIndex=S;let _=s.createBuffer(),T=b.__size,x=b.usage;return s.bindBuffer(s.UNIFORM_BUFFER,_),s.bufferData(s.UNIFORM_BUFFER,T,x),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,S,_),_}function f(){for(let b=0;b<o;b++)if(a.indexOf(b)===-1)return a.push(b),b;return Gt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(b){let S=n[b.id],_=b.uniforms,T=b.__cache;s.bindBuffer(s.UNIFORM_BUFFER,S);for(let x=0,w=_.length;x<w;x++){let P=_[x];if(Array.isArray(P))for(let D=0,C=P.length;D<C;D++)u(P[D],x,D,T);else u(P,x,0,T)}s.bindBuffer(s.UNIFORM_BUFFER,null)}function u(b,S,_,T){if(y(b,S,_,T)===!0){let x=b.__offset,w=b.value;if(Array.isArray(w)){let P=0;for(let D=0;D<w.length;D++){let C=w[D],F=p(C);g(C,b.__data,P),typeof C!="number"&&typeof C!="boolean"&&!C.isMatrix3&&!ArrayBuffer.isView(C)&&(P+=F.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(w,b.__data,0);s.bufferSubData(s.UNIFORM_BUFFER,x,b.__data)}}function g(b,S,_){typeof b=="number"||typeof b=="boolean"?S[0]=b:b.isMatrix3?(S[0]=b.elements[0],S[1]=b.elements[1],S[2]=b.elements[2],S[3]=0,S[4]=b.elements[3],S[5]=b.elements[4],S[6]=b.elements[5],S[7]=0,S[8]=b.elements[6],S[9]=b.elements[7],S[10]=b.elements[8],S[11]=0):ArrayBuffer.isView(b)?S.set(new b.constructor(b.buffer,b.byteOffset,S.length)):b.toArray(S,_)}function y(b,S,_,T){let x=b.value,w=S+"_"+_;if(T[w]===void 0)return typeof x=="number"||typeof x=="boolean"?T[w]=x:ArrayBuffer.isView(x)?T[w]=x.slice():T[w]=x.clone(),!0;{let P=T[w];if(typeof x=="number"||typeof x=="boolean"){if(P!==x)return T[w]=x,!0}else{if(ArrayBuffer.isView(x))return!0;if(P.equals(x)===!1)return P.copy(x),!0}}return!1}function m(b){let S=b.uniforms,_=0,T=16;for(let w=0,P=S.length;w<P;w++){let D=Array.isArray(S[w])?S[w]:[S[w]];for(let C=0,F=D.length;C<F;C++){let A=D[C],I=Array.isArray(A.value)?A.value:[A.value];for(let B=0,O=I.length;B<O;B++){let $=I[B],L=p($),z=_%T,G=z%L.boundary,rt=z+G;_+=G,rt!==0&&T-rt<L.storage&&(_+=T-rt),A.__data=new Float32Array(L.storage/Float32Array.BYTES_PER_ELEMENT),A.__offset=_,_+=L.storage}}}let x=_%T;return x>0&&(_+=T-x),b.__size=_,b.__cache={},this}function p(b){let S={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(S.boundary=4,S.storage=4):b.isVector2?(S.boundary=8,S.storage=8):b.isVector3||b.isColor?(S.boundary=16,S.storage=12):b.isVector4?(S.boundary=16,S.storage=16):b.isMatrix3?(S.boundary=48,S.storage=48):b.isMatrix4?(S.boundary=64,S.storage=64):b.isTexture?Ht("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(b)?(S.boundary=16,S.storage=b.byteLength):Ht("WebGLRenderer: Unsupported uniform value type.",b),S}function v(b){let S=b.target;S.removeEventListener("dispose",v);let _=a.indexOf(S.__bindingPointIndex);a.splice(_,1),s.deleteBuffer(n[S.id]),delete n[S.id],delete r[S.id]}function M(){for(let b in n)s.deleteBuffer(n[b]);a=[],n={},r={}}return{bind:l,update:c,dispose:M}}var xv=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),nn=null;function vv(){return nn===null&&(nn=new Vr(xv,16,16,$n,yi),nn.name="DFG_LUT",nn.minFilter=Ve,nn.magFilter=Ve,nn.wrapS=qi,nn.wrapT=qi,nn.generateMipmaps=!1,nn.needsUpdate=!0),nn}var Jl=class{constructor(t={}){let{canvas:e=Qu(),context:i=null,depth:n=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:d=!1,outputBufferType:u=gi}=t;this.isWebGLRenderer=!0;let g;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=i.getContextAttributes().alpha}else g=a;let y=u,m=new Set([ml,pl,fl]),p=new Set([gi,zi,Qs,tr,hl,dl]),v=new Uint32Array(4),M=new Int32Array(4),b=new k,S=null,_=null,T=[],x=[],w=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Hi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let P=this,D=!1,C=null,F=null,A=null,I=null;this._outputColorSpace=si;let B=0,O=0,$=null,L=-1,z=null,G=new Re,rt=new Re,et=null,Et=new at(0),vt=0,Tt=e.width,X=e.height,j=1,ct=null,Mt=null,dt=new Re(0,0,Tt,X),St=new Re(0,0,Tt,X),Zt=!1,kt=new Ys,Xt=!1,me=!1,Qt=new ee,fe=new k,ze=new Re,Ke={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},we=!1;function Ie(){return $===null?j:1}let V=i;function ve(R,H){return e.getContext(R,H)}let oe,U,E,W,Z,Q,ht,mt,tt,nt,ft,Ft,xt,gt,Nt,Bt,Wt,N,lt,J,ot,ut,st;try{let R={alpha:!0,depth:n,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"186"}`),e.addEventListener("webglcontextlost",ge,!1),e.addEventListener("webglcontextrestored",ce,!1),e.addEventListener("webglcontextcreationerror",Ne,!1),V===null){let H="webgl2";if(V=ve(H,R),V===null)throw ve(H)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Lt()}catch(R){throw e.removeEventListener("webglcontextlost",ge,!1),e.removeEventListener("webglcontextrestored",ce,!1),e.removeEventListener("webglcontextcreationerror",Ne,!1),Gt("WebGLRenderer: "+R.message),R}function Lt(){oe=new Ty(V),oe.init(),ot=new uv(V,oe),U=new gy(V,oe,t,ot),E=new hv(V,oe),U.reversedDepthBuffer&&d&&E.buffers.depth.setReversed(!0),F=V.createFramebuffer(),A=V.createFramebuffer(),I=V.createFramebuffer(),W=new Cy(V),Z=new Kx,Q=new dv(V,oe,E,Z,U,ot,W),ht=new Ey(P),mt=new Im(V),ut=new py(V,mt),tt=new Ay(V,mt,W,ut),nt=new Iy(V,tt,mt,ut,W),N=new Py(V,U,Q),Nt=new yy(Z),ft=new Zx(P,ht,oe,U,ut,Nt),Ft=new gv(P,Z),xt=new jx,gt=new sv(oe),Wt=new fy(P,ht,E,nt,g,l),Bt=new cv(P,nt,U),st=new yv(V,W,U,E),lt=new my(V,oe,W),J=new Ry(V,oe,W),W.programs=ft.programs,P.capabilities=U,P.extensions=oe,P.properties=Z,P.renderLists=xt,P.shadowMap=Bt,P.state=E,P.info=W}y!==gi&&(w=new Dy(y,e.width,e.height,o,n,r));let It=new ud(P,V);this.xr=It,this.getContext=function(){return V},this.getContextAttributes=function(){return V.getContextAttributes()},this.forceContextLoss=function(){let R=oe.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){let R=oe.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return j},this.setPixelRatio=function(R){R!==void 0&&(j=R,this.setSize(Tt,X,!1))},this.getSize=function(R){return R.set(Tt,X)},this.setSize=function(R,H,K=!0){if(It.isPresenting){Ht("WebGLRenderer: Can't change size while VR device is presenting.");return}Tt=R,X=H,e.width=Math.floor(R*j),e.height=Math.floor(H*j),K===!0&&(e.style.width=R+"px",e.style.height=H+"px"),w!==null&&w.setSize(e.width,e.height),this.setViewport(0,0,R,H)},this.getDrawingBufferSize=function(R){return R.set(Tt*j,X*j).floor()},this.setDrawingBufferSize=function(R,H,K){Tt=R,X=H,j=K,e.width=Math.floor(R*K),e.height=Math.floor(H*K),this.setViewport(0,0,R,H)},this.setEffects=function(R){if(y===gi){Gt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(R){for(let H=0;H<R.length;H++)if(R[H].isOutputPass===!0){Ht("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}w.setEffects(R||[])},this.getCurrentViewport=function(R){return R.copy(G)},this.getViewport=function(R){return R.copy(dt)},this.setViewport=function(R,H,K,q){R.isVector4?dt.set(R.x,R.y,R.z,R.w):dt.set(R,H,K,q),E.viewport(G.copy(dt).multiplyScalar(j).round())},this.getScissor=function(R){return R.copy(St)},this.setScissor=function(R,H,K,q){R.isVector4?St.set(R.x,R.y,R.z,R.w):St.set(R,H,K,q),E.scissor(rt.copy(St).multiplyScalar(j).round())},this.getScissorTest=function(){return Zt},this.setScissorTest=function(R){E.setScissorTest(Zt=R)},this.setOpaqueSort=function(R){ct=R},this.setTransparentSort=function(R){Mt=R},this.getClearColor=function(R){return R.copy(Wt.getClearColor())},this.setClearColor=function(){Wt.setClearColor(...arguments)},this.getClearAlpha=function(){return Wt.getClearAlpha()},this.setClearAlpha=function(){Wt.setClearAlpha(...arguments)},this.clear=function(R=!0,H=!0,K=!0){let q=0;if(R){let Y=!1;if($!==null){let pt=$.texture.format;Y=m.has(pt)}if(Y){let pt=$.texture.type,wt=p.has(pt),_t=Wt.getClearColor(),Pt=Wt.getClearAlpha(),Dt=_t.r,Kt=_t.g,te=_t.b;wt?(v[0]=Dt,v[1]=Kt,v[2]=te,v[3]=Pt,V.clearBufferuiv(V.COLOR,0,v)):(M[0]=Dt,M[1]=Kt,M[2]=te,M[3]=Pt,V.clearBufferiv(V.COLOR,0,M))}else q|=V.COLOR_BUFFER_BIT}H&&(q|=V.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),K&&(q|=V.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),q!==0&&V.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(R){R.setRenderer(this),C=R},this.dispose=function(){e.removeEventListener("webglcontextlost",ge,!1),e.removeEventListener("webglcontextrestored",ce,!1),e.removeEventListener("webglcontextcreationerror",Ne,!1),Wt.dispose(),xt.dispose(),gt.dispose(),Z.dispose(),ht.dispose(),nt.dispose(),ut.dispose(),st.dispose(),ft.dispose(),It.dispose(),It.removeEventListener("sessionstart",bi),It.removeEventListener("sessionend",wn),cn.stop()};function ge(R){R.preventDefault(),zh("WebGLRenderer: Context Lost."),D=!0}function ce(){zh("WebGLRenderer: Context Restored."),D=!1;let R=W.autoReset,H=Bt.enabled,K=Bt.autoUpdate,q=Bt.needsUpdate,Y=Bt.type;Lt(),W.autoReset=R,Bt.enabled=H,Bt.autoUpdate=K,Bt.needsUpdate=q,Bt.type=Y}function Ne(R){Gt("WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function _i(R){let H=R.target;H.removeEventListener("dispose",_i),ln(H)}function ln(R){za(R),Z.remove(R)}function za(R){let H=Z.get(R).programs;H!==void 0&&(H.forEach(function(K){ft.releaseProgram(K)}),R.isShaderMaterial&&ft.releaseShaderCache(R))}this.renderBufferDirect=function(R,H,K,q,Y,pt){H===null&&(H=Ke);let wt=Y.isMesh&&Y.matrixWorld.determinantAffine()<0,_t=Wa(R,H,K,q,Y);E.setMaterial(q,wt);let Pt=K.index,Dt=1;if(q.wireframe===!0){if(Pt=tt.getWireframeAttribute(K),Pt===void 0)return;Dt=2}let Kt=K.drawRange,te=K.attributes.position,Ct=Kt.start*Dt,ue=(Kt.start+Kt.count)*Dt;pt!==null&&(Ct=Math.max(Ct,pt.start*Dt),ue=Math.min(ue,(pt.start+pt.count)*Dt)),Pt!==null?(Ct=Math.max(Ct,0),ue=Math.min(ue,Pt.count)):te!=null&&(Ct=Math.max(Ct,0),ue=Math.min(ue,te.count));let Pe=ue-Ct;if(Pe<0||Pe===1/0)return;ut.setup(Y,q,_t,K,Pt);let ye,he=lt;if(Pt!==null&&(ye=mt.get(Pt),he=J,he.setIndex(ye)),Y.isMesh)q.wireframe===!0?(E.setLineWidth(q.wireframeLinewidth*Ie()),he.setMode(V.LINES)):he.setMode(V.TRIANGLES);else if(Y.isLine){let ri=q.linewidth;ri===void 0&&(ri=1),E.setLineWidth(ri*Ie()),Y.isLineSegments?he.setMode(V.LINES):Y.isLineLoop?he.setMode(V.LINE_LOOP):he.setMode(V.LINE_STRIP)}else Y.isPoints?he.setMode(V.POINTS):Y.isSprite&&he.setMode(V.TRIANGLES);if(Y.isBatchedMesh)if(oe.get("WEBGL_multi_draw"))he.renderMultiDraw(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount);else{let ri=Y._multiDrawStarts,Rt=Y._multiDrawCounts,ci=Y._multiDrawCount,de=Pt?mt.get(Pt).bytesPerElement:1,Ti=Z.get(q).currentProgram.getUniforms();for(let Wi=0;Wi<ci;Wi++)Ti.setValue(V,"_gl_DrawID",Wi),he.render(ri[Wi]/de,Rt[Wi])}else if(Y.isInstancedMesh)he.renderInstances(Ct,Pe,Y.count);else if(K.isInstancedBufferGeometry){let ri=K._maxInstanceCount!==void 0?K._maxInstanceCount:1/0,Rt=Math.min(K.instanceCount,ri);he.renderInstances(Ct,Pe,Rt)}else he.render(Ct,Pe)};function yr(R,H,K,q){C!==null&&R.isNodeMaterial&&C.setObject(q,R),Xt===!0&&Nt.setState(R,K,!1),R.transparent===!0&&R.side===Ae&&R.forceSinglePass===!1?(R.side=Xe,R.needsUpdate=!0,hn(R,H,q),R.side=ji,R.needsUpdate=!0,hn(R,H,q),R.side=Ae):hn(R,H,q)}this.compile=function(R,H,K=null){K===null&&(K=R),C!==null&&C.renderStart(R,H,K),_=gt.get(K),_.init(H),x.push(_),K.traverseVisible(function(Y){Y.isLight&&Y.layers.test(H.layers)&&(_.pushLight(Y),Y.castShadow&&_.pushShadow(Y))}),R!==K&&R.traverseVisible(function(Y){Y.isLight&&Y.layers.test(H.layers)&&(_.pushLight(Y),Y.castShadow&&_.pushShadow(Y))}),_.setupLights(),C!==null&&C.updateLights(_.state.lightsArray),me=this.localClippingEnabled,Xt=Nt.init(this.clippingPlanes,me),Xt===!0&&Nt.setGlobalState(this.clippingPlanes,H),C!==null&&Bt.render(_.state.shadowsArray,K,H);let q=new Set;return R.traverse(function(Y){if(!(Y.isMesh||Y.isPoints||Y.isLine||Y.isSprite))return;let pt=Y.material;if(pt)if(Array.isArray(pt))for(let wt=0;wt<pt.length;wt++){let _t=pt[wt];yr(_t,K,H,Y),q.add(_t)}else yr(pt,K,H,Y),q.add(pt)}),_=x.pop(),C!==null&&C.renderEnd(),q},this.compileAsync=function(R,H,K=null){let q=this.compile(R,H,K);return new Promise(Y=>{function pt(){if(q.forEach(function(wt){let Pt=Z.get(wt).currentProgram;(Pt===void 0||Pt.isReady())&&q.delete(wt)}),q.size===0){Y(R);return}setTimeout(pt,10)}oe.get("KHR_parallel_shader_compile")!==null?pt():setTimeout(pt,10)})};let Vi=null;function Bc(R){Vi&&Vi(R)}function bi(){cn.stop()}function wn(){cn.start()}let cn=new Cf;cn.setAnimationLoop(Bc),typeof self<"u"&&cn.setContext(self),this.setAnimationLoop=function(R){Vi=R,It.setAnimationLoop(R),R===null?cn.stop():cn.start()},It.addEventListener("sessionstart",bi),It.addEventListener("sessionend",wn),this.render=function(R,H){if(H!==void 0&&H.isCamera!==!0){Gt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;C!==null&&C.renderStart(R,H);let K=It.enabled===!0&&It.isPresenting===!0,q=w!==null&&($===null||K)&&w.begin(P,$);if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),H.parent===null&&H.matrixWorldAutoUpdate===!0&&H.updateMatrixWorld(),It.enabled===!0&&It.isPresenting===!0&&(w===null||w.isCompositing()===!1)&&(It.cameraAutoUpdate===!0&&It.updateCamera(H),H=It.getCamera()),R.isScene===!0&&R.onBeforeRender(P,R,H,$),_=gt.get(R,x.length),_.init(H),_.state.textureUnits=Q.getTextureUnits(),x.push(_),Qt.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),kt.setFromProjectionMatrix(Qt,ki,H.reversedDepth),me=this.localClippingEnabled,Xt=Nt.init(this.clippingPlanes,me),S=xt.get(R,T.length),S.init(),T.push(S),It.enabled===!0&&It.isPresenting===!0){let wt=P.xr.getDepthSensingMesh();wt!==null&&xr(wt,H,-1/0,P.sortObjects)}xr(R,H,0,P.sortObjects),S.finish(),C!==null&&C.updateLights(_.state.lightsArray),P.sortObjects===!0&&S.sort(ct,Mt),we=It.enabled===!1||It.isPresenting===!1||It.hasDepthSensing()===!1,we&&Wt.addToRenderList(S,R),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Xt===!0&&Nt.beginShadows();let Y=_.state.shadowsArray;if(Bt.render(Y,R,H),Xt===!0&&Nt.endShadows(),(q&&w.hasRenderPass())===!1){let wt=S.opaque,_t=S.transmissive;if(_.setupLights(),H.isArrayCamera){let Pt=H.cameras;if(_t.length>0)for(let Dt=0,Kt=Pt.length;Dt<Kt;Dt++){let te=Pt[Dt];Ga(wt,_t,R,te)}we&&Wt.render(R);for(let Dt=0,Kt=Pt.length;Dt<Kt;Dt++){let te=Pt[Dt];bs(S,R,te,te.viewport)}}else _t.length>0&&Ga(wt,_t,R,H),we&&Wt.render(R),bs(S,R,H)}$!==null&&O===0&&(Q.updateMultisampleRenderTarget($),Q.updateRenderTargetMipmap($)),q&&w.end(P),R.isScene===!0&&R.onAfterRender(P,R,H),ut.resetDefaultState(),L=-1,z=null,x.pop(),x.length>0?(_=x[x.length-1],Q.setTextureUnits(_.state.textureUnits),Xt===!0&&Nt.setGlobalState(P.clippingPlanes,_.state.camera)):_=null,T.pop(),T.length>0?S=T[T.length-1]:S=null,C!==null&&C.renderEnd()};function xr(R,H,K,q){if(R.visible===!1)return;if(R.layers.test(H.layers)){if(R.isGroup)K=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(H);else if(R.isLightProbeGrid)_.pushLightProbeGrid(R);else if(R.isLight)_.pushLight(R),R.castShadow&&_.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||R.intersectsFrustum(kt)){q&&ze.setFromMatrixPosition(R.matrixWorld).applyMatrix4(Qt);let wt=nt.update(R),_t=R.material;_t.visible&&S.push(R,wt,_t,K,ze.z,null,H)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||R.intersectsFrustum(kt))){let wt=nt.update(R),_t=R.material;if(q&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),ze.copy(R.boundingSphere.center)):(wt.boundingSphere===null&&wt.computeBoundingSphere(),ze.copy(wt.boundingSphere.center)),ze.applyMatrix4(R.matrixWorld).applyMatrix4(Qt)),Array.isArray(_t)){let Pt=wt.groups;for(let Dt=0,Kt=Pt.length;Dt<Kt;Dt++){let te=Pt[Dt],Ct=_t[te.materialIndex];Ct&&Ct.visible&&S.push(R,wt,Ct,K,ze.z,te,H)}}else _t.visible&&S.push(R,wt,_t,K,ze.z,null,H)}}let pt=R.children;for(let wt=0,_t=pt.length;wt<_t;wt++)xr(pt[wt],H,K,q)}function bs(R,H,K,q){let{opaque:Y,transmissive:pt,transparent:wt}=R;_.setupLightsView(K),Xt===!0&&Nt.setGlobalState(P.clippingPlanes,K),q&&E.viewport(G.copy(q)),Y.length>0&&Qn(Y,H,K),pt.length>0&&Qn(pt,H,K),wt.length>0&&Qn(wt,H,K),E.buffers.depth.setTest(!0),E.buffers.depth.setMask(!0),E.buffers.color.setMask(!0),E.setPolygonOffset(!1)}function Ga(R,H,K,q){if((K.isScene===!0?K.overrideMaterial:null)!==null)return;if(_.state.transmissionRenderTarget[q.id]===void 0){let Ct=oe.has("EXT_color_buffer_half_float")||oe.has("EXT_color_buffer_float");_.state.transmissionRenderTarget[q.id]=new Qe(1,1,{generateMipmaps:!0,type:Ct?yi:gi,minFilter:en,samples:Math.max(4,U.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:se.workingColorSpace})}let pt=_.state.transmissionRenderTarget[q.id],wt=q.viewport||G;pt.setSize(wt.z*P.transmissionResolutionScale,wt.w*P.transmissionResolutionScale);let _t=P.getRenderTarget(),Pt=P.getActiveCubeFace(),Dt=P.getActiveMipmapLevel();P.setRenderTarget(pt),P.getClearColor(Et),vt=P.getClearAlpha(),vt<1&&P.setClearColor(16777215,.5),P.clear(),we&&Wt.render(K);let Kt=P.toneMapping;P.toneMapping=Hi;let te=q.viewport;if(q.viewport!==void 0&&(q.viewport=void 0),_.setupLightsView(q),Xt===!0&&Nt.setGlobalState(P.clippingPlanes,q),Qn(R,K,q),Q.updateMultisampleRenderTarget(pt),Q.updateRenderTargetMipmap(pt),oe.has("WEBGL_multisampled_render_to_texture")===!1){let Ct=!1;for(let ue=0,Pe=H.length;ue<Pe;ue++){let ye=H[ue],{object:he,geometry:ri,material:Rt,group:ci}=ye;if(Rt.side===Ae&&he.layers.test(q.layers)){let de=Rt.side;Rt.side=Xe,Rt.needsUpdate=!0,Va(he,K,q,ri,Rt,ci),Rt.side=de,Rt.needsUpdate=!0,Ct=!0}}Ct===!0&&(Q.updateMultisampleRenderTarget(pt),Q.updateRenderTargetMipmap(pt))}P.setRenderTarget(_t,Pt,Dt),P.setClearColor(Et,vt),te!==void 0&&(q.viewport=te),P.toneMapping=Kt}function Qn(R,H,K){let q=H.isScene===!0?H.overrideMaterial:null;for(let Y=0,pt=R.length;Y<pt;Y++){let wt=R[Y],{object:_t,geometry:Pt,group:Dt}=wt,Kt=wt.material;Kt.allowOverride===!0&&q!==null&&(Kt=q),_t.layers.test(K.layers)&&Va(_t,H,K,Pt,Kt,Dt)}}function Va(R,H,K,q,Y,pt){C!==null&&Y.isNodeMaterial&&C.setObject(R,Y),R.onBeforeRender(P,H,K,q,Y,pt),R.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),Y.onBeforeRender(P,H,K,q,R,pt),Y.transparent===!0&&Y.side===Ae&&Y.forceSinglePass===!1?(Y.side=Xe,Y.needsUpdate=!0,P.renderBufferDirect(K,H,q,Y,R,pt),Y.side=ji,Y.needsUpdate=!0,P.renderBufferDirect(K,H,q,Y,R,pt),Y.side=Ae):P.renderBufferDirect(K,H,q,Y,R,pt),R.onAfterRender(P,H,K,q,Y,pt)}function hn(R,H,K){H.isScene!==!0&&(H=Ke);let q=Z.get(R),Y=_.state.lights,pt=_.state.shadowsArray,wt=Y.state.version,_t=ft.getParameters(R,Y.state,pt,H,K,_.state.lightProbeGridArray),Pt=ft.getProgramCacheKey(_t),Dt=q.programs;q.environment=R.isMeshStandardMaterial||R.isMeshLambertMaterial||R.isMeshPhongMaterial?H.environment:null,q.fog=H.fog;let Kt=R.isMeshStandardMaterial||R.isMeshLambertMaterial&&!R.envMap||R.isMeshPhongMaterial&&!R.envMap;q.envMap=ht.get(R.envMap||q.environment,Kt),q.envMapRotation=q.environment!==null&&R.envMap===null?H.environmentRotation:R.envMapRotation,Dt===void 0&&(R.addEventListener("dispose",_i),Dt=new Map,q.programs=Dt);let te=Dt.get(Pt);if(te!==void 0){if(q.currentProgram===te&&q.lightsStateVersion===wt)return _r(R,_t),te}else _t.uniforms=ft.getUniforms(R),C!==null&&R.isNodeMaterial&&C.build(R,K,_t),R.onBeforeCompile(_t,P),te=ft.acquireProgram(_t,Pt),Dt.set(Pt,te),q.uniforms=_t.uniforms;let Ct=q.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Ct.clippingPlanes=Nt.uniform),_r(R,_t),q.needsLights=En(R),q.lightsStateVersion=wt,q.needsLights&&(Ct.ambientLightColor.value=Y.state.ambient,Ct.lightProbe.value=Y.state.probe,Ct.sunLights.value=Y.state.sun,Ct.sunLightShadows.value=Y.state.sunShadow,Ct.directionalLights.value=Y.state.directional,Ct.directionalLightShadows.value=Y.state.directionalShadow,Ct.spotLights.value=Y.state.spot,Ct.spotLightShadows.value=Y.state.spotShadow,Ct.rectAreaLights.value=Y.state.rectArea,Ct.ltc_1.value=Y.state.rectAreaLTC1,Ct.ltc_2.value=Y.state.rectAreaLTC2,Ct.pointLights.value=Y.state.point,Ct.pointLightShadows.value=Y.state.pointShadow,Ct.hemisphereLights.value=Y.state.hemi,Ct.sunShadowMatrix.value=Y.state.sunShadowMatrix,Ct.sunShadowCascade.value=Y.state.sunShadowCascade,Ct.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,Ct.spotLightMatrix.value=Y.state.spotLightMatrix,Ct.spotLightMap.value=Y.state.spotLightMap,Ct.pointShadowMatrix.value=Y.state.pointShadowMatrix),q.lightProbeGrid=_.state.lightProbeGridArray.length>0,q.currentProgram=te,q.uniformsList=null,te}function vr(R){if(R.uniformsList===null){let H=R.currentProgram.getUniforms();R.uniformsList=nr.seqWithValue(H.seq,R.uniforms)}return R.uniformsList}function _r(R,H){let K=Z.get(R);K.outputColorSpace=H.outputColorSpace,K.batching=H.batching,K.batchingColor=H.batchingColor,K.instancing=H.instancing,K.instancingColor=H.instancingColor,K.instancingMorph=H.instancingMorph,K.skinning=H.skinning,K.morphTargets=H.morphTargets,K.morphNormals=H.morphNormals,K.morphColors=H.morphColors,K.morphTargetsCount=H.morphTargetsCount,K.numClippingPlanes=H.numClippingPlanes,K.numIntersection=H.numClipIntersection,K.vertexAlphas=H.vertexAlphas,K.vertexTangents=H.vertexTangents,K.toneMapping=H.toneMapping}function Ms(R,H){if(R.length===0)return null;if(R.length===1)return R[0].texture!==null?R[0]:null;b.setFromMatrixPosition(H.matrixWorld);for(let K=0,q=R.length;K<q;K++){let Y=R[K];if(Y.texture!==null&&Y.boundingBox.containsPoint(b))return Y}return null}function Wa(R,H,K,q,Y){H.isScene!==!0&&(H=Ke),Q.resetTextureUnits();let pt=H.fog,wt=q.isMeshStandardMaterial||q.isMeshLambertMaterial||q.isMeshPhongMaterial?H.environment:null,_t=$===null?P.outputColorSpace:$.isXRRenderTarget===!0?$.texture.colorSpace:se.workingColorSpace,Pt=q.isMeshStandardMaterial||q.isMeshLambertMaterial&&!q.envMap||q.isMeshPhongMaterial&&!q.envMap,Dt=ht.get(q.envMap||wt,Pt),Kt=q.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,te=!!K.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),Ct=!!K.morphAttributes.position,ue=!!K.morphAttributes.normal,Pe=!!K.morphAttributes.color,ye=Hi;q.toneMapped&&($===null||$.isXRRenderTarget===!0)&&(ye=P.toneMapping);let he=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,ri=he!==void 0?he.length:0,Rt=Z.get(q),ci=_.state.lights;if(Xt===!0&&(me===!0||R!==z)){let be=R===z&&q.id===L;Nt.setState(q,R,be)}let de=!1;q.version===Rt.__version?(Rt.needsLights&&Rt.lightsStateVersion!==ci.state.version||Rt.outputColorSpace!==_t||Y.isBatchedMesh&&Rt.batching===!1||!Y.isBatchedMesh&&Rt.batching===!0||Y.isBatchedMesh&&Rt.batchingColor===!0&&Y._colorsTexture===null||Y.isBatchedMesh&&Rt.batchingColor===!1&&Y._colorsTexture!==null||Y.isInstancedMesh&&Rt.instancing===!1||!Y.isInstancedMesh&&Rt.instancing===!0||Y.isSkinnedMesh&&Rt.skinning===!1||!Y.isSkinnedMesh&&Rt.skinning===!0||Y.isInstancedMesh&&Rt.instancingColor===!0&&Y.instanceColor===null||Y.isInstancedMesh&&Rt.instancingColor===!1&&Y.instanceColor!==null||Y.isInstancedMesh&&Rt.instancingMorph===!0&&Y.morphTexture===null||Y.isInstancedMesh&&Rt.instancingMorph===!1&&Y.morphTexture!==null||Rt.envMap!==Dt||q.fog===!0&&Rt.fog!==pt||Rt.numClippingPlanes!==void 0&&(Rt.numClippingPlanes!==Nt.numPlanes||Rt.numIntersection!==Nt.numIntersection)||Rt.vertexAlphas!==Kt||Rt.vertexTangents!==te||Rt.morphTargets!==Ct||Rt.morphNormals!==ue||Rt.morphColors!==Pe||Rt.toneMapping!==ye||Rt.morphTargetsCount!==ri||!!Rt.lightProbeGrid!=_.state.lightProbeGridArray.length>0)&&(de=!0):(de=!0,Rt.__version=q.version);let Ti=Rt.currentProgram;de===!0&&(Ti=hn(q,H,Y),C&&q.isNodeMaterial&&C.onUpdateProgram(q,Ti,Rt));let Wi=!1,Tn=!1,Ss=!1,xe=Ti.getUniforms(),Ue=Rt.uniforms;if(E.useProgram(Ti.program)&&(Wi=!0,Tn=!0,Ss=!0),q.id!==L&&(L=q.id,Tn=!0),Rt.needsLights){let be=Ms(_.state.lightProbeGridArray,Y);Rt.lightProbeGrid!==be&&(Rt.lightProbeGrid=be,Tn=!0)}if(Wi||z!==R){E.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),xe.setValue(V,"projectionMatrix",R.projectionMatrix),xe.setValue(V,"viewMatrix",R.matrixWorldInverse);let Rn=xe.map.cameraPosition;Rn!==void 0&&Rn.setValue(V,fe.setFromMatrixPosition(R.matrixWorld)),U.logarithmicDepthBuffer&&xe.setValue(V,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&xe.setValue(V,"isOrthographic",R.isOrthographicCamera===!0),z!==R&&(z=R,Tn=!0,Ss=!0)}if(Rt.needsLights&&(ci.state.sunShadowMap.length>0&&xe.setValue(V,"sunShadowMap",ci.state.sunShadowMap,Q),ci.state.directionalShadowMap.length>0&&xe.setValue(V,"directionalShadowMap",ci.state.directionalShadowMap,Q),ci.state.spotShadowMap.length>0&&xe.setValue(V,"spotShadowMap",ci.state.spotShadowMap,Q),ci.state.pointShadowMap.length>0&&xe.setValue(V,"pointShadowMap",ci.state.pointShadowMap,Q)),Y.isSkinnedMesh){xe.setOptional(V,Y,"bindMatrix"),xe.setOptional(V,Y,"bindMatrixInverse");let be=Y.skeleton;be&&(be.boneTexture===null&&be.computeBoneTexture(),xe.setValue(V,"boneTexture",be.boneTexture,Q))}Y.isBatchedMesh&&(xe.setOptional(V,Y,"batchingTexture"),xe.setValue(V,"batchingTexture",Y._matricesTexture,Q),xe.setOptional(V,Y,"batchingIdTexture"),xe.setValue(V,"batchingIdTexture",Y._indirectTexture,Q),xe.setOptional(V,Y,"batchingColorTexture"),Y._colorsTexture!==null&&xe.setValue(V,"batchingColorTexture",Y._colorsTexture,Q));let An=K.morphAttributes;if((An.position!==void 0||An.normal!==void 0||An.color!==void 0)&&N.update(Y,K,Ti),(Tn||Rt.receiveShadow!==Y.receiveShadow)&&(Rt.receiveShadow=Y.receiveShadow,xe.setValue(V,"receiveShadow",Y.receiveShadow)),(q.isMeshStandardMaterial||q.isMeshLambertMaterial||q.isMeshPhongMaterial)&&q.envMap===null&&H.environment!==null&&(Ue.envMapIntensity.value=H.environmentIntensity),Ue.dfgLUT!==void 0&&(Ue.dfgLUT.value=vv()),Tn){if(xe.setValue(V,"toneMappingExposure",P.toneMappingExposure),Rt.needsLights&&br(Ue,Ss),pt&&q.fog===!0&&Ft.refreshFogUniforms(Ue,pt),Ft.refreshMaterialUniforms(Ue,q,j,X,_.state.transmissionRenderTarget[R.id]),Rt.needsLights&&Rt.lightProbeGrid){let be=Rt.lightProbeGrid;Ue.probesSH.value=be.texture,Ue.probesMin.value.copy(be.boundingBox.min),Ue.probesMax.value.copy(be.boundingBox.max),Ue.probesResolution.value.copy(be.resolution)}nr.upload(V,vr(Rt),Ue,Q)}if(q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(nr.upload(V,vr(Rt),Ue,Q),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&xe.setValue(V,"center",Y.center),xe.setValue(V,"modelViewMatrix",Y.modelViewMatrix),xe.setValue(V,"normalMatrix",Y.normalMatrix),xe.setValue(V,"modelMatrix",Y.matrixWorld),q.uniformsGroups!==void 0){let be=q.uniformsGroups;for(let Rn=0,ws=be.length;Rn<ws;Rn++){let Hd=be[Rn];st.update(Hd,Ti),st.bind(Hd,Ti)}}return Ti}function br(R,H){R.ambientLightColor.needsUpdate=H,R.lightProbe.needsUpdate=H,R.sunLights.needsUpdate=H,R.sunLightShadows.needsUpdate=H,R.directionalLights.needsUpdate=H,R.directionalLightShadows.needsUpdate=H,R.pointLights.needsUpdate=H,R.pointLightShadows.needsUpdate=H,R.spotLights.needsUpdate=H,R.spotLightShadows.needsUpdate=H,R.rectAreaLights.needsUpdate=H,R.hemisphereLights.needsUpdate=H}function En(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return B},this.getActiveMipmapLevel=function(){return O},this.getRenderTarget=function(){return $},this.setRenderTargetTextures=function(R,H,K){let q=Z.get(R);q.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,q.__autoAllocateDepthBuffer===!1&&(q.__useRenderToTexture=!1),Z.get(R.texture).__webglTexture=H,Z.get(R.depthTexture).__webglTexture=q.__autoAllocateDepthBuffer?void 0:K,q.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,H){let K=Z.get(R);K.__webglFramebuffer=H,K.__useDefaultFramebuffer=H===void 0},this.setRenderTarget=function(R,H=0,K=0){$=R,B=H,O=K;let q=null,Y=!1,pt=!1;if(R){let _t=Z.get(R);if(_t.__useDefaultFramebuffer!==void 0){E.bindFramebuffer(V.FRAMEBUFFER,_t.__webglFramebuffer),G.copy(R.viewport),rt.copy(R.scissor),et=R.scissorTest,E.viewport(G),E.scissor(rt),E.setScissorTest(et),L=-1;return}else if(_t.__webglFramebuffer===void 0)Q.setupRenderTarget(R);else if(_t.__hasExternalTextures)Q.rebindTextures(R,Z.get(R.texture).__webglTexture,Z.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){let Kt=R.depthTexture;if(_t.__boundDepthTexture!==Kt){if(Kt!==null&&Z.has(Kt)&&(R.width!==Kt.image.width||R.height!==Kt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Q.setupDepthRenderbuffer(R)}}let Pt=R.texture;(Pt.isData3DTexture||Pt.isDataArrayTexture||Pt.isCompressedArrayTexture)&&(pt=!0);let Dt=Z.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(Dt[H])?q=Dt[H][K]:q=Dt[H],Y=!0):R.samples>0&&Q.useMultisampledRTT(R)===!1?q=Z.get(R).__webglMultisampledFramebuffer:Array.isArray(Dt)?q=Dt[K]:q=Dt,G.copy(R.viewport),rt.copy(R.scissor),et=R.scissorTest}else G.copy(dt).multiplyScalar(j).floor(),rt.copy(St).multiplyScalar(j).floor(),et=Zt;if(K!==0&&(q=F),E.bindFramebuffer(V.FRAMEBUFFER,q)&&E.drawBuffers(R,q),E.viewport(G),E.scissor(rt),E.setScissorTest(et),Y){let _t=Z.get(R.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_CUBE_MAP_POSITIVE_X+H,_t.__webglTexture,K)}else if(pt){let _t=H;for(let Pt=0;Pt<R.textures.length;Pt++){let Dt=Z.get(R.textures[Pt]);V.framebufferTextureLayer(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0+Pt,Dt.__webglTexture,K,_t)}}else if(R!==null&&K!==0){let _t=Z.get(R.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,_t.__webglTexture,K)}L=-1};function ts(R){let H=Z.get(R);return(H.__readFormat!==R.format||H.__readType!==R.type)&&(H.__readFormat=R.format,H.__readType=R.type,H.__formatReadable=U.textureFormatReadable(R.format),H.__typeReadable=U.textureTypeReadable(R.type)),H}this.readRenderTargetPixels=function(R,H,K,q,Y,pt,wt,_t=0){if(!(R&&R.isWebGLRenderTarget)){Gt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Pt=Z.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&wt!==void 0&&(Pt=Pt[wt]),Pt){E.bindFramebuffer(V.FRAMEBUFFER,Pt);try{let Dt=R.textures[_t],Kt=Dt.format,te=Dt.type;R.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+_t);let Ct=ts(Dt);if(Ct.__formatReadable===!1){Gt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ct.__typeReadable===!1){Gt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H>=0&&H<=R.width-q&&K>=0&&K<=R.height-Y&&V.readPixels(H,K,q,Y,ot.convert(Kt),ot.convert(te),pt)}finally{let Dt=$!==null?Z.get($).__webglFramebuffer:null;E.bindFramebuffer(V.FRAMEBUFFER,Dt)}}},this.readRenderTargetPixelsAsync=async function(R,H,K,q,Y,pt,wt,_t=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Pt=Z.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&wt!==void 0&&(Pt=Pt[wt]),Pt)if(H>=0&&H<=R.width-q&&K>=0&&K<=R.height-Y){E.bindFramebuffer(V.FRAMEBUFFER,Pt);let Dt=R.textures[_t],Kt=Dt.format,te=Dt.type;R.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+_t);let Ct=ts(Dt);if(Ct.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ct.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let ue=V.createBuffer();V.bindBuffer(V.PIXEL_PACK_BUFFER,ue),V.bufferData(V.PIXEL_PACK_BUFFER,pt.byteLength,V.STREAM_READ),V.readPixels(H,K,q,Y,ot.convert(Kt),ot.convert(te),0),V.bindBuffer(V.PIXEL_PACK_BUFFER,null);let Pe=$!==null?Z.get($).__webglFramebuffer:null;E.bindFramebuffer(V.FRAMEBUFFER,Pe);let ye=V.fenceSync(V.SYNC_GPU_COMMANDS_COMPLETE,0);return V.flush(),await ef(V,ye,4),V.bindBuffer(V.PIXEL_PACK_BUFFER,ue),V.getBufferSubData(V.PIXEL_PACK_BUFFER,0,pt),V.bindBuffer(V.PIXEL_PACK_BUFFER,null),V.deleteBuffer(ue),V.deleteSync(ye),pt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,H=null,K=0){let q=Math.pow(2,-K),Y=Math.floor(R.image.width*q),pt=Math.floor(R.image.height*q),wt=H!==null?H.x:0,_t=H!==null?H.y:0;Q.setTexture2D(R,0),V.copyTexSubImage2D(V.TEXTURE_2D,K,0,0,wt,_t,Y,pt),E.unbindTexture()},this.copyTextureToTexture=function(R,H,K=null,q=null,Y=0,pt=0){let wt,_t,Pt,Dt,Kt,te,Ct,ue,Pe,ye=R.isCompressedTexture?R.mipmaps[pt]:R.image;if(K!==null)wt=K.max.x-K.min.x,_t=K.max.y-K.min.y,Pt=K.isBox3?K.max.z-K.min.z:1,Dt=K.min.x,Kt=K.min.y,te=K.isBox3?K.min.z:0;else{let Ue=Math.pow(2,-Y);wt=Math.floor(ye.width*Ue),_t=Math.floor(ye.height*Ue),R.isDataArrayTexture?Pt=ye.depth:R.isData3DTexture?Pt=Math.floor(ye.depth*Ue):Pt=1,Dt=0,Kt=0,te=0}q!==null?(Ct=q.x,ue=q.y,Pe=q.z):(Ct=0,ue=0,Pe=0);let he=ot.convert(H.format),ri=ot.convert(H.type),Rt;H.isData3DTexture?(Q.setTexture3D(H,0),Rt=V.TEXTURE_3D):H.isDataArrayTexture||H.isCompressedArrayTexture?(Q.setTexture2DArray(H,0),Rt=V.TEXTURE_2D_ARRAY):(Q.setTexture2D(H,0),Rt=V.TEXTURE_2D),E.activeTexture(V.TEXTURE0),E.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,H.flipY),E.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),E.pixelStorei(V.UNPACK_ALIGNMENT,H.unpackAlignment);let ci=E.getParameter(V.UNPACK_ROW_LENGTH),de=E.getParameter(V.UNPACK_IMAGE_HEIGHT),Ti=E.getParameter(V.UNPACK_SKIP_PIXELS),Wi=E.getParameter(V.UNPACK_SKIP_ROWS),Tn=E.getParameter(V.UNPACK_SKIP_IMAGES);E.pixelStorei(V.UNPACK_ROW_LENGTH,ye.width),E.pixelStorei(V.UNPACK_IMAGE_HEIGHT,ye.height),E.pixelStorei(V.UNPACK_SKIP_PIXELS,Dt),E.pixelStorei(V.UNPACK_SKIP_ROWS,Kt),E.pixelStorei(V.UNPACK_SKIP_IMAGES,te);let Ss=R.isDataArrayTexture||R.isData3DTexture,xe=H.isDataArrayTexture||H.isData3DTexture;if(R.isDepthTexture){let Ue=Z.get(R),An=Z.get(H),be=Z.get(Ue.__renderTarget),Rn=Z.get(An.__renderTarget);E.bindFramebuffer(V.READ_FRAMEBUFFER,be.__webglFramebuffer),E.bindFramebuffer(V.DRAW_FRAMEBUFFER,Rn.__webglFramebuffer);for(let ws=0;ws<Pt;ws++)Ss&&(V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,Z.get(R).__webglTexture,Y,te+ws),V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,Z.get(H).__webglTexture,pt,Pe+ws)),V.blitFramebuffer(Dt,Kt,wt,_t,Ct,ue,wt,_t,V.DEPTH_BUFFER_BIT,V.NEAREST);E.bindFramebuffer(V.READ_FRAMEBUFFER,null),E.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else if(Y!==0||R.isRenderTargetTexture||Z.has(R)){let Ue=Z.get(R),An=Z.get(H);E.bindFramebuffer(V.READ_FRAMEBUFFER,A),E.bindFramebuffer(V.DRAW_FRAMEBUFFER,I);for(let be=0;be<Pt;be++)Ss?V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,Ue.__webglTexture,Y,te+be):V.framebufferTexture2D(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,Ue.__webglTexture,Y),xe?V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,An.__webglTexture,pt,Pe+be):V.framebufferTexture2D(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,An.__webglTexture,pt),Y!==0?V.blitFramebuffer(Dt,Kt,wt,_t,Ct,ue,wt,_t,V.COLOR_BUFFER_BIT,V.NEAREST):xe?V.copyTexSubImage3D(Rt,pt,Ct,ue,Pe+be,Dt,Kt,wt,_t):V.copyTexSubImage2D(Rt,pt,Ct,ue,Dt,Kt,wt,_t);E.bindFramebuffer(V.READ_FRAMEBUFFER,null),E.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else xe?R.isDataTexture||R.isData3DTexture?V.texSubImage3D(Rt,pt,Ct,ue,Pe,wt,_t,Pt,he,ri,ye.data):H.isCompressedArrayTexture?V.compressedTexSubImage3D(Rt,pt,Ct,ue,Pe,wt,_t,Pt,he,ye.data):V.texSubImage3D(Rt,pt,Ct,ue,Pe,wt,_t,Pt,he,ri,ye):R.isDataTexture?V.texSubImage2D(V.TEXTURE_2D,pt,Ct,ue,wt,_t,he,ri,ye.data):R.isCompressedTexture?V.compressedTexSubImage2D(V.TEXTURE_2D,pt,Ct,ue,ye.width,ye.height,he,ye.data):V.texSubImage2D(V.TEXTURE_2D,pt,Ct,ue,wt,_t,he,ri,ye);E.pixelStorei(V.UNPACK_ROW_LENGTH,ci),E.pixelStorei(V.UNPACK_IMAGE_HEIGHT,de),E.pixelStorei(V.UNPACK_SKIP_PIXELS,Ti),E.pixelStorei(V.UNPACK_SKIP_ROWS,Wi),E.pixelStorei(V.UNPACK_SKIP_IMAGES,Tn),pt===0&&H.generateMipmaps&&V.generateMipmap(Rt),E.unbindTexture()},this.initRenderTarget=function(R){Z.get(R).__webglFramebuffer===void 0&&Q.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?Q.setTextureCube(R,0):R.isData3DTexture?Q.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?Q.setTexture2DArray(R,0):Q.setTexture2D(R,0),E.unbindTexture()},this.resetState=function(){B=0,O=0,$=null,E.reset(),ut.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ki}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=se._getDrawingBufferColorSpace(t),e.unpackColorSpace=se._getUnpackColorSpace()}};var tc=class extends Bi{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;let t=new _e;t.deleteAttribute("uv");let e=new Ot({side:Xe}),i=new Ot,n=new na(16777215,900,28,2);n.position.set(.418,16.199,.3),this.add(n);let r=new yt(t,e);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);let a=new ti(t,i,6),o=new De;o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),o.updateMatrix(),a.setMatrixAt(0,o.matrix),o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),o.updateMatrix(),a.setMatrixAt(1,o.matrix),o.position.set(6.167,.857,7.803),o.rotation.set(0,.561,0),o.scale.set(3.927,6.285,3.687),o.updateMatrix(),a.setMatrixAt(2,o.matrix),o.position.set(-2.017,.018,6.124),o.rotation.set(0,.333,0),o.scale.set(2.002,4.566,2.064),o.updateMatrix(),a.setMatrixAt(3,o.matrix),o.position.set(2.291,-.756,-2.621),o.rotation.set(0,-.286,0),o.scale.set(1.546,1.552,1.496),o.updateMatrix(),a.setMatrixAt(4,o.matrix),o.position.set(-2.193,-.369,-5.547),o.rotation.set(0,.516,0),o.scale.set(3.875,3.487,2.986),o.updateMatrix(),a.setMatrixAt(5,o.matrix),this.add(a);let l=new yt(t,rr(50));l.position.set(-16.116,14.37,8.208),l.scale.set(.1,2.428,2.739),this.add(l);let c=new yt(t,rr(50));c.position.set(-16.109,18.021,-8.207),c.scale.set(.1,2.425,2.751),this.add(c);let h=new yt(t,rr(17));h.position.set(14.904,12.198,-1.832),h.scale.set(.15,4.265,6.331),this.add(h);let f=new yt(t,rr(43));f.position.set(-.462,8.89,14.52),f.scale.set(4.38,5.441,.088),this.add(f);let d=new yt(t,rr(20));d.position.set(3.235,11.486,-12.541),d.scale.set(2.5,2,.1),this.add(d);let u=new yt(t,rr(100));u.position.set(0,20,0),u.scale.set(1,.1,1),this.add(u)}dispose(){let t=new Set;this.traverse(e=>{e.isMesh&&(t.add(e.geometry),t.add(e.material))});for(let e of t)e.dispose()}};function rr(s){return new ta({color:0,emissive:16777215,emissiveIntensity:s})}var ar=Math.PI*2,Xn=9.81,it=(s,t,e)=>s<t?t:s>e?e:s,qt=(s,t,e)=>s+(t-s)*e;var Me=(s,t,e)=>{let i=it((e-s)/(t-s),0,1);return i*i*(3-2*i)};function vn(s){return s%=ar,s>Math.PI?s-=ar:s<-Math.PI&&(s+=ar),s}function ke(s,t,e){let i=(s-t)%e;return i>e/2?i-=e:i<=-e/2&&(i+=e),i}function ae(s,t){return(s%t+t)%t}function ei(s){let t=s>>>0,e=()=>{t=t+1831565813>>>0;let i=t;return i=Math.imul(i^i>>>15,i|1),i^=i+Math.imul(i^i>>>7,i|61),((i^i>>>14)>>>0)/4294967296};return e.range=(i,n)=>i+(n-i)*e(),e.gauss=()=>{let i=0;for(let n=0;n<6;n++)i+=e();return(i-3)/Math.sqrt(.5)},e}function Uf(s,t){if(t<=s[0][0])return s[0][1];for(let e=1;e<s.length;e++)if(t<=s[e][0]){let[i,n]=s[e-1],[r,a]=s[e];return n+(a-n)*(t-i)/(r-i)}return s[s.length-1][1]}function Se(s,t=3){if(s==null||!isFinite(s))return"--:--.---";let e=s<0?"-":"";s=Math.abs(s);let i=Math.floor(s/60),n=s-i*60;return`${e}${i}:${n.toFixed(t).padStart(t+3,"0")}`}var zt={ASPHALT:0,KERB:1,GRASS:2,GRAVEL:3,RUNOFF:4,PIT:5,WALL:6},va=12,kf=4.5;function _v(s){let t=s.segments.map(y=>{let m=typeof y[y.length-1]=="object"?y[y.length-1]:{};return y[0]==="S"?{t:"S",len:y[1],free:!!m.free,fixed:!!m.fixed,name:m.n}:{t:"A",dir:y[0]==="L"?1:-1,r:y[1],ang:y[2]*Math.PI/180,free:!!m.free,name:m.n}}),e=t.filter(y=>y.t==="S"&&y.free),i=e.length>=2?e:t.filter(y=>y.t==="S"&&!y.fixed),n=t.find(y=>y.t==="A"&&y.free);if(i.length<2||!n)throw new Error(`${s.id}: need >=2 adjustable straights and 1 free arc`);let r=0;for(let y of t)y.t==="A"&&!y.free&&(r+=y.dir*y.ang);let a=s.turns*ar-r;if(n.ang=Math.abs(a),n.dir=Math.sign(a),n.ang<.05)throw new Error(`${s.id}: free arc angle degenerate`);let o=s.smooth??14,l=()=>{let y=0;for(let m of t)m.length=m.t==="S"?m.len:m.r*m.ang,m.start=y,y+=m.length;return y},c=l(),h=2*Math.round(c/2),f=()=>{c=l();let y=c/h,m=new Float64Array(h);for(let w of t){if(w.t!=="A")continue;let P=w.dir/w.r,D=w.start,C=w.start+w.length;for(let F=Math.max(0,Math.floor(D/y));F<h&&F*y<C;F++){let A=Math.min(C,(F+1)*y)-Math.max(D,F*y);A>0&&(m[F]+=P*A/y)}}let p=Math.max(.01,o/y),v=Math.ceil(p*3),M=[],b=0;for(let w=-v;w<=v;w++){let P=Math.exp(-(w*w)/(2*p*p));M.push(P),b+=P}let S=new Float64Array(h);for(let w=0;w<h;w++){let P=0;for(let D=-v;D<=v;D++)P+=m[(w+D+h*4)%h]*M[D+v];S[w]=P/b}let _=new Float64Array(h+1),T=new Float64Array(h+1),x=new Float64Array(h+1);for(let w=0;w<h;w++){let P=x[w]+S[w]*y/2;_[w+1]=_[w]+Math.cos(P)*y,T[w+1]=T[w]+Math.sin(P)*y,x[w+1]=x[w]+S[w]*y}return{x:_,y:T,th:x,kappa:S,step:y}},d,u=new Set(i);for(let y=0;y<60;y++){d=f();let m=d.x[h],p=d.y[h];if(Math.hypot(m,p)<1e-4)break;let v=[...u],M=0,b=0,S=0,_=v.map(P=>{let D=Math.min(h,Math.max(0,Math.round((P.start+P.length/2)/d.step))),C=d.th[D],F=P.len*P.len,A=Math.cos(C),I=Math.sin(C);return M+=A*A*F,b+=A*I*F,S+=I*I*F,[A,I,F]}),T=M*S-b*b;if(Math.abs(T)<1e-9)throw new Error(`${s.id}: straights are all parallel; cannot close the loop`);let x=(-m*S+p*b)/T,w=(m*b-p*M)/T;if(v.forEach((P,D)=>{let[C,F,A]=_[D],I=P.len+A*(C*x+F*w)*.8;I<25?(P.len=25,u.delete(P)):P.len=I}),u.size<2)throw new Error(`${s.id}: not enough room to close the loop; reshape the corners`)}d=f();let g=Math.hypot(d.x[h],d.y[h]);if(g>.05)throw new Error(`${s.id}: loop did not close (${g.toFixed(3)} m)`);return{...d,N:h,total:c,segs:t}}function bv(s){let t=s.scale??1,e=s.points.map(C=>({x:C[0]*t,y:C[1]*t,r:C[2]??80,o:C[3]||{}})),i=e.length,n=e.map((C,F)=>{let A=e[(F+i-1)%i],I=e[(F+1)%i],B=A.x-C.x,O=A.y-C.y,$=I.x-C.x,L=I.y-C.y,z=Math.hypot(B,O),G=Math.hypot($,L);B/=z,O/=z,$/=G,L/=G;let rt=Math.acos(it(B*$+O*L,-1,1)),et=Math.PI-rt,Et=C.r*Math.tan(et/2),vt=-B*L+O*$>0,Tt=B+$,X=O+L,j=Math.hypot(Tt,X)||1,ct=C.r/Math.sin(rt/2),Mt=C.x+Tt/j*ct,dt=C.y+X/j*ct;return{T:Et,theta:et,left:vt,cx:Mt,cy:dt,r:C.r,sx:C.x+B*Et,sy:C.y+O*Et,ex:C.x+$*Et,ey:C.y+L*Et,name:C.o.n}});for(let C=0;C<i;C++){let F=(C+1)%i,A=Math.hypot(e[F].x-e[C].x,e[F].y-e[C].y);if(n[C].T+n[F].T>A-1)throw new Error(`${s.id}: corners ${C} and ${F} overlap (need ${(n[C].T+n[F].T).toFixed(0)} m, edge is ${A.toFixed(0)} m)`)}let r=[[n[0].ex,n[0].ey]],a=[],o=0,l=(C,F)=>{let A=r[r.length-1];o+=Math.hypot(C-A[0],F-A[1]),r.push([C,F])};for(let C=1;C<=i;C++){let F=C%i;a[C-1]=o,l(n[F].sx,n[F].sy);let A=n[F],I=Math.atan2(A.sy-A.cy,A.sx-A.cx),B=Math.max(2,Math.ceil(A.theta/Math.min(.06,.7/A.r)));for(let O=1;O<=B;O++){let $=I+(A.left?1:-1)*(A.theta*O)/B;l(A.cx+Math.cos($)*A.r,A.cy+Math.sin($)*A.r)}}let c=o,h=(C,F)=>{let A=[0];for(let $=1;$<C.length;$++)A.push(A[$-1]+Math.hypot(C[$][0]-C[$-1][0],C[$][1]-C[$-1][1]));let I=A[A.length-1],B=[],O=1;for(let $=0;$<F;$++){let L=$/F*I;for(;O<A.length-1&&A[O]<L;)O++;let z=(L-A[O-1])/(A[O]-A[O-1]||1);B.push([qt(C[O-1][0],C[O][0],z),qt(C[O-1][1],C[O][1],z)])}return B.push([B[0][0],B[0][1]]),{pts:B,total:I}},f=2*Math.round(c/2),d=h(r,f),u=d.total/f,g=Math.max(.01,(s.smooth??8)/u),y=Math.ceil(g*3),m=[],p=0;for(let C=-y;C<=y;C++){let F=Math.exp(-(C*C)/(2*g*g));m.push(F),p+=F}let v=new Float64Array(f),M=new Float64Array(f);for(let C=0;C<f;C++){let F=0,A=0;for(let I=-y;I<=y;I++){let B=d.pts[(C+I+f*8)%f];F+=B[0]*m[I+y],A+=B[1]*m[I+y]}v[C]=F/p,M[C]=A/p}let b=Array.from({length:f+1},(C,F)=>[v[F%f],M[F%f]]),S=h(b,f),_=new Float64Array(f+1),T=new Float64Array(f+1);S.pts.forEach((C,F)=>{_[F]=C[0],T[F]=C[1]});let[x,w]=s.start||[0,0],P=(a[x]+w)/c*S.total,D=n.map((C,F)=>({t:"A",name:C.name,length:C.theta*C.r,start:0,dir:C.left?1:-1,r:C.r,ang:C.theta}));return{x:_,y:T,N:f,total:S.total,step:S.total/f,segs:D,startAt:P,edgeStart:a}}function Mv(s,t,e,i){let n=i.length,r=new Float64Array(n),a=new Float64Array(n),o=new Float64Array(n);for(let h=0;h<n;h++){if(h>=2&&(o[h]=e[h-2]/r[h-2]),h>=1){let d=t[h-1];h>=2&&(d-=o[h]*r[h-2]*a[h-1]),a[h]=d/r[h-1]}let f=s[h];h>=1&&(f-=a[h]*a[h]*r[h-1]),h>=2&&(f-=o[h]*o[h]*r[h-2]),r[h]=f}let l=new Float64Array(n);for(let h=0;h<n;h++){let f=i[h];h>=1&&(f-=a[h]*l[h-1]),h>=2&&(f-=o[h]*l[h-2]),l[h]=f}let c=new Float64Array(n);for(let h=n-1;h>=0;h--){let f=l[h]/r[h];h+1<n&&(f-=a[h+1]*c[h+1]),h+2<n&&(f-=o[h+2]*c[h+2]),c[h]=f}return c}function Sv(s,t=1.1,e=.04,i=24){let n=s.N,r=n*3,a=new Float64Array(r),o=new Float64Array(r),l=new Float64Array(r),c=new Float64Array(r),h=new Float64Array(r),f=new Float64Array(r);for(let x=0;x<r;x++){let w=x%n;a[x]=s.x[w],o[x]=s.y[w],l[x]=s.nx[w],c[x]=s.ny[w],h[x]=-(s.wr[w]-t),f[x]=s.wl[w]-t}let d=new Float64Array(r),u=new Float64Array(r);for(let x=1;x<r-1;x++)d[x]=a[x-1]-2*a[x]+a[x+1],u[x]=o[x-1]-2*o[x]+o[x+1];let g=new Float64Array(r),y=new Float64Array(r);for(let x=0;x<r-1;x++)g[x]=a[x+1]-a[x],y[x]=o[x+1]-o[x];let m=(x,w)=>l[x]*l[w]+c[x]*c[w],p=new Float64Array(r),v=new Float64Array(r),M=new Float64Array(r),b=new Float64Array(r);for(let x=1;x<r-1;x++){let w=[x-1,x,x+1],P=[1,-2,1];for(let D=0;D<3;D++){let C=w[D];b[C]-=P[D]*(l[C]*d[x]+c[C]*u[x]);for(let F=D;F<3;F++){let A=w[F],I=P[D]*P[F]*m(C,A)*1;A===C?p[C]+=I:A-C===1?v[C]+=I:A-C===2&&(M[C]+=I)}}}for(let x=0;x<r-1;x++){let w=[x,x+1],P=[-1,1];for(let D=0;D<2;D++){let C=w[D];b[C]-=e*P[D]*(l[C]*g[x]+c[C]*y[x]);for(let F=D;F<2;F++){let A=w[F],I=e*P[D]*P[F]*m(C,A);A===C?p[C]+=I:A-C===1&&(v[C]+=I)}}}for(let x=0;x<r;x++)p[x]+=1e-5;let S=new Float64Array(r),_=new Int8Array(r);for(let x=0;x<60;x++){let w=Float64Array.from(p),P=Float64Array.from(v),D=Float64Array.from(M),C=Float64Array.from(b);for(let I=0;I<r;I++){if(!_[I])continue;let B=_[I]<0?h[I]:f[I];for(let O=Math.max(0,I-2);O<=Math.min(r-1,I+2);O++){if(O===I||_[O])continue;let $=Math.min(I,O),z=Math.abs(I-O)===1?v[$]:M[$];C[O]-=z*B}}for(let I=0;I<r;I++)_[I]&&(w[I]=1,C[I]=_[I]<0?h[I]:f[I],I+1<r&&(P[I]=0),I+2<r&&(D[I]=0),I>=1&&(P[I-1]=0),I>=2&&(D[I-2]=0));let F=Mv(w,P,D,C),A=0;for(let I=0;I<r;I++)S[I]=F[I],_[I]||(F[I]<h[I]?(_[I]=-1,A++):F[I]>f[I]&&(_[I]=1,A++));for(let I=0;I<r;I++){if(!_[I])continue;let B=p[I]*S[I]-b[I];I>=1&&(B+=v[I-1]*S[I-1]),I>=2&&(B+=M[I-2]*S[I-2]),I+1<r&&(B+=v[I]*S[I+1]),I+2<r&&(B+=M[I]*S[I+2]),(_[I]>0&&B>0||_[I]<0&&B<0)&&(_[I]=0,A++)}if(!A)break}let T=new Float64Array(n);for(let x=0;x<n;x++)T[x]=it(S[n+x],h[n+x],f[n+x]);return wv(T,s.ds,i)}function wv(s,t,e){if(!(e>0))return s;let i=s.length,n=e/t,r=Math.ceil(n*3),a=[],o=0;for(let c=-r;c<=r;c++){let h=Math.exp(-(c*c)/(2*n*n));a.push(h),o+=h}let l=new Float64Array(i);for(let c=0;c<i;c++){let h=0;for(let f=-r;f<=r;f++)h+=a[f+r]*s[(c+f+i*4)%i];l[c]=h/o}return l}var ec=class{constructor(t){this.def=t,this.id=t.id,this.name=t.name,this.theme=t.theme||{};let e=t.points?bv(t):_v(t),i=e.startAt??t.startAt,n=e.N,r=Math.round(i/e.step);r-=r%2;let a=n/2;this.N=a,this.length=e.total,this.ds=e.total/a,this.x=new Float64Array(a),this.y=new Float64Array(a),this.z=new Float64Array(a);for(let h=0;h<a;h++){let f=(r+h*2)%n;this.x[h]=e.x[f],this.y[h]=e.y[f]}let o=0,l=0;for(let h=0;h<a;h++)o+=this.x[h],l+=this.y[h];o/=a,l/=a;for(let h=0;h<a;h++)this.x[h]-=o,this.y[h]-=l;this.hdg=new Float64Array(a),this.curv=new Float64Array(a),this.nx=new Float64Array(a),this.ny=new Float64Array(a);for(let h=0;h<a;h++){let f=(h+a-1)%a,d=(h+1)%a;this.hdg[h]=Math.atan2(this.y[d]-this.y[f],this.x[d]-this.x[f])}for(let h=0;h<a;h++){let f=(h+a-2)%a,d=(h+2)%a;this.curv[h]=vn(this.hdg[d]-this.hdg[f])/(4*this.ds),this.nx[h]=-Math.sin(this.hdg[h]),this.ny[h]=Math.cos(this.hdg[h])}let c=this.length;for(let h=0;h<a;h++){let f=0;for(let[d,u,g]of t.elevation||[])f+=u*Math.sin(ar*d*h*this.ds/c+g);this.z[h]=f}this.slope=new Float64Array(a);for(let h=0;h<a;h++)this.slope[h]=(this.z[(h+1)%a]-this.z[(h+a-1)%a])/(2*this.ds);this.segInfo=e.segs.map(h=>({type:h.t,name:h.name,length:h.length,s:ae(h.start-i,this.length),dir:h.dir,r:h.r,angle:h.ang})),this._buildCorners(),this._buildEdges(),this._buildPit(),this._buildMarkers(),this.lineD=Sv(this,t.lineMargin??1.1),this._finishLine()}wrapS(t){return ae(t,this.length)}pointAt(t,e,i={}){let n=ae(t,this.length)/this.ds,r=Math.floor(n)%this.N,a=(r+1)%this.N,o=n-Math.floor(n),l=qt(this.x[r],this.x[a],o),c=qt(this.y[r],this.y[a],o),h=qt(this.nx[r],this.nx[a],o),f=qt(this.ny[r],this.ny[a],o),d=Math.hypot(h,f);return i.x=l+h/d*e,i.y=c+f/d*e,i.cx=l,i.cy=c,i.h=qt(this.z[r],this.z[a],o),i.heading=this.hdgAt(t),i}hdgAt(t){let e=ae(t,this.length)/this.ds,i=Math.floor(e)%this.N,n=(i+1)%this.N,r=e-Math.floor(e);return this.hdg[i]+vn(this.hdg[n]-this.hdg[i])*r}at(t,e){let i=ae(e,this.length)/this.ds,n=Math.floor(i)%this.N,r=i-Math.floor(i);return qt(t[n],t[(n+1)%this.N],r)}idx(t){return Math.floor(ae(t,this.length)/this.ds)%this.N}project(t,e,i,n){let r=this.N,a=this.x,o=this.y,l=-1,c=1/0,h=0,f=M=>{let b=M+1===r?0:M+1,S=a[b]-a[M],_=o[b]-o[M],T=((t-a[M])*S+(e-o[M])*_)/(S*S+_*_);T=T<0?0:T>1?1:T;let x=a[M]+S*T-t,w=o[M]+_*T-e,P=x*x+w*w;P<c&&(c=P,l=M,h=T)};if(i>=0)for(let M=-12;M<=12;M++)f((i+M+r)%r);if(l<0||c>900){let M=0,b=1/0;for(let S=0;S<r;S+=6){let _=a[S]-t,T=o[S]-e,x=_*_+T*T;x<b&&(b=x,M=S)}c=1/0;for(let S=-9;S<=9;S++)f((M+S+r)%r)}let d=(l+1)%r,u=a[d]-a[l],g=o[d]-o[l],y=a[l]+u*h,m=o[l]+g*h,p=u*(e-m)-g*(t-y),v=Math.sqrt(c);return n.i=l,n.t=h,n.s=(l+h)*this.ds,n.d=p>=0?v:-v,n.dist=v,n}_buildCorners(){let t=this.N,e=this.ds,i=1/380,n=this.curv,r=[],a=0;for(;Math.abs(n[a])>i&&a<t;)a++;let o=null;for(let l=0;l<t;l++){let c=(a+l)%t,h=Math.abs(n[c])>i;if(h&&(!o||Math.sign(n[c])!==o.sign)){o&&r.push(o),o={sign:Math.sign(n[c]),start:c,end:c,maxK:Math.abs(n[c]),apex:c,len:1};continue}if(h&&o)o.end=c,o.len++,Math.abs(n[c])>o.maxK&&(o.maxK=Math.abs(n[c]),o.apex=c);else if(!h&&o){let f=0;for(;f<8&&Math.abs(n[(c+f)%t])<=i;)f++;f>=8||Math.sign(n[(c+f)%t])!==o.sign?(r.push(o),o=null):o.len++}}o&&r.push(o),this.corners=r.filter(l=>l.len*e>25).map((l,c)=>({...l,id:c+1,sApex:l.apex*e,sStart:l.start*e,sEnd:l.end*e,radius:1/l.maxK}))}_buildEdges(){let t=this.N,e=this.def,i=e.width??14;this.wl=new Float64Array(t).fill(i/2),this.wr=new Float64Array(t).fill(i/2);for(let d=0;d<t;d++){let u=d*this.ds,g=Math.min(u,this.length-u),y=i/2*(1+.08*(1-Me(0,500,g)));this.wl[d]=y,this.wr[d]=y}this.kl=new Float64Array(t),this.kr=new Float64Array(t),this.r1l=new Float64Array(t),this.r1r=new Float64Array(t),this.t1l=new Uint8Array(t),this.t1r=new Uint8Array(t),this.r2l=new Float64Array(t),this.r2r=new Float64Array(t);let n=e.runoff||{mode:"modern"},r=e.kerbWidth??1.5,a=n.mode==="street",o=(d,u,g)=>{let y=(u%t+t)%t;for(let m=(d%t+t)%t,p=0;p<t&&(g(m),m!==y);p++,m=(m+1)%t);},l=(d,u)=>(d.start+Math.round((d.end-d.start+t)%t*u))%t;if(!a||n.kerbs)for(let d of this.corners){if(d.maxK<1/230)continue;let u=d.sign>0,g=u?this.kl:this.kr,y=u?this.kr:this.kl;o(l(d,.12),l(d,.9),m=>g[m]=r),d.maxK>1/120&&o(l(d,.6),(l(d,1)+10)%t,m=>y[m]=r)}let c=n.base1??0,h=n.grass??16,f=n.cornerRoom??12;for(let d=0;d<t;d++)this.r1l[d]=this.r1r[d]=c,this.r2l[d]=this.r2r[d]=a?n.gap??1.2:h,this.t1l[d]=this.t1r[d]=zt.GRASS;if(!a){for(let u of this.corners){if(u.maxK<1/450)continue;let g=u.sign<0,y=g?this.r1l:this.r1r,m=g?this.t1l:this.t1r,p=g?this.r2l:this.r2r,v=Math.round(30/this.ds),M=Math.round(60/this.ds),b=(u.start-v+t)%t,S=(u.end+M)%t,_=u.maxK<1/140,T=f*(_?1.5:1);o(b,S,x=>{y[x]=T,m[x]=n.mode==="classic"?zt.GRAVEL:_||n.mode==="modern"?zt.RUNOFF:zt.GRAVEL,n.mode==="mixed"&&(m[x]=_?zt.GRAVEL:zt.RUNOFF),p[x]=Math.max(6,h-4)})}let d=u=>{let g=Float64Array.from(u),y=10;for(let m=0;m<t;m++){let p=0;for(let v=-y;v<=y;v++)p+=g[(m+v+t)%t];u[m]=p/(2*y+1)}};d(this.r1l),d(this.r1r)}}wallDist(t,e){if(e>0)return this.wl[t]+this.kl[t]+this.r1l[t]+this.r2l[t];let i=this.wr[t]+this.kr[t]+this.r1r[t]+this.r2r[t];if(this.pit){let n=t*this.ds,r=this._pitBlend(n);this.pitWallRange(n)?i=r*this.pit.offset+va/2+.7:r>.01&&(i=Math.max(i,r*this.pit.offset+va/2+3))}return i}_buildPit(){let t=this.def.pit;if(!t){this.pit=null;return}let e=this.length,i=this.idx(0),n=this.wr[i]+this.kr[i]+kf+va/2+1,r=Math.sqrt(6*n*22.2*22.2/7.4),a=Math.max(t.rampIn??90,r),o=Math.max(t.rampOut??90,r*.95),l=t.boxStart??60,c=t.boxSpacing??15;this.pit={start:ae(t.in,e),len:Math.max(t.out-t.in,a+l+9*c+30+o),rampIn:a,rampOut:o,offset:n,width:va,island:kf,limit:22.2,boxStart:l,boxSpacing:c,boxCount:10},this.pit.limitStart=ae(this.pit.start+this.pit.rampIn*.35,e),this.pit.limitLen=this.pit.len-this.pit.rampIn*.35-this.pit.rampOut*.5}_pitBlend(t){let e=this.pit;if(!e)return 0;let i=ae(t-e.start,this.length);if(i>e.len)return 0;let n=Me(0,e.rampIn,i),r=1-Me(e.len-e.rampOut,e.len,i);return Math.min(n,r)}pitCentre(t){return-this._pitBlend(t)*this.pit.offset}pitWallRange(t){let e=this.pit;if(!e)return!1;let i=ae(t-e.start,this.length);return i>=e.rampIn&&i<=e.len-e.rampOut}pitWallLat(t){return this.pitCentre(t)+this.pit.width/2+.35}inPitRange(t){return!!this.pit&&ae(t-this.pit.start,this.length)<=this.pit.len}inPitLimiter(t){return!!this.pit&&ae(t-this.pit.limitStart,this.length)<=this.pit.limitLen}pitBox(t){let e=this.pit,i=ae(e.start+e.rampIn+e.boxStart+t*e.boxSpacing,this.length);return{s:i,d:this.pitCentre(i)-2.2}}surface(t,e){let i=e<0?-e:e;if(this.pit){let r=this._pitBlend(t*this.ds);if(r>.01&&Math.abs(e+r*this.pit.offset)<va/2)return zt.PIT}if(e>=0){let r=this.wl[t];return i<=r?zt.ASPHALT:(r+=this.kl[t],i<=r?zt.KERB:(r+=this.r1l[t],i<=r?this.t1l[t]:(r+=this.r2l[t],i<=r?zt.GRASS:zt.WALL)))}let n=this.wr[t];return i<=n?zt.ASPHALT:(n+=this.kr[t],i<=n?zt.KERB:(n+=this.r1r[t],i<=n?this.t1r[t]:(n+=this.r2r[t],i<=n||i<=this.wallDist(t,-1)?zt.GRASS:zt.WALL)))}_buildMarkers(){let t=this.length;this.drs=this.autoDrsZones();let e=t/3;this.sectors=this.def.sectors||[e,2*e],this.cpSpacing=t/Math.round(t/100),this.cpCount=Math.round(t/this.cpSpacing)}autoDrsZones(){let t=this.N,e=this.ds,i=this.length,n=l=>Math.abs(this.curv[l%t])<1/1200,r=[],a=-1;for(let l=0;l<t;l++)if(!n(l)){a=l;break}if(a<0)return r;let o=0;for(;o<t;){let l=(a+o)%t;if(!n(l)){o++;continue}let c=0;for(;o+c<t&&n(a+o+c);)c++;let h=c*e;if(h>480){let f=(a+o)%t*e,d=ae(f+25,i),u=ae(f+h-160,i);r.push({detect:ae(d-140,i),start:d,end:u})}o+=c}return r}inDrsZone(t){for(let e=0;e<this.drs.length;e++){let i=this.drs[e];if(ae(t-i.start,this.length)<=ae(i.end-i.start,this.length))return e}return-1}_finishLine(){this.gridSlot=t=>({s:ae(-9-8*t-t%2*0,this.length),d:t%2===0?3.3:-3.3})}lineAt(t){return this.at(this.lineD,t)}};var ic=1.2,ii={soft:{id:"soft",name:"Soft",letter:"S",color:"#ee3340",mu:1,wearLaps:14,tOpt:100,tRange:24},medium:{id:"medium",name:"Medium",letter:"M",color:"#f6d13a",mu:.965,wearLaps:24,tOpt:98,tRange:28},hard:{id:"hard",name:"Hard",letter:"H",color:"#f2f2f2",mu:.93,wearLaps:38,tOpt:96,tRange:32},wet:{id:"wet",name:"Wet",letter:"W",color:"#3a8bff",mu:.88,wearLaps:22,tOpt:80,tRange:50,wetTyre:!0}},ba=["soft","medium","hard","wet"],nc=["soft","medium","hard"];function Ma(s,t){let e=Me(.08,.7,t);return s.wetTyre?1-.1*(1-e)-.08*e:1-.3*e}var _n=[];_n[zt.ASPHALT]={grip:1,rr:.012};_n[zt.KERB]={grip:.94,rr:.02};_n[zt.GRASS]={grip:.52,rr:.1};_n[zt.GRAVEL]={grip:.48,rr:.38};_n[zt.RUNOFF]={grip:.92,rr:.016};_n[zt.PIT]={grip:1,rr:.012};_n[zt.WALL]={grip:.4,rr:.4};var Ev=[[3e3,250],[4500,330],[6e3,400],[8e3,470],[1e4,520],[11500,530],[13e3,490],[14e3,455],[15e3,420],[15600,0]],fd=s=>Uf(Ev,s),Tv=[21,32,43,54,65,76,88,101];function Bf(s={}){let t=it(s.frontWing??5,0,10),e=it(s.rearWing??5,0,10),i=s.performance??1,n=.35,r={dryMass:770,wheelbase:3.6,weightFront:.455,trackF:1.6,trackR:1.55,hCg:.28,izDry:1050,wheelR:n,length:5.5,width:2,clAf:1.6+.16*t+.32,clAr:2.2+.18*e+.48,cdA:.35+.25+.012*t+.35+.035*e,cdSide:2.8,drsDragCut:.2,drsLiftCut:.45,mu0:2,loadSens:11e-5,fz0:2e3,kappaPeak:.11,alphaPeak:.09,pacejkaB:2.06,pacejkaC:1.4,relaxLength:.35,rollFrontShare:.55,frontGrip:s.frontGrip??1,rearGrip:s.rearGrip??1.15,iFront:1.5,iRear:1.8,idleRpm:4200,maxRpm:15e3,shiftUpRpm:13600,shiftDownRpm:8300,driveEff:.93,powerScale:i,ersPower:12e4,ersCapacity:4e6,brakeTorque:19e3,brakeBias:s.brakeBias??.58,maxSteer:.36,compound:ii[s.compound||"medium"],pressure:it(Math.round(s.pressure??0),-3,3),fuelKg:s.fuel??40};return r.gearRatios=Tv.map(a=>14600*2*Math.PI/60*n/a),r.aeroBalanceFront=(r.clAf+.4*0)/(r.clAf+r.clAr),r}function _a(s,t){return Math.max(.7,s.mu0-s.loadSens*(t-s.fz0))*s.compound.mu}function Of(s,t){let e=ic,i=s.clAf+s.clAr,n=u=>.5*e*i*u*u,r=u=>.5*e*s.cdA*u*u,a=u=>(t*Xn+n(u))/4,o=t*s.hCg/(s.trackF+s.trackR),l=new Float64Array(161);for(let u=0;u<l.length;u++){let g=a(u),y=4*_a(s,g)*g/t;for(let m=0;m<6;m++){let p=o*y,v=g+p,M=Math.max(g-p,50);y=2*(_a(s,v)*v+_a(s,M)*M)/t}l[u]=y}let c=(u,g=1)=>{let y=Math.min(Math.max(u,0),l.length-1.001),m=Math.floor(y);return(l[m]+(l[m+1]-l[m])*(y-m))*g},h=(u,g=1)=>{let y=a(u);return(4*_a(s,y)*y*g+r(u))/t},f=u=>{let g=0;for(let y=0;y<s.gearRatios.length;y++){let m=u/s.wheelR*s.gearRatios[y]*60/(2*Math.PI);if(m>s.maxRpm||m<6e3)continue;let p=m*2*Math.PI/60;g=Math.max(g,fd(m)*p*s.driveEff*s.powerScale)}return g+s.ersPower*.5*s.powerScale};return{down:n,drag:r,latAccel:c,brakeDecel:h,accel:(u,g=1)=>{let y=(t*Xn*(1-s.weightFront)+n(u)*(1-s.aeroBalanceFront))/2,m=2*_a(s,y+250)*(y+250)*g,p=f(Math.max(u,8))/Math.max(u,8),v=.014*(t*Xn+n(u));return(Math.min(m,p)-r(u)-v)/t},enginePower:f}}var pd=5.5,Av=.02,Sa=22.2;function Rv(s){let t=it(s,0,1.3),e=Math.min(1,t);return{pace:.8+.2*Math.pow(t,.8),mistakesPerLap:1.4*(1-e)**2+.03*(1-.6*Math.max(0,t-1)/.3),reaction:Math.max(.1,.55-.38*t),aggression:Math.min(1,.2+.7*t),lineScale:.55+.45*Math.min(1,t*1.4),brakeBias:.85+.13*e}}var bn=class{constructor({car:t,track:e,profile:i,skill:n=1,level:r=.5,seed:a=1,teamIdx:o=0,boxS:l=null,boxD:c=null}){this.car=t,this.track=e,this.profile=i,this.skill=n,this.rng=ei(a*7919+13),this.teamIdx=o,this.box={s:l,d:c},this.inp={throttle:0,brake:0,steer:0,drs:!1,boost:!1,gearUp:!1,gearDown:!1,pitLimit:0},this.setLevel(r),this.offset=0,this.offTarget=0,this.passSide=0,this.defendSide=0,this.defendUntil=0,this.rcMode="free",this.neigh=[],this.neighTimer=0,this.paceAdapt=1,this.t=0,this.goTime=null,this.mistake=null,this.lastMistakeLap=-1,this.mistakeRoll=0,this.stuckT=0,this.lastMistakeCorner="",this.wantsPit=!1,this.pitState="none",this.pitDone=0,this.autopilotPit=!1,this.gripAdapt=1,this.lastLap=0,this.speedUp=1}setLevel(t){this.level=t,this.raceK=1,this.dp=Rv(t),this.dp.pace*=this.track.def?.aiPace??1,this.react=this.dp.reaction*(.7+.6*this.rng())}basePath(t){return this.track.lineAt(t)*this.dp.lineScale}pathD(t,e=!0){let i=this.track,n=this.basePath(t)+(e?this.offset:0);if(this.pitState==="in"||this.pitState==="stopped"||this.pitState==="out"){let r=i._pitBlend(t);if(r>.001){let a=i.pitCentre(t)+1.4*r;if(this.box.s!=null){let o=ke(t,this.box.s,i.length),l=Me(-70,-18,o)*(1-Me(10,55,o));a=qt(a,this.box.d,l)}n=qt(n,a,Me(0,.45,r))}}return n}update(t,e){let i=this.car,n=this.track,r=this.inp,a=this.profile,o=i.speed;if(this.t+=t,this.raceK=e.opt&&e.opt.mode==="race"?1-Av*Me(.75,1,this.level):1,e.phase==="grid"||e.phase==="countdown")return r.throttle=0,r.brake=1,r.steer=0,r.drs=!1,r.boost=!1,r.pitLimit=0,r;this.goTime===null&&(this.goTime=e.time+this.react+(this.releaseDelay||0));let l=i.s,c=this.pitState!=="none";if(this.neighTimer-=t,this.neighTimer<=0&&(this.neighTimer=1/30,this.scanTraffic(e)),this.gripT=(this.gripT||0)-t,this.gripT<=0){this.gripT=.5;let L=i.compound,z=0;for(let et=0;et<4;et++){let Et=it(1-.2*((i.temp[et]-L.tOpt)/L.tRange)**2,.7,1.02),vt=i.wear[et],Tt=1-.06*vt-.2*Me(.62,1,vt);z+=Et*Tt}z/=4;let G=Math.max(i.puncture[0],i.puncture[1],i.puncture[2],i.puncture[3]);z*=Ma(L,i.wetness||0),z*=1-it(.4*(i.damageFront||0)+.15*(i.damageRear||0)+.2*(i.damageFloor||0)+.12*((i.damageSideL||0)+(i.damageSideR||0))+.35*G,0,.6);let rt=Math.sqrt(it(z/.96,.35,1));this.gripAdapt+=(Math.min(1,rt)-this.gripAdapt)*.5}this.updateMistakes(e),this.updatePit(e),this.offset+=it(this.offTarget-this.offset,-t*3.2,t*3.2);let h=l+it(o*.09,1,9),f=this.pathD(l),d=this.pathD(h),u=(this.pathD(l+4)-2*this.pathD(l)+this.pathD(l-4))/16,g=n.at(n.curv,h),y=g/Math.max(.3,1-g*d)+u,m=(this.pathD(l+2)-this.pathD(l-2))/4,p=n.hdgAt(l)+Math.atan(m),v=Math.atan2(i.v,Math.max(i.u,2)),M=vn(i.theta+v-p),b=i.d-f,S=i.spec.wheelbase,_=Math.atan(S*y);_+=.0016*o*o*y,_-=1.15*M+Math.atan(1.9*b/(o+3));let T=i.spec.maxSteer/(1+(o/46)**2);r.steer=it(_/T,-1,1);let x=it(o*.09,2,14),w=n.idx(l+x),P=1-.06*(i.dirtyAir||0),D=this.dp.pace*this.skill*this.raceK*this.paceAdapt*this.gripAdapt*P,C=a.v[w]*D*(this.mistake&&this.mistake.active?this.mistake.factor:1),F=this.pitState!=="none"&&n._pitBlend(l)>.01;if((i.onGrass||!F&&(i.d>n.wl[i.i]+1.5||-i.d>n.wr[i.i]+1.5))&&(C=Math.min(C,28)),C=Math.min(C,this.trafficCap(C,e)),e.sc&&e.sc.state!=="none"&&(this.pitState==="none"||!n.inPitRange(i.s))){let L=i.ahead,z=L?Math.max(0,ke(L.s,i.s,n.length)):0,G=Math.max(0,ke(e.sc.s,i.s,n.length));C=Math.min(C,40+.07*Math.min(L?z:G,320))}if(r.pitLimit=0,this.pitState!=="none"){let L=n.pit.limitStart,z=ae(L-l,n.length);if(this.pitState==="in"&&z<500&&!n.inPitLimiter(l)){let G=ae(n.pit.start-l,n.length),rt=G<n.length-80?Math.max(0,G-6):0;C=Math.min(C,Math.sqrt(Sa*Sa*.94+18*rt))}if((n.inPitLimiter(l)||this.pitState==="stopped")&&(C=Math.min(C,Sa*.97),r.pitLimit=Sa),this.pitState==="in"&&this.box.s!=null&&n.inPitLimiter(l)){let G=ke(this.box.s,l,n.length);G>-3&&G<200&&(C=Math.min(C,Math.sqrt(2*6.5*Math.max(0,G-.1))+.25))}this.pitState==="stopped"&&(C=0)}let A=0,I=0;{let L=i.brakeTemp,z=L?(.86+.14*Me(120,420,(L[0]+L[1]+L[2]+L[3])/4))*(1-.3*Me(880,1150,Math.max(L[0],L[1],L[2],L[3]))):1,G=Math.max(12,a.env.brakeDecel(Math.max(o,5),.92)*this.gripAdapt*this.gripAdapt*z),rt=o*o/(2*.4*G)+40,et=0,Et=Math.max(1,Math.round(6/a.ds)),vt=n.idx(l);for(let St=1,Zt=0;Zt<rt;St+=Et){Zt=St*a.ds;let kt=a.v[(vt+St)%n.N]*D;if(o>kt){let Xt=(o*o-kt*kt)/(2*Math.max(Zt-2,1));Xt>et&&(et=Xt)}}if(this.pitState==="in")if(n.inPitLimiter(l)){if(this.box.s!=null){let St=ke(this.box.s,l,n.length);St>-2&&St<220&&o>2&&(et=Math.max(et,o*o/(2*Math.max(St-.3,.6))))}}else{let St=ae(n.pit.start-l,n.length),Zt=ae(n.pit.limitStart-l,n.length),kt=Sa*.97,Xt=St<n.length-80?St*.8:Zt;Zt<500&&o>kt&&(et=Math.max(et,(o*o-kt*kt)/(2*Math.max(Xt-3,1))))}let Tt=(i.aeroDrag+.014*i.mass*9.81)/i.mass,X=C-o,j=X<-1.5?(-X-1.5)*2.2:0,ct=(.78-.14*(i.wetness||0))*this.dp.brakeBias*(G+Tt*.9),Mt=0;for(let St of this.neigh){if(St.ds<=0||St.ds>90||Math.abs(St.dd)>2.6)continue;let Zt=o-St.v;if(Zt<=0)continue;let kt=Math.max(St.ds-pd-4,.8),Xt=Math.max(0,-(St.c.axF||0))*.7;Mt=Math.max(Mt,Xt+Zt*Zt/(2*kt))}let dt=Math.max(et>ct?et-Tt*.9:0,Mt>.5*ct?Mt-Tt*.5:0,j);if(dt>1.2)I=it(dt/G,0,1);else{let St=Math.max(6,a.env.accel(Math.max(o,5),1)),Zt=1.8*X+0;A=it(.16+(Zt+Tt)/(St+Tt),0,1),X>3&&(A=1);let kt=Math.min(1,Math.abs(i.ayF)/Math.max(10,a.env.latAccel(Math.max(o,10),.97)*this.gripAdapt*this.gripAdapt));A=Math.min(A,.15+1.1*Math.sqrt(Math.max(0,1-kt*kt)));let Xt=Math.max(Math.abs(i.alpha[2]),Math.abs(i.alpha[3]));Xt>.06&&(A*=it(1-(Xt-.06)*18,.1,1))}(this.pitState==="stopped"||C<.3&&o<1)&&(A=0,I=1)}e.time<this.goTime?(A=0,I=1):o<15&&e.time-this.goTime<4&&this.pitState==="none"&&!this.neigh.some(L=>L.ds>0&&L.ds<12&&Math.abs(L.dd)<2.6&&L.v<o+3)&&(A=Math.max(A,1),I=0),r.throttle=A,r.brake=I;let B=Math.abs(g)<.0025&&Math.abs(y)<.003;r.drs=!!i.drsAllowed&&A>.95&&I<.05&&B;let O=e.sc&&e.sc.state!=="none",$=i.gapAhead??99;return r.boost=!O&&A>.95&&B&&i.soc>.12&&($<1.8||i.soc>.55||e.lapsLeft(i)<=1),o<1.2&&e.phase==="racing"&&e.time>this.goTime+6&&this.pitState!=="stopped"&&!(i.rs&&i.rs.service)&&!(this.pitState!=="none"&&this.neigh.some(L=>L.ds>0&&L.ds<14&&Math.abs(L.dd)<3.2))?this.stuckT+=t:this.stuckT=0,r}scanTraffic(t){let e=this.car,i=this.track,n=this.neigh;if(n.length=0,this.ignoreTraffic)return;let r=i.length;for(let M of t.cars){if(M===e||M.retired||M.inGarage)continue;let b=ke(M.s,e.s,r);b<-60||b>90||n.push({c:M,ds:b,dd:M.d-e.d,v:M.speed})}let a=t.sc;if(a&&a.state!=="none"){let M=ke(a.s,e.s,r);M>0&&M<90&&n.push({c:a.pseudo,ds:M,dd:0,v:a.v,pace:!0})}let o=Math.max(e.speed,5),l=this.basePath(e.s),c=i.wl[e.i]-1.6,h=i.wr[e.i]-1.6,f=M=>i.at(i.curv,e.s+M),d=1/0,u=0;for(let M=30;M<=450;M+=15){let b=f(M);if(Math.abs(b)>.0035){d=M,u=Math.sign(b);break}}let g=Math.abs(f(0))<.0012&&Math.abs(f(35))<.0018,y=t.time,m=0,p=null;for(let M of n)M.ds>0&&M.ds<60&&Math.abs(M.dd)<3.4&&(!p||M.ds<p.ds)&&(p=M);if(this.blocker=p,this.rcMode="free",p){let M=p.c,b=p.ds-pd,S=o-p.v,_=this.dp.aggression+(g?.3:-.1)+(b<12?.25:0)-.3*(e.wetness||0);if(!this.passSide){let T=M.d+3,x=M.d-3,w=F=>!n.some(A=>A!==p&&A.ds>-9&&A.ds<p.ds+8&&Math.abs(e.d+A.dd-F)<2.7),P=T<=c&&w(T),D=x>=-h&&w(x),C=0;P&&D?C=d<320&&u?u:Math.abs(T-e.d)<Math.abs(x-e.d)?1:-1:P?C=1:D&&(C=-1),this.passSide=C}if(this.passSide){let T=M.d+this.passSide*3;n.some(x=>x!==p&&x.ds>-9&&x.ds<p.ds+8&&Math.abs(e.d+x.dd-T)<2.4)&&(this.passSide=0)}if(this.passSide&&_>.45)if(g&&b>17&&d>170&&S<22&&p.c.speed>30)m=it(M.d-l,-9,9),this.rcMode="draft";else{let x=M.d+this.passSide*3;m=it(it(x,-h,c)-l,-12,12),this.rcMode="attack"}}else this.passSide=0;let v=null;for(let M of n)M.ds<-3&&M.ds>-48&&Math.abs(M.dd)<4.6&&(!v||M.ds>v.ds)&&(v=M);if(v&&!(p&&this.rcMode==="attack")){let M=-v.ds/o,b=v.v-o;this.dp.aggression>.45&&g&&d>55&&d<480&&M<.95&&b>-3&&this.level>.3&&!this.defendSide&&(this.defendSide=v.dd>.8?1:v.dd<-.8?-1:u||1,this.defendUntil=y+6)}if(this.defendSide){let M=v&&-v.ds/o<1.6;y>this.defendUntil&&!M?this.defendSide=0:!M&&!v&&(this.defendSide=0)}if(this.defendSide&&this.rcMode!=="attack"){let M=this.defendSide>0?c:-h,b=it(this.defendSide*Math.min(Math.abs(M),4.2),-h,c);d>25&&(m=it(b-l,-12,12)),this.rcMode="defend"}n.some(M=>M.ds>-8&&M.ds<7&&Math.abs(M.dd)<3.8)&&(m=this.offset,this.defendSide=this.defendSide&&y>this.defendUntil?0:this.defendSide);for(let M of n)if(M.ds>-7&&M.ds<6&&Math.abs(M.dd)<3){let b=M.dd>0?-1:1,S=3-Math.abs(M.dd),_=M.ds>1.5?1.15:M.ds<-2?.55:.9;m+=b*S*_,this.rcMode=this.rcMode==="free"?"side":this.rcMode}a&&a.state!=="none"&&(this.passSide=0,this.defendSide=0,this.rcMode="free",m=0),this.offTarget=it(m,-h-l,c-l)}trafficCap(t,e){let i=this.car,n=1/0;for(let r of this.neigh){if(r.ds<=0||r.ds>40)continue;let a=Math.abs(r.dd);if(a>3)continue;let o=it((3-a)/.9,0,1),l=r.ds-pd,c=(e.sc&&e.sc.state!=="none"?14:7.5)+6*(i.wetness||0),h=r.v+(l-c)*.9;n=Math.min(n,qt(t,Math.max(h,2),o))}return n}updateMistakes(t){let e=this.car,i=this.track,n=this.mistake;if(n&&n.active){(ke(e.s,n.to,i.length)>0||ke(e.s,n.from,i.length)<-40)&&(n.active=!1);return}for(let r of i.corners){let a=ke(r.sApex,e.s,i.length);if(a>60&&a<140&&this.lastMistakeCorner!==r.id+":"+(e.rs?e.rs.laps:0)){this.lastMistakeCorner=r.id+":"+(e.rs?e.rs.laps:0);let o=this.dp.mistakesPerLap/Math.max(6,i.corners.length)*(1.5-this.skill+.5);this.rng()<o&&(this.mistake={active:!0,from:e.s,to:r.sApex+30,factor:1.06+.1*this.rng()+.05*(1-this.level)});break}}}updatePit(t){let e=this.car,i=this.track;if(!i.pit)return;let n=e.s,r=this.pitState;if(r==="none"){let a=ae(i.pit.start-n,i.length);this.wantsPit&&this.box.s!=null&&a<340&&a>30&&t.phase==="racing"&&(this.pitState="in")}else if(r==="in"){if(!i.inPitRange(n)&&ae(i.pit.start-n,i.length)>380){this.pitState="none";return}if(this.box.s!=null){let a=ke(this.box.s,n,i.length);if(a<-4&&i.inPitLimiter(n)&&e.speed>3){this.pitState="out";return}Math.abs(a)<1.4&&e.speed<1&&i.inPitLimiter(n)&&(this.pitState="stopped",e.pitStopped=!0)}}else r==="stopped"?e.pitStopped||(this.pitState="out",this.wantsPit=!1,this.pitDone++):r==="out"&&(i.inPitRange(n)||(this.pitState="none"))}};var Be=[{id:"vettore",setup:{front:1,rear:0},name:"Autodromo del Vettore",country:"Italy",blurb:"Temple of speed. Huge straights, heavy braking, chicanes. Run low downforce.",turns:-1,width:15,startAt:296,smooth:12,elevation:[[2,2.2,.6],[5,.9,2.1]],runoff:{mode:"modern",cornerRoom:14,grass:18},segments:[["S",1100,{free:!0}],["R",62,48,{n:"Prima Variante"}],["S",22],["L",52,50],["S",340],["R",340,52,{n:"Curva Grande"}],["S",520,{free:!0}],["L",85,36,{n:"Della Roggia"}],["S",22],["R",85,38],["S",140],["R",105,66,{n:"Lesmo 1"}],["S",190],["R",145,80,{n:"Lesmo 2"}],["S",610],["L",95,42,{n:"Ascari"}],["S",30],["R",72,82],["S",28],["L",95,44],["S",1e3],["R",210,150,{n:"Parabolica",free:!0}],["S",260]],pit:{in:-170,out:240,rampIn:60,rampOut:70,boxStart:12,boxSpacing:14},drs:[{detect:-420,start:60,end:1e3},{detect:3400,start:3560,end:4400}],theme:{sky:{top:"#2f6fc4",horizon:"#cfe3f3",sun:[.55,.62,-.3],sunColor:"#fff2d8"},fog:"#bcd3e6",fogFar:2600,grass:["#4d7a35","#5b8a3d"],trees:{density:.55,kind:"broadleaf"},stands:10,hills:.4}},{id:"rade",setup:{front:9,rear:9},aiPace:.955,name:"Circuit de la Rade",country:"Monaco-style harbour",blurb:"Tight street circuit between the barriers. No room for error. Run maximum downforce.",width:11,smooth:6,scale:1.15,elevation:[[1,6,1.2],[3,1.8,.4]],runoff:{mode:"street",gap:1.4,kerbs:!0},kerbWidth:1.1,lineMargin:.95,points:[[880,0,28],[180,0,26],[150,200,60],[260,330,36],[180,470,30],[360,560,24],[620,600,120],[780,520,60],[900,560,24],[1010,470,30],[960,380,28],[1010,290,30],[1e3,220,40],[940,100,80]],start:[0,330],pit:{in:-170,out:240,rampIn:60,rampOut:70,boxStart:12,boxSpacing:14},drs:[{detect:-120,start:20,end:380}],theme:{sky:{top:"#3b82d4",horizon:"#f4e6cf",sun:[.4,.55,.6],sunColor:"#ffe9c4"},fog:"#d6dde4",fogFar:1600,grass:["#6d8a4f","#74925a"],trees:{density:.05,kind:"palm"},buildings:!0,water:!0,stands:4,hills:.15}},{id:"northfield",setup:{front:5,rear:5},name:"Northfield Grand Prix Circuit",country:"England",blurb:"Flowing, fast and brutal on the tyres. Every corner leads into the next.",width:14.5,smooth:10,scale:.72,elevation:[[1,1.8,2.4],[3,.8,1]],runoff:{mode:"mixed",cornerRoom:13,grass:16},points:[[1e3,0,260],[1500,-150,100],[1850,-400,70],[1900,-640,60],[1700,-900,45],[1450,-800,60],[900,-1e3,90],[650,-1250,70],[300,-1300,100],[80,-1500,90],[-200,-1500,100],[-1100,-1560,100],[-1200,-900,150],[-1050,-400,90],[-800,-100,60],[-600,0,120]],start:[15,700],pit:{in:-170,out:240,rampIn:60,rampOut:70,boxStart:12,boxSpacing:14},drs:[{detect:-260,start:20,end:600},{detect:2900,start:3e3,end:3900}],theme:{sky:{top:"#5b86b8",horizon:"#dfe4e6",sun:[.35,.4,.8],sunColor:"#f4efe4"},fog:"#c9d2d6",fogFar:2400,grass:["#4a7d2f","#62923a"],trees:{density:.35,kind:"broadleaf"},stands:12,hills:.2}},{id:"ardennes",setup:{front:6,rear:5},name:"Circuit des Hautes-Fagnes",country:"Belgian forest",blurb:"Huge elevation changes through the pines. Courage rewarded, mistakes punished.",width:14,smooth:10,scale:.85,elevation:[[1,14,.4],[2,7,2.6],[3,2.5,1.1]],runoff:{mode:"classic",cornerRoom:12,grass:14},points:[[0,220,22],[160,-120,150],[230,-520,100],[130,-800,90],[330,-1100,70],[300,-2e3,200],[150,-2350,90],[-100,-2500,60],[-350,-2300,40],[-420,-1800,70],[-300,-1200,200],[-250,-760,120],[-200,-520,60],[0,-470,40]],start:[13,150],pit:{in:-110,out:190,rampIn:45,rampOut:55,boxStart:6,boxSpacing:12},drs:[{detect:-150,start:20,end:250},{detect:1800,start:1900,end:2500}],theme:{sky:{top:"#4a6a8a",horizon:"#c5cdd2",sun:[.2,.35,.9],sunColor:"#e8e2d2"},fog:"#a8b6b8",fogFar:1800,grass:["#3d6a2c","#4c7a34"],trees:{density:1,kind:"pine"},stands:5,hills:1}},{id:"costa",setup:{front:6,rear:6},name:"Aut\xF3dromo Costa Azul",country:"Portuguese coast",blurb:"Rollercoaster by the Atlantic: blind crests, a plunging hairpin and a long run to the line.",width:14,smooth:9,scale:.8,elevation:[[1,9,1.1],[2,4.5,3],[4,1.2,.5]],runoff:{mode:"modern",cornerRoom:13,grass:15},points:[[0,0,70],[1500,0,55],[1700,300,45],[1450,520,40],[1650,800,35],[1300,1e3,80],[800,900,90],[400,1100,50],[-200,1e3,60],[-350,600,90],[-100,350,45],[-400,150,60]],start:[0,650],pit:{in:-170,out:240,rampIn:60,rampOut:70,boxStart:12,boxSpacing:14},theme:{sky:{top:"#2a74c9",horizon:"#e8f0f2",sun:[.5,.5,.7],sunColor:"#fff0d2"},fog:"#cfe0ea",fogFar:2500,grass:["#6b8a3c","#7d9a47"],trees:{density:.18,kind:"pine"},water:!0,stands:8,hills:.6}},{id:"aurora",setup:{front:4,rear:4},name:"Monte Aurora Ring",country:"Alpine valley",blurb:"Short, fast and wide open under the peaks. Big braking, bigger kerbs, no place to hide.",width:15,smooth:10,scale:.85,elevation:[[1,6,.3],[3,2.4,2]],runoff:{mode:"modern",cornerRoom:15,grass:20},points:[[0,0,110],[1e3,0,90],[1250,260,50],[1e3,430,38],[1200,660,48],[1e3,960,110],[500,1100,60],[330,800,34],[620,610,45],[150,520,60],[-150,300,80]],start:[0,420],pit:{in:-170,out:240,rampIn:60,rampOut:70,boxStart:12,boxSpacing:14},theme:{sky:{top:"#3c6fb0",horizon:"#dbe6ee",sun:[.3,.45,.85],sunColor:"#fff6e0"},fog:"#c3d3e0",fogFar:2700,grass:["#4f7f3a","#5f9246"],trees:{density:.6,kind:"pine"},stands:6,hills:1.2}},{id:"mirage",setup:{front:2,rear:2},name:"Mirage International Circuit",country:"Desert",blurb:"Two enormous straights joined by hairpins in the sand. Power, brakes and traction decide it.",width:16,smooth:11,scale:.8,elevation:[[2,1.4,1]],runoff:{mode:"modern",cornerRoom:18,grass:12},points:[[0,0,80],[2e3,0,40],[2150,250,35],[1900,420,40],[1950,700,50],[1200,900,90],[600,700,40],[300,950,45],[-300,900,70],[-450,300,100]],start:[0,800],pit:{in:-170,out:240,rampIn:60,rampOut:70,boxStart:12,boxSpacing:14},theme:{sky:{top:"#3d86d6",horizon:"#f4e2c2",sun:[.6,.6,.2],sunColor:"#fff1cf"},fog:"#ead7b5",fogFar:2900,grass:["#c8a867","#d6b877"],trees:{density:.02,kind:"palm"},stands:8,hills:.15}},{id:"lumiere",setup:{front:8,rear:8},aiPace:.96,name:"Parc Lumi\xE8re",country:"City park",blurb:"Tight, twisty ribbon through a city park lined with barriers. Rhythm over raw speed.",width:12,smooth:7,scale:1,elevation:[[1,3.5,.8],[3,1.2,2.2]],runoff:{mode:"street",gap:1.5,kerbs:!0},kerbWidth:1.1,lineMargin:1,points:[[0,0,40],[700,0,30],[800,200,35],[500,300,30],[600,550,40],[250,650,30],[300,900,45],[-200,950,35],[-350,600,40],[-100,420,30],[-300,200,35]],start:[0,330],pit:{in:-170,out:240,rampIn:60,rampOut:70,boxStart:12,boxSpacing:14},theme:{sky:{top:"#4a78b8",horizon:"#eadfce",sun:[.35,.5,.6],sunColor:"#ffe6bf"},fog:"#d0d6dc",fogFar:1700,grass:["#5d8a45","#6a9a50"],trees:{density:.35,kind:"broadleaf"},buildings:!0,stands:4,hills:.1}},{id:"porto",setup:{front:6,rear:6},aiPace:.97,name:"Porto Vecchio Harbour Circuit",country:"Harbour town",blurb:"A long waterfront blast, then slow docks and warehouses. Heavy braking, tight exits, walls everywhere.",width:12.5,smooth:8,scale:.78,elevation:[[3,2.2,1.2],[8,2.6,1.6]],runoff:{mode:"street",gap:1.8,kerbs:!0},kerbWidth:1.1,lineMargin:1,points:[[0,0,60],[1400,0,50],[1700,120,35],[1750,450,30],[1500,600,40],[1550,850,35],[1100,950,50],[900,700,30],[600,800,30],[300,1e3,40],[-200,950,50],[-350,500,45],[-150,250,35]],start:[0,500],pit:{in:-170,out:240,rampIn:60,rampOut:70,boxStart:12,boxSpacing:14},theme:{sky:{top:"#3f8fd0",horizon:"#e6eef2",sun:[.4,.55,.5],sunColor:"#fff0d4"},fog:"#cfdde6",fogFar:2100,grass:["#6b8f4d","#789c58"],trees:{density:.12,kind:"palm"},buildings:!0,stands:5,hills:.2}},{id:"sakura",setup:{front:5,rear:5},name:"Sakura Ridge Circuit",country:"Highlands",blurb:"Flowing esses over a wooded ridge: commit through the fast sweepers, brake for the hairpin, repeat.",width:14,smooth:9,scale:.86,elevation:[[2,7,1.2],[5,-6,1.4],[9,8,1.6]],runoff:{mode:"modern",cornerRoom:14,grass:10},points:[[0,0,90],[800,0,70],[1250,-200,45],[1650,-150,40],[1900,150,35],[1700,450,40],[1250,400,30],[1e3,650,35],[1300,950,45],[900,1200,50],[300,1050,40],[100,700,30],[-300,550,45],[-450,200,50]],start:[0,300],pit:{in:-170,out:240,rampIn:60,rampOut:70,boxStart:12,boxSpacing:14},theme:{sky:{top:"#5a8fcf",horizon:"#f2e3e6",sun:[.5,.45,.4],sunColor:"#ffe9d6"},fog:"#dcd6dd",fogFar:2300,grass:["#4f7f3d","#5c8c47"],trees:{density:.75,kind:"pine"},stands:5,hills:1}}],FM=Object.fromEntries(Be.map(s=>[s.id,s]));var md=0,gd=1,or=2,lr=3,Hf=30,Cv=720,Pv=[.97,1,1.025],Iv=[.85,1,1.2],Lv=[.1,.3,.6],Dv=[1.6,1,.7],Fv=3500,yd={heat:.1,coolBase:.0011,coolSpeed:7e-5},Nv=4e5,zf={i:0,t:0,s:0,d:0,dist:0},sc=class{constructor(t,e){this.spec=t,this.track=e,this.assist={abs:!0,tc:2,steer:1,autoGear:!0,stability:1},this.wheelPos=[[0,0],[0,0],[0,0],[0,0]];let i=t.wheelbase;this.a=i*(1-t.weightFront),this.b=i*t.weightFront,this.wheelPos[md]=[this.a,t.trackF/2],this.wheelPos[gd]=[this.a,-t.trackF/2],this.wheelPos[or]=[-this.b,t.trackR/2],this.wheelPos[lr]=[-this.b,-t.trackR/2],this.omega=new Float64Array(4),this.alphaLag=new Float64Array(4),this.temp=new Float64Array(4).fill(85),this.brakeTemp=new Float64Array(4).fill(260),this.wear=new Float64Array(4),this.fz=new Float64Array(4),this.kappa=new Float64Array(4),this.alpha=new Float64Array(4),this.slipVis=new Float64Array(4),this.absF=new Float64Array(4).fill(1),this.surf=new Uint8Array(4),this.puncture=new Float64Array(4),this.flat=new Float64Array(4),this.wheelFx=new Float64Array(4),this.wheelFy=new Float64Array(4),this.fuel=t.fuelKg,this.soc=.6,this.harvesting=!1,this.ersMode=1,this.fuelMode=1,this.wetness=0,this.compound=t.compound,this.reset(0,0,0)}reset(t,e,i,n=0){this.x=t,this.y=e,this.theta=i,this.px=t,this.py=e,this.ptheta=i,this.u=n,this.v=0,this.r=0,this.kappa&&this.kappa.fill(0),this.slipVis&&this.slipVis.fill(0),this.alpha&&this.alpha.fill(0),this.harvesting=!1,this.steer=0,this.gear=1,this.rpm=this.spec.idleRpm,this.shiftTimer=0,this.sinceShift=1,this.throttle=0,this.brake=0,this.drsPos=0,this.axF=0,this.ayF=0,this.axBody=0,this.ayBody=0,this.stopTimer=0,this.revHold=0,this.kerbPhase=0,this.kerbShake=0,this.onGrass=!1,this.lastHint=-1,this.omega.fill(n/this.spec.wheelR),this.alphaLag.fill(0),this.absF.fill(1),this.pitch=0,this.roll=0,this.bottoming=0,this.locate()}get speed(){return Math.hypot(this.u,this.v)}get mass(){return this.spec.dryMass+this.fuel}locate(){let t=this.track.project(this.x,this.y,this.lastHint,zf);this.lastHint=t.i,this.i=t.i,this.s=t.s,this.d=t.d,this.trackH=this.track.at(this.track.z,t.s),this.trackSlope=this.track.slope[t.i],this.trackHeading=this.track.hdgAt(t.s)}_aero(t,e){let i=this.spec,n=.5*ic*t*t,r=1-.55*(this.damageFront||0),a=1-.55*(this.damageRear||0),o=((this.damageSideL||0)+(this.damageSideR||0))/2,l=1-.3*(this.damageFloor||0)-.2*o,c=this.drsPos,h=this.dirtyAir||0,f=1-.45*Me(.05,.4,Math.abs(e)),d=i.clAf*r*(1-.32*h)*l*f,u=i.clAr*a*(1-.14*h)*(1-i.drsLiftCut*c)*l*f,g=this.slipstream||0,y=i.cdA*(1-i.drsDragCut*c)*(1-.28*g)*(1+.12*(this.damageFront||0)+.1*(this.damageRear||0)+.08*o);return{q:n,downF:n*d,downR:n*u,drag:n*y}}step(t,e){let i=this.spec,n=this.mass,r=i.izDry+this.fuel*.45,a=i.wheelbase,o=this.a,l=this.b;this.px=this.x,this.py=this.y,this.ptheta=this.theta;let c=this.u,h=this.v,f=this.r,d=Math.hypot(c,h),u=Math.atan2(h,Math.max(Math.abs(c),3))*(c<0?-1:1),g=it(e.throttle,0,1),y=it(e.brake,0,1),m=d;if(this.gear>=1?e.allowReverse&&m<1.5&&y>.4&&g<.05?(this.revHold+=t,this.revHold>.45&&(this.gear=-1,this.revHold=0)):this.revHold=0:this.gear<0&&(c>-1.5&&g>.4&&y<.05?(this.revHold+=t,this.revHold>.2&&(this.gear=1,this.revHold=0)):this.revHold=0),this.gear<0){let N=g;g=y,y=N}this.throttle+=it(g-this.throttle,-t*14,t*9),this.brake+=it(y-this.brake,-t*16,t*10);let p=this.throttle,v=this.brake;if(e.pitLimit>0){let N=m-e.pitLimit;p*=it(1-N*.7,0,1)}this.drsPos+=it((e.drs?1:0)-this.drsPos,-t*5,t*5);let M=this._aero(d,u),b=n,S=Xn,_=b*S*i.weightFront+M.downF,T=b*S*(1-i.weightFront)+M.downR,x=b*this.axF*i.hCg/a;_-=x,T+=x;let w=b*this.ayF*i.hCg*i.rollFrontShare/i.trackF,P=b*this.ayF*i.hCg*(1-i.rollFrontShare)/i.trackR,D=this.fz,C=(N,lt,J)=>{let ot=N/2-lt,ut=N/2+lt;ot<60?(ot=60,ut=Math.max(60,N-60)):ut<60&&(ut=60,ot=Math.max(60,N-60)),D[J]=ot,D[J+1]=ut};C(Math.max(_,200),w,0),C(Math.max(T,200),P,2);let F=i.maxSteer/(1+d/46*(d/46)),A=F;if(this.assist.steer&&!e.aiDriven){let N=0;for(let ot=0;ot<4;ot++)N+=(i.mu0-i.loadSens*(D[ot]-i.fz0))*D[ot];let lt=0;for(let ot=0;ot<4;ot++){let ut=i.compound,st=it(1-.2*((this.temp[ot]-ut.tOpt)/ut.tRange)**2,.7,1.02);lt+=st*(1-.06*this.wear[ot]-.2*Me(.62,1,this.wear[ot]))/4}N=N*i.compound.mu*.97*(.5+.5*lt*Ma(i.compound,this.wetness||0))/b;let J=a*N/Math.max(d*d,1)+i.alphaPeak*.95;A=Math.min(F,J)}let I=it(e.steer,-1,1)*A;if(this.assist.stability&&d>6&&c>0){let N=[0,.7,1.1,1.5][this.assist.stability]??.7;I+=it(u,-.4,.4)*N*Me(8,22,d)}I=it(I,-i.maxSteer,i.maxSteer),this.steer+=it(I-this.steer,-t*2.4,t*2.4);let B=this.steer,O=Math.tan(B),$=Math.atan2(a*O,a-i.trackF/2*O),L=Math.atan2(a*O,a+i.trackF/2*O),z=(this.omega[or]+this.omega[lr])/2,G=0;this.gear>0?G=i.gearRatios[this.gear-1]:this.gear<0&&(G=-8.5);let rt=Math.abs(z)*Math.abs(G)*(30/Math.PI),et=rt;if(this.gear===1&&m<14&&(et=Math.max(et,i.idleRpm+(8200-i.idleRpm)*Math.max(p,.2))),et=Math.max(et,i.idleRpm),this.rpm=qt(this.rpm,et,1-Math.exp(-t*40)),this.sinceShift+=t,this.shiftTimer>0&&(this.shiftTimer-=t),this.gear>=1){let N=!!e.gearUp,lt=!!e.gearDown;if(this.assist.autoGear){N=rt>i.shiftUpRpm&&this.gear<8;let J=rt*(i.gearRatios[Math.min(this.gear,7)]/G);lt=this.gear>1&&rt<i.shiftDownRpm&&(this.gear===1||rt*(i.gearRatios[this.gear-2]/G)<i.maxRpm*.9),p>.92&&this.gear>1&&rt<9800&&this.sinceShift>.6&&(lt=rt*(i.gearRatios[this.gear-2]/G)<13800),N&&J<8500&&(N=!1)}this.sinceShift>.22&&(N&&this.gear<8?(this.gear++,this.shiftTimer=.045,this.sinceShift=0):lt&&this.gear>1&&(this.gear--,this.shiftTimer=.03,this.sinceShift=0))}let vt=[9,.13,.09,.06][this.assist.tc]??9;if(this.assist.tc>0&&p>.02){let N=Math.max(this.kappa[or],this.kappa[lr]);N>vt&&(p*=it(1-(N-vt)*14,.1,1))}let Tt=0,X=this.soc>.01,j=!!e.boost&&X,ct=0;if(X&&p>.5&&this.gear>0&&!e.hold&&(ct=(j?1:Lv[this.ersMode])*i.ersPower),Math.abs(G)>0){let N=fd(this.rpm)*i.powerScale*p*Pv[this.fuelMode],lt=ct*i.powerScale*p/Math.max(this.rpm*Math.PI/30,300),J=(30+.0075*this.rpm)*(1-p);Tt=N+lt-J,this.fuel<=0&&(Tt=Math.min(Tt,0))}let Mt=Tt*G*i.driveEff;e.hold&&(Mt=0),this.shiftTimer>0&&(Mt*=.05);let dt=this.omega[or]-this.omega[lr],St=.5*Math.abs(Mt)*.5+120,Zt=it(dt*55,-St,St),kt=Mt/2-Zt,Xt=Mt/2+Zt,me=Math.cos(this.theta),Qt=Math.sin(this.theta),fe=i.wheelR,ze=i.mu0,Ke=i.pressure||0,we=1-.0045*(Ke+2*(this.wetness||0))**2,Ie=1+.06*Ke,V=1-.05*Ke,ve=i.compound,oe=0,U=0,E=0,W=0,Z=0,Q=this.tyreScale||1;for(let N=0;N<4;N++){let lt=N<2,J=this.wheelPos[N][0],ot=this.wheelPos[N][1],ut=N===md?$:N===gd?L:0,st=Math.cos(ut),Lt=Math.sin(ut),It=this.x+J*me-ot*Qt,ge=this.y+J*Qt+ot*me,ce=this.track.project(It,ge,this.i,zf),Ne=this.track.surface(ce.i,ce.d);this.surf[N]=Ne;let _i=_n[Ne];Ne===zt.KERB?W++:(Ne===zt.GRASS||Ne===zt.GRAVEL)&&Z++;let ln=D[N];Ne===zt.KERB&&(ln*=1+.22*Math.sin(this.kerbPhase*1+N*1.7)*Math.min(1,d/25));let za=c-f*ot,yr=h+f*J,Vi=za*st+yr*Lt,Bc=-za*Lt+yr*st,bi=Math.abs(Vi),wn=(this.omega[N]*fe-Vi)/Math.max(bi,2.2),cn=Math.atan2(Bc,Math.max(bi,1.2)),xr=1-Math.exp(-Math.max(bi,1.2)*t/i.relaxLength);this.alphaLag[N]+=(cn-this.alphaLag[N])*xr;let bs=this.alphaLag[N],Ga=it(1-.2*((this.temp[N]-ve.tOpt)/ve.tRange)**2,.7,1.02),Qn=this.wear[N],Va=1-.06*Qn-.2*Me(.62,1,Qn),hn=Math.max(.7,ze-i.loadSens*(ln-i.fz0))*ve.mu*Ga*Va*_i.grip*(lt?i.frontGrip:i.rearGrip);this.puncture[N]>0&&(hn*=1-.55*this.puncture[N]),hn*=we*(1-.16*this.flat[N])*Ma(ve,this.wetness)*(Ne===zt.KERB?1-.14*this.wetness:1);let vr=wn/i.kappaPeak,_r=Math.tan(bs)/Math.tan(i.alphaPeak),Ms=Math.hypot(vr,_r)+1e-9,Wa=hn*ln*Math.sin(i.pacejkaC*Math.atan(i.pacejkaB*Ms)),br=Wa*vr/Ms,En=br,ts=-Wa*_r/Ms;En-=Math.tanh(Vi*1.5)*_i.rr*ln,(Ne===zt.GRAVEL||Ne===zt.GRASS)&&(En-=Math.tanh(Vi*.6)*.05*ln*Math.min(1,bi/20));let R=lt?i.iFront:i.iRear+.012*G*G*.5,H=N===or?kt:N===lr?Xt:0,K=this.omega[N]*fe-Vi,q=hn*ln*i.pacejkaC*i.pacejkaB/(i.kappaPeak*Math.max(bi,2.2)),Y=Math.abs(K)>1e-4?Math.min(q,Math.abs(br/K)):q,pt=this.omega[N]+t*(H-br*fe)/(R+t*Y*fe*fe),wt=lt?v*i.brakeTorque*i.brakeBias*.5:v*i.brakeTorque*(1-i.brakeBias)*.5;{let he=this.brakeTemp[N];wt*=(.86+.14*Me(120,420,he))*(1-.3*Me(880,1150,he))}if(v>.02&&this.assist.abs?(bi>4&&Math.abs(wn)>i.kappaPeak*1.1&&wn<0?this.absF[N]=Math.max(.1,this.absF[N]-14*t):this.absF[N]=Math.min(1,this.absF[N]+9*t),wt*=this.absF[N]):this.absF[N]=1,this.brakeTemp[N]+=(wt*Math.abs(pt)/Cv-(this.brakeTemp[N]-Hf)*(.011+8e-4*d))*t,wt>0){let he=wt/R*t;Math.abs(pt)<=he?pt=0:pt-=Math.sign(pt)*he}this.omega[N]=pt,this.kappa[N]=wn,this.alpha[N]=bs,this.wheelFx[N]=En,this.wheelFy[N]=ts;let _t=Math.max(0,Ms-1);this.slipVis[N]=d>4?it(_t*.8,0,1.5)*it(bi/15,.3,1):0;let Pt=pt*fe-Vi,Dt=Math.max(bi,2)*Math.tan(Math.abs(bs)),Kt=Math.abs(En*Pt)+Math.abs(ts)*Dt,te=.02*ln*bi;this.temp[N]+=(yd.heat*(ve.wetTyre?.55:1)*Ie*(Kt+te)/Fv-(this.temp[N]-Hf)*(yd.coolBase+yd.coolSpeed*d)*(1+.6*this.wetness))*t;let Ct=bi>6&&wn<-.6;Ct&&(this.temp[N]+=55*t*it(1-(this.temp[N]-ve.tOpt)/75,0,1),this.flat[N]=Math.min(1,this.flat[N]+t*.5));let ue=Math.max(0,this.temp[N]-ve.tOpt-ve.tRange*.9)/30;this.wear[N]=Math.min(1.2,this.wear[N]+Kt*t/(ve.wearLaps*Nv)*(this.wearMult??1)*V*(1+3*ue+(Ct?5:0)+(ve.wetTyre?2.5*(1-Me(.05,.4,this.wetness)):0))*Q);let Pe=En*st-ts*Lt,ye=En*Lt+ts*st;oe+=Pe,U+=ye,E+=J*ye-ot*Pe}let ht=Math.max(d,.001),mt=M.drag/ht;oe-=mt*c,U-=.5*ic*i.cdSide*d*h;let tt=this.trackSlope*Math.cos(vn(this.theta-this.trackHeading));oe-=b*S*tt*.8,this.kerbPhase+=t*(40+d*.9),this.kerbShake=W?Math.min(1,d/40):0,Z&&(E-=f*400*Z);let nt=oe/b,ft=U/b;this.axBody=nt,this.ayBody=ft;let Ft=1-Math.exp(-t/.05);if(this.axF+=(nt-this.axF)*Ft,this.ayF+=(ft-this.ayF)*Ft,this.u+=(nt+h*f)*t,this.v+=(ft-c*f)*t,this.r+=E/r*t,Math.abs(this.u)<.35&&Math.abs(this.v)<.35&&p<.05&&(v>.05||Math.abs(this.r)<.05)){if(this.stopTimer+=t,this.stopTimer>.1){this.u*=.9,this.v*=.9,this.r*=.85,Math.abs(this.u)<.04&&(this.u=0),Math.abs(this.v)<.04&&(this.v=0),Math.abs(this.r)<.01&&(this.r=0);for(let N=0;N<4;N++)v>.05&&(this.omega[N]*=.8)}}else this.stopTimer=0;let xt=Math.cos(this.theta),gt=Math.sin(this.theta);this.x+=(this.u*xt-this.v*gt)*t,this.y+=(this.u*gt+this.v*xt)*t,this.theta+=this.r*t,this.theta>Math.PI?this.theta-=2*Math.PI:this.theta<-Math.PI&&(this.theta+=2*Math.PI);let Nt=(.0015+2e-4*Math.abs(this.u)*(.5+.75*p))*(this.fuelRate??1)*Iv[this.fuelMode];this.fuel=Math.max(0,this.fuel-Nt*t);let Bt=0,Wt=Dv[this.ersMode];v>.05&&this.gear>0?Bt=i.ersPower*Math.min(1,v*1.2)*Wt*it(m/20,0,1):p<.05&&m>10&&(Bt=i.ersPower*.25*Wt),this.soc=it(this.soc+(Bt-ct)*t/i.ersCapacity,0,1),this.harvesting=Bt>.2*i.ersPower&&this.soc<.999,this.locate(),this.pitch=qt(this.pitch,it(-this.axF*6e-4,-.025,.025),1-Math.exp(-t*5)),this.roll=qt(this.roll,it(-this.ayF*5e-4,-.025,.025),1-Math.exp(-t*5)),this.onGrass=Z>=3,this.aeroDown=M.downF+M.downR,this.aeroDrag=M.drag,this.latG=this.ayF/Xn,this.longG=this.axF/Xn}tyreSummary(){let t=0,e=0;for(let i=0;i<4;i++)t+=this.wear[i]/4,e=Math.max(e,this.temp[i]);return{wear:t,temp:e}}fitTyres(t){this.compound=t,this.spec={...this.spec,compound:t},this.wear.fill(0),this.temp.fill(72),this.puncture.fill(0),this.flat.fill(0)}applyDamage(t,e,i){let n=t/55e3;if(e>1.5?this.damageFront=Math.min(1,(this.damageFront||0)+n*(.8+Math.abs(i)*.2)):e<-1.2?this.damageRear=Math.min(1,(this.damageRear||0)+n):Math.abs(i)>.55?(i>0?this.damageSideL=Math.min(1,(this.damageSideL||0)+n*.9):this.damageSideR=Math.min(1,(this.damageSideR||0)+n*.9),this.damageFloor=Math.min(1,(this.damageFloor||0)+n*.25)):this.damageFloor=Math.min(1,(this.damageFloor||0)+n*.5),n>.5){let r=e>0?i>0?md:gd:i>0?or:lr;Math.random()<Math.min(.5,n*.4)&&(this.puncture[r]=1)}}damageSummary(){let t=this.spec,e=this.damageFront||0,i=this.damageRear||0,n=this.damageFloor||0,r=this.damageSideL||0,a=this.damageSideR||0,o=(r+a)/2,l=1-.3*n-.2*o,c=t.clAf+t.clAr,h=t.clAf*(1-.55*e)*l+t.clAr*(1-.55*i)*l,f=Math.max(e,i,n,r,a);return{fw:e,rw:i,floor:n,sideL:r,sideR:a,aeroLoss:1-h/c,worst:f,severity:Math.max(e*.9,r*.7,a*.7,i*.6,n*.7)}}repair(){this.damageFront=this.damageRear=this.damageFloor=this.damageSideL=this.damageSideR=0}};function xd(s){let t=s.N,e=s.ds,i=new Float64Array(t),n=new Float64Array(t);for(let l=0;l<t;l++)i[l]=s.x[l]+s.nx[l]*s.lineD[l],n[l]=s.y[l]+s.ny[l]*s.lineD[l];let r=new Float64Array(t),a=2;for(let l=0;l<t;l++){let c=(l-a+t)%t,h=(l+a)%t,f=i[l]-i[c],d=n[l]-n[c],u=i[h]-i[l],g=n[h]-n[l],y=f*g-d*u,m=Math.hypot(f,d),p=Math.hypot(u,g),v=Math.hypot(i[h]-i[c],n[h]-n[c]);r[l]=2*y/(m*p*v+1e-9)}let o=new Float64Array(t);for(let l=0;l<t;l++)o[l]=(r[(l-1+t)%t]+2*r[l]+r[(l+1)%t])/4;return{px:i,py:n,kappa:o,ds:e}}function Gf(s,t,e={}){let i=e.latUse??.9,n=e.brakeUse??.95,r=e.accelUse??1,a=t.dryMass+(e.fuel??30),o=Of(t,a),{kappa:l,ds:c}=e.geometry||xd(s),h=s.N,f=110,d=e.highSpeedDerate??.2,u=M=>o.latAccel(M,i*(1-d*Math.min(1,Math.max(0,(M-60)/40)))),g=new Float64Array(h);for(let M=0;M<h;M++){let b=Math.abs(l[M]);if(b<1e-5){g[M]=f;continue}let S=4,_=f;for(let T=0;T<28;T++){let x=(S+_)/2;x*x*b>u(x)?_=x:S=x}g[M]=S}let y=(M,b)=>{let S=M*M*Math.abs(b),_=u(M),T=Math.min(1,S/_);return Math.sqrt(Math.max(.02,1-T*T))},m=Float64Array.from(g);for(let M=2*h;M>0;M--){let b=M%h,S=(M-1+h)%h,_=o.brakeDecel(m[b],n)*y(m[b],l[b]),T=Math.sqrt(m[b]*m[b]+2*_*c);T<m[S]&&(m[S]=T)}let p=Float64Array.from(g),v=2*h;for(let M=0;M<v;M++){let b=M%h,S=(M+1)%h,_=o.accel(p[b],r)*y(p[b],l[b]),T=Math.sqrt(Math.max(0,p[b]*p[b]+2*Math.max(_,0)*c));T<p[S]&&(p[S]=T)}for(let M=v;M>0;M--){let b=M%h,S=(M-1+h)%h,_=o.brakeDecel(p[b],n)*y(p[b],l[b]),T=Math.sqrt(p[b]*p[b]+2*_*c);T<p[S]&&(p[S]=T)}return{v:p,vBrake:m,kappa:l,ds:c,env:o,mass:a}}var Gi={front:3,rear:-2.45,half:.98},VM=(Gi.front+Gi.rear)/2,WM=(Gi.front-Gi.rear)/2,wa=Gi.half,Uv=[[Gi.front,wa],[Gi.front,-wa],[Gi.rear,-wa],[Gi.rear,wa]];function vd(s,t){let e=Math.cos(s.theta),i=Math.sin(s.theta);for(let n=0;n<4;n++){let[r,a]=Uv[n];t[n*2]=s.x+r*e-a*i,t[n*2+1]=s.y+r*i+a*e}}var an=new Float64Array(8),gs=new Float64Array(8);function cr(s,t,e,i,n){let r=s.mass,a=s.spec.izDry+s.fuel*.45,o=Math.cos(s.theta),l=Math.sin(s.theta),c=s.u*o-s.v*l+t/r,h=s.u*l+s.v*o+e/r;s.u=c*o+h*l,s.v=-c*l+h*o,s.r+=(i*e-n*t)/a}function _d(s,t,e){let i=Math.cos(s.theta),n=Math.sin(s.theta),r=s.u*i-s.v*n,a=s.u*n+s.v*i;return[r-s.r*e,a+s.r*t]}function Vf(s,t,e=.12){let i=t.x-s.x,n=t.y-s.y;if(i*i+n*n>49)return 0;vd(s,an),vd(t,gs);let r=[[Math.cos(s.theta),Math.sin(s.theta)],[-Math.sin(s.theta),Math.cos(s.theta)],[Math.cos(t.theta),Math.sin(t.theta)],[-Math.sin(t.theta),Math.cos(t.theta)]],a=1/0,o=0,l=0;for(let[et,Et]of r){let vt=1/0,Tt=-1/0,X=1/0,j=-1/0;for(let Mt=0;Mt<4;Mt++){let dt=an[Mt*2]*et+an[Mt*2+1]*Et,St=gs[Mt*2]*et+gs[Mt*2+1]*Et;dt<vt&&(vt=dt),dt>Tt&&(Tt=dt),St<X&&(X=St),St>j&&(j=St)}let ct=Math.min(Tt,j)-Math.max(vt,X);if(ct<=0)return 0;if(ct<a){a=ct;let Mt=(X+j)/2>(vt+Tt)/2?1:-1;o=et*Mt,l=Et*Mt}}let c=0,h=0,f=0,d=(et,Et,vt)=>{let Tt=Math.cos(vt.theta),X=Math.sin(vt.theta),j=et-vt.x,ct=Et-vt.y,Mt=j*Tt+ct*X,dt=-j*X+ct*Tt;return Mt>Gi.rear&&Mt<Gi.front&&Math.abs(dt)<wa};for(let et=0;et<4;et++)d(an[et*2],an[et*2+1],t)&&(c+=an[et*2],h+=an[et*2+1],f++),d(gs[et*2],gs[et*2+1],s)&&(c+=gs[et*2],h+=gs[et*2+1],f++);f?(c/=f,h/=f):(c=(s.x+t.x)/2,h=(s.y+t.y)/2);let u=s.mass,g=t.mass,y=a+.01;s.x-=o*y*(g/(u+g)),s.y-=l*y*(g/(u+g)),t.x+=o*y*(u/(u+g)),t.y+=l*y*(u/(u+g));let m=c-s.x,p=h-s.y,v=c-t.x,M=h-t.y,b=_d(s,m,p),S=_d(t,v,M),_=S[0]-b[0],T=S[1]-b[1],x=_*o+T*l;if(x>=0)return 0;let w=s.spec.izDry+s.fuel*.45,P=t.spec.izDry+t.fuel*.45,D=m*l-p*o,C=v*l-M*o,F=1/u+1/g+D*D/w+C*C/P,A=-(1+e)*x/F;cr(s,-A*o,-A*l,m,p),cr(t,A*o,A*l,v,M);let I=-l,B=o,O=_*I+T*B,$=it(-O/F,-.25*A,.25*A);cr(s,-$*I,-$*B,m,p),cr(t,$*I,$*B,v,M);let L=.5*(1/(1/u+1/g))*x*x,z=et=>{let Et=Math.cos(et.theta),vt=Math.sin(et.theta),Tt=c-et.x,X=h-et.y;return[Tt*Et+X*vt,-Tt*vt+X*Et]},G=z(s),rt=z(t);return{energy:L,la:G,lb:rt,speed:-x}}var kv={i:0,t:0,s:0,d:0,dist:0};function Wf(s,t,e=.2,i=.35){vd(s,an);let n=null,r=Math.cos(s.theta),a=Math.sin(s.theta),o=(h,f,d,u,g)=>{s.x+=f*(h+.01),s.y+=d*(h+.01);let y=u-s.x,m=g-s.y,p=_d(s,y,m),v=p[0]*f+p[1]*d;if(v>=0)return;let M=s.mass,b=s.spec.izDry+s.fuel*.45,S=y*d-m*f,_=1/M+S*S/b,T=-(1+e)*v/_;cr(s,T*f,T*d,y,m);let x=-d,w=f,P=p[0]*x+p[1]*w,D=it(-P/_,-i*T,i*T);cr(s,D*x,D*w,y,m);let C=.5*M*v*v;if(!n||C>n.energy){let F=y*r+m*a,A=-y*a+m*r;n={energy:C,lx:F,ly:A,speed:-v,wx:u,wy:g}}},l=0,c=0;t.pit&&t.pitWallRange(s.s)&&(c=t.pitWallLat(s.s),l=s.d>c?1:-1);for(let h=0;h<4;h++){let f=an[h*2],d=an[h*2+1],u=t.project(f,d,s.i,kv),g=u.d>=0?1:-1,y=t.wallDist(u.i,g),m=Math.abs(u.d)-y;if(m>0&&o(m,-g*t.nx[u.i],-g*t.ny[u.i],f,d),l&&t.pitWallRange(u.s)){let p=t.pitWallLat(u.s),v=l>0?p+.2-u.d:u.d-(p-.2);v>0&&o(v,l*t.nx[u.i],l*t.ny[u.i],f,d)}}return n}var le=[{id:"valdori",name:"Scuderia Valdori",short:"Valdori",color:"#d8102b",accent:"#ffffff",livery:"stripe",rating:.92},{id:"aurelian",name:"Aurelian Silver Arrows",short:"Aurelian",color:"#b8c2cc",accent:"#00c7b0",livery:"split",rating:1},{id:"northstar",name:"Northstar Motorsport",short:"Northstar",color:"#18286b",accent:"#e6232f",livery:"chevron",rating:.97},{id:"helix",name:"Helix Dynamics",short:"Helix",color:"#ff7a14",accent:"#101820",livery:"stripe",rating:.84},{id:"kestrel",name:"Kestrel GP",short:"Kestrel",color:"#0b6e4f",accent:"#d6f23c",livery:"chevron",rating:.7},{id:"vortex",name:"Vortex Sport",short:"Vortex",color:"#6a2fb5",accent:"#ff4fd8",livery:"split",rating:.62},{id:"ironside",name:"Ironside Racing",short:"Ironside",color:"#23272e",accent:"#f2b705",livery:"stripe",rating:.5},{id:"solace",name:"Solace Racing",short:"Solace",color:"#f6f6f2",accent:"#ff5c8a",livery:"chevron",rating:.4},{id:"marlin",name:"Marlin Performance",short:"Marlin",color:"#12a3c4",accent:"#0a2540",livery:"split",rating:.3},{id:"tempest",name:"Tempest Auto",short:"Tempest",color:"#f2d400",accent:"#111111",livery:"stripe",rating:.15}],$f=[["Luca Ferraro","FER",16,.95],["Matteo Bellini","BEL",55,.5],["Oliver Hartwell","HAR",44,1],["Jonas Eklund","EKL",63,.75],["Callum Reid","REI",1,.98],["Sven Aaltonen","AAL",11,.7],["Diego Marquez","MAR",14,.85],["Kenji Arakawa","ARA",22,.8],["Tom\xE1s Vidal","VID",23,.6],["\xC9tienne Lacroix","LAC",10,.65],["Anders Nyberg","NYB",27,.55],["Rafael Duarte","DUA",77,.7],["Idris Okafor","OKA",3,.5],["Hana Weiss","WEI",18,.45],["Pavel Novak","NOV",31,.55],["Mateo Rossi","ROS",9,.4],["Yuto Mori","MOR",24,.5],["Ben Carroway","CAR",81,.35],["Santiago Ibarra","IBA",6,.35],["Finn Lindqvist","LIN",99,.3]].map(([s,t,e,i])=>({name:s,code:t,number:e,talent:i}));var bd=["power","aero","grip"],Mn=6,hr={power:{name:"Power unit",blurb:"+1.2 % engine output per level",per:.012},aero:{name:"Aerodynamics",blurb:"+1.4 % downforce per level",per:.014},grip:{name:"Chassis & tyres",blurb:"+0.6 % mechanical grip per level",per:.006}},Ea=[{id:"sprint",name:"Sprint",km:14},{id:"standard",name:"Standard",km:28},{id:"grandprix",name:"Grand Prix",km:50}];function qf(s=4){let t=Be.map(e=>e.id);return s>=8?t.slice():t.slice(0,4)}var rc=qf(4);function ac(s,t="standard"){let e=Ea.find(i=>i.id===t)||Ea[1];return Math.max(2,Math.min(30,Math.round(e.km*1e3/s)))}var oc=["dry","light","heavy","changing"],Xf={dry:"Dry",light:"Light rain",heavy:"Heavy rain",changing:"Showers possible"};function Yf(s,t=Math.random){let e=["dry","dry","dry","dry","dry","changing","changing","light","heavy"];return Array.from({length:s},(i,n)=>n===0?"dry":e[Math.floor(t()*e.length)])}function dr(s=4){let t=qf(s);return{calendar:t,round:0,points:{},teamPoints:{},teamOf:{},results:[],weather:Yf(t.length)}}var ys=(s,t=s.round)=>s.weather&&oc.includes(s.weather[t])?s.weather[t]:"dry",lc=s=>s.round>=s.calendar.length;function Md(s,t){let e={round:s.round,trackId:s.calendar[s.round],order:[]};for(let i of t){let n=i.info.name,r=i.info.team.short;s.points[n]=(s.points[n]||0)+i.points,s.teamPoints[r]=(s.teamPoints[r]||0)+i.points,s.teamOf[n]=r,e.order.push({name:n,team:r,pos:i.pos,pts:i.points,grid:i.gridPos})}return s.results.push(e),s.round++,e}function xs(s){return[...new Set([...Object.keys(s.points),...Object.keys(s.teamOf)])].map(e=>({name:e,team:s.teamOf[e]||"",pts:s.points[e]||0})).sort((e,i)=>i.pts-e.pts||(e.name==="You"?-1:0)-(i.name==="You"?-1:0))}function vs(s){return Object.entries(s.teamPoints).map(([t,e])=>({team:t,pts:e})).sort((t,e)=>e.pts-t.pts)}var Ta=s=>[...le].sort((t,e)=>e.rating-t.rating).findIndex(t=>t===le[s]);function Ca(s){let t=Ta(s);return{finish:Math.min(16,t===0?2:2*t+2),constructor:Math.min(10,t+1)}}function Bv(s,t,e=!1){return([20,15,12,10,8,7,6,5,4,3][s-1]??2)+(t?8:0)+(e?3:0)}var Sd=s=>12+10*s;function Zf(s={}){let t=e=>Math.max(0,Math.min(Mn,Math.round(s[e]||0)));return{power:1+hr.power.per*t("power"),aero:1+hr.aero.per*t("aero"),grip:1+hr.grip.per*t("grip")}}function Kf({team:s=6,level:t=.55,rounds:e=4,distance:i="standard"}={}){return{v:1,team:Math.max(0,Math.min(le.length-1,Math.round(s))),level:t,rounds:e,distance:i,seasonNo:1,budget:20,upgrades:{power:0,aero:0,grip:0},season:dr(e),history:[],seasonRecap:null}}function Jf(s,t){if(!bd.includes(t))return{ok:!1,reason:"unknown"};let e=s.upgrades[t]||0;if(e>=Mn)return{ok:!1,reason:"maxed"};let i=Sd(e);return s.budget<i?{ok:!1,reason:"budget",cost:i}:(s.budget-=i,s.upgrades[t]=e+1,{ok:!0,cost:i})}function jf(s,t,e){let i=t.order.find(l=>l.name==="You"),n=Ca(s.team),r=!!i&&i.pos<=n.finish,a=e.find(l=>l.info.isPlayer&&Number.isFinite(l.best)&&l.best===Math.min(...e.map(c=>c.best))),o=Bv(i?i.pos:20,r,!!a);return s.budget+=o,{pos:i?i.pos:null,met:r,prize:o,objective:n.finish,fastest:!!a}}function wd(s){let t=s.season,e=xs(t),i=vs(t),n=e.findIndex(h=>h.name==="You")+1,r=i.findIndex(h=>h.team===le[s.team].short)+1,a=Ca(s.team),o={seasonNo:s.seasonNo,team:s.team,driverPos:n,teamPos:r,points:t.points.You||0,champion:n===1,constructorObjective:a.constructor,metConstructor:r>0&&r<=a.constructor,wins:t.results.filter(h=>h.order.some(f=>f.name==="You"&&f.pos===1)).length,podiums:t.results.filter(h=>h.order.some(f=>f.name==="You"&&f.pos<=3)).length,offers:[]},l=Ta(s.team),c=le.map((h,f)=>({i:f,r:Ta(f)})).sort((h,f)=>h.r-f.r);for(let{i:h,r:f}of c)h!==s.team&&f<l&&n<=2*f+3&&o.offers.push(h);return o.offers=o.offers.slice(0,3),s.history.push({...o,offers:void 0}),s.seasonRecap=o,Ov(s,o),o}function Ov(s,t){s.budget+=(t.champion?40:t.driverPos<=3?20:8)+(t.metConstructor?15:0)}function Qf(s,t=s.team){return t!==s.team&&(s.team=t,s.upgrades={power:0,aero:0,grip:0}),s.seasonNo++,s.level=Math.min(1,s.level+.04),s.season=dr(s.rounds),s.seasonRecap=null,s}var xi=(s,t=0,e=9999)=>Math.max(t,Math.min(e,Math.round(Number.isFinite(+s)?+s:0))),Aa=(s,t=40)=>String(s??"").replace(/[<>&"'`]/g,"").slice(0,t);function Ra(s){let t={};if(s&&typeof s=="object"&&!Array.isArray(s))for(let[e,i]of Object.entries(s).slice(0,80))Number.isFinite(+i)&&(t[Aa(e,40)]=xi(i,0,9999));return t}function Ed(s){let t={};if(s&&typeof s=="object"&&!Array.isArray(s))for(let[e,i]of Object.entries(s).slice(0,80))t[Aa(e,40)]=Aa(i,40);return t}function Td(s){if(!Array.isArray(s))return[];let t=Be.map(e=>e.id);return s.slice(0,40).filter(e=>e&&typeof e=="object").map(e=>({round:xi(e.round,0,99),trackId:t.includes(e.trackId)?e.trackId:t[0],order:(Array.isArray(e.order)?e.order:[]).slice(0,24).filter(i=>i&&typeof i=="object").map(i=>({name:Aa(i.name,28),team:Aa(i.team,12),pos:xi(i.pos,1,99),pts:xi(i.pts,0,99),grid:xi(i.grid,0,99)}))}))}function tp(s){return!s||typeof s!="object"?null:{seasonNo:xi(s.seasonNo,1,99),team:xi(s.team,0,le.length-1),driverPos:xi(s.driverPos,0,99),teamPos:xi(s.teamPos,0,99),points:xi(s.points,0,9999),champion:!!s.champion,constructorObjective:xi(s.constructorObjective,0,99),metConstructor:!!s.metConstructor,wins:xi(s.wins,0,99),podiums:xi(s.podiums,0,99)}}function Hv(s){let t=tp(s);return t?{...t,offers:(Array.isArray(s.offers)?s.offers:[]).map(e=>xi(e,0,le.length-1)).slice(0,3)}:null}function ep(s){try{if(!s||typeof s!="object"||s.v!==1)return null;let t=(a,o,l,c)=>Number.isFinite(+a)?Math.max(o,Math.min(l,+a)):c,e=s.rounds>=8?8:4,i=s.season&&Array.isArray(s.season.calendar)?s.season:dr(e),n=Be.map(a=>a.id);if(i.calendar=i.calendar.filter(a=>n.includes(a)),!i.calendar.length)return null;i.round=Math.round(t(i.round,0,i.calendar.length,0)),i.points=Ra(i.points),i.teamPoints=Ra(i.teamPoints),i.teamOf=Ed(i.teamOf),i.results=Td(i.results),(!Array.isArray(i.weather)||i.weather.length<i.calendar.length)&&(i.weather=Yf(i.calendar.length)),i.weather=i.weather.map(a=>oc.includes(a)?a:"dry");let r=s.upgrades||{};return{v:1,team:Math.round(t(s.team,0,le.length-1,6)),level:t(s.level,0,1,.55),rounds:e,distance:Ea.some(a=>a.id===s.distance)?s.distance:"standard",seasonNo:Math.round(t(s.seasonNo,1,99,1)),budget:Math.round(t(s.budget,0,9999,0)),upgrades:{power:Math.round(t(r.power,0,Mn,0)),aero:Math.round(t(r.aero,0,Mn,0)),grip:Math.round(t(r.grip,0,Mn,0))},season:i,history:(Array.isArray(s.history)?s.history.slice(-40):[]).map(tp).filter(Boolean),seasonRecap:Hv(s.seasonRecap)}}catch{return null}}var Sn={start:.15,spacing:.5,win:.45,sweet:.72,perfect:.07,good:.17,base:2.5,goodCost:.12,missCost:.9};function ip(){return{w:[0,1,2,3].map(()=>({res:null,p:-1})),done:!1,dur:1/0,perfects:0,goods:0,misses:0}}var Gv=s=>s.w.findIndex(t=>!t.res);function np(s,t,e){let i=[];if(s.done)return i;for(let n=0;n<4;n++){let r=s.w[n];r.res||(r.p=(t-(Sn.start+n*Sn.spacing))/Sn.win,r.p>=1&&(r.res="miss",r.late=!0,s.misses++,i.push({k:n,res:"miss"})))}if(e){let n=Gv(s);if(n>=0){let r=s.w[n];if(r.p>-.25){let a=Math.abs(Math.max(0,r.p)-Sn.sweet);r.res=r.p<0?"miss":a<=Sn.perfect?"perfect":a<=Sn.good?"good":"miss",r.res==="perfect"?s.perfects++:r.res==="good"?s.goods++:s.misses++,i.push({k:n,res:r.res})}}}return s.w.every(n=>n.res)&&(s.done=!0,s.dur=Math.max(Sn.base+s.goods*Sn.goodCost+s.misses*Sn.missCost,t+.2)),i}var di=1/240,hc=[{id:"rookie",name:"Rookie",level:.08,blurb:"Relaxed pace, frequent mistakes"},{id:"amateur",name:"Amateur",level:.3,blurb:"Learn the circuit without pressure"},{id:"pro",name:"Pro",level:.55,blurb:"Fair fight, occasional errors"},{id:"elite",name:"Elite",level:.8,blurb:"Fast, aggressive, rarely wrong"},{id:"legend",name:"Legend",level:1,blurb:"Every car at the limit"}],Ad={mode:"race",qualiTime:180,weather:"dry",safetyCar:!0,equalCars:!0,upgrades:null,qualiTimes:null,laps:5,level:.55,adaptive:!1,fieldSize:20,playerTeam:1,playerGrid:12,collisions:!0,damage:!0,tyreWear:3,mandatoryStop:!1,pitCalls:"radio",compound:"medium",setup:{frontWing:null,rearWing:null,brakeBias:.58,pressure:0},assists:{abs:!0,tc:2,steer:1,stability:1,autoGear:!0,pitAuto:!0,pitGame:!0},seed:1},Vv=.2;function Wv(s){return ei(s*104729+7)}var cc=class{constructor(t,e={}){this.track=t,this.opt={...Ad,...e,assists:{...Ad.assists,...e.assists||{}},setup:{...Ad.setup,...e.setup||{}}};let i=this.opt;this.rng=Wv(i.seed),this.time=0,this.t0=null,this.phase="grid",this.lights=0,this.lightsOutAt=null,this.isQuali=i.mode==="qualifying",this.isQuali&&(i.collisions=!1),this.totalLaps=i.mode==="timetrial"?9999:this.isQuali?999:i.laps,this.events=[],this.cars=[],this.sorted=[],this.chequered=!1,this.chequeredAt=null,this.stepCount=0,this.ghostStart=0,this.profileCache=new Map,this.pairContact=new Map,this.fastest={time:1/0,car:null,lap:0},this.bestSectors=[1/0,1/0,1/0],this.ghostRec=[],this.ghostBest=null,this.sc={state:"none",s:0,v:0,t:0,clearT:0,count:0,pseudo:{s:0,d:0,speed:0,axF:0,info:{},rs:{}},ahead:null},this.yellow=!1,this.rain=0,this.wet=0,this.setupWeather(),this.setupField()}get playerCar(){return this.player}teamSetup(t){return t.setup||{front:5,rear:5}}getProfile(t,e){let i=this.profileCache.get(e);return i||(i=Gf(this.track,t,{fuel:25,geometry:this.geometry||(this.geometry=xd(this.track))}),this.profileCache.set(e,i)),i}makeCarSpec(t,e,i){let n=this.opt,r=this.track.def.setup||{front:5,rear:5},a=this.isQuali?14:this.opt.mode==="timetrial"?18:it(Math.min(this.totalLaps,60)*(this.track.length/1e3)*Vv*1.1+2,6,105),o=n.equalCars?1:t.rating,l=.985+.015*o,c=i?{frontWing:n.setup.frontWing??r.front,rearWing:n.setup.rearWing??r.rear,brakeBias:n.setup.brakeBias,pressure:n.setup.pressure}:{frontWing:r.front,rearWing:r.rear},h=Bf({...c,compound:e,performance:.972+.028*o,fuel:a});if(h.frontGrip*=l,h.rearGrip*=l,i&&n.upgrades){let f=Zf(n.upgrades);h.powerScale*=f.power,h.clAf*=f.aero,h.clAr*=f.aero,h.frontGrip*=f.grip,h.rearGrip*=f.grip}return h}setupField(){let t=this.opt,e=this.track,i=this.rng,n=t.mode==="timetrial",r=[];le.forEach((u,g)=>{for(let y=0;y<2;y++)r.push({team:u,ti:g,driver:$f[g*2+y],seat:g*2+y})});let a=it(t.playerTeam,0,le.length-1),o=r.findIndex(u=>u.ti===a),l=r.findIndex((u,g)=>u.ti===a&&g!==o),c=r.filter((u,g)=>g!==o);if(n)c=[];else{let u=it(t.fieldSize,2,20)-1;for(;c.length>u;){let g=Math.floor(i()*c.length);r[l]!==c[g]&&c.splice(g,1)}}c.forEach(u=>u.q=u.team.rating*.55+u.driver.talent*.45+(i()-.5)*.16),c.sort((u,g)=>g.q-u.q);let h=c.map(u=>({seat:u,player:!1})),f=it(Math.round(t.playerGrid)-1,0,h.length);if(h.splice(n?0:f,0,{seat:r[o],player:!0}),t.qualiTimes&&!this.isQuali&&!n){let u=t.qualiTimes,g=y=>u[y.player?"YOU":y.seat.driver.code]??1/0;h=h.map((y,m)=>({g:y,i:m})).sort((y,m)=>g(y.g)-g(m.g)||y.i-m.i).map(y=>y.g)}let d=["soft","medium","hard"];h.forEach((u,g)=>{let{seat:y,player:m}=u,p=y.team,v=Math.max(1.5,this.totalLaps*.5)*1.15,M=d.filter(P=>this.tyreLife(P)>=v),b=i(),S=m?t.compound:M.length?M[b<.5?0:b<.85?Math.min(1,M.length-1):M.length-1]:"hard";!m&&this.wet>.4&&(S="wet");let _=this.makeCarSpec(p,S,m),T=new sc(_,e);n&&(T.fuelRate=0),T.wearMult=t.tyreWear;let x=e.gridSlot(g),w=e.pointAt(x.s,x.d);if(T.reset(w.x,w.y,w.heading,0),T.info={name:m?"You":y.driver.name,code:m?"YOU":y.driver.code,number:m?7:y.driver.number,team:p,teamIdx:y.ti,isPlayer:m,gridPos:g+1,talent:y.driver.talent},T.assist=m?{abs:t.assists.abs,tc:t.assists.tc,steer:t.assists.steer?1:0,stability:t.assists.stability,autoGear:t.assists.autoGear}:{abs:!0,tc:2,steer:0,autoGear:!0,stability:1},T.rs=this.makeRaceState(T,x),T.rs.compounds=[S],T.drsAllowed=!1,T.gapAhead=99,!m&&!n){let P=this.getProfile(_,`${p.id}:${S}`),D=new bn({car:T,track:e,profile:P,level:t.level,seed:t.seed*31+g,teamIdx:y.ti,skill:.982+.018*y.driver.talent,boxS:e.pit?e.pitBox(y.ti).s:null,boxD:e.pit?e.pitBox(y.ti).d:null});T.driver=D,this.isQuali&&(D.releaseDelay=g*2.4,D.ignoreTraffic=!0);let C=Math.round(this.totalLaps*(.35+.35*i()));T.rs.plannedStop=!this.isQuali&&this.totalLaps>=4&&(t.mandatoryStop||t.tyreWear>=2.5||i()<.3)?Math.max(1,C):null}m&&(this.player=T,T.rs.pilot=null),this.cars.push(T)});for(let u of this.cars)u.wetness=this.wet;this.sorted=[...this.cars],this.updateRank()}makeRaceState(t,e){let i=this.track.length,n=-ae(this.track.length-e.s,i),r=this.track.cpCount;return{lastS:t.s,dist:n,maxDist:n,laps:0,lapStart:0,lapTimes:[],tele:[],stopLaps:[],last:null,best:1/0,sectorIdx:2,sectorStart:0,sectors:[null,null,null],bestSectors:[1/0,1/0,1/0],cpTimes:new Float64Array(Math.min(this.totalLaps+3,400)*r+16).fill(NaN),cpIdx:Math.floor(n/this.track.cpSpacing),finished:!1,finishTime:null,dnf:!1,penalty:0,penaltyLog:[],warnings:0,limitTimer:0,offTimer:0,stops:0,service:null,pitRequested:!1,nextCompound:null,drsEligible:[],drsLatch:!1,inPitLane:!1,pitSpeedT:0,pitPenalised:!1,resets:0,falseStart:!1,moved:!1,pos:0,mistakeFlash:0,lastImpact:-9,stopped:0,cpGap:0}}start(){if(this.phase!=="grid")return;this.phase="countdown",this.cdStart=this.time;let t=this.opt.mode==="timetrial"||this.isQuali;this.lightsSeq=t?[.6,1.2,1.8]:[1.2,2.2,3.2,4.2,5.2],this.holdTime=t?.5:.7+this.rng()*2.2,this.lightsOutAt=this.cdStart+this.lightsSeq[this.lightsSeq.length-1]+this.holdTime}lapsLeft(t){return this.totalLaps-t.rs.laps}pushEvent(t){t.t=this.time,this.events.push(t),this.events.length>400&&this.events.splice(0,100)}step(t,e){if(this.time+=t,this.stepCount++,this.phase==="countdown"){let n=this.time-this.cdStart,r=this.lightsSeq.filter(a=>n>=a).length;if(r!==this.lights&&(this.lights=r,this.pushEvent({type:"light",n:r})),this.time>=this.lightsOutAt){this.phase="racing",this.t0=this.time,this.lights=0,this.pushEvent({type:"lightsOut"});for(let a of this.cars)a.rs.lapStart=this.t0,a.rs.sectorStart=this.t0}}this.isQuali&&this.phase==="racing"&&!this.chequered&&this.time-this.t0>=this.opt.qualiTime&&(this.chequered=!0,this.chequeredAt=this.time,this.pushEvent({type:"chequered",car:null}));let i=this.phase==="racing"||this.phase==="finished";for(let n of this.cars){let r=this.inputFor(n,t,e);n.step(t,r)}if(i||this.phase==="countdown"){this.opt.collisions&&this.cars.length>1&&this.collisions();for(let n of this.cars){let r=Wf(n,this.track);r&&r.speed>.8?(n.locate(),this.opt.damage&&n.applyDamage(r.energy*.8,r.lx,r.ly),r.speed>3&&this.pushEvent({type:"impact",car:n,energy:r.energy,speed:r.speed,wall:!0,x:r.wx,y:r.wy}),n.rs.lastImpact=this.time):r&&n.locate()}}for(let n of this.cars)this.updateTiming(n,t);if(this.stepCount%4===0){this.updateRank(),this.updateAeroInteractions();for(let n of this.cars)this.updateDrs(n),this.updatePit(n,t*4),this.updateRules(n,t*4);this.updateWeather(t*4),this.updateSafetyCar(t*4),this.updateFinish(),this.adaptPace(),this.recoverStuck(t*4)}this.opt.mode==="timetrial"&&this.recordGhost()}inputFor(t,e,i){let n=t.rs,r=this.phase==="racing"||this.phase==="finished",a;if(t===this.player){a=this._pin||(this._pin={throttle:0,brake:0,steer:0,drs:!1,boost:!1,gearUp:!1,gearDown:!1,pitLimit:0,allowReverse:!0});let l=i||{};if(a.throttle=l.throttle||0,a.brake=l.brake||0,a.steer=l.steer||0,a.boost=!!l.boost,a.gearUp=!!l.gearUp,a.gearDown=!!l.gearDown,a.pitLimit=0,l.drsPress&&n.service&&n.service.pg&&(n.pitAct=!0),a.aiDriven=!!l.aiDriven,a.allowReverse=this.phase==="racing"&&!this.opt.noReverse,n.pilot&&n.pilot.pitState!=="none"){let c=n.pilot.update(e,this);a.throttle=c.throttle,a.brake=c.brake,a.steer=c.steer,a.pitLimit=c.pitLimit,a.boost=!1,a.aiDriven=!0}if(a.hold=!r,a.hold&&(a.brake=1),n.service&&(a.throttle=0,a.brake=1),(n.service||n.pilot&&n.pilot.pitState!=="none")&&(a.allowReverse=!1),l.drsPress&&t.drsAllowed&&(n.drsLatch=!0),(!t.drsAllowed||a.brake>.1)&&(n.drsLatch=!1),a.drs=n.drsLatch,n.inPitLane&&this.track.inPitLimiter(t.s)&&(a.pitLimit=this.track.pit.limit),this.track.pit&&l.pitToggle&&(n.pitRequested=!n.pitRequested,this.pushEvent({type:"pitRequest",car:t,on:n.pitRequested})),l.ersCycle&&this.phase==="racing"&&(t.ersMode=(t.ersMode+1)%3,this.pushEvent({type:"mode",car:t,what:"ers",value:t.ersMode})),l.fuelCycle&&this.phase==="racing"&&(t.fuelMode=(t.fuelMode+1)%3,this.pushEvent({type:"mode",car:t,what:"fuel",value:t.fuelMode})),l.bbDelta&&(t.spec.brakeBias=it(t.spec.brakeBias+l.bbDelta*.01,.5,.7),this.pushEvent({type:"mode",car:t,what:"bias",value:t.spec.brakeBias})),l.tyreCycle){let c=ba,h=n.nextCompound||t.compound.id;n.nextCompound=c[(c.indexOf(h)+1)%c.length]}return this.opt.mode==="timetrial"&&this.phase!=="racing"&&(a.brake=1,a.steer=0),a}let o=t.driver;return o?(a=o.update(e,this),n.service&&(a.throttle=0,a.brake=1),a.drs=a.drs&&t.drsAllowed&&a.brake<.1,n.finished&&this.chequered&&(o.paceAdapt=.5),a):this._idle||(this._idle={throttle:0,brake:1,steer:0,drs:!1,boost:!1})}onPitSurface(t){let e=0;for(let i=0;i<4;i++)t.surf[i]===zt.PIT&&e++;return e>=2}collisions(){let t=this.cars;for(let e=0;e<t.length;e++)for(let i=e+1;i<t.length;i++){let n=t[e],r=t[i];if(n.rs.service||r.rs.service)continue;let a=Vf(n,r);if(a&&a.energy){n.locate(),r.locate();let o=e*32+i,l=this.pairContact.get(o)??-9;if(this.pairContact.set(o,this.time),this.time-l<.25)continue;this.opt.damage&&(n.applyDamage(a.energy,a.la[0],a.la[1]),r.applyDamage(a.energy,a.lb[0],a.lb[1])),a.speed>1.2&&this.pushEvent({type:"impact",car:n,other:r,energy:a.energy,speed:a.speed,x:(n.x+r.x)/2,y:(n.y+r.y)/2}),this.judgeCollision(n,r,a.la,a.speed),this.judgeCollision(r,n,a.lb,a.speed),n.rs.lastImpact=r.rs.lastImpact=this.time}}}judgeCollision(t,e,i,n){if(this.opt.mode!=="race"||this.phase!=="racing"||this.time-this.t0<8||n<3.5||this.sc.state!=="none"||!(ke(e.s,t.s,this.track.length)>1.5&&i[0]>1.2&&Math.abs(i[1])<1.1&&t.speed>e.speed+2))return;let a=t.rs;if(this.time-(a.lastFault||-99)<8)return;a.lastFault=this.time,a.faults=(a.faults||0)+1;let o=t.info.isPlayer?a.faults===1?5:a.faults===2?10:20:5;this.addPenalty(t,o,a.faults>=3&&t.info.isPlayer?"Repeated collisions":"Causing a collision")}updateTiming(t,e){let i=t.rs,n=this.track,r=n.length,a=ke(t.s,i.lastS,r);if(i.lastS=t.s,this.phase==="grid"||this.phase==="countdown"){i.dist+=a;return}i.dist+=a,t.speed>(i.lapTop||0)&&(i.lapTop=t.speed);let o=i.maxDist;if(i.dist>i.maxDist&&(i.maxDist=i.dist),i.finished&&!t.driver&&!t.info.isPlayer)return;let l=Math.floor(i.maxDist/n.cpSpacing);for(;i.cpIdx<l;){i.cpIdx++;let h=(i.cpIdx*n.cpSpacing-o)/Math.max(1e-6,i.maxDist-o),f=i.cpIdx+8;f>=0&&f<i.cpTimes.length&&(i.cpTimes[f]=this.time-e*(1-it(h,0,1)));let d=(i.cpIdx%n.cpCount+n.cpCount)%n.cpCount;i.lapCpBest&&d>0&&i.laps>=1&&(i.delta=i.cpTimes[f]-i.lapStart-i.lapCpBest[d])}if(i.laps>=0){let h=t.s<n.sectors[0]?0:t.s<n.sectors[1]?1:2;if(h!==i.sectorIdx&&!(h===0&&i.sectorIdx===2&&o>=i.laps*r+r-1)&&(i.sectorIdx===0&&h===1||i.sectorIdx===1&&h===2)){let f=this.time;i.laps>=0&&this.finishSector(t,i.sectorIdx,f-i.sectorStart),i.sectorStart=f,i.sectorIdx=h}}let c=Math.max(0,Math.floor(i.maxDist/r));if(c>i.laps){let h=(c*r-o)/Math.max(1e-6,i.maxDist-o),f=this.time-e*(1-it(h,0,1));i.laps=c,this.crossLine(t,f)}}finishSector(t,e,i){let n=t.rs;n.laps<1&&e!==0&&e!==1||(n.sectors[e]=i,n.sectorPurple=n.sectorPurple||[],i<n.bestSectors[e]&&(n.bestSectors[e]=i),i<this.bestSectors[e]?(this.bestSectors[e]=i,n.sectorFlag={idx:e,kind:"purple",t:i}):i<=n.bestSectors[e]+1e-9?n.sectorFlag={idx:e,kind:"green",t:i}:n.sectorFlag={idx:e,kind:"none",t:i},t.info.isPlayer&&this.pushEvent({type:"sector",car:t,idx:e,t:i,kind:n.sectorFlag.kind}))}crossLine(t,e){let i=t.rs,n=e-i.lapStart,r=e-i.sectorStart;if(i.laps>=2&&this.finishSector(t,2,r),i.sectorStart=e,i.sectorIdx=0,i.laps>=1){i.last=n,i.lapTimes.push(n);let a=t.tyreSummary();i.tele.push({lap:i.laps,time:n,fuel:t.fuel,wear:a.wear,temp:a.temp,compound:t.compound.letter,topSpeed:i.lapTop||0,wet:this.wet}),i.lapTop=0;let o=i.laps>=2||this.totalLaps===1,l=!i.invalidLap&&o;if(l&&n<i.best&&(i.best=n,t.info.isPlayer)){let c=(i.laps-1)*this.track.cpCount+8,h=i.cpTimes[c],f=new Float64Array(this.track.cpCount),d=!Number.isNaN(h);for(let u=0;u<f.length&&d;u++)f[u]=i.cpTimes[c+u]-h,Number.isNaN(f[u])&&(d=!1);d&&(i.lapCpBest=f),this.opt.mode==="timetrial"&&this.commitGhost(n)}l&&n<this.fastest.time&&(this.fastest={time:n,car:t,lap:i.laps},this.pushEvent({type:"fastest",car:t,time:n})),this.pushEvent({type:"lap",car:t,time:n,lap:i.laps,best:l&&n<=i.best,valid:l}),i.invalidLap=!1}i.lapStart=e,this.opt.mode==="timetrial"&&(this.ghostRec=[],this.ghostStart=this.stepCount),!i.finished&&(i.laps>=this.totalLaps||this.chequered)&&(i.finished=!0,i.finishTime=e-this.t0,this.chequered||(this.chequered=!0,this.chequeredAt=this.time,this.pushEvent({type:"chequered",car:t})),this.pushEvent({type:"finish",car:t,time:i.finishTime}))}updateRank(){let t=this.sorted;if(this.isQuali){t.sort((r,a)=>r.rs.best-a.rs.best||a.rs.maxDist-r.rs.maxDist),t.forEach((r,a)=>{r.rs.pos=a+1;let o=a>0?t[a-1]:null;r.ahead=o,r.behind=a<t.length-1?t[a+1]:null,r.gapAhead=o&&Number.isFinite(r.rs.best)&&Number.isFinite(o.rs.best)?r.rs.best-o.rs.best:null,r.rs.lapsDown=0});return}let e=this.track.length;t.sort((r,a)=>{let o=r.rs,l=a.rs,c=o.finished?o.laps:o.maxDist/e,h=l.finished?l.laps:l.maxDist/e;return Math.abs(c-h)>1e-6?h-c:o.finished&&l.finished?o.finishTime-l.finishTime:o.finished!==l.finished?o.finished?-1:1:l.maxDist-o.maxDist});let i=this.track;t.forEach((r,a)=>{let o=r.rs;if(this.phase==="racing"&&this.time-this.t0>6&&o.pos>a+1&&!o.inPitLane&&!o.service&&this.sc.state==="none"){let c=o.lastRank!=null?o.lastRank:o.pos;if(c>a+1){let h=0;for(let f=1;f<=c-(a+1);f++){let d=t[a+f];d&&!d.rs.inPitLane&&!d.rs.service&&!d.rs.finished&&d.speed>8&&h++}o.passes=(o.passes||0)+h}}o.lastRank=a+1,r.rs.pos=a+1;let l=a>0?t[a-1]:null;if(r.ahead=l,r.behind=a<t.length-1?t[a+1]:null,!l){r.gapAhead=null,r.rs.gapLeader=0;return}r.gapAhead=this.timeGap(r,l),r.rs.gapLeader=(l.rs.gapLeader??0)+(r.gapAhead??0),l.rs.finished&&r.rs.finished&&(r.gapAhead=r.rs.finishTime-l.rs.finishTime)});let n=t[0];for(let r of t)r.rs.lapsDown=Math.max(0,Math.floor((n.rs.maxDist-r.rs.maxDist)/i.length+1e-4))}timeGap(t,e){let i=t.rs,n=e.rs,r=i.cpIdx+8,a=n.cpTimes[r],o=i.cpTimes[r];if(r>=0&&r<i.cpTimes.length&&!Number.isNaN(a)&&!Number.isNaN(o)&&n.cpIdx>=i.cpIdx)return Math.max(0,o-a);let l=n.maxDist-i.maxDist;return Math.max(0,l/Math.max(20,t.speed))}updateAeroInteractions(){let t=this.track.length;for(let e of this.cars){let i=0;for(let n of this.cars){if(n===e)continue;let r=ke(n.s,e.s,t);if(r<4||r>42)continue;let a=Math.abs(n.d-e.d);if(a>3.2)continue;let o=r-5.5,l=it(1-o/34,0,1)*it(1-Math.max(0,a-.6)/2.6,0,1);l>i&&(i=l)}e.slipstream=i,e.dirtyAir=i*(this.phase==="racing"?1:0)}}updateDrs(t){let e=this.track,i=t.rs;if(!e.drs.length)return;let n=this.phase==="racing"&&(this.opt.mode==="timetrial"||this.isQuali||i.laps>=1),r=e.inDrsZone(t.s);for(let a=0;a<e.drs.length;a++){let o=e.drs[a],l=ke(t.s,o.detect,e.length);l>=0&&l<Math.max(8,t.speed*.06)&&(i.drsEligible[a]=this.opt.mode==="timetrial"||this.isQuali||t.gapAhead!=null&&t.gapAhead<1,(i.drsGap||(i.drsGap=[]))[a]=t.gapAhead),r!==a&&i.drsEligible[a]&&ke(t.s,o.end,e.length)>10&&ke(t.s,o.end,e.length)<200&&(i.drsEligible[a]=!1)}t.drsAllowed=n&&this.sc.state==="none"&&r>=0&&!!i.drsEligible[r]&&!i.inPitLane&&!i.service&&Math.abs(t.latG)<1.4,t.drsZone=r,t.drsEligible=i.drsEligible.some(Boolean)}updatePit(t,e){let i=this.track,n=t.rs;if(!i.pit)return;let r=i.inPitRange(t.s)&&this.onPitSurface(t)&&t.d<-(i.wr[t.i]+i.kr[t.i]+.8);r!==n.inPitLane&&(n.inPitLane=r,this.pushEvent({type:r?"pitEntry":"pitExit",car:t}),r||(n.pitPenalised=!1)),n.inPitLane&&i.inPitLimiter(t.s)?(n.pitZoneT=(n.pitZoneT||0)+e,n.pitZoneT>1.6&&t.speed>i.pit.limit+2.5&&!t.driver?(n.pitSpeedT+=e,n.pitSpeedT>.35&&!n.pitPenalised&&(n.pitPenalised=!0,this.addPenalty(t,5,"Speeding in the pit lane"))):n.pitSpeedT=0):n.pitZoneT=0;let a=t.driver;if(a){let o=t.tyreSummary(),l=n.stops>=1,c=this.totalLaps-n.laps;if(!a.wantsPit&&a.pitState==="none"&&c>1){if(n.plannedStop!=null&&!l&&n.laps>=n.plannedStop&&(a.wantsPit=!0),n.adviceT=(n.adviceT||0)+e,n.adviceT>1){n.adviceT=0;let h=this.strategyAdvice(t);h&&h.thisLap&&h.reason!=="rules"&&(a.wantsPit=!0,n.nextCompound||(n.nextCompound=h.compound))}o.wear>.8&&(a.wantsPit=!0),t.damageSummary().severity>.4&&c>2&&(a.wantsPit=!0),this.track.pit&&c>1&&((this.wet>.4||this.rain>.25&&this.wet>.12+.1*(t.info.number%3))&&!t.compound.wetTyre?(a.wantsPit=!0,n.nextCompound="wet"):this.wet<.14&&this.rain<.05&&t.compound.wetTyre&&(a.wantsPit=!0,n.nextCompound=nc[1])),this.sc.state==="deployed"&&o.wear>.4&&n.stops===0&&c>3&&n.plannedStop!=null&&(a.wantsPit=!0)}}if(t===this.player&&this.opt.mode==="race"&&i.pit&&this.phase==="racing"){let o=t.damageSummary().severity;if(o>.5&&!n.damageBoxed&&!n.pitRequested&&this.totalLaps-n.laps>1&&(n.damageBoxed=!0,n.pitRequested=!0,this.pushEvent({type:"damageBox",car:t})),o<.1&&(n.damageBoxed=!1),this.opt.pitCalls!=="off"&&!n.pitRequested&&!n.service&&!n.damageBoxed&&(n.adviceT=(n.adviceT||0)+e,n.adviceT>1)){n.adviceT=0;let l=this.strategyAdvice(t);n.advice=l,l&&l.thisLap&&n.calledLap!==l.lap&&t.s/i.length>.12&&t.s/i.length<.9&&(n.calledLap=l.lap,this.pushEvent({type:"pitCall",car:t,advice:l,auto:this.opt.pitCalls==="auto"}),this.opt.pitCalls==="auto"&&(n.pitRequested=!0,n.nextCompound||(n.nextCompound=l.compound)))}}if(n.boxLatch&&t.speed>3&&(n.boxLatch=!1),t===this.player&&!n.service&&!n.boxLatch&&n.inPitLane&&t.speed<.7){let o=i.pitBox(t.info.teamIdx);Math.abs(ke(t.s,o.s,i.length))<3.2&&Math.abs(t.d-o.d)<2.8&&(t.pitStopped=!0)}if(t.pitStopped&&!n.service){let o=2.3+this.rng()*(1.1+(1-this.opt.level)*1.2),l=t.damageSummary(),c=4*l.fw+2.5*(l.sideL+l.sideR)+2*l.rw+1.5*l.floor;o+=c,n.service={t:0,dur:o,repair:c},t===this.player&&this.opt.assists.pitGame&&this.opt.mode==="race"&&(n.service.pg=ip(),n.service.dur=1/0,n.pitAct=!1,o=2.5),this.pushEvent({type:"pitStopStart",car:t,dur:o,game:!!n.service.pg})}if(n.service){n.service.t+=e;let o=n.service.pg;if(o){let l=n.pitAct;n.pitAct=!1;for(let c of np(o,n.service.t,l))this.pushEvent({type:"pitWheel",car:t,k:c.k,res:c.res});o.done&&n.service.dur===1/0&&(n.service.dur=o.dur+(n.service.repair||0),o.perfects===4&&(n.perfectStops=(n.perfectStops||0)+1),this.pushEvent({type:"pitGameDone",car:t,dur:o.dur,repair:n.service.repair||0,perfects:o.perfects,misses:o.misses}))}if(n.service.t>=n.service.dur){let l=n.nextCompound;if(!l){let c=t.compound.id,h=(this.wet>.3?["wet"]:nc).filter(f=>f!==c);h.length||h.push(c),l=h[Math.floor(this.rng()*h.length)]}if(t.fitTyres(ii[l]),t.repair(),n.nextCompound=null,n.compounds.push(l),n.stops++,n.stopLaps.push(n.laps),n.service=null,n.pitRequested=!1,n.boxLatch=!0,t.pitStopped=!1,a){let c=t.info.team;a.profile=this.getProfile(t.spec,`${c.id}:${l}`)}this.pushEvent({type:"pitStopEnd",car:t,compound:l})}}if(t===this.player&&this.opt.assists.pitAuto&&!n.service){if(!n.pilot){let o=i.pitBox(t.info.teamIdx);n.pilot=new bn({car:t,track:i,profile:this.getProfile(t.spec,"pilot:"+t.compound.id),level:1,seed:99,boxS:o.s,boxD:o.d}),n.pilot.dp.pace=.9,n.pilot.goTime=0}if(n.pilot.profile=this.getProfile(t.spec,"pilot:"+t.compound.id),n.pilot.wantsPit=n.pitRequested,n.pilot.pitState==="none"){let o=ae(i.pit.start-t.s,i.length);n.pitRequested&&o<140&&o>10&&this.phase==="racing"&&(n.pilot.pitState="in")}n.pilot.pitState==="stopped"&&!t.pitStopped&&(n.pilot.pitState="out")}}addPenalty(t,e,i){let n=t.rs;n.penalty+=e,n.penaltyLog.push({secs:e,reason:i,t:this.time}),this.pushEvent({type:"penalty",car:t,secs:e,reason:i})}tyreLife(t){return ii[t].wearLaps/Math.max(.3,this.opt.tyreWear||1)*.45}strategyAdvice(t){let e=t.rs;if(!this.track.pit||this.opt.mode!=="race"||this.phase!=="racing"||e.finished)return null;let n=this.totalLaps,r=e.stopLaps.length?e.stopLaps[e.stopLaps.length-1]:0,a=n-e.laps;if(a<2)return null;let o=t.tyreSummary().wear,l=e.tele.filter(v=>v.lap>r),c=0;l.length>=2?c=Math.max(0,l[l.length-1].wear-l[l.length-2].wear):l.length===1&&(c=l[0].wear*.8);let h=this.wet,f="wear",d=!1,u=null;h>.35&&!t.compound.wetTyre?(d=!0,f="wet",u="wet"):h<.14&&this.rain<.05&&t.compound.wetTyre&&(d=!0,f="dry",u=nc[1]);let g=1/0;c>.004&&!t.compound.wetTyre&&(g=Math.max(0,Math.floor((.7-o)/c-.15)));let y=o+c*a,m=this.opt.mandatoryStop&&e.stops===0&&!t.compound.wetTyre;if(m)g=Math.min(g,Math.max(0,a-3)),f=g===Math.max(0,a-3)&&y<.85?"rules":f;else if((y<.88||a<3)&&!d)return null;if(!d&&g===1/0||!d&&g>0&&g>a-2)return null;if(!u){let v=Math.max(1,a-g),M=_=>this.tyreLife(_),b=["soft","medium","hard"],S=m?b.filter(_=>_!==t.compound.id):b;u=S.find(_=>M(_)>=v)||S[S.length-1]}let p=d||g===0;return{lap:e.laps+1+(p?0:g),thisLap:p,nextLap:!p&&g===1,compound:u,reason:f}}setupWeather(){let t=this.opt.weather;if(this.wx=[],this.isQuali||this.opt.mode==="timetrial"){t==="light"?this.wet=.5:t==="heavy"&&(this.wet=.9),(t==="light"||t==="heavy")&&this.wx.push({t0:-1,t1:1e9,level:t==="heavy"?1:.45}),this.rain=this.wx.length?this.wx[0].level:0;return}let i=this.track.length/52*Math.min(this.opt.laps,40),n=this.rng;if(t==="light")this.wet=.5,this.wx.push({t0:-1,t1:1e9,level:.45});else if(t==="heavy")this.wet=.92,this.wx.push({t0:-1,t1:1e9,level:1});else if(t==="changing"){let r=i>500&&n()<.5?2:1,a=i*(.15+.25*n());for(let o=0;o<r;o++){let l=Math.max(90,i*(.15+.2*n()));this.wx.push({t0:a,t1:a+l,level:.5+.5*n()}),a+=l+i*(.15+.1*n())}}this.rain=this.wx.length&&this.wx[0].t0<0?this.wx[0].level:0}forecast(){let t=this.t0==null?0:this.time-this.t0;for(let e of this.wx)if(e.t0>t)return{rainIn:e.t0-t,level:e.level};return null}updateWeather(t){if(this.phase!=="racing"&&this.phase!=="countdown"&&this.phase!=="grid")return;let e=this.t0==null?0:this.time-this.t0,i=0;for(let r of this.wx)e>=r.t0&&e<r.t1&&(i=Math.max(i,r.level));this.rain+=it(i-this.rain,-t*.02,t*.015),this.rain>.04?this.wet=Math.min(1,this.wet+this.rain*.012*t):this.wet=Math.max(0,this.wet-.0045*t),this.rain>.04&&this.wet>this.rain*1.05+.1&&(this.wet-=.004*t),this.maxWet=Math.max(this.maxWet||0,this.wet);for(let r of this.cars)r.wetness=this.wet;let n=this.player;n&&(n.rs.maxDamage=Math.max(n.rs.maxDamage||0,n.damageSummary().worst))}disabledCars(){let t=this.track,e=[];for(let i of this.cars){if(!i.driver||i.rs.finished||i.rs.inPitLane||i.rs.service||i.inGarage)continue;let n=i.d>t.wl[i.i]+1.5||-i.d>t.wr[i.i]+1.5;i.speed<3.5&&(i.driver.stuckT>1.2||n&&i.speed<1.5)&&e.push(i)}return e}updateSafetyCar(t){let e=this.sc,i=this.track;if(!this.opt.safetyCar||this.isQuali||this.opt.mode==="timetrial"||this.phase!=="racing")return;let a=this.time-this.t0>20?this.disabledCars():[],o=a.length>0&&e.state==="none";if(o!==this.yellow&&(this.yellow=o,this.pushEvent({type:o?"yellow":"yellowClear"})),e.state==="none"){e.count=a.length;let d=this.sorted[0]?this.totalLaps-this.sorted[0].rs.laps:9;a.length>=3&&d>1&&!this.chequered&&this.deploySafetyCar();return}e.t+=t;let l=this.sorted.find(d=>!d.rs.finished&&!d.rs.dnf)||null,c=e.state==="ending"?60:38,h=e.v<c?4:-4;if(e.v+=it(c-e.v,-Math.abs(h)*t,Math.abs(h)*t),e.state==="deployed"&&l){let d=ke(e.s,l.s,i.length);d>120?e.v=Math.min(e.v,Math.max(20,l.speed*.9)):d<25&&(e.v=Math.max(e.v,l.speed+2))}e.s=ae(e.s+e.v*t,i.length);let f=e.pseudo;if(f.s=e.s,f.speed=e.v,f.d=0,e.state==="deployed")e.clearT=a.length?0:e.clearT+t,e.clearT>8&&e.t>28&&(e.state="ending",this.pushEvent({type:"scEnding"}));else if(e.state==="ending"&&i.pit){let d=ae(i.pit.start-e.s,i.length);(d>i.length-40||d<3)&&(e.state="none",this.yellow=!1,this.pushEvent({type:"scEnd"}))}else e.state==="ending"&&!i.pit&&e.t>60&&(e.state="none",this.pushEvent({type:"scEnd"}));this.policeSafetyCar()}deploySafetyCar(){let t=this.sc,e=this.sorted.find(i=>!i.rs.finished&&!i.rs.dnf);if(e){t.state="deployed",t.t=0,t.clearT=0,t.s=ae(e.s+60,this.track.length),t.v=Math.max(38,e.speed*.9),t.pseudo.s=t.s,t.pseudo.speed=t.v,t.ahead=this.player?this.player.ahead:null,this.yellow=!1;for(let i of this.cars)i.drsAllowed=!1,i.rs.drsEligible=[];this.pushEvent({type:"scDeploy"})}}policeSafetyCar(){let t=this.player,e=this.sc;if(!t||t.rs.finished||t.rs.inPitLane||this.opt.mode!=="race"||e.state!=="deployed")return;let i=e.ahead,n=t.ahead;i&&i!==n&&t.behind===i&&i.speed>8&&!i.rs.inPitLane&&this.time-(e.lastPen||-99)>15&&(e.lastPen=this.time,this.addPenalty(t,5,"Overtaking under the safety car")),e.ahead=n}updateRules(t,e){let i=t.rs;if(this.phase!=="racing"||!t.info.isPlayer)return;let n=0;for(let r=0;r<4;r++){let a=t.surf[r];(a===zt.GRASS||a===zt.GRAVEL||a===zt.RUNOFF)&&n++}n===4?(i.offTimer+=e,i.offTimer>.15&&i.limitTimer<=0&&(i.limitTimer=2.5,i.invalidLap=!0,i.warnings++,this.opt.mode==="race"?i.warnings%3===0?this.addPenalty(t,5,"Track limits (3 warnings)"):this.pushEvent({type:"warning",car:t,n:i.warnings%3}):this.pushEvent({type:"lapInvalid",car:t}))):i.offTimer=0,i.limitTimer>0&&(i.limitTimer-=e)}updateFinish(){if(this.phase==="racing"&&this.chequered){let t=this.cars.filter(r=>!r.rs.finished&&!r.rs.dnf),e=this.player&&this.player.rs.finished,i=this.time-this.chequeredAt,n=this.player&&!e&&this.player.speed<3;(!t.length||i>240&&(e||n)||i>420)&&this.endRace()}}endRace(){if(this.phase="finished",this.sc.state="none",this.yellow=!1,this.opt.mandatoryStop&&this.player&&this.opt.mode==="race"&&this.track.pit){let t=this.player.rs;(t.stops<1||new Set(t.compounds).size<2)&&this.addPenalty(this.player,15,"Mandatory stop / two compounds not completed")}this.pushEvent({type:"raceEnd"})}qualifying(){let t=this.cars.map(i=>({car:i,info:i.info,best:i.rs.best,laps:i.rs.laps,dist:i.rs.maxDist}));t.sort((i,n)=>i.best-n.best||n.dist-i.dist),t.forEach((i,n)=>i.pos=n+1);let e={};for(let i of t)Number.isFinite(i.best)&&(e[i.info.isPlayer?"YOU":i.info.code]=i.best);return{list:t,times:e}}qualiLeft(){return!this.isQuali||this.t0==null?this.opt.qualiTime:Math.max(0,this.opt.qualiTime-(this.time-this.t0))}classification(){let t=this.cars.map(i=>({car:i,info:i.info,laps:Math.min(i.rs.laps,this.totalLaps),time:i.rs.finished?i.rs.finishTime+i.rs.penalty:null,raw:i.rs.finishTime,penalty:i.rs.penalty,best:i.rs.best,stops:i.rs.stops,dist:i.rs.maxDist,gridPos:i.info.gridPos}));t.sort((i,n)=>i.time!=null!=(n.time!=null)?i.time!=null?-1:1:i.time!=null&&n.time!=null?i.laps===n.laps?i.time-n.time:n.laps-i.laps:n.dist-i.dist),t.forEach((i,n)=>i.pos=n+1);let e=[25,18,15,12,10,8,6,4,2,1];return t.forEach(i=>i.points=(e[i.pos-1]||0)+(this.fastest.car===i.car&&i.pos<=10?1:0)),t}adaptPace(){if(!this.opt.adaptive||!this.player||this.stepCount%240!==0)return;let t=this.player;for(let e of this.cars){if(!e.driver||e.rs.finished)continue;let i=(e.rs.maxDist-t.rs.maxDist)/60,n=1;i>6?n=1-it((i-6)*.004,0,.05):i<-6&&(n=1+it((-i-6)*.004,0,.03)),e.driver.paceAdapt=n}}recoverStuck(t){for(let e of this.cars){let i=e.driver;i&&i.stuckT>5&&(i.stuckT=0,this.resetToTrack(e))}}resetToTrack(t,e=0){if(t.rs.service)return;let i=this.track,n=i.pointAt(t.s,it(i.lineAt(t.s)*.5,-i.wr[t.i]+3,i.wl[t.i]-3));t.reset(n.x,n.y,n.heading,6),t.rs.resets++,t.rs.lastS=t.s,t.dirtyAir=0,t.driver&&(t.driver.offset=0,t.driver.offTarget=0,t.driver.mistake=null),t.rs.drsLatch=!1,e&&this.addPenalty(t,e,"Car recovered"),this.pushEvent({type:"recover",car:t})}recordGhost(){if(this.phase!=="racing"||!this.player||(this.stepCount-this.ghostStart)%12!==0)return;let t=this.player;this.ghostRec.push(t.x,t.y,t.theta,t.steer)}commitGhost(t){this.ghostBest={time:t,frames:Float32Array.from(this.ghostRec),track:this.track.id},this.pushEvent({type:"ghost",time:t})}ghostPose(t){let e=this.ghostBest;if(!e)return null;let i=t/(12*di),n=Math.floor(i),r=e.frames.length/4;if(n<0||n>=r-1)return null;let a=i-n,o=n*4,l=o+4,c=e.frames[l+2]-e.frames[o+2];return c>Math.PI&&(c-=2*Math.PI),c<-Math.PI&&(c+=2*Math.PI),{x:e.frames[o]+(e.frames[l]-e.frames[o])*a,y:e.frames[o+1]+(e.frames[l+1]-e.frames[o+1])*a,theta:e.frames[o+2]+c*a,steer:e.frames[o+3]}}};function Oe(s,t=!1){let e=s[0].index!==null,i=new Set(Object.keys(s[0].attributes)),n=new Set(Object.keys(s[0].morphAttributes)),r={},a={},o=s[0].morphTargetsRelative,l=new ne,c=0;for(let h=0;h<s.length;++h){let f=s[h],d=0;if(e!==(f.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let u in f.attributes){if(!i.has(u))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+u+'" attribute exists among all geometries, or in none of them.'),null;r[u]===void 0&&(r[u]=[]),r[u].push(f.attributes[u]),d++}if(d!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==f.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let u in f.morphAttributes){if(!n.has(u))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;a[u]===void 0&&(a[u]=[]),a[u].push(f.morphAttributes[u])}if(t){let u;if(e)u=f.index.count;else if(f.attributes.position!==void 0)u=f.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,u,h),c+=u}}if(e){let h=0,f=[];for(let d=0;d<s.length;++d){let u=s[d].index;for(let g=0;g<u.count;++g)f.push(u.getX(g)+h);h+=s[d].attributes.position.count}l.setIndex(f)}for(let h in r){let f=sp(r[h]);if(!f)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,f)}for(let h in a){let f=a[h][0].length;if(f!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let d=0;d<f;++d){let u=[];for(let y=0;y<a[h].length;++y)u.push(a[h][y][d]);let g=sp(u);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(g)}}}return l}function sp(s){let t,e,i,n=-1,r=0;for(let c=0;c<s.length;++c){let h=s[c];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=h.normalized),i!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(n===-1&&(n=h.gpuType),n!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}let a=new t(r),o=new Yt(a,e,i),l=0;for(let c=0;c<s.length;++c){let h=s[c];if(h.isInterleavedBufferAttribute){let f=l/e;for(let d=0,u=h.count;d<u;d++)for(let g=0;g<e;g++){let y=h.getComponent(d,g);o.setComponent(d+f,g,y)}}else a.set(h.array,l);l+=h.count*e}return n!==void 0&&(o.gpuType=n),o}var dc=["VELOCE","PETRONOVA","QUANTUM","AXIOM","NOVATEL","STRATOS","HYPERION","ORBITAL","ZENITH","TORQUE+","APEXFUEL","MERIDIAN","KINETIC","SOLARIS"],uc=[["#ffffff","#d8102b"],["#0b1f4d","#ffffff"],["#ffd400","#111111"],["#111111","#ff7a14"],["#ffffff","#0a7d4f"],["#e8e8e8","#6a2fb5"]];function ui(s,t){let e=document.createElement("canvas");return e.width=s,e.height=t,[e,e.getContext("2d")]}function fi(s,{repeat:t=!0,srgb:e=!0,aniso:i=8}={}){let n=new os(s);return t&&(n.wrapS=n.wrapT=zs),e&&(n.colorSpace=si),n.anisotropy=i,n.generateMipmaps=!0,n.minFilter=en,n}function Yn(s,t,e,i,n,r,a,o,l=1){for(let c=0;c<i;c++){s.globalAlpha=l*(.3+.7*n()),s.fillStyle=r[Math.floor(n()*r.length)];let h=a+(o-a)*n(),f=n()*t,d=n()*e;s.beginPath(),s.arc(f,d,h,0,6.283),s.fill(),f<h&&(s.beginPath(),s.arc(f+t,d,h,0,6.283),s.fill()),d<h&&(s.beginPath(),s.arc(f,d+e,h,0,6.283),s.fill()),f>t-h&&(s.beginPath(),s.arc(f-t,d,h,0,6.283),s.fill()),d>e-h&&(s.beginPath(),s.arc(f,d-e,h,0,6.283),s.fill())}s.globalAlpha=1}function rp(){let[s,t]=ui(512,512),e=ei(11);t.fillStyle="#3b3c40",t.fillRect(0,0,512,512),Yn(t,512,512,60,e,["#35363a","#444549","#3f4044"],30,90,.35),Yn(t,512,512,5200,e,["#2b2c2f","#505156","#5b5c61","#222326"],.5,1.6,.55),t.strokeStyle="rgba(15,15,18,0.4)",t.lineWidth=1;for(let i=0;i<9;i++){t.beginPath();let n=e()*512,r=e()*512;t.moveTo(n,r);for(let a=0;a<8;a++)n+=(e()-.5)*60,r+=(e()-.5)*60,t.lineTo(n,r);t.stroke()}return fi(s)}function ap(){let[s,t]=ui(256,256),e=ei(21);return t.fillStyle="#5b5f66",t.fillRect(0,0,256,256),Yn(t,256,256,1800,e,["#4d5157","#6b7078","#41454b"],.5,1.5,.6),fi(s)}function op(s="#4a7d2f",t="#5e9238"){let[e,i]=ui(512,512),n=ei(31);i.fillStyle=s,i.fillRect(0,0,512,512),Yn(i,512,512,70,n,[t,s,"#3c6a27"],20,70,.28),i.lineWidth=1;for(let r=0;r<7e3;r++){i.strokeStyle=n()<.5?t:"#2f5a1e",i.globalAlpha=.35;let a=n()*512,o=n()*512;i.beginPath(),i.moveTo(a,o),i.lineTo(a+(n()-.5)*3,o-2-n()*4),i.stroke()}return i.globalAlpha=1,fi(e)}function lp(){let[s,t]=ui(256,256),e=ei(41);return t.fillStyle="#b9a98a",t.fillRect(0,0,256,256),Yn(t,256,256,3500,e,["#a69677","#cbbb9c","#8f8062","#d8cdb4"],.6,1.8,.8),fi(s)}function cp(){let[s,t]=ui(64,128);t.fillStyle="#e53935",t.fillRect(0,0,64,128),t.fillStyle="#f5f5f5",t.fillRect(0,64,64,64);let e=ei(51);return Yn(t,64,128,300,e,["#00000022","#ffffff22"],.5,1.2,.5),fi(s)}function hp(){let[s,t]=ui(64,64);t.fillStyle="#f2f2f2",t.fillRect(0,0,64,64),t.fillStyle="#151515";for(let e=0;e<4;e++)for(let i=0;i<4;i++)(i+e)%2===0&&t.fillRect(i*16,e*16,16,16);return fi(s)}function dp(s=5){let[t,e]=ui(1024,128),i=ei(s);e.fillStyle="#e9e9e6",e.fillRect(0,0,1024,128),Yn(e,1024,128,120,i,["#d4d4d0","#f4f4f2","#c9c9c4"],8,40,.25);let n=0;for(;n<1024;){let r=170+i()*130,[a,o]=uc[Math.floor(i()*uc.length)];e.fillStyle=a,e.fillRect(n+6,14,r-12,100),e.fillStyle=o,e.font='900 64px "Arial Black", Impact, sans-serif',e.textAlign="center",e.textBaseline="middle",e.fillText(dc[Math.floor(i()*dc.length)],n+r/2,66,r-28),n+=r}return e.fillStyle="#c9201f",e.fillRect(0,118,1024,10),fi(t)}function up(){let[s,t]=ui(512,128),e=ei(61);t.fillStyle="#16171a",t.fillRect(0,0,512,128);for(let i=0;i<3;i++)for(let n=0;n<8;n++){let r=n*64+i%2*32,a=i*42;t.fillStyle="#26282c",t.beginPath(),t.ellipse(r+32,a+21,30,19,0,0,6.283),t.fill(),t.fillStyle="#0c0d0f",t.beginPath(),t.ellipse(r+32,a+21,14,8,0,0,6.283),t.fill(),e()<.3&&(t.fillStyle=e()<.5?"#f2f2f2":"#2a6cd6",t.fillRect(r+8,a+6,48,6))}return fi(s)}function fp(){let[s,t]=ui(256,128),e=ei(71);t.fillStyle="#2b2b30",t.fillRect(0,0,256,128);let i=["#d33","#eee","#36c","#fc3","#3a6","#c6c","#f80","#ddd","#222","#59f"];for(let n=0;n<2600;n++)t.fillStyle=i[Math.floor(e()*i.length)],t.fillRect(Math.floor(e()*128)*2,Math.floor(e()*64)*2,2,2);t.globalAlpha=.25,t.fillStyle="#000";for(let n=0;n<128;n+=8)t.fillRect(0,n+6,256,2);return fi(s)}function pp(s=3,t="#e8dcc6"){let[e,i]=ui(256,512),n=ei(s);i.fillStyle=t,i.fillRect(0,0,256,512),Yn(i,256,512,200,n,["#00000010","#ffffff18"],6,30,.5);for(let r=14;r<500;r+=46)for(let a=16;a<240;a+=48){let o=n()<.18;i.fillStyle=o?"#ffe9a8":"#3d5266",i.fillRect(a,r,26,32),i.fillStyle="rgba(255,255,255,0.18)",i.fillRect(a,r,26,8),i.fillStyle="#00000033",i.fillRect(a-3,r+33,32,3)}return fi(e)}function Rd(s=0){let[t,e]=ui(512,128),[i,n]=uc[s%uc.length];return e.fillStyle=i,e.fillRect(0,0,512,128),e.fillStyle=n,e.fillRect(0,108,512,20),e.font='900 78px "Arial Black", Impact, sans-serif',e.textAlign="center",e.textBaseline="middle",e.fillText(dc[s%dc.length],256,56,480),fi(t,{repeat:!1})}function mp(){let[s,t]=ui(128,128);t.fillStyle="#2a2d33",t.fillRect(0,0,128,128),t.fillStyle="#1b1d22";for(let e=10;e<118;e+=12)t.fillRect(8,e,112,6);return t.fillStyle="rgba(255,255,255,0.12)",t.fillRect(0,0,128,6),fi(s,{repeat:!1})}function Pa(){let[s,t]=ui(64,64),e=t.createRadialGradient(32,32,0,32,32,32);return e.addColorStop(0,"rgba(255,255,255,1)"),e.addColorStop(.35,"rgba(255,255,255,0.55)"),e.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=e,t.fillRect(0,0,64,64),fi(s,{repeat:!1,srgb:!1})}function gp(s,t="#ffffff",e=null){let[i,n]=ui(128,128);return e&&(n.fillStyle=e,n.fillRect(0,0,128,128)),n.fillStyle=t,n.font='900 100px "Arial Black", Impact, sans-serif',n.textAlign="center",n.textBaseline="middle",n.fillText(String(s),64,68),fi(i,{repeat:!1})}function Cd(s,t="#fff",e="#111",i=256,n=64){let[r,a]=ui(i,n);return a.fillStyle=e,a.fillRect(0,0,i,n),a.fillStyle=t,a.font=`900 ${Math.floor(n*.62)}px "Arial Black", Impact, sans-serif`,a.textAlign="center",a.textBaseline="middle",a.fillText(s,i/2,n/2+2,i-10),fi(r,{repeat:!1})}function fc(s,t){let e=s*374761393+t*668265263|0;return e=(e^e>>>13)*1274126177,((e^e>>>16)>>>0)/4294967296}function $v(s,t){let e=Math.floor(s),i=Math.floor(t),n=s-e,r=t-i,a=n*n*(3-2*n),o=r*r*(3-2*r),l=fc(e,i),c=fc(e+1,i),h=fc(e,i+1),f=fc(e+1,i+1);return l+(c-l)*a+(h-l)*o+(l-c-h+f)*a*o}function Ia(s,t,e=4){let i=.5,n=1,r=0;for(let a=0;a<e;a++)r+=i*$v(s*n,t*n),i*=.5,n*=2.03;return r}var qv=`
varying vec3 vDir;
void main() {
  vDir = normalize(position);
  vec4 p = modelViewMatrix * vec4(position, 1.0);
  gl_Position = projectionMatrix * p;
  gl_Position.z = gl_Position.w; // always at the far plane
}`,Xv=`
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
}`;function Yv(s){let t=s.sky,e=new Ce({vertexShader:qv,fragmentShader:Xv,side:Xe,depthWrite:!1,uniforms:{top:{value:new at(t.top)},horizon:{value:new at(t.horizon)},ground:{value:new at(s.fog).multiplyScalar(.75)},sunDir:{value:new k(...t.sun).normalize()},sunColor:{value:new at(t.sunColor)},time:{value:0},cloud:{value:s.cloud??.8},night:{value:0}}}),i=new yt(new Ji(6e3,32,16),e);return i.frustumCulled=!1,i.renderOrder=-10,i}function pc(s,t=.68){return s.customProgramCacheKey=()=>"plainBack"+t,s.onBeforeCompile=e=>{let i=`
  if (!gl_FrontFacing) diffuseColor.rgb = vec3(${t.toFixed(2)}, ${(t+.01).toFixed(2)}, ${(t+.03).toFixed(2)});`;e.fragmentShader.includes("#include <map_fragment>")?e.fragmentShader=e.fragmentShader.replace("#include <map_fragment>","#include <map_fragment>"+i):e.fragmentShader=e.fragmentShader.replace("#include <color_fragment>","#include <color_fragment>"+i)},s.needsUpdate=!0,s}function Zv(s){return s.userData.nightU={value:0},s.onBeforeCompile=t=>{t.uniforms.uNight=s.userData.nightU,t.fragmentShader=t.fragmentShader.replace("#include <common>",`#include <common>
uniform float uNight;`).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
        {
          vec3 c = diffuseColor.rgb;
          float lit = step(0.3, c.r - c.b) * step(0.88, c.r);
          vec2 cell = floor(vec2(vMapUv.x * 5.33, vMapUv.y * 11.1));
          float h = fract(sin(dot(cell, vec2(12.9898, 78.233))) * 43758.5453);
          float dark = step(c.b, c.r + 0.1) * 0.0 + step(0.2, c.b - c.r) * step(c.b, 0.45);
          float on = max(lit, dark * step(h, 0.38));
          totalEmissiveRadiance += vec3(1.0, 0.82, 0.5) * on * uNight * 2.9;
        }`)},s}function mc(s,t){let e=[],i=-1,n=(()=>{for(let r=0;r<s;r++)if(!t(r))return r;return-1})();if(n<0)return[[0,s-1,!0]];for(let r=1;r<=s;r++){let a=(n+r)%s,o=t(a);o&&i<0&&(i=a),!o&&i>=0&&(e.push([i,(a-1+s)%s]),i=-1)}return e}function Pd(s){for(let t of s)t.deleteAttribute("uv");return Oe(s)}var gc=class{constructor(t,e={}){this.track=t,this.quality=e.quality||"high",this.theme=t.theme,this.group=new Le,this.dynamic=[],this.tex={};let i=this.theme;this.rnd=ei(1234),this.waterLevel=null,this.sky=Yv(i),this.group.add(this.sky),this.buildLights(),this.buildTextures(),this.buildTerrain(),this.buildRoad(),this.buildBarriers(),this.buildPit(),this.buildStartLine(),this.buildScenery(),e.profile&&this.buildBrakeBoards(e.profile),this.buildDrsMarkers(),this.buildFloodlights(),this.buildMountains()}buildLights(){let t=this.theme,e=new k(...t.sky.sun).normalize();this.sunDir=e,this.hemi=new cs(new at(t.sky.top).lerp(new at("#ffffff"),.4),new at(t.grass[0]).multiplyScalar(.7),.85),this.group.add(this.hemi),this.sun=new sa(new at(t.sky.sunColor),2.6),this.sun.castShadow=this.quality!=="low";let i=this.sun.shadow.camera;i.left=-70,i.right=70,i.top=70,i.bottom=-70,i.near=10,i.far=500,this.sun.shadow.mapSize.set(this.quality==="high"?4096:2048,this.quality==="high"?4096:2048),this.sun.shadow.bias=-4e-4,this.sun.shadow.normalBias=.05,this.group.add(this.sun,this.sun.target)}setAtmosphere({dusk:t=0,wet:e=0,rain:i=0,night:n=0}={}){let r=`${Math.round(t*60)}/${Math.round(e*40)}/${Math.round(i*40)}/${Math.round(n*40)}`;if(r===this._atmoKey)return this.atmo;this._atmoKey=r;let a=this.theme;this._base||(this._base={top:new at(a.sky.top),horizon:new at(a.sky.horizon),sunColor:new at(a.sky.sunColor),sunDir:new k(...a.sky.sun).normalize(),fog:new at(a.fog),hemiInt:this.hemi.intensity,sunInt:this.sun.intensity,ground:new at(a.fog).multiplyScalar(.75),cloud:a.cloud??.8},this._tmpA=new at,this.atmo={fog:new at(a.fog),fogMul:1,envMul:1,exposure:1});let o=this._base,l=this.sky.material.uniforms,c=(x,w)=>x.lerp(this._tmpA.setRGB(w*.92,w*.95,w),it(i*.85,0,1)),h=this._tmpB||(this._tmpB=new at("#27386f")),f=this._tmpC||(this._tmpC=new at("#f39a55")),d=this._tmpD||(this._tmpD=new at("#ff8532")),u=this._tmpE||(this._tmpE=new at("#c98d73"));l.top.value.copy(o.top).lerp(h,t),l.horizon.value.copy(o.horizon).lerp(f,t),l.sunColor.value.copy(o.sunColor).lerp(d,t),l.ground.value.copy(o.ground).multiplyScalar(1-.5*t),c(l.top.value,.42*(1-.5*t)),c(l.horizon.value,.62*(1-.55*t));let g=qt(o.sunDir.y,.1,t),y=o.sunDir.x,m=o.sunDir.z,p=Math.hypot(y,m)||1,v=Math.sqrt(Math.max(1e-4,1-g*g))/p;this.sunDir.set(y*v,g,m*v).normalize(),l.sunDir.value.copy(this.sunDir),l.cloud.value=it(o.cloud+.25*i,0,1.2);let M=this._tmpF||(this._tmpF=new at("#050a1e")),b=this._tmpG||(this._tmpG=new at("#1b2a4e")),S=this._tmpH||(this._tmpH=new at("#9db8ff"));if(l.top.value.lerp(M,n),l.horizon.value.lerp(b,n),l.sunColor.value.lerp(S,n),l.ground.value.multiplyScalar(1-.7*n),l.night.value=n,this.sun.color.copy(l.sunColor.value),this.sun.intensity=o.sunInt*(1-.72*t)*(1-.78*i)*(1-.88*n),this.hemi.intensity=o.hemiInt*(1-.5*t)*(1-.25*i)*(1-.52*n),this.hemi.color.copy(this._hemiSky||(this._hemiSky=this.hemi.color.clone())).lerp(b,n*.8),this.nightMats){this.nightMats.glow.opacity=it(n*1.15,0,1),this.nightMats.pool.opacity=it(n*.3,0,.3);for(let x of this.facadeMats||[])x.userData.nightU.value=n;for(let x of this.nightMats.visible)x.visible=n>.04}let _=this.atmo.fog.copy(o.fog).lerp(u,t*.75);c(_,.6*(1-.5*t)),_.lerp(b.clone().multiplyScalar(.7),n*.85),this.atmo.fogMul=(1-.5*i)*(1-.25*n),this.atmo.envMul=(1-.55*t)*(1-.4*i)*(1-.75*n),this.atmo.exposure=1+.18*t+.3*n;let T=it(e,0,1);for(let x of[this.roadMat,this.kerbMat,...this.pitMats||[]])x&&(x.color.setRGB(1-.42*T,1-.4*T,1-.34*T),x.roughness=(x===this.kerbMat?.7:.92)-.62*T);return this.atmo}focusShadow(t){let e=this.sunDir,i=140/this.sun.shadow.mapSize.x,n=Math.round(t.x/i)*i,r=Math.round(t.z/i)*i;this.sun.position.set(n+e.x*220,t.y+e.y*220,r+e.z*220),this.sun.target.position.set(n,t.y,r),this.sun.target.updateMatrixWorld()}buildTextures(){let t=this.theme,e=this.tex;e.asphalt=rp(),e.runoff=ap(),e.grass=op(t.grass[0],t.grass[1]),e.gravel=lp(),e.kerb=cp(),e.barrier=dp(),e.tyres=up(),e.crowd=fp(),e.start=hp()}buildTerrain(){let t=this.track,e=this.theme,i=1/0,n=-1/0,r=1/0,a=-1/0;for(let F=0;F<t.N;F+=3)i=Math.min(i,t.x[F]),n=Math.max(n,t.x[F]),r=Math.min(r,t.y[F]),a=Math.max(a,t.y[F]);let o=900;i-=o,n+=o,r-=o,a+=o;let l=30,c=Math.ceil((n-i)/l),h=Math.ceil((a-r)/l),f=new Float32Array((c+1)*(h+1)*3),d=new Float32Array((c+1)*(h+1)*3),u=new Float32Array((c+1)*(h+1)*2),g={i:0,t:0,s:0,d:0,dist:0},y=new at(e.grass[0]),m=new at(e.grass[1]),p=new at("#6d6a5f"),v=new at,M=180*(e.hills??.3),b=!!e.water,S=1/0;for(let F=0;F<t.N;F++)S=Math.min(S,t.z[F]);this.waterLevel=b?S-3.2:null;let _=0;for(let F=0;F<=h;F++)for(let A=0;A<=c;A++,_++){let I=i+A*l,B=r+F*l;t.project(I,B,-1,g);let O=t.at(t.z,g.s),$=g.d>=0?1:-1,z=t.wallDist(g.i,$)+6,G=Me(z,z+(b?220:180),g.dist),rt=Ia(I*.0011,B*.0011,5),et=(Ia(I*.02,B*.02,3)-.5)*2.2,Et;b?Et=this.waterLevel-2.5+(rt-.5)*4:Et=O+M*(rt*1.5-.55)+et;let vt=O-.12+et*Me(z,z+40,g.dist)*.4,Tt=qt(vt,Et,G),X=Math.min(I-i,n-I,B-r,a-B);Tt=qt(-9,Tt,Me(0,500,X)),f[_*3]=I,f[_*3+1]=Tt,f[_*3+2]=-B,u[_*2]=I/40,u[_*2+1]=-B/40;let j=Ia(I*.006,B*.006,3);v.copy(y).lerp(m,j).multiplyScalar(.8+.4*Ia(I*.05,B*.05,2));let ct=it((Tt-O-25)/90,0,.7)*G;v.lerp(p,ct),d[_*3]=v.r,d[_*3+1]=v.g,d[_*3+2]=v.b}let T=new Uint32Array(c*h*6),x=0;for(let F=0;F<h;F++)for(let A=0;A<c;A++){let I=F*(c+1)+A,B=I+1,O=I+c+1,$=O+1;T[x++]=I,T[x++]=B,T[x++]=O,T[x++]=B,T[x++]=$,T[x++]=O}let w=new ne;if(w.setAttribute("position",new Yt(f,3)),w.setAttribute("color",new Yt(d,3)),w.setAttribute("uv",new Yt(u,2)),w.setIndex(new Yt(T,1)),w.computeVertexNormals(),w.attributes.normal.getY(Math.floor(f.length/6))<0){for(let F=0;F<T.length;F+=3){let A=T[F+1];T[F+1]=T[F+2],T[F+2]=A}w.setIndex(new Yt(T,1)),w.computeVertexNormals()}this.tex.grass.repeat.set(1,1);let D=new Ot({map:this.tex.grass,vertexColors:!0,roughness:1,metalness:0}),C=new yt(w,D);if(C.receiveShadow=!0,this.group.add(C),this.terrain=C,this.bounds={minX:i,maxX:n,minY:r,maxY:a},b){let F=new Te(n-i+4e3,a-r+4e3);F.rotateX(-Math.PI/2);let A=new Ot({color:"#1d6a8f",roughness:.12,metalness:.25,transparent:!0,opacity:.92}),I=new yt(F,A);I.position.set((i+n)/2,this.waterLevel,-(r+a)/2),this.group.add(I),this.water=I}}ribbonGeometry(t,e,i,n,{yOff:r=0,vLen:a=10,uRepeat:o=1,vertical:l=null}={}){let c=this.track,h=c.N,f=(e-t+h)%h+1,d=new Float32Array(f*2*3),u=new Float32Array(f*2*2),g=[],y=0;for(let p=0;p<f;p++){let v=(t+p)%h,M=typeof i=="function"?i(v):i[v],b=typeof n=="function"?n(v):n[v],S=c.z[v]+r,_=c.nx[v],T=c.ny[v];d.set([c.x[v]+_*M,S,-(c.y[v]+T*M)],p*6),d.set([c.x[v]+_*b,S,-(c.y[v]+T*b)],p*6+3),p>0&&(y+=c.ds);let x=y/a;if(u.set([0,x,o,x],p*4),p<f-1){let w=p*2;g.push(w,w+2,w+1,w+1,w+2,w+3)}}let m=new ne;return m.setAttribute("position",new Yt(d,3)),m.setAttribute("uv",new Yt(u,2)),m.setIndex(g),m.computeVertexNormals(),m}addRibbons(t,e,{receive:i=!0,order:n=0,polygon:r=0}={}){if(!t.length)return;let a=t.length===1?t[0]:Oe(t),o=new yt(a,e);return o.receiveShadow=i,o.renderOrder=n,this.group.add(o),o}buildRoad(){let t=this.track,e=t.N,i=this.tex,n=new Ot({map:i.asphalt,roughness:.92,metalness:0,color:16777215});this.roadMat=n;let r=mc(e,()=>!0),a=t.wl,o=t.wr;i.asphalt.repeat.set(1,1);let l=a[0]+o[0],c=this.ribbonGeometry(0,e-1,D=>-o[D],D=>a[D],{vLen:7.5,uRepeat:(a[0]+o[0])/7.5}),h=this.ribbonGeometry(e-1,0,D=>-o[D],D=>a[D],{vLen:7.5,uRepeat:l/7.5});this.road=this.addRibbons([c,h],n,{order:0}),this.road.material.polygonOffset=!0,this.road.material.polygonOffsetFactor=1,this.road.material.polygonOffsetUnits=1;let f=new re({color:0,transparent:!0,opacity:.2,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1}),d=t.lineD,u=this.ribbonGeometry(0,e-1,D=>d[D]-1.1,D=>d[D]+1.1,{yOff:.006}),g=this.ribbonGeometry(e-1,0,D=>d[D]-1.1,D=>d[D]+1.1,{yOff:.006}),y=this.addRibbons([u,g],f,{receive:!1,order:1}),m=new re({color:16053488,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}),p=[];for(let[D,C]of[[0,e-1],[e-1,0]])p.push(this.ribbonGeometry(D,C,F=>a[F]-.38,F=>a[F]-.15,{yOff:.01})),p.push(this.ribbonGeometry(D,C,F=>-o[F]+.15,F=>-o[F]+.38,{yOff:.01}));this.addRibbons(p,m,{receive:!1,order:2});let v=new Ot({map:i.kerb,roughness:.7,polygonOffset:!0,polygonOffsetFactor:-3,polygonOffsetUnits:-3});this.kerbMat=v;let M=[];for(let[D,C]of mc(e,F=>t.kl[F]>.1))M.push(this.ribbonGeometry(D,C,F=>a[F],F=>a[F]+t.kl[F],{yOff:.025,vLen:2,uRepeat:1}));for(let[D,C]of mc(e,F=>t.kr[F]>.1))M.push(this.ribbonGeometry(D,C,F=>-o[F]-t.kr[F],F=>-o[F],{yOff:.025,vLen:2,uRepeat:1}));i.kerb.rotation=0,i.kerb.repeat.set(1,1),this.addRibbons(M,v,{order:2});let b=new Ot({map:i.gravel,roughness:1}),S=new Ot({map:i.runoff,roughness:.95}),_=new Ot({map:i.grass,roughness:1}),T=[],x=[],w=[],P=D=>{let C=D>0?t.kl:t.kr,F=D>0?a:o,A=D>0?t.r1l:t.r1r,I=D>0?t.r2l:t.r2r,B=D>0?t.t1l:t.t1r,O=(G,rt)=>D*(F[G]+C[G]+rt),$=(G,rt,et)=>{et(G,rt)};for(let G of[zt.GRAVEL,zt.RUNOFF,zt.GRASS])for(let[rt,et]of mc(e,Et=>A[Et]>.5&&B[Et]===G)){let Et=X=>D>0?O(X,0):O(X,A[X]),vt=X=>D>0?O(X,A[X]):O(X,0),Tt=this.ribbonGeometry(rt,et,Et,vt,{yOff:-.005,vLen:G===zt.RUNOFF?8:6,uRepeat:2});(G===zt.GRAVEL?T:G===zt.RUNOFF?x:w).push(Tt)}let L=G=>D>0?O(G,A[G]):O(G,A[G]+I[G]),z=G=>D>0?O(G,A[G]+I[G]):O(G,A[G]);w.push(this.ribbonGeometry(0,e-1,L,z,{yOff:-.01,vLen:8,uRepeat:2})),w.push(this.ribbonGeometry(e-1,0,L,z,{yOff:-.01,vLen:8,uRepeat:2}))};P(1),P(-1),this.addRibbons(T,b),this.addRibbons(x,S),this.addRibbons(w,_)}buildBarriers(){let t=this.track,e=t.N,i=this.tex,n=pc(new Ot({map:i.barrier,roughness:.85,side:Ae})),r=new Ot({map:i.tyres,roughness:.95,side:Ae}),a=[],o=[],l=(f,d,u,g,y,m,p)=>{let v=(d-f+e)%e+1,M=new Float32Array(v*2*3),b=new Float32Array(v*4),S=[],_=0;for(let x=0;x<v;x++){let w=(f+x)%e,P=u*(t.wallDist(w,u)+g),D=t.z[w],C=t.x[w]+t.nx[w]*P,F=t.y[w]+t.ny[w]*P;if(M.set([C,D-.1,-F,C,D+y,-F],x*6),x>0&&(_+=t.ds),b.set([_/m,0,_/m,1],x*4),x<v-1){let A=x*2;u>0?S.push(A,A+2,A+1,A+1,A+2,A+3):S.push(A,A+1,A+2,A+1,A+3,A+2)}}let T=new ne;T.setAttribute("position",new Yt(M,3)),T.setAttribute("uv",new Yt(b,2)),T.setIndex(S),T.computeVertexNormals(),p.push(T)},c=this.track.def.runoff?.mode==="street";for(let f of[1,-1]){if(f<0&&t.pit){let d=t.pit,u=t.idx(d.start+d.len-d.rampOut),g=t.idx(d.start+d.rampIn);l(u,g,f,.12,c?1.5:1.25,8,a)}else l(0,e-1,f,.12,c?1.5:1.25,8,a),l(e-1,0,f,.12,c?1.5:1.25,8,a);for(let d of t.corners){if(d.maxK<1/420||c||(d.sign>0?-1:1)!==f)continue;let g=(d.start-12+e)%e,y=(d.end+25)%e;l(g,y,f,-.9,1.15,4,o)}}let h=new yt(Oe(a),n);if(h.receiveShadow=!0,h.castShadow=!1,this.group.add(h),o.length){let f=new yt(Oe(o),r);this.group.add(f)}c||this.buildFences()}buildFences(){let t=this.track,e=t.N,i=[],n=[];for(let c of t.corners){if(c.maxK<1/300)continue;let h=c.sign>0?-1:1,f=(c.start-10+e)%e,u=((c.end+20)%e-f+e)%e+1,g=[],y=[];for(let p=0;p<u;p++){let v=(f+p)%e,M=h*(t.wallDist(v,h)+.2),b=t.x[v]+t.nx[v]*M,S=t.y[v]+t.ny[v]*M,_=t.z[v];g.push(b,_+1.2,-S,b,_+5,-S),p%6===0&&i.push([b,_,-S]),p<u-1&&y.push(p*2,p*2+1,p*2+2,p*2+1,p*2+3,p*2+2)}let m=new ne;m.setAttribute("position",new Jt(g,3)),m.setIndex(y),n.push(m)}if(!n.length)return;let r=new yt(Oe(n),new re({color:10134701,transparent:!0,opacity:.22,side:Ae,depthWrite:!1,wireframe:!1}));this.group.add(r);let a=new qe(.07,.07,5,5),o=new ti(a,new Ot({color:7173243,roughness:.6,metalness:.5}),i.length),l=new ee;i.forEach((c,h)=>{l.makeTranslation(c[0],c[1]+2.5,c[2]),o.setMatrixAt(h,l)}),this.group.add(o)}buildPit(){let t=this.track;if(!t.pit)return;let e=t.pit,i=t.idx(e.start),n=t.idx(e.start+e.len),r=L=>t.pitCentre(L*t.ds),a=new Ot({map:this.tex.asphalt,roughness:.9,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1});(this.pitMats||(this.pitMats=[])).push(a);let o=new yt(this.ribbonGeometry(i,n,L=>r(L)-e.width/2,L=>r(L)+e.width/2,{yOff:.012,vLen:7.5,uRepeat:e.width/7.5}),a);o.receiveShadow=!0,o.renderOrder=1,this.group.add(o);let l=new re({color:16765952,polygonOffset:!0,polygonOffsetFactor:-3,polygonOffsetUnits:-3});this.group.add(new yt(this.ribbonGeometry(i,n,L=>r(L)+.05,L=>r(L)+.3,{yOff:.02}),l));let c=new re({color:16777215,polygonOffset:!0,polygonOffsetFactor:-3,polygonOffsetUnits:-3});this.group.add(new yt(Oe([this.ribbonGeometry(i,n,L=>r(L)+e.width/2-.3,L=>r(L)+e.width/2-.12,{yOff:.02}),this.ribbonGeometry(i,n,L=>r(L)-e.width/2+.12,L=>r(L)-e.width/2+.3,{yOff:.02})]),c));let h=e.start+e.rampIn,f=e.start+e.len-e.rampOut,d={},u=new ee,g=new $e,y=new k,m=new k,p=new k(0,1,0),v=Math.floor((f-h)/6),M=new ti(new _e(1,1,1),new Ot({color:13619926,roughness:.8}),v);for(let L=0;L<v;L++){let z=h+L*6+3;t.pointAt(z,t.pitCentre(z)+e.width/2+.35,d),m.set(d.x,d.h+.55,-d.y),g.setFromAxisAngle(p,d.heading),y.set(6.05,1.1,.4),u.compose(m,g,y),M.setMatrixAt(L,u)}M.castShadow=!0,M.receiveShadow=!0,this.group.add(M);let b=14,S=7,_=Math.floor((f-h)/6),T=new ti(new _e(1,1,1),new Ot({color:15132908,roughness:.7}),_);for(let L=0;L<_;L++){let z=h+L*6+3;t.pointAt(z,t.pitCentre(z)-e.width/2-.8-b/2,d),m.set(d.x,d.h+S/2,-d.y),g.setFromAxisAngle(p,d.heading),y.set(6.02,S,b),u.compose(m,g,y),T.setMatrixAt(L,u)}T.castShadow=!0,T.receiveShadow=!0,this.group.add(T);let x=new ti(new _e(1,1,1),new Ot({color:2895926,roughness:.6}),_);for(let L=0;L<_;L++){let z=h+L*6+3;t.pointAt(z,t.pitCentre(z)-e.width/2+1.2,d),m.set(d.x,d.h+4.6,-d.y),g.setFromAxisAngle(p,d.heading),y.set(6.02,.25,4.4),u.compose(m,g,y),x.setMatrixAt(L,u)}x.castShadow=!0,this.group.add(x);let w=(L,z,G,rt,et,Et=0)=>(Et&&L.rotateX(Et),L.rotateY(et),L.translate(z,G,rt),L),P=[],D=[],C=[],F=[],A=document.createElement("canvas");A.width=512,A.height=96*le.length;let I=A.getContext("2d");I.textAlign="center",I.textBaseline="middle",I.font='900 64px "Arial Black", Impact, sans-serif';let B=(L,z,G=1)=>{let rt=new at(z),et=L.attributes.position.count,Et=new Float32Array(et*4);for(let vt=0;vt<et;vt++)Et.set([rt.r,rt.g,rt.b,G],vt*4);return L.setAttribute("color",new Yt(Et,4)),L};le.forEach((L,z)=>{let G=t.pitBox(z);t.pointAt(G.s,t.pitCentre(G.s)-e.width/2-.78,d);let rt=d.heading+Math.PI;P.push(w(new Te(4.8,3.4),d.x,d.h+1.7,-d.y,rt)),D.push(B(w(new Te(4.8,1),d.x,d.h+4.05,-d.y,rt),L.color)),I.fillStyle=L.id==="solace"||L.id==="tempest"||L.id==="aurelian"?"#111":"#fff",I.fillText(L.short.toUpperCase(),256,z*96+50,480);let et=new Te(4.4,.8),Et=et.attributes.uv;for(let vt=0;vt<Et.count;vt++)Et.setY(vt,1-(z+1-Et.getY(vt))/le.length);C.push(w(et,d.x,d.h+4.05,-d.y,rt).translate(Math.sin(rt)*.03,0,Math.cos(rt)*.03)),t.pointAt(G.s,G.d,d),F.push(B(w(new Te(6.4,3.4),d.x,d.h+.03,-d.y,d.heading,-Math.PI/2),L.color,.55))});let O=new os(A);O.colorSpace=si,this.group.add(new yt(Oe(P),new Ot({map:mp(),roughness:.6}))),this.group.add(new yt(Pd(D),new re({vertexColors:!0}))),this.group.add(new yt(Oe(C),new re({map:O,transparent:!0})));let $=new yt(Pd(F),new re({vertexColors:!0,transparent:!0,polygonOffset:!0,polygonOffsetFactor:-4,polygonOffsetUnits:-4,depthWrite:!1}));this.group.add($),this.pitInfo={sA:h,sB:f}}buildStartLine(){let t=this.track,e=t.N,i=0,n=new re({map:this.tex.start,polygonOffset:!0,polygonOffsetFactor:-4,polygonOffsetUnits:-4}),r=this.ribbonGeometry(e-1,1,v=>-t.wr[v],v=>t.wl[v],{yOff:.018,vLen:2.4,uRepeat:(t.wl[0]+t.wr[0])/2.4}),a=new yt(r,n);this.group.add(a);let o=[],l={},c=new re({color:15921906,polygonOffset:!0,polygonOffsetFactor:-3,polygonOffsetUnits:-3}),h=[];for(let v=0;v<20;v++){let M=t.gridSlot(v);for(let[S,_,T,x]of[[0,0,3,.14],[-1.5,2.2,.14,4.4]]){t.pointAt(M.s-_+0,M.d+S,l);let w=new Te(x>=T?x:T,x>=T?T:x);w.rotateX(-Math.PI/2),w.rotateY(l.heading),w.translate(l.x,l.h+.02,-l.y),h.push(w)}t.pointAt(M.s+.3,M.d,l);let b=new Te(.14,3);b.rotateX(-Math.PI/2),b.rotateY(l.heading),b.translate(l.x,l.h+.02,-l.y),h.push(b)}this.group.add(new yt(Oe(h),c));let f=t.pointAt(0,0),d=t.wl[0]+t.wr[0]+5,u=new Le,g=new Ot({color:3159098,roughness:.5,metalness:.6}),y=new yt(new _e(1,1,d+2),g);y.position.set(0,7,0),u.add(y);for(let v of[-1,1]){let M=new yt(new _e(1.2,7.5,1.2),g);M.position.set(0,3.75,v*(d+1)/2),u.add(M)}let m=new yt(new _e(.6,1.1,8.6),new Ot({color:657932,roughness:.4}));m.position.set(-.7,6.2,0),u.add(m),this.startLights=[];for(let v=0;v<5;v++){let M=new yt(new Ji(.42,16,12),new re({color:3343621}));M.position.set(-1.05,6.2,(v-2)*1.6),M.scale.x=.5,u.add(M),this.startLights.push(M)}let p=new yt(new Te(d*.7,1.4),new re({map:Rd(2)}));p.position.set(-.56,7,0),p.rotation.y=-Math.PI/2,u.add(p),u.position.set(f.x,f.h,-f.y),u.rotation.y=f.heading,u.traverse(v=>v.castShadow=!0),this.group.add(u),this.gantry=u}setStartLights(t,e=!1){this.startLights.forEach((i,n)=>{let r=n<t;i.material.color.set(r?16718362:e?657932:3343621)})}buildScenery(){let t=this.track,e=this.theme,i=t.N;this.buildTrees(),this.buildStands(),this.buildBillboards(),e.buildings&&this.buildBuildings()}outsidePoint(t,e,i,n={}){let r=this.track,a=r.idx(t),o=e*(r.wallDist(a,e)+i);return r.pointAt(t,o,n),n}clearOfTrack(t,e,i){let n=this.track,r=n.project(t,e,-1,this._pr||(this._pr={i:0,t:0,s:0,d:0,dist:0})),a=r.d>=0?1:-1;return r.dist>n.wallDist(r.i,a)+i}groundHeight(t,e){let i=this.bounds,n=30,r=Math.ceil((i.maxX-i.minX)/n),a=(t-i.minX)/n,o=(e-i.minY)/n,l=it(Math.floor(a),0,r-1),c=Math.floor(o),h=this.terrain.geometry.attributes.position,f=(y,m)=>h.getY(m*(r+1)+y),d=a-l,u=o-c,g=it(c,0,Math.ceil((i.maxY-i.minY)/n)-1);return qt(qt(f(l,g),f(l+1,g),d),qt(f(l,g+1),f(l+1,g+1),d),u)}buildTrees(){let t=this.theme,e=this.track,i=t.trees?.kind||"broadleaf",n=(t.trees?.density??.4)*(this.quality==="low"?.4:this.quality==="medium"?.7:1);if(n<=.01)return;let r=this.rnd,a,o,l=new at("#4a3524"),c=(_,T)=>{let x=_.attributes.position.count,w=new Float32Array(x*3);for(let P=0;P<x;P++)w.set([T.r,T.g,T.b],P*3);return _.setAttribute("color",new Yt(w,3)),_};if(i==="pine"){a=c(new qe(.25,.4,5,6).translate(0,2.5,0),l);let _=[];for(let T=0;T<5;T++){let x=3.4-T*.55;_.push(c(new Yr(x,3.4,8).translate(0,4.2+T*2.1,0),new at().setHSL(.36,.45,.17+T*.012)))}o=Oe(_),this.treeScale=[1.1,1.9]}else if(i==="palm"){a=c(new qe(.2,.32,9,6).translate(0,4.5,0),new at("#8a6c4a"));let _=[];for(let T=0;T<8;T++){let x=new Te(1.1,5,1,3);x.rotateX(-Math.PI/2+.5),x.translate(0,0,2.4),x.rotateY(T/8*Math.PI*2),x.translate(0,9,0),_.push(c(x,new at("#2f7a3a")))}o=Oe(_),this.treeScale=[.9,1.3]}else{a=c(new qe(.3,.5,4.2,6).translate(0,2.1,0),l);let _=[],T=[[0,6.2,0,3.4],[1.9,5.2,.6,2.5],[-1.7,5.4,-.9,2.6],[.4,7.6,.4,2.4]];for(let[x,w,P,D]of T)_.push(c(new Jr(D,1).translate(x,w,P),new at().setHSL(.27+r()*.04,.45,.24+r()*.05)));o=Oe(_),this.treeScale=[.8,1.5]}let h=Math.floor(2200*n*(e.length/5e3)),f={trunk:new Ot({vertexColors:!0,roughness:1}),leaf:new Ot({vertexColors:!0,roughness:.9,flatShading:i!=="palm",side:i==="palm"?Ae:ji})},d=new ti(a,f.trunk,h),u=new ti(o,f.leaf,h),g=new ee,y=new $e,m=new k,p=new k,v=new at,M=0,b={},S=0;for(;M<h&&S<h*12;){S++;let _=r()*e.length,T=r()<.5?1:-1,w=r()<.7?6+r()*45:20+Math.pow(r(),1.5)*260;if(this.outsidePoint(_,T,w,b),!this.clearOfTrack(b.x,b.y,7))continue;let P=this.groundHeight(b.x,b.y);if(this.waterLevel!=null&&P<this.waterLevel+.6)continue;m.set(b.x,P-.1,-b.y),y.setFromAxisAngle(new k(0,1,0),r()*6.28);let D=this.treeScale[0]+r()*(this.treeScale[1]-this.treeScale[0]);p.set(D*(.85+r()*.3),D*(.85+r()*.4),D*(.85+r()*.3)),g.compose(m,y,p),d.setMatrixAt(M,g),u.setMatrixAt(M,g),v.setHSL(0,0,.8+r()*.4),u.setColorAt(M,v),M++}d.count=u.count=M,d.castShadow=!1,u.castShadow=!1,this.group.add(d,u)}buildStands(){let t=this.track,i=this.theme.stands??6;if(!i)return;let n=this.tex.crowd.clone();n.needsUpdate=!0;let r=new _e(1,1,1),a=r.attributes.uv;for(let v=0;v<a.count;v++)a.setXY(v,a.getX(v)*4,a.getY(v));let o={},l=[{s:t.length-70,side:1,len:240},{s:200,side:1,len:160}],c=[...t.corners].sort((v,M)=>M.maxK-v.maxK);for(let v of c){if(l.length>=i)break;l.push({s:v.sApex,side:v.sign>0?1:-1,len:90+this.rnd()*60})}for(;l.length<i;)l.push({s:this.rnd()*t.length,side:this.rnd()<.5?1:-1,len:100});let h=[],f=[],d=[],u=.9,g=1.1,y=7,m=4;for(let v of l){let M=Math.floor(v.len/m);for(let b=0;b<M;b++){let S=v.s-v.len/2+b*m+m/2;if(this.outsidePoint(S,v.side,8+y*g*.5,o),!this.clearOfTrack(o.x,o.y,4))continue;let _=Math.max(this.groundHeight(o.x,o.y),t.at(t.z,S)-.1);for(let T=0;T<y;T++)this.outsidePoint(S,v.side,8+(T+.5)*g,o),h.push([o.x,_+T*u+u/2,-o.y,o.heading,m,u,g]);this.outsidePoint(S,v.side,8+y*g/2,o),f.push([o.x,_+.3,-o.y,o.heading,m,.6,g*y]),b%2===0&&d.push([o.x,_+y*u+3.4,-o.y,o.heading,m*2,.25,g*(y+2)])}}let p=(v,M,b)=>{if(!v.length)return;let S=new ti(M,b,v.length),_=new ee,T=new $e,x=new k,w=new k;v.forEach((P,D)=>{x.set(P[0],P[1],P[2]),T.setFromAxisAngle(new k(0,1,0),P[3]),w.set(P[4],P[5],P[6]),_.compose(x,T,w),S.setMatrixAt(D,_)}),S.castShadow=!1,S.receiveShadow=!0,this.group.add(S)};p(h,r,new Ot({map:n,roughness:.95})),p(f,new _e(1,1,1),new Ot({color:10132899,roughness:.9})),p(d,new _e(1,1,1),new Ot({color:15264494,roughness:.6,metalness:.2}))}buildBillboards(){let t=this.track,e=Math.floor(t.length/450),i={},n=new Map,r=[];for(let l=0;l<e;l++){let c=(l+.5)*(t.length/e)+this.rnd()*60,h=this.rnd()<.5?1:-1;if(this.outsidePoint(c,h,4.5,i),!this.clearOfTrack(i.x,i.y,3))continue;let f=Math.max(this.groundHeight(i.x,i.y),t.at(t.z,c)),d=i.heading+(h>0?0:Math.PI),u=l%6,g=new Te(14,3.5);g.translate(0,4.6,0),g.rotateY(d),g.translate(i.x,f,-i.y),n.has(u)||n.set(u,[]),n.get(u).push(g);for(let y of[-5.5,5.5])r.push([i.x+Math.cos(d)*y,f+2.5,-i.y-Math.sin(d)*y])}this.billTex||(this.billTex=[0,1,2,3,4,5].map(l=>Rd(l)));for(let[l,c]of n)this.group.add(new yt(Oe(c),pc(new re({map:this.billTex[l],side:Ae}),.8)));let a=new ti(new qe(.12,.12,5,6),new Ot({color:5593696,roughness:.6,metalness:.5}),r.length),o=new ee;r.forEach((l,c)=>{o.makeTranslation(l[0],l[1],l[2]),a.setMatrixAt(c,o)}),this.group.add(a)}buildBuildings(){let t=this.track,e={},i=[3,5,8,12,15].map((f,d)=>Zv(new Ot({map:pp(f,["#e8dcc6","#d9c7a7","#f1ece0","#c9b8a0","#e3d0cf"][d]),roughness:.85})));this.facadeMats=i;let n=i.map(()=>[]),r=[],a=new ee,o=new $e,l=new k,c=new k,h=0;for(;h<t.length;){for(let f of[1,-1]){if(this.rnd()<.2)continue;let d=4+this.rnd()*18;if(this.outsidePoint(h,f,d+3,e),!this.clearOfTrack(e.x,e.y,d))continue;let u=18+this.rnd()*22,g=16+this.rnd()*14,y=14+this.rnd()*38;this.outsidePoint(h,f,d+3+g/2,e);let m=Math.max(this.groundHeight(e.x,e.y),t.at(t.z,h)-.2),p=new _e(u,y,g),v=p.attributes.uv,M=Math.max(1,Math.round(u/16)),b=Math.max(1,Math.round(y/20));for(let _=0;_<v.count;_++)v.setXY(_,v.getX(_)*M,v.getY(_)*b);o.setFromAxisAngle(new k(0,1,0),e.heading),a.compose(l.set(e.x,m+y/2-.3,-e.y),o,c.set(1,1,1)),p.applyMatrix4(a),n[Math.floor(this.rnd()*i.length)].push(p);let S=new _e(u+1,1.2,g+1);a.compose(l.set(e.x,m+y+.3,-e.y),o,c.set(1,1,1)),S.applyMatrix4(a),r.push(S)}h+=22+this.rnd()*30}n.forEach((f,d)=>{f.length&&this.group.add(new yt(Oe(f),i[d]))}),r.length&&this.group.add(new yt(Oe(r),new Ot({color:9390645,roughness:.9})))}buildBrakeBoards(t){let e=this.track,i=e.N,n=t.v,r={},a=0,o=[];for(;a<i;){let f=a;for(;f+1<a+i&&n[(f+1)%i]<n[f%i]-.02;)f++;if(f-a>8){let d=n[a%i],u=n[f%i];d-u>14&&o.push({start:a%i,end:f%i,drop:d-u})}a=f+1}let l=[200,150,100,50],c=l.map(()=>[]),h=[];for(let f of o){let d=f.end*e.ds;for(let u=0;u<4;u++){let g=d-l[u],y=e.idx(g),m=-Math.min(e.wr[y]+e.kr[y]+1.6,e.wallDist(y,-1)-.5);e.pointAt(g,m,r);let p=new Te(.9,.9);p.translate(0,1.15,0),p.rotateY(r.heading-Math.PI/2),p.translate(r.x,r.h,-r.y),c[u].push(p),h.push([r.x,r.h+.55,-r.y])}}if(c.forEach((f,d)=>{if(!f.length)return;let u=Cd(String(l[d]),"#111","#f4f4f0",128,128);this.group.add(new yt(Oe(f),pc(new re({map:u,side:Ae}),.8)))}),h.length){let f=new ti(new qe(.03,.03,1.1,5),new Ot({color:7829367}),h.length),d=new ee;h.forEach((u,g)=>{d.makeTranslation(u[0],u[1],u[2]),f.setMatrixAt(g,d)}),this.group.add(f)}this.brakeZones=o}buildFloodlights(){let t=this.track,e=t.def.runoff&&t.def.runoff.mode==="street"?55:80,i=Math.floor(t.length/e),n={},r={},a=[],o=[],l=[];for(let m=0;m<i;m++){let p=(m+.5)*t.length/i,v=m%2?1:-1;if(this.outsidePoint(p,v,3.4,n),!this.clearOfTrack(n.x,n.y,1.5))continue;let M=Math.max(this.groundHeight(n.x,n.y),t.at(t.z,p));a.push([n.x,M+6,-n.y]),o.push(n.x,M+12.3,-n.y),t.pointAt(p,v*-1.5,r),l.push([r.x,r.h+.05,-r.y])}if(!a.length)return;let c=new ti(new qe(.1,.16,12,6),new Ot({color:4869974,roughness:.6,metalness:.5}),a.length),h=new ee;a.forEach((m,p)=>{h.makeTranslation(m[0],m[1],m[2]),c.setMatrixAt(p,h)});let f=new Zs({size:7,sizeAttenuation:!0,map:Pa(),color:new at(16773327).multiplyScalar(3.5),transparent:!0,opacity:0,blending:tn,depthWrite:!1}),d=new as(new ne().setAttribute("position",new Jt(o,3)),f);d.frustumCulled=!1;let u=new re({map:Pa(),color:16773334,transparent:!0,opacity:0,blending:tn,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-3,polygonOffsetUnits:-3}),g=new Te(e*1.1,e*1.1);g.rotateX(-Math.PI/2);let y=new ti(g,u,l.length);l.forEach((m,p)=>{h.makeTranslation(m[0],m[1],m[2]),y.setMatrixAt(p,h)}),y.frustumCulled=!1,c.visible=d.visible=y.visible=!1,this.group.add(c,d,y),this.nightMats={glow:f,pool:u,visible:[c,d,y]}}buildDrsMarkers(){let t=this.track;if(!t.drs||!t.drs.length)return;let e={},i={detect:[],start:[]},n={detect:[],start:[],end:[]},r=[];for(let o of t.drs)for(let[l,c]of[["detect",o.detect],["start",o.start],["end",o.end]]){let h=ae(c,t.length),f=t.idx(h);if(l!=="end"){t.pointAt(h,(t.wl[f]-t.wr[f])/2,e);let g=new Te(1.1,t.wl[f]+t.wr[f]);g.rotateX(-Math.PI/2),g.rotateY(e.heading),g.translate(e.x,e.h+.035,-e.y),i[l].push(g)}let d=Math.min(t.wl[f]+t.kl[f]+1.8,t.wallDist(f,1)-.6);t.pointAt(h,d,e);let u=new Te(l==="detect"?2.6:1.7,.75);u.translate(0,1.55,0),u.rotateY(e.heading-Math.PI/2),u.translate(e.x,e.h,-e.y),n[l].push(u),r.push([e.x,e.h+.78,-e.y])}for(let o of["detect","start"]){if(!i[o].length)continue;let l=new re({color:o==="detect"?10148095:3661962,transparent:!0,opacity:.85,polygonOffset:!0,polygonOffsetFactor:-4,polygonOffsetUnits:-4,depthWrite:!1});this.group.add(new yt(Pd(i[o]),l))}let a={detect:["DRS DETECTION","#0b1b2a","#9ad8ff"],start:["DRS","#04210f","#37e08a"],end:["DRS END","#2a0a0a","#ff6a5c"]};for(let o of["detect","start","end"]){if(!n[o].length)continue;let[l,c,h]=a[o],f=Cd(l,c,h,256,96);this.group.add(new yt(Oe(n[o]),pc(new re({map:f,side:Ae}),.7)))}if(r.length){let o=new ti(new qe(.035,.035,1.6,5),new Ot({color:7829367}),r.length),l=new ee;r.forEach((c,h)=>{l.makeTranslation(c[0],c[1],c[2]),o.setMatrixAt(h,l)}),this.group.add(o)}}buildMountains(){let t=this.theme,e=this.bounds,i=(e.minX+e.maxX)/2,n=(e.minY+e.maxY)/2,r=(e.maxX-e.minX)/2,a=(e.maxY-e.minY)/2,o=220,l=[],c=[],h=[],f=new at(t.fog),d=new at(t.grass[0]).multiplyScalar(.55),u=new at("#8e939a"),g=160+520*(t.hills??.3),y=[0,700,2200];for(let v=0;v<3;v++)for(let M=0;M<=o;M++){let b=M/o*Math.PI*2,S=Math.cos(b),_=Math.sin(b),x=Math.min(r/Math.max(Math.abs(S),1e-6),a/Math.max(Math.abs(_),1e-6))+y[v]-40,w=Ia(S*2.2+5,_*2.2+5,5),P=v===0?-9:v===1?g*(.12+w*.8):g*(.25+w*1.5);l.push(i+S*x,P,-(n+_*x));let D=it(P/g,0,1),C=new at().copy(d).lerp(u,D*.9).lerp(f,.25+.2*v);c.push(C.r,C.g,C.b)}for(let v=0;v<2;v++)for(let M=0;M<o;M++){let b=v*(o+1)+M,S=b+1,_=b+o+1,T=_+1;h.push(b,_,S,S,_,T)}let m=new ne;m.setAttribute("position",new Jt(l,3)),m.setAttribute("color",new Jt(c,3)),m.setIndex(h),m.computeVertexNormals();let p=new yt(m,new Ot({vertexColors:!0,roughness:1,side:Ae,flatShading:!0}));this.group.add(p)}update(t,e){this.sky.material.uniforms.time.value=e,this.water&&(this.water.position.y=this.waterLevel+Math.sin(e*.5)*.05)}};var ur=.36;function Kv(s,t){let e=Math.cos(s),i=Math.sin(s);return[Math.sign(e)*Math.pow(Math.abs(e),2/t),Math.sign(i)*Math.pow(Math.abs(i),2/t)]}function yc(s,t=18,e=3.4){let i=[],n=[],r=s.length;for(let o of s){let l=(o.yt-o.yb)/2,c=(o.yt+o.yb)/2,h=o.cz||0;for(let f=0;f<t;f++){let[d,u]=Kv(f/t*Math.PI*2,o.n||e);i.push(o.x,c+u*l,h+d*o.w)}}for(let o=0;o<r-1;o++)for(let l=0;l<t;l++){let c=o*t+l,h=o*t+(l+1)%t,f=(o+1)*t+l,d=(o+1)*t+(l+1)%t;n.push(c,f,h,h,f,d)}for(let[o,l]of[[0,!1],[r-1,!0]]){let c=s[o],h=i.length/3;i.push(c.x,(c.yb+c.yt)/2,c.cz||0);for(let f=0;f<t;f++){let d=o*t+f,u=o*t+(f+1)%t;l?n.push(h,d,u):n.push(h,u,d)}}let a=new ne;return a.setAttribute("position",new Jt(i,3)),a.setIndex(n),a.computeVertexNormals(),Jv(a)}function Jv(s){s.computeBoundingBox();let t=new k;s.boundingBox.getCenter(t);let e=s.attributes.position,i=s.index,n=new k,r=new k,a=new k,o=new k,l=new k,c=0;for(let h=0;h<i.count;h+=3)n.fromBufferAttribute(e,i.getX(h)),r.fromBufferAttribute(e,i.getX(h+1)),a.fromBufferAttribute(e,i.getX(h+2)),o.subVectors(r,n).cross(l.subVectors(a,n)),l.copy(n).add(r).add(a).multiplyScalar(1/3).sub(t),c+=Math.sign(o.dot(l));if(c<0){let h=i.array;for(let f=0;f<h.length;f+=3){let d=h[f+1];h[f+1]=h[f+2],h[f+2]=d}s.computeVertexNormals()}return s}function Zn(s){for(let t of s)t.deleteAttribute("uv");return Oe(s)}function ni(s,t,e,i,n,r){let a=new _e(t-s,i-e,r-n);return a.translate((s+t)/2,(e+i)/2,(n+r)/2),a}function fr(s,t,e,i,n,r){let a=new _e(e,n,i*2);return a.rotateZ(r),a.translate(s,t,0),a}function Kn(s,t){let e=s.attributes.position,i=new Float32Array(e.count*3),n=new at;for(let r=0;r<e.count;r++)t(n,e.getX(r),e.getY(r),e.getZ(r)),i[r*3]=n.r,i[r*3+1]=n.g,i[r*3+2]=n.b;return s.setAttribute("color",new Yt(i,3)),s}var xp=s=>t=>t.set(s);function xc(s,t){let e=new at(s.color),i=new at(s.accent),n=new at("#14161a");return(r,a,o,l)=>{r.copy(e);let c=Math.abs(l);switch(s.livery){case"stripe":c<.075&&o>.3&&r.copy(i);break;case"split":t==="side"&&o<.3&&r.copy(i),t==="nose"&&a>2.35&&r.copy(i),t==="cover"&&c<.05&&r.copy(i);break;case"chevron":{let h=(a*1.7+c*2.4)%1;(t==="side"||t==="mono")&&h>.88&&r.copy(i),t==="nose"&&a>2.75&&r.copy(i);break}}t==="nose"&&a>2.88&&r.copy(n)}}function jv(s){let t=new at(s);return t.r*.299+t.g*.587+t.b*.114>.6?"#111":"#fff"}var pi={};function Qv(){if(pi.ready)return pi;pi.carbon=new Ot({color:1382171,roughness:.42,metalness:.45}),pi.tyre=new Ot({color:1381653,roughness:.92,metalness:0}),pi.rim=new Ot({color:2829876,roughness:.35,metalness:.85}),pi.metal=new Ot({color:5593698,roughness:.4,metalness:.8}),pi.helmetVisor=new Ot({color:723728,roughness:.1,metalness:.6});for(let s of[pi.carbon,pi.tyre,pi.rim,pi.metal,pi.helmetVisor])s.userData.shared=!0;return pi.tyreGeoF=null,pi.ready=!0,pi}var Id={calm:!1},_s=class{constructor(t,e,i={}){let n=Qv();this.team=t,this.info=e,this.group=new Le,this.model=new Le,this.group.add(this.model),this.ghost=!!i.ghost;let r=i.detail!=="low";this.lodFar=!1;let a=[],o=[],l=[],c=yc([{x:3,w:.03,yb:.16,yt:.2},{x:2.9,w:.09,yb:.15,yt:.25},{x:2.3,w:.13,yb:.14,yt:.33},{x:1.7,w:.2,yb:.13,yt:.43},{x:1.25,w:.27,yb:.12,yt:.52}],16);a.push(Kn(c,xc(t,"nose")));let h=yc([{x:1.25,w:.27,yb:.12,yt:.52},{x:.7,w:.33,yb:.1,yt:.58},{x:.15,w:.35,yb:.09,yt:.62},{x:-.35,w:.33,yb:.09,yt:.6}],18);a.push(Kn(h,xc(t,"mono")));let f=yc([{x:-.3,w:.28,yb:.2,yt:.78},{x:-.7,w:.26,yb:.2,yt:.95},{x:-1.2,w:.2,yb:.2,yt:.78},{x:-1.8,w:.12,yb:.2,yt:.52},{x:-2.25,w:.07,yb:.2,yt:.4}],16);a.push(Kn(f,xc(t,"cover")));for(let L of[-1,1]){let z=yc([{x:.95,w:.2,yb:.12,yt:.46,cz:L*.5},{x:.5,w:.27,yb:.1,yt:.52,cz:L*.52},{x:-.3,w:.26,yb:.1,yt:.5,cz:L*.5},{x:-1,w:.18,yb:.1,yt:.4,cz:L*.4},{x:-1.75,w:.08,yb:.12,yt:.3,cz:L*.26}],14);l.push({geo:Kn(z,xc(t,"side")),side:L}),o.push(ni(.9,1,.2,.42,L*.5-.17,L*.5+.17))}o.push(ni(-.32,-.2,.7,.9,-.1,.1));let d=new _e(1.3,.34,.03);d.translate(-1.5,.62,0),a.push(Kn(d,xp(t.color))),o.push(ni(-1.95,1.7,.05,.1,-.8,.8)),o.push(ni(-2.35,-1.8,.1,.26,-.5,.5));let u=ni(1.6,2.1,.06,.1,-.7,.7);o.push(u),o.push(ni(-.05,.55,.6,.66,-.26,.26)),a.push(Kn(ni(-.55,-.25,.6,.78,-.24,.24),xp("#1d1f24")));let g=[],y=(L,z=.025)=>new jr(new Ks(L.map(G=>new k(...G))),12,z,6,!1);g.push(y([[.7,.58,0],[.55,.75,0],[.3,.9,0]],.03)),g.push(y([[.3,.9,0],[.05,.9,.18],[-.3,.74,.3]],.026)),g.push(y([[.3,.9,0],[.05,.9,-.18],[-.3,.74,-.3]],.026)),o.push(...g);for(let L of[-1,1])o.push(ni(.75,.9,.62,.72,L*.58,L*.76)),o.push(ni(.78,.8,.55,.62,L*.4,L*.42));let m=new Ot({vertexColors:!0,roughness:.4,metalness:.4}),p=new at(t.accent),v=new at("#15171b"),M=(L,z)=>Kn(L,G=>G.copy(z)),b=L=>{let z=[fr(2.92,.095,.42,.97,.025,.04),fr(2.72,.14,.3,.92,.02,.12),fr(2.55,.19,.24,.84,.02,.2)].map(G=>(G.scale(1,1,.5),G.translate(0,0,L*.47*.97),M(G,v)));return z.push(M(ni(2.52,3.1,.07,.3,L*.96,L*1),p)),new yt(Zn(z),m)};this.frontWing=new Le,this.frontWingL=b(-1),this.frontWingR=b(1),this.frontWing.add(this.frontWingL,this.frontWingR),o.push(ni(2.35,2.55,.13,.22,-.05,.05),ni(2.55,2.7,.1,.2,-.18,-.12),ni(2.55,2.7,.1,.2,.12,.18)),this.rearWing=new Le;let S=[M(fr(-2.3,.78,.4,.53,.025,-.12),v),M(fr(-2.38,.5,.3,.5,.02,.08),v)];for(let L of[-1,1])S.push(M(ni(-2.58,-2,.42,.98,L*.53,L*.56),p));this.rearWing.add(new yt(Zn(S),m)),this.drsPivot=new Le,this.drsPivot.position.set(-2.48,.9,0),this.drsPivot.add(new yt(M(fr(.22,0,.34,.51,.022,-.08),v),m)),this.rearWing.add(this.drsPivot),o.push(ni(-2.2,-2.1,.5,.82,-.05,.05),ni(-2.45,-2.38,.46,.5,-.4,.4));let _=1.962,T=-1.638;for(let[L,z,G]of[[_,1,.8],[_,-1,.8],[T,1,.775],[T,-1,.775]])o.push(ni(L+.12,L+.22,.24,.27,Math.min(z*.25,z*G),Math.max(z*.25,z*G))),o.push(ni(L-.22,L-.12,.2,.23,Math.min(z*.25,z*G),Math.max(z*.25,z*G)));let x=new Qr({vertexColors:!0,roughness:.28,metalness:.35,clearcoat:1,clearcoatRoughness:.08});this.bodyMat=x,this.model.add(new yt(Zn(a),x),new yt(Zn(o),n.carbon),this.frontWing,this.rearWing),this.pods=l.map(({geo:L,side:z})=>{let G=Zn([L]),rt=new yt(G,x);return rt.userData={base:G.attributes.position.array.slice(),side:z,d:0},this.model.add(rt),rt});let w=new at().setHSL(e.number*53%360/360,.8,.5),P=new Ji(.15,12,9);P.scale(1.15,1,.95),P.translate(.18,.66,0),this.helmet=new yt(Kn(P,L=>L.copy(w)),new Ot({vertexColors:!0,roughness:.25,metalness:.2})),this.model.add(this.helmet);let D=gp(e.number,jv(t.color)),C=new re({map:D,transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2}),F=[];for(let L of[-1,1]){let z=new Te(.26,.26);L<0&&z.rotateY(Math.PI),z.translate(-.6,.62,L*.285),F.push(z)}let A=new Te(.3,.3);A.rotateX(-Math.PI/2),A.rotateY(-Math.PI/2),A.translate(1.7,.455,0),F.push(A),this.decals=new yt(Oe(F),C),this.model.add(this.decals),this.brakeLight=new yt(new _e(.06,.18,.1),new re({color:4194304})),this.brakeLight.position.set(-2.4,.33,0),this.model.add(this.brakeLight),this.wheels=[];let I=new re({color:ii.medium.color});this.compoundMat=I;let B=r?28:14,O=new Ot({vertexColors:!0,roughness:.75,metalness:.25}),$=(L,z)=>{let G=L?.34:.44,rt=[],et=new qe(ur,ur,G,B,1);et.rotateX(Math.PI/2),rt.push(M(et,new at("#141414")));let Et=new qe(.235,.235,G*.92,14);Et.rotateX(Math.PI/2),rt.push(M(Et,new at("#3a3e46")));let vt=[];for(let St of[-1,1]){let Zt=new Un(.295,.335,B),kt=new yn(.2,12);St<0&&(Zt.rotateY(Math.PI),kt.rotateY(Math.PI)),Zt.translate(0,0,St*(G/2+.002)),kt.translate(0,0,St*(G/2+.004)),vt.push(Zt),rt.push(M(kt,new at("#1a1c21")))}let Tt=new re({color:16734736,transparent:!0,opacity:0,depthWrite:!1,blending:tn,side:Ae}),X=[];for(let St of[-1,1]){let Zt=new Un(.07,.2,18);St<0&&Zt.rotateY(Math.PI),Zt.translate(0,0,St*(G/2+.008)),X.push(Zt)}let j=new Le,ct=new Le;ct.add(new yt(Zn(rt),O));let Mt=new yt(Zn(X),Tt);Mt.visible=!1,ct.add(Mt);let dt=Zn(vt);return ct.add(new yt(dt,I)),j.add(ct),this.model.add(j),{assembly:j,spin:ct,front:L,left:z,glow:Mt,glowMat:Tt}};this.wheelDefs=[$(!0,!0),$(!0,!1),$(!1,!0),$(!1,!1)],this.wheelFront=[this.wheelDefs[0],this.wheelDefs[1]],this.spinAngle=[0,0,0,0],this.detailMeshes=[this.helmet,this.decals,this.brakeLight],this.group.traverse(L=>{L.isMesh&&(L.castShadow=!this.ghost,L.receiveShadow=!1)});for(let L of this.wheelDefs)L.glow.castShadow=!1;this.ghost&&this.makeGhost(),this.layoutWheels(1.962,1.638,1.6,1.55,3.6,0),this.pitchSmooth=0,this.rollSmooth=0}makeGhost(){this.group.traverse(t=>{t.isMesh&&(t.material=t.material.clone(),t.material.transparent=!0,t.material.opacity=.35,t.material.depthWrite=!1)})}setCompound(t){this.compoundMat.color.set(t.color)}update(t,e,i,n){let r=t.spec,a=qt(t.px,t.x,e),o=qt(t.py,t.y,e),l=t.theta-t.ptheta;l>Math.PI&&(l-=2*Math.PI),l<-Math.PI&&(l+=2*Math.PI);let c=t.ptheta+l*e,h=Math.atan(t.trackSlope*Math.cos(t.theta-t.trackHeading));this.group.position.set(a,t.trackH,-o),this.group.rotation.set(0,c,0),this.pitchSmooth=qt(this.pitchSmooth,-t.pitch+h,it(i*6,0,1)),this.rollSmooth=qt(this.rollSmooth,-t.roll,it(i*6,0,1)),this.model.rotation.order="YZX",this.model.rotation.set(this.rollSmooth,0,this.pitchSmooth),this.layoutWheels(t.a,t.b,r.trackF,r.trackR,r.wheelbase,t.steer);for(let m=0;m<4;m++){this.spinAngle[m]-=t.omega[m]*i%(Math.PI*2),this.wheelDefs[m].spin.rotation.z=this.spinAngle[m];let p=this.wheelDefs[m],v=t.brakeTemp?t.brakeTemp[m]:0,M=it((v-450)/550,0,1);p.glow.visible!==M>.02&&(p.glow.visible=M>.02),M>.02&&(p.glowMat.opacity=Math.min(1,M*1.25),p.glowMat.color.setRGB(3.2,(.32+.5*M)*3.2,(.06+.55*M*M)*3.2))}this.drsPivot.rotation.z=t.drsPos*.55;let f=t.brake>.08;this.harvT=(this.harvT||0)+i;let d=t.harvesting&&!f&&!Id.calm?Math.floor(this.harvT*9)%2?16752656:16719888:null;this.brakeLight.material.color.setHex(d??(f?16715792:t.harvesting?16738832:4194304));let u=t.damageFront||0,g=t.damageRear||0;this.frontWingR.visible=u<.85,this.frontWingL.visible=u<.97,this.frontWingL.rotation.z=-u*.25,this.frontWingL.rotation.x=u*.2,this.frontWingL.position.y=-u*.04,this.frontWingR.rotation.z=-u*.12,this.frontWingR.rotation.x=-u*.3,this.frontWingR.position.y=-u*.06,this.rearWing.visible=g<.92,this.rearWing.rotation.z=g*.12,this.rearWing.rotation.x=g*.12;let y=[t.damageSideR||0,t.damageSideL||0];for(let m=0;m<2;m++){let p=this.pods[m];p&&Math.abs(y[m]-p.userData.d)>.03&&this.crumple(p,y[m])}}crumple(t,e){let{base:i,side:n}=t.userData,r=t.geometry.attributes.position,a=r.array,o=(l,c)=>{let h=Math.sin(l*127.1+c*311.7+n*17.3)*43758.5453;return h-Math.floor(h)};for(let l=0;l<a.length;l+=3){let c=i[l],h=i[l+1],f=i[l+2],d=Math.max(0,(f*n-.18)/.2),u=.4+.6*o(Math.round(c*4),Math.round(h*8)),g=e*d*u*.17;a[l]=c+(o(h*9,c*3)-.5)*e*.05*d,a[l+1]=h-e*.05*d*u,a[l+2]=f-n*g}r.needsUpdate=!0,t.geometry.computeVertexNormals(),t.userData.d=e}setShadow(t){this.shadowOn!==t&&(this.shadowOn=t,this.group.traverse(e=>{e.isMesh&&(e.castShadow=t)}))}setLod(t){if(t!==this.lodFar){this.lodFar=t;for(let e of this.detailMeshes)e.visible=!t}}layoutWheels(t,e,i,n,r,a){let o=this.wheelDefs,l=[[t,ur,-i/2],[t,ur,i/2],[-e,ur,-n/2],[-e,ur,n/2]],c=Math.tan(a),h=Math.atan2(r*c,r-i/2*c),f=Math.atan2(r*c,r+i/2*c);for(let d=0;d<4;d++)o[d].assembly.position.set(l[d][0],l[d][1],l[d][2]),o[d].assembly.rotation.y=d===0?h:d===1?f:0}setPose(t,e,i,n,r=0,a=0){this.group.position.set(t,n,-e),this.group.rotation.set(0,i,0),this.layoutWheels(1.962,1.638,1.6,1.55,3.6,r);for(let o=0;o<4;o++)this.wheelDefs[o].spin.rotation.z=a}dispose(){let t=new Set;this.group.traverse(e=>{if(e.isMesh){e.geometry.dispose();for(let i of Array.isArray(e.material)?e.material:[e.material])if(!(!i||t.has(i))){t.add(i);for(let n of["map","emissiveMap","alphaMap"])i[n]&&i[n].dispose&&i[n].dispose();i.userData&&i.userData.shared||i.dispose()}}})}};var vc=class{constructor(t){this.group=new Le;let e=new Ot({color:t.color,roughness:.8}),i=new Ot({color:t.accent,roughness:.8}),n=new Ot({color:15921906,roughness:.4}),r=new Xr(.2,.9,3,8),a=new Ji(.16,10,8),o=new qe(.05,.05,.5,6);o.rotateZ(Math.PI/2),this.people=[];let l=(f,d,u,g)=>{let y=new Le,m=new yt(r,g==="wheel"?e:i);m.position.y=.75;let p=new yt(a,n);if(p.position.y=1.5,y.add(m,p),g==="wheel"){let M=new yt(o,new Ot({color:3356736,metalness:.7,roughness:.4}));M.position.set(.3,.8,0),y.add(M)}y.position.set(f,0,d),y.rotation.y=u,this.group.add(y);let v={g:y,b:m,h:p,role:g,x:f,z:d,face:u,phase:Math.random()*6};return this.people.push(v),v};for(let[f,d]of[[1.96,-1.55],[1.96,1.55],[-1.64,-1.55],[-1.64,1.55]])l(f,d,d<0?-Math.PI/2:Math.PI/2,"wheel");l(3.5,0,Math.PI,"jack"),l(-3,0,0,"jack");let c=new Le,h=new yt(new qe(.02,.02,1.8,5),new Ot({color:7829367}));h.position.y=.9,this.disc=new yt(new yn(.28,20),new re({color:16719904,side:Ae})),this.disc.position.y=1.9,c.add(h,this.disc),c.position.set(4.6,0,-.9),this.group.add(c),this.lollipop=c}dispose(){this.group.traverse(t=>{t.geometry&&t.geometry.dispose(),t.material&&(Array.isArray(t.material)?t.material:[t.material]).forEach(e=>e.dispose())})}update(t,e){for(let i of this.people){let n=e<.82,r=Math.sin(t*12+i.phase)*.03;i.role==="wheel"?(i.b.position.y=n?.55+r:.75,i.b.rotation.z=0,i.h.position.y=n?1.25+r:1.5,i.g.position.x=i.x+(n?0:.05)):(i.b.position.y=.75+(n?Math.sin(t*6+i.phase)*.05:0),i.h.position.y=1.5)}this.disc.material.color.set(e>.85?2284885:16719904),this.lollipop.position.y=(e>.85,0)}};var La=150,_c=1;function t_(s){if(s<.35)return[.15,.95,.3];if(s<.65){let t=(s-.35)/.3;return[.15+.85*t,.95-.1*t,.3-.2*t]}return s<.95?[1,.85-.72*((s-.65)/.3),.1]:[1,.13,.1]}function e_(s){if(s<.35)return[.1,.5,1];if(s<.65){let t=(s-.35)/.3;return[.1+.9*t,.5+.4*t,1-.9*t]}if(s<.95){let t=(s-.65)/.3;return[1,.9-.8*t,.1+.8*t]}return[1,.1,.9]}var bc=class{constructor(t,e){this.track=t,this.profile=e;let i=La;this.pos=new Float32Array(i*2*3),this.col=new Float32Array(i*2*4);let n=[];for(let a=0;a<i-1;a++)n.push(a*2,a*2+2,a*2+1,a*2+1,a*2+2,a*2+3);let r=new ne;this.attrPos=new Yt(this.pos,3).setUsage(qn),this.attrCol=new Yt(this.col,4).setUsage(qn),r.setAttribute("position",this.attrPos),r.setAttribute("color",this.attrCol),r.setIndex(n),this.mesh=new yt(r,new re({vertexColors:!0,transparent:!0,depthWrite:!1,side:Ae,polygonOffset:!0,polygonOffsetFactor:-5,polygonOffsetUnits:-5})),this.mesh.frustumCulled=!1,this.mesh.renderOrder=4,this.smooth=new Float32Array(i),this.margin=.96,this.cbSafe=!1}setVisible(t){this.mesh.visible=t}update(t){if(!this.mesh.visible)return;let e=this.track,i=e.N,n=e.ds,r=Math.max(t.speed,3),a=this.profile.vBrake,o=this.profile.env,l=Math.max(15,o.brakeDecel(r,.9)),c=t.s,h=Math.floor(c/n)+1,f=h*n-c,d=this.smooth;for(let y=0;y<La;y++){let m=(h+y)%i,p=Math.max(f+y*n,1),v=a[m]*this.margin;d[y]=r>v?(r*r-v*v)/(2*Math.max(p-3,1))/l:0}let u=this.pos,g=this.col;for(let y=0;y<La;y++){let m=(h+y)%i,p=e.lineD[m],v=e.z[m]+.05;u[y*6]=e.x[m]+e.nx[m]*(p-_c),u[y*6+1]=v,u[y*6+2]=-(e.y[m]+e.ny[m]*(p-_c)),u[y*6+3]=e.x[m]+e.nx[m]*(p+_c),u[y*6+4]=v,u[y*6+5]=-(e.y[m]+e.ny[m]*(p+_c));let M=(d[y]*2+d[Math.max(0,y-1)]+d[Math.min(La-1,y+1)])/4,[b,S,_]=this.cbSafe?e_(M):t_(M),T=it(1-y/La,0,1),x=.92*Math.min(1,T*1.7)*(y<3?y/3:1);for(let w=0;w<2;w++)g[y*8+w*4]=b,g[y*8+w*4+1]=S,g[y*8+w*4+2]=_,g[y*8+w*4+3]=x}this.attrPos.needsUpdate=!0,this.attrCol.needsUpdate=!0}};var pr=[{id:"launch",title:"Launch & top speed",track:"aurora",mode:"timetrial",blurb:"Hold the throttle, let the gearbox work, and learn what 300 km/h feels like.",goals:[{id:"a",text:"Reach 200 km/h",test:s=>s.maxKmh>=200},{id:"b",text:"Reach 280 km/h",test:s=>s.maxKmh>=280}],tip:"Hold W. Stay on the road: the grass costs you speed."},{id:"brake",title:"Braking in a straight line",track:"mirage",mode:"timetrial",blurb:"Brake hard and straight without locking a wheel. The brake bite is the first skill in racing.",goals:[{id:"a",text:"Three clean stops from 200+ km/h (no lock-ups)",test:s=>s.cleanStops>=3,progress:s=>`${Math.min(3,s.cleanStops)}/3`}],tip:"Reach 200 km/h on a straight, then press S firmly and hold it until you stop. Ease off the pedal if the tyres smoke."},{id:"line",title:"Clean laps",track:"rade",mode:"timetrial",blurb:"Follow the colours: green keep going, yellow ease off, red brake. Keep it tidy between the walls.",goals:[{id:"a",text:"Two valid laps (no track limits)",test:s=>s.validLaps>=2,progress:s=>`${Math.min(2,s.validLaps)}/2`},{id:"b",text:"A valid lap under 1:20",test:s=>s.bestValid<=80}],tip:"The racing line guide (L) is on. Smooth steering is quicker than late steering."},{id:"drs",title:"DRS",track:"northfield",mode:"timetrial",blurb:"The rear wing flap opens in marked zones for extra top speed. In a race you need to be within a second of the car ahead; here it is always available.",goals:[{id:"a",text:"Open the DRS twice (Space on a straight, in a zone)",test:s=>s.drsOpens>=2,progress:s=>`${Math.min(2,s.drsOpens)}/2`}],tip:"Watch for the DRS signs and the green markers at the side of the track. Press Space on the straight; braking closes the flap."},{id:"slip",title:"Slipstream and overtaking",track:"northfield",mode:"race",level:.25,fieldSize:2,laps:5,blurb:"A slow car ahead is a free lesson: tuck in behind it, use the tow down the straight and pull out to pass.",goals:[{id:"a",text:"Close to within 1 second of the car ahead",test:s=>s.minGap<=1},{id:"b",text:"Make an overtake",test:s=>s.passes>=1}],tip:"Stay in its slipstream to gain speed, then pull out early so you are alongside before the braking zone."},{id:"pit",title:"Pit stop",track:"rade",mode:"race",level:.25,fieldSize:2,laps:6,tyreWear:6,blurb:"Press B to call the stop, take the pit lane at the limiter and nail the wheel nuts.",goals:[{id:"a",text:"Complete a pit stop",test:s=>s.stops>=1},{id:"b",text:"Hit at least three wheel nuts perfectly",test:s=>s.bestPerfects>=3}],tip:"B to call the stop. Press Space as each marker enters the green band."},{id:"wet",title:"Wet-weather driving",track:"aurora",mode:"timetrial",weather:"heavy",compound:"wet",blurb:"Rain halves your margin for error. Brake earlier, turn in gently and be smooth with the throttle.",goals:[{id:"a",text:"Two valid laps in the rain",test:s=>s.validLaps>=2,progress:s=>`${Math.min(2,s.validLaps)}/2`}],tip:"You are on wet tyres. Everything takes longer: brake earlier and lift through the corners."}],Sc=s=>pr.find(t=>t.id===s)||null,Mc=class{constructor(t){this.lesson=t,this.ctx={maxKmh:0,cleanStops:0,validLaps:0,bestValid:1/0,drsOpens:0,minGap:1/0,passes:0,stops:0,bestPerfects:0},this.done=Object.fromEntries(t.goals.map(e=>[e.id,!1])),this.complete=!1,this._stop=null,this._armed=!1,this._drsOpen=!1}update(t,e,i){let n=this.ctx,r=e.speed*3.6;n.maxKmh=Math.max(n.maxKmh,r);let a=e.drsPos>.5;a&&!this._drsOpen&&n.drsOpens++,this._drsOpen=a,i.opt.mode==="race"&&e.gapAhead!=null&&Number.isFinite(e.gapAhead)&&e.ahead&&(n.minGap=Math.min(n.minGap,e.gapAhead)),n.passes=e.rs.passes||0,n.stops=e.rs.stops||0;let o=Math.max(e.flat[0],e.flat[1],e.flat[2],e.flat[3]);return r>200?(this._armed=!0,!this._stop&&e.brake>.5?this._stop={flat0:o}:this._stop||(this._flatRef=o)):this._armed&&!this._stop&&e.brake>.5&&(this._stop={flat0:this._flatRef??o}),this._stop&&e.brake<.1&&r>30&&(this._stop=null,this._armed=!1,this._flatRef=void 0),this._stop&&r<25&&(o-this._stop.flat0<.12&&n.cleanStops++,this._stop=null,this._armed=!1,this._flatRef=void 0),this.check()}onEvent(t,e){if(t.car!==e)return!1;let i=this.ctx;return t.type==="lap"&&t.valid&&(i.validLaps++,i.bestValid=Math.min(i.bestValid,t.time)),t.type==="pitGameDone"&&(i.bestPerfects=Math.max(i.bestPerfects,t.perfects||0)),this.check()}check(){let t=!0;for(let e of this.lesson.goals)!this.done[e.id]&&e.test(this.ctx)&&(this.done[e.id]=!0),this.done[e.id]||(t=!1);return t&&!this.complete?(this.complete=!0,!0):!1}};function vp(s){let t={};if(s&&typeof s=="object"&&!Array.isArray(s))for(let e of pr)s[e.id]===!0&&(t[e.id]=!0);return t}var Ld="varying vec2 vUv; void main(){ vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }",wc=class{constructor(t){this.renderer=t,this.enabled=!0,this.rt=null,this.strength=0,this.bloomOn=!0,this.bloom=0,this.rtA=null,this.rtB=null,this.scene=new Bi,this.cam=new zn(-1,1,1,-1,0,1),this.mat=new Ce({uniforms:{tDiffuse:{value:null},tBloom:{value:null},bloom:{value:0},strength:{value:0},aspect:{value:1},center:{value:new At(.5,.46)}},vertexShader:Ld,fragmentShader:`
        uniform sampler2D tDiffuse; uniform sampler2D tBloom; uniform float bloom; uniform float strength; uniform float aspect; uniform vec2 center;
        varying vec2 vUv;
        void main() {
          vec2 d = vUv - center;
          float r = length(d * vec2(aspect, 1.0));
          float m = smoothstep(0.16, 0.8, r) * strength;
          vec4 col = vec4(0.0);
          const int N = 12;
          for (int i = 0; i < N; i++) {
            float t = float(i) / float(N - 1);
            col += texture2D(tDiffuse, center + d * (1.0 - m * 0.16 * t));
          }
          col /= float(N);
          vec3 rgb = col.rgb + texture2D(tBloom, vUv).rgb * bloom;
          gl_FragColor = vec4(rgb, 1.0);
          #include <tonemapping_fragment>
          #include <colorspace_fragment>
        }`,depthTest:!1,depthWrite:!1}),this.brightMat=new Ce({uniforms:{tDiffuse:{value:null},texel:{value:new At(1,1)}},vertexShader:Ld,fragmentShader:`
        uniform sampler2D tDiffuse; uniform vec2 texel; varying vec2 vUv;
        vec3 bright(vec3 c) { float l = max(c.r, max(c.g, c.b)); float k = smoothstep(2.0, 3.6, l); return c * k; }
        void main() {
          vec3 c = bright(texture2D(tDiffuse, vUv + texel * vec2(-1.0, -1.0)).rgb) + bright(texture2D(tDiffuse, vUv + texel * vec2(1.0, -1.0)).rgb)
                 + bright(texture2D(tDiffuse, vUv + texel * vec2(-1.0, 1.0)).rgb) + bright(texture2D(tDiffuse, vUv + texel * vec2(1.0, 1.0)).rgb);
          gl_FragColor = vec4(min(c * 0.25, vec3(8.0)), 1.0);
        }`,depthTest:!1,depthWrite:!1}),this.blurMat=new Ce({uniforms:{tDiffuse:{value:null},dir:{value:new At(1,0)}},vertexShader:Ld,fragmentShader:`
        uniform sampler2D tDiffuse; uniform vec2 dir; varying vec2 vUv;
        void main() {
          vec3 c = texture2D(tDiffuse, vUv).rgb * 0.2270270270;
          c += (texture2D(tDiffuse, vUv + dir * 1.3846153846).rgb + texture2D(tDiffuse, vUv - dir * 1.3846153846).rgb) * 0.3162162162;
          c += (texture2D(tDiffuse, vUv + dir * 3.2307692308).rgb + texture2D(tDiffuse, vUv - dir * 3.2307692308).rgb) * 0.0702702703;
          gl_FragColor = vec4(c, 1.0);
        }`,depthTest:!1,depthWrite:!1}),this.quad=new yt(new Te(2,2),this.mat),this.quad.frustumCulled=!1,this.scene.add(this.quad)}ensureTarget(){let t=this.renderer.getDrawingBufferSize(new At);if(this.rt&&this.rt.width===t.x&&this.rt.height===t.y)return;this.rt&&this.rt.dispose(),this.rt=new Qe(t.x,t.y,{type:yi,samples:4,depthBuffer:!0}),this.mat.uniforms.aspect.value=t.x/t.y,this.rtA&&(this.rtA.dispose(),this.rtB.dispose());let e=Math.max(2,Math.round(t.x/4)),i=Math.max(2,Math.round(t.y/4)),n={type:yi,depthBuffer:!1,minFilter:Ve,magFilter:Ve};this.rtA=new Qe(e,i,n),this.rtB=new Qe(e,i,n)}pass(t,e){this.quad.material=t,this.renderer.setRenderTarget(e),this.renderer.render(this.scene,this.cam),this.quad.material=this.mat}render(t,e,i,n=0){let r=this.renderer;this.strength+=(i-this.strength)*.25,this.bloom+=((this.bloomOn?n:0)-this.bloom)*.1;let a=this.enabled&&this.strength>=.03,o=this.enabled&&this.bloom>=.02;if(!a&&!o){r.render(t,e);return}if(this.ensureTarget(),r.setRenderTarget(this.rt),r.render(t,e),o){let l=this.rtA.width,c=this.rtA.height;this.brightMat.uniforms.tDiffuse.value=this.rt.texture,this.brightMat.uniforms.texel.value.set(1/this.rt.width,1/this.rt.height),this.pass(this.brightMat,this.rtA),this.blurMat.uniforms.tDiffuse.value=this.rtA.texture,this.blurMat.uniforms.dir.value.set(1/l,0),this.pass(this.blurMat,this.rtB),this.blurMat.uniforms.tDiffuse.value=this.rtB.texture,this.blurMat.uniforms.dir.value.set(0,1/c),this.pass(this.blurMat,this.rtA),this.blurMat.uniforms.tDiffuse.value=this.rtA.texture,this.blurMat.uniforms.dir.value.set(2/l,0),this.pass(this.blurMat,this.rtB),this.blurMat.uniforms.tDiffuse.value=this.rtB.texture,this.blurMat.uniforms.dir.value.set(0,2/c),this.pass(this.blurMat,this.rtA),this.mat.uniforms.tBloom.value=this.rtA.texture}r.setRenderTarget(null),this.mat.uniforms.tDiffuse.value=this.rt.texture,this.mat.uniforms.strength.value=a?this.strength:0,this.mat.uniforms.bloom.value=o?this.bloom:0,o||(this.mat.uniforms.tBloom.value=this.rt.texture),r.render(this.scene,this.cam)}dispose(){this.rt&&this.rt.dispose(),this.rtA&&(this.rtA.dispose(),this.rtB.dispose()),this.brightMat.dispose(),this.blurMat.dispose(),this.mat.dispose(),this.quad.geometry.dispose()}};var Ec=class{constructor(t=4200){let e=new Float32Array(t*2*3),i=new Float32Array(t*2),n=new Float32Array(t*2),r=12345,a=()=>(r=r*1664525+1013904223>>>0)/4294967296;for(let l=0;l<t;l++){let c=a()*80,h=a()*32,f=a()*80,d=a();for(let u=0;u<2;u++){let g=(l*2+u)*3;e[g]=c,e[g+1]=h,e[g+2]=f,i[l*2+u]=d,n[l*2+u]=u}}let o=new ne;o.setAttribute("position",new Yt(e,3)),o.setAttribute("aSeed",new Yt(i,1)),o.setAttribute("aEnd",new Yt(n,1)),this.mat=new Ce({transparent:!0,depthWrite:!1,uniforms:{time:{value:0},cam:{value:new k},intensity:{value:0},wind:{value:new At(.18,.05)},tint:{value:new at(.78,.84,.92)}},vertexShader:`
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
        }`,fragmentShader:"uniform vec3 tint; varying float vA; void main(){ if (vA < 0.01) discard; gl_FragColor = vec4(tint, vA); }"}),this.mesh=new Wr(o,this.mat),this.mesh.frustumCulled=!1,this.mesh.renderOrder=8,this.mesh.visible=!1}update(t,e,i){this.mesh.visible=i>.03,this.mesh.visible&&(this.mat.uniforms.time.value+=t,this.mat.uniforms.cam.value.copy(e),this.mat.uniforms.intensity.value=i)}dispose(){this.mesh.geometry.dispose(),this.mat.dispose()}};var Tc=17,Ac=class{constructor(t,e=30,i=30){this.n=t,this.hz=i,this.frames=Math.round(e*i),this.data=new Float32Array(this.frames*t*Tc),this.sc=new Float32Array(this.frames*3),this.times=new Float32Array(this.frames),this.head=0,this.count=0,this.acc=0}tick(t,e,i,n){this.acc+=t;let r=1/this.hz;this.acc<r||(this.acc=Math.min(this.acc-r,r),this.record(e,i,n))}record(t,e,i){let n=this.head;for(let a=0;a<this.n;a++){let o=t[a],l=(n*this.n+a)*Tc,c=this.data;c[l]=o.x,c[l+1]=o.y,c[l+2]=o.theta,c[l+3]=o.trackH,c[l+4]=o.pitch,c[l+5]=o.roll,c[l+6]=o.steer,c[l+7]=o.omega[0],c[l+8]=o.omega[1],c[l+9]=o.omega[2],c[l+10]=o.omega[3],c[l+11]=o.drsPos,c[l+12]=o.brake,c[l+13]=o.harvesting?1:0,c[l+14]=Math.atan(o.trackSlope*Math.cos(o.theta-o.trackHeading)),c[l+15]=o.speed}let r=e.sc;if(r&&r.state!=="none"){let a=i.pointAt(r.s,0);this.sc[n*3]=a.x,this.sc[n*3+1]=a.y,this.sc[n*3+2]=a.heading}else this.sc[n*3]=NaN;this.times[n]=e.time,this.head=(n+1)%this.frames,this.count=Math.min(this.frames,this.count+1)}get duration(){return Math.max(0,(this.count-1)/this.hz)}idx(t){return(this.head-this.count+t+this.frames*2)%this.frames}sample(t,e){let i=Math.min(Math.max(t*this.hz,0),this.count-1),n=Math.floor(i),r=Math.min(this.count-1,n+1),a=i-n,o=this.idx(n),l=this.idx(r);for(let d=0;d<this.n;d++){let u=(o*this.n+d)*Tc,g=(l*this.n+d)*Tc,y=this.data,m=e[d];m.x=m.px=qt(y[u],y[g],a),m.y=m.py=qt(y[u+1],y[g+1],a);let p=y[g+2]-y[u+2];p>Math.PI&&(p-=2*Math.PI),p<-Math.PI&&(p+=2*Math.PI),m.theta=m.ptheta=y[u+2]+p*a,m.trackH=qt(y[u+3],y[g+3],a),m.pitch=qt(y[u+4],y[g+4],a),m.roll=qt(y[u+5],y[g+5],a),m.steer=qt(y[u+6],y[g+6],a);for(let M=0;M<4;M++)m.omega[M]=qt(y[u+7+M],y[g+7+M],a);m.drsPos=qt(y[u+11],y[g+11],a),m.brake=y[u+12],m.harvesting=y[u+13]>.5,m.trackSlope=Math.tan(qt(y[u+14],y[g+14],a)),m.trackHeading=m.theta,m.speed=qt(y[u+15],y[g+15],a),m.u=m.speed,m.v=0;let v=m.live;m.damageFront=v.damageFront||0,m.damageRear=v.damageRear||0,m.damageFloor=v.damageFloor||0,m.damageSideL=v.damageSideL||0,m.damageSideR=v.damageSideR||0}let c=o*3,h=l*3,f=this.sc;this.scPose=Number.isNaN(f[c])?null:{x:qt(f[c],f[h],a),y:qt(f[c+1],f[h+1],a),theta:f[c+2]}}};function _p(s){return s.map(t=>({spec:t.spec,a:t.a,b:t.b,x:0,y:0,px:0,py:0,theta:0,ptheta:0,trackH:0,pitch:0,roll:0,steer:0,omega:new Float64Array(4),drsPos:0,brake:0,harvesting:!1,trackSlope:0,trackHeading:0,speed:0,u:0,v:0,kerbShake:0,rpm:9e3,damageFront:0,damageRear:0,damageFloor:0,damageSideL:0,damageSideR:0,live:t,info:t.info}))}var i_=`
attribute float size; attribute float alpha; attribute vec3 tint;
varying float vA; varying vec3 vTint;
uniform float scale;
void main() {
  vA = alpha; vTint = tint;
  vec4 mv = modelViewMatrix * vec4(position, 1.0);
  gl_PointSize = size * scale / max(0.1, -mv.z);
  gl_Position = projectionMatrix * mv;
}`,n_=`
uniform sampler2D map; uniform float light; varying float vA; varying vec3 vTint;
void main() {
  vec4 t = texture2D(map, gl_PointCoord);
  gl_FragColor = vec4(vTint * light, t.a * vA);
  if (gl_FragColor.a < 0.01) discard;
}`,mr=class{constructor(t,{additive:e=!1,gravity:i=0,drag:n=.5,bounce:r=0}={}){this.max=t,this.bounce=r,this.floor=new Float32Array(t),this.alive=!1,this.pos=new Float32Array(t*3),this.vel=new Float32Array(t*3),this.size=new Float32Array(t),this.alpha=new Float32Array(t),this.tint=new Float32Array(t*3),this.life=new Float32Array(t),this.maxLife=new Float32Array(t).fill(1),this.grow=new Float32Array(t),this.a0=new Float32Array(t),this.head=0,this.gravity=i,this.drag=n;let a=new ne;this.attrPos=new Yt(this.pos,3),this.attrSize=new Yt(this.size,1),this.attrAlpha=new Yt(this.alpha,1),this.attrTint=new Yt(this.tint,3);for(let l of[this.attrPos,this.attrSize,this.attrAlpha,this.attrTint])l.setUsage(qn);a.setAttribute("position",this.attrPos),a.setAttribute("size",this.attrSize),a.setAttribute("alpha",this.attrAlpha),a.setAttribute("tint",this.attrTint);let o=new Ce({vertexShader:i_,fragmentShader:n_,transparent:!0,depthWrite:!1,blending:e?tn:Gn,uniforms:{map:{value:Pa()},scale:{value:600},light:{value:1}}});this.points=new as(a,o),this.points.frustumCulled=!1,this.points.renderOrder=5,this.alpha.fill(0)}emit(t,e,i,n,r,a,o,l,c,h,f,d,u){let g=this.head;this.life[g]>0||(this.head=(this.head+1)%this.max,this.alive=!0,this.floor[g]=e-.04,this.pos[g*3]=t,this.pos[g*3+1]=e,this.pos[g*3+2]=i,this.vel[g*3]=n,this.vel[g*3+1]=r,this.vel[g*3+2]=a,this.size[g]=o,this.grow[g]=l,this.a0[g]=c,this.alpha[g]=c,this.life[g]=h,this.maxLife[g]=h,this.tint[g*3]=f,this.tint[g*3+1]=d,this.tint[g*3+2]=u)}update(t,e){if(this.points.material.uniforms.scale.value=e,!this.alive)return;let i=Math.exp(-this.drag*t),n=!1;for(let r=0;r<this.max;r++){if(this.life[r]<=0){this.alpha[r]=0;continue}this.life[r]-=t,this.life[r]>0&&(n=!0);let a=this.life[r]/this.maxLife[r];this.vel[r*3]*=i,this.vel[r*3+1]=this.vel[r*3+1]*i+this.gravity*t,this.vel[r*3+2]*=i,this.pos[r*3]+=this.vel[r*3]*t,this.pos[r*3+1]+=this.vel[r*3+1]*t,this.pos[r*3+2]+=this.vel[r*3+2]*t,this.bounce&&this.pos[r*3+1]<this.floor[r]&&(this.pos[r*3+1]=this.floor[r],this.vel[r*3+1]=Math.abs(this.vel[r*3+1])*this.bounce),this.size[r]+=this.grow[r]*t,this.alpha[r]=this.a0[r]*Math.max(0,a)*Math.min(1,(1-a)*8)}this.alive=n,this.attrPos.needsUpdate=!0,this.attrSize.needsUpdate=!0,this.attrAlpha.needsUpdate=!0,this.attrTint.needsUpdate=!0}},Dd=class{constructor(t=36e3){this.max=t,this.pos=new Float32Array(t*4*3),this.col=new Float32Array(t*4);let e=new Uint32Array(t*6);for(let r=0;r<t;r++)e.set([r*4,r*4+1,r*4+2,r*4+1,r*4+3,r*4+2],r*6);let i=new ne;this.attrPos=new Yt(this.pos,3).setUsage(qn),this.attrCol=new Yt(this.col,1).setUsage(qn),i.setAttribute("position",this.attrPos),i.setAttribute("a",this.attrCol),i.setIndex(new Yt(e,1));let n=new Ce({transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-6,polygonOffsetUnits:-6,vertexShader:"attribute float a; varying float vA; void main(){ vA = a; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }",fragmentShader:"varying float vA; void main(){ gl_FragColor = vec4(0.02,0.02,0.025, vA); }"});this.mesh=new yt(i,n),this.mesh.frustumCulled=!1,this.mesh.renderOrder=3,this.head=0,this.dirtyFrom=-1,this.dirtyCount=0,this.dirtyAll=!1}add(t,e,i,n,r,a,o,l){if(l<=0){t.on=!1;return}if(t.on){let c=e-t.x,h=n-t.z,f=c*c+h*h;if(f<.04)return;if(f<25){let d=this.head;this.head=(this.head+1)%this.max;let u=this.pos,g=d*12,y=o/2;u[g]=t.x+t.nx*y,u[g+1]=t.y+.02,u[g+2]=t.z+t.nz*y,u[g+3]=t.x-t.nx*y,u[g+4]=t.y+.02,u[g+5]=t.z-t.nz*y,u[g+6]=e+r*y,u[g+7]=i+.02,u[g+8]=n+a*y,u[g+9]=e-r*y,u[g+10]=i+.02,u[g+11]=n-a*y,this.col.fill(l,d*4,d*4+4),this.dirtyCount===0?this.dirtyFrom=d:d<this.dirtyFrom&&(this.dirtyAll=!0),this.dirtyCount++}}t.x=e,t.y=i,t.z=n,t.nx=r,t.nz=a,t.on=!0}flush(){this.dirtyCount&&(!this.dirtyAll&&this.dirtyCount<=this.max-this.dirtyFrom?(this.attrPos.clearUpdateRanges(),this.attrCol.clearUpdateRanges(),this.attrPos.addUpdateRange(this.dirtyFrom*12,this.dirtyCount*12),this.attrCol.addUpdateRange(this.dirtyFrom*4,this.dirtyCount*4)):(this.attrPos.clearUpdateRanges(),this.attrCol.clearUpdateRanges()),this.attrPos.needsUpdate=!0,this.attrCol.needsUpdate=!0,this.dirtyCount=0,this.dirtyAll=!1)}},s_=[.78,.7,.55],r_=[.38,.5,.25],Rc=()=>({x:0,y:0,z:0,nx:0,nz:0,on:!1}),Cc=class{constructor(t){this.smoke=new mr(900,{drag:.9,gravity:.6}),this.dust=new mr(500,{drag:.8,gravity:-3}),this.sparks=new mr(500,{additive:!0,gravity:-14,drag:.4,bounce:.3}),this.spray=new mr(1600,{drag:1.5,gravity:-1.2}),this.skid=new Dd,this.wet=0,t.add(this.smoke.points,this.dust.points,this.sparks.points,this.spray.points,this.skid.mesh),this.rnd=ei(99),this.state=new WeakMap}setLight(t){for(let e of[this.smoke,this.dust,this.spray])e.points.material.uniforms.light.value=t}car(t,e){let i=this.rnd,n=Math.cos(t.theta),r=Math.sin(t.theta),a=this.state.get(t);a||this.state.set(t,a={skid:[Rc(),Rc(),Rc(),Rc()],spray:[0,0,0,0],smoke:[0,0,0,0],dust:[0,0,0,0],spark:0});for(let o=0;o<4;o++){let l=t.wheelPos[o],c=t.x+l[0]*n-l[1]*r,f=-(t.y+l[0]*r+l[1]*n),d=t.trackH,u=t.surf[o],g=t.slipVis[o],y=u===zt.ASPHALT||u===zt.PIT||u===zt.KERB||u===zt.RUNOFF,m=t.brake>.8&&t.speed>22&&t.kappa[o]<-.1&&o<2;if(y&&(g>.35||m)?this.skid.add(a.skid[o],c,d,f,-r,-n,.32,it((.22+Math.max(g,m?.45:0)*.45)*(1-.65*this.wet),0,.8)):a.skid[o].on=!1,this.wet>.12&&y&&t.speed>16){let p=a.spray[o]+e*(14+t.speed*.5)*this.wet*(o>=2?1:.55),v=Math.floor(p);for(a.spray[o]=p-v;v-- >0;){let M=.8+i()*.2;this.spray.emit(c+(i()-.5)*.4,d+.12,f+(i()-.5)*.4,-t.u*n*.12+(i()-.5)*2,.9+i()*1.8,t.u*r*.12+(i()-.5)*2,.5+i()*.5,1.6+t.speed*.012,(.11+.07*this.wet)*Math.min(1,t.speed/45),.55+i()*.55,M*.92,M*.96,M)}}if(y&&g>.18&&t.speed>5){let p=a.smoke[o]+e*(30+g*70),v=Math.floor(p);for(a.smoke[o]=p-v;v-- >0;){let M=.82+i()*.12;this.smoke.emit(c+(i()-.5)*.3,d+.12,f+(i()-.5)*.3,(i()-.5)*1.2,.8+i()*1.2,(i()-.5)*1.2,1.1+i()*.8,3.4,.35*Math.min(1,g),.9+i()*.8,M,M,M)}}if((u===zt.GRASS||u===zt.GRAVEL)&&t.speed>8){let p=a.dust[o]+e*(12+t.speed*.8),v=Math.floor(p);a.dust[o]=p-v;let M=u===zt.GRAVEL?s_:r_;for(;v-- >0;)this.dust.emit(c,d+.15,f,-t.u*n*.2+(i()-.5)*3,1.5+i()*3.5,t.u*r*.2+(i()-.5)*3,.7+i()*.8,2.2,.55,.7+i()*.7,M[0],M[1],M[2])}}if(t.kerbShake>.5&&t.speed>55){a.spark+=e*30;let o=Math.floor(a.spark);for(a.spark-=o;o-- >0;)this.spark(t.x,t.trackH+.08,-t.y,3,6,t)}else a.spark=0}spark(t,e,i,n,r,a){let o=this.rnd,l=a?Math.cos(a.theta):1,c=a?Math.sin(a.theta):0;for(let h=0;h<4;h++){let f=n+o()*(r-n),d=(o()-.5)*1.6;this.sparks.emit(t-l*1.4,e,i+c*1.4,-l*(f+10)*.6+Math.cos(d)*f*.3,1+o()*3,c*(f+10)*.6+Math.sin(d)*f,.28+o()*.2,-.4,1,.25+o()*.45,1,.75+o()*.2,.35)}}burst(t,e,i,n=40,r=12){let a=this.rnd;for(let o=0;o<n;o++){let l=a()*6.28,c=1+a()*r*.5,h=a()*r;this.sparks.emit(t,e+.3,i,Math.cos(l)*h,c,Math.sin(l)*h,.3+a()*.25,-.3,1,.3+a()*.7,1,.6+a()*.3,.2)}for(let o=0;o<10;o++)this.smoke.emit(t,e+.4,i,(a()-.5)*4,1+a()*2,(a()-.5)*4,1.5,4,.4,1.5,.6,.6,.6)}update(t,e){this.smoke.update(t,e),this.dust.update(t,e),this.sparks.update(t,e),this.spray.update(t,e),this.skid.flush()}};var Fd=["chase","close","cockpit","tcam","heli","tv"],Jn={finish:"Finish orbit",chase:"Chase",close:"Low chase",cockpit:"Cockpit",tcam:"T-cam",heli:"Helicopter",tv:"TV broadcast"},Mp=new k(0,1,0),Pc=new $e,a_=new $e().setFromAxisAngle(Mp,-Math.PI/2),o_=new k,Da=new k,Ic=new k,l_=new $e().setFromAxisAngle(Mp,Math.PI),c_=Math.exp(3)-1,bp=s=>(Math.exp(3*s)-1)/c_,Fa=class{constructor(t){this.camera=t,this.mode="chase",this.yaw=0,this.pos=new k,this.look=new k,this.shake=0,this.lookBack=!1,this.tvIndex=-1,this.tvPoints=null,this.fov=62,this.time=0,this.init=!1,this.impact=0,this.shakePhase=0,this._view=null}next(){return this.setMode(Fd[(Fd.indexOf(this.mode)+1)%Fd.length]),this.mode}setMode(t){this.mode=t,this.init=!1,this.tvIndex=-1}buildTv(t){let e=[],i=Math.max(6,Math.round(t.length/320)),n={};for(let r=0;r<i;r++){let a=r/i*t.length,o=r%2?1:-1;t.pit&&t.inPitRange(a)&&o<0&&(o=1);let l=t.idx(a),c=t.def.runoff&&t.def.runoff.mode==="street";t.pointAt(a,o*(t.wallDist(l,o)+(c?2.2:5+r%3*3)),n),e.push(new k(n.x,n.h+(c?6+r%3*1.5:4.5+r%3*2),-n.y))}this.tvPoints=e}update(t,e,i,n){this.time+=t;let r=this.camera,a=e.group,o=i.speed,l=a.rotation.y,c=o_.set(Math.cos(l),0,-Math.sin(l)),h=a.position,f=it(Math.atan2(i.v,Math.max(Math.abs(i.u),8)),-.5,.5),d=62+it(o*.1,0,14);if(this._view!==e&&(this._view&&(this._view.helmet.visible=!0),this._view=e,this.tvIndex=-1),e.helmet.visible=this.mode!=="cockpit"&&this.mode!=="tcam",this.mode==="finish"&&!this.init&&(this.fT=0),this.mode==="chase"||this.mode==="close"||this.mode==="heli"){let p=l-f*.35+(this.lookBack?Math.PI:0);this.init||(this.yaw=p),this.yaw+=vn(p-this.yaw)*(1-Math.exp(-t*(this.mode==="heli"?3:7)));let v=this.mode==="close"?5.2+o*.012:this.mode==="heli"?18:7.4+o*.022,M=this.mode==="close"?1.35:this.mode==="heli"?42:2.1+o*.004,b=Da.set(Math.cos(this.yaw),0,-Math.sin(this.yaw)),S=Ic.copy(h).addScaledVector(b,-v).setY(h.y+M);this.init||this.pos.copy(S);let _=1-Math.exp(-t*(this.mode==="heli"?4:14));this.pos.lerp(S,_),r.position.copy(this.pos);let T=Ic.copy(h).addScaledVector(b,this.mode==="heli"?4:5).setY(h.y+(this.mode==="close"?.9:1.1));r.lookAt(T),this.mode==="heli"&&(d=52)}else if(this.mode==="cockpit"||this.mode==="tcam"){let p=this.mode==="cockpit"?Da.set(.12,1,0):Da.set(-.25,1.38,0);e.model.updateWorldMatrix(!0,!1),e.model.localToWorld(p),r.position.copy(p),e.model.getWorldQuaternion(Pc),Pc.multiply(a_),this.lookBack&&Pc.multiply(l_),r.quaternion.copy(Pc),d=this.mode==="cockpit"?76+it(o*.05,0,8):74}else if(this.mode==="finish"){this.fT=(this.fT||0)+t;let p=this.fT,v=-l+Math.PI*.8+p*.32,M=qt(12,6.5,it(p/12,0,1)),b=1.5+.9*Math.sin(p*.45)+it(p/20,0,1)*.6,S=Ic.set(h.x+Math.cos(v)*M,h.y+b,h.z+Math.sin(v)*M),_=this._pr||(this._pr={i:0,t:0,s:0,d:0,dist:0});n.project(S.x,-S.z,this._hint??-1,_),this._hint=_.i;let T=Math.max(.5,n.wallDist(_.i,1)-1.4),x=Math.max(.5,n.wallDist(_.i,-1)-1.4);if(_.d>T||_.d<-x){let w=Math.min(T,Math.max(-x,_.d))-_.d;S.x+=n.nx[_.i]*w,S.z-=n.ny[_.i]*w}this.init||this.pos.copy(S),this.pos.lerp(S,1-Math.exp(-t*6)),r.position.copy(this.pos),r.lookAt(h.x,h.y+.7,h.z),d=38}else if(this.mode==="tv"){this.tvPoints||this.buildTv(n);let p=this.tvIndex,v=1/0;if(p>=0){let S=this.tvPoints[p].distanceTo(h),_=Da.copy(this.tvPoints[p]).sub(h).dot(c);(S>280||_<-25&&S>40)&&(p=-1)}if(p<0){for(let S=0;S<this.tvPoints.length;S++){let _=this.tvPoints[S],T=_.distanceTo(h);Da.copy(_).sub(h).dot(c)>15&&T<v&&T>30&&(v=T,p=S)}p<0&&(p=0)}this.tvIndex=p,r.position.copy(this.tvPoints[p]);let M=Ic.copy(h).addScaledVector(c,o*.05).setY(h.y+.8);r.lookAt(M);let b=this.tvPoints[p].distanceTo(h);d=it(2*Math.atan(10/Math.max(b,15))*(180/Math.PI),8,55)}this.init=!0;let u=it(o/95,0,1),g=it((i.rpm-5e3)/9500,0,1),y=this.shakeOn===!1?0:(bp(u)*.65+bp(g)*.35)*(this.mode==="cockpit"?.016:this.mode==="tcam"?.011:this.mode==="close"?.0045:.0022),m=(this.shakeOn===!1?0:i.kerbShake*.03)+y+this.impact*.25;if(this.impact*=Math.exp(-t*6),m>4e-4&&this.mode!=="tv"){this.shakePhase+=t*(53+g*40);let p=this.shakePhase;r.position.x+=Math.sin(p*1.3)*m,r.position.y+=Math.sin(p*1.9+1)*m,r.position.z+=Math.cos(p*1.1)*m}this.fov=qt(this.fov,d,1-Math.exp(-t*4)),Math.abs(r.fov-this.fov)>.01&&(r.fov=this.fov,r.updateProjectionMatrix())}};var Na={throttle:["KeyW","ArrowUp"],brake:["KeyS","ArrowDown"],left:["KeyA","ArrowLeft"],right:["KeyD","ArrowRight"],drs:["Space"],boost:["ShiftLeft","ShiftRight"],gearUp:["KeyE"],gearDown:["KeyQ"],pit:["KeyB"],tyre:["KeyT"],camera:["KeyC"],lookBack:["KeyV"],reset:["KeyR"],pause:["Escape","KeyP"],map:["KeyM"],mute:["KeyN"],auto:["KeyG"],line:["KeyL"],tele:["KeyY"],ersMode:["KeyX"],fuelMode:["KeyZ"],bbUp:["BracketRight","Equal"],bbDown:["BracketLeft","Minus"],confirm:["Enter","Space"]},Nd=[["throttle","Throttle"],["brake","Brake / reverse"],["left","Steer left"],["right","Steer right"],["drs","DRS / wheel nut"],["boost","ERS boost (hold)"],["gearUp","Gear up (manual)"],["gearDown","Gear down (manual)"],["pit","Pit request"],["tyre","Change pit tyre"],["camera","Camera"],["lookBack","Look back"],["reset","Reset to track"],["pause","Pause"],["line","Racing line guide"],["tele","Live telemetry"],["map","Minimap size"],["mute","Mute"],["auto","Autopilot toggle"],["ersMode","ERS mode"],["fuelMode","Fuel mix"],["bbUp","Brake bias forward"],["bbDown","Brake bias rearward"]],Sp=/^[A-Za-z][A-Za-z0-9]{1,23}$/,wp=new Set(["Escape","Enter","Tab","F5","F11","F12"]);function gr(s){return/^Key[A-Z]$/.test(s)?s.slice(3):/^Digit\d$/.test(s)?s.slice(5):{ArrowUp:"\u2191",ArrowDown:"\u2193",ArrowLeft:"\u2190",ArrowRight:"\u2192",Space:"Space",ShiftLeft:"Shift",ShiftRight:"R-Shift",ControlLeft:"Ctrl",ControlRight:"R-Ctrl",AltLeft:"Alt",AltRight:"R-Alt",BracketLeft:"[",BracketRight:"]",Equal:"=",Minus:"-",Comma:",",Period:".",Slash:"/",Semicolon:";",Quote:"'",Backquote:"`",Backslash:"\\",Backspace:"Backspace",Escape:"Esc"}[s]||s.replace(/^Numpad/,"Num ")}function Dc(s){let t={};if(!s||typeof s!="object"||Array.isArray(s))return t;for(let[e]of Nd){let i=s[e];if(!Array.isArray(i))continue;let n=i.filter(r=>typeof r=="string"&&Sp.test(r)&&!wp.has(r)).slice(0,3);(n.length||i.length===0)&&(t[e]=[...new Set(n)])}return t}function Ua(s){let t={};for(let i of Object.keys(Na))t[i]=Na[i].slice();let e=Dc(s);for(let i of Object.keys(e))t[i]=e[i];return t.pause.includes("Escape")||t.pause.push("Escape"),t}function Ep(s,t,e){let i=Dc(s);if(wp.has(e)||!Sp.test(e))return i;let n=Ua(i);for(let r of Object.keys(n))r!==t&&n[r].includes(e)&&(i[r]=n[r].filter(a=>a!==e));return i[t]=[e],i}var h_=(s,t)=>Math.abs(s)<t?0:(s-Math.sign(s)*t)/(1-t),Lc=class{constructor(){this.down=new Set,this.pressed=new Set,this.throttle=0,this.brake=0,this.steer=0,this.keys=Na,this.touch={left:!1,right:!1,throttle:!1,brake:!1},this.touchMode=!1,this.padActive=!1,this.padPrev=[],this.opts={steerSpeed:1,padDead:.07,rumble:!0},this.rumbleT=0,window.addEventListener("keydown",t=>{t.repeat||(["Space","ArrowUp","ArrowDown","ArrowLeft","ArrowRight","Tab"].includes(t.code)&&t.preventDefault(),this.down.add(t.code),this.pressed.add(t.code))}),window.addEventListener("keyup",t=>this.down.delete(t.code)),window.addEventListener("blur",()=>this.down.clear())}isDown(t){return this.keys[t].some(e=>this.down.has(e))}wasPressed(t){return this.keys[t].some(e=>this.pressed.has(e))}pad(){let t=navigator.getGamepads?navigator.getGamepads():[];for(let e of t)if(e&&e.connected&&e.axes.length>=2)return e;return null}rumble(t,e,i){let n=this.pad();if(!n||!this.opts.rumble||!this.padActive)return;let r=n.vibrationActuator;if(!r||!r.playEffect||(this.rumbleT-=i,this.rumbleT>0))return;this.rumbleT=.1;let a=0;for(let c=0;c<4;c++)a=Math.max(a,t.slipVis[c]);let o=it(a*.5+e*1.2,0,1),l=it(t.kerbShake*.9+(t.onGrass?.3:0),0,1);o<.03&&l<.03||r.playEffect("dual-rumble",{duration:120,strongMagnitude:o,weakMagnitude:l}).catch(()=>{})}poll(t,e){let i={throttle:0,brake:0,steer:0,boost:!1,gearUp:!1,gearDown:!1,drsPress:!1,pitToggle:!1,tyreCycle:!1,camera:!1,reset:!1,pause:!1,lookBack:!1,map:!1,mute:!1,autoToggle:!1,line:!1,tele:!1,confirm:!1,ersCycle:!1,fuelCycle:!1,bbDelta:0},n=this.isDown("throttle")||this.touch.throttle,r=this.isDown("brake")||this.touch.brake,a=this.isDown("left")||this.touch.left,o=this.isDown("right")||this.touch.right;this.throttle+=it((n?1:0)-this.throttle,-t*12,t*5.5),this.brake+=it((r?1:0)-this.brake,-t*14,t*5),r&&this.brake<.28&&(this.brake=.28);let l=(a?1:0)-(o?1:0),c=it(e/85,0,1),h=(4.6-2.6*c)*this.opts.steerSpeed,f=(7.5-2*c)*this.opts.steerSpeed,d=l!==0&&Math.sign(l)===Math.sign(this.steer||l)?h:f;this.steer+=it(l-this.steer,-t*d,t*d),i.throttle=this.throttle,i.brake=this.brake,i.steer=this.steer,i.boost=this.isDown("boost"),i.lookBack=this.isDown("lookBack"),i.gearUp=this.wasPressed("gearUp"),i.gearDown=this.wasPressed("gearDown"),i.drsPress=this.wasPressed("drs"),i.pitToggle=this.wasPressed("pit"),i.tyreCycle=this.wasPressed("tyre"),i.camera=this.wasPressed("camera"),i.reset=this.wasPressed("reset"),i.pause=this.wasPressed("pause"),i.map=this.wasPressed("map"),i.mute=this.wasPressed("mute"),i.autoToggle=this.wasPressed("auto"),i.line=this.wasPressed("line"),i.tele=this.wasPressed("tele"),i.confirm=this.wasPressed("confirm"),i.ersCycle=this.wasPressed("ersMode"),i.fuelCycle=this.wasPressed("fuelMode"),i.bbDelta=(this.wasPressed("bbUp")?1:0)-(this.wasPressed("bbDown")?1:0);let u=this.pad();if(u){let g=h_(u.axes[0]||0,this.opts.padDead),y=u.buttons[7]?u.buttons[7].value:0,m=u.buttons[6]?u.buttons[6].value:0,p=_=>!!(u.buttons[_]&&u.buttons[_].pressed),v=_=>p(_)&&!this.padPrev[_],M=Math.abs(g)>.05||y>.05||m>.05||p(0)||p(1)||p(2)||p(3),b=performance.now();M&&(this.padLast=b),(n||r||a||o)&&(this.padLast=-1e9),this.padActive=b-(this.padLast??-1e9)<2500,this.padActive&&(i.steer=-Math.sign(g)*Math.pow(Math.abs(g),1.35),i.throttle=Math.max(i.throttle*0,y),i.brake=m,i.boost=i.boost||p(2)||p(5)&&!1,i.gearUp=i.gearUp||v(5),i.gearDown=i.gearDown||v(4),i.drsPress=i.drsPress||v(0),i.pitToggle=i.pitToggle||v(1),i.camera=i.camera||v(3),i.tyreCycle=i.tyreCycle||v(15),i.fuelCycle=i.fuelCycle||v(12),i.ersCycle=i.ersCycle||v(13),i.reset=i.reset||v(8),i.pause=i.pause||v(9),i.lookBack=i.lookBack||p(10),i.boost=i.boost||p(2)),this.padPrev=u.buttons.map(_=>_.pressed)}return this.pressed.clear(),i}};var Fc=class{constructor(){this.ctx=null,this.enabled=!0,this.volume=.55,this.voices=[],this.started=!1,this.lastGear=1,this.prevThr=0,this.weather={rain:0,wet:0}}start(){if(this.started)return;let t=window.AudioContext||window.webkitAudioContext;if(!t)return;this.ctx=new t;let e=this.ctx;this.master=e.createGain(),this.master.gain.value=this.enabled?this.volume:0;let i=e.createDynamicsCompressor();i.threshold.value=-14,i.ratio.value=6,this.master.connect(i),i.connect(e.destination);let n=e.sampleRate*2,r=e.createBuffer(1,n,e.sampleRate),a=r.getChannelData(0),o=0,l=0,c=0;for(let A=0;A<n;A++){let I=Math.random()*2-1;o=.99765*o+I*.099046,l=.963*l+I*.2965164,c=.57*c+I*1.0526913,a[A]=(o+l+c+I*.1848)*.2}this.noiseBuf=r;let h=(A=!0)=>{let I=e.createBufferSource();return I.buffer=r,I.loop=A,I};this.makeNoise=h;let f=e.createGain();f.gain.value=0;let d=e.createWaveShaper(),u=new Float32Array(1024);for(let A=0;A<1024;A++){let I=A/512-1;u[A]=Math.tanh(I*1.3)*.9}d.curve=u,this.engFilter=e.createBiquadFilter(),this.engFilter.type="lowpass",this.engFilter.Q.value=.6;let g=e.createBiquadFilter();g.type="peaking",g.frequency.value=700,g.gain.value=3,this.oscs=[{o:e.createOscillator(),g:e.createGain(),mult:1.5,w:"triangle",a:.5},{o:e.createOscillator(),g:e.createGain(),mult:3,w:"sawtooth",a:.2},{o:e.createOscillator(),g:e.createGain(),mult:6,w:"triangle",a:.08}];for(let A of this.oscs)A.o.type=A.w,A.g.gain.value=A.a,A.o.connect(A.g),A.g.connect(d),A.o.start();d.connect(this.engFilter),this.engFilter.connect(g),g.connect(f);let y=h(),m=e.createBiquadFilter();m.type="bandpass",m.frequency.value=1200,m.Q.value=.5,this.nzGain=e.createGain(),this.nzGain.gain.value=0,y.connect(m),m.connect(this.nzGain),this.nzGain.connect(f),y.start(),this.nzf=m,f.connect(this.master),this.eng=f;let p=h(),v=e.createBiquadFilter();v.type="lowpass",v.frequency.value=900,this.windGain=e.createGain(),this.windGain.gain.value=0,p.connect(v),v.connect(this.windGain),this.windGain.connect(this.master),p.start(),this.windFilter=v;let M=h(),b=e.createBiquadFilter();b.type="bandpass",b.frequency.value=1e3,b.Q.value=2.5,this.tyreGain=e.createGain(),this.tyreGain.gain.value=0,M.connect(b),b.connect(this.tyreGain),this.tyreGain.connect(this.master),M.start(),this.tyreFilter=b;let S=h(),_=e.createBiquadFilter();_.type="lowpass",_.frequency.value=180,this.rumbleGain=e.createGain(),this.rumbleGain.gain.value=0,S.connect(_),_.connect(this.rumbleGain),this.rumbleGain.connect(this.master),S.start(),this.rumbleFilter=_;let T=h(),x=e.createBiquadFilter();x.type="highpass",x.frequency.value=2200,this.rainGain=e.createGain(),this.rainGain.gain.value=0,T.connect(x),x.connect(this.rainGain),this.rainGain.connect(this.master),T.start();let w=h(),P=e.createBiquadFilter();P.type="bandpass",P.frequency.value=1700,P.Q.value=.7,this.sprayGain=e.createGain(),this.sprayGain.gain.value=0,w.connect(P),P.connect(this.sprayGain),this.sprayGain.connect(this.master),w.start(),this.sprayFilter=P,this.weather={rain:0,wet:0};let D=h(),C=e.createBiquadFilter();C.type="bandpass",C.frequency.value=700,C.Q.value=.4;let F=e.createGain();F.gain.value=.05,D.connect(C),C.connect(F),F.connect(this.master),D.start(),this.voices=[];for(let A=0;A<6;A++){let I=e.createOscillator(),B=e.createOscillator();I.type="triangle",B.type="triangle";let O=e.createGain();O.gain.value=0;let $=e.createBiquadFilter();$.type="lowpass",$.frequency.value=600;let L=e.createStereoPanner();I.connect($),B.connect($),$.connect(O),O.connect(L),L.connect(this.master),I.start(),B.start(),this.voices.push({o1:I,o2:B,g:O,f:$,pan:L,car:null})}this.started=!0}resume(){this.ctx&&this.ctx.state==="suspended"&&this.ctx.resume()}setEnabled(t){this.enabled=t,this.master&&this.master.gain.setTargetAtTime(t?this.volume:0,this.ctx.currentTime,.05)}setVolume(t){this.volume=t,this.master&&this.enabled&&this.master.gain.setTargetAtTime(t,this.ctx.currentTime,.05)}update(t,e,i,n,r){if(!this.started)return;let a=this.ctx.currentTime,o=(b,S,_=.03)=>b.setTargetAtTime(S,a,_);if(r){o(this.eng.gain,0,.1),o(this.windGain.gain,0,.1),o(this.tyreGain.gain,0,.1),o(this.rumbleGain.gain,0,.1),o(this.rainGain.gain,0,.1),o(this.sprayGain.gain,0,.1);for(let b of this.voices)o(b.g.gain,0,.1);return}let l=t.rpm,c=l/60,h=t.throttle,f=.25+.75*h;for(let b of this.oscs)o(b.o.frequency,c*b.mult,.02);o(this.engFilter.frequency,240+l*.13+h*320,.08),o(this.eng.gain,(.12+.2*f)*(.65+l/4e4),.08),o(this.nzGain.gain,.015+h*.03*(l/15e3),.08),o(this.nzf.frequency,900+l*.08,.1);let d=t.speed;o(this.windGain.gain,it((d/95)**2*.22,0,.25),.15),o(this.windFilter.frequency,250+d*5,.15);let u=0;for(let b=0;b<4;b++)u=Math.max(u,t.slipVis[b]);o(this.tyreGain.gain,it(u*.16,0,.14),.08),o(this.tyreFilter.frequency,800+300*it(d/60,0,1)+u*200,.1);let g=t.kerbShake*.22+(t.onGrass?it(d/60,0,1)*.2:0);o(this.rumbleGain.gain,g,.04),o(this.rumbleFilter.frequency,90+d*2.5,.1),o(this.rainGain.gain,this.weather.rain*.05,.4),o(this.sprayGain.gain,it(this.weather.wet*(d/80)*.11,0,.12),.2),o(this.sprayFilter.frequency,1200+d*12,.2),this.prevThr>.6&&h<.1&&l>8500&&d>25?this.pops(3+Math.floor(Math.random()*5),it((l-7e3)/8e3,.2,1)):h<.05&&l>9500&&d>40&&Math.random()<n*3.2&&this.pops(1+Math.floor(Math.random()*2),it((l-8e3)/7e3,.15,.8)),this.prevThr=h,t.gear!==this.lastGear&&(t.gear<this.lastGear&&h<.3&&l>8e3&&this.pops(2,.7),this.lastGear=t.gear,this.blip(110,.08,.035,"sine"));let m=i.pos,p=i.right,v=i.vel,M=e.map(b=>{let S=b.wx-m.x,_=b.wz-m.z;return{c:b,d2:S*S+_*_,dx:S,dz:_}}).sort((b,S)=>b.d2-S.d2).slice(0,this.voices.length);this.voices.forEach((b,S)=>{let _=M[S];if(!_||_.d2>62500){o(b.g.gain,0,.1);return}let T=_.c.car,x=Math.sqrt(_.d2)+1,w=(T.u*(_.dx*Math.cos(T.theta)-_.dz*Math.sin(T.theta)*0)+0)*0,P=_.c.vx-v.x,D=_.c.vz-v.z,C=(P*_.dx+D*_.dz)/x,F=1/(1+it(C,-90,90)/340),A=T.rpm/60*3*F;o(b.o1.frequency,A,.04),o(b.o2.frequency,A*.5,.04),o(b.f.frequency,220+T.rpm*.09,.1);let I=1/(1+(x/18)**1.6);o(b.g.gain,.07*I*(.4+.6*T.throttle),.08),o(b.pan.pan,it((_.dx*p.x+_.dz*p.z)/x,-1,1),.05)})}pops(t,e=.6){if(!this.started||!this.enabled)return;let i=this.ctx,n=0;for(let r=0;r<t;r++){n+=.03+Math.random()*.09;let a=i.currentTime+n,o=this.makeNoise(!1),l=i.createBiquadFilter();l.type="bandpass",l.frequency.value=500+Math.random()*1400,l.Q.value=.9;let c=i.createGain(),h=(.1+.16*e)*(.5+Math.random()*.6);c.gain.setValueAtTime(1e-4,a),c.gain.linearRampToValueAtTime(h,a+.004),c.gain.exponentialRampToValueAtTime(5e-4,a+.05+Math.random()*.05),o.connect(l),l.connect(c),c.connect(this.master),o.start(a,Math.random()),o.stop(a+.14);let f=i.createOscillator(),d=i.createGain();f.type="sine",f.frequency.setValueAtTime(140,a),f.frequency.exponentialRampToValueAtTime(55,a+.06),d.gain.setValueAtTime(1e-4,a),d.gain.linearRampToValueAtTime(h*.8,a+.004),d.gain.exponentialRampToValueAtTime(5e-4,a+.08),f.connect(d),d.connect(this.master),f.start(a),f.stop(a+.1)}}blip(t,e=.1,i=.1,n="sine",r=0){if(!this.started)return;let a=this.ctx,o=a.currentTime,l=a.createOscillator(),c=a.createGain();l.type=n,l.frequency.setValueAtTime(t,o),r&&l.frequency.exponentialRampToValueAtTime(Math.max(20,t+r),o+e),c.gain.setValueAtTime(i,o),c.gain.exponentialRampToValueAtTime(8e-4,o+e),l.connect(c),c.connect(this.master),l.start(o),l.stop(o+e+.02)}thud(t=1){if(!this.started)return;let e=this.ctx,i=e.currentTime,n=this.makeNoise(!1),r=e.createBiquadFilter();r.type="lowpass",r.frequency.value=500+900*t;let a=e.createGain();a.gain.setValueAtTime(it(.35+t*.5,0,1),i),a.gain.exponentialRampToValueAtTime(.001,i+.35+.3*t),n.connect(r),r.connect(a),a.connect(this.master),n.start(i,Math.random()),n.stop(i+.8),this.blip(90,.25,.3*t,"sine",-50)}light(t){this.blip(t>=5?880:660,.18,.12,"sine")}cheer(t=1){if(!this.started)return;let e=this.ctx,i=e.currentTime,n=this.makeNoise(!1),r=e.createBiquadFilter();r.type="bandpass",r.frequency.setValueAtTime(700,i),r.frequency.linearRampToValueAtTime(1500,i+1.2),r.Q.value=.5;let a=e.createGain();a.gain.setValueAtTime(1e-4,i),a.gain.linearRampToValueAtTime(.35*t,i+.9),a.gain.exponentialRampToValueAtTime(8e-4,i+4.5),n.connect(r),r.connect(a),a.connect(this.master),n.start(i,Math.random()),n.stop(i+4.6)}fanfare(){[[523.25,0],[659.25,.16],[783.99,.32],[1046.5,.5]].forEach(([t,e])=>setTimeout(()=>this.blip(t,.45,.08,"triangle"),e*1e3))}go(){this.blip(1320,.45,.14,"sine")}radioClick(){if(!this.started||!this.noiseBuf)return;let t=this.ctx,e=t.currentTime,i=t.createBufferSource();i.buffer=this.noiseBuf;let n=t.createBiquadFilter();n.type="bandpass",n.frequency.value=1900,n.Q.value=1.4;let r=t.createGain();r.gain.setValueAtTime(1e-4,e),r.gain.exponentialRampToValueAtTime(.09,e+.01),r.gain.exponentialRampToValueAtTime(8e-4,e+.16),i.connect(n),n.connect(r),r.connect(this.master),i.start(e),i.stop(e+.2),setTimeout(()=>this.blip(1500,.05,.035,"square"),170),setTimeout(()=>this.blip(1180,.05,.03,"square"),235)}ui(t="click"){t==="click"?this.blip(720,.05,.05,"triangle"):t==="good"?(this.blip(660,.1,.07,"triangle"),setTimeout(()=>this.blip(990,.14,.07,"triangle"),90)):t==="bad"?this.blip(180,.25,.1,"sawtooth",-60):t==="radio"&&this.radioClick()}};var Tp=s=>String(s??"").replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t]),Vt=(s,t=document)=>t.querySelector(s),Ud=15,Li=(s,t)=>{t=String(t),s._t!==t&&(s._t=t,s.textContent=t)},ka=(s,t)=>{s._c!==t&&(s._c=t,s.className=t)},kd=(s,t,e)=>{let i="_s"+t;s[i]!==e&&(s[i]=e,s.style[t]=e)},Ap=s=>(s=Math.ceil(s),Math.floor(s/60)+":"+String(s%60).padStart(2,"0")),Nc=class{constructor(t){this.root=t,this.units="kmh",this.msgs=[],this.lastTower=0,this.lastMini=0,this.teleOn=!1,this.keyNames={pit:"B",tyre:"T"},this.teleBuf={t:new Float32Array(240),b:new Float32Array(240),s:new Float32Array(240),v:new Float32Array(240),n:0,last:0,draw:0},t.innerHTML=`
      <div id="tower" class="hud-box"><div class="hd"><span>Race</span><span id="tw-lap"></span></div><div id="tw-rows"></div></div>
      <div id="topbar" class="hud-box"><div class="lap" id="tb-lap"></div><div class="clock" id="tb-clock"></div><div class="wx" id="tb-wx"></div></div>
      <div id="timing" class="hud-box">
        <div><span class="cur" id="t-cur">0:00.000</span><span class="delta" id="t-delta"></span></div>
        <div class="lines"><span>Last</span><span id="t-last">--:--.---</span><span>Best</span><span id="t-best">--:--.---</span><span>Fastest</span><span id="t-fast">--:--.---</span></div>
        <div class="sectors" id="t-sec"><i></i><i></i><i></i></div>
      </div>
      <div id="minimap" class="hud-box"><canvas width="380" height="260"></canvas></div>
      <div id="lights" class="hud-box hidden"><i></i><i></i><i></i><i></i><i></i></div>
      <div id="pitgame" class="hud-box hidden"><div class="pgt">Pit stop \xB7 press <kbd>Space</kbd> with the marker in the green</div><div class="pgw">${["FL","FR","RL","RR"].map(e=>`<div class="nut"><div class="trk"><i class="gd"></i><i class="pf"></i><b></b></div><span>${e}</span></div>`).join("")}</div><div class="pgr"></div></div>
      <div id="msgs"></div>
      <canvas id="livetele" class="hud-box hidden" width="440" height="150"></canvas>
      <div id="lesson" class="hud-box hidden"></div>
      <div id="radio" class="hud-box hidden"><b>Radio</b><span id="radio-t"></span></div>
      <div id="pit" class="hud-box hidden"></div>
      <div id="dash" class="hud-box">
        <div class="revs" id="revs">${"<i></i>".repeat(Ud)}</div>
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
    `,this.el={twRows:Vt("#tw-rows"),twLap:Vt("#tw-lap"),tbLap:Vt("#tb-lap"),tbClock:Vt("#tb-clock"),tbWx:Vt("#tb-wx"),pitgame:Vt("#pitgame"),cur:Vt("#t-cur"),delta:Vt("#t-delta"),last:Vt("#t-last"),best:Vt("#t-best"),fast:Vt("#t-fast"),sec:Vt("#t-sec"),mini:Vt("#minimap canvas"),lights:Vt("#lights"),msgs:Vt("#msgs"),radio:Vt("#radio"),lesson:Vt("#lesson"),tele:Vt("#livetele"),radioT:Vt("#radio-t"),pit:Vt("#pit"),revs:Vt("#revs"),soc:Vt("#d-soc"),socb:Vt("#d-socb"),drs:Vt("#d-drs"),boost:Vt("#d-boost"),gap:Vt("#d-gap"),gear:Vt("#d-gear"),spd:Vt("#d-spd"),unit:Vt("#d-unit"),thr:Vt("#p-thr"),brk:Vt("#p-brk"),rpm:Vt("#d-rpm"),tyreBoxes:[...t.querySelectorAll("#tyres .tyre")],tyB:Vt("#ty-b"),tyN:Vt("#ty-n"),tyW:Vt("#ty-w"),tyT:Vt("#ty-t"),tyF:Vt("#ty-f"),tyD:Vt("#ty-d"),g:Vt("#gmeter canvas"),flag:Vt("#flag"),keyhint:Vt("#keyhint"),finish:Vt("#finish"),confetti:Vt("#confetti"),tower:Vt("#tower"),minimap:Vt("#minimap"),touch:Vt("#touch")},this.rev=[...this.el.revs.children],this.rev.forEach((e,i)=>e.classList.add(i<5?"g":i<10?"r":"b")),this.rows=[];for(let e=0;e<13;e++){let i=document.createElement("div");i.className="r",i.innerHTML='<span class="p"></span><span class="c"></span><span class="n"></span><span class="nm"></span><span class="g"></span>',this.el.twRows.appendChild(i),this.rows.push(i)}this.lightEls=[...this.el.lights.children],this.mapBase=null}setUnits(t){this.units=t,this.el.unit.textContent=t==="mph"?"MPH":"KM/H"}setTrack(t){this.track=t;let e=document.createElement("canvas");e.width=380,e.height=260;let i=e.getContext("2d"),n=1/0,r=-1/0,a=1/0,o=-1/0;for(let p=0;p<t.N;p++)n=Math.min(n,t.x[p]),r=Math.max(r,t.x[p]),a=Math.min(a,t.y[p]),o=Math.max(o,t.y[p]);let l=22,c=Math.min((e.width-2*l)/(r-n),(e.height-2*l)/(o-a)),h=(e.width-(r-n)*c)/2,f=(e.height-(o-a)*c)/2;this.map={sc:c,ox:h,oy:f,minX:n,minY:a,h:e.height};let d=p=>h+(p-n)*c,u=p=>e.height-(f+(p-a)*c);i.lineJoin="round",i.lineCap="round";let g=()=>{i.beginPath();for(let p=0;p<=t.N;p+=2){let v=p%t.N;p===0?i.moveTo(d(t.x[v]),u(t.y[v])):i.lineTo(d(t.x[v]),u(t.y[v]))}i.closePath()};i.strokeStyle="rgba(0,0,0,0.8)",i.lineWidth=9,g(),i.stroke(),i.strokeStyle="#8c95a3",i.lineWidth=5,g(),i.stroke();let y=d(t.x[0]),m=u(t.y[0]);i.fillStyle="#fff",i.fillRect(y-5,m-2,10,4),i.strokeStyle="#31d17a",i.lineWidth=3;for(let p of t.drs){i.beginPath();let v=!0,M=Math.floor(p.start/t.ds),b=Math.floor((p.end-p.start+t.length)%t.length/t.ds);for(let S=0;S<=b;S+=2){let _=(M+S)%t.N;v?i.moveTo(d(t.x[_]),u(t.y[_])):i.lineTo(d(t.x[_]),u(t.y[_])),v=!1}i.stroke()}this.mapBase=e,this.mapPx=d,this.mapPy=u}showFinish(t){let e=o=>o+["th","st","nd","rd"][o%100>10&&o%100<14?0:o%10<4?o%10:0],i=t.pos,[n,r]=i===1?["Victory","gold"]:i<=3?["Podium","podium"]:i<=10?["Points finish","points"]:["Chequered flag","plain"],a=i===1?"Winner":t.gap!=null?`+${t.gap.toFixed(3)} s to the winner`:"";this.el.finish.className="tone-"+r,this.el.finish.style.setProperty("--c",String(t.team.color).replace(/[^#0-9a-zA-Z(),. %]/g,"")),this.el.finish.innerHTML=`
      <div class="eyebrow">${Tp(t.name)} \xB7 ${Tp(t.team.name)}</div>
      <div class="big"><span class="pos">${i}</span><span class="ord">${e(i).replace(/^\d+/,"")}</span></div>
      <div class="title">${n}</div>
      <div class="facts"><div><span>Race time</span><b>${Se(t.time)}</b></div><div><span>Gap</span><b>${a}</b></div><div><span>Best lap</span><b>${t.best<1/0?Se(t.best):"\u2014"}</b></div></div>
      ${t.penalty?`<div class="hint">Includes pending time penalties (+${t.penalty}s) when classified</div>`:""}
      <div class="cont" id="fin-cont">Press <kbd>Enter</kbd> or click for the results</div>`,this.el.finish.classList.remove("hidden"),document.getElementById("hud").classList.add("cine"),clearTimeout(this._finT),this.stopConfetti(),i<=3&&this.startConfetti(i===1?260:150),this._finT=setTimeout(()=>{let o=document.getElementById("fin-cont");o&&o.classList.add("show")},3e3)}hideFinish(){this.el.finish.classList.add("hidden"),document.getElementById("hud").classList.remove("cine"),clearTimeout(this._finT),this.stopConfetti()}startConfetti(t){let e=this.el.confetti,i=Math.min(window.devicePixelRatio||1,2);e.width=window.innerWidth*i,e.height=window.innerHeight*i,e.style.display="block";let n=e.getContext("2d"),r=["#ff2a2a","#ffb400","#f4f4f4","#31d17a","#3b9bff","#b36bff"],a=Array.from({length:t},()=>({x:Math.random()*e.width,y:-Math.random()*e.height*.6,vx:(Math.random()-.5)*160*i,vy:(120+Math.random()*220)*i,w:(6+Math.random()*8)*i,h:(4+Math.random()*6)*i,r:Math.random()*6.28,vr:(Math.random()-.5)*10,col:r[Math.floor(Math.random()*r.length)],ph:Math.random()*6})),o=performance.now(),l=o;this._confetti=!0;let c=h=>{if(!this._confetti)return;let f=Math.min(.05,(h-o)/1e3);o=h,n.clearRect(0,0,e.width,e.height);let d=(h-l)/1e3;for(let u of a)u.x+=(u.vx+Math.sin(d*2+u.ph)*40*i)*f,u.y+=u.vy*f,u.r+=u.vr*f,u.y>e.height+20&&d<7&&(u.y=-20,u.x=Math.random()*e.width),n.save(),n.translate(u.x,u.y),n.rotate(u.r),n.fillStyle=u.col,n.globalAlpha=d>8?Math.max(0,1-(d-8)/2):1,n.fillRect(-u.w/2,-u.h/2,u.w,u.h*Math.abs(Math.cos(u.r*2))),n.restore();d<10?requestAnimationFrame(c):this.stopConfetti()};requestAnimationFrame(c)}stopConfetti(){this._confetti=!1;let t=this.el.confetti;t.style.display="none",t.getContext("2d").clearRect(0,0,t.width,t.height)}showKeyHint(t=9e3,e=null){let i=r=>(e&&e[r]||Na[r]||[]).filter(a=>a!=="Escape"||r==="pause").slice(0,1).map(a=>`<kbd>${gr(a)}</kbd>`).join(""),n=(r,a)=>i(r)+i(a);this.el.keyhint.innerHTML=`<div><b>${n("throttle","brake")}</b> throttle / brake &nbsp; <b>${n("left","right")}</b> steer &nbsp; <b>${i("drs")}</b> DRS &nbsp; <b>${i("boost")}</b> ERS boost &nbsp; <b>${i("pit")}</b> pit &nbsp; <b>${i("camera")}</b> camera &nbsp; <b>${i("reset")}</b> reset &nbsp; <b>${i("pause")}</b> pause</div><div class="hint">Press ${i("drs")} to start the lights \xB7 hold ${i("throttle")} to build revs; the car is held until the lights go out \xB7 brake at a standstill to reverse \xB7 ${i("auto")} hands the car to the autopilot</div>`,this.el.keyhint.classList.remove("hidden"),this.el.keyhint.style.opacity=1,clearTimeout(this._khT),clearTimeout(this._khT2),this._khT=setTimeout(()=>{this.el.keyhint.style.opacity=0,this._khT2=setTimeout(()=>this.el.keyhint.classList.add("hidden"),600)},t)}show(t){this.root.classList.toggle("hidden",!t),t&&(this.hideFinish(),clearTimeout(this._lightT),this.teleBuf.n=0,this.teleBuf.last=0)}message(t,e="",i="",n=3.2){let r=document.createElement("div");for(r.className="msg "+e,r.innerHTML=t+(i?`<small>${i}</small>`:""),this.el.msgs.prepend(r);this.el.msgs.children.length>4;)this.el.msgs.lastChild.remove();setTimeout(()=>r.remove(),n*1e3)}setLesson(t,e,i,n){let r=this.el.lesson;if(!t)return r.classList.add("hidden");r.classList.remove("hidden");let a=`<b>${t.title}</b>`+t.goals.map(o=>`<div class="goal ${e[o.id]?"ok":""}">${e[o.id]?"\u2713":"\u25CB"} ${o.text}${!e[o.id]&&o.progress?` <i>${o.progress(i)}</i>`:""}</div>`).join("")+(n?'<div class="goal ok">Lesson complete: keep driving or press Esc</div>':"");a!==this._lessonHtml&&(this._lessonHtml=a,r.innerHTML=a)}radio(t,e=5){this.onRadio&&this.el.radioT.textContent!==t&&this.onRadio(),this.el.radio.classList.remove("hidden"),this.el.radioT.textContent=t,clearTimeout(this._radioT),this._radioT=setTimeout(()=>this.el.radio.classList.add("hidden"),e*1e3)}flag(t,e,i=2,n=""){let r=this.el.flag;r.textContent=t,r.style.color=e,r.className="show "+n,clearTimeout(this._flagT),this._flagT=setTimeout(()=>r.className="",i*1e3)}setLights(t,e=!1){this.el.lights.classList.toggle("hidden",t===0&&!e),this.lightEls.forEach((i,n)=>i.classList.toggle("on",n<t)),clearTimeout(this._lightT),e&&(this._lightT=setTimeout(()=>this.el.lights.classList.add("hidden"),700))}toggleTele(){return this.teleOn=!this.teleOn,this.el.tele.classList.toggle("hidden",!this.teleOn),this.teleOn}tele(t,e){let i=this.teleBuf;if(e-i.last>=50){i.last=e;let f=i.n%240;i.t[f]=t.throttle,i.b[f]=t.brake,i.s[f]=t.steer,i.v[f]=t.speed,i.n++}if(!this.teleOn||e-i.draw<100)return;i.draw=e;let n=this.el.tele,r=n.getContext("2d"),a=n.width,o=n.height;r.clearRect(0,0,a,o),r.fillStyle="rgba(8,10,16,0.62)",r.fillRect(0,0,a,o);let l=Math.min(i.n,240),c=i.n-l,h=(f,d,u,g,y,m,p)=>{r.beginPath();for(let v=0;v<l;v++){let M=(f[(c+v)%240]-y)/(m-y),b=(240-l+v)/239*a,S=d+u-it(M,0,1)*u;v?r.lineTo(b,S):r.moveTo(b,S)}r.strokeStyle=g,r.lineWidth=2,r.stroke(),p&&(r.lineTo(a,d+u),r.lineTo((240-l)/239*a,d+u),r.fillStyle=p,r.fill())};h(i.v,8,62,"#e8ecf4",0,100),h(i.t,78,28,"#3ddc84",0,1,"rgba(61,220,132,0.16)"),h(i.b,78,28,"#ff4b4b",0,1,"rgba(255,75,75,0.16)"),r.strokeStyle="rgba(255,255,255,0.18)",r.lineWidth=1,r.beginPath(),r.moveTo(0,128),r.lineTo(a,128),r.stroke(),h(i.s,112,32,"#58a6ff",-1,1),r.fillStyle="rgba(255,255,255,0.6)",r.font="11px sans-serif",r.fillText("SPEED",6,18),r.fillText("THROTTLE / BRAKE",6,92),r.fillText("STEER",6,124)}update(t,e,i,n){let r=this.el;this.tele(e,n);let a=e.rs,o=this.units==="mph",l=e.speed*(o?2.23694:3.6);Li(r.spd,Math.round(l));let c=e.gear<0?"R":e.speed<.5&&e.throttle<.05&&e.gear===1?"N":e.gear;Li(r.gear,c);let h=9500,d=it((e.rpm-h)/(14400-h),0,1),u=Math.round(d*Ud),g=e.rpm>14700;if(ka(r.revs,"revs"+(g&&Math.floor(n/70)%2===0?" flash":"")),this._lit!==u){this._lit=u;for(let L=0;L<Ud;L++)this.rev[L].classList.toggle("on",L<u)}if(Li(r.soc,Math.round(e.soc*100)+"%"),kd(r.socb,"width",Math.round(e.soc*100)+"%"),kd(r.thr,"height",Math.round(e.throttle*100)+"%"),kd(r.brk,"height",Math.round(e.brake*100)+"%"),Li(r.rpm,Math.round(e.rpm/100)*100+" rpm"),ka(r.drs,"pill"+(e.drsPos>.5?" on":e.drsAllowed?" avail":"")),ka(r.boost,"pill boost"+(i.boost&&e.soc>.01?" on":"")),t.phase==="racing"||t.phase==="finished"){let L=Math.max(0,t.time-a.lapStart);Li(r.cur,a.finished?Se(a.last):Se(L))}else Li(r.cur,"0:00.000");Li(r.last,Se(a.last)),Li(r.best,Se(a.best)),Li(r.fast,t.fastest.car?`${t.fastest.car.info.code} ${Se(t.fastest.time)}`:"--:--.---"),a.delta!=null&&a.lapCpBest?(Li(r.delta,(a.delta>=0?"+":"-")+Math.abs(a.delta).toFixed(2)),ka(r.delta,"delta "+(a.delta<0?"neg":"pos"))):Li(r.delta,"");let y=r.sec.children;for(let L=0;L<3;L++){let z=a.sectorFlag&&a.sectorFlag.idx===L?a.sectorFlag.kind:"",G=a.sectors[L]!=null&&(L<a.sectorIdx||L===2&&a.sectorIdx===0&&!1),rt="";a.sectors[L]!=null&&(rt=a.sectors[L]<=t.bestSectors[L]+1e-6?"purple":a.sectors[L]<=a.bestSectors[L]+1e-6?"green":"yellow"),ka(y[L],(L<a.sectorIdx||a.sectorIdx===0&&L===2&&a.sectors[2]!=null&&a.laps>0?rt:"")+(L===a.sectorIdx?" cur":""))}let m=t.totalLaps,p=Math.min(m,Math.max(1,a.laps+1)),v=t.isQuali?`<small>${t.chequered?"Final lap":"Time left"}</small>${t.chequered?"":Ap(t.qualiLeft())}`:t.opt.mode==="timetrial"?`<small>Lap</small>${Math.max(1,a.laps+1)}`:`<small>Lap</small>${a.finished?m:p}/${m}`;this._lapHtml!==v&&(this._lapHtml=v,r.tbLap.innerHTML=v);let M=t.t0!=null?t.time-t.t0:0,b=t.phase==="grid"||t.phase==="countdown"?t.opt.mode==="timetrial"?"Time trial":"Formation":Se(Math.max(0,M),1);t.sc&&t.sc.state!=="none"?b=t.sc.state==="ending"?"SC in this lap":"SAFETY CAR":t.isQuali?b=a.laps<1?"Out lap":a.finished?"Session over":a.laps<2?"Push lap":"Flying lap":t.opt.mode==="timetrial"&&(b=a.laps<2?a.laps===0?"Out lap":"Push lap":"Flying lap"),Li(r.tbClock,b);let S="";if(t.wet>.12||t.rain>.05)S=t.rain>.05?`Rain ${Math.round(t.rain*100)}% \xB7 track ${t.wet>.6?"soaked":t.wet>.3?"wet":"damp"}`:`Track ${t.wet>.6?"soaked":t.wet>.3?"wet":"damp"} \xB7 drying`;else{let L=t.forecast&&t.forecast();L&&L.rainIn<150&&(S=`Rain in ${Ap(L.rainIn)}`)}this._wx!==S&&(this._wx=S,r.tbWx.textContent=S,r.tbWx.style.display=S?"":"none");let _=e.ahead,T=e.behind,x=t.opt.mode==="timetrial"?"":t.isQuali?`P${a.pos} of ${t.cars.length}${_&&Number.isFinite(a.best)?`<br>\u25B2 ${_.info.code} <b>${(e.gapAhead??0).toFixed(3)}</b>`:""}`:`${_?`\u25B2 ${_.info.code} <b>+${(e.gapAhead??0).toFixed(1)}</b>`:"Leading"}<br>${T?`\u25BC ${T.info.code} <b>-${(T.gapAhead??0).toFixed(1)}</b>`:""}`;this._gapHtml!==x&&(this._gapHtml=x,r.gap.innerHTML=x);let w=e.tyreSummary(),P=e.compound;r.tyB.textContent=P.letter,r.tyB.style.background=P.color,r.tyN.textContent=P.name;let D=e.rs.advice;r.tyW.textContent=`Wear ${Math.round(w.wear*100)}%`+(D&&!e.rs.pitRequested?` \xB7 box ${D.thisLap?"now":"lap "+D.lap} (${ii[D.compound].letter})`:"");let C=Math.max(e.brakeTemp[0],e.brakeTemp[1],e.brakeTemp[2],e.brakeTemp[3]);r.tyT.textContent=`Temp ${Math.round(w.temp)}\xB0C \xB7 Brakes ${Math.round(C/10)*10}\xB0${C>1e3?" FADE":""}`,r.tyF.textContent=`Fuel ${e.fuel.toFixed(1)} kg \xB7 ${["LEAN","STD","RICH"][e.fuelMode]} \xB7 ERS ${["HARV","BAL","ATK"][e.ersMode]} \xB7 BB ${Math.round(e.spec.brakeBias*100)}`;let F=e.damageSummary(),A=F.worst,I=Math.max(e.flat[0],e.flat[1],e.flat[2],e.flat[3]);r.tyD.textContent=A>.05?`FW ${Math.round(F.fw*100)}% \xB7 SP ${Math.round(Math.max(F.sideL,F.sideR)*100)}% \xB7 RW ${Math.round(F.rw*100)}% \xB7 downforce \u2212${Math.round(F.aeroLoss*100)}%`:I>.2?"Flat spots":"";for(let L=0;L<4;L++){let z=r.tyreBoxes[L],G=e.temp[L],rt=P.tOpt,et=G-rt;z.style.background=`hsl(${et<-P.tRange*.5?205:et>P.tRange*.5?2:128}, 70%, 42%)`,z.firstElementChild.style.height=it(e.wear[L],0,1)*100+"%"}let B=r.pitgame,O=a.service&&a.service.pg;if(O){B.classList.remove("hidden");let L=B.querySelectorAll(".nut");O.w.forEach((G,rt)=>{let et=L[rt],Et=et.querySelector("b");Et.style.left=it(G.p,0,1)*100+"%";let vt=G.res?"r-"+G.res:G.p>=0?"live":"";et._c!==vt&&(et._c=vt,et.className="nut "+vt)});let z=O.done?O.misses?`${O.misses} cross-threaded: ${O.dur.toFixed(1)} s`:O.goods?`Clean stop: ${O.dur.toFixed(1)} s`:`Perfect stop: ${O.dur.toFixed(1)} s`:"";B._m!==z&&(B._m=z,B.querySelector(".pgr").textContent=z)}else B.classList.contains("hidden")||B.classList.add("hidden");let $=r.pit;if(a.service){$.classList.remove("hidden"),$.classList.add("service");let L=`<div class="big">${Number.isFinite(a.service.dur)?Math.max(0,a.service.dur-a.service.t).toFixed(1):"\u2026"}</div>Pit stop in progress`;$._h!==L&&($._h=L,$.innerHTML=L)}else if(a.pitRequested&&t.track.pit){$.classList.remove("hidden","service");let z=`<div class="big">Box, box</div>Entering pits this lap \xB7 next tyre <b>${(a.nextCompound||"(auto)").toUpperCase()}</b> <span class="hint">[${this.keyNames.tyre}] to change \xB7 [${this.keyNames.pit}] cancel</span>`;$._h!==z&&($._h=z,$.innerHTML=z)}else $.classList.add("hidden");n-this.lastTower>120&&(this.lastTower=n,this.updateTower(t,e),this.drawG(e)),n-this.lastMini>50&&(this.lastMini=n,this.drawMap(t,e))}updateTower(t,e){let i=t.sorted;if(t.opt.mode==="timetrial"){this.el.tower.classList.add("hidden");return}this.el.tower.classList.remove("hidden");let n=i.length,r=e.rs.pos-1,a=[];if(n<=13)a=i.map((o,l)=>l);else{let o=new Set([0,1,2,3,4]);for(let l=r-3;l<=r+3;l++)l>=0&&l<n&&o.add(l);a=[...o].sort((l,c)=>l-c).slice(0,13)}this.el.twLap.textContent=t.isQuali?"Qualifying":`${n} cars`,this.rows.forEach((o,l)=>{if(l>=a.length){o.style.display="none";return}o.style.display="";let c=i[a[l]],h=c.rs;o.classList.toggle("me",c===e),o.style.setProperty("--c",c.info.team.color),o.children[0].textContent=a[l]+1,o.children[2].textContent=c.info.code;let f="";t.isQuali?f=Number.isFinite(h.best)?a[l]===0?Se(h.best):`+${(h.best-i[0].rs.best).toFixed(3)}`:"--":a[l]===0?f=h.finished?"FIN":t.phase==="racing"?`L${Math.min(t.totalLaps,h.laps+1)}`:"":t.phase!=="racing"&&t.phase!=="finished"?f="":h.lapsDown>0?f=`+${h.lapsDown}L`:f=`+${(c.gapAhead??0).toFixed(1)}`,(h.inPitLane||h.service)&&(f='<span class="pit">PIT</span>'),o.children[4].innerHTML=`${f}<span class="t" style="background:${c.compound.color}">${c.compound.letter}</span>`,o.children[3].textContent=""})}drawG(t){let e=this.el.g.getContext("2d"),i=200;e.clearRect(0,0,i,i),e.fillStyle="rgba(13,16,21,0.8)",e.beginPath(),e.arc(100,100,98,0,6.283),e.fill(),e.strokeStyle="rgba(255,255,255,0.18)",e.lineWidth=2;for(let a of[32,65,96])e.beginPath(),e.arc(100,100,a,0,6.283),e.stroke();e.beginPath(),e.moveTo(100,6),e.lineTo(100,194),e.moveTo(6,100),e.lineTo(194,100),e.stroke();let n=it(-t.latG/5,-1,1)*96,r=it(-t.longG/5,-1,1)*96;e.fillStyle="#ff2a2a",e.beginPath(),e.arc(100+n,100+r,9,0,6.283),e.fill(),e.fillStyle="#fff",e.font="700 22px sans-serif",e.textAlign="center",e.fillText(Math.hypot(t.latG,t.longG).toFixed(1)+"g",100,190)}drawMap(t,e){if(!this.mapBase)return;let i=this.el.mini,n=i.getContext("2d");n.clearRect(0,0,i.width,i.height),n.drawImage(this.mapBase,0,0);let r=this.mapPx,a=this.mapPy;for(let o of t.cars)o!==e&&(n.fillStyle=o.info.team.color,n.beginPath(),n.arc(r(o.x),a(o.y),4.2,0,6.283),n.fill(),n.strokeStyle="#000",n.lineWidth=1,n.stroke());t.ghostPos&&(n.fillStyle="rgba(255,255,255,0.5)",n.beginPath(),n.arc(r(t.ghostPos.x),a(t.ghostPos.y),4.5,0,6.283),n.fill()),n.fillStyle="#fff",n.strokeStyle="#ff2a2a",n.lineWidth=3,n.beginPath(),n.arc(r(e.x),a(e.y),6.5,0,6.283),n.fill(),n.stroke()}};function Ba(s,t,e={}){let i=Math.min(2,window.devicePixelRatio||1),n=s.clientWidth||420,r=s.clientHeight||200;s.width=Math.round(n*i),s.height=Math.round(r*i);let a=s.getContext("2d");a.setTransform(i,0,0,i,0,0),a.clearRect(0,0,n,r);let o=t.flatMap(_=>_.pts).filter(_=>Number.isFinite(_.y)),l=50,c=12,h=26,f=24;if(a.font="600 11px system-ui, sans-serif",a.fillStyle="rgba(255,255,255,0.75)",a.textBaseline="alphabetic",e.title&&(a.font="700 12px system-ui, sans-serif",a.fillText(e.title,l,15)),a.font="600 11px system-ui, sans-serif",!o.length){a.fillStyle="rgba(255,255,255,0.45)",a.fillText("No data",l+10,r/2);return}let d=Math.min(...o.map(_=>_.x)),u=Math.max(...o.map(_=>_.x)),g=e.yMin??Math.min(...o.map(_=>_.y)),y=e.yMax??Math.max(...o.map(_=>_.y));if(u===d&&(u=d+1),y===g&&(y=g+1),e.minSpan&&y-g<e.minSpan){let _=(g+y)/2;e.yMin==null&&(g=_-e.minSpan/2),e.yMax==null&&(y=_+e.minSpan/2)}let m=(y-g)*.08;e.yMin==null&&(g-=m),e.yMax==null&&(y+=m);let p=_=>l+(_-d)/(u-d)*(n-l-c),v=_=>r-f-(_-g)/(y-g)*(r-h-f),M=e.fmtY||(_=>_.toFixed(0));a.strokeStyle="rgba(255,255,255,0.1)",a.lineWidth=1,a.fillStyle="rgba(255,255,255,0.55)",a.textAlign="right";for(let _=0;_<=4;_++){let T=g+(y-g)*_/4,x=Math.round(v(T))+.5;a.beginPath(),a.moveTo(l,x),a.lineTo(n-c,x),a.stroke(),a.fillText(M(T,y-g),l-6,x+4)}a.textAlign="center";let b=e.xTicks||[d,u];for(let _ of b)a.fillText(String(_),p(_),r-8);for(let _ of e.markers||[])_.x<d||_.x>u||(a.strokeStyle=_.color||"rgba(255,200,0,0.7)",a.setLineDash([3,3]),a.beginPath(),a.moveTo(p(_.x),h),a.lineTo(p(_.x),r-f),a.stroke(),a.setLineDash([]),a.fillStyle=_.color||"rgba(255,200,0,0.9)",a.fillText(_.label||"",p(_.x),h-4));for(let _ of t){let T=_.pts.filter(x=>Number.isFinite(x.y));if(T.length){a.strokeStyle=_.color,a.fillStyle=_.color,a.lineWidth=_.width||2,a.setLineDash(_.dash?[5,4]:[]),a.beginPath(),T.forEach((x,w)=>w?a.lineTo(p(x.x),v(Math.min(y,Math.max(g,x.y)))):a.moveTo(p(x.x),v(Math.min(y,Math.max(g,x.y))))),a.stroke(),a.setLineDash([]);for(let x of T)a.beginPath(),a.arc(p(x.x),v(Math.min(y,Math.max(g,x.y))),2.6,0,6.283),a.fill()}}a.textAlign="left";let S=n-c;for(let _ of[...t].reverse()){let T=a.measureText(_.name).width;S-=T+18,a.fillStyle=_.color,a.fillRect(S,7,10,3),a.fillStyle="rgba(255,255,255,0.75)",a.fillText(_.name,S+14,12),S-=6}}var Oa={races:0,wins:0,podiums:0,poles:0,fastestLaps:0,finished:0,km:0,passes:0,pitStops:0,perfectStops:0,rainRaces:0,nightRaces:0,careerTitles:0,championships:0,cleanRaces:0,dnf:0},jn=[{id:"first",name:"Lights out",desc:"Finish your first race.",test:s=>s.finished>=1},{id:"podium",name:"On the podium",desc:"Finish in the top three.",test:s=>s.podiums>=1},{id:"win",name:"Winner",desc:"Win a race.",test:s=>s.wins>=1},{id:"win5",name:"Serial winner",desc:"Win five races.",test:s=>s.wins>=5},{id:"pole",name:"Pole position",desc:"Set the fastest lap in qualifying.",test:s=>s.poles>=1},{id:"fl",name:"Purple sectors",desc:"Set the fastest lap of a race.",test:s=>s.fastestLaps>=1},{id:"lastfirst",name:"From the back",desc:"Win a race from the last three places on the grid.",test:(s,t)=>!!t&&t.finishedRace&&t.pos===1&&t.grid>=t.cars-2&&t.cars>=8},{id:"tenpass",name:"Overtaker",desc:"Make 10 passes in a single race.",test:(s,t)=>!!t&&t.passes>=10},{id:"clean",name:"Clean sweep",desc:"Finish a 3+ lap race on the podium with no penalties and no damage.",test:(s,t)=>!!t&&t.finishedRace&&t.laps>=3&&t.pos<=3&&t.penalty===0&&!t.damaged},{id:"perfectstop",name:"Pit crew pride",desc:"Nail all four wheel nuts for a 2.5 second stop.",test:s=>s.perfectStops>=1},{id:"rain",name:"Rain master",desc:"Win a race in the rain.",test:(s,t)=>!!t&&t.finishedRace&&t.pos===1&&t.wet},{id:"night",name:"Night owl",desc:"Win a night race.",test:(s,t)=>!!t&&t.finishedRace&&t.pos===1&&t.night},{id:"legend",name:"Against the best",desc:"Win a race against Legend-level opposition.",test:(s,t)=>!!t&&t.finishedRace&&t.pos===1&&t.level>=.95&&t.cars>=10},{id:"grid20",name:"Full house",desc:"Finish a race with all 20 cars on the grid.",test:(s,t)=>!!t&&t.cars>=20&&t.finishedRace},{id:"km500",name:"Mileage",desc:"Drive 500 km in total.",test:s=>s.km>=500},{id:"champ",name:"Champion",desc:"Win a championship.",test:s=>s.championships>=1},{id:"career",name:"Career champion",desc:"Win a drivers' title in career mode.",test:s=>s.careerTitles>=1},{id:"underdog",name:"Underdog",desc:"Finish on the podium in career mode with one of the bottom three teams.",test:(s,t)=>!!t&&t.finishedRace&&t.career&&t.teamRank>=7&&t.pos<=3},{id:"veteran",name:"Veteran",desc:"Complete 25 races.",test:s=>s.finished>=25},{id:"cleanx5",name:"Gentleman driver",desc:"Finish five races without penalties or damage.",test:s=>s.cleanRaces>=5}];function Rp(s,t){let e=s.stats={...Oa,...s.stats||{}},i=s.achievements=s.achievements||{};t.kind==="race"?(e.races++,t.finishedRace?e.finished++:e.dnf++,t.pos===1&&t.finishedRace&&e.wins++,t.pos<=3&&t.finishedRace&&e.podiums++,t.fastest&&e.fastestLaps++,e.km+=t.km||0,e.passes+=t.passes||0,e.pitStops+=t.stops||0,e.perfectStops+=t.perfectStops||0,t.wet&&e.rainRaces++,t.night&&e.nightRaces++,t.finishedRace&&t.penalty===0&&!t.damaged&&e.cleanRaces++):t.kind==="quali"?(t.pos===1&&e.poles++,e.km+=t.km||0):t.kind==="championship"?t.pos===1&&e.championships++:t.kind==="career"&&t.pos===1&&e.careerTitles++;let n=[];for(let r of jn){if(i[r.id])continue;let a=!1;try{a=!!r.test(e,t.kind==="race"?t:null)}catch{a=!1}a&&(i[r.id]=Date.now(),n.push(r.id))}return n}var Lp="apex-grand-prix.v1",d_={quality:"high",volume:.55,units:"kmh",line:!0,minimap:!0,shake:!0,camera:"chase",tower:!0,blur:!0,steerSpeed:1,padDead:.07,rumble:!0,autoQuality:!0,cbSafe:!1,calm:!1,bigHud:!1,bloom:!0,keys:{}},u_={mode:"race",trackId:"northfield",laps:5,level:.55,fieldSize:20,playerGrid:12,team:1,compound:"medium",tyreWear:3,damage:!0,collisions:!0,mandatoryStop:!1,pitCalls:"radio",adaptive:!1,qualify:!1,equalCars:!0,weather:"dry",timeOfDay:"progress",frontWing:null,rearWing:null,brakeBias:.58,pressure:0,assists:{abs:!0,tc:2,steer:!0,stability:1,autoGear:!0,pitAuto:!0,pitGame:!0}},Cp={Beginner:{abs:!0,tc:3,steer:!0,stability:3,autoGear:!0,pitAuto:!0,pitGame:!1},Intermediate:{abs:!0,tc:2,steer:!0,stability:1,autoGear:!0,pitAuto:!0,pitGame:!0},Pro:{abs:!0,tc:1,steer:!1,stability:0,autoGear:!0,pitAuto:!0,pitGame:!0},Simulator:{abs:!1,tc:0,steer:!1,stability:0,autoGear:!1,pitAuto:!1,pitGame:!0}},Pp=["Off","Low","Medium","High"],vi=s=>s&&typeof s=="object"&&!Array.isArray(s),Ei=(s,t,e,i)=>Number.isFinite(+s)&&s!==null&&s!==""?Math.min(e,Math.max(t,+s)):i,on=(s,t,e)=>t.includes(s)?s:e,Fe=(s,t)=>typeof s=="boolean"?s:t;function Bd(s){let t=vi(s)?s:{},e=u_,i=vi(t.assists)?t.assists:{},n=Math.round(Ei(t.fieldSize,2,20,e.fieldSize)),r=a=>a==null?null:Number.isFinite(+a)?Math.round(Ei(a,0,10,5)):null;return{mode:on(t.mode,["race","timetrial","qualifying"],e.mode),trackId:on(t.trackId,Be.map(a=>a.id),e.trackId),laps:Math.round(Ei(t.laps,1,30,e.laps)),level:Ei(t.level,0,1,e.level),fieldSize:n,playerGrid:Math.round(Ei(t.playerGrid,1,n,Math.min(e.playerGrid,n))),team:Math.round(Ei(t.team,0,le.length-1,e.team)),compound:on(t.compound,ba,e.compound),tyreWear:on(+t.tyreWear,[0,1.5,3,6],e.tyreWear),damage:Fe(t.damage,e.damage),collisions:Fe(t.collisions,e.collisions),mandatoryStop:Fe(t.mandatoryStop,e.mandatoryStop),pitCalls:["off","radio","auto"].includes(t.pitCalls)?t.pitCalls:e.pitCalls,adaptive:Fe(t.adaptive,e.adaptive),qualify:Fe(t.qualify,e.qualify),equalCars:Fe(t.equalCars,e.equalCars),weather:on(t.weather,["dry","light","heavy","changing"],e.weather),timeOfDay:on(t.timeOfDay,["progress","day","night"],e.timeOfDay),frontWing:r(t.frontWing),rearWing:r(t.rearWing),brakeBias:Ei(t.brakeBias,.5,.7,e.brakeBias),pressure:Math.round(Ei(t.pressure,-3,3,e.pressure)),assists:{abs:Fe(i.abs,e.assists.abs),tc:Math.round(Ei(i.tc,0,3,e.assists.tc)),steer:Fe(i.steer,e.assists.steer),stability:Math.round(Ei(i.stability,0,3,e.assists.stability)),autoGear:Fe(i.autoGear,e.assists.autoGear),pitAuto:Fe(i.pitAuto,e.assists.pitAuto),pitGame:Fe(i.pitGame,e.assists.pitGame)}}}function f_(s){let t=vi(s)?s:{},e=d_;return{quality:on(t.quality,["low","medium","high"],e.quality),volume:Ei(t.volume,0,1,e.volume),units:on(t.units,["kmh","mph"],e.units),line:Fe(t.line,e.line),minimap:Fe(t.minimap,e.minimap),shake:Fe(t.shake,e.shake),camera:on(t.camera,["chase","close","cockpit","tcam","heli","tv"],e.camera),tower:Fe(t.tower,e.tower),blur:Fe(t.blur,e.blur),steerSpeed:on(+t.steerSpeed,[.7,1,1.4],e.steerSpeed),padDead:Ei(t.padDead,0,.3,e.padDead),rumble:Fe(t.rumble,e.rumble),autoQuality:Fe(t.autoQuality,e.autoQuality),cbSafe:Fe(t.cbSafe,e.cbSafe),keys:Dc(t.keys),bloom:Fe(t.bloom,e.bloom),calm:Fe(t.calm,e.calm),bigHud:Fe(t.bigHud,e.bigHud)}}function Uc(s){return hc.reduce((t,e)=>Math.abs(e.level-s)<Math.abs(t.level-s)?e:t)}function p_(s){let t={};if(!vi(s))return t;for(let e of Be){let i=s[e.id];vi(i)&&Number.isFinite(i.best)&&i.best>5&&i.best<1e3&&(t[e.id]={best:+i.best})}return t}function m_(s){if(!vi(s))return null;let t=Be.map(n=>n.id),e=Array.isArray(s.calendar)?s.calendar.filter(n=>t.includes(n)):rc.slice();if(!e.length)return null;let i=Math.round(Ei(s.round,0,e.length,0));return{calendar:e,round:i,points:Ra(s.points),teamPoints:Ra(s.teamPoints),teamOf:Ed(s.teamOf),results:Td(s.results),weather:Array.isArray(s.weather)?s.weather.filter(n=>oc.includes(n)).slice(0,e.length):void 0}}function g_(s){let t={...Oa};if(vi(s))for(let e of Object.keys(Oa))Number.isFinite(+s[e])&&(t[e]=Math.max(0,+s[e]));return t}function Dp(s){vi(s)||(s={});let t={};if(vi(s.ghosts))for(let e of Be){let i=s.ghosts[e.id];vi(i)&&Number.isFinite(+i.time)&&+i.time>5&&+i.time<1e3&&typeof i.data=="string"&&i.data.length<6e5&&/^[A-Za-z0-9+/=]*$/.test(i.data)&&(t[e.id]={time:+i.time,data:i.data})}return{settings:f_(s.settings),config:Bd(s.config),records:p_(s.records),ghosts:t,season:m_(s.season),career:ep(s.career),honours:Array.isArray(s.honours)?s.honours.filter(e=>vi(e)).slice(-30).map(e=>({pos:Math.max(0,Math.min(99,Math.round(+e.pos)||0)),team:String(e.team??"").replace(/[<>&"'`]/g,"").slice(0,24),points:Math.max(0,Math.min(9999,Math.round(+e.points)||0))})):[],stats:g_(s.stats),school:vp(s.school),achievements:vi(s.achievements)?Object.fromEntries(Object.entries(s.achievements).filter(([e,i])=>jn.some(n=>n.id===e)&&Number.isFinite(+i)&&+i>0)):{}}}function Fp(){let s={};try{s=JSON.parse(localStorage.getItem(Lp)||"{}")}catch{s={}}return Dp(s)}function y_(s){return JSON.stringify({app:"apex-grand-prix",v:1,save:s})}function x_(s){try{let t=JSON.parse(String(s).trim());if(!vi(t))return null;let e=vi(t.save)?t.save:t,n=["settings","config","records","ghosts","career","stats","achievements","season","school","honours"].filter(a=>a in e);if(!n.length)return null;let r=Dp(e);return Object.defineProperty(r,"present",{value:n,enumerable:!1}),r}catch{return null}}function He(s){try{localStorage.setItem(Lp,JSON.stringify(s))}catch{}}var Ut=s=>String(s).replace(/[&<>"]/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[t]);function Ip(s){let t=1/0,e=-1/0,i=1/0,n=-1/0;for(let d=0;d<s.N;d++)t=Math.min(t,s.x[d]),e=Math.max(e,s.x[d]),i=Math.min(i,s.y[d]),n=Math.max(n,s.y[d]);let r=e-t,a=n-i,o=.06*Math.max(r,a),l=[];for(let d=0;d<s.N;d+=6)l.push(`${(s.x[d]-t+o).toFixed(0)},${(n-s.y[d]+o).toFixed(0)}`);let c=s.x[0]-t+o,h=n-s.y[0]+o,f=Math.max(r,a)*.028;return`<svg viewBox="0 0 ${(r+2*o).toFixed(0)} ${(a+2*o).toFixed(0)}" preserveAspectRatio="xMidYMid meet"><polygon points="${l.join(" ")}" fill="none" stroke="#000" stroke-opacity=".6" stroke-width="${f*1.7}" stroke-linejoin="round"/><polygon points="${l.join(" ")}" fill="none" stroke="#c9d1db" stroke-width="${f}" stroke-linejoin="round"/><circle cx="${c}" cy="${h}" r="${f*1.4}" fill="#ff2a2a"/></svg>`}var kc=class{constructor(t,e,i){this.root=t,this.save=e,this.hooks=i,this.current=null,this.tab="circuit",this.config={...e.config,assists:{...e.config.assists}},t.addEventListener("click",n=>this.onClick(n)),t.addEventListener("input",n=>this.onInput(n))}persist(){this.save.config=this.config,He(this.save)}clear(){this.root.innerHTML="",this.current=null}show(t,e){t!=="controls"&&(this.rebinding=null),this.current=t,this.lastData=e;let i=this["screen_"+t];if(!i)return this.show("main");let n;try{n=i.call(this,e)}catch(r){if(console.error("menu screen failed:",t,r),t==="main")n='<section class="screen dim"><div class="menu-col"><div class="logo">Apex<br><span>Grand Prix</span></div><button class="btn primary" data-act="quick">Quick race</button></div></section>';else return this.show("main")}this.root.innerHTML=n,this.afterRender(t)}drawTelemetry(){let t=this.lastData;if(!t||!t.race||!t.player)return;let{race:e,player:i,cls:n}=t,r=i.rs,a=n?n[0]&&n[0].car!==i?n[0].car:n[1]?n[1].car:null:null,o=e.fastest&&e.fastest.car&&e.fastest.car!==i&&e.fastest.car!==a?e.fastest.car:null,l=[{car:i,name:"You",color:"#ff4d4d",width:3}];a&&l.push({car:a,name:a.info.code+(n[0].car===a?" (winner)":" (P2)"),color:"#31d17a",dash:!0}),o&&l.push({car:o,name:o.info.code+" (fastest lap)",color:"#4aa3ff",dash:!0});let c=Math.max(1,r.tele.length),h=Array.from({length:Math.min(c,10)},(y,m)=>Math.round(1+m*(c-1)/Math.max(1,Math.min(c,10)-1))),f=r.stopLaps.map(y=>({x:y,label:"PIT"})),d=y=>this.root.querySelector(`canvas[data-chart="${y}"]`),u=Math.min(...r.tele.map(y=>y.time).filter(Number.isFinite),1/0),g=y=>l.map(m=>({name:m.name,color:m.color,dash:m.dash,width:m.width,pts:m.car.rs.tele.map(p=>({x:p.lap,y:y(p)}))}));d("laps")&&Ba(d("laps"),g(y=>y.time),{title:"Lap time",fmtY:y=>Se(y,1),xTicks:h,markers:f,yMin:Number.isFinite(u)?u*.985:void 0,yMax:Number.isFinite(u)?u*1.3:void 0}),d("fuel")&&Ba(d("fuel"),g(y=>y.fuel),{title:"Fuel load (kg)",fmtY:(y,m)=>y.toFixed(m<8?1:0),minSpan:3,xTicks:h,markers:f}),d("wear")&&Ba(d("wear"),g(y=>Math.min(100,y.wear*100)),{title:"Tyre wear (%)",fmtY:y=>y.toFixed(0),xTicks:h,markers:f,yMin:0}),d("top")&&Ba(d("top"),g(y=>y.topSpeed*3.6),{title:"Top speed (km/h)",fmtY:y=>y.toFixed(0),minSpan:40,xTicks:h,markers:f})}afterRender(t){t==="results"&&requestAnimationFrame(()=>this.drawTelemetry()),t==="setup"&&this.hooks.previewTeam&&this.hooks.previewTeam(this.config.team);let e=this.root.querySelector(".btn.primary, .btn");e&&t==="main"&&e.focus({preventScroll:!0})}screen_loading(t="Building circuit"){return`<section class="screen loading"><div class="logo">Apex <span>GP</span></div><div class="bar"><i></i></div><div class="hint">${Ut(t)}\u2026</div></section>`}screen_main(){let t=this.save.season;return`<section class="screen dim">
      <div class="menu-col">
        <div class="logo">Apex<br><span>Grand Prix</span></div>
        <div class="tagline">20-CAR GRID \xB7 REAL TYRE, AERO &amp; HYBRID POWERTRAIN PHYSICS \xB7 ADJUSTABLE AI</div>
        <button class="btn primary" data-act="quick">Quick race<small>Jump straight in with your last settings</small></button>
        <button class="btn" data-act="setup" data-mode="race" data-qualify="0">Custom race<small>Circuit, laps, difficulty, team, setup, assists</small></button>
        <button class="btn" data-act="setup" data-mode="race" data-qualify="1">Qualify &amp; race<small>3-minute qualifying with all 20 cars sets your grid slot</small></button>
        <button class="btn" data-act="setup" data-mode="timetrial">Time trial<small>Chase your ghost, alone on the circuit</small></button>
        <button class="btn" data-act="career">Career<small>${this.save.career?`Season ${this.save.career.seasonNo} \xB7 ${le[this.save.career.team].short} \xB7 round ${Math.min(this.save.career.season.round+1,this.save.career.season.calendar.length)} of ${this.save.career.season.calendar.length}`:"Pick a team, develop the car, climb the grid across seasons"}</small></button>
        <button class="btn" data-act="season">Championship<small>${t?`Round ${Math.min(t.round+1,t.calendar.length)} of ${t.calendar.length} in progress`:"4 rounds, points, a title to win"}</small></button>
        <div class="row"><button class="btn sm grow" data-act="controls">Controls</button><button class="btn sm grow" data-act="school">School</button><button class="btn sm grow" data-act="profile">Profile</button><button class="btn sm grow" data-act="settings">Settings</button></div>
      </div>
      <div class="version">v1.1 \xB7 WASD / arrows to drive \xB7 works with gamepads</div>
    </section>`}chips(t,e,i,n=""){return`<div class="chips">${e.map(r=>`<button class="chip ${r.dot?"dot":""} ${String(r.value)===String(i)?"on":""}" ${r.dot?`style="--c:${r.dot}"`:""} data-chip="${t}" data-value="${Ut(r.value)}" ${n}>${Ut(r.label)}</button>`).join("")}</div>`}toggle(t,e,i,n){return`<div class="toggle" data-toggle="${t}"><div>${Ut(e)}${i?`<div class="hint">${Ut(i)}</div>`:""}</div><div class="switch ${n?"on":""}"></div></div>`}slider(t,e,i,n,r,a,o){return`<div class="field"><label>${Ut(e)}<b>${o}</b></label><input type="range" data-slider="${t}" min="${n}" max="${r}" step="${a}" value="${i}"></div>`}screen_setup(t={}){let i=this.config.mode,n=i==="timetrial"?"Time <span>trial</span>":t.season?"Champion<span>ship</span>":"Race <span>setup</span>",r=[["circuit","Circuit"],["race","Session"],["car","Team & car"],["assists","Assists"]],a=this["tab_"+this.tab](t);return`<section class="screen panel-screen full">
      <div class="row"><h2>${n}</h2><div class="grow"></div></div>
      <div class="tabs">${r.map(([o,l])=>`<button class="tab ${this.tab===o?"active":""}" data-tab="${o}">${l}</button>`).join("")}</div>
      <div>${a}</div>
      <div class="footer"><button class="btn sm" data-act="main">\u25C0 Back</button><div class="hint">${this.summary()}</div><button class="btn primary" data-act="go">${t.season?"Start round":i==="timetrial"?"Start session":"Go racing"}</button></div>
    </section>`}summary(){let t=this.config,e=Be.find(r=>r.id===t.trackId),i=le[t.team],n=Uc(t.level);return t.mode==="timetrial"?`${Ut(e.name)} \xB7 ${Ut(i.short)}`:`${Ut(e.name)} \xB7 ${t.laps} laps \xB7 ${Ut(n.name)} \xB7 ${Ut(i.short)}`}tab_circuit(t){let e=this.config,i=t&&t.season;return`<div class="tracks">${Be.map(n=>{let r=this.hooks.tracks[n.id],a=this.save.records[n.id];return`<button class="tcard ${e.trackId===n.id?"on":""}" data-track="${n.id}" ${i?"disabled":""}>${r?Ip(r):""}<h4>${Ut(n.name)}</h4><div class="meta"><span>${Ut(n.country)}</span><span>${r?(r.length/1e3).toFixed(2)+" km":""} \xB7 ${r?r.corners.length:""} turns</span></div><p>${Ut(n.blurb)}</p><div class="meta"><span>Best lap</span><b>${a?Se(a.best):"\u2014"}</b></div></button>`}).join("")}</div>`}tab_race(){let t=this.config,e=this.hooks.tracks[t.trackId],i=e?Math.round(t.laps*e.length/1e3*.5):0,n=Uc(t.level),r=t.mode==="timetrial";return`<div class="grid2">
      ${r?"":`<div class="panel"><h3>Race</h3>
        ${this.slider("laps","Laps",t.laps,1,30,1,`${t.laps} \xB7 about ${Math.max(1,i)} min`)}
        <div class="field"><label>AI difficulty<b>${Math.round(t.level*100)}%</b></label>${this.chips("diff",hc.map(a=>({value:a.level,label:a.name})),n.level)}
        <input type="range" data-slider="level" min="0" max="100" step="1" value="${Math.round(t.level*100)}"><div class="hint" id="diff-blurb">${Ut(n.blurb)} \u2014 drag for any value in between. Rookie leaves you room to learn; Legend runs every car at the physical limit.</div></div>
        ${this.slider("fieldSize","Cars on the grid",t.fieldSize,2,20,1,t.fieldSize)}
        ${this.slider("playerGrid","Your starting position",Math.min(t.playerGrid,t.fieldSize),1,t.fieldSize,1,"P"+Math.min(t.playerGrid,t.fieldSize))}
      </div>`}
      <div class="panel"><h3>Tyres &amp; rules</h3>
        <div class="field"><label>Weather</label>${this.chips("weather",[{value:"dry",label:"Dry"},{value:"light",label:"Light rain"},{value:"heavy",label:"Heavy rain"},{value:"changing",label:"Changeable"}],t.weather)}<div class="hint">Rain cuts slick-tyre grip by about 30 %: fit Wet tyres in the pits (T cycles the next set). Changeable: dry start, a shower somewhere in the race.</div></div>
        <div class="field"><label>Lighting</label>${this.chips("timeOfDay",[{value:"progress",label:"Midday to dusk"},{value:"day",label:"Always midday"},{value:"night",label:"Night race"}],t.timeOfDay)}</div>
        <div class="field"><label>Starting compound</label>${this.chips("compound",ba.map(a=>({value:a,label:ii[a].name,dot:ii[a].color})),t.compound)}</div>
        <div class="field"><label>Tyre wear</label>${this.chips("tyreWear",[{value:0,label:"Off"},{value:1.5,label:"Low"},{value:3,label:"Normal"},{value:6,label:"High"}],t.tyreWear)}<div class="hint">Normal makes the Soft last about 5 laps and the Hard about 12. High forces a stop in a short race.</div></div>
        ${this.toggle("damage","Damage","Wings, floor and tyre punctures from contact",t.damage)}
        ${r?"":this.toggle("collisions","Car-to-car collisions","Off lets cars pass through each other",t.collisions)}
        ${r?"":this.toggle("equalCars","Identical cars","Every team has exactly your car; only the drivers differ (off: stronger teams have faster cars)",t.equalCars)}
        ${r?"":this.toggle("qualify","Qualifying session first","3 minutes, all 20 cars: your best lap sets your grid slot (overrides the start position)",t.qualify)}
        ${r?"":this.toggle("mandatoryStop","Mandatory pit stop","Use two compounds or take +15 s",t.mandatoryStop)}
        ${r?"":`<div class="field"><label>Pit wall</label>${this.chips("pitCalls",[{value:"off",label:"Silent"},{value:"radio",label:"Radio advice"},{value:"auto",label:"Calls you in"}],t.pitCalls)}<div class="hint">Advice reads your real tyre wear and tells you when to box and what to fit; Calls you in presses the pit button for you (B cancels).</div></div>`}
        ${r?"":this.toggle("adaptive","Adaptive AI pace","Cars far ahead ease off, cars far behind push (\xB13-5%)",t.adaptive)}
      </div></div>`}tab_car(){let t=this.config,e=Be.find(a=>a.id===t.trackId),i=e.setup||{front:5,rear:5},n=t.frontWing??i.front,r=t.rearWing??i.rear;return`<div class="panel"><h3>Team</h3><div class="teams">${le.map((a,o)=>`<button class="team ${t.team===o?"on":""}" data-team="${o}" style="--c:${a.color};--c2:${a.accent}"><i></i><div><b>${Ut(a.name)}</b><div class="hint">Car performance</div><div class="bar"><span style="width:${Math.round(55+a.rating*45)}%"></span></div></div></button>`).join("")}</div></div>
    <div class="grid2" style="margin-top:1rem">
      <div class="panel"><h3>Aero setup \u2014 ${Ut(e.name)}</h3>
        ${this.slider("frontWing","Front wing",n,0,10,1,`${n}  (recommended ${i.front})`)}
        ${this.slider("rearWing","Rear wing",r,0,10,1,`${r}  (recommended ${i.rear})`)}
        <div class="hint">More wing = more downforce and cornering grip, but more drag and a lower top speed. Low wing suits long straights; high wing suits tight, twisty circuits. Setups affect handling balance: more rear wing for stability, more front wing for turn-in.</div>
        <button class="btn sm" data-act="resetsetup" style="margin-top:.6rem">Use recommended</button></div>
      <div class="panel"><h3>Brakes</h3>
        ${this.slider("brakeBias","Brake bias (front)",Math.round(t.brakeBias*100),50,68,1,Math.round(t.brakeBias*100)+"%")}
        <div class="hint">Higher front bias is stable but can lock the front tyres; lower bias turns in better and risks locking the rears. ABS covers most of it if enabled.</div></div>
      <div class="panel"><h3>Tyre pressure</h3>
        ${this.slider("pressure","Pressure offset",t.pressure,-3,3,1,t.pressure===0?"Standard":(t.pressure>0?"+":"")+t.pressure)}
        <div class="hint">Higher pressure heats the tyres faster and wears them more slowly but costs grip once it is too high; lower pressure grips better in the wet and gives more feel at the price of faster wear. Standard is the dry-weather sweet spot.</div></div></div>`}tab_assists(){let t=this.config.assists;return`<div class="grid2"><div class="panel"><h3>Driver aids</h3>
      <div class="field"><label>Presets</label><div class="chips">${Object.keys(Cp).map(e=>`<button class="chip" data-preset="${e}">${e}</button>`).join("")}</div></div>
      ${this.toggle("a.abs","ABS","Prevents brake lock-ups",t.abs)}
      ${this.toggle("a.steer","Steering assist","Limits steering lock so the front tyres don't scrub away",t.steer)}
      ${this.toggle("a.autoGear","Automatic gearbox","Manual: Q / E or paddles",t.autoGear)}
      ${this.toggle("a.pitAuto","Pit lane autopilot","The car drives itself through the pits once you commit",t.pitAuto)}
      ${this.toggle("a.pitGame","Interactive pit stops","Time your button press (Space) on each wheel nut: a clean stop takes 2.5 s, a cross-threaded nut costs 0.9 s",t.pitGame)}
    </div><div class="panel"><h3>Stability</h3>
      <div class="field"><label>Traction control</label>${this.chips("tc",Pp.map((e,i)=>({value:i,label:e})),t.tc)}</div>
      <div class="field"><label>Stability control (counter-steer help)</label>${this.chips("stability",Pp.map((e,i)=>({value:i,label:e})),t.stability)}</div>
      <div class="hint">Keyboard drivers should keep stability and traction on while learning. Gamepad and wheel users can turn them off for a more raw car.</div>
    </div></div>`}screen_controls(){let t=Ua(this.save.settings.keys),e=Nd.map(([n,r])=>{let a=this.rebinding===n;return`<div class="key"><span>${Ut(r)}</span><button class="keybtn ${a?"wait":""}" data-rebind="${n}">${a?"Press a key\u2026":t[n].filter(o=>o!=="Escape"||n==="pause").map(o=>`<kbd>${Ut(gr(o))}</kbd>`).join("")||"<kbd>\u2014</kbd>"}</button></div>`}),i=[["Steer","Left stick"],["Throttle / brake","RT / LT"],["DRS","A"],["Boost","X"],["Pit request","B"],["Camera","Y"],["Gears","LB / RB"],["Look back","L3"],["Pause","Start"],["Reset","Back"],["Fuel mix / ERS mode","D-pad up / down"],["Next pit tyre","D-pad right"]];return`<section class="screen panel-screen full"><h2>Con<span>trols</span></h2>
      <div class="grid2"><div class="panel"><h3>Keyboard <small class="hint">\xB7 click a key to rebind it</small></h3><div class="keys">${e.join("")}</div><button class="btn sm" data-act="resetkeys" style="margin-top:.6rem">Reset keys to default</button><div class="hint" style="margin-top:.4rem">Esc always pauses. Enter confirms in menus. In a pit stop, the DRS key hits the wheel nut.</div></div>
      <div class="panel"><h3>Gamepad</h3><div class="keys">${i.map(([n,r])=>`<div class="key"><span>${n}</span><span><kbd>${r}</kbd></span></div>`).join("")}</div>
      <h3 style="margin-top:1.2rem">Racecraft</h3><div class="hint">\u2022 Brake in a straight line, then trail off the pedal as you turn in.<br>\u2022 Hit the apex kerb, then use all the track on exit \u2014 but not past the white line, or you get a track-limits warning.<br>\u2022 DRS opens the rear wing for ~10-15 km/h when you are within one second of the car ahead at the detection line.<br>\u2022 ERS boost spends the battery: harvest it by braking hard and lifting.<br>\u2022 Follow closely and you lose front downforce (dirty air) but gain a slipstream on the straights.<br>\u2022 Tyres have a temperature window: scrubbing them sliding overheats them, and worn tyres lose grip fast.<br>\u2022 Press <kbd>B</kbd> to call a pit stop \u2014 new tyres, repairs, and a limiter in the lane.</div></div></div>
      <div class="footer"><button class="btn sm" data-act="back">\u25C0 Back</button></div></section>`}qualiGrid(t,e){let i=t.list.find(a=>a.car===e),n={...t.times};if(i&&Number.isFinite(i.best))return{grid:i.pos,times:n};let r=t.list.filter(a=>Number.isFinite(a.best));return n.YOU=(r.length?Math.max(...r.map(a=>a.best)):100)+.001,{grid:r.length+1,times:n}}screen_school(){let t=this.save.school||{},e=pr.filter(n=>t[n.id]).length,i=pr.map((n,r)=>{let a=Be.find(o=>o.id===n.track);return`<div class="lesson ${t[n.id]?"done":""}"><div class="lno">${t[n.id]?"\u2713":r+1}</div><div class="grow"><b>${Ut(n.title)}</b><div class="hint">${Ut(n.blurb)}</div>
        <div class="hint">${Ut(a?a.name:n.track)} \xB7 ${n.mode==="race"?"vs a slow car":"alone on the circuit"}${n.weather?" \xB7 rain":""}</div>
        <ul class="goals">${n.goals.map(o=>`<li>${Ut(o.text)}</li>`).join("")}</ul></div>
        <button class="btn sm ${t[n.id]?"":"primary"}" data-act="lesson" data-lesson="${n.id}">${t[n.id]?"Again":"Start"}</button></div>`}).join("");return`<section class="screen panel-screen full"><h2>Driving <span>school</span></h2>
      <div class="hint" style="margin-bottom:.8rem">${e} of ${pr.length} lessons passed. Each lesson is a short session with a checklist on screen; finish the goals and carry on driving for as long as you like.</div>
      <div class="lessons">${i}</div>
      <div class="footer"><button class="btn sm" data-act="main">\u25C0 Back</button></div></section>`}screen_profile(){let t={...Oa,...this.save.stats||{}},e=this.save.achievements||{},i=jn.filter(o=>e[o.id]).length,n=(o,l)=>`<div class="stat"><small>${o}</small><b>${l}</b></div>`,r=Be.map(o=>({d:o,r:this.save.records[o.id]})).filter(o=>o.r),a=(this.save.honours||[]).slice(-6).reverse();return`<section class="screen panel-screen full"><h2>Driver <span>profile</span></h2>
      <div class="panel"><div class="stats">${n("Races",t.races)}${n("Wins",t.wins)}${n("Podiums",t.podiums)}${n("Poles",t.poles)}${n("Fastest laps",t.fastestLaps)}${n("Passes",t.passes)}${n("Distance",Math.round(t.km)+" km")}${n("Pit stops",t.pitStops+(t.perfectStops?` (${t.perfectStops} perfect)`:""))}${n("Clean races",t.cleanRaces)}${n("Titles",t.championships+t.careerTitles)}</div></div>
      <div class="grid2" style="margin-top:1rem"><div class="panel"><h3>Achievements \xB7 ${i} / ${jn.length}</h3><div class="achs">${jn.map(o=>`<div class="ach ${e[o.id]?"got":""}"><b>${Ut(o.name)}</b><span>${Ut(o.desc)}</span></div>`).join("")}</div></div>
      <div class="panel"><h3>Lap records</h3>${r.length?`<table class="results">${r.map(o=>`<tr><td>${Ut(o.d.name)}</td><td><b>${Se(o.r.best)}</b></td></tr>`).join("")}</table>`:'<div class="hint">Set a time trial lap to record it here.</div>'}
        <h3 style="margin-top:1rem">Season history</h3>${a.length?`<div class="hint">${a.map(o=>`P${o.pos} \xB7 ${Ut(o.team)} \xB7 ${o.points} pts`).join("<br>")}</div>`:'<div class="hint">Finish a championship to see it here.</div>'}</div></div>
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
        <div class="field"><label>Default camera</label>${this.chips("camera",[["chase","Chase"],["close","Low chase"],["cockpit","Cockpit"],["tcam","T-cam"],["tv","TV"]].map(([i,n])=>({value:i,label:n})),e.camera)}</div>
        <div class="field"><label>Keyboard steering speed</label>${this.chips("steerSpeed",[{value:.7,label:"Gentle"},{value:1,label:"Normal"},{value:1.4,label:"Quick"}],e.steerSpeed)}<div class="hint">How fast A / D turn the wheel. Gamepads and wheels are not affected.</div></div>
        ${this.slider("s.padDead","Gamepad stick deadzone",Math.round(e.padDead*100),0,30,1,Math.round(e.padDead*100)+"%")}
        ${this.toggle("s.rumble","Gamepad vibration","Kerbs, grass, tyre slip and impacts",e.rumble!==!1)}
        <div class="row"><button class="btn sm" data-act="fullscreen">Toggle full screen</button><button class="btn sm" data-act="wipe">Clear saved records</button></div>
      </div></div>
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
        <div class="hint" style="margin-top:.8rem">Racing line guide: <kbd>L</kbd> \xB7 Camera: <kbd>C</kbd> \xB7 Reset to track: <kbd>R</kbd> \xB7 Autopilot: <kbd>G</kbd></div></div></section>`}screen_results(t){let{cls:e,player:i,race:n,season:r,trackName:a,careerRes:o}=t,l=e.slice(0,3),c=[l[1],l[0],l[2]].filter(Boolean),h=m=>m.time!=null?Se(m.time):"DNF",f=Math.min(...e.map(m=>m.best)),d=e.find(m=>m.car===i),u=e.map((m,p)=>{let v=e[0],M="";m.time!=null&&p>0&&(M=m.laps<v.laps?`+${v.laps-m.laps} lap${v.laps-m.laps>1?"s":""}`:"+"+(m.time-v.time).toFixed(3));let b=m.gridPos-m.pos;return`<tr class="${m.car===i?"me":""}"><td class="pos">${m.pos}</td><td><span class="tc" style="--c:${m.info.team.color}"></span>${Ut(m.info.name)}</td><td>${Ut(m.info.team.short)}</td><td>${h(m)}</td><td>${M}</td><td>${m.penalty?"+"+m.penalty+"s":""}</td><td>${m.best<1/0?Se(m.best):""}${m.best===f&&f<1/0?" \u25C6":""}</td><td>${m.stops}</td><td>${b>0?"\u25B2"+b:b<0?"\u25BC"+-b:"\u2013"}</td><td><b>${m.points}</b></td></tr>`}).join(""),g="";if(r){let m=xs(r).slice(0,10),p=vs(r).slice(0,6);g=`<div class="panel"><h3>Drivers' standings \xB7 after round ${r.round} of ${r.calendar.length}</h3><table class="results"><tr><th>Pos</th><th>Driver</th><th>Pts</th></tr>${m.map((v,M)=>`<tr class="${v.name==="You"?"me":""}"><td class="pos">${M+1}</td><td>${Ut(v.name)}</td><td><b>${v.pts}</b></td></tr>`).join("")}</table>
        <h3 style="margin-top:1rem">Constructors</h3><table class="results">${p.map((v,M)=>`<tr><td class="pos">${M+1}</td><td>${Ut(v.team)}</td><td><b>${v.pts}</b></td></tr>`).join("")}</table></div>`}let y=r&&r.round>=r.calendar.length;return`<section class="screen panel-screen full">
      <h2>${Ut(a)} <span>results</span></h2>
      <div class="podium">${c.map(m=>`<div class="pod p${m.pos}" style="--c:${m.info.team.color}"><div class="hint">P${m.pos}</div><b>${Ut(m.info.code)}</b><div>${Ut(m.info.team.short)}</div><div class="hint">${h(m)}</div></div>`).join("")}</div>
      ${d?`<div class="hint" style="text-align:center">You finished <b>P${d.pos}</b>${d.penalty?` (includes ${d.penalty}s of penalties)`:""} \xB7 best lap ${d.best<1/0?Se(d.best):"\u2014"}</div>`:""}
      ${o?`<div class="panel"><h3>Career</h3><div class="hint">Finished <b style="color:#fff">P${o.pos}</b> \xB7 objective P${o.objective} ${o.met?'<b style="color:#31d17a">achieved</b>':'<b style="color:#ff6b6b">missed</b>'} \xB7 prize money <b style="color:#ffd24a">+${o.prize}</b>${o.fastest?" (fastest lap bonus)":""} \xB7 budget now <b style="color:#ffd24a">${o.budget}</b></div></div>`:""}
      <div class="grid2" style="grid-template-columns:${r?"2fr 1fr":"1fr"}"><div class="panel" style="overflow:auto"><table class="results"><tr><th>Pos</th><th>Driver</th><th>Team</th><th>Time</th><th>Gap</th><th>Pen</th><th>Best lap</th><th>Stops</th><th>Grid</th><th>Pts</th></tr>${u}</table></div>${g}</div>
      <div class="panel telemetry"><h3>Race telemetry</h3><div class="charts"><canvas data-chart="laps"></canvas><canvas data-chart="fuel"></canvas><canvas data-chart="wear"></canvas><canvas data-chart="top"></canvas></div></div>
      <div class="footer"><button class="btn sm" data-act="quit">Main menu</button><div class="row">
        <button class="btn" data-act="replay">Watch replay</button>
        ${o?'<button class="btn primary" data-act="careercontinue">Continue career \u25B6</button>':`<button class="btn ${r&&!y?"":"primary"}" data-act="restart">Race again</button>`}
        ${r&&!y?'<button class="btn primary" data-act="nextround">Next round \u25B6</button>':""}
        ${y?'<button class="btn primary" data-act="endseason">Finish season</button>':""}</div></div></section>`}screen_career_new(){let t=this.cnew||(this.cnew={team:6,level:.55,rounds:4,distance:"standard"}),e=Uc(t.level);return`<section class="screen panel-screen full">
      <div class="row"><h2>New <span>career</span></h2><div class="grow"></div></div>
      <div class="panel"><h3>Choose your team</h3><div class="teams">${le.map((i,n)=>{let r=Ca(n);return`<button class="team ${t.team===n?"on":""}" data-cteam="${n}" style="--c:${i.color};--c2:${i.accent}"><i></i><div><b>${Ut(i.name)}</b><div class="hint">Car ${Math.round(55+i.rating*45)}% \xB7 target P${r.finish}</div><div class="bar"><span style="width:${Math.round(55+i.rating*45)}%"></span></div></div></button>`}).join("")}</div>
      <div class="hint" style="margin-top:.5rem">A weaker car is a tougher start: prize money buys upgrades, and strong seasons earn offers from better teams.</div></div>
      <div class="grid2" style="margin-top:1rem">
        <div class="panel"><h3>AI difficulty</h3>${this.chips("cn.level",hc.map(i=>({value:i.level,label:i.name})),e.level)}<div class="hint">${Ut(e.blurb)}. It rises a little every season.</div></div>
        <div class="panel"><h3>Season</h3><div class="field"><label>Calendar</label>${this.chips("cn.rounds",[{value:4,label:"4 rounds"},{value:8,label:Be.length+" rounds (all circuits)"}],t.rounds)}</div>
        <div class="field"><label>Race distance</label>${this.chips("cn.distance",Ea.map(i=>({value:i.id,label:`${i.name} \xB7 ${i.km} km`})),t.distance)}</div></div></div>
      <div class="footer"><button class="btn sm" data-act="main">\u25C0 Back</button><div class="hint">${Ut(le[t.team].name)} \xB7 ${t.rounds} rounds \xB7 ${Ut(e.name)}</div><button class="btn primary" data-act="careerstart">Start career</button></div></section>`}screen_career_hub(){let t=this.save.career,e=t.season,i=e.calendar[e.round],n=Be.find(d=>d.id===i),r=this.hooks.tracks[i],a=r?ac(r.length,t.distance):5,o=Ca(t.team),l=le[t.team],c=xs(e).slice(0,8),h=vs(e).slice(0,6),f=bd.map(d=>{let u=t.upgrades[d]||0,g=Sd(u),y=Array.from({length:Mn},(m,p)=>`<i class="${p<u?"on":""}"></i>`).join("");return`<div class="upg"><div><b>${Ut(hr[d].name)}</b><div class="hint">${Ut(hr[d].blurb)}</div><div class="pips">${y}</div></div>
        <button class="btn sm" data-buy="${d}" ${u>=Mn||t.budget<g?"disabled":""}>${u>=Mn?"Max":`Upgrade \xB7 ${g}`}</button></div>`}).join("");return`<section class="screen panel-screen full">
      <div class="row"><h2>Career <span>season ${t.seasonNo}</span></h2><div class="grow"></div><div class="hint"><b style="color:#fff">${Ut(l.name)}</b> \xB7 budget <b style="color:#ffd24a;font-size:1.3rem">${t.budget}</b></div></div>
      <div class="grid2" style="grid-template-columns:1.1fr 1fr">
        <div class="panel"><h3>Round ${e.round+1} of ${e.calendar.length}</h3>
          <div class="hubtrack">${r?Ip(r):""}<div><b style="font-size:1.3rem">${Ut(n.name)}</b><div class="hint">${Ut(n.country)} \xB7 ${r?(r.length/1e3).toFixed(2)+" km":""} \xB7 ${a} laps</div>
          <div class="hint" style="margin-top:.5rem">Forecast: <b style="color:#fff">${Ut(Xf[ys(e)])}</b>${ys(e)!=="dry"?" \u2014 be ready to change tyres":""}</div>
          <div class="hint" style="margin-top:.3rem">Objective: finish <b style="color:#fff">P${o.finish}</b> or better (+8 prize). Constructors target: P${o.constructor}.</div></div></div>
          <div class="row" style="margin-top:.8rem"><button class="btn primary grow" data-act="careerrace" data-q="1">Qualify &amp; race</button><button class="btn grow" data-act="careerrace" data-q="0">Race now</button></div>
        </div>
        <div class="panel"><h3>Car development</h3>${f}</div>
      </div>
      <div class="grid2" style="margin-top:1rem">
        <div class="panel"><h3>Drivers' championship</h3><table class="results">${c.length?c.map((d,u)=>`<tr class="${d.name==="You"?"me":""}"><td class="pos">${u+1}</td><td>${Ut(d.name)}</td><td>${Ut(d.team)}</td><td><b>${d.pts}</b></td></tr>`).join(""):'<tr><td class="hint">No races yet</td></tr>'}</table></div>
        <div class="panel"><h3>Constructors</h3><table class="results">${h.length?h.map((d,u)=>`<tr class="${d.team===l.short?"me":""}"><td class="pos">${u+1}</td><td>${Ut(d.team)}</td><td><b>${d.pts}</b></td></tr>`).join(""):'<tr><td class="hint">No races yet</td></tr>'}</table></div>
      </div>
      <div class="footer"><button class="btn sm" data-act="main">Main menu</button><div class="hint">${t.history.length?`Previous seasons: ${t.history.map(d=>`S${d.seasonNo} P${d.driverPos}`).join(" \xB7 ")}`:""}</div><button class="btn sm" data-act="careerwipe" data-confirm="0">Abandon career</button></div></section>`}screen_career_end(){let t=this.save.career,e=t.seasonRecap,i=le[t.team],n=(e.offers||[]).map(r=>`<button class="team" data-coffer="${r}" style="--c:${le[r].color};--c2:${le[r].accent}"><i></i><div><b>${Ut(le[r].name)}</b><div class="hint">Offer: join for season ${t.seasonNo+1} \xB7 car ${Math.round(55+le[r].rating*45)}%</div><div class="bar"><span style="width:${Math.round(55+le[r].rating*45)}%"></span></div></div></button>`).join("");return`<section class="screen panel-screen full">
      <div class="row"><h2>Season ${e.seasonNo} <span>${e.champion?"champion!":"complete"}</span></h2></div>
      <div class="grid2"><div class="panel"><h3>Your season</h3>
        <div class="bigstats"><div><small>Drivers'</small><b>P${e.driverPos}</b></div><div><small>${Ut(i.short)}</small><b>P${e.teamPos}</b></div><div><small>Points</small><b>${e.points}</b></div><div><small>Wins</small><b>${e.wins}</b></div><div><small>Podiums</small><b>${e.podiums}</b></div></div>
        <div class="hint" style="margin-top:.6rem">Constructors objective (P${e.constructorObjective}): <b style="color:${e.metConstructor?"#31d17a":"#ff6b6b"}">${e.metConstructor?"achieved":"missed"}</b>. Season bonus added to your budget: now <b style="color:#ffd24a">${t.budget}</b>.</div></div>
        <div class="panel"><h3>Contracts for next season</h3><div class="teams">${n||'<div class="hint">No offers this year. Finish higher in the standings to attract bigger teams.</div>'}
          <button class="team on" data-coffer="${t.team}" style="--c:${i.color};--c2:${i.accent}"><i></i><div><b>Stay with ${Ut(i.short)}</b><div class="hint">Keep your car development</div></div></button></div></div></div>
      <div class="footer"><button class="btn sm" data-act="main">Main menu</button><div class="hint">Moving teams starts car development again.</div></div></section>`}screen_season_end(t){let e=t.season,i=xs(e),n=vs(e),r=i.findIndex(o=>o.name==="You")+1,a=(this.save.honours||[]).slice(-5).reverse();return`<section class="screen panel-screen full">
      <div class="row"><h2>${r===1?"World <span>champion!</span>":"Season <span>complete</span>"}</h2></div>
      <div class="grid2"><div class="panel"><h3>Drivers' championship</h3><table class="results">${i.slice(0,12).map((o,l)=>`<tr class="${o.name==="You"?"me":""}"><td class="pos">${l+1}</td><td>${Ut(o.name)}</td><td>${Ut(o.team)}</td><td><b>${o.pts}</b></td></tr>`).join("")}</table></div>
        <div class="panel"><h3>Constructors</h3><table class="results">${n.map((o,l)=>`<tr><td class="pos">${l+1}</td><td>${Ut(o.team)}</td><td><b>${o.pts}</b></td></tr>`).join("")}</table>
        ${a.length?`<h3 style="margin-top:1rem">Your recent seasons</h3><div class="hint">${a.map(o=>`P${o.pos} with ${Ut(o.team)} (${o.points} pts)`).join(" \xB7 ")}</div>`:""}</div></div>
      <div class="footer"><button class="btn sm" data-act="main">Main menu</button><div class="hint">You finished P${r} with ${e.points.You||0} points.</div><button class="btn primary" data-act="endseason">Close the season</button></div></section>`}screen_quali(t){let{q:e,player:i,trackName:n}=t,r=e.list[0]&&Number.isFinite(e.list[0].best)?e.list[0].best:null,a=e.list.map(l=>{let c=l.car===i,h=Number.isFinite(l.best)&&r!=null&&l.pos>1?"+"+(l.best-r).toFixed(3):"";return`<tr class="${c?"me":""}"><td class="pos">${l.pos}</td><td><span class="tc" style="--c:${l.info.team.color}"></span>${Ut(l.info.name)}</td><td>${Ut(l.info.team.short)}</td><td>${Number.isFinite(l.best)?Se(l.best):"no time"}</td><td>${h}</td><td>${l.laps}</td></tr>`}).join(""),o=e.list.find(l=>l.car===i);return`<section class="screen panel-screen full">
      <div class="row"><h2>Qualifying <span>${Ut(n)}</span></h2><div class="grow"></div><div class="hint">You start from <b style="color:#fff;font-size:1.4rem">P${this.qualiGrid(e,i).grid}</b></div></div>
      <div class="panel" style="overflow:auto"><table class="results"><tr><th>Pos</th><th>Driver</th><th>Team</th><th>Best lap</th><th>Gap</th><th>Laps</th></tr>${a}</table></div>
      <div class="footer"><button class="btn sm" data-act="quit">Main menu</button><button class="btn" data-act="restart">Qualify again</button><button class="btn primary" data-act="qualirace">Start race from P${this.qualiGrid(t.q,t.player).grid}</button></div></section>`}screen_timetrial(t){let{player:e,race:i,trackName:n,best:r,newBest:a}=t,o=e.rs.lapTimes.slice(2);return`<section class="screen panel-screen full"><h2>${Ut(n)} <span>time trial</span></h2>
      <div class="panel"><h3>Session</h3><div class="hint">Best lap <b style="color:#fff;font-size:1.6rem">${r<1/0?Se(r):"\u2014"}</b> ${a?'\xB7 <b style="color:#31d17a">New record!</b>':""}</div>
      <div class="hint" style="margin-top:.6rem">Laps: ${e.rs.lapTimes.map((l,c)=>`<span style="margin-right:1rem">L${c+1} ${Se(l)}${c===0?" (out)":""}</span>`).join("")}</div></div>
      <div class="footer"><button class="btn sm" data-act="quit">Main menu</button><button class="btn primary" data-act="restart">Run again</button></div></section>`}onClick(t){let e=t.target.closest("[data-act],[data-tab],[data-track],[data-team],[data-chip],[data-toggle],[data-preset],[data-rebind],button");if(!e)return;let i=this.hooks;if(i.sfx&&i.sfx("click"),e.dataset.tab)return this.tab=e.dataset.tab,this.rerender();if(e.dataset.track)return this.config.trackId=e.dataset.track,this.config.frontWing=this.config.rearWing=null,this.persist(),this.rerender();if(e.dataset.team!=null&&e.dataset.team!=="")return this.config.team=+e.dataset.team,this.persist(),i.previewTeam&&i.previewTeam(this.config.team),this.rerender();if(e.dataset.rebind)return this.rebinding=this.rebinding===e.dataset.rebind?null:e.dataset.rebind,this.rerender();if(e.dataset.chip){let a=e.dataset.chip,o=e.dataset.value,l=this.config;if(a.startsWith("cn.")){let c=this.cnew||(this.cnew={team:6,level:.55,rounds:4,distance:"standard"}),h=a.slice(3);return c[h]=h==="distance"?o:+o,this.rerender()}return a==="diff"?l.level=+o:a==="compound"?l.compound=o:a==="weather"?(l.weather=o,(o==="light"||o==="heavy")&&!ii[l.compound].wetTyre?(this.dryCompound=l.compound,l.compound="wet"):(o==="dry"||o==="changing")&&ii[l.compound].wetTyre&&(l.compound=this.dryCompound&&!ii[this.dryCompound].wetTyre?this.dryCompound:"medium")):a==="timeOfDay"?l.timeOfDay=o:a==="pitCalls"?l.pitCalls=["off","radio","auto"].includes(o)?o:"radio":a==="tyreWear"?l.tyreWear=+o:a==="tc"?l.assists.tc=+o:a==="stability"?l.assists.stability=+o:a==="quality"?this.save.settings.quality=o:a==="units"?this.save.settings.units=o:a==="camera"?this.save.settings.camera=o:a==="steerSpeed"&&(this.save.settings.steerSpeed=+o),this.persist(),i.applySettings&&i.applySettings(),this.rerender()}if(e.dataset.toggle){let a=e.dataset.toggle;return a.startsWith("a.")?this.config.assists[a.slice(2)]=!this.config.assists[a.slice(2)]:a==="s.line"?this.save.settings.line=this.save.settings.line===!1:a.startsWith("s.")?this.save.settings[a.slice(2)]=!this.save.settings[a.slice(2)]:this.config[a]=!this.config[a],this.persist(),i.applySettings&&i.applySettings(),this.rerender()}if(e.dataset.cteam!=null&&e.dataset.cteam!=="")return(this.cnew||(this.cnew={team:6,level:.55,rounds:4,distance:"standard"})).team=+e.dataset.cteam,this.rerender();if(e.dataset.coffer!=null)return i.careerNext(+e.dataset.coffer);if(e.dataset.buy)return i.careerBuy(e.dataset.buy);if(e.dataset.preset)return this.config.assists={...Cp[e.dataset.preset]},this.persist(),this.rerender();let n=e.dataset.act;if(!n)return;let r=this.config;switch(n){case"quick":return r.mode="race",this.persist(),i.startRace({...r,__season:!1});case"setup":return r.mode=e.dataset.mode,e.dataset.qualify!=null&&(r.qualify=e.dataset.qualify==="1"),this.tab="circuit",this.persist(),this.show("setup");case"season":return i.openSeason();case"career":return i.openCareer();case"careerstart":return i.careerStart({...this.cnew});case"careerrace":return i.careerRace(e.dataset.q==="1");case"careercontinue":return i.openCareer();case"careerwipe":if(e.dataset.confirm!=="1"){e.dataset.confirm="1",e.textContent="Click again to delete career";return}return i.careerAbandon();case"go":{this.persist();let a=!!(this.lastData&&this.lastData.season);return r.mode==="race"&&r.qualify?i.startRace({...r,mode:"qualifying",qualiTimes:null,seed:void 0,__season:a}):i.startRace({...r,__season:a})}case"qualirace":{let a=this.lastData;if(a&&a.q){let o=this.qualiGrid(a.q,a.player);return i.raceFromQuali({cfg:a.cfg,times:o.times,grid:o.grid})}return}case"main":return i.toMain();case"profile":return this.prev=this.current,this.show("profile");case"school":return this.show("school");case"lesson":return i.startLesson(e.dataset.lesson);case"controls":return this.prev=this.current,this.show("controls");case"settings":return this.prev=this.current,this.show("settings");case"back":return i.toMain();case"resetkeys":return this.save.settings.keys={},this.rebinding=null,i.applySettings(),this.rerender();case"resetsetup":return r.frontWing=r.rearWing=null,r.brakeBias=.58,r.pressure=0,this.persist(),this.rerender();case"fullscreen":{try{document.fullscreenElement?document.exitFullscreen():(document.documentElement.requestFullscreen||document.documentElement.webkitRequestFullscreen).call(document.documentElement)}catch{i.toast&&i.toast("Full screen is not available here")}return}case"savecopy":{let a=this.root.querySelector("#save-io"),o=y_(this.save);a&&(a.value=o,a.focus(),a.select());try{navigator.clipboard.writeText(o).then(()=>i.toast&&i.toast("Save copied"),()=>i.toast&&i.toast("Copy it from the box (Ctrl+C)"))}catch{i.toast&&i.toast("Copy it from the box (Ctrl+C)")}return}case"saverestore":{let a=this.root.querySelector("#save-io"),o=x_(a?a.value:"");if(!o){i.toast&&i.toast("That is not a valid backup");return}for(let l of o.present)this.save[l]=o[l];return this.config={...this.save.config,assists:{...this.save.config.assists}},this.save.config=this.config,this.cnew=null,this.dryCompound=null,i.applySettings(),i.toast&&i.toast(`Restored: ${o.present.join(", ")}`),this.rerender()}case"wipe":{let a=Date.now();if(!this._wipeAt||a-this._wipeAt>5e3){this._wipeAt=a;let o=this.root.querySelector("[data-act=wipe]");o&&(o.textContent="Click again to confirm"),i.toast&&i.toast("This clears lap records, ghosts and the current championship. Click again to confirm.");return}return this._wipeAt=0,this.save.records={},this.save.ghosts={},this.save.season=null,He(this.save),i.toast&&i.toast("Saved records cleared"),this.rerender()}case"resume":return i.resume();case"photo":return i.photo();case"replay":return i.replay(this.current==="pause"?"pause":"results");case"restart":return i.restart();case"quit":return i.toMain(!0);case"pausecam":return i.cycleCamera&&i.cycleCamera();case"pausesettings":return this.show("settings",{from:"pause"});case"pause":return this.show("pause");case"nextround":return i.nextRound();case"endseason":return i.endSeason()}}onInput(t){let e=t.target,i=e.dataset&&e.dataset.slider;if(!i)return;let n=+e.value,r=this.config;if(i==="laps")r.laps=n;else if(i==="level")r.level=n/100;else if(i==="fieldSize"){r.fieldSize=n,r.playerGrid=Math.min(r.playerGrid,n);let o=this.root.querySelector("[data-slider=playerGrid]");if(o){o.max=n,o.value=r.playerGrid;let l=o.closest(".field").querySelector("label b");l&&(l.textContent="P"+r.playerGrid)}}else i==="playerGrid"?r.playerGrid=Math.min(n,r.fieldSize):i==="frontWing"?r.frontWing=n:i==="rearWing"?r.rearWing=n:i==="brakeBias"?r.brakeBias=n/100:i==="pressure"?r.pressure=n:i==="s.padDead"?(this.save.settings.padDead=n/100,this.hooks.applySettings&&this.hooks.applySettings()):i==="s.volume"&&(this.save.settings.volume=n/100,this.hooks.applySettings&&this.hooks.applySettings());clearTimeout(this._persistT),this._persistT=setTimeout(()=>this.persist(),300);let a=e.closest(".field").querySelector("label b");if(a)if(i==="laps")a.textContent=`${n} \xB7 about ${Math.max(1,Math.round(n*(this.hooks.tracks[r.trackId]?.length||5e3)/1e3*.5))} min`;else if(i==="level")a.textContent=n+"%";else if(i==="playerGrid")a.textContent="P"+n;else if(i==="brakeBias")a.textContent=n+"%";else if(i==="frontWing"||i==="rearWing"){let o=(Be.find(l=>l.id===r.trackId)||{}).setup||{front:5,rear:5};a.textContent=`${n}  (recommended ${i==="frontWing"?o.front:o.rear})`}else i==="pressure"?a.textContent=n===0?"Standard":(n>0?"+":"")+n:i==="s.volume"||i==="s.padDead"?a.textContent=n+"%":a.textContent=n;if(i==="level"){let o=Uc(r.level);e.closest(".field").querySelectorAll(".chip").forEach(c=>c.classList.toggle("on",+c.dataset.value===o.level));let l=this.root.querySelector("#diff-blurb");l&&(l.textContent=o.blurb+" \u2014 drag for any value in between. Rookie leaves you room to learn; Legend runs every car at the physical limit.")}}rerender(){let t=this.root.querySelector(".panel-screen"),e=t?t.scrollTop:0;this.show(this.current,this.lastData);let i=this.root.querySelector(".panel-screen");i&&(i.scrollTop=e)}};function v_(s){let t=new Set,e=["map","normalMap","roughnessMap","metalnessMap","aoMap","emissiveMap","alphaMap","bumpMap","envMap","lightMap"];s.traverse(i=>{i.geometry&&i.geometry.dispose(),i.isInstancedMesh&&i.dispose();let n=i.material?Array.isArray(i.material)?i.material:[i.material]:[];for(let r of n)if(!(t.has(r)||r.userData&&r.userData.shared)){t.add(r);for(let a of e)r[a]&&r[a].dispose&&r[a].dispose();if(r.uniforms)for(let a of Object.values(r.uniforms))a.value&&a.value.isTexture&&a.value.dispose();r.dispose()}}),s.environment&&s.environment.dispose&&s.environment.dispose()}var __=s=>(s=Math.min(1,Math.max(0,s)),s*s*(3-2*s)),Ha=()=>new Promise(s=>requestAnimationFrame(()=>setTimeout(s,0)));function b_(s){let t=new Uint8Array(s.buffer,s.byteOffset,s.byteLength),e="";for(let i=0;i<t.length;i+=32768)e+=String.fromCharCode.apply(null,t.subarray(i,i+32768));return btoa(e)}function M_(s){let t=atob(s),e=new Uint8Array(t.length);for(let i=0;i<t.length;i++)e[i]=t.charCodeAt(i);return new Float32Array(e.buffer)}var Od=class{constructor(){this.canvas=document.getElementById("gl"),this.save=Fp(),this.state="boot",this.tracks={},this.input=new Lc,this.audio=new Fc,this.lastT=performance.now();try{this.initRenderer()}catch(e){throw document.getElementById("screens").innerHTML='<section class="screen loading"><div class="logo">Apex <span>GP</span></div><div class="hint" style="max-width:34rem;text-align:center;line-height:1.5">This game needs WebGL, and your browser could not start it. Try a current Chrome, Edge, Firefox or Safari with hardware acceleration enabled.</div></section>',e}this.canvas.addEventListener("webglcontextlost",e=>{e.preventDefault(),this.toast("Graphics context lost: reloading\u2026"),setTimeout(()=>location.reload(),1200)}),this.hud=new Nc(document.getElementById("hud")),this.screens=document.getElementById("screens"),this.menu=new kc(this.screens,this.save,this.hooks()),this.session=null,this.showroom=null,window.addEventListener("resize",()=>this.resize()),window.addEventListener("keydown",e=>{if(this.audio.start(),this.audio.resume(),this.menu.rebinding){e.preventDefault();let i=this.menu.rebinding;this.menu.rebinding=null,e.code!=="Escape"&&(this.save.settings.keys=Ep(this.save.settings.keys,i,e.code),He(this.save),this.applySettings()),this.input.pressed.clear(),this.input.down.clear(),this.menu.rerender();return}if(this.state==="replay"){let i=this.session&&this.session.replay;e.code==="Space"?(e.preventDefault(),this.replayAction("play")):e.code==="KeyN"?this.replayAction("car"):e.code==="KeyS"?this.replayAction("slow"):e.code==="KeyF"?this.replayAction("normal"):e.code==="ArrowLeft"&&i?i.t=Math.max(0,i.t-2):e.code==="ArrowRight"&&i&&(i.t=Math.min(this.session.rec.duration,i.t+2));return}if(this.state==="paused"&&e.code==="Escape"&&this.menu.current==="settings"){this.input.pressed.delete("Escape"),this.menu.show("pause");let i=document.getElementById("camname");i&&this.session&&(i.textContent=Jn[this.session.camRig.mode]);return}if(this.state==="menu"&&e.code==="Escape"&&this.menu.current&&this.menu.current!=="main"&&(this.menu.current==="settings"&&this.session?this.menu.show("pause"):this.toMain()),(this.state==="menu"||this.state==="results")&&e.code==="Enter"){let i=this.screens.querySelector(".btn.primary");i&&document.activeElement===document.body&&i.click()}}),window.addEventListener("pointerdown",()=>{this.audio.start(),this.audio.resume()}),document.addEventListener("visibilitychange",()=>{document.hidden&&this.state==="race"&&this.pause()});let t=e=>{let i=performance.now();i-(this._errT||-1e9)<6e3||(this._errT=i,console.error(e),this.toast("Something went wrong, but the game is still running (details in the console)"))};window.addEventListener("error",e=>t(e.message)),window.addEventListener("unhandledrejection",e=>t(String(e.reason))),this.setupTouch(),this.hud.onRadio=()=>this.audio.ui("radio"),document.getElementById("hud").addEventListener("click",e=>{e.target.closest("#finish")&&this.session&&this.session.fin&&(this.session.finConfirm=!0)}),this.boot()}hooks(){return{tracks:this.tracks,sfx:t=>this.audio.ui(t),startRace:t=>this.startRace(t),startLesson:t=>this.startLesson(t),raceFromQuali:t=>this.startRace({...t.cfg,mode:"race",qualiTimes:t.times,playerGrid:t.grid}),toMain:t=>this.toMain(t),resume:()=>this.resume(),restart:()=>this.restart(),applySettings:()=>this.applySettings(),previewTeam:t=>this.previewTeam(t),openSeason:()=>this.openSeason(),replay:t=>this.startReplay(t),photo:()=>this.startPhoto(),openCareer:()=>this.openCareer(),careerStart:t=>this.careerStart(t),careerRace:t=>this.careerRace(t),careerBuy:t=>this.careerBuy(t),careerNext:t=>this.careerNext(t),careerAbandon:()=>this.careerAbandon(),nextRound:()=>this.nextRound(),endSeason:()=>this.endSeason(),cycleCamera:()=>this.cycleCamera(),toast:t=>this.toast(t)}}initRenderer(){let t=this.save.settings.quality,e=new Jl({canvas:this.canvas,antialias:t!=="low",powerPreference:"high-performance"});this.renderer=e,e.toneMapping=ra,e.toneMappingExposure=1,e.shadowMap.enabled=t!=="low",e.shadowMap.type=hs,this.camera=new We(62,1,.25,9e3),this.post=new wc(e),this.resize()}resize(){let t=this.save.settings.quality,e=t==="high"?2:t==="medium"?1.5:1,i=Math.min(window.devicePixelRatio||1,e)*(this.resScale||1);this.renderer.setPixelRatio(i),this.renderer.setSize(window.innerWidth,window.innerHeight,!1),this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.updateProjectionMatrix(),this.pointScale=window.innerHeight*i/(2*Math.tan(this.camera.fov*Math.PI/360))}kn(t){let e=(this.input.keys[t]||[])[0];return e?gr(e):"(unbound)"}applySettings(){He(this.save),this.audio.setVolume(this.save.settings.volume),Object.assign(this.input.opts,{steerSpeed:this.save.settings.steerSpeed,padDead:this.save.settings.padDead,rumble:this.save.settings.rumble!==!1}),this.input.keys=Ua(this.save.settings.keys);let t=this.hud.el.pitgame&&this.hud.el.pitgame.querySelector(".pgt kbd");t&&(t.textContent=this.kn("drs")),this.hud.keyNames={pit:this.kn("pit"),tyre:this.kn("tyre")},this.hud.setUnits(this.save.settings.units),this.hud.el.minimap.classList.toggle("hidden",!this.save.settings.minimap),this.session&&this.session.guide&&this.session.guide.setVisible(this.save.settings.line!==!1),this.hud.el.tower.classList.toggle("force-hide",!this.save.settings.tower);let e=this.hud.el.tower;e.style.visibility=this.save.settings.tower?"":"hidden",this.resize(),this.session&&this.session.camRig&&(this.session.camRig.shakeOn=this.save.settings.shake&&!this.save.settings.calm),this.session&&this.session.guide&&(this.session.guide.cbSafe=!!this.save.settings.cbSafe),Id.calm=!!this.save.settings.calm,document.body.classList.toggle("calm",!!this.save.settings.calm),document.body.classList.toggle("bighud",!!this.save.settings.bigHud)}async boot(){this.screens.innerHTML=this.menu.screen_loading("Warming up the garage"),await Ha();try{for(let t of Be)this.tracks[t.id]=new ec(t),await Ha();this.buildShowroom(),this.applySettings(),this.toMain(),this.renderer.setAnimationLoop(()=>this.safeFrame())}catch(t){console.error(t),this.screens.innerHTML=`<section class="screen loading"><div class="logo">Error</div><div class="hint" style="max-width:40rem;white-space:pre-wrap">${String(t.stack||t)}</div></section>`}}toast(t){let e=document.getElementById("toast");document.body.classList.toggle("in-menu",this.screens.childElementCount>0),e.textContent=t,e.classList.add("show"),clearTimeout(this._toastT),this._toastT=setTimeout(()=>e.classList.remove("show"),2200)}buildShowroom(){let t=new Bi;t.background=new at("#07090c"),t.fog=new Hr("#07090c",18,60);let e=new ms(this.renderer);t.environment=e.fromScene(new tc,.04).texture,t.environmentIntensity=.9;let i=new yt(new yn(40,64),new Ot({color:1316895,roughness:.38,metalness:.55}));i.rotation.x=-Math.PI/2,t.add(i);let n=new yt(new Un(3.6,3.75,96),new re({color:16722474}));n.rotation.x=-Math.PI/2,n.position.y=.01,t.add(n);let r=new Hn(16777215,520,60,.7,1,1.4);r.position.set(-9,12,8),r.target.position.set(0,.5,0),r.castShadow=!0,r.shadow.mapSize.set(1024,1024);let a=new Hn(16730682,260,70,.8,1,1.4);a.position.set(10,6,-9);let o=new Hn(4882687,220,70,.8,1,1.4);t.add(new cs(9412800,1053466,.55)),o.position.set(-10,5,-8),t.add(r,r.target,a,o),this.showroom={scene:t,view:null,angle:0,cam:new We(36,1,.1,200)},this.previewTeam(this.save.config.team)}previewTeam(t){if(!this.showroom)return;let e=this.showroom;e.view&&(e.scene.remove(e.view.group),e.view.dispose()),e.view=new _s(le[t],{number:7,isPlayer:!0,code:"YOU"},{detail:"high"}),e.view.setPose(0,0,0,0),e.view.group.traverse(i=>{i.isMesh&&(i.castShadow=!0)}),e.scene.add(e.view.group),e.view.setCompound(ii[this.save.config.compound||"medium"])}toMain(t=!1){this.session&&this.endSession(),this.state="menu",this.hud.show(!1),document.getElementById("vignette").style.display="",this.menu.config={...this.save.config,assists:{...this.save.config.assists}},this.menu.show("main"),this.previewTeam(this.save.config.team)}openSeason(){let t=this.save.season,e=this.menu.config;if(t?t.calendar||Object.assign(t,{...dr(4),...t,calendar:rc.slice(),teamPoints:t.teamPoints||{},teamOf:t.teamOf||{},results:t.results||[]}):(t=dr(4),this.save.season=t),lc(t))return this.seasonFinale();e.mode="race",e.trackId=t.calendar[Math.min(t.round,t.calendar.length-1)],e.frontWing=e.rearWing=null,this.menu.tab="race",this.menu.show("setup",{season:!0})}openCareer(){let t=this.save.career;if(this.session&&this.endSession(),this.state="menu",this.hud.show(!1),!t)return this.menu.show("career_new");if(lc(t.season))return t.seasonRecap||wd(t),He(this.save),this.menu.show("career_end");this.menu.show("career_hub")}careerStart(t){this.save.career=Kf(t),this.menu.config.team=this.save.career.team,He(this.save),this.openCareer()}careerBuy(t){let e=this.save.career;if(!e)return;let i=Jf(e,t);i.ok?(this.audio.ui("good"),He(this.save)):this.toast(i.reason==="budget"?"Not enough budget":"Already at maximum"),this.menu.show("career_hub")}careerNext(t){let e=this.save.career;if(!e)return this.toMain();Qf(e,t),He(this.save),this.openCareer()}careerAbandon(){this.save.career=null,He(this.save),this.toMain()}careerRace(t){let e=this.save.career;if(!e)return;let i=e.season,n=i.calendar[i.round],r=this.tracks[n],o={...this.menu.config,mode:t?"qualifying":"race",trackId:n,laps:ac(r.length,e.distance),level:e.level,fieldSize:20,playerGrid:12,team:e.team,frontWing:null,rearWing:null,mandatoryStop:!1,adaptive:!1,weather:ys(i),compound:ys(i)==="light"||ys(i)==="heavy"?"wet":"medium",qualiTimes:null,seed:void 0,upgrades:{...e.upgrades},career:!0};this.startRace(o)}nextRound(){if(!this.save.season)return this.toMain();He(this.save),this.openSeason()}seasonFinale(){let t=this.save.season;this.state="menu",this.hud.show(!1),this.menu.show("season_end",{season:t})}endSeason(){let t=this.save.season;if(t){let i=xs(t).findIndex(a=>a.name==="You")+1,n=vs(t),r=le[this.save.config.team].short;(this.save.honours||(this.save.honours=[])).push({pos:i,points:t.points.You||0,team:r,constructorPos:n.findIndex(a=>a.team===r)+1,rounds:t.calendar.length,at:Date.now()}),this.save.honours=this.save.honours.slice(-30),this.recordStats({kind:"championship",pos:i}),this.toast(i===1?"Champion! Season complete.":`Season complete: P${i} in the championship`)}this.save.season=null,He(this.save),this.toMain()}cycleCamera(){if(!this.session)return;let t=this.session.camRig.next();this.save.settings.camera=t,He(this.save);let e=document.getElementById("camname");e&&(e.textContent=Jn[t]),this.toast("Camera: "+Jn[t])}startLesson(t){let e=Sc(t);if(!e)return;let i=this.menu.config,n=this.tracks[e.track],r=e.weather==="heavy"||e.weather==="light";this.startRace({...i,mode:e.mode,trackId:e.track,laps:e.laps||99,level:e.level??.3,fieldSize:e.mode==="race"&&e.fieldSize||2,playerGrid:2,tyreWear:e.tyreWear??2,compound:r?"wet":e.compound||"medium",weather:e.weather||"dry",timeOfDay:"day",mandatoryStop:!1,qualify:!1,qualiTimes:null,damage:!1,collisions:!0,lesson:e.id,assists:{...i.assists,abs:!0,stability:Math.max(1,i.assists.stability),pitAuto:!0,pitGame:!0}})}async startRace(t){this.audio.start(),this.audio.resume(),t={...t,...Bd(t)},this.lastConfig=t,this.session&&this.endSession(),this.state="loading",this.screens.innerHTML=this.menu.screen_loading("Building "+Be.find(e=>e.id===t.trackId).name),this.hud.show(!1),await Ha();try{await this.buildSession(t)}catch(e){console.error(e),this.screens.innerHTML=`<section class="screen loading"><div class="logo">Error</div><div class="hint" style="max-width:44rem;white-space:pre-wrap">${String(e.stack||e)}</div><button class="btn" data-act="quit">Back</button></section>`}}async buildSession(t){let e=this.tracks[t.trackId],i=new cc(e,{mode:t.mode,laps:t.laps,level:t.level,adaptive:t.adaptive,fieldSize:t.fieldSize,playerTeam:t.team,playerGrid:Math.min(t.playerGrid,t.fieldSize),collisions:t.collisions,damage:t.damage,tyreWear:t.tyreWear,mandatoryStop:t.mandatoryStop,pitCalls:t.pitCalls,compound:t.compound,setup:{frontWing:t.frontWing,rearWing:t.rearWing,brakeBias:t.brakeBias,pressure:t.pressure},assists:{...t.assists,stability:t.assists.stability,tc:t.assists.tc,steer:t.assists.steer},seed:t.seed??Math.random()*1e6|0,qualiTimes:t.mode==="race"&&t.qualiTimes||null,upgrades:t.upgrades||null,weather:t.weather||"dry",equalCars:t.career?!1:t.equalCars!==!1});await Ha();let n=this.save.settings.quality,r=i.getProfile(i.player.spec,`${i.player.info.team.id}:${t.compound}`),a=new gc(e,{quality:n,profile:r});await Ha();let o=new Bi;o.add(a.group);let l=e.theme;o.fog=new Or(new at(l.fog),1.1/l.fogFar),o.background=new at(l.fog);let c=new ms(this.renderer),h=new Bi,f=a.sky.clone();h.add(f),o.environment=c.fromScene(h,.02).texture,o.environmentIntensity=.75,c.dispose();let d=new Map,u=n==="low"?"low":"high";for(let S of i.cars){let _=new _s(S.info.team,S.info,{detail:u});_.setCompound(S.compound),o.add(_.group),d.set(S,_)}let g=[];if(t.timeOfDay!=="day"){let S=d.get(i.player);for(let _ of[-.32,.32]){let T=new Hn(16773328,0,110,.34,.65,1.4);T.position.set(2.6,.3,_),T.target.position.set(40,-.5,_*1.6),S.model.add(T,T.target),g.push(T)}}let y=new Cc(o),m=new Ec;o.add(m.mesh);let p=new bc(e,r);o.add(p.mesh),p.setVisible(this.save.settings.line!==!1);let v=this.camera,M=new Fa(v);M.setMode(this.save.settings.camera||"chase"),M.shakeOn=this.save.settings.shake&&!this.save.settings.calm,p.cbSafe=!!this.save.settings.cbSafe;let b=null;if(t.mode==="timetrial"){let S=this.save.ghosts[e.id];if(S)try{let _=M_(S.data);if(!(_.length>=12)||!Number.isFinite(S.time))throw new Error("bad ghost");i.ghostBest={time:S.time,frames:_,track:e.id}}catch{delete this.save.ghosts[e.id],He(this.save)}b=new _s(le[t.team],{number:0,isPlayer:!1,code:"GST"},{ghost:!0,detail:"low"}),b.group.visible=!1,o.add(b.group)}this.perf=null,this.session={cfg:{...t,seed:i.opt.seed},track:e,race:i,world:a,scene:o,views:d,effects:y,rain:m,headlights:g,camRig:M,ghostView:b,guide:p,acc:0,alpha:0,intro:4.2,introT:0,paused:!1,finishedShown:!1,radioT:0,fast:!1,player:i.player,pin:null,sunDir:a.sunDir,stopTimer:0,lastEventCar:null,seasonRound:this.save.season?this.save.season.round:null,useSeason:t.__season,prevBest:this.save.records[e.id]?this.save.records[e.id].best:1/0,rec:new Ac(i.cars.length,30,30),replayCars:_p(i.cars),school:t.lesson&&Sc(t.lesson)?new Mc(Sc(t.lesson)):null},this.hud.setTrack(e),this.session.school||this.hud.setLesson(null),this.hud.setUnits(this.save.settings.units),this.hud.show(!0),this.applySettings(),this.screens.innerHTML="",this.state="race",document.getElementById("touch")&&this.updateTouchVisibility(),this.hud.message(t.mode==="qualifying"?"Qualifying":t.mode==="timetrial"?"Time trial":`${e.name}`,"",t.mode==="qualifying"?"3 minutes \xB7 best lap sets your grid slot \xB7 all 20 cars on track":t.mode==="timetrial"?"Set your best lap \u2014 your ghost follows":`${t.laps} laps \xB7 P${i.player.info.gridPos} on the grid${t.qualiTimes?" (qualified)":""}`,4),this.hud.showKeyHint(1e4,this.input.keys),t.mode==="race"&&this.hud.radio("Welcome to "+e.name+". Lights out when you are ready \u2014 good luck.",6)}endSession(){let t=this.session;t&&(v_(t.scene),t.rain&&t.rain.dispose(),t.rec&&(t.rec.data=null),this._replayUI&&this._replayUI.classList.add("hidden"),this._photoUI&&this._photoUI.classList.add("hidden"),this.renderer.renderLists.dispose(),this.session=null,this.audio.update({rpm:0,throttle:0,speed:0,slipVis:[0,0,0,0],kerbShake:0,gear:1},[],{pos:new k,right:new k(1,0,0),vel:new k},.016,!0))}toggleAutopilot(){let t=this.session;if(!(!t||t.race.opt.mode==="timetrial"&&!1)){if(!t.pilot){let e=t.race.getProfile(t.player.spec,"pilot");t.pilot=new bn({car:t.player,track:t.track,profile:e,level:Math.max(.6,t.cfg.level),seed:4242}),t.pilot.goTime=0}t.auto=!t.auto,t.pilot.offset=0,this.toast(t.auto?"Autopilot on (G to take over)":"You have control")}}debugUntil(t,e=300){let i=this.session;if(!i)return!1;i.pilot||this.toggleAutopilot(),i.auto=!0;let{race:n}=i,r={throttle:0,brake:0,steer:0,boost:!1,aiDriven:!0};n.phase==="grid"&&n.start();for(let a=0;a<e/di;a++){if(n.phase==="racing"){let o=i.pilot.update(di,n);r.throttle=o.throttle,r.brake=o.brake,r.steer=o.steer,r.boost=o.boost,r.drsPress=o.drs&&!i.player.rs.drsLatch}else r.throttle=0,r.brake=1,r.steer=0,r.drsPress=!1;if(n.step(di,r),t())break}return i.introT=99,t()}debugSkip(t){let e=this.session;if(!e)return;e.pilot||this.toggleAutopilot(),e.auto=!0;let{race:i}=e,n={throttle:0,brake:0,steer:0,boost:!1,aiDriven:!0};i.phase==="grid"&&i.start();let r=Math.round(t/di);for(let a=0;a<r;a++){if(i.phase==="racing"){let o=e.pilot.update(di,i);n.throttle=o.throttle,n.brake=o.brake,n.steer=o.steer,n.boost=o.boost,n.drsPress=o.drs&&!e.player.rs.drsLatch}else n.throttle=0,n.brake=1,n.steer=0,n.drsPress=!1;i.step(di,n)}i.events.length=0,e.introT=99}pause(){let t=this.session;if(!t||this.state!=="race")return;this.state="paused",t.paused=!0,this.menu.show("pause");let e=document.getElementById("camname");e&&(e.textContent=Jn[t.camRig.mode])}resume(){this.session&&(this.screens.innerHTML="",this.hud.show(!0),this.state="race",this.session.paused=!1,this.lastT=performance.now())}restart(){this.lastConfig&&this.startRace(this.lastConfig)}setupTouch(){let t=document.getElementById("touch");if(!t)return;let e=(r,a)=>this.input.touch[r]=a,i=this.input,n=(r,a)=>{let o=i.keys[r]&&i.keys[r][0];o&&(i.pressed.add(o),a&&i.down.add(o))};t.querySelectorAll("button").forEach(r=>{let a=r.dataset.k,o=r.dataset.a;if(o){r.addEventListener("pointerdown",h=>{h.preventDefault(),i.touchMode=!0,n(o,!!r.dataset.hold)});let c=()=>{if(r.dataset.hold){let h=i.keys[o]&&i.keys[o][0];h&&i.down.delete(h)}};r.addEventListener("pointerup",c),r.addEventListener("pointercancel",c),r.addEventListener("pointerleave",c);return}r.addEventListener("pointerdown",c=>{c.preventDefault(),i.touchMode=!0,e(a,!0);let h=this.session&&this.session.race;h&&h.phase==="grid"&&a==="throttle"&&n("drs")});let l=()=>e(a,!1);r.addEventListener("pointerup",l),r.addEventListener("pointercancel",l),r.addEventListener("pointerleave",l)}),window.addEventListener("touchstart",()=>{this.input.touchMode=!0,this.updateTouchVisibility()},{passive:!0,once:!0})}updateTouchVisibility(){let t=document.getElementById("touch");t&&t.classList.toggle("show",this.input.touchMode&&this.state==="race")}watchPerf(t){if(this.save.settings.autoQuality===!1||t>.5)return;let e=this.perf||(this.perf={acc:0,n:0,steps:this.perfSteps||0,cool:this.perfSteps?0:1});if(e.acc+=t,e.n++,e.acc<4)return;let i=e.n/e.acc;if(e.acc=0,e.n=0,e.cool>0){e.cool--;return}i>=40||e.steps>=4||(e.steps++,this.perfSteps=e.steps,e.cool=1,e.steps<=3?this.resScale=[1,.85,.7,.55][e.steps]:(this.session&&this.session.world&&(this.session.world.sun.castShadow=!1),this.renderer.shadowMap.enabled=!1,this.perfNoFx=!0),this.resize(),this.toast(e.steps<=3?`Frame rate was ${i.toFixed(0)} fps: lowered the render resolution (Settings > Automatic quality)`:"Frame rate is still low: shadows and motion blur turned off"))}safeFrame(){try{this.frame(),this.frameErrors=0}catch(t){this.frameErrors=(this.frameErrors||0)+1,console.error(t),this.frameErrors===5&&this.fatal(t)}}fatal(t){this.state="menu",this.hud.show(!1),this.screens.innerHTML=`<section class="screen loading"><div class="logo">Apex <span>GP</span></div><div class="hint" style="max-width:40rem;text-align:center;line-height:1.5">Something went wrong in the game loop and the session was stopped. Your settings and records are safe.<br><small style="opacity:.6">${String(t&&t.message||t).replace(/[<>&]/g,"")}</small></div><button class="btn primary" data-act="quit">Back to menu</button></section>`}frame(){let t=this.input.touchMode&&this.state==="race";if(t!==this._touchShown){this._touchShown=t;let a=document.getElementById("touch");a&&a.classList.toggle("show",t)}let e=performance.now(),i=Math.min(.05,(e-this.lastT)/1e3);this.state==="race"&&this.watchPerf((e-this.lastT)/1e3),this.lastT=e;let n=this.renderer;if(this.state==="menu"||this.state==="loading"||this.state==="paused"&&!this.session){this.renderShowroom(i);return}let r=this.session;if(r){if(this.state==="paused"){if(this.input.poll(i,0).pause)return this.resume();this.audio.update(r.player,[],this.listener(),i,!0),this.post.render(r.scene,this.camera,0,this.bloomFor(r));return}if(this.state==="replay"){this.runReplay(r,i);return}if(this.state==="photo"){this.runPhoto(r,i);return}this.state==="race"&&this.runSession(r,i),this.post.render(r.scene,this.camera,this.speedBlur(r),this.bloomFor(r))}}bloomFor(t){let e=this.save.settings;return e.bloom===!1||this.perfNoFx||e.quality==="low"?0:it(.04+.8*(t.nightK||0)+.2*(t.duskK||0),0,.9)}speedBlur(t){let e=this.save.settings;if(!e.blur||this.perfNoFx||e.calm||e.quality==="low"||t.camRig.mode==="tv"||t.paused)return 0;let i=t.player,n=it((i.speed*3.6-140)/200,0,1),r=(Math.exp(3*n)-1)/(Math.exp(3)-1);return i.drsPos>.5&&(r+=.1),i.boosting&&(r+=.08),it(r,0,1)*(t.camRig.mode==="cockpit"?1.15:1)}renderShowroom(t){let e=this.showroom;if(!e)return;this.renderer.toneMappingExposure=1,e.angle+=t*.28;let i=e.cam;i.aspect=window.innerWidth/window.innerHeight;let n=i.aspect>1.2;i.setViewOffset&&n?i.setViewOffset(window.innerWidth,window.innerHeight,-window.innerWidth*.17,0,window.innerWidth,window.innerHeight):i.clearViewOffset(),i.updateProjectionMatrix();let r=11.5;i.position.set(Math.cos(e.angle)*r,2.6+Math.sin(e.angle*.7)*.6,Math.sin(e.angle)*r),i.lookAt(0,.55,0),this.renderer.render(e.scene,i)}listener(){let t=this.camera,e=this._listener||(this._listener={pos:t.position,right:new k,vel:new k});return e.pos=t.position,e.right.set(1,0,0).applyQuaternion(t.quaternion),e}runSession(t,e){let{race:i,player:n,views:r,camRig:a,effects:o,world:l}=t,c=this.input,h=c.poll(e,n.speed);if(h.pause)return this.pause();h.camera&&!t.fin&&(this.cycleCamera(),t.introCancelled=!0,a.init=!1),h.mute&&(this.audio.setEnabled(!this.audio.enabled),this.toast(this.audio.enabled?"Sound on":"Sound off")),h.map&&this.hud.el.minimap.classList.toggle("hidden"),h.tele&&this.toast("Live telemetry "+(this.hud.toggleTele()?"on":"off")),h.line&&(this.save.settings.line=this.save.settings.line===!1,t.guide.setVisible(this.save.settings.line),He(this.save),this.toast("Racing line guide "+(this.save.settings.line?"on":"off"))),a.lookBack=h.lookBack,this.input.rumble(n,a.impact,e),t.fin&&(t.fin.t+=e,((h.confirm||t.finConfirm)&&t.fin.t>1.5||t.fin.t>40)&&(t.skipToResults||(t.skipToResults=!0,this.hud.hideFinish(),this.hud.message("Finishing the classification\u2026","","Waiting for the rest of the field",3)))),h.autoToggle&&this.toggleAutopilot();let f=()=>t.auto&&(i.phase==="racing"||t.fin&&i.phase==="finished");f()&&(h.aiDriven=!0),i.phase==="grid"&&(t.introT+=e,(t.introT>t.intro||h.drsPress||c.isDown("pit"))&&(i.start(),a.init=!1)),h.reset&&(i.phase==="racing"||i.phase==="countdown")&&(i.resetToTrack(n),i.phase==="racing"&&this.hud.message("Car recovered","","Back on the racing line",2));let d=!!t.skipToResults&&i.phase!=="finished",u=0;t.acc+=d?di*300:e;let g={gearUp:h.gearUp,gearDown:h.gearDown,drsPress:h.drsPress,pitToggle:h.pitToggle,tyreCycle:h.tyreCycle,ersCycle:h.ersCycle,fuelCycle:h.fuelCycle,bbDelta:h.bbDelta},y={throttle:h.throttle,brake:h.brake,steer:h.steer,boost:h.boost,aiDriven:!!h.aiDriven,...g},m=d?300:14;for(;t.acc>=di&&u<m;){if(f()){let A=t.pilot.update(di,i);y.throttle=A.throttle,y.brake=A.brake,y.steer=A.steer,y.boost=A.boost,y.aiDriven=!0,A.drs&&!n.rs.drsLatch&&(y.drsPress=!0),n.rs.pilot&&n.rs.pilot.pitState!=="none"&&(t.pilot.pitState="none"),t.pilot.wantsPit=n.rs.pitRequested}i.step(di,y),y.gearUp=y.gearDown=y.drsPress=y.pitToggle=y.tyreCycle=y.ersCycle=y.fuelCycle=!1,y.bbDelta=0,t.acc-=di,u++}t.acc>di*14&&(t.acc=0),t.alpha=t.acc/di,d&&i.phase!=="finished"&&(t.acc=0),this.processEvents(t),i.phase!=="grid"&&i.phase!=="countdown"&&t.rec.tick(e,i.cars,i,t.track),this.updateSafetyCarView(t,e);let p=this.camera.position,v=null;for(let A of i.cars){let I=r.get(A);I.update(A,t.alpha,e);let B=A.x-p.x,O=-A.y-p.z,$=B*B+O*O<25600;I.group.visible=$||A===n||B*B+O*O<1200*1200,I.setLod(!$&&A!==n),I.setShadow($&&this.save.settings.quality!=="low"),A!==n&&$&&o.car(A,e)}o.car(n,e),t.crews=t.crews||new Map;for(let A of i.cars){let I=A.rs.service,B=t.crews.get(A);if(I&&!B?(B=new vc(A.info.team),t.scene.add(B.group),t.crews.set(A,B)):!I&&B&&(t.scene.remove(B.group),B.dispose(),t.crews.delete(A),B=null),B){let O=r.get(A).group;B.group.position.copy(O.position),B.group.rotation.y=O.rotation.y,B.update(performance.now()/1e3,I.t/I.dur)}}if(o.update(e,this.pointScale),t.guide.setVisible(this.save.settings.line!==!1&&i.phase!=="grid"&&!n.rs.inPitLane&&!t.fin),t.guide.update(n),t.ghostView){let A=i.phase==="racing"?i.ghostPose(i.time-n.rs.lapStart):null;if(A&&n.rs.laps>=1){t.ghostView.group.visible=!0,t.ghostView.setPose(A.x,A.y,A.theta,0,A.steer);let I=t.track.project(A.x,A.y,-1,this._ghostProj||(this._ghostProj={}));t.ghostView.group.position.y=t.track.at(t.track.z,I.s),i.ghostPos=A}else t.ghostView.group.visible=!1,i.ghostPos=null}if(i.phase==="grid"&&t.introT<t.intro&&a.mode==="chase"&&!t.introCancelled){let A=-.9+t.introT*.5,I=r.get(n).group.position;this.camera.position.set(I.x+Math.cos(A)*9+0,I.y+2.4,I.z+Math.sin(A)*9),this.camera.lookAt(I.x,I.y+.6,I.z),this.camera.fov=48,this.camera.updateProjectionMatrix()}else a.update(e,r.get(n),n,t.track),a.shakeOn||(a.impact=0);let b=i.totalLaps*t.track.length,S=i.opt.mode==="race"&&t.cfg.timeOfDay!=="day"?it((i.sorted[0]?i.sorted[0].rs.maxDist:0)/b,0,1):0,_=t.cfg.timeOfDay==="night",T=_?.9:.88*Math.pow(S,1.1),x=_?1:.55*__((S-.72)/.28);t.nightK=x,t.duskK=T;let w=l.setAtmosphere({dusk:T,wet:i.wet,rain:i.rain,night:x});t.scene.fog.color.copy(w.fog),t.scene.fog.density=1.1/(t.track.theme.fogFar*w.fogMul),t.scene.background.copy(w.fog),t.scene.environmentIntensity=.75*w.envMul,this.renderer.toneMappingExposure=w.exposure;for(let A of t.headlights)A.intensity=x*120;o.wet=i.wet,o.setLight(it(1-.5*T-.4*x-.18*i.rain,.3,1)),t.rain.update(e,this.camera.position,i.rain),l.focusShadow(r.get(n).group.position),l.update(e,performance.now()/1e3),l.setStartLights(i.phase==="countdown"?i.lights:0,i.phase==="racing"&&i.time-i.t0<1.5),this.hud.update(i,n,h,performance.now()),this.radioTick(t,e),this.schoolTick(t,e);let P=t._others||(t._others=[]),D=0;for(let A of i.cars){if(A===n)continue;let I=r.get(A).group.position,B=P[D]||(P[D]={car:null,wx:0,wz:0,vx:0,vz:0});B.car=A,B.wx=I.x,B.wz=I.z,B.vx=A.u*Math.cos(A.theta),B.vz=-A.u*Math.sin(A.theta),D++}P.length=D;let C=this.listener(),F=r.get(n).group.position;C.vel.set(n.u*Math.cos(n.theta),0,-n.u*Math.sin(n.theta)),this.audio.weather.rain=i.rain,this.audio.weather.wet=i.wet,this.audio.update(n,P,C,e,!1),i.phase==="finished"&&!t.finishedShown&&(!t.fin||t.skipToResults)&&(t.finishedShown=!0,setTimeout(()=>{this.session===t&&this.showResults()},i.opt.mode==="timetrial"?0:600))}processEvents(t){let{race:e,player:i,effects:n,camRig:r}=t,a=this.hud;for(let o of e.events)switch(t.school&&t.school.onEvent(o,i)&&this.lessonPassed(t),o.type){case"light":a.setLights(o.n),this.audio.light(o.n);break;case"lightsOut":a.setLights(0,!0),this.audio.go(),e.opt.mode==="race"&&a.message("Go go go!","good","",1.6);break;case"lap":if(o.car===i){let l=e.fastest.car===i&&e.fastest.time===o.time,c=i.rs.best===o.time&&o.valid;e.opt.mode==="timetrial"||o.lap>=2||e.totalLaps===1?a.message(`Lap ${o.lap} \xB7 ${Se(o.time)}`,l?"purple":c?"good":o.valid?"":"bad",o.valid?l?"Fastest lap of the race":c?"Personal best":"":"Lap invalidated (track limits)",3.5):a.message(`Lap ${o.lap} \xB7 ${Se(o.time)}`,"","Standing-start lap, not counted for records",3)}break;case"fastest":o.car!==i&&e.opt.mode==="race"&&a.message(`Fastest lap \xB7 ${o.car.info.code}`,"purple",Se(o.time),2.5);break;case"penalty":o.car===i&&(a.message(`+${o.secs}s penalty`,"bad",o.reason,4),this.audio.ui("bad"),a.radio(`Penalty: ${o.reason}. ${o.secs} seconds added to your race time.`,6));break;case"pitStopStart":o.car===i&&o.game&&!t._pgTip?(t._pgTip=!0,a.radio(`Pit stop: press ${this.kn("drs")} as each marker enters the green. Perfect timing on all four wheels is a 2.5 second stop.`,7)):o.car===i&&a.radio("Box, box \u2014 hold position, tyres going on.",3);break;case"pitCall":if(o.car===i){let l=ii[o.advice.compound].name.toUpperCase(),c={wet:"The track is wet",dry:"The track is dry",rules:"We need the mandatory stop",wear:"The tyres are going"}[o.advice.reason]||"Strategy";a.radio(o.auto?`${c}. Box, box: ${l} tyres. (${this.kn("pit")} cancels)`:`${c}. Box this lap for ${l}: press ${this.kn("pit")} (${this.kn("tyre")} changes the tyre).`,7),this.audio.ui("good")}break;case"mode":if(o.car===i){let l=o.what==="ers"?`ERS mode: ${["Harvest (recharge)","Balanced","Attack (deploy more)"][o.value]}`:o.what==="fuel"?`Fuel mix: ${["Lean (save fuel)","Standard","Rich (more power)"][o.value]}`:`Brake bias: ${Math.round(o.value*100)}% front`;a.message(l,"",o.what==="bias"?"Higher is more stable, lower turns in better":"",1.6),this.audio.ui("click")}break;case"damageBox":o.car===i&&(a.message("Box for repairs","bad",`Heavy damage: pit request set (${this.kn("pit")} to cancel)`,4),a.radio("Box, box. You have heavy damage: we need to repair the car. Pit this lap.",6),this.audio.ui("bad"));break;case"pitWheel":o.car===i&&this.audio.ui(o.res==="perfect"?"good":o.res==="good"?"click":"bad");break;case"pitGameDone":o.car===i&&a.message(o.misses?"Cross-threaded wheel nut":o.perfects===4?"Perfect pit stop":"Clean pit stop",o.misses?"bad":"",`${o.dur.toFixed(1)} seconds`+(o.repair>.05?` + ${o.repair.toFixed(1)} s repairs`:""),3);break;case"scDeploy":a.flag("SAFETY CAR","#ffc400",6,"sc"),a.radio("Safety car, safety car. Stay in position behind the pace car. No overtaking.",7),this.audio.ui("bad"),this.ensureSafetyCar(t);break;case"scEnding":a.radio("Safety car in this lap. Get ready to go green.",5),a.flag("SC IN THIS LAP","#ffc400",4,"sc");break;case"scEnd":a.flag("GREEN FLAG","#31d17a",4,"green"),a.radio("Green, green, green. We are racing again.",4);break;case"yellow":(!t._yellowT||performance.now()-t._yellowT>12e3)&&(t._yellowT=performance.now(),a.flag("YELLOW FLAG","#ffd400",3.5,"yellow"));break;case"warning":o.car===i&&(a.message(`Track limits \xB7 warning ${o.n}/3`,"bad","All four wheels beyond the white line",3),this.audio.ui("bad"));break;case"lapInvalid":o.car===i&&a.message("Lap invalidated","bad","Track limits",2.5);break;case"sector":o.kind==="purple"&&a.message("Purple sector","purple","",1.4);break;case"pitRequest":o.car===i&&a.message(o.on?"Box this lap":"Pit request cancelled",o.on?"":"bad",o.on?`Press ${this.kn("tyre")} to pick the next compound`:"",2.5);break;case"pitEntry":o.car===i&&a.message("Pit lane","",this.save.settings.units==="mph"?"50 mph limit":"80 km/h limit",2.5);break;case"pitStopEnd":o.car===i&&(a.message("Pit stop complete","good",`Fitted ${ii[o.compound].name} tyres`,3),this.audio.ui("good"));break;case"impact":{let l=this.camera.position,c=Math.hypot(o.x-l.x,-o.y-l.z);c<200&&(n.burst(o.x,.5,-o.y,Math.min(60,10+o.speed*3),Math.min(18,4+o.speed)),c<90&&this.audio.thud(it(o.speed/20,.15,1)*(1-c/100))),(o.car===i||o.other===i)&&(r.impact=Math.max(r.impact,it(o.speed/25,.1,1)),e.opt.damage&&o.speed>6&&a.message("Contact","bad",o.wall?"Barrier impact":"Collision with "+(o.car===i?o.other:o.car).info.code,2));break}case"chequered":a.flag("Chequered flag","#fff",4,"chequered");break;case"finish":o.car===i&&e.opt.mode==="race"?this.startFinishScene(t,o):o.car===i&&e.isQuali&&this.startQualiEnd(t);break;case"ghost":this.saveGhost(t);break;case"recover":o.car===i&&(this.input.throttle=0);break}e.events.length=0}startFinishScene(t,e){let{race:i,player:n,camRig:r}=t;if(t.fin)return;t.fin={t:0};let a=n.rs,o=i.cars.find(c=>c.rs.finished&&c!==n&&c.rs.pos===1)||null,l=o&&a.pos>1?a.finishTime-o.rs.finishTime:null;if(!t.pilot){let c=i.getProfile(n.spec,"pilot");t.pilot=new bn({car:n,track:t.track,profile:c,level:.6,seed:4242}),t.pilot.goTime=0}t.pilot.paceAdapt=.32,t.pilot.offset=0,t.auto=!0,r.setMode("finish"),this.hud.showFinish({pos:a.pos,total:i.cars.length,team:n.info.team,name:n.info.name,time:e.time,gap:l,best:a.best,penalty:a.penalty}),this.audio.cheer(a.pos<=3?1:.5),a.pos<=3?this.audio.fanfare():this.audio.ui("good")}startPhoto(){let t=this.session;if(!t)return;this.state="photo",this.screens.innerHTML="",this.hud.show(!1);let e=this.camera,i=new Ri().setFromQuaternion(e.quaternion,"YXZ");if(t.photo={yaw:i.y,pitch:i.x,pos:e.position.clone(),speed:6,fov:e.fov,shot:!1,flash:0},t.guide.setVisible(!1),this.photoUI().classList.remove("hidden"),!this._photoBound){this._photoBound=!0;let r=!1;this.canvas.addEventListener("pointerdown",a=>{this.state==="photo"&&(r=!0,this.canvas.setPointerCapture(a.pointerId))}),this.canvas.addEventListener("pointerup",()=>r=!1),this.canvas.addEventListener("pointermove",a=>{let o=this.session&&this.session.photo;!r||!o||this.state!=="photo"||(o.yaw-=a.movementX*.004,o.pitch=Math.max(-1.5,Math.min(1.5,o.pitch-a.movementY*.004)))}),this.canvas.addEventListener("wheel",a=>{let o=this.session&&this.session.photo;!o||this.state!=="photo"||(o.fov=Math.max(12,Math.min(95,o.fov+a.deltaY*.03)),a.preventDefault())},{passive:!1})}}photoUI(){if(this._photoUI)return this._photoUI;let t=document.createElement("div");return t.id="photo",t.className="hidden",t.innerHTML='<div class="pbar"><b>PHOTO MODE</b><span>WASD move \xB7 Q / E down / up \xB7 drag to look \xB7 wheel zoom \xB7 Shift fast</span><button data-p="shot">Capture (Space)</button><button data-p="exit" class="exit">Done (Esc)</button></div><div class="pflash"></div>',document.body.appendChild(t),t.addEventListener("click",e=>{let i=e.target.closest("[data-p]");i&&(i.dataset.p==="shot"?this.session.photo.shot=!0:this.endPhoto())}),this._photoUI=t,t}endPhoto(){let t=this.session;if(this._photoUI&&this._photoUI.classList.add("hidden"),!t)return;t.photo=null,t.guide.setVisible(this.save.settings.line!==!1),this.camera.fov=t.camRig.fov,this.camera.updateProjectionMatrix(),this.state="paused",this.menu.show("pause");let e=document.getElementById("camname");e&&(e.textContent=Jn[t.camRig.mode])}runPhoto(t,e){let i=t.photo;if(!i)return;let n=this.input,r=n.down.has("ShiftLeft")||n.down.has("ShiftRight"),a=i.speed*(r?4:1)*e,o=new k(-Math.sin(i.yaw)*Math.cos(i.pitch),Math.sin(i.pitch),-Math.cos(i.yaw)*Math.cos(i.pitch)),l=new k(Math.cos(i.yaw),0,-Math.sin(i.yaw)),c=d=>n.down.has(d)?1:0;if(i.pos.addScaledVector(o,(c("KeyW")-c("KeyS"))*a).addScaledVector(l,(c("KeyD")-c("KeyA"))*a),i.pos.y+=(c("KeyE")-c("KeyQ"))*a,n.pressed.has("Escape")||n.pressed.has("KeyP"))return n.pressed.clear(),this.endPhoto();n.pressed.has("Space")&&(i.shot=!0),n.pressed.clear();let h=this.camera;h.position.copy(i.pos),h.rotation.set(i.pitch,i.yaw,0,"YXZ"),Math.abs(h.fov-i.fov)>.01&&(h.fov=i.fov,h.updateProjectionMatrix()),t.world.focusShadow(t.views.get(t.player).group.position),t.world.update(e,performance.now()/1e3),this.audio.update(t.player,[],this.listener(),e,!0),this.post.render(t.scene,h,0,this.bloomFor(t));let f=this._photoUI.querySelector(".pflash");i.shot&&(i.shot=!1,this.canvas.toBlob(d=>{if(!d)return;let u=document.createElement("a");u.href=URL.createObjectURL(d),u.download=`apex-grand-prix-${t.track.id}-${Date.now()}.png`,document.body.appendChild(u),u.click(),setTimeout(()=>{URL.revokeObjectURL(u.href),u.remove()},1e3)},"image/png"),f.style.opacity="0.85",this.audio.ui("click"),i.flash=.25),i.flash>0&&(i.flash-=e,i.flash<=0&&(f.style.opacity="0"))}startReplay(t){let e=this.session;if(!e||!e.rec||e.rec.count<20)return this.toast("Nothing to replay yet");this.replayFrom=t,this.state="replay",this.screens.innerHTML="",this.hud.show(!1);let i=new Fa(this.camera);i.shakeOn=!1,i.setMode("tv"),e.replay={t:0,playing:!0,speed:1,rig:i,modeIdx:0,follow:e.race.cars.indexOf(e.player),endHold:0},e.guide.setVisible(!1),this.replayUI().classList.remove("hidden"),this.updateReplayUI()}replayUI(){if(this._replayUI)return this._replayUI;let t=document.createElement("div");return t.id="replay",t.className="hidden",t.innerHTML=`<div class="rbar"><b>REPLAY</b><span id="r-time">0:00</span>
      <input id="r-scrub" type="range" min="0" max="1000" value="0">
      <button data-r="play" title="Play / pause (Space)">\u23EF</button>
      <button data-r="slow" title="Slow motion (S)">\xBC\xD7</button><button data-r="normal" title="Normal speed (F)">1\xD7</button>
      <button data-r="cam" title="Camera (C)">Camera: <span id="r-cam"></span></button>
      <button data-r="car" title="Follow another car (N)">Car: <span id="r-car"></span></button>
      <button data-r="exit" class="exit" title="Back (Esc)">Done</button></div>`,document.body.appendChild(t),t.addEventListener("click",e=>{let i=e.target.closest("[data-r]");i&&this.replayAction(i.dataset.r)}),t.querySelector("#r-scrub").addEventListener("input",e=>{let i=this.session;!i||!i.replay||(i.replay.t=+e.target.value/1e3*i.rec.duration,i.replay.playing=!1)}),this._replayUI=t,t}replayAction(t){let e=this.session;if(!e||!e.replay)return;let i=e.replay;if(t==="play")i.t>=e.rec.duration-.05&&(i.t=0),i.playing=!i.playing;else if(t==="slow")i.speed=.25;else if(t==="normal")i.speed=1;else if(t==="cam"){let n=["tv","chase","close","heli","cockpit","tcam"];i.modeIdx=(i.modeIdx+1)%n.length,i.rig.setMode(n[i.modeIdx])}else if(t==="car"){let n=[...e.race.sorted],r=n.indexOf(e.race.cars[i.follow]);i.follow=e.race.cars.indexOf(n[(r+1)%n.length]),i.rig.init=!1}else if(t==="exit")return this.endReplay();this.updateReplayUI()}updateReplayUI(){let t=this.session,e=this._replayUI;if(!t||!t.replay||!e)return;let i=t.replay;e.querySelector("#r-cam").textContent=Jn[i.rig.mode],e.querySelector("#r-car").textContent=t.race.cars[i.follow].info.code,e.querySelector("#r-time").textContent=`-${Math.max(0,t.rec.duration-i.t).toFixed(1)} s`;let n=e.querySelector("#r-scrub");document.activeElement!==n&&(n.value=Math.round(i.t/Math.max(.01,t.rec.duration)*1e3))}endReplay(){let t=this.session;if(this._replayUI&&this._replayUI.classList.add("hidden"),!!t){t.replay=null,t.guide.setVisible(this.save.settings.line!==!1),t.camRig.init=!1;for(let e of t.views.values())e.group.visible=!0;if(t.scView&&(t.scView.group.visible=t.race.sc.state!=="none"),this.replayFrom==="results")this.state="results",this.menu.show("results",this.menu.lastData);else{this.state="paused",this.menu.show("pause");let e=document.getElementById("camname");e&&(e.textContent=Jn[t.camRig.mode])}}}runReplay(t,e){let i=t.replay;if(!i)return;let n=t.rec,r=this.input.pressed.has("Enter"),a=this.input.poll(e,0);if(a.pause||r)return this.endReplay();a.camera&&this.replayAction("cam"),i.playing&&(i.t+=e*i.speed,i.t>=n.duration&&(i.t=n.duration,i.endHold+=e,i.endHold>1.5&&(i.playing=!1,i.endHold=0))),n.sample(i.t,t.replayCars);let o=t.race.cars;for(let c=0;c<o.length;c++){let h=t.views.get(o[c]);h.group.visible=!0,h.update(t.replayCars[c],1,e)}if(t.scView){let c=n.scPose;t.scView.group.visible=!!c,c&&t.scView.setPose(c.x,c.y,c.theta,t.track.at(t.track.z,0))}let l=t.replayCars[i.follow];i.rig.update(e,t.views.get(o[i.follow]),l,t.track),t.world.focusShadow(t.views.get(o[i.follow]).group.position),t.world.update(e,performance.now()/1e3),t.effects.update(e,this.pointScale),t.rain.update(e,this.camera.position,t.race.rain),this.audio.update(t.player,[],this.listener(),e,!0),this.updateReplayUI(),this.post.render(t.scene,this.camera,0,this.bloomFor(t))}ensureSafetyCar(t){if(t.scView)return;let e={id:"pace",name:"Safety car",short:"SC",color:"#f2c400",accent:"#111111",livery:"stripe",rating:.5},i=new _s(e,{number:0,isPlayer:!1,code:"SC"},{detail:"low"}),n=new yt(new _e(.3,.12,.9),new re({color:16747008}));n.position.set(-.3,1.15,0),i.model.add(n),i.bar=n,i.group.visible=!1,t.scene.add(i.group),t.scView=i}updateSafetyCarView(t,e){let i=t.race.sc,n=t.scView;if(!n)return;let r=i.state!=="none";if(n.group.visible=r,!r)return;let o=t.track.pointAt(i.s,0);n.setPose(o.x,o.y,o.heading,o.h),t.scT=(t.scT||0)+e,n.bar.material.color.setHex(Math.floor(t.scT*5)%2?16747008:4465152)}startQualiEnd(t){let{race:e,player:i,camRig:n}=t;if(t.fin)return;if(t.fin={t:0},!t.pilot){let a=e.getProfile(i.spec,"pilot");t.pilot=new bn({car:i,track:t.track,profile:a,level:.6,seed:4242}),t.pilot.goTime=0}t.pilot.paceAdapt=.32,t.pilot.offset=0,t.auto=!0,n.setMode("finish");let r=i.rs.best;this.hud.message("Qualifying complete","",Number.isFinite(r)?`Best lap ${Se(r)} \xB7 P${i.rs.pos}`:"No timed lap set",6),this.audio.ui("good")}saveGhost(t){let e=t.race.ghostBest;if(!e||t.cfg.lesson)return;this.save.ghosts[t.track.id]={time:e.time,data:b_(e.frames)};let i=this.save.records[t.track.id];(!i||e.time<i.best)&&(this.save.records[t.track.id]={best:e.time},this.toast("New track record: "+Se(e.time))),He(this.save)}schoolTick(t,e){if(!t.school)return;let i=t.school,n=i.update(e,t.player,t.race),r=n||i.complete;return this.hud.setLesson(i.lesson,i.done,i.ctx,i.complete),!t._schoolTip&&t.race.phase==="racing"&&(t._schoolTip=!0,this.hud.radio(i.lesson.tip,9)),n&&this.lessonPassed(t),r}lessonPassed(t){let e=t.school.lesson.id,i=!this.save.school[e];this.save.school[e]=!0,He(this.save),this.hud.message("Lesson complete","good",t.school.lesson.title+(i?"":" (again)"),4),this.audio.ui("good")}radioTick(t,e){if(t.radioT+=e,t.radioT<8||t.race.phase!=="racing"||t.race.opt.mode!=="race")return;let i=t.player,n=i.rs;t.radioT=0;let r=i.tyreSummary(),a=t.race.totalLaps-n.laps,o=t.race,l=o.forecast();l&&l.rainIn<70&&!t._rainWarn?(t._rainWarn=!0,this.hud.radio(`Rain is coming, about ${Math.round(l.rainIn/10)*10} seconds away. Think about wet tyres (${this.kn("pit")} to box, ${this.kn("tyre")} to choose Wet).`,7)):o.wet>.35&&!i.compound.wetTyre&&t.track.pit&&!t._wetCalled?(t._wetCalled=!0,this.hud.radio(`The track is wet. Box for wet tyres: press ${this.kn("pit")}, then ${this.kn("tyre")} to pick Wet.`,7)):o.wet<.14&&o.rain<.05&&i.compound.wetTyre&&!t._dryCalled&&n.laps>1?(t._dryCalled=!0,this.hud.radio("The track is drying. Box for slicks when you are ready.",6)):o.wet>.35&&(t._dryCalled=!1);let c=!1;r.wear>.7&&!n.pitRequested&&n.stops===0&&a>1&&t.track.pit&&!t._wearCalled&&(t._wearCalled=!0,c=!0,this.hud.radio(`Tyres are going off. Press ${this.kn("pit")} when you want to box.`,6)),i.drsAllowed&&!t._drsCalled&&!c?(t._drsCalled=!0,c=!0,this.hud.radio(`DRS enabled. Press ${this.kn("drs")} on the straight.`,4)):i.drsAllowed||(t._drsCalled=!1),i.behind&&(i.behind.gapAhead??9)<.8&&!t._behindCalled&&!c?(t._behindCalled=!0,c=!0,this.hud.radio(`${i.behind.info.code} is right behind, ${i.behind.gapAhead.toFixed(1)} seconds. Defend.`,4)):(!i.behind||(i.behind.gapAhead??9)>2)&&(t._behindCalled=!1);let h=Math.max(i.brakeTemp[0],i.brakeTemp[1],i.brakeTemp[2],i.brakeTemp[3]);h>1020&&!t._brakeCalled?(t._brakeCalled=!0,this.hud.radio("Brake temperatures are very high and the pedal will fade. Lift and coast earlier to let them cool.",6)):h<800&&(t._brakeCalled=!1),(i.damageFront||0)>.3&&!t._dmgCalled&&t.track.pit&&(t._dmgCalled=!0,this.hud.radio("You have front wing damage. Consider boxing for a new nose.",5))}recordStats(t){let e=Rp(this.save,t);He(this.save),e.forEach((i,n)=>{let r=jn.find(a=>a.id===i);r&&setTimeout(()=>this.toast(`Achievement unlocked: ${r.name}`),700+n*2200)}),e.length&&this.audio.fanfare()}showResults(){let t=this.session;if(!t||this.state==="menu")return;let{race:e,player:i,track:n}=t;this.state="results",this.hud.show(!1),document.getElementById("touch")&&this.updateTouchVisibility();let r=n.name;if(e.opt.mode==="timetrial"){let d=this.save.records[n.id],u=i.rs.best,g=!1;!t.cfg.lesson&&u<1/0&&u<t.prevBest&&(g=!0),!t.cfg.lesson&&u<1/0&&(!d||u<d.best)&&(this.save.records[n.id]={best:u}),He(this.save),this.menu.show("timetrial",{player:i,race:e,trackName:r,best:u,newBest:g});return}if(e.isQuali){let d=e.qualifying(),u=d.list.find(g=>g.car===i);if(u&&Number.isFinite(u.best)){let g=this.save.records[n.id];(!g||u.best<g.best)&&(this.save.records[n.id]={best:u.best}),He(this.save)}t.qualiRecorded||(t.qualiRecorded=!0,this.recordStats({kind:"quali",pos:u?u.pos:99,km:Math.max(0,i.rs.maxDist)/1e3})),this.menu.show("quali",{q:d,player:i,trackName:r,cfg:t.cfg});return}let a=e.classification(),o=t.cfg,l=a.find(d=>d.car===i);if(l&&l.best<1/0&&!o.lesson){let d=this.save.records[n.id];(!d||l.best<d.best)&&(this.save.records[n.id]={best:l.best})}let c=null,h=t.cfg;this.save.season&&this.save.season.calendar&&!h.career&&!h.lesson&&(t.seasonRecorded||t.useSeason&&this.save.season.calendar[this.save.season.round]===n.id)&&(c=this.save.season,t.seasonRecorded||(t.seasonRecorded=!0,Md(c,a)));let f=null;if(h.career&&this.save.career&&!t.careerRecorded){t.careerRecorded=!0;let d=this.save.career,u=Md(d.season,a);if(f=jf(d,u,a),f.budget=d.budget,lc(d.season)){let g=wd(d);this.recordStats({kind:"career",pos:g.driverPos})}}if(!t.statsRecorded&&!h.lesson){t.statsRecorded=!0;let d=i.rs;this.recordStats({kind:"race",pos:l?l.pos:99,grid:d.gridPos||i.info.gridPos,cars:a.length,laps:e.totalLaps,finishedRace:!!(l&&l.time!=null),penalty:d.penalty,damaged:(d.maxDamage||0)>.15,passes:d.passes||0,level:h.level,wet:(e.maxWet||0)>.3,night:h.timeOfDay==="night",km:Math.max(0,d.maxDist)/1e3,stops:d.stops,perfectStops:d.perfectStops||0,fastest:e.fastest.car===i,career:!!h.career,teamRank:Ta(h.team)})}He(this.save),this.menu.show("results",{cls:a,player:i,race:e,season:c,trackName:r,careerRes:f})}};window.apex=new Od;})();
