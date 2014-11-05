# Software and Computing Resources

## Our software contributions 
We contribute to several open-source projects including [R] and
[Bioconductor] and core member Henrik Bengtsson is the creator of the
[Aroma Project].  Being parts of these projects helps us to keep up to
date with the field and to get invaluable feedback on our own software
and work.

Here is a list of software tools that we have developed ourselves or contributed to their development:

* [affxparser]: Software for parsing Affymetrix microarray files.
* [aroma]: Preprocessing of spotted microarray data.
* [aroma.affymetrix]: Analysis of small to extremely large Affymetrix microarray data sets.
* aroma.seq: High-throughput sequence (HT-Seq) analysis in the Aroma framework.  (Pre-release.)
* [babel]: Ribosome profiling data analysis using statistical
  methods with the same name.
* [DNAcopy]: Circular Binary Segmentation (CBS) method for aCGH copy
  number analysis.
* [EGAN]: Exploratory Gene Association Networks.
* [illuminaio]: Software for parsing Illumina microarray files.
* [matrixStats]: Fast and memory-efficient mathematical operations on matrices.
* [partDSA]: Piecewise constant estimation of increasingly complex predictors.
* [PSCBS]: Parent-specific copy number segmentation using CBS.
* [QDNAseq]: Quantitative DNA sequencing for chromosomal aberrations using shallow DNA-Seq.
* [R.matlab]: R-to-MATLAB connectivity and methods for reading and writing MAT files.
* [R.rsp]: Dynamic generation of scientific reports for reproducible research.
* [sfit]: Multidimensional simplex fitting.

## Software and Reproducible Research 
One of our priorities is to provide scientifically sound and
reproducible research results.  In order to achieve this we make use
of a large number of high-quality computational software tools
provided by either industry or academia.  We try to use
open-source software as much as possible, particularly because it is
key to reproducible research.

## Compute Cluster 
The amount of data being collected in genomic research has grown
dramatically.  It has been less than a decade ago since Affymetrix SNP
array data (~60MB/sample) were considered large.  Many software tools
could handle only 10-20 arrays in multi-sample studies&nbsp;<sup><a
href="#fn1" id="r1">[1]</a></sup>.  When high-throughput sequencing
(HT-Seq) entered the arena, there was a paradigm shift in the amount
of data that needed to be processed.  Sequencing the DNA of a _single
human genome_ at 50 times coverage produces a _~250GB data file_ of
aligned reads.  Yes, that is ~4000 times larger file than what we
get with microarray technologies.  (This does _not_ mean that we get
4000 times more "information" from HT-Seq data, but that is a
different story.)

At the UCSF Helen Diller Family Comprehensive Cancer Center we have a
large Linux compute cluster (maintained by [Translational
Informatics]), which, together with tailored implementations (e.g. our
aroma.seq and aroma.affymetrix tools), allows us to process large
amounts of data in a highly parallel fashion.

## Programming Languages 
We are experienced in programming languages such as C, C++, Java,
Perl, Python and R, to name a few.



----------------------------------------
<p id="fn1"><a href="#r1">[1]</a>
This was one of the reason Henrik Bengtsson developed the
[Aroma Project], which handles tens of thousands of arrays even on
systems with limited memory resources.


[R]: http://www.r-project.org/
[Bioconductor]: http://www.bioconductor.org/
[Aroma Project]: http://www.aroma-project.org/

[affxparser]: http://www.bioconductor.org/packages/release/bioc/html/affxparser.html
[aroma]: http://www.aroma-project.org/packages/aroma/
[aroma.affymetrix]: http://cran.r-project.org/package=aroma.affymetrix
<%-- [aroma.seq]: http://aroma-project.org/alpha/aroma.seq/ --%>
[babel]: http://cran.r-project.org/package=babel
[DNAcopy]: http://www.bioconductor.org/packages/release/bioc/html/DNAcopy.html
[EGAN]: http://akt.ucsf.edu/EGAN/
[illuminaio]: http://www.bioconductor.org/packages/release/bioc/html/illuminaio.html
[matrixStats]: http://cran.r-project.org/package=matrixStats
[partDSA]: http://cran.r-project.org/package=partDSA
[PSCBS]: http://cran.r-project.org/package=PSCBS
[QDNAseq]: http://www.bioconductor.org/packages/release/bioc/html/QDNAseq.html
[R.matlab]: http://cran.r-project.org/package=R.matlab
[R.rsp]: http://cran.r-project.org/package=R.rsp
[sfit]: https://r-forge.r-project.org/R/?group_id=349

[Translational Informatics]: http://cancer.ucsf.edu/research/cores/translational-informatics
