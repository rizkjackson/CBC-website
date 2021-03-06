# High Performance Computing (HPC)

At the UCSF Helen Diller Family Comprehensive Cancer Center we have a
large Linux compute cluster that is available to anyone affiliated
with the Cancer Center - feel free to [contact] us if you would like
to join or have questions.<sup><a href="#fn1" id="r1">[1]</a></sup>

As of February 2017, the cluster has 28 nodes and ~1100 cores, which
predominantly are AMD processors.
Each node has up to 512 GiB of RAM and up to 7 TiB of fast local disk space.
In addition to ~90 TiB global disk space shared among all users, several
research groups have disk space of their own mounted to the cluster.

The cluster uses [Scyld ClusterWare], which for instance means that
all nodes have identical Linux setups (Red Hat Enterprise 6.6)
and identical software tools installed.
We use [TORQUE PBS] for scheduling jobs and [Moab] to manage the
workload.

<br>


Node      |      # cores | CPU (GHz) | RAM (GiB) | Local disk (TiB) | Notes                       
----------|-------------:|----------:|----------:|-----------------:|-----------------------------
n0        |           64 |      2.6  |       512 |              5.3 | InfiniBand (IB), FMA4       
n1        |           48 |      2.6  |       512 |              2.6 | InfiniBand (IB), FMA4       
n2        |           48 |      2.6  |       512 |              2.6 | InfiniBand (IB), FMA4       
n3        |           48 |      2.4  |       384 |              5.2 | InfiniBand (IB), FMA4       
n4        |           12 |      2.4  |        32 |              1.8 |                             
n5        |           12 |      2.4  |        32 |              1.8 |                             
n6        |           12 |      2.4  |        32 |              1.8 | (interactive / prototyping)
n7        |           12 |      2.3  |        64 |              1.8 |                             
n8        |           12 |      2.3  |        64 |              1.8 |                             
n9        |           12 |      2.3  |        64 |              1.8 |                             
n10       |           12 |      2.3  |        64 |              1.8 |                             
n11       |           12 |      2.3  |        64 |              1.8 |                             
n12       |           48 |      2.3  |       384 |              1.8 | Tesla M2070 GPU w/ 448 cores
n13       |           48 |      2.3  |       512 |              1.8 | Tesla M2070 GPU w/ 448 cores
n14       |           12 |      3.47 |       128 |             0.84 | InfiniBand (IB)             
n15       |           64 |      2.6  |       128 |              1.7 | InfiniBand (IB), FMA4       
n16       |           64 |      2.6  |       128 |              1.8 | InfiniBand (IB), FMA4       
n17       |           64 |      2.6  |       512 |              5.3 | InfiniBand (IB), FMA4       
n18       |           64 |      2.6  |       512 |              5.3 | InfiniBand (IB), FMA4       
n19       |           64 |      2.6  |       512 |              5.3 | InfiniBand (IB), FMA4       
n20       |           64 |      2.6  |       512 |              5.3 | InfiniBand (IB), FMA4       
n21       |           48 |      2.8  |       256 |              5.3 | InfiniBand (IB), FMA4       
n22       |           48 |      2.8  |       384 |              5.3 | InfiniBand (IB), FMA4       
n23       |           48 |      2.8  |       384 |              5.3 | InfiniBand (IB), FMA4       
n26       |           12 |      2.4  |        32 |              1.8 |                             
n27       |           48 |      1.4  |       384 |              5.3 | InfiniBand (IB), FMA4       
n28       |           64 |      2.3  |       512 |              2.6 | InfiniBand (IB), FMA4       
n29       |           28 |      2.4  |       512 |              7.2 | InfiniBand (IB), FMA4       
n30       |           28 |      2.4  |       512 |              7.2 | InfiniBand (IB), FMA4       
**Total** |     **1072** |           |           |                  |                             

----------------------------------------
<div style="font-size: small;">
<small>
<em>Footnotes:</em><br>
<span id="fn1"><a href="#r1">[1]</a>
Since 2016 the cluster is maintained jointly by members of the CBC and the Translational Informatics Core.
<%-- Feel free to <a href="<%=pathTo('contact/index.html')%>">contact</a> us if you would like to get access to TIPCC or have questions about the cluster. --%>
<br>
</span>
</small>
</div>

[contact]: <%=pathTo('contact/index.html')%>
[Scyld ClusterWare]: http://www.penguincomputing.com/solutions/scyld-clusterware/
[TORQUE PBS]: https://en.wikipedia.org/wiki/TORQUE
[Moab]: https://en.wikipedia.org/wiki/Moab_Cluster_Suite
