/* Dependencies
 * --------------------------------------------------------
 * jQuery
 */


/* Objects
 * ========================================================================= */

/* Visualization
 * ----------------------------------------------------- */
function LastFMVis() = {
    this.group = null;
};

LastFM_Vis.prototype.setup = function(groupName) {
// load setup
    $.ajaxSetup({
        async: false
    });

    // TODO: loading icon

// load actions
    group = new Group(groupName);

    // TODO: load data and setup objects
    // caroline your stuff goes here :)

// load teardown
    $.ajaxSetup({
        async: true
    });
    
    // TODO: remove icon
}

/* Group
 * ----------------------------------------------------- */
function Group(name) = {
    this.name = name;
    this.members = [];
    this.taste = {};
};

Group.prototype.addMember = function(member) {
    this.members.push(member);
};

/* Accumulate the tastes of each member, then normalize them based on the
 * total number of group members.  This produces an average of the group
 * member's tastes.
 */
Group.prototype.findTaste = function() {
    // counting
    for (var i = 0; i < members.length; i++) {
        var member = members[i];
        for (genre in Object.keys(member.taste)) {
            if (typeof(taste[genre]) == "undefined") {
                taste[genre] = member.taste[genre];
            } else {
                taste[genre] += member.taste[genre];
            }
        }
    }
    
    // normalization
    for (genre in Object.keys(taste)) {
        taste.genre /= members.length;
    }
};

/* Member
 * ----------------------------------------------------- */
function Member(id, name) {
    this.id = id;
    this.name = name;
    this.artists = [];

    // calculated values
    this.taste = {};
    this.groupDiffByTaste = [];
    this.groupDiff = null;
};

Member.prototype.addArtist = function (artist) {
    this.artists.push(artist);
};

/* Count the number of times a genre appears in the list of artists the member
 * listens to.
 *
 * Then normalize the taste values based on the number of artists (which can
 * vary from member to member), so that members can be compared with eachother
 * and the group average taste.
 *
 * At this point, each value in taste is the percentage that this 
 * genre makes up in the member's total listening habits.
 */    
Member.prototype.findTaste = function() {
    // counting
    for (var i = 0; i < artists.length; i++) {
        var artist = artists[i];
        for (var j = 0; j < artist.genres.length; j++) {
            var genre = artist.genres[j];
            if (typeof(taste[genre]) == "undefined") {
                taste[genre] = 1;
            } else {
                taste[genre]++;
            }

        }
    }

    // normalization
    for (genre in Object.keys(taste)) {
        taste.genre /= artists.length;
    }
};

/* Compares a members taste to a compatibly normalized taste (ie another member
 * or a group).  Positive values mean that this member like those genres more,
 * negative values mean that they those genres less.
 */
Member.prototype.compareTastes = function(otherTaste) {
    var tasteDiff = {};

    // add our values
    for (genre in Object.keys(taste)) {
        tasteDiff[genre] = taste[genre];
    }

    // subtract otherTaste values
    for (genre in Object.keys(otherTaste)) {
        if (typeof(tasteDiff[genre] == "undefined") {
            tasteDiff[genre] = -otherTaste[genre];
        } else {
            tasteDiff[genre] -= otherTaste[genre];
        }
    }

    return tasteDiff;
};

Member.prototype.findGroupDifference(groupTaste) {
    // find differences
    groupDiffByTaste = compareTastes(groupTaste);

    // find distance of differences
    groupDiff = 0;
    for (genre in Object.keys(groupDiffByTaste)) {
        groupDiff += Math.pow(groupDiffByTaste[genre], 2);
    }
    groupDiff = Math.sqrt(groupDiff);
};

/* Artist
 * ----------------------------------------------------- */
function Artist(name, genres) {
    this.name = name;
    this.genres = genres;
};
