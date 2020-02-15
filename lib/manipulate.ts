
function GetURLParameter(sParam)
{
    var sPageURL = window.location.search.substring(1);
    var sURLVariables = sPageURL.split('&');
    for (var i = 0; i < sURLVariables.length; i++)
    {
        var sParameterName = sURLVariables[i].split('=');
        if (sParameterName[0] == sParam)
        {
            return sParameterName[1];
        }
    }
}

function load_nests() {
        for(var i = 1; i <= 96; i++) {
  $("#nest").append(new Option(nestName + " " + i, i-1));
        }
    }

function load_event() {
$.getJSON("https://raw.githubusercontent.com/Leanny/SeedSearcher/master/Events/files.json", function(data) {
  $.each(data, function(idx, name) {
    eventName = name.substring(0, name.length - 5)
    eventName = name.substring(0, 2) + "-" + name.substring(2, 4) + "-" + name.substring(4, 6)
    $("#event").append(new Option(eventName, name));
  });
});
    }

    var entries = []
    
function get_nest(den: string, rarity: number) {
    const data: string[] = den.split(",")
    const nestdata = [Number(data[0]), Number(data[1])]
    const nestID = nestdata[rarity] - 1
    $("#nest").val(nestID);
    return nestID 
}

    function change_species(nestID, game) {
        $("#species").children().remove().end()
if(eventActive) {
  $.getJSON("https://raw.githubusercontent.com/Leanny/SeedSearcher/master/Events/" + nestID, function(data) {
    entries = data["Tables"][game-1]["Entries"]
    $.each(entries, function(idx, entry) {
      var minRank = Number(entry["MinRank"]) + 1
      var maxRank = Number(entry["MaxRank"]) + 1
      var gmax = ""
      if(entry["IsGigantamax"]) gmax = "(G-Max) "
      var rank = "" + minRank + "-" + maxRank
      if(minRank == maxRank) rank = "" + minRank
      $("#species").append(new Option(Names[entry["Species"]] + " " + gmax + " " + rank + " \u2605", entry))
    });
  });

} else {
  $.getJSON("https://leanny.github.io/seedchecker/nest" + game + ".json", function(data) {
    entries = data[nestID]["Entries"]
    $.each(entries, function(idx, entry) {
      var minRank = Number(entry["MinRank"]) + 1
      var maxRank = Number(entry["MaxRank"]) + 1
      var gmax = ""
      if(entry["IsGigantamax"]) gmax = "(G-Max) "
      var rank = "" + minRank + "-" + maxRank
      if(minRank == maxRank) rank = "" + minRank
      $("#species").append(new Option(Names[entry["Species"]] + " " + gmax + " " + rank + " \u2605", entry))
    });
  });
}
    }
    
    function calculateShinyFrame() {
        var str = $("#seedbox").val();
        try {
            seed = bigInt(str, 16)
        } catch(e) {
            alert("Invalid Seed")
            return;
        }
        var minstr = $("#startframe").val();
        start = parseInt(minstr)
        if(isNaN(start)) {
            alert("Invalid Start Frame")
            return;
        }
        var maxstr = $("#endframe").val();
        limit = parseInt(maxstr)
        if(isNaN(end)) {
            alert("Invalid Number of Frames")
            return;
        }
        var data = []
        var result = []
        seed = advanceFrame(seed, start)
        end = start + limit 
        for(i = start;; i++) {
            res = getData(seed, i, entries[$("#species")[0].selectedIndex])
            seed = seed.plus(XC)
            seed = seed.and(MASK)
            if(res["Shiny"] != "-"){
                result.push(res)
                break
            }
        }
        $.each(result, function(idx, res) {
            var row = ({
                Frame: res["Index"],
                HP:  res["HP"],
                ATK: res["ATK"],
                DEF: res["DEF"],
                SPA: res["SPA"],
                SPD: res["SPD"],
                SPE: res["SPE"],
    HPJ:  judge[res["HP"]],
                ATKJ: judge[res["ATK"]],
                DEFJ: judge[res["DEF"]],
                SPAJ: judge[res["SPA"]],
                SPDJ: judge[res["SPD"]],
                SPEJ: judge[res["SPE"]],
                Shiny: res["Shiny"],
                Nature: res["Nature"],
                Gender: res["Gender"],
                Ability: res["Ability"],
                Seed: res["Seed"].toString(16)
            });
            data.push(row);
        });
        $('#seed-table').bootstrapTable('refreshOptions', {
            "data": data
        });
        $('#seed-tableJ').bootstrapTable('refreshOptions', {
            "data": data
        });
    }

