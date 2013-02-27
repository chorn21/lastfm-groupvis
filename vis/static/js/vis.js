/* Objects
 * ========================================================================= */

/* Group
 * ----------------------------------------------------- */
function Group() = {
    this.members = [];
    this.tastes = [];
}

Group.prototype.addMember = function(member) {
    this.members.push(member);
}

Group.prototype.findTaste = function() {
    // TODO
}

/* Member
 * ----------------------------------------------------- */
function Member(id, name) {
    this.id = id;
    this.name = name;
    this.artists = [];

    // calculated values
    this.groupDifferenceByTaste = [];
    this.groupDifference = null;
}

Member.prototype.addArtist = function (artist) {
    this.artists.push(artist);
}

Member.prototype.findTaste = function() {
    // TODO
}

Member.prototype.compareTastes = function(otherTaste) {
    // TODO
}

/* Artist
 * ----------------------------------------------------- */
function Artist(name, genres) {
    this.name = name;
    this.genres = genres;
}


/* Setup
 * ========================================================================= */
var lastfm-vis = new Group();
