// Source: http://base.ctsi.ucsf.edu/profiles/json_api_v2_examples/
//
// we're grabbing data from the UCSF Profiles JSON API v2
// details at http://opendata.profiles.ucsf.edu/json-v2.html
//
// Authors: UCSF, modified by Henrik Bengtsson.
function add_profiles_user_content (prefix, identifier) {
  function profiles_id (name) {
    var id = 'profiles_' + name
    if (prefix != '') id = prefix + '_' + id;
    return(id);
  }

  function profiles_id_handle (name) {
    return('#' + profiles_id(name));
  }

  $.getJSON('http://api.profiles.ucsf.edu/json/v2/?source=cbc.ucsf.edu&ProfilesURLName='
    + identifier + '&publications=full&callback=?', function(response) {
    if (response) {
      if (response.error) { // if UCSF Profiles reports an error, can do something with that here
        if (window.console && window.console.log) {
            console.log('Error from UCSF Profiles API: ' + response.error);
            // alert('Error from UCSF Profiles API: ' + response.error);
        }
      } else {
        $(document).ready(function() {   // execute the following code after DOM is ready
          var data = response.Profiles[0];
          var pubs = data.Publications;
          if (pubs && pubs.length > 0) {
            $(profiles_id_handle('publications ol')).remove();
            $(profiles_id_handle('publications')).show().append($('<ol id="' + profiles_id('publications_list') + '"></ol>'));
            jQuery.each(pubs, function() {
              var li = $('<li id="' + profiles_id('publications_li') + '"/>'); // create new list item
              li.append(this.PublicationTitle + ' '); // add the publication name
              var pubsrc = this.PublicationSource;
              if (pubsrc && pubsrc.length > 0) { // ...and a link, if available
                li.append($('<a class="profiles_publication_link" />').attr('href', pubsrc[0].PublicationSourceURL).text('View on ' + pubsrc[0].PublicationSourceName));
              }
              $(profiles_id_handle('publications_list')).append(li); // insert the list item
            });
          } else {
            $(profiles_id_handle('publications')).hide();
          }
        });
      }
    }
  });
} // add_profiles_user_content()
