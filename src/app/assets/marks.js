/*音标分类*/
/*
type vowel 元音 consonant 辅音
cate l 长元音 s 短元音 c清辅音 m浊辅音
sub 0 单元音 1双元音
* */

export const SoundMarks =[
    //长元音
    {
        dump:true,
        title:"长元音"
    },
    {
        type:"vowel",
        sub:0,
        cate:'l',
        name:"iː",
        sound:require( '../../static/mp3/iː.mp3'),
    },
    {
        type:"vowel",
        sub:0,
        cate:'l',
        name:"ɜː",
        sound:require( '../../static/mp3/ɜː.mp3'),
    },
    {
        type:"vowel",
        sub:0,
        cate:'l',
        name:"ɑː",
        sound:require( '../../static/mp3/ɑː.mp3'),
    },
    {
        type:"vowel",
        sub:0,
        cate:'l',
        name:"ɔː",
        sound:require( '../../static/mp3/ɔː.mp3'),
    },
    {
        type:"vowel",
        sub:0,
        cate:'l',
        name:"uː",
        sound:require( '../../static/mp3/uː.mp3'),
    },
    {
        dump:true,
        title:"短元音"
    },

    //短元音
    {
        type:"vowel",
        sub:0,
        cate:'s',
        name:"ɪ",
        sound:require( '../../static/mp3/ɪ.mp3'),
    },
    {
        type:"vowel",
        sub:0,
        cate:'s',
        name:"e",
        sound:require( '../../static/mp3/e.mp3'),
    },
    {
        type:"vowel",
        sub:0,
        cate:'s',
        name:"æ",
        sound:require( '../../static/mp3/æ.mp3'),
    },
    {
        type:"vowel",
        sub:0,
        cate:'s',
        name:"ə",
        sound:require( '../../static/mp3/ə.mp3'),
    },
    {
        type:"vowel",
        sub:0,
        cate:'s',
        name:"ʌ",
        sound:require( '../../static/mp3/ʌ.mp3'),
    },
    {
        type:"vowel",
        sub:0,
        cate:'s',
        name:"ɒ",
        sound:require( '../../static/mp3/ɒ.mp3'),
    },
    {
        type:"vowel",
        sub:0,
        cate:'s',
        name:"ʊ",
        sound:require( '../../static/mp3/ʊ.mp3'),
    },
    {
        dump:true,
        title:"双元音"
    },

    //双元音
    {
        type:"vowel",
        sub:1,
        cate:'s',
        name:"eɪ",
        sound:require( '../../static/mp3/eɪ.mp3'),
    },
    {
        type:"vowel",
        sub:1,
        cate:'s',
        name:"aɪ",
        sound:require( '../../static/mp3/aɪ.mp3'),
    },
    {
        type:"vowel",
        sub:1,
        cate:'s',
        name:"ɔɪ",
        sound:require( '../../static/mp3/ɔɪ.mp3'),
    },
    {
        type:"vowel",
        sub:1,
        cate:'s',
        name:"əʊ",
        sound:require( '../../static/mp3/əʊ.mp3'),
    },
    {
        type:"vowel",
        sub:1,
        cate:'s',
        name:"aʊ",
        sound:require( '../../static/mp3/aʊ.mp3'),
    },
    {
        type:"vowel",
        sub:1,
        cate:'s',
        name:"ɪə",
        sound:require( '../../static/mp3/ɪə.mp3'),
    },
    {
        type:"vowel",
        sub:1,
        cate:'s',
        name:"eə",
        sound:require( '../../static/mp3/eə.mp3'),
    },
    {
        type:"vowel",
        sub:1,
        cate:'s',
        name:"ʊə",
        sound:require( '../../static/mp3/ʊə.mp3'),
    },
    {
        dump:true,
        title:"清辅音"
    },

    //清辅音
    {
        type:"consonant",
        sub:0,
        cate:'c',
        name:"p",
        sound:require( '../../static/mp3/p.mp3'),
    },
    {
        type:"consonant",
        sub:0,
        cate:'c',
        name:"t",
        sound:require( '../../static/mp3/t.mp3'),
    },
    {
        type:"consonant",
        sub:0,
        cate:'c',
        name:"k",
        sound:require( '../../static/mp3/k.mp3'),
    },
    {
        type:"consonant",
        sub:0,
        cate:'c',
        name:"f",
        sound:require( '../../static/mp3/f.mp3'),
    },
    {
        type:"consonant",
        sub:0,
        cate:'c',
        name:"θ",
        sound:require( '../../static/mp3/θ.mp3'),
    },
    {
        type:"consonant",
        sub:0,
        cate:'c',
        name:"s",
        sound:require( '../../static/mp3/s.mp3'),
    },
    {
        type:"consonant",
        sub:0,
        cate:'c',
        name:"ʃ",
        sound:require( '../../static/mp3/ʃ.mp3'),
    },
    {
        type:"consonant",
        sub:0,
        cate:'c',
        name:"h",
        sound:require( '../../static/mp3/h.mp3'),
    },
    {
        type:"consonant",
        sub:1,
        cate:'c',
        name:"tʃ",
        sound:require( '../../static/mp3/tʃ.mp3'),
    },
    {
        type:"consonant",
        sub:1,
        cate:'c',
        name:"ts",
        sound:require( '../../static/mp3/ts.mp3'),
    },
    {
        type:"consonant",
        sub:1,
        cate:'c',
        name:"tr",
        sound:require( '../../static/mp3/tr.mp3'),
    },
    {
        dump:true,
        title:"浊辅音"
    },

    //浊辅音
    {
        type:"consonant",
        sub:0,
        cate:'m',
        name:"b",
        sound:require( '../../static/mp3/b.mp3'),
    },
    {
        type:"consonant",
        sub:0,
        cate:'m',
        name:"d",
        sound:require( '../../static/mp3/d.mp3'),
    },
    {
        type:"consonant",
        sub:0,
        cate:'m',
        name:"ɡ",
        sound:require( '../../static/mp3/g.mp3'),
    },
    {
        type:"consonant",
        sub:0,
        cate:'m',
        name:"v",
        sound:require( '../../static/mp3/v.mp3'),
    },
    {
        type:"consonant",
        sub:0,
        cate:'m',
        name:"ð",
        sound:require( '../../static/mp3/ð.mp3'),
    },
    {
        type:"consonant",
        sub:0,
        cate:'m',
        name:"z",
        sound:require( '../../static/mp3/z.mp3'),
    },
    {
        type:"consonant",
        sub:0,
        cate:'m',
        name:"ʒ",
        sound:require( '../../static/mp3/ʒ.mp3'),
    },
    {
        type:"consonant",
        sub:0,
        cate:'m',
        name:"r",
        sound:require( '../../static/mp3/r.mp3'),
    },
    {
        type:"consonant",
        sub:1,
        cate:'m',
        name:"dʒ",
        sound:require( '../../static/mp3/dʒ.mp3'),
    },
    {
        type:"consonant",
        sub:1,
        cate:'m',
        name:"dz",
        sound:require( '../../static/mp3/dz.mp3'),
    },
    {
        type:"consonant",
        sub:1,
        cate:'m',
        name:"dr",
        sound:require( '../../static/mp3/dr.mp3'),
    },
    {
        type:"consonant",
        sub:0,
        cate:'m',
        name:"m",
        sound:require( '../../static/mp3/m.mp3'),
    },
    {
        type:"consonant",
        sub:0,
        cate:'m',
        name:"n",
        sound:require( '../../static/mp3/n.mp3'),
    },
    {
        type:"consonant",
        sub:0,
        cate:'m',
        name:"ŋ",
        sound:require( '../../static/mp3/ŋ.mp3'),
    },
    {
        type:"consonant",
        sub:0,
        cate:'m',
        name:"l",
        sound:require( '../../static/mp3/l.mp3'),
    },
    {
        type:"consonant",
        sub:0,
        cate:'m',
        name:"j",
        sound:require( '../../static/mp3/j.mp3'),
    },
    {
        type:"consonant",
        sub:0,
        cate:'m',
        name:"w",
        sound:require( '../../static/mp3/w.mp3'),
    },

];

