"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const list = 'Bulbasaur:1|Ivysaur:2|Venusaur:3|Charmander:4|Charmeleon:5|Charizard:6|Squirtle:7|Wartortle:8|Blastoise:9|Caterpie:10|Metapod:11|Butterfree:12|Pikachu:25|Pikachu .1:25.1|Pikachu .2:25.2|Pikachu .3:25.3|Pikachu .4:25.4|Pikachu .5:25.5|Pikachu .6:25.6|Pikachu .7:25.7|Raichu:26|Raichu .1:26.1|Clefairy:35|Clefable:36|Vulpix:37|Vulpix .1:37.1|Ninetales:38|Ninetales .1:38.1|Oddish:43|Gloom:44|Vileplume:45|Diglett:50|Diglett .1:50.1|Dugtrio:51|Dugtrio .1:51.1|Meowth:52|Meowth .1:52.1|Meowth .2:52.2|Persian:53|Persian .1:53.1|Growlithe:58|Arcanine:59|Machop:66|Machoke:67|Machamp:68|Ponyta:77|Ponyta .1:77.1|Rapidash:78|Rapidash .1:78.1|Farfetch’d:83|Farfetch’d .1:83.1|Shellder:90|Cloyster:91|Gastly:92|Haunter:93|Gengar:94|Onix:95|Krabby:98|Kingler:99|Hitmonlee:106|Hitmonchan:107|Koffing:109|Weezing:110|Weezing .1:110.1|Rhyhorn:111|Rhydon:112|Goldeen:118|Seaking:119|Mr. Mime:122|Mr. Mime .1:122.1|Magikarp:129|Gyarados:130|Lapras:131|Ditto:132|Eevee:133|Vaporeon:134|Jolteon:135|Flareon:136|Snorlax:143|Mewtwo:150|Mew:151|Hoothoot:163|Noctowl:164|Chinchou:170|Lanturn:171|Pichu:172|Cleffa:173|Togepi:175|Togetic:176|Natu:177|Xatu:178|Bellossom:182|Sudowoodo:185|Wooper:194|Quagsire:195|Espeon:196|Umbreon:197|Wobbuffet:202|Steelix:208|Qwilfish:211|Shuckle:213|Sneasel:215|Swinub:220|Piloswine:221|Corsola:222|Corsola .1:222.1|Remoraid:223|Octillery:224|Delibird:225|Mantine:226|Tyrogue:236|Hitmontop:237|Larvitar:246|Pupitar:247|Tyranitar:248|Celebi:251|Zigzagoon:263|Zigzagoon .1:263.1|Linoone:264|Linoone .1:264.1|Lotad:270|Lombre:271|Ludicolo:272|Seedot:273|Nuzleaf:274|Shiftry:275|Wingull:278|Pelipper:279|Ralts:280|Kirlia:281|Gardevoir:282|Nincada:290|Ninjask:291|Shedinja:292|Sableye:302|Mawile:303|Electrike:309|Manectric:310|Roselia:315|Wailmer:320|Wailord:321|Torkoal:324|Trapinch:328|Vibrava:329|Flygon:330|Lunatone:337|Solrock:338|Barboach:339|Whiscash:340|Corphish:341|Crawdaunt:342|Baltoy:343|Claydol:344|Feebas:349|Milotic:350|Duskull:355|Dusclops:356|Wynaut:360|Snorunt:361|Glalie:362|Jirachi:385|Budew:406|Roserade:407|Combee:415|Vespiquen:416|Cherubi:420|Cherrim:421|Cherrim .1:421.1|Shellos:422|Shellos .1:422.1|Gastrodon:423|Gastrodon .1:423.2|Drifloon:425|Drifblim:426|Stunky:434|Skuntank:435|Bronzor:436|Bronzong:437|Bonsly:438|Mime Jr.:439|Munchlax:446|Riolu:447|Lucario:448|Hippopotas:449|Hippowdon:450|Skorupi:451|Drapion:452|Croagunk:453|Toxicroak:454|Mantyke:458|Snover:459|Abomasnow:460|Weavile:461|Rhyperior:464|Togekiss:468|Leafeon:470|Glaceon:471|Mamoswine:473|Gallade:475|Dusknoir:477|Froslass:478|Rotom:479|Rotom .1:479.1|Rotom .2:479.2|Rotom .3:479.3|Rotom .4:479.4|Rotom .5:479.5|Purrloin:509|Liepard:510|Munna:517|Musharna:518|Pidove:519|Tranquill:520|Unfezant:521|Roggenrola:524|Boldore:525|Gigalith:526|Woobat:527|Swoobat:528|Drilbur:529|Excadrill:530|Timburr:532|Gurdurr:533|Conkeldurr:534|Tympole:535|Palpitoad:536|Seismitoad:537|Throh:538|Sawk:539|Cottonee:546|Whimsicott:547|Basculin:550|Basculin .1:550.1|Darumaka:554|Darumaka 1:993|Darmanitan:555|Darmanitan .1:555.1|Darmanitan .2:555.2|Darmanitan .3:555.3|Maractus:556|Dwebble:557|Crustle:558|Scraggy:559|Scrafty:560|Sigilyph:561|Yamask:562|Yamask .1:562.1|Cofagrigus:563|Trubbish:568|Garbodor:569|Minccino:572|Cinccino:573|Gothita:574|Gothorita:575|Gothitelle:576|Solosis:577|Duosion:578|Reuniclus:579|Vanillite:582|Vanillish:583|Vanilluxe:584|Karrablast:588|Escavalier:589|Frillish:592|Jellicent:593|Joltik:595|Galvantula:596|Ferroseed:597|Ferrothorn:598|Klink:599|Klang:600|Klinklang:601|Elgyem:605|Beheeyem:606|Litwick:607|Lampent:608|Chandelure:609|Axew:610|Fraxure:611|Haxorus:612|Cubchoo:613|Beartic:614|Shelmet:616|Accelgor:617|Stunfisk:618|Stunfisk .1:618.1|Golett:622|Golurk:623|Pawniard:624|Bisharp:625|Rufflet:627|Braviary:628|Vullaby:629|Mandibuzz:630|Heatmor:631|Durant:632|Deino:633|Zweilous:634|Hydreigon:635|Cobalion:638|Terrakion:639|Virizion:640|Reshiram:643|Zekrom:644|Kyurem:646|Kyurem .1:646.1|Kyurem .2:646.2|Keldeo:647|Keldeo .1:647.1|Bunnelby:659|Diggersby:660|Pancham:674|Pangoro:675|Espurr:677|Meowstic:678|Meowstic .1:678.1|Honedge:679|Doublade:680|Aegislash:681|Aegislash .1:681.1|Spritzee:682|Aromatisse:683|Swirlix:684|Slurpuff:685|Inkay:686|Malamar:687|Binacle:688|Barbaracle:689|Helioptile:694|Heliolisk:695|Sylveon:700|Hawlucha:701|Goomy:704|Sliggoo:705|Goodra:706|Phantump:708|Trevenant:709|Pumpkaboo:710|Pumpkaboo .1:710.1|Pumpkaboo .2:710.2|Pumpkaboo .3:710.3|Gourgeist:711|Gourgeist .1:711.1|Gourgeist .2:711.2|Gourgeist .3:711.3|Bergmite:712|Avalugg:713|Noibat:714|Noivern:715|Rowlet:722|Dartrix:723|Decidueye:724|Litten:725|Torracat:726|Incineroar:727|Popplio:728|Brionne:729|Primarina:730|Grubbin:736|Charjabug:737|Vikavolt:738|Cutiefly:742|Ribombee:743|Wishiwashi:746|Wishiwashi .1:746.1|Mareanie:747|Toxapex:748|Mudbray:749|Mudsdale:750|Dewpider:751|Araquanid:752|Morelull:755|Shiinotic:756|Salandit:757|Salazzle:758|Stufful:759|Bewear:760|Bounsweet:761|Steenee:762|Tsareena:763|Oranguru:765|Passimian:766|Wimpod:767|Golisopod:768|Pyukumuku:771|Type： Null:772|Silvally:773|Silvally .1:773.1|Silvally .2:773.2|Silvally .3:773.3|Silvally .4:773.4|Silvally .5:773.5|Silvally .6:773.6|Silvally .7:773.7|Silvally .8:773.8|Silvally .9:773.9|Silvally .10:773.10|Silvally .11:773.11|Silvally .12:773.12|Silvally .13:773.13|Silvally .14:773.14|Silvally .15:773.15|Silvally .16:773.16|Silvally .17:773.17|Turtonator:776|Togedemaru:777|Mimikyu:778|Mimikyu .1:778.1|Drampa:780|Dhelmise:781|Jangmo-o:782|Hakamo-o:783|Kommo-o:784|Cosmog:789|Cosmoem:790|Solgaleo:791|Lunala:792|Necrozma:800|Necrozma .1:800.1|Necrozma .2:800.2|Marshadow:802|Zeraora:807|Meltan:808|Melmetal:809|Grookey:810|Thwackey:811|Rillaboom:812|Scorbunny:813|Raboot:814|Cinderace:815|Sobble:816|Drizzile:817|Inteleon:818|Skwovet:819|Greedent:820|Rookidee:821|Corvisquire:822|Corviknight:823|Blipbug:824|Dottler:825|Orbeetle:826|Nickit:827|Thievul:828|Gossifleur:829|Eldegoss:830|Wooloo:831|Dubwool:832|Chewtle:833|Drednaw:834|Yamper:835|Boltund:836|Rolycoly:837|Carkol:838|Coalossal:839|Applin:840|Flapple:841|Appletun:842|Silicobra:843|Sandaconda:844|Cramorant:845|Cramorant .1:845.1|Cramorant .2:845.2|Arrokuda:846|Barraskewda:847|Toxel:848|Toxtricity:849|Toxtricity 1:1154|Sizzlipede:850|Centiskorch:851|Clobbopus:852|Grapploct:853|Sinistea:854|Sinistea .1:854.1|Polteageist:855|Polteageist .1:855.1|Hatenna:856|Hattrem:857|Hatterene:858|Impidimp:859|Morgrem:860|Grimmsnarl:861|Obstagoon:862|Perrserker:863|Cursola:864|Sirfetch’d:865|Mr. Rime:866|Runerigus:867|Milcery:868|Alcremie:869|Alcremie .1:869.1|Alcremie .2:869.2|Alcremie .3:869.3|Alcremie .4:869.4|Alcremie .5:869.5|Alcremie .6:869.6|Alcremie .7:869.7|Alcremie .8:869.8|Falinks:870|Pincurchin:871|Snom:872|Frosmoth:873|Stonjourner:874|Eiscue:875|Eiscue .1:875.1|Indeedee:876|Indeedee .1:876.1|Morpeko:877|Morpeko .1:877.1|Cufant:878|Copperajah:879|Dracozolt:880|Arctozolt:881|Dracovish:882|Arctovish:883|Duraludon:884|Dreepy:885|Drakloak:886|Dragapult:887|Zacian:888|Zacian .1:888.1|Zamazenta:889|Zamazenta .1:889.1|Eternatus:890|Eternatus .1:890.1';
const _listing = list.split("|")
    .map(item => {
    const split = item.split(":");
    if (split.length == 2) {
        const ids = split[1].split(".");
        return {
            name: split[0],
            dex: ids[0],
            listing_id: split[1]
        };
    }
    return null;
}).filter(i => !!i);
exports.PokemonList = _listing;
//# sourceMappingURL=pkmns.js.map