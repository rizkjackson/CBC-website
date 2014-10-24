// Source: http://base.ctsi.ucsf.edu/profiles/json_api_v2_examples/
//
// we're grabbing data from the UCSF Profiles JSON API v2
// details at http://opendata.profiles.ucsf.edu/json-v2.html
function add_profiles_user_content (prefix, identifier_type, identifier) {
  function profiles_id (name) {
    var id = 'profiles_' + name
    if (prefix != '') id = prefix + '_' + id;
    return(id);
  }

  function profiles_id_handle (name) {
    return('#' + profiles_id(name));
  }

  $.getJSON('http://api.profiles.ucsf.edu/json/v2/?source=JSON_API_v2_example_script_change_this_in_your_own_app&'
  + identifier_type + '=' + identifier + '&publications=full&callback=?', function(response) {
    if (response) {
      if (response.error) { // if UCSF Profiles reports an error, can do something with that here
        if (window.console && window.console.log) {
            console.log('Error from UCSF Profiles API: ' + response.error);
            // alert('Error from UCSF Profiles API: ' + response.error);
        }
      } else {
        $(document).ready(function() {   // execute the following code after DOM is ready
          var data = response.Profiles[0];

          if (data.Name) { // show name, if we have it
            $(profiles_id_handle('name')).text(data.Name);
          }
          if (data.ProfilesURL) { // add link to Profiles
            $(profiles_id_handle('page_link_container')).empty().show().append('<a href="' + data.ProfilesURL + '" title="Go to UCSF Profiles, powered by CTSI" rel="me">UCSF Profiles page</a>');
          } else {
            $(profiles_id_handle('page_link_container')).empty().hide();
          }

          if (data.PhotoURL) { // show photo, if we have it
            $(profiles_id_handle('photo_container')).empty().show().append($('<img class="img-circle" id="' + profiles_id('photo') + '"/>').attr('src', data.PhotoURL).error(function(){this.style.display='none'}));
          } else {
            $(profiles_id_handle('photo_container')).empty().hide();
          }

          if (data.Narrative) { // show narrative, if we have it
          // truncate text to 500 characters, and delete any partial last sentence
              var truncated_narrative = data.Narrative.substr(0,500).replace(/[\s\r\n]/g, " ").replace(/^(.+\.[\s\n\r]).*?$/g, "$1");
            $(profiles_id_handle('narrative')).show().text(truncated_narrative);
          } else {
            $(profiles_id_handle('narrative')).hide();
          }

          if (data.Email) { // show narrative, if we have it
            $(profiles_id_handle('email_link_container')).empty().show().append('<a id="href="mailto:' + data.Email + '">' + data.Email + '</a>');
          } else {
            $(profiles_id_handle('email_link_container')).hide();
          }

          if (data.Publications && data.Publications.length > 0) {
            $(profiles_id_handle('publications ol')).remove();
            $(profiles_id_handle('publications')).show().append($('<ol id="' + profiles_id('publications_list') + '"></ol>'));
            jQuery.each(data.Publications, function() {
              var li = $('<li id="' + profiles_id('publications_li') + '"/>'); // create new list item
              li.append(this.PublicationTitle + ' '); // add the publication name
              if (this.PublicationSource && this.PublicationSource.length > 0) { // ...and a link, if available
              li.append($('<a class="profiles_publication_link" />').attr('href', this.PublicationSource[0].PublicationSourceURL).text('View on ' + this.PublicationSource[0].PublicationSourceName));
              }
              $(profiles_id_handle('publications_list')).append(li); // insert the list item
            });
          } else {
            $(profiles_id_handle('publications')).hide();
          }

          if (data.AwardOrHonors && data.AwardOrHonors.length > 0) {
            $(profiles_id_handle('awards_list')).remove();
            $(profiles_id_handle('awards')).show().append($('<ul id="' + profiles_id('publications_list') + '"></ul>'));
            jQuery.each(data.AwardOrHonors, function() {
              var li = $('<li />').append(this.Summary);
              $(profiles_id_handle('awards_list')).append(li);
            });
          } else {
            $(profiles_id_handle('awards')).hide();
          }
          
          $("html, body").animate({ scrollTop: 0 }, 100);
//          $("[id^='profiles_']:visible").fadeIn(100).fadeOut(100).fadeIn(100);
        });
      }
    }
  });
} // add_profiles_user_content()
