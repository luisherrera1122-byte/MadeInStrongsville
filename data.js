// ===========================================================
// MADE IN STRONGSVILLE — league data
// Edit these arrays to update the site. No other files need to change.
// ===========================================================

const ROSTER = [
  { no:"01", name:"Steve Boden", nickname:"The Late Bloomer", years:"2016–2025", record:"64-71", seasons:10,
    titles:1, top6:5, sackos:1, img:"photo-steve.jpg", video:"iHvRlfyEPDc", videoVertical:true, currentChamp:true,
    tagline:"A decade of waiting, capped off by a championship in 2025.",
    story:"A decade of mid-pack finishes and one true rock-bottom season in 2022 didn't stop Steve Boden from finally breaking through in 2025 for his first championship. Proof that staying in the league long enough eventually pays off." },
  { no:"02", name:"Andrew Brooks", nickname:"The Trophy Bandit", years:"2011–2025", record:"94-106", seasons:15,
    titles:4, top6:7, sackos:2, img:"photo-brooks.jpg", video:"dNVigNLF3rI", videoVertical:true,
    tagline:"More championships than anyone in league history — with a losing career record.",
    story:"No one has a stranger case for four championships than Andrew Brooks — his career record is a losing one. And yet he owns more titles than anybody: 2013, 2018, 2020, 2023. Brooks doesn't win the regular season. He shows up when it counts and takes what's his. They call him the Trophy Bandit for a reason." },
  { no:"03", name:"Luis Herrera", nickname:"The Quiet Goat", years:"2011–2025", record:"112-88", seasons:15,
    titles:2, top6:8, sackos:0, img:"photo-luis.jpg", video:"jo7BFVI88Gs", videoVertical:true,
    tagline:"The best career record in league history. Zero last-place finishes. Ever.",
    story:"112 wins is the most anyone has ever posted in this league — and Luis has never finished last, not once in fifteen seasons. No flashy highlight reel, just two championships and a résumé nobody else can touch for pure durability." },
  { no:"04", name:"Don Ricardo", nickname:"The Don", years:"2011–2025", record:"103-97", seasons:15,
    titles:2, top6:7, sackos:1, img:"photo-don.jpg", video:"AsOpAyFtTUE", videoVertical:false,
    tagline:"Two championships. One legendary collapse. A reputation that precedes him.",
    story:"Two titles, and a single season so catastrophic — a 1-12 collapse in 2017 — that it's become league legend on its own. Most owners don't recover from a season like that. Don Ricardo clawed back to the top twice. That's a legacy." },
  { no:"05", name:"Matt Chandler", nickname:"Ice", years:"2014–2025", record:"100-61", seasons:12,
    titles:2, top6:10, sackos:0, img:"photo-chandler.jpg", video:"HfQdwNcZZrs", videoVertical:false,
    tagline:"Best regular-season win rate in league history. Respect the Ice.",
    story:"Chandler doesn't just compete, he dominates the regular season — a .621 win rate, the best of anyone who's played more than a handful of years. Two championships, 2019 and 2024, and a personal motto the rest of the league has learned to fear: Respect the Ice." },
  { no:"06", name:"Ramy Najm", nickname:"Mr. Reliable", years:"2011–2025", record:"109-91", seasons:15,
    titles:1, top6:11, sackos:0, img:"photo-ramy.jpg", video:"ybRyVQsNYlk", videoVertical:true,
    tagline:"11 top-six finishes — more than anyone in league history.",
    story:"Ramy won the league's first-ever championship back in 2011 and has been the model of consistency ever since. Eleven top-six finishes in fifteen years is a league record. At this point, the one ring is starting to feel like an injustice." },
  { no:"07", name:"Andrew Vargas", nickname:"Worst to First", years:"2011–2025", record:"99-101", seasons:15,
    titles:1, top6:6, sackos:0, img:"photo-vargas.jpg", video:"wY7F_TuzQYQ", videoVertical:false,
    tagline:"Pulled off one of the great single-season turnarounds in league history.",
    story:"In 2015, Vargas turned a last-place roster into a championship team in a single offseason — a true worst-to-first title run. A decade of steady top-half finishes since, always around, always dangerous in the back half of the season." },
  { no:"08", name:"Gurpinder Deol", nickname:"Day One", years:"2014–2025", record:"86-75", seasons:12,
    titles:1, top6:7, sackos:0, img:"photo-gurp.jpg", video:"0cCZpf9gCeM", videoVertical:true,
    tagline:"Won the championship in his very first season in the league.",
    story:"Gurp joined the league in 2014 and won it all immediately — nobody else has matched that instant impact. He's been a steady contender ever since, still chasing the ghost of his own rookie-year legend." },
  { no:"09", name:"Eric Arnold", nickname:"Bookends", years:"2014–2025", record:"77-84", seasons:12,
    titles:1, top6:7, sackos:2, img:"photo-eric.jpg", video:"Muh-NlZamBQ", videoVertical:true,
    tagline:"One real championship, sandwiched by two last-place finishes seven years apart.",
    story:"A career defined by its middle — one real championship season in 2017, bookended by last-place finishes in 2016 and 2023. That 2017 title remains one of the more underrated runs in league history." },
  { no:"10", name:"Stin Wirtz", nickname:"Mr. .500", years:"2011–2025", record:"100-100", seasons:15,
    titles:0, top6:6, sackos:2, img:"photo-austin.jpg", video:"RYq9QsRCiIA", videoVertical:false,
    tagline:"Exactly even across fifteen seasons. The most balanced résumé in the league.",
    story:"100 wins, 100 losses, dead even across fifteen years — the most balanced record in league history. Consistency cuts both ways, though: two last-place finishes, including as recently as 2025." },
  { no:"11", name:"Mike Lewis", nickname:"The Comeback", years:"2015–2025", record:"69-79", seasons:11,
    titles:0, top6:5, sackos:3, img:"photo-mike.jpg", video:"Zc_B097CPWw", videoVertical:true,
    tagline:"Survived the toughest three-year stretch in league history.",
    story:"Owner of the roughest run anyone's ever had — three straight last-place finishes from 2019 through 2021, a streak nobody else has come close to matching. He's been climbing the standings ever since, and the league hasn't let him forget where he started." },
  { no:"12", name:"Matt Krause", nickname:"The Sleeper", years:"2015–2025", record:"59-50", seasons:8,
    titles:0, top6:5, sackos:0, img:"photo-krause.jpg", video:"fyS7vCF14G0", videoVertical:true,
    tagline:"Best winning percentage of anyone who's never won a ring.",
    story:"Krause has quietly posted the best win rate of any owner who's never hoisted the trophy. Fewer seasons than most of the league's core, but the numbers say his championship is overdue. Book it." },
];