//卡片数据
export const CardPics =[
    {
        name:"ɑː",
        type:"后元音、长元音",
        mouth:"舌身平放在口腔里，发音时舌后靠前的部分用力",
        shape:"上下颚分得很开，两唇张开呈自然状态，肌肉放松",
        vocalCord:"振动",
        skill:"汉语“(a)”的音位在舌中央靠前，与/ɑː/不仅有舌位的区别，还有音量、长度的区别。",
        img:require("../../static/images/ɑː.jpg"),
        sound:require( '../../static/mp3/ɑː.mp3'),
    },
    {
        name:"ʌ",
        type:"中后、中下、不圆唇短元音",
        mouth:"舌中部向硬聘中部上抬，上抬的高度与//几乎相等口腔接近全开",
        shape:"自然状态",
        vocalCord:"振动",
        skill:"在英音中，发/ʌ/时口形张得稍大;而在美音中，发/ʌ/时除了发本身的音之外还可能会多少带一些/ə/的发音，接近/ə/的发音。",
        img:require("../../static/images/ʌ.jpg"),
        sound:require( '../../static/mp3/ʌ.mp3'),
    },
    {
        name:"æ",
        type:"中下位前元音",
        mouth:"舌尖抵住下齿，舌位稍高但比其他前元音 /ɪ/ 和 /e/要低",
        shape:"牙床开得较大，可以容下-个食指和一个中指，口要张至近乎全开",
        vocalCord:"振动",
        skill:"发/æ/时，注意口要张得很大。发这个音时不要使上下唇上下活动，以致将 /æ/发成双元音 /aɪ/。",
        img:require("../../static/images/æ.jpg"),
        sound:require( '../../static/mp3/æ.mp3'),
    },
    {
        name:"e",
        type:"中高位前元音",
        mouth:"舌尖抵住下齿，舌前部向硬聘上抬，舌侧缘轻贴上日齿舌位略低于发/I/音时的舌位。口腔接近半开，舌稍扁",
        shape:"偏平",
        vocalCord:"振动",
        skill:"发/e/时，嘴唇略微张开但不要张得过大，上下唇之间有一指宽的距离即可。美式英语中/e/的发音比英式英语中的/e/开口要大一些。",
        img:require("../../static/images/e.jpg"),
        sound:require( '../../static/mp3/e.mp3'),
    },
    {
        name:"aɪ",
        type:"开合双元音",
        mouth:"先将舌身平放在口腔中，起始音是低位前元音 /a/，然后滑向放松的高位前元音/ɪ/。舌身由 /a/的舌位抬向/ɪ/的高度，这一滑动过程中形成的音便是 /aɪ/",
        shape:"偏平",
        vocalCord:"振动",
        skill:"/a/ 不单独出现，只是在双元音中 /aɪ/、/aʊ/ 中出现。发英语的 /a/音时，舌端抵下齿，舌位很低，牙床全开。/a/是个前元音。在发 /aɪ/音时，音长要发够。如音长过短，音质就发生变化,与前元音/æ/混淆。",
        img:require("../../static/images/aɪ.jpg"),
        sound:require( '../../static/mp3/aɪ.mp3'),
    },
    {
        name:"eɪ",
        type:"开合双元音",
        mouth:"先将舌尖抵住前下齿，舌前部抬向硬聘，高度为中高，发元音/e/，然后两唇拉向两边，宽度减小，同时舌身高度抬至/ɪ/的高度，在这一滑动过程中形成/eɪ/音",
        shape:"偏平",
        vocalCord:"不振动",
        skill:"/eɪ/与/i:/的音位容易混在一起，原因是在发/i:/时唇形和舌位都不够紧张，这样舌位与唇形都处于/e/的位置，再一拖长就是/i:/的音了。",
        img:require("../../static/images/eɪ.jpg"),
        sound:require( '../../static/mp3/eɪ.mp3'),
    },
    {
        name:"ɔː",
        type:"中高、后舌位、圆唇长元音",
        mouth:"舌尖远离下齿，舌后部向软聘抬起，舌后身肌肉稍紧张些",
        shape:"双唇呈圆形且突出",
        vocalCord:"振动",
        skill:"有些初学者在读单词时，将/ɔ:/发得似“奥(ao)”的音原因是双唇不够紧张用力没有将双唇呈圆形突出去同时，舌位偏低，舌身不够紧张，发音过程中唇形有变化，不稳定。",
        img:require("../../static/images/ɔː.jpg"),
        sound:require( '../../static/mp3/ɔː.mp3'),
    },
    {
        name:"ɒ",
        type:"低、后舌位、圆唇短元音",
        mouth:"舌尖远离下齿，舌后向软腊微微抬起，舌后身和喉头比较紧张",
        shape:"双唇稍用力，使嘴唇呈圆形不突出",
        vocalCord:"振动",
        skill:"发/ɒ/音时，要注意音长不要拖长，它是一个短元音。短元音/ɒ/并不是长元音/ɔ:/单纯缩短而成的。发音时，舌后部要向软聘抬起，但比发/ɔ:/时抬得要低，牙床几乎全开，圆唇。",
        img:require("../../static/images/ɒ.jpg"),
        sound:require( '../../static/mp3/ɒ.mp3'),
    },
    {
        name:"ɔɪ",
        type:"开合双元音",
        mouth:"舌身平放于口腔中，先发圆唇元音 /ɔ/，然后滑向放松的高位前元音 /ɪ/，舌身抬向硬聘 /ɪ/的高度",
        shape:"",
        vocalCord:"振动",
        skill:"开合双元音前面一个元音要发得较清楚、较长，后面的元音发得模糊、较短。不要将/ɔɪ/中的 /ɪ/音读得过于清晰、响亮，否则会影响 /ɔɪ/ 的音质，同时音长要发够。",
        img:require("../../static/images/ɔɪ.jpg"),
        sound:require( '../../static/mp3/ɔɪ.mp3'),
    },
    {
        name:"ɪə",
        type:"集中双元音",
        mouth:"发音时，舌身从前元音 /ɪ/的近似位置向/ə/的方向滑动。在整个滑动过程中，唇形是非圆唇，唇由扁到开",
        shape:"",
        vocalCord:"振动",
        skill:"具有发音时口从合到开特点的双元音叫做集中双元音。发/ɪə/音时，不要从靠近/i:/的位置上开始，前舌位不要抬得太高。",
        img:require("../../static/images/ɪə.jpg"),
        sound:require( '../../static/mp3/ɪə.mp3'),
    },
    {
        name:"eə",
        type:"集中双元音",
        mouth:"发音时，舌头从前元音 /e/的位置上开始移向 /ə/，在此过程中形成的音便是/eə/",
        shape:"非圆唇",
        vocalCord:"振动",
        skill:"避免把 /eə/发成 /æə/。有些初学者把 /eə/和 /ɪə/相混淆，其主要原因是发/ɪə/ 时舌位稍低了一些唇形过于松弛。",
        img:require("../../static/images/eə.jpg"),
        sound:require( '../../static/mp3/eə.mp3'),
    },
    {
        name:"ʊə",
        type:"集中双元音",
        mouth:"发音时，舌头从后元音/ʊ/的位置上开始移向/ə/，在此过程中形成的音便是ʊə",
        shape:"唇形由微圆到开",
        vocalCord:"振动",
        skill:"/ʊə/常与半元音/j/组合读成/jʊə/，很多初学者在发音时，容易发成/jɔ:/或/ju:/。主要是因为发/j/时,唇形和舌位不够“紧”，而且/j/的音长过短，以至于发成了/jɔ:/或/ju:/。",
        img:require("../../static/images/ʊə.jpg"),
        sound:require( '../../static/mp3/ʊə.mp3'),
    },
    {
        name:"ɜː",
        type:"中央、不圆唇长元音",
        mouth:"发音时，舌中部向硬腰中部上抬，其高度为中高。",
        shape:"展唇位，展开的程度与 /i:/相同",
        vocalCord:"振动",
        skill:"注意/ɜː/发音与汉语“饿不相同。它们的舌位不同发“饿”时，音在舌后部音的长度也不相同。",
        img:require("../../static/images/ɜː.jpg"),
        sound:require( '../../static/mp3/ɜː.mp3'),
    },
    {
        name:"ə",
        type:"中央、不圆唇、非重读元音",
        mouth:"舌头中间部分抬起，舌、唇和牙床都很自然，肌肉相对放松",
        shape:"双唇略扁平而放松",
        vocalCord:"振动",
        skill:"/ə/是短元音，发音时要收小腹，短促有力。出现在单词词尾时，发音的舌位要比在其他位置时低一些，音长也要略长一些。",
        img:require("../../static/images/ə.jpg"),
        sound:require( '../../static/mp3/ə.mp3'),
    },
    {
        name:"f",
        type:"清辅音、摩擦音",
        mouth:"上齿轻触下唇",
        shape:"",
        vocalCord:"不振动",
        skill:"/f/ 这个音不同于汉语拼音f的发音，不要受汉语母语的影响在其后加上元音，发出类似fo(佛)的音来/f/ 在词尾时，送气要强一些，否则可能造成吞音。",
        img:require("../../static/images/f.jpg"),
        sound:require( '../../static/mp3/f.mp3'),
    },
    {
        name:"v",
        type:"浊辅音、摩擦音",
        mouth:"上齿轻触下唇",
        shape:"",
        vocalCord:"振动",
        skill:"/v/这个音不同于汉语拼音w的发音，不要受汉语母语的影响在其后加上元音，发出类似wei(危)的音来。",
        img:require("../../static/images/v.jpg"),
        sound:require( '../../static/mp3/v.mp3'),
    },
    {
        name:"iː",
        type:"高位前元音、长元音",
        mouth:"舌身前部尽量抬向硬聘，在舌面和硬聘之间留一定的空隙，舌尖抵住前下齿，下颚略向下伸，两齿分开",
        shape:"两唇展开，拉向两侧的嘴角",
        vocalCord:"振动",
        skill:"/i:/ 同汉语里的“一”字发音易混。“一”发音时，舌前部与硬聘之间的距离更窄些，而且有轻微摩擦。/i:/发音时没有摩擦。发音比汉字“一”要长一些。",
        img:require("../../static/images/iː.jpg"),
        sound:require( '../../static/mp3/iː.mp3'),
    },
    {
        name:"ɪ",
        type:"高位前元音，短元音",
        mouth:"舌身抬起的高度略低于长元音/i:/，舌尖抵住前下齿，舌尖用力略小于发/i:/时的力度，两齿分开",
        shape:"稍扁",
        vocalCord:"不振动",
        skill:"发/ɪ/时不能单纯地将/i:/缩短，两者之间有质的差别/ɪ/的口腔通道要比/i:/宽些不要将/ɪ/发成/eɪ/的缩短音。",
        img:require("../../static/images/ɪ.jpg"),
        sound:require( '../../static/mp3/ɪ.mp3'),
    },
    {
        name:"k",
        type:"清辅音，爆破音",
        mouth:"舌后部上升，抵住软聘，然后放开，使气流爆破而出，送气较强",
        shape:"自然张开",
        vocalCord:"不振动",
        skill:"/k/ 这个音不同于汉语拼音k的发音，不要受汉语母语的影响在其后加上元音，发出类似 ke (科)的音来。当 /k/ 出现在 /s/ 之后时吐气较弱,读音浊化,发/g/音例如:sky，school。",
        img:require("../../static/images/k.jpg"),
        sound:require( '../../static/mp3/k.mp3'),
    },
    {
        name:"g",
        type:"清辅音，爆破音",
        mouth:"舌后部上升，抵住软聘，然后放开，使气流爆破而出送气较弱",
        shape:"自然张开",
        vocalCord:"振动",
        skill:"/g/这个音不同于汉语拼音g的发音，不要受汉语母语的影响在其后加上元音，发出类似ge(哥)的音来/g/出现在重读元音前，爆破较强。/g/出现在弱读元音前或词尾时，爆破较弱。",
        img:require("../../static/images/g.jpg"),
        sound:require( '../../static/mp3/g.mp3'),
    },
    {
        name:"m",
        type:"浊辅音、鼻音",
        mouth:"舌身平放在口腔内，双唇紧闭，气流从鼻孔中出来",
        shape:"",
        vocalCord:"振动",
        skill:"/m/这个音不同于汉语拼音m的发音，不要受汉语母语的影响在其后加上元音，发出类似 me(么)的音来。",
        img:require("../../static/images/m.jpg"),
        sound:require( '../../static/mp3/m.mp3'),
    },
    {
        name:"n",
        type:"浊辅音、鼻音",
        mouth:"舌尖抵住上齿龈，气流从鼻孔中出来。",
        shape:"",
        vocalCord:"振动",
        skill:"/n/这个音不同于汉语拼音n的发音，不要受汉语母语的影响在其后加上元音，发出类似ne(呢)的音来当/n/音出现在单词词尾时，气流要强，声带要振动。",
        img:require("../../static/images/n.jpg"),
        sound:require( '../../static/mp3/n.mp3'),
    },
    {
        name:"ŋ",
        type:"浊辅音、鼻音",
        mouth:"舌后部升起抵住软聘，同时软聘下垂，气流从鼻腔中出来",
        shape:"自然张开",
        vocalCord:"振动",
        skill:"/n/与/n/不同，前者是后舌、软聘、鼻音，而后者是前舌、齿龈、鼻音。发 /ŋ/音时，要清晰、有力。",
        img:require("../../static/images/ŋ.jpg"),
        sound:require( '../../static/mp3/ŋ.mp3'),
    },
    {
        name:"l",
        type:"浊辅音、舌边音(出现在元音之前)、含糊舌边音(出现在辅音前或词尾)",
        mouth:"舌尖及舌端紧贴上齿龈舌前部向硬聘抬起，气流从舌的旁边泄出",
        shape:"自然张开",
        vocalCord:"振动",
        skill:"/l/这个音不同于汉语拼音1的发音，不要受汉语母语的影响在其后加上元音，发出类似le(了)的音来。",
        img:require("../../static/images/l.jpg"),
        sound:require( '../../static/mp3/l.mp3'),
    },
    {
        name:"p",
        type:"清辅音、爆破音",
        mouth:"舌身自然放平于口腔中",
        shape:"双唇紧闭气流挡在口腔内在形成一定气流压力之后猛张双唇，气流爆发而出",
        vocalCord:"不振动",
        skill:"/p/ 这个音不同于汉语拼音p的发音，不要受汉语母语的影响在其后加上元音，发出类似po(坡)的音来。",
        img:require("../../static/images/p.jpg"),
        sound:require( '../../static/mp3/p.mp3'),
    },
    {
        name:"b",
        type:"浊辅音、爆破音",
        mouth:"舌身自然放平于口腔中",
        shape:"双唇紧闭，气流挡在口腔内在形成一定气流压力之后猛张双唇，气流爆发而出",
        vocalCord:"振动",
        skill:"/b/这个音不同于汉语拼音b的发音，不要受汉语母语的影响在其后加上元音，发出类似bo(波)的音来。",
        img:require("../../static/images/b.jpg"),
        sound:require( '../../static/mp3/b.mp3'),
    },
    {
        name:"r",
        type:"浊辅音、爆破音",
        mouth:"舌尖向齿龈后部与硬腾连接处翘起，气流在卷起的舌尖与连接处滑过",
        shape:"双唇略突出，稍圆",
        vocalCord:"振动",
        skill:"在发/r/时，先做好发“瑞的舌位准备，然后声带振动注意发 /r/ 时，舌尖卷起时不得接触上齿龈。",
        img:require("../../static/images/r.jpg"),
        sound:require( '../../static/mp3/r.mp3'),
    },
    {
        name:"h",
        type:"清辅音、摩擦音",
        mouth:"舌身平放于口腔中并使其保持松弛状态",
        shape:"自然张开",
        vocalCord:"不振动",
        skill:"发/h/音时，不要在喉头或口腔的任何部位发生摩擦。",
        img:require("../../static/images/h.jpg"),
        sound:require( '../../static/mp3/h.mp3'),
    },
    {
        name:"s",
        type:"清辅音、摩擦音",
        mouth:"舌尖接近上齿龈，舌尖与上齿龈之间的距离较小",
        shape:"微开",
        vocalCord:"不振动",
        skill:"当/s/出现在单词末尾时送气要略强一些。",
        img:require("../../static/images/s.jpg"),
        sound:require( '../../static/mp3/s.mp3'),
    },
    {
        name:"z",
        type:"浊辅音，摩擦音",
        mouth:"舌尖接近上齿龈，舌尖与上齿龈之间的距离较小",
        shape:"微开",
        vocalCord:"振动",
        skill:"当/z/出现在单词末尾时送气要略强一些。汉语中没有这个浊辅音，所以不要用汉语拼音的z来代替/z/，发出类似zi(资)的音来。",
        img:require("../../static/images/z.jpg"),
        sound:require( '../../static/mp3/z.mp3'),
    },
    {
        name:"ʃ",
        type:"清辅音、摩擦音",
        mouth:"舌端接近上齿龈后，舌身要向上抬向硬聘，气流从舌和硬聘及上齿龈间的缝隙中通过，发出摩擦音",
        shape:"双唇突出",
        vocalCord:"不振动",
        skill:"/ʃ/ 和汉语拼音中的 sh 很相似，但不同的是 sh 是卷舌送气清辅音，而 /ʃ/是平舌送气清辅音。/ʃ/ 在词末时，送气要强一些，不要吞音。",
        img:require("../../static/images/ʃ.jpg"),
        sound:require( '../../static/mp3/ʃ.mp3'),
    },
    {
        name:"ʒ",
        type:"浊辅音、摩擦音",
        mouth:"舌端接近上齿龈后，舌身要向上抬向硬聘，气流从舌和硬聘及上齿龈间的缝隙中通过，发出摩擦音",
        shape:"双唇突出",
        vocalCord:"振动",
        skill:"发/ʒ/音时，舌端与齿龈和硬聘之间的距离不能太大否则发音会显得很松。",
        img:require("../../static/images/ʒ.jpg"),
        sound:require( '../../static/mp3/ʒ.mp3'),
    },
    {
        name:"t",
        type:"清辅音、爆破音",
        mouth:"舌尖抵住上齿龈，然后放开使气流爆破而出，吐气很强",
        shape:"微开",
        vocalCord:"不振动",
        skill:"/t/ 这个音不同于汉语拼音t的发音，不要受汉语母语的影响在其后加上元音，发出类似 te (特)的音来当/t/前面是/s/时，即使是在重读元音前也不吐气，读成/d/音。例如:stream和 study。",
        img:require("../../static/images/t.jpg"),
        sound:require( '../../static/mp3/t.mp3'),
    },
    {
        name:"d",
        type:"浊辅音、爆破音",
        mouth:"舌尖抵住上齿龈然后放开让气流爆破而出，吐气较弱",
        shape:"微开",
        vocalCord:"振动",
        skill:"/d/这个音不同于汉语拼音d的发音，不要受汉语母语的影响在其后加上元音，发出类似de(的)的音来在单词中，当/d/音后面紧跟着/b/、/p/、/t/、/k/、/g/等音时，气流被阻碍，声带不震动。例如:bedtime和redcap。",
        img:require("../../static/images/d.jpg"),
        sound:require( '../../static/mp3/d.mp3'),
    },
    {
        name:"tr",
        type:"清辅音，破擦音",
        mouth:"先做好发/t/的口形准备然后将舌尖轻抵在上齿龈上发 /t/音，并迅速将舌尖滑到/r/的部位上",
        shape:"略突出",
        vocalCord:"不振动",
        skill:"/tr/的发音与汉语拼音chuo”的音相近，发/tr/时声带不振动。",
        img:require("../../static/images/tr.jpg"),
        sound:require( '../../static/mp3/tr.mp3'),
    },
    {
        name:"dr",
        type:"浊辅音，破擦音",
        mouth:"先做好发/d/的口形准备然后将舌尖轻抵在上齿龈上发/d/音，并迅速将舌头滑到/r/的部位上",
        shape:"略突出",
        vocalCord:"振动",
        skill:"先做好发/d/的口形准备然后将舌尖轻抵在上齿龈上发/d/音，并迅速将舌头滑到/r/的部位上",
        img:require("../../static/images/dr.jpg"),
        sound:require( '../../static/mp3/dr.mp3'),
    },
    {
        name:"ts",
        type:"清辅音，破擦音",
        mouth:"发音时舌前端抵住上齿龈气流从缝隙中缓缓冲出",
        shape:"自然张开",
        vocalCord:"不振动",
        skill:"/ts/与汉语拼音“ci”在发音上有相似之处，但发“ci时声带振动，而发/ts/时不振动。/ts/音出现在词末时，送气要强。",
        img:require("../../static/images/ts.jpg"),
        sound:require( '../../static/mp3/ts.mp3'),
    },
    {
        name:"dz",
        type:"浊辅音，破擦音",
        mouth:"发音时舌前端抵住上齿龈气流从缝隙中缓缓冲出",
        shape:"自然张开",
        vocalCord:"振动",
        skill:"/dz/的发音与汉字“资的音相近，发/dz/时可参考“资”发音的部位。/dz/在词尾时，声带振动要略强一些，不要太轻，以致失去声带振动。",
        img:require("../../static/images/dz.jpg"),
        sound:require( '../../static/mp3/dz.mp3'),
    },
    {
        name:"tʃ",
        type:"清辅音，破擦音",
        mouth:"舌尖抵住上齿龈，形成发 //的音位，然后舌尖与上齿龈慢慢地分开，让气流缓缓地从缝隙中冲出",
        shape:"唇形从自然张开过渡到略微突出的唇形",
        vocalCord:"不振动",
        skill:"/t/ 与汉字“吃”在发音上有相似之处，但汉字“吃”发音时声带振动，而 /tf/不振动。/t/ 音出现在词末时，送气要强。",
        img:require("../../static/images/tʃ.jpg"),
        sound:require( '../../static/mp3/tʃ.mp3'),
    },
    {
        name:"dʒ",
        type:"浊辅音，破擦音",
        mouth:"舌尖抵住上齿龈，形成发/d/的音位，然后舌尖与上齿龈慢慢地分开，让气流缓缓地从缝隙中冲出",
        shape:"唇形从自然张开过渡到略微突出的唇形",
        vocalCord:"振动",
        skill:"/dʒ/的发音与汉字“知”的音相近，发/d3/时可参考“知”的发音部位。/dʒ/在词尾时，声带振动要略强一些，不要太轻，以至于失去声带振动。",
        img:require("../../static/images/dʒ.jpg"),
        sound:require( '../../static/mp3/dʒ.mp3'),
    },
    {
        name:"uː",
        type:"高位、圆唇后元音",
        mouth:"舌尖离开下齿，舌后部向软聘抬起，在后元音中舌位最高",
        shape:"双唇收圆，向前用力突出肌肉紧张，成一小孔",
        vocalCord:"振动",
        skill:"/u:/与汉语“屋”的区别在于舌位和音长不同。发“屋”时，后舌与软聘之间有摩擦，而且唇形也不像/u:/ 那样紧张。",
        img:require("../../static/images/uː.jpg"),
        sound:require( '../../static/mp3/uː.mp3'),
    },
    {
        name:"ʊ",
        type:"次高位、圆唇后元音",
        mouth:"舌尖离开下齿，舌后部向软聘抬起，舌最高点比发/u:/时低",
        shape:"双唇略微用力向前突出但双唇没有发/u:/的唇形紧张",
        vocalCord:"振动",
        skill:"初学时，可以在发/u:/的基础上，放松双唇的肌肉改变唇形，就可以得到短元音/ʊ/。",
        img:require("../../static/images/ʊ.jpg"),
        sound:require( '../../static/mp3/ʊ.mp3'),
    },
    {
        name:"w",
        type:"浊辅音，半元音",
        mouth:"舌后部向软聘抬起，形成发元音/u:/时的状态",
        shape:"双唇呈圆形突出",
        vocalCord:"振动",
        skill:"在单词中，/w/音会很快滑动到后面的元音上去。圆唇的程度和舌位随着后面的元音变化而变化。",
        img:require("../../static/images/w.jpg"),
        sound:require( '../../static/mp3/w.mp3'),
    },
    {
        name:"j",
        type:"浊辅音，半元音",
        mouth:"舌前部抬向硬聘，近似发/i:/的舌位",
        shape:"展唇",
        vocalCord:"振动",
        skill:"在单词中，/j/音会很快滑动到后面的元音上去，唇形和舌位随着后面的元音而变化。",
        img:require("../../static/images/j.jpg"),
        sound:require( '../../static/mp3/j.mp3'),
    },
    {
        name:"θ",
        type:"清辅音、摩擦音",
        mouth:"舌头放在略微张开的上下齿之间，并略微接触。舌尖尽量向下齿用力。气流通过舌尖和上下齿尖的缝隙发生摩擦而发音",
        shape:"两唇之间的距离很窄",
        vocalCord:"不振动",
        skill:"发/θ/音时要注意不要让舌尖堵塞它和上齿间的缝隙，以免气流被堵塞而不能发生摩擦。",
        img:require("../../static/images/θ.jpg"),
        sound:require( '../../static/mp3/θ.mp3'),
    },
    {
        name:"ð",
        type:"清辅音、摩擦音",
        mouth:"舌头放在略微张开的上下齿之间，并略微接触。舌尖尽量向下齿用力。气流通过舌尖和上下齿尖的缝隙发生摩擦而发音",
        shape:"两唇之间的距离很窄",
        vocalCord:"振动",
        skill:"发/ð/音时要注意不要让舌尖堵塞它和上齿间的缝隙，以免气流被堵塞而不能发生摩擦。发/ð/时，舌尖向下用力，用上齿去接触舌尖上面。当/ð/在词末时，声带振动要有力。",
        img:require("../../static/images/ð.jpg"),
        sound:require( '../../static/mp3/ð.mp3'),
    },

];


