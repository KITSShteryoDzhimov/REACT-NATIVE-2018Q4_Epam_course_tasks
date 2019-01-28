#!/bin/bash

./gradlew ${1:-installDevMinSdkDevKernelDebug} --stacktrace && adb shell am start -n com.epam.fridayshop/host.exp.exponent.MainActivity