// Year-by-year season recap
const TIMELINE = [
  ["2011","Ramy Najm wins the inaugural Made In Strongsville championship."],
  ["2012","Luis Herrera claims his first title."],
  ["2013","Andrew Brooks wins the first of his record four championships."],
  ["2014","Gurpinder Deol wins it all in his rookie season."],
  ["2015","Andrew Vargas completes a worst-to-first title run."],
  ["2016","Don Ricardo claims his first championship."],
  ["2017","Don Ricardo posts the worst season in league history: 1-12."],
  ["2018","Andrew Brooks wins championship No. 2."],
  ["2019","Matt Chandler wins his first title. Mike Lewis begins a three-year stretch in last place."],
  ["2020","Andrew Brooks wins championship No. 3."],
  ["2021","Luis Herrera wins his second title. Mike Lewis's last-place streak ends after three straight years."],
  ["2022","Don Ricardo wins his second championship."],
  ["2023","Andrew Brooks wins a record fourth championship."],
  ["2024","Matt Chandler wins his second title. Brooks finishes last the year after his 4th ring."],
  ["2025","Steve Boden wins his first championship after a decade in the league."],
];

// Leaderboards for Hall of Fame page
const LB_TITLES = [
  ["Andrew Brooks","4","2013, 2018, 2020, 2023"],
  ["Luis Herrera","2","2012, 2021"],
  ["Don Ricardo","2","2016, 2022"],
  ["Matt Chandler","2","2019, 2024"],
  ["Ramy Najm","1","2011"],
];
const LB_WINPCT = [
  ["Matt Chandler",".621","100-61"],
  ["Luis Herrera",".560","112-88"],
  ["Ramy Najm",".545","109-91"],
  ["Matt Krause",".541","59-50"],
  ["Gurpinder Deol",".534","86-75"],
];
const LB_WINS = [
  ["Luis Herrera","112"],
  ["Ramy Najm","109"],
  ["Don Ricardo","103"],
  ["Matt Chandler","100"],
  ["Stin Wirtz","100"],
];
const LB_TOP6 = [
  ["Ramy Najm","11"],
  ["Matt Chandler","10"],
  ["Luis Herrera","8"],
  ["Don Ricardo","7"],
  ["Gurpinder Deol","7"],
];
const LB_SACKOS = [
  ["Mike Lewis","3"],
  ["Andrew Brooks","2"],
  ["Stin Wirtz","2"],
  ["Eric Arnold","2"],
  ["Don Ricardo","1"],
];

