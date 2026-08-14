// ===========================================================
// MADE IN STRONGSVILLE — league data
// Edit these arrays to update the site. No other files need to change.
// ===========================================================

const ROSTER = [
  { no:"01", name:"Steve Boden", nickname:"The Late Bloomer", years:"2016–2025", record:"64-71", seasons:10,
    titles:1, top6:5, sackos:1, img:"photo-steve.jpg", video:"iHvRlfyEPDc", videoVertical:true, currentChamp:true,
    h2h:{ best:[["Matt Krause","5-3"],["Don Ricardo","9-6"]], worst:[["Matt Chandler","1-9"],["Mike Lewis","3-8"]], even:[["Gurpinder Deol","5-5"],["Stin Wirtz","8-7"]] },
    tagline:"A decade of waiting, capped off by a championship in 2025.",
    story:"<p>Steve joined in 2016 and spent most of the following decade in the forgettable middle of the standings — never quite bad enough to be a real threat for last, never quite good enough to be a real threat to anyone else. The 2022 season was the exception that proved the rule: a genuine rock-bottom finish that looked, at the time, like the ceiling had been found.</p><p>Instead it turned out to be the floor. Three years later, in 2025, Steve put together the best season of his career at exactly the right time and walked away with his first championship — the newest name in league history, and a reminder that ten years of mediocrity can still end in a parade.</p>" },
  { no:"02", name:"Andrew Brooks", nickname:"The Trophy Bandit", years:"2011–2025", record:"94-106", seasons:15,
    titles:4, top6:7, sackos:2, img:"photo-brooks.jpg", video:"dNVigNLF3rI", videoVertical:true,
    h2h:{ best:[["Gurpinder Deol","8-4"],["Mike Lewis","9-5"]], worst:[["Luis Herrera","3-9"],["Matt Chandler","5-12"]], even:[["Don Ricardo","8-8"],["Eric Arnold","10-11"]] },
    tagline:"More championships than anyone in league history — with a losing career record.",
    story:"<p>Brooks has been in the league since day one, and his career record has never once been good — 94-106 heading into this season, the worst winning percentage of anyone who's stuck around this long. By any normal measure, he should be a middle-of-the-pack afterthought.</p><p>Instead he's the most decorated owner in league history. Four championships — 2013, 2018, 2020, 2023 — arriving seemingly out of nowhere, usually on the heels of an unremarkable regular season, always at the exact moment it mattered most. The trade-off is real: both times he's finished last came the year immediately after a title, as if the league extracts its toll eventually. Nobody has figured out how to stop him, and at this point, most have stopped trying.</p>" },
  { no:"03", name:"Luis Herrera", nickname:"The Quiet Goat", years:"2011–2025", record:"112-88", seasons:15,
    titles:2, top6:8, sackos:0, img:"photo-luis.jpg", video:"jo7BFVI88Gs", videoVertical:true,
    h2h:{ best:[["Andrew Brooks","10-3"],["Andrew Vargas","13-7"]], worst:[["Matt Chandler","3-10"],["Stin Wirtz","8-10"]], even:[["Don Ricardo","9-9"],["Mike Lewis","7-7"]] },
    tagline:"The best career record in league history. Zero last-place finishes. Ever.",
    story:"<p>Luis doesn't have a signature costume, a catchphrase, or a villain origin story. What he has is the best record in league history — 112 wins across fifteen seasons — and a stat nobody else can claim: he has never finished last, not once, in a league that has swallowed everyone else whole at some point.</p><p>Two championships, 2012 and 2021, nine years apart, bookend a decade of quietly being the team nobody wants on their schedule in November. He doesn't trash-talk and he doesn't need to; the record book does it for him.</p>" },
  { no:"04", name:"Don Ricardo", nickname:"The Don", years:"2011–2025", record:"103-97", seasons:15,
    titles:2, top6:7, sackos:1, img:"photo-don.jpg", video:"AsOpAyFtTUE", videoVertical:false,
    h2h:{ best:[["Andrew Vargas","12-6"],["Ramy Najm","8-6"]], worst:[["Gurpinder Deol","4-9"],["Matt Chandler","5-10"]], even:[["Luis Herrera","9-9"],["Andrew Brooks","7-8"]] },
    tagline:"Two championships. One legendary collapse. A reputation that precedes him.",
    story:"<p>Don's reputation precedes him more than almost anyone else's in the league — \"The Don\" is not a nickname people forgot to retire, it's one that gets invoked as a threat and a compliment in the same breath. Two championships, 2016 and 2022, built that legend in the first place.</p><p>But the real story is 2017 — a 1-12 collapse so complete it remains the single worst season in league history, a full year removed from being champion. Most owners don't come back from a season like that. Don didn't just come back; he won it all again five years later, turning his worst chapter into the setup for one of the better redemption arcs the league has seen.</p>" },
  { no:"05", name:"Matt Chandler", nickname:"Ice", years:"2014–2025", record:"100-61", seasons:12,
    titles:2, top6:10, sackos:0, img:"photo-chandler.jpg", video:"HfQdwNcZZrs", videoVertical:false,
    h2h:{ best:[["Steve Boden","9-1"],["Luis Herrera","10-3"]], worst:[["Ramy Najm","6-10"],["Stin Wirtz","5-8"]], even:[["Andrew Vargas","7-7"],["Matt Krause","5-4"]] },
    tagline:"Best regular-season win rate in league history. Respect the Ice.",
    story:"<p>Chandler built his reputation in the regular season, not the playoffs — a .621 win rate that's the best of anyone who's stuck around this long, the product of a cold, disciplined approach that rarely leaves points on the bench. \"Respect the Ice\" isn't just a motto; it's a standing threat to anyone who underestimates him in September.</p><p>For years the label was \"great regular season, no ring to show for it\" — until 2019 finally broke through. It took five more years for a second, in 2024, proof that dominance eventually converts if you're patient enough to keep showing up.</p>" },
  { no:"06", name:"Ramy Najm", nickname:"Mr. Reliable", years:"2011–2025", record:"109-91", seasons:15,
    titles:1, top6:11, sackos:0, img:"photo-ramy.jpg", video:"ybRyVQsNYlk", videoVertical:true,
    h2h:{ best:[["Stin Wirtz","10-6"],["Matt Chandler","10-6"]], worst:[["Don Ricardo","5-8"],["Matt Krause","5-8"]], even:[["Steve Boden","6-6"],["Mike Lewis","6-6"]] },
    tagline:"11 top-six finishes — more than anyone in league history.",
    story:"<p>Ramy won the league's very first championship back in 2011, and in the fifteen years since, he's quietly built the most consistent résumé anyone has ever posted here — eleven top-six finishes, more than any other owner, an absurd hit rate for a league this competitive.</p><p>What he hasn't done is win a second title, and the gap has started to feel less like bad luck and more like a running joke at his own expense. Every year he's in the conversation. Every year, someone else walks away with the trophy. At some point the numbers say that has to change.</p>" },
  { no:"07", name:"Andrew Vargas", nickname:"Worst to First", years:"2011–2025", record:"99-101", seasons:15,
    titles:1, top6:6, sackos:0, img:"photo-vargas.jpg", video:"wY7F_TuzQYQ", videoVertical:false,
    h2h:{ best:[["Steve Boden","9-6"],["Ramy Najm","10-7"]], worst:[["Don Ricardo","6-12"],["Luis Herrera","7-13"]], even:[["Matt Chandler","7-7"],["Gurpinder Deol","8-7"]] },
    tagline:"Pulled off one of the great single-season turnarounds in league history.",
    story:"<p>Vargas has spent most of his career in the comfortable middle of the standings — good enough to stay competitive, never quite good enough to be the story. For one season, that changed completely.</p><p>In 2015, he turned a last-place-caliber roster into a championship team in a single offseason, one of the most complete turnarounds the league has ever seen. He's been back to his usual steady self ever since, but that one run proved he has another gear when he needs it.</p>" },
  { no:"08", name:"Gurpinder Deol", nickname:"Day One", years:"2014–2025", record:"86-75", seasons:12,
    titles:1, top6:7, sackos:0, img:"photo-gurp.jpg", video:"0cCZpf9gCeM", videoVertical:true,
    h2h:{ best:[["Mike Lewis","12-6"],["Don Ricardo","8-4"]], worst:[["Matt Chandler","5-11"],["Andrew Brooks","4-8"]], even:[["Andrew Vargas","8-8"],["Steve Boden","5-5"]] },
    tagline:"Won the championship in his very first season in the league.",
    story:"<p>Gurp joined the league in 2014 and won the championship in his very first season — an instant, almost unfair amount of success for a rookie, the kind of debut that should be impossible in a league this deep.</p><p>He's been a steady, credible contender in the decade since, but nothing has quite matched that first year. Every season carries a little bit of the same question: can he catch lightning in a bottle twice, or was 2014 always going to be the peak?</p>" },
  { no:"09", name:"Eric Arnold", nickname:"Bookends", years:"2014–2025", record:"77-84", seasons:12,
    titles:1, top6:7, sackos:2, img:"photo-eric.jpg", video:"Muh-NlZamBQ", videoVertical:true,
    h2h:{ best:[["Mike Lewis","9-7"],["Steve Boden","6-5"]], worst:[["Gurpinder Deol","5-10"],["Luis Herrera","4-6"]], even:[["Andrew Brooks","10-10"],["Don Ricardo","6-6"]] },
    tagline:"One real championship, sandwiched by two last-place finishes seven years apart.",
    story:"<p>Eric's career has an unusual shape — a last-place finish in 2016, a last-place finish in 2023, and exactly one real moment of glory wedged in between: a championship in 2017 that's easy to overlook next to the years that bookend it.</p><p>Taken on its own, that title stacks up with anyone's — a real, earned championship in a real down-to-the-wire season. It's just had the misfortune of being surrounded on both sides by some of the roughest stretches in league history.</p>" },
  { no:"10", name:"Stin Wirtz", nickname:"Mr. .500", years:"2011–2025", record:"100-100", seasons:15,
    titles:0, top6:6, sackos:2, img:"photo-austin.jpg", video:"RYq9QsRCiIA", videoVertical:false,
    h2h:{ best:[["Matt Chandler","8-5"],["Andrew Vargas","9-7"]], worst:[["Matt Krause","1-6"],["Ramy Najm","6-10"]], even:[["Mike Lewis","7-7"],["Gurpinder Deol","7-8"]] },
    tagline:"Exactly even across fifteen seasons. The most balanced résumé in the league.",
    story:"<p>Stin's career record is exactly, almost suspiciously, even — 100 wins, 100 losses, across fifteen seasons, the most perfectly balanced résumé anyone in this league has ever produced. There's something almost impressive about being that consistently in the middle for that long.</p><p>The balance comes at a cost, though: two last-place finishes, including one as recently as 2025, proof that .500 can tip into disaster just as easily as it can hold steady. No championships yet, but also no real excuse — the talent to be a true contender has clearly been there the whole time.</p>" },
  { no:"11", name:"Mike Lewis", nickname:"The Comeback", years:"2015–2025", record:"69-79", seasons:11,
    titles:0, top6:5, sackos:3, img:"photo-mike.jpg", video:"Zc_B097CPWw", videoVertical:true,
    h2h:{ best:[["Steve Boden","9-3"],["Andrew Vargas","7-6"]], worst:[["Matt Chandler","4-8"],["Gurpinder Deol","6-11"]], even:[["Luis Herrera","7-7"],["Ramy Najm","6-6"]] },
    tagline:"Survived the toughest three-year stretch in league history.",
    story:"<p>Nobody in league history has had a run quite like Mike's three consecutive last-place finishes, from 2019 through 2021 — a streak so long and so complete that it became its own kind of league legend, the cautionary tale every new owner gets warned about.</p><p>What gets lost in the punchline is what happened next: he actually climbed out of it, methodically rebuilding into a respectable, competitive team in the years since. The basement years will always be part of his story, but so, increasingly, is the recovery.</p>" },
  { no:"12", name:"Matt Krause", nickname:"The Sleeper", years:"2015–2025", record:"59-50", seasons:8,
    titles:0, top6:5, sackos:0, img:"photo-krause.jpg", video:"fyS7vCF14G0", videoVertical:true,
    h2h:{ best:[["Stin Wirtz","6-1"],["Andrew Brooks","7-3"]], worst:[["Gurpinder Deol","2-6"],["Steve Boden","3-5"]], even:[["Luis Herrera","7-6"],["Don Ricardo","6-7"]] },
    tagline:"Best winning percentage of anyone who's never won a ring.",
    story:"<p>Krause joined later than most of the league's core, but in fewer seasons he's quietly built the best winning percentage of anyone who has never won a championship — a genuinely dangerous team every single year, the kind of record that should have produced at least one title by now.</p><p>It hasn't yet, and that's become its own storyline: the numbers say his ring is overdue, and every season that passes without one only raises the stakes on when it finally happens.</p>" },
];

