const words = ["QUIRE",	"TRELAWNEY,",	"Dr.",	"Livesey,",	"and",	"the",	"rest",	"of",	"these",	"gentlemen",	"having",	"asked",	"me",	"to",	"write",	"down",	"the",	"whole",	"particulars",	"about",	"Treasure",	"Island,",	"from",	"the",	"beginning",	"to",	"the",	"end,",	"keeping",	"nothing",	"back",	"but",	"the",	"bearings",	"of",	"the",	"island,",	"and",	"that",	"only",	"because",	"there",	"is",	"still",	"treasure",	"not",	"yet",	"lifted,",	"I",	"take",	"up",	"my",	"pen",	"in",	"the",	"year",	"of",	"grace",	"17__",	"and",	"go",	"back",	"to",	"the",	"time",	"when",	"my",	"father",	"kept",	"the",	"Admiral",	"Benbow",	"inn",	"and",	"the",	"brown",	"old",	"seaman",	"with",	"the",	"sabre",	"cut",	"first",	"took",	"up",	"his",	"lodging",	"under",	"our",	"roof.",
"I",	"remember",	"him",	"as",	"if",	"it",	"were",	"yesterday,",	"as",	"he",	"came",	"plodding",	"to",	"the",	"inn",	"door,",	"his",	"sea-chest",	"following",	"behind",	"him",	"in",	"a",	"hand-barrow--a",	"tall,",	"strong,",	"heavy,",	"nut-brown",	"man,",	"his",	"tarry",	"pigtail",	"falling",	"over",	"the",	"shoulder",	"of",	"his",	"soiled",	"blue",	"coat,",	"his",	"hands",	"ragged",	"and",	"scarred,",	"with",	"black,",	"broken",	"nails,",	"and",	"the",	"sabre",	"cut",	"across",	"one",	"cheek,",	"a",	"dirty,",	"livid",	"white.",	"I",	"remember",	"him",	"looking",	"round",	"the",	"cove",	"and",	"whistling",	"to",	"himself",	"as",	"he",	"did",	"so,",	"and",	"then",	"breaking",	"out",	"in",	"that",	"old",	"sea-song",	"that",	"he",	"sang",	"so",	"often",	"afterwards:",
]

let cursor = gsap.to('.cursor', {opacity: 0, ease: "power2.inOut", repeat: -1})

let boxTL = gsap.timeline()

boxTL.to('.box', {duration: 1, width: "17vw", delay: 0.5, ease: "power4.inOut"})
    .from('.hi', {duration: 1, y: "6vw", ease: "power3.out", onComplete:()=>masterTL.play()})
    .to('.box', {duration: 1, height: "5vw", ease: "elastic.out"})
    .to('.box', {duration: 2, autoAlpha: 0.5, yoyo: true, repeat: -1, ease:"rough({template: none.out, strength: 1, points: 20, taper: 'none', randomize: true, clamp: false})"})


let masterTL = gsap.timeline({repeat: -1}).pause()

words.forEach(word => {
    let tl = gsap.timeline({repeat: 1, yoyo: true, repeatDelay: 1})
    tl.to('.text', {duration: 1, text: word})
    masterTL.add(tl)
})

gsap.to('p', {})