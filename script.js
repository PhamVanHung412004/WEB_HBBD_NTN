/* =========================================================
   ✏️ CONFIG — CHỈ CẦN SỬA PHẦN NÀY
   ========================================================= */
const CONFIG = {
  // Tên người nhận (crush của bạn)
  name: "Nguyễn Thị Nhi",

  // Tên gọi thân mật dùng trong các câu chào (vd: "dành cho Nhi")
  shortName: "Nhi",

  // Ngày sinh gốc (YYYY-MM-DD) — dùng để tính tuổi mới = năm sinh nhật năm nay − năm sinh
  birthDate: "2003-11-19",

  // Tên/biệt danh của bạn (hiện ở cuối lời chúc). Để "" nếu muốn ẩn.
  from: "",

  // Thời điểm sinh nhật để đếm ngược. Định dạng: "YYYY-MM-DDTHH:mm" (giờ Việt Nam).
  // Để "" nếu không muốn đếm ngược.
  birthday: "2026-11-19T00:00",

  // Tiêu đề + dòng chữ nhỏ ở màn lá thư
  introTitle: "Có một lá thư dành cho Nhi 💌",
  introSub: "Giữa hàng tỷ vì sao, có một điều bất ngờ dành riêng cho Nhi…",

  // Tiêu đề thẻ lời chúc
  wishTitle: "Lời chúc dành cho Nhi 💌",

  // 💌 LỜI CHÚC — mỗi phần tử là một đoạn văn.
  wishes: [
    "Chúc mừng sinh nhật cô công chúa bé nhỏ nhé,",
    "chúc bé tuổi mới sẽ luôn xinh đẹp, kiếm thật nhiều tiền, thực hiện được hết những dự định mà bản thân đặt ra nhé."
  ],

  // 💌 THƯ TAY: hiện trên tấm thiệp, chữ chạy từ từ từ trái sang phải (sau khi bấm phong thư).
  // Nội dung thư = [letterBefore] + [lời chúc ở "wishes" phía trên] + [letterAfter].
  // Dùng {date} = ngày-tháng sinh nhật, {age} = tuổi mới.
  letterGreeting: "Gửi Nhi,",
  letterBefore: [
    "Ngày {date} – ngày bầu trời có thêm một vì sao thật đặc biệt, mang tên Nhi ✨"
  ],
  letterAfter: [
    "Mong mỗi ngày của Nhi đều bắt đầu bằng một nụ cười và luôn tràn ngập bình yên, niềm vui cùng những điều dịu dàng nhất.",
    "Mời Nhi bước vào bầu trời sao được chuẩn bị riêng cho Nhi nhé 💖"
  ],
  letterEnd: "Sinh nhật vui vẻ nhé, Nhi 🎂",
  letterBtn: "✨ Mở cả vũ trụ nào",
  typeSpeed: 38,          // mili-giây cho mỗi chữ (số càng lớn chữ chạy càng chậm)

  // 🎵 NHẠC NỀN: file mp3 trong thư mục "music" (cùng chỗ với index.html).
  // Web thử lần lượt từng tên trong "files"; muốn đổi bài chỉ cần thêm/đổi tên file ở dòng đầu tiên.
  // Nhạc tự phát khi bấm mở phong thư; nút 🎵 góc phải để tắt/bật.
  music: {
    files: ["music/Ready Lets Go Happy Birthday Ringtone_.mp3", "music/show-you-off.mp3"],
    volume: 0.8,          // 0 → 1
    loop: true,           // hết bài thì phát lại
    startAt: 0,           // bắt đầu từ giây thứ mấy (vd 3 để bỏ phần đầu)
    fadeIn: 1200          // mili-giây nhạc nhỏ → to dần khi bắt đầu
  },

  // 🎂 ẢNH BÁNH SINH NHẬT hiện sau khi vũ trụ mở: ảnh nằm trong thư mục "image" (cùng chỗ với index.html).
  // Muốn đổi ảnh: thay ảnh mới vào image/cake.jpg (hoặc sửa "src"). Tỉ lệ khung ảnh đặt ở style.css (.polaroid .photo → aspect-ratio).
  cakeCaption: "Happy Birthday, Nhi 🎂",
  cakePhotos: [
    { src: "image/cake.jpg" }
  ],

  // 📱 ẢNH CRUSH HAI BÊN ẢNH BÁNH — tất cả nằm trong thư mục "image" (cùng chỗ với index.html), chỉ ghi đường dẫn
  // tương đối "image/tên-file" nên chép cả thư mục sang máy khác vẫn chạy. Mỗi bên có 1 khung iPhone + 2 ảnh polaroid.
  // Thứ tự: [iPhone trái, iPhone phải, polaroid trên-trái, polaroid trên-phải, polaroid dưới-trái, polaroid dưới-phải].
  // Nhiều hơn 6 ảnh thì các khung sẽ lần lượt đổi ảnh; màn hình hẹp (điện thoại) chỉ hiện 2 iPhone và đổi ảnh luân phiên.
  // Có thể ghi {src:"image/a.jpg", pos:"50% 30%"} để chọn phần ảnh nằm giữa khung (x% y%); riêng 4 polaroid còn có thêm
  // zoom (phóng to, vd 1.5) và at (vị trí khuôn mặt trong khung, vd "50% 40%") để phóng to quanh mặt. Ảnh nào lỗi/không có sẽ tự bị bỏ qua.
  phonePhotos: [
    { src: "image/1794943489419_108858156700972838_6123196155549620573_a0b20c6d5ceabe0c4dc4dd6b987298e2.jpg", pos: "50% 50%" },
    { src: "image/1795009669035_108858156700972838_6123196155549620573_1a01522fac0103f3f08a94cf187fb879.jpg", pos: "52% 50%" },
    { src: "image/1795009668987_108858156700972838_6123196155549620573_2cd8186bfbdd949a0c1d73a739e493fb.jpg", pos: "50% 40%", zoom: 1.5, at: "47% 38%" },
    { src: "image/1795009669061_108858156700972838_6123196155549620573_dbd7f60e34f26a9ac48f22fa826e9bd5.jpg", pos: "0% 30%",  zoom: 1.45, at: "65% 26%" },
    { src: "image/1795009669050_108858156700972838_6123196155549620573_e706f8ffa5b2a93c69562262933b6dcb.jpg", pos: "50% 45%", zoom: 1.5, at: "52% 43%" },
    { src: "image/1795009669017_108858156700972838_6123196155549620573_16b6e8d7c35b5d3cc48607a9dc0bda98.jpg", pos: "50% 40%", zoom: 1.5, at: "52% 40%" }
  ],

  // Dòng chữ xếp bằng các vì sao ngay phía trên tên crush trên bầu trời
  skyBanner: "Happy Birthday",

  // 💖 Thông điệp tình cảm lơ lửng trong vũ trụ (mỗi dòng là một câu ngắn). Để [] nếu không muốn.
  loveNotes: [
    "Chúc mừng sinh nhật cô công chúa bé nhỏ 👑",
    "Tuổi mới luôn xinh đẹp ✨",
    "Kiếm thật nhiều tiền 💰",
    "Thực hiện được hết những dự định của mình 🌟"
  ],

  // ⭐ Ngôi sao bí mật: crush tìm thấy và bấm vào sẽ hiện lời nhắn riêng này
  secretTitle: "⭐ Nhi đã tìm thấy ngôi sao bí mật!",
  secretMessages: [
    "Giữa cả bầu trời sao này, ngôi sao nhỏ nhất lại dành riêng cho cô công chúa bé nhỏ.",
    "Chúc Nhi tuổi 23 luôn xinh đẹp, thật nhiều tiền và mọi dự định đều thành hiện thực nhé! 💖"
  ]
};

/* =========================================================
   TỪ ĐÂY TRỞ XUỐNG LÀ MÃ HIỆU ỨNG — KHÔNG CẦN SỬA
   ========================================================= */
const $ = s => document.querySelector(s);
const COLORS = ['#ff4d9d','#ff9f1c','#ffe14d','#2ee6a6','#3ec6ff','#9b5cff','#ff4d4d','#ffffff'];
const rand = (a,b)=>Math.random()*(b-a)+a;

/* ---- điền nội dung từ CONFIG ---- */
document.title = `🎂 Chúc mừng sinh nhật ${CONFIG.name}! 🎉`;
$('#crushName').textContent = CONFIG.name;
$('#introSub').textContent = CONFIG.introSub;
if(CONFIG.introTitle) $('#introTitle').textContent = CONFIG.introTitle;

/* tuổi mới + ngày sinh nhật (tính từ CONFIG) */
const BD = (function(){
  const b=(CONFIG.birthDate||'').match(/^(\d{4})-(\d{2})-(\d{2})/), t=(CONFIG.birthday||'').match(/^(\d{4})-(\d{2})-(\d{2})/);
  if(!b||!t) return null;
  return { age:(+t[1])-(+b[1]), label:`${t[3]}/${t[2]}/${t[1]}`, born:`${b[3]}/${b[2]}/${b[1]}`, d:+t[3], m:+t[2] };
})();
if(BD){
  const chip=$('#ageChip'); if(chip) chip.innerHTML=`🎂 ${BD.born} – ${BD.label} · Tuổi mới: <b>${BD.age}</b>`;
} else { const chip=$('#ageChip'); if(chip) chip.classList.add('hidden'); }
$('#wishTitle').textContent = CONFIG.wishTitle;
$('#wishFrom').textContent = CONFIG.from ? `— ${CONFIG.from} —` : '';
$('#secretTitle').textContent = CONFIG.secretTitle;
CONFIG.secretMessages.forEach(t=>{
  const p=document.createElement('p'); p.textContent=t;
  if(t.startsWith('✏️')||t.startsWith('Hãy thay')) p.className='placeholder';
  $('#secretText').appendChild(p);
});
CONFIG.wishes.forEach(t=>{
  const p=document.createElement('p'); p.textContent=t;
  if(t.startsWith('✏️')||t.startsWith('Hãy thay')) p.className='placeholder';
  $('#wishText').appendChild(p);
});

/* =========================================================
   🌌 BẦU TRỜI VŨ TRỤ 360° (canvas 2D, phép chiếu 3D tự viết)
   - Người xem đứng giữa một quả cầu sao, kéo chuột/ngón tay để nhìn quanh
   - Dải Ngân Hà có lõi sáng + dải bụi tối, tinh vân, thiên hà xoắn ốc,
     cụm sao xanh, hàng nghìn ngôi sao thật nhiều màu, sao băng
   - Cuộn chuột / chụm 2 ngón để zoom, nút 🧭 để xoay theo điện thoại
   ========================================================= */
/* hình trái tim (dùng cho mưa tim, sao tim, ...) */
function heartPath(c,s){
  c.beginPath(); c.moveTo(0,s*.95);
  c.bezierCurveTo(-s*1.55,-s*.1,-s*.85,-s*1.15,0,-s*.4);
  c.bezierCurveTo(s*.85,-s*1.15,s*1.55,-s*.1,0,s*.95); c.closePath();
}

