# High Performance Computing (HPC)

At the UCSF Helen Diller Family Comprehensive Cancer Center we have a
large Linux compute cluster that is available to anyone affiliated
with the Cancer Center.  The cluster is maintained by our
core&nbsp;<sup><a href="#fn1" id="r1">[1]</a></sup> - feel free to
[contact] us if you would like to join or have questions.

As of February 2016, the cluster has 26 nodes and 1000+ cores with up to 512 GiB
of RAM per node.  The cluster uses [Scyld ClusterWare], which for instance
means that all nodes have identical operating-system setups (Red Hat
Linux) and identical software tools installed.
We use [TORQUE PBS] for scheduling jobs and [Moab] to manage the
workload.


----------------------------------------
<div style="font-size: small;">
<em>Footnotes:</em><br>

<span id="fn1"><a href="#r1">[1]</a>
The compute cluster was maintained by UCSF Translational Informatics
until January 2016.<br></span>
</div>

[contact]: <%=pathTo('contact/index.html')%>
[Scyld ClusterWare]: http://www.penguincomputing.com/products/software/cluster-management-scyld-clusterware/
[TORQUE PBS]: https://en.wikipedia.org/wiki/TORQUE
[Moab]: https://en.wikipedia.org/wiki/Moab_Cluster_Suite