// Year-by-year season recap
const TIMELINE = [
  ["2011","Ramy Najm wins the inaugural Made In Strongsville championship."],
  ["2012","Luis Herrera claims his first title."],
  ["2013","Andrew Brooks wins the first of his record four championships."],
  ["2014","Gurpinder Deol wins it all in his rookie season."],
  ["2015","Andrew Vargas completes a worst-to-first title run."],
  ["2016","Don Ricardo claims his first championship."],
  ["2017","Eric Arnold wins his first championship. Don Ricardo, meanwhile, posts the worst season in league history: 1-12."],
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

const LB_WEEKLY_HIGH = [
  ["Luis Herrera","204.48"],
  ["Matt Krause","178.00"],
  ["Mike Lewis","174.10"],
  ["Eric Arnold","169.78"],
  ["Mike Lewis","169.58"],
];
const LB_WEEKLY_LOW = [
  ["Andrew Brooks","37.44"],
  ["Stin Wirtz","41.04"],
  ["Andrew Brooks","42.02"],
  ["Don Ricardo","43.96"],
  ["Don Ricardo","46.24"],
];
const LB_SEASON_BEST = [
  ["Gurpinder Deol","12-1"],
  ["Stin Wirtz","12-1"],
  ["Don Ricardo","11-2"],
  ["Andrew Vargas","11-2"],
  ["Andrew Vargas","11-2"],
];
const LB_SEASON_WORST = [
  ["Don Ricardo","1-12"],
  ["Eric Arnold","3-11"],
  ["Don Ricardo","4-10"],
  ["Mike Lewis","4-10"],
  ["Stin Wirtz","4-10"],
];

// Polls — category: "League Rules" | "Draft" | "General"
const POLLS = [
  { q:"Should we add kickers back?", cat:"League Rules",
    date:"Closed Aug 4, 2026", status:"closed", initiatedBy:"Luis Herrera",
    note:"Closed early: changing a rule requires 8 votes. With 6 votes already in to reject, yes can't mathematically reach 8 — the outcome is decided regardless of how the remaining votes fall.",
    options:[
      ["No, keep kickers out", 67, ["Stin Wirtz","Matt Krause","Andrew Brooks","Gurpinder Deol","Matt Chandler","Steve Boden"]],
      ["Yes, add kickers back", 33, ["Mike Lewis","Eric Arnold","Luis Herrera"]],
    ] },
  { q:"Should we remove one of the two flex spots?", cat:"League Rules",
    date:"Closed Jul 18, 2026", status:"closed", initiatedBy:"Steve Boden",
    options:[
      ["Yes, remove one flex spot", 82, ["Don Ricardo","Eric Arnold","Matt Krause","Matt Chandler","Luis Herrera","Andrew Brooks","Steve Boden","Andrew Vargas","Ramy Najm"]],
      ["No, keep both flex spots", 18, ["Mike Lewis","Stin Wirtz"]],
    ] },
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
    { title:"Luis Chug 3", id:"cQDt6ceflus" },
    { title:"Luis Chug 4", id:"sttdk_kggxo" },
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

// Draft Order Challenge — off-season competition that sets draft position.
const DRAFT_STANDINGS = [
  ["Steve Boden",30], ["Ramy Najm",24], ["Gurpinder Deol",23], ["Mike Lewis",22],
  ["Matt Krause",21], ["Andrew Vargas",21], ["Luis Herrera",20], ["Stin Wirtz",20],
  ["Matt Chandler",17], ["Andrew Brooks",17], ["Don Ricardo",15], ["Eric Arnold",14],
];

const CHALLENGES = [
  { name:"Challenge 1", type:"NFL Playoff Brackets", status:"complete", results:[
    ["Steve Boden",7],["Mike Lewis",6],["Matt Chandler",6],["Matt Krause",5],["Stin Wirtz",5],
    ["Gurpinder Deol",4],["Ramy Najm",4],["Luis Herrera",3],["Andrew Brooks",3],["Don Ricardo",2],
    ["Eric Arnold",2],["Andrew Vargas",1],
  ]},
  { name:"Challenge 2", type:"March Madness", status:"complete", results:[
    ["Steve Boden",7],["Gurpinder Deol",6],["Ramy Najm",6],["Matt Krause",5],["Don Ricardo",5],
    ["Luis Herrera",4],["Stin Wirtz",4],["Mike Lewis",3],["Matt Chandler",3],["Andrew Vargas",2],
    ["Eric Arnold",2],["Andrew Brooks",1],
  ]},
  { name:"Challenge 3", type:"Masters Golf", status:"complete", results:[
    ["Gurpinder Deol",7],["Andrew Vargas",6],["Steve Boden",6],["Luis Herrera",5],["Andrew Brooks",5],
    ["Eric Arnold",4],["Ramy Najm",4],["Stin Wirtz",3],["Mike Lewis",3],["Matt Krause",3],
    ["Matt Chandler",2],["Don Ricardo",1],
  ]},
  { name:"Challenge 4", type:"NBA Bracket Challenge", status:"complete", results:[
    ["Andrew Vargas",7],["Don Ricardo",6],["Ramy Najm",6],["Andrew Brooks",5],["Luis Herrera",5],
    ["Matt Chandler",4],["Steve Boden",4],["Matt Krause",3],["Mike Lewis",3],["Stin Wirtz",2],
    ["Eric Arnold",2],["Gurpinder Deol",1],
  ]},
  { name:"Challenge 5", type:"World Cup Brackets", status:"complete", results:[
    ["Mike Lewis",7],["Stin Wirtz",6],["Steve Boden",6],["Matt Krause",5],["Andrew Vargas",5],
    ["Gurpinder Deol",4],["Eric Arnold",4],["Ramy Najm",4],["Luis Herrera",3],["Andrew Brooks",3],
    ["Matt Chandler",2],["Don Ricardo",1],
  ]},
  { name:"Challenge 6", type:"Kentucky Derby", status:"upcoming", results:[] },
  { name:"Challenge 8", type:"Horse Race", status:"upcoming", results:[] },
  { name:"Challenge 9", type:"Marble Race", status:"upcoming", results:[] },
  { name:"Challenge 10", type:"Super Smash Bros (Randomized)", status:"upcoming", results:[] },
  { name:"Challenge 10", type:"Beer Olympics (Semi-Skill)", status:"upcoming", results:[] },
];

// Draft Day photo history — one entry per year. img:null means no photo on
// record; the "quote" is what displays in the placeholder frame instead.
const DRAFT_PHOTOS = [
  { year:2011, img:null, quote:"Year one. Everyone was focused on the draft board, not the camera roll." },
  { year:2012, img:null, quote:"Somewhere, a photo of this draft exists. It has never been found." },
  { year:2013, img:null, quote:"The photo was taken. The phone that took it was not as lucky." },
  { year:2014, img:"photo-draft-2014.jpg" },
  { year:2015, img:null, quote:"Vargas was too busy staging his worst-to-first miracle to remember the camera." },
  { year:2016, img:"photo-draft-2016.jpg" },
  { year:2017, img:"photo-draft-2017.jpg" },
  { year:2018, img:"photo-draft-2018.jpg" },
  { year:2019, img:"photo-draft-2019.jpg" },
  { year:2020, img:"photo-draft-2020.jpg" },
  { year:2021, img:"photo-draft-2021.jpg" },
  { year:2022, img:"photo-draft-2022.jpg" },
  { year:2023, img:"photo-draft-2023.jpg" },
  { year:2024, img:"photo-draft-2024.jpg" },
  { year:2025, img:"photo-draft-2025.jpg" },
];