const Sky = (function(){
  const cv=$('#sky'), c=cv.getContext('2d');
  const D2R=Math.PI/180, TAU=Math.PI*2;
  const mobile=matchMedia('(pointer:coarse)').matches || innerWidth<700;
  let W=1,H=1,dpr=1,focal=1;

  /* ---------- tiện ích ---------- */
  function mulberry32(a){return function(){a|=0;a=a+0x6D2B79F5|0;let t=Math.imul(a^a>>>15,1|a);t=t+Math.imul(t^t>>>7,61|t)^t;return((t^t>>>14)>>>0)/4294967296;}}
  const R=mulberry32(20261117);                       // cố định => bầu trời luôn giống nhau
  const rr=(a,b)=>a+(b-a)*R();
  const gauss=()=>{let u=0;for(let i=0;i<4;i++)u+=R();return (u-2)/0.5774;};
  const clamp=(v,a,b)=>Math.min(b,Math.max(a,v));
  const dot=(a,b)=>a[0]*b[0]+a[1]*b[1]+a[2]*b[2];
  const norm=v=>{const l=Math.hypot(v[0],v[1],v[2]);return [v[0]/l,v[1]/l,v[2]/l];};
  const cross=(a,b)=>[a[1]*b[2]-a[2]*b[1],a[2]*b[0]-a[0]*b[2],a[0]*b[1]-a[1]*b[0]];
  const mk=(w,h)=>{const g=document.createElement('canvas');g.width=w;g.height=h||w;return g;};
  const vyp=(y,p)=>[Math.cos(p)*Math.sin(y),Math.sin(p),Math.cos(p)*Math.cos(y)];

  /* ---------- hệ toạ độ thiên hà: mặt phẳng Ngân Hà là một đường tròn lớn ---------- */
  const nG=norm([0.30,0.84,0.45]);
  const a0=[1,0,0], pr=dot(a0,nG);
  const e1=norm([a0[0]-nG[0]*pr,a0[1]-nG[1]*pr,a0[2]-nG[2]*pr]);   // hướng về lõi thiên hà
  const e2=cross(nG,e1);
  const gdir=(l,b)=>{const cb=Math.cos(b),cl=Math.cos(l),sl=Math.sin(l),sb=Math.sin(b);
    return [cb*(cl*e1[0]+sl*e2[0])+sb*nG[0], cb*(cl*e1[1]+sl*e2[1])+sb*nG[1], cb*(cl*e1[2]+sl*e2[2])+sb*nG[2]];};

  /* ---------- trường nhiễu 3D (bản JS giống hệt shader → sao bám đúng dải sáng & dải bụi) ---------- */
  const fract=x=>x-Math.floor(x);
  const hash3=(x,y,z)=>{let a=fract(x*0.3183099+.1)*17,b=fract(y*0.3183099+.1)*17,d=fract(z*0.3183099+.1)*17;return fract(a*b*d*(a+b+d));};
  const lerp=(a,b,t)=>a+(b-a)*t;
  function noise3(x,y,z){
    const ix=Math.floor(x),iy=Math.floor(y),iz=Math.floor(z);
    let fx=x-ix,fy=y-iy,fz=z-iz; fx=fx*fx*(3-2*fx);fy=fy*fy*(3-2*fy);fz=fz*fz*(3-2*fz);
    return lerp(lerp(lerp(hash3(ix,iy,iz),hash3(ix+1,iy,iz),fx),lerp(hash3(ix,iy+1,iz),hash3(ix+1,iy+1,iz),fx),fy),
                lerp(lerp(hash3(ix,iy,iz+1),hash3(ix+1,iy,iz+1),fx),lerp(hash3(ix,iy+1,iz+1),hash3(ix+1,iy+1,iz+1),fx),fy),fz);
  }
  function fbm3(x,y,z){let a=.5,s=0;for(let i=0;i<5;i++){s+=a*noise3(x,y,z);x=x*2.03+1.7;y=y*2.03+9.2;z=z*2.03+3.1;a*=.5;}return s;}
  const sstep=(a,b,x)=>{const t=clamp((x-a)/(b-a),0,1);return t*t*(3-2*t);};
  // độ sáng của Ngân Hà tại hướng d (đã trừ dải bụi) — PHẢI khớp với công thức trong shader
  function milkyLum(d){
    const g0=dot(d,e1),g1=dot(d,e2),g2=dot(d,nG);
    const b=Math.asin(clamp(g2,-1,1)), l=Math.atan2(g1,g0);
    const n1=fbm3(g0*2.6+3.1,g1*2.6+3.1,g2*2.6+3.1), n2=fbm3(g0*7+11,g1*7+11,g2*7+11);
    const core=Math.exp(-l*l/(2*.55*.55)), wid=(.15+.05*core)*(.75+.7*n1), q=b/wid;
    const band=Math.exp(-q*q), wide=Math.exp(-(b/.55)*(b/.55))*.16, bulge=Math.exp(-l*l/(2*.3*.3)-(b/.2)*(b/.2));
    let lum=band*(.4+n1+.45*n2)+wide*(.6+n1)+bulge*1.5;
    const laneC=.012*Math.sin(l*4+n1*3), lq=(b-laneC)/(.04+.03*n1), lane=Math.exp(-lq*lq);
    const dustN=sstep(.3,.8,fbm3(g0*5.5+7,g1*5.5+7,g2*5.5+7));
    const dust=clamp(lane*(.3+1.2*dustN),0,1);
    lum*=1-.82*dust; lum*=1-.4*sstep(.5,.85,n2)*band;
    return lum;
  }

  /* ---------- tinh vân nổi bật (dùng cho shader) ---------- */
  const HEROES=[
    {d:gdir(-.62,-.32),r:.13,c:[1.0,.25,.38]},   // đỏ-hồng kiểu Orion
    {d:gdir(1.05,.22), r:.11,c:[.15,.9,.8]},     // xanh ngọc
    {d:gdir(3.5,.52),  r:.17,c:[.6,.3,1.0]},     // tím lớn
    {d:gdir(2.15,-.28),r:.10,c:[1.0,.6,.2]},     // hổ phách
    {d:gdir(-2.2,.38), r:.14,c:[.3,.55,1.0]},    // xanh dương
    {d:gdir(.5,-.55),  r:.10,c:[1.0,.3,.7]},     // hồng
    {d:gdir(2.55,-.46),r:.055,c:[.35,.55,1.0]},  // tinh vân phản xạ quanh cụm sao xanh
    null                                          // (ô trống) → gán cho vùng trái tim bên dưới
  ];

  // chòm sao hình trái tim 💖 (đặt gần tầm nhìn ban đầu)
  const startDir=gdir(.45,.1);
  const heartC=vyp(Math.atan2(startDir[0],startDir[2])+38*D2R, Math.asin(startDir[1])-.02+18*D2R);
  HEROES[7]={d:heartC,r:.1,c:[1.0,.35,.65]};

  /* ---------- WebGL: Ngân Hà thể tích vẽ bằng shader (nhiễu 3D, không có đường nối) ---------- */
  const FRAG=`
#ifdef GL_FRAGMENT_PRECISION_HIGH
precision highp float;
#else
precision mediump float;
#endif
uniform vec2 uRes; uniform vec3 uF,uR,uU,uE1,uE2,uN; uniform float uK,uS,uMask;
uniform vec4 uHero[8]; uniform vec3 uHeroCol[8];
float hash(vec3 p){p=fract(p*0.3183099+.1);p*=17.0;return fract(p.x*p.y*p.z*(p.x+p.y+p.z));}
float noise(vec3 x){vec3 i=floor(x);vec3 f=fract(x);f=f*f*(3.0-2.0*f);
  return mix(mix(mix(hash(i),hash(i+vec3(1,0,0)),f.x),mix(hash(i+vec3(0,1,0)),hash(i+vec3(1,1,0)),f.x),f.y),
             mix(mix(hash(i+vec3(0,0,1)),hash(i+vec3(1,0,1)),f.x),mix(hash(i+vec3(0,1,1)),hash(i+vec3(1,1,1)),f.x),f.y),f.z);}
float fbm(vec3 p){float a=.5,s=0.;for(int i=0;i<5;i++){s+=a*noise(p);p=p*2.03+vec3(1.7,9.2,3.1);a*=.5;}return s;}
void main(){
  vec2 p=(gl_FragCoord.xy-.5*uRes)/(.5*uRes.y);
  float rho=length(p);
  // ngoài quả cầu (lúc thiên hà đang chụm): chỉ có vầng sáng tím-xanh
  if(uMask>0.&&rho>uMask){
    float e=(rho-uMask)/uMask;
    vec3 h=vec3(.45,.32,1.0)*.7*exp(-e*14.)+vec3(.18,.45,1.0)*.28*exp(-e*3.5)+vec3(.9,.3,.8)*.08*exp(-e*1.2)+vec3(.004,.006,.016);
    gl_FragColor=vec4(1.-exp(-h*1.3),1.); return;
  }
  // ρ = K·tan(θ/S): S=1 ảnh thường, S=2 gom cả bầu trời vào quả cầu
  float th=uS*atan(rho/uK);
  vec3 d=uF*cos(th)+(uR*p.x+uU*p.y)/max(rho,1e-5)*sin(th);
  vec3 g=vec3(dot(d,uE1),dot(d,uE2),dot(d,uN));
  float b=asin(clamp(g.z,-1.,1.)), l=atan(g.y,g.x);
  float n1=fbm(g*2.6+3.1), n2=fbm(g*7.0+11.0);
  float core=exp(-l*l/(2.*.55*.55));
  float wid=(.15+.05*core)*(.75+.7*n1), q=b/wid;
  float band=exp(-q*q), wide=exp(-(b/.55)*(b/.55))*.16, bulge=exp(-l*l/(2.*.3*.3)-(b/.2)*(b/.2));
  float lum=band*(.4+n1+.45*n2)+wide*(.6+n1)+bulge*1.5;
  float laneC=.012*sin(l*4.+n1*3.), lq=(b-laneC)/(.04+.03*n1), lane=exp(-lq*lq);
  float dustN=smoothstep(.3,.8,fbm(g*5.5+7.0));
  float dust=clamp(lane*(.3+1.2*dustN),0.,1.);
  lum*=1.-.82*dust; lum*=1.-.4*smoothstep(.5,.85,n2)*band;
  // màu: xanh lạnh ở rìa → vàng ấm ở lõi
  vec3 cool=vec3(.42,.56,1.0), mid=vec3(.86,.84,1.0), warm=vec3(1.0,.7,.4);
  vec3 col=mix(cool,mid,smoothstep(0.,.5,core));
  col=mix(col,warm,clamp(smoothstep(.25,1.,core)*(.4+.5*n1)+bulge*.5,0.,1.));
  vec3 c=col*lum*.52;
  // vùng khí phát xạ hồng & xanh ngọc dọc dải
  float em1=fbm(g*3.2+21.0), em2=fbm(g*3.6+41.0);
  c+=vec3(.95,.2,.45)*pow(em1,3.)*band*1.5*(1.-.7*dust);
  c+=vec3(.1,.5,.8)*pow(em2,3.)*band*1.2*(1.-.7*dust);
  // các tinh vân lớn
  for(int i=0;i<8;i++){
    vec4 h=uHero[i]; float a=acos(clamp(dot(d,h.xyz),-1.,1.)); float k=exp(-(a*a)/(h.w*h.w));
    if(k>.01){float nn=fbm(d*14.0+float(i)*7.3); float n3=fbm(d*34.0+float(i)*3.1); c+=uHeroCol[i]*k*(.12+1.5*nn*nn+.5*n3*nn);}
  }
  // ánh sáng nền rất nhẹ
  c+=vec3(.006,.008,.02)+vec3(.014,.008,.03)*fbm(d*1.6+9.0);
  if(uMask>0.) c*=mix(1.55,1.,smoothstep(.55,2.6,uMask));   // quả cầu nhỏ: sáng rực hơn, giảm dần khi bung ra
  c=1.-exp(-c*1.45);
  c=pow(c,vec3(.92));
  if(uMask>0.) c*=1.-.85*smoothstep(.75,1.,rho/uMask);
  gl_FragColor=vec4(c,1.0);
}`;
  const glc=document.createElement('canvas'), glCache=document.createElement('canvas'), gcx=glCache.getContext('2d'); let gl=null,glU={},useGL=false,frameNo=0;
  (function initGL(){
    try{
      gl=glc.getContext('webgl',{antialias:false,alpha:false,depth:false,stencil:false,powerPreference:'high-performance'})||glc.getContext('experimental-webgl');
      if(!gl) return;
      const sh=(t,s)=>{const o=gl.createShader(t);gl.shaderSource(o,s);gl.compileShader(o);if(!gl.getShaderParameter(o,gl.COMPILE_STATUS))throw new Error(gl.getShaderInfoLog(o));return o;};
      const pg=gl.createProgram();
      gl.attachShader(pg,sh(gl.VERTEX_SHADER,'attribute vec2 a;void main(){gl_Position=vec4(a,0.,1.);}'));
      gl.attachShader(pg,sh(gl.FRAGMENT_SHADER,FRAG)); gl.linkProgram(pg);
      if(!gl.getProgramParameter(pg,gl.LINK_STATUS)) throw new Error('link');
      gl.useProgram(pg);
      gl.bindBuffer(gl.ARRAY_BUFFER,gl.createBuffer()); gl.bufferData(gl.ARRAY_BUFFER,new Float32Array([-1,-1,3,-1,-1,3]),gl.STATIC_DRAW);
      const loc=gl.getAttribLocation(pg,'a'); gl.enableVertexAttribArray(loc); gl.vertexAttribPointer(loc,2,gl.FLOAT,false,0,0);
      ['uRes','uF','uR','uU','uK','uS','uMask','uE1','uE2','uN','uHero','uHeroCol'].forEach(n=>glU[n]=gl.getUniformLocation(pg,n));
      gl.uniform3fv(glU.uE1,e1); gl.uniform3fv(glU.uE2,e2); gl.uniform3fv(glU.uN,nG);
      const hv=new Float32Array(32), hc=new Float32Array(24);
      HEROES.forEach((h,i)=>{hv.set([h.d[0],h.d[1],h.d[2],h.r],i*4);hc.set(h.c,i*3);});
      gl.uniform4fv(glU.uHero,hv); gl.uniform3fv(glU.uHeroCol,hc);
      useGL=true;
    }catch(err){ useGL=false; console.warn('WebGL không khả dụng → dùng chế độ dự phòng',err); }
  })();

  /* ---------- texture vẽ sẵn (quầng sao, thiên hà xoắn ốc, + sprite dự phòng khi không có WebGL) ---------- */
  function makeGlow(rgb,size=128){
    const g=mk(size),x=g.getContext('2d'),m=size/2,gr=x.createRadialGradient(m,m,0,m,m,m);
    gr.addColorStop(0,`rgba(${rgb},1)`);gr.addColorStop(.2,`rgba(${rgb},.55)`);gr.addColorStop(.5,`rgba(${rgb},.16)`);gr.addColorStop(1,`rgba(${rgb},0)`);
    x.fillStyle=gr;x.fillRect(0,0,size,size);return g;
  }
  function makeCloud(cols,{size=256,blobs=80,spread=.34,amin=.07,amax=.2,dark=false}={}){
    const g=mk(size),x=g.getContext('2d');
    x.globalCompositeOperation=dark?'source-over':'lighter';
    for(let i=0;i<blobs;i++){
      const a=rr(0,TAU), d=Math.abs(gauss())*spread*size*.5;
      const px=size/2+Math.cos(a)*d, py=size/2+Math.sin(a)*d*.8, rad=rr(.05,.22)*size;
      const col=cols[(R()*cols.length)|0], al=rr(amin,amax);
      const gr=x.createRadialGradient(px,py,0,px,py,rad);
      gr.addColorStop(0,`rgba(${col},${al})`);gr.addColorStop(1,`rgba(${col},0)`);
      x.fillStyle=gr;x.fillRect(px-rad,py-rad,rad*2,rad*2);
    }
    x.globalCompositeOperation='destination-in';
    const m=x.createRadialGradient(size/2,size/2,size*.15,size/2,size/2,size/2);
    m.addColorStop(0,'#fff');m.addColorStop(1,'rgba(255,255,255,0)');x.fillStyle=m;x.fillRect(0,0,size,size);
    return g;
  }
  function makeGalaxy(size,tilt,rot){
    const g=mk(size),x=g.getContext('2d'),m=size/2;
    x.translate(m,m);x.rotate(rot);x.scale(1,tilt);x.globalCompositeOperation='lighter';
    let gr=x.createRadialGradient(0,0,0,0,0,m*.95);
    gr.addColorStop(0,'rgba(255,240,215,.6)');gr.addColorStop(.1,'rgba(255,220,170,.34)');gr.addColorStop(.35,'rgba(170,160,255,.12)');gr.addColorStop(1,'rgba(120,120,255,0)');
    x.fillStyle=gr;x.beginPath();x.arc(0,0,m*.95,0,TAU);x.fill();
    const N=size*34;
    for(let i=0;i<N;i++){
      const arm=i&1, u=Math.pow(R(),.78), th=u*3.5*Math.PI+.25, r=u*m*.9+gauss()*m*.03;
      const ang=th+arm*Math.PI+gauss()*(.12+.2*(1-u));
      const px=Math.cos(ang)*r, py=Math.sin(ang)*r, s=rr(.8,1.9), pink=R()<.05;
      const cr=pink?255:Math.round(255-85*u), cg=pink?120:Math.round(228-35*u), cb=pink?190:Math.round(185+70*u);
      x.fillStyle=`rgba(${cr},${cg},${cb},${rr(.22,.6)})`;x.fillRect(px,py,s,s);
    }
    for(let i=0;i<size*7;i++){
      const a=rr(0,TAU), r=Math.abs(gauss())*m*.11;
      x.fillStyle=`rgba(255,${Math.round(rr(205,240))},${Math.round(rr(150,200))},${rr(.2,.55)})`;
      x.fillRect(Math.cos(a)*r,Math.sin(a)*r,rr(.8,1.6),rr(.8,1.6));
    }
    return g;
  }
  const PAL=[[160,190,255],[205,222,255],[255,255,255],[255,244,225],[255,226,170],[255,190,130],[255,160,120]];
  const PALW=[.08,.14,.2,.2,.2,.12,.06];
  function pickPal(){let r=R(),i=0;for(;i<PALW.length-1;i++){r-=PALW[i];if(r<0)break;}return i;}
  function makeStarTex(rgb,spiky){
    const s=spiky?256:64,g=mk(s),x=g.getContext('2d'),m=s/2,col=rgb.join(',');
    const gr=x.createRadialGradient(m,m,0,m,m,m*(spiky?.26:1));
    gr.addColorStop(0,'rgba(255,255,255,1)');gr.addColorStop(.2,`rgba(${col},.85)`);gr.addColorStop(.55,`rgba(${col},.22)`);gr.addColorStop(1,`rgba(${col},0)`);
    x.fillStyle=gr;x.fillRect(0,0,s,s);
    if(spiky){
      for(const [ang,len,al] of [[0,1,.9],[Math.PI/2,1,.9],[Math.PI/4,.5,.3],[-Math.PI/4,.5,.3]]){
        x.save();x.translate(m,m);x.rotate(ang);
        const lg=x.createLinearGradient(-m*len,0,m*len,0);
        lg.addColorStop(0,`rgba(${col},0)`);lg.addColorStop(.5,`rgba(255,255,255,${al})`);lg.addColorStop(1,`rgba(${col},0)`);
        x.fillStyle=lg;x.fillRect(-m*len,-1.1,m*2*len,2.2);x.restore();
      }
    }
    return g;
  }
  const starGlow=PAL.map(p=>makeStarTex(p,false)), starSpiky=PAL.map(p=>makeStarTex(p,true));
  const SH=[];   // sprite chi tiết (thiên hà xoắn ốc)
  const addS=(list,dir,tex,size,a)=>list.push({v:dir,t:tex,s:size,a});
  addS(SH,gdir(1.7,.85),makeGalaxy(512,.36,-.5),.15,.9);
  addS(SH,gdir(-2.0,-.75),makeGalaxy(384,.55,.9),.075,.85);

  // chế độ dự phòng (không có WebGL): ghép từ sprite mờ
  const lo=document.createElement('canvas'), lc=lo.getContext('2d'); let LW=1,LH=1;
  const SL=[], SD=[];
  if(!useGL){
    const gW=makeGlow('215,225,255'),gY=makeGlow('255,214,150'),gB=makeGlow('150,180,255');
    const cl=[makeCloud(['255,80,140','255,130,180','200,70,200']),makeCloud(['90,130,255','60,180,255']),makeCloud(['160,90,255','120,70,230']),makeCloud(['40,230,190','60,190,255']),makeCloud(['255,170,60','255,120,60'])];
    const dk=[0,1,2].map(()=>makeCloud(['8,5,14'],{dark:true,amin:.05,amax:.14,blobs:110}));
    const sL=(core,s)=>{for(;;){const l=rr(-Math.PI,Math.PI),w=1+core*Math.exp(-(l*l)/(2*s*s));if(R()*(1+core)<w)return l;}};
    for(let i=0;i<(mobile?150:230);i++){const l=sL(2.5,.55),b=gauss()*.05,k=Math.exp(-(l*l)/(2*.55*.55));
      addS(SL,gdir(l,b),(k>.3&&R()<.65)?gY:(R()<.5?gB:gW),rr(.10,.26)*(1+.35*k),(.06+.08*k)*rr(.6,1.25));}
    addS(SL,gdir(0,0),gY,.62,.22);addS(SL,gdir(0,0),gY,.34,.34);
    for(let i=0;i<40;i++) addS(SL,gdir(sL(1.2,.9),gauss()*.075),cl[(R()*cl.length)|0],rr(.08,.2),rr(.3,.6));
    HEROES.forEach((h,i)=>addS(SL,h.d,cl[i%cl.length],h.r*1.1,.7));
    for(let i=0;i<70;i++) addS(SD,gdir(sL(2,.7),gauss()*.028),dk[(R()*3)|0],rr(.045,.12),rr(.5,1));
  }

  /* ---------- sao ---------- */
  // sao nền: chia theo màu × độ sáng để vẽ cực nhanh
  const LEVELS=[{a:.45,s:1,p:.58},{a:.75,s:1,p:.3},{a:.95,s:1.5,p:.12}];
  const buckets=[];
  PAL.forEach(p=>LEVELS.forEach(lv=>buckets.push({style:`rgba(${p[0]},${p[1]},${p[2]},${lv.a})`,size:lv.s,arr:[]})));
  // 78% sao nằm theo đúng độ sáng của Ngân Hà (tránh dải bụi), 22% rải đều khắp trời
  function sampleDir(){
    for(let tries=0;tries<400;tries++){
      const z=rr(-1,1),t=rr(0,TAU),s=Math.sqrt(1-z*z),d=[s*Math.cos(t),z,s*Math.sin(t)];
      if(tries===0&&R()<.22) return d;
      if(R()<Math.min(1,.02+.55*milkyLum(d))) return d;
    }
    return [0,1,0];
  }
  // Giữ bầu trời dày sao nhưng giảm bớt các điểm gần như không thể phân biệt trên màn hình nhỏ.
  // Mỗi điểm đều phải chiếu lại ở từng frame, nên mức này mượt hơn rõ rệt trên laptop/điện thoại.
  const nStars=mobile?4200:7800;
  for(let i=0;i<nStars;i++){
    const d=sampleDir(), ci=pickPal(); let r=R(),li=0; for(;li<2;li++){r-=LEVELS[li].p;if(r<0)break;}
    buckets[ci*3+li].arr.push(d[0],d[1],d[2]);
  }
  buckets.forEach(b=>b.arr=new Float32Array(b.arr));

  // sao sáng có quầng + tia nhiễu xạ
  const SB=[];
  const nBright=mobile?140:240;
  for(let i=0;i<nBright;i++){
    const mag=Math.pow(R(),3);
    SB.push({v:sampleDir(),mag,c:pickPal(),ph:rr(0,TAU),sp:rr(.8,2.6),spiky:mag>.78});
  }
  // cụm sao xanh (kiểu Pleiades)
  const clusterC=HEROES[6].d, cRight=norm(cross(nG,clusterC)), cUp=cross(clusterC,cRight);
  for(let i=0;i<11;i++){
    const ox=gauss()*.016, oy=gauss()*.016;
    SB.push({v:norm([clusterC[0]+cRight[0]*ox+cUp[0]*oy,clusterC[1]+cRight[1]*ox+cUp[1]*oy,clusterC[2]+cRight[2]*ox+cUp[2]*oy]),
      mag:rr(.3,.75),c:R()<.7?0:1,ph:rr(0,TAU),sp:rr(.8,2.4),spiky:i<3});
  }

  // chòm sao trái tim 💖
  const hy=Math.atan2(heartC[0],heartC[2]), hp=Math.asin(heartC[1]);
  const hR=[Math.cos(hy),0,-Math.sin(hy)], hU=[-Math.sin(hp)*Math.sin(hy),Math.cos(hp),-Math.sin(hp)*Math.cos(hy)];
  const heart=[];
  for(let i=0;i<18;i++){
    const t=i/18*TAU, x=16*Math.pow(Math.sin(t),3), y=13*Math.cos(t)-5*Math.cos(2*t)-2*Math.cos(3*t)-Math.cos(4*t)-3, k=.115/16;
    heart.push(norm([heartC[0]+hR[0]*x*k+hU[0]*y*k, heartC[1]+hR[1]*x*k+hU[1]*y*k, heartC[2]+hR[2]*x*k+hU[2]*y*k]));
  }

  /* ---------- 💖 TÌNH CẢM TRONG VŨ TRỤ ----------
     1) Chòm sao xếp thành dòng chữ "Happy Birthday" + TÊN crush (nối bằng đường sáng)
     2) Thông điệp tình cảm lơ lửng, hiện/mờ chậm giữa vũ trụ (CONFIG.loveNotes)
     3) Những ngôi sao hình trái tim nhấp nháy khắp bầu trời
     4) Một ngôi sao bí mật: tìm thấy và bấm vào để mở lời nhắn riêng                        */
  const sYaw=Math.atan2(startDir[0],startDir[2]), sPit=Math.asin(startDir[1])-.02;
  const starPink=makeStarTex([255,150,215],false), starLav=makeStarTex([190,170,255],false), starGold=makeStarTex([255,215,130],true);
  const heartTex=(function(){
    const s=64,g=mk(s),x=g.getContext('2d'),gr=x.createRadialGradient(32,33,2,32,33,32);
    gr.addColorStop(0,'rgba(255,150,215,.6)'); gr.addColorStop(1,'rgba(255,150,215,0)'); x.fillStyle=gr; x.fillRect(0,0,s,s);
    x.translate(32,34); heartPath(x,11); x.shadowColor='#ff4da6'; x.shadowBlur=10;
    const hg=x.createLinearGradient(0,-10,0,10); hg.addColorStop(0,'#ffffff'); hg.addColorStop(1,'#ff7ac6'); x.fillStyle=hg; x.fill();
    return g;
  })();
  const loveHearts=[]; for(let i=0;i<(mobile?16:28);i++) loveHearts.push({v:sampleDir(),s:rr(.7,1.3),ph:rr(0,TAU),sp:rr(.8,1.9)});
  const secret={v:gdir(-1.3,.32),pos:null};
  let loveT0=1e9;
  const tangent=(C)=>{const y=Math.atan2(C[0],C[2]),p=Math.asin(C[1]);return {R:[Math.cos(y),0,-Math.sin(y)],U:[-Math.sin(p)*Math.sin(y),Math.cos(p),-Math.sin(p)*Math.cos(y)]};};

  // (1) chòm sao chữ
  const banner={pts:[],edges:[],ready:false};
  function buildBanner(){
    const l1=(CONFIG.skyBanner||'').trim(), l2=(CONFIG.name||'').trim(), l3=BD?`Tuổi ${BD.age}`:''; if(!l1&&!l2&&!l3) return;
    // mỗi dòng: [chữ, font, cỡ chữ, bề ngang tối đa, chiều cao dòng]
    const rows=[
      l1&&[l1,'800 {s}px "Baloo 2",system-ui,sans-serif',120,1050,150],
      l2&&[l2,'{s}px Pacifico,cursive',210,1280,250],
      l3&&[l3,'800 {s}px "Baloo 2",system-ui,sans-serif',112,760,150]
    ].filter(Boolean);
    const cw=1400, ch=rows.reduce((n,r)=>n+r[4],0)+20, m=mk(cw,ch), x=m.getContext('2d');
    x.fillStyle='#fff'; x.textAlign='center'; x.textBaseline='middle';
    const fit=(t,f,sz,maxW)=>{x.font=f.replace('{s}',sz);const w=x.measureText(t).width;return w>maxW?sz*maxW/w:sz;};
    let yy=10;
    for(const [t,f,sz,mw,rh] of rows){ const s2=fit(t,f,sz,mw); x.font=f.replace('{s}',s2); x.fillText(t,cw/2,yy+rh/2); yy+=rh; }
    const d=x.getImageData(0,0,cw,ch).data, on=(px,py)=>px>=0&&py>=0&&px<cw&&py<ch&&d[((py|0)*cw+(px|0))*4+3]>128;
    // rải sao đều (lưới lục giác) lên phần chữ → nét chữ gồm nhiều vì sao, dễ đọc
    const cap=mobile?460:720; let step=mobile?13:10, pts;
    for(;;step+=1){
      pts=[]; const rowH=step*.866; let row=0;
      for(let py=step/2;py<ch;py+=rowH,row++)for(let px=step/2+((row&1)?step/2:0);px<cw;px+=step){
        const jx=px+rr(-1.5,1.5), jy=py+rr(-1.5,1.5); if(on(jx,jy)) pts.push([jx,jy]);
      }
      if(pts.length<=cap) break;
    }
    const C=vyp(sYaw-34*D2R, sPit+3*D2R), T=tangent(C), k=((mobile?52:70)*D2R)/1280;
    banner.pts=pts.map(p=>{
      const ox=(p[0]-cw/2)*k, oy=-(p[1]-ch/2)*k;
      return {v:norm([C[0]+T.R[0]*ox+T.U[0]*oy,C[1]+T.R[1]*ox+T.U[1]*oy,C[2]+T.R[2]*ox+T.U[2]*oy]),x:p[0],y:p[1],
        d:(p[0]/cw)*3, r:rr(1.3,2.6), c:(R()*3)|0, ph:rr(0,TAU), sp:rr(.8,2.6), sx:0, sy:0, ok:false};
    });
    for(let i=0;i<pts.length;i++)for(let j=i+1;j<pts.length;j++){ if(Math.hypot(pts[i][0]-pts[j][0],pts[i][1]-pts[j][1])<step*1.3&&R()<.62) banner.edges.push([i,j]); }
    banner.ready=true;
  }

  // (2) thông điệp lơ lửng
  const notes=[];
  function makeNoteTex(text){
    const font='600 40px "Baloo 2",system-ui,sans-serif', mw=620, t=mk(8,8).getContext('2d'); t.font=font;
    const lines=[]; let cur='';
    for(const w of text.split(/\s+/)){ const tt=cur?cur+' '+w:w; if(t.measureText(tt).width>mw&&cur){lines.push(cur);cur=w;} else cur=tt; } if(cur) lines.push(cur);
    const L=lines.slice(0,3), lw=Math.min(mw+40,Math.max(...L.map(l=>t.measureText(l).width))), w2=Math.ceil(lw+100), h2=L.length*58+70;
    const g=mk(w2,h2), x=g.getContext('2d'); x.font=font; x.textAlign='center'; x.textBaseline='middle';
    L.forEach((l,i)=>{ const y=h2/2+(i-(L.length-1)/2)*58;
      x.shadowColor='rgba(255,120,200,.95)'; x.shadowBlur=26; x.fillStyle='rgba(255,230,245,.96)'; x.fillText(l,w2/2,y);
      x.shadowColor='#fff'; x.shadowBlur=7; x.fillText(l,w2/2,y); });
    return g;
  }
  function buildNotes(){
    const list=(CONFIG.loveNotes||[]).filter(t=>t&&t.trim()), n=list.length, pit=[-10,12,-4,16,-14,8];
    list.forEach((t,i)=>notes.push({tex:makeNoteTex(t),yaw:sYaw+(8+i*360/n)*D2R,pit:sPit+pit[i%6]*D2R,phase:i*(15/n),v:[0,0,1]}));
  }
  // nạp đúng bộ ký tự (có dấu tiếng Việt) trước khi vẽ chữ lên bầu trời
  const vnTxt=[CONFIG.skyBanner,CONFIG.name,'Tuổi 0123456789',...(CONFIG.loveNotes||[])].join(' ');
  const fontsReady=(document.fonts&&document.fonts.load)?Promise.race([Promise.all([document.fonts.load('800 80px "Baloo 2"',vnTxt),document.fonts.load('120px Pacifico',vnTxt),document.fonts.load('600 40px "Baloo 2"',vnTxt)]),new Promise(r=>setTimeout(r,2500))]):Promise.resolve();
  fontsReady.catch(()=>{}).then(()=>{ try{ buildBanner(); buildNotes(); }catch(err){ console.warn('Không dựng được chữ trên bầu trời',err); } });

  const sstep2=(a,b,x)=>{const t=clamp((x-a)/(b-a),0,1);return t*t*(3-2*t);};
  function drawLove(cx,cy,K,sc){
    const tt=tAcc-loveT0-1.2;
    // sao hình trái tim
    for(const h of loveHearts){ if(!proj(h.v,cx,cy,K,tmp)) continue; const x=tmp[0],y=tmp[1]; if(x<-30||x>W+30||y<-30||y>H+30) continue;
      const r=(7+5*h.s)*sc; c.globalAlpha=(.35+.55*(.5+.5*Math.sin(tAcc*h.sp+h.ph)))*clamp(tt/1.5+.4,0,1); c.drawImage(heartTex,x-r,y-r,r*2,r*2); }
    c.globalAlpha=1;
    // chòm sao chữ
    if(banner.ready&&tt>0){
      const P=banner.pts; for(const p of P){ if(proj(p.v,cx,cy,K,tmp)){p.sx=tmp[0];p.sy=tmp[1];p.ok=true;}else p.ok=false; }
      c.lineCap='round';
      for(const [lw,al] of [[4.5,.07],[1.1,.42]]){
        c.strokeStyle=`rgba(215,190,255,${al*Math.min(1,tt/3)})`; c.lineWidth=lw*sc; c.beginPath();
        for(const e of banner.edges){ const a=P[e[0]],b=P[e[1]]; if(a.ok&&b.ok&&tt>Math.max(a.d,b.d)){c.moveTo(a.sx,a.sy);c.lineTo(b.sx,b.sy);} }
        c.stroke();
      }
      for(const p of P){ if(!p.ok) continue; const al=clamp((tt-p.d)/.9,0,1); if(al<=0) continue;
        const r=p.r*sc*(1+.5*Math.max(0,1-(tt-p.d)*1.2)), tw=.7+.3*Math.sin(tAcc*p.sp+p.ph);
        c.globalAlpha=al*tw; c.drawImage(p.c===0?starPink:(p.c===1?starGlow[2]:starLav),p.sx-r*2.2,p.sy-r*2.2,r*4.4,r*4.4); }
      c.globalAlpha=1;
    }
    // thông điệp lơ lửng
    for(const nt of notes){
      const ph=(tAcc+nt.phase)%15, a=sstep2(0,2.2,ph)*(1-sstep2(11.5,14,ph))*clamp(tt/2,0,1); if(a<=.01) continue;
      nt.v=vyp(nt.yaw,nt.pit+Math.sin(tAcc*.35+nt.phase)*.02);
      const v=nt.v, c0=v[0]*fx+v[1]*fy+v[2]*fz; if(!proj(v,cx,cy,K,tmp)) continue;
      const f=(curS===1)?K/c0:K*Math.tan(Math.acos(clamp(c0,-1,1))/curS)/Math.sqrt(Math.max(1e-10,1-c0*c0));
      const w=nt.tex.width*.0009*f, h=nt.tex.height*.0009*f; if(tmp[0]+w<0||tmp[0]-w>W||tmp[1]+h<0||tmp[1]-h>H) continue;
      c.globalAlpha=a*.95; c.drawImage(nt.tex,tmp[0]-w/2,tmp[1]-h/2+Math.sin(tAcc*.6+nt.phase)*4*sc,w,h);
    }
    c.globalAlpha=1;
    // ngôi sao bí mật
    if(orb.mode==='open'&&proj(secret.v,cx,cy,K,tmp)){
      const x=tmp[0],y=tmp[1]; secret.pos=[x/dpr,y/dpr];
      const S2=(20+6*Math.sin(tAcc*3.2))*sc; c.globalAlpha=.95; c.drawImage(starGold,x-S2,y-S2,S2*2,S2*2);
      const ph=(tAcc%2.6)/2.6; c.strokeStyle=`rgba(255,215,140,${.65*(1-ph)})`; c.lineWidth=1.6*sc; c.beginPath(); c.arc(x,y,(8+34*ph)*sc,0,TAU); c.stroke();
      c.globalAlpha=1;
    } else secret.pos=null;
  }

  /* ---------- camera ---------- */
  const view={yaw:Math.atan2(startDir[0],startDir[2]),pitch:Math.asin(startDir[1])-.02,fov:72*D2R,fovT:72*D2R,vy:0,vp:0};
  let idle=10, gyroOn=false, dragging=false;
  const FOV_MIN=34*D2R, FOV_MAX=92*D2R, GLS=mobile?.5:.6;

  function resize(){
    dpr=Math.min(window.devicePixelRatio||1,1.5);
    W=cv.width=Math.round(innerWidth*dpr); H=cv.height=Math.round(innerHeight*dpr);
    LW=lo.width=Math.ceil(W/2); LH=lo.height=Math.ceil(H/2);
  }
  addEventListener('resize',resize); resize();

  /* ---------- vẽ ---------- */
  let fx,fy,fz,rx,rz,ux,uy,uz, curS=1;
  function basis(){
    const sy=Math.sin(view.yaw),cy=Math.cos(view.yaw),sp=Math.sin(view.pitch),cp=Math.cos(view.pitch);
    fx=cp*sy;fy=sp;fz=cp*cy; rx=cy;rz=-sy; ux=-sp*sy;uy=cp;uz=-sp*cy;
  }
  /* Phép chiếu thống nhất:  ρ = K·tan(θ/S)
       S = 1 → ảnh thường (rectilinear, dùng khi đã mở ra)
       S = 2 → "hành tinh nhỏ" (stereographic): cả bầu trời bị CHỤM vào một quả cầu, dùng lúc chưa mở thư */
  const tmp=[0,0], tmp2=[0,0];
  function proj(v,cx,cy,K,out){
    const c0=v[0]*fx+v[1]*fy+v[2]*fz;
    if(curS===1){ if(c0<=.05) return false; const k=K/c0; out[0]=cx+k*(v[0]*rx+v[2]*rz); out[1]=cy-k*(v[0]*ux+v[1]*uy+v[2]*uz); return true; }
    const a=Math.acos(clamp(c0,-1,1))/curS; if(a>1.5) return false;
    const k=K*Math.tan(a)/Math.sqrt(Math.max(1e-10,1-c0*c0));
    out[0]=cx+k*(v[0]*rx+v[2]*rz); out[1]=cy-k*(v[0]*ux+v[1]*uy+v[2]*uz); return true;
  }
  function drawList(ctx,list,cx,cy,K){
    for(let i=0;i<list.length;i++){
      const s=list[i],v=s.v; if(!proj(v,cx,cy,K,tmp2)) continue;
      const c0=v[0]*fx+v[1]*fy+v[2]*fz; let px;
      if(curS===1){ if(c0<=.1) continue; px=s.s*K/c0; }
      else px=s.s*K*Math.tan(Math.acos(clamp(c0,-1,1))/curS)/Math.sqrt(Math.max(1e-10,1-c0*c0));
      const sx=tmp2[0], sy=tmp2[1];
      if(sx+px<0||sx-px>cx*2||sy+px<0||sy-px>cy*2) continue;
      ctx.globalAlpha=s.a; ctx.drawImage(s.t,sx-px,sy-px,px*2,px*2);
    }
    ctx.globalAlpha=1;
  }

  // trạng thái mở thư: 'orb' (thiên hà chụm thành quả cầu) → 'opening' (bung ra) → 'open' (360° toàn màn hình)
  const orb={mode:'orb',t0:0,dur:3600,cb:null};

  // sao băng (toạ độ màn hình)
  let shooters=[], nextShot=2;
  function spawnShooter(){
    const left=Math.random()<.5, sp=rand(14,24)*dpr, ang=rand(.25,.6);
    shooters.push({x:left?rand(0,W*.6):rand(W*.4,W),y:rand(0,H*.45),vx:(left?1:-1)*Math.cos(ang)*sp,vy:Math.sin(ang)*sp,life:1,len:rand(110,220)*dpr,
      col:['255,255,255','190,215,255','255,225,190'][(Math.random()*3)|0]});
  }

  let last=performance.now(), tAcc=0;
  function frame(now){
    requestAnimationFrame(frame);
    if(document.hidden){last=now;return;}
    const dt=Math.min(.05,(now-last)/1000); last=now; tAcc+=dt;

    // camera: quán tính, tự xoay khi rảnh, zoom mượt
    if(!dragging){
      view.yaw+=view.vy*dt; view.pitch+=view.vp*dt;
      const dec=Math.exp(-2.6*dt); view.vy*=dec; view.vp*=dec;
      idle+=dt;
      if(idle>2.5&&!gyroOn) view.yaw+=dt*(orb.mode==='open'?.04:.10)*Math.min(1,(idle-2.5)/2);
    }
    view.pitch=clamp(view.pitch,-1.45,1.45);
    view.fov+=(view.fovT-view.fov)*Math.min(1,dt*4);
    focal=(H/2)/Math.tan(view.fov/2);
    basis();

    // ---- chụm → mở: tính độ chụm S, bán kính quả cầu Rpx, tiêu cự K ----
    let S=1,Rpx=0,K=focal;
    if(orb.mode!=='open'){
      const R0=Math.min(W,H)*(mobile?.30:.28);
      let e=0;
      if(orb.mode==='opening'){
        const u=clamp((now-orb.t0)/orb.dur,0,1);
        e=u<.5?4*u*u*u:1-Math.pow(-2*u+2,3)/2;                 // easeInOutCubic
        if(u>=1){orb.mode='open'; const f=orb.cb; orb.cb=null; if(f) setTimeout(f,0);}
      }
      if(orb.mode!=='open'){
        const R1=R0*(1+.015*Math.sin(tAcc*1.4)), Rend=Math.hypot(W,H)*.62;
        S=2-e; Rpx=R1+(Rend-R1)*Math.pow(e,1.7);
        const Ks=R0/Math.tan(60*D2R);                              // quả cầu chứa ~240° bầu trời
        K=Math.exp(Math.log(Ks)*(1-e)+Math.log(focal)*e);
      }
    }
    curS=S;
    const cx=W/2, cy=H/2, sc=dpr;

    // 1) Ngân Hà + tinh vân
    c.globalCompositeOperation='source-over';
    if(useGL){
      const gw=Math.max(2,Math.round(innerWidth*GLS)), gh=Math.max(2,Math.round(innerHeight*GLS));
      if(glc.width!==gw||glc.height!==gh){glc.width=gw;glc.height=gh;}
      const fast=dragging||Math.abs(view.vy)>.05||Math.abs(view.vp)>.05||Math.abs(view.fovT-view.fov)>.002||gyroOn||orb.mode==='opening';
      if(fast||(frameNo++&1)===0||glCache.width!==gw){   // chuyển động chậm → chỉ cần vẽ lại Ngân Hà mỗi 2 khung
        gl.viewport(0,0,gw,gh);
        gl.uniform2f(glU.uRes,gw,gh); gl.uniform3f(glU.uF,fx,fy,fz); gl.uniform3f(glU.uR,rx,0,rz); gl.uniform3f(glU.uU,ux,uy,uz);
        gl.uniform1f(glU.uK,K/(H/2)); gl.uniform1f(glU.uS,S); gl.uniform1f(glU.uMask,Rpx?Rpx/(H/2):0);
        gl.drawArrays(gl.TRIANGLES,0,3);
        if(glCache.width!==gw||glCache.height!==gh){glCache.width=gw;glCache.height=gh;}
        gcx.drawImage(glc,0,0);
      }
      c.imageSmoothingEnabled=true; c.drawImage(glCache,0,0,W,H);
    }else{
      lc.globalCompositeOperation='source-over'; lc.fillStyle='#000'; lc.fillRect(0,0,LW,LH);
      lc.save(); if(Rpx){lc.beginPath();lc.arc(LW/2,LH/2,Rpx/2,0,TAU);lc.clip();}
      lc.globalCompositeOperation='lighter'; drawList(lc,SL,LW/2,LH/2,K/2); lc.restore();
      c.fillStyle='#01020a'; c.fillRect(0,0,W,H); c.drawImage(lo,0,0,W,H);
    }

    // 2) sao nền (hàng nghìn) — khi chụm thì chỉ vẽ trong quả cầu
    c.globalCompositeOperation='lighter';
    c.save();
    if(Rpx){c.beginPath();c.arc(cx,cy,Rpx,0,TAU);c.clip();}
    const R2=Rpx?Rpx*Rpx:1e18;
    for(let bi=0;bi<buckets.length;bi++){
      const B=buckets[bi],a=B.arr,sz=B.size*sc; c.fillStyle=B.style;
      if(S===1){
        for(let i=0;i<a.length;i+=3){
          const x=a[i],y=a[i+1],z=a[i+2], zc=x*fx+y*fy+z*fz; if(zc<=.05) continue;
          const sx=cx+K*(x*rx+z*rz)/zc; if(sx<-2||sx>W+2) continue;
          const sy=cy-K*(x*ux+y*uy+z*uz)/zc; if(sy<-2||sy>H+2) continue;
          c.fillRect(sx,sy,sz,sz);
        }
      }else{
        for(let i=0;i<a.length;i+=3){
          const x=a[i],y=a[i+1],z=a[i+2], c0=x*fx+y*fy+z*fz;
          const ang=Math.acos(c0>1?1:c0<-1?-1:c0)/S; if(ang>1.5) continue;
          const k=K*Math.tan(ang)/Math.sqrt(Math.max(1e-10,1-c0*c0));
          const sx=cx+k*(x*rx+z*rz), sy=cy-k*(x*ux+y*uy+z*uz), dx=sx-cx, dy=sy-cy;
          if(dx*dx+dy*dy>R2) continue;
          c.fillRect(sx,sy,sz,sz);
        }
      }
    }

    // 3) dải bụi (chế độ dự phòng) + thiên hà xoắn ốc
    if(!useGL){ c.globalCompositeOperation='source-over'; drawList(c,SD,cx,cy,K); c.globalCompositeOperation='lighter'; }
    drawList(c,SH,cx,cy,K);

    // 4) sao sáng có quầng + tia
    for(let i=0;i<SB.length;i++){
      const s=SB[i]; if(!proj(s.v,cx,cy,K,tmp)) continue;
      const x=tmp[0],y=tmp[1]; if(x<-60||x>W+60||y<-60||y>H+60) continue;
      const tw=.78+.22*Math.sin(tAcc*s.sp+s.ph), r=(2.2+s.mag*7)*sc;
      c.globalAlpha=tw;
      if(s.spiky){const S2=r*3.6;c.drawImage(starSpiky[s.c],x-S2,y-S2,S2*2,S2*2);}
      else{c.drawImage(starGlow[s.c],x-r,y-r,r*2,r*2);}
    }

    // 5) chòm sao trái tim
    const pulse=.55+.45*Math.sin(tAcc*2.2), hp2=[0,0], pts=[];
    for(let i=0;i<heart.length;i++){pts.push(proj(heart[i],cx,cy,K,hp2)?[hp2[0],hp2[1]]:null);}
    c.lineCap='round'; c.lineJoin='round';
    for(const [lw,al] of [[5,.07],[2.4,.22*pulse+.12],[1,.55]]){
      c.strokeStyle=`rgba(255,150,215,${al})`; c.lineWidth=lw*sc;
      c.beginPath(); let pen=false;
      for(let i=0;i<=pts.length;i++){const p=pts[i%pts.length]; if(!p){pen=false;continue;} if(pen)c.lineTo(p[0],p[1]);else c.moveTo(p[0],p[1]); pen=true;}
      c.stroke();
    }
    for(let i=0;i<pts.length;i++){
      const p=pts[i]; if(!p) continue;
      const r=(6+3*Math.sin(tAcc*2.2+i))*sc; c.globalAlpha=.95;
      c.drawImage(starGlow[i%2?2:0],p[0]-r,p[1]-r,r*2,r*2);
      c.drawImage(starGlow[2],p[0]-r*.45,p[1]-r*.45,r*.9,r*.9);
    }
    c.globalAlpha=1;
    if(orb.mode!=='orb') drawLove(cx,cy,K,sc);   // tình cảm: chữ sao, thông điệp, sao tim, sao bí mật
    c.restore();

    // viền quả cầu: tối dần ra mép + vành sáng
    if(Rpx){
      c.globalCompositeOperation='source-over';
      const g=c.createRadialGradient(cx,cy,Rpx*.72,cx,cy,Rpx);
      g.addColorStop(0,'rgba(1,2,10,0)'); g.addColorStop(1,'rgba(1,2,10,.93)');
      c.fillStyle=g; c.beginPath(); c.arc(cx,cy,Rpx+1,0,TAU); c.fill();
      c.globalCompositeOperation='lighter'; c.lineWidth=2*sc; c.strokeStyle='rgba(185,165,255,.4)';
      c.beginPath(); c.arc(cx,cy,Rpx,0,TAU); c.stroke();
    }

    // 6) sao băng (chỉ khi đã mở hẳn)
    c.globalCompositeOperation='lighter';
    if(orb.mode==='open'){ nextShot-=dt; if(nextShot<=0){spawnShooter();nextShot=rand(1.5,4);} }
    shooters=shooters.filter(s=>s.life>0);
    for(const s of shooters){
      s.x+=s.vx; s.y+=s.vy; s.life-=.014;
      const k=Math.hypot(s.vx,s.vy), x2=s.x-s.vx/k*s.len, y2=s.y-s.vy/k*s.len;
      const g=c.createLinearGradient(s.x,s.y,x2,y2); g.addColorStop(0,`rgba(${s.col},1)`); g.addColorStop(1,`rgba(${s.col},0)`);
      c.globalAlpha=Math.max(0,s.life); c.strokeStyle=g; c.lineWidth=2.2*sc; c.lineCap='round';
      c.beginPath(); c.moveTo(s.x,s.y); c.lineTo(x2,y2); c.stroke();
      const r=7*sc; c.drawImage(starGlow[2],s.x-r,s.y-r,r*2,r*2);
    }
    c.globalAlpha=1; c.globalCompositeOperation='source-over';
  }
  requestAnimationFrame(frame);

  /* ---------- điều khiển: kéo xoay, zoom, chạm ---------- */
  const ptrs=new Map(); let moved=0,tDown=0,lastMove=0,pinch=0;
  const pdist=()=>{const a=[...ptrs.values()];return Math.hypot(a[0].x-a[1].x,a[0].y-a[1].y);};
  const api={enabled:false,onTap:null,onSecret:null,usingWebGL:useGL};

  addEventListener('pointerdown',e=>{
    if(!api.enabled||e.target.closest('button,.glass,.balloon,.envelope,a')) return;
    ptrs.set(e.pointerId,{x:e.clientX,y:e.clientY}); idle=0;
    if(ptrs.size===1){dragging=true;moved=0;tDown=performance.now();view.vy=view.vp=0;document.body.classList.add('dragging');}
    if(ptrs.size===2) pinch=pdist();
  });
  addEventListener('pointermove',e=>{
    const p=ptrs.get(e.pointerId); if(!p) return;
    const dx=e.clientX-p.x, dy=e.clientY-p.y; p.x=e.clientX; p.y=e.clientY; idle=0;
    if(ptrs.size===1){
      const k=view.fov/innerHeight, t=performance.now(), dtm=Math.max(.008,(t-lastMove)/1000); lastMove=t;
      view.yaw-=dx*k; view.pitch+=dy*k; moved+=Math.abs(dx)+Math.abs(dy);
      view.vy=.6*view.vy+.4*(-dx*k/dtm); view.vp=.6*view.vp+.4*(dy*k/dtm);
    }else if(ptrs.size===2){
      const d=pdist(); if(pinch) view.fovT=clamp(view.fovT*pinch/d,FOV_MIN,FOV_MAX); pinch=d;
    }
  });
  const up=e=>{
    if(!ptrs.has(e.pointerId)) return; ptrs.delete(e.pointerId); pinch=0;
    if(ptrs.size===0){
      dragging=false; document.body.classList.remove('dragging');
      if(performance.now()-lastMove>90){view.vy=view.vp=0;}
      if(moved<8&&performance.now()-tDown<400){
        if(orb.mode==='open'&&secret.pos&&Math.hypot(secret.pos[0]-e.clientX,secret.pos[1]-e.clientY)<40){ if(api.onSecret) api.onSecret(); }
        else if(api.onTap) api.onTap(e.clientX,e.clientY);
      }
    }
  };
  addEventListener('pointerup',up); addEventListener('pointercancel',up);
  addEventListener('wheel',e=>{ if(!api.enabled||e.target.closest('.glass')) return; e.preventDefault(); idle=0;
    view.fovT=clamp(view.fovT*Math.exp(e.deltaY*.0011),FOV_MIN,FOV_MAX); },{passive:false});
  addEventListener('keydown',e=>{
    const k=view.fov*.08; idle=0;
    if(e.key==='ArrowLeft') view.yaw-=k; else if(e.key==='ArrowRight') view.yaw+=k;
    else if(e.key==='ArrowUp') view.pitch+=k; else if(e.key==='ArrowDown') view.pitch-=k;
  });

  /* ---------- la bàn điện thoại (gyroscope) ---------- */
  let yawOff=null;
  function onOrient(e){
    if(e.alpha==null||e.beta==null) return;
    if(yawOff===null) yawOff=view.yaw+e.alpha*D2R;
    view.yaw=yawOff-e.alpha*D2R; view.pitch=clamp((e.beta-90)*D2R,-1.4,1.4); view.vy=view.vp=0; idle=0;
  }
  async function toggleGyro(){
    if(gyroOn){gyroOn=false;removeEventListener('deviceorientation',onOrient);$('#gyroBtn').classList.remove('on');return;}
    try{
      if(typeof DeviceOrientationEvent!=='undefined'&&typeof DeviceOrientationEvent.requestPermission==='function'){
        const r=await DeviceOrientationEvent.requestPermission(); if(r!=='granted') return;
      }
      yawOff=null; addEventListener('deviceorientation',onOrient); gyroOn=true; $('#gyroBtn').classList.add('on');
    }catch(err){}
  }
  if(mobile && 'DeviceOrientationEvent' in window){ $('#gyroBtn').classList.remove('hidden'); $('#gyroBtn').addEventListener('click',toggleGyro); }

  /* ---------- hiệu ứng "nhảy vào vũ trụ" khi mở quà + công cụ kiểm thử ---------- */
  api.openOrb=function(cb){ if(orb.mode!=='orb') return; loveT0=tAcc; orb.mode='opening'; orb.t0=performance.now(); orb.cb=cb||null; };
  api.warp=function(){ view.fov=105*D2R; view.fovT=72*D2R; view.vy=1.1; idle=0; };
  api.lookAt=function(yawDeg,pitchDeg,fovDeg){ view.yaw=yawDeg*D2R; view.pitch=pitchDeg*D2R; view.vy=view.vp=0; if(fovDeg){view.fov=view.fovT=fovDeg*D2R;} idle=-1e6; };
  return api;
})();