//be动词数据
export const beVerbs ={
    be:{
        name:"be",
        type:"aux /vt /n",
        level:"原形",
        markE:"/biː; bi/",
        markM:"/biː; bi/",
        key:0,
        means:{
            aux:{
                content:[
                    "被（用于被动语态）；正，正在（用于进行时）"
                ],
                example:[]
            },
            vt:{
                content:[
                    "是",
                    "有",
                    "做/当/成为",
                ],
                example:[
                    {
                        sentences:[
                            "Intelligence cannot be overvalued.",
                            "She must be crazy to lend him money.",
                        ],
                        explain:[
                            "智力是无比重要的。",
                            "她把钱借给他，一定是疯了。"
                        ]
                    },
                    {
                        sentences:[
                            "It's going to be wet tomorrow.",
                            "There may be other worlds out there.",
                        ],
                        explain:[
                            "明天有雨。",
                            "那里可能有其他星球。"
                        ]
                    },
                    {
                        sentences:[
                            "I want you to be who you want to be.",
                            "I'm going to be a good boy now.",
                        ],
                        explain:[
                            "我想让你做你想成为的人。",
                            "我现在要做一个听话的男孩。"
                        ]
                    },
                ]
            },
            n:{
                content:["（Be）（缅）拜；（日）部（姓）；（朝）培；（中非）贝（人名"],
                example:[]
            }
        },
        links:[
            {
                name:"is",
                link:"is",
                title:"第三人称单数"
            },
            {
                name:"being",
                link:"being",
                title:"现在分词"
            },
            {
                name:"was/were",
                link:"was_were",
                title:"过去式"
            },
            {
                name:"been",
                link:"been",
                title:"过去分词"
            }
        ],
    },

    am:{
        name:"am",
        type:"v",
        level:"be 的第一人称单数现在时",
        markE:"/æm; əm/",
        markM:"/æm; əm/",
        key:1,
        means:{
            v:{
                content:["是"],
                example:[
                    {
                        sentences:["i am a boy."],
                        explain:["我是个男孩"]
                    }
                ],
            }
        },
        links:[
            {
                name:"be",
                link:"be",
                title:"原形"
            },
        ]
    },

    is:{
        name:"is",
        type:"v",
        level:"be 的第三人称单数",
        markE:"/ɪz/",
        markM:"/ɪz/",
        key:2,
        means:{
            v:{
                content:["是"],
                example:[
                    {
                        sentences:["he is a boy."],
                        explain:["他是个男孩"]
                    }
                ],
            }
        },
        links:[
            {
                name:"be",
                link:"be",
                title:"原形"
            },
        ]
    },

    are:{
        name:"are",
        type:"v",
        level:"be 的第二人称单复数现在式",
        markE:"/ɑː(r); ə(r)/",
        markM:"/ɑːr; ər/",
        key:3,
        means:{
            v:{
                content:["是"],
                example:[
                    {
                        sentences:["you are a boy."],
                        explain:["你是个男孩"]
                    }
                ],
            }
        },
        links:[
            {
                name:"be",
                link:"be",
                title:"原形"
            },
        ]
    },
    art:{
        name:"art",
        type:"v",
        level:"（古代）be 的第二人称单数现在式",
        markE:"/ɑːt",
        markM:"/ɑːrt/",
        key:4,
        means:{
            v:{
                content:["是"],
                example:[
                    {
                        sentences:["thou art loosed."],
                        explain:["你被释放了"]
                    }
                ],
            }
        },
        links:[
            {
                name:"be",
                link:"be",
                title:"原形"
            },
        ]
    },

    been:{
        name:"been",
        type:"v",
        level:"过去分词",
        markE:"/biːn/",
        markM:"/bɪn/",
        key:5,
        means:{
            v:{
                content:["是，有（be的过去分词），被，已"],
                example:[
                    {
                        sentences:["His king had been checkmated."],
                        explain:["他的王棋已被将死。"],
                    }
                ],
            }
        },
        links:[
            {
                name:"be",
                link:"be",
                title:"原形"
            },
        ]
    },

    being:{
        name:"being",
        type:"v",
        level:"现在分词",
        markE:"/ˈbiːɪŋ/",
        markM:"/ˈbiːɪŋ/",
        key:6,
        means:{
            v:{
                content:["是，有（be的现在分词），被，已"],
                example:[
                    {
                        sentences:["Optimism being one of them."],
                        explain:["乐观就是其中之一。"]
                    }
                ],

            }
        },
        links:[
            {
                name:"be",
                link:"be",
                title:"原形"
            },
        ]
    },

    was:{
        name:"was",
        type:"vt",
        level:"am、is 的过去式",
        markE:"/wɒz; wəz/",
        markM:"/wʌz; wəz/",
        key:7,
        means:{
            v:{
                content:["是；在；要"],
                example:[
                    {
                        sentences:["The thing,i was doing tonight."],
                        explain:["我今晚要做的事。"]
                    }
                ],
            }
        },
        links:[
            {
                name:"am",
                link:"am",
                title:"是:第一人称单数现在时"
            },
            {
                name:"is",
                link:"is",
                title:"是:第三人称单数"
            },
        ]
    },

    were:{
        name:"were",
        type:"vt",
        level:"are的过去式",
        markE:"/wɜː(r); wə(r)/",
        markM:"/wɜːr; wər/",
        key:8,
        means:{
            v:{
                content:["是；在；要；（are 的过去式）"],
                example:[
                    {
                        sentences:["The kids were happy, the crowds were stoked."],
                        explain:["孩子们很高兴，周围的人也兴奋起来了。"]
                    }
                ],
            }
        },
        links:[
            {
                name:"are",
                link:"are",
                title:"是:第二人称单复数现在式"
            },
        ]
    },

};