// Polls — category: "League Rules" | "Draft" | "General"
const POLLS = [
  { q:"Should playoff payouts include a 3rd place prize this year?", cat:"League Rules",
    date:"Closed Jul 22, 2026", status:"closed",
    options:[ ["Yes, add a 3rd place payout", 100], ["No, keep it top 2", 0] ] },
  { q:"What time should the draft start Saturday, Aug 22?", cat:"Draft",
    date:"Posted Jul 20, 2026", status:"open",
    options:[ ["10:00 AM", null], ["12:00 PM", null], ["2:00 PM", null] ] },
  { q:"Should we switch to full PPR scoring next season?", cat:"League Rules",
    date:"Closed Jan 14, 2026", status:"closed",
    options:[ ["Yes, full PPR", 67], ["No, keep half-PPR", 33] ] },
  { q:"Snake draft or auction draft for 2026?", cat:"Draft",
    date:"Closed Jun 2, 2026", status:"closed",
    options:[ ["Snake draft", 75], ["Auction draft", 25] ] },
  { q:"Funniest team name in league history?", cat:"General",
    date:"Closed Mar 9, 2026", status:"closed",
    options:[ ["\u201COff Consistently\u201D — Brooks, 2024", 41], ["\u201CDON RICARDO\u201D — Don, 2017", 34], ["\u201CStinky\u201D — Steve, 2022", 25] ] },
  { q:"Who's most likely to finish last in 2026?", cat:"General",
    date:"Posted Jul 10, 2026", status:"open",
    options:[ ["Stin Wirtz", null], ["Eric Arnold", null], ["Someone new entirely", null] ] },
];

// Beer Chugs — grouped by member. id = YouTube video ID (works for both
// youtu.be/ID and youtube.com/shorts/ID links).
const CHUGS = [
  { member:"Andrew Brooks", img:"photo-brooks.jpg", videos:[
    { title:"Brooks Chug 1", id:"X9p91GaDub0" },
    { title:"Brooks Chug 2", id:"4dWBIZRtDJ0" },
    { title:"Brooks Chug 3", id:"92NOOTPwT8s" },
  ]},
  { member:"Matt Chandler", img:"photo-chandler.jpg", videos:[
    { title:"Chandler Chug 1 – RIP Hyno", id:"ZTyR8BdRu-0" },
  ]},
  { member:"Eric Arnold", img:"photo-eric.jpg", videos:[
    { title:"Eric Chug 1", id:"Y4HyhIErck8" },
    { title:"Eric Chug 2", id:"boSy03rdzic" },
    { title:"Eric Chug 3", id:"-9S69TySsT4" },
    { title:"Eric Chug 4", id:"nGEdv1jjrEM" },
  ]},
  { member:"Gurpinder Deol", img:"photo-gurp.jpg", videos:[
    { title:"Gurp Chug 1", id:"N-rWInFt-4U" },
    { title:"Gurp Chug 2", id:"Wmuxh1DRE28" },
    { title:"Gurp Chug 3", id:"55TwkaPCw7A" },
    { title:"Gurp Chug 4", id:"-j0WdzsjtMM" },
    { title:"Gurp Chug 5", id:"Pm-frXOPZy8" },
  ]},
  { member:"Matt Krause", img:"photo-krause.jpg", videos:[
    { title:"Krause Chug 1", id:"RTnHztFwuF0" },
    { title:"Krause Chug 2", id:"SRF9iUL-m8A" },
    { title:"Krause Chug 3", id:"DZ7EnDTFBcg" },
  ]},
  { member:"Luis Herrera", img:"photo-luis.jpg", videos:[
    { title:"Luis Chug 1", id:"HjMJJuRSxi0" },
    { title:"Luis Chug 2", id:"Med66Oc5rnE" },
  ]},
  { member:"Mike Lewis", img:"photo-mike.jpg", videos:[
    { title:"Mike Chug 1", id:"22IfdO215qs" },
    { title:"Mike Chug 2", id:"aEyY2AUTyi4" },
    { title:"Mike Chug 3", id:"CdN6TYMgpQ0" },
    { title:"Mike Chug 4", id:"X1df1WgzOjw" },
  ]},
  { member:"Ramy Najm", img:"photo-ramy.jpg", videos:[
    { title:"Ramy Chug 1", id:"1G3YT2NfmXs" },
    { title:"Ramy Chug 2", id:"Yb77nkxNVsE" },
  ]},
  { member:"Steve Boden", img:"photo-steve.jpg", videos:[
    { title:"Steve Chug 1", id:"pRu7UfA4WNQ" },
    { title:"Steve Chug 2", id:"E2ChZVRZngo" },
    { title:"Steve Chug 3", id:"9Ski7Ru64Fs" },
    { title:"Steve Chug 4", id:"-u9JGAjLa1w" },
  ]},
  { member:"Stin Wirtz", img:"photo-austin.jpg", videos:[
    { title:"Stin Chug 1", id:"bQB1TWBZlnM" },
    { title:"Stin Chug 2", id:"8MtHzpHDKRI" },
  ]},
  { member:"Andrew Vargas", img:"photo-vargas.jpg", videos:[
    { title:"Vargas Chug 1", id:"V16MD7YnF20" },
    { title:"Vargas Chug 2", id:"NgQe15xvIyo" },
    { title:"Vargas Chug 3", id:"_ke6m0kl39k" },
  ]},
];