/* ---- đếm ngược ---- */
let cdTimer=null;
(function initCountdown(){
  const el=$('#countdown');
  if(!CONFIG.birthday){ el.classList.add('hidden'); return; }
  const target=new Date(CONFIG.birthday+(CONFIG.birthday.length<=16?':00+07:00':'')).getTime();
  if(isNaN(target)){ el.classList.add('hidden'); return; }
  const who=CONFIG.shortName||CONFIG.name||'bạn';
  const label=`<div class="cd-label">⏳ Đếm ngược đến sinh nhật ${who}${BD?` (${BD.label})`:''}</div>`;
  function render(){
    let d=target-Date.now();
    if(d<=0){
      if(-d>36*3600000){ el.classList.add('hidden'); clearInterval(cdTimer); return; }   // đã qua > 36 giờ → ẩn
      el.innerHTML=`<div class="glass cd" style="min-width:auto;padding:10px 22px"><b style="font-size:1.4rem">🎂 Hôm nay là sinh nhật của ${who} rồi!</b></div>`; return;
    }
    const x=[['Ngày',86400000],['Giờ',3600000],['Phút',60000],['Giây',1000]];
    el.innerHTML=label+x.map(([l,ms])=>{const v=Math.floor(d/ms); d-=v*ms; return `<div class="glass cd"><b>${String(v).padStart(2,'0')}</b><span>${l}</span></div>`}).join('');
  }
  render(); cdTimer=setInterval(render,1000);
})();

