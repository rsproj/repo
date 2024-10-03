#!/bin/bash

### RUN THIS ON Remote Host
# No sense to run this script on local

mkdir debian;

dpkg-scanpackages debian > debian/Packages
dpkg-scanpackages debian /dev/null | gzip -9c > debian/Packages.gz

dpkg-scansources debian > debian/Sources
dpkg-scansources debian /dev/null | gzip -9c > debian/Sources.gz

exit 0;