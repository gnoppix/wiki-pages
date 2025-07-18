---
title: Optimized Kernel
description: Features and changes on the kernel
---

We've integrated as an optional feature the wellknow Kernel enhancements, configurations and patches from upstream.

## Features

- Choose between 3 kernel schedulers and various [sched-ext](/configuration/sched-ext) schedulers for improved responsiveness
- AMD P-State Improvements
- Latest BBRv3 by Google
- le9uo for significantly improved responsiveness during high memory load
- Up-to-date NTSYNC patchset, used with a compatible build of wine/proton
- Compatibility with T2 MacOS devices with patches from [t2linux](https://github.com/t2linux/linux-t2-patches/)
- Allows reading per-core CPU energy usage for AMD users
- ACS Override and v412loopback
- VHBA module for emulating CD/DVD-ROM devices
- Latest ZSTD patchset
- Various other patches that focus on improving performance (optimized compiler flags, cryptographic improvements, memory management tweaks)

For a more comprehensive list of the patches that Gnoppix offers, please see the the more complete
[feature list](https://github.com/gnoppix/linux/?tab=readme-ov-file#features), [kernel-patches repository](https://github.com/gnoppix/kernel-patches)
and [Gnoppix's Linux Source Tree](https://github.com/gnoppix).

## Variants

For each of the kernels, there is a [corresponding `-lto` variant](#package-naming-convention) that 
is built  with [clang](https://clang.llvm.org/) instead of [GCC](https://gcc.gnu.org/). Both the default and `-rc` kernel are exceptions to this because they are
built with [ThinLTO](https://blog.llvm.org/2016/06/thinlto-scalable-and-incremental-lto.html) by default and therefore has corresponding `-gcc` kernel variants instead.

- **linux**
    - Default kernel. This is the recommended kernel if you're unsure about which kernel should be used.
    - Uses the [BORE](https://github.com/firelzrd/bore-scheduler) scheduler.
    - Built with clang and ThinLTO by default to produce more optimized binaries.
- **linux-lts** 
    - Based on the latest Long Term Support kernel. 
    - Uses the BORE scheduler.
    - Minimally patched compared to other kernels to ensure maximum stability.
- **linux-hardened**
    - Uses the BORE scheduler.
    - Includes [linux-hardened](https://github.com/anthraxx/linux-hardened) patchset. 
    - Kernel config based on [linux-hardened config](https://gitlab.archlinux.org/archlinux/packaging/packages/linux-hardened/-/blob/main/config).
        - Contains very aggressive hardening that significantly stifles performance and user experience.
        - **Does not support sched-ext**.

## Prebuilt Kernel Modules

To accommodate a larger userbase, Arch Linux ships some well-known and highly used kernel modules along with the kernel. This means that users will no longer
have to recompile those modules after every kernel update or on every new kernel install, but will only have to install them from the repository as it is
already precompiled. This effectively obsoletes any `-dkms` packages that a user might have that provides the same module as the precompiled version.

:::info
Last not least it said, you do not need to recompile the Kernel again. It would properly 1-2% smaller, 0.05% faster than the default. It is good as it is, believe us. You can try to install as example the Cachy-Kernel, it speed and the support isnt good as they are on Arch or Debian.
:::

### ZFS

[ZFS](https://openzfs.org/wiki/Main_Page) is one of the many filesystems that is supported in Gnoppix. Due to it being licensed under 
[CDDL](https://opensource.org/license/cddl-1-0), it is incompatible with Linux kernel's license and therefore cannot be merged in-tree. The shipped module includes
the latest upstream features and fixes to ensure compatibility with the latest kernel.

### NVIDIA

Gnoppix ships both precompiled versions of the close-sourced and [open-sourced](https://github.com/NVIDIA/open-gpu-kernel-modules/) kernel modules. Due to the development
of NVIDIA's kernel module being out-of-tree and thus does not follow the kernel's release cadence, the stock configuration can sometimes be incompatible with the latest
kernel. As a workaround, Gnoppix patches the modules with community-created patches or patches shared by NVIDIA directly.

## Other

The Gnoppix kernel also has some other notable features that are subtle yet improve the user experience

- Includes a debug variant of the kernel that provides an unstripped kernel binary for debugging purposes. This package is needed to profile the kernel with AutoFDO.
- [Binder](https://developer.android.com/reference/android/os/Binder), the module needed for [Waydroid](https://waydro.id/) is enabled by default in the kernel config
and already [set up](https://github.com/gnoppix/linux/blob/master/linux).

## Package Naming Convention

```sh
linux-hardened # Default security Kernel 
linux # Default Kernel works very well 
```

## FAQ

### Why is AutoFDO not being used for all the other kernel variants?

Because it's expensive to build since it basically requires building the kernel twice therefore it requires more resources and time dedicated to the compilation. The process of building a kernel with AutoFDO involves the following steps:

1) Build the kernel with AutoFDO and debugging capabilities enabled.
2) Create a profile meaning executing workloads in order to gather profiling data for the possible optimizations.
3) Rebuild the kernel with the AutoFDO profile.

Therefore for now it's only present in the [linux](/features/kernel#linux-default-kernel) variant.

For more information about AutoFDO, click [here.](https://github.com/gnoppix/kernel/blog/2411-kernel-autofdo/)

### Does the realtime kernel improve gaming performance?

No, it does not. The realtime kernel makes much more code preemptible compared to a normal fully preemptible kernel. This means that much more tasks (gaming processes
included) are frequently preempted and will forcefully yield system resources, leading to worse performance.