/* ---- confetti + pháo hoa (canvas) ---- */
const cv=$('#confetti'), ctx=cv.getContext('2d');
const FX_MOBILE=matchMedia('(pointer:coarse)').matches||innerWidth<700;
const MAX_PARTS=FX_MOBILE?360:520;
let W,H,parts=[],fxDpr=1;
function resize(){
  // DPR 2–3 làm canvas có số pixel gấp 4–9 lần dù mắt thường gần như không thấy khác biệt.
  fxDpr=Math.min(devicePixelRatio||1,FX_MOBILE?1.25:1.5);
  W=cv.width=Math.round(innerWidth*fxDpr); H=cv.height=Math.round(innerHeight*fxDpr);
}
addEventListener('resize',resize); resize();
const DPR=()=>fxDpr;

function confettiBurst(x,y,n=90,power=1){
  for(let i=0;i<n;i++){
    const a=rand(0,Math.PI*2), v=rand(4,13)*power*DPR();
    parts.push({x:x*DPR(),y:y*DPR(),vx:Math.cos(a)*v,vy:Math.sin(a)*v-rand(2,6)*DPR(),
      g:.22*DPR(),s:rand(6,12)*DPR(),c:COLORS[(Math.random()*COLORS.length)|0],
      r:rand(0,6.28),vr:rand(-.3,.3),life:rand(90,170),shape:Math.random()<.35?'c':'r'});
  }
}
function confettiRain(ms=3500){
  const t0=performance.now();
  (function drop(){
    for(let i=0;i<5;i++) parts.push({x:rand(0,W),y:-20,vx:rand(-1.5,1.5)*DPR(),vy:rand(2,5)*DPR(),
      g:.04*DPR(),s:rand(6,11)*DPR(),c:COLORS[(Math.random()*COLORS.length)|0],r:rand(0,6.28),vr:rand(-.2,.2),life:260,shape:Math.random()<.3?'c':'r'});
    if(performance.now()-t0<ms) requestAnimationFrame(drop);
  })();
}
function firework(x,y){
  const col=COLORS[(Math.random()*7)|0], n=FX_MOBILE?44:56;
  for(let i=0;i<n;i++){
    const a=i/n*Math.PI*2, v=rand(3,9)*DPR();
    parts.push({x:x*DPR(),y:y*DPR(),vx:Math.cos(a)*v,vy:Math.sin(a)*v,g:.06*DPR(),s:rand(3,5)*DPR(),c:Math.random()<.7?col:'#fff',r:0,vr:0,life:rand(60,100),shape:'s'});
  }
}
const HEART_COLORS=['#ff4d9d','#ff7ac6','#ff9fd0','#c77dff','#9b5cff','#ff4d6d','#ffffff'];
const sparkTextures=new Map();
function sparkTexture(color){
  color=color==='#fff'?'#ffffff':color;
  if(sparkTextures.has(color)) return sparkTextures.get(color);
  const g=document.createElement('canvas'), s=40; g.width=g.height=s;
  const x=g.getContext('2d'), r=x.createRadialGradient(s/2,s/2,0,s/2,s/2,s/2);
  r.addColorStop(0,'#fff'); r.addColorStop(.16,'#fff'); r.addColorStop(.38,color); r.addColorStop(1,'transparent');
  x.fillStyle=r; x.fillRect(0,0,s,s); sparkTextures.set(color,g); return g;
}
COLORS.forEach(sparkTexture);
function loop(){
  if(document.hidden||!parts.length){requestAnimationFrame(loop);return;}
  ctx.clearRect(0,0,W,H);
  if(parts.length>MAX_PARTS) parts.splice(0,parts.length-MAX_PARTS);
  parts=parts.filter(p=>p.life>0 && p.y<H+50 && p.y>-90);
  for(const p of parts){
    if(p.shape==='h'){                       // trái tim bay lên, đung đưa
      p.ph+=.03; p.x+=Math.sin(p.ph)*p.amp*DPR(); p.y+=p.vy; p.life--;
      ctx.save(); ctx.translate(p.x,p.y);
      ctx.globalAlpha=Math.min(1,(H-p.y)/(H*.14),p.y/(H*.22),1)*.92; ctx.rotate(Math.sin(p.ph)*.25);
      ctx.shadowColor=p.c; ctx.shadowBlur=16*DPR(); ctx.fillStyle=p.c; heartPath(ctx,p.s); ctx.fill();
      ctx.restore();
    }else if(p.shape==='hb'){                // trái tim nở ra khi chạm
      p.x+=p.vx; p.y+=p.vy; p.vx*=.96; p.vy=p.vy*.96-.03*DPR(); p.life--;
      ctx.save(); ctx.translate(p.x,p.y);
      ctx.globalAlpha=Math.min(1,p.life/30); ctx.rotate(p.r);
      ctx.shadowColor=p.c; ctx.shadowBlur=14*DPR(); ctx.fillStyle=p.c; heartPath(ctx,p.s); ctx.fill();
      ctx.restore();
    }else{
      p.vy+=p.g; p.x+=p.vx; p.y+=p.vy; p.vx*=.985; p.r+=p.vr; p.life--;
      ctx.globalAlpha=Math.min(1,p.life/30); ctx.fillStyle=p.c;
      if(p.shape==='c'){ctx.beginPath();ctx.arc(p.x,p.y,p.s/2,0,6.28);ctx.fill();}
      else if(p.shape==='s'){
        // Sprite đã có quầng sáng: tránh shadowBlur đắt đỏ cho hàng trăm hạt ở mỗi frame.
        const r=p.s*2.6; ctx.drawImage(sparkTexture(p.c),p.x-r,p.y-r,r*2,r*2);
      }else{
        ctx.save(); ctx.translate(p.x,p.y); ctx.rotate(p.r); ctx.fillRect(-p.s/2,-p.s/4,p.s,p.s/2); ctx.restore();
      }
    }
  }
  ctx.globalAlpha=1;
  requestAnimationFrame(loop);
}
loop();
/* 💖 mưa trái tim bay lên từ dưới màn hình + trái tim nở ra khi chạm */
function spawnRiseHeart(){
  parts.push({shape:'h',x:rand(.04,.96)*W,y:H+30*DPR(),vy:-rand(.9,2.1)*DPR(),s:rand(9,20)*DPR(),c:HEART_COLORS[(Math.random()*HEART_COLORS.length)|0],ph:rand(0,6.28),amp:rand(.3,1.0),life:2000});
}
let heartRainTimer=null;
function startHeartRain(){
  if(heartRainTimer) return;
  const cap=innerWidth<600?8:14;
  for(let i=0;i<5;i++) setTimeout(spawnRiseHeart,i*350);
  heartRainTimer=setInterval(()=>{ if(!document.hidden && parts.filter(p=>p.shape==='h').length<cap) spawnRiseHeart(); },650);
}
function heartBurst(x,y,n=12){
  for(let i=0;i<n;i++){
    const a=rand(0,6.28), v=rand(1.5,5.5)*DPR();
    parts.push({shape:'hb',x:x*DPR(),y:y*DPR(),vx:Math.cos(a)*v,vy:Math.sin(a)*v-1.5*DPR(),s:rand(8,17)*DPR(),r:rand(-.5,.5),c:HEART_COLORS[(Math.random()*HEART_COLORS.length)|0],life:rand(70,110)});
  }
}
function fireworksShow(count=7){
  for(let i=0;i<count;i++) setTimeout(()=>{
    firework(rand(innerWidth*.12,innerWidth*.88),rand(innerHeight*.12,innerHeight*.5)); pop(rand(180,320));
  },i*350);
}
/* tự động bắn pháo hoa + mưa confetti liên tục */
let autoFx=null;
function startAutoFireworks(){
  if(autoFx) return;
  const shoot=()=>{
    if(document.hidden) return;
    const n=Math.random()<.4?2:1;
    for(let i=0;i<n;i++) setTimeout(()=>firework(rand(innerWidth*.1,innerWidth*.9),rand(innerHeight*.1,innerHeight*.5)),i*250);
  };
  shoot(); autoFx=setInterval(shoot,2200);
}

