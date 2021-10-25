#!/usr/bin/env python3
import re,os,sys

m=re.search(r"(?<!\@)\/tmp\/.ICE-unix\/\d*", os.getenv("SESSION_MANAGER"))

if m is not None:
    print(m.group(0))
    sys.exit(0)
else:
    sys.exit(1)