//物主代词
export const possessives ={
    i:{
        name:"i",
        means:"我",
        markE:"/aɪ/",
        markM:"/aɪ/",
        type:"pron",
        desc:"第一人称单数",
        pos:"主格",
        derived:{
            me:{
                name:"me",
                means:"我",
                markE:"/miː; mi/",
                markM:"/miː; mi/",
                type:"pron",
                pos:"宾格",
            },
            my:{
                name:"my",
                means:"我的",
                markE:"/maɪ",
                markM:"/maɪ",
                type:"pron",
                pos:"主格",
            },
            mine:{
                name:"mine",
                means:"我的",
                markE:"/maɪn/",
                markM:"/maɪn/",
                type:"pron",
                pos:"宾格",
            },
            myself:{
                name:"me",
                means:"我",
                markE:"/miː; mi/",
                markM:"/miː; mi/",
                type:"pron",
                pos:"宾格",
            }
        }
    },
    we:{
        name:"we",
        means:"我们",
        markE:"/wiː; wi/",
        markM:"/wiː; wi/",
        type:"pron",
        desc:"第一人称复数",
        pos:"主格",
        derived:{
            us:{
                name:"us",
                means:"我们",
                markE:"/ʌs; əs/",
                markM:"/ʌs; əs/",
                type:"pron",
                pos:"宾格",
            },
            our:{
                name:"our",
                means:"我们的",
                markE:"/ʌs; əs/",
                markM:"/ʌs; əs/",
                type:"pron",
                pos:"主格",
            },
            ours:{
                name:"ours",
                means:"我们的",
                markE:"/ˈaʊəz/",
                markM:"/ˈaʊərz/",
                type:"pron",
                pos:"宾格",
            },
        }
    },
    you:{
        name:"you",
        means:"你；你们",
        markE:"/juː; jʊ/",
        markM:"/juː; jʊ/",
        type:"pron",
        desc:"第二人称单/复数",
        pos:"主格/宾格",
        derived:{
            thou:{
                name:"thou",
                means:"你；尔，汝",
                markE:"/ðaʊ/",
                markM:"/ðaʊ/",
                type:"pron",
                pos:"主格",
            },
            your:{
                name:"your",
                means:"你的/你们的",
                markE:"/jɔː(r); jə(r)/",
                markM:"/jʊr; jər/",
                type:"pron",
                pos:"主格/宾格",
            },
        }
    },
    he:{
        name:"he",
        means:"他",
        markE:"/hiː; hi/",
        markM:"/hiː; hi/",
        type:"pron",
        desc:"第三人称单数",
        pos:"主格",
        derived:{
            him:{
                name:"him",
                means:"他",
                markE:"/hɪm/",
                markM:"/hɪm; ɪm/",
                type:"pron",
                pos:"宾格",
            },
            his:{
                name:"his",
                means:"他的",
                markE:"/jɔː(r); jə(r)/",
                markM:"/jʊr; jər/",
                type:"pron",
                pos:"主格",
            },
            himself:{
                name:"himself",
                means:"他自己",
                markE:"/hɪmˈself/",
                markM:"/hɪmˈself/",
                type:"pron",
                pos:"宾格",
            },
        }
    },
    she:{
        name:"she",
        means:"她",
        markE:"/ʃiː; ʃi/",
        markM:"/ʃiː; ʃi/",
        type:"pron",
        desc:"第三人称单数",
        pos:"主格",
        derived:{
            her:{
                name:"her",
                means:"她",
                markE:"/hɜː(r); hə(r)/",
                markM:"/hɜːr; hər",
                type:"pron",
                pos:"宾格",
            },
        }
    },
    it:{
        name:"it",
        means:"它",
        markE:"/ɪt/",
        markM:"/ɪt/",
        type:"pron",
        desc:"第三人称单数",
        pos:"主格/宾格",
        derived:{
            her:{
                name:"its",
                means:"它的",
                markE:"/ɪts/",
                markM:"/ɪts/",
                type:"pron",
                pos:"主格",
            },
        }
    },
    they:{
        name:"they",
        means:"他们/她们/它们",
        markE:"/ðeɪ/",
        markM:"/ðeɪ/",
        type:"pron",
        desc:"第三人称单数",
        pos:"主格",
        derived:{
            them:{
                name:"them",
                means:"他们/她们/它们",
                markE:"/ðem; ðəm/",
                markM:"/ðem; ðəm/",
                type:"pron",
                pos:"宾格",
            },
            their:{
                name:"their",
                means:"他们的/她们的/它们的",
                markE:"/ðeə(r)/",
                markM:"/ðeə(r)/",
                type:"pron",
                pos:"主格",
            },
        }
    }
};