/* ---- âm thanh (Web Audio, không cần file ngoài) ---- */
let actx=null, masterGain=null;
function audio(){
  if(!actx){ actx=new (window.AudioContext||window.webkitAudioContext)(); masterGain=actx.createGain(); masterGain.gain.value=.5; masterGain.connect(actx.destination); }
  if(actx.state==='suspended') actx.resume();
  return actx;
}
function tone(freq,start,dur,type='triangle',vol=.25){
  const a=audio(), o=a.createOscillator(), g=a.createGain();
  o.type=type; o.frequency.value=freq; o.connect(g); g.connect(masterGain);
  g.gain.setValueAtTime(0,start); g.gain.linearRampToValueAtTime(vol,start+.02);
  g.gain.exponentialRampToValueAtTime(.001,start+dur); o.start(start); o.stop(start+dur+.05);
}
function pop(f=260){ try{const a=audio(),t=a.currentTime,k=(typeof Music!=='undefined'&&Music.on)?.3:1; tone(f,t,.12,'square',.12*k); tone(f*2,t,.08,'sine',.1*k);}catch(e){} }
/* ---- nhạc nền: phát file mp3 "Show You Off" do bạn bỏ vào thư mục music ---- */
const Music=(()=>{
  const cfg=CONFIG.music||{}, list=(cfg.files||[]).filter(Boolean), btn=$('#musicBtn');
  let el=null, idx=0, want=false, usable=true, loaded=false, fadeT=null, retryBound=false, guardT=null;
  const target=()=>Math.max(0,Math.min(1,cfg.volume==null?.8:cfg.volume));
  const ui=on=>{ btn.classList.toggle('on',on); btn.textContent=on?'🎶':'🎵'; };
  const url=i=>new URL(list[i],location.href).href;           // tự mã hoá dấu cách trong tên file

  function build(){
    const startAt=cfg.startAt>0?cfg.startAt:0;
    el=new Audio(); el.preload='auto'; el.volume=0;
    el.loop=cfg.loop!==false && !startAt;                      // lặp vô hạn (nếu có startAt thì tự quay lại đúng giây đó ở sự kiện "ended")
    el.addEventListener('error',()=>{
      if(loaded){                                              // đã phát được rồi mà lỗi giữa chừng (mạng chập chờn…) → nạp lại chính file đó
        const t=el.currentTime; el.load(); try{ el.currentTime=t; }catch(e){} if(want) tryPlay(); return;
      }
      if(idx<list.length-1){ idx++; el.src=url(idx); el.load(); if(want) tryPlay(); }   // file không có / không đọc được → thử tên kế tiếp
      else{ usable=false; want=false; ui(false); clearInterval(guardT); console.info('[Nhạc] Chưa tìm thấy file mp3. Hãy bỏ bài hát vào thư mục "music" theo CONFIG.music.files.'); }
    });
    el.addEventListener('loadedmetadata',()=>{ loaded=true; if(startAt && startAt<(el.duration||1e9)) try{ el.currentTime=startAt; }catch(e){} },{once:true});
    el.addEventListener('ended',()=>{                          // hết bài → phát lại ngay, không bao giờ tự dừng
      if(!want||cfg.loop===false) return;
      try{ el.currentTime=startAt; }catch(e){} tryPlay();
    });
    if(list.length){ el.src=url(0); }
    // người gác cửa: nếu trình duyệt tự tạm dừng nhạc (đổi tab, cuộc gọi, ngắt âm thanh…) mà người dùng chưa tắt → phát tiếp
    guardT=setInterval(()=>{ if(want&&usable&&el&&el.paused&&!retryBound) tryPlay(); },1500);
  }
  function fadeTo(v,ms,done){
    clearInterval(fadeT);
    if(!ms){ el.volume=v; if(done) done(); return; }
    const v0=el.volume, t0=performance.now();
    fadeT=setInterval(()=>{
      const k=Math.min(1,(performance.now()-t0)/ms);
      el.volume=Math.max(0,Math.min(1,v0+(v-v0)*k));
      if(k>=1){ clearInterval(fadeT); if(done) done(); }
    },40);
  }
  function tryPlay(){
    if(!el||!want||!usable) return;
    const p=el.play();
    if(p&&p.catch) p.catch(err=>{
      if(err&&err.name==='NotAllowedError'&&want&&!retryBound){   // trình duyệt chặn tự phát → phát ở lần chạm tiếp theo
        retryBound=true;
        const again=()=>{ retryBound=false; tryPlay(); };
        addEventListener('pointerdown',again,{once:true}); addEventListener('keydown',again,{once:true});
      }
    });
    fadeTo(target(),cfg.fadeIn==null?1800:cfg.fadeIn);
  }
  function start(){
    if(!list.length||!usable){ ui(false); return; }
    if(!el) build();
    want=true; ui(true); tryPlay();
  }
  function stop(){
    want=false; ui(false);
    if(el){ fadeTo(0,350,()=>{ if(!want) el.pause(); }); }
  }
  btn.addEventListener('click',()=> want?stop():start());
  // chuyển tab / thu nhỏ trình duyệt vẫn phát tiếp; nếu điện thoại có tạm dừng khi khoá màn hình thì quay lại sẽ phát tiếp
  document.addEventListener('visibilitychange',()=>{ if(!document.hidden && el && want && el.paused) tryPlay(); });
  addEventListener('pageshow',()=>{ if(el && want && el.paused) tryPlay(); });
  return {start,stop,get on(){ return want; }};
})();
function startMusic(){ Music.start(); }
function stopMusic(){ Music.stop(); }

