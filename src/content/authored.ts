import type { Phrase } from '../types';
export const phrase = (row: string): Phrase => { const [en, kn, knr, te, ter] = row.split('|'); return { en, kn, knr, te, ter }; };
export type Unit = { day: number; title: string; category: string; objective: string; words: string; noun?: boolean; pattern: string; kn: string; te: string; examples: string; questions: string; prompt: string; check: string };
export const units: Unit[] = [
{day:1,title:'Hello, you',category:'First words',objective:'Greet each other and respond politely.',pattern:'A small conversation',kn:'Namaskaara is a polite greeting. Neevu is the respectful “you”; chennaagiddeeraa asks how someone is.',te:'Namaskaaram is a polite greeting. Meeru is the respectful “you”; baagunnaaraa asks how someone is.',
words:`Hello|ನಮಸ್ಕಾರ|namaskaara|నమస్కారం|namaskaaram
Thank you|ಧನ್ಯವಾದಗಳು|dhanyavaadagalu|ధన్యవాదాలు|dhanyavaadaalu
Yes|ಹೌದು|haudu|అవును|avunu
No (not so)|ಅಲ್ಲ|alla|కాదు|kaadu
Please come (polite)|ಬನ್ನಿ|banni|రండి|randi
See you again|ಮತ್ತೆ ಸಿಗೋಣ|matte sigona|మళ్లీ కలుద్దాం|malli kaluddaam`,
examples:`How are you?|ನೀವು ಚೆನ್ನಾಗಿದ್ದೀರಾ?|neevu chennaagiddeeraa|మీరు బాగున్నారా?|meeru baagunnaaraa
I am well.|ನಾನು ಚೆನ್ನಾಗಿದ್ದೇನೆ.|naanu chennaagiddene|నేను బాగున్నాను.|nenu baagunnaanu
Thank you.|ಧನ್ಯವಾದಗಳು.|dhanyavaadagalu|ధన్యవాదాలు.|dhanyavaadaalu`,questions:`Hello! How are you?|ನಮಸ್ಕಾರ! ನೀವು ಚೆನ್ನಾಗಿದ್ದೀರಾ?|namaskaara neevu chennaagiddeeraa|నమస్కారం! మీరు బాగున్నారా?|namaskaaram meeru baagunnaaraa
Shall we meet again?|ಮತ್ತೆ ಸಿಗೋಣವೇ?|matte sigonave|మళ్లీ కలుద్దామా?|malli kaluddaamaa`,prompt:'Greet your partner, ask how they are, and thank them.',check:'Use a greeting, a question, and a reply. Swap roles.'},
{day:2,title:'You & me',category:'First words',objective:'Introduce yourself and recognise personal pronouns.',pattern:'My name is…',kn:'Nanna means “my”. In “Nanna hesaru …”, the name follows hesaru (name); English “is” has no separate word here.',te:'Naa means “my”. In “Naa peru …”, the name follows peru (name); no separate word for “is” is needed.',
words:`I|ನಾನು|naanu|నేను|nenu
You (polite)|ನೀವು|neevu|మీరు|meeru
My|ನನ್ನ|nanna|నా|naa
Name|ಹೆಸರು|hesaru|పేరు|peru
We|ನಾವು|naavu|మేము|memu
You (casual)|ನೀನು|neenu|నువ్వు|nuvvu`,
examples:`My name is Ravi.|ನನ್ನ ಹೆಸರು ರವಿ.|nanna hesaru ravi|నా పేరు రవి.|naa peru ravi
What is your name?|ನಿಮ್ಮ ಹೆಸರು ಏನು?|nimma hesaru enu|మీ పేరు ఏమిటి?|mee peru emiti
My name is Anu.|ನನ್ನ ಹೆಸರು ಅನು.|nanna hesaru anu|నా పేరు అను.|naa peru anu`,questions:`What is your name?|ನಿಮ್ಮ ಹೆಸರು ಏನು?|nimma hesaru enu|మీ పేరు ఏమిటి?|mee peru emiti
And your name?|ನಿಮ್ಮ ಹೆಸರು?|nimma hesaru|మీ పేరు?|mee peru`,prompt:'Introduce yourself using your own name, then ask your partner’s name.',check:'Replace Ravi or Anu with your name. Use the polite form of “your”.'},
{day:3,title:'This & that',category:'First words',objective:'Identify nearby and distant everyday objects.',pattern:'This is / that is',kn:'Idu points to a nearby thing; adu points to a more distant thing. Say idu + noun without adding an English-style “is”.',te:'Idi points to a nearby thing; adi points to a more distant thing. Say idi + noun without adding a separate “is”.',noun:true,
words:`Book|ಪುಸ್ತಕ|pustaka|పుస్తకం|pustakam
Pen|ಪೆನ್ನು|pennu|పెన్ను|pennu
Bag|ಚೀಲ|cheela|సంచి|sanchi
Chair|ಕುರ್ಚಿ|kurchi|కుర్చీ|kurchee
Table|ಮೇಜು|meju|బల్ల|balla
Phone|ಫೋನ್|phone|ఫోన్|phone`,examples:`This is a book.|ಇದು ಪುಸ್ತಕ.|idu pustaka|ఇది పుస్తకం.|idi pustakam
That is a chair.|ಅದು ಕುರ್ಚಿ.|adu kurchi|అది కుర్చీ.|adi kurchee
This is a pen.|ಇದು ಪೆನ್ನು.|idu pennu|ఇది పెన్ను.|idi pennu`,questions:`What is this?|ಇದು ಏನು?|idu enu|ఇది ఏమిటి?|idi emiti
What is that?|ಅದು ಏನು?|adu enu|అది ఏమిటి?|adi emiti`,prompt:'Point to three things around you and name them.',check:'Use “this” for something nearby and “that” for something farther away.'},
{day:4,title:'A little curiosity',category:'First words',objective:'Ask what, who, and where.',pattern:'Question words in context',kn:'Enu asks “what”, yaaru asks “who”, and elli asks “where”. Ellide combines “where” with “is” for a thing.',te:'Emiti asks “what”, evaru asks “who”, and ekkada asks “where”. Use ekkada undi for the location of a thing.',
words:`What|ಏನು|enu|ఏమిటి|emiti
Who|ಯಾರು|yaaru|ఎవరు|evaru
Where|ಎಲ್ಲಿ|elli|ఎక్కడ|ekkada
When|ಯಾವಾಗ|yaavaaga|ఎప్పుడు|eppudu
Why|ಯಾಕೆ|yaake|ఎందుకు|enduku
How|ಹೇಗೆ|hege|ఎలా|elaa`,examples:`What is this?|ಇದು ಏನು?|idu enu|ఇది ఏమిటి?|idi emiti
Who are you?|ನೀವು ಯಾರು?|neevu yaaru|మీరు ఎవరు?|meeru evaru
Where is the book?|ಪುಸ್ತಕ ಎಲ್ಲಿದೆ?|pustaka ellide|పుస్తకం ఎక్కడ ఉంది?|pustakam ekkada undi`,questions:`What is this?|ಇದು ಏನು?|idu enu|ఇది ఏమిటి?|idi emiti
Where is the book?|ಪುಸ್ತಕ ಎಲ್ಲಿದೆ?|pustaka ellide|పుస్తకం ఎక్కడ ఉంది?|pustakam ekkada undi`,prompt:'Ask your partner one “what” question and one “where” question.',check:'Choose the question word by the kind of answer you need.'},
{day:6,title:'At the fruit stall',category:'Food & favourites',objective:'Name six fruits and ask for one.',pattern:'I want…',kn:'Nanage means “to me”; nanage + item + beku expresses “I want / need …”. Keep beku at the end.',te:'Naaku means “to me”; naaku + item + kaavaali expresses “I want / need …”. Keep kaavaali at the end.',noun:true,
words:`Mango|ಮಾವಿನ ಹಣ್ಣು|maavina hannu|మామిడి పండు|maamidi pandu
Banana|ಬಾಳೆಹಣ್ಣು|baalehannu|అరటిపండు|aratipandu
Apple|ಸೇಬು|sebu|ఆపిల్|aapil
Grapes|ದ್ರಾಕ್ಷಿ|draakshi|ద్రాక్ష|draaksha
Orange|ಕಿತ್ತಳೆ|kittale|నారింజ|naarinja
Guava|ಸೀಬೆಹಣ್ಣು|seebehannu|జామపండు|jaamapandu`,examples:`I want a mango.|ನನಗೆ ಮಾವಿನ ಹಣ್ಣು ಬೇಕು.|nanage maavina hannu beku|నాకు మామిడి పండు కావాలి.|naaku maamidi pandu kaavaali
I want a banana.|ನನಗೆ ಬಾಳೆಹಣ್ಣು ಬೇಕು.|nanage baalehannu beku|నాకు అరటిపండు కావాలి.|naaku aratipandu kaavaali
I want grapes.|ನನಗೆ ದ್ರಾಕ್ಷಿ ಬೇಕು.|nanage draakshi beku|నాకు ద్రాక్ష కావాలి.|naaku draaksha kaavaali`,questions:`What do you want?|ನಿಮಗೆ ಏನು ಬೇಕು?|nimage enu beku|మీకు ఏమి కావాలి?|meeku emi kaavaali
Do you want grapes?|ನಿಮಗೆ ದ್ರಾಕ್ಷಿ ಬೇಕಾ?|nimage draakshi bekaa|మీకు ద్రాక్ష కావాలా?|meeku draaksha kaavaalaa`,prompt:'Play fruit seller and customer. Ask for two different fruits.',check:'Use the full “I want” pattern; switch roles.'},
{day:7,title:'Something to eat',category:'Food & favourites',objective:'Name familiar food and ask whether it is available.',pattern:'Is there…?',kn:'For availability, use item + ideyaa? A reply can use ide (“there is”) or illa (“there is not”).',te:'For availability, use item + undaa? A reply can use undi (“there is”) or ledu (“there is not”).',noun:true,
words:`Cooked rice|ಅನ್ನ|anna|అన్నం|annam
Water|ನೀರು|neeru|నీళ్లు|neellu
Milk|ಹಾಲು|haalu|పాలు|paalu
Coffee|ಕಾಫಿ|kaafi|కాఫీ|kaafee
Tea|ಚಹಾ|chahaa|టీ|tee
Curd|ಮೊಸರು|mosaru|పెరుగు|perugu`,examples:`Is there water?|ನೀರು ಇದೆಯಾ?|neeru ideyaa|నీళ్లు ఉన్నాయా?|neellu unnaayaa
There is milk.|ಹಾಲು ಇದೆ.|haalu ide|పాలు ఉన్నాయి.|paalu unnaayi
Is there curd?|ಮೊಸರು ಇದೆಯಾ?|mosaru ideyaa|పెరుగు ఉందా?|perugu undaa`,questions:`Is there curd?|ಮೊಸರು ಇದೆಯಾ?|mosaru ideyaa|పెరుగు ఉందా?|perugu undaa
Is there milk?|ಹಾಲು ಇದೆಯಾ?|haalu ideyaa|పాలు ఉన్నాయా?|paalu unnaayaa`,prompt:'Ask what is available for breakfast.',check:'Telugu water and milk take plural agreement: unnaayi / unnaayaa.'},
{day:8,title:'One, two, a few',category:'Food & favourites',objective:'Count from one to six and ask how many.',pattern:'Number before the thing',kn:'Numbers generally come before the noun. Ondu pustaka is “one book”; eradu pustakagalu is “two books”.',te:'Numbers generally come before the noun. Oka pustakam is “one book”; rendu pustakaalu is “two books”. Oka is used before a noun; okati is the counting form.',
words:`One (counting)|ಒಂದು|ondu|ఒకటి|okati
Two|ಎರಡು|eradu|రెండు|rendu
Three|ಮೂರು|mooru|మూడు|moodu
Four|ನಾಲ್ಕು|naalku|నాలుగు|naalugu
Five|ಐದು|aidu|ఐదు|aidu
Six|ಆರು|aaru|ఆరు|aaru`,examples:`One book.|ಒಂದು ಪುಸ್ತಕ.|ondu pustaka|ఒక పుస్తకం.|oka pustakam
Two books.|ಎರಡು ಪುಸ್ತಕಗಳು.|eradu pustakagalu|రెండు పుస్తకాలు.|rendu pustakaalu
How many books?|ಎಷ್ಟು ಪುಸ್ತಕಗಳು?|eshtu pustakagalu|ఎన్ని పుస్తకాలు?|enni pustakaalu`,questions:`How many books?|ಎಷ್ಟು ಪುಸ್ತಕಗಳು?|eshtu pustakagalu|ఎన్ని పుస్తకాలు?|enni pustakaalu
One or two?|ಒಂದಾ ಎರಡಾ?|ondaa eradaa|ఒకటా రెండా?|okataa rendaa`,prompt:'Count objects together, then ask for one or two books.',check:'Use oka, rather than okati, before a Telugu noun.'},
{day:9,title:'Your favourites',category:'Food & favourites',objective:'Express a preference and offer something politely.',pattern:'I like…',kn:'Nanage + item + ishta means “I like …”. Ishta expresses liking; beku expresses wanting.',te:'Naaku + item + ishtam means “I like …”. Ishtam expresses liking; kaavaali expresses wanting.',
words:`Like / liking|ಇಷ್ಟ|ishta|ఇష్టం|ishtam
Want / need|ಬೇಕು|beku|కావాలి|kaavaali
Do not want|ಬೇಡ|beda|వద్దు|vaddu
A little|ಸ್ವಲ್ಪ|swalpa|కొంచెం|konchem
More|ಇನ್ನೂ|innoo|ఇంకా|inkaa
Enough|ಸಾಕು|saaku|చాలు|chaalu`,examples:`I like coffee.|ನನಗೆ ಕಾಫಿ ಇಷ್ಟ.|nanage kaafi ishta|నాకు కాఫీ ఇష్టం.|naaku kaafee ishtam
I want a little water.|ನನಗೆ ಸ್ವಲ್ಪ ನೀರು ಬೇಕು.|nanage swalpa neeru beku|నాకు కొంచెం నీళ్లు కావాలి.|naaku konchem neellu kaavaali
That is enough.|ಅಷ್ಟು ಸಾಕು.|ashtu saaku|అంతే చాలు.|ante chaalu`,questions:`Do you like coffee?|ನಿಮಗೆ ಕಾಫಿ ಇಷ್ಟವಾ?|nimage kaafi ishtavaa|మీకు కాఫీ ఇష్టమా?|meeku kaafee ishtamaa
Do you want more?|ಇನ್ನೂ ಬೇಕಾ?|innoo bekaa|ఇంకా కావాలా?|inkaa kaavaalaa`,prompt:'Tell your partner one thing you like; offer them a little more.',check:'Distinguish liking something from wanting it right now.'},
{day:11,title:'Meet my family',category:'People & home',objective:'Name family members and introduce them respectfully.',pattern:'This is my… (a person)',kn:'Ivaru is a respectful “this person / they”. Use ivaru nanna … for introducing an adult respectfully.',te:'Eeyana is respectful for a man; eeme for a woman. Use eeyana maa naanna and eeme maa amma. Maa (“our”) is natural for family members.',
words:`Mother|ಅಮ್ಮ|amma|అమ్మ|amma
Father|ಅಪ್ಪ|appa|నాన్న|naanna
Older brother|ಅಣ್ಣ|anna|అన్నయ్య|annayya
Older sister|ಅಕ್ಕ|akka|అక్క|akka
Younger brother|ತಮ್ಮ|tamma|తమ్ముడు|tammudu
Younger sister|ತಂಗಿ|tangi|చెల్లి|chelli`,examples:`This is my mother.|ಇವರು ನನ್ನ ಅಮ್ಮ.|ivaru nanna amma|ఈమె మా అమ్మ.|eeme maa amma
This is my father.|ಇವರು ನನ್ನ ಅಪ್ಪ.|ivaru nanna appa|ఈయన మా నాన్న.|eeyana maa naanna
This is my older sister.|ಇವರು ನನ್ನ ಅಕ್ಕ.|ivaru nanna akka|ఈమె మా అక్క.|eeme maa akka`,questions:`Who is this?|ಇವರು ಯಾರು?|ivaru yaaru|ఈమె ఎవరు?|eeme evaru
Who is he?|ಇವರು ಯಾರು?|ivaru yaaru|ఈయన ఎవరు?|eeyana evaru`,prompt:'Introduce two family members using photos or imagined introductions.',check:'Choose the appropriate respectful form for the person.'},
{day:12,title:'Around the house',category:'People & home',objective:'Describe things in a home.',pattern:'My / your',kn:'Nanna means “my”; nimma means polite “your”. Put the possessive before the noun: nanna mane.',te:'Naa means “my”; mee means polite “your”. Put the possessive before the noun: naa illu.',noun:true,
words:`House|ಮನೆ|mane|ఇల్లు|illu
Room|ಕೋಣೆ|kone|గది|gadi
Door|ಬಾಗಿಲು|baagilu|తలుపు|talupu
Window|ಕಿಟಕಿ|kitaki|కిటికీ|kitikee
Bed|ಹಾಸಿಗೆ|haasige|మంచం|mancham
Key|ಬೀಗದ ಕೈ|beegada kai|తాళం చెవి|taalam chevi`,examples:`This is my house.|ಇದು ನನ್ನ ಮನೆ.|idu nanna mane|ఇది నా ఇల్లు.|idi naa illu
Where is your room?|ನಿಮ್ಮ ಕೋಣೆ ಎಲ್ಲಿದೆ?|nimma kone ellide|మీ గది ఎక్కడ ఉంది?|mee gadi ekkada undi
This is my key.|ಇದು ನನ್ನ ಬೀಗದ ಕೈ.|idu nanna beegada kai|ఇది నా తాళం చెవి.|idi naa taalam chevi`,questions:`Is this your house?|ಇದು ನಿಮ್ಮ ಮನೆಯಾ?|idu nimma maneyaa|ఇది మీ ఇల్లా?|idi mee illaa
Where is your room?|ನಿಮ್ಮ ಕೋಣೆ ಎಲ್ಲಿದೆ?|nimma kone ellide|మీ గది ఎక్కడ ఉంది?|mee gadi ekkada undi`,prompt:'Give a tiny tour: name a room and one thing that belongs to you.',check:'Place “my” or “your” before the object.'},
{day:13,title:'Big little things',category:'People & home',objective:'Describe size and quality.',pattern:'Describing a noun',kn:'Put the describing word before the noun: dodda mane. For “the house is big”, use mane doddadaagide.',te:'Put the describing word before the noun: pedda illu. For “the house is big”, use illu peddagaa undi.',
words:`Big|ದೊಡ್ಡ|dodda|పెద్ద|pedda
Small|ಚಿಕ್ಕ|chikka|చిన్న|chinna
New|ಹೊಸ|hosa|కొత్త|kotta
Old (a thing)|ಹಳೆಯ|haleya|పాత|paata
Good|ಒಳ್ಳೆಯ|olleya|మంచి|manchi
Beautiful|ಸುಂದರ|sundara|అందమైన|andamaina`,examples:`This is a big house.|ಇದು ದೊಡ್ಡ ಮನೆ.|idu dodda mane|ఇది పెద్ద ఇల్లు.|idi pedda illu
This is a new book.|ಇದು ಹೊಸ ಪುಸ್ತಕ.|idu hosa pustaka|ఇది కొత్త పుస్తకం.|idi kotta pustakam
The room is small.|ಕೋಣೆ ಚಿಕ್ಕದಾಗಿದೆ.|kone chikkadaagide|గది చిన్నగా ఉంది.|gadi chinnagaa undi`,questions:`Is this a new book?|ಇದು ಹೊಸ ಪುಸ್ತಕವಾ?|idu hosa pustakavaa|ఇది కొత్త పుస్తకమా?|idi kotta pustakamaa
Is the room small?|ಕೋಣೆ ಚಿಕ್ಕದಾಗಿದೆಯಾ?|kone chikkadaagideyaa|గది చిన్నగా ఉందా?|gadi chinnagaa undaa`,prompt:'Describe two nearby objects by size or age.',check:'Use the before-noun form; do not confuse “old thing” with an older person.'},
{day:14,title:'Where is it?',category:'People & home',objective:'Locate everyday things.',pattern:'Place + ide / undi',kn:'Mele means “on / above”; kelage means “below”. In “mejina mele”, the noun takes a linking form before the location word.',te:'Meeda means “on”; kinda means “below”. In “balla meeda”, the location phrase comes before undi.',
words:`Here|ಇಲ್ಲಿ|illi|ఇక్కడ|ikkada
There|ಅಲ್ಲಿ|alli|అక్కడ|akkada
Inside|ಒಳಗೆ|olage|లోపల|lopala
Outside|ಹೊರಗೆ|horage|బయట|bayata
On / above|ಮೇಲೆ|mele|మీద|meeda
Below|ಕೆಳಗೆ|kelage|కింద|kinda`,examples:`The book is here.|ಪುಸ್ತಕ ಇಲ್ಲಿದೆ.|pustaka illide|పుస్తకం ఇక్కడ ఉంది.|pustakam ikkada undi
The book is on the table.|ಪುಸ್ತಕ ಮೇಜಿನ ಮೇಲೆ ಇದೆ.|pustaka mejina mele ide|పుస్తకం బల్ల మీద ఉంది.|pustakam balla meeda undi
The bag is below the table.|ಚೀಲ ಮೇಜಿನ ಕೆಳಗೆ ಇದೆ.|cheela mejina kelage ide|సంచి బల్ల కింద ఉంది.|sanchi balla kinda undi`,questions:`Where is the book?|ಪುಸ್ತಕ ಎಲ್ಲಿದೆ?|pustaka ellide|పుస్తకం ఎక్కడ ఉంది?|pustakam ekkada undi
Where is the bag?|ಚೀಲ ಎಲ್ಲಿದೆ?|cheela ellide|సంచి ఎక్కడ ఉంది?|sanchi ekkada undi`,prompt:'Hide a familiar object and give your partner a location clue.',check:'Name the object, its location, and “is”.'},
{day:16,title:'Little everyday actions',category:'Everyday life',objective:'Recognise polite requests for common actions.',pattern:'Polite requests',kn:'Learn these polite request forms as whole words. Banni (“come”) and hogi (“go”) are different verb forms, not one universal ending.',te:'The -andi ending appears in many polite requests, such as tinandi and chadavandi. Randi (“come”) is an irregular form to learn whole.',
words:`Eat (polite)|ತಿನ್ನಿ|tinni|తినండి|tinandi
Drink (polite)|ಕುಡಿಯಿರಿ|kudiyiri|తాగండి|taagandi
Go (polite)|ಹೋಗಿ|hogi|వెళ్లండి|vellandi
Read (polite)|ಓದಿ|odi|చదవండి|chadavandi
Write (polite)|ಬರೆಯಿರಿ|bareyiri|రాయండి|raayandi
Sit (polite)|ಕುಳಿತುಕೊಳ್ಳಿ|kulithukolli|కూర్చోండి|koorchondi`,examples:`Please drink water.|ದಯವಿಟ್ಟು ನೀರು ಕುಡಿಯಿರಿ.|dayavittu neeru kudiyiri|దయచేసి నీళ్లు తాగండి.|dayachesi neellu taagandi
Please read the book.|ದಯವಿಟ್ಟು ಪುಸ್ತಕ ಓದಿ.|dayavittu pustaka odi|దయచేసి పుస్తకం చదవండి.|dayachesi pustakam chadavandi
Please sit here.|ದಯವಿಟ್ಟು ಇಲ್ಲಿ ಕುಳಿತುಕೊಳ್ಳಿ.|dayavittu illi kulithukolli|దయచేసి ఇక్కడ కూర్చోండి.|dayachesi ikkada koorchondi`,questions:`May I sit here?|ನಾನು ಇಲ್ಲಿ ಕುಳಿತುಕೊಳ್ಳಬಹುದಾ?|naanu illi kulithukollabahudaa|నేను ఇక్కడ కూర్చోవచ్చా?|nenu ikkada koorchovachchaa
May I drink water?|ನಾನು ನೀರು ಕುಡಿಯಬಹುದಾ?|naanu neeru kudiyabahudaa|నేను నీళ్లు తాగవచ్చా?|nenu neellu taagavachchaa`,prompt:'Give your partner three gentle, polite instructions.',check:'Use a polite verb form; add “please” if you wish.'},
{day:17,title:'A day in your life',category:'Everyday life',objective:'Describe a simple daily routine.',pattern:'I do… (a routine)',kn:'First-person routine forms often end in -uttene: oduttene (“I read”). Learn each complete form with its verb.',te:'First-person routine forms include chaduvutaanu (“I read”) and taagutaanu (“I drink”). The verb usually comes last.',
words:`Morning|ಬೆಳಿಗ್ಗೆ|beligge|ఉదయం|udayam
Afternoon|ಮಧ್ಯಾಹ್ನ|madhyaahna|మధ్యాహ్నం|madhyaahnam
Evening|ಸಂಜೆ|sanje|సాయంత్రం|saayantram
Night|ರಾತ್ರಿ|raatri|రాత్రి|raatri
Every day|ಪ್ರತಿದಿನ|pratidina|ప్రతిరోజూ|pratirojoo
Work|ಕೆಲಸ|kelasa|పని|pani`,examples:`I read every day.|ನಾನು ಪ್ರತಿದಿನ ಓದುತ್ತೇನೆ.|naanu pratidina oduttene|నేను ప్రతిరోజూ చదువుతాను.|nenu pratirojoo chaduvutaanu
I drink coffee in the morning.|ನಾನು ಬೆಳಿಗ್ಗೆ ಕಾಫಿ ಕುಡಿಯುತ್ತೇನೆ.|naanu beligge kaafi kudiyuttene|నేను ఉదయం కాఫీ తాగుతాను.|nenu udayam kaafee taagutaanu
I work every day.|ನಾನು ಪ್ರತಿದಿನ ಕೆಲಸ ಮಾಡುತ್ತೇನೆ.|naanu pratidina kelasa maaduttene|నేను ప్రతిరోజూ పని చేస్తాను.|nenu pratirojoo pani chestaanu`,questions:`Do you read every day?|ನೀವು ಪ್ರತಿದಿನ ಓದುತ್ತೀರಾ?|neevu pratidina odutteeraa|మీరు ప్రతిరోజూ చదువుతారా?|meeru pratirojoo chaduvutaaraa
Do you drink coffee in the morning?|ನೀವು ಬೆಳಿಗ್ಗೆ ಕಾಫಿ ಕುಡಿಯುತ್ತೀರಾ?|neevu beligge kaafi kudiyutteeraa|మీరు ఉదయం కాఫీ తాగుతారా?|meeru udayam kaafee taagutaaraa`,prompt:'Describe two things you do every day.',check:'Use a time phrase and a complete first-person verb.'},
{day:18,title:'Saying no, kindly',category:'Everyday life',objective:'Distinguish not being, not having, and not wanting.',pattern:'Different kinds of “not”',kn:'Alla rejects an identity; illa says something is absent; beda says it is not wanted. They are not interchangeable.',te:'Kaadu rejects an identity; ledu says something is absent; vaddu says it is not wanted. They are not interchangeable.',
words:`Is not (identity)|ಅಲ್ಲ|alla|కాదు|kaadu
Is not there|ಇಲ್ಲ|illa|లేదు|ledu
Do not want|ಬೇಡ|beda|వద్దు|vaddu
Today|ಇಂದು|indu|ఈరోజు|eeroju
Now|ಈಗ|eega|ఇప్పుడు|ippudu
Later|ಆಮೇಲೆ|aamele|తర్వాత|tarvaata`,examples:`This is not my book.|ಇದು ನನ್ನ ಪುಸ್ತಕ ಅಲ್ಲ.|idu nanna pustaka alla|ఇది నా పుస్తకం కాదు.|idi naa pustakam kaadu
There is no curd.|ಮೊಸರು ಇಲ್ಲ.|mosaru illa|పెరుగు లేదు.|perugu ledu
I do not want coffee now.|ನನಗೆ ಈಗ ಕಾಫಿ ಬೇಡ.|nanage eega kaafi beda|నాకు ఇప్పుడు కాఫీ వద్దు.|naaku ippudu kaafee vaddu`,questions:`Is this your book?|ಇದು ನಿಮ್ಮ ಪುಸ್ತಕವಾ?|idu nimma pustakavaa|ఇది మీ పుస్తకమా?|idi mee pustakamaa
Do you want coffee now?|ಈಗ ಕಾಫಿ ಬೇಕಾ?|eega kaafi bekaa|ఇప్పుడు కాఫీ కావాలా?|ippudu kaafee kaavaalaa`,prompt:'Decline a drink politely, then say something is not yours.',check:'Choose the negative based on meaning, not just the English word “no”.'},
{day:19,title:'Getting to know you',category:'Everyday life',objective:'Ask a few questions about another person’s day.',pattern:'Polite everyday questions',kn:'In these questions, polite second-person verbs use forms such as maadutteeri and hogutteeri. Question endings differ from statement forms.',te:'Polite questions use meeru with verbs such as chestaaru and veltaaru. Emi asks “what”; ekkadiki asks “to where”.',
words:`What work?|ಏನು ಕೆಲಸ?|enu kelasa|ఏం పని?|em pani
To where?|ಎಲ್ಲಿಗೆ?|ellige|ఎక్కడికి?|ekkadiki
At what time?|ಎಷ್ಟು ಗಂಟೆಗೆ?|eshtu gantege|ఎన్ని గంటలకు?|enni gantalaku
With whom?|ಯಾರ ಜೊತೆ?|yaara jothe|ఎవరితో?|evarito
At home|ಮನೆಯಲ್ಲಿ|maneyalli|ఇంట్లో|intlo
Together|ಒಟ್ಟಿಗೆ|ottige|కలిసి|kalisi`,examples:`What work do you do?|ನೀವು ಏನು ಕೆಲಸ ಮಾಡುತ್ತೀರಿ?|neevu enu kelasa maadutteeri|మీరు ఏం పని చేస్తారు?|meeru em pani chestaaru
Where are you going?|ನೀವು ಎಲ್ಲಿಗೆ ಹೋಗುತ್ತಿದ್ದೀರಿ?|neevu ellige hoguttiddeeri|మీరు ఎక్కడికి వెళ్తున్నారు?|meeru ekkadiki veltunnaaru
Are you at home?|ನೀವು ಮನೆಯಲ್ಲಿದ್ದೀರಾ?|neevu maneyalliddeeraa|మీరు ఇంట్లో ఉన్నారా?|meeru intlo unnaaraa`,questions:`Are you at home?|ನೀವು ಮನೆಯಲ್ಲಿದ್ದೀರಾ?|neevu maneyalliddeeraa|మీరు ఇంట్లో ఉన్నారా?|meeru intlo unnaaraa
What work do you do?|ನೀವು ಏನು ಕೆಲಸ ಮಾಡುತ್ತೀರಿ?|neevu enu kelasa maadutteeri|మీరు ఏం పని చేస్తారు?|meeru em pani chestaaru`,prompt:'Ask your partner about their work and where they are.',check:'Ask one question at a time; use the polite “you”.'},
{day:21,title:'Make a little time',category:'Out & about',objective:'Talk about today, tomorrow, and a meeting time.',pattern:'At a time',kn:'Use gantege for “at … o’clock”. Naale means tomorrow; ninne means yesterday.',te:'Use gantalaku for “at … o’clock”. Repu means tomorrow; ninna means yesterday.',
words:`Tomorrow|ನಾಳೆ|naale|రేపు|repu
Yesterday|ನಿನ್ನೆ|ninne|నిన్న|ninna
Time|ಸಮಯ|samaya|సమయం|samayam
Hour / o’clock|ಗಂಟೆ|gante|గంట|ganta
Week|ವಾರ|vaara|వారం|vaaram
Day|ದಿನ|dina|రోజు|roju`,examples:`Let us meet tomorrow.|ನಾಳೆ ಸಿಗೋಣ.|naale sigona|రేపు కలుద్దాం.|repu kaluddaam
Let us meet at six.|ಆರು ಗಂಟೆಗೆ ಸಿಗೋಣ.|aaru gantege sigona|ఆరు గంటలకు కలుద్దాం.|aaru gantalaku kaluddaam
What time is it?|ಎಷ್ಟು ಗಂಟೆ?|eshtu gante|ఎన్ని గంటలు?|enni gantalu`,questions:`When shall we meet?|ಯಾವಾಗ ಸಿಗೋಣ?|yaavaaga sigona|ఎప్పుడు కలుద్దాం?|eppudu kaluddaam
At what time?|ಎಷ್ಟು ಗಂಟೆಗೆ?|eshtu gantege|ఎన్ని గంటలకు?|enni gantalaku`,prompt:'Agree on a time to meet tomorrow.',check:'Include tomorrow and one time expression.'},
{day:22,title:'At the shop',category:'Out & about',objective:'Ask a price and request an item.',pattern:'How much? / please give',kn:'Eshtu asks price or quantity. Kodi is the polite “give”. Use idu eshtu for “how much is this?”.',te:'Enta asks price or amount. Ivvandi means polite “give”. Use idi enta for “how much is this?”.',noun:true,
words:`Money|ಹಣ|hana|డబ్బు|dabbu
Price|ಬೆಲೆ|bele|ధర|dhara
Shop|ಅಂಗಡಿ|angadi|దుకాణం|dukaanam
Rupee|ರೂಪಾಯಿ|roopaayi|రూపాయి|roopaayi
Vegetables|ತರಕಾರಿ|tarakaari|కూరగాయలు|kooragaayalu
Bill|ಬಿಲ್|bil|బిల్లు|billu`,examples:`How much is this?|ಇದು ಎಷ್ಟು?|idu eshtu|ఇది ఎంత?|idi enta
Please give one mango.|ಒಂದು ಮಾವಿನ ಹಣ್ಣು ಕೊಡಿ.|ondu maavina hannu kodi|ఒక మామిడి పండు ఇవ్వండి.|oka maamidi pandu ivvandi
Please give the bill.|ಬಿಲ್ ಕೊಡಿ.|bil kodi|బిల్లు ఇవ్వండి.|billu ivvandi`,questions:`What do you want?|ನಿಮಗೆ ಏನು ಬೇಕು?|nimage enu beku|మీకు ఏమి కావాలి?|meeku emi kaavaali
Do you want the bill?|ಬಿಲ್ ಬೇಕಾ?|bil bekaa|బిల్లు కావాలా?|billu kaavaalaa`,prompt:'Act out buying fruit: ask the price, request fruit, then ask for the bill.',check:'Use a polite request verb.'},
{day:23,title:'Finding your way',category:'Out & about',objective:'Recognise directions and ask where transport is.',pattern:'Go / turn + direction',kn:'Neravaagi hogi means “go straight”. Balakke / edakke tirugi means “turn right / left”. Learn these location forms whole.',te:'Nerugaa vellandi means “go straight”. Kudi vaipu / edama vaipu tiragandi means “turn right / left”.',
words:`Bus|ಬಸ್|bas|బస్సు|bassu
Road|ರಸ್ತೆ|raste|రోడ్డు|roddu
Right side|ಬಲಗಡೆ|balagade|కుడి వైపు|kudi vaipu
Left side|ಎಡಗಡೆ|edagade|ఎడమ వైపు|edama vaipu
Straight|ನೇರವಾಗಿ|neravaagi|నేరుగా|nerugaa
Near|ಹತ್ತಿರ|hattira|దగ్గర|daggara`,examples:`Go straight.|ನೇರವಾಗಿ ಹೋಗಿ.|neravaagi hogi|నేరుగా వెళ్లండి.|nerugaa vellandi
Turn right.|ಬಲಕ್ಕೆ ತಿರುಗಿ.|balakke tirugi|కుడి వైపు తిరగండి.|kudi vaipu tiragandi
Where is the bus?|ಬಸ್ ಎಲ್ಲಿದೆ?|bas ellide|బస్సు ఎక్కడ ఉంది?|bassu ekkada undi`,questions:`Where is the shop?|ಅಂಗಡಿ ಎಲ್ಲಿದೆ?|angadi ellide|దుకాణం ఎక్కడ ఉంది?|dukaanam ekkada undi
Should I turn right?|ಬಲಕ್ಕೆ ತಿರುಗಬೇಕಾ?|balakke tirugabekaa|కుడి వైపు తిరగాలా?|kudi vaipu tiragaalaa`,prompt:'Guide your partner to an imaginary shop in two steps.',check:'Give the direction and action together.'},
{day:24,title:'A little help',category:'Out & about',objective:'Ask for help and slower speech.',pattern:'Please…',kn:'Dayavittu adds “please”. Maataadi is a polite “speak”; nidhaanavaagi asks for a slower pace.',te:'Dayachesi adds “please”. Maatlaadandi is a polite “speak”; nemmadigaa asks for a slower pace.',
words:`Please|ದಯವಿಟ್ಟು|dayavittu|దయచేసి|dayachesi
Help|ಸಹಾಯ|sahaaya|సహాయం|sahaayam
Slowly|ನಿಧಾನವಾಗಿ|nidhaanavaagi|నెమ్మదిగా|nemmadigaa
Again|ಮತ್ತೆ|matte|మళ్లీ|malli
Say / tell (polite)|ಹೇಳಿ|heli|చెప్పండి|cheppandi
Wait (polite)|ಕಾಯಿರಿ|kaayiri|ఆగండి|aagandi`,examples:`Please help.|ದಯವಿಟ್ಟು ಸಹಾಯ ಮಾಡಿ.|dayavittu sahaaya maadi|దయచేసి సహాయం చేయండి.|dayachesi sahaayam cheyandi
Please speak slowly.|ದಯವಿಟ್ಟು ನಿಧಾನವಾಗಿ ಮಾತಾಡಿ.|dayavittu nidhaanavaagi maataadi|దయచేసి నెమ్మదిగా మాట్లాడండి.|dayachesi nemmadigaa maatlaadandi
Please say it again.|ದಯವಿಟ್ಟು ಮತ್ತೆ ಹೇಳಿ.|dayavittu matte heli|దయచేసి మళ్లీ చెప్పండి.|dayachesi malli cheppandi`,questions:`Do you need help?|ನಿಮಗೆ ಸಹಾಯ ಬೇಕಾ?|nimage sahaaya bekaa|మీకు సహాయం కావాలా?|meeku sahaayam kaavaalaa
Shall I say it again?|ಮತ್ತೆ ಹೇಳಲಾ?|matte helalaa|మళ్లీ చెప్పనా?|malli cheppanaa`,prompt:'Pretend you did not understand. Ask your partner to repeat slowly.',check:'Use “please”, “again”, and “slowly” in useful requests.'},
{day:26,title:'How you feel',category:'Closer conversations',objective:'Say how you feel or what you need.',pattern:'Feelings use different frames',kn:'Hasivaagide expresses hunger; baayaarikeyagide expresses thirst. Nanage introduces the experiencer. Learn these as whole patterns.',te:'Aakaligaa undi expresses hunger; daahangaa undi expresses thirst. Naaku introduces the experiencer. Not every feeling takes the same ending.',
words:`Hunger|ಹಸಿವು|hasivu|ఆకలి|aakali
Thirst|ಬಾಯಾರಿಕೆ|baayaarike|దాహం|daaham
Happiness|ಸಂತೋಷ|santosha|సంతోషం|santosham
Tiredness|ಆಯಾಸ|aayaasa|అలసట|alasata
Sleep|ನಿದ್ರೆ|nidre|నిద్ర|nidra
Health|ಆರೋಗ್ಯ|aarogya|ఆరోగ్యం|aarogyam`,examples:`I am hungry.|ನನಗೆ ಹಸಿವಾಗಿದೆ.|nanage hasivaagide|నాకు ఆకలిగా ఉంది.|naaku aakaligaa undi
I am thirsty.|ನನಗೆ ಬಾಯಾರಿಕೆಯಾಗಿದೆ.|nanage baayaarikeyagide|నాకు దాహంగా ఉంది.|naaku daahangaa undi
I am happy.|ನನಗೆ ಸಂತೋಷವಾಗಿದೆ.|nanage santoshavaagide|నాకు సంతోషంగా ఉంది.|naaku santoshangaa undi`,questions:`Are you hungry?|ನಿಮಗೆ ಹಸಿವಾಗಿದೆಯಾ?|nimage hasivaagideyaa|మీకు ఆకలిగా ఉందా?|meeku aakaligaa undaa
Are you happy?|ನಿಮಗೆ ಸಂತೋಷವಾಗಿದೆಯಾ?|nimage santoshavaagideyaa|మీకు సంతోషంగా ఉందా?|meeku santoshangaa undaa`,prompt:'Ask how your partner feels and offer something they might need.',check:'Use a complete feeling pattern, then a familiar request or offer.'},
{day:27,title:'About yesterday',category:'Closer conversations',objective:'Talk about a few completed actions.',pattern:'I did…',kn:'Past forms change with the verb: bande (“came”), hode (“went”), tinde (“ate”). Learn each whole form before generalising.',te:'First-person past forms include vachchaanu (“came”), vellaanu (“went”), and tinnaanu (“ate”). They work regardless of the speaker’s gender.',
words:`I came|ಬಂದೆ|bande|వచ్చాను|vachchaanu
I went|ಹೋದೆ|hode|వెళ్లాను|vellaanu
I ate|ತಿಂದೆ|tinde|తిన్నాను|tinnaanu
I drank|ಕುಡಿದೆ|kudide|తాగాను|taagaanu
I saw|ನೋಡಿದೆ|nodide|చూశాను|choosaanu
I read (past)|ಓದಿದೆ|odide|చదివాను|chadivaanu`,examples:`I came yesterday.|ನಾನು ನಿನ್ನೆ ಬಂದೆ.|naanu ninne bande|నేను నిన్న వచ్చాను.|nenu ninna vachchaanu
I ate rice.|ನಾನು ಅನ್ನ ತಿಂದೆ.|naanu anna tinde|నేను అన్నం తిన్నాను.|nenu annam tinnaanu
I read a book.|ನಾನು ಪುಸ್ತಕ ಓದಿದೆ.|naanu pustaka odide|నేను పుస్తకం చదివాను.|nenu pustakam chadivaanu`,questions:`When did you come?|ನೀವು ಯಾವಾಗ ಬಂದಿರಿ?|neevu yaavaaga bandiri|మీరు ఎప్పుడు వచ్చారు?|meeru eppudu vachchaaru
What did you eat?|ನೀವು ಏನು ತಿಂದಿರಿ?|neevu enu tindiri|మీరు ఏమి తిన్నారు?|meeru emi tinnaaru`,prompt:'Tell your partner two things you did yesterday.',check:'Use a past form rather than the routine form.'},
{day:28,title:'Plans for tomorrow',category:'Closer conversations',objective:'Make a simple plan and invite your partner.',pattern:'Tomorrow + action / let us…',kn:'Naale supplies future context with forms such as hoguttene. -ona in hogona and sigona makes a “let us” invitation.',te:'Repu supplies future context with forms such as veltaanu. Veldaam and kaluddaam make “let us” invitations.',
words:`Let us go|ಹೋಗೋಣ|hogona|వెళ్దాం|veldaam
Let us meet|ಸಿಗೋಣ|sigona|కలుద్దాం|kaluddaam
Let us eat|ತಿನ್ನೋಣ|tinnona|తిందాం|tindaam
I will come|ಬರುತ್ತೇನೆ|baruttene|వస్తాను|vastaanu
I will go|ಹೋಗುತ್ತೇನೆ|hoguttene|వెళ్తాను|veltaanu
I will call|ಕರೆ ಮಾಡುತ್ತೇನೆ|kare maaduttene|ఫోన్ చేస్తాను|phone chestaanu`,examples:`I will come tomorrow.|ನಾನು ನಾಳೆ ಬರುತ್ತೇನೆ.|naanu naale baruttene|నేను రేపు వస్తాను.|nenu repu vastaanu
Let us go together.|ಒಟ್ಟಿಗೆ ಹೋಗೋಣ.|ottige hogona|కలిసి వెళ్దాం.|kalisi veldaam
I will call tomorrow.|ನಾನು ನಾಳೆ ಕರೆ ಮಾಡುತ್ತೇನೆ.|naanu naale kare maaduttene|నేను రేపు ఫోన్ చేస్తాను.|nenu repu phone chestaanu`,questions:`Will you come tomorrow?|ನೀವು ನಾಳೆ ಬರುತ್ತೀರಾ?|neevu naale barutteeraa|మీరు రేపు వస్తారా?|meeru repu vastaaraa
Shall we go together?|ಒಟ್ಟಿಗೆ ಹೋಗೋಣವೇ?|ottige hogonave|కలిసి వెళ్దామా?|kalisi veldaamaa`,prompt:'Make a plan for tomorrow: when, what, and together or alone.',check:'Include a future time word and an invitation.'},
{day:29,title:'A little closer',category:'Closer conversations',objective:'Connect short thoughts and keep a conversation going.',pattern:'And / but',kn:'Mattu links words and clauses; aadare introduces a contrast. Keep both clauses short while practising.',te:'Mariyu links words and clauses; kaani introduces a contrast. In everyday speech, simple separate sentences are also natural.',
words:`And|ಮತ್ತು|mattu|మరియు|mariyu
But|ಆದರೆ|aadare|కానీ|kaani
Also|ಕೂಡ|kooda|కూడా|koodaa
With you (polite)|ನಿಮ್ಮ ಜೊತೆ|nimma jothe|మీతో|meeto
I understand|ನನಗೆ ಅರ್ಥವಾಗುತ್ತದೆ|nanage arthavaaguttade|నాకు అర్థమవుతుంది|naaku arthamavutundi
I do not understand|ನನಗೆ ಅರ್ಥವಾಗುವುದಿಲ್ಲ|nanage arthavaaguvudilla|నాకు అర్థం కావడం లేదు|naaku artham kaavadam ledu`,examples:`I like coffee and tea.|ನನಗೆ ಕಾಫಿ ಮತ್ತು ಚಹಾ ಇಷ್ಟ.|nanage kaafi mattu chahaa ishta|నాకు కాఫీ మరియు టీ ఇష్టం.|naaku kaafee mariyu tee ishtam
I like coffee, but I do not want it now.|ನನಗೆ ಕಾಫಿ ಇಷ್ಟ, ಆದರೆ ಈಗ ಬೇಡ.|nanage kaafi ishta aadare eega beda|నాకు కాఫీ ఇష్టం, కానీ ఇప్పుడు వద్దు.|naaku kaafee ishtam kaani ippudu vaddu
I will also come.|ನಾನೂ ಬರುತ್ತೇನೆ.|naanoo baruttene|నేను కూడా వస్తాను.|nenu koodaa vastaanu`,questions:`Do you like coffee or tea?|ನಿಮಗೆ ಕಾಫಿ ಇಷ್ಟವಾ ಚಹಾ ಇಷ್ಟವಾ?|nimage kaafi ishtavaa chahaa ishtavaa|మీకు కాఫీ ఇష్టమా టీ ఇష్టమా?|meeku kaafee ishtamaa tee ishtamaa
Will you also come?|ನೀವೂ ಬರುತ್ತೀರಾ?|neevoo barutteeraa|మీరు కూడా వస్తారా?|meeru koodaa vastaaraa`,prompt:'Have a six-line conversation: greeting, feeling, preference, question, plan, goodbye.',check:'Use “and” or “but” once. Ask for repetition when needed.'}
];