//词性介绍
export const wordClass ={
    n:{
        name:"n",
        type:"名词",
        fullName:"Noun",
        means:'表达人，事物，地点的名称',
        children:[
            {
                title:"可数名词",
                text:"countable noun",
                example:[
                    "pen",
                    "ball",
                    "cup of water"
                ],
                explain:[
                    "铅笔",
                    "球",
                    "一杯水"
                ]
            },
            {
                title:"不可数名词",
                text:"uncountable noun",
                example:[
                    "water",
                    "sky",
                    "fire"
                ],
                explain:[
                    "水",
                    "天空",
                    "火"
                ]
            }
        ]
    },
    art:{
        name:"art",
        type:"冠词",
        fullName:"Article",
        means:'用在名词前，帮助说明其所指对象',
        children:[
            {
                title:"定冠词",
                text:"definite article.",
                example:[
                    "the",
                ],
                explain:[
                    "这",
                ]
            },
            {
                title:"不定冠词",
                text:"indefinite article.",
                example:[
                    "one",
                    "a",
                    "an",
                ],
                explain:[
                    "一个",
                    "一个(用于在辅音音素开头的词前用)",
                    "一个(用于在元音音素开头的词前用)",
                ]
            },
        ]
    },
    pron:{
        name:"pron",
        type:"代词",
        fullName:"Pronoun",
        means:'代替名词，数词等',
        children:[
            {
                title:"代词",
                text:"pron.",
                example:[
                    "this",
                    "that",
                    "i"
                ],
                explain:[
                    "这个",
                    "那个",
                    "我"
                ]
            }
        ]
    },
    adj:{
        name:"adjective",
        type:"形容词",
        fullName:"Adjective",
        means:'表示人/事物的性质或特征',
        children:[
            {
                title:"形容词",
                text:"adj.",
                example:[
                    "blue",
                    "big",
                    "beautiful"
                ],
                explain:[
                    "蓝色的",
                    "大的",
                    "美丽的"
                ]
            }
        ]
    },
    num:{
        name:"Numeral",
        type:"数词",
        fullName:"Numeral",
        means:'表示数量或顺序',
        children:[
            {
                title:"数词",
                text:"num.",
                example:[
                    "first",
                    "three",
                ],
                explain:[
                    "第一",
                    "3",
                ]
            }
        ]
    },
    v:{
        name:"v",
        type:"动词",
        fullName:"Verb",
        means:'表示动作或状态的词',
        children:[
            {
                title:"动词",
                text:"v.",
                example:[
                    "play",
                    "bit",
                    "have"
                ],
                explain:[
                    "玩",
                    "咬",
                    "喝"
                ]
            }
        ]
    },
    adv:{
        name:"adverb",
        type:"副词",
        fullName:"Adverb",
        means:'表示动作的程度/特征',
        children:[
            {
                title:"副词",
                text:"adv.",
                example:[
                    "often",
                    "usually",
                    "completely"
                ],
                explain:[
                    "时常",
                    "常常地",
                    "完全地"
                ]
            }
        ]
    },
    perp:{
        name:"preposition",
        type:"介词",
        fullName:"Preposition",
        means:'表示名词，代词和其他词之间的关系',
        children:[
            {
                title:"介词",
                text:"prep.",
                example:[
                    "in",
                    "on",
                    "at"
                ],
                explain:[
                    "在里面",
                    "在上面",
                    "在,处于什么状态"
                ]
            }
        ]
    },
    conj:{
        name:"conjunction",
        type:"连词",
        fullName:"Conjunction",
        means:'连接词与词，句子与句子',
        children:[
            {
                title:"连词",
                text:"conj.",
                example:[
                    "and",
                    "but",
                    "that",
                ],
                explain:[
                    "和",
                    "但是",
                    "...可能是"
                ]
            }
        ]
    },
    int:{
        name:"Interjection",
        type:"感叹词",
        fullName:"Interjection",
        means:'表示说话时的喜悦，惊讶等情感或语气',
        children:[
            {
                title:"感叹词",
                text:"int.",
                example:[
                    "oh",
                    "hello",
                    "oops",
                ],
                explain:[
                    "噢",
                    "哈喽",
                    "哎呀"
                ]
            }
        ]
    },

};
