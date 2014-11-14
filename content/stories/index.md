# Stories

Below are a few examples of successful collaborations and research
projects.  

</br>

<%
stories <- list(
  list(
    title="Biomarker for oral squamous cell carcinoma",
    id="1bpjA15DwDVSBFmYFHEXNXNUI6o1vVRJhoidydKrkUIc"
  ),
  list(
    title="Parent-specific copy numbers",
    id="1SHJxYP7B8G84Sl9NmkmXGy_eFQoYPUno7U81PI8Gk2c"
  ),
  list(
    title="Ribosome profiling",
    id="1DVzDnWIVTRYTaXPVLtOx0muGIa32kn7qY9N7upIvy8s"
  )
) # stories()
%>

<div class="row">
<% for (story in stories) { %>
 <div class="col-xs-12 col-md-6">
  <div class="panel panel-default" style="max-width: 480px;">
   <div class="panel-heading" style="font-weight: bold;"><%=story$title%></div>
   <div class="embed-responsive embed-responsive-4by3">
    <iframe src="https://docs.google.com/presentation/d/<%=story$id%>/embed?start=false&amp;loop=false&amp;delayms=3000"
     mozallowfullscreen="true" webkitallowfullscreen="true" allowfullscreen>
    </iframe>
   </div>
  </div>
 </div>
<% } # for (story in stories) %>
</div>