/* ---- bóng bay (tự động bay liên tục, vừa phải để không che bầu trời) ---- */
function spawnBalloon(){
  const b=document.createElement('div'); b.className='balloon';
  const c=COLORS[(Math.random()*7)|0];
  b.style.background=`radial-gradient(circle at 30% 30%, #fff8 0 8%, ${c} 40%)`;
  b.style.left=rand(2,92)+'vw';
  const s=rand(.8,1.3); b.style.width=64*s+'px'; b.style.height=80*s+'px';
  b.style.animationDuration=rand(10,18)+'s';
  b.addEventListener('click',()=>{
    const r=b.getBoundingClientRect();
    confettiBurst(r.left+r.width/2,r.top+r.height/2,40,.8); pop(rand(300,600)); b.remove();
  });
  b.addEventListener('animationend',()=>b.remove());
  $('#balloons').appendChild(b);
}
let balloonTimer=null;
function startBalloons(){
  const cap=innerWidth<600?3:5;
  for(let i=0;i<3;i++) setTimeout(spawnBalloon,i*700);
  balloonTimer=setInterval(()=>{ if(!document.hidden && $('#balloons').children.length<cap) spawnBalloon(); },1500);
}

/* ---- vòm bóng bay hồng vàng: 2 dải chạy từ cạnh tiêu đề ra góc trên rồi dọc xuống tận đáy màn hình (nằm sau ảnh) ---- */
const Garland=(function(){
  const SOLID={ rose:['#ffddd6','#e5a49c','#a65d63'], blush:['#fff1ef','#f7c6c6','#cf8d96'], deep:['#f8c3ba','#d68781','#8f4b53'], champ:['#fff4d4','#f3cf80','#b98b30'] };
  const SOLID_KEYS=['rose','rose','blush','blush','deep','deep','champ'];
  const GOLD=['#f6cb55','#ffe38f','#dca531'], ROSE=['#f2a7a2','#ffcdc8','#d98583'];
  const mulberry=(a)=>()=>{ a|=0; a=a+0x6D2B79F5|0; let t=Math.imul(a^a>>>15,1|a); t=t+Math.imul(t^t>>>7,61|t)^t; return ((t^t>>>14)>>>0)/4294967296; };
  const f=(n)=>n.toFixed(1);
  const body=(cx,cy,rx,ry)=>`M${f(cx)},${f(cy+ry)} C${f(cx-rx*.35)},${f(cy+ry*.9)} ${f(cx-rx)},${f(cy+ry*.35)} ${f(cx-rx)},${f(cy-ry*.15)} C${f(cx-rx)},${f(cy-ry*.75)} ${f(cx-rx*.6)},${f(cy-ry)} ${f(cx)},${f(cy-ry)} C${f(cx+rx*.6)},${f(cy-ry)} ${f(cx+rx)},${f(cy-ry*.75)} ${f(cx+rx)},${f(cy-ry*.15)} C${f(cx+rx)},${f(cy+ry*.35)} ${f(cx+rx*.35)},${f(cy+ry*.9)} ${f(cx)},${f(cy+ry)}Z`;
  const knot=(cx,cy,ry,fill)=>`<path d="M${f(cx)},${f(cy+ry-1)} L${f(cx-4.5)},${f(cy+ry+6.5)} L${f(cx+4.5)},${f(cy+ry+6.5)}Z" fill="${fill}"/>`;
  const shine=(cx,cy,rx,ry,o)=>`<ellipse cx="${f(cx-rx*.4)}" cy="${f(cy-ry*.42)}" rx="${f(rx*.17)}" ry="${f(ry*.3)}" transform="rotate(-24 ${f(cx-rx*.4)} ${f(cy-ry*.42)})" fill="#fff" opacity="${o}"/><circle cx="${f(cx-rx*.18)}" cy="${f(cy-ry*.78)}" r="${f(rx*.07)}" fill="#fff" opacity="${o}"/>`;

  // vẽ 1 quả bóng / bóng bạc tại (x,y); k: s=bóng tròn, c=trong suốt kim tuyến, h=tim bạc, st=sao bạc
  function one(o,uid,rnd){
    let g='';
    if(o.k==='s'){
      g=`<path d="${body(o.x,o.y,o.rx,o.ry)}" fill="url(#${uid}${o.c})"/>`+knot(o.x,o.y,o.ry,SOLID[o.c][2])+shine(o.x,o.y,o.rx,o.ry,.7);
    }else if(o.k==='c'){
      let dots=''; const main=o.gold?GOLD:ROSE, alt=o.gold?ROSE:GOLD;
      for(let i=0;i<10;i++){
        const an=rnd()*6.283, rd=Math.sqrt(rnd())*.8, pal=rnd()<.72?main:alt;
        dots+=`<circle cx="${f(o.x+Math.cos(an)*o.rx*rd)}" cy="${f(o.y-o.ry*.04+Math.sin(an)*o.ry*rd*.92)}" r="${f(Math.max(1.2,o.rx*(.05+rnd()*.05)))}" fill="${pal[(rnd()*3)|0]}"/>`;
      }
      g=`<path d="${body(o.x,o.y,o.rx,o.ry)}" fill="url(#${uid}cl)" stroke="rgba(255,238,238,.6)" stroke-width="1"/>`+dots+knot(o.x,o.y,o.ry,'rgba(255,235,235,.55)')+shine(o.x,o.y,o.rx,o.ry,.75);
    }else if(o.k==='h'){
      const w=o.w,h=o.h, d=`M0,${f(h)} C${f(-w*.2)},${f(h*.75)} ${f(-w)},${f(h*.3)} ${f(-w)},${f(-h*.3)} C${f(-w)},${f(-h*.85)} ${f(-w*.25)},${f(-h*.95)} 0,${f(-h*.45)} C${f(w*.25)},${f(-h*.95)} ${f(w)},${f(-h*.85)} ${f(w)},${f(-h*.3)} C${f(w)},${f(h*.3)} ${f(w*.2)},${f(h*.75)} 0,${f(h)}Z`;
      g=`<path d="${d}" fill="url(#${uid}fo)" stroke="#fff" stroke-opacity=".55" stroke-width="1.3" stroke-linejoin="round"/>`
       +`<path d="${d}" transform="translate(0 2) scale(.8)" fill="none" stroke="#fff" stroke-opacity=".3" stroke-width="1"/>`
       +`<path d="M${f(-w*.7)},${f(-h*.2)} C${f(-w*.76)},${f(-h*.5)} ${f(-w*.58)},${f(-h*.68)} ${f(-w*.36)},${f(-h*.6)}" fill="none" stroke="#fff" stroke-opacity=".75" stroke-width="3" stroke-linecap="round"/>`
       +`<path d="M${f(w*.62)},${f(-h*.42)} q${f(w*.1)},${f(h*.1)} ${f(w*.08)},${f(h*.3)}" fill="none" stroke="#fff" stroke-opacity=".45" stroke-width="2" stroke-linecap="round"/>`;
      return `<g transform="translate(${f(o.x)} ${f(o.y)}) rotate(${f(o.rot)})">${g}</g>`;
    }else{
      const Rr=o.R, r2=Rr*.47, P=[], Q=[];
      for(let k=0;k<5;k++){ const a=(-90+k*72)*Math.PI/180, a2=a+Math.PI/5; P.push([Rr*Math.cos(a),Rr*Math.sin(a)]); Q.push([r2*Math.cos(a2),r2*Math.sin(a2)]); }
      let path='',facets='';
      for(let k=0;k<5;k++){ const Pn=P[(k+1)%5];
        path+=(k?'L':'M')+f(P[k][0])+','+f(P[k][1])+' L'+f(Q[k][0])+','+f(Q[k][1])+' ';
        facets+=`<path d="M0,0 L${f(P[k][0])},${f(P[k][1])} L${f(Q[k][0])},${f(Q[k][1])}Z" fill="#fff" opacity=".3"/><path d="M0,0 L${f(Q[k][0])},${f(Q[k][1])} L${f(Pn[0])},${f(Pn[1])}Z" fill="#7a2f45" opacity=".2"/>`; }
      const sw=Math.max(3,Rr*.17);
      g=`<path d="${path}Z" fill="url(#${uid}fo)" stroke="#eba5a0" stroke-width="${f(sw)}" stroke-linejoin="round"/>${facets}<path d="${path}Z" fill="none" stroke="#fff" stroke-opacity=".5" stroke-width="1.2" stroke-linejoin="round"/>`;
      return `<g transform="translate(${f(o.x)} ${f(o.y)}) rotate(${f(o.rot)})">${g}</g>`;
    }
    return `<g transform="rotate(${f(o.rot)} ${f(o.x)} ${f(o.y)})">${g}</g>`;
  }
  const defs=(uid)=>{
    let d=`<radialGradient id="${uid}cl" cx=".35" cy=".3" r=".9"><stop offset="0" stop-color="#fff" stop-opacity=".1"/><stop offset=".7" stop-color="#ffeaea" stop-opacity=".17"/><stop offset="1" stop-color="#fff" stop-opacity=".4"/></radialGradient>`
         +`<linearGradient id="${uid}fo" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#ffece7"/><stop offset=".35" stop-color="#f5b8b2"/><stop offset=".68" stop-color="#e2918f"/><stop offset="1" stop-color="#b86468"/></linearGradient>`;
    for(const k in SOLID){ const [lt,bs,dk]=SOLID[k]; d+=`<radialGradient id="${uid}${k}" cx=".33" cy=".28" r=".85"><stop offset="0" stop-color="${lt}"/><stop offset=".5" stop-color="${bs}"/><stop offset="1" stop-color="${dk}"/></radialGradient>`; }
    return `<defs>${d}</defs>`;
  };
  // đường cong Catmull-Rom đi qua các điểm → chuỗi điểm dày + độ dài lũy kế
  function spline(P){
    const out=[]; const g=(i)=>P[Math.max(0,Math.min(P.length-1,i))];
    for(let i=0;i<P.length-1;i++){
      const p0=g(i-1),p1=g(i),p2=g(i+1),p3=g(i+2), seg=24;
      for(let t=0;t<seg;t++){ const u=t/seg,u2=u*u,u3=u2*u;
        out.push([.5*((2*p1[0])+(-p0[0]+p2[0])*u+(2*p0[0]-5*p1[0]+4*p2[0]-p3[0])*u2+(-p0[0]+3*p1[0]-3*p2[0]+p3[0])*u3),
                  .5*((2*p1[1])+(-p0[1]+p2[1])*u+(2*p0[1]-5*p1[1]+4*p2[1]-p3[1])*u2+(-p0[1]+3*p1[1]-3*p2[1]+p3[1])*u3)]); }
    }
    out.push(P[P.length-1]);
    const cum=[0]; for(let i=1;i<out.length;i++) cum.push(cum[i-1]+Math.hypot(out[i][0]-out[i-1][0],out[i][1]-out[i-1][1]));
    return {pts:out,cum,len:cum[cum.length-1]};
  }
  function at(sp,d){ // điểm + hướng tại quãng đường d
    let lo=0,hi=sp.cum.length-1; while(lo<hi-1){ const m=(lo+hi)>>1; if(sp.cum[m]<=d) lo=m; else hi=m; }
    const a=sp.pts[lo],b=sp.pts[Math.min(lo+1,sp.pts.length-1)], l=Math.hypot(b[0]-a[0],b[1]-a[1])||1, t=Math.max(0,Math.min(1,(d-sp.cum[lo])/l));
    return {x:a[0]+(b[0]-a[0])*t,y:a[1]+(b[1]-a[1])*t,nx:-(b[1]-a[1])/l,ny:(b[0]-a[0])/l};
  }
  let host=null,timer=null;
  function build(){
    const main=$('#main'); if(!main||main.classList.contains('hidden')) return;
    const W=main.clientWidth,H=main.clientHeight; if(!W||!H) return;
    const D=Math.max(44,Math.min(78,Math.min(W,H)*.075)), T=D*(W<700?1.55:1.9);
    // vùng chữ tiêu đề: bóng bay không được chạm vào
    const mr=main.getBoundingClientRect(); let L0=1e9,R0=-1e9,B0=0;
    ['.title-small','.rainbow','.name','.age-chip'].forEach(s=>{ const e=main.querySelector(s); if(!e) return; const r=e.getBoundingClientRect(); if(!r.width) return;
      L0=Math.min(L0,r.left-mr.left); R0=Math.max(R0,r.right-mr.left); B0=Math.max(B0,r.bottom-mr.top); });
    if(L0>R0){ L0=W/2-190; R0=W/2+190; B0=130; }
    L0-=14; R0+=14; B0+=8;
    if(!host){ host=document.createElement('div'); host.id='garland'; host.setAttribute('aria-hidden','true'); main.insertBefore(host,main.firstChild); }
    const wide=W>=700, ctr=[
      ...(wide?[[W/2-150,D*2.15],[W*.33,D*1.2],[W*.16,D*.72]]:[]),
      [D*1.1,D*.8],[D*.62,D*2.3],[D*.55,H*.45],[D*.6,H*.8],[D*.5,H+D]
    ];
    let html='', sparks='';
    ['l','r'].forEach(side=>{
      const mir=side==='r', rnd=mulberry(mir?91:17);
      const sp=spline(mir?ctr.map(p=>[W-p[0],p[1]]):ctr), n=Math.round((W<700?3.2:4)*sp.len/D);
      const layers={b:'',f:''};
      for(let i=0;i<n;i++){
        const u=(i+rnd()*.8)/n, d=u*sp.len, c=at(sp,d), off=(rnd()-.5)*T, taper=Math.min(1,.62+u*5);
        const x=c.x+c.nx*off+(rnd()-.5)*D*.3, y=c.y+c.ny*off+(rnd()-.5)*D*.3, sz=(.78+rnd()*.47)*taper, r=rnd();
        const rx=D*.42*sz, ry=rx*1.22, ex=Math.max(rx,ry)*1.05;
        if(x+ex>L0&&x-ex<R0&&y-ex<B0) continue;               // dính vào cụm chữ tiêu đề → bỏ
        if(y-ex>H+10||y+ex<-10||x+ex<-10||x-ex>W+10) continue;  // nằm ngoài màn hình
        const rot=(rnd()-.5)*36; let o;
        if(r<.05)      o={k:'h',x,y,w:D*.46*sz,h:D*.44*sz,rot};
        else if(r<.10) o={k:'st',x,y,R:D*.52*sz,rot};
        else if(r<.46) o={k:'c',x,y,rx,ry,rot,gold:rnd()<.55};
        else           o={k:'s',x,y,rx,ry,rot,c:SOLID_KEYS[(rnd()*SOLID_KEYS.length)|0]};
        const back=rnd()<.5; layers[back?'b':'f']+=one(o,'g'+side+(back?'b':'f'),rnd);
      }
      for(let i=0;i<9;i++){ const c=at(sp,rnd()*sp.len), off=(rnd()-.5)*T*1.2, x=c.x+c.nx*off, y=c.y+c.ny*off;
        if(x>L0&&x<R0&&y<B0) continue; if(x<4||x>W-4||y<4||y>H-4) continue;
        sparks+=`<i class="gsp" style="left:${f(x)}px;top:${f(y)}px;--s:${f(7+rnd()*7)}px;--d:${f(-rnd()*3)}s"></i>`; }
      const x0=mir?W/2:0, w=W/2;
      ['b','f'].forEach((ly,li)=>{
        html+=`<div class="gl ${side}" style="left:${mir?'50%':'0'};width:${f(w)}px;height:${H}px"><svg class="gs ${ly}" width="${f(w)}" height="${H}" viewBox="${f(x0)} 0 ${f(w)} ${H}" style="--t:${(5.2+li*1.3+(mir?.9:0)).toFixed(1)}s;--d:${(-li*2.4-(mir?1.5:0)).toFixed(1)}s">${defs('g'+side+ly)}${layers[ly]}</svg></div>`;
      });
    });
    host.innerHTML=html+sparks;
    if(!host.classList.contains('in')) setTimeout(()=>host.classList.add('in'),1600);
  }
  addEventListener('resize',()=>{ clearTimeout(timer); timer=setTimeout(build,250); });
  return {build};
})();

