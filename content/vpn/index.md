# UCSF VPN interface

Enter the URL (web address) that you wish to open via the UCSF VPN
below and click submit.  Don't forget include the protocol prefix, i.e. http://
or https://.

<form id="vpnform" role="form">
  <div class="form-group">
   <input id="vpnurl" type="url" class="form-control"
          placeholder="e.g. http://www.nature.com/" autofocus/>
  </div>
  <button type="submit" class="btn btn-primary">Open via UCSF VPN</button>
</form>

<%-- Append scripts to the end of the page --%>
<%@string footer_tail="
<script>
$('#vpnform').submit(function(event) {
  event.preventDefault();
  var url = 'http://cbc.ucsf.edu/vpn/' + $('#vpnurl').val();
  window.location.href = url;
});
</script>
"%>


<div class="alert alert-info" role="alert" style="margin-top: 5ex;">
See also our Google Chrome extension <strong><a
href="https://chrome.google.com/webstore/detail/open-via-ucsf/ljeagphcbbhcgbceadakcimpmaahakma">Open
Via UCSF</a></strong>, which allow you to reopen any web page via UCSF VPN with
a single click as well as to right click on any link to open it via the UCSF VPN.
</div>


