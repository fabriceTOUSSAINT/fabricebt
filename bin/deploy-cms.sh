#!/bin/sh

CMSFOLDER="cms-to-deploy/"
CMSBUILDFILE="cms/build/**"

mkdir -p $CMSFOLDER

# cp -a $@ $CMSFOLDER
cp -a $CMSBUILDFILE $CMSFOLDER