/* ---- ảnh bánh sinh nhật ---- */
const Cake=(function(){
  const photos=(CONFIG.cakePhotos||[]).filter(p=>p&&p.src), img=$('#cakeImg'), emoji=$('#cakeFallback');
  let idx=0, started=false;
  $('#cakeCaption').textContent=CONFIG.cakeCaption||'';
  function tryLoad(){
    if(idx>=photos.length){ img.remove(); return; }              // hết ảnh để thử → giữ biểu tượng 🎂
    const p=photos[idx];
    img.onload=()=>{ img.classList.add('ok'); emoji.style.display='none'; };
    img.onerror=()=>{ idx++; tryLoad(); };
    img.src=p.src;
  }
  function load(){ if(started) return; started=true; tryLoad(); Phones.load(); }   // tải trước trong lúc thiệp đang viết
  return {load};
})();

/* ---- ảnh trong khung iPhone hai bên ảnh bánh ---- */
const Phones=(function(){
  let list=[], ready=false, S=0, slots=[], timer=null, tick=0;
  const boxL=$('#phonesL'), boxR=$('#phonesR');
  function load(){
    const src=(CONFIG.phonePhotos||[]).map(x=>typeof x==='string'?{src:x}:x).filter(x=>x&&x.src);
    let pending=src.length; if(!pending){ ready=true; return; }
    const ok=[];
    src.forEach((p,i)=>setTimeout(()=>{ const im=new Image();
      im.decoding='async'; im.fetchPriority='low';
      im.onload=()=>{ ok.push([i,p]); fin(); }; im.onerror=()=>fin(); im.src=p.src;
    },i*160));      // giãn tải/giải mã ảnh để không tranh tài nguyên với hiệu ứng mở thiệp
    function fin(){ if(--pending>0) return; list=ok.sort((a,b)=>a[0]-b[0]).map(x=>x[1]); ready=true; if($('#cake').classList.contains('show')) layoutCake(); }
  }
  function phoneEl(){
    const d=document.createElement('div'); d.className='phone solo';
    d.innerHTML='<div class="dev"><i class="sb a"></i><i class="sb v1"></i><i class="sb v2"></i><i class="sb pw"></i>'+
      '<div class="scr"><img class="a" alt="" decoding="async"><img class="b" alt="" decoding="async">'+
      '<span class="st"><b>9:41</b><u></u></span><i class="isl"></i><i class="hb"></i></div></div>';
    return d;
  }
  function setPhoto(slot,p){
    const nxt=slot.imgs[1-slot.cur], old=slot.imgs[slot.cur];
    const apply=()=>{ nxt.classList.add('on'); old.classList.remove('on'); slot.cur=1-slot.cur; slot.photo=p; };
    nxt.style.objectPosition=p.pos||'50% 50%';
    if(slot.card){ nxt.style.transformOrigin=p.at||'50% 40%'; nxt.style.transform=p.zoom>1?`scale(${p.zoom})`:''; }   // polaroid: phóng to quanh mặt
    nxt.onload=apply; nxt.src=p.src; if(nxt.complete&&nxt.naturalWidth) apply();
  }
  // tấm ảnh polaroid (khung trắng trơn, không băng keo, không biểu tượng), lấp ló sau chiếc iPhone
  function cardEl(j){
    const d=document.createElement('div'); d.className='pcard c'+(j+1);
    d.innerHTML='<div class="ph"><img class="a" alt="" decoding="async"><img class="b" alt="" decoding="async"></div>';
    return d;
  }
  // n=1: mỗi bên 1 iPhone; n=2 ("bộ sưu tập"): mỗi bên 1 iPhone + 2 polaroid
  // thứ tự gán ảnh: iPhone-trái, iPhone-phải, polaroid trên-trái, trên-phải, dưới-trái, dưới-phải
  function build(n){
    if(n===S&&(S===0||slots.length)) return;               // không đổi → giữ nguyên (tránh dựng lại khi đổi cỡ cửa sổ)
    S=n; slots=[]; boxL.textContent=''; boxR.textContent=''; stop();
    if(!S||!list.length) return;
    const pl=phoneEl(), pr=phoneEl(), els=[pl,pr];
    boxL.appendChild(pl); boxR.appendChild(pr);
    if(S===2){
      const l1=cardEl(0), r1=cardEl(0), l2=cardEl(1), r2=cardEl(1);
      boxL.append(l1,l2); boxR.append(r1,r2);
      els.push(l1,r1,l2,r2);
    }
    els.forEach(e=>slots.push({el:e,imgs:[...e.querySelectorAll('img')],cur:0,photo:null,card:e.classList.contains('pcard')}));
    slots.forEach((sl,i)=>setPhoto(sl,list[i%list.length]));
    if($('#cake').classList.contains('show')) start();
  }
  function start(){   // nhiều ảnh hơn số máy → lần lượt đổi ảnh từng máy
    stop(); if(slots.length<1||list.length<=slots.length) return;
    timer=setInterval(()=>{
      const sl=slots[tick++%slots.length], shown=new Set(slots.map(x=>x.photo));
      const cand=list.filter(p=>!shown.has(p)); if(!cand.length) return;
      setPhoto(sl,cand[(tick>>1)%cand.length]);
    },4200);
  }
  function stop(){ clearInterval(timer); timer=null; }
  return {load,build,start,stop,count:()=>list.length,get ready(){return ready;},get slots(){return S;}};
})();

