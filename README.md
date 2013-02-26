lastfm-groupvis
======================

A project to visualize the musical compatibility of the members of a last.fm group.

**2/26 Update:**

Group data
  - For calculations:
      -> generate list of all genres weighted by # of listeneres for each / total # weights
      -> for each member, generate list of genres weighted by # of artist per genre / total # weights

From this, we can determine how close each member is closest to the group average by computing differences.
 - Distance formula for each genre comparing member's normalized weight per genre compared to group's weight per genre

D = (CountryGrpWt - CountryMyWt)^2 + (RapGrpWt - RapMyWt)^2 ... )

So say my weight is 3 for country and 5 for rap, and the group's weight for country is 1 and 2 for rap, -->
D = (1-3)^2 + (2-5)^2, etc

*Normalize distances based on largest calculated distance, so that they are each % out of 100, to allow for spectrum.*

                                          (normalized) Difference Spectrum

    Relevant membe        Me                                                              Not relevant
    oo o                  o                                 o     o                             o
    |---------|---------|---------|---------|---------|---------|---------|---------|---------|---------|
    perfect  ~10       ~20       ~30       ~40       ~50       ~60       ~70       ~80       ~90      shouldn't be in group

Taylor and I discussed using a gradient to represent this, but ran into issues when trying to visualize clusters, as it
isn't intuitive to try and group 'similar' genres and create a 'genre spectrum'. Also a big issue with this is that two people
can be in the same 'difference cluster' but can listen to completely different music.

We can get started on obtaining the relevant data, however, and generate a spectrum like above while still planning how 
to create a final visualization to give a more aesthetic vis.


Long term goals:
  - For visualization:
      -> for each member, obtain avatar .jpg URL and name
      -> keep list of top artists for each member, when hovering over name show top artists