function changeIVRep() {
var visibility = $('#seed-table')[0]["tHead"]["rows"][0]["cells"][8]["hidden"]
for(var i = 2; i < 8; i++) {
  $('#seed-table')[0]["tHead"]["rows"][0]["cells"][i]["hidden"] = visibility
  $('#seed-table')[0]["tHead"]["rows"][0]["cells"][i+6]["hidden"] = !visibility
}
}


    function calculateFrames() {
        var str = $("#seedbox").val();
        try {
            seed = bigInt(str, 16)
        } catch(e) {
            alert("Invalid Seed")
            return;
        }
        var minstr = $("#startframe").val();
        start = parseInt(minstr)
        if(isNaN(start)) {
            alert("Invalid Start Frame")
            return;
        }
        var maxstr = $("#endframe").val();
        limit = parseInt(maxstr)
        if(isNaN(end)) {
            alert("Invalid Number of Frames")
            return;
        }
        var data = []
        var result = []
        seed = advanceFrame(seed, start)
        end = start + limit 
        for(i = start; i < end; i++) {
            result.push(getData(seed, i, entries[$("#species")[0].selectedIndex]))
            seed = seed.plus(XC)
            seed = seed.and(MASK)
        }
        $.each(result, function(idx, res) {
            var row = ({
                Frame: res["Index"],
                HP:  res["HP"],
                ATK: res["ATK"],
                DEF: res["DEF"],
                SPA: res["SPA"],
                SPD: res["SPD"],
                SPE: res["SPE"],
    HPJ:  judge[res["HP"]],
                ATKJ: judge[res["ATK"]],
                DEFJ: judge[res["DEF"]],
                SPAJ: judge[res["SPA"]],
                SPDJ: judge[res["SPD"]],
                SPEJ: judge[res["SPE"]],
                Shiny: res["Shiny"],
                Nature: res["Nature"],
                Gender: res["Gender"],
                Ability: res["Ability"],
                Seed: res["Seed"].toString(16)
            });
            data.push(row);
        });
        $('#seed-table').bootstrapTable('refreshOptions', {
            "data": data
        });
        $('#seed-tableJ').bootstrapTable('refreshOptions', {
            "data": data
        });
    }

    $(function() {
        load_dens();
        load_rarity();
        load_game();
load_nests();
load_event();
        $('#seed-table').bootstrapTable({});
$('#seed-tableJ').bootstrapTable({});
        $('#den').change(function() {
  eventActive = false;
            get_nest($('#den').val(), $('#denrarity').val())
  change_species($('#nest').val(), $('#game').val())
        })
        $('#nest').change(function() {
  eventActive = false;
            change_species($('#nest').val(), $('#game').val())
        })
        $('#event').change(function() {
  eventActive = true;
            change_species($('#event').val(), $('#game').val())
        })
        $('#denrarity').change(function() {
  eventActive = false;
            get_nest($('#den').val(), $('#denrarity').val())
  change_species($('#nest').val(), $('#game').val())
        })
        $('#game').change(function() {
  if(eventActive) {
    change_species($('#event').val(), $('#game').val())
  } else {
    change_species($('#nest').val(), $('#game').val())
  }
        })
get_nest($('#den').val(), $('#denrarity').val())
change_species($('#nest').val(), $('#game').val())
        var x = GetURLParameter("seed")
        if(x !== undefined)
            $("#seedbox").val(x.trim().substr(0, 16))
        
    })