let cakeShownOnce=false;
/* đặt khung ảnh vào đúng vùng trống: dưới chip "Tuổi mới" và trên hàng nút → không bao giờ che chữ tuổi;
   hai bên là các khung iPhone, tự chọn số máy & cỡ máy cho vừa chiều ngang màn hình */
function layoutCake(){
  const cake=$('#cake'), r=e=>e.getBoundingClientRect(), W=innerWidth;
  const top=Math.max(r($('#ageChip')).bottom, r($('#crushName')).bottom)+26,   // chừa chỗ cho nút ✕ nhô lên trên khung
        bottom=innerHeight-22, availH=bottom-top;
  const n=Phones.count();
  // kiểu hiển thị mỗi bên: 0 (chưa có ảnh) / 1 (1 iPhone) / 2 (1 iPhone + 2 polaroid) — kiểu 2 cần ≥3 ảnh và màn đủ rộng
  const plan=(S)=>{ const ratio=S===2?.44:(W<600?.44:.5), g=S===2?1.85:1.1;       // ratio = bề rộng máy / bề rộng ảnh bánh; g = bề rộng cả cụm / bề rộng 1 máy
    const pMax=S?(W-28)/(1+2*ratio*g):(W*.88-56); return {S,ratio,pMax:Math.min(660,pMax)}; };
  let pl=n?plan(n>=3&&W>=900?2:1):plan(0);
  cake.classList.toggle('tight',availH<420);                                   // vùng trống thấp → thu gọn viền & chữ
  // thử từ ảnh to nhất, đo chiều cao thật của khung (kể cả khi chữ bị xuống dòng) rồi thu nhỏ cho vừa vùng trống
  const fit=(pMax)=>{ let ph=Math.max(110,pMax);
    for(let i=0;i<8;i++){ cake.style.width=(ph+56)+'px'; const h=cake.offsetHeight; if(h<=availH||ph<=110) break; ph=Math.max(110,ph-(h-availH)-2); }
    return ph; };
  // cỡ máy: bị giới hạn bởi bề ngang còn trống hai bên ảnh bánh và bởi chiều cao vùng trống (máy nghiêng cần thêm chỗ)
  const calcPw=(S,photo)=>{ if(!S) return 0;
    const g=S===2?1.85:1.1, vf=1.14;
    const pwW=(W-16-(photo+56)+44)/(2*g), pwH=availH/(vf*2.1667);
    return Math.floor(Math.max(44,Math.min(pwW,pwH,photo*.9,310))); };
  let photo=fit(pl.pMax), pw=calcPw(pl.S,photo);
  if(pl.S===2&&pw<135){ pl=plan(1); photo=fit(pl.pMax); pw=calcPw(1,photo); }   // màn thấp/hẹp: polaroid sẽ quá nhỏ → chỉ dùng 1 iPhone mỗi bên
  Phones.build(pl.S);
  // polaroid sau iPhone: chỗ trống còn lại bên ngoài iPhone càng nhiều thì tấm ảnh càng to và càng ít bị iPhone che
  if(pl.S===2){
    const free=((W-(photo+56))/2+22-pw-12)/pw;                          // chỗ trống phía ngoài iPhone (đơn vị = bề rộng iPhone)
    const cw=Math.max(.62,Math.min(.86,free+.1));                       // bề rộng polaroid
    const o2=Math.max(-.02,cw-(free-.06)), o1=o2+.08;                   // phần bị iPhone che (tấm trên che nhiều hơn tấm dưới một chút)
    cake.style.setProperty('--cw',cw.toFixed(3)); cake.style.setProperty('--o1',o1.toFixed(3)); cake.style.setProperty('--o2',o2.toFixed(3));
  }
  cake.style.setProperty('--pw',pw+'px'); cake.classList.toggle('sm',pw<100);
  const h=cake.offsetHeight;
  cake.style.top=(top+Math.max(0,(availH-h)/2)+h/2)+'px';
}
addEventListener('resize',()=>{ if($('#cake').classList.contains('show')) layoutCake(); });
function toggleCake(show){
  if(show) layoutCake();
  document.body.classList.toggle('cake-open',!!show);
  $('#cake').classList.toggle('show',show);
  if(show) Phones.start(); else Phones.stop();
  if(show){
    toggleWish(false); toggleSecret(false);
    if(!cakeShownOnce){ cakeShownOnce=true; heartBurst(innerWidth/2,innerHeight/2,22); confettiBurst(innerWidth/2,innerHeight/2,90,1.2); }
  }
}
$('#cakeClose').addEventListener('click',()=>toggleCake(false));

/* ---- thẻ lời chúc ---- */
let wishShownOnce=false;
function toggleWish(show){
  if(show) toggleCake(false);
  $('#wish').classList.toggle('show',show);
  if(show&&!wishShownOnce){ wishShownOnce=true; fireworksShow(4); }
}
$('#wishClose').addEventListener('click',()=>toggleWish(false));

/* ---- thiệp thư tay: chữ hiện từ từ từ trái sang phải ---- */
const Letter=(function(){
  const chars=[]; let ti=0, timer=null, done=false, started=false;
  const caret=document.createElement('span'); caret.className='caret';
  const view=$('#letterView'), card=$('#card'), inner=$('#cardInner'), btn=$('#cardBtn'), skipHint=$('#cardSkip');
  const fill=t=>t.replace(/\{date\}/g, BD?`${BD.d} tháng ${BD.m}`:'').replace(/\{age\}/g, BD?BD.age:'');

  // gói từng chữ vào <span> (ẩn sẵn) → bố cục cố định ngay từ đầu, chữ chỉ "hiện dần" nên không bị nhảy dòng
  function addText(el,text){
    const words=fill(text).normalize('NFC').split(' ');
    words.forEach((w,i)=>{
      const ws=document.createElement('span'); ws.className='w';
      for(const ch of Array.from(w)){ const c=document.createElement('span'); c.className='c'; c.textContent=ch; ws.appendChild(c); chars.push(c); }
      el.appendChild(ws); if(i<words.length-1) el.appendChild(document.createTextNode(' '));
    });
    if(chars.length) chars[chars.length-1].dataset.end='1';        // chữ cuối của đoạn → nghỉ lâu hơn
  }
  function build(){
    const real=t=>t&&t.trim()&&!t.startsWith('✏️')&&!t.startsWith('Hãy thay');
    const wishPara=(CONFIG.wishes||[]).filter(real).join(' ');
    const paras=[...(CONFIG.letterBefore||[]), wishPara, ...(CONFIG.letterAfter||[])].filter(real);
    if(CONFIG.letterGreeting) addText($('#cardGreet'),CONFIG.letterGreeting); else $('#cardGreet').remove();
    paras.forEach(t=>{ const p=document.createElement('p'); addText(p,t); $('#cardBody').appendChild(p); });
    const end=[CONFIG.letterEnd, CONFIG.from?('— '+CONFIG.from):''].filter(Boolean).join('  ');
    if(end) addText($('#cardSign'),end); else $('#cardSign').remove();
    btn.textContent=CONFIG.letterBtn||'✨ Mở cả vũ trụ nào';
  }

  // cánh hoa & trái tim rơi nhẹ phía sau thiệp
  function petals(){
    const box=$('#petals'), n=(matchMedia('(pointer:coarse)').matches||innerWidth<700)?9:16; box.innerHTML='';
    for(let i=0;i<n;i++){
      const e=document.createElement('i'), heart=Math.random()<.3, sz=heart?rand(12,22):rand(11,20);
      e.className=heart?'h':'p'; if(heart) e.textContent='♥';
      e.style.cssText=`left:${rand(-2,100)}%;width:${heart?'auto':sz+'px'};height:${heart?'auto':sz*1.15+'px'};font-size:${sz}px;`+
        `--dx:${rand(-120,120)}px;--rot:${rand(240,720)}deg;animation-duration:${rand(8,15)}s;animation-delay:${-rand(0,14)}s`;
      box.appendChild(e);
    }
  }

  const delay=(c)=>{
    const t=c.textContent, sp=CONFIG.typeSpeed||38; let d=sp*(.75+Math.random()*.6);
    if(',;'.includes(t)) d+=sp*6; else if('.!?…'.includes(t)) d+=sp*10; else if(t.codePointAt(0)>0x2000) d+=sp*8;   // dấu phẩy / chấm / emoji → ngập ngừng
    if(c.dataset.end) d+=sp*14;                                                                                     // hết đoạn
    return d;
  };
  function keepVisible(c){
    if(inner.scrollHeight<=inner.clientHeight+4) return;
    const r=c.getBoundingClientRect(), b=inner.getBoundingClientRect();
    if(r.bottom>b.bottom-18) inner.scrollTop+=r.bottom-b.bottom+54;
  }
  let sparkN=0;
  function step(){
    if(done) return;
    if(ti>=chars.length){ finish(false); return; }
    const c=chars[ti++]; c.classList.add('on'); c.after(caret); keepVisible(c);
    if(++sparkN%22===0){ const r=c.getBoundingClientRect(); if(r.width) heartBurst(r.left+r.width/2,r.top,1); }   // vài trái tim nhỏ bay ra theo đầu bút
    timer=setTimeout(step,delay(c));
  }
  function finish(skipped){
    if(done) return; done=true; clearTimeout(timer);
    if(skipped) chars.forEach(c=>{c.classList.add('on'); c.style.animation='none';});
    caret.remove(); skipHint.classList.add('gone');
    setTimeout(()=>btn.classList.add('show'),skipped?200:600);
    if(skipped) inner.scrollTop=0;
  }
  function open(){
    if(started) return; started=true; build(); petals(); Cake.load();
    view.classList.remove('hidden'); void view.offsetWidth; view.classList.add('show');
    if(chars.length) chars[0].before(caret);
    setTimeout(step,1700);                                        // đợi thiệp bay ra xong rồi mới bắt đầu viết
  }
  function close(){ card.classList.add('closing'); view.classList.remove('show'); setTimeout(()=>view.classList.add('hidden'),950); }
  card.addEventListener('click',()=>{ if(started&&!done) finish(true); });
  return {open,close,btn};
})();

/* ---- mở phong thư → thiệp thư tay → bấm nút → thiên hà đang chụm bung ra thành vũ trụ 360° ---- */
let opened=false, universeOpening=false;
$('#envelope').addEventListener('click',()=>{
  if(opened) return; opened=true;
  const env=$('#envelope');
  env.classList.add('opened');                       // nắp thư mở, lá thư trượt lên
  try{ startMusic(); }catch(e){}
  setTimeout(()=>{
    $('#intro').classList.add('leaving');            // chữ ở màn đầu mờ đi
    const r=env.getBoundingClientRect();
    heartBurst(r.left+r.width/2,r.top+r.height/2,26);
    confettiBurst(r.left+r.width/2,r.top+r.height/2,70,1.1);
    env.classList.add('out');                        // phong thư mờ dần, nhường chỗ cho thiệp
    Letter.open();                                   // thiệp thư tay hiện ra, chữ chạy từ từ
  },1100);
});
Letter.btn.addEventListener('click',()=>{
  if(universeOpening) return; universeOpening=true;
  Letter.close();                                    // thiệp phóng to rồi mờ đi
  setTimeout(()=>{
    confettiBurst(innerWidth/2,innerHeight/2,150,1.3);
    Sky.openOrb(()=>{                                // thiên hà bung ra xong → vào chế độ 360°
      $('#intro').classList.add('hidden'); $('#main').classList.remove('hidden');
      Garland.build();
      document.body.classList.add('sky-mode'); Sky.enabled=true;
      startBalloons(); startAutoFireworks(); startHeartRain(); fireworksShow(4);
      toggleCake(true);                                 // ảnh bánh sinh nhật + ảnh crush hiện ra ngay khi vũ trụ vừa mở
    });
  },450);
});

/* chạm nhẹ vào bầu trời → lấp lánh */
Sky.onTap=(x,y)=>{ if(opened) heartBurst(x,y,12); };
function toggleSecret(show){ $('#secret').classList.toggle('show',show); }
Sky.onSecret=()=>{
  toggleWish(false); toggleCake(false); toggleSecret(true);
  const cx=innerWidth/2, cy=innerHeight/2; heartBurst(cx,cy,46); fireworksShow(3);
};
$('#secretClose').addEventListener('click',()=>toggleSecret(false));
