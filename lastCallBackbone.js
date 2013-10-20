/* There is more to this than looking at the last call
    our goal here is to define all of the use cases and look for the edge cases
    that could be found when using the object
*/

var syncRequest = syncRequest || {}

syncRequest = {
  
  // can we store the current requests that are running?
  current: [],
  
    /* for those using backbone we need to store the views thar are in the DOM?
    Would the app need to assign these based  upon the views they have AJAX
    requests that are being used?
    */
  availableViews: function() {
      this.assign(this.view1,       '.view1');
      this.assign(this.view2,       '.view2');
      return this;
    },
  
    /* .html() is preceded by .empty() which we don't want because it removes
    the events for the view. Instead we use setElement. By doing this, anytime
    we use render, the view always remembers the state that it was in before.
    */
  assign: function( view, selector ) {
      view.setElement( this.$(selector) ).render();
    }
    
};

//console.log(typeof syncRequest);