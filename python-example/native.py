#!/usr/bin/env python2 -u
import struct
import sys

while True:
    rawlen = sys.stdin.read(4)
    if len(rawlen) == 0:
        sys.exit(0)
    msglen = struct.unpack('@I', rawlen)[0]
    msg = sys.stdin.read(msglen)

    sys.stdout.write(struct.pack('@I', msglen))
    sys.stdout.write(msg)
