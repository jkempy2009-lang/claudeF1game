(()=>{var Qh=0,xc=1,tu=2;var Wi=1,eu=2,As=3,Gn=0,Ue=1,We=2,Vn=0,Ei=1,Dr=2,yc=3,_c=4,nu=5;var Xi=100,iu=101,su=102,ru=103,au=104,ou=200,lu=201,cu=202,hu=203,vc=204,Mc=205,uu=206,du=207,fu=208,pu=209,mu=210,gu=211,xu=212,yu=213,_u=214,La=0,Da=1,Fa=2,gs=3,Na=4,Ua=5,Ba=6,Oa=7,xo=0,vu=1,Mu=2,Rn=0,bc=1,Sc=2,wc=3,Fr=4,Ec=5,Tc=6,Ac=7;var Rc=300,Ti=301,qi=302,yo=303,_o=304,Nr=306,xs=1e3,Un=1001,ka=1002,Ge=1003,bu=1004;var Ur=1005;var Ze=1006,vo=1007;var Wn=1008;var un=1009,Cc=1010,Pc=1011,Rs=1012,Mo=1013,Cn=1014,vn=1015,Pn=1016,bo=1017,So=1018,Cs=1020,Ic=35902,Lc=35899,Dc=1021,Fc=1022,Mn=1023,Bn=1026,Ai=1027,wo=1028,Eo=1029,Ri=1030,To=1031;var Ao=1033,Br=33776,Or=33777,kr=33778,zr=33779,Ro=35840,Co=35841,Po=35842,Io=35843,Lo=36196,Do=37492,Fo=37496,No=37488,Uo=37489,Hr=37490,Bo=37491,Oo=37808,ko=37809,zo=37810,Ho=37811,Go=37812,Vo=37813,Wo=37814,Xo=37815,qo=37816,Yo=37817,$o=37818,Zo=37819,Jo=37820,Ko=37821,jo=36492,Qo=36494,tl=36495,el=36283,nl=36284,Gr=36285,il=36286;var rr=2300,za=2301,Pa=2302,oc=2303,lc=2400,cc=2401,hc=2402;var Su=3200;var Vr=0,wu=1,oi="",$e="srgb",ar="srgb-linear",or="linear",ae="srgb";var Ia=7680;var Eu=519,Tu=512,Au=513,Ru=514,sl=515,Cu=516,Pu=517,rl=518,Iu=519,Lu=35044,Wr=35048;var Nc="300 es",An=2e3,ys=2001;function $d(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function Zd(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function lr(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Du(){let s=lr("canvas");return s.style.display="block",s}var Eh={},_s=null;function Uc(...s){let t="THREE."+s.shift();_s?_s("log",t,...s):console.log(t,...s)}function Fu(s){let t=s[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=s[1];e&&e.isStackTrace?s[0]+=" "+e.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function Ot(...s){s=Fu(s);let t="THREE."+s.shift();if(_s)_s("warn",t,...s);else{let e=s[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...s)}}function kt(...s){s=Fu(s);let t="THREE."+s.shift();if(_s)_s("error",t,...s);else{let e=s[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...s)}}function Oi(...s){let t=s.join(" ");t in Eh||(Eh[t]=!0,Ot(...s))}function Nu(s,t,e){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var Uu={[La]:Da,[Fa]:Ba,[Na]:Oa,[gs]:Ua,[Da]:La,[Ba]:Fa,[Oa]:Na,[Ua]:gs},On=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let i=n[t];if(i!==void 0){let r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let i=n.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,t);t.target=null}}},Ke=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Nl=Math.PI/180,cr=180/Math.PI;function Xr(){let s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ke[s&255]+Ke[s>>8&255]+Ke[s>>16&255]+Ke[s>>24&255]+"-"+Ke[t&255]+Ke[t>>8&255]+"-"+Ke[t>>16&15|64]+Ke[t>>24&255]+"-"+Ke[e&63|128]+Ke[e>>8&255]+"-"+Ke[e>>16&255]+Ke[e>>24&255]+Ke[n&255]+Ke[n>>8&255]+Ke[n>>16&255]+Ke[n>>24&255]).toLowerCase()}function $t(s,t,e){return Math.max(t,Math.min(e,s))}function Jd(s,t){return(s%t+t)%t}function Ul(s,t,e){return(1-e)*s+e*t}function Js(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:case Uint8ClampedArray:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function ln(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var Gc=class Gc{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=$t(this.x,t.x,e.x),this.y=$t(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=$t(this.x,t,e),this.y=$t(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar($t(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos($t(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*i+t.x,this.y=r*i+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Gc.prototype.isVector2=!0;var Ft=Gc,Ne=class{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,a,o){let l=n[i+0],c=n[i+1],h=n[i+2],d=n[i+3],u=r[a+0],f=r[a+1],m=r[a+2],x=r[a+3];if(d!==x||l!==u||c!==f||h!==m){let g=l*u+c*f+h*m+d*x;g<0&&(u=-u,f=-f,m=-m,x=-x,g=-g);let p=1-o;if(g<.9995){let v=Math.acos(g),w=Math.sin(v);p=Math.sin(p*v)/w,o=Math.sin(o*v)/w,l=l*p+u*o,c=c*p+f*o,h=h*p+m*o,d=d*p+x*o}else{l=l*p+u*o,c=c*p+f*o,h=h*p+m*o,d=d*p+x*o;let v=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=v,c*=v,h*=v,d*=v}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,i,r,a){let o=n[i],l=n[i+1],c=n[i+2],h=n[i+3],d=r[a],u=r[a+1],f=r[a+2],m=r[a+3];return t[e]=o*m+h*d+l*f-c*u,t[e+1]=l*m+h*u+c*d-o*f,t[e+2]=c*m+h*f+o*u-l*d,t[e+3]=h*m-o*d-l*u-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,i=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(i/2),d=o(r/2),u=l(n/2),f=l(i/2),m=l(r/2);switch(a){case"XYZ":this._x=u*h*d+c*f*m,this._y=c*f*d-u*h*m,this._z=c*h*m+u*f*d,this._w=c*h*d-u*f*m;break;case"YXZ":this._x=u*h*d+c*f*m,this._y=c*f*d-u*h*m,this._z=c*h*m-u*f*d,this._w=c*h*d+u*f*m;break;case"ZXY":this._x=u*h*d-c*f*m,this._y=c*f*d+u*h*m,this._z=c*h*m+u*f*d,this._w=c*h*d-u*f*m;break;case"ZYX":this._x=u*h*d-c*f*m,this._y=c*f*d+u*h*m,this._z=c*h*m-u*f*d,this._w=c*h*d+u*f*m;break;case"YZX":this._x=u*h*d+c*f*m,this._y=c*f*d+u*h*m,this._z=c*h*m-u*f*d,this._w=c*h*d-u*f*m;break;case"XZY":this._x=u*h*d-c*f*m,this._y=c*f*d-u*h*m,this._z=c*h*m+u*f*d,this._w=c*h*d+u*f*m;break;default:Ot("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],i=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],d=e[10],u=n+o+d;if(u>0){let f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(a-i)*f}else if(n>o&&n>d){let f=2*Math.sqrt(1+n-o-d);this._w=(h-l)/f,this._x=.25*f,this._y=(i+a)/f,this._z=(r+c)/f}else if(o>d){let f=2*Math.sqrt(1+o-n-d);this._w=(r-c)/f,this._x=(i+a)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+d-n-o);this._w=(a-i)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs($t(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,i=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+a*o+i*c-r*l,this._y=i*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-i*o,this._w=a*h-n*o-i*l-r*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,i=t._y,r=t._z,a=t._w,o=this.dot(t);o<0&&(n=-n,i=-i,r=-r,a=-a,o=-o);let l=1-e;if(o<.9995){let c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+n*e,this._y=this._y*l+i*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+i*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Vc=class Vc{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Th.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Th.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,i=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*i-o*n),h=2*(o*e-r*i),d=2*(r*n-a*e);return this.x=e+l*c+a*d-o*h,this.y=n+l*h+o*c-r*d,this.z=i+l*d+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=$t(this.x,t.x,e.x),this.y=$t(this.y,t.y,e.y),this.z=$t(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=$t(this.x,t,e),this.y=$t(this.y,t,e),this.z=$t(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar($t(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,i=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=i*l-r*o,this.y=r*a-n*l,this.z=n*o-i*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Bl.copy(this).projectOnVector(t),this.sub(Bl)}reflect(t){return this.sub(Bl.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos($t(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Vc.prototype.isVector3=!0;var F=Vc,Bl=new F,Th=new Ne,Wc=class Wc{constructor(t,e,n,i,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,a,o,l,c)}set(t,e,n,i,r,a,o,l,c){let h=this.elements;return h[0]=t,h[1]=i,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],d=n[7],u=n[2],f=n[5],m=n[8],x=i[0],g=i[3],p=i[6],v=i[1],w=i[4],_=i[7],b=i[2],M=i[5],T=i[8];return r[0]=a*x+o*v+l*b,r[3]=a*g+o*w+l*M,r[6]=a*p+o*_+l*T,r[1]=c*x+h*v+d*b,r[4]=c*g+h*w+d*M,r[7]=c*p+h*_+d*T,r[2]=u*x+f*v+m*b,r[5]=u*g+f*w+m*M,r[8]=u*p+f*_+m*T,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-n*r*h+n*o*l+i*r*c-i*a*l}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],d=h*a-o*c,u=o*l-h*r,f=c*r-a*l,m=e*d+n*u+i*f;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/m;return t[0]=d*x,t[1]=(i*c-h*n)*x,t[2]=(o*n-i*a)*x,t[3]=u*x,t[4]=(h*e-i*l)*x,t[5]=(i*r-o*e)*x,t[6]=f*x,t[7]=(n*l-c*e)*x,t[8]=(a*e-n*r)*x,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-i*c,i*l,-i*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return Oi("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Ol.makeScale(t,e)),this}rotate(t){return Oi("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Ol.makeRotation(-t)),this}translate(t,e){return Oi("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Ol.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};Wc.prototype.isMatrix3=!0;var Gt=Wc,Ol=new Gt,Ah=new Gt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Rh=new Gt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Kd(){let s={enabled:!0,workingColorSpace:ar,spaces:{},convert:function(i,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===ae&&(i.r=si(i.r),i.g=si(i.g),i.b=si(i.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===ae&&(i.r=ms(i.r),i.g=ms(i.g),i.b=ms(i.b))),i},workingToColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},colorSpaceToWorking:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===oi?or:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,a){return i.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,r){return Oi("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(i,r)},toWorkingColorSpace:function(i,r){return Oi("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(i,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[ar]:{primaries:t,whitePoint:n,transfer:or,toXYZ:Ah,fromXYZ:Rh,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:$e},outputColorSpaceConfig:{drawingBufferColorSpace:$e}},[$e]:{primaries:t,whitePoint:n,transfer:ae,toXYZ:Ah,fromXYZ:Rh,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:$e}}}),s}var jt=Kd();function si(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function ms(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}var es,Ha=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{es===void 0&&(es=lr("canvas")),es.width=t.width,es.height=t.height;let i=es.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),n=es}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=lr("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let a=0;a<r.length;a++)r[a]=si(r[a]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(si(e[n]/255)*255):e[n]=si(e[n]);return{data:e,width:t.width,height:t.height}}else return Ot("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},jd=0,vs=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:jd++}),this.uuid=Xr(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?r.push(kl(i[a].image)):r.push(kl(i[a]))}else r=kl(i);n.url=r}return e||(t.images[this.uuid]=n),n}};function kl(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Ha.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(Ot("Texture: Unable to serialize Texture."),{})}var Qd=0,zl=new F,en=class s extends On{constructor(t=s.DEFAULT_IMAGE,e=s.DEFAULT_MAPPING,n=Un,i=Un,r=Ze,a=Wn,o=Mn,l=un,c=s.DEFAULT_ANISOTROPY,h=oi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Qd++}),this.uuid=Xr(),this.name="",this.source=new vs(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Ft(0,0),this.repeat=new Ft(1,1),this.center=new Ft(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Gt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(zl).x}get height(){return this.source.getSize(zl).y}get depth(){return this.source.getSize(zl).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){Ot(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){Ot(`Texture.setValues(): property '${e}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Rc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case xs:t.x=t.x-Math.floor(t.x);break;case Un:t.x=t.x<0?0:1;break;case ka:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case xs:t.y=t.y-Math.floor(t.y);break;case Un:t.y=t.y<0?0:1;break;case ka:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};en.DEFAULT_IMAGE=null;en.DEFAULT_MAPPING=Rc;en.DEFAULT_ANISOTROPY=1;var Xc=class Xc{constructor(t=0,e=0,n=0,i=1){this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*i+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r,l=t.elements,c=l[0],h=l[4],d=l[8],u=l[1],f=l[5],m=l[9],x=l[2],g=l[6],p=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-x)<.01&&Math.abs(m-g)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+x)<.1&&Math.abs(m+g)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let w=(c+1)/2,_=(f+1)/2,b=(p+1)/2,M=(h+u)/4,T=(d+x)/4,y=(m+g)/4;return w>_&&w>b?w<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(w),i=M/n,r=T/n):_>b?_<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(_),n=M/i,r=y/i):b<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(b),n=T/r,i=y/r),this.set(n,i,r,e),this}let v=Math.sqrt((g-m)*(g-m)+(d-x)*(d-x)+(u-h)*(u-h));return Math.abs(v)<.001&&(v=1),this.x=(g-m)/v,this.y=(d-x)/v,this.z=(u-h)/v,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=$t(this.x,t.x,e.x),this.y=$t(this.y,t.y,e.y),this.z=$t(this.z,t.z,e.z),this.w=$t(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=$t(this.x,t,e),this.y=$t(this.y,t,e),this.z=$t(this.z,t,e),this.w=$t(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar($t(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Xc.prototype.isVector4=!0;var Me=Xc,Ga=class extends On{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ze,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new Me(0,0,t,e),this.scissorTest=!1,this.viewport=new Me(0,0,t,e),this.textures=[];let i={width:t,height:e,depth:n.depth},r=new en(i),a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:Ze,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let i=Object.assign({},t.textures[e].image);this.textures[e].source=new vs(i)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},cn=class extends Ga{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},hr=class extends en{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Ge,this.minFilter=Ge,this.wrapR=Un,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Va=class extends en{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Ge,this.minFilter=Ge,this.wrapR=Un,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var go=class go{constructor(t,e,n,i,r,a,o,l,c,h,d,u,f,m,x,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,a,o,l,c,h,d,u,f,m,x,g)}set(t,e,n,i,r,a,o,l,c,h,d,u,f,m,x,g){let p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=i,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=h,p[10]=d,p[14]=u,p[3]=f,p[7]=m,p[11]=x,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new go().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,i=1/ns.setFromMatrixColumn(t,0).length(),r=1/ns.setFromMatrixColumn(t,1).length(),a=1/ns.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,i=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){let u=a*h,f=a*d,m=o*h,x=o*d;e[0]=l*h,e[4]=-l*d,e[8]=c,e[1]=f+m*c,e[5]=u-x*c,e[9]=-o*l,e[2]=x-u*c,e[6]=m+f*c,e[10]=a*l}else if(t.order==="YXZ"){let u=l*h,f=l*d,m=c*h,x=c*d;e[0]=u+x*o,e[4]=m*o-f,e[8]=a*c,e[1]=a*d,e[5]=a*h,e[9]=-o,e[2]=f*o-m,e[6]=x+u*o,e[10]=a*l}else if(t.order==="ZXY"){let u=l*h,f=l*d,m=c*h,x=c*d;e[0]=u-x*o,e[4]=-a*d,e[8]=m+f*o,e[1]=f+m*o,e[5]=a*h,e[9]=x-u*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){let u=a*h,f=a*d,m=o*h,x=o*d;e[0]=l*h,e[4]=m*c-f,e[8]=u*c+x,e[1]=l*d,e[5]=x*c+u,e[9]=f*c-m,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){let u=a*l,f=a*c,m=o*l,x=o*c;e[0]=l*h,e[4]=x-u*d,e[8]=m*d+f,e[1]=d,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=f*d+m,e[10]=u-x*d}else if(t.order==="XZY"){let u=a*l,f=a*c,m=o*l,x=o*c;e[0]=l*h,e[4]=-d,e[8]=c*h,e[1]=u*d+x,e[5]=a*h,e[9]=f*d-m,e[2]=m*d-f,e[6]=o*h,e[10]=x*d+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(tf,t,ef)}lookAt(t,e,n){let i=this.elements;return dn.subVectors(t,e),dn.lengthSq()===0&&(dn.z=1),dn.normalize(),pi.crossVectors(n,dn),pi.lengthSq()===0&&(Math.abs(n.z)===1?dn.x+=1e-4:dn.z+=1e-4,dn.normalize(),pi.crossVectors(n,dn)),pi.normalize(),la.crossVectors(dn,pi),i[0]=pi.x,i[4]=la.x,i[8]=dn.x,i[1]=pi.y,i[5]=la.y,i[9]=dn.y,i[2]=pi.z,i[6]=la.z,i[10]=dn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],d=n[5],u=n[9],f=n[13],m=n[2],x=n[6],g=n[10],p=n[14],v=n[3],w=n[7],_=n[11],b=n[15],M=i[0],T=i[4],y=i[8],S=i[12],C=i[1],P=i[5],I=i[9],L=i[13],A=i[2],N=i[6],G=i[10],z=i[14],H=i[3],U=i[7],V=i[11],X=i[15];return r[0]=a*M+o*C+l*A+c*H,r[4]=a*T+o*P+l*N+c*U,r[8]=a*y+o*I+l*G+c*V,r[12]=a*S+o*L+l*z+c*X,r[1]=h*M+d*C+u*A+f*H,r[5]=h*T+d*P+u*N+f*U,r[9]=h*y+d*I+u*G+f*V,r[13]=h*S+d*L+u*z+f*X,r[2]=m*M+x*C+g*A+p*H,r[6]=m*T+x*P+g*N+p*U,r[10]=m*y+x*I+g*G+p*V,r[14]=m*S+x*L+g*z+p*X,r[3]=v*M+w*C+_*A+b*H,r[7]=v*T+w*P+_*N+b*U,r[11]=v*y+w*I+_*G+b*V,r[15]=v*S+w*L+_*z+b*X,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],d=t[6],u=t[10],f=t[14],m=t[3],x=t[7],g=t[11],p=t[15],v=l*f-c*u,w=o*f-c*d,_=o*u-l*d,b=a*f-c*h,M=a*u-l*h,T=a*d-o*h;return e*(x*v-g*w+p*_)-n*(m*v-g*b+p*M)+i*(m*w-x*b+p*T)-r*(m*_-x*M+g*T)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],i=t[8],r=t[1],a=t[5],o=t[9],l=t[2],c=t[6],h=t[10];return e*(a*h-o*c)-n*(r*h-o*l)+i*(r*c-a*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],d=t[9],u=t[10],f=t[11],m=t[12],x=t[13],g=t[14],p=t[15],v=e*o-n*a,w=e*l-i*a,_=e*c-r*a,b=n*l-i*o,M=n*c-r*o,T=i*c-r*l,y=h*x-d*m,S=h*g-u*m,C=h*p-f*m,P=d*g-u*x,I=d*p-f*x,L=u*p-f*g,A=v*L-w*I+_*P+b*C-M*S+T*y;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let N=1/A;return t[0]=(o*L-l*I+c*P)*N,t[1]=(i*I-n*L-r*P)*N,t[2]=(x*T-g*M+p*b)*N,t[3]=(u*M-d*T-f*b)*N,t[4]=(l*C-a*L-c*S)*N,t[5]=(e*L-i*C+r*S)*N,t[6]=(g*_-m*T-p*w)*N,t[7]=(h*T-u*_+f*w)*N,t[8]=(a*I-o*C+c*y)*N,t[9]=(n*C-e*I-r*y)*N,t[10]=(m*M-x*_+p*v)*N,t[11]=(d*_-h*M-f*v)*N,t[12]=(o*S-a*P-l*y)*N,t[13]=(e*P-n*S+i*y)*N,t[14]=(x*w-m*b-g*v)*N,t[15]=(h*b-d*w+u*v)*N,this}scale(t){let e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),i=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,h*o+n,h*l-i*a,0,c*l-i*o,h*l+i*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,a){return this.set(1,n,r,0,t,1,a,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){let i=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,h=a+a,d=o+o,u=r*c,f=r*h,m=r*d,x=a*h,g=a*d,p=o*d,v=l*c,w=l*h,_=l*d,b=n.x,M=n.y,T=n.z;return i[0]=(1-(x+p))*b,i[1]=(f+_)*b,i[2]=(m-w)*b,i[3]=0,i[4]=(f-_)*M,i[5]=(1-(u+p))*M,i[6]=(g+v)*M,i[7]=0,i[8]=(m+w)*T,i[9]=(g-v)*T,i[10]=(1-(u+x))*T,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){let i=this.elements;t.x=i[12],t.y=i[13],t.z=i[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let a=ns.set(i[0],i[1],i[2]).length(),o=ns.set(i[4],i[5],i[6]).length(),l=ns.set(i[8],i[9],i[10]).length();r<0&&(a=-a),Sn.copy(this);let c=1/a,h=1/o,d=1/l;return Sn.elements[0]*=c,Sn.elements[1]*=c,Sn.elements[2]*=c,Sn.elements[4]*=h,Sn.elements[5]*=h,Sn.elements[6]*=h,Sn.elements[8]*=d,Sn.elements[9]*=d,Sn.elements[10]*=d,e.setFromRotationMatrix(Sn),n.x=a,n.y=o,n.z=l,this}makePerspective(t,e,n,i,r,a,o=An,l=!1){let c=this.elements,h=2*r/(e-t),d=2*r/(n-i),u=(e+t)/(e-t),f=(n+i)/(n-i),m,x;if(l)m=r/(a-r),x=a*r/(a-r);else if(o===An)m=-(a+r)/(a-r),x=-2*a*r/(a-r);else if(o===ys)m=-a/(a-r),x=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=d,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,i,r,a,o=An,l=!1){let c=this.elements,h=2/(e-t),d=2/(n-i),u=-(e+t)/(e-t),f=-(n+i)/(n-i),m,x;if(l)m=1/(a-r),x=a/(a-r);else if(o===An)m=-2/(a-r),x=-(a+r)/(a-r);else if(o===ys)m=-1/(a-r),x=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=d,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=m,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};go.prototype.isMatrix4=!0;var Qt=go,ns=new F,Sn=new Qt,tf=new F(0,0,0),ef=new F(1,1,1),pi=new F,la=new F,dn=new F,Ch=new Qt,Ph=new Ne,kn=class s{constructor(t=0,e=0,n=0,i=s.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let i=t.elements,r=i[0],a=i[4],o=i[8],l=i[1],c=i[5],h=i[9],d=i[2],u=i[6],f=i[10];switch(e){case"XYZ":this._y=Math.asin($t(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-$t(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin($t(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-$t(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin($t(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-$t(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:Ot("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Ch.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Ch,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Ph.setFromEuler(this),this.setFromQuaternion(Ph,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};kn.DEFAULT_ORDER="XYZ";var ur=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},nf=0,Ih=new F,is=new Ne,Qn=new Qt,ca=new F,Ks=new F,sf=new F,rf=new Ne,Lh=new F(1,0,0),Dh=new F(0,1,0),Fh=new F(0,0,1),Nh={type:"added"},af={type:"removed"},ss={type:"childadded",child:null},Hl={type:"childremoved",child:null},Te=class s extends On{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:nf++}),this.uuid=Xr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let t=new F,e=new kn,n=new Ne,i=new F(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Qt},normalMatrix:{value:new Gt}}),this.matrix=new Qt,this.matrixWorld=new Qt,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ur,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return is.setFromAxisAngle(t,e),this.quaternion.multiply(is),this}rotateOnWorldAxis(t,e){return is.setFromAxisAngle(t,e),this.quaternion.premultiply(is),this}rotateX(t){return this.rotateOnAxis(Lh,t)}rotateY(t){return this.rotateOnAxis(Dh,t)}rotateZ(t){return this.rotateOnAxis(Fh,t)}translateOnAxis(t,e){return Ih.copy(t).applyQuaternion(this.quaternion),this.position.add(Ih.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Lh,t)}translateY(t){return this.translateOnAxis(Dh,t)}translateZ(t){return this.translateOnAxis(Fh,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Qn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?ca.copy(t):ca.set(t,e,n);let i=this.parent;this.updateWorldMatrix(!0,!1),Ks.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Qn.lookAt(Ks,ca,this.up):Qn.lookAt(ca,Ks,this.up),this.quaternion.setFromRotationMatrix(Qn),i&&(Qn.extractRotation(i.matrixWorld),is.setFromRotationMatrix(Qn),this.quaternion.premultiply(is.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(kt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Nh),ss.child=t,this.dispatchEvent(ss),ss.child=null):kt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(af),Hl.child=t,this.dispatchEvent(Hl),Hl.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Qn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Qn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Qn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Nh),ss.child=t,this.dispatchEvent(ss),ss.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ks,t,sf),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ks,rf,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,i=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*i,r[13]+=n-r[1]*e-r[5]*n-r[9]*i,r[14]+=i-r[2]*e-r[6]*n-r[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,i.name=this.name,i.castShadow=this.castShadow,i.receiveShadow=this.receiveShadow,i.visible=this.visible,i.frustumCulled=this.frustumCulled,i.renderOrder=this.renderOrder,i.static=this.static,i.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null&&(i.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(i.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(o=>({...o})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(t),i.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let d=l[c];r(t.shapes,d)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));i.material=o}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];i.animations.push(r(t.animations,l))}}if(e){let o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),d=a(t.shapes),u=a(t.skeletons),f=a(t.animations),m=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),f.length>0&&(n.animations=f),m.length>0&&(n.nodes=m)}return n.object=i,n;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let i=t.children[n];this.add(i.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Te.DEFAULT_UP=new F(0,1,0);Te.DEFAULT_MATRIX_AUTO_UPDATE=!0;Te.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var He=class extends Te{constructor(){super(),this.isGroup=!0,this.type="Group"}},of={type:"move"},Ms=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new He,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new He,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new He,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(let x of t.hand.values()){let g=e.getJointPose(x,n),p=this._getHandJoint(c,x);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}let h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,m=.005;c.inputState.pinching&&u>f+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=f-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(of)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new He;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},Bu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},mi={h:0,s:0,l:0},ha={h:0,s:0,l:0};function Gl(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}var ht=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=$e){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,jt.colorSpaceToWorking(this,e),this}setRGB(t,e,n,i=jt.workingColorSpace){return this.r=t,this.g=e,this.b=n,jt.colorSpaceToWorking(this,i),this}setHSL(t,e,n,i=jt.workingColorSpace){if(t=Jd(t,1),e=$t(e,0,1),n=$t(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=Gl(a,r,t+1/3),this.g=Gl(a,r,t),this.b=Gl(a,r,t-1/3)}return jt.colorSpaceToWorking(this,i),this}setStyle(t,e=$e){function n(r){r!==void 0&&parseFloat(r)<1&&Ot("Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Ot("Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=i[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);Ot("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=$e){let n=Bu[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Ot("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=si(t.r),this.g=si(t.g),this.b=si(t.b),this}copyLinearToSRGB(t){return this.r=ms(t.r),this.g=ms(t.g),this.b=ms(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=$e){return jt.workingToColorSpace(je.copy(this),t),Math.round($t(je.r*255,0,255))*65536+Math.round($t(je.g*255,0,255))*256+Math.round($t(je.b*255,0,255))}getHexString(t=$e){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=jt.workingColorSpace){jt.workingToColorSpace(je.copy(this),e);let n=je.r,i=je.g,r=je.b,a=Math.max(n,i,r),o=Math.min(n,i,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let d=a-o;switch(c=h<=.5?d/(a+o):d/(2-a-o),a){case n:l=(i-r)/d+(i<r?6:0);break;case i:l=(r-n)/d+2;break;case r:l=(n-i)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=jt.workingColorSpace){return jt.workingToColorSpace(je.copy(this),e),t.r=je.r,t.g=je.g,t.b=je.b,t}getStyle(t=$e){jt.workingToColorSpace(je.copy(this),t);let e=je.r,n=je.g,i=je.b;return t!==$e?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(mi),this.setHSL(mi.h+t,mi.s+e,mi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(mi),t.getHSL(ha);let n=Ul(mi.h,ha.h,e),i=Ul(mi.s,ha.s,e),r=Ul(mi.l,ha.l,e);return this.setHSL(n,i,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,i=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*i,this.g=r[1]*e+r[4]*n+r[7]*i,this.b=r[2]*e+r[5]*n+r[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},je=new ht;ht.NAMES=Bu;var dr=class s{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new ht(t),this.density=e}clone(){return new s(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}},fr=class s{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new ht(t),this.near=e,this.far=n}clone(){return new s(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},ri=class extends Te{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new kn,this.environmentIntensity=1,this.environmentRotation=new kn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},wn=new F,ti=new F,Vl=new F,ei=new F,rs=new F,as=new F,Uh=new F,Wl=new F,Xl=new F,ql=new F,Yl=new Me,$l=new Me,Zl=new Me,_i=class s{constructor(t=new F,e=new F,n=new F){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),wn.subVectors(t,e),i.cross(wn);let r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){wn.subVectors(i,e),ti.subVectors(n,e),Vl.subVectors(t,e);let a=wn.dot(wn),o=wn.dot(ti),l=wn.dot(Vl),c=ti.dot(ti),h=ti.dot(Vl),d=a*c-o*o;if(d===0)return r.set(0,0,0),null;let u=1/d,f=(c*l-o*h)*u,m=(a*h-o*l)*u;return r.set(1-f-m,m,f)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,ei)===null?!1:ei.x>=0&&ei.y>=0&&ei.x+ei.y<=1}static getInterpolation(t,e,n,i,r,a,o,l){return this.getBarycoord(t,e,n,i,ei)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,ei.x),l.addScaledVector(a,ei.y),l.addScaledVector(o,ei.z),l)}static getInterpolatedAttribute(t,e,n,i,r,a){return Yl.setScalar(0),$l.setScalar(0),Zl.setScalar(0),Yl.fromBufferAttribute(t,e),$l.fromBufferAttribute(t,n),Zl.fromBufferAttribute(t,i),a.setScalar(0),a.addScaledVector(Yl,r.x),a.addScaledVector($l,r.y),a.addScaledVector(Zl,r.z),a}static isFrontFacing(t,e,n,i){return wn.subVectors(n,e),ti.subVectors(t,e),wn.cross(ti).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return wn.subVectors(this.c,this.b),ti.subVectors(this.a,this.b),wn.cross(ti).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return s.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return s.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,r){return s.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return s.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return s.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,i=this.b,r=this.c,a,o;rs.subVectors(i,n),as.subVectors(r,n),Wl.subVectors(t,n);let l=rs.dot(Wl),c=as.dot(Wl);if(l<=0&&c<=0)return e.copy(n);Xl.subVectors(t,i);let h=rs.dot(Xl),d=as.dot(Xl);if(h>=0&&d<=h)return e.copy(i);let u=l*d-h*c;if(u<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(n).addScaledVector(rs,a);ql.subVectors(t,r);let f=rs.dot(ql),m=as.dot(ql);if(m>=0&&f<=m)return e.copy(r);let x=f*c-l*m;if(x<=0&&c>=0&&m<=0)return o=c/(c-m),e.copy(n).addScaledVector(as,o);let g=h*m-f*d;if(g<=0&&d-h>=0&&f-m>=0)return Uh.subVectors(r,i),o=(d-h)/(d-h+(f-m)),e.copy(i).addScaledVector(Uh,o);let p=1/(g+x+u);return a=x*p,o=u*p,e.copy(n).addScaledVector(rs,a).addScaledVector(as,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},zn=class{constructor(t=new F(1/0,1/0,1/0),e=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(En.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(En.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=En.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,En):En.fromBufferAttribute(r,a),En.applyMatrix4(t.matrixWorld),this.expandByPoint(En);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ua.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ua.copy(n.boundingBox)),ua.applyMatrix4(t.matrixWorld),this.union(ua)}let i=t.children;for(let r=0,a=i.length;r<a;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,En),En.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(js),da.subVectors(this.max,js),os.subVectors(t.a,js),ls.subVectors(t.b,js),cs.subVectors(t.c,js),gi.subVectors(ls,os),xi.subVectors(cs,ls),Fi.subVectors(os,cs);let e=[0,-gi.z,gi.y,0,-xi.z,xi.y,0,-Fi.z,Fi.y,gi.z,0,-gi.x,xi.z,0,-xi.x,Fi.z,0,-Fi.x,-gi.y,gi.x,0,-xi.y,xi.x,0,-Fi.y,Fi.x,0];return!Jl(e,os,ls,cs,da)||(e=[1,0,0,0,1,0,0,0,1],!Jl(e,os,ls,cs,da))?!1:(fa.crossVectors(gi,xi),e=[fa.x,fa.y,fa.z],Jl(e,os,ls,cs,da))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,En).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(En).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ni[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ni[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ni[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ni[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ni[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ni[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ni[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ni[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ni),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},ni=[new F,new F,new F,new F,new F,new F,new F,new F],En=new F,ua=new zn,os=new F,ls=new F,cs=new F,gi=new F,xi=new F,Fi=new F,js=new F,da=new F,fa=new F,Ni=new F;function Jl(s,t,e,n,i){for(let r=0,a=s.length-3;r<=a;r+=3){Ni.fromArray(s,r);let o=i.x*Math.abs(Ni.x)+i.y*Math.abs(Ni.y)+i.z*Math.abs(Ni.z),l=t.dot(Ni),c=e.dot(Ni),h=n.dot(Ni);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var Ce=new F,pa=new Ft,lf=0,Jt=class extends On{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:lf++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Lu,this.updateRanges=[],this.gpuType=vn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)pa.fromBufferAttribute(this,e),pa.applyMatrix3(t),this.setXY(e,pa.x,pa.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ce.fromBufferAttribute(this,e),Ce.applyMatrix3(t),this.setXYZ(e,Ce.x,Ce.y,Ce.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ce.fromBufferAttribute(this,e),Ce.applyMatrix4(t),this.setXYZ(e,Ce.x,Ce.y,Ce.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ce.fromBufferAttribute(this,e),Ce.applyNormalMatrix(t),this.setXYZ(e,Ce.x,Ce.y,Ce.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ce.fromBufferAttribute(this,e),Ce.transformDirection(t),this.setXYZ(e,Ce.x,Ce.y,Ce.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Js(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ln(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Js(e,this.array)),e}setX(t,e){return this.normalized&&(e=ln(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Js(e,this.array)),e}setY(t,e){return this.normalized&&(e=ln(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Js(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ln(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Js(e,this.array)),e}setW(t,e){return this.normalized&&(e=ln(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=ln(e,this.array),n=ln(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=ln(e,this.array),n=ln(n,this.array),i=ln(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=ln(e,this.array),n=ln(n,this.array),i=ln(i,this.array),r=ln(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}};var pr=class extends Jt{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var mr=class extends Jt{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var Kt=class extends Jt{constructor(t,e,n){super(new Float32Array(t),e,n)}},cf=new zn,Qs=new F,Kl=new F,ai=class{constructor(t=new F,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):cf.setFromPoints(t).getCenter(n);let i=0;for(let r=0,a=t.length;r<a;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Qs.subVectors(t,this.center);let e=Qs.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(Qs,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Kl.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Qs.copy(t.center).add(Kl)),this.expandByPoint(Qs.copy(t.center).sub(Kl))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},hf=0,yn=new Qt,jl=new Te,hs=new F,fn=new zn,tr=new zn,ze=new F,oe=class s extends On{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:hf++}),this.uuid=Xr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new($d(t)?mr:pr)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Gt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return yn.makeRotationFromQuaternion(t),this.applyMatrix4(yn),this}rotateX(t){return yn.makeRotationX(t),this.applyMatrix4(yn),this}rotateY(t){return yn.makeRotationY(t),this.applyMatrix4(yn),this}rotateZ(t){return yn.makeRotationZ(t),this.applyMatrix4(yn),this}translate(t,e,n){return yn.makeTranslation(t,e,n),this.applyMatrix4(yn),this}scale(t,e,n){return yn.makeScale(t,e,n),this.applyMatrix4(yn),this}lookAt(t){return jl.lookAt(t),jl.updateMatrix(),this.applyMatrix4(jl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(hs).negate(),this.translate(hs.x,hs.y,hs.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let i=0,r=t.length;i<r;i++){let a=t[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Kt(n,3))}else{let n=Math.min(t.length,e.count);for(let i=0;i<n;i++){let r=t[i];e.setXYZ(i,r.x,r.y,r.z||0)}t.length>e.count&&Ot("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new zn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){kt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){let r=e[n];fn.setFromBufferAttribute(r),this.morphTargetsRelative?(ze.addVectors(this.boundingBox.min,fn.min),this.boundingBox.expandByPoint(ze),ze.addVectors(this.boundingBox.max,fn.max),this.boundingBox.expandByPoint(ze)):(this.boundingBox.expandByPoint(fn.min),this.boundingBox.expandByPoint(fn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&kt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ai);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){kt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new F,1/0);return}if(t){let n=this.boundingSphere.center;if(fn.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];tr.setFromBufferAttribute(o),this.morphTargetsRelative?(ze.addVectors(fn.min,tr.min),fn.expandByPoint(ze),ze.addVectors(fn.max,tr.max),fn.expandByPoint(ze)):(fn.expandByPoint(tr.min),fn.expandByPoint(tr.max))}fn.getCenter(n);let i=0;for(let r=0,a=t.count;r<a;r++)ze.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(ze));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)ze.fromBufferAttribute(o,c),l&&(hs.fromBufferAttribute(t,c),ze.add(hs)),i=Math.max(i,n.distanceToSquared(ze))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&kt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){kt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,i=e.normal,r=e.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new Jt(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],l=[];for(let y=0;y<n.count;y++)o[y]=new F,l[y]=new F;let c=new F,h=new F,d=new F,u=new Ft,f=new Ft,m=new Ft,x=new F,g=new F;function p(y,S,C){c.fromBufferAttribute(n,y),h.fromBufferAttribute(n,S),d.fromBufferAttribute(n,C),u.fromBufferAttribute(r,y),f.fromBufferAttribute(r,S),m.fromBufferAttribute(r,C),h.sub(c),d.sub(c),f.sub(u),m.sub(u);let P=1/(f.x*m.y-m.x*f.y);isFinite(P)&&(x.copy(h).multiplyScalar(m.y).addScaledVector(d,-f.y).multiplyScalar(P),g.copy(d).multiplyScalar(f.x).addScaledVector(h,-m.x).multiplyScalar(P),o[y].add(x),o[S].add(x),o[C].add(x),l[y].add(g),l[S].add(g),l[C].add(g))}let v=this.groups;v.length===0&&(v=[{start:0,count:t.count}]);for(let y=0,S=v.length;y<S;++y){let C=v[y],P=C.start,I=C.count;for(let L=P,A=P+I;L<A;L+=3)p(t.getX(L+0),t.getX(L+1),t.getX(L+2))}let w=new F,_=new F,b=new F,M=new F;function T(y){b.fromBufferAttribute(i,y),M.copy(b);let S=o[y];w.copy(S),w.sub(b.multiplyScalar(b.dot(S))).normalize(),_.crossVectors(M,S);let P=_.dot(l[y])<0?-1:1;a.setXYZW(y,w.x,w.y,w.z,P)}for(let y=0,S=v.length;y<S;++y){let C=v[y],P=C.start,I=C.count;for(let L=P,A=P+I;L<A;L+=3)T(t.getX(L+0)),T(t.getX(L+1)),T(t.getX(L+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new Jt(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,f=n.count;u<f;u++)n.setXYZ(u,0,0,0);let i=new F,r=new F,a=new F,o=new F,l=new F,c=new F,h=new F,d=new F;if(t)for(let u=0,f=t.count;u<f;u+=3){let m=t.getX(u+0),x=t.getX(u+1),g=t.getX(u+2);i.fromBufferAttribute(e,m),r.fromBufferAttribute(e,x),a.fromBufferAttribute(e,g),h.subVectors(a,r),d.subVectors(i,r),h.cross(d),o.fromBufferAttribute(n,m),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,g),o.add(h),l.add(h),c.add(h),n.setXYZ(m,o.x,o.y,o.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let u=0,f=e.count;u<f;u+=3)i.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),a.fromBufferAttribute(e,u+2),h.subVectors(a,r),d.subVectors(i,r),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)ze.fromBufferAttribute(t,e),ze.normalize(),t.setXYZ(e,ze.x,ze.y,ze.z)}toNonIndexed(){function t(o,l){let c=o.array,h=o.itemSize,d=o.normalized,u=new c.constructor(l.length*h),f=0,m=0;for(let x=0,g=l.length;x<g;x++){o.isInterleavedBufferAttribute?f=l[x]*o.data.stride+o.offset:f=l[x]*h;for(let p=0;p<h;p++)u[m++]=c[f++]}return new Jt(u,h,d)}if(this.index===null)return Ot("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new s,n=this.index.array,i=this.attributes;for(let o in i){let l=i[o],c=t(l,n);e.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,d=c.length;h<d;h++){let u=c[h],f=t(u,n);l.push(f)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let i={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){let f=c[d];h.push(f.toJSON(t.data))}h.length>0&&(i[l]=h,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let i=t.attributes;for(let c in i){let h=i[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],d=r[c];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let c=0,h=a.length;c<h;c++){let d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var Ql=new F,uf=new F,df=new Gt,Tn=class{constructor(t=new F(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let i=Ql.subVectors(n,e).cross(uf.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let i=t.delta(Ql),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let a=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(i,a)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||df.getNormalMatrix(t),i=this.coplanarPoint(Ql).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},ff=0,Hn=class extends On{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ff++}),this.uuid=Xr(),this.name="",this.type="Material",this.blending=Ei,this.side=Gn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=vc,this.blendDst=Mc,this.blendEquation=Xi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ht(0,0,0),this.blendAlpha=0,this.depthFunc=gs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Eu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ia,this.stencilZFail=Ia,this.stencilZPass=Ia,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){Ot(`Material: parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){Ot(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector2&&n&&n.isVector2||i&&i.isEuler&&n&&n.isEuler||i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(e){let r=i(t.textures),a=i(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new ht().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new Tn().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Ft().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Ft().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var ii=new F,tc=new F,ma=new F,ga=new F,gr=class{constructor(t=new F,e=new F(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ii)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=ii.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(ii.copy(this.origin).addScaledVector(this.direction,e),ii.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){tc.copy(t).add(e).multiplyScalar(.5),ma.copy(e).sub(t).normalize(),ga.copy(this.origin).sub(tc);let r=t.distanceTo(e)*.5,a=-this.direction.dot(ma),o=ga.dot(this.direction),l=-ga.dot(ma),c=ga.lengthSq(),h=Math.abs(1-a*a),d,u,f,m;if(h>0)if(d=a*l-o,u=a*o-l,m=r*h,d>=0)if(u>=-m)if(u<=m){let x=1/h;d*=x,u*=x,f=d*(d+a*u+2*o)+u*(a*d+u+2*l)+c}else u=r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;else u=-r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;else u<=-m?(d=Math.max(0,-(-a*r+o)),u=d>0?-r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c):u<=m?(d=0,u=Math.min(Math.max(-r,-l),r),f=u*(u+2*l)+c):(d=Math.max(0,-(a*r+o)),u=d>0?r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c);else u=a>0?-r:r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),i&&i.copy(tc).addScaledVector(ma,u),f}intersectSphere(t,e){if(t.radius<0)return null;ii.subVectors(t.center,this.origin);let n=ii.dot(this.direction),i=ii.dot(ii)-n*n,r=t.radius*t.radius;if(i>r)return null;let a=Math.sqrt(r-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(n=(t.min.x-u.x)*c,i=(t.max.x-u.x)*c):(n=(t.max.x-u.x)*c,i=(t.min.x-u.x)*c),h>=0?(r=(t.min.y-u.y)*h,a=(t.max.y-u.y)*h):(r=(t.max.y-u.y)*h,a=(t.min.y-u.y)*h),n>a||r>i||((r>n||isNaN(n))&&(n=r),(a<i||isNaN(i))&&(i=a),d>=0?(o=(t.min.z-u.z)*d,l=(t.max.z-u.z)*d):(o=(t.max.z-u.z)*d,l=(t.min.z-u.z)*d),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,ii)!==null}intersectTriangle(t,e,n,i,r){let a=this.origin,o=this.direction,l=o.x,c=o.y,h=o.z,d=t.x-a.x,u=t.y-a.y,f=t.z-a.z,m=e.x-a.x,x=e.y-a.y,g=e.z-a.z,p=n.x-a.x,v=n.y-a.y,w=n.z-a.z,_=Math.abs(l),b=Math.abs(c),M=Math.abs(h),T,y,S,C,P,I,L,A,N,G,z,H;if(_>=b&&_>=M?(S=l,I=d,N=m,H=p,l>=0?(T=c,y=h,C=u,P=f,L=x,A=g,G=v,z=w):(T=h,y=c,C=f,P=u,L=g,A=x,G=w,z=v)):b>=M?(S=c,I=u,N=x,H=v,c>=0?(T=h,y=l,C=f,P=d,L=g,A=m,G=w,z=p):(T=l,y=h,C=d,P=f,L=m,A=g,G=p,z=w)):(S=h,I=f,N=g,H=w,h>=0?(T=l,y=c,C=d,P=u,L=m,A=x,G=p,z=v):(T=c,y=l,C=u,P=d,L=x,A=m,G=v,z=p)),S===0)return null;let U=T/S,V=y/S,X=1/S,rt=C-U*I,st=P-V*I,St=L-U*N,bt=A-V*N,At=G-U*H,q=z-V*H,j=At*bt-q*St,lt=rt*q-st*At,_t=St*st-bt*rt;if(i){if(j<0||lt<0||_t<0)return null}else if((j<0||lt<0||_t<0)&&(j>0||lt>0||_t>0))return null;let mt=j+lt+_t;if(mt===0)return null;let zt=X*(j*I+lt*N+_t*H);return(mt>0?zt<0:zt>0)?null:this.at(zt/mt,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},me=class extends Hn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ht(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new kn,this.combine=xo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},Bh=new Qt,Ui=new gr,xa=new ai,Oh=new F,ya=new F,_a=new F,va=new F,ec=new F,Ma=new F,kh=new F,ba=new F,Ct=class extends Te{constructor(t=new oe,e=new me){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(i,t);let o=this.morphTargetInfluences;if(r&&o){Ma.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],d=r[l];h!==0&&(ec.fromBufferAttribute(d,t),a?Ma.addScaledVector(ec,h):Ma.addScaledVector(ec.sub(e),h))}e.add(Ma)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),xa.copy(n.boundingSphere),xa.applyMatrix4(r),Ui.copy(t.ray).recast(t.near),!(xa.containsPoint(Ui.origin)===!1&&(Ui.intersectSphere(xa,Oh)===null||Ui.origin.distanceToSquared(Oh)>(t.far-t.near)**2))&&(Bh.copy(r).invert(),Ui.copy(t.ray).applyMatrix4(Bh),!(n.boundingBox!==null&&Ui.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Ui)))}_computeIntersections(t,e,n){let i,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let m=0,x=u.length;m<x;m++){let g=u[m],p=a[g.materialIndex],v=Math.max(g.start,f.start),w=Math.min(o.count,Math.min(g.start+g.count,f.start+f.count));for(let _=v,b=w;_<b;_+=3){let M=o.getX(_),T=o.getX(_+1),y=o.getX(_+2);i=Sa(this,p,t,n,c,h,d,M,T,y),i&&(i.faceIndex=Math.floor(_/3),i.face.materialIndex=g.materialIndex,e.push(i))}}else{let m=Math.max(0,f.start),x=Math.min(o.count,f.start+f.count);for(let g=m,p=x;g<p;g+=3){let v=o.getX(g),w=o.getX(g+1),_=o.getX(g+2);i=Sa(this,a,t,n,c,h,d,v,w,_),i&&(i.faceIndex=Math.floor(g/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let m=0,x=u.length;m<x;m++){let g=u[m],p=a[g.materialIndex],v=Math.max(g.start,f.start),w=Math.min(l.count,Math.min(g.start+g.count,f.start+f.count));for(let _=v,b=w;_<b;_+=3){let M=_,T=_+1,y=_+2;i=Sa(this,p,t,n,c,h,d,M,T,y),i&&(i.faceIndex=Math.floor(_/3),i.face.materialIndex=g.materialIndex,e.push(i))}}else{let m=Math.max(0,f.start),x=Math.min(l.count,f.start+f.count);for(let g=m,p=x;g<p;g+=3){let v=g,w=g+1,_=g+2;i=Sa(this,a,t,n,c,h,d,v,w,_),i&&(i.faceIndex=Math.floor(g/3),e.push(i))}}}};function pf(s,t,e,n,i,r,a,o){let l;if(t.side===Ue?l=n.intersectTriangle(a,r,i,!0,o):l=n.intersectTriangle(i,r,a,t.side===Gn,o),l===null)return null;ba.copy(o),ba.applyMatrix4(s.matrixWorld);let c=e.ray.origin.distanceTo(ba);return c<e.near||c>e.far?null:{distance:c,point:ba.clone(),object:s}}function Sa(s,t,e,n,i,r,a,o,l,c){s.getVertexPosition(o,ya),s.getVertexPosition(l,_a),s.getVertexPosition(c,va);let h=pf(s,t,e,n,ya,_a,va,kh);if(h){let d=new F;_i.getBarycoord(kh,ya,_a,va,d),i&&(h.uv=_i.getInterpolatedAttribute(i,o,l,c,d,new Ft)),r&&(h.uv1=_i.getInterpolatedAttribute(r,o,l,c,d,new Ft)),a&&(h.normal=_i.getInterpolatedAttribute(a,o,l,c,d,new F),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a:o,b:l,c,normal:new F,materialIndex:0};_i.getNormal(ya,_a,va,u.normal),h.face=u,h.barycoord=d}return h}var xr=class extends en{constructor(t=null,e=1,n=1,i,r,a,o,l,c=Ge,h=Ge,d,u){super(null,a,o,l,c,h,i,r,d,u),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var bs=class extends Jt{constructor(t,e,n,i=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},us=new Qt,zh=new Qt,wa=[],Hh=new zn,mf=new Qt,er=new Ct,nr=new ai,nn=class extends Ct{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new bs(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,mf)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new zn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,us),Hh.copy(t.boundingBox).applyMatrix4(us),this.boundingBox.union(Hh)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new ai),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,us),nr.copy(t.boundingSphere).applyMatrix4(us),this.boundingSphere.union(nr)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,a=t*r+1;for(let o=0;o<n.length;o++)n[o]=i[a+o]}raycast(t,e){let n=this.matrixWorld,i=this.count;if(er.geometry=this.geometry,er.material=this.material,er.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),nr.copy(this.boundingSphere),nr.applyMatrix4(n),t.ray.intersectsSphere(nr)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,us),zh.multiplyMatrices(n,us),er.matrixWorld=zh,er.raycast(t,wa);for(let a=0,o=wa.length;a<o;a++){let l=wa[a];l.instanceId=r,l.object=this,e.push(l)}wa.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new bs(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let n=e.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new xr(new Float32Array(i*this.count),i,this.count,wo,vn));let r=this.morphTexture.source.data.data,a=0;for(let c=0;c<n.length;c++)a+=n[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=i*t;return r[l]=o,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Bi=new ai,gf=new Ft(.5,.5),Ea=new F,Ss=class{constructor(t=new Tn,e=new Tn,n=new Tn,i=new Tn,r=new Tn,a=new Tn){this.planes=[t,e,n,i,r,a]}set(t,e,n,i,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(i),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=An,n=!1){let i=this.planes,r=t.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],d=r[5],u=r[6],f=r[7],m=r[8],x=r[9],g=r[10],p=r[11],v=r[12],w=r[13],_=r[14],b=r[15];if(i[0].setComponents(c-a,f-h,p-m,b-v).normalize(),i[1].setComponents(c+a,f+h,p+m,b+v).normalize(),i[2].setComponents(c+o,f+d,p+x,b+w).normalize(),i[3].setComponents(c-o,f-d,p-x,b-w).normalize(),n)i[4].setComponents(l,u,g,_).normalize(),i[5].setComponents(c-l,f-u,p-g,b-_).normalize();else if(i[4].setComponents(c-l,f-u,p-g,b-_).normalize(),e===An)i[5].setComponents(c+l,f+u,p+g,b+_).normalize();else if(e===ys)i[5].setComponents(l,u,g,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Bi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Bi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Bi)}intersectsSprite(t){Bi.center.set(0,0,0);let e=gf.distanceTo(t.center);return Bi.radius=.7071067811865476+e,Bi.applyMatrix4(t.matrixWorld),this.intersectsSphere(Bi)}intersectsSphere(t){let e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let i=e[n];if(Ea.x=i.normal.x>0?t.max.x:t.min.x,Ea.y=i.normal.y>0?t.max.y:t.min.y,Ea.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(Ea)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Wa=class extends Hn{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ht(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Gh=new Qt,uc=new gr,Ta=new ai,Aa=new F,yr=class extends Te{constructor(t=new oe,e=new Wa){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,i=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ta.copy(n.boundingSphere),Ta.applyMatrix4(i),Ta.radius+=r,t.ray.intersectsSphere(Ta)===!1)return;Gh.copy(i).invert(),uc.copy(t.ray).applyMatrix4(Gh);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,d=n.attributes.position;if(c!==null){let u=Math.max(0,a.start),f=Math.min(c.count,a.start+a.count);for(let m=u,x=f;m<x;m++){let g=c.getX(m);Aa.fromBufferAttribute(d,g),Vh(Aa,g,l,i,t,e,this)}}else{let u=Math.max(0,a.start),f=Math.min(d.count,a.start+a.count);for(let m=u,x=f;m<x;m++)Aa.fromBufferAttribute(d,m),Vh(Aa,m,l,i,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Vh(s,t,e,n,i,r,a){let o=uc.distanceSqToPoint(s);if(o<e){let l=new F;uc.closestPointToPoint(s,l),l.applyMatrix4(n);let c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}var _r=class extends en{constructor(t=[],e=Ti,n,i,r,a,o,l,c,h){super(t,e,n,i,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},ki=class extends en{constructor(t,e,n,i,r,a,o,l,c){super(t,e,n,i,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var vi=class extends en{constructor(t,e,n=Cn,i,r,a,o=Ge,l=Ge,c,h=Bn,d=1){if(h!==Bn&&h!==Ai)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:t,height:e,depth:d};super(u,i,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new vs(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},Xa=class extends vi{constructor(t,e=Cn,n=Ti,i,r,a=Ge,o=Ge,l,c=Bn){let h={width:t,height:t,depth:1},d=[h,h,h,h,h,h];super(t,t,e,n,i,r,a,o,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},vr=class extends en{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},ye=class s extends oe{constructor(t=1,e=1,n=1,i=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};let o=this;i=Math.floor(i),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],d=[],u=0,f=0;m("z","y","x",-1,-1,n,e,t,a,r,0),m("z","y","x",1,-1,n,e,-t,a,r,1),m("x","z","y",1,1,t,n,e,i,a,2),m("x","z","y",1,-1,t,n,-e,i,a,3),m("x","y","z",1,-1,t,e,n,i,r,4),m("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new Kt(c,3)),this.setAttribute("normal",new Kt(h,3)),this.setAttribute("uv",new Kt(d,2));function m(x,g,p,v,w,_,b,M,T,y,S){let C=_/T,P=b/y,I=_/2,L=b/2,A=M/2,N=T+1,G=y+1,z=0,H=0,U=new F;for(let V=0;V<G;V++){let X=V*P-L;for(let rt=0;rt<N;rt++){let st=rt*C-I;U[x]=st*v,U[g]=X*w,U[p]=A,c.push(U.x,U.y,U.z),U[x]=0,U[g]=0,U[p]=M>0?1:-1,h.push(U.x,U.y,U.z),d.push(rt/T),d.push(1-V/y),z+=1}}for(let V=0;V<y;V++)for(let X=0;X<T;X++){let rt=u+X+N*V,st=u+X+N*(V+1),St=u+(X+1)+N*(V+1),bt=u+(X+1)+N*V;l.push(rt,st,bt),l.push(st,St,bt),H+=6}o.addGroup(f,H,S),f+=H,u+=z}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var zi=class s extends oe{constructor(t=1,e=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:i},e=Math.max(3,e);let r=[],a=[],o=[],l=[],c=new F,h=new Ft;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let d=0,u=3;d<=e;d++,u+=3){let f=n+d/e*i;c.x=t*Math.cos(f),c.y=t*Math.sin(f),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[u]/t+1)/2,h.y=(a[u+1]/t+1)/2,l.push(h.x,h.y)}for(let d=1;d<=e;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new Kt(a,3)),this.setAttribute("normal",new Kt(o,3)),this.setAttribute("uv",new Kt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.segments,t.thetaStart,t.thetaLength)}},hn=class s extends oe{constructor(t=1,e=1,n=1,i=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;i=Math.floor(i),r=Math.floor(r);let h=[],d=[],u=[],f=[],m=0,x=[],g=n/2,p=0;v(),a===!1&&(t>0&&w(!0),e>0&&w(!1)),this.setIndex(h),this.setAttribute("position",new Kt(d,3)),this.setAttribute("normal",new Kt(u,3)),this.setAttribute("uv",new Kt(f,2));function v(){let _=new F,b=new F,M=0,T=(e-t)/n;for(let y=0;y<=r;y++){let S=[],C=y/r,P=C*(e-t)+t;for(let I=0;I<=i;I++){let L=I/i,A=L*l+o,N=Math.sin(A),G=Math.cos(A);b.x=P*N,b.y=-C*n+g,b.z=P*G,d.push(b.x,b.y,b.z),_.set(N,T,G).normalize(),u.push(_.x,_.y,_.z),f.push(L,1-C),S.push(m++)}x.push(S)}for(let y=0;y<i;y++)for(let S=0;S<r;S++){let C=x[S][y],P=x[S+1][y],I=x[S+1][y+1],L=x[S][y+1];(t>0||S!==0)&&(h.push(C,P,L),M+=3),(e>0||S!==r-1)&&(h.push(P,I,L),M+=3)}c.addGroup(p,M,0),p+=M}function w(_){let b=m,M=new Ft,T=new F,y=0,S=_===!0?t:e,C=_===!0?1:-1;for(let I=1;I<=i;I++)d.push(0,g*C,0),u.push(0,C,0),f.push(.5,.5),m++;let P=m;for(let I=0;I<=i;I++){let A=I/i*l+o,N=Math.cos(A),G=Math.sin(A);T.x=S*G,T.y=g*C,T.z=S*N,d.push(T.x,T.y,T.z),u.push(0,C,0),M.x=N*.5+.5,M.y=G*.5*C+.5,f.push(M.x,M.y),m++}for(let I=0;I<i;I++){let L=b+I,A=P+I;_===!0?h.push(A,A+1,L):h.push(A+1,A,L),y+=3}c.addGroup(p,y,_===!0?1:2),p+=y}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Mr=class s extends hn{constructor(t=1,e=1,n=32,i=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,n,i,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new s(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},qa=class s extends oe{constructor(t=[],e=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:i};let r=[],a=[];o(i),c(n),h(),this.setAttribute("position",new Kt(r,3)),this.setAttribute("normal",new Kt(r.slice(),3)),this.setAttribute("uv",new Kt(a,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function o(v){let w=new F,_=new F,b=new F;for(let M=0;M<e.length;M+=3)f(e[M+0],w),f(e[M+1],_),f(e[M+2],b),l(w,_,b,v)}function l(v,w,_,b){let M=b+1,T=[];for(let y=0;y<=M;y++){T[y]=[];let S=v.clone().lerp(_,y/M),C=w.clone().lerp(_,y/M),P=M-y;for(let I=0;I<=P;I++)I===0&&y===M?T[y][I]=S:T[y][I]=S.clone().lerp(C,I/P)}for(let y=0;y<M;y++)for(let S=0;S<2*(M-y)-1;S++){let C=Math.floor(S/2);S%2===0?(u(T[y][C+1]),u(T[y+1][C]),u(T[y][C])):(u(T[y][C+1]),u(T[y+1][C+1]),u(T[y+1][C]))}}function c(v){let w=new F;for(let _=0;_<r.length;_+=3)w.x=r[_+0],w.y=r[_+1],w.z=r[_+2],w.normalize().multiplyScalar(v),r[_+0]=w.x,r[_+1]=w.y,r[_+2]=w.z}function h(){let v=new F;for(let w=0;w<r.length;w+=3){v.x=r[w+0],v.y=r[w+1],v.z=r[w+2];let _=g(v)/2/Math.PI+.5,b=p(v)/Math.PI+.5;a.push(_,1-b)}m(),d()}function d(){for(let v=0;v<a.length;v+=6){let w=a[v+0],_=a[v+2],b=a[v+4],M=Math.max(w,_,b),T=Math.min(w,_,b);M>.9&&T<.1&&(w<.2&&(a[v+0]+=1),_<.2&&(a[v+2]+=1),b<.2&&(a[v+4]+=1))}}function u(v){r.push(v.x,v.y,v.z)}function f(v,w){let _=v*3;w.x=t[_+0],w.y=t[_+1],w.z=t[_+2]}function m(){let v=new F,w=new F,_=new F,b=new F,M=new Ft,T=new Ft,y=new Ft;for(let S=0,C=0;S<r.length;S+=9,C+=6){v.set(r[S+0],r[S+1],r[S+2]),w.set(r[S+3],r[S+4],r[S+5]),_.set(r[S+6],r[S+7],r[S+8]),M.set(a[C+0],a[C+1]),T.set(a[C+2],a[C+3]),y.set(a[C+4],a[C+5]),b.copy(v).add(w).add(_).divideScalar(3);let P=g(b);x(M,C+0,v,P),x(T,C+2,w,P),x(y,C+4,_,P)}}function x(v,w,_,b){b<0&&v.x===1&&(a[w]=v.x-1),_.x===0&&_.z===0&&(a[w]=b/2/Math.PI+.5)}function g(v){return Math.atan2(v.z,-v.x)}function p(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.vertices,t.indices,t.radius,t.detail)}};var _n=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Ot("Curve: .getPoint() not implemented.")}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,i=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(i),e.push(r),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let n=this.getLengths(),i=0,r=n.length,a;e?a=e:a=t*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(i=Math.floor(o+(l-o)/2),c=n[i]-a,c<0)o=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===a)return i/(r-1);let h=n[i],u=n[i+1]-h,f=(a-h)/u;return(i+f)/(r-1)}getTangent(t,e){let i=t-1e-4,r=t+1e-4;i<0&&(i=0),r>1&&(r=1);let a=this.getPoint(i),o=this.getPoint(r),l=e||(a.isVector2?new Ft:new F);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){let n=new F,i=[],r=[],a=[],o=new F,l=new Qt;for(let f=0;f<=t;f++){let m=f/t;i[f]=this.getTangentAt(m,new F)}r[0]=new F,a[0]=new F;let c=Number.MAX_VALUE,h=Math.abs(i[0].x),d=Math.abs(i[0].y),u=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),d<=c&&(c=d,n.set(0,1,0)),u<=c&&n.set(0,0,1),o.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],o),a[0].crossVectors(i[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(i[f-1],i[f]),o.length()>Number.EPSILON){o.normalize();let m=Math.acos($t(i[f-1].dot(i[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(o,m))}a[f].crossVectors(i[f],r[f])}if(e===!0){let f=Math.acos($t(r[0].dot(r[t]),-1,1));f/=t,i[0].dot(o.crossVectors(r[0],r[t]))>0&&(f=-f);for(let m=1;m<=t;m++)r[m].applyMatrix4(l.makeRotationAxis(i[m],f*m)),a[m].crossVectors(i[m],r[m])}return{tangents:i,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},br=class extends _n{constructor(t=0,e=0,n=1,i=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e=new Ft){let n=e,i=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(a?r=0:r=i),this.aClockwise===!0&&!a&&(r===i?r=-i:r=r-i);let o=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),u=l-this.aX,f=c-this.aY;l=u*h-f*d+this.aX,c=u*d+f*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},Ya=class extends br{constructor(t,e,n,i,r,a){super(t,e,n,n,i,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function Bc(){let s=0,t=0,e=0,n=0;function i(r,a,o,l){s=r,t=o,e=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){i(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,d){let u=(a-r)/c-(o-r)/(c+h)+(o-a)/h,f=(o-a)/h-(l-a)/(h+d)+(l-o)/d;u*=h,f*=h,i(a,o,u,f)},calc:function(r){let a=r*r,o=a*r;return s+t*r+e*a+n*o}}}var Wh=new F,Xh=new F,nc=new Bc,ic=new Bc,sc=new Bc,ws=class extends _n{constructor(t=[],e=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new F){let n=e,i=this.points,r=i.length,a=(r-(this.closed?0:1))*t,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=i[(o-1)%r]:(Xh.subVectors(i[0],i[1]).add(i[0]),c=Xh);let d=i[o%r],u=i[(o+1)%r];if(this.closed||o+2<r?h=i[(o+2)%r]:(Wh.subVectors(i[r-1],i[r-2]).add(i[r-1]),h=Wh),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,m=Math.pow(c.distanceToSquared(d),f),x=Math.pow(d.distanceToSquared(u),f),g=Math.pow(u.distanceToSquared(h),f);x<1e-4&&(x=1),m<1e-4&&(m=x),g<1e-4&&(g=x),nc.initNonuniformCatmullRom(c.x,d.x,u.x,h.x,m,x,g),ic.initNonuniformCatmullRom(c.y,d.y,u.y,h.y,m,x,g),sc.initNonuniformCatmullRom(c.z,d.z,u.z,h.z,m,x,g)}else this.curveType==="catmullrom"&&(nc.initCatmullRom(c.x,d.x,u.x,h.x,this.tension),ic.initCatmullRom(c.y,d.y,u.y,h.y,this.tension),sc.initCatmullRom(c.z,d.z,u.z,h.z,this.tension));return n.set(nc.calc(l),ic.calc(l),sc.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(new F().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function qh(s,t,e,n,i){let r=(n-t)*.5,a=(i-e)*.5,o=s*s,l=s*o;return(2*e-2*n+r+a)*l+(-3*e+3*n-2*r-a)*o+r*s+e}function xf(s,t){let e=1-s;return e*e*t}function yf(s,t){return 2*(1-s)*s*t}function _f(s,t){return s*s*t}function ir(s,t,e,n){return xf(s,t)+yf(s,e)+_f(s,n)}function vf(s,t){let e=1-s;return e*e*e*t}function Mf(s,t){let e=1-s;return 3*e*e*s*t}function bf(s,t){return 3*(1-s)*s*s*t}function Sf(s,t){return s*s*s*t}function sr(s,t,e,n,i){return vf(s,t)+Mf(s,e)+bf(s,n)+Sf(s,i)}var $a=class extends _n{constructor(t=new Ft,e=new Ft,n=new Ft,i=new Ft){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new Ft){let n=e,i=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(sr(t,i.x,r.x,a.x,o.x),sr(t,i.y,r.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Za=class extends _n{constructor(t=new F,e=new F,n=new F,i=new F){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new F){let n=e,i=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(sr(t,i.x,r.x,a.x,o.x),sr(t,i.y,r.y,a.y,o.y),sr(t,i.z,r.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Ja=class extends _n{constructor(t=new Ft,e=new Ft){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new Ft){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new Ft){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Ka=class extends _n{constructor(t=new F,e=new F){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new F){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new F){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},ja=class extends _n{constructor(t=new Ft,e=new Ft,n=new Ft){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new Ft){let n=e,i=this.v0,r=this.v1,a=this.v2;return n.set(ir(t,i.x,r.x,a.x),ir(t,i.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Sr=class extends _n{constructor(t=new F,e=new F,n=new F){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new F){let n=e,i=this.v0,r=this.v1,a=this.v2;return n.set(ir(t,i.x,r.x,a.x),ir(t,i.y,r.y,a.y),ir(t,i.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Qa=class extends _n{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new Ft){let n=e,i=this.points,r=(i.length-1)*t,a=Math.floor(r),o=r-a,l=i[a===0?a:a-1],c=i[a],h=i[a>i.length-2?i.length-1:a+1],d=i[a>i.length-3?i.length-1:a+2];return n.set(qh(o,l.x,c.x,h.x,d.x),qh(o,l.y,c.y,h.y,d.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(i.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(new Ft().fromArray(i))}return this}},wf=Object.freeze({__proto__:null,ArcCurve:Ya,CatmullRomCurve3:ws,CubicBezierCurve:$a,CubicBezierCurve3:Za,EllipseCurve:br,LineCurve:Ja,LineCurve3:Ka,QuadraticBezierCurve:ja,QuadraticBezierCurve3:Sr,SplineCurve:Qa});var wr=class s extends qa{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new s(t.radius,t.detail)}};var Pe=class s extends oe{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};let r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(i),c=o+1,h=l+1,d=t/o,u=e/l,f=[],m=[],x=[],g=[];for(let p=0;p<h;p++){let v=p*u-a;for(let w=0;w<c;w++){let _=w*d-r;m.push(_,-v,0),x.push(0,0,1),g.push(w/o),g.push(1-p/l)}}for(let p=0;p<l;p++)for(let v=0;v<o;v++){let w=v+c*p,_=v+c*(p+1),b=v+1+c*(p+1),M=v+1+c*p;f.push(w,_,M),f.push(_,b,M)}this.setIndex(f),this.setAttribute("position",new Kt(m,3)),this.setAttribute("normal",new Kt(x,3)),this.setAttribute("uv",new Kt(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.widthSegments,t.heightSegments)}},Hi=class s extends oe{constructor(t=.5,e=1,n=32,i=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:i,thetaStart:r,thetaLength:a},n=Math.max(3,n),i=Math.max(1,i);let o=[],l=[],c=[],h=[],d=t,u=(e-t)/i,f=new F,m=new Ft;for(let x=0;x<=i;x++){for(let g=0;g<=n;g++){let p=r+g/n*a;f.x=d*Math.cos(p),f.y=d*Math.sin(p),l.push(f.x,f.y,f.z),c.push(0,0,1),m.x=(f.x/e+1)/2,m.y=(f.y/e+1)/2,h.push(m.x,m.y)}d+=u}for(let x=0;x<i;x++){let g=x*(n+1);for(let p=0;p<n;p++){let v=p+g,w=v,_=v+n+1,b=v+n+2,M=v+1;o.push(w,_,M),o.push(_,b,M)}}this.setIndex(o),this.setAttribute("position",new Kt(l,3)),this.setAttribute("normal",new Kt(c,3)),this.setAttribute("uv",new Kt(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}};var Mi=class s extends oe{constructor(t=1,e=32,n=16,i=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,h=[],d=new F,u=new F,f=[],m=[],x=[],g=[];for(let p=0;p<=n;p++){let v=[],w=p/n,_=a+w*o,b=t*Math.cos(_),M=Math.sqrt(t*t-b*b),T=0;p===0&&a===0?T=.5/e:p===n&&l===Math.PI&&(T=-.5/e);for(let y=0;y<=e;y++){let S=y/e,C=i+S*r;d.x=-M*Math.cos(C),d.y=b,d.z=M*Math.sin(C),m.push(d.x,d.y,d.z),u.copy(d).normalize(),x.push(u.x,u.y,u.z),g.push(S+T,1-w),v.push(c++)}h.push(v)}for(let p=0;p<n;p++)for(let v=0;v<e;v++){let w=h[p][v+1],_=h[p][v],b=h[p+1][v],M=h[p+1][v+1];(p!==0||a>0)&&f.push(w,_,M),(p!==n-1||l<Math.PI)&&f.push(_,b,M)}this.setIndex(f),this.setAttribute("position",new Kt(m,3)),this.setAttribute("normal",new Kt(x,3)),this.setAttribute("uv",new Kt(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var Er=class s extends oe{constructor(t=new Sr(new F(-1,-1,0),new F(-1,1,0),new F(1,1,0)),e=64,n=1,i=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:i,closed:r};let a=t.computeFrenetFrames(e,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new F,l=new F,c=new Ft,h=new F,d=[],u=[],f=[],m=[];x(),this.setIndex(m),this.setAttribute("position",new Kt(d,3)),this.setAttribute("normal",new Kt(u,3)),this.setAttribute("uv",new Kt(f,2));function x(){for(let w=0;w<e;w++)g(w);g(r===!1?e:0),v(),p()}function g(w){h=t.getPointAt(w/e,h);let _=a.normals[w],b=a.binormals[w];for(let M=0;M<=i;M++){let T=M/i*Math.PI*2,y=Math.sin(T),S=-Math.cos(T);l.x=S*_.x+y*b.x,l.y=S*_.y+y*b.y,l.z=S*_.z+y*b.z,l.normalize(),u.push(l.x,l.y,l.z),o.x=h.x+n*l.x,o.y=h.y+n*l.y,o.z=h.z+n*l.z,d.push(o.x,o.y,o.z)}}function p(){for(let w=1;w<=e;w++)for(let _=1;_<=i;_++){let b=(i+1)*(w-1)+(_-1),M=(i+1)*w+(_-1),T=(i+1)*w+_,y=(i+1)*(w-1)+_;m.push(b,M,y),m.push(M,T,y)}}function v(){for(let w=0;w<=e;w++)for(let _=0;_<=i;_++)c.x=w/e,c.y=_/i,f.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new s(new wf[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}};function Yi(s){let t={};for(let e in s){t[e]={};for(let n in s[e]){let i=s[e][n];if(Yh(i))i.isRenderTargetTexture?(Ot("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone();else if(Array.isArray(i))if(Yh(i[0])){let r=[];for(let a=0,o=i.length;a<o;a++)r[a]=i[a].clone();t[e][n]=r}else t[e][n]=i.slice();else t[e][n]=i}}return t}function Qe(s){let t={};for(let e=0;e<s.length;e++){let n=Yi(s[e]);for(let i in n)t[i]=n[i]}return t}function Yh(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}function Ef(s){let t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function Oc(s){let t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:jt.workingColorSpace}var Ou={clone:Yi,merge:Qe},Tf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Af=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Ve=class extends Hn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Tf,this.fragmentShader=Af,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Yi(t.uniforms),this.uniformsGroups=Ef(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let i in this.uniforms){let a=this.uniforms[i].value;a&&a.isTexture?e.uniforms[i]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[i]={type:"m4",value:a.toArray()}:e.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let i=t.uniforms[n];switch(this.uniforms[n]={},i.type){case"t":this.uniforms[n].value=e[i.value]||null;break;case"c":this.uniforms[n].value=new ht().setHex(i.value);break;case"v2":this.uniforms[n].value=new Ft().fromArray(i.value);break;case"v3":this.uniforms[n].value=new F().fromArray(i.value);break;case"v4":this.uniforms[n].value=new Me().fromArray(i.value);break;case"m3":this.uniforms[n].value=new Gt().fromArray(i.value);break;case"m4":this.uniforms[n].value=new Qt().fromArray(i.value);break;default:this.uniforms[n].value=i.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},to=class extends Ve{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Ht=class extends Hn{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ht(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ht(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Vr,this.normalScale=new Ft(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new kn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},Tr=class extends Ht{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ft(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return $t(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new ht(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ht(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ht(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(t){this._retroreflectivity>0!=t>0&&this.version++,this._retroreflectivity=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.retroreflectivity=t.retroreflectivity,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}};var Ar=class extends Hn{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new ht(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ht(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Vr,this.normalScale=new Ft(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new kn,this.combine=xo,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},eo=class extends Hn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Su,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},no=class extends Hn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function ds(s,t){return!s||s.constructor===t?s:typeof t.BYTES_PER_ELEMENT=="number"?new t(s):Array.prototype.slice.call(s)}function rc(s){return s!==void 0&&s.inTangents!==void 0&&s.outTangents!==void 0}var bi=class{constructor(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,i=e[n],r=e[n-1];n:{t:{let a;e:{i:if(!(t<i)){for(let o=n+2;;){if(i===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=i,i=e[++n],t<i)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=e[--n-1],t>=r)break t}a=n,n=0;break e}break n}for(;n<a;){let o=n+a>>>1;t<e[o]?a=o:n=o+1}if(i=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,t,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=t*i;for(let a=0;a!==i;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},io=class extends bi{constructor(t,e,n,i){super(t,e,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:lc,endingEnd:lc}}intervalChanged_(t,e,n){let i=this.parameterPositions,r=t-2,a=t+1,o=i[r],l=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case cc:r=t,o=2*e-n;break;case hc:r=i.length-2,o=e+i[r]-i[r+1];break;default:r=t,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case cc:a=t,l=2*n-e;break;case hc:a=1,l=n+i[1]-i[0];break;default:a=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(t,e,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,f=this._weightNext,m=(n-e)/(i-e),x=m*m,g=x*m,p=-u*g+2*u*x-u*m,v=(1+u)*g+(-1.5-2*u)*x+(-.5+u)*m+1,w=(-1-f)*g+(1.5+f)*x+.5*m,_=f*g-f*x;for(let b=0;b!==o;++b)r[b]=p*a[h+b]+v*a[c+b]+w*a[l+b]+_*a[d+b];return r}},so=class extends bi{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=(n-e)/(i-e),d=1-h;for(let u=0;u!==o;++u)r[u]=a[c+u]*d+a[l+u]*h;return r}},ro=class extends bi{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t){return this.copySampleValue_(t-1)}},ao=class extends bi{interpolate_(t,e,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this.inTangents,d=this.outTangents;if(!h||!d){let m=(n-e)/(i-e),x=1-m;for(let g=0;g!==o;++g)r[g]=a[c+g]*x+a[l+g]*m;return r}let u=o*2,f=t-1;for(let m=0;m!==o;++m){let x=a[c+m],g=a[l+m],p=f*u+m*2,v=d[p],w=d[p+1],_=t*u+m*2,b=h[_],M=h[_+1],T=Cf(n,e,v,b,i);r[m]=ku(T,x,w,M,g)}return r}};function ku(s,t,e,n,i){let r=1-s;return r*r*r*t+3*r*r*s*e+3*r*s*s*n+s*s*s*i}function Rf(s,t,e,n,i){let r=1-s;return 3*r*r*(e-t)+6*r*s*(n-e)+3*s*s*(i-n)}function Cf(s,t,e,n,i){let r=(s-t)/(i-t);for(let a=0;a<8;a++){let o=ku(r,t,e,n,i)-s;if(Math.abs(o)<1e-10)break;let l=Rf(r,t,e,n,i);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-o/l))}return r}var pn=class{constructor(t,e,n,i){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=ds(e,this.TimeBufferType),this.values=ds(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:ds(t.times,Array),values:ds(t.values,Array)};let i=t.getInterpolation();i!==t.DefaultInterpolation&&(n.interpolation=i),rc(t.settings)&&(n.settings={inTangents:ds(t.settings.inTangents,Array),outTangents:ds(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new ro(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new so(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new io(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new ao(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case rr:e=this.InterpolantFactoryMethodDiscrete;break;case za:e=this.InterpolantFactoryMethodLinear;break;case Pa:e=this.InterpolantFactoryMethodSmooth;break;case oc:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Ot("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return rr;case this.InterpolantFactoryMethodLinear:return za;case this.InterpolantFactoryMethodSmooth:return Pa;case this.InterpolantFactoryMethodBezier:return oc}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t;rc(this.settings)&&($h(this.settings.inTangents,t),$h(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,i=n.length,r=0,a=i-1;for(;r!==i&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==i){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(kt("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,i=this.values,r=n.length;r===0&&(kt("KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){kt("KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(a!==null&&a>l){kt("KeyframeTrack: Out of order keys.",this,o,l,a),t=!1;break}a=l}if(i!==void 0&&Zd(i))for(let o=0,l=i.length;o!==l;++o){let c=i[o];if(isNaN(c)){kt("KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Pa,r=t.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=t[o],h=t[o+1];if(c!==h&&(o!==1||c!==t[0]))if(i)l=!0;else{let d=o*n,u=d-n,f=d+n;for(let m=0;m!==n;++m){let x=e[d+m];if(x!==e[u+m]||x!==e[f+m]){l=!0;break}}}if(l){if(o!==a){t[a]=t[o];let d=o*n,u=a*n;for(let f=0;f!==n;++f)e[u+f]=e[d+f]}++a}}if(r>0){t[a]=t[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)e[l+c]=e[o+c];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,i=new n(this.name,t,e);return i.createInterpolant=this.createInterpolant,rc(this.settings)&&(i.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),i}};function $h(s,t){for(let e=0,n=s.length;e!==n;e+=2)s[e]*=t}pn.prototype.ValueTypeName="";pn.prototype.TimeBufferType=Float32Array;pn.prototype.ValueBufferType=Float32Array;pn.prototype.DefaultInterpolation=za;var Si=class extends pn{constructor(t,e,n){super(t,e,n)}};Si.prototype.ValueTypeName="bool";Si.prototype.ValueBufferType=Array;Si.prototype.DefaultInterpolation=rr;Si.prototype.InterpolantFactoryMethodLinear=void 0;Si.prototype.InterpolantFactoryMethodSmooth=void 0;var oo=class extends pn{constructor(t,e,n,i){super(t,e,n,i)}};oo.prototype.ValueTypeName="color";var lo=class extends pn{constructor(t,e,n,i){super(t,e,n,i)}};lo.prototype.ValueTypeName="number";var co=class extends bi{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-e)/(i-e),c=t*o;for(let h=c+o;c!==h;c+=4)Ne.slerpFlat(r,0,a,c-o,a,c,l);return r}},Rr=class extends pn{constructor(t,e,n,i){super(t,e,n,i)}InterpolantFactoryMethodLinear(t){return new co(this.times,this.values,this.getValueSize(),t)}};Rr.prototype.ValueTypeName="quaternion";Rr.prototype.InterpolantFactoryMethodSmooth=void 0;var wi=class extends pn{constructor(t,e,n){super(t,e,n)}};wi.prototype.ValueTypeName="string";wi.prototype.ValueBufferType=Array;wi.prototype.DefaultInterpolation=rr;wi.prototype.InterpolantFactoryMethodLinear=void 0;wi.prototype.InterpolantFactoryMethodSmooth=void 0;var ho=class extends pn{constructor(t,e,n,i){super(t,e,n,i)}};ho.prototype.ValueTypeName="vector";var uo=class{constructor(t,e,n){let i=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(h){o++,r===!1&&i.onStart!==void 0&&i.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,i.onProgress!==void 0&&i.onProgress(h,a,o),a===o&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){let d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=c.length;d<u;d+=2){let f=c[d],m=c[d+1];if(f.global&&(f.lastIndex=0),f.test(h))return m}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},zu=new uo,fo=class{constructor(t){this.manager=t!==void 0?t:zu,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(i,r){n.load(t,i,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};fo.DEFAULT_MATERIAL_NAME="__DEFAULT";var Gi=class extends Te{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new ht(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},Cr=class extends Gi{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Te.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ht(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},ac=new Qt,Zh=new F,Jh=new F,Es=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ft(512,512),this.mapType=un,this.map=null,this.mapPass=null,this.matrix=new Qt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ss,this._frameExtents=new Ft(1,1),this._viewportCount=1,this._viewports=[new Me(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;Zh.setFromMatrixPosition(t.matrixWorld),e.position.copy(Zh),Jh.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Jh),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,i){ac.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(ac,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,a=i?i.z/r.x:1,o=i?i.w/r.y:1,l=i?i.x/r.x:0,c=i?i.y/r.y:0;t.coordinateSystem===ys||t.reversedDepth?e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),e.multiply(ac)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},Ra=new F,Ca=new Ne,Nn=new F,Pr=class extends Te{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Qt,this.projectionMatrix=new Qt,this.projectionMatrixInverse=new Qt,this.coordinateSystem=An,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Ra,Ca,Nn),Nn.x===1&&Nn.y===1&&Nn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ra,Ca,Nn.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(Ra,Ca,Nn),Nn.x===1&&Nn.y===1&&Nn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ra,Ca,Nn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},yi=new F,Kh=new Ft,jh=new Ft,Fe=class extends Pr{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=cr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Nl*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return cr*2*Math.atan(Math.tan(Nl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){yi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(yi.x,yi.y).multiplyScalar(-t/yi.z),yi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(yi.x,yi.y).multiplyScalar(-t/yi.z)}getViewSize(t,e){return this.getViewBounds(t,Kh,jh),e.subVectors(jh,Kh)}setViewOffset(t,e,n,i,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Nl*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*i/l,e-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},dc=class extends Es{constructor(){super(new Fe(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(t){let e=this.camera,n=cr*2*t.angle*this.focus,i=this.mapSize.width/this.mapSize.height*this.aspect,r=t.distance||e.far;(n!==e.fov||i!==e.aspect||r!==e.far)&&(e.fov=n,e.aspect=i,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this.aspect=t.aspect,this}toJSON(){let t=super.toJSON();return t.focus=this.focus,t.aspect=this.aspect,t}},Vi=class extends Gi{constructor(t,e,n=0,i=Math.PI/3,r=0,a=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Te.DEFAULT_UP),this.updateMatrix(),this.target=new Te,this.distance=n,this.angle=i,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new dc}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.map=t.map,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.angle=this.angle,e.object.decay=this.decay,e.object.penumbra=this.penumbra,e.object.target=this.target.uuid,this.map&&this.map.isTexture&&(e.object.map=this.map.toJSON(t).uuid),e.object.shadow=this.shadow.toJSON(),e}},fc=class extends Es{constructor(){super(new Fe(90,1,.5,500)),this.isPointLightShadow=!0}},Ir=class extends Gi{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new fc}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}},Ts=class extends Pr{constructor(t=-1,e=1,n=1,i=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,r=n-t,a=n+t,o=i+e,l=i-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},pc=class extends Es{constructor(){super(new Ts(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Lr=class extends Gi{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Te.DEFAULT_UP),this.updateMatrix(),this.target=new Te,this.shadow=new pc}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var fs=-90,ps=1,po=class extends Te{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new Fe(fs,ps,t,e);i.layers=this.layers,this.add(i);let r=new Fe(fs,ps,t,e);r.layers=this.layers,this.add(r);let a=new Fe(fs,ps,t,e);a.layers=this.layers,this.add(a);let o=new Fe(fs,ps,t,e);o.layers=this.layers,this.add(o);let l=new Fe(fs,ps,t,e);l.layers=this.layers,this.add(l);let c=new Fe(fs,ps,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,i,r,a,o,l]=e;for(let c of e)this.remove(c);if(t===An)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===ys)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,d=t.getRenderTarget(),u=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let g=!1;t.isWebGLRenderer===!0?g=t.state.buffers.depth.getReversed():g=t.reversedDepthBuffer,t.setRenderTarget(n,0,i),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,i),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,2,i),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,3,i),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,i),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.generateMipmaps=x,t.setRenderTarget(n,5,i),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(d,u,f),t.xr.enabled=m,n.texture.needsPMREMUpdate=!0}},mo=class extends Fe{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var kc="\\[\\]\\.:\\/",Pf=new RegExp("["+kc+"]","g"),zc="[^"+kc+"]",If="[^"+kc.replace("\\.","")+"]",Lf=/((?:WC+[\/:])*)/.source.replace("WC",zc),Df=/(WCOD+)?/.source.replace("WCOD",If),Ff=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",zc),Nf=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",zc),Uf=new RegExp("^"+Lf+Df+Ff+Nf+"$"),Bf=["material","materials","bones","map"],mc=class{constructor(t,e,n){let i=n||xe.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},xe=class s{constructor(t,e,n){this.path=e,this.parsedPath=n||s.parseTrackName(e),this.node=s.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new s.Composite(t,e,n):new s(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Pf,"")}static parseTrackName(t){let e=Uf.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let r=n.nodeName.substring(i+1);Bf.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let l=n(o.children);if(l)return l}return null},i=n(t.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)t[e++]=n[i]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,i=e.propertyName,r=e.propertyIndex;if(t||(t=s.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Ot("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){kt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){kt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){kt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){kt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){kt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){kt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){kt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let a=t[i];if(a===void 0){let c=e.nodeName;kt("PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!t.geometry){kt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){kt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};xe.Composite=mc;xe.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};xe.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};xe.prototype.GetterByBindingType=[xe.prototype._getValue_direct,xe.prototype._getValue_array,xe.prototype._getValue_arrayElement,xe.prototype._getValue_toArray];xe.prototype.SetterByBindingTypeAndVersioning=[[xe.prototype._setValue_direct,xe.prototype._setValue_direct_setNeedsUpdate,xe.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[xe.prototype._setValue_array,xe.prototype._setValue_array_setNeedsUpdate,xe.prototype._setValue_array_setMatrixWorldNeedsUpdate],[xe.prototype._setValue_arrayElement,xe.prototype._setValue_arrayElement_setNeedsUpdate,xe.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[xe.prototype._setValue_fromArray,xe.prototype._setValue_fromArray_setNeedsUpdate,xe.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var dy=new Float32Array(1);var qc=class qc{constructor(t,e,n,i){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,i)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,i){let r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=i,this}};qc.prototype.isMatrix2=!0;var gc=qc;function Hc(s,t,e,n){let i=Of(n);switch(e){case Dc:return s*t;case wo:return s*t/i.components*i.byteLength;case Eo:return s*t/i.components*i.byteLength;case Ri:return s*t*2/i.components*i.byteLength;case To:return s*t*2/i.components*i.byteLength;case Fc:return s*t*3/i.components*i.byteLength;case Mn:return s*t*4/i.components*i.byteLength;case Ao:return s*t*4/i.components*i.byteLength;case Br:case Or:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case kr:case zr:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Co:case Io:return Math.max(s,16)*Math.max(t,8)/4;case Ro:case Po:return Math.max(s,8)*Math.max(t,8)/2;case Lo:case Do:case No:case Uo:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Fo:case Hr:case Bo:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Oo:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case ko:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case zo:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case Ho:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case Go:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case Vo:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case Wo:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case Xo:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case qo:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case Yo:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case $o:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case Zo:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case Jo:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case Ko:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case jo:case Qo:case tl:return Math.ceil(s/4)*Math.ceil(t/4)*16;case el:case nl:return Math.ceil(s/4)*Math.ceil(t/4)*8;case Gr:case il:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Of(s){switch(s){case un:case Cc:return{byteLength:1,components:1};case Rs:case Pc:case Pn:return{byteLength:2,components:1};case bo:case So:return{byteLength:2,components:4};case Cn:case Mo:case vn:return{byteLength:4,components:1};case Ic:case Lc:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?Ot("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function ld(){let s=null,t=!1,e=null,n=null;function i(r,a){n=s.requestAnimationFrame(i),e(r,a)}return{start:function(){t!==!0&&e!==null&&s!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s!==null&&s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function Xf(s){let t=new WeakMap;function e(o,l){let c=o.array,h=o.usage,d=c.byteLength,u=s.createBuffer();s.bindBuffer(l,u),s.bufferData(l,c,h),o.onUploadCallback();let f;if(c instanceof Float32Array)f=s.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=s.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=s.HALF_FLOAT:f=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=s.SHORT;else if(c instanceof Uint32Array)f=s.UNSIGNED_INT;else if(c instanceof Int32Array)f=s.INT;else if(c instanceof Int8Array)f=s.BYTE;else if(c instanceof Uint8Array)f=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,l,c){let h=l.array,d=l.updateRanges;if(s.bindBuffer(c,o),d.length===0)s.bufferSubData(c,0,h);else{d.sort((f,m)=>f.start-m.start);let u=0;for(let f=1;f<d.length;f++){let m=d[u],x=d[f];x.start<=m.start+m.count+1?m.count=Math.max(m.count,x.start+x.count-m.start):(++u,d[u]=x)}d.length=u+1;for(let f=0,m=d.length;f<m;f++){let x=d[f];s.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(s.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:i,remove:r,update:a}}var qf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Yf=`#ifdef USE_ALPHAHASH
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
#endif`,$f=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Zf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Jf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Kf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,jf=`#ifdef USE_AOMAP
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
#endif`,Qf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,tp=`#ifdef USE_BATCHING
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
#endif`,ep=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,np=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ip=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,sp=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,rp=`#ifdef USE_IRIDESCENCE
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
#endif`,ap=`#ifdef USE_BUMPMAP
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
#endif`,op=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,lp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,cp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,hp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,up=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,dp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,fp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,pp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,mp=`#define PI 3.141592653589793
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
} // validated`,gp=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,xp=`vec3 transformedNormal = objectNormal;
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
#endif`,yp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,_p=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,vp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Mp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,bp="gl_FragColor = linearToOutputTexel( gl_FragColor );",Sp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,wp=`#ifdef USE_ENVMAP
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
#endif`,Ep=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Tp=`#ifdef USE_ENVMAP
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
#endif`,Ap=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Rp=`#ifdef USE_ENVMAP
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
#endif`,Cp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Pp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Ip=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Lp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Dp=`#ifdef USE_GRADIENTMAP
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
}`,Fp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Np=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Up=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Bp=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Op=`#ifdef USE_ENVMAP
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
#endif`,kp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,zp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Hp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Gp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Vp=`PhysicalMaterial material;
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
#endif`,Wp=`uniform sampler2D dfgLUT;
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
}`,Xp=`
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
#endif`,qp=`#if defined( RE_IndirectDiffuse )
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
#endif`,Yp=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,$p=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,Zp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Jp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Kp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,jp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Qp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,tm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,em=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,nm=`#if defined( USE_POINTS_UV )
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
#endif`,im=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,sm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,rm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,am=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,om=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,lm=`#ifdef USE_MORPHTARGETS
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
#endif`,cm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,hm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,um=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,dm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,fm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,pm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,mm=`#ifdef USE_NORMALMAP
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
#endif`,gm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,xm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ym=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,_m=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,vm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Mm=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,bm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Sm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,wm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Em=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Tm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Am=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Rm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Cm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Pm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Im=`float getShadowMask() {
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
}`,Lm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Dm=`#ifdef USE_SKINNING
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
#endif`,Fm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Nm=`#ifdef USE_SKINNING
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
#endif`,Um=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Bm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Om=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,km=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,zm=`#ifdef USE_TRANSMISSION
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
#endif`,Hm=`#ifdef USE_TRANSMISSION
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
#endif`,Gm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Vm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Wm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Xm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,qm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Ym=`uniform sampler2D t2D;
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
}`,$m=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Zm=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Jm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Km=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,jm=`#include <common>
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
}`,Qm=`#if DEPTH_PACKING == 3200
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
}`,t0=`#define DISTANCE
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
}`,e0=`#define DISTANCE
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
}`,n0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,i0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,s0=`uniform float scale;
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
}`,r0=`uniform vec3 diffuse;
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
}`,a0=`#include <common>
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
}`,o0=`uniform vec3 diffuse;
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
}`,l0=`#define LAMBERT
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
}`,c0=`#define LAMBERT
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
}`,h0=`#define MATCAP
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
}`,u0=`#define MATCAP
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
}`,d0=`#define NORMAL
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
}`,f0=`#define NORMAL
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
}`,p0=`#define PHONG
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
}`,m0=`#define PHONG
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
}`,g0=`#define STANDARD
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
}`,x0=`#define STANDARD
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
}`,y0=`#define TOON
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
}`,_0=`#define TOON
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
}`,v0=`uniform float size;
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
}`,M0=`uniform vec3 diffuse;
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
}`,b0=`#include <common>
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
}`,S0=`uniform vec3 color;
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
}`,w0=`uniform float rotation;
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
}`,E0=`uniform vec3 diffuse;
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
}`,Wt={alphahash_fragment:qf,alphahash_pars_fragment:Yf,alphamap_fragment:$f,alphamap_pars_fragment:Zf,alphatest_fragment:Jf,alphatest_pars_fragment:Kf,aomap_fragment:jf,aomap_pars_fragment:Qf,batching_pars_vertex:tp,batching_vertex:ep,begin_vertex:np,beginnormal_vertex:ip,bsdfs:sp,iridescence_fragment:rp,bumpmap_pars_fragment:ap,clipping_planes_fragment:op,clipping_planes_pars_fragment:lp,clipping_planes_pars_vertex:cp,clipping_planes_vertex:hp,color_fragment:up,color_pars_fragment:dp,color_pars_vertex:fp,color_vertex:pp,common:mp,cube_uv_reflection_fragment:gp,defaultnormal_vertex:xp,displacementmap_pars_vertex:yp,displacementmap_vertex:_p,emissivemap_fragment:vp,emissivemap_pars_fragment:Mp,colorspace_fragment:bp,colorspace_pars_fragment:Sp,envmap_fragment:wp,envmap_common_pars_fragment:Ep,envmap_pars_fragment:Tp,envmap_pars_vertex:Ap,envmap_physical_pars_fragment:Op,envmap_vertex:Rp,fog_vertex:Cp,fog_pars_vertex:Pp,fog_fragment:Ip,fog_pars_fragment:Lp,gradientmap_pars_fragment:Dp,lightmap_pars_fragment:Fp,lights_lambert_fragment:Np,lights_lambert_pars_fragment:Up,lights_pars_begin:Bp,lights_toon_fragment:kp,lights_toon_pars_fragment:zp,lights_phong_fragment:Hp,lights_phong_pars_fragment:Gp,lights_physical_fragment:Vp,lights_physical_pars_fragment:Wp,lights_fragment_begin:Xp,lights_fragment_maps:qp,lights_fragment_end:Yp,lightprobes_pars_fragment:$p,logdepthbuf_fragment:Zp,logdepthbuf_pars_fragment:Jp,logdepthbuf_pars_vertex:Kp,logdepthbuf_vertex:jp,map_fragment:Qp,map_pars_fragment:tm,map_particle_fragment:em,map_particle_pars_fragment:nm,metalnessmap_fragment:im,metalnessmap_pars_fragment:sm,morphinstance_vertex:rm,morphcolor_vertex:am,morphnormal_vertex:om,morphtarget_pars_vertex:lm,morphtarget_vertex:cm,normal_fragment_begin:hm,normal_fragment_maps:um,normal_pars_fragment:dm,normal_pars_vertex:fm,normal_vertex:pm,normalmap_pars_fragment:mm,clearcoat_normal_fragment_begin:gm,clearcoat_normal_fragment_maps:xm,clearcoat_pars_fragment:ym,iridescence_pars_fragment:_m,opaque_fragment:vm,packing:Mm,premultiplied_alpha_fragment:bm,project_vertex:Sm,dithering_fragment:wm,dithering_pars_fragment:Em,roughnessmap_fragment:Tm,roughnessmap_pars_fragment:Am,shadowmap_pars_fragment:Rm,shadowmap_pars_vertex:Cm,shadowmap_vertex:Pm,shadowmask_pars_fragment:Im,skinbase_vertex:Lm,skinning_pars_vertex:Dm,skinning_vertex:Fm,skinnormal_vertex:Nm,specularmap_fragment:Um,specularmap_pars_fragment:Bm,tonemapping_fragment:Om,tonemapping_pars_fragment:km,transmission_fragment:zm,transmission_pars_fragment:Hm,uv_pars_fragment:Gm,uv_pars_vertex:Vm,uv_vertex:Wm,worldpos_vertex:Xm,background_vert:qm,background_frag:Ym,backgroundCube_vert:$m,backgroundCube_frag:Zm,cube_vert:Jm,cube_frag:Km,depth_vert:jm,depth_frag:Qm,distance_vert:t0,distance_frag:e0,equirect_vert:n0,equirect_frag:i0,linedashed_vert:s0,linedashed_frag:r0,meshbasic_vert:a0,meshbasic_frag:o0,meshlambert_vert:l0,meshlambert_frag:c0,meshmatcap_vert:h0,meshmatcap_frag:u0,meshnormal_vert:d0,meshnormal_frag:f0,meshphong_vert:p0,meshphong_frag:m0,meshphysical_vert:g0,meshphysical_frag:x0,meshtoon_vert:y0,meshtoon_frag:_0,points_vert:v0,points_frag:M0,shadow_vert:b0,shadow_frag:S0,sprite_vert:w0,sprite_frag:E0},yt={common:{diffuse:{value:new ht(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Gt},alphaMap:{value:null},alphaMapTransform:{value:new Gt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Gt}},envmap:{envMap:{value:null},envMapRotation:{value:new Gt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Gt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Gt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Gt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Gt},normalScale:{value:new Ft(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Gt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Gt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Gt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Gt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ht(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new F},probesMax:{value:new F},probesResolution:{value:new F}},points:{diffuse:{value:new ht(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Gt},alphaTest:{value:0},uvTransform:{value:new Gt}},sprite:{diffuse:{value:new ht(16777215)},opacity:{value:1},center:{value:new Ft(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Gt},alphaMap:{value:null},alphaMapTransform:{value:new Gt},alphaTest:{value:0}}},qn={basic:{uniforms:Qe([yt.common,yt.specularmap,yt.envmap,yt.aomap,yt.lightmap,yt.fog]),vertexShader:Wt.meshbasic_vert,fragmentShader:Wt.meshbasic_frag},lambert:{uniforms:Qe([yt.common,yt.specularmap,yt.envmap,yt.aomap,yt.lightmap,yt.emissivemap,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.fog,yt.lights,{emissive:{value:new ht(0)},envMapIntensity:{value:1}}]),vertexShader:Wt.meshlambert_vert,fragmentShader:Wt.meshlambert_frag},phong:{uniforms:Qe([yt.common,yt.specularmap,yt.envmap,yt.aomap,yt.lightmap,yt.emissivemap,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.fog,yt.lights,{emissive:{value:new ht(0)},specular:{value:new ht(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Wt.meshphong_vert,fragmentShader:Wt.meshphong_frag},standard:{uniforms:Qe([yt.common,yt.envmap,yt.aomap,yt.lightmap,yt.emissivemap,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.roughnessmap,yt.metalnessmap,yt.fog,yt.lights,{emissive:{value:new ht(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Wt.meshphysical_vert,fragmentShader:Wt.meshphysical_frag},toon:{uniforms:Qe([yt.common,yt.aomap,yt.lightmap,yt.emissivemap,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.gradientmap,yt.fog,yt.lights,{emissive:{value:new ht(0)}}]),vertexShader:Wt.meshtoon_vert,fragmentShader:Wt.meshtoon_frag},matcap:{uniforms:Qe([yt.common,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.fog,{matcap:{value:null}}]),vertexShader:Wt.meshmatcap_vert,fragmentShader:Wt.meshmatcap_frag},points:{uniforms:Qe([yt.points,yt.fog]),vertexShader:Wt.points_vert,fragmentShader:Wt.points_frag},dashed:{uniforms:Qe([yt.common,yt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Wt.linedashed_vert,fragmentShader:Wt.linedashed_frag},depth:{uniforms:Qe([yt.common,yt.displacementmap]),vertexShader:Wt.depth_vert,fragmentShader:Wt.depth_frag},normal:{uniforms:Qe([yt.common,yt.bumpmap,yt.normalmap,yt.displacementmap,{opacity:{value:1}}]),vertexShader:Wt.meshnormal_vert,fragmentShader:Wt.meshnormal_frag},sprite:{uniforms:Qe([yt.sprite,yt.fog]),vertexShader:Wt.sprite_vert,fragmentShader:Wt.sprite_frag},background:{uniforms:{uvTransform:{value:new Gt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Wt.background_vert,fragmentShader:Wt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Gt}},vertexShader:Wt.backgroundCube_vert,fragmentShader:Wt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Wt.cube_vert,fragmentShader:Wt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Wt.equirect_vert,fragmentShader:Wt.equirect_frag},distance:{uniforms:Qe([yt.common,yt.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Wt.distance_vert,fragmentShader:Wt.distance_frag},shadow:{uniforms:Qe([yt.lights,yt.fog,{color:{value:new ht(0)},opacity:{value:1}}]),vertexShader:Wt.shadow_vert,fragmentShader:Wt.shadow_frag}};qn.physical={uniforms:Qe([qn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Gt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Gt},clearcoatNormalScale:{value:new Ft(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Gt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Gt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Gt},sheen:{value:0},sheenColor:{value:new ht(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Gt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Gt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Gt},transmissionSamplerSize:{value:new Ft},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Gt},attenuationDistance:{value:0},attenuationColor:{value:new ht(0)},specularColor:{value:new ht(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Gt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Gt},anisotropyVector:{value:new Ft},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Gt}}]),vertexShader:Wt.meshphysical_vert,fragmentShader:Wt.meshphysical_frag};var al={r:0,b:0,g:0},T0=new Qt,cd=new Gt;cd.set(-1,0,0,0,1,0,0,0,1);function A0(s,t,e,n,i,r){let a=new ht(0),o=i===!0?0:1,l,c,h=null,d=0,u=null;function f(v){let w=v.isScene===!0?v.background:null;if(w&&w.isTexture){let _=v.backgroundBlurriness>0;w=t.get(w,_)}return w}function m(v){let w=!1,_=f(v);_===null?g(a,o):_&&_.isColor&&(g(_,1),w=!0);let b=s.xr.getEnvironmentBlendMode();b==="additive"?e.buffers.color.setClear(0,0,0,1,r):b==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(s.autoClear||w)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function x(v,w){let _=f(w);_&&(_.isCubeTexture||_.mapping===Nr)?(c===void 0&&(c=new Ct(new ye(1,1,1),new Ve({name:"BackgroundCubeMaterial",uniforms:Yi(qn.backgroundCube.uniforms),vertexShader:qn.backgroundCube.vertexShader,fragmentShader:qn.backgroundCube.fragmentShader,side:Ue,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(b,M,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=_,c.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(T0.makeRotationFromEuler(w.backgroundRotation)).transpose(),_.isCubeTexture&&_.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(cd),c.material.toneMapped=jt.getTransfer(_.colorSpace)!==ae,(h!==_||d!==_.version||u!==s.toneMapping)&&(c.material.needsUpdate=!0,h=_,d=_.version,u=s.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null)):_&&_.isTexture&&(l===void 0&&(l=new Ct(new Pe(2,2),new Ve({name:"BackgroundMaterial",uniforms:Yi(qn.background.uniforms),vertexShader:qn.background.vertexShader,fragmentShader:qn.background.fragmentShader,side:Gn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=_,l.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,l.material.toneMapped=jt.getTransfer(_.colorSpace)!==ae,_.matrixAutoUpdate===!0&&_.updateMatrix(),l.material.uniforms.uvTransform.value.copy(_.matrix),(h!==_||d!==_.version||u!==s.toneMapping)&&(l.material.needsUpdate=!0,h=_,d=_.version,u=s.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null))}function g(v,w){v.getRGB(al,Oc(s)),e.buffers.color.setClear(al.r,al.g,al.b,w,r)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(v,w=1){a.set(v),o=w,g(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(v){o=v,g(a,o)},render:m,addToRenderList:x,dispose:p}}function R0(s,t){let e=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=u(null),r=i,a=!1;function o(P,I,L,A,N){let G=!1,z=d(P,A,L,I);r!==z&&(r=z,c(r.object)),G=f(P,A,L,N),G&&m(P,A,L,N),N!==null&&t.update(N,s.ELEMENT_ARRAY_BUFFER),(G||a)&&(a=!1,_(P,I,L,A),N!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(N).buffer))}function l(){return s.createVertexArray()}function c(P){return s.bindVertexArray(P)}function h(P){return s.deleteVertexArray(P)}function d(P,I,L,A){let N=A.wireframe===!0,G=n[I.id];G===void 0&&(G={},n[I.id]=G);let z=P.isInstancedMesh===!0?P.id:0,H=G[z];H===void 0&&(H={},G[z]=H);let U=H[L.id];U===void 0&&(U={},H[L.id]=U);let V=U[N];return V===void 0&&(V=u(l()),U[N]=V),V}function u(P){let I=[],L=[],A=[];for(let N=0;N<e;N++)I[N]=0,L[N]=0,A[N]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:L,attributeDivisors:A,object:P,attributes:{},index:null}}function f(P,I,L,A){let N=r.attributes,G=I.attributes,z=0,H=L.getAttributes();for(let U in H)if(H[U].location>=0){let X=N[U],rt=G[U];if(rt===void 0&&(U==="instanceMatrix"&&P.instanceMatrix&&(rt=P.instanceMatrix),U==="instanceColor"&&P.instanceColor&&(rt=P.instanceColor)),X===void 0||X.attribute!==rt||rt&&X.data!==rt.data)return!0;z++}return r.attributesNum!==z||r.index!==A}function m(P,I,L,A){let N={},G=I.attributes,z=0,H=L.getAttributes();for(let U in H)if(H[U].location>=0){let X=G[U];X===void 0&&(U==="instanceMatrix"&&P.instanceMatrix&&(X=P.instanceMatrix),U==="instanceColor"&&P.instanceColor&&(X=P.instanceColor));let rt={};rt.attribute=X,X&&X.data&&(rt.data=X.data),N[U]=rt,z++}r.attributes=N,r.attributesNum=z,r.index=A}function x(){let P=r.newAttributes;for(let I=0,L=P.length;I<L;I++)P[I]=0}function g(P){p(P,0)}function p(P,I){let L=r.newAttributes,A=r.enabledAttributes,N=r.attributeDivisors;L[P]=1,A[P]===0&&(s.enableVertexAttribArray(P),A[P]=1),N[P]!==I&&(s.vertexAttribDivisor(P,I),N[P]=I)}function v(){let P=r.newAttributes,I=r.enabledAttributes;for(let L=0,A=I.length;L<A;L++)I[L]!==P[L]&&(s.disableVertexAttribArray(L),I[L]=0)}function w(P,I,L,A,N,G,z){z===!0?s.vertexAttribIPointer(P,I,L,N,G):s.vertexAttribPointer(P,I,L,A,N,G)}function _(P,I,L,A){x();let N=A.attributes,G=L.getAttributes(),z=I.defaultAttributeValues;for(let H in G){let U=G[H];if(U.location>=0){let V=N[H];if(V===void 0&&(H==="instanceMatrix"&&P.instanceMatrix&&(V=P.instanceMatrix),H==="instanceColor"&&P.instanceColor&&(V=P.instanceColor)),V!==void 0){let X=V.normalized,rt=V.itemSize,st=t.get(V);if(st===void 0)continue;let St=st.buffer,bt=st.type,At=st.bytesPerElement,q=bt===s.INT||bt===s.UNSIGNED_INT||V.gpuType===Mo;if(V.isInterleavedBufferAttribute){let j=V.data,lt=j.stride,_t=V.offset;if(j.isInstancedInterleavedBuffer){for(let mt=0;mt<U.locationSize;mt++)p(U.location+mt,j.meshPerAttribute);P.isInstancedMesh!==!0&&A._maxInstanceCount===void 0&&(A._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let mt=0;mt<U.locationSize;mt++)g(U.location+mt);s.bindBuffer(s.ARRAY_BUFFER,St);for(let mt=0;mt<U.locationSize;mt++)w(U.location+mt,rt/U.locationSize,bt,X,lt*At,(_t+rt/U.locationSize*mt)*At,q)}else{if(V.isInstancedBufferAttribute){for(let j=0;j<U.locationSize;j++)p(U.location+j,V.meshPerAttribute);P.isInstancedMesh!==!0&&A._maxInstanceCount===void 0&&(A._maxInstanceCount=V.meshPerAttribute*V.count)}else for(let j=0;j<U.locationSize;j++)g(U.location+j);s.bindBuffer(s.ARRAY_BUFFER,St);for(let j=0;j<U.locationSize;j++)w(U.location+j,rt/U.locationSize,bt,X,rt*At,rt/U.locationSize*j*At,q)}}else if(z!==void 0){let X=z[H];if(X!==void 0)switch(X.length){case 2:s.vertexAttrib2fv(U.location,X);break;case 3:s.vertexAttrib3fv(U.location,X);break;case 4:s.vertexAttrib4fv(U.location,X);break;default:s.vertexAttrib1fv(U.location,X)}}}}v()}function b(){S();for(let P in n){let I=n[P];for(let L in I){let A=I[L];for(let N in A){let G=A[N];for(let z in G)h(G[z].object),delete G[z];delete A[N]}}delete n[P]}}function M(P){if(n[P.id]===void 0)return;let I=n[P.id];for(let L in I){let A=I[L];for(let N in A){let G=A[N];for(let z in G)h(G[z].object),delete G[z];delete A[N]}}delete n[P.id]}function T(P){for(let I in n){let L=n[I];for(let A in L){let N=L[A];if(N[P.id]===void 0)continue;let G=N[P.id];for(let z in G)h(G[z].object),delete G[z];delete N[P.id]}}}function y(P){for(let I in n){let L=n[I],A=P.isInstancedMesh===!0?P.id:0,N=L[A];if(N!==void 0){for(let G in N){let z=N[G];for(let H in z)h(z[H].object),delete z[H];delete N[G]}delete L[A],Object.keys(L).length===0&&delete n[I]}}}function S(){C(),a=!0,r!==i&&(r=i,c(r.object))}function C(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:S,resetDefaultState:C,dispose:b,releaseStatesOfGeometry:M,releaseStatesOfObject:y,releaseStatesOfProgram:T,initAttributes:x,enableAttribute:g,disableUnusedAttributes:v}}function C0(s,t,e){let n;function i(l){n=l}function r(l,c){s.drawArrays(n,l,c),e.update(c,n,1)}function a(l,c,h){h!==0&&(s.drawArraysInstanced(n,l,c,h),e.update(c,n,h))}function o(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let u=0;for(let f=0;f<h;f++)u+=c[f];e.update(u,n,1)}this.setMode=i,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function P0(s,t,e,n){let i;function r(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){let T=t.get("EXT_texture_filter_anisotropic");i=s.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(T){return!(T!==Mn&&n.convert(T)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(T){let y=T===Pn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(T!==un&&T!==vn&&!y&&n.convert(T)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE))}function l(T){if(T==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(Ot("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let d=e.logarithmicDepthBuffer===!0,u=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&u===!1&&Ot("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let f=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),m=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=s.getParameter(s.MAX_TEXTURE_SIZE),g=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),p=s.getParameter(s.MAX_VERTEX_ATTRIBS),v=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),w=s.getParameter(s.MAX_VARYING_VECTORS),_=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),b=s.getParameter(s.MAX_SAMPLES),M=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:f,maxVertexTextures:m,maxTextureSize:x,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:v,maxVaryings:w,maxFragmentUniforms:_,maxSamples:b,samples:M}}function I0(s){let t=this,e=null,n=0,i=!1,r=!1,a=new Tn,o=new Gt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){let f=d.length!==0||u||n!==0||i;return i=u,n=d.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){e=h(d,u,0)},this.setState=function(d,u,f){let m=d.clippingPlanes,x=d.clipIntersection,g=d.clipShadows,p=s.get(d);if(!i||m===null||m.length===0||r&&!g)r?h(null):c();else{let v=r?0:n,w=v*4,_=p.clippingState||null;l.value=_,_=h(m,u,w,f);for(let b=0;b!==w;++b)_[b]=e[b];p.clippingState=_,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(d,u,f,m){let x=d!==null?d.length:0,g=null;if(x!==0){if(g=l.value,m!==!0||g===null){let p=f+x*4,v=u.matrixWorldInverse;o.getNormalMatrix(v),(g===null||g.length<p)&&(g=new Float32Array(p));for(let w=0,_=f;w!==x;++w,_+=4)a.copy(d[w]).applyMatrix4(v,o),a.normal.toArray(g,_),g[_+3]=a.constant}l.value=g,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,g}}var Is=4,L0=6,D0=20,F0=256,qr=new Ts,Hu=new ht,Yc=null,$c=0,Zc=0,Jc=!1,N0=new F,$i=new F,Zi=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,i=100,r={}){let{size:a=256,position:o=N0}=r;Yc=this._renderer.getRenderTarget(),$c=this._renderer.getActiveCubeFace(),Zc=this._renderer.getActiveMipmapLevel(),Jc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,i,l,o),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Wu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Vu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Yc,$c,Zc),this._renderer.xr.enabled=Jc,t.scissorTest=!1,Ps(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ti||t.mapping===qi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Yc=this._renderer.getRenderTarget(),$c=this._renderer.getActiveCubeFace(),Zc=this._renderer.getActiveMipmapLevel(),Jc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Ze,minFilter:Ze,generateMipmaps:!1,type:Pn,format:Mn,colorSpace:ar,depthBuffer:!1},i=Gu(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Gu(t,e,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=U0(r)),this._blurMaterial=O0(r,t,e),this._ggxMaterial=B0(r,t,e)}return i}_compileMaterial(t){let e=new Ct(new oe,t);this._renderer.compile(e,qr)}_sceneToCubeUV(t,e,n,i,r){let l=new Fe(90,1,e,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,u=d.autoClear,f=d.toneMapping;d.getClearColor(Hu),d.toneMapping=Rn,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(i),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Ct(new ye,new me({name:"PMREM.Background",side:Ue,depthWrite:!1,depthTest:!1})));let x=this._backgroundBox,g=x.material,p=!1,v=t.background;v?v.isColor&&(g.color.copy(v),t.background=null,p=!0):(g.color.copy(Hu),p=!0);for(let w=0;w<6;w++){let _=w%3;_===0?(l.up.set(0,c[w],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[w],r.y,r.z)):_===1?(l.up.set(0,0,c[w]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[w],r.z)):(l.up.set(0,c[w],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[w]));let b=this._cubeSize;Ps(i,_*b,w>2?b:0,b,b),d.setRenderTarget(i),p&&d.render(x,l),d.render(t,l)}d.toneMapping=f,d.autoClear=u,t.background=v}_textureToCubeUV(t,e){let n=this._renderer,i=t.mapping===Ti||t.mapping===qi;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Wu()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Vu());let r=i?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;let o=r.uniforms;o.envMap.value=t;let l=this._cubeSize;Ps(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,qr)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let i=this._lodMeshes.length;for(let r=1;r<i;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=n}_applyGGXFilter(t,e,n){let i=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let l=a.uniforms,c=n/(this._lodMeshes.length-1),h=e/(this._lodMeshes.length-1),d=Math.sqrt(c*c-h*h),u=c*1.25,f=d*u,{_lodMax:m}=this,x=this._sizeLods[n],g=3*x*(n>m-Is?n-m+Is:0),p=4*(this._cubeSize-x);l.envMap.value=t.texture,l.roughness.value=f,l.mipInt.value=m-e,Ps(r,g,p,3*x,2*x),i.setRenderTarget(r),i.render(o,qr),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=m-n,Ps(t,g,p,3*x,2*x),i.setRenderTarget(t),i.render(o,qr)}_blur(t,e,n,i){let r=this._pingPongRenderTarget,a=Math.min(i,Math.PI)/Math.SQRT2;this._blurPass(t,r,e,n,a),this._blurPass(r,t,n,n,a)}_blurPass(t,e,n,i,r){let a=this._renderer,o=this._blurMaterial,l=this._lodMeshes[i];l.material=o;let c=o.uniforms;c.envMap.value=t.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-n;let h=this._sizeLods[i],d=3*h*(i>this._lodMax-Is?i-this._lodMax+Is:0),u=4*(this._cubeSize-h);Ps(e,d,u,3*h,2*h),a.setRenderTarget(e),a.render(l,qr)}};function U0(s){let t=[],e=[],n=s,i=s-Is+1+L0;for(let r=0;r<i;r++){let a=Math.pow(2,n);t.push(a);let o=1/(a-2),l=-o,c=1+o,h=[l,l,c,l,c,c,l,l,c,c,l,c],d=6,u=6,f=3,m=new Float32Array(f*u*d),x=new Float32Array(f*u*d);for(let p=0;p<d;p++){let v=p%3*2/3-1,w=p>2?0:-1,_=[v,w,0,v+2/3,w,0,v+2/3,w+1,0,v,w,0,v+2/3,w+1,0,v,w+1,0];m.set(_,f*u*p);for(let b=0;b<u;b++){let M=h[b*2]*2-1,T=h[b*2+1]*2-1;p===0?$i.set(1,T,M):p===1?$i.set(-M,1,-T):p===2?$i.set(-M,T,1):p===3?$i.set(-1,T,-M):p===4?$i.set(-M,-1,T):$i.set(M,T,-1),$i.toArray(x,(p*u+b)*f)}}let g=new oe;g.setAttribute("position",new Jt(m,f)),g.setAttribute("outputDirection",new Jt(x,f)),e.push(new Ct(g,null)),n>Is&&n--}return{lodMeshes:e,sizeLods:t}}function Gu(s,t,e){let n=new cn(s,t,e);return n.texture.mapping=Nr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ps(s,t,e,n,i){s.viewport.set(t,e,n,i),s.scissor.set(t,e,n,i)}function B0(s,t,e){return new Ve({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:F0,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:hl(),fragmentShader:`

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
		`,blending:Vn,depthTest:!1,depthWrite:!1})}function O0(s,t,e){return new Ve({name:"SphericalGaussianBlur",defines:{SAMPLES:D0,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:hl(),fragmentShader:`

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
		`,blending:Vn,depthTest:!1,depthWrite:!1})}function Vu(){return new Ve({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:hl(),fragmentShader:`

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
		`,blending:Vn,depthTest:!1,depthWrite:!1})}function Wu(){return new Ve({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:hl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Vn,depthTest:!1,depthWrite:!1})}function hl(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var ll=class extends cn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new _r(i),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new ye(5,5,5),r=new Ve({name:"CubemapFromEquirect",uniforms:Yi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ue,blending:Vn});r.uniforms.tEquirect.value=e;let a=new Ct(i,r),o=e.minFilter;return e.minFilter===Wn&&(e.minFilter=Ze),new po(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,i=!0){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,i);t.setRenderTarget(r)}};function k0(s){let t=new WeakMap,e=new WeakMap,n=null;function i(u,f=!1){return u==null?null:f?a(u):r(u)}function r(u){if(u&&u.isTexture){let f=u.mapping;if(f===yo||f===_o)if(t.has(u)){let m=t.get(u).texture;return o(m,u.mapping)}else{let m=u.image;if(m&&m.height>0){let x=new ll(m.height);return x.fromEquirectangularTexture(s,u),t.set(u,x),u.addEventListener("dispose",c),o(x.texture,u.mapping)}else return null}}return u}function a(u){if(u&&u.isTexture){let f=u.mapping,m=f===yo||f===_o,x=f===Ti||f===qi;if(m||x){let g=e.get(u),p=g!==void 0?g.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==p)return n===null&&(n=new Zi(s)),g=m?n.fromEquirectangular(u,g):n.fromCubemap(u,g),g.texture.pmremVersion=u.pmremVersion,e.set(u,g),g.texture;if(g!==void 0)return g.texture;{let v=u.image;return m&&v&&v.height>0||x&&v&&l(v)?(n===null&&(n=new Zi(s)),g=m?n.fromEquirectangular(u):n.fromCubemap(u),g.texture.pmremVersion=u.pmremVersion,e.set(u,g),u.addEventListener("dispose",h),g.texture):null}}}return u}function o(u,f){return f===yo?u.mapping=Ti:f===_o&&(u.mapping=qi),u}function l(u){let f=0,m=6;for(let x=0;x<m;x++)u[x]!==void 0&&f++;return f===m}function c(u){let f=u.target;f.removeEventListener("dispose",c);let m=t.get(f);m!==void 0&&(t.delete(f),m.dispose())}function h(u){let f=u.target;f.removeEventListener("dispose",h);let m=e.get(f);m!==void 0&&(e.delete(f),m.dispose())}function d(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:d}}function z0(s){let t={};function e(n){if(t[n]!==void 0)return t[n];let i=s.getExtension(n);return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let i=e(n);return i===null&&Oi("WebGLRenderer: "+n+" extension not supported."),i}}}function H0(s,t,e,n){let i={},r=new WeakMap;function a(d){let u=d.target;u.index!==null&&t.remove(u.index);for(let m in u.attributes)t.remove(u.attributes[m]);u.removeEventListener("dispose",a),delete i[u.id];let f=r.get(u);f&&(t.remove(f),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function o(d,u){return i[u.id]===!0||(u.addEventListener("dispose",a),i[u.id]=!0,e.memory.geometries++),u}function l(d){let u=d.attributes;for(let f in u)t.update(u[f],s.ARRAY_BUFFER)}function c(d){let u=[],f=d.index,m=d.attributes.position,x=0;if(m===void 0)return;if(f!==null){let v=f.array;x=f.version;for(let w=0,_=v.length;w<_;w+=3){let b=v[w+0],M=v[w+1],T=v[w+2];u.push(b,M,M,T,T,b)}}else{let v=m.array;x=m.version;for(let w=0,_=v.length/3-1;w<_;w+=3){let b=w+0,M=w+1,T=w+2;u.push(b,M,M,T,T,b)}}let g=new(m.count>=65535?mr:pr)(u,1);g.version=x;let p=r.get(d);p&&t.remove(p),r.set(d,g)}function h(d){let u=r.get(d);if(u){let f=d.index;f!==null&&u.version<f.version&&c(d)}else c(d);return r.get(d)}return{get:o,update:l,getWireframeAttribute:h}}function G0(s,t,e){let n;function i(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function l(d,u){s.drawElements(n,u,r,d*a),e.update(u,n,1)}function c(d,u,f){f!==0&&(s.drawElementsInstanced(n,u,r,d*a,f),e.update(u,n,f))}function h(d,u,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,r,d,0,f);let x=0;for(let g=0;g<f;g++)x+=u[g];e.update(x,n,1)}this.setMode=i,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function V0(s){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case s.TRIANGLES:e.triangles+=o*(r/3);break;case s.LINES:e.lines+=o*(r/2);break;case s.LINE_STRIP:e.lines+=o*(r-1);break;case s.LINE_LOOP:e.lines+=o*r;break;case s.POINTS:e.points+=o*r;break;default:kt("WebGLInfo: Unknown draw mode:",a);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function W0(s,t,e){let n=new WeakMap,i=new Me;function r(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=h!==void 0?h.length:0,u=n.get(o);if(u===void 0||u.count!==d){let S=function(){T.dispose(),n.delete(o),o.removeEventListener("dispose",S)};u!==void 0&&u.texture.dispose();let f=o.morphAttributes.position!==void 0,m=o.morphAttributes.normal!==void 0,x=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],v=o.morphAttributes.color||[],w=0;f===!0&&(w=1),m===!0&&(w=2),x===!0&&(w=3);let _=o.attributes.position.count*w,b=1;_>t.maxTextureSize&&(b=Math.ceil(_/t.maxTextureSize),_=t.maxTextureSize);let M=new Float32Array(_*b*4*d),T=new hr(M,_,b,d);T.type=vn,T.needsUpdate=!0;let y=w*4;for(let C=0;C<d;C++){let P=g[C],I=p[C],L=v[C],A=_*b*4*C;for(let N=0;N<P.count;N++){let G=N*y;f===!0&&(i.fromBufferAttribute(P,N),M[A+G+0]=i.x,M[A+G+1]=i.y,M[A+G+2]=i.z,M[A+G+3]=0),m===!0&&(i.fromBufferAttribute(I,N),M[A+G+4]=i.x,M[A+G+5]=i.y,M[A+G+6]=i.z,M[A+G+7]=0),x===!0&&(i.fromBufferAttribute(L,N),M[A+G+8]=i.x,M[A+G+9]=i.y,M[A+G+10]=i.z,M[A+G+11]=L.itemSize===4?i.w:1)}}u={count:d,texture:T,size:new Ft(_,b)},n.set(o,u),o.addEventListener("dispose",S)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",a.morphTexture,e);else{let f=0;for(let x=0;x<c.length;x++)f+=c[x];let m=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(s,"morphTargetBaseInfluence",m),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",u.texture,e),l.getUniforms().setValue(s,"morphTargetsTextureSize",u.size)}return{update:r}}function X0(s,t,e,n,i){let r=new WeakMap;function a(c){let h=i.render.frame,d=c.geometry,u=t.get(c,d);if(r.get(u)!==h&&(t.update(u),r.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(e.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,s.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let f=c.skeleton;r.get(f)!==h&&(f.update(),r.set(f,h))}return u}function o(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:a,dispose:o}}var q0={[bc]:"LINEAR_TONE_MAPPING",[Sc]:"REINHARD_TONE_MAPPING",[wc]:"CINEON_TONE_MAPPING",[Fr]:"ACES_FILMIC_TONE_MAPPING",[Tc]:"AGX_TONE_MAPPING",[Ac]:"NEUTRAL_TONE_MAPPING",[Ec]:"CUSTOM_TONE_MAPPING"};function Y0(s,t,e,n,i,r){let a=new cn(t,e,{type:s,depthBuffer:i,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=new oe;c.setAttribute("position",new Kt([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new Kt([0,2,0,0,2,0],2));let h=new to({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),d=new Ct(c,h),u=new Ts(-1,1,1,-1,0,1),f=null,m=null,x=!1,g,p=null,v=[],w=!1;this.setSize=function(_,b){a.setSize(_,b),o!==null&&o.setSize(_,b),l!==null&&l.setSize(_,b);for(let M=0;M<v.length;M++){let T=v[M];T.setSize&&T.setSize(_,b)}},this.setEffects=function(_){v=_,w=v.length>0&&v[0].isRenderPass===!0;let b=a.width,M=a.height;v.length>0&&o===null&&(o=new cn(b,M,{type:Pn,depthBuffer:!1,stencilBuffer:!1}),l=new cn(b,M,{type:Pn,depthBuffer:!1,stencilBuffer:!1}));for(let T=0;T<v.length;T++){let y=v[T];y.setSize&&y.setSize(b,M)}},this.begin=function(_,b){if(x||_.toneMapping===Rn&&v.length===0)return!1;if(p=b,b!==null){let M=b.width,T=b.height;(a.width!==M||a.height!==T)&&this.setSize(M,T)}return w===!1&&_.setRenderTarget(a),g=_.toneMapping,_.toneMapping=Rn,!0},this.hasRenderPass=function(){return w},this.end=function(_,b){_.toneMapping=g,x=!0;let M=a,T=o;for(let y=0;y<v.length;y++){let S=v[y];S.enabled!==!1&&(S.render(_,T,M,b),S.needsSwap!==!1&&(M=T,T=T===o?l:o))}if(f!==_.outputColorSpace||m!==_.toneMapping){f=_.outputColorSpace,m=_.toneMapping,h.defines={},jt.getTransfer(f)===ae&&(h.defines.SRGB_TRANSFER="");let y=q0[m];y&&(h.defines[y]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=M.texture,_.setRenderTarget(p),_.render(d,u),p=null,x=!1},this.isCompositing=function(){return x},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),c.dispose(),h.dispose()}}var hd=new en,Qc=new vi(1,1),ud=new hr,dd=new Va,fd=new _r,Xu=[],qu=[],Yu=new Float32Array(16),$u=new Float32Array(9),Zu=new Float32Array(4);function Ds(s,t,e){let n=s[0];if(n<=0||n>0)return s;let i=t*e,r=Xu[i];if(r===void 0&&(r=new Float32Array(i),Xu[i]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,s[a].toArray(r,o)}return r}function Be(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function Oe(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function ul(s,t){let e=qu[t];e===void 0&&(e=new Int32Array(t),qu[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function $0(s,t){let e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function Z0(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Be(e,t))return;s.uniform2fv(this.addr,t),Oe(e,t)}}function J0(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Be(e,t))return;s.uniform3fv(this.addr,t),Oe(e,t)}}function K0(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Be(e,t))return;s.uniform4fv(this.addr,t),Oe(e,t)}}function j0(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(Be(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),Oe(e,t)}else{if(Be(e,n))return;Zu.set(n),s.uniformMatrix2fv(this.addr,!1,Zu),Oe(e,n)}}function Q0(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(Be(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),Oe(e,t)}else{if(Be(e,n))return;$u.set(n),s.uniformMatrix3fv(this.addr,!1,$u),Oe(e,n)}}function tg(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(Be(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),Oe(e,t)}else{if(Be(e,n))return;Yu.set(n),s.uniformMatrix4fv(this.addr,!1,Yu),Oe(e,n)}}function eg(s,t){let e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function ng(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Be(e,t))return;s.uniform2iv(this.addr,t),Oe(e,t)}}function ig(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Be(e,t))return;s.uniform3iv(this.addr,t),Oe(e,t)}}function sg(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Be(e,t))return;s.uniform4iv(this.addr,t),Oe(e,t)}}function rg(s,t){let e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function ag(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Be(e,t))return;s.uniform2uiv(this.addr,t),Oe(e,t)}}function og(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Be(e,t))return;s.uniform3uiv(this.addr,t),Oe(e,t)}}function lg(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Be(e,t))return;s.uniform4uiv(this.addr,t),Oe(e,t)}}function cg(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(Qc.compareFunction=e.isReversedDepthBuffer()?rl:sl,r=Qc):r=hd,e.setTexture2D(t||r,i)}function hg(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||dd,i)}function ug(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||fd,i)}function dg(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||ud,i)}function fg(s){switch(s){case 5126:return $0;case 35664:return Z0;case 35665:return J0;case 35666:return K0;case 35674:return j0;case 35675:return Q0;case 35676:return tg;case 5124:case 35670:return eg;case 35667:case 35671:return ng;case 35668:case 35672:return ig;case 35669:case 35673:return sg;case 5125:return rg;case 36294:return ag;case 36295:return og;case 36296:return lg;case 35678:case 36198:case 36298:case 36306:case 35682:return cg;case 35679:case 36299:case 36307:return hg;case 35680:case 36300:case 36308:case 36293:return ug;case 36289:case 36303:case 36311:case 36292:return dg}}function pg(s,t){s.uniform1fv(this.addr,t)}function mg(s,t){let e=Ds(t,this.size,2);s.uniform2fv(this.addr,e)}function gg(s,t){let e=Ds(t,this.size,3);s.uniform3fv(this.addr,e)}function xg(s,t){let e=Ds(t,this.size,4);s.uniform4fv(this.addr,e)}function yg(s,t){let e=Ds(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function _g(s,t){let e=Ds(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function vg(s,t){let e=Ds(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function Mg(s,t){s.uniform1iv(this.addr,t)}function bg(s,t){s.uniform2iv(this.addr,t)}function Sg(s,t){s.uniform3iv(this.addr,t)}function wg(s,t){s.uniform4iv(this.addr,t)}function Eg(s,t){s.uniform1uiv(this.addr,t)}function Tg(s,t){s.uniform2uiv(this.addr,t)}function Ag(s,t){s.uniform3uiv(this.addr,t)}function Rg(s,t){s.uniform4uiv(this.addr,t)}function Cg(s,t,e){let n=this.cache,i=t.length,r=ul(e,i);Be(n,r)||(s.uniform1iv(this.addr,r),Oe(n,r));let a;this.type===s.SAMPLER_2D_SHADOW?a=Qc:a=hd;for(let o=0;o!==i;++o)e.setTexture2D(t[o]||a,r[o])}function Pg(s,t,e){let n=this.cache,i=t.length,r=ul(e,i);Be(n,r)||(s.uniform1iv(this.addr,r),Oe(n,r));for(let a=0;a!==i;++a)e.setTexture3D(t[a]||dd,r[a])}function Ig(s,t,e){let n=this.cache,i=t.length,r=ul(e,i);Be(n,r)||(s.uniform1iv(this.addr,r),Oe(n,r));for(let a=0;a!==i;++a)e.setTextureCube(t[a]||fd,r[a])}function Lg(s,t,e){let n=this.cache,i=t.length,r=ul(e,i);Be(n,r)||(s.uniform1iv(this.addr,r),Oe(n,r));for(let a=0;a!==i;++a)e.setTexture2DArray(t[a]||ud,r[a])}function Dg(s){switch(s){case 5126:return pg;case 35664:return mg;case 35665:return gg;case 35666:return xg;case 35674:return yg;case 35675:return _g;case 35676:return vg;case 5124:case 35670:return Mg;case 35667:case 35671:return bg;case 35668:case 35672:return Sg;case 35669:case 35673:return wg;case 5125:return Eg;case 36294:return Tg;case 36295:return Ag;case 36296:return Rg;case 35678:case 36198:case 36298:case 36306:case 35682:return Cg;case 35679:case 36299:case 36307:return Pg;case 35680:case 36300:case 36308:case 36293:return Ig;case 36289:case 36303:case 36311:case 36292:return Lg}}var th=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=fg(e.type)}},eh=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Dg(e.type)}},nh=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let i=this.seq;for(let r=0,a=i.length;r!==a;++r){let o=i[r];o.setValue(t,e[o.id],n)}}},Kc=/(\w+)(\])?(\[|\.)?/g;function Ju(s,t){s.seq.push(t),s.map[t.id]=t}function Fg(s,t,e){let n=s.name,i=n.length;for(Kc.lastIndex=0;;){let r=Kc.exec(n),a=Kc.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){Ju(e,c===void 0?new th(o,s,t):new eh(o,s,t));break}else{let d=e.map[o];d===void 0&&(d=new nh(o),Ju(e,d)),e=d}}}var Ls=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=t.getActiveUniform(e,a),l=t.getUniformLocation(e,o.name);Fg(o,l,this)}let i=[],r=[];for(let a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?i.push(a):r.push(a);i.length>0&&(this.seq=i.concat(r))}setValue(t,e,n,i){let r=this.map[e];r!==void 0&&r.setValue(t,n,i)}setOptional(t,e,n){let i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let r=0,a=e.length;r!==a;++r){let o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,i)}}static seqWithValue(t,e){let n=[];for(let i=0,r=t.length;i!==r;++i){let a=t[i];a.id in e&&n.push(a)}return n}};function Ku(s,t,e){let n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}var Ng=37297,Ug=0;function Bg(s,t){let e=s.split(`
`),n=[],i=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=i;a<r;a++){let o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}var ju=new Gt;function Og(s){jt._getMatrix(ju,jt.workingColorSpace,s);let t=`mat3( ${ju.elements.map(e=>e.toFixed(4))} )`;switch(jt.getTransfer(s)){case or:return[t,"LinearTransferOETF"];case ae:return[t,"sRGBTransferOETF"];default:return Ot("WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function Qu(s,t,e){let n=s.getShaderParameter(t,s.COMPILE_STATUS),r=(s.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+Bg(s.getShaderSource(t),o)}else return r}function kg(s,t){let e=Og(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var zg={[bc]:"Linear",[Sc]:"Reinhard",[wc]:"Cineon",[Fr]:"ACESFilmic",[Tc]:"AgX",[Ac]:"Neutral",[Ec]:"Custom"};function Hg(s,t){let e=zg[t];return e===void 0?(Ot("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var ol=new F;function Gg(){jt.getLuminanceCoefficients(ol);let s=ol.x.toFixed(4),t=ol.y.toFixed(4),e=ol.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Vg(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter($r).join(`
`)}function Wg(s){let t=[];for(let e in s){let n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Xg(s,t){let e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let r=s.getActiveAttrib(t,i),a=r.name,o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:s.getAttribLocation(t,a),locationSize:o}}return e}function $r(s){return s!==""}function td(s,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function ed(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var qg=/^[ \t]*#include +<([\w\d./]+)>/gm;function ih(s){return s.replace(qg,$g)}var Yg=new Map;function $g(s,t){let e=Wt[t];if(e===void 0){let n=Yg.get(t);if(n!==void 0)e=Wt[n],Ot('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return ih(e)}var Zg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function nd(s){return s.replace(Zg,Jg)}function Jg(s,t,e,n){let i="";for(let r=parseInt(t);r<parseInt(e);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function id(s){let t=`precision ${s.precision} float;
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
#define LOW_PRECISION`),t}var Kg={[Wi]:"SHADOWMAP_TYPE_PCF",[As]:"SHADOWMAP_TYPE_VSM"};function jg(s){return Kg[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Qg={[Ti]:"ENVMAP_TYPE_CUBE",[qi]:"ENVMAP_TYPE_CUBE",[Nr]:"ENVMAP_TYPE_CUBE_UV"};function tx(s){return s.envMap===!1?"ENVMAP_TYPE_CUBE":Qg[s.envMapMode]||"ENVMAP_TYPE_CUBE"}var ex={[qi]:"ENVMAP_MODE_REFRACTION"};function nx(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":ex[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}var ix={[xo]:"ENVMAP_BLENDING_MULTIPLY",[vu]:"ENVMAP_BLENDING_MIX",[Mu]:"ENVMAP_BLENDING_ADD"};function sx(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":ix[s.combine]||"ENVMAP_BLENDING_NONE"}function rx(s){let t=s.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function ax(s,t,e,n){let i=s.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,l=jg(e),c=tx(e),h=nx(e),d=sx(e),u=rx(e),f=Vg(e),m=Wg(r),x=i.createProgram(),g,p,v=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter($r).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter($r).join(`
`),p.length>0&&(p+=`
`)):(g=[id(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter($r).join(`
`),p=[id(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Rn?"#define TONE_MAPPING":"",e.toneMapping!==Rn?Wt.tonemapping_pars_fragment:"",e.toneMapping!==Rn?Hg("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Wt.colorspace_pars_fragment,kg("linearToOutputTexel",e.outputColorSpace),Gg(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter($r).join(`
`)),a=ih(a),a=td(a,e),a=ed(a,e),o=ih(o),o=td(o,e),o=ed(o,e),a=nd(a),o=nd(o),e.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,g=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",e.glslVersion===Nc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Nc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let w=v+g+a,_=v+p+o,b=Ku(i,i.VERTEX_SHADER,w),M=Ku(i,i.FRAGMENT_SHADER,_);i.attachShader(x,b),i.attachShader(x,M),e.index0AttributeName!==void 0?i.bindAttribLocation(x,0,e.index0AttributeName):e.hasPositionAttribute===!0&&i.bindAttribLocation(x,0,"position"),i.linkProgram(x);function T(P){if(s.debug.checkShaderErrors){let I=i.getProgramInfoLog(x)||"",L=i.getShaderInfoLog(b)||"",A=i.getShaderInfoLog(M)||"",N=I.trim(),G=L.trim(),z=A.trim(),H=!0,U=!0;if(i.getProgramParameter(x,i.LINK_STATUS)===!1)if(H=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,x,b,M);else{let V=Qu(i,b,"vertex"),X=Qu(i,M,"fragment");kt("WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(x,i.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+N+`
`+V+`
`+X)}else N!==""?Ot("WebGLProgram: Program Info Log:",N):(G===""||z==="")&&(U=!1);U&&(P.diagnostics={runnable:H,programLog:N,vertexShader:{log:G,prefix:g},fragmentShader:{log:z,prefix:p}})}i.deleteShader(b),i.deleteShader(M),y=new Ls(i,x),S=Xg(i,x)}let y;this.getUniforms=function(){return y===void 0&&T(this),y};let S;this.getAttributes=function(){return S===void 0&&T(this),S};let C=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=i.getProgramParameter(x,Ng)),C},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Ug++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=b,this.fragmentShader=M,this}var ox=0,sh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let i=this._getShaderCacheForMaterial(t);return i.has(e)===!1&&(i.add(e),e.usedTimes++),i.has(n)===!1&&(i.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new rh(t),e.set(t,n)),n}},rh=class{constructor(t){this.id=ox++,this.code=t,this.usedTimes=0}};function lx(s){return s===Ri||s===Hr||s===Gr}function cx(s,t,e,n,i,r){let a=new ur,o=new sh,l=new Set,c=[],h=new Map,d=n.logarithmicDepthBuffer,u=n.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(y){return l.add(y),y===0?"uv":`uv${y}`}function x(y,S,C,P,I,L){let A=P.fog,N=I.geometry,G=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?P.environment:null,z=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap,H=t.get(y.envMap||G,z),U=H&&H.mapping===Nr?H.image.height:null,V=f[y.type];y.precision!==null&&(u=n.getMaxPrecision(y.precision),u!==y.precision&&Ot("WebGLProgram.getParameters:",y.precision,"not supported, using",u,"instead."));let X=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,rt=X!==void 0?X.length:0,st=0;N.morphAttributes.position!==void 0&&(st=1),N.morphAttributes.normal!==void 0&&(st=2),N.morphAttributes.color!==void 0&&(st=3);let St,bt,At,q;if(V){let he=qn[V];St=he.vertexShader,bt=he.fragmentShader}else{St=y.vertexShader,bt=y.fragmentShader;let he=o.getVertexShaderStage(y),ne=o.getFragmentShaderStage(y);o.update(y,he,ne),At=he.id,q=ne.id}let j=s.getRenderTarget(),lt=s.state.buffers.depth.getReversed(),_t=I.isInstancedMesh===!0,mt=I.isBatchedMesh===!0,zt=!!y.map,Se=!!y.matcap,Xt=!!H,te=!!y.aoMap,ce=!!y.lightMap,qt=!!y.bumpMap&&y.wireframe===!1,se=!!y.normalMap,Ae=!!y.displacementMap,we=!!y.emissiveMap,ue=!!y.metalnessMap,ve=!!y.roughnessMap,k=y.anisotropy>0,De=y.clearcoat>0,ee=y.dispersion>0,D=y.retroreflectivity>0,E=y.iridescence>0,W=y.sheen>0,Z=y.transmission>0,Q=k&&!!y.anisotropyMap,ct=De&&!!y.clearcoatMap,dt=De&&!!y.clearcoatNormalMap,tt=De&&!!y.clearcoatRoughnessMap,nt=E&&!!y.iridescenceMap,ft=E&&!!y.iridescenceThicknessMap,Lt=W&&!!y.sheenColorMap,K=W&&!!y.sheenRoughnessMap,ot=!!y.specularMap,vt=!!y.specularColorMap,Dt=!!y.specularIntensityMap,Bt=Z&&!!y.transmissionMap,O=Z&&!!y.thicknessMap,ut=!!y.gradientMap,et=!!y.alphaMap,pt=y.alphaTest>0,Mt=!!y.alphaHash,it=!!y.extensions,Nt=Rn;y.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(Nt=s.toneMapping);let wt={shaderID:V,shaderType:y.type,shaderName:y.name,vertexShader:St,fragmentShader:bt,defines:y.defines,customVertexShaderID:At,customFragmentShaderID:q,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:u,batching:mt,batchingColor:mt&&I._colorsTexture!==null,instancing:_t,instancingColor:_t&&I.instanceColor!==null,instancingMorph:_t&&I.morphTexture!==null,outputColorSpace:j===null?s.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:jt.workingColorSpace,alphaToCoverage:!!y.alphaToCoverage,map:zt,matcap:Se,envMap:Xt,envMapMode:Xt&&H.mapping,envMapCubeUVHeight:U,aoMap:te,lightMap:ce,bumpMap:qt,normalMap:se,displacementMap:Ae,emissiveMap:we,normalMapObjectSpace:se&&y.normalMapType===wu,normalMapTangentSpace:se&&y.normalMapType===Vr,packedNormalMap:se&&y.normalMapType===Vr&&lx(y.normalMap.format),metalnessMap:ue,roughnessMap:ve,anisotropy:k,anisotropyMap:Q,clearcoat:De,clearcoatMap:ct,clearcoatNormalMap:dt,clearcoatRoughnessMap:tt,dispersion:ee,retroreflection:D,iridescence:E,iridescenceMap:nt,iridescenceThicknessMap:ft,sheen:W,sheenColorMap:Lt,sheenRoughnessMap:K,specularMap:ot,specularColorMap:vt,specularIntensityMap:Dt,transmission:Z,transmissionMap:Bt,thicknessMap:O,gradientMap:ut,opaque:y.transparent===!1&&y.blending===Ei&&y.alphaToCoverage===!1,alphaMap:et,alphaTest:pt,alphaHash:Mt,combine:y.combine,mapUv:zt&&m(y.map.channel),aoMapUv:te&&m(y.aoMap.channel),lightMapUv:ce&&m(y.lightMap.channel),bumpMapUv:qt&&m(y.bumpMap.channel),normalMapUv:se&&m(y.normalMap.channel),displacementMapUv:Ae&&m(y.displacementMap.channel),emissiveMapUv:we&&m(y.emissiveMap.channel),metalnessMapUv:ue&&m(y.metalnessMap.channel),roughnessMapUv:ve&&m(y.roughnessMap.channel),anisotropyMapUv:Q&&m(y.anisotropyMap.channel),clearcoatMapUv:ct&&m(y.clearcoatMap.channel),clearcoatNormalMapUv:dt&&m(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:tt&&m(y.clearcoatRoughnessMap.channel),iridescenceMapUv:nt&&m(y.iridescenceMap.channel),iridescenceThicknessMapUv:ft&&m(y.iridescenceThicknessMap.channel),sheenColorMapUv:Lt&&m(y.sheenColorMap.channel),sheenRoughnessMapUv:K&&m(y.sheenRoughnessMap.channel),specularMapUv:ot&&m(y.specularMap.channel),specularColorMapUv:vt&&m(y.specularColorMap.channel),specularIntensityMapUv:Dt&&m(y.specularIntensityMap.channel),transmissionMapUv:Bt&&m(y.transmissionMap.channel),thicknessMapUv:O&&m(y.thicknessMap.channel),alphaMapUv:et&&m(y.alphaMap.channel),vertexTangents:!!N.attributes.tangent&&(se||k),vertexNormals:!!N.attributes.normal,vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,pointsUvs:I.isPoints===!0&&!!N.attributes.uv&&(zt||et),fog:!!A,useFog:y.fog===!0,fogExp2:!!A&&A.isFogExp2,flatShading:y.wireframe===!1&&(y.flatShading===!0||N.attributes.normal===void 0&&se===!1&&(y.isMeshLambertMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isMeshPhysicalMaterial)),sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:lt,skinning:I.isSkinnedMesh===!0,hasPositionAttribute:N.attributes.position!==void 0,morphTargets:N.morphAttributes.position!==void 0,morphNormals:N.morphAttributes.normal!==void 0,morphColors:N.morphAttributes.color!==void 0,morphTargetsCount:rt,morphTextureStride:st,numSunLights:S.sun.length,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numSunLightShadows:S.sunShadowMap.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numLightProbeGrids:L.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:y.dithering,shadowMapEnabled:s.shadowMap.enabled&&C.length>0,shadowMapType:s.shadowMap.type,toneMapping:Nt,decodeVideoTexture:zt&&y.map.isVideoTexture===!0&&jt.getTransfer(y.map.colorSpace)===ae,decodeVideoTextureEmissive:we&&y.emissiveMap.isVideoTexture===!0&&jt.getTransfer(y.emissiveMap.colorSpace)===ae,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===We,flipSided:y.side===Ue,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:it&&y.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(it&&y.extensions.multiDraw===!0||mt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return wt.vertexUv1s=l.has(1),wt.vertexUv2s=l.has(2),wt.vertexUv3s=l.has(3),l.clear(),wt}function g(y){let S=[];if(y.shaderID?S.push(y.shaderID):(S.push(y.customVertexShaderID),S.push(y.customFragmentShaderID)),y.defines!==void 0)for(let C in y.defines)S.push(C),S.push(y.defines[C]);return y.isRawShaderMaterial===!1&&(p(S,y),v(S,y),S.push(s.outputColorSpace)),S.push(y.customProgramCacheKey),S.join()}function p(y,S){y.push(S.precision),y.push(S.outputColorSpace),y.push(S.envMapMode),y.push(S.envMapCubeUVHeight),y.push(S.mapUv),y.push(S.alphaMapUv),y.push(S.lightMapUv),y.push(S.aoMapUv),y.push(S.bumpMapUv),y.push(S.normalMapUv),y.push(S.displacementMapUv),y.push(S.emissiveMapUv),y.push(S.metalnessMapUv),y.push(S.roughnessMapUv),y.push(S.anisotropyMapUv),y.push(S.clearcoatMapUv),y.push(S.clearcoatNormalMapUv),y.push(S.clearcoatRoughnessMapUv),y.push(S.iridescenceMapUv),y.push(S.iridescenceThicknessMapUv),y.push(S.sheenColorMapUv),y.push(S.sheenRoughnessMapUv),y.push(S.specularMapUv),y.push(S.specularColorMapUv),y.push(S.specularIntensityMapUv),y.push(S.transmissionMapUv),y.push(S.thicknessMapUv),y.push(S.combine),y.push(S.fogExp2),y.push(S.sizeAttenuation),y.push(S.morphTargetsCount),y.push(S.morphAttributeCount),y.push(S.numSunLights),y.push(S.numDirLights),y.push(S.numPointLights),y.push(S.numSpotLights),y.push(S.numSpotLightMaps),y.push(S.numHemiLights),y.push(S.numRectAreaLights),y.push(S.numSunLightShadows),y.push(S.numDirLightShadows),y.push(S.numPointLightShadows),y.push(S.numSpotLightShadows),y.push(S.numSpotLightShadowsWithMaps),y.push(S.numLightProbes),y.push(S.shadowMapType),y.push(S.toneMapping),y.push(S.numClippingPlanes),y.push(S.numClipIntersection),y.push(S.depthPacking)}function v(y,S){a.disableAll(),S.instancing&&a.enable(0),S.instancingColor&&a.enable(1),S.instancingMorph&&a.enable(2),S.matcap&&a.enable(3),S.envMap&&a.enable(4),S.normalMapObjectSpace&&a.enable(5),S.normalMapTangentSpace&&a.enable(6),S.clearcoat&&a.enable(7),S.iridescence&&a.enable(8),S.alphaTest&&a.enable(9),S.vertexColors&&a.enable(10),S.vertexAlphas&&a.enable(11),S.vertexUv1s&&a.enable(12),S.vertexUv2s&&a.enable(13),S.vertexUv3s&&a.enable(14),S.vertexTangents&&a.enable(15),S.anisotropy&&a.enable(16),S.alphaHash&&a.enable(17),S.batching&&a.enable(18),S.dispersion&&a.enable(19),S.retroreflection&&a.enable(24),S.batchingColor&&a.enable(20),S.gradientMap&&a.enable(21),S.packedNormalMap&&a.enable(22),S.vertexNormals&&a.enable(23),y.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reversedDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),S.numLightProbeGrids>0&&a.enable(22),S.hasPositionAttribute&&a.enable(23),y.push(a.mask)}function w(y){let S=f[y.type],C;if(S){let P=qn[S];C=Ou.clone(P.uniforms)}else C=y.uniforms;return C}function _(y,S){let C=h.get(S);return C!==void 0?++C.usedTimes:(C=new ax(s,S,y,i),c.push(C),h.set(S,C)),C}function b(y){if(--y.usedTimes===0){let S=c.indexOf(y);c[S]=c[c.length-1],c.pop(),h.delete(y.cacheKey),y.destroy()}}function M(y){o.remove(y)}function T(){o.dispose()}return{getParameters:x,getProgramCacheKey:g,getUniforms:w,acquireProgram:_,releaseProgram:b,releaseShaderCache:M,programs:c,dispose:T}}function hx(){let s=new WeakMap;function t(a){return s.has(a)}function e(a){let o=s.get(a);return o===void 0&&(o={},s.set(a,o)),o}function n(a){s.delete(a)}function i(a,o,l){s.get(a)[o]=l}function r(){s=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:r}}function ux(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.materialVariant!==t.materialVariant?s.materialVariant-t.materialVariant:s.z!==t.z?s.z-t.z:s.id-t.id}function sd(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function rd(){let s=[],t=0,e=[],n=[],i=[];function r(){t=0,e.length=0,n.length=0,i.length=0}function a(u){let f=0;return u.isInstancedMesh&&(f+=2),u.isSkinnedMesh&&(f+=1),f}function o(u,f,m,x,g,p){let v=s[t];return v===void 0?(v={id:u.id,object:u,geometry:f,material:m,materialVariant:a(u),groupOrder:x,renderOrder:u.renderOrder,z:g,group:p},s[t]=v):(v.id=u.id,v.object=u,v.geometry=f,v.material=m,v.materialVariant=a(u),v.groupOrder=x,v.renderOrder=u.renderOrder,v.z=g,v.group=p),t++,v}function l(u,f,m,x,g,p,v){v.reversedDepth===!0&&(g=-g);let w=o(u,f,m,x,g,p);m.transmission>0?n.push(w):m.transparent===!0?i.push(w):e.push(w)}function c(u,f,m,x,g,p){let v=o(u,f,m,x,g,p);m.transmission>0?n.unshift(v):m.transparent===!0?i.unshift(v):e.unshift(v)}function h(u,f){e.length>1&&e.sort(u||ux),n.length>1&&n.sort(f||sd),i.length>1&&i.sort(f||sd)}function d(){for(let u=t,f=s.length;u<f;u++){let m=s[u];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:n,transparent:i,init:r,push:l,unshift:c,finish:d,sort:h}}function dx(){let s=new WeakMap;function t(n,i){let r=s.get(n),a;return r===void 0?(a=new rd,s.set(n,[a])):i>=r.length?(a=new rd,r.push(a)):a=r[i],a}function e(){s=new WeakMap}return{get:t,dispose:e}}function fx(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new F,color:new ht};break;case"SpotLight":e={position:new F,direction:new F,color:new ht,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new F,color:new ht,distance:0,decay:0};break;case"HemisphereLight":e={direction:new F,skyColor:new ht,groundColor:new ht};break;case"RectAreaLight":e={color:new ht,position:new F,halfWidth:new F,halfHeight:new F};break}return s[t.id]=e,e}}}function px(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ft};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ft};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ft,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}var mx=0;function gx(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function xx(s){let t=new fx,e=px(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new F);let i=new F,r=new Qt,a=new Qt;function o(c){let h=0,d=0,u=0;for(let I=0;I<9;I++)n.probe[I].set(0,0,0);let f=0,m=0,x=0,g=0,p=0,v=0,w=0,_=0,b=0,M=0,T=0,y=0,S=0,C=0;c.sort(gx);for(let I=0,L=c.length;I<L;I++){let A=c[I],N=A.color,G=A.intensity,z=A.distance,H=null;if(A.shadow&&A.shadow.map&&(A.shadow.map.texture.format===Ri?H=A.shadow.map.texture:H=A.shadow.map.depthTexture||A.shadow.map.texture),A.isAmbientLight)h+=N.r*G,d+=N.g*G,u+=N.b*G;else if(A.isLightProbe){for(let U=0;U<9;U++)n.probe[U].addScaledVector(A.sh.coefficients[U],G);C++}else if(A.isSunLight){let U=t.get(A);if(U.color.copy(A.color).multiplyScalar(A.intensity),A.castShadow){let V=A.shadow,X=e.get(A);X.shadowIntensity=V.intensity,X.shadowBias=V.bias,X.shadowNormalBias=V.normalBias,X.shadowRadius=V.radius,X.shadowMapSize.copy(V.mapSize).multiply(V.getFrameExtents()),n.sunShadow[m]=X,n.sunShadowMap[m]=H;let rt=V.getViewportCount();for(let st=0;st<rt;st++)n.sunShadowMatrix[x+st]=V.getMatrix(st),n.sunShadowCascade[x+st]=V._cascadeData[st];x+=rt,m++}n.sun[f]=U,f++}else if(A.isDirectionalLight){let U=t.get(A);if(U.color.copy(A.color).multiplyScalar(A.intensity),A.castShadow){let V=A.shadow,X=e.get(A);X.shadowIntensity=V.intensity,X.shadowBias=V.bias,X.shadowNormalBias=V.normalBias,X.shadowRadius=V.radius,X.shadowMapSize=V.mapSize,n.directionalShadow[g]=X,n.directionalShadowMap[g]=H,n.directionalShadowMatrix[g]=A.shadow.matrix,b++}n.directional[g]=U,g++}else if(A.isSpotLight){let U=t.get(A);U.position.setFromMatrixPosition(A.matrixWorld),U.color.copy(N).multiplyScalar(G),U.distance=z,U.coneCos=Math.cos(A.angle),U.penumbraCos=Math.cos(A.angle*(1-A.penumbra)),U.decay=A.decay,n.spot[v]=U;let V=A.shadow;if(A.map&&(n.spotLightMap[y]=A.map,y++,V.updateMatrices(A),A.castShadow&&S++),n.spotLightMatrix[v]=V.matrix,A.castShadow){let X=e.get(A);X.shadowIntensity=V.intensity,X.shadowBias=V.bias,X.shadowNormalBias=V.normalBias,X.shadowRadius=V.radius,X.shadowMapSize=V.mapSize,n.spotShadow[v]=X,n.spotShadowMap[v]=H,T++}v++}else if(A.isRectAreaLight){let U=t.get(A);U.color.copy(N).multiplyScalar(G),U.halfWidth.set(A.width*.5,0,0),U.halfHeight.set(0,A.height*.5,0),n.rectArea[w]=U,w++}else if(A.isPointLight){let U=t.get(A);if(U.color.copy(A.color).multiplyScalar(A.intensity),U.distance=A.distance,U.decay=A.decay,A.castShadow){let V=A.shadow,X=e.get(A);X.shadowIntensity=V.intensity,X.shadowBias=V.bias,X.shadowNormalBias=V.normalBias,X.shadowRadius=V.radius,X.shadowMapSize=V.mapSize,X.shadowCameraNear=V.camera.near,X.shadowCameraFar=V.camera.far,n.pointShadow[p]=X,n.pointShadowMap[p]=H,n.pointShadowMatrix[p]=A.shadow.matrix,M++}n.point[p]=U,p++}else if(A.isHemisphereLight){let U=t.get(A);U.skyColor.copy(A.color).multiplyScalar(G),U.groundColor.copy(A.groundColor).multiplyScalar(G),n.hemi[_]=U,_++}}w>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=yt.LTC_FLOAT_1,n.rectAreaLTC2=yt.LTC_FLOAT_2):(n.rectAreaLTC1=yt.LTC_HALF_1,n.rectAreaLTC2=yt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=u;let P=n.hash;(P.sunLength!==f||P.directionalLength!==g||P.pointLength!==p||P.spotLength!==v||P.rectAreaLength!==w||P.hemiLength!==_||P.numSunShadows!==m||P.numDirectionalShadows!==b||P.numPointShadows!==M||P.numSpotShadows!==T||P.numSpotMaps!==y||P.numLightProbes!==C)&&(n.sun.length=f,n.directional.length=g,n.spot.length=v,n.rectArea.length=w,n.point.length=p,n.hemi.length=_,n.sunShadow.length=m,n.sunShadowMap.length=m,n.sunShadowMatrix.length=x,n.sunShadowCascade.length=x,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.directionalShadowMatrix.length=b,n.pointShadow.length=M,n.pointShadowMap.length=M,n.pointShadowMatrix.length=M,n.spotShadow.length=T,n.spotShadowMap.length=T,n.spotLightMatrix.length=T+y-S,n.spotLightMap.length=y,n.numSpotLightShadowsWithMaps=S,n.numLightProbes=C,P.sunLength=f,P.directionalLength=g,P.pointLength=p,P.spotLength=v,P.rectAreaLength=w,P.hemiLength=_,P.numSunShadows=m,P.numDirectionalShadows=b,P.numPointShadows=M,P.numSpotShadows=T,P.numSpotMaps=y,P.numLightProbes=C,n.version=mx++)}function l(c,h){let d=0,u=0,f=0,m=0,x=0,g=0,p=h.matrixWorldInverse;for(let v=0,w=c.length;v<w;v++){let _=c[v];if(_.isSunLight){let b=n.sun[d];b.direction.setFromMatrixPosition(_.matrixWorld),b.direction.transformDirection(p),d++}else if(_.isDirectionalLight){let b=n.directional[u];b.direction.setFromMatrixPosition(_.matrixWorld),i.setFromMatrixPosition(_.target.matrixWorld),b.direction.sub(i),b.direction.transformDirection(p),u++}else if(_.isSpotLight){let b=n.spot[m];b.position.setFromMatrixPosition(_.matrixWorld),b.position.applyMatrix4(p),b.direction.setFromMatrixPosition(_.matrixWorld),i.setFromMatrixPosition(_.target.matrixWorld),b.direction.sub(i),b.direction.transformDirection(p),m++}else if(_.isRectAreaLight){let b=n.rectArea[x];b.position.setFromMatrixPosition(_.matrixWorld),b.position.applyMatrix4(p),a.identity(),r.copy(_.matrixWorld),r.premultiply(p),a.extractRotation(r),b.halfWidth.set(_.width*.5,0,0),b.halfHeight.set(0,_.height*.5,0),b.halfWidth.applyMatrix4(a),b.halfHeight.applyMatrix4(a),x++}else if(_.isPointLight){let b=n.point[f];b.position.setFromMatrixPosition(_.matrixWorld),b.position.applyMatrix4(p),f++}else if(_.isHemisphereLight){let b=n.hemi[g];b.direction.setFromMatrixPosition(_.matrixWorld),b.direction.transformDirection(p),g++}}}return{setup:o,setupView:l,state:n}}function ad(s){let t=new xx(s),e=[],n=[],i=[];function r(u){d.camera=u,e.length=0,n.length=0,i.length=0}function a(u){e.push(u)}function o(u){n.push(u)}function l(u){i.push(u)}function c(){t.setup(e)}function h(u){t.setupView(e,u)}let d={lightsArray:e,shadowsArray:n,lightProbeGridArray:i,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:d,setupLights:c,setupLightsView:h,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function yx(s){let t=new WeakMap;function e(i,r=0){let a=t.get(i),o;return a===void 0?(o=new ad(s),t.set(i,[o])):r>=a.length?(o=new ad(s),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}var _x=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,vx=`uniform sampler2D shadow_pass;
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
}`,Mx=[new F(1,0,0),new F(-1,0,0),new F(0,1,0),new F(0,-1,0),new F(0,0,1),new F(0,0,-1)],bx=[new F(0,-1,0),new F(0,-1,0),new F(0,0,1),new F(0,0,-1),new F(0,-1,0),new F(0,-1,0)],od=new Qt,Yr=new F,jc=new F;function Sx(s,t,e){let n=new Ss,i=new Ft,r=new Ft,a=new Me,o=new eo,l=new no,c={},h=e.maxTextureSize,d={[Gn]:Ue,[Ue]:Gn,[We]:We},u=new Ve({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ft},radius:{value:4}},vertexShader:_x,fragmentShader:vx}),f=u.clone();f.defines.HORIZONTAL_PASS=1;let m=new oe;m.setAttribute("position",new Jt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new Ct(m,u),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Wi;let p=this.type;this.render=function(M,T,y){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||M.length===0)return;this.type===eu&&(Ot("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Wi);let S=s.getRenderTarget(),C=s.getActiveCubeFace(),P=s.getActiveMipmapLevel(),I=s.state;I.setBlending(Vn),I.buffers.depth.getReversed()===!0?I.buffers.color.setClear(0,0,0,0):I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);let L=p!==this.type;L&&T.traverse(function(A){A.material&&(Array.isArray(A.material)?A.material.forEach(N=>N.needsUpdate=!0):A.material.needsUpdate=!0)});for(let A=0,N=M.length;A<N;A++){let G=M[A],z=G.shadow;if(z===void 0){Ot("WebGLShadowMap:",G,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;i.copy(z.mapSize);let H=z.getFrameExtents();i.multiply(H),r.copy(z.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/H.x),i.x=r.x*H.x,z.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/H.y),i.y=r.y*H.y,z.mapSize.y=r.y));let U=s.state.buffers.depth.getReversed();if(z.camera._reversedDepth=U,z.map===null||L===!0){if(z.map!==null&&(z.map.depthTexture!==null&&(z.map.depthTexture.dispose(),z.map.depthTexture=null),z.map.dispose()),this.type===As){if(G.isPointLight){Ot("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}z.map=new cn(i.x,i.y,{format:Ri,type:Pn,minFilter:Ze,magFilter:Ze,generateMipmaps:!1}),z.map.texture.name=G.name+".shadowMap",z.map.depthTexture=new vi(i.x,i.y,vn),z.map.depthTexture.name=G.name+".shadowMapDepth",z.map.depthTexture.format=Bn,z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=Ge,z.map.depthTexture.magFilter=Ge}else G.isPointLight?(z.map=new ll(i.x),z.map.depthTexture=new Xa(i.x,Cn)):(z.map=new cn(i.x,i.y),z.map.depthTexture=new vi(i.x,i.y,Cn)),z.map.depthTexture.name=G.name+".shadowMap",z.map.depthTexture.format=Bn,this.type===Wi?(z.map.depthTexture.compareFunction=U?rl:sl,z.map.depthTexture.minFilter=Ze,z.map.depthTexture.magFilter=Ze):(z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=Ge,z.map.depthTexture.magFilter=Ge);z.camera.updateProjectionMatrix()}z.map.isWebGLCubeRenderTarget!==!0&&(z.map.width!==i.x||z.map.height!==i.y)&&z.map.setSize(i.x,i.y);let V=z.map.isWebGLCubeRenderTarget?6:z.getViewportCount();G.isPointLight!==!0&&z.updateMatrices(G,y);for(let X=0;X<V;X++){let rt=z.getCamera(X);if(G.isPointLight){let st=z.camera,St=z.matrix,bt=G.distance||st.far;bt!==st.far&&(st.far=bt,st.updateProjectionMatrix()),Yr.setFromMatrixPosition(G.matrixWorld),st.position.copy(Yr),jc.copy(st.position),jc.add(Mx[X]),st.up.copy(bx[X]),st.lookAt(jc),st.updateMatrixWorld(),St.makeTranslation(-Yr.x,-Yr.y,-Yr.z),od.multiplyMatrices(st.projectionMatrix,st.matrixWorldInverse),z._frustum.setFromProjectionMatrix(od,st.coordinateSystem,st.reversedDepth)}if(z.map.isWebGLCubeRenderTarget)s.setRenderTarget(z.map,X),s.clear();else{X===0&&(s.setRenderTarget(z.map),s.clear());let st=z.getViewport(X);a.set(r.x*st.x,r.y*st.y,r.x*st.z,r.y*st.w),I.viewport(a)}n=z.getFrustum(X),_(T,y,rt,G,this.type)}z.isPointLightShadow!==!0&&this.type===As&&v(z,y),z.needsUpdate=!1}p=this.type,g.needsUpdate=!1,s.setRenderTarget(S,C,P)};function v(M,T){let y=t.update(x);u.defines.VSM_SAMPLES!==M.blurSamples&&(u.defines.VSM_SAMPLES=M.blurSamples,f.defines.VSM_SAMPLES=M.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),M.mapPass===null?M.mapPass=new cn(i.x,i.y,{format:Ri,type:Pn}):(M.mapPass.width!==M.map.width||M.mapPass.height!==M.map.height)&&M.mapPass.setSize(M.map.width,M.map.height),u.uniforms.shadow_pass.value=M.map.depthTexture,u.uniforms.resolution.value.set(M.map.width,M.map.height),u.uniforms.radius.value=M.radius,s.setRenderTarget(M.mapPass),s.clear(),s.renderBufferDirect(T,null,y,u,x,null),f.uniforms.shadow_pass.value=M.mapPass.texture,f.uniforms.resolution.value.set(M.map.width,M.map.height),f.uniforms.radius.value=M.radius,s.setRenderTarget(M.map),s.clear(),s.renderBufferDirect(T,null,y,f,x,null)}function w(M,T,y,S){let C=null,P=y.isPointLight===!0?M.customDistanceMaterial:M.customDepthMaterial;if(P!==void 0)C=P;else if(C=y.isPointLight===!0?l:o,s.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0||T.alphaToCoverage===!0){let I=C.uuid,L=T.uuid,A=c[I];A===void 0&&(A={},c[I]=A);let N=A[L];N===void 0&&(N=C.clone(),A[L]=N,T.addEventListener("dispose",b)),C=N}if(C.visible=T.visible,C.wireframe=T.wireframe,S===As?C.side=T.shadowSide!==null?T.shadowSide:T.side:C.side=T.shadowSide!==null?T.shadowSide:d[T.side],C.alphaMap=T.alphaMap,C.alphaTest=T.alphaToCoverage===!0?.5:T.alphaTest,C.map=T.map,C.clipShadows=T.clipShadows,C.clippingPlanes=T.clippingPlanes,C.clipIntersection=T.clipIntersection,C.displacementMap=T.displacementMap,C.displacementScale=T.displacementScale,C.displacementBias=T.displacementBias,C.wireframeLinewidth=T.wireframeLinewidth,C.linewidth=T.linewidth,y.isPointLight===!0&&C.isMeshDistanceMaterial===!0){let I=s.properties.get(C);I.light=y}return C}function _(M,T,y,S,C){if(M.visible===!1)return;if(M.layers.test(T.layers)&&(M.isMesh||M.isLine||M.isPoints)&&(M.castShadow||M.receiveShadow&&C===As)&&(!M.frustumCulled||M.intersectsFrustum(n))){M.modelViewMatrix.multiplyMatrices(y.matrixWorldInverse,M.matrixWorld);let L=t.update(M),A=M.material;if(Array.isArray(A)){let N=L.groups;for(let G=0,z=N.length;G<z;G++){let H=N[G],U=A[H.materialIndex];if(U&&U.visible){let V=w(M,U,S,C);M.onBeforeShadow(s,M,T,y,L,V,H),s.renderBufferDirect(y,null,L,V,M,H),M.onAfterShadow(s,M,T,y,L,V,H)}}}else if(A.visible){let N=w(M,A,S,C);M.onBeforeShadow(s,M,T,y,L,N,null),s.renderBufferDirect(y,null,L,N,M,null),M.onAfterShadow(s,M,T,y,L,N,null)}}let I=M.children;for(let L=0,A=I.length;L<A;L++)_(I[L],T,y,S,C)}function b(M){M.target.removeEventListener("dispose",b);for(let y in c){let S=c[y],C=M.target.uuid;C in S&&(S[C].dispose(),delete S[C])}}}function wx(s,t){function e(){let O=!1,ut=new Me,et=null,pt=new Me(0,0,0,0);return{setMask:function(Mt){et!==Mt&&!O&&(s.colorMask(Mt,Mt,Mt,Mt),et=Mt)},setLocked:function(Mt){O=Mt},setClear:function(Mt,it,Nt,wt,he){he===!0&&(Mt*=wt,it*=wt,Nt*=wt),ut.set(Mt,it,Nt,wt),pt.equals(ut)===!1&&(s.clearColor(Mt,it,Nt,wt),pt.copy(ut))},reset:function(){O=!1,et=null,pt.set(-1,0,0,0)}}}function n(){let O=!1,ut=!1,et=null,pt=null,Mt=null;return{setReversed:function(it){if(ut!==it){let Nt=t.get("EXT_clip_control");it?Nt.clipControlEXT(Nt.LOWER_LEFT_EXT,Nt.ZERO_TO_ONE_EXT):Nt.clipControlEXT(Nt.LOWER_LEFT_EXT,Nt.NEGATIVE_ONE_TO_ONE_EXT),ut=it;let wt=Mt;Mt=null,this.setClear(wt)}},getReversed:function(){return ut},setTest:function(it){it?j(s.DEPTH_TEST):lt(s.DEPTH_TEST)},setMask:function(it){et!==it&&!O&&(s.depthMask(it),et=it)},setFunc:function(it){if(ut&&(it=Uu[it]),pt!==it){switch(it){case La:s.depthFunc(s.NEVER);break;case Da:s.depthFunc(s.ALWAYS);break;case Fa:s.depthFunc(s.LESS);break;case gs:s.depthFunc(s.LEQUAL);break;case Na:s.depthFunc(s.EQUAL);break;case Ua:s.depthFunc(s.GEQUAL);break;case Ba:s.depthFunc(s.GREATER);break;case Oa:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}pt=it}},setLocked:function(it){O=it},setClear:function(it){Mt!==it&&(Mt=it,ut&&(it=1-it),s.clearDepth(it))},reset:function(){O=!1,et=null,pt=null,Mt=null,ut=!1}}}function i(){let O=!1,ut=null,et=null,pt=null,Mt=null,it=null,Nt=null,wt=null,he=null;return{setTest:function(ne){O||(ne?j(s.STENCIL_TEST):lt(s.STENCIL_TEST))},setMask:function(ne){ut!==ne&&!O&&(s.stencilMask(ne),ut=ne)},setFunc:function(ne,ke,gn){(et!==ne||pt!==ke||Mt!==gn)&&(s.stencilFunc(ne,ke,gn),et=ne,pt=ke,Mt=gn)},setOp:function(ne,ke,gn){(it!==ne||Nt!==ke||wt!==gn)&&(s.stencilOp(ne,ke,gn),it=ne,Nt=ke,wt=gn)},setLocked:function(ne){O=ne},setClear:function(ne){he!==ne&&(s.clearStencil(ne),he=ne)},reset:function(){O=!1,ut=null,et=null,pt=null,Mt=null,it=null,Nt=null,wt=null,he=null}}}let r=new e,a=new n,o=new i,l=new WeakMap,c=new WeakMap,h={},d={},u={},f=new WeakMap,m=[],x=null,g=!1,p=null,v=null,w=null,_=null,b=null,M=null,T=null,y=new ht(0,0,0),S=0,C=!1,P=null,I=null,L=null,A=null,N=null,G=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS),z=!1,H=0,U=s.getParameter(s.VERSION);U.indexOf("WebGL")!==-1?(H=parseFloat(/^WebGL (\d)/.exec(U)[1]),z=H>=1):U.indexOf("OpenGL ES")!==-1&&(H=parseFloat(/^OpenGL ES (\d)/.exec(U)[1]),z=H>=2);let V=null,X={},rt=s.getParameter(s.SCISSOR_BOX),st=s.getParameter(s.VIEWPORT),St=new Me().fromArray(rt),bt=new Me().fromArray(st);function At(O,ut,et,pt){let Mt=new Uint8Array(4),it=s.createTexture();s.bindTexture(O,it),s.texParameteri(O,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(O,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Nt=0;Nt<et;Nt++)O===s.TEXTURE_3D||O===s.TEXTURE_2D_ARRAY?s.texImage3D(ut,0,s.RGBA,1,1,pt,0,s.RGBA,s.UNSIGNED_BYTE,Mt):s.texImage2D(ut+Nt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Mt);return it}let q={};q[s.TEXTURE_2D]=At(s.TEXTURE_2D,s.TEXTURE_2D,1),q[s.TEXTURE_CUBE_MAP]=At(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),q[s.TEXTURE_2D_ARRAY]=At(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),q[s.TEXTURE_3D]=At(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),j(s.DEPTH_TEST),a.setFunc(gs),qt(!1),se(xc),j(s.CULL_FACE),te(Vn);function j(O){h[O]!==!0&&(s.enable(O),h[O]=!0)}function lt(O){h[O]!==!1&&(s.disable(O),h[O]=!1)}function _t(O,ut){return u[O]!==ut?(s.bindFramebuffer(O,ut),u[O]=ut,O===s.DRAW_FRAMEBUFFER&&(u[s.FRAMEBUFFER]=ut),O===s.FRAMEBUFFER&&(u[s.DRAW_FRAMEBUFFER]=ut),!0):!1}function mt(O,ut){let et=m,pt=!1;if(O){et=f.get(ut),et===void 0&&(et=[],f.set(ut,et));let Mt=O.textures;if(et.length!==Mt.length||et[0]!==s.COLOR_ATTACHMENT0){for(let it=0,Nt=Mt.length;it<Nt;it++)et[it]=s.COLOR_ATTACHMENT0+it;et.length=Mt.length,pt=!0}}else et[0]!==s.BACK&&(et[0]=s.BACK,pt=!0);pt&&s.drawBuffers(et)}function zt(O){return x!==O?(s.useProgram(O),x=O,!0):!1}let Se={[Xi]:s.FUNC_ADD,[iu]:s.FUNC_SUBTRACT,[su]:s.FUNC_REVERSE_SUBTRACT};Se[ru]=s.MIN,Se[au]=s.MAX;let Xt={[ou]:s.ZERO,[lu]:s.ONE,[cu]:s.SRC_COLOR,[vc]:s.SRC_ALPHA,[mu]:s.SRC_ALPHA_SATURATE,[fu]:s.DST_COLOR,[uu]:s.DST_ALPHA,[hu]:s.ONE_MINUS_SRC_COLOR,[Mc]:s.ONE_MINUS_SRC_ALPHA,[pu]:s.ONE_MINUS_DST_COLOR,[du]:s.ONE_MINUS_DST_ALPHA,[gu]:s.CONSTANT_COLOR,[xu]:s.ONE_MINUS_CONSTANT_COLOR,[yu]:s.CONSTANT_ALPHA,[_u]:s.ONE_MINUS_CONSTANT_ALPHA};function te(O,ut,et,pt,Mt,it,Nt,wt,he,ne){if(O===Vn){g===!0&&(lt(s.BLEND),g=!1);return}if(g===!1&&(j(s.BLEND),g=!0),O!==nu){if(O!==p||ne!==C){if((v!==Xi||b!==Xi)&&(s.blendEquation(s.FUNC_ADD),v=Xi,b=Xi),ne)switch(O){case Ei:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Dr:s.blendFunc(s.ONE,s.ONE);break;case yc:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case _c:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:kt("WebGLState: Invalid blending: ",O);break}else switch(O){case Ei:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Dr:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case yc:kt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case _c:kt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:kt("WebGLState: Invalid blending: ",O);break}w=null,_=null,M=null,T=null,y.set(0,0,0),S=0,p=O,C=ne}return}Mt=Mt||ut,it=it||et,Nt=Nt||pt,(ut!==v||Mt!==b)&&(s.blendEquationSeparate(Se[ut],Se[Mt]),v=ut,b=Mt),(et!==w||pt!==_||it!==M||Nt!==T)&&(s.blendFuncSeparate(Xt[et],Xt[pt],Xt[it],Xt[Nt]),w=et,_=pt,M=it,T=Nt),(wt.equals(y)===!1||he!==S)&&(s.blendColor(wt.r,wt.g,wt.b,he),y.copy(wt),S=he),p=O,C=!1}function ce(O,ut){O.side===We?lt(s.CULL_FACE):j(s.CULL_FACE);let et=O.side===Ue;ut&&(et=!et),qt(et),O.blending===Ei&&O.transparent===!1?te(Vn):te(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),a.setFunc(O.depthFunc),a.setTest(O.depthTest),a.setMask(O.depthWrite),r.setMask(O.colorWrite);let pt=O.stencilWrite;o.setTest(pt),pt&&(o.setMask(O.stencilWriteMask),o.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),o.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),we(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?j(s.SAMPLE_ALPHA_TO_COVERAGE):lt(s.SAMPLE_ALPHA_TO_COVERAGE)}function qt(O){P!==O&&(O?s.frontFace(s.CW):s.frontFace(s.CCW),P=O)}function se(O){O!==Qh?(j(s.CULL_FACE),O!==I&&(O===xc?s.cullFace(s.BACK):O===tu?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):lt(s.CULL_FACE),I=O}function Ae(O){O!==L&&(z&&s.lineWidth(O),L=O)}function we(O,ut,et){O?(j(s.POLYGON_OFFSET_FILL),(A!==ut||N!==et)&&(A=ut,N=et,a.getReversed()&&(ut=-ut),s.polygonOffset(ut,et))):lt(s.POLYGON_OFFSET_FILL)}function ue(O){O?j(s.SCISSOR_TEST):lt(s.SCISSOR_TEST)}function ve(O){O===void 0&&(O=s.TEXTURE0+G-1),V!==O&&(s.activeTexture(O),V=O)}function k(O,ut,et){et===void 0&&(V===null?et=s.TEXTURE0+G-1:et=V);let pt=X[et];pt===void 0&&(pt={type:void 0,texture:void 0},X[et]=pt),(pt.type!==O||pt.texture!==ut)&&(V!==et&&(s.activeTexture(et),V=et),s.bindTexture(O,ut||q[O]),pt.type=O,pt.texture=ut)}function De(){let O=X[V];O!==void 0&&O.type!==void 0&&(s.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function ee(){try{s.compressedTexImage2D(...arguments)}catch(O){kt("WebGLState:",O)}}function D(){try{s.compressedTexImage3D(...arguments)}catch(O){kt("WebGLState:",O)}}function E(){try{s.texSubImage2D(...arguments)}catch(O){kt("WebGLState:",O)}}function W(){try{s.texSubImage3D(...arguments)}catch(O){kt("WebGLState:",O)}}function Z(){try{s.compressedTexSubImage2D(...arguments)}catch(O){kt("WebGLState:",O)}}function Q(){try{s.compressedTexSubImage3D(...arguments)}catch(O){kt("WebGLState:",O)}}function ct(){try{s.texStorage2D(...arguments)}catch(O){kt("WebGLState:",O)}}function dt(){try{s.texStorage3D(...arguments)}catch(O){kt("WebGLState:",O)}}function tt(){try{s.texImage2D(...arguments)}catch(O){kt("WebGLState:",O)}}function nt(){try{s.texImage3D(...arguments)}catch(O){kt("WebGLState:",O)}}function ft(O){return d[O]!==void 0?d[O]:s.getParameter(O)}function Lt(O,ut){d[O]!==ut&&(s.pixelStorei(O,ut),d[O]=ut)}function K(O){St.equals(O)===!1&&(s.scissor(O.x,O.y,O.z,O.w),St.copy(O))}function ot(O){bt.equals(O)===!1&&(s.viewport(O.x,O.y,O.z,O.w),bt.copy(O))}function vt(O,ut){let et=c.get(ut);et===void 0&&(et=new WeakMap,c.set(ut,et));let pt=et.get(O);pt===void 0&&(pt=s.getUniformBlockIndex(ut,O.name),et.set(O,pt))}function Dt(O,ut){let pt=c.get(ut).get(O);l.get(ut)!==pt&&(s.uniformBlockBinding(ut,pt,O.__bindingPointIndex),l.set(ut,pt))}function Bt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),a.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),h={},d={},V=null,X={},u={},f=new WeakMap,m=[],x=null,g=!1,p=null,v=null,w=null,_=null,b=null,M=null,T=null,y=new ht(0,0,0),S=0,C=!1,P=null,I=null,L=null,A=null,N=null,St.set(0,0,s.canvas.width,s.canvas.height),bt.set(0,0,s.canvas.width,s.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:j,disable:lt,bindFramebuffer:_t,drawBuffers:mt,useProgram:zt,setBlending:te,setMaterial:ce,setFlipSided:qt,setCullFace:se,setLineWidth:Ae,setPolygonOffset:we,setScissorTest:ue,activeTexture:ve,bindTexture:k,unbindTexture:De,compressedTexImage2D:ee,compressedTexImage3D:D,texImage2D:tt,texImage3D:nt,pixelStorei:Lt,getParameter:ft,updateUBOMapping:vt,uniformBlockBinding:Dt,texStorage2D:ct,texStorage3D:dt,texSubImage2D:E,texSubImage3D:W,compressedTexSubImage2D:Z,compressedTexSubImage3D:Q,scissor:K,viewport:ot,reset:Bt}}function Ex(s,t,e,n,i,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ft,h=new WeakMap,d=new Set,u,f=new WeakMap,m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(D,E){return m?new OffscreenCanvas(D,E):lr("canvas")}function g(D,E,W){let Z=1,Q=ee(D);if((Q.width>W||Q.height>W)&&(Z=W/Math.max(Q.width,Q.height)),Z<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){let ct=Math.floor(Z*Q.width),dt=Math.floor(Z*Q.height);u===void 0&&(u=x(ct,dt));let tt=E?x(ct,dt):u;return tt.width=ct,tt.height=dt,tt.getContext("2d").drawImage(D,0,0,ct,dt),Ot("WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+ct+"x"+dt+")."),tt}else return"data"in D&&Ot("WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),D;return D}function p(D){return D.generateMipmaps}function v(D){s.generateMipmap(D)}function w(D){return D.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:D.isWebGL3DRenderTarget?s.TEXTURE_3D:D.isWebGLArrayRenderTarget||D.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function _(D,E,W,Z,Q,ct=!1){if(D!==null){if(s[D]!==void 0)return s[D];Ot("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let dt;Z&&(dt=t.get("EXT_texture_norm16"),dt||Ot("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let tt=E;if(E===s.RED&&(W===s.FLOAT&&(tt=s.R32F),W===s.HALF_FLOAT&&(tt=s.R16F),W===s.UNSIGNED_BYTE&&(tt=s.R8),W===s.UNSIGNED_SHORT&&dt&&(tt=dt.R16_EXT),W===s.SHORT&&dt&&(tt=dt.R16_SNORM_EXT)),E===s.RED_INTEGER&&(W===s.UNSIGNED_BYTE&&(tt=s.R8UI),W===s.UNSIGNED_SHORT&&(tt=s.R16UI),W===s.UNSIGNED_INT&&(tt=s.R32UI),W===s.BYTE&&(tt=s.R8I),W===s.SHORT&&(tt=s.R16I),W===s.INT&&(tt=s.R32I)),E===s.RG&&(W===s.FLOAT&&(tt=s.RG32F),W===s.HALF_FLOAT&&(tt=s.RG16F),W===s.UNSIGNED_BYTE&&(tt=s.RG8),W===s.UNSIGNED_SHORT&&dt&&(tt=dt.RG16_EXT),W===s.SHORT&&dt&&(tt=dt.RG16_SNORM_EXT)),E===s.RG_INTEGER&&(W===s.UNSIGNED_BYTE&&(tt=s.RG8UI),W===s.UNSIGNED_SHORT&&(tt=s.RG16UI),W===s.UNSIGNED_INT&&(tt=s.RG32UI),W===s.BYTE&&(tt=s.RG8I),W===s.SHORT&&(tt=s.RG16I),W===s.INT&&(tt=s.RG32I)),E===s.RGB_INTEGER&&(W===s.UNSIGNED_BYTE&&(tt=s.RGB8UI),W===s.UNSIGNED_SHORT&&(tt=s.RGB16UI),W===s.UNSIGNED_INT&&(tt=s.RGB32UI),W===s.BYTE&&(tt=s.RGB8I),W===s.SHORT&&(tt=s.RGB16I),W===s.INT&&(tt=s.RGB32I)),E===s.RGBA_INTEGER&&(W===s.UNSIGNED_BYTE&&(tt=s.RGBA8UI),W===s.UNSIGNED_SHORT&&(tt=s.RGBA16UI),W===s.UNSIGNED_INT&&(tt=s.RGBA32UI),W===s.BYTE&&(tt=s.RGBA8I),W===s.SHORT&&(tt=s.RGBA16I),W===s.INT&&(tt=s.RGBA32I)),E===s.RGB&&(W===s.UNSIGNED_SHORT&&dt&&(tt=dt.RGB16_EXT),W===s.SHORT&&dt&&(tt=dt.RGB16_SNORM_EXT),W===s.UNSIGNED_INT_5_9_9_9_REV&&(tt=s.RGB9_E5),W===s.UNSIGNED_INT_10F_11F_11F_REV&&(tt=s.R11F_G11F_B10F)),E===s.RGBA){let nt=ct?or:jt.getTransfer(Q);W===s.FLOAT&&(tt=s.RGBA32F),W===s.HALF_FLOAT&&(tt=s.RGBA16F),W===s.UNSIGNED_BYTE&&(tt=nt===ae?s.SRGB8_ALPHA8:s.RGBA8),W===s.UNSIGNED_SHORT&&dt&&(tt=dt.RGBA16_EXT),W===s.SHORT&&dt&&(tt=dt.RGBA16_SNORM_EXT),W===s.UNSIGNED_SHORT_4_4_4_4&&(tt=s.RGBA4),W===s.UNSIGNED_SHORT_5_5_5_1&&(tt=s.RGB5_A1)}return(tt===s.R16F||tt===s.R32F||tt===s.RG16F||tt===s.RG32F||tt===s.RGBA16F||tt===s.RGBA32F)&&t.get("EXT_color_buffer_float"),tt}function b(D,E){let W;return D?E===null||E===Cn||E===Cs?W=s.DEPTH24_STENCIL8:E===vn?W=s.DEPTH32F_STENCIL8:E===Rs&&(W=s.DEPTH24_STENCIL8,Ot("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Cn||E===Cs?W=s.DEPTH_COMPONENT24:E===vn?W=s.DEPTH_COMPONENT32F:E===Rs&&(W=s.DEPTH_COMPONENT16),W}function M(D,E){return p(D)===!0||D.isFramebufferTexture&&D.minFilter!==Ge&&D.minFilter!==Ze?Math.log2(Math.max(E.width,E.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?E.mipmaps.length:1}function T(D){let E=D.target;E.removeEventListener("dispose",T),S(E),E.isVideoTexture&&h.delete(E),E.isHTMLTexture&&d.delete(E)}function y(D){let E=D.target;E.removeEventListener("dispose",y),P(E)}function S(D){let E=n.get(D);if(E.__webglInit===void 0)return;let W=D.source,Z=f.get(W);if(Z){let Q=Z[E.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&C(D),Object.keys(Z).length===0&&f.delete(W)}n.remove(D)}function C(D){let E=n.get(D);s.deleteTexture(E.__webglTexture);let W=D.source,Z=f.get(W);delete Z[E.__cacheKey],a.memory.textures--}function P(D){let E=n.get(D);if(D.depthTexture&&(D.depthTexture.dispose(),n.remove(D.depthTexture)),D.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(E.__webglFramebuffer[Z]))for(let Q=0;Q<E.__webglFramebuffer[Z].length;Q++)s.deleteFramebuffer(E.__webglFramebuffer[Z][Q]);else s.deleteFramebuffer(E.__webglFramebuffer[Z]);E.__webglDepthbuffer&&s.deleteRenderbuffer(E.__webglDepthbuffer[Z])}else{if(Array.isArray(E.__webglFramebuffer))for(let Z=0;Z<E.__webglFramebuffer.length;Z++)s.deleteFramebuffer(E.__webglFramebuffer[Z]);else s.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&s.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&s.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let Z=0;Z<E.__webglColorRenderbuffer.length;Z++)E.__webglColorRenderbuffer[Z]&&s.deleteRenderbuffer(E.__webglColorRenderbuffer[Z]);E.__webglDepthRenderbuffer&&s.deleteRenderbuffer(E.__webglDepthRenderbuffer)}let W=D.textures;for(let Z=0,Q=W.length;Z<Q;Z++){let ct=n.get(W[Z]);ct.__webglTexture&&(s.deleteTexture(ct.__webglTexture),a.memory.textures--),n.remove(W[Z])}n.remove(D)}let I=0;function L(){I=0}function A(){return I}function N(D){I=D}function G(){let D=I;return D>=i.maxTextures&&Ot("WebGLTextures: Trying to use "+(D+1)+" texture units while this GPU supports only "+i.maxTextures),I+=1,D}function z(D){let E=[];return E.push(D.wrapS),E.push(D.wrapT),E.push(D.wrapR||0),E.push(D.magFilter),E.push(D.minFilter),E.push(D.anisotropy),E.push(D.internalFormat),E.push(D.format),E.push(D.type),E.push(D.generateMipmaps),E.push(D.premultiplyAlpha),E.push(D.flipY),E.push(D.unpackAlignment),E.push(D.colorSpace),E.join()}function H(D,E){let W=n.get(D);if(D.isVideoTexture&&k(D),D.isRenderTargetTexture===!1&&D.isExternalTexture!==!0&&D.version>0&&W.__version!==D.version){let Z=D.image;if(Z===null)Ot("WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)Ot("WebGLRenderer: Texture marked for update but image is incomplete");else{lt(W,D,E);return}}else D.isExternalTexture&&(W.__webglTexture=D.sourceTexture?D.sourceTexture:null);e.bindTexture(s.TEXTURE_2D,W.__webglTexture,s.TEXTURE0+E)}function U(D,E){let W=n.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&W.__version!==D.version){lt(W,D,E);return}else D.isExternalTexture&&(W.__webglTexture=D.sourceTexture?D.sourceTexture:null);e.bindTexture(s.TEXTURE_2D_ARRAY,W.__webglTexture,s.TEXTURE0+E)}function V(D,E){let W=n.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&W.__version!==D.version){lt(W,D,E);return}e.bindTexture(s.TEXTURE_3D,W.__webglTexture,s.TEXTURE0+E)}function X(D,E){let W=n.get(D);if(D.isCubeDepthTexture!==!0&&D.version>0&&W.__version!==D.version){_t(W,D,E);return}e.bindTexture(s.TEXTURE_CUBE_MAP,W.__webglTexture,s.TEXTURE0+E)}let rt={[xs]:s.REPEAT,[Un]:s.CLAMP_TO_EDGE,[ka]:s.MIRRORED_REPEAT},st={[Ge]:s.NEAREST,[bu]:s.NEAREST_MIPMAP_NEAREST,[Ur]:s.NEAREST_MIPMAP_LINEAR,[Ze]:s.LINEAR,[vo]:s.LINEAR_MIPMAP_NEAREST,[Wn]:s.LINEAR_MIPMAP_LINEAR},St={[Tu]:s.NEVER,[Iu]:s.ALWAYS,[Au]:s.LESS,[sl]:s.LEQUAL,[Ru]:s.EQUAL,[rl]:s.GEQUAL,[Cu]:s.GREATER,[Pu]:s.NOTEQUAL};function bt(D,E){if(E.type===vn&&t.has("OES_texture_float_linear")===!1&&(E.magFilter===Ze||E.magFilter===vo||E.magFilter===Ur||E.magFilter===Wn||E.minFilter===Ze||E.minFilter===vo||E.minFilter===Ur||E.minFilter===Wn)&&Ot("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(D,s.TEXTURE_WRAP_S,rt[E.wrapS]),s.texParameteri(D,s.TEXTURE_WRAP_T,rt[E.wrapT]),(D===s.TEXTURE_3D||D===s.TEXTURE_2D_ARRAY)&&s.texParameteri(D,s.TEXTURE_WRAP_R,rt[E.wrapR]),s.texParameteri(D,s.TEXTURE_MAG_FILTER,st[E.magFilter]),s.texParameteri(D,s.TEXTURE_MIN_FILTER,st[E.minFilter]),E.compareFunction&&(s.texParameteri(D,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(D,s.TEXTURE_COMPARE_FUNC,St[E.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===Ge||E.minFilter!==Ur&&E.minFilter!==Wn||E.type===vn&&t.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||n.get(E).__currentAnisotropy){let W=t.get("EXT_texture_filter_anisotropic");s.texParameterf(D,W.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,i.getMaxAnisotropy())),n.get(E).__currentAnisotropy=E.anisotropy}}}function At(D,E){let W=!1;D.__webglInit===void 0&&(D.__webglInit=!0,E.addEventListener("dispose",T));let Z=E.source,Q=f.get(Z);Q===void 0&&(Q={},f.set(Z,Q));let ct=z(E);if(ct!==D.__cacheKey){Q[ct]===void 0&&(Q[ct]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,W=!0),Q[ct].usedTimes++;let dt=Q[D.__cacheKey];dt!==void 0&&(Q[D.__cacheKey].usedTimes--,dt.usedTimes===0&&C(E)),D.__cacheKey=ct,D.__webglTexture=Q[ct].texture}return W}function q(D,E,W){return Math.floor(Math.floor(D/W)/E)}function j(D,E,W,Z){let ct=D.updateRanges;if(ct.length===0)e.texSubImage2D(s.TEXTURE_2D,0,0,0,E.width,E.height,W,Z,E.data);else{ct.sort((Lt,K)=>Lt.start-K.start);let dt=0;for(let Lt=1;Lt<ct.length;Lt++){let K=ct[dt],ot=ct[Lt],vt=K.start+K.count,Dt=q(ot.start,E.width,4),Bt=q(K.start,E.width,4);ot.start<=vt+1&&Dt===Bt&&q(ot.start+ot.count-1,E.width,4)===Dt?K.count=Math.max(K.count,ot.start+ot.count-K.start):(++dt,ct[dt]=ot)}ct.length=dt+1;let tt=e.getParameter(s.UNPACK_ROW_LENGTH),nt=e.getParameter(s.UNPACK_SKIP_PIXELS),ft=e.getParameter(s.UNPACK_SKIP_ROWS);e.pixelStorei(s.UNPACK_ROW_LENGTH,E.width);for(let Lt=0,K=ct.length;Lt<K;Lt++){let ot=ct[Lt],vt=Math.floor(ot.start/4),Dt=Math.ceil(ot.count/4),Bt=vt%E.width,O=Math.floor(vt/E.width),ut=Dt,et=1;e.pixelStorei(s.UNPACK_SKIP_PIXELS,Bt),e.pixelStorei(s.UNPACK_SKIP_ROWS,O),e.texSubImage2D(s.TEXTURE_2D,0,Bt,O,ut,et,W,Z,E.data)}D.clearUpdateRanges(),e.pixelStorei(s.UNPACK_ROW_LENGTH,tt),e.pixelStorei(s.UNPACK_SKIP_PIXELS,nt),e.pixelStorei(s.UNPACK_SKIP_ROWS,ft)}}function lt(D,E,W){let Z=s.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(Z=s.TEXTURE_2D_ARRAY),E.isData3DTexture&&(Z=s.TEXTURE_3D);let Q=At(D,E),ct=E.source;e.bindTexture(Z,D.__webglTexture,s.TEXTURE0+W);let dt=n.get(ct);if(ct.version!==dt.__version||Q===!0){if(e.activeTexture(s.TEXTURE0+W),(typeof ImageBitmap<"u"&&E.image instanceof ImageBitmap)===!1){let et=jt.getPrimaries(jt.workingColorSpace),pt=E.colorSpace===oi?null:jt.getPrimaries(E.colorSpace),Mt=E.colorSpace===oi||et===pt?s.NONE:s.BROWSER_DEFAULT_WEBGL;e.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,E.flipY),e.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),e.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Mt)}e.pixelStorei(s.UNPACK_ALIGNMENT,E.unpackAlignment);let nt=g(E.image,!1,i.maxTextureSize);nt=De(E,nt);let ft=r.convert(E.format,E.colorSpace),Lt=r.convert(E.type),K=_(E.internalFormat,ft,Lt,E.normalized,E.colorSpace,E.isVideoTexture);bt(Z,E);let ot,vt=E.mipmaps,Dt=E.isVideoTexture!==!0,Bt=dt.__version===void 0||Q===!0,O=ct.dataReady,ut=M(E,nt);if(E.isDepthTexture)K=b(E.format===Ai,E.type),Bt&&(Dt?e.texStorage2D(s.TEXTURE_2D,1,K,nt.width,nt.height):e.texImage2D(s.TEXTURE_2D,0,K,nt.width,nt.height,0,ft,Lt,null));else if(E.isDataTexture)if(vt.length>0){Dt&&Bt&&e.texStorage2D(s.TEXTURE_2D,ut,K,vt[0].width,vt[0].height);for(let et=0,pt=vt.length;et<pt;et++)ot=vt[et],Dt?O&&e.texSubImage2D(s.TEXTURE_2D,et,0,0,ot.width,ot.height,ft,Lt,ot.data):e.texImage2D(s.TEXTURE_2D,et,K,ot.width,ot.height,0,ft,Lt,ot.data);E.generateMipmaps=!1}else Dt?(Bt&&e.texStorage2D(s.TEXTURE_2D,ut,K,nt.width,nt.height),O&&j(E,nt,ft,Lt)):e.texImage2D(s.TEXTURE_2D,0,K,nt.width,nt.height,0,ft,Lt,nt.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){Dt&&Bt&&e.texStorage3D(s.TEXTURE_2D_ARRAY,ut,K,vt[0].width,vt[0].height,nt.depth);for(let et=0,pt=vt.length;et<pt;et++)if(ot=vt[et],E.format!==Mn)if(ft!==null)if(Dt){if(O)if(E.layerUpdates.size>0){let Mt=Hc(ot.width,ot.height,E.format,E.type);for(let it of E.layerUpdates){let Nt=ot.data.subarray(it*Mt/ot.data.BYTES_PER_ELEMENT,(it+1)*Mt/ot.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,et,0,0,it,ot.width,ot.height,1,ft,Nt)}}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,et,0,0,0,ot.width,ot.height,nt.depth,ft,ot.data)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,et,K,ot.width,ot.height,nt.depth,0,ot.data,0,0);else Ot("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Dt?O&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,et,0,0,0,ot.width,ot.height,nt.depth,ft,Lt,ot.data):e.texImage3D(s.TEXTURE_2D_ARRAY,et,K,ot.width,ot.height,nt.depth,0,ft,Lt,ot.data);E.layerUpdates.size>0&&E.clearLayerUpdates()}else{Dt&&Bt&&e.texStorage2D(s.TEXTURE_2D,ut,K,vt[0].width,vt[0].height);for(let et=0,pt=vt.length;et<pt;et++)ot=vt[et],E.format!==Mn?ft!==null?Dt?O&&e.compressedTexSubImage2D(s.TEXTURE_2D,et,0,0,ot.width,ot.height,ft,ot.data):e.compressedTexImage2D(s.TEXTURE_2D,et,K,ot.width,ot.height,0,ot.data):Ot("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Dt?O&&e.texSubImage2D(s.TEXTURE_2D,et,0,0,ot.width,ot.height,ft,Lt,ot.data):e.texImage2D(s.TEXTURE_2D,et,K,ot.width,ot.height,0,ft,Lt,ot.data)}else if(E.isDataArrayTexture)if(Dt){if(Bt&&e.texStorage3D(s.TEXTURE_2D_ARRAY,ut,K,nt.width,nt.height,nt.depth),O)if(E.layerUpdates.size>0){let et=Hc(nt.width,nt.height,E.format,E.type);for(let pt of E.layerUpdates){let Mt=nt.data.subarray(pt*et/nt.data.BYTES_PER_ELEMENT,(pt+1)*et/nt.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,pt,nt.width,nt.height,1,ft,Lt,Mt)}E.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,nt.width,nt.height,nt.depth,ft,Lt,nt.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,K,nt.width,nt.height,nt.depth,0,ft,Lt,nt.data);else if(E.isData3DTexture)Dt?(Bt&&e.texStorage3D(s.TEXTURE_3D,ut,K,nt.width,nt.height,nt.depth),O&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,nt.width,nt.height,nt.depth,ft,Lt,nt.data)):e.texImage3D(s.TEXTURE_3D,0,K,nt.width,nt.height,nt.depth,0,ft,Lt,nt.data);else if(E.isFramebufferTexture){if(Bt)if(Dt)e.texStorage2D(s.TEXTURE_2D,ut,K,nt.width,nt.height);else{let et=nt.width,pt=nt.height;for(let Mt=0;Mt<ut;Mt++)e.texImage2D(s.TEXTURE_2D,Mt,K,et,pt,0,ft,Lt,null),et>>=1,pt>>=1}}else if(E.isHTMLTexture){if("texElementImage2D"in s){let et=s.canvas;if(et.hasAttribute("layoutsubtree")||et.setAttribute("layoutsubtree","true"),nt.parentNode!==et){et.appendChild(nt),d.add(E),et.onpaint=pt=>{let Mt=pt.changedElements;for(let it of d)Mt.includes(it.image)&&(it.needsUpdate=!0)},et.requestPaint();return}if(s.texElementImage2D.length===3)s.texElementImage2D(s.TEXTURE_2D,s.RGBA8,nt);else{let Mt=s.RGBA,it=s.RGBA,Nt=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,0,Mt,it,Nt,nt)}s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if(vt.length>0){if(Dt&&Bt){let et=ee(vt[0]);e.texStorage2D(s.TEXTURE_2D,ut,K,et.width,et.height)}for(let et=0,pt=vt.length;et<pt;et++)ot=vt[et],Dt?O&&e.texSubImage2D(s.TEXTURE_2D,et,0,0,ft,Lt,ot):e.texImage2D(s.TEXTURE_2D,et,K,ft,Lt,ot);E.generateMipmaps=!1}else if(Dt){if(Bt){let et=ee(nt);e.texStorage2D(s.TEXTURE_2D,ut,K,et.width,et.height)}O&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,ft,Lt,nt)}else e.texImage2D(s.TEXTURE_2D,0,K,ft,Lt,nt);p(E)&&v(Z),dt.__version=ct.version,E.onUpdate&&E.onUpdate(E)}D.__version=E.version}function _t(D,E,W){if(E.image.length!==6)return;let Z=At(D,E),Q=E.source;e.bindTexture(s.TEXTURE_CUBE_MAP,D.__webglTexture,s.TEXTURE0+W);let ct=n.get(Q);if(Q.version!==ct.__version||Z===!0){e.activeTexture(s.TEXTURE0+W);let dt=jt.getPrimaries(jt.workingColorSpace),tt=E.colorSpace===oi?null:jt.getPrimaries(E.colorSpace),nt=E.colorSpace===oi||dt===tt?s.NONE:s.BROWSER_DEFAULT_WEBGL;e.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,E.flipY),e.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),e.pixelStorei(s.UNPACK_ALIGNMENT,E.unpackAlignment),e.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,nt);let ft=E.isCompressedTexture||E.image[0].isCompressedTexture,Lt=E.image[0]&&E.image[0].isDataTexture,K=[];for(let it=0;it<6;it++)!ft&&!Lt?K[it]=g(E.image[it],!0,i.maxCubemapSize):K[it]=Lt?E.image[it].image:E.image[it],K[it]=De(E,K[it]);let ot=K[0],vt=r.convert(E.format,E.colorSpace),Dt=r.convert(E.type),Bt=_(E.internalFormat,vt,Dt,E.normalized,E.colorSpace),O=E.isVideoTexture!==!0,ut=ct.__version===void 0||Z===!0,et=Q.dataReady,pt=M(E,ot);bt(s.TEXTURE_CUBE_MAP,E);let Mt;if(ft){O&&ut&&e.texStorage2D(s.TEXTURE_CUBE_MAP,pt,Bt,ot.width,ot.height);for(let it=0;it<6;it++){Mt=K[it].mipmaps;for(let Nt=0;Nt<Mt.length;Nt++){let wt=Mt[Nt];E.format!==Mn?vt!==null?O?et&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,Nt,0,0,wt.width,wt.height,vt,wt.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,Nt,Bt,wt.width,wt.height,0,wt.data):Ot("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):O?et&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,Nt,0,0,wt.width,wt.height,vt,Dt,wt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,Nt,Bt,wt.width,wt.height,0,vt,Dt,wt.data)}}}else{if(Mt=E.mipmaps,O&&ut){Mt.length>0&&pt++;let it=ee(K[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,pt,Bt,it.width,it.height)}for(let it=0;it<6;it++)if(Lt){O?et&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,0,0,K[it].width,K[it].height,vt,Dt,K[it].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,Bt,K[it].width,K[it].height,0,vt,Dt,K[it].data);for(let Nt=0;Nt<Mt.length;Nt++){let he=Mt[Nt].image[it].image;O?et&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,Nt+1,0,0,he.width,he.height,vt,Dt,he.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,Nt+1,Bt,he.width,he.height,0,vt,Dt,he.data)}}else{O?et&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,0,0,vt,Dt,K[it]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,Bt,vt,Dt,K[it]);for(let Nt=0;Nt<Mt.length;Nt++){let wt=Mt[Nt];O?et&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,Nt+1,0,0,vt,Dt,wt.image[it]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,Nt+1,Bt,vt,Dt,wt.image[it])}}}p(E)&&v(s.TEXTURE_CUBE_MAP),ct.__version=Q.version,E.onUpdate&&E.onUpdate(E)}D.__version=E.version}function mt(D,E,W,Z,Q,ct){let dt=r.convert(W.format,W.colorSpace),tt=r.convert(W.type),nt=_(W.internalFormat,dt,tt,W.normalized,W.colorSpace),ft=n.get(E),Lt=n.get(W);if(Lt.__renderTarget=E,!ft.__hasExternalTextures){let K=Math.max(1,E.width>>ct),ot=Math.max(1,E.height>>ct);Q===s.TEXTURE_3D||Q===s.TEXTURE_2D_ARRAY?e.texImage3D(Q,ct,nt,K,ot,E.depth,0,dt,tt,null):e.texImage2D(Q,ct,nt,K,ot,0,dt,tt,null)}e.bindFramebuffer(s.FRAMEBUFFER,D),ve(E)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Z,Q,Lt.__webglTexture,0,ue(E)):(Q===s.TEXTURE_2D||Q>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,Z,Q,Lt.__webglTexture,ct),e.bindFramebuffer(s.FRAMEBUFFER,null)}function zt(D,E,W){if(s.bindRenderbuffer(s.RENDERBUFFER,D),E.depthBuffer){let Z=E.depthTexture,Q=Z&&Z.isDepthTexture?Z.type:null,ct=b(E.stencilBuffer,Q),dt=E.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;ve(E)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ue(E),ct,E.width,E.height):W?s.renderbufferStorageMultisample(s.RENDERBUFFER,ue(E),ct,E.width,E.height):s.renderbufferStorage(s.RENDERBUFFER,ct,E.width,E.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,dt,s.RENDERBUFFER,D)}else{let Z=E.textures;for(let Q=0;Q<Z.length;Q++){let ct=Z[Q],dt=r.convert(ct.format,ct.colorSpace),tt=r.convert(ct.type),nt=_(ct.internalFormat,dt,tt,ct.normalized,ct.colorSpace);ve(E)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ue(E),nt,E.width,E.height):W?s.renderbufferStorageMultisample(s.RENDERBUFFER,ue(E),nt,E.width,E.height):s.renderbufferStorage(s.RENDERBUFFER,nt,E.width,E.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Se(D,E,W){let Z=E.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(s.FRAMEBUFFER,D),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let Q=n.get(E.depthTexture);if(Q.__renderTarget=E,(!Q.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),Z){if(Q.__webglInit===void 0&&(Q.__webglInit=!0,E.depthTexture.addEventListener("dispose",T)),Q.__webglTexture===void 0){Q.__webglTexture=s.createTexture(),e.bindTexture(s.TEXTURE_CUBE_MAP,Q.__webglTexture),bt(s.TEXTURE_CUBE_MAP,E.depthTexture);let ft=r.convert(E.depthTexture.format),Lt=r.convert(E.depthTexture.type),K;E.depthTexture.format===Bn?K=s.DEPTH_COMPONENT24:E.depthTexture.format===Ai&&(K=s.DEPTH24_STENCIL8);for(let ot=0;ot<6;ot++)s.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0,K,E.width,E.height,0,ft,Lt,null)}}else H(E.depthTexture,0);let ct=Q.__webglTexture,dt=ue(E),tt=Z?s.TEXTURE_CUBE_MAP_POSITIVE_X+W:s.TEXTURE_2D,nt=E.depthTexture.format===Ai?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(E.depthTexture.format===Bn)ve(E)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,nt,tt,ct,0,dt):s.framebufferTexture2D(s.FRAMEBUFFER,nt,tt,ct,0);else if(E.depthTexture.format===Ai)ve(E)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,nt,tt,ct,0,dt):s.framebufferTexture2D(s.FRAMEBUFFER,nt,tt,ct,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Xt(D){let E=n.get(D),W=D.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==D.depthTexture){let Z=D.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),Z){let Q=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,Z.removeEventListener("dispose",Q)};Z.addEventListener("dispose",Q),E.__depthDisposeCallback=Q}E.__boundDepthTexture=Z}if(D.depthTexture&&!E.__autoAllocateDepthBuffer)if(W)for(let Z=0;Z<6;Z++)Se(E.__webglFramebuffer[Z],D,Z);else{let Z=D.texture.mipmaps;Z&&Z.length>0?Se(E.__webglFramebuffer[0],D,0):Se(E.__webglFramebuffer,D,0)}else if(W){E.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(e.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer[Z]),E.__webglDepthbuffer[Z]===void 0)E.__webglDepthbuffer[Z]=s.createRenderbuffer(),zt(E.__webglDepthbuffer[Z],D,!1);else{let Q=D.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ct=E.__webglDepthbuffer[Z];s.bindRenderbuffer(s.RENDERBUFFER,ct),s.framebufferRenderbuffer(s.FRAMEBUFFER,Q,s.RENDERBUFFER,ct)}}else{let Z=D.texture.mipmaps;if(Z&&Z.length>0?e.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer[0]):e.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=s.createRenderbuffer(),zt(E.__webglDepthbuffer,D,!1);else{let Q=D.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ct=E.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,ct),s.framebufferRenderbuffer(s.FRAMEBUFFER,Q,s.RENDERBUFFER,ct)}}e.bindFramebuffer(s.FRAMEBUFFER,null)}function te(D,E,W){let Z=n.get(D);E!==void 0&&mt(Z.__webglFramebuffer,D,D.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),W!==void 0&&Xt(D)}function ce(D){let E=D.texture,W=n.get(D),Z=n.get(E);D.addEventListener("dispose",y);let Q=D.textures,ct=D.isWebGLCubeRenderTarget===!0,dt=Q.length>1;if(dt||(Z.__webglTexture===void 0&&(Z.__webglTexture=s.createTexture()),Z.__version=E.version,a.memory.textures++),ct){W.__webglFramebuffer=[];for(let tt=0;tt<6;tt++)if(E.mipmaps&&E.mipmaps.length>0){W.__webglFramebuffer[tt]=[];for(let nt=0;nt<E.mipmaps.length;nt++)W.__webglFramebuffer[tt][nt]=s.createFramebuffer()}else W.__webglFramebuffer[tt]=s.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){W.__webglFramebuffer=[];for(let tt=0;tt<E.mipmaps.length;tt++)W.__webglFramebuffer[tt]=s.createFramebuffer()}else W.__webglFramebuffer=s.createFramebuffer();if(dt)for(let tt=0,nt=Q.length;tt<nt;tt++){let ft=n.get(Q[tt]);ft.__webglTexture===void 0&&(ft.__webglTexture=s.createTexture(),a.memory.textures++)}if(D.samples>0&&ve(D)===!1){W.__webglMultisampledFramebuffer=s.createFramebuffer(),W.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,W.__webglMultisampledFramebuffer);for(let tt=0;tt<Q.length;tt++){let nt=Q[tt];W.__webglColorRenderbuffer[tt]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,W.__webglColorRenderbuffer[tt]);let ft=r.convert(nt.format,nt.colorSpace),Lt=r.convert(nt.type),K=_(nt.internalFormat,ft,Lt,nt.normalized,nt.colorSpace,D.isXRRenderTarget===!0),ot=ue(D);s.renderbufferStorageMultisample(s.RENDERBUFFER,ot,K,D.width,D.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+tt,s.RENDERBUFFER,W.__webglColorRenderbuffer[tt])}s.bindRenderbuffer(s.RENDERBUFFER,null),D.depthBuffer&&(W.__webglDepthRenderbuffer=s.createRenderbuffer(),zt(W.__webglDepthRenderbuffer,D,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(ct){e.bindTexture(s.TEXTURE_CUBE_MAP,Z.__webglTexture),bt(s.TEXTURE_CUBE_MAP,E);for(let tt=0;tt<6;tt++)if(E.mipmaps&&E.mipmaps.length>0)for(let nt=0;nt<E.mipmaps.length;nt++)mt(W.__webglFramebuffer[tt][nt],D,E,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+tt,nt);else mt(W.__webglFramebuffer[tt],D,E,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0);p(E)&&v(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(dt){for(let tt=0,nt=Q.length;tt<nt;tt++){let ft=Q[tt],Lt=n.get(ft),K=s.TEXTURE_2D;(D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(K=D.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(K,Lt.__webglTexture),bt(K,ft),mt(W.__webglFramebuffer,D,ft,s.COLOR_ATTACHMENT0+tt,K,0),p(ft)&&v(K)}e.unbindTexture()}else{let tt=s.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(tt=D.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(tt,Z.__webglTexture),bt(tt,E),E.mipmaps&&E.mipmaps.length>0)for(let nt=0;nt<E.mipmaps.length;nt++)mt(W.__webglFramebuffer[nt],D,E,s.COLOR_ATTACHMENT0,tt,nt);else mt(W.__webglFramebuffer,D,E,s.COLOR_ATTACHMENT0,tt,0);p(E)&&v(tt),e.unbindTexture()}D.depthBuffer&&Xt(D)}function qt(D){let E=D.textures;for(let W=0,Z=E.length;W<Z;W++){let Q=E[W];if(p(Q)){let ct=w(D),dt=n.get(Q).__webglTexture;e.bindTexture(ct,dt),v(ct),e.unbindTexture()}}}let se=[],Ae=[];function we(D){if(D.samples>0){if(ve(D)===!1){let E=D.textures,W=D.width,Z=D.height,Q=s.COLOR_BUFFER_BIT,ct=D.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,dt=n.get(D),tt=E.length>1;if(tt)for(let ft=0;ft<E.length;ft++)e.bindFramebuffer(s.FRAMEBUFFER,dt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ft,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,dt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ft,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,dt.__webglMultisampledFramebuffer);let nt=D.texture.mipmaps;nt&&nt.length>0?e.bindFramebuffer(s.DRAW_FRAMEBUFFER,dt.__webglFramebuffer[0]):e.bindFramebuffer(s.DRAW_FRAMEBUFFER,dt.__webglFramebuffer);for(let ft=0;ft<E.length;ft++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(Q|=s.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(Q|=s.STENCIL_BUFFER_BIT)),tt){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,dt.__webglColorRenderbuffer[ft]);let Lt=n.get(E[ft]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Lt,0)}s.blitFramebuffer(0,0,W,Z,0,0,W,Z,Q,s.NEAREST),l===!0&&(se.length=0,Ae.length=0,se.push(s.COLOR_ATTACHMENT0+ft),D.depthBuffer&&D.storeMultisampledDepthBuffer===!1&&(se.push(ct),Ae.push(ct),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,Ae)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,se))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),tt)for(let ft=0;ft<E.length;ft++){e.bindFramebuffer(s.FRAMEBUFFER,dt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ft,s.RENDERBUFFER,dt.__webglColorRenderbuffer[ft]);let Lt=n.get(E[ft]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,dt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ft,s.TEXTURE_2D,Lt,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,dt.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.storeMultisampledDepthBuffer===!1&&l){let E=D.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[E])}}}function ue(D){return Math.min(i.maxSamples,D.samples)}function ve(D){let E=n.get(D);return D.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function k(D){let E=a.render.frame;h.get(D)!==E&&(h.set(D,E),D.update())}function De(D,E){let W=D.colorSpace,Z=D.format,Q=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||W!==ar&&W!==oi&&(jt.getTransfer(W)===ae?(Z!==Mn||Q!==un)&&Ot("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):kt("WebGLTextures: Unsupported texture color space:",W)),E}function ee(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(c.width=D.naturalWidth||D.width,c.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(c.width=D.displayWidth,c.height=D.displayHeight):(c.width=D.width,c.height=D.height),c}this.allocateTextureUnit=G,this.resetTextureUnits=L,this.getTextureUnits=A,this.setTextureUnits=N,this.setTexture2D=H,this.setTexture2DArray=U,this.setTexture3D=V,this.setTextureCube=X,this.rebindTextures=te,this.setupRenderTarget=ce,this.updateRenderTargetMipmap=qt,this.updateMultisampleRenderTarget=we,this.setupDepthRenderbuffer=Xt,this.setupFrameBufferTexture=mt,this.useMultisampledRTT=ve,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function Tx(s,t){function e(n,i=oi){let r,a=jt.getTransfer(i);if(n===un)return s.UNSIGNED_BYTE;if(n===bo)return s.UNSIGNED_SHORT_4_4_4_4;if(n===So)return s.UNSIGNED_SHORT_5_5_5_1;if(n===Ic)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===Lc)return s.UNSIGNED_INT_10F_11F_11F_REV;if(n===Cc)return s.BYTE;if(n===Pc)return s.SHORT;if(n===Rs)return s.UNSIGNED_SHORT;if(n===Mo)return s.INT;if(n===Cn)return s.UNSIGNED_INT;if(n===vn)return s.FLOAT;if(n===Pn)return s.HALF_FLOAT;if(n===Dc)return s.ALPHA;if(n===Fc)return s.RGB;if(n===Mn)return s.RGBA;if(n===Bn)return s.DEPTH_COMPONENT;if(n===Ai)return s.DEPTH_STENCIL;if(n===wo)return s.RED;if(n===Eo)return s.RED_INTEGER;if(n===Ri)return s.RG;if(n===To)return s.RG_INTEGER;if(n===Ao)return s.RGBA_INTEGER;if(n===Br||n===Or||n===kr||n===zr)if(a===ae)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Br)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Or)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===kr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===zr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Br)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Or)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===kr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===zr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ro||n===Co||n===Po||n===Io)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Ro)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Co)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Po)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Io)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Lo||n===Do||n===Fo||n===No||n===Uo||n===Hr||n===Bo)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Lo||n===Do)return a===ae?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Fo)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===No)return r.COMPRESSED_R11_EAC;if(n===Uo)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Hr)return r.COMPRESSED_RG11_EAC;if(n===Bo)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Oo||n===ko||n===zo||n===Ho||n===Go||n===Vo||n===Wo||n===Xo||n===qo||n===Yo||n===$o||n===Zo||n===Jo||n===Ko)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Oo)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===ko)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===zo)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ho)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Go)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Vo)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Wo)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Xo)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===qo)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Yo)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===$o)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Zo)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Jo)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ko)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===jo||n===Qo||n===tl)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===jo)return a===ae?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Qo)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===tl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===el||n===nl||n===Gr||n===il)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===el)return r.COMPRESSED_RED_RGTC1_EXT;if(n===nl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Gr)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===il)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Cs?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:e}}var Ax=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Rx=`
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

}`,ah=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new vr(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new Ve({vertexShader:Ax,fragmentShader:Rx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Ct(new Pe(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},oh=class extends On{constructor(t,e){super();let n=this,i=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,d=null,u=null,f=null,m=null,x=typeof XRWebGLBinding<"u",g=new ah,p={},v=e.getContextAttributes(),w=null,_=null,b=[],M=[],T=new Ft,y=null,S=null,C=new Fe;C.viewport=new Me;let P=new Fe;P.viewport=new Me;let I=[C,P],L=new mo,A=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let j=b[q];return j===void 0&&(j=new Ms,b[q]=j),j.getTargetRaySpace()},this.getControllerGrip=function(q){let j=b[q];return j===void 0&&(j=new Ms,b[q]=j),j.getGripSpace()},this.getHand=function(q){let j=b[q];return j===void 0&&(j=new Ms,b[q]=j),j.getHandSpace()};function G(q){let j=M.indexOf(q.inputSource);if(j===-1)return;let lt=b[j];lt!==void 0&&(lt.update(q.inputSource,q.frame,c||a),lt.dispatchEvent({type:q.type,data:q.inputSource}))}function z(){i.removeEventListener("select",G),i.removeEventListener("selectstart",G),i.removeEventListener("selectend",G),i.removeEventListener("squeeze",G),i.removeEventListener("squeezestart",G),i.removeEventListener("squeezeend",G),i.removeEventListener("end",z),i.removeEventListener("inputsourceschange",H);for(let q=0;q<b.length;q++){let j=M[q];j!==null&&(M[q]=null,b[q].disconnect(j))}A=null,N=null,g.reset();for(let q in p)delete p[q];if(t.setRenderTarget(w),f=null,u=null,d=null,i=null,_=null,At.stop(),n.isPresenting=!1,t.setPixelRatio(y),t.setSize(T.width,T.height,!1),S!==null){let q=S.camera;q.fov=S.fov,q.zoom=S.zoom,q.updateProjectionMatrix(),S=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){r=q,n.isPresenting===!0&&Ot("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){o=q,n.isPresenting===!0&&Ot("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(q){c=q},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d===null&&x&&(d=new XRWebGLBinding(i,e)),d},this.getFrame=function(){return m},this.getSession=function(){return i},this.setSession=async function(q){if(i=q,i!==null){if(w=t.getRenderTarget(),i.addEventListener("select",G),i.addEventListener("selectstart",G),i.addEventListener("selectend",G),i.addEventListener("squeeze",G),i.addEventListener("squeezestart",G),i.addEventListener("squeezeend",G),i.addEventListener("end",z),i.addEventListener("inputsourceschange",H),v.xrCompatible!==!0&&await e.makeXRCompatible(),y=t.getPixelRatio(),t.getSize(T),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let lt=null,_t=null,mt=null;v.depth&&(mt=v.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,lt=v.stencil?Ai:Bn,_t=v.stencil?Cs:Cn);let zt={colorFormat:e.RGBA8,depthFormat:mt,scaleFactor:r};d=this.getBinding(),u=d.createProjectionLayer(zt),i.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),_=new cn(u.textureWidth,u.textureHeight,{format:Mn,type:un,depthTexture:new vi(u.textureWidth,u.textureHeight,_t,void 0,void 0,void 0,void 0,void 0,void 0,lt),stencilBuffer:v.stencil,colorSpace:t.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let lt={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(i,e,lt),i.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),_=new cn(f.framebufferWidth,f.framebufferHeight,{format:Mn,type:un,colorSpace:t.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),At.setContext(i),At.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function H(q){for(let j=0;j<q.removed.length;j++){let lt=q.removed[j],_t=M.indexOf(lt);_t>=0&&(M[_t]=null,b[_t].disconnect(lt))}for(let j=0;j<q.added.length;j++){let lt=q.added[j],_t=M.indexOf(lt);if(_t===-1){for(let zt=0;zt<b.length;zt++)if(zt>=M.length){M.push(lt),_t=zt;break}else if(M[zt]===null){M[zt]=lt,_t=zt;break}if(_t===-1)break}let mt=b[_t];mt&&mt.connect(lt)}}let U=new F,V=new F;function X(q,j,lt){U.setFromMatrixPosition(j.matrixWorld),V.setFromMatrixPosition(lt.matrixWorld);let _t=U.distanceTo(V),mt=j.projectionMatrix.elements,zt=lt.projectionMatrix.elements,Se=mt[14]/(mt[10]-1),Xt=mt[14]/(mt[10]+1),te=(mt[9]+1)/mt[5],ce=(mt[9]-1)/mt[5],qt=(mt[8]-1)/mt[0],se=(zt[8]+1)/zt[0],Ae=Se*qt,we=Se*se,ue=_t/(-qt+se),ve=ue*-qt;if(j.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(ve),q.translateZ(ue),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),mt[10]===-1)q.projectionMatrix.copy(j.projectionMatrix),q.projectionMatrixInverse.copy(j.projectionMatrixInverse);else{let k=Se+ue,De=Xt+ue,ee=Ae-ve,D=we+(_t-ve),E=te*Xt/De*k,W=ce*Xt/De*k;q.projectionMatrix.makePerspective(ee,D,E,W,k,De),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function rt(q,j){j===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(j.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(i===null)return;let j=q.near,lt=q.far;g.texture!==null&&(g.depthNear>0&&(j=g.depthNear),g.depthFar>0&&(lt=g.depthFar)),L.near=P.near=C.near=j,L.far=P.far=C.far=lt,(A!==L.near||N!==L.far)&&(i.updateRenderState({depthNear:L.near,depthFar:L.far}),A=L.near,N=L.far),L.layers.mask=q.layers.mask|6,C.layers.mask=L.layers.mask&-5,P.layers.mask=L.layers.mask&-3;let _t=q.parent,mt=L.cameras;rt(L,_t);for(let zt=0;zt<mt.length;zt++)rt(mt[zt],_t);mt.length===2?X(L,C,P):L.projectionMatrix.copy(C.projectionMatrix),S===null&&q.isPerspectiveCamera&&(S={camera:q,fov:q.fov,zoom:q.zoom}),st(q,L,_t)};function st(q,j,lt){lt===null?q.matrix.copy(j.matrixWorld):(q.matrix.copy(lt.matrixWorld),q.matrix.invert(),q.matrix.multiply(j.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(j.projectionMatrix),q.projectionMatrixInverse.copy(j.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=cr*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return L},this.getFoveation=function(){if(!(u===null&&f===null))return l},this.setFoveation=function(q){l=q,u!==null&&(u.fixedFoveation=q),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=q)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(L)},this.getCameraTexture=function(q){return p[q]};let St=null;function bt(q,j){if(h=j.getViewerPose(c||a),m=j,h!==null){let lt=h.views;f!==null&&(t.setRenderTargetFramebuffer(_,f.framebuffer),t.setRenderTarget(_));let _t=!1;lt.length!==L.cameras.length&&(L.cameras.length=0,_t=!0);for(let Xt=0;Xt<lt.length;Xt++){let te=lt[Xt],ce=null;if(f!==null)ce=f.getViewport(te);else{let se=d.getViewSubImage(u,te);ce=se.viewport,Xt===0&&(t.setRenderTargetTextures(_,se.colorTexture,se.depthStencilTexture),t.setRenderTarget(_))}let qt=I[Xt];qt===void 0&&(qt=new Fe,qt.layers.enable(Xt),qt.viewport=new Me,I[Xt]=qt),qt.matrix.fromArray(te.transform.matrix),qt.matrix.decompose(qt.position,qt.quaternion,qt.scale),qt.projectionMatrix.fromArray(te.projectionMatrix),qt.projectionMatrixInverse.copy(qt.projectionMatrix).invert(),qt.viewport.set(ce.x,ce.y,ce.width,ce.height),Xt===0&&(L.matrix.copy(qt.matrix),L.matrix.decompose(L.position,L.quaternion,L.scale)),_t===!0&&L.cameras.push(qt)}let mt=i.enabledFeatures;if(mt&&mt.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&x){d=n.getBinding();let Xt=d.getDepthInformation(lt[0]);Xt&&Xt.isValid&&Xt.texture&&g.init(Xt,i.renderState)}if(mt&&mt.includes("camera-access")&&x){t.state.unbindTexture(),d=n.getBinding();for(let Xt=0;Xt<lt.length;Xt++){let te=lt[Xt].camera;if(te){let ce=p[te];ce||(ce=new vr,p[te]=ce);let qt=d.getCameraImage(te);ce.sourceTexture=qt}}}}for(let lt=0;lt<b.length;lt++){let _t=M[lt],mt=b[lt];_t!==null&&mt!==void 0&&mt.update(_t,j,c||a)}St&&St(q,j),j.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:j}),m=null}let At=new ld;At.setAnimationLoop(bt),this.setAnimationLoop=function(q){St=q},this.dispose=function(){}}},Cx=new Qt,pd=new Gt;pd.set(-1,0,0,0,1,0,0,0,1);function Px(s,t){function e(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function n(g,p){p.color.getRGB(g.fogColor.value,Oc(s)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function i(g,p,v,w,_){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(g,p):p.isMeshLambertMaterial?(r(g,p),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(g,p),d(g,p)):p.isMeshPhongMaterial?(r(g,p),h(g,p),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(g,p),u(g,p),p.isMeshPhysicalMaterial&&f(g,p,_)):p.isMeshMatcapMaterial?(r(g,p),m(g,p)):p.isMeshDepthMaterial?r(g,p):p.isMeshDistanceMaterial?(r(g,p),x(g,p)):p.isMeshNormalMaterial?r(g,p):p.isLineBasicMaterial?(a(g,p),p.isLineDashedMaterial&&o(g,p)):p.isPointsMaterial?l(g,p,v,w):p.isSpriteMaterial?c(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,e(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===Ue&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,e(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===Ue&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,e(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,e(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);let v=t.get(p),w=v.envMap,_=v.envMapRotation;w&&(g.envMap.value=w,g.envMapRotation.value.setFromMatrix4(Cx.makeRotationFromEuler(_)).transpose(),w.isCubeTexture&&w.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(pd),g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,g.aoMapTransform))}function a(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform))}function o(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function l(g,p,v,w){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*v,g.scale.value=w*.5,p.map&&(g.map.value=p.map,e(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function c(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function h(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function d(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function u(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function f(g,p,v){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Ue&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.retroreflectivity>0&&(g.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=v.texture,g.transmissionSamplerSize.value.set(v.width,v.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function x(g,p){let v=t.get(p).light;g.referencePosition.value.setFromMatrixPosition(v.matrixWorld),g.nearDistance.value=v.shadow.camera.near,g.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Ix(s,t,e,n){let i={},r={},a=[],o=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(_,b){let M=b.program;n.uniformBlockBinding(_,M)}function c(_,b){let M=i[_.id];M===void 0&&(g(_),M=h(_),i[_.id]=M,_.addEventListener("dispose",v));let T=b.program;n.updateUBOMapping(_,T);let y=t.render.frame;r[_.id]!==y&&(u(_),r[_.id]=y)}function h(_){let b=d();_.__bindingPointIndex=b;let M=s.createBuffer(),T=_.__size,y=_.usage;return s.bindBuffer(s.UNIFORM_BUFFER,M),s.bufferData(s.UNIFORM_BUFFER,T,y),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,b,M),M}function d(){for(let _=0;_<o;_++)if(a.indexOf(_)===-1)return a.push(_),_;return kt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(_){let b=i[_.id],M=_.uniforms,T=_.__cache;s.bindBuffer(s.UNIFORM_BUFFER,b);for(let y=0,S=M.length;y<S;y++){let C=M[y];if(Array.isArray(C))for(let P=0,I=C.length;P<I;P++)f(C[P],y,P,T);else f(C,y,0,T)}s.bindBuffer(s.UNIFORM_BUFFER,null)}function f(_,b,M,T){if(x(_,b,M,T)===!0){let y=_.__offset,S=_.value;if(Array.isArray(S)){let C=0;for(let P=0;P<S.length;P++){let I=S[P],L=p(I);m(I,_.__data,C),typeof I!="number"&&typeof I!="boolean"&&!I.isMatrix3&&!ArrayBuffer.isView(I)&&(C+=L.storage/Float32Array.BYTES_PER_ELEMENT)}}else m(S,_.__data,0);s.bufferSubData(s.UNIFORM_BUFFER,y,_.__data)}}function m(_,b,M){typeof _=="number"||typeof _=="boolean"?b[0]=_:_.isMatrix3?(b[0]=_.elements[0],b[1]=_.elements[1],b[2]=_.elements[2],b[3]=0,b[4]=_.elements[3],b[5]=_.elements[4],b[6]=_.elements[5],b[7]=0,b[8]=_.elements[6],b[9]=_.elements[7],b[10]=_.elements[8],b[11]=0):ArrayBuffer.isView(_)?b.set(new _.constructor(_.buffer,_.byteOffset,b.length)):_.toArray(b,M)}function x(_,b,M,T){let y=_.value,S=b+"_"+M;if(T[S]===void 0)return typeof y=="number"||typeof y=="boolean"?T[S]=y:ArrayBuffer.isView(y)?T[S]=y.slice():T[S]=y.clone(),!0;{let C=T[S];if(typeof y=="number"||typeof y=="boolean"){if(C!==y)return T[S]=y,!0}else{if(ArrayBuffer.isView(y))return!0;if(C.equals(y)===!1)return C.copy(y),!0}}return!1}function g(_){let b=_.uniforms,M=0,T=16;for(let S=0,C=b.length;S<C;S++){let P=Array.isArray(b[S])?b[S]:[b[S]];for(let I=0,L=P.length;I<L;I++){let A=P[I],N=Array.isArray(A.value)?A.value:[A.value];for(let G=0,z=N.length;G<z;G++){let H=N[G],U=p(H),V=M%T,X=V%U.boundary,rt=V+X;M+=X,rt!==0&&T-rt<U.storage&&(M+=T-rt),A.__data=new Float32Array(U.storage/Float32Array.BYTES_PER_ELEMENT),A.__offset=M,M+=U.storage}}}let y=M%T;return y>0&&(M+=T-y),_.__size=M,_.__cache={},this}function p(_){let b={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(b.boundary=4,b.storage=4):_.isVector2?(b.boundary=8,b.storage=8):_.isVector3||_.isColor?(b.boundary=16,b.storage=12):_.isVector4?(b.boundary=16,b.storage=16):_.isMatrix3?(b.boundary=48,b.storage=48):_.isMatrix4?(b.boundary=64,b.storage=64):_.isTexture?Ot("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(_)?(b.boundary=16,b.storage=_.byteLength):Ot("WebGLRenderer: Unsupported uniform value type.",_),b}function v(_){let b=_.target;b.removeEventListener("dispose",v);let M=a.indexOf(b.__bindingPointIndex);a.splice(M,1),s.deleteBuffer(i[b.id]),delete i[b.id],delete r[b.id]}function w(){for(let _ in i)s.deleteBuffer(i[_]);a=[],i={},r={}}return{bind:l,update:c,dispose:w}}var Lx=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Xn=null;function Dx(){return Xn===null&&(Xn=new xr(Lx,16,16,Ri,Pn),Xn.name="DFG_LUT",Xn.minFilter=Ze,Xn.magFilter=Ze,Xn.wrapS=Un,Xn.wrapT=Un,Xn.generateMipmaps=!1,Xn.needsUpdate=!0),Xn}var cl=class{constructor(t={}){let{canvas:e=Du(),context:n=null,depth:i=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:u=!1,outputBufferType:f=un}=t;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=a;let x=f,g=new Set([Ao,To,Eo]),p=new Set([un,Cn,Rs,Cs,bo,So]),v=new Uint32Array(4),w=new Int32Array(4),_=new F,b=null,M=null,T=[],y=[],S=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Rn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let C=this,P=!1,I=null,L=null,A=null,N=null;this._outputColorSpace=$e;let G=0,z=0,H=null,U=-1,V=null,X=new Me,rt=new Me,st=null,St=new ht(0),bt=0,At=e.width,q=e.height,j=1,lt=null,_t=null,mt=new Me(0,0,At,q),zt=new Me(0,0,At,q),Se=!1,Xt=new Ss,te=!1,ce=!1,qt=new Qt,se=new F,Ae=new Me,we={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},ue=!1;function ve(){return H===null?j:1}let k=n;function De(R,B){return e.getContext(R,B)}let ee,D,E,W,Z,Q,ct,dt,tt,nt,ft,Lt,K,ot,vt,Dt,Bt,O,ut,et,pt,Mt,it;try{let R={alpha:!0,depth:i,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"186"}`),e.addEventListener("webglcontextlost",he,!1),e.addEventListener("webglcontextrestored",ne,!1),e.addEventListener("webglcontextcreationerror",ke,!1),k===null){let B="webgl2";if(k=De(B,R),k===null)throw De(B)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Nt()}catch(R){throw e.removeEventListener("webglcontextlost",he,!1),e.removeEventListener("webglcontextrestored",ne,!1),e.removeEventListener("webglcontextcreationerror",ke,!1),kt("WebGLRenderer: "+R.message),R}function Nt(){ee=new z0(k),ee.init(),pt=new Tx(k,ee),D=new P0(k,ee,t,pt),E=new wx(k,ee),D.reversedDepthBuffer&&u&&E.buffers.depth.setReversed(!0),L=k.createFramebuffer(),A=k.createFramebuffer(),N=k.createFramebuffer(),W=new V0(k),Z=new hx,Q=new Ex(k,ee,E,Z,D,pt,W),ct=new k0(C),dt=new Xf(k),Mt=new R0(k,dt),tt=new H0(k,dt,W,Mt),nt=new X0(k,tt,dt,Mt,W),O=new W0(k,D,Q),vt=new I0(Z),ft=new cx(C,ct,ee,D,Mt,vt),Lt=new Px(C,Z),K=new dx,ot=new yx(ee),Bt=new A0(C,ct,E,nt,m,l),Dt=new Sx(C,nt,D),it=new Ix(k,W,D,E),ut=new C0(k,ee,W),et=new G0(k,ee,W),W.programs=ft.programs,C.capabilities=D,C.extensions=ee,C.properties=Z,C.renderLists=K,C.shadowMap=Dt,C.state=E,C.info=W}x!==un&&(S=new Y0(x,e.width,e.height,o,i,r));let wt=new oh(C,k);this.xr=wt,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){let R=ee.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){let R=ee.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return j},this.setPixelRatio=function(R){R!==void 0&&(j=R,this.setSize(At,q,!1))},this.getSize=function(R){return R.set(At,q)},this.setSize=function(R,B,J=!0){if(wt.isPresenting){Ot("WebGLRenderer: Can't change size while VR device is presenting.");return}At=R,q=B,e.width=Math.floor(R*j),e.height=Math.floor(B*j),J===!0&&(e.style.width=R+"px",e.style.height=B+"px"),S!==null&&S.setSize(e.width,e.height),this.setViewport(0,0,R,B)},this.getDrawingBufferSize=function(R){return R.set(At*j,q*j).floor()},this.setDrawingBufferSize=function(R,B,J){At=R,q=B,j=J,e.width=Math.floor(R*J),e.height=Math.floor(B*J),this.setViewport(0,0,R,B)},this.setEffects=function(R){if(x===un){kt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(R){for(let B=0;B<R.length;B++)if(R[B].isOutputPass===!0){Ot("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}S.setEffects(R||[])},this.getCurrentViewport=function(R){return R.copy(X)},this.getViewport=function(R){return R.copy(mt)},this.setViewport=function(R,B,J,Y){R.isVector4?mt.set(R.x,R.y,R.z,R.w):mt.set(R,B,J,Y),E.viewport(X.copy(mt).multiplyScalar(j).round())},this.getScissor=function(R){return R.copy(zt)},this.setScissor=function(R,B,J,Y){R.isVector4?zt.set(R.x,R.y,R.z,R.w):zt.set(R,B,J,Y),E.scissor(rt.copy(zt).multiplyScalar(j).round())},this.getScissorTest=function(){return Se},this.setScissorTest=function(R){E.setScissorTest(Se=R)},this.setOpaqueSort=function(R){lt=R},this.setTransparentSort=function(R){_t=R},this.getClearColor=function(R){return R.copy(Bt.getClearColor())},this.setClearColor=function(){Bt.setClearColor(...arguments)},this.getClearAlpha=function(){return Bt.getClearAlpha()},this.setClearAlpha=function(){Bt.setClearAlpha(...arguments)},this.clear=function(R=!0,B=!0,J=!0){let Y=0;if(R){let $=!1;if(H!==null){let gt=H.texture.format;$=g.has(gt)}if($){let gt=H.texture.type,Et=p.has(gt),xt=Bt.getClearColor(),Rt=Bt.getClearAlpha(),Pt=xt.r,Vt=xt.g,Zt=xt.b;Et?(v[0]=Pt,v[1]=Vt,v[2]=Zt,v[3]=Rt,k.clearBufferuiv(k.COLOR,0,v)):(w[0]=Pt,w[1]=Vt,w[2]=Zt,w[3]=Rt,k.clearBufferiv(k.COLOR,0,w))}else Y|=k.COLOR_BUFFER_BIT}B&&(Y|=k.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),J&&(Y|=k.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),Y!==0&&k.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(R){R.setRenderer(this),I=R},this.dispose=function(){e.removeEventListener("webglcontextlost",he,!1),e.removeEventListener("webglcontextrestored",ne,!1),e.removeEventListener("webglcontextcreationerror",ke,!1),Bt.dispose(),K.dispose(),ot.dispose(),Z.dispose(),ct.dispose(),nt.dispose(),Mt.dispose(),it.dispose(),ft.dispose(),wt.dispose(),wt.removeEventListener("sessionstart",ia),wt.removeEventListener("sessionend",qs),Jn.stop()};function he(R){R.preventDefault(),Uc("WebGLRenderer: Context Lost."),P=!0}function ne(){Uc("WebGLRenderer: Context Restored."),P=!1;let R=W.autoReset,B=Dt.enabled,J=Dt.autoUpdate,Y=Dt.needsUpdate,$=Dt.type;Nt(),W.autoReset=R,Dt.enabled=B,Dt.autoUpdate=J,Dt.needsUpdate=Y,Dt.type=$}function ke(R){kt("WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function gn(R){let B=R.target;B.removeEventListener("dispose",gn),bn(B)}function bn(R){ji(R),Z.remove(R)}function ji(R){let B=Z.get(R).programs;B!==void 0&&(B.forEach(function(J){ft.releaseProgram(J)}),R.isShaderMaterial&&ft.releaseShaderCache(R))}this.renderBufferDirect=function(R,B,J,Y,$,gt){B===null&&(B=we);let Et=$.isMesh&&$.matrixWorld.determinantAffine()<0,xt=Fl(R,B,J,Y,$);E.setMaterial(Y,Et);let Rt=J.index,Pt=1;if(Y.wireframe===!0){if(Rt=tt.getWireframeAttribute(J),Rt===void 0)return;Pt=2}let Vt=J.drawRange,Zt=J.attributes.position,It=Vt.start*Pt,re=(Vt.start+Vt.count)*Pt;gt!==null&&(It=Math.max(It,gt.start*Pt),re=Math.min(re,(gt.start+gt.count)*Pt)),Rt!==null?(It=Math.max(It,0),re=Math.min(re,Rt.count)):Zt!=null&&(It=Math.max(It,0),re=Math.min(re,Zt.count));let Re=re-It;if(Re<0||Re===1/0)return;Mt.setup($,Y,xt,J,Rt);let ge,fe=ut;if(Rt!==null&&(ge=dt.get(Rt),fe=et,fe.setIndex(ge)),$.isMesh)Y.wireframe===!0?(E.setLineWidth(Y.wireframeLinewidth*ve()),fe.setMode(k.LINES)):fe.setMode(k.TRIANGLES);else if($.isLine){let Je=Y.linewidth;Je===void 0&&(Je=1),E.setLineWidth(Je*ve()),$.isLineSegments?fe.setMode(k.LINES):$.isLineLoop?fe.setMode(k.LINE_LOOP):fe.setMode(k.LINE_STRIP)}else $.isPoints?fe.setMode(k.POINTS):$.isSprite&&fe.setMode(k.TRIANGLES);if($.isBatchedMesh)if(ee.get("WEBGL_multi_draw"))fe.renderMultiDraw($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount);else{let Je=$._multiDrawStarts,Tt=$._multiDrawCounts,tn=$._multiDrawCount,ie=Rt?dt.get(Rt).bytesPerElement:1,xn=Z.get(Y).currentProgram.getUniforms();for(let Fn=0;Fn<tn;Fn++)xn.setValue(k,"_gl_DrawID",Fn),fe.render(Je[Fn]/ie,Tt[Fn])}else if($.isInstancedMesh)fe.renderInstances(It,Re,$.count);else if(J.isInstancedBufferGeometry){let Je=J._maxInstanceCount!==void 0?J._maxInstanceCount:1/0,Tt=Math.min(J.instanceCount,Je);fe.renderInstances(It,Re,Tt)}else fe.render(It,Re)};function na(R,B,J,Y){I!==null&&R.isNodeMaterial&&I.setObject(Y,R),te===!0&&vt.setState(R,J,!1),R.transparent===!0&&R.side===We&&R.forceSinglePass===!1?(R.side=Ue,R.needsUpdate=!0,hi(R,B,Y),R.side=Gn,R.needsUpdate=!0,hi(R,B,Y),R.side=We):hi(R,B,Y)}this.compile=function(R,B,J=null){J===null&&(J=R),I!==null&&I.renderStart(R,B,J),M=ot.get(J),M.init(B),y.push(M),J.traverseVisible(function($){$.isLight&&$.layers.test(B.layers)&&(M.pushLight($),$.castShadow&&M.pushShadow($))}),R!==J&&R.traverseVisible(function($){$.isLight&&$.layers.test(B.layers)&&(M.pushLight($),$.castShadow&&M.pushShadow($))}),M.setupLights(),I!==null&&I.updateLights(M.state.lightsArray),ce=this.localClippingEnabled,te=vt.init(this.clippingPlanes,ce),te===!0&&vt.setGlobalState(this.clippingPlanes,B),I!==null&&Dt.render(M.state.shadowsArray,J,B);let Y=new Set;return R.traverse(function($){if(!($.isMesh||$.isPoints||$.isLine||$.isSprite))return;let gt=$.material;if(gt)if(Array.isArray(gt))for(let Et=0;Et<gt.length;Et++){let xt=gt[Et];na(xt,J,B,$),Y.add(xt)}else na(gt,J,B,$),Y.add(gt)}),M=y.pop(),I!==null&&I.renderEnd(),Y},this.compileAsync=function(R,B,J=null){let Y=this.compile(R,B,J);return new Promise($=>{function gt(){if(Y.forEach(function(Et){let Rt=Z.get(Et).currentProgram;(Rt===void 0||Rt.isReady())&&Y.delete(Et)}),Y.size===0){$(R);return}setTimeout(gt,10)}ee.get("KHR_parallel_shader_compile")!==null?gt():setTimeout(gt,10)})};let Ws=null;function Xs(R){Ws&&Ws(R)}function ia(){Jn.stop()}function qs(){Jn.start()}let Jn=new ld;Jn.setAnimationLoop(Xs),typeof self<"u"&&Jn.setContext(self),this.setAnimationLoop=function(R){Ws=R,wt.setAnimationLoop(R),R===null?Jn.stop():Jn.start()},wt.addEventListener("sessionstart",ia),wt.addEventListener("sessionend",qs),this.render=function(R,B){if(B!==void 0&&B.isCamera!==!0){kt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;I!==null&&I.renderStart(R,B);let J=wt.enabled===!0&&wt.isPresenting===!0,Y=S!==null&&(H===null||J)&&S.begin(C,H);if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),wt.enabled===!0&&wt.isPresenting===!0&&(S===null||S.isCompositing()===!1)&&(wt.cameraAutoUpdate===!0&&wt.updateCamera(B),B=wt.getCamera()),R.isScene===!0&&R.onBeforeRender(C,R,B,H),M=ot.get(R,y.length),M.init(B),M.state.textureUnits=Q.getTextureUnits(),y.push(M),qt.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),Xt.setFromProjectionMatrix(qt,An,B.reversedDepth),ce=this.localClippingEnabled,te=vt.init(this.clippingPlanes,ce),b=K.get(R,T.length),b.init(),T.push(b),wt.enabled===!0&&wt.isPresenting===!0){let Et=C.xr.getDepthSensingMesh();Et!==null&&Li(Et,B,-1/0,C.sortObjects)}Li(R,B,0,C.sortObjects),b.finish(),I!==null&&I.updateLights(M.state.lightsArray),C.sortObjects===!0&&b.sort(lt,_t),ue=wt.enabled===!1||wt.isPresenting===!1||wt.hasDepthSensing()===!1,ue&&Bt.addToRenderList(b,R),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),te===!0&&vt.beginShadows();let $=M.state.shadowsArray;if(Dt.render($,R,B),te===!0&&vt.endShadows(),(Y&&S.hasRenderPass())===!1){let Et=b.opaque,xt=b.transmissive;if(M.setupLights(),B.isArrayCamera){let Rt=B.cameras;if(xt.length>0)for(let Pt=0,Vt=Rt.length;Pt<Vt;Pt++){let Zt=Rt[Pt];$s(Et,xt,R,Zt)}ue&&Bt.render(R);for(let Pt=0,Vt=Rt.length;Pt<Vt;Pt++){let Zt=Rt[Pt];Ys(b,R,Zt,Zt.viewport)}}else xt.length>0&&$s(Et,xt,R,B),ue&&Bt.render(R),Ys(b,R,B)}H!==null&&z===0&&(Q.updateMultisampleRenderTarget(H),Q.updateRenderTargetMipmap(H)),Y&&S.end(C),R.isScene===!0&&R.onAfterRender(C,R,B),Mt.resetDefaultState(),U=-1,V=null,y.pop(),y.length>0?(M=y[y.length-1],Q.setTextureUnits(M.state.textureUnits),te===!0&&vt.setGlobalState(C.clippingPlanes,M.state.camera)):M=null,T.pop(),T.length>0?b=T[T.length-1]:b=null,I!==null&&I.renderEnd()};function Li(R,B,J,Y){if(R.visible===!1)return;if(R.layers.test(B.layers)){if(R.isGroup)J=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(B);else if(R.isLightProbeGrid)M.pushLightProbeGrid(R);else if(R.isLight)M.pushLight(R),R.castShadow&&M.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||R.intersectsFrustum(Xt)){Y&&Ae.setFromMatrixPosition(R.matrixWorld).applyMatrix4(qt);let Et=nt.update(R),xt=R.material;xt.visible&&b.push(R,Et,xt,J,Ae.z,null,B)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||R.intersectsFrustum(Xt))){let Et=nt.update(R),xt=R.material;if(Y&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),Ae.copy(R.boundingSphere.center)):(Et.boundingSphere===null&&Et.computeBoundingSphere(),Ae.copy(Et.boundingSphere.center)),Ae.applyMatrix4(R.matrixWorld).applyMatrix4(qt)),Array.isArray(xt)){let Rt=Et.groups;for(let Pt=0,Vt=Rt.length;Pt<Vt;Pt++){let Zt=Rt[Pt],It=xt[Zt.materialIndex];It&&It.visible&&b.push(R,Et,It,J,Ae.z,Zt,B)}}else xt.visible&&b.push(R,Et,xt,J,Ae.z,null,B)}}let gt=R.children;for(let Et=0,xt=gt.length;Et<xt;Et++)Li(gt[Et],B,J,Y)}function Ys(R,B,J,Y){let{opaque:$,transmissive:gt,transparent:Et}=R;M.setupLightsView(J),te===!0&&vt.setGlobalState(C.clippingPlanes,J),Y&&E.viewport(X.copy(Y)),$.length>0&&Kn($,B,J),gt.length>0&&Kn(gt,B,J),Et.length>0&&Kn(Et,B,J),E.buffers.depth.setTest(!0),E.buffers.depth.setMask(!0),E.buffers.color.setMask(!0),E.setPolygonOffset(!1)}function $s(R,B,J,Y){if((J.isScene===!0?J.overrideMaterial:null)!==null)return;if(M.state.transmissionRenderTarget[Y.id]===void 0){let It=ee.has("EXT_color_buffer_half_float")||ee.has("EXT_color_buffer_float");M.state.transmissionRenderTarget[Y.id]=new cn(1,1,{generateMipmaps:!0,type:It?Pn:un,minFilter:Wn,samples:Math.max(4,D.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:jt.workingColorSpace})}let gt=M.state.transmissionRenderTarget[Y.id],Et=Y.viewport||X;gt.setSize(Et.z*C.transmissionResolutionScale,Et.w*C.transmissionResolutionScale);let xt=C.getRenderTarget(),Rt=C.getActiveCubeFace(),Pt=C.getActiveMipmapLevel();C.setRenderTarget(gt),C.getClearColor(St),bt=C.getClearAlpha(),bt<1&&C.setClearColor(16777215,.5),C.clear(),ue&&Bt.render(J);let Vt=C.toneMapping;C.toneMapping=Rn;let Zt=Y.viewport;if(Y.viewport!==void 0&&(Y.viewport=void 0),M.setupLightsView(Y),te===!0&&vt.setGlobalState(C.clippingPlanes,Y),Kn(R,J,Y),Q.updateMultisampleRenderTarget(gt),Q.updateRenderTargetMipmap(gt),ee.has("WEBGL_multisampled_render_to_texture")===!1){let It=!1;for(let re=0,Re=B.length;re<Re;re++){let ge=B[re],{object:fe,geometry:Je,material:Tt,group:tn}=ge;if(Tt.side===We&&fe.layers.test(Y.layers)){let ie=Tt.side;Tt.side=Ue,Tt.needsUpdate=!0,Zs(fe,J,Y,Je,Tt,tn),Tt.side=ie,Tt.needsUpdate=!0,It=!0}}It===!0&&(Q.updateMultisampleRenderTarget(gt),Q.updateRenderTargetMipmap(gt))}C.setRenderTarget(xt,Rt,Pt),C.setClearColor(St,bt),Zt!==void 0&&(Y.viewport=Zt),C.toneMapping=Vt}function Kn(R,B,J){let Y=B.isScene===!0?B.overrideMaterial:null;for(let $=0,gt=R.length;$<gt;$++){let Et=R[$],{object:xt,geometry:Rt,group:Pt}=Et,Vt=Et.material;Vt.allowOverride===!0&&Y!==null&&(Vt=Y),xt.layers.test(J.layers)&&Zs(xt,B,J,Rt,Vt,Pt)}}function Zs(R,B,J,Y,$,gt){I!==null&&$.isNodeMaterial&&I.setObject(R,$),R.onBeforeRender(C,B,J,Y,$,gt),R.modelViewMatrix.multiplyMatrices(J.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),$.onBeforeRender(C,B,J,Y,R,gt),$.transparent===!0&&$.side===We&&$.forceSinglePass===!1?($.side=Ue,$.needsUpdate=!0,C.renderBufferDirect(J,B,Y,$,R,gt),$.side=Gn,$.needsUpdate=!0,C.renderBufferDirect(J,B,Y,$,R,gt),$.side=We):C.renderBufferDirect(J,B,Y,$,R,gt),R.onAfterRender(C,B,J,Y,$,gt)}function hi(R,B,J){B.isScene!==!0&&(B=we);let Y=Z.get(R),$=M.state.lights,gt=M.state.shadowsArray,Et=$.state.version,xt=ft.getParameters(R,$.state,gt,B,J,M.state.lightProbeGridArray),Rt=ft.getProgramCacheKey(xt),Pt=Y.programs;Y.environment=R.isMeshStandardMaterial||R.isMeshLambertMaterial||R.isMeshPhongMaterial?B.environment:null,Y.fog=B.fog;let Vt=R.isMeshStandardMaterial||R.isMeshLambertMaterial&&!R.envMap||R.isMeshPhongMaterial&&!R.envMap;Y.envMap=ct.get(R.envMap||Y.environment,Vt),Y.envMapRotation=Y.environment!==null&&R.envMap===null?B.environmentRotation:R.envMapRotation,Pt===void 0&&(R.addEventListener("dispose",gn),Pt=new Map,Y.programs=Pt);let Zt=Pt.get(Rt);if(Zt!==void 0){if(Y.currentProgram===Zt&&Y.lightsStateVersion===Et)return Di(R,xt),Zt}else xt.uniforms=ft.getUniforms(R),I!==null&&R.isNodeMaterial&&I.build(R,J,xt),R.onBeforeCompile(xt,C),Zt=ft.acquireProgram(xt,Rt),Pt.set(Rt,Zt),Y.uniforms=xt.uniforms;let It=Y.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(It.clippingPlanes=vt.uniform),Di(R,xt),Y.needsLights=aa(R),Y.lightsStateVersion=Et,Y.needsLights&&(It.ambientLightColor.value=$.state.ambient,It.lightProbe.value=$.state.probe,It.sunLights.value=$.state.sun,It.sunLightShadows.value=$.state.sunShadow,It.directionalLights.value=$.state.directional,It.directionalLightShadows.value=$.state.directionalShadow,It.spotLights.value=$.state.spot,It.spotLightShadows.value=$.state.spotShadow,It.rectAreaLights.value=$.state.rectArea,It.ltc_1.value=$.state.rectAreaLTC1,It.ltc_2.value=$.state.rectAreaLTC2,It.pointLights.value=$.state.point,It.pointLightShadows.value=$.state.pointShadow,It.hemisphereLights.value=$.state.hemi,It.sunShadowMatrix.value=$.state.sunShadowMatrix,It.sunShadowCascade.value=$.state.sunShadowCascade,It.directionalShadowMatrix.value=$.state.directionalShadowMatrix,It.spotLightMatrix.value=$.state.spotLightMatrix,It.spotLightMap.value=$.state.spotLightMap,It.pointShadowMatrix.value=$.state.pointShadowMatrix),Y.lightProbeGrid=M.state.lightProbeGridArray.length>0,Y.currentProgram=Zt,Y.uniformsList=null,Zt}function jn(R){if(R.uniformsList===null){let B=R.currentProgram.getUniforms();R.uniformsList=Ls.seqWithValue(B.seq,R.uniforms)}return R.uniformsList}function Di(R,B){let J=Z.get(R);J.outputColorSpace=B.outputColorSpace,J.batching=B.batching,J.batchingColor=B.batchingColor,J.instancing=B.instancing,J.instancingColor=B.instancingColor,J.instancingMorph=B.instancingMorph,J.skinning=B.skinning,J.morphTargets=B.morphTargets,J.morphNormals=B.morphNormals,J.morphColors=B.morphColors,J.morphTargetsCount=B.morphTargetsCount,J.numClippingPlanes=B.numClippingPlanes,J.numIntersection=B.numClipIntersection,J.vertexAlphas=B.vertexAlphas,J.vertexTangents=B.vertexTangents,J.toneMapping=B.toneMapping}function sa(R,B){if(R.length===0)return null;if(R.length===1)return R[0].texture!==null?R[0]:null;_.setFromMatrixPosition(B.matrixWorld);for(let J=0,Y=R.length;J<Y;J++){let $=R[J];if($.texture!==null&&$.boundingBox.containsPoint(_))return $}return null}function Fl(R,B,J,Y,$){B.isScene!==!0&&(B=we),Q.resetTextureUnits();let gt=B.fog,Et=Y.isMeshStandardMaterial||Y.isMeshLambertMaterial||Y.isMeshPhongMaterial?B.environment:null,xt=H===null?C.outputColorSpace:H.isXRRenderTarget===!0?H.texture.colorSpace:jt.workingColorSpace,Rt=Y.isMeshStandardMaterial||Y.isMeshLambertMaterial&&!Y.envMap||Y.isMeshPhongMaterial&&!Y.envMap,Pt=ct.get(Y.envMap||Et,Rt),Vt=Y.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,Zt=!!J.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),It=!!J.morphAttributes.position,re=!!J.morphAttributes.normal,Re=!!J.morphAttributes.color,ge=Rn;Y.toneMapped&&(H===null||H.isXRRenderTarget===!0)&&(ge=C.toneMapping);let fe=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,Je=fe!==void 0?fe.length:0,Tt=Z.get(Y),tn=M.state.lights;if(te===!0&&(ce===!0||R!==V)){let pe=R===V&&Y.id===U;vt.setState(Y,R,pe)}let ie=!1;Y.version===Tt.__version?(Tt.needsLights&&Tt.lightsStateVersion!==tn.state.version||Tt.outputColorSpace!==xt||$.isBatchedMesh&&Tt.batching===!1||!$.isBatchedMesh&&Tt.batching===!0||$.isBatchedMesh&&Tt.batchingColor===!0&&$._colorsTexture===null||$.isBatchedMesh&&Tt.batchingColor===!1&&$._colorsTexture!==null||$.isInstancedMesh&&Tt.instancing===!1||!$.isInstancedMesh&&Tt.instancing===!0||$.isSkinnedMesh&&Tt.skinning===!1||!$.isSkinnedMesh&&Tt.skinning===!0||$.isInstancedMesh&&Tt.instancingColor===!0&&$.instanceColor===null||$.isInstancedMesh&&Tt.instancingColor===!1&&$.instanceColor!==null||$.isInstancedMesh&&Tt.instancingMorph===!0&&$.morphTexture===null||$.isInstancedMesh&&Tt.instancingMorph===!1&&$.morphTexture!==null||Tt.envMap!==Pt||Y.fog===!0&&Tt.fog!==gt||Tt.numClippingPlanes!==void 0&&(Tt.numClippingPlanes!==vt.numPlanes||Tt.numIntersection!==vt.numIntersection)||Tt.vertexAlphas!==Vt||Tt.vertexTangents!==Zt||Tt.morphTargets!==It||Tt.morphNormals!==re||Tt.morphColors!==Re||Tt.toneMapping!==ge||Tt.morphTargetsCount!==Je||!!Tt.lightProbeGrid!=M.state.lightProbeGridArray.length>0)&&(ie=!0):(ie=!0,Tt.__version=Y.version);let xn=Tt.currentProgram;ie===!0&&(xn=hi(Y,B,$),I&&Y.isNodeMaterial&&I.onUpdateProgram(Y,xn,Tt));let Fn=!1,ui=!1,Qi=!1,de=xn.getUniforms(),Ee=Tt.uniforms;if(E.useProgram(xn.program)&&(Fn=!0,ui=!0,Qi=!0),Y.id!==U&&(U=Y.id,ui=!0),Tt.needsLights){let pe=sa(M.state.lightProbeGridArray,$);Tt.lightProbeGrid!==pe&&(Tt.lightProbeGrid=pe,ui=!0)}if(Fn||V!==R){E.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),de.setValue(k,"projectionMatrix",R.projectionMatrix),de.setValue(k,"viewMatrix",R.matrixWorldInverse);let fi=de.map.cameraPosition;fi!==void 0&&fi.setValue(k,se.setFromMatrixPosition(R.matrixWorld)),D.logarithmicDepthBuffer&&de.setValue(k,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&de.setValue(k,"isOrthographic",R.isOrthographicCamera===!0),V!==R&&(V=R,ui=!0,Qi=!0)}if(Tt.needsLights&&(tn.state.sunShadowMap.length>0&&de.setValue(k,"sunShadowMap",tn.state.sunShadowMap,Q),tn.state.directionalShadowMap.length>0&&de.setValue(k,"directionalShadowMap",tn.state.directionalShadowMap,Q),tn.state.spotShadowMap.length>0&&de.setValue(k,"spotShadowMap",tn.state.spotShadowMap,Q),tn.state.pointShadowMap.length>0&&de.setValue(k,"pointShadowMap",tn.state.pointShadowMap,Q)),$.isSkinnedMesh){de.setOptional(k,$,"bindMatrix"),de.setOptional(k,$,"bindMatrixInverse");let pe=$.skeleton;pe&&(pe.boneTexture===null&&pe.computeBoneTexture(),de.setValue(k,"boneTexture",pe.boneTexture,Q))}$.isBatchedMesh&&(de.setOptional(k,$,"batchingTexture"),de.setValue(k,"batchingTexture",$._matricesTexture,Q),de.setOptional(k,$,"batchingIdTexture"),de.setValue(k,"batchingIdTexture",$._indirectTexture,Q),de.setOptional(k,$,"batchingColorTexture"),$._colorsTexture!==null&&de.setValue(k,"batchingColorTexture",$._colorsTexture,Q));let di=J.morphAttributes;if((di.position!==void 0||di.normal!==void 0||di.color!==void 0)&&O.update($,J,xn),(ui||Tt.receiveShadow!==$.receiveShadow)&&(Tt.receiveShadow=$.receiveShadow,de.setValue(k,"receiveShadow",$.receiveShadow)),(Y.isMeshStandardMaterial||Y.isMeshLambertMaterial||Y.isMeshPhongMaterial)&&Y.envMap===null&&B.environment!==null&&(Ee.envMapIntensity.value=B.environmentIntensity),Ee.dfgLUT!==void 0&&(Ee.dfgLUT.value=Dx()),ui){if(de.setValue(k,"toneMappingExposure",C.toneMappingExposure),Tt.needsLights&&ra(Ee,Qi),gt&&Y.fog===!0&&Lt.refreshFogUniforms(Ee,gt),Lt.refreshMaterialUniforms(Ee,Y,j,q,M.state.transmissionRenderTarget[R.id]),Tt.needsLights&&Tt.lightProbeGrid){let pe=Tt.lightProbeGrid;Ee.probesSH.value=pe.texture,Ee.probesMin.value.copy(pe.boundingBox.min),Ee.probesMax.value.copy(pe.boundingBox.max),Ee.probesResolution.value.copy(pe.resolution)}Ls.upload(k,jn(Tt),Ee,Q)}if(Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(Ls.upload(k,jn(Tt),Ee,Q),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&de.setValue(k,"center",$.center),de.setValue(k,"modelViewMatrix",$.modelViewMatrix),de.setValue(k,"normalMatrix",$.normalMatrix),de.setValue(k,"modelMatrix",$.matrixWorld),Y.uniformsGroups!==void 0){let pe=Y.uniformsGroups;for(let fi=0,ts=pe.length;fi<ts;fi++){let wh=pe[fi];it.update(wh,xn),it.bind(wh,xn)}}return xn}function ra(R,B){R.ambientLightColor.needsUpdate=B,R.lightProbe.needsUpdate=B,R.sunLights.needsUpdate=B,R.sunLightShadows.needsUpdate=B,R.directionalLights.needsUpdate=B,R.directionalLightShadows.needsUpdate=B,R.pointLights.needsUpdate=B,R.pointLightShadows.needsUpdate=B,R.spotLights.needsUpdate=B,R.spotLightShadows.needsUpdate=B,R.rectAreaLights.needsUpdate=B,R.hemisphereLights.needsUpdate=B}function aa(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return G},this.getActiveMipmapLevel=function(){return z},this.getRenderTarget=function(){return H},this.setRenderTargetTextures=function(R,B,J){let Y=Z.get(R);Y.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,Y.__autoAllocateDepthBuffer===!1&&(Y.__useRenderToTexture=!1),Z.get(R.texture).__webglTexture=B,Z.get(R.depthTexture).__webglTexture=Y.__autoAllocateDepthBuffer?void 0:J,Y.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,B){let J=Z.get(R);J.__webglFramebuffer=B,J.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(R,B=0,J=0){H=R,G=B,z=J;let Y=null,$=!1,gt=!1;if(R){let xt=Z.get(R);if(xt.__useDefaultFramebuffer!==void 0){E.bindFramebuffer(k.FRAMEBUFFER,xt.__webglFramebuffer),X.copy(R.viewport),rt.copy(R.scissor),st=R.scissorTest,E.viewport(X),E.scissor(rt),E.setScissorTest(st),U=-1;return}else if(xt.__webglFramebuffer===void 0)Q.setupRenderTarget(R);else if(xt.__hasExternalTextures)Q.rebindTextures(R,Z.get(R.texture).__webglTexture,Z.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){let Vt=R.depthTexture;if(xt.__boundDepthTexture!==Vt){if(Vt!==null&&Z.has(Vt)&&(R.width!==Vt.image.width||R.height!==Vt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Q.setupDepthRenderbuffer(R)}}let Rt=R.texture;(Rt.isData3DTexture||Rt.isDataArrayTexture||Rt.isCompressedArrayTexture)&&(gt=!0);let Pt=Z.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(Pt[B])?Y=Pt[B][J]:Y=Pt[B],$=!0):R.samples>0&&Q.useMultisampledRTT(R)===!1?Y=Z.get(R).__webglMultisampledFramebuffer:Array.isArray(Pt)?Y=Pt[J]:Y=Pt,X.copy(R.viewport),rt.copy(R.scissor),st=R.scissorTest}else X.copy(mt).multiplyScalar(j).floor(),rt.copy(zt).multiplyScalar(j).floor(),st=Se;if(J!==0&&(Y=L),E.bindFramebuffer(k.FRAMEBUFFER,Y)&&E.drawBuffers(R,Y),E.viewport(X),E.scissor(rt),E.setScissorTest(st),$){let xt=Z.get(R.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_CUBE_MAP_POSITIVE_X+B,xt.__webglTexture,J)}else if(gt){let xt=B;for(let Rt=0;Rt<R.textures.length;Rt++){let Pt=Z.get(R.textures[Rt]);k.framebufferTextureLayer(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0+Rt,Pt.__webglTexture,J,xt)}}else if(R!==null&&J!==0){let xt=Z.get(R.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,xt.__webglTexture,J)}U=-1};function oa(R){let B=Z.get(R);return(B.__readFormat!==R.format||B.__readType!==R.type)&&(B.__readFormat=R.format,B.__readType=R.type,B.__formatReadable=D.textureFormatReadable(R.format),B.__typeReadable=D.textureTypeReadable(R.type)),B}this.readRenderTargetPixels=function(R,B,J,Y,$,gt,Et,xt=0){if(!(R&&R.isWebGLRenderTarget)){kt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Rt=Z.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Et!==void 0&&(Rt=Rt[Et]),Rt){E.bindFramebuffer(k.FRAMEBUFFER,Rt);try{let Pt=R.textures[xt],Vt=Pt.format,Zt=Pt.type;R.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+xt);let It=oa(Pt);if(It.__formatReadable===!1){kt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(It.__typeReadable===!1){kt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=R.width-Y&&J>=0&&J<=R.height-$&&k.readPixels(B,J,Y,$,pt.convert(Vt),pt.convert(Zt),gt)}finally{let Pt=H!==null?Z.get(H).__webglFramebuffer:null;E.bindFramebuffer(k.FRAMEBUFFER,Pt)}}},this.readRenderTargetPixelsAsync=async function(R,B,J,Y,$,gt,Et,xt=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Rt=Z.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Et!==void 0&&(Rt=Rt[Et]),Rt)if(B>=0&&B<=R.width-Y&&J>=0&&J<=R.height-$){E.bindFramebuffer(k.FRAMEBUFFER,Rt);let Pt=R.textures[xt],Vt=Pt.format,Zt=Pt.type;R.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+xt);let It=oa(Pt);if(It.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(It.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let re=k.createBuffer();k.bindBuffer(k.PIXEL_PACK_BUFFER,re),k.bufferData(k.PIXEL_PACK_BUFFER,gt.byteLength,k.STREAM_READ),k.readPixels(B,J,Y,$,pt.convert(Vt),pt.convert(Zt),0),k.bindBuffer(k.PIXEL_PACK_BUFFER,null);let Re=H!==null?Z.get(H).__webglFramebuffer:null;E.bindFramebuffer(k.FRAMEBUFFER,Re);let ge=k.fenceSync(k.SYNC_GPU_COMMANDS_COMPLETE,0);return k.flush(),await Nu(k,ge,4),k.bindBuffer(k.PIXEL_PACK_BUFFER,re),k.getBufferSubData(k.PIXEL_PACK_BUFFER,0,gt),k.bindBuffer(k.PIXEL_PACK_BUFFER,null),k.deleteBuffer(re),k.deleteSync(ge),gt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,B=null,J=0){let Y=Math.pow(2,-J),$=Math.floor(R.image.width*Y),gt=Math.floor(R.image.height*Y),Et=B!==null?B.x:0,xt=B!==null?B.y:0;Q.setTexture2D(R,0),k.copyTexSubImage2D(k.TEXTURE_2D,J,0,0,Et,xt,$,gt),E.unbindTexture()},this.copyTextureToTexture=function(R,B,J=null,Y=null,$=0,gt=0){let Et,xt,Rt,Pt,Vt,Zt,It,re,Re,ge=R.isCompressedTexture?R.mipmaps[gt]:R.image;if(J!==null)Et=J.max.x-J.min.x,xt=J.max.y-J.min.y,Rt=J.isBox3?J.max.z-J.min.z:1,Pt=J.min.x,Vt=J.min.y,Zt=J.isBox3?J.min.z:0;else{let Ee=Math.pow(2,-$);Et=Math.floor(ge.width*Ee),xt=Math.floor(ge.height*Ee),R.isDataArrayTexture?Rt=ge.depth:R.isData3DTexture?Rt=Math.floor(ge.depth*Ee):Rt=1,Pt=0,Vt=0,Zt=0}Y!==null?(It=Y.x,re=Y.y,Re=Y.z):(It=0,re=0,Re=0);let fe=pt.convert(B.format),Je=pt.convert(B.type),Tt;B.isData3DTexture?(Q.setTexture3D(B,0),Tt=k.TEXTURE_3D):B.isDataArrayTexture||B.isCompressedArrayTexture?(Q.setTexture2DArray(B,0),Tt=k.TEXTURE_2D_ARRAY):(Q.setTexture2D(B,0),Tt=k.TEXTURE_2D),E.activeTexture(k.TEXTURE0),E.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,B.flipY),E.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),E.pixelStorei(k.UNPACK_ALIGNMENT,B.unpackAlignment);let tn=E.getParameter(k.UNPACK_ROW_LENGTH),ie=E.getParameter(k.UNPACK_IMAGE_HEIGHT),xn=E.getParameter(k.UNPACK_SKIP_PIXELS),Fn=E.getParameter(k.UNPACK_SKIP_ROWS),ui=E.getParameter(k.UNPACK_SKIP_IMAGES);E.pixelStorei(k.UNPACK_ROW_LENGTH,ge.width),E.pixelStorei(k.UNPACK_IMAGE_HEIGHT,ge.height),E.pixelStorei(k.UNPACK_SKIP_PIXELS,Pt),E.pixelStorei(k.UNPACK_SKIP_ROWS,Vt),E.pixelStorei(k.UNPACK_SKIP_IMAGES,Zt);let Qi=R.isDataArrayTexture||R.isData3DTexture,de=B.isDataArrayTexture||B.isData3DTexture;if(R.isDepthTexture){let Ee=Z.get(R),di=Z.get(B),pe=Z.get(Ee.__renderTarget),fi=Z.get(di.__renderTarget);E.bindFramebuffer(k.READ_FRAMEBUFFER,pe.__webglFramebuffer),E.bindFramebuffer(k.DRAW_FRAMEBUFFER,fi.__webglFramebuffer);for(let ts=0;ts<Rt;ts++)Qi&&(k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,Z.get(R).__webglTexture,$,Zt+ts),k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,Z.get(B).__webglTexture,gt,Re+ts)),k.blitFramebuffer(Pt,Vt,Et,xt,It,re,Et,xt,k.DEPTH_BUFFER_BIT,k.NEAREST);E.bindFramebuffer(k.READ_FRAMEBUFFER,null),E.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else if($!==0||R.isRenderTargetTexture||Z.has(R)){let Ee=Z.get(R),di=Z.get(B);E.bindFramebuffer(k.READ_FRAMEBUFFER,A),E.bindFramebuffer(k.DRAW_FRAMEBUFFER,N);for(let pe=0;pe<Rt;pe++)Qi?k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,Ee.__webglTexture,$,Zt+pe):k.framebufferTexture2D(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,Ee.__webglTexture,$),de?k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,di.__webglTexture,gt,Re+pe):k.framebufferTexture2D(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,di.__webglTexture,gt),$!==0?k.blitFramebuffer(Pt,Vt,Et,xt,It,re,Et,xt,k.COLOR_BUFFER_BIT,k.NEAREST):de?k.copyTexSubImage3D(Tt,gt,It,re,Re+pe,Pt,Vt,Et,xt):k.copyTexSubImage2D(Tt,gt,It,re,Pt,Vt,Et,xt);E.bindFramebuffer(k.READ_FRAMEBUFFER,null),E.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else de?R.isDataTexture||R.isData3DTexture?k.texSubImage3D(Tt,gt,It,re,Re,Et,xt,Rt,fe,Je,ge.data):B.isCompressedArrayTexture?k.compressedTexSubImage3D(Tt,gt,It,re,Re,Et,xt,Rt,fe,ge.data):k.texSubImage3D(Tt,gt,It,re,Re,Et,xt,Rt,fe,Je,ge):R.isDataTexture?k.texSubImage2D(k.TEXTURE_2D,gt,It,re,Et,xt,fe,Je,ge.data):R.isCompressedTexture?k.compressedTexSubImage2D(k.TEXTURE_2D,gt,It,re,ge.width,ge.height,fe,ge.data):k.texSubImage2D(k.TEXTURE_2D,gt,It,re,Et,xt,fe,Je,ge);E.pixelStorei(k.UNPACK_ROW_LENGTH,tn),E.pixelStorei(k.UNPACK_IMAGE_HEIGHT,ie),E.pixelStorei(k.UNPACK_SKIP_PIXELS,xn),E.pixelStorei(k.UNPACK_SKIP_ROWS,Fn),E.pixelStorei(k.UNPACK_SKIP_IMAGES,ui),gt===0&&B.generateMipmaps&&k.generateMipmap(Tt),E.unbindTexture()},this.initRenderTarget=function(R){Z.get(R).__webglFramebuffer===void 0&&Q.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?Q.setTextureCube(R,0):R.isData3DTexture?Q.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?Q.setTexture2DArray(R,0):Q.setTexture2D(R,0),E.unbindTexture()},this.resetState=function(){G=0,z=0,H=null,E.reset(),Mt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return An}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=jt._getDrawingBufferColorSpace(t),e.unpackColorSpace=jt._getUnpackColorSpace()}};var dl=class extends ri{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;let t=new ye;t.deleteAttribute("uv");let e=new Ht({side:Ue}),n=new Ht,i=new Ir(16777215,900,28,2);i.position.set(.418,16.199,.3),this.add(i);let r=new Ct(t,e);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);let a=new nn(t,n,6),o=new Te;o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),o.updateMatrix(),a.setMatrixAt(0,o.matrix),o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),o.updateMatrix(),a.setMatrixAt(1,o.matrix),o.position.set(6.167,.857,7.803),o.rotation.set(0,.561,0),o.scale.set(3.927,6.285,3.687),o.updateMatrix(),a.setMatrixAt(2,o.matrix),o.position.set(-2.017,.018,6.124),o.rotation.set(0,.333,0),o.scale.set(2.002,4.566,2.064),o.updateMatrix(),a.setMatrixAt(3,o.matrix),o.position.set(2.291,-.756,-2.621),o.rotation.set(0,-.286,0),o.scale.set(1.546,1.552,1.496),o.updateMatrix(),a.setMatrixAt(4,o.matrix),o.position.set(-2.193,-.369,-5.547),o.rotation.set(0,.516,0),o.scale.set(3.875,3.487,2.986),o.updateMatrix(),a.setMatrixAt(5,o.matrix),this.add(a);let l=new Ct(t,Ns(50));l.position.set(-16.116,14.37,8.208),l.scale.set(.1,2.428,2.739),this.add(l);let c=new Ct(t,Ns(50));c.position.set(-16.109,18.021,-8.207),c.scale.set(.1,2.425,2.751),this.add(c);let h=new Ct(t,Ns(17));h.position.set(14.904,12.198,-1.832),h.scale.set(.15,4.265,6.331),this.add(h);let d=new Ct(t,Ns(43));d.position.set(-.462,8.89,14.52),d.scale.set(4.38,5.441,.088),this.add(d);let u=new Ct(t,Ns(20));u.position.set(3.235,11.486,-12.541),u.scale.set(2.5,2,.1),this.add(u);let f=new Ct(t,Ns(100));f.position.set(0,20,0),f.scale.set(1,.1,1),this.add(f)}dispose(){let t=new Set;this.traverse(e=>{e.isMesh&&(t.add(e.geometry),t.add(e.material))});for(let e of t)e.dispose()}};function Ns(s){return new Ar({color:0,emissive:16777215,emissiveIntensity:s})}var Us=Math.PI*2,Ci=9.81,at=(s,t,e)=>s<t?t:s>e?e:s,le=(s,t,e)=>s+(t-s)*e;var Xe=(s,t,e)=>{let n=at((e-s)/(t-s),0,1);return n*n*(3-2*n)};function li(s){return s%=Us,s>Math.PI?s-=Us:s<-Math.PI&&(s+=Us),s}function sn(s,t,e){let n=(s-t)%e;return n>e/2?n-=e:n<=-e/2&&(n+=e),n}function _e(s,t){return(s%t+t)%t}function qe(s){let t=s>>>0,e=()=>{t=t+1831565813>>>0;let n=t;return n=Math.imul(n^n>>>15,n|1),n^=n+Math.imul(n^n>>>7,n|61),((n^n>>>14)>>>0)/4294967296};return e.range=(n,i)=>n+(i-n)*e(),e.gauss=()=>{let n=0;for(let i=0;i<6;i++)n+=e();return(n-3)/Math.sqrt(.5)},e}function md(s,t){if(t<=s[0][0])return s[0][1];for(let e=1;e<s.length;e++)if(t<=s[e][0]){let[n,i]=s[e-1],[r,a]=s[e];return i+(a-i)*(t-n)/(r-n)}return s[s.length-1][1]}function Ie(s,t=3){if(s==null||!isFinite(s))return"--:--.---";let e=s<0?"-":"";s=Math.abs(s);let n=Math.floor(s/60),i=s-n*60;return`${e}${n}:${i.toFixed(t).padStart(t+3,"0")}`}var Ut={ASPHALT:0,KERB:1,GRASS:2,GRAVEL:3,RUNOFF:4,PIT:5,WALL:6},fl=12,gd=4.5;function Fx(s){let t=s.segments.map(x=>{let g=typeof x[x.length-1]=="object"?x[x.length-1]:{};return x[0]==="S"?{t:"S",len:x[1],free:!!g.free,fixed:!!g.fixed,name:g.n}:{t:"A",dir:x[0]==="L"?1:-1,r:x[1],ang:x[2]*Math.PI/180,free:!!g.free,name:g.n}}),e=t.filter(x=>x.t==="S"&&x.free),n=e.length>=2?e:t.filter(x=>x.t==="S"&&!x.fixed),i=t.find(x=>x.t==="A"&&x.free);if(n.length<2||!i)throw new Error(`${s.id}: need >=2 adjustable straights and 1 free arc`);let r=0;for(let x of t)x.t==="A"&&!x.free&&(r+=x.dir*x.ang);let a=s.turns*Us-r;if(i.ang=Math.abs(a),i.dir=Math.sign(a),i.ang<.05)throw new Error(`${s.id}: free arc angle degenerate`);let o=s.smooth??14,l=()=>{let x=0;for(let g of t)g.length=g.t==="S"?g.len:g.r*g.ang,g.start=x,x+=g.length;return x},c=l(),h=2*Math.round(c/2),d=()=>{c=l();let x=c/h,g=new Float64Array(h);for(let S of t){if(S.t!=="A")continue;let C=S.dir/S.r,P=S.start,I=S.start+S.length;for(let L=Math.max(0,Math.floor(P/x));L<h&&L*x<I;L++){let A=Math.min(I,(L+1)*x)-Math.max(P,L*x);A>0&&(g[L]+=C*A/x)}}let p=Math.max(.01,o/x),v=Math.ceil(p*3),w=[],_=0;for(let S=-v;S<=v;S++){let C=Math.exp(-(S*S)/(2*p*p));w.push(C),_+=C}let b=new Float64Array(h);for(let S=0;S<h;S++){let C=0;for(let P=-v;P<=v;P++)C+=g[(S+P+h*4)%h]*w[P+v];b[S]=C/_}let M=new Float64Array(h+1),T=new Float64Array(h+1),y=new Float64Array(h+1);for(let S=0;S<h;S++){let C=y[S]+b[S]*x/2;M[S+1]=M[S]+Math.cos(C)*x,T[S+1]=T[S]+Math.sin(C)*x,y[S+1]=y[S]+b[S]*x}return{x:M,y:T,th:y,kappa:b,step:x}},u,f=new Set(n);for(let x=0;x<60;x++){u=d();let g=u.x[h],p=u.y[h];if(Math.hypot(g,p)<1e-4)break;let v=[...f],w=0,_=0,b=0,M=v.map(C=>{let P=Math.min(h,Math.max(0,Math.round((C.start+C.length/2)/u.step))),I=u.th[P],L=C.len*C.len,A=Math.cos(I),N=Math.sin(I);return w+=A*A*L,_+=A*N*L,b+=N*N*L,[A,N,L]}),T=w*b-_*_;if(Math.abs(T)<1e-9)throw new Error(`${s.id}: straights are all parallel; cannot close the loop`);let y=(-g*b+p*_)/T,S=(g*_-p*w)/T;if(v.forEach((C,P)=>{let[I,L,A]=M[P],N=C.len+A*(I*y+L*S)*.8;N<25?(C.len=25,f.delete(C)):C.len=N}),f.size<2)throw new Error(`${s.id}: not enough room to close the loop; reshape the corners`)}u=d();let m=Math.hypot(u.x[h],u.y[h]);if(m>.05)throw new Error(`${s.id}: loop did not close (${m.toFixed(3)} m)`);return{...u,N:h,total:c,segs:t}}function Nx(s){let t=s.scale??1,e=s.points.map(I=>({x:I[0]*t,y:I[1]*t,r:I[2]??80,o:I[3]||{}})),n=e.length,i=e.map((I,L)=>{let A=e[(L+n-1)%n],N=e[(L+1)%n],G=A.x-I.x,z=A.y-I.y,H=N.x-I.x,U=N.y-I.y,V=Math.hypot(G,z),X=Math.hypot(H,U);G/=V,z/=V,H/=X,U/=X;let rt=Math.acos(at(G*H+z*U,-1,1)),st=Math.PI-rt,St=I.r*Math.tan(st/2),bt=-G*U+z*H>0,At=G+H,q=z+U,j=Math.hypot(At,q)||1,lt=I.r/Math.sin(rt/2),_t=I.x+At/j*lt,mt=I.y+q/j*lt;return{T:St,theta:st,left:bt,cx:_t,cy:mt,r:I.r,sx:I.x+G*St,sy:I.y+z*St,ex:I.x+H*St,ey:I.y+U*St,name:I.o.n}});for(let I=0;I<n;I++){let L=(I+1)%n,A=Math.hypot(e[L].x-e[I].x,e[L].y-e[I].y);if(i[I].T+i[L].T>A-1)throw new Error(`${s.id}: corners ${I} and ${L} overlap (need ${(i[I].T+i[L].T).toFixed(0)} m, edge is ${A.toFixed(0)} m)`)}let r=[[i[0].ex,i[0].ey]],a=[],o=0,l=(I,L)=>{let A=r[r.length-1];o+=Math.hypot(I-A[0],L-A[1]),r.push([I,L])};for(let I=1;I<=n;I++){let L=I%n;a[I-1]=o,l(i[L].sx,i[L].sy);let A=i[L],N=Math.atan2(A.sy-A.cy,A.sx-A.cx),G=Math.max(2,Math.ceil(A.theta/Math.min(.06,.7/A.r)));for(let z=1;z<=G;z++){let H=N+(A.left?1:-1)*(A.theta*z)/G;l(A.cx+Math.cos(H)*A.r,A.cy+Math.sin(H)*A.r)}}let c=o,h=(I,L)=>{let A=[0];for(let H=1;H<I.length;H++)A.push(A[H-1]+Math.hypot(I[H][0]-I[H-1][0],I[H][1]-I[H-1][1]));let N=A[A.length-1],G=[],z=1;for(let H=0;H<L;H++){let U=H/L*N;for(;z<A.length-1&&A[z]<U;)z++;let V=(U-A[z-1])/(A[z]-A[z-1]||1);G.push([le(I[z-1][0],I[z][0],V),le(I[z-1][1],I[z][1],V)])}return G.push([G[0][0],G[0][1]]),{pts:G,total:N}},d=2*Math.round(c/2),u=h(r,d),f=u.total/d,m=Math.max(.01,(s.smooth??8)/f),x=Math.ceil(m*3),g=[],p=0;for(let I=-x;I<=x;I++){let L=Math.exp(-(I*I)/(2*m*m));g.push(L),p+=L}let v=new Float64Array(d),w=new Float64Array(d);for(let I=0;I<d;I++){let L=0,A=0;for(let N=-x;N<=x;N++){let G=u.pts[(I+N+d*8)%d];L+=G[0]*g[N+x],A+=G[1]*g[N+x]}v[I]=L/p,w[I]=A/p}let _=Array.from({length:d+1},(I,L)=>[v[L%d],w[L%d]]),b=h(_,d),M=new Float64Array(d+1),T=new Float64Array(d+1);b.pts.forEach((I,L)=>{M[L]=I[0],T[L]=I[1]});let[y,S]=s.start||[0,0],C=(a[y]+S)/c*b.total,P=i.map((I,L)=>({t:"A",name:I.name,length:I.theta*I.r,start:0,dir:I.left?1:-1,r:I.r,ang:I.theta}));return{x:M,y:T,N:d,total:b.total,step:b.total/d,segs:P,startAt:C,edgeStart:a}}function Ux(s,t,e,n){let i=n.length,r=new Float64Array(i),a=new Float64Array(i),o=new Float64Array(i);for(let h=0;h<i;h++){if(h>=2&&(o[h]=e[h-2]/r[h-2]),h>=1){let u=t[h-1];h>=2&&(u-=o[h]*r[h-2]*a[h-1]),a[h]=u/r[h-1]}let d=s[h];h>=1&&(d-=a[h]*a[h]*r[h-1]),h>=2&&(d-=o[h]*o[h]*r[h-2]),r[h]=d}let l=new Float64Array(i);for(let h=0;h<i;h++){let d=n[h];h>=1&&(d-=a[h]*l[h-1]),h>=2&&(d-=o[h]*l[h-2]),l[h]=d}let c=new Float64Array(i);for(let h=i-1;h>=0;h--){let d=l[h]/r[h];h+1<i&&(d-=a[h+1]*c[h+1]),h+2<i&&(d-=o[h+2]*c[h+2]),c[h]=d}return c}function Bx(s,t=1.1,e=.04){let n=s.N,i=n*3,r=new Float64Array(i),a=new Float64Array(i),o=new Float64Array(i),l=new Float64Array(i),c=new Float64Array(i),h=new Float64Array(i);for(let T=0;T<i;T++){let y=T%n;r[T]=s.x[y],a[T]=s.y[y],o[T]=s.nx[y],l[T]=s.ny[y],c[T]=-(s.wr[y]-t),h[T]=s.wl[y]-t}let d=new Float64Array(i),u=new Float64Array(i);for(let T=1;T<i-1;T++)d[T]=r[T-1]-2*r[T]+r[T+1],u[T]=a[T-1]-2*a[T]+a[T+1];let f=new Float64Array(i),m=new Float64Array(i);for(let T=0;T<i-1;T++)f[T]=r[T+1]-r[T],m[T]=a[T+1]-a[T];let x=(T,y)=>o[T]*o[y]+l[T]*l[y],g=new Float64Array(i),p=new Float64Array(i),v=new Float64Array(i),w=new Float64Array(i);for(let T=1;T<i-1;T++){let y=[T-1,T,T+1],S=[1,-2,1];for(let C=0;C<3;C++){let P=y[C];w[P]-=S[C]*(o[P]*d[T]+l[P]*u[T]);for(let I=C;I<3;I++){let L=y[I],A=S[C]*S[I]*x(P,L)*1;L===P?g[P]+=A:L-P===1?p[P]+=A:L-P===2&&(v[P]+=A)}}}for(let T=0;T<i-1;T++){let y=[T,T+1],S=[-1,1];for(let C=0;C<2;C++){let P=y[C];w[P]-=e*S[C]*(o[P]*f[T]+l[P]*m[T]);for(let I=C;I<2;I++){let L=y[I],A=e*S[C]*S[I]*x(P,L);L===P?g[P]+=A:L-P===1&&(p[P]+=A)}}}for(let T=0;T<i;T++)g[T]+=1e-5;let _=new Float64Array(i),b=new Int8Array(i);for(let T=0;T<60;T++){let y=Float64Array.from(g),S=Float64Array.from(p),C=Float64Array.from(v),P=Float64Array.from(w);for(let A=0;A<i;A++){if(!b[A])continue;let N=b[A]<0?c[A]:h[A];for(let G=Math.max(0,A-2);G<=Math.min(i-1,A+2);G++){if(G===A||b[G])continue;let z=Math.min(A,G),U=Math.abs(A-G)===1?p[z]:v[z];P[G]-=U*N}}for(let A=0;A<i;A++)b[A]&&(y[A]=1,P[A]=b[A]<0?c[A]:h[A],A+1<i&&(S[A]=0),A+2<i&&(C[A]=0),A>=1&&(S[A-1]=0),A>=2&&(C[A-2]=0));let I=Ux(y,S,C,P),L=0;for(let A=0;A<i;A++)_[A]=I[A],b[A]||(I[A]<c[A]?(b[A]=-1,L++):I[A]>h[A]&&(b[A]=1,L++));for(let A=0;A<i;A++){if(!b[A])continue;let N=g[A]*_[A]-w[A];A>=1&&(N+=p[A-1]*_[A-1]),A>=2&&(N+=v[A-2]*_[A-2]),A+1<i&&(N+=p[A]*_[A+1]),A+2<i&&(N+=v[A]*_[A+2]),(b[A]>0&&N>0||b[A]<0&&N<0)&&(b[A]=0,L++)}if(!L)break}let M=new Float64Array(n);for(let T=0;T<n;T++)M[T]=at(_[n+T],c[n+T],h[n+T]);return M}var pl=class{constructor(t){this.def=t,this.id=t.id,this.name=t.name,this.theme=t.theme||{};let e=t.points?Nx(t):Fx(t),n=e.startAt??t.startAt,i=e.N,r=Math.round(n/e.step);r-=r%2;let a=i/2;this.N=a,this.length=e.total,this.ds=e.total/a,this.x=new Float64Array(a),this.y=new Float64Array(a),this.z=new Float64Array(a);for(let h=0;h<a;h++){let d=(r+h*2)%i;this.x[h]=e.x[d],this.y[h]=e.y[d]}let o=0,l=0;for(let h=0;h<a;h++)o+=this.x[h],l+=this.y[h];o/=a,l/=a;for(let h=0;h<a;h++)this.x[h]-=o,this.y[h]-=l;this.hdg=new Float64Array(a),this.curv=new Float64Array(a),this.nx=new Float64Array(a),this.ny=new Float64Array(a);for(let h=0;h<a;h++){let d=(h+a-1)%a,u=(h+1)%a;this.hdg[h]=Math.atan2(this.y[u]-this.y[d],this.x[u]-this.x[d])}for(let h=0;h<a;h++){let d=(h+a-2)%a,u=(h+2)%a;this.curv[h]=li(this.hdg[u]-this.hdg[d])/(4*this.ds),this.nx[h]=-Math.sin(this.hdg[h]),this.ny[h]=Math.cos(this.hdg[h])}let c=this.length;for(let h=0;h<a;h++){let d=0;for(let[u,f,m]of t.elevation||[])d+=f*Math.sin(Us*u*h*this.ds/c+m);this.z[h]=d}this.slope=new Float64Array(a);for(let h=0;h<a;h++)this.slope[h]=(this.z[(h+1)%a]-this.z[(h+a-1)%a])/(2*this.ds);this.segInfo=e.segs.map(h=>({type:h.t,name:h.name,length:h.length,s:_e(h.start-n,this.length),dir:h.dir,r:h.r,angle:h.ang})),this._buildCorners(),this._buildEdges(),this._buildPit(),this._buildMarkers(),this.lineD=Bx(this,t.lineMargin??1.1),this._finishLine()}wrapS(t){return _e(t,this.length)}pointAt(t,e,n={}){let i=_e(t,this.length)/this.ds,r=Math.floor(i)%this.N,a=(r+1)%this.N,o=i-Math.floor(i),l=le(this.x[r],this.x[a],o),c=le(this.y[r],this.y[a],o),h=le(this.nx[r],this.nx[a],o),d=le(this.ny[r],this.ny[a],o),u=Math.hypot(h,d);return n.x=l+h/u*e,n.y=c+d/u*e,n.cx=l,n.cy=c,n.h=le(this.z[r],this.z[a],o),n.heading=this.hdgAt(t),n}hdgAt(t){let e=_e(t,this.length)/this.ds,n=Math.floor(e)%this.N,i=(n+1)%this.N,r=e-Math.floor(e);return this.hdg[n]+li(this.hdg[i]-this.hdg[n])*r}at(t,e){let n=_e(e,this.length)/this.ds,i=Math.floor(n)%this.N,r=n-Math.floor(n);return le(t[i],t[(i+1)%this.N],r)}idx(t){return Math.floor(_e(t,this.length)/this.ds)%this.N}project(t,e,n,i){let r=this.N,a=this.x,o=this.y,l=-1,c=1/0,h=0,d=w=>{let _=w+1===r?0:w+1,b=a[_]-a[w],M=o[_]-o[w],T=((t-a[w])*b+(e-o[w])*M)/(b*b+M*M);T=T<0?0:T>1?1:T;let y=a[w]+b*T-t,S=o[w]+M*T-e,C=y*y+S*S;C<c&&(c=C,l=w,h=T)};if(n>=0)for(let w=-12;w<=12;w++)d((n+w+r)%r);if(l<0||c>900){let w=0,_=1/0;for(let b=0;b<r;b+=6){let M=a[b]-t,T=o[b]-e,y=M*M+T*T;y<_&&(_=y,w=b)}c=1/0;for(let b=-9;b<=9;b++)d((w+b+r)%r)}let u=(l+1)%r,f=a[u]-a[l],m=o[u]-o[l],x=a[l]+f*h,g=o[l]+m*h,p=f*(e-g)-m*(t-x),v=Math.sqrt(c);return i.i=l,i.t=h,i.s=(l+h)*this.ds,i.d=p>=0?v:-v,i.dist=v,i}_buildCorners(){let t=this.N,e=this.ds,n=1/380,i=this.curv,r=[],a=0;for(;Math.abs(i[a])>n&&a<t;)a++;let o=null;for(let l=0;l<t;l++){let c=(a+l)%t,h=Math.abs(i[c])>n;if(h&&(!o||Math.sign(i[c])!==o.sign)){o&&r.push(o),o={sign:Math.sign(i[c]),start:c,end:c,maxK:Math.abs(i[c]),apex:c,len:1};continue}if(h&&o)o.end=c,o.len++,Math.abs(i[c])>o.maxK&&(o.maxK=Math.abs(i[c]),o.apex=c);else if(!h&&o){let d=0;for(;d<8&&Math.abs(i[(c+d)%t])<=n;)d++;d>=8||Math.sign(i[(c+d)%t])!==o.sign?(r.push(o),o=null):o.len++}}o&&r.push(o),this.corners=r.filter(l=>l.len*e>25).map((l,c)=>({...l,id:c+1,sApex:l.apex*e,sStart:l.start*e,sEnd:l.end*e,radius:1/l.maxK}))}_buildEdges(){let t=this.N,e=this.def,n=e.width??14;this.wl=new Float64Array(t).fill(n/2),this.wr=new Float64Array(t).fill(n/2);for(let u=0;u<t;u++){let f=u*this.ds,m=Math.min(f,this.length-f),x=n/2*(1+.08*(1-Xe(0,500,m)));this.wl[u]=x,this.wr[u]=x}this.kl=new Float64Array(t),this.kr=new Float64Array(t),this.r1l=new Float64Array(t),this.r1r=new Float64Array(t),this.t1l=new Uint8Array(t),this.t1r=new Uint8Array(t),this.r2l=new Float64Array(t),this.r2r=new Float64Array(t);let i=e.runoff||{mode:"modern"},r=e.kerbWidth??1.5,a=i.mode==="street",o=(u,f,m)=>{for(let x=u;x!==f+1;x=(x+1)%t)m(x)},l=(u,f)=>(u.start+Math.round((u.end-u.start+t)%t*f))%t;if(!a||i.kerbs)for(let u of this.corners){if(u.maxK<1/230)continue;let f=u.sign>0,m=f?this.kl:this.kr,x=f?this.kr:this.kl;o(l(u,.12),l(u,.9),g=>m[g]=r),u.maxK>1/120&&o(l(u,.6),(l(u,1)+10)%t,g=>x[g]=r)}let c=i.base1??0,h=i.grass??16,d=i.cornerRoom??12;for(let u=0;u<t;u++)this.r1l[u]=this.r1r[u]=c,this.r2l[u]=this.r2r[u]=a?i.gap??1.2:h,this.t1l[u]=this.t1r[u]=Ut.GRASS;if(!a){for(let f of this.corners){if(f.maxK<1/450)continue;let m=f.sign<0,x=m?this.r1l:this.r1r,g=m?this.t1l:this.t1r,p=m?this.r2l:this.r2r,v=Math.round(30/this.ds),w=Math.round(60/this.ds),_=(f.start-v+t)%t,b=(f.end+w)%t,M=f.maxK<1/140,T=d*(M?1.5:1);o(_,b,y=>{x[y]=T,g[y]=i.mode==="classic"?Ut.GRAVEL:M||i.mode==="modern"?Ut.RUNOFF:Ut.GRAVEL,i.mode==="mixed"&&(g[y]=M?Ut.GRAVEL:Ut.RUNOFF),p[y]=Math.max(6,h-4)})}let u=f=>{let m=Float64Array.from(f),x=10;for(let g=0;g<t;g++){let p=0;for(let v=-x;v<=x;v++)p+=m[(g+v+t)%t];f[g]=p/(2*x+1)}};u(this.r1l),u(this.r1r)}}wallDist(t,e){if(e>0)return this.wl[t]+this.kl[t]+this.r1l[t]+this.r2l[t];let n=this.wr[t]+this.kr[t]+this.r1r[t]+this.r2r[t];if(this.pit){let i=this._pitBlend(t*this.ds);i>.01&&(n=Math.max(n,i*this.pit.offset+fl/2+3))}return n}_buildPit(){let t=this.def.pit;if(!t){this.pit=null;return}let e=this.length,n=this.idx(0),i=this.wr[n]+this.kr[n]+gd+fl/2+1;this.pit={start:_e(t.in,e),len:t.out-t.in,rampIn:t.rampIn??90,rampOut:t.rampOut??90,offset:i,width:fl,island:gd,limit:22.2,boxStart:t.boxStart??60,boxSpacing:t.boxSpacing??15,boxCount:10},this.pit.limitStart=_e(this.pit.start+this.pit.rampIn*.35,e),this.pit.limitLen=this.pit.len-this.pit.rampIn*.35-this.pit.rampOut*.5}_pitBlend(t){let e=this.pit;if(!e)return 0;let n=_e(t-e.start,this.length);if(n>e.len)return 0;let i=Xe(0,e.rampIn,n),r=1-Xe(e.len-e.rampOut,e.len,n);return Math.min(i,r)}pitCentre(t){return-this._pitBlend(t)*this.pit.offset}inPitRange(t){return!!this.pit&&_e(t-this.pit.start,this.length)<=this.pit.len}inPitLimiter(t){return!!this.pit&&_e(t-this.pit.limitStart,this.length)<=this.pit.limitLen}pitBox(t){let e=this.pit,n=_e(e.start+e.rampIn+e.boxStart+t*e.boxSpacing,this.length);return{s:n,d:this.pitCentre(n)-2.2}}surface(t,e){let n=e<0?-e:e;if(this.pit){let r=this._pitBlend(t*this.ds);if(r>.01&&Math.abs(e+r*this.pit.offset)<fl/2)return Ut.PIT}if(e>=0){let r=this.wl[t];return n<=r?Ut.ASPHALT:(r+=this.kl[t],n<=r?Ut.KERB:(r+=this.r1l[t],n<=r?this.t1l[t]:(r+=this.r2l[t],n<=r?Ut.GRASS:Ut.WALL)))}let i=this.wr[t];return n<=i?Ut.ASPHALT:(i+=this.kr[t],n<=i?Ut.KERB:(i+=this.r1r[t],n<=i?this.t1r[t]:(i+=this.r2r[t],n<=i||n<=this.wallDist(t,-1)?Ut.GRASS:Ut.WALL)))}_buildMarkers(){let t=this.length;this.drs=(this.def.drs||[]).map(n=>({detect:_e(n.detect,t),start:_e(n.start,t),end:_e(n.end,t)}));let e=t/3;this.sectors=this.def.sectors||[e,2*e],this.cpSpacing=t/Math.round(t/100),this.cpCount=Math.round(t/this.cpSpacing)}inDrsZone(t){for(let e=0;e<this.drs.length;e++){let n=this.drs[e];if(_e(t-n.start,this.length)<=_e(n.end-n.start,this.length))return e}return-1}_finishLine(){this.gridSlot=t=>({s:_e(-9-8*t-t%2*0,this.length),d:t%2===0?3.3:-3.3})}lineAt(t){return this.at(this.lineD,t)}};var Ox=5.5,ml=22.2;function kx(s){let t=at(s,0,1);return{pace:.76+.245*Math.pow(t,.85),mistakesPerLap:1.4*(1-t)**2+.03,reaction:.55-.38*t,aggression:.2+.7*t,lineScale:.55+.45*Math.min(1,t*1.4),brakeBias:.85+.13*t}}var Ji=class{constructor({car:t,track:e,profile:n,skill:i=1,level:r=.5,seed:a=1,teamIdx:o=0,boxS:l=null,boxD:c=null}){this.car=t,this.track=e,this.profile=n,this.skill=i,this.rng=qe(a*7919+13),this.teamIdx=o,this.box={s:l,d:c},this.inp={throttle:0,brake:0,steer:0,drs:!1,boost:!1,gearUp:!1,gearDown:!1,pitLimit:0},this.setLevel(r),this.offset=0,this.offTarget=0,this.passSide=0,this.neigh=[],this.neighTimer=0,this.paceAdapt=1,this.t=0,this.goTime=null,this.mistake=null,this.lastMistakeLap=-1,this.mistakeRoll=0,this.stuckT=0,this.wantsPit=!1,this.pitState="none",this.pitDone=0,this.autopilotPit=!1,this.gripAdapt=1,this.lastLap=0,this.speedUp=1}setLevel(t){this.level=t,this.dp=kx(t),this.react=this.dp.reaction*(.7+.6*this.rng())}basePath(t){return this.track.lineAt(t)*this.dp.lineScale}pathD(t,e=!0){let n=this.track,i=this.basePath(t)+(e?this.offset:0);if(this.pitState==="in"||this.pitState==="stopped"||this.pitState==="out"){let r=n._pitBlend(t);if(r>.001){let a=n.pitCentre(t)+1.4*r;if(this.box.s!=null){let o=sn(t,this.box.s,n.length),l=Xe(-70,-18,o)*(1-Xe(10,55,o));a=le(a,this.box.d,l)}i=le(i,a,Xe(0,.45,r))}}return i}update(t,e){let n=this.car,i=this.track,r=this.inp,a=this.profile,o=n.speed;if(this.t+=t,e.phase==="grid"||e.phase==="countdown")return r.throttle=0,r.brake=1,r.steer=0,r.drs=!1,r.boost=!1,r.pitLimit=0,r;this.goTime===null&&(this.goTime=e.time+this.react);let l=n.s,c=this.pitState!=="none";if(this.neighTimer-=t,this.neighTimer<=0&&(this.neighTimer=1/30,this.scanTraffic(e)),this.gripT=(this.gripT||0)-t,this.gripT<=0){this.gripT=.5;let z=n.compound,H=0;for(let V=0;V<4;V++){let X=at(1-.2*((n.temp[V]-z.tOpt)/z.tRange)**2,.7,1.02),rt=n.wear[V],st=1-.06*rt-.2*Xe(.62,1,rt);H+=X*st}H/=4;let U=Math.sqrt(at(H/.96,.6,1));this.gripAdapt+=(Math.min(1,U)-this.gripAdapt)*.5}this.updateMistakes(e),this.updatePit(e),this.offset+=at(this.offTarget-this.offset,-t*3.2,t*3.2);let h=l+at(o*.04,1,4),d=this.pathD(l),u=this.pathD(h),f=(this.pathD(l+4)-2*this.pathD(l)+this.pathD(l-4))/16,m=i.at(i.curv,h),x=m/Math.max(.3,1-m*u)+f,g=(this.pathD(l+3)-this.pathD(l-1))/4,p=i.hdgAt(l)+Math.atan(g),v=Math.atan2(n.v,Math.max(n.u,2)),w=li(n.theta+v-p),_=n.d-d,b=n.spec.wheelbase,M=Math.atan(b*x)*(1+4e-4*o*o*Math.abs(x)*0);M+=.0016*o*o*x,M-=1.15*w+Math.atan(1.9*_/(o+3));let T=n.spec.maxSteer/(1+(o/46)**2);r.steer=at(M/T,-1,1);let y=at(o*.09,2,14),S=i.idx(l+y),C=(S+1)%i.N,P=a.v[S]*this.dp.pace*this.skill*this.paceAdapt*this.gripAdapt*(this.mistake&&this.mistake.active?this.mistake.factor:1),I=n.surf[0]+n.surf[1]+n.surf[2]+n.surf[3];if((n.onGrass||Math.abs(n.d)>i.wl[n.i]+1.5)&&(P=Math.min(P,28)),P=Math.min(P,this.trafficCap(P,e)),r.pitLimit=0,this.pitState!=="none"){let z=i.pit.limitStart,H=_e(z-l,i.length);if(this.pitState==="in"&&H<400&&!i.inPitLimiter(l)&&(P=Math.min(P,Math.sqrt(ml*ml+76*Math.max(0,H-6)))),(i.inPitLimiter(l)||this.pitState==="stopped")&&(P=Math.min(P,ml*.97),r.pitLimit=ml),this.pitState==="in"&&this.box.s!=null&&i.inPitLimiter(l)){let U=sn(this.box.s,l,i.length);U>-3&&U<200&&(P=Math.min(P,Math.sqrt(2*6.5*Math.max(0,U-.1))+.25))}this.pitState==="stopped"&&(P=0)}let L=0,A=0;{let z=P/Math.max(1,a.v[S]),H=Math.max(15,a.env.brakeDecel(Math.max(o,5),.92)),U=o*o/44+40,V=0,X=Math.max(1,Math.round(6/a.ds)),rt=i.idx(l);for(let q=1,j=0;j<U;q+=X){j=q*a.ds;let lt=a.v[(rt+q)%i.N]*this.dp.pace*this.skill*this.paceAdapt*this.gripAdapt;if(o>lt){let _t=(o*o-lt*lt)/(2*Math.max(j-2,1));_t>V&&(V=_t)}}let st=(n.aeroDrag+.014*n.mass*9.81)/n.mass,St=P-o,bt=St<-1.5?(-St-1.5)*2.2:0,At=Math.max(V-st*.9,bt);if(At>1.2)A=at(At/H,0,1);else{let q=Math.max(6,a.env.accel(Math.max(o,5),1)),j=1.8*St+(z*z-1)*0;L=at(.16+(j+st)/(q+st),0,1),St>3&&(L=1);let lt=Math.min(1,Math.abs(n.ayF)/Math.max(10,a.env.latAccel(Math.max(o,10),.97)));L=Math.min(L,.15+1.1*Math.sqrt(Math.max(0,1-lt*lt)));let _t=Math.max(Math.abs(n.alpha[2]),Math.abs(n.alpha[3]));_t>.06&&(L*=at(1-(_t-.06)*18,.1,1))}(this.pitState==="stopped"||P<.3&&o<1)&&(L=0,A=1)}e.time<this.goTime?(L=0,A=1):o<15&&e.time-this.goTime<4&&this.pitState==="none"&&(L=Math.max(L,1),A=0),r.throttle=L,r.brake=A;let N=Math.abs(m)<.0025&&Math.abs(x)<.003;r.drs=!!n.drsAllowed&&L>.95&&A<.05&&N;let G=n.gapAhead??99;return r.boost=L>.95&&N&&n.soc>.12&&(G<1.8||n.soc>.55||e.lapsLeft(n)<=1),o<1.2&&e.phase==="racing"&&e.time>this.goTime+6&&this.pitState==="none"?this.stuckT+=t:this.stuckT=0,r}scanTraffic(t){let e=this.car,n=this.track,i=this.neigh;i.length=0;let r=n.length;for(let l of t.cars){if(l===e||l.retired||l.inGarage)continue;let c=sn(l.s,e.s,r);c<-14||c>70||i.push({c:l,ds:c,dd:l.d-e.d,v:l.speed})}let a=null;for(let l of i)l.ds>0&&l.ds<50&&Math.abs(l.dd)<3.4&&(!a||l.ds<a.ds)&&(a=l);this.blocker=a;let o=0;if(a){let l=a.c,c=Math.abs(this.track.at(this.track.curv,e.s+a.ds)),h=this.dp.aggression+(c<.002?.35:-.1)+(a.ds<25?.25:0);if(!this.passSide){let d=n.wl[e.i]-1.7,u=n.wr[e.i]-1.7,f=l.d+3,m=l.d-3,x=f<=d,g=m>=-u;x&&g?this.passSide=Math.abs(f-e.d)<Math.abs(m-e.d)?1:-1:x?this.passSide=1:g&&(this.passSide=-1)}if(this.passSide&&h>.45){let d=l.d+this.passSide*3,u=this.basePath(e.s);o=at(d-u,-9,9);let f=n.wl[e.i]-1.5,m=n.wr[e.i]-1.5;o=at(u+o,-m,f)-u}}else this.passSide=0;for(let l of i)if(l.ds>-7&&l.ds<6&&Math.abs(l.dd)<2.9){let c=l.dd>0?-1:1;o+=c*(2.9-Math.abs(l.dd))*.9}this.offTarget=at(o,-10,10)}trafficCap(t,e){let n=this.car,i=1/0;for(let r of this.neigh){if(r.ds<=0||r.ds>40)continue;let a=Math.abs(r.dd);if(a>3)continue;let o=at((3-a)/.9,0,1),l=r.ds-Ox,c=r.v+(l-7.5)*.9;i=Math.min(i,le(t,Math.max(c,2),o))}return i}updateMistakes(t){let e=this.car,n=this.track,i=this.mistake;if(i&&i.active){(sn(e.s,i.to,n.length)>0||sn(e.s,i.from,n.length)<-40)&&(i.active=!1);return}for(let r of n.corners){let a=sn(r.sApex,e.s,n.length);if(a>60&&a<140&&this.lastMistakeCorner!==r.id+":"+e.lap){this.lastMistakeCorner=r.id+":"+e.lap;let o=this.dp.mistakesPerLap/Math.max(6,n.corners.length)*(1.5-this.skill+.5);this.rng()<o&&(this.mistake={active:!0,from:e.s,to:r.sApex+30,factor:1.06+.1*this.rng()+.05*(1-this.level)});break}}}updatePit(t){let e=this.car,n=this.track;if(!n.pit)return;let i=e.s,r=this.pitState;if(r==="none"){let a=_e(n.pit.start-i,n.length);this.wantsPit&&a<340&&a>30&&t.phase==="racing"&&(this.pitState="in")}else if(r==="in"){if(this.box.s!=null){let a=sn(this.box.s,i,n.length);Math.abs(a)<1.4&&e.speed<1&&n.inPitLimiter(i)&&(this.pitState="stopped",e.pitStopped=!0)}}else r==="stopped"?e.pitStopped||(this.pitState="out",this.wantsPit=!1,this.pitDone++):r==="out"&&(n.inPitRange(i)||(this.pitState="none"))}};var rn=[{id:"vettore",setup:{front:1,rear:0},name:"Autodromo del Vettore",country:"Italy",blurb:"Temple of speed. Huge straights, heavy braking, chicanes. Run low downforce.",turns:-1,width:15,startAt:520,smooth:12,elevation:[[2,2.2,.6],[5,.9,2.1]],runoff:{mode:"modern",cornerRoom:14,grass:18},segments:[["S",1100,{free:!0}],["R",62,48,{n:"Prima Variante"}],["S",22],["L",52,50],["S",340],["R",340,52,{n:"Curva Grande"}],["S",520,{free:!0}],["L",85,36,{n:"Della Roggia"}],["S",22],["R",85,38],["S",140],["R",105,66,{n:"Lesmo 1"}],["S",190],["R",145,80,{n:"Lesmo 2"}],["S",610],["L",95,42,{n:"Ascari"}],["S",30],["R",72,82],["S",28],["L",95,44],["S",1e3],["R",210,150,{n:"Parabolica",free:!0}],["S",260]],pit:{in:-330,out:520,rampIn:110,rampOut:120,boxStart:40,boxSpacing:16},drs:[{detect:-420,start:60,end:1e3},{detect:3400,start:3560,end:4400}],theme:{sky:{top:"#2f6fc4",horizon:"#cfe3f3",sun:[.55,.62,-.3],sunColor:"#fff2d8"},fog:"#bcd3e6",fogFar:2600,grass:["#4d7a35","#5b8a3d"],trees:{density:.55,kind:"broadleaf"},stands:10,hills:.4}},{id:"rade",setup:{front:9,rear:9},name:"Circuit de la Rade",country:"Monaco-style harbour",blurb:"Tight street circuit between the barriers. No room for error. Run maximum downforce.",width:11,smooth:6,scale:1.15,elevation:[[1,6,1.2],[3,1.8,.4]],runoff:{mode:"street",gap:1.4,kerbs:!0},kerbWidth:1.1,lineMargin:.95,points:[[880,0,28],[180,0,26],[150,200,60],[260,330,36],[180,470,30],[360,560,24],[620,600,120],[780,520,60],[900,560,24],[1010,470,30],[960,380,28],[1010,290,30],[1e3,220,40],[940,100,80]],start:[0,330],pit:{in:-220,out:420,rampIn:60,rampOut:70,boxStart:20,boxSpacing:14},drs:[{detect:-120,start:20,end:380}],theme:{sky:{top:"#3b82d4",horizon:"#f4e6cf",sun:[.4,.55,.6],sunColor:"#ffe9c4"},fog:"#d6dde4",fogFar:1600,grass:["#6d8a4f","#74925a"],trees:{density:.05,kind:"palm"},buildings:!0,water:!0,stands:4,hills:.15}},{id:"northfield",setup:{front:5,rear:5},name:"Northfield Grand Prix Circuit",country:"England",blurb:"Flowing, fast and brutal on the tyres. Every corner leads into the next.",width:14.5,smooth:10,scale:.72,elevation:[[1,1.8,2.4],[3,.8,1]],runoff:{mode:"mixed",cornerRoom:13,grass:16},points:[[1e3,0,260],[1500,-150,100],[1850,-400,70],[1900,-640,60],[1700,-900,45],[1450,-800,60],[900,-1e3,90],[650,-1250,70],[300,-1300,100],[80,-1500,90],[-200,-1500,100],[-1100,-1560,100],[-1200,-900,150],[-1050,-400,90],[-800,-100,60],[-600,0,120]],start:[15,700],pit:{in:-300,out:480,rampIn:100,rampOut:110,boxStart:30,boxSpacing:16},drs:[{detect:-260,start:20,end:600},{detect:2900,start:3e3,end:3900}],theme:{sky:{top:"#5b86b8",horizon:"#dfe4e6",sun:[.35,.4,.8],sunColor:"#f4efe4"},fog:"#c9d2d6",fogFar:2400,grass:["#4a7d2f","#62923a"],trees:{density:.35,kind:"broadleaf"},stands:12,hills:.2}},{id:"ardennes",setup:{front:6,rear:5},name:"Circuit des Hautes-Fagnes",country:"Belgian forest",blurb:"Huge elevation changes through the pines. Courage rewarded, mistakes punished.",width:14,smooth:10,scale:.85,elevation:[[1,14,.4],[2,7,2.6],[3,2.5,1.1]],runoff:{mode:"classic",cornerRoom:12,grass:14},points:[[0,220,22],[160,-120,150],[230,-520,100],[130,-800,90],[330,-1100,70],[300,-2e3,200],[150,-2350,90],[-100,-2500,60],[-350,-2300,40],[-420,-1800,70],[-300,-1200,200],[-250,-700,120],[-200,-300,60],[0,-260,40]],start:[13,280],pit:{in:-230,out:400,rampIn:80,rampOut:90,boxStart:20,boxSpacing:15},drs:[{detect:-150,start:20,end:250},{detect:1800,start:1900,end:2500}],theme:{sky:{top:"#4a6a8a",horizon:"#c5cdd2",sun:[.2,.35,.9],sunColor:"#e8e2d2"},fog:"#a8b6b8",fogFar:1800,grass:["#3d6a2c","#4c7a34"],trees:{density:1,kind:"pine"},stands:5,hills:1}}],SM=Object.fromEntries(rn.map(s=>[s.id,s]));var gl=1.2,In={soft:{id:"soft",name:"Soft",letter:"S",color:"#ee3340",mu:1,wearLaps:14,tOpt:100,tRange:24},medium:{id:"medium",name:"Medium",letter:"M",color:"#f6d13a",mu:.965,wearLaps:24,tOpt:98,tRange:28},hard:{id:"hard",name:"Hard",letter:"H",color:"#f2f2f2",mu:.93,wearLaps:38,tOpt:96,tRange:32}},Zr=["soft","medium","hard"],ci=[];ci[Ut.ASPHALT]={grip:1,rr:.012};ci[Ut.KERB]={grip:.94,rr:.02};ci[Ut.GRASS]={grip:.52,rr:.1};ci[Ut.GRAVEL]={grip:.48,rr:.38};ci[Ut.RUNOFF]={grip:.92,rr:.016};ci[Ut.PIT]={grip:1,rr:.012};ci[Ut.WALL]={grip:.4,rr:.4};var zx=[[3e3,250],[4500,330],[6e3,400],[8e3,470],[1e4,520],[11500,530],[13e3,490],[14e3,455],[15e3,420],[15600,0]],ch=s=>md(zx,s),Hx=[21,32,43,54,65,76,88,101];function xd(s={}){let t=at(s.frontWing??5,0,10),e=at(s.rearWing??5,0,10),n=s.performance??1,i=.35,r={dryMass:770,wheelbase:3.6,weightFront:.455,trackF:1.6,trackR:1.55,hCg:.28,izDry:1050,wheelR:i,length:5.5,width:2,clAf:1.6+.16*t+.32,clAr:2.2+.18*e+.48,cdA:.35+.25+.012*t+.35+.035*e,cdSide:2.8,drsDragCut:.2,drsLiftCut:.45,mu0:2,loadSens:11e-5,fz0:2e3,kappaPeak:.11,alphaPeak:.09,pacejkaB:2.06,pacejkaC:1.4,relaxLength:.35,rollFrontShare:.55,frontGrip:s.frontGrip??1,rearGrip:s.rearGrip??1.15,iFront:1.5,iRear:1.8,idleRpm:4200,maxRpm:15e3,shiftUpRpm:13600,shiftDownRpm:8300,driveEff:.93,powerScale:n,ersPower:12e4,ersCapacity:4e6,brakeTorque:19e3,brakeBias:s.brakeBias??.58,maxSteer:.36,compound:In[s.compound||"medium"],fuelKg:s.fuel??40};return r.gearRatios=Hx.map(a=>14600*2*Math.PI/60*i/a),r.aeroBalanceFront=(r.clAf+.4*0)/(r.clAf+r.clAr),r}function lh(s,t){return Math.max(.7,s.mu0-s.loadSens*(t-s.fz0))*s.compound.mu}function yd(s,t){let e=gl,n=s.clAf+s.clAr,i=d=>.5*e*n*d*d,r=d=>.5*e*s.cdA*d*d,a=d=>(t*Ci+i(d))/4,o=(d,u=1)=>{let f=a(d);return 4*lh(s,f)*f*u/t},l=(d,u=1)=>{let f=a(d);return(4*lh(s,f)*f*u+r(d))/t},c=d=>{let u=0;for(let f=0;f<s.gearRatios.length;f++){let m=d/s.wheelR*s.gearRatios[f]*60/(2*Math.PI);if(m>s.maxRpm||m<6e3)continue;let x=m*2*Math.PI/60;u=Math.max(u,ch(m)*x*s.driveEff*s.powerScale)}return u+s.ersPower*.5*s.powerScale};return{down:i,drag:r,latAccel:o,brakeDecel:l,accel:(d,u=1)=>{let f=(t*Ci*(1-s.weightFront)+i(d)*(1-s.aeroBalanceFront))/2,m=2*lh(s,f+250)*(f+250)*u,x=c(Math.max(d,8))/Math.max(d,8),g=.014*(t*Ci+i(d));return(Math.min(m,x)-r(d)-g)/t},enginePower:c}}var hh=0,uh=1,Bs=2,Os=3,Gx=30,Vx=3500,dh={heat:.1,coolBase:.0011,coolSpeed:7e-5},Wx=4e5,_d={i:0,t:0,s:0,d:0,dist:0},xl=class{constructor(t,e){this.spec=t,this.track=e,this.assist={abs:!0,tc:2,steer:1,autoGear:!0,stability:1},this.wheelPos=[[0,0],[0,0],[0,0],[0,0]];let n=t.wheelbase;this.a=n*(1-t.weightFront),this.b=n*t.weightFront,this.wheelPos[hh]=[this.a,t.trackF/2],this.wheelPos[uh]=[this.a,-t.trackF/2],this.wheelPos[Bs]=[-this.b,t.trackR/2],this.wheelPos[Os]=[-this.b,-t.trackR/2],this.omega=new Float64Array(4),this.alphaLag=new Float64Array(4),this.temp=new Float64Array(4).fill(85),this.wear=new Float64Array(4),this.fz=new Float64Array(4),this.kappa=new Float64Array(4),this.alpha=new Float64Array(4),this.slipVis=new Float64Array(4),this.absF=new Float64Array(4).fill(1),this.surf=new Uint8Array(4),this.puncture=new Float64Array(4),this.wheelFx=new Float64Array(4),this.wheelFy=new Float64Array(4),this.fuel=t.fuelKg,this.soc=.6,this.compound=t.compound,this.reset(0,0,0)}reset(t,e,n,i=0){this.x=t,this.y=e,this.theta=n,this.px=t,this.py=e,this.ptheta=n,this.u=i,this.v=0,this.r=0,this.steer=0,this.gear=1,this.rpm=this.spec.idleRpm,this.shiftTimer=0,this.sinceShift=1,this.throttle=0,this.brake=0,this.drsPos=0,this.axF=0,this.ayF=0,this.axBody=0,this.ayBody=0,this.stopTimer=0,this.revHold=0,this.kerbPhase=0,this.kerbShake=0,this.onGrass=!1,this.lastHint=-1,this.omega.fill(i/this.spec.wheelR),this.alphaLag.fill(0),this.absF.fill(1),this.pitch=0,this.roll=0,this.bottoming=0,this.locate()}get speed(){return Math.hypot(this.u,this.v)}get mass(){return this.spec.dryMass+this.fuel}locate(){let t=this.track.project(this.x,this.y,this.lastHint,_d);this.lastHint=t.i,this.i=t.i,this.s=t.s,this.d=t.d,this.trackH=this.track.at(this.track.z,t.s),this.trackSlope=this.track.slope[t.i],this.trackHeading=this.track.hdgAt(t.s)}_aero(t,e){let n=this.spec,i=.5*gl*t*t,r=1-.55*(this.damageFront||0),a=1-.55*(this.damageRear||0),o=1-.3*(this.damageFloor||0),l=this.drsPos,c=this.dirtyAir||0,h=1-.45*Xe(.05,.4,Math.abs(e)),d=n.clAf*r*(1-.32*c)*o*h,u=n.clAr*a*(1-.14*c)*(1-n.drsLiftCut*l)*o*h,f=this.slipstream||0,m=n.cdA*(1-n.drsDragCut*l)*(1-.28*f)*(1+.12*(this.damageFront||0)+.1*(this.damageRear||0));return{q:i,downF:i*d,downR:i*u,drag:i*m}}step(t,e){let n=this.spec,i=this.mass,r=n.izDry+this.fuel*.45,a=n.wheelbase,o=this.a,l=this.b;this.px=this.x,this.py=this.y,this.ptheta=this.theta;let c=this.u,h=this.v,d=this.r,u=Math.hypot(c,h),f=Math.atan2(h,Math.max(Math.abs(c),3))*(c<0?-1:1),m=at(e.throttle,0,1),x=at(e.brake,0,1),g=u;if(this.gear>=1?e.allowReverse&&g<1.5&&x>.4&&m<.05?(this.revHold+=t,this.revHold>.45&&(this.gear=-1,this.revHold=0)):this.revHold=0:this.gear<0&&(c>-1.5&&m>.4&&x<.05?(this.revHold+=t,this.revHold>.2&&(this.gear=1,this.revHold=0)):this.revHold=0),this.gear<0){let K=m;m=x,x=K}this.throttle+=at(m-this.throttle,-t*14,t*9),this.brake+=at(x-this.brake,-t*16,t*10);let p=this.throttle,v=this.brake;if(e.pitLimit>0){let K=g-e.pitLimit;p*=at(1-K*.7,0,1)}this.drsPos+=at((e.drs?1:0)-this.drsPos,-t*5,t*5);let w=this._aero(u,f),_=i,b=Ci,M=_*b*n.weightFront+w.downF,T=_*b*(1-n.weightFront)+w.downR,y=_*this.axF*n.hCg/a;M-=y,T+=y;let S=_*this.ayF*n.hCg*n.rollFrontShare/n.trackF,C=_*this.ayF*n.hCg*(1-n.rollFrontShare)/n.trackR,P=this.fz,I=(K,ot,vt)=>{let Dt=K/2-ot,Bt=K/2+ot;Dt<60?(Dt=60,Bt=Math.max(60,K-60)):Bt<60&&(Bt=60,Dt=Math.max(60,K-60)),P[vt]=Dt,P[vt+1]=Bt};I(Math.max(M,200),S,0),I(Math.max(T,200),C,2);let L=n.maxSteer/(1+u/46*(u/46)),A=L;if(this.assist.steer){let K=0;for(let vt=0;vt<4;vt++)K+=(n.mu0-n.loadSens*(P[vt]-n.fz0))*P[vt];K=K*n.compound.mu*.97/_;let ot=a*K/Math.max(u*u,1)+n.alphaPeak*.95;A=Math.min(L,ot)}let N=at(e.steer,-1,1)*A;if(this.assist.stability&&u>6&&c>0){let K=[0,.7,1.1,1.5][this.assist.stability]??.7;N+=at(f,-.4,.4)*K*Xe(8,22,u)}N=at(N,-n.maxSteer,n.maxSteer),this.steer+=at(N-this.steer,-t*2.4,t*2.4);let G=this.steer,z=Math.tan(G),H=Math.atan2(a*z,a-n.trackF/2*z),U=Math.atan2(a*z,a+n.trackF/2*z),V=(this.omega[Bs]+this.omega[Os])/2,X=0;this.gear>0?X=n.gearRatios[this.gear-1]:this.gear<0&&(X=-8.5);let rt=Math.abs(V)*Math.abs(X)*(30/Math.PI),st=rt;if(Math.abs(X)>12&&g<14&&(st=Math.max(st,n.idleRpm+(8200-n.idleRpm)*Math.max(p,.2))),st=Math.max(st,n.idleRpm),this.rpm=le(this.rpm,st,1-Math.exp(-t*40)),this.sinceShift+=t,this.shiftTimer>0&&(this.shiftTimer-=t),this.gear>=1){let K=!!e.gearUp,ot=!!e.gearDown;if(this.assist.autoGear){K=rt>n.shiftUpRpm&&this.gear<8;let vt=rt*(n.gearRatios[Math.min(this.gear,7)]/X);ot=this.gear>1&&rt<n.shiftDownRpm&&(this.gear===1||rt*(n.gearRatios[this.gear-2]/X)<n.maxRpm*.9),p>.92&&this.gear>1&&rt<9800&&this.sinceShift>.6&&(ot=rt*(n.gearRatios[this.gear-2]/X)<13800),K&&vt<8500&&(K=!1)}this.sinceShift>.22&&(K&&this.gear<8?(this.gear++,this.shiftTimer=.045,this.sinceShift=0):ot&&this.gear>1&&(this.gear--,this.shiftTimer=.03,this.sinceShift=0))}let bt=[9,.13,.09,.06][this.assist.tc]??9;if(this.assist.tc>0&&p>.02){let K=Math.max(this.kappa[Bs],this.kappa[Os]);K>bt&&(p*=at(1-(K-bt)*14,.1,1))}let At=0,q=this.soc>.01,j=!!e.boost&&q,lt=0;if(q&&p>.5&&this.gear>0&&(lt=(j?1:.3)*n.ersPower),Math.abs(X)>0){let K=ch(this.rpm)*n.powerScale*p,ot=lt*n.powerScale*p/Math.max(this.rpm*Math.PI/30,300),vt=(30+.0075*this.rpm)*(1-p);At=K+ot-vt,this.fuel<=0&&(At=Math.min(At,0))}let _t=At*X*n.driveEff;this.shiftTimer>0&&(_t*=.05);let mt=this.omega[Bs]-this.omega[Os],zt=.5*Math.abs(_t)*.5+120,Se=at(mt*55,-zt,zt),Xt=_t/2-Se,te=_t/2+Se,ce=Math.cos(this.theta),qt=Math.sin(this.theta),se=n.wheelR,Ae=n.mu0,we=n.compound,ue=0,ve=0,k=0,De=0,ee=0,D=this.tyreScale||1;for(let K=0;K<4;K++){let ot=K<2,vt=this.wheelPos[K][0],Dt=this.wheelPos[K][1],Bt=K===hh?H:K===uh?U:0,O=Math.cos(Bt),ut=Math.sin(Bt),et=this.x+vt*ce-Dt*qt,pt=this.y+vt*qt+Dt*ce,Mt=this.track.project(et,pt,this.i,_d),it=this.track.surface(Mt.i,Mt.d);this.surf[K]=it;let Nt=ci[it];it===Ut.KERB?De++:(it===Ut.GRASS||it===Ut.GRAVEL)&&ee++;let wt=P[K];it===Ut.KERB&&(wt*=1+.22*Math.sin(this.kerbPhase*1+K*1.7)*Math.min(1,u/25));let he=c-d*Dt,ne=h+d*vt,ke=he*O+ne*ut,gn=-he*ut+ne*O,bn=Math.abs(ke),ji=(this.omega[K]*se-ke)/Math.max(bn,2.2),na=Math.atan2(gn,Math.max(bn,1.2)),Ws=1-Math.exp(-Math.max(bn,1.2)*t/n.relaxLength);this.alphaLag[K]+=(na-this.alphaLag[K])*Ws;let Xs=this.alphaLag[K],ia=at(1-.2*((this.temp[K]-we.tOpt)/we.tRange)**2,.7,1.02),qs=this.wear[K],Jn=1-.06*qs-.2*Xe(.62,1,qs),Li=Math.max(.7,Ae-n.loadSens*(wt-n.fz0))*we.mu*ia*Jn*Nt.grip*(ot?n.frontGrip:n.rearGrip);this.puncture[K]>0&&(Li*=1-.55*this.puncture[K]);let Ys=ji/n.kappaPeak,$s=Math.tan(Xs)/Math.tan(n.alphaPeak),Kn=Math.hypot(Ys,$s)+1e-9,Zs=Li*wt*Math.sin(n.pacejkaC*Math.atan(n.pacejkaB*Kn)),hi=Zs*Ys/Kn,jn=hi,Di=-Zs*$s/Kn;jn-=Math.tanh(ke*1.5)*Nt.rr*wt,(it===Ut.GRAVEL||it===Ut.GRASS)&&(jn-=Math.tanh(ke*.6)*.05*wt*Math.min(1,bn/20));let sa=ot?n.iFront:n.iRear+.012*X*X*.5,Fl=K===Bs?Xt:K===Os?te:0,ra=this.omega[K]*se-ke,aa=Li*wt*n.pacejkaC*n.pacejkaB/(n.kappaPeak*Math.max(bn,2.2)),oa=Math.abs(ra)>1e-4?Math.min(aa,Math.abs(hi/ra)):aa,R=this.omega[K]+t*(Fl-hi*se)/(sa+t*oa*se*se),B=ot?v*n.brakeTorque*n.brakeBias*.5:v*n.brakeTorque*(1-n.brakeBias)*.5;if(v>.02&&this.assist.abs?(bn>4&&Math.abs(ji)>n.kappaPeak*1.1&&ji<0?this.absF[K]=Math.max(.1,this.absF[K]-14*t):this.absF[K]=Math.min(1,this.absF[K]+9*t),B*=this.absF[K]):this.absF[K]=1,B>0){let Vt=B/sa*t;Math.abs(R)<=Vt?R=0:R-=Math.sign(R)*Vt}this.omega[K]=R,this.kappa[K]=ji,this.alpha[K]=Xs,this.wheelFx[K]=jn,this.wheelFy[K]=Di;let J=Math.max(0,Kn-1);this.slipVis[K]=u>4?at(J*.8,0,1.5)*at(bn/15,.3,1):0;let Y=R*se-ke,$=Math.max(bn,2)*Math.tan(Math.abs(Xs)),gt=Math.abs(jn*Y)+Math.abs(Di)*$,Et=.02*wt*bn;this.temp[K]+=(dh.heat*(gt+Et)/Vx-(this.temp[K]-Gx)*(dh.coolBase+dh.coolSpeed*u))*t;let xt=Math.max(0,this.temp[K]-we.tOpt-we.tRange*.9)/30;this.wear[K]=Math.min(1.2,this.wear[K]+gt*t/(we.wearLaps*Wx)*(this.wearMult??1)*(1+2*xt)*D);let Rt=jn*O-Di*ut,Pt=jn*ut+Di*O;ue+=Rt,ve+=Pt,k+=vt*Pt-Dt*Rt}let E=Math.max(u,.001),W=w.drag/E;ue-=W*c,ve-=.5*gl*n.cdSide*u*h;let Z=this.trackSlope*Math.cos(li(this.theta-this.trackHeading));ue-=_*b*Z*.8,this.kerbPhase+=t*(40+u*.9),this.kerbShake=De?Math.min(1,u/40):0,ee&&(k-=d*400*ee);let Q=ue/_,ct=ve/_;this.axBody=Q,this.ayBody=ct;let dt=1-Math.exp(-t/.05);if(this.axF+=(Q-this.axF)*dt,this.ayF+=(ct-this.ayF)*dt,this.u+=(Q+h*d)*t,this.v+=(ct-c*d)*t,this.r+=k/r*t,Math.abs(this.u)<.35&&Math.abs(this.v)<.35&&p<.05&&(v>.05||Math.abs(this.r)<.05)){if(this.stopTimer+=t,this.stopTimer>.1){this.u*=.9,this.v*=.9,this.r*=.85,Math.abs(this.u)<.04&&(this.u=0),Math.abs(this.v)<.04&&(this.v=0),Math.abs(this.r)<.01&&(this.r=0);for(let K=0;K<4;K++)v>.05&&(this.omega[K]*=.8)}}else this.stopTimer=0;let tt=Math.cos(this.theta),nt=Math.sin(this.theta);this.x+=(this.u*tt-this.v*nt)*t,this.y+=(this.u*nt+this.v*tt)*t,this.theta+=this.r*t,this.theta>Math.PI?this.theta-=2*Math.PI:this.theta<-Math.PI&&(this.theta+=2*Math.PI);let ft=.0185*(.25+.75*p)*(this.fuelRate??1);this.fuel=Math.max(0,this.fuel-ft*t);let Lt=0;v>.05&&this.gear>0?Lt=n.ersPower*Math.min(1,v*1.2):p<.05&&g>10&&(Lt=n.ersPower*.25),this.soc=at(this.soc+(Lt-lt)*t/n.ersCapacity,0,1),this.locate(),this.pitch=le(this.pitch,at(-this.axF*.0045,-.05,.05),1-Math.exp(-t*12)),this.roll=le(this.roll,at(-this.ayF*.0028,-.06,.06),1-Math.exp(-t*12)),this.onGrass=ee>=3,this.aeroDown=w.downF+w.downR,this.aeroDrag=w.drag,this.latG=this.ayF/Ci,this.longG=this.axF/Ci}tyreSummary(){let t=0,e=0;for(let n=0;n<4;n++)t+=this.wear[n]/4,e=Math.max(e,this.temp[n]);return{wear:t,temp:e}}fitTyres(t){this.compound=t,this.spec={...this.spec,compound:t},this.wear.fill(0),this.temp.fill(72),this.puncture.fill(0)}applyDamage(t,e,n){let i=t/55e3;if(e>1.5?this.damageFront=Math.min(1,(this.damageFront||0)+i*(.8+Math.abs(n)*.2)):e<-1.2?this.damageRear=Math.min(1,(this.damageRear||0)+i):this.damageFloor=Math.min(1,(this.damageFloor||0)+i*.5),i>.5){let r=e>0?n>0?hh:uh:n>0?Bs:Os;Math.random()<Math.min(.5,i*.4)&&(this.puncture[r]=1)}}repair(){this.damageFront=this.damageRear=this.damageFloor=0,this.puncture.fill(0)}};function fh(s){let t=s.N,e=s.ds,n=new Float64Array(t),i=new Float64Array(t);for(let l=0;l<t;l++)n[l]=s.x[l]+s.nx[l]*s.lineD[l],i[l]=s.y[l]+s.ny[l]*s.lineD[l];let r=new Float64Array(t),a=2;for(let l=0;l<t;l++){let c=(l-a+t)%t,h=(l+a)%t,d=n[l]-n[c],u=i[l]-i[c],f=n[h]-n[l],m=i[h]-i[l],x=d*m-u*f,g=Math.hypot(d,u),p=Math.hypot(f,m),v=Math.hypot(n[h]-n[c],i[h]-i[c]);r[l]=2*x/(g*p*v+1e-9)}let o=new Float64Array(t);for(let l=0;l<t;l++)o[l]=(r[(l-1+t)%t]+2*r[l]+r[(l+1)%t])/4;return{px:n,py:i,kappa:o,ds:e}}function vd(s,t,e={}){let n=e.latUse??.8,i=e.brakeUse??.85,r=e.accelUse??.92,a=t.dryMass+(e.fuel??30),o=yd(t,a),{kappa:l,ds:c}=e.geometry||fh(s),h=s.N,d=110,u=new Float64Array(h);for(let g=0;g<h;g++){let p=Math.abs(l[g]);if(p<1e-5){u[g]=d;continue}let v=4,w=d;for(let _=0;_<28;_++){let b=(v+w)/2;b*b*p>o.latAccel(b,n)?w=b:v=b}u[g]=v}let f=(g,p)=>{let v=g*g*Math.abs(p),w=o.latAccel(g,n),_=Math.min(1,v/w);return Math.sqrt(Math.max(.02,1-_*_))},m=Float64Array.from(u),x=2*h;for(let g=0;g<x;g++){let p=g%h,v=(g+1)%h,w=o.accel(m[p],r)*f(m[p],l[p]),_=Math.sqrt(Math.max(0,m[p]*m[p]+2*Math.max(w,0)*c));_<m[v]&&(m[v]=_)}for(let g=x;g>0;g--){let p=g%h,v=(g-1+h)%h,w=o.brakeDecel(m[p],i)*f(m[p],l[p]),_=Math.sqrt(m[p]*m[p]+2*w*c);_<m[v]&&(m[v]=_)}return{v:m,kappa:l,ds:c,env:o,mass:a}}var Ln={front:3,rear:-2.45,half:.98},NM=(Ln.front+Ln.rear)/2,UM=(Ln.front-Ln.rear)/2,Jr=Ln.half,Xx=[[Ln.front,Jr],[Ln.front,-Jr],[Ln.rear,-Jr],[Ln.rear,Jr]];function ph(s,t){let e=Math.cos(s.theta),n=Math.sin(s.theta);for(let i=0;i<4;i++){let[r,a]=Xx[i];t[i*2]=s.x+r*e-a*n,t[i*2+1]=s.y+r*n+a*e}}var Yn=new Float64Array(8),Ki=new Float64Array(8);function ks(s,t,e,n,i){let r=s.mass,a=s.spec.izDry+s.fuel*.45,o=Math.cos(s.theta),l=Math.sin(s.theta),c=s.u*o-s.v*l+t/r,h=s.u*l+s.v*o+e/r;s.u=c*o+h*l,s.v=-c*l+h*o,s.r+=(n*e-i*t)/a}function mh(s,t,e){let n=Math.cos(s.theta),i=Math.sin(s.theta),r=s.u*n-s.v*i,a=s.u*i+s.v*n;return[r-s.r*e,a+s.r*t]}function Md(s,t,e=.12){let n=t.x-s.x,i=t.y-s.y;if(n*n+i*i>49)return 0;ph(s,Yn),ph(t,Ki);let r=[[Math.cos(s.theta),Math.sin(s.theta)],[-Math.sin(s.theta),Math.cos(s.theta)],[Math.cos(t.theta),Math.sin(t.theta)],[-Math.sin(t.theta),Math.cos(t.theta)]],a=1/0,o=0,l=0;for(let[st,St]of r){let bt=1/0,At=-1/0,q=1/0,j=-1/0;for(let _t=0;_t<4;_t++){let mt=Yn[_t*2]*st+Yn[_t*2+1]*St,zt=Ki[_t*2]*st+Ki[_t*2+1]*St;mt<bt&&(bt=mt),mt>At&&(At=mt),zt<q&&(q=zt),zt>j&&(j=zt)}let lt=Math.min(At,j)-Math.max(bt,q);if(lt<=0)return 0;if(lt<a){a=lt;let _t=(q+j)/2>(bt+At)/2?1:-1;o=st*_t,l=St*_t}}let c=0,h=0,d=0,u=(st,St,bt)=>{let At=Math.cos(bt.theta),q=Math.sin(bt.theta),j=st-bt.x,lt=St-bt.y,_t=j*At+lt*q,mt=-j*q+lt*At;return _t>Ln.rear&&_t<Ln.front&&Math.abs(mt)<Jr};for(let st=0;st<4;st++)u(Yn[st*2],Yn[st*2+1],t)&&(c+=Yn[st*2],h+=Yn[st*2+1],d++),u(Ki[st*2],Ki[st*2+1],s)&&(c+=Ki[st*2],h+=Ki[st*2+1],d++);d?(c/=d,h/=d):(c=(s.x+t.x)/2,h=(s.y+t.y)/2);let f=s.mass,m=t.mass,x=a+.01;s.x-=o*x*(m/(f+m)),s.y-=l*x*(m/(f+m)),t.x+=o*x*(f/(f+m)),t.y+=l*x*(f/(f+m));let g=c-s.x,p=h-s.y,v=c-t.x,w=h-t.y,_=mh(s,g,p),b=mh(t,v,w),M=b[0]-_[0],T=b[1]-_[1],y=M*o+T*l;if(y>=0)return 0;let S=s.spec.izDry+s.fuel*.45,C=t.spec.izDry+t.fuel*.45,P=g*l-p*o,I=v*l-w*o,L=1/f+1/m+P*P/S+I*I/C,A=-(1+e)*y/L;ks(s,-A*o,-A*l,g,p),ks(t,A*o,A*l,v,w);let N=-l,G=o,z=M*N+T*G,H=at(-z/L,-.25*A,.25*A);ks(s,-H*N,-H*G,g,p),ks(t,H*N,H*G,v,w);let U=.5*(1/(1/f+1/m))*y*y,V=st=>{let St=Math.cos(st.theta),bt=Math.sin(st.theta),At=c-st.x,q=h-st.y;return[At*St+q*bt,-At*bt+q*St]},X=V(s),rt=V(t);return{energy:U,la:X,lb:rt,speed:-y}}var qx={i:0,t:0,s:0,d:0,dist:0};function bd(s,t,e=.2,n=.35){ph(s,Yn);let i=null,r=Math.cos(s.theta),a=Math.sin(s.theta);for(let o=0;o<4;o++){let l=Yn[o*2],c=Yn[o*2+1],h=t.project(l,c,s.i,qx),d=h.d>=0?1:-1,u=t.wallDist(h.i,d),f=Math.abs(h.d)-u;if(f<=0)continue;let m=t.nx[h.i],x=t.ny[h.i],g=-d*m,p=-d*x;s.x+=g*(f+.01),s.y+=p*(f+.01);let v=l-s.x,w=c-s.y,_=mh(s,v,w),b=_[0]*g+_[1]*p;if(b>=0)continue;let M=s.mass,T=s.spec.izDry+s.fuel*.45,y=v*p-w*g,S=1/M+y*y/T,C=-(1+e)*b/S;ks(s,C*g,C*p,v,w);let P=-p,I=g,L=_[0]*P+_[1]*I,A=at(-L/S,-n*C,n*C);ks(s,A*P,A*I,v,w);let N=.5*M*b*b;if(!i||N>i.energy){let G=v*r+w*a,z=-v*a+w*r;i={energy:N,lx:G,ly:z,speed:-b,wx:l,wy:c}}}return i}var mn=[{id:"valdori",name:"Scuderia Valdori",short:"Valdori",color:"#d8102b",accent:"#ffffff",livery:"stripe",rating:.92},{id:"aurelian",name:"Aurelian Silver Arrows",short:"Aurelian",color:"#b8c2cc",accent:"#00c7b0",livery:"split",rating:1},{id:"northstar",name:"Northstar Motorsport",short:"Northstar",color:"#18286b",accent:"#e6232f",livery:"chevron",rating:.97},{id:"helix",name:"Helix Dynamics",short:"Helix",color:"#ff7a14",accent:"#101820",livery:"stripe",rating:.84},{id:"kestrel",name:"Kestrel GP",short:"Kestrel",color:"#0b6e4f",accent:"#d6f23c",livery:"chevron",rating:.7},{id:"vortex",name:"Vortex Sport",short:"Vortex",color:"#6a2fb5",accent:"#ff4fd8",livery:"split",rating:.62},{id:"ironside",name:"Ironside Racing",short:"Ironside",color:"#23272e",accent:"#f2b705",livery:"stripe",rating:.5},{id:"solace",name:"Solace Racing",short:"Solace",color:"#f6f6f2",accent:"#ff5c8a",livery:"chevron",rating:.4},{id:"marlin",name:"Marlin Performance",short:"Marlin",color:"#12a3c4",accent:"#0a2540",livery:"split",rating:.3},{id:"tempest",name:"Tempest Auto",short:"Tempest",color:"#f2d400",accent:"#111111",livery:"stripe",rating:.15}],Sd=[["Luca Ferraro","FER",16,.95],["Matteo Bellini","BEL",55,.5],["Oliver Hartwell","HAR",44,1],["Jonas Eklund","EKL",63,.75],["Callum Reid","REI",1,.98],["Sven Aaltonen","AAL",11,.7],["Diego Marquez","MAR",14,.85],["Kenji Arakawa","ARA",22,.8],["Tom\xE1s Vidal","VID",23,.6],["\xC9tienne Lacroix","LAC",10,.65],["Anders Nyberg","NYB",27,.55],["Rafael Duarte","DUA",77,.7],["Idris Okafor","OKA",3,.5],["Hana Weiss","WEI",18,.45],["Pavel Novak","NOV",31,.55],["Mateo Rossi","ROS",9,.4],["Yuto Mori","MOR",24,.5],["Ben Carroway","CAR",81,.35],["Santiago Ibarra","IBA",6,.35],["Finn Lindqvist","LIN",99,.3]].map(([s,t,e,n])=>({name:s,code:t,number:e,talent:n}));var Dn=1/240,Kr=[{id:"rookie",name:"Rookie",level:.08,blurb:"Relaxed pace, frequent mistakes"},{id:"amateur",name:"Amateur",level:.3,blurb:"Learn the circuit without pressure"},{id:"pro",name:"Pro",level:.55,blurb:"Fair fight, occasional errors"},{id:"elite",name:"Elite",level:.8,blurb:"Fast, aggressive, rarely wrong"},{id:"legend",name:"Legend",level:1,blurb:"Every car at the limit"}],gh={mode:"race",laps:5,level:.55,adaptive:!1,fieldSize:20,playerTeam:1,playerGrid:12,collisions:!0,damage:!0,tyreWear:3,mandatoryStop:!1,compound:"medium",setup:{frontWing:null,rearWing:null,brakeBias:.58},assists:{abs:!0,tc:2,steer:1,stability:1,autoGear:!0,pitAuto:!0},seed:1},Yx=.2;function $x(s){return qe(s*104729+7)}var yl=class{constructor(t,e={}){this.track=t,this.opt={...gh,...e,assists:{...gh.assists,...e.assists||{}},setup:{...gh.setup,...e.setup||{}}};let n=this.opt;this.rng=$x(n.seed),this.time=0,this.t0=null,this.phase="grid",this.lights=0,this.lightsOutAt=null,this.totalLaps=n.mode==="timetrial"?9999:n.laps,this.events=[],this.cars=[],this.sorted=[],this.chequered=!1,this.chequeredAt=null,this.stepCount=0,this.profileCache=new Map,this.pairContact=new Map,this.fastest={time:1/0,car:null,lap:0},this.bestSectors=[1/0,1/0,1/0],this.ghostRec=[],this.ghostBest=null,this.setupField()}get playerCar(){return this.player}teamSetup(t){return t.setup||{front:5,rear:5}}getProfile(t,e){let n=this.profileCache.get(e);return n||(n=vd(this.track,t,{fuel:25,geometry:this.geometry||(this.geometry=fh(this.track))}),this.profileCache.set(e,n)),n}makeCarSpec(t,e,n){let i=this.opt,r=this.track.def.setup||{front:5,rear:5},a=at(Math.min(this.totalLaps,60)*(this.track.length/1e3)*Yx*1.1+2,6,105),o=t.rating,l=.985+.015*o,c=n?{frontWing:i.setup.frontWing??r.front,rearWing:i.setup.rearWing??r.rear,brakeBias:i.setup.brakeBias}:{frontWing:r.front,rearWing:r.rear},h=xd({...c,compound:e,performance:.972+.028*o,fuel:a});return h.frontGrip*=l,h.rearGrip*=l,h}setupField(){let t=this.opt,e=this.track,n=this.rng,i=t.mode==="timetrial",r=[];mn.forEach((f,m)=>{for(let x=0;x<2;x++)r.push({team:f,ti:m,driver:Sd[m*2+x],seat:m*2+x})});let a=at(t.playerTeam,0,mn.length-1),o=r.findIndex(f=>f.ti===a),l=r.findIndex((f,m)=>f.ti===a&&m!==o),c=r.filter((f,m)=>m!==o);if(i)c=[];else{let f=at(t.fieldSize,2,20)-1;for(;c.length>f;){let m=Math.floor(n()*c.length);r[l]!==c[m]&&c.splice(m,1)}}c.forEach(f=>f.q=f.team.rating*.55+f.driver.talent*.45+(n()-.5)*.16),c.sort((f,m)=>m.q-f.q);let h=c.map(f=>({seat:f,player:!1})),d=at(Math.round(t.playerGrid)-1,0,h.length);h.splice(i?0:d,0,{seat:r[o],player:!0});let u=["soft","medium","hard"];h.forEach((f,m)=>{let{seat:x,player:g}=f,p=x.team,v=g?t.compound:u[n()<.45?0:n()<.75?1:2],w=this.makeCarSpec(p,v,g),_=new xl(w,e);_.wearMult=t.tyreWear;let b=e.gridSlot(m),M=e.pointAt(b.s,b.d);if(_.reset(M.x,M.y,M.heading,0),_.info={name:g?"You":x.driver.name,code:g?"YOU":x.driver.code,number:g?7:x.driver.number,team:p,teamIdx:x.ti,isPlayer:g,gridPos:m+1,talent:x.driver.talent},_.assist=g?{abs:t.assists.abs,tc:t.assists.tc,steer:t.assists.steer?1:0,stability:t.assists.stability,autoGear:t.assists.autoGear}:{abs:!0,tc:2,steer:0,autoGear:!0,stability:1},_.rs=this.makeRaceState(_,b),_.rs.compounds=[v],_.drsAllowed=!1,_.gapAhead=99,!g&&!i){let T=this.getProfile(w,`${p.id}:${v}`),y=new Ji({car:_,track:e,profile:T,level:t.level,seed:t.seed*31+m,teamIdx:x.ti,skill:.982+.018*x.driver.talent,boxS:e.pit?e.pitBox(x.ti).s:null,boxD:e.pit?e.pitBox(x.ti).d:null});_.driver=y;let S=Math.round(this.totalLaps*(.35+.35*n()));_.rs.plannedStop=this.totalLaps>=4&&(t.mandatoryStop||t.tyreWear>=2.5||n()<.3)?Math.max(1,S):null}g&&(this.player=_,_.rs.pilot=null),this.cars.push(_)}),this.sorted=[...this.cars],this.cars.forEach(f=>this.updateRank())}makeRaceState(t,e){let n=this.track.length,i=-_e(this.track.length-e.s,n),r=this.track.cpCount;return{lastS:t.s,dist:i,maxDist:i,laps:0,lapStart:0,lapTimes:[],last:null,best:1/0,sectorIdx:2,sectorStart:0,sectors:[null,null,null],bestSectors:[1/0,1/0,1/0],cpTimes:new Float64Array(Math.min(this.totalLaps+3,400)*r+16).fill(NaN),cpIdx:Math.floor(i/this.track.cpSpacing),finished:!1,finishTime:null,dnf:!1,penalty:0,penaltyLog:[],warnings:0,limitTimer:0,offTimer:0,stops:0,service:null,pitRequested:!1,nextCompound:null,drsEligible:[],drsLatch:!1,inPitLane:!1,pitSpeedT:0,pitPenalised:!1,resets:0,falseStart:!1,moved:!1,pos:0,mistakeFlash:0,lastImpact:-9,stopped:0,cpGap:0}}start(){if(this.phase!=="grid")return;this.phase="countdown",this.cdStart=this.time;let t=this.opt.mode==="timetrial";this.lightsSeq=t?[.6,1.2,1.8]:[1.2,2.2,3.2,4.2,5.2],this.holdTime=t?.5:.7+this.rng()*2.2,this.lightsOutAt=this.cdStart+this.lightsSeq[this.lightsSeq.length-1]+this.holdTime}lapsLeft(t){return this.totalLaps-t.rs.laps}pushEvent(t){t.t=this.time,this.events.push(t),this.events.length>400&&this.events.splice(0,100)}step(t,e){if(this.time+=t,this.stepCount++,this.phase==="countdown"){let i=this.time-this.cdStart,r=this.lightsSeq.filter(a=>i>=a).length;if(r!==this.lights&&(this.lights=r,this.pushEvent({type:"light",n:r})),this.time>=this.lightsOutAt){this.phase="racing",this.t0=this.time,this.lights=0,this.pushEvent({type:"lightsOut"});for(let a of this.cars)a.rs.lapStart=this.t0,a.rs.sectorStart=this.t0}}let n=this.phase==="racing"||this.phase==="finished";for(let i of this.cars){let r=this.inputFor(i,t,e);i.step(t,r)}if(n||this.phase==="countdown"){this.opt.collisions&&this.cars.length>1&&this.collisions();for(let i of this.cars){let r=bd(i,this.track);r&&r.speed>.8?(i.locate(),this.opt.damage&&i.applyDamage(r.energy*.8,r.lx,r.ly),r.speed>3&&this.pushEvent({type:"impact",car:i,energy:r.energy,speed:r.speed,wall:!0,x:r.wx,y:r.wy}),i.rs.lastImpact=this.time):r&&i.locate()}}for(let i of this.cars)this.updateTiming(i,t);if(this.stepCount%4===0){this.updateRank(),this.updateAeroInteractions();for(let i of this.cars)this.updateDrs(i),this.updatePit(i,t*4),this.updateRules(i,t*4);this.updateFinish(),this.adaptPace(),this.recoverStuck(t*4)}this.opt.mode==="timetrial"&&this.recordGhost()}inputFor(t,e,n){let i=t.rs,r=this.phase==="racing"||this.phase==="finished",a;if(t===this.player){a=this._pin||(this._pin={throttle:0,brake:0,steer:0,drs:!1,boost:!1,gearUp:!1,gearDown:!1,pitLimit:0,allowReverse:!0});let l=n||{};if(a.throttle=l.throttle||0,a.brake=l.brake||0,a.steer=l.steer||0,a.boost=!!l.boost,a.gearUp=!!l.gearUp,a.gearDown=!!l.gearDown,a.pitLimit=0,a.allowReverse=this.phase==="racing"&&!this.opt.noReverse,i.pilot&&i.pilot.pitState!=="none"){let c=i.pilot.update(e,this);a.throttle=c.throttle,a.brake=c.brake,a.steer=c.steer,a.pitLimit=c.pitLimit,a.boost=!1}if(r||(a.brake=Math.max(a.brake,0)),i.service&&(a.throttle=0,a.brake=1),(i.service||i.pilot&&i.pilot.pitState!=="none")&&(a.allowReverse=!1),l.drsPress&&t.drsAllowed&&(i.drsLatch=!0),(!t.drsAllowed||a.brake>.1)&&(i.drsLatch=!1),a.drs=i.drsLatch,i.inPitLane&&this.track.inPitLimiter(t.s)&&(a.pitLimit=this.track.pit.limit),this.track.pit&&l.pitToggle&&(i.pitRequested=!i.pitRequested,this.pushEvent({type:"pitRequest",car:t,on:i.pitRequested})),l.tyreCycle){let c=Zr,h=i.nextCompound||t.compound.id;i.nextCompound=c[(c.indexOf(h)+1)%c.length]}return this.opt.mode==="timetrial"&&this.phase!=="racing"&&(a.throttle=0,a.brake=1,a.steer=0),a}let o=t.driver;return o?(a=o.update(e,this),i.service&&(a.throttle=0,a.brake=1),a.drs=a.drs&&t.drsAllowed&&a.brake<.1,i.finished&&this.chequered&&(o.paceAdapt=.5),a):this._idle||(this._idle={throttle:0,brake:1,steer:0,drs:!1,boost:!1})}onPitSurface(t){let e=0;for(let n=0;n<4;n++)t.surf[n]===Ut.PIT&&e++;return e>=2}collisions(){let t=this.cars;for(let e=0;e<t.length;e++)for(let n=e+1;n<t.length;n++){let i=t[e],r=t[n];if(i.rs.service||r.rs.service)continue;let a=Md(i,r);if(a&&a.energy){i.locate(),r.locate();let o=e*32+n,l=this.pairContact.get(o)??-9;if(this.pairContact.set(o,this.time),this.time-l<.25)continue;this.opt.damage&&(i.applyDamage(a.energy,a.la[0],a.la[1]),r.applyDamage(a.energy,a.lb[0],a.lb[1])),a.speed>1.2&&this.pushEvent({type:"impact",car:i,other:r,energy:a.energy,speed:a.speed,x:(i.x+r.x)/2,y:(i.y+r.y)/2}),i.rs.lastImpact=r.rs.lastImpact=this.time}}}updateTiming(t,e){let n=t.rs,i=this.track,r=i.length,a=sn(t.s,n.lastS,r);if(n.lastS=t.s,this.phase==="grid"||this.phase==="countdown"){this.phase==="countdown"&&t.info.isPlayer&&!n.falseStart&&t.u>1&&this.opt.mode==="race"&&(n.falseStart=!0,this.addPenalty(t,5,"False start")),n.dist+=a;return}n.dist+=a;let o=n.maxDist;if(n.dist>n.maxDist&&(n.maxDist=n.dist),n.finished&&!t.driver&&!t.info.isPlayer)return;let l=Math.floor(n.maxDist/i.cpSpacing);for(;n.cpIdx<l;){n.cpIdx++;let h=(n.cpIdx*i.cpSpacing-o)/Math.max(1e-6,n.maxDist-o),d=n.cpIdx+8;d>=0&&d<n.cpTimes.length&&(n.cpTimes[d]=this.time-e*(1-at(h,0,1)));let u=(n.cpIdx%i.cpCount+i.cpCount)%i.cpCount;n.lapCpBest&&u>0&&n.laps>=1&&(n.delta=n.cpTimes[d]-n.lapStart-n.lapCpBest[u])}if(n.laps>=0){let h=t.s<i.sectors[0]?0:t.s<i.sectors[1]?1:2;if(h!==n.sectorIdx&&!(h===0&&n.sectorIdx===2&&o>=n.laps*r+r-1)&&(n.sectorIdx===0&&h===1||n.sectorIdx===1&&h===2)){let d=this.time;n.laps>=0&&this.finishSector(t,n.sectorIdx,d-n.sectorStart),n.sectorStart=d,n.sectorIdx=h}}let c=Math.max(0,Math.floor(n.maxDist/r));if(c>n.laps){let h=(c*r-o)/Math.max(1e-6,n.maxDist-o),d=this.time-e*(1-at(h,0,1));n.laps=c,this.crossLine(t,d)}}finishSector(t,e,n){let i=t.rs;i.laps<1&&e!==0&&e!==1||(i.sectors[e]=n,i.sectorPurple=i.sectorPurple||[],n<i.bestSectors[e]&&(i.bestSectors[e]=n),n<this.bestSectors[e]?(this.bestSectors[e]=n,i.sectorFlag={idx:e,kind:"purple",t:n}):n<=i.bestSectors[e]+1e-9?i.sectorFlag={idx:e,kind:"green",t:n}:i.sectorFlag={idx:e,kind:"none",t:n},t.info.isPlayer&&this.pushEvent({type:"sector",car:t,idx:e,t:n,kind:i.sectorFlag.kind}))}crossLine(t,e){let n=t.rs,i=e-n.lapStart,r=e-n.sectorStart;if(this.finishSector(t,2,r),n.sectorStart=e,n.sectorIdx=0,n.laps>=1){n.last=i,n.lapTimes.push(i);let a=n.laps>=2||this.totalLaps===1,o=!n.invalidLap&&a;if(o&&i<n.best&&(n.best=i,t.info.isPlayer)){let l=(n.laps-1)*this.track.cpCount+8,c=n.cpTimes[l],h=new Float64Array(this.track.cpCount),d=!Number.isNaN(c);for(let u=0;u<h.length&&d;u++)h[u]=n.cpTimes[l+u]-c,Number.isNaN(h[u])&&(d=!1);d&&(n.lapCpBest=h),this.opt.mode==="timetrial"&&this.commitGhost(i)}o&&i<this.fastest.time&&(this.fastest={time:i,car:t,lap:n.laps},this.pushEvent({type:"fastest",car:t,time:i})),this.pushEvent({type:"lap",car:t,time:i,lap:n.laps,best:i<=n.best,valid:o}),n.invalidLap=!1}n.lapStart=e,this.opt.mode==="timetrial"&&(this.ghostRec=[]),!n.finished&&(n.laps>=this.totalLaps||this.chequered)&&(n.finished=!0,n.finishTime=e-this.t0,this.chequered||(this.chequered=!0,this.chequeredAt=this.time,this.pushEvent({type:"chequered",car:t})),this.pushEvent({type:"finish",car:t,time:n.finishTime}))}updateRank(){let t=this.sorted;t.sort((i,r)=>{let a=i.rs,o=r.rs;return a.finished!==o.finished?a.finished?-1:1:a.finished&&o.finished?a.finishTime-o.finishTime:o.maxDist-a.maxDist});let e=this.track;t.forEach((i,r)=>{i.rs.pos=r+1;let a=r>0?t[r-1]:null;if(i.ahead=a,i.behind=r<t.length-1?t[r+1]:null,!a){i.gapAhead=null,i.rs.gapLeader=0;return}i.gapAhead=this.timeGap(i,a),i.rs.gapLeader=(a.rs.gapLeader??0)+(i.gapAhead??0),a.rs.finished&&i.rs.finished&&(i.gapAhead=i.rs.finishTime-a.rs.finishTime)});let n=t[0];for(let i of t)i.rs.lapsDown=Math.max(0,Math.floor((n.rs.maxDist-i.rs.maxDist)/e.length+1e-4))}timeGap(t,e){let n=t.rs,i=e.rs,r=n.cpIdx+8,a=i.cpTimes[r],o=n.cpTimes[r];if(r>=0&&r<n.cpTimes.length&&!Number.isNaN(a)&&!Number.isNaN(o)&&i.cpIdx>=n.cpIdx)return Math.max(0,o-a);let l=i.maxDist-n.maxDist;return Math.max(0,l/Math.max(20,t.speed))}updateAeroInteractions(){let t=this.track.length;for(let e of this.cars){let n=0;for(let i of this.cars){if(i===e)continue;let r=sn(i.s,e.s,t);if(r<4||r>42)continue;let a=Math.abs(i.d-e.d);if(a>3.2)continue;let o=r-5.5,l=at(1-o/34,0,1)*at(1-Math.max(0,a-.6)/2.6,0,1);l>n&&(n=l)}e.slipstream=n,e.dirtyAir=n*(this.phase==="racing"?1:0)}}updateDrs(t){let e=this.track,n=t.rs;if(!e.drs.length)return;let i=this.phase==="racing"&&(this.opt.mode==="timetrial"||n.laps>=1),r=e.inDrsZone(t.s);for(let a=0;a<e.drs.length;a++){let o=e.drs[a],l=sn(t.s,o.detect,e.length);l>=0&&l<Math.max(8,t.speed*.06)&&(n.drsEligible[a]=this.opt.mode==="timetrial"||t.gapAhead!=null&&t.gapAhead<1),r!==a&&n.drsEligible[a]&&sn(t.s,o.end,e.length)>10&&sn(t.s,o.end,e.length)<200&&(n.drsEligible[a]=!1)}t.drsAllowed=i&&r>=0&&!!n.drsEligible[r]&&!n.inPitLane&&!n.service,t.drsZone=r,t.drsEligible=n.drsEligible.some(Boolean)}updatePit(t,e){let n=this.track,i=t.rs;if(!n.pit)return;let r=n.inPitRange(t.s)&&this.onPitSurface(t)&&t.d<-(n.wr[t.i]+n.kr[t.i]+.8);r!==i.inPitLane&&(i.inPitLane=r,this.pushEvent({type:r?"pitEntry":"pitExit",car:t}),r||(i.pitPenalised=!1)),i.inPitLane&&n.inPitLimiter(t.s)?(i.pitZoneT=(i.pitZoneT||0)+e,i.pitZoneT>1.6&&t.speed>n.pit.limit+2.5&&!t.driver?(i.pitSpeedT+=e,i.pitSpeedT>.35&&!i.pitPenalised&&(i.pitPenalised=!0,this.addPenalty(t,5,"Speeding in the pit lane"))):i.pitSpeedT=0):i.pitZoneT=0;let a=t.driver;if(a){let o=t.tyreSummary(),l=i.stops>=1,c=this.totalLaps-i.laps;!a.wantsPit&&a.pitState==="none"&&c>1&&(i.plannedStop!=null&&!l&&i.laps>=i.plannedStop&&(a.wantsPit=!0),o.wear>.72&&!l&&(a.wantsPit=!0),o.wear>.88&&(a.wantsPit=!0),t.damageFront>.45&&c>2&&(a.wantsPit=!0))}if(i.boxLatch&&t.speed>3&&(i.boxLatch=!1),t===this.player&&!i.service&&!i.boxLatch&&i.inPitLane&&t.speed<.7){let o=n.pitBox(t.info.teamIdx);Math.abs(sn(t.s,o.s,n.length))<3.2&&Math.abs(t.d-o.d)<2.8&&(t.pitStopped=!0)}if(t.pitStopped&&!i.service){let o=2.3+this.rng()*(1.1+(1-this.opt.level)*1.2);(t.damageFront||0)>.15&&(o+=3.5),i.service={t:0,dur:o},this.pushEvent({type:"pitStopStart",car:t,dur:o})}if(i.service&&(i.service.t+=e,i.service.t>=i.service.dur)){let o=i.nextCompound;if(!o){let l=t.compound.id,c=Zr.filter(h=>h!==l);o=c[Math.floor(this.rng()*c.length)]}if(t.fitTyres(In[o]),t.repair(),i.nextCompound=null,i.compounds.push(o),i.stops++,i.service=null,i.pitRequested=!1,i.boxLatch=!0,t.pitStopped=!1,a){let l=t.info.team;a.profile=this.getProfile(t.spec,`${l.id}:${o}`)}this.pushEvent({type:"pitStopEnd",car:t,compound:o})}if(t===this.player&&this.opt.assists.pitAuto&&!i.service){if(!i.pilot){let o=n.pitBox(t.info.teamIdx);i.pilot=new Ji({car:t,track:n,profile:this.getProfile(t.spec,"pilot"),level:1,seed:99,boxS:o.s,boxD:o.d}),i.pilot.dp.pace=.9,i.pilot.goTime=0}if(i.pilot.profile=this.getProfile(t.spec,"pilot"),i.pilot.wantsPit=i.pitRequested,i.pilot.pitState==="none"){let o=_e(n.pit.start-t.s,n.length);i.pitRequested&&o<140&&o>10&&this.phase==="racing"&&(i.pilot.pitState="in")}i.pilot.pitState==="stopped"&&!t.pitStopped&&(i.pilot.pitState="out")}}addPenalty(t,e,n){let i=t.rs;i.penalty+=e,i.penaltyLog.push({secs:e,reason:n,t:this.time}),this.pushEvent({type:"penalty",car:t,secs:e,reason:n})}updateRules(t,e){let n=t.rs;if(this.phase!=="racing"||!t.info.isPlayer)return;let i=0;for(let r=0;r<4;r++){let a=t.surf[r];(a===Ut.GRASS||a===Ut.GRAVEL||a===Ut.RUNOFF)&&i++}i===4?(n.offTimer+=e,n.offTimer>.15&&n.limitTimer<=0&&(n.limitTimer=2.5,n.invalidLap=!0,n.warnings++,this.opt.mode==="race"?n.warnings%3===0?this.addPenalty(t,5,"Track limits (3 warnings)"):this.pushEvent({type:"warning",car:t,n:n.warnings%3}):this.pushEvent({type:"lapInvalid",car:t}))):n.offTimer=0,n.limitTimer>0&&(n.limitTimer-=e)}updateFinish(){if(this.phase==="racing"&&this.chequered){let t=this.cars.filter(n=>!n.rs.finished&&!n.rs.dnf),e=this.player&&this.player.rs.finished;(!t.length||this.time-this.chequeredAt>240&&e)&&this.endRace()}}endRace(){if(this.phase="finished",this.opt.mandatoryStop&&this.player){let t=this.player.rs;(t.stops<1||new Set(t.compounds).size<2)&&this.addPenalty(this.player,15,"Mandatory stop / two compounds not completed")}this.pushEvent({type:"raceEnd"})}classification(){let t=this.cars.map(n=>({car:n,info:n.info,laps:Math.min(n.rs.laps,this.totalLaps),time:n.rs.finished?n.rs.finishTime+n.rs.penalty:null,raw:n.rs.finishTime,penalty:n.rs.penalty,best:n.rs.best,stops:n.rs.stops,dist:n.rs.maxDist,gridPos:n.info.gridPos}));t.sort((n,i)=>n.time!=null!=(i.time!=null)?n.time!=null?-1:1:n.time!=null&&i.time!=null?n.laps===i.laps?n.time-i.time:i.laps-n.laps:i.dist-n.dist),t.forEach((n,i)=>n.pos=i+1);let e=[25,18,15,12,10,8,6,4,2,1];return t.forEach(n=>n.points=(e[n.pos-1]||0)+(this.fastest.car===n.car&&n.pos<=10?1:0)),t}adaptPace(){if(!this.opt.adaptive||!this.player||this.stepCount%240!==0)return;let t=this.player;for(let e of this.cars){if(!e.driver||e.rs.finished)continue;let n=(e.rs.maxDist-t.rs.maxDist)/60,i=1;n>6?i=1-at((n-6)*.004,0,.05):n<-6&&(i=1+at((-n-6)*.004,0,.03)),e.driver.paceAdapt=i}}recoverStuck(t){for(let e of this.cars){let n=e.driver;n&&n.stuckT>5&&(n.stuckT=0,this.resetToTrack(e))}}resetToTrack(t,e=0){let n=this.track,i=n.pointAt(t.s,at(n.lineAt(t.s)*.5,-n.wr[t.i]+3,n.wl[t.i]-3));t.reset(i.x,i.y,i.heading,6),t.repair(),t.rs.resets++,t.rs.lastS=t.s,t.rs.dist=t.rs.maxDist,t.dirtyAir=0,t.driver&&(t.driver.offset=0,t.driver.mistake=null),t.rs.drsLatch=!1,e&&this.addPenalty(t,e,"Car recovered"),this.pushEvent({type:"recover",car:t})}recordGhost(){if(this.phase!=="racing"||!this.player||this.stepCount%12!==0)return;let t=this.player;this.ghostRec.push(t.x,t.y,t.theta,t.steer)}commitGhost(t){this.ghostBest={time:t,frames:Float32Array.from(this.ghostRec),track:this.track.id},this.pushEvent({type:"ghost",time:t})}ghostPose(t){let e=this.ghostBest;if(!e)return null;let n=t/(12*Dn),i=Math.floor(n),r=e.frames.length/4;if(i<0||i>=r-1)return null;let a=n-i,o=i*4,l=o+4,c=e.frames[l+2]-e.frames[o+2];return c>Math.PI&&(c-=2*Math.PI),c<-Math.PI&&(c+=2*Math.PI),{x:e.frames[o]+(e.frames[l]-e.frames[o])*a,y:e.frames[o+1]+(e.frames[l+1]-e.frames[o+1])*a,theta:e.frames[o+2]+c*a,steer:e.frames[o+3]}}};function Le(s,t=!1){let e=s[0].index!==null,n=new Set(Object.keys(s[0].attributes)),i=new Set(Object.keys(s[0].morphAttributes)),r={},a={},o=s[0].morphTargetsRelative,l=new oe,c=0;for(let h=0;h<s.length;++h){let d=s[h],u=0;if(e!==(d.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let f in d.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(d.attributes[f]),u++}if(u!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==d.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let f in d.morphAttributes){if(!i.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;a[f]===void 0&&(a[f]=[]),a[f].push(d.morphAttributes[f])}if(t){let f;if(e)f=d.index.count;else if(d.attributes.position!==void 0)f=d.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,f,h),c+=f}}if(e){let h=0,d=[];for(let u=0;u<s.length;++u){let f=s[u].index;for(let m=0;m<f.count;++m)d.push(f.getX(m)+h);h+=s[u].attributes.position.count}l.setIndex(d)}for(let h in r){let d=wd(r[h]);if(!d)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,d)}for(let h in a){let d=a[h][0].length;if(d!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let u=0;u<d;++u){let f=[];for(let x=0;x<a[h].length;++x)f.push(a[h][x][u]);let m=wd(f);if(!m)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(m)}}}return l}function wd(s){let t,e,n,i=-1,r=0;for(let c=0;c<s.length;++c){let h=s[c];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(i===-1&&(i=h.gpuType),i!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}let a=new t(r),o=new Jt(a,e,n),l=0;for(let c=0;c<s.length;++c){let h=s[c];if(h.isInterleavedBufferAttribute){let d=l/e;for(let u=0,f=h.count;u<f;u++)for(let m=0;m<e;m++){let x=h.getComponent(u,m);o.setComponent(u+d,m,x)}}else a.set(h.array,l);l+=h.count*e}return i!==void 0&&(o.gpuType=i),o}var _l=["VELOCE","PETRONOVA","QUANTUM","AXIOM","NOVATEL","STRATOS","HYPERION","ORBITAL","ZENITH","TORQUE+","APEXFUEL","MERIDIAN","KINETIC","SOLARIS"],vl=[["#ffffff","#d8102b"],["#0b1f4d","#ffffff"],["#ffd400","#111111"],["#111111","#ff7a14"],["#ffffff","#0a7d4f"],["#e8e8e8","#6a2fb5"]];function an(s,t){let e=document.createElement("canvas");return e.width=s,e.height=t,[e,e.getContext("2d")]}function on(s,{repeat:t=!0,srgb:e=!0,aniso:n=8}={}){let i=new ki(s);return t&&(i.wrapS=i.wrapT=xs),e&&(i.colorSpace=$e),i.anisotropy=n,i.generateMipmaps=!0,i.minFilter=Wn,i}function Pi(s,t,e,n,i,r,a,o,l=1){for(let c=0;c<n;c++){s.globalAlpha=l*(.3+.7*i()),s.fillStyle=r[Math.floor(i()*r.length)];let h=a+(o-a)*i(),d=i()*t,u=i()*e;s.beginPath(),s.arc(d,u,h,0,6.283),s.fill(),d<h&&(s.beginPath(),s.arc(d+t,u,h,0,6.283),s.fill()),u<h&&(s.beginPath(),s.arc(d,u+e,h,0,6.283),s.fill()),d>t-h&&(s.beginPath(),s.arc(d-t,u,h,0,6.283),s.fill()),u>e-h&&(s.beginPath(),s.arc(d,u-e,h,0,6.283),s.fill())}s.globalAlpha=1}function Ed(){let[s,t]=an(512,512),e=qe(11);t.fillStyle="#3b3c40",t.fillRect(0,0,512,512),Pi(t,512,512,60,e,["#35363a","#444549","#3f4044"],30,90,.35),Pi(t,512,512,5200,e,["#2b2c2f","#505156","#5b5c61","#222326"],.5,1.6,.55),t.strokeStyle="rgba(15,15,18,0.4)",t.lineWidth=1;for(let n=0;n<9;n++){t.beginPath();let i=e()*512,r=e()*512;t.moveTo(i,r);for(let a=0;a<8;a++)i+=(e()-.5)*60,r+=(e()-.5)*60,t.lineTo(i,r);t.stroke()}return on(s)}function Td(){let[s,t]=an(256,256),e=qe(21);return t.fillStyle="#5b5f66",t.fillRect(0,0,256,256),Pi(t,256,256,1800,e,["#4d5157","#6b7078","#41454b"],.5,1.5,.6),on(s)}function Ad(s="#4a7d2f",t="#5e9238"){let[e,n]=an(512,512),i=qe(31);n.fillStyle=s,n.fillRect(0,0,512,512),Pi(n,512,512,70,i,[t,s,"#3c6a27"],20,70,.28),n.lineWidth=1;for(let r=0;r<7e3;r++){n.strokeStyle=i()<.5?t:"#2f5a1e",n.globalAlpha=.35;let a=i()*512,o=i()*512;n.beginPath(),n.moveTo(a,o),n.lineTo(a+(i()-.5)*3,o-2-i()*4),n.stroke()}return n.globalAlpha=1,on(e)}function Rd(){let[s,t]=an(256,256),e=qe(41);return t.fillStyle="#b9a98a",t.fillRect(0,0,256,256),Pi(t,256,256,3500,e,["#a69677","#cbbb9c","#8f8062","#d8cdb4"],.6,1.8,.8),on(s)}function Cd(){let[s,t]=an(64,128);t.fillStyle="#e53935",t.fillRect(0,0,64,128),t.fillStyle="#f5f5f5",t.fillRect(0,64,64,64);let e=qe(51);return Pi(t,64,128,300,e,["#00000022","#ffffff22"],.5,1.2,.5),on(s)}function Pd(){let[s,t]=an(64,64);t.fillStyle="#f2f2f2",t.fillRect(0,0,64,64),t.fillStyle="#151515";for(let e=0;e<4;e++)for(let n=0;n<4;n++)(n+e)%2===0&&t.fillRect(n*16,e*16,16,16);return on(s)}function Id(s=5){let[t,e]=an(1024,128),n=qe(s);e.fillStyle="#e9e9e6",e.fillRect(0,0,1024,128),Pi(e,1024,128,120,n,["#d4d4d0","#f4f4f2","#c9c9c4"],8,40,.25);let i=0;for(;i<1024;){let r=170+n()*130,[a,o]=vl[Math.floor(n()*vl.length)];e.fillStyle=a,e.fillRect(i+6,14,r-12,100),e.fillStyle=o,e.font='900 64px "Arial Black", Impact, sans-serif',e.textAlign="center",e.textBaseline="middle",e.fillText(_l[Math.floor(n()*_l.length)],i+r/2,66,r-28),i+=r}return e.fillStyle="#c9201f",e.fillRect(0,118,1024,10),on(t)}function Ld(){let[s,t]=an(512,128),e=qe(61);t.fillStyle="#16171a",t.fillRect(0,0,512,128);for(let n=0;n<3;n++)for(let i=0;i<8;i++){let r=i*64+n%2*32,a=n*42;t.fillStyle="#26282c",t.beginPath(),t.ellipse(r+32,a+21,30,19,0,0,6.283),t.fill(),t.fillStyle="#0c0d0f",t.beginPath(),t.ellipse(r+32,a+21,14,8,0,0,6.283),t.fill(),e()<.3&&(t.fillStyle=e()<.5?"#f2f2f2":"#2a6cd6",t.fillRect(r+8,a+6,48,6))}return on(s)}function Dd(){let[s,t]=an(256,128),e=qe(71);t.fillStyle="#2b2b30",t.fillRect(0,0,256,128);let n=["#d33","#eee","#36c","#fc3","#3a6","#c6c","#f80","#ddd","#222","#59f"];for(let i=0;i<2600;i++)t.fillStyle=n[Math.floor(e()*n.length)],t.fillRect(Math.floor(e()*128)*2,Math.floor(e()*64)*2,2,2);t.globalAlpha=.25,t.fillStyle="#000";for(let i=0;i<128;i+=8)t.fillRect(0,i+6,256,2);return on(s)}function Fd(s=3,t="#e8dcc6"){let[e,n]=an(256,512),i=qe(s);n.fillStyle=t,n.fillRect(0,0,256,512),Pi(n,256,512,200,i,["#00000010","#ffffff18"],6,30,.5);for(let r=14;r<500;r+=46)for(let a=16;a<240;a+=48){let o=i()<.18;n.fillStyle=o?"#ffe9a8":"#3d5266",n.fillRect(a,r,26,32),n.fillStyle="rgba(255,255,255,0.18)",n.fillRect(a,r,26,8),n.fillStyle="#00000033",n.fillRect(a-3,r+33,32,3)}return on(e)}function xh(s=0){let[t,e]=an(512,128),[n,i]=vl[s%vl.length];return e.fillStyle=n,e.fillRect(0,0,512,128),e.fillStyle=i,e.fillRect(0,108,512,20),e.font='900 78px "Arial Black", Impact, sans-serif',e.textAlign="center",e.textBaseline="middle",e.fillText(_l[s%_l.length],256,56,480),on(t,{repeat:!1})}function Nd(){let[s,t]=an(128,128);t.fillStyle="#2a2d33",t.fillRect(0,0,128,128),t.fillStyle="#1b1d22";for(let e=10;e<118;e+=12)t.fillRect(8,e,112,6);return t.fillStyle="rgba(255,255,255,0.12)",t.fillRect(0,0,128,6),on(s,{repeat:!1})}function Ud(){let[s,t]=an(64,64),e=t.createRadialGradient(32,32,0,32,32,32);return e.addColorStop(0,"rgba(255,255,255,1)"),e.addColorStop(.35,"rgba(255,255,255,0.55)"),e.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=e,t.fillRect(0,0,64,64),on(s,{repeat:!1,srgb:!1})}function Bd(s,t="#ffffff",e=null){let[n,i]=an(128,128);return e&&(i.fillStyle=e,i.fillRect(0,0,128,128)),i.fillStyle=t,i.font='900 100px "Arial Black", Impact, sans-serif',i.textAlign="center",i.textBaseline="middle",i.fillText(String(s),64,68),on(n,{repeat:!1})}function Od(s,t="#fff",e="#111",n=256,i=64){let[r,a]=an(n,i);return a.fillStyle=e,a.fillRect(0,0,n,i),a.fillStyle=t,a.font=`900 ${Math.floor(i*.62)}px "Arial Black", Impact, sans-serif`,a.textAlign="center",a.textBaseline="middle",a.fillText(s,n/2,i/2+2,n-10),on(r,{repeat:!1})}function Ml(s,t){let e=s*374761393+t*668265263|0;return e=(e^e>>>13)*1274126177,((e^e>>>16)>>>0)/4294967296}function Zx(s,t){let e=Math.floor(s),n=Math.floor(t),i=s-e,r=t-n,a=i*i*(3-2*i),o=r*r*(3-2*r),l=Ml(e,n),c=Ml(e+1,n),h=Ml(e,n+1),d=Ml(e+1,n+1);return l+(c-l)*a+(h-l)*o+(l-c-h+d)*a*o}function jr(s,t,e=4){let n=.5,i=1,r=0;for(let a=0;a<e;a++)r+=n*Zx(s*i,t*i),n*=.5,i*=2.03;return r}var Jx=`
varying vec3 vDir;
void main() {
  vDir = normalize(position);
  vec4 p = modelViewMatrix * vec4(position, 1.0);
  gl_Position = projectionMatrix * p;
  gl_Position.z = gl_Position.w; // always at the far plane
}`,Kx=`
varying vec3 vDir;
uniform vec3 top; uniform vec3 horizon; uniform vec3 ground; uniform vec3 sunDir; uniform vec3 sunColor; uniform float time; uniform float cloud;
float hash(vec2 p){ return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
float noise(vec2 p){ vec2 i = floor(p), f = fract(p); f = f*f*(3.0-2.0*f);
  return mix(mix(hash(i), hash(i+vec2(1,0)), f.x), mix(hash(i+vec2(0,1)), hash(i+vec2(1,1)), f.x), f.y); }
float fbm(vec2 p){ float a = 0.5, s = 0.0; for (int i = 0; i < 5; i++) { s += a * noise(p); p *= 2.07; a *= 0.5; } return s; }
void main() {
  vec3 d = normalize(vDir);
  float h = clamp(d.y, -1.0, 1.0);
  vec3 col = mix(horizon, top, pow(clamp(h, 0.0, 1.0), 0.55));
  col = mix(col, ground, smoothstep(0.0, -0.25, h));
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
}`;function jx(s){let t=s.sky,e=new Ve({vertexShader:Jx,fragmentShader:Kx,side:Ue,depthWrite:!1,uniforms:{top:{value:new ht(t.top)},horizon:{value:new ht(t.horizon)},ground:{value:new ht(s.fog).multiplyScalar(.75)},sunDir:{value:new F(...t.sun).normalize()},sunColor:{value:new ht(t.sunColor)},time:{value:0},cloud:{value:s.cloud??.8}}}),n=new Ct(new Mi(6e3,32,16),e);return n.frustumCulled=!1,n.renderOrder=-10,n}function bl(s,t){let e=[],n=-1,i=(()=>{for(let r=0;r<s;r++)if(!t(r))return r;return-1})();if(i<0)return[[0,s-1,!0]];for(let r=1;r<=s;r++){let a=(i+r)%s,o=t(a);o&&n<0&&(n=a),!o&&n>=0&&(e.push([n,(a-1+s)%s]),n=-1)}return e}function zd(s){for(let t of s)t.deleteAttribute("uv");return Le(s)}var Sl=class{constructor(t,e={}){this.track=t,this.quality=e.quality||"high",this.theme=t.theme,this.group=new He,this.dynamic=[],this.tex={};let n=this.theme;this.rnd=qe(1234),this.waterLevel=null,this.sky=jx(n),this.group.add(this.sky),this.buildLights(),this.buildTextures(),this.buildTerrain(),this.buildRoad(),this.buildBarriers(),this.buildPit(),this.buildStartLine(),this.buildScenery(),e.profile&&this.buildBrakeBoards(e.profile),this.buildMountains()}buildLights(){let t=this.theme,e=new F(...t.sky.sun).normalize();this.sunDir=e,this.hemi=new Cr(new ht(t.sky.top).lerp(new ht("#ffffff"),.4),new ht(t.grass[0]).multiplyScalar(.7),.85),this.group.add(this.hemi),this.sun=new Lr(new ht(t.sky.sunColor),2.6),this.sun.castShadow=this.quality!=="low";let n=this.sun.shadow.camera;n.left=-70,n.right=70,n.top=70,n.bottom=-70,n.near=10,n.far=500,this.sun.shadow.mapSize.set(this.quality==="high"?4096:2048,this.quality==="high"?4096:2048),this.sun.shadow.bias=-4e-4,this.sun.shadow.normalBias=.05,this.group.add(this.sun,this.sun.target)}focusShadow(t){let e=this.sunDir,n=140/this.sun.shadow.mapSize.x,i=Math.round(t.x/n)*n,r=Math.round(t.z/n)*n;this.sun.position.set(i+e.x*220,t.y+e.y*220,r+e.z*220),this.sun.target.position.set(i,t.y,r),this.sun.target.updateMatrixWorld()}buildTextures(){let t=this.theme,e=this.tex;e.asphalt=Ed(),e.runoff=Td(),e.grass=Ad(t.grass[0],t.grass[1]),e.gravel=Rd(),e.kerb=Cd(),e.barrier=Id(),e.tyres=Ld(),e.crowd=Dd(),e.start=Pd()}buildTerrain(){let t=this.track,e=this.theme,n=1/0,i=-1/0,r=1/0,a=-1/0;for(let L=0;L<t.N;L+=3)n=Math.min(n,t.x[L]),i=Math.max(i,t.x[L]),r=Math.min(r,t.y[L]),a=Math.max(a,t.y[L]);let o=900;n-=o,i+=o,r-=o,a+=o;let l=30,c=Math.ceil((i-n)/l),h=Math.ceil((a-r)/l),d=new Float32Array((c+1)*(h+1)*3),u=new Float32Array((c+1)*(h+1)*3),f=new Float32Array((c+1)*(h+1)*2),m={i:0,t:0,s:0,d:0,dist:0},x=new ht(e.grass[0]),g=new ht(e.grass[1]),p=new ht("#6d6a5f"),v=new ht,w=180*(e.hills??.3),_=!!e.water,b=1/0;for(let L=0;L<t.N;L++)b=Math.min(b,t.z[L]);this.waterLevel=_?b-3.2:null;let M=0;for(let L=0;L<=h;L++)for(let A=0;A<=c;A++,M++){let N=n+A*l,G=r+L*l;t.project(N,G,-1,m);let z=t.at(t.z,m.s),H=m.d>=0?1:-1,V=t.wallDist(m.i,H)+6,X=Xe(V,V+(_?220:180),m.dist),rt=jr(N*.0011,G*.0011,5),st=(jr(N*.02,G*.02,3)-.5)*2.2,St;_?St=this.waterLevel-2.5+(rt-.5)*4:St=z+w*(rt*1.5-.55)+st;let bt=z-.12+st*Xe(V,V+40,m.dist)*.4,At=le(bt,St,X),q=Math.min(N-n,i-N,G-r,a-G);At=le(-9,At,Xe(0,500,q)),d[M*3]=N,d[M*3+1]=At,d[M*3+2]=-G,f[M*2]=N/40,f[M*2+1]=-G/40;let j=jr(N*.006,G*.006,3);v.copy(x).lerp(g,j).multiplyScalar(.8+.4*jr(N*.05,G*.05,2));let lt=at((At-z-25)/90,0,.7)*X;v.lerp(p,lt),u[M*3]=v.r,u[M*3+1]=v.g,u[M*3+2]=v.b}let T=new Uint32Array(c*h*6),y=0;for(let L=0;L<h;L++)for(let A=0;A<c;A++){let N=L*(c+1)+A,G=N+1,z=N+c+1,H=z+1;T[y++]=N,T[y++]=G,T[y++]=z,T[y++]=G,T[y++]=H,T[y++]=z}let S=new oe;if(S.setAttribute("position",new Jt(d,3)),S.setAttribute("color",new Jt(u,3)),S.setAttribute("uv",new Jt(f,2)),S.setIndex(new Jt(T,1)),S.computeVertexNormals(),S.attributes.normal.getY(Math.floor(d.length/6))<0){for(let L=0;L<T.length;L+=3){let A=T[L+1];T[L+1]=T[L+2],T[L+2]=A}S.setIndex(new Jt(T,1)),S.computeVertexNormals()}this.tex.grass.repeat.set(1,1);let P=new Ht({map:this.tex.grass,vertexColors:!0,roughness:1,metalness:0}),I=new Ct(S,P);if(I.receiveShadow=!0,this.group.add(I),this.terrain=I,this.bounds={minX:n,maxX:i,minY:r,maxY:a},_){let L=new Pe(i-n+4e3,a-r+4e3);L.rotateX(-Math.PI/2);let A=new Ht({color:"#1d6a8f",roughness:.12,metalness:.25,transparent:!0,opacity:.92}),N=new Ct(L,A);N.position.set((n+i)/2,this.waterLevel,-(r+a)/2),this.group.add(N),this.water=N}}ribbonGeometry(t,e,n,i,{yOff:r=0,vLen:a=10,uRepeat:o=1,vertical:l=null}={}){let c=this.track,h=c.N,d=(e-t+h)%h+1,u=new Float32Array(d*2*3),f=new Float32Array(d*2*2),m=[],x=0;for(let p=0;p<d;p++){let v=(t+p)%h,w=typeof n=="function"?n(v):n[v],_=typeof i=="function"?i(v):i[v],b=c.z[v]+r,M=c.nx[v],T=c.ny[v];u.set([c.x[v]+M*w,b,-(c.y[v]+T*w)],p*6),u.set([c.x[v]+M*_,b,-(c.y[v]+T*_)],p*6+3),p>0&&(x+=c.ds);let y=x/a;if(f.set([0,y,o,y],p*4),p<d-1){let S=p*2;m.push(S,S+2,S+1,S+1,S+2,S+3)}}let g=new oe;return g.setAttribute("position",new Jt(u,3)),g.setAttribute("uv",new Jt(f,2)),g.setIndex(m),g.computeVertexNormals(),g}addRibbons(t,e,{receive:n=!0,order:i=0,polygon:r=0}={}){if(!t.length)return;let a=t.length===1?t[0]:Le(t),o=new Ct(a,e);return o.receiveShadow=n,o.renderOrder=i,this.group.add(o),o}buildRoad(){let t=this.track,e=t.N,n=this.tex,i=new Ht({map:n.asphalt,roughness:.92,metalness:0,color:16777215}),r=bl(e,()=>!0),a=t.wl,o=t.wr;n.asphalt.repeat.set(1,1);let l=a[0]+o[0],c=this.ribbonGeometry(0,e-1,P=>-o[P],P=>a[P],{vLen:7.5,uRepeat:(a[0]+o[0])/7.5}),h=this.ribbonGeometry(e-1,0,P=>-o[P],P=>a[P],{vLen:7.5,uRepeat:l/7.5});this.road=this.addRibbons([c,h],i,{order:0}),this.road.material.polygonOffset=!0,this.road.material.polygonOffsetFactor=1,this.road.material.polygonOffsetUnits=1;let d=new me({color:0,transparent:!0,opacity:.2,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1}),u=t.lineD,f=this.ribbonGeometry(0,e-1,P=>u[P]-1.1,P=>u[P]+1.1,{yOff:.006}),m=this.ribbonGeometry(e-1,0,P=>u[P]-1.1,P=>u[P]+1.1,{yOff:.006}),x=this.addRibbons([f,m],d,{receive:!1,order:1}),g=new me({color:16053488,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}),p=[];for(let[P,I]of[[0,e-1],[e-1,0]])p.push(this.ribbonGeometry(P,I,L=>a[L]-.38,L=>a[L]-.15,{yOff:.01})),p.push(this.ribbonGeometry(P,I,L=>-o[L]+.15,L=>-o[L]+.38,{yOff:.01}));this.addRibbons(p,g,{receive:!1,order:2});let v=new Ht({map:n.kerb,roughness:.7,polygonOffset:!0,polygonOffsetFactor:-3,polygonOffsetUnits:-3}),w=[];for(let[P,I]of bl(e,L=>t.kl[L]>.1))w.push(this.ribbonGeometry(P,I,L=>a[L],L=>a[L]+t.kl[L],{yOff:.025,vLen:2,uRepeat:1}));for(let[P,I]of bl(e,L=>t.kr[L]>.1))w.push(this.ribbonGeometry(P,I,L=>-o[L]-t.kr[L],L=>-o[L],{yOff:.025,vLen:2,uRepeat:1}));n.kerb.rotation=0,n.kerb.repeat.set(1,1),this.addRibbons(w,v,{order:2});let _=new Ht({map:n.gravel,roughness:1}),b=new Ht({map:n.runoff,roughness:.95}),M=new Ht({map:n.grass,roughness:1}),T=[],y=[],S=[],C=P=>{let I=P>0?t.kl:t.kr,L=P>0?a:o,A=P>0?t.r1l:t.r1r,N=P>0?t.r2l:t.r2r,G=P>0?t.t1l:t.t1r,z=(X,rt)=>P*(L[X]+I[X]+rt),H=(X,rt,st)=>{st(X,rt)};for(let X of[Ut.GRAVEL,Ut.RUNOFF,Ut.GRASS])for(let[rt,st]of bl(e,St=>A[St]>.5&&G[St]===X)){let St=q=>P>0?z(q,0):z(q,A[q]),bt=q=>P>0?z(q,A[q]):z(q,0),At=this.ribbonGeometry(rt,st,St,bt,{yOff:-.005,vLen:X===Ut.RUNOFF?8:6,uRepeat:2});(X===Ut.GRAVEL?T:X===Ut.RUNOFF?y:S).push(At)}let U=X=>P>0?z(X,A[X]):z(X,A[X]+N[X]),V=X=>P>0?z(X,A[X]+N[X]):z(X,A[X]);S.push(this.ribbonGeometry(0,e-1,U,V,{yOff:-.01,vLen:8,uRepeat:2})),S.push(this.ribbonGeometry(e-1,0,U,V,{yOff:-.01,vLen:8,uRepeat:2}))};C(1),C(-1),this.addRibbons(T,_),this.addRibbons(y,b),this.addRibbons(S,M)}buildBarriers(){let t=this.track,e=t.N,n=this.tex,i=new Ht({map:n.barrier,roughness:.85,side:We}),r=new Ht({map:n.tyres,roughness:.95,side:We}),a=[],o=[],l=(d,u,f,m,x,g,p)=>{let v=(u-d+e)%e+1,w=new Float32Array(v*2*3),_=new Float32Array(v*4),b=[],M=0;for(let y=0;y<v;y++){let S=(d+y)%e,C=f*(t.wallDist(S,f)+m),P=t.z[S],I=t.x[S]+t.nx[S]*C,L=t.y[S]+t.ny[S]*C;if(w.set([I,P-.1,-L,I,P+x,-L],y*6),y>0&&(M+=t.ds),_.set([M/g,0,M/g,1],y*4),y<v-1){let A=y*2;b.push(A,A+1,A+2,A+1,A+3,A+2)}}let T=new oe;T.setAttribute("position",new Jt(w,3)),T.setAttribute("uv",new Jt(_,2)),T.setIndex(b),T.computeVertexNormals(),p.push(T)},c=this.track.def.runoff?.mode==="street";for(let d of[1,-1]){l(0,e-1,d,.12,c?1.5:1.25,8,a),l(e-1,0,d,.12,c?1.5:1.25,8,a);for(let u of t.corners){if(u.maxK<1/420||c||(u.sign>0?-1:1)!==d)continue;let m=(u.start-12+e)%e,x=(u.end+25)%e;l(m,x,d,-.9,1.15,4,o)}}let h=new Ct(Le(a),i);if(h.receiveShadow=!0,h.castShadow=!1,this.group.add(h),o.length){let d=new Ct(Le(o),r);this.group.add(d)}c||this.buildFences()}buildFences(){let t=this.track,e=t.N,n=[],i=[];for(let c of t.corners){if(c.maxK<1/300)continue;let h=c.sign>0?-1:1,d=(c.start-10+e)%e,f=((c.end+20)%e-d+e)%e+1,m=[],x=[];for(let p=0;p<f;p++){let v=(d+p)%e,w=h*(t.wallDist(v,h)+.2),_=t.x[v]+t.nx[v]*w,b=t.y[v]+t.ny[v]*w,M=t.z[v];m.push(_,M+1.2,-b,_,M+5,-b),p%6===0&&n.push([_,M,-b]),p<f-1&&x.push(p*2,p*2+1,p*2+2,p*2+1,p*2+3,p*2+2)}let g=new oe;g.setAttribute("position",new Kt(m,3)),g.setIndex(x),i.push(g)}if(!i.length)return;let r=new Ct(Le(i),new me({color:10134701,transparent:!0,opacity:.22,side:We,depthWrite:!1,wireframe:!1}));this.group.add(r);let a=new hn(.07,.07,5,5),o=new nn(a,new Ht({color:7173243,roughness:.6,metalness:.5}),n.length),l=new Qt;n.forEach((c,h)=>{l.makeTranslation(c[0],c[1]+2.5,c[2]),o.setMatrixAt(h,l)}),this.group.add(o)}buildPit(){let t=this.track;if(!t.pit)return;let e=t.pit,n=t.idx(e.start),i=t.idx(e.start+e.len),r=U=>t.pitCentre(U*t.ds),a=new Ht({map:this.tex.asphalt,roughness:.9,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1}),o=new Ct(this.ribbonGeometry(n,i,U=>r(U)-e.width/2,U=>r(U)+e.width/2,{yOff:.012,vLen:7.5,uRepeat:e.width/7.5}),a);o.receiveShadow=!0,o.renderOrder=1,this.group.add(o);let l=new me({color:16765952,polygonOffset:!0,polygonOffsetFactor:-3,polygonOffsetUnits:-3});this.group.add(new Ct(this.ribbonGeometry(n,i,U=>r(U)+.05,U=>r(U)+.3,{yOff:.02}),l));let c=new me({color:16777215,polygonOffset:!0,polygonOffsetFactor:-3,polygonOffsetUnits:-3});this.group.add(new Ct(Le([this.ribbonGeometry(n,i,U=>r(U)+e.width/2-.3,U=>r(U)+e.width/2-.12,{yOff:.02}),this.ribbonGeometry(n,i,U=>r(U)-e.width/2+.12,U=>r(U)-e.width/2+.3,{yOff:.02})]),c));let h=e.start+e.rampIn,d=e.start+e.len-e.rampOut,u={},f=new Qt,m=new Ne,x=new F,g=new F,p=new F(0,1,0),v=Math.floor((d-h)/6),w=new nn(new ye(1,1,1),new Ht({color:13619926,roughness:.8}),v);for(let U=0;U<v;U++){let V=h+U*6+3;t.pointAt(V,t.pitCentre(V)+e.width/2+.35,u),g.set(u.x,u.h+.55,-u.y),m.setFromAxisAngle(p,u.heading),x.set(6.05,1.1,.4),f.compose(g,m,x),w.setMatrixAt(U,f)}w.castShadow=!0,w.receiveShadow=!0,this.group.add(w);let _=14,b=7,M=Math.floor((d-h)/6),T=new nn(new ye(1,1,1),new Ht({color:15132908,roughness:.7}),M);for(let U=0;U<M;U++){let V=h+U*6+3;t.pointAt(V,t.pitCentre(V)-e.width/2-.8-_/2,u),g.set(u.x,u.h+b/2,-u.y),m.setFromAxisAngle(p,u.heading),x.set(6.02,b,_),f.compose(g,m,x),T.setMatrixAt(U,f)}T.castShadow=!0,T.receiveShadow=!0,this.group.add(T);let y=new nn(new ye(1,1,1),new Ht({color:2895926,roughness:.6}),M);for(let U=0;U<M;U++){let V=h+U*6+3;t.pointAt(V,t.pitCentre(V)-e.width/2+1.2,u),g.set(u.x,u.h+4.6,-u.y),m.setFromAxisAngle(p,u.heading),x.set(6.02,.25,4.4),f.compose(g,m,x),y.setMatrixAt(U,f)}y.castShadow=!0,this.group.add(y);let S=(U,V,X,rt,st,St=0)=>(St&&U.rotateX(St),U.rotateY(st),U.translate(V,X,rt),U),C=[],P=[],I=[],L=[],A=document.createElement("canvas");A.width=512,A.height=96*mn.length;let N=A.getContext("2d");N.textAlign="center",N.textBaseline="middle",N.font='900 64px "Arial Black", Impact, sans-serif';let G=(U,V,X=1)=>{let rt=new ht(V),st=U.attributes.position.count,St=new Float32Array(st*4);for(let bt=0;bt<st;bt++)St.set([rt.r,rt.g,rt.b,X],bt*4);return U.setAttribute("color",new Jt(St,4)),U};mn.forEach((U,V)=>{let X=t.pitBox(V);t.pointAt(X.s,t.pitCentre(X.s)-e.width/2-.78,u);let rt=u.heading+Math.PI;C.push(S(new Pe(4.8,3.4),u.x,u.h+1.7,-u.y,rt)),P.push(G(S(new Pe(4.8,1),u.x,u.h+4.05,-u.y,rt),U.color)),N.fillStyle=U.id==="solace"||U.id==="tempest"||U.id==="aurelian"?"#111":"#fff",N.fillText(U.short.toUpperCase(),256,V*96+50,480);let st=new Pe(4.4,.8),St=st.attributes.uv;for(let bt=0;bt<St.count;bt++)St.setY(bt,1-(V+1-St.getY(bt))/mn.length);I.push(S(st,u.x,u.h+4.05,-u.y,rt).translate(-Math.sin(rt)*.03,0,-Math.cos(rt)*.03)),t.pointAt(X.s,X.d,u),L.push(G(S(new Pe(6.4,3.4),u.x,u.h+.03,-u.y,u.heading,-Math.PI/2),U.color,.55))});let z=new ki(A);z.colorSpace=$e,this.group.add(new Ct(Le(C),new Ht({map:Nd(),roughness:.6}))),this.group.add(new Ct(zd(P),new me({vertexColors:!0}))),this.group.add(new Ct(Le(I),new me({map:z,transparent:!0})));let H=new Ct(zd(L),new me({vertexColors:!0,transparent:!0,polygonOffset:!0,polygonOffsetFactor:-4,polygonOffsetUnits:-4,depthWrite:!1}));this.group.add(H),this.pitInfo={sA:h,sB:d}}buildStartLine(){let t=this.track,e=t.N,n=0,i=new me({map:this.tex.start,polygonOffset:!0,polygonOffsetFactor:-4,polygonOffsetUnits:-4});this.tex.start.repeat.set(8,1);let r=this.ribbonGeometry(e-1,1,v=>-t.wr[v],v=>t.wl[v],{yOff:.018,vLen:2.4,uRepeat:(t.wl[0]+t.wr[0])/1.2}),a=new Ct(r,i);this.group.add(a);let o=[],l={},c=new me({color:15921906,polygonOffset:!0,polygonOffsetFactor:-3,polygonOffsetUnits:-3}),h=[];for(let v=0;v<20;v++){let w=t.gridSlot(v);for(let[b,M,T,y]of[[0,0,3,.14],[-1.5,2.2,.14,4.4]]){t.pointAt(w.s-M+0,w.d+b,l);let S=new Pe(y>=T?y:T,y>=T?T:y);S.rotateX(-Math.PI/2),S.rotateY(l.heading),S.translate(l.x,l.h+.02,-l.y),h.push(S)}t.pointAt(w.s+.3,w.d,l);let _=new Pe(.14,3);_.rotateX(-Math.PI/2),_.rotateY(l.heading),_.translate(l.x,l.h+.02,-l.y),h.push(_)}this.group.add(new Ct(Le(h),c));let d=t.pointAt(0,0),u=t.wl[0]+t.wr[0]+5,f=new He,m=new Ht({color:3159098,roughness:.5,metalness:.6}),x=new Ct(new ye(1,1,u+2),m);x.position.set(0,7,0),f.add(x);for(let v of[-1,1]){let w=new Ct(new ye(1.2,7.5,1.2),m);w.position.set(0,3.75,v*(u+1)/2),f.add(w)}let g=new Ct(new ye(.6,1.1,8.6),new Ht({color:657932,roughness:.4}));g.position.set(-.7,6.2,0),f.add(g),this.startLights=[];for(let v=0;v<5;v++){let w=new Ct(new Mi(.42,16,12),new me({color:3343621}));w.position.set(-1.05,6.2,(v-2)*1.6),w.scale.x=.5,f.add(w),this.startLights.push(w)}let p=new Ct(new Pe(u*.7,1.4),new me({map:xh(2)}));p.position.set(-.56,7,0),p.rotation.y=-Math.PI/2,f.add(p),f.position.set(d.x,d.h,-d.y),f.rotation.y=d.heading,f.traverse(v=>v.castShadow=!0),this.group.add(f),this.gantry=f}setStartLights(t,e=!1){this.startLights.forEach((n,i)=>{let r=i<t;n.material.color.set(r?16718362:e?657932:3343621)})}buildScenery(){let t=this.track,e=this.theme,n=t.N;this.buildTrees(),this.buildStands(),this.buildBillboards(),e.buildings&&this.buildBuildings()}outsidePoint(t,e,n,i={}){let r=this.track,a=r.idx(t),o=e*(r.wallDist(a,e)+n);return r.pointAt(t,o,i),i}clearOfTrack(t,e,n){let i=this.track,r=i.project(t,e,-1,this._pr||(this._pr={i:0,t:0,s:0,d:0,dist:0})),a=r.d>=0?1:-1;return r.dist>i.wallDist(r.i,a)+n}groundHeight(t,e){let n=this.bounds,i=30,r=Math.ceil((n.maxX-n.minX)/i),a=(t-n.minX)/i,o=(e-n.minY)/i,l=at(Math.floor(a),0,r-1),c=Math.floor(o),h=this.terrain.geometry.attributes.position,d=(x,g)=>h.getY(g*(r+1)+x),u=a-l,f=o-c,m=at(c,0,Math.ceil((n.maxY-n.minY)/i)-1);return le(le(d(l,m),d(l+1,m),u),le(d(l,m+1),d(l+1,m+1),u),f)}buildTrees(){let t=this.theme,e=this.track,n=t.trees?.kind||"broadleaf",i=(t.trees?.density??.4)*(this.quality==="low"?.4:this.quality==="medium"?.7:1);if(i<=.01)return;let r=this.rnd,a,o,l=new ht("#4a3524"),c=(M,T)=>{let y=M.attributes.position.count,S=new Float32Array(y*3);for(let C=0;C<y;C++)S.set([T.r,T.g,T.b],C*3);return M.setAttribute("color",new Jt(S,3)),M};if(n==="pine"){a=c(new hn(.25,.4,5,6).translate(0,2.5,0),l);let M=[];for(let T=0;T<5;T++){let y=3.4-T*.55;M.push(c(new Mr(y,3.4,8).translate(0,4.2+T*2.1,0),new ht().setHSL(.36,.45,.17+T*.012)))}o=Le(M),this.treeScale=[1.1,1.9]}else if(n==="palm"){a=c(new hn(.2,.32,9,6).translate(0,4.5,0),new ht("#8a6c4a"));let M=[];for(let T=0;T<8;T++){let y=new Pe(1.1,5,1,3);y.rotateX(-Math.PI/2+.5),y.translate(0,0,2.4),y.rotateY(T/8*Math.PI*2),y.translate(0,9,0),M.push(c(y,new ht("#2f7a3a")))}o=Le(M),this.treeScale=[.9,1.3]}else{a=c(new hn(.3,.5,4.2,6).translate(0,2.1,0),l);let M=[],T=[[0,6.2,0,3.4],[1.9,5.2,.6,2.5],[-1.7,5.4,-.9,2.6],[.4,7.6,.4,2.4]];for(let[y,S,C,P]of T)M.push(c(new wr(P,1).translate(y,S,C),new ht().setHSL(.27+r()*.04,.45,.24+r()*.05)));o=Le(M),this.treeScale=[.8,1.5]}let h=Math.floor(2200*i*(e.length/5e3)),d={trunk:new Ht({vertexColors:!0,roughness:1}),leaf:new Ht({vertexColors:!0,roughness:.9,flatShading:n!=="palm",side:n==="palm"?We:Gn})},u=new nn(a,d.trunk,h),f=new nn(o,d.leaf,h),m=new Qt,x=new Ne,g=new F,p=new F,v=new ht,w=0,_={},b=0;for(;w<h&&b<h*12;){b++;let M=r()*e.length,T=r()<.5?1:-1,S=r()<.7?6+r()*45:20+Math.pow(r(),1.5)*260;if(this.outsidePoint(M,T,S,_),!this.clearOfTrack(_.x,_.y,7))continue;let C=this.groundHeight(_.x,_.y);if(this.waterLevel!=null&&C<this.waterLevel+.6)continue;g.set(_.x,C-.1,-_.y),x.setFromAxisAngle(new F(0,1,0),r()*6.28);let P=this.treeScale[0]+r()*(this.treeScale[1]-this.treeScale[0]);p.set(P*(.85+r()*.3),P*(.85+r()*.4),P*(.85+r()*.3)),m.compose(g,x,p),u.setMatrixAt(w,m),f.setMatrixAt(w,m),v.setHSL(0,0,.8+r()*.4),f.setColorAt(w,v),w++}u.count=f.count=w,u.castShadow=!1,f.castShadow=!1,this.group.add(u,f)}buildStands(){let t=this.track,n=this.theme.stands??6;if(!n)return;let i=this.tex.crowd.clone();i.needsUpdate=!0;let r=new ye(1,1,1),a=r.attributes.uv;for(let v=0;v<a.count;v++)a.setXY(v,a.getX(v)*4,a.getY(v));let o={},l=[{s:t.length-70,side:1,len:240},{s:200,side:1,len:160}],c=[...t.corners].sort((v,w)=>w.maxK-v.maxK);for(let v of c){if(l.length>=n)break;l.push({s:v.sApex,side:v.sign>0?1:-1,len:90+this.rnd()*60})}for(;l.length<n;)l.push({s:this.rnd()*t.length,side:this.rnd()<.5?1:-1,len:100});let h=[],d=[],u=[],f=.9,m=1.1,x=7,g=4;for(let v of l){let w=Math.floor(v.len/g);for(let _=0;_<w;_++){let b=v.s-v.len/2+_*g+g/2;if(this.outsidePoint(b,v.side,8+x*m*.5,o),!this.clearOfTrack(o.x,o.y,4))continue;let M=Math.max(this.groundHeight(o.x,o.y),t.at(t.z,b)-.1);for(let T=0;T<x;T++)this.outsidePoint(b,v.side,8+(T+.5)*m,o),h.push([o.x,M+T*f+f/2,-o.y,o.heading,g,f,m]);this.outsidePoint(b,v.side,8+x*m/2,o),d.push([o.x,M+.3,-o.y,o.heading,g,.6,m*x]),_%2===0&&u.push([o.x,M+x*f+3.4,-o.y,o.heading,g*2,.25,m*(x+2)])}}let p=(v,w,_)=>{if(!v.length)return;let b=new nn(w,_,v.length),M=new Qt,T=new Ne,y=new F,S=new F;v.forEach((C,P)=>{y.set(C[0],C[1],C[2]),T.setFromAxisAngle(new F(0,1,0),C[3]),S.set(C[4],C[5],C[6]),M.compose(y,T,S),b.setMatrixAt(P,M)}),b.castShadow=!1,b.receiveShadow=!0,this.group.add(b)};p(h,r,new Ht({map:i,roughness:.95})),p(d,new ye(1,1,1),new Ht({color:10132899,roughness:.9})),p(u,new ye(1,1,1),new Ht({color:15264494,roughness:.6,metalness:.2}))}buildBillboards(){let t=this.track,e=Math.floor(t.length/450),n={},i=new Map,r=[];for(let l=0;l<e;l++){let c=(l+.5)*(t.length/e)+this.rnd()*60,h=this.rnd()<.5?1:-1;if(this.outsidePoint(c,h,4.5,n),!this.clearOfTrack(n.x,n.y,3))continue;let d=Math.max(this.groundHeight(n.x,n.y),t.at(t.z,c)),u=n.heading+(h>0?0:Math.PI),f=l%6,m=new Pe(14,3.5);m.translate(0,4.6,0),m.rotateY(u),m.translate(n.x,d,-n.y),i.has(f)||i.set(f,[]),i.get(f).push(m);for(let x of[-5.5,5.5])r.push([n.x+Math.cos(u)*x,d+2.5,-n.y-Math.sin(u)*x])}this.billTex||(this.billTex=[0,1,2,3,4,5].map(l=>xh(l)));for(let[l,c]of i)this.group.add(new Ct(Le(c),new me({map:this.billTex[l],side:We})));let a=new nn(new hn(.12,.12,5,6),new Ht({color:5593696,roughness:.6,metalness:.5}),r.length),o=new Qt;r.forEach((l,c)=>{o.makeTranslation(l[0],l[1],l[2]),a.setMatrixAt(c,o)}),this.group.add(a)}buildBuildings(){let t=this.track,e={},n=[3,5,8,12,15].map((d,u)=>new Ht({map:Fd(d,["#e8dcc6","#d9c7a7","#f1ece0","#c9b8a0","#e3d0cf"][u]),roughness:.85})),i=n.map(()=>[]),r=[],a=new Qt,o=new Ne,l=new F,c=new F,h=0;for(;h<t.length;){for(let d of[1,-1]){if(this.rnd()<.2)continue;let u=4+this.rnd()*18;if(this.outsidePoint(h,d,u+3,e),!this.clearOfTrack(e.x,e.y,u))continue;let f=18+this.rnd()*22,m=16+this.rnd()*14,x=14+this.rnd()*38;this.outsidePoint(h,d,u+3+m/2,e);let g=Math.max(this.groundHeight(e.x,e.y),t.at(t.z,h)-.2),p=new ye(f,x,m),v=p.attributes.uv,w=Math.max(1,Math.round(f/16)),_=Math.max(1,Math.round(x/20));for(let M=0;M<v.count;M++)v.setXY(M,v.getX(M)*w,v.getY(M)*_);o.setFromAxisAngle(new F(0,1,0),e.heading),a.compose(l.set(e.x,g+x/2-.3,-e.y),o,c.set(1,1,1)),p.applyMatrix4(a),i[Math.floor(this.rnd()*n.length)].push(p);let b=new ye(f+1,1.2,m+1);a.compose(l.set(e.x,g+x+.3,-e.y),o,c.set(1,1,1)),b.applyMatrix4(a),r.push(b)}h+=22+this.rnd()*30}i.forEach((d,u)=>{d.length&&this.group.add(new Ct(Le(d),n[u]))}),r.length&&this.group.add(new Ct(Le(r),new Ht({color:9390645,roughness:.9})))}buildBrakeBoards(t){let e=this.track,n=e.N,i=t.v,r={},a=0,o=[];for(;a<n;){let d=a;for(;d+1<a+n&&i[(d+1)%n]<i[d%n]-.02;)d++;if(d-a>8){let u=i[a%n],f=i[d%n];u-f>14&&o.push({start:a%n,end:d%n,drop:u-f})}a=d+1}let l=[200,150,100,50],c=l.map(()=>[]),h=[];for(let d of o){let u=d.end*e.ds;for(let f=0;f<4;f++){let m=u-l[f],x=e.idx(m),g=-Math.min(e.wr[x]+e.kr[x]+1.6,e.wallDist(x,-1)-.5);e.pointAt(m,g,r);let p=new Pe(.9,.9);p.translate(0,1.15,0),p.rotateY(r.heading-Math.PI/2),p.translate(r.x,r.h,-r.y),c[f].push(p),h.push([r.x,r.h+.55,-r.y])}}if(c.forEach((d,u)=>{if(!d.length)return;let f=Od(String(l[u]),"#111","#f4f4f0",128,128);this.group.add(new Ct(Le(d),new me({map:f,side:We})))}),h.length){let d=new nn(new hn(.03,.03,1.1,5),new Ht({color:7829367}),h.length),u=new Qt;h.forEach((f,m)=>{u.makeTranslation(f[0],f[1],f[2]),d.setMatrixAt(m,u)}),this.group.add(d)}this.brakeZones=o}buildMountains(){let t=this.theme,e=this.bounds,n=(e.minX+e.maxX)/2,i=(e.minY+e.maxY)/2,r=(e.maxX-e.minX)/2,a=(e.maxY-e.minY)/2,o=220,l=[],c=[],h=[],d=new ht(t.fog),u=new ht(t.grass[0]).multiplyScalar(.55),f=new ht("#8e939a"),m=160+520*(t.hills??.3),x=[0,700,2200];for(let v=0;v<3;v++)for(let w=0;w<=o;w++){let _=w/o*Math.PI*2,b=Math.cos(_),M=Math.sin(_),y=Math.min(r/Math.max(Math.abs(b),1e-6),a/Math.max(Math.abs(M),1e-6))+x[v]-40,S=jr(b*2.2+5,M*2.2+5,5),C=v===0?-9:v===1?m*(.12+S*.8):m*(.25+S*1.5);l.push(n+b*y,C,-(i+M*y));let P=at(C/m,0,1),I=new ht().copy(u).lerp(f,P*.9).lerp(d,.25+.2*v);c.push(I.r,I.g,I.b)}for(let v=0;v<2;v++)for(let w=0;w<o;w++){let _=v*(o+1)+w,b=_+1,M=_+o+1,T=M+1;h.push(_,M,b,b,M,T)}let g=new oe;g.setAttribute("position",new Kt(l,3)),g.setAttribute("color",new Kt(c,3)),g.setIndex(h),g.computeVertexNormals();let p=new Ct(g,new Ht({vertexColors:!0,roughness:1,side:We,flatShading:!0}));this.group.add(p)}update(t,e){this.sky.material.uniforms.time.value=e,this.water&&(this.water.position.y=this.waterLevel+Math.sin(e*.5)*.05)}};var zs=.36;function Qx(s,t){let e=Math.cos(s),n=Math.sin(s);return[Math.sign(e)*Math.pow(Math.abs(e),2/t),Math.sign(n)*Math.pow(Math.abs(n),2/t)]}function wl(s,t=18,e=3.4){let n=[],i=[],r=s.length;for(let o of s){let l=(o.yt-o.yb)/2,c=(o.yt+o.yb)/2,h=o.cz||0;for(let d=0;d<t;d++){let[u,f]=Qx(d/t*Math.PI*2,o.n||e);n.push(o.x,c+f*l,h+u*o.w)}}for(let o=0;o<r-1;o++)for(let l=0;l<t;l++){let c=o*t+l,h=o*t+(l+1)%t,d=(o+1)*t+l,u=(o+1)*t+(l+1)%t;i.push(c,d,h,h,d,u)}for(let[o,l]of[[0,!1],[r-1,!0]]){let c=s[o],h=n.length/3;n.push(c.x,(c.yb+c.yt)/2,c.cz||0);for(let d=0;d<t;d++){let u=o*t+d,f=o*t+(d+1)%t;l?i.push(h,u,f):i.push(h,f,u)}}let a=new oe;return a.setAttribute("position",new Kt(n,3)),a.setIndex(i),a.computeVertexNormals(),ty(a)}function ty(s){s.computeBoundingBox();let t=new F;s.boundingBox.getCenter(t);let e=s.attributes.position,n=s.index,i=new F,r=new F,a=new F,o=new F,l=new F,c=0;for(let h=0;h<n.count;h+=3)i.fromBufferAttribute(e,n.getX(h)),r.fromBufferAttribute(e,n.getX(h+1)),a.fromBufferAttribute(e,n.getX(h+2)),o.subVectors(r,i).cross(l.subVectors(a,i)),l.copy(i).add(r).add(a).multiplyScalar(1/3).sub(t),c+=Math.sign(o.dot(l));if(c<0){let h=n.array;for(let d=0;d<h.length;d+=3){let u=h[d+1];h[d+1]=h[d+2],h[d+2]=u}s.computeVertexNormals()}return s}function Hs(s){for(let t of s)t.deleteAttribute("uv");return Le(s)}function Ye(s,t,e,n,i,r){let a=new ye(t-s,n-e,r-i);return a.translate((s+t)/2,(e+n)/2,(i+r)/2),a}function Gs(s,t,e,n,i,r){let a=new ye(e,i,n*2);return a.rotateZ(r),a.translate(s,t,0),a}function Ii(s,t){let e=s.attributes.position,n=new Float32Array(e.count*3),i=new ht;for(let r=0;r<e.count;r++)t(i,e.getX(r),e.getY(r),e.getZ(r)),n[r*3]=i.r,n[r*3+1]=i.g,n[r*3+2]=i.b;return s.setAttribute("color",new Jt(n,3)),s}var Hd=s=>t=>t.set(s);function El(s,t){let e=new ht(s.color),n=new ht(s.accent),i=new ht("#14161a");return(r,a,o,l)=>{r.copy(e);let c=Math.abs(l);switch(s.livery){case"stripe":c<.075&&o>.3&&r.copy(n);break;case"split":t==="side"&&o<.3&&r.copy(n),t==="nose"&&a>2.35&&r.copy(n),t==="cover"&&c<.05&&r.copy(n);break;case"chevron":{let h=(a*1.7+c*2.4)%1;(t==="side"||t==="mono")&&h>.88&&r.copy(n),t==="nose"&&a>2.75&&r.copy(n);break}}t==="nose"&&a>2.88&&r.copy(i)}}function ey(s){let t=new ht(s);return t.r*.299+t.g*.587+t.b*.114>.6?"#111":"#fff"}var $n={};function ny(){return $n.ready||($n.carbon=new Ht({color:1382171,roughness:.42,metalness:.45}),$n.tyre=new Ht({color:1381653,roughness:.92,metalness:0}),$n.rim=new Ht({color:2829876,roughness:.35,metalness:.85}),$n.metal=new Ht({color:5593698,roughness:.4,metalness:.8}),$n.helmetVisor=new Ht({color:723728,roughness:.1,metalness:.6}),$n.tyreGeoF=null,$n.ready=!0),$n}var Vs=class{constructor(t,e,n={}){let i=ny();this.team=t,this.info=e,this.group=new He,this.model=new He,this.group.add(this.model),this.ghost=!!n.ghost;let r=n.detail!=="low";this.lodFar=!1;let a=[],o=[],l=wl([{x:3,w:.03,yb:.16,yt:.2},{x:2.9,w:.09,yb:.15,yt:.25},{x:2.3,w:.13,yb:.14,yt:.33},{x:1.7,w:.2,yb:.13,yt:.43},{x:1.25,w:.27,yb:.12,yt:.52}],16);a.push(Ii(l,El(t,"nose")));let c=wl([{x:1.25,w:.27,yb:.12,yt:.52},{x:.7,w:.33,yb:.1,yt:.58},{x:.15,w:.35,yb:.09,yt:.62},{x:-.35,w:.33,yb:.09,yt:.6}],18);a.push(Ii(c,El(t,"mono")));let h=wl([{x:-.3,w:.28,yb:.2,yt:.78},{x:-.7,w:.26,yb:.2,yt:.95},{x:-1.2,w:.2,yb:.2,yt:.78},{x:-1.8,w:.12,yb:.2,yt:.52},{x:-2.25,w:.07,yb:.2,yt:.4}],16);a.push(Ii(h,El(t,"cover")));for(let H of[-1,1]){let U=wl([{x:.95,w:.2,yb:.12,yt:.46,cz:H*.5},{x:.5,w:.27,yb:.1,yt:.52,cz:H*.52},{x:-.3,w:.26,yb:.1,yt:.5,cz:H*.5},{x:-1,w:.18,yb:.1,yt:.4,cz:H*.4},{x:-1.75,w:.08,yb:.12,yt:.3,cz:H*.26}],14);a.push(Ii(U,El(t,"side"))),o.push(Ye(.9,1,.2,.42,H*.5-.17,H*.5+.17))}o.push(Ye(-.32,-.2,.7,.9,-.1,.1));let d=new ye(1.3,.34,.03);d.translate(-1.5,.62,0),a.push(Ii(d,Hd(t.color))),o.push(Ye(-1.95,1.7,.05,.1,-.8,.8)),o.push(Ye(-2.35,-1.8,.1,.26,-.5,.5));let u=Ye(1.6,2.1,.06,.1,-.7,.7);o.push(u),o.push(Ye(-.05,.55,.6,.66,-.26,.26)),a.push(Ii(Ye(-.55,-.25,.6,.78,-.24,.24),Hd("#1d1f24")));let f=[],m=(H,U=.025)=>new Er(new ws(H.map(V=>new F(...V))),12,U,6,!1);f.push(m([[.7,.58,0],[.55,.75,0],[.3,.9,0]],.03)),f.push(m([[.3,.9,0],[.05,.9,.18],[-.3,.74,.3]],.026)),f.push(m([[.3,.9,0],[.05,.9,-.18],[-.3,.74,-.3]],.026)),o.push(...f);for(let H of[-1,1])o.push(Ye(.75,.9,.62,.72,H*.58,H*.76)),o.push(Ye(.78,.8,.55,.62,H*.4,H*.42));let x=new Ht({vertexColors:!0,roughness:.4,metalness:.4}),g=new ht(t.accent),p=new ht("#15171b"),v=(H,U)=>Ii(H,V=>V.copy(U)),w=H=>{let U=[Gs(2.92,.095,.42,.97,.025,.04),Gs(2.72,.14,.3,.92,.02,.12),Gs(2.55,.19,.24,.84,.02,.2)].map(V=>(V.scale(1,1,.5),V.translate(0,0,H*.47*.97),v(V,p)));return U.push(v(Ye(2.52,3.1,.07,.3,H*.96,H*1),g)),new Ct(Hs(U),x)};this.frontWing=new He,this.frontWingL=w(-1),this.frontWingR=w(1),this.frontWing.add(this.frontWingL,this.frontWingR),o.push(Ye(2.35,2.55,.13,.22,-.05,.05),Ye(2.55,2.7,.1,.2,-.18,-.12),Ye(2.55,2.7,.1,.2,.12,.18)),this.rearWing=new He;let _=[v(Gs(-2.3,.78,.4,.53,.025,-.12),p),v(Gs(-2.38,.5,.3,.5,.02,.08),p)];for(let H of[-1,1])_.push(v(Ye(-2.58,-2,.42,.98,H*.53,H*.56),g));this.rearWing.add(new Ct(Hs(_),x)),this.drsPivot=new He,this.drsPivot.position.set(-2.48,.9,0),this.drsPivot.add(new Ct(v(Gs(.22,0,.34,.51,.022,-.08),p),x)),this.rearWing.add(this.drsPivot),o.push(Ye(-2.2,-2.1,.5,.82,-.05,.05),Ye(-2.45,-2.38,.46,.5,-.4,.4));let b=1.962,M=-1.638;for(let[H,U,V]of[[b,1,.8],[b,-1,.8],[M,1,.775],[M,-1,.775]])o.push(Ye(H+.12,H+.22,.24,.27,Math.min(U*.25,U*V),Math.max(U*.25,U*V))),o.push(Ye(H-.22,H-.12,.2,.23,Math.min(U*.25,U*V),Math.max(U*.25,U*V)));let T=new Tr({vertexColors:!0,roughness:.28,metalness:.35,clearcoat:1,clearcoatRoughness:.08});this.bodyMat=T,this.model.add(new Ct(Hs(a),T),new Ct(Hs(o),i.carbon),this.frontWing,this.rearWing);let y=new ht().setHSL(e.number*53%360/360,.8,.5),S=new Mi(.15,12,9);S.scale(1.15,1,.95),S.translate(.18,.66,0),this.helmet=new Ct(Ii(S,H=>H.copy(y)),new Ht({vertexColors:!0,roughness:.25,metalness:.2})),this.model.add(this.helmet);let C=Bd(e.number,ey(t.color)),P=new me({map:C,transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2}),I=[];for(let H of[-1,1]){let U=new Pe(.26,.26);H<0&&U.rotateY(Math.PI),U.translate(-.6,.62,H*.285),I.push(U)}let L=new Pe(.3,.3);L.rotateX(-Math.PI/2),L.rotateY(-Math.PI/2),L.translate(1.7,.455,0),I.push(L),this.decals=new Ct(Le(I),P),this.model.add(this.decals),this.brakeLight=new Ct(new ye(.06,.18,.1),new me({color:4194304})),this.brakeLight.position.set(-2.4,.33,0),this.model.add(this.brakeLight),this.wheels=[];let A=new me({color:In.medium.color});this.compoundMat=A;let N=r?28:14,G=new Ht({vertexColors:!0,roughness:.75,metalness:.25}),z=(H,U)=>{let V=H?.34:.44,X=[],rt=new hn(zs,zs,V,N,1);rt.rotateX(Math.PI/2),X.push(v(rt,new ht("#141414")));let st=new hn(.235,.235,V*.92,14);st.rotateX(Math.PI/2),X.push(v(st,new ht("#3a3e46")));let St=[];for(let j of[-1,1]){let lt=new Hi(.295,.335,N),_t=new zi(.2,12);j<0&&(lt.rotateY(Math.PI),_t.rotateY(Math.PI)),lt.translate(0,0,j*(V/2+.002)),_t.translate(0,0,j*(V/2+.004)),St.push(lt),X.push(v(_t,new ht("#1a1c21")))}let bt=new He,At=new He;At.add(new Ct(Hs(X),G));let q=Hs(St);return At.add(new Ct(q,A)),bt.add(At),this.model.add(bt),{assembly:bt,spin:At,front:H,left:U}};this.wheelDefs=[z(!0,!0),z(!0,!1),z(!1,!0),z(!1,!1)],this.wheelFront=[this.wheelDefs[0],this.wheelDefs[1]],this.spinAngle=[0,0,0,0],this.detailMeshes=[this.helmet,this.decals,this.brakeLight],this.group.traverse(H=>{H.isMesh&&(H.castShadow=!this.ghost,H.receiveShadow=!1)}),this.ghost&&this.makeGhost(),this.layoutWheels(1.962,1.638,1.6,1.55,3.6,0),this.pitchSmooth=0,this.rollSmooth=0}makeGhost(){this.group.traverse(t=>{t.isMesh&&(t.material=t.material.clone(),t.material.transparent=!0,t.material.opacity=.35,t.material.depthWrite=!1)})}setCompound(t){this.compoundMat.color.set(t.color)}update(t,e,n,i){let r=t.spec,a=le(t.px,t.x,e),o=le(t.py,t.y,e),l=t.theta-t.ptheta;l>Math.PI&&(l-=2*Math.PI),l<-Math.PI&&(l+=2*Math.PI);let c=t.ptheta+l*e,h=Math.atan(t.trackSlope*Math.cos(t.theta-t.trackHeading));this.group.position.set(a,t.trackH,-o),this.group.rotation.set(0,c,0),this.pitchSmooth=le(this.pitchSmooth,-t.pitch*3.2+h,at(n*14,0,1)),this.rollSmooth=le(this.rollSmooth,-t.roll*1.6,at(n*14,0,1)),this.model.rotation.order="YZX",this.model.rotation.set(this.rollSmooth,0,this.pitchSmooth),this.layoutWheels(t.a,t.b,r.trackF,r.trackR,r.wheelbase,t.steer);for(let m=0;m<4;m++)this.spinAngle[m]-=t.omega[m]*n%(Math.PI*2),this.wheelDefs[m].spin.rotation.z=this.spinAngle[m];this.drsPivot.rotation.z=t.drsPos*.55;let d=t.brake>.08;this.brakeLight.material.color.setHex(d?16715792:4194304);let u=t.damageFront||0,f=t.damageRear||0;this.frontWingR.visible=u<.8,this.frontWingL.rotation.z=-u*.25,this.frontWingL.position.y=-u*.04,this.rearWing.visible=f<.9,this.rearWing.rotation.z=f*.12}setLod(t){if(t!==this.lodFar){this.lodFar=t;for(let e of this.detailMeshes)e.visible=!t}}layoutWheels(t,e,n,i,r,a){let o=this.wheelDefs,l=[[t,zs,-n/2],[t,zs,n/2],[-e,zs,-i/2],[-e,zs,i/2]],c=Math.tan(a),h=Math.atan2(r*c,r-n/2*c),d=Math.atan2(r*c,r+n/2*c);for(let u=0;u<4;u++)o[u].assembly.position.set(l[u][0],l[u][1],l[u][2]),o[u].assembly.rotation.y=u===0?h:u===1?d:0}setPose(t,e,n,i,r=0,a=0){this.group.position.set(t,i,-e),this.group.rotation.set(0,n,0),this.layoutWheels(1.962,1.638,1.6,1.55,3.6,r);for(let o=0;o<4;o++)this.wheelDefs[o].spin.rotation.z=a}dispose(){this.group.traverse(t=>{t.isMesh&&t.geometry.dispose()})}};var iy=`
attribute float size; attribute float alpha; attribute vec3 tint;
varying float vA; varying vec3 vTint;
uniform float scale;
void main() {
  vA = alpha; vTint = tint;
  vec4 mv = modelViewMatrix * vec4(position, 1.0);
  gl_PointSize = size * scale / max(0.1, -mv.z);
  gl_Position = projectionMatrix * mv;
}`,sy=`
uniform sampler2D map; varying float vA; varying vec3 vTint;
void main() {
  vec4 t = texture2D(map, gl_PointCoord);
  gl_FragColor = vec4(vTint, t.a * vA);
  if (gl_FragColor.a < 0.01) discard;
}`,Qr=class{constructor(t,{additive:e=!1,gravity:n=0,drag:i=.5}={}){this.max=t,this.pos=new Float32Array(t*3),this.vel=new Float32Array(t*3),this.size=new Float32Array(t),this.alpha=new Float32Array(t),this.tint=new Float32Array(t*3),this.life=new Float32Array(t),this.maxLife=new Float32Array(t).fill(1),this.grow=new Float32Array(t),this.a0=new Float32Array(t),this.head=0,this.gravity=n,this.drag=i;let r=new oe;this.attrPos=new Jt(this.pos,3),this.attrSize=new Jt(this.size,1),this.attrAlpha=new Jt(this.alpha,1),this.attrTint=new Jt(this.tint,3);for(let o of[this.attrPos,this.attrSize,this.attrAlpha,this.attrTint])o.setUsage(Wr);r.setAttribute("position",this.attrPos),r.setAttribute("size",this.attrSize),r.setAttribute("alpha",this.attrAlpha),r.setAttribute("tint",this.attrTint);let a=new Ve({vertexShader:iy,fragmentShader:sy,transparent:!0,depthWrite:!1,blending:e?Dr:Ei,uniforms:{map:{value:Ud()},scale:{value:600}}});this.points=new yr(r,a),this.points.frustumCulled=!1,this.points.renderOrder=5,this.alpha.fill(0)}emit(t,e,n,i,r,a,o,l,c,h,d,u,f){let m=this.head;this.head=(this.head+1)%this.max,this.pos[m*3]=t,this.pos[m*3+1]=e,this.pos[m*3+2]=n,this.vel[m*3]=i,this.vel[m*3+1]=r,this.vel[m*3+2]=a,this.size[m]=o,this.grow[m]=l,this.a0[m]=c,this.alpha[m]=c,this.life[m]=h,this.maxLife[m]=h,this.tint[m*3]=d,this.tint[m*3+1]=u,this.tint[m*3+2]=f}update(t,e){this.points.material.uniforms.scale.value=e;let n=Math.exp(-this.drag*t);for(let i=0;i<this.max;i++){if(this.life[i]<=0){this.alpha[i]=0;continue}this.life[i]-=t;let r=this.life[i]/this.maxLife[i];this.vel[i*3]*=n,this.vel[i*3+1]=this.vel[i*3+1]*n+this.gravity*t,this.vel[i*3+2]*=n,this.pos[i*3]+=this.vel[i*3]*t,this.pos[i*3+1]+=this.vel[i*3+1]*t,this.pos[i*3+2]+=this.vel[i*3+2]*t,this.size[i]+=this.grow[i]*t,this.alpha[i]=this.a0[i]*Math.max(0,r)*Math.min(1,(1-r)*8)}this.attrPos.needsUpdate=!0,this.attrSize.needsUpdate=!0,this.attrAlpha.needsUpdate=!0,this.attrTint.needsUpdate=!0}},yh=class{constructor(t=9e3){this.max=t,this.pos=new Float32Array(t*4*3),this.col=new Float32Array(t*4);let e=new Uint32Array(t*6);for(let r=0;r<t;r++)e.set([r*4,r*4+1,r*4+2,r*4+1,r*4+3,r*4+2],r*6);let n=new oe;this.attrPos=new Jt(this.pos,3).setUsage(Wr),this.attrCol=new Jt(this.col,1).setUsage(Wr),n.setAttribute("position",this.attrPos),n.setAttribute("a",this.attrCol),n.setIndex(new Jt(e,1));let i=new Ve({transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-6,polygonOffsetUnits:-6,vertexShader:"attribute float a; varying float vA; void main(){ vA = a; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }",fragmentShader:"varying float vA; void main(){ gl_FragColor = vec4(0.02,0.02,0.025, vA); }"});this.mesh=new Ct(n,i),this.mesh.frustumCulled=!1,this.mesh.renderOrder=3,this.head=0,this.last=new Map}add(t,e,n,i,r,a,o,l){let c=this.last.get(t),h=[e,n,i,r,a];if(c&&l>0){let d=e-c[0],u=i-c[2];if(d*d+u*u>.04&&d*d+u*u<25){let f=this.head;this.head=(this.head+1)%this.max;let m=this.pos,x=f*12,g=o/2;m[x]=c[0]+c[3]*g,m[x+1]=c[1]+.02,m[x+2]=c[2]+c[4]*g,m[x+3]=c[0]-c[3]*g,m[x+4]=c[1]+.02,m[x+5]=c[2]-c[4]*g,m[x+6]=e+r*g,m[x+7]=n+.02,m[x+8]=i+a*g,m[x+9]=e-r*g,m[x+10]=n+.02,m[x+11]=i-a*g,this.col.fill(l,f*4,f*4+4),this.dirty=!0}}this.last.set(t,l>0?h:null),l<=0&&this.last.delete(t)}flush(){this.dirty&&(this.attrPos.needsUpdate=!0,this.attrCol.needsUpdate=!0,this.dirty=!1)}},Tl=class{constructor(t){this.smoke=new Qr(700,{drag:.9,gravity:.6}),this.dust=new Qr(500,{drag:.8,gravity:-3}),this.sparks=new Qr(500,{additive:!0,gravity:-14,drag:.4}),this.skid=new yh,t.add(this.smoke.points,this.dust.points,this.sparks.points,this.skid.mesh),this.rnd=qe(99),this.acc=new Map}car(t,e,n,i,r=!0){let a=this.rnd,o=t.spec,l=Math.cos(t.theta),c=Math.sin(t.theta),h=t.info?t.info.code:"x";for(let d=0;d<4;d++){let u=t.wheelPos[d],f=t.x+u[0]*l-u[1]*c,m=t.y+u[0]*c+u[1]*l,x=t.surf[d],g=[f,t.trackH,-m],p=t.slipVis[d],v=x===Ut.ASPHALT||x===Ut.PIT||x===Ut.KERB||x===Ut.RUNOFF;if(r&&v&&p>.35){let w=-c,_=-l;this.skid.add(h+d,g[0],g[1],g[2],-c,-l,.32,at(.25+p*.45,0,.8))}else r&&this.skid.add(h+d,0,0,0,0,0,0,0);if(v&&p>.18&&t.speed>5){let w=(this.acc.get(h+d)||0)+n*(30+p*70),_=Math.floor(w);for(this.acc.set(h+d,w-_);_-- >0&&r;){let b=.82+a()*.12;this.smoke.emit(g[0]+(a()-.5)*.3,g[1]+.12,g[2]+(a()-.5)*.3,(a()-.5)*1.2,.8+a()*1.2,(a()-.5)*1.2,1.1+a()*.8,3.4,.35*Math.min(1,p),.9+a()*.8,b,b,b)}}if((x===Ut.GRASS||x===Ut.GRAVEL)&&t.speed>8&&r){let w=(this.acc.get(h+"d"+d)||0)+n*(12+t.speed*.8),_=Math.floor(w);this.acc.set(h+"d"+d,w-_);let b=x===Ut.GRAVEL?[.78,.7,.55]:[.38,.5,.25];for(;_-- >0;)this.dust.emit(g[0],g[1]+.15,g[2],-t.u*l*.2+(a()-.5)*3,1.5+a()*3.5,t.u*c*.2+(a()-.5)*3,.7+a()*.8,2.2,.55,.7+a()*.7,b[0],b[1],b[2])}}t.kerbShake>.5&&t.speed>55&&a()<.5&&r&&this.spark(t.x,t.trackH+.08,-t.y,3,6,t,-t.u*.1)}spark(t,e,n,i,r,a,o=0){let l=this.rnd,c=a?Math.cos(a.theta):1,h=a?Math.sin(a.theta):0;for(let d=0;d<4;d++){let u=i+l()*(r-i),f=(l()-.5)*1.6;this.sparks.emit(t-c*1.4,e,n+h*1.4,-c*(u+10)*.6+Math.cos(f)*u*.3,1+l()*3,h*(u+10)*.6+Math.sin(f)*u,.28+l()*.2,-.4,1,.25+l()*.45,1,.75+l()*.2,.35)}}burst(t,e,n,i=40,r=12){let a=this.rnd;for(let o=0;o<i;o++){let l=a()*6.28,c=1+a()*r*.5,h=a()*r;this.sparks.emit(t,e+.3,n,Math.cos(l)*h,c,Math.sin(l)*h,.3+a()*.25,-.3,1,.3+a()*.7,1,.6+a()*.3,.2)}for(let o=0;o<10;o++)this.smoke.emit(t,e+.4,n,(a()-.5)*4,1+a()*2,(a()-.5)*4,1.5,4,.4,1.5,.6,.6,.6)}update(t,e){this.smoke.update(t,e),this.dust.update(t,e),this.sparks.update(t,e),this.skid.flush()}};var _h=["chase","close","cockpit","tcam","heli","tv"],Cl={chase:"Chase",close:"Low chase",cockpit:"Cockpit",tcam:"T-cam",heli:"Helicopter",tv:"TV broadcast"},Gd=new F(0,1,0),Al=new Ne,ry=new Ne().setFromAxisAngle(Gd,-Math.PI/2),ay=new F,ta=new F,vh=new F,Rl=class{constructor(t){this.camera=t,this.mode="chase",this.yaw=0,this.pos=new F,this.look=new F,this.shake=0,this.lookBack=!1,this.tvIndex=-1,this.tvPoints=null,this.fov=62,this.time=0,this.init=!1,this.impact=0}next(){return this.setMode(_h[(_h.indexOf(this.mode)+1)%_h.length]),this.mode}setMode(t){this.mode=t,this.init=!1}buildTv(t){let e=[],n=Math.max(6,Math.round(t.length/320)),i={};for(let r=0;r<n;r++){let a=r/n*t.length,o=r%2?1:-1,l=t.idx(a),c=t.def.runoff&&t.def.runoff.mode==="street";t.pointAt(a,o*(t.wallDist(l,o)+(c?2.2:5+r%3*3)),i),e.push(new F(i.x,i.h+(c?6+r%3*1.5:4.5+r%3*2),-i.y))}this.tvPoints=e}update(t,e,n,i){this.time+=t;let r=this.camera,a=e.group,o=n.speed,l=a.rotation.y,c=ay.set(Math.cos(l),0,-Math.sin(l)),h=a.position,d=at(Math.atan2(n.v,Math.max(Math.abs(n.u),8)),-.5,.5),u=62+at(o*.1,0,14);if(e.helmet.visible=this.mode!=="cockpit"&&this.mode!=="tcam",this.mode==="chase"||this.mode==="close"||this.mode==="heli"){let m=l-d*.35+(this.lookBack?Math.PI:0);this.init||(this.yaw=m),this.yaw+=li(m-this.yaw)*(1-Math.exp(-t*(this.mode==="heli"?3:7)));let x=this.mode==="close"?5.2+o*.012:this.mode==="heli"?18:7.4+o*.022,g=this.mode==="close"?1.35:this.mode==="heli"?42:2.1+o*.004,p=ta.set(Math.cos(this.yaw),0,-Math.sin(this.yaw)),v=vh.copy(h).addScaledVector(p,-x).setY(h.y+g);this.init||this.pos.copy(v);let w=1-Math.exp(-t*(this.mode==="heli"?4:14));this.pos.lerp(v,w),r.position.copy(this.pos);let _=vh.copy(h).addScaledVector(p,this.mode==="heli"?4:5).setY(h.y+(this.mode==="close"?.9:1.1));r.lookAt(_),this.mode==="heli"&&(u=52)}else if(this.mode==="cockpit"||this.mode==="tcam"){let m=this.mode==="cockpit"?ta.set(.12,1,0):ta.set(-.25,1.38,0);e.model.updateWorldMatrix(!0,!1),e.model.localToWorld(m),r.position.copy(m),e.model.getWorldQuaternion(Al),Al.multiply(ry),this.lookBack&&Al.multiply(new Ne().setFromAxisAngle(Gd,Math.PI)),r.quaternion.copy(Al),u=this.mode==="cockpit"?76+at(o*.05,0,8):74}else if(this.mode==="tv"){this.tvPoints||this.buildTv(i);let m=this.tvIndex,x=1/0;if(m>=0){let v=this.tvPoints[m].distanceTo(h),w=ta.copy(this.tvPoints[m]).sub(h).dot(c);(v>280||w<-25&&v>40)&&(m=-1)}m<0&&(this.tvPoints.forEach((v,w)=>{let _=v.distanceTo(h);ta.copy(v).sub(h).dot(c)>15&&_<x&&_>30&&(x=_,m=w)}),m<0&&(m=0)),this.tvIndex=m,r.position.copy(this.tvPoints[m]);let g=vh.copy(h).addScaledVector(c,o*.05).setY(h.y+.8);r.lookAt(g);let p=this.tvPoints[m].distanceTo(h);u=at(2*Math.atan(10/Math.max(p,15))*(180/Math.PI),8,55)}this.init=!0;let f=n.kerbShake*.03+at(o/100,0,1)*.004+this.impact*.25;if(this.impact*=Math.exp(-t*6),f>.001&&this.mode!=="tv"){let m=this.time*53;r.position.x+=Math.sin(m*1.3)*f,r.position.y+=Math.sin(m*1.9+1)*f,r.position.z+=Math.cos(m*1.1)*f}this.fov=le(this.fov,u,1-Math.exp(-t*4)),Math.abs(r.fov-this.fov)>.01&&(r.fov=this.fov,r.updateProjectionMatrix())}};var oy={throttle:["KeyW","ArrowUp"],brake:["KeyS","ArrowDown"],left:["KeyA","ArrowLeft"],right:["KeyD","ArrowRight"],drs:["Space"],boost:["ShiftLeft","ShiftRight"],gearUp:["KeyE"],gearDown:["KeyQ"],pit:["KeyB"],tyre:["KeyT"],camera:["KeyC"],lookBack:["KeyV"],reset:["KeyR"],pause:["Escape","KeyP"],map:["KeyM"],mute:["KeyN"],auto:["KeyG"]},ly=(s,t)=>Math.abs(s)<t?0:(s-Math.sign(s)*t)/(1-t),Pl=class{constructor(){this.down=new Set,this.pressed=new Set,this.throttle=0,this.brake=0,this.steer=0,this.keys=oy,this.touch={left:!1,right:!1,throttle:!1,brake:!1},this.touchMode=!1,this.padActive=!1,this.padPrev=[],window.addEventListener("keydown",t=>{t.repeat||(["Space","ArrowUp","ArrowDown","ArrowLeft","ArrowRight","Tab"].includes(t.code)&&t.preventDefault(),this.down.add(t.code),this.pressed.add(t.code))}),window.addEventListener("keyup",t=>this.down.delete(t.code)),window.addEventListener("blur",()=>this.down.clear())}isDown(t){return this.keys[t].some(e=>this.down.has(e))}wasPressed(t){return this.keys[t].some(e=>this.pressed.has(e))}pad(){let t=navigator.getGamepads?navigator.getGamepads():[];for(let e of t)if(e&&e.connected&&e.axes.length>=2)return e;return null}poll(t,e){let n={throttle:0,brake:0,steer:0,boost:!1,gearUp:!1,gearDown:!1,drsPress:!1,pitToggle:!1,tyreCycle:!1,camera:!1,reset:!1,pause:!1,lookBack:!1,map:!1,mute:!1,autoToggle:!1},i=this.isDown("throttle")||this.touch.throttle,r=this.isDown("brake")||this.touch.brake,a=this.isDown("left")||this.touch.left,o=this.isDown("right")||this.touch.right;this.throttle+=at((i?1:0)-this.throttle,-t*12,t*5.5),this.brake+=at((r?1:0)-this.brake,-t*14,t*5),r&&this.brake<.28&&(this.brake=.28);let l=(a?1:0)-(o?1:0),c=at(e/85,0,1),h=4.6-2.6*c,d=7.5-2*c,u=l!==0&&Math.sign(l)===Math.sign(this.steer||l)?h:d;this.steer+=at(l-this.steer,-t*u,t*u),n.throttle=this.throttle,n.brake=this.brake,n.steer=this.steer,n.boost=this.isDown("boost"),n.lookBack=this.isDown("lookBack"),n.gearUp=this.wasPressed("gearUp"),n.gearDown=this.wasPressed("gearDown"),n.drsPress=this.wasPressed("drs"),n.pitToggle=this.wasPressed("pit"),n.tyreCycle=this.wasPressed("tyre"),n.camera=this.wasPressed("camera"),n.reset=this.wasPressed("reset"),n.pause=this.wasPressed("pause"),n.map=this.wasPressed("map"),n.mute=this.wasPressed("mute"),n.autoToggle=this.wasPressed("auto");let f=this.pad();if(f){let m=ly(f.axes[0]||0,.07),x=f.buttons[7]?f.buttons[7].value:0,g=f.buttons[6]?f.buttons[6].value:0,p=M=>!!(f.buttons[M]&&f.buttons[M].pressed),v=M=>p(M)&&!this.padPrev[M],w=Math.abs(m)>.05||x>.05||g>.05||p(0)||p(1)||p(2)||p(3),_=performance.now();w&&(this.padLast=_),(i||r||a||o)&&(this.padLast=-1e9),this.padActive=_-(this.padLast??-1e9)<2500,this.padActive&&(n.steer=-Math.sign(m)*Math.pow(Math.abs(m),1.35),n.throttle=Math.max(n.throttle*0,x),n.brake=g,n.boost=n.boost||p(2)||p(5)&&!1,n.gearUp=n.gearUp||v(5),n.gearDown=n.gearDown||v(4),n.drsPress=n.drsPress||v(0),n.pitToggle=n.pitToggle||v(1),n.camera=n.camera||v(3),n.tyreCycle=n.tyreCycle||v(15),n.reset=n.reset||v(8),n.pause=n.pause||v(9),n.lookBack=n.lookBack||p(10),n.boost=n.boost||p(2)),this.padPrev=f.buttons.map(M=>M.pressed)}return this.pressed.clear(),n}};var Il=class{constructor(){this.ctx=null,this.enabled=!0,this.volume=.7,this.voices=[],this.started=!1,this.lastGear=1}start(){if(this.started)return;let t=window.AudioContext||window.webkitAudioContext;if(!t)return;this.ctx=new t;let e=this.ctx;this.master=e.createGain(),this.master.gain.value=this.enabled?this.volume:0;let n=e.createDynamicsCompressor();n.threshold.value=-14,n.ratio.value=6,this.master.connect(n),n.connect(e.destination);let i=e.sampleRate*2,r=e.createBuffer(1,i,e.sampleRate),a=r.getChannelData(0),o=0,l=0,c=0;for(let C=0;C<i;C++){let P=Math.random()*2-1;o=.99765*o+P*.099046,l=.963*l+P*.2965164,c=.57*c+P*1.0526913,a[C]=(o+l+c+P*.1848)*.2}this.noiseBuf=r;let h=(C=!0)=>{let P=e.createBufferSource();return P.buffer=r,P.loop=C,P};this.makeNoise=h;let d=e.createGain();d.gain.value=0;let u=e.createWaveShaper(),f=new Float32Array(1024);for(let C=0;C<1024;C++){let P=C/512-1;f[C]=Math.tanh(P*2.6)*.9}u.curve=f,this.engFilter=e.createBiquadFilter(),this.engFilter.type="lowpass",this.engFilter.Q.value=2.5;let m=e.createBiquadFilter();m.type="peaking",m.frequency.value=1800,m.gain.value=5,this.oscs=[{o:e.createOscillator(),g:e.createGain(),mult:3,w:"sawtooth",a:.5},{o:e.createOscillator(),g:e.createGain(),mult:1.5,w:"square",a:.22},{o:e.createOscillator(),g:e.createGain(),mult:6,w:"sawtooth",a:.22},{o:e.createOscillator(),g:e.createGain(),mult:9,w:"triangle",a:.16},{o:e.createOscillator(),g:e.createGain(),mult:3.02,w:"sawtooth",a:.3}];for(let C of this.oscs)C.o.type=C.w,C.g.gain.value=C.a,C.o.connect(C.g),C.g.connect(u),C.o.start();u.connect(this.engFilter),this.engFilter.connect(m),m.connect(d);let x=h(),g=e.createBiquadFilter();g.type="bandpass",g.frequency.value=3e3,g.Q.value=.8,this.nzGain=e.createGain(),this.nzGain.gain.value=0,x.connect(g),g.connect(this.nzGain),this.nzGain.connect(d),x.start(),this.nzf=g,d.connect(this.master),this.eng=d;let p=h(),v=e.createBiquadFilter();v.type="lowpass",v.frequency.value=900,this.windGain=e.createGain(),this.windGain.gain.value=0,p.connect(v),v.connect(this.windGain),this.windGain.connect(this.master),p.start(),this.windFilter=v;let w=h(),_=e.createBiquadFilter();_.type="bandpass",_.frequency.value=1500,_.Q.value=6,this.tyreGain=e.createGain(),this.tyreGain.gain.value=0,w.connect(_),_.connect(this.tyreGain),this.tyreGain.connect(this.master),w.start(),this.tyreFilter=_;let b=h(),M=e.createBiquadFilter();M.type="lowpass",M.frequency.value=180,this.rumbleGain=e.createGain(),this.rumbleGain.gain.value=0,b.connect(M),M.connect(this.rumbleGain),this.rumbleGain.connect(this.master),b.start(),this.rumbleFilter=M;let T=h(),y=e.createBiquadFilter();y.type="bandpass",y.frequency.value=700,y.Q.value=.4;let S=e.createGain();S.gain.value=.05,T.connect(y),y.connect(S),S.connect(this.master),T.start(),this.voices=[];for(let C=0;C<6;C++){let P=e.createOscillator(),I=e.createOscillator();P.type="sawtooth",I.type="square";let L=e.createGain();L.gain.value=0;let A=e.createBiquadFilter();A.type="lowpass",A.frequency.value=1500;let N=e.createStereoPanner();P.connect(A),I.connect(A),A.connect(L),L.connect(N),N.connect(this.master),P.start(),I.start(),this.voices.push({o1:P,o2:I,g:L,f:A,pan:N,car:null})}this.started=!0}resume(){this.ctx&&this.ctx.state==="suspended"&&this.ctx.resume()}setEnabled(t){this.enabled=t,this.master&&this.master.gain.setTargetAtTime(t?this.volume:0,this.ctx.currentTime,.05)}setVolume(t){this.volume=t,this.master&&this.enabled&&this.master.gain.setTargetAtTime(t,this.ctx.currentTime,.05)}update(t,e,n,i,r){if(!this.started)return;let a=this.ctx.currentTime,o=(w,_,b=.03)=>w.setTargetAtTime(_,a,b);if(r){o(this.eng.gain,0,.1),o(this.windGain.gain,0,.1),o(this.tyreGain.gain,0,.1),o(this.rumbleGain.gain,0,.1);for(let w of this.voices)o(w.g.gain,0,.1);return}let l=t.rpm,c=l/60,h=t.throttle,d=.25+.75*h;for(let w of this.oscs)o(w.o.frequency,c*w.mult,.02);o(this.engFilter.frequency,500+l*.45+h*1400,.05),o(this.eng.gain,(.16+.34*d)*(.5+l/3e4),.05),o(this.nzGain.gain,.04+h*.1*(l/15e3),.05),o(this.nzf.frequency,2e3+l*.25,.05);let u=t.speed;o(this.windGain.gain,at((u/95)**2*.5,0,.55),.1),o(this.windFilter.frequency,300+u*9,.1);let f=0;for(let w=0;w<4;w++)f=Math.max(f,t.slipVis[w]);o(this.tyreGain.gain,at(f*.35,0,.32),.04),o(this.tyreFilter.frequency,1e3+500*at(u/60,0,1)+f*400,.06);let m=t.kerbShake*.35+(t.onGrass?at(u/60,0,1)*.3:0);o(this.rumbleGain.gain,m,.04),o(this.rumbleFilter.frequency,90+u*2.5,.1),t.gear!==this.lastGear&&(this.lastGear=t.gear,this.blip(120,.07,.08,"square"));let x=n.pos,g=n.right,p=n.vel,v=e.map(w=>{let _=w.wx-x.x,b=w.wz-x.z;return{c:w,d2:_*_+b*b,dx:_,dz:b}}).sort((w,_)=>w.d2-_.d2).slice(0,this.voices.length);this.voices.forEach((w,_)=>{let b=v[_];if(!b||b.d2>62500){o(w.g.gain,0,.1);return}let M=b.c.car,T=Math.sqrt(b.d2)+1,y=(M.u*(b.dx*Math.cos(M.theta)-b.dz*Math.sin(M.theta)*0)+0)*0,S=b.c.vx-p.x,C=b.c.vz-p.z,P=(S*b.dx+C*b.dz)/T,I=1/(1+at(P,-90,90)/340),L=M.rpm/60*3*I;o(w.o1.frequency,L,.04),o(w.o2.frequency,L*.5,.04),o(w.f.frequency,400+M.rpm*.3,.06);let A=1/(1+(T/18)**1.6);o(w.g.gain,.2*A*(.4+.6*M.throttle),.05),o(w.pan.pan,at((b.dx*g.x+b.dz*g.z)/T,-1,1),.05)})}blip(t,e=.1,n=.1,i="sine",r=0){if(!this.started)return;let a=this.ctx,o=a.currentTime,l=a.createOscillator(),c=a.createGain();l.type=i,l.frequency.setValueAtTime(t,o),r&&l.frequency.exponentialRampToValueAtTime(Math.max(20,t+r),o+e),c.gain.setValueAtTime(n,o),c.gain.exponentialRampToValueAtTime(8e-4,o+e),l.connect(c),c.connect(this.master),l.start(o),l.stop(o+e+.02)}thud(t=1){if(!this.started)return;let e=this.ctx,n=e.currentTime,i=this.makeNoise(!1),r=e.createBiquadFilter();r.type="lowpass",r.frequency.value=500+900*t;let a=e.createGain();a.gain.setValueAtTime(at(.35+t*.5,0,1),n),a.gain.exponentialRampToValueAtTime(.001,n+.35+.3*t),i.connect(r),r.connect(a),a.connect(this.master),i.start(n,Math.random()),i.stop(n+.8),this.blip(90,.25,.3*t,"sine",-50)}light(t){this.blip(t>=5?880:660,.18,.12,"sine")}go(){this.blip(1320,.45,.14,"sine")}ui(t="click"){t==="click"?this.blip(720,.05,.05,"triangle"):t==="good"?(this.blip(660,.1,.07,"triangle"),setTimeout(()=>this.blip(990,.14,.07,"triangle"),90)):t==="bad"?this.blip(180,.25,.1,"sawtooth",-60):t==="radio"&&this.blip(2200,.06,.05,"square")}};var Yt=(s,t=document)=>t.querySelector(s),Mh=15,Ll=class{constructor(t){this.root=t,this.units="kmh",this.msgs=[],this.lastTower=0,this.lastMini=0,t.innerHTML=`
      <div id="tower" class="hud-box"><div class="hd"><span>Race</span><span id="tw-lap"></span></div><div id="tw-rows"></div></div>
      <div id="topbar" class="hud-box"><div class="lap" id="tb-lap"></div><div class="clock" id="tb-clock"></div></div>
      <div id="timing" class="hud-box">
        <div><span class="cur" id="t-cur">0:00.000</span><span class="delta" id="t-delta"></span></div>
        <div class="lines"><span>Last</span><span id="t-last">--:--.---</span><span>Best</span><span id="t-best">--:--.---</span><span>Fastest</span><span id="t-fast">--:--.---</span></div>
        <div class="sectors" id="t-sec"><i></i><i></i><i></i></div>
      </div>
      <div id="minimap" class="hud-box"><canvas width="380" height="260"></canvas></div>
      <div id="lights" class="hud-box hidden"><i></i><i></i><i></i><i></i><i></i></div>
      <div id="msgs"></div>
      <div id="radio" class="hud-box hidden"><b>Radio</b><span id="radio-t"></span></div>
      <div id="pit" class="hud-box hidden"></div>
      <div id="dash" class="hud-box">
        <div class="revs" id="revs">${"<i></i>".repeat(Mh)}</div>
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
      <div class="touch" id="touch"><button class="l" data-k="left">\u25C0</button><button class="r" data-k="right">\u25B6</button><button class="b" data-k="brake">BRK</button><button class="g" data-k="throttle">GAS</button></div>
    `,this.el={twRows:Yt("#tw-rows"),twLap:Yt("#tw-lap"),tbLap:Yt("#tb-lap"),tbClock:Yt("#tb-clock"),cur:Yt("#t-cur"),delta:Yt("#t-delta"),last:Yt("#t-last"),best:Yt("#t-best"),fast:Yt("#t-fast"),sec:Yt("#t-sec"),mini:Yt("#minimap canvas"),lights:Yt("#lights"),msgs:Yt("#msgs"),radio:Yt("#radio"),radioT:Yt("#radio-t"),pit:Yt("#pit"),revs:Yt("#revs"),soc:Yt("#d-soc"),socb:Yt("#d-socb"),drs:Yt("#d-drs"),boost:Yt("#d-boost"),gap:Yt("#d-gap"),gear:Yt("#d-gear"),spd:Yt("#d-spd"),unit:Yt("#d-unit"),thr:Yt("#p-thr"),brk:Yt("#p-brk"),rpm:Yt("#d-rpm"),tyreBoxes:[...t.querySelectorAll("#tyres .tyre")],tyB:Yt("#ty-b"),tyN:Yt("#ty-n"),tyW:Yt("#ty-w"),tyT:Yt("#ty-t"),tyF:Yt("#ty-f"),tyD:Yt("#ty-d"),g:Yt("#gmeter canvas"),flag:Yt("#flag"),tower:Yt("#tower"),minimap:Yt("#minimap"),touch:Yt("#touch")},this.rev=[...this.el.revs.children],this.rev.forEach((e,n)=>e.classList.add(n<5?"g":n<10?"r":"b")),this.rows=[];for(let e=0;e<13;e++){let n=document.createElement("div");n.className="r",n.innerHTML='<span class="p"></span><span class="c"></span><span class="n"></span><span class="nm"></span><span class="g"></span>',this.el.twRows.appendChild(n),this.rows.push(n)}this.lightEls=[...this.el.lights.children],this.mapBase=null}setUnits(t){this.units=t,this.el.unit.textContent=t==="mph"?"MPH":"KM/H"}setTrack(t){this.track=t;let e=document.createElement("canvas");e.width=380,e.height=260;let n=e.getContext("2d"),i=1/0,r=-1/0,a=1/0,o=-1/0;for(let p=0;p<t.N;p++)i=Math.min(i,t.x[p]),r=Math.max(r,t.x[p]),a=Math.min(a,t.y[p]),o=Math.max(o,t.y[p]);let l=22,c=Math.min((e.width-2*l)/(r-i),(e.height-2*l)/(o-a)),h=(e.width-(r-i)*c)/2,d=(e.height-(o-a)*c)/2;this.map={sc:c,ox:h,oy:d,minX:i,minY:a,h:e.height};let u=p=>h+(p-i)*c,f=p=>e.height-(d+(p-a)*c);n.lineJoin="round",n.lineCap="round";let m=()=>{n.beginPath();for(let p=0;p<=t.N;p+=2){let v=p%t.N;p===0?n.moveTo(u(t.x[v]),f(t.y[v])):n.lineTo(u(t.x[v]),f(t.y[v]))}n.closePath()};n.strokeStyle="rgba(0,0,0,0.8)",n.lineWidth=9,m(),n.stroke(),n.strokeStyle="#8c95a3",n.lineWidth=5,m(),n.stroke();let x=u(t.x[0]),g=f(t.y[0]);n.fillStyle="#fff",n.fillRect(x-5,g-2,10,4),n.strokeStyle="#31d17a",n.lineWidth=3;for(let p of t.drs){n.beginPath();let v=!0,w=Math.floor(p.start/t.ds),_=Math.floor((p.end-p.start+t.length)%t.length/t.ds);for(let b=0;b<=_;b+=2){let M=(w+b)%t.N;v?n.moveTo(u(t.x[M]),f(t.y[M])):n.lineTo(u(t.x[M]),f(t.y[M])),v=!1}n.stroke()}this.mapBase=e,this.mapPx=u,this.mapPy=f}show(t){this.root.classList.toggle("hidden",!t)}message(t,e="",n="",i=3.2){let r=document.createElement("div");for(r.className="msg "+e,r.innerHTML=t+(n?`<small>${n}</small>`:""),this.el.msgs.prepend(r);this.el.msgs.children.length>4;)this.el.msgs.lastChild.remove();setTimeout(()=>r.remove(),i*1e3)}radio(t,e=5){this.el.radio.classList.remove("hidden"),this.el.radioT.textContent=t,clearTimeout(this._radioT),this._radioT=setTimeout(()=>this.el.radio.classList.add("hidden"),e*1e3)}flag(t,e,n=2,i=""){let r=this.el.flag;r.textContent=t,r.style.color=e,r.className="show "+i,clearTimeout(this._flagT),this._flagT=setTimeout(()=>r.className="",n*1e3)}setLights(t,e=!1){this.el.lights.classList.toggle("hidden",t===0&&!e),this.lightEls.forEach((n,i)=>n.classList.toggle("on",i<t)),e&&setTimeout(()=>this.el.lights.classList.add("hidden"),700)}update(t,e,n,i){let r=this.el,a=e.rs,o=this.units==="mph",l=e.speed*(o?2.23694:3.6);r.spd.textContent=Math.round(l);let c=e.gear<0?"R":e.speed<.5&&e.throttle<.05&&e.gear===1?"N":e.gear;r.gear.textContent=c;let h=9500,u=at((e.rpm-h)/(14400-h),0,1),f=Math.round(u*Mh),m=e.rpm>14700;r.revs.classList.toggle("flash",m&&Math.floor(i/70)%2===0);for(let S=0;S<Mh;S++)this.rev[S].classList.toggle("on",S<f);if(r.soc.textContent=Math.round(e.soc*100)+"%",r.socb.style.width=e.soc*100+"%",r.thr.style.height=e.throttle*100+"%",r.brk.style.height=e.brake*100+"%",r.rpm.textContent=Math.round(e.rpm/100)*100+" rpm",r.drs.className="pill"+(e.drsPos>.5?" on":e.drsAllowed?" avail":""),r.boost.className="pill boost"+(n.boost&&e.soc>.01?" on":""),t.phase==="racing"||t.phase==="finished"){let S=Math.max(0,t.time-a.lapStart);r.cur.textContent=a.finished?Ie(a.last):Ie(S)}else r.cur.textContent="0:00.000";r.last.textContent=Ie(a.last),r.best.textContent=Ie(a.best),r.fast.textContent=t.fastest.car?`${t.fastest.car.info.code} ${Ie(t.fastest.time)}`:"--:--.---",a.delta!=null&&a.lapCpBest?(r.delta.textContent=(a.delta>=0?"+":"-")+Math.abs(a.delta).toFixed(2),r.delta.className="delta "+(a.delta<0?"neg":"pos")):r.delta.textContent="";let x=r.sec.children;for(let S=0;S<3;S++){let C=a.sectorFlag&&a.sectorFlag.idx===S?a.sectorFlag.kind:"",P=a.sectors[S]!=null&&(S<a.sectorIdx||S===2&&a.sectorIdx===0&&!1),I="";a.sectors[S]!=null&&(I=a.sectors[S]<=t.bestSectors[S]+1e-6?"purple":a.sectors[S]<=a.bestSectors[S]+1e-6?"green":"yellow"),x[S].className=(S<a.sectorIdx||a.sectorIdx===0&&S===2&&a.sectors[2]!=null&&a.laps>0?I:"")+(S===a.sectorIdx?" cur":"")}let g=t.totalLaps,p=Math.min(g,Math.max(1,a.laps+1-(a.finished?1:0)+(a.maxDist<0,0)));r.tbLap.innerHTML=t.opt.mode==="timetrial"?`<small>Lap</small>${Math.max(1,a.laps+1)}`:`<small>Lap</small>${a.finished?g:p}/${g}`;let v=t.t0!=null?t.time-t.t0:0;r.tbClock.textContent=t.phase==="grid"||t.phase==="countdown"?t.opt.mode==="timetrial"?"Time trial":"Formation":Ie(Math.max(0,v),1),t.opt.mode==="timetrial"&&(r.tbClock.textContent=a.laps<2?a.laps===0?"Out lap":"Push lap":"Flying lap");let w=e.ahead,_=e.behind;r.gap.innerHTML=t.opt.mode==="timetrial"?"":`${w?`\u25B2 ${w.info.code} <b>+${(e.gapAhead??0).toFixed(1)}</b>`:"Leading"}<br>${_?`\u25BC ${_.info.code} <b>-${(_.gapAhead??0).toFixed(1)}</b>`:""}`;let b=e.tyreSummary(),M=e.compound;r.tyB.textContent=M.letter,r.tyB.style.background=M.color,r.tyN.textContent=M.name,r.tyW.textContent=`Wear ${Math.round(b.wear*100)}%`,r.tyT.textContent=`Temp ${Math.round(b.temp)}\xB0C`,r.tyF.textContent=`Fuel ${e.fuel.toFixed(1)} kg`;let T=Math.max(e.damageFront||0,e.damageRear||0,e.damageFloor||0);r.tyD.textContent=T>.05?`Damage ${Math.round(T*100)}%`:"";for(let S=0;S<4;S++){let C=r.tyreBoxes[S],P=e.temp[S],I=M.tOpt,L=P-I,A=L<-M.tRange*.5?205:L>M.tRange*.5?0:130-Math.max(0,Math.abs(L)/(M.tRange*.5))*40*Math.sign(L||1)*-1*0+0;C.style.background=`hsl(${L<-M.tRange*.5?205:L>M.tRange*.5?2:128}, 70%, 42%)`,C.firstElementChild.style.height=at(e.wear[S],0,1)*100+"%"}let y=r.pit;if(a.service)y.classList.remove("hidden"),y.classList.add("service"),y.innerHTML=`<div class="big">${Math.max(0,a.service.dur-a.service.t).toFixed(1)}</div>Pit stop in progress`;else if(a.pitRequested&&t.track.pit){y.classList.remove("hidden","service");let S=a.nextCompound||"(auto)";y.innerHTML=`<div class="big">Box, box</div>Entering pits this lap \xB7 next tyre <b>${S.toUpperCase()}</b> <span class="hint">[T] to change \xB7 [B] cancel</span>`}else y.classList.add("hidden");i-this.lastTower>120&&(this.lastTower=i,this.updateTower(t,e),this.drawG(e)),i-this.lastMini>50&&(this.lastMini=i,this.drawMap(t,e))}updateTower(t,e){let n=t.sorted;if(t.opt.mode==="timetrial"){this.el.tower.classList.add("hidden");return}this.el.tower.classList.remove("hidden");let i=n.length,r=e.rs.pos-1,a=[];if(i<=13)a=n.map((o,l)=>l);else{let o=new Set([0,1,2,3,4]);for(let l=r-3;l<=r+3;l++)l>=0&&l<i&&o.add(l);a=[...o].sort((l,c)=>l-c).slice(0,13)}this.el.twLap.textContent=`${i} cars`,this.rows.forEach((o,l)=>{if(l>=a.length){o.style.display="none";return}o.style.display="";let c=n[a[l]],h=c.rs;o.classList.toggle("me",c===e),o.style.setProperty("--c",c.info.team.color),o.children[0].textContent=a[l]+1,o.children[2].textContent=c.info.code;let d="";a[l]===0?d=h.finished?"FIN":t.phase==="racing"?`L${Math.min(t.totalLaps,h.laps+1)}`:"":t.phase!=="racing"&&t.phase!=="finished"?d="":h.lapsDown>0?d=`+${h.lapsDown}L`:d=`+${(c.gapAhead??0).toFixed(1)}`,(h.inPitLane||h.service)&&(d='<span class="pit">PIT</span>'),o.children[4].innerHTML=`${d}<span class="t" style="background:${c.compound.color}">${c.compound.letter}</span>`,o.children[3].textContent=""})}drawG(t){let e=this.el.g.getContext("2d"),n=200;e.clearRect(0,0,n,n),e.fillStyle="rgba(13,16,21,0.8)",e.beginPath(),e.arc(100,100,98,0,6.283),e.fill(),e.strokeStyle="rgba(255,255,255,0.18)",e.lineWidth=2;for(let a of[32,65,96])e.beginPath(),e.arc(100,100,a,0,6.283),e.stroke();e.beginPath(),e.moveTo(100,6),e.lineTo(100,194),e.moveTo(6,100),e.lineTo(194,100),e.stroke();let i=at(-t.latG/5,-1,1)*96,r=at(-t.longG/5,-1,1)*96;e.fillStyle="#ff2a2a",e.beginPath(),e.arc(100+i,100+r,9,0,6.283),e.fill(),e.fillStyle="#fff",e.font="700 22px sans-serif",e.textAlign="center",e.fillText(Math.hypot(t.latG,t.longG).toFixed(1)+"g",100,190)}drawMap(t,e){if(!this.mapBase)return;let n=this.el.mini,i=n.getContext("2d");i.clearRect(0,0,n.width,n.height),i.drawImage(this.mapBase,0,0);let r=this.mapPx,a=this.mapPy;for(let o of t.cars)o!==e&&(i.fillStyle=o.info.team.color,i.beginPath(),i.arc(r(o.x),a(o.y),4.2,0,6.283),i.fill(),i.strokeStyle="#000",i.lineWidth=1,i.stroke());t.ghostPos&&(i.fillStyle="rgba(255,255,255,0.5)",i.beginPath(),i.arc(r(t.ghostPos.x),a(t.ghostPos.y),4.5,0,6.283),i.fill()),i.fillStyle="#fff",i.strokeStyle="#ff2a2a",i.lineWidth=3,i.beginPath(),i.arc(r(e.x),a(e.y),6.5,0,6.283),i.fill(),i.stroke()}};var qd="apex-grand-prix.v1",Vd={quality:"high",volume:.7,units:"kmh",minimap:!0,shake:!0,camera:"chase",tower:!0},bh={mode:"race",trackId:"northfield",laps:5,level:.55,fieldSize:20,playerGrid:12,team:1,compound:"medium",tyreWear:3,damage:!0,collisions:!0,mandatoryStop:!1,adaptive:!1,frontWing:null,rearWing:null,brakeBias:.58,assists:{abs:!0,tc:2,steer:!0,stability:1,autoGear:!0,pitAuto:!0}},Wd={Beginner:{abs:!0,tc:3,steer:!0,stability:3,autoGear:!0,pitAuto:!0},Intermediate:{abs:!0,tc:2,steer:!0,stability:1,autoGear:!0,pitAuto:!0},Pro:{abs:!0,tc:1,steer:!1,stability:0,autoGear:!0,pitAuto:!0},Simulator:{abs:!1,tc:0,steer:!1,stability:0,autoGear:!1,pitAuto:!1}},Xd=["Off","Low","Medium","High"];function Yd(){try{let s=JSON.parse(localStorage.getItem(qd)||"{}");return{settings:{...Vd,...s.settings||{}},config:{...bh,...s.config||{},assists:{...bh.assists,...(s.config||{}).assists||{}}},records:s.records||{},ghosts:s.ghosts||{},season:s.season||null}}catch{return{settings:{...Vd},config:{...bh},records:{},ghosts:{},season:null}}}function Zn(s){try{localStorage.setItem(qd,JSON.stringify(s))}catch{}}var be=s=>String(s).replace(/[&<>"]/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[t]);function cy(s){let t=1/0,e=-1/0,n=1/0,i=-1/0;for(let u=0;u<s.N;u++)t=Math.min(t,s.x[u]),e=Math.max(e,s.x[u]),n=Math.min(n,s.y[u]),i=Math.max(i,s.y[u]);let r=e-t,a=i-n,o=.06*Math.max(r,a),l=[];for(let u=0;u<s.N;u+=6)l.push(`${(s.x[u]-t+o).toFixed(0)},${(i-s.y[u]+o).toFixed(0)}`);let c=s.x[0]-t+o,h=i-s.y[0]+o,d=Math.max(r,a)*.028;return`<svg viewBox="0 0 ${(r+2*o).toFixed(0)} ${(a+2*o).toFixed(0)}" preserveAspectRatio="xMidYMid meet"><polygon points="${l.join(" ")}" fill="none" stroke="#000" stroke-opacity=".6" stroke-width="${d*1.7}" stroke-linejoin="round"/><polygon points="${l.join(" ")}" fill="none" stroke="#c9d1db" stroke-width="${d}" stroke-linejoin="round"/><circle cx="${c}" cy="${h}" r="${d*1.4}" fill="#ff2a2a"/></svg>`}var Dl=class{constructor(t,e,n){this.root=t,this.save=e,this.hooks=n,this.current=null,this.tab="circuit",this.config={...e.config,assists:{...e.config.assists}},t.addEventListener("click",i=>this.onClick(i)),t.addEventListener("input",i=>this.onInput(i))}persist(){this.save.config=this.config,Zn(this.save)}clear(){this.root.innerHTML="",this.current=null}show(t,e){this.current=t,this.lastData=e;let n=this["screen_"+t];this.root.innerHTML=n.call(this,e),this.afterRender(t)}afterRender(t){t==="setup"&&this.hooks.previewTeam&&this.hooks.previewTeam(this.config.team);let e=this.root.querySelector(".btn.primary, .btn");e&&t==="main"&&e.focus({preventScroll:!0})}screen_loading(t="Building circuit"){return`<section class="screen loading"><div class="logo">Apex <span>GP</span></div><div class="bar"><i></i></div><div class="hint">${be(t)}\u2026</div></section>`}screen_main(){let t=this.save.season;return`<section class="screen dim">
      <div class="menu-col">
        <div class="logo">Apex<br><span>Grand Prix</span></div>
        <div class="tagline">20-CAR GRID \xB7 REAL TYRE, AERO &amp; HYBRID POWERTRAIN PHYSICS \xB7 ADJUSTABLE AI</div>
        <button class="btn primary" data-act="quick">Quick race<small>Jump straight in with your last settings</small></button>
        <button class="btn" data-act="setup" data-mode="race">Custom race<small>Circuit, laps, difficulty, team, setup, assists</small></button>
        <button class="btn" data-act="setup" data-mode="timetrial">Time trial<small>Chase your ghost, alone on the circuit</small></button>
        <button class="btn" data-act="season">Championship<small>${t?`Round ${Math.min(t.round+1,rn.length)} of ${rn.length} in progress`:"4 rounds, points, a title to win"}</small></button>
        <div class="row"><button class="btn sm grow" data-act="controls">Controls</button><button class="btn sm grow" data-act="settings">Settings</button></div>
      </div>
      <div class="version">v1.0 \xB7 WASD / arrows to drive \xB7 works with gamepads</div>
    </section>`}chips(t,e,n,i=""){return`<div class="chips">${e.map(r=>`<button class="chip ${r.dot?"dot":""} ${String(r.value)===String(n)?"on":""}" ${r.dot?`style="--c:${r.dot}"`:""} data-chip="${t}" data-value="${be(r.value)}" ${i}>${be(r.label)}</button>`).join("")}</div>`}toggle(t,e,n,i){return`<div class="toggle" data-toggle="${t}"><div>${be(e)}${n?`<div class="hint">${be(n)}</div>`:""}</div><div class="switch ${i?"on":""}"></div></div>`}slider(t,e,n,i,r,a,o){return`<div class="field"><label>${be(e)}<b>${o}</b></label><input type="range" data-slider="${t}" min="${i}" max="${r}" step="${a}" value="${n}"></div>`}screen_setup(t={}){let n=this.config.mode,i=n==="timetrial"?"Time <span>trial</span>":t.season?"Champion<span>ship</span>":"Race <span>setup</span>",r=[["circuit","Circuit"],["race","Session"],["car","Team & car"],["assists","Assists"]],a=this["tab_"+this.tab](t);return`<section class="screen panel-screen full">
      <div class="row"><h2>${i}</h2><div class="grow"></div></div>
      <div class="tabs">${r.map(([o,l])=>`<button class="tab ${this.tab===o?"active":""}" data-tab="${o}">${l}</button>`).join("")}</div>
      <div>${a}</div>
      <div class="footer"><button class="btn sm" data-act="main">\u25C0 Back</button><div class="hint">${this.summary()}</div><button class="btn primary" data-act="go">${t.season?"Start round":n==="timetrial"?"Start session":"Go racing"}</button></div>
    </section>`}summary(){let t=this.config,e=rn.find(r=>r.id===t.trackId),n=mn[t.team],i=Kr.reduce((r,a)=>Math.abs(a.level-t.level)<Math.abs(r.level-t.level)?a:r);return t.mode==="timetrial"?`${be(e.name)} \xB7 ${be(n.short)}`:`${be(e.name)} \xB7 ${t.laps} laps \xB7 ${be(i.name)} \xB7 ${be(n.short)}`}tab_circuit(t){let e=this.config,n=t&&t.season;return`<div class="tracks">${rn.map(i=>{let r=this.hooks.tracks[i.id],a=this.save.records[i.id];return`<button class="tcard ${e.trackId===i.id?"on":""}" data-track="${i.id}" ${n?"disabled":""}>${r?cy(r):""}<h4>${be(i.name)}</h4><div class="meta"><span>${be(i.country)}</span><span>${r?(r.length/1e3).toFixed(2)+" km":""} \xB7 ${r?r.corners.length:""} turns</span></div><p>${be(i.blurb)}</p><div class="meta"><span>Best lap</span><b>${a?Ie(a.best):"\u2014"}</b></div></button>`}).join("")}</div>`}tab_race(){let t=this.config,e=this.hooks.tracks[t.trackId],n=e?Math.round(t.laps*e.length/1e3*.5):0,i=Kr.reduce((a,o)=>Math.abs(o.level-t.level)<Math.abs(a.level-t.level)?o:a),r=t.mode==="timetrial";return`<div class="grid2">
      ${r?"":`<div class="panel"><h3>Race</h3>
        ${this.slider("laps","Laps",t.laps,1,30,1,`${t.laps} \xB7 about ${Math.max(1,n)} min`)}
        <div class="field"><label>AI difficulty<b>${Math.round(t.level*100)}%</b></label>${this.chips("diff",Kr.map(a=>({value:a.level,label:a.name})),i.level)}
        <input type="range" data-slider="level" min="0" max="100" step="1" value="${Math.round(t.level*100)}"><div class="hint">${be(i.blurb)} \u2014 drag for any value in between. Rookie leaves you room to learn; Legend runs every car at the physical limit.</div></div>
        ${this.slider("fieldSize","Cars on the grid",t.fieldSize,2,20,1,t.fieldSize)}
        ${this.slider("playerGrid","Your starting position",Math.min(t.playerGrid,t.fieldSize),1,t.fieldSize,1,"P"+Math.min(t.playerGrid,t.fieldSize))}
      </div>`}
      <div class="panel"><h3>Tyres &amp; rules</h3>
        <div class="field"><label>Starting compound</label>${this.chips("compound",Zr.map(a=>({value:a,label:In[a].name,dot:In[a].color})),t.compound)}</div>
        <div class="field"><label>Tyre wear</label>${this.chips("tyreWear",[{value:0,label:"Off"},{value:1.5,label:"Low"},{value:3,label:"Normal"},{value:6,label:"High"}],t.tyreWear)}<div class="hint">Normal makes the Soft last about 5 laps and the Hard about 12. High forces a stop in a short race.</div></div>
        ${this.toggle("damage","Damage","Wings, floor and tyre punctures from contact",t.damage)}
        ${r?"":this.toggle("collisions","Car-to-car collisions","Off lets cars pass through each other",t.collisions)}
        ${r?"":this.toggle("mandatoryStop","Mandatory pit stop","Use two compounds or take +15 s",t.mandatoryStop)}
        ${r?"":this.toggle("adaptive","Adaptive AI pace","Cars far ahead ease off, cars far behind push (\xB13-5%)",t.adaptive)}
      </div></div>`}tab_car(){let t=this.config,e=rn.find(a=>a.id===t.trackId),n=e.setup||{front:5,rear:5},i=t.frontWing??n.front,r=t.rearWing??n.rear;return`<div class="panel"><h3>Team</h3><div class="teams">${mn.map((a,o)=>`<button class="team ${t.team===o?"on":""}" data-team="${o}" style="--c:${a.color};--c2:${a.accent}"><i></i><div><b>${be(a.name)}</b><div class="hint">Car performance</div><div class="bar"><span style="width:${Math.round(55+a.rating*45)}%"></span></div></div></button>`).join("")}</div></div>
    <div class="grid2" style="margin-top:1rem">
      <div class="panel"><h3>Aero setup \u2014 ${be(e.name)}</h3>
        ${this.slider("frontWing","Front wing",i,0,10,1,`${i}  (recommended ${n.front})`)}
        ${this.slider("rearWing","Rear wing",r,0,10,1,`${r}  (recommended ${n.rear})`)}
        <div class="hint">More wing = more downforce and cornering grip, but more drag and a lower top speed. Low wing suits long straights; high wing suits tight, twisty circuits. Setups affect handling balance: more rear wing for stability, more front wing for turn-in.</div>
        <button class="btn sm" data-act="resetsetup" style="margin-top:.6rem">Use recommended</button></div>
      <div class="panel"><h3>Brakes</h3>
        ${this.slider("brakeBias","Brake bias (front)",Math.round(t.brakeBias*100),50,68,1,Math.round(t.brakeBias*100)+"%")}
        <div class="hint">Higher front bias is stable but can lock the front tyres; lower bias turns in better and risks locking the rears. ABS covers most of it if enabled.</div></div></div>`}tab_assists(){let t=this.config.assists;return`<div class="grid2"><div class="panel"><h3>Driver aids</h3>
      <div class="field"><label>Presets</label><div class="chips">${Object.keys(Wd).map(e=>`<button class="chip" data-preset="${e}">${e}</button>`).join("")}</div></div>
      ${this.toggle("a.abs","ABS","Prevents brake lock-ups",t.abs)}
      ${this.toggle("a.steer","Steering assist","Limits steering lock so the front tyres don't scrub away",t.steer)}
      ${this.toggle("a.autoGear","Automatic gearbox","Manual: Q / E or paddles",t.autoGear)}
      ${this.toggle("a.pitAuto","Pit lane autopilot","The car drives itself through the pits once you commit",t.pitAuto)}
    </div><div class="panel"><h3>Stability</h3>
      <div class="field"><label>Traction control</label>${this.chips("tc",Xd.map((e,n)=>({value:n,label:e})),t.tc)}</div>
      <div class="field"><label>Stability control (counter-steer help)</label>${this.chips("stability",Xd.map((e,n)=>({value:n,label:e})),t.stability)}</div>
      <div class="hint">Keyboard drivers should keep stability and traction on while learning. Gamepad and wheel users can turn them off for a more raw car.</div>
    </div></div>`}screen_controls(){let t=(...i)=>i.map(r=>`<kbd>${r}</kbd>`).join(""),e=[["Throttle",t("W","\u2191")],["Brake / reverse",t("S","\u2193")],["Steer",t("A","D","\u2190","\u2192")],["DRS (in a zone, when eligible)",t("Space")],["ERS boost (hold)",t("Shift")],["Gear up / down (manual)",t("E","Q")],["Pit request toggle",t("B")],["Change pit tyre",t("T")],["Camera",t("C")],["Look back",t("V")],["Reset to track",t("R")],["Pause",t("Esc","P")],["Minimap size",t("M")],["Mute",t("N")]],n=[["Steer","Left stick"],["Throttle / brake","RT / LT"],["DRS","A"],["Boost","X"],["Pit request","B"],["Camera","Y"],["Gears","LB / RB"],["Look back","L3"],["Pause","Start"],["Reset","Back"]];return`<section class="screen panel-screen full"><h2>Con<span>trols</span></h2>
      <div class="grid2"><div class="panel"><h3>Keyboard</h3><div class="keys">${e.map(([i,r])=>`<div class="key"><span>${i}</span><span>${r}</span></div>`).join("")}</div></div>
      <div class="panel"><h3>Gamepad</h3><div class="keys">${n.map(([i,r])=>`<div class="key"><span>${i}</span><span><kbd>${r}</kbd></span></div>`).join("")}</div>
      <h3 style="margin-top:1.2rem">Racecraft</h3><div class="hint">\u2022 Brake in a straight line, then trail off the pedal as you turn in.<br>\u2022 Hit the apex kerb, then use all the track on exit \u2014 but not past the white line, or you get a track-limits warning.<br>\u2022 DRS opens the rear wing for ~10-15 km/h when you are within one second of the car ahead at the detection line.<br>\u2022 ERS boost spends the battery: harvest it by braking hard and lifting.<br>\u2022 Follow closely and you lose front downforce (dirty air) but gain a slipstream on the straights.<br>\u2022 Tyres have a temperature window: scrubbing them sliding overheats them, and worn tyres lose grip fast.<br>\u2022 Press <kbd>B</kbd> to call a pit stop \u2014 new tyres, repairs, and a limiter in the lane.</div></div></div>
      <div class="footer"><button class="btn sm" data-act="back">\u25C0 Back</button></div></section>`}screen_settings(t={}){let e=this.save.settings;return`<section class="screen panel-screen full"><h2>Set<span>tings</span></h2>
      <div class="grid2"><div class="panel"><h3>Graphics</h3>
        <div class="field"><label>Quality</label>${this.chips("quality",[{value:"low",label:"Low"},{value:"medium",label:"Medium"},{value:"high",label:"High"}],e.quality)}<div class="hint">Low: no shadows, fewer trees, lower resolution. Changes apply to the next session.</div></div>
        ${this.toggle("s.shake","Camera shake","Kerbs, speed and impacts",e.shake)}
        ${this.toggle("s.minimap","Show minimap","",e.minimap)}
        ${this.toggle("s.tower","Show timing tower","",e.tower)}
      </div><div class="panel"><h3>Audio &amp; units</h3>
        ${this.slider("s.volume","Master volume",Math.round(e.volume*100),0,100,1,Math.round(e.volume*100)+"%")}
        <div class="field"><label>Speed units</label>${this.chips("units",[{value:"kmh",label:"km/h"},{value:"mph",label:"mph"}],e.units)}</div>
        <div class="field"><label>Default camera</label>${this.chips("camera",[["chase","Chase"],["close","Low chase"],["cockpit","Cockpit"],["tcam","T-cam"],["tv","TV"]].map(([n,i])=>({value:n,label:i})),e.camera)}</div>
        <button class="btn sm" data-act="wipe">Clear saved records</button>
      </div></div>
      <div class="footer"><button class="btn sm" data-act="${t.from==="pause"?"pause":"back"}">\u25C0 Back</button></div></section>`}screen_pause(){return`<section class="screen full" style="align-items:center;justify-content:center">
      <div class="menu-col" style="align-items:stretch"><div class="logo" style="font-size:2.6rem">Paused</div>
        <button class="btn primary" data-act="resume">Resume</button>
        <button class="btn" data-act="restart">Restart session</button>
        <button class="btn" data-act="pausecam">Camera: <span id="camname"></span></button>
        <button class="btn" data-act="pausesettings">Settings</button>
        <button class="btn" data-act="quit">Quit to menu</button></div></section>`}screen_results(t){let{cls:e,player:n,race:i,season:r,trackName:a}=t,o=e.slice(0,3),l=[o[1],o[0],o[2]].filter(Boolean),c=x=>x.time!=null?Ie(x.time):"DNF",h=Math.min(...e.map(x=>x.best)),d=e.find(x=>x.car===n),u=e.map((x,g)=>{let p=e[0],v="";x.time!=null&&g>0&&(v=x.laps<p.laps?`+${p.laps-x.laps} lap`:"+"+(x.time-p.time).toFixed(3));let w=x.gridPos-x.pos;return`<tr class="${x.car===n?"me":""}"><td class="pos">${x.pos}</td><td><span class="tc" style="--c:${x.info.team.color}"></span>${be(x.info.name)}</td><td>${be(x.info.team.short)}</td><td>${c(x)}</td><td>${v}</td><td>${x.penalty?"+"+x.penalty+"s":""}</td><td>${x.best<1/0?Ie(x.best):""}${x.best===h?" \u25C6":""}</td><td>${x.stops}</td><td>${w>0?"\u25B2"+w:w<0?"\u25BC"+-w:"\u2013"}</td><td><b>${x.points}</b></td></tr>`}).join(""),f="";if(r){let x=Object.entries(r.points).sort((g,p)=>p[1]-g[1]).slice(0,10);f=`<div class="panel"><h3>Championship standings after round ${r.round+1}</h3><table class="results"><tr><th>Pos</th><th>Driver</th><th>Pts</th></tr>${x.map(([g,p],v)=>`<tr class="${g==="You"?"me":""}"><td class="pos">${v+1}</td><td>${be(g)}</td><td><b>${p}</b></td></tr>`).join("")}</table></div>`}let m=r&&r.round+1>=rn.length;return`<section class="screen panel-screen full">
      <h2>${be(a)} <span>results</span></h2>
      <div class="podium">${l.map(x=>`<div class="pod p${x.pos}" style="--c:${x.info.team.color}"><div class="hint">P${x.pos}</div><b>${be(x.info.code)}</b><div>${be(x.info.team.short)}</div><div class="hint">${c(x)}</div></div>`).join("")}</div>
      ${d?`<div class="hint" style="text-align:center">You finished <b>P${d.pos}</b>${d.penalty?` (includes ${d.penalty}s of penalties)`:""} \xB7 best lap ${d.best<1/0?Ie(d.best):"\u2014"}</div>`:""}
      <div class="grid2" style="grid-template-columns:${r?"2fr 1fr":"1fr"}"><div class="panel" style="overflow:auto"><table class="results"><tr><th>Pos</th><th>Driver</th><th>Team</th><th>Time</th><th>Gap</th><th>Pen</th><th>Best lap</th><th>Stops</th><th>Grid</th><th>Pts</th></tr>${u}</table></div>${f}</div>
      <div class="footer"><button class="btn sm" data-act="quit">Main menu</button><div class="row">
        <button class="btn" data-act="restart">Race again</button>
        ${r&&!m?'<button class="btn primary" data-act="nextround">Next round \u25B6</button>':""}
        ${m?'<button class="btn primary" data-act="endseason">Finish season</button>':""}</div></div></section>`}screen_timetrial(t){let{player:e,race:n,trackName:i,best:r,newBest:a}=t,o=e.rs.lapTimes.slice(2);return`<section class="screen panel-screen full"><h2>${be(i)} <span>time trial</span></h2>
      <div class="panel"><h3>Session</h3><div class="hint">Best lap <b style="color:#fff;font-size:1.6rem">${r<1/0?Ie(r):"\u2014"}</b> ${a?'\xB7 <b style="color:#31d17a">New record!</b>':""}</div>
      <div class="hint" style="margin-top:.6rem">Laps: ${e.rs.lapTimes.map((l,c)=>`<span style="margin-right:1rem">L${c+1} ${Ie(l)}${c===0?" (out)":""}</span>`).join("")}</div></div>
      <div class="footer"><button class="btn sm" data-act="quit">Main menu</button><button class="btn primary" data-act="restart">Run again</button></div></section>`}onClick(t){let e=t.target.closest("[data-act],[data-tab],[data-track],[data-team],[data-chip],[data-toggle],[data-preset],button");if(!e)return;let n=this.hooks;if(n.sfx&&n.sfx("click"),e.dataset.tab)return this.tab=e.dataset.tab,this.rerender();if(e.dataset.track)return this.config.trackId=e.dataset.track,this.config.frontWing=this.config.rearWing=null,this.persist(),this.rerender();if(e.dataset.team!=null&&e.dataset.team!=="")return this.config.team=+e.dataset.team,this.persist(),n.previewTeam&&n.previewTeam(this.config.team),this.rerender();if(e.dataset.chip){let a=e.dataset.chip,o=e.dataset.value,l=this.config;return a==="diff"?l.level=+o:a==="compound"?l.compound=o:a==="tyreWear"?l.tyreWear=+o:a==="tc"?l.assists.tc=+o:a==="stability"?l.assists.stability=+o:a==="quality"?this.save.settings.quality=o:a==="units"?this.save.settings.units=o:a==="camera"&&(this.save.settings.camera=o),this.persist(),n.applySettings&&n.applySettings(),this.rerender()}if(e.dataset.toggle){let a=e.dataset.toggle;return a.startsWith("a.")?this.config.assists[a.slice(2)]=!this.config.assists[a.slice(2)]:a.startsWith("s.")?this.save.settings[a.slice(2)]=!this.save.settings[a.slice(2)]:this.config[a]=!this.config[a],this.persist(),n.applySettings&&n.applySettings(),this.rerender()}if(e.dataset.preset)return this.config.assists={...Wd[e.dataset.preset]},this.persist(),this.rerender();let i=e.dataset.act;if(!i)return;let r=this.config;switch(i){case"quick":return r.mode="race",this.persist(),n.startRace({...r});case"setup":return r.mode=e.dataset.mode,this.tab="circuit",this.persist(),this.show("setup");case"season":return n.openSeason();case"go":return this.persist(),n.startRace({...r});case"main":return n.toMain();case"controls":return this.prev=this.current,this.show("controls");case"settings":return this.prev=this.current,this.show("settings");case"back":return n.toMain();case"resetsetup":return r.frontWing=r.rearWing=null,r.brakeBias=.58,this.persist(),this.rerender();case"wipe":this.save.records={},this.save.ghosts={},this.save.season=null,Zn(this.save),n.toast&&n.toast("Saved records cleared");return;case"resume":return n.resume();case"restart":return n.restart();case"quit":return n.toMain(!0);case"pausecam":return n.cycleCamera&&n.cycleCamera();case"pausesettings":return this.show("settings",{from:"pause"});case"pause":return this.show("pause");case"nextround":return n.nextRound();case"endseason":return n.endSeason()}}onInput(t){let e=t.target,n=e.dataset&&e.dataset.slider;if(!n)return;let i=+e.value,r=this.config;n==="laps"?r.laps=i:n==="level"?r.level=i/100:n==="fieldSize"?(r.fieldSize=i,r.playerGrid=Math.min(r.playerGrid,i)):n==="playerGrid"?r.playerGrid=i:n==="frontWing"?r.frontWing=i:n==="rearWing"?r.rearWing=i:n==="brakeBias"?r.brakeBias=i/100:n==="s.volume"&&(this.save.settings.volume=i/100,this.hooks.applySettings&&this.hooks.applySettings()),this.persist();let a=e.closest(".field").querySelector("label b");if(a&&(n==="laps"?a.textContent=`${i} \xB7 about ${Math.max(1,Math.round(i*(this.hooks.tracks[r.trackId]?.length||5e3)/1e3*.5))} min`:n==="level"?a.textContent=i+"%":n==="playerGrid"?a.textContent="P"+i:n==="brakeBias"||n==="s.volume"?a.textContent=i+"%":a.textContent=i),n==="level"){let o=Kr.reduce((l,c)=>Math.abs(c.level-r.level)<Math.abs(l.level-r.level)?c:l);e.closest(".field").querySelectorAll(".chip").forEach(l=>l.classList.toggle("on",+l.dataset.value===o.level))}}rerender(){let t=this.root.querySelector(".panel-screen"),e=t?t.scrollTop:0;this.show(this.current,this.lastData);let n=this.root.querySelector(".panel-screen");n&&(n.scrollTop=e)}};var ea=()=>new Promise(s=>requestAnimationFrame(()=>setTimeout(s,0)));function hy(s){let t=new Uint8Array(s.buffer,s.byteOffset,s.byteLength),e="";for(let n=0;n<t.length;n+=32768)e+=String.fromCharCode.apply(null,t.subarray(n,n+32768));return btoa(e)}function uy(s){let t=atob(s),e=new Uint8Array(t.length);for(let n=0;n<t.length;n++)e[n]=t.charCodeAt(n);return new Float32Array(e.buffer)}var Sh=class{constructor(){this.canvas=document.getElementById("gl"),this.save=Yd(),this.state="boot",this.tracks={},this.input=new Pl,this.audio=new Il,this.lastT=performance.now(),this.initRenderer(),this.hud=new Ll(document.getElementById("hud")),this.screens=document.getElementById("screens"),this.menu=new Dl(this.screens,this.save,this.hooks()),this.session=null,this.showroom=null,window.addEventListener("resize",()=>this.resize()),window.addEventListener("keydown",t=>{if(this.audio.start(),this.audio.resume(),this.state==="menu"&&t.code==="Enter"){let e=this.screens.querySelector(".btn.primary");e&&document.activeElement===document.body&&e.click()}}),window.addEventListener("pointerdown",()=>{this.audio.start(),this.audio.resume()}),document.addEventListener("visibilitychange",()=>{document.hidden&&this.state==="race"&&this.pause()}),this.setupTouch(),this.boot()}hooks(){return{tracks:this.tracks,sfx:t=>this.audio.ui(t),startRace:t=>this.startRace(t),toMain:t=>this.toMain(t),resume:()=>this.resume(),restart:()=>this.restart(),applySettings:()=>this.applySettings(),previewTeam:t=>this.previewTeam(t),openSeason:()=>this.openSeason(),nextRound:()=>this.nextRound(),endSeason:()=>this.endSeason(),cycleCamera:()=>this.cycleCamera(),toast:t=>this.toast(t)}}initRenderer(){let t=this.save.settings.quality,e=new cl({canvas:this.canvas,antialias:t!=="low",powerPreference:"high-performance"});this.renderer=e,e.toneMapping=Fr,e.toneMappingExposure=1,e.shadowMap.enabled=t!=="low",e.shadowMap.type=Wi,this.camera=new Fe(62,1,.25,9e3),this.resize()}resize(){let t=this.save.settings.quality,e=t==="high"?2:t==="medium"?1.5:1,n=Math.min(window.devicePixelRatio||1,e);this.renderer.setPixelRatio(n),this.renderer.setSize(window.innerWidth,window.innerHeight,!1),this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.updateProjectionMatrix(),this.pointScale=window.innerHeight*n/(2*Math.tan(this.camera.fov*Math.PI/360))}applySettings(){Zn(this.save),this.audio.setVolume(this.save.settings.volume),this.hud.setUnits(this.save.settings.units),this.hud.el.minimap.classList.toggle("hidden",!this.save.settings.minimap),this.hud.el.tower.classList.toggle("force-hide",!this.save.settings.tower);let t=this.hud.el.tower;t.style.visibility=this.save.settings.tower?"":"hidden",this.resize(),this.session&&this.session.camRig&&(this.session.camRig.shakeOn=this.save.settings.shake)}async boot(){this.screens.innerHTML=this.menu.screen_loading("Warming up the garage"),await ea();try{for(let t of rn)this.tracks[t.id]=new pl(t),await ea();this.buildShowroom(),this.applySettings(),this.toMain(),this.renderer.setAnimationLoop(()=>this.frame())}catch(t){console.error(t),this.screens.innerHTML=`<section class="screen loading"><div class="logo">Error</div><div class="hint" style="max-width:40rem;white-space:pre-wrap">${String(t.stack||t)}</div></section>`}}toast(t){let e=document.getElementById("toast");e.textContent=t,e.classList.add("show"),clearTimeout(this._toastT),this._toastT=setTimeout(()=>e.classList.remove("show"),2200)}buildShowroom(){let t=new ri;t.background=new ht("#07090c"),t.fog=new fr("#07090c",18,60);let e=new Zi(this.renderer);t.environment=e.fromScene(new dl,.04).texture,t.environmentIntensity=.9;let n=new Ct(new zi(40,64),new Ht({color:856085,roughness:.28,metalness:.7}));n.rotation.x=-Math.PI/2,t.add(n);let i=new Ct(new Hi(3.6,3.75,96),new me({color:16722474}));i.rotation.x=-Math.PI/2,i.position.y=.01,t.add(i);let r=new Vi(16777215,900,60,.5,.6,1.4);r.position.set(-9,12,8),r.target.position.set(0,.5,0),r.castShadow=!0,r.shadow.mapSize.set(1024,1024);let a=new Vi(16724016,700,60,.6,.7,1.4);a.position.set(10,6,-9);let o=new Vi(3174655,500,60,.6,.7,1.4);o.position.set(-10,5,-8),t.add(r,r.target,a,o),this.showroom={scene:t,view:null,angle:0,cam:new Fe(36,1,.1,200)},this.previewTeam(this.save.config.team)}previewTeam(t){if(!this.showroom)return;let e=this.showroom;e.view&&(e.scene.remove(e.view.group),e.view.dispose()),e.view=new Vs(mn[t],{number:7,isPlayer:!0,code:"YOU"},{detail:"high"}),e.view.setPose(0,0,0,0),e.view.group.traverse(n=>{n.isMesh&&(n.castShadow=!0)}),e.scene.add(e.view.group),e.view.setCompound(In[this.save.config.compound||"medium"])}toMain(t=!1){this.session&&this.endSession(),this.state="menu",this.hud.show(!1),document.getElementById("vignette").style.display="",this.menu.config={...this.save.config,assists:{...this.save.config.assists}},this.menu.show("main"),this.previewTeam(this.save.config.team)}openSeason(){let t=this.save.season,e=this.menu.config;t||(t={round:0,points:{},cfg:null},this.save.season=t),e.mode="race",e.trackId=rn[Math.min(t.round,rn.length-1)].id,e.frontWing=e.rearWing=null,this.menu.tab="race",this.menu.show("setup",{season:!0})}nextRound(){let t=this.save.season;if(!t)return this.toMain();t.round++,Zn(this.save),this.openSeason()}endSeason(){let t=this.save.season;if(t){let n=Object.entries(t.points).sort((i,r)=>r[1]-i[1]).findIndex(([i])=>i==="You")+1;this.toast(`Season complete: you finished P${n} in the championship`)}this.save.season=null,Zn(this.save),this.toMain()}cycleCamera(){if(!this.session)return;let t=this.session.camRig.next();this.save.settings.camera=t,Zn(this.save);let e=document.getElementById("camname");e&&(e.textContent=Cl[t]),this.toast("Camera: "+Cl[t])}async startRace(t){this.audio.start(),this.audio.resume(),this.lastConfig=t,this.session&&this.endSession(),this.state="loading",this.screens.innerHTML=this.menu.screen_loading("Building "+rn.find(e=>e.id===t.trackId).name),this.hud.show(!1),await ea();try{await this.buildSession(t)}catch(e){console.error(e),this.screens.innerHTML=`<section class="screen loading"><div class="logo">Error</div><div class="hint" style="max-width:44rem;white-space:pre-wrap">${String(e.stack||e)}</div><button class="btn" data-act="quit">Back</button></section>`}}async buildSession(t){let e=this.tracks[t.trackId],n=!!(this.save.season&&t.season!==!1&&this.menu.current==="setup"&&!1),i=new yl(e,{mode:t.mode,laps:t.laps,level:t.level,adaptive:t.adaptive,fieldSize:t.fieldSize,playerTeam:t.team,playerGrid:Math.min(t.playerGrid,t.fieldSize),collisions:t.collisions,damage:t.damage,tyreWear:t.tyreWear,mandatoryStop:t.mandatoryStop,compound:t.compound,setup:{frontWing:t.frontWing,rearWing:t.rearWing,brakeBias:t.brakeBias},assists:{...t.assists,stability:t.assists.stability,tc:t.assists.tc,steer:t.assists.steer},seed:Math.random()*1e6|0});await ea();let r=this.save.settings.quality,a=i.getProfile(i.player.spec,`${i.player.info.team.id}:${t.compound}`),o=new Sl(e,{quality:r,profile:a});await ea();let l=new ri;l.add(o.group);let c=e.theme;l.fog=new dr(new ht(c.fog),1.1/c.fogFar),l.background=new ht(c.fog);let h=new Zi(this.renderer),d=new ri,u=o.sky.clone();d.add(u),l.environment=h.fromScene(d,.02).texture,l.environmentIntensity=.75,h.dispose();let f=new Map,m=r==="low"?"low":"high";for(let w of i.cars){let _=new Vs(w.info.team,w.info,{detail:m});_.setCompound(w.compound),l.add(_.group),f.set(w,_)}let x=new Tl(l),g=this.camera,p=new Rl(g);p.setMode(this.save.settings.camera||"chase"),p.shakeOn=this.save.settings.shake;let v=null;if(t.mode==="timetrial"){let w=this.save.ghosts[e.id];w&&(i.ghostBest={time:w.time,frames:uy(w.data),track:e.id}),v=new Vs(mn[t.team],{number:0,isPlayer:!1,code:"GST"},{ghost:!0,detail:"low"}),v.group.visible=!1,l.add(v.group)}this.session={cfg:t,track:e,race:i,world:o,scene:l,views:f,effects:x,camRig:p,ghostView:v,acc:0,alpha:0,intro:4.2,introT:0,paused:!1,finishedShown:!1,radioT:0,fast:!1,player:i.player,pin:null,sunDir:o.sunDir,stopTimer:0,lastEventCar:null,seasonRound:this.save.season?this.save.season.round:null,useSeason:t.__season},this.hud.setTrack(e),this.hud.setUnits(this.save.settings.units),this.hud.show(!0),this.applySettings(),this.screens.innerHTML="",this.state="race",document.getElementById("touch")&&this.updateTouchVisibility(),this.hud.message(t.mode==="timetrial"?"Time trial":`${e.name}`,"",t.mode==="timetrial"?"Set your best lap \u2014 your ghost follows":`${t.laps} laps \xB7 P${i.player.info.gridPos} on the grid`,4),t.mode==="race"&&this.hud.radio("Welcome to "+e.name+". Lights out when you are ready \u2014 good luck.",6)}endSession(){let t=this.session;t&&(t.scene.traverse(e=>{e.geometry&&e.geometry.dispose()}),this.session=null,this.audio.update({rpm:0,throttle:0,speed:0,slipVis:[0,0,0,0],kerbShake:0,gear:1},[],{pos:new F,right:new F(1,0,0),vel:new F},.016,!0))}toggleAutopilot(){let t=this.session;if(!(!t||t.race.opt.mode==="timetrial"&&!1)){if(!t.pilot){let e=t.race.getProfile(t.player.spec,"pilot");t.pilot=new Ji({car:t.player,track:t.track,profile:e,level:Math.max(.6,t.cfg.level),seed:4242}),t.pilot.goTime=0}t.auto=!t.auto,t.pilot.offset=0,this.toast(t.auto?"Autopilot on (G to take over)":"You have control")}}debugSkip(t){let e=this.session;if(!e)return;e.pilot||this.toggleAutopilot(),e.auto=!0;let{race:n}=e,i={throttle:0,brake:0,steer:0,boost:!1};n.phase==="grid"&&n.start();let r=Math.round(t/Dn);for(let a=0;a<r;a++){if(n.phase==="racing"){let o=e.pilot.update(Dn,n);i.throttle=o.throttle,i.brake=o.brake,i.steer=o.steer,i.boost=o.boost,i.drsPress=o.drs&&!e.player.rs.drsLatch}else i.throttle=0,i.brake=1,i.steer=0,i.drsPress=!1;n.step(Dn,i)}n.events.length=0,e.introT=99}pause(){let t=this.session;if(!t||this.state!=="race")return;this.state="paused",t.paused=!0,this.menu.show("pause");let e=document.getElementById("camname");e&&(e.textContent=Cl[t.camRig.mode])}resume(){this.session&&(this.screens.innerHTML="",this.state="race",this.session.paused=!1,this.lastT=performance.now())}restart(){this.lastConfig&&this.startRace(this.lastConfig)}setupTouch(){let t=document.getElementById("touch");if(!t)return;let e=(n,i)=>this.input.touch[n]=i;t.querySelectorAll("button").forEach(n=>{let i=n.dataset.k;n.addEventListener("pointerdown",a=>{a.preventDefault(),this.input.touchMode=!0,e(i,!0)});let r=()=>e(i,!1);n.addEventListener("pointerup",r),n.addEventListener("pointercancel",r),n.addEventListener("pointerleave",r)}),window.addEventListener("touchstart",()=>{this.input.touchMode=!0,this.updateTouchVisibility()},{passive:!0,once:!0})}updateTouchVisibility(){let t=document.getElementById("touch");t&&t.classList.toggle("show",this.input.touchMode&&this.state==="race")}frame(){let t=performance.now(),e=Math.min(.05,(t-this.lastT)/1e3);this.lastT=t;let n=this.renderer;if(this.state==="menu"||this.state==="loading"||this.state==="paused"&&!this.session){this.renderShowroom(e);return}let i=this.session;if(i){if(this.state==="paused"){if(this.input.poll(e,0).pause)return this.resume();this.audio.update(i.player,[],this.listener(),e,!0),n.render(i.scene,this.camera);return}this.state==="race"&&this.runSession(i,e),n.render(i.scene,this.camera)}}renderShowroom(t){let e=this.showroom;if(!e)return;e.angle+=t*.28;let n=e.cam;n.aspect=window.innerWidth/window.innerHeight;let i=n.aspect>1.2;n.setViewOffset&&i?n.setViewOffset(window.innerWidth,window.innerHeight,-window.innerWidth*.17,0,window.innerWidth,window.innerHeight):n.clearViewOffset(),n.updateProjectionMatrix();let r=11.5;n.position.set(Math.cos(e.angle)*r,2.6+Math.sin(e.angle*.7)*.6,Math.sin(e.angle)*r),n.lookAt(0,.55,0),this.renderer.render(e.scene,n)}listener(){let t=this.camera,e=new F(1,0,0).applyQuaternion(t.quaternion);return{pos:t.position,right:e,vel:this._lv||(this._lv=new F)}}runSession(t,e){let{race:n,player:i,views:r,camRig:a,effects:o,world:l}=t,c=this.input,h=c.poll(e,i.speed);if(h.pause)return this.pause();if(h.camera&&this.cycleCamera(),h.mute&&(this.audio.setEnabled(!this.audio.enabled),this.toast(this.audio.enabled?"Sound on":"Sound off")),h.map&&this.hud.el.minimap.classList.toggle("hidden"),a.lookBack=h.lookBack,h.autoToggle&&this.toggleAutopilot(),t.auto&&n.phase==="racing"){let M=t.pilot.update(Dn,n);h.throttle=M.throttle,h.brake=M.brake,h.steer=M.steer,h.boost=M.boost,h.drsPress=M.drs&&!i.rs.drsLatch,i.rs.pilot&&i.rs.pilot.pitState!=="none"&&(t.pilot.pitState="none"),t.pilot.wantsPit=i.rs.pitRequested}n.phase==="grid"&&(t.introT+=e,(t.introT>t.intro||h.drsPress||c.isDown("pit"))&&(n.start(),a.init=!1)),h.reset&&(n.phase==="racing"||n.phase==="countdown")&&(n.resetToTrack(i,(n.opt.mode==="race",0)),n.phase==="racing"&&this.hud.message("Car recovered","","Back on the racing line",2));let d=n.phase==="racing"&&i.rs.finished&&n.phase!=="finished",u=d?40:1,f=0;t.acc+=e;let m={gearUp:h.gearUp,gearDown:h.gearDown,drsPress:h.drsPress,pitToggle:h.pitToggle,tyreCycle:h.tyreCycle},x={throttle:h.throttle,brake:h.brake,steer:h.steer,boost:h.boost,...m},g=d?400:14;for(;t.acc>=Dn&&f<g;)n.step(Dn,x),x.gearUp=x.gearDown=x.drsPress=x.pitToggle=x.tyreCycle=!1,t.acc-=Dn,f++;t.acc>Dn*14&&(t.acc=0),t.alpha=t.acc/Dn,d&&n.phase!=="finished"&&(t.acc=0),this.processEvents(t);let p=this.camera.position,v=null;for(let M of n.cars){let T=r.get(M);T.update(M,t.alpha,e);let y=M.x-p.x,S=-M.y-p.z,C=y*y+S*S<25600;T.group.visible=C||M===i||y*y+S*S<1200*1200,T.setLod(!C&&M!==i),T.group.traverse(P=>{P.isMesh&&(P.castShadow=C&&this.save.settings.quality!=="low")}),M!==i&&C&&o.car(M,T,e,p,!0)}if(o.car(i,r.get(i),e,p,!0),o.update(e,this.pointScale),t.ghostView){let M=n.phase==="racing"?n.ghostPose(n.time-i.rs.lapStart):null;if(M&&i.rs.laps>=1){t.ghostView.group.visible=!0,t.ghostView.setPose(M.x,M.y,M.theta,(this.track,0),M.steer);let T=t.track.idx(0),y=t.track.project(M.x,M.y,-1,{});t.ghostView.group.position.y=t.track.at(t.track.z,y.s),n.ghostPos=M}else t.ghostView.group.visible=!1,n.ghostPos=null}if(n.phase==="grid"&&t.introT<t.intro){let M=-.9+t.introT*.5,T=r.get(i).group.position;this.camera.position.set(T.x+Math.cos(M)*9+0,T.y+2.4,T.z+Math.sin(M)*9),this.camera.lookAt(T.x,T.y+.6,T.z),this.camera.fov=48,this.camera.updateProjectionMatrix()}else a.update(e,r.get(i),i,t.track),a.shakeOn||(a.impact=0);l.focusShadow(r.get(i).group.position),l.update(e,performance.now()/1e3),l.setStartLights(n.phase==="countdown"?n.lights:0,n.phase==="racing"&&n.time-n.t0<1.5),this.hud.update(n,i,h,performance.now()),this.radioTick(t,e);let w=[];for(let M of n.cars){if(M===i)continue;let T=r.get(M).group.position;w.push({car:M,wx:T.x,wz:T.z,vx:M.u*Math.cos(M.theta),vz:-M.u*Math.sin(M.theta)})}let _=this.listener(),b=r.get(i).group.position;_.vel.set(i.u*Math.cos(i.theta),0,-i.u*Math.sin(i.theta)),this.audio.update(i,w,_,e,!1),n.phase==="finished"&&!t.finishedShown&&(t.finishedShown=!0,setTimeout(()=>this.showResults(),n.opt.mode==="timetrial"?0:1500))}processEvents(t){let{race:e,player:n,effects:i,camRig:r}=t,a=this.hud;for(let o of e.events)switch(o.type){case"light":a.setLights(o.n),this.audio.light(o.n);break;case"lightsOut":a.setLights(0,!0),this.audio.go(),e.opt.mode==="race"&&a.message("Go go go!","good","",1.6);break;case"lap":if(o.car===n){let l=e.fastest.car===n&&e.fastest.time===o.time,c=n.rs.best===o.time&&o.valid;e.opt.mode==="timetrial"||o.lap>=2||e.totalLaps===1?a.message(`Lap ${o.lap} \xB7 ${Ie(o.time)}`,l?"purple":c?"good":o.valid?"":"bad",o.valid?l?"Fastest lap of the race":c?"Personal best":"":"Lap invalidated (track limits)",3.5):a.message(`Lap ${o.lap} \xB7 ${Ie(o.time)}`,"","Standing-start lap, not counted for records",3)}break;case"fastest":o.car!==n&&e.opt.mode==="race"&&a.message(`Fastest lap \xB7 ${o.car.info.code}`,"purple",Ie(o.time),2.5);break;case"penalty":o.car===n&&(a.message(`+${o.secs}s penalty`,"bad",o.reason,4),this.audio.ui("bad"),a.radio(`Penalty: ${o.reason}. ${o.secs} seconds added to your race time.`,6));break;case"warning":o.car===n&&(a.message(`Track limits \xB7 warning ${o.n}/3`,"bad","All four wheels beyond the white line",3),this.audio.ui("bad"));break;case"lapInvalid":o.car===n&&a.message("Lap invalidated","bad","Track limits",2.5);break;case"sector":o.kind==="purple"&&a.message("Purple sector","purple","",1.4);break;case"pitRequest":o.car===n&&a.message(o.on?"Box this lap":"Pit request cancelled",o.on?"":"bad",o.on?"Press T to pick the next compound":"",2.5);break;case"pitEntry":o.car===n&&a.message("Pit lane","","80 km/h limit",2.5);break;case"pitStopStart":o.car===n&&a.radio("Box, box \u2014 hold position, tyres going on.",3);break;case"pitStopEnd":o.car===n&&(a.message("Pit stop complete","good",`Fitted ${In[o.compound].name} tyres`,3),this.audio.ui("good"));break;case"impact":{let l=this.camera.position,c=Math.hypot(o.x-l.x,-o.y-l.z);c<200&&(i.burst(o.x,.5,-o.y,Math.min(60,10+o.speed*3),Math.min(18,4+o.speed)),c<90&&this.audio.thud(at(o.speed/20,.15,1)*(1-c/100))),(o.car===n||o.other===n)&&(r.impact=Math.max(r.impact,at(o.speed/25,.1,1)),e.opt.damage&&o.speed>6&&a.message("Contact","bad",o.wall?"Barrier impact":"Collision with "+(o.car===n?o.other:o.car).info.code,2));break}case"chequered":a.flag("Chequered flag","#fff",4,"chequered");break;case"finish":if(o.car===n){let l=n.rs.pos;a.message(e.opt.mode==="race"?`Finished P${l}`:"Session complete","good",Ie(o.time),5),this.audio.ui("good")}break;case"ghost":this.saveGhost(t);break;case"recover":o.car===n&&(this.input.throttle=0);break}e.events.length=0}saveGhost(t){let e=t.race.ghostBest;if(!e)return;this.save.ghosts[t.track.id]={time:e.time,data:hy(e.frames)};let n=this.save.records[t.track.id];(!n||e.time<n.best)&&(this.save.records[t.track.id]={best:e.time},this.toast("New track record: "+Ie(e.time))),Zn(this.save)}radioTick(t,e){if(t.radioT+=e,t.radioT<8||t.race.phase!=="racing"||t.race.opt.mode!=="race")return;let n=t.player,i=n.rs;t.radioT=0;let r=n.tyreSummary(),a=t.race.totalLaps-i.laps;r.wear>.7&&!i.pitRequested&&i.stops===0&&a>1&&t.track.pit&&!t._wearCalled?(t._wearCalled=!0,this.hud.radio("Tyres are going off. Press B when you want to box.",6)):n.drsAllowed&&!t._drsCalled?(t._drsCalled=!0,this.hud.radio("DRS enabled. Press Space on the straight.",4)):n.drsAllowed?n.behind&&(n.behind.gapAhead??9)<.8&&!t._behindCalled?(t._behindCalled=!0,this.hud.radio(`${n.behind.info.code} is right behind, ${n.behind.gapAhead.toFixed(1)} seconds. Defend.`,4)):(!n.behind||(n.behind.gapAhead??9)>2)&&(t._behindCalled=!1):t._drsCalled=!1,(n.damageFront||0)>.3&&!t._dmgCalled&&t.track.pit&&(t._dmgCalled=!0,this.hud.radio("You have front wing damage. Consider boxing for a new nose.",5))}showResults(){let t=this.session;if(!t||this.state==="menu")return;let{race:e,player:n,track:i}=t;this.state="results",this.hud.show(!1),document.getElementById("touch")&&this.updateTouchVisibility();let r=i.name;if(e.opt.mode==="timetrial"){let h=this.save.records[i.id],d=n.rs.best,u=!1;d<1/0&&(!h||d<h.best)&&(this.save.records[i.id]={best:d},u=!0),Zn(this.save),this.menu.show("timetrial",{player:n,race:e,trackName:r,best:d,newBest:u});return}let a=e.classification(),o=a.find(h=>h.car===n);if(o&&o.best<1/0){let h=this.save.records[i.id];(!h||o.best<h.best)&&(this.save.records[i.id]={best:o.best})}let l=null,c=t.cfg;if(this.save.season&&rn[this.save.season.round]&&rn[this.save.season.round].id===i.id){l=this.save.season;for(let h of a)l.points[h.info.name]=(l.points[h.info.name]||0)+h.points;l.lastCls=a.length}Zn(this.save),this.menu.show("results",{cls:a,player:n,race:e,season:l,trackName:r})}};window.apex=new Sh;})